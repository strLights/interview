<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if (!myreg.test(this.phone)) {
		this.$toast("请输入正确手机号码");
	} else {
		
	}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
