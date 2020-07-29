---
title: 1.2：目录结构
---

# 1.2 目录结构

```bash
├── android目录 		# 这里存放的是Flutter与android原生交互的一些代码
│
├── build目录			# 存储 iOS 和 Android 构建文件
│
├── ios目录			# 这里存放的是Flutter与ios原生交互的一些代码
│
├── lib目录			# 应用源文件，存放的是我们用Dart语言编写程序的源代码
│	│
│	├──	main.dart			# 应用程序运行入口文件
│	└── ...
│
├── test目录			# 测试文件
│ 
└── pubspec.yaml文件	#  相当其它技术栈框架的package.json文件，是配置项目依赖项的文件，
					#  比如配置远程pub仓库的依赖库，或者指定本地资源（图片、字体、音频、视频等）
```

