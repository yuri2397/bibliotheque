import 'dart:convert';

import 'package:get/get.dart';


abstract class Model {
  int? id;

  Model({this.id});

  bool get hasData => id != null;

  void fromJson(Map<String, dynamic> json) {
    id = intFromJson(json, 'id');
  }

  @override
  bool operator ==(dynamic other) {
    return other.id == id;
  }

  @override
  int get hashCode => id.hashCode;

  Map<String, dynamic> toJson();

  @override
  String toString() {
    return toJson().toString();
  }

  String stringFromJson(Map<String, dynamic>? json, String attribute,
      {String defaultValue = ''}) {
    try {
      return json != null
          ? json[attribute] != null
          ? json[attribute].toString()
          : defaultValue
          : defaultValue;
    } catch (e) {
      throw Exception('Error while parsing $attribute[$e]');
    }
  }


  DateTime? dateFromJson(Map<String, dynamic>? json, String attribute,
      {DateTime? defaultValue}) {
    try {
      return json != null
          ? json[attribute] != null
          ? DateTime.parse(json[attribute]).toLocal()
          : defaultValue
          : defaultValue;
    } catch (e) {
      throw Exception('Error while parsing $attribute[$e]');
    }
  }

  String? dateToJson(DateTime? date) {
    try {
      return date?.toUtc().toIso8601String();
    } catch (e) {
      throw Exception('Error while parsing date[$e]');
    }
  }

  dynamic mapFromJson(Map<String, dynamic>? json, String attribute,
      {required Map<dynamic, dynamic> defaultValue}) {
    try {
      return json != null
          ? json[attribute] != null
          ? jsonDecode(json[attribute])
          : defaultValue
          : defaultValue;
    } catch (e) {
      throw Exception('Error while parsing $attribute[$e]');
    }
  }

  int intFromJson(Map<String, dynamic> json, String attribute,
      {int defaultValue = 0}) {
    try {
      if (json[attribute] != null) {
        if (json[attribute] is int) {
          return json[attribute];
        }
        return int.parse(json[attribute]);
      }
      return defaultValue;
    } catch (e) {
      throw Exception('Error while parsing $attribute[$e]');
    }
  }

  double doubleFromJson(Map<String, dynamic> json, String attribute,
      {int decimal = 2, double defaultValue = 0.0}) {
    try {
      if (json[attribute] != null) {
        if (json[attribute] is double) {
          return double.parse(json[attribute].toStringAsFixed(decimal));
        }
        if (json[attribute] is int) {
          return double.parse(
              json[attribute].toDouble().toStringAsFixed(decimal));
        }
        return double.parse(
            double.tryParse(json[attribute])!.toStringAsFixed(decimal));
      }
      return defaultValue;
    } catch (e) {
      throw Exception('Error while parsing $attribute[$e]');
    }
  }

  bool boolFromJson(Map<String, dynamic> json, String attribute,
      {bool defaultValue = false}) {
    try {
      if (json[attribute] != null) {
        if (json[attribute] is bool) {
          return json[attribute];
        } else if ((json[attribute] is String) &&
            !['0', '', 'false'].contains(json[attribute])) {
          return true;
        } else if ((json[attribute] is int) &&
            ![0, -1].contains(json[attribute])) {
          return true;
        }
        return false;
      }
      return defaultValue;
    } catch (e) {
      throw Exception('Error while parsing $attribute[$e]');
    }
  }



  List<T> listFromJsonArray<T>(Map<String, dynamic> json,
      List<dynamic> attribute, T Function(Map<String, dynamic>) callback) {
    String localAttribute = attribute
        .firstWhere((element) => (json[element] != null), orElse: () => null);
    return listFromJson(json, localAttribute, callback);
  }

  List<T> listFromJson<T>(Map<String, dynamic> json, String attribute,
      T Function(Map<String, dynamic>) callback) {
    try {
      List<T> list = <T>[];
      if (json[attribute] != null &&
          json[attribute] is List &&
          json[attribute].length > 0) {
        json[attribute].forEach((v) {
          if (v is Map<String, dynamic>) {
            list.add(callback(v));
          }
        });
      }
      return list;
    } catch (e) {
      throw Exception('Error while parsing $attribute[$e]');
    }
  }

  T objectFromJson<T>(Map<String, dynamic> json, String attribute,
      T Function(Map<String, dynamic>) callback,
      {required T defaultValue}) {
    try {
      if (json[attribute] != null && json[attribute] is Map<String, dynamic>) {
        return callback(json[attribute]);
      }
      return defaultValue;
    } catch (e) {
      throw Exception('Error while parsing $attribute[$e]');
    }
  }
}
