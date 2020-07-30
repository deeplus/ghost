---
title: 6.4：GridView
---

# 6.4 GridView

<br>

---

## GridView

[GridView](https://api.flutter.dev/flutter/widgets/GridView-class.html)  

<br>

`公共参数`：

*   1.   [Axis](https://api.flutter.dev/flutter/painting/Axis-class.html) scrollDirection: Axis.vertical

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) reverse: false

*   3.   [ScrollController](https://api.flutter.dev/flutter/widgets/ScrollController-class.html) controller

*   4.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) primary

*   5.   [ScrollPhysics](https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html) physics

*   6.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) shrinkWrap: false

*   7.   [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) padding

*   8.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) addAutomaticKeepAlives: true

*   9.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) addRepaintBoundaries: true

*   10.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) addSemanticIndexes: true

*   11.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children: const []

*   12.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) semanticChildCount

`GridView`特有参数：

*   1.   @required [SliverGridDelegate](https://api.flutter.dev/flutter/rendering/SliverGridDelegate-class.html) gridDelegate

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) cacheExtent 

<br>

---

## GridView.builder

[GridView.builder](https://api.flutter.dev/flutter/widgets/GridView/GridView.builder.html) 

<br>

`GridView.builder`特有参数：

*   1.   @required [SliverGridDelegate](https://api.flutter.dev/flutter/rendering/SliverGridDelegate-class.html) gridDelegate,

*   2.   @required [IndexedWidgetBuilder](https://api.flutter.dev/flutter/widgets/IndexedWidgetBuilder.html) itemBuilder

*   3.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) itemCount

<br>

---

## GridView.count

[GridView.count](https://api.flutter.dev/flutter/widgets/GridView/GridView.count.html) 

<br>

`GridView.count`特有参数：

*   1.   @required [int](https://api.flutter.dev/flutter/dart-core/int-class.html) crossAxisCount

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) mainAxisSpacing: 0.0

*   3.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) crossAxisSpacing: 0.0

*   4.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) childAspectRatio: 1.0

*   5.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) cacheExtent

*   6.    [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start

<br>

---

## GridView.extent

[GridView.extent](https://api.flutter.dev/flutter/widgets/GridView/GridView.extent.html)

<br>

`GridView.extent`特有参数：

*   1.   @required [double](https://api.flutter.dev/flutter/dart-core/double-class.html) maxCrossAxisExtent

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) mainAxisSpacing: 0.0

*   3.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) crossAxisSpacing: 0.0

*   4.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) childAspectRatio: 1.0

*   5.   [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start



