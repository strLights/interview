<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>uni.getSystemInfo(OBJECT)


获取屏幕高度宽度
screenWidth 屏幕宽度
screenHeight 屏幕高度
windowWidth 可使用窗口宽度
windowHeight 可使用窗口高度
windowTop 可使用窗口的顶部位置 App、H5
windowBottom 可使用窗口的底部位置 App、H5
statusBarHeight 状态栏的高
onLoad() {
	let _this = this
	uni.getSystemInfo({
	    success: function (res) {
	        console.log(res.model);
        	console.log(res.pixelRatio);
	        console.log(res.windowWidth);
	        console.log(res.windowHeight);
	        console.log(res.language);
	        console.log(res.version);
	        console.log(res.platform);
	    }
	});
},

获取元素的宽度、高度、定位
bottom:
dataset，如ref
proto:
height:
id
left:
right:
top:
width:
uni.getSystemInfo({
  success: function (res) { // res - 各种参数
  	//如 &lt;view class="box">&lt;/view>  	.select('.box')
    let obj = uni.createSelectorQuery().select('.类名')
    obj.boundingClientRect(function (data) { // data - 各种参数
      console.log(data)
    }).exec()
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>api[https://uniapp.dcloud.io/api/system/info?id=getsysteminfo]</p>
<p>| 手机型号 | 尺寸 | 代码获取屏幕大小 | 屏幕分辨率 | 倍图 | 状态栏高度 |	导航栏高度| 底部安全距离 | Tabbar高度 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| iPhone | 4/4S | 3.5英寸 | 320x480	| 640x960 | @2x	| 20 | 44 | 0 | 49 |
| iPhone | 5/5S/5C/SE |	4英寸 | 320x568	| 640x1136 | @2x | 20 | 44 | 0 | 49 |
| iPhone | 6/6S/7/8 | 4.7英寸 | 375x667	| 750x1334 | @2x | 20 | 44 | 0 | 49 |
| iPhone | 6P/6sP/7P/8P | 5.5英寸 | 414x736	| 1242x2208	| @3x | 20 | 44	| 0	| 49 |
| iPhone | X/XS/11 Pro | 5.8英寸 | 375x812	| 1125x2436	| @3x | 44 | 44	| 34 | 49 |
| iPhone | 11/XR | 6.1英寸 | 414x896 | 828x1792	| @2x | 44 | 44 | 34 | 49 |
| iPhone | XS Max/11 Pro Max | 6.5英寸 | 414x896	| 1242x2688	| @3x |44 | 44 | 34	| 49 |</p>
</template>
