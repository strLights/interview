<template><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
## Reflect 有返回值

对于某个对象，赋值并不总是成功的。

例如，我们把 input 的name属性设置为只读，如下：
js
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'text'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


传统的使用等于号进行的属性赋值并不能知道最后是否执行成功，需要开发者自己进行进一步的检测。

例如：
js
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'qdleader'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

上面一行赋值返回值是<span class="token string">'qdleader'</span>，至于改变输入框的type属性值是否成功，不得而知。

js
<span class="token comment">// 输出 false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'qdleader'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

但是下面一行语句使用的Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法，就可以知道是否设置成功，因为Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>的返回值是<span class="token boolean">true</span>或者<span class="token boolean">false</span>（只要参数类型准确）。


##  Reflect方法还有个好处，不会因为报错而中断正常的代码逻辑执行

<span class="token function">js</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">'use strict'</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> frozen <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'yyy'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>frozen<span class="token punctuation">)</span><span class="token punctuation">;</span>

    frozen<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'qdleader'</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'no log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

会出现下面的TypeError错误：

Uncaught TypeError<span class="token operator">:</span> Cannot assign to read only property ‘name’ <span class="token keyword">of</span> object ‘#<span class="token operator">&lt;</span>Object<span class="token operator">></span>’
后面的语句console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'no log'</span><span class="token punctuation">)</span>就没有被执行。

但是如果使用Reflect方法，则console语句是可以执行的，例如：

<span class="token function">js</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">'use strict'</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> frozen <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'yyy'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>frozen<span class="token punctuation">)</span><span class="token punctuation">;</span>

    Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>frozen<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'qdleader'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'no log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



## receiver参数


receiver是接受者的意思，表示调用对应属性或方法的主体对象，通常情况下，receiver参数是无需使用的，但是如果发生了继承，为了明确调用主体，receiver参数就需要出马了。

比方说下面这个例子：

<span class="token keyword">let</span> people <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">'外星人'</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> peopleQD <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> threePeople <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">__proto__</span><span class="token operator">:</span> peopleQD<span class="token punctuation">,</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">'三体人'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 结果是外星人</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>threePeople<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
实际上，这里预期显示应该是“三体人”，而不是“外星人”。

这个时候，就需要使用receiver参数了，代码变化部分参见下面标红的那一行：

<span class="token keyword">let</span> people <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">'外星人'</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> peopleQD <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 也可以简写为 Reflect.get(...arguments) </span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> threePeople <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">__proto__</span><span class="token operator">:</span> peopleQD<span class="token punctuation">,</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">'三体人'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 结果是三体人 </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>threePeople<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
此时，运行结果就是预期的“三体人”了


实际上 Reflect 的函数可以接收第三个参数，即函数调用过程中的 <span class="token keyword">this</span>
比如：
js
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Ben"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">"18"</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 输出 18Ben</span>



### Reflect对象经常和Proxy代理一起使用，原因有三点：

<span class="token operator">></span> Reflect提供的所有静态方法和Proxy第<span class="token number">2</span>个handle参数方法是一模一样的。具体见后面的对比描述。
<span class="token operator">></span> Proxy get<span class="token operator">/</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法需要的返回值正是Reflect的get<span class="token operator">/</span><span class="token keyword">set</span>方法的返回值，可以天然配合使用，比直接对象赋值<span class="token operator">/</span>获取值要更方便和准确。
<span class="token operator">></span> receiver参数具有不可替代性。


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br></div></div></template>
