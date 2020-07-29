---
title: 2.2：Scaffold脚手架
---

# 2.2 Scaffold脚手架

<br>

Scaffold是我们布局的主要支撑部件，每一个用户界面都应该有一个Scaffold根部件。Scaffold脚手架是Material Design布局结构的基本实现，通过Scaffold脚手架快速搭建我们的用户界面结构，提供了用于显示drawer、snackbar和底部sheet的API。

## Scaffold

```dart
const Scaffold({
    Key key,
    PreferredSizeWidget appBar, // 头部导航栏
    Widget body, // 页面主题
    Widget floatingActionButton, // 悬浮按钮
    FloatingActionButtonLocation floatingActionButtonLocation, // 悬浮按钮位置
    FloatingActionButtonAnimator floatingActionButtonAnimator, // 悬浮按钮动画
    List<Widget> persistentFooterButtons, // 显示在底部的一组按钮
    Widget drawer, // 侧拉抽屉菜单
    Widget endDrawer, // 侧拉抽屉菜单 -- 和上面相反
    Widget bottomNavigationBar, // 显示在底部的导航栏
    Widget bottomSheet, // 要显示的持久底部工作表
    Color backgroundColor, // 背景颜色
    bool resizeToAvoidBottomPadding, // 已废弃
    bool resizeToAvoidBottomInset, // 浮动小部件自动调整，以避免弹出键盘时被遮盖
    bool primary: true,
    DragStartBehavior drawerDragStartBehavior: DragStartBehavior.start,
    bool extendBody: false,
    bool extendBodyBehindAppBar: false,
    Color drawerScrimColor, // 抽屉打开时用来遮盖主要内容的涂布颜色
    double drawerEdgeDragWidth,
    bool drawerEnableOpenDragGesture: true,
    bool endDrawerEnableOpenDragGesture: true
})
```



