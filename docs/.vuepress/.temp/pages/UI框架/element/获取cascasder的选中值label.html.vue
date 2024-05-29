<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;el-cascader
  ref="refSubCat"
  v-model="areas"
  placeholder="选择地区筛选"
  :options="areaOpts"
  popper-class="select-pop"
  :props="{label: 'name', value: 'id'}"
  change-on-select
  @change="areaChange"
/>



areaChange(data) {
  console.log("地区", data);
  console.log(this.$refs["refSubCat"].getCheckedNodes()[0].label);
},
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>// this.$refs[&quot;refSubCat&quot;].getCheckedNodes()  里面可以找你需要的一切</p>
</template>
