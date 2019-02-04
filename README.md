# Dnvod Ad Killer

Latest release: [![GitHub tag](https://img.shields.io/github/tag/GreatYYX/dnvod-ad-killer.svg)](https://github.com/GreatYYX/dnvod-ad-killer/releases)

[鉴于多瑙基本就是海外的国人在使用，这儿就不写英文了]

采用中间人攻击(MITM)的方法，移除多瑙(dnvod.tv)的视频广告及等待时间。

# 实现思路

请移步我的blog：[http://blog.yyx.me/posts/dnvod-ad-killer-v2](http://blog.yyx.me/posts/dnvod-ad-killer-v2)

# 使用方法

1. 本脚本基于[mitmproxy](https://mitmproxy.org/)实现，请根据自身系统安装：[官方安装文档](https://docs.mitmproxy.org/stable/overview-installation/)。并需要对系统和浏览器安装SSL/TLS证书来实现HTTPS的攻击：[官方证书安装文档](https://docs.mitmproxy.org/stable/concepts-certificates/)。
2. 在浏览器中安装proxy插件（如SwitchyOmega），并对域名`*.dnvod.tv`的所有http(s)流量指向本地proxy（`localhost:8899`）。具体设置方法请参考插件的文档。`proxy.pac`可用于自动配置代理，最新的pac文件可以通过`https://raw.githubusercontent.com/GreatYYX/dnvod-ad-killer/master/proxy.pac`获取。
3. `mitmdump -p 8899 -s call_killer.py`。 使用前务必清除浏览器缓存。

# 历史版本

- 2019以前的版本
    - 思路：[http://blog.yyx.me/posts/dnvod-ad-killer](http://blog.yyx.me/posts/dnvod-ad-killer)
    - 代码：[https://github.com/GreatYYX/dnvod-ad-killer/tree/v1](https://github.com/GreatYYX/dnvod-ad-killer/tree/v1)

# 维护

精力有限，欢迎各种fork和pull request。
