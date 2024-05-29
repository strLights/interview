<template><p>父组件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;div>

  &lt;editPage ref="sonRef"/>
&lt;/div>


&lt;/template>

&lt;script lang="ts">

import { onMounted ,reactive,toRefs,defineComponent,ref} from 'vue'
import editPage from './edit.vue'

import {displayList} from './../../http/httpUrl';
interface DataProps {
  formInline1: string;
  formInline2: string;
  dataList: [];
  current: number;
  pageSize: number;
  total: number;
  handleSubmit: () => void;
  getData: () => void;
  tableData:[]
}

interface ResProps {
  data: [];
  currentPage: number;
  totalCount: number;
}

export default defineComponent({
name:'about',
 components: {
     editPage
},
setup() {

  const sonRef = ref()
  const sendValue = () => {
     // 可以拿到son组件实例，并调用其setup返回的所有信息
     console.log(sonRef.value)

     // 通过调用son组件实例的方法，向其传递数据
     sonRef.value.acceptValue('123456')
   }



   return {
           sonRef
      }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>子组件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

export default defineComponent({
    name:'editPage',
     components: {
    },
    setup() {
    const data: DataProps = reactive({
          //正常写即可
          acceptValue:(value: string) => {
              console.log("子组件方法被调用啦",value)
          }

        })
        onMounted(() => {
            data.getData()
        })
        const refData = toRefs(data);
        return {
            ...refData
        }
    }
})
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></template>
