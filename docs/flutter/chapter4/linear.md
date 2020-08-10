---
title: 4.2：线性布局
---

# 4.2 线性布局

所谓线性布局，即指沿水平或垂直方向排布子部件。Flutter 中通过`Row`和`Column`来实现线性布局，`Row`和 `Column`都继承自`Flex` 。

`Row` 和 `Column` 都只会在主轴方向占用尽可能大的空间，而纵轴的宽度则取决于他们最大子元素的长度。

<br>

---

## Row

[Row](https://api.flutter.dev/flutter/widgets/Row-class.html) 的主轴是 **水平** 方向，可以在水平方向排列其子widget。

<br>

---

Row 属性：

*   1.   [MainAxisAlignment](https://api.flutter.dev/flutter/rendering/MainAxisAlignment-class.html) mainAxisAlignment: MainAxisAlignment.start

*   2.   [MainAxisSize](https://api.flutter.dev/flutter/rendering/MainAxisSize-class.html) mainAxisSize: MainAxisSize.max

*   3.   [CrossAxisAlignment](https://api.flutter.dev/flutter/rendering/CrossAxisAlignment-class.html) crossAxisAlignment: CrossAxisAlignment.center

*   4.   [TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html) textDirection

*   5.   [VerticalDirection](https://api.flutter.dev/flutter/painting/VerticalDirection-class.html) verticalDirection: VerticalDirection.down

*   6.   [TextBaseline](https://api.flutter.dev/flutter/dart-ui/TextBaseline-class.html) textBaseline

*   7.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children: const []

<br>

---

`Row`部件示例：

```dart
Container(
    color: Colors.red,
    alignment: Alignment.center,
    child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        textDirection: TextDirection.rtl,
        verticalDirection: VerticalDirection.up,
        children: <Widget>[
            Container(
                width: 100,
                height: 100,
                color: Colors.deepPurple,
                child: Text('a'),
            ),
            Container(
                width: 100,
                height: 200,
                color: Colors.blue,
                child: Text('b'),
            ),
            Container(
                width: 120,
                height: 120,
                color: Colors.white,
                child: Text('c'),
            ),
        ],
    ),
),
```

<br>

---

## Column

 可以在垂直方向排列其子widget，参数和 `Row` 一样，不同的是主轴方向是 **垂直** 方向。

<br>

Column属性：

*   1.   [MainAxisAlignment](https://api.flutter.dev/flutter/rendering/MainAxisAlignment-class.html) mainAxisAlignment: MainAxisAlignment.start

*   2.   [MainAxisSize](https://api.flutter.dev/flutter/rendering/MainAxisSize-class.html) mainAxisSize: MainAxisSize.max

*   3.   [CrossAxisAlignment](https://api.flutter.dev/flutter/rendering/CrossAxisAlignment-class.html) crossAxisAlignment: CrossAxisAlignment.center

*   4.   [TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html) textDirection

*   5.   [VerticalDirection](https://api.flutter.dev/flutter/painting/VerticalDirection-class.html) verticalDirection: VerticalDirection.down

*   6.   [TextBaseline](https://api.flutter.dev/flutter/dart-ui/TextBaseline-class.html) textBaseline

*   7.  [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children: const []

<br>

---

`Column` 部件示例：

```dart
Container(
    color: Colors.red,
    alignment: Alignment.topLeft,
    child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: <Widget>[
            Container(
                width: 100,
                height: 100,
                color: Colors.deepPurple,
                child: Text('a'),
            ),
            Container(
                width: 200,
                height: 100,
                color: Colors.blue,
                child: Text('b'),
            ),
            Container(
                width: 120,
                height: 100,
                color: Colors.white,
                child: Text('c'),
            ),
        ],
    ),
),
```

<br>

---

## ListBody

[ListBody]()

<br>

1.  [Axis](https://api.flutter.dev/flutter/painting/Axis-class.html) mainAxis: Axis.vertical，
2.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) reverse: false，
3.  [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children: const []，

