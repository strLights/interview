<template><h2 id="eg1" tabindex="-1"><a class="header-anchor" href="#eg1" aria-hidden="true">#</a> eg1</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type 别名 = 类型

type Str = string // 定义

const str1:Str = 'abc'
const str2:string = 'abc'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="eg2" tabindex="-1"><a class="header-anchor" href="#eg2" aria-hidden="true">#</a> eg2</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> type NewType = string | number

 let a: NewType = 1
 let b: NewType = '1'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>别名可以是任意的合法字符串，一般首字母大写</p>
</blockquote>
</template>
