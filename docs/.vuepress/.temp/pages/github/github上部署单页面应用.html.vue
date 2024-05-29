<template><p>我们打包时候执行完npm run build 之后 会生成一个dist</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  然后新建一个 分支 git checkout <span class="token operator">-</span>b feature<span class="token operator">-</span>outPage


  在新分支下删除除了dist 外的所有文件

  然后吧dist中的文件都复制出来到根目录下，把dist删除掉即可

  把index文件中的路径 加上<span class="token punctuation">.</span><span class="token operator">/</span>

   <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"module"</span> crossorigin src<span class="token operator">=</span><span class="token string">"/assets/index.7de06274.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"/assets/index.f3a4dcb2.css"</span><span class="token operator">></span>

  改为

   <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"module"</span> crossorigin src<span class="token operator">=</span><span class="token string">"./assets/index.7de06274.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"./assets/index.f3a4dcb2.css"</span><span class="token operator">></span>


  然后把 assets文件夹复制一份到assets里面

  然后把这个分支 push 上去


  在github 中 找到 settings <span class="token operator">-</span>》 pages


在 GitHub Pages 下面找到


找到 Build and deployment

Source 选择 Deploy from a branch

Branch 选择 我们的 feature<span class="token operator">-</span>outPage   然后保存

等一会就可以看到我们的站点了

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></template>
