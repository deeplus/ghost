---
title: 1.2：重要概念
---

# 1.2 重要概念

## 注意事项

在学习 Dart 语言时, 应该基于以下事实和概念：

*    任何保存在变量中的都是一个 *对象* ， 并且所有的对象都是对应一个 *类* 的实例。 无论是数字，函数和 `null` 都是对象。所有对象继承自 [Object](https://api.dartlang.org/stable/dart-core/Object-class.html) 类。
*    尽管 Dart 是强类型的，但是 Dart 可以推断类型，所以类型注释是可选的。 在上面的代码中， `number` 被推断为 `int` 类型。 如果要明确说明不需要任何类型， [需要使用特殊类型 `dynamic`](https://www.dartcn.com/guides/language/effective-dart/design#do-annotate-with-object-instead-of-dynamic-to-indicate-any-object-is-allowed) 。
*    Dart 支持泛型，如 `List <int>` （整数列表）或 `List <dynamic>` （任何类型的对象列表）。
*    Dart 支持顶级函数（例如 `main（）` ）， 同样函数绑定在类或对象上（分别是 *静态函数* 和 *实例函数* ）。 以及支持函数内创建函数 （ *嵌套* 或 *局部函数* ） 。
*    类似地， Dart 支持顶级 *变量* ， 同样变量绑定在类或对象上（静态变量和实例变量）。 实例变量有时称为字段或属性。
*    与 Java 不同，Dart 没有关键字 “public” ， “protected” 和 “private” 。 如果标识符以下划线（_）开头，则它相对于库是私有的。 有关更多信息，参考 [库和可见性](https://www.dartcn.com/guides/language/language-tour#库和可见性)。
*    *标识符* 以字母或下划线（_）开头，后跟任意字母和数字组合。
*    Dart 语法中包含 *表达式（ expressions ）*（有运行时值）和 *语句（ statements ）*（没有运行时值）。 例如，[条件表达式](https://www.dartcn.com/guides/language/language-tour#conditional-expressions) `condition ? expr1 : expr2` 的值可能是 `expr1` 或 `expr2` 。 将其与 [if-else 语句](https://www.dartcn.com/guides/language/language-tour#if-和-else) 相比较，if-else 语句没有值。 一条语句通常包含一个或多个表达式，相反表达式不能直接包含语句。
*    Dart 工具可以显示 警告 和 错误 两种类型的问题。警告表明代码可能有问题但不会阻止其运行。错误分为编译时错误和运行时错误；编译时错误代码无法运行；运行时错误会在代码运行时导致[异常](http://www.dartdoc.cn/guides/language/language-tour#exceptions)。

## 关键字

应该避免使用这些单词作为标识符。但是，带有上标的单词可以在必要的情况下作为标识符：

*    带有上标 1 的关键字为 上下文关键字，只有在特定的场景才有意义，它们可以在任何地方作为有效的标识符。

*    带有上标 2 的关键字为 内置标识符，其作用只是在JavaScript代码转为Dart代码时更简单，这些关键字在大多数时候都可以作为有效的标识符，但是它们不能用作类名或者类型名或者作为导入前缀使用。

*    带有上标 3 的关键字为 Dart1.0 发布后用于支持异步相关的特性新加的。不能在由关键字 async、async* 或 sync* 标识的方法体中使用 await 或 yield 作为标识符。

**其它没有上标的关键字为 保留字，均不能用作标识符。**

