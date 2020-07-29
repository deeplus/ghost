---
title: 5.4：填充
---

# 5.4 填充

## Padding

[Padding](https://api.flutter.dev/flutter/widgets/Padding-class.html)可以给其子节点添加填充（留白），和边距效果类似。

<br>

*   1.   @required [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) -- **padding**，

*   2.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **child**，

<br>

---

[EdgeInsets](https://api.flutter.dev/flutter/painting/EdgeInsets-class.html) 相关方法：

*   1.   **all**([double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `value`)，所有方向均使用相同数值的填充。

*   2.   **fromLTRB**([double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `left`, [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `top`, [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `right`, [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `bottom`)，分别指定四个方向的填充。

*   3.   **only**([double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `left`: 0.0, [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `top`: 0.0, [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `right`: 0.0, [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `bottom`: 0.0)，可以设置具体某个方向的填充(可以同时指定多个方向)。

*   4.   **symmetric**([double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `vertical`: 0.0, [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `horizontal`: 0.0)，用于设置对称方向的填充，vertical指top和bottom，horizontal指left和right。

<br>

`Padding`部件综合示例：

```dart
DecoratedBox(
    decoration: BoxDecoration( // 装饰
        color: Colors.purple,
    ),
    child: Padding(
        padding: EdgeInsets.fromLTRB(10, 20, 30, 40),
        child: Text('hello padding'),
    ),
),
```

