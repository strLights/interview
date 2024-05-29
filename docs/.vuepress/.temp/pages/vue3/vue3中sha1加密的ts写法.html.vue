<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

const hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
// const b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
const chrsz = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

// let binb2hex;


// function b64_sha1(s: string): string { return binb2b64(coreSha1(str2binb(s), s.length * chrsz)); }
// function str_sha1(s: string): string { return binb2str(coreSha1(str2binb(s), s.length * chrsz)); }
// function hex_hmac_sha1(key: string, data: string): string { return binb2hex(core_hmac_sha1(key, data)); }
// function b64_hmac_sha1(key: string, data: string): string { return binb2b64(core_hmac_sha1(key, data)); }
// function str_hmac_sha1(key: string, data: string): string { return binb2str(core_hmac_sha1(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */

// function sha1_vm_test(): boolean {
//     return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
// }

/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function rol(num: number, cnt: number): number {
    return (num &lt;&lt; cnt) | (num >>> (32 - cnt));
}

function safeAdd(x: number, y: number): number {
    const lsw = (x &amp; 0xFFFF) + (y &amp; 0xFFFF);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw &lt;&lt; 16) | (lsw &amp; 0xFFFF);
}
function sha1Ft(t: number, b: number, c: number, d: number): number {
    if (t &lt; 20) return (b &amp; c) | ((~b) &amp; d);
    if (t &lt; 40) return b ^ c ^ d;
    if (t &lt; 60) return (b &amp; c) | (b &amp; d) | (c &amp; d);
    return b ^ c ^ d;
}

/*
 * Determine the appropriate additive constant for the current iteration
 */
function sha1Kt(t: number): number {
    return (t &lt; 20) ? 1518500249 : (t &lt; 40) ? 1859775393 :
        (t &lt; 60) ? -1894007588 : -899497514;
}

function coreSha1(x: number[], len: number): number[] {
    /* append padding */
    x[len >> 5] |= 0x80 &lt;&lt; (24 - len % 32);
    x[((len + 64 >> 9) &lt;&lt; 4) + 15] = len;

    const w = Array(80);
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    let e = -1009589776;

    for (let i = 0; i &lt; x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        const olde = e;

        for (let j = 0; j &lt; 80; j++) {
            if (j &lt; 16) w[j] = x[i + j];
            else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            const t = safeAdd(safeAdd(rol(a, 5), sha1Ft(j, b, c, d)),
                safeAdd(safeAdd(e, w[j]), sha1Kt(j)));
            e = d;
            d = c;
            c = rol(b, 30);
            b = a;
            a = t;
        }

        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
        e = safeAdd(e, olde);
    }
    return [a, b, c, d, e];

}

/*
 * Perform the appropriate tripconst combination function for the current
 * iteration
 */


/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
// function core_hmac_sha1(key: string, data: string): number[] {
//     let bkey = str2binb(key);
//     if (bkey.length > 16) bkey = coreSha1(bkey, key.length * chrsz);

//     const ipad = Array(16), opad = Array(16);
//     for (const i = 0; i &lt; 16; i++) {
//         ipad[i] = bkey[i] ^ 0x36363636;
//         opad[i] = bkey[i] ^ 0x5C5C5C5C;
//     }

//     const hash = coreSha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
//     return coreSha1(opad.concat(hash), 512 + 160);
// }

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


/*
 * Bitwise rotate a 32-bit number to the left.
 */


/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
function str2binb(str: string): number[] {
    const bin: number[] = [];
    const mask = (1 &lt;&lt; chrsz) - 1;
    for (let i = 0; i &lt; str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) &amp; mask) &lt;&lt; (32 - chrsz - i % 32);
    return bin;
}

/*
 * Convert an array of big-endian words to a string
 */
// function binb2str(bin: number[]): string {
//     const str = "";
//     const mask = (1 &lt;&lt; chrsz) - 1;
//     for (const i = 0; i &lt; bin.length * 32; i += chrsz)
//         str += String.fromCharCode((bin[i >> 5] >>> (32 - chrsz - i % 32)) &amp; mask);
//     return str;
// }

/*
 * Convert an array of big-endian words to a hex string.
 */
function binb2hex(binarray: number[]): string {
    const hexTab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    let str = "";
    for (let i = 0; i &lt; binarray.length * 4; i++) {
        str += hexTab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) &amp; 0xF) +
        hexTab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) &amp; 0xF);
    }
    return str;
}

/*
 * Convert an array of big-endian words to a base-64 string
 */
// function binb2b64(binarray: number[]): string {
//     const tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
//     const str = "";
//     for (const i = 0; i &lt; binarray.length * 4; i += 3) {
//         const tripconst = (((binarray[i >> 2] >> 8 * (3 - i % 4)) &amp; 0xFF) &lt;&lt; 16)
//             | (((binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) &amp; 0xFF) &lt;&lt; 8)
//             | ((binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) &amp; 0xFF);
//         for (const j = 0; j &lt; 4; j++) {
//             if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
//             else str += tab.charAt((tripconst >> 6 * (3 - j)) &amp; 0x3F);
//         }
//     }
//     return str;
// }

export function hexSha1(s: string): string { return binb2hex(coreSha1(str2binb(s), s.length * chrsz)).toUpperCase(); }
export function hexSha2(s: string): string { return binb2hex(coreSha1(str2binb(s), s.length * chrsz)); }
// 字符串加密成 hex 字符串

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br></div></div></template>
