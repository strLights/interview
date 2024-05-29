<template><h1 id="h5字体不局中-有时候会被切掉一块" tabindex="-1"><a class="header-anchor" href="#h5字体不局中-有时候会被切掉一块" aria-hidden="true">#</a> h5字体不局中，有时候会被切掉一块</h1>
<p>当我们写h5时候，加上了line-height和height一致，
但是还是会碰到andriod 有的机型，如有overflow：hidden会是被切掉头部一两个像素情况</p>
<p>设置line-height 也不生效</p>
<p>解决：</p>
<p>display:flex;
align-items:center; 或 align-items:baseline;</p>
</template>
