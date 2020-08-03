---
title: 6.7：CustomScrollView
---

# 6.7 CustomScrollView

[CustomScrollView](https://api.flutter.dev/flutter/widgets/CustomScrollView-class.html) 是一个可以使用 `Sliver` 来自定义滚动效果的组件，它可以包含多种滚动模型，可以像“胶水”一样将多个 `Sliver` 粘合在一起。

为啥要粘合在一起呢？

*    假如一个页面中同时存在一个 `ListView` 和一个`GridView`，虽然它们看起来是一个整体，但由于各自的滚动效果是分离的，所以没法保证一致的滚动效果；

*    而用 `CustomScrollView`  部件作为滚动容器，`SliverList`  和 `SliverGrid` 分别替代 `ListView` 和 `GridView` 作为 `CustomScrollView` 的子组件,这样就可以把滚动效果分发给 `CustomScrollView` 统一控制；

<br>

*   1.   [Axis](https://api.flutter.dev/flutter/painting/Axis-class.html) scrollDirection: Axis.vertical

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) reverse: false

*   3.   [ScrollController](https://api.flutter.dev/flutter/widgets/ScrollController-class.html) controller

*   4.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) primary

*   5.   [ScrollPhysics](https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html) physics

*   6.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) shrinkWrap: false

*   7.   [Key](https://api.flutter.dev/flutter/foundation/Key-class.html) center

*   8.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) anchor: 0.0

*   9.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) cacheExtent

*   10.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> slivers: const []

*   11.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) semanticChildCount

*   12.   [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start

<br>

