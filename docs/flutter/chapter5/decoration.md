---
title: 5.3：装饰类容器
---

# 5.3 装饰类容器

## DecoratedBox

<br>

[DecoratedBox](https://api.flutter.dev/flutter/widgets/DecoratedBox-class.html)可以在其子组件绘制前(或后)绘制一些装饰（Decoration），如背景、边框、渐变等。

<br>

*   1.   @required [Decoration](https://api.flutter.dev/flutter/painting/Decoration-class.html) -- **decoration**，

*   2.   [DecorationPosition](https://api.flutter.dev/flutter/rendering/DecorationPosition-class.html) -- **position**: DecorationPosition.background，

*   3.   [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- **child**，

<br>

---

[BoxDecoration](https://api.flutter.dev/flutter/painting/BoxDecoration-class.html)相关属性：

*   1.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **color**，背景颜色

*   2.   [DecorationImage](https://api.flutter.dev/flutter/painting/DecorationImage-class.html) -- **image**，背景图片

*   3.  [BoxBorder](https://api.flutter.dev/flutter/painting/BoxBorder-class.html) -- **border**，边框

*   4.   [BorderRadiusGeometry](https://api.flutter.dev/flutter/painting/BorderRadiusGeometry-class.html) -- **borderRadius**，圆角

*   5.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[BoxShadow](https://api.flutter.dev/flutter/painting/BoxShadow-class.html)\> -- **boxShadow**，阴影，可以指定多个

*   6.   [Gradient](https://api.flutter.dev/flutter/painting/Gradient-class.html) -- **gradient**，渐变

*   7.   [BlendMode](https://api.flutter.dev/flutter/dart-ui/BlendMode-class.html) -- **backgroundBlendMode**，背景混合模式

*   8.   [BoxShape](https://api.flutter.dev/flutter/painting/BoxShape-class.html) -- **shape**: BoxShape.rectangle，形状

<br>

`DecoratedBox`部件示例：

```dart
DecoratedBox(
	decoration: BoxDecoration(
        gradient: LinearGradient(
            colors: [Colors.red,Colors.blue], // 背景渐变
        ),
        borderRadius: BorderRadius.circular(5), // 5像素圆角
        boxShadow: [ // 阴影
            BoxShadow(
                color: Colors.black54,
                offset: Offset(2, 2),
                blurRadius: 4,
            )
        ]
	),
	child:Padding(
        padding: EdgeInsets.symmetric( // 对称，水平垂直内边距
            horizontal: 80.0,
            vertical: 18.0
        ),
        child: Text('Login',
			style: TextStyle(
				color: Colors.white
			),
		),
	),
),
```

