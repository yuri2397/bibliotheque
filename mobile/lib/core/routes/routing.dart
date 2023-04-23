import 'package:get/get.dart';
import 'package:mobile/core/routes/routes.dart';
import 'package:mobile/pages/home/home.binding.dart';
import 'package:mobile/pages/home/home.screen.dart';

List<GetPage> routes = [
  GetPage(
    name: Route.home,
    page: () => const HomeScreen(),
    binding: HomeBinding(),
  ),
];