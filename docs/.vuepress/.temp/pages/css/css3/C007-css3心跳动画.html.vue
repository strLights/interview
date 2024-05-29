<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;title>Title&lt;/title>
    &lt;style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #34495e;
        }
        .heart{
            width: 200px;
            height: 200px;
            background: red;
            transform: rotate(45deg) scale(.5);
            animation-name: hd;
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }
        .heart::before{
            content: "";
            width: 200px;
            height: 200px;
            border-radius: 50%;
            position: absolute;
            background: red;
            transform: translateX(-100px);
        }
        .heart::after{
            content: "";
            width: 200px;
            height: 200px;
            border-radius: 50%;
            position: absolute;
            background: red;
            transform: translateY(-100px);
        }
        @keyframes hd {
            25%{
                transform: rotate(45deg) scale(1);
            }
            50%{
                transform: rotate(45deg) scale(.5);
            }
            75%{
                transform: rotate(45deg) scale(1);
            }
            to{
                transform: rotate(45deg) scale(.5);
            }
        }
    &lt;/style>
&lt;/head>
&lt;body>
    &lt;div class="heart">&lt;/div>
&lt;/body>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div></template>
