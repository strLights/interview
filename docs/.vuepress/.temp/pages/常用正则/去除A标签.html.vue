<template><h2 id="去除a标签" tabindex="-1"><a class="header-anchor" href="#去除a标签" aria-hidden="true">#</a> 去除a标签</h2>
<p>str=str.replace(/(&lt;/?a.*?&gt;)/g, '');
console.log(str);</p>
<h2 id="去除a或span标签" tabindex="-1"><a class="header-anchor" href="#去除a或span标签" aria-hidden="true">#</a> 去除a或span标签</h2>
<p>str=str.replace(/(&lt;/?a.<em>?&gt;)|(&lt;/?span.</em>?&gt;)/g, '');
console.log(str);</p>
</template>
