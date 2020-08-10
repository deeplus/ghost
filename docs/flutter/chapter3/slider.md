---
title: 3.10：滑块
---

# 3.10 滑块

<br>

## Slider

[Slider](https://api.flutter.dev/flutter/material/Slider/Slider.html) 

<br>

1.  @required [double](https://api.flutter.dev/flutter/dart-core/double-class.html) value，滑块的值；
2.  @required [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)\<[double](https://api.flutter.dev/flutter/dart-core/double-class.html)\> onChanged，改变时触发；
3.  [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)\<[double](https://api.flutter.dev/flutter/dart-core/double-class.html)\> onChangeStart，改变前触发；
4.  [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)\<[double](https://api.flutter.dev/flutter/dart-core/double-class.html)\> onChangeEnd，改变后触发；
5.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) min: 0.0，用户可以选择的最大值；
6.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) max: 1.0，用户可以选择的最小值；
7.  [int](https://api.flutter.dev/flutter/dart-core/int-class.html) **divisions**，离散部分的数量，即将该滑块等分的数量；
8.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) label，滑块处于活动状态时显示在滑块上方的标签，该属性需要和 divisions 结合使用；
9.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) activeColor，
10.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) inactiveColor，
11.  [MouseCursor](https://api.flutter.dev/flutter/rendering/MouseCursor-class.html) mouseCursor，
12.  [SemanticFormatterCallback](https://api.flutter.dev/flutter/material/SemanticFormatterCallback.html) semanticFormatterCallback，
13.  [FocusNode](https://api.flutter.dev/flutter/widgets/FocusNode-class.html) focusNode，
14.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) autofocus: false，

<br>

```dart
double _sliderValue = 50;
_onChangeSlider(value){
    setState(() {
        _sliderValue = value;
    });
}

// 滑块
Slider(
    value: _sliderValue,
    onChanged: _onChangeSlider,
    min: 0,
    max: 100,
    label: '$_sliderValue',
    divisions: 10,
),
```

