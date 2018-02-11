# Dnvod Ad Killer

[鉴于多瑙基本就是海外的国人在使用，这儿就不写英文了]

采用中间人攻击的方法，移除多瑙(dnvod.tv)的视频广告及等待时间。

# 实现思路

请移步我的blog：[http://blog.yyx.me/posts/dnvod-ad-killer.html](http://blog.yyx.me/posts/dnvod-ad-killer.html)

# 使用方法

需要有Python2.7的环境，`python mitm.py`，默认监听开启在`127.0.0.1:8899`。

浏览器中安装proxy插件并指向本地proxy。我使用的是SwitchyOmega，创建规则`dnvod`，并在`Auto Switch`中，添加`host wildcard`并设置为`*.dnvod.tv`，规则指向前面创建的`dnvod`。

# 维护

精力有限，欢迎各种fork和pull request。