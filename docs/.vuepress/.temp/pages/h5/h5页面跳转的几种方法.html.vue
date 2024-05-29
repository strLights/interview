<template><h1 id="h5页面跳转的几种方法" tabindex="-1"><a class="header-anchor" href="#h5页面跳转的几种方法" aria-hidden="true">#</a> h5页面跳转的几种方法</h1>
<ol>
<li></li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>window.location.replace("www.baidu.com")
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li></li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>window.location.href = 'www.baudu.com'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li></li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>window.history.go(-1)   //返回上一页


window.history.go(-2)   //返回上两页



window.history.go("www.baudu.com") //跳转
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="4">
<li></li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>window.history.back()   // 返回上一页
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5">
<li></li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>window.history.forward()   //返回下一页

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>6.meta</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;meta charset="utf-8" http-equiv="refresh" content="3;url=www.baidu.com"> //3秒后跳转到baidu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
