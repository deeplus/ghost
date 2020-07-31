---
title: 2.2：ThemeData
---

# 2.2 ThemeData

`MaterialApp` 参数提供了 `theme`  与  `darkTheme` 两个属性入口让我们设置两种模式下的颜色及文字样式，[ThemeData](https://api.flutter.dev/flutter/material/ThemeData-class.html) 中近乎涵盖了所有 Material Widget 中所使用的颜色及主题，通过全局配置，方便以后直接复用。

<br>

*   1.   [Brightness](https://api.flutter.dev/flutter/dart-ui/Brightness-class.html) -- **brightness**，应用程序的整体主题亮度，深色还是浅色；

*   2.   [VisualDensity](https://api.flutter.dev/flutter/material/VisualDensity-class.html) visualDensity

*   3.   [MaterialColor](https://api.flutter.dev/flutter/material/MaterialColor-class.html) -- **primarySwatch**，主题颜色样本，Material 主题中定义一种颜色；

*   4.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **primaryColor**，App主要部分的背景色（ToolBar,Tabbar等），决定导航栏颜色；

*   5.   [Brightness](https://api.flutter.dev/flutter/dart-ui/Brightness-class.html) -- **primaryColorBrightness**，primaryColor 的亮度，用于确定设置在 primaryColor上部的文本和图标颜色(如:工具栏文本(toolbar text)；

*   6.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **primaryColorLight**，primaryColor 的较浅版本；

*   7.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **primaryColorDark**，primaryColor 的较深版本；

*   8.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **accentColor**，前景色(按钮、文本、覆盖边缘效果等)；决定大多数Widget的颜色，如进度条、开关等；

*   9.   [Brightness](https://api.flutter.dev/flutter/dart-ui/Brightness-class.html) -- **accentColorBrightness**，accentColor的亮度。用于确定位于accentColor上部的文本和图标颜色(例如，浮动操作按钮(FloatingButton)上的图标)；

*   10.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **canvasColor**，MaterialType.canvas Material 的默认颜色；

*   11.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **scaffoldBackgroundColor**，作为Scaffold下的Material默认颜色，用于materia应用程序或app内页面的背景色；

*   12.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **bottomAppBarColor**，bottomAppBarColor的默认颜色。这可以通过指定BottomAppBar.color来覆盖；

*   13.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **cardColor**，用在卡片(Card)上的Material的颜色，卡片颜色；

*   14.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **dividerColor**，分隔符(Dividers)和弹窗分隔符(PopupMenuDividers)的颜色，也用于ListTiles和DataTables的行之间；要创建使用这种颜色的合适的边界，请考虑Divider.createBorderSide；分割线颜色；

*   15.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) focusColor

*   16.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) hoverColor

*   17.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **highlightColor**，用于墨水喷溅动画或指示菜单被选中时的高亮颜色；

*   18.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **splashColor**，墨水溅出的颜色；

*   19.   [InteractiveInkFeatureFactory](https://api.flutter.dev/flutter/material/InteractiveInkFeatureFactory-class.html) -- **splashFactory**，定义InkWall和InkResponse产成的墨水喷溅时的外观；

*   20.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **selectedRowColor**，用于高亮选定行的颜色；

*   21.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **unselectedWidgetColor**，小部件处于非活动(但启用)状态时使用的颜色。例如，未选中的复选框。通常与accentColor形成对比；

*   22.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **disabledColor**，无效的部件(widget)的颜色，不管它们的状态如何。例如，一个禁用的复选框(可以选中或不选中)；

*   23.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **buttonColor**，Material 中 RaisedButtons 使用的默认填充色；

*   24.   [ButtonThemeData](https://api.flutter.dev/flutter/material/ButtonThemeData-class.html) -- **buttonTheme**，定义按钮小部件的默认配置，如RaisedButton和FlatButton；按钮主题；

*   25.   [ToggleButtonsThemeData](https://api.flutter.dev/flutter/material/ToggleButtonsThemeData-class.html) toggleButtonsTheme

*   26.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **secondaryHeaderColor**，有选定行时PaginatedDataTable标题的颜色；

*   27.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **textSelectionColor**，文本字段(如TextField)中文本被选中的颜色；

*   28.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **cursorColor**，在 Material-style 文本字段(如TextField)中光标的颜色；输入框光标颜色；

*   29.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **textSelectionHandleColor**，用于调整当前选定文本部分的句柄的颜色；

*   30.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **backgroundColor**，与primaryColor对比的颜色(例如 用作进度条的剩余部分)；

*   31.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **dialogBackgroundColor**，Dialog元素的背景色；对话框背景颜色

*   32.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **indicatorColor**，TabBar中选项选中的指示器颜色；

*   33.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **hintColor**，用于提示文本或占位符文本的颜色，例如在TextField中；

*   34.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **errorColor**，用于输入验证错误的颜色，例如在TextField中；

*   35.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **toggleableActiveColor**，用于突出显示切换Widget（如Switch，Radio和Checkbox）的活动状态的颜色；

*   36.   [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **fontFamily**，字体类型；文字字体；

*   37.   [TextTheme](https://api.flutter.dev/flutter/material/TextTheme-class.html) -- **textTheme**，与卡片和画布对比的文本颜色；字体主题，包括标题、body等文字样式；

*   38.   [TextTheme](https://api.flutter.dev/flutter/material/TextTheme-class.html) -- **primaryTextTheme**，与primary color形成对比的文本主题；

*   39.   [TextTheme](https://api.flutter.dev/flutter/material/TextTheme-class.html) -- **accentTextTheme**，与accent color形成对比的文本主题；

*   40.   [InputDecorationTheme](https://api.flutter.dev/flutter/material/InputDecorationTheme-class.html) -- **inputDecorationTheme**，InputDecorator、TextField和TextFormField的默认InputDecoration值基于此主题；

*   41.   [IconThemeData](https://api.flutter.dev/flutter/widgets/IconThemeData-class.html) -- **iconTheme**，与卡片和画布颜色形成对比的图标主题；Icon的默认样式；

*   42.   [IconThemeData](https://api.flutter.dev/flutter/widgets/IconThemeData-class.html) -- **primaryIconTheme**，与原色(primary color)形成对比的图标主题；

*   43.   [IconThemeData](https://api.flutter.dev/flutter/widgets/IconThemeData-class.html) -- **accentIconTheme**，与前景色(accent color)形成对比的图标主题；

*   44.   [SliderThemeData](https://api.flutter.dev/flutter/material/SliderThemeData-class.html) -- **sliderTheme**，用于渲染Slider的颜色和形状；

*   45.   [TabBarTheme](https://api.flutter.dev/flutter/material/TabBarTheme-class.html) -- **tabBarTheme**，一个主题，用于自定义选项卡栏指示器的尺寸、形状和颜色；

*   46.   [TooltipThemeData](https://api.flutter.dev/flutter/material/TooltipThemeData-class.html) tooltipTheme

*   47.   [CardTheme](https://api.flutter.dev/flutter/material/CardTheme-class.html) cardTheme

*   48.   [ChipThemeData](https://api.flutter.dev/flutter/material/ChipThemeData-class.html) -- **chipTheme**，用于Chip的颜色和样式；

*   49.   [TargetPlatform](https://api.flutter.dev/flutter/foundation/TargetPlatform-class.html) -- **platform**，widget应该适应目标的平台；指定平台，应用特定平台控件风格

*   50.   [MaterialTapTargetSize](https://api.flutter.dev/flutter/material/MaterialTapTargetSize-class.html) -- **materialTapTargetSize**，,配置特定材料部件的hit测试大小；

*   51.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) applyElevationOverlayColor

*   52.   [PageTransitionsTheme](https://api.flutter.dev/flutter/material/PageTransitionsTheme-class.html) -- **pageTransitionsTheme**，每个目标平台的默认MaterialPageRoute转换；

*   53.   [AppBarTheme](https://api.flutter.dev/flutter/material/AppBarTheme-class.html) appBarTheme

*   54.   [BottomAppBarTheme](https://api.flutter.dev/flutter/material/BottomAppBarTheme-class.html) bottomAppBarTheme

*   55.   [ColorScheme](https://api.flutter.dev/flutter/material/ColorScheme-class.html) -- **colorScheme**，一组13种颜色，可用于配置大多数组件的颜色属性；

*   56.   [DialogTheme](https://api.flutter.dev/flutter/material/DialogTheme-class.html) dialogTheme

*   57.   [FloatingActionButtonThemeData](https://api.flutter.dev/flutter/material/FloatingActionButtonThemeData-class.html) floatingActionButtonTheme

*   58.   [NavigationRailThemeData](https://api.flutter.dev/flutter/material/NavigationRailThemeData-class.html) navigationRailTheme

*   59.   [Typography](https://api.flutter.dev/flutter/material/Typography-class.html) -- **typography**，用于配置TextTheme、primaryTextTheme和accentTextTheme的颜色和几何文本主题值；

*   60.   [CupertinoThemeData](https://api.flutter.dev/flutter/cupertino/CupertinoThemeData-class.html) cupertinoOverrideTheme

*   61.   [SnackBarThemeData](https://api.flutter.dev/flutter/material/SnackBarThemeData-class.html) snackBarTheme

*   62.   [BottomSheetThemeData](https://api.flutter.dev/flutter/material/BottomSheetThemeData-class.html) bottomSheetTheme

*   63.   [PopupMenuThemeData](https://api.flutter.dev/flutter/material/PopupMenuThemeData-class.html) popupMenuTheme

*   64.   [MaterialBannerThemeData](https://api.flutter.dev/flutter/material/MaterialBannerThemeData-class.html) bannerTheme

*   65.  [DividerThemeData](https://api.flutter.dev/flutter/material/DividerThemeData-class.html) dividerTheme 

*   66.   [ButtonBarThemeData](https://api.flutter.dev/flutter/material/ButtonBarThemeData-class.html) buttonBarTheme

<br>

