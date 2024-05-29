<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --get core.ignorecase 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>得到的结果是false 说明我本地已经配置了 区分大小写了，
如果 窗口提示为true执行下列代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config core.ignorecase false 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
