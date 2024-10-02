import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
// 首页·
{ text: '首页', link: '/' },
// { text: '关于', link: '/markdown-examples' },
// 学习
{
  text: '学习',
  items: [
    {
      text: '阅读',
      items: [
        { text: '读书', link: '/study/read/book/' },
        { text: '阅人', link: '/study/read/people/' },
        { text: '看事', link: '/study/read/thing/' },
      ]
    },
    {
      text: '知识',
      items: [
        { text: '读书', link: '/study/read/book/' },
        { text: '阅人', link: '/read/people/' },
        { text: '看事', link: '/read/thing/' },
      ]
    },
  ]
},

// 阅读
{
  text: '阅读',
  items: [
    {
      // text: '读书',
      items: [
        { text: '读书', link: '/read/book/' },
        { text: '阅人', link: '/read/people/' },
        { text: '看事', link: '/read/thing/' },
      ]
    },
  ]
},
// 写作
{
    text: '写作',
    items: [
      {
        // text: '写作',
        items: [
          { text: '写作', link: '/write/' },
        ]
      },
      
    ]
  },
// 编程
{
  text: '编程',
  items: [
    {
      // text: '编程',
      items: [
        { text: '基础', link: '/coding/basis/' },
        { text: '前端', link: '/coding/front/' },
        { text: '后端', link: '/coding/back/' },
        { text: '运维', link: '/coding/devops/' },
        { text: '大数据', link: '/coding/bigdata/' },
        { text: 'AI', link: '/coding/ai/' },
      ]
    },
    
  ]
},
// 折腾
{
  text: '折腾',
  items: [
    {
      // text: '折腾',
      items: [
        { text: '硬件', link: '/geek/hardware/' },
        { text: '软件', link: '/geek/software/' },
        { text: '云服务', link: '/geek/cloud-service/' },
        { text: 'Web 服务', link: '/geek/web/' },
      ]
    },
    
  ]
},
// 事业
{
  text: '事业',
  items: [
    {
      // text: '事业',
      items: [
        { text: '事业', link: '/career/' },
      ]
    },
    
  ]
},
// 生活
{
  text: '生活',
  items: [
    {
      // text: '生活',
      items: [
        { text: '经验', link: '/life/experience/' },
        { text: '感悟', link: '/life/apperception/' },
      ]
    },
    
  ]
},
// 更多

{
  text: '更多',
  items: [
    {
      text: '导航',
      items: [
        { text: '软件', link: '/nav/software/' },
        { text: '编程', link: '/nav/coding/' },
        { text: '学习', link: '/nav/study/' },
      ]
    },
    {
      text: '资源',
      items: [
        { text: '软件', link: '/resource/software/' },
        { text: '字体', link: '/resource/font/' },
        { text: '图标', link: '/resource/icon/' },
      ]
    },
    {
      text: '文档',
      items: [
        { text: '文档', link: '/docs/' },
      ]
    },
    {
      text: '关于',
      items: [
        { text: '关于攀哥', link: '/about/me.md' },
        { text: '关于本站', link: '/about/website.md' },
        { text: '关于捐助', link: '/about/contribution.md' },
        { text: '贡献指南', link: '/about/contribution-guide.html' },
        { text: '错误反馈', link: '/about/error-feedback.html' },
        { text: '版权协议', link: '/about/copyright.html' },
        { text: '隐私政策', link: '/about/privacy.html' },
        { text: '更新日志', link: '/about/logs.html' },
        { text: '友情链接', link: '/about/link.html' },
      ]
    },
  ]
},
]