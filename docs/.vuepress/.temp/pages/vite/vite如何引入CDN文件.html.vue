<template><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>前端构建打包工具，在运行 build 的时候，会默认把项目中所有用到的第三方资源、库文件打包成一个 js 文件中 vendor<span class="token punctuation">.</span>js，如果不加以拆分，这个文件将会很大导致首屏加载速度变慢。这时可以把一些第三方库文件用 cdn 加载（优化手段之一），优化包大小和首屏加载速度


Vue2 <span class="token operator">+</span> Webpack
我们回顾以前使用 vue2 <span class="token operator">+</span> webpack 构建的时候，可以在 index<span class="token punctuation">.</span>html 中用 script 标签加载第三方库资源，推荐这个 cdn 资源网站： https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">www.jsdelivr.com</span><span class="token regex-delimiter">/</span></span>

<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@2.5.20/dist/vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/axios@0.18.1/dist/axios.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/headroom.js@0.9.4/dist/headroom.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
然后在 webpack 里配置 externals：防止将某些 <span class="token keyword">import</span> 的包打包到 bundle 中，而是在运行时再去从外部获取这些扩展依赖

<span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'vue'</span><span class="token operator">:</span> <span class="token string">'Vue'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'vuex'</span><span class="token operator">:</span> <span class="token string">'Vuex'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'axios'</span><span class="token operator">:</span> <span class="token string">'axios'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'vue-router'</span><span class="token operator">:</span> <span class="token string">'VueRouter'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'headroom'</span><span class="token operator">:</span> <span class="token string">'headroom'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
上面 externals 属性里的键值对：

属性名就是包名，比如 <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span> 里面的 vue

属性值就是导出的名字，比如 <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span> 里面的 Vue

<span class="token keyword">package</span><span class="token punctuation">.</span>json 无需安装这些第三方包，可直接运行项目和打包了

Vue3 <span class="token operator">+</span> Vite
为什么 Vite 不能 直接 在 index<span class="token punctuation">.</span>html 导入 <span class="token constant">CDN</span> 资源，首先我们要了解其原理

Vite 是基于浏览器原生 <span class="token constant">ES</span> imports 的开发服务器。开发环境下不需要打包，是利用浏览器去解析 imports，在服务器端按需编译返回。所以能达到秒速模块热更新（<span class="token constant">HMR</span>）

就是这样：

<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"module"</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sub <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./index.js'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
开发环境下走的是浏览器 script 标签原生 <span class="token constant">ESM</span> 导入，dev server 是不会使用 index<span class="token punctuation">.</span>html 的 <span class="token constant">CDN</span> 资源，而是使用源码里 <span class="token keyword">import</span> node_modules 里的依赖包

安装插件标识 <span class="token constant">CDN</span>
上面说的是 开发环境下不会使用 index<span class="token punctuation">.</span>html 的 <span class="token constant">CDN</span> 资源，而我们关注的是 生产环境，所以能在生产环境中使用 <span class="token constant">CND</span> 资源且打包时排除此资源即可

Vite 的打包是通过 Rollup，打包时使用 <span class="token constant">CDN</span> 需要安装一个插件：rollup<span class="token operator">-</span>plugin<span class="token operator">-</span>external<span class="token operator">-</span>globals

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> externalGlobals <span class="token keyword">from</span> <span class="token string">'rollup-plugin-external-globals'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// other config</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'vue'</span><span class="token punctuation">,</span> <span class="token string">'vuex'</span><span class="token punctuation">,</span> <span class="token string">'axios'</span><span class="token punctuation">,</span> <span class="token string">'vue-router'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">externalGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token string">'Vue'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">vuex</span><span class="token operator">:</span> <span class="token string">'Vuex'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token string">'axios'</span><span class="token punctuation">,</span>
          <span class="token string-property property">'vue-router'</span><span class="token operator">:</span> <span class="token string">'VueRouter'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
external 是 <span class="token constant">CDN</span> 的包名

externalGlobals 里的键值对与 webpack externals 的解释一致

然后在 index<span class="token punctuation">.</span>html 加入 <span class="token constant">CDN</span> 文件

<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@3.2.20/dist/vue.global.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue-router@4.0.12/dist/vue-router.global.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
开发环境下，<span class="token keyword">package</span><span class="token punctuation">.</span>json 依然需要保留安装这些 <span class="token constant">CDN</span> 资源的包，不能删除，dev server 需要引用

打包即可实现 <span class="token constant">CDN</span> 加载资源

alias 配置项加载 <span class="token constant">CDN</span>
alias 除了可以用来配置别名，还可以配置 <span class="token constant">CDN</span>（本质也是别名的引用）

