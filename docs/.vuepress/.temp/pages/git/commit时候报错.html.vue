<template><p>commit时候报错，Oops! Something went wrong! :(提交不上去</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ git commit -m  '修改打包配置'
husky > pre-commit (node v14.15.4)
Stashing changes... [started]
Stashing changes... [skipped]
→ No partially staged files found...
Running linters... [started]
Running tasks for src/**/*.{js,vue} [started]
eslint --fix [started]
eslint --fix [failed]
→
Running tasks for src/**/*.{js,vue} [failed]
→
Running linters... [failed]



× eslint --fix found some errors. Please fix them and try committing again.


Oops! Something went wrong! :(

ESLint: 5.15.3.
ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

eslint --init

ESLint looked for configuration files in E:\20201010project\common_admin\src\utils and its ancestors. If it found none, it then looked in your home directory.

If you think you already have a configuration file or if you need more help, please stop by the ESLint chat room: https://gitter.im/eslint/eslint
husky > pre-commit hook failed (add --no-verify to bypass)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git commit --no-verify -m "添加登录名称配置"  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
