---
title: 5.5：变换
---

# 5.5 变换

## Transform

<br>

[Transform](https://api.flutter.dev/flutter/widgets/Transform-class.html) 可以在其子组件绘制时对其应用一些矩阵变换来实现一些特效。[Matrix4](https://api.flutter.dev/flutter/vector_math_64/Matrix4-class.html) 是一个4D矩阵，通过它我们可以实现各种矩阵操作。

<br>

*   1.   @required [Matrix4](https://api.flutter.dev/flutter/vector_math_64/Matrix4-class.html) -- **transform**，

*   2.   [Offset](https://api.flutter.dev/flutter/dart-ui/Offset-class.html) -- **origin**，坐标系原点

*   3.   [AlignmentGeometry](https://api.flutter.dev/flutter/painting/AlignmentGeometry-class.html) -- **alignment**，对齐方式

*   4.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **transformHitTests**: true，

*   5.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **child**，

<br>

---

[Matrix4](https://api.flutter.dev/flutter/vector_math_64/Matrix4-class.html) 相关方法：

*   1.   **rotationX**([double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `radians`)、**rotationY**([double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `radians`)、**rotationZ**([double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `radians`)，沿X、Y、Z轴旋转。

*   2.   **skew**([double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `alpha`, [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `beta`)，绕X、Y轴倾斜。

*   3.   **skewX**([double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `alpha`)、**skewY**([double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- `beta`)，同上。

<br>

`Transform`部件综合示例：

```dart
Container(
    color: Colors.black,
    child: Transform(
        alignment: Alignment.topLeft, //相对于坐标系原点对齐
        transform: Matrix4.skewY(0.2), //沿Y轴倾斜0.3弧度
        child: Container(
            padding: EdgeInsets.all(8),
            color: Colors.deepOrange,
            child: Text('Apartment for rent!'),
        ),
    ),
),
```

<br>

---

## 平移

<br>

[Transform.translate](https://api.flutter.dev/flutter/widgets/Transform/Transform.translate.html) 接收一个`offset`参数，可以在绘制时沿`x`、`y`轴对子组件平移指定的距离。

<br>

*   1.   @required [Offset](https://api.flutter.dev/flutter/dart-ui/Offset-class.html) -- **offset**，

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **transformHitTests**: true，

*   3.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **child**，

<br>

`translate`示例：

```dart
DecoratedBox(
    decoration:BoxDecoration(color: Colors.red),
    //默认原点为左上角，向左移20像素，向上平移5像素
    child: Transform.translate(
        offset: Offset(-20, -5),
        child: Text("Hello world"),
    ),
),
```

<br>

---

## 旋转

<br>

[Transform.rotate](https://api.flutter.dev/flutter/widgets/Transform/Transform.rotate.html) 可以对子组件进行旋转变换。

<br>

*   1.   @required [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **angle**，旋转角度，单位为`弧度`。

*   2.   [Offset](https://api.flutter.dev/flutter/dart-ui/Offset-class.html) -- **origin**，

*   3.   [AlignmentGeometry](https://api.flutter.dev/flutter/painting/AlignmentGeometry-class.html) -- **alignment**: Alignment.center

*   4.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **transformHitTests**: true

*   5.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **child**

<br>

`rotate`示例：

```dart
import 'dart:math' as math;

DecoratedBox(
    decoration:BoxDecoration(color: Colors.red),
    child: Transform.rotate(
        //旋转90度
        angle: math.pi / 2,
        child: Text("Hello world"),
    ),
),
```

<br>

---

## 缩放

<br>

[Transform.scale](https://api.flutter.dev/flutter/widgets/Transform/Transform.scale.html) 可以对子组件进行缩小或放大。

<br>

*   1.   @required [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **scale**，缩放比例

*   2.   [Offset](https://api.flutter.dev/flutter/dart-ui/Offset-class.html) -- **origin**

*   3.   [AlignmentGeometry](https://api.flutter.dev/flutter/painting/AlignmentGeometry-class.html) -- **alignment**: Alignment.center,

*   4.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **transformHitTests**: true

*   5.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **child**

<br>

`scale`示例：

```dart
DecoratedBox(
    decoration:BoxDecoration(color: Colors.red),
    child: Transform.scale(
        scale: 1.5, //放大到1.5倍
        child: Text("Hello world")
    )
),
```

