<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> &lt;el-table :data="tableData" @sort-change="sortTime"  class="header-bg"  style="width: 100%">
    &lt;el-table-column label="提交兑换申请时间" width="150" prop="applyTime"   sortable="custom" >
       &lt;template #default="scope">
         {{formatTime(scope.row.applyTime)}}
       &lt;/template>
    &lt;/el-table-column>
    &lt;/el-table>






&lt;script lang="ts">
export default defineComponent({
  name: "User",
  components:{
    deliveryOrder,
    receiptInfomation
  },
  setup() {
    const data = reactive({

      sortTime:(prop: string, order: string) => {
        console.log(prop,order);
      },
     
    })
    const refData = toRefs(data);
    return {
        ...refData,
    }
  }
});
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></template>
