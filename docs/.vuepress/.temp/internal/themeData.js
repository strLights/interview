export const themeData = {
  "logo": "/imgs/favicon.ico",
  "lastUpdated": false,
  "navbar": [
    {
      "text": "html",
      "link": "/h5/"
    },
    {
      "text": "css",
      "link": "/css/",
      "children": [
        {
          "text": "css",
          "link": "/css/css/"
        },
        {
          "text": "css3",
          "link": "/css/css3/"
        }
      ]
    },
    {
      "text": "学习ts",
      "link": "/Typescript/"
    },
    {
      "text": "移动端",
      "link": "/mobile/"
    },
    {
      "text": "Nodejs",
      "link": "/node/"
    },
    {
      "text": "github",
      "link": "/github/"
    },
    {
      "text": "http",
      "link": "/http/",
      "children": [
        {
          "text": "http",
          "link": "/http/http/"
        },
        {
          "text": "安全",
          "link": "/http/safe/"
        },
        {
          "text": "http三次握手四次挥手类",
          "link": "/http/http-tcp/"
        }
      ]
    }
  ],
  "sidebar": {
    "/h5/": [
      {
        "text": "html",
        "children": [
          "README.md",
          "0.5px 问题.md",
          "1px 问题.md",
          "h5页面跳转的几种方法.md",
          "h5字体不局中，有时候会被切掉一块.md",
          "固定定位键盘弹起挡住输入框内容.md",
          "手机端调试vconsole.md"
        ]
      }
    ],
    "/css/css": [
      {
        "text": "css",
        "children": [
          "README.md",
          "auto-fit 和minmax去掉右侧空白.md",
          "css小技巧.md",
          "flex 布局原理.md",
          "html中引入特殊字体.md",
          "固定列宽，改变列的数量即float效果.md",
          "实现等分响应式.md",
          "容器属性介绍.md",
          "尽可能填充，不留空白.md",
          "获取图片的主要背景色.md",
          "项目属性介绍.md"
        ]
      }
    ],
    "/css/css3/": [
      {
        "text": "css3",
        "children": [
          "background-clip设置文字背景.md",
          "C005-绘制任意角度扇形★.md",
          "C006-css实现三角形★.md",
          "C007-css3心跳动画.md",
          "C008-雷达扫描.md",
          "C009-加载效果吃豆豆.md",
          "文字聚光灯效果.md",
          "标签中字母太长不换行.md",
          "流行划过效果.md",
          "滚动条不占空间.md",
          "跳动的球.md"
        ]
      }
    ],
    "/git/": [
      {
        "text": "git",
        "children": []
      }
    ],
    "/github/": [
      {
        "text": "github",
        "children": [
          "README.md",
          "github push时候老是push不上去.md",
          "github 使用小技巧.md",
          "github上部署单页面应用.md",
          "github下载时候git clone 报错.md",
          "快速访问gitHub的项目.md"
        ]
      }
    ],
    "/http/http/": [
      {
        "text": "http",
        "children": [
          "README.md",
          "DNS解析过程.md",
          "h2的如何提升性能.md",
          "http001-get和post区别★★★.md",
          "http002-常见http响应状态码.md",
          "http003-URI和URL的区别.md",
          "http004-http和https的区别.md",
          "http005-http的工作原理.md",
          "http006-HTTPS工作原理.md",
          "http007-TCP和UDP的区别.md",
          "http008-常见状态码简要版★.md",
          "http009-http的缓存机制★★★.md",
          "http010-http的常见header头★.md",
          "http011-手写原生请求★★.md",
          "http012-跨域是如何造成的怎么处理★★★.md",
          "http013-https加密的过程.md",
          "http014-TCP的流量控制.md",
          "http015-http1.0和http1.1的区别.md",
          "restful-api.md",
          "SSL协议的加密方式.md",
          "tcp的三次握手.md",
          "浏览器跨标签页通信方式.md"
        ]
      }
    ],
    "/http/safe/": [
      {
        "text": "安全",
        "children": [
          "README.md",
          "如何预防XSS.md"
        ]
      }
    ],
    "/http/http-tcp/": [
      {
        "text": "http三次握手四次挥手",
        "children": [
          "README.md",
          "http三次握手的过程.md",
          "http三次握手示意图.md",
          "http四次挥手.md",
          "http四次挥手示意图.md",
          "SYN攻击是什么_.md",
          "三次握手可以传递数据吗.md",
          "为什么需求三次握手两次不行吗.md",
          "什么是半连接状态.md",
          "四次挥手释放连接时，等待2MSL的意义_.md",
          "挥手为什么需要四次.md"
        ]
      }
    ],
    "/node/": [
      {
        "text": "Nodejs",
        "children": [
          "README.md",
          "JWT验证.md",
          "mac中node多版本控制工具n.md",
          "node 端口被占用.md",
          "node获取文件夹下所有文件.md",
          "npm run xxx 的时候发生了什么.md",
          "npm下载各种模块都报错.md",
          "npm和cnpm换成国内镜像.md",
          "pm2介绍及安装.md",
          "pm2常用命令.md",
          "vim常用命令.md",
          "多版本node控制器nvm.md",
          "多版本node控制工具volta.md",
          "安装homebrew.md",
          "本地静态服务器anywhere.md",
          "运行打包后的文件.md",
          "运行项目时候报node_modules里面没有某个file.md"
        ]
      }
    ],
    "/Typescript/": [
      {
        "text": "Typescript",
        "children": [
          "README.md",
          "Decorators 装饰器.md",
          "Generics 泛型.md",
          "keyof运算符.md",
          "tsconfig.md",
          "ts中的_和!用法.md",
          "ts的对象接口属性.md",
          "ts类变量修饰符.md",
          "__空值合并运算符.md",
          "一些事件中的e类型.md",
          "可用到的一些高级类型.md",
          "基础类型.md",
          "字面量类型.md",
          "定义数组的两种方式.md",
          "映射类型.md",
          "类型别名.md",
          "联合类型.md"
        ]
      }
    ],
    "/mobile/": [
      {
        "text": "移动端",
        "children": [
          "README.md",
          "移动端300ms延迟问题.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
