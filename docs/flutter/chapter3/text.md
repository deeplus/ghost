---
title: 3.1：文字、文字样式
---

# 3.1 文字、文字样式

## Text

<br>

[Text](https://api.flutter.dev/flutter/widgets/Text/Text.html) 用于显示简单样式文本，它包含一些控制文本显示样式的一些属性。

<br>

1.  [TextAlign](https://api.flutter.dev/flutter/dart-ui/TextAlign-class.html) -- **textAlign**,  `多行文本`对齐方式 （center居中，left左对齐，right右对齐，justfy两端对齐）;
2.  [TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html) -- **textDirection**, 文本方向（ltr从左至右，rtl从右至左）;
3.  [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- **maxLines**, 文字显示最大行数；
4.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **softWrap**, 是否自动换行（true自动换行，false单行显示，超出屏幕部分默认截断处理）；
5.  [TextOverflow](https://api.flutter.dev/flutter/rendering/TextOverflow-class.html) -- **overflow**, 文字超出屏幕之后的处理方式（clip裁剪，fade渐隐，ellipsis省略号）；
6.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **textScaleFactor**, 字体显示倍率；
7.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) -- **style**, 字体样式；

<br>

---

## TextStyle

<br>

[TextStyle](https://api.flutter.dev/flutter/painting/TextStyle/TextStyle.html) 用于指定文本显示的样式如颜色、字体、粗细、背景等。

<br>

1.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **color**, 字体的颜色；
2.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **fontSize**, 文字大小,单位为像素，如果没有指定大小则默认为14像素，可以乘以textScaleFactor来增加字体大小以便用户更加方便的阅读；
3.  [FontWeight](https://api.flutter.dev/flutter/dart-ui/FontWeight-class.html) -- **fontWeight**, 字体厚度，可以使文本变粗或变细；
4.  [FontStyle](https://api.flutter.dev/flutter/dart-ui/FontStyle-class.html) -- **fontStyle**, 字体变形，有两种 FontStyle.normal（字体直立）， FontStyle.italic（字体倾斜）；
5.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **letterSpacing**, 字母间距，整数拉开字母距离，若是负数则拉近字母距离；
6.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **wordSpacing**, 单词间距，同上；
7.  [TextBaseline](https://api.flutter.dev/flutter/dart-ui/TextBaseline-class.html) -- **textBaseline**, 用于对齐文本的水平线；
8.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **height**, 文本行高，为字体大小的倍数；
9.  [Locale](https://api.flutter.dev/flutter/dart-ui/Locale-class.html) -- **locale**, 用于选择区域特定符号的区域设置；
10.  [Paint](https://api.flutter.dev/flutter/dart-ui/Paint-class.html) -- **foreground**, 
11.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **backgroundColor**, 文本的背景颜色；
12.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **fontFamily**，
13.  [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Shadow](https://api.flutter.dev/flutter/dart-ui/Shadow-class.html)\> -- **shadows**, 文本的阴影可以利用列表叠加处理，例如shadows: [Shadow(color:Colors.black,offset: Offset(6, 3), blurRadius: 10)], color即阴影的颜色， offset即阴影相对文本的偏移坐标，blurRadius即阴影的模糊程度，越小越清晰；
14.  [TextDecoration](https://api.flutter.dev/flutter/dart-ui/TextDecoration-class.html) -- **decoration**, 文字的线性装饰，比如 underline 下划线， lineThrough删除线；
15.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **decorationColor**, 文本装饰线的颜色；
16.  [TextDecorationStyle](https://api.flutter.dev/flutter/dart-ui/TextDecorationStyle-class.html) -- **decorationStyle**, 文本装饰线的样式，比如 dashed 虚线；
17.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **debugLabel**, 这种文本样式的可读描述，此属性仅在调试构建中维护；
18.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **inherit**: true, 是否将null值替换为祖先文本样式中的值（例如，在TextSpan树中。如果为false，则没有显式值的属性将恢复为默认值：白色，字体大小为10像素，采用无衬线字体。）；

<br>

文本和文本样式综合示例：

```dart
Text(
    'hello world',
    style: TextStyle(
        fontSize: 24,
        height: 2,
        fontWeight: FontWeight.w700,
        fontStyle: FontStyle.italic,
        color: Color(0xaaff0000),
        letterSpacing: 1.2,
        wordSpacing: 2.5,
        shadows: [
            Shadow(
                color: Colors.purple,
                offset: Offset(2, 2)
            )
        ],
        decoration: TextDecoration.lineThrough,
        decorationColor: Colors.blue
    ),
)
```

---

## TextSpan

<br>

有时候我们需要对一个Text内容的不同部分按照不同的样式显示，这时就可以使用 [TextSpan](https://api.flutter.dev/flutter/painting/TextSpan/TextSpan.html)，它代表文本的一个“片段”。

<br>

---

## Text.rich和RichText

<br>

Text有一个静态方法rich，使用 [Text.rich](https://api.flutter.dev/flutter/widgets/Text/Text.rich.html) 可以达到 [RichText](https://api.flutter.dev/flutter/widgets/RichText/RichText.html) 的效果。

<br>

TextSpan和RichText综合示例：

```dart
Text.rich(
    TextSpan(
    	text: '登陆即同意',
        style: TextStyle(fontSize: 14, color: Colors.black),
        children: [
            TextSpan(
                text: '"服务条款"',
                style: TextStyle(fontSize: 14, color: Colors.blue),
                recognizer: TapGestureRecognizer()
                ..onTap = () {
                    print('点击了解服务条款');
                }
            ),
            TextSpan(
                text: '和',
                style: TextStyle(fontSize: 14, color: Colors.black),
            ),
            TextSpan(
                text: '"隐私政策"',
                style: TextStyle(fontSize: 14, color: Colors.blue),
                recognizer: TapGestureRecognizer()
                ..onTap = () {
                    print('点击了解隐私政策');
                }
            )
        ]
    )
)
```
