<template><h1 id="实现等分响应式" tabindex="-1"><a class="header-anchor" href="#实现等分响应式" aria-hidden="true">#</a> 实现等分响应式</h1>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*  fr实现等分响应式

 fr 等分单位，可以将容器的可用空间分成想要的多个等分空间。利用这个特性，我们能够轻易实现一个等分响应式。grid-template-columns: 1fr 1fr 1fr 表示容器分为三等分 */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr 1fr<span class="token punctuation">;</span>
    <span class="token property">grid-gap</span><span class="token punctuation">:</span>10px 20px<span class="token punctuation">;</span>
    <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
