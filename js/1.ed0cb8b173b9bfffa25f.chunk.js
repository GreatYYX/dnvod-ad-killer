webpackJsonp([1], {
    LX0m: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("WT6e"),
            l = function() {},
            s = n("vBab"),
            a = n("vAH+"),
            o = n("TBvA"),
            r = n("E3BF"),
            u = n("PAXm"),
            h = n("7qKt"),
            d = n("6n2u"),
            c = n("f9ET"),
            p = n("Ykpd"),
            g = n("Xjw4"),
            f = n("Q1Qi"),
            m = n("YaPU"),
            v = n("YWe0"),
            b = n("7eQo"),
            y = n("KlWq"),
            A = n("MKDY"),
            x = n("zGf8"),
            C = n("sV99"),
            w = n("uwhN"),
            k = n("uuuh"),
            M = function() {
                function t(t, e, n, i, l, s, a) {
                    this.httpClient = t, this._videoTransFormer = e, this._mediaTransFormer = n, this._apiUrlHelper = i, this._httpClientHelper = l, this._toastService = s, this._storage = a
                }
                return t.prototype.playNextVideo = function(t) {
                    var e = this._apiUrlHelper.urlBuilder("video-playnext", t);
                    return this._httpClientHelper.get(e).catch(function(t) {
                        return m.a.throw("Server error: getVideo: " + t)
                    })
                }, t.prototype.filterVideo = function(t, e) {
                    var n = this._apiUrlHelper.urlBuilder("video-filter", t ? {
                        id: e,
                        uid: t.id,
                        gid: t.token.gid,
                        expire: t.token.expire,
                        sign: t.token.sign,
                        token: t.token.token
                    } : {
                        id: e
                    });
                    return this._httpClientHelper.get(n).catch(function(t) {
                        return m.a.throw("Server error: getVideo: " + t)
                    })
                }, t.prototype.IsUserFilter = function(t, e) {
                    var n = this._apiUrlHelper.urlBuilder("video-is-filter", t ? {
                        id: e,
                        uid: t.id,
                        gid: t.token.gid,
                        expire: t.token.expire,
                        sign: t.token.sign,
                        token: t.token.token
                    } : {
                        id: e
                    });
                    return this._httpClientHelper.get(n).map(function(t) {
                        return t[0]
                    })
                }, t.prototype.getVideo = function(t, e) {
                    var n, i = this;
                    (n = t ? {
                        id: e,
                        uid: t.id,
                        gid: t.token.gid,
                        expire: t.token.expire,
                        sign: t.token.sign,
                        token: t.token.token
                    } : {
                        id: e
                    }).device = 1;
                    var l = this._apiUrlHelper.urlBuilder("video-detail", n);
                    return this._httpClientHelper.get(l).map(function(t) {
                        return i._videoTransFormer.transformFromVideoService(t[0])
                    }).catch(function(t) {
                        return m.a.throw("Server error: getVideo: " + t)
                    })
                }, t.prototype.getLastPlay = function(t, e) {
                    var n = this._apiUrlHelper.urlBuilder("video-last-play", t ? {
                        id: e,
                        uid: t.id,
                        gid: t.token.gid,
                        expire: t.token.expire,
                        sign: t.token.sign,
                        token: t.token.token
                    } : {
                        id: e
                    });
                    return this._httpClientHelper.get(n).map(function(t) {
                        return t[0]
                    }).catch(function(t) {
                        return m.a.throw("Server error: getVideo: " + t)
                    })
                }, t.prototype.getMedia = function(t, e, n) {
                    var i;
                    void 0 === n && (n = !0), (i = t ? {
                        id: e,
                        uid: t.id,
                        gid: t.token.gid,
                        expire: t.token.expire,
                        sign: t.token.sign,
                        token: t.token.token
                    } : {
                        id: e
                    }).region = this._storage.GetConfig().region, i.device = 1, i.ispath = n;
                    var l = this._apiUrlHelper.urlBuilder("video-media", i);
                    return this._httpClientHelper.get(l).map(function(t) {
                        return null !== t[0] ? t[0] : []
                    }).catch(function(t) {
                        return m.a.throw("Server error:" + t)
                    })
                }, t.prototype.like = function(t) {
                    var e = this;
                    if (this.isVoted(t)) return Object(v.a)({
                        message: "\u60a8\u5df2\u7ecf\u9012\u4ea4\u8fc7\u4e86"
                    }).delay(300);
                    var n = this._apiUrlHelper.urlBuilder("video-like", {
                        videoID: t
                    });
                    return this._httpClientHelper.get(n).map(function(n) {
                        return e.voteRecord(t, "like"), n
                    }).delay(300)
                }, t.prototype.pageViewRecord = function(t) {
                    return this.httpClient.get(t).map(function(t) {
                        return t
                    })
                }, t.prototype.dislike = function(t) {
                    var e = this;
                    if (this.isVoted(t)) return Object(v.a)({
                        message: "\u60a8\u5df2\u7ecf\u9012\u4ea4\u8fc7\u4e86"
                    }).delay(300);
                    var n = this._apiUrlHelper.urlBuilder("video-dislike", {
                        videoID: t
                    });
                    return this._httpClientHelper.get(n).map(function(n) {
                        return e.voteRecord(t, "dislike"), n
                    }).delay(300).catch(function(t) {
                        return m.a.throw("Server error:" + t)
                    })
                }, t.prototype.isVoted = function(t) {
                    return (this._storage.GetItem("voteVideo") ? JSON.parse(this._storage.GetItem("voteVideo")) : []).filter(function(e) {
                        return e.id === t
                    }).length > 0
                }, t.prototype.voteRecord = function(t, e) {
                    if (!this.isVoted(t)) {
                        var n = this._storage.GetItem("voteVideo") ? JSON.parse(this._storage.GetItem("voteVideo")) : [];
                        n.push({
                            id: t,
                            behavior: e
                        }), n = n.slice(-50), this._storage.SetItem("voteVideo", JSON.stringify(n))
                    }
                }, t.prototype.favorite = function(t, e) {
                    var n = this._apiUrlHelper.urlBuilder("video-favorite", {
                        videoID: e,
                        uid: t.id,
                        gid: t.token.gid,
                        expire: t.token.expire,
                        sign: t.token.sign,
                        token: t.token.token
                    });
                    return this._httpClientHelper.get(n).map(function(t) {
                        return t
                    }).delay(300).catch(function(t) {
                        return m.a.throw("Server error:" + t)
                    })
                }, t.prototype.purchaseMedia = function(t, e) {
                    var n = this._apiUrlHelper.urlBuilder("media-purchase", {
                        id: e,
                        uid: t.id,
                        expire: t.token.expire,
                        sign: t.token.sign,
                        token: t.token.token
                    });
                    return this._httpClientHelper.get(n).map(function(t) {
                        return t[0]
                    }).delay(200).catch(function(t) {
                        return m.a.throw("Server error:" + t)
                    })
                }, t.prototype.sendPlayHistory = function(t) {
                    this._httpClientHelper.getAsync(t)
                }, t.prototype.sendWatched = function(t) {
                    this._httpClientHelper.getAsync(t)
                }, t.prototype.getPlaylistByLanguage = function(t, e) {
                    var n = this._apiUrlHelper.urlBuilder("languagesplaylist", {
                        VID: e,
                        lsk: 1,
                        uid: t ? t.id : void 0,
                        gid: t ? t.token.gid : void 0,
                        expire: t ? t.token.expire : void 0,
                        sign: t ? t.token.sign : void 0,
                        token: t ? t.token.token : void 0
                    });
                    return this._httpClientHelper.get(n).map(function(t) {
                        return {
                            GuessList: t[0].GuessList.map(function(t) {
                                return {
                                    id: t.ID,
                                    key: t.Key,
                                    title: t.Name,
                                    created: t.UpdateDate,
                                    bought: t.IsBought
                                }
                            }),
                            VipList: t[0].VipList.map(function(t) {
                                return {
                                    id: t.ID,
                                    key: t.Key,
                                    title: t.Name,
                                    created: t.UpdateDate,
                                    bought: t.IsBought
                                }
                            })
                        }
                    }).delay(200).catch(function(t) {
                        return m.a.throw("Server error:" + t)
                    })
                }, t.prototype.getStatistics = function(t) {
                    var e = this._apiUrlHelper.urlBuilder("video-statistics", {
                        id: t
                    });
                    return this._httpClientHelper.get(e).map(function(t) {
                        return t
                    }).delay(200).catch(function(t) {
                        return m.a.throw("Server error:" + t)
                    })
                }, t
            }(),
            S = n("bfOx"),
            P = (n("pcvH"), n("llmY"), n("QIrt"), function() {
                function t(t, e, n, i) {
                    var l = this;
                    this._amChartsService = t, this._videoService = e, this._route = n, this._windowService = i, this.chatMode = 0, this.screenType = p.a, this._windowService.size$.subscribe(function(t) {
                        l.screenSize = t
                    })
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this._route.queryParams.subscribe(function() {
                        t.chatMode = Math.floor(3 * Math.random()), t.createChat()
                    }), this.chatMode = Math.floor(3 * Math.random())
                }, t.prototype.renderChart = function(t) {
                    var e;
                    switch (this.screenSize) {
                        case this.screenType.Small:
                        case this.screenType.Medium:
                            e = 240;
                            break;
                        default:
                            e = 360
                    }
                    var n = {
                        type: "pie",
                        theme: "light",
                        addClassNames: !0,
                        startDuration: 0,
                        dataProvider: t,
                        labelText: this.screenSize > this.screenType.Medium ? "[[title]]" : "",
                        valueField: "value",
                        titleField: "constellation",
                        outlineAlpha: .4,
                        depth3D: 19,
                        balloonText: "[[title]]<br><span style='font-size:14px'>([[percents]]%)</span>",
                        angle: 15,
                        export: {
                            enabled: !0
                        }
                    };
                    return n.legend = {
                        position: "bottom",
                        autoMargins: !0,
                        valueFunction: function() {
                            return ""
                        },
                        valueWidth: 0,
                        width: e,
                        fontSize: 15,
                        markerSize: 5,
                        maxColumns: 6,
                        align: "center"
                    }, n
                }, t.prototype.ngAfterViewInit = function() {}, t.prototype.createChat = function() {
                    var t = this;
                    this._videoService.getStatistics(this.videoKey).subscribe(function(e) {
                        t.data = e;
                        var n, i = [],
                            l = [];
                        for (var s in t.data.ConstellationCount) t.data.ConstellationCount.hasOwnProperty(s) && "\u672a\u77e5" !== s && 0 !== t.data.ConstellationCount[s] && i.push({
                            constellation: s,
                            value: t.data.ConstellationCount[s]
                        });
                        for (var s in t.data.AgeSexCount) t.data.AgeSexCount.hasOwnProperty(s) && "\u672a\u77e5" !== s && 0 !== t.data.AgeSexCount[s] && l.push({
                            constellation: s,
                            value: t.data.AgeSexCount[s]
                        });
                        switch (t.chatMode) {
                            case 0:
                                n = i;
                                break;
                            case 1:
                                n = l;
                                break;
                            default:
                                n = i
                        }
                        t.constellationChart = t._amChartsService.makeChart("chartdiv", t.renderChart(n))
                    })
                }, t
            }()),
            N = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".statistics[_ngcontent-%COMP%]{padding-left:25px}.chart-container[_ngcontent-%COMP%]{width:420px;min-width:420px;max-width:420px;margin-top:-30px}.screen-small[_ngcontent-%COMP%]   .statistics[_ngcontent-%COMP%]{padding-left:15px}.screen-small[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{width:280px;min-width:280px;max-width:280px;margin-top:-30px}.screen-medium[_ngcontent-%COMP%]   .statistics[_ngcontent-%COMP%]{padding-left:15px}.screen-medium[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{width:300px;min-width:300px;max-width:300px;margin-top:-30px}.screen-large[_ngcontent-%COMP%]   .statistics[_ngcontent-%COMP%]{padding-left:15px}.screen-large[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{width:320px;min-width:320px;max-width:320px;margin-top:-30px}"]
                ],
                data: {}
            });

        function I(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 11, "div", [
                ["class", "statistics"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                "screen-xxsmall": 0,
                "screen-xsmall": 1,
                "screen-small": 2,
                "screen-medium": 3,
                "screen-large": 4
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](4, 0, null, null, 1, "h4", [
                ["class", "py-3 mb-4 text-center"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u559c\u6b22\u6b64\u5267\u7684\u4eba\u7fa4\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](7, 0, null, null, 3, "div", [
                ["class", "chart-container "]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](9, 0, null, null, 0, "div", [
                ["id", "chartdiv"]
            ], [
                [4, "width", "%"],
                [4, "height", "px"]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "statistics", t(e, 2, 0, n.screenSize === n.screenType.XXSmall, n.screenSize === n.screenType.XSmall, n.screenSize === n.screenType.Small, n.screenSize === n.screenType.Medium, n.screenSize === n.screenType.Large))
            }, function(t, e) {
                t(e, 9, 0, 100, 380)
            })
        }
        var T = n("V/hQ"),
            O = n("YE+3"),
            D = n("amAx"),
            R = n("5j7/"),
            L = n("kZql"),
            B = function() {
                function t(t) {
                    this._categoryService = t, this.isAdult = 2 === L.a.cinema, this.screenType = p.a
                }
                return t.prototype.ngOnInit = function() {}, t.prototype.getRatingBarWidth = function() {
                    return this.screenSize === p.a.Small ? 150 : this.screenSize === p.a.Medium ? 100 : this.screenSize === p.a.Large ? 160 : 218
                }, t
            }(),
            E = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".bar-container[_ngcontent-%COMP%]{position:relative;border-radius:20px;height:20px;padding-left:54px;background-color:#fff;overflow:hidden;border:1px solid #ddd}.bar-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;top:0;left:15px;font-size:15px;line-height:17px}.actors[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:inherit;max-width:35em}.screen-medium[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%], .screen-small[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%]{display:inline-block!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.info-label[_ngcontent-%COMP%]{display:inline-block;width:60px}.star[_ngcontent-%COMP%]{cursor:pointer;white-space:normal}"]
                ],
                data: {}
            });

        function F(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "span", [
                ["class", "d-inline text-dark"],
                ["style", "font-size: 22px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["[\u8fde\u8f7d]"]))], null, null)
        }

        function V(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](1, null, ["", ""])), i["\u0275ppd"](2, 1)], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, i["\u0275unv"](e, 1, 0, t(e, 2, 0, i["\u0275nov"](e.parent.parent, 0), n.video.category)))
            })
        }

        function z(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5348\u591c\u7248"]))], null, null)
        }

        function H(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "published d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5e74\u4efd\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](6, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], null, function(t, e) {
                t(e, 6, 0, e.component.video.published)
            })
        }

        function G(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "region d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u533a\u57df\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](6, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], null, function(t, e) {
                t(e, 6, 0, e.component.video.region)
            })
        }

        function W(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "region d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u8bed\u8a00\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](6, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], null, function(t, e) {
                t(e, 6, 0, e.component.video.language)
            })
        }

        function Y(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 6, "div", [
                ["class", "directors d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5bfc\u6f14\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](6, null, ["", ""]))], null, function(t, e) {
                t(e, 6, 0, e.component.video.directors)
            })
        }

        function _(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "updateSchedule d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u66f4\u65b0\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](6, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], null, function(t, e) {
                var n = e.component;
                t(e, 6, 0, n.video.inProgress ? n.video.updateSchedule : "\u5df2\u5b8c\u7ed3")
            })
        }

        function X(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 6, "div", [
                ["class", "isFree d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u8d44\u8d39\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](5, 0, null, null, 1, "span", [
                ["style", "display:inline-block; width: 60px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](6, null, ["", ""]))], null, function(t, e) {
                t(e, 6, 0, e.component.video.isFree ? "\u514d\u8d39" : "\u6536\u8d39")
            })
        }

        function j(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u672a\u77e5"]))], null, null)
        }

        function U(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "span", [
                ["class", "tag"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](1, null, ["\n                ", "\n            "]))], null, function(t, e) {
                t(e, 1, 0, e.context.$implicit)
            })
        }

        function Q(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "d-inline"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, U)), i["\u0275did"](3, 802816, null, 0, g.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], function(t, e) {
                t(e, 3, 0, e.component.video.tags)
            }, null)
        }

        function K(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 10, "div", [
                ["class", "tags d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5185\u5bb9\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, j)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Q)), i["\u0275did"](9, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                var n = e.component;
                t(e, 6, 0, !n.video.tags.length), t(e, 9, 0, n.video.tags.length)
            }, null)
        }

        function Z(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "mosaic d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5175\u79cd\uff1a "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](5, 0, null, null, 1, "span", [
                ["class", "d-inline-block"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](6, null, ["\n            ", "\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], null, function(t, e) {
                t(e, 6, 0, e.component.video.mosaic ? "\u9a91\u5175" : "\u6b65\u5175")
            })
        }

        function q(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "span", [
                ["style", "display:inline-block; width: 60px; min-width: 60px; vertical-align: top;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u4e3b\u6f14\uff1a"]))], null, null)
        }

        function J(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "span", [
                ["style", "display:inline-block; width: 60px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5973\u4f18\uff1a "]))], null, null)
        }

        function $(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "d-inline-block actors"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u672a\u77e5"])), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], null, null)
        }

        function tt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "span", [
                ["class", "text-light mx-1"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["/"]))], null, null)
        }

        function et(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 10, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](2, 0, null, null, 4, "span", [
                ["class", "star"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var l = !0;
                return "click" === e && (l = !1 !== i["\u0275nov"](t, 3).onClick() && l), l
            }, null, null)), i["\u0275did"](3, 16384, null, 0, S.p, [S.o, S.a, [8, null], i.Renderer2, i.ElementRef], {
                queryParams: [0, "queryParams"],
                routerLink: [1, "routerLink"]
            }, null), i["\u0275pod"](4, {
                star: 0
            }), i["\u0275pad"](5, 1), (t()(), i["\u0275ted"](6, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, tt)), i["\u0275did"](9, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], function(t, e) {
                t(e, 3, 0, t(e, 4, 0, e.context.$implicit), t(e, 5, 0, "/search")), t(e, 9, 0, !e.context.last)
            }, function(t, e) {
                t(e, 6, 0, e.context.$implicit)
            })
        }

        function nt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["..."]))], null, null)
        }

        function it(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "d-inline-flex actors"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, et)), i["\u0275did"](3, 802816, null, 0, g.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, nt)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, n.video.actors.slice(0, 10)), t(e, 6, 0, n.video.actors.length > 10)
            }, null)
        }

        function lt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 102, "div", [
                ["class", "video-detail"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                "screen-xxsmall": 0,
                "screen-xsmall": 1,
                "screen-small": 2,
                "screen-medium": 3,
                "screen-large": 4
            }), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275eld"](4, 0, null, null, 7, "div", [
                ["class", "mb-4"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](6, 0, null, null, 1, "h1", [
                ["class", "d-inline text-dark"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](7, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, F)), i["\u0275did"](10, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275eld"](13, 0, null, null, 19, "div", [
                ["class", "popular mb-4 d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](15, 0, null, null, 7, "div", [
                ["class", "bar-container popularity mr-3"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](17, 0, null, null, 1, "span", [
                ["class", "label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u4eba\u6c14"])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](20, 0, null, null, 1, "app-rating-bar", [
                ["class", "rating-bar"]
            ], null, null, null, T.b, T.a)), i["\u0275did"](21, 114688, null, 0, O.a, [], {
                width: [0, "width"],
                height: [1, "height"],
                value: [2, "value"],
                borderRadius: [3, "borderRadius"],
                whiteBackground: [4, "whiteBackground"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](24, 0, null, null, 7, "div", [
                ["class", "bar-container rating"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](26, 0, null, null, 1, "span", [
                ["class", "label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u8bc4\u5206"])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](29, 0, null, null, 1, "app-rating-bar", [
                ["class", "rating-bar"]
            ], null, null, null, T.b, T.a)), i["\u0275did"](30, 114688, null, 0, O.a, [], {
                width: [0, "width"],
                height: [1, "height"],
                value: [2, "value"],
                borderRadius: [3, "borderRadius"],
                whiteBackground: [4, "whiteBackground"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](34, 0, null, null, 10, "div", [
                ["class", "category d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](36, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u9891\u9053\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, V)), i["\u0275did"](40, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, z)), i["\u0275did"](43, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](46, 0, null, null, 7, "div", [
                ["class", "genre d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](48, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5206\u7c7b\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](51, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](52, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, H)), i["\u0275did"](56, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](58, 0, null, null, 7, "div", [
                ["class", "created d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](60, 0, null, null, 1, "span", [
                ["class", "info-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6dfb\u52a0\uff1a"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](63, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](64, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, G)), i["\u0275did"](68, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, W)), i["\u0275did"](71, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Y)), i["\u0275did"](74, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, _)), i["\u0275did"](77, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, X)), i["\u0275did"](80, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, K)), i["\u0275did"](83, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Z)), i["\u0275did"](86, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](88, 0, null, null, 13, "div", [
                ["class", " d-flex"],
                ["style", "white-space: nowrap"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, q)), i["\u0275did"](91, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, J)), i["\u0275did"](94, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, $)), i["\u0275did"](97, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, it)), i["\u0275did"](100, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "video-detail", t(e, 2, 0, n.screenSize === n.screenType.XXSmall, n.screenSize === n.screenType.XSmall, n.screenSize === n.screenType.Small, n.screenSize === n.screenType.Medium, n.screenSize === n.screenType.Large)), t(e, 10, 0, n.video.inProgress), t(e, 21, 0, n.getRatingBarWidth(), 20, 10 * n.video.userData.popular, 0, !0), t(e, 30, 0, n.getRatingBarWidth(), 20, 10 * n.video.userData.rate, 0, !0), t(e, 40, 0, !n.isAdult), t(e, 43, 0, n.isAdult), t(e, 56, 0, !n.isAdult), t(e, 68, 0, !n.isAdult), t(e, 71, 0, !n.isAdult), t(e, 74, 0, (null == n.video.directors ? null : n.video.directors.length) && !n.isAdult), t(e, 77, 0, n.video.updateSchedule && !n.isAdult), t(e, 80, 0, n.isAdult), t(e, 83, 0, n.isAdult), t(e, 86, 0, n.isAdult), t(e, 91, 0, !n.isAdult), t(e, 94, 0, n.isAdult), t(e, 97, 0, !n.video.actors.length), t(e, 100, 0, n.video.actors.length)
            }, function(t, e) {
                var n = e.component;
                t(e, 7, 0, n.video.title), t(e, 52, 0, n.video.genre), t(e, 64, 0, n.video.created)
            })
        }

        function st(t) {
            return i["\u0275vid"](0, [i["\u0275pid"](0, D.a, [R.a]), (t()(), i["\u0275and"](16777216, null, null, 1, null, lt)), i["\u0275did"](2, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 2, 0, n.video && n.video.title)
            }, null)
        }
        var at = function() {
                function t() {
                    this.iconClasses = "", this.style = {}, this.clickEvent = new i.EventEmitter
                }
                return t.prototype.ngOnInit = function() {}, t.prototype.onClick = function(t) {
                    this.clickEvent.emit(t)
                }, t.prototype.getStyle = function() {
                    return this.style
                }, t
            }(),
            ot = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".play-button[_ngcontent-%COMP%]{display:inline-block;padding:2px 18px;color:#fff;background-color:#e81d00;border-radius:30px;cursor:pointer}.play-button[_ngcontent-%COMP%]:hover{background-color:red}.button-icon[_ngcontent-%COMP%]{width:28px;height:38px;margin-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.button-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px}.button-label[_ngcontent-%COMP%]{width:65px;height:38px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}"]
                ],
                data: {}
            });

        function rt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 14, "div", [
                ["class", "play-button"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.onClick(n) && i), i
            }, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgStyle, [i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](3, 0, null, null, 10, "div", [
                ["class", "d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](5, 0, null, null, 4, "div", [
                ["class", "button-icon"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n          "])), (t()(), i["\u0275eld"](7, 0, null, null, 1, "i", [], null, null, null, null, null)), i["\u0275did"](8, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](11, 0, null, null, 1, "div", [
                ["class", "button-label"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](12, null, ["\n            ", "\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.getStyle()), t(e, 8, 0, n.iconClasses)
            }, function(t, e) {
                t(e, 12, 0, e.component.label)
            })
        }
        var ut = n("Ou5T"),
            ht = n("VPIZ"),
            dt = n("FI7P"),
            ct = n("+SoF"),
            pt = n("v8NG"),
            gt = function() {
                function t(t, e, n, l) {
                    var s = this;
                    this._videoService = t, this._windowService = e, this._dnDialogService = n, this._messageDialogService = l, this.screenType = p.a, this.screenSize = p.a.Large, this.showPlaylistEvent = new i.EventEmitter, this.gid = -1, this._windowService.size$.subscribe(function(t) {
                        s.screenSize = t
                    })
                }
                return Object.defineProperty(t.prototype, "user", {
                    get: function() {
                        return this._user
                    },
                    set: function(t) {
                        this._user = t, t && (this.gid = t.token.gid)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngOnInit = function() {}, t.prototype.ngOnChanges = function(t) {
                    var e = this;
                    "videoKey" in t && this.user && this.videoKey && this._videoService.getLastPlay(this.user, this.videoKey).subscribe(function(t) {
                        e.history = t ? {
                            category: "",
                            current: t.LastTime,
                            duration: null,
                            mKey: t.CurrentVideoID,
                            mTitle: t.Title,
                            mid: 0,
                            nextMid: t.NextVideoID,
                            timestamp: "",
                            title: "",
                            vKey: e.video ? e.video.key : "",
                            vid: t.vid
                        } : t, pt.a.Notify("changeHistory", e.history)
                    })
                }, t.prototype.play = function(t) {
                    var e = {};
                    for (var n in t) "media" == n ? e.id = decodeURIComponent(t[n]) : e[n] = decodeURIComponent(t[n]);
                    this.router.navigate(["/play"], {
                        queryParams: e,
                        replaceUrl: pt.a.isUrlContains(["play"])
                    })
                }, t.prototype.quickPlay = function() {
                    var t = Object.keys(this.video.playlist);
                    if (t.length) {
                        var e = void 0;
                        try {
                            if (e = (n = this.video.playlist[t[1]].medias)[0].key) return void this.play({
                                id: this.video.key,
                                media: e
                            })
                        } catch (t) {}
                        if (this.video.playlist[t[0]].medias.length) this.play({
                            id: this.video.key,
                            media: e = this.video.playlist[t[0]].medias[0].key
                        });
                        else try {
                            var n;
                            e = (n = this.video.playlist[t[1]].medias)[0].key;
                            var i = document.getElementById("triggerkey_" + n[0].title);
                            return void(null != i && i.click())
                        } catch (t) {}
                    } else this._messageDialogService.setState({
                        type: ct.b.Info,
                        message: "\u6b63\u5728\u51c6\u5907\u64ad\u653e\u5217\u8868\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"
                    }), this._dnDialogService.open("message-dialog")
                }, t.prototype.continuePlay = function(t, e) {
                    this.play({
                        id: this.history.vKey,
                        media: t,
                        start: Math.floor(e)
                    })
                }, t.prototype.showPlaylist = function() {
                    this.showPlaylistEvent.emit()
                }, t
            }(),
            ft = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".play-buttons[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;bottom:40px;left:40px}.last-play[_ngcontent-%COMP%]{margin-bottom:25px}.screen-medium.play-buttons[_ngcontent-%COMP%], .screen-small.play-buttons[_ngcontent-%COMP%]{bottom:20px;left:20px}.screen-medium[_ngcontent-%COMP%]   .last-play[_ngcontent-%COMP%], .screen-small[_ngcontent-%COMP%]   .last-play[_ngcontent-%COMP%]{margin-bottom:5px}"]
                ],
                data: {}
            });

        function mt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 2, "app-play-button", [], null, [
                [null, "clickEvent"]
            ], function(t, e, n) {
                var i = !0;
                return "clickEvent" === e && (i = !1 !== t.component.quickPlay() && i), i
            }, rt, ot)), i["\u0275did"](1, 114688, null, 0, at, [], {
                label: [0, "label"],
                iconClasses: [1, "iconClasses"]
            }, {
                clickEvent: "clickEvent"
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                t(e, 1, 0, "\u7acb\u5373\u64ad\u653e", "dn-icon icon-play")
            }, null)
        }

        function vt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 11, "div", [
                ["class", "play-buttons"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                "screen-xxsmall": 0,
                "screen-xsmall": 1,
                "screen-small": 2,
                "screen-medium": 3,
                "screen-large": 4
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, mt)), i["\u0275did"](5, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](7, 0, null, null, 3, "app-play-button", [], null, [
                [null, "clickEvent"]
            ], function(t, e, n) {
                var i = !0;
                return "clickEvent" === e && (i = !1 !== t.component.showPlaylist() && i), i
            }, rt, ot)), i["\u0275did"](8, 114688, null, 0, at, [], {
                label: [0, "label"],
                iconClasses: [1, "iconClasses"],
                style: [2, "style"]
            }, {
                clickEvent: "clickEvent"
            }), i["\u0275pod"](9, {
                "margin-left": 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "play-buttons", t(e, 2, 0, n.screenSize === n.screenType.XXSmall, n.screenSize === n.screenType.XSmall, n.screenSize === n.screenType.Small, n.screenSize === n.screenType.Medium, n.screenSize === n.screenType.Large)), t(e, 5, 0, n.gid > 0), t(e, 8, 0, "\u64ad\u653e\u5217\u8868", "dn-icon icon-list", t(e, 9, 0, "15px"))
            }, null)
        }

        function bt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 2, "app-play-button", [], null, [
                [null, "clickEvent"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "clickEvent" === e && (i = !1 !== l.continuePlay(l.history.mKey, l.history.current) && i), i
            }, rt, ot)), i["\u0275did"](1, 114688, null, 0, at, [], {
                label: [0, "label"],
                iconClasses: [1, "iconClasses"]
            }, {
                clickEvent: "clickEvent"
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                t(e, 1, 0, "\u7ee7\u7eed\u64ad\u653e", "dn-icon icon-play")
            }, null)
        }

        function yt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 3, "app-play-button", [], null, [
                [null, "clickEvent"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "clickEvent" === e && (i = !1 !== l.continuePlay(l.history.mKey, l.history.current) && i), i
            }, rt, ot)), i["\u0275did"](1, 114688, null, 0, at, [], {
                label: [0, "label"],
                iconClasses: [1, "iconClasses"],
                style: [2, "style"]
            }, {
                clickEvent: "clickEvent"
            }), i["\u0275pod"](2, {
                "border-radius": 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                t(e, 1, 0, "\u7ee7\u7eed\u64ad\u653e", "dn-icon icon-continue", t(e, 2, 0, "30px 0 0 30px"))
            }, null)
        }

        function At(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 3, "app-play-button", [], null, [
                [null, "clickEvent"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "clickEvent" === e && (i = !1 !== l.continuePlay(l.history.nextMid, 0) && i), i
            }, rt, ot)), i["\u0275did"](1, 114688, null, 0, at, [], {
                label: [0, "label"],
                iconClasses: [1, "iconClasses"],
                style: [2, "style"]
            }, {
                clickEvent: "clickEvent"
            }), i["\u0275pod"](2, {
                "margin-left": 0,
                "border-radius": 1
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                t(e, 1, 0, "\u64ad\u653e\u4e0b\u96c6", "dn-icon icon-next", t(e, 2, 0, "-2px", "0 30px 30px 0"))
            }, null)
        }

        function xt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 27, "div", [
                ["class", "play-buttons"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                "screen-xxsmall": 0,
                "screen-xsmall": 1,
                "screen-small": 2,
                "screen-medium": 3,
                "screen-large": 4
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](4, 0, null, null, 8, "div", [
                ["class", "last-play text-dark"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](6, 0, null, null, 1, "span", [
                ["class", "text-large"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), i["\u0275ppd"](7, 2), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](9, 0, null, null, 2, "span", [
                ["class", "text-large"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](10, null, ["", ""])), i["\u0275ppd"](11, 1), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, bt)), i["\u0275did"](15, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, yt)), i["\u0275did"](18, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, At)), i["\u0275did"](21, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](23, 0, null, null, 3, "app-play-button", [], null, [
                [null, "clickEvent"]
            ], function(t, e, n) {
                var i = !0;
                return "clickEvent" === e && (i = !1 !== t.component.showPlaylist() && i), i
            }, rt, ot)), i["\u0275did"](24, 114688, null, 0, at, [], {
                label: [0, "label"],
                iconClasses: [1, "iconClasses"],
                style: [2, "style"]
            }, {
                clickEvent: "clickEvent"
            }), i["\u0275pod"](25, {
                "margin-left": 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "play-buttons", t(e, 2, 0, n.screenSize === n.screenType.XXSmall, n.screenSize === n.screenType.XSmall, n.screenSize === n.screenType.Small, n.screenSize === n.screenType.Medium, n.screenSize === n.screenType.Large)), t(e, 15, 0, !n.history.nextMid || "movie" === (null == n.video ? null : n.video.category)), t(e, 18, 0, n.history.nextMid && "movie" !== (null == n.video ? null : n.video.category)), t(e, 21, 0, n.history.nextMid && "movie" !== (null == n.video ? null : n.video.category)), t(e, 24, 0, "\u64ad\u653e\u5217\u8868", "dn-icon icon-list", t(e, 25, 0, "15px"))
            }, function(t, e) {
                var n = e.component;
                t(e, 6, 0, i["\u0275unv"](e, 6, 0, t(e, 7, 0, i["\u0275nov"](e.parent, 0), n.history.mTitle, n.video))), t(e, 10, 0, i["\u0275unv"](e, 10, 0, t(e, 11, 0, i["\u0275nov"](e.parent, 1), n.history.current)))
            })
        }

        function Ct(t) {
            return i["\u0275vid"](0, [i["\u0275pid"](0, ut.b, []), i["\u0275pid"](0, ht.a, []), (t()(), i["\u0275and"](16777216, null, null, 1, null, vt)), i["\u0275did"](3, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275and"](16777216, null, null, 1, null, xt)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, n.video && !n.history || !n.user || !n.user.membership || "vip" === n.user.membership), t(e, 6, 0, n.video && n.history && n.user && n.user.membership && "vip" !== n.user.membership)
            }, null)
        }
        var wt = n("v/Nw"),
            kt = n("K1MH"),
            Mt = function() {
                function t(t, e, n) {
                    var i = this;
                    this.API = e, this.isBarShow = !1, this.hideArrowBar = !0, this.subscriptions = [], this.timeout = null, this.subscriptions.push(n.isHidden.subscribe(function(t) {
                        return i.onHideScrubBar(t)
                    }))
                }
                return t.prototype.onHideScrubBar = function(t) {
                    this.isBarShow || (this.hideArrowBar = t)
                }, t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {}, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t.prototype.showBar = function() {
                    var t = this;
                    null != this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
                        t.isBarShow = !0
                    }, 100)
                }, t.prototype.hideBar = function() {
                    var t = this;
                    null != this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
                        t.isBarShow = !1
                    }, 100)
                }, t
            }(),
            St = i["\u0275crt"]({
                encapsulation: 2,
                styles: ['\n      vg-sidebar{\n        position: absolute;\n        right: 0;\n        height: 100%;\n        z-index:499;\n        pointer-events: none;\n\n      }\n      vg-sidebar.hide{\n        width: 1px;\n\n      }\n   \n      .arrow{\n        pointer-events: initial;\n        background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAImSURBVHja7Nq9ixNBFADwt9lNcqhEEfFMIVjINQf+GzZ63cBZ+VHJXWmT/yGlLGFIujRWYmUlWInbCIoG4WCTIiEkgcx+RdiZZHZsLmFuL2qu8WbCPNjiwSy8387Hzg5rCSFgG6IAWxIGYiAGYiB6haNCEZZlbfLAs23okexfteo0tDIz2Q3kEupXFoIQsuX6EEIAAOD7vo0xLhBCHnDOv/m+/xpjvGOpsI3fYPk9E0mS7JfL5bfFYnEPAIAQ8kq7oRXH8V6pVHqzRHDOQ8dxOiCEuPRr04ii6D6l9Ks4jcViERBCHiOECtpAgiC4Ryn9IiHCIAgOVg10gEyn07uU0s8S4lcYhuhMI9Ug+XwymdyhlH6SELMoig7P3aMSJJ+PRqPbaZp+lBAsjuOn6zpCGUg+Hw6HtxhjH5YIznkax/HzP40mJSCDwcDK5TfTNH0vIeZJkhwtARjj8w9DBUj+opS+k3siSZKXS4TneZV+v79q63mePnstIcTq1V+tVpnrutelHGq1mlZD61jG1ev1a8oNrQtM9hcyptFoXFUOsm75HY/Hu2uW32cyptVqXVEOcoEX4hO5TafTccwWRYVNIyHk4HQ+WduwjX+kVY/IH1aU0u8yJoqih9p9IVYqlRPG2OF8Pj8BALBt+wZjbF+7w4der2c3m82fs9kMZVn2o9vtuu1229Xy8MEc0BnIf6y1oBHir6fxlvlhwEAMxEAMxEAMBOD3AEZca+NEDTmSAAAAAElFTkSuQmCC");\n      background-repeat: no-repeat;\n      width: 3em;\n      height: 3em;\n      background-size: contain;\n      position: absolute;\n      top: 50%;\n      right: 0;\n      transform: translateY(-50%);\n      opacity: 0.8;\n      padding-right: 0.5em;\n      box-sizing: content-box;\n      transition: right 0.3s;\n      }\n\n      vg-sidebar.hide .arrow{\n\n        right:-3em;\n        \n        \n      }\n\n      vg-sidebar .vgsidebar{\n        pointer-events: initial;\n\n            margin:0;\n            position:relative;\n       \n            background-color: rgba(0, 0, 0, 0.67);\n            right:-100%;\n            transition: right 0.3s;\n            top:50%;\n            transform: translateY(-50%);\n\n\n      }\n      .vgsidebar.show{\n\n        right:0;\n      }\n        \n    '],
                data: {}
            });

        function Pt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "arrow"]
            ], null, [
                [null, "click"],
                [null, "mouseenter"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "click" === e && (i = !1 !== l.showBar() && i), "mouseenter" === e && (i = !1 !== l.showBar() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n      "]))], null, null)
        }

        function Nt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275ted"](-1, null, ["\n      "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Pt)), i["\u0275did"](2, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n      "])), (t()(), i["\u0275eld"](4, 0, null, null, 5, "div", [
                ["class", "vgsidebar"]
            ], null, [
                [null, "mouseover"],
                [null, "mouseout"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "mouseover" === e && (i = !1 !== l.showBar() && i), "mouseout" === e && (i = !1 !== l.hideBar() && i), i
            }, null, null)), i["\u0275did"](5, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](6, {
                show: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n         "])), i["\u0275ncd"](null, 0), (t()(), i["\u0275ted"](-1, null, ["\n      "])), (t()(), i["\u0275ted"](-1, null, ["\n        \n    "]))], function(t, e) {
                var n = e.component;
                t(e, 2, 0, !n.isBarShow), t(e, 5, 0, "vgsidebar", t(e, 6, 0, n.isBarShow))
            }, null)
        }
        var It = function() {
                function t(t, e) {
                    this.API = e, this.subscriptions = [], this.ariaValue = 1, this.elem = t.nativeElement, this.playbackValues = ["0.5", "1.0", "1.5", "2.0"], this.playbackIndex = 1
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    this.target = this.API.getMediaById(this.vgFor)
                }, t.prototype.onClick = function() {
                    this.updatePlaybackSpeed()
                }, t.prototype.onKeyDown = function(t) {
                    13 !== t.keyCode && 32 !== t.keyCode || (t.preventDefault(), this.updatePlaybackSpeed())
                }, t.prototype.updatePlaybackSpeed = function() {
                    this.playbackIndex = ++this.playbackIndex % this.playbackValues.length, this.target instanceof wt.a ? this.target.playbackRate = this.playbackValues[this.playbackIndex] : this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex]
                }, t.prototype.getPlaybackRate = function() {
                    return this.ariaValue = this.target ? this.target.playbackRate : 1, this.ariaValue
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            Tt = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-playback-button {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n\n        vg-playback-button .button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n        }\n    "],
                data: {}
            });

        function Ot(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](1, 0, null, null, 1, "span", [
                ["aria-label", "playback speed button"],
                ["class", "button"],
                ["role", "button"],
                ["tabindex", "0"]
            ], [
                [1, "aria-valuetext", 0]
            ], null, null, null, null)), (t()(), i["\u0275ted"](2, null, ["\n        ", "x\n    "]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.ariaValue), t(e, 2, 0, n.getPlaybackRate())
            })
        }
        var Dt = function() {
                function t(t, e) {
                    this.API = e, this.vertical = !0, this.subscriptions = [], this.elem = t.nativeElement, this.isDragging = !1
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    this.target = this.API.getMediaById(this.vgFor), this.ariaValueY = this.ariaValue = 100 * this.getVolume()
                }, t.prototype.onClick = function(t) {
                    this.setVolume(this.calculateVolume(this.vertical ? t.clientY : t.clientX))
                }, t.prototype.onMouseDown = function(t) {
                    this.mouseDownPosX = t.clientX, this.mouseDownPosY = t.clientY, this.isDragging = !0
                }, t.prototype.onDrag = function(t) {
                    this.isDragging && this.setVolume(this.calculateVolume(this.vertical ? t.clientY : t.clientX))
                }, t.prototype.onStopDrag = function(t) {
                    this.isDragging && (this.isDragging = !1, this.vertical ? this.mouseDownPosY === t.clientY && this.setVolume(this.calculateVolume(t.clientY)) : this.mouseDownPosX === t.clientX && this.setVolume(this.calculateVolume(t.clientX)))
                }, t.prototype.arrowAdjustVolume = function(t) {
                    var e = document.activeElement;
                    (null == e || "input" != e.tagName.toLowerCase() && !e.hasAttribute("contenteditable")) && (38 === t.keyCode ? (t.preventDefault(), this.setVolume(Math.max(0, Math.min(100, 100 * this.getVolume() + 10)))) : 40 === t.keyCode && (t.preventDefault(), this.setVolume(Math.max(0, Math.min(100, 100 * this.getVolume() - 10)))))
                }, t.prototype.getVolumecCaption = function() {
                    return parseInt("" + 100 * this.getVolume())
                }, t.prototype.calculateVolume = function(t) {
                    var e;
                    return this.vertical ? 100 * (1 - (t - (e = this.volumeBarRef.nativeElement.getBoundingClientRect()).top) / e.height) : (t - (e = this.volumeBarRef.nativeElement.getBoundingClientRect()).left) / e.width * 100
                }, t.prototype.setVolume = function(t) {
                    this.target.volume = Math.max(0, Math.min(1, t / 100)), this.ariaValueY = this.ariaValue = 100 * this.target.volume
                }, t.prototype.getVolume = function() {
                    return this.target ? this.target.volume : 0
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            Rt = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-volume {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 100px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n\n        vg-volume .volumeBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n        }\n        vg-volume .volumeBackground {\n            display: flex;\n            flex-grow: 1;\n            height: 5px;\n            pointer-events: none;\n            background-color: #333;\n        }\n        vg-volume .volumeValue {\n            display: flex;\n            height: 5px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeKnob {\n            position: absolute;\n            width: 15px; height: 15px;\n            left: 0; top: 50%;\n            transform: translateY(-50%);\n            border-radius: 15px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeBackground.dragging .volumeValue,\n        vg-volume .volumeBackground.dragging .volumeKnob {\n            transition: none;\n        }\n\n        vg-volume.vertical{\n            height: 100px;\n            width: 3.5em;\n            display: block;\n            padding-top: 2em;\n            line-height: 2em;\n\n        }\n        vg-volume.vertical .volumeBar{\n\n\n            position: relative;\n            display: block;\n            top: 0.3em;\n        }\n        \n        vg-volume.vertical .volumeBackground{\n\n            \n       \n        width: 0.2em;\n        background-color:white;\n        height:100px;\n        margin: 0 auto;\n\n\n    }\n    vg-volume.vertical .volumeValue{\n\n        width: 0.2em;\n        height:auto;\n        position: absolute;\n        bottom: 0;\n        background-color:red;\n    }\n\n    vg-volume.vertical .volumeKnob{\n\n        top: auto;\n    left: 50%;\n   // margin-left: -7.5px;\n    background-color:red;\n    transform: translateX(-50%);\n   // margin-bottom: -15px;\n    }\n\n    vg-volume .caption{\n\n        position: absolute;\n        top: 0;\n        text-align: center;\n        width: 100%;\n        margin-top:0.1em;\n    }\n    "],
                data: {}
            });

        function Lt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "caption"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](1, null, ["", ""]))], null, function(t, e) {
                t(e, 1, 0, e.component.getVolumecCaption())
            })
        }

        function Bt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "volumeBackground"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                dragging: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](4, 0, null, null, 0, "div", [
                ["class", "volumeValue"]
            ], [
                [4, "width", null]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](6, 0, null, null, 0, "div", [
                ["class", "volumeKnob"]
            ], [
                [4, "left", null]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], function(t, e) {
                t(e, 1, 0, "volumeBackground", t(e, 2, 0, e.component.isDragging))
            }, function(t, e) {
                var n = e.component;
                t(e, 4, 0, 85 * n.getVolume() + "%"), t(e, 6, 0, 85 * n.getVolume() + "%")
            })
        }

        function Et(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "volumeBackground"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                dragging: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](4, 0, null, null, 0, "div", [
                ["class", "volumeValue"]
            ], [
                [4, "height", null]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](6, 0, null, null, 0, "div", [
                ["class", "volumeKnob"]
            ], [
                [4, "bottom", null]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], function(t, e) {
                t(e, 1, 0, "volumeBackground", t(e, 2, 0, e.component.isDragging))
            }, function(t, e) {
                var n = e.component;
                t(e, 4, 0, 85 * n.getVolume() + "%"), t(e, 6, 0, 85 * n.getVolume() + "%")
            })
        }

        function Ft(t) {
            return i["\u0275vid"](0, [i["\u0275qud"](402653184, 1, {
                volumeBarRef: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Lt)), i["\u0275did"](3, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](5, 0, [
                [1, 0],
                ["volumeBar", 1]
            ], null, 7, "div", [
                ["aria-label", "volume level"],
                ["aria-level", "polite"],
                ["aria-orientation", "horizontal"],
                ["aria-valuemax", "100"],
                ["aria-valuemin", "0"],
                ["class", "volumeBar"],
                ["role", "slider"],
                ["tabindex", "0"]
            ], [
                [1, "aria-valuenow", 0],
                [1, "aria-valuetext", 0]
            ], [
                [null, "click"],
                [null, "mousedown"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "click" === e && (i = !1 !== l.onClick(n) && i), "mousedown" === e && (i = !1 !== l.onMouseDown(n) && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Bt)), i["\u0275did"](8, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Et)), i["\u0275did"](11, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            \n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, n.vertical), t(e, 8, 0, !n.vertical), t(e, 11, 0, n.vertical)
            }, function(t, e) {
                var n = e.component;
                t(e, 5, 0, n.vertical ? n.ariaValueY : n.ariaValue, n.vertical ? n.ariaValueY : n.ariaValue + "%")
            })
        }
        var Vt = n("Qqtp"),
            zt = n("EJs7"),
            Ht = n("EdOx"),
            Gt = n("yh8d"),
            Wt = function() {
                function t(t, e) {
                    this.API = t, this.controlsHidden = e, this.title = "\u6d4b\u8bd5\uff01", this.isControlHide = !1, this.subscriptions = [], this.shouldShowControl = !1
                }
                return t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    var t = this;
                    this.target = this.API.getMediaById(this.vgFor), this.subscriptions.push(this.controlsHidden.isHidden.subscribe(function(e) {
                        return t.isControlHide = e
                    }))
                }, t
            }(),
            Yt = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-media-title{\n            z-index: 201; \n            position:absolute;\n            width:100%;\n            height:2em;\n            background: linear-gradient(to top, rgba(0, 0, 0, 0), black);\n            opacity: 0.8;\n            padding: 0.5em 0 1em 0.2em;\n            box-sizing: content-box;\n            pointer-event:none;\n            top:0;\n            -webkit-transition: top 0.5s;\n            -khtml-transition: top 0.5s;\n            -moz-transition: top 0.5s;\n            -ms-transition: top 0.5s;\n            transition: top 0.5s;\n        }\n        vg-media-title.hide{\n\n            top:-4em;\n        }\n        .vg-overlay-title{\n            font-size: 18px;\n            padding-left: 0.5em;\n            color:white;\n        }\n    "],
                data: {}
            });

        function _t(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "vg-overlay-title"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](1, null, ["\n                    ", "\n               "]))], null, function(t, e) {
                t(e, 1, 0, e.component.title)
            })
        }
        var Xt = n("0LZJ");
        ! function() {
            if ("undefined" == typeof window || "function" == typeof window.CustomEvent) return !1;

            function t(t, e) {
                e = e || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
            }
            t.prototype = window.Event.prototype, window.CustomEvent = t
        }();
        var jt = function() {
                function t(t, e, n) {
                    this.API = e, this.vgSeekBarAPI = n, this.shouldLoad = !0, this.onShowPauseAds = new i.EventEmitter, this.shouldShow = !0, this.subscriptions = [], this.shouldShowControl = !1, this.pauseImage = null, this.elem = t.nativeElement
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : (this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    })), this.subscriptions.push(this.vgSeekBarAPI.subscript("seekstart", function() {
                        t.shouldShow = !1
                    })), this.subscriptions.push(this.vgSeekBarAPI.subscript("seekend", function() {
                        t.shouldShow = !0
                    })))
                }, t.prototype.onPlayerReady = function() {
                    var t = this;
                    this.target = this.API.getMediaById(this.vgFor), null != this.target && null != this.target.subscriptions && (this.subscriptions.push(this.target.subscriptions.pause.subscribe(function(e) {
                        t.shouldLoad && t.shouldShow && t.list.length > 0 && (t.pauseImage = t.list[Math.floor(Math.random() * t.list.length)], t.onShowPauseAds.next(t.pauseImage))
                    })), this.subscriptions.push(this.target.subscriptions.play.subscribe(function(e) {
                        t.pauseImage = null
                    })))
                }, t.prototype.getBackgroudImage = function() {
                    return this.pauseImage ? {
                        "background-image": "url('" + this.pauseImage.src + "')",
                        "background-repeat": "no-repeat",
                        "background-position": "center",
                        "background-size": "contain"
                    } : {}
                }, t.prototype.close = function() {
                    this.pauseImage = null
                }, t.prototype.navigate = function(t) {
                    t.stopPropagation(), Xt.d.openInNewWindow(this.pauseImage.href)
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            Ut = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-pause-ads{\n        //   position:absolute;\n        //   width:100%;\n        //   height:100%;\n           z-index: 204;\n        }\n        \n        .vg-overlay-pause{\n\n            width: 100%;\n            height: 100%;\n        }\n        .vg-bg{\n            position:absolute;\n\n            max-width: 640px;\n            max-height: 360px;\n            background-size: 100%;\n            margin: 0 auto;\n            cursor:pointer;\n            transform: translate(-50%,-50%);\n            left: 50%;\n            top: 50%;\n            width: 57%;\n            height: 57%;\n        }\n        .vg-b{\n            width: 100%;\n            height: 100%;\n\n        }\n        .vg-pause-close{\n            \n            background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHySURBVHjavJZNSFRRFMd/o0IQrcqyGMZFFEIUGRUhKPRBswghQsGislW4l2IgaNWyMGjjom0biaIwCjISLJionMYMtaJAJshMXES1ydevhQPpzJsP+nh/uIt3zzvnf8/HPefGVMogAewDWoBmYCNQD8wB74EskAaGgVxJK2rYiqspNWN1yOT/j4fZCyNIqoP+GQbz+mVJOtUx/w5jeTuhJMl/QLCUKFlIEi8K0ey8ZiY1CCqb/KmOTujn+cLQxZeSpIoUR0Z151G9PrRopByejmvTYb18rVCSUqnJl2lXUdmtr4eFBei9CHcfQalKz76G3ksQBLBqZaG0C0igdpc84fhb3XVM1+7VW8PF8ucTurVDNxzQ++lSHnej9pcNRXZKtxzR1W1648Hv/ScvteWkNiaX7xejHzVd+apN6rYObdivQ2l990H3HF/8DvNwOdIx9ROwjkp49gp6LsCPABrWQG4Gzp+GE+2VNGdRg6qr/9wVXbF7cR3s0S/fqtEKavLNjqo8ufcYNjdC6w6Y/gi3H1ajORdJTiKrrkjuSSJ0bryZ1u2dmkjqnZHSreXFlLae0k3tevVm2JxJ1OQn2kBRumbmoK4O+s7CoTaIlUhrcxP0nYHaWvj6vVA6AOQi7cKRzJPIJmNkM/6/vFZiUby7fg0AfskAwR4G0nsAAAAASUVORK5CYII=');\n            background-repeat:no-repeat;\n            width:25px;\n            height:25px;\n            //top: -20px;\n            right: -15px;\n            position:absolute;\n            margin-left: auto;\n            margin-right: 0;\n            top: -15px;\n                }\n        .vg-pause-close:hover{\n            background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAK9SURBVHjaxNZtaJVlGAfw355zRCiRSZumx7PKGBM19ai9KMMc2qgQBYn25XySDFGH5QuIpqxGC9oYln0o8uVDIxpIVEiCBSKIIwOdYkEMBjZ8Wa0Zo8QPzvnhPKedPWdnZ+Wg/5cHnuu+rj/3fV/X/3+XDE2uNgaSqMFyLMYclKEP3ehEB06jp1CRkgIkCaRRh5TiuIh2tOHaeEhqUY+1/j1O4BBO5f6MRxa9gv1Y6L9hLSowFcezP4PIDh6EIIuFYZ3aKEkiPKJhgvJSUlUEQfGyJVhSRVlpLlF9WPcfknTeHcx9nE/3smFVpshYWDaPz98h/WL06NJZkmTYRSNx8w/iMVq38/KKwkSLK2l9g1iMv25Ho3VIBuEc5LdpVw/pA/T2c+wA61bmEyydy2dv82SCLe9z5JvoihRqgnDQRseVbl5r4vdbHN3Phprh2LPzObSLqQ+zrYXvzjM0apXlsYZ4xVuYXZCot5+OK6xexqur6ezCEIf38cQstjbz1ZmxbuxuydDk6l5ML9pBT8/jkz1MimeIkzNoPErbyWKZvwWhFhXHjz9z8hyVSaoXcfUGX58ZT2ZZEIqdce3kpRWZhjh7icdmsv758WT2BaGajo1UFUf2MauMNw/yehO3BmipZ/3KYtndQSjXhbGokrYGEtPZ0sz35+m+zvbWzPfDnSO7Lh+dQegHo2PBHA7vpXwaGxv58vRw7IefqG9h4G8+2sULzxQa2I5YQ7yiH6swc0SoMskX72Y0bFMTJ87mp9/oo+Myzz1F3Rpu3+HCL1GfeS8IHa09r8Cjj3B3kB0f8O25QoOWmZsdBxkcZMpD0Wg7erKmlcDHI0SyvJTZM7jUxb17xVU4VcWvvfT9mWtgm3Et1xlr0TwBfgKXsTvrkLlmcQqN4YIHJWjMteCo/R7HwER7/P/2Wpnwd9f9AQCf9MFXVuEYnQAAAABJRU5ErkJggg==');\n\n        }\n    "],
                data: {}
            });

        function Qt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 11, "div", [
                ["class", "vg-overlay-pause"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](2, 0, null, null, 8, "div", [
                ["class", "vg-bg"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](4, 0, null, null, 1, "div", [
                ["class", "vg-pause-close"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.close() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](7, 0, null, null, 2, "div", [
                ["class", "vg-b"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.navigate(n) && i), i
            }, null, null)), i["\u0275did"](8, 278528, null, 0, g.NgStyle, [i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275ted"](-1, null, ["\n                      \n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                   \n               "]))], function(t, e) {
                t(e, 8, 0, e.component.getBackgroudImage())
            }, null)
        }

        function Kt(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275and"](16777216, null, null, 1, null, Qt)), i["\u0275did"](1, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(t, e) {
                t(e, 1, 0, !!e.component.pauseImage)
            }, null)
        }
        var Zt = n("QdfP"),
            qt = function() {
                function t(t, e, n, i) {
                    this.API = e, this.fsAPI = n, this.controlsHidden = i, this.isNativeFullscreen = !1, this.areControlsHidden = !1, this.subscriptions = [], this.isTouchDevice = Xt.d.isTouchDevice, this.isDesktop = !this.isTouchDevice, this.isBuffering = !0, this.shouldShowControl = !1, this.timeout = null, this.lastState = null, this.doubleClickTimer = {
                        left: {
                            timer: null,
                            isSingleClick: !1,
                            clicked: 0,
                            shouldprevent: !1
                        },
                        right: {
                            timer: null,
                            isSingleClick: !1,
                            clicked: 0,
                            shouldprevent: !1
                        }
                    }, this.showCaption = !1, this.doubleClickdelay = 200, this.seekTime = 10, this.viewRight = !1, this.viewLeft = !1, this.elem = t.nativeElement
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    })), this.isDesktop && this.elem.addEventListener("mouseup", function() {
                        var e = t.doubleClickTimer.left;
                        e.isSingleClick = !0, ++e.clicked, null != e.timer ? (Xt.d.clearTimeout(e.timer), e.isSingleClick = !1, e.timer = null, t.doubleToFull("left")) : e.timer = Xt.d.setTimeout(function() {
                            e.isSingleClick && t.onClick(), e.timer = null
                        }, t.doubleClickdelay)
                    })
                }, t.prototype.playOrPauseVideo = function() {
                    var t = this.getState();
                    t == Zt.a.VG_PLAYING ? this.target.pause() : (t = Zt.a.VG_PAUSED) && this.target.play()
                }, t.prototype.onPlayerReady = function() {
                    var t = this;
                    this.target = this.API.getMediaById(this.vgFor), null != this.target && null != this.target.subscriptions && (this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this))), this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this))), this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function(e) {
                        return t.onUpdateBuffer(e)
                    })))
                }, t.prototype.onUpdateBuffer = function(t) {
                    this.isBuffering = t
                }, t.prototype.onChangeFullscreen = function(t) {
                    this.fsAPI.nativeFullscreen && (this.isNativeFullscreen = t)
                }, t.prototype.onHideControls = function(t) {
                    this.areControlsHidden = t, this.areControlsHidden && (this.shouldShowControl = !0)
                }, t.prototype.onClick = function() {
                    var t = this.getState();
                    if (this.isTouchDevice) {
                        switch (t) {
                            case Zt.a.VG_PLAYING:
                                this.shouldShowControl ? (this.shouldShowControl = !1, this.controlsHidden.show()) : this.controlsHidden.force(!0);
                                break;
                            case Zt.a.VG_PAUSED:
                            case Zt.a.VG_ENDED:
                                this.shouldShowControl = !1, this.target.play()
                        }
                        this.lastState = t
                    } else switch (t) {
                        case Zt.a.VG_PLAYING:
                            this.target.pause();
                            break;
                        case Zt.a.VG_PAUSED:
                        case Zt.a.VG_ENDED:
                            this.shouldShowControl = !1, this.target.play()
                    }
                    this.lastState = t
                }, t.prototype.pauseVideo = function() {
                    var t = this.getState();
                    t == Zt.a.VG_PLAYING ? this.target.pause() : (t = Zt.a.VG_PAUSED) && this.target.play()
                }, t.prototype.onSeekStart = function() {
                    this.showCaption = !0
                }, t.prototype.onSeekEnd = function() {
                    this.showCaption = !1
                }, t.prototype.handleClick = function(t) {
                    var e, n = this;
                    this.isTouchDevice && (this.getState() == Zt.a.VG_PAUSED ? ((e = this.doubleClickTimer[t]).isSingleClick = !0, null != e.timer && Xt.d.clearTimeout(e.timer), this.onClick()) : ((e = this.doubleClickTimer[t]).isSingleClick = !0, null != e.timer ? (Xt.d.clearTimeout(e.timer), this.handleDouble(t)) : e.timer = Xt.d.setTimeout(function() {
                        e.isSingleClick && n.onClick(), e.timer = null
                    }, this.doubleClickdelay)))
                }, t.prototype.handleDouble = function(t) {
                    var e = this.doubleClickTimer[t];
                    e.isSingleClick = !1, e.timer = null, "left" == t ? (this.API.seekTime(this.API.currentTime - this.seekTime), this.playWithLeft()) : (this.API.seekTime(this.API.currentTime + this.seekTime), this.playWithRight())
                }, t.prototype.doubleToFull = function(t) {
                    this.fsAPI.toggleFullscreen()
                }, t.prototype.playWithLeft = function() {
                    var t = this;
                    this.viewLeft = !0, Xt.d.setTimeout(function() {
                        t.viewLeft = !1, Xt.d.setTimeout(function() {
                            t.viewLeft = !0, Xt.d.setTimeout(function() {
                                return t.viewLeft = !1
                            }, 100)
                        }, 100)
                    }, 100)
                }, t.prototype.playWithRight = function() {
                    var t = this;
                    this.viewRight = !0, Xt.d.setTimeout(function() {
                        t.viewRight = !1, Xt.d.setTimeout(function() {
                            t.viewRight = !0, Xt.d.setTimeout(function() {
                                return t.viewRight = !1
                            }, 100)
                        }, 100)
                    }, 100)
                }, t.prototype.getState = function() {
                    var t = Zt.a.VG_PAUSED;
                    if (this.target)
                        if (this.target.state instanceof Array) {
                            for (var e = 0, n = this.target.state.length; e < n; e++)
                                if (this.target.state[e] === Zt.a.VG_PLAYING) {
                                    t = Zt.a.VG_PLAYING;
                                    break
                                }
                        } else t = this.target.state;
                    return t
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t.prototype.getBackgroudImage = function() {
                    return this.logo ? {
                        "background-image": "url('" + this.logo + "')"
                    } : {}
                }, t
            }(),
            Jt = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-overlay-play {\n            z-index: 200;\n        }\n        vg-overlay-play.is-buffering {\n            display: none;\n        }\n        vg-overlay-play.isdesktop .vv-state\n        {\n            pointer-events:none;\n        }\n   \n        vg-overlay-play .vg-overlay-play {\n            \n           \n            position: absolute;\n            display: block;\n            color: white;\n            width: 100%;\n            height: 100%;\n            font-size: 80px;\n           \n\n        }\n        vg-overlay-play .vg-overlay-play.is-buffering\n        {\n            display:none;\n        }\n\n        vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n\n        .vg-overlay-play .overlay-play-container{\n            width:100%;\n            height:100%;\n            position:relative;\n          }\n\n\n        .vv-state{\n            width: 2.5em;\n            height: 2.5em;\n            position: absolute;\n            color:white;\n            font-size: 100px;\n          //  background-color: rgba(255, 255, 255, 0.95);\n           // color: black;\n            border-radius: 50%;\n            padding: 0.5em;\n            left:50%;\n            top:50%;\n            margin-left: -1.25em;\n            margin-top: -1.5em;\n            transition:opacity 0.3s;\n            opacity:0;\n            visibility:hidden;\n        }\n\n        .overlay-play-container  .vg-icon-pause{\n\n            opacity:1.0;\n            visibility:visible;\n      \n         }\n \n         .overlay-play-container .vg-icon-play_arrow {\n              \n                opacity:1.0;\n               visibility:visible;\n         }\n \n        vg-overlay-play .vg-overlay-play:hover {\n            filter: alpha(opacity=100);\n            opacity: 1;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before {\n            transform: scale(1.2);\n        }\n\n        .overlay-play-container .overlay-part{\n            width:50%;\n             height:100%;\n            text-align: center;\n          }\n        .overlay-play-container .overlay-part.overlay-play-left{\n            float:left;\n          }\n        .overlay-play-container .overlay-part.overlay-play-right{\n            float:right;\n          }\n      .overlay-part>svg{\n          \n          height: 2em;\n          width: 3em;\n          font-size: 14px;\n          position: absolute;\n          top: 50%;\n          margin-top: -1.5em;\n      }\n    \n    \n       .overlay-part.overlay-play-left>svg{\n            transform: scaleX(-1);\n        left: 1em;\n        }\n       .overlay-part.overlay-play-right>svg{\n             //  margin-left: 1.2em;\n          right:2em;\n        }\n    \n        .overlay-caption{\n               width: 100%;\n        height: 3.5em;\n        font-size: 15px;\n        text-align: center;\n        background: linear-gradient(to top, transparent, black);\n        padding-top: 1em;\n        }\n    \n        .overlay-logo{\n          position:absolute;\n          width: 1.5em;\n          height: 1em;\n          pointer-events: none;\n          background-position:left top;\n          background-repeat:no-repeat;\n          margin-left: 0.5em;\n          margin-top: 0.7em;\n          top:0;\n         -webkit-transition: top 1s;\n                -khtml-transition: top 1s;\n                -moz-transition: top 1s;\n                -ms-transition: top 1s;\n                transition: top 1s;\n            background-size: contain;\n            font-size: 70px;\n        }\n        .overlay-logo.hide{\n          //top:-1em;\n      \n        }\n    "],
                data: {}
            });

        function $t(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "overlay-caption"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5728\u5de6\u4fa7\u6216\u53f3\u4fa7\u70b9\u6309\u4e24\u6b21\u5373\u53ef\u8df3\u8fc710\u79d2"]))], null, null)
        }

        function te(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 5, ":svg:svg", [
                [":xml:space", "preserve"],
                [":xmlns:xlink", "http://www.w3.org/1999/xlink"],
                ["id", "jump"],
                ["style", "/* display: none; */"],
                ["version", "1.1"],
                ["viewBox", "0 0 36 24"],
                ["x", "0px"],
                ["xmlns", "http://www.w3.org/2000/svg"],
                ["y", "0px"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](2, 0, null, null, 0, ":svg:polygon", [
                ["class", "arrow"],
                ["id", "arrow-1"],
                ["points", "5,18 13.5,12 5,6 "]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](4, 0, null, null, 0, ":svg:polygon", [
                ["class", "arrow"],
                ["id", "arrow-2"],
                ["points", "14,18 22.5,12 14,6 "]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                      "]))], null, null)
        }

        function ee(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 5, ":svg:svg", [
                [":xml:space", "preserve"],
                [":xmlns:xlink", "http://www.w3.org/1999/xlink"],
                ["id", "jump"],
                ["version", "1.1"],
                ["viewBox", "0 0 36 24"],
                ["x", "0px"],
                ["xmlns", "http://www.w3.org/2000/svg"],
                ["y", "0px"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](2, 0, null, null, 0, ":svg:polygon", [
                ["class", "arrow"],
                ["id", "arrow-2"],
                ["points", "14,18 22.5,12 14,6 "]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](4, 0, null, null, 0, ":svg:polygon", [
                ["class", "arrow"],
                ["id", "arrow-3"],
                ["points", "23,6 23,18 31.5,12 "]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                      "]))], null, null)
        }

        function ne(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 3, "div", [
                ["class", "overlay-logo"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                hide: 0
            }), i["\u0275did"](3, 278528, null, 0, g.NgStyle, [i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "overlay-logo", t(e, 2, 0, n.areControlsHidden)), t(e, 3, 0, n.getBackgroudImage())
            }, null)
        }

        function ie(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 23, "div", [
                ["class", "vg-overlay-play"]
            ], [
                [2, "native-fullscreen", null],
                [2, "controls-hidden", null],
                [2, "is-buffering", null]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](2, 0, null, null, 20, "div", [
                ["class", "overlay-play-container"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                     \n                    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, $t)), i["\u0275did"](5, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](7, 0, null, null, 2, "div", [
                ["class", "vv-state"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.playOrPauseVideo() && i), i
            }, null, null)), i["\u0275did"](8, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](9, {
                "vg-icon-play_arrow": 0,
                "vg-icon-pause": 1
            }), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](11, 0, null, null, 4, "div", [
                ["class", "overlay-part overlay-play-left"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.handleClick("left") && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                      "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, te)), i["\u0275did"](14, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](17, 0, null, null, 4, "div", [
                ["class", "overlay-part overlay-play-right"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.handleClick("right") && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                      "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ee)), i["\u0275did"](20, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275ted"](-1, null, ["\n               "])), (t()(), i["\u0275ted"](-1, null, ["\n               "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ne)), i["\u0275did"](26, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n               \n               "]))], function(t, e) {
                var n = e.component;
                t(e, 5, 0, n.showCaption), t(e, 8, 0, "vv-state", t(e, 9, 0, "playing" !== n.getState(), n.isTouchDevice && !n.shouldShowControl)), t(e, 14, 0, n.viewLeft), t(e, 20, 0, n.viewRight), t(e, 26, 0, !n.isPlayingAds)
            }, function(t, e) {
                var n = e.component;
                t(e, 0, 0, n.isNativeFullscreen, n.areControlsHidden, n.isBuffering)
            })
        }
        var le = function() {
                function t(t, e) {
                    this.API = e, this.checkInterval = 50, this.currentPlayPos = 0, this.lastPlayPos = 0, this.subscriptions = [], this.isBuffering = !0, this.elem = t.nativeElement
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    var t = this;
                    this.target = this.API.getMediaById(this.vgFor), null != this.target && null != this.target.subscriptions && this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function(e) {
                        return t.onUpdateBuffer(e)
                    }))
                }, t.prototype.onUpdateBuffer = function(t) {
                    this.isBuffering = t
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            se = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-buffering {\n            display: none;\n            z-index: 201;\n        }\n\n        vg-buffering.is-buffering {\n            display: block;\n        }\n\n        .vg-buffering {\n            position: absolute;\n            display: block;\n            width: 100%;\n            height: 100%;\n        }\n\n        .vg-buffering .bufferingContainer {\n            width: 100%;\n            position: absolute;\n            cursor: pointer;\n            top: 50%;\n            margin-top: -50px;\n\n            zoom: 1;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        \n        .vg-buffering .loadingSpinner {\n            background-color: rgba(0, 0, 0, 0);\n            border: 2px solid white;\n            opacity: .9;\n            border-top: 5px solid rgba(0, 0, 0, 0);\n            border-left: 5px solid rgba(0, 0, 0, 0);\n            border-radius: 50px;\n            //box-shadow: 0 0 35px #FFFFFF;\n            width: 50px;\n            height: 50px;\n            margin: 0 auto;\n            -moz-animation: spin .5s infinite linear;\n            -webkit-animation: spin .5s infinite linear;\n        }\n\n        .vg-buffering .loadingSpinner .stop {\n            -webkit-animation-play-state: paused;\n            -moz-animation-play-state: paused;\n        }\n\n        @-moz-keyframes spin {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(360deg);\n            }\n        }\n\n        @-moz-keyframes spinoff {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(-360deg);\n            }\n        }\n\n        @-webkit-keyframes spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(360deg);\n            }\n        }\n\n        @-webkit-keyframes spinoff {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(-360deg);\n            }\n        }\n    "],
                data: {}
            });

        function ae(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 6, "div", [
                ["class", "vg-buffering"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](2, 0, null, null, 3, "div", [
                ["class", "bufferingContainer"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](4, 0, null, null, 0, "div", [
                ["class", "loadingSpinner"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], null, null)
        }
        n("MQ0p");
        var oe = function() {
                function t(t, e, n) {
                    this.API = t, this.ref = e, this.hidden = n, this.isAdsPlaying = "initial", this.hideControls = !1, this.vgAutohide = !1, this.vgAutohideTime = 3, this.subscriptions = [], this.elem = e.nativeElement
                }
                return t.prototype.ngOnInit = function() {
                    var t = this,
                        e = m.a.fromEvent(this.API.videogularElement, "mousemove");
                    if (this.subscriptions.push(e.subscribe(this.show.bind(this))), !Xt.d.shouldHandleMouse) {
                        var n = m.a.fromEvent(this.API.videogularElement, "touchstart", {
                            passive: !0
                        });
                        this.subscriptions.push(n.subscribe(this.show.bind(this)))
                    }
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    this.target = this.API.getMediaById(this.vgFor), null != this.target && null != this.target.subscriptions && (this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this))), this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this))), this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this))), this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this))))
                }, t.prototype.ngAfterViewInit = function() {
                    this.vgAutohide ? this.hide() : this.show()
                }, t.prototype.onPlay = function() {
                    this.vgAutohide && this.hide()
                }, t.prototype.onPause = function() {
                    clearTimeout(this.timer), this.hideControls = !1, this.hidden.state(!1)
                }, t.prototype.onStartAds = function() {
                    this.isAdsPlaying = "none"
                }, t.prototype.onEndAds = function() {
                    this.isAdsPlaying = "initial"
                }, t.prototype.hide = function() {
                    this.vgAutohide && (clearTimeout(this.timer), this.hideAsync())
                }, t.prototype.show = function() {
                    clearTimeout(this.timer), this.hideControls = !1, this.hidden.state(!1), this.vgAutohide && this.hideAsync()
                }, t.prototype.hideAsync = function() {
                    var t = this;
                    this.API.state === Zt.a.VG_PLAYING && (this.timer = setTimeout(function() {
                        t.hideControls = !0, t.hidden.state(!0)
                    }, 1e3 * this.vgAutohideTime))
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            re = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-controls {\n            position: absolute;\n            display: flex;\n            width: 100%;\n            height: 50px;\n            z-index: 300;\n            bottom: 0;\n            background-color: rgba(0, 0, 0, 0.5);\n            -webkit-transition: bottom 1s;\n            -khtml-transition: bottom 1s;\n            -moz-transition: bottom 1s;\n            -ms-transition: bottom 1s;\n            transition: bottom 1s;\n        }\n\n        vg-controls.hide {\n            bottom: -50px;\n        }\n    "],
                data: {}
            });

        function ue(t) {
            return i["\u0275vid"](0, [i["\u0275ncd"](null, 0)], null, null)
        }
        var he = function() {
                function t(t, e, n, i) {
                    var l = this;
                    this.API = e, this.vgSeekBarAPI = i, this.hideScrubBar = !1, this.vgSlider = !0, this.isSeeking = !1, this.wasPlaying = !1, this.display = "", this.percetange = "0%", this.subscriptions = [], this.playerReady = !1, this.asClick = null, this.hasPaused = !1, this.timeout = null, this.elem = t.nativeElement, this.subscriptions.push(n.isHidden.subscribe(function(t) {
                        return l.onHideScrubBar(t)
                    }))
                }
                return Object.defineProperty(t.prototype, "istouchdevice", {
                    get: function() {
                        return Xt.d.isTouchDevice
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    this.target = this.API.getMediaById(this.vgFor), this.playerReady = !0
                }, t.prototype.seekStart = function() {
                    this.target.canPlay && (this.isSeeking = !0, this.target.state === Zt.a.VG_PLAYING && (this.wasPlaying = !0), this.hasPaused = !1, this.vgSeekBarAPI.notify("seekstart"))
                }, t.prototype.seekMove = function(t) {
                    var e = this;
                    if (this.isSeeking) {
                        this.asClick ? (Xt.d.clearTimeout(this.asClick), this.asClick = null) : this.hasPaused || (this.hasPaused = !0, this.target.pause());
                        var n = Math.max(Math.min(100 * t / this.elem.scrollWidth, 99.9), 0);
                        this.target.time.current = n * this.target.time.total / 100, null != this.timeout && Xt.d.clearTimeout(this.timeout), this.timeout = Xt.d.setTimeout(function() {
                            return e.target.seekTime(n, !0)
                        }, 50)
                    }
                }, t.prototype.seekEnd = function(t) {
                    if (this.isSeeking = !1, this.target.canPlay) {
                        clearTimeout(this.timeout);
                        var e = Math.max(Math.min(100 * t / this.elem.scrollWidth, 99.9), 0);
                        this.target.time.current = e * this.target.time.total / 100, this.target.seekTime(e, !0), this.wasPlaying && (this.wasPlaying = !1, this.target.play())
                    }
                    this.vgSeekBarAPI.notify("seekend")
                }, t.prototype.touchEnd = function() {
                    this.isSeeking = !1, this.wasPlaying && (this.wasPlaying = !1, this.target.play())
                }, t.prototype.getTouchOffset = function(t) {
                    for (var e = 0, n = t.target; n;) e += n.offsetLeft, n = n.offsetParent;
                    return t.touches[0].pageX - e
                }, t.prototype.onMouseDownScrubBar = function(t) {
                    this.target && (this.target.isLive || (this.vgSlider ? this.seekStart() : this.seekEnd(t.offsetX)))
                }, t.prototype.onClick = function(t) {
                    this.target && (this.target.isLive || this.seekEnd(t.offsetX))
                }, t.prototype.getPosition = function(t) {
                    var e = t.getBoundingClientRect();
                    if (e.width || e.height || t.getClientRects().length) return {
                        top: e.top + window.pageYOffset - document.documentElement.clientTop,
                        left: e.left + window.pageXOffset - document.documentElement.clientLeft
                    }
                }, t.prototype.onMouseMoveScrubBar = function(t) {
                    if (Xt.d.shouldHandleMouse && this.target && !this.target.isLive && this.vgSlider && this.isSeeking) {
                        var e = this.getPosition(this.elem).left;
                        t.clientX >= e && t.clientX <= e + this.elem.offsetWidth && this.seekMove(t.clientX - e)
                    }
                }, t.prototype.onMouseOver = function(t) {
                    if (Xt.d.shouldHandleMouse && this.target && !this.target.isLive) {
                        var e = Math.max(Math.min(t.offsetX / this.elem.scrollWidth, .999), 0),
                            n = new Date(this.target.time.total * e),
                            i = "hh:mm:ss",
                            l = n.getUTCSeconds(),
                            s = n.getUTCMinutes(),
                            a = n.getUTCHours();
                        l < 10 && (l = "0" + l), s < 10 && (s = "0" + s), a < 10 && (a = "0" + a), i = (i = (i = i.replace(/ss/g, l)).replace(/mm/g, s)).replace(/hh/g, a), this.display = i, e > .95 && (e = .95), e < .05 && (e = .05), this.percetange = 100 * e + "%"
                    }
                }, t.prototype.onMouseUpScrubBar = function(t) {
                    Xt.d.shouldHandleMouse && this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.seekEnd(t.offsetX)
                }, t.prototype.onTouchStartScrubBar = function(t) {
                    var e = this;
                    if (!Xt.d.shouldHandleMouse && this.target && !this.target.isLive)
                        if (this.vgSlider) {
                            null != this.asClick && Xt.d.clearTimeout(this.asClick);
                            var n = this.getTouchOffset(t);
                            this.asClick = Xt.d.setTimeout(function() {
                                e.seekEnd(n)
                            }, 250), this.seekStart()
                        } else this.seekEnd(this.getTouchOffset(t))
                }, t.prototype.onTouchMoveScrubBar = function(t) {
                    Xt.d.shouldHandleMouse || this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.seekMove(this.getTouchOffset(t))
                }, t.prototype.onTouchCancelScrubBar = function(t) {
                    Xt.d.shouldHandleMouse || this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.touchEnd()
                }, t.prototype.onTouchEndScrubBar = function(t) {
                    Xt.d.shouldHandleMouse || this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.touchEnd()
                }, t.prototype.arrowAdjustVolume = function(t) {
                    var e = document.activeElement;
                    (null == e || "input" != e.tagName.toLowerCase() && !e.hasAttribute("contenteditable")) && this.target && (39 === t.keyCode ? (t.preventDefault(), this.target.seekTime((this.target.time.current + 5e3) / 1e3, !1)) : 37 === t.keyCode && (t.preventDefault(), this.target.seekTime((this.target.time.current - 5e3) / 1e3, !1)))
                }, t.prototype.getPercentage = function() {
                    return this.target ? 100 * this.target.time.current / this.target.time.total + "%" : "0%"
                }, t.prototype.onHideScrubBar = function(t) {
                    this.hideScrubBar = t
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            de = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-scrub-bar {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            position: absolute;\n            width: 100%;\n            height: 5px;\n            bottom: 50px;\n            margin: 0;\n            cursor: pointer;\n            align-items: center;\n            background: rgba(0, 0, 0, 0.75);\n            z-index: 250;\n            -webkit-transition: bottom 1s, opacity 0.5s;\n            -khtml-transition: bottom 1s, opacity 0.5s;\n            -moz-transition: bottom 1s, opacity 0.5s;\n            -ms-transition: bottom 1s, opacity 0.5s;\n            transition: bottom 1s, opacity 0.5s;\n        }\n        \n        vg-scrub-bar .scrubBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            height: 1em;\n        }\n\n        vg-controls vg-scrub-bar {\n            position: relative;\n            bottom: 0;\n            background: transparent;\n            height: 50px;\n            flex-grow: 1;\n            flex-basis: 0;\n            margin: 0 10px;\n            -webkit-transition: initial;\n            -khtml-transition: initial;\n            -moz-transition: initial;\n            -ms-transition: initial;\n            transition: initial;\n        }\n\n        vg-scrub-bar.hide {\n            bottom: 0;\n            opacity: 0;\n        }\n\n        vg-controls vg-scrub-bar.hide {\n            bottom: initial;\n            opacity: initial;\n        }\n        .scrubBar .overshow{\n            position: absolute;\n            top: -2.5em;\n            background-color: #222222;\n            text-align: center;\n            font-size: 15px;\n            color: white;\n            padding: 0.2em 1em;\n            border: 1px solid #4d4d4d;\n            display:none;\n            transform: translateX(-50%);\n        }\n        .scrubBar:hover .overshow{\n\n            display:block;\n        }\n        \n    "],
                data: {}
            });

        function ce(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 3, "div", [
                ["class", "overshow"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgStyle, [i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), i["\u0275pod"](2, {
                left: 0
            }), (t()(), i["\u0275ted"](3, null, ["", ""]))], function(t, e) {
                t(e, 1, 0, t(e, 2, 0, e.component.percetange))
            }, function(t, e) {
                t(e, 3, 0, e.component.display)
            })
        }

        function pe(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](1, 0, null, null, 6, "div", [
                ["aria-label", "scrub bar"],
                ["aria-level", "polite"],
                ["aria-valuemax", "100"],
                ["aria-valuemin", "0"],
                ["class", "scrubBar"],
                ["role", "slider"],
                ["tabindex", "0"]
            ], [
                [1, "aria-valuenow", 0],
                [1, "aria-valuetext", 0]
            ], [
                [null, "mousemove"]
            ], function(t, e, n) {
                var i = !0;
                return "mousemove" === e && (i = !1 !== t.component.onMouseOver(n) && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), i["\u0275ncd"](null, 0), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ce)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        \n    "]))], function(t, e) {
                var n = e.component;
                t(e, 6, 0, !n.istouchdevice && n.playerReady)
            }, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.getPercentage(), n.getPercentage() + "%")
            })
        }
        var ge = function() {
                function t(t, e) {
                    this.API = e, this.vgSlider = !1, this.subscriptions = [], this.elem = t.nativeElement
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    this.target = this.API.getMediaById(this.vgFor)
                }, t.prototype.getPercentage = function() {
                    var t = 0;
                    return this.target && this.target.time.total > 0 && (t = this.target.time.current / this.target.time.total), 100 * t + "%"
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            fe = i["\u0275crt"]({
                encapsulation: 2,
                styles: ['\n        vg-scrub-bar-current-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-current-time .background {\n            background-color: #fe0000;\n           // border-radius: 0.2em;\n            z-index:1;\n        }\n        vg-scrub-bar-current-time .background::before {\n            content: " ";\n            width: 16px;\n            height: 16px;\n            position: relative;\n            display: block;\n            //  right: -8px;\n            background-color: white;\n            border: 3px solid red;\n            border-radius: 50%;\n            top: -4px;\n            right: 0;\n            float: right;\n            right: -9px;\n          }\n\n        vg-controls vg-scrub-bar-current-time {\n            position: absolute;\n            top: calc(50% - 3px);\n           \n        }\n\n        vg-controls vg-scrub-bar-current-time .background {\n           // border: 1px solid white;\n            //-webkit-border-radius: 2px;\n            //-moz-border-radius: 2px;\n            //border-radius: 2px;\n        }\n        \n        vg-scrub-bar-current-time .slider{\n            background: white;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            box-shadow: 0px 0px 10px black;\n            margin-top: -5px;\n            margin-left: -10px;\n        }\n    '],
                data: {}
            });

        function me(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 0, "span", [
                ["class", "slider"]
            ], null, null, null, null, null))], null, null)
        }

        function ve(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 0, "div", [
                ["class", "background"]
            ], [
                [4, "width", null]
            ], null, null, null, null)), (t()(), i["\u0275and"](16777216, null, null, 1, null, me)), i["\u0275did"](2, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(t, e) {
                t(e, 2, 0, e.component.vgSlider)
            }, function(t, e) {
                t(e, 0, 0, e.component.getPercentage())
            })
        }
        var be = function() {
                function t(t, e) {
                    this.API = e, this.subscriptions = [], this.elem = t.nativeElement
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    this.target = this.API.getMediaById(this.vgFor)
                }, t.prototype.getBufferTime = function() {
                    var t = "0%";
                    return this.target && this.target.buffer && this.target.buffered.length && (t = 0 === this.target.time.total ? "0%" : this.target.buffer.end / this.target.time.total * 100 + "%"), t
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            ye = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-scrub-bar-buffering-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-buffering-time .background {\n            background-color: rgba(255, 255, 255, 0.3);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time .background {\n            \n        }\n    "],
                data: {}
            });

        function Ae(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 0, "div", [
                ["class", "background"]
            ], [
                [4, "width", null]
            ], null, null, null, null))], null, function(t, e) {
                t(e, 0, 0, e.component.getBufferTime())
            })
        }
        var xe = function() {
                function t(t, e) {
                    this.API = e, this.subscriptions = [], this.ariaValue = Zt.a.VG_PAUSED, this.elem = t.nativeElement
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    this.target = this.API.getMediaById(this.vgFor)
                }, t.prototype.onClick = function() {
                    this.playPause()
                }, t.prototype.onKeyDown = function(t) {
                    var e = document.activeElement;
                    (null == e || "input" != e.tagName.toLowerCase() && !e.hasAttribute("contenteditable")) && 32 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.playPause())
                }, t.prototype.playPause = function() {
                    switch (this.getState()) {
                        case Zt.a.VG_PLAYING:
                            this.target.pause();
                            break;
                        case Zt.a.VG_PAUSED:
                        case Zt.a.VG_ENDED:
                            this.target.play()
                    }
                }, t.prototype.getState = function() {
                    return this.ariaValue = this.target ? this.target.state : Zt.a.VG_PAUSED, this.ariaValue
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            Ce = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-play-pause {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-play-pause .icon {\n            pointer-events: none;\n        }\n    "],
                data: {}
            });

        function we(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](1, 0, null, null, 1, "div", [
                ["class", "icon"],
                ["role", "button"],
                ["tabindex", "0"]
            ], [
                [2, "vg-icon-pause", null],
                [2, "vg-icon-play_arrow", null],
                [1, "aria-label", 0],
                [1, "aria-valuetext", 0]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, "playing" === n.getState(), "paused" === n.getState() || "ended" === n.getState(), "paused" === n.getState() ? "play" : "pause", n.ariaValue)
            })
        }
        var ke = function() {
                function t(t) {
                    this.API = t, this.subscriptions = [], this.isAvailable = !1, this.attched = !1
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    (Xt.d.isiOSDevice() || Xt.d.IsMac()) && (this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    })), this.detectAirplay())
                }, t.prototype.detectAirplay = function() {
                    if (window.WebKitPlaybackTargetAvailabilityEvent) {
                        this.attched = !0;
                        var t = this.video.nativeElement;
                        t.addEventListener("webkitplaybacktargetavailabilitychanged", function(e) {
                            switch (e.availability) {
                                case "available":
                                    this.isAvailable = !0, t.parentElement.classList.add("show"), t.remove();
                                    break;
                                case "not-available":
                                    this.isAvailable = !1
                            }
                        })
                    }
                }, t.prototype.onPlayerReady = function() {}, t.prototype.showList = function() {
                    var t = this.API.getDefaultMedia();
                    this.attched && null != t && t.elem.webkitShowPlaybackTargetPicker()
                }, t
            }(),
            Me = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n    vg-airplay\n     {\n      \n        display: none !important;\n        width: 1.8em;\n        height: 1.2em;\n        text-align: center;\n        color:white;\n        cursor:pointer;\n        margin-right: 2em !important;\n\n     }\n     vg-airplay .icon{\n     }\n     vg-airplay .icon:before{\n       color:white;\n     }\n     vg-airplay.show\n     {\n\n       display:inline-block !important;\n       cursor:pointer;\n     }\n  "],
                data: {}
            });

        function Se(t) {
            return i["\u0275vid"](0, [i["\u0275qud"](402653184, 1, {
                video: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n      "])), (t()(), i["\u0275eld"](2, 0, null, null, 3, "div", [
                ["class", "icon vg-icon-airplay"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.showList() && i), i
            }, null, null)), i["\u0275did"](3, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](4, {
                show: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n      "])), (t()(), i["\u0275ted"](-1, null, ["\n      "])), (t()(), i["\u0275eld"](7, 0, [
                [1, 0],
                ["videoElement", 1]
            ], null, 0, "video", [
                ["style", "display:none"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n      "]))], function(t, e) {
                t(e, 3, 0, "icon vg-icon-airplay", t(e, 4, 0, e.component.isAvailable))
            }, null)
        }
        var Pe = function() {
                function t(t, e) {
                    this.API = e, this.subscriptions = [], this.ariaValue = "unmuted", this.elem = t.nativeElement
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    this.target = this.API.getMediaById(this.vgFor), this.currentVolume = this.target.volume
                }, t.prototype.onClick = function() {
                    this.changeMuteState()
                }, t.prototype.onKeyDown = function(t) {
                    13 !== t.keyCode && 32 !== t.keyCode || (t.preventDefault(), this.changeMuteState())
                }, t.prototype.changeMuteState = function() {
                    var t = this.getVolume();
                    0 === t ? (0 === this.target.volume && 0 === this.currentVolume && (this.currentVolume = 1), this.target.volume = this.currentVolume) : (this.currentVolume = t, this.target.volume = 0)
                }, t.prototype.getVolume = function() {
                    var t = this.target ? this.target.volume : 0;
                    return this.ariaValue = t ? "unmuted" : "muted", t
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            Ne = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-mute {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-mute .icon {\n            pointer-events: none;\n        }\n    "],
                data: {}
            });

        function Ie(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](1, 0, null, null, 1, "div", [
                ["aria-label", "mute button"],
                ["class", "icon"],
                ["role", "button"],
                ["tabindex", "0"]
            ], [
                [2, "vg-icon-volume_up", null],
                [2, "vg-icon-volume_down", null],
                [2, "vg-icon-volume_mute", null],
                [2, "vg-icon-volume_off", null],
                [1, "aria-valuetext", 0]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.getVolume() >= .75, n.getVolume() >= .25 && n.getVolume() < .75, n.getVolume() > 0 && n.getVolume() < .25, 0 === n.getVolume(), n.ariaValue)
            })
        }
        var Te = function() {
                function t() {}
                return t.prototype.transform = function(t, e) {
                    var n = new Date(t),
                        i = e,
                        l = n.getUTCSeconds(),
                        s = n.getUTCMinutes(),
                        a = n.getUTCHours();
                    return l < 10 && (l = "0" + l), s < 10 && (s = "0" + s), a < 10 && (a = "0" + a), (i = (i = i.replace(/ss/g, l)).replace(/mm/g, s)).replace(/hh/g, a)
                }, t
            }(),
            Oe = function() {
                function t(t, e) {
                    this.API = e, this.vgProperty = "current", this.vgFormat = "mm:ss", this.subscriptions = [], this.elem = t.nativeElement
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    this.target = this.API.getMediaById(this.vgFor)
                }, t.prototype.getTime = function() {
                    var t = 0;
                    return this.target && (t = Math.round(this.target.time[this.vgProperty]), t = isNaN(t) || this.target.isLive ? 0 : t), t
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            De = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-time-display {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 60px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            pointer-events: none;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "],
                data: {}
            });

        function Re(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["LIVE"]))], null, null)
        }

        function Le(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](1, null, ["", ""])), i["\u0275ppd"](2, 2)], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, i["\u0275unv"](e, 1, 0, t(e, 2, 0, i["\u0275nov"](e.parent, 0), n.getTime(), n.vgFormat)))
            })
        }

        function Be(t) {
            return i["\u0275vid"](0, [i["\u0275pid"](0, Te, []), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Re)), i["\u0275did"](3, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Le)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), i["\u0275ncd"](null, 0), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, null == n.target ? null : n.target.isLive), t(e, 6, 0, !(null != n.target && n.target.isLive))
            }, null)
        }
        var Ee = function() {
                function t(t, e, n) {
                    this.API = e, this.fsAPI = n, this.isFullscreen = !1, this.subscriptions = [], this.ariaValue = "normal mode", this.elem = t.nativeElement, this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)))
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
                        return t.onPlayerReady()
                    }))
                }, t.prototype.onPlayerReady = function() {
                    this.target = this.API.getMediaById(this.vgFor)
                }, t.prototype.onChangeFullscreen = function(t) {
                    this.ariaValue = t ? "fullscren mode" : "normal mode", this.isFullscreen = t
                }, t.prototype.onClick = function() {
                    this.changeFullscreenState()
                }, t.prototype.onKeyDown = function(t) {
                    13 !== t.keyCode && 32 !== t.keyCode || (t.preventDefault(), this.changeFullscreenState())
                }, t.prototype.changeFullscreenState = function() {
                    var t = this.target;
                    this.target instanceof wt.a && (t = null), this.fsAPI.toggleFullscreen(t)
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            Fe = i["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n        vg-fullscreen {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-fullscreen .icon {\n            pointer-events: none;\n        }\n    "],
                data: {}
            });

        function Ve(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](1, 0, null, null, 1, "div", [
                ["aria-label", "fullscreen button"],
                ["class", "icon"],
                ["role", "button"],
                ["tabindex", "0"]
            ], [
                [2, "vg-icon-fullscreen", null],
                [2, "vg-icon-fullscreen_exit", null],
                [1, "aria-valuetext", 0]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, !n.isFullscreen, n.isFullscreen, n.ariaValue)
            })
        }
        var ze, He = n("o+Ym"),
            Ge = n("5IUS"),
            We = n("Gvdl"),
            Ye = function(t) {
                return t[t.Timer = 0] = "Timer", t[t.SkipTimer = 1] = "SkipTimer", t[t.ShouldPlayAds = 2] = "ShouldPlayAds", t[t.ShouldLoadAds = 3] = "ShouldLoadAds", t[t.ShouldBackToPlay = 4] = "ShouldBackToPlay", t[t.ShouldCancel = 5] = "ShouldCancel", t[t.StandBy = 6] = "StandBy", t
            }({}),
            _e = function() {
                function t() {
                    this.pointToshow = [], this.eventList = new i.EventEmitter, this.timer = null, this.subscript = null, this.globalsubscript = null, this.dataList = [], this.maxSecond = 20, this.waitSecond = 5, this.skipSecond = 0, this.startSecond = 600, this.everySecond = 1200, this.isPlayingAds = !1, this.globaltimer = null, this.state = Ye.StandBy, this.ispaused = !1, this.pausesecond = 0, this.index = 0, this.key = "", this.rules = [{
                        second: 3600,
                        min: 2,
                        every: 900,
                        left: 360
                    }, {
                        second: 18e3,
                        min: 3,
                        every: 1500,
                        left: 360
                    }], this.attenpToPlay = !1, this.maxSecond = 20, this.startSecond = 20, this.everySecond = 50
                }
                return t.prototype.dispose = function() {
                    this.globalsubscript && this.globalsubscript.unsubscribe(), this.subscript && this.subscript.unsubscribe()
                }, t.prototype.invokeList = function(e, n, i) {
                    var l = this;
                    n > -1 && (this.startSecond = n), i > 0 && (this.everySecond = i);
                    for (var s = 0; s < e.length; ++s) e[s].playfirst || this.dataList.push(e[s]);
                    t.isUseGolbal && (this.globaltimer = We.Observable.timer(1e3 * this.startSecond, 1e3 * this.everySecond), this.globalsubscript = this.globaltimer.subscribe(function(t) {
                        l.ispaused || l.isPlayingAds || l.play()
                    }))
                }, t.prototype.reset = function() {
                    this.subscript && this.subscript.unsubscribe(), this.eventList.emit({
                        event: Ye.ShouldCancel,
                        data: {}
                    }), this.isPlayingAds = !1, this.pointToshow.forEach(function(t) {
                        t.played = !1
                    }), this.state = Ye.ShouldCancel, this.attenpToPlay = !1
                }, t.prototype.cancel = function() {
                    this.pointToshow.forEach(function(t) {
                        t.played = !0
                    })
                }, t.prototype.continue = function() {}, t.prototype.stopPlay = function() {
                    this.timer && (this.timer = null), this.subscript && this.subscript.unsubscribe(), this.attenpToPlay = !1, this.eventList.emit({
                        event: Ye.ShouldBackToPlay,
                        data: {}
                    }), this.state = Ye.ShouldBackToPlay, this.pausesecond = 0, this.isPlayingAds = !1
                }, t.prototype.pause = function() {
                    this.ispaused = !0
                }, t.prototype.renew = function() {
                    this.ispaused = !1
                }, t.prototype.play = function() {
                    this.dataList.length > this.index || (this.index = 0), this.startPlay(this.dataList[this.index]), ++this.index
                }, t.prototype.startPlay = function(t) {
                    var e = this;
                    t && (this.timer && (this.timer = null), this.subscript && this.subscript.unsubscribe(), this.timer = We.Observable.timer(1e3, 1e3), this.subscript = this.timer.subscribe(function(t) {
                        e.ispaused ? ++e.pausesecond : t - e.pausesecond == e.waitSecond ? (e.eventList.emit({
                            event: Ye.ShouldPlayAds,
                            data: {}
                        }), e.state = Ye.ShouldPlayAds, e.timer = null, e.subscript.unsubscribe(), e.subscript = null, e.startLoadCounter()) : (e.eventList.emit({
                            event: Ye.Timer,
                            data: {
                                time: e.waitSecond + e.pausesecond - t + ""
                            }
                        }), e.state = Ye.Timer)
                    }), this.isPlayingAds = !0, this.eventList.emit({
                        event: Ye.ShouldLoadAds,
                        data: t
                    }), this.state = Ye.ShouldLoadAds)
                }, t.prototype.startCountDown = function(t, e, n) {
                    var i = this;
                    this.timer = We.Observable.timer(0, 1e3), this.subscript = this.timer.subscribe(function(l) {
                        i.ispaused ? ++i.pausesecond : (l - i.pausesecond == t && i.subscript.unsubscribe(), (l - i.pausesecond) % e == 0 && n(), i.eventList.emit({
                            event: Ye.SkipTimer,
                            data: {
                                time: i.skipSecond - l + i.pausesecond + "",
                                left: t - l + i.pausesecond
                            }
                        }), i.state = Ye.SkipTimer)
                    })
                }, t.prototype.startLoadCounter = function() {
                    var t = this;
                    this.timer = We.Observable.timer(0, 1e3), this.subscript = this.timer.subscribe(function(e) {
                        e == t.maxSecond ? t.stopPlay() : (t.eventList.emit({
                            event: Ye.SkipTimer,
                            data: {
                                time: t.skipSecond - e + "",
                                left: t.maxSecond - e
                            }
                        }), t.state = Ye.SkipTimer)
                    })
                }, t.prototype.getTimeDefine = function(t, e) {
                    if (!this.key || this.key != t) {
                        this.key = t;
                        var n = [],
                            i = null;
                        for (var l in this.rules)
                            if (this.rules[l].second > e) {
                                i = this.rules[l];
                                break
                            } if (i || (i = this.rules[0]), i) {
                            var s = Math.floor(e / i.every);
                            i.total = e, i.canshow = s, i.canshow > i.min && s * i.every > e - i.left && --i.canshow;
                            for (var a = 0; a < i.canshow; ++a) n.push({
                                point: i.every * (a + 1),
                                played: !1
                            });
                            this.pointToshow = n
                        }
                    }
                }, t.prototype.needToShow = function(t) {
                    if (!this.attenpToPlay && t > 0)
                        for (var e = 0; e < this.pointToshow.length; ++e) !this.pointToshow[e].played && t > this.pointToshow[e].point && (this.attenpToPlay ? this.pointToshow[e].point = t + 1 * (e + 1) * 60 : (this.pointToshow[e].played = !0, this.attenpToPlay = !0, this.play()))
                }, t.isUseGolbal = !1, t
            }(),
            Xe = function() {
                function t() {}
                return t.clearTimeout = function(t) {
                    t && t.unsubscribe()
                }, t.setTimeout = function(t, e) {
                    var n = We.Observable.timer(e, 0),
                        i = n.subscribe(function(e) {
                            t(), i.unsubscribe(), n = null
                        });
                    return i
                }, t.getChromeVersion = function(t) {
                    var e = t.match(/Chrom(e|ium)\/([0-9]+)\./);
                    return e ? parseInt(e[2], 10) : 0
                }, t.isQQBrwoser = function() {
                    return -1 !== navigator.userAgent.indexOf("QQBrowser")
                }, t.isFlashAvailable = function() {
                    var t = !1;
                    try {
                        new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (t = !0)
                    } catch (e) {
                        navigator && navigator.mimeTypes && void 0 != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = !0)
                    }
                    return t
                }, t.isTouchDevice = function() {
                    var t = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod", "Macintosh", "Linux"];
                    if (navigator && navigator.platform)
                        for (; t.length;)
                            if (navigator.platform === t.pop()) return !0;
                    return !!(navigator && navigator.userAgent && /(android|bb\d+|meego).+mobile|avantgo|xbox|playstation|linux|macintosh|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
                }, t.isIphoneDevice = function() {
                    var t = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"];
                    if (navigator && navigator.platform)
                        for (; t.length;)
                            if (navigator.platform === t.pop()) return !0;
                    return !!(navigator && navigator.userAgent && /iphone|ipad/i.test(navigator.userAgent))
                }, t.isChrome = function() {
                    var t = window.chrome,
                        e = window.navigator,
                        n = e.vendor,
                        i = e.userAgent.indexOf("OPR") > -1,
                        l = e.userAgent.indexOf("Edge") > -1;
                    return !!e.userAgent.match("CriOS") || null !== t && void 0 !== t && "Google Inc." === n && 0 == i && 0 == l
                }, t.IsMac = function() {
                    try {
                        return -1 != navigator.userAgent.indexOf("Macintosh")
                    } catch (t) {}
                }, t.GetFileExtension = function(t) {
                    return t && (t = t.substr(1 + t.lastIndexOf("/")).split("?")[0]).lastIndexOf(".") > -1 ? t.substr(t.lastIndexOf(".")) : ""
                }, t
            }();
        ! function(t) {
            t[t.none = 0] = "none", t[t.playnext = 1] = "playnext", t[t.intersistial = 2] = "intersistial", t[t.playerload = 3] = "playerload", t[t.loadmedia = 4] = "loadmedia", t[t.skipads = 5] = "skipads", t[t.onPlayVideo = 6] = "onPlayVideo", t[t.ended = 7] = "ended", t[t.invokeplaySecond = 8] = "invokeplaySecond", t[t.reload = 9] = "reload", t[t.changeConfig = 10] = "changeConfig"
        }(ze || (ze = {}));
        var je = function() {
                function t(t, e) {
                    this.subscriptions = [], this.eventList = {}, this.isplayAds = !1, this.eventAttached = !1, this.isEmbed = !1, this.index = 0, this.mediaList = [], this.penddingInvoke = null, this.cachePause = "", this.cacheSecond = 0, this.ckAPI = e, this.component = t
                }
                return t.prototype.setVolume = function(t) {
                    this.getCkObject().changeVolume(t)
                }, t.prototype.invokePlaySecond = function(t) {
                    this.component.ckAction(null, {
                        action: "invokeplaySecond",
                        params: t
                    })
                }, Object.defineProperty(t.prototype, "getVideoMeta", {
                    get: function() {
                        return {}
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.dispose = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t.prototype.muted = function(t) {}, Object.defineProperty(t.prototype, "getPlayMedia", {
                    get: function() {
                        return this.playMedia
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.reset = function() {}, t.flashVar = function(e) {
                    var n = e,
                        i = "",
                        l = 0;
                    ".m3u8" == Xe.GetFileExtension(e) && (n = t.ckfolder + "m3u8.swf", i = encodeURIComponent(e), l = 4);
                    var s = t.defaultOption;
                    return s.f = n, s.a = i, s.s = l, s
                }, t.prototype.subscript = function(t, e) {
                    (this.eventAttached || "playAds" == t) && this.subscriptions.push(this.listenTo(t).subscribe(function(t) {
                        e(t)
                    }))
                }, t.prototype.listenTo = function(t) {
                    if (!this.eventList[t]) {
                        switch (t) {
                            case "controlBarShow":
                                this.getCkObject().addListener(t, "__ckcontrolHidden");
                                break;
                            case "time":
                                this.getCkObject().addListener(t, "__cktime.bind(this," + this.totalTime + ")");
                                break;
                            case "loadedmetadata":
                                this.getCkObject().addListener(t, "__ckloadmediafinish.bind(this," + this.totalTime + ")");
                                break;
                            case "volumechange":
                                this.getCkObject().addListener(t, "__ckvolumechange.bind(this)");
                                break;
                            case "muted":
                                this.getCkObject().addListener(t, "__ckmuted.bind(this)");
                                break;
                            case "playAds":
                                break;
                            default:
                                this.getCkObject().addListener(t, '__ckhandler.bind(this,"' + t + '")')
                        }
                        this.eventList[t] = new i.EventEmitter
                    }
                    return this.eventList[t]
                }, t.prototype.backToPlay = function() {
                    for (var t = 0; t < this.mediaList.length; ++t) this.mediaList[t].isAd && (this.mediaList[t].isplayed = !0);
                    this.getCkObject().setLogoVisible(!0), this.getCkObject().setSideBarVisible(!0), this.isplayAds = !1, this.publicManager && (this.publicManager.cancel(), this.publicManager.stopPlay()), this.subscripted && this.subscripted.unsubscribe(), this.playVideo(this.mediaList.filter(function(t) {
                        return !t.isplayed
                    }), !1)
                }, t.prototype.doaction = function(t) {
                    var e = this;
                    if (this.mediaList.filter(function(t) {
                            return !t.isplayed
                        }).length > 1) switch (this.publicManager = new _e, t.action) {
                        case ze.playerload:
                            this.getRef().getparent().isPlayingAds = !0, this.eventAttached = !0, this.getCkObject().setLogoVisible(!1), this.getCkObject().setSideBarVisible(!1), this.subscripted = this.publicManager.eventList.subscribe(function(t) {
                                switch (e.intersitialHandler(t), t) {
                                    case Ye.ShouldBackToPlay:
                                        e.backToPlay(), e.getRef().ckAction(null, {
                                            action: "playerload",
                                            params: null
                                        })
                                }
                            });
                            var n = 0,
                                i = L.a.production ? 20 : 5;
                            this.publicManager.startCountDown((this.mediaList.length - 1) * i, i, function() {
                                ++n > 3 ? (e.isplayAds = !1, e.backToPlay(), e.getRef().ckAction(null, {
                                    action: "playerload",
                                    params: null
                                })) : n > 0 && (1 == n && (e.publicManager.eventList.next({
                                    event: Ye.ShouldLoadAds,
                                    data: e.mediaList[n]
                                }), e.publicManager.eventList.next({
                                    event: Ye.ShouldPlayAds,
                                    data: null
                                })), e.isplayAds = !0, e.mediaList[n - 1].isplayed = !0, n > 1 && (e.embedSWF(e.mediaList[n - 1].src, "", !0), e.getRef().getparent().onPlayNextVideo(!0)))
                            })
                    }
                }, t.prototype.embedSWF = function(e, n, i) {
                    if (this.isplayAds = i, t.defaultOption.title = n, this.isEmbed) {
                        this.setTitle(n);
                        var l = {
                            s: 0,
                            a: "",
                            f: ""
                        };
                        ".m3u8" == Xe.GetFileExtension(e) ? (l.s = 4, l.f = t.ckfolder + "m3u8.swf", l.a = e) : (l.s = 0, l.f = e, l.a = ""), i ? (l.e = 1, l.lv = 1) : (l.e = 0, l.lv = 0), this.getCkObject().newAddress(this.getData(l)), this.getCkObject().setLogoVisible(!this.isplayAds), this.getCkObject().setSideBarVisible(!this.isplayAds)
                    } else this.isEmbed = !0, this.ckAPI.embedSWF(t.ckPlayerPath, t.ckId, t.ckobjId, "100%", "100%", t.flashVar(e), {
                        bgcolor: "#FFF",
                        allowFullScreen: !0,
                        allowScriptAccess: "always",
                        wmode: "transparent"
                    })
                }, t.prototype.getData = function(t) {
                    var e = "";
                    for (var n in t) e += "{" + n + "->" + t[n] + "}";
                    return e + ""
                }, t.prototype.setTitle = function(e) {
                    this.eventAttached && (void 0 === e && (e = ""), this.ckAPI.getObjectById(t.ckobjId).setTitle(e))
                }, t.prototype.getCkObject = function() {
                    return this.ckAPI.getObjectById(t.ckobjId)
                }, t.prototype._mutipleVideoHandler = function(e) {
                    0 == this.mediaList.length && (this.mediaList = e);
                    var n = e[0];
                    t.defaultOption.lv = 1, this.playMedia = n, this.embedSWF(n.rtmp || n.src, n.title, !0), this.triggerPlayAds(n)
                }, t.prototype.triggerPlayAds = function(t) {
                    this.trigger("playAds", t)
                }, t.prototype.playVideo = function(t, e) {
                    if (t.length > 1) this._mutipleVideoHandler(t);
                    else if (t.length > 0) {
                        var n = t[0];
                        e ? this.triggerPlayAds(n) : this.playMedia = n, this.embedSWF(n.rtmp || n.src, n.title, e), this.getRef().getparent().onPlayNextVideo(e)
                    }
                }, t.prototype.invokeInterstitial = function(t) {
                    this.eventAttached ? this.component.ckAction(null, {
                        action: "intersistial",
                        params: t
                    }) : this.penddingInvoke = t
                }, t.prototype.tryAgain = function() {
                    this.penddingInvoke && (this.invokeInterstitial(this.penddingInvoke), this.penddingInvoke = null)
                }, t.prototype.play = function() {
                    this.getCkObject().videoPlay()
                }, t.prototype.pause = function() {
                    this.getCkObject().videoPause()
                }, Object.defineProperty(t.prototype, "currentTime", {
                    get: function() {
                        return this.eventAttached ? this.getCkObject().getStatus().time : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "totalTime", {
                    get: function() {
                        return this.eventAttached ? this.getCkObject().getStatus().totalTime : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getRef = function() {
                    return this.component
                }, t.prototype.seek = function(t) {
                    this.getCkObject().videoSeek(t)
                }, t.prototype.trigger = function(t, e) {
                    this.eventList[t] && this.eventList[t].next(e)
                }, t.prototype.invokePauseList = function(e) {
                    if (this.eventAttached) {
                        for (var n in i = "", l = "", e) i += e[n].src + "|", l += e[n].href + "|", this.cachePause += e[n].src + "|";
                        e.length && (i.substring(0, i.length - 2), l.substring(0, l.length - 2), this.cachePause.substring(0, this.cachePause.length - 2)), this.getCkObject().changeFlashvars(this.getData({
                            d: i,
                            u: l
                        }))
                    } else {
                        var i = "",
                            l = "";
                        for (var n in e) i += encodeURIComponent(e[n].src) + "|", l += encodeURIComponent(e[n].href) + "|", this.cachePause += e[n].src + "|";
                        e.length && (i.substring(0, i.length - 2), l.substring(0, l.length - 2), this.cachePause.substring(0, this.cachePause.length - 2)), t.defaultOption.d = i, t.defaultOption.u = l
                    }
                    this.getRef().getparent().invokePauseList(e)
                }, t.prototype.setFilterGold = function(t) {
                    this.getCkObject().setFilterGold(t)
                }, t.prototype.intersitialHandler = function(t) {
                    if (this.eventAttached) {
                        switch (t.event) {
                            case Ye.ShouldPlayAds:
                                this.cacheSecond = this.currentTime, this.getCkObject().changeFlashvars(this.getData({
                                    d: ""
                                }));
                                break;
                            case Ye.ShouldBackToPlay:
                                this.getCkObject().changeFlashvars(this.getData({
                                    d: this.cachePause
                                }));
                                break;
                            case Ye.ShouldCancel:
                                this.cacheSecond = 0
                        }
                        this.getCkObject().interstitialhandler(t)
                    }
                }, t.prototype.seekCacheSecond = function() {
                    var t = this;
                    !this.isplayAds && this.cacheSecond > 0 && Xe.setTimeout(function() {
                        t.seek(t.cacheSecond), t.cacheSecond = 0
                    }, 50)
                }, t.prototype.showInfo = function(t, e) {
                    this.eventAttached && this.getCkObject().showInfo(t, e)
                }, t.prototype.setLogo = function(t) {
                    this.eventAttached && (t.indexOf("vip") > -1 ? this.getCkObject().setLogo("logo_vip") : this.getCkObject().setLogo("logo"))
                }, t.prototype.showPowerSaving = function() {
                    this.getCkObject().showPowerState()
                }, t.prototype.reload = function() {
                    var t = this,
                        e = this.currentTime,
                        n = this.listenTo("play").subscribe(function() {
                            t.seek(e), n.unsubscribe()
                        });
                    this.playVideo(this.playMedia, !1)
                }, t.prototype.changeConfig = function(t, e) {
                    this.getCkObject().changeConfig(t, e)
                }, t.loadHandlerKey = "__ckloaded__", t.ckobjId = "f" + (t.ckId = "__ckplayer__"), t.ckPlayerPath = (t.ckfolder = "/assets/lib/_player/") + "ckplayer.swf", t.defaultOption = {
                    b: 0,
                    c: 0,
                    loaded: t.loadHandlerKey,
                    p: 1,
                    v: "80",
                    e: 0
                }, t
            }(),
            Ue = function() {
                function t() {
                    this.videoPath = "", this.onCkEvent = new i.EventEmitter, this.onPlayerReady = new i.EventEmitter, this.onPlayerTrulyReady = new i.EventEmitter, this.filterGold = 10, this.parent = null, this.ckPlayer = null, this.loadHandlerKey = je.loadHandlerKey, this.ckId = je.ckId, this.isVideoplaying = !1, this.isInPassive = !1, this.totalTime = 0, this.previoustime = 0
                }
                return Object.defineProperty(t.prototype, "flashVar", {
                    get: function() {
                        return je.flashVar(this.videoPath)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngOnInit = function() {}, t.prototype.playerReady = function() {
                    this.ckPlayer = CKobject, this.api = new je(this, this.ckPlayer), this.onPlayerReady.next(this.api)
                }, t.prototype.ckAction = function(t, e) {
                    if (e && e.action)
                        if (e.action = ze[e.action], e.action != ze.skipads && this.api.isplayAds) this.api.isplayAds && this.api.doaction(e);
                        else {
                            switch (e.action) {
                                case ze.playerload:
                                    this.api.eventAttached = !0, this.videoPlayerLoaded();
                                    break;
                                case ze.loadmedia:
                                    this.api.eventList.loadedmetadata.next();
                                    break;
                                case ze.ended:
                                    this.api.eventList.ended.next(), this.api.mediaList = [];
                                    break;
                                case ze.reload:
                                    this.api.reload()
                            }
                            this.onCkEvent.next(e)
                        }
                }, t.prototype.getparent = function() {
                    return this.parent
                }, t.prototype.videoPlayerLoaded = function() {
                    var t = this;
                    console.log("flash player truly loaded"), this.api.subscript("loadedmetadata", function() {
                        t.loadMedia()
                    }), this.onPlayerTrulyReady.next(this.api), this.api.tryAgain(), this.api.setFilterGold(this.filterGold), this.api.subscript("error", function() {
                        t.isVideoplaying || (t.api.showPowerSaving(), t.isInPassive = !0)
                    }), this.api.subscript("pause", function() {
                        t.isVideoplaying = !1
                    }), this.api.subscript("play", function() {
                        t.isVideoplaying = !0, t.isInPassive = !1
                    })
                }, t.prototype.toPlay = function() {
                    this.api.showPowerSaving()
                }, t.prototype.loadMedia = function() {
                    this.totalTime = 0, this.api.seekCacheSecond()
                }, t.prototype.ckCustom = function(t, e) {
                    this.api.eventList[e.event] && ("time" == e.event ? e.data != this.previoustime && (this.previoustime = e.data, 0 == this.totalTime && (this.totalTime = this.api.totalTime), isNaN(e.data) || this.api.isplayAds || this.api.eventList[e.event].next({
                        current: 1e3 * e.data,
                        total: 1e3 * this.totalTime,
                        left: 1e3 * (this.totalTime - e.data)
                    })) : this.api.eventList[e.event].next(e.data))
                }, t.prototype.ngAfterViewInit = function() {
                    this.playerReady()
                }, t
            }(),
            Qe = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".expand[_ngcontent-%COMP%]{width:100%;height:100%}.pauseCaption[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;top:0;left:0;background-color:rgba(128,128,128,.490196);z-index:5000}.pauseCaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{position:relative;height:3em;top:50%;margin-top:-1.5em;color:#fff;text-align:center;cursor:pointer}"]
                ],
                data: {}
            });

        function Ke(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275ted"](-1, null, [" "])), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "div", [
                ["class", "expand"]
            ], [
                [1, "id", 0]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], null, function(t, e) {
                t(e, 2, 0, e.component.ckId)
            })
        }
        n("CeWx");
        var Ze = function() {
                function t(t) {
                    this._cookie = t
                }
                return t.prototype.QueryStringToJSON = function(t) {
                    var e = {};
                    return (t ? t.split("&") : []).forEach(function(t) {
                        var n = (t = t.split("="))[0],
                            i = t[1];
                        n.length && (void 0 !== e[n] ? (e[n].push || (e[n] = [e[n]]), e[n].push(i || "")) : e[n] = i || "")
                    }), e
                }, t.toQueryString = function(t) {
                    var e = [];
                    for (var n in t) t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                    return e.join("&")
                }, t.prototype.getConfig = function() {
                    var t = this._cookie.get("dn_config");
                    return this.QueryStringToJSON(t)
                }, t.GetHost = function(e) {
                    void 0 === e && (e = "");
                    var n = "";
                    return n = t.GetDomain(window.location.hostname), e && (n = e.replace("{Host}", n)), n
                }, t.GetDomain = function(t, e) {
                    return void 0 === e && (e = !1), e = e || !1, t = t.replace(/(https?:\/\/)?(www.)?/i, ""), e || (t = (t = t.split(".")).slice(t.length - 2).join(".")), -1 !== t.indexOf("/") ? t.split("/")[0] : t
                }, t.prototype.setCookie = function(e, n, i) {
                    var l = "";
                    if (i) {
                        var s = new Date;
                        s.setTime(s.getTime() + 24 * i * 60 * 60 * 1e3), l = "; expires=" + s.toUTCString()
                    }
                    var a = t.GetHost(),
                        o = "domain=" + (a && 0 == a.indexOf(".") ? a : "." + a);
                    document.cookie = e + "=" + (n || "") + l + "; path=/;" + o
                }, t.prototype.setConfig = function(e) {
                    var n = this.getConfig();
                    for (var i in e) n[i] = e[i];
                    this.setCookie("dn_config", t.toQueryString(n), 365)
                }, t
            }(),
            qe = n("nFOc"),
            Je = function() {
                function t() {}
                return t.prototype.triggerPlayAds = function(t) {}, t.prototype.setVolume = function(t) {}, t.prototype.invokePlaySecond = function(t) {}, t.prototype.dispose = function() {}, t.prototype.setTitle = function(t) {}, t.prototype.muted = function(t) {}, Object.defineProperty(t.prototype, "getPlayMedia", {
                    get: function() {
                        return ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.reset = function() {}, t.prototype.invokePauseList = function(t) {}, t.prototype.showInfo = function(t, e) {
                    void 0 === e && (e = 5)
                }, t.prototype.subscript = function(t, e) {}, t.prototype.playVideo = function(t, e) {}, t.prototype.invokeInterstitial = function(t) {}, t.prototype.play = function() {}, t.prototype.pause = function() {}, t.prototype.getRef = function() {}, t.prototype.seek = function(t) {}, t.prototype.intersitialHandler = function(t) {}, t
            }(),
            $e = function() {
                function t() {
                    this.subscriptions = [], this.eventList = {}, this.isPlayingAds = !1, this.lastTimer = null, this.mediaList = [], this.lastSeekTime = 0, this.seekCount = 5, this.timeout = null
                }
                return t.prototype.setVolume = function(t) {
                    this.vgAPI.getDefaultMedia().volume = t / 100
                }, t.prototype.invokePlaySecond = function(t) {
                    this.component.invokePlaySecond(t)
                }, Object.defineProperty(t.prototype, "getVideoMeta", {
                    get: function() {
                        var t = this.vgAPI.getDefaultMedia().elem;
                        return {
                            videoWidth: t.videoWidth,
                            videoHeight: t.videoHeight,
                            videoRatio: t.videoWidth / t.videoHeight
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.setTitle = function(t) {
                    this.component.media.title = t
                }, t.prototype.muted = function(t) {
                    this.vgAPI.getDefaultMedia().volume = t ? 0 : .8
                }, t.prototype.dispose = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, Object.defineProperty(t.prototype, "getPlayMedia", {
                    get: function() {
                        return this.component.media
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.assignData = function(t, e) {
                    this.vgAPI = t, this.component = e
                }, t.prototype.subscript = function(t, e) {
                    var n = this,
                        l = this.vgAPI.getDefaultMedia();
                    if (!this.eventList[t] && (this.eventList[t] = new i.EventEmitter, l)) switch (t) {
                        case "ended":
                            this.subscriptions.push(l.subscriptions.ended.subscribe(function() {
                                l.currentPlayPos > 6 && !n.isPlayingAds && (n.mediaList = [], n.eventList[t].next(null))
                            }));
                            break;
                        case "time":
                            this.subscriptions.push(l.subscriptions.timeUpdate.subscribe(function(e) {
                                n.isPlayingAds || l.time && l.time.current && l.time.total && !isNaN(l.time.total) && (!n.lastTimer || Math.abs(l.time.current - n.lastTimer.current) > 1e3) && (n.lastTimer = l.time, n.eventList[t].next(l.time))
                            }));
                            break;
                        case "fullscreen":
                            this.subscriptions.push(We.Observable.fromEvent(window, Xt.b.VG_FULLSCREEN).subscribe(function(e) {
                                e && e.detail && n.eventList[t].next({
                                    isfullscreen: e.detail.isfullscren,
                                    isfake: e.detail.isfake
                                })
                            }));
                            break;
                        case "play":
                            this.subscriptions.push(l.subscriptions.play.subscribe(function(e) {
                                n.isPlayingAds || n.eventList[t].next(l.time)
                            }));
                            break;
                        case "pause":
                            this.subscriptions.push(l.subscriptions.pause.subscribe(function(e) {
                                n.isPlayingAds || n.eventList[t].next(l.time)
                            }));
                            break;
                        case "controlBarShow":
                            this.subscriptions.push(this.vgAPI.hiddenAPI.isHidden.subscribe(function(e) {
                                n.eventList[t].next(!e)
                            }));
                            break;
                        case "loadedmetadata":
                            this.subscriptions.push(l.subscriptions.loadedMetadata.subscribe(function(e) {
                                n.isPlayingAds || null == n.getPlayMedia || "loading" == n.getPlayMedia.title || n.eventList[t].next(!e)
                            }));
                        case "volumechange":
                            this.subscriptions.push(l.subscriptions.volumeChange.subscribe(function(e) {
                                n.isPlayingAds || n.eventList[t].next(parseInt(100 * l.volume + ""))
                            }))
                    }
                    this.subscriptions.push(this.eventList[t].subscribe(function(t) {
                        return e(t)
                    }))
                }, Object.defineProperty(t.prototype, "isFluence", {
                    get: function() {
                        return this.component.isFluence
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.swapBackup = function(t) {
                    if (t.backup) {
                        var e = t.src;
                        t.src = t.backup, t.backup = e, t.isHls = ".m3u8" == Xe.GetFileExtension(t.src)
                    }
                    return t
                }, t.prototype.triggerPlayAds = function(t) {
                    this.eventList.playAds && this.eventList.playAds.next(t)
                }, t.prototype.mutipleVideoHandler = function(t) {
                    var e = this;
                    0 != this.mediaList.length && t.length != this.mediaList.length || (this.mediaList = t, this.component.reset()), this.isPlayingAds = this.component.isPlayingAds = !0, this.component.skipAfter = 0, this.component.triggerCounter(t.length - 1, function() {
                        var t = e.mediaList.filter(function(t) {
                            return !t.isplayed
                        });
                        t.length > 1 ? (t[0].isplayed = !0, e.triggerPlayAds(t[0]), e.component.currentPlayingAds = e.component.media = t[0], e._playVideo(), e.component.startLoadMedia(t[1])) : e.playVideo(t, !1)
                    })
                }, t.prototype._playVideo = function() {
                    var t = this.vgAPI.getDefaultMedia();
                    t && t.pause()
                }, t.prototype.changePlayMedia = function(t) {
                    this.mediaList.filter(function(t) {
                        return !t.isAd
                    })[0] = t
                }, t.prototype.playVideo = function(t, e) {
                    if (void 0 === e && (e = !1), t.length > 1) this.mutipleVideoHandler(t);
                    else if (t.length > 0) {
                        var n = t[0];
                        0 != this.component.isFluence || n.isHls || this.swapBackup(n), this.component.media = n, this.component.isPlayingAds = e, this._playVideo(), e ? (this.isPlayingAds = !0, this.triggerPlayAds(n)) : this.isPlayingAds = !1, this.component.onPlayNextVideo(e)
                    }
                }, t.prototype.intersitialHandler = function(t) {
                    switch (t.event) {
                        case Ye.Timer:
                            break;
                        case Ye.ShouldPlayAds:
                            this.isPlayingAds = !0, window.dispatchEvent(new CustomEvent(Xt.b.VG_START_ADS));
                            break;
                        case Ye.ShouldBackToPlay:
                            for (var e = 0; e < this.mediaList.length; ++e) this.mediaList[e].isAd && (this.mediaList[e].isplayed = !0);
                            this.mediaList.length > 0 && this.playVideo(this.mediaList.filter(function(t) {
                                return !t.isplayed
                            })), window.dispatchEvent(new CustomEvent(Xt.b.VG_END_ADS));
                            break;
                        case Ye.ShouldLoadAds:
                        case Ye.SkipTimer:
                            break;
                        case Ye.ShouldCancel:
                            window.dispatchEvent(new CustomEvent(Xt.b.VG_END_ADS))
                    }
                }, t.prototype.reset = function() {
                    this.component.reset()
                }, t.prototype.invokeInterstitial = function(t) {
                    this.component.invokeInterstitial(t)
                }, t.prototype.invokePauseList = function(t) {
                    this.component.invokePauseList(t)
                }, t.prototype.showInfo = function(t, e) {
                    void 0 === e && (e = 5), this.component.showInfo(t, e)
                }, t.prototype.play = function() {
                    this.vgAPI.play()
                }, t.prototype.pause = function() {
                    this.vgAPI.pause()
                }, Object.defineProperty(t.prototype, "currentTime", {
                    get: function() {
                        return this.vgAPI.getDefaultMedia().currentTime
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "totalTime", {
                    get: function() {
                        var t = this.vgAPI.getDefaultMedia();
                        return t.time.total || t.duration
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getRef = function() {
                    return this.vgAPI
                }, t.prototype.seekAgain = function() {
                    var t = this;
                    this.seekCount > 0 && (null != this.timeout && Xt.d.clearTimeout(this.timeout), this.timeout = Xt.d.setTimeout(function() {
                        t.currentTime >= t.lastSeekTime || t.lastSeekTime >= t.totalTime ? (t.lastSeekTime = 0, t.seekCount = 5) : (t.vgAPI.seekTime(t.lastSeekTime, !1), t.vgAPI.getDefaultMedia().currentTime = t.lastSeekTime, t.seekAgain(), --t.seekCount)
                    }, 500))
                }, t.prototype.seek = function(t) {
                    var e = parseInt("" + t);
                    this.vgAPI.seekTime(e), e > 0 && (this.lastSeekTime = e, this.seekAgain())
                }, t
            }(),
            tn = function(t) {
                return t[t.Original = 0] = "Original", t[t.Flash = 1] = "Flash", t
            }({}),
            en = function(t) {
                return t[t.MP4 = 0] = "MP4", t[t.M3U8 = 1] = "M3U8", t
            }({}),
            nn = function() {
                function t() {}
                return t.secondFormat = '<font class="text-red" color="#F00000">{second}s</font > \u540e\u64ad\u653e\u5e7f\u544a', t.vipskipFormat = '\u60a8\u662f<font class="text-red" color="#F00000">VIP</font >\uff0c\u5df2\u4e3a\u60a8\u8fc7\u6ee4\u5e7f\u544a', t.vipskipFrontFormat = '\u60a8\u662f<font class="text-red" color="#F00000">VIP</font >\uff0c\u5df2\u81ea\u52a8\u4e3a\u60a8\u8df3\u8fc7\u7247\u5934', t.vipskipEndFormat = '\u60a8\u662f<font class="text-red" color="#F00000">VIP</font >\uff0c5\u79d2\u540e\u81ea\u52a8\u4e3a\u60a8\u8df3\u8fc7\u7247\u5c3e', t.boughtVideo = '\u91d1\u5e01<font class="text-gold" color="#FFC000">-{0}</font >\uff01 \u5df2\u8fc7\u6ee4\u5e7f\u544a\uff01', t.alreadyBought = "\u60a8\u5df2\u7ecf\u4f7f\u7528\u91d1\u5e01\u8fc7\u6ee4\u5e7f\u544a\u3002", t.alreadymax = "\u6ca1\u6709\u4e0b\u4e00\u96c6\u4e86", t.viptoskip = '\u6b64\u529f\u80fd\u4ec5\u9650<font class="text-red" color="#F00000">VIP</font >\u4f7f\u7528', t.startup = "\u6b63\u5728\u4e3a\u60a8\u64ad\u653e\u524d\u7f6e\u5e7f\u544a", t.notenoughGold = '\u8bf7\u5148\u83b7\u53d6\u91d1\u5e01\uff0c\u6216\u5347\u7ea7<font class="text-red" color="#F00000">VIP</font >\u8fc7\u6ee4\u5e7f\u544a', t.highFormat = "\u60a8\u662f\u9ad8\u7b49\u7ea7\u7528\u6237\uff0c\u5df2\u4e3a\u60a8\u8fc7\u6ee4\u5e7f\u544a", t
            }(),
            ln = function() {
                function t(t) {
                    this._configManager = t, this.isAdult = 2 == L.a.cinema ? 1 : 0, this.subscriptions = [], this._serverInfo = {
                        status: -1
                    }, this._needBought = !1, this._cachedLogo = "", this.showPerfect = !1, this.playerSelection = tn.Original, this.streamTech = en.MP4, this.serverCaption = "", this.onVideoReady = new i.EventEmitter, this.onErrorHandler = new i.EventEmitter, this.shouldSkipAds = !1, this.topPrefix = -147, this.customHeight = 0, this.isloadDefault = !1, this.filterGold = 10, this.filterCallback = null, this.playNextCallback = null, this.isPlayRatio = !1, this._hasBought = 0, this.containerRatio = 16 / 9, this.winWidth = window.innerWidth, this.windHeight = window.innerHeight, this.isIPhone = !1, this.touchDevice = !1, this.media = {
                        title: "loading",
                        src: "https://s1-a4.dnvod.tv/vod/ll.mp4",
                        type: "video/mp4",
                        length: 1,
                        href: "",
                        isHls: !1,
                        isStream: !0,
                        isAd: !1,
                        rtmp: "",
                        isImage: !1,
                        backup: ""
                    }, this.isPlayerReady = !1, this.api = new Je, this.hasState = !1, this.skipAfter = 10, this.shouldPlaySeoncd = 0, this.leftSecond = 20, this.mutable = !1, this.isChrome = !1, this.isControlshow = !0, this.cachePlaySecond = null, this.currentPlayingAds = null, this.isMuted = !1, this.infoTimeout = null, this.isVolumeShow = !1, this.volumeTimer = null, this.volumeTimeout = 330, this.loadMedia = null, this.isFluence = !1, this.isJump = !0, this.isVideoSuccessPlayed = !1, this.videoSuccessPlayerTimeout = null, this.shouldPlayVideo = !1, this.hasError = !1, this.errorText = "\u53d1\u751f\u4e86\u672a\u77e5\u9519\u8bef\uff0c\u70b9\u51fb\u91cd\u8bd5\uff0c\u6216\u91cd\u65b0\u52a0\u8f7d\u9875\u9762", this.caption = "", this.pendding = null, this.pauseList = [], this.skipEndTime = 0, this.isBackToPlayMedia = !1, this.totalCount = 20, this.scaled = "", this.videoStyle = {}, this.needUserTouch = !1
                }
                return t.prototype.onUserStateChange = function(t, e) {
                    if ("auto" == this._logo ? (this._cachedLogo = e ? 2 == L.a.cinema ? "./assets/images/player_logo_adult.png" : "./assets/images/player_logo.png" : 2 == L.a.cinema ? "./assets/images/player_logo_adult_vip.png" : "./assets/images/player_logo_vip.png", this.api.setLogo && this.api.setLogo(this.logo)) : this._cachedLogo = this._logo, !e) {
                        this.publicManager && null != this.api && (this.publicManager.stopPlay(), this.api.showInfo(nn.vipskipFormat, 5));
                        var n = this._configManager.getConfig();
                        this.isJump = !(0 == n.jump), this.api.changeConfig && this.api.changeConfig("jump", this.isJump ? 1 : 0), this.api.backToPlay && this.api.backToPlay()
                    }
                }, t.prototype.onServerInfoChange = function(t, e) {
                    e.status > -1 && (this.showPerfect = !(e.ismp4available || !this.mutable), this.serverCaption = e.info)
                }, Object.defineProperty(t.prototype, "hasBought", {
                    get: function() {
                        return this._hasBought
                    },
                    set: function(t) {
                        t && !this._hasBought && this.publicManager && this.api && this.api.currentTime > 0 && (this.publicManager.stopPlay(), this.api.showInfo(1 == t ? nn.alreadyBought : nn.highFormat, 5)), this._hasBought = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serverInfo", {
                    set: function(t) {
                        this.onServerInfoChange(this._serverInfo, t), this._serverInfo = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "needBought", {
                    get: function() {
                        return this._needBought
                    },
                    set: function(t) {
                        this.onUserStateChange(this._needBought, t), this._needBought = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "logo", {
                    get: function() {
                        return this._cachedLogo
                    },
                    set: function(t) {
                        this._logo = t, this.needBought = this._needBought
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngOnDestroy = function() {
                    this.dispose(), this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t.prototype.getBackgroudImage = function(t) {
                    return t && t.isImage ? {
                        "background-image": "url('" + t.src + "')",
                        "background-size": "100%",
                        "background-repeat": "no-repeat",
                        "background-position": "center"
                    } : {}
                }, Object.defineProperty(t.prototype, "playerHeight", {
                    get: function() {
                        return 0 == this.customHeight ? this.winWidth / this.windHeight < 1 ? Math.floor(this.winWidth * this.containerRatio) : this.windHeight + this.topPrefix : this.customHeight
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canPlayHls", {
                    get: function() {
                        return Xe.isTouchDevice()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canPlayRTMP", {
                    get: function() {
                        return Xe.isFlashAvailable() && !Xe.IsMac() && !Xe.isTouchDevice()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngOnInit = function() {
                    this.isPlayerReady = !0, Xe.IsMac() || Xe.isIphoneDevice() || Xe.isTouchDevice() || Xe.isChrome() && Xe.getChromeVersion(navigator.userAgent) >= 68 ? (this.playerSelection = tn.Original, this.mutable = !0, this.isFluence = !0) : Xe.isFlashAvailable() ? (this.playerSelection = tn.Flash, this.isFluence = !0) : (this.playerSelection = tn.Original, this.isFluence = !1), this.getUserPerference(), Xt.d.shouldUseNative = !0, Xt.d.shouldHandleMouse = !Xe.isIphoneDevice(), Xt.d.shouldUseFakeFullScreen = !1, Xt.d.useFakeFullScreenWhenNotPossible = !0, Xe.isTouchDevice() && (this.touchDevice = Xt.d.isTouchDevice = !0), this.initMedia(this.mediaList), this.isIPhone = Xe.isIphoneDevice(), this.isChrome = Xe.isChrome()
                }, t.prototype.getUserPerference = function() {
                    var t = this._configManager.getConfig();
                    this.mutable ? this.isFluence = !t.tech || "RTMP" == t.tech : (this.playerSelection = "VideoJS" == t.player ? tn.Original : tn.Flash, this.isFluence = this.playerSelection == tn.Flash), this.isJump = !(this.needBought || 0 == t.jump)
                }, t.prototype.setConfigOnSelection = function() {
                    var t = this._configManager.getConfig();
                    t.player = this.playerSelection == tn.Flash ? "CKPlayer" : "VideoJS", t.tech = this.isFluence ? "RTMP" : "HLS", this.needBought || (t.jump = this.isJump ? 1 : 0), this._configManager.setConfig(t)
                }, t.prototype.startLoadMedia = function(t) {
                    if (this.loadMedia = t, this.isChrome) try {
                        null != this.loader && this.loader.nativeElement.load()
                    } catch (t) {}
                }, t.prototype.reset = function() {
                    this.publicManager.reset()
                }, t.prototype.resetLoadMeida = function() {
                    this.loadMedia = null
                }, t.prototype.listenToIntersitial = function() {
                    var t = this,
                        e = 0;
                    if (this.pauseList && this.api.invokePauseList(this.pauseList), this.api.subscript("play", function() {
                            t.isPlayingAds || t.publicManager.renew()
                        }), this.api.subscript("pause", function() {
                            t.isPlayingAds || t.publicManager.pause()
                        }), this.api.subscript("controlBarShow", function(e) {
                            t.isControlshow = !!e
                        }), this.api.subscript("loadedmetadata", function() {
                            "loading" == t.api.getPlayMedia.title || t.isPlayingAds || (e = 0, isNaN(t.api.totalTime) || t.publicManager.getTimeDefine(t.api.getPlayMedia.title, t.api.totalTime), t.cachePlaySecond && (t.invokePlaySecond(t.cachePlaySecond), t.cachePlaySecond = null), t.publicManager.state == Ye.ShouldCancel && t.publicManager.continue())
                        }), this.api.subscript("time", function(n) {
                            if (!t.isPlayingAds) {
                                var i = n.current / 1e3;
                                t.publicManager.needToShow(i), t.skipEndTime && i > t.skipEndTime && t.isJump ? (e || t.api.showInfo(nn.vipskipEndFormat, 5), ++e > 5 && t.playNextVideo()) : e = 0
                            }
                        }), null == this.publicManager) {
                        this.publicManager = new _e;
                        var n = null,
                            i = 0;
                        this.subscriptions.push(this.publicManager.eventList.subscribe(function(e) {
                            switch (t.api.intersitialHandler(e), e.event) {
                                case Ye.Timer:
                                    t.api.showInfo(nn.secondFormat.replace("{second}", e.data.time), 0);
                                    break;
                                case Ye.ShouldPlayAds:
                                    t.api.showInfo("", 0), n = t.api.getPlayMedia, i = t.api.currentTime, t.currentPlayingAds = t.loadMedia, t.currentPlayingAds.isImage ? t.api.pause() : t.api.playVideo([t.currentPlayingAds], !0), t.isPlayingAds = !0, t.skipAfter = 10;
                                    break;
                                case Ye.ShouldBackToPlay:
                                    t.isBackToPlayMedia = !0, (!t.shouldSkipAds && !t.hasBought || t.isPlayingAds) && null != n && (t.currentPlayingAds = t.loadMedia = null, t.api.playVideo([n], !1), t.isPlayingAds = !1, t.shouldPlaySeoncd = i);
                                    break;
                                case Ye.ShouldLoadAds:
                                    t.isBackToPlayMedia = !1, t.shouldSkipAds || t.hasBought ? (t.publicManager.stopPlay(), t.hasState || t.api.showInfo(t.needBought ? 1 == t.hasBought ? nn.alreadyBought : nn.highFormat : nn.vipskipFormat, 5)) : t.startLoadMedia(e.data);
                                    break;
                                case Ye.SkipTimer:
                                    t.skipAfter = e.data.time, t.leftSecond = e.data.left;
                                    break;
                                case Ye.ShouldCancel:
                                    t.caption = "", n = null, i = 0, t.loadMedia = null, t.isPlayingAds = !1
                            }
                        })), this.pendding && (this.publicManager.invokeList(this.pendding.mediaList, this.pendding.startSecond, this.pendding.periodicSecond), this.pendding = null)
                    }
                }, t.prototype.muted = function(t) {
                    null != t && t.stopPropagation(), this.isMuted = !this.isMuted, this.api.muted(this.isMuted)
                }, t.prototype.navigatetopublic = function() {
                    Xt.d.openInNewWindow(this.currentPlayingAds.href)
                }, t.prototype.showInfo = function(t, e) {
                    var n = this;
                    void 0 === e && (e = 5), this.caption = t, null != this.infoTimeout && Xe.clearTimeout(this.infoTimeout), e > 0 && (this.infoTimeout = Xe.setTimeout(function() {
                        return n.caption = ""
                    }, 1e3 * e))
                }, t.prototype.showVolume = function() {
                    var t = this;
                    null != this.volumeTimer && (clearTimeout(this.volumeTimer), this.volumeTimer = null), this.volumeTimer = setTimeout(function() {
                        t.isVolumeShow = !0
                    }, this.volumeTimeout)
                }, t.prototype.keepVolume = function() {
                    null != this.volumeTimer && (clearTimeout(this.volumeTimer), this.volumeTimer = null), this.isVolumeShow = !0
                }, t.prototype.hideVolume = function() {
                    var t = this;
                    null != this.volumeTimer && (clearTimeout(this.volumeTimer), this.volumeTimer = null), this.volumeTimer = setTimeout(function() {
                        t.isVolumeShow = !1
                    }, this.volumeTimeout)
                }, t.prototype.playNextVideo = function() {
                    var t = this;
                    this.playNextCallback && this.playNextCallback(function() {}, function() {
                        t.api.showInfo(nn.alreadymax, 5)
                    })
                }, t.prototype.skipAds = function(t) {
                    var e = this;
                    null != t && t.stopPropagation(), this.needBought ? this.filterCallback && this.filterCallback(function() {
                        e.publicManager.cancel(), e.publicManager.stopPlay(), e.api.showInfo(nn.boughtVideo.replace("{0}", "" + e.filterGold), 5)
                    }, function(t) {
                        e.api.showInfo(nn.notenoughGold, 5)
                    }) : this.filterAllAds()
                }, t.prototype.filterAllAds = function() {
                    this.api.showInfo(nn.boughtVideo, 5), this.publicManager.stopPlay()
                }, t.prototype.initMedia = function(t) {
                    t && (this.mediaList = t, this.media && (this.media = this.mediaList.find(function(t) {
                        return !!t && !t.isAd
                    })))
                }, t.prototype.onWindowResize = function() {
                    this.winWidth = window.innerWidth, this.windHeight = window.innerHeight
                }, t.prototype.onFlashTrulyReady = function() {
                    var t = this;
                    this._onPlayerReady(), this.api.setLogo(this.logo), this.api.subscript("loadedmetadata", function() {
                        t.shouldPlaySeoncd && Xe.setTimeout(function() {
                            t.api.seek(t.shouldPlaySeoncd), t.shouldPlaySeoncd = 0
                        }, 100)
                    }), this.api.changeConfig("jump", this.isJump ? 1 : 0), this.onVideoReady.emit(this.api)
                }, t.prototype._onPlayerReady = function() {
                    this.listenToIntersitial()
                }, t.prototype.onPlayerReadyFlash = function(t) {
                    this.api = t, this.onVideoReady.emit(this.api), this.media && this.media.rtmp && this.api.playVideo([this.media], !1)
                }, t.prototype.onPlayVideo = function() {
                    this.mutable && this.media.backup && (this.shouldPlaySeoncd = this.api.currentTime, this.api.playVideo([this.media], !1), this.mediaJudge())
                }, t.prototype.swapBackup = function() {
                    if (this.media.backup) {
                        var t = this.media.src;
                        this.media.src = this.media.backup, this.media.backup = t, this.media.isHls = ".m3u8" == Xe.GetFileExtension(this.media.src)
                    }
                }, t.prototype.mediaJudge = function() {
                    this.mutable && (this.media.isHls ? (this.isFluence = !1, this.streamTech = en.M3U8) : (this.isFluence = !0, this.streamTech = en.MP4))
                }, t.prototype.selectTech = function() {
                    this.shouldPlaySeoncd = this.api.currentTime, this.mutable ? (this.swapBackup(), this.streamTech == en.MP4 ? (this.streamTech = en.M3U8, this.isFluence = !1) : (this.streamTech = en.MP4, this.isFluence = !0), this.onPlayVideo()) : (this.playerSelection == tn.Original ? (this.playerSelection = tn.Flash, this.isFluence = !0) : (this.playerSelection = tn.Original, this.isFluence = !1), this.media = this.api.getPlayMedia, this.playerSelection != tn.Original || this.media.isHls || this.swapBackup(), this.dispose(), this.isControlshow = !0), this.setConfigOnSelection()
                }, t.prototype.selectTian = function() {
                    this.isJump = !this.isJump, this.needBought && (this.isJump = !1, this.api.showInfo(nn.viptoskip, 5)), this.setConfigOnSelection()
                }, t.prototype.dispose = function() {
                    this.api.dispose(), this.api = null
                }, t.prototype.onPlayerReady = function(t) {
                    var e = this;
                    this.api = new $e, this.api.assignData(t, this), this.subscriptions.push(t.getDefaultMedia().subscriptions.loadedMetadata.subscribe(function() {
                        e.needPlayVideo(), e.videoSuccessPlayerTimeout = Xt.d.setTimeout(function() {
                            Xe.isQQBrwoser() && Xe.isIphoneDevice() ? (e.needUserTouch = !1, e.publicManager.renew(), e.isVideoSuccessPlayed = !0) : e.isVideoSuccessPlayed || (e.needUserTouch = !0, e.needBought && e.publicManager.pause())
                        }, 200)
                    })), this.subscriptions.push(t.getDefaultMedia().subscriptions.play.subscribe(function() {
                        e.needUserTouch = !1, e.isVideoSuccessPlayed = !0, Xt.d.clearTimeout(e.videoSuccessPlayerTimeout), e.needBought && e.publicManager.renew()
                    })), this._onPlayerReady(), this.onVideoReady.emit(this.api)
                }, t.prototype.showAds = function(t) {
                    this.api.triggerPlayAds(t)
                }, t.prototype.needPlayVideo = function() {
                    this.media && this.media.isHls && this.api.seek(0), this.shouldPlaySeoncd && (this.api.seek(this.shouldPlaySeoncd), this.shouldPlaySeoncd = 0), this.api.play(), this.mediaJudge()
                }, t.prototype.seekVideo = function() {
                    this.shouldPlayVideo = !this.api.getRef().state || this.api.getRef().state != Xt.c.VG_PAUSED
                }, t.prototype.seekedVideo = function() {
                    this.shouldPlayVideo && this.api.play()
                }, t.prototype.canplay = function(t) {
                    console.log(t)
                }, t.prototype.errorHandler = function(t) {
                    if (!this.isPlayingAds) {
                        var e = 0;
                        switch (t && t.target && t.target.error && (e = t.target.error.code), e) {
                            case 3:
                                this.retry();
                                break;
                            default:
                                this.hasError = !0
                        }
                    }
                    console.log(t)
                }, t.prototype.timeUpdate = function(t) {}, t.prototype.invokeInterstitial = function(t, e, n) {
                    this.publicManager ? this.publicManager.invokeList(t, e, n) : this.pendding = {
                        mediaList: t,
                        startsecond: e,
                        periodicSecond: n
                    }
                }, t.prototype.invokePauseList = function(t) {
                    this.pauseList = t
                }, t.prototype.onCkEvent = function(t) {
                    switch (t.action) {
                        case ze.playnext:
                            this.playNextVideo();
                            break;
                        case ze.intersistial:
                            this.invokeInterstitial(t.params, -1, 0);
                            break;
                        case ze.skipads:
                            this.skipAds(null);
                            break;
                        case ze.onPlayVideo:
                            this.media = t.params;
                            break;
                        case ze.invokeplaySecond:
                            this.invokePlaySecond(t.params);
                            break;
                        case ze.changeConfig:
                            this.changeConfig(t.params.key, t.params.value)
                    }
                }, t.prototype.changeConfig = function(t, e) {
                    switch (t) {
                        case "jump":
                            this.needBought ? (this.api.showInfo(nn.viptoskip, 5), this.api.changeConfig("jump", 0)) : (this.isJump = 1 == e, this.setConfigOnSelection())
                    }
                }, t.prototype.invokePlaySecond = function(t) {
                    if (0 != this.api.eventAttached) {
                        if (!this.isJump && t.info) return;
                        this.shouldPlaySeoncd = t.start || 0, t.info && this.api.showInfo(nn.vipskipFrontFormat, 5)
                    } else this.cachePlaySecond = t;
                    this.skipEndTime = t.end
                }, t.prototype.onPlayNextVideo = function(t) {
                    !(this.isPlayingAds || null != this.publicManager && this.publicManager.state == Ye.Timer) || t || this.isBackToPlayMedia || (null != this.publicManager && this.publicManager.reset(), this.api.showInfo("", 0)), this.isBackToPlayMedia = !1, this.isMuted = !1
                }, t.prototype.triggerCounter = function(t, e) {
                    this.totalCount = 20 * t, this.leftSecond = 20 * t, this.publicManager.startCountDown(20 * t, 20, e)
                }, t.prototype.scaleVideo = function(t) {
                    var e = new sn;
                    this.videoStyle = e.getResult(this.api.getVideoMeta, t, this.playerHeight, this.containerRatio), this.scaled = e.getScaled()
                }, t.prototype.toPlay = function() {
                    null != this.api && this.api.play(), this.hasError = !1
                }, t.prototype.retry = function() {
                    console.log("error occur,", this.api.currentTime), this.shouldPlaySeoncd = this.api.currentTime + 5, this.hasError = !1, this.api.dispose(), this.publicManager.dispose(), this.onErrorHandler.emit(!0)
                }, t
            }(),
            sn = function() {
                function t() {
                    this.scaled = ""
                }
                return t.prototype.getScaled = function() {
                    return this.scaled
                }, t.prototype.getResult = function(t, e, n, i) {
                    var l = {};
                    if (this.scaled = e, this.scaled) {
                        var s = 16 / 9;
                        switch (this.scaled) {
                            case "4:3":
                                s = 4 / 3;
                                break;
                            case "16:9":
                                s = 16 / 9;
                                break;
                            case "full":
                                s = 1
                        }
                        if (s != t.videoRatio) {
                            var a = {
                                    videoShouldWidth: s * n,
                                    videoShouldHeight: n,
                                    videoCanWidth: n * i,
                                    videoCanHeight: n,
                                    videoWidth: 0,
                                    videoHeight: 0
                                },
                                o = 1,
                                r = 1;
                            1 == s ? t.videoRatio != a.videoCanWidth / a.videoCanHeight && (o = a.videoCanWidth / a.videoWidth, r = a.videoCanHeight / a.videoHeight) : (a.videoWidth = a.videoCanHeight * t.videoRatio, a.videoHeight = a.videoCanHeight / t.videoRatio, a.videoWidth > a.videoCanWidth && (a.videoWidth = a.videoCanWidth, a.videoHeight = a.videoWidth / t.videoRatio), a.videoHeight > a.videoCanHeight && (a.videoHeight = a.videoCanHeight, a.videoWidth = a.videoHeight * t.videoRatio), o = a.videoShouldWidth / a.videoWidth, r = a.videoShouldHeight / a.videoHeight), l = {
                                transform: "scale(" + o + "," + r + ")"
                            }
                        }
                    }
                    return l
                }, t
            }(),
            an = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".video-container[_ngcontent-%COMP%]{background-color:#000;position:relative}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]{width:100%}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{font-size:16px;position:absolute;color:#fff;right:1em;top:5.5em;background-color:rgba(0,0,0,.74902);border-radius:.8em;visibility:hidden;pointer-events:none;max-width:0;-webkit-transition:max-width 1s;transition:max-width 1s;word-break:normal;white-space:nowrap;text-shadow:2px 1px 4px #434343;z-index:204;overflow:hidden}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   .caption.show[_ngcontent-%COMP%]{max-width:20em;visibility:visible}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{margin:.2em .5em}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar[_ngcontent-%COMP%]{background-color:transparent;position:absolute;margin:0;width:98%;bottom:-.4em;padding:1em 0;-webkit-box-sizing:border-box;box-sizing:border-box}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar.tiny[_ngcontent-%COMP%]{height:5px!important;-webkit-box-sizing:content-box;box-sizing:content-box;bottom:-5.5em!important}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar-buffering-time[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar-current-time[_ngcontent-%COMP%]{height:7px}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar-buffering-time[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar-current-time[_ngcontent-%COMP%]{top:0}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-controls[_ngcontent-%COMP%]{height:6.5em;padding-top:3.3em;background-color:transparent!important}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-controls.hide[_ngcontent-%COMP%]{bottom:-5.5em}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar-current-time[_ngcontent-%COMP%]{background-color:rgba(116,116,116,.58)}.video-container[_ngcontent-%COMP%]   .stick-bottom[_ngcontent-%COMP%]{position:absolute;height:.5em;width:100%;bottom:4.5em;padding:0 1%}.video-container[_ngcontent-%COMP%]   .stick-bottom[_ngcontent-%COMP%]   vg-time-display[_ngcontent-%COMP%]{height:2em;line-height:2em;display:inline-block;text-align:right;width:auto;min-width:40px}.video-container.iphone[_ngcontent-%COMP%]   vg-scrub-bar[_ngcontent-%COMP%]{display:block}.video-container.iphone[_ngcontent-%COMP%]   vg-scrub-bar.tiny[_ngcontent-%COMP%]{margin:0!important;height:5px!important}.video-container[_ngcontent-%COMP%]   .publicplay[_ngcontent-%COMP%]   vg-controls[_ngcontent-%COMP%]{display:none}.bg-overlayer[_ngcontent-%COMP%]{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(black));background:linear-gradient(to bottom,rgba(0,0,0,0),#000);display:block}.control-item[_ngcontent-%COMP%]{margin-right:1em;display:inline-block}.text-fixed[_ngcontent-%COMP%]{margin:0 -.3em}.video-loader[_ngcontent-%COMP%]{width:1px;height:1px}.publicbox[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:203;cursor:pointer}.publicbox[_ngcontent-%COMP%]   .control-list[_ngcontent-%COMP%]{color:#fff;background-color:rgba(0,0,0,.74902);border-radius:.8em;margin:3em 1em 0 0;padding-left:.2em;font-size:15px}.publicbox[_ngcontent-%COMP%]   .control-item[_ngcontent-%COMP%]{margin:0;border-right:1px solid #fff;padding:.6em 1.5em .1em .5em}.publicbox[_ngcontent-%COMP%]   .control-item.none[_ngcontent-%COMP%]{border-right:none;margin-right:-.3em}.publicbox[_ngcontent-%COMP%]   .control-item.ismuted[_ngcontent-%COMP%]{position:relative}.publicbox[_ngcontent-%COMP%]   .control-item.cross[_ngcontent-%COMP%]:before{content:' ';position:absolute;width:2px;height:130%;background-color:#fff;-webkit-transform:rotate(119deg);transform:rotate(119deg);top:-.3em;left:1.5em}.publicbox[_ngcontent-%COMP%]   .control-item.cross[_ngcontent-%COMP%]:after{content:' ';position:absolute;width:2px;height:130%;background-color:#fff;-webkit-transform:rotate(57deg);transform:rotate(57deg);top:-.3em;left:1.5em}.publicbox[_ngcontent-%COMP%]   .control-fix[_ngcontent-%COMP%]{position:relative;top:-.2em;margin:0 -.8em 0 0;padding-right:.3em}.publicbox[_ngcontent-%COMP%]   .control-fix.none[_ngcontent-%COMP%]{border-right:none}.publicbox[_ngcontent-%COMP%]   .control-fix.hover[_ngcontent-%COMP%]:hover{color:#f00000}.publicbox[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:1px;height:100%}.splash[_ngcontent-%COMP%]{color:#fff;font-size:12px;margin-left:-.3em;margin-right:.1em;display:inline-block;position:relative;top:-.1em}.hover-item[_ngcontent-%COMP%]{position:absolute;bottom:5.5em;background-color:rgba(0,0,0,.67);border-radius:.5em;height:10.5em;max-height:0;-webkit-transition:max-height .2s;transition:max-height .2s;overflow:hidden}.hover-item.show[_ngcontent-%COMP%]{max-height:10.5em}.controll-right[_ngcontent-%COMP%]{float:right;margin-top:-.5em}.cleartop[_ngcontent-%COMP%]{display:inline-block;position:relative;top:-4px;font-size:14px}vg-fullscreen.control-item[_ngcontent-%COMP%]{position:relative;top:-.1em}vg-time-display.control-item[_ngcontent-%COMP%]{margin-right:0}vg-play-pause.control-item[_ngcontent-%COMP%]{margin-left:1em}vg-playback-button.control-item[_ngcontent-%COMP%]{margin-top:-1em;position:relative;font-size:16px;margin-left:.5em}.play-next[_ngcontent-%COMP%]{height:2em;cursor:pointer;margin-left:-1.5em;position:relative}.stick-top[_ngcontent-%COMP%]{position:relative;top:3em}.second[_ngcontent-%COMP%]{color:red;font-size:14px}.gold[_ngcontent-%COMP%]{color:#ffc000;padding:0 .1em;font-size:14px}.pull-right[_ngcontent-%COMP%]{float:right!important}.player-selection[_ngcontent-%COMP%]{position:absolute;right:0;z-index:500;color:#fff;font-size:16px;padding:.5em 1.2em .2em .2em;cursor:pointer;top:-2em;-webkit-transition:top .5s;transition:top .5s;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.player-selection.gray[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#707070}.player-selection.isshow[_ngcontent-%COMP%]{top:0}.player-selection[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#f00000;display:inline-block;width:2em;height:.8em;margin:0 .5em;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;top:.05em;border-radius:.5em}.player-selection[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;width:1.3em;height:1.3em;border-radius:50%;background-color:#fff;top:-.25em;left:-.2em;-webkit-transition:left .5s;transition:left .5s}.player-selection.second[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{left:.8em}.video-header[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{color:#f00000;text-align:center;position:absolute;z-index:500;left:50%;font-size:20px;margin-left:-1em;margin-top:.1em;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.box[_ngcontent-%COMP%]{color:#fff;padding:.5em .5em 1em;font-size:16px}.box[_ngcontent-%COMP%]   .b-t[_ngcontent-%COMP%]{color:#fff;padding:.5em;font-size:16px}.box[_ngcontent-%COMP%]   .b-i[_ngcontent-%COMP%]{display:inline-block;min-width:3em;text-align:center;cursor:pointer}.box[_ngcontent-%COMP%]   .b-i.select[_ngcontent-%COMP%]{color:#f00000;text-shadow:1px 1px 1px #000}.box[_ngcontent-%COMP%]   .b-c[_ngcontent-%COMP%]:after{clear:both;content:' '}.switch-caption[_ngcontent-%COMP%]{position:relative;top:-.2em;left:.1em}.change-selection[_ngcontent-%COMP%]{position:absolute;z-index:500;color:#fff;font-size:16px;padding:.5em 1.2em .2em .2em;cursor:pointer;-webkit-transition:top .5s;transition:top .5s;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;right:-1.4em;top:-.44em}.change-selection.gray[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#707070}.change-selection.isshow[_ngcontent-%COMP%]{top:0}.change-selection[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#707070;display:inline-block;width:2em;height:.8em;margin:0 .5em;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;top:.05em;border-radius:.5em;-webkit-transition:background-color .3s;transition:background-color .3s}.change-selection[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;width:1.3em;height:1.3em;border-radius:50%;background-color:#fff;top:-.25em;left:-.2em;-webkit-transition:left .5s;transition:left .5s}.change-selection.second[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#f00000}.change-selection.second[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{left:.8em}.box-data[_ngcontent-%COMP%]{margin-left:.5em;position:relative;overflow:hidden}vg-player.fake-fullscreen[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;left:0;z-index:100000;top:0}.progress[_ngcontent-%COMP%]{height:5px;bottom:0;position:absolute;background-color:#e3e300;-webkit-transition:width .5s;transition:width .5s;border-radius:0}.needTouch[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAGKCAYAAADucZJuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABllSURBVHja7N1/jJ11veDxz5kzv9tOp0Oh0FJoL6iUlt6ZbbcSSKSDbPRqvJ0uQfcmu0Toel3A3DJer2xyY6Z4V0xWN22CgsYusO4mF8WUKn/0ms06BcVcEZzuSikrArVLgVpahv6cX+c8+8d5Hvt0KAWUnp4z83olT05/DO3zfHlyznu+/T7PU0iSJAAAYKpqMAQAAAheAAAQvAAAIHgBAEDwAgCA4AUAAMELAIDgBQAAwQsAAIIXAAAELwAACF4AABC8AAAgeAEAELwAACB4AQBA8AIAgOAFAADBCwAAghcAAAQvAACCFwAABC8AAAheAAAQvAAAIHgBAEDwAgCA4AUAQPACAIDgBQAAwQsAAIIXAAAELwAACF4AABC8AAAIXgAAELwAACB4AQBA8AIAgOAFAADBCwAAghcAAMELAACCFwAABC8AAAheAAAQvAAAIHgBAEDwAgAgeAEAQPACAIDgBQAAwQsAAIIXAAAELwAACF4AAAQvAAAIXgAAELwAACB4AQBA8AIAgOAFAADBCwCA4AUAAMELAACCFwAABC8AAAheAAAQvAAAIHgBABC8AAAgeAEAQPACAIDgBQAAwQsAAIIXAAAELwAAghcAAAQvAAAIXgAAELwAACB4AQBA8AIAgOAFAEDwAgCA4AUAAMELAACCFwAABC8AAAheAAAQvAAACF4AABC8AAAgeAEAQPACAIDgBQAAwQsAAIIXAADBCwAAghcAAAQvAAAIXgAAELwAACB4AQBA8AIAIHgBAEDwAgCA4AUAAMELAACCFwAABC8AAAheAAAELwAACF4AABC8AAAgeAEAQPACAIDgBQAAwQsAgOAFAADBCwAAghcAAAQvAAAIXgAAELwAACB4AQAQvAAAIHgBAEDwAgCA4AUAAMELAACCFwAABC8AAIIXAAAELwAACF4AABC8AAAgeAEAQPACAIDgBQBA8AIAgOAFAADBCwAAghcAAAQvAAAIXgAAELwAAAheAAAQvAAAUPsaDQFQiwqFwtt+TZIk1d6n/E41RET280JuO+Wu5rbs5+XccST+jwOcwfdv77OA4H3bwC2kgZvfihHRcNlllzXefffdSy655JIls2fPvqy5ufni5ubmhcVisatQKHQVCoXmQqEwMyLGkiQ5miTJGxFxJEmSw+Vy+XdJkuwul8tPl0qlX//yl798pre3tySAAQQvIHjPWPDmIjcftsWo/ItY44wZMxoffPDBP1++fPmHu7q6rm5vb+9uaGiY8R799YeTJHmiVCoNJkmy7a677toxMDBQdjYACF5A8L5XkVvIRW5TGrnNEdH8ta997dLrr7/++vnz569paWlZWI0xSJLkhSRJ/sf4+Ph/b21tfd7ML4DgBQTvHxu6WeQ2pqHbHBEtCxYsaH/wwQfXXnHFFX81e/bs5fHWa3Sr0L7JP5fL5Xt37Njx4IoVK8adIQCCFxC87zZ0myOiNSJaFy9e3PHd7373kytWrPh0W1vbghobmufL5fJ/fuGFF/7bpZdeOupMARC8gOB9u9BtSUO3bcaMGR0//OEPb7jqqqv+uq2tbW6ND9FLpVJpw5YtWx644YYbSu/1GPtsAAQvQJ0Fbxq72RrdplzotkfEzK985Surbrnllv84Z86cS+psqH41Pj7+H5qamn4peAEELzBNgzeN3YY4eenCjIiYNXfu3HO2bdv2uRUrVvQVCoVinQ7XRERsjIi/j4jx92KMfTYAU4knrQFTOZoLaewW09Bti4iOiDgnIuZ96lOfWrlz587/unLlyuvrOHYjDfm/i4ifj46O/pn/8wCTPg98Fw/UaKy+7dec7v0rt4Qhu/NCW0TMjIjOiJjzjW984y8+85nP3Nbc3Nw+xYZuuFQq3VwsFh/+U8bYZwMgeAFqOHhPsYRhRlRmducUi8W5P/7xjz/z4Q9/+C/j7N1mrBr+ISIG4sTjjAUvIHgBpkLw5pYwNMaJtbqdEdHV1tY27/HHH//bnp6eK6fJMH43Im6OiJLgBQQvwBQI3kmx2xYRs9LYPXfOnDkX/PSnP/27pUuXLp9mQ/lwRPybiBgTvIDgBajj4M3FblMudrsi4tzW1tb5TzzxxOevuOKKK6bpcG6JiE/GpJlewQtMF+7SAEyFOD7VzO45EXF+sVi88NFHH10/jWM3IuJfR8QDMbXXLAMIXmBKx27DKWJ3XkTM37Jly42rVq3qNlLxbyPiLsMACF6A+ovd7NZjrXFiGcO8iJh/5513/qtPfOIT1xipP7ijVCp90jAA0+7zwjotoEZj9p1+057Fbkcau+dHxIKPfvSj3Vu3br2lpaWlyWie5EhErIqIXdbwAoIXoLaDN1u3m5/ZPT8iFnR0dFy8c+fOv7nwwgvnGslT+j8RsapQKIwKXmA6sKQBqMseTt+/sscFZ8F7XkTMu//++/9S7J7W8oj4T4YBELwAtR28jRHREpXHBc+JiHMj4ry1a9cu6+vrW2GI3lZ/kiQrDQMwLT40/LMVUJNvTm+9pCFbytAWlXW750bEgohY2NjYuPDZZ5/960suucTs7jvzVFSWNpQn/4bPBmAqMcML1FUHp+9bkx8uMTci5n75y1++Suy+KytKpdI6wwBM+Q8P38UDNfnmdOoZ3kIau+1ReWTwvIi4KCIu6uzsvPj555//911dXW3V3M/h4eHo7Oys56F+OSIuLRQKx/O/6LMBmErM8AJ108Dx5qepdWXbhg0bVlU7diMiFi9eHNu3b6/ncZ1fLpdvdXoBghegNhSjcqFae0TMjsrFal3t7e1dN9544/KzsUPDw8PR29sb/f399ftB0NDwt0mSNDu9AMELcPbkHx/cGpU7M3SmwdvZ39+/bM6cOW1ncwc3bdoUPT09sWPHjnoc3wtKpdJfOc0AwQtwdhWjct/d9qjcnSEL3o4bb7zx8lrYwR07dkRPT09s2rSp/ga3WLzNKQYIXoCz+16Vze7OyAVvx7XXXrvg/e9/f1ct7Wx/f3/09vbG8PBwPY3xv0ySZLlTDRC8ANWXvxVZtpxhdhq9M2+++eb31+JOb9++PRYvXhxbt26tp7H+d043QPACnB3Zcoa2NHhnRcSshoaG9uuuu25hre708PBwrF27Nm666aZ6me29IUmSgtMNELwA1X+fyh4j3J7FbkS0X3PNNefPmzevvdYP4IEHHqiXC9oujog/d8oBghegeibfnaE9KjO8MyOifc2aNRfWy4Hs3r07enp6YsOGDTW9n+Vy+S+cdoDgBaiubDlDS1QuWJuZhm/r1VdffV69Hcydd94ZPT09sXv37tr8UGho6HXKAYIXoHoKcfL63fY0etuamppali5dOqceD6rGb192ZZIkRaceIHgBqvce1RgnZnjb0/BtWbly5Zy2trbGej2w4eHh6O/vj7Vr19baBW2zImKJUw8QvABnXn79bnZLsrb0tfmDH/xg11Q4yK1bt8bixYtj+/btNbNPpVLJhWuA4AWo4ntUtqShNd1aIqJpyZIlHVPlIIeHh6O3tzf6+/trYra3WCxe7tQDBC9A9d6jshneljR4myKi8aKLLpox1Q5206ZN0dvbWwu3L1vk1AMEL0B13p+KueBtTremiChecMEFbVPxoGvhgrYkSS52+gGCF+DMm7yGN4vdxogodnV1NU/lg+/v74/e3t6zdfuy85x+gOAFqF70ZrO8zVnsRkSxo6Ojaaof/Pbt26Onpye2bt1a3UEvFOY49QDBC1C92C3mojf7caG5uXlavH8NDw/H2rVr46abbqrmBW0tTj9A8AJUJ3gLpwjfQkQ0tLW1TauHIzzwwAPR09NTrduXzXL6AYIXoHrBm128ln+NiYmJ8nQbkN27d0dvb29s2LDB2QEgeIEpFr2Rxu4ffu3YsWOl6Tood955Z/T09JzJC9qOOPUAwQtQ/fDNv8bRo0dL03lAdu/efcbu15skyahTDhC8AGfZdA7e1atXx9DQUPT19Z2pv+KgMwwQvADVk0zaIiLi0KFD49NxMAYGBmJwcDAWLVp0xv6Ocrn8e6cdIHgBqhe72Ws5H7579uw5Pp0Goru7O4aGhqpywVq5XH7BqQcIXoDqxG45IkqTXssRkTz33HPHpstA3H777TE4OBjd3d3VGfgkedbpB0wljYYAqOHgzbZSbitHRHnXrl1TPng7Ozvj/vvvP5NrdU+pVCr9xukHTCVmeIFaDt5yLnTHI2Ii/XHy9NNPH53KB9/X1xcvvvhi1WM3ImJkZMQMLyB4AaqknIvdfPCWh4aGjh4+fHhiqh1wZ2dnbNy4MR5++OHo7Oys/ncZSTI8MDDwnFMPELwA1YndLHgnJkfvxMRE6cknnxyeSgfc3d0dg4ODcfvtt5+1fRgfH3/87rvvHnf6AYIX4MzLljRMRMRYRIym23gaweXHHnvs9alysAMDAzE0NFS1C9Peyujo6GDkbv8GIHgBzqz87G4+eCciorxt27a6f0DCokWLYnBwsCq3G3snDh48OOi0AwQvQPUkk4J3JBe9pSeeeOLIq6++OlKvB9fX1xdDQ0OxevXqmtifcrn8/6677rqdTjtA8AJUL3bzSxpGIuJ4+joWEeNJkpS3bdtWd08F6+zsjIcffvisXZj2Vo4fP/7wb3/721JY0gAIXoCqyS5ay4L3WC56JyKitHnz5n31dECrV6+OoaGhs3K7sbezZ8+ef0zHHEDwAlRJfklDNsN7NE7M8k78/Oc/P/TMM88croeDGRgYiMHBwVi0aFHN7dvY2NiOyy+/fEeY3QUEL0DVlePEDO/RdMtmescjovyd73znpVo+gO7u7hgaGqqZC9NO5cCBA9+Oymw6gOAFqKL8Ot7RNHSPpNvxNIQnvvWtb+07cODAWC0ewO233x6Dg4Nn/XZjp1MqlX6/fv3676djbYYXELwAVTY5eA+n27GozPqOj4yMTHz729/eU0s7nV2YtnHjxpq6MO1U9u/ff89DDz10LKzfBQQvwFmTXbh2PCqzu/noHY2Iia9+9asvvfbaa6O1sLN9fX3x4osv1uSFaW8a2FJp35e+9KVvheUMgOAFOGuyZQ3ZhWtHIuKNiDgUJ5Y2jB85cmTi61//+otnc0c7Oztj48aNNXe7sdPZs2fP1zZv3nw4LGcAprBCknh/A2rwzalQOOmnEdEUETMioisi5kfExRGxKCIWRMQ5ETGrWCy2PP300ysvu+yyWdXez+7u7rj//vtreq3uZCMjIzsvvfTSa/bu3Xs4/YbiDx8IPhuAqcQML1AvsmUNx6IyuzscEa+nPz4WEWOlUmni1ltv/b/lcrmqtTYwMBBDQ0N1FbtJkpQfffTRL+zdu3ckLGcApjgzvEBtvjmdPMMbUZnlbY6I9qjM8l4QlVnei6Iyyzs3ImZFRMvmzZvft27duouqsZ/bt2+vmUcDvxsvv/zydxYsWHBH9s1CTFrO4LMBELwAZyd4i2n0zk4D98I0eC+KiPMjYk5EtLe2trb86le/+hdLlizpMJJvduTIkZ2rV6/+2FNPPfVaGrslwQtMZZY0APUiScNsIioXqh2OiIMRcSB9fSMqD6UYGxkZGb/++ut3HjlyZMKwnaxUKh2+9957b3nqqacOpWP5ptgFELwAZ7nZonIrsqNp5B6IiP1p9Gbrecd37dp1dP369c+aqTz5m4af/exnf//FL37x2XQMrd0FBC9ArQVbnHyLssNRuXDttUnRezwixu+77759mzdv/p1hq3juueceWL169ZZ07MbDrciAacIaXqA235zevIZ38jfrTRHRFpV1u+dF5cK1hVG5Zdl5EdEZEW2FQqHxkUceWfbxj3983nQez5deeunH73vf+24dGRk5mH1DkMbuKT8EfDYAU4kZXqAeJXHiccPZLO/+iNgXldne19NfH0mSZKKvr++ZwcHB/dN1sF555ZXHuru7+0dGRg6lYzZxutgFELwAtRG8+aUNh6KynCGL3v256B2dmJgY+9jHPrZzOkbv3r17f3bVVVetP3DgwOuRW8qQmMIFBC9AXURv9jCKo1F5EMX+iHg13U6K3pGRkdGPfOQjv37kkUdenS4D9Pzzz/+vnp6ev9m9e/f+OHG/3ZLYBQQvQH2ZeIvofSUifh8nLmQbGR8fH1+zZs3Oe+65Z/dUb75f/OIX/7hkyZIv7t+//0A6NtlSBgDBC1Av0pnKbD1vdteGg2novpxG775c9B5LkmTstttu++26det+PRXv0zs2Nnbsvvvu+4crr7zyv4yPjx9Ix2QkHaPE7C4wHblLA1Cbb06nv0tDFrzZ12ZPYcvu3DArIs6JiHlReQLb+RFxblTu6DAr/ZqmpUuXznzooYeWTpUnsu3bt2/3+vXrv/y9733vf0fl/sSH48QdGd60lOF0Y+yzARC8ADUUvKeJ3q40dM+Pyq3KsujtiIj2iGhuaWlp+uY3v3nppz/96YXFYrFQj2NVLpfLjz/++D+tWbPmm6+//vorUZnRPm3sCl5A8ALUWfBOit7GXPR2pqF7blRmfOemIdwRETMioiUimq699trOe+65Z8kHPvCBmfU0Tq+++upLd91117133333L6Kyfnk4F7sTcZqL1AQvIHgB6ix4TxG9rWnUdsaJ2d5s64qI2envt0VEc7FYbPr85z8//wtf+MKfnXfeeS21PD6HDh069P3vf3/rbbfd9qOxsbHs4rzhqFygNvJ2sSt4AcELUKfBm4vehjR6m9Oo7YjKcoZzojLLm830dkbEzKgscWiNiKbW1tbm/v7++Z/73Ocunj9/flstjcvBgweHf/CDH/zPO+6445+Gh4dfjcpa3dejclHe0ajcsWIi3sG9dgUvIHgB6jR4c9FbSKM3v653di58z4kTM73ZEofWdGtsampquvXWW+evW7fuwmXLls1+J/t0przwwgt7t2zZ8vjAwMD2Y8eO7c+F7htx8nrdd3w3BsELCF6AOg7eXPRGnLiYrSWN2ix8u9L4nROVmd6OOHm2tyX97xqXL18+87Of/eyCNWvWnL9gwYKqzPru37//jZ/85Cc777333n9+9NFHX0gD9/WoLF/IQje7x+54VB7EEe/01mOCFxC8AHUevJPCN7/EoXVS+Hamr9k2K06s7T0pfAuFQvFDH/rQnDVr1sy9+uqrz1m2bNns9vb24ntxzCMjI+O/+c1vfv/kk0/+7pFHHnn2Rz/60fPlcnk4jds3orJGNx+6I/EuljAIXkDwAkzR4M1Fbxa+2Wxva1Rmc2elW0e6zY7KTO/MXPi2pLHclIZzMSKKjY2NjatWrZq1cuXK2cuWLZu5cOHC9gULFrR1dnY2z549u6m5ubnY2tpaTIO2NDY2Vjp8+PDoG2+8MfrKK68c2bt376Fdu3a99uSTT+577LHH9o6NjR2JiGw7lAbuoTRyD0flEcEjcWJWtxx/5AMlBC8geAGmUPDmojfS6M3u5JCFb1sucidvM+LNyxxOCt/0z8yeXpn9PdkOltOtlG4TaayOp+E6kobs0VzsTt6O50J3Iv1zyuk4JO/1GPtsAAQvQA0E75/yx58ifLOlDln8ZpGbvbbHiSUOrXGK2d50K0wK3iQXuvnYHUsDdiSN2WO56D2W27KvGXuvQhdA8AJM/eA9Xfg2pTHbEifP/rbkYjdb3pBtk2d68ybP7I7lttFc0I7GybO4o+nXjE8O3TSizcICCF5A8L7r8C3k4jebvc2HbVPu9VTLGt7NDG+2jeVesy37mixyk3zoZrx/AwheQPD+KfHbkIvfbPa3MRfDxUmxm8XyqYK3PCl8sxnb8dzPJ3K/n635fVPkCl4AwQsI3jMRv4VcAOdDOP/zwqTYjUnRm+RCtjwpbMtxmplcwQvwp2k0BABv3ZS51/KkmG2YFMSnit1TRW/+z4t3E7gA/HHM8AIAMKU1GAIAAAQvAAAIXgAAELwAACB4AQBA8AIAgOAFAEDwAgCA4AUAAMELAACCFwAABC8AAAheAAAQvAAACF4AABC8AAAgeAEAQPACAIDgBQAAwQsAAIIXAADBCwAAghcAAAQvAAAIXgAAELwAACB4AQBA8AIAIHgBAEDwAgCA4AUAAMELAACCFwAABC8AAAheAAAELwAACF4AABC8AAAgeAEAQPACAIDgBQAAwQsAgOAFAADBCwAAghcAAAQvAAAIXgAAELwAACB4AQAQvAAAIHgBAEDwAgCA4AUAAMELAACCFwAABC8AAIIXAAAELwAACF4AABC8AAAgeAEAQPACAIDgBQBA8AIAgOAFAADBCwAAghcAAAQvAAAIXgAAELwAAAheAAAQvAAAIHgBAEDwAgCA4AUAAMELAACCFwAAwQsAAIIXAAAELwAACF4AABC8AAAgeAEAQPACACB4AQBA8AIAgOAFAADBCwAAghcAAAQvAAAIXgAABC8AAAheAAAQvAAAIHgBAEDwAgCA4AUAAMELAIDgBQAAwQsAAIIXAAAELwAACF4AABC8AAAgeAEAELwAACB4AQBA8AIAgOAFAADBCwAAghcAAAQvAACCFwAABC8AAAheAAAQvAAAIHgBAEDwAgCA4AUAQPACAIDgBQAAwQsAAIIXAAAELwAACF4AABC8AAAIXgAAELwAACB4AQBA8AIAgOAFAADBCwAAghcAAMELAACCFwAABC8AAAheAAAQvAAAIHgBAEDwAgAgeAEAQPACAIDgBQAAwQsAAIIXAAAELwAACF4AAKaT/z8AD3x0UsBoXIkAAAAASUVORK5CYII=);background-repeat:no-repeat;position:absolute;width:100%;height:100%;background-size:contain;z-index:500;background-position:center}.needTouch[_ngcontent-%COMP%]   .c[_ngcontent-%COMP%]{text-align:center;position:absolute;width:100%;top:8em;color:red;font-size:20px}"]
                ],
                data: {}
            });

        function on(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "caption"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](1, null, ["\n            ", "\n        "]))], null, function(t, e) {
                t(e, 1, 0, e.component.serverCaption)
            })
        }

        function rn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 14, "div", [
                ["class", "player-selection"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.selectTech() && i), i
            }, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                second: 0,
                isshow: 1
            }), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6d41\u7545"])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](7, 0, null, null, 3, "span", [
                ["class", "bar"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](9, 0, null, null, 0, "span", [
                ["class", "slider"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](12, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u517c\u5bb9"])), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "player-selection", t(e, 2, 0, !n.isFluence, n.isControlshow))
            }, null)
        }

        function un(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 14, "div", [
                ["class", "player-selection second gray"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                isshow: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, [" "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](7, 0, null, null, 3, "span", [
                ["class", "bar"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](9, 0, null, null, 0, "span", [
                ["class", "slider"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](12, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6700\u4f73"])), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], function(t, e) {
                t(e, 1, 0, "player-selection second gray", t(e, 2, 0, e.component.isControlshow))
            }, null)
        }

        function hn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "needTouch"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.retry() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "div", [
                ["class", "c"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](3, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], null, function(t, e) {
                t(e, 3, 0, e.component.errorText)
            })
        }

        function dn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "needTouch"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.toPlay() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], null, null)
        }

        function cn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "control-item"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](2, 0, null, null, 4, "div", [
                ["class", "control-fix"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                            \u5e7f\u544a "])), (t()(), i["\u0275eld"](4, 0, null, null, 1, "span", [
                ["class", "second"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](5, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, [" s\n                        "])), (t()(), i["\u0275ted"](-1, null, ["\n                    "]))], null, function(t, e) {
                t(e, 5, 0, e.component.leftSecond)
            })
        }

        function pn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 6, "div", [
                ["class", "ismuted control-item"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.muted(n) && i), i
            }, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                cross: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](4, 0, null, null, 1, "div", [
                ["class", "control-fix hover"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                            \u9759\u97f3\n                        "])), (t()(), i["\u0275ted"](-1, null, ["\n                    "]))], function(t, e) {
                t(e, 1, 0, "ismuted control-item", t(e, 2, 0, e.component.isMuted))
            }, null)
        }

        function gn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 6, "div", [
                ["class", "control-fix"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                none: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                            "])), (t()(), i["\u0275eld"](4, 0, null, null, 1, "span", [
                ["class", "text-red"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](5, null, ["", "s"])), (t()(), i["\u0275ted"](-1, null, [" \u540e\u8df3\u8fc7\u5e7f\u544a\n                        "]))], function(t, e) {
                t(e, 1, 0, "control-fix", t(e, 2, 0, e.component.currentPlayingAds.isImage))
            }, function(t, e) {
                t(e, 5, 0, e.component.skipAfter)
            })
        }

        function fn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "control-fix hover"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.skipAds(n) && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                            \u8df3\u8fc7 ("])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "gold"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](3, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\u91d1\u5e01)\n                        "]))], null, function(t, e) {
                t(e, 3, 0, e.component.filterGold)
            })
        }

        function mn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 24, "div", [
                ["class", "publicbox"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.navigatetopublic() && i), i
            }, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgStyle, [i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](3, 0, null, null, 16, "div", [
                ["class", "control-list pull-right "]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, cn)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, pn)), i["\u0275did"](9, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](11, 0, null, null, 7, "div", [
                ["class", "control-item none"],
                ["style", "margin-right:0;border:none"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, gn)), i["\u0275did"](14, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, fn)), i["\u0275did"](17, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275ted"](-1, null, ["\n\n                "])), (t()(), i["\u0275eld"](21, 0, null, null, 2, "div", [
                ["class", "progress"]
            ], null, null, null, null, null)), i["\u0275did"](22, 278528, null, 0, g.NgStyle, [i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), i["\u0275pod"](23, {
                width: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n\n            "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.getBackgroudImage(n.currentPlayingAds)), t(e, 6, 0, n.leftSecond > 0), t(e, 9, 0, !n.currentPlayingAds.isImage), t(e, 14, 0, n.skipAfter > 0), t(e, 17, 0, n.skipAfter <= 0), t(e, 22, 0, t(e, 23, 0, 100 - n.leftSecond / n.totalCount * 100 + "%"))
            }, null)
        }

        function vn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 24, "div", [
                ["class", "box"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                vip: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n\n                    "])), (t()(), i["\u0275eld"](6, 0, null, null, 17, "div", [
                ["class", "b-c box-data"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.selectTian() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](8, 0, null, null, 4, "div", [
                ["class", "b-i"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                            "])), (t()(), i["\u0275eld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u8df3\u8fc7\u7247\u5934 / \u7247\u5c3e"])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](14, 0, null, null, 8, "div", [
                ["class", "change-selection"]
            ], null, null, null, null, null)), i["\u0275did"](15, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](16, {
                second: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                            "])), (t()(), i["\u0275eld"](18, 0, null, null, 3, "span", [
                ["class", "bar"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                                "])), (t()(), i["\u0275eld"](20, 0, null, null, 0, "span", [
                ["class", "slider"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                            "])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "box", t(e, 2, 0, n.needBought)), t(e, 15, 0, "change-selection", t(e, 16, 0, !n.needBought && n.isJump))
            }, null)
        }

        function bn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 34, "vg-sidebar", [], [
                [2, "hide", null]
            ], null, null, Nt, St)), i["\u0275did"](1, 245760, null, 0, Mt, [i.ElementRef, wt.a, kt.a], null, null), (t()(), i["\u0275ted"](-1, 0, ["\n\n                "])), (t()(), i["\u0275eld"](3, 0, null, 0, 27, "div", [
                ["class", "box"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](5, 0, null, null, 1, "div", [
                ["class", "b-t"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u753b\u9762\u6bd4\u4f8b"])), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](8, 0, null, null, 21, "div", [
                ["class", "b-c"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](10, 0, null, null, 3, "div", [
                ["class", "b-i select"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.scaleVideo("") && i), i
            }, null, null)), i["\u0275did"](11, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](12, {
                select: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\u9ed8\u8ba4"])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](15, 0, null, null, 3, "div", [
                ["class", "b-i"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.scaleVideo("4:3") && i), i
            }, null, null)), i["\u0275did"](16, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](17, {
                select: 0
            }), (t()(), i["\u0275ted"](-1, null, ["4:3"])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](20, 0, null, null, 3, "div", [
                ["class", "b-i"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.scaleVideo("16:9") && i), i
            }, null, null)), i["\u0275did"](21, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](22, {
                select: 0
            }), (t()(), i["\u0275ted"](-1, null, ["16:9"])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](25, 0, null, null, 3, "div", [
                ["class", "b-i"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.scaleVideo("full") && i), i
            }, null, null)), i["\u0275did"](26, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](27, {
                select: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\u94fa\u6ee1"])), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275ted"](-1, 0, ["\n\n                "])), (t()(), i["\u0275and"](16777216, null, 0, 1, null, vn)), i["\u0275did"](33, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n            "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0), t(e, 11, 0, "b-i select", t(e, 12, 0, "" == n.scaled)), t(e, 16, 0, "b-i", t(e, 17, 0, "4:3" == n.scaled)), t(e, 21, 0, "b-i", t(e, 22, 0, "16:9" == n.scaled)), t(e, 26, 0, "b-i", t(e, 27, 0, "full" == n.scaled)), t(e, 33, 0, !n.isAdult)
            }, function(t, e) {
                t(e, 0, 0, i["\u0275nov"](e, 1).hideArrowBar)
            })
        }

        function yn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "vg-playback-button", [
                ["class", "control-item"]
            ], null, [
                [null, "click"],
                [null, "keydown"]
            ], function(t, e, n) {
                var l = !0;
                return "click" === e && (l = !1 !== i["\u0275nov"](t, 1).onClick() && l), "keydown" === e && (l = !1 !== i["\u0275nov"](t, 1).onKeyDown(n) && l), l
            }, Ot, Tt)), i["\u0275did"](1, 245760, null, 0, It, [i.ElementRef, wt.a], null, null)], function(t, e) {
                t(e, 1, 0)
            }, null)
        }

        function An(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 6, "div", [
                ["class", "hover-item"]
            ], null, [
                [null, "mouseenter"],
                [null, "mouseleave"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "mouseenter" === e && (i = !1 !== l.keepVolume() && i), "mouseleave" === e && (i = !1 !== l.hideVolume() && i), i
            }, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                show: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](4, 0, null, null, 1, "vg-volume", [], [
                [2, "vertical", null]
            ], [
                ["document", "mousemove"],
                ["document", "mouseup"],
                ["document", "keydown"]
            ], function(t, e, n) {
                var l = !0;
                return "document:mousemove" === e && (l = !1 !== i["\u0275nov"](t, 5).onDrag(n) && l), "document:mouseup" === e && (l = !1 !== i["\u0275nov"](t, 5).onStopDrag(n) && l), "document:keydown" === e && (l = !1 !== i["\u0275nov"](t, 5).arrowAdjustVolume(n) && l), l
            }, Ft, Rt)), i["\u0275did"](5, 245760, null, 0, Dt, [i.ElementRef, wt.a], null, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "]))], function(t, e) {
                t(e, 1, 0, "hover-item", t(e, 2, 0, e.component.isVolumeShow)), t(e, 5, 0)
            }, function(t, e) {
                t(e, 4, 0, i["\u0275nov"](e, 5).vertical)
            })
        }

        function xn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 105, "vg-player", [], [
                [2, "fullscreen", null],
                [2, "native-fullscreen", null],
                [2, "controls-hidden", null],
                [2, "fake-fullscreen", null],
                [4, "z-index", null]
            ], [
                [null, "onPlayerReady"]
            ], function(t, e, n) {
                var i = !0;
                return "onPlayerReady" === e && (i = !1 !== t.component.onPlayerReady(n) && i), i
            }, Vt.b, Vt.a)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), i["\u0275pod"](2, {
                publicplay: 0
            }), i["\u0275prd"](512, null, wt.a, wt.a, []), i["\u0275prd"](512, null, zt.a, zt.a, []), i["\u0275prd"](512, null, kt.a, kt.a, []), i["\u0275did"](6, 1228800, null, 1, Ht.a, [i.ElementRef, wt.a, zt.a, kt.a], null, {
                onPlayerReady: "onPlayerReady"
            }), i["\u0275qud"](603979776, 2, {
                medias: 1
            }), i["\u0275prd"](512, null, Gt.a, Gt.a, []), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275and"](16777216, null, 0, 1, null, hn)), i["\u0275did"](11, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275and"](16777216, null, 0, 1, null, dn)), i["\u0275did"](14, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n\n            "])), (t()(), i["\u0275eld"](16, 0, null, 0, 1, "vg-media-title", [], [
                [2, "hide", null]
            ], null, null, _t, Yt)), i["\u0275did"](17, 245760, null, 0, Wt, [wt.a, kt.a], {
                title: [0, "title"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275eld"](19, 0, null, 0, 1, "vg-pause-ads", [], null, [
                [null, "onShowPauseAds"]
            ], function(t, e, n) {
                var i = !0;
                return "onShowPauseAds" === e && (i = !1 !== t.component.showAds(n) && i), i
            }, Kt, Ut)), i["\u0275did"](20, 245760, null, 0, jt, [i.ElementRef, wt.a, Gt.a], {
                list: [0, "list"],
                shouldLoad: [1, "shouldLoad"]
            }, {
                onShowPauseAds: "onShowPauseAds"
            }), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275eld"](22, 0, null, 0, 6, "div", [
                ["class", "caption"]
            ], null, null, null, null, null)), i["\u0275did"](23, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](24, {
                show: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](26, 0, null, null, 1, "div", [
                ["class", "inner"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275and"](16777216, null, 0, 1, null, mn)), i["\u0275did"](32, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275and"](16777216, null, 0, 1, null, bn)), i["\u0275did"](35, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275eld"](37, 0, null, 0, 1, "vg-overlay-play", [], [
                [2, "isdesktop", null]
            ], null, null, ie, Jt)), i["\u0275did"](38, 245760, null, 0, qt, [i.ElementRef, wt.a, zt.a, kt.a], {
                logo: [0, "logo"],
                isPlayingAds: [1, "isPlayingAds"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275eld"](40, 0, null, 0, 1, "vg-buffering", [], [
                [2, "is-buffering", null]
            ], null, null, ae, se)), i["\u0275did"](41, 245760, null, 0, le, [i.ElementRef, wt.a], null, null), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275eld"](43, 0, null, 0, 54, "vg-controls", [
                ["class", "bg-overlayer"]
            ], [
                [4, "pointer-events", null],
                [2, "hide", null]
            ], null, null, ue, re)), i["\u0275did"](44, 4440064, null, 0, oe, [wt.a, i.ElementRef, kt.a], {
                vgAutohide: [0, "vgAutohide"],
                vgAutohideTime: [1, "vgAutohideTime"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n                "])), (t()(), i["\u0275eld"](46, 0, null, 0, 11, "div", [
                ["class", "stick-bottom"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](48, 0, null, null, 8, "vg-scrub-bar", [], [
                [2, "hide", null]
            ], [
                [null, "mousedown"],
                ["document", "mousemove"],
                ["document", "mouseup"],
                [null, "touchstart"],
                ["document", "touchmove"],
                ["document", "touchcancel"],
                ["document", "touchend"],
                ["document", "keydown"]
            ], function(t, e, n) {
                var l = !0;
                return "mousedown" === e && (l = !1 !== i["\u0275nov"](t, 49).onMouseDownScrubBar(n) && l), "document:mousemove" === e && (l = !1 !== i["\u0275nov"](t, 49).onMouseMoveScrubBar(n) && l), "document:mouseup" === e && (l = !1 !== i["\u0275nov"](t, 49).onMouseUpScrubBar(n) && l), "touchstart" === e && (l = !1 !== i["\u0275nov"](t, 49).onTouchStartScrubBar(n) && l), "document:touchmove" === e && (l = !1 !== i["\u0275nov"](t, 49).onTouchMoveScrubBar(n) && l), "document:touchcancel" === e && (l = !1 !== i["\u0275nov"](t, 49).onTouchCancelScrubBar(n) && l), "document:touchend" === e && (l = !1 !== i["\u0275nov"](t, 49).onTouchEndScrubBar(n) && l), "document:keydown" === e && (l = !1 !== i["\u0275nov"](t, 49).arrowAdjustVolume(n) && l), l
            }, pe, de)), i["\u0275did"](49, 245760, null, 0, he, [i.ElementRef, wt.a, kt.a, Gt.a], null, null), (t()(), i["\u0275ted"](-1, 0, ["\n                        "])), (t()(), i["\u0275eld"](51, 0, null, 0, 1, "vg-scrub-bar-current-time", [], null, null, null, ve, fe)), i["\u0275did"](52, 245760, null, 0, ge, [i.ElementRef, wt.a], null, null), (t()(), i["\u0275ted"](-1, 0, ["\n                        "])), (t()(), i["\u0275eld"](54, 0, null, 0, 1, "vg-scrub-bar-buffering-time", [], null, null, null, Ae, ye)), i["\u0275did"](55, 245760, null, 0, be, [i.ElementRef, wt.a], null, null), (t()(), i["\u0275ted"](-1, 0, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275ted"](-1, 0, ["\n                "])), (t()(), i["\u0275eld"](59, 0, null, 0, 1, "vg-play-pause", [
                ["class", "control-item"]
            ], null, [
                [null, "click"],
                ["document", "keydown"]
            ], function(t, e, n) {
                var l = !0;
                return "click" === e && (l = !1 !== i["\u0275nov"](t, 60).onClick() && l), "document:keydown" === e && (l = !1 !== i["\u0275nov"](t, 60).onKeyDown(n) && l), l
            }, we, Ce)), i["\u0275did"](60, 245760, null, 0, xe, [i.ElementRef, wt.a], null, null), (t()(), i["\u0275ted"](-1, 0, ["\n                "])), (t()(), i["\u0275eld"](62, 0, null, 0, 3, "div", [
                ["class", "play-next control-item"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.playNextVideo() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](64, 0, null, null, 0, "div", [
                ["class", "icon vg-icon-play_next"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275ted"](-1, 0, ["\n                "])), (t()(), i["\u0275and"](16777216, null, 0, 1, null, yn)), i["\u0275did"](68, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n\n                "])), (t()(), i["\u0275ted"](-1, 0, ["\n                "])), (t()(), i["\u0275eld"](71, 0, null, 0, 25, "div", [
                ["class", "controll-right"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](73, 0, null, null, 1, "vg-airplay", [
                ["class", "control-item"]
            ], null, null, null, Se, Me)), i["\u0275did"](74, 114688, null, 0, ke, [wt.a], null, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](76, 0, null, null, 1, "vg-mute", [
                ["class", "control-item"]
            ], null, [
                [null, "mouseenter"],
                [null, "mouseleave"],
                [null, "click"],
                [null, "keydown"]
            ], function(t, e, n) {
                var l = !0,
                    s = t.component;
                return "click" === e && (l = !1 !== i["\u0275nov"](t, 77).onClick() && l), "keydown" === e && (l = !1 !== i["\u0275nov"](t, 77).onKeyDown(n) && l), "mouseenter" === e && (l = !1 !== s.showVolume() && l), "mouseleave" === e && (l = !1 !== s.hideVolume() && l), l
            }, Ie, Ne)), i["\u0275did"](77, 245760, null, 0, Pe, [i.ElementRef, wt.a], null, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, An)), i["\u0275did"](80, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](82, 0, null, null, 10, "div", [
                ["class", "cleartop"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](84, 0, null, null, 1, "vg-time-display", [
                ["class", "control-item"],
                ["vgFormat", "hh:mm:ss"],
                ["vgProperty", "current"]
            ], null, null, null, Be, De)), i["\u0275did"](85, 245760, null, 0, Oe, [i.ElementRef, wt.a], {
                vgProperty: [0, "vgProperty"],
                vgFormat: [1, "vgFormat"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](87, 0, null, null, 1, "div", [
                ["class", "splash"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["/"])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](90, 0, null, null, 1, "vg-time-display", [
                ["class", "control-item"],
                ["vgFormat", "hh:mm:ss"],
                ["vgProperty", "total"]
            ], null, null, null, Be, De)), i["\u0275did"](91, 245760, null, 0, Oe, [i.ElementRef, wt.a], {
                vgProperty: [0, "vgProperty"],
                vgFormat: [1, "vgFormat"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](94, 0, null, null, 1, "vg-fullscreen", [
                ["class", "control-item"]
            ], null, [
                [null, "click"],
                [null, "keydown"]
            ], function(t, e, n) {
                var l = !0;
                return "click" === e && (l = !1 !== i["\u0275nov"](t, 95).onClick() && l), "keydown" === e && (l = !1 !== i["\u0275nov"](t, 95).onKeyDown(n) && l), l
            }, Ve, Fe)), i["\u0275did"](95, 245760, null, 0, Ee, [i.ElementRef, wt.a, zt.a], null, null), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275ted"](-1, 0, ["\n            "])), (t()(), i["\u0275ted"](-1, 0, ["\n\n            "])), (t()(), i["\u0275eld"](99, 0, [
                ["myMedia", 1]
            ], 0, 5, "video", [
                ["autobuffer", ""],
                ["controlsList", "nodownload"],
                ["id", "video_player"],
                ["playsinline", "playsinline"],
                ["preload", "auto"],
                ["webkit-playsinline", "webkit-playsinline"]
            ], null, [
                [null, "seeking"],
                [null, "seeked"],
                [null, "canPlay"],
                [null, "error"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "seeking" === e && (i = !1 !== l.seekVideo() && i), "seeked" === e && (i = !1 !== l.seekedVideo() && i), "canPlay" === e && (i = !1 !== l.canplay(n) && i), "error" === e && (i = !1 !== l.errorHandler(n) && i), i
            }, null, null)), i["\u0275did"](100, 278528, null, 0, g.NgStyle, [i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), i["\u0275did"](101, 212992, [
                [2, 4]
            ], 0, He.a, [wt.a, i.ChangeDetectorRef], {
                vgMedia: [0, "vgMedia"]
            }, null), i["\u0275did"](102, 737280, null, 0, Ge.a, [i.ElementRef, wt.a], {
                vgHls: [0, "vgHls"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n             "])), (t()(), i["\u0275ted"](-1, 0, ["\n        "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, t(e, 2, 0, n.isPlayingAds)), t(e, 11, 0, n.hasError), t(e, 14, 0, n.needUserTouch), t(e, 17, 0, n.media.title), t(e, 20, 0, n.pauseList, !n.isPlayingAds), t(e, 23, 0, "caption", t(e, 24, 0, !!n.caption)), t(e, 32, 0, n.isPlayingAds && !!n.currentPlayingAds), t(e, 35, 0, !n.isPlayingAds), t(e, 38, 0, n.logo, n.isPlayingAds), t(e, 41, 0), t(e, 44, 0, !0, 2.5), t(e, 49, 0), t(e, 52, 0), t(e, 55, 0), t(e, 60, 0), t(e, 68, 0, !n.needBought || n.isPlayRatio), t(e, 74, 0), t(e, 77, 0), t(e, 80, 0, !n.touchDevice), t(e, 85, 0, "current", "hh:mm:ss"), t(e, 91, 0, "total", "hh:mm:ss"), t(e, 95, 0), t(e, 100, 0, n.isPlayingAds ? i["\u0275EMPTY_MAP"] : n.videoStyle), t(e, 101, 0, i["\u0275nov"](e, 99)), t(e, 102, 0, n.media.src)
            }, function(t, e) {
                var n = e.component;
                t(e, 0, 0, i["\u0275nov"](e, 6).isFullscreen, i["\u0275nov"](e, 6).isNativeFullscreen, i["\u0275nov"](e, 6).areControlsHidden, i["\u0275nov"](e, 6).isFakeFullScreen, i["\u0275nov"](e, 6).zIndex), t(e, 16, 0, i["\u0275nov"](e, 17).isControlHide), t(e, 26, 0, n.caption), t(e, 37, 0, i["\u0275nov"](e, 38).isDesktop), t(e, 40, 0, i["\u0275nov"](e, 41).isBuffering), t(e, 43, 0, i["\u0275nov"](e, 44).isAdsPlaying, i["\u0275nov"](e, 44).hideControls), t(e, 48, 0, i["\u0275nov"](e, 49).hideScrubBar)
            })
        }

        function Cn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 3, "video", [
                ["autobuffer", ""],
                ["muted", ""],
                ["playsinline", ""],
                ["webkit-playsinline", ""]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](2, 0, null, null, 0, "source", [], [
                [8, "src", 4],
                [8, "type", 0]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], null, function(t, e) {
                var n = e.component;
                t(e, 2, 0, n.loadMedia.src, n.loadMedia.type)
            })
        }

        function wn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "video-loader"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Cn)), i["\u0275did"](3, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], function(t, e) {
                t(e, 3, 0, e.component.loadMedia)
            }, null)
        }

        function kn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 8, "div", [
                ["class", "video-box"]
            ], [
                [4, "height", "px"]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, xn)), i["\u0275did"](3, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n          "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, wn)), i["\u0275did"](7, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n\n      \n    "]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, !!n.media), t(e, 7, 0, n.isChrome)
            }, function(t, e) {
                t(e, 0, 0, e.component.playerHeight)
            })
        }

        function Mn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "video-box"]
            ], [
                [4, "height", "px"]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "dn-ckplayer", [], null, [
                [null, "onPlayerReady"],
                [null, "onCkEvent"],
                [null, "onPlayerTrulyReady"],
                ["window", "ckaction"],
                ["window", "ckCustom"]
            ], function(t, e, n) {
                var l = !0,
                    s = t.component;
                return "window:ckaction" === e && (l = !1 !== i["\u0275nov"](t, 3).ckAction(n, n.detail) && l), "window:ckCustom" === e && (l = !1 !== i["\u0275nov"](t, 3).ckCustom(n, n.detail) && l), "onPlayerReady" === e && (l = !1 !== s.onPlayerReadyFlash(n) && l), "onCkEvent" === e && (l = !1 !== s.onCkEvent(n) && l), "onPlayerTrulyReady" === e && (l = !1 !== s.onFlashTrulyReady() && l), l
            }, Ke, Qe)), i["\u0275did"](3, 4308992, null, 0, Ue, [], {
                filterGold: [0, "filterGold"],
                parent: [1, "parent"]
            }, {
                onCkEvent: "onCkEvent",
                onPlayerReady: "onPlayerReady",
                onPlayerTrulyReady: "onPlayerTrulyReady"
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, n.filterGold, n)
            }, function(t, e) {
                t(e, 0, 0, e.component.playerHeight)
            })
        }

        function Sn(t) {
            return i["\u0275vid"](0, [i["\u0275qud"](402653184, 1, {
                loader: 0
            }), (t()(), i["\u0275eld"](1, 0, null, null, 23, "div", [
                ["class", "video-container"]
            ], null, null, null, null, null)), i["\u0275did"](2, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](3, {
                iphone: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](5, 0, null, null, 10, "div", [
                ["class", "video-header"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, on)), i["\u0275did"](8, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, rn)), i["\u0275did"](11, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, un)), i["\u0275did"](14, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, kn)), i["\u0275did"](18, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Mn)), i["\u0275did"](21, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](23, 0, null, null, 0, "div", [
                ["class", "video-footer"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 2, 0, "video-container", t(e, 3, 0, n.isIPhone)), t(e, 8, 0, n.serverCaption), t(e, 11, 0, !n.isPlayingAds && !n.showPerfect), t(e, 14, 0, !n.isPlayingAds && n.showPerfect), t(e, 18, 0, n.isPlayerReady && 0 == n.playerSelection), t(e, 21, 0, n.isPlayerReady && 1 == n.playerSelection)
            }, null)
        }
        var Pn = n("3AMW"),
            Nn = n("UPw7"),
            In = n("KzcY"),
            Tn = n("OILR"),
            On = n("DC3l"),
            Dn = function() {
                function t(t, e) {
                    this._videoListService = t, this._categoryService = e, this.subscriptions = [], this.blockTitle = "\u66f4\u65b0\u5217\u8868", this.currentTab = 0, this.shadowLeft = 0, this.shadownWidth = 52, this.tabsStyle = {
                        "border-bottom": "3px solid #e8e8e8"
                    }, this.tabStyle = {
                        "font-size": "16px",
                        "padding-top": "6px",
                        "padding-bottom": "6px",
                        "padding-left": "6px",
                        "padding-right": "6px"
                    }, this.activeShadowStyle = {
                        bottom: "-3px",
                        height: "3px"
                    }
                }
                return t.prototype.ngOnInit = function() {}, t.prototype.ngOnChanges = function(t) {
                    if ("cid" in t) {
                        this.parentCid = this._categoryService.getSecondLevelCid(t.cid.currentValue);
                        var e = this._categoryService.getSecondLevelCid(t.cid.previousValue);
                        this.parentCid !== e && this.getUpdatedItems()
                    }
                }, t.prototype.getUpdatedItems = function() {
                    var t = this;
                    if ("0,1,3" === this.parentCid) return [];
                    "0,1,4" !== this.parentCid ? "0,1,4" !== this.parentCid && "0,1,3" !== this.parentCid && this.subscriptions.push(this._videoListService.getRecentUpdates(this.parentCid).subscribe(function(e) {
                        t.recentUpdates = e, t.tabs = [], t.items = e
                    })) : this.subscriptions.push(this._videoListService.getRecentUpdates(null).subscribe(function(e) {
                        t.recentUpdates = e, t.tabs = e.map(function(t) {
                            return t.Title
                        }), t.items = e[0].Data, t.currentTab = 0
                    }))
                }, t.prototype.changeTab = function(t) {
                    this.currentTab !== t && (this.currentTab = t, this.items = this.recentUpdates[t].Data)
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            Rn = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".ru-tabs[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;margin-bottom:5px;position:relative}.ru-tab[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer}.ru-tab.active[_ngcontent-%COMP%], .ru-tab[_ngcontent-%COMP%]:hover{color:red}.item[_ngcontent-%COMP%]{line-height:26px;padding:0 8px 8px}.last-update[_ngcontent-%COMP%]{display:block;width:60px}.title[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.last-item[_ngcontent-%COMP%]{width:90px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:right}.last-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:red!important}.tab-shadow[_ngcontent-%COMP%]{position:absolute;height:5px;background-color:red;bottom:-3px;-webkit-transition:.3s ease-out;transition:.3s ease-out}.seprator-line[_ngcontent-%COMP%]{border-bottom:3px solid #e8e8e8;margin-bottom:14px;padding-top:8px}"]
                ],
                data: {}
            });

        function Ln(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 2, "app-tabs", [
                ["class", "d-block pb-2 mb-2"]
            ], null, [
                [null, "selectTabEvent"]
            ], function(t, e, n) {
                var i = !0;
                return "selectTabEvent" === e && (i = !1 !== t.component.changeTab(n) && i), i
            }, Pn.b, Pn.a)), i["\u0275did"](1, 638976, null, 0, Nn.a, [], {
                tabs: [0, "tabs"],
                tabsStyle: [1, "tabsStyle"],
                tabStyle: [2, "tabStyle"],
                activeShadowStyle: [3, "activeShadowStyle"],
                showHoverShadow: [4, "showHoverShadow"],
                activeTabOnHover: [5, "activeTabOnHover"],
                activeTab: [6, "activeTab"],
                justifyTabs: [7, "justifyTabs"]
            }, {
                selectTabEvent: "selectTabEvent"
            }), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.tabs, n.tabsStyle, n.tabStyle, n.activeShadowStyle, !1, !0, n.currentTab, "justify-content-between")
            }, null)
        }

        function Bn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 0, "div", [
                ["class", "seprator-line"]
            ], null, null, null, null, null))], null, null)
        }

        function En(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 24, "div", [
                ["class", "d-flex item"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "last-update"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](3, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](5, 0, null, null, 8, "span", [
                ["class", "title"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](7, 0, null, null, 5, "a", [], [
                [1, "target", 0],
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var l = !0;
                return "click" === e && (l = !1 !== i["\u0275nov"](t, 8).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && l), l
            }, null, null)), i["\u0275did"](8, 671744, null, 0, S.q, [S.o, S.a, g.LocationStrategy], {
                queryParams: [0, "queryParams"],
                routerLink: [1, "routerLink"]
            }, null), i["\u0275ppd"](9, 1), i["\u0275pod"](10, {
                id: 0
            }), i["\u0275pad"](11, 1), (t()(), i["\u0275ted"](12, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](15, 0, null, null, 8, "span", [
                ["class", "last-item"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](17, 0, null, null, 5, "a", [], [
                [1, "target", 0],
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var l = !0;
                return "click" === e && (l = !1 !== i["\u0275nov"](t, 18).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && l), l
            }, null, null)), i["\u0275did"](18, 671744, null, 0, S.q, [S.o, S.a, g.LocationStrategy], {
                queryParams: [0, "queryParams"],
                routerLink: [1, "routerLink"]
            }, null), i["\u0275ppd"](19, 1), i["\u0275pod"](20, {
                id: 0
            }), i["\u0275pad"](21, 1), (t()(), i["\u0275ted"](22, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], function(t, e) {
                t(e, 8, 0, t(e, 10, 0, i["\u0275unv"](e, 8, 0, t(e, 9, 0, i["\u0275nov"](e.parent.parent, 0), e.context.$implicit.Key))), t(e, 11, 0, "/detail")), t(e, 18, 0, t(e, 20, 0, i["\u0275unv"](e, 18, 0, t(e, 19, 0, i["\u0275nov"](e.parent.parent, 0), e.context.$implicit.Key))), t(e, 21, 0, "/detail"))
            }, function(t, e) {
                t(e, 3, 0, e.context.$implicit.Month + "-" + e.context.$implicit.Day), t(e, 7, 0, i["\u0275nov"](e, 8).target, i["\u0275nov"](e, 8).href), t(e, 12, 0, e.context.$implicit.Title), t(e, 17, 0, i["\u0275nov"](e, 18).target, i["\u0275nov"](e, 18).href), t(e, 22, 0, e.context.$implicit.Renew)
            })
        }

        function Fn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, En)), i["\u0275did"](3, 802816, null, 0, g.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                t(e, 3, 0, e.component.items)
            }, null)
        }

        function Vn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "d-flex align-items-center justify-content-center"],
                ["style", "min-height: 340px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6682\u65e0\u5185\u5bb9"])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], null, null)
        }

        function zn(t) {
            return i["\u0275vid"](0, [i["\u0275pid"](0, ut.a, []), (t()(), i["\u0275eld"](1, 0, null, null, 1, "app-block-title", [], null, null, null, In.b, In.a)), i["\u0275did"](2, 114688, null, 0, Tn.a, [], {
                title: [0, "title"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Ln)), i["\u0275did"](5, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Bn)), i["\u0275did"](8, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275eld"](10, 0, null, null, 7, "div", [
                ["class", "text-small"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Fn)), i["\u0275did"](13, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Vn)), i["\u0275did"](16, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 2, 0, n.blockTitle), t(e, 5, 0, n.tabs && n.tabs.length && n.tabs.length > 1), t(e, 8, 0, 0 === (null == n.tabs ? null : n.tabs.length)), t(e, 13, 0, n.items && n.items.length), t(e, 16, 0, !n.items || !n.items.length)
            }, null)
        }
        var Hn = n("+451"),
            Gn = function() {
                function t(t, e, n) {
                    var i = this;
                    this._categoryService = t, this._navbarLinksService = e, this.store = n, this.genre = "", this.isAdult = !1, this.blockTitle = "", this.dispose = null, this.isAdult = 2 === L.a.cinema, this.dispose = n.subscribe(function() {
                        return i.readState()
                    }), this.readState()
                }
                return t.prototype.ngOnDestroy = function() {
                    this.dispose && this.dispose()
                }, t.prototype.readState = function() {
                    var t = this,
                        e = this.store.getState().video,
                        n = this._categoryService.getSecondLevelCid(e.currentVideo.cid),
                        i = e.currentVideo.category;
                    if (this.currentSecondLevelCid !== n) {
                        this.currentSecondLevelCid = n, this._navbarLinksService.getNavbarSecondLinks(this.currentSecondLevelCid).subscribe(function(e) {
                            t.items = e
                        });
                        var l = this.isAdult ? "\u6392\u884c\u699c" : "\u7535\u5f71\u6392\u884c\u699c";
                        switch (i) {
                            case "tv-series":
                                this.blockTitle = "\u7535\u89c6\u5267\u6392\u884c\u699c";
                                break;
                            case "movie":
                                this.blockTitle = l;
                                break;
                            case "variety":
                                this.blockTitle = "\u7efc\u827a\u6392\u884c\u699c";
                                break;
                            case "anime":
                                this.blockTitle = "\u52a8\u6f2b\u6392\u884c\u699c";
                                break;
                            case "sport":
                                this.blockTitle = "\u4f53\u80b2\u6392\u884c\u699c";
                                break;
                            case "documentary":
                                this.blockTitle = "\u7eaa\u5f55\u7247\u6392\u884c\u699c";
                                break;
                            case "chinese":
                                this.blockTitle = "\u534e\u4eba\u5708\u6392\u884c\u699c";
                                break;
                            case "games":
                                this.blockTitle = "\u6e38\u620f\u6392\u884c\u699c";
                                break;
                            default:
                                this.blockTitle = l
                        }
                    }
                }, t.prototype.ngOnInit = function() {}, t
            }(),
            Wn = n("qCm+"),
            Yn = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".rank[_ngcontent-%COMP%]{position:relative;padding:0 0 8px 42px;vertical-align:middle}.title[_ngcontent-%COMP%]{height:26px;line-height:26px;width:170px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.favorite[_ngcontent-%COMP%]{height:26px;width:80px;line-height:26px}.rank-pos[_ngcontent-%COMP%]{position:absolute;height:26px;width:26px;top:0;left:4px;text-align:center;background-color:#bfbfbf;color:#fff;line-height:26px;font-size:11px}.rank1[_ngcontent-%COMP%]{background-color:#ff3000}.rank2[_ngcontent-%COMP%]{background-color:#ff6000}.rank3[_ngcontent-%COMP%]{background-color:#ffb400}.rating-bar[_ngcontent-%COMP%]{margin-top:8px;width:48px;display:inline-block;text-align:center;line-height:26px}.tab-header[_ngcontent-%COMP%]{border-bottom:3px solid #e8e8e8;padding-left:4px}.tab-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:208px}.tab-header[_ngcontent-%COMP%]   .rating-bar[_ngcontent-%COMP%]{margin:0}"]
                ],
                data: {}
            });

        function _n(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 24, "div", [
                ["class", "rank"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](3, 0, null, null, 20, "div", [
                ["class", "d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](5, 0, null, null, 3, "span", [
                ["class", "rank-pos"]
            ], null, null, null, null, null)), i["\u0275did"](6, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](7, {
                rank1: 0,
                rank2: 1,
                rank3: 2
            }), (t()(), i["\u0275ted"](8, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](11, 0, null, null, 5, "a", [
                ["class", "title"]
            ], [
                [1, "target", 0],
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var l = !0;
                return "click" === e && (l = !1 !== i["\u0275nov"](t, 12).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && l), l
            }, null, null)), i["\u0275did"](12, 671744, null, 0, S.q, [S.o, S.a, g.LocationStrategy], {
                queryParams: [0, "queryParams"],
                routerLink: [1, "routerLink"]
            }, null), i["\u0275ppd"](13, 1), i["\u0275pod"](14, {
                id: 0
            }), i["\u0275pad"](15, 1), (t()(), i["\u0275ted"](16, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](18, 0, null, null, 1, "span", [
                ["class", "favorite text-number text-right pr-4"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](19, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](21, 0, null, null, 1, "app-rating-bar", [
                ["class", "rating-bar d-inline-block"]
            ], null, null, null, T.b, T.a)), i["\u0275did"](22, 114688, null, 0, O.a, [], {
                width: [0, "width"],
                value: [1, "value"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                t(e, 6, 0, "rank-pos", t(e, 7, 0, 0 === e.context.index, 1 === e.context.index, 2 === e.context.index)), t(e, 12, 0, t(e, 14, 0, i["\u0275unv"](e, 12, 0, t(e, 13, 0, i["\u0275nov"](e.parent, 0), e.context.$implicit.key))), t(e, 15, 0, "/detail")), t(e, 22, 0, 48, 10 * e.context.$implicit.userData.rate)
            }, function(t, e) {
                t(e, 8, 0, e.context.index + 1), t(e, 11, 0, i["\u0275nov"](e, 12).target, i["\u0275nov"](e, 12).href), t(e, 16, 0, e.context.$implicit.title), t(e, 19, 0, e.context.$implicit.userData.favorites)
            })
        }

        function Xn(t) {
            return i["\u0275vid"](0, [i["\u0275pid"](0, ut.a, []), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "app-block-title", [], null, null, null, In.b, In.a)), i["\u0275did"](3, 114688, null, 0, Tn.a, [], {
                title: [0, "title"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275eld"](5, 0, null, null, 10, "div", [
                ["class", "tab-header py-2 d-flex mb-3"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](7, 0, null, null, 1, "h5", [
                ["class", "title"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u4eba\u6c14"])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](10, 0, null, null, 1, "h5", [
                ["class", "favorite text-center"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6536\u85cf"])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](13, 0, null, null, 1, "h5", [
                ["class", "rating-bar text-center"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u8bc4\u5206"])), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275eld"](17, 0, null, null, 4, "div", [
                ["class", "text-small"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, _n)), i["\u0275did"](20, 802816, null, 0, g.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, n.blockTitle), t(e, 20, 0, n.items)
            }, null)
        }
        var jn = function() {
                function t() {
                    this.shouldHide = !1, this.expanded = !1
                }
                return t.prototype.ngOnInit = function() {}, t.prototype.ngOnChanges = function(t) {
                    this.text = "", this.brief = "", this.expanded = !1;
                    var e = this.stripHtml(this.summary);
                    if ((e = e.replace("\r\n", "\n")).length > 250) {
                        var n = e.substring(0, 250).split("\n");
                        n = n.map(function(t) {
                            return t.trim().length > 10 ? "<p>" + t.trim() + "</p>" : "<b>" + t.trim() + "</b>"
                        }), this.brief = n.join("")
                    }
                    var i = e.split("\n");
                    i = i.map(function(t) {
                        return t.trim().length > 10 ? "<p>" + t.trim() + "</p>" : "<b>" + t.trim() + "</b>"
                    }), this.text = i.join("")
                }, t.prototype.ngAfterViewInit = function() {}, t.prototype.onClick = function() {
                    this.expanded = !this.expanded
                }, t.prototype.stripHtml = function(t) {
                    var e = document.createElement("div");
                    return e.innerHTML = t.replace("\u3000", "\r\n"), e.textContent || e.innerText || ""
                }, t
            }(),
            Un = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    ["[_nghost-%COMP%]{margin-bottom:35px}.summary[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:pre-wrap;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.summary.expanded[_ngcontent-%COMP%]{max-height:500px!important;-webkit-transition:.5s ease-out;transition:.5s ease-out}.summary.should-hide[_ngcontent-%COMP%]{max-height:6rem}.expander[_ngcontent-%COMP%]{color:#00a8ec!important}.expander[_ngcontent-%COMP%]:hover{color:#1278ba!important}"]
                ],
                data: {}
            });

        function Qn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, [
                [1, 0],
                ["summaryBox", 1]
            ], null, 2, "div", [
                ["class", "summary"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                expanded: 0,
                "should-hide": 1
            })], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "summary", t(e, 2, 0, n.expanded, n.shouldHide))
            }, function(t, e) {
                t(e, 0, 0, e.component.text)
            })
        }

        function Kn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, [
                [1, 0],
                ["summaryBox", 1]
            ], null, 2, "span", [
                ["class", "summary"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                expanded: 0,
                "should-hide": 1
            })], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "summary", t(e, 2, 0, n.expanded, n.shouldHide))
            }, function(t, e) {
                t(e, 0, 0, e.component.brief)
            })
        }

        function Zn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 0, "a", [
                ["class", "expander float-right mt-1 mr-2"],
                ["href", "javascript:void(0);"]
            ], [
                [8, "innerHTML", 1]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "click" === e && (i = 0 != (l.expanded = !l.expanded) && i), i
            }, null, null))], null, function(t, e) {
                t(e, 0, 0, "[\u5c55\u5f00]")
            })
        }

        function qn(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 0, "a", [
                ["class", "expander float-right mt-1 mr-2"],
                ["href", "javascript:void(0);"]
            ], [
                [8, "innerHTML", 1]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "click" === e && (i = 0 != (l.expanded = !l.expanded) && i), i
            }, null, null))], null, function(t, e) {
                t(e, 0, 0, "[\u6536\u8d77]")
            })
        }

        function Jn(t) {
            return i["\u0275vid"](0, [i["\u0275qud"](671088640, 1, {
                elementView: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Qn)), i["\u0275did"](3, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Kn)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Zn)), i["\u0275did"](9, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275and"](16777216, null, null, 1, null, qn)), i["\u0275did"](12, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, !n.brief || n.expanded), t(e, 6, 0, n.brief && !n.expanded), t(e, 9, 0, n.brief && !n.expanded), t(e, 12, 0, n.brief && n.expanded)
            }, null)
        }
        var $n = n("1ZRM"),
            ti = function() {
                function t(t) {
                    var e = this;
                    this.store = t, this.tabs = [], this.on = !0, this.switchLanguageEvent = new i.EventEmitter, setTimeout(function() {
                        t.subscribe(function() {
                            return e.readState()
                        }), e.readState()
                    })
                }
                return t.prototype.readState = function() {
                    var t = this.store.getState().video;
                    this.on = 0 !== t.currentVideo.language && 1 !== t.currentVideo.language || 0 === t.currentVideo.language
                }, t.prototype.ngOnInit = function() {}, t.prototype.changeTab = function(t) {
                    this.store.dispatch({
                        type: $n.c,
                        language: t
                    }), this.switchLanguageEvent.next(t)
                }, t.prototype.onClick = function() {
                    this.on = !this.on, this.changeTab(this.on ? 0 : 1)
                }, t
            }(),
            ei = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".lang-switch[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAcCAYAAAAz+aIrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wOS0wNlQxMjowMTowNSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDktMDZUMTc6MDA6NDkrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDktMDZUMTc6MDA6NDkrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTkwZTVkYzUtNzZlOC1hMzQyLTgxNDYtYTM4MWVlYTNhNjUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5MGU1ZGM1LTc2ZTgtYTM0Mi04MTQ2LWEzODFlZWEzYTY1MyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjU5MGU1ZGM1LTc2ZTgtYTM0Mi04MTQ2LWEzODFlZWEzYTY1MyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTkwZTVkYzUtNzZlOC1hMzQyLTgxNDYtYTM4MWVlYTNhNjUzIiBzdEV2dDp3aGVuPSIyMDE4LTA5LTA2VDEyOjAxOjA1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlFXTH4AAAMoSURBVFiF5ZnLahRBFIa/U91zUXAREEQRRBIvWy8B77gQlYghIuhGMa+hD6C+hJCFC02W3nAlqJhFdB9jxBcQsski9qT7uKg6saacKILi9MwPh6LpmmHON+dUd/0lqsqvNCciDk47uJTBSQdjDkYcNCXMkRB9rAJYUVhWeAc8VXhz8TfJy2b3Z0Wcg+kMbmcwlgNZFC6EUAs4AGgUFSxXcK+EmXOqVa/5PeHMiuzN4HEO4zmQA40QOR5KL0D9rggMFVD6cWEdrp9W/ZLO/wnOnMjZDOZy2G5AmiHs2qpHqG/lKB5OCXTgaweuHlN9Hc/vgjMrcj6HJw1oGow23XDi9nL2JcnYj9JktMopgXWgA0UBk0dVX9pnNuDMihzIYKEB21p4GG2gFca0raydoL+hpIohWXsFOHRgdQ2OHlb9CAHOY5Esg/kGjBuYLXgoceXEYAYJjgEqfCyswfFDqmUO4OBWFhZfa6VWNLboXojjNaZOYEwGyPFj7Yn+8HFgGnggj0ByWGrAWAtfMVtDGCB7YtW1WjZTWkXrIdZg+Rvszx2cceE9Jn0yWSvFYAYBiinOxeHzBGjCWAVncoEJe/o0kkgX30ECE8vyslxDoUzkDk7YWmLVE1dLusYMqiy/DN9iORx3AvviN95e24NhkrCR+/5c/CayC0wdtwZ/Q0l7jbj49b9uG8l/KQGcwIpdpGCGFVDIe8UBn/7rL+lfLTmFefh5x0o0DptC3vNO4Vnsc6SAhlUKz53C6+CKbWzhgwnUBWsYlLiEb9wVVa3gvgHpBWeYFODc36VaOfzFTAnvzdcwA2iYqieqmg8VzEAw8yZVyxJudmDVfI0OHpBV0SADisCslnBjp2oJP5xOJlQXO3Ct8HahOWMb2/hBXKyT04hiHa7tUF20+y6efEH1RQFThbcL+RbCAKVVVFdICRRK3zFTO1RfxPN6Hs28EjnYhodtOGJuYGph1NX46mGTfqh8Ky2mczc91Hsl4tow3YI7bRiNPZ46W6URnM8Kd0uY2f0nh3qx3om4JpxqwuUmnMhgNIORDJo1Opop1O8hP4fj4CcVvN2zCRTTd0ecRyvfKqXCAAAAAElFTkSuQmCC);width:71px;height:28px;position:relative;cursor:pointer;overflow:hidden}.lang-switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{left:0;right:unset;position:absolute;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAE9UlEQVRIia2XTWwUZRjHf+/Mzu7sbreUIq1t08pHNJYAgRalBykpQVJjiCYkHOQzKZfGCxguUA4cSXrwoF4a18jFNMELwsEgCioGSAChEIjYtXZr201b293Zr+7s7LwedmZZCLWU9p9MJpN98/zyPM/7Pu9/hZSS+dQlxHKgFlgBVAAe5ycTyAIGMANMh6VMzxdPzAXtEkIATcB6oBrQABUQgAQKQN4B5xx41oH/E5ZyZkHQLiECwHYH6m/YvLn2rUOHWhs2bFhT1dCw0h8KBTSv1yMtyzTT6biZTk9NRSIPbpw9e+Xu+fN/ASlgAhgOS5mfF9olRA3QCays27ixfmdPT2djS0uz1+cTmqahaRoejwdFUVAUBSEEQgj3W04NDl7/9sSJPgc+A0TCUmbnhHYJUQd8CFRvOXy4ZdvRo7uDlZWa3+/H5/M9BXRhpUDOt5SSdDI5e7O//7P+7u4LQBwYLAeXoF1CVAIfAbUdJ092bNm/vz0QDIpAIIDf70fTNFRVLQUvB5bLsiyy2SypVEo+vHz5y28OHvzayXjQLbXiAIVT0tq3jxxpa923b3sgGBShUIiKigp0XS9B3SyfJyklQgh3nWjcuvVI55kz7wNBoM5dpzjvN4DXa5qbG9u6u3f6AwEqKioIBAJ4vd5ShvPJ7a2mafh8PlRVFY3t7Z+s3bVrNbCsS4iKcug7QGX78eMdgVDIEwwGSyVVFGVOyFxgVVXRdR1d1/Fomr7uwIGPAR14BUBxNk9DTXNz3aq2ttV+vx9d1/F6vQsGunKz9fv9eL1e9BUr2pt27HgNCHYJ4VOAtUBgw5496zSvVywWWA72+Xzouo5QFFHX0bGL4iQLKBQHgK9h06Z69xy+aA//T0KIUm89Hg9qVdXmcmgNoC1vaqryeDylc7gUUlW1tC+kx7Oa4hj1KUAAUP2Vlb7yg78UKh8YBVhGcW6rpZTKx9pSSUqJbdtYlkU+/2QEK0AGKOTT6dyS0RzZto1pmszOzpLLZhM4t5NC8TbIJ8bGEu7CF7ljX0T5fJ5MJkMqlSKXTA5RvA5zChAFcuP37o1KKXGfxcq2bbLZLIlEAsMwyE1N/Q5YQEYBIkDmdn//Q0Datr3obKWU5HI54vE4ExMTGImETN66dakEDUs5DoyODQyMD9+8+bfb/JeFSinJ5/MYhsH4+DixWIxULPZL4tatYSAdljLn7t7fAOPCqVM/Wbmc9bJlllJiWRbJZJKxsTGi0Sj/Tk3NGlevfkHR0kzBk4H/B/Dn6MDAyA+9vT+6QRZyfGzbJpfLMTMzw8jICJFIhNHRUZkcGPg0effuEBAPS5kqQcPFlL4HJi719l7/ta/vZyGEtCwL0zQxTRPLsp4qu9uGfD5f2jCxWIyhoSEeP35MNBqViUePvpo8d+4ikAbGS8k8Y1fqgQ+A6nePHWvp7OnZLRVFs20beDJA3MwKhQKmaZLNZjEMg8nJSWKxGJMTE7Mzt29/Pt7f/x1FuxIJS5l5LtQB11F0EdVNra31nadPv7eyuflNq1AQbnbulHEPfiqVwjAMEvG4nBkevhG7eLHPuH8/AiQo2pRMOWMuCxoCtgGNOBZ0/d69rZWrVq1RQ6EaW1WDectSTNMsZBKJVGZ6ejQRjT6YuHbtyvSdO64FnaRoQc1n4y/WbFsUd2W52Y4DIws228+BVwGvOvBF/634DzUYgnXv28kCAAAAAElFTkSuQmCC);width:29px;height:28px;-webkit-transition:.3s ease-out;transition:.3s ease-out}.lang-switch[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:15px;color:#fff;line-height:28px;position:absolute;-webkit-transition:.3s ease-out;transition:.3s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.lang-switch[_ngcontent-%COMP%]   .on-text[_ngcontent-%COMP%]{left:30px}.lang-switch[_ngcontent-%COMP%]   .off-text[_ngcontent-%COMP%]{left:-40px}.off[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{left:42px}.off[_ngcontent-%COMP%]   .on-text[_ngcontent-%COMP%]{left:71px}.off[_ngcontent-%COMP%]   .off-text[_ngcontent-%COMP%]{left:10px}"]
                ],
                data: {}
            });

        function ni(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275eld"](1, 0, null, null, 11, "div", [
                ["class", "lang-switch pb-2 mb-4"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.onClick() && i), i
            }, null, null)), i["\u0275did"](2, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](3, {
                off: 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](5, 0, null, null, 0, "div", [
                ["class", "slider"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](7, 0, null, null, 1, "div", [
                ["class", "text on-text"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](8, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](10, 0, null, null, 1, "div", [
                ["class", "text off-text"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](11, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                t(e, 2, 0, "lang-switch pb-2 mb-4", t(e, 3, 0, !e.component.on))
            }, function(t, e) {
                var n = e.component;
                t(e, 8, 0, n.languages[0].Title), t(e, 11, 0, n.languages[1].Title)
            })
        }
        var ii = n("/d4C"),
            li = function() {
                function t(t) {
                    this._resourceService = t
                }
                return t.prototype.ngOnInit = function() {
                    this.symbolLogo = this._resourceService.getResource("vr" + this.resolution)
                }, t
            }(),
            si = i["\u0275crt"]({
                encapsulation: 2,
                styles: [
                    [""]
                ],
                data: {}
            });

        function ai(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 0, "img", [
                ["height", "36"],
                ["style", "margin-left: -6px;"]
            ], [
                [8, "title", 0],
                [8, "src", 4]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n"]))], null, function(t, e) {
                var n = e.component;
                t(e, 0, 0, n.resolution, n.symbolLogo)
            })
        }
        var oi = [".expander[_ngcontent-%COMP%]{position:relative;padding-right:30px!important;cursor:pointer;width:78px}.dn-icon[_ngcontent-%COMP%]{position:absolute;right:6px;top:3px;font-size:18px;-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.media-button[_ngcontent-%COMP%]{font-family:Microsoft YaHei;text-align:center;padding:3px 17px;min-width:80px;border-radius:2px;display:inline-block;border:1px solid #e2e2e2;background-color:#f8f8f8;height:40px;line-height:33px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#009cff;margin-bottom:2px}.media-button[_ngcontent-%COMP%]:visited{color:#6ccbff}.active.media-button[_ngcontent-%COMP%], .media-button[_ngcontent-%COMP%]:hover{background-color:#009cff;color:#fff}.vip[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]{border:1px solid #e2e2e2;color:#ff9000}.vip[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]:visited{color:#fcbd72}.vip[_ngcontent-%COMP%]   .media-button.active[_ngcontent-%COMP%], .vip[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]:hover{background-color:#ff9000;color:#fff}.download[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]{border:1px solid #e2e2e2;color:#009e96}.download[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]:visited{color:#009e96}.download[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]:hover{background-color:#009e96;color:#fff}.vip.active.media-button[_ngcontent-%COMP%]{background-color:#ff9000;color:#fff}.new-media[_ngcontent-%COMP%]{position:absolute;width:13px;height:13px;top:2px;right:9px;background:url(/assets/images/bflba.png)}.flex-place-holder[_ngcontent-%COMP%]{min-width:78px}.bought[_ngcontent-%COMP%]{position:absolute;right:5px;bottom:31px}.icon-check[_ngcontent-%COMP%]{border-radius:50%;background-color:#0ec610;color:#fff;height:17px;font-size:12px;width:17px}.lastplay[_ngcontent-%COMP%]{max-width:10em;padding:.4em 1em;border:1px solid #bcbcbc;text-align:center;position:absolute;-webkit-box-shadow:1px 1px 2px #d6d6d6;box-shadow:1px 1px 2px #d6d6d6;margin-left:-1.5em;z-index:100;background-color:#fff;font-size:14px}.lastplay[_ngcontent-%COMP%]:after, .lastplay[_ngcontent-%COMP%]:before{content:'';display:block;position:absolute;left:50%;width:1em;height:0;border-style:solid;margin-left:-.5em}.lastplay[_ngcontent-%COMP%]:after{top:-1em;border-color:transparent transparent #fff;border-width:.5em}.lastplay[_ngcontent-%COMP%]:before{top:-1.2em;border-color:transparent transparent #b4b4b4;border-width:.6em;margin-left:-.55em}"],
            ri = n("tENt"),
            ui = function() {
                function t(t, e, n, l, s) {
                    var a = this;
                    this._dnDialogService = t, this._activatedRoute = e, this._purchaseRequiredDialogService = n, this._messageDialogService = l, this.store = s, this.shouldReplace = !1, this.selectMediaEvent = new i.EventEmitter, s.subscribe(function() {
                        return a.readState()
                    }), this.readState()
                }
                return Object.defineProperty(t.prototype, "mediaKey", {
                    set: function(t) {
                        t && this.item.key && (this.active = decodeURIComponent(this.item.key) === t, this.shouldReplace = pt.a.isUrlContains(["play"]))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngOnInit = function() {}, t.prototype.readState = function() {
                    var t = this.store.getState().users;
                    this.user = t.currentUser
                }, t.prototype.onClick = function() {
                    this.user ? this.user.id && (this._purchaseRequiredDialogService.setState({
                        price: this.item.price,
                        mediaId: this.item.id
                    }), this._dnDialogService.open("purchase-required", {
                        "purchase-required-price": this.item.price,
                        "media-id": this.item.id
                    })) : this._dnDialogService.open("login-required")
                }, t.prototype.onDownloadClick = function() {
                    this._dnDialogService.open("vip-only")
                }, t
            }(),
            hi = i["\u0275crt"]({
                encapsulation: 0,
                styles: [oi],
                data: {}
            });

        function di(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "a", [
                ["class", "media-button text-small mr-2"]
            ], [
                [1, "target", 0],
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var l = !0;
                return "click" === e && (l = !1 !== i["\u0275nov"](t, 3).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && l), l
            }, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                active: 0
            }), i["\u0275did"](3, 671744, null, 0, S.q, [S.o, S.a, g.LocationStrategy], {
                queryParams: [0, "queryParams"],
                replaceUrl: [1, "replaceUrl"],
                routerLink: [2, "routerLink"]
            }, null), i["\u0275ppd"](4, 1), i["\u0275pod"](5, {
                id: 0
            }), i["\u0275pad"](6, 1), (t()(), i["\u0275ted"](7, null, ["", ""]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "media-button text-small mr-2", t(e, 2, 0, n.active)), t(e, 3, 0, t(e, 5, 0, i["\u0275unv"](e, 3, 0, t(e, 4, 0, i["\u0275nov"](e.parent, 0), n.item.key))), n.shouldReplace, t(e, 6, 0, "/play"))
            }, function(t, e) {
                var n = e.component;
                t(e, 0, 0, i["\u0275nov"](e, 3).target, i["\u0275nov"](e, 3).href), t(e, 7, 0, n.item.title)
            })
        }

        function ci(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "a", [
                ["class", "media-button text-small mr-2"]
            ], [
                [8, "href", 4]
            ], null, null, null, null)), (t()(), i["\u0275ted"](1, null, ["", ""]))], null, function(t, e) {
                var n = e.component;
                t(e, 0, 0, n.item.key), t(e, 1, 0, n.item.title)
            })
        }

        function pi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "a", [
                ["class", "media-button text-small mr-2"],
                ["href", "javascript:void(0);"]
            ], [
                [1, "id", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.onClick() && i), i
            }, null, null)), (t()(), i["\u0275ted"](1, null, ["", ""]))], null, function(t, e) {
                var n = e.component;
                t(e, 0, 0, "triggerkey_" + n.item.title), t(e, 1, 0, n.item.title)
            })
        }

        function gi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "a", [
                ["class", "media-button text-small mr-2"],
                ["href", "javascript:void(0);"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.onDownloadClick() && i), i
            }, null, null)), (t()(), i["\u0275ted"](1, null, ["", ""]))], null, function(t, e) {
                t(e, 1, 0, e.component.item.title)
            })
        }

        function fi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 0, "div", [
                ["class", "new-media"]
            ], null, null, null, null, null))], null, null)
        }

        function mi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 3, "div", [
                ["class", "bought"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 0, "span", [
                ["class", "dn-icon icon-check"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], null, null)
        }

        function vi(t) {
            return i["\u0275vid"](0, [i["\u0275pid"](0, ut.a, []), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275eld"](4, 0, null, null, 21, "div", [
                ["class", "media-btn position-relative"]
            ], null, null, null, null, null)), i["\u0275did"](5, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](6, {
                guest: 0,
                vip: 1,
                download: 2
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, di)), i["\u0275did"](9, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ci)), i["\u0275did"](12, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, pi)), i["\u0275did"](15, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, gi)), i["\u0275did"](18, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, fi)), i["\u0275did"](21, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, mi)), i["\u0275did"](24, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 5, 0, "media-btn position-relative", t(e, 6, 0, "guest" === n.type, "vip" === n.type, "download" === n.type)), t(e, 9, 0, n.item.key && "download" !== n.type), t(e, 12, 0, n.item.key && "download" === n.type), t(e, 15, 0, !n.item.key && "download" !== n.type), t(e, 18, 0, !n.item.key && "download" === n.type), t(e, 21, 0, n.item.isNew), t(e, 24, 0, n.item.bought)
            }, null)
        }
        var bi = n("Ppdm"),
            yi = function() {
                function t(t) {
                    var e = this;
                    this.store = t, this.type = "guest", this.playedKey = "-1", this.viewTime = "00:00:00", this.items = [], this.currentLanguage = 0, this.listOpenStatus = !1, this.columns = 11, this.defaultItems = 10, this.showItems = this.defaultItems, this.mediaKey = null, this.expanderText = "\u66f4\u65e9", setTimeout(function() {
                        t.subscribe(function() {
                            return e.readState()
                        }), e.readState()
                    })
                }
                return t.prototype.readState = function() {
                    var t = this.store.getState(),
                        e = t.video;
                    this.listOpenStatus = "guest" === this.type ? t.config.config.guestListOpenStatus : t.config.config.vipListOpenStatus, this.items && (this.showItems = this.listOpenStatus ? this.items.length : this.defaultItems), this.expanderText = this.listOpenStatus ? "\u6700\u65b0" : "\u66f4\u65e9", this.currentLanguage = Number(e.currentVideo.language), this.lists && (this.items = this.currentLanguage ? this.lists.alter : this.lists.medias, this.items && this.setFlexPlaceholders(this.items.length))
                }, t.prototype.ngOnInit = function() {
                    this.showItems = this.defaultItems
                }, t.prototype.toggleShowAll = function() {
                    this.showItems = this.listOpenStatus ? this.items.length : this.defaultItems, this.expanderText = this.listOpenStatus ? "\u6700\u65b0" : "\u66f4\u65e9", "guest" === this.type ? this.store.dispatch({
                        type: bi.a,
                        status: !this.listOpenStatus
                    }) : (console.log("vip", this.listOpenStatus), this.store.dispatch({
                        type: bi.b,
                        status: !this.listOpenStatus
                    }))
                }, t.prototype.setFlexPlaceholders = function(t) {
                    for (this.flexPlaceholder = [];
                        (t + 1 + this.flexPlaceholder.length) % this.columns > 0;) this.flexPlaceholder.push([])
                }, t.prototype.toClose = function() {
                    this.playedKey = "-1"
                }, t
            }(),
            Ai = i["\u0275crt"]({
                encapsulation: 0,
                styles: [oi],
                data: {}
            });

        function xi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 13, "div", [
                ["class", "text-center"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.toggleShowAll() && i), i
            }, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                guest: 0,
                vip: 1
            }), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](4, 0, null, null, 8, "a", [
                ["class", "expander media-button text-small mr-2"],
                ["href", "javascript:void(0)"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](6, 0, null, null, 2, "i", [
                ["class", "dn-icon icon-close"]
            ], null, null, null, null, null)), i["\u0275did"](7, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](8, {
                "rotate-90": 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](11, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "text-center", t(e, 2, 0, "guest" === n.type, "vip" === n.type)), t(e, 7, 0, "dn-icon icon-close", t(e, 8, 0, !n.listOpenStatus))
            }, function(t, e) {
                t(e, 11, 0, e.component.expanderText)
            })
        }

        function Ci(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 11, "div", [
                ["class", "lastplay"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.toClose() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](2, 0, null, null, 0, "div", [
                ["class", "cl"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](4, 0, null, null, 6, "div", [
                ["class", "c"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                \u4e0a\u6b21\u64ad\u653e\u5230\u8fd9\u91cc"])), (t()(), i["\u0275eld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](8, 0, null, null, 1, "div", [
                ["class", "t"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](9, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], null, function(t, e) {
                t(e, 9, 0, e.component.viewTime)
            })
        }

        function wi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "text-center"]
            ], [
                [1, "data-value", 0]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "app-media-button", [], null, null, null, vi, hi)), i["\u0275did"](3, 114688, null, 0, ui, [dt.a, S.a, ri.a, ct.a, Wn.a], {
                item: [0, "item"],
                videoId: [1, "videoId"],
                type: [2, "type"],
                mediaKey: [3, "mediaKey"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Ci)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n\n    "]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, e.context.$implicit, n.videoId, n.type, n.mediaKey), t(e, 6, 0, e.context.$implicit.key == n.playedKey)
            }, function(t, e) {
                t(e, 0, 0, e.context.$implicit.key)
            })
        }

        function ki(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 0, "div", [
                ["class", "flex-place-holder mr-2 d-block"]
            ], null, null, null, null, null))], null, null)
        }

        function Mi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 10, "div", [
                ["class", "d-flex flex-wrap my-1 text-small"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, xi)), i["\u0275did"](3, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, wi)), i["\u0275did"](6, 802816, null, 0, g.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ki)), i["\u0275did"](9, 802816, null, 0, g.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, n.items.length > n.defaultItems), t(e, 6, 0, n.items.slice(0 - n.showItems)), t(e, 9, 0, n.flexPlaceholder)
            }, null)
        }

        function Si(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275and"](16777216, null, null, 1, null, Mi)), i["\u0275did"](1, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.items && n.items.length)
            }, null)
        }
        var Pi = n("SkYI"),
            Ni = n("IpMa"),
            Ii = n("D9YE"),
            Ti = n("zP1J"),
            Oi = n("Snuo"),
            Di = n("CdNy"),
            Ri = n("/0DL"),
            Li = n("jdtv"),
            Bi = n("slB3"),
            Ei = n("5ggz"),
            Fi = n("tita"),
            Vi = n("NPwD"),
            zi = function() {
                function t(t, e, n, i, l) {
                    var s = this;
                    this._router = t, this._activatedRoute = e, this._commentListService = n, this._votingService = i, this.store = l, this.commentPager = 0, this.pageSize = 10, this.bottomLine = !1, this.isLoading = !1, l.subscribe(function() {
                        return s.readState()
                    }), this.readState()
                }
                return t.prototype.ngOnInit = function() {}, t.prototype.readState = function() {
                    var t = this.store.getState();
                    this.user = t.users.currentUser, this.videoId = t.video.currentVideo.id;
                    var e = this.store.getState().comments;
                    this.comments = e.currentComments
                }, t.prototype.ngOnChanges = function(t) {
                    this.comments = [], this.commentPager = 0, this.bottomLine = !1, this.store.dispatch({
                        type: Vi.b
                    }), this.getComments(this.commentPager + 1)
                }, t.prototype.getComments = function(t) {
                    var e = this;
                    this.isLoading || this.bottomLine || (this.isLoading = !0, this._commentListService.getComments(this.videoId, t, 10).subscribe(function(t) {
                        e.isLoading = !1, t.comments.map(function(t) {
                            t.liked = e._votingService.isVoted(Fi.b.LikeComment, t.commendId)
                        }), t.topComments.map(function(t) {
                            t.liked = e._votingService.isVoted(Fi.b.LikeComment, t.commendId)
                        }), e.store.dispatch({
                            type: Vi.a,
                            comments: {
                                comments: t.comments,
                                topComments: t.topComments
                            }
                        }), t.comments.length > 0 && (e.commentPager += 1), e.bottomLine = t.comments.length < 10
                    }))
                }, t.prototype.onScroll = function() {
                    console.log("scrolled!!")
                }, t.prototype.ngOnDestroy = function() {}, t
            }(),
            Hi = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    ['.text-gray[_ngcontent-%COMP%]{color:#f8f8f8!important}.text-light[_ngcontent-%COMP%]{color:#999!important}.text-dark[_ngcontent-%COMP%]{color:#434343}.text-large[_ngcontent-%COMP%]{font-size:18px}text-medium[_ngcontent-%COMP%]{font-size:16px}.text-small[_ngcontent-%COMP%]{font-size:13px}.dn-button[_ngcontent-%COMP%]{border:none;outline:0!important;display:block;padding:6px 8px;width:auto;min-width:100px;margin:0 .4rem;border-radius:18px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;color:#fff!important;background-color:silver}.dn-button[_ngcontent-%COMP%]:hover{background-color:#cacaca}.dn-button-plain[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid silver;color:#000!important;background-color:#fff;padding:6px 20px;cursor:pointer}.dn-button-plain[_ngcontent-%COMP%]:hover{background-color:#cacaca;color:#fff!important}.dn-button-outline[_ngcontent-%COMP%]{outline:0!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:2px solid silver;border-radius:2px;background-color:#fff;padding:2px 14px;cursor:pointer}.dn-button-outline[_ngcontent-%COMP%]:hover{background-color:#cacaca;color:#fff!important}.dn-button-outline.orange[_ngcontent-%COMP%]{color:#f49800;border-color:#f49800;background-color:#434343}.dn-button-outline.orange[_ngcontent-%COMP%]:hover{color:#fe9e00!important;border-color:#fe9e00!important;background-color:#000}.dn-button-blue[_ngcontent-%COMP%]{color:#fff!important;background-color:#00a8ec}.dn-button-blue[_ngcontent-%COMP%]:hover{background-color:#00b6ff}.dn-button-disable[_ngcontent-%COMP%]{cursor:default;color:#fff!important;background-color:#ddd!important}.dn-button-orange[_ngcontent-%COMP%]{color:#fff!important;background-color:#f49800}.dn-button-orange[_ngcontent-%COMP%]:hover{background-color:#fe9e00}.dn-button-gold[_ngcontent-%COMP%]{color:#fff!important;background-color:#f49800}.dn-button-gold[_ngcontent-%COMP%]:hover{background-color:#fe9e00}.dn-button-red[_ngcontent-%COMP%]{color:#fff!important;background-color:#e81d00}.dn-button-red[_ngcontent-%COMP%]:hover{background-color:red}.dn-button-large[_ngcontent-%COMP%]{padding:10px 18px}.dn-play-button[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:4px 12px;border-radius:3px;font-size:16px;display:inline-block;color:#fff!important;background-color:#f00000}.dn-play-button[_ngcontent-%COMP%]:hover{background-color:#f10000}.dn-play-button[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:20px;vertical-align:middle}.dn-play-button[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{display:inline-block;border-left:1px solid #fff;padding:3px 8px 3px 10px;vertical-align:middle}.dn-btn-load-more[_ngcontent-%COMP%]{cursor:pointer;padding:5px 15px}.link-blue[_ngcontent-%COMP%]{color:#00a8ec}.link-blue[_ngcontent-%COMP%]:hover{color:#434343}.red[_ngcontent-%COMP%]{color:#f00000}.rose[_ngcontent-%COMP%]{color:#ff01ff}.orange[_ngcontent-%COMP%]{color:#fe9e00}.top-comments[_ngcontent-%COMP%]{border-bottom:2px dotted #ddd;margin-bottom:25px}.bottom-line[_ngcontent-%COMP%]{position:relative;z-index:0;margin-top:35px}.bottom-line[_ngcontent-%COMP%]:before{content:"";border-top:1px solid #eee;margin:0 auto;position:absolute;top:40%;left:0;right:0;bottom:0;width:100%;z-index:-1}.body[_ngcontent-%COMP%]   font[_ngcontent-%COMP%]{color:#00ae00!important}']
                ],
                data: {}
            });

        function Gi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "d-flex align-items-center justify-content-center"],
                ["style", "min-height: 240px"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6682\u65e0\u8bc4\u8bba"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], null, null)
        }

        function Wi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-dn-comment", [], null, null, null, Pi.b, Pi.a)), i["\u0275did"](1, 114688, null, 0, Ni.a, [Ii.a, dt.a, ct.a, Ti.a, Oi.a, Di.b, Wn.a, g.DOCUMENT], {
                comment: [0, "comment"],
                isHot: [1, "isHot"],
                isLast: [2, "isLast"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.context.$implicit, !0, e.context.last)
            }, null)
        }

        function Yi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "top-comments"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Wi)), i["\u0275did"](3, 802816, null, 0, g.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                t(e, 3, 0, e.component.comments.topComments)
            }, null)
        }

        function _i(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-dn-comment", [], null, null, null, Pi.b, Pi.a)), i["\u0275did"](1, 114688, null, 0, Ni.a, [Ii.a, dt.a, ct.a, Ti.a, Oi.a, Di.b, Wn.a, g.DOCUMENT], {
                comment: [0, "comment"],
                isLast: [1, "isLast"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.context.$implicit, e.context.last)
            }, null)
        }

        function Xi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "text-center"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6b63\u5728\u52a0\u8f7d"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](5, 0, null, null, 1, "app-loader-spinner", [], null, null, null, Ri.b, Ri.a)), i["\u0275did"](6, 114688, null, 0, Li.a, [], null, null), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                t(e, 6, 0)
            }, null)
        }

        function ji(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "bottom-line text-center"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6211\u662f\u6709\u5e95\u7ebf\u7684"])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], null, null)
        }

        function Ui(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 18, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Yi)), i["\u0275did"](3, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](5, 0, null, null, 5, "div", [
                ["class", "search-results"],
                ["infiniteScroll", ""]
            ], null, [
                [null, "scrolled"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "scrolled" === e && (i = !1 !== l.getComments(l.commentPager + 1) && i), i
            }, null, null)), i["\u0275did"](6, 4866048, null, 0, Bi.a, [i.ElementRef, i.NgZone], {
                infiniteScrollDistance: [0, "infiniteScrollDistance"],
                infiniteScrollThrottle: [1, "infiniteScrollThrottle"]
            }, {
                scrolled: "scrolled"
            }), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, _i)), i["\u0275did"](9, 802816, null, 0, g.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Xi)), i["\u0275did"](14, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ji)), i["\u0275did"](17, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, n.comments.topComments.length), t(e, 6, 0, 2, 500), t(e, 9, 0, n.comments.comments), t(e, 14, 0, n.isLoading), t(e, 17, 0, n.bottomLine && n.commentPager > 1)
            }, null)
        }

        function Qi(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275and"](16777216, null, null, 1, null, Gi)), i["\u0275did"](1, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Ui)), i["\u0275did"](4, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.comments && (!n.comments.comments || !n.comments.comments.length)), t(e, 4, 0, n.comments.comments && n.comments.comments.length)
            }, null)
        }
        var Ki = n("fP1r"),
            Zi = n("fUIa"),
            qi = n("B3G4"),
            Ji = n("aNKT"),
            $i = n("FWfI"),
            tl = n("Ohpo"),
            el = n("3uOu"),
            nl = function() {
                function t(t, e, n) {
                    this._router = t, this.document = e, this.store = n, this.subscriptions = [], this.showQRCode = !1, this.domain = e.location.protocol + "//" + e.location.hostname
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.showQRCode = !1, this.genLinks(), this.subscriptions.push(this._router.events.subscribe(function(e) {
                        t.showQRCode = !1, t.genLinks()
                    }))
                }, t.prototype.shareLink = function(t, e, n, i) {
                    return "https://hwhrq.com/r?url=" + encodeURI(t) + "&click=1&uid=0&to=" + i + "&type=text&pic=" + encodeURI(e) + "&title=" + encodeURI(n) + "&key=&desc=&comment=&relateUid=&searchPic=0&sign=on"
                }, t.prototype.genLinks = function() {
                    var t = ("https://www." + pt.a.GetHost() + "/detail.aspx?id={id}").replace("{page}", 2 == L.a.cinema ? "Adult" : "Movie").replace("{id}", this.id);
                    this.qrCodeSrc = "https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=" + encodeURI("https://hwhrq.com/r?url=" + encodeURI(t)), this.fbLink = this.shareLink(t, this.image, this.title, "fbook"), this.twitterLink = this.shareLink(t, this.image, this.title, "twi"), this.qqZoneLink = this.shareLink(t, this.image, this.title, "qzone"), this.qqLink = this.shareLink(t, this.image, this.title, "sqq"), this.weiboLink = this.shareLink(t, this.image, this.title, "tsina")
                }, t.prototype.share = function(t) {
                    t && (this.showQRCode = !0), this.store.dispatch({
                        type: $n.a
                    })
                }, t
            }(),
            il = n("OE0E"),
            ll = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".share[_ngcontent-%COMP%]{padding:30px 120px}.prompt[_ngcontent-%COMP%], .qr-code[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;width:240px;height:180px}.prompt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .qr-code[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid #ddd;padding:5px;display:block}.social-link[_ngcontent-%COMP%]{width:20%}"]
                ],
                data: {}
            });

        function sl(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "share-wechat d-flex justify-content-center mb-5"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "div", [
                ["class", "prompt"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            \u70b9\u51fb\u56fe\u6807\u5206\u4eab\u8fd9\u4e2a\u9875\u9762\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], null, null)
        }

        function al(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 12, "div", [
                ["class", "share-wechat d-flex justify-content-center mb-5"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 9, "div", [
                ["class", "qr-code flex-1"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](4, 0, null, null, 6, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](6, 0, null, null, 0, "img", [
                ["class", "mb-3"]
            ], [
                [8, "src", 4]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](8, 0, null, null, 1, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u626b\u63cf\u4e8c\u7ef4\u7801\u5206\u4eab"])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], null, function(t, e) {
                t(e, 6, 0, i["\u0275inlineInterpolate"](1, "", e.component.qrCodeSrc, ""))
            })
        }

        function ol(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 40, "div", [
                ["class", "share"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, sl)), i["\u0275did"](3, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, al)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](8, 0, null, null, 31, "div", [
                ["class", "d-flex align-items-center justify-content-center"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](10, 0, null, null, 3, "a", [
                ["class", "social-link"],
                ["href", "javascript:void(0)"],
                ["title", "\u5206\u4eab\u5230\u5fae\u4fe1"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.share(!0) && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](12, 0, null, null, 0, "img", [
                ["class", "social"],
                ["src", "/assets/images/social/wechat-1.png"],
                ["width", "64"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](15, 0, null, null, 3, "a", [
                ["class", "social-link"],
                ["target", "_blank"],
                ["title", "\u5206\u4eab\u5230\u65b0\u6d6a\u5fae\u535a"]
            ], [
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.share(!1) && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](17, 0, null, null, 0, "img", [
                ["class", "social"],
                ["src", "/assets/images/social/weibo.png"],
                ["width", "64"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](20, 0, null, null, 3, "a", [
                ["class", "social-link"],
                ["target", "_blank"],
                ["title", "\u5206\u4eab\u5230QQ\u597d\u53cb"]
            ], [
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.share(!1) && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](22, 0, null, null, 0, "img", [
                ["class", "social"],
                ["src", "/assets/images/social/qq.png"],
                ["width", "64"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](25, 0, null, null, 3, "a", [
                ["class", "social-link"],
                ["target", "_blank"],
                ["title", "\u5206\u4eab\u5230QQ\u7a7a\u95f4"]
            ], [
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.share(!1) && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](27, 0, null, null, 0, "img", [
                ["class", "social"],
                ["src", "/assets/images/social/qq-zone.png"],
                ["width", "64"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](30, 0, null, null, 3, "a", [
                ["class", "social-link"],
                ["target", "_blank"],
                ["title", "\u5206\u4eab\u5230Twitter"]
            ], [
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.share(!1) && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](32, 0, null, null, 0, "img", [
                ["class", "social"],
                ["src", "/assets/images/social/twitter.png"],
                ["width", "64"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](35, 0, null, null, 3, "a", [
                ["class", "social-link"],
                ["target", "_blank"],
                ["title", "\u5206\u4eabFacebook"]
            ], [
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.share(!1) && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](37, 0, null, null, 0, "img", [
                ["class", "social"],
                ["src", "/assets/images/social/facebook.png"],
                ["width", "64"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, !n.showQRCode), t(e, 6, 0, n.showQRCode)
            }, function(t, e) {
                var n = e.component;
                t(e, 15, 0, n.weiboLink), t(e, 20, 0, n.qqLink), t(e, 25, 0, n.qqZoneLink), t(e, 30, 0, n.twitterLink), t(e, 35, 0, n.fbLink)
            })
        }
        var rl = n("9/5O"),
            ul = n("O0BE"),
            hl = n("iGNb"),
            dl = n("bvcM"),
            cl = n("kPw3"),
            pl = function() {
                function t(t, e, n, l, s, a, o, r, u) {
                    var h = this;
                    this._videoService = t, this._dnDialogService = e, this._messageDialogService = n, this._favoriteService = l, this.pageScrollService = s, this._toastService = a, this._windowService = o, this.document = r, this.store = u, this.subscriptions = [], this.likeLoading = !1, this.dislikeLoading = !1, this.favoriteLoading = !1, this.userBehaviorEvent = new i.EventEmitter, this.screenType = p.a, u.subscribe(function() {
                        return h.readState()
                    }), this.readState(), this._windowService.size$.subscribe(function(t) {
                        h.screenSize = t
                    })
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.user && this.user.id && this._favoriteService.favoriteStatusSource$.subscribe(function(e) {
                        "all" === e && (t.video.userBehaviors.favorite = !1, t.video.userData.favorites--)
                    })
                }, t.prototype.readState = function() {
                    var t = this.store.getState().users;
                    this.user = t.currentUser
                }, t.prototype.like = function() {
                    var t = this;
                    this.likeLoading || (this.likeLoading = !0, this.subscriptions.push(this._videoService.like(this.video.id).subscribe(function(e) {
                        t.likeLoading = !1, e.message ? (t._messageDialogService.setState({
                            type: ct.b.Emoji1,
                            message: e.message
                        }), t._dnDialogService.open("message-dialog")) : (t.userBehaviorEvent.emit("like"), t._toastService.showBlackToast("\u9012\u4ea4\u6210\u529f\uff01"))
                    })))
                }, t.prototype.dislike = function() {
                    var t = this;
                    this.dislikeLoading || (this.dislikeLoading = !0, this.subscriptions.push(this._videoService.dislike(this.video.id).subscribe(function(e) {
                        t.dislikeLoading = !1, e.message ? (t._messageDialogService.setState({
                            type: ct.b.Emoji1,
                            message: e.message
                        }), t._dnDialogService.open("message-dialog")) : (t.userBehaviorEvent.emit("dislike"), t._toastService.showBlackToast("\u9012\u4ea4\u6210\u529f\uff01"))
                    })))
                }, t.prototype.share = function() {
                    this._dnDialogService.open("share")
                }, t.prototype.favorite = function() {
                    var t = this;
                    this.user && this.user.id ? (this.favoriteLoading = !0, this.video.userBehaviors.favorite ? this._favoriteService.removeFavoritesItem(this.user, this.video.id).subscribe(function() {
                        t.favoriteLoading = !1, t.video.userBehaviors.favorite = !1, t.video.userData.favorites = t.video.userData.favorites - 1, t._toastService.showBlackToast("\u5df2\u53d6\u6d88\u6536\u85cf\uff01"), t._favoriteService.changeFavoriteStatus(void 0)
                    }) : this._videoService.favorite(this.user, this.video.id).subscribe(function() {
                        t.favoriteLoading = !1, t.video.userData.favorites = t.video.userData.favorites + 1, t.userBehaviorEvent.emit("favorite"), t._toastService.showBlackToast("\u6536\u85cf\u6210\u529f\uff01"), t._favoriteService.changeFavoriteStatus(void 0)
                    })) : this._dnDialogService.open("login-required")
                }, t.prototype.download = function() {
                    this._messageDialogService.setState({
                        type: ct.b.Warning,
                        message: "\u8be5\u5f71\u7247\u6682\u65f6\u4e0d\u53ef\u4e0b\u8f7d"
                    }), this._dnDialogService.open("message-dialog")
                }, t.prototype.showComments = function() {
                    var t = dl.a.newInstance({
                        document: this.document,
                        pageScrollDuration: 400,
                        pageScrollOffset: 132,
                        scrollTarget: "#comment-box"
                    });
                    this.pageScrollService.start(t)
                }, t.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    })
                }, t
            }(),
            gl = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".user-data-bar[_ngcontent-%COMP%]{position:relative;margin-bottom:30px;font-size:15px;line-height:30px}.icon-container[_ngcontent-%COMP%]{height:30px;width:30px;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.dn-icon[_ngcontent-%COMP%]{font-size:25px;margin:0 auto 2px;cursor:pointer}.seprator-overlay[_ngcontent-%COMP%]{z-index:-1}.ico[_ngcontent-%COMP%]{position:relative;cursor:pointer}.ico[_ngcontent-%COMP%]:hover   .dn-icon[_ngcontent-%COMP%], .ico[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{color:red}.sec-first[_ngcontent-%COMP%], .sec-last[_ngcontent-%COMP%], .sec-second[_ngcontent-%COMP%]{width:33%}.seprator[_ngcontent-%COMP%]{height:30px;width:1px;background-color:#ddd}.sec-center[_ngcontent-%COMP%]{border-left:1px solid #ddd;border-right:1px solid #ddd}.icon-favorite[_ngcontent-%COMP%]{margin-top:-2px}.favorited[_ngcontent-%COMP%]{position:absolute;font-size:13px;background-color:red;line-height:18px;color:#fff;top:2px;padding:1px 2px;right:0;border:1px solid red}.screen-medium[_ngcontent-%COMP%]   .icon-text[_ngcontent-%COMP%]{display:none}"]
                ],
                data: {}
            });

        function fl(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 2, "div", [
                ["class", "dn-icon dn-icon icon-favorite"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                "text-red": 0
            })], function(t, e) {
                t(e, 1, 0, "dn-icon dn-icon icon-favorite", t(e, 2, 0, e.component.video.userBehaviors.favorite))
            }, null)
        }

        function ml(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-loader-ring", [], null, null, null, rl.b, rl.a)), i["\u0275did"](1, 114688, null, 0, ul.a, [], null, null)], function(t, e) {
                t(e, 1, 0)
            }, null)
        }

        function vl(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 2, "div", [
                ["class", "dn-icon icon-like"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                "text-red": 0
            })], function(t, e) {
                t(e, 1, 0, "dn-icon icon-like", t(e, 2, 0, e.component.video.userBehaviors.like))
            }, null)
        }

        function bl(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-loader-ring", [], null, null, null, rl.b, rl.a)), i["\u0275did"](1, 114688, null, 0, ul.a, [], null, null)], function(t, e) {
                t(e, 1, 0)
            }, null)
        }

        function yl(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 2, "div", [
                ["class", "dn-icon icon-dislike"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                "text-red": 0
            })], function(t, e) {
                t(e, 1, 0, "dn-icon icon-dislike", t(e, 2, 0, e.component.video.userBehaviors.dislike))
            }, null)
        }

        function Al(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-loader-ring", [], null, null, null, rl.b, rl.a)), i["\u0275did"](1, 114688, null, 0, ul.a, [], null, null)], function(t, e) {
                t(e, 1, 0)
            }, null)
        }

        function xl(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 134, "div", [
                ["class", "user-data-bar d-flex justify-content-between"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                "screen-xxsmall": 0,
                "screen-xsmall": 1,
                "screen-small": 2,
                "screen-medium": 3,
                "screen-large": 4
            }), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275eld"](4, 0, null, null, 16, "div", [
                ["class", "ico"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](6, 0, null, null, 13, "div", [
                ["class", "d-flex align-items-center"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](8, 0, null, null, 3, "div", [
                ["class", "icon-container mr-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](10, 0, null, null, 0, "div", [
                ["class", "dn-icon icon-watch"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](13, 0, null, null, 5, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](15, 0, null, null, 1, "span", [
                ["class", "icon-text"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u64ad\u653e"])), (t()(), i["\u0275ted"](17, null, [" ", ""])), i["\u0275ppd"](18, 1), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275eld"](22, 0, null, null, 16, "div", [
                ["class", "ico"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](24, 0, null, null, 13, "div", [
                ["class", "d-flex align-items-center"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.showComments() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](26, 0, null, null, 3, "div", [
                ["class", "icon-container mr-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](28, 0, null, null, 0, "div", [
                ["class", "dn-icon icon-comment"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](31, 0, null, null, 5, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](33, 0, null, null, 1, "span", [
                ["class", "icon-text"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u8bc4\u8bba"])), (t()(), i["\u0275ted"](35, null, [" ", ""])), i["\u0275ppd"](36, 1), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](40, 0, null, null, 0, "div", [
                ["class", "seprator"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](42, 0, null, null, 23, "div", [
                ["class", "ico"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](44, 0, null, null, 20, "div", [
                ["class", "d-flex align-items-center"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.favorite() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](46, 0, null, null, 7, "div", [
                ["class", "icon-container mr-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, fl)), i["\u0275did"](49, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ml)), i["\u0275did"](52, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](55, 0, null, null, 8, "div", [], null, null, null, null, null)), i["\u0275did"](56, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), i["\u0275pod"](57, {
                "text-red": 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](59, 0, null, null, 1, "span", [
                ["class", "icon-text"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6536\u85cf"])), (t()(), i["\u0275ted"](61, null, [" ", "\n                "])), i["\u0275ppd"](62, 1), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](67, 0, null, null, 16, "div", [
                ["class", "ico"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](69, 0, null, null, 13, "div", [
                ["class", "d-flex align-items-center"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.share() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](71, 0, null, null, 3, "div", [
                ["class", "icon-container mr-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](73, 0, null, null, 0, "div", [
                ["class", "dn-icon icon-share"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](76, 0, null, null, 5, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](78, 0, null, null, 1, "span", [
                ["class", "icon-text"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5206\u4eab"])), (t()(), i["\u0275ted"](80, null, [" ", ""])), i["\u0275ppd"](81, 1), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](85, 0, null, null, 0, "div", [
                ["class", "seprator"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](87, 0, null, null, 22, "div", [
                ["class", "ico"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](89, 0, null, null, 19, "div", [
                ["class", "d-flex align-items-center"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.like() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](91, 0, null, null, 7, "div", [
                ["class", "icon-container mr-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, vl)), i["\u0275did"](94, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, bl)), i["\u0275did"](97, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](100, 0, null, null, 7, "div", [], null, null, null, null, null)), i["\u0275did"](101, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), i["\u0275pod"](102, {
                "text-red": 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](104, 0, null, null, 1, "span", [
                ["class", "icon-text"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u8d5e"])), (t()(), i["\u0275ted"](106, null, [" ", ""])), i["\u0275ppd"](107, 1), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](111, 0, null, null, 22, "div", [
                ["class", "ico"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](113, 0, null, null, 19, "div", [
                ["class", "d-flex align-items-center"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.dislike() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](115, 0, null, null, 7, "div", [
                ["class", "icon-container mr-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, yl)), i["\u0275did"](118, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Al)), i["\u0275did"](121, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](124, 0, null, null, 7, "div", [], null, null, null, null, null)), i["\u0275did"](125, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), i["\u0275pod"](126, {
                "text-red": 0
            }), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](128, 0, null, null, 1, "span", [
                ["class", "icon-text"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u8e29"])), (t()(), i["\u0275ted"](130, null, ["", ""])), i["\u0275ppd"](131, 1), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "user-data-bar d-flex justify-content-between", t(e, 2, 0, n.screenSize === n.screenType.XXSmall, n.screenSize === n.screenType.XSmall, n.screenSize === n.screenType.Small, n.screenSize === n.screenType.Medium, n.screenSize === n.screenType.Large)), t(e, 49, 0, !n.favoriteLoading), t(e, 52, 0, n.favoriteLoading), t(e, 56, 0, t(e, 57, 0, n.video.userBehaviors.favorite)), t(e, 94, 0, !n.likeLoading), t(e, 97, 0, n.likeLoading), t(e, 101, 0, t(e, 102, 0, n.video.userBehaviors.like)), t(e, 118, 0, !n.dislikeLoading), t(e, 121, 0, n.dislikeLoading), t(e, 125, 0, t(e, 126, 0, n.video.userBehaviors.dislike))
            }, function(t, e) {
                var n = e.component;
                t(e, 17, 0, i["\u0275unv"](e, 17, 0, t(e, 18, 0, i["\u0275nov"](e.parent, 0), n.video.userData.viewCount))), t(e, 35, 0, i["\u0275unv"](e, 35, 0, t(e, 36, 0, i["\u0275nov"](e.parent, 0), n.video.userData.comments))), t(e, 61, 0, i["\u0275unv"](e, 61, 0, t(e, 62, 0, i["\u0275nov"](e.parent, 0), n.video.userData.favorites))), t(e, 80, 0, i["\u0275unv"](e, 80, 0, t(e, 81, 0, i["\u0275nov"](e.parent, 0), n.video.userData.shared))), t(e, 106, 0, i["\u0275unv"](e, 106, 0, t(e, 107, 0, i["\u0275nov"](e.parent, 0), n.video.userData.like))), t(e, 130, 0, i["\u0275unv"](e, 130, 0, t(e, 131, 0, i["\u0275nov"](e.parent, 0), n.video.userData.dislike)))
            })
        }

        function Cl(t) {
            return i["\u0275vid"](0, [i["\u0275pid"](0, hl.a, []), (t()(), i["\u0275and"](16777216, null, null, 1, null, xl)), i["\u0275did"](2, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(t, e) {
                t(e, 2, 0, e.component.video)
            }, null)
        }
        var wl = n("o5aa"),
            kl = n("21q7"),
            Ml = function() {
                function t(t, e, n) {
                    var i = this;
                    this._videoListService = t, this._categoryService = e, this.store = n, this.display = kl.a.Compact, this.subscript = null, this.cacheKey = null, this.subscript = n.subscribe(function() {
                        return i.readState()
                    }), this.readState()
                }
                return t.prototype.ngOnInit = function() {}, t.prototype.ngOnDestroy = function() {
                    this.subscript && this.subscript()
                }, t.prototype.readState = function() {
                    var t = this,
                        e = this.store.getState().video;
                    if (e.currentVideo && this.cacheKey !== e.currentVideo.key) {
                        this.cacheKey = e.currentVideo.key;
                        var n = e.currentVideo.key;
                        this.currentCid = e.currentVideo.cid, this._videoListService.getRelatedVideos(this.currentCid, e.currentVideo.title).subscribe(function(e) {
                            t.items = e.filter(function(t) {
                                return t.key !== n
                            }).slice(0, 5)
                        })
                    }
                }, t
            }(),
            Sl = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function Pl(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "app-video-teaser", [], null, null, null, wl.b, wl.a)), i["\u0275did"](3, 114688, null, 0, kl.b, [S.a, p.b], {
                video: [0, "video"],
                display: [1, "display"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n  "]))], function(t, e) {
                t(e, 3, 0, e.context.$implicit, e.component.display)
            }, null)
        }

        function Nl(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-block-title", [], null, null, null, In.b, In.a)), i["\u0275did"](1, 114688, null, 0, Tn.a, [], {
                title: [0, "title"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275eld"](3, 0, null, null, 4, "div", [
                ["style", "padding-top: 8px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n  "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Pl)), i["\u0275did"](6, 802816, null, 0, g.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "\u76f8\u5173\u5267\u96c6"), t(e, 6, 0, n.items)
            }, null)
        }
        var Il = n("VorY"),
            Tl = n("ZZL2"),
            Ol = n("P5Zp"),
            Dl = n("FNqd"),
            Rl = n("Bf2p"),
            Ll = n("4sLU"),
            Bl = function() {
                function t(t) {
                    var e = this;
                    this._purchaseRequiredDialogService = t, this._purchaseRequiredDialogService.purchaseRequiredDialogSource$.subscribe(function(t) {
                        e.price = t.price, e.mediaId = t.mediaId
                    })
                }
                return t.prototype.ngOnInit = function() {}, t
            }(),
            El = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function Fl(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "h5", [
                ["class", "mb-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u89e3\u9501\u6b64\u89c6\u9891\u5c06\u82b1\u8d39"])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "text-gold"],
                ["id", "purchase-required-price"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](3, null, ["", ""])), (t()(), i["\u0275ted"](-1, null, ["\u91d1\u5e01\uff0c\u6216\u8005\u5347\u7ea7\u4e3aVIP\u4f1a\u5458\uff0c\u65e0\u9650\u5236\u64ad\u653e"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], null, function(t, e) {
                t(e, 3, 0, e.component.price)
            })
        }
        var Vl = n("DYhf"),
            zl = n("ww8D"),
            Hl = n("sfGI"),
            Gl = n("Sr8c"),
            Wl = n("cQlX"),
            Yl = n("L3js"),
            _l = n("vQVz"),
            Xl = function() {
                function t(t, e, n) {
                    var i = this;
                    this._router = t, this._purchaseSuccessDialogService = e, this._dnDialogService = n, this._purchaseSuccessDialogService.purchaseSuccessDialogSource$.subscribe(function(t) {
                        i.videoKey = t.videoKey, i.mediaKey = t.mediaKey
                    })
                }
                return t.prototype.ngOnInit = function() {}, t.prototype.playNow = function() {
                    this._router.navigate(["/play"], {
                        queryParams: {
                            id: this.mediaKey
                        }
                    }), this._dnDialogService.close("purchase-success")
                }, t
            }(),
            jl = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function Ul(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "dn-button dn-button-blue"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.playNow() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u7acb\u5373\u64ad\u653e"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], null, null)
        }
        var Ql = function(t) {
                return t[t.Barrel = 0] = "Barrel", t[t.FixTop = 1] = "FixTop", t[t.FixBottom = 2] = "FixBottom", t
            }({}),
            Kl = [{
                id: "1",
                time: 2.1,
                font: "small",
                color: "#F0F8FF",
                content: "\u53ef\u601c\u7684\u5c0f\u7075\u68a6",
                type: Ql.FixTop,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "2",
                time: 2.16,
                font: "small",
                color: "#FAEBD7",
                content: "\u6211\u5bb6\u5927\u5e08\u5144\u8111\u5b50\u6709\u5751",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "3",
                time: 2.34,
                font: "small",
                color: "#00FFFF",
                content: "\u60f3\u770b\u74dc\u54e5\u8df3\u821e\u54c8\u54c8\u54c8\u54c8",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "4",
                time: 2.84,
                font: "small",
                color: "#ff0000",
                content: "\u6211\u592a\u6fc0\u52a8\u4e86\u54c8\u54c8\u54c8",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "5",
                time: 3.43,
                font: "small",
                color: "#7FFFD4",
                content: "\u745e\u91d1\u4e00\u751f\u63a8\uff01\u554a\u554a\u554a\u554a\u554a\u554a\u554a\u554a\u554a",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "6",
                time: 4.22,
                font: "small",
                color: "#0000FF",
                content: "\u4ed6\u773c\u4e2d\u7684\u661f\u8fb0\u5927\u6d77\uff0c\u662f\u9a91\u58eb\u89e6\u800c\u4e0d\u53ca\u7684\u5149\u8292",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "7",
                time: 4.55,
                font: "small",
                color: "#8A2BE2",
                content: "\u5f3a\u70c8\u63a8\u8350\u8fd9\u9996\u6b4c\u7684\u821e\u8e48\u7248\uff0c\u662fRE-M!X\u8df3\u7684\uff0c\u5927\u5bb6\u76f4\u63a5\u672c\u7ad9\u641c\u7d22\u56fd\u738b\u6e38\u620f\u5c31\u80fd\u627e\u5230",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "8",
                time: 5,
                font: "small",
                color: "#A52A2A",
                content: "\u7ed9\u7897\u8001\u5e08\u75af\u72c2\u6253call\u554a\u554a\u554a\u554a\u554a",
                type: Ql.Barrel,
                author: {
                    name: "\u591a\u7459\u91d1\u57ce\u6b66"
                }
            }, {
                id: "9",
                time: 5.55,
                font: "small",
                color: "#5F9EA0",
                content: "\u4e00\u4eba\u8840\u66f8\u74dc\u54e5\u8df3\u821e",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "10",
                time: 5.65,
                font: "small",
                color: "#7FFF00",
                content: "\u6211\u6c38\u8fdc\u559c\u6b22\u5b89\u96f7\u3002",
                type: Ql.FixTop,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "11",
                time: 6.12,
                font: "small",
                color: "#D2691E",
                content: "\u4e0d\u8bba\u6392\u540d\u591a\u5c11\u6211\u90fd\u6c38\u8fdc\u652f\u6301\u4f60\u4eec",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "12",
                time: 6.55,
                font: "small",
                color: "#FF7F50",
                content: "\u8868\u767d\u897f\u56db\uff01\uff01\uff01",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "13",
                time: 7,
                font: "small",
                color: "#6495ED",
                content: "\u8001\u5927\uff0c\u597d\u597d\u770b\u554a\u554a\u554a\u554a\u554a\u554a",
                type: Ql.Barrel,
                author: {
                    name: "\u957f\u6c5f\u540e\u6d6a\u63a8\u524d\u6d6a"
                }
            }, {
                id: "14",
                time: 7.65,
                font: "small",
                color: "#DC143C",
                content: "\u5b89\u96f7\u662f\u6211\u7b2c\u4e00\u4e2a\u60f3\u7528\u5fc3\u53bb\u5b88\u62a4\u7684\u5708\u5b50",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "15",
                time: 7.222,
                font: "small",
                color: "#00008B",
                content: "\u4eca\u5929\u5929\u6c14\u5f88\u597d\uff0c\u539f\u6765\u5927\u5bb6\u90fd\u5728\u5bb6\u91cc\u505a\u83dc\u3002\u3002\u3002",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "16",
                time: 8.12,
                font: "small",
                color: "#008B8B",
                content: "\u80dc\u51fa\uff01\u6211\u6572\uff01\uff01\uff01",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "17",
                time: 8.32,
                font: "small",
                color: "#B8860B",
                content: "\u5c0f\u59d0\u59d0\u505a\u83dc\u770b\u8d77\u6765\u5f88\u597d\u5403\u7684\u6837\u5b50\u3002\u3002\u3002\u3002",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "18",
                time: 8.34,
                font: "small",
                color: "#A9A9A9",
                content: "\u7a81\u7136\u53d1\u73b0\u81ea\u5df1\u597d\u524d\uff01\uff01\uff1f",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "19",
                time: 9.25,
                font: "small",
                color: "#006400",
                content: "\u7b2c\u4e00\u4e2a\u770b\u5b8c\uff01",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "20",
                time: 9.55,
                font: "small",
                color: "#BDB76B",
                content: "\u60f3\u770b\u74dc\u54e5\u8df3\u821e\u54c8\u54c8\u54c8\u54c8",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "21",
                time: 9.61,
                font: "small",
                color: "#8B008B",
                content: "6666",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "22",
                time: 9.66,
                font: "small",
                color: "#556B2F",
                content: "\u5982\u679c\u4e0d\u662f\u4f60\uff0c\u4ed6\u65e0\u6cd5\u5f81\u670d\u661f\u8fb0\u5927\u6d77",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "23",
                time: 10,
                font: "small",
                color: "#FF8C00",
                content: "\u524d\u65b9\u9ad8\u80fd",
                type: Ql.Barrel,
                author: {
                    name: "\u9e21\u9e21\u548c\u9e21\u9e21"
                }
            }, {
                id: "24",
                time: 10.1112,
                font: "small",
                color: "#8FBC8F",
                content: "\u524d\u65b9\u6709\u4eba\u5267\u900f\uff0c\u5927\u5bb6\u95ea\u907f",
                type: Ql.Barrel,
                author: {
                    name: "\u4e13\u4fee\u4e0b\u6c34\u9053"
                }
            }, {
                id: "25",
                time: 10.7,
                font: "small",
                color: "#483D8B",
                content: "\u4e91\u4eae\u55f7\u55f7\u55f7\uff01\uff01",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "26",
                time: 10.75,
                font: "small",
                color: "#2F4F4F",
                content: "HHHHHH\u5986\u6709\u70b9\u592a\u6d53\u4e86",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "27",
                time: 11,
                font: "small",
                color: "#00CED1",
                content: "\u5c0f\u7f16\u8d85\u8d5e\u7684\u5566\u53ec\u5524\u5b57\u5e55\u541b",
                type: Ql.Barrel,
                author: {
                    name: "iadW"
                }
            }, {
                id: "28",
                time: 11.2,
                font: "small",
                color: "#9400D3",
                content: "\u5929\u5929\u5c31\u662f\u5929\u5929",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "29",
                time: 11.25,
                font: "small",
                color: "#FF1493",
                content: "\u4e5d\u83dc\u82b1\u5230\u5e95\u662f\u4ec0\u4e48\u82b1",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "30",
                time: 11.55,
                font: "small",
                color: "#dad28e",
                content: "\u5b57\u5e55\u541b\uff01\uff01\u547c\u53eb\u5b57\u5e55\u541b\uff01\uff01",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "31",
                time: 12.55,
                font: "small",
                color: "#00BFFF",
                content: "\u54c7\u8fd9\u5957\u8863\u670d\u5e05\u7684",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "32",
                time: 13,
                font: "small",
                color: "#696969",
                content: "\u53ec\u5524\u5b57\u5e55\u541b",
                type: Ql.Barrel,
                author: {
                    name: "caiDn"
                }
            }, {
                id: "33",
                time: 13.25,
                font: "small",
                color: "#008000",
                content: "\u55f7\u55f7\u55f7\u55f7\u55f7\u55f7\u597d\u9e21\u51bb",
                type: Ql.Barrel,
                author: {
                    name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                }
            }, {
                id: "34",
                time: 14,
                font: "small",
                color: "#CD5C5C",
                content: "\u745e\u5609\u5927\u6cd5\u597d\uff01\uff01\uff01\uff01",
                type: Ql.Barrel,
                author: {
                    name: "caaaaiDn"
                }
            }],
            Zl = function() {
                function t() {}
                return t.prototype.getDanmu = function() {
                    return Object(v.a)(Kl)
                }, t
            }(),
            ql = n("y6Mr"),
            Jl = function() {
                function t(t) {
                    this._playHistoryService = t, this.current = 0, this.duration = 0, this.margin = 2
                }
                return t.prototype.assingVideo = function(t) {
                    this.video = t
                }, t.prototype.veryBeginning = function() {
                    return this.current < this.duration / 100 * this.margin
                }, t.prototype.veryEnd = function() {
                    return this.current > this.duration * (100 - this.margin) / 100
                }, t.prototype.getMedia = function() {
                    var t = this;
                    this.media = {}, Object.keys(this.video.playlist).map(function(e) {
                        var n = t.video.playlist[e].medias.filter(function(e) {
                            return e.key === t.mediaKey
                        });
                        n.length > 0 && (t.media = n[0])
                    })
                }, t.prototype.nextMedia = function() {
                    var t = this,
                        e = "";
                    return ["tv-series", "anime", "variety"].includes(this.video.category) ? (Object.keys(this.video.playlist).map(function(n) {
                        var i = t.video.playlist[n].medias.findIndex(function(e) {
                            return e.id === t.media.id
                        });
                        i > -1 && i < t.video.playlist[n].medias.length - 1 && (e = t.video.playlist[n].medias[i + 1].id)
                    }), e) : e
                }, t.prototype.save = function(t, e, n) {
                    if (this.mediaKey = n, this.getMedia(), this.video && this.media && (this.current = t, this.duration = e, !this.veryBeginning())) {
                        var i = {
                            vid: this.video.id,
                            vKey: this.video.key,
                            title: this.video.title,
                            category: this.video.category,
                            mid: this.media.id,
                            mKey: this.media.key,
                            mTitle: this.media.title,
                            nextMid: this.nextMedia(),
                            current: t,
                            duration: e,
                            timestamp: Date.now().toString()
                        };
                        this._playHistoryService.pushLocalPlayHistory(i)
                    }
                }, t.prototype.getFromLocal = function() {
                    return this._playHistoryService.getLocalPlayHistoryById(this.video.id)
                }, t
            }(),
            $l = n("T7ur"),
            ts = n("g5jc"),
            es = n("4WoA"),
            ns = n("t8os"),
            is = function() {
                function t(t, e, n, i, l, s, a, o, r, u, h, d, c, g, f, m, v, b, y, A, x, C) {
                    var w = this;
                    this._videoService = t, this._danmuService = e, this._router = n, this._activatedRoute = i, this._titleService = l, this._dnDialogService = s, this._windowService = a, this._messageDialogService = o, this.pageScrollService = r, this._rechargeBoxService = u, this._favoriteService = h, this._purchaseRequiredDialogService = d, this._purchaseSuccessDialogService = c, this.document = g, this.store = f, this._location = m, this._videoTransFormer = v, this._mediaTransFormer = b, this._storage = y, this.watchHistoy = A, this._playHistoryService = x, this._permission = C, this.isAdult = 2 === L.a.cinema, this.pendingPlayList = null, this.broker = "", this.videoTitle = "", this.mediaid = null, this.filterGold = 10, this.showSmallPlayer = !1, this.timer$ = new ts.b, this.customData = null, this.screenType = p.a, this.screenSize = p.a.Large, this.messageDialogType = ct.b, this.start = 0, this.hasBought = 0, this.isVideoOver = !1, this.subscriptions = [], this.ggPosition = $l.b, this.purchasing = !1, this.currentLanguage = 0, this.serverInfo = {}, this.subscript = null, this.playedKey = "-1", this.viewTime = "", this.cinema = L.a.cinema, this.detailPageRender = !1, this.playRatio = !1, this.shouldClose = !1, this.reload = !1, this._windowService.size$.subscribe(function(t) {
                        w.screenSize = t
                    }), this.subscriptions.push(n.events.subscribe(function(t) {
                        if (t instanceof S.g && w.mediaKey && w.api) try {
                            w.watchHistoy.save(w.api.currentTime, w.api.totalTime, w.mediaKey)
                        } catch (t) {}
                    })), this._purchaseRequiredDialogService.purchaseRequiredDialogSource$.subscribe(function(t) {
                        w.videoInShoppingCart = {
                            price: t.price,
                            mediaId: t.mediaId
                        }
                    }), this.subscript = f.subscribe(function() {
                        return w.readState()
                    }), this.readState()
                }
                return Object.defineProperty(t.prototype, "playNextFunc", {
                    get: function() {
                        return this.nextVideo.bind(this, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "getGID", {
                    get: function() {
                        return null != this.user && null != this.user.token ? this.user.token.gid : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.beforeUnload = function() {
                    this.mediaKey && this.api && this.watchHistoy.save(this.api.currentTime, this.api.totalTime, this.mediaKey)
                }, t.prototype.onWindowScroll = function() {
                    this.showSmallPlayer = window.pageYOffset > 540
                }, t.prototype.ngOnInit = function() {
                    var t = this;
                    this._windowService.size$.subscribe(function(e) {
                        t.screenSize = e
                    }), this.playRatio = this._permission.isValid(el.b.PlayRatio), this._activatedRoute.queryParams.subscribe(function(e) {
                        pt.a.isUrlContains(["play"]) ? t.mediaKey = e.id : pt.a.isUrlContains(["detail"]) && (t.videoKey = e.id, t.detailPageRender = !1, t.mediaKey = null), t.renderVideoPage(), t.renderPlayer()
                    }), this.subscriptions.push(pt.a.GetOrCreateSubscript("changeHistory").subscribe(function(e) {
                        e && (t.playedKey = e.mKey, t.viewTime = pt.a.getTimeSpan(e.current))
                    }))
                }, t.prototype.readState = function() {
                    var t = this,
                        e = this.store.getState().users;
                    (!this.user && e.currentUser || this.user && !e.currentUser) && (null == this.user && e.currentUser.id > 0 && this.mediaKey && this._videoService.IsUserFilter(e.currentUser, this.mediaKey).subscribe(function(n) {
                        0 === e.currentUser.token.gid && (t.hasBought = n.IsFilter ? 1 : 0), t.broker = n.Broker
                    }), this.user = e.currentUser, this.renderVideoPage(), this.user && this.user.token && this.user.token.gid > 0 && this.getPlayList()), this.user = e.currentUser;
                    var n = this.store.getState().comments;
                    this.comments = n.currentComments
                }, t.prototype.renderVideoPage = function(t) {
                    var e = this;
                    void 0 === t && (t = null), this.start = this._activatedRoute.snapshot.queryParams.start, this.videoKey && !this.detailPageRender && this.subscriptions.push(this._videoService.getVideo(this.user, this.videoKey).subscribe(function(t) {
                        e.detailPageRender = !0, e.invokeDataToVideoPage(t), e.user && e.user.id && e.subscriptions.push(e._favoriteService.getFavoriteUpdates(e.user).subscribe(function(t) {
                            e.store.dispatch({
                                type: es.g,
                                notifications: {
                                    favorites: t.total,
                                    messages: e.user.notifications.messages
                                }
                            })
                        }))
                    }))
                }, t.prototype.invokeDataToVideoPage = function(t) {
                    var e = this;
                    this.video = t, this.filterGold = this.video.filtergold, this.updateUserBehaviors(), this.watchHistoy.assingVideo(this.video), this.history = this.watchHistoy.getFromLocal(), this.posterImage = this.video.image, this.videoTitle = this.video.title, this._titleService.setTitle(this.video.title), this.store.dispatch({
                        type: $n.d,
                        video: this.video
                    }), this.store.dispatch({
                        type: $n.c,
                        language: this.video.language
                    }), this._videoService.pageViewRecord(this.video.recApiUrl).subscribe(function(t) {
                        "ok" === t && e._favoriteService.changeFavoriteStatus(!0)
                    }), this.video.languages && 2 === this.video.languages.length && this._videoService.getPlaylistByLanguage(this.user, this.video.languages[1].Link).subscribe(function(t) {
                        e.store.dispatch({
                            type: $n.b,
                            videos: t
                        })
                    })
                }, t.prototype.renderPlayer = function() {
                    var t = this;
                    this.mediaKey && (this.subscriptions.push(this._videoService.getMedia(this.user, this.mediaKey, !!this.videoKey).subscribe(function(e) {
                        var n = null,
                            i = null,
                            l = null;
                        t.videoKey ? (n = [].concat(t.video.playlist.guest.medias).concat(t.video.playlist.vip.medias).concat(t.video.playlist.guest.alter || []).concat(t.video.playlist.vip.alter || []), i = t.video.title, l = t.video.language) : (t.videoKey = e.Key, t.invokeDataToVideoPage(t._videoTransFormer.transformFromVideoService(e)), t.detailPageRender = !0);
                        var s = t._mediaTransFormer.transform(e, n, i, l),
                            a = [],
                            o = [],
                            r = [];
                        if (t.serverInfo = s.serverinfo, t.mediaid = s.id, t.customData = s.custom, s.startlist && !t._permission.isValid(el.b.FilterFrontAds))
                            for (var u = 0; u < s.startlist.length; ++u) {
                                var h = t.converHtml5ToMedia(s.sources[u]);
                                a.push(h)
                            }
                        var d = 3;
                        for (u = 0; u < s.sources.length; ++u) {
                            var c = s.sources[u];
                            if (c.link) c.source && (t._permission.isValid(el.b.FilterFrontAds) || (t.shouldUseFronAds(s.title) ? d > 0 && (--d, a.push(t.converHtml5ToMedia(c))) : o.push(t.converHtml5ToMedia(c))));
                            else {
                                t.broker = s.sources[u].broker;
                                var p = t.converHtml5ToMedia(s.sources[u]);
                                p.title = s.title, a.push(p)
                            }
                        }
                        s.pauselist && !t._permission.isValid(el.b.FilterPauseAds) && (r = s.pauselist.map(function(e) {
                            return t.converHtml5ToMedia2(e)
                        })), t.assingPendding("medias", a), 0 === o.length && (null != t.user && t.user.token.gid <= 0 && (t.hasBought = t._permission.isValid(el.b.FilterFrontAds) ? 2 : 1), o = [{
                            src: "",
                            href: "",
                            isAd: !0
                        }]), t.shouldUseFronAds(s.title) || t.assingPendding("adsList", o), t.assingPendding("pauseList", r), t.playOrWait()
                    })), this.shouldClose = !0)
                }, t.prototype.shouldUseFronAds = function(t) {
                    return 2 == L.a.cinema ? -1 == t.indexOf("\u9884\u89c8") : !!pt.a.isIphoneDevice()
                }, Object.defineProperty(t.prototype, "filterCallbackFunc", {
                    get: function() {
                        return this.filterCallback.bind(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.filterCallback = function(t, e) {
                    this.user ? this._videoService.filterVideo(this.user, this.mediaid).subscribe(function(n) {
                        var i = n[0];
                        i && (i && i.issucess ? t() : e(i))
                    }) : e("\u8bf7\u5148\u767b\u5f55")
                }, t.prototype.converHtml5ToMedia = function(t) {
                    return {
                        title: "",
                        src: t.source,
                        length: 0,
                        type: this.getType(t.hls),
                        href: decodeURIComponent(t.link),
                        isStream: 0 === t.type,
                        isAd: !!t.link,
                        isHls: t.hls,
                        rtmp: t.rtmp,
                        isImage: t.source && (t.source.indexOf(".jpg") > -1 || t.source.indexOf(".png") > -1 || t.source.indexOf(".gif") > -1),
                        backup: t.backup
                    }
                }, t.prototype.converHtml5ToMedia2 = function(t) {
                    return {
                        title: "",
                        src: t.Result,
                        length: 0,
                        type: this.getType(t.IsHls),
                        href: decodeURIComponent(t.Link),
                        isStream: 0 === t.Type,
                        isAd: !!t.Link,
                        isHls: t.IsHls,
                        isImage: t.Result && (t.Result.indexOf(".jpg") > -1 || t.Result.indexOf(".png") > -1 || t.Result.indexOf(".gif") > -1),
                        backup: t.Backup,
                        rtmp: t.Rtmp
                    }
                }, t.prototype.assingPendding = function(t, e) {
                    null == this.pendingPlayList && (this.pendingPlayList = {}), this.pendingPlayList[t] = e
                }, t.prototype.playOrWait = function() {
                    null != this.api && null != this.pendingPlayList && (this.pendingPlayList.adsList && this.api.invokeInterstitial(this.pendingPlayList.adsList), this.pendingPlayList.pauseList && this.api.invokePauseList(this.pendingPlayList.pauseList), this.pendingPlayList.medias && (this.interpreterCustom(), this.api.playVideo(this.pendingPlayList.medias, !1)), this.pendingPlayList = null)
                }, t.prototype.interpreterCustom = function() {
                    var t = {
                        start: this.start,
                        info: "",
                        end: 0,
                        endInfo: ""
                    };
                    this.customData && (!this.start && this.customData.s && (t.start = this.customData.s, t.info = "vipstart"), this.customData.e && (t.end = this.customData.e, t.endInfo = "vipend")), this.api.invokePlaySecond(t)
                }, t.prototype.getType = function(t) {
                    return t ? "application/vnd.apple.mpegurl" : "video/mp4"
                }, t.prototype.updateUserBehaviors = function() {
                    var t = this,
                        e = this._storage.GetItem("voteVideo") ? JSON.parse(this._storage.GetItem("voteVideo")) : void 0;
                    this.video.userBehaviors.like = !!e && e.filter(function(e) {
                        return e.id === t.video.id && "like" === e.behavior
                    }).length > 0, this.video.userBehaviors.dislike = !!e && e.filter(function(e) {
                        return e.id === t.video.id && "dislike" === e.behavior
                    }).length > 0
                }, t.prototype.onPlayerReady = function(t) {
                    var e = this;
                    this.api = t, this.playOrWait();
                    var n = null;
                    this.api.subscript("time", function(t) {
                        if (e.broker && (!n || Math.abs(t.current - n.current) > 1e4)) {
                            n = t;
                            var i = e.broker.replace("__placeholder__", Math.floor(t.current / 1e3) + "_" + Math.floor(t.total / 1e3));
                            e._videoService.sendPlayHistory(i)
                        }
                    }), this.api.subscript("ended", function() {
                        (e.user && e.user.token.gid > 0 || e._permission.isValid(el.b.AutoPlayNext)) && e.nextVideo(e._permission.isValid(el.b.AutoPlayNext), null, function() {})
                    }), this.api.subscript("fullscreen", function(t) {
                        t.isfullscreen || window.scrollTo(0, 0)
                    }), this.api.subscript("playAds", function(t) {
                        t.href && e._videoService.sendWatched(t.href.replace("/c/c", "/c/d").replace("http:", "https:"))
                    })
                }, t.prototype.ngOnDestroy = function() {
                    var e = this;
                    this.subscriptions.forEach(function(t) {
                        return t.unsubscribe()
                    }), this.subscript(), null != this.user && (pt.a.clearTimeout(t.timeout), t.timeout = pt.a.setTimeout(function() {
                        return e._playHistoryService.changePlayHistoryStatus(!0)
                    }, 5e3))
                }, t.prototype.showPlaylist = function() {
                    var t = dl.a.newInstance({
                        document: this.document,
                        pageScrollDuration: 400,
                        pageScrollOffset: 95,
                        scrollTarget: "#playlists"
                    });
                    this.pageScrollService.start(t)
                }, t.prototype.onUserrBehavior = function(t) {
                    "like" === t && (this.video.userBehaviors.like = !0, this.video.userData.like++), "dislike" === t && (this.video.userBehaviors.dislike = !0, this.video.userData.dislike++), "favorite" === t && (this.video.userBehaviors.favorite = !0)
                }, t.prototype.showLoginDialog = function() {
                    this._dnDialogService.open("login")
                }, t.prototype.buyMedia = function() {
                    var t = this;
                    if (this.user.dnCoins < this.videoInShoppingCart.price) this._dnDialogService.open("media-unavailable", {
                        "media-unavailable-price": this.videoInShoppingCart.price
                    });
                    else {
                        var e = this.videoInShoppingCart.mediaId;
                        e && (this.purchasing = !0, this._videoService.purchaseMedia(this.user, e).subscribe(function(n) {
                            if (t.purchasing = !1, n.issucess) {
                                if ("movie" === t.video.category) n.key.split(",").map(function(e, n) {
                                    t.video.playlist.vip.medias[n].bought = !0, t.video.playlist.vip.medias[n].key = e
                                });
                                else {
                                    var i = t.video.playlist.vip.medias.filter(function(t) {
                                        return t.id === Number(e)
                                    });
                                    i.length && (i[0].bought = !0, i[0].key = n.key)
                                }
                                t.store.dispatch({
                                    type: es.f,
                                    values: {
                                        dnCoins: n.json.gold,
                                        level: n.json.currentLevel
                                    }
                                }), t._messageDialogService.setState({
                                    type: ct.b.Emoji3,
                                    message: '<h5 class="mb-4">\u89c6\u9891\u5df2\u89e3\u9501\uff0c\u5e76\u5df2\u6dfb\u52a0\u5230\u6536\u85cf\u5939\u3002</h5><div>' + n.subtitle + "</div>"
                                }), t._purchaseSuccessDialogService.setState({
                                    mediaKey: n.key.split(",")[0],
                                    videoKey: t.video.key
                                }), t._dnDialogService.open("purchase-success", {
                                    success: n.key
                                })
                            } else t._messageDialogService.setState({
                                type: ct.b.Danger,
                                message: n
                            }), t._dnDialogService.open("message-dialog")
                        }))
                    }
                }, t.prototype.responsivePlayerSize = function() {
                    return this.screenSize === p.a.Small ? {
                        width: 761,
                        height: 428
                    } : this.screenSize === p.a.Medium ? {
                        width: 802,
                        height: 451
                    } : this.screenSize === p.a.Large ? {
                        width: 938,
                        height: 528
                    } : {
                        width: 1073,
                        height: 603
                    }
                }, t.prototype.showRechargeBox = function() {
                    this._dnDialogService.close("media-unavailable"), this._dnDialogService.close("purchase-required"), this._dnDialogService.close("vip-only"), this._rechargeBoxService.changeDisplayStatus(!0)
                }, t.prototype.onUpdateTime = function() {}, t.prototype.getPlayList = function() {
                    var t = this;
                    this.videoKey && this.detailPageRender && this.video && this.video.playlist.vip && this.video.playlist.vip.medias && this.video.playlist.vip.medias.length > 0 && (this.reload = !0, this._videoService.getPlaylistByLanguage(this.user, this.videoKey).subscribe(function(e) {
                        var n = [];
                        t.video.playlist.vip.medias.forEach(function(t) {
                            n.push(t.isNew)
                        }), t.video.playlist.vip.medias = e.VipList.map(function(t, e) {
                            return t.isNew = n[e], t
                        }), t.reload = !1
                    }))
                }, t.prototype.switchLanguage = function(t) {
                    var e = this;
                    this.video.languages && 2 === this.video.languages.length && this._videoService.getPlaylistByLanguage(this.user, this.video.languages[1].Link).subscribe(function(t) {
                        null != e.video && (e.video.playlist.guest.alter = t.GuessList, e.video.playlist.vip.alter = t.VipList), e.store.dispatch({
                            type: $n.b,
                            videos: t
                        })
                    })
                }, t.prototype.nextVideo = function(t, e, n) {
                    var i = this;
                    void 0 === t && (t = !1), (null != this.user && this.user.token.gid > 0 || !0 === t) && this._videoService.playNextVideo({
                        ID: this.mediaid
                    }).subscribe(function(t) {
                        if (t && t.length) {
                            if (!t[0]) return i.isVideoOver = !0, void n();
                            i.customData = t[0].custom, i.interpreterCustom(), i._titleService.setTitle(i.videoTitle + "-" + t[0].title);
                            var l = i._router.parseUrl(i._router.url);
                            l.queryParams.start = "", delete l.queryParams.start, i.start = 0, i.mediaKey = l.queryParams.id = decodeURIComponent(t[0].key), i._router.navigateByUrl(l, {
                                replaceUrl: !0
                            }), i.mediaid = t[0].id, e && e()
                        } else n && n()
                    })
                }, t.prototype.handleError = function() {
                    this.renderPlayer()
                }, t.timeout = null, t
            }(),
            ls = i["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".content[_ngcontent-%COMP%]{padding:24px}.player-header[_ngcontent-%COMP%]{padding:11px 10px;background-color:#000;color:#fff}.player-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.player-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ddd}.player-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.video-meta[_ngcontent-%COMP%]{height:633px;padding:35px 40px;background-color:#ededed;position:relative;color:#434343}.video-meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:16px;line-height:29px}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(255,255,255,.8);z-index:999}.media-btn[_ngcontent-%COMP%]{font-family:Microsoft YaHei}.list-title[_ngcontent-%COMP%]{width:80px}.page-container[_ngcontent-%COMP%]{width:1068px;min-width:1068px;margin:0 auto;padding:22px 49px}.v-page-content[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{padding-top:0!important}.video-player[_ngcontent-%COMP%]{padding:0!important}.screen-small[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.screen-small[_ngcontent-%COMP%]   .video-meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:15px;line-height:24px}.screen-small.container[_ngcontent-%COMP%]{width:1290px;min-width:1290px;max-width:1290px}.screen-small[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{width:960px;min-width:960px;margin:0 auto;padding:0 16px 16px 0}.screen-small[_ngcontent-%COMP%]   .page-container.video-meta[_ngcontent-%COMP%]{padding:20px;width:689px;min-width:689px;height:460px}.screen-small[_ngcontent-%COMP%]   .page-container.video-player[_ngcontent-%COMP%]{width:689px;min-width:689px;height:460px;background-color:#000}.screen-medium[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.screen-medium[_ngcontent-%COMP%]   .video-meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:15px;line-height:24px}.screen-medium.container[_ngcontent-%COMP%]{width:1360px;min-width:1360px;max-width:1360px}.screen-medium[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{width:706px;min-width:706px;margin:0 auto;padding:0 20px}.screen-medium[_ngcontent-%COMP%]   .page-container.video-meta[_ngcontent-%COMP%]{padding:20px;width:706px;min-width:706px;height:500px}.screen-medium[_ngcontent-%COMP%]   .page-container.video-player[_ngcontent-%COMP%]{width:706px;min-width:706px;height:500px;background-color:#000}.screen-large.container[_ngcontent-%COMP%]{width:1528px;min-width:1528px;max-width:1528px}.screen-large[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{width:947px;min-width:947px;margin:0 auto;padding:22px}.screen-large[_ngcontent-%COMP%]   .page-container.video-meta[_ngcontent-%COMP%]{height:500px}.screen-large[_ngcontent-%COMP%]   .page-container.video-player[_ngcontent-%COMP%]{width:947px;min-width:947px;height:500px;background-color:#000}.screen-large[_ngcontent-%COMP%]   .video-meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:15px;line-height:24px}.star[_ngcontent-%COMP%]{cursor:pointer}.fixed-player[_ngcontent-%COMP%]{position:fixed;right:30px;top:80px;width:480px;height:320px;z-index:9999}.border-warp[_ngcontent-%COMP%]{margin:0 auto;width:1903px;background-color:#fff}.screen-small.border-warp[_ngcontent-%COMP%]{width:1349px}.screen-medium.border-warp[_ngcontent-%COMP%]{width:1423px}.screen-large.border-warp[_ngcontent-%COMP%]{width:1663px}"]
                ],
                data: {}
            });

        function ss(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-gg-block", [], null, null, null, h.b, h.a)), i["\u0275did"](1, 245760, null, 0, d.a, [c.a, p.b], {
                posterImage: [0, "posterImage"],
                ggPosition: [1, "ggPosition"]
            }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.posterImage + "?w=420&format=jpg", n.ggPosition.VideoPageLeft)
            }, null)
        }

        function as(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-play-statistics", [], null, null, null, I, N)), i["\u0275did"](1, 4308992, null, 0, P, [f.b, M, S.a, p.b], {
                videoKey: [0, "videoKey"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.videoKey)
            }, null)
        }

        function os(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-gg-block", [], null, null, null, h.b, h.a)), i["\u0275did"](1, 245760, null, 0, d.a, [c.a, p.b], {
                ggPosition: [0, "ggPosition"],
                code: [1, "code"]
            }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.ggPosition.VideoPageRight, n.isAdult ? "ADR" : "DR")
            }, null)
        }

        function rs(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-gg-block", [], null, null, null, h.b, h.a)), i["\u0275did"](1, 245760, null, 0, d.a, [c.a, p.b], {
                ggPosition: [0, "ggPosition"],
                code: [1, "code"]
            }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.ggPosition.VideoPageRight, n.isAdult ? "APR1" : "PR1")
            }, null)
        }

        function us(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 35, "div", [
                ["class", "container v-page v-page-top d-flex"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                "screen-xxsmall": 0,
                "screen-xsmall": 1,
                "screen-small": 2,
                "screen-medium": 3,
                "screen-large": 4
            }), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](4, 0, null, null, 4, "div", [
                ["class", "player-side player-left"],
                ["style", "flex:1"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ss)), i["\u0275did"](7, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](10, 0, null, null, 15, "div", [
                ["class", "page-container video-meta"]
            ], [
                [4, "width", "px"],
                [4, "height", "px"]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](12, 0, null, null, 7, "div", [
                ["class", "d-flex"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](14, 0, null, null, 1, "app-video-info", [], null, null, null, st, E)), i["\u0275did"](15, 114688, null, 0, B, [R.a], {
                video: [0, "video"],
                screenSize: [1, "screenSize"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, as)), i["\u0275did"](18, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](21, 0, null, null, 2, "app-play-history", [], null, [
                [null, "showPlaylistEvent"]
            ], function(t, e, n) {
                var i = !0;
                return "showPlaylistEvent" === e && (i = !1 !== t.component.showPlaylist() && i), i
            }, Ct, ft)), i["\u0275did"](22, 638976, null, 0, gt, [M, p.b, dt.a, ct.a], {
                router: [0, "router"],
                video: [1, "video"],
                videoKey: [2, "videoKey"],
                user: [3, "user"]
            }, {
                showPlaylistEvent: "showPlaylistEvent"
            }), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n\n        "])), (t()(), i["\u0275eld"](27, 0, null, null, 7, "div", [
                ["class", "player-side player-right"],
                ["style", "flex:1"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, os)), i["\u0275did"](30, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, rs)), i["\u0275did"](33, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "container v-page v-page-top d-flex", t(e, 2, 0, n.screenSize === n.screenType.XXSmall, n.screenSize === n.screenType.XSmall, n.screenSize === n.screenType.Small, n.screenSize === n.screenType.Medium, n.screenSize === n.screenType.Large)), t(e, 7, 0, !!n.posterImage), t(e, 15, 0, n.video, n.screenSize), t(e, 18, 0, n.screenSize > n.screenType.Medium), t(e, 22, 0, n._router, n.video, n.videoKey, n.user), t(e, 30, 0, !n.mediaKey), t(e, 33, 0, n.mediaKey)
            }, function(t, e) {
                var n = e.component;
                t(e, 10, 0, n.responsivePlayerSize().width, n.responsivePlayerSize().height)
            })
        }

        function hs(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 25, "div", [
                ["class", "container v-page v-page-content d-flex"]
            ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](2, {
                "screen-xxsmall": 0,
                "screen-xsmall": 1,
                "screen-small": 2,
                "screen-medium": 3,
                "screen-large": 4
            }), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](4, 0, null, null, 20, "div", [
                ["class", "d-flex w-100"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](6, 0, null, null, 4, "div", [
                ["class", "player-side player-left"],
                ["style", "flex:1"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](8, 0, null, null, 1, "app-gg-block", [], null, null, null, h.b, h.a)), i["\u0275did"](9, 245760, null, 0, d.a, [c.a, p.b], {
                ggPosition: [0, "ggPosition"],
                code: [1, "code"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](12, 0, null, null, 5, "div", [
                ["class", "page-container video-player"]
            ], [
                [4, "width", "px"],
                [4, "height", "px"]
            ], null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](14, 0, null, null, 2, "dn-videoplayer", [
                ["topPrefix", "0"]
            ], null, [
                [null, "onVideoReady"],
                [null, "onErrorHandler"],
                ["window", "resize"]
            ], function(t, e, n) {
                var l = !0,
                    s = t.component;
                return "window:resize" === e && (l = !1 !== i["\u0275nov"](t, 16).onWindowResize() && l), "onVideoReady" === e && (l = !1 !== s.onPlayerReady(n) && l), "onErrorHandler" === e && (l = !1 !== s.handleError() && l), l
            }, Sn, an)), i["\u0275prd"](512, null, Ze, Ze, [qe.a]), i["\u0275did"](16, 245760, null, 0, ln, [Ze], {
                shouldSkipAds: [0, "shouldSkipAds"],
                topPrefix: [1, "topPrefix"],
                customHeight: [2, "customHeight"],
                filterGold: [3, "filterGold"],
                filterCallback: [4, "filterCallback"],
                playNextCallback: [5, "playNextCallback"],
                isPlayRatio: [6, "isPlayRatio"],
                hasBought: [7, "hasBought"],
                serverInfo: [8, "serverInfo"],
                needBought: [9, "needBought"],
                logo: [10, "logo"]
            }, {
                onVideoReady: "onVideoReady",
                onErrorHandler: "onErrorHandler"
            }), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](19, 0, null, null, 4, "div", [
                ["class", "player-side player-right"],
                ["style", "flex:1"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](21, 0, null, null, 1, "app-gg-block", [], null, null, null, h.b, h.a)), i["\u0275did"](22, 245760, null, 0, d.a, [c.a, p.b], {
                ggPosition: [0, "ggPosition"],
                code: [1, "code"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "container v-page v-page-content d-flex", t(e, 2, 0, n.screenSize === n.screenType.XXSmall, n.screenSize === n.screenType.XSmall, n.screenSize === n.screenType.Small, n.screenSize === n.screenType.Medium, n.screenSize === n.screenType.Large)), t(e, 9, 0, n.ggPosition.VideoPageLeft, n.isAdult ? "APR1" : "PR1"), t(e, 16, 1, [n.getGID > 0, "0", n.responsivePlayerSize().height, n.filterGold, n.filterCallbackFunc, n.playNextFunc, n.playRatio, n.hasBought, n.serverInfo, n.getGID <= 0, "auto"]), t(e, 22, 0, n.ggPosition.VideoPageRight, n.isAdult ? "APR2" : "PR2")
            }, function(t, e) {
                var n = e.component;
                t(e, 12, 0, n.responsivePlayerSize().width, n.responsivePlayerSize().height)
            })
        }

        function ds(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-sidebar-recent-updates", [
                ["class", "d-block mb-5"]
            ], null, null, null, zn, Rn)), i["\u0275did"](1, 770048, null, 0, Dn, [On.a, R.a], {
                cid: [0, "cid"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.video.cid)
            }, null)
        }

        function cs(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-sidebar-recent-updates", [
                ["class", "d-block mb-5"]
            ], null, null, null, zn, Rn)), i["\u0275did"](1, 770048, null, 0, Dn, [On.a, R.a], {
                cid: [0, "cid"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.video.cid)
            }, null)
        }

        function ps(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-sidebar-topvideos", [
                ["class", "d-block"]
            ], null, null, null, Xn, Yn)), i["\u0275did"](1, 245760, null, 0, Gn, [R.a, Hn.a, Wn.a], null, null)], function(t, e) {
                t(e, 1, 0)
            }, null)
        }

        function gs(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 10, "div", [
                ["class", "page-left"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ds)), i["\u0275did"](3, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, cs)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ps)), i["\u0275did"](9, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, !n.isAdult && n.video && "movie" !== n.video.category && "tv-series" !== n.video.category), t(e, 6, 0, !n.isAdult && n.video && "tv-series" === n.video.category), t(e, 9, 0, n.video)
            }, null)
        }

        function fs(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-gg-block", [
                ["class", "d-block mb-5"]
            ], null, null, null, h.b, h.a)), i["\u0275did"](1, 245760, null, 0, d.a, [c.a, p.b], {
                ggPosition: [0, "ggPosition"],
                code: [1, "code"]
            }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.ggPosition.VideoPageContent, n.isAdult ? "ADB" : "DB")
            }, null)
        }

        function ms(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-gg-block", [
                ["class", "d-block mb-5"]
            ], null, null, null, h.b, h.a)), i["\u0275did"](1, 245760, null, 0, d.a, [c.a, p.b], {
                ggPosition: [0, "ggPosition"],
                code: [1, "code"]
            }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.ggPosition.VideoPageContent, n.isAdult ? "APB" : "PB")
            }, null)
        }

        function vs(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "app-summary", [], null, null, null, Jn, Un)), i["\u0275did"](3, 4833280, null, 0, jn, [], {
                summary: [0, "summary"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                "]))], function(t, e) {
                t(e, 3, 0, e.component.video.summary)
            }, null)
        }

        function bs(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "mb-5 mt-4"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "h4", [
                ["style", "margin-bottom: 20px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5267\u60c5\u7b80\u4ecb"])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, vs)), i["\u0275did"](6, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], function(t, e) {
                t(e, 6, 0, e.component.video)
            }, null)
        }

        function ys(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "app-language-switch", [], null, [
                [null, "switchLanguageEvent"]
            ], function(t, e, n) {
                var i = !0;
                return "switchLanguageEvent" === e && (i = !1 !== t.component.switchLanguage(n) && i), i
            }, ni, ei)), i["\u0275did"](3, 114688, null, 0, ti, [Wn.a], {
                languages: [0, "languages"],
                currentTab: [1, "currentTab"]
            }, {
                switchLanguageEvent: "switchLanguageEvent"
            }), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, n.video.languages, n.currentLanguage)
            }, null)
        }

        function As(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-video-resolution-symbol", [], null, null, null, ai, si)), i["\u0275did"](1, 114688, null, 0, li, [ii.a], {
                resolution: [0, "resolution"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.video.playlist.guest.resolution)
            }, null)
        }

        function xs(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 29, "div", [
                ["class", "mb-5"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](2, 0, null, null, 22, "div", [
                ["class", "d-flex align-items-center mb-4"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](4, 0, null, null, 16, "div", [
                ["class", "mr-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                            "])), (t()(), i["\u0275eld"](6, 0, null, null, 13, "h4", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                                "])), (t()(), i["\u0275eld"](8, 0, null, null, 7, "span", [
                ["class", "d-inline-block list-title"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                                    "])), (t()(), i["\u0275eld"](10, 0, null, null, 1, "span", [
                ["class", "text-blue"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6e38\u5ba2"])), (t()(), i["\u0275ted"](-1, null, ["/"])), (t()(), i["\u0275eld"](13, 0, null, null, 1, "span", [
                ["class", "text-green"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u4f1a\u5458"])), (t()(), i["\u0275ted"](-1, null, ["\n                                "])), (t()(), i["\u0275ted"](-1, null, ["\n                                "])), (t()(), i["\u0275eld"](17, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u64ad\u653e\u5217\u8868"])), (t()(), i["\u0275ted"](-1, null, ["\n                            "])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, As)), i["\u0275did"](23, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](26, 0, null, null, 2, "app-media-list", [], null, null, null, Si, Ai)), i["\u0275did"](27, 114688, null, 0, yi, [Wn.a], {
                lists: [0, "lists"],
                videoId: [1, "videoId"],
                type: [2, "type"],
                playedKey: [3, "playedKey"],
                viewTime: [4, "viewTime"],
                mediaKey: [5, "mediaKey"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n\n                 \n                "]))], function(t, e) {
                var n = e.component;
                t(e, 23, 0, n.video.playlist.guest.resolution), t(e, 27, 0, null == n.video ? null : n.video.playlist.guest, null == n.video ? null : n.video.key, "guest", n.shouldClose ? "-1" : n.playedKey, n.viewTime, n.mediaKey)
            }, null)
        }

        function Cs(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-video-resolution-symbol", [], null, null, null, ai, si)), i["\u0275did"](1, 114688, null, 0, li, [ii.a], {
                resolution: [0, "resolution"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.video.playlist.vip.resolution)
            }, null)
        }

        function ws(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-media-list", [], null, [
                [null, "selectMediaEvent"]
            ], function(t, e, n) {
                var i = !0;
                return "selectMediaEvent" === e && (i = !1 !== t.component.onSelectMediaEvent(n) && i), i
            }, Si, Ai)), i["\u0275did"](1, 114688, null, 0, yi, [Wn.a], {
                lists: [0, "lists"],
                videoId: [1, "videoId"],
                type: [2, "type"],
                playedKey: [3, "playedKey"],
                viewTime: [4, "viewTime"],
                mediaKey: [5, "mediaKey"]
            }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, null == n.video ? null : n.video.playlist.vip, null == n.video ? null : n.video.key, "vip", n.shouldClose ? "-1" : n.playedKey, n.viewTime, n.mediaKey)
            }, null)
        }

        function ks(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 29, "div", [
                ["class", "mb-5"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](2, 0, null, null, 23, "div", [
                ["class", "d-flex align-items-center mb-4"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](4, 0, null, null, 17, "div", [
                ["class", "mr-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](6, 0, null, null, 14, "h4", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                            "])), (t()(), i["\u0275eld"](8, 0, null, null, 8, "span", [
                ["class", "d-inline-block list-title"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                                "])), (t()(), i["\u0275eld"](10, 0, null, null, 2, "span", [
                ["class", "text-gold"]
            ], null, null, null, null, null)), (t()(), i["\u0275eld"](11, 0, null, null, 1, "b", [
                ["style", "letter-spacing: 3px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["VIP"])), (t()(), i["\u0275ted"](-1, null, ["\n                                "])), (t()(), i["\u0275eld"](14, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u4f1a\u5458"])), (t()(), i["\u0275ted"](-1, null, ["\n                            "])), (t()(), i["\u0275ted"](-1, null, ["\n                            "])), (t()(), i["\u0275eld"](18, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u64ad\u653e\u5217\u8868"])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Cs)), i["\u0275did"](24, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ws)), i["\u0275did"](28, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], function(t, e) {
                var n = e.component;
                t(e, 24, 0, n.video.playlist.vip.resolution), t(e, 28, 0, !n.reload)
            }, null)
        }

        function Ms(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "d-flex align-items-center justify-content-start ml-1"],
                ["style", "min-height: 30px"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](2, 0, null, null, 1, "h5", [
                ["class", "text-light"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6682\u65e0\u5185\u5bb9"])), (t()(), i["\u0275ted"](-1, null, ["\n                "]))], null, null)
        }

        function Ss(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-media-list", [], null, [
                [null, "selectMediaEvent"]
            ], function(t, e, n) {
                var i = !0;
                return "selectMediaEvent" === e && (i = !1 !== t.component.onSelectMediaEvent(n) && i), i
            }, Si, Ai)), i["\u0275did"](1, 114688, null, 0, yi, [Wn.a], {
                lists: [0, "lists"],
                videoId: [1, "videoId"],
                type: [2, "type"]
            }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, null == n.video ? null : n.video.playlist.downloads, null == n.video ? null : n.video.key, "download")
            }, null)
        }

        function Ps(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 19, "div", [
                ["class", "mb-5"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](2, 0, null, null, 10, "div", [
                ["class", "d-flex align-items-center mb-4"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](4, 0, null, null, 7, "div", [
                ["class", "mr-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275eld"](6, 0, null, null, 4, "h4", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                            "])), (t()(), i["\u0275eld"](8, 0, null, null, 1, "span", [
                ["class", "d-inline-block list-title"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u4e0b\u8f7d\u5217\u8868"])), (t()(), i["\u0275ted"](-1, null, ["\n                        "])), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Ms)), i["\u0275did"](15, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Ss)), i["\u0275did"](18, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], function(t, e) {
                var n = e.component;
                t(e, 15, 0, !n.video.playlist.downloads.medias.length), t(e, 18, 0, n.video.playlist.downloads.medias.length)
            }, null)
        }

        function Ns(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-dn-comments", [], null, null, null, Qi, Hi)), i["\u0275did"](1, 770048, null, 0, zi, [S.o, S.a, Ei.a, Fi.a, Wn.a], {
                videoId: [0, "videoId"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.video.id)
            }, null)
        }

        function Is(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, [
                ["comments", 1]
            ], null, 13, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](2, 0, null, null, 4, "div", [
                ["class", "mb-4"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                    "])), (t()(), i["\u0275eld"](4, 0, null, null, 1, "h4", [
                ["id", "comments-title"],
                ["style", "line-height: 36px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u8ba8\u8bba\u533a"])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275eld"](8, 0, null, null, 1, "app-comment-box", [
                ["class", "d-block mb-5"]
            ], null, null, null, Ki.b, Ki.a)), i["\u0275did"](9, 4440064, null, 0, Zi.a, [qi.a, Ji.a, dt.a, Ii.a, Ei.a, Ti.a, ct.a, Di.b, S.o, S.a, i.ChangeDetectorRef, w.a, $i.a, tl.a, Oi.a, el.a, Wn.a, g.DOCUMENT], {
                videoId: [0, "videoId"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Ns)), i["\u0275did"](12, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "]))], function(t, e) {
                var n = e.component;
                t(e, 9, 0, n.video.id), t(e, 12, 0, n.video)
            }, null)
        }

        function Ts(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-sidebar-recent-updates", [
                ["class", "d-block mb-5"]
            ], null, null, null, zn, Rn)), i["\u0275did"](1, 770048, null, 0, Dn, [On.a, R.a], {
                cid: [0, "cid"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.video.cid)
            }, null)
        }

        function Os(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-sidebar-recent-updates", [
                ["class", "d-block mb-5"]
            ], null, null, null, zn, Rn)), i["\u0275did"](1, 770048, null, 0, Dn, [On.a, R.a], {
                cid: [0, "cid"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.video.cid)
            }, null)
        }

        function Ds(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-sidebar-topvideos", [
                ["class", "d-block mb-5"]
            ], null, null, null, Xn, Yn)), i["\u0275did"](1, 245760, null, 0, Gn, [R.a, Hn.a, Wn.a], {
                genre: [0, "genre"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.video.category)
            }, null)
        }

        function Rs(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 10, "div", [
                ["class", "loading-overlay d-flex align-items-center justify-content-center"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](2, 0, null, null, 7, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](4, 0, null, null, 1, "app-loader-spinner", [], null, null, null, Ri.b, Ri.a)), i["\u0275did"](5, 114688, null, 0, Li.a, [], null, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6b63\u5728\u63d0\u4ea4..."])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "]))], function(t, e) {
                t(e, 5, 0)
            }, null)
        }

        function Ls(t) {
            return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 1, "app-share", [], null, null, null, ol, ll)), i["\u0275did"](1, 114688, null, 0, nl, [S.o, il.DOCUMENT, Wn.a], {
                url: [0, "url"],
                title: [1, "title"],
                id: [2, "id"],
                image: [3, "image"]
            }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n._router.url, n.video.title, n.videoKey, n.posterImage)
            }, null)
        }

        function Bs(t) {
            return i["\u0275vid"](0, [i["\u0275qud"](402653184, 1, {
                canvas: 0
            }), i["\u0275qud"](402653184, 2, {
                mediaIdDiv: 0
            }), (t()(), i["\u0275eld"](2, 0, null, null, 65, "div", [
                ["class", "border-warp"],
                ["style", "padding-bottom: 30px;"]
            ], null, null, null, null, null)), i["\u0275did"](3, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](4, {
                "screen-xxsmall": 0,
                "screen-xsmall": 1,
                "screen-small": 2,
                "screen-medium": 3,
                "screen-large": 4
            }), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, us)), i["\u0275did"](7, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, hs)), i["\u0275did"](10, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n    "])), (t()(), i["\u0275eld"](12, 0, null, null, 54, "div", [
                ["class", "container v-page v-page-content boxed d-flex"],
                ["style", "padding-top: 30px;"]
            ], null, null, null, null, null)), i["\u0275did"](13, 278528, null, 0, g.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["\u0275pod"](14, {
                "screen-xxsmall": 0,
                "screen-xsmall": 1,
                "screen-small": 2,
                "screen-medium": 3,
                "screen-large": 4
            }), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, gs)), i["\u0275did"](17, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](19, 0, null, null, 31, "div", [
                ["class", "page-container"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](21, 0, null, null, 1, "app-video-user-data-bar", [], null, [
                [null, "userBehaviorEvent"],
                [null, "showCommentsEvent"]
            ], function(t, e, n) {
                var i = !0,
                    l = t.component;
                return "userBehaviorEvent" === e && (i = !1 !== l.onUserrBehavior(n) && i), "showCommentsEvent" === e && (i = !1 !== l.showPlaylist() && i), i
            }, Cl, gl)), i["\u0275did"](22, 245760, null, 0, pl, [M, dt.a, ct.a, cl.a, Di.b, w.a, p.b, g.DOCUMENT, Wn.a], {
                video: [0, "video"]
            }, {
                userBehaviorEvent: "userBehaviorEvent"
            }), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, fs)), i["\u0275did"](25, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ms)), i["\u0275did"](28, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, bs)), i["\u0275did"](31, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ys)), i["\u0275did"](34, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](36, 0, [
                ["playLists", 1]
            ], null, 4, "div", [
                ["id", "playlists"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n                "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, xs)), i["\u0275did"](39, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, ks)), i["\u0275did"](43, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n\n         \n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Ps)), i["\u0275did"](46, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Is)), i["\u0275did"](49, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](52, 0, null, null, 13, "div", [
                ["class", "page-right"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Ts)), i["\u0275did"](55, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Os)), i["\u0275did"](58, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Ds)), i["\u0275did"](61, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n            "])), (t()(), i["\u0275eld"](63, 0, null, null, 1, "app-sidebar-related-videos", [
                ["class", "d-block mb-4"]
            ], null, null, null, Nl, Sl)), i["\u0275did"](64, 245760, null, 0, Ml, [On.a, R.a, Wn.a], null, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, null, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275eld"](69, 0, [
                ["toastContainer", 1]
            ], null, 0, "div", [], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275eld"](71, 0, null, null, 1, "app-footer", [], null, null, null, Il.b, Il.a)), i["\u0275did"](72, 114688, null, 0, Tl.a, [p.b], null, null), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275eld"](74, 0, null, null, 32, "dn-dialog", [
                ["class", "dn-dialog-background"],
                ["id", "purchase-required"]
            ], null, null, null, Ol.b, Ol.a)), i["\u0275did"](75, 245760, null, 0, Dl.a, [dt.a, i.ElementRef], {
                id: [0, "id"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275and"](16777216, null, 0, 1, null, Rs)), i["\u0275did"](78, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](80, 0, null, 0, 1, "app-alert-icon", [], null, null, null, Rl.b, Rl.a)), i["\u0275did"](81, 114688, null, 0, Ll.a, [], {
                alertType: [0, "alertType"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](83, 0, null, 0, 7, "div", [
                ["class", "text-center"],
                ["style", "padding-top: 30px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](85, 0, null, null, 1, "app-purchase-required", [], null, null, null, Fl, El)), i["\u0275did"](86, 114688, null, 0, Bl, [ri.a], null, null), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](88, 0, null, null, 1, "a", [
                ["class", "link-blue"],
                ["href", "/help-center?cid=7&item=61"],
                ["target", "_blank\n           "]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5982\u4f55\u83b7\u53d6\u91d1\u5e01\uff1f"])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, 0, ["\n\n    "])), (t()(), i["\u0275eld"](92, 0, null, 0, 10, "div", [
                ["class", "dn-dialog-buttons"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](94, 0, null, null, 1, "div", [
                ["class", "dn-button dn-button-red"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.buyMedia() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u4f7f\u7528\u91d1\u5e01"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](97, 0, null, null, 1, "div", [
                ["class", "dn-button dn-button-gold"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.showRechargeBox() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5347\u7ea7VIP"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](100, 0, null, null, 1, "app-dn-dialog-button", [], null, null, null, Vl.b, Vl.a)), i["\u0275did"](101, 114688, null, 0, zl.a, [dt.a], {
                dialog: [0, "dialog"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](104, 0, null, 0, 1, "app-dn-dialog-close-button", [], null, null, null, Hl.b, Hl.a)), i["\u0275did"](105, 114688, null, 0, Gl.a, [dt.a], {
                dialog: [0, "dialog"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n\n\n"])), (t()(), i["\u0275eld"](108, 0, null, null, 15, "dn-dialog", [
                ["class", "dn-dialog-background"],
                ["id", "purchase-success"]
            ], null, null, null, Ol.b, Ol.a)), i["\u0275did"](109, 245760, null, 0, Dl.a, [dt.a, i.ElementRef], {
                id: [0, "id"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](111, 0, null, 0, 1, "app-message-dialog", [], null, null, null, Wl.b, Wl.a)), i["\u0275did"](112, 114688, null, 0, Yl.a, [ct.a], null, null), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](115, 0, null, 0, 4, "div", [
                ["class", "dn-dialog-buttons"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](117, 0, null, null, 1, "app-purchase-success", [], null, null, null, Ul, jl)), i["\u0275did"](118, 114688, null, 0, Xl, [S.o, _l.a, dt.a], null, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](121, 0, null, 0, 1, "app-dn-dialog-close-button", [], null, null, null, Hl.b, Hl.a)), i["\u0275did"](122, 114688, null, 0, Gl.a, [dt.a], {
                dialog: [0, "dialog"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275eld"](125, 0, null, null, 26, "dn-dialog", [
                ["class", "dn-dialog-background"],
                ["id", "media-unavailable"]
            ], null, null, null, Ol.b, Ol.a)), i["\u0275did"](126, 245760, null, 0, Dl.a, [dt.a, i.ElementRef], {
                id: [0, "id"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](128, 0, null, 0, 1, "app-alert-icon", [], null, null, null, Rl.b, Rl.a)), i["\u0275did"](129, 114688, null, 0, Ll.a, [], {
                alertType: [0, "alertType"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](131, 0, null, 0, 7, "div", [
                ["class", "text-center"],
                ["style", "padding-top: 30px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](133, 0, null, null, 1, "h5", [
                ["class", "mb-2\n           "]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u91d1\u5e01\u4e0d\u8db3\uff01\u8bf7\u5148\u83b7\u53d6\u91d1\u5e01\uff0c\u6216\u8005\u5347\u7ea7\u4e3aVIP\u4f1a\u5458"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](136, 0, null, null, 1, "a", [
                ["class", "link-blue"],
                ["href", "/help-center?cid=7&item=61"],
                ["target", "_blank\n           "]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5982\u4f55\u83b7\u53d6\u91d1\u5e01\uff1f"])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](140, 0, null, 0, 7, "div", [
                ["class", "dn-dialog-buttons"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](142, 0, null, null, 1, "div", [
                ["class", "dn-button dn-button-gold"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.showRechargeBox() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5347\u7ea7VIP"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](145, 0, null, null, 1, "app-dn-dialog-button", [], null, null, null, Vl.b, Vl.a)), i["\u0275did"](146, 114688, null, 0, zl.a, [dt.a], {
                dialog: [0, "dialog"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](149, 0, null, 0, 1, "app-dn-dialog-close-button", [], null, null, null, Hl.b, Hl.a)), i["\u0275did"](150, 114688, null, 0, Gl.a, [dt.a], {
                dialog: [0, "dialog"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275eld"](153, 0, null, null, 23, "dn-dialog", [
                ["class", "dn-dialog-background"],
                ["id", "vip-only"]
            ], null, null, null, Ol.b, Ol.a)), i["\u0275did"](154, 245760, null, 0, Dl.a, [dt.a, i.ElementRef], {
                id: [0, "id"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](156, 0, null, 0, 1, "app-alert-icon", [], null, null, null, Rl.b, Rl.a)), i["\u0275did"](157, 114688, null, 0, Ll.a, [], {
                alertType: [0, "alertType"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](159, 0, null, 0, 4, "div", [
                ["class", "text-center"],
                ["style", "padding-top:30px;"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](161, 0, null, null, 1, "h5", [
                ["class", "mb-2"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u6b64\u529f\u80fd\u4ec5\u9650 VIP \u7528\u6237\u4f7f\u7528"])), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](165, 0, null, 0, 7, "div", [
                ["class", "dn-dialog-buttons"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](167, 0, null, null, 1, "div", [
                ["class", "dn-button dn-button-gold"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0;
                return "click" === e && (i = !1 !== t.component.showRechargeBox() && i), i
            }, null, null)), (t()(), i["\u0275ted"](-1, null, ["\u5347\u7ea7VIP"])), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275eld"](170, 0, null, null, 1, "app-dn-dialog-button", [], null, null, null, Vl.b, Vl.a)), i["\u0275did"](171, 114688, null, 0, zl.a, [dt.a], {
                dialog: [0, "dialog"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](174, 0, null, 0, 1, "app-dn-dialog-close-button", [], null, null, null, Hl.b, Hl.a)), i["\u0275did"](175, 114688, null, 0, Gl.a, [dt.a], {
                dialog: [0, "dialog"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n\n"])), (t()(), i["\u0275eld"](178, 0, null, null, 11, "dn-dialog", [
                ["class", "dn-dialog-background"],
                ["id", "share"]
            ], null, null, null, Ol.b, Ol.a)), i["\u0275did"](179, 245760, null, 0, Dl.a, [dt.a, i.ElementRef], {
                id: [0, "id"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](181, 0, null, 0, 4, "div", [
                ["class", "text-center"]
            ], null, null, null, null, null)), (t()(), i["\u0275ted"](-1, null, ["\n        "])), (t()(), i["\u0275and"](16777216, null, null, 1, null, Ls)), i["\u0275did"](184, 16384, null, 0, g.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), i["\u0275ted"](-1, null, ["\n    "])), (t()(), i["\u0275ted"](-1, 0, ["\n    "])), (t()(), i["\u0275eld"](187, 0, null, 0, 1, "app-dn-dialog-close-button", [], null, null, null, Hl.b, Hl.a)), i["\u0275did"](188, 114688, null, 0, Gl.a, [dt.a], {
                dialog: [0, "dialog"]
            }, null), (t()(), i["\u0275ted"](-1, 0, ["\n"])), (t()(), i["\u0275ted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, "border-warp", t(e, 4, 0, n.screenSize === n.screenType.XXSmall, n.screenSize === n.screenType.XSmall, n.screenSize === n.screenType.Small, n.screenSize === n.screenType.Medium, n.screenSize === n.screenType.Large)), t(e, 7, 0, !n.mediaKey), t(e, 10, 0, n.mediaKey), t(e, 13, 0, "container v-page v-page-content boxed d-flex", t(e, 14, 0, n.screenSize === n.screenType.XXSmall, n.screenSize === n.screenType.XSmall, n.screenSize === n.screenType.Small, n.screenSize === n.screenType.Medium, n.screenSize === n.screenType.Large)), t(e, 17, 0, n.screenSize !== n.screenType.Small), t(e, 22, 0, n.video), t(e, 25, 0, !n.mediaKey), t(e, 28, 0, n.mediaKey), t(e, 31, 0, n.video && n.video.summary), t(e, 34, 0, n.video && (null == n.video.languages ? null : n.video.languages.length)), t(e, 39, 0, n.video && n.video.playlist.guest), t(e, 43, 0, n.video && (null == n.video.playlist.vip ? null : n.video.playlist.vip.medias.length)), t(e, 46, 0, n.video && ("movie" === n.video.category || 2 == n.cinema)), t(e, 49, 0, n.video), t(e, 55, 0, !n.isAdult && n.screenSize < n.screenType.Medium && n.video && "movie" !== n.video.category && "tv-series" !== n.video.category), t(e, 58, 0, !n.isAdult && n.screenSize < n.screenType.Medium && n.video && "tv-series" === n.video.category), t(e, 61, 0, n.video && n.screenSize === n.screenType.Small), t(e, 64, 0), t(e, 72, 0), t(e, 75, 0, "purchase-required"), t(e, 78, 0, n.purchasing), t(e, 81, 0, 4), t(e, 86, 0), t(e, 101, 0, "purchase-required"), t(e, 105, 0, "purchase-required"), t(e, 109, 0, "purchase-success"), t(e, 112, 0), t(e, 118, 0), t(e, 122, 0, "purchase-success"), t(e, 126, 0, "media-unavailable"), t(e, 129, 0, 5), t(e, 146, 0, "media-unavailable"), t(e, 150, 0, "media-unavailable"), t(e, 154, 0, "vip-only"), t(e, 157, 0, 4), t(e, 171, 0, "vip-only"), t(e, 175, 0, "vip-only"), t(e, 179, 0, "share"), t(e, 184, 0, n.video), t(e, 188, 0, "share")
            }, null)
        }
        var Es = i["\u0275ccf"]("app-index", is, function(t) {
                return i["\u0275vid"](0, [(t()(), i["\u0275eld"](0, 0, null, null, 4, "app-index", [], null, [
                    ["window", "beforeunload"]
                ], function(t, e, n) {
                    var l = !0;
                    return "window:beforeunload" === e && (l = !1 !== i["\u0275nov"](t, 4).beforeUnload() && l), l
                }, Bs, ls)), i["\u0275prd"](512, null, M, M, [b.a, y.a, A.a, x.a, C.a, w.a, k.a]), i["\u0275prd"](512, null, Zl, Zl, []), i["\u0275prd"](512, null, Jl, Jl, [ql.a]), i["\u0275did"](4, 245760, null, 0, is, [M, Zl, S.o, S.a, il.Title, dt.a, p.b, ct.a, Di.b, ns.a, cl.a, ri.a, _l.a, g.DOCUMENT, Wn.a, g.Location, y.a, A.a, k.a, Jl, ql.a, el.a], null, null)], function(t, e) {
                    t(e, 4, 0)
                }, null)
            }, {
                vgFor: "vgFor"
            }, {}, []),
            Fs = n("7DMc"),
            Vs = n("8/op"),
            zs = n("4iCB"),
            Hs = n("Wdho"),
            Gs = n("Z5i1"),
            Ws = function() {
                function t() {
                    this.scripts = {
                        ckplayer: {
                            loaded: !1,
                            src: "./assets/lib/_player/ckplayer.js"
                        }
                    }
                }
                return t.prototype.load = function() {
                    for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var i = e.map(function(e) {
                        return t.loadScript(e)
                    });
                    return Promise.all(i)
                }, t.prototype.loadScript = function(t) {
                    var e = this;
                    return new Promise(function(n, i) {
                        if (e.scripts[t].loaded) n({
                            script: t,
                            loaded: !0,
                            status: "Already Loaded"
                        });
                        else {
                            var l = document.createElement("script");
                            l.type = "text/javascript", l.src = e.scripts[t].src, l.onload = function() {
                                e.scripts[t].loaded = !0, n({
                                    script: t,
                                    loaded: !0,
                                    status: "Loaded"
                                })
                            }, l.onerror = function(e) {
                                return i({
                                    script: t,
                                    loaded: !1,
                                    status: "Loaded Error:" + e.toString()
                                })
                            }, document.head.appendChild(l)
                        }
                    })
                }, t.prototype.resolve = function(t, e) {
                    return this.load.apply(this, t.routeConfig.data.preloadScripts)
                }, t
            }(),
            Ys = n("LKU8"),
            _s = n("6XPQ"),
            Xs = n("PYDc"),
            js = n("U/fd"),
            Us = n("RpQI"),
            Qs = n("Avdc"),
            Ks = n("Md/h"),
            Zs = n("HhRc"),
            qs = n("mBor"),
            Js = n("K7Hc"),
            $s = n("89JZ"),
            ta = n("61l9"),
            ea = n("f8O5"),
            na = n("m1Gp"),
            ia = n("OW7k"),
            la = n("gv0a"),
            sa = n("ub6M"),
            aa = {
                preloadScripts: ["ckplayer"]
            },
            oa = function() {},
            ra = function() {},
            ua = function() {},
            ha = function() {},
            da = n("+GbP"),
            ca = n("1aVL"),
            pa = n("PDeG"),
            ga = n("6dv7");
        n.d(e, "VideoModuleNgFactory", function() {
            return fa
        });
        var fa = i["\u0275cmf"](l, [], function(t) {
            return i["\u0275mod"]([i["\u0275mpd"](512, i.ComponentFactoryResolver, i["\u0275CodegenComponentFactoryResolver"], [
                [8, [s.a, a.a, o.a, r.a, u.a, Es]],
                [3, i.ComponentFactoryResolver], i.NgModuleRef
            ]), i["\u0275mpd"](4608, g.NgLocalization, g.NgLocaleLocalization, [i.LOCALE_ID, [2, g["\u0275a"]]]), i["\u0275mpd"](4608, Fs.x, Fs.x, []), i["\u0275mpd"](4608, Fs.e, Fs.e, []), i["\u0275mpd"](4608, Vs.a, Vs.a, []), i["\u0275mpd"](4608, qi.a, qi.a, []), i["\u0275mpd"](4608, wt.a, wt.a, []), i["\u0275mpd"](4608, zt.a, zt.a, []), i["\u0275mpd"](4608, zs.a, zs.a, []), i["\u0275mpd"](4608, kt.a, kt.a, []), i["\u0275mpd"](5120, Di.b, Di.a, [
                [3, Di.b]
            ]), i["\u0275mpd"](4608, Ti.a, Ti.a, []), i["\u0275mpd"](4608, Ji.a, Ji.a, []), i["\u0275mpd"](4608, Hs.a, Hs.a, []), i["\u0275mpd"](4608, Gs.a, Gs.a, [x.a, C.a]), i["\u0275mpd"](4608, Ws, Ws, []), i["\u0275mpd"](4608, Ys.DragulaService, Ys.DragulaService, []), i["\u0275mpd"](4608, _s.SortablejsService, _s.SortablejsService, []), i["\u0275mpd"](4608, Xs.a, Xs.a, []), i["\u0275mpd"](4608, js.a, js.a, [x.a, Hs.a, C.a]), i["\u0275mpd"](512, g.CommonModule, g.CommonModule, []), i["\u0275mpd"](512, Fs.v, Fs.v, []), i["\u0275mpd"](512, Fs.j, Fs.j, []), i["\u0275mpd"](512, Fs.r, Fs.r, []), i["\u0275mpd"](512, S.r, S.r, [
                [2, S.w],
                [2, S.o]
            ]), i["\u0275mpd"](512, Us.b, Us.b, []), i["\u0275mpd"](512, Qs.LazyLoadImagesModule, Qs.LazyLoadImagesModule, []), i["\u0275mpd"](512, Ks.a, Ks.a, []), i["\u0275mpd"](512, Zs.a, Zs.a, []), i["\u0275mpd"](512, qs.a, qs.a, []), i["\u0275mpd"](512, Js.a, Js.a, []), i["\u0275mpd"](512, $s.a, $s.a, []), i["\u0275mpd"](512, Xt.a, Xt.a, []), i["\u0275mpd"](512, ta.a, ta.a, []), i["\u0275mpd"](512, ea.a, ea.a, []), i["\u0275mpd"](512, na.a, na.a, []), i["\u0275mpd"](512, ia.a, ia.a, []), i["\u0275mpd"](512, la.a, la.a, []), i["\u0275mpd"](512, sa.a, sa.a, []), i["\u0275mpd"](512, oa, oa, []), i["\u0275mpd"](512, ra, ra, []), i["\u0275mpd"](512, ua, ua, []), i["\u0275mpd"](512, ha, ha, []), i["\u0275mpd"](512, da.DragulaModule, da.DragulaModule, []), i["\u0275mpd"](512, Bi.b, Bi.b, []), i["\u0275mpd"](512, ca.SortablejsModule, ca.SortablejsModule, []), i["\u0275mpd"](512, pa.a, pa.a, []), i["\u0275mpd"](512, ga.a, ga.a, []), i["\u0275mpd"](512, l, l, []), i["\u0275mpd"](256, Us.a, sa.b, []), i["\u0275mpd"](1024, S.m, function() {
                return [
                    [{
                        path: "**",
                        component: is,
                        resolve: {
                            preloadScripts: Ws
                        },
                        data: aa
                    }]
                ]
            }, [])])
        })
    },
    QIrt: function(t, e) {
        var n;
        (n = window.AmCharts).AmSlicedChart = n.Class({
                inherits: n.AmChart,
                construct: function(t) {
                    this.createEvents("rollOverSlice", "rollOutSlice", "clickSlice", "pullOutSlice", "pullInSlice", "rightClickSlice"), n.AmSlicedChart.base.construct.call(this, t), this.colors = "#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" "), this.alpha = 1, this.groupPercent = 0, this.groupedTitle = "Other", this.groupedPulled = !1, this.groupedAlpha = 1, this.marginLeft = 0, this.marginBottom = this.marginTop = 10, this.marginRight = 0, this.hoverAlpha = 1, this.outlineColor = "#FFFFFF", this.outlineAlpha = 0, this.outlineThickness = 1, this.startAlpha = 0, this.startDuration = 1, this.startEffect = "bounce", this.sequencedAnimation = !0, this.pullOutDuration = 1, this.pullOutEffect = "bounce", this.pullOnHover = this.pullOutOnlyOne = !1, this.labelsEnabled = !0, this.labelTickColor = "#000000", this.labelTickAlpha = .2, this.hideLabelsPercent = 0, this.urlTarget = "_self", this.autoMarginOffset = 10, this.gradientRatio = [], this.maxLabelWidth = 200, this.accessibleLabel = "[[title]]: [[percents]]% [[value]] [[description]]", n.applyTheme(this, t, "AmSlicedChart")
                },
                initChart: function() {
                    n.AmSlicedChart.base.initChart.call(this), this.dataChanged && (this.parseData(), this.dispatchDataUpdated = !0, this.dataChanged = !1, this.setLegendData(this.chartData)), this.drawChart()
                },
                handleLegendEvent: function(t) {
                    var e = t.type,
                        n = t.dataItem,
                        i = this.legend;
                    if (n.wedge && n) {
                        var l = n.hidden;
                        switch (t = t.event, e) {
                            case "clickMarker":
                                l || i.switchable || this.clickSlice(n, t);
                                break;
                            case "clickLabel":
                                l || this.clickSlice(n, t, !1);
                                break;
                            case "rollOverItem":
                                l || this.rollOverSlice(n, !1, t);
                                break;
                            case "rollOutItem":
                                l || this.rollOutSlice(n, t);
                                break;
                            case "hideItem":
                                this.hideSlice(n, t);
                                break;
                            case "showItem":
                                this.showSlice(n, t)
                        }
                    }
                },
                invalidateVisibility: function() {
                    this.recalculatePercents(), this.initChart();
                    var t = this.legend;
                    t && t.invalidateSize()
                },
                addEventListeners: function(t, e) {
                    var n = this;
                    t.mouseover(function(t) {
                        n.rollOverSlice(e, !0, t)
                    }).mouseout(function(t) {
                        n.rollOutSlice(e, t)
                    }).touchend(function(t) {
                        n.rollOverSlice(e, t)
                    }).mouseup(function(t) {
                        n.clickSlice(e, t)
                    }).contextmenu(function(t) {
                        n.handleRightClick(e, t)
                    }).focus(function(t) {
                        n.rollOverSlice(e, t)
                    }).blur(function(t) {
                        n.rollOutSlice(e, t)
                    })
                },
                formatString: function(t, e, i) {
                    t = n.formatValue(t, e, ["value"], this.nf, "", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers);
                    var l = this.pf.precision;
                    return isNaN(this.tempPrec) || (this.pf.precision = this.tempPrec), t = n.formatValue(t, e, ["percents"], this.pf), t = n.massReplace(t, {
                        "[[title]]": e.title,
                        "[[description]]": e.description
                    }), this.pf.precision = l, -1 != t.indexOf("[[") && (t = n.formatDataContextValue(t, e.dataContext)), t = i ? n.fixNewLines(t) : n.fixBrakes(t), n.cleanFromEmpty(t)
                },
                startSlices: function() {
                    var t;
                    for (t = 0; t < this.chartData.length; t++) 0 < this.startDuration && this.sequencedAnimation ? this.setStartTO(t) : this.startSlice(this.chartData[t])
                },
                setStartTO: function(t) {
                    var e = this;
                    t = setTimeout(function() {
                        e.startSequenced.call(e)
                    }, e.startDuration / e.chartData.length * 500 * t), e.timeOuts.push(t)
                },
                pullSlices: function(t) {
                    var e, n = this.chartData;
                    for (e = 0; e < n.length; e++) {
                        var i = n[e];
                        i.pulled && this.pullSlice(i, 1, t)
                    }
                },
                startSequenced: function() {
                    var t, e = this.chartData;
                    for (t = 0; t < e.length; t++)
                        if (!e[t].started) {
                            this.startSlice(this.chartData[t]);
                            break
                        }
                },
                startSlice: function(t) {
                    t.started = !0;
                    var e = t.wedge,
                        n = this.startDuration,
                        i = t.labelSet;
                    e && 0 < n && (0 < t.alpha && e.show(), e.translate(t.startX, t.startY), this.animatable.push(e), e.animate({
                        opacity: 1,
                        translate: "0,0"
                    }, n, this.startEffect)), i && 0 < n && (0 < t.alpha && i.show(), i.translate(t.startX, t.startY), i.animate({
                        opacity: 1,
                        translate: "0,0"
                    }, n, this.startEffect))
                },
                showLabels: function() {
                    var t, e = this.chartData;
                    for (t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (0 < n.alpha) {
                            var i = n.label;
                            i && i.show(), (n = n.tick) && n.show()
                        }
                    }
                },
                showSlice: function(t) {
                    isNaN(t) ? t.hidden = !1 : this.chartData[t].hidden = !1, this.invalidateVisibility()
                },
                hideSlice: function(t) {
                    isNaN(t) ? t.hidden = !0 : this.chartData[t].hidden = !0, this.hideBalloon(), this.invalidateVisibility()
                },
                rollOverSlice: function(t, e, i) {
                    if (isNaN(t) || (t = this.chartData[t]), clearTimeout(this.hoverInt), !t.hidden) {
                        this.pullOnHover && this.pullSlice(t, 1), 1 > this.hoverAlpha && t.wedge && t.wedge.attr({
                            opacity: this.hoverAlpha
                        });
                        var l = t.balloonX,
                            s = t.balloonY;
                        t.pulled && (l += t.pullX, s += t.pullY);
                        var a = this.formatString(this.balloonText, t, !0),
                            o = this.balloonFunction;
                        o && (a = o(t, a)), o = n.adjustLuminosity(t.color, -.15), a ? this.showBalloon(a, o, e, l, s) : this.hideBalloon(), 0 === t.value && this.hideBalloon(), this.fire({
                            type: "rollOverSlice",
                            dataItem: t,
                            chart: this,
                            event: i
                        })
                    }
                },
                rollOutSlice: function(t, e) {
                    isNaN(t) || (t = this.chartData[t]), t.wedge && t.wedge.attr({
                        opacity: 1
                    }), this.hideBalloon(), this.fire({
                        type: "rollOutSlice",
                        dataItem: t,
                        chart: this,
                        event: e
                    })
                },
                clickSlice: function(t, e, i) {
                    this.checkTouchDuration(e) && (isNaN(t) || (t = this.chartData[t]), this.pullSlice(t, t.pulled ? 0 : 1), n.getURL(t.url, this.urlTarget), i || this.fire({
                        type: "clickSlice",
                        dataItem: t,
                        chart: this,
                        event: e
                    }))
                },
                handleRightClick: function(t, e) {
                    isNaN(t) || (t = this.chartData[t]), this.fire({
                        type: "rightClickSlice",
                        dataItem: t,
                        chart: this,
                        event: e
                    })
                },
                drawTicks: function() {
                    var t, e = this.chartData;
                    for (t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (i.label && !i.skipTick) {
                            var l = n.line(this.container, [i.tx0, i.tx, i.tx2], [i.ty0, l = i.ty, l], this.labelTickColor, this.labelTickAlpha);
                            n.setCN(this, l, this.type + "-tick"), n.setCN(this, l, i.className, !0), i.tick = l, i.wedge.push(l), "AmFunnelChart" == this.cname && l.toBack()
                        }
                    }
                },
                initialStart: function() {
                    var t = this,
                        e = t.startDuration,
                        n = setTimeout(function() {
                            t.showLabels.call(t)
                        }, 1e3 * e);
                    t.timeOuts.push(n), t.chartCreated ? t.pullSlices(!0) : (t.startSlices(), 0 < e ? (e = setTimeout(function() {
                        t.pullSlices.call(t)
                    }, 1200 * e), t.timeOuts.push(e)) : t.pullSlices(!0))
                },
                pullSlice: function(t, e, n) {
                    var i = this.pullOutDuration;
                    !0 === n && (i = 0), (n = t.wedge) && (0 < i ? (n.animate({
                        translate: e * t.pullX + "," + e * t.pullY
                    }, i, this.pullOutEffect), t.labelSet && t.labelSet.animate({
                        translate: e * t.pullX + "," + e * t.pullY
                    }, i, this.pullOutEffect)) : (t.labelSet && t.labelSet.translate(e * t.pullX, e * t.pullY), n.translate(e * t.pullX, e * t.pullY))), 1 == e ? (t.pulled = !0, this.pullOutOnlyOne && this.pullInAll(t.index), t = {
                        type: "pullOutSlice",
                        dataItem: t,
                        chart: this
                    }) : (t.pulled = !1, t = {
                        type: "pullInSlice",
                        dataItem: t,
                        chart: this
                    }), this.fire(t)
                },
                pullInAll: function(t) {
                    var e, n = this.chartData;
                    for (e = 0; e < this.chartData.length; e++) e != t && n[e].pulled && this.pullSlice(n[e], 0)
                },
                pullOutAll: function() {
                    var t, e = this.chartData;
                    for (t = 0; t < e.length; t++) e[t].pulled || this.pullSlice(e[t], 1)
                },
                parseData: function() {
                    var t = [];
                    this.chartData = t;
                    var e = this.dataProvider;
                    if (isNaN(this.pieAlpha) || (this.alpha = this.pieAlpha), void 0 !== e) {
                        var i, l, s, a = e.length,
                            o = 0;
                        for (i = 0; i < a; i++) {
                            var r = e[i];
                            (l = {}).dataContext = r, null !== r[this.valueField] && (l.value = Number(r[this.valueField])), (s = r[this.titleField]) || (s = ""), l.title = s, l.pulled = n.toBoolean(r[this.pulledField], !1), (s = r[this.descriptionField]) || (s = ""), l.description = s, l.labelRadius = Number(r[this.labelRadiusField]), l.switchable = !0, l.className = r[this.classNameField], l.url = r[this.urlField], !(s = r[this.patternField]) && this.patterns && (s = this.patterns[i]), l.pattern = s, l.visibleInLegend = n.toBoolean(r[this.visibleInLegendField], !0), l.alpha = void 0 !== (s = r[this.alphaField]) ? Number(s) : this.alpha, void 0 !== (s = r[this.colorField]) && (l.color = s), l.labelColor = n.toColor(r[this.labelColorField]), o += l.value, l.hidden = !1, t[i] = l
                        }
                        for (i = e = 0; i < a; i++)(l = t[i]).percents = l.value / o * 100, l.percents < this.groupPercent && e++;
                        for (1 < e && (this.groupValue = 0, this.removeSmallSlices(), t.push({
                                title: this.groupedTitle,
                                value: this.groupValue,
                                percents: this.groupValue / o * 100,
                                pulled: this.groupedPulled,
                                color: this.groupedColor,
                                url: this.groupedUrl,
                                description: this.groupedDescription,
                                alpha: this.groupedAlpha,
                                pattern: this.groupedPattern,
                                className: this.groupedClassName,
                                dataContext: {}
                            })), (a = this.baseColor) || (a = this.pieBaseColor), (o = this.brightnessStep) || (o = this.pieBrightnessStep), i = 0; i < t.length; i++) a ? s = n.adjustLuminosity(a, i * o / 100) : void 0 === (s = this.colors[i]) && (s = n.randomColor()), void 0 === t[i].color && (t[i].color = s);
                        this.recalculatePercents()
                    }
                },
                recalculatePercents: function() {
                    var t, e, n = this.chartData,
                        i = 0;
                    for (t = 0; t < n.length; t++) !(e = n[t]).hidden && 0 < e.value && (i += e.value);
                    for (t = 0; t < n.length; t++)(e = this.chartData[t]).percents = !e.hidden && 0 < e.value ? 100 * e.value / i : 0
                },
                removeSmallSlices: function() {
                    var t, e = this.chartData;
                    for (t = e.length - 1; 0 <= t; t--) e[t].percents < this.groupPercent && (this.groupValue += e[t].value, e.splice(t, 1))
                },
                animateAgain: function() {
                    var t = this;
                    t.startSlices();
                    for (var e = 0; e < t.chartData.length; e++) {
                        var n = t.chartData[e];
                        n.started = !1;
                        var i = n.wedge;
                        i && (i.setAttr("opacity", t.startAlpha), i.translate(n.startX, n.startY)), (i = n.labelSet) && (i.setAttr("opacity", t.startAlpha), i.translate(n.startX, n.startY))
                    }
                    0 < (e = t.startDuration) ? (e = setTimeout(function() {
                        t.pullSlices.call(t)
                    }, 1200 * e), t.timeOuts.push(e)) : t.pullSlices()
                },
                measureMaxLabel: function() {
                    var t, e = this.chartData,
                        i = 0;
                    for (t = 0; t < e.length; t++) {
                        var l = e[t],
                            s = this.formatString(this.labelText, l),
                            a = this.labelFunction;
                        a && (s = a(l, s)), (s = (l = n.text(this.container, s, this.color, this.fontFamily, this.fontSize)).getBBox().width) > i && (i = s), l.remove()
                    }
                    return i
                }
            }),
            function() {
                var t = window.AmCharts;
                t.AmPieChart = t.Class({
                    inherits: t.AmSlicedChart,
                    construct: function(e) {
                        this.type = "pie", t.AmPieChart.base.construct.call(this, e), this.cname = "AmPieChart", this.pieBrightnessStep = 30, this.minRadius = 10, this.depth3D = 0, this.startAngle = 90, this.angle = this.innerRadius = 0, this.startRadius = "500%", this.pullOutRadius = "20%", this.labelRadius = 20, this.labelText = "[[title]]: [[percents]]%", this.balloonText = "[[title]]: [[percents]]% ([[value]])\n[[description]]", this.previousScale = 1, this.adjustPrecision = !1, this.gradientType = "radial", t.applyTheme(this, e, this.cname)
                    },
                    drawChart: function() {
                        t.AmPieChart.base.drawChart.call(this);
                        var e = this.chartData;
                        if (t.ifArray(e)) {
                            if (0 < this.realWidth && 0 < this.realHeight) {
                                t.VML && (this.startAlpha = 1);
                                var n = this.startDuration,
                                    i = this.container,
                                    l = this.updateWidth();
                                this.realWidth = l;
                                var s = this.updateHeight();
                                this.realHeight = s;
                                var a, o, r, u, h = t.toCoordinate,
                                    d = h(this.marginLeft, l),
                                    c = h(this.marginRight, l),
                                    p = h(this.marginTop, s) + this.getTitleHeight(),
                                    g = h(this.marginBottom, s) + this.depth3D,
                                    f = t.toNumber(this.labelRadius);
                                for ((v = this.measureMaxLabel()) > this.maxLabelWidth && (v = this.maxLabelWidth), this.labelText && this.labelsEnabled || (f = v = 0), a = void 0 === this.pieX ? (l - d - c) / 2 + d : h(this.pieX, this.realWidth), o = void 0 === this.pieY ? (s - p - g) / 2 + p : h(this.pieY, s), (r = h(this.radius, l, s)) || (l = 0 <= f ? l - d - c - 2 * v : l - d - c, s = s - p - g, r = Math.min(l, s), s < l && (r /= 1 - this.angle / 90) > l && (r = l), s = t.toCoordinate(this.pullOutRadius, r), r = (0 <= f ? r - 1.8 * (f + s) : r - 1.8 * s) / 2), r < this.minRadius && (r = this.minRadius), s = h(this.pullOutRadius, r), p = t.toCoordinate(this.startRadius, r), (h = h(this.innerRadius, r)) >= r && (h = r - 1), g = t.fitToBounds(this.startAngle, 0, 360), 0 < this.depth3D && (g = 270 <= g ? 270 : 90), 360 < (g -= 90) && (g -= 360), l = r - r * this.angle / 90, d = v = 0; d < e.length; d++) !0 !== (c = e[d]).hidden && (v += t.roundTo(c.percents, this.pf.precision));
                                for (v = t.roundTo(v, this.pf.precision), this.tempPrec = NaN, this.adjustPrecision && 100 != v && (this.tempPrec = this.pf.precision + 1), d = 0; d < e.length; d++)
                                    if (!0 !== (c = e[d]).hidden && (this.showZeroSlices || 0 !== c.percents)) {
                                        var m = 360 * c.percents / 100,
                                            v = Math.sin((g + m / 2) / 180 * Math.PI),
                                            b = l / r * -Math.cos((g + m / 2) / 180 * Math.PI),
                                            y = this.outlineColor;
                                        y || (y = c.color);
                                        var A = this.alpha;
                                        if (isNaN(c.alpha) || (A = c.alpha), y = {
                                                fill: c.color,
                                                stroke: y,
                                                "stroke-width": this.outlineThickness,
                                                "stroke-opacity": this.outlineAlpha,
                                                "fill-opacity": A
                                            }, c.url && (y.cursor = "pointer"), y = t.wedge(i, a, o, g, m, r, l, h, this.depth3D, y, this.gradientRatio, c.pattern, this.path, this.gradientType), t.setCN(this, y, "pie-item"), t.setCN(this, y.wedge, "pie-slice"), t.setCN(this, y, c.className, !0), this.addEventListeners(y, c), c.startAngle = g, e[d].wedge = y, 0 < n && (this.chartCreated || y.setAttr("opacity", this.startAlpha)), c.ix = v, c.iy = b, c.wedge = y, c.index = d, c.label = null, A = i.set(), this.labelsEnabled && this.labelText && c.percents >= this.hideLabelsPercent) {
                                            var x = g + m / 2;
                                            0 > x && (x += 360), 360 < x && (x -= 360);
                                            var C = f;
                                            isNaN(c.labelRadius) || 0 > (C = c.labelRadius) && (c.skipTick = !0), m = a + v * (r + C);
                                            var w, k, M = o + b * (r + C),
                                                S = 0;
                                            isNaN(u) && 350 < x && 1 < e.length - d && (u = d - 1 + Math.floor((e.length - d) / 2)), 0 <= C ? (90 >= x && 0 <= x ? (k = 0, w = "start", S = 8) : 90 <= x && 180 > x ? (k = 1, w = "start", S = 8) : 180 <= x && 270 > x ? (k = 2, w = "end", S = -8) : 270 <= x && 354 >= x ? (k = 3, w = "end", S = -8) : 354 <= x && (d > u ? (k = 0, w = "start", S = 8) : (k = 3, w = "end", S = -8)), c.labelQuarter = k) : w = "middle", x = this.formatString(this.labelText, c), (C = this.labelFunction) && (x = C(c, x)), (C = c.labelColor) || (C = this.color), "" !== x && (x = t.wrappedText(i, x, C, this.fontFamily, this.fontSize, w, !1, this.maxLabelWidth), t.setCN(this, x, "pie-label"), t.setCN(this, x, c.className, !0), x.translate(m + 1.5 * S, M), 0 > f && (x.node.style.pointerEvents = "none"), x.node.style.cursor = "default", c.ty = M, c.textX = m + 1.5 * S, A.push(x), this.axesSet.push(A), c.labelSet = A, c.label = x, this.addEventListeners(A, c)), c.tx = m, c.tx2 = m + S, c.tx0 = a + v * r, c.ty0 = o + b * r
                                        }
                                        m = h + (r - h) / 2, c.pulled && (m += s), this.accessible && this.accessibleLabel && (M = this.formatString(this.accessibleLabel, c), this.makeAccessible(y, M)), void 0 !== this.tabIndex && y.setAttr("tabindex", this.tabIndex), c.balloonX = v * m + a, c.balloonY = b * m + o, c.startX = Math.round(v * p), c.startY = Math.round(b * p), c.pullX = Math.round(v * s), c.pullY = Math.round(b * s), this.graphsSet.push(y), (0 === c.alpha || 0 < n && !this.chartCreated) && (y.hide(), A && A.hide()), 360 < (g += 360 * c.percents / 100) && (g -= 360)
                                    } 0 < f && this.arrangeLabels(), this.pieXReal = a, this.pieYReal = o, this.radiusReal = r, this.innerRadiusReal = h, 0 < f && this.drawTicks(), this.initialStart(), this.setDepths()
                            }(e = this.legend) && e.invalidateSize()
                        } else this.cleanChart();
                        this.dispDUpd()
                    },
                    setDepths: function() {
                        var t, e = this.chartData;
                        for (t = 0; t < e.length; t++) {
                            var n, i = (n = e[t]).wedge;
                            0 <= (n = n.startAngle) && 180 > n ? i.toFront() : 180 <= n && i.toBack()
                        }
                    },
                    arrangeLabels: function() {
                        var t, e, n = this.chartData,
                            i = n.length;
                        for (e = i - 1; 0 <= e; e--) 0 !== (t = n[e]).labelQuarter || t.hidden || this.checkOverlapping(e, t, 0, !0, 0);
                        for (e = 0; e < i; e++) 1 != (t = n[e]).labelQuarter || t.hidden || this.checkOverlapping(e, t, 1, !1, 0);
                        for (e = i - 1; 0 <= e; e--) 2 != (t = n[e]).labelQuarter || t.hidden || this.checkOverlapping(e, t, 2, !0, 0);
                        for (e = 0; e < i; e++) 3 != (t = n[e]).labelQuarter || t.hidden || this.checkOverlapping(e, t, 3, !1, 0)
                    },
                    checkOverlapping: function(t, e, n, i, l) {
                        var s, a, o = this.chartData,
                            r = o.length,
                            u = e.label;
                        if (u) {
                            if (!0 === i)
                                for (a = t + 1; a < r; a++) o[a].labelQuarter == n && (s = this.checkOverlappingReal(e, o[a], n)) && (a = r);
                            else
                                for (a = t - 1; 0 <= a; a--) o[a].labelQuarter == n && (s = this.checkOverlappingReal(e, o[a], n)) && (a = 0);
                            !0 === s && 200 > l && isNaN(e.labelRadius) && (e.ty = s = e.ty + 3 * e.iy, u.translate(e.textX, s), this.checkOverlapping(t, e, n, i, l + 1))
                        }
                    },
                    checkOverlappingReal: function(e, n, i) {
                        var l = !1,
                            s = e.label,
                            a = n.label;
                        return e.labelQuarter != i || e.hidden || n.hidden || !a || (s = s.getBBox(), (i = {}).width = s.width, i.height = s.height, i.y = e.ty, i.x = e.tx, e = a.getBBox(), (a = {}).width = e.width, a.height = e.height, a.y = n.ty, a.x = n.tx, t.hitTest(i, a) && (l = !0)), l
                    }
                })
            }()
    },
    llmY: function(t, e) {
        AmCharts.themes.light = {
            themeName: "light",
            AmChart: {
                color: "#000000",
                backgroundColor: "#FFFFFF"
            },
            AmCoordinateChart: {
                colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
            },
            AmStockChart: {
                colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
            },
            AmSlicedChart: {
                colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167", "#674EA7"],
                outlineAlpha: 1,
                outlineThickness: 2,
                labelTickColor: "#000000",
                labelTickAlpha: .3
            },
            AmRectangularChart: {
                zoomOutButtonColor: "#000000",
                zoomOutButtonRollOverAlpha: .15,
                zoomOutButtonImage: "lens"
            },
            AxisBase: {
                axisColor: "#000000",
                axisAlpha: .3,
                gridAlpha: .1,
                gridColor: "#000000"
            },
            ChartScrollbar: {
                backgroundColor: "#000000",
                backgroundAlpha: .12,
                graphFillAlpha: .5,
                graphLineAlpha: 0,
                selectedBackgroundColor: "#FFFFFF",
                selectedBackgroundAlpha: .4,
                gridAlpha: .15
            },
            ChartCursor: {
                cursorColor: "#000000",
                color: "#FFFFFF",
                cursorAlpha: .5
            },
            AmLegend: {
                color: "#000000"
            },
            AmGraph: {
                lineAlpha: .9
            },
            GaugeArrow: {
                color: "#000000",
                alpha: .8,
                nailAlpha: 0,
                innerRadius: "40%",
                nailRadius: 15,
                startWidth: 15,
                borderAlpha: .8,
                nailBorderAlpha: 0
            },
            GaugeAxis: {
                tickColor: "#000000",
                tickAlpha: 1,
                tickLength: 15,
                minorTickLength: 8,
                axisThickness: 3,
                axisColor: "#000000",
                axisAlpha: 1,
                bandAlpha: .8
            },
            TrendLine: {
                lineColor: "#c03246",
                lineAlpha: .8
            },
            AreasSettings: {
                alpha: .8,
                color: "#67b7dc",
                colorSolid: "#003767",
                unlistedAreasAlpha: .4,
                unlistedAreasColor: "#000000",
                outlineColor: "#FFFFFF",
                outlineAlpha: .5,
                outlineThickness: .5,
                rollOverColor: "#3c5bdc",
                rollOverOutlineColor: "#FFFFFF",
                selectedOutlineColor: "#FFFFFF",
                selectedColor: "#f15135",
                unlistedAreasOutlineColor: "#FFFFFF",
                unlistedAreasOutlineAlpha: .5
            },
            LinesSettings: {
                color: "#000000",
                alpha: .8
            },
            ImagesSettings: {
                alpha: .8,
                labelColor: "#000000",
                color: "#000000",
                labelRollOverColor: "#3c5bdc"
            },
            ZoomControl: {
                buttonFillAlpha: .7,
                buttonIconColor: "#a7a7a7"
            },
            SmallMap: {
                mapColor: "#000000",
                rectangleColor: "#f15135",
                backgroundColor: "#FFFFFF",
                backgroundAlpha: .7,
                borderThickness: 1,
                borderAlpha: .8
            },
            PeriodSelector: {
                color: "#000000"
            },
            PeriodButton: {
                color: "#000000",
                background: "transparent",
                opacity: .7,
                border: "1px solid rgba(0, 0, 0, .3)",
                MozBorderRadius: "5px",
                borderRadius: "5px",
                margin: "1px",
                outline: "none",
                boxSizing: "border-box"
            },
            PeriodButtonSelected: {
                color: "#000000",
                backgroundColor: "#b9cdf5",
                border: "1px solid rgba(0, 0, 0, .3)",
                MozBorderRadius: "5px",
                borderRadius: "5px",
                margin: "1px",
                outline: "none",
                opacity: 1,
                boxSizing: "border-box"
            },
            PeriodInputField: {
                color: "#000000",
                background: "transparent",
                border: "1px solid rgba(0, 0, 0, .3)",
                outline: "none"
            },
            DataSetSelector: {
                color: "#000000",
                selectedBackgroundColor: "#b9cdf5",
                rollOverBackgroundColor: "#a8b0e4"
            },
            DataSetCompareList: {
                color: "#000000",
                lineHeight: "100%",
                boxSizing: "initial",
                webkitBoxSizing: "initial",
                border: "1px solid rgba(0, 0, 0, .3)"
            },
            DataSetSelect: {
                border: "1px solid rgba(0, 0, 0, .3)",
                outline: "none"
            }
        }
    },
    pcvH: function(t, e) {
        var n;
        window.AmCharts ? n = window.AmCharts : (n = {}, window.AmCharts = n, n.themes = {}, n.maps = {}, n.inheriting = {}, n.charts = [], n.onReadyArray = [], n.useUTC = !1, n.updateRate = 60, n.uid = 0, n.lang = {}, n.translations = {}, n.mapTranslations = {}, n.windows = {}, n.initHandlers = [], n.amString = "am", n.pmString = "pm"), n.Class = function(t) {
                var e = function() {
                    arguments[0] !== n.inheriting && (this.events = {}, this.construct.apply(this, arguments))
                };
                for (var i in t.inherits ? (e.prototype = new t.inherits(n.inheriting), e.base = t.inherits.prototype, delete t.inherits) : (e.prototype.createEvents = function() {
                        for (var t = 0; t < arguments.length; t++) this.events[arguments[t]] = []
                    }, e.prototype.listenTo = function(t, e, n) {
                        this.removeListener(t, e, n), t.events[e].push({
                            handler: n,
                            scope: this
                        })
                    }, e.prototype.addListener = function(t, e, n) {
                        this.removeListener(this, t, e), t && this.events[t] && this.events[t].push({
                            handler: e,
                            scope: n
                        })
                    }, e.prototype.removeListener = function(t, e, n) {
                        if (t && t.events && (t = t.events[e]))
                            for (e = t.length - 1; 0 <= e; e--) t[e].handler === n && t.splice(e, 1)
                    }, e.prototype.fire = function(t) {
                        for (var e = this.events[t.type], n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.handler.call(i.scope, t)
                        }
                    }), t) e.prototype[i] = t[i];
                return e
            }, n.addChart = function(t) {
                window.requestAnimationFrame ? n.animationRequested || (n.animationRequested = !0, window.requestAnimationFrame(n.update)) : n.updateInt || (n.updateInt = setInterval(function() {
                    n.update()
                }, Math.round(1e3 / n.updateRate))), n.charts.push(t)
            }, n.removeChart = function(t) {
                for (var e = n.charts, i = e.length - 1; 0 <= i; i--) e[i] == t && e.splice(i, 1);
                0 === e.length && (n.requestAnimation && (window.cancelAnimationFrame(n.requestAnimation), n.animationRequested = !1), n.updateInt && (clearInterval(n.updateInt), n.updateInt = NaN))
            }, n.isModern = !0, n.getIEVersion = function() {
                var t, e = 0;
                return "Microsoft Internet Explorer" == navigator.appName && (t = navigator.userAgent, null !== /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(t) && (e = parseFloat(RegExp.$1))), e
            }, n.applyLang = function(t, e) {
                var i = n.translations;
                e.dayNames = n.extend({}, n.dayNames), e.shortDayNames = n.extend({}, n.shortDayNames), e.monthNames = n.extend({}, n.monthNames), e.shortMonthNames = n.extend({}, n.shortMonthNames), e.amString = "am", e.pmString = "pm", i && (i = i[t]) && (n.lang = i, e.langObj = i, i.monthNames && (e.dayNames = n.extend({}, i.dayNames), e.shortDayNames = n.extend({}, i.shortDayNames), e.monthNames = n.extend({}, i.monthNames), e.shortMonthNames = n.extend({}, i.shortMonthNames)), i.am && (e.amString = i.am), i.pm && (e.pmString = i.pm)), n.amString = e.amString, n.pmString = e.pmString
            }, n.IEversion = n.getIEVersion(), 9 > n.IEversion && 0 < n.IEversion && (n.isModern = !1, n.isIE = !0), n.dx = 0, n.dy = 0, (document.addEventListener || window.opera) && (n.isNN = !0, n.isIE = !1, n.dx = .5, n.dy = .5), document.attachEvent && (n.isNN = !1, n.isIE = !0, n.isModern || (n.dx = 0, n.dy = 0)), window.chrome && (n.chrome = !0), n.handleMouseUp = function(t) {
                for (var e = n.charts, i = 0; i < e.length; i++) {
                    var l = e[i];
                    l && l.handleReleaseOutside && l.handleReleaseOutside(t)
                }
            }, n.handleMouseMove = function(t) {
                for (var e = n.charts, i = 0; i < e.length; i++) {
                    var l = e[i];
                    l && l.handleMouseMove && l.handleMouseMove(t)
                }
            }, n.handleWheel = function(t) {
                for (var e = n.charts, i = 0; i < e.length; i++) {
                    var l = e[i];
                    if (l && l.mouseIsOver) {
                        (l.mouseWheelScrollEnabled || l.mouseWheelZoomEnabled) && l.handleWheel && (l.handleMouseMove(t), l.handleWheel(t));
                        break
                    }
                }
            }, n.resetMouseOver = function() {
                for (var t = n.charts, e = 0; e < t.length; e++) {
                    var i = t[e];
                    i && (i.mouseIsOver = !1)
                }
            }, n.ready = function(t) {
                n.onReadyArray.push(t)
            }, n.handleLoad = function() {
                n.isReady = !0;
                for (var t = n.onReadyArray, e = 0; e < t.length; e++) {
                    var i = t[e];
                    isNaN(n.processDelay) ? i() : setTimeout(i, n.processDelay * e)
                }
                n.onReadyArray = []
            }, n.addInitHandler = function(t, e) {
                n.initHandlers.push({
                    method: t,
                    types: e
                })
            }, n.callInitHandler = function(t) {
                var e = n.initHandlers;
                if (n.initHandlers)
                    for (var i = 0; i < e.length; i++) {
                        var l = e[i];
                        l.types ? n.isInArray(l.types, t.type) && l.method(t) : l.method(t)
                    }
            }, n.getUniqueId = function() {
                return n.uid++, "AmChartsEl-" + n.uid
            }, n.isNN && (document.addEventListener("mousemove", n.handleMouseMove), document.addEventListener("mouseup", n.handleMouseUp, !0), window.addEventListener("load", n.handleLoad, !0)), n.isIE && (document.attachEvent("onmousemove", n.handleMouseMove), document.attachEvent("onmouseup", n.handleMouseUp), window.attachEvent("onload", n.handleLoad)), n.addWheelListeners = function() {
                n.wheelIsListened || (n.isNN && (window.addEventListener("DOMMouseScroll", n.handleWheel, !0), document.addEventListener("mousewheel", n.handleWheel, !0)), n.isIE && document.attachEvent("onmousewheel", n.handleWheel)), n.wheelIsListened = !0
            }, n.clear = function() {
                var t = n.charts;
                if (t)
                    for (var e = t.length - 1; 0 <= e; e--) t[e].clear();
                n.updateInt && clearInterval(n.updateInt), n.requestAnimation && window.cancelAnimationFrame(n.requestAnimation), n.charts = [], n.isNN && (document.removeEventListener("mousemove", n.handleMouseMove, !0), document.removeEventListener("mouseup", n.handleMouseUp, !0), window.removeEventListener("load", n.handleLoad, !0), window.removeEventListener("DOMMouseScroll", n.handleWheel, !0), document.removeEventListener("mousewheel", n.handleWheel, !0)), n.isIE && (document.detachEvent("onmousemove", n.handleMouseMove), document.detachEvent("onmouseup", n.handleMouseUp), window.detachEvent("onload", n.handleLoad))
            }, n.makeChart = function(t, e, i) {
                var l, s = e.type,
                    a = e.theme;
                switch (n.isString(a) && (e.theme = a = n.themes[a]), s) {
                    case "serial":
                        l = new n.AmSerialChart(a);
                        break;
                    case "xy":
                        l = new n.AmXYChart(a);
                        break;
                    case "pie":
                        l = new n.AmPieChart(a);
                        break;
                    case "radar":
                        l = new n.AmRadarChart(a);
                        break;
                    case "gauge":
                        l = new n.AmAngularGauge(a);
                        break;
                    case "funnel":
                        l = new n.AmFunnelChart(a);
                        break;
                    case "map":
                        l = new n.AmMap(a);
                        break;
                    case "stock":
                        l = new n.AmStockChart(a);
                        break;
                    case "gantt":
                        l = new n.AmGanttChart(a)
                }
                return n.extend(l, e), n.isReady ? isNaN(i) ? l.write(t) : setTimeout(function() {
                    n.realWrite(l, t)
                }, i) : n.ready(function() {
                    isNaN(i) ? l.write(t) : setTimeout(function() {
                        n.realWrite(l, t)
                    }, i)
                }), l
            }, n.realWrite = function(t, e) {
                t.write(e)
            }, n.updateCount = 0, n.validateAt = Math.round(n.updateRate / 10), n.update = function() {
                var t = n.charts;
                n.updateCount++;
                var e = !1;
                if (n.updateCount == n.validateAt && (e = !0, n.updateCount = 0), t)
                    for (var i = t.length - 1; 0 <= i; i--) t[i].update && t[i].update(), e && (t[i].autoResize ? t[i].validateSize && t[i].validateSize() : t[i].premeasure && t[i].premeasure());
                window.requestAnimationFrame && (n.requestAnimation = window.requestAnimationFrame(n.update))
            }, "complete" == document.readyState && n.handleLoad(),
            function() {
                var t = window.AmCharts;
                t.toBoolean = function(t, e) {
                    if (void 0 === t) return e;
                    switch (String(t).toLowerCase()) {
                        case "true":
                        case "yes":
                        case "1":
                            return !0;
                        case "false":
                        case "no":
                        case "0":
                        case null:
                            return !1;
                        default:
                            return !!t
                    }
                }, t.removeFromArray = function(t, e) {
                    var n;
                    if (void 0 !== e && void 0 !== t)
                        for (n = t.length - 1; 0 <= n; n--) t[n] == e && t.splice(n, 1)
                }, t.getPath = function() {
                    var t = document.getElementsByTagName("script");
                    if (t)
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e].src;
                            if (-1 !== n.search(/\/(amcharts|ammap)\.js/)) return n.replace(/\/(amcharts|ammap)\.js.*/, "/")
                        }
                }, t.normalizeUrl = function(t) {
                    return "" !== t && -1 === t.search(/\/$/) ? t + "/" : t
                }, t.isAbsolute = function(t) {
                    return 0 === t.search(/^http[s]?:|^\//)
                }, t.isInArray = function(t, e) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n] == e) return !0;
                    return !1
                }, t.getDecimals = function(t) {
                    var e = 0;
                    return isNaN(t) || (-1 != (t = String(t)).indexOf("e-") ? e = Number(t.split("-")[1]) : -1 != t.indexOf(".") && (e = t.split(".")[1].length)), e
                }, t.wordwrap = function(e, n, i, l) {
                    var s, a, o, r;
                    if (e += "", 1 > n) return e;
                    for (s = -1, e = (r = e.split(/\r\n|\n|\r/)).length; ++s < e; r[s] += o) {
                        for (o = r[s], r[s] = ""; o.length > n; r[s] += t.trim(o.slice(0, a)) + ((o = o.slice(a)).length ? i : "")) a = 2 == l || (a = o.slice(0, n + 1).match(/\S*(\s)?$/))[1] ? n : a.input.length - a[0].length || 1 == l && n || a.input.length + (a = o.slice(n).match(/^\S*/))[0].length;
                        o = t.trim(o)
                    }
                    return r.join(i)
                }, t.trim = function(t) {
                    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }, t.wrappedText = function(e, n, i, l, s, a, o, r) {
                    var u = t.text(e, n, i, l, s, a, o);
                    if (u) {
                        var h = u.getBBox();
                        if (h.width > r) {
                            var d = "\n";
                            t.isModern || (d = "<br>"), 2 < (r = Math.floor(r / (h.width / n.length))) && (r -= 2), n = t.wordwrap(n, r, d, !0), u.remove(), u = t.text(e, n, i, l, s, a, o)
                        }
                    }
                    return u
                }, t.getStyle = function(t, e) {
                    var n = "";
                    if (document.defaultView && document.defaultView.getComputedStyle) try {
                        n = document.defaultView.getComputedStyle(t, "").getPropertyValue(e)
                    } catch (t) {} else t.currentStyle && (e = e.replace(/\-(\w)/g, function(t, e) {
                        return e.toUpperCase()
                    }), n = t.currentStyle[e]);
                    return n
                }, t.removePx = function(t) {
                    if (void 0 !== t) return Number(t.substring(0, t.length - 2))
                }, t.getURL = function(e, n) {
                    if (e)
                        if ("_self" != n && n)
                            if ("_top" == n && window.top) window.top.location.href = e;
                            else if ("_parent" == n && window.parent) window.parent.location.href = e;
                    else if ("_blank" == n) window.open(e);
                    else {
                        var i = document.getElementsByName(n)[0];
                        i ? i.src = e : (i = t.windows[n]) && i.opener && !i.opener.closed ? i.location.href = e : t.windows[n] = window.open(e)
                    } else window.location.href = e
                }, t.ifArray = function(t) {
                    return !!(t && "object" == typeof t && 0 < t.length)
                }, t.callMethod = function(t, e) {
                    var n;
                    for (n = 0; n < e.length; n++) {
                        var i = e[n];
                        if (i) {
                            i[t] && i[t]();
                            var l, s = i.length;
                            if (0 < s)
                                for (l = 0; l < s; l++) {
                                    var a = i[l];
                                    a && a[t] && a[t]()
                                }
                        }
                    }
                }, t.toNumber = function(t) {
                    return "number" == typeof t ? t : Number(String(t).replace(/[^0-9\-.]+/g, ""))
                }, t.toColor = function(t) {
                    if ("" !== t && void 0 !== t)
                        if (-1 != t.indexOf(",")) {
                            var e;
                            for (t = t.split(","), e = 0; e < t.length; e++) {
                                var n = t[e].substring(t[e].length - 6, t[e].length);
                                t[e] = "#" + n
                            }
                        } else t = "#" + (t = t.substring(t.length - 6, t.length));
                    return t
                }, t.toCoordinate = function(t, e, n) {
                    var i;
                    return void 0 !== t && (t = String(t), n && n < e && (e = n), i = Number(t), -1 != t.indexOf("!") && (i = e - Number(t.substr(1))), -1 != t.indexOf("%") && (i = e * Number(t.substr(0, t.length - 1)) / 100)), i
                }, t.fitToBounds = function(t, e, n) {
                    return t < e && (t = e), t > n && (t = n), t
                }, t.isDefined = function(t) {
                    return void 0 !== t
                }, t.stripNumbers = function(t) {
                    return t.replace(/[0-9]+/g, "")
                }, t.roundTo = function(t, e) {
                    if (0 > e) return t;
                    var n = Math.pow(10, e);
                    return Math.round(t * n) / n
                }, t.toFixed = function(t, e) {
                    var n = !1;
                    0 > t && (n = !0, t = Math.abs(t));
                    var i = String(Math.round(t * Math.pow(10, e)));
                    if (0 < e) {
                        var l, s = i.length;
                        if (s < e)
                            for (l = 0; l < e - s; l++) i = "0" + i;
                        return "" === (s = i.substring(0, i.length - e)) && (s = 0), i = s + "." + i.substring(i.length - e, i.length), n ? "-" + i : i
                    }
                    return String(i)
                }, t.formatDuration = function(e, n, i, l, s, a) {
                    var o = t.intervals,
                        r = a.decimalSeparator;
                    if (e >= o[n].contains) {
                        var u = e - Math.floor(e / o[n].contains) * o[n].contains;
                        return "ss" == n ? 1 == (u = t.formatNumber(u, a)).split(r)[0].length && (u = "0" + u) : u = t.roundTo(u, a.precision), ("mm" == n || "hh" == n) && 10 > u && (u = "0" + u), i = u + "" + l[n] + i, e = Math.floor(e / o[n].contains), t.formatDuration(e, n = o[n].nextInterval, i, l, s, a)
                    }
                    if ("ss" == n && 1 == (e = t.formatNumber(e, a)).split(r)[0].length && (e = "0" + e), "mm" == n && (e = t.roundTo(e, a.precision)), ("mm" == n || "hh" == n) && 10 > e && (e = "0" + e), i = e + "" + l[n] + i, o[s].count > o[n].count)
                        for (e = o[n].count; e < o[s].count; e++) "ss" == (n = o[n].nextInterval) || "mm" == n || "hh" == n ? i = "00" + l[n] + i : "DD" == n && (i = "0" + l[n] + i);
                    return ":" == i.charAt(i.length - 1) && (i = i.substring(0, i.length - 1)), i
                }, t.formatNumber = function(e, n, i, l, s) {
                    e = t.roundTo(e, n.precision), isNaN(i) && (i = n.precision);
                    var a, o = n.decimalSeparator;
                    n = n.thousandsSeparator, void 0 == o && (o = ","), void 0 == n && (n = " "), a = 0 > e ? "-" : "", e = Math.abs(e);
                    var r = !1; - 1 != (d = String(e)).indexOf("e") && (r = !0), 0 <= i && !r && (d = t.toFixed(e, i));
                    var u = "";
                    if (r) u = d;
                    else {
                        var h, d = d.split(".");
                        for (h = (r = String(d[0])).length; 0 <= h; h -= 3) u = h != r.length ? 0 !== h ? r.substring(h - 3, h) + n + u : r.substring(h - 3, h) + u : r.substring(h - 3, h);
                        void 0 !== d[1] && (u = u + o + d[1]), void 0 !== i && 0 < i && "0" != u && (u = t.addZeroes(u, o, i))
                    }
                    return u = a + u, "" === a && !0 === l && 0 !== e && (u = "+" + u), !0 === s && (u += "%"), u
                }, t.addZeroes = function(e, n, i) {
                    return void 0 === (e = e.split(n))[1] && 0 < i && (e[1] = "0"), e[1].length < i ? (e[1] += "0", t.addZeroes(e[0] + n + e[1], n, i)) : void 0 !== e[1] ? e[0] + n + e[1] : e[0]
                }, t.scientificToNormal = function(t) {
                    var e, n;
                    if ("-" == (t = String(t).split("e"))[1].substr(0, 1)) {
                        for (e = "0.", n = 0; n < Math.abs(Number(t[1])) - 1; n++) e += "0";
                        e += t[0].split(".").join("")
                    } else {
                        var i = 0;
                        for ((e = t[0].split("."))[1] && (i = e[1].length), e = t[0].split(".").join(""), n = 0; n < Math.abs(Number(t[1])) - i; n++) e += "0"
                    }
                    return e
                }, t.toScientific = function(t, e) {
                    if (0 === t) return "0";
                    var n = Math.floor(Math.log(Math.abs(t)) * Math.LOG10E),
                        i = String(i).split(".").join(e);
                    return String(i) + "e" + n
                }, t.randomColor = function() {
                    return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6)
                }, t.hitTest = function(e, n, i) {
                    var l = !1,
                        s = e.x,
                        a = e.x + e.width,
                        o = e.y,
                        r = e.y + e.height,
                        u = t.isInRectangle;
                    return l || (l = u(s, o, n)), l || (l = u(s, r, n)), l || (l = u(a, o, n)), l || (l = u(a, r, n)), l || !0 === i || (l = t.hitTest(n, e, !0)), l
                }, t.isInRectangle = function(t, e, n) {
                    return t >= n.x - 5 && t <= n.x + n.width + 5 && e >= n.y - 5 && e <= n.y + n.height + 5
                }, t.isPercents = function(t) {
                    if (-1 != String(t).indexOf("%")) return !0
                }, t.formatValue = function(e, n, i, l, s, a, o, r) {
                    var u;
                    if (n)
                        for (void 0 === s && (s = ""), u = 0; u < i.length; u++) {
                            var h = i[u],
                                d = n[h];
                            void 0 !== d && (d = a ? t.addPrefix(d, r, o, l) : t.formatNumber(d, l), e = e.replace(new RegExp("\\[\\[" + s + h + "\\]\\]", "g"), d))
                        }
                    return e
                }, t.formatDataContextValue = function(t, e) {
                    if (t) {
                        var n, i = t.match(/\[\[.*?\]\]/g);
                        for (n = 0; n < i.length; n++) {
                            var l;
                            void 0 !== e[l = (l = i[n]).substr(2, l.length - 4)] && (t = t.replace(new RegExp("\\[\\[" + l + "\\]\\]", "g"), e[l]))
                        }
                    }
                    return t
                }, t.massReplace = function(t, e) {
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var i = e[n];
                            void 0 === i && (i = ""), t = t.replace(n, i)
                        } return t
                }, t.cleanFromEmpty = function(t) {
                    return t.replace(/\[\[[^\]]*\]\]/g, "")
                }, t.addPrefix = function(e, n, i, l, s) {
                    var a, o, r, u = t.formatNumber(e, l),
                        h = "";
                    if (0 === e) return "0";
                    if (0 > e && (h = "-"), 1 < (e = Math.abs(e))) {
                        for (a = n.length - 1; - 1 < a; a--)
                            if (e >= n[a].number && (o = e / n[a].number, 1 > (r = Number(l.precision)) && (r = 1), i = t.roundTo(o, r), r = t.formatNumber(i, {
                                    precision: -1,
                                    decimalSeparator: l.decimalSeparator,
                                    thousandsSeparator: l.thousandsSeparator
                                }), !s || o == i)) {
                                u = h + "" + r + n[a].prefix;
                                break
                            }
                    } else
                        for (a = 0; a < i.length; a++)
                            if (e <= i[a].number) {
                                o = e / i[a].number, r = Math.abs(Math.floor(Math.log(o) * Math.LOG10E)), u = h + "" + (o = t.roundTo(o, r)) + i[a].prefix;
                                break
                            } return u
                }, t.remove = function(t) {
                    t && t.remove()
                }, t.getEffect = function(t) {
                    return ">" == t && (t = "easeOutSine"), "<" == t && (t = "easeInSine"), "elastic" == t && (t = "easeOutElastic"), t
                }, t.getObjById = function(t, e) {
                    var n, i;
                    for (i = 0; i < t.length; i++) {
                        var l = t[i];
                        if (l.id == e) {
                            n = l;
                            break
                        }
                    }
                    return n
                }, t.applyTheme = function(e, n, i) {
                    n || (n = t.theme);
                    try {
                        n = JSON.parse(JSON.stringify(n))
                    } catch (t) {}
                    n && n[i] && t.extend(e, n[i])
                }, t.isString = function(t) {
                    return "string" == typeof t
                }, t.extend = function(t, e, n) {
                    var i;
                    for (i in t || (t = {}), e) n && t.hasOwnProperty(i) || (t[i] = e[i]);
                    return t
                }, t.copyProperties = function(t, e) {
                    for (var n in t) t.hasOwnProperty(n) && "events" != n && void 0 !== t[n] && "function" != typeof t[n] && "cname" != n && (e[n] = t[n])
                }, t.processObject = function(e, n, i, l) {
                    if (0 == e instanceof n && (e = l ? t.extend(new n(i), e) : t.extend(e, new n(i), !0)).listeners)
                        for (var s in e.listeners) e.addListener((n = e.listeners[s]).event, n.method);
                    return e
                }, t.fixNewLines = function(t) {
                    var e = RegExp("\\n", "g");
                    return t && (t = t.replace(e, "<br />")), t
                }, t.fixBrakes = function(e) {
                    if (t.isModern) {
                        var n = RegExp("<br>", "g");
                        e && (e = e.replace(n, "\n"))
                    } else e = t.fixNewLines(e);
                    return e
                }, t.deleteObject = function(e, n) {
                    if (e && (void 0 !== n && null !== n || (n = 20), 0 !== n))
                        if ("[object Array]" === Object.prototype.toString.call(e))
                            for (var i = 0; i < e.length; i++) t.deleteObject(e[i], n - 1), e[i] = null;
                        else if (e && !e.tagName) try {
                        for (i in e.theme = null, e) e[i] && ("object" == typeof e[i] && t.deleteObject(e[i], n - 1), "function" != typeof e[i] && (e[i] = null))
                    } catch (t) {}
                }, t.bounce = function(t, e, n, i, l) {
                    return (e /= l) < 1 / 2.75 ? 7.5625 * i * e * e + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
                }, t.easeInOutQuad = function(t, e, n, i, l) {
                    return 1 > (e /= l / 2) ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
                }, t.easeInSine = function(t, e, n, i, l) {
                    return -i * Math.cos(e / l * (Math.PI / 2)) + i + n
                }, t.easeOutSine = function(t, e, n, i, l) {
                    return i * Math.sin(e / l * (Math.PI / 2)) + n
                }, t.easeOutElastic = function(t, e, n, i, l) {
                    t = 1.70158;
                    var s = 0,
                        a = i;
                    return 0 === e ? n : 1 == (e /= l) ? n + i : (s || (s = .3 * l), a < Math.abs(i) ? (a = i, t = s / 4) : t = s / (2 * Math.PI) * Math.asin(i / a), a * Math.pow(2, -10 * e) * Math.sin(2 * (e * l - t) * Math.PI / s) + i + n)
                }, t.fixStepE = function(e) {
                    e = e.toExponential(0).split("e");
                    var n = Number(e[1]);
                    return 9 == Number(e[0]) && n++, t.generateNumber(1, n)
                }, t.generateNumber = function(t, e) {
                    var n, i, l = "";
                    for (n = 0 > e ? Math.abs(e) - 1 : Math.abs(e), i = 0; i < n; i++) l += "0";
                    return 0 > e ? Number("0." + l + String(t)) : Number(String(t) + l)
                }, t.setCN = function(t, e, n, i) {
                    if (t.addClassNames && e && (e = e.node) && n) {
                        var l = e.getAttribute("class");
                        t = t.classNamePrefix + "-", i && (t = ""), e.setAttribute("class", l ? l + " " + t + n : t + n)
                    }
                }, t.removeCN = function(t, e, n) {
                    e && (e = e.node) && n && (e = e.classList) && e.remove(t.classNamePrefix + "-" + n)
                }, t.parseDefs = function(e, n) {
                    for (var i in e) {
                        var l = typeof e[i];
                        if (0 < e[i].length && "object" == l)
                            for (var s = 0; s < e[i].length; s++) l = document.createElementNS(t.SVG_NS, i), n.appendChild(l), t.parseDefs(e[i][s], l);
                        else "object" == l ? (l = document.createElementNS(t.SVG_NS, i), n.appendChild(l), t.parseDefs(e[i], l)) : n.setAttribute(i, e[i])
                    }
                }
            }(),
            function() {
                var t = window.AmCharts;
                t.AxisBase = t.Class({
                    construct: function(e) {
                        this.createEvents("clickItem", "rollOverItem", "rollOutItem", "rollOverGuide", "rollOutGuide", "clickGuide"), this.titleDY = this.y = this.x = this.dy = this.dx = 0, this.axisThickness = 1, this.axisColor = "#000000", this.axisAlpha = 1, this.gridCount = this.tickLength = 5, this.gridAlpha = .15, this.gridThickness = 1, this.gridColor = "#000000", this.dashLength = 0, this.labelFrequency = 1, this.showLastLabel = this.showFirstLabel = !0, this.fillColor = "#FFFFFF", this.fillAlpha = 0, this.labelsEnabled = !0, this.labelRotation = 0, this.autoGridCount = !0, this.offset = 0, this.guides = [], this.visible = !0, this.counter = 0, this.guides = [], this.ignoreAxisWidth = this.inside = !1, this.minHorizontalGap = 75, this.minVerticalGap = 35, this.titleBold = !0, this.minorGridEnabled = !1, this.minorGridAlpha = .07, this.autoWrap = !1, this.titleAlign = "middle", this.labelOffset = 0, this.bcn = "axis-", this.centerLabels = !1, this.firstDayOfWeek = 1, this.centerLabelOnFullPeriod = this.markPeriodChange = this.boldPeriodBeginning = !0, this.titleWidth = 0, this.periods = [{
                            period: "fff",
                            count: 1
                        }, {
                            period: "fff",
                            count: 5
                        }, {
                            period: "fff",
                            count: 10
                        }, {
                            period: "fff",
                            count: 50
                        }, {
                            period: "fff",
                            count: 100
                        }, {
                            period: "fff",
                            count: 500
                        }, {
                            period: "ss",
                            count: 1
                        }, {
                            period: "ss",
                            count: 5
                        }, {
                            period: "ss",
                            count: 10
                        }, {
                            period: "ss",
                            count: 30
                        }, {
                            period: "mm",
                            count: 1
                        }, {
                            period: "mm",
                            count: 5
                        }, {
                            period: "mm",
                            count: 10
                        }, {
                            period: "mm",
                            count: 30
                        }, {
                            period: "hh",
                            count: 1
                        }, {
                            period: "hh",
                            count: 3
                        }, {
                            period: "hh",
                            count: 6
                        }, {
                            period: "hh",
                            count: 12
                        }, {
                            period: "DD",
                            count: 1
                        }, {
                            period: "DD",
                            count: 2
                        }, {
                            period: "DD",
                            count: 3
                        }, {
                            period: "DD",
                            count: 4
                        }, {
                            period: "DD",
                            count: 5
                        }, {
                            period: "WW",
                            count: 1
                        }, {
                            period: "MM",
                            count: 1
                        }, {
                            period: "MM",
                            count: 2
                        }, {
                            period: "MM",
                            count: 3
                        }, {
                            period: "MM",
                            count: 6
                        }, {
                            period: "YYYY",
                            count: 1
                        }, {
                            period: "YYYY",
                            count: 2
                        }, {
                            period: "YYYY",
                            count: 5
                        }, {
                            period: "YYYY",
                            count: 10
                        }, {
                            period: "YYYY",
                            count: 50
                        }, {
                            period: "YYYY",
                            count: 100
                        }], this.dateFormats = [{
                            period: "fff",
                            format: "NN:SS.QQQ"
                        }, {
                            period: "ss",
                            format: "JJ:NN:SS"
                        }, {
                            period: "mm",
                            format: "JJ:NN"
                        }, {
                            period: "hh",
                            format: "JJ:NN"
                        }, {
                            period: "DD",
                            format: "MMM DD"
                        }, {
                            period: "WW",
                            format: "MMM DD"
                        }, {
                            period: "MM",
                            format: "MMM"
                        }, {
                            period: "YYYY",
                            format: "YYYY"
                        }], this.nextPeriod = {
                            fff: "ss",
                            ss: "mm",
                            mm: "hh",
                            hh: "DD",
                            DD: "MM",
                            MM: "YYYY"
                        }, t.applyTheme(this, e, "AxisBase")
                    },
                    zoom: function(t, e) {
                        this.start = t, this.end = e, this.dataChanged = !0, this.draw()
                    },
                    fixAxisPosition: function() {
                        var t = this.position;
                        "H" == this.orientation ? ("left" == t && (t = "bottom"), "right" == t && (t = "top")) : ("bottom" == t && (t = "left"), "top" == t && (t = "right")), this.position = t
                    },
                    init: function() {
                        this.createBalloon()
                    },
                    draw: function() {
                        var t = this.chart;
                        this.prevBY = this.prevBX = NaN, this.allLabels = [], this.counter = 0, this.destroy(), this.fixAxisPosition(), this.setBalloonBounds(), this.labels = [];
                        var e = t.container,
                            n = e.set();
                        t.gridSet.push(n), this.set = n, e = e.set(), t.axesLabelsSet.push(e), this.labelsSet = e, this.axisLine = new this.axisRenderer(this), this.autoGridCount ? ("V" == this.orientation ? 3 > (t = this.height / this.minVerticalGap) && (t = 3) : t = this.width / this.minHorizontalGap, this.gridCountR = Math.max(t, 1)) : this.gridCountR = this.gridCount, this.axisWidth = this.axisLine.axisWidth, this.addTitle()
                    },
                    setOrientation: function(t) {
                        this.orientation = t ? "H" : "V"
                    },
                    addTitle: function() {
                        var e = this.title;
                        if (this.titleLabel = null, e) {
                            var n = this.chart,
                                i = this.titleColor;
                            void 0 === i && (i = n.color);
                            var l = this.titleFontSize;
                            isNaN(l) && (l = n.fontSize + 1), e = t.text(n.container, e, i, n.fontFamily, l, this.titleAlign, this.titleBold), t.setCN(n, e, this.bcn + "title"), this.titleLabel = e
                        }
                    },
                    positionTitle: function() {
                        var e = this.titleLabel;
                        if (e) {
                            var n, i, l = {};
                            0 < (s = this.labelsSet).length() ? l = s.getBBox() : (l.x = 0, l.y = 0, l.width = this.width, l.height = this.height, t.VML && (l.y += this.y, l.x += this.x)), s.push(e);
                            var s = l.x,
                                a = l.y;
                            t.VML && (a -= this.y, s -= this.x);
                            var o = l.width,
                                r = (l = l.height, this.width),
                                u = this.height,
                                h = 0,
                                d = e.getBBox().height / 2,
                                c = this.inside,
                                p = this.titleAlign;
                            switch (this.position) {
                                case "top":
                                    n = "left" == p ? -1 : "right" == p ? r : r / 2, i = a - 10 - d;
                                    break;
                                case "bottom":
                                    n = "left" == p ? -1 : "right" == p ? r : r / 2, i = a + l + 10 + d;
                                    break;
                                case "left":
                                    n = s - 10 - d, c && (n -= 5), h = -90, i = ("left" == p ? u + 1 : "right" == p ? -1 : u / 2) + this.titleDY, this.titleWidth = d + 10;
                                    break;
                                case "right":
                                    n = s + o + 10 + d, c && (n += 7), i = ("left" == p ? u + 2 : "right" == p ? -2 : u / 2) + this.titleDY, this.titleWidth = d + 10, h = -90
                            }
                            this.marginsChanged ? (e.translate(n, i), this.tx = n, this.ty = i) : e.translate(this.tx, this.ty), this.marginsChanged = !1, isNaN(this.titleRotation) || (h = this.titleRotation), 0 !== h && e.rotate(h)
                        }
                    },
                    pushAxisItem: function(t, e) {
                        var n = this,
                            i = t.graphics();
                        0 < i.length() && (e ? n.labelsSet.push(i) : n.set.push(i)), (i = t.getLabel()) && (n.labelsSet.push(i), i.click(function(e) {
                            n.handleMouse(e, t, "clickItem")
                        }).touchend(function(e) {
                            n.handleMouse(e, t, "clickItem")
                        }).mouseover(function(e) {
                            n.handleMouse(e, t, "rollOverItem")
                        }).mouseout(function(e) {
                            n.handleMouse(e, t, "rollOutItem")
                        }))
                    },
                    handleMouse: function(t, e, n) {
                        this.fire({
                            type: n,
                            value: e.value,
                            serialDataItem: e.serialDataItem,
                            axis: this,
                            target: e.label,
                            chart: this.chart,
                            event: t
                        })
                    },
                    addGuide: function(e) {
                        for (var n = this.guides, i = !1, l = n.length, s = 0; s < n.length; s++) n[s] == e && (i = !0, l = s);
                        (e = t.processObject(e, t.Guide, this.theme)).id || (e.id = "guideAuto" + l + "_" + (new Date).getTime()), i || n.push(e)
                    },
                    removeGuide: function(t) {
                        var e, n = this.guides;
                        for (e = 0; e < n.length; e++) n[e] == t && n.splice(e, 1)
                    },
                    handleGuideOver: function(t) {
                        clearTimeout(this.chart.hoverInt);
                        var e = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        t.graphics && (e = t.graphics.getBBox());
                        var n = this.x + e.x + e.width / 2,
                            i = (e = this.y + e.y + e.height / 2, t.fillColor);
                        void 0 === i && (i = t.lineColor), this.chart.showBalloon(t.balloonText, i, !0, n, e), this.fire({
                            type: "rollOverGuide",
                            guide: t,
                            chart: this.chart
                        })
                    },
                    handleGuideOut: function(t) {
                        this.chart.hideBalloon(), this.fire({
                            type: "rollOutGuide",
                            guide: t,
                            chart: this.chart
                        })
                    },
                    handleGuideClick: function(t) {
                        this.chart.hideBalloon(), this.fire({
                            type: "clickGuide",
                            guide: t,
                            chart: this.chart
                        })
                    },
                    addEventListeners: function(t, e) {
                        var n = this;
                        t.mouseover(function() {
                            n.handleGuideOver(e)
                        }), t.mouseup(function() {
                            n.handleGuideClick(e)
                        }), t.touchstart(function() {
                            n.handleGuideOver(e)
                        }), t.mouseout(function() {
                            n.handleGuideOut(e)
                        })
                    },
                    getBBox: function() {
                        var e;
                        return this.labelsSet && (e = this.labelsSet.getBBox()), e ? t.VML || (e = {
                            x: e.x + this.x,
                            y: e.y + this.y,
                            width: e.width,
                            height: e.height
                        }) : e = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }, e
                    },
                    destroy: function() {
                        t.remove(this.set), t.remove(this.labelsSet);
                        var e = this.axisLine;
                        e && t.remove(e.axisSet), t.remove(this.grid0)
                    },
                    chooseMinorFrequency: function(t) {
                        for (var e = 10; 0 < e; e--)
                            if (t / e == Math.round(t / e)) return t / e
                    },
                    parseDatesDraw: function() {
                        var e, n, i, l, s, a, o, r = this.chart,
                            u = this.showFirstLabel,
                            h = this.showLastLabel,
                            d = "",
                            c = t.extractPeriod(this.minPeriod),
                            p = t.getPeriodDuration(c.period, c.count),
                            g = this.firstDayOfWeek,
                            f = this.boldPeriodBeginning;
                        e = this.minorGridEnabled;
                        var m, v, b, y = this.gridAlpha,
                            A = (b = this.choosePeriod(0)).period,
                            x = t.getPeriodDuration(A, b = b.count);
                        x < p && (A = c.period, b = c.count, x = p), "WW" == (c = A) && (c = "DD"), this.stepWidth = this.getStepWidth(this.timeDifference);
                        var C = Math.ceil(this.timeDifference / x) + 5,
                            w = i = t.resetDateToMin(new Date(this.startTime - x), A, b, g).getTime();
                        (c == A && 1 == b && this.centerLabelOnFullPeriod || this.autoWrap || this.centerLabels) && (s = x * this.stepWidth, this.autoWrap && !this.centerLabels && (s = -s)), this.cellWidth = p * this.stepWidth, p = -1, (a = Math.round(i / x)) / 2 == Math.round(a / 2) && (p = -2, i -= x), a = this.firstTime;
                        var k = 0,
                            M = 0;
                        if (e && 1 < b && (m = this.chooseMinorFrequency(b), v = t.getPeriodDuration(A, m), "DD" == A && (v += t.getPeriodDuration("hh")), "fff" == A && (v = 1)), 0 < this.gridCountR)
                            for (C - 5 - p > this.autoRotateCount && !isNaN(this.autoRotateAngle) && (this.labelRotationR = this.autoRotateAngle), e = p; e <= C; e++) {
                                if (o = a + x * (e + Math.floor((w - a) / x)) - k, "DD" == A && (o += 36e5), o = t.resetDateToMin(new Date(o), A, b, g).getTime(), "MM" == A && (n = (o - i) / x, 1.5 <= (o - i) / x && (o = o - (n - 1) * x + t.getPeriodDuration("DD", 3), o = t.resetDateToMin(new Date(o), A, 1).getTime(), k += x)), n = (o - this.startTime) * this.stepWidth, "radar" == r.type) {
                                    if (0 > (n = this.axisWidth - n) || n > this.axisWidth) continue
                                } else this.rotate ? "date" == this.type && "middle" == this.gridPosition && (M = -x * this.stepWidth / 2) : "date" == this.type && (n = this.axisWidth - n);
                                if (d = !1, this.nextPeriod[c] && (d = this.checkPeriodChange(this.nextPeriod[c], 1, o, i, c)), i = !1, d && this.markPeriodChange ? (d = this.dateFormatsObject[this.nextPeriod[c]], this.twoLineMode && (d = t.fixBrakes(d = this.dateFormatsObject[c] + "\n" + d)), i = !0) : d = this.dateFormatsObject[c], f || (i = !1), this.currentDateFormat = d, d = t.formatDate(new Date(o), d, r), (e == p && !u || e == C && !h) && (d = " "), this.labelFunction && (d = this.labelFunction(d, new Date(o), this, A, b, l).toString()), this.boldLabels && (i = !0), l = new this.axisItemRenderer(this, n, d, !1, s, M, !1, i), this.pushAxisItem(l), l = i = o, !isNaN(m))
                                    for (n = 1; n < b; n += m) this.gridAlpha = this.minorGridAlpha, d = o + v * n, d = t.resetDateToMin(new Date(d), A, m, g).getTime(), d = new this.axisItemRenderer(this, (d - this.startTime) * this.stepWidth, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), this.pushAxisItem(d);
                                this.gridAlpha = y
                            }
                    },
                    choosePeriod: function(e) {
                        var n = t.getPeriodDuration(this.periods[e].period, this.periods[e].count),
                            i = this.periods;
                        return this.timeDifference < n && 0 < e ? i[e - 1] : Math.ceil(this.timeDifference / n) <= this.gridCountR ? i[e] : e + 1 < i.length ? this.choosePeriod(e + 1) : i[e]
                    },
                    getStepWidth: function(t) {
                        var e;
                        return this.startOnAxis ? (e = this.axisWidth / (t - 1), 1 == t && (e = this.axisWidth)) : e = this.axisWidth / t, e
                    },
                    timeZoom: function(t, e) {
                        this.startTime = t, this.endTime = e
                    },
                    minDuration: function() {
                        var e = t.extractPeriod(this.minPeriod);
                        return t.getPeriodDuration(e.period, e.count)
                    },
                    checkPeriodChange: function(e, n, i, l, s) {
                        i = new Date(i);
                        var a = new Date(l),
                            o = this.firstDayOfWeek;
                        return l = n, "DD" == e && (n = 1), i = t.resetDateToMin(i, e, n, o).getTime(), n = t.resetDateToMin(a, e, n, o).getTime(), !("DD" == e && "hh" != s && i - n < t.getPeriodDuration(e, l) - t.getPeriodDuration("hh", 1)) && i != n
                    },
                    generateDFObject: function() {
                        var t;
                        for (this.dateFormatsObject = {}, t = 0; t < this.dateFormats.length; t++) {
                            var e = this.dateFormats[t];
                            this.dateFormatsObject[e.period] = e.format
                        }
                    },
                    hideBalloon: function() {
                        this.balloon && this.balloon.hide && this.balloon.hide(), this.prevBY = this.prevBX = NaN
                    },
                    formatBalloonText: function(t) {
                        return t
                    },
                    showBalloon: function(t, e, n, i) {
                        var l, s = this.offset;
                        switch (this.position) {
                            case "bottom":
                                e = this.height + s;
                                break;
                            case "top":
                                e = -s;
                                break;
                            case "left":
                                t = -s;
                                break;
                            case "right":
                                t = this.width + s
                        }
                        if (n || (n = this.currentDateFormat), "V" == this.orientation) {
                            if (0 > e || e > this.height) return;
                            if (isNaN(e)) return void this.hideBalloon();
                            e = this.adjustBalloonCoordinate(e, i), i = this.coordinateToValue(e)
                        } else {
                            if (0 > t || t > this.width) return;
                            if (isNaN(t)) return void this.hideBalloon();
                            t = this.adjustBalloonCoordinate(t, i), i = this.coordinateToValue(t)
                        }(s = this.chart.chartCursor) && (l = s.index), this.balloon && void 0 !== i && this.balloon.enabled && (this.balloonTextFunction ? ("date" != this.type && !0 !== this.parseDates || (i = new Date(i)), i = this.balloonTextFunction(i)) : this.balloonText ? i = this.formatBalloonText(this.balloonText, l, n) : isNaN(i) || (i = this.formatValue(i, n)), t == this.prevBX && e == this.prevBY || (this.balloon.setPosition(t, e), this.prevBX = t, this.prevBY = e, i && this.balloon.showBalloon(i)))
                    },
                    adjustBalloonCoordinate: function(t) {
                        return t
                    },
                    createBalloon: function() {
                        var e = this.chart,
                            n = e.chartCursor;
                        n && ("mouse" != (n = n.cursorPosition) && (this.stickBalloonToCategory = !0), "start" == n && (this.stickBalloonToStart = !0), "ValueAxis" == this.cname && (this.stickBalloonToCategory = !1)), this.balloon && (this.balloon.destroy && this.balloon.destroy(), t.extend(this.balloon, e.balloon, !0))
                    },
                    setBalloonBounds: function() {
                        var t = this.balloon;
                        if (t) {
                            var e = this.chart;
                            t.cornerRadius = 0, t.shadowAlpha = 0, t.borderThickness = 1, t.borderAlpha = 1, t.adjustBorderColor = !1, t.showBullet = !1, this.balloon = t, t.chart = e, t.mainSet = e.plotBalloonsSet, t.pointerWidth = this.tickLength, (this.parseDates || "date" == this.type) && (t.pointerWidth = 0), t.className = this.id, e = "V", "V" == this.orientation && (e = "H"), this.stickBalloonToCategory || (t.animationDuration = 0);
                            var n, i, l, s, a = this.inside,
                                o = this.width,
                                r = this.height;
                            switch (this.position) {
                                case "bottom":
                                    n = 0, i = o, a ? (l = 0, s = r) : (l = r, s = r + 1e3);
                                    break;
                                case "top":
                                    n = 0, i = o, a ? (l = 0, s = r) : (l = -1e3, s = 0);
                                    break;
                                case "left":
                                    l = 0, s = r, a ? (n = 0, i = o) : (n = -1e3, i = 0);
                                    break;
                                case "right":
                                    l = 0, s = r, a ? (n = 0, i = o) : (n = o, i = o + 1e3)
                            }
                            t.drop || (t.pointerOrientation = e), t.setBounds(n, l, i, s)
                        }
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.ValueAxis = t.Class({
                    inherits: t.AxisBase,
                    construct: function(e) {
                        this.cname = "ValueAxis", this.createEvents("axisChanged", "logarithmicAxisFailed", "axisZoomed", "axisIntZoomed"), t.ValueAxis.base.construct.call(this, e), this.dataChanged = !0, this.stackType = "none", this.position = "left", this.unitPosition = "right", this.includeAllValues = this.recalculateToPercents = this.includeHidden = this.includeGuidesInMinMax = this.integersOnly = !1, this.durationUnits = {
                            DD: "d. ",
                            hh: ":",
                            mm: ":",
                            ss: ""
                        }, this.scrollbar = !1, this.baseValue = 0, this.radarCategoriesEnabled = !0, this.axisFrequency = 1, this.gridType = "polygons", this.useScientificNotation = !1, this.axisTitleOffset = 10, this.pointPosition = "axis", this.minMaxMultiplier = 1, this.logGridLimit = 2, this.totalTextOffset = this.treatZeroAs = 0, this.minPeriod = "ss", this.relativeStart = 0, this.relativeEnd = 1, t.applyTheme(this, e, this.cname)
                    },
                    updateData: function() {
                        0 >= this.gridCountR && (this.gridCountR = 1), this.totals = [], this.data = this.chart.chartData;
                        var e = this.chart;
                        "xy" != e.type && (this.stackGraphs("smoothedLine"), this.stackGraphs("line"), this.stackGraphs("column"), this.stackGraphs("step")), this.recalculateToPercents && this.recalculate(), this.synchronizationMultiplier && this.synchronizeWith ? (t.isString(this.synchronizeWith) && (this.synchronizeWith = e.getValueAxisById(this.synchronizeWith)), this.synchronizeWith && (this.synchronizeWithAxis(this.synchronizeWith), this.foundGraphs = !0)) : (this.foundGraphs = !1, this.getMinMax(), (0 === this.start && this.end == this.data.length - 1 && isNaN(this.minZoom) && isNaN(this.maxZoom) || isNaN(this.fullMin) && isNaN(this.fullMax)) && (this.fullMin = this.min, this.fullMax = this.max, "date" != this.type && this.strictMinMax && (isNaN(this.minimum) || (this.fullMin = this.minimum), isNaN(this.maximum) || (this.fullMax = this.maximum)), this.logarithmic && (this.fullMin = this.logMin, 0 === this.fullMin && (this.fullMin = this.treatZeroAs)), "date" == this.type && (this.minimumDate || (this.fullMin = this.minRR), this.maximumDate || (this.fullMax = this.maxRR), this.strictMinMax && (this.minimumDate && (this.fullMin = this.minimumDate.getTime()), this.maximumDate && (this.fullMax = this.maximumDate.getTime())))))
                    },
                    draw: function() {
                        t.ValueAxis.base.draw.call(this);
                        var e = this.chart,
                            n = this.set;
                        this.labelRotationR = this.labelRotation, t.setCN(e, this.set, "value-axis value-axis-" + this.id), t.setCN(e, this.labelsSet, "value-axis value-axis-" + this.id), t.setCN(e, this.axisLine.axisSet, "value-axis value-axis-" + this.id);
                        var i = this.type;
                        if ("duration" == i && (this.duration = "ss"), !0 === this.dataChanged && (this.updateData(), this.dataChanged = !1), "date" == i && (this.logarithmic = !1, this.min = this.minRR, this.max = this.maxRR, this.reversed = !1, this.getDateMinMax()), this.logarithmic) {
                            var l = this.treatZeroAs,
                                s = this.getExtremes(0, this.data.length - 1).min;
                            if (!isNaN(this.minimum) && this.minimum < s && (s = this.minimum), this.logMin = s, this.minReal < s && (this.minReal = s), isNaN(this.minReal) && (this.minReal = s), 0 < l && 0 === s && (this.minReal = s = l), 0 >= s || 0 >= this.minimum) return void this.fire({
                                type: "logarithmicAxisFailed",
                                chart: e
                            })
                        }
                        this.grid0 = null;
                        var a, o, r = e.dx,
                            u = e.dy;
                        if (l = !1, s = this.logarithmic, isNaN(this.min) || isNaN(this.max) || !this.foundGraphs || 1 / 0 == this.min || -1 / 0 == this.max) l = !0;
                        else {
                            "date" == this.type && this.min == this.max && (this.max += this.minDuration(), this.min -= this.minDuration());
                            var h, d = this.labelFrequency,
                                c = this.showFirstLabel,
                                p = this.showLastLabel,
                                g = 1,
                                f = 0;
                            if (this.minCalc = this.min, this.maxCalc = this.max, this.strictMinMax && (isNaN(this.minimum) || (this.min = this.minimum), isNaN(this.maximum) || (this.max = this.maximum), this.min == this.max)) return;
                            if (isNaN(this.minZoom) || (this.minReal = this.min = this.minZoom), isNaN(this.maxZoom) || (this.max = this.maxZoom), this.logarithmic) {
                                o = this.fullMin;
                                var m = this.fullMax;
                                isNaN(this.minimum) || (o = this.minimum), isNaN(this.maximum) || (m = this.maximum), m = Math.log(m) * Math.LOG10E - Math.log(o) * Math.LOG10E;
                                var v = Math.log(this.max) / Math.LN10 - Math.log(o) * Math.LOG10E;
                                this.relativeStart = t.roundTo((Math.log(this.minReal) / Math.LN10 - Math.log(o) * Math.LOG10E) / m, 5), this.relativeEnd = t.roundTo(v / m, 5)
                            } else this.relativeStart = t.roundTo(t.fitToBounds((this.min - this.fullMin) / (this.fullMax - this.fullMin), 0, 1), 5), this.relativeEnd = t.roundTo(t.fitToBounds((this.max - this.fullMin) / (this.fullMax - this.fullMin), 0, 1), 5);
                            m = Math.round((this.maxCalc - this.minCalc) / this.step) + 1, !0 === s ? (h = Math.log(this.max) * Math.LOG10E - Math.log(this.minReal) * Math.LOG10E, this.stepWidth = this.axisWidth / h, h > this.logGridLimit && (m = Math.ceil(Math.log(this.max) * Math.LOG10E) + 1, f = Math.round(Math.log(this.minReal) * Math.LOG10E), m > this.gridCountR && (g = Math.ceil(m / this.gridCountR)))) : this.stepWidth = this.axisWidth / (this.max - this.min);
                            var b, y, A = 0;
                            for (1 > this.step && -1 < this.step && (A = t.getDecimals(this.step)), this.integersOnly && (A = 0), A > this.maxDecCount && (A = this.maxDecCount), v = this.precision, isNaN(v) || (A = v), isNaN(this.maxZoom) && (this.max = t.roundTo(this.max, this.maxDecCount), this.min = t.roundTo(this.min, this.maxDecCount)), (o = {}).precision = A, o.decimalSeparator = e.nf.decimalSeparator, o.thousandsSeparator = e.nf.thousandsSeparator, this.numberFormatter = o, this.exponential = !1, o = f; o < m; o += g) {
                                var x = t.roundTo(this.step * o + this.min, A); - 1 != String(x).indexOf("e") && (this.exponential = !0)
                            }
                            if (this.duration && (this.maxInterval = t.getMaxInterval(this.max, this.duration)), A = this.step, x = this.minorGridAlpha, this.minorGridEnabled && (y = this.getMinorGridStep(A, this.stepWidth * A)), this.autoGridCount || 0 !== this.gridCount)
                                if ("date" == i) this.generateDFObject(), this.timeDifference = this.max - this.min, this.maxTime = this.lastTime = this.max, this.startTime = this.firstTime = this.min, this.parseDatesDraw();
                                else
                                    for (m >= this.autoRotateCount && !isNaN(this.autoRotateAngle) && (this.labelRotationR = this.autoRotateAngle), i = this.minCalc, s && (i = this.maxCalc - ++m * A), this.gridCountReal = m, o = this.startCount = f; o < m; o += g)
                                        if (f = t.roundTo(f = A * o + i, this.maxDecCount + 1), (!this.integersOnly || Math.round(f) == f) && (isNaN(v) || Number(t.toFixed(f, v)) == f)) {
                                            if (!0 === s)
                                                if (h > this.logGridLimit) {
                                                    if ((f = Math.pow(10, o)) > this.max) continue
                                                } else if (0 >= f && 0 >= (f = i + A * o + A / 2)) continue;
                                            var C;
                                            if (b = this.formatValue(f, !1, o), Math.round(o / d) != o / d && (b = void 0), (0 === o && !c || o == m - 1 && !p) && (b = " "), a = this.getCoordinate(f), this.rotate && this.autoWrap && (C = this.stepWidth * A - 10), b = new this.axisItemRenderer(this, a, b, void 0, C, void 0, void 0, this.boldLabels), this.pushAxisItem(b), f == this.baseValue && "radar" != e.type) {
                                                var w, k, M = this.width,
                                                    S = this.height;
                                                "H" == this.orientation ? 0 <= a && a <= M + 1 && (w = [a, a, a + r], k = [S, 0, u]) : 0 <= a && a <= S + 1 && (w = [0, M, M + r], k = [a, a, a + u]), w && (a = t.fitToBounds(2 * this.gridAlpha, 0, 1), isNaN(this.zeroGridAlpha) || (a = this.zeroGridAlpha), (a = t.line(e.container, w, k, this.gridColor, a, 1, this.dashLength)).translate(this.x, this.y), this.grid0 = a, e.axesSet.push(a), a.toBack(), t.setCN(e, a, this.bcn + "zero-grid-" + this.id), t.setCN(e, a, this.bcn + "zero-grid"))
                                            }
                                            if (!isNaN(y) && 0 < x && o < m - 1) {
                                                for (a = A / y, s && (y = t.roundTo(y = A * (o + g) + this.minCalc, this.maxDecCount + 1), h > this.logGridLimit && (y = Math.pow(10, o + g)), y = (y - f) / (a = 9)), M = this.gridAlpha, this.gridAlpha = this.minorGridAlpha, S = 1; S < a; S++) {
                                                    var P = this.getCoordinate(f + y * S);
                                                    P = new this.axisItemRenderer(this, P, "", !1, 0, 0, !1, !1, 0, !0), this.pushAxisItem(P)
                                                }
                                                this.gridAlpha = M
                                            }
                                        } if (0 < (C = (h = this.guides).length)) {
                                for (w = this.fillAlpha, o = this.fillAlpha = 0; o < C; o++) r = NaN, y = (k = h[o]).above, isNaN(k.toValue) || (r = this.getCoordinate(k.toValue), b = new this.axisItemRenderer(this, r, "", !0, NaN, NaN, k), this.pushAxisItem(b, y)), u = NaN, isNaN(k.value) || (u = this.getCoordinate(k.value), b = new this.axisItemRenderer(this, u, k.label, !0, NaN, (r - u) / 2, k), this.pushAxisItem(b, y)), isNaN(r) && (r = 3 + (u -= 3)), b && (d = b.label) && this.addEventListeners(d, k), isNaN(r - u) || 0 > u && 0 > r || (r = new this.guideFillRenderer(this, u, r, k), this.pushAxisItem(r, y), y = r.graphics(), k.graphics = y, this.addEventListeners(y, k));
                                this.fillAlpha = w
                            }
                            b = this.baseValue, this.min > this.baseValue && this.max > this.baseValue && (b = this.min), this.min < this.baseValue && this.max < this.baseValue && (b = this.max), s && b < this.minReal && (b = this.minReal), this.baseCoord = this.getCoordinate(b, !0), (b = {
                                type: "axisChanged",
                                target: this,
                                chart: e
                            }).min = s ? this.minReal : this.min, b.max = this.max, this.fire(b), this.axisCreated = !0
                        }
                        s = this.axisLine.set, b = this.labelsSet, n.translate(this.x, this.y), b.translate(this.x, this.y), this.positionTitle(), "radar" != e.type && s.toFront(), !this.visible || l ? (n.hide(), s.hide(), b.hide()) : (n.show(), s.show(), b.show()), this.axisY = this.y, this.axisX = this.x
                    },
                    getDateMinMax: function() {
                        this.minimumDate && (this.minimumDate instanceof Date || (this.minimumDate = t.getDate(this.minimumDate, this.chart.dataDateFormat, "fff")), this.min = this.minimumDate.getTime()), this.maximumDate && (this.maximumDate instanceof Date || (this.maximumDate = t.getDate(this.maximumDate, this.chart.dataDateFormat, "fff")), this.max = this.maximumDate.getTime())
                    },
                    formatValue: function(e, n, i) {
                        var l = this.exponential,
                            s = this.logarithmic,
                            a = this.numberFormatter,
                            o = this.chart;
                        if (a) return !0 === this.logarithmic && (l = -1 != String(e).indexOf("e")), this.useScientificNotation && (l = !0), this.usePrefixes && (l = !1), l ? (l = (i = -1 == String(e).indexOf("e") ? e.toExponential(15) : String(e)).split("e"), i = Number(l[0]), l = Number(l[1]), i = t.roundTo(i, 14), n || isNaN(this.precision) || (i = t.roundTo(i, this.precision)), 10 == i && (i = 1, l += 1), i = i + "e" + l, 0 === e && (i = "0"), 1 == e && (i = "1")) : (s && ((l = String(e).split("."))[1] ? (a.precision = l[1].length, 0 > i && (a.precision = Math.abs(i)), n && 1 < e && (a.precision = 0), n || isNaN(this.precision) || (a.precision = this.precision)) : a.precision = -1), i = this.usePrefixes ? t.addPrefix(e, o.prefixesOfBigNumbers, o.prefixesOfSmallNumbers, a, !n) : t.formatNumber(e, a, a.precision)), this.duration && (n && (a.precision = 0), i = t.formatDuration(e, this.duration, "", this.durationUnits, this.maxInterval, a)), "date" == this.type && (i = t.formatDate(new Date(e), this.currentDateFormat, o)), this.recalculateToPercents ? i += "%" : (n = this.unit) && (i = "left" == this.unitPosition ? n + i : i + n), this.labelFunction && (i = "date" == this.type ? this.labelFunction(i, new Date(e), this).toString() : this.labelFunction(e, i, this).toString()), i
                    },
                    getMinorGridStep: function(t, e) {
                        var n = [5, 4, 2];
                        60 > e && n.shift();
                        for (var i = Math.floor(Math.log(Math.abs(t)) * Math.LOG10E), l = 0; l < n.length; l++) {
                            var s = t / n[l],
                                a = Math.floor(Math.log(Math.abs(s)) * Math.LOG10E);
                            if (!(1 < Math.abs(i - a)))
                                if (1 > t) {
                                    if ((a = Math.pow(10, -a) * s) == Math.round(a)) return s
                                } else if (s == Math.round(s)) return s
                        }
                        return 1
                    },
                    stackGraphs: function(e) {
                        var n = this.stackType;
                        "stacked" == n && (n = "regular"), "line" == n && (n = "none"), "100% stacked" == n && (n = "100%"), this.stackType = n;
                        var i, l, s, a, o, r, u = [],
                            h = [],
                            d = [],
                            c = [],
                            p = this.chart.graphs,
                            g = this.baseValue,
                            f = !1;
                        if ("line" != e && "step" != e && "smoothedLine" != e || (f = !0), f && ("regular" == n || "100%" == n))
                            for (o = 0; o < p.length; o++)(a = p[o]).stackGraph = null, a.hidden || (s = a.type, a.chart == this.chart && a.valueAxis == this && e == s && a.stackable && (l && (a.stackGraph = l), l = a));
                        for (l = this.end + 10, a = t.fitToBounds(a = this.start - 10, 0, o = this.data.length - 1), l = t.fitToBounds(l, 0, o), r = a; r <= l; r++) {
                            var m = 0;
                            for (o = 0; o < p.length; o++)
                                if ((a = p[o]).hidden) a.newStack && (d[r] = NaN, h[r] = NaN);
                                else if (s = a.type, a.chart == this.chart && a.valueAxis == this && e == s && a.stackable)
                                if (i = (s = this.data[r].axes[this.id].graphs[a.id]).values.value, isNaN(i)) a.newStack && (d[r] = NaN, h[r] = NaN);
                                else {
                                    var v = t.getDecimals(i);
                                    m < v && (m = v), isNaN(c[r]) ? c[r] = Math.abs(i) : c[r] += Math.abs(i), c[r] = t.roundTo(c[r], m), v = a.fillToGraph, f && v && (v = this.data[r].axes[this.id].graphs[v.id]) && (s.values.open = v.values.value), "regular" == n && (f && (isNaN(u[r]) ? (u[r] = i, s.values.close = i, s.values.open = this.baseValue) : (s.values.close = isNaN(i) ? u[r] : i + u[r], s.values.open = u[r], u[r] = s.values.close)), "column" == e && (a.newStack && (d[r] = NaN, h[r] = NaN), s.values.close = i, 0 > i ? (s.values.close = i, isNaN(h[r]) ? s.values.open = g : (s.values.close += h[r], s.values.open = h[r]), h[r] = s.values.close) : (s.values.close = i, isNaN(d[r]) ? s.values.open = g : (s.values.close += d[r], s.values.open = d[r]), d[r] = s.values.close)))
                                }
                        }
                        for (r = this.start; r <= this.end; r++)
                            for (o = 0; o < p.length; o++)(a = p[o]).hidden ? a.newStack && (d[r] = NaN, h[r] = NaN) : (s = a.type, a.chart == this.chart && a.valueAxis == this && e == s && a.stackable && (i = (s = this.data[r].axes[this.id].graphs[a.id]).values.value, isNaN(i) || (s.values.percents = u = i / c[r] * 100, s.values.total = c[r], a.newStack && (d[r] = NaN, h[r] = NaN), "100%" == n && (isNaN(h[r]) && (h[r] = 0), isNaN(d[r]) && (d[r] = 0), 0 > u ? (s.values.close = t.fitToBounds(u + h[r], -100, 100), s.values.open = h[r], h[r] = s.values.close) : (s.values.close = t.fitToBounds(u + d[r], -100, 100), s.values.open = d[r], d[r] = s.values.close)))))
                    },
                    recalculate: function() {
                        var e, n = this.chart,
                            i = n.graphs;
                        for (e = 0; e < i.length; e++) {
                            var l = i[e];
                            if (l.valueAxis == this) {
                                var s = "value";
                                "candlestick" != l.type && "ohlc" != l.type || (s = "open");
                                var a, o, r, u = this.end + 2;
                                if (u = t.fitToBounds(this.end + 1, 0, this.data.length - 1), 0 < (p = this.start) && p--, o = this.start, l.compareFromStart && (o = 0), !isNaN(n.startTime) && (r = n.categoryAxis)) {
                                    var h = r.minDuration(),
                                        d = (h = new Date(n.startTime + h / 2), t.resetDateToMin(new Date(n.startTime), r.minPeriod).getTime());
                                    t.resetDateToMin(new Date(h), r.minPeriod).getTime() > d && o++
                                }
                                for ((r = n.recalculateFromDate) && (r = t.getDate(r, n.dataDateFormat, "fff"), o = n.getClosestIndex(n.chartData, "time", r.getTime(), !0, 0, n.chartData.length), u = n.chartData.length - 1), r = o; r <= u && (a = (o = this.data[r].axes[this.id].graphs[l.id]).values[s], l.recalculateValue && (a = o.dataContext[l.valueField + l.recalculateValue]), isNaN(a)); r++);
                                for (this.recBaseValue = a, s = p; s <= u; s++) {
                                    (o = this.data[s].axes[this.id].graphs[l.id]).percents = {};
                                    var c, p = o.values;
                                    for (c in p) o.percents[c] = "percents" != c ? p[c] / a * 100 - 100 : p[c]
                                }
                            }
                        }
                    },
                    getMinMax: function() {
                        var e, n = !1,
                            i = this.chart,
                            l = i.graphs;
                        for (e = 0; e < l.length; e++) {
                            var s = l[e].type;
                            ("line" == s || "step" == s || "smoothedLine" == s) && this.expandMinMax && (n = !0)
                        }
                        if (n && (0 < this.start && this.start--, this.end < this.data.length - 1 && this.end++), "serial" == i.type && (!0 !== i.categoryAxis.parseDates || n || this.end < this.data.length - 1 && this.end++), this.includeAllValues && (this.start = 0, this.end = this.data.length - 1), n = this.minMaxMultiplier, i = this.getExtremes(this.start, this.end), this.min = i.min, this.max = i.max, this.minRR = this.min, this.maxRR = this.max, this.min -= n = (this.max - this.min) * (n - 1), this.max += n, n = this.guides.length, this.includeGuidesInMinMax && 0 < n)
                            for (i = 0; i < n; i++)(l = this.guides[i]).toValue < this.min && (this.min = l.toValue), l.value < this.min && (this.min = l.value), l.toValue > this.max && (this.max = l.toValue), l.value > this.max && (this.max = l.value);
                        isNaN(this.minimum) || (this.min = this.minimum), isNaN(this.maximum) || (this.max = this.maximum), "date" == this.type && this.getDateMinMax(), this.min > this.max && (n = this.max, this.max = this.min, this.min = n), isNaN(this.minZoom) || (this.min = this.minZoom), isNaN(this.maxZoom) || (this.max = this.maxZoom), this.minCalc = this.min, this.maxCalc = this.max, this.minReal = this.min, this.maxReal = this.max, 0 === this.min && 0 === this.max && (this.max = 9), this.min > this.max && (this.min = this.max - 1), n = this.min, i = this.max, e = 0 == (l = this.max - this.min) ? Math.pow(10, Math.floor(Math.log(Math.abs(this.max)) * Math.LOG10E)) / 10 : Math.pow(10, Math.floor(Math.log(Math.abs(l)) * Math.LOG10E)) / 10, isNaN(this.maximum) && (this.max = Math.ceil(this.max / e) * e + e), isNaN(this.minimum) && (this.min = Math.floor(this.min / e) * e - e), 0 > this.min && 0 <= n && (this.min = 0), 0 < this.max && 0 >= i && (this.max = 0), "100%" == this.stackType && (this.min = 0 > this.min ? -100 : 0, this.max = 0 > this.max ? 0 : 100), l = this.max - this.min, e = Math.pow(10, Math.floor(Math.log(Math.abs(l)) * Math.LOG10E)) / 10, this.step = Math.ceil(l / this.gridCountR / e) * e, l = Math.pow(10, Math.floor(Math.log(Math.abs(this.step)) * Math.LOG10E)), l = t.fixStepE(l), 5 < (e = Math.ceil(this.step / l)) && (e = 10), 5 >= e && 2 < e && (e = 5), this.step = Math.ceil(this.step / (l * e)) * l * e, isNaN(this.setStep) || (this.step = this.setStep), 1 > l ? (this.maxDecCount = Math.abs(Math.log(Math.abs(l)) * Math.LOG10E), this.maxDecCount = Math.round(this.maxDecCount), this.step = t.roundTo(this.step, this.maxDecCount + 1)) : this.maxDecCount = 0, this.min = this.step * Math.floor(this.min / this.step), this.max = this.step * Math.ceil(this.max / this.step), 0 > this.min && 0 <= n && (this.min = 0), 0 < this.max && 0 >= i && (this.max = 0), 1 < this.minReal && 1 < this.max - this.minReal && (this.minReal = Math.floor(this.minReal)), l = Math.pow(10, Math.floor(Math.log(Math.abs(this.minReal)) * Math.LOG10E)), 0 === this.min && (this.minReal = l), 0 === this.min && 1 < this.minReal && (this.minReal = 1), 0 < this.min && 0 < this.minReal - this.step && (this.minReal = this.min + this.step < this.minReal ? this.min + this.step : this.min), this.logarithmic && (2 < Math.log(i) * Math.LOG10E - Math.log(n) * Math.LOG10E ? (this.minReal = this.min = Math.pow(10, Math.floor(Math.log(Math.abs(n)) * Math.LOG10E)), this.maxReal = this.max = Math.pow(10, Math.ceil(Math.log(Math.abs(i)) * Math.LOG10E))) : (n = Math.pow(10, Math.floor(Math.log(Math.abs(n)) * Math.LOG10E)) / 10, Math.pow(10, Math.floor(Math.log(Math.abs(this.min)) * Math.LOG10E)) / 10 < n && (this.minReal = this.min = 10 * n)))
                    },
                    getExtremes: function(t, e) {
                        var n, i, l;
                        for (l = t; l <= e; l++) {
                            var s, a = this.data[l].axes[this.id].graphs;
                            for (s in a)
                                if (a.hasOwnProperty(s)) {
                                    var o, r = this.chart.graphsById[s];
                                    if (r.includeInMinMax && (!r.hidden || this.includeHidden))
                                        if (isNaN(n) && (n = 1 / 0), isNaN(i) && (i = -1 / 0), this.foundGraphs = !0, r = a[s].values, this.recalculateToPercents && (r = a[s].percents), this.minMaxField)(o = r[this.minMaxField]) < n && (n = o), o > i && (i = o);
                                        else
                                            for (var u in r) r.hasOwnProperty(u) && "percents" != u && "total" != u && "error" != u && ((o = r[u]) < n && (n = o), o > i && (i = o))
                                }
                        }
                        return {
                            min: n,
                            max: i
                        }
                    },
                    zoomOut: function(t) {
                        this.maxZoom = this.minZoom = NaN, this.zoomToRelativeValues(0, 1, t)
                    },
                    zoomToRelativeValues: function(t, e, n) {
                        if (this.reversed) {
                            var i = t;
                            t = 1 - e, e = 1 - i
                        }
                        var l = this.fullMax,
                            s = (i = this.fullMin) + (l - i) * t,
                            a = i + (l - i) * e;
                        return 0 <= this.minimum && 0 > s && (s = 0), this.logarithmic && (isNaN(this.minimum) || (i = this.minimum), isNaN(this.maximum) || (l = this.maximum), l = Math.log(l) * Math.LOG10E - Math.log(i) * Math.LOG10E, s = Math.pow(10, l * t + Math.log(i) * Math.LOG10E), a = Math.pow(10, l * e + Math.log(i) * Math.LOG10E)), this.zoomToValues(s, a, n)
                    },
                    zoomToValues: function(e, n, i) {
                        if (n < e) {
                            var l = n;
                            n = e, e = l
                        }
                        if (this.relativeStart = t.roundTo((e - (l = this.fullMin)) / ((s = this.fullMax) - l), 9), this.relativeEnd = t.roundTo((n - l) / (s - l), 9), this.logarithmic) {
                            isNaN(this.minimum) || (l = this.minimum), isNaN(this.maximum) || (s = this.maximum);
                            var s = Math.log(s) * Math.LOG10E - Math.log(l) * Math.LOG10E,
                                a = Math.log(n) / Math.LN10 - Math.log(l) * Math.LOG10E;
                            this.relativeStart = t.roundTo((Math.log(e) / Math.LN10 - Math.log(l) * Math.LOG10E) / s, 9), this.relativeEnd = t.roundTo(a / s, 9)
                        }
                        if (this.minZoom != e || this.maxZoom != n) return this.minZoom = e, this.maxZoom = n, (l = {
                            type: "axisZoomed"
                        }).chart = this.chart, l.valueAxis = this, l.startValue = e, l.endValue = n, l.relativeStart = this.relativeStart, l.relativeEnd = this.relativeEnd, this.prevStartValue == e && this.prevEndValue == n || this.fire(l), this.prevStartValue = e, this.prevEndValue = n, i || (t.copyProperties(l, e = {}), e.type = "axisIntZoomed", this.fire(e)), 0 === this.relativeStart && 1 == this.relativeEnd && (this.maxZoom = this.minZoom = NaN), !0
                    },
                    coordinateToValue: function(t) {
                        if (isNaN(t)) return NaN;
                        var e = this.axisWidth,
                            n = this.stepWidth,
                            i = this.reversed,
                            l = this.rotate,
                            s = this.min;
                        return !0 === this.logarithmic ? Math.pow(10, (l ? !0 === i ? (e - t) / n : t / n : !0 === i ? t / n : (e - t) / n) + Math.log(this.minReal) * Math.LOG10E) : !0 === i ? l ? s - (t - e) / n : t / n + s : l ? t / n + s : s - (t - e) / n
                    },
                    getCoordinate: function(t, e) {
                        if (isNaN(t)) return NaN;
                        var n = this.rotate,
                            i = this.reversed,
                            l = this.axisWidth,
                            s = this.stepWidth,
                            a = this.min,
                            o = this.minReal;
                        return !0 === this.logarithmic ? (0 === t && (t = this.treatZeroAs), a = Math.log(t) * Math.LOG10E - Math.log(o) * Math.LOG10E, n = n ? !0 === i ? l - s * a : s * a : !0 === i ? s * a : l - s * a) : n = !0 === i ? n ? l - s * (t - a) : s * (t - a) : n ? s * (t - a) : l - s * (t - a), 1e7 < Math.abs(n) && (n = n / Math.abs(n) * 1e7), e || (n = Math.round(n)), n
                    },
                    synchronizeWithAxis: function(t) {
                        this.synchronizeWith = t, this.listenTo(this.synchronizeWith, "axisChanged", this.handleSynchronization)
                    },
                    handleSynchronization: function() {
                        if (this.synchronizeWith) {
                            t.isString(this.synchronizeWith) && (this.synchronizeWith = this.chart.getValueAxisById(this.synchronizeWith));
                            var e = (i = this.synchronizeWith).min,
                                n = i.max,
                                i = i.step,
                                l = this.synchronizationMultiplier;
                            l && (this.min = e * l, this.max = n * l, this.step = i * l, e = Math.abs(Math.log(Math.abs(Math.pow(10, Math.floor(Math.log(Math.abs(this.step)) * Math.LOG10E)))) * Math.LOG10E), this.maxDecCount = e = Math.round(e), this.draw())
                        }
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.RecAxis = t.Class({
                    construct: function(e) {
                        var n = e.chart,
                            i = e.axisThickness,
                            l = e.axisColor,
                            s = e.axisAlpha,
                            a = e.offset,
                            o = e.dx,
                            r = e.dy,
                            u = e.x,
                            h = e.y,
                            d = e.height,
                            c = e.width,
                            p = n.container;
                        "H" == e.orientation ? (l = t.line(p, [0, c], [0, 0], l, s, i), this.axisWidth = e.width, "bottom" == e.position ? (r = i / 2 + a + d + h - 1, i = u) : (r = -i / 2 - a + h + r, i = o + u)) : (this.axisWidth = e.height, "right" == e.position ? (l = t.line(p, [0, 0, -o], [0, d, d - r], l, s, i), r = h + r, i = i / 2 + a + o + c + u - 1) : (l = t.line(p, [0, 0], [0, d], l, s, i), r = h, i = -i / 2 - a + u)), l.translate(i, r), (i = n.container.set()).push(l), n.axesSet.push(i), t.setCN(n, l, e.bcn + "line"), this.axisSet = i, this.set = l
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.RecItem = t.Class({
                    construct: function(e, n, i, l, s, a, o, r, u, h, d, c) {
                        n = Math.round(n);
                        var p = e.chart;
                        this.value = i, void 0 == i && (i = ""), u || (u = 0), void 0 == l && (l = !0);
                        var g = p.fontFamily,
                            f = e.fontSize;
                        void 0 == f && (f = p.fontSize);
                        var m = e.color;
                        void 0 == m && (m = p.color), void 0 !== d && (m = d);
                        var v = e.chart.container,
                            b = v.set();
                        this.set = b;
                        var y = e.axisThickness,
                            A = e.axisColor,
                            x = e.axisAlpha,
                            C = e.tickLength,
                            w = e.gridAlpha,
                            k = e.gridThickness,
                            M = e.gridColor,
                            S = e.dashLength,
                            P = e.fillColor,
                            N = e.fillAlpha,
                            I = e.labelsEnabled;
                        d = e.labelRotationR;
                        var T, O, D = e.counter,
                            R = e.inside,
                            L = e.labelOffset,
                            B = e.dx,
                            E = e.dy,
                            F = e.orientation,
                            V = e.position,
                            z = e.previousCoord,
                            H = e.height,
                            G = e.width,
                            W = e.offset;
                        o ? (void 0 !== o.id && (c = p.classNamePrefix + "-guide-" + o.id), I = !0, isNaN(o.tickLength) || (C = o.tickLength), void 0 != o.lineColor && (M = o.lineColor), void 0 != o.color && (m = o.color), isNaN(o.lineAlpha) || (w = o.lineAlpha), isNaN(o.dashLength) || (S = o.dashLength), isNaN(o.lineThickness) || (k = o.lineThickness), !0 === o.inside && (R = !0, 0 < W && (W = 0)), isNaN(o.labelRotation) || (d = o.labelRotation), isNaN(o.fontSize) || (f = o.fontSize), o.position && (V = o.position), void 0 !== o.boldLabel && (r = o.boldLabel), isNaN(o.labelOffset) || (L = o.labelOffset)) : "" === i && (C = 0), h && !isNaN(e.minorTickLength) && (C = e.minorTickLength);
                        var Y = "start";
                        0 < s && (Y = "middle"), e.centerLabels && (Y = "middle");
                        var _, X, j, U = d * Math.PI / 180,
                            Q = 0,
                            K = 0,
                            Z = 0,
                            q = _ = 0,
                            J = 0;
                        "V" == F && (d = 0), I && "" !== i && (q = (Y = (j = e.autoWrap && 0 === d ? t.wrappedText(v, i, m, g, f, Y, r, Math.abs(s), 0) : t.text(v, i, m, g, f, Y, r)).getBBox()).width, J = Y.height), "H" == F ? (0 <= n && n <= G + 1 && (0 < C && 0 < x && n + u <= G + 1 && (T = t.line(v, [n + u, n + u], [0, C], A, x, k), b.push(T)), 0 < w && (O = t.line(v, [n, n + B, n + B], [H, H + E, E], M, w, k, S), b.push(O))), K = 0, Q = n, o && 90 == d && R && (Q -= f), !1 === l ? (Y = "start", K = "bottom" == V ? R ? K + C : K - C : R ? K - C : K + C, Q += 3, 0 < s && (Q += s / 2 - 3, Y = "middle"), 0 < d && (Y = "middle")) : Y = "middle", 1 == D && 0 < N && !o && !h && z < G && 0 < (_ = (l = t.fitToBounds(n, 0, G)) - (z = t.fitToBounds(z, 0, G))) && ((X = t.rect(v, _, e.height, P, N)).translate(l - _ + B, E), b.push(X)), "bottom" == V ? (K += H + f / 2 + W, R ? (0 < d ? (K = H - q / 2 * Math.sin(U) - C - 3, e.centerRotatedLabels || (Q += q / 2 * Math.cos(U) - 4 + 2)) : 0 > d ? (K = H + q * Math.sin(U) - C - 3 + 2, Q += -q * Math.cos(U) - J * Math.sin(U) - 4) : K -= C + f + 3 + 3, K -= L) : (0 < d ? (K = H + q / 2 * Math.sin(U) + C + 3, e.centerRotatedLabels || (Q -= q / 2 * Math.cos(U))) : 0 > d ? (K = H + C + 3 - q / 2 * Math.sin(U) + 2, Q += q / 2 * Math.cos(U)) : K += C + y + 3 + 3, K += L)) : (K += E + f / 2 - W, Q += B, R ? (0 < d ? (K = q / 2 * Math.sin(U) + C + 3, e.centerRotatedLabels || (Q -= q / 2 * Math.cos(U))) : K += C + 3, K += L) : (0 < d ? (K = -q / 2 * Math.sin(U) - C - 6, e.centerRotatedLabels || (Q += q / 2 * Math.cos(U))) : K -= C + f + 3 + y + 3, K -= L)), "bottom" == V ? _ = (R ? H - C - 1 : H + y - 1) + W : (Z = B, _ = (R ? E : E - C - y + 1) - W), a && (Q += a), f = Q, 0 < d && (f += q / 2 * Math.cos(U)), j && (a = 0, R && (a = q / 2 * Math.cos(U)), f + a > G + 2 || 0 > f) && (j.remove(), j = null)) : (0 <= n && n <= H + 1 && (0 < C && 0 < x && n + u <= H + 1 && (T = t.line(v, [0, C + 1], [n + u, n + u], A, x, k), b.push(T)), 0 < w && (O = t.line(v, [0, B, G + B], [n, n + E, n + E], M, w, k, S), b.push(O))), Y = "end", (!0 === R && "left" == V || !1 === R && "right" == V) && (Y = "start"), K = n - J / 2 + 2, 1 == D && 0 < N && !o && !h && (l = t.fitToBounds(n, 0, H), z = t.fitToBounds(z, 0, H), (X = t.polygon(v, [0, e.width, e.width, 0], [0, 0, U = l - z, U], P, N)).translate(B, l - U + E), b.push(X)), K += f / 2, "right" == V ? (Q += B + G + W, K += E, R ? (a || (K -= f / 2 + 3), Q = Q - (C + 4) - L) : (Q += C + 4 + y, K -= 2, Q += L)) : R ? (Q += C + 4 - W, a || (K -= f / 2 + 3), o && (Q += B, K += E), Q += L) : (Q += -C - y - 4 - 2 - W, K -= 2, Q -= L), T && ("right" == V ? (Z += B + W + G - 1, _ += E, Z = R ? Z - y : Z + y) : (Z -= W, R || (Z -= C + y))), a && (K += a), R = -3, "right" == V && (R += E), j && (K > H + 1 || K < R - f / 10) && (j.remove(), j = null)), T && (T.translate(Z, _), t.setCN(p, T, e.bcn + "tick"), t.setCN(p, T, c, !0), o && t.setCN(p, T, "guide")), !1 === e.visible && (T && T.remove(), j && (j.remove(), j = null)), j && (j.attr({
                            "text-anchor": Y
                        }), j.translate(Q, K, NaN, !0), 0 !== d && j.rotate(-d, e.chart.backgroundColor), e.allLabels.push(j), this.label = j, t.setCN(p, j, e.bcn + "label"), t.setCN(p, j, c, !0), o && t.setCN(p, j, "guide")), O && (t.setCN(p, O, e.bcn + "grid"), t.setCN(p, O, c, !0), o && t.setCN(p, O, "guide")), X && (t.setCN(p, X, e.bcn + "fill"), t.setCN(p, X, c, !0)), h ? O && t.setCN(p, O, e.bcn + "grid-minor") : (e.counter = 0 === D ? 1 : 0, e.previousCoord = n), 0 === this.set.node.childNodes.length && this.set.remove()
                    },
                    graphics: function() {
                        return this.set
                    },
                    getLabel: function() {
                        return this.label
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.RecFill = t.Class({
                    construct: function(e, n, i, l) {
                        var s = e.dx,
                            a = e.dy,
                            o = e.orientation,
                            r = 0;
                        if (i < n) {
                            var u = n;
                            n = i, i = u
                        }
                        var h = l.fillAlpha;
                        isNaN(h) && (h = 0), u = e.chart.container;
                        var d = l.fillColor;
                        "V" == o ? (n = t.fitToBounds(n, 0, e.height), i = t.fitToBounds(i, 0, e.height)) : (n = t.fitToBounds(n, 0, e.width), i = t.fitToBounds(i, 0, e.width)), i -= n, isNaN(i) && (i = 4, r = 2, h = 0), 0 > i && "object" == typeof d && (d = d.join(",").split(",").reverse()), "V" == o ? (o = t.rect(u, e.width, i, d, h)).translate(s, n - r + a) : (o = t.rect(u, i, e.height, d, h)).translate(n - r + s, a), t.setCN(e.chart, o, "guide-fill"), l.id && t.setCN(e.chart, o, "guide-fill-" + l.id), this.set = u.set([o])
                    },
                    graphics: function() {
                        return this.set
                    },
                    getLabel: function() {}
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.AmChart = t.Class({
                    construct: function(e) {
                        this.svgIcons = this.tapToActivate = !0, this.theme = e, this.classNamePrefix = "amcharts", this.addClassNames = !1, this.version = "3.21.13", t.addChart(this), this.createEvents("buildStarted", "dataUpdated", "init", "rendered", "drawn", "failed", "resized", "animationFinished"), this.height = this.width = "100%", this.dataChanged = !0, this.chartCreated = !1, this.previousWidth = this.previousHeight = 0, this.backgroundColor = "#FFFFFF", this.borderAlpha = this.backgroundAlpha = 0, this.color = this.borderColor = "#000000", this.fontFamily = "Verdana", this.fontSize = 11, this.usePrefixes = !1, this.autoResize = !0, this.autoDisplay = !1, this.addCodeCredits = this.accessible = !0, this.touchStartTime = this.touchClickDuration = 0, this.precision = -1, this.percentPrecision = 2, this.decimalSeparator = ".", this.thousandsSeparator = ",", this.labels = [], this.allLabels = [], this.titles = [], this.marginRight = this.marginLeft = this.autoMarginOffset = 0, this.timeOuts = [], this.creditsPosition = "top-left";
                        var n = document.createElement("div"),
                            i = n.style;
                        i.overflow = "hidden", i.position = "relative", i.textAlign = "left", this.chartDiv = n, (i = (n = document.createElement("div")).style).overflow = "hidden", i.position = "relative", i.textAlign = "left", this.legendDiv = n, this.titleHeight = 0, this.hideBalloonTime = 150, this.handDrawScatter = 2, this.cssScale = this.handDrawThickness = 1, this.cssAngle = 0, this.prefixesOfBigNumbers = [{
                            number: 1e3,
                            prefix: "k"
                        }, {
                            number: 1e6,
                            prefix: "M"
                        }, {
                            number: 1e9,
                            prefix: "G"
                        }, {
                            number: 1e12,
                            prefix: "T"
                        }, {
                            number: 1e15,
                            prefix: "P"
                        }, {
                            number: 1e18,
                            prefix: "E"
                        }, {
                            number: 1e21,
                            prefix: "Z"
                        }, {
                            number: 1e24,
                            prefix: "Y"
                        }], this.prefixesOfSmallNumbers = [{
                            number: 1e-24,
                            prefix: "y"
                        }, {
                            number: 1e-21,
                            prefix: "z"
                        }, {
                            number: 1e-18,
                            prefix: "a"
                        }, {
                            number: 1e-15,
                            prefix: "f"
                        }, {
                            number: 1e-12,
                            prefix: "p"
                        }, {
                            number: 1e-9,
                            prefix: "n"
                        }, {
                            number: 1e-6,
                            prefix: "\u03bc"
                        }, {
                            number: .001,
                            prefix: "m"
                        }], this.panEventsEnabled = !0, this.product = "amcharts", this.animations = [], this.balloon = new t.AmBalloon(this.theme), this.balloon.chart = this, this.processTimeout = 0, this.processCount = 1e3, this.animatable = [], this.langObj = {}, t.applyTheme(this, e, "AmChart")
                    },
                    drawChart: function() {
                        0 < this.realWidth && 0 < this.realHeight && (this.drawBackground(), this.redrawLabels(), this.drawTitles(), this.brr(), this.renderFix(), this.chartDiv && (this.boundingRect = this.chartDiv.getBoundingClientRect()))
                    },
                    makeAccessible: function(t, e, n) {
                        this.accessible && t && (n && t.setAttr("role", n), t.setAttr("aria-label", e))
                    },
                    drawBackground: function() {
                        t.remove(this.background);
                        var e = this.container,
                            n = this.backgroundColor,
                            i = this.backgroundAlpha,
                            l = this.set;
                        t.isModern || 0 !== i || (i = .001);
                        var s = this.updateWidth();
                        this.realWidth = s;
                        var a = this.updateHeight();
                        this.realHeight = a, n = t.polygon(e, [0, s - 1, s - 1, 0], [0, 0, a - 1, a - 1], n, i, 1, this.borderColor, this.borderAlpha), t.setCN(this, n, "bg"), this.background = n, l.push(n), (n = this.backgroundImage) && (e = e.image(n, 0, 0, s, a), t.setCN(this, n, "bg-image"), this.bgImg = e, l.push(e))
                    },
                    drawTitles: function(e) {
                        var n = this.titles;
                        if (this.titleHeight = 0, t.ifArray(n)) {
                            var i, l = 20;
                            for (i = 0; i < n.length; i++) {
                                var s;
                                if (!1 !== (s = t.processObject(s = n[i], t.Title, this.theme)).enabled) {
                                    var a = s.color;
                                    void 0 === a && (a = this.color);
                                    var o = s.size;
                                    isNaN(o) && (o = this.fontSize + 2), isNaN(s.alpha);
                                    var r = this.marginLeft,
                                        u = !0;
                                    void 0 !== s.bold && (u = s.bold), (a = t.wrappedText(this.container, s.text, a, this.fontFamily, o, "middle", u, this.realWidth - 35 - this.marginRight - r)).translate(r + (this.realWidth - this.marginRight - r) / 2, l), a.node.style.pointerEvents = "none", s.sprite = a, void 0 !== s.tabIndex && a.setAttr("tabindex", s.tabIndex), t.setCN(this, a, "title"), s.id && t.setCN(this, a, "title-" + s.id), a.attr({
                                        opacity: s.alpha
                                    }), l += a.getBBox().height + 5, e ? a.remove() : this.freeLabelsSet.push(a)
                                }
                            }
                            this.titleHeight = l - 10
                        }
                    },
                    write: function(t) {
                        var e = this;
                        if (e.listeners)
                            for (var n = 0; n < e.listeners.length; n++) {
                                var i = e.listeners[n];
                                e.addListener(i.event, i.method)
                            }
                        e.fire({
                            type: "buildStarted",
                            chart: e
                        }), e.afterWriteTO && clearTimeout(e.afterWriteTO), 0 < e.processTimeout ? e.afterWriteTO = setTimeout(function() {
                            e.afterWrite.call(e, t)
                        }, e.processTimeout) : e.afterWrite(t)
                    },
                    afterWrite: function(e) {
                        var n;
                        if (n = "object" != typeof e ? document.getElementById(e) : e) {
                            for (; n.firstChild;) n.removeChild(n.firstChild);
                            this.div = n, n.style.overflow = "hidden", n.style.textAlign = "left";
                            var i = this.legendDiv,
                                l = this.legend,
                                s = i.style,
                                a = (e = this.chartDiv).style;
                            this.measure(), this.previousHeight = this.divRealHeight, this.previousWidth = this.divRealWidth;
                            var o, r = document.createElement("div");
                            if ((o = r.style).position = "relative", this.containerDiv = r, r.className = this.classNamePrefix + "-main-div", e.className = this.classNamePrefix + "-chart-div", n.appendChild(r), (n = this.exportConfig) && t.AmExport && !this.AmExport && (this.AmExport = new t.AmExport(this, n)), this.amExport && t.AmExport && (this.AmExport = t.extend(this.amExport, new t.AmExport(this), !0)), this.AmExport && this.AmExport.init && this.AmExport.init(), l) {
                                if ((l = this.addLegend(l, l.divId)).enabled) switch (s.left = null, s.top = null, s.right = null, a.left = null, a.right = null, a.top = null, s.position = "relative", a.position = "relative", o.width = "100%", o.height = "100%", l.position) {
                                    case "bottom":
                                        r.appendChild(e), r.appendChild(i);
                                        break;
                                    case "top":
                                        r.appendChild(i), r.appendChild(e);
                                        break;
                                    case "absolute":
                                        s.position = "absolute", a.position = "absolute", void 0 !== l.left && (s.left = l.left + "px"), void 0 !== l.right && (s.right = l.right + "px"), void 0 !== l.top && (s.top = l.top + "px"), void 0 !== l.bottom && (s.bottom = l.bottom + "px"), l.marginLeft = 0, l.marginRight = 0, r.appendChild(e), r.appendChild(i);
                                        break;
                                    case "right":
                                        s.position = "relative", a.position = "absolute", r.appendChild(e), r.appendChild(i);
                                        break;
                                    case "left":
                                        s.position = "absolute", a.position = "relative", r.appendChild(e), r.appendChild(i);
                                        break;
                                    case "outside":
                                        r.appendChild(e)
                                } else r.appendChild(e);
                                this.prevLegendPosition = l.position
                            } else r.appendChild(e);
                            this.listenersAdded || (this.addListeners(), this.listenersAdded = !0), (this.mouseWheelScrollEnabled || this.mouseWheelZoomEnabled) && t.addWheelListeners(), this.initChart()
                        }
                    },
                    createLabelsSet: function() {
                        t.remove(this.labelsSet), this.labelsSet = this.container.set(), this.freeLabelsSet.push(this.labelsSet)
                    },
                    initChart: function() {
                        this.balloon = t.processObject(this.balloon, t.AmBalloon, this.theme), window.AmCharts_path && (this.path = window.AmCharts_path), void 0 === this.path && (this.path = t.getPath()), void 0 === this.path && (this.path = "amcharts/"), this.path = t.normalizeUrl(this.path), void 0 === this.pathToImages && (this.pathToImages = this.path + "images/"), this.initHC || (t.callInitHandler(this), this.initHC = !0), t.applyLang(this.language, this);
                        var e = this.numberFormatter;
                        e && (isNaN(e.precision) || (this.precision = e.precision), void 0 !== e.thousandsSeparator && (this.thousandsSeparator = e.thousandsSeparator), void 0 !== e.decimalSeparator && (this.decimalSeparator = e.decimalSeparator)), (e = this.percentFormatter) && !isNaN(e.precision) && (this.percentPrecision = e.precision), this.nf = {
                            precision: this.precision,
                            thousandsSeparator: this.thousandsSeparator,
                            decimalSeparator: this.decimalSeparator
                        }, this.pf = {
                            precision: this.percentPrecision,
                            thousandsSeparator: this.thousandsSeparator,
                            decimalSeparator: this.decimalSeparator
                        }, this.destroy(), (e = this.container) ? (e.container.innerHTML = "", e.width = this.realWidth, e.height = this.realHeight, e.addDefs(this), this.chartDiv.appendChild(e.container)) : e = new t.AmDraw(this.chartDiv, this.realWidth, this.realHeight, this), this.container = e, this.extension = ".png", this.svgIcons && t.SVG && (this.extension = ".svg"), this.checkDisplay(), this.checkTransform(this.div), e.chart = this, t.VML || t.SVG ? (e.handDrawn = this.handDrawn, e.handDrawScatter = this.handDrawScatter, e.handDrawThickness = this.handDrawThickness, t.remove(this.set), this.set = e.set(), t.remove(this.gridSet), this.gridSet = e.set(), t.remove(this.cursorLineSet), this.cursorLineSet = e.set(), t.remove(this.graphsBehindSet), this.graphsBehindSet = e.set(), t.remove(this.bulletBehindSet), this.bulletBehindSet = e.set(), t.remove(this.columnSet), this.columnSet = e.set(), t.remove(this.graphsSet), this.graphsSet = e.set(), t.remove(this.trendLinesSet), this.trendLinesSet = e.set(), t.remove(this.axesSet), this.axesSet = e.set(), t.remove(this.cursorSet), this.cursorSet = e.set(), t.remove(this.scrollbarsSet), this.scrollbarsSet = e.set(), t.remove(this.bulletSet), this.bulletSet = e.set(), t.remove(this.freeLabelsSet), this.freeLabelsSet = e.set(), t.remove(this.axesLabelsSet), this.axesLabelsSet = e.set(), t.remove(this.balloonsSet), this.balloonsSet = e.set(), t.remove(this.plotBalloonsSet), this.plotBalloonsSet = e.set(), t.remove(this.zoomButtonSet), this.zoomButtonSet = e.set(), t.remove(this.zbSet), this.zbSet = null, t.remove(this.linkSet), this.linkSet = e.set()) : this.fire({
                            type: "failed",
                            chart: this
                        })
                    },
                    premeasure: function() {
                        var t = this.div;
                        if (t) {
                            try {
                                this.boundingRect = this.chartDiv.getBoundingClientRect()
                            } catch (t) {}
                            var e = t.offsetWidth,
                                n = t.offsetHeight;
                            t.clientHeight && (e = t.clientWidth, n = t.clientHeight), e == this.mw && n == this.mh || (this.mw = e, this.mh = n, this.measure())
                        }
                    },
                    measure: function() {
                        if (s = this.div) {
                            var e = this.chartDiv,
                                n = s.offsetWidth,
                                i = s.offsetHeight,
                                l = this.container;
                            s.clientHeight && (n = s.clientWidth, i = s.clientHeight), i = Math.round(i), n = Math.round(n);
                            var s = Math.round(t.toCoordinate(this.width, n)),
                                a = Math.round(t.toCoordinate(this.height, i));
                            (n != this.previousWidth || i != this.previousHeight) && 0 < s && 0 < a && (e.style.width = s + "px", e.style.height = a + "px", e.style.padding = 0, l && l.setSize(s, a), this.balloon = t.processObject(this.balloon, t.AmBalloon, this.theme)), this.balloon && this.balloon.setBounds && this.balloon.setBounds(2, 2, s - 2, a), this.updateWidth(), this.balloon.chart = this, this.realWidth = s, this.realHeight = a, this.divRealWidth = n, this.divRealHeight = i
                        }
                    },
                    checkDisplay: function() {
                        if (this.autoDisplay && this.container) {
                            var e = t.rect(this.container, 10, 10),
                                n = e.getBBox();
                            0 === n.width && 0 === n.height && (this.divRealHeight = this.divRealWidth = this.realHeight = this.realWidth = 0, this.previousWidth = this.previousHeight = NaN), e.remove()
                        }
                    },
                    checkTransform: function(t) {
                        if (this.autoTransform && window.getComputedStyle && t) {
                            if (t.style && (e = window.getComputedStyle(t, null)) && (e = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("-moz-transform") || e.getPropertyValue("-ms-transform") || e.getPropertyValue("-o-transform") || e.getPropertyValue("transform")) && "none" !== e) {
                                var e = (n = e.split("(")[1].split(")")[0].split(","))[0],
                                    n = n[1];
                                e = Math.sqrt(e * e + n * n), isNaN(e) || (this.cssScale *= e)
                            }
                            t.parentNode && this.checkTransform(t.parentNode)
                        }
                    },
                    destroy: function() {
                        this.chartDiv.innerHTML = "", this.clearTimeOuts(), this.legend && this.legend.destroy()
                    },
                    clearTimeOuts: function() {
                        var t, e = this.timeOuts;
                        if (e)
                            for (t = 0; t < e.length; t++) clearTimeout(e[t]);
                        this.timeOuts = []
                    },
                    clear: function(e) {
                        try {
                            document.removeEventListener("touchstart", this.docfn1, !0), document.removeEventListener("touchend", this.docfn2, !0)
                        } catch (t) {}
                        if (t.callMethod("clear", [this.chartScrollbar, this.scrollbarV, this.scrollbarH, this.chartCursor]), this.chartCursor = this.scrollbarH = this.scrollbarV = this.chartScrollbar = null, this.clearTimeOuts(), this.container && (this.container.remove(this.chartDiv), this.container.remove(this.legendDiv)), e || t.removeChart(this), e = this.div)
                            for (; e.firstChild;) e.removeChild(e.firstChild);
                        this.legend && this.legend.destroy(), this.AmExport && this.AmExport.clear && this.AmExport.clear()
                    },
                    setMouseCursor: function(e) {
                        "auto" == e && t.isNN && (e = "default"), this.chartDiv.style.cursor = e, this.legendDiv.style.cursor = e
                    },
                    redrawLabels: function() {
                        this.labels = [];
                        var t, e = this.allLabels;
                        for (this.createLabelsSet(), t = 0; t < e.length; t++) this.drawLabel(e[t])
                    },
                    drawLabel: function(e) {
                        var n = this;
                        if (n.container && !1 !== e.enabled) {
                            var i = (e = t.processObject(e, t.Label, n.theme)).y,
                                l = e.text,
                                s = e.align,
                                a = e.size,
                                o = e.color,
                                r = e.rotation,
                                u = e.alpha,
                                h = e.bold,
                                d = t.toCoordinate(e.x, n.realWidth);
                            i = t.toCoordinate(i, n.realHeight), d || (d = 0), i || (i = 0), void 0 === o && (o = n.color), isNaN(a) && (a = n.fontSize), s || (s = "start"), "left" == s && (s = "start"), "right" == s && (s = "end"), "center" == s && (s = "middle", r ? i = n.realHeight - i + i / 2 : d = n.realWidth / 2 - d), void 0 === u && (u = 1), void 0 === r && (r = 0), i += a / 2, (l = t.text(n.container, l, o, n.fontFamily, a, s, h, u)).translate(d, i), void 0 !== e.tabIndex && l.setAttr("tabindex", e.tabIndex), t.setCN(n, l, "label"), e.id && t.setCN(n, l, "label-" + e.id), 0 !== r && l.rotate(r), e.url ? (l.setAttr("cursor", "pointer"), l.click(function() {
                                t.getURL(e.url, n.urlTarget)
                            })) : l.node.style.pointerEvents = "none", n.labelsSet.push(l), n.labels.push(l)
                        }
                    },
                    addLabel: function(t, e, n, i, l, s, a, o, r, u) {
                        t = {
                            x: t,
                            y: e,
                            text: n,
                            align: i,
                            size: l,
                            color: s,
                            alpha: o,
                            rotation: a,
                            bold: r,
                            url: u,
                            enabled: !0
                        }, this.container && this.drawLabel(t), this.allLabels.push(t)
                    },
                    clearLabels: function() {
                        var t, e = this.labels;
                        for (t = e.length - 1; 0 <= t; t--) e[t].remove();
                        this.labels = [], this.allLabels = []
                    },
                    updateHeight: function() {
                        var t, e = this.divRealHeight;
                        return (t = this.legend) && ("top" != (t = t.position) && "bottom" != t || ((0 > (e -= this.legendDiv.offsetHeight) || isNaN(e)) && (e = 0), this.chartDiv.style.height = e + "px")), e
                    },
                    updateWidth: function() {
                        var t = this.divRealWidth,
                            e = this.divRealHeight,
                            n = this.legend;
                        if (n) {
                            var i = (s = this.legendDiv).offsetWidth;
                            isNaN(n.width) || (i = n.width), n.ieW && (i = n.ieW);
                            var l = s.offsetHeight,
                                s = s.style,
                                a = this.chartDiv.style,
                                o = n.position;
                            "right" != o && "left" != o || void 0 !== n.divId || ((0 > (t -= i) || isNaN(t)) && (t = 0), a.width = t + "px", this.balloon && this.balloon.setBounds && this.balloon.setBounds(2, 2, t - 2, this.realHeight), "left" == o ? (a.left = i + "px", s.left = "0px") : (a.left = "0px", s.left = t + "px"), e > l && (s.top = (e - l) / 2 + "px"))
                        }
                        return t
                    },
                    getTitleHeight: function() {
                        return this.drawTitles(!0), this.titleHeight
                    },
                    addTitle: function(t, e, n, i, l) {
                        return isNaN(e) && (e = this.fontSize + 2), this.titles.push(t = {
                            text: t,
                            size: e,
                            color: n,
                            alpha: i,
                            bold: l,
                            enabled: !0
                        }), t
                    },
                    handleWheel: function(t) {
                        var e = 0;
                        t || (t = window.event), t.wheelDelta ? e = t.wheelDelta / 120 : t.detail && (e = -t.detail / 3), e && this.handleWheelReal(e, t.shiftKey), t.preventDefault && t.preventDefault()
                    },
                    handleWheelReal: function() {},
                    handleDocTouchStart: function() {
                        this.handleMouseMove(), this.tmx = this.mouseX, this.tmy = this.mouseY, this.touchStartTime = (new Date).getTime()
                    },
                    handleDocTouchEnd: function() {
                        -.5 < this.tmx && this.tmx < this.divRealWidth + 1 && 0 < this.tmy && this.tmy < this.divRealHeight ? (this.handleMouseMove(), 4 > Math.abs(this.mouseX - this.tmx) && 4 > Math.abs(this.mouseY - this.tmy) ? (this.tapped = !0, this.panRequired && this.panEventsEnabled && this.chartDiv && (this.chartDiv.style.msTouchAction = "none", this.chartDiv.style.touchAction = "none")) : this.mouseIsOver || this.resetTouchStyle()) : (this.tapped = !1, this.resetTouchStyle())
                    },
                    resetTouchStyle: function() {
                        this.panEventsEnabled && this.chartDiv && (this.chartDiv.style.msTouchAction = "auto", this.chartDiv.style.touchAction = "auto")
                    },
                    checkTouchDuration: function(t) {
                        var e = this,
                            n = (new Date).getTime();
                        if (t)
                            if (t.touches) e.isTouchEvent = !0;
                            else if (!e.isTouchEvent) return !0;
                        if (n - e.touchStartTime > e.touchClickDuration) return !0;
                        setTimeout(function() {
                            e.resetTouchDuration()
                        }, 300)
                    },
                    resetTouchDuration: function() {
                        this.isTouchEvent = !1
                    },
                    checkTouchMoved: function() {
                        if (4 < Math.abs(this.mouseX - this.tmx) || 4 < Math.abs(this.mouseY - this.tmy)) return !0
                    },
                    addListeners: function() {
                        var t = this,
                            e = t.chartDiv;
                        document.addEventListener ? ("ontouchstart" in document.documentElement && (e.addEventListener("touchstart", function(e) {
                            t.handleTouchStart.call(t, e)
                        }, !0), e.addEventListener("touchmove", function(e) {
                            t.handleMouseMove.call(t, e)
                        }, !0), e.addEventListener("touchend", function(e) {
                            t.handleTouchEnd.call(t, e)
                        }, !0), t.docfn1 = function(e) {
                            t.handleDocTouchStart.call(t, e)
                        }, t.docfn2 = function(e) {
                            t.handleDocTouchEnd.call(t, e)
                        }, document.addEventListener("touchstart", t.docfn1, !0), document.addEventListener("touchend", t.docfn2, !0)), e.addEventListener("mousedown", function(e) {
                            t.mouseIsOver = !0, t.handleMouseMove.call(t, e), t.handleMouseDown.call(t, e), t.handleDocTouchStart.call(t, e)
                        }, !0), e.addEventListener("mouseover", function(e) {
                            t.handleMouseOver.call(t, e)
                        }, !0), e.addEventListener("mouseout", function(e) {
                            t.handleMouseOut.call(t, e)
                        }, !0), e.addEventListener("mouseup", function(e) {
                            t.handleDocTouchEnd.call(t, e)
                        }, !0)) : (e.attachEvent("onmousedown", function(e) {
                            t.handleMouseDown.call(t, e)
                        }), e.attachEvent("onmouseover", function(e) {
                            t.handleMouseOver.call(t, e)
                        }), e.attachEvent("onmouseout", function(e) {
                            t.handleMouseOut.call(t, e)
                        }))
                    },
                    dispDUpd: function() {
                        this.skipEvents || (this.dispatchDataUpdated && (this.dispatchDataUpdated = !1, this.fire({
                            type: "dataUpdated",
                            chart: this
                        })), this.chartCreated || (this.chartCreated = !0, this.fire({
                            type: "init",
                            chart: this
                        })), this.chartRendered || (this.fire({
                            type: "rendered",
                            chart: this
                        }), this.chartRendered = !0), this.fire({
                            type: "drawn",
                            chart: this
                        })), this.skipEvents = !1
                    },
                    validateSize: function() {
                        var t = this;
                        if (t.premeasure(), t.checkDisplay(), t.cssScale = 1, t.cssAngle = 0, t.checkTransform(t.div), t.divRealWidth != t.previousWidth || t.divRealHeight != t.previousHeight) {
                            var e = t.legend;
                            if (0 < t.realWidth && 0 < t.realHeight) {
                                if (t.sizeChanged = !0, e) {
                                    t.legendInitTO && clearTimeout(t.legendInitTO);
                                    var n = setTimeout(function() {
                                        e.invalidateSize()
                                    }, 10);
                                    t.timeOuts.push(n), t.legendInitTO = n
                                }
                                t.marginsUpdated = !1, clearTimeout(t.initTO), n = setTimeout(function() {
                                    t.initChart()
                                }, 10), t.timeOuts.push(n), t.initTO = n
                            }
                            t.renderFix(), e && e.renderFix && e.renderFix(), t.positionCred(), clearTimeout(t.resizedTO), t.resizedTO = setTimeout(function() {
                                t.fire({
                                    type: "resized",
                                    chart: t
                                })
                            }, 10), t.previousHeight = t.divRealHeight, t.previousWidth = t.divRealWidth
                        }
                    },
                    invalidateSize: function() {
                        this.previousHeight = this.previousWidth = NaN, this.invalidateSizeReal()
                    },
                    invalidateSizeReal: function() {
                        var t = this;
                        t.marginsUpdated = !1, clearTimeout(t.validateTO);
                        var e = setTimeout(function() {
                            t.validateSize()
                        }, 5);
                        t.timeOuts.push(e), t.validateTO = e
                    },
                    validateData: function(t) {
                        this.chartCreated && (this.dataChanged = !0, this.marginsUpdated = !1, this.initChart(t))
                    },
                    validateNow: function(t, e) {
                        this.initTO && clearTimeout(this.initTO), t && (this.dataChanged = !0, this.marginsUpdated = !1), this.skipEvents = e, this.chartRendered = !1;
                        var n = this.legend;
                        n && n.position != this.prevLegendPosition && (this.previousWidth = this.mw = 0, n.invalidateSize && (n.invalidateSize(), this.validateSize())), this.write(this.div)
                    },
                    showItem: function(t) {
                        t.hidden = !1, this.initChart()
                    },
                    hideItem: function(t) {
                        t.hidden = !0, this.initChart()
                    },
                    hideBalloon: function() {
                        var t = this;
                        clearTimeout(t.hoverInt), clearTimeout(t.balloonTO), t.hoverInt = setTimeout(function() {
                            t.hideBalloonReal.call(t)
                        }, t.hideBalloonTime)
                    },
                    cleanChart: function() {},
                    hideBalloonReal: function() {
                        var t = this.balloon;
                        t && t.hide && t.hide()
                    },
                    showBalloon: function(t, e, n, i, l) {
                        var s = this;
                        clearTimeout(s.balloonTO), clearTimeout(s.hoverInt), s.balloonTO = setTimeout(function() {
                            s.showBalloonReal.call(s, t, e, n, i, l)
                        }, 1)
                    },
                    showBalloonReal: function(t, e, n, i, l) {
                        this.handleMouseMove();
                        var s = this.balloon;
                        s.enabled && (s.followCursor(!1), s.changeColor(e), !n || s.fixedPosition ? (s.setPosition(i, l), isNaN(i) || isNaN(l) ? s.followCursor(!0) : s.followCursor(!1)) : s.followCursor(!0), t && s.showBalloon(t))
                    },
                    handleMouseOver: function() {
                        this.outTO && clearTimeout(this.outTO), t.resetMouseOver(), this.mouseIsOver = !0
                    },
                    handleMouseOut: function() {
                        var e = this;
                        t.resetMouseOver(), e.outTO && clearTimeout(e.outTO), e.outTO = setTimeout(function() {
                            e.handleMouseOutReal()
                        }, 10)
                    },
                    handleMouseOutReal: function() {
                        this.mouseIsOver = !1
                    },
                    handleMouseMove: function(t) {
                        var e, n, i, l;
                        if (t || (t = window.event), this.mouse2Y = this.mouse2X = NaN, t) {
                            if (t.touches) {
                                var s = t.touches.item(1);
                                if (s && this.panEventsEnabled && this.boundingRect && (i = s.clientX - this.boundingRect.left, l = s.clientY - this.boundingRect.top), !(t = t.touches.item(0))) return
                            } else this.wasTouched = !1;
                            this.boundingRect && t.clientX && (e = t.clientX - this.boundingRect.left, n = t.clientY - this.boundingRect.top), isNaN(i) ? this.mouseX = e : (this.mouseX = Math.min(e, i), this.mouse2X = Math.max(e, i)), isNaN(l) ? this.mouseY = n : (this.mouseY = Math.min(n, l), this.mouse2Y = Math.max(n, l)), this.autoTransform && (this.mouseX /= this.cssScale, this.mouseY /= this.cssScale)
                        }
                    },
                    handleTouchStart: function(t) {
                        this.hideBalloonReal(), t && (t.touches && this.tapToActivate && !this.tapped || !this.panRequired) || (this.handleMouseMove(t), this.handleMouseDown(t))
                    },
                    handleTouchEnd: function(e) {
                        this.wasTouched = !0, this.handleMouseMove(e), t.resetMouseOver(), this.handleReleaseOutside(e)
                    },
                    handleReleaseOutside: function() {
                        this.handleDocTouchEnd.call(this)
                    },
                    handleMouseDown: function(e) {
                        t.resetMouseOver(), this.mouseIsOver = !0, e && e.preventDefault && (this.panEventsEnabled ? e.preventDefault() : e.touches || e.preventDefault())
                    },
                    addLegend: function(e, n) {
                        var i;
                        return (e = t.processObject(e, t.AmLegend, this.theme)).divId = n, e.ieW = 0, i = "object" != typeof n && n ? document.getElementById(n) : n, this.legend = e, e.chart = this, i ? (e.div = i, e.position = "outside", e.autoMargins = !1) : e.div = this.legendDiv, e
                    },
                    removeLegend: function() {
                        this.legend = void 0, this.previousWidth = 0, this.legendDiv.innerHTML = ""
                    },
                    handleResize: function() {
                        (t.isPercents(this.width) || t.isPercents(this.height)) && this.invalidateSizeReal(), this.renderFix()
                    },
                    renderFix: function() {
                        if (!t.VML) {
                            var e = this.container;
                            e && e.renderFix()
                        }
                    },
                    getSVG: function() {
                        if (t.hasSVG) return this.container
                    },
                    animate: function(e, n, i, l, s, a, o) {
                        return e["an_" + n] && t.removeFromArray(this.animations, e["an_" + n]), e["an_" + n] = i = {
                            obj: e,
                            frame: 0,
                            attribute: n,
                            from: i,
                            to: l,
                            time: s,
                            effect: a,
                            suffix: o
                        }, this.animations.push(i), i
                    },
                    setLegendData: function(t) {
                        var e = this.legend;
                        e && e.setData(t)
                    },
                    stopAnim: function(e) {
                        t.removeFromArray(this.animations, e)
                    },
                    updateAnimations: function() {
                        var e;
                        if (this.container && this.container.update(), this.animations)
                            for (e = this.animations.length - 1; 0 <= e; e--) {
                                var n = this.animations[e],
                                    i = n.frame + 1,
                                    l = n.obj,
                                    s = n.attribute;
                                if (i <= (r = t.updateRate * n.time)) {
                                    n.frame++;
                                    var a = Number(n.from),
                                        o = Number(n.to) - a,
                                        r = t[n.effect](0, i, a, o, r);
                                    0 === o ? (this.animations.splice(e, 1), l.node.style[s] = Number(n.to) + n.suffix) : l.node.style[s] = r + n.suffix
                                } else l.node.style[s] = Number(n.to) + n.suffix, l.animationFinished = !0, this.animations.splice(e, 1)
                            }
                    },
                    update: function() {
                        this.updateAnimations();
                        var t = this.animatable;
                        if (0 < t.length) {
                            for (var e = !0, n = t.length - 1; 0 <= n; n--) {
                                var i = t[n];
                                i && (i.animationFinished ? t.splice(n, 1) : e = !1)
                            }
                            e && (this.fire({
                                type: "animationFinished",
                                chart: this
                            }), this.animatable = [])
                        }
                    },
                    inIframe: function() {
                        try {
                            return window.self !== window.top
                        } catch (t) {
                            return !0
                        }
                    },
                    brr: function() {
                        if (!this.hideCredits) {
                            var t, e = "amcharts.com";
                            if (2 <= (n = window.location.hostname.split(".")).length && (t = n[n.length - 2] + "." + n[n.length - 1]), this.amLink && (n = this.amLink.parentNode) && n.removeChild(this.amLink), t != e || !0 === this.inIframe()) {
                                t = e = "http://www." + e;
                                var n = "JavaScript charts",
                                    i = "JS chart by amCharts";
                                "ammap" == this.product && (t = e + "/javascript-maps/", n = "Interactive JavaScript maps", i = "JS map by amCharts"), e = document.createElement("a"), i = document.createTextNode(i), e.setAttribute("href", t), e.setAttribute("title", n), this.urlTarget && e.setAttribute("target", this.urlTarget), e.appendChild(i), this.chartDiv.appendChild(e), this.amLink = e, (e = e.style).position = "absolute", e.textDecoration = "none", e.color = this.color, e.fontFamily = this.fontFamily, e.fontSize = "11px", e.opacity = .7, e.display = "block", this.positionCred()
                            }
                        }
                    },
                    positionCred: function() {
                        if (i = this.amLink) {
                            var t = this.creditsPosition,
                                e = i.style,
                                n = i.offsetWidth,
                                i = i.offsetHeight,
                                l = 0,
                                s = 0,
                                a = this.realWidth,
                                o = this.realHeight;
                            "serial" != (r = this.type) && "xy" != r && "gantt" != r || (a = (l = this.marginLeftReal) + this.plotAreaWidth, o = (s = this.marginTopReal) + this.plotAreaHeight);
                            var r = 5 + l,
                                u = s + 5;
                            "bottom-left" == t && (r = 5 + l, u = o - i - 3), "bottom-right" == t && (r = a - n - 5, u = o - i - 3), "top-right" == t && (r = a - n - 5, u = s + 5), e.left = r + "px", e.top = u + "px"
                        }
                    }
                }), t.Slice = t.Class({
                    construct: function() {}
                }), t.SerialDataItem = t.Class({
                    construct: function() {}
                }), t.GraphDataItem = t.Class({
                    construct: function() {}
                }), t.Guide = t.Class({
                    construct: function(e) {
                        this.cname = "Guide", t.applyTheme(this, e, this.cname)
                    }
                }), t.Title = t.Class({
                    construct: function(e) {
                        this.cname = "Title", t.applyTheme(this, e, this.cname)
                    }
                }), t.Label = t.Class({
                    construct: function(e) {
                        this.cname = "Label", t.applyTheme(this, e, this.cname)
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.AmGraph = t.Class({
                    construct: function(e) {
                        this.cname = "AmGraph", this.createEvents("rollOverGraphItem", "rollOutGraphItem", "clickGraphItem", "doubleClickGraphItem", "rightClickGraphItem", "clickGraph", "rollOverGraph", "rollOutGraph"), this.type = "line", this.stackable = !0, this.columnCount = 1, this.columnIndex = 0, this.centerCustomBullets = this.showBalloon = !0, this.maxBulletSize = 50, this.minBulletSize = 4, this.balloonText = "[[value]]", this.hidden = this.scrollbar = this.animationPlayed = !1, this.pointPosition = "middle", this.depthCount = 1, this.includeInMinMax = !0, this.negativeBase = 0, this.visibleInLegend = !0, this.showAllValueLabels = !1, this.showBulletsAt = this.showBalloonAt = "close", this.lineThickness = 1, this.dashLength = 0, this.connect = !0, this.lineAlpha = 1, this.bullet = "none", this.bulletBorderThickness = 2, this.bulletBorderAlpha = 0, this.bulletAlpha = 1, this.bulletSize = 8, this.cornerRadiusTop = this.hideBulletsCount = this.bulletOffset = 0, this.cursorBulletAlpha = 1, this.gradientOrientation = "vertical", this.dy = this.dx = 0, this.periodValue = "", this.clustered = !0, this.periodSpan = 1, this.accessibleLabel = "[[title]] [[category]] [[value]]", this.accessibleSkipText = "Press enter to skip [[title]]", this.y = this.x = 0, this.switchable = !0, this.minDistance = .8, this.tcc = 1, this.labelRotation = 0, this.labelAnchor = "auto", this.labelOffset = 3, this.bcn = "graph-", this.dateFormat = "MMM DD, YYYY", this.noRounding = !0, t.applyTheme(this, e, this.cname)
                    },
                    init: function() {
                        this.createBalloon()
                    },
                    draw: function() {
                        var e = this.chart;
                        e.isRolledOverBullet = !1;
                        var n = e.type;
                        if (e.drawGraphs) {
                            isNaN(this.precision) || (this.numberFormatter ? this.numberFormatter.precision = this.precision : this.numberFormatter = {
                                precision: this.precision,
                                decimalSeparator: e.decimalSeparator,
                                thousandsSeparator: e.thousandsSeparator
                            });
                            var i = e.container;
                            this.container = i, this.destroy();
                            var l = i.set();
                            this.set = l, l.translate(this.x, this.y);
                            var s = i.set();
                            this.bulletSet = s, s.translate(this.x, this.y), this.behindColumns ? (e.graphsBehindSet.push(l), e.bulletBehindSet.push(s)) : (e.graphsSet.push(l), e.bulletSet.push(s));
                            var a = this.bulletAxis;
                            t.isString(a) && (this.bulletAxis = e.getValueAxisById(a)), i = i.set(), t.remove(this.columnsSet), this.columnsSet = i, t.setCN(e, l, "graph-" + this.type), t.setCN(e, l, "graph-" + this.id), t.setCN(e, s, "graph-" + this.type), t.setCN(e, s, "graph-" + this.id), this.columnsArray = [], this.ownColumns = [], this.allBullets = [], this.animationArray = [], (s = this.labelPosition) || (a = this.valueAxis.stackType, s = "top", "column" == this.type && (e.rotate && (s = "right"), "100%" == a || "regular" == a) && (s = "middle"), this.labelPosition = s), t.ifArray(this.data) && (e = !1, "xy" == n ? this.xAxis.axisCreated && this.yAxis.axisCreated && (e = !0) : this.valueAxis.axisCreated && (e = !0), !this.hidden && e && this.createGraph()), l.push(i)
                        }
                    },
                    createGraph: function() {
                        var e = this,
                            n = e.chart;
                        e.startAlpha = n.startAlpha, e.seqAn = n.sequencedAnimation, e.baseCoord = e.valueAxis.baseCoord, void 0 === e.fillAlphas && (e.fillAlphas = 0), e.bulletColorR = e.bulletColor, void 0 === e.bulletColorR && (e.bulletColorR = e.lineColorR, e.bulletColorNegative = e.negativeLineColor), void 0 === e.bulletAlpha && (e.bulletAlpha = e.lineAlpha), ("step" == i || t.VML) && (e.noRounding = !1);
                        var i = n.type;
                        if ("gantt" == i && (i = "serial"), clearTimeout(e.playedTO), !isNaN(e.valueAxis.min) && !isNaN(e.valueAxis.max)) {
                            switch (i) {
                                case "serial":
                                    e.categoryAxis && (e.createSerialGraph(), "candlestick" == e.type && 1 > e.valueAxis.minMaxMultiplier && e.positiveClip(e.set));
                                    break;
                                case "radar":
                                    e.createRadarGraph();
                                    break;
                                case "xy":
                                    e.createXYGraph()
                            }
                            e.playedTO = setTimeout(function() {
                                e.setAnimationPlayed.call(e)
                            }, 500 * e.chart.startDuration)
                        }
                    },
                    setAnimationPlayed: function() {
                        this.animationPlayed = !0
                    },
                    createXYGraph: function() {
                        var t, e = [],
                            n = [],
                            i = this.xAxis,
                            l = this.yAxis;
                        for (this.pmh = l.height, this.pmw = i.width, this.pmy = this.pmx = 0, t = this.start; t <= this.end; t++) {
                            var s = this.data[t].axes[i.id].graphs[this.id],
                                a = (r = s.values).x,
                                o = r.y,
                                r = i.getCoordinate(a, this.noRounding),
                                u = l.getCoordinate(o, this.noRounding);
                            if (!isNaN(a) && !isNaN(o) && (e.push(r), n.push(u), s.x = r, s.y = u, a = this.createBullet(s, r, u, t), o = this.labelText)) {
                                o = this.createLabel(s, o);
                                var h = 0;
                                a && (h = a.size), this.positionLabel(s, r, u, o, h)
                            }
                        }
                        this.drawLineGraph(e, n), this.launchAnimation()
                    },
                    createRadarGraph: function() {
                        var t, e, n, i, l, s = this.valueAxis.stackType,
                            a = [],
                            o = [],
                            r = [],
                            u = [];
                        for (l = this.start; l <= this.end; l++) {
                            var h, d, c = this.data[l].axes[this.valueAxis.id].graphs[this.id];
                            if ("none" == s || "3d" == s ? h = c.values.value : (h = c.values.close, d = c.values.open), isNaN(h)) this.connect || (this.drawLineGraph(a, o, r, u), a = [], o = [], r = [], u = []);
                            else {
                                var p = (p = this.valueAxis.getCoordinate(h, this.noRounding) - this.height) * this.valueAxis.rMultiplier,
                                    g = -360 / (this.end - this.start + 1) * l;
                                if ("middle" == this.valueAxis.pointPosition && (g -= 180 / (this.end - this.start + 1)), h = p * Math.sin(g / 180 * Math.PI), p *= Math.cos(g / 180 * Math.PI), a.push(h), o.push(p), !isNaN(d)) {
                                    var f, m = (f = (f = this.valueAxis.getCoordinate(d, this.noRounding) - this.height) * this.valueAxis.rMultiplier) * Math.sin(g / 180 * Math.PI);
                                    g = f * Math.cos(g / 180 * Math.PI), r.push(m), u.push(g), isNaN(n) && (n = m), isNaN(i) && (i = g)
                                }
                                g = this.createBullet(c, h, p, l), c.x = h, c.y = p, (m = this.labelText) && (m = this.createLabel(c, m), f = 0, g && (f = g.size), this.positionLabel(c, h, p, m, f)), isNaN(t) && (t = h), isNaN(e) && (e = p)
                            }
                        }
                        a.push(t), o.push(e), isNaN(n) || (r.push(n), u.push(i)), this.drawLineGraph(a, o, r, u), this.launchAnimation()
                    },
                    positionLabel: function(t, e, n, i, l) {
                        if (i) {
                            var s = this.chart,
                                a = this.valueAxis,
                                o = "middle",
                                r = !1,
                                u = this.labelPosition,
                                h = i.getBBox(),
                                d = this.chart.rotate,
                                c = t.isNegative;
                            switch (void 0 === (p = this.fontSize) && (p = this.chart.fontSize), n -= h.height / 2 - p / 2 - 1, void 0 !== t.labelIsNegative && (c = t.labelIsNegative), u) {
                                case "right":
                                    u = d && c ? "left" : "right";
                                    break;
                                case "top":
                                    u = d ? "top" : c ? "bottom" : "top";
                                    break;
                                case "bottom":
                                    u = d ? "bottom" : c ? "top" : "bottom";
                                    break;
                                case "left":
                                    u = d && c ? "right" : "left"
                            }
                            var p, g = 0,
                                f = 0;
                            (p = t.columnGraphics) && (g = p.x, f = p.y);
                            var m = this.labelOffset;
                            switch (u) {
                                case "right":
                                    o = "start", e += l / 2 + m;
                                    break;
                                case "top":
                                    n = a.reversed ? n + (l / 2 + h.height / 2 + m) : n - (l / 2 + h.height / 2 + m);
                                    break;
                                case "bottom":
                                    n = a.reversed ? n - (l / 2 + h.height / 2 + m) : n + (l / 2 + h.height / 2 + m);
                                    break;
                                case "left":
                                    o = "end", e -= l / 2 + m;
                                    break;
                                case "inside":
                                    "column" == this.type && (r = !0, d ? c ? (o = "end", e = g - 3 - m) : (o = "start", e = g + 3 + m) : n = c ? f + 7 + m : f - 10 - m);
                                    break;
                                case "middle":
                                    "column" == this.type && (r = !0, d ? e -= (e - g) / 2 + m - 3 : n -= (n - f) / 2 + m - 3)
                            }
                            return "auto" != this.labelAnchor && (o = this.labelAnchor), i.attr({
                                "text-anchor": o
                            }), this.labelRotation && i.rotate(this.labelRotation), i.translate(e, n), !this.showAllValueLabels && p && r && ((h = i.getBBox()).height > t.columnHeight || h.width > t.columnWidth) && (i.remove(), i = null), i && "radar" != s.type && (d ? ((0 > n || n > this.height) && (i.remove(), i = null), !this.showAllValueLabels && i && (0 > e || e > this.width) && (i.remove(), i = null)) : ((0 > e || e > this.width) && (i.remove(), i = null), !this.showAllValueLabels && i && (0 > n || n > this.height) && (i.remove(), i = null))), i && this.allBullets.push(i), i
                        }
                    },
                    getGradRotation: function() {
                        var t = 270;
                        return "horizontal" == this.gradientOrientation && (t = 0), this.gradientRotation = t
                    },
                    createSerialGraph: function() {
                        this.dashLengthSwitched = this.fillColorsSwitched = this.lineColorSwitched = void 0;
                        var e = this.chart,
                            n = this.id,
                            i = this.index,
                            l = this.data,
                            s = this.chart.container,
                            a = this.valueAxis,
                            o = this.type,
                            r = this.columnWidthReal,
                            u = this.showBulletsAt;
                        isNaN(this.columnWidth) || (r = this.columnWidth), isNaN(r) && (r = .8);
                        var h, d, c, p, g, f = this.useNegativeColorIfDown,
                            m = this.width,
                            v = this.height,
                            b = this.y,
                            y = this.rotate,
                            A = this.columnCount,
                            x = t.toCoordinate(this.cornerRadiusTop, r / 2),
                            C = this.connect,
                            w = [],
                            k = [],
                            M = this.chart.graphs.length,
                            S = this.dx / this.tcc,
                            P = this.dy / this.tcc,
                            N = a.stackType,
                            I = this.start,
                            T = this.end,
                            O = this.scrollbar,
                            D = "graph-column-";
                        O && (D = "scrollbar-graph-column-");
                        var R, L = this.categoryAxis,
                            B = this.baseCoord,
                            E = this.negativeBase,
                            F = this.columnIndex,
                            V = this.lineThickness,
                            z = this.lineAlpha,
                            H = this.lineColorR,
                            G = this.dashLength,
                            W = this.set,
                            Y = this.getGradRotation(),
                            _ = this.chart.columnSpacing,
                            X = L.cellWidth,
                            j = (X * r - A) / A;
                        _ > j && (_ = j);
                        var U, Q, K, Z = v,
                            q = m,
                            J = 0,
                            $ = 0,
                            tt = 0,
                            et = 0,
                            nt = 0,
                            it = 0,
                            lt = this.fillColorsR,
                            st = this.negativeFillColors,
                            at = this.negativeLineColor,
                            ot = this.fillAlphas,
                            rt = this.negativeFillAlphas;
                        "object" == typeof ot && (ot = ot[0]), "object" == typeof rt && (rt = rt[0]);
                        var ut = this.noRounding;
                        "step" == o && (ut = !1);
                        var ht = a.getCoordinate(a.min);
                        if (a.logarithmic && (ht = a.getCoordinate(a.minReal)), this.minCoord = ht, this.resetBullet && (this.bullet = "none"), !(O || "line" != o && "smoothedLine" != o && "step" != o || (1 == l.length && "step" != o && "none" == this.bullet && (this.bullet = "round", this.resetBullet = !0), !st && void 0 == at || f))) {
                            var dt = E;
                            dt > a.max && (dt = a.max), dt < a.min && (dt = a.min), a.logarithmic && (dt = a.minReal);
                            var ct = a.getCoordinate(dt) + .5,
                                pt = a.getCoordinate(a.max);
                            y ? (Z = v, q = Math.abs(pt - ct), tt = v, et = Math.abs(ht - ct), it = $ = 0, a.reversed ? (J = 0, nt = ct) : (J = ct, nt = 0)) : (q = m, Z = Math.abs(pt - ct), et = m, tt = Math.abs(ht - ct), nt = J = 0, a.reversed ? (it = b, $ = ct) : it = ct)
                        }
                        var gt = Math.round;
                        this.pmx = gt(J), this.pmy = gt($), this.pmh = gt(Z), this.pmw = gt(q), this.nmx = gt(nt), this.nmy = gt(it), this.nmh = gt(tt), this.nmw = gt(et), t.isModern || (this.nmy = this.nmx = 0, this.nmh = this.height), this.clustered || (A = 1), 1 > (r = "column" == o ? (X * r - _ * (A - 1)) / A : X * r) && (r = 1);
                        var ft, mt = this.fixedColumnWidth;
                        if (isNaN(mt) || (r = mt), "line" == o || "step" == o || "smoothedLine" == o) {
                            if (0 < I) {
                                for (ft = I - 1; - 1 < ft; ft--)
                                    if (K = (Q = (U = l[ft]).axes[a.id].graphs[n]).values.value, !isNaN(K)) {
                                        I = ft;
                                        break
                                    } if (this.lineColorField)
                                    for (ft = I; - 1 < ft; ft--)
                                        if ((Q = (U = l[ft]).axes[a.id].graphs[n]).lineColor) {
                                            this.lineColorSwitched = Q.lineColor, void 0 === this.bulletColor && (this.bulletColorSwitched = this.lineColorSwitched);
                                            break
                                        } if (this.fillColorsField)
                                    for (ft = I; - 1 < ft; ft--)
                                        if ((Q = (U = l[ft]).axes[a.id].graphs[n]).fillColors) {
                                            this.fillColorsSwitched = Q.fillColors;
                                            break
                                        } if (this.dashLengthField)
                                    for (ft = I; - 1 < ft; ft--)
                                        if (Q = (U = l[ft]).axes[a.id].graphs[n], !isNaN(Q.dashLength)) {
                                            this.dashLengthSwitched = Q.dashLength;
                                            break
                                        }
                            }
                            if (T < l.length - 1)
                                for (ft = T + 1; ft < l.length; ft++)
                                    if (K = (Q = (U = l[ft]).axes[a.id].graphs[n]).values.value, !isNaN(K)) {
                                        T = ft;
                                        break
                                    }
                        }
                        T < l.length - 1 && T++;
                        var vt = [],
                            bt = [],
                            yt = !1;
                        "line" != o && "step" != o && "smoothedLine" != o || (this.stackable && "regular" == N || "100%" == N || this.fillToGraph) && (yt = !0);
                        var At = this.noStepRisers,
                            xt = -1e3,
                            Ct = -1e3,
                            wt = this.minDistance,
                            kt = !0,
                            Mt = !1;
                        for (ft = I; ft <= T; ft++) {
                            (Q = (U = l[ft]).axes[a.id].graphs[n]).index = ft;
                            var St, Pt = NaN;
                            if (f && void 0 == this.openField)
                                for (var Nt = ft + 1; Nt < l.length && (!l[Nt] || !(St = l[ft + 1].axes[a.id].graphs[n]) || !St.values || (Pt = St.values.value, isNaN(Pt))); Nt++);
                            var It, Tt, Ot, Dt, Rt, Lt, Bt = NaN,
                                Et = NaN,
                                Ft = NaN,
                                Vt = NaN,
                                zt = NaN,
                                Ht = NaN,
                                Gt = NaN,
                                Wt = NaN,
                                Yt = NaN,
                                _t = NaN,
                                Xt = NaN,
                                jt = NaN,
                                Ut = NaN,
                                Qt = NaN,
                                Kt = NaN,
                                Zt = NaN,
                                qt = NaN,
                                Jt = void 0,
                                $t = lt,
                                te = ot,
                                ee = H,
                                ne = this.proCandlesticks,
                                ie = this.topRadius,
                                le = v - 1,
                                se = m - 1,
                                ae = this.pattern;
                            void 0 != Q.pattern && (ae = Q.pattern), isNaN(Q.alpha) || (te = Q.alpha), isNaN(Q.dashLength) || (G = Q.dashLength);
                            var oe = Q.values;
                            if (a.recalculateToPercents && (oe = Q.percents), "none" == N && (F = isNaN(Q.columnIndex) ? this.columnIndex : Q.columnIndex), oe) {
                                if (Qt = this.stackable && "none" != N && "3d" != N ? oe.close : oe.value, "candlestick" != o && "ohlc" != o || (Qt = oe.close, Gt = a.getCoordinate(Zt = oe.low), Yt = a.getCoordinate(Kt = oe.high)), qt = oe.open, Ft = a.getCoordinate(Qt, ut), isNaN(qt) || (zt = a.getCoordinate(qt, ut), f && "regular" != N && "100%" != N && (Pt = qt, qt = zt = NaN)), f && (void 0 == this.openField ? St && (St.isNegative = Pt < Qt, isNaN(Pt) && (Q.isNegative = !kt)) : Q.isNegative = Pt > Qt), !O) switch (this.showBalloonAt) {
                                    case "close":
                                        Q.y = Ft;
                                        break;
                                    case "open":
                                        Q.y = zt;
                                        break;
                                    case "high":
                                        Q.y = Yt;
                                        break;
                                    case "low":
                                        Q.y = Gt
                                }
                                Bt = U.x[L.id];
                                var re = this.periodSpan - 1;
                                "step" != o || isNaN(U.cellWidth) || (X = U.cellWidth);
                                var ue = Math.floor(X / 2) + Math.floor(re * X / 2),
                                    he = ue;
                                if ("left" == this.stepDirection && (Bt -= (2 * X + re * X) / 2), "center" == this.stepDirection && (Bt -= X / 2), "start" == this.pointPosition && (Bt -= X / 2 + Math.floor(re * X / 2), ue = 0, he = Math.floor(X) + Math.floor(re * X)), "end" == this.pointPosition && (Bt += X / 2 + Math.floor(re * X / 2), ue = Math.floor(X) + Math.floor(re * X), he = 0), At) {
                                    var de = this.columnWidth;
                                    isNaN(de) || (ue *= de, he *= de)
                                }
                                O || (Q.x = Bt), -1e5 > Bt && (Bt = -1e5), Bt > m + 1e5 && (Bt = m + 1e5), y ? (Et = Ft, Vt = zt, zt = Ft = Bt, isNaN(qt) && !this.fillToGraph && (Vt = B), Ht = Gt, Wt = Yt) : (Vt = Et = Bt, isNaN(qt) && !this.fillToGraph && (zt = B)), (!ne && Qt < qt || ne && Qt < R) && (Q.isNegative = !0, st && ($t = st), rt && (te = rt), void 0 != at && (ee = at)), Mt = !1, isNaN(Qt) || (f ? Qt > Pt ? (kt && (Mt = !0), kt = !1) : (kt || (Mt = !0), kt = !0) : Q.isNegative = Qt < E, R = Qt);
                                var ce = !1;
                                switch (O && e.chartScrollbar.ignoreCustomColors && (ce = !0), ce || (void 0 != Q.color && ($t = Q.color), Q.fillColors && ($t = Q.fillColors)), Ft = t.fitToBounds(Ft, -3e4, 3e4), o) {
                                    case "line":
                                        isNaN(Qt) ? C || (this.drawLineGraph(w, k, vt, bt), w = [], k = [], vt = [], bt = []) : ((Math.abs(Et - xt) >= wt || Math.abs(Ft - Ct) >= wt) && (w.push(Et), k.push(Ft), xt = Et, Ct = Ft), _t = Et, Xt = Ft, jt = Et, Ut = Ft, !yt || isNaN(zt) || isNaN(Vt) || (vt.push(Vt), bt.push(zt)), (Mt || void 0 != Q.lineColor && Q.lineColor != this.lineColorSwitched || void 0 != Q.fillColors && Q.fillColors != this.fillColorsSwitched || !isNaN(Q.dashLength)) && (this.drawLineGraph(w, k, vt, bt), w = [Et], k = [Ft], vt = [], bt = [], !yt || isNaN(zt) || isNaN(Vt) || (vt.push(Vt), bt.push(zt)), f ? (kt ? (this.lineColorSwitched = H, this.fillColorsSwitched = lt) : (this.lineColorSwitched = at, this.fillColorsSwitched = st), void 0 === this.bulletColor && (this.bulletColorSwitched = H)) : (this.lineColorSwitched = Q.lineColor, this.fillColorsSwitched = Q.fillColors, void 0 === this.bulletColor && (this.bulletColorSwitched = this.lineColorSwitched)), this.dashLengthSwitched = Q.dashLength), Q.gap && (this.drawLineGraph(w, k, vt, bt), w = [], k = [], vt = [], bt = [], Ct = xt = -1e3));
                                        break;
                                    case "smoothedLine":
                                        isNaN(Qt) ? C || (this.drawSmoothedGraph(w, k, vt, bt), w = [], k = [], vt = [], bt = []) : ((Math.abs(Et - xt) >= wt || Math.abs(Ft - Ct) >= wt) && (w.push(Et), k.push(Ft), xt = Et, Ct = Ft), _t = Et, Xt = Ft, jt = Et, Ut = Ft, !yt || isNaN(zt) || isNaN(Vt) || (vt.push(Vt), bt.push(zt)), (Mt || void 0 != Q.lineColor && Q.lineColor != this.lineColorSwitched || void 0 != Q.fillColors && Q.fillColors != this.fillColorsSwitched || !isNaN(Q.dashLength)) && (this.drawSmoothedGraph(w, k, vt, bt), w = [Et], k = [Ft], vt = [], bt = [], !yt || isNaN(zt) || isNaN(Vt) || (vt.push(Vt), bt.push(zt)), this.lineColorSwitched = Q.lineColor, this.fillColorsSwitched = Q.fillColors, this.dashLengthSwitched = Q.dashLength), Q.gap && (this.drawSmoothedGraph(w, k, vt, bt), w = [], k = [], vt = [], bt = []));
                                        break;
                                    case "step":
                                        if (isNaN(Qt)) C || ((1 >= this.periodSpan || 1 < this.periodSpan && Et - h > ue + he) && (h = d = NaN), this.drawLineGraph(w, k, vt, bt), w = [], k = [], vt = [], bt = []);
                                        else {
                                            if (y ? (isNaN(h) || (w.push(h), k.push(Ft - ue)), k.push(Ft - ue), w.push(Et), k.push(Ft + he), w.push(Et), !yt || isNaN(zt) || isNaN(Vt) || (isNaN(c) || (vt.push(c), bt.push(zt - ue)), vt.push(Vt), bt.push(zt - ue), vt.push(Vt), bt.push(zt + he))) : (isNaN(d) || (k.push(d), w.push(Et - ue)), w.push(Et - ue), k.push(Ft), w.push(Et + he), k.push(Ft), !yt || isNaN(zt) || isNaN(Vt) || (isNaN(p) || (vt.push(Vt - ue), bt.push(p)), vt.push(Vt - ue), bt.push(zt), vt.push(Vt + he), bt.push(zt))), h = Et, d = Ft, c = Vt, p = zt, _t = Et, Xt = Ft, jt = Et, Ut = Ft, Mt || void 0 != Q.lineColor || void 0 != Q.fillColors || !isNaN(Q.dashLength)) {
                                                var pe = w[w.length - 2],
                                                    ge = k[k.length - 2];
                                                w.pop(), k.pop(), vt.pop(), bt.pop(), this.drawLineGraph(w, k, vt, bt), w = [pe], k = [ge], vt = [], bt = [], yt && (vt = [pe, pe + ue + he], bt = [p, p]), y ? (k.push(Ft + he), w.push(Et)) : (w.push(Et + he), k.push(Ft)), this.lineColorSwitched = Q.lineColor, this.fillColorsSwitched = Q.fillColors, this.dashLengthSwitched = Q.dashLength, f && (kt ? (this.lineColorSwitched = H, this.fillColorsSwitched = lt) : (this.lineColorSwitched = at, this.fillColorsSwitched = st))
                                            }(At || Q.gap) && (h = d = NaN, this.drawLineGraph(w, k, vt, bt), w = [], k = [], vt = [], bt = [])
                                        }
                                        break;
                                    case "column":
                                        if (Rt = ee, void 0 != Q.lineColor && (Rt = Q.lineColor), !isNaN(Qt)) {
                                            f || (Q.isNegative = Qt < E), Q.isNegative && (st && ($t = st), void 0 != at && (Rt = at));
                                            var fe, me = a.min,
                                                ve = a.max,
                                                be = qt;
                                            if (isNaN(be) && (be = E), !(Qt < me && be < me || Qt > ve && be > ve))
                                                if (y) {
                                                    "3d" == N ? (Tt = Ft - (A / 2 - this.depthCount + 1) * (r + _) + _ / 2 + P * F, It = Vt + S * F, fe = F) : (Tt = Math.floor(Ft - (A / 2 - F) * (r + _) + _ / 2), It = Vt, fe = 0), _t = Et, Xt = Tt + r / 2, jt = Et, Ut = Tt + r / 2, Tt + (Ot = r) > v + fe * P && (Ot = v - Tt + fe * P), Tt < fe * P && (Ot += Tt, Tt = fe * P), Dt = Et - Vt;
                                                    var ye = It;
                                                    It = t.fitToBounds(It, 0, m), Dt = t.fitToBounds(Dt += ye - It, -It, m - It + S * F), Q.labelIsNegative = 0 > Dt, 0 === Dt && 1 / Qt == -1 / 0 && (Q.labelIsNegative = !0), isNaN(U.percentWidthValue) || (Xt = (Tt = Bt - (Ot = this.height * U.percentWidthValue / 100) / 2) + Ot / 2), Ot = t.roundTo(Ot, 2), Dt = t.roundTo(Dt, 2), Tt < v && 0 < Ot && (Jt = new t.Cuboid(s, Dt, Ot, S - e.d3x, P - e.d3y, $t, te, V, Rt, z, Y, x, y, G, ae, ie, D), Q.columnWidth = Math.abs(Dt), Q.columnHeight = Math.abs(Ot))
                                                } else {
                                                    "3d" == N ? (It = Et - (A / 2 - this.depthCount + 1) * (r + _) + _ / 2 + S * F, Tt = zt + P * F, fe = F) : (It = Et - (A / 2 - F) * (r + _) + _ / 2, Tt = zt, fe = 0), _t = It + r / 2, Xt = Ft, jt = It + r / 2, Ut = Ft, It + (Ot = r) > m + fe * S && (Ot = m - It + fe * S), It < fe * S && (Ot += It - fe * S, It = fe * S), Q.labelIsNegative = 0 < (Dt = Ft - zt), 0 === Dt && 1 / Qt != 1 / Math.abs(Qt) && (Q.labelIsNegative = !0);
                                                    var Ae = Tt;
                                                    Tt = t.fitToBounds(Tt, this.dy, v), Dt = t.fitToBounds(Dt += Ae - Tt, P * fe - Tt, v - Tt), isNaN(U.percentWidthValue) || (_t = (It = Bt - (Ot = this.width * U.percentWidthValue / 100) / 2) + Ot / 2), Ot = t.roundTo(Ot, 2), Dt = t.roundTo(Dt, 2), It < m + F * S && 0 < Ot && (this.showOnAxis && (Tt -= P / 2), Jt = new t.Cuboid(s, Ot, Dt, S - e.d3x, P - e.d3y, $t, te, V, Rt, this.lineAlpha, Y, x, y, G, ae, ie, D), Q.columnHeight = Math.abs(Dt), Q.columnWidth = Math.abs(Ot))
                                                } Jt && (Lt = Jt.set, t.setCN(e, Jt.set, "graph-" + this.type), t.setCN(e, Jt.set, "graph-" + this.id), Q.className && t.setCN(e, Jt.set, Q.className, !0), Q.columnGraphics = Lt, It = t.roundTo(It, 2), Tt = t.roundTo(Tt, 2), Lt.translate(It, Tt), (Q.url || this.showHandOnHover) && Lt.setAttr("cursor", "pointer"), O || ("none" == N && (g = y ? (this.end + 1 - ft) * M - i : M * ft + i), "3d" == N && (y ? (g = (this.end + 1 - ft) * M - i - 1e3 * this.depthCount, _t += S * F, jt += S * F, Q.y += S * F) : (g = (M - i) * (ft + 1) + 1e3 * this.depthCount, Xt += P * F, Ut += P * F, Q.y += P * F)), "regular" != N && "100%" != N || (g = y ? 0 < oe.value ? (this.end + 1 - ft) * M + i + 1e3 * this.depthCount : (this.end + 1 - ft) * M - i + 1e3 * this.depthCount : 0 < oe.value ? M * ft + i : M * ft - i), this.columnsArray.push({
                                                column: Jt,
                                                depth: g
                                            }), Q.x = y ? Tt + Ot / 2 : It + Ot / 2, this.ownColumns.push(Jt), this.animateColumns(Jt, ft, Et, Vt, Ft, zt), this.addListeners(Lt, Q), void 0 !== this.tabIndex && Lt.setAttr("tabindex", this.tabIndex)), this.columnsSet.push(Lt))
                                        }
                                        break;
                                    case "candlestick":
                                        if (!isNaN(qt) && !isNaN(Qt)) {
                                            var xe, Ce;
                                            if (Rt = ee, void 0 != Q.lineColor && (Rt = Q.lineColor), _t = Et, Ut = Xt = Ft, jt = Et, y) {
                                                if ("open" == u && (jt = Vt), "high" == u && (jt = Wt), "low" == u && (jt = Ht), Et = t.fitToBounds(Et, 0, se), Vt = t.fitToBounds(Vt, 0, se), Ht = t.fitToBounds(Ht, 0, se), Wt = t.fitToBounds(Wt, 0, se), 0 === Et && 0 === Vt && 0 === Ht && 0 === Wt) continue;
                                                if (Et == se && Vt == se && Ht == se && Wt == se) continue;
                                                var we, ke;
                                                It = Vt, (Tt = Ft - r / 2) + (Ot = r) > v && (Ot = v - Tt), 0 > Tt && (Ot += Tt, Tt = 0), Tt < v && 0 < Ot && (Qt > qt ? (we = [Et, Wt], ke = [Vt, Ht]) : (we = [Vt, Wt], ke = [Et, Ht]), !isNaN(Wt) && !isNaN(Ht) && Ft < v && 0 < Ft && (xe = t.line(s, we, [Ft, Ft], Rt, z, V), Ce = t.line(s, ke, [Ft, Ft], Rt, z, V)), Jt = new t.Cuboid(s, Dt = Et - Vt, Ot, S, P, $t, ot, V, Rt, z, Y, x, y, G, ae, ie, D))
                                            } else {
                                                if ("open" == u && (Ut = zt), "high" == u && (Ut = Yt), "low" == u && (Ut = Gt), Ft = t.fitToBounds(Ft, 0, le), zt = t.fitToBounds(zt, 0, le), Gt = t.fitToBounds(Gt, 0, le), Yt = t.fitToBounds(Yt, 0, le), 0 === Ft && 0 === zt && 0 === Gt && 0 === Yt) continue;
                                                if (Ft == le && zt == le && Gt == le && Yt == le) continue;
                                                var Me, Se;
                                                Tt = zt + V / 2, (It = Et - r / 2) + (Ot = r) > m && (Ot = m - It), 0 > It && (Ot += It, It = 0), Dt = Ft - zt, It < m && 0 < Ot && (ne && Qt >= qt && (te = 0), Jt = new t.Cuboid(s, Ot, Dt, S, P, $t, te, V, Rt, z, Y, x, y, G, ae, ie, D), Qt > qt ? (Me = [Ft, Yt], Se = [zt, Gt]) : (Me = [zt, Yt], Se = [Ft, Gt]), !isNaN(Yt) && !isNaN(Gt) && Et < m && 0 < Et && (xe = t.line(s, [Et, Et], Me, Rt, z, V), Ce = t.line(s, [Et, Et], Se, Rt, z, V), t.setCN(e, xe, this.bcn + "line-high"), Q.className && t.setCN(e, xe, Q.className, !0), t.setCN(e, Ce, this.bcn + "line-low"), Q.className && t.setCN(e, Ce, Q.className, !0)))
                                            }
                                            Jt && (Q.columnGraphics = Lt = Jt.set, W.push(Lt), Lt.translate(It, Tt - V / 2), (Q.url || this.showHandOnHover) && Lt.setAttr("cursor", "pointer"), xe && (W.push(xe), W.push(Ce)), O || (Q.x = y ? Tt + Ot / 2 : It + Ot / 2, this.animateColumns(Jt, ft, Et, Vt, Ft, zt), this.addListeners(Lt, Q), void 0 !== this.tabIndex && Lt.setAttr("tabindex", this.tabIndex)))
                                        }
                                        break;
                                    case "ohlc":
                                        if (!(isNaN(qt) || isNaN(Kt) || isNaN(Zt) || isNaN(Qt))) {
                                            var Pe, Ne, Ie, Te = s.set();
                                            if (W.push(Te), Qt < qt && (Q.isNegative = !0, void 0 != at && (ee = at)), void 0 != Q.lineColor && (ee = Q.lineColor), y) {
                                                if (Ut = Ft, jt = Et, "open" == u && (jt = Vt), "high" == u && (jt = Wt), "low" == u && (jt = Ht), Ht = t.fitToBounds(Ht, 0, se), Wt = t.fitToBounds(Wt, 0, se), 0 === Et && 0 === Vt && 0 === Ht && 0 === Wt) continue;
                                                if (Et == se && Vt == se && Ht == se && Wt == se) continue;
                                                var Oe = t.fitToBounds(Oe = Ft - r / 2, 0, v),
                                                    De = t.fitToBounds(Ft, 0, v),
                                                    Re = t.fitToBounds(Re = Ft + r / 2, 0, v);
                                                0 <= Vt && Vt <= se && (Ne = t.line(s, [Vt, Vt], [Oe, De], ee, z, V, G)), 0 < Ft && Ft < v && (Pe = t.line(s, [Ht, Wt], [Ft, Ft], ee, z, V, G)), 0 <= Et && Et <= se && (Ie = t.line(s, [Et, Et], [De, Re], ee, z, V, G))
                                            } else {
                                                Ut = Ft, "open" == u && (Ut = zt), "high" == u && (Ut = Yt), "low" == u && (Ut = Gt), jt = Et, Gt = t.fitToBounds(Gt, 0, le), Yt = t.fitToBounds(Yt, 0, le);
                                                var Le = t.fitToBounds(Le = Et - r / 2, 0, m),
                                                    Be = t.fitToBounds(Et, 0, m),
                                                    Ee = t.fitToBounds(Ee = Et + r / 2, 0, m);
                                                0 <= zt && zt <= le && (Ne = t.line(s, [Le, Be], [zt, zt], ee, z, V, G)), 0 < Et && Et < m && (Pe = t.line(s, [Et, Et], [Gt, Yt], ee, z, V, G)), 0 <= Ft && Ft <= le && (Ie = t.line(s, [Be, Ee], [Ft, Ft], ee, z, V, G))
                                            }
                                            W.push(Ne), W.push(Pe), W.push(Ie), t.setCN(e, Ne, this.bcn + "stroke-open"), t.setCN(e, Ie, this.bcn + "stroke-close"), t.setCN(e, Pe, this.bcn + "stroke"), Q.className && t.setCN(e, Te, Q.className, !0), Pe && this.addListeners(Pe, Q), Ie && this.addListeners(Ie, Q), Ne && this.addListeners(Ne, Q), _t = Et, Xt = Ft
                                        }
                                }
                                if (!O && !isNaN(Qt)) {
                                    var Fe = this.hideBulletsCount;
                                    if (this.end - this.start <= Fe || 0 === Fe) {
                                        var Ve = this.createBullet(Q, jt, Ut, ft),
                                            ze = this.labelText;
                                        if (ze && !isNaN(_t) && !isNaN(_t)) {
                                            var He = this.createLabel(Q, ze),
                                                Ge = 0;
                                            Ve && (Ge = Ve.size), this.positionLabel(Q, _t, Xt, He, Ge)
                                        }
                                        if ("regular" == N || "100%" == N) {
                                            var We = a.totalText;
                                            if (We) {
                                                var Ye = this.createLabel(Q, We, a.totalTextColor);
                                                if (t.setCN(e, Ye, this.bcn + "label-total"), this.allBullets.push(Ye), Ye) {
                                                    var _e, Xe, je = Ye.getBBox(),
                                                        Ue = je.width,
                                                        Qe = je.height,
                                                        Ke = a.totalTextOffset,
                                                        Ze = a.totals[ft];
                                                    Ze && Ze.remove();
                                                    var qe = 0;
                                                    "column" != o && (qe = this.bulletSize), y ? (Xe = Xt, _e = 0 > Qt ? Et - Ue / 2 - 2 - qe - Ke : Et + Ue / 2 + 3 + qe + Ke) : (_e = _t, Xe = 0 > Qt ? Ft + Qe / 2 + qe + Ke : Ft - Qe / 2 - 3 - qe - Ke), Ye.translate(_e, Xe), a.totals[ft] = Ye, y ? (0 > Xe || Xe > v) && Ye.remove() : (0 > _e || _e > m) && Ye.remove()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        this.lastDataItem = Q, "line" != o && "step" != o && "smoothedLine" != o || ("smoothedLine" == o ? this.drawSmoothedGraph(w, k, vt, bt) : this.drawLineGraph(w, k, vt, bt), O || this.launchAnimation()), this.bulletsHidden && this.hideBullets(), this.customBulletsHidden && this.hideCustomBullets()
                    },
                    animateColumns: function(t, e) {
                        var n = this,
                            i = n.chart.startDuration;
                        0 < i && !n.animationPlayed && (n.seqAn ? (t.set.hide(), n.animationArray.push(t), i = setTimeout(function() {
                            n.animate.call(n)
                        }, i / (n.end - n.start + 1) * (e - n.start) * 1e3), n.timeOuts.push(i)) : n.animate(t), n.chart.animatable.push(t))
                    },
                    createLabel: function(e, n, i) {
                        var l = this.chart,
                            s = e.labelColor;
                        s || (s = this.color), s || (s = l.color), i && (s = i), void 0 === (i = this.fontSize) && (this.fontSize = i = l.fontSize);
                        var a = this.labelFunction;
                        if (n = l.formatString(n, e), n = t.cleanFromEmpty(n), a && (n = a(e, n)), void 0 !== n && "" !== n) return (e = t.text(this.container, n, s, l.fontFamily, i)).node.style.pointerEvents = "none", t.setCN(l, e, this.bcn + "label"), this.bulletSet.push(e), e
                    },
                    positiveClip: function(t) {
                        t.clipRect(this.pmx, this.pmy, this.pmw, this.pmh)
                    },
                    negativeClip: function(t) {
                        t.clipRect(this.nmx, this.nmy, this.nmw, this.nmh)
                    },
                    drawLineGraph: function(e, n, i, l) {
                        var s = this;
                        if (1 < e.length) {
                            var a = s.noRounding,
                                o = s.set,
                                r = s.chart,
                                u = s.container,
                                h = u.set(),
                                d = u.set();
                            o.push(d), o.push(h);
                            var c = s.lineAlpha,
                                p = s.lineThickness,
                                g = (o = s.fillAlphas, s.lineColorR),
                                f = s.negativeLineAlpha;
                            isNaN(f) && (f = c), (m = s.lineColorSwitched) && (g = m);
                            var m = s.fillColorsR;
                            (b = s.fillColorsSwitched) && (m = b);
                            var v = s.dashLength;
                            (b = s.dashLengthSwitched) && (v = b);
                            var b = s.negativeLineColor,
                                y = s.negativeFillColors,
                                A = s.negativeFillAlphas,
                                x = s.baseCoord;
                            0 !== s.negativeBase && ((x = s.valueAxis.getCoordinate(s.negativeBase, a)) > s.height && (x = s.height), 0 > x && (x = 0)), (c = t.line(u, e, n, g, c, p, v, !1, !1, a)).node.setAttribute("stroke-linejoin", "round"), t.setCN(r, c, s.bcn + "stroke"), h.push(c), h.click(function(t) {
                                s.handleGraphEvent(t, "clickGraph")
                            }).mouseover(function(t) {
                                s.handleGraphEvent(t, "rollOverGraph")
                            }).mouseout(function(t) {
                                s.handleGraphEvent(t, "rollOutGraph")
                            }).touchmove(function(t) {
                                s.chart.handleMouseMove(t)
                            }).touchend(function(t) {
                                s.chart.handleTouchEnd(t)
                            }), void 0 === b || s.useNegativeColorIfDown || ((p = t.line(u, e, n, b, f, p, v, !1, !1, a)).node.setAttribute("stroke-linejoin", "round"), t.setCN(r, p, s.bcn + "stroke"), t.setCN(r, p, s.bcn + "stroke-negative"), d.push(p)), (0 < o || 0 < A) && (p = e.join(";").split(";"), f = n.join(";").split(";"), "serial" == (c = r.type) || "radar" == c ? 0 < i.length ? (i.reverse(), l.reverse(), p = e.concat(i), f = n.concat(l)) : "radar" == c ? (f.push(0), p.push(0)) : s.rotate ? (f.push(f[f.length - 1]), p.push(x), f.push(f[0]), p.push(x), f.push(f[0]), p.push(p[0])) : (p.push(p[p.length - 1]), f.push(x), p.push(p[0]), f.push(x), p.push(e[0]), f.push(f[0])) : "xy" == c && (n = s.fillToAxis) && (t.isString(n) && (n = r.getValueAxisById(n)), "H" == n.orientation ? (x = "top" == n.position ? 0 : n.height, p.push(p[p.length - 1]), f.push(x), p.push(p[0]), f.push(x), p.push(e[0]), f.push(f[0])) : (x = "left" == n.position ? 0 : n.width, f.push(f[f.length - 1]), p.push(x), f.push(f[0]), p.push(x), f.push(f[0]), p.push(p[0]))), e = s.gradientRotation, 0 < o && ((n = t.polygon(u, p, f, m, o, 1, "#000", 0, e, a)).pattern(s.pattern, NaN, r.path), t.setCN(r, n, s.bcn + "fill"), h.push(n), n.toBack()), (y || void 0 !== b) && (isNaN(A) && (A = o), y || (y = b), a = t.polygon(u, p, f, y, A, 1, "#000", 0, e, a), t.setCN(r, a, s.bcn + "fill"), t.setCN(r, a, s.bcn + "fill-negative"), a.pattern(s.pattern, NaN, r.path), d.push(a), a.toBack(), d.click(function(t) {
                                s.handleGraphEvent(t, "clickGraph")
                            }).mouseover(function(t) {
                                s.handleGraphEvent(t, "rollOverGraph")
                            }).mouseout(function(t) {
                                s.handleGraphEvent(t, "rollOutGraph")
                            }).touchmove(function(t) {
                                s.chart.handleMouseMove(t)
                            }).touchend(function(t) {
                                s.chart.handleTouchEnd(t)
                            }))), s.applyMask(d, h)
                        }
                    },
                    applyMask: function(t, e) {
                        var n = t.length();
                        "serial" != this.chart.type || this.scrollbar || (this.positiveClip(e), 0 < n && this.negativeClip(t))
                    },
                    drawSmoothedGraph: function(e, n, i, l) {
                        if (1 < e.length) {
                            var s = this.set,
                                a = this.chart,
                                o = this.container,
                                r = o.set(),
                                u = o.set();
                            s.push(u), s.push(r);
                            var h = this.lineAlpha,
                                d = this.lineThickness,
                                c = (s = this.dashLength, this.fillAlphas),
                                p = this.lineColorR,
                                g = this.fillColorsR,
                                f = this.negativeLineColor,
                                m = this.negativeFillColors,
                                v = this.negativeFillAlphas,
                                b = this.baseCoord,
                                y = this.lineColorSwitched;
                            y && (p = y), (y = this.fillColorsSwitched) && (g = y);
                            var A = this.negativeLineAlpha;
                            isNaN(A) && (A = h), y = this.getGradRotation(), h = new t.Bezier(o, e, n, p, h, d, g, 0, s, void 0, y), t.setCN(a, h, this.bcn + "stroke"), r.push(h.path), void 0 !== f && (d = new t.Bezier(o, e, n, f, A, d, g, 0, s, void 0, y), t.setCN(a, d, this.bcn + "stroke"), t.setCN(a, d, this.bcn + "stroke-negative"), u.push(d.path)), 0 < c && (d = e.join(";").split(";"), h = n.join(";").split(";"), p = "", 0 < i.length ? (i.push("M"), l.push("M"), i.reverse(), l.reverse(), d = e.concat(i), h = n.concat(l)) : (this.rotate ? (p += " L" + b + "," + n[n.length - 1], p += " L" + b + "," + n[0]) : (p += " L" + e[e.length - 1] + "," + b, p += " L" + e[0] + "," + b), p += " L" + e[0] + "," + n[0]), e = new t.Bezier(o, d, h, NaN, 0, 0, g, c, s, p, y), t.setCN(a, e, this.bcn + "fill"), e.path.pattern(this.pattern, NaN, a.path), r.push(e.path), m || void 0 !== f) && (v || (v = c), m || (m = f), (o = new t.Bezier(o, d, h, NaN, 0, 0, m, v, s, p, y)).path.pattern(this.pattern, NaN, a.path), t.setCN(a, o, this.bcn + "fill"), t.setCN(a, o, this.bcn + "fill-negative"), u.push(o.path)), this.applyMask(u, r)
                        }
                    },
                    launchAnimation: function() {
                        var e = this,
                            n = e.chart.startDuration;
                        if (0 < n && !e.animationPlayed) {
                            var i = e.set,
                                l = e.bulletSet;
                            t.VML || (i.attr({
                                opacity: e.startAlpha
                            }), l.attr({
                                opacity: e.startAlpha
                            })), i.hide(), l.hide(), e.seqAn ? (n = setTimeout(function() {
                                e.animateGraphs.call(e)
                            }, e.index * n * 1e3), e.timeOuts.push(n)) : e.animateGraphs()
                        }
                    },
                    animateGraphs: function() {
                        var t = this.chart,
                            e = this.set,
                            n = this.bulletSet,
                            i = this.x,
                            l = this.y;
                        e.show(), n.show();
                        var s = t.startDuration,
                            a = t.startEffect;
                        e && (this.rotate ? (e.translate(-1e3, l), n.translate(-1e3, l)) : (e.translate(i, -1e3), n.translate(i, -1e3)), e.animate({
                            opacity: 1,
                            translate: i + "," + l
                        }, s, a), n.animate({
                            opacity: 1,
                            translate: i + "," + l
                        }, s, a), t.animatable.push(e))
                    },
                    animate: function(e) {
                        var n = this.chart,
                            i = this.animationArray;
                        !e && 0 < i.length && (e = i[0], i.shift()), i = t[t.getEffect(n.startEffect)], n = n.startDuration, e && (this.rotate ? e.animateWidth(n, i) : e.animateHeight(n, i), e.set.show())
                    },
                    legendKeyColor: function() {
                        var t = this.legendColor,
                            e = this.lineAlpha;
                        return void 0 === t && (t = this.lineColorR, 0 === e && (e = this.fillColorsR) && (t = "object" == typeof e ? e[0] : e)), t
                    },
                    legendKeyAlpha: function() {
                        var t = this.legendAlpha;
                        return void 0 === t && (this.fillAlphas > (t = this.lineAlpha) && (t = this.fillAlphas), 0 === t && (t = this.bulletAlpha), 0 === t && (t = 1)), t
                    },
                    createBullet: function(e, n, i) {
                        if (!isNaN(n) && !isNaN(i) && ("none" != this.bullet || this.customBullet || e.bullet || e.customBullet)) {
                            var l = this.chart,
                                s = this.container,
                                a = this.bulletOffset,
                                o = this.bulletSize;
                            isNaN(e.bulletSize) || (o = e.bulletSize);
                            var r, u = e.values.value,
                                h = this.maxValue,
                                d = this.minValue,
                                c = this.maxBulletSize,
                                p = this.minBulletSize;
                            isNaN(h) || (isNaN(u) || (o = (u - d) / (h - d) * (c - p) + p), d == h && (o = c)), h = o, this.bulletAxis && (o = e.values.error, isNaN(o) || (u = o), o = this.bulletAxis.stepWidth * u), o < this.minBulletSize && (o = this.minBulletSize), this.rotate ? n = e.isNegative ? n - a : n + a : i = e.isNegative ? i + a : i - a, p = this.bulletColorR, e.lineColor && void 0 === this.bulletColor && (this.bulletColorSwitched = e.lineColor), this.bulletColorSwitched && (p = this.bulletColorSwitched), e.isNegative && void 0 !== this.bulletColorNegative && (p = this.bulletColorNegative), void 0 !== e.color && (p = e.color), "xy" == l.type && this.valueField && (r = this.pattern, e.pattern && (r = e.pattern)), a = this.bullet, e.bullet && (a = e.bullet), u = this.bulletBorderThickness, c = this.bulletBorderAlpha;
                            var g = this.bulletAlpha;
                            (d = this.bulletBorderColorR) || (d = p), this.useLineColorForBulletBorder && (d = this.lineColorR, e.isNegative && this.negativeLineColor && (d = this.negativeLineColor), this.lineColorSwitched && (d = this.lineColorSwitched));
                            var f = e.alpha;
                            return isNaN(f) || (g = f), r = t.bullet(s, a, o, p, g, u, d, c, h, 0, r, l.path), h = this.customBullet, e.customBullet && (h = e.customBullet), h && (r && r.remove(), "function" == typeof h ? ((h = new h).chart = l, e.bulletConfig && (h.availableSpace = i, h.graph = this, h.graphDataItem = e, h.bulletY = i, e.bulletConfig.minCoord = this.minCoord - i, h.bulletConfig = e.bulletConfig), h.write(s), r && h.showBullet && h.set.push(r), e.customBulletGraphics = h.cset, r = h.set) : (r = s.set(), h = s.image(h, 0, 0, o, o), r.push(h), this.centerCustomBullets && h.translate(-o / 2, -o / 2))), r && ((e.url || this.showHandOnHover) && r.setAttr("cursor", "pointer"), "serial" != l.type && "gantt" != l.type || (-.5 > n || n > this.width || i < -o / 2 || i > this.height) && (r.remove(), r = null), r && (this.bulletSet.push(r), r.translate(n, i), this.addListeners(r, e), this.allBullets.push(r)), e.bx = n, e.by = i, t.setCN(l, r, this.bcn + "bullet"), e.className && t.setCN(l, r, e.className, !0)), r ? (r.size = o || 0, (l = this.bulletHitAreaSize) && ((s = t.circle(s, l, "#FFFFFF", .001, 0)).translate(n, i), e.hitBullet = s, this.bulletSet.push(s), this.addListeners(s, e)), e.bulletGraphics = r, void 0 !== this.tabIndex && r.setAttr("tabindex", this.tabIndex)) : r = {
                                size: 0
                            }, r.graphDataItem = e, r
                        }
                    },
                    showBullets: function() {
                        var t, e = this.allBullets;
                        for (this.bulletsHidden = !1, t = 0; t < e.length; t++) e[t].show()
                    },
                    hideBullets: function() {
                        var t, e = this.allBullets;
                        for (this.bulletsHidden = !0, t = 0; t < e.length; t++) e[t].hide()
                    },
                    showCustomBullets: function() {
                        var t, e = this.allBullets;
                        for (this.customBulletsHidden = !1, t = 0; t < e.length; t++) {
                            var n = e[t].graphDataItem;
                            n && n.customBulletGraphics && n.customBulletGraphics.show()
                        }
                    },
                    hideCustomBullets: function() {
                        var t, e = this.allBullets;
                        for (this.customBulletsHidden = !0, t = 0; t < e.length; t++) {
                            var n = e[t].graphDataItem;
                            n && n.customBulletGraphics && n.customBulletGraphics.hide()
                        }
                    },
                    addListeners: function(t, e) {
                        var n = this;
                        t.mouseover(function(t) {
                            n.handleRollOver(e, t)
                        }).mouseout(function(t) {
                            n.handleRollOut(e, t)
                        }).touchend(function(t) {
                            n.handleRollOver(e, t), n.chart.panEventsEnabled && n.handleClick(e, t)
                        }).touchstart(function(t) {
                            n.handleRollOver(e, t)
                        }).click(function(t) {
                            n.handleClick(e, t)
                        }).dblclick(function(t) {
                            n.handleDoubleClick(e, t)
                        }).contextmenu(function(t) {
                            n.handleRightClick(e, t)
                        });
                        var i = n.chart;
                        if (i.accessible && n.accessibleLabel) {
                            var l = i.formatString(n.accessibleLabel, e);
                            i.makeAccessible(t, l)
                        }
                    },
                    handleRollOver: function(t, e) {
                        if (this.handleGraphEvent(e, "rollOverGraph"), t) {
                            var n = this.chart;
                            t.bulletConfig && (n.isRolledOverBullet = !0);
                            var i = {
                                type: "rollOverGraphItem",
                                item: t,
                                index: t.index,
                                graph: this,
                                target: this,
                                chart: this.chart,
                                event: e
                            };
                            this.fire(i), n.fire(i), clearTimeout(n.hoverInt), (n = n.chartCursor) && n.valueBalloonsEnabled || this.showGraphBalloon(t, "V", !0)
                        }
                    },
                    handleRollOut: function(t, e) {
                        var n = this.chart;
                        if (t) {
                            var i = {
                                type: "rollOutGraphItem",
                                item: t,
                                index: t.index,
                                graph: this,
                                target: this,
                                chart: this.chart,
                                event: e
                            };
                            this.fire(i), n.fire(i), n.isRolledOverBullet = !1
                        }
                        this.handleGraphEvent(e, "rollOutGraph"), (n = n.chartCursor) && n.valueBalloonsEnabled || this.hideBalloon()
                    },
                    handleClick: function(e, n) {
                        if (!this.chart.checkTouchMoved() && this.chart.checkTouchDuration(n)) {
                            if (e) {
                                var i = {
                                    type: "clickGraphItem",
                                    item: e,
                                    index: e.index,
                                    graph: this,
                                    target: this,
                                    chart: this.chart,
                                    event: n
                                };
                                this.fire(i), this.chart.fire(i), t.getURL(e.url, this.urlTarget)
                            }
                            this.handleGraphEvent(n, "clickGraph")
                        }
                    },
                    handleGraphEvent: function(t, e) {
                        var n = {
                            type: e,
                            graph: this,
                            target: this,
                            chart: this.chart,
                            event: t
                        };
                        this.fire(n), this.chart.fire(n)
                    },
                    handleRightClick: function(t, e) {
                        if (t) {
                            var n = {
                                type: "rightClickGraphItem",
                                item: t,
                                index: t.index,
                                graph: this,
                                target: this,
                                chart: this.chart,
                                event: e
                            };
                            this.fire(n), this.chart.fire(n)
                        }
                    },
                    handleDoubleClick: function(t, e) {
                        if (t) {
                            var n = {
                                type: "doubleClickGraphItem",
                                item: t,
                                index: t.index,
                                graph: this,
                                target: this,
                                chart: this.chart,
                                event: e
                            };
                            this.fire(n), this.chart.fire(n)
                        }
                    },
                    zoom: function(t, e) {
                        this.start = t, this.end = e, this.draw()
                    },
                    changeOpacity: function(t) {
                        var e, n = this.set;
                        if (n && n.setAttr("opacity", t), n = this.ownColumns)
                            for (e = 0; e < n.length; e++) {
                                var i = n[e].set;
                                i && i.setAttr("opacity", t)
                            }(n = this.bulletSet) && n.setAttr("opacity", t)
                    },
                    destroy: function() {
                        t.remove(this.set), t.remove(this.bulletSet);
                        var e, n = this.timeOuts;
                        if (n)
                            for (e = 0; e < n.length; e++) clearTimeout(n[e]);
                        this.timeOuts = []
                    },
                    createBalloon: function() {
                        var e = this.chart;
                        this.balloon ? this.balloon.destroy && this.balloon.destroy() : this.balloon = {};
                        var n = this.balloon;
                        t.extend(n, e.balloon, !0), n.chart = e, n.mainSet = e.plotBalloonsSet, n.className = this.id
                    },
                    hideBalloon: function() {
                        var t = this,
                            e = t.chart;
                        e.chartCursor && e.chartCursor.valueBalloonsEnabled || e.hideBalloon(), clearTimeout(t.hoverInt), t.hoverInt = setTimeout(function() {
                            t.hideBalloonReal.call(t)
                        }, e.hideBalloonTime)
                    },
                    hideBalloonReal: function() {
                        this.balloon && this.balloon.hide(), this.fixBulletSize()
                    },
                    fixBulletSize: function() {
                        if (t.isModern) {
                            var e = this.resizedDItem;
                            if (e) {
                                var n = e.bulletGraphics;
                                if (n && !n.doNotScale) {
                                    n.translate(e.bx, e.by, 1);
                                    var i = this.bulletAlpha;
                                    isNaN(e.alpha) || (i = e.alpha), n.setAttr("fill-opacity", i), n.setAttr("stroke-opacity", this.bulletBorderAlpha)
                                }
                            }
                            this.resizedDItem = null
                        }
                    },
                    showGraphBalloon: function(e, n, i, l, s) {
                        if (e) {
                            var a = this.chart,
                                o = this.balloon,
                                r = 0,
                                u = 0,
                                h = !0;
                            if ((d = a.chartCursor) && d.valueBalloonsEnabled || (o = a.balloon, r = this.x, u = this.y, h = !1), clearTimeout(this.hoverInt), a.chartCursor && (this.currentDataItem = e, "serial" == a.type && a.isRolledOverBullet && a.chartCursor.valueBalloonsEnabled)) return void this.hideBalloonReal();
                            if (this.resizeBullet(e, l, s), o && o.enabled && this.showBalloon && !this.hidden) {
                                var d = a.formatString(this.balloonText, e, !0),
                                    c = this.balloonFunction;
                                c && (d = c(e, e.graph)), d && (d = t.cleanFromEmpty(d)), d && "" !== d ? (l = a.getBalloonColor(this, e), o.drop || (o.pointerOrientation = n), n = e.x, s = e.y, a.rotate && (n = e.y, s = e.x), n += r, s += u, isNaN(n) || isNaN(s) ? this.hideBalloonReal() : (e = this.width, c = this.height, h && o.setBounds(r, u, e + r, c + u), o.changeColor(l), o.setPosition(n, s), o.fixPrevious(), o.fixedPosition && (i = !1), !i && "radar" != a.type && (n < r - .5 || n > e + r || s < u - .5 || s > c + u) ? (o.showBalloon(d), o.hide(0)) : (o.followCursor(i), o.showBalloon(d)))) : (this.hideBalloonReal(), o.hide(), this.resizeBullet(e, l, s))
                            } else this.hideBalloonReal()
                        }
                    },
                    resizeBullet: function(e, n, i) {
                        if (this.fixBulletSize(), e && t.isModern && (1 != n || !isNaN(i))) {
                            var l = e.bulletGraphics;
                            l && !l.doNotScale && (l.translate(e.bx, e.by, n), isNaN(i) || (l.setAttr("fill-opacity", i), l.setAttr("stroke-opacity", i)), this.resizedDItem = e)
                        }
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.ChartCursor = t.Class({
                    construct: function(e) {
                        this.cname = "ChartCursor", this.createEvents("changed", "zoomed", "onHideCursor", "onShowCursor", "draw", "selected", "moved", "panning", "zoomStarted"), this.enabled = !0, this.cursorAlpha = 1, this.selectionAlpha = .2, this.cursorColor = "#CC0000", this.categoryBalloonAlpha = 1, this.color = "#FFFFFF", this.type = "cursor", this.zoomed = !1, this.zoomable = !0, this.pan = !1, this.categoryBalloonDateFormat = "MMM DD, YYYY", this.categoryBalloonText = "[[category]]", this.categoryBalloonEnabled = this.valueBalloonsEnabled = !0, this.rolledOver = !1, this.cursorPosition = "middle", this.bulletsEnabled = this.skipZoomDispatch = !1, this.bulletSize = 8, this.selectWithoutZooming = this.oneBalloonOnly = !1, this.graphBulletSize = 1.7, this.animationDuration = .3, this.zooming = !1, this.adjustment = 0, this.avoidBalloonOverlapping = !0, this.leaveCursor = !1, this.leaveAfterTouch = !0, this.valueZoomable = !1, this.balloonPointerOrientation = "horizontal", this.hLineEnabled = this.vLineEnabled = !0, this.vZoomEnabled = this.hZoomEnabled = !1, t.applyTheme(this, e, this.cname)
                    },
                    draw: function() {
                        this.destroy();
                        var e = this.chart;
                        e.panRequired = !0;
                        var n = e.container;
                        this.rotate = e.rotate, this.container = n, this.prevLineHeight = this.prevLineWidth = NaN, (n = n.set()).translate(this.x, this.y), this.set = n, e.cursorSet.push(n), this.createElements(), t.isString(this.limitToGraph) && (this.limitToGraph = t.getObjById(e.graphs, this.limitToGraph), this.fullWidth = !1, this.cursorPosition = "middle"), this.pointer = this.balloonPointerOrientation.substr(0, 1).toUpperCase(), this.isHidden = !1, this.hideLines(), this.valueLineAxis || (this.valueLineAxis = e.valueAxes[0])
                    },
                    createElements: function() {
                        var e, n, i = this,
                            l = i.chart,
                            s = l.dx,
                            a = l.dy,
                            o = i.width,
                            r = i.height,
                            u = i.cursorAlpha,
                            h = i.valueLineAlpha;
                        i.rotate ? (e = h, n = u) : (n = h, e = u), "xy" == l.type && (n = u, void 0 !== h && (n = h), e = u), i.vvLine = t.line(i.container, [s, 0, 0], [a, 0, r], i.cursorColor, e, 1), t.setCN(l, i.vvLine, "cursor-line"), t.setCN(l, i.vvLine, "cursor-line-vertical"), i.hhLine = t.line(i.container, [0, o, o + s], [0, 0, a], i.cursorColor, n, 1), t.setCN(l, i.hhLine, "cursor-line"), t.setCN(l, i.hhLine, "cursor-line-horizontal"), i.vLine = i.rotate ? i.vvLine : i.hhLine, i.set.push(i.vvLine), i.set.push(i.hhLine), i.set.node.style.pointerEvents = "none", i.fullLines = i.container.set(), (l = l.cursorLineSet).push(i.fullLines), l.translate(i.x, i.y), l.clipRect(-1, -1, o + 2, r + 2), void 0 !== i.tabIndex && (l.setAttr("tabindex", i.tabIndex), l.keyup(function(t) {
                            i.handleKeys(t)
                        }).focus(function(t) {
                            i.showCursor()
                        }).blur(function(t) {
                            i.hideCursor()
                        })), i.set.clipRect(0, 0, o, r)
                    },
                    handleKeys: function(e) {
                        var n = this.prevIndex,
                            i = this.chart;
                        if (i) {
                            var l = i.chartData;
                            l && (isNaN(n) && (n = l.length - 1), 37 != e.keyCode && 40 != e.keyCode || n--, 39 != e.keyCode && 38 != e.keyCode || n++, n = t.fitToBounds(n, i.startIndex, i.endIndex), (e = this.chart.chartData[n]) && this.setPosition(e.x.categoryAxis), this.prevIndex = n)
                        }
                    },
                    update: function() {
                        var t = this.chart;
                        if (t) {
                            var e, n = t.mouseX - this.x,
                                i = t.mouseY - this.y;
                            if (this.mouseX = n, this.mouseY = i, this.mouse2X = t.mouse2X - this.x, this.mouse2Y = t.mouse2Y - this.y, t.chartData && 0 < t.chartData.length) {
                                if (this.mouseIsOver() ? (this.hideGraphBalloons = !1, this.rolledOver = e = !0, this.updateDrawing(), this.vvLine && isNaN(this.fx) && (t.rotate || !this.limitToGraph) && this.vvLine.translate(n, 0), !this.hhLine || !isNaN(this.fy) || t.rotate && this.limitToGraph || this.hhLine.translate(0, i), isNaN(this.mouse2X) ? this.dispatchMovedEvent(n, i) : e = !1) : this.forceShow || this.hideCursor(), this.zooming) {
                                    if (!isNaN(this.mouse2X)) return void(isNaN(this.mouse2X0) || this.dispatchPanEvent());
                                    if (this.pan) return void this.dispatchPanEvent();
                                    (this.hZoomEnabled || this.vZoomEnabled) && this.zooming && this.updateSelection()
                                }
                                e && this.showCursor()
                            }
                        }
                    },
                    updateDrawing: function() {
                        if (this.drawing && this.chart.setMouseCursor("crosshair"), this.drawingNow && (t.remove(this.drawingLine), 1 < Math.abs(this.drawStartX - this.mouseX) || 1 < Math.abs(this.drawStartY - this.mouseY))) {
                            var e, n = (e = this.chart).marginTop;
                            this.drawingLine = t.line(this.container, [this.drawStartX + (e = e.marginLeft), this.mouseX + e], [this.drawStartY + n, this.mouseY + n], this.cursorColor, 1, 1)
                        }
                    },
                    fixWidth: function(e) {
                        if (this.fullWidth && this.prevLineWidth != e) {
                            var n = this.vvLine,
                                i = 0;
                            n && (n.remove(), i = n.x), (n = this.container.set()).translate(i, 0), i = t.rect(this.container, e, this.height, this.cursorColor, this.cursorAlpha, this.cursorAlpha, this.cursorColor), t.setCN(this.chart, i, "cursor-fill"), i.translate(-e / 2 - 1, 0), n.push(i), this.vvLine = n, this.fullLines.push(n), this.prevLineWidth = e
                        }
                    },
                    fixHeight: function(e) {
                        if (this.fullWidth && this.prevLineHeight != e) {
                            var n = this.hhLine,
                                i = 0;
                            n && (n.remove(), i = n.y), (n = this.container.set()).translate(0, i), (i = t.rect(this.container, this.width, e, this.cursorColor, this.cursorAlpha)).translate(0, -e / 2), n.push(i), this.fullLines.push(n), this.hhLine = n, this.prevLineHeight = e
                        }
                    },
                    fixVLine: function(t, e) {
                        if (!isNaN(t) && this.vvLine) {
                            if (isNaN(this.prevLineX)) {
                                var n = 0,
                                    i = this.mouseX;
                                if (this.limitToGraph) {
                                    var l = this.chart.categoryAxis;
                                    l && (this.chart.rotate || (n = "bottom" == l.position ? this.height : -this.height), i = t)
                                }
                                this.vvLine.translate(i, n)
                            } else this.prevLineX != t && this.vvLine.translate(this.prevLineX, this.prevLineY);
                            this.fx = t, this.prevLineX != t && (n = this.animationDuration, this.zooming && (n = 0), this.vvLine.stop(), this.vvLine.animate({
                                translate: t + "," + e
                            }, n, "easeOutSine"), this.prevLineX = t, this.prevLineY = e)
                        }
                    },
                    fixHLine: function(t, e) {
                        if (!isNaN(t) && this.hhLine) {
                            if (isNaN(this.prevLineY)) {
                                var n = 0,
                                    i = this.mouseY;
                                if (this.limitToGraph) {
                                    var l = this.chart.categoryAxis;
                                    l && (this.chart.rotate && (n = "right" == l.position ? this.width : -this.width), i = t)
                                }
                                this.hhLine.translate(n, i)
                            } else this.prevLineY != t && this.hhLine.translate(this.prevLineX, this.prevLineY);
                            this.fy = t, this.prevLineY != t && (n = this.animationDuration, this.zooming && (n = 0), this.hhLine.stop(), this.hhLine.animate({
                                translate: e + "," + t
                            }, n, "easeOutSine"), this.prevLineY = t, this.prevLineX = e)
                        }
                    },
                    hideCursor: function(t) {
                        this.forceShow = !1, this.chart.wasTouched && this.leaveAfterTouch || this.isHidden || this.leaveCursor || (this.hideCursorReal(), t ? this.chart.handleCursorHide() : this.fire({
                            target: this,
                            chart: this.chart,
                            type: "onHideCursor"
                        }), this.chart.setMouseCursor("auto"))
                    },
                    hideCursorReal: function() {
                        this.hideLines(), this.isHidden = !0, this.index = this.prevLineY = this.prevLineX = this.mouseY0 = this.mouseX0 = this.fy = this.fx = NaN
                    },
                    hideLines: function() {
                        this.vvLine && this.vvLine.hide(), this.hhLine && this.hhLine.hide(), this.fullLines && this.fullLines.hide(), this.isHidden = !0, this.chart.handleCursorHide()
                    },
                    showCursor: function(t) {
                        !this.drawing && this.enabled && (this.vLineEnabled && this.vvLine && this.vvLine.show(), this.hLineEnabled && this.hhLine && this.hhLine.show(), this.isHidden = !1, this.updateFullLine(), t || this.fire({
                            target: this,
                            chart: this.chart,
                            type: "onShowCursor"
                        }), this.pan && this.chart.setMouseCursor("move"))
                    },
                    updateFullLine: function() {
                        this.zooming && this.fullWidth && this.selection && (this.rotate ? 0 < this.selection.height && this.hhLine.hide() : 0 < this.selection.width && this.vvLine.hide())
                    },
                    updateSelection: function() {
                        if (!this.pan && this.enabled) {
                            var e = this.mouseX,
                                n = this.mouseY;
                            isNaN(this.fx) || (e = this.fx), isNaN(this.fy) || (n = this.fy), this.clearSelection();
                            var i, l = this.mouseX0,
                                s = this.mouseY0,
                                a = this.width,
                                o = this.height;
                            e = t.fitToBounds(e, 0, a), n = t.fitToBounds(n, 0, o), e < l && (i = e, e = l, l = i), n < s && (i = n, n = s, s = i), this.hZoomEnabled ? a = e - l : l = 0, this.vZoomEnabled ? o = n - s : s = 0, isNaN(this.mouse2X) && 0 < Math.abs(a) && 0 < Math.abs(o) && (e = this.chart, n = t.rect(this.container, a, o, this.cursorColor, this.selectionAlpha), t.setCN(e, n, "cursor-selection"), n.width = a, n.height = o, n.translate(l, s), this.set.push(n), this.selection = n), this.updateFullLine()
                        }
                    },
                    mouseIsOver: function() {
                        var t = this.mouseX,
                            e = this.mouseY;
                        return this.justReleased ? (this.justReleased = !1, !0) : !!this.mouseIsDown || this.chart.mouseIsOver && 0 < t && t < this.width && 0 < e && e < this.height || (this.handleMouseOut(), !1)
                    },
                    fixPosition: function() {
                        this.prevY = this.prevX = NaN
                    },
                    handleMouseDown: function() {
                        if (this.update(), this.mouseIsOver())
                            if (this.mouseIsDown = !0, this.mouseX0 = this.mouseX, this.mouseY0 = this.mouseY, this.mouse2X0 = this.mouse2X, this.mouse2Y0 = this.mouse2Y, this.drawing) this.drawStartY = this.mouseY, this.drawStartX = this.mouseX, this.drawingNow = !0;
                            else if (this.dispatchMovedEvent(this.mouseX, this.mouseY), !this.pan && isNaN(this.mouse2X0) && (isNaN(this.fx) || (this.mouseX0 = this.fx), isNaN(this.fy) || (this.mouseY0 = this.fy)), this.hZoomEnabled || this.vZoomEnabled) {
                            this.zooming = !0;
                            var t = {
                                chart: this.chart,
                                target: this,
                                type: "zoomStarted"
                            };
                            t.x = this.mouseX / this.width, t.y = this.mouseY / this.height, this.index0 = t.index = this.index, this.timestamp0 = this.timestamp, this.fire(t)
                        }
                    },
                    registerInitialMouse: function() {},
                    handleReleaseOutside: function() {
                        if (this.mouseIsDown = !1, this.drawingNow) {
                            this.drawingNow = !1, t.remove(this.drawingLine);
                            var e = this.drawStartX,
                                n = this.drawStartY,
                                i = this.mouseX,
                                l = this.mouseY,
                                s = this.chart;
                            (2 < Math.abs(e - i) || 2 < Math.abs(n - l)) && this.fire({
                                type: "draw",
                                target: this,
                                chart: s,
                                initialX: e,
                                initialY: n,
                                finalX: i,
                                finalY: l
                            })
                        }
                        this.zooming && (this.zooming = !1, this.selectWithoutZooming ? this.dispatchZoomEvent("selected") : (this.hZoomEnabled || this.vZoomEnabled) && this.dispatchZoomEvent("zoomed"), this.rolledOver && this.dispatchMovedEvent(this.mouseX, this.mouseY)), this.mouse2Y0 = this.mouse2X0 = this.mouseY0 = this.mouseX0 = NaN
                    },
                    dispatchZoomEvent: function(t) {
                        if (!this.pan && (u = this.selection) && 3 < Math.abs(u.width) && 3 < Math.abs(u.height)) {
                            var e = Math.min(this.index, this.index0),
                                n = Math.max(this.index, this.index0),
                                i = e,
                                l = n,
                                s = this.chart,
                                a = s.chartData,
                                o = s.categoryAxis;
                            o && o.parseDates && !o.equalSpacing && (i = a[e] ? a[e].time : Math.min(this.timestamp0, this.timestamp), l = a[n] ? s.getEndTime(a[n].time) : Math.max(this.timestamp0, this.timestamp));
                            var r, u = {
                                type: t,
                                chart: this.chart,
                                target: this,
                                end: l,
                                start: i,
                                startIndex: e,
                                endIndex: n,
                                selectionHeight: u.height,
                                selectionWidth: u.width,
                                selectionY: u.y,
                                selectionX: u.x
                            };
                            this.hZoomEnabled && 4 < Math.abs(this.mouseX0 - this.mouseX) && (u.startX = this.mouseX0 / this.width, u.endX = this.mouseX / this.width, r = !0), this.vZoomEnabled && 4 < Math.abs(this.mouseY0 - this.mouseY) && (u.startY = 1 - this.mouseY0 / this.height, u.endY = 1 - this.mouseY / this.height, r = !0), r && (this.prevY = this.prevX = NaN, this.fire(u), "selected" != t && this.clearSelection()), this.hideCursor()
                        }
                    },
                    dispatchMovedEvent: function(t, e, n, i) {
                        if (t = Math.round(t), e = Math.round(e), !this.isHidden && (t != this.prevX || e != this.prevY || "changed" == n)) {
                            n || (n = "moved");
                            var l = this.fx,
                                s = this.fy;
                            isNaN(l) && (l = t), isNaN(s) && (s = e);
                            var a = !1;
                            this.zooming && this.pan && (a = !0), a = {
                                hidden: this.isHidden,
                                type: n,
                                chart: this.chart,
                                target: this,
                                x: t,
                                y: e,
                                finalX: l,
                                finalY: s,
                                zooming: this.zooming,
                                panning: a,
                                mostCloseGraph: this.mostCloseGraph,
                                index: this.index,
                                skip: i,
                                hideBalloons: this.hideGraphBalloons
                            }, this.prevIndex = this.index, this.rotate ? (a.position = e, a.finalPosition = s) : (a.position = t, a.finalPosition = l), this.prevX = t, this.prevY = e, i ? this.chart.handleCursorMove(a) : (this.fire(a), "changed" == n && this.chart.fire(a))
                        }
                    },
                    dispatchPanEvent: function() {
                        if (this.mouseIsDown) {
                            var e = t.roundTo((this.mouseX - this.mouseX0) / this.width, 3),
                                n = t.roundTo((this.mouseY - this.mouseY0) / this.height, 3),
                                i = t.roundTo((this.mouse2X - this.mouse2X0) / this.width, 3),
                                l = t.roundTo((this.mouse2Y - this.mouse2Y0) / this.height, 2),
                                s = !1;
                            0 !== Math.abs(e) && 0 !== Math.abs(n) && (s = !0), this.prevDeltaX != e && this.prevDeltaY != n || (s = !1), isNaN(i) || isNaN(l) || (0 !== Math.abs(i) && 0 !== Math.abs(l) && (s = !0), this.prevDelta2X != i && this.prevDelta2Y != l) || (s = !1), s && (this.hideLines(), this.fire({
                                type: "panning",
                                chart: this.chart,
                                target: this,
                                deltaX: e,
                                deltaY: n,
                                delta2X: i,
                                delta2Y: l,
                                index: this.index
                            }), this.prevDeltaX = e, this.prevDeltaY = n, this.prevDelta2X = i, this.prevDelta2Y = l)
                        }
                    },
                    clearSelection: function() {
                        var t = this.selection;
                        t && (t.width = 0, t.height = 0, t.remove())
                    },
                    destroy: function() {
                        this.clear(), t.remove(this.selection), this.selection = null, clearTimeout(this.syncTO), t.remove(this.set)
                    },
                    clear: function() {},
                    setTimestamp: function(t) {
                        this.timestamp = t
                    },
                    setIndex: function(t, e) {
                        t != this.index && (this.index = t, e || this.isHidden || this.dispatchMovedEvent(this.mouseX, this.mouseY, "changed"))
                    },
                    handleMouseOut: function() {
                        this.enabled && this.rolledOver && (this.leaveCursor || this.setIndex(void 0), this.forceShow = !1, this.hideCursor(), this.rolledOver = !1)
                    },
                    showCursorAt: function(t) {
                        var e = this.chart.categoryAxis;
                        e && this.setPosition(e.categoryToCoordinate(t), t)
                    },
                    setPosition: function(t, e) {
                        var n, i, l = this.chart,
                            s = l.categoryAxis;
                        s && (void 0 === e && (e = s.coordinateToValue(t)), s.showBalloonAt(e, t), this.forceShow = !0, s.stickBalloonToCategory ? l.rotate ? this.fixHLine(t, 0) : this.fixVLine(t, 0) : (this.showCursor(), l.rotate ? this.hhLine.translate(0, t) : this.vvLine.translate(t, 0)), l.rotate ? n = t : i = t, l.rotate ? (this.vvLine && this.vvLine.hide(), this.hhLine && this.hhLine.show()) : (this.hhLine && this.hhLine.hide(), this.vvLine && this.vvLine.show()), this.updateFullLine(), this.isHidden = !1, this.dispatchMovedEvent(i, n, "moved", !0))
                    },
                    enableDrawing: function(t) {
                        this.enabled = !t, this.hideCursor(), this.drawing = t
                    },
                    syncWithCursor: function(t, e) {
                        clearTimeout(this.syncTO), t && (t.isHidden ? this.hideCursor(!0) : this.syncWithCursorReal(t, e))
                    },
                    isZooming: function(t) {
                        this.zooming = t
                    },
                    syncWithCursorReal: function(t, e) {
                        var n = t.vvLine,
                            i = t.hhLine;
                        this.index = t.index, this.forceShow = !0, this.zooming && this.pan || this.showCursor(!0), this.hideGraphBalloons = e, this.justReleased = t.justReleased, this.zooming = t.zooming, this.index0 = t.index0, this.mouseX0 = t.mouseX0, this.mouseY0 = t.mouseY0, this.mouse2X0 = t.mouse2X0, this.mouse2Y0 = t.mouse2Y0, this.timestamp0 = t.timestamp0, this.prevDeltaX = t.prevDeltaX, this.prevDeltaY = t.prevDeltaY, this.prevDelta2X = t.prevDelta2X, this.prevDelta2Y = t.prevDelta2Y, this.fx = t.fx, this.fy = t.fy, t.zooming && this.updateSelection();
                        var l = t.mouseX,
                            s = t.mouseY;
                        this.rotate ? (l = NaN, this.vvLine && this.vvLine.hide(), this.hhLine && i && (isNaN(t.fy) ? this.hhLine.translate(0, t.mouseY) : this.fixHLine(t.fy, 0))) : (s = NaN, this.hhLine && this.hhLine.hide(), this.vvLine && n && (isNaN(t.fx) ? this.vvLine.translate(t.mouseX, 0) : this.fixVLine(t.fx, 0))), this.dispatchMovedEvent(l, s, "moved", !0)
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.SimpleChartScrollbar = t.Class({
                    construct: function(e) {
                        this.createEvents("zoomed", "zoomStarted", "zoomEnded"), this.backgroundColor = "#D4D4D4", this.backgroundAlpha = 1, this.selectedBackgroundColor = "#EFEFEF", this.scrollDuration = this.selectedBackgroundAlpha = 1, this.resizeEnabled = !0, this.hideResizeGrips = !1, this.scrollbarHeight = 20, this.updateOnReleaseOnly = !1, 9 > document.documentMode && (this.updateOnReleaseOnly = !0), this.dragIconHeight = this.dragIconWidth = 35, this.dragIcon = "dragIconRoundBig", this.dragCursorHover = "cursor: move; cursor: grab; cursor: -moz-grab; cursor: -webkit-grab;", this.dragCursorDown = "cursor: move; cursor: grab; cursor: -moz-grabbing; cursor: -webkit-grabbing;", this.vResizeCursor = "ns-resize", this.hResizeCursor = "ew-resize", this.enabled = !0, this.percentStart = this.offset = 0, this.percentEnd = 1, t.applyTheme(this, e, "SimpleChartScrollbar")
                    },
                    getPercents: function() {
                        var t = (i = this.getDBox()).x,
                            e = i.y,
                            n = i.width,
                            i = i.height;
                        this.rotate ? (t = 1 - e / this.height, e = 1 - (e + i) / this.height) : (e = t / this.width, t = (t + n) / this.width), this.percentStart = e, this.percentEnd = t
                    },
                    draw: function() {
                        var e = this;
                        if (e.destroy(), e.enabled) {
                            var n = e.chart.container,
                                i = e.rotate,
                                l = e.chart;
                            l.panRequired = !0;
                            var s, a, o = n.set();
                            if (e.set = o, t.setCN(l, o, i ? "scrollbar-vertical" : "scrollbar-horizontal"), l.scrollbarsSet.push(o), i ? (s = e.scrollbarHeight, a = l.plotAreaHeight) : (a = e.scrollbarHeight, s = l.plotAreaWidth), e.width = s, (e.height = a) && s) {
                                var r, u = t.rect(n, s, a, e.backgroundColor, e.backgroundAlpha, 1, e.backgroundColor, e.backgroundAlpha);
                                t.setCN(l, u, "scrollbar-bg"), e.bg = u, o.push(u), u = t.rect(n, s, a, "#000", .005), o.push(u), e.invisibleBg = u, u.click(function() {
                                    e.handleBgClick()
                                }).mouseover(function() {
                                    e.handleMouseOver()
                                }).mouseout(function() {
                                    e.handleMouseOut()
                                }).touchend(function() {
                                    e.handleBgClick()
                                }), u = t.rect(n, s, a, e.selectedBackgroundColor, e.selectedBackgroundAlpha), t.setCN(l, u, "scrollbar-bg-selected"), e.selectedBG = u, o.push(u), s = t.rect(n, s, a, "#000", .005), e.dragger = s, o.push(s), s.mousedown(function(t) {
                                    e.handleDragStart(t)
                                }).mouseup(function() {
                                    e.handleDragStop()
                                }).mouseover(function() {
                                    e.handleDraggerOver()
                                }).mouseout(function() {
                                    e.handleMouseOut()
                                }).touchstart(function(t) {
                                    e.handleDragStart(t)
                                }).touchend(function() {
                                    e.handleDragStop()
                                }), a = l.pathToImages, u = e.dragIcon.replace(/\.[a-z]*$/i, ""), t.isAbsolute(u) && (a = ""), i ? (r = a + u + "H" + l.extension, a = e.dragIconWidth, i = e.dragIconHeight) : (r = a + u + l.extension, i = e.dragIconWidth, a = e.dragIconHeight), u = n.image(r, 0, 0, i, a), t.setCN(l, u, "scrollbar-grip-left"), r = n.image(r, 0, 0, i, a), t.setCN(l, r, "scrollbar-grip-right");
                                var h = 10,
                                    d = 20;
                                l.panEventsEnabled && (h = 25, d = e.scrollbarHeight);
                                var c = t.rect(n, h, d, "#000", .005),
                                    p = t.rect(n, h, d, "#000", .005);
                                p.translate(-(h - i) / 2, -(d - a) / 2), c.translate(-(h - i) / 2, -(d - a) / 2), i = n.set([u, p]), n = n.set([r, c]), e.iconLeft = i, o.push(e.iconLeft), e.iconRight = n, o.push(n), e.updateGripCursor(!1), l.makeAccessible(i, e.accessibleLabel), l.makeAccessible(n, e.accessibleLabel), l.makeAccessible(s, e.accessibleLabel), i.setAttr("role", "menuitem"), n.setAttr("role", "menuitem"), s.setAttr("role", "menuitem"), void 0 !== e.tabIndex && (i.setAttr("tabindex", e.tabIndex), i.keyup(function(t) {
                                    e.handleKeys(t, 1, 0)
                                })), void 0 !== e.tabIndex && (s.setAttr("tabindex", e.tabIndex), s.keyup(function(t) {
                                    e.handleKeys(t, 1, 1)
                                })), void 0 !== e.tabIndex && (n.setAttr("tabindex", e.tabIndex), n.keyup(function(t) {
                                    e.handleKeys(t, 0, 1)
                                })), i.mousedown(function() {
                                    e.leftDragStart()
                                }).mouseup(function() {
                                    e.leftDragStop()
                                }).mouseover(function() {
                                    e.iconRollOver()
                                }).mouseout(function() {
                                    e.iconRollOut()
                                }).touchstart(function() {
                                    e.leftDragStart()
                                }).touchend(function() {
                                    e.leftDragStop()
                                }), n.mousedown(function() {
                                    e.rightDragStart()
                                }).mouseup(function() {
                                    e.rightDragStop()
                                }).mouseover(function() {
                                    e.iconRollOver()
                                }).mouseout(function() {
                                    e.iconRollOut()
                                }).touchstart(function() {
                                    e.rightDragStart()
                                }).touchend(function() {
                                    e.rightDragStop()
                                }), t.ifArray(l.chartData) ? o.show() : o.hide(), e.hideDragIcons(), e.clipDragger(!1)
                            }
                            o.translate(e.x, e.y), o.node.style.msTouchAction = "none", o.node.style.touchAction = "none"
                        }
                    },
                    handleKeys: function(t, e, n) {
                        this.getPercents();
                        var i = this.percentStart,
                            l = this.percentEnd;
                        if (this.rotate) {
                            var s = l;
                            l = i, i = s
                        }
                        37 != t.keyCode && 40 != t.keyCode || (i -= .02 * e, l -= .02 * n), 39 != t.keyCode && 38 != t.keyCode || (i += .02 * e, l += .02 * n), this.rotate && (t = l, l = i, i = t), isNaN(l) || isNaN(i) || this.percentZoom(i, l, !0)
                    },
                    updateScrollbarSize: function(t, e) {
                        if (!isNaN(t) && !isNaN(e)) {
                            t = Math.round(t), e = Math.round(e);
                            var n, i, l, s, a, o = this.dragger;
                            this.rotate ? (n = 0, i = t, l = this.width + 1, s = e - t, o.setAttr("height", e - t), o.setAttr("y", i)) : (i = 0, l = e - t, s = this.height + 1, a = e - t, o.setAttr("x", n = t), o.setAttr("width", a)), this.clipAndUpdate(n, i, l, s)
                        }
                    },
                    update: function() {
                        var t, e, n, i = !1,
                            l = this.x,
                            s = this.y,
                            a = this.dragger;
                        if (r = this.getDBox()) {
                            e = r.x + l, n = r.y + s;
                            var o = r.width,
                                r = r.height,
                                u = this.rotate,
                                h = this.width,
                                d = this.height,
                                c = (p = this.chart).mouseX,
                                p = p.mouseY;
                            if (t = this.initialMouse, this.forceClip && this.clipDragger(!0), this.dragging) {
                                var g = this.initialCoord;
                                u ? (0 > (t = g + (p - t)) && (t = 0), t > (g = d - r) && (t = g), a.setAttr("y", t)) : (0 > (t = g + (c - t)) && (t = 0), (t > (g = h - o) || isNaN(t)) && (t = g), a.setAttr("x", t)), this.clipDragger(!0)
                            }
                            this.resizingRight && (u ? (t = p - n, !isNaN(this.maxHeight) && t > this.maxHeight && (t = this.maxHeight), t + n > d + s && (t = d - n + s), 0 > t ? (this.resizingRight = !1, i = this.resizingLeft = !0) : ((0 === t || isNaN(t)) && (t = .1), a.setAttr("height", t))) : (t = c - e, !isNaN(this.maxWidth) && t > this.maxWidth && (t = this.maxWidth), t + e > h + l && (t = h - e + l), 0 > t ? (this.resizingRight = !1, i = this.resizingLeft = !0) : ((0 === t || isNaN(t)) && (t = .1), a.setAttr("width", t))), this.clipDragger(!0)), this.resizingLeft && (u ? (e = n, (n = p) < s && (n = s), isNaN(n) && (n = s), n > d + s && (n = d + s), t = !0 === i ? e - n : r + e - n, !isNaN(this.maxHeight) && t > this.maxHeight && (t = this.maxHeight, n = e), 0 > t ? (this.resizingRight = !0, this.resizingLeft = !1, a.setAttr("y", e + r - s)) : ((0 === t || isNaN(t)) && (t = .1), a.setAttr("y", n - s), a.setAttr("height", t))) : ((n = c) < l && (n = l), isNaN(n) && (n = l), n > h + l && (n = h + l), t = !0 === i ? e - n : o + e - n, !isNaN(this.maxWidth) && t > this.maxWidth && (t = this.maxWidth, n = e), 0 > t ? (this.resizingRight = !0, this.resizingLeft = !1, a.setAttr("x", e + o - l)) : ((0 === t || isNaN(t)) && (t = .1), a.setAttr("x", n - l), a.setAttr("width", t))), this.clipDragger(!0))
                        }
                    },
                    stopForceClip: function() {
                        this.animating = this.forceClip = !1
                    },
                    clipDragger: function(t) {
                        if (l = this.getDBox()) {
                            var e = l.x,
                                n = l.y,
                                i = l.width,
                                l = l.height,
                                s = !1;
                            this.rotate ? (e = 0, i = this.width + 1, (this.clipY != n || this.clipH != l) && (s = !0)) : (n = 0, l = this.height + 1, (this.clipX != e || this.clipW != i) && (s = !0)), s && this.clipAndUpdate(e, n, i, l), t && (this.updateOnReleaseOnly || this.dispatchScrollbarEvent())
                        }
                    },
                    maskGraphs: function() {},
                    clipAndUpdate: function(t, e, n, i) {
                        this.clipX = t, this.clipY = e, this.clipW = n, this.clipH = i, this.selectedBG.setAttr("width", n), this.selectedBG.setAttr("height", i), this.selectedBG.translate(t, e), this.updateDragIconPositions(), this.maskGraphs(t, e, n, i)
                    },
                    dispatchScrollbarEvent: function() {
                        if (this.skipEvent) this.skipEvent = !1;
                        else {
                            var t = this.chart;
                            t.hideBalloon();
                            var e = (l = this.getDBox()).x,
                                n = l.y,
                                i = l.width,
                                l = l.height;
                            this.getPercents(), this.rotate ? (e = n, i = this.height / l) : i = this.width / i, t = {
                                type: "zoomed",
                                position: e,
                                chart: t,
                                target: this,
                                multiplier: i,
                                relativeStart: this.percentStart,
                                relativeEnd: this.percentEnd
                            }, this.percentStart == this.prevPercentStart && this.percentEnd == this.prevPercentEnd && this.prevMultiplier == i || (this.fire(t), this.prevPercentStart = this.percentStart, this.prevPercentEnd = this.percentEnd, this.prevMultiplier = i)
                        }
                    },
                    updateDragIconPositions: function() {
                        var t, e, n = this.getDBox(),
                            i = n.x,
                            l = n.y,
                            s = this.iconLeft,
                            a = this.iconRight,
                            o = this.scrollbarHeight;
                        this.rotate ? (s.translate((o - (e = this.dragIconHeight)) / 2, l - (t = this.dragIconWidth) / 2), a.translate((o - e) / 2, l + n.height - t / 2)) : (s.translate(i - (e = this.dragIconWidth) / 2, (o - (t = this.dragIconHeight)) / 2), a.translate(i - e / 2 + n.width, (o - t) / 2))
                    },
                    showDragIcons: function() {
                        this.resizeEnabled && (this.iconLeft.show(), this.iconRight.show())
                    },
                    hideDragIcons: function() {
                        this.resizingLeft || this.resizingRight || this.dragging || (!this.hideResizeGrips && this.resizeEnabled || (this.iconLeft.hide(), this.iconRight.hide()), this.removeCursors())
                    },
                    removeCursors: function() {
                        this.chart.setMouseCursor("auto")
                    },
                    fireZoomEvent: function(t) {
                        this.fire({
                            type: t,
                            chart: this.chart,
                            target: this
                        })
                    },
                    percentZoom: function(e, n, i) {
                        var l, s;
                        e = t.fitToBounds(e, 0, n), n = t.fitToBounds(n, e, 1), this.dragger && this.enabled && (this.dragger.stop(), isNaN(e) && (e = 0), isNaN(n) && (n = 1), this.rotate ? (n = (l = this.height) - l * n, s = l - l * e) : (s = (l = this.width) * n, n = l * e), this.updateScrollbarSize(n, s), this.clipDragger(!1), this.getPercents(), i && this.dispatchScrollbarEvent())
                    },
                    destroy: function() {
                        this.clear(), t.remove(this.set), t.remove(this.iconRight), t.remove(this.iconLeft)
                    },
                    clear: function() {},
                    handleDragStart: function() {
                        if (this.enabled) {
                            this.fireZoomEvent("zoomStarted");
                            var e = this.chart;
                            this.dragger.stop(), this.removeCursors(), t.isModern && (this.dragger.node.style.cssText = this.dragCursorDown), this.dragging = !0;
                            var n = this.getDBox();
                            this.rotate ? (this.initialCoord = n.y, this.initialMouse = e.mouseY) : (this.initialCoord = n.x, this.initialMouse = e.mouseX)
                        }
                    },
                    handleDragStop: function() {
                        this.updateOnReleaseOnly && (this.update(), this.skipEvent = !1, this.dispatchScrollbarEvent()), this.dragging = !1, this.mouseIsOver && this.removeCursors(), t.isModern && (this.dragger.node.style.cssText = this.dragCursorHover), this.update(), this.fireZoomEvent("zoomEnded")
                    },
                    handleDraggerOver: function() {
                        this.handleMouseOver(), t.isModern && (this.dragger.node.style.cssText = this.dragCursorHover)
                    },
                    leftDragStart: function() {
                        this.fireZoomEvent("zoomStarted"), this.dragger.stop(), this.resizingLeft = !0, this.updateGripCursor(!0)
                    },
                    updateGripCursor: function(e) {
                        t.isModern && (e = this.rotate ? e ? this.vResizeCursorDown : this.vResizeCursorHover : e ? this.hResizeCursorDown : this.hResizeCursorHover) && (this.iconRight && (this.iconRight.node.style.cssText = e), this.iconLeft && (this.iconLeft.node.style.cssText = e))
                    },
                    leftDragStop: function() {
                        this.resizingLeft && (this.resizingLeft = !1, this.mouseIsOver || this.removeCursors(), this.updateOnRelease(), this.fireZoomEvent("zoomEnded")), this.updateGripCursor(!1)
                    },
                    rightDragStart: function() {
                        this.fireZoomEvent("zoomStarted"), this.dragger.stop(), this.resizingRight = !0, this.updateGripCursor(!0)
                    },
                    rightDragStop: function() {
                        this.resizingRight && (this.resizingRight = !1, this.mouseIsOver || this.removeCursors(), this.updateOnRelease(), this.fireZoomEvent("zoomEnded")), this.updateGripCursor(!1)
                    },
                    iconRollOut: function() {
                        this.removeCursors()
                    },
                    iconRollOver: function() {
                        this.rotate ? this.vResizeCursor && this.chart.setMouseCursor(this.vResizeCursor) : this.hResizeCursor && this.chart.setMouseCursor(this.hResizeCursor), this.handleMouseOver()
                    },
                    getDBox: function() {
                        if (this.dragger) return this.dragger.getBBox()
                    },
                    handleBgClick: function() {
                        var e = this;
                        if (!e.resizingRight && !e.resizingLeft) {
                            e.zooming = !0;
                            var n, i, l = e.scrollDuration,
                                s = e.dragger,
                                a = (n = e.getDBox()).height,
                                o = n.width;
                            i = e.chart;
                            var r = e.x,
                                u = e.rotate;
                            u ? (n = "y", i = t.fitToBounds(i = i.mouseY - a / 2 - e.y, 0, e.height - a)) : (n = "x", i = t.fitToBounds(i = i.mouseX - o / 2 - r, 0, e.width - o)), e.updateOnReleaseOnly ? (e.skipEvent = !1, s.setAttr(n, i), e.dispatchScrollbarEvent(), e.clipDragger()) : (e.animating = !0, i = Math.round(i), s.animate(u ? {
                                y: i
                            } : {
                                x: i
                            }, l, ">"), e.forceClip = !0, clearTimeout(e.forceTO), e.forceTO = setTimeout(function() {
                                e.stopForceClip.call(e)
                            }, 5e3 * l))
                        }
                    },
                    updateOnRelease: function() {
                        this.updateOnReleaseOnly && (this.update(), this.skipEvent = !1, this.dispatchScrollbarEvent())
                    },
                    handleReleaseOutside: function() {
                        this.set && ((this.resizingLeft || this.resizingRight || this.dragging) && (this.dragging = this.resizingRight = this.resizingLeft = !1, this.updateOnRelease(), this.removeCursors()), this.animating = this.mouseIsOver = !1, this.hideDragIcons(), this.update())
                    },
                    handleMouseOver: function() {
                        this.mouseIsOver = !0, this.showDragIcons()
                    },
                    handleMouseOut: function() {
                        this.mouseIsOver = !1, this.hideDragIcons(), this.removeCursors()
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.ChartScrollbar = t.Class({
                    inherits: t.SimpleChartScrollbar,
                    construct: function(e) {
                        this.cname = "ChartScrollbar", t.ChartScrollbar.base.construct.call(this, e), this.graphLineColor = "#BBBBBB", this.graphLineAlpha = 0, this.graphFillColor = "#BBBBBB", this.graphFillAlpha = 1, this.selectedGraphLineColor = "#888888", this.selectedGraphLineAlpha = 0, this.selectedGraphFillColor = "#888888", this.selectedGraphFillAlpha = 1, this.gridCount = 0, this.gridColor = "#FFFFFF", this.gridAlpha = .7, this.skipEvent = this.autoGridCount = !1, this.color = "#FFFFFF", this.scrollbarCreated = !1, this.oppositeAxis = !0, this.accessibleLabel = "Zoom chart using cursor arrows", t.applyTheme(this, e, this.cname)
                    },
                    init: function() {
                        var e = this.categoryAxis,
                            n = this.chart,
                            i = this.gridAxis;
                        e || ("CategoryAxis" == this.gridAxis.cname ? (this.catScrollbar = !0, (e = new t.CategoryAxis).id = "scrollbar") : ((e = new t.ValueAxis).data = n.chartData, e.id = i.id, e.type = i.type, e.maximumDate = i.maximumDate, e.minimumDate = i.minimumDate, e.minPeriod = i.minPeriod, e.minMaxField = i.minMaxField), this.categoryAxis = e), e.chart = n;
                        var l = n.categoryAxis;
                        l && (e.firstDayOfWeek = l.firstDayOfWeek), e.dateFormats = i.dateFormats, e.markPeriodChange = i.markPeriodChange, e.boldPeriodBeginning = i.boldPeriodBeginning, e.labelFunction = i.labelFunction, e.axisItemRenderer = t.RecItem, e.axisRenderer = t.RecAxis, e.guideFillRenderer = t.RecFill, e.inside = !0, e.fontSize = this.fontSize, e.tickLength = 0, e.axisAlpha = 0, t.isString(this.graph) && (this.graph = t.getObjById(n.graphs, this.graph)), (e = this.graph) && this.catScrollbar && ((i = this.valueAxis) || (this.valueAxis = i = new t.ValueAxis, i.visible = !1, i.scrollbar = !0, i.axisItemRenderer = t.RecItem, i.axisRenderer = t.RecAxis, i.guideFillRenderer = t.RecFill, i.labelsEnabled = !1, i.chart = n), (n = this.unselectedGraph) || ((n = new t.AmGraph).scrollbar = !0, this.unselectedGraph = n, n.negativeBase = e.negativeBase, n.noStepRisers = e.noStepRisers), (n = this.selectedGraph) || ((n = new t.AmGraph).scrollbar = !0, this.selectedGraph = n, n.negativeBase = e.negativeBase, n.noStepRisers = e.noStepRisers)), this.scrollbarCreated = !0
                    },
                    draw: function() {
                        var e = this;
                        if (t.ChartScrollbar.base.draw.call(e), e.enabled) {
                            e.scrollbarCreated || e.init();
                            var n = e.chart,
                                i = n.chartData,
                                l = e.categoryAxis,
                                s = e.rotate,
                                a = e.x,
                                o = e.y,
                                r = e.width,
                                u = e.height,
                                h = e.gridAxis,
                                d = e.set;
                            if (l.setOrientation(!s), l.parseDates = h.parseDates, "ValueAxis" == e.categoryAxis.cname && (l.rotate = !s), l.equalSpacing = h.equalSpacing, l.minPeriod = h.minPeriod, l.startOnAxis = h.startOnAxis, l.width = r - 1, l.height = u, l.gridCount = e.gridCount, l.gridColor = e.gridColor, l.gridAlpha = e.gridAlpha, l.color = e.color, l.tickLength = 0, l.axisAlpha = 0, l.autoGridCount = e.autoGridCount, l.parseDates && !l.equalSpacing && l.timeZoom(n.firstTime, n.lastTime), l.minimum = e.gridAxis.fullMin, l.maximum = e.gridAxis.fullMax, l.strictMinMax = !0, l.zoom(0, i.length - 1), (h = e.graph) && e.catScrollbar) {
                                var c, p = e.valueAxis,
                                    g = h.valueAxis;
                                for (p.id = g.id, p.rotate = s, p.setOrientation(s), p.width = r, p.height = u, p.dataProvider = i, p.reversed = g.reversed, p.logarithmic = g.logarithmic, p.gridAlpha = 0, p.axisAlpha = 0, d.push(p.set), s ? (p.y = o, p.x = 0) : (p.x = a, p.y = 0), a = 1 / 0, o = -1 / 0, c = 0; c < i.length; c++) {
                                    var f, m = i[c].axes[g.id].graphs[h.id].values;
                                    for (f in m)
                                        if (m.hasOwnProperty(f) && "percents" != f && "total" != f) {
                                            var v = m[f];
                                            v < a && (a = v), v > o && (o = v)
                                        }
                                }
                                1 / 0 != a && (p.minimum = a), -1 / 0 != o && (p.maximum = o + .1 * (o - a)), a == o && (--p.minimum, p.maximum += 1), void 0 !== e.minimum && (p.minimum = e.minimum), void 0 !== e.maximum && (p.maximum = e.maximum), p.zoom(0, i.length - 1), (f = e.unselectedGraph).id = h.id, f.bcn = "scrollbar-graph-", f.rotate = s, f.chart = n, f.data = i, f.valueAxis = p, f.chart = h.chart, f.categoryAxis = e.categoryAxis, f.periodSpan = h.periodSpan, f.valueField = h.valueField, f.openField = h.openField, f.closeField = h.closeField, f.highField = h.highField, f.lowField = h.lowField, f.lineAlpha = e.graphLineAlpha, f.lineColorR = e.graphLineColor, f.fillAlphas = e.graphFillAlpha, f.fillColorsR = e.graphFillColor, f.connect = h.connect, f.hidden = h.hidden, f.width = r, f.height = u, f.pointPosition = h.pointPosition, f.stepDirection = h.stepDirection, f.periodSpan = h.periodSpan, (g = e.selectedGraph).id = h.id, g.bcn = f.bcn + "selected-", g.rotate = s, g.chart = n, g.data = i, g.valueAxis = p, g.chart = h.chart, g.categoryAxis = l, g.periodSpan = h.periodSpan, g.valueField = h.valueField, g.openField = h.openField, g.closeField = h.closeField, g.highField = h.highField, g.lowField = h.lowField, g.lineAlpha = e.selectedGraphLineAlpha, g.lineColorR = e.selectedGraphLineColor, g.fillAlphas = e.selectedGraphFillAlpha, g.fillColorsR = e.selectedGraphFillColor, g.connect = h.connect, g.hidden = h.hidden, g.width = r, g.height = u, g.pointPosition = h.pointPosition, g.stepDirection = h.stepDirection, g.periodSpan = h.periodSpan, (n = e.graphType) || (n = h.type), f.type = n, g.type = n, f.zoom(0, i = i.length - 1), g.zoom(0, i), g.set.click(function() {
                                    e.handleBackgroundClick()
                                }).mouseover(function() {
                                    e.handleMouseOver()
                                }).mouseout(function() {
                                    e.handleMouseOut()
                                }), f.set.click(function() {
                                    e.handleBackgroundClick()
                                }).mouseover(function() {
                                    e.handleMouseOver()
                                }).mouseout(function() {
                                    e.handleMouseOut()
                                }), d.push(f.set), d.push(g.set)
                            }
                            d.push(l.set), d.push(l.labelsSet), e.bg.toBack(), e.invisibleBg.toFront(), e.dragger.toFront(), e.iconLeft.toFront(), e.iconRight.toFront()
                        }
                    },
                    timeZoom: function(e, n, i) {
                        this.startTime = e, this.endTime = n, this.timeDifference = n - e, this.skipEvent = !t.toBoolean(i), this.zoomScrollbar(), this.dispatchScrollbarEvent()
                    },
                    zoom: function(t, e) {
                        this.start = t, this.end = e, this.skipEvent = !0, this.zoomScrollbar()
                    },
                    dispatchScrollbarEvent: function() {
                        if (this.categoryAxis && "ValueAxis" == this.categoryAxis.cname) t.ChartScrollbar.base.dispatchScrollbarEvent.call(this);
                        else if (this.skipEvent) this.skipEvent = !1;
                        else {
                            var e, n, i = this.chart.chartData;
                            e = (a = this.dragger.getBBox()).x;
                            var l = a.y,
                                s = a.width,
                                a = a.height,
                                o = this.chart;
                            this.rotate ? (e = l, n = a) : n = s, (s = {
                                type: "zoomed",
                                target: this
                            }).chart = o;
                            var r = this.categoryAxis,
                                u = this.stepWidth,
                                h = (l = o.minSelectedTime, a = o.maxSelectedTime, !1);
                            r.parseDates && !r.equalSpacing ? (i = o.lastTime, o = o.firstTime, (r = Math.round(e / u) + o) > (e = this.dragging ? r + this.timeDifference : Math.round((e + n) / u) + o) && (r = e), 0 < l && e - r < l && (r = (e = Math.round(r + (e - r) / 2)) - (h = Math.round(l / 2)), e += h, h = !0), 0 < a && e - r > a && (r = (e = Math.round(r + (e - r) / 2)) - (h = Math.round(a / 2)), e += h, h = !0), e > i && (e = i), e - l < r && (r = e - l), r < o && (r = o), r + l > e && (e = r + l), (r != this.startTime || e != this.endTime) && (this.startTime = r, this.endTime = e, s.start = r, s.end = e, s.startDate = new Date(r), s.endDate = new Date(e), this.fire(s))) : (r.startOnAxis || (e += u / 2), n -= this.stepWidth / 2, l = r.xToIndex(e), e = r.getCoordinate(l) - this.stepWidth / 2, e = r.xToIndex(e + n), l == this.start && this.end == e || (r.startOnAxis && (this.resizingRight && l == e && e++, this.resizingLeft && l == e && (0 < l ? l-- : e = 1)), this.start = l, this.end = this.dragging ? this.start + this.difference : e, s.start = this.start, s.end = this.end, r.parseDates && (i[this.start] && (s.startDate = new Date(i[this.start].time)), i[this.end] && (s.endDate = new Date(i[this.end].time))), this.fire(s)), this.percentStart = l, this.percentEnd = e), h && this.zoomScrollbar(!0)
                        }
                    },
                    zoomScrollbar: function(t) {
                        if ((!(this.dragging || this.resizingLeft || this.resizingRight || this.animating) || t) && this.dragger && this.enabled) {
                            var e, n, i = this.chart;
                            t = i.chartData;
                            var l = this.categoryAxis;
                            l.parseDates && !l.equalSpacing ? (e = (t = l.stepWidth) * (this.startTime - (n = i.firstTime)), n = t * (this.endTime - n)) : (t[this.start] && (e = t[this.start].x[l.id]), t[this.end] && (n = t[this.end].x[l.id]), t = l.stepWidth, l.startOnAxis || (e -= i = t / 2, n += i)), this.stepWidth = t, isNaN(e) || isNaN(n) || this.updateScrollbarSize(e, n)
                        }
                    },
                    maskGraphs: function(t, e, n, i) {
                        var l = this.selectedGraph;
                        l && l.set.clipRect(t, e, n, i)
                    },
                    handleDragStart: function() {
                        t.ChartScrollbar.base.handleDragStart.call(this), this.difference = this.end - this.start, this.timeDifference = this.endTime - this.startTime, 0 > this.timeDifference && (this.timeDifference = 0)
                    },
                    handleBackgroundClick: function() {
                        t.ChartScrollbar.base.handleBackgroundClick.call(this), this.dragging || (this.difference = this.end - this.start, this.timeDifference = this.endTime - this.startTime, 0 > this.timeDifference && (this.timeDifference = 0))
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.AmBalloon = t.Class({
                    construct: function(e) {
                        this.cname = "AmBalloon", this.enabled = !0, this.fillColor = "#FFFFFF", this.fillAlpha = .8, this.borderThickness = 2, this.borderColor = "#FFFFFF", this.borderAlpha = 1, this.cornerRadius = 0, this.maxWidth = 220, this.horizontalPadding = 8, this.verticalPadding = 4, this.pointerWidth = 6, this.pointerOrientation = "V", this.color = "#000000", this.adjustBorderColor = !0, this.show = this.follow = this.showBullet = !1, this.bulletSize = 3, this.shadowAlpha = .4, this.shadowColor = "#000000", this.fadeOutDuration = this.animationDuration = .3, this.fixedPosition = !0, this.offsetY = 6, this.offsetX = 1, this.textAlign = "center", this.disableMouseEvents = !0, this.deltaSignX = this.deltaSignY = 1, t.isModern || (this.offsetY *= 1.5), this.sdy = this.sdx = 0, t.applyTheme(this, e, this.cname)
                    },
                    draw: function() {
                        var e = this.pointToX,
                            n = this.pointToY;
                        t.isModern || (this.drop = !1);
                        var i = this.chart;
                        if (t.VML && (this.fadeOutDuration = 0), this.xAnim && i.stopAnim(this.xAnim), this.yAnim && i.stopAnim(this.yAnim), this.sdy = this.sdx = 0, !isNaN(e)) {
                            var l = this.follow,
                                s = i.container,
                                a = this.set;
                            if (t.remove(a), this.removeDiv(), (a = s.set()).node.style.pointerEvents = "none", this.set = a, this.mainSet ? (this.mainSet.push(this.set), this.sdx = this.mainSet.x, this.sdy = this.mainSet.y) : i.balloonsSet.push(a), this.show) {
                                var o = this.l,
                                    r = this.t,
                                    u = this.r,
                                    h = this.b,
                                    d = this.fillColor,
                                    c = this.borderColor,
                                    p = d;
                                void 0 != (A = this.balloonColor) && (this.adjustBorderColor ? p = c = A : d = A);
                                var g = this.horizontalPadding,
                                    f = this.verticalPadding,
                                    m = this.pointerWidth,
                                    v = this.pointerOrientation,
                                    b = this.cornerRadius,
                                    y = i.fontFamily;
                                void 0 == (P = this.fontSize) && (P = i.fontSize);
                                var A = document.createElement("div"),
                                    x = i.classNamePrefix;
                                A.className = x + "-balloon-div", this.className && (A.className = A.className + " " + x + "-balloon-div-" + this.className), x = A.style, this.disableMouseEvents && (x.pointerEvents = "none"), x.position = "absolute";
                                var C = this.minWidth,
                                    w = document.createElement("div");
                                A.appendChild(w);
                                var k = w.style;
                                isNaN(C) || (k.minWidth = C - 2 * g + "px"), k.textAlign = this.textAlign, k.maxWidth = this.maxWidth + "px", k.fontSize = P + "px", k.color = this.color, k.fontFamily = y, w.innerHTML = this.text, i.chartDiv.appendChild(A), this.textDiv = A, k = A.offsetWidth;
                                var M = A.offsetHeight;
                                A.clientHeight && (k = A.clientWidth, M = A.clientHeight), y = M + 2 * f, w = k + 2 * g, !isNaN(C) && w < C && (w = C), window.opera && (y += 2);
                                var S = !1,
                                    P = this.offsetY;
                                i.handDrawn && (P += i.handDrawScatter + 2), "H" != v ? (C = e - w / 2, n < r + y + 10 && "down" != v ? (S = !0, l && (n += P), P = n + m, this.deltaSignY = -1) : (l && (n -= P), P = n - y - m, this.deltaSignY = 1)) : (2 * m > y && (m = y / 2), P = n - y / 2, e < o + (u - o) / 2 ? (C = e + m, this.deltaSignX = -1) : (C = e - w - m, this.deltaSignX = 1)), P + y >= h && (P = h - y), P < r && (P = r), C < o && (C = o), C + w > u && (C = u - w), r = P + f, h = C + g;
                                var N, I = this.shadowAlpha,
                                    T = this.shadowColor,
                                    O = (g = this.borderThickness, f = this.fillAlpha, this.borderAlpha);
                                this.showBullet && (N = t.circle(s, this.bulletSize, p, f), a.push(N)), this.drop ? (o = w / 1.6, u = 0, "V" == v && (v = "down"), "H" == v && (v = "left"), "down" == v && (C = e + 1, P = n - o - o / 3), "up" == v && (u = 180, C = e + 1, P = n + o + o / 3), "left" == v && (u = 270, C = e + o + o / 3 + 2, P = n), "right" == v && (u = 90, C = e - o - o / 3 + 2, P = n), r = P - M / 2 + 1, h = C - k / 2 - 1, d = t.drop(s, o, u, d, f, g, c, O)) : 0 < b || 0 === m ? (0 < I && (e = t.rect(s, w, y, d, 0, g + 1, T, I, b), t.isModern ? e.translate(1, 1) : e.translate(4, 4), a.push(e)), d = t.rect(s, w, y, d, f, g, c, O, b)) : (p = [], b = [], "H" != v ? ((o = e - C) > w - m && (o = w - m), o < m && (o = m), p = [0, o - m, e - C, o + m, w, w, 0, 0], b = S ? [0, 0, n - P, 0, 0, y, y, 0] : [y, y, n - P, y, y, 0, 0, y]) : ((v = n - P) > y - m && (v = y - m), v < m && (v = m), b = [0, v - m, n - P, v + m, y, y, 0, 0], p = e < o + (u - o) / 2 ? [0, 0, C < e ? 0 : e - C, 0, 0, w, w, 0] : [w, w, C + w > e ? w : e - C, w, w, 0, 0, w]), 0 < I && ((e = t.polygon(s, p, b, d, 0, g, T, I)).translate(1, 1), a.push(e)), d = t.polygon(s, p, b, d, f, g, c, O)), this.bg = d, a.push(d), d.toFront(), t.setCN(i, d, "balloon-bg"), this.className && t.setCN(i, d, "balloon-bg-" + this.className), s = 1 * this.deltaSignX, r += this.sdy, x.left = (h += this.sdx) + "px", x.top = r + "px", a.translate(C - s, P, 1, !0), d = d.getBBox(), this.bottom = P + y + 1, this.yPos = d.y + P, N && N.translate(this.pointToX - C + s, n - P), n = this.animationDuration, 0 < this.animationDuration && !l && !isNaN(this.prevX) && (a.translate(this.prevX, this.prevY, NaN, !0), a.animate({
                                    translate: C - s + "," + P
                                }, n, "easeOutSine"), A && (x.left = this.prevTX + "px", x.top = this.prevTY + "px", this.xAnim = i.animate({
                                    node: A
                                }, "left", this.prevTX, h, n, "easeOutSine", "px"), this.yAnim = i.animate({
                                    node: A
                                }, "top", this.prevTY, r, n, "easeOutSine", "px"))), this.prevX = C - s, this.prevY = P, this.prevTX = h, this.prevTY = r
                            }
                        }
                    },
                    fixPrevious: function() {
                        this.rPrevX = this.prevX, this.rPrevY = this.prevY, this.rPrevTX = this.prevTX, this.rPrevTY = this.prevTY
                    },
                    restorePrevious: function() {
                        this.prevX = this.rPrevX, this.prevY = this.rPrevY, this.prevTX = this.rPrevTX, this.prevTY = this.rPrevTY
                    },
                    followMouse: function() {
                        if (this.follow && this.show) {
                            var t = this.chart.mouseY - this.sdy;
                            if (this.pointToX = n = this.chart.mouseX - this.offsetX * this.deltaSignX - this.sdx, this.pointToY = t, n != this.previousX || t != this.previousY)
                                if (this.previousX = n, this.previousY = t, 0 === this.cornerRadius) this.draw();
                                else {
                                    var e = this.set;
                                    if (e) {
                                        var n, i = e.getBBox(),
                                            l = t - i.height - 10;
                                        (n -= i.width / 2) < this.l && (n = this.l), n > this.r - i.width && (n = this.r - i.width), l < this.t && (l = t + 10), e.translate(n, l), (t = this.textDiv.style).left = n + this.horizontalPadding + "px", t.top = l + this.verticalPadding + "px"
                                    }
                                }
                        }
                    },
                    changeColor: function(t) {
                        this.balloonColor = t
                    },
                    setBounds: function(t, e, n, i) {
                        this.l = t, this.t = e, this.r = n, this.b = i, this.destroyTO && clearTimeout(this.destroyTO)
                    },
                    showBalloon: function(t) {
                        (this.text != t || this.positionChanged) && (this.text = t, this.isHiding = !1, this.show = !0, this.destroyTO && clearTimeout(this.destroyTO), t = this.chart, this.fadeAnim1 && t.stopAnim(this.fadeAnim1), this.fadeAnim2 && t.stopAnim(this.fadeAnim2), this.draw(), this.positionChanged = !1)
                    },
                    hide: function(t) {
                        var e = this;
                        e.text = void 0, isNaN(t) && (t = e.fadeOutDuration);
                        var n = e.chart;
                        if (0 < t && !e.isHiding) {
                            e.isHiding = !0, e.destroyTO && clearTimeout(e.destroyTO), e.destroyTO = setTimeout(function() {
                                e.destroy.call(e)
                            }, 1e3 * t), e.follow = !1, e.show = !1;
                            var i = e.set;
                            i && (i.setAttr("opacity", e.fillAlpha), e.fadeAnim1 = i.animate({
                                opacity: 0
                            }, t, "easeInSine")), e.textDiv && (e.fadeAnim2 = n.animate({
                                node: e.textDiv
                            }, "opacity", 1, 0, t, "easeInSine", ""))
                        } else e.show = !1, e.follow = !1, e.destroy()
                    },
                    setPosition: function(t, e) {
                        t == this.pointToX && e == this.pointToY || (this.previousX = this.pointToX, this.previousY = this.pointToY, this.pointToX = t, this.pointToY = e, this.positionChanged = !0)
                    },
                    followCursor: function(t) {
                        var e = this;
                        e.follow = t, clearInterval(e.interval);
                        var n = e.chart.mouseX - e.sdx,
                            i = e.chart.mouseY - e.sdy;
                        !isNaN(n) && t && (e.pointToX = n - e.offsetX * e.deltaSignX, e.pointToY = i, e.followMouse(), e.interval = setInterval(function() {
                            e.followMouse.call(e)
                        }, 40))
                    },
                    removeDiv: function() {
                        if (this.textDiv) {
                            var t = this.textDiv.parentNode;
                            t && t.removeChild(this.textDiv)
                        }
                    },
                    destroy: function() {
                        clearInterval(this.interval), t.remove(this.set), this.removeDiv(), this.set = null
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.AmCoordinateChart = t.Class({
                    inherits: t.AmChart,
                    construct: function(e) {
                        t.AmCoordinateChart.base.construct.call(this, e), this.theme = e, this.createEvents("rollOverGraphItem", "rollOutGraphItem", "clickGraphItem", "doubleClickGraphItem", "rightClickGraphItem", "clickGraph", "rollOverGraph", "rollOutGraph"), this.startAlpha = 1, this.startDuration = 0, this.startEffect = "elastic", this.sequencedAnimation = !0, this.colors = "#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" "), this.balloonDateFormat = "MMM DD, YYYY", this.valueAxes = [], this.graphs = [], this.guides = [], this.gridAboveGraphs = !1, t.applyTheme(this, e, "AmCoordinateChart")
                    },
                    initChart: function() {
                        t.AmCoordinateChart.base.initChart.call(this), this.drawGraphs = !0;
                        var e = this.categoryAxis;
                        e && (this.categoryAxis = t.processObject(e, t.CategoryAxis, this.theme)), this.processValueAxes(), this.createValueAxes(), this.processGraphs(), this.processGuides(), t.VML && (this.startAlpha = 1), this.setLegendData(this.graphs), this.gridAboveGraphs && (this.gridSet.toFront(), this.bulletSet.toFront(), this.balloonsSet.toFront())
                    },
                    createValueAxes: function() {
                        if (0 === this.valueAxes.length) {
                            var e = new t.ValueAxis;
                            this.addValueAxis(e)
                        }
                    },
                    parseData: function() {
                        this.processValueAxes(), this.processGraphs()
                    },
                    parseSerialData: function(t) {
                        if (this.chartData = [], t)
                            if (0 < this.processTimeout) {
                                1 > this.processCount && (this.processCount = 1);
                                var e = t.length / this.processCount;
                                this.parseCount = Math.ceil(e) - 1;
                                for (var n = 0; n < e; n++) this.delayParseSerialData(t, n)
                            } else this.parseCount = 0, this.parsePartSerialData(t, 0, t.length, 0);
                        else this.onDataUpdated()
                    },
                    delayParseSerialData: function(t, e) {
                        var n = this,
                            i = n.processCount;
                        setTimeout(function() {
                            n.parsePartSerialData.call(n, t, e * i, (e + 1) * i, e)
                        }, n.processTimeout)
                    },
                    parsePartSerialData: function(e, n, i, l) {
                        i > e.length && (i = e.length);
                        var s = this.graphs,
                            a = {},
                            o = this.seriesIdField;
                        o || (o = this.categoryField);
                        var r, u, h, d, c = !1,
                            p = this.categoryAxis;
                        p && (c = p.parseDates, u = p.forceShowField, d = p.classNameField, h = p.labelColorField, r = p.categoryFunction);
                        var g, f, m, v = {};
                        c && (g = t.extractPeriod(p.minPeriod), m = t.getPeriodDuration(f = g.period, g = g.count));
                        var b = {};
                        this.lookupTable = b;
                        var y, A = this.dataDateFormat,
                            x = {};
                        for (y = n; y < i; y++) {
                            var C = {},
                                w = e[y];
                            if (n = w[this.categoryField], C.dataContext = w, C.category = r ? r(n, w, p) : String(n), u && (C.forceShow = w[u]), d && (C.className = w[d]), h && (C.labelColor = w[h]), b[w[o]] = C, !c || (p.categoryFunction ? n = p.categoryFunction(n, w, p) : (!A || n instanceof Date || (n = n.toString() + " |"), n = t.getDate(n, A, p.minPeriod)), n = t.resetDateToMin(n, f, g, p.firstDayOfWeek), C.category = n, C.time = n.getTime(), !isNaN(C.time))) {
                                var k, M = this.valueAxes;
                                for (C.axes = {}, C.x = {}, k = 0; k < M.length; k++) {
                                    var S, P = M[k].id;
                                    for (C.axes[P] = {}, C.axes[P].graphs = {}, S = 0; S < s.length; S++) {
                                        var N = (n = s[S]).id,
                                            I = 1.1;
                                        isNaN(n.gapPeriod) || (I = n.gapPeriod);
                                        var T = n.periodValue;
                                        if (n.valueAxis.id == P) {
                                            C.axes[P].graphs[N] = {};
                                            var O = {};
                                            O.index = y;
                                            var D = w;
                                            if (n.dataProvider && (D = a), O.values = this.processValues(D, n, T), !n.connect || n.forceGap && !isNaN(n.gapPeriod))
                                                if (x && x[N] && 0 < I && C.time - v[N] >= m * I && (x[N].gap = !0), n.forceGap) {
                                                    var R;
                                                    for (R in I = 0, O.values) I++;
                                                    0 < I && (v[N] = C.time, x[N] = O)
                                                } else v[N] = C.time, x[N] = O;
                                            this.processFields(n, O, D), O.category = C.category, O.serialDataItem = C, O.graph = n, C.axes[P].graphs[N] = O
                                        }
                                    }
                                }
                                this.chartData[y] = C
                            }
                        }
                        if (this.parseCount == l) {
                            for (e = 0; e < s.length; e++)(n = s[e]).dataProvider && this.parseGraphData(n);
                            this.dataChanged = !1, this.dispatchDataUpdated = !0, this.onDataUpdated()
                        }
                    },
                    processValues: function(e, n, i) {
                        var l, s = {},
                            a = !1;
                        "candlestick" != n.type && "ohlc" != n.type || "" === i || (a = !0);
                        for (var o = "value error open close low high".split(" "), r = 0; r < o.length; r++) {
                            var u = o[r];
                            "value" != u && "error" != u && a && (i = u.charAt(0).toUpperCase() + u.slice(1));
                            var h = e[n[u + "Field"] + i];
                            null !== h && (l = Number(h), isNaN(l) || (s[u] = l), "date" == n.valueAxis.type && void 0 !== h && (l = t.getDate(h, n.chart.dataDateFormat), s[u] = l.getTime()))
                        }
                        return s
                    },
                    parseGraphData: function(t) {
                        var e, n = t.dataProvider,
                            i = t.seriesIdField;
                        for (i || (i = this.seriesIdField), i || (i = this.categoryField), e = 0; e < n.length; e++) {
                            var l = n[e],
                                s = this.lookupTable[String(l[i])],
                                a = t.valueAxis.id;
                            s && ((a = s.axes[a].graphs[t.id]).serialDataItem = s, a.values = this.processValues(l, t, t.periodValue), this.processFields(t, a, l))
                        }
                    },
                    addValueAxis: function(t) {
                        t.chart = this, this.valueAxes.push(t), this.validateData()
                    },
                    removeValueAxesAndGraphs: function() {
                        var t, e = this.valueAxes;
                        for (t = e.length - 1; - 1 < t; t--) this.removeValueAxis(e[t])
                    },
                    removeValueAxis: function(t) {
                        var e, n = this.graphs;
                        for (e = n.length - 1; 0 <= e; e--) {
                            var i = n[e];
                            i && i.valueAxis == t && this.removeGraph(i)
                        }
                        for (e = (n = this.valueAxes).length - 1; 0 <= e; e--) n[e] == t && n.splice(e, 1);
                        this.validateData()
                    },
                    addGraph: function(t) {
                        this.graphs.push(t), this.chooseGraphColor(t, this.graphs.length - 1), this.validateData()
                    },
                    removeGraph: function(t) {
                        var e, n = this.graphs;
                        for (e = n.length - 1; 0 <= e; e--) n[e] == t && (n.splice(e, 1), t.destroy());
                        this.validateData()
                    },
                    handleValueAxisZoom: function() {},
                    processValueAxes: function() {
                        var e, n = this.valueAxes;
                        for (e = 0; e < n.length; e++) {
                            var i = t.processObject(i = n[e], t.ValueAxis, this.theme);
                            n[e] = i, i.chart = this, i.init(), this.listenTo(i, "axisIntZoomed", this.handleValueAxisZoom), i.id || (i.id = "valueAxisAuto" + e + "_" + (new Date).getTime()), void 0 === i.usePrefixes && (i.usePrefixes = this.usePrefixes)
                        }
                    },
                    processGuides: function() {
                        var e = this.guides,
                            n = this.categoryAxis;
                        if (e)
                            for (var i = 0; i < e.length; i++) {
                                var l = e[i];
                                (void 0 !== l.category || void 0 !== l.date) && n && n.addGuide(l), l.id || (l.id = "guideAuto" + i + "_" + (new Date).getTime());
                                var s = l.valueAxis;
                                s ? (t.isString(s) && (s = this.getValueAxisById(s)), s ? s.addGuide(l) : this.valueAxes[0].addGuide(l)) : isNaN(l.value) || this.valueAxes[0].addGuide(l)
                            }
                    },
                    processGraphs: function() {
                        var e, n = this.graphs;
                        for (this.graphsById = {}, e = 0; e < n.length; e++) {
                            var i = t.processObject(i = n[e], t.AmGraph, this.theme);
                            n[e] = i, this.chooseGraphColor(i, e), i.chart = this, i.init(), t.isString(i.valueAxis) && (i.valueAxis = this.getValueAxisById(i.valueAxis)), i.valueAxis || (i.valueAxis = this.valueAxes[0]), i.id || (i.id = "graphAuto" + e + "_" + (new Date).getTime()), this.graphsById[i.id] = i
                        }
                    },
                    formatString: function(e, n, i) {
                        var l = n.graph,
                            s = l.valueAxis;
                        if (s.duration && s.maxInterval && n.values.value) {
                            var a = s.numberFormatter;
                            a || (a = chart.nf), s = t.formatDuration(n.values.value, s.duration, "", s.durationUnits, s.maxInterval, a), e = e.split("[[value]]").join(s)
                        }
                        return e = t.massReplace(e, {
                            "[[title]]": l.title,
                            "[[description]]": n.description
                        }), e = i ? t.fixNewLines(e) : t.fixBrakes(e), t.cleanFromEmpty(e)
                    },
                    getBalloonColor: function(e, n, i) {
                        var l = e.lineColor,
                            s = e.balloonColor;
                        return i && (s = l), "object" == typeof(i = e.fillColorsR) ? l = i[0] : void 0 !== i && (l = i), n.isNegative && (i = e.negativeLineColor, "object" == typeof(e = e.negativeFillColors) ? i = e[0] : void 0 !== e && (i = e), void 0 !== i && (l = i)), void 0 !== n.color && (l = n.color), void 0 !== n.lineColor && (l = n.lineColor), void 0 !== (n = n.fillColors) && (l = n, t.ifArray(n) && (l = n[0])), void 0 === s && (s = l), s
                    },
                    getGraphById: function(e) {
                        return t.getObjById(this.graphs, e)
                    },
                    getValueAxisById: function(e) {
                        return t.getObjById(this.valueAxes, e)
                    },
                    processFields: function(e, n, i) {
                        if (e.itemColors) {
                            var l = e.itemColors,
                                s = n.index;
                            n.color = s < l.length ? l[s] : t.randomColor()
                        }
                        for (l = "lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className columnIndex".split(" "), s = 0; s < l.length; s++) {
                            var a = l[s],
                                o = e[a + "Field"];
                            o && t.isDefined(o = i[o]) && (n[a] = o)
                        }
                        n.dataContext = i
                    },
                    chooseGraphColor: function(e, n) {
                        var i;
                        e.lineColor ? e.lineColorR = e.lineColor : (i = this.colors.length > n ? this.colors[n] : e.lineColorR ? e.lineColorR : t.randomColor(), e.lineColorR = i), e.fillColorsR = e.fillColors ? e.fillColors : e.lineColorR, e.bulletBorderColorR = e.bulletBorderColor ? e.bulletBorderColor : e.useLineColorForBulletBorder ? e.lineColorR : e.bulletColor, e.bulletColorR = e.bulletColor ? e.bulletColor : e.lineColorR, (i = this.patterns) && (e.pattern = i[n])
                    },
                    handleLegendEvent: function(t) {
                        var e = t.type;
                        if (t = t.dataItem) {
                            var n = t.hidden,
                                i = t.showBalloon;
                            switch (e) {
                                case "clickMarker":
                                    this.textClickEnabled && (i ? this.hideGraphsBalloon(t) : this.showGraphsBalloon(t));
                                    break;
                                case "clickLabel":
                                    i ? this.hideGraphsBalloon(t) : this.showGraphsBalloon(t);
                                    break;
                                case "rollOverItem":
                                    n || this.highlightGraph(t);
                                    break;
                                case "rollOutItem":
                                    n || this.unhighlightGraph();
                                    break;
                                case "hideItem":
                                    this.hideGraph(t);
                                    break;
                                case "showItem":
                                    this.showGraph(t)
                            }
                        }
                    },
                    highlightGraph: function(t) {
                        var e = this.graphs;
                        if (e) {
                            var n, i = .2;
                            if (this.legend && (i = this.legend.rollOverGraphAlpha), 1 != i)
                                for (n = 0; n < e.length; n++) {
                                    var l = e[n];
                                    l != t && l.changeOpacity(i)
                                }
                        }
                    },
                    unhighlightGraph: function() {
                        var t, e;
                        if (this.legend && (t = this.legend.rollOverGraphAlpha), 1 != t)
                            for (t = this.graphs, e = 0; e < t.length; e++) t[e].changeOpacity(1)
                    },
                    showGraph: function(t) {
                        t.switchable && (t.hidden = !1, this.dataChanged = !0, "xy" != this.type && (this.marginsUpdated = !1), this.chartCreated && this.initChart())
                    },
                    hideGraph: function(t) {
                        t.switchable && (this.dataChanged = !0, "xy" != this.type && (this.marginsUpdated = !1), t.hidden = !0, this.chartCreated && this.initChart())
                    },
                    hideGraphsBalloon: function(t) {
                        t.showBalloon = !1, this.updateLegend()
                    },
                    showGraphsBalloon: function(t) {
                        t.showBalloon = !0, this.updateLegend()
                    },
                    updateLegend: function() {
                        this.legend && this.legend.invalidateSize()
                    },
                    resetAnimation: function() {
                        this.animatable = [];
                        var t, e = this.graphs;
                        if (e)
                            for (t = 0; t < e.length; t++) e[t].animationPlayed = !1
                    },
                    animateAgain: function() {
                        this.resetAnimation(), this.validateNow()
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.TrendLine = t.Class({
                    construct: function(e) {
                        this.cname = "TrendLine", this.createEvents("click", "rollOver", "rollOut"), this.isProtected = !1, this.dashLength = 0, this.lineColor = "#00CC00", this.lineThickness = this.lineAlpha = 1, t.applyTheme(this, e, this.cname)
                    },
                    draw: function() {
                        var e = this;
                        e.destroy();
                        var n, i, l, s, a = e.chart,
                            o = a.container,
                            r = e.categoryAxis,
                            u = e.initialDate,
                            h = e.initialCategory,
                            d = e.finalDate,
                            c = e.finalCategory,
                            p = e.valueAxis,
                            g = e.valueAxisX,
                            f = e.initialXValue,
                            m = e.finalXValue,
                            v = e.initialValue,
                            b = e.finalValue,
                            y = p.recalculateToPercents,
                            A = a.dataDateFormat;
                        r && (u && (u = t.getDate(u, A, "fff"), e.initialDate = u, n = r.dateToCoordinate(u)), h && (n = r.categoryToCoordinate(h)), d && (d = t.getDate(d, A, "fff"), e.finalDate = d, i = r.dateToCoordinate(d)), c && (i = r.categoryToCoordinate(c))), g && !y && (isNaN(f) || (n = g.getCoordinate(f)), isNaN(m) || (i = g.getCoordinate(m))), p && !y && (isNaN(v) || (l = p.getCoordinate(v)), isNaN(b) || (s = p.getCoordinate(b))), isNaN(n) || isNaN(i) || isNaN(l) || isNaN(l) || (a.rotate ? (r = [l, s], s = [n, i]) : (r = [n, i], s = [l, s]), l = t.line(o, r, s, e.lineColor, e.lineAlpha, e.lineThickness, e.dashLength), n = r, i = s, c = s[1] - s[0], 0 == (d = r[1] - r[0]) && (d = .01), 0 === c && (c = .01), u = d / Math.abs(d), h = c / Math.abs(c), c = 90 * Math.PI / 180 - Math.asin(d / (d * c / Math.abs(d * c) * Math.sqrt(Math.pow(d, 2) + Math.pow(c, 2)))), d = Math.abs(5 * Math.cos(c)), c = Math.abs(5 * Math.sin(c)), n.push(r[1] - u * c, r[0] - u * c), i.push(s[1] + h * d, s[0] + h * d), s = t.polygon(o, n, i, "#ffffff", .005, 0), (o = o.set([s, l])).translate(a.marginLeftReal, a.marginTopReal), a.trendLinesSet.push(o), t.setCN(a, l, "trend-line"), t.setCN(a, l, "trend-line-" + e.id), e.line = l, e.set = o, (l = e.initialImage) && ((l = t.processObject(l, t.Image, e.theme)).chart = a, l.draw(), l.translate(n[0] + l.offsetX, i[0] + l.offsetY), o.push(l.set)), (l = e.finalImage) && ((l = t.processObject(l, t.Image, e.theme)).chart = a, l.draw(), l.translate(n[1] + l.offsetX, i[1] + l.offsetY), o.push(l.set)), o.mouseup(function() {
                            e.handleLineClick()
                        }).mouseover(function() {
                            e.handleLineOver()
                        }).mouseout(function() {
                            e.handleLineOut()
                        }), o.touchend && o.touchend(function() {
                            e.handleLineClick()
                        }), o.clipRect(0, 0, a.plotAreaWidth, a.plotAreaHeight))
                    },
                    handleLineClick: function() {
                        this.fire({
                            type: "click",
                            trendLine: this,
                            chart: this.chart
                        })
                    },
                    handleLineOver: function() {
                        var t = this.rollOverColor;
                        void 0 !== t && this.line.attr({
                            stroke: t
                        }), this.balloonText && (clearTimeout(this.chart.hoverInt), t = this.line.getBBox(), this.chart.showBalloon(this.balloonText, this.lineColor, !0, this.x + t.x + t.width / 2, this.y + t.y + t.height / 2)), this.fire({
                            type: "rollOver",
                            trendLine: this,
                            chart: this.chart
                        })
                    },
                    handleLineOut: function() {
                        this.line.attr({
                            stroke: this.lineColor
                        }), this.balloonText && this.chart.hideBalloon(), this.fire({
                            type: "rollOut",
                            trendLine: this,
                            chart: this.chart
                        })
                    },
                    destroy: function() {
                        t.remove(this.set)
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.Image = t.Class({
                    construct: function(e) {
                        this.cname = "Image", this.height = this.width = 20, this.rotation = this.offsetY = this.offsetX = 0, this.balloonColor = this.color = "#000000", this.opacity = 1, t.applyTheme(this, e, this.cname)
                    },
                    draw: function() {
                        var t = this;
                        t.set && t.set.remove();
                        var e, n, i = t.chart.container;
                        t.set = i.set(), t.url ? (e = i.image(t.url, 0, 0, t.width, t.height), n = 1) : t.svgPath && ((e = i.path(t.svgPath)).setAttr("fill", t.color), e.setAttr("stroke", t.outlineColor), i = e.getBBox(), n = Math.min(t.width / i.width, t.height / i.height)), e && (e.setAttr("opacity", t.opacity), t.set.rotate(t.rotation), e.translate(-t.width / 2, -t.height / 2, n), t.balloonText && e.mouseover(function() {
                            t.chart.showBalloon(t.balloonText, t.balloonColor, !0)
                        }).mouseout(function() {
                            t.chart.hideBalloon()
                        }).touchend(function() {
                            t.chart.hideBalloon()
                        }).touchstart(function() {
                            t.chart.showBalloon(t.balloonText, t.balloonColor, !0)
                        }), t.set.push(e))
                    },
                    translate: function(t, e) {
                        this.set && this.set.translate(t, e)
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.circle = function(e, n, i, l, s, a, o, r, u) {
                    return 0 >= n && (n = .001), void 0 != s && 0 !== s || (s = .01), void 0 === a && (a = "#000000"), void 0 === o && (o = 0), l = {
                        fill: i,
                        stroke: a,
                        "fill-opacity": l,
                        "stroke-width": s,
                        "stroke-opacity": o
                    }, e = isNaN(u) ? e.circle(0, 0, n).attr(l) : e.ellipse(0, 0, n, u).attr(l), r && e.gradient("radialGradient", [i, t.adjustLuminosity(i, -.6)]), e
                }, t.text = function(e, n, i, l, s, a, o, r) {
                    return a || (a = "middle"), "right" == a && (a = "end"), "left" == a && (a = "start"), isNaN(r) && (r = 1), void 0 !== n && (n = String(n), t.isIE && !t.isModern && (n = (n = n.replace("&amp;", "&")).replace("&", "&amp;"))), i = {
                        fill: i,
                        "font-family": l,
                        "font-size": s + "px",
                        opacity: r
                    }, !0 === o && (i["font-weight"] = "bold"), i["text-anchor"] = a, e.text(n, i)
                }, t.polygon = function(e, n, i, l, s, a, o, r, u, h, d) {
                    isNaN(a) && (a = .01), isNaN(r) && (r = s);
                    var c = l,
                        p = !1;
                    for ("object" == typeof c && 1 < c.length && (p = !0, c = c[0]), void 0 === o && (o = c), s = {
                            fill: c,
                            stroke: o,
                            "fill-opacity": s,
                            "stroke-width": a,
                            "stroke-opacity": r
                        }, void 0 !== d && 0 < d && (s["stroke-dasharray"] = d), d = t.dx, a = t.dy, e.handDrawn && (n = (i = t.makeHD(n, i, e.handDrawScatter))[0], i = i[1]), o = Math.round, h && (o = Number), r = "M" + (o(n[0]) + d) + "," + (o(i[0]) + a), c = 1; c < n.length; c++) h && (n[c] = t.roundTo(n[c], 5), i[c] = t.roundTo(i[c], 5)), r += " L" + (o(n[c]) + d) + "," + (o(i[c]) + a);
                    return e = e.path(r + " Z").attr(s), p && e.gradient("linearGradient", l, u), e
                }, t.rect = function(e, n, i, l, s, a, o, r, u, h, d) {
                    if (isNaN(n) || isNaN(i)) return e.set();
                    isNaN(a) && (a = 0), void 0 === u && (u = 0), void 0 === h && (h = 270), isNaN(s) && (s = 0);
                    var c = l,
                        p = !1;
                    "object" == typeof c && (c = c[0], p = !0), void 0 === o && (o = c), void 0 === r && (r = s), n = Math.round(n), i = Math.round(i);
                    var g = 0,
                        f = 0;
                    return 0 > n && (g = -(n = Math.abs(n))), 0 > i && (f = -(i = Math.abs(i))), g += t.dx, f += t.dy, s = {
                        fill: c,
                        stroke: o,
                        "fill-opacity": s,
                        "stroke-opacity": r
                    }, void 0 !== d && 0 < d && (s["stroke-dasharray"] = d), e = e.rect(g, f, n, i, u, a).attr(s), p && e.gradient("linearGradient", l, h), e
                }, t.bullet = function(e, n, i, l, s, a, o, r, u, h, d, c, p) {
                    var g;
                    switch ("circle" == n && (n = "round"), n) {
                        case "round":
                            g = t.circle(e, i / 2, l, s, a, o, r);
                            break;
                        case "square":
                            g = t.polygon(e, [-i / 2, i / 2, i / 2, -i / 2], [i / 2, i / 2, -i / 2, -i / 2], l, s, a, o, r, h - 180, void 0, p);
                            break;
                        case "rectangle":
                            g = t.polygon(e, [-i, i, i, -i], [i / 2, i / 2, -i / 2, -i / 2], l, s, a, o, r, h - 180, void 0, p);
                            break;
                        case "diamond":
                            g = t.polygon(e, [-i / 2, 0, i / 2, 0], [0, -i / 2, 0, i / 2], l, s, a, o, r);
                            break;
                        case "triangleUp":
                            g = t.triangle(e, i, 0, l, s, a, o, r);
                            break;
                        case "triangleDown":
                            g = t.triangle(e, i, 180, l, s, a, o, r);
                            break;
                        case "triangleLeft":
                            g = t.triangle(e, i, 270, l, s, a, o, r);
                            break;
                        case "triangleRight":
                            g = t.triangle(e, i, 90, l, s, a, o, r);
                            break;
                        case "bubble":
                            g = t.circle(e, i / 2, l, s, a, o, r, !0);
                            break;
                        case "line":
                            g = t.line(e, [-i / 2, i / 2], [0, 0], l, s, a, o, r);
                            break;
                        case "yError":
                            (g = e.set()).push(t.line(e, [0, 0], [-i / 2, i / 2], l, s, a)), g.push(t.line(e, [-u, u], [-i / 2, -i / 2], l, s, a)), g.push(t.line(e, [-u, u], [i / 2, i / 2], l, s, a));
                            break;
                        case "xError":
                            (g = e.set()).push(t.line(e, [-i / 2, i / 2], [0, 0], l, s, a)), g.push(t.line(e, [-i / 2, -i / 2], [-u, u], l, s, a)), g.push(t.line(e, [i / 2, i / 2], [-u, u], l, s, a))
                    }
                    return g && g.pattern(d, NaN, c), g
                }, t.triangle = function(t, e, n, i, l, s, a, o) {
                    var r;
                    return void 0 !== s && 0 !== s || (s = 1), void 0 === a && (a = "#000"), void 0 === o && (o = 0), i = {
                        fill: i,
                        stroke: a,
                        "fill-opacity": l,
                        "stroke-width": s,
                        "stroke-opacity": o
                    }, e /= 2, 0 === n && (r = " M" + -e + "," + e + " L0," + -e + " L" + e + "," + e + " Z"), 180 == n && (r = " M" + -e + "," + -e + " L0," + e + " L" + e + "," + -e + " Z"), 90 == n && (r = " M" + -e + "," + -e + " L" + e + ",0 L" + -e + "," + e + " Z"), 270 == n && (r = " M" + -e + ",0 L" + e + "," + e + " L" + e + "," + -e + " Z"), t.path(r).attr(i)
                }, t.line = function(e, n, i, l, s, a, o, r, u, h, d) {
                    if (e.handDrawn && !d) return t.handDrawnLine(e, n, i, l, s, a, o, r, u, h, d);
                    for (a = {
                            fill: "none",
                            "stroke-width": a
                        }, void 0 !== o && 0 < o && (a["stroke-dasharray"] = o), isNaN(s) || (a["stroke-opacity"] = s), l && (a.stroke = l), l = Math.round, h && (l = Number, n[0] = t.roundTo(n[0], 5), i[0] = t.roundTo(i[0], 5)), h = t.dx, s = t.dy, o = "M" + (l(n[0]) + h) + "," + (l(i[0]) + s), r = 1; r < n.length; r++) n[r] = t.roundTo(n[r], 5), i[r] = t.roundTo(i[r], 5), o += " L" + (l(n[r]) + h) + "," + (l(i[r]) + s);
                    return t.VML ? e.path(o, void 0, !0).attr(a) : (u && (o += " M0,0 L0,0"), e.path(o).attr(a))
                }, t.makeHD = function(t, e, n) {
                    for (var i = [], l = [], s = 1; s < t.length; s++)
                        for (var a = Number(t[s - 1]), o = Number(e[s - 1]), r = Number(t[s]), u = Number(e[s]), h = Math.round(Math.sqrt(Math.pow(r - a, 2) + Math.pow(u - o, 2)) / 50) + 1, d = (r = (r - a) / h, u = (u - o) / h, 0); d <= h; d++) {
                            var c = o + d * u + Math.random() * n;
                            i.push(a + d * r + Math.random() * n), l.push(c)
                        }
                    return [i, l]
                }, t.handDrawnLine = function(e, n, i, l, s, a, o, r, u, h) {
                    var d, c = e.set();
                    for (d = 1; d < n.length; d++)
                        for (var p = (g = t.makeHD(p = [n[d - 1], n[d]], g = [i[d - 1], i[d]], e.handDrawScatter))[0], g = g[1], f = 1; f < p.length; f++) c.push(t.line(e, [p[f - 1], p[f]], [g[f - 1], g[f]], l, s, a + Math.random() * e.handDrawThickness - e.handDrawThickness / 2, o, r, u, h, !0));
                    return c
                }, t.doNothing = function(t) {
                    return t
                }, t.drop = function(t, e, n, i, l, s, a, o) {
                    var r = 1 / 180 * Math.PI,
                        u = n - 20,
                        h = Math.sin(u * r) * e,
                        d = Math.cos(u * r) * e,
                        c = Math.sin((u + 40) * r) * e,
                        p = Math.cos((u + 40) * r) * e,
                        g = .8 * e,
                        f = -e / 3,
                        m = e / 3;
                    return 0 === n && (f = -f, m = 0), 180 == n && (m = 0), 90 == n && (f = 0), 270 == n && (f = 0, m = -m), n = {
                        fill: i,
                        stroke: a,
                        "stroke-width": s,
                        "stroke-opacity": o,
                        "fill-opacity": l
                    }, e = "M" + h + "," + d + " A" + e + "," + e + ",0,1,1," + c + "," + p + " A" + g + "," + g + ",0,0,0," + (Math.sin((u + 20) * r) * e + m) + "," + (Math.cos((u + 20) * r) * e + f), t.path(e += " A" + g + "," + g + ",0,0,0," + h + "," + d, void 0, void 0, "1000,1000").attr(n)
                }, t.wedge = function(e, n, i, l, s, a, o, r, u, h, d, c, p, g) {
                    var f = Math.round;
                    a = f(a);
                    var m = f((o = f(o)) / a * (r = f(r))),
                        v = t.VML;
                    359.94 < (x = 359.5 + a / 100) && (x = 359.94), s >= x && (s = x);
                    var b, y, A = 1 / 180 * Math.PI,
                        x = n + Math.sin(l * A) * r,
                        C = i - Math.cos(l * A) * m,
                        w = n + Math.sin(l * A) * a,
                        k = i - Math.cos(l * A) * o,
                        M = n + Math.sin((l + s) * A) * a,
                        S = i - Math.cos((l + s) * A) * o,
                        P = n + Math.sin((l + s) * A) * r,
                        N = (A = i - Math.cos((l + s) * A) * m, {
                            fill: t.adjustLuminosity(h.fill, -.2),
                            "stroke-opacity": 0,
                            "fill-opacity": h["fill-opacity"]
                        }),
                        I = 0;
                    if (180 < Math.abs(s) && (I = 1), l = e.set(), v && (x = f(10 * x), w = f(10 * w), M = f(10 * M), P = f(10 * P), C = f(10 * C), k = f(10 * k), S = f(10 * S), A = f(10 * A), n = f(10 * n), u = f(10 * u), i = f(10 * i), a *= 10, o *= 10, r *= 10, m *= 10, 1 > Math.abs(s) && 1 >= Math.abs(M - w) && 1 >= Math.abs(S - k) && (b = !0)), s = "", c && (N["fill-opacity"] = 0, N["stroke-opacity"] = h["stroke-opacity"] / 2, N.stroke = h.stroke), 0 < u) {
                        y = " M" + x + "," + (C + u) + " L" + w + "," + (k + u), v ? (b || (y += " A" + (n - a) + "," + (u + i - o) + "," + (n + a) + "," + (u + i + o) + "," + w + "," + (k + u) + "," + M + "," + (S + u)), y += " L" + P + "," + (A + u), 0 < r && (b || (y += " B" + (n - r) + "," + (u + i - m) + "," + (n + r) + "," + (u + i + m) + "," + P + "," + (u + A) + "," + x + "," + (u + C)))) : (y += " A" + a + "," + o + ",0," + I + ",1," + M + "," + (S + u) + " L" + P + "," + (A + u), 0 < r && (y += " A" + r + "," + m + ",0," + I + ",0," + x + "," + (C + u))), y += " Z";
                        var T = u;
                        v && (T /= 10);
                        for (var O = 0; O < T; O += 10) {
                            var D = e.path(y, void 0, void 0, "1000,1000").attr(N);
                            l.push(D), D.translate(0, -O)
                        }
                        y = e.path(" M" + x + "," + C + " L" + x + "," + (C + u) + " L" + w + "," + (k + u) + " L" + w + "," + k + " L" + x + "," + C + " Z", void 0, void 0, "1000,1000").attr(N), u = e.path(" M" + M + "," + S + " L" + M + "," + (S + u) + " L" + P + "," + (A + u) + " L" + P + "," + A + " L" + M + "," + S + " Z", void 0, void 0, "1000,1000").attr(N), l.push(y), l.push(u)
                    }
                    if (v ? (b || (s = " A" + f(n - a) + "," + f(i - o) + "," + f(n + a) + "," + f(i + o) + "," + f(w) + "," + f(k) + "," + f(M) + "," + f(S)), o = " M" + f(x) + "," + f(C) + " L" + f(w) + "," + f(k) + s + " L" + f(P) + "," + f(A)) : o = " M" + x + "," + C + " L" + w + "," + k + " A" + a + "," + o + ",0," + I + ",1," + M + "," + S + " L" + P + "," + A, 0 < r && (v ? b || (o += " B" + (n - r) + "," + (i - m) + "," + (n + r) + "," + (i + m) + "," + P + "," + A + "," + x + "," + C) : o += " A" + r + "," + m + ",0," + I + ",0," + x + "," + C), e.handDrawn && (r = t.line(e, [x, w], [C, k], h.stroke, h.thickness * Math.random() * e.handDrawThickness, h["stroke-opacity"]), l.push(r)), e = e.path(o + " Z", void 0, void 0, "1000,1000").attr(h), d) {
                        for (r = [], m = 0; m < d.length; m++) r.push(t.adjustLuminosity(h.fill, d[m]));
                        "radial" != g || t.isModern || (r = []), 0 < r.length && e.gradient(g + "Gradient", r)
                    }
                    return t.isModern && "radial" == g && e.grad && (e.grad.setAttribute("gradientUnits", "userSpaceOnUse"), e.grad.setAttribute("r", a), e.grad.setAttribute("cx", n), e.grad.setAttribute("cy", i)), e.pattern(c, NaN, p), l.wedge = e, l.push(e), l
                }, t.rgb2hex = function(t) {
                    return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
                }, t.adjustLuminosity = function(e, n) {
                    e && -1 != e.indexOf("rgb") && (e = t.rgb2hex(e)), 6 > (e = String(e).replace(/[^0-9a-f]/gi, "")).length && (e = String(e[0]) + String(e[0]) + String(e[1]) + String(e[1]) + String(e[2]) + String(e[2])), n = n || 0;
                    var i, l, s = "#";
                    for (l = 0; 3 > l; l++) i = parseInt(e.substr(2 * l, 2), 16), s += ("00" + (i = Math.round(Math.min(Math.max(0, i + i * n), 255)).toString(16))).substr(i.length);
                    return s
                }
            }(),
            function() {
                var t = window.AmCharts;
                t.Bezier = t.Class({
                    construct: function(e, n, i, l, s, a, o, r, u, h, d) {
                        var c, p, g = e.chart,
                            f = t.bezierX,
                            m = t.bezierY;
                        for (isNaN(g.bezierX) || (f = g.bezierX), isNaN(g.bezierY) || (m = g.bezierY), isNaN(f) && (g.rotate ? (f = 20, m = 4) : (m = 20, f = 4)), "object" == typeof o && 1 < o.length && (p = !0, c = o, o = o[0]), "object" == typeof r && (r = r[0]), 0 === r && (o = "none"), a = {
                                fill: o,
                                "fill-opacity": r,
                                "stroke-width": a
                            }, void 0 !== u && 0 < u && (a["stroke-dasharray"] = u), isNaN(s) || (a["stroke-opacity"] = s), l && (a.stroke = l), l = "M" + Math.round(n[0]) + "," + Math.round(i[0]) + " ", s = [], u = 0; u < n.length; u++) isNaN(n[u]) || isNaN(i[u]) ? (l += this.drawSegment(s, f, m), u < n.length - 1 && (l += "L" + n[u + 1] + "," + i[u + 1] + " "), s = []) : s.push({
                            x: Number(n[u]),
                            y: Number(i[u])
                        });
                        l += this.drawSegment(s, f, m), h && (l += h), this.path = e.path(l).attr(a), this.node = this.path.node, p && this.path.gradient("linearGradient", c, d)
                    },
                    drawSegment: function(t, e, n) {
                        var i = "";
                        if (2 < t.length)
                            for (var l = 0; l < t.length - 1; l++) {
                                var s = [],
                                    a = t[l - 1],
                                    o = t[l],
                                    r = t[l + 1],
                                    u = t[l + 2];
                                0 === l ? (s.push({
                                    x: o.x,
                                    y: o.y
                                }), s.push({
                                    x: o.x,
                                    y: o.y
                                }), s.push({
                                    x: r.x,
                                    y: r.y
                                }), s.push({
                                    x: u.x,
                                    y: u.y
                                })) : l >= t.length - 2 ? (s.push({
                                    x: a.x,
                                    y: a.y
                                }), s.push({
                                    x: o.x,
                                    y: o.y
                                }), s.push({
                                    x: r.x,
                                    y: r.y
                                }), s.push({
                                    x: r.x,
                                    y: r.y
                                })) : (s.push({
                                    x: a.x,
                                    y: a.y
                                }), s.push({
                                    x: o.x,
                                    y: o.y
                                }), s.push({
                                    x: r.x,
                                    y: r.y
                                }), s.push({
                                    x: u.x,
                                    y: u.y
                                })), a = [], o = Math.round, a.push({
                                    x: o(s[1].x),
                                    y: o(s[1].y)
                                }), a.push({
                                    x: o((e * s[1].x - s[0].x + s[2].x) / e),
                                    y: o((n * s[1].y - s[0].y + s[2].y) / n)
                                }), a.push({
                                    x: o((s[1].x + e * s[2].x - s[3].x) / e),
                                    y: o((s[1].y + n * s[2].y - s[3].y) / n)
                                }), a.push({
                                    x: o(s[2].x),
                                    y: o(s[2].y)
                                }), i += "C" + a[1].x + "," + a[1].y + "," + a[2].x + "," + a[2].y + "," + a[3].x + "," + a[3].y + " "
                            } else 1 < t.length && (i += "L" + t[1].x + "," + t[1].y);
                        return i
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.AmDraw = t.Class({
                    construct: function(e, n, i, l) {
                        t.SVG_NS = "http://www.w3.org/2000/svg", t.SVG_XLINK = "http://www.w3.org/1999/xlink", t.hasSVG = !!document.createElementNS && !!document.createElementNS(t.SVG_NS, "svg").createSVGRect, 1 > n && (n = 10), 1 > i && (i = 10), this.div = e, this.width = n, this.height = i, this.rBin = document.createElement("div"), t.hasSVG ? (t.SVG = !0, n = this.createSvgElement("svg"), e.appendChild(n), this.container = n, this.addDefs(l), this.R = new t.SVGRenderer(this)) : t.isIE && t.VMLRenderer && (t.VML = !0, t.vmlStyleSheet || (document.namespaces.add("amvml", "urn:schemas-microsoft-com:vml"), 31 > document.styleSheets.length ? ((n = document.createStyleSheet()).addRule(".amvml", "behavior:url(#default#VML); display:inline-block; antialias:true"), t.vmlStyleSheet = n) : document.styleSheets[0].addRule(".amvml", "behavior:url(#default#VML); display:inline-block; antialias:true")), this.container = e, this.R = new t.VMLRenderer(this, l), this.R.disableSelection(e))
                    },
                    createSvgElement: function(e) {
                        return document.createElementNS(t.SVG_NS, e)
                    },
                    circle: function(e, n, i, l) {
                        var s = new t.AmDObject("circle", this);
                        return s.attr({
                            r: i,
                            cx: e,
                            cy: n
                        }), this.addToContainer(s.node, l), s
                    },
                    ellipse: function(e, n, i, l, s) {
                        var a = new t.AmDObject("ellipse", this);
                        return a.attr({
                            rx: i,
                            ry: l,
                            cx: e,
                            cy: n
                        }), this.addToContainer(a.node, s), a
                    },
                    setSize: function(t, e) {
                        0 < t && 0 < e && (this.container.style.width = t + "px", this.container.style.height = e + "px")
                    },
                    rect: function(e, n, i, l, s, a, o) {
                        var r = new t.AmDObject("rect", this);
                        return t.VML && (s = Math.round(100 * s / Math.min(i, l)), i += 2 * a, l += 2 * a, r.bw = a, r.node.style.marginLeft = -a, r.node.style.marginTop = -a), 1 > i && (i = 1), 1 > l && (l = 1), r.attr({
                            x: e,
                            y: n,
                            width: i,
                            height: l,
                            rx: s,
                            ry: s,
                            "stroke-width": a
                        }), this.addToContainer(r.node, o), r
                    },
                    image: function(e, n, i, l, s, a) {
                        var o = new t.AmDObject("image", this);
                        return o.attr({
                            x: n,
                            y: i,
                            width: l,
                            height: s
                        }), this.R.path(o, e), this.addToContainer(o.node, a), o
                    },
                    addToContainer: function(t, e) {
                        e || (e = this.container), e.appendChild(t)
                    },
                    text: function(t, e, n) {
                        return this.R.text(t, e, n)
                    },
                    path: function(e, n, i, l) {
                        var s = new t.AmDObject("path", this);
                        return l || (l = "100,100"), s.attr({
                            cs: l
                        }), s.attr(i ? {
                            dd: e
                        } : {
                            d: e
                        }), this.addToContainer(s.node, n), s
                    },
                    set: function(t) {
                        return this.R.set(t)
                    },
                    remove: function(t) {
                        if (t) {
                            var e = this.rBin;
                            e.appendChild(t), e.innerHTML = ""
                        }
                    },
                    renderFix: function() {
                        var t = this.container,
                            e = t.style;
                        e.top = "0px", e.left = "0px";
                        try {
                            var n = t.getBoundingClientRect(),
                                i = n.left - Math.round(n.left),
                                l = n.top - Math.round(n.top);
                            i && (e.left = i + "px"), l && (e.top = l + "px")
                        } catch (t) {}
                    },
                    update: function() {
                        this.R.update()
                    },
                    addDefs: function(e) {
                        if (t.hasSVG) {
                            var n = this.createSvgElement("desc"),
                                i = this.container;
                            if (i.setAttribute("version", "1.1"), i.style.position = "absolute", this.setSize(this.width, this.height), e.accessibleTitle) {
                                var l = this.createSvgElement("text");
                                i.appendChild(l), l.innerHTML = e.accessibleTitle, l.style.opacity = 0
                            }
                            t.rtl && (i.setAttribute("direction", "rtl"), i.style.left = "auto", i.style.right = "0px"), e && (e.addCodeCredits && n.appendChild(document.createTextNode("JavaScript chart by amCharts " + e.version)), e.accessibleDescription && (n.innerHTML = "", n.appendChild(document.createTextNode(e.accessibleDescription))), i.appendChild(n), e.defs && (n = this.createSvgElement("defs"), i.appendChild(n), t.parseDefs(e.defs, n), this.defs = n))
                        }
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.AmDObject = t.Class({
                    construct: function(t, e) {
                        this.D = e, this.R = e.R, this.node = this.R.create(this, t), this.y = this.x = 0, this.scale = 1
                    },
                    attr: function(t) {
                        return this.R.attr(this, t), this
                    },
                    getAttr: function(t) {
                        return this.node.getAttribute(t)
                    },
                    setAttr: function(t, e) {
                        return this.R.setAttr(this, t, e), this
                    },
                    clipRect: function(t, e, n, i) {
                        this.R.clipRect(this, t, e, n, i)
                    },
                    translate: function(t, e, n, i) {
                        i || (t = Math.round(t), e = Math.round(e)), this.R.move(this, t, e, n), this.x = t, this.y = e, this.scale = n, this.angle && this.rotate(this.angle)
                    },
                    rotate: function(t, e) {
                        this.R.rotate(this, t, e), this.angle = t
                    },
                    animate: function(e, n, i) {
                        for (var l in e)
                            if (e.hasOwnProperty(l)) {
                                var s = l,
                                    a = e[l];
                                i = t.getEffect(i), this.R.animate(this, s, a, n, i)
                            }
                    },
                    push: function(t) {
                        if (t) {
                            var e = this.node;
                            e.appendChild(t.node);
                            var n = t.clipPath;
                            n && e.appendChild(n), (t = t.grad) && e.appendChild(t)
                        }
                    },
                    text: function(t) {
                        this.R.setText(this, t)
                    },
                    remove: function() {
                        this.stop(), this.R.remove(this)
                    },
                    clear: function() {
                        var t = this.node;
                        if (t.hasChildNodes())
                            for (; 1 <= t.childNodes.length;) t.removeChild(t.firstChild)
                    },
                    hide: function() {
                        this.setAttr("visibility", "hidden")
                    },
                    show: function() {
                        this.setAttr("visibility", "visible")
                    },
                    getBBox: function() {
                        return this.R.getBBox(this)
                    },
                    toFront: function() {
                        var t = this.node;
                        if (t) {
                            this.prevNextNode = t.nextSibling;
                            var e = t.parentNode;
                            e && e.appendChild(t)
                        }
                    },
                    toPrevious: function() {
                        var t = this.node;
                        t && this.prevNextNode && (t = t.parentNode) && t.insertBefore(this.prevNextNode, null)
                    },
                    toBack: function() {
                        var t = this.node;
                        if (t) {
                            this.prevNextNode = t.nextSibling;
                            var e = t.parentNode;
                            if (e) {
                                var n = e.firstChild;
                                n && e.insertBefore(t, n)
                            }
                        }
                    },
                    mouseover: function(t) {
                        return this.R.addListener(this, "mouseover", t), this
                    },
                    mouseout: function(t) {
                        return this.R.addListener(this, "mouseout", t), this
                    },
                    click: function(t) {
                        return this.R.addListener(this, "click", t), this
                    },
                    dblclick: function(t) {
                        return this.R.addListener(this, "dblclick", t), this
                    },
                    mousedown: function(t) {
                        return this.R.addListener(this, "mousedown", t), this
                    },
                    mouseup: function(t) {
                        return this.R.addListener(this, "mouseup", t), this
                    },
                    touchmove: function(t) {
                        return this.R.addListener(this, "touchmove", t), this
                    },
                    touchstart: function(t) {
                        return this.R.addListener(this, "touchstart", t), this
                    },
                    touchend: function(t) {
                        return this.R.addListener(this, "touchend", t), this
                    },
                    keyup: function(t) {
                        return this.R.addListener(this, "keyup", t), this
                    },
                    focus: function(t) {
                        return this.R.addListener(this, "focus", t), this
                    },
                    blur: function(t) {
                        return this.R.addListener(this, "blur", t), this
                    },
                    contextmenu: function(t) {
                        return this.node.addEventListener ? this.node.addEventListener("contextmenu", t, !0) : this.R.addListener(this, "contextmenu", t), this
                    },
                    stop: function() {
                        t.removeFromArray(this.R.animations, this.an_translate), t.removeFromArray(this.R.animations, this.an_y), t.removeFromArray(this.R.animations, this.an_x)
                    },
                    length: function() {
                        return this.node.childNodes.length
                    },
                    gradient: function(t, e, n) {
                        this.R.gradient(this, t, e, n)
                    },
                    pattern: function(t, e, n) {
                        t && this.R.pattern(this, t, e, n)
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.VMLRenderer = t.Class({
                    construct: function(t, e) {
                        this.chart = e, this.D = t, this.cNames = {
                            circle: "oval",
                            ellipse: "oval",
                            rect: "roundrect",
                            path: "shape"
                        }, this.styleMap = {
                            x: "left",
                            y: "top",
                            width: "width",
                            height: "height",
                            "font-family": "fontFamily",
                            "font-size": "fontSize",
                            visibility: "visibility"
                        }
                    },
                    create: function(t, e) {
                        var n;
                        if ("group" == e) n = document.createElement("div"), t.type = "div";
                        else if ("text" == e) n = document.createElement("div"), t.type = "text";
                        else if ("image" == e) n = document.createElement("img"), t.type = "image";
                        else {
                            t.type = "shape", t.shapeType = this.cNames[e], n = document.createElement("amvml:" + this.cNames[e]);
                            var i = document.createElement("amvml:stroke");
                            n.appendChild(i), t.stroke = i;
                            var l = document.createElement("amvml:fill");
                            n.appendChild(l), t.fill = l, l.className = "amvml", i.className = "amvml", n.className = "amvml"
                        }
                        return n.style.position = "absolute", n.style.top = 0, n.style.left = 0, n
                    },
                    path: function(t, e) {
                        t.node.setAttribute("src", e)
                    },
                    setAttr: function(e, n, i) {
                        if (void 0 !== i) {
                            var l;
                            8 === document.documentMode && (l = !0);
                            var s = e.node,
                                a = e.type,
                                o = s.style;
                            "r" == n && (o.width = 2 * i, o.height = 2 * i), "oval" == e.shapeType && ("rx" == n && (o.width = 2 * i), "ry" == n && (o.height = 2 * i)), "roundrect" == e.shapeType && ("width" != n && "height" != n || --i), "cursor" == n && (o.cursor = i), "cx" == n && (o.left = i - t.removePx(o.width) / 2), "cy" == n && (o.top = i - t.removePx(o.height) / 2);
                            var r = this.styleMap[n];
                            if ("width" == r && 0 > i && (i = 0), void 0 !== r && (o[r] = i), "text" == a && ("text-anchor" == n && (e.anchor = i, r = s.clientWidth, "end" == i && (o.marginLeft = -r + "px"), "middle" == i && (o.marginLeft = -r / 2 + "px", o.textAlign = "center"), "start" == i && (o.marginLeft = "0px")), "fill" == n && (o.color = i), "font-weight" == n && (o.fontWeight = i)), o = e.children)
                                for (r = 0; r < o.length; r++) o[r].setAttr(n, i);
                            "shape" == a && ("cs" == n && (s.style.width = "100px", s.style.height = "100px", s.setAttribute("coordsize", i)), "d" == n && s.setAttribute("path", this.svgPathToVml(i)), "dd" == n && s.setAttribute("path", i), a = e.stroke, e = e.fill, "stroke" == n && (l ? a.color = i : a.setAttribute("color", i)), "stroke-width" == n && (l ? a.weight = i : a.setAttribute("weight", i)), "stroke-opacity" == n && (l ? a.opacity = i : a.setAttribute("opacity", i)), "stroke-dasharray" == n && (o = "solid", 0 < i && 3 > i && (o = "dot"), 3 <= i && 6 >= i && (o = "dash"), 6 < i && (o = "longdash"), l ? a.dashstyle = o : a.setAttribute("dashstyle", o)), "fill-opacity" != n && "opacity" != n || (0 === i ? l ? e.on = !1 : e.setAttribute("on", !1) : l ? e.opacity = i : e.setAttribute("opacity", i)), "fill" == n && (l ? e.color = i : e.setAttribute("color", i)), "rx" == n && (l ? s.arcSize = i + "%" : s.setAttribute("arcsize", i + "%")))
                        }
                    },
                    attr: function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && this.setAttr(t, n, e[n])
                    },
                    text: function(e, n, i) {
                        var l = new t.AmDObject("text", this.D),
                            s = l.node;
                        return s.style.whiteSpace = "pre", s.innerHTML = e, this.D.addToContainer(s, i), this.attr(l, n), l
                    },
                    getBBox: function(t) {
                        return this.getBox(t.node)
                    },
                    getBox: function(t) {
                        var e, n = t.offsetLeft,
                            i = t.offsetTop,
                            l = t.offsetWidth,
                            s = t.offsetHeight;
                        if (t.hasChildNodes()) {
                            var a, o, r;
                            for (r = 0; r < t.childNodes.length; r++) {
                                var u = (e = this.getBox(t.childNodes[r])).x;
                                isNaN(u) || (isNaN(a) ? a = u : u < a && (a = u));
                                var h = e.y;
                                isNaN(h) || (isNaN(o) ? o = h : h < o && (o = h)), u = e.width + u, isNaN(u) || (l = Math.max(l, u)), e = e.height + h, isNaN(e) || (s = Math.max(s, e))
                            }
                            0 > a && (n += a), 0 > o && (i += o)
                        }
                        return {
                            x: n,
                            y: i,
                            width: l,
                            height: s
                        }
                    },
                    setText: function(t, e) {
                        var n = t.node;
                        n && (n.innerHTML = e), this.setAttr(t, "text-anchor", t.anchor)
                    },
                    addListener: function(t, e, n) {
                        t.node["on" + e] = n
                    },
                    move: function(e, n, i) {
                        var l = e.node,
                            s = l.style;
                        "text" == e.type && (i -= t.removePx(s.fontSize) / 2 - 1), "oval" == e.shapeType && (n -= t.removePx(s.width) / 2, i -= t.removePx(s.height) / 2), e = e.bw, isNaN(e) || (n -= e, i -= e), isNaN(n) || isNaN(i) || (l.style.left = n + "px", l.style.top = i + "px")
                    },
                    svgPathToVml: function(t) {
                        var e = t.split(" ");
                        t = "";
                        var n, i, l = Math.round;
                        for (i = 0; i < e.length; i++) {
                            var s, a = (s = e[i]).substring(0, 1),
                                o = (s = s.substring(1)).split(","),
                                r = l(o[0]) + "," + l(o[1]);
                            if ("M" == a && (t += " m " + r), "L" == a && (t += " l " + r), "Z" == a && (t += " x e"), "Q" == a) {
                                var u = n.length,
                                    h = n[u - 1],
                                    d = o[0],
                                    c = o[1],
                                    p = (r = o[2], o[3]);
                                t += " c " + (n = l(n[u - 2] / 3 + 2 / 3 * d)) + "," + (h = l(h / 3 + 2 / 3 * c)) + "," + (d = l(2 / 3 * d + r / 3)) + "," + (c = l(2 / 3 * c + p / 3)) + "," + r + "," + p
                            }
                            "C" == a && (t += " c " + o[0] + "," + o[1] + "," + o[2] + "," + o[3] + "," + o[4] + "," + o[5]), "A" == a && (t += " wa " + s), "B" == a && (t += " at " + s), n = o
                        }
                        return t
                    },
                    animate: function(t, e, n, i, l) {
                        var s = t.node,
                            a = this.chart;
                        if (t.animationFinished = !1, "translate" == e) {
                            n = (e = n.split(","))[1];
                            var o = s.offsetTop;
                            a.animate(t, "left", s.offsetLeft, e[0], i, l, "px"), a.animate(t, "top", o, n, i, l, "px")
                        }
                    },
                    clipRect: function(t, e, n, i, l) {
                        t = t.node, 0 === e && 0 === n ? (t.style.width = i + "px", t.style.height = l + "px", t.style.overflow = "hidden") : t.style.clip = "rect(" + n + "px " + (e + i) + "px " + (n + l) + "px " + e + "px)"
                    },
                    rotate: function(e, n, i) {
                        if (0 !== Number(n)) {
                            e = (u = e.node).style, i || (i = this.getBGColor(u.parentNode)), e.backgroundColor = i, e.paddingLeft = 1, i = n * Math.PI / 180;
                            var l = Math.cos(i),
                                s = Math.sin(i),
                                a = t.removePx(e.left),
                                o = t.removePx(e.top),
                                r = u.offsetWidth,
                                u = u.offsetHeight;
                            n /= Math.abs(n), e.left = a + r / 2 - r / 2 * Math.cos(i) - n * u / 2 * Math.sin(i) + 3, e.top = o - n * r / 2 * Math.sin(i) + n * u / 2 * Math.sin(i), e.cssText = e.cssText + "; filter:progid:DXImageTransform.Microsoft.Matrix(M11='" + l + "', M12='" + -s + "', M21='" + s + "', M22='" + l + "', sizingmethod='auto expand');"
                        }
                    },
                    getBGColor: function(t) {
                        var e = "#FFFFFF";
                        if (t.style) {
                            var n = t.style.backgroundColor;
                            "" !== n ? e = n : t.parentNode && (e = this.getBGColor(t.parentNode))
                        }
                        return e
                    },
                    set: function(e) {
                        var n, i = new t.AmDObject("group", this.D);
                        if (this.D.container.appendChild(i.node), e)
                            for (n = 0; n < e.length; n++) i.push(e[n]);
                        return i
                    },
                    gradient: function(t, e, n, i) {
                        var l, s = "";
                        for ("radialGradient" == e && (e = "gradientradial", n.reverse()), "linearGradient" == e && (e = "gradient"), l = 0; l < n.length; l++) s += Math.round(100 * l / (n.length - 1)) + "% " + n[l], l < n.length - 1 && (s += ",");
                        t = t.fill, 90 == i ? i = 0 : 270 == i ? i = 180 : 180 == i ? i = 90 : 0 === i && (i = 270), 8 === document.documentMode ? (t.type = e, t.angle = i) : (t.setAttribute("type", e), t.setAttribute("angle", i)), s && (t.colors.value = s)
                    },
                    remove: function(t) {
                        t.clipPath && this.D.remove(t.clipPath), this.D.remove(t.node)
                    },
                    disableSelection: function(t) {
                        t.onselectstart = function() {
                            return !1
                        }, t.style.cursor = "default"
                    },
                    pattern: function(e, n, i, l) {
                        i = e.node, e = e.fill;
                        var s = "none";
                        n.color && (s = n.color), i.fillColor = s, t.isAbsolute(n = n.url) || (n = l + n), 8 === document.documentMode ? (e.type = "tile", e.src = n) : (e.setAttribute("type", "tile"), e.setAttribute("src", n))
                    },
                    update: function() {}
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.SVGRenderer = t.Class({
                    construct: function(t) {
                        this.D = t, this.animations = []
                    },
                    create: function(e, n) {
                        return document.createElementNS(t.SVG_NS, n)
                    },
                    attr: function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && this.setAttr(t, n, e[n])
                    },
                    setAttr: function(t, e, n) {
                        void 0 !== n && t.node.setAttribute(e, n)
                    },
                    animate: function(e, n, i, l, s) {
                        e.animationFinished = !1;
                        var a = e.node;
                        e["an_" + n] && t.removeFromArray(this.animations, e["an_" + n]), "translate" == n ? 0 === (a = (a = (a = (a = a.getAttribute("transform")) ? String(a).substring(10, a.length - 1) : "0,0").split(", ").join(" ")).split(" ").join(",")) && (a = "0,0") : a = Number(a.getAttribute(n)), this.animations.push(i = {
                            obj: e,
                            frame: 0,
                            attribute: n,
                            from: a,
                            to: i,
                            time: l,
                            effect: s
                        }), e["an_" + n] = i
                    },
                    update: function() {
                        var e, n = this.animations;
                        for (e = n.length - 1; 0 <= e; e--) {
                            var i, l, s, a = n[e],
                                o = a.time * t.updateRate,
                                r = a.frame + 1,
                                u = a.obj,
                                h = a.attribute;
                            if (r <= o) {
                                if (a.frame++, "translate" == h) {
                                    if (i = a.from.split(","), h = Number(i[0]), i = Number(i[1]), isNaN(i) && (i = 0), l = a.to.split(","), s = Number(l[0]), l = Number(l[1]), s = 0 == s - h ? s : Math.round(t[a.effect](0, r, h, s - h, o)), a = 0 == l - i ? l : Math.round(t[a.effect](0, r, i, l - i, o)), h = "transform", isNaN(s) || isNaN(a)) continue;
                                    a = "translate(" + s + "," + a + ")"
                                } else l = Number(a.from), i = Number(a.to), a = t[a.effect](0, r, l, s = i - l, o), isNaN(a) && (a = i), 0 === s && this.animations.splice(e, 1);
                                this.setAttr(u, h, a)
                            } else "translate" == h ? (l = a.to.split(","), s = Number(l[0]), l = Number(l[1]), u.translate(s, l)) : (i = Number(a.to), this.setAttr(u, h, i)), u.animationFinished = !0, this.animations.splice(e, 1)
                        }
                    },
                    getBBox: function(t) {
                        if (t = t.node) try {
                            return t.getBBox()
                        } catch (t) {}
                        return {
                            width: 0,
                            height: 0,
                            x: 0,
                            y: 0
                        }
                    },
                    path: function(e, n) {
                        e.node.setAttributeNS(t.SVG_XLINK, "xlink:href", n)
                    },
                    clipRect: function(e, n, i, l, s) {
                        var a = e.node,
                            o = e.clipPath;
                        o && this.D.remove(o);
                        var r = a.parentNode;
                        r && (a = document.createElementNS(t.SVG_NS, "clipPath"), o = t.getUniqueId(), a.setAttribute("id", o), this.D.rect(n, i, l, s, 0, 0, a), r.appendChild(a), n = "#", t.baseHref && !t.isIE && (n = this.removeTarget(window.location.href) + n), this.setAttr(e, "clip-path", "url(" + n + o + ")"), this.clipPathC++, e.clipPath = a)
                    },
                    text: function(e, n, i) {
                        var l = new t.AmDObject("text", this.D);
                        e = String(e).split("\n");
                        var s, a = t.removePx(n["font-size"]);
                        for (s = 0; s < e.length; s++) {
                            var o = this.create(null, "tspan");
                            o.appendChild(document.createTextNode(e[s])), o.setAttribute("y", (a + 2) * s + Math.round(a / 2)), o.setAttribute("x", 0), l.node.appendChild(o)
                        }
                        return l.node.setAttribute("y", Math.round(a / 2)), this.attr(l, n), this.D.addToContainer(l.node, i), l
                    },
                    setText: function(t, e) {
                        var n = t.node;
                        n && (n.removeChild(n.firstChild), n.appendChild(document.createTextNode(e)))
                    },
                    move: function(t, e, n, i) {
                        isNaN(e) && (e = 0), isNaN(n) && (n = 0), e = "translate(" + e + "," + n + ")", i && (e = e + " scale(" + i + ")"), this.setAttr(t, "transform", e)
                    },
                    rotate: function(t, e) {
                        var n = t.node.getAttribute("transform"),
                            i = "rotate(" + e + ")";
                        n && (i = n + " " + i), this.setAttr(t, "transform", i)
                    },
                    set: function(e) {
                        var n, i = new t.AmDObject("g", this.D);
                        if (this.D.container.appendChild(i.node), e)
                            for (n = 0; n < e.length; n++) i.push(e[n]);
                        return i
                    },
                    addListener: function(t, e, n) {
                        t.node["on" + e] = n
                    },
                    gradient: function(e, n, i, l) {
                        var s = e.node,
                            a = e.grad;
                        if (a && this.D.remove(a), n = document.createElementNS(t.SVG_NS, n), a = t.getUniqueId(), n.setAttribute("id", a), !isNaN(l)) {
                            var o = 0,
                                r = 0,
                                u = 0,
                                h = 0;
                            90 == l ? u = 100 : 270 == l ? h = 100 : 180 == l ? o = 100 : 0 === l && (r = 100), n.setAttribute("x1", o + "%"), n.setAttribute("x2", r + "%"), n.setAttribute("y1", u + "%"), n.setAttribute("y2", h + "%")
                        }
                        for (l = 0; l < i.length; l++) o = document.createElementNS(t.SVG_NS, "stop"), r = 100 * l / (i.length - 1), 0 === l && (r = 0), o.setAttribute("offset", r + "%"), o.setAttribute("stop-color", i[l]), n.appendChild(o);
                        s.parentNode.appendChild(n), i = "#", t.baseHref && !t.isIE && (i = this.removeTarget(window.location.href) + i), s.setAttribute("fill", "url(" + i + a + ")"), e.grad = n
                    },
                    removeTarget: function(t) {
                        return t.split("#")[0]
                    },
                    pattern: function(e, n, i, l) {
                        var s = e.node;
                        isNaN(i) && (i = 1), (a = e.patternNode) && this.D.remove(a);
                        var a = document.createElementNS(t.SVG_NS, "pattern"),
                            o = t.getUniqueId(),
                            r = n;
                        n.url && (r = n.url), t.isAbsolute(r) || -1 != r.indexOf("data:image") || (r = l + r), l = Number(n.width), isNaN(l) && (l = 4);
                        var u = Number(n.height);
                        isNaN(u) && (u = 4), l /= i, u /= i, i = n.x, isNaN(i) && (i = 0);
                        var h = -Math.random() * Number(n.randomX);
                        isNaN(h) || (i = h), h = n.y, isNaN(h) && (h = 0);
                        var d = -Math.random() * Number(n.randomY);
                        isNaN(d) || (h = d), a.setAttribute("id", o), a.setAttribute("width", l), a.setAttribute("height", u), a.setAttribute("patternUnits", "userSpaceOnUse"), a.setAttribute("xlink:href", r), n.color && ((d = document.createElementNS(t.SVG_NS, "rect")).setAttributeNS(null, "height", l), d.setAttributeNS(null, "width", u), d.setAttributeNS(null, "fill", n.color), a.appendChild(d)), this.D.image(r, 0, 0, l, u, a).translate(i, h), r = "#", t.baseHref && !t.isIE && (r = this.removeTarget(window.location.href) + r), s.setAttribute("fill", "url(" + r + o + ")"), e.patternNode = a, s.parentNode.appendChild(a)
                    },
                    remove: function(t) {
                        t.clipPath && this.D.remove(t.clipPath), t.grad && this.D.remove(t.grad), t.patternNode && this.D.remove(t.patternNode), this.D.remove(t.node)
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.AmLegend = t.Class({
                    construct: function(e) {
                        this.enabled = !0, this.cname = "AmLegend", this.createEvents("rollOverMarker", "rollOverItem", "rollOutMarker", "rollOutItem", "showItem", "hideItem", "clickMarker", "clickLabel"), this.position = "bottom", this.borderColor = this.color = "#000000", this.borderAlpha = 0, this.markerLabelGap = 5, this.verticalGap = 10, this.align = "left", this.horizontalGap = 0, this.spacing = 10, this.markerDisabledColor = "#AAB3B3", this.markerType = "square", this.markerSize = 16, this.markerBorderThickness = this.markerBorderAlpha = 1, this.marginBottom = this.marginTop = 0, this.marginLeft = this.marginRight = 20, this.autoMargins = !0, this.valueWidth = 50, this.switchable = !0, this.switchType = "x", this.switchColor = "#FFFFFF", this.rollOverColor = "#CC0000", this.reversedOrder = !1, this.labelText = "[[title]]", this.valueText = "[[value]]", this.accessibleLabel = "[[title]]", this.useMarkerColorForLabels = !1, this.rollOverGraphAlpha = 1, this.textClickEnabled = !1, this.equalWidths = !0, this.backgroundColor = "#FFFFFF", this.backgroundAlpha = 0, this.useGraphSettings = !1, this.showEntries = !0, this.labelDx = 0, t.applyTheme(this, e, this.cname)
                    },
                    setData: function(t) {
                        this.legendData = t, this.invalidateSize()
                    },
                    invalidateSize: function() {
                        this.destroy(), this.entries = [], this.valueLabels = [], this.enabled && (t.ifArray(this.legendData) || t.ifArray(this.data)) && this.drawLegend()
                    },
                    drawLegend: function() {
                        var e = this.chart,
                            n = this.position,
                            i = this.width,
                            l = e.divRealWidth,
                            s = e.divRealHeight,
                            a = this.div,
                            o = this.legendData;
                        if (this.data && (o = this.combineLegend ? this.legendData.concat(this.data) : this.data), isNaN(this.fontSize) && (this.fontSize = e.fontSize), this.maxColumnsReal = this.maxColumns, "right" == n || "left" == n) this.maxColumnsReal = 1, this.autoMargins && (this.marginLeft = this.marginRight = 10);
                        else if (this.autoMargins) {
                            this.marginRight = e.marginRight, this.marginLeft = e.marginLeft;
                            var r = e.autoMarginOffset;
                            "bottom" == n ? (this.marginBottom = r, this.marginTop = 0) : (this.marginTop = r, this.marginBottom = 0)
                        }
                        if (i = void 0 !== i ? t.toCoordinate(i, l) : "right" != n && "left" != n ? e.realWidth : 0 < this.ieW ? this.ieW : e.realWidth, "outside" == n ? (i = a.offsetWidth, s = a.offsetHeight, a.clientHeight && (i = a.clientWidth, s = a.clientHeight)) : (isNaN(i) || (a.style.width = i + "px"), a.className = "amChartsLegend " + e.classNamePrefix + "-legend-div"), this.divWidth = i, (n = this.container) ? (n.container.innerHTML = "", a.appendChild(n.container), n.width = i, n.height = s, n.setSize(i, s), n.addDefs(e)) : n = new t.AmDraw(a, i, s, e), this.container = n, this.lx = 0, this.ly = 8, (s = this.markerSize) > this.fontSize && (this.ly = s / 2 - 1), 0 < s && (this.lx += s + this.markerLabelGap), this.titleWidth = 0, (s = this.title) && (s = t.text(this.container, s, this.color, e.fontFamily, this.fontSize, "start", !0), t.setCN(e, s, "legend-title"), s.translate(this.marginLeft, this.marginTop + this.verticalGap + this.ly + 1), e = s.getBBox(), this.titleWidth = e.width + 15, this.titleHeight = e.height + 6), this.index = this.maxLabelWidth = 0, this.showEntries) {
                            for (e = 0; e < o.length; e++) this.createEntry(o[e]);
                            for (e = this.index = 0; e < o.length; e++) this.createValue(o[e])
                        }
                        this.arrangeEntries(), this.updateValues()
                    },
                    arrangeEntries: function() {
                        var e = this.position,
                            n = this.marginLeft + this.titleWidth,
                            i = this.marginRight,
                            l = this.marginTop,
                            s = this.marginBottom,
                            a = this.horizontalGap,
                            o = this.div,
                            r = this.divWidth,
                            u = this.maxColumnsReal,
                            h = this.verticalGap,
                            d = this.spacing,
                            c = r - i - n,
                            p = 0,
                            g = 0,
                            f = this.container;
                        this.set && this.set.remove();
                        var m = f.set();
                        this.set = m;
                        var v = f.set();
                        m.push(v);
                        var b, y, A = this.entries;
                        for (y = 0; y < A.length; y++)(x = (b = A[y].getBBox()).width) > p && (p = x), (b = b.height) > g && (g = b);
                        var x = g = 0,
                            C = a,
                            w = 0,
                            k = 0;
                        for (y = 0; y < A.length; y++) {
                            var M, S = A[y];
                            this.reversedOrder && (S = A[A.length - y - 1]), b = S.getBBox(), this.equalWidths ? M = x * (p + d + this.markerLabelGap) : (M = C, C = C + b.width + a + d), M + b.width > c && 0 < y && 0 !== x && (g++, C = (M = x = 0) + b.width + a + d, w = w + k + h, k = 0), b.height > k && (k = b.height), S.translate(M, w), x++, !isNaN(u) && x >= u && (x = 0, g++, w = w + k + h, C = a, k = 0), v.push(S)
                        }
                        u = (b = v.getBBox()).height + 2 * h - 1, "left" == e || "right" == e ? (o.style.width = (r = (d = b.width + 2 * a) + n + i) + "px", this.ieW = r) : d = r - n - i - 1, i = t.polygon(this.container, [0, d, d, 0], [0, 0, u, u], this.backgroundColor, this.backgroundAlpha, 1, this.borderColor, this.borderAlpha), t.setCN(this.chart, i, "legend-bg"), m.push(i), m.translate(n, l), i.toBack(), n = a, "top" != e && "bottom" != e && "absolute" != e && "outside" != e || ("center" == this.align ? n = a + (d - b.width) / 2 : "right" == this.align && (n = a + d - b.width)), v.translate(n, h + 1), this.titleHeight > u && (u = this.titleHeight), 0 > (l = u + l + s + 1) && (l = 0), "absolute" != e && "outside" != e && l > this.chart.divRealHeight && (o.style.top = "0px"), o.style.height = Math.round(l) + "px", f.setSize(this.divWidth, l)
                    },
                    createEntry: function(e) {
                        if (!1 !== e.visibleInLegend && !e.hideFromLegend) {
                            var n = this,
                                i = n.chart,
                                l = n.useGraphSettings,
                                s = e.markerType;
                            s && (l = !1), e.legendEntryWidth = n.markerSize, s || (s = n.markerType);
                            var a, o = e.color,
                                r = e.alpha;
                            e.legendKeyColor && (o = e.legendKeyColor()), e.legendKeyAlpha && (r = e.legendKeyAlpha()), !0 === e.hidden && (a = o = n.markerDisabledColor);
                            var u, h = e.pattern,
                                d = e.customMarker;
                            d || (d = n.customMarker);
                            var c, p, g = n.container,
                                f = n.markerSize,
                                m = 0,
                                v = 0,
                                b = f / 2;
                            if (l) l = e.type, n.switchType = void 0, "line" == l || "step" == l || "smoothedLine" == l || "ohlc" == l ? (u = g.set(), e.hidden || (o = e.lineColorR, a = e.bulletBorderColorR), m = t.line(g, [0, 2 * f], [f / 2, f / 2], o, e.lineAlpha, e.lineThickness, e.dashLength), t.setCN(i, m, "graph-stroke"), u.push(m), e.bullet && (e.hidden || (o = e.bulletColorR), m = t.bullet(g, e.bullet, e.bulletSize, o, e.bulletAlpha, e.bulletBorderThickness, a, e.bulletBorderAlpha)) && (t.setCN(i, m, "graph-bullet"), m.translate(f + 1, f / 2), u.push(m)), b = 0, m = f, v = f / 3) : (e.getGradRotation && 0 === (u = e.getGradRotation()) && (u = 180), m = e.fillColorsR, !0 === e.hidden && (m = o), (u = n.createMarker("rectangle", m, e.fillAlphas, e.lineThickness, o, e.lineAlpha, u, h, e.dashLength)) && u.translate(b = f, f / 2), m = f), t.setCN(i, u, "graph-" + l), t.setCN(i, u, "graph-" + e.id);
                            else if (d) u = g.image(d, 0, 0, f, f);
                            else {
                                var y;
                                isNaN(n.gradientRotation) || (y = 180 + n.gradientRotation), (u = n.createMarker(s, o, r, void 0, void 0, void 0, y, h)) && u.translate(f / 2, f / 2)
                            }
                            t.setCN(i, u, "legend-marker"), n.addListeners(u, e), g = g.set([u]), n.switchable && e.switchable && g.setAttr("cursor", "pointer"), void 0 !== e.id && t.setCN(i, g, "legend-item-" + e.id), t.setCN(i, g, e.className, !0), (a = n.switchType) && "none" != a && 0 < f && ("x" == a ? (c = n.createX()).translate(f / 2, f / 2) : c = n.createV(), c.dItem = e, !0 !== e.hidden ? "x" == a ? c.hide() : c.show() : "x" != a && c.hide(), n.switchable || c.hide(), n.addListeners(c, e), e.legendSwitch = c, g.push(c), t.setCN(i, c, "legend-switch")), a = n.color, e.showBalloon && n.textClickEnabled && void 0 !== n.selectedColor && (a = n.selectedColor), n.useMarkerColorForLabels && !h && (a = o), !0 === e.hidden && (a = n.markerDisabledColor), o = t.massReplace(n.labelText, {
                                "[[title]]": e.title
                            }), void 0 !== n.tabIndex && (g.setAttr("tabindex", n.tabIndex), g.setAttr("role", "menuitem"), g.keyup(function(t) {
                                13 == t.keyCode && n.clickMarker(e, t)
                            })), i.accessible && n.accessibleLabel && (h = t.massReplace(n.accessibleLabel, {
                                "[[title]]": e.title
                            }), i.makeAccessible(g, h)), h = n.fontSize, u && (f <= h && (u.translate(b, f = f / 2 + n.ly - h / 2 + (h + 2 - f) / 2 - v), c && c.translate(c.x, f)), e.legendEntryWidth = u.getBBox().width), o && (o = t.fixBrakes(o), e.legendTextReal = o, p = n.labelWidth, p = isNaN(p) ? t.text(n.container, o, a, i.fontFamily, h, "start") : t.wrappedText(n.container, o, a, i.fontFamily, h, "start", !1, p, 0), t.setCN(i, p, "legend-label"), p.translate(n.lx + m, n.ly), g.push(p), n.labelDx = m, i = p.getBBox().width, n.maxLabelWidth < i && (n.maxLabelWidth = i)), n.entries[n.index] = g, e.legendEntry = n.entries[n.index], e.legendMarker = u, e.legendLabel = p, n.index++
                        }
                    },
                    addListeners: function(t, e) {
                        var n = this;
                        t && t.mouseover(function(t) {
                            n.rollOverMarker(e, t)
                        }).mouseout(function(t) {
                            n.rollOutMarker(e, t)
                        }).click(function(t) {
                            n.clickMarker(e, t)
                        })
                    },
                    rollOverMarker: function(t, e) {
                        this.switchable && this.dispatch("rollOverMarker", t, e), this.dispatch("rollOverItem", t, e)
                    },
                    rollOutMarker: function(t, e) {
                        this.switchable && this.dispatch("rollOutMarker", t, e), this.dispatch("rollOutItem", t, e)
                    },
                    clickMarker: function(t, e) {
                        this.switchable && this.dispatch(!0 === t.hidden ? "showItem" : "hideItem", t, e), this.dispatch("clickMarker", t, e)
                    },
                    rollOverLabel: function(t, e) {
                        t.hidden || this.textClickEnabled && t.legendLabel && t.legendLabel.attr({
                            fill: this.rollOverColor
                        }), this.dispatch("rollOverItem", t, e)
                    },
                    rollOutLabel: function(t, e) {
                        if (!t.hidden && this.textClickEnabled && t.legendLabel) {
                            var n = this.color;
                            void 0 !== this.selectedColor && t.showBalloon && (n = this.selectedColor), this.useMarkerColorForLabels && void 0 === (n = t.lineColor) && (n = t.color), t.legendLabel.attr({
                                fill: n
                            })
                        }
                        this.dispatch("rollOutItem", t, e)
                    },
                    clickLabel: function(t, e) {
                        this.textClickEnabled ? t.hidden || this.dispatch("clickLabel", t, e) : this.switchable && this.dispatch(!0 === t.hidden ? "showItem" : "hideItem", t, e)
                    },
                    dispatch: function(t, e, n) {
                        t = {
                            type: t,
                            dataItem: e,
                            target: this,
                            event: n,
                            chart: this.chart
                        }, this.chart && this.chart.handleLegendEvent(t), this.fire(t)
                    },
                    createValue: function(e) {
                        var n = this,
                            i = n.fontSize,
                            l = n.chart;
                        if (!1 !== e.visibleInLegend && !e.hideFromLegend) {
                            var s = n.maxLabelWidth,
                                a = 0;
                            n.forceWidth && (s = n.labelWidth), n.equalWidths || (n.valueAlign = "left"), a = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }, e.legendLabel && (a = e.legendLabel.getBBox()), "left" == n.valueAlign && (s = a.width), a = a.height;
                            var o = s,
                                r = n.markerSize;
                            if (r < i + 7 && (r = i + 7, t.VML && (r += 3)), n.valueText && 0 < n.valueWidth) {
                                var u = n.color;
                                n.useMarkerColorForValues && (u = e.color, e.legendKeyColor && (u = e.legendKeyColor())), !0 === e.hidden && (u = n.markerDisabledColor), s = s + n.lx + n.labelDx + n.markerLabelGap + n.valueWidth;
                                var h = "end";
                                "left" == n.valueAlign && (s -= n.valueWidth, h = "start"), i = t.text(n.container, n.valueText, u, n.chart.fontFamily, i, h), t.setCN(l, i, "legend-value"), i.translate(s, n.ly), n.entries[n.index].push(i), o += n.valueWidth + 2 * n.markerLabelGap, i.dItem = e, n.valueLabels.push(i), r < a + 5 && (r = a + 5)
                            }
                            n.index++, (l = n.container.rect(e.legendEntryWidth, 0, o, r, 0, 0).attr({
                                stroke: "none",
                                fill: "#fff",
                                "fill-opacity": .005
                            })).dItem = e, n.entries[n.index - 1].push(l), l.mouseover(function(t) {
                                n.rollOverLabel(e, t)
                            }).mouseout(function(t) {
                                n.rollOutLabel(e, t)
                            }).click(function(t) {
                                n.clickLabel(e, t)
                            })
                        }
                    },
                    createV: function() {
                        var e = this.markerSize;
                        return t.polygon(this.container, [e / 5, e / 2, e - e / 5, e / 2], [e / 3, e - e / 5, e / 5, e / 1.7], this.switchColor)
                    },
                    createX: function() {
                        var e = {
                                stroke: this.switchColor,
                                "stroke-width": 3
                            },
                            n = this.container,
                            i = t.line(n, [-(l = (this.markerSize - 4) / 2), l], [-l, l]).attr(e),
                            l = t.line(n, [-l, l], [l, -l]).attr(e);
                        return this.container.set([i, l])
                    },
                    createMarker: function(e, n, i, l, s, a, o, r, u) {
                        var h = this.markerSize,
                            d = this.container;
                        return s || (s = this.markerBorderColor), s || (s = n), isNaN(l) && (l = this.markerBorderThickness), isNaN(a) && (a = this.markerBorderAlpha), t.bullet(d, e, h, n, i, l, s, a, h, o, r, this.chart.path, u)
                    },
                    validateNow: function() {
                        this.invalidateSize()
                    },
                    updateValues: function() {
                        var e, n = this.valueLabels,
                            i = this.chart,
                            l = this.data;
                        if (n)
                            for (e = 0; e < n.length; e++) {
                                var s = n[e],
                                    a = s.dItem;
                                a.periodDataItem = void 0, a.periodPercentDataItem = void 0;
                                var o = " ";
                                if (l) s.text(a.value ? a.value : "");
                                else {
                                    var r = null;
                                    if (void 0 !== a.type) {
                                        r = a.currentDataItem;
                                        var u = this.periodValueText;
                                        a.legendPeriodValueText && (u = a.legendPeriodValueText), a.legendPeriodValueTextR && (u = a.legendPeriodValueTextR), r ? (o = this.valueText, a.legendValueText && (o = a.legendValueText), a.legendValueTextR && (o = a.legendValueTextR), o = i.formatString(o, r)) : u && i.formatPeriodString && (u = t.massReplace(u, {
                                            "[[title]]": a.title
                                        }), o = i.formatPeriodString(u, a))
                                    } else o = i.formatString(this.valueText, a);
                                    u = a, r && (u = r);
                                    var h, d = this.valueFunction;
                                    d && (o = d(u, o, i.periodDataItem)), this.useMarkerColorForLabels && !r && a.lastDataItem && (r = a.lastDataItem), r ? h = i.getBalloonColor(a, r) : a.legendKeyColor && (h = a.legendKeyColor()), a.legendColorFunction && (h = a.legendColorFunction(u, o, a.periodDataItem, a.periodPercentDataItem)), s.text(o), !a.pattern && (this.useMarkerColorForValues && s.setAttr("fill", h), this.useMarkerColorForLabels) && ((s = a.legendMarker) && (s.setAttr("fill", h), s.setAttr("stroke", h)), (s = a.legendLabel) && s.setAttr("fill", a.hidden ? this.markerDisabledColor : h))
                                }
                            }
                    },
                    renderFix: function() {
                        if (!t.VML && this.enabled) {
                            var e = this.container;
                            e && e.renderFix()
                        }
                    },
                    destroy: function() {
                        this.div.innerHTML = "", t.remove(this.set)
                    }
                })
            }(),
            function() {
                var t = window.AmCharts;
                t.formatMilliseconds = function(t, e) {
                    if (-1 != t.indexOf("fff")) {
                        var n = e.getMilliseconds(),
                            i = String(n);
                        10 > n && (i = "00" + n), 10 <= n && 100 > n && (i = "0" + n), t = t.replace(/fff/g, i)
                    }
                    return t
                }, t.extractPeriod = function(e) {
                    var n = t.stripNumbers(e),
                        i = 1;
                    return n != e && (i = Number(e.slice(0, e.indexOf(n)))), {
                        period: n,
                        count: i
                    }
                }, t.getDate = function(e, n, i) {
                    return e instanceof Date ? t.newDate(e, i) : n && isNaN(e) ? t.stringToDate(e, n) : new Date(e)
                }, t.daysInMonth = function(t) {
                    return new Date(t.getYear(), t.getMonth() + 1, 0).getDate()
                }, t.newDate = function(t, e) {
                    return e && -1 == e.indexOf("fff") ? new Date(t) : new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
                }, t.resetDateToMin = function(e, n, i, l) {
                    var s, a, o, r, u, h, d;
                    switch (void 0 === l && (l = 1), t.useUTC ? (s = e.getUTCFullYear(), a = e.getUTCMonth(), o = e.getUTCDate(), r = e.getUTCHours(), u = e.getUTCMinutes(), h = e.getUTCSeconds(), d = e.getUTCMilliseconds(), e = e.getUTCDay()) : (s = e.getFullYear(), a = e.getMonth(), o = e.getDate(), r = e.getHours(), u = e.getMinutes(), h = e.getSeconds(), d = e.getMilliseconds(), e = e.getDay()), n) {
                        case "YYYY":
                            s = Math.floor(s / i) * i, a = 0, o = 1, d = h = u = r = 0;
                            break;
                        case "MM":
                            a = Math.floor(a / i) * i, o = 1, d = h = u = r = 0;
                            break;
                        case "WW":
                            o = e >= l ? o - e + l : o - (7 + e) + l, d = h = u = r = 0;
                            break;
                        case "DD":
                            d = h = u = r = 0;
                            break;
                        case "hh":
                            r = Math.floor(r / i) * i, d = h = u = 0;
                            break;
                        case "mm":
                            u = Math.floor(u / i) * i, d = h = 0;
                            break;
                        case "ss":
                            h = Math.floor(h / i) * i, d = 0;
                            break;
                        case "fff":
                            d = Math.floor(d / i) * i
                    }
                    return t.useUTC ? ((e = new Date).setUTCFullYear(s, a, o), e.setUTCHours(r, u, h, d)) : e = new Date(s, a, o, r, u, h, d), e
                }, t.getPeriodDuration = function(t, e) {
                    var n;
                    switch (void 0 === e && (e = 1), t) {
                        case "YYYY":
                            n = 316224e5;
                            break;
                        case "MM":
                            n = 26784e5;
                            break;
                        case "WW":
                            n = 6048e5;
                            break;
                        case "DD":
                            n = 864e5;
                            break;
                        case "hh":
                            n = 36e5;
                            break;
                        case "mm":
                            n = 6e4;
                            break;
                        case "ss":
                            n = 1e3;
                            break;
                        case "fff":
                            n = 1
                    }
                    return n * e
                }, t.intervals = {
                    s: {
                        nextInterval: "ss",
                        contains: 1e3
                    },
                    ss: {
                        nextInterval: "mm",
                        contains: 60,
                        count: 0
                    },
                    mm: {
                        nextInterval: "hh",
                        contains: 60,
                        count: 1
                    },
                    hh: {
                        nextInterval: "DD",
                        contains: 24,
                        count: 2
                    },
                    DD: {
                        nextInterval: "",
                        contains: 1 / 0,
                        count: 3
                    }
                }, t.getMaxInterval = function(e, n) {
                    var i = t.intervals;
                    return e >= i[n].contains ? (e = Math.round(e / i[n].contains), t.getMaxInterval(e, n = i[n].nextInterval)) : "ss" == n ? i[n].nextInterval : n
                }, t.dayNames = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), t.shortDayNames = "Sun Mon Tue Wed Thu Fri Sat".split(" "), t.monthNames = "January February March April May June July August September October November December".split(" "), t.shortMonthNames = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), t.getWeekNumber = function(t) {
                    (t = new Date(t)).setHours(0, 0, 0), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                    var e = new Date(t.getFullYear(), 0, 1);
                    return Math.ceil(((t - e) / 864e5 + 1) / 7)
                }, t.stringToDate = function(e, n) {
                    var i = {},
                        l = [{
                            pattern: "YYYY",
                            period: "year"
                        }, {
                            pattern: "YY",
                            period: "year"
                        }, {
                            pattern: "MM",
                            period: "month"
                        }, {
                            pattern: "M",
                            period: "month"
                        }, {
                            pattern: "DD",
                            period: "date"
                        }, {
                            pattern: "D",
                            period: "date"
                        }, {
                            pattern: "JJ",
                            period: "hours"
                        }, {
                            pattern: "J",
                            period: "hours"
                        }, {
                            pattern: "HH",
                            period: "hours"
                        }, {
                            pattern: "H",
                            period: "hours"
                        }, {
                            pattern: "KK",
                            period: "hours"
                        }, {
                            pattern: "K",
                            period: "hours"
                        }, {
                            pattern: "LL",
                            period: "hours"
                        }, {
                            pattern: "L",
                            period: "hours"
                        }, {
                            pattern: "NN",
                            period: "minutes"
                        }, {
                            pattern: "N",
                            period: "minutes"
                        }, {
                            pattern: "SS",
                            period: "seconds"
                        }, {
                            pattern: "S",
                            period: "seconds"
                        }, {
                            pattern: "QQQ",
                            period: "milliseconds"
                        }, {
                            pattern: "QQ",
                            period: "milliseconds"
                        }, {
                            pattern: "Q",
                            period: "milliseconds"
                        }],
                        s = !0; - 1 != (u = n.indexOf("AA")) && (e.substr(u, 2), "pm" == e.toLowerCase && (s = !1));
                    var a, o, r, u = n;
                    for (r = 0; r < l.length; r++) i[o = l[r].period] = 0, "date" == o && (i[o] = 1);
                    for (r = 0; r < l.length; r++)
                        if (o = l[r].period, -1 != n.indexOf(a = l[r].pattern)) {
                            var h = t.getFromDateString(a, e, u);
                            n = n.replace(a, ""), "KK" != a && "K" != a && "LL" != a && "L" != a || s || (h += 12), i[o] = h
                        } return t.useUTC ? ((l = new Date).setUTCFullYear(i.year, i.month, i.date), l.setUTCHours(i.hours, i.minutes, i.seconds, i.milliseconds)) : l = new Date(i.year, i.month, i.date, i.hours, i.minutes, i.seconds, i.milliseconds), l
                }, t.getFromDateString = function(t, e, n) {
                    if (void 0 !== e) return n = n.indexOf(t), "0" == (e = (e = String(e)).substr(n, t.length)).charAt(0) && (e = e.substr(1, e.length - 1)), e = Number(e), isNaN(e) && (e = 0), -1 != t.indexOf("M") && e--, e
                }, t.formatDate = function(e, n, i) {
                    i || (i = t);
                    var l, s, a, o, r, u, h, d, c = t.getWeekNumber(e);
                    t.useUTC ? (l = e.getUTCFullYear(), s = e.getUTCMonth(), a = e.getUTCDate(), o = e.getUTCDay(), r = e.getUTCHours(), u = e.getUTCMinutes(), h = e.getUTCSeconds(), d = e.getUTCMilliseconds()) : (l = e.getFullYear(), s = e.getMonth(), a = e.getDate(), o = e.getDay(), r = e.getHours(), u = e.getMinutes(), h = e.getSeconds(), d = e.getMilliseconds());
                    var p = String(l).substr(2, 2),
                        g = "0" + o;
                    n = n.replace(/W/g, c), 24 == (c = r) && (c = 0);
                    var f = c;
                    10 > f && (f = "0" + f), n = (n = n.replace(/JJ/g, f)).replace(/J/g, c), 0 === (f = r) && (f = 24, -1 != n.indexOf("H") && 0 == --a && ((l = new Date(e)).setDate(l.getDate() - 1), s = l.getMonth(), a = l.getDate(), l = l.getFullYear())), e = s + 1, 9 > s && (e = "0" + e), c = a, 10 > a && (c = "0" + a);
                    var m = f;
                    return 10 > m && (m = "0" + m), n = (n = n.replace(/HH/g, m)).replace(/H/g, f), 11 < (f = r) && (f -= 12), 10 > (m = f) && (m = "0" + m), n = (n = n.replace(/KK/g, m)).replace(/K/g, f), 0 === (f = r) && (f = 12), 12 < f && (f -= 12), 10 > (m = f) && (m = "0" + m), n = (n = n.replace(/LL/g, m)).replace(/L/g, f), 10 > (f = u) && (f = "0" + f), n = (n = n.replace(/NN/g, f)).replace(/N/g, u), 10 > (u = h) && (u = "0" + u), n = (n = n.replace(/SS/g, u)).replace(/S/g, h), 10 > (h = d) ? h = "00" + h : 100 > h && (h = "0" + h), 10 > (u = d) && (u = "00" + u), (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = n.replace(/A/g, "@A@")).replace(/QQQ/g, h)).replace(/QQ/g, u)).replace(/Q/g, d)).replace(/YYYY/g, "@IIII@")).replace(/YY/g, "@II@")).replace(/MMMM/g, "@XXXX@")).replace(/MMM/g, "@XXX@")).replace(/MM/g, "@XX@")).replace(/M/g, "@X@")).replace(/DD/g, "@RR@")).replace(/D/g, "@R@")).replace(/EEEE/g, "@PPPP@")).replace(/EEE/g, "@PPP@")).replace(/EE/g, "@PP@")).replace(/E/g, "@P@")).replace(/@IIII@/g, l)).replace(/@II@/g, p)).replace(/@XXXX@/g, i.monthNames[s])).replace(/@XXX@/g, i.shortMonthNames[s])).replace(/@XX@/g, e)).replace(/@X@/g, s + 1)).replace(/@RR@/g, c)).replace(/@R@/g, a)).replace(/@PPPP@/g, i.dayNames[o])).replace(/@PPP@/g, i.shortDayNames[o])).replace(/@PP@/g, g)).replace(/@P@/g, o)).replace(/@A@/g, 12 > r ? i.amString : i.pmString)
                }, t.changeDate = function(e, n, i, l, s) {
                    if (t.useUTC) return t.changeUTCDate(e, n, i, l, s);
                    var a = -1;
                    switch (void 0 === l && (l = !0), void 0 === s && (s = !1), !0 === l && (a = 1), n) {
                        case "YYYY":
                            e.setFullYear(e.getFullYear() + i * a), l || s || e.setDate(e.getDate() + 1);
                            break;
                        case "MM":
                            n = e.getMonth();
                            var o = e.getFullYear();
                            e.setMonth(e.getMonth() + i * a), o == e.getFullYear() && e.getMonth() > n + i * a && e.setDate(e.getDate() - 1), l || s || e.setDate(e.getDate() + 1);
                            break;
                        case "DD":
                            e.setDate(e.getDate() + i * a);
                            break;
                        case "WW":
                            e.setDate(e.getDate() + i * a * 7);
                            break;
                        case "hh":
                            e.setHours(e.getHours() + i * a);
                            break;
                        case "mm":
                            e.setMinutes(e.getMinutes() + i * a);
                            break;
                        case "ss":
                            e.setSeconds(e.getSeconds() + i * a);
                            break;
                        case "fff":
                            e.setMilliseconds(e.getMilliseconds() + i * a)
                    }
                    return e
                }, t.changeUTCDate = function(t, e, n, i, l) {
                    var s = -1;
                    switch (void 0 === i && (i = !0), void 0 === l && (l = !1), !0 === i && (s = 1), e) {
                        case "YYYY":
                            t.setUTCFullYear(t.getUTCFullYear() + n * s), i || l || t.setUTCDate(t.getUTCDate() + 1);
                            break;
                        case "MM":
                            e = t.getUTCMonth(), t.setUTCMonth(t.getUTCMonth() + n * s), t.getUTCMonth() > e + n * s && t.setUTCDate(t.getUTCDate() - 1), i || l || t.setUTCDate(t.getUTCDate() + 1);
                            break;
                        case "DD":
                            t.setUTCDate(t.getUTCDate() + n * s);
                            break;
                        case "WW":
                            t.setUTCDate(t.getUTCDate() + n * s * 7);
                            break;
                        case "hh":
                            t.setUTCHours(t.getUTCHours() + n * s);
                            break;
                        case "mm":
                            t.setUTCMinutes(t.getUTCMinutes() + n * s);
                            break;
                        case "ss":
                            t.setUTCSeconds(t.getUTCSeconds() + n * s);
                            break;
                        case "fff":
                            t.setUTCMilliseconds(t.getUTCMilliseconds() + n * s)
                    }
                    return t
                }
            }()
    }
});