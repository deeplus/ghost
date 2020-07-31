---
title: 6.4：GridView
---

# 6.4 GridView

<br>

---

## GridView

[GridView](https://api.flutter.dev/flutter/widgets/GridView-class.html) 可以构建一个二维网格列表。

<br>

---

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

<br>

---

`GridView`特有参数：

*   1.   @required [SliverGridDelegate](https://api.flutter.dev/flutter/rendering/SliverGridDelegate-class.html) -- **gridDelegate**，控制子widget 如何进行排列；`SliverGridDelegate` 是一个抽象类，定义了`GridView` Layout 相关接口，子类需要通过实现它们来实现具体的布局算法。在Flutter中提供了两个`SliverGridDelegate`的子类给我们使用：

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) cacheExtent 

<br>

---

### SliverGridDelegateWithFixedCrossAxisCount

[SliverGridDelegateWithFixedCrossAxisCount](https://api.flutter.dev/flutter/rendering/SliverGridDelegateWithFixedCrossAxisCount-class.html) 子类实现了一个横轴为**固定数量**子元素的 layout 算法：

*   1.   @required [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- **crossAxisCount**，横轴子元素的数量；此属性值确定后子元素在横轴的长度就确定了，即ViewPort 横轴长度除以 crossAxisCount 的商。

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **mainAxisSpacing**: 0.0，主轴方向的间距；

*   3.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **crossAxisSpacing**: 0.0，横轴方向子元素的间距；

*   4.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **childAspectRatio**: 1.0，子元素在横轴长度和主轴长度的比例。由于`crossAxisCount`指定后，子元素横轴长度就确定了，然后通过此参数值就可以确定子元素在主轴的长度。	

<br>

---

### SliverGridDelegateWithMaxCrossAxisExtent

[SliverGridDelegateWithMaxCrossAxisExtent](https://api.flutter.dev/flutter/rendering/SliverGridDelegateWithMaxCrossAxisExtent-class.html) 子类实现了一个横轴子元素为**固定最大长度**的layout算法：

*   1.   @required [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **maxCrossAxisExtent**，子元素在横轴上的最大长度。之所以是“最大”长度，是**因为横轴方向每个子元素的长度仍然是等分的**，举个例子，如果ViewPort的横轴长度是450，那么当`maxCrossAxisExtent`的值在区间[450/4，450/3)内的话，子元素最终实际长度都为112.5，而`childAspectRatio`所指的子元素横轴和主轴的长度比为**最终的长度比**。

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) mainAxisSpacing: 0.0

*   3.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) crossAxisSpacing: 0.0

*   4.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) childAspectRatio: 1.0

<br>

---

GridView 组件示例：

```dart
GridView(
    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3, // 每行 Widget 的数量
    ),
    children: List(9).map((item) {
        return Container(
            color: Colors.pink,
            child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                    Icon(Icons.ac_unit),
                    Text('雪花'),
                ],
            ),
        );
    }).toList(),
),
```

<br>

---

## GridView.builder

上面介绍的`GridView` 会提前将所有子 widget 都构建好，所以只适用于子 widget 数量比较少时，当子 widget 比较多时，我们可以通过 [GridView.builder](https://api.flutter.dev/flutter/widgets/GridView/GridView.builder.html) 来动态创建子 widget。

<br>

`GridView.builder`特有参数：

*   1.   @required [SliverGridDelegate](https://api.flutter.dev/flutter/rendering/SliverGridDelegate-class.html) gridDelegate,

*   2.   @required [IndexedWidgetBuilder](https://api.flutter.dev/flutter/widgets/IndexedWidgetBuilder.html) itemBuilder

*   3.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) itemCount

<br>

---

GridView.builder 示例：

```dart
Container(
    width: double.infinity,
    height: 300,
    color: Colors.deepPurple,
    alignment: Alignment.center,
    child: GridView.builder(
        itemCount: 15,
        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
            maxCrossAxisExtent: 120,
        ),
        itemBuilder: (BuildContext context, int index) {
            return Container(
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.blue),
                ),
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[Icon(Icons.ac_unit), Text('雪花'),],
                ),
            );
        },
    ),
),
```

<br>

---

## GridView.count

[GridView.count](https://api.flutter.dev/flutter/widgets/GridView/GridView.count.html) 构造函数内部使用了 `SliverGridDelegateWithFixedCrossAxisCount`，我们通过它可以快速的创建横轴固定数量子元素的`GridView`，

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

GridView.count 示例：

```dart
Container(
    width: double.infinity,
    height: 200,
    color: Colors.deepPurple,
    alignment: Alignment.center,
    child: GridView.count(
        crossAxisCount: 4,
        children: List(10).map((item) {
            return Container(
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.blue),
                ),
                child: Column(
                    children: <Widget>[
                        Icon(Icons.ac_unit),
                        Text('雪花'),
                    ],
                ),
            );
        }).toList(),
    ),
),
```

<br>

---

## GridView.extent

[GridView.extent](https://api.flutter.dev/flutter/widgets/GridView/GridView.extent.html) 构造函数内部使用了 `SliverGridDelegateWithMaxCrossAxisExtent`，我们通过它可以快速的创建纵轴子元素为固定最大长度的的 `GridView `。

<br>

`GridView.extent`特有参数：

*   1.   @required [double](https://api.flutter.dev/flutter/dart-core/double-class.html) maxCrossAxisExtent

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) mainAxisSpacing: 0.0

*   3.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) crossAxisSpacing: 0.0

*   4.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) childAspectRatio: 1.0

*   5.   [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start
