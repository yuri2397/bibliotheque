import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'colors.dart';

class Ui {
  static SnackbarController successSnackBar(
      {String title = 'Success',
        required String message,
        SnackPosition snackPosition = SnackPosition.BOTTOM,
        IconData? icon}) {
    return Get.snackbar(
      title,
      message,
      titleText: Text(title.tr,
          style: Get.textTheme.headline6
              ?.merge(TextStyle(color: Get.textTheme.caption!.color))),
      messageText: Text(message,
          style: Get.textTheme.caption
              ?.merge(TextStyle(color: Get.textTheme.caption!.color))),
      snackPosition: snackPosition,
      margin: const EdgeInsets.all(20),
      backgroundColor: Color(successColor),
      icon: icon != null
          ? Icon(icon, size: 32, color: Get.textTheme.caption!.color)
          : null,
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
      borderRadius: 8,
      dismissDirection: DismissDirection.horizontal,
      duration: const Duration(seconds: 5),
    );
  }

  static SnackbarController errorSnackBar(
      {String title = 'Error',
        required String message,
        SnackPosition snackPosition = SnackPosition.BOTTOM,
        IconData? icon}) {
    return Get.snackbar(
      title,
      message,
      titleText: Text(title.tr,
          style: Get.textTheme.headline6
              ?.merge(TextStyle(color: Get.textTheme.caption!.color))),
      messageText: Text(message,
          style: Get.textTheme.caption
              ?.merge(TextStyle(color: Get.textTheme.caption!.color))),
      snackPosition: snackPosition,
      margin: const EdgeInsets.all(20),
      backgroundColor: Color(dangerColor),
      icon: icon != null
          ? Icon(icon, size: 32, color: Get.textTheme.caption!.color)
          : null,
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
      borderRadius: 8,
      dismissDirection: DismissDirection.horizontal,
      duration: const Duration(seconds: 5),
    );
  }

  static SnackbarController defaultSnackBar(
      {String title = 'Alert',
        required String message,
        SnackPosition snackPosition = SnackPosition.BOTTOM,
        IconData? icon}) {
    return Get.snackbar(
      title,
      message,
      titleText: Text(title.tr,
          style: Get.textTheme.headline6
              ?.merge(TextStyle(color: Get.textTheme.caption!.color))),
      messageText: Text(message,
          style: Get.textTheme.caption
              ?.merge(TextStyle(color: Get.textTheme.caption!.color))),
      snackPosition: snackPosition,
      margin: const EdgeInsets.all(20),
      backgroundColor: Color(primaryColor),
      icon: icon != null
          ? Icon(icon, size: 32, color: Get.textTheme.caption!.color)
          : null,
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
      borderRadius: 8,
      dismissDirection: DismissDirection.horizontal,
      duration: const Duration(seconds: 5),
    );
  }

  static GetSnackBar notificationSnackBar(
      {String title = 'Notification',
        required String message,
        OnTap? onTap,
        Widget? mainButton}) {
    return GetSnackBar(
      onTap: onTap,
      mainButton: mainButton,
      titleText: Text(title.tr,
          style: Get.textTheme.headline6
              ?.merge(TextStyle(color: Get.theme.hintColor))),
      messageText: Text(message,
          style: Get.textTheme.caption
              ?.merge(TextStyle(color: Get.theme.focusColor))),
      snackPosition: SnackPosition.TOP,
      margin: const EdgeInsets.all(20),
      backgroundColor: Get.theme.primaryColor,
      borderColor: Get.theme.focusColor.withOpacity(0.1),
      icon:
      Icon(Icons.notifications_none, size: 32, color: Get.theme.hintColor),
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
      borderRadius: 8,
      duration: const Duration(seconds: 5),
    );
  }

  static Color parseColor(String hexCode, {double opacity = 1}) {
    try {
      return Color(int.parse(hexCode.replaceAll("#", "0xFF")))
          .withOpacity(opacity);
    } catch (e) {
      return const Color(0xFFCCCCCC).withOpacity(opacity);
    }
  }

