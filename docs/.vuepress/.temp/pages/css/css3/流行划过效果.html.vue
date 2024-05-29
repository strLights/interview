<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* 开始 */
body {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  overflow: hidden;
  display: flex;
  font-family: 'Anton', sans-serif;
  justify-content: center;
  align-items: center;
}

.night {
  position: fixed;
  left:0;
  top: 0;
  width: 100vw;
  height: 100vh;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
  -webkit-animation: sky 200000ms linear infinite;
          animation: sky 200000ms linear infinite;
}

.shooting_star {
  position: absolute;
  left: 10%;
  top: 50%;
  height: 2px;
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  border-radius: 999px;
  -webkit-filter: drop-shadow(0 0 6px #699bff);
          filter: drop-shadow(0 0 6px #699bff);
  -webkit-animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
          animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}
.shooting_star::before, .shooting_star::after {
  content: '';
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
  -webkit-transform: translateX(50%) rotateZ(45deg);
          transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  -webkit-animation: shining 3000ms ease-in-out infinite;
          animation: shining 3000ms ease-in-out infinite;
}
.shooting_star::after {
  -webkit-transform: translateX(50%) rotateZ(-45deg);
          transform: translateX(50%) rotateZ(-45deg);
}
.shooting_star:nth-child(1) {
  top: calc(10% - 185px);
  left: calc(10% - 150px);
  -webkit-animation-delay: 8971ms;
          animation-delay: 8971ms;
}
.shooting_star:nth-child(1)::before, .shooting_star:nth-child(1)::after, .shooting_star:nth-child(1)::after {
  -webkit-animation-delay: 8971ms;
          animation-delay: 8971ms;
}
.shooting_star:nth-child(2) {
  top: calc(15% - 50px);
  left: calc(15% - 179px);
  -webkit-animation-delay: 9256ms;
          animation-delay: 9256ms;
}
.shooting_star:nth-child(2)::before, .shooting_star:nth-child(2)::after, .shooting_star:nth-child(2)::after {
  -webkit-animation-delay: 9256ms;
          animation-delay: 9256ms;
}
.shooting_star:nth-child(3) {
  top: calc(20% - -146px);
  left: calc(20% - 135px);
  -webkit-animation-delay: 8700ms;
          animation-delay: 8700ms;
}
.shooting_star:nth-child(3)::before, .shooting_star:nth-child(3)::after, .shooting_star:nth-child(3)::after {
  -webkit-animation-delay: 8700ms;
          animation-delay: 8700ms;
}
.shooting_star:nth-child(4) {
  top: calc(30% - -77px);
  left: calc(30% - 157px);
  -webkit-animation-delay: 3147ms;
          animation-delay: 3147ms;
}
.shooting_star:nth-child(4)::before, .shooting_star:nth-child(4)::after, .shooting_star:nth-child(4)::after {
  -webkit-animation-delay: 3147ms;
          animation-delay: 3147ms;
}
.shooting_star:nth-child(5) {
  top: calc(40% - -183px);
  left: calc(40% - 8px);
  -webkit-animation-delay: 6588ms;
          animation-delay: 6588ms;
}
.shooting_star:nth-child(5)::before, .shooting_star:nth-child(5)::after, .shooting_star:nth-child(5)::after {
  -webkit-animation-delay: 6588ms;
          animation-delay: 6588ms;
}
.shooting_star:nth-child(6) {
  top: calc(50% - -29px);
  left: calc(50% - 195px);
  -webkit-animation-delay: 8009ms;
          animation-delay: 8009ms;
}
.shooting_star:nth-child(6)::before, .shooting_star:nth-child(6)::after, .shooting_star:nth-child(6)::after {
  -webkit-animation-delay: 8009ms;
          animation-delay: 8009ms;
}
.shooting_star:nth-child(7) {
  top: calc(60% - 95px);
  left: calc(60% - 69px);
  -webkit-animation-delay: 5420ms;
          animation-delay: 5420ms;
}
.shooting_star:nth-child(7)::before, .shooting_star:nth-child(7)::after, .shooting_star:nth-child(7)::after {
  -webkit-animation-delay: 5420ms;
          animation-delay: 5420ms;
}
.shooting_star:nth-child(8) {
  top: calc(70% - -59px);
  left: calc(70% - 70px);
  -webkit-animation-delay: 9378ms;
          animation-delay: 9378ms;
}
.shooting_star:nth-child(8)::before, .shooting_star:nth-child(8)::after, .shooting_star:nth-child(8)::after {
  -webkit-animation-delay: 9378ms;
          animation-delay: 9378ms;
}
.shooting_star:nth-child(9) {
  top: calc(80% - 76px);
  left: calc(80% - 238px);
  -webkit-animation-delay: 2845ms;
          animation-delay: 2845ms;
}
.shooting_star:nth-child(9)::before, .shooting_star:nth-child(9)::after, .shooting_star:nth-child(9)::after {
  -webkit-animation-delay: 2845ms;
          animation-delay: 2845ms;
}
.shooting_star:nth-child(10) {
  top: calc(90% - 83px);
  left: calc(90% - 6px);
  -webkit-animation-delay: 5205ms;
          animation-delay: 5205ms;
}
.shooting_star:nth-child(10)::before, .shooting_star:nth-child(10)::after, .shooting_star:nth-child(10)::after {
  -webkit-animation-delay: 5205ms;
          animation-delay: 5205ms;
}
.shooting_star:nth-child(11) {
  top: calc(100% - -137px);
  left: calc(100% - 267px);
  -webkit-animation-delay: 808ms;
          animation-delay: 808ms;
}
.shooting_star:nth-child(11)::before, .shooting_star:nth-child(11)::after, .shooting_star:nth-child(11)::after {
  -webkit-animation-delay: 808ms;
          animation-delay: 808ms;
}
.shooting_star:nth-child(12) {
  top: calc(50% - 12px);
  left: calc(50% - 8px);
  -webkit-animation-delay: 2406ms;
          animation-delay: 2406ms;
}
.shooting_star:nth-child(12)::before, .shooting_star:nth-child(12)::after, .shooting_star:nth-child(12)::after {
  -webkit-animation-delay: 2406ms;
          animation-delay: 2406ms;
}
.shooting_star:nth-child(13) {
  top: calc(50% - 148px);
  left: calc(50% - 47px);
  -webkit-animation-delay: 7566ms;
          animation-delay: 7566ms;
}
.shooting_star:nth-child(13)::before, .shooting_star:nth-child(13)::after, .shooting_star:nth-child(13)::after {
  -webkit-animation-delay: 7566ms;
          animation-delay: 7566ms;
}
.shooting_star:nth-child(14) {
  top: calc(50% - -28px);
  left: calc(50% - 75px);
  -webkit-animation-delay: 7634ms;
          animation-delay: 7634ms;
}
.shooting_star:nth-child(14)::before, .shooting_star:nth-child(14)::after, .shooting_star:nth-child(14)::after {
  -webkit-animation-delay: 7634ms;
          animation-delay: 7634ms;
}
.shooting_star:nth-child(15) {
  top: calc(50% - -37px);
  left: calc(50% - 203px);
  -webkit-animation-delay: 7743ms;
          animation-delay: 7743ms;
}
.shooting_star:nth-child(15)::before, .shooting_star:nth-child(15)::after, .shooting_star:nth-child(15)::after {
  -webkit-animation-delay: 7743ms;
          animation-delay: 7743ms;
}
.shooting_star:nth-child(16) {
  top: calc(50% - 41px);
  left: calc(50% - 256px);
  -webkit-animation-delay: 2888ms;
          animation-delay: 2888ms;
}
.shooting_star:nth-child(16)::before, .shooting_star:nth-child(16)::after, .shooting_star:nth-child(16)::after {
  -webkit-animation-delay: 2888ms;
          animation-delay: 2888ms;
}
.shooting_star:nth-child(17) {
  top: calc(50% - -35px);
  left: calc(50% - 121px);
  -webkit-animation-delay: 5864ms;
          animation-delay: 5864ms;
}
.shooting_star:nth-child(17)::before, .shooting_star:nth-child(17)::after, .shooting_star:nth-child(17)::after {
  -webkit-animation-delay: 5864ms;
          animation-delay: 5864ms;
}
.shooting_star:nth-child(18) {
  top: calc(50% - 73px);
  left: calc(50% - 225px);
  -webkit-animation-delay: 7883ms;
          animation-delay: 7883ms;
}
.shooting_star:nth-child(18)::before, .shooting_star:nth-child(18)::after, .shooting_star:nth-child(18)::after {
  -webkit-animation-delay: 7883ms;
          animation-delay: 7883ms;
}
.shooting_star:nth-child(19) {
  top: calc(50% - -69px);
  left: calc(50% - 47px);
  -webkit-animation-delay: 3339ms;
          animation-delay: 3339ms;
}
.shooting_star:nth-child(19)::before, .shooting_star:nth-child(19)::after, .shooting_star:nth-child(19)::after {
  -webkit-animation-delay: 3339ms;
          animation-delay: 3339ms;
}
.shooting_star:nth-child(20) {
  top: calc(50% - 162px);
  left: calc(50% - 129px);
  -webkit-animation-delay: 7963ms;
          animation-delay: 7963ms;
}
.shooting_star:nth-child(20)::before, .shooting_star:nth-child(20)::after, .shooting_star:nth-child(20)::after {
  -webkit-animation-delay: 7963ms;
          animation-delay: 7963ms;
}

@-webkit-keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}

@keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}
@-webkit-keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
@-webkit-keyframes shooting {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(300px);
            transform: translateX(300px);
  }
}
@keyframes shooting {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(300px);
            transform: translateX(300px);
  }
}
@-webkit-keyframes sky {
  0% {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
  }
  100% {
    -webkit-transform: rotate(405deg);
            transform: rotate(405deg);
  }
}
@keyframes sky {
  0% {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
  }
  100% {
    -webkit-transform: rotate(405deg);
            transform: rotate(405deg);
  }
}

/* 结束 */
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!-- 开始 -->
       &lt;div class="night">
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
           &lt;div class="shooting_star">&lt;/div>
       &lt;/div>
       &lt;!-- 结束 -->
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></template>
