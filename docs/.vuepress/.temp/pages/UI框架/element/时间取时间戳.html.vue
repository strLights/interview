<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   &lt;el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      @change="changeDate"
      value-format="timestamp"
      :default-time="['12:00:00']"
    >
    &lt;/el-date-picker>



    用 value-format="timestamp" 就可以获取到时间戳格式的
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>时间组件制定某一默认时间</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;el-date-picker
   v-model="ruleForm.endValidTime"
   type="datetime"
   :default-time="new Date(2000, 1, 1, 23, 59, 59)"
   placeholder="请选择结束时间"
   style="width: 100%"
/>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
