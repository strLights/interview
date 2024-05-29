<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>setUp() {
  console.log("1-开始创建组件")

  onBeforeMount(() => {
    console.log("2.组件挂载页面之前执行------onBeforeMount")
  })

  onMounted(() => {
    console.log("3.组件挂载到页面之后执行----onMounted")
  })

  onBeforeUpdate(() => {
    console.log("4.组件更新之前------onBeforeUpdate")
  })

  onUpdated(() => {
    console.log("5.组件更新之后 --------onUpdated")
  })

  onBeforeUunmount(() => {
    console.log("组件卸载之前执行")
  })

  onUnmounted(() => {
    console.log("组件卸载之后执行")
  })

  onActivated(() => {
      console.log("活跃组件onActivated在keep-alive中使用")
  })

  onDeactivated(() => {
      console.log("离开活跃页面onDeactivated 在keep-alive组件中使用")
  })

  onErrorCaptured(() => {
      console.log("当捕获一个来自子孙组件异常时候激活的钩子函数")
  })
}








</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="vue2与vue3生命周期对比" tabindex="-1"><a class="header-anchor" href="#vue2与vue3生命周期对比" aria-hidden="true">#</a> vue2与vue3生命周期对比</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// beforeCreate -> use setup()
 // created -> use setup()
 // beforeMount -> onBeforeMount
 // mounted -> onMounted
 // beforeUpdate -> onBeforeUpdate
 // updated -> onUpdated
 // beforeDestroy -> onBeforeUnmount
 // destroyed -> onUnmounted
 // errorCaptured -> onErrorCaptured
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="vue3新增的两个函数" tabindex="-1"><a class="header-anchor" href="#vue3新增的两个函数" aria-hidden="true">#</a> vue3新增的两个函数</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>onRenderTracked((event) => {
    console.log("状态跟踪",onRenderTracked)
})

onRenderTriggered((event) => {
  console.log("状态跟踪钩子函数",onRenderTriggered)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
