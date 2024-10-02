import type { MarkdownOptions } from 'vitepress';
import container from "markdown-it-container";
export const markdown: MarkdownOptions = {
  // 代码高亮主题
  // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
  // 主题演示：https://textmate-grammars-themes.netlify.app/
  theme: {
    light: 'github-light',
    dark: 'github-dark'
  },
  container: {
    infoLabel: '信息',
    tipLabel: '提示',
    warningLabel: '注意',
    dangerLabel: '警告',
    detailsLabel: '详情',
  },
  // lineNumbers: true,

  // 图片懒加载
  image: {
    lazyLoading: true
  },
  // 使用更多的 Markdown-it 插件！
  config: (md) => {

    // 脚注
    // md.use(footnote);
    // 数学公式
    // md.use(mathjax3);

    // 下角标
    // md.use(sub);
    // 上角标
    // md.use(sup);
    // 任务列表
    // md.use(todo);

    // note 容器 
    md.use(container, 'note', {
      render: (tokens, idx) => {
        const token = tokens[idx];
        const info = tokens[idx].info.trim().replace(/^note /, '');
        const title = info === 'note' ? '笔记' : info;
        if (token.nesting === 1) {
          return `<div class="note custom-block">\n<p class="custom-block-title">${title}</p>\n`;
        }
        return '</div>';
      },
    });
    // important容器 
    md.use(container, 'important', {
      render: (tokens, idx) => {
        const token = tokens[idx];
        const info = tokens[idx].info.trim().replace(/^important /, '');
        const title = info === 'important' ? '重要' : info;
        if (token.nesting === 1) {
          return `<div class="important custom-block">\n<p class="custom-block-title">${title}</p>\n`;
        }
        return '</div>';
      },
    });

    // 卡片容器
    md.use(container, 'card', {
      render: (tokens, idx) => {
        const token = tokens[idx];
        const info = tokens[idx].info.trim().replace(/^card /, '');
        const params = parseParams(info);
        const safeParams = escapeHtmlParams(params);
        if (token.nesting === 1) {
          return `<Card ${renderAttributes(safeParams)}>\n`;
        }
        return '</Card>';
      },
    });
    // 链接卡片容器
    md.use(container, 'linkcard', {
      render: (tokens, idx) => {
        const token = tokens[idx];
        const info = tokens[idx].info.trim().replace(/^linkcard /, '');
        const params = parseParams(info);
        const safeParams = escapeHtmlParams(params);
        if (token.nesting === 1) {
          return `<LinkCard ${renderAttributes(safeParams)}>\n`;
        }
        return '</LinkCard>';
      },
    });
    // 时间轴
    md.use(container, 'timeline', {
      render: (tokens, idx) => {
        const token = tokens[idx];
        // 获取容器的额外信息
        const info = tokens[idx].info.trim().replace(/^timeline /, '');
        const params = parseParams(info);
        const safeParams = escapeHtmlParams(params);
        if (token.nesting === 1) {
          return `<TimeLine ${renderAttributes(safeParams)}>\n`;
        }
        return '</TimeLine>';
      },
    });

    // 在所有文档的<h1>标签后添加<ArticleMetadata/>组件
    md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
      let htmlResult = slf.renderToken(tokens, idx, options);
      if (tokens[idx].tag === 'h1') htmlResult += `\n<ClientOnly><ArticleMetadata v-if="($frontmatter?.aside ?? true) && ($frontmatter?.showArticleMetadata ?? true)" :article="$frontmatter" /></ClientOnly>`;
      return htmlResult;
    }
  },

}
// 解析参数
function parseParams(info) {
  // 将参数字符串分割成键值对数组
  const keyValuePairs = info.split(' ');

  // 解析键值对
  return keyValuePairs.reduce((acc, pair) => {
    const [key, value] = pair.split('=');
    if (key && value) {
      acc[key] = value.replace(/^['"]|['"]$/g, ''); // 去除引号
    }
    return acc;
  }, {});
}

// 转义 HTML 实体
function escapeHtmlParams(params) {
  return Object.entries(params).reduce((acc, [key, value]) => {
    acc[key] = escapeHtml(value);
    return acc;
  }, {});
}

// 转义单个 HTML 实体
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 渲染属性
function renderAttributes(params) {
  // 生成 HTML 属性字符串
  return Object.entries(params)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
}

// 创建卡片网格规则
function createCardGrid() {
  return (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    if (token.nesting === 1) {
      return `<CardGrid>`;
    }
    return '</CardGrid>';
  };
}
