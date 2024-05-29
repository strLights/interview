<template><h3 id="_1-el-table-表格内容超出省略" tabindex="-1"><a class="header-anchor" href="#_1-el-table-表格内容超出省略" aria-hidden="true">#</a> 1.el-table 表格内容超出省略</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>当表格内容过长时，手动添加样式比较麻烦，偷偷告诉你，只需要添加一个 show-overflow-tooltip 就可以搞定。
&lt;el-table-column
  prop="address"
  label="地址"
  width="180"
  show-overflow-tooltip
>
&lt;/el-table-column>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-el-form-只校验表单其中一个字段" tabindex="-1"><a class="header-anchor" href="#_2-el-form-只校验表单其中一个字段" aria-hidden="true">#</a> 2.el-form 只校验表单其中一个字段</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>有时候我们需要单独校验一些字段，比如发送验证码，单独对手机号进行校验，可以这样做：
this.$refs.form.validateField('name', valid => {
    if (valid) {
        console.log('send!');
    } else {
        console.log('error send!');
        return false;
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_3-el-input-type-number-输入中文-焦点上移" tabindex="-1"><a class="header-anchor" href="#_3-el-input-type-number-输入中文-焦点上移" aria-hidden="true">#</a> 3.el-input type=number 输入中文，焦点上移</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;style scoped>
::v-deep .el-input__inner {
    line-height: 1px !important;
}
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-el-input-type-number-去除聚焦时的上下箭头" tabindex="-1"><a class="header-anchor" href="#_4-el-input-type-number-去除聚焦时的上下箭头" aria-hidden="true">#</a> 4.el-input type=number 去除聚焦时的上下箭头</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;el-input class="clear-number-input" type="number">&lt;/el-input>

&lt;style scoped>
.clear-number-input ::v-deep input[type="number"]::-webkit-outer-spin-button,
.clear-number-input ::v-deep input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
}
&lt;/style>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
