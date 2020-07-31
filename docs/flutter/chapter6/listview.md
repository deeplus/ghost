---
title: 6.3：ListView
---

# 6.2 ListView

<br>

---

## ListView

[ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html)（默认构造函数）有一个 `children` 参数，它接受一个 Widget 列表（List）。这种方式适合**只有少量的子组件**的情况，因为这种方式需要将所有 `children` 都提前创建好（这需要做大量工作），而不是等到子 widget 真正显示的时候再创建，也就是说通过默认构造函数构建的 ListView 没有应用基于 Sliver 的懒加载模型。实际上通过此方式创建的 `ListView` 和使用 `SingleChildScrollView` + `Column` 的方式没有本质的区别。

<br>

`可滚动widget公共参数`：

*   1.   [Key](https://api.flutter.dev/flutter/foundation/Key-class.html) -- **key**，当前组件的唯一表示符；

*   2.   [Axis](https://api.flutter.dev/flutter/painting/Axis-class.html) -- **scrollDirection**: Axis.vertical，滚动方向，默认是垂直；

*   3.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **reverse**: false，是否按照阅读方向相反的方向滑动；

*   4.   [ScrollController](https://api.flutter.dev/flutter/widgets/ScrollController-class.html) -- **controller**，控制器对象，主要作用是控制滚动位置与监听滚动事件；

*   5.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **primary**，是否使用 widget 树中默认的 `PrimaryScrollController`。当滑动方向为垂直方向并且 controller 没有指定时，primary 默认为 true；

*   6.   [ScrollPhysics](https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html) -- **physics**，此属性接受一个 `ScrollPhysics` 类型的对象，决定可滚动组件如何响应用户操作；

*   7.   [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) -- **padding**，填充边距；

---

`ListView各个构造函数（ListView有多个构造函数）的共同参数`：

*   1.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **itemExtent**，强制 ListView 的 children 的长度为 itemExtent 的值。

指定 itemExtent 的值比让子元素决定自身长度在绘制时**更高效**，特别是在滚动位置频繁变化的状态下，因为设置 itemExtent 可以让滚动系统提前知道列表的长度。

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **shrinkWrap**: false，是否根据 子widget 的总长度设置 `ListView` 的总长度，默认 false；

*   3.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **addAutomaticKeepAlives**: true，是否将列表项包裹在 [AutomaticKeepAlive](https://api.flutter.dev/flutter/widgets/AutomaticKeepAlive-class.html) 中；

在懒加载时，如果设置了包裹那么在此列表项滑出屏幕外时不会被 GC。如果此列表项需要自己维护 KeepAlive 状态，那么此参数需为 false。

*   4.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **addRepaintBoundaries**: true，是否将列表包裹在 [RepaintBoundary]() 中；

当选择将列表项包裹在 `RepaintBoundary` 时，在滚动过程中可以避免重绘，如果此列表项需要自己维护 KeepAlive 状态，那么此参数需为 false。

*   5.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **cacheExtent**，设置预加载的区域，范围在窗口可见范围之前与之后。如果设置为 0，表示关闭预加载；

---

`子widget参数`：

*   1.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> **children**: const []，子节点列表；

*   2.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **addSemanticIndexes**: true，是否给子元素添加索引，默认为 true；

*   3.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- **semanticChildCount**，提供语义信息的子节点的数量；

*   4.  [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start

*   5.  [ScrollViewKeyboardDismissBehavior](https://api.flutter.dev/flutter/widgets/ScrollViewKeyboardDismissBehavior-class.html) keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.manual

<br>

---

## ListView.builder

[ListView.builder](https://api.flutter.dev/flutter/widgets/ListView/ListView.builder.html) 适合列表项比较多（或者无限）的情况，因为只有当子组件真正显示的时候才会被创建，也就说通过该构造函数创建的 `ListView` 是支持基于 Sliver 的懒加载模型的。

<br>

*   1.   @required [IndexedWidgetBuilder](https://api.flutter.dev/flutter/widgets/IndexedWidgetBuilder.html) -- **itemBuilder**，列表项的构建器，类型为 IndexedWidgetBuilder，返回值为一个 widget。当列表滚动到具体的 index 位置时，会调用该构建器构建列表项；

*   2.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- **itemCount**，列表项的数量，如果为null，则为无限列表；

<br>

```dart
ListView.builder(
    itemCount: 40,
    itemExtent: 50, // 强制每一个子项高度为50
    itemBuilder: (BuildContext context, int index){
        return Text('$index');
    },
),
```

<br>

---

## ListView.separated

[ListView.separated](https://api.flutter.dev/flutter/widgets/ListView/ListView.separated.html) 可以在生成的列表项之间添加一个分割组件，它比 `ListView.builder` 多了一个`separatorBuilder`参数，该参数是一个分割组件生成器。

<br>

*   1.   @required [IndexedWidgetBuilder](https://api.flutter.dev/flutter/widgets/IndexedWidgetBuilder.html) separatorBuilder

*   2.   @required [IndexedWidgetBuilder](https://api.flutter.dev/flutter/widgets/IndexedWidgetBuilder.html) itemBuilder

*   3.   @required [int](https://api.flutter.dev/flutter/dart-core/int-class.html) itemCount

<br>

```dart
class OtherContainer extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        Widget d1=Divider(color: Colors.blue,);
        Widget d2=Divider(color: Colors.green);
        return Scaffold(
            appBar: AppBar(
                title: Text('其它基本部件'),
                centerTitle: true,
            ),
            body: ListView.separated(
                itemCount: 40,
                itemBuilder: (BuildContext context, int index){
                    return Text('$index');
                },
                //分割器构造器
                separatorBuilder: (BuildContext context, int index) {
                    // 奇数行添加一条蓝色下划线，偶数行添加一条绿色下划线
                    return index % 2 == 0 ? d1 : d2; 
                },
            ),
        );
    }
}
```

