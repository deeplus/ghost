---
title: 5.2：尺寸限制类容器
---

# 5.2 尺寸限制类容器

尺寸限制类容器用于限制容器大小，Flutter中提供了多种这样的容器，如`ConstrainedBox`、`SizedBox`、`UnconstrainedBox`、`AspectRatio`等。

## SizeBox

<br>

[SizeBox](https://api.flutter.dev/flutter/widgets/SizedBox-class.html) 能够限制子节点的大小，**强制**子节点具有特定的宽度、高度或两者都有，会**使子节点设置的宽高失效**。

<br>

*   1.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **width**，

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **height**，

*   3.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **child**，

<br>

在下面的例子中，`Container` 最终会被渲染为 100*100 大小

```dart
SizedBox(
    width: 100,
    height: 100,
    child: Container(
        width: 200,
        height: 200,
        color: Color(0xffff0000),
    ),
),
```

<br>

---

## ConstrainedBox

<br>

[ConstrainedBox](https://api.flutter.dev/flutter/widgets/ConstrainedBox-class.html) 用于创建一个 Widget，该 Widget 会对子节点添加额外的约束。

<br>

*   1.   @required [BoxConstraints](https://api.flutter.dev/flutter/rendering/BoxConstraints-class.html) -- **constraints**

*   2.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **child**，受约束的子节点

<br>

---

[BoxConstraints](https://api.flutter.dev/flutter/rendering/BoxConstraints-class.html) 相关属性：

*   1.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **minWidth**：0.0，满足约束条件的最小宽度

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **maxWidth**： double.infinity，满足约束条件的最大宽度；可能是[double.infinity]（1.0 / 0.0）

*   3.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **minHeight**： 0.0，满足约束条件的最小高度

*   4.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **maxHeight**： double.infinity，满足约束条件的最大高度；可能是[double.infinity]（1.0 / 0.0）

<br>

在下面的例子中，`Container`最终会被渲染为 375 * 50 大小

```dart
ConstrainedBox(
    constraints: BoxConstraints(
        minWidth: double.infinity, // 宽度尽可能大
        minHeight: 50 // 最小高度为50
    ),
    child: Container(
        width: 20,
        height: 5,
        color: Colors.red,
    ),
),
```

实际上，`SizeBox`只是`ConstrainedBox	`的一个变种，上述`SizeBox`的示例代码等价于：

```dart
ConstrainedBox(
    constraints: BoxConstraints.tightFor(
        width: 100,
        height: 100
    ),
    child: Container(
        width: 200,
        height: 200,
        color: Color(0xffff0000),
    ),
),
```

<br>

---

## AspectRatio

[AspectRatio](https://api.flutter.dev/flutter/widgets/AspectRatio-class.html) 

<br>

1.  @required [double](https://api.flutter.dev/flutter/dart-core/double-class.html) aspectRatio，
2.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) child，