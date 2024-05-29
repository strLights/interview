<template><h2 id="_1、插入命令" tabindex="-1"><a class="header-anchor" href="#_1、插入命令" aria-hidden="true">#</a> 1、插入命令</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>         i :在当前位置生前插入

         I :在当前行首插入

         A:在当前行尾插入

         a : 在当前位置后插入

         o : 在当前行之后插入一行

         O：在当前行之前插入一行
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_2-查找命令" tabindex="-1"><a class="header-anchor" href="#_2-查找命令" aria-hidden="true">#</a> 2：查找命令</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>         /text：查找text，按n健查找下一个，按N健查找前一个。

        ?text：查找text，反向查找，按n健查找下一个，按N健查找前一个。

 

六、移动命令（皆可和数字匹配用）

         h  左移一个字符（20h 左移20个字符）

         l   右移一个字符，这个命令很少用，一般用w代替

         k  上移一个字符

         j   下移一个字符

         w  向前移动一个单词（光标停在单词首部），如果已到行尾，则转至下一行行首。此命令快，可以代替l命令

         b 向后移动一个单词  2b 向后移动2个单词

         e 同w，只不过是光标停在单词尾部

         ge 同b,光标停在单词尾部

         ^ 移动到本行第一个非空白字符上。

         0（数字0）移动到本行第一个字符上，

        &lt;HOME> 移动到本行第一个字符。同0健。

        $ 移动到行尾 3$ 移动到下面3行的行尾

        gg 移动到文件头。 = [[

        G（shift + g） 移动到文件尾。 = ]]

        f（find）命令也可以用于移动，fx将找到光标后第一个为x的字符，3fd将找到第三个为d的字符。

        F 同f，反向查找。跳到指定行，冒号+行号，回车，比如跳到240行是:240回车。另一个方法是行号+G，比如230G跳到230行。

        Ctrl + e 向下滚动一行

        Ctrl + y 向上滚动一行

        Ctrl + d 向下滚动半屏

        Ctrl + u 向上滚动半屏

        Ctrl + f 向下滚动一屏

        Ctrl + b 向上滚动一屏

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>3：撤销和重做</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>       u:撤销（Undo）

      U:撤销对整行的操作

      Ctrl+r重做（Redo），即撤销的撤销

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4-删除命令" tabindex="-1"><a class="header-anchor" href="#_4-删除命令" aria-hidden="true">#</a> 4：删除命令</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>       x 删除当前字符dl ---删除当前字符，dl=x

       3x 删除当前光标开始向后三个字符

       X 删除当前字符的前一个字符。X=gh

       dh 删除前一个字符

       dd 删除当前行

       dj 删除上一行

       dk 删除下一行

      10d 删除当前行开始的10行。

      D 删除当前字符至行尾。D=d$

      d$ 删除当前字符之后的所有字符（本行）

       kdgg 删除当前行之前所有行（不包括当前行）

       jdG（jd shift + g）   删除当前行之后所有行（不包括当前行）

       :1,10d 删除1-10行

       :11,$d 删除11行及以后所有的行

       :1,$d 删除所有行

       J(shift + j)　　删除两行之间的空行，实际上是合并两行。

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="_5-退出命令" tabindex="-1"><a class="header-anchor" href="#_5-退出命令" aria-hidden="true">#</a> 5：退出命令</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      :wq 保存并退出

      ZZ 保存并退出

     :q! 强制退出并忽略所有更改

     :e! 放弃所有修改，并打开原来文件。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
