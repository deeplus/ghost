---
title: 5.1：Container容器
---

# 5.1 Container容器

<br>

[Container](https://api.flutter.dev/flutter/widgets/Container/Container.html) 是一个组合类容器，它本身不对应具体的`RenderObject`，它是`DecoratedBox`、`ConstrainedBox、Transform`、`Padding`、`Align`等组件组合的一个多功能容器，所以我们只需通过一个`Container`组件可以实现同时需要装饰、变换、限制的场景；

## Container

<br>

*   1.   [Key](https://api.flutter.dev/flutter/foundation/Key-class.html) -- **key**， Container唯一标识符，用于查找更新；

*   2.   [AlignmentGeometry](https://api.flutter.dev/flutter/painting/AlignmentGeometry-class.html) -- **alignment**，控制child的对齐方式，如果container或者container父节点尺寸大于child的尺寸，这个属性设置会起作用，有很多种对齐方式；

*   3.   [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) -- **padding**，decoration内部的空白区域，如果有child的话，child位于padding内部。padding与margin的不同之处在于，padding是包含在content内，而margin则是外部边界，设置点击事件的话，padding区域会响应，而margin区域不会响应；

*   4.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **color**，用来设置container背景色，如果foregroundDecoration设置的话，可能会遮盖color效果；

*   5.   [Decoration](https://api.flutter.dev/flutter/painting/Decoration-class.html) -- **decoration**，绘制在child后面的装饰，设置了decoration的话，就不能设置color属性，否则会报错，此时应该在decoration中进行颜色的设置；

*   6.   [Decoration](https://api.flutter.dev/flutter/painting/Decoration-class.html) -- **foregroundDecoration**，绘制在child前面的装饰；前景色

*   7.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **width**，container的宽度，设置为double.infinity可以强制在宽度上撑满，不设置，则根据child和父节点两者一起布局；

*   8.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **height**，container的高度，设置为double.infinity可以强制在高度上撑满；

*   9.   [BoxConstraints](https://api.flutter.dev/flutter/rendering/BoxConstraints-class.html) -- **constraints**，添加到child上额外的约束条件；

*   10.   [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) -- **margin**， 围绕在decoration和child之外的空白区域，不属于内容区域；

*   11.   [Matrix4](https://api.flutter.dev/flutter/vector_math_64/Matrix4-class.html) -- **transform**， 设置container的变换矩阵，类型为Matrix4；

*   12.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **child**， container中的内容widget；

<br>

---

## Container组成(盒模型)

*    最里层是 child 元素

*    child元素首先会被 padding 包着

*    然后是 constraints 限制的区域

*    最后是 margin

<br>

---

## Container绘制过程

*    首先绘制 transform 效果

*    接着绘制 decoration

*    然后绘制 child

*    最后绘制 foregroundDecoration

<br>

---

## Container自身尺寸调节情况

*    Container 在没有子节点时：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;会**试图变得足够大**。除非 constraints 有限制，否则在这种情况下，Container 会试图去变得足够小；

```dart
Container(
    color: Colors.deepPurple,
)
// 此时Container和视图一样大
```

<br>

*    Container在有子节点时：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;会**根据子节点尺寸调节自身尺寸**。如果Container构造器命名参数设置了width、height以及constraints，那么就会按照构造器中的参数来进行尺寸的调节。

```dart
Container(
	color: Colors.deepPurple,
	child: Text('hello'),
)
// 此时Container和Text一样大
```

<br>

*    alignment 属性会撑开Container：

```dart
Container(
    color: Colors.deepPurple,
    alignment: Alignment(0, 0),
    child: Text('hello'),
)
```

---

Container容器综合示例：

```dart
Container(
    constraints: BoxConstraints(
        maxWidth: 300,
        maxHeight: 200
    ),
    decoration: BoxDecoration(
        color: Colors.deepPurple,
        border: Border.all(
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid
        ),
        boxShadow: [
            BoxShadow(
                color: Colors.black,
                offset: Offset(3, 3),
                blurRadius: 20, // 模糊度
                spreadRadius: -10, // 扩散半径，负值表示缩小
            )
        ],
        shape: BoxShape.rectangle,
        borderRadius: BorderRadius.only(
            topLeft: Radius.circular(50),
        ),
        gradient: RadialGradient(colors: [
            Color.fromRGBO(255, 0, 0, .5),
            Colors.green,
        ]),
        image: DecorationImage(
            fit: BoxFit.cover,
            image: NetworkImage('https://h5sm.com/static/bgpig.jpg'),
            colorFilter: ColorFilter.mode(Colors.blue.withOpacity(.7), BlendMode.color)
        ),
    ),
),
```

