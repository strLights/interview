<template><p>vue3里面没有了全局的时间过滤器了，我给大家提供两种解决方案。</p>
<h1 id="_1-挂载到全局属性globalproperties上面" tabindex="-1"><a class="header-anchor" href="#_1-挂载到全局属性globalproperties上面" aria-hidden="true">#</a> 1. 挂载到全局属性globalProperties上面</h1>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5fe9a4d586242ddb7f4a1df9e92ae06~tplv-k3u1fbpfcp-watermark.image?" alt="image.png">
在utils，新建filters文件。
里面内容</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export default {
    formatTime(date?:any, type = 'yyyy-MM-dd hh:mm') {
        if (!date) return
        let time = new Date(date)
        let res;
        if (type === 'yyyy-MM-dd hh:mm') {
            res = `${time.getFullYear()}-${time.getMonth()+ 1}-${time.getDate()} ${addZero(time.getHours())}:${addZero(time.getMinutes())}`
        } else if(type === 'yyyy-MM-dd') {
            res = `${time.getFullYear()}-${time.getMonth()+ 1}-${time.getDate()}`
        }
        return res
    },
}
function addZero (num:number) {
    if (num &lt; 10) { return '0' + num }
    return num
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>然后在main.ts 里面引入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import filters from './utils/filters'
const app = createApp(App)
app.config.globalProperties.$filters = filters
app.mount('#app')

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在页面中用时候,直接用就好，还是比较方便的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{{$filters.formatTime(lastEditTime)}}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第一种就over了</p>
<p>下面呢，我来看另一种</p>
<h1 id="_2-结合-hooks来实现" tabindex="-1"><a class="header-anchor" href="#_2-结合-hooks来实现" aria-hidden="true">#</a> 2. 结合 hooks来实现</h1>
<p>新建 一个</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96416649f3d844ffbaed140e5429dc93~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// useTime.ts
import { ref, watch } from "vue";
export function useTime(date?:any, type = 'yyyy-MM-dd hh:mm', isWrap?:Boolean) {
    const formatTime = (date:any, type = 'yyyy-MM-dd hh:mm', isWrap:Boolean) => {
    /*
            date: 传入的时间戳
            type: 传入的时间格式
            isWrap: 时间结尾处是否换行
        */
    if (!date) return
    let time = new Date(date)
        let res;
        if (type === 'yyyy-MM-dd hh:mm') {
            res = `${time.getFullYear()}-${time.getMonth()+ 1}-${time.getDate()} ${addZero(time.getHours())}:${addZero(time.getMinutes())}`
        } else if(type === 'yyyy-MM-dd') {
            res = `${time.getFullYear()}-${time.getMonth()+ 1}-${time.getDate()}`
        }
        return res
    }
    function addZero (num:number) {
        if (num &lt; 10) { return '0' + num }
        return num
    }
    return {
        formatTime,
    };
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>在 .vue 中的使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div>
     {{formatTime(lastEditTime)}}
  &lt;/div>
&lt;/template>



&lt;script lang="ts">
import { defineComponent,onMounted,reactive,ref,toRefs} from "vue";
import {useTime} from '@/hooks/useTime' 
export default defineComponent({
  name: "User",
  setup() {
    const data = reactive({
      nameList:[],// 商品名称列表
      currentPage:1,
      pageSize:10,
      lastEditTime:1652362534412,
      formatTime:useTime().formatTime,
    })
    const refData = toRefs(data);
    return {
        ...refData
    }
  }
});
&lt;/script>
&lt;style lang="scss" scoped>

&lt;/style>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div></template>
