---
title: 3.4：按钮
---

# 3.4 按钮

所有 `Material` 库中的按钮都有如下相同点：

*    按下时都会有“水波动画”（又称“涟漪动画”，就是点击时按钮上会出现水波荡漾的动画）；

*    有一个`onPressed`属性来设置点击回调，当按钮按下时会执行该回调，如果不提供该回调则按钮会处于禁用状态，禁用状态不响应用户点击。

<br>

---

按钮的外观大都可以通过属性来自定义：

*   1.   @required [VoidCallback](https://api.flutter.dev/flutter/dart-ui/VoidCallback.html) -- **onPressed**，按钮点击回调；

*   2.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- textColor，按钮文字颜色；

*   3.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- disabledTextColor，按钮禁用时的文字颜色；

*   4.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- color，按钮背景颜色；

*   5.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- disabledColor，按钮禁用时的背景颜色；

*   6.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- highlightColor，按钮按下时的背景颜色；

*   7.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- splashColor，点击时水波动画中的水波颜色；

*   8.   [Brightness](https://api.flutter.dev/flutter/dart-ui/Brightness-class.html) -- colorBrightness，按钮主题，默认是浅色主题 ；

*   9.   [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) -- padding，按钮的填充；

*   10.   [ShapeBorder](https://api.flutter.dev/flutter/painting/ShapeBorder-class.html) -- shape，按钮的外形；

*   11.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- child，按钮的内容；

<br>

---

shape属性定义按钮样式：

```dart
// 统一四边的颜色和宽度
shape: Border.all(color: Color(0xFF00FFFF),style: BorderStyle.solid,width: 2),

// 四个边分别指定颜色和宽度
shape: Border(top: b, bottom: b, right: b, left: b),

// 底部线
shape: UnderlineInputBorder( 
    borderSide:BorderSide(color: Colors.black, style: BorderStyle.solid, width: 2),
),

// 矩形边色
shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.all(
        Radius.circular(10)
    ), 
    side: BorderSide(color: Colors.black, style: BorderStyle.solid, width: 2)
),

// 圆形边色
shape: CircleBorder(
    side: BorderSide(color: Colors.Colors.black, style: BorderStyle.solid, width: 2)
),

// 体育场
shape: StadiumBorder(
    side: BorderSide(width: 2, style: BorderStyle.solid, color: Colors.black)
),

// 角形（八边角）边色
shape: BeveledRectangleBorder(
    borderRadius: BorderRadius.all(
        Radius.circular(10)
    ), 
    side: BorderSide(color: Colors.black, style: BorderStyle.solid, width: 2)
),
```

<br>

---

## RaisedButton

[RaisedButton](https://api.flutter.dev/flutter/material/RaisedButton-class.html) 即凸起按钮，默认带有阴影和灰色背景，按下后，阴影会变大；

<br>

```dart
RaisedButton(
    onPressed: () {},
    child: Text('漂浮按钮'),
),
```

<br>

---

## FlatButton

[FlatButton](https://api.flutter.dev/flutter/material/FlatButton-class.html) 即扁平按钮，默认背景透明并不带阴影，按下后，会有背景色；

<br>

```dart
FlatButton(
    onPressed: (){},
    child: Text('扁平按钮'),
),
```

<br>

---

## OutlineButton

[OutlineButton](https://api.flutter.dev/flutter/material/OutlineButton-class.html) 默认有一个边框，不带阴影且背景透明，按下后，边框颜色会变亮,且有背景和阴影效果；

<br>

```dart
OutlineButton(
    onPressed: (){},
    child: Text('边框按钮'),
),
```

<br>

---

## IconButton

[IconButton](https://api.flutter.dev/flutter/material/IconButton-class.html) 是一个可点击的Icon，不包括文字，默认没有背景，点击后会出现背景；

<br>

```dart
IconButton(
    onPressed: (){},
    icon: Icon(Icons.thumb_up),
),
```

<br>

---

## 带图标的按钮

`RaisedButton` 、`FlatButton`、`OutlineButton` 都有一个 icon 构造函数，通过它可以轻松创建带图标的按钮；

<br>

```dart
RaisedButton.icon(
    onPressed: (){},
    icon: Icon(Icons.send),
    label: Text('发送'),
),

OutlineButton.icon(
    icon: Icon(Icons.add),
    label: Text("添加"),
    onPressed: (){},
),

FlatButton.icon(
    icon: Icon(Icons.info),
    label: Text("详情"),
    onPressed: (){},
),
```

<br>

---

## 自定义按钮外观

