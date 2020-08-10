---
title: 3.12：对话框
---

# 3.11 对话框

默认是 material 风格，也可以调 IOS 风格；

<br>

---

## SimpleDialog

[SimpleDialog](https://api.flutter.dev/flutter/material/SimpleDialog-class.html) 是一个用于向用户传递确定信息并提供选项的弹出层，可以显示附加的提示或操作，一般可以利用多个SimpleDialogOption为用户提供几个选项；

<br>

1.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) title，标题；
2.  [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) titlePadding: const EdgeInsets.fromLTRB(24.0, 24.0, 24.0, 0.0)，标题内边距；
3.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) titleTextStyle，
4.  [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)\> children，
5.  [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) contentPadding: const EdgeInsets.fromLTRB(0.0, 12.0, 0.0, 16.0)，内容内边距；
6.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) backgroundColor，背景颜色；
7.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) elevation，阴影高度；
8.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) semanticLabel，语意描述，类似 html 中 img 标签的 alt 属性；
9.  [ShapeBorder](https://api.flutter.dev/flutter/painting/ShapeBorder-class.html) shape，形状；

<br>

```dart
import 'package:flutter/material.dart';

class DialogDemo extends StatefulWidget {
    @override
    _DialogDemoState createState() => _DialogDemoState();
}

class _DialogDemoState extends State<DialogDemo> {
    String _simpleDialogOption;
    Future _showSimpleDialog() async{
        final res = await showDialog(
            context: context,
            builder: (BuildContext context){
                return SimpleDialog(
                    title: Text('请选择你的性别'),
                    children: <Widget>[
                        SimpleDialogOption(
                            child: Text('A 男'),
                            onPressed: (){
                                Navigator.pop(context, 'A');
                            },
                        ),
                        SimpleDialogOption(
                            child: Text('B 女'),
                            onPressed: (){
                                Navigator.pop(context, 'B');
                            },
                        ),
                    ],
                );
            }
        );

        setState(() {
            _simpleDialogOption = res;
        });
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('对话框'),),
            body: Container(
                width: double.infinity,
                height: double.infinity,
                padding: EdgeInsets.all(10),
                child: Center(
                    child: Column(
                        children: <Widget>[
                            Text('$_simpleDialogOption'),
                            RaisedButton.icon(
                                onPressed: _showSimpleDialog,
                                icon: Icon(Icons.pets),
                                label: Text('点击显示对话框'),
                            ),
                        ],
                    ),
                ),
            ),
        );
    }
}
```

<br>

---

## AlertDialog

[AlertDialog](https://api.flutter.dev/flutter/material/AlertDialog-class.html)

<br>

1.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) title，标题；
2.  [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) titlePadding，标题内边距；
3.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) titleTextStyle，标题文字样式；
4.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) content，内容；
5.  [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) contentPadding: const EdgeInsets.fromLTRB(24.0, 20.0, 24.0, 24.0)，内容内边距；
6.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) contentTextStyle，内容文字样式；
7.  [List](https://api.flutter.dev/flutter/dart-core/List-class.html)<[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html)> actions，对话框下边的 Widget 组件结合；
8.  [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) actionsPadding: EdgeInsets.zero，
9.  [VerticalDirection](https://api.flutter.dev/flutter/painting/VerticalDirection-class.html) actionsOverflowDirection，
10.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) actionsOverflowButtonSpacing，
11.  [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) buttonPadding，
12.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) backgroundColor，背景颜色；
13.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) elevation，阴影高度；
14.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) semanticLabel，
15.  [EdgeInsets](https://api.flutter.dev/flutter/painting/EdgeInsets-class.html) insetPadding: _defaultInsetPadding，
16.  [Clip](https://api.flutter.dev/flutter/dart-ui/Clip-class.html) clipBehavior: Clip.none，
17.  [ShapeBorder](https://api.flutter.dev/flutter/painting/ShapeBorder-class.html) shape，形状；
18.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) scrollable: false，

<br>

```dart
import 'package:flutter/material.dart';

class DialogDemo extends StatefulWidget {
    @override
    _DialogDemoState createState() => _DialogDemoState();
}

class _DialogDemoState extends State<DialogDemo> {
    String _alertDialog;
    _showAlertDialog(){
        showDialog(
            context: context,
            builder: (BuildContext context) {
                return AlertDialog(
                    content: Container(
                        width: MediaQuery.of(context).size.width * 0.5,
                        height: MediaQuery.of(context).size.height * 0.3,
                        child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                                Text('警告对话框标题'),
                                Text('内容')
                            ],
                        ),
                    ),
                    actions: <Widget>[
                        FlatButton(
                            onPressed: () {
                                Navigator.pop(context, '点击了取消');
                            },
                            child: Text('取消'),
                        ),
                        FlatButton(
                            onPressed: () {
                                Navigator.pop(context, '点击了确定');
                            },
                            child: Text('确定'),
                        ),
                    ],
                );
            },
        ).then((res) {
            setState(() {
                _alertDialog = res;
            });
        });
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('对话框'),),
            body: Container(
                width: double.infinity,
                height: double.infinity,
                padding: EdgeInsets.all(10),
                child: Column(
                    children: <Widget>[
                        Text('$_alertDialog'),
                        RaisedButton.icon(
                            onPressed: _showAlertDialog,
                            icon: Icon(Icons.pets),
                            label: Text('点击显示对话框'),
                        ),
                    ],
                ),
            ),
        );
    }
}
```

<br>

---

## BottomSheet

[BottomSheet](https://api.flutter.dev/flutter/material/BottomSheet-class.html) 

<br>

1.  [AnimationController](https://api.flutter.dev/flutter/animation/AnimationController-class.html) animationController，
2.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) enableDrag: true，
3.  [BottomSheetDragStartHandler](https://api.flutter.dev/flutter/material/BottomSheetDragStartHandler.html) onDragStart，
4.  [BottomSheetDragEndHandler](https://api.flutter.dev/flutter/material/BottomSheetDragEndHandler.html) onDragEnd，
5.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) backgroundColor，
6.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) elevation，
7.  [ShapeBorder](https://api.flutter.dev/flutter/painting/ShapeBorder-class.html) shape，
8.  [Clip](https://api.flutter.dev/flutter/dart-ui/Clip-class.html) clipBehavior，
9.  @required [VoidCallback](https://api.flutter.dev/flutter/dart-ui/VoidCallback.html) onClosing，
10.  @required [WidgetBuilder](https://api.flutter.dev/flutter/widgets/WidgetBuilder.html) builder，

<br>

---

## SnackBar

[SnackBar]()

<br>

1.  @required [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) content，
2.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) backgroundColor，
3.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) elevation，
4.  [ShapeBorder](https://api.flutter.dev/flutter/painting/ShapeBorder-class.html) shape，
5.  [SnackBarBehavior](https://api.flutter.dev/flutter/material/SnackBarBehavior-class.html) behavior，
6.  [SnackBarAction](https://api.flutter.dev/flutter/material/SnackBarAction-class.html) action，
7.  [Duration](https://api.flutter.dev/flutter/dart-core/Duration-class.html) duration: _snackBarDisplayDuration，
8.  [Animation](https://api.flutter.dev/flutter/animation/Animation-class.html)\<[double](https://api.flutter.dev/flutter/dart-core/double-class.html)\> animation，
9.  [VoidCallback](https://api.flutter.dev/flutter/dart-ui/VoidCallback.html) onVisible

<br>

---

## PopupMenuButton

[PopupMenuButton](https://api.flutter.dev/flutter/material/PopupMenuButton-class.html)

<br>

1.  @required [PopupMenuItemBuilder](https://api.flutter.dev/flutter/material/PopupMenuItemBuilder.html)\<T\> itemBuilder，item 子项；
2.  T initialValue，初始值；
3.  [PopupMenuItemSelected](https://api.flutter.dev/flutter/material/PopupMenuItemSelected.html)\<T\> onSelected，选择其中一项时回调；
4.  [PopupMenuCanceled](https://api.flutter.dev/flutter/material/PopupMenuCanceled.html) onCanceled，点击空白处，不选择时回调；
5.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) tooltip，提示；
6.  [double](https://api.flutter.dev/flutter/dart-core/double-class.html) elevation，Z轴阴影；
7.  [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) padding: const EdgeInsets.all(8.0)，
8.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) child，子控件，不能和 icon 同时设置；
9.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) icon，IconButton 子控件，不能和 child 都设置； 
10.  [Offset](https://api.flutter.dev/flutter/dart-ui/Offset-class.html) offset: Offset.zero，
11.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) enabled: true，
12.  [ShapeBorder](https://api.flutter.dev/flutter/painting/ShapeBorder-class.html) shape，
13.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) color，
14.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) captureInheritedThemes: true，

<br>

```dart
AppBar(
    title: Text('对话框'),
    actions: <Widget>[
        PopupMenuButton(
            icon: Icon(Icons.format_align_center),
            itemBuilder: (BuildContext context) {
                return [
                    PopupMenuItem(
                        value: 'mi',
                        child: Text('小米'),
                    ),
                    PopupMenuItem(
                        value: 'huawei',
                        child: Text('华为'),
                    ),
                    PopupMenuItem(
                        value: 'iphone',
                        child: Text('苹果'),
                    ),
                ];
            },
        ),
    ],
),
```

