
import 'Model.dart';

class Setting extends Model {
  String? appName;
  String? imageBaseUrl;
  String? apiUrl;
  String? apiUrlForDataWithFile;
  String? accentColor;
  String? secondColor;
  String? mainColor;
  String? scaffoldColor;
  String? appVersion;
  String? neutralColor;
  String? googleMapApiKey;
  String? notificationUrl;
  String? appSecretKey;

  Setting(
      {this.appName,
        this.apiUrl,
        this.apiUrlForDataWithFile,
        this.accentColor,
        this.secondColor,
        this.mainColor,
        this.scaffoldColor,
        this.appVersion,
        this.neutralColor,
        this.notificationUrl,
        this.appSecretKey,
        this.googleMapApiKey});

  @override
  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['appName'] = appName;
    data['imageBaseUrl'] = imageBaseUrl;
    data['apiUrl'] = apiUrl;
    data['apiUrlForDataWithFile'] = apiUrlForDataWithFile;
    data['accentColor'] = accentColor;
    data['secondColor'] = secondColor;
    data['mainColor'] = mainColor;
    data['scaffoldColor'] = scaffoldColor;
    data['appVersion'] = appVersion;
    data['neutralColor'] = neutralColor;
    data['googleMapApiKey'] = googleMapApiKey;
    data['notificationUrl'] = notificationUrl;
    data['appSecretKey'] = appSecretKey;
    return data;
  }

  Setting.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    appName = stringFromJson(json, 'appName');
    imageBaseUrl = stringFromJson(json, 'imageBaseUrl');
    apiUrl = stringFromJson(json, 'apiUrl');
    apiUrlForDataWithFile = stringFromJson(json, 'apiUrlForDataWithFile');
    accentColor = stringFromJson(json, 'accentColor');
    secondColor = stringFromJson(json, 'secondColor');
    mainColor = stringFromJson(json, 'mainColor');
    scaffoldColor = stringFromJson(json, 'scaffoldColor');
    appVersion = stringFromJson(json, 'appVersion');
    neutralColor = stringFromJson(json, 'neutralColor');
    googleMapApiKey = stringFromJson(json, 'googleMapApiKey');
    notificationUrl = stringFromJson(json, 'notificationUrl');
    appSecretKey = stringFromJson(json, 'appSecretKey');
  }

  @override
  String toString() {
    return 'Setting{appName: $appName, apiUrl: $apiUrl, apiUrlForDataWithFile: $apiUrlForDataWithFile, accentColor: $accentColor, secondColor: $secondColor, mainColor: $mainColor, scaffoldColor: $scaffoldColor, appVersion: $appVersion, neutralColor: $neutralColor, googleMapApiKey: $googleMapApiKey, notificationUrl: $notificationUrl, appSecretKey: $appSecretKey}';
  }
}
