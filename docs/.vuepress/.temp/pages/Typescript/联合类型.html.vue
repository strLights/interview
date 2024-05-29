<template><h2 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let str: number | string
str = 10
str = '10'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>// | 联合类型  变量可以是两种类型之一
let timer:number | null = null
timer = setTimeout()</p>
</template>
