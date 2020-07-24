---
title: 1.3：注释
---

# 注释

Dart 支持单行注释、多行注释和文档注释。

## 单行注释

单行注释以 `//` 开始。 所有在 `//` 和改行结尾之间的内容被编译器忽略。

```dart
void main() {
	// TODO: refactor into an AbstractLlamaGreetingFactory?
	print('Welcome to my Llama farm!');
}
```

## 多行注释

多行注释以 `/*` 开始， 以 `*/` 结尾。 所有在 `/*` 和 `*/` 之间的内容被编译器忽略 （不会忽略文档注释）。 多行注释可以嵌套。

```dart
void main() {
	/*
	 * This is a lot of work. Consider raising chickens.

	Llama larry = Llama();
	larry.feed();
	larry.exercise();
	larry.clean();
	 */
}
```

## 文档注释

文档注释可以是多行注释，也可以是单行注释， 文档注释以 `///` 或者 `/**` 开始。 在连续行上使用 `///` 与多行文档注释具有相同的效果。

在文档注释中，除非用中括号括起来，否则Dart 编译器会忽略所有文本。 使用中括号可以引用类、 方法、 字段、 顶级变量、 函数、 和参数。 括号中的符号会在已记录的程序元素的词法域中进行解析。

下面是一个引用其他类和成员的文档注释：

```dart
/// A domesticated South American camelid (Lama glama).
///
/// 自从西班牙时代以来，
/// 安第斯文化就将骆驼当做肉食类和运输类动物。
class Llama {
	String name;

	/// 喂养骆驼 [Food].
	///
	/// 典型的美洲驼每周吃一捆干草。
	void feed(Food food) {
		// ...
	}

	/// 使用 [activity] 训练骆驼
	/// [timeLimit] 分钟。
	void exercise(Activity activity, int timeLimit) {
		// ...
	}
}
```

在生成的文档中，`[Food]` 会成为一个链接， 指向 Food 类的 API 文档。

解析 Dart 代码并生成 HTML 文档，可以使用 SDK 中的 [documentation generation tool.](https://github.com/dart-lang/dartdoc#dartdoc) 关于生成文档的实例，请参考 [Dart API documentation.](https://api.dartlang.org/stable) 关于文档结构的建议，请参考 [Guidelines for Dart Doc Comments.](https://www.dartcn.com/guides/language/effective-dart/documentation)

