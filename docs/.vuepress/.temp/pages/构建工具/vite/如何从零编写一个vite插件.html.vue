<template><h2 id="创建-vite-插件通用模板" tabindex="-1"><a class="header-anchor" href="#创建-vite-插件通用模板" aria-hidden="true">#</a> 创建  vite 插件通用模板</h2>
<h4 id="_1-初始化" tabindex="-1"><a class="header-anchor" href="#_1-初始化" aria-hidden="true">#</a> 1. 初始化</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir vite-progress &amp;&amp; cd vite-progress &amp;&amp; pnpm init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_1-2-安装-typescript" tabindex="-1"><a class="header-anchor" href="#_1-2-安装-typescript" aria-hidden="true">#</a> 1.2 安装 typescript</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pnpm i typescript @types/node -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_1-3-配置-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_1-3-配置-tsconfig-json" aria-hidden="true">#</a> 1.3 配置 tsconfig.json</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "compilerOptions": {
    "module": "ESNext",
    "target": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "declaration": true,
    "noUnusedLocals": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "lib": ["ESNext"],
    "sourceMap": false,
    "noEmitOnError": true,
    "noImplicitAny": false
  },
  "include": [
    "src/*",
    "*.d.ts"
  ],
  "exclude": [
    "node_modules",
    "examples",
    "dist"
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="_1-4-安装-vite" tabindex="-1"><a class="header-anchor" href="#_1-4-安装-vite" aria-hidden="true">#</a> 1.4 安装 vite</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pnpm intsall vite --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_1-配置-eslint-和-prettier-可选" tabindex="-1"><a class="header-anchor" href="#_1-配置-eslint-和-prettier-可选" aria-hidden="true">#</a> 1. 配置 eslint 和 prettier（可选）</h4>
<p>安装 eslint</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pnpm i eslint @typescript-eslint / parser @typescript-eslint / eslint - plugin--save - dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置.eslintrc：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-console": 1,
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="配置格式化文件" tabindex="-1"><a class="header-anchor" href="#配置格式化文件" aria-hidden="true">#</a> 配置格式化文件</h2>
<h4 id="安装-prettier-可选" tabindex="-1"><a class="header-anchor" href="#安装-prettier-可选" aria-hidden="true">#</a> 安装 prettier （可选）</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pnpm i prettier eslint - config - prettier eslint - plugin - prettier--save - dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="配置-prettierrc" tabindex="-1"><a class="header-anchor" href="#配置-prettierrc" aria-hidden="true">#</a> 配置.prettierrc ：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "endOfLine": "auto"
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_3-新增-src-index-ts-入口" tabindex="-1"><a class="header-anchor" href="#_3-新增-src-index-ts-入口" aria-hidden="true">#</a> 3. 新增 src / index.ts 入口</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import type { PluginOption } from 'vite';

export default function vitePluginTemplate (): PluginOption {
    return {
        // 插件名称
        name: 'vite-plugin',
        // pre 会较于 post 先执行
        enforce: 'pre', // post
        // 指明它们仅在 'build' 或 'serve' 模式时调用
        apply: 'build', // apply 亦可以是一个函数
        config (config, { command }) {
            console.log('这里是config钩子');
        },

        configResolved (resolvedConfig) {
            console.log('这里是configResolved钩子');
        },

        configureServer (server) {
            console.log('这里是configureServer钩子');
        },

        transformIndexHtml (html) {
            console.log('这里是transformIndexHtml钩子');
        },
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>到这里，那么我们的基本模版就建好了，怎么运行呢？</p>
<p>在当前目录下执行</p>
<p>pnpm create vite my-vue-app --template vue</p>
<p>cd my-vue-app</p>
<p>pnpm i</p>
<p>修改 my-vue-app/package.json</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "name": "my-vue-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.37"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^3.1.0",
    "vite": "link:../node_modules/vite"
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>主要是加入
&quot;devDependencies&quot;: {
&quot;vite&quot;: &quot;link:../node_modules/vite&quot;
}</p>
<p>这里是让 里面和外面的 vite一个版本</p>
<p>然后修改 my-vue-app/vite.config.ts 文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import acnBuildPlugin from '../dist/index.mjs'

export default defineConfig({
  plugins: [vue(), acnBuildPlugin()]
})

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>好了，在外面（vite-progress 目录下）我们再下载个tsup ，tsup 是一个轻小且无需配置的，由 esbuild 支持的构建工具；</p>
<p>修改一下 vite-progress/package.json 的打包命令，及路径</p>
<p>&quot;main&quot;: &quot;./dist/index.mjs&quot;,
&quot;scripts&quot;: {
&quot;test&quot;: &quot;echo &quot;Error: no test specified&quot; &amp;&amp; exit 1&quot;,
&quot;dev&quot;: &quot;pnpm run build -- --watch --ignore-watch my-vue-app&quot;,
&quot;build&quot;: &quot;tsup src/index.ts --dts --format cjs,esm&quot;,
&quot;build:vite&quot;: &quot;pnpm run build &amp;&amp; cd my-vue-app &amp;&amp; pnpm run build&quot;,
&quot;prepublish&quot;: &quot;pnpm run build&quot;,
&quot;release&quot;: &quot;npx bumpp --push --tag --commit &amp;&amp; pnpm publish&quot;
},</p>
<ol start="7">
<li>开发环境运行</li>
</ol>
<p>开发环境运行：实时监听文件修改后重新打包（热更新）
pnpm run build:vite</p>
<p>到这里你就可以 边开发边运行了 😄</p>
<h1 id="vite-的插件钩子" tabindex="-1"><a class="header-anchor" href="#vite-的插件钩子" aria-hidden="true">#</a> vite 的插件钩子</h1>
<h2 id="_1-vite-独有的钩子" tabindex="-1"><a class="header-anchor" href="#_1-vite-独有的钩子" aria-hidden="true">#</a> 1. vite 独有的钩子</h2>
<blockquote>
<p>enforce ：值可以是pre 或 post ， pre 会较于 post 先执行；
apply ：值可以是 build 或 serve  亦可以是一个函数，指明它们仅在 build 或 serve 模式时调用；
config(config, env) ：可以在 vite 被解析之前修改 vite 的相关配置。钩子接收原始用户配置 config 和一个描述配置环境的变量env；
configResolved(resolvedConfig) ：在解析 vite 配置后调用。使用这个钩子读取和存储最终解析的配置。当插件需要根据运行的命令做一些不同的事情时，它很有用。
configureServer(server) ：主要用来配置开发服务器，为 dev-server (connect 应用程序) 添加自定义的中间件；
transformIndexHtml(html) ：转换 index.html 的专用钩子。钩子接收当前的 HTML 字符串和转换上下文；
handleHotUpdate(ctx)：执行自定义HMR更新，可以通过ws往客户端发送自定义的事件；</p>
</blockquote>
<h2 id="_2-vite-与-rollup-的通用钩子之构建阶段" tabindex="-1"><a class="header-anchor" href="#_2-vite-与-rollup-的通用钩子之构建阶段" aria-hidden="true">#</a> 2. vite 与 rollup 的通用钩子之构建阶段</h2>
<blockquote>
<p>options(options) ：在服务器启动时被调用：获取、操纵Rollup选项，严格意义上来讲，它执行于属于构建阶段之前；
buildStart(options)：在每次开始构建时调用；
resolveId(source, importer, options)：在每个传入模块请求时被调用，创建自定义确认函数，可以用来定位第三方依赖；
load(id)：在每个传入模块请求时被调用，可以自定义加载器，可用来返回自定义的内容；
transform(code, id)：在每个传入模块请求时被调用，主要是用来转换单个模块；
buildEnd()：在构建阶段结束后被调用，此处构建结束只是代表所有模块转义完成；</p>
</blockquote>
<h2 id="_3-vite-与-rollup-的通用钩子之输出阶段" tabindex="-1"><a class="header-anchor" href="#_3-vite-与-rollup-的通用钩子之输出阶段" aria-hidden="true">#</a> 3. vite 与 rollup 的通用钩子之输出阶段</h2>
<blockquote>
<p>outputOptions(options)：接受输出参数；
renderStart(outputOptions, inputOptions)：每次 bundle.generate 和 bundle.write 调用时都会被触发；
augmentChunkHash(chunkInfo)：用来给 chunk 增加 hash；
renderChunk(code, chunk, options)：转译单个的chunk时触发。rollup 输出每一个chunk文件的时候都会调用；
generateBundle(options, bundle, isWrite)：在调用 bundle.write 之前立即触发这个 hook；
writeBundle(options, bundle)：在调用 bundle.write后，所有的chunk都写入文件后，最后会调用一次 writeBundle；
closeBundle()：在服务器关闭时被调用</p>
</blockquote>
</template>
