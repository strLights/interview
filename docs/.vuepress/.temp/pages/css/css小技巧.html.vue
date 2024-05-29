<template><h1 id="css小技巧" tabindex="-1"><a class="header-anchor" href="#css小技巧" aria-hidden="true">#</a> css小技巧</h1>
<h2 id="_1-更改任何输入字段的光标颜色" tabindex="-1"><a class="header-anchor" href="#_1-更改任何输入字段的光标颜色" aria-hidden="true">#</a> 1. 更改任何输入字段的光标颜色</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">input</span> <span class="token punctuation">{</span>
    <span class="token property">caret-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_2-用一行css中添加平滑滚动效果" tabindex="-1"><a class="header-anchor" href="#_2-用一行css中添加平滑滚动效果" aria-hidden="true">#</a> 2.用一行CSS中添加平滑滚动效果</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_3-更改输入字段的默认颜色" tabindex="-1"><a class="header-anchor" href="#_3-更改输入字段的默认颜色" aria-hidden="true">#</a> 3. 更改输入字段的默认颜色</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'logo.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">background-clip</span><span class="token punctuation">:</span>text<span class="token punctuation">;</span>
    <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span>text<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4-使任何元素可调整大小" tabindex="-1"><a class="header-anchor" href="#_4-使任何元素可调整大小" aria-hidden="true">#</a> 4 使任何元素可调整大小</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.resize</span> <span class="token punctuation">{</span>
    <span class="token property">resize</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_5-添加任何图像作为光标" tabindex="-1"><a class="header-anchor" href="#_5-添加任何图像作为光标" aria-hidden="true">#</a> 5. 添加任何图像作为光标</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.my-cursor</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'image.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="设置图片的混合模式" tabindex="-1"><a class="header-anchor" href="#设置图片的混合模式" aria-hidden="true">#</a> 设置图片的混合模式</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'image.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">background-blend-mode</span><span class="token punctuation">:</span> lighten<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.pic1</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'image.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token function">linger-gradient</span><span class="token punctuation">(</span>#f09<span class="token punctuation">,</span> #09f<span class="token punctuation">,</span> #f0f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-blend-mode</span><span class="token punctuation">:</span> lighten<span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">,</span>0 180px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pic1:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">,</span>0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
