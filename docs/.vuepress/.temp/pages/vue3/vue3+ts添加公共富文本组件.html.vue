<template><h2 id="vue3-ts添加公共富文本组件" tabindex="-1"><a class="header-anchor" href="#vue3-ts添加公共富文本组件" aria-hidden="true">#</a> vue3+ts添加公共富文本组件</h2>
<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install wangeditor --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="新建一个editor-vue-的组件" tabindex="-1"><a class="header-anchor" href="#新建一个editor-vue-的组件" aria-hidden="true">#</a> 新建一个editor.vue 的组件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;style scoped>
.part_right {
    width: 100%;
    background: #f2f2f2;
    min-height: 100vh;
}
.list {
    width:96%;
    margin: 0 auto;

    /* background: gray; */
    padding-top: 50px;
}
.list ul li{
    list-style-type: none;
    display: flex;
    border-bottom: 1px solid #e6e5e5;
    min-height: 50px;
    background: #d5d5d5;
}
.list ul li>div{
    flex: 1;
    line-height: 50px;
}
.list ol li{
    list-style-type: none;
    display: flex;
    border-bottom: 1px solid #e6e5e5;
    min-height: 30px;
}
.list ol li>div{
    flex: 1;
    line-height: 30px;
}
.flright {
    float: right;
    margin-right: 2%;
}
&lt;/style>
&lt;template>
&lt;div>   
        &lt;div className="shop">
            &lt;div className="text-area" >
                &lt;div ref="editorElemMenu"
                    style="backgroundColor: '#f1f1f1'; border:'1px solid #ccc'"
                    className="editorElem-menu">
                &lt;/div>
                &lt;div style="height: 300;border: '1px solid #ccc',borderTop: 'none'" ref="editorElemBody" className="editorElem-body">
                &lt;/div>
            &lt;/div>
        &lt;/div>
&lt;/div>


&lt;/template>

&lt;script lang="ts">

import { onMounted ,reactive,toRefs,defineComponent,ref} from 'vue'
import E from 'wangeditor'

interface DataProps {
    editor: any;
    editorContent: string
    getContent:(ref?: any) => void
}



export default defineComponent({
    name:'Editor',
     components: {
    },
    props: {
        options: Object,
        value: String,
    },
    setup(props, { emit }) {
    const editorElemMenu = ref();
    const editorElemBody = ref();
    const data: DataProps = reactive({
            editorContent: '',
            editor:{},
            getContent:() => {
                console.log("111",props)
                data.editor.txt.html(props.value)
            }
        })
        onMounted(() => {
            let _this = this;
            const elemMenu = editorElemMenu.value;
            const elemBody = editorElemBody.value;
             data.editor = new E(elemMenu, elemBody)
              // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
                    data.editor.config.onchange = (html: any) => {
                        console.log(data.editor.txt.html())
                         data.editorContent = data.editor.txt.html()
                             // 向外部返回一个处理过的值
                         emit('onEditor', data.editor.txt.html())
                        emit('update:value', data.editor.txt.html())
                    }
                    data.editor.config.customUploadImg = function (files: any, insert: any ) {
                          // files 是 input 中选中的文件列表insert 是获取图片 url 后，插入到编辑器的方法
                          // let file;
                          // if (files &amp;&amp; files.length) {
                          //     file = files[0];
                          // } else {
                          //     return
                          // }
                          // 图片上传
                          console.log("files1",files)

                          const formData = new FormData();
                          formData.append('file', files[0]);
                          console.log("files",files,insert)
                          // formData.append('Banners',{id:editorinfo.id,naviChildId:editorinfo.naviChildId})
                      }

                    data.editor.config.menus = [
                        'head',  // 标题
                        'bold',  // 粗体
                        'fontSize',  // 字号
                        'fontName',  // 字体
                        'italic',  // 斜体
                        'underline',  // 下划线
                        'strikeThrough',  // 删除线
                        'foreColor',  // 文字颜色
                        'backColor',  // 背景颜色
                        'link',  // 插入链接
                        'list',  // 列表
                        'justify',  // 对齐方式
                        'quote',  // 引用
                        'emoticon',  // 表情
                        'image',  // 插入图片
                        'table',  // 表格
                        'video',  // 插入视频
                        'code',  // 插入代码
                        'undo',  // 撤销
                        'redo'  // 重复
                    ]
                    data.editor.config.uploadImgShowBase64 = true
                    data.editor.create()

                    // data.getContent()
        })
        const refData = toRefs(data);
        return {
            ...refData,
            editorElemMenu,
            editorElemBody
        }
    }
})
&lt;/script>




</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br></div></div><h3 id="调用的组件" tabindex="-1"><a class="header-anchor" href="#调用的组件" aria-hidden="true">#</a> 调用的组件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;style scoped>


&lt;/style>


&lt;template>
    &lt;div class="part_right">   
        &lt;Editor ref="Editor" :value="content" @onEditor="onEditor"/>
    &lt;/div>
&lt;/template>
&lt;script lang="ts">

import { onMounted ,reactive,toRefs,defineComponent,ref} from 'vue'
import Editor from '@/components/tool/editor.vue'

interface DataProps {
    content: string;
    showBack:(ref?: any) => void
}



export default defineComponent({
    name:'about',
     components: {
         Editor
    },
    setup() {
        const Editor = ref();
        const data: DataProps = reactive({
            content:'1',
            //获取富文本中的内容
            onEditor:(value: string) => {
                    console.log("父组件",value)
            },
            // 富文本回显
            showBack:() => {
                data.content = '回显内容公众号qdleader'
                console.log(" data.content", data.content)
                setTimeout(() =>{
                    Editor.value.getContent()
                })

            }
        })

        onMounted(() => {
            data.showBack()
        })
        const refData = toRefs(data);
        return {
            ...refData,
            Editor
        }
    }
})
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><p>这样就完成可以在vue3加ts中使用 富文本啦</p>
<p>拓展。。</p>
<p>有的同学需要自定义上传图片的接口</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>data.editor.config.customUploadImg = function (files: any, insert: any ) {
        // files 是 input 中选中的文件列表insert 是获取图片 url 后，插入到编辑器的方法
        // let file;
        // if (files &amp;&amp; files.length) {
        //     file = files[0];
        // } else {
        //     return
        // }
        // 图片上传
        console.log("files1",files)

        const formData = new FormData();
        formData.append('file', files[0]);
        console.log("files",files,insert)
        // formData.append('Banners',{id:editorinfo.id,naviChildId:editorinfo.naviChildId})

        // 把请求你们服务器地址获得的图片链接，替换到下面src里面即可
      data.editor.txt.append("&lt;img src='https://rmxgh-1305579889.cos.ap-beijing.myqcloud.com/img/64bec1a86509170772c19fc5f88d84e1.jpg' />")

    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></template>
