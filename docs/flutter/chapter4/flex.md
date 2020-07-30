---
title: 4.3：弹性布局
---

# 4.3 弹性布局

弹性布局允许子组件按照一定比例来分配父容器空间;

Flutter 中的弹性布局主要通过 `Flex` 和 `Expanded` 来配合实现。

<br>

---

## Flex

&nbsp;&nbsp;&nbsp;&nbsp; [Flex](https://api.flutter.dev/flutter/widgets/Flex-class.html) 组件可以沿着水平或垂直方向排列子组件，如果你知道主轴方向，使用 `Row` 或 `Column` 会方便一些，因为 `Row` 和 `Column` 都继承自 `Flex`，**参数基本相同**，所以能使用 `Flex` 的地方基本上都可以使用 `Row` 或 `Column` 。

`Flex` 本身功能是很强大的，它也可以和  `Expanded` 组件配合实现弹性布局。

<br>

---

`Flex`特有属性：

*   1.   @required [Axis](https://api.flutter.dev/flutter/painting/Axis-class.html) -- **direction**，主轴方向；

<br>

---

其它属性：

*   1.  [TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html) -- **textDirection**，表示`子组件`在主轴方向的排列顺序（是从左往右还是从右往左）；

*   2.  [MainAxisSize](https://api.flutter.dev/flutter/rendering/MainAxisSize-class.html) -- **mainAxisSize**: MainAxisSize.max，表示 `Row本身` 在主轴方向所占用的空间；
        *   MainAxisSize.max，表示`尽可能多`的占用主轴空间，此时无论子widgets实际占用多少主轴空间，Row 的宽度始终等于主轴方向的最大宽度；
        *   MainAxisSize.min表示`尽可能少`的占用主轴空间，当子组件没有占满主轴剩余空间，则 Row 的实际宽度等于所有子组件占用的主轴空间；

*   3.  [MainAxisAlignment](https://api.flutter.dev/flutter/rendering/MainAxisAlignment-class.html) -- **mainAxisAlignment**: MainAxisAlignment.start，表示`子组件`在主轴方向的对齐方式；
        *   如果 mainAxisSize 值为 MainAxisSize.min ，则此属性无意义，因为子组件的宽度/高度等于 Row的 宽度/高度；
        *   只有当 mainAxisSize 的值为 MainAxisSize.max 时，此属性才有意义；

*   4.  [CrossAxisAlignment](https://api.flutter.dev/flutter/rendering/CrossAxisAlignment-class.html) -- **crossAxisAlignment**: CrossAxisAlignment.center，表示`子组件`在纵轴方向的对齐方式，该值会受到 verticalDirection 的影响；
        *   verticalDirection 值为 VerticalDirection.down 时 crossAxisAlignment.start 指顶部对齐；
        *   verticalDirection 值为 VerticalDirection.up 时，crossAxisAlignment.start 指底部对齐；
        *   crossAxisAlignment.end 和 crossAxisAlignment.start 正好相反；
        *   crossAxisAlignment.start 则不受影响；


*   5.   [VerticalDirection](https://api.flutter.dev/flutter/painting/VerticalDirection-class.html) -- **verticalDirection**: VerticalDirection.down，表示`Row`纵轴（垂直）的对齐方向，默认是VerticalDirection.down，表示从上到下；

*   6.   [TextBaseline](https://api.flutter.dev/flutter/dart-ui/TextBaseline-class.html) -- **textBaseline**，设置文本基线的基准值；

*   7.  [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> -- **children**: const [] ，子组件数组。

<br>

---

## Expanded

*    [Expanded](https://api.flutter.dev/flutter/widgets/Expanded-class.html) 可以按比例“伸缩” `Row` 、 `Column` 和 `Flex` 子组件所占用的空间。

<br>

---

`Expanded`属性：

*   1.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- **flex**: 1，

*   2.   **@required** Widget -- **child**,

<br>

---

### Flex组件示例：

```dart
 Container(
     color: Colors.red,
     alignment: Alignment.topLeft,
     child: Flex(
         direction: Axis.horizontal,
         children: <Widget>[
             Expanded(
                 child: Container(
                     height: 100,
                     color: Colors.pink,
                     child: Text('a'),
                 ),
             ),
             Expanded(
                 flex: 2,
                 child: Container(
                     height: 100,
                     color: Colors.green,
                     child: Text('a'),
                 ),
             ),
             Expanded(
                 child: Container(
                     height: 100,
                     color: Colors.blue,
                     child: Text('a'),
                 ),
             ),
         ],
     ),
 ),
```

