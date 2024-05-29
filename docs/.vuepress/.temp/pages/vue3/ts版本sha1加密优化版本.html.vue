<template><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install jssha -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> import jsSHA from "jssha"      //module



 // 大写的sha1 加密串
 function getsignUpper (sign: any) {
     let shaObj = new jsSHA("SHA-1","TEXT",{encoding:"UTF8"})
     shaObj.update(sign);
     return shaObj.getHash("HEX").toUpperCase() ;
 }

 // 小写的sha1 加密串
 function getsign (sign: any) {
     let shaObj = new jsSHA("SHA-1","TEXT",{encoding:"UTF8"})
     shaObj.update(sign);
     return shaObj.getHash("HEX") ;
 }


 console.log("加密好的内容":getsign("qdleader"))
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></template>
