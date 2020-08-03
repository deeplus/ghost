---
title: 6.6：Sliver家族
---

# 6.6 Sliver家族成员

`Sliver`是可视口的一个小块，这个小块可以实现一些有趣的滚动效果。

通常情况下，一个可滚动组件的子组件肯能会很多，因而占用的总高度也会非常大，如果要把所有的子组件一次性构建出来将会非常昂贵，为此，Flutter 提出了一个 `Sliver`(中文为“薄片”的意思) 概念：如果一个可滚动组件支持 `Sliver` 模型， 那么该滚动组件就可以将子组件分成好多个“薄片”(`Sliver`)，只有当 `Sliver` 出现在视口中时才会去构建它，这种模型也被称为“**基于Sliver的延迟构建模型**”。

<br>

---

## SliverList

[SliverList](https://api.flutter.dev/flutter/widgets/SliverList-class.html) 类似于 `ListView.builder` ，它有两种表现形式：SliverChildBuilderDelegate 和 SliverChildListDelegate ，二者的区别在于 SliverChildBuilderDelegate 可以加载不确定数量的列表，而 SliverChildListDelegate 只能加载固定数量的列表；

<br>

*   1.   @required [SliverChildDelegate](https://api.flutter.dev/flutter/widgets/SliverChildDelegate-class.html) delegate

<br>

```dart
List list = [
    {
        'id': '1',
        'title': '首艘国产航母将比辽宁舰更快形成初始作战能力',
        'picUrl': 'http://www.tanzhouweb.com/vueProject/image/newsList/1.jpg',
    },
    {
        'id': '2',
        'title': '不忘初心躬身强军实践 牢记使命传承红色血脉',
        'picUrl': 'http://www.tanzhouweb.com/vueProject/image/newsList/2.jpg',
    },
    {
        'id': '3',
        'title': '中国近年造舰量惊人 舰艇总量已比肩老牌海上大国',
        'picUrl': 'http://www.tanzhouweb.com/vueProject/image/newsList/3.jpg',
    },
    {
        'id': '4',
        'title': '女排长原是“火凤凰',
        'picUrl': 'http://www.tanzhouweb.com/vueProject/image/newsList/4.jpg'
    }
];
```

```dart
CustomScrollView(
    slivers: <Widget>[
        SliverPadding(
            padding: EdgeInsets.all(10),
            sliver: SliverList(
                delegate: SliverChildBuilderDelegate(
                    (BuildContext context, int index) {
                        return Padding(
                            padding: EdgeInsets.only(bottom: 10),
                            child: Image.network(
                                '${list[index]['picUrl']}',
                                fit: BoxFit.cover,
                            ),
                        );
                    },
                    childCount: list.length,
                ),
            ),
        ),
    ],
),
```

```dart
// 带标题的SliverList
CustomScrollView(
    slivers: <Widget>[
        SliverPadding(
            padding: EdgeInsets.all(10),
            sliver: SliverList(
                delegate: SliverChildBuilderDelegate(
                    (BuildContext context, int index) {
                        return Padding(
                            padding: EdgeInsets.only(bottom: 10),
                            child: Stack(
                                children: <Widget>[
                                    Image.network(
                                        '${list[index]['picUrl']}',
                                        fit: BoxFit.cover,
                                    ),
                                    Positioned(
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        child: Center(
                                            child: Text(
                                                '${list[index]['title']}',
                                                style: TextStyle(
                                                    color: Colors.white,
                                                    fontSize: 14,
                                                ),
                                            ),
                                        ),
                                    ),
                                ],
                            ),
                        );
                    },
                    childCount: list.length,
                ),
            ),
        ),
    ],
),
```

<br>

---

## SliverGrid

[SliverGrid](https://api.flutter.dev/flutter/widgets/SliverGrid-class.html) 类似于 `GridView.builder` ，可以通过 SliverGridDelegateWithFixedCrossAxisCount 设置一行固定显示几个 子元素，也可以通过 SliverGridDelegateWithMaxCrossAxisExtent 设置子元素的最大宽度，让 Flutter 决定一行显示几个。

<br>

*   1.   @required [SliverChildDelegate](https://api.flutter.dev/flutter/widgets/SliverChildDelegate-class.html) delegate

*   2.   @required [SliverGridDelegate](https://api.flutter.dev/flutter/rendering/SliverGridDelegate-class.html) gridDelegate

<br>

```dart
CustomScrollView(
    slivers: <Widget>[
        SliverGrid(
            delegate: SliverChildBuilderDelegate(
                (BuildContext context, int index) {
                    return Image.network(
                        '${list[index]['picUrl']}',
                        fit: BoxFit.cover,
                    );
                },
                childCount: list.length,
            ),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                mainAxisSpacing: 10,
                crossAxisSpacing: 10,
                childAspectRatio: 1.4
            ),
        ),
    ],
),
```

<br>

---

## SliverAppBar

[SliverAppBar](https://api.flutter.dev/flutter/material/SliverAppBar-class.html) 创建一个可以放置在 CustomScrollView 中的 material design 风格的应用程序栏，是一个可伸缩的头部，可以实现上拉收起，下拉展开效果；

<br>

*   1.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) leading

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) automaticallyImplyLeading: true

*   3.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) title

*   4.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> actions

*   5.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **flexibleSpace**，

*   6.   [PreferredSizeWidget](https://api.flutter.dev/flutter/widgets/PreferredSizeWidget-class.html) bottom

*   7.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) elevation

*   8.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) forceElevated: false

*   9.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) backgroundColor

*   10.   [Brightness](https://api.flutter.dev/flutter/dart-ui/Brightness-class.html) brightness

*   11.   [IconThemeData](https://api.flutter.dev/flutter/widgets/IconThemeData-class.html) iconTheme

*   12.   [IconThemeData](https://api.flutter.dev/flutter/widgets/IconThemeData-class.html) actionsIconTheme

*   13.   [TextTheme](https://api.flutter.dev/flutter/material/TextTheme-class.html) textTheme

*   14.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) primary: true

*   15.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) centerTitle

*   16.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) excludeHeaderSemantics: false

*   17.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) titleSpacing: NavigationToolbar.kMiddleSpacing

*   18.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **expandedHeight**，

*   19.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **floating**: false，

*   20.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **pinned**: false，

*   21.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **snap**: false，

*   22.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) stretch: false

