<template><p>直接 vite2创建vue3项目</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn create @vitejs/app
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>选择vue-ts
直接引入elementplus 会发现icon 不显示</p>
<h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1</h2>
<p>在index.html中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;link rel="stylesheet" href="https://unpkg.com/element-plus/lib/theme-chalk/index.css">
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>do this:
  yarn add sass -D
  yarn add vite-plugin-style-import -D

vite：
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
plugins: [
vue(),
styleImport({
libs: [{
libraryName: 'element-plus',
esModule: true,
ensureStyleFile: true,
resolveStyle: (name) => {
name = name.slice(3)
return element-plus/packages/theme-chalk/src/${name}.scss;
},
resolveComponent: (name) => {
return element-plus/lib/${name};
},
}]
}),
],

})

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>还不生效就在引入个</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import 'element-plus/packages/theme-chalk/src/base.scss'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
