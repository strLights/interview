<template><h1 id="npm安装任何包都报错的解决办法" tabindex="-1"><a class="header-anchor" href="#npm安装任何包都报错的解决办法" aria-hidden="true">#</a> npm安装任何包都报错的解决办法</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>解决办法：

1、执行：

npm config get proxy
npm config get https-proxy
如果返回值不为null，继续执行：
（这一步很重要，一定要保证两个命令的返回值都为null,话说回来，应该出现这个错误这两个返回值有不为null的）
npm config set proxy null
npm config set https-proxy null


2、执行：
npm config set registry http://registry.cnpmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>然后你就可以愉快的安装cnpm了</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install -g cnpm --registry=https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后你就可以更加愉快的用cnpm安任何东西了</p>
<p>现在基本就可以了，若cnpm 现在也任然报错呢，可以再检查一下是否配置了
git的系统变量</p>
<blockquote>
<p>系统变量的path中加入git 路径</p>
</blockquote>
</template>
