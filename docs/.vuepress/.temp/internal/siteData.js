export const siteData = {
  "base": "/interview-docs/",
  "lang": "zh-CN",
  "title": "Web前端面试题合集",
  "description": "最常见的前端面试题",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/imgs/favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
