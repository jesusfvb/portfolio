export interface ProjectCodeSnippet {
  id: string;
  code: string;
}

export const AUTO_CONTACT_SNIPPETS: ProjectCodeSnippet[] = [
  {
    id: "orchestrator",
    code: `export function useSyncOrchestrator() {
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
}`,
  },
  {
    id: "pagination",
    code: `export default async function getContactsFromApiAction(): Promise<Contact[]> {
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
}`,
  },
  {
    id: "deduplication",
    code: `export default async function saveContactsToDeviceAction(
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
}`,
  },
  {
    id: "syncMutex",
    code: `const performSync = useCallback(async (origin: "manual" | "auto") => {
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
}, [permissionGranted, requestPermission]);`,
  },
  {
    id: "apiUrl",
    code: `export function buildContactsApiUrl(baseUrl: string, page = 1, limit = 500): string {
  const origin = normalizeApiBaseUrl(baseUrl);
  const safePage = Math.max(1, Math.round(page));
  const safeLimit = Math.min(1000, Math.max(1, Math.round(limit)));

  return \`\${origin}/api/contacts/{sessionId}?page=\${safePage}&limit=\${safeLimit}&search=whatsapp\`;
}`,
  },
];

export const PROJECT_CODE_SNIPPETS: Record<string, ProjectCodeSnippet[]> = {
  "auto-contact": AUTO_CONTACT_SNIPPETS,
};
