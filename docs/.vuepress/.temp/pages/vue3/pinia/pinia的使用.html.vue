<template><h2 id="安装状态管理pinia" tabindex="-1"><a class="header-anchor" href="#安装状态管理pinia" aria-hidden="true">#</a> 安装状态管理pinia</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> npm install pinia
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在main.js 中引入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  // main.js
 import { createApp } from 'vue'
 import App from './App.vue'

 import { createPinia } from 'pinia'
 const pinia = createPinia()

 const app = createApp(App)
 app.use(pinia)
 app.mount('#app')
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>然后我们在src中建立store文件夹 ，然后建立个 index.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> // src/store/index.js
 // 引入仓库定义函数
 import { defineStore } from 'pinia'

 // 传入2个参数，定义仓库并导出
 // 第一个参数唯一不可重复，字符串类型，作为仓库ID以区分仓库
 // 第二个参数，以对象形式配置仓库的state,getters,actions
 // 配置 state getters actions
 export const mainStore = defineStore('main', {
   // state 类似组件的data选项，函数形式返回对象
   state: () => {
     return {
       msg: 'hello world!',
       counter: 0
     }
   },
   getters: {},
   actions: {}
 })
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_1在组件中使用" tabindex="-1"><a class="header-anchor" href="#_1在组件中使用" aria-hidden="true">#</a> 1在组件中使用</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
   &lt;button @click="handleClick">修改状态数据&lt;/button>
    &lt;!-- 模板内不需要加.value -->
     &lt;p>{{store.counter}}&lt;/p>
     &lt;!-- 或者使用解构之后的 -->
     &lt;p>{{counter}}&lt;/p>
 &lt;/template>
 ​
 &lt;script setup>
 // 导入状态仓库
 import { mainStore } from "../store/index.js";
 // 使普通数据变响应式的函数  
 import { storeToRefs } from "pinia";
 // 实例化仓库
 const store = mainStore();
 // 解构并使数据具有响应式
 const { counter } = storeToRefs(store);
 ​
 // 点击 + 1;
 function handleClick() {
   // ref数据这里需要加.value访问
   counter.value++;
 }
 &lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="patch" tabindex="-1"><a class="header-anchor" href="#patch" aria-hidden="true">#</a> $patch</h2>
<p>对象形式
前面介绍的是少量数据的变更，如果涉及数据比较多，则推荐使用仓库实例的$patch方法，批量修改，虽然看起来和前面的几乎没有区别，但是会加快修改速度，对程序的性能有很大的好处。$patch传入一个对象，对象的属性就是各种状态</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> &lt;template>
   &lt;button @click="handleClick">修改状态数据&lt;/button>
      &lt;p>{{msg}}&lt;/p>
     &lt;!-- 或者使用解构之后的 -->
     &lt;p>{{counter}}&lt;/p>
 &lt;/template>
 ​
 &lt;script setup>
 // 导入状态仓库
 import { mainStore } from "../store/index.js";
 // 使普通数据变响应式的函数  
 import { storeToRefs } from "pinia";
 // 实例化仓库
 const store = mainStore();
 // 解构并使数据具有响应式
 const { msg,counter } = storeToRefs(store);
 ​
 // 点击 + 1;修改字符串
 function handleClick() {
   store.$patch({
      msg: "pinia good!",
     counter: counter.value + 1,
   });
 }
 &lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="函数形式" tabindex="-1"><a class="header-anchor" href="#函数形式" aria-hidden="true">#</a> 函数形式</h2>
<p>上面例子中的$patch也可以传入一个函数，函数参数为state状态：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> &lt;template>
   &lt;button @click="handleClick">修改状态数据&lt;/button>
      &lt;p>{{msg}}&lt;/p>
     &lt;!-- 或者使用解构之后的 -->
     &lt;p>{{counter}}&lt;/p>
 &lt;/template>
 ​
 &lt;script setup>
 // 导入状态仓库
 import { mainStore } from "../store/index.js";
 // 使普通数据变响应式的函数  
 import { storeToRefs } from "pinia";
 // 实例化仓库
 const store = mainStore();
 // 解构并使数据具有响应式
 const { msg,counter } = storeToRefs(store);
 ​
 // 点击 + 1;修改字符串
 function handleClick() {
    store.$patch((state) => {
     state.msg = "pinia good!";
     state.counter++;
   });
 }
 &lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h1 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>5Actions
actions等价于组件中的方法，它们可以在defineStore()中进行定义actions属性，并且可以完美地去定义业务逻辑。

复制
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})
在上面的代码中，我们可以看到actions有点类似getters，但事实上是有所不同的。

相同点：actions和getters都可以全类型支持来访问整个store实例。
不同点：actions操作可以是异步的，可以在其中等待任何api调用甚至其他操作。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>同样的，action也可以像state和getters进行相互使用，action可以通过this直接访问。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// src/store/user.ts
export const useUserStore = defineStore({
  "user",
  state: () => ({
    userData: null
  }),
  actions:{
    async login(account, pwd) {
      const { data } = await api.login(account, pwd)
      this.setData(data) // 调用另一个 action 的方法
      return data
    },
    setData(data) {
      this.userData = data
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="也可以在action-里调用其他-store-里的-action-引入对应的-store-后即可访问其内部的方法了。" tabindex="-1"><a class="header-anchor" href="#也可以在action-里调用其他-store-里的-action-引入对应的-store-后即可访问其内部的方法了。" aria-hidden="true">#</a> 也可以在action 里调用其他 store 里的 action，引入对应的 store 后即可访问其内部的方法了。</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// src/store/user.ts

import { useAppStore } from './app'
export const useUserStore = defineStore({
  id: 'user',
  actions: {
    async login(account, pwd) {
      const { data } = await api.login(account, pwd)
      const appStore = useAppStore()
      appStore.setData(data) // 调用 app store 里的 action 方法
      return data
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// src/store/app.ts
export const useAppStore = defineStore({
  "app",
  state:()=>{
    userData: null
  },
  actions: {
    setData(data) {
      this.userData = data
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="在组件中使用" tabindex="-1"><a class="header-anchor" href="#在组件中使用" aria-hidden="true">#</a> 在组件中使用</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
   &lt;button @click="handleClick">修改状态数据&lt;/button>
      &lt;p>{{msg}}&lt;/p>
     &lt;!-- 或者使用解构之后的 -->
     &lt;p>{{counter}}&lt;/p>
 &lt;/template>
 ​
 &lt;script setup>
 // 导入状态仓库
 import { useAppStore } from "../store/app.ts";
 const store = useAppStore();
 ​
 function handleClick() {
    store.setData('qdleader')
 }
 &lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
