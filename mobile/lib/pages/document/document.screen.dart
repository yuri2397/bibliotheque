import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'document.controller.dart';

class DocumentScreen extends GetView<DocumentController>{
  const DocumentScreen({super.key});

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