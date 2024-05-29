<template><h1 id="c006-css实现三角形★-html" tabindex="-1"><a class="header-anchor" href="#c006-css实现三角形★-html" aria-hidden="true">#</a> C006-css实现三角形★.html</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;meta charset="utf-8">
		&lt;title>&lt;/title>
	&lt;/head>
	&lt;style type="text/css">
		.trangle-top {
			width: 0;
			height: 0;
			border:50px solid transparent;
			border-bottom-color: red;
		}
		.trangle-bottom {
			width: 0;
			height: 0;
			border:50px solid transparent;
			border-top-color: red;
		}
		.trangle-left {
			width: 0;
			height: 0;
			border:50px solid transparent;
			border-right-color: red;
		}
				.trangle-right {
			width: 0;
			height: 0;
			border:50px solid transparent;
			border-left-color: red;
		}
	/* 	.tra-top {
			width: 0;
			height: 0;
			border-left:50px solid red;
			border-right:50px solid #333;
			border-bottom:50px solid green;
		} */
		
		
		
		.tra-left-top {
			width: 0;
			height: 0;
			border-left:50px solid red;
			border-right:50px solid #fff;
			border-bottom:50px solid #fff;
		}
				.tra-right-top {
			width: 0;
			height: 0;
			border-left:50px solid #fff;
			border-right:50px solid red;
			border-bottom:50px solid #fff;
		}
		.tra-left-bottom {
			width: 0;
			height: 0;
			border-left:50px solid red;
			border-right:50px solid #fff;
			border-top:50px solid #fff;
		}
		.tra-right-bottom {
			width: 0;
			height: 0;
			border-left:50px solid #fff;
			border-right:50px solid red;
			border-top:50px solid #fff;
		}
	&lt;/style>
	&lt;body>
		&lt;!-- 向上的三角形 -->
		&lt;div class="trangle-top">
			
		&lt;/div>
	
		&lt;!-- 向左的三角形 -->
		&lt;div class="trangle-left">
			
		&lt;/div>
					&lt;!-- 向下的三角形 -->
		&lt;div class="trangle-bottom">
			
		&lt;/div>
		
				&lt;!-- 向右的三角形 -->
		&lt;div class="trangle-right">
			
		&lt;/div>
		
		
		
		
		&lt;!-- 直角三角形 直角在左上--> 
		&lt;div class="tra-left-top">
			
		&lt;/div>
				&lt;!-- 直角三角形 直角在右上--> 
		&lt;div class="tra-right-top">
			
		&lt;/div>
				&lt;!-- 直角三角形 直角在左下--> 
		&lt;div class="tra-left-bottom">
			
		&lt;/div>
				&lt;!-- 直角三角形 直角在右下--> 
		&lt;div class="tra-right-bottom">
			
		&lt;/div>
		
	&lt;/body>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br></div></div></template>
