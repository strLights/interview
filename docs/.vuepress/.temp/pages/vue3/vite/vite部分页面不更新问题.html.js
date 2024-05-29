export const data = {
  "key": "v-53224bf4",
  "path": "/vue3/vite/vite%E9%83%A8%E5%88%86%E9%A1%B5%E9%9D%A2%E4%B8%8D%E6%9B%B4%E6%96%B0%E9%97%AE%E9%A2%98.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "vue3/vite/vite部分页面不更新问题.md"
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
