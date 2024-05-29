<template><p>先下载个brew 然后下载git</p>
<p>或直接装个Xcode，个人感觉太大了Xcode</p>
<h1 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>勇</p>
<h2 id="加入到path" tabindex="-1"><a class="header-anchor" href="#加入到path" aria-hidden="true">#</a> 加入到path</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/icourt/.zprofile

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
    eval "$(/opt/homebrew/bin/brew shellenv)"


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>brew -v   就下载好了</p>
<p>此时，比如我们要下载git</p>
<p>就可以直接</p>
<p>brew install git</p>
</template>
