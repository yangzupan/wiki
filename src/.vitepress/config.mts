import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "杨祖攀",
  titleTemplate: ':title - 个人知识库',
  description: "攀哥的个人知识库",
  lang: 'zh-CN',
  base: '/',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://wiki.yangzupan.com/'
  },
  // 主体配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 站点标题
    siteTitle: "个人知识库",

    // 头部导航
    nav: [
      // 首页·
      { text: '首页', link: '/' },
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
    ],
    // 侧边栏目录
    sidebar:{
      '/read/':[
        {
          text: '阅读',
          collapsed: false,
          items: [
            {
              text: '读书',
              collapsed: true,
              items: [
                { text: '通识读物', link: '/read/book/general/' },
                { text: '阅人', link: '/read/people/' },
                { text: '看事', link: '/read/thing/' },
              ]
            },
            {
              text: '读书',
              items: [
                { text: '通识读物', link: '/read/book/general/' },
                { text: '阅人', link: '/read/people/' },
                { text: '看事', link: '/read/thing/' },
              ]
            },
          ]
        },

      ],

      '/about/': [
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
            // { text: '友情链接', link: '/about/link.html' },
          ]
        }
      ],
      '/':[
        {
          text: '阅读',
          collapsed: true,
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
        {
          text: '编程',
          collapsed: true,
          items: [
            {
              // text: '读书',
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
        {
          text: '折腾',
          collapsed: true,
          items: [
            {
              // text: '读书',
              items: [
                { text: '硬件', link: '/geek/hardware/' },
                { text: '软件', link: '/geek/software/' },
                { text: '云服务', link: '/geek/cloud-service/' },
                { text: 'Web 服务', link: '/geek/web/' },
              ]
            },
          ]
        },
        {
          text: '写作',
          collapsed: true,
          items: [
            {
              // text: '写作',
              items: [
                { text: '事业', link: '/write/' },
              ]
            },
          ]
        },
        {
          text: '事业',
          collapsed: true,
          items: [
            {
              // text: '事业',
              items: [
                { text: '事业', link: '/career/' },
              ]
            },
          ]
        },
        {
          text: '生活',
          collapsed: true,
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
        {
          text: '更多',
          collapsed: true,
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
    },
    
    // 侧边目录层级
    outline: {
      level: 'deep',
      label: "目录",
    },
    // 社交链接
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/yangzupan/wiki' }
    ],
    // 页脚
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021 - 2024 <a href="https://www.yangzupan.com/" target="blank"> 杨祖攀 </a> All Rights Reserved.' 
    },
    // 编辑链接
    // editLink: {
    //   pattern: 'https://github.com/yangzupan/wiki/edit/main/src/:path',
    //   text: '编辑此页面'
    // },
    // 
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // 
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lightModeSwitchTitle: "切换到白色主题",
    darkModeSwitchTitle: "切换到黑暗主题",
    // 外链图标
    externalLinkIcon: true,
    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText:'关闭',
                }
              }
            }
          }
        }
      }
    },
    
  }
})
