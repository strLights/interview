<template><p>直接上代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;van-list  :finished="finished" finished-text="到底啦,只有这么多了" @load="onLoadDown" v-if="commentList.length != 0" v-model="loading">
         &lt;ul class="comment_ul">
             &lt;li class="comment_li clearfix" v-for="(item,index) in commentList" :key="index">
                 &lt;img :src="item.comm_user_portrait" alt="">
                 &lt;div class="comment_ri">
                     &lt;div class="comment_ribox clearfix">
                         &lt;div class="comment_ri_left clearfix">
                             &lt;h5 @click="readBack(item)">{{item.comm_username}}&lt;/h5>
                             &lt;span>{{item.create_time | formatDate('yyyy.MM.dd hh:mm', false)}}&lt;/span>
                         &lt;/div>
                         &lt;div :class="{'comment_ri_right':true,'comment_ri_rightred':item.liked_status == 1}" @click="doLike(item,index)">
                             &lt;i class="iconfont yk-dianzanbeifen2">&lt;/i>
                             &lt;i class="iconfont yk-yidianzan">&lt;/i>
                             &lt;cite>{{item.liked_num}}&lt;/cite>
                         &lt;/div>
                     &lt;/div>
                     &lt;div class="comment_ri_con" @click="readBack(item)">
                         {{item.comm_content}}
                     &lt;/div>

                     &lt;div class="comment_ri_back" v-show="item.son_comment_count != 0" @click="lookSonCom(item)">
                         {{item.son_comment_count}}次回复 >
                     &lt;/div>


                 &lt;/div>
             &lt;/li>
         &lt;/ul>
 &lt;/van-list>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>onLoad() {
    // 异步更新数据
    const _self = this
    this.loading = true;
    let uidPub = JSON.parse(decodeURI(sessionStorage.getItem(UserInfoSave))).uid
    let courseNum = 1

    if(typeof(this.courseType) == 'undefined') {

    } else {
        console.log("this.course_type11111111111",this.courseType)
        courseNum = this.courseType
    }
    commentList({
        page: this.currentPage + "",
        uid:uidPub + "",
        pageSize: this.pageSize + "",
         course_id:this.act_id_new + "",
         file_type:this.fileType + "",
         course_type:courseNum + "",
    }).then(res => {
        console.log("评论列表", res);
        // this.loading = false;
        // this.list = res.data.data;
        // this.finished = true;
        this.isLoading = false
        if(res.ret == 0) {
            const rows = res.data.data
            if(res.data.length == 0) {
                   _self.finished = true
                // _self.commentList = []
                return
            }
            //第一页如果没有，才显示空状态
            if (rows.length === 0 &amp;&amp; res.data.currentPage == 1) {
                // 加载结束
                _self.finished = true
                _self.commentList = []
                return
            }
            if (rows == null || rows.length === 0) {
                // 加载结束
                _self.finished = true
                // _self.commentList = []
                return
            }
            if (rows.length &lt; this.pageSize) {
                // 最后一页不足10条的情况
                _self.finished = true
            }
            // 处理数据
            if (_self.currentPage === 1) {
                _self.list = rows
            } else {
                _self.list = _self.list.concat(rows)
            }
            // _self.commentList = this.sort_pro(_self.list,['play_date'])
            _self.commentList = _self.list
        }

    }).catch(error => {
        _self.finished = true
        // this.$message({
        //     showClose: true,
        //     message: '获取资源列表异常{' + error + '}',
        //     type: 'error'
        // })
    }).finally(() => {
        _self.loading = false
        this.isLoading = false
        // _self.isUpLoading = false
    })
},
// 上拉加载请求方法
onLoadDown() {
    this.loading = true;
    this.currentPage ++;
    this.onLoad();
},
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><p>你这么写就会发现，到页面底部时候，不再多请求数据了。</p>
<p>关键其实就是</p>
<p>在onLoadDown方法里面的在this.onLoad方法前面加，this.loading = true即可。</p>
</template>
