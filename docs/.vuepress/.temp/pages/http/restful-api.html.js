export const data = {
  "key": "v-81e8771e",
  "path": "/http/restful-api.html",
  "title": "restful api",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "传统的API设计： 把每一个url当做一个功能",
      "slug": "传统的api设计-把每一个url当做一个功能",
      "children": []
    },
    {
      "level": 2,
      "title": "restful API设计：把每一个url 当做一个唯一的资源。",
      "slug": "restful-api设计-把每一个url-当做一个唯一的资源。",
      "children": []
    },
    {
      "level": 2,
      "title": "restful 特点：",
      "slug": "restful-特点",
      "children": []
    },
    {
      "level": 2,
      "title": "1.不使用url参数",
      "slug": "_1-不使用url参数",
      "children": [
        {
          "level": 3,
          "title": "传统的API设计：/api/list?pageIndex=2",
          "slug": "传统的api设计-api-list-pageindex-2",
          "children": []
        },
        {
          "level": 3,
          "title": "Restful API设计: /api/list/2",
          "slug": "restful-api设计-api-list-2",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2.用method 表示操作类型",
      "slug": "_2-用method-表示操作类型",
      "children": []
    },
    {
      "level": 2,
      "title": "3.版本号",
      "slug": "_3-版本号",
      "children": []
    },
    {
      "level": 2,
      "title": "4. 资源路径",
      "slug": "_4-资源路径",
      "children": []
    },
    {
      "level": 2,
      "title": "5.响应的参数",
      "slug": "_5-响应的参数",
      "children": []
    },
    {
      "level": 2,
      "title": "6.状态码",
      "slug": "_6-状态码",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "http/restful-api.md"
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
