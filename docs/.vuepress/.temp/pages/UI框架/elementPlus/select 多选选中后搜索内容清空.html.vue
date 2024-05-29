<template><h2 id="select-多选选中后搜索内容清空" tabindex="-1"><a class="header-anchor" href="#select-多选选中后搜索内容清空" aria-hidden="true">#</a> select 多选选中后搜索内容清空</h2>
<p>vue3 写法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>el<span class="token operator">-</span>select
    v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"drawerProps.row!.reservationUserIdList"</span>
    filterable
    remote
    multiple
    ref<span class="token operator">=</span><span class="token string">"changeSelectPeopleRef"</span>
    @change<span class="token operator">=</span><span class="token string">"changeSelectPeople"</span>
<span class="token operator">></span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>option
        <span class="token operator">:</span>label<span class="token operator">=</span><span class="token string">"item.name"</span>
        <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">"item.id"</span>
        v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(item, index) in inviteArr"</span>
        <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"index"</span>
    <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>select<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> changeSelectPeopleRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeSelectPeople</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  changeSelectPeopleRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>query <span class="token operator">=</span> <span class="token string">""</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
