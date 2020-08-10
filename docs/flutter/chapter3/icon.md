---
title: 3.2：图标
---

# 3.2 图标

<br>

Flutter中，可以像 Web 开发一样使用 iconfont ，iconfont即“`字体图标`”，它是将图标做成字体文件，然后通过指定不同的字符而显示不同的图片。

<br>

## Material Design字体图标

<br>

Flutter默认包含了一套 [Material Design的字体图标](https://material.io/tools/icons/) ，我们可以在`pubspec.yaml`文件中找到相应的配置：

```yaml
flutter:
  uses-material-design: true
```

<br>

`Material Design`的字体图标使用起来很简单，就像这样：

```dart
Text(
    "\uE914 \uE000 \uE90D",
    style: TextStyle(
        fontFamily: "MaterialIcons",
        fontSize: 24.0,
        color: Colors.pink
    ),
),
```

<br>

---

## Icon

<br>

在上面的例子中我们可以看到，使用图标就像使用文本一样方便，但是这种方式也存在一个问题，那就是需要提供对应图标的码点，于开发者而言该种方式并不友好，于是，Flutter 封装了 [Icon](https://api.flutter.dev/flutter/widgets/Icon-class.html) 和 [IconData](https://api.flutter.dev/flutter/widgets/IconData-class.html) 来专门显示图标。

<br>

1.  [IconData](https://api.flutter.dev/flutter/widgets/IconData-class.html) -- **icon**，必要参数，图标；
2.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **size**，图标大小；
3.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **color**，图标颜色；
4.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) semanticLabel，
5.  [TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html) textDirection，

<br>

---

[IconData](https://api.flutter.dev/flutter/widgets/IconData-class.html) 相关属性：

<br>

1.  [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- **codePoint**， 字符码点；
2.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **fontFamily**，字体名称；
3.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **fontPackage**，
4.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **matchTextDirection**: false，

<br>

上面的代码可以写成：

```dart
Row(
    children: <Widget>[
        Icon(Icons.accessible,color: Colors.green,),
        Icon(Icons.error,color: Colors.green,),
        Icon(Icons.fingerprint,color: Colors.green,),
    ],
),
```

<br>

---

## 自定义字体图标

<br>

在 Flutter 中，我们使用 `ttf` 格式的图标即可，具体用法如下：

<br>

1.  在项目根目录下新建一个 `fonts` 文件夹，将下载好的 `iconfont.ttf` 文件放至该目录下：

2.  在`pubspec.yaml`中的`flutter`部分添加如下内容：

```yaml
flutter:
  fonts:
    - family: myIcon
      fonts:
        - asset: fonts/iconfont.ttf
```

3.  在项目中使用图标：

```dart
// 注意：例如阿里图标，我们需要将 Unicode 码中的 `#` 手动转为 `0`。
Icon(
    IconData(0xe8ba,
		fontFamily: 'myIcon',
		matchTextDirection: true
	),
    color: Colors.purple,
),
```
