<template><p>https访问
仅为github.com设置socks5代理(推荐这种方式, 公司内网就不用设代理了, 多此一举):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>git config <span class="token operator">--</span>global http<span class="token punctuation">.</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token punctuation">.</span>proxy socks5<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">1086</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中1086是socks5的监听端口, 这个可以配置的, 每个人不同, 在macOS上一般为1086.</p>
<p>我的是7890</p>
<p>不行的话</p>
<p>移除旧的origin ：git remote remove origin
再重新建立新的origin ： git remote add origin http://github.com/×××
再试试</p>
</template>
