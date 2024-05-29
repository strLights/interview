<template><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">NVM</span>：可以随时切换你电脑的node版本，方便的不得了呀！


## 安装
github上下载nvm<span class="token operator">-</span>setup<span class="token punctuation">.</span>zip安装包。
下载地址 https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>coreybutler<span class="token operator">/</span>nvm<span class="token operator">-</span>windows<span class="token operator">/</span>releases
安装包说明：
nvm<span class="token operator">-</span>noinstall<span class="token punctuation">.</span>zip：绿色免安装版，但使用时需进行配置。
nvm<span class="token operator">-</span>setup<span class="token punctuation">.</span>zip：安装版，推荐使用
选择nvm<span class="token operator">-</span>setup<span class="token punctuation">.</span>zip进行下载安装
## 注意事项：
<span class="token operator">></span> 安装路径不要有空格


## 正常安装过程

<span class="token number">1.</span>在安装nvm 之前呢，首先把你电脑上的node都删掉，找到node安装目录，把node的文件夹删掉，或在搜索栏里面搜node，有个node uninstall 点击卸载，然后再把环境变量中的node的路径和npm的路径都删掉

<span class="token number">2.</span>安装nvm 下载nvm<span class="token operator">-</span>setup<span class="token punctuation">.</span>zip 然后在c盘直接新建一个nvm文件夹，点击下一步出来的node路径也选这个nvm文件夹，然后直接安装。（我们直接在c盘或d盘装，会把nvm的路径直接自动加到系统path里面，也会避免一些权限不够的坑）

<span class="token number">3.</span>然后你用管理员身份运行cmd，输入nvm，出来一大串就说明你安装成功了

<span class="token number">4</span><span class="token punctuation">.</span>nvm install <span class="token number">16.11</span><span class="token number">.1</span>    下载成功后 nvm use <span class="token number">16.11</span><span class="token number">.1</span> 就ok了



## 使用
shell
nvm install <span class="token operator">&lt;</span>version<span class="token operator">></span>：下载相应版本node
nvm list：列出已有node版本
nvm use <span class="token operator">&lt;</span>version<span class="token operator">></span><span class="token operator">:</span> 使用特定node版本
nvm on：开启node<span class="token punctuation">.</span>js版本管理
nvm off：关闭node<span class="token punctuation">.</span>js版本管理
nvm node_mirror <span class="token punctuation">[</span>url<span class="token punctuation">]</span>：设置node镜像，默认是https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>nodejs<span class="token punctuation">.</span>org<span class="token operator">/</span>dist<span class="token operator">/</span>。如果不写url，则使用默认url<span class="token punctuation">,</span>设置后可至安装目录settins<span class="token punctuation">.</span>txt中查看<span class="token punctuation">,</span><span class="token literal-property property">国内镜像地址https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>node<span class="token operator">/</span>
nvm npm_mirror <span class="token punctuation">[</span>url<span class="token punctuation">]</span>：设置npm镜像地址，默认是https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>npm<span class="token operator">/</span>cli<span class="token operator">/</span>archive<span class="token operator">/</span><span class="token punctuation">,</span><span class="token literal-property property">国内镜像地址：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>npm<span class="token operator">/</span>
nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">></span>： 卸载指定版本node
nvm use <span class="token punctuation">[</span>version<span class="token punctuation">]</span> 使用指定版本node
nvm versoin<span class="token operator">:</span> 显示nvm版本






## 常见问题
### <span class="token number">1</span>、nvm安装node成功，但下载npm失败
原因：网络下载地址默认用国外的服务器
解决：修改nvm安装路径下，settings<span class="token punctuation">.</span>txt中添加两行镜像地址：

<span class="token literal-property property">node_mirror</span><span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>node<span class="token operator">/</span>
<span class="token literal-property property">npm_mirror</span><span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>npm<span class="token operator">/</span>

### <span class="token number">2</span>、nvm use <span class="token punctuation">[</span>version<span class="token punctuation">]</span>命令使用报 exit status <span class="token number">1</span><span class="token operator">:</span>xxxx
原因： 安装目录中存在空格
解决：卸载重装，注意nvm安装路径中不要有空格出现

### <span class="token number">3</span>、nvm use切换node成功，但执行node <span class="token operator">-</span>v不是内部名外部命令
原因： nvm中node安装目录在环境变量中配置不正确
解决：
在nvm安装目录下新建nodejs空文件夹： <span class="token constant">D</span><span class="token operator">:</span>\nvm\nodejs
在环境变量中，将<span class="token operator">%</span><span class="token constant">NVM_SYMLINK</span><span class="token operator">%</span>指向地址改为上述地址
再次打开cmd， nvm use <span class="token operator">&lt;</span>version<span class="token operator">></span>使用特定特定版本node<span class="token punctuation">,</span>测试node <span class="token operator">-</span>v是否可行
<span class="token function">配置环境变量</span><span class="token punctuation">(</span>可通过 window<span class="token operator">+</span>r —<span class="token operator">></span> sysdm<span class="token punctuation">.</span>cpl —<span class="token operator">></span> 高级 —<span class="token operator">></span>环境变量<span class="token punctuation">)</span>


### <span class="token number">4</span>、nvm use <span class="token punctuation">[</span>version<span class="token punctuation">]</span>命令使用报 exit status <span class="token number">145</span><span class="token operator">:</span>xxxx
解决

把之前的node和nvm都卸了，按照安装流程方法再走一遍即可
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div></template>
