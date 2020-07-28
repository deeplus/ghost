---
title: 1.2：快速起步
---

# 1.2 快速起步

## 初始化flutter项目

```bash
$ flutter create 项目名
```

<br>

---

## 第一个flutter应用

```dart
// 引入material ui库
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

// 定义一个无状况的部件
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 每个页面都应该又一个根部件
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue, // 主题颜色
        primaryColor: Colors.purple, // 导航栏颜色
        canvasColor: Colors.pink, // 画布颜色
      ),
      home: MyHomePage(),
    );
  }
}

// 定义一个有状态的部件
class MyHomePage extends StatefulWidget {
  final title = '导航栏';

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _count = 0;

  // 改变状态
  void _addCount() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Text('$_count'),
      floatingActionButton: FloatingActionButton(
        onPressed: _addCount,
        tooltip: '累加',
        child: Icon(Icons.add),
      ),
    );
  }
}
```

