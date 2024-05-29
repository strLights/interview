export const data = {
  "key": "v-63e1b2ab",
  "path": "/vue3/vue3%E5%B0%81%E8%A3%85%E5%85%A8%E5%B1%80%E8%BF%87%E6%BB%A4%E5%99%A8.html",
  "title": "1. 挂载到全局属性globalProperties上面",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "vue3/vue3封装全局过滤器.md"
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
