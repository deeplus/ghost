---
title: 2.2：变量
---

# 2.2 变量

## 重点牢记

*   1.   每行代码结束，都要带分号；

*   2.   变量不能重复定义；

*   3.   不能在定义作用域（main 函数外部）执行赋值操作，要在 main 函数内部执行。

## 变量的声明

### 单一类型

在 Dart 语言中，允许你使用 `var`关键字来声明变量，该变量的类型会根据它的值来`自动推断`。

<br>

在下面的代码中，**name** 变量的类型会被推断为 **String** ，**age** 变量的类型会被推断为 **int** 。

```dart
var name = 'alice';
var age = 18;
```

另外，你还可以通过指定类型的方式来声明一个变量：

```dart
String name = 'alice';
int age = 18;
```

注意：var 本身并不是一种类型，`var 声明的变量在赋值的那一刻，就已经决定了它的类型`，如果你这样使用，就会有编译错误：

```dart
var name = 'alice';
name = 13; // 编译错误 Error: A value of type 'int' can't be assigned to a variable of type 'String'.
```

<br>

### 多类型

如果你不希望变量限定为单个类型的值，你可以使用 **对象类型** 或 **动态类型** 来声明变量：

```dart
Object name = 'alice';
name = 13; // 允许动态变更类型

dynamic age = 18;
age = '十三'; // 允许动态变更类型
```

<br>

### Object和dynamic的区别

**Object** 声明的变量之所以能够赋值为任意类型，那是因为**所有的类型都派生自 Object** 。但由于 **Object** 是一个类，并不支持某些数学运算符的操作，因此下面的代码在`编译时`就会报错：

```dart
Object num = '44';
num++; // 编译时错误
```

而 **dynamic** 表示没有一个类型可以表达你所期望的对象，它在编译的时候是无法确定变量的实际类型的，只有当程序运行的时候才能确定。所以上面的代码在编译时并不会报错，但在运行时会报错：

```dart
dynamic num = '44';
num++; // 运行时错误
```

<br>

---

## 默认值

为初始化的值默认值为 **null** 。即使变量是数字类型其默认值也是 **null** ，因为在 Dart 中一切都是对象，数字类型 也不例外。

```dart
int number;
print(number); // null
```

<br>

---

## Final和Const

如果你不希望在使用的时候去修改某个变量，你可以使用 **final** 或 **const** 来修饰该变量。

<br>

**const** 、 **final** 修饰的**顶层变量**在声明时需要赋值进行初始化，之后便不能改变，否则报错；

```dart
const name; // Error: The const variable 'name' must be initialized.
final age; // Error: The final variable 'age' must be initialized.

const name = 'alice';
final age = 18;

name = 'xiaopiao'; // Error: Constant variables can't be assigned a value.
age = 20; // Error: The final variable 'age' can only be set once.
```

**const** 、 **final** 不能和 **var** 同时使用，但允许和 `具体类型`同时使用：

```dart
const var name = 'alice'; // Error: Expected an identifier, but got 'var'.
final var age = 18; // Error: Expected an identifier, but got 'var'.

const String name = 'alice';
final int age = 18;
```

<br>

---

### Final和Const的区别

**const** 变量为`编译时常量`，而 **final** 变量为 `运行时常量`。但由于编译时常量的值在**编译期**就能够确定，因而能够让代码运行的**更高效**。

```dart
const name = 'alice'; // 编译时常量

final age = 18; // 运行时常量
```

类的变量可以为 **final** 但是不能为 **const** ，如果使用 **const** 修饰类中的变量，则必须加上 `static` 关键字，将该变量修饰为一个 `静态变量`，实际上也`只有静态变量才能够使用 const 声明`。

```dart
class Goods {
    const String title; // Error: Only static fields can be declared as const.
    final String desc;
    Goods(this.title, this.desc); // 理解为JavaScript中的constructor
}

// 只有静态变量才能够使用 const 声明
class Goods {
    static const String title = '精品好货';
}
```

**const** 关键字不仅可以用于声明`常量变量`。 还可以用来创建`常量值`，以及声明创建常量值的构造函数。 任何变量都可以拥有常量值。

```dart
var foo = const [];
final bar = const []; // 编译时常量
```

声明`const` 的初始化表达式中 `const` 可以被省略。

```dart
const baz = []; // 相当于`const baz = const []`
```

非 `final` 、非 `const` 的变量是可以被修改的，即使这些变量 曾经引用过 `const` 值。

```dart
// 非final、非const变量的值可以修改
foo = [1, 2, 3]; 

// const、final变量的值不可以修改
bar = [4, 5, 6]; //编译时错误 The final variable 'bar' can only be set once. 

baz = [7, 8, 9]; //编译时错误 Constant variables can't be assigned a value.
```

