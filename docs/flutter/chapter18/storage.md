---
title: 18.4：数据存储
---

# 18.4: 数据存储

<br>

## shared_preferences

[shared_preferences](https://pub.dev/packages/shared_preferences) 数据存储，提供了 setInt 、setBool 、setString 和 setStringList 等方法，用来设定特定类型的数据；

```dart
SharedPreferences prefs = await SharedPreferences.getInstances();
prefs.setString(key, value);
prefs.setBool(key, value);
prefs.setDouble(key, value);
prefs.setInt(key, value);
prefs.setStringList(key, value);
prefs.remove(key); // 删除指定键
prefs.clear(); // 清空键值对；
```

<br>

---

```dart
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SharedPreferencesDemo extends StatefulWidget {
  @override
  _SharedPreferencesDemoState createState() => _SharedPreferencesDemoState();
}

class _SharedPreferencesDemoState extends State<SharedPreferencesDemo> {
  SharedPreferences _prefs;

  @override
  void initState() {
    super.initState();
    _getPrefsInstance();
  }

  _getPrefsInstance() async {
    _prefs = await SharedPreferences.getInstance();
  }

  _saveData(BuildContext context) async {
    bool res = await _prefs.setString('name', 'Flutter第三方库');
    print(res);
    if (res) {
      Scaffold.of(context).showSnackBar(
        SnackBar(content: Text('数据储存成功')),
      );
    }
  }

  _getData(BuildContext context) async {
    String res = _prefs.getString('name');
    if (res != null) {
      Scaffold.of(context).showSnackBar(
        SnackBar(content: Text('获取数据成功：$res'))
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('shared-preferences'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            Builder(
              builder: (context) {
                return RaisedButton(
                  onPressed: () {
                    _saveData(context);
                  },
                  child: Text('保存数据'),
                );
              },
            ),
            Builder(
              builder: (context) {
                return RaisedButton(
                  onPressed: () {
                    _getData(context);
                  },
                  child: Text('获取'),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
```

