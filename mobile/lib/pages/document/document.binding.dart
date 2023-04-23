import 'package:get/get.dart';

import 'document.controller.dart';

class DocumentBinding extends Bindings{
  @override
  void dependencies() {
     Get.lazyPut(() => DocumentController());
  }
}