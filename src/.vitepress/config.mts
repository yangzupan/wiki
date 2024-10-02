import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url'
import { head } from './config/head.ts';
import { markdown } from './config/markdown.ts';
import { themeConfig } from './config/theme.ts';
import { jumpRedirect } from './theme/utils/jumpRedirect'; // 引入处理函数

// https://vitepress.dev/zh/reference/site-config

export default defineConfig({
  lang: "zh-CN",
  title: "杨祖攀",
  titleTemplate: ':title - 个人知识库',
  description: "网址描述",
  head,
  base: '/',
  markdown,
  lastUpdated: true,
  themeConfig: themeConfig,
  ignoreDeadLinks: true,
  // 重写内部组件
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/Footer.vue', import.meta.url)
          )
        }
      ]
    }
  },
  
})
