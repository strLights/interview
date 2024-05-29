<template><h2 id="scroll-中的-e的类型" tabindex="-1"><a class="header-anchor" href="#scroll-中的-e的类型" aria-hidden="true">#</a> scroll 中的 e的类型</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">onScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> UIEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">.</span>scrollTop <span class="token operator">+</span> target<span class="token punctuation">.</span>clientHeight <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">>=</span> target<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do the magic</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>antd 中 Button 中的e</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactNode<span class="token punctuation">,</span> MouseEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">handleOpenAplly</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token operator">&lt;</span>Button
				type<span class="token operator">=</span><span class="token string">"primary"</span>
				onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
					<span class="token function">handleOpenAplly</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">}</span>
			<span class="token operator">></span>
				分配
			<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
