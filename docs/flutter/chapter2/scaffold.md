---
title: 2.3：Scaffold脚手架
---

# 2.3 Scaffold脚手架

[Scaffold](https://api.flutter.dev/flutter/material/Scaffold-class.html) 是我们布局的主要支撑部件，每一个用户界面都应该有一个Scaffold根部件。Scaffold 脚手架是 Material Design 布局结构的基本实现，通过 Scaffold 脚手架快速搭建我们的用户界面结构，提供了用于显示 drawer 、snackbar 和底部sheet 的API。

<br>

---

Scaffold 属性：

*   1.   [PreferredSizeWidget](https://api.flutter.dev/flutter/widgets/PreferredSizeWidget-class.html) -- **appBar**，显示在顶部导航栏；

*   2.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **body**，页面主体区域；

*   3.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **floatingActionButton**，悬浮按钮；

*   4.   [FloatingActionButtonLocation](https://api.flutter.dev/flutter/material/FloatingActionButtonLocation-class.html) -- **floatingActionButtonLocation**，悬浮按钮显示的位置；

*   5.   [FloatingActionButtonAnimator](https://api.flutter.dev/flutter/material/FloatingActionButtonAnimator-class.html) -- **floatingActionButtonAnimator**，悬浮按钮显示、隐藏动画；

*   6.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> -- **persistentFooterButtons**，显示在底部的一组按钮；

*   7.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **drawer**，左侧抽屉菜单；

*   8.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **endDrawer**，右侧抽屉菜单；

*   9.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **bottomNavigationBar**，显示在底部的导航栏；

*   10.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **bottomSheet**，要显示的持久底部工作表；

*   11.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **backgroundColor**，背景颜色；

*   12.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- ~~resizeToAvoidBottomPadding~~，已废弃；

*   13.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **resizeToAvoidBottomInset**，浮动小部件自动调整，以避免弹出键盘时被遮盖；

*   14.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **primary**: true，

*   15.   [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) drawerDragStartBehavior: DragStartBehavior.start

*   16.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) extendBody: false

*   17.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) extendBodyBehindAppBar: false

*   18.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **drawerScrimColor**，抽屉打开时用来遮盖主要内容（即body）的涂布颜色；

*   19.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- drawerEdgeDragWidth，

*   20.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) drawerEnableOpenDragGesture: true

*   21.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) endDrawerEnableOpenDragGesture: true

