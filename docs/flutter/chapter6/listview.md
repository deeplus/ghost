---
title: 6.3：ListView
---

# 6.2 ListView

<br>

---

## ListView

[ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html)

<br>

`可滚动widget公共参数`：

*   1.   [Axis](https://api.flutter.dev/flutter/painting/Axis-class.html) scrollDirection: Axis.vertical

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) reverse: false

*   3.   [ScrollController](https://api.flutter.dev/flutter/widgets/ScrollController-class.html) controller

*   4.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) primary

*   5.   [ScrollPhysics](https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html) physics

*   6.   [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) padding

`ListView各个构造函数（ListView有多个构造函数）的共同参数`：

*   7.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) itemExtent

*   8.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) shrinkWrap: false

*   9.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) addAutomaticKeepAlives: true

*   10.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) addRepaintBoundaries: true

*   11.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) cacheExtent

`子widget列表`：

*   12.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children: const []

`其它`：

*   13.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) addSemanticIndexes: true

*   14.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) semanticChildCount

*   15.   [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start

*   16.  [ScrollViewKeyboardDismissBehavior](https://api.flutter.dev/flutter/widgets/ScrollViewKeyboardDismissBehavior-class.html) keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.manual

<br>

---

## ListView.builder

[ListView.builder](https://api.flutter.dev/flutter/widgets/ListView/ListView.builder.html) 

<br>

*   1.   @required [IndexedWidgetBuilder](https://api.flutter.dev/flutter/widgets/IndexedWidgetBuilder.html) itemBuilder

*   2.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) itemCount

<br>

---

## ListView.separated

[ListView.separated](https://api.flutter.dev/flutter/widgets/ListView/ListView.separated.html) 

<br>

*   1.   @required [IndexedWidgetBuilder](https://api.flutter.dev/flutter/widgets/IndexedWidgetBuilder.html) separatorBuilder

*   2.   @required [IndexedWidgetBuilder](https://api.flutter.dev/flutter/widgets/IndexedWidgetBuilder.html) itemBuilder

*   3.   @required [int](https://api.flutter.dev/flutter/dart-core/int-class.html) itemCount



