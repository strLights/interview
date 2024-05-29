<template><h2 id="record" tabindex="-1"><a class="header-anchor" href="#record" aria-hidden="true">#</a> Record</h2>
<p>以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Coord</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token string">'x'</span> <span class="token operator">|</span> <span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">type</span> <span class="token class-name">Coord</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
	y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>具体的复杂业务场景中，一般会接口 Pick 、Partial 等组合使用，从而过滤和重组出新的类型定义。</p>
<h2 id="partial" tabindex="-1"><a class="header-anchor" href="#partial" aria-hidden="true">#</a> Partial</h2>
<p>将类型定义的所有属性都修改为可选。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Coord</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token string">'x'</span> <span class="token operator">|</span> <span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">>></span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">type</span> <span class="token class-name">Coord</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	x<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
	y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> Readonly</h2>
<p>不管是从字面意思，还是定义上都很好理解：将所有属性定义为自读。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type Coord <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token string">'x'</span> <span class="token operator">|</span> <span class="token string">'y'</span><span class="token punctuation">,</span> number<span class="token operator">>></span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
type Coord <span class="token operator">=</span> <span class="token punctuation">{</span>
    readonly x<span class="token operator">:</span> number<span class="token punctuation">;</span>
    readonly y<span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果进行了修改，则会报错：</span>
<span class="token keyword">const</span> <span class="token literal-property property">c</span><span class="token operator">:</span> Coord <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// Error: Cannot assign to 'x' because it is a read-only property.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="pick" tabindex="-1"><a class="header-anchor" href="#pick" aria-hidden="true">#</a> Pick</h2>
<p>从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Coord</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token string">'x'</span> <span class="token operator">|</span> <span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">CoordX</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Coord<span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">// 等用于</span>
<span class="token keyword">type</span> <span class="token class-name">CoordX</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