*   23.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) stretchTriggerOffset: 100.0

*   24.  [AsyncCallback](https://api.flutter.dev/flutter/foundation/AsyncCallback.html) onStretchTrigger

*   25.   [ShapeBorder](https://api.flutter.dev/flutter/painting/ShapeBorder-class.html) shape

<br>

```dart
CustomScrollView(
    slivers: <Widget>[
        SliverAppBar(
            title: Text('Sliver AppBar'),
            centerTitle: true,
            pinned: true,
            expandedHeight: 160,
            flexibleSpace: FlexibleSpaceBar(
                background: Image.network(
                    'http://www.tanzhouweb.com/vueProject/image/fullView/8.jpg',
                    fit: BoxFit.cover,
                ),
            ),
        ),
        SliverPadding(
            padding: EdgeInsets.all(10),
            sliver: SliverList(
                delegate: SliverChildBuilderDelegate(
                    (BuildContext context, int index) {
                        return Padding(
                            padding: EdgeInsets.only(bottom: 10),
                            child: Image.network(
                                '${list[index]['picUrl']}',
                                fit: BoxFit.cover,
                            ),
                        );
                    },
                    childCount: list.length,
                ),
            ),
        ),
    ],
),
```

<br>

---

## SliverSafeArea

[SliverSafeArea](https://api.flutter.dev/flutter/widgets/SliverSafeArea-class.html) 

<br>

*   1.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) left: true

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) top: true

*   3.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) right: true

*   4.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) bottom: true

*   5.   [EdgeInsets](https://api.flutter.dev/flutter/painting/EdgeInsets-class.html) minimum: EdgeInsets.zero

*   6.   @required [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) sliver

<br>

```dart
CustomScrollView(
    slivers: <Widget>[
        SliverSafeArea(
            sliver: SliverPadding(
                padding: EdgeInsets.all(10),
                sliver: SliverList(
                    delegate: SliverChildBuilderDelegate(
                        (BuildContext context, int index) {
                            return Padding(
                                padding: EdgeInsets.only(bottom: 10),
                                child: Image.network(
                                    '${list[index]['picUrl']}',
                                    fit: BoxFit.cover,
                                ),
                            );
                        },
                        childCount: list.length,
                    ),
                ),
            ),
        ),
    ],
),
```

<br>

---

## SliverPersistentHeader

[SliverPersistentHeader](https://api.flutter.dev/flutter/widgets/SliverPersistentHeader-class.html) 创建一个长条，当它被滚动到视图的开始时，长条的大小会发生变化；有点类似 `SliverAppBar`，同样可以收起和展开，可以放置到 slivers 任何一个位置；这个部件可以根据滚动的距离缩小高度；

<br>

*   1.   @required [SliverPersistentHeaderDelegate](https://api.flutter.dev/flutter/widgets/SliverPersistentHeaderDelegate-class.html) delegate

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) pinned: false

*   3.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) floating: false

<br>

---

## SliverFillRemaining

[SliverFillRemaining](https://api.flutter.dev/flutter/widgets/SliverFillRemaining-class.html) 创建填充视图中剩余空间的条块，这个部件一般用于最后填充用的，会占有一个屏幕的高度，可以在 child 属性加入需要展示的部件；

<br>

*   1.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) child

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) hasScrollBody: true

*   3.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) fillOverscroll: false

<br>

---

## SliverToBoxAdapter

[SliverToBoxAdapter](https://api.flutter.dev/flutter/widgets/SliverToBoxAdapter-class.html) 创建包含单个框小部件的条子，它的 child 属性可以加载普通 widget 组件；

<br>

*   1.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) child

<br>

---

## SliverPadding

[SliverPadding](https://api.flutter.dev/flutter/widgets/SliverPadding-class.html) 创建一个条子，该条子在另一条条子的每一边应用填充；可以设置 padding，子 widget 为 sliver；

<br>

*   1.   @required [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) padding

*   2.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) sliver

<br>

```dart
CustomScrollView(
    slivers: <Widget>[
        SliverPadding(
            padding: EdgeInsets.all(10),
            sliver: SliverGrid(
                delegate: SliverChildBuilderDelegate(
                    (BuildContext context, int index) {
                        return Image.network(
                            '${list[index]['picUrl']}',
                            fit: BoxFit.cover,
                        );
                    },
                    childCount: list.length,
                ),
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    mainAxisSpacing: 10,
                    crossAxisSpacing: 10,
                    childAspectRatio: 1.4
                ),
            ),
        ),
    ],
),
```





