export const data = {
  "key": "v-1d7b9a7c",
  "path": "/vue3/vue3%E6%BA%90%E7%A0%81%E7%B1%BB/reactive%E7%9A%84%E5%AE%9E%E7%8E%B0.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "额外拓展",
      "slug": "额外拓展",
      "children": [
        {
          "level": 3,
          "title": "关于 reactive 和 ref 的对比",
          "slug": "关于-reactive-和-ref-的对比",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "vue3/vue3源码类/reactive的实现.md"
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
