import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get_navigation/src/routes/transitions_type.dart';
import 'package:mobile/shared/functions.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

import 'core/routes/routes.dart';
import 'core/routes/routing.dart';


void main() {
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp])
      .then((value) => {
            RefreshConfiguration(
              footerTriggerDistance: 15,
              dragSpeedRatio: 0.91,
              headerBuilder: () => const MaterialClassicHeader(),
              footerBuilder: () => const ClassicFooter(),
              enableLoadingWhenNoData: true,
              enableRefreshVibrate: true,
              enableLoadMoreVibrate: true,
              shouldFooterFollowWhenNotFull: (state) {
                return false;
              },

              child: GetMaterialApp(
                  onReady: () async {},
                  supportedLocales: const [
                    Locale('fr', 'FR'),
                  ],
                  initialRoute: AppRoute.initial,
                  getPages: routes,
                  title: 'Bibliothéque',
                  defaultTransition: Transition.cupertino,
                  theme: appThem(),
                  navigatorKey: Get.key,
                  scrollBehavior: MyBehavior(),
                  routingCallback: (routing) {
                    Get.find<TanelAnalytic>()
                        .analytics
                        .setCurrentScreen(screenName: routing!.current);
                  }),,
            )
          });
}
