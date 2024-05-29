<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      &lt;el-pagination
        background
        layout="prev, pager, next"
        @current-change="changePage"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        :total="total"
        v-if="total != 0"
        >
    &lt;/el-pagination>


    data() {
        return {
              total: 10, //总页数
              currentPage: 1, //当前页
              pageSize: 20,
        }
    }



    methods:{
        //选择页数
        changePage(str) {
              console.log("选择的页数", str);
              this.currentPage = str;
              this.getData();
        },
        getData() {
          let obj = {
            exchange_name: this.exchange_name,
            page: this.currentPage,
            pageSize: this.pageSize,
          };
      fetchCodeList(obj)
        .then((res) => {
          console.log("兑换码管理列表", res);
          this.tableData = res.data.data;



                this.total = res.data.totalCount;
 
        })
        .catch((err) => {
          console.log(err);
        });
    },
    }

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div></template>
