---
title: 3.11：日期和时间
---

# 3.11 日期和时间

<br>

1.  @required [BuildContext](https://api.flutter.dev/flutter/widgets/BuildContext-class.html) context，
2.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) cancelText，
3.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) confirmText，
4.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) helpText，
5.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) useRootNavigator: true，
6.  [RouteSettings](https://api.flutter.dev/flutter/widgets/RouteSettings-class.html) routeSettings，

<br>

---

## showDatePicker

[showDatePicker](https://api.flutter.dev/flutter/material/showDatePicker.html)

<br>

1.  @required [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html) initialDate，初始化日期；
2.  @required [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html) firstDate，开始时间；
3.  @required [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html) lastDate，结束时间；
4.  [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html) currentDate，
5.  [DatePickerEntryMode](https://api.flutter.dev/flutter/material/DatePickerEntryMode-class.html) initialEntryMode: DatePickerEntryMode.calendar，
6.  [SelectableDayPredicate](https://api.flutter.dev/flutter/material/SelectableDayPredicate.html) selectableDayPredicate，
7.  [Locale](https://api.flutter.dev/flutter/dart-ui/Locale-class.html) locale，
8.  [TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html) textDirection，
9.  [TransitionBuilder](https://api.flutter.dev/flutter/widgets/TransitionBuilder.html) builder，
10.  [DatePickerMode](https://api.flutter.dev/flutter/material/DatePickerMode-class.html) initialDatePickerMode: DatePickerMode.day，
11.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) errorFormatText，
12.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) errorInvalidText，
13.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) fieldHintText，
14.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) fieldLabelText，

<br>

```dart
import 'package:flutter/material.dart';

class DateTimeDemo extends StatefulWidget {
    @override
    _DateTimeDemoState createState() => _DateTimeDemoState();
}

class _DateTimeDemoState extends State<DateTimeDemo> {

    DateTime _date = DateTime.now();
    void _showDatePicker(){
        showDatePicker(
            context: context,
            initialDate: _date,
            firstDate: DateTime(2015),
            lastDate: DateTime(2022),
        ).then((res) {
            setState(() {
                if (res != null) _date = res;
            });
        });
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('日期控件'),),
            body: Container(
                width: double.infinity,
                padding: EdgeInsets.all(10),
                child: Column(
                    children: <Widget>[
                        Text('$_date'),
                        InkWell(
                            child: Text('显示日期'),
                            onTap: _showDatePicker,
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

## showTimePicker

[showTimePicker]() 

<br>

1.  @required [TimeOfDay](https://api.flutter.dev/flutter/material/TimeOfDay-class.html) initialTime，
2.  [TransitionBuilder](https://api.flutter.dev/flutter/widgets/TransitionBuilder.html) builder，
3.  [TimePickerEntryMode](https://api.flutter.dev/flutter/material/TimePickerEntryMode-class.html) initialEntryMode: TimePickerEntryMode.dial，

<br>

```dart
import 'package:date_format/date_format.dart';
import 'package:flutter/material.dart';

class DateTimeDemo extends StatefulWidget {
    @override
    _DateTimeDemoState createState() => _DateTimeDemoState();
}

class _DateTimeDemoState extends State<DateTimeDemo> {

    TimeOfDay _time = TimeOfDay.now();
    _showTimePicker() {
        showTimePicker(
            context: context,
            initialTime: _time,
        ).then((res) {
            setState(() {
                if (res != null) _time = res;
            });
        });
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('时间控件'),),
            body: Container(
                width: double.infinity,
                padding: EdgeInsets.all(10),
                child: Column(
                    children: <Widget>[
                        Text('${_time.format(context)}'),
                        InkWell(
                            child: Text('显示时间'),
                            onTap: _showTimePicker,
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

## 国际化处理

`DatePicker` 默认是英文说明的，就算手机设置为中文，依旧会显示为英文；如果需要显示中文说明，则需要自己做国际化的处理；

<br>

1.  安装依赖：

```yaml
dependencies:
    flutter_localizations:
        sdk: flutter
```

2.  导入 flutter_localizations 库，并指定 MaterialApp 的`localizationsDelegates`和`supportedLocales`：

```dart
import 'package:flutter_localizations/flutter_localizations.dart';

MaterialApp(
    localizationsDelegates: [
        // ... app-specific localization delegate[s] here
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
    ],
    supportedLocales: [
        const Locale('en', 'US'), // English
        const Locale('he', 'IL'), // Hebrew
        const Locale('zh', 'CN'), // 中文
        // ... other locales the app supports
    ],
)
```

<br>

---

## 第三方IOS日期选择器

[flutter_cupertino_date_picker](https://pub.dev/packages/flutter_cupertino_date_picker) 

<br>

```dart
import 'package:flutter/material.dart';
import 'package:flutter_cupertino_date_picker/flutter_cupertino_date_picker.dart';

class DateTimeDemo extends StatefulWidget {
    @override
    _DateTimeDemoState createState() => _DateTimeDemoState();
}

class _DateTimeDemoState extends State<DateTimeDemo> {

    DateTime _customDateTime = DateTime.now();
    // 使用第三方库
    _showCustomPicker() {
        DatePicker.showDatePicker(
            context,
            minDateTime: DateTime(2018),
            maxDateTime: DateTime(2022),
            initialDateTime: _customDateTime,
            locale: DateTimePickerLocale.zh_cn,
        );
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('时间控件'),),
            body: Container(
                width: double.infinity,
                padding: EdgeInsets.all(10),
                child: Column(
                    children: <Widget>[
                        Text('自定义IOS风格时间选择器'),
                        InkWell(
                            child: Text('显示时间'),
                            onTap: _showCustomPicker,
                        ),
                    ],
                ),
            ),
        );
    }
}
```

