---
title: 2.7：异常
---

# 2.7 异常

本节作为了解即可：

*    Dart 代码可以抛出和捕获异常。异常表示一些未知的错误情况，如果异常没有捕获则会被抛出从而导致抛出异常的代码终止执行。

*    与 Java 不同的是，Dart 的所有异常都是非必检异常，方法不一定会声明其所抛出的异常并且【你也不会被要求捕获任何异常】。  

*    Dart 提供了 [Exception](https://api.dartlang.org/stable/dart-core/Exception-class.html) 和 [Error](https://api.dartlang.org/stable/dart-core/Error-class.html) 类型， 以及一些子类型。 当然也可以定义自己的异常类型。 但是，此外 Dart 程序可以抛出任何非 null 对象， 不仅限 Exception 和 Error 对象。

<br>

## throw

```dart
 // 下面是关于抛出或者 引发 异常的示例：
print(Exception('Expected at least 1 section'));
// 你也可以抛出任意的对象：
throw null;
```

<br>

---

## catch

捕获异常可以避免异常继续传递（重新抛出异常除外）。捕获一个异常可以给你处理它的机会： 

```dart
int count = 100;
try {
	count++;
	if (count == 101) {
		count = 101.0;
	}
} catch (err) { // 如果 catch 语句没有指定异常类型则表示可以捕获任意异常类型：
	print(err);
}
```

对于可以抛出多种异常类型的代码，也可以指定多个 catch 语句，每个语句分别对应一个异常类型：

```dart
try {
	breedMoreLlamas();
} on OutOfLlamasException {
	// 指定异常
	buyMoreLlamas();
} on Exception catch (e) {
	// 其它类型的异常
	print('Unknown exception: $e');
} catch (e) {
	// 不指定类型，处理其它全部
	print('Something really unknown: $e');
}
```

关键字 rethrow 可以将捕获的异常再次抛出：

```dart
void misbehave() {
	try {
		dynamic foo = true;
		print(foo++); // 运行时错误
	} catch (e) {
		print('misbehave() partially handled ${e.runtimeType}.');
		rethrow; // 允许调用者查看异常。
	}
}

void main() {
	try {
		misbehave();
	} catch (e) {
		print('main() finished handling ${e.runtimeType}.');
	}
}
```

<br>

---

## finally

可以使用 finally 语句来包裹确保不管有没有异常都执行代码，如果没有指定 catch 语句来捕获异常，则在执行完 finally 语句后再抛出异常：

```dart
try {
    misbehave();
} finally {
    // 总是清理，即便抛出了异常。
    print('异常');
}
  
// finally 语句会在任何匹配的 catch 语句后执行：
try {
    misbehave();
} catch (e) {
    print('*Error*: $e'); // 先处理异常。
} finally {
    // 总是清理，即便抛出了异常。
    print('异常');
}
```

