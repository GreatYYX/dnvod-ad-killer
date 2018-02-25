# Dnvod Ad Killer

[鉴于多瑙基本就是海外的国人在使用，这儿就不写英文了]

采用中间人攻击的方法，移除多瑙(dnvod.tv)的视频广告及等待时间。

HTTP Proxy is based on [proxy2](https://github.com/inaz2/proxy2).

# 实现思路

请移步我的blog：[http://blog.yyx.me/posts/dnvod-ad-killer.html](http://blog.yyx.me/posts/dnvod-ad-killer.html)

# 使用方法

需要有Python2.7的环境，`python mitm2.py`，默认监听开启在`::1:8899`。

浏览器中安装proxy插件并指向本地proxy即可。

# 使用方法（小白版）

- Window用户请先安装Python2.7（Mac和Linux用户跳过）。
- 下载dnvod-ad-killer，点这个界面右上角Clone and download，然后Download Zip。
- 打开terminal / cmd (Windows)，然后`cd`进入当前目录，之后`python mitm2.py`。
- 在Chrome上安装插件SwitchOmega，创建规则（New Profile）取名叫dnvod，之后选择Protocol为`HTTP`，Server为`::1`，Port为`8899`。并在Auto Switch中，添加host wildcard并设置为`*.dnvod.tv`，规则指向前面创建的dnvod。
- 切换到Auto Switch。
- Enjoy！之后每次需要看dnvod的时候，需要把mitm.py启动起来。

还是不会就看有没有好心人有空做成一个one-click的程序喽～

# 维护

精力有限，欢迎各种fork和pull request。