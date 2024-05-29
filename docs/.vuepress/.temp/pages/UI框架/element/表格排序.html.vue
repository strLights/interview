<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>            el-table
              :data="tableData"
              class="y_table"
              border
              stripe
               @sort-change="changeTableSort"
               show-summary
               sum-text="总和"
              style="width: 100%">
                  &lt;el-table-column
                      label="用户数"
                      prop="user_count"
                      :sortable="'custom'"
                      >
                      &lt;template slot-scope="scope">
                          &lt;span>
                              {{scope.row.user_count}}
                          &lt;/span>
                      &lt;/template>
                  &lt;/el-table-column>
            &lt;/el-table>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//选择指定列进行排序
changeTableSort(column){
  console.log(column);
  if(column.prop == 'course_title') {
     if(column.order == 'ascending') {
         this.order_type = 1
     } else if(column.order == 'descending') {
         this.order_type = 2
     } else {
         this.order_type = 9
     }
  }
  if(column.prop == 'total_count') {
     if(column.order == 'ascending') {
         this.order_type = 3
     } else if(column.order == 'descending') {
         this.order_type = 4
     } else {
         this.order_type = 9
     }
  }
  if(column.prop == 'valid_count') {
     if(column.order == 'ascending') {
         this.order_type = 5
     } else if(column.order == 'descending') {
         this.order_type = 6
     } else {
         this.order_type = 9
     }
  }
  if(column.prop == 'user_count') {
     if(column.order == 'ascending') {
         this.order_type = 7
     } else if(column.order == 'descending') {
         this.order_type = 8
     } else {
         this.order_type = 9
     }
  }
  this.getData()
},
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div></template>
