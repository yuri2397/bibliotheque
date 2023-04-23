import 'package:flutter/material.dart';

import 'Ui.dart';
import 'colors.dart';

ThemeData appThem() {
  return ThemeData(
      scaffoldBackgroundColor: const Color(0XFFF6F8FC),
      primaryColor: Color(primaryColor),
      primaryColorDark: Color(neutralColor),
      floatingActionButtonTheme: const FloatingActionButtonThemeData(
          elevation: 1, foregroundColor: Colors.white),
      brightness: Brightness.light,
      dividerColor: Ui.parseColor(setting.value.accentColor!, opacity: 0.1),
      focusColor: Ui.parseColor(setting.value.accentColor!),
      hintColor: Ui.parseColor(setting.value.secondColor!),
      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
            foregroundColor: Ui.parseColor(setting.value.mainColor!)),
      ),
      bottomNavigationBarTheme: BottomNavigationBarThemeData(
        backgroundColor: Color(primaryColor),
        elevation: 3,
        selectedItemColor: Colors.white,
        unselectedItemColor: Ui.parseColor(setting.value.neutralColor!),
        selectedLabelStyle:
        GoogleFonts.poppins(fontSize: 12.0, color: Colors.white),
        unselectedLabelStyle:
        GoogleFonts.poppins(fontSize: 12.0, color: Colors.white),
        selectedIconTheme: const IconThemeData(color: Colors.white, size: 24),
        unselectedIconTheme:
        const IconThemeData(color: Colors.white, size: 24),
        showSelectedLabels: true,
        showUnselectedLabels: true,
        type: BottomNavigationBarType.fixed,
        enableFeedback: true,
      ),
      colorScheme: ColorScheme.light(
        primary: Ui.parseColor(setting.value.mainColor!),
        secondary: Ui.parseColor(setting.value.mainColor!),
      ),
      textTheme: GoogleFonts.getTextTheme(
        'Poppins',
        TextTheme(
          headline6: TextStyle(
              fontSize: 16.0,
              fontWeight: FontWeight.w700,
              color: Ui.parseColor(setting.value.neutralColor!),
              fontFamily: 'Helvetica',
              height: 1.3),
          headline5: TextStyle(
              fontSize: 18.0,
              fontWeight: FontWeight.w700,
              color: Ui.parseColor(setting.value.neutralColor!),
              fontFamily: 'Helvetica',
              height: 1.3),
          headline4: TextStyle(
              fontSize: 20.0,
              fontWeight: FontWeight.w400,
              color: Ui.parseColor(setting.value.neutralColor!),
              fontFamily: 'Helvetica',
              height: 1.3),
          headline3: TextStyle(
              fontSize: 22.0,
              fontWeight: FontWeight.w700,
              color: Ui.parseColor(setting.value.neutralColor!),
              fontFamily: 'Helvetica',
              height: 1.3),
          headline2: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.w700,
              color: Ui.parseColor(setting.value.neutralColor!),
              fontFamily: 'Helvetica',
              height: 1.4),
          headline1: TextStyle(
              fontSize: 28.0,
              fontWeight: FontWeight.w300,
              color: Ui.parseColor(setting.value.neutralColor!),
              fontFamily: 'Helvetica',
              height: 1.4),
          subtitle2: TextStyle(
              fontSize: 16.0,
              fontWeight: FontWeight.w600,
              color: Ui.parseColor(setting.value.neutralColor!),
              height: 1.2),
          subtitle1: TextStyle(
              fontSize: 16.0,
              fontWeight: FontWeight.w400,
              color: Ui.parseColor(setting.value.neutralColor!),
              fontFamily: 'Helvetica',
              height: 1.2),
          bodyText2: TextStyle(
              fontSize: 16.0,
              fontWeight: FontWeight.w600,
              color: Ui.parseColor(setting.value.neutralColor!),
              fontFamily: 'Helvetica',
              height: 1.2),
          bodyText1: TextStyle(
              fontSize: 14.0,
              fontWeight: FontWeight.w400,
              color: Ui.parseColor(setting.value.neutralColor!),
              fontFamily: 'Helvetica',
              height: 1.2),
          caption: const TextStyle(
              fontSize: 14.0,
              fontWeight: FontWeight.w300,
              color: Colors.white,
              fontFamily: 'Helvetica',
              height: 1.2),
        ),
      ));