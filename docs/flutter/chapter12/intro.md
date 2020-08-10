---
title: 12.1：Flutter事件介绍
---

# 12.1：事件介绍

<br>

Flutter中的手势系统有两个独立的层：

<br>

1. 第一层有原始指针（pointer）事件，它描述了屏幕上指针（例如，触摸，鼠标和触控笔）的位置和移动；
2. 第二层有手势，描述由一个或多个指针移动组成的语义动作；

<br>

---

## 原始指针事件

指针（Pointer）代表用户与设备屏幕交互的原始数据，Flutter 中四种类型的指针事件：

1. [PointerDownEvent](https://docs.flutter.io/flutter/gestures/PointerDownEvent-class.html) 指针接触到屏幕的特定位置；
2. [PointerMoveEvent](https://docs.flutter.io/flutter/gestures/PointerMoveEvent-class.html) 指针从屏幕上的一个位置移动到另一个位置；
3. [PointerUpEvent](https://docs.flutter.io/flutter/gestures/PointerUpEvent-class.html) 指针停止接触屏幕；
4. [PointerCancelEvent](https://docs.flutter.io/flutter/gestures/PointerCancelEvent-class.html) 指针的输入事件不再针对此应用（事件取消）；

<br>

---

## Listener

一次完整的原始指针事件分为三个阶段：手指按下、手指移动、和手指抬起，而更高级别的手势（如点击、双击、拖动等）都是基于这些原始事件的。原始指针事件有和 Web 开发中浏览器相似的 `事件冒泡`机制，但是 Flutter 中没有机制取消或停止“冒泡”过程，而浏览器的冒泡是可以停止的。

在 Flutter 中可以使用 [Listener](https://api.flutter.dev/flutter/widgets/Listener-class.html) 来监听原始触摸事件：

<br>

1. [PointerDownEventListener](https://api.flutter.dev/flutter/rendering/PointerDownEventListener.html) onPointerDown，手指按下；
2. [PointerMoveEventListener](https://api.flutter.dev/flutter/rendering/PointerMoveEventListener.html) onPointerMove，手指移动；
3. [PointerUpEventListener](https://api.flutter.dev/flutter/rendering/PointerUpEventListener.html) onPointerUp，手指抬起；
4. [PointerCancelEventListener](https://api.flutter.dev/flutter/rendering/PointerCancelEventListener.html) onPointerCancel，触摸事件取消；
5. [PointerSignalEventListener](https://api.flutter.dev/flutter/rendering/PointerSignalEventListener.html) onPointerSignal，
6. [HitTestBehavior](https://api.flutter.dev/flutter/rendering/HitTestBehavior-class.html) behavior: HitTestBehavior.deferToChild，在命中测试期间如何表现，注意，**只有通过命中测试的组件才能触发事件**。
7. [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) child，

<br>

---

事件参数：

1. position：它是鼠标相对于全局坐标的偏移；
2. delta：两次指针移动事件（PointerMoveEvent）的距离；
3. pressure：按压力度，如果手机屏幕支持压力传感器(如：iPhone的3D Touch)，此属性会更有意义，如果手机不支持，则始终为1；
4. orientation：指针移动方向，是一个角度值；

<br>

---

## Listener示例

```dart

```



