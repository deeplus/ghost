---
title: 3.8：单选按钮
---

# 3.8 单选按钮

<br>

1.  @required T value，
2.  @required T groupValue，此组单选按钮的当前选定值；
3.  @required [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html) onChanged，
4.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) toggleable: false，
5.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) activeColor，
6.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) autofocus: false，

<br>

---

## Radio

[Radio](https://api.flutter.dev/flutter/material/Radio-class.html)  

<br>

1.  [MouseCursor](https://api.flutter.dev/flutter/rendering/MouseCursor-class.html) mouseCursor，
2.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) focusColor，
3.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) hoverColor，
4.  [MaterialTapTargetSize](https://api.flutter.dev/flutter/material/MaterialTapTargetSize-class.html) materialTapTargetSize，
5.  [VisualDensity](https://api.flutter.dev/flutter/material/VisualDensity-class.html) visualDensity，
6.  [FocusNode](https://api.flutter.dev/flutter/widgets/FocusNode-class.html) focusNode，

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
                children: <Widget>[
                    Row(
                        children: <Widget>[
                            Text('请选择性别：'),
                            Text('男'),
                            Radio(value: 0, groupValue: groupValue, onChanged: _onChanged),
                            Text('女'),
                            Radio(value: 1, groupValue: groupValue, onChanged: _onChanged),
                        ],
                    ),
                ],
            ),
        );
    }
    int groupValue = 0;

    _onChanged(value) {
        setState(() {
            groupValue = value;
        });
    }
}
```

<br>

---

## RadioListTile

[RadioListTile](https://api.flutter.dev/flutter/material/RadioListTile-class.html)

<br>

1.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) title，
2.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) subtitle，
3.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) isThreeLine: false，
4.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) dense，
5.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) secondary，
6.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) selected: false，
7.  [ListTileControlAffinity](https://api.flutter.dev/flutter/material/ListTileControlAffinity-class.html) controlAffinity: ListTileControlAffinity.platform，

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
                children: <Widget>[
                    Row(
                        children: <Widget>[
                            Text('答案：'),
                            Text('机动车在下列哪些路段不得超车？')
                        ],
                    ),
                    RadioListTile(
                        value: 'A',
                        groupValue: _groupListValue,
                        onChanged: _onChangedList,
                        title: Text('山区道路'),
                        selected: _groupListValue == 'A',
                    ),
                    RadioListTile(
                        value: 'B',
                        groupValue: _groupListValue,
                        onChanged: _onChangedList,
                        title: Text('城市高架桥'),
                        selected: _groupListValue == 'B',
                    ),
                    RadioListTile(
                        value: 'C',
                        groupValue: _groupListValue,
                        onChanged: _onChangedList,
                        title: Text('城市快速路'),
                        selected: _groupListValue == 'C',
                    ),
                    RadioListTile(
                        value: 'D',
                        groupValue: _groupListValue,
                        onChanged: _onChangedList,
                        title: Text('窄桥、弯路'),
                        selected: _groupListValue == 'D',
                    ),
                ],
            ),
        );
    }

    String _groupListValue = 'A';
    _onChangedList(value) {
        setState(() {
            _groupListValue = value;
        });
    }
}
```



