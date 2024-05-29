<template><p>在使用git的时候我们有时候需要忽略一些文件或者文件夹。我们一般在仓库的根目录创建.gitignore文件</p>
<p>在提交之前，修改.gitignore文件，添加需要忽略的文件。然后再做add  commit push 等</p>
<p>但是有时在使用过称中，需要对.gitignore文件进行再次的修改。这次我们需要清除一下缓存cache，才能是.gitignore 生效。</p>
<p>具体做法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git rm -r --cached .  #清除缓存
git add . #重新trace file
git commit -m "update .gitignore" #提交和注释
git push origin master #可选，如果需要同步到remote上的话
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这样就能够使修改后的.gitignore生效。</p>
</template>
