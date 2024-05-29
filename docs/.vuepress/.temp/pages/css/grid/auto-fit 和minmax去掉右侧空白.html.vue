<template><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* # auto-fit 和minmax去掉右侧空白
grid-template-columns: repeat(auto-fit minmax(200px,1fr));

表示列宽至少200px 如果还有剩余空间 则分配给该列，如果剩余空间又有200px了，就多一列 */</span>

<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>auto-fit<span class="token punctuation">,</span><span class="token function">minmax</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span>1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-gap</span><span class="token punctuation">:</span>10px 20px<span class="token punctuation">;</span>
    <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
