<template><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1</span>，前言
js
<span class="token operator">&lt;</span>script setup<span class="token operator">></span>是在单文件组件中使用Composition <span class="token constant">API</span>的编译时语法糖。相比于普通的<span class="token operator">&lt;</span>script<span class="token operator">></span>语法，它具有更多优势


更少的样板内容，更简洁的代码
能够使用纯 Typescript 声明 props 和抛出事件
<span class="token function">更好的运行时性能</span> <span class="token punctuation">(</span>其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理<span class="token punctuation">)</span>

## <span class="token number">2</span>，基本语法

vue
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'qd'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>



<span class="token function">script里面的代码会被编译成组件setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>函数的内容。这意味着与普通的<span class="token operator">&lt;</span>script<span class="token operator">></span>只在组件被首次引入的时候执行一次不同，<span class="token operator">&lt;</span>script setup<span class="token operator">></span>中的代码会在每次组件实例被创建的时候执行。

注意：当使用<span class="token operator">&lt;</span>script setup<span class="token operator">></span>的时候，任何在<span class="token operator">&lt;</span>script setup<span class="token operator">></span><span class="token function">声明的顶层的绑定</span> <span class="token punctuation">(</span>包括变量，函数，以及<span class="token keyword">import</span>引入的内容<span class="token punctuation">)</span> 都能在模板中直接使用，不需要<span class="token keyword">return</span>

## <span class="token number">2</span>响应式
响应式状态需要使用响应式APIs来创建
vue
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> data<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'qd'</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'qd'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>


## <span class="token number">3</span>组件使用
js
<span class="token operator">&lt;</span>script setup<span class="token operator">></span>范围里的值也能被直接作为自定义组件的标签名使用，不需要写在conmonent对象里


vue
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script setup<span class="token operator">></span>
    <span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">'./MyComponent.vue'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>


### <span class="token number">3.1</span>，动态组件
由于组件被引用为变量而不是作为字符串键来注册的，在<span class="token operator">&lt;</span>script setup<span class="token operator">></span>中要使用动态组件的时候，就应该使用动态的<span class="token operator">:</span>is来绑定

vue
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">"Foo"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">"someCondition ? Foo : Bar"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script setup<span class="token operator">></span>
    <span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">'./Foo.vue'</span>
    <span class="token keyword">import</span> Bar <span class="token keyword">from</span> <span class="token string">'./Bar.vue'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>


### <span class="token number">3.2</span>，递归组件
一个单文件组件可以通过它的文件名被其自己所引用。例如：文件名为Foo<span class="token punctuation">.</span>vue的组件可以在其模板中用<span class="token operator">&lt;</span>Foo<span class="token operator">/</span><span class="token operator">></span>引用它自己。如果名称冲突了，就需要使用别名。

