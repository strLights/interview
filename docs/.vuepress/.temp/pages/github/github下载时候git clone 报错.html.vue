<template><p>git clone 遇到问题：fatal: unable to access 'https://github.com/qdleader/qdleader.git': Failed to connect to xxxxxxxxxxxxx</p>
<p>将命令行里的http改为git重新执行。</p>
<p>解决方式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone git://github.com/qdleader/qdleader.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但是这种方式看代码还好，push还是有问题，最好还是等网好一点时候或科学上网还是用https方式下载比较好</p>
</template>
