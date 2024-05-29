export const data = {
  "key": "v-1b55d9ea",
  "path": "/vite/%E7%AE%80%E8%BF%B0vite%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86.html",
  "title": "Vite工作原理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "vite/简述vite的工作原理.md"
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
