<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install -g package --registry=https://registry.npmmirror.com/



npm install -g cnpm --registry=https://registry.npmmirror.com/

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>mac 将原始镜像为淘宝镜像</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm get registry #查看原本镜像
$ npm config set registry http://registry.npmmirror.com/ #修改成淘宝镜像
$ npm config set registry https://registry.npmjs.org/ #镜像还原

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
