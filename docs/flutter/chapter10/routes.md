---
title: 10.3：命名路由
---

# 10.3 命名路由

所谓“命名路由”（Named Route）即有名字的路由，我们首先需要注册一个路由表，然后通过导航器匹配路由入栈出栈；

<br>

## 注册路由表

```dart
MaterialApp(
	// 初始路由 -> 也可以通过home进行配置
    initialRoute: '/',
    
    routes: {
        '/': (context) => HomePage(),
        '/list': (context) => ListPage(),
        '/detail': (context) => DetailPage()
    }
)
```

<br>

---

## 路由匹配

根据路由表中的名字匹配路由，通过 [Navigator.pushNamed](https://api.flutter.dev/flutter/widgets/Navigator/pushNamed.html)  控制页面的跳转；

<br>

*   1.   [BuildContext](https://api.flutter.dev/flutter/widgets/BuildContext-class.html) context

*   2.   [String](https://api.flutter.dev/flutter/dart-core/String-class.html) routeName

*   3.   [Object](https://api.flutter.dev/flutter/dart-core/Object-class.html) arguments

<br>

```dart
RaisedButton.icon(
    onPressed: () {
        Navigator.pushNamed(
            context,
            '/list'
        );
    },
    icon: Icon(Icons.arrow_forward),
    label: Text('跳转到List页面')
),
```

