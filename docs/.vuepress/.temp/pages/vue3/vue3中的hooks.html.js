export const data = {
  "key": "v-2ebb8529",
  "path": "/vue3/vue3%E4%B8%AD%E7%9A%84hooks.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "加法 hook",
      "slug": "加法-hook",
      "children": []
    },
    {
      "level": 2,
      "title": "减法 hook",
      "slug": "减法-hook",
      "children": []
    },
    {
      "level": 2,
      "title": "Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量",
      "slug": "vue3自定义hooks可以灵活传递任何参数来改变它的逻辑-参数不限于其他hook的暴露出来的变量",
      "children": [
        {
          "level": 3,
          "title": "3、Mixin同名变量会被覆盖，Vue3自定义Hook可以在引入的时候对同名变量重命名",
          "slug": "_3、mixin同名变量会被覆盖-vue3自定义hook可以在引入的时候对同名变量重命名",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "vue3/vue3中的hooks.md"
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
