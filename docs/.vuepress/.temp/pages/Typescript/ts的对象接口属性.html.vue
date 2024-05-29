<template><h1 id="ts的对象接口属性" tabindex="-1"><a class="header-anchor" href="#ts的对象接口属性" aria-hidden="true">#</a> ts的对象接口属性</h1>
<h2 id="接口类型" tabindex="-1"><a class="header-anchor" href="#接口类型" aria-hidden="true">#</a> 接口类型</h2>
<h3 id="可选属性" tabindex="-1"><a class="header-anchor" href="#可选属性" aria-hidden="true">#</a> 可选属性</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>interface IState {
    name: string,
    age?:number  //可有可无
}

let obj: IState
obj = {
    name: 'qdleader',
    age:12
} 
obj = {
    name: 'qdleader',
} 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="属性个数不确定时候" tabindex="-1"><a class="header-anchor" href="#属性个数不确定时候" aria-hidden="true">#</a> 属性个数不确定时候</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>interface IState2 {
    name: string,
    age: number,
    [propName:string]:any
}
let obj2: IState2 = {
    name: 'qdleader',
    age: 12,
    sex:'male',
    isMarry:true
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性" aria-hidden="true">#</a> 只读属性</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>interface IState3 {
    readonly name: string,
}
let obj3: IState3
obj3 = {
     name: 'qdleader',
} 
obj3.name = 'qdleader1' // name 一旦定义赋值了就禁止修改

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="接口继承" tabindex="-1"><a class="header-anchor" href="#接口继承" aria-hidden="true">#</a> 接口继承</h2>
<p>如果两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来，通过继承来实现复用</p>
<p>语法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>interface 接口2 extends 接口1 {
    属性1： 类型1， // 接口2中特有的类型 
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>interface a { 
    x: number; 
    y: number 
}


// 继承 a
// 使用 extends(继承)关键字实现了接口
interface b extends a {
  z: number
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>// 继承后，b 就有了 a 的所有属性和方法(此时，b 同时有 x、y、z 三个属性)</p>
<h2 id="接口和类型-的区别" tabindex="-1"><a class="header-anchor" href="#接口和类型-的区别" aria-hidden="true">#</a> 接口和类型 的区别</h2>
<p>interface（接口）和 type（类型别名）的对比：</p>
<p>相同点：都可以给对象指定类型</p>
<p>不同点:
接口，只能为对象指定类型。它可以继承。
类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名</p>
<p>先有的 interface，后有的 type,推荐使用 type
// 接口的写法-------------
interface IPerson {
name: string,
age: number
}</p>
<p>const user1：IPerson = {
name: 'a',
age: 20
}</p>
<p>// type的写法-------------
type Person  = {
name: string,
age: number
}
const user2：Person = {
name: 'b',
age: 20
}</p>
</template>
