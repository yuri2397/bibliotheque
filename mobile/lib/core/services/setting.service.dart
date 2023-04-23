
import 'package:get/get.dart';
import 'package:mobile/models/setting.model.dart';

class SettingsService extends GetxService {
  Rx<Setting> setting = Rx<Setting>(Setting());

  SettingsService(dynamic json) {
    setting.value = Setting.fromJson(json);
  }

}