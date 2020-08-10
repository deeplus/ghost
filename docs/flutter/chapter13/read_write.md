---
title: 13.1：文件操作
---

# 13.1 文件操作

## APP目录

Android 和 iOS 的应用存储目录不同， [PathProvider](https://pub.dev/packages/path_provider) 插件提供了一种平台透明的方式来访问设备文件系统上的常用位置：

<br>

### 临时目录

系统可随时清除的临时目录（即缓存），该目录可以通过 [getTemporaryDirectory()]() 获取。在iOS上，这对应于 [`NSTemporaryDirectory()`](https://developer.apple.com/reference/foundation/1409211-nstemporarydirectory) 返回的值；在Android上，这是 [`getCacheDir()`](https://developer.android.com/reference/android/content/Context.html#getCacheDir()) 返回的值；

<br>

### 文档目录

应用程序的目录，用于储存只有自己可以访问的文件；只有当应用程序卸载时，系统才会清除该目录；该目录可以通过 [getApplicationDocumentsDirectory()]() 获取。在 iOS 上，这对应于 `NSDocumentDirectory`；在 Android 上，这是 `AppData`目录；

<br>

### 外部存储目录

外部存储目录如：SD卡（IOS不支持外部目录）；该目录可以通过 [getExternalStorageDirectory()]() 获取；

<br>

---

## 文件读写

一旦你的Flutter应用程序有一个文件位置的引用，你可以使用 [dart:io](https://api.dartlang.org/stable/dart-io/dart-io-library.html) API 来执行对文件系统的读/写操作。有关使用Dart处理文件和目录的更多信息，请参阅此[概述](https://www.dartlang.org/articles/dart-vm/io) 和这些[示例](https://www.dartlang.org/dart-vm/dart-by-example#files-directories-and-symlinks)；

<br>

---

## 文件操作示例

```dart
import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:path_provider/path_provider.dart';

class WriteDataToFile extends StatefulWidget {
  @override
  _WriteDataToFileState createState() => _WriteDataToFileState();
}

class _WriteDataToFileState extends State<WriteDataToFile> {
  // 初始值
  int _count = 0;
  Map _data = {};

  // 获取本地应用程序目录
  Future<File> _getLocalFile() async {
    Directory dir = await getApplicationDocumentsDirectory();
    String path = dir.path;
    // 读取文件 -> 没有则创建
    return File('$path/count.txt');
  }

  // 写入数据
  _writeDataToFile() async {
    setState(() {
      _count++;
      _data['num'] = _count;
    });
    await (await _getLocalFile()).writeAsString(json.encode(_data));
  }

  // 读取数据
  Future<Map> _readDataFromFile() async {
    try {
      File file = await _getLocalFile();
      String data = await file.readAsString();
      return json.decode(data);
    } on FileSystemException {
      return {};
    }
  }

  // 初始化时，对操作文件数据
  @override
  void initState() {
    super.initState();
    _readDataFromFile().then((res) {
      setState(() {
        _count = res['num'];
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('写入数据到应用程序目录'),
      ),
      body: Center(
        child: Text(
          '$_count',
          style: TextStyle(
            fontSize: 40,
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          _writeDataToFile();
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
```



