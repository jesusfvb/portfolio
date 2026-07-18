import type { ProjectCodeSnippet } from "./types";

export const EVANGELHO_DIARIO_SNIPPETS: ProjectCodeSnippet[] = [
  {
    id: "bootstrap",
    code: `Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dotenv.load(fileName: '.env');
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  FirebaseAnalytics.instance;
  await GetStorage.init();
  runApp(const MyApp());
}`,
  },
  {
    id: "mysqlConnection",
    code: `class MySqlConnectionHelper {
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
}`,
  },
  {
    id: "featureRoutes",
    code: `class AppRoutes {
  static const home = '/home';
  static const evangelho = '/evangelho';
  static const rosario = '/rosario';
  static const rezem = '/rezem';

  static List<GetPage<dynamic>> get pages => [
        GetPage(name: home, page: () => const HomePage()),
        GetPage(name: evangelho, page: () => const GospelPage()),
        GetPage(name: rezem, page: () => const RezemPage()),
      ];
}`,
  },
  {
    id: "globalMessaging",
    code: `final GlobalKey<ScaffoldMessengerState> rootScaffoldMessengerKey =
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
}`,
  },
];
