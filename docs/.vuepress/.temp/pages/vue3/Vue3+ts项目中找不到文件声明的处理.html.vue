<template><p>.d.ts文件放置的目录与tsconfig.json文件指定的includes匹配列表路径一致</p>
<p>我的是放到src 下面
新建一个 vite-env.d.ts文件</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">/// &lt;reference types="vite/client" /></span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"*.vue"</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> Component<span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> defineComponent<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> Component<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"*.ts"</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>
