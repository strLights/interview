<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;div class="block" >
    &lt;el-pagination background layout="prev, pager, next" :total="item.total" :current-page="item.page" :page-size="10"  @current-change="(val) => changePage(val,'qdleader')">
    &lt;/el-pagination>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//新增前端分页
changePage(page,name) {
    // alert(12)
    console.log(page,name)
    // this.page = page

    this.newArr[index].page = page
//   this.changeParams({ page: page })

    // let oIndex = page - 1;
    // this.newList = this.form.goodids.splice(oIndex*20,20)

    // console.log("this.newList",this.newList)
    // this.total = this.form.goodids.length
    let newArr = this.newArr[index].goodids.concat([]);
    // console.log("page",this.page)
    let oIndex = page - 1;
    this.newArr[index].newList = newArr.splice(oIndex*10,oIndex*10+10)

    console.log("this.newList",this.newList)
    console.log("this.newList",this.newArr[index].goodids)
    this.newArr[index].total = this.newArr[index].goodids.length

},
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></template>
