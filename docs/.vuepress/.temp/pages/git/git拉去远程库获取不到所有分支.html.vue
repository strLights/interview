<template><!-- 你现在 在dev 上 要切换到远程的$  release/v4.9 -->
<h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1</h2>
<blockquote>
<p>git checkout release/v4.9</p>
</blockquote>
<blockquote>
<p>git pull</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>此时 你 git pull 时候 会报


There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull &lt;remote> &lt;branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/&lt;branch> release/v4.9

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><!-- 此时 把你本地的关联到 远程即可 -->
<h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法：</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch --set-upstream-to=origin/release/v4.9  release/v4.9

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>解释：将远程的v1.12分支与本地的v1.12建立连接，以后在本地v1.12分支pull和push的时候就不需要指定远程分支的名称直接进行git push和git pull 操作即可</p>
</blockquote>
<h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2</h2>
<h3 id="拉取远程所有分支" tabindex="-1"><a class="header-anchor" href="#拉取远程所有分支" aria-hidden="true">#</a> 拉取远程所有分支</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>


git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="首先同步所有远程分支-如上" tabindex="-1"><a class="header-anchor" href="#首先同步所有远程分支-如上" aria-hidden="true">#</a> 首先同步所有远程分支，如上：</h2>
<h3 id="将本地所有分支与远程保持同步" tabindex="-1"><a class="header-anchor" href="#将本地所有分支与远程保持同步" aria-hidden="true">#</a> 将本地所有分支与远程保持同步</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git fetch --all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="最后拉取所有分支代码" tabindex="-1"><a class="header-anchor" href="#最后拉取所有分支代码" aria-hidden="true">#</a> 最后拉取所有分支代码</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> git pull --all

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>此时你已经看到你要切换的分支了，直接切就可以了</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git checkout release/v4.9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
