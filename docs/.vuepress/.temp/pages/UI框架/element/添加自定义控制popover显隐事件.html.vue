<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;el-popover
     v-model="visible"
     placement="top"
     width="208"
     :popper-class="isEmbedded?'checkVisibled dbrc-popover dbrc-popoverupper':'checkVisibled-white dbrc-popover dbrc-popoverupper'"
   >
     &lt;div
       slot="reference"
       :ref="`popoverBtn`"
       class="dialogAdd-box-right-add dbra-top"
       @click.stop="addPop(item,index)"
     >
       &lt;i class="iconfont icon-bim-add dialogAdd-box-right-add icon-bim-add-top ibat" />
     &lt;/div>
   &lt;/el-popover>



   // 自定义一个 box
  &lt;div @click.stop="doShowPopover">
    控制显隐
  &lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>doShowPopover(item, index) {
   this.$refs[`popoverBtn`].click();
 },
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>关键点就是 你在自定义事件那加一个阻止默认事件。防止你已经触发popover 已经打开，但事件传递到document 上又被关闭了</p>
</template>
