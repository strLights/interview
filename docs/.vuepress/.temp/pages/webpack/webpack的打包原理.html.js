export const data = {
  "key": "v-5448a03f",
  "path": "/webpack/webpack%E7%9A%84%E6%89%93%E5%8C%85%E5%8E%9F%E7%90%86.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "webpack构建流程（原理）",
      "slug": "webpack构建流程-原理",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "webpack/webpack的打包原理.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