先来写一下试试：

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// other config</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token string">'https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mitt</span><span class="token operator">:</span> <span class="token string">'https://cdn.jsdelivr.net/npm/mitt@3.0.0/dist/mitt.min.js'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
这里先配置了 axios、mitt 的别名 <span class="token constant">CDN</span>，结果浏览器报错：

Uncaught SyntaxError<span class="token operator">:</span> The requested module ‘https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>cdn<span class="token punctuation">.</span>jsdelivr<span class="token punctuation">.</span>net<span class="token operator">/</span>npm<span class="token operator">/</span>axios@<span class="token number">0.24</span><span class="token number">.0</span><span class="token operator">/</span>dist<span class="token operator">/</span>axios<span class="token punctuation">.</span>min<span class="token punctuation">.</span>js’ does not provide an <span class="token keyword">export</span> named ‘<span class="token keyword">default</span>’

说这个 <span class="token constant">CDN</span> 资源没有一个名为 <span class="token keyword">default</span> <span class="token keyword">export</span>。看报错信息应该也明白，它需要支持 <span class="token constant">ESM</span> 编译的 <span class="token constant">CDN</span>
而在 GitHub 上也有专门的 issues：https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>vitejs<span class="token operator">/</span>vite<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">2204</span>

尤大有在下面解答：
WechatIMG229<span class="token punctuation">.</span>jpeg

意思就是：Vite 不会重写从外部文件导入的内容，需要使用支持 <span class="token constant">ESM</span> 编译的 <span class="token constant">CDN</span>

还很细心地贴出两个支持 <span class="token constant">ESM</span> 编译的 <span class="token constant">CDN</span> <span class="token literal-property property">资源地址：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>skypack<span class="token punctuation">.</span>dev<span class="token operator">/</span> or https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>jsdelivr<span class="token punctuation">.</span>com<span class="token operator">/</span>esm

那么我们把上面 <span class="token constant">CDN</span> 资源改好再试试<span class="token operator">~</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// other config</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mitt</span><span class="token operator">:</span> <span class="token string">'https://cdn.jsdelivr.net/npm/mitt@3.0.0/+esm'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token string">'https://esm.sh/axios@0.21.4'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
运行成功<span class="token operator">~</span>

可以查看这个 <span class="token constant">CDN</span> 资源，发现其内容是 <span class="token keyword">export</span> 一个最终的包文件的 js 代码

<span class="token comment">/* esm.sh - axios@0.21.4 */</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">"https://cdn.esm.sh/v55/axios@0.21.4/es2021/axios.js"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"https://cdn.esm.sh/v55/axios@0.21.4/es2021/axios.js"</span><span class="token punctuation">;</span>
查看浏览器 Network，其实是加载了两个资源
WechatIMG228<span class="token punctuation">.</span>jpeg

而且使用 alias 加载 <span class="token constant">CDN</span> 还有个好处，它是按需加载。意思是如果只是在某个 Vue 文件中 <span class="token keyword">import</span> 了这个库，那么进入到这个 Vue 文件的页面，才会加载此 <span class="token constant">CDN</span> 资源


但需要注意的是，<span class="token keyword">import</span> 时不能解构，只能直接引入，因为支持 <span class="token constant">ESM</span> 编译的资源文件都是 <span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> from <span class="token operator">...</span>，没有单个 <span class="token keyword">export</span>
例如我配置了 mavon<span class="token operator">-</span>editor 的 <span class="token constant">ESM</span> <span class="token constant">CDN</span> 资源

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">'mavon-editor'</span><span class="token operator">:</span> <span class="token string">'https://esm.sh/mavon-editor@next'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
页面使用，如果还是按照常规解构引入方式：

<span class="token keyword">import</span> <span class="token punctuation">{</span> mavonEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mavon-editor'</span>
控制台报错，且页面无法渲染该组件
WechatIMG338<span class="token punctuation">.</span>png
所以使用支持 <span class="token constant">ESM</span> <span class="token constant">CDN</span> 资源 alias 配置加载时，引入资源只能直接引入
这也说明这种方式不适合那些需要解构资源的 <span class="token constant">CDN</span>

<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">'mitt'</span>
总结
第一种方案：

采用 rollup<span class="token operator">-</span>plugin<span class="token operator">-</span>external<span class="token operator">-</span>globals 插件标识是外部引入的资源，在 index<span class="token punctuation">.</span>html 用 script 标签引入 <span class="token constant">CDN</span> 资源
缺点：进入首屏就加载全部 <span class="token constant">CDN</span> 资源；开发环境不可用（这也不算缺点哈哈）

第二种方案：

alias 配置项加载 支持 <span class="token constant">ESM</span> 编译的 <span class="token constant">CDN</span>，<span class="token keyword">package</span><span class="token punctuation">.</span>json 可删除 <span class="token constant">CDN</span> 资源的依赖包
优点：按需加载；开发环境也可使用

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br></div></div></template>
