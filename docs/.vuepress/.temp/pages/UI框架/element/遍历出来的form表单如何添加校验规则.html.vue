<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;ul class="dialogChangeNum-con-ul">
       &lt;el-form
         ref="ruleForm"
         :model="ruleForm"
         :rules="rules"
       >
         &lt;li
           v-for="(item,idx) in ruleForm.arr"
           :key="idx"
         >
             &lt;el-form-item
               label="材料用量："
               :rules="rules.checkedSelectRule(idx)"
               :prop="`arr`"
             >
               &lt;el-input v-model="item.value" />
               &amp;nbsp;件
             &lt;/el-form-item>
         &lt;/li>
       &lt;/el-form>
     &lt;/ul>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ruleForm: {
  usage: "",
   arr:[{value:''},{value:''}],// form 列表
},
rules: {
  checkedSelectRule(idx) {
    return [
      {
        validator: (rule, value, callback) => {
          // console.log("rule, value, callback",rule, value, callback)
          console.log("value",value,rule)
          console.log("idx",idx)
          console.log("value[idx]",value[idx])
          let name = value[idx].value
           if (!name) {
              return callback(new Error("材料用量不能为空"));
            }
           if (isNaN(name)) {
            callback(new Error("请输入数字值"));
          } else {
            if (name.toString().split(".")[1]) {
              let num = name.toString().split(".")[1].length;
              if (num > 2) {
                callback(new Error("小数点后最多两位"));
              }
            }
            if (name &lt; 0) {
              callback(new Error("请输入大于0的数值"));
            } else {
              callback();
            }
          }
        },
        trigger: ["blur", "change"]
      }
    ];
  }
},
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div></template>
