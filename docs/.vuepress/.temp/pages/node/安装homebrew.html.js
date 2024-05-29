export const data = {
  "key": "v-0e7c05d3",
  "path": "/node/%E5%AE%89%E8%A3%85homebrew.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "命令1: // （这个命令不好使会报错，如果报错尝试使用命令2）",
      "slug": "命令1-这个命令不好使会报错-如果报错尝试使用命令2",
      "children": []
    },
    {
      "level": 2,
      "title": "命令2:// （这是一个脚本，同样可以安装Homebrew）",
      "slug": "命令2-这是一个脚本-同样可以安装homebrew",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "node/安装homebrew.md"
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
