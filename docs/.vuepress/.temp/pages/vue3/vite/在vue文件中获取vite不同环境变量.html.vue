<template><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"HelloWorld"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ↓读取内建环境变量</span>
    <span class="token keyword">const</span> mode <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MODE</span><span class="token punctuation">;</span>
    <span class="token comment">// ↓读取自定义环境变量</span>
    <span class="token keyword">const</span> host <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_HOST</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PORT</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BASE_URL</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> baseDomain <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_DOMAIN</span> <span class="token punctuation">;</span>
    <span class="token comment">// ↓返回变量，使支持template获取</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      mode<span class="token punctuation">,</span>
      host<span class="token punctuation">,</span>
      port<span class="token punctuation">,</span>
      baseUrl<span class="token punctuation">,</span>
      baseDomain
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>

    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>Primary<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">"success"</span><span class="token operator">></span>Success<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>

      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"red"</span><span class="token operator">></span>环境变量<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> mode <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> host <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> port <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> baseUrl <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token literal-property property">baseDomain</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> baseDomain <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
@<span class="token keyword">import</span> <span class="token string">'@/assets/style/index.scss'</span><span class="token punctuation">;</span>
a <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #42b983<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

label <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">.</span>5em<span class="token punctuation">;</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

code <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #eee<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 2px 4px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">304455</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div></template>
