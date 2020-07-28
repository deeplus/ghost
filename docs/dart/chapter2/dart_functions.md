---
title: 2.4：函数
---

# 2.4 函数

Dart 是一门真正面向对象的语言， 甚至其中的函数也是对象，并且有它的类型 [Function](https://api.dartlang.org/stable/dart-core/Function-class.html) 。 这也意味着函数可以被赋值给变量或者作为参数传递给其他函数。 也可以把 Dart 类的实例当做方法来调用。

## 函数声明

在 Dart 语言中定义一个函数的方法如下：

```dart
返回值类型 函数名(参数列表) {
    函数体;
};

// 例如：
const mapData = {5: 'dartmap'};
bool isData(int n) {
    return mapData[n] != null;
}
```

虽然在 Effective Dart 中推荐 [公共API中声明类型](https://www.dartcn.com/guides/language/effective-dart/design#prefer-type-annotating-public-fields-and-top-level-variables-if-the-type-isnt-obvious), 但是省略了类型声明，函数依旧是可以正常使用的：

```dart
isData(int n) {
    return mapData[n] != null;
}
```

如果函数中只有[一句表达式]，可以使用简写语法：

```dart
bool isData(int n) => mapData[n] != null;
```

<br>

---

## 默认参数值

在定义方法的时候，可以使用 `=` 来定义可选参数的默认值。 默认值只能是编译时常量。 如果没有提供默认值，则默认值为 null。

```dart
String Info2({String name = 'dream', int age = 18}) => "$name:$age";
print(Info2());
```

:exclamation:旧版本代码中可能使用的是冒号 (`:`) 而不是 `=` 来设置参数默认值。 原因是起初命名参数只支持 `:` 。 这种支持可能会被弃用。 建议 **[使用 `=` 指定默认值。](https://www.dartcn.com/tools/pub/pubspec#sdk-constraints)**

<br>

---

函数有两种参数类型：required（必要参数）和optional（可选参数），**必要参数放最前边，可选参数放后边**。

## 可选参数

可选参数分为**命名参数**和**位置参数**，但一个参数只能选择其中一种方式修饰。

<br>

### 命名可选参数

定义函数时，使用 `{param1, param2, …}` 来指定命名参数：

```dart
// 指定命名参数，设置默认参数值
String getData({name1: 'dart', name2: 'flutter'}) {
	return name1 + ':' + name2;
}
```

调用函数时，可以使用指定命名参数 `paramName: value`。例如：

```dart
void main() {
	print(getData(name2: 'java')); // dart:java
    print(getData()); // dart:flutter
}
```

[Flutter](https://flutter.io/) 创建实例的表达式可能很复杂， 因此窗口小部件构造函数仅使用命名参数。 这样创建实例的表达式更易于阅读。

<br>

使用 [@required](https://pub.dartlang.org/documentation/meta/latest/meta/required-constant.html) 注释表示参数是 *required* 性质的命名参数， 该方式可以在任何 Dart 代码中使用（不仅仅是Flutter）。

```dart
const Scrollbar({Key key, @required Widget child});
// 此时 Scrollbar 是一个构造函数， 当 child 参数缺少时，分析器会提示错误。
```

<br>

### 位置可选参数

定义函数时，使用 `[]` 将一系列参数包裹起来作为位置参数：

```dart
String say(String from, String msg, [String device]) {
	var result = '$from says $msg';
	if (device != null) {
		result = '$result with a $device';
	}
	return result;
}
```

不使用可选参数调用函数：

```dart
print(say('Bob', 'Howdy')); // Bob says Howdy
```

使用可选参数调用函数：

```dart
print(say('Bob', 'Howdy', 'smoke signal')); // Bob says Howdy with a smoke signal
```

<br>

---

## main()函数

任何应用都必须有一个顶级 `main()` 函数，作为应用服务的入口。 `main()` 函数返回值为空，参数为一个可选的 `List<String>` 。

```dart
void main(List<String> arguments) {
	print(arguments);
}
```

给 `main 函数` 传参，需要在 命令行进行：

```bash
$ dart variable.dart php java
# [php, javas]
```

<br>

---

## 函数是一等对象

一个函数可以作为另一个函数的参数：

```dart
void printElement(int element) {
	print(element);
}
var list = [1, 2, 3];

void main() {
	// 将 printElement 函数作为参数传递。
	list.forEach(printElement);
}
```

同样可以将一个函数赋值给一个变量：

```dart
var loudify = (msg) => '!!! ${msg.toUpperCase()} !!!';

void main() {
	print(loudify('hello'));
}
```

<br>

---

## 匿名函数

多数函数是有名字的， 比如 `main()` 和 `printElement()`。 也可以创建没有名字的函数，这种函数被称为 *匿名函数*， 有时候也被称为 **lambda** 或者 **closure** 。 

```dart
// 匿名函数
[1,2,3].forEach((e) {
    print(e);
});
// 或者
[1,2,3].forEach( (e) => print(e) );
```

<br>

---

## 语法作用域

Dart 是词法有作用域语言，变量的作用域在写代码的时候就确定了，大括号内定义的变量只能在大括号内访问，与 php、Java 类似。 

```dart
// 一个嵌套函数中 变量在多个作用域中的示例
var a = 100;

void main() {
	var b = 1;
    
	void fn1() {
		var c = 2;
      
		void fn2() {
			var d = 4;
			print(a);
			print(b);
			print(c);
			print(d);
		}
		fn2();
	}
	fn1();
}

// 注意 fn1 函数可以访问包括顶层变量在内的所有的变量。
```

<br>

---

## 词法闭包

闭包 即一个函数对象，即使函数对象的调用在它原始作用域之外，依然能够访问在它词法作用域内的变量。

```dart
Function fn1(num n) {
	return (num p) => n + p;
}

void main() {
	num count = 1;
	num price = 100;
	var res = fn1(count);
	print(res(price)); // 101
}
```

<br>

---

## 返回值

所有函数都会返回一个值。 如果没有明确指定返回值， 函数体会被隐式的添加 `return null;` 语句。

```dart
foo() {}
print(foo()); // null

void fn() {}
print(fn()); // void表示函数没有返回值，不能调用print

void fn1() => print('函数没有返回值');
fn1(); // 可以调用
```









