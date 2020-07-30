---
title: 4.4：流式布局
---

# 4.4 流式布局

在一些地方，如果子 widget 超出屏幕范围不会折行，则会报溢出错误，我们把超出屏幕显示范围会**自动折行**的布局称为流式布局；

Flutter中通过 `Wrap` 和 `Flow` 来支持流式布局，`Wrap` 和 `Flow` 的属性基本和 `Flex`（包括 `Row` 和 `Column`）一致；

<br>

---

## Wrap

[Wrap](https://api.flutter.dev/flutter/widgets/Wrap/Wrap.html) 和  `Flex` 的行为基本相同，下面是 `Wrap` 的属性：

<br>

---

`Wrap`特有属性：

*   1.    [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **spacing**: 0.0，主轴方向子widget的间距；

*   2.    [WrapAlignment](https://api.flutter.dev/flutter/rendering/WrapAlignment-class.html) -- **runAlignment**: WrapAlignment.start，纵轴方向的对齐方式；

*   3.    [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **runSpacing**: 0.0，纵轴方向的间距；

<br>

---

其它属性：

*   1.   [Axis](https://api.flutter.dev/flutter/painting/Axis-class.html) direction: Axis.horizontal

*   2.   [WrapAlignment](https://api.flutter.dev/flutter/rendering/WrapAlignment-class.html) alignment: WrapAlignment.start

*   3.   [WrapCrossAlignment](https://api.flutter.dev/flutter/rendering/WrapCrossAlignment-class.html) crossAxisAlignment: WrapCrossAlignment.start

*   4.   [TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html) textDirection

*   5.   [VerticalDirection](https://api.flutter.dev/flutter/painting/VerticalDirection-class.html) verticalDirection: VerticalDirection.down

*   6.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children: const []

<br>

---

Wrap组件示例：

```dart
Container(
    color: Colors.red,
    alignment: Alignment.topLeft,
    child: Wrap(
        runSpacing: 10,
        alignment: WrapAlignment.center,
        children: <Widget>[
            Container(
                width: 150,
                height: 150,
                color: Colors.blue,
                child: Text('a'),
            ),
            Container(
                width: 150,
                height: 150,
                color: Colors.green,
                child: Text('b'),
            ),
            Container(
                width: 150,
                height: 150,
                color: Colors.deepPurple,
                child: Text('c'),
            ),
        ],
    ),
),
```

<br>

---

## Flow

我们一般很少会使用 [Flow](https://api.flutter.dev/flutter/widgets/Flow-class.html)，因为其过于复杂，需要自己实现子 widget 的位置转换，一般用 `Wrap` 满足需求。[Flow]() 主要用于一些需要自定义布局策略或性能要求较高(如动画中)的场景。

<br>

*   1.   @required [FlowDelegate](https://api.flutter.dev/flutter/rendering/FlowDelegate-class.html) -- **delegate**，

*   2.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children: const []

<br>

