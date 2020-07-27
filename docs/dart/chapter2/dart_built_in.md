---
title: 2.3：内建类型
---

# 2.3 内建类型

Dart 语言支持以下内建类型：

<br>

*   1.   Number

*   2.   String

*   3.   Boolean

*   4.   List (也被称为 *Array*)

*   5.   Map

*   6.   Set

*   7.   Rune (用于在字符串中表示 Unicode 字符)

*   8.   Symbol

## 类型检测

```dart
// dart没有一个方法能够直接返回变量类型，需要我们自行封装
import 'dart:mirrors';
getTypeName(dynamic obj) {
	return reflect(obj).type.reflectedType.toString();
}
```



---

## Number

Dart 语言的 `Number` 有两种类型:

<br>

### int

整数值，整数是不带小数点的数字

```dart
var x = 1;
var hex = 0xDEADBEEF;
```

<br>

### double

64位（双精度）浮点数，如果一个数字包含了小数点，那么它就是浮点型的

```dart
var y = 1.1;
var exponents = 1.42e5;
```

在 Dart 2.1 之前，在浮点数上下文中使用整数字面量是错误的；从 Dart 2.1 开始，整型字面量将会在必要的时候自动转换成浮点数字面量：

```dart
double z = 1; // 相当于 double z = 1.0;
```

