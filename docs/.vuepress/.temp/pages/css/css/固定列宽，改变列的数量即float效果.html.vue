<template><h1 id="固定列宽-改变列的数量即float效果" tabindex="-1"><a class="header-anchor" href="#固定列宽-改变列的数量即float效果" aria-hidden="true">#</a> 固定列宽，改变列的数量即float效果</h1>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* grid-template-columns: repeat(auto-fit, 200px) 表示固定列宽为 200px，数量是自适应的，只要容纳得下，就会往上排列, 跟width:200px; float: left;效果一样 */</span>
<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fit<span class="token punctuation">,</span> 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
    <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
