# add-ons
学习FF插件开发的时候写的一些简单插件。

## 安装
- 压缩为zip文件
- 将后缀修改为xpi
- FF浏览器CTRL/O打开安装即可

## 安装失败

可能会提示"未通过验证，禁止安装未签名的扩展"。**解决方法**：地址栏输入about:config，搜索xpinstall.signatures.required，右键，切换，值改为false，即可。