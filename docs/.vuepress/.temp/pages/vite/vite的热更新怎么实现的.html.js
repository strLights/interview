export const data = {
  "key": "v-c8a28526",
  "path": "/vite/vite%E7%9A%84%E7%83%AD%E6%9B%B4%E6%96%B0%E6%80%8E%E4%B9%88%E5%AE%9E%E7%8E%B0%E7%9A%84.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "vite热更新",
      "slug": "vite热更新",
      "children": [
        {
          "level": 3,
          "title": "安装chokidar库：",
          "slug": "安装chokidar库",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "vite/vite的热更新怎么实现的.md"
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
