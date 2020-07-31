---
title: 2.5：TabBar
---

# 2.5 TabBar

[TabBar](https://api.flutter.dev/flutter/material/TabBar-class.html)

<br>

---

*   1.   @required [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> -- **tabs**，显示的标签内容，一般使用Tab对象,也可以是其他的Widget；

*   2.   [TabController](https://api.flutter.dev/flutter/material/TabController-class.html) -- **controller**，TabController对象；

*   3.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **isScrollable**: false，是否可滚动；

*   4.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **indicatorColor**，指示器颜色；

*   5.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **indicatorWeight**: 2.0，指示器高度；

*   6.   [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) -- **indicatorPadding**: EdgeInsets.zero，底部指示器的Padding；

*   7.   [Decoration](https://api.flutter.dev/flutter/painting/Decoration-class.html) -- **indicator**，指示器decoration，例如边框等；

*   8.   [TabBarIndicatorSize](https://api.flutter.dev/flutter/material/TabBarIndicatorSize-class.html) -- **indicatorSize**，指示器大小计算方式，TabBarIndicatorSize.label跟文字等宽，TabBarIndicatorSize.tab跟每个tab等宽；

*   9.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **labelColor**，选中label颜色；

*   10.   [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) -- **labelStyle**，选中label的Style；

*   11.   [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) -- **labelPadding**，每个label的padding值；

*   12.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **unselectedLabelColor**，未选中label颜色；

*   13.   [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) -- **unselectedLabelStyle**，未选中label的Style；

*   14.   [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start

*   15.   [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)\<[int](https://api.flutter.dev/flutter/dart-core/int-class.html)\> onTap

