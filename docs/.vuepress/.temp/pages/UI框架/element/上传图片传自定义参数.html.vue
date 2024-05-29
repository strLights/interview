<template><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;el-form-item label="上传促销页顶图">
    &lt;el-upload
        class="avatar-uploader"
        v-loading="loading"
        :action="uploadUrl"
        :show-file-list="false"
        :on-success="handleAvatarSuccess1.bind(this,index)"
        :before-upload="beforeAvatarUpload"
        >
        &lt;img v-if="item.shelves_img" :src="item.shelves_img" class="pic" />
        &lt;i v-else class="el-icon-plus avatar-uploader-icon">&lt;/i>
    &lt;/el-upload>
    &lt;el-dialog :visible.sync="dialogImageVisible">
        &lt;img width="100%" :src="dialogImageUrl" alt />
    &lt;/el-dialog>
&lt;/el-form-item>




</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>handleAvatarSuccess1(index,res, file) {
     console.log("成功",index,res, file)
   this.loading = false;
   this.newArr[index].shelves_img = res.data.picurl
 //   this.$set(this.form, "pic", res.data.picurl);
 },
 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
