<template><p>什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"mask"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"dialog"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h3<span class="token operator">></span>我是一个弹窗<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
            <span class="token operator">&lt;</span>h4<span class="token operator">></span>一些内容<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
            <span class="token operator">&lt;</span>h4<span class="token operator">></span>一些内容<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
            <span class="token operator">&lt;</span>h4<span class="token operator">></span>一些内容<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
            <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"isShow = false"</span><span class="token operator">></span>关闭弹窗<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>teleport<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>一言以蔽之</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>相当于  element的 append-to-body</p>
<p>这里的移动位置可以是body，也可以是某些css选择器
比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">"#app"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
