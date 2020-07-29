---
title: 4.2：线性布局
---

# 4.2 线性布局

*    所谓线性布局，即指沿水平或垂直方向排布子部件。

*   Flutter 中通过`Row`和`Column`来实现线性布局，`Row`和 `Column`都继承自`Flex` 。

*   `Row` 和 `Column` 都只会在主轴方向占用尽可能大的空间，而纵轴的宽度则取决于他们最大子元素的长度。

<br>

---

## Row

[Row](https://api.flutter.dev/flutter/widgets/Row-class.html) 的主轴是`水平`方向，可以在水平方向排列其子widget。

<br>

*   1.  [TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html) -- **textDirection**，表示`子组件`在主轴方向的排列顺序（是从左往右还是从右往左）；

*   2.   [MainAxisSize](https://api.flutter.dev/flutter/rendering/MainAxisSize-class.html) -- **mainAxisSize**: MainAxisSize.max，表示 `Row本身` 在主轴方向所占用的空间；
         *	MainAxisSize.max，表示`尽可能多`的占用水平方向的空间，此时无论子widgets实际占用多少水平空间，Row的宽度始终等于水平方向的最大宽度；
         *	MainAxisSize.min表示`尽可能少`的占用水平空间，当子组件没有占满水平剩余空间，则Row的实际宽度等于所有子组件占用的的水平空间；

*   3.  [MainAxisAlignment](https://api.flutter.dev/flutter/rendering/MainAxisAlignment-class.html) -- **mainAxisAlignment**: MainAxisAlignment.start，表示`子组件`在Row所占用的水平空间内对齐方式；
        *   如果 mainAxisSize 值为 MainAxisSize.min ，则此属性无意义，因为子组件的宽度等于 Row的 宽度；
        *   只有当 mainAxisSize 的值为 MainAxisSize.max 时，此属性才有意义；

*   4.  [CrossAxisAlignment](https://api.flutter.dev/flutter/rendering/CrossAxisAlignment-class.html) -- **crossAxisAlignment**: CrossAxisAlignment.center，表示`子组件`在纵轴方向的对齐方式；
        *   Row的高度等于子组件中最高的子元素高度，它的取值和MainAxisAlignment一样(包含start、end、 center三个值)，不同的是crossAxisAlignment的参考系是verticalDirection；
        *   verticalDirection 值为 VerticalDirection.down 时 crossAxisAlignment.start 指顶部对齐
        *   verticalDirection 值为 VerticalDirection.up 时，crossAxisAlignment.start 指底部对齐；
        *   crossAxisAlignment.end 和 crossAxisAlignment.start 正好相反；

*   5.  [VerticalDirection](https://api.flutter.dev/flutter/painting/VerticalDirection-class.html) -- **verticalDirection**: VerticalDirection.down，表示`Row`纵轴（垂直）的对齐方向，默认是VerticalDirection.down，表示从上到下；

*   6.   [TextBaseline](https://api.flutter.dev/flutter/dart-ui/TextBaseline-class.html) textBaseline，设置文本基线的基准值；

*   7.  [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children: const [] ，子部件数组。

<br>

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

 可以在垂直方向排列其子widget，参数和 `Row` 一样，不同的是主轴方向是`垂直`方向。

<br>

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



