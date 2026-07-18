# Congresso Terciarios — Material para CV y portfolio

App Flutter para control de asistencia en un congreso: escaneo de QR, almacenamiento offline y sincronización híbrida con MySQL.

---

## Versión CV (corta)

**Congresso Terciarios** — App Android (Flutter) de control de asistencia por QR en eventos, con arquitectura offline-first (Hive), sincronización bidireccional con MySQL y tareas en segundo plano (Workmanager). Incluye detección de conectividad, merge de asistencias locales/remotas e infraestructura Docker para la base de datos.

### Variante en una línea

App Flutter offline-first para asistencia por QR en congresos: Hive + sync híbrido (foreground/background) con MySQL y Docker.

### Bullets para CV (elige 2–3)

- Desarrollé una app Flutter de asistencia por QR con modo offline (Hive) y sincronización bidireccional con MySQL.
- Implementé sync híbrido: auto-sync tras escaneo/reconexión, periódico en primer plano y Workmanager en background.
- Diseñé capas `app` / `core` / `data` / `presentation` y orquestación de estado de sync (pending / syncing / error) visible en UI.
- Aprovisioné MySQL 8 con Docker Compose, schema, seed de eventos e importación de participantes desde CSV.

---

## Versión portfolio (extensa)

### Contexto

En un congreso con cientos de participantes, el control de asistencia debe ser rápido (colas, escáner de QR) y fiable aunque la red falle. La app se usa en dispositivos Android en la entrada de cada evento (ponencias, comidas, entrega de credencial).

### Problema

- Registrar asistencia al instante al escanear un QR.
- Seguir operando sin conexión y no perder lecturas.
- Reconciliar datos entre varios dispositivos y un servidor MySQL.
- Dar feedback claro al operador (éxito/error, estado de sync).

### Solución

**Congresso Terciarios** es una app Flutter que:

1. Mantiene participantes y eventos en **Hive** (caché local).
2. Al escanear un QR válido, marca la asistencia en el evento seleccionado y encola sync.
3. Cuando hay red, **sube** asistencias pendientes (`INSERT IGNORE`) y **baja** el estado remoto, fusionando con lo local.
4. Sincroniza en primer plano (tras QR, al reconectar, cada ~5 min) y en segundo plano con **Workmanager** (~15 min).
5. Muestra una barra de estado de sync (synced / pending / syncing / error) con fases visibles (conectar → subir → bajar).

### Stack

| Área | Tecnología |
|------|------------|
| Cliente | Flutter, GetX, Hive |
| QR / UX | `qr_code_scanner`, `audioplayers`, wakelock |
| Remoto | MySQL 8 (`mysql1`), `flutter_dotenv` |
| Sync | `connectivity_plus`, Workmanager |
| Infra | Docker Compose, scripts SQL/CSV |

### Arquitectura

```
lib/
  app/           → bootstrap, DI, MaterialApp
  core/          → env, sync en background, fases de sync
  data/          → MySQL, Hive, repositorio, DTOs, export CSV
  presentation/  → páginas, controladores, widgets
```

Dominio: `participants`, `events`, `attendances` (clave compuesta participante + evento).

### Resultados / impacto técnico

- Arranque usable con datos locales aunque MySQL no esté disponible.
- Asistencias no se pierden offline; se marcan como pendientes y se empujan al recuperar red.
- Lock de sync evita condiciones de carrera entre UI y background.
- Infra reproducible: `docker compose up` crea schema, 9 eventos y ~237 participantes desde CSV.

### Palabras clave

Flutter · Dart · offline-first · Hive · MySQL · sincronización · Workmanager · GetX · QR · Docker · clean architecture

---

## Código relevante para el portfolio

Fragmentos que mejor muestran el valor técnico del proyecto. En el portfolio, acompáñalos con 1–2 capturas (lista de participantes + escáner QR + barra de sync).

### 1. Orquestación de sync (upload → download + merge)

`CongressRepository` sube asistencias locales y luego descarga el estado remoto, combinando ambos mundos para no perder lecturas offline.

```dart
Future<bool> sync({
  SyncPhaseCallback? onPhase,
  bool refreshControllers = true,
}) async {
  try {
    onPhase?.call(SyncPhase.connecting);
    await _mysql.connect();

    onPhase?.call(SyncPhase.uploading);
    await _pushLocalAttendances();

    onPhase?.call(SyncPhase.downloading);
    return download(combine: true, refreshControllers: refreshControllers);
  } catch (_) {
    await _mysql.close();
    return false;
  }
}

Future<void> _pushLocalAttendances() async {
  final events = _storageService.readEvents('db');
  if (events == null) return;

  final conn = await _mysql.connect();
  for (final event in events.values) {
    if (event.users.isEmpty) continue;

    final placeholders =
        List.filled(event.users.length, '(?, ?)').join(', ');
    final values = <Object?>[];
    for (final participantId in event.users) {
      values.add(participantId);
      values.add(event.id);
    }

    await conn.query(
      'INSERT IGNORE INTO attendances (participant_id, event_id) VALUES $placeholders',
      values,
    );
  }
}
```

