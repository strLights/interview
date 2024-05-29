<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>        .ball {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            position: absolute;
            top: 0;
            background-image: radial-gradient(at 50px 50px , rgba(255,255,255,0),rgba(96,197,241,1));
            animation: aaa 1s ease-in alternate infinite;
        }

        .bg {
            width: 2rem;
            height: 1rem;
            border-radius: 100px 50px;
            animation: bg 1s ease-in alternate infinite;
            position: absolute;
            top: 3rem;
            left: 0;
            background-image:radial-gradient(rgba(191,191,191,0.7),rgba(255,255,255,0));
        }

        @keyframes aaa {
            0% {
                top: 0;
            }
            100% {
                top: 0.5rem;
            }
        }
		
		        @keyframes bg {
            0% {
                transform: scale(0.4);
            }
            100% {
                transform: scale(1);
            }
        }
		
		 // .box {
        //     width: 100%;
        //     margin: 0 auto;
        //     position: relative;
        // }
		
		                &lt;div class="box">
                            &lt;div class="ball">&lt;/div>
                            &lt;div class="bg">&lt;/div>
                        &lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div></template>
