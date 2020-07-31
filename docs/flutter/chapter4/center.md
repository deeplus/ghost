---
title: 4.7：Center
---

# 4.4 Center

## Center

[Center](https://api.flutter.dev/flutter/widgets/Center-class.html) 继承自 `Align`，默认是将 alignment 设置为  Alignment.center ，其他属性都与 `Align` 完全一样。

<br>

*   1.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) widthFactor

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) heightFactor

*   3.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) child

<br>

---

Center 组件示例：

```dart
Container(
    width: double.infinity,
    height: double.infinity,
    color: Colors.purple,
    alignment: Alignment.topLeft,
    child: Center(
        child: FlutterLogo(
            size: 60,
        ),
    ),
),
```

