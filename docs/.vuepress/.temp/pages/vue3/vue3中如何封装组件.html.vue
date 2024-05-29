<template><h1 id="vue3中如何封装组件" tabindex="-1"><a class="header-anchor" href="#vue3中如何封装组件" aria-hidden="true">#</a> vue3中如何封装组件</h1>
<blockquote>
<p>比如封装一个时间组件</p>
</blockquote>
<h2 id="新建一个nowtime-ts的文件" tabindex="-1"><a class="header-anchor" href="#新建一个nowtime-ts的文件" aria-hidden="true">#</a> 新建一个nowTime.ts的文件</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { ref } from 'vue'

const nowTime = ref("00:00:00")

const getNowTime = () => {
  const now = new Date();
  const h = now.getHours() &lt; 10 ? '0' + now.getHours():now.getHours()
  const m = now.getMinutes() &lt; 10? '0' + now.getMinutes():now.getMinutes()
  const s = now.getSeconds() &lt; 10? '0' + now.getSeconds():now.getSeconds()
  nowTime.value = h + ":" + m +":" + s
  setTimeout(getNowTime,1000)
}

export {
  nowTime,
  getNowTime
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="在组件中引用" tabindex="-1"><a class="header-anchor" href="#在组件中引用" aria-hidden="true">#</a> 在组件中引用</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div class="about">
    &lt;div>
        {{nowTime}}
    &lt;/div>
      &lt;div @click="getNowTime">
            显示当前时间
        &lt;/div>
  &lt;/div>

&lt;/template>

&lt;script lang="ts">
import { ref } from 'vue'
import {nowTime,getNowTime} from '../hocks/useNowTime'

import useUrlAxios from '../hocks/http'
export default {
    name:'about',
    setup() {
        return {
            nowTime,
            getNowTime,
        }
    }
}
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></template>
