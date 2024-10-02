import type { HeadConfig } from 'vitepress';

export const head: HeadConfig[] = [

    // 配置参考：https://vitepress.dev/zh/reference/site-config#head

    // 引入link标签
    ['link', { rel: 'icon', href: '/favicon.ico' }],

    // 引入meta标签
    // 作者
    ['meta', { name: 'author', content: '攀哥' }], 
    // 关键字
    ['meta', { name: 'keywords', content: '杨祖攀, 老攀哥, 攀哥, 阿攀' }],

    // 引入其他代码

]