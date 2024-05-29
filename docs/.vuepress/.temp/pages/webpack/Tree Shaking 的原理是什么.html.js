export const data = {
  "key": "v-e316bb54",
  "path": "/webpack/Tree%20Shaking%20%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88.html",
  "title": "Tree Shaking 的原理是什么",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "import *",
      "slug": "import",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "webpack/Tree Shaking 的原理是什么.md"
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
