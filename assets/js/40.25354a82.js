(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{831:function(t,n,a){"use strict";a.r(n);var s=a(113),r=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_5-1-container容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-container容器"}},[t._v("#")]),t._v(" 5.1 Container容器")]),t._v(" "),a("br"),t._v(" "),a("p",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/widgets/Container/Container.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Container"),a("OutboundLink")],1),t._v(" 是一个组合类容器，它本身不对应具体的"),a("code",[t._v("RenderObject")]),t._v("，它是"),a("code",[t._v("DecoratedBox")]),t._v("、"),a("code",[t._v("ConstrainedBox、Transform")]),t._v("、"),a("code",[t._v("Padding")]),t._v("、"),a("code",[t._v("Align")]),t._v("等组件组合的一个多功能容器，所以我们只需通过一个"),a("code",[t._v("Container")]),t._v("组件可以实现同时需要装饰、变换、限制的场景；")]),t._v(" "),a("h2",{attrs:{id:"container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[t._v("#")]),t._v(" Container")]),t._v(" "),a("br"),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/foundation/Key-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Key"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("key")]),t._v("， Container唯一标识符，用于查找更新；")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/painting/AlignmentGeometry-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlignmentGeometry"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("alignment")]),t._v("，控制child的对齐方式，如果container或者container父节点尺寸大于child的尺寸，这个属性设置会起作用，有很多种对齐方式；")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("EdgeInsetsGeometry"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("padding")]),t._v("，decoration内部的空白区域，如果有child的话，child位于padding内部。padding与margin的不同之处在于，padding是包含在content内，而margin则是外部边界，设置点击事件的话，padding区域会响应，而margin区域不会响应；")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"4"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/dart-ui/Color-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Color"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("color")]),t._v("，用来设置container背景色，如果foregroundDecoration设置的话，可能会遮盖color效果；")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"5"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/painting/Decoration-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Decoration"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("decoration")]),t._v("，绘制在child后面的装饰，设置了decoration的话，就不能设置color属性，否则会报错，此时应该在decoration中进行颜色的设置；")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"6"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/painting/Decoration-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Decoration"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("foregroundDecoration")]),t._v("，绘制在child前面的装饰；前景色")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"7"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/dart-core/double-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("double"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("width")]),t._v("，container的宽度，设置为double.infinity可以强制在宽度上撑满，不设置，则根据child和父节点两者一起布局；")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"8"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/dart-core/double-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("double"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("height")]),t._v("，container的高度，设置为double.infinity可以强制在高度上撑满；")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"9"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/rendering/BoxConstraints-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BoxConstraints"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("constraints")]),t._v("，添加到child上额外的约束条件；")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"10"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("EdgeInsetsGeometry"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("margin")]),t._v("， 围绕在decoration和child之外的空白区域，不属于内容区域；")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"11"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/vector_math_64/Matrix4-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Matrix4"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("transform")]),t._v("， 设置container的变换矩阵，类型为Matrix4；")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"12"}},[a("li",[a("a",{attrs:{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Widget"),a("OutboundLink")],1),t._v(" -- "),a("strong",[t._v("child")]),t._v("， container中的内容widget；")])])])]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"container组成-盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container组成-盒模型"}},[t._v("#")]),t._v(" Container组成(盒模型)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("最里层是 child 元素")])]),t._v(" "),a("li",[a("p",[t._v("child元素首先会被 padding 包着")])]),t._v(" "),a("li",[a("p",[t._v("然后是 constraints 限制的区域")])]),t._v(" "),a("li",[a("p",[t._v("最后是 margin")])])]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"container绘制过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container绘制过程"}},[t._v("#")]),t._v(" Container绘制过程")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("首先绘制 transform 效果")])]),t._v(" "),a("li",[a("p",[t._v("接着绘制 decoration")])]),t._v(" "),a("li",[a("p",[t._v("然后绘制 child")])]),t._v(" "),a("li",[a("p",[t._v("最后绘制 foregroundDecoration")])])]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"container自身尺寸调节情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container自身尺寸调节情况"}},[t._v("#")]),t._v(" Container自身尺寸调节情况")]),t._v(" "),a("ul",[a("li",[t._v("Container 在没有子节点时：")])]),t._v(" "),a("p",[t._v("         会"),a("strong",[t._v("试图变得足够大")]),t._v("。除非 constraints 有限制，否则在这种情况下，Container 会试图去变得足够小；")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deepPurple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时Container和视图一样大")]),t._v("\n")])])]),a("br"),t._v(" "),a("ul",[a("li",[t._v("Container在有子节点时：")])]),t._v(" "),a("p",[t._v("         会"),a("strong",[t._v("根据子节点尺寸调节自身尺寸")]),t._v("。如果Container构造器命名参数设置了width、height以及constraints，那么就会按照构造器中的参数来进行尺寸的调节。")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tcolor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deepPurple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tchild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时Container和Text一样大")]),t._v("\n")])])]),a("br"),t._v(" "),a("ul",[a("li",[t._v("alignment 属性会撑开Container：")])]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deepPurple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alignment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Alignment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("hr"),t._v(" "),a("p",[t._v("Container容器综合示例：")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    constraints"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BoxConstraints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        maxWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        maxHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    decoration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BoxDecoration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deepPurple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        border"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Border"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BorderStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("solid\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        boxShadow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BoxShadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Offset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                blurRadius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模糊度")]),t._v("\n                spreadRadius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 扩散半径，负值表示缩小")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BoxShape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rectangle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        borderRadius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BorderRadius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            topLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("circular")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        gradient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RadialGradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            Color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromRGBO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DecorationImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BoxFit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NetworkImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://h5sm.com/static/bgpig.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            colorFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ColorFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withOpacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BlendMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);