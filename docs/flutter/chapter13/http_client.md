---
title: 13.2：HttpClient
---

# 13.2 HttpClient

[`dart:io`](https://docs.flutter.io/flutter/dart-io/dart-io-library.html) 库中提供了用于发起 http 请求的一些类，我们可以直接使用 [HttpClient]() 来发起请求，使用 HttpClient 发起请求分为五步：

<br>

1. 创建一个 HttpClient：

```dart
import 'dart:io';
HttpClient httpClient = new HttpClient();
```

2. 构建 Uri ，同时你也可以配置请求headers、 body：

```dart
Uri uri = Uri(scheme: "https", host: "flutterchina.club", queryParameters: {
  "name":"dream",
  "age":"18"
});

//方法可以使用任意Http Method，如：httpClient.post(...)、httpClient.delete(...)
HttpClientRequest request = await httpClient.getUrl(uri);

// 通过HttpClientRequest可以设置请求header
request.headers.add("user-agent", "设备UA");

// 如果是post或put等可以携带请求体方法，可以通过HttpClientRequest对象发送request body
String payload="...";
request.add(utf8.encode(payload)); 
```

3. 发起请求, 等待连接服务器：

这一步完成后，请求信息就已经发送给服务器了；返回一个 HttpClientResponse 对象，它包含响应头（header）和响应流（响应体的 Stream），接着就可以通过读取响应流来获取响应内容；

```dart
HttpClientResponse response = await request.close();
```

4. 读取响应内容：

```dart
String responseBody = await response.transform(utf8.decoder).join();
```

5. 请求结束，关闭 HttpClient：

关闭 client 后，通过该 client 发起的所有请求都会中止；

```dart
httpClient.close(); 
```

<br>

---

## HttpClient示例

```dart
import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';

class HttpClientDemo extends StatefulWidget {
  @override
  _HttpClientDemoState createState() => _HttpClientDemoState();
}

class _HttpClientDemoState extends State<HttpClientDemo> {
  List _banner = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('HttpClient示例'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          HttpClient httpClient = HttpClient();
          Uri uri = Uri.parse('http://tanzhouweb.com/mg/mgData.php?title=banner');
          HttpClientRequest request = await httpClient.getUrl(uri);
          HttpClientResponse response = await request.close();
          String responseBody = await response.transform(utf8.decoder).join();
          setState(() {
            _banner = json.decode(responseBody);
          });
          httpClient.close();
        },
        child: Icon(Icons.add),
      ),
      body: ListView(
        children: _banner.map((item){
          return Image.network('$item');
        }).toList(),
      ),
    );
  }
}
```

