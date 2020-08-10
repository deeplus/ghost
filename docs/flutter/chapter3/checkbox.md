---
title: 3.9：复选框
---

# 3.9 复选框

<br>

1.  @required [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) value，
2.  @required [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)\<[bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)> onChanged，当复选框的值改变时会触发该回调；
3.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) activeColor，被选中时复选框的颜色；
4.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) checkColor，被选中时复选框图标的颜色；
5.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) autofocus: false，

<br>

---

## Checkbox

[Checkbox]() 

<br>

1.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) tristate: false，
2.  [MouseCursor](https://api.flutter.dev/flutter/rendering/MouseCursor-class.html) mouseCursor，
3.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) focusColor，
4.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) hoverColor，
5.  [MaterialTapTargetSize](https://api.flutter.dev/flutter/material/MaterialTapTargetSize-class.html) materialTapTargetSize，配置tap目标的最小大小；
6.  [VisualDensity](https://api.flutter.dev/flutter/material/VisualDensity-class.html) visualDensity，
7.  [FocusNode](https://api.flutter.dev/flutter/widgets/FocusNode-class.html) focusNode，

<br>

```dart
import 'package:flutter/material.dart';

class CheckboxDemo extends StatefulWidget {
    @override
    _CheckboxDemoState createState() => _CheckboxDemoState();
}

class _CheckboxDemoState extends State<CheckboxDemo> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('checkbox'),),
            body: Column(
                children: checkboxList.map((item) {
                    return Row(
                        children: <Widget>[
                            Text('${item['text']}'),
                            Checkbox(
                                value: item['toggle'],
                                onChanged: (value) {
                                    setState(() {
                                        item['toggle'] = value;
                                    });
                                    print(checkboxList);
                                },
                            ),
                        ],
                    );
                }).toList(),
            ),
        );
    }
    List checkboxList = [
        {
            'text': '吃饭',
            'toggle': false,
        },
        {
            'text': '睡觉',
            'toggle': false,
        },
        {
            'text': '打豆豆',
            'toggle': false
        },
    ];
}
```

<br>

---

## CheckboxListTile

[CheckboxListTile](https://api.flutter.dev/flutter/material/CheckboxListTile-class.html) 

<br>

1.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) title，
2.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) subtitle，
3.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) isThreeLine: false，
4.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) dense，此列表平铺是否是垂直密集列表的一部分；
5.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) secondary，显示在复选框前面的小部件；
6.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) selected: false，选中后文字高亮；
7.  [ListTileControlAffinity](https://api.flutter.dev/flutter/material/ListTileControlAffinity-class.html) controlAffinity: ListTileControlAffinity.platform，控件相对于文本的位置；
8.  [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) contentPadding，
9.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) tristate: false，

<br>

```dart
CheckboxListTile(
    secondary: const Icon(Icons.alarm_on),
    title: const Text('每天6：10 响铃'),
    subtitle: Text('12小时58分钟后响铃'),
    value: toggle,
    onChanged: (bool value) {
        setState(() {
            toggle = value;
        });
    },
),
```

