---
title: 6.2：SingleChildScrollView
---

# 6.2 SingleChildScrollView

<br>

## SingleChildScrollView

[SingleChildScrollView](https://api.flutter.dev/flutter/widgets/SingleChildScrollView-class.html) **只能接收一个子组件**。

<br>

*   1.   [Axis](https://api.flutter.dev/flutter/painting/Axis-class.html) -- **scrollDirection**: Axis.vertical，滚动方向，默认是垂直方向；

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **reverse**: false，是否按照阅读方向相反的方向滑动；如：scrollDirection 值为 Axis.horizontal ，如果阅读方向是从左到右(取决于语言环境，阿拉伯语就是从右到左)。reverse 为 true 时，那么滑动方向就是从右往左。
         *  此属性本质上是决定可滚动组件的初始滚动位置是在“头”还是“尾”，取 false 时，初始滚动位置在“头”，反之则在“尾”，自己多试验。

*   3.   [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) -- **padding**，内边距；

*   4.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **primary**，是否使用 widget 树中默认的 `PrimaryScrollController`；

*   5.   [ScrollPhysics](https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html) -- **physics**，此属性接受一个 `ScrollPhysics` 类型的对象；

*   6.   [ScrollController](https://api.flutter.dev/flutter/widgets/ScrollController-class.html) -- **controller**，此属性接受一个 `ScrollController` 对象；

*   7.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) child

*   8.   [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start

<br>

---

## ScrollPhysics

[ScrollPhysics](https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html) 对象决定可滚动组件如何响应用户操作，比如：用户滑动完抬起手指后，继续执行动画；或者滑动到边界时，如何显示。

*    默认情况下，Flutter 会根据具体平台分别使用不同的 ScrollPhysics 对象，应用不同的显示效果，如当滑动到边界时，继续拖动的话，在 iOS 上会出现弹性效果，而在 Android 上会出现微光效果。

*    如果你想在所有平台下使用同一种效果，可以显式指定一个固定的 ScrollPhysics ，Flutter SDK 中包含了两个 ScrollPhysics 的子类，他们可以直接使用：

[ClampingScrollPhysics](https://api.flutter.dev/flutter/widgets/ClampingScrollPhysics-class.html) ：Android下微光效果；

[BouncingScrollPhysics](https://api.flutter.dev/flutter/widgets/BouncingScrollPhysics-class.html)：iOS下弹性效果；

<br>

---

## ScrollController

[ScrollController](https://api.flutter.dev/flutter/widgets/ScrollController-class.html) 的主要作用是控制滚动位置和监听滚动事件。

*    默认情况下，Widget树中会有一个默认的 PrimaryScrollController，如果子树中的可滚动组件没有显式的指定controller，并且primary属性值为true时（默认就为true），可滚动组件会使用这个默认的 PrimaryScrollController 。
*   这种机制带来的好处是父组件可以控制子树中可滚动组件的滚动行为，例如，Scaffold 正是使用这种机制在 iOS 中实现了点击导航栏回到顶部的功能。我们将在本章后面“滚动控制”一节详细介绍 ScrollController。

<br>

---

## 注意

通常 SingleChildScrollView 只应在期望的内容**不会超过屏幕太多时使用**，这是因为 SingleChildScrollView 不支持基于Sliver 的延迟实例化模型，所以如果预计视口可能包含超出屏幕尺寸太多的内容时，那么使用 SingleChildScrollView 将会非常昂贵（`性能差`），此时应该使用一些支持 Sliver 延迟加载的可滚动组件，如 ListView 。

<br>

---

SingleChildScrollView 综合示例：

```dart
Container(
    color: Colors.purple,
    child: SingleChildScrollView(
        scrollDirection: Axis.horizontal, // 水平滚动
        padding: EdgeInsets.all(10),
        physics: BouncingScrollPhysics(), // IOS回弹效果
        controller: ScrollController(
            initialScrollOffset: 80, // 初始化滚动到距离左边80的距离
        ),
        child: Row(
            children: <Widget>[
                Container(
                    width: 200,
                    height: 30,
                    color: Colors.red,
                ),
                Container(
                    width: 200,
                    height: 30,
                    color: Colors.green,
                ),
                Container(
                    width: 200,
                    height: 30,
                    color: Colors.blue,
                ),
            ],
        ),
    ),
),
```

<br>

