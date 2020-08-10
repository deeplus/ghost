---
title: 3.7：开关
---

# 3.7 开关

<br>

1.  @required [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- value，切换按钮的值；

2.  @required [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)\<[bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)\> -- onChanged，开关状态改变时的回调；

3.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) **activeColor**，激活时滑块(圆点)的颜色；

4.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) **activeTrackColor**，激活时横条的颜色；

5.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) inactiveThumbColor，非激活时圆点的颜色；

6.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) inactiveTrackColor，非激活时横条的颜色；

7.  [ImageProvider](https://api.flutter.dev/flutter/painting/ImageProvider-class.html) **activeThumbImage**，圆点还支持图片，激活时的效果；

8.  [ImageProvider](https://api.flutter.dev/flutter/painting/ImageProvider-class.html) inactiveThumbImage，非激活圆点的图片效果；

9.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) autofocus: false；

<br>

---

## Switch

[Switch](https://api.flutter.dev/flutter/material/Switch-class.html) 

<br>

1.  [ImageErrorListener](https://api.flutter.dev/flutter/painting/ImageErrorListener.html) onActiveThumbImageError，

2.  [ImageErrorListener](https://api.flutter.dev/flutter/painting/ImageErrorListener.html) onInactiveThumbImageError，

3.  [MaterialTapTargetSize](https://api.flutter.dev/flutter/material/MaterialTapTargetSize-class.html) materialTapTargetSize

4.  [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start，

5.  [MouseCursor](https://api.flutter.dev/flutter/rendering/MouseCursor-class.html) mouseCursor，

6.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) focusColor，

7.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) hoverColor，

8.  [FocusNode](https://api.flutter.dev/flutter/widgets/FocusNode-class.html) focusNode，

<br>

```dart
import 'package:flutter/material.dart';

class SwitchDemo extends StatefulWidget {
    @override
    _SwitchDemoState createState() => _SwitchDemoState();
}

class _SwitchDemoState extends State<SwitchDemo> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('Switch'),),
            body: Center(
                child: Column(
                    children: <Widget>[
                        Text('${toggle ? '开' : '关'}'),
                        Switch(
                            value: toggle,
                            onChanged: changeValue,
                            // 选中时，滑道的颜色
                            activeTrackColor: Colors.deepPurple,
                            // 未选中时，滑道的颜色
                            inactiveTrackColor: Colors.black,
                            // 选中时，滑块的图片
                            activeThumbImage: NetworkImage('http://www.5imoban.net/tpl/images/face4.png'),
                            // 未选中时，滑块的图片
                            inactiveThumbImage: NetworkImage('http://www.5imoban.net/tpl/images/face3.png'),
                        ),
                    ],
                ),
            ),
        );
    }
	// 开关状态
    bool toggle = false;
    
    // 变更状态
    changeValue(value) {
        setState(() {
            toggle = value;
        });
    }
}
```

<br>

---

## SwitchListTile

[SwitchListTile](https://api.flutter.dev/flutter/material/SwitchListTile-class.html) 

<br>

1.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) title，标题；
2.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) subtitle，副标题；
3.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) isThreeLine: false，是不是三行， true 时： subtitle 不能为null， false时可以为 nul；
4.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) dense，是否垂直密集居中；
5.  [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) contentPadding，
6.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) secondary，左边的一个东西；
7.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) selected: false，如果为 true ，则 text 和 icon 都用 activeColor 时的color；
8.  [ListTileControlAffinity](https://api.flutter.dev/flutter/material/ListTileControlAffinity-class.html) controlAffinity: ListTileControlAffinity.platform，

<br>

```dart
bool toggle = false;

SwitchListTile(
    // 左边的一个图标
    secondary: Icon(Icons.access_time),
    // 是否选中 是否打开
    value: toggle,
    // 当打开关闭的时候的回调
    onChanged: (value) {
        setState(() {
            toggle = value;
        });
    },
    activeColor: Colors.pinkAccent,
    inactiveThumbColor: Colors.blue,
    title: Text("标题"),
    // 副标题 在标题下面的
    subtitle: Text("副标题"),
    // 是不是三行， true 时： subtitle 不能为null， false时可以为 null
    isThreeLine: true,
    // 是否垂直密集居中
    dense: true,
    //
    selected: toggle,
)
```



