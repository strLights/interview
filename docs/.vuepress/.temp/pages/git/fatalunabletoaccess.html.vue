<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fatal: unable to access 'https://github.com/qdleader/qdleader.git/': Failed to connect to github.com port 443: Timed out

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>出现这个报错：</p>
<p>#解决方式：</p>
<p>1、连接超时，首先找到git的安装目录，找到/etc/ssh/ssh_config文件</p>
<blockquote>
<p>在cmd中输入：   where git        查看git的安装目录</p>
</blockquote>
<p>复制这几句到该文件最后</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Host github.com

User git

Hostname ssh.github.com

PreferredAuthentications publickey

IdentityFile ~/.ssh/id_rsa

Port 443
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>成功解决问题。</p>
<h2 id="git-push时出现-fetal-unable-to-access-https-github-com-错误" tabindex="-1"><a class="header-anchor" href="#git-push时出现-fetal-unable-to-access-https-github-com-错误" aria-hidden="true">#</a> git push时出现 fetal:unable to access “https://github.com/...“错误</h2>
<p>报 443时候</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --global --unset http.proxy   #取消http代理
git config --global --unset https.proxy  #取消https代理

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>然后新开一个命令窗口，再push一下就可以啦</p>
</template>
