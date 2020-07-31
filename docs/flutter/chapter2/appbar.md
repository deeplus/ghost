---
title: 2.4：AppBar
---

# 2.4 AppBar

[AppBar](https://api.flutter.dev/flutter/material/AppBar-class.html) 

<br>

---

*   1.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **leading**，在标题前面显示的一个控件。在首页通常显示应用的 logo，在其他界面通常显示为返回按钮；

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) automaticallyImplyLeading: true

*   3.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **title**，Toolbar 中主要内容，通常显示为当前界面的标题文字；

*   4.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> -- **actions**，一个 Widget 列表，代表 Toolbar 中所显示的菜单，对于常用的菜单，通常使用 IconButton 来表示；对于不常用的菜单通常使用 PopupMenuButton 来显示为三个点，点击后弹出二级菜单；

*   5.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **flexibleSpace**，一个显示在 AppBar 下方的控件，高度和 AppBar 高度一样，可以实现一些特殊的效果，该属性通常在 SliverAppBar 中使用；

*   6.   [PreferredSizeWidget](https://api.flutter.dev/flutter/widgets/PreferredSizeWidget-class.html) -- **bottom**，一个 AppBarBottomWidget 对象，通常是 TabBar。用来在 Toolbar 标题下面显示一个 Tab 导航栏；

*   7.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **elevation**，纸墨设计中控件的 z 坐标顺序，默认值为 4，对于可滚动的 SliverAppBar，当 SliverAppBar 和内容同级的时候，该值为 0， 当内容滚动 SliverAppBar 变为 Toolbar 的时候，修改 elevation 的值；

*   8.   [ShapeBorder](https://api.flutter.dev/flutter/painting/ShapeBorder-class.html) shape

*   9.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **backgroundColor**，APPbar 的颜色，默认值为 ThemeData.primaryColor。该值通常和下面的三个属性一起使用；

*   10.   [Brightness](https://api.flutter.dev/flutter/dart-ui/Brightness-class.html) -- **brightness**，Appbar 的亮度，有白色和黑色两种主题，默认值为 ThemeData.primaryColorBrightness；

*   11.   [IconThemeData](https://api.flutter.dev/flutter/widgets/IconThemeData-class.html) -- **iconTheme**，Appbar 上图标的颜色、透明度、和尺寸信息。默认值为 ThemeData.primaryIconTheme；

*   12.   [TextTheme](https://api.flutter.dev/flutter/material/TextTheme-class.html) -- **textTheme**，Appbar 上的文字样式。默认值为 ThemeData.primaryTextTheme；

*   13.   [IconThemeData](https://api.flutter.dev/flutter/widgets/IconThemeData-class.html) -- actionsIconTheme

*   14.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) primary: true

*   15.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **centerTitle**，标题是否居中显示，默认值根据不同的操作系统显示方式不一样，true居中 false居左；

*   16.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) excludeHeaderSemantics: false

*   17.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) titleSpacing: NavigationToolbar.kMiddleSpacing

*   18.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) toolbarOpacity: 1.0

*   19.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) bottomOpacity: 1.0