`int` 和 `double` 都是 `num` 的子类。如果 num 及其子类不满足你的要求，可以查看 [dart:math](https://api.dart.dev/stable/2.7.0/dart-math/dart-math-library.html) 库中的 API。

```dart
num a = 123;
num b = 123.0;
int c = 456;
double d = 1;

print('$a, $b, $c, $d'); // 123, 123.0, 456, 1.0
```

<br>

### 字符串转数字

```dart
// String -> int
var one = int.parse('1');
assert(one == 1);

// String -> double
var onePointOne = double.parse('1.1');
assert(onePointOne == 1.1);

// int -> String
String oneAsString = 1.toString();
assert(oneAsString == '1');

// double -> String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');
```

<br>

---

## String

Dart 字符串是一组 UTF-16 单元序列。 字符串通过单引号或者双引号创建。

<br>

单行文本输出：

```dart
String str = '今天天气真好，不睡觉可惜了';
print(str); // 今天天气真好，不睡觉可惜了
```

多行文本输出：使用连续三个单引号或者三个双引号实现多行字符串对象的创建：

```dart
// 手动换行
const str = '''
	这是多行文本输出，
	这是多行文本输出，
	这是多行文本输出，
''';

// 自动换行
const str = '''这是多行文本输出，\n 这是多行文本输出，\r 这是多行文本输出，''';

// 不转译: 使用 r 前缀，可以创建 “原始 raw” 字符串：
const str = r'''这是多行文本输出，\n这是多行文本输出，\r这是多行文本输出，''';
```

可以在字符串中使用 **${expression}** 表达式。同时，如果在字符串中表达式是一个标识符，是可以省略{}。

```dart
var a = 'abc';
print('123${a}456'); // 123abc456

// 省略{}
print('123$a456'); // 123abc,456
```

如果表达式的结果为一个对象，则 Dart 会调用该对象的 toString 方法来获取一个字符串。

```dart
var str = 'string interpolation';
print('${str.substring(0, 6)}'); // string
```

<br>

---

## Boolean

Dart中表示布尔值是`bool`类型，只有两个对象具有`bool`类型：布尔字面量`true`和`false`，它们都是**编译时常量**。

```dart
bool onOff = false;
```

<br>

---

## list

几乎每种编程语言中最常见的集合可能是 `array` 或有序的对象集合。 在 Dart 中的 *Array* 就是 [List](https://api.dartlang.org/stable/dart-core/List-class.html) 对象， 通常称之为 `List` 。

Dart list 字面量和 JavaScript 的数组字面量类似。

```dart
var list = [1, 2, 3];
```

在上述代码中，Dart 推断 `list` 变量的类型为 `List<int>` ，如果往该数组中添加一个非 int 类型的对象则会报错。你可以阅读 [类型推断](http://www.dartdoc.cn/guides/language/sound-dart#type-inference) 获取更多相关信息。

```dart
// 固定长度的list
List<int> fixedLengthList = new List(5);
print(fixedLengthList.length); // 5
print(fixedLengthList); // [null, null, null, null, null]
fixedLengthList[0] = 1;
print(fixedLengthList); // [1, null, null, null, null]

// 不固定长度的list
List<int> growableList = [1, 2, 3]; // 后台返回的数据
print(growableList); // [1, 2, 3]
growableList.length = 0;
print(growableList); // []
growableList.add(2020);
print(growableList); // [2020]
growableList[0] = 2019;
print(growableList); // [2019]

// 不能修改的list
var constantList = const [1, 2, 3];
constantList[1] = 1; // Unsupported operation: Cannot modify an unmodifiable list

// list<int> 类型的list
var arr1 = <int>[1, 2, 3];
print(arr2); // [1, 2, 3]

// 你可以使用扩展操作符（...）将一个 List 中的所有元素插入到另一个 List 中：
var arr2 = [0, ...arr1];
print(arr2); // [0, 1, 2, 3]

// 如果扩展操作符右边可能为 null ，你可以使用 null-aware 扩展操作符（...?）来避免产生异常：
var arr3;
var arr4 = [0, ...?arr3];
print(arr4); // [0]
```

Dart 在 2.3 还同时引入了 Collection If 和 Collection For，在构建集合时，可以使用条件判断（if）和循环（for）。

```dart
// 没啥卵用，因为我们搞flutter框架的
var nav = [
	'Home',
	'Furniture',
	'Plants',
	if (promoActive) 'Outlet'
];

var listOfInts = [1, 2, 3];
var listOfStrings = [
	'#0',
	for (var i in listOfInts) '#$i'
];
```

<br>

---

## set

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

<br>

在 Dart 中 Set 是一个元素唯一且无需的集合。 Dart 为 Set 提供了 Set 字面量和 [Set](https://api.dartlang.org/stable/dart-core/Set-class.html) 类型，其中，Set 字面量(literals) 是在 Dart2.2 中才加入的。

```dart
var stack = {'uniapp', 'rn', 'flutter', 'android', 'ios'};
```

在上述代码中，Dart 推断 `stack` 变量的类型为 `Set<String>`，如果往该 Set 中添加类型不正确的对象则会报错。

可以使用在 `{}` 前加上类型参数的方式创建一个空的 `Set`，或者将 `{}` 赋值给一个 `Set` 类型的变量：

```dart
var name1 = <String>{};
Set<String> name2 = {};
```

注意，这样的形式将创建一个 Map 而不是 Set：

```dart
var names = {};
print(getTypeName(names)); // _InternalLinkedHashMap<dynamic, dynamic>
```

<br>

### set还是map？

Map 字面量语法同 Set 字面量语法非常相似。因为先有的 Map 字面量语法，所以 `{}` 默认是 Map 类型。如果忘记在 {} 上注释类型或赋值到一个未声明类型的变量上，那么 Dart 会创建一个类型为 **Map<dynamic, dynamic>** 的对象。

```dart
var stack = {'uniapp', 'rn', 'flutter', 'android', 'ios'};

// 添加单个成员
stack.add('oc'); 
print(stack); // {uniapp, rn, flutter, android, ios, oc}

// 添加多个成员
var elements = ['oc', 'switf'];
stack.addAll(elements);
print(stack); // {uniapp, rn, flutter, android, ios, oc, switf}
```

可以在 Set 字面量前添加 `const` 关键字来创建一个 Set 编译时常量：

```dart
final stack2 = const {'uniapp', 'rn', 'flutter', 'android', 'ios'};

// 从 Dart 2.3 开始，Set 可以像 List 一样支持使用扩展操作符（... 和 ...?）以及 Collection If 和 Collection For 操作。
print([...stack2]); // [uniapp, rn, flutter, android, ios]
```

<br>

---

## map

通常来说， Map 是用来关联 keys 和 values 的对象。 keys 和 values 可以是任何类型的对象。在一个 Map 对象中`一个 key 只能出现一次。 但是 value 可以出现多次`。 Dart 中 Map 通过 Map 字面量 和 [Map](https://api.dartlang.org/stable/dart-core/Map-class.html) 类型来实现。

```dart
var info1 = {
	'author': 'dream',
	'age': '18',
	'gender': '男',
	'like': 'Write the code',
};
// 在上面的代码中，Dart 将 info1 变量的类型推断为 Map<String, String> 类型

var info2 = {2: 'foo', 4: 'bar'};
// 在上面的代码中，Dart 将 info2 的类型推断为 Map<int, String>

// 如果你向这两个 Map 对象中添加不正确的类型值，将导致运行时异常
info1['uid'] = 123456; // A value of type 'int' can't be assigned to a variable of type 'String'.
```

<br>

### 为什么不是new Map()?

从 Dart 2 开始，构造对象的 new 关键字可以被省略掉。在一个 Map 字面量前添加 const 关键字可以创建一个 Map 编译时常量：

```dart
final constantMap = const {1:'a',2:'b',3:'c'};
constantMap[2] = '333'; // Unsupported operation: Cannot set value in unmodifiable Map
```

 从 Dart 2.3 Map 可以像 List 一样支持使用扩展操作符（... 和 ...?）以及 Collection If 和 Collection For 操作。

```dart
print({...info1, ...info2}); 
```

<br>

---

## runes和grapheme

在 Dart 中， Rune 用来表示字符串中的 UTF-32 编码字符。

<br>

*   从 Dart 2.6 开始，使用 characters 包来访问或者操作用户感知的字符，也被称为 Unicode (扩展) grapheme clusters；

*   Unicode 编码为每一个字母、数字和符号都定义了一个唯一的数值。因为 Dart 中的字符串是一个 UTF-16 的字符序列，所以如果想要表示 32 位的 Unicode 数值则需要一种特殊的语法；

*    通常使用 \uXXXX 来表示 Unicode 字符，XXXX 是一个四位数的 16 进制数字。例如心形字符（♥）的 Unicode 为 \u2665。对于不是四位数的 16 进制数字，需要使用大括号将其括起来。例如大笑的 emoji 表情（😆）的 Unicode 为 \u{1f600}；

*   如果你需要读写单个 Unicode 字符，可以使用 characters 包中定义的 characters getter。它将返回 Characters 作为一系列 grapheme clusters 的字符串。具体使用请参考 [characters示例](https://pub.flutter-io.cn/packages/characters/example)。

<br>

`\u` 之后跟4位16进制数，表示一个unicode字符，取值范围是 `\u0000~\uffff`。

```dart
print('\x41'); // A
```

 `\x` 之后跟2位16进制数，表示一个字节的内码，取值范围是 `\x00~\xff`。

```dart
print('\u0041'); // A
```

<br>

---

## symbol

Symbol对象表示在Dart程序中声明的运算符或标识符。您可能永远不需要使用符号，但它们对于按名称引用标识符的API非常有用，因为缩小会更改标识符名称而不会更改标识符符号。要获取标识符的符号，请使用符号文字，它只是＃后跟标识符：

```dart
#radix
#bar
```



