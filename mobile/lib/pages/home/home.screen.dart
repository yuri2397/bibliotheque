import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'home.controller.dart';

class HomeScreen extends GetView<HomeController>{
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      body: Center(
        child: Text('Home'),
      ),
    );
  }
}