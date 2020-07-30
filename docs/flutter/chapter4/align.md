---
title: 4.6：对齐与定位
---

# 4.6 对齐与定位

<br>

---

## Align

[Align](https://api.flutter.dev/flutter/widgets/Align-class.html) 组件可以调整子组件的位置，并且可以根据子组件的宽高来确定自身的的宽高。如果我们只想简单的调整**一个子元素**在父元素中的位置的话，使用 `Align` 组件会更简单一些。

<br>

*   1.   [AlignmentGeometry](https://api.flutter.dev/flutter/painting/AlignmentGeometry-class.html) alignment: Alignment.center，子组件在 `Align` 组件中的起始位置；

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **widthFactor**，宽度缩放因子，该值乘以子元素的宽度就是 `Align` 组件的宽度；

*   3.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **heightFactor**，高度缩放因子，该值乘以子元素的高度就是 `Align` 组件的高度；

*   4.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) child

<br>

::: tip

Stack可以有多个子元素，并且子元素可以堆叠，而Align只能有一个子元素，不存在堆叠。

:::

<br>

---

Align 组件示例：

```dart
// 没有设置 widthFactor 和 heightFactor ，Align 会继承父级宽高
Container(
    width: double.infinity,
    height: double.infinity,
    color: Colors.purple,
    alignment: Alignment.topLeft,
    child: Align(
        alignment: Alignment.bottomRight,
        child: FlutterLogo(
            size: 60,
        ),
    ),
),

// 设置了widthFactor 和 heightFactor
Container(
    width: double.infinity,
    height: double.infinity,
    color: Colors.purple,
    alignment: Alignment.topLeft,
    child: Align( // 此时Align的大小为 120*120
        alignment: Alignment.bottomRight,
        widthFactor: 2,
        heightFactor: 2,
        child: FlutterLogo(
            size: 60,
        ),
    ),
),
// FlutterLogo 是Flutter SDK提供的一个组件，内容就是Flutter的商标
```



