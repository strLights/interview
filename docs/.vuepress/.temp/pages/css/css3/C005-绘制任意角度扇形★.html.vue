<template><h1 id="c005-绘制任意角度扇形★" tabindex="-1"><a class="header-anchor" href="#c005-绘制任意角度扇形★" aria-hidden="true">#</a> C005-绘制任意角度扇形★</h1>
<blockquote>
<p>扇形制作原理，底部一个纯色原形，里面2个相同颜色的半圆，可以是白色,内部半圆按一定角度变化，就可以产生出扇形效果</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>       .shanxing{
            position: relative;
            width: 200px;
            height: 200px;
            border-radius: 100px;
            background-color: yellow;
        }
        .sx1{
            position: absolute;
            width: 200px;
            height: 200px;
            transform: rotate(0deg);
            clip: rect(0px,100px,200px,0px); /*这个clip属性用来绘制半圆，在clip的rect范围内的内容显示出来，使用clip属性，元素必须是absolute的 */
            border-radius: 100px;
            background-color: #f00;
            /*-webkit-animation: an1 2s infinite linear; */
        }


        .sx2{
            position: absolute;
            width: 200px;
            height: 200px;
            transform: rotate(0deg);
            clip: rect(0px,100px,200px,0px);
            border-radius: 100px;
            background-color: #f00;
            /*-webkit-animation: an2 2s infinite linear;*/
        }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   
   
   
      /*绘制一个60度扇形*/
        .shanxing1 .sx1{transform: rotate(-30deg);}
        .shanxing1 .sx2{transform: rotate(-150deg);}

        /*绘制一个85度扇形*/
        .shanxing2 .sx1{transform: rotate(-45deg);}
        .shanxing2 .sx2{transform: rotate(-140deg);}

        /*绘制一个向右扇形，90度扇形*/
        .shanxing3 .sx1{transform: rotate(45deg);}
        .shanxing3 .sx2{transform: rotate(-45deg);}

        /*绘制一个颜色扇形 */
        .shanxing4 .sx1{transform: rotate(45deg);background-color: #fff;}
        .shanxing4 .sx2{transform: rotate(-45deg);background-color: #fff;}

        /*绘制一个不同颜色半圆夹角 */
        .shanxing5 .sx1{transform: rotate(45deg);background-color: #f00;}
        .shanxing5 .sx2{transform: rotate(-45deg);background-color: #0f0;}
		
	
		
   &lt;p>/*绘制一个60度扇形*/&lt;/p>
	&lt;div class="shanxing shanxing1">
		&lt;div class="sx1">&lt;/div>
		 &lt;div class="sx2">&lt;/div>
	&lt;/div>
	&lt;p>/*绘制一个85度扇形*/&lt;/p>
	&lt;div class="shanxing shanxing2">
		&lt;div class="sx1">&lt;/div>
		 &lt;div class="sx2">&lt;/div>
	&lt;/div>
	&lt;p>/*绘制一个向右扇形，90度扇形*/&lt;/p>
	&lt;div class="shanxing shanxing3">
		&lt;div class="sx1">&lt;/div>
		 &lt;div class="sx2">&lt;/div>
	&lt;/div>
	&lt;p>/*绘制一个颜色扇形 */&lt;/p>
	&lt;div class="shanxing shanxing4">
		&lt;div class="sx1">&lt;/div>
		 &lt;div class="sx2">&lt;/div>
	&lt;/div>

	&lt;p>/*绘制一个不同颜色半圆夹角 */&lt;/p>
	&lt;div class="shanxing shanxing5">
		&lt;div class="sx1">&lt;/div>
		 &lt;div class="sx2">&lt;/div>
	&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div></template>
