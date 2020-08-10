---
title: 18.3：发射器
---

# 18.3: 发射器

<br>

## url_launcher 

[url_launcher ](https://pub.dev/packages/url_launcher) 插件用于在 Android 和 iOS 上启动 URL，例如：

<br>

1. 跳转到网址
2. 拨打电话
3. 发送短信
4. 发送邮件

<br>

```dart
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class UrlLauncherDemo extends StatefulWidget {
  @override
  _UrlLauncherDemoState createState() => _UrlLauncherDemoState();
}

class _UrlLauncherDemoState extends State<UrlLauncherDemo> {

  _launchURL() async {
    // 打开链接
    var url = 'https://flutter.dev';
    // 发送邮件
    url = 'mailto:catsriver@163.com';
    // 发送短信
    url = 'sms:10086';
    // 拨打电话
    url = 'tel:1008611';
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('url-launcher'),
      ),
      body: Center(
        child: RaisedButton(
          onPressed: _launchURL,
          child: Text('Show Flutter homepage'),
        ),
      ),
    );
  }
}
```

