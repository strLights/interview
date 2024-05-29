<template><h1 id="手写个正则将html里的标签全部替换为空★" tabindex="-1"><a class="header-anchor" href="#手写个正则将html里的标签全部替换为空★" aria-hidden="true">#</a> 手写个正则将html里的标签全部替换为空★</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>str.replace(/(&lt;(.[^>]*)>)|(&amp;nbsp;)/g,"") 

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="去除富文本格式" tabindex="-1"><a class="header-anchor" href="#去除富文本格式" aria-hidden="true">#</a> 去除富文本格式</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      // 去除 富文本格式
	let data =document.getElementById(aa).innerHTML;
	data = data.replace(/(\n)/g, "");    
	data = data.replace(/(\t)/g, "");    
	data = data.replace(/(\r)/g, "");    
	data = data.replace(/&lt;\/?[^>]*>/g, "");    
	data = data.replace(/\s*/g, "");  

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
