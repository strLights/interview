<template><p>很简单其实，
比如我们来封装一个empty 空状态的组件</p>
<p>先写个
empty.vue</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div class="empty">
    &lt;img src="../../assets/img/empty.png" />
    &lt;div class="text">{{ text }}&lt;/div>
    &lt;slot />
  &lt;/div>
&lt;/template>

&lt;script lang="ts">
export default {
  props: {
    text: {
      type: String
    }
  }
}
&lt;/script>

&lt;style lang="scss" scoped>
.empty {
  padding: 210px 0;
  text-align: center;
}
.text{
    color: #9e9e9e;
}
&lt;/style>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>然后在 main.ts 中 引入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import empty from '@/components/common/empty.vue'

const app = createApp(App)
app.component('iEmpty',empty)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在用的组件直接用 即可</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;iEmpty />

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
