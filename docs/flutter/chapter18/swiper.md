---
title: 18.1：轮播图
---

# 18.1：轮播图



## flutter_swiper

[flutter_swiper](https://pub.dev/packages/flutter_swiper) 

<br>

```dart
import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';

// ignore: must_be_immutable
class SwiperDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('轮播图'),
      ),
      body: Container(
        height: 150,
        child: Swiper(
          itemBuilder: (BuildContext context, int index) {
            return Image.network(
              swiperList[index],
              fit: BoxFit.cover,
            );
          },
          itemCount: swiperList.length,
          viewportFraction: 0.8,
          scale: 0.9,
        ),
      ),
    );
  }

  List swiperList = [
    'http://tanzhouweb.com/mg/img/1-banner/1.jpg',
    'http://tanzhouweb.com/mg/img/1-banner/2.jpg',
    'http://tanzhouweb.com/mg/img/1-banner/3.jpg'
  ];
}
```

