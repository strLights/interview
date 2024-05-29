<template><p>Mac下生成Android 签名证书.keystore</p>
<blockquote>
<p>1、打开终端，输入 cd /Library/Java/JavaVirtualMachines/jdk-12.0.2.jdk/Contents/Home/bin 回车 （每个人的Java安装不太一样，可以输入命令：/usr/libexec/java_home -V 去查看）</p>
</blockquote>
<blockquote>
<p>2、keytool -genkey -alias testalias -keyalg RSA -keysize 2048 -validity 36500 -keystore yourapp.keystore</p>
</blockquote>
<p>这里直接安装到了 /Library/Java/JavaVirtualMachines/jdk-12.0.2.jdk/Contents/Home/bin 这个目录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>testalias是证书别名，可修改为自己想设置的字符，建议使用英文字母和数字
test.keystore是证书文件名称，可修改为自己想设置的文件名称，也可以指定完整文件路径
36500是证书的有效期，表示100年有效期，单位天，建议时间设置长一点，避免证书过期

Enter keystore password:  //输入证书文件密码，输入完成回车  
Re-enter new password:   //再次输入证书文件密码，输入完成回车  
What is your first and last name?  
  [Unknown]:  //输入名字和姓氏，输入完成回车  
What is the name of your organizational unit?  
  [Unknown]:  //输入组织单位名称，输入完成回车  
What is the name of your organization?  
  [Unknown]:  //输入组织名称，输入完成回车  
What is the name of your City or Locality?  
  [Unknown]:  //输入城市或区域名称，输入完成回车  
What is the name of your State or Province?  
  [Unknown]:  //输入省/市/自治区名称，输入完成回车  
What is the two-letter country code for this unit?  
  [Unknown]:  //输入国家/地区代号（两个字母），中国为CN，输入完成回车  
Is CN=XX, OU=XX, O=XX, L=XX, ST=XX, C=XX correct?  
  [no]:  //确认上面输入的内容是否正确，输入y，回车  

Enter key password for &lt;testalias>  
        (RETURN if same as keystore password):  //确认证书密码与证书文件密码一样（HBuilder|HBuilderX要求这两个密码一致），直接回车就可以


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="查看证书信息" tabindex="-1"><a class="header-anchor" href="#查看证书信息" aria-hidden="true">#</a> 查看证书信息</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>keytool -list -v -keystore yourapp.keystore  
Enter keystore password: //输入密码，回车
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="更改密钥库类型" tabindex="-1"><a class="header-anchor" href="#更改密钥库类型" aria-hidden="true">#</a> 更改密钥库类型</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>keytool -importkeystore -srckeystore yourapp.keystore -destkeystore yourapp.keystore -deststoretype JKS
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>以上步骤完成即可在uniapp中打包了。</p>
</template>
