---
title: 3.3：图片
---

# 3.3 图片

## Image

<br>

Flutter中，我们可以通过 [Image](https://api.flutter.dev/flutter/widgets/Image-class.html) 组件来加载并显示图片，`Image`的数据源可以是asset、文件、内存以及网络。

<br>

1.  @required [ImageProvider](https://api.flutter.dev/flutter/painting/ImageProvider-class.html) -- **image**，
2.  [ImageFrameBuilder](https://api.flutter.dev/flutter/widgets/ImageFrameBuilder.html) frameBuilder，
3.  [ImageLoadingBuilder](https://api.flutter.dev/flutter/widgets/ImageLoadingBuilder.html) loadingBuilder，
4.  [ImageErrorWidgetBuilder](https://api.flutter.dev/flutter/widgets/ImageErrorWidgetBuilder.html) errorBuilder，
5.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) semanticLabel，
6.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) excludeFromSemantics: false，
7.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **width**，图片的宽度；
8.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **height**，图片的高度；
9.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- **color**，图片的混合色值；
10.  [BlendMode](https://api.flutter.dev/flutter/dart-ui/BlendMode-class.html) -- **colorBlendMode**，混合模式；
11.  [BoxFit](https://api.flutter.dev/flutter/painting/BoxFit-class.html) -- **fit**，缩放模式；
12.  [AlignmentGeometry](https://api.flutter.dev/flutter/painting/AlignmentGeometry-class.html) -- **alignment**: Alignment.center，对齐方式；
13.  [ImageRepeat](https://api.flutter.dev/flutter/painting/ImageRepeat-class.html) -- **repeat**: ImageRepeat.noRepeat，重复方式；
14.  [Rect](https://api.flutter.dev/flutter/dart-ui/Rect-class.html) centerSlice，
15.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) matchTextDirection: false，
16.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) gaplessPlayback: false，
17.  [FilterQuality](https://api.flutter.dev/flutter/dart-ui/FilterQuality-class.html) filterQuality: FilterQuality.low，

<br>

---

## 网络图片

<br>

[NetworkImage](https://api.flutter.dev/flutter/painting/NetworkImage-class.html) 从网络加载图片。

1.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **url**，图片的 URL；
2.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- **scale**，图片的缩放比例；
3.  [Map](https://api.flutter.dev/flutter/dart-core/Map-class.html)<[String](https://api.flutter.dev/flutter/dart-core/String-class.html), [String](https://api.flutter.dev/flutter/dart-core/String-class.html)> headers

<br>

```dart
Image(
    image: NetworkImage(
        'https://h5sm.com/static/bgpig.jpg',
    ),
    width: 200,
    height: 100,
),
```

另外，`Image` 也提供了一个快捷的构造函数 [Image.network](https://api.flutter.dev/flutter/widgets/Image/Image.network.html) 用于从网络加载、显示图片：

```dart
Image.network(
    'https://h5sm.com/static/bgpig.jpg',
    width: 200,
    height: 100,
),
```

<br>

---

## 本地图片

<br>

[AssetImage](https://api.flutter.dev/flutter/painting/AssetImage-class.html) 从本地加载图片。

1.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **assetName**，
2.  [AssetBundle](https://api.flutter.dev/flutter/services/AssetBundle-class.html) -- **bundle**，
3.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- **package**

<br>

本地图片的用法和 自定义字体图标类似：

1.   首先，在项目根目录新建一个 `images目录`，并将 bgpig.jpg 拷贝至该目录；

2.   在`pubspec.yaml`中的`flutter`部分添加如下内容：

```yaml
# 注意：由于 yaml 文件对缩进严格，所以必须严格按照每一层两个空格的方式进行缩进
flutter:
  assets:
    - images/bgpig.jpg
```

3.   加载该图片：

```dart
Image(
    image: AssetImage(
        'images/bgpig.jpg',
    ),
    width: 200,
    height: 100,
),
```
