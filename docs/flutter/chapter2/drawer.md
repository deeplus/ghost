---
title: 2.6：Drawer
---

# 2.6 Drawer



## Drawer

[Drawer](https://api.flutter.dev/flutter/material/Drawer-class.html) 

<br>

*   1.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **elevation**: 16.0，背景高度；

*   2.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) child

*   3.   [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **semanticLabel**，标签；

<br>

---

## UserAccountsDrawerHeader

[UserAccountsDrawerHeader](https://api.flutter.dev/flutter/material/UserAccountsDrawerHeader-class.html#constructors) 

<br>

*   1.   [Decoration](https://api.flutter.dev/flutter/painting/Decoration-class.html) -- **decoration**，头部装饰；

*   2.   [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) -- **margin**: const EdgeInsets.only(bottom: 8.0)，外边距；

*   3.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **currentAccountPicture**，主图像；

*   4.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> -- **otherAccountsPictures**，附图像；

*   5.   @required [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **accountName**，标题；

*   6.   @required [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **accountEmail**，副标题；

*   7.   [VoidCallback](https://api.flutter.dev/flutter/dart-ui/VoidCallback.html) -- **onDetailsPressed**，当 accountName 或者 accountEmail 被点击时触发的回调函数，可以用来显示其它额外的信息；

*   8.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) arrowColor: Colors.white