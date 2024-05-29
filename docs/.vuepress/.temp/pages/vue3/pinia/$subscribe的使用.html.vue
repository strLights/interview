<template><p>监听state状态变化
订阅state的值：你可以通过store的$subscribe()方法去观察state的改变，类似于subscribe方法。与常规watch()相比，使用$subscribe()的优势在于，在补丁发布后，订阅只会触发一次。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>numerStore.$subscribe((mutation,state)=>{
  mutation.counter
  mutation.name
  mutation.isAdmin
  localStorage.setItem("numer",JSON.stringify(state))
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>默认情况下，状态订阅被绑定到添加它们的组件上(如果存储在组件的setup()中)。这就以为着当组件被卸载的时候，将自动移除。如果你想再组件被移除后继续保持它们，可以通过设置{detached:true}作为第二个参数来从当前组件中分离状态订阅。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const someStore = useSomeStore()
someStore.$subscribe(callback, { detached: true })
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
