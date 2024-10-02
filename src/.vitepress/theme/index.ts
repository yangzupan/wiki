// https://vitepress.dev/zh/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import BackToTop from './components/BackToTop/index'

// 卡片
import Card from './components/Card.vue'
import CardGrid from './components/CardGrid.vue'
import LinkCard from './components/LinkCard.vue'
import TimeLine from './components/TimeLine.vue'

// 联系
import Connection from './components/Connection.vue'

import Plot from './components/Plot.vue'


// 样式
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/zh/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {

    // ...
    // 返回顶部
    BackToTop({
      threshold: 100
    })
    // 卡片组件
    app.component('Card', Card)
    app.component('card', Card)
    app.component('CardGrid', CardGrid)
    app.component('cardgrid', CardGrid)
    app.component('LinkCard', LinkCard)
    app.component('linkcard', LinkCard)

    // 时间轴
    app.component('TimeLine', TimeLine)
    app.component('timeline', TimeLine)

    // 遮罩
    app.component('Plot', Plot)
    app.component('plot', Plot)

    // 联系组件
    app.component('Connection', Connection)
    app.component('connection', Connection)

  }
} satisfies Theme
