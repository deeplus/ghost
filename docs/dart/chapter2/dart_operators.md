---
title: 2.5：运算符
---

# 2.5 运算符

## 算术运算符

**~/** 表示 **除并取整**

```dart
7 ～/ 2 // 3
```

<br>

---

## 类型判断运算符

**as**、**is**、**is!** 运算符是在运行时判断对象类型的运算符。

```dart
// 如果对象是指定类型则返回 true
print(1 is Object); // true

// is!	如果对象是指定类型则返回 false
print(1 is! Object); // false

// as 类型转换，也用作指定类前缀
(emp as Person).firstName = 'Bob';
import 'package:lib2/lib2.dart' as lib2;
```

<br>

---

## 赋值运算符

使用 `=` 为变量赋值。 使用 `??=` 运算符时，只有当被赋值的变量为 null 时才会赋值给它。

```dart
// 将值赋值给变量a
a = value;
// 如果b为空时，将变量赋值给b，否则，b的值保持不变。
b ??= value;
```

<br>

---

## 条件表达式

Dart有两个运算符，有时可以替换 [if-else](https://www.dartcn.com/guides/language/language-tour#if-和-else) 表达式， 让表达式更简洁：

### **condition? expr1 : expr2**

如果条件为 true, 执行 *expr1* (并返回它的值)： 否则, 执行并返回 *expr2* 的值。

<br>

### **expr1??expr2**

如果 *expr1* 是 non-null， 返回 *expr1* 的值； 否则, 执行并返回 *expr2* 的值。

```dart
String playerName(String name) => name != null ? name : 'Guest';

// 如果使用 if-else 则更长。
String playerName(String name) {
	if (name != null) {
		return name;
	} else {
		return 'Guest';
	}
}
```

<br>

---

## 级联运算符

级联运算符 (`..`) 可以实现对同一个对像进行一系列的操作。 除了调用函数， 还可以访问同一对象上的字段属性。 这通常可以节省创建临时变量的步骤， 同时编写出更流畅的代码。严格来说 .. 级联操作并非一个运算符而是 Dart 的特殊语法。

```dart
List list = <dynamic>[1, 2, 3];
print(list); // [1, 2, 3]
list.add(4);
list.add(5);
print(list); // [1, 2, 3, 4, 5]

// 使用级联操作符
list..add(6)..add(7);
print(list); // [1, 2, 3, 4, 5, 6, 7]
list.addAll([0x08, 0x09]);
print(list); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```