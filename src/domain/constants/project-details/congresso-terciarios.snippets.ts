import type { ProjectCodeSnippet } from "./types";

export const CONGRESSO_TERCIARIOS_SNIPPETS: ProjectCodeSnippet[] = [
  {
    id: "syncOrchestration",
    code: `Future<bool> sync({
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
}`,
  },
  {
    id: "hybridSync",
    code: `Future<void> markPending() async {
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
  } else {
    status.value = SyncStatus.error;
  }
}`,
  },
  {
    id: "backgroundSync",
    code: `@pragma('vm:entry-point')
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
}`,
  },
  {
    id: "qrFlow",
    code: `controller.scannedDataStream.listen((scanData) async {
  controller.stopCamera();
  var user = userController.getUserById(_getIdUser(scanData.code));
  if (user != null) {
    eventController.saveParticipation(user.id);
    await player.play(AssetSource("sound/correct.mp3"));
  } else {
    await player.play(AssetSource("sound/error.mp3"));
  }
});

void saveParticipation(String idUser) {
  final event = _selectedEvent.value;
  if (event != null && !event.users.contains(idUser)) {
    event.users.add(idUser);
    _storageService.saveEvent('db', event);
    Get.find<SyncController>().markPending();
  }
}`,
  },
];
