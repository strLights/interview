<template><h1 id="vue3-中的watch" tabindex="-1"><a class="header-anchor" href="#vue3-中的watch" aria-hidden="true">#</a> vue3 中的watch</h1>
<blockquote>
<p>接受三个参数：
参数1：监听的数据源 （可以为一个ref或者一个函数）
参数2： 回调函数 （newValue, oldValue） =&gt; {}
参数3： 深度监听或立即执行的配置（deep: true, imediate: true）</p>
</blockquote>
<p>首先展示ref 监听的常规写法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div>
  {{qdleader}}
      &lt;button @click="changeData">&lt;/button>
  &lt;/div>

&lt;/template>

&lt;script>

import {ref, toRefs, watch, reactive} from 'vue';

export default {
  setup() {
    const qdleader = ref('qdleader')
    const changeData = () => {
      qdleader.value = "我变了"
    }
    watch(qdleader,(newValue,oldValue) => {
        console.log("qdleader发生变化时候",newValue,oldValue)
      })
    return {
      qdleader,
      changeData
    }
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>2.在state 的写法中怎么用呢？
注意在这里你直接写state.qdleader是不好使的，你要写() =&gt; state.qdleader</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div>
  {{qdleader}}
  &lt;button @click="changeData">&lt;/button>
  &lt;/div>
&lt;/template>

&lt;script>

import {ref, toRefs, watch, reactive} from 'vue';

export default {
  setup() {
    const state = {
      qdleader:'qdleader',
      changeData: () => {
        state.qdleader = '我变了'
      }
    }

    watch(() => state.qdleader,(newValue,oldValue) => {
        console.log("qdleader发生变化时候",newValue,oldValue)
    })
    return {
      ...toRefs(state)
    }
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>那什么时候用第三个参数呢？怎么用呢？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div>
  {{qdleader}}
  &lt;button @click="changeData">&lt;/button>
  &lt;/div>
&lt;/template>

&lt;script>

import {ref, toRefs, watch, reactive} from 'vue';

export default {
  setup() {
    const state = {
      qdleader:'qdleader',
      a:{
        b:''
      },
      changeData: () => {
        state.a.b = '我变了'
      }
    }

    watch(() => state.a,(newValue,oldValue) => {
        console.log("qdleader发生变化时候",newValue,oldValue)
    })
    return {
      ...toRefs(state)
    }
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>当我们监听对象属性时候，监听a，当a对象中的b发生变化时候，我们会发现，我们根本监听不到。</p>
<p>这时我们的第三个属性就闪亮登场了。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div>
  {{qdleader}}
  &lt;button @click="changeData">&lt;/button>
  &lt;/div>
&lt;/template>

&lt;script>

import {ref, toRefs, watch, reactive} from 'vue';

export default {
  setup() {
    const state = {
      qdleader:'qdleader',
      a:{
        b:''
      },
      changeData: () => {
        state.a.b = '我变了'
      }
    }

    watch(() => state.a,(newValue,oldValue) => {
        console.log("qdleader发生变化时候",newValue,oldValue)
    },{
        deep:true, //深度监听
        imediate:true,//一进页面就监听
      })
    return {
      ...toRefs(state)
    }
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>watch监视多个属性
首先明确watch接受三个参数（要监视的数据，回调函数，配置项）</p>
<p>第一种方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> num1<span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>num1<span class="token punctuation">.</span>value<span class="token punctuation">,</span> num2<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> oldVal<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> newVal<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> oldVal<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>第二种方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>num1<span class="token punctuation">.</span>value<span class="token punctuation">,</span> num2<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>preNum1<span class="token punctuation">,</span> preNum2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>oldNum1<span class="token punctuation">,</span> oldNum2<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>preNum1<span class="token punctuation">,</span> oldNum1<span class="token punctuation">,</span> preNum2<span class="token punctuation">,</span> oldNum2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>当我们要写多个监听方法时候可以写多个watch吗，会覆盖吗。。</p>
<p>直接在下面写就可以，不会覆盖的。</p>
<p>另外我们在这里介绍一个跟watch 类似的一个api</p>
<p>watchEffact</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div>
  {{qdleader}}
  &lt;button @click="changeData">&lt;/button>
  &lt;/div>
&lt;/template>

&lt;script>

import {ref, toRefs, watch, reactive, watchEffact} from 'vue';

export default {
  setup() {
    const state = {
      qdleader:'qdleader',
      content:'',
      a:{
        b:''
      },
      changeData: () => {
        state.qdleader = '我变了'
        state.content = '我变了'
      }
    }

    watchEffact(() => {
      console.log(state.qdleader,'改变了')
    })
    return {
      ...toRefs(state)
    }
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="watcheffact与watch的区别" tabindex="-1"><a class="header-anchor" href="#watcheffact与watch的区别" aria-hidden="true">#</a> watchEffact与watch的区别：</h2>
<blockquote>
<p>1、watch 是需要传入侦听的数据源，而 watchEffect 是自动收集数据源作为依赖。</p>
</blockquote>
<blockquote>
<p>2、watch 可以访问侦听状态变化前后的值，而 watchEffect 不可。</p>
</blockquote>
<blockquote>
<p>3、watch 是属性改变的时候执行，而 watchEffect 是默认会执行一次，然后属性改变也会执行。</p>
</blockquote>
</template>
