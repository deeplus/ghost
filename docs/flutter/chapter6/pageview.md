---
title: 6.5：PageView
---

# 6.5 PageView

<br>

*   1.   [Axis](https://api.flutter.dev/flutter/painting/Axis-class.html) scrollDirection: Axis.horizontal，视图滚动的方向，默认水平；

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) reverse: false，是否反转方向；

*   3.   [PageController](https://api.flutter.dev/flutter/widgets/PageController-class.html) controller，控制器，用于监听视图的滚动情况，页面视图应该如何响应用户输入。比如，确定用户停止拖动页视图后，页视图如何继续动画；

*   4.   [ScrollPhysics](https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html) physics: 'fɪzɪks'，android光晕，ios回弹；

*   5.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) pageSnapping: true，true 表示每次滚动一页，false 表示 惯性滚动距离；

*   6.   [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)\<[int](https://api.flutter.dev/flutter/dart-core/int-class.html)\> onPageChanged，索引改变时触发；

*   7.   [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start，确定处理拖动开始行为的方式；

*   8.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) allowImplicitScrolling: false

<br>

### PageController

*   1.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) initialPage: 0

*   2.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) keepPage: true

*   3.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) viewportFraction: 1.0

<br>

---

## PageView

[PageView](https://api.flutter.dev/flutter/widgets/PageView-class.html) 创建一个页面滚动视图。

<br>

*   1.    [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children: const []

<br>

```dart
List list = [
    {
        'id': '1',
        'picUrl': 'http://www.tanzhouweb.com/vueProject/image/fullView/8.jpg',
        'title': '全景图'
    },
    {
        'id': '2',
        'picUrl': 'http://www.tanzhouweb.com/vueProject/image/fullView/10.jpg',
        'title': '全景图'
    }
];
```

```dart
PageView(
    children: list.map((item) {
        return Image.network(
            '${item['picUrl']}',
            fit: BoxFit.cover,
        );
    }).toList(),
    controller: PageController(
        initialPage: 1, // 默认显示的视图
        viewportFraction: .9, // 当前页面占据视口的比例
    ),
    pageSnapping: false,
),
```

<br>

---

## PageView.builder

[PageView.builder](https://api.flutter.dev/flutter/widgets/PageView/PageView.builder.html) 创建一个页面滚动视图,指定数量

<br>

*   1.   @required [IndexedWidgetBuilder](https://api.flutter.dev/flutter/widgets/IndexedWidgetBuilder.html) itemBuilder

*   2.   [int](https://api.flutter.dev/flutter/dart-core/int-class.html) itemCount

<br>

---

## PageView.custom

[PageView.custom](https://api.flutter.dev/flutter/widgets/PageView/PageView.custom.html) 创建一个可滚动的页面视图列表，自定义子项

<br>

*   1.   @required [SliverChildDelegate](https://api.flutter.dev/flutter/widgets/SliverChildDelegate-class.html) childrenDelegate

<br>

