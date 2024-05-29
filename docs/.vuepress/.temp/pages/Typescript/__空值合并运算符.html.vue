<template><p>空值合并运算符 (??)</p>
<p>空值合并运算符在变量为 null 或 undefined 时提供默认值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultName <span class="token operator">=</span> name <span class="token operator">??</span> <span class="token string">'Unknown'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>defaultName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: Unknown</span>

<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultAge <span class="token operator">=</span> age <span class="token operator">??</span> <span class="token number">18</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>defaultAge<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: 0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
