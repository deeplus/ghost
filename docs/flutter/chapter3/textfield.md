---
title: 3.5：输入框
---

# 3.5 输入框

## TextField

[TextField](https://api.flutter.dev/flutter/material/TextField-class.html) 一个 Material Design 的文本输入框。

<br>

1.   [TextEditingController](https://api.flutter.dev/flutter/widgets/TextEditingController-class.html) -- controller，编辑框的控制器，通过它可以设置/获取编辑框的内容、选择编辑内容、监听编辑文本改变事件。大多数情况下我们都需要显式提供一个controller来与文本框交互。如果没有提供controller，则TextField内部会自动创建一个；

2.   [FocusNode](https://api.flutter.dev/flutter/widgets/FocusNode-class.html) -- focusNode，用于控制TextField是否占有当前键盘的输入焦点。它是我们和键盘交互的一个句柄（handle）；

3.   [InputDecoration](https://api.flutter.dev/flutter/material/InputDecoration-class.html) -- **decoration**: const InputDecoration()，用于控制TextField的外观显示，如提示文本、背景颜色、 边框等；

4.   [TextInputType](https://api.flutter.dev/flutter/services/TextInputType-class.html) -- keyboardType，输入框默认的键盘输入类型；

5.   [TextInputAction](https://api.flutter.dev/flutter/services/TextInputAction-class.html) textInputAction，键盘动作按钮图标(即回车键位图标)；

6.   [TextCapitalization](https://api.flutter.dev/flutter/services/TextCapitalization-class.html) textCapitalization: TextCapitalization.none

7.   [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) -- style，正在编辑的文本样式；

8.   [StrutStyle](https://api.flutter.dev/flutter/painting/StrutStyle-class.html) strutStyle

9.   [TextAlign](https://api.flutter.dev/flutter/dart-ui/TextAlign-class.html) -- textAlign: TextAlign.start，输入框内编辑文本在水平方向的对齐方式；

10.   [TextAlignVertical](https://api.flutter.dev/flutter/painting/TextAlignVertical-class.html) textAlignVertical

11.   [TextDirection](https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html) textDirection

12.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) readOnly: false

13.   [ToolbarOptions](https://api.flutter.dev/flutter/widgets/ToolbarOptions-class.html) toolbarOptions

14.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) showCursor

15.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- autofocus: false，是否自动获取焦点；

16.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- **obscureText**: false，是否隐藏正在编辑的文本，如用于输入密码的场景等，文本内容会用“•”替换；

17.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) autocorrect: true

18.   [SmartDashesType](https://api.flutter.dev/flutter/services/SmartDashesType-class.html) smartDashesType

19.   [SmartQuotesType](https://api.flutter.dev/flutter/services/SmartQuotesType-class.html) smartQuotesType

20.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) enableSuggestions: true

21.  [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- maxLines: 1，输入框的最大行数，默认为1；如果为 null，则无行数限制；

22.  [int](https://api.flutter.dev/flutter/dart-core/int-class.html) minLines

23.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) expands: false

24.  [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- maxLength，代表输入框文本的最大长度，设置后输入框右下角会显示输入的文本计数；

25.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- maxLengthEnforced: true，决定当输入文本长度超过 maxLength 时是否阻止输入，为 true 时会阻止输入，为 false 时不会阻止输入但输入框会变红；

26.  [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)\<[String](https://api.flutter.dev/flutter/dart-core/String-class.html)\> -- **onChanged**，输入框内容改变时的回调函数；注：内容改变事件也可以通过controller来监听；

27.  [VoidCallback](https://api.flutter.dev/flutter/dart-ui/VoidCallback.html) -- onEditingComplete，和下方的onSubmitted这两个回调都是在输入框输入完成时触发，比如按了键盘的完成键（对号图标）或搜索键（🔍图标） 没有参数；

28.   [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)\<[String](https://api.flutter.dev/flutter/dart-core/String-class.html)\> onSubmitted，和上方的onEditingComplete不同的是两个回调签名不同，参数为当前输入框中的值；

29.   [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[TextInputFormatter](https://api.flutter.dev/flutter/services/TextInputFormatter-class.html)\> -- inputFormatters，用于限制输入的内容 指定输入格式；当用户输入内容改变时，会根据指定的格式来校验。

30.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- enabled，如果为 false，则输入框会被禁用，禁用状态不接收输入和事件，同时显示禁用态样式（在其decoration中定义）；

31.   [double](https://api.flutter.dev/flutter/dart-core/double-class.html) -- cursorWidth: 2.0，输入框光标的宽度；

32.   [Radius](https://api.flutter.dev/flutter/dart-ui/Radius-class.html) -- cursorRadius，输入框光标的圆角；

33.   [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- cursorColor，输入框光标的颜色；

34.   [BoxHeightStyle](https://api.flutter.dev/flutter/dart-ui/BoxHeightStyle-class.html) selectionHeightStyle: ui.BoxHeightStyle.tight

35.   [BoxWidthStyle](https://api.flutter.dev/flutter/dart-ui/BoxWidthStyle-class.html) selectionWidthStyle: ui.BoxWidthStyle.tight

36.   [Brightness](https://api.flutter.dev/flutter/dart-ui/Brightness-class.html) keyboardAppearance

37.   [EdgeInsets](https://api.flutter.dev/flutter/painting/EdgeInsets-class.html) scrollPadding: const EdgeInsets.all(20.0)

38.   [DragStartBehavior](https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html) dragStartBehavior: DragStartBehavior.start

39.   [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) enableInteractiveSelection: true

40.   [GestureTapCallback](https://api.flutter.dev/flutter/gestures/GestureTapCallback.html) onTap

41.   [InputCounterWidgetBuilder](https://api.flutter.dev/flutter/material/InputCounterWidgetBuilder.html) buildCounter

42.   [ScrollController](https://api.flutter.dev/flutter/widgets/ScrollController-class.html) scrollController

43.   [ScrollPhysics](https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html) scrollPhysics

<br>

---

## decoration属性

1.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- icon，位于装饰器外部和输入框前面的图标；

2.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- labelText，用于描述输入框，例如这个输入框是用来输入用户名还是密码的，当输入框获取焦点时默认会浮动到上方；

3.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) -- labelStyle，labelText 的样式；

4.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- helperText，辅助文本，位于输入框下方，如果 errorText 不为空的话，则 helperText 不会显示；

5.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) -- helperStyle，helperText 的样式；

6.  [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- helperMaxLines，helperText 最大行数；

7.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- hintText，提示文本，位于输入框内部；

8.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) hintStyle，hintText的样式；

9.  [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- hintMaxLines，提示信息最大行数；

10.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- errorText，错误信息提示；

11.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) -- errorStyle，errorText的样式；

12.  [int](https://api.flutter.dev/flutter/dart-core/int-class.html) -- errorMaxLines，errorText最大行数；

13.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) ~~hasFloatingPlaceholder~~: true， labelText是否浮动，默认为true，修改为 false 则 labelText 在输入框获取焦点时不会浮动且不显示；已废弃，请使用 floatingLabelBehavior 替代；

14.  [FloatingLabelBehavior](https://api.flutter.dev/flutter/material/FloatingLabelBehavior-class.html) -- floatingLabelBehavior: FloatingLabelBehavior.auto

15.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- isDense，改变输入框是否为密集型，默认为false，修改为true时，图标及间距会变小；

16.  [EdgeInsetsGeometry](https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html) -- contentPadding，内间距；

17.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- prefixIcon，位于输入框内部起始位置的图标；

18.  [BoxConstraints](https://api.flutter.dev/flutter/rendering/BoxConstraints-class.html) -- prefixIconConstraints，

19.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- prefix，预先填充的 Widget，跟 prefixText 同时只能出现一个；

20.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- prefixText，预填充的文本，例如手机号前面预先加上区号等；

21.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) -- prefixStyle，prefixText的样式；

22.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- suffixIcon，位于输入框后面的图片,例如一般输入框后面会有个眼睛，控制输入内容是否明文；

23.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- suffix，位于输入框尾部的控件，同样的不能和 suffixText 同时使用；

24.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- suffixText，位于尾部的填充文字；

25.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) -- suffixStyle，suffixText 的样式；

26.  [BoxConstraints](https://api.flutter.dev/flutter/rendering/BoxConstraints-class.html) suffixIconConstraints

27.  [Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) -- counter，位于输入框右下方的小控件，不能和counterText同时使用；

28.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- counterText，位于右下方显示的文本，常用于显示输入的字符数量；

29.  [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html) -- counterStyle，counterText的样式；

30.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- filled，如果为true，则输入使用 fillColor 指定的颜色填充；

31.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) -- fillColor，相当于输入框的背景颜色；

32.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) focusColor

33.  [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) hoverColor

<br>

---

不同状态下的边框样式，他们接收值的类型都一样，不过需要注意优先级；大致分为以下几种情况：

*    控件禁用时

当 enabled 为 false 时，如果指定了 disabledBorder，优先使用 disabledBorder，没有的话设置 disabledBorder 则使用border 的部分样式（颜色默认是灰色）；

*    控件启用(enable为true)，但 errorText 有值

 输入框没有焦点时，优先使用 errorBorder 的样式，输入框有焦点时，优先使用 focusedErrorBorder，如果这两个都没有设置则使用 border 的部分样式（颜色默认是红色）；

*    控件启用状态，且 errorText 没有值

输入框没有焦点时，优先使用 enabledBorder ，有焦点时，优先使用 focusedBorder，两者均没有指定时，使用默认的border；

*    结论

总体来说，默认的 border 优先级别较低，建议在开发过程中：我们如果需要errorText的话，我们只需要设置 errorBorder、focusedErrorBorder这三个即可；不需要errorText的话，只需要设置enabledBorder 、focusedBorder即可；

<br>

<br>

34.  [InputBorder](https://api.flutter.dev/flutter/material/InputBorder-class.html) -- errorBorder，errorText不为空，输入框没有焦点时要显示的边框；

35.  [InputBorder](https://api.flutter.dev/flutter/material/InputBorder-class.html) -- focusedBorder，输入框有焦点时的边框,如果 errorText 不为空的话，该属性无效；

36.  [InputBorder](https://api.flutter.dev/flutter/material/InputBorder-class.html) -- focusedErrorBorder，errorText不为空时，输入框有焦点时的边框；

37.  [InputBorder](https://api.flutter.dev/flutter/material/InputBorder-class.html) -- disabledBorder，输入框禁用时显示的边框，如果errorText不为空的话，该属性无效；

38.  [InputBorder](https://api.flutter.dev/flutter/material/InputBorder-class.html) -- enabledBorder，输入框可用时显示的边框，如果errorText不为空的话，该属性无效；

39.  [InputBorder](https://api.flutter.dev/flutter/material/InputBorder-class.html) -- border，正常情况下的border；

40.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- enabled: true，设置true(默认) 可编辑，并且显示下横线  当符合某条件后 通过更新变量设置为false；

41.  [String](https://api.flutter.dev/flutter/dart-core/String-class.html) -- semanticCounterText，文本语义计数器；

42.  [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) -- alignLabelWithHint，使用提示对齐标签；

<br>

---

## keyboardType属性

keyboardType 属性用于设置输入框默认的键盘输入类型，例如手机号、邮箱等；

<br>

1.  text -- 文本输入键盘；

2.  multiline -- 多行文本，需和 maxLines 配合使用(设为null或大于1)；

3.  number -- 数字，会弹出数字键盘；

4.  phone -- 优化后的电话号码输入键盘；会弹出数字键盘并显示'* #'；

5.  datetime -- 优化后的日期输入键盘；Android上会显示': -'；

6.  emailAddress -- 优化后的电子邮件地址；会显示“@ .”；

7.   url -- 优化后的url输入键盘； 会显示'/ .'；

<br>

---

## textInputAction属性

textInputAction 属性控制键盘动作按钮图标(即回车键位图标)，它是一个枚举值，有多个可选值：

<br>

1.   none -- 没有任何动作；

2.   unspecified -- 让操作系统决定哪个动作更合适；

3.  done -- 完成动作，一般会显示 “完成” 二字；

4.  go -- 跳转动作，一般用于输入了一个超链接后执行该动作，键盘上会显示 “前往” 二字；

5.  search -- 搜索动作；

6.  send -- 发送；

8.  next -- 下一个；

9.  previous -- 上一个；

10.  continueAction -- 继续动作，在Android上好像没反应，不显示键盘；

11.  route -- 在Android上好像没反应，不显示键盘；

12.  emergencyCall -- 拨打紧急电话，在Android上好像没反应，不显示键盘；

13.  newline -- 换行；

<br>

---

## inputFormatters属性

inputFormatters 属性用于限制输入的内容 指定输入格式；当用户输入内容改变时，会根据指定的格式来校验；

1.  WhitelistingTextInputFormatter -- 白名单校验，也就是只允许输入符合规则的字符：

```dart
// 只允许输入小写的a~z
[WhitelistingTextInputFormatter(RegExp("[a-z]"))]
```

2.  BlacklistingTextInputFormatter -- 黑名单校验，除了规定的字符其他的都可以输入：

```dart
// 不允许输入小写a~z
[BlacklistingTextInputFormatter(RegExp("[a-z]"))]
```

3.  LengthLimitingTextInputFormatter -- 长度限制，跟maxLength作用类似

<br>

---

## 登陆输入框

```dart
Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: <Widget>[
        TextField(
            decoration: InputDecoration(
                labelText: '用户名',
                hintText: '请输入用户名',
                prefixIcon: Icon(Icons.person),
            ),
        ),
        TextField(
            obscureText: true,
            decoration: InputDecoration(
                labelText: '密码',
                hintText: '请输入密码',
                prefixIcon: Icon(Icons.lock),
            ),
        ),
    ],
),
```

<br>

---

## 获取输入框中的文本

### 通过 `onChange`事件

```dart
TextField(
    autofocus: false,
    decoration: InputDecoration(
        icon: Icon(Icons.email),
        labelText: '邮箱',
        hintText: '请输入邮箱',
        border: OutlineInputBorder(),
    ),
    // 每次值变化都会触发该事件
    onChanged: (value) {
        print(value);
    },
),
```

<br>

---

### 通过 `controller` 直接获取

```dart
class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
    // 实例化控制器
    TextEditingController _textEditingController = TextEditingController();

    // 初始化控制器
    @override
    void initState() {
        _textEditingController.addListener(() {
            print(_textEditingController.text);
        });
        super.initState();
    }

    // 销毁控制器
    @override
    void dispose() {
        _textEditingController.dispose();
        super.dispose();
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('表单'),
                centerTitle: true,
            ),
            body: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                    TextField(
                        controller: _textEditingController,
                        decoration: InputDecoration(
                            icon: Icon(Icons.email),
                            labelText: '邮箱',
                            hintText: '请输入邮箱',
                            border: OutlineInputBorder(),
                        ),
                    ),
                ],
            ),
        );
    }
}
```

