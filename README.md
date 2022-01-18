# macaddr-chrome-extension

#### 介绍
chrome 获取mac地址插件

#### 软件架构
参考chrome插件开发规范


#### 安装教程

1. 将插件根目录拷贝到任意磁盘目录，一旦选定切勿搬移，目录名不包含空格。
2. 修改manifest.json 中matches属性为要启用的网站域名
3. 安装chrome浏览器，打开浏览器 => 更多工具 => 扩展程序 => 开发者模式 => 加载已解压的扩展程序 => 选中插件根目录完成。
4. 查看插件id,确保com.yd.macaddr.nativemessage.json 文件中chrome-extension 的id保持一致。关闭开发者模式。
5. 点击运行host-install.bat 显示安装成功。（运行host-uninstall.bat 进行下载）

#### 使用说明

1. 以上步骤完成后，在项目代码中即可从浏览器localstorage中获取mac地址。
   例：var mac = localStorage.getItem("mac")
