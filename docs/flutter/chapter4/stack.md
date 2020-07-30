---
title: 4.5：层叠布局
---

# 4.5 层叠布局

层叠布局和 Web 中的绝对定位相似，Flutter中使用 `Stack` 和 `Positioned` 这两个组件来配合实现绝对定位，我们可以指定一个或多个子元素相对于父元素各个边的精确偏移，并且可以按照代码中声明的顺序将子组件堆叠起来。

如果需要精准的控制子节点在某个特定的位置，可以使用 `Positioned`；如果只是需要控制子节点在某个方位上， `alignment` 属性即可满足要求。

<br>

---

## Stack

[Stack](https://api.flutter.dev/flutter/widgets/Stack-class.html) 允许子组件堆叠，`Stack`会继承父类的 宽、高。

<br>

*   1.  [AlignmentGeometry](https://api.flutter.dev/flutter/painting/AlignmentGeometry-class.html) -- **alignment**: AlignmentDirectional.topStart，此参数决定如何去对齐没有定位（没有使用Positioned）或部分定位的子组件。所谓部分定位，在这里特指没有在某一个轴上定位：left、right为横轴，top、bottom为纵轴，只要包含某个轴上的一个定位属性就算在该轴上有定位；

*   2.  [TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html) -- **textDirection**，和Row、Wrap的textDirection功能一样，都用于确定alignment对齐的参考系，即：textDirection的值为TextDirection.ltr，则alignment的start代表左，end代表右，即从左往右的顺序；textDirection的值为TextDirection.rtl，则alignment的start代表右，end代表左，即从右往左的顺序；

*   3.  [StackFit](https://api.flutter.dev/flutter/rendering/StackFit-class.html) -- **fit**: StackFit.loose，此参数用于确定没有定位的子组件如何去适应Stack的大小。StackFit.loose表示使用子组件的大小，StackFit.expand表示扩伸到Stack的大小；

*   4.  [Overflow](https://api.flutter.dev/flutter/rendering/Overflow-class.html) -- **overflow**: Overflow.clip，此属性决定如何显示超出Stack显示空间的子组件；值为Overflow.clip时，超出部分会被剪裁（隐藏），值为Overflow.visible 时则不会；

*   5.  [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children: const []

<br>

---

## Positioned

[Positioned](https://api.flutter.dev/flutter/widgets/Positioned-class.html) 则根据`Stack`的四个角来确定子组件的位置。

<br>

*   1.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **left**，距离 Stack 左边的距离；

*   2.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **top**，距离 Stack 左边的距离；

*   3.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **right**，距离 Stack 左边的距离；

*   4.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **bottom**，距离 Stack 左边的距离；

*   5.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **width**，指定需要定位元素的宽度；

*   6.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **height**，指定需要定位元素的宽度；

*   7.   @required [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) child 

<br>

::: tip

Positioned的width、height 和其它地方的意义稍微有点区别，此处用于配合left、top 、right、 bottom来定位组件；

:::

<br>

---

层叠布局综合示例：

```dart
Container(
    color: Colors.red,
    width: double.infinity,
    height: 400,
    child: Stack(
        overflow: Overflow.visible, // 超出可见
        children: <Widget>[
            Positioned(
                top: 10,
                right: 0,
                child: Container(
                    width: 150,
                    height: 150,
                    color: Colors.blue,
                    child: Text('a'),
                ),
            ),
            Positioned(
                width: 150,
                height: 150,
                top: 55,
                right: 20,
                child: Container(
                    color: Colors.green,
                    child: Text('b'),
                ),
            ),
            Positioned(
                bottom: -30,
                child: Container(
                    width: 150,
                    height: 150,
                    color: Colors.deepPurple,
                    child: Text('c'),
                ),
            ),
        ],
    ),
),
```



