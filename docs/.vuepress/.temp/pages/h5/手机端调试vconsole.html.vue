<template><h1 id="为什么使用vconsole呢" tabindex="-1"><a class="header-anchor" href="#为什么使用vconsole呢" aria-hidden="true">#</a> 为什么使用vconsole呢？</h1>
<blockquote>
<p>因为手机或者平板之类的客户端软件并没有控制台，前端开发想看log日志比较麻烦，如果一直弹窗alert方法实在太挫了。所以腾讯开发了这个 js 插件。</p>
</blockquote>
<p>#使用方法</p>
<h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1：</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script src="https://qdleader.github.io/qdleader/h5/vconsole.js">&lt;/script>
//或使用cdn链接 &lt;script src="https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js">&lt;/script>
&lt;script>
    // init vConsole
    var vConsole = new VConsole();
    console.log('Hello world');
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2：</h2>
<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install vconsole

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import VConsole from 'vconsole';

const isDebug = true;
// 本地开发调试注入vConsole
if (isDebug) {
    new VConsole();
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>其他类似工具Eruda</p>
</template>
