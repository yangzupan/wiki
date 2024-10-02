import cheerio from 'cheerio';

/**
 * 跳转中转页
 * @param {string} html - 页面内容
 * @param {boolean} isDom - 是否为 DOM 对象
 */
export const jumpRedirect = (html, isDom = false) => {
  try {
    // 是否启用
    if (!themeConfig.jumpRedirect.enable) return html;
    // 中转页地址
    const redirectPage = "/redirect.html?url=";
    // 排除的 className
    const excludeClass = themeConfig.jumpRedirect.exclude;

    const $ = isDom ? cheerio.load(document.body) : cheerio.load(html);

    // 替换符合条件的标签
    $("a[target='_blank']").each((_, el) => {
      const $a = $(el);
      const href = $a.attr("href");
      const classesStr = $a.attr("class");
      const innerText = $a.text();
      // 检查是否包含排除的类
      const classes = classesStr ? classesStr.trim().split(" ") : [];
      if (excludeClass.some((className) => classes.includes(className))) {
        return;
      }
      // 存在链接且非中转页
      if (href && !href.includes(redirectPage)) {
        // Base64 编码 href
        const encodedHref = Buffer.from(href, "utf-8").toString("base64");
        // 构造新标签
        const newAttributes = { ...el.attribs, href: `${redirectPage}${encodedHref}`, "original-href": href };
        const newLink = cheerio.load(`<a>${innerText}</a>`).root().attr(newAttributes).html();
        // 替换原有标签
        $a.replaceWith(newLink);
      }
    });

    return isDom ? undefined : $.html();
  } catch (error) {
    console.error("处理链接时出错：", error);
  }
};