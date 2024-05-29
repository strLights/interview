<template><h1 id="进入文件" tabindex="-1"><a class="header-anchor" href="#进入文件" aria-hidden="true">#</a> 进入文件</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /home 进入 '/ home' 目录'
cd .. 返回上一级目录
cd ../.. 返回上两级目录
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="查看文件夹中的文件" tabindex="-1"><a class="header-anchor" href="#查看文件夹中的文件" aria-hidden="true">#</a> 查看文件夹中的文件</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ls 查看目录中的文件
ll 查看目录中的文件
ls -l 显示文件和目录的详细资料
ls -a 显示隐藏文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h1 id="创建文件夹" tabindex="-1"><a class="header-anchor" href="#创建文件夹" aria-hidden="true">#</a> 创建文件夹</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir dir1 创建一个叫做 'dir1' 的目录'
mkdir dir1 dir2 同时创建两个目录
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rm -f file1 删除一个叫做 'file1' 的文件'
rmdir dir1 删除一个叫做 'dir1' 的目录'
rm -rf dir1 删除一个叫做 'dir1' 的目录并同时删除其内容
rm -rf dir1 dir2 同时删除两个目录及它们的内容
mv dir1 new_dir 重命名/移动 一个目录

cp file1 file2 复制一个文件
cp -a dir1 dir2 复制一个目录
cp -r dir1 dir2 复制一个目录及子目录
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="编辑一个文件" tabindex="-1"><a class="header-anchor" href="#编辑一个文件" aria-hidden="true">#</a> 编辑一个文件</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim a.js


当编辑完退出时候

esc
:w + enter 保存
:q + enter 退出vim模式
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="vim-编辑手册" tabindex="-1"><a class="header-anchor" href="#vim-编辑手册" aria-hidden="true">#</a> vim 编辑手册</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vimtutor
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
