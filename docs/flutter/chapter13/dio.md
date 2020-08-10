---
title: 13.4：第三方库--dio 
---

# 13.4：第三方库--dio

[dio](https://pub.dev/packages/dio) 是一个强大的 Dart Http 请求库，支持 Restful API、FormData、拦截器、请求取消、Cookie 管理、文件上传/下载、超时、自定义适配器等；

<br>

---

## dio示例

```dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

Dio dio = Dio();
String uri = 'https://h5sm.com/uni/api/coming_soon';

class DioDemo extends StatefulWidget {
  @override
  _DioDemoState createState() => _DioDemoState();
}

class _DioDemoState extends State<DioDemo> {
  getData() async {
    Response response = await dio.post(uri, data: {'start': 2, 'count': 5,});
    return json.decode(response.data);
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('第三方库--dio'),
      ),
    );
  }
}
```

