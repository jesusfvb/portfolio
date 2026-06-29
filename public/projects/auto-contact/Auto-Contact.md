# Auto-Contact — App Android de sincronización de contactos

## Resumen para CV (1–2 líneas)

App móvil Android desarrollada con **React Native / Expo SDK 56** que sincroniza contactos desde una API REST hacia la agenda del dispositivo. Incluye auto-sync en primer plano y background, configuración persistente, paginación de API y tests unitarios.

---

## Descripción ampliada (párrafo para portfolio)

Diseño e implementación de una aplicación Android orientada a automatizar la importación de contactos de WhatsApp desde un backend externo. La app compara números con la agenda local y **solo crea contactos nuevos**, evitando duplicados. La arquitectura separa acciones, servicios y hooks compuestos; el estado (settings, logs, intervalo) persiste en AsyncStorage. El scheduler coordina sync manual, timer configurable, tarea en background (`expo-background-task`) y re-sync al volver a la app.

---

## Logros / responsabilidades (bullets para CV)

- Arquitectura modular con **hooks compuestos** (`useSyncOrchestrator`) que orquestan permisos, settings, sync y scheduler.
- Integración REST con **paginación secuencial** (500 registros/página), deduplicación y manejo de errores fail-fast.
- **Auto-sync multi-canal**: foreground (intervalo 1 min–1 h), background (mín. 15 min Android) y resume al reabrir la app.
- Panel de **Settings** in-app: URL del servidor, API key, límite de logs, intervalo y test de conexión.
- Persistencia local con AsyncStorage y logs de actividad en tiempo real.
- Tests Jest de la capa de fetch (multi-página, dedupe, errores).
- Build de release con **EAS** (APK optimizado: minify, shrink resources, arm64).

---

## Stack tecnológico

`TypeScript` · `React Native 0.85` · `Expo 56` · `NativeWind` · `AsyncStorage` · `expo-contacts` · `expo-background-task` · `Jest` · `EAS Build`

---

## Fragmentos de código (sin datos sensibles)

### 1. Orquestación con hooks compuestos

```typescript
export function useSyncOrchestrator() {
  const { apiBaseUrl, apiKey, saveSettings } = useAppSettings();
  const { logs, selectedInterval, addLog } = usePersistedSyncState({ maxPersistedLogs });
  const { permissionGranted, requestPermission } = useContactPermission();
  const { syncing, performSync } = useContactsSync({ addLog, permissionGranted, requestPermission });
  const { countdownLabel, backgroundRegistered } = useAutoSyncScheduler({
    selectedInterval,
    performSync,
    addLog,
  });

  const isSyncActive = permissionGranted && backgroundRegistered;
  // expone handlers: sync manual, settings, permisos…
}
```

### 2. Paginación y deduplicación de la API

```typescript
export default async function getContactsFromApiAction(): Promise<Contact[]> {
  const { apiBaseUrl } = await getSavedAppSettings();
  const apiKey = await getSavedApiKey();

  const firstPage = await fetchContactsPage(apiBaseUrl, apiKey, 1);
  const totalPages = resolveTotalPages(firstPage.meta);
  const allItems = [...firstPage.data];

  for (let page = 2; page <= totalPages; page++) {
    const pageData = await fetchContactsPage(apiBaseUrl, apiKey, page);
    allItems.push(...pageData.data);
  }

  return dedupeApiContactsByPhone(
    allItems.map(parseApiResponse).filter(Boolean)
  );
}
```

### 3. Guardado incremental sin duplicados

```typescript
export default async function saveContactsToDeviceAction(
  contacts: Contact[],
  localContacts: Contact[],
): Promise<SaveContactsResult> {
  const existingPhones = new Set(
    localContacts.map((c) => normalizePhone(c.phone)).filter(Boolean)
  );

  for (const contact of contacts) {
    const phone = normalizePhone(contact.phone);
    if (!phone || existingPhones.has(phone)) continue;

    await ExpoContact.create({
      givenName: contact.name ?? undefined,
      phones: [{ number: phone }],
    });
    existingPhones.add(phone);
  }
}
```

### 4. Mutex de sync y permisos

```typescript
const performSync = useCallback(async (origin: "manual" | "auto") => {
  if (syncingRef.current) return;
  syncingRef.current = true;

  try {
    if (!permissionGranted && origin === "manual") {
      const granted = await requestPermission();
      if (!granted) return;
    }
    const { created } = await contactsService.syncWithApi();
    // logging por contacto creado o warning
  } finally {
    syncingRef.current = false;
    setSyncing(false);
  }
}, [permissionGranted, requestPermission]);
```

### 5. Construcción segura de URLs de API

```typescript
export function buildContactsApiUrl(baseUrl: string, page = 1, limit = 500): string {
  const origin = normalizeApiBaseUrl(baseUrl);
  const safePage = Math.max(1, Math.round(page));
  const safeLimit = Math.min(1000, Math.max(1, Math.round(limit)));

  return `${origin}/api/contacts/{sessionId}?page=${safePage}&limit=${safeLimit}&search=whatsapp`;
}
```

---

## Versión ultra-corta (una línea en el CV)

> **Auto-Contact** — App Android (RN/Expo) que sincroniza contactos vía API REST con paginación, auto-sync foreground/background y settings in-app; arquitectura por hooks, TypeScript y tests Jest.
