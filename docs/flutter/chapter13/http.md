---
title: 13.3：第三方库--http 
---

# 13.3：第三方库--http

使用 [http](https://pub.dev/packages/http) 最简单的方法是通过顶层函数，它们允许你以最小的麻烦来发出单个 http 请求：

```dart
import 'package:http/http.dart' as http;

var url = 'https://example.com/whatsit/create';
var response = await http.post(url, body: {'name': 'doodle', 'color': 'blue'});
print('Response status: ${response.statusCode}');
print('Response body: ${response.body}');

print(await http.read('https://example.com/foobar.txt'));
```

如果要向同一服务器发出多个请求，则可以使用客户端而不是一次性发出请求来保持打开持久连接；如果这样做，请确保完成后关闭客户端：

```dart
var client = http.Client();
try {
  var uriResponse = await client.post('https://example.com/whatsit/create', body: {'name': 'doodle', 'color': 'blue'});
  print(await client.get(uriResponse.bodyFields['uri']));
} finally {
  client.close();
}
```

<br>

---

## http示例

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

class HttpDemo extends StatefulWidget {
  @override
  _HttpDemoState createState() => _HttpDemoState();
}

class _HttpDemoState extends State<HttpDemo> {
  getData() async {
    String url = 'http://tanzhouweb.com/mg/mgData.php?title=banner';
    var res = await http.get(url);
    return json.decode(res.body);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('第三方库--http'),
      ),
      body: FutureBuilder(
        future: getData(),
        builder: (BuildContext context, AsyncSnapshot snapshot){
          
          if (snapshot.connectionState == ConnectionState.done) {
            var res = snapshot.data;

            // 发生错误显示的内容
            if (snapshot.hasError) {
              return Center(
                child: Text('错误信息: ${snapshot.error.toString()}'),
              );
            }
						
            // 请求完成显示的内容
            return ListView(
              children: res.map<Widget>((item) {
                return Image.network('$item');
              }).toList(),
            );
          }

          // 等待请求过程中显示的内容
          return Center(
            child: CircularProgressIndicator(),
          );
        },
      ),
    );
  }
}
```