js
<span class="token keyword">import</span> <span class="token punctuation">{</span> Foo <span class="token keyword">as</span> FooBarChild <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./components'</span>


## <span class="token number">4</span>，自定义指令
全局注册的自定义指令将以符合预期的方式工作，且本地注册的指令可以直接在模板中使用，就像上文所提及的组件一样。但这里有一个需要注意的限制：必须以 vNameOfDirective的形式来命名本地自定义指令，以使得它们可以直接在模板中使用

vue
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span>my<span class="token operator">-</span>directive<span class="token operator">></span>This is a Heading<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script setup<span class="token operator">></span>
    <span class="token keyword">const</span> vMyDirective <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">beforeMount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 在元素上做些操作</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">**</span>### 导入指令<span class="token operator">**</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">></span>
  <span class="token comment">// 导入的指令同样能够工作，并且能够通过重命名来使其符合命名规范</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> myDirective <span class="token keyword">as</span> vMyDirective <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyDirective.js'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>


# <span class="token number">5</span>，props
在<span class="token operator">&lt;</span>script setup<span class="token operator">></span>中必须使用defineProps来声明props，它具备完整的类型推断并且在<span class="token operator">&lt;</span>script setup<span class="token operator">></span>中是直接可用的

<span class="token operator">&lt;</span>script setup<span class="token operator">></span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>


defineProps 用来接收父组件传来的 props <span class="token punctuation">;</span> defineEmits 用来声明触发的事件。


<span class="token comment">//父组件</span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>my<span class="token operator">-</span>son foo<span class="token operator">=</span><span class="token string">"qd"</span> @change<span class="token operator">=</span><span class="token string">"childClick"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup<span class="token operator">></span>
<span class="token keyword">import</span> MySon <span class="token keyword">from</span> <span class="token string">"./MySon.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> childClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>


<span class="token comment">//子组件</span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>span @click<span class="token operator">=</span><span class="token string">"sonClick"</span><span class="token operator">></span>信息<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span> props<span class="token punctuation">.</span>foo <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineEmits<span class="token punctuation">,</span> defineProps<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"change"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 声明触发事件 change</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">'qd'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">'0分钟'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 获取props</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">sonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change'</span> <span class="token punctuation">,</span> props<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>




### <span class="token number">5.1</span>，TypeScript支持

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> string
  bar<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
默认值
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  msg<span class="token operator">?</span><span class="token operator">:</span> string
  labels<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span>defineProps<span class="token operator">&lt;</span>Props<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">labels</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token string">'one'</span><span class="token punctuation">,</span> <span class="token string">'two'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


## <span class="token number">6</span>，emit
在<span class="token operator">&lt;</span>script setup<span class="token operator">></span>中必须使用defineEmits来声明emits，它具备完整的类型推断并且在<span class="token operator">&lt;</span>script setup<span class="token operator">></span>中是直接可用的


子组件


<span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span> 你好<span class="token operator">-</span>我是子组件<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"hander1Click"</span><span class="token operator">></span>新增<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"hander2Click"</span><span class="token operator">></span>删除<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup<span class="token operator">></span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span>defineEmits<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">//  使用defineEmits创建名称，接受一个数组</span>
<span class="token keyword">let</span> emit<span class="token operator">=</span><span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'myAdd'</span><span class="token punctuation">,</span><span class="token string">'myDel'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> hander1Click<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'myAdd'</span><span class="token punctuation">,</span><span class="token string">'新增的数据'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">let</span> hander2Click<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'myDel'</span><span class="token punctuation">,</span><span class="token string">'删除的数据'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>




父组件

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"home"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>test<span class="token operator">-</span>com @myAdd<span class="token operator">=</span><span class="token string">"myAddHander"</span> @myDel<span class="token operator">=</span><span class="token string">'myDelHander'</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>test<span class="token operator">-</span>com<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup<span class="token operator">></span>
<span class="token keyword">import</span> TestCom <span class="token keyword">from</span> <span class="token string">"../components/TestCom.vue"</span>
<span class="token keyword">let</span> myAddHander<span class="token operator">=</span><span class="token punctuation">(</span>mess<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'新增==>'</span><span class="token punctuation">,</span>mess<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">let</span> myDelHander<span class="token operator">=</span><span class="token punctuation">(</span>mess<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'删除==>'</span><span class="token punctuation">,</span> mess<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>




### <span class="token number">6.1</span>，TypeScript支持

<span class="token keyword">const</span> emit <span class="token operator">=</span> defineEmits<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">'update'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>


## <span class="token number">7</span>，defineExpose暴露
如果在父组件中通过ref<span class="token operator">=</span>'xxx’的方法来获取子组件实例，
子组件使用了script setup语法糖<span class="token punctuation">,</span>
则子组件的数据需要用defineExpose 的方式导出，否则不会暴露属性。

<span class="token comment">//父组件</span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>Daughter ref<span class="token operator">=</span><span class="token string">"daughter"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Daughter <span class="token keyword">from</span> <span class="token string">"./Daughter.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> daughter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'~daughter'</span><span class="token punctuation">,</span>daughter<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'~daughter'</span><span class="token punctuation">,</span>daughter<span class="token punctuation">.</span>value<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'~daughter'</span><span class="token punctuation">,</span>daughter<span class="token punctuation">.</span>value<span class="token punctuation">.</span>info<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>


<span class="token comment">//子组件</span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">,</span>defineExpose<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'beautify'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> info<span class="token operator">=</span><span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">like</span><span class="token operator">:</span><span class="token string">'喜欢李诗晴'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">27</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    msg<span class="token punctuation">,</span>
    info
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>




## <span class="token number">8</span>，useSlots 和 useAttrs
在模板中通过$slots和$attrs来访问它们

<span class="token operator">&lt;</span>script setup<span class="token operator">></span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useSlots<span class="token punctuation">,</span> useAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
    <span class="token keyword">const</span> slots <span class="token operator">=</span> <span class="token function">useSlots</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>



## <span class="token number">9</span>，与普通的script一起使用
<span class="token operator">&lt;</span>script setup<span class="token operator">></span>可以和普通的<span class="token operator">&lt;</span>script<span class="token operator">></span>一起使用。普通的<span class="token operator">&lt;</span>script<span class="token operator">></span>在有这些需要的情况下或许会被使用到。

无法在<span class="token operator">&lt;</span>script setup<span class="token operator">></span>声明的选项，例如inheritAttrs或通过插件启用的自定义的选
声明命名导出
运行副作用或者创建只需要执行一次的对象

<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token comment">// 普通 &lt;script>, 在模块范围下执行(只执行一次)</span>
    <span class="token function">runSideEffectOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 声明额外的选项</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">customOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script setup<span class="token operator">></span>
    <span class="token comment">// 在 setup() 作用域中执行 (对每个实例皆如此)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>




<span class="token number">3.2</span> 除了 setup 外新增的


### 新增指令 v<span class="token operator">-</span>memo

v<span class="token operator">-</span>memod会记住一个模板的子树<span class="token punctuation">,</span>元素和组件上都可以使用。
该指令接收一个固定长度的数组作为依赖值进行<span class="token punctuation">[</span>记忆比对<span class="token punctuation">]</span>。
如果数组中的每个值都和上次渲染的时候相同，则整个子树的更新会被跳过。
即使是虚拟 <span class="token constant">DOM</span> 的 VNode 创建也将被跳过，因为子树的记忆副本可以被重用。
因此渲染的速度会非常的快。
<span class="token literal-property property">需要注意得是</span><span class="token operator">:</span>正确地声明记忆数组是很重要。
开发者有责任指定正确的依赖数组，以避免必要的更新被跳过。
<span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in listArr"</span>  <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"item.id"</span>  v<span class="token operator">-</span>memo<span class="token operator">=</span><span class="token string">"['valueA'，'valueB']"</span><span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>name   <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
v<span class="token operator">-</span>memod的指令使用较少，它的作用是<span class="token operator">:</span>缓存模板中的一部分数据。
只创建一次，以后就不会再更新了。也就是说用内存换取时间。




## style v<span class="token operator">-</span>bind将span变成红色

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>span<span class="token operator">></span> 我是红色 <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>  
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script setup<span class="token operator">></span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>
  span <span class="token punctuation">{</span>
    <span class="token comment">/* 使用v-bind绑定state中的变量 */</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">'state.color'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>  
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br></div></div></template>