  static List<Icon> getStarsList(double rate, {double size = 18}) {
    var list = <Icon>[];
    list = List.generate(rate.floor(), (index) {
      return Icon(Icons.star, size: size, color: Color(warnColor));
    });
    if (rate - rate.floor() > 0) {
      list.add(Icon(Icons.star_half, size: size, color: Color(warnColor)));
    }
    list.addAll(
        List.generate(5 - rate.floor() - (rate - rate.floor()).ceil(), (index) {
          return Icon(Icons.star_border, size: size, color: Color(warnColor));
        }));
    return list;
  }

  static containerDecoration(
      {Color? color, BorderRadiusGeometry? borderRadius, Offset? offset}) {
    return BoxDecoration(
      color: color ?? Colors.white,
      borderRadius: borderRadius ?? BorderRadius.circular(20),
      boxShadow: [
        BoxShadow(
          color: Colors.grey.withOpacity(0.1),
          spreadRadius: 1,
          blurRadius: 5,
          offset: offset ?? const Offset(0.5, .5), // changes position of shadow
        ),
      ],
    );
  }

  static BoxDecoration getBoxDecoration(
      {Color? color, double? radius, Border? border, Gradient? gradient}) {
    return BoxDecoration(
      color: color ?? Get.theme.primaryColor,
      borderRadius: BorderRadius.all(Radius.circular(radius ?? 10)),
      boxShadow: [
        BoxShadow(
            color: Get.theme.focusColor.withOpacity(0.1),
            blurRadius: 10,
            offset: const Offset(0, 5)),
      ],
      border:
      border ?? Border.all(color: Get.theme.focusColor.withOpacity(0.05)),
      gradient: gradient,
    );
  }

  static Widget bottomSheetTopElement() {
    return Center(
      child: Container(
          height: 6,
          decoration: BoxDecoration(
              color: Color(neutralColor).withOpacity(0.2),
              borderRadius: const BorderRadius.all(Radius.circular(10))),
          margin: const EdgeInsets.only(bottom: 10),
          width: Get.width * 0.2),
    );
  }

