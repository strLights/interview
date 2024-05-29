<template><p>以vue 中使用视频插件为例：</p>
<h1 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install vue-video-player --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'video.js/dist/video-js.css'


// import 'vue-video-player/src/custom-theme.css'
Vue.use(VueVideoPlayer, /* {
    options: global default options,
    events: global videojs events
  } */)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="组件中使用" tabindex="-1"><a class="header-anchor" href="#组件中使用" aria-hidden="true">#</a> 组件中使用</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
    &lt;!--在视频外面加一个容器-->
    &lt;div class="input_video">
    &lt;video-player  class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :options="playerOptions"
    >&lt;/video-player>
    &lt;/div>
&lt;/template>
&lt;script>
    export default {
        name : 'BusImg',
        data () {
            return {
                // 视频播放
                playerOptions : {
                    playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度
                    autoplay : false, //如果true,浏览器准备好时开始回放。
                    muted : false, // 默认情况下将会消除任何音频。
                    loop : false, // 视频一结束就重新开始。
                    preload : 'auto', // 建议浏览器在&lt;video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language : 'zh-CN',
                    aspectRatio : '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid : true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources : [ {
                        type : "",
                        src : 'http://www.html5videoplayer.net/videos/madagascar3.mp4'//url地址
                    } ],
                    poster : "", //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage : '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar : {
                        timeDivider : true,//当前时间和持续时间的分隔符
                        durationDisplay : true,//显示持续时间
                        remainingTimeDisplay : false,//是否显示剩余时间功能
                        fullscreenToggle : true  //全屏按钮
                    }
                }
            }
        }
    }
&lt;/script>
&lt;style>
    .input_video{
        width: 400px;
        height: 400px;
        margin: 0 auto;

    }
&lt;/style>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h1 id="闭坑小技巧" tabindex="-1"><a class="header-anchor" href="#闭坑小技巧" aria-hidden="true">#</a> 闭坑小技巧</h1>
<h2 id="tip1" tabindex="-1"><a class="header-anchor" href="#tip1" aria-hidden="true">#</a> tip1:</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>当我们要控制播放进度时候要设置currentTime，你会发现this.$refs.videoPlayer.duration在一些浏览器上会打印（至少现在是ios的微信浏览器是这样）undefined或NAN，你可以用下面这个方法：

  let stop = setInterval(() => {
		_this.duration = document.getElementsByClassName("vjs-tech")[0].duration;
		if (_this.duration) {
			console.log("打印时长",document.getElementsByClassName("vjs-tech")[0].duration)
			document.getElementsByClassName("vjs-tech")[0].currentTime = currentTime
			clearInterval(stop);
		}
	}, 150);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
