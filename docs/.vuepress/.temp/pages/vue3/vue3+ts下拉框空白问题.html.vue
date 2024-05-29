<template><p>vue3 + ts + elementplus 项目  下拉框空白问题</p>
<p>直接渲染下拉框内容</p>
<p>本地可以，线上下拉为空白</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;el-select v-model="form.display_type" placeholder="请选择展演类别">
    &lt;el-option v-for="item in catData" :label="item.label" :value="item.value" :key="item.value">&lt;/el-option>
 &lt;/el-select>



catData:[],




</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式</h2>
<p>在onMounted 重新赋下值即可</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>initData:() => {
    data.feeList = [
        {
            value:"1",
            label:'已缴费'
        },
        {
            value:"0",
            label:'未交费'
        }
    ]
    data.examine = [
        {
            value:"0",
            label:'未审核'
        },
        {
            value:"1",
            label:'审核通过'
        },
        {
            value:"2",
            label:'审核未通过'
        },
    ]
}
})

onMounted(() => {
    data.initData();
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>在子组件中 有时候onmounted 里面也不生效，在异步中 重新赋下值即可</p>
</template>
