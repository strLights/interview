<template><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装 pm2</span>
<span class="token function">npm</span> <span class="token function">install</span> -g pm2

<span class="token comment"># 列出所有实例</span>
pm2 list

<span class="token comment"># fork模式，无法处理并发</span>
<span class="token comment"># 启动一个实例，实例名myapi</span>
pm2 start index.js --name myapi

<span class="token comment"># cluster模式，可处理并发，启动4个实例</span>
pm2 start index.js --name myapi -i <span class="token number">4</span>

<span class="token comment"># 启动一个实例，并监视应用目录的变化，一旦发生变化，自动重启</span>
pm2 start index.js --name myapi --watch

<span class="token comment"># 内存使用超过上限自动重启</span>
pm2 start index.js --name myapi --max-memory-restart 20M
pm2 start index.js --name myapi --node-args<span class="token operator">=</span><span class="token string">"--max-old-space-size=4096"</span>

<span class="token comment"># 把名称为myapi的应用增加3个实例</span>
pm2 scale myapi +3

<span class="token comment"># 把名称为myapi的应用增加到10个实例</span>
pm2 scale myapi <span class="token number">10</span>

<span class="token comment"># 重置重启次数</span>
pm2 reset myapi

<span class="token comment"># 监视所有进程</span>
pm2 monit

<span class="token comment"># 显示所有进程的日志</span>
pm2 logs

<span class="token comment"># 停止所有进程</span>
pm2 stop all

<span class="token comment"># 重启所有进程</span>
pm2 restart all

<span class="token comment"># 重载所有进程，0秒停机</span>
pm2 reload all

<span class="token comment"># 杀死所有进程</span>
pm2 delete all

<span class="token comment"># 查看某个进程的信息</span>
pm2 describe ID号

<span class="token comment"># 使用pm2设置nodejs开机自启</span>
pm2 save <span class="token operator">&amp;&amp;</span> pm2 startup

<span class="token comment"># 开启api访问，http://ip:9615</span>
pm2 web



</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h2 id="cluster-mode" tabindex="-1"><a class="header-anchor" href="#cluster-mode" aria-hidden="true">#</a> cluster mode</h2>
<p>cluster mode  就是在单台服务器上，开启多个相同 node.js项目 进程，共同处理网络请求服务，让 node.js项目 处理并发和响应速度达到最高性能。</p>
<p>二、解决方案</p>
<h2 id="法一-命令启动" tabindex="-1"><a class="header-anchor" href="#法一-命令启动" aria-hidden="true">#</a> 法一：命令启动</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 启动多个 node.js项目进程（进程数量 = cpu核数量）</span>
pm2 start app.js -i <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="法二-配置文件启动" tabindex="-1"><a class="header-anchor" href="#法二-配置文件启动" aria-hidden="true">#</a> 法二：配置文件启动</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1、配置文件(processes.json)，设置如下</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">apps</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">"api.js"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token string">"max"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exec_mode</span><span class="token operator">:</span> <span class="token string">"cluster"</span><span class="token punctuation">,</span> <span class="token comment">// 开启进程间的负载均衡模式</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token comment"># 2、用配置文件启动 node.js 项目</span>
  pm2 start processes.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="三、其他重要说明" tabindex="-1"><a class="header-anchor" href="#三、其他重要说明" aria-hidden="true">#</a> 三、其他重要说明</h2>
<h4 id="i-后面的数字说明" tabindex="-1"><a class="header-anchor" href="#i-后面的数字说明" aria-hidden="true">#</a> -i 后面的数字说明</h4>
<blockquote>
<p>0/max ：开启进程数量  ==  cpu核数量
-1：进程数量  == cpu核数量 - 1</p>
</blockquote>
<h4 id="pm2更改instances配置不起作用解决办法" tabindex="-1"><a class="header-anchor" href="#pm2更改instances配置不起作用解决办法" aria-hidden="true">#</a> pm2更改instances配置不起作用解决办法</h4>
<p>有时候改了pm2 start app.js -i 0 改了模式没有生效，那就因为现在有正在运行的node进程，需要pm2 delete all 杀死所有进程，然后再次启动。即可！</p>
</template>
