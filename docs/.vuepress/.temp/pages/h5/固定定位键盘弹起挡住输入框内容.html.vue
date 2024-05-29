<template><p>12.固定定位布局键盘挡住输入框内容？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;div class="submit">
     &lt;button type="button" class="btn">提交信息&lt;/button>
&lt;/div>


.submit {
    display: flex;
    width: 100%;
    justify-content: center;
    position: fixed;
    bottom: 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>通过resize函数监听窗口变化，然后把fixed属性改为static即可解决</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var windheight = $(window).height();  /*未唤起键盘时当前窗口高度*/

$(window).resize(function(){
   var docheight = $(window).height();  /*唤起键盘时当前窗口高度*/        
   if(docheight &lt; windheight){            /*当唤起键盘高度小于未唤起键盘高度时执行*/
      $(".submit").css("position","static");
   }else{
      $(".submit").css("position","fixed");
   }           
});

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>
