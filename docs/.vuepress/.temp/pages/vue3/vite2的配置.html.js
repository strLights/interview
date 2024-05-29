export const data = {
  "key": "v-abf3ea3c",
  "path": "/vue3/vite2%E7%9A%84%E9%85%8D%E7%BD%AE.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "vite.config.js",
      "slug": "vite-config-js",
      "children": []
    },
    {
      "level": 2,
      "title": "载入不同模式下全局变量",
      "slug": "载入不同模式下全局变量",
      "children": [
        {
          "level": 3,
          "title": "以下变量在development被载入",
          "slug": "以下变量在development被载入",
          "children": []
        },
        {
          "level": 3,
          "title": "以下变量在production被载入",
          "slug": "以下变量在production被载入",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "vue3/vite2的配置.md"
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
