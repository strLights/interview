<template><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup<span class="token operator">=</span><span class="token string">"props"</span><span class="token operator">></span>
  <span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">'./components/HelloWorld.vue'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>HelloWorld<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>vetur 是 vue2 的版本</p>
<p>volar 是 vue3 的版本</p>
<p>那既然官方推荐 _volar_那肯定要去看下，简单的说volar是vetur的升级版本，提供了更牛叉的功能并有更好的TS支持。</p>
<p>选择卸载vetur，安装volar插件</p>
<p>最后，记得重启下VS Code</p>
</template>
