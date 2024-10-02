import type { DefaultTheme } from 'vitepress';
import { nav } from './nav.ts';
import { sidebar } from './sidebar.ts';

// https://vitepress.dev/zh/reference/default-theme-config

export const themeConfig: DefaultTheme.Config = {
    // logo: '/logo.svg',
    siteTitle: "个人知识库",
    nav,
    sidebar,
    outline: {
        // deep = [2, 6]
        level: 'deep',
        label: "目录",
    },
    socialLinks: [
        { icon: 'github', link: 'https://github.com/yangzupan/vitepress-theme-pange' }
    ],

    footer: {
        // @ts-ignore
        // 是否显示页脚
        showFooter: true,
        // 现实版权信息
        showCopyright: true,
        author: '攀哥',
        // authorLink: '',
        // 建站日期
        startYears: 2023,
        // showRecord: false,
        // ICP备案号
        icpRecordCode: '滇ICP备2021000000号',
        // 公安联网备案号
        publicSecurityRecordCode: '滇公网安备 5303810000000 号',
    },

    lastUpdated: {
        text: '最后更新于',
        formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
        }
    },
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lightModeSwitchTitle: "切换到白色主题",
    darkModeSwitchTitle: "切换到黑暗主题",
    search: {
        provider: 'local',
        options: {
            locales: {
                root: {
                    translations: {
                        button: {
                            buttonText: '搜一搜',
                            buttonAriaLabel: '搜一搜'
                        },
                        modal: {
                            noResultsText: '无法找到相关结果',
                            resetButtonTitle: '清除查询条件',
                            footer: {
                                selectText: '选择',
                                navigateText: '切换',
                                closeText: '关闭',
                            }
                        }
                    }
                }
            }
        }
    },
    notFound: {
        title: "很抱歉，您访问的页面不存在！",
        quote: "请仔细检查您输入的网址是否正确。",
        linkText: "返回首页",
    },

    // 自定义扩展: 文章元数据配置
    // @ts-ignore

    jumpRedirect:{
        enable:true,
    },

    articleMetadataConfig: {
        isEnable: true,
        author: '攀哥', // 文章全局默认作者名称
        authorLink: '/about/me', // 点击作者名时默认跳转的链接
        showViewCount: false, // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
    },

    // 自定义扩张: 卡片容器
    cardContainerConfig: {
        // 是否显示卡片容器
        isEnable: true,
    },
    // 自定义链接卡片容器
    linkCardContainerConfig: {
        // 是否显示卡片容器
        isEnable: true,

        // defaultTitle: "链接卡片",

        // isShowTip: true,

        // defaultIcon: 'https://www.yangzupan.com/favicon.ico',

    },

    // 自定义扩展: 文章版权配置
    copyrightConfig: {
        // isEnable: true,
        license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
        licenseLink: 'http://creativecommons.org/licenses/by-sa/4.0/'
    },

    // 自定义扩展: 页脚配置
    footerConfig: {
        // 是否显示页脚
        showFooter: true,
        // 现实版权信息
        showCopyright: true,
        author: '攀哥',
        authorLink: '',
        // 建站日期
        StartYears: 2023,
        // showRecord: false,
        // ICP备案号
        icpRecordCode: '滇ICP备2021000000号',
        // 公安联网备案号
        publicSecurityRecordCode: '滇公网安备5303810000000号',

        
    }
}