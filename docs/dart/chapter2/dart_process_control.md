---
title: 2.6：流程控制
---

# 2.6 流程控制

你可以通过下面任意一种方式来控制 Dart 程序流程：

*   1.   `if` and `else`

*   2.   `for` loops

*   3.   `while` and `do`-`while` loops

*   4.   `break` and `continue`

*   5.   `switch` and `case`

*   6.   `assert`

<br>

##  `if` and `else`

与 JavaScript 不同的是，Dart 的 if 语句中的条件必须是一个布尔值，不能是其它类型

```dart
bool addOrReduce(b) {
    return b ? true : false;
}
    
if (addOrReduce(false)) {
    print('增加');
} else if (addOrReduce(false)) {
    print('减少');
} else {
    print('未知');
}
```

<br>

---

##  `for` loops

你可以使用标准的 for 循环进行迭代。

```dart
Set bigCourses = {
    'html-css','js+h5','vue-react','node','设计模式',
    '微信小程序','react-native','uni-app','flutter','php'
};
List<String> smallClasses = [
    'less','sass','layui','bootstrap','threejs','swiper'
];
for (var i = 0; i < 5; i++) {
    bigCourses.add(smallClasses[i]);
}

// 如果要遍历的对象实现了 Iterable 接口，则可以使用 forEach() 方法，
// 如果不需要使用到索引，则使用 forEach 方法是一个非常好的选择：
smallClasses.forEach((item) => bigCourses.add(item));
bigCourses.forEach((item) =>print(item));

// 像 List 和 Set 等实现了 Iterable 接口的类还支持 for-in 形式的 迭代：
for (var key in bigCourses) {
    print('- $key -');
}     
```

<br>

---

## `while` and `do`-`while` loops

while 循环会在执行循环体前先判断条件： 【先付钱后上菜】

```dart
int i = 0;
while (smallClasses[i] != 'swiper') { //less
	print('+ ${smallClasses[i]} +');
    i++;
}
```

do-while 循环则会先执行一遍循环体 再 判断条件：【先上菜后付钱】

```dart
int index = 0;
do {
	print('* ${smallClasses[index]} *');
    index++;
} while (smallClasses[index] != 'sass');
```

<br>

---

##  `break` and `continue`

使用 break 可以中断整个循环：

```dart
while (index < 5) {
	if (index == 3) break;
	print(index);
	index++;
}
```

使用 continue 可以跳过本次循环直接进入下一次循环继续执行：

```dart
for (var key in smallClasses) {
	if (key == 'threejs') continue;
    print(key);
}
```

<br>

---

##  `switch` and `case`

Switch 语句在 Dart 中使用 == 来比较整数、字符串或编译时常量，比较的两个对象必须是同一个类型且不能是子类并且没有重写 == 操作符。 

枚举类型非常适合在 Switch 语句中使用。

<br>

---

##  `assert`

在开发过程中，可以在条件表达式为 false 时使用 - assert(条件, 可选信息); - 语句来打断代码的执行。你可以在本文中找到大量使用 assert 的例子:

```dart
assert(text != null);
```

assert 的第一个参数可以是值为布尔值的任何表达式。如果表达式的值为 true，则断言成功，继续执行。如果表达式的值为 false，则断言失败，抛出一个 AssertionError 异常。