# Evangelho Diário — Textos para CV, Portfolio y LinkedIn

> Guía lista para copiar. Rol: **primera versión + mantenimiento y evolución técnica**.  
> La UI actual fue en gran medida rediseñada por otros colaboradores; el foco propio es arquitectura, datos, integraciones y releases.

---

## CV (versión corta)

**Evangelho Diário** — Flutter Developer  
*Primera versión + mantenimiento y evolución en producción*

- Desarrollé la primera versión de la app móvil Flutter (evangelio diario, oraciones, rosario).
- Mantuve y evolucioné la app en producción: releases iOS/Android, Firebase y configuración de tiendas.
- Migré persistencia de Firestore a MySQL; configuración con `.env` y entorno local con Docker.
- Reorganicé el código a arquitectura feature-first (`app` / `core` / `features`).
- Mejoré estabilidad (mensajería global, sync, builds) e integré Firebase Analytics.

**Stack:** Flutter · Dart · GetX · Firebase · MySQL · Docker · SQLite

---

## LinkedIn — Experiencia / Proyecto

**Evangelho Diário | Flutter Developer**  
*Primera versión · Mantenimiento · Evolución en producción*

App móvil católica en Flutter (iOS y Android) con evangelio del día, oraciones, rosario y envío de intenciones.

Fui responsable de la **primera versión** y, más adelante, del **mantenimiento y la evolución técnica** en producción. Gran parte de la UI actual fue rediseñada por otros colaboradores; mi foco estuvo en arquitectura, datos, integraciones y publicación en tiendas.

**Aportes principales**
- Primera versión de la app y continuidad del producto en stores
- Migración de Firestore a MySQL y entorno local con Docker
- Refactor a arquitectura feature-first
- Integración Firebase (Analytics, configuración de proyectos)
- Releases y estabilización de builds iOS/Android

**Tecnologías:** Flutter, Dart, GetX, Firebase, MySQL, Docker, SQLite

---

## LinkedIn — About (1 frase)

> Flutter developer: primera versión de Evangelho Diário y evolución técnica en producción (arquitectura, MySQL, Firebase, releases iOS/Android).

---

## Portfolio — Caso de estudio

### Evangelho Diário

**App Flutter en producción** (iOS / Android) para lectura diaria del evangelio, oraciones y rosario.

**Mi rol**  
Desarrollé la **primera versión** de la aplicación y después asumí el **mantenimiento y la evolución técnica**. La UI actual fue en gran medida rediseñada por otros; mi contribución se centró en lógica de negocio, arquitectura, datos, integraciones y despliegue.

**Qué aporté**
- Base de la app y continuidad del producto en tiendas
- Migración de datos (Firestore → MySQL) y variables de entorno
- Arquitectura feature-first para facilitar mantenimiento
- Firebase Analytics y ajustes de proyectos iOS/Android
- Mejoras de estabilidad y proceso de release

**Stack**  
Flutter · Dart · GetX · Firebase · MySQL · Docker · SQLite

**Nota sobre capturas**  
Las imágenes muestran la app en producción. Reflejan el producto final; no el diseño UI como autoría exclusiva.

---

## Fragmentos de código (para portfolio / entrevista)

Útiles para mostrar en portfolio (bloque “Código destacado”) o para hablar en entrevista.  
**No pegar bloques largos en el CV en PDF**; en CV basta el bullet técnico.

### 1. Bootstrap: `.env` + Firebase + Analytics

Inicialización limpia de la app con secrets fuera del código.

```dart
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dotenv.load(fileName: '.env');
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  FirebaseAnalytics.instance;
  await GetStorage.init();
  runApp(const MyApp());
}
```

**Qué demuestra:** configuración segura, Firebase, arranque de app en producción.

---

### 2. Conexión MySQL configurable (migración desde Firestore)

Helper de conexión con host, SSL y credenciales desde variables de entorno.

```dart
class MySqlConnectionHelper {
  static Future<MySQLConnection> open() async {
    final conn = await MySQLConnection.createConnection(
      host: _env('MYSQL_HOST', defaultValue: '127.0.0.1'),
      port: _envInt('MYSQL_PORT', defaultValue: 3306),
      userName: _env('MYSQL_USER'),
      password: _env('MYSQL_PASSWORD'),
      databaseName: _env('MYSQL_DATABASE'),
      secure: _envBool('MYSQL_SECURE', defaultValue: true),
    );
    await conn.connect();
    return conn;
  }
}
```

**Qué demuestra:** backend/datos, `.env`, SSL, pensamiento de entornos (local vs producción).

---

### 3. Persistencia de intenciones + metadatos de contexto

Guardado en MySQL con métricas de dispositivo/geo para analítica de producto.

```dart
await conn.execute(
  'INSERT INTO apk_intencoes '
  '(nome, email, ddi, telefone, pedido, data_hora_entrada, '
  'pais_ip, plataforma, app_version, ip_publica) '
  'VALUES (:nome, :email, :ddi, :telefone, :pedido, UTC_TIMESTAMP(), '
  ':pais_ip, :plataforma, :app_version, :ip_publica)',
  {
    'nome': dto.nome,
    'email': dto.email,
    // ... resto de campos y metadata
  },
);
```

**Qué demuestra:** servicios de datos, SQL parametrizado, telemetría de contexto.

---

### 4. Arquitectura feature-first (rutas)

Navegación organizada por features (`gospel`, `prayers`, `rezem`, `rosary`…).

```dart
class AppRoutes {
  static const home = '/home';
  static const evangelho = '/evangelho';
  static const rosario = '/rosario';
  static const rezem = '/rezem';
  // ...

  static List<GetPage<dynamic>> get pages => [
        GetPage(name: home, page: () => const HomePage()),
        GetPage(name: evangelho, page: () => const GospelPage()),
        GetPage(name: rezem, page: () => const RezemPage()),
        // ...
      ];
}
```

**Estructura del proyecto:**

```text
lib/
  app/          # bootstrap, routes, bindings
  core/         # network, theme, widgets compartidos
  features/     # gospel, prayers, rezem, rosary, ...
```

**Qué demuestra:** refactor, mantenibilidad, organización escalable.

---

### 5. Mensajería global (estabilidad UI)

Sustitución de snackbars frágiles por `ScaffoldMessenger` a nivel raíz.

```dart
final GlobalKey<ScaffoldMessengerState> rootScaffoldMessengerKey =
    GlobalKey<ScaffoldMessengerState>();

void showRootSnackBar({
  required Widget content,
  Color? backgroundColor,
  Duration duration = const Duration(seconds: 2),
}) {
  rootScaffoldMessengerKey.currentState?.showSnackBar(
    SnackBar(
      content: content,
      backgroundColor: backgroundColor,
      behavior: SnackBarBehavior.floating,
      duration: duration,
    ),
  );
}
```

**Qué demuestra:** debugging de crashes, mejora de UX técnica, ownership del código legacy.

---

## Cómo usarlo por canal

| Canal | Qué usar |
|--------|----------|
| **CV (PDF)** | Bloque corto + 4–5 bullets. Sin capturas grandes ni código. |
| **LinkedIn** | Experiencia completa + frase del About. Link al portfolio. |
| **Portfolio** | Caso de estudio + 3–5 capturas + 1–2 snippets de código. |

---

## Frase lista para entrevista

> Hice la primera versión de la app. Después se rediseñó gran parte de la UI; yo seguí con mantenimiento, arquitectura, migraciones de datos (Firestore → MySQL) y publicación en tiendas.
