module.exports = [
  {text: '首页', link: '/'},
  {
    text: '前端',
    link: '/web/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: 'React', link: '/pages/fdd547/'}, // 注意link结尾有斜杠和没有斜杠的区别
      {text: 'Vue', link: '/pages/c47f4c/'},
      {text: 'Node', link: '/pages/f7308b/'},
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      // {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
      // {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
      // {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
      // {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  {
    text: '开发工具',
    link: '/tools/',
    items: [
      // {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
      // {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
      // {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
      // {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站资源', link: '/pages/beb6c0bd8a66cea6/'},
      {text: 'React资源', link: '/pages/9c59e0/'},
      {text: 'Vue资源', link: '/pages/682785/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  },
  {text: '友情链接', link: '/friends/'},
  {text: '关于', link: '/about/'},
]