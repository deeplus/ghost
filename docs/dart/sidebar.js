module.exports = [
    {
        title: '前言',
        path: '/dart/'
    },
    {
        title: '第一章：起步',
        path: '/dart/chapter1/',
        collapsable: false,
        children: [
            'chapter1/dart_intro', // 直接写 'dart_intro无法正确解析'
            'chapter1/dart_import',
            'chapter1/dart_comment'
        ]
    },
    {
        title: '第二章：基础内容',
        path: '/dart/chapter2/',
        collapsable: false,
        children: [
            'chapter2/dart_keywords',
            'chapter2/dart_variables',
            'chapter2/dart_built_in',
            'chapter2/dart_functions',
            'chapter2/dart_operators',
            'chapter2/dart_process_control',
            'chapter2/dart_exceptions',
            'chapter2/dart_classes',
            'chapter2/dart_generics',
            'chapter2/dart_libraries',
            'chapter2/dart_asynchrony',
            'chapter2/dart_generators',
            'chapter2/dart_callable_classes',
            'chapter2/dart_metadata'
        ]
    }
]
