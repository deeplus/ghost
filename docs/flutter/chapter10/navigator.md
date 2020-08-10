---
title: 10.2：编程导航
---

# 10.2 编程导航

指通过逻辑编写代码的形式，用导航器实现页面跳转。

<br>

---

## Navigator

[Navigator](https://api.flutter.dev/flutter/widgets/Navigator-class.html) 是一个路由管理的 widget，它提供了打开和退出路由页(页面)方法。

<br>

*   1.  [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Page](https://api.flutter.dev/flutter/widgets/Page-class.html)\> pages: const >[]，

*   2.   [PopPageCallback](https://api.flutter.dev/flutter/widgets/PopPageCallback.html) onPopPage

*   3.   [String](https://api.flutter.dev/flutter/dart-core/String-class.html) initialRoute

*   4.   [RouteListFactory](https://api.flutter.dev/flutter/widgets/RouteListFactory.html) onGenerateInitialRoutes: Navigator.defaultGenerateInitialRoutes

*   5.   [RouteFactory](https://api.flutter.dev/flutter/widgets/RouteFactory.html) onGenerateRoute

*   6.   [RouteFactory](https://api.flutter.dev/flutter/widgets/RouteFactory.html) onUnknownRoute

*   7.   [TransitionDelegate](https://api.flutter.dev/flutter/widgets/TransitionDelegate-class.html) transitionDelegate: const DefaultTransitionDelegate()

*   8.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[NavigatorObserver](https://api.flutter.dev/flutter/widgets/NavigatorObserver-class.html)\> observers: const []

<br>

---

### [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html) push([BuildContext](https://api.flutter.dev/flutter/widgets/BuildContext-class.html) context, [Route](https://api.flutter.dev/flutter/widgets/Route-class.html) route)

将给定的路由入栈（即打开新的页面），返回值是一个`Future`对象，用以接收新路由出栈（即关闭）时的返回数据。

将设置的 router 信息推送到 Navigator 上，实现页面跳转；

<br>

```dart
RaisedButton.icon(
    onPressed: () {
        Navigator.push(
            context,
            MaterialPageRoute(builder: (BuildContext context) {
                return TextPage();
            }),
        );
    },
    icon: Icon(Icons.arrow_forward),
    label: Text('跳转到TextPage页面')
),
```

<br>

---

### void pop([BuildContext](https://api.flutter.dev/flutter/widgets/BuildContext-class.html) context, [result])

将栈顶路由出栈，`result`为页面关闭时返回给上一个页面的数据。

导航到新页面，或者返回到上个页面；

<br>

```dart
OutlineButton.icon(
    onPressed: () {
        Navigator.pop(context);
    },
    icon: Icon(Icons.arrow_back),
    label: Text('返回到上一页面'),
),
```

<br>

---

### Navigator.replace

将Navigator中的路由替换成一个新路由。

<br>

---

### Navigator.pushNamedAndRemoveUntil

如果需要清空堆栈，比如我需要直接返回首页，之前的所有路由全部干掉，堆栈清空。

<br>

---

### 其他静态方法

```dart
Navigator.popUntil 反复执行pop 直到该函数的参数predicate返回true为止
canPop 判断是否可以导航到新页面
maybePop 可能会导航到新页面
popAndPushNamed 指定一个路由路径，并导航到新页面。
pushAndRemoveUntil 将给定路由推送到Navigator，删除先前的路由，直到该函数的参数predicate返回true为止。
pushNamedAndRemoveUntil 将命名路由推送到Navigator，删除先前的路由，直到该函数的参数predicate返回true为止。
pushReplacement 路由替换。
pushReplacementNamed 这个也是替换路由操作。推送一个命名路由到Navigator，新路由完成动画之后处理上一个路由。
removeRoute 从Navigator中删除路由，同时执行Route.dispose操作。
removeRouteBelow 从Navigator中删除路由，同时执行Route.dispose操作，要替换的路由是传入参数anchorRouter里面的路由。
replaceRouteBelow 将Navigator中的路由替换成一个新路由，要替换的路由是是传入参数anchorRouter里面的路由。
```

<br>

---

## 路由切换风格

### Android

<br>

---

### IOS

<br>

---

### 其他切换场景动画

