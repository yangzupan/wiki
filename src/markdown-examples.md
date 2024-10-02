---
title: Markdown 演示
isOriginal: false
author: 攀哥
# authorLink: https://vitepress.dev/
date: 2020-10-01 10:24
permalink: /posts/cd49a3
---

# {{ $frontmatter.title }}

## 标题二

sdf

### 标题三

sdf

#### 标题四

asdf

##### 标题五

afasdf

###### 标题六

## 文字

这句话里拥有**加粗**、*倾斜*和~~删除~~

## 段落

这是一段文字。

这是另一段文字。

## 列表

### 无序列表

- 无序列表项
- 无序列表项

  - 列表中的列表项
    - 更多的列表项
    - 更多的列表项
    - 更多的列表项
  - 列表中的长列表项，这个列表项很长。

    而且由很多个段落构成。

- 无序列表项

### 有序列表

1. 有序列表第一项
1. 有序列表第二项
   1. 第一项
   2. 第二项
      1. 第一项
          
          1. lsjd
          2. 塑料袋
          3. 老师的
          5. 路上的风景
1. 有序列表第三项

## 分割线

---

## 引用

> 引用也可以连用
>
> > 可以添加额外的大于号制造更深的引用

## 链接

这是一个链接[百度](https://www.baidu.com)。

## 图片

## 代码块

行内代码效果: `code`

块级代码

```md
Sample text here...
```

高亮格式:

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## 表格

|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` |
|       b       |      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |

## Emoji

经典方式:

:wink: :cry: :laughing: :yum:

简写:

8-) :) :\* :( :-) :-( ;)

## 目录

[[toc]]

## 标记

这是默认主题内置的 `<Badge />` 组件

Title <Badge type="info" text="default" />

Title <Badge type="tip" text="^1.9.0" />

Title <Badge type="warning" text="beta" />

Title <Badge type="danger" text="caution" />

## 脚注

::: tip
脚注是基于`markdown-it-footnote`实现的
:::

### 输入

```md
脚注 1 链接[^first]。

脚注 2 链接[^second]。

行内的脚注^[行内脚注文本] 定义。

重复的页脚定义[^second]。

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。
```

### 输出

脚注 1 链接[^first]。

脚注 2 链接[^second]。

行内的脚注^[行内脚注文本] 定义。

重复的页脚定义[^second]。

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。

## 公式

| 角度 |              正弦(sin)               |              余弦(cos)               |              正切(tan)               |
| :--: | :----------------------------------: | :----------------------------------: | :----------------------------------: |
|  0°  |          $sin(0^\circ) = 0$          |          $cos(0^\circ) = 1$          |          $tan(0^\circ) = 0$          |
| 30°  |    $sin(30^\circ) = \frac{1}{2}$     | $cos(30^\circ) = \frac{\sqrt{3}}{2}$ | $tan(30^\circ) = \frac{1}{\sqrt{3}}$ |
| 45°  | $sin(45^\circ) = \frac{\sqrt{2}}{2}$ | $cos(45^\circ) = \frac{\sqrt{2}}{2}$ |         $tan(45^\circ) = 1$          |
| 60°  | $sin(60^\circ) = \frac{\sqrt{3}}{2}$ |    $cos(60^\circ) = \frac{1}{2}$     |      $tan(60^\circ) = \sqrt{3}$      |
| 90°  |         $sin(90^\circ) = 1$          |         $cos(90^\circ) = 0$          |  $tan(90^\circ) = \text{undefined}$  |

## 容器

### 默认容器

#### 默认样式

**输入**

```md
::: info
This is an info box.
:::

::: note
This is an note box.
:::

::: tip
This is a tip.
:::

::: important
This is a important.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info
This is an info box.
:::

::: note
This is an info box.
:::

::: tip
This is a tip.
:::

::: important
This is a important.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

#### 自定义标题

::: info 我是信息
This is an info box.
:::

::: note 我是笔记
This is an note box.
:::

::: tip 我是提示
This is a tip.
:::

::: important 我是重要的
This is a important.
:::

::: warning 我是注意
This is a warning.
:::

::: danger 我是警告
This is a dangerous warning.
:::

::: details 我是详情
This is a details block.
:::

### 自定义容器

#### 卡片

::: card title="卡片标题" bgColor= "info" >

:::


## GitHub 风格的警报

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

## 组件

###

### 卡片

<Card title="sljdf" type= "info" >这是卡片内容</Card>
<Card title = "" type= "important">这是卡片内容</Card>
<Card type= "warning">这是卡片内容</Card>
<Card type= "danger">这是卡片内容</Card>
<Card >
这是卡片内容
</Card>

### 链接卡片

  <LinkCard url="/" title="这是标题" desc="这是描述" />
  <LinkCard url="/about/" icon="https://cdn.yangzupan.com/images/home/avatar.webp!default"/>
  <LinkCard url="https://www.yangzupan.com/404.html"  type= "tip" />
  <LinkCard url="https://blog.imsyy.top/"  icon=''/>
  <LinkCard url="https://vitepress.dev" />
  <LinkCard desc="这是描述" /> 
  <LinkCard url="https://www.yangzupan.com" />
  <LinkCard url="https://hexo.io/zh-cn/docs/tag-plugins" />
  <LinkCard url="https://www.yangzupan.com" type= "info" />
  <LinkCard url="https://mp.weixin.qq.com/" />

### 卡片容器

#### 不带标题

<CardGrid>

  <Card >
  卡片内容
  </Card>
  <Card >
  卡片内容
  </Card>
<LinkCard  url="https://www.yangzupan.com"  title="链接卡片" />
<LinkCard  url="https://blog.imsyy.top/posts/2024/0307" title="链接卡片" />

</CardGrid>

#### 带标题

<CardGrid>
  <Card title="卡片标题">
    这里是卡片内容。
  </Card>
  <Card title="卡片标题">
    这里是卡片内容。
  </Card>
  <LinkCard  url="https://www.yangzupan.com"  title="链接卡片" description="这是描述" />
  <LinkCard  url="https://www.yangzupan.com" title="链接卡片" />
</CardGrid>


## 联系卡片
<CardGrid>
<Connection url="https://www.yangzupan.com" title="联系我" />
</CardGrid>
## 遮罩

### 组件

- 鼠标悬停 - <Plot>悬停时可见</Plot>
- 点击 - <Plot trigger="click">点击时可见</Plot>

### 例子


你知道吗， <plot>鲁迅</plot> 曾说过：“ <plot>我没说过这句话！</plot> ” 令我醍醐灌顶，深受启发，浑身迸发出无可匹敌的
力量！于是，<plot>我在床上翻了个身</plot> 。

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

## 使用自定义锚点 {#my-anchor}

:tada: :100:
[所有支持的 emoji 列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)

vuepress-theme-plume 是一个 ==简洁美观== 的 主题

- 19^th^
- H~2~O

- [ ] 任务 1
- [x] 任务 2
- [ ] 任务 3

## 公式

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**Maxwell's equations:**

| equation                                                                                                                                                                  | description                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of $\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_                                                                                 |

## 脚注

脚注 1 链接[^first]。

脚注 2 链接[^second]。

行内的脚注^[行内脚注文本] 定义。

重复的页脚定义[^second]。

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。

::: card title="卡片标题<dev /sd>" type="tip"

时代俊峰的减肥拉时间到了发
:::

::: card title="卡片标题" type="warning"
这是一个卡片的内容。
:::

::: card title="卡片标题" type="info"
这是一个卡片的内容。
:::

## 标题二

sdf

### 标题三

sdf

#### 标题四

asdf

##### 标题五

afasdf

##### 标题六

## 时间线

::: timeline date="2023-04-23" title="这是标题"

- 一个非常棒的开源项目 H5-Dooring 目前 star 3.1k
  - 开源地址 https://github.com/MrXujiang/h5-Dooring
  - 基本介绍 http://h5.dooring.cn/doc/zh/guide/
- 《深入浅出 webpack》 http://webpack.wuhaolin.cn/
  :::

::: timeline date="2023-04-23" title="这是标题"
上岛咖啡

:::

::: timeline date:2 title:这是标题 2345
时代俊峰老师的减肥拉时间到了发

:::

<timeLine title= "标题" date = "2023-04-24">

</timeLine>
<timeline  date ="2023-04-24">

::: tip
This is a tip.
:::

::: important
This is a important.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
</timeline>
<timeline>

</timeline>

::: card title="卡片标题"
sdf
asdjlajsdla s
:::

<CardGrid>

::: card title="卡片标题"
sdf
asdjlajsdla s
:::
::: card title="卡片标题"
sdf
asdjlajsdla s
:::
::: linkcard url="https://www.yangzupan.com" title="链接卡片" desc="这是描述"
:::
::: linkcard url="https://www.yangzupan.com" title="链接卡片" desc="这是描述"
:::
</CardGrid>

::: linkcard url="https://www.yangzupan.com" title="链接卡片" desc="这是描述"
:::

## 标题二

sdf

### 标题三

sdf

#### 标题四

asdf

##### 标题五

afasdf

###### 标题六
