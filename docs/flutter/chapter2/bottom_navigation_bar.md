---
title: 2.7：BottomNavigationBar
---

# 2.7 BottomNavigationBar

<br>

## BottomNavigationBar

[BottomNavigationBar](https://api.flutter.dev/flutter/material/BottomNavigationBar-class.html) 

<br>

*   1.   @required [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[BottomNavigationBarItem](https://api.flutter.dev/flutter/widgets/BottomNavigationBarItem-class.html)\> -- **items**，底部导航栏的显示项；

*   2.   [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)\<[int](https://api.flutter.dev/flutter/dart-core/int-class.html)\> -- **onTap**，点击导航栏子项时触发的回调‘

*   3.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- **currentIndex**: 0，当前显示项的下标；

*   4.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) elevation: 8.0

*   5.   [BottomNavigationBarType](https://api.flutter.dev/flutter/material/BottomNavigationBarType-class.html) -- **type**，底部导航栏的类型，有 fixed 和 shifting 两个类型，显示效果不一样；

*   6.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **fixedColor**，底部导航栏 type 为 fixed 时导航栏的颜色，如果为空的话默认使用 ThemeData.primaryColor；

*   7.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) backgroundColor

*   8.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **iconSize**: 24.0，icon 的大小；

*   9.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) selectedItemColor

*   10.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) unselectedItemColor

*   11.   [IconThemeData](https://api.flutter.dev/flutter/widgets/IconThemeData-class.html) selectedIconTheme: const IconThemeData()

*   12.   [IconThemeData](https://api.flutter.dev/flutter/widgets/IconThemeData-class.html) unselectedIconTheme: const IconThemeData()

*   13.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) selectedFontSize: 14.0

*   14.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) unselectedFontSize: 12.0

*   15.   [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) selectedLabelStyle

*   16.   [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) unselectedLabelStyle

*   17.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) showSelectedLabels: true

*   18.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) showUnselectedLabels

<br>

---

## BottomNavigationBarItem

[BottomNavigationBarItem](https://api.flutter.dev/flutter/widgets/BottomNavigationBarItem-class.html) 

<br>

*   1.   @required [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **icon**，要显示的图标控件，一般都是 Iocn；

*   2.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **title**，要显示的标题控件，一般都是 Text；

*   3.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **activeIcon**，选中时要显示的 icon，一般也是 Icon；

*   4.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **backgroundColor**，BottomNavigationBarType 为 shifting 时的背景颜色；

