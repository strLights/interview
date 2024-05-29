<template><blockquote>
<p>将可复用功能抽离为外部JS文件</p>
</blockquote>
<blockquote>
<p>函数名/文件名以use开头，形如：useXX</p>
</blockquote>
<blockquote>
<p>引用时将响应式变量或者方法显式解构暴露出来如：const {nameRef，Fn} = useXX()
（在setup函数解构出自定义hooks的变量和方法）</p>
</blockquote>
<h2 id="加法-hook" tabindex="-1"><a class="header-anchor" href="#加法-hook" aria-hidden="true">#</a> 加法 hook</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { ref, watch } from 'vue';
const useAdd= ({ num1, num2 })  =>{
    const addNum = ref(0)
    watch([num1, num2], ([num1, num2]) => {
        addFn(num1, num2)
    })
    const addFn = (num1, num2) => {
        addNum.value = num1 + num2
    }
    return {
        addNum,
        addFn
    }
}
export default useAdd


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="减法-hook" tabindex="-1"><a class="header-anchor" href="#减法-hook" aria-hidden="true">#</a> 减法 hook</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//减法功能-Hook
import { ref, watch } from 'vue';
export function useSub  ({ num1, num2 }){
    const subNum = ref(0)
    watch([num1, num2], ([num1, num2]) => {
        subFn(num1, num2)
    })
    const subFn = (num1, num2) => {
        subNum.value = num1 - num2
    }
    return {
        subNum,
        subFn
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在组建中使用：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
    &lt;div>
        num1:&lt;input v-model.number="num1" style="width:100px" />
        &lt;br />
        num2:&lt;input v-model.number="num2" style="width:100px" />
    &lt;/div>
    &lt;span>加法等于:{{ addNum }}&lt;/span>
    &lt;br />
    &lt;span>减法等于:{{ subNum }}&lt;/span>
&lt;/template>
​
&lt;script setup>
import { ref } from 'vue'
import useAdd from './useAdd.js'     //引入自动hook 
import { useSub } from './useSub.js' //引入自动hook 
​
const num1 = ref(2)
const num2 = ref(1)
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)


//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { subNum, subFn } = useSub({ num1, num2 })
subFn(num1.value, num2.value)
&lt;/script>
​

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="vue3自定义hooks可以灵活传递任何参数来改变它的逻辑-参数不限于其他hook的暴露出来的变量" tabindex="-1"><a class="header-anchor" href="#vue3自定义hooks可以灵活传递任何参数来改变它的逻辑-参数不限于其他hook的暴露出来的变量" aria-hidden="true">#</a> Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量</h2>
<p>算平均的Hook</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//平均功能-Hook
import { ref, watch } from "vue";
export function useAverage(addNum) {
  const averageNum = ref(0);
  watch(addNum, (addNum) => {
    averageFn(addNum);
  });
  const averageFn = (addNum) => {
    averageNum.value = addNum / 2;
  };
  return {
    averageNum,
    averageFn,
  };
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>组件内使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//组件内
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)//主动调用，返回最新addNum


//平均功能-自定义Hook- hook传入参数值来其他hook暴露出来的变量
const { averageNum, averageFn} = useAverage(addNum)
averageFn(addNum.value)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量，这提高了Vue3在抽象逻辑方面的灵活性。</p>
<h3 id="_3、mixin同名变量会被覆盖-vue3自定义hook可以在引入的时候对同名变量重命名" tabindex="-1"><a class="header-anchor" href="#_3、mixin同名变量会被覆盖-vue3自定义hook可以在引入的时候对同名变量重命名" aria-hidden="true">#</a> 3、Mixin同名变量会被覆盖，Vue3自定义Hook可以在引入的时候对同名变量重命名</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Vue3自定义Hooks
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { totalNum:addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)

//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { totalNum:subNum, subFn } = useSub({ num1, num2 })
subFn(num1.value, num2.value)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote>
<p>在Vue3自定义Hooks中，虽然加法和减法Hooks都返回了totalNum，但是利用ES6对象解构很轻松给变量重命名</p>
</blockquote>
</template>