**Por qué mostrarlo:** sync bidireccional, batch SQL y fases observables desde la UI.

---

### 2. Sync híbrido en primer plano

`SyncController` reacciona a conectividad, ciclo de vida de la app y pendientes locales (auto-sync a los 2 s tras un QR).

```dart
Future<void> markPending() async {
  await _pendingSync.markPending();
  hasPending.value = true;
  if (status.value != SyncStatus.syncing) {
    status.value = SyncStatus.pending;
  }
  _scheduleAutoSync();
}

Future<void> sync() async {
  if (status.value == SyncStatus.syncing) return;
  if (!isOnline.value) return;
  if (!_syncMetadata.tryAcquireSyncLock()) return;

  status.value = SyncStatus.syncing;
  phase.value = SyncPhase.connecting;

  var success = false;
  try {
    success = await _repository.sync(
      onPhase: (p) => phase.value = p,
    );
  } finally {
    await _syncMetadata.releaseSyncLock();
  }

  if (success) {
    await _pendingSync.clearPending();
    hasPending.value = false;
    status.value = SyncStatus.synced;
    await _syncMetadata.setLastSyncCompletedAt(DateTime.now());
    // ... reprograma sync periódico
  } else {
    status.value = SyncStatus.error;
  }
}
```

**Por qué mostrarlo:** máquina de estados de sync + lock + triggers (QR, red, timer).

---

### 3. Sync en segundo plano (Workmanager)

Misma capa de datos, pero sin refrescar la UI; limpia DI al terminar.

```dart
@pragma('vm:entry-point')
void callbackDispatcher() {
  Workmanager().executeTask((task, inputData) async {
    if (task == backgroundSyncTaskName) {
      return BackgroundSyncRunner.run();
    }
    return false;
  });
}

class BackgroundSyncExecutor {
  Future<bool> execute() async {
    if (!metadata.tryAcquireSyncLock()) return false;

    try {
      final success = await sync(refreshControllers: false);
      if (success) {
        await clearPending();
        await metadata.setLastSyncCompletedAt(DateTime.now());
      }
      return success;
    } finally {
      await metadata.releaseSyncLock();
      await closeMysql();
    }
  }
}
```

**Por qué mostrarlo:** background isolates + reutilización del repositorio + exclusión mutua con el foreground.

---

### 4. Flujo QR → asistencia local → pendiente de sync

Escaneo, validación del participante, feedback sonoro y marca de sync pendiente.

```dart
controller.scannedDataStream.listen((scanData) async {
  controller.stopCamera();
  var user = userController.getUserById(_getIdUser(scanData.code));
  if (user != null) {
    eventController.saveParticipation(user.id);
    await player.play(AssetSource("sound/correct.mp3"));
    // bottom sheet de éxito → resume camera
  } else {
    await player.play(AssetSource("sound/error.mp3"));
    // bottom sheet de error
  }
});

// En EventController:
void saveParticipation(String idUser) {
  final event = _selectedEvent.value;
  if (event != null && !event.users.contains(idUser)) {
    event.users.add(idUser);
    _storageService.saveEvent('db', event);
    // ...
    Get.find<SyncController>().markPending();
  }
}
```

**Por qué mostrarlo:** el happy path del producto (UX operativa + offline-first).

---

### 5. Modelo de datos (MySQL)

```sql
CREATE TABLE participants (
  id         VARCHAR(10)  NOT NULL PRIMARY KEY,
  name       VARCHAR(255) NULL,
  turno      VARCHAR(50)  NULL,
  language   VARCHAR(50)  NOT NULL DEFAULT '',
  status     VARCHAR(50)  NOT NULL DEFAULT '',
  sodalicio  VARCHAR(100) NOT NULL DEFAULT ''
);

CREATE TABLE attendances (
  participant_id VARCHAR(10) NOT NULL,
  event_id       VARCHAR(50) NOT NULL,
  checked_in_at  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (participant_id, event_id),
  FOREIGN KEY (participant_id) REFERENCES participants(id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);
```

**Por qué mostrarlo:** dominio claro y diseño relacional alineado con el caso de uso.

---

## Sugerencia de estructura en el portfolio

1. **Título + tagline** (versión CV de una línea).
2. **Problema → solución** (2 párrafos).
3. **Stack** (chips o lista corta).
4. **Capturas** (home, QR, barra sync).
5. **2–3 snippets** (recomiendo: sync del repositorio + BackgroundSync + QR).
6. **Link** al repo (si es público) o demo.

---

## Meta

| Campo | Valor |
|-------|--------|
| Nombre | Congresso Terciarios |
| Tipo | App móvil Android |
| Rol sugerido | Full-stack móvil / Flutter |
| Año | 2024–2025 |
