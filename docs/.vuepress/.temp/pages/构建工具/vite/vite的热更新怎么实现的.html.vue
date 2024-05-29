<template><h2 id="vite热更新" tabindex="-1"><a class="header-anchor" href="#vite热更新" aria-hidden="true">#</a> vite热更新</h2>
<p>那么，vite 的热更新怎么实现呢？
我们可以使用chokidar库来监听某个文件夹的变更，只要监听到有文件变更，就用websocket通知浏览器重新发一个请求，浏览器就会在代码每次变更之后立刻重新请求这份资源。</p>
<h3 id="安装chokidar库" tabindex="-1"><a class="header-anchor" href="#安装chokidar库" aria-hidden="true">#</a> 安装chokidar库：</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add chokidar <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>（2） 之后去新建一个文件夹chokidar，在其中新建 handleHMRUpdate.js 用于实现监听：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> chokidar <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'chokidar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> watcher <span class="token operator">=</span> chokidar<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">'../src'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/node_modules/**'</span><span class="token punctuation">,</span> <span class="token string">'**/.git/**'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">//不监听哪些文件</span>
    <span class="token literal-property property">ignorePermissionErrors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disableGlobbing</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> watcher
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">handleHMRupdate</span><span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">//创建websocket连接 客户端不给服务端发请求，服务端可以通过websocket来发数据</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> file<span class="token punctuation">,</span> ws <span class="token punctuation">}</span> <span class="token operator">=</span> opts
  <span class="token keyword">const</span> shortFile <span class="token operator">=</span> <span class="token function">getShortName</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> appRoot<span class="token punctuation">)</span>
  <span class="token keyword">const</span> timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> updates<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>shortFile<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">'.css'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//css文件的热更新</span>
    updates <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'js-update'</span><span class="token punctuation">,</span>
        timestamp<span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>shortFile<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">acceptPath</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>shortFile<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'update'</span><span class="token punctuation">,</span>
    updates
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></template>
