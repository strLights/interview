export const data = {
  "key": "v-0ad1586a",
  "path": "/webpack/w001-webpack%E7%9A%84%E7%83%AD%E6%9B%B4%E6%96%B0%E6%9C%BA%E5%88%B6.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "w001-webpack的热更新机制",
      "slug": "w001-webpack的热更新机制",
      "children": []
    },
    {
      "level": 2,
      "title": "原理",
      "slug": "原理",
      "children": []
    },
    {
      "level": 2,
      "title": "总结",
      "slug": "总结",
      "children": []
    },
    {
      "level": 2,
      "title": "详细版",
      "slug": "详细版",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "webpack/w001-webpack的热更新机制.md"
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
