---
title: 2.1：MaterialApp简介
---

# 2.1 MaterialApp简介

为了继承主题数据,配置全局路由、路由守卫和一些其它配置，通常我们会把 [MaterialApp](https://api.flutter.dev/flutter/material/MaterialApp-class.html) 作为整个应用程序根部件使用；`MaterialApp` 窗口小部件完全是可选的，但是是一种很好的做法。

<br>

*   1.   [GlobalKey](https://api.flutter.dev/flutter/widgets/GlobalKey-class.html)\<[NavigatorState](https://api.flutter.dev/flutter/widgets/NavigatorState-class.html)\> -- **navigatorKey**，在构建导航器时使用的键；

*   2.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **home**，应用程序默认路由的小部件，用来定义当前应用打开的时候所显示的界面；

*   3.   [Map](https://api.flutter.dev/flutter/dart-core/Map-class.html)\<[String](https://api.flutter.dev/flutter/dart-core/String-class.html), [WidgetBuilder](https://api.flutter.dev/flutter/widgets/WidgetBuilder.html)\> -- **routes**: const {}，应用程序的顶级路由表；

*   4.   [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **initialRoute**，如果构建了导航器，则显示的第一个路由的名称；

*   5.   [RouteFactory](https://api.flutter.dev/flutter/widgets/RouteFactory.html) -- **onGenerateRoute**，应用程序导航到指定路由时使用的路由生成器回调；

*   6.   [InitialRouteListFactory](https://api.flutter.dev/flutter/widgets/InitialRouteListFactory.html) -- onGenerateInitialRoutes，

*   7.   [RouteFactory](https://api.flutter.dev/flutter/widgets/RouteFactory.html) -- **onUnknownRoute**，当 onGenerateRoute 无法生成路由(initialRoute除外)时调用；

*   8.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[NavigatorObserver](https://api.flutter.dev/flutter/widgets/NavigatorObserver-class.html)\> -- **navigatorObservers**: const []，为该应用程序创建的导航器的观察者列表；

*   9.   [TransitionBuilder](https://api.flutter.dev/flutter/widgets/TransitionBuilder.html) -- **builder**，用于在导航器上面插入小部件，但在由WidgetsApp小部件创建的其他小部件下面插入小部件，或用于完全替换导航器；

*   10.   [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **title**: ''，设备用于为用户识别应用程序的单行描述；

*   11.   [GenerateAppTitle](https://api.flutter.dev/flutter/widgets/GenerateAppTitle.html) -- **onGenerateTitle**，如果非空，则调用此回调函数来生成应用程序的标题字符串，否则使用标题；

*   12.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **color**，在操作系统界面中应用程序使用的主色（安卓模拟器能看到）；

*   13.   [ThemeData](https://api.flutter.dev/flutter/material/ThemeData-class.html) theme

*   14.   [ThemeData](https://api.flutter.dev/flutter/material/ThemeData-class.html) darkTheme

*   15.   [ThemeMode](https://api.flutter.dev/flutter/material/ThemeMode-class.html) themeMode: ThemeMode.system

*   16.   [Locale](https://api.flutter.dev/flutter/dart-ui/Locale-class.html) -- **locale**，此应用程序本地化小部件的初始区域设置基于此值；

*   17.   [Iterable](https://api.flutter.dev/flutter/dart-core/Iterable-class.html)\<[LocalizationsDelegate](https://api.flutter.dev/flutter/widgets/LocalizationsDelegate-class.html)\> -- **localizationsDelegates**，这个应用程序本地化小部件的委托；

*   18.   [LocaleListResolutionCallback](https://api.flutter.dev/flutter/widgets/LocaleListResolutionCallback.html) -- **localeListResolutionCallback**，这个回调负责在应用程序启动时以及用户更改设备的区域设置时选择应用程序的区域设置；

*   19.   [LocaleResolutionCallback](https://api.flutter.dev/flutter/widgets/LocaleResolutionCallback.html) localeResolutionCallback

*   20.   [Iterable](https://api.flutter.dev/flutter/dart-core/Iterable-class.html)\<[Locale](https://api.flutter.dev/flutter/dart-ui/Locale-class.html)\> -- **supportedLocales**: const [Locale('en', 'US')]，此应用程序已本地化的地区列表 ；

*   21.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **debugShowMaterialGrid**: false，打开绘制基线网格材质应用程序的网格纸覆盖；

*   22.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **showPerformanceOverlay**: false，打开性能叠加；

*   23.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **checkerboardRasterCacheImages**: false，打开栅格缓存图像的棋盘格；

*   24.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **checkerboardOffscreenLayers**: false，打开渲染到屏幕外位图的图层的棋盘格；

*   25.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **showSemanticsDebugger**: false，打开显示框架报告的可访问性信息的覆盖；

*   26.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **debugShowCheckedModeBanner**: true，在选中模式下打开一个小的“DEBUG”横幅，表示应用程序处于选中模式；

*   27.   [Map](https://api.flutter.dev/flutter/dart-core/Map-class.html)<[LogicalKeySet](https://api.flutter.dev/flutter/widgets/LogicalKeySet-class.html), [Intent](https://api.flutter.dev/flutter/widgets/Intent-class.html)> shortcuts

*   28.   [Map](https://api.flutter.dev/flutter/dart-core/Map-class.html)<[LocalKey](https://api.flutter.dev/flutter/foundation/LocalKey-class.html), [ActionFactory](https://api.flutter.dev/flutter/widgets/ActionFactory.html)> actions