  static InputDecoration getInputDecoration(
      {String hintText = '',
        String? errorText,
        IconData? prefixIcon,
        Widget? suffixIcon,
        Color? borderColor,
        TextStyle? hintStyle,
        bool? filled,
        Color? fillColor,
        Widget? prefix,
        Widget? suffix}) {
    return InputDecoration(
      hintText: hintText,
      filled: filled,
      fillColor: fillColor,
      prefix: prefix,
      hintStyle: hintStyle ?? Get.textTheme.caption,
      prefixStyle: TextStyle(color: borderColor ?? Colors.white),
      prefixIcon: prefixIcon != null
          ? Icon(prefixIcon, color: borderColor ?? Colors.white)
          .marginOnly(right: 15, left: 8)
          : null,
      prefixIconConstraints: prefixIcon != null || prefix != null
          ? const BoxConstraints.expand(width: 38, height: 38)
          : const BoxConstraints.expand(width: 0, height: 0),
      floatingLabelBehavior: FloatingLabelBehavior.never,
      contentPadding: const EdgeInsets.all(10),
      errorStyle: TextStyle(color: Ui.parseColor("#FF8181"), fontSize: 15),
      errorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(10),
          borderSide: BorderSide(color: Ui.parseColor("#FF8181"), width: 1.5)),
      border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(10),
          borderSide: BorderSide(color: borderColor ?? Colors.white)),
      focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(10),
          borderSide: BorderSide(color: borderColor ?? Colors.white)),
      focusedErrorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(10),
          borderSide: BorderSide(color: Ui.parseColor("#FF8181"), width: 1.5)),
      enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(10),
          borderSide: BorderSide(color: borderColor ?? Colors.white)),
      suffixIcon: suffixIcon,
      suffix: suffix,
      errorText: errorText,
    );
  }

  static BoxFit getBoxFit(String boxFit) {
    switch (boxFit) {
      case 'cover':
        return BoxFit.cover;
      case 'fill':
        return BoxFit.fill;
      case 'contain':
        return BoxFit.contain;
      case 'fit_height':
        return BoxFit.fitHeight;
      case 'fit_width':
        return BoxFit.fitWidth;
      case 'none':
        return BoxFit.none;
      case 'scale_down':
        return BoxFit.scaleDown;
      default:
        return BoxFit.cover;
    }
  }

  static AlignmentDirectional getAlignmentDirectional(
      String alignmentDirectional) {
    switch (alignmentDirectional) {
      case 'top_start':
        return AlignmentDirectional.topStart;
      case 'top_center':
        return AlignmentDirectional.topCenter;
      case 'top_end':
        return AlignmentDirectional.topEnd;
      case 'center_start':
        return AlignmentDirectional.centerStart;
      case 'center':
        return AlignmentDirectional.topCenter;
      case 'center_end':
        return AlignmentDirectional.centerEnd;
      case 'bottom_start':
        return AlignmentDirectional.bottomStart;
      case 'bottom_center':
        return AlignmentDirectional.bottomCenter;
      case 'bottom_end':
        return AlignmentDirectional.bottomEnd;
      default:
        return AlignmentDirectional.bottomEnd;
    }
  }

  static CrossAxisAlignment getCrossAxisAlignment(String textPosition) {
    switch (textPosition) {
      case 'top_start':
        return CrossAxisAlignment.start;
      case 'top_center':
        return CrossAxisAlignment.center;
      case 'top_end':
        return CrossAxisAlignment.end;
      case 'center_start':
        return CrossAxisAlignment.center;
      case 'center':
        return CrossAxisAlignment.center;
      case 'center_end':
        return CrossAxisAlignment.center;
      case 'bottom_start':
        return CrossAxisAlignment.start;
      case 'bottom_center':
        return CrossAxisAlignment.center;
      case 'bottom_end':
        return CrossAxisAlignment.end;
      default:
        return CrossAxisAlignment.start;
    }
  }

  static bool isDesktop(BoxConstraints constraint) {
    return constraint.maxWidth >= 1280;
  }

  static bool isTablet(BoxConstraints constraint) {
    return constraint.maxWidth >= 768 && constraint.maxWidth <= 1280;
  }

  static bool isMobile(BoxConstraints constraint) {
    return constraint.maxWidth < 768;
  }

  static double col12(BoxConstraints constraint,
      {double desktopWidth = 1280,
        double tabletWidth = 768,
        double mobileWidth = 480}) {
    if (isMobile(constraint)) {
      return mobileWidth;
    } else if (isTablet(constraint)) {
      return tabletWidth;
    } else {
      return desktopWidth;
    }
  }

  static double col9(BoxConstraints constraint,
      {double desktopWidth = 1280,
        double tabletWidth = 768,
        double mobileWidth = 480}) {
    if (isMobile(constraint)) {
      return mobileWidth * 3 / 4;
    } else if (isTablet(constraint)) {
      return tabletWidth * 3 / 4;
    } else {
      return desktopWidth * 3 / 4;
    }
  }

  static double col8(BoxConstraints constraint,
      {double desktopWidth = 1280,
        double tabletWidth = 768,
        double mobileWidth = 480}) {
    if (isMobile(constraint)) {
      return mobileWidth * 2 / 3;
    } else if (isTablet(constraint)) {
      return tabletWidth * 2 / 3;
    } else {
      return desktopWidth * 2 / 3;
    }
  }

  static double col6(BoxConstraints constraint,
      {double desktopWidth = 1280,
        double tabletWidth = 768,
        double mobileWidth = 480}) {
    if (isMobile(constraint)) {
      return mobileWidth / 2;
    } else if (isTablet(constraint)) {
      return tabletWidth / 2;
    } else {
      return desktopWidth / 2;
    }
  }

  static double col4(BoxConstraints constraint,
      {double desktopWidth = 1280,
        double tabletWidth = 768,
        double mobileWidth = 480}) {
    if (isMobile(constraint)) {
      return mobileWidth * 1 / 3;
    } else if (isTablet(constraint)) {
      return tabletWidth * 1 / 3;
    } else {
      return desktopWidth * 1 / 3;
    }
  }

  static double col3(BoxConstraints constraint,
      {double desktopWidth = 1280,
        double tabletWidth = 768,
        double mobileWidth = 480}) {
    if (isMobile(constraint)) {
      return mobileWidth * 1 / 4;
    } else if (isTablet(constraint)) {
      return tabletWidth * 1 / 4;
    } else {
      return desktopWidth * 1 / 4;
    }
  }
}
