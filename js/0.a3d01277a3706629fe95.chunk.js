webpackJsonp([0], {
    "+GbP": function(n, l, e) {
        "use strict";
        var t = e("TToO").__decorate,
            i = e("WT6e"),
            u = e("xiuF"),
            o = e("LKU8"),
            r = function() {};
        r = t([i.NgModule({
            exports: [u.DragulaDirective],
            declarations: [u.DragulaDirective],
            providers: [o.DragulaService]
        })], r), l.DragulaModule = r
    },
    "/Zi0": function(n, l, e) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.SortablejsBinding = function() {
            function n(n) {
                this.target = n
            }
            return n.prototype.insert = function(n, l) {
                this.isFormArray ? this.target.insert(n, l) : this.target.splice(n, 0, l)
            }, n.prototype.get = function(n) {
                return this.isFormArray ? this.target.at(n) : this.target[n]
            }, n.prototype.remove = function(n) {
                var l;
                return this.isFormArray ? (l = this.target.at(n), this.target.removeAt(n)) : l = this.target.splice(n, 1)[0], l
            }, Object.defineProperty(n.prototype, "isFormArray", {
                get: function() {
                    return !!this.target.at && !!this.target.insert && !!this.target.reset
                },
                enumerable: !0,
                configurable: !0
            }), n
        }()
    },
    "1aVL": function(n, l, e) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var t = e("WT6e"),
            i = e("9TLe"),
            u = e("aBsJ"),
            o = e("6XPQ");
        l.SortablejsModule = function() {
            function n() {}
            return n.forRoot = function(l) {
                return {
                    ngModule: n,
                    providers: [o.SortablejsService, {
                        provide: i.GLOBALS,
                        useValue: l
                    }]
                }
            }, n.decorators = [{
                type: t.NgModule,
                args: [{
                    declarations: [u.SortablejsDirective],
                    exports: [u.SortablejsDirective],
                    providers: [o.SortablejsService]
                }]
            }], n
        }()
    },
    "23/L": function(n, l, e) {
        (function(l) {
            var e = l.CustomEvent;
            n.exports = function() {
                try {
                    var n = new e("cat", {
                        detail: {
                            foo: "bar"
                        }
                    });
                    return "cat" === n.type && "bar" === n.detail.foo
                } catch (n) {}
                return !1
            }() ? e : "function" == typeof document.createEvent ? function(n, l) {
                var e = document.createEvent("CustomEvent");
                return l ? e.initCustomEvent(n, l.bubbles, l.cancelable, l.detail) : e.initCustomEvent(n, !1, !1, void 0), e
            } : function(n, l) {
                var e = document.createEventObject();
                return e.type = n, l ? (e.bubbles = Boolean(l.bubbles), e.cancelable = Boolean(l.cancelable), e.detail = l.detail) : (e.bubbles = !1, e.cancelable = !1, e.detail = void 0), e
            }
        }).call(l, e("DuR2"))
    },
    "3AMW": function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = e("Xjw4"),
            u = this && this.__assign || Object.assign || function(n) {
                for (var l, e = 1, t = arguments.length; e < t; e++)
                    for (var i in l = arguments[e]) Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
                return n
            },
            o = function() {
                function n() {
                    this.hoverEvent = new t.EventEmitter, this.activeEvent = new t.EventEmitter, this.clickEvent = new t.EventEmitter, this.tabChangeEvent = new t.EventEmitter, this.hovered = !1, this.styles = {
                        padding: "16px 24px",
                        color: "#707070",
                        display: "block",
                        cursor: "pointer"
                    }, this.hoveredStyles = {
                        color: "#434343"
                    }, this.activeStyles = {
                        color: "#434343"
                    }
                }
                return n.prototype.ngOnInit = function() {}, n.prototype.ngOnChanges = function(n) {
                    n.activeTab && void 0 !== n.activeTab.previousValue && n.activeTab.currentValue === this.tabIndex && this.tabChangeEvent.emit({
                        index: this.activeTab,
                        elem: this.elTab
                    })
                }, n.prototype.ngAfterViewInit = function() {
                    var n = this,
                        l = setTimeout(function() {
                            n.tabIndex === n.activeTab && (n.activeEvent.emit({
                                index: n.activeTab,
                                elem: n.elTab,
                                init: !0
                            }), clearTimeout(l))
                        }, 100)
                }, n.prototype.onMouseEnter = function(n) {
                    this.hovered = !0, this.hoverEvent.emit({
                        index: this.tabIndex,
                        elem: this.elTab,
                        init: !1
                    })
                }, n.prototype.onMouseLeave = function(n) {
                    this.hovered = !1
                }, n.prototype.onClick = function(n) {
                    this.clickEvent.emit({
                        index: this.tabIndex,
                        elem: this.elTab,
                        init: !1
                    })
                }, n.prototype.getHoveredStyle = function() {
                    return u({}, this.styles, this.tabStyle, this.hoveredStyles, this.tabHoveredStyle)
                }, n.prototype.getActiveStyle = function() {
                    return u({}, this.styles, this.tabStyle, this.activeStyles, this.tabActiveStyle)
                }, n.prototype.getStyle = function() {
                    return u({}, this.styles, this.tabStyle)
                }, n
            }(),
            r = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".tab[_ngcontent-%COMP%]{white-space:nowrap}.tab.active[_ngcontent-%COMP%]{color:#434343}.gg-notice[_ngcontent-%COMP%]{margin-bottom:3px;width:40px;height:21px}"]
                ],
                data: {}
            });

        function s(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](2, 0, null, null, 0, "img", [
                ["class", "gg-notice"],
                ["src", "../../../../assets/icon/notice.png"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n     "]))], null, null)
        }

        function a(n) {
            return t["\u0275vid"](0, [t["\u0275qud"](402653184, 1, {
                elTab: 0
            }), (n()(), t["\u0275eld"](1, 0, [
                [1, 0],
                ["elTab", 1]
            ], null, 7, "div", [
                ["class", "tab"]
            ], null, [
                [null, "click"],
                [null, "mouseenter"],
                [null, "mouseleave"]
            ], function(n, l, e) {
                var t = !0,
                    i = n.component;
                return "click" === l && (t = !1 !== i.onClick(e) && t), "mouseenter" === l && (t = !1 !== i.onMouseEnter(e) && t), "mouseleave" === l && (t = !1 !== i.onMouseLeave(e) && t), t
            }, null, null)), t["\u0275did"](2, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](3, {
                active: 0
            }), t["\u0275did"](4, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275ted"](5, null, ["", "\n     "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, s)), t["\u0275did"](7, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 2, 0, "tab", n(l, 3, 0, e.activeTab === e.tabIndex)), n(l, 4, 0, e.activeTab === e.tabIndex ? e.getActiveStyle() : e.hovered ? e.getHoveredStyle() : e.getStyle()), n(l, 7, 0, "\u670d\u52a1\u6761\u6b3e" === e.tab)
            }, function(n, l) {
                n(l, 5, 0, l.component.tab)
            })
        }
        e("UPw7"), e.d(l, "a", function() {
            return c
        }), l.b = function(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 12, "div", [
                ["class", "tabs"]
            ], null, [
                [null, "mouseleave"]
            ], function(n, l, e) {
                var t = !0;
                return "mouseleave" === l && (t = !1 !== n.component.onMouseLeave() && t), t
            }, null, null)), t["\u0275did"](1, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275did"](2, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](4, 0, null, null, 1, "div", [
                ["class", "shadow"]
            ], null, null, null, null, null)), t["\u0275did"](5, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](7, 0, null, null, 1, "div", [
                ["class", "active-shadow"]
            ], null, null, null, null, null)), t["\u0275did"](8, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, d)), t["\u0275did"](11, 802816, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "tabs", e.getTabsClasses()), n(l, 2, 0, e.getTabsStyles()), n(l, 5, 0, e.shadowStyles(!1)), n(l, 8, 0, e.shadowStyles(!0)), n(l, 11, 0, e.tabs)
            }, null)
        };
        var c = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                [".tabs[_ngcontent-%COMP%]{position:relative;width:100%}.active-shadow[_ngcontent-%COMP%], .shadow[_ngcontent-%COMP%]{position:absolute;-webkit-box-shadow:none!important;box-shadow:none!important}.active-shadow[_ngcontent-%COMP%]{background-color:#f00000}.shadow[_ngcontent-%COMP%]{background-color:#ddd}"]
            ],
            data: {}
        });

        function d(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "app-tab", [], null, [
                [null, "hoverEvent"],
                [null, "activeEvent"],
                [null, "tabChangeEvent"],
                [null, "clickEvent"]
            ], function(n, l, e) {
                var t = !0,
                    i = n.component;
                return "hoverEvent" === l && (t = !1 !== i.onTabHover(e) && t), "activeEvent" === l && (t = !1 !== i.onTabActive(e) && t), "tabChangeEvent" === l && (t = !1 !== i.onTabChange(e) && t), "clickEvent" === l && (t = !1 !== i.onTabClick(e) && t), t
            }, a, r)), t["\u0275did"](1, 4833280, null, 0, o, [], {
                tab: [0, "tab"],
                tabIndex: [1, "tabIndex"],
                activeTab: [2, "activeTab"],
                tabStyle: [3, "tabStyle"],
                tabActiveStyle: [4, "tabActiveStyle"],
                tabHoveredStyle: [5, "tabHoveredStyle"]
            }, {
                hoverEvent: "hoverEvent",
                activeEvent: "activeEvent",
                clickEvent: "clickEvent",
                tabChangeEvent: "tabChangeEvent"
            })], function(n, l) {
                var e = l.component;
                n(l, 1, 0, l.context.$implicit, l.context.index, e.activeTab, e.tabStyle, e.tabActiveStyle, e.tabHoveredStyle)
            }, null)
        }
    },
    "6XPQ": function(n, l, e) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var t = e("WT6e");
        l.SortablejsService = function() {
            function n() {}
            return n.decorators = [{
                type: t.Injectable
            }], n
        }()
    },
    "6n2u": function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        });
        var t = e("T7ur"),
            i = (e("f9ET"), e("Ykpd")),
            u = function() {
                function n(n, l) {
                    var e = this;
                    this._ggService = n, this._windowService = l, this.subscriptions = [], this.postion = t.b, this.ggContentType = t.a, this.sticky = !1, this.screenType = i.a, this._windowService.size$.subscribe(function(n) {
                        e.screenSize = n
                    })
                }
                return n.prototype.ngOnInit = function() {
                    var n = this;
                    this.posterImage || (this._ggService.ggs && (this.gg = this._ggService.ggs.data.find(function(l) {
                        return l.Position === n.code
                    })), this._ggService.ggSource$.subscribe(function(l) {
                        l && (n.gg = l.find(function(l) {
                            return l.Position === n.code
                        }))
                    }), "LS1" !== this.code && "ALS1" !== this.code || this.subscriptions.push(this._ggService.ls1Source$.subscribe(function(l) {
                        l && (n.gg = l)
                    })), "LS2" !== this.code && "ALS2" !== this.code || this.subscriptions.push(this._ggService.ls2Source$.subscribe(function(l) {
                        l && (n.gg = l)
                    })))
                }, n.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(n) {
                        n.unsubscribe()
                    })
                }, n
            }()
    },
    "7qKt": function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = e("Avdc"),
            u = e("Xjw4"),
            o = e("SBrJ");
        e("6n2u"), e("f9ET"), e("Ykpd"), e.d(l, "a", function() {
            return r
        }), l.b = function(n) {
            return t["\u0275vid"](0, [t["\u0275pid"](0, o.b, []), t["\u0275qud"](671088640, 1, {
                blockElement: 0
            }), (n()(), t["\u0275and"](16777216, null, null, 1, null, c)), t["\u0275did"](3, 16384, null, 0, u.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 3, 0, !!e.gg && !!e.gg.RawImage || !!e.posterImage)
            }, null)
        };
        var r = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                ["[_nghost-%COMP%]{-webkit-transform:translateZ(0);transform:translateZ(0)}.video-page-left[_ngcontent-%COMP%], .video-page-left[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%], .video-page-right[_ngcontent-%COMP%], .video-page-right[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{height:100%}.video-page-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .video-page-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;position:absolute;top:0}.video-page-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:415px;right:0}.video-page-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:415px;left:0}.video-page-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.sticky[_ngcontent-%COMP%]{position:fixed!important;top:80px}.search-page-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;left:0}.search-page-left[_ngcontent-%COMP%]{height:100%}.search-page-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;right:0;top:0}.search-page-left.fixed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:fixed;left:-20px;top:60px}.search-page-right[_ngcontent-%COMP%]{height:100%}.search-page-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;left:0;top:0}.search-page-right.fixed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:fixed;right:-20px;left:auto;top:60px}.screen-small.video-page-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:294px;right:0}.screen-small.video-page-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:294px;left:0}.screen-medium.video-page-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:310px;right:0}.screen-medium.video-page-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:310px;left:0}.screen-large.video-page-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:358px;right:0}.screen-large.video-page-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:358px;left:0}"]
            ],
            data: {}
        });

        function s(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "inner position-relative"],
                ["lazy-load-images", ""]
            ], null, null, null, null, null)), t["\u0275did"](1, 212992, null, 0, i.LazyLoadImagesDirective, [t.ElementRef, t.Renderer2, t.NgZone, t.PLATFORM_ID], {
                intersectionObserverConfig: [0, "intersectionObserverConfig"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](3, 0, null, null, 0, "img", [
                ["src", "/assets/images/loading_238x340.jpg"]
            ], [
                [1, "data-src", 0]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], function(n, l) {
                n(l, 1, 0, "")
            }, function(n, l) {
                n(l, 3, 0, l.component.posterImage)
            })
        }

        function a(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 11, "div", [
                ["class", "inner position-relative h-100"],
                ["lazy-load-images", ""]
            ], null, null, null, null, null)), t["\u0275did"](1, 212992, null, 0, i.LazyLoadImagesDirective, [t.ElementRef, t.Renderer2, t.NgZone, t.PLATFORM_ID], {
                intersectionObserverConfig: [0, "intersectionObserverConfig"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](3, 0, null, null, 7, "a", [
                ["target", "_blank"]
            ], [
                [8, "href", 4]
            ], null, null, null, null)), t["\u0275ppd"](4, 1), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](6, 0, null, null, 3, "img", [], [
                [8, "src", 4]
            ], null, null, null, null)), t["\u0275did"](7, 278528, null, 0, u.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), t["\u0275pod"](8, {
                "w-100": 0
            }), t["\u0275ppd"](9, 1), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, ""), n(l, 7, 0, n(l, 8, 0, "DB" === e.code || "PB" === e.code || "ADB" === e.code || "APB" === e.code))
            }, function(n, l) {
                var e = l.component;
                n(l, 3, 0, t["\u0275unv"](l, 3, 0, n(l, 4, 0, t["\u0275nov"](l.parent.parent, 0), e.gg.LinkURL))), n(l, 6, 0, t["\u0275unv"](l, 6, 0, n(l, 9, 0, t["\u0275nov"](l.parent.parent, 0), e.gg.RawImage)))
            })
        }

        function c(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, [
                [1, 0],
                ["block", 1]
            ], null, 9, "div", [], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, u.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), t["\u0275pod"](2, {
                "search-page-left": 0,
                "search-page-right": 1,
                "video-page-left": 2,
                "video-page-right": 3,
                "screen-xxsmall": 4,
                "screen-xsmall": 5,
                "screen-small": 6,
                "screen-medium": 7,
                "screen-large": 8,
                fixed: 9
            }), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, s)), t["\u0275did"](5, 16384, null, 0, u.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, a)), t["\u0275did"](8, 16384, null, 0, u.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, n(l, 2, 0, e.ggPosition === e.postion.SearchPageLeft, e.ggPosition === e.postion.SearchPageRight, e.ggPosition === e.postion.VideoPageLeft || e.posterImage, e.ggPosition === e.postion.VideoPageRight, e.screenSize === e.screenType.XXSmall, e.screenSize === e.screenType.XSmall, e.screenSize === e.screenType.Small, e.screenSize === e.screenType.Medium, e.screenSize === e.screenType.Large, e.fixed)), n(l, 5, 0, e.posterImage), n(l, 8, 0, e.gg && !e.posterImage)
            }, null)
        }
    },
    "8yiT": function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        }), e("Z5i1");
        var t = e("+SoF"),
            i = (e("FI7P"), e("uwhN"), function() {
                function n(n, l, e, t) {
                    this._pollService = n, this._messageDialogService = l, this._dnDialogService = e, this._toastService = t, this.colors = ["red", "blue", "purple", "orange", "green", "cyan", "teal", "pink"], this.randomColors = this.colors, this.showButton = !0, this.selectedOptions = 0, this.barWidth = 400, this.loading = !1
                }
                return n.prototype.ngOnInit = function() {
                    this.pollId > 0 && this.getVote(), this.randomColors = this.shuffle(this.colors)
                }, n.prototype.getVote = function() {
                    var n = this;
                    this.loading = !0, this._pollService.get(this.pollId, this.user).subscribe(function(l) {
                        n.poll = l, n.poll.voteOptions = n.poll.voteOptions.map(function(n) {
                            return n.selected = !1, n
                        }), n.total = n.poll.voteOptions.reduce(function(n, l) {
                            return n.count || 0 === n.count ? n.count + l.count : n + l.count
                        }), n.loading = !1
                    })
                }, n.prototype.onSelectOption = function(n) {
                    return !0 === n.selected ? (this.poll.voteOptions.filter(function(l) {
                        return l.id === n.id
                    })[0].selected = !1, void(this.selectedOptions = this.poll.voteOptions.filter(function(n) {
                        return !0 === n.selected
                    }).length)) : 1 === this.poll.multipleOptions ? (this.poll.voteOptions.map(function(l) {
                        l.selected = l.id === n.id
                    }), void(this.selectedOptions = this.poll.voteOptions.filter(function(n) {
                        return !0 === n.selected
                    }).length)) : (this.poll.voteOptions.filter(function(n) {
                        return !0 === n.selected
                    }).length > this.poll.multipleOptions - 1 ? (this._messageDialogService.setState({
                        type: t.b.Emoji1,
                        message: "\u6700\u591a\u9009\u62e9" + this.poll.multipleOptions + "\u4e2a\u9009\u9879"
                    }), this._dnDialogService.open("message-dialog")) : this.poll.voteOptions.filter(function(l) {
                        return l.id === n.id
                    })[0].selected = !0, void(this.selectedOptions = this.poll.voteOptions.filter(function(n) {
                        return !0 === n.selected
                    }).length))
                }, n.prototype.vote = function() {
                    var n = this;
                    if (!this.user || !this.user.id) return this._messageDialogService.setState({
                        type: t.b.Emoji1,
                        message: "\u8bf7\u767b\u5f55\u540e\u518d\u8fdb\u884c\u6295\u7968"
                    }), void this._dnDialogService.open("message-dialog");
                    if (!this.poll.isVoted) {
                        var l = [];
                        if (this.poll.voteOptions.map(function(n) {
                                n.selected && l.push(n.id)
                            }), !l.length) return this._messageDialogService.setState({
                            type: t.b.Emoji1,
                            message: "\u8bf7\u52fe\u9009\u9009\u9879"
                        }), void this._dnDialogService.open("message-dialog");
                        this.loading = !0, this._pollService.vote(this.pollId, l, this.user).subscribe(function(l) {
                            l && (n.getVote(), n._toastService.showBlackToast("\u6295\u7968\u6210\u529f"))
                        })
                    }
                }, n.prototype.shuffle = function(n) {
                    for (var l, e, t = n.length; 0 !== t;) e = Math.floor(Math.random() * t), l = n[t -= 1], n[t] = n[e], n[e] = l;
                    return n
                }, n
            }())
    },
    "9TLe": function(n, l, e) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var t = e("WT6e");
        l.GLOBALS = new t.InjectionToken("Global config for sortablejs")
    },
    "9iHh": function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = function() {
                function n() {}
                return n.prototype.ngOnInit = function() {}, n
            }(),
            u = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".count_img[_ngcontent-%COMP%]{padding-left:70px;position:relative}.count_tips[_ngcontent-%COMP%]{padding-left:100px;padding-top:20px}.tips_title[_ngcontent-%COMP%]{font-size:30px;color:#434343;text-indent:0}.tips_text[_ngcontent-%COMP%]{font-size:18px;width:440px;margin-top:40px;font-weight:400;color:#434343;text-indent:0}.tips_text1[_ngcontent-%COMP%]{font-size:18px;width:440px;margin-top:-15px;font-weight:400;color:#434343;text-indent:0}.tips_text2[_ngcontent-%COMP%]{font-size:18px;width:440px;font-weight:400;color:#434343;margin-top:30px;text-indent:0}.btn-order[_ngcontent-%COMP%]{font-size:26px;font-weight:700;height:100px;padding-top:50px;z-index:1;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btn-order_btn[_ngcontent-%COMP%]{background-color:#ff3838;color:#fff;border-radius:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:180px;height:50px;-webkit-box-shadow:2px 3px 2px silver;box-shadow:2px 3px 2px silver}.btn-order_btn[_ngcontent-%COMP%]:hover{background-color:#fc1515;color:#ebebeb}.login-link[_ngcontent-%COMP%]{color:#fff}"]
                ],
                data: {}
            });

        function o(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [
                ["class", "count_img"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 0, "img", [
                ["style", "width: 260px"]
            ], [
                [8, "src", 4]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275eld"](5, 0, null, null, 25, "div", [
                ["class", "count_tips"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](7, 0, null, null, 1, "p", [
                ["class", "tips_title"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](10, 0, null, null, 1, "p", [
                ["class", "tips_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](11, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](13, 0, null, null, 1, "p", [
                ["class", "tips_text1"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](14, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](16, 0, null, null, 1, "p", [
                ["class", "tips_text2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](17, null, ["\n        \u6536\u8d39\u6807\u51c6\uff1a\u5e7f\u544a\u6bcf\u64ad\u653e1000\u6b21\u6536\u53d6\n        ", "\n        (CPM)\uff0c\u7528\u6237\u6bcf\u6b21\u70b9\u51fb\u5e7f\u544a\u6536\u53d6\n        ", "\n        (CPC)\u3002CPM+CPC\u4e24\u9879\u53e0\u52a0\u6536\u8d39\uff0c\u8d39\u7528\u81ea\u52a8\u4ece\u8d26\u6237\u4f59\u989d\u4e2d\u6263\u9664\u3002\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](19, 0, null, null, 1, "p", [
                ["class", "tips_text2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u652f\u6301\u8bbe\u5907\uff1aPC\u3001Mac\u3001iPad\u3001\u624b\u673a"])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](22, 0, null, null, 7, "div", [
                ["class", "btn-order"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](24, 0, null, null, 4, "span", [
                ["class", "btn-order_btn"],
                ["title", "\u7acb\u5373\u9884\u5b9a"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](26, 0, null, null, 1, "a", [
                ["class", "login-link d-flex justify-content-start align-items-center"],
                ["onclick", "TINY.box.show({ iframe: '//account.hwhrq.com/auth/login?theme=tiny&s=1&p=1&a=1&r=http://adc.dnvod.tv?k=1', boxid: 'frameless', width: 800, height: 400, fixed: true, maskid: 'bluemask', maskopacity: 40 })"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                \u7acb\u5373\u9884\u5b9a\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], null, function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.count_img), n(l, 8, 0, e.count_title), n(l, 11, 0, e.count_des1), n(l, 14, 0, e.count_des1_2), n(l, 17, 0, e.count_fee_1, e.count_fee_2)
            })
        }
        var r = e("Xjw4"),
            s = function() {
                function n() {
                    this.priceType = {}
                }
                return n.prototype.ngOnInit = function() {}, n
            }(),
            a = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".inner_Ctn1[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;padding-left:10px}.inner_Ctn2[_ngcontent-%COMP%]{padding-top:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.page_img[_ngcontent-%COMP%]{margin-left:-20px}.p-left[_ngcontent-%COMP%]{padding-left:42px}.page_tips[_ngcontent-%COMP%]{width:400px;margin-left:-200px;padding-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.page_tips_2[_ngcontent-%COMP%]{width:400px;margin-left:100px;padding-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.page_img_2[_ngcontent-%COMP%]{margin-left:-30px;margin-right:88px}.tips_title[_ngcontent-%COMP%]{font-size:30px;color:#434343;text-indent:0;margin-top:-10px}.tips_text[_ngcontent-%COMP%]{font-size:18px;width:320px;margin-top:15px;font-weight:400;color:#434343;text-indent:0}.tips_text2[_ngcontent-%COMP%]{font-size:18px;width:320px;font-weight:400;color:#434343;margin-top:25px;text-indent:0}.btn-order[_ngcontent-%COMP%], .btn-order2[_ngcontent-%COMP%]{font-size:26px;font-weight:700;height:100px;padding-top:10px;padding-left:100px;z-index:1;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btn-order_btn[_ngcontent-%COMP%]{background-color:#ff3838;color:#fff;border-radius:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:180px;height:50px;-webkit-box-shadow:2px 3px 2px silver;box-shadow:2px 3px 2px silver}.btn-order_btn[_ngcontent-%COMP%]:hover{background-color:#fc1515;color:#ebebeb}.login-link[_ngcontent-%COMP%]{color:#fff}.detail_form[_ngcontent-%COMP%]{width:1060px;height:150px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ad-tooltip[_ngcontent-%COMP%]{outline:0;cursor:help;text-decoration:none;position:relative}.ad-tooltip.ad-slot[_ngcontent-%COMP%]:after{display:none}.ad-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:-999em;position:absolute;text-align:center;font-size:14px;font-weight:600;color:#000;max-width:240px;white-space:normal}.ad-tooltip[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;box-shadow:5px 5px 5px rgba(0,0,0,.1);-webkit-box-shadow:5px 5px rgba(0,0,0,.1);-moz-box-shadow:5px 5px rgba(0,0,0,.1);font-family:Calibri,Tahoma,Geneva,sans-serif;position:absolute;left:-70px;top:-4em;z-index:999;margin-left:0;min-width:240px}.classic[_ngcontent-%COMP%]{background:#ffa;border:1px solid #ffad33;padding:.8em 1em}.form_des[_ngcontent-%COMP%]{height:55px;width:1000px;margin-top:20px;font-size:16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.desc_list[_ngcontent-%COMP%]{width:450px;max-width:600px}.page_price[_ngcontent-%COMP%]{display:table;width:1010px;height:120px;border-collapse:separate;border:solid #9e9e9e;border-width:1px 0 0 1px}tr[_ngcontent-%COMP%]{display:table-row;border-collapse:separate;border:solid #9e9e9e;border-width:0 1px 0 0}th[_ngcontent-%COMP%]{height:30px;font-size:16px;font-weight:lighter;border-collapse:separate;color:#fff;background-color:#333;text-align:center}td[_ngcontent-%COMP%]{height:30px;font-size:16px;font-family:Georgia,'Microsoft YaHei';text-align:center;border-collapse:separate;border:solid #9e9e9e;border-width:0 1px 1px 0}"]
                ],
                data: {}
            });

        function c(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 33, "div", [
                ["class", "inner_Ctn1"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 3, "div", [
                ["class", "page_img"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](4, 0, null, null, 0, "img", [], [
                [8, "src", 4]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](7, 0, null, null, 25, "div", [
                ["class", "page_tips"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](9, 0, null, null, 3, "p", [
                ["class", "tips_title"]
            ], null, null, null, null, null)), t["\u0275did"](10, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](11, {
                "p-left": 0
            }), (n()(), t["\u0275ted"](12, null, ["\n            ", "\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](14, 0, null, null, 3, "p", [
                ["class", "tips_text"]
            ], null, null, null, null, null)), t["\u0275did"](15, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](16, {
                "p-left": 0
            }), (n()(), t["\u0275ted"](17, null, ["\n            ", "\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](19, 0, null, null, 3, "p", [
                ["class", "tips_text2"]
            ], null, null, null, null, null)), t["\u0275did"](20, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](21, {
                "p-left": 0
            }), (n()(), t["\u0275ted"](22, null, ["\n            ", "\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](24, 0, null, null, 7, "div", [
                ["class", "btn-order"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](26, 0, null, null, 4, "span", [
                ["class", "btn-order_btn"],
                ["title", "\u7acb\u5373\u9884\u5b9a"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](28, 0, null, null, 1, "a", [
                ["class", "login-link d-flex justify-content-start align-items-center"],
                ["onclick", "TINY.box.show({ iframe: '//account.hwhrq.com/auth/login?theme=tiny&s=1&p=1&a=1&r=http://adc.dnvod.tv?k=1', boxid: 'frameless', width: 800, height: 400, fixed: true, maskid: 'bluemask', maskopacity: 40 })"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    \u7acb\u5373\u9884\u5b9a\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 10, 0, "tips_title", n(l, 11, 0, "IS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title || "AIS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title)), n(l, 15, 0, "tips_text", n(l, 16, 0, "IS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title || "AIS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title)), n(l, 20, 0, "tips_text2", n(l, 21, 0, "IS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title || "AIS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title))
            }, function(n, l) {
                var e = l.component;
                n(l, 4, 0, e.page_img), n(l, 12, 0, e.page_title), n(l, 17, 0, e.page_des1), n(l, 22, 0, e.page_des2)
            })
        }

        function d(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 33, "div", [
                ["class", "inner_Ctn1"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 25, "div", [
                ["class", "page_tips_2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](4, 0, null, null, 3, "p", [
                ["class", "tips_title"]
            ], null, null, null, null, null)), t["\u0275did"](5, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](6, {
                "p-left": 0
            }), (n()(), t["\u0275ted"](7, null, ["\n            ", "\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](9, 0, null, null, 3, "p", [
                ["class", "tips_text"]
            ], null, null, null, null, null)), t["\u0275did"](10, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](11, {
                "p-left": 0
            }), (n()(), t["\u0275ted"](12, null, ["\n            ", "\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](14, 0, null, null, 3, "p", [
                ["class", "tips_text2"]
            ], null, null, null, null, null)), t["\u0275did"](15, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](16, {
                "p-left": 0
            }), (n()(), t["\u0275ted"](17, null, ["\n            ", "\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](19, 0, null, null, 7, "div", [
                ["class", "btn-order2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](21, 0, null, null, 4, "span", [
                ["class", "btn-order_btn"],
                ["title", "\u7acb\u5373\u9884\u5b9a"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](23, 0, null, null, 1, "a", [
                ["class", "login-link d-flex justify-content-start align-items-center"],
                ["onclick", "TINY.box.show({ iframe: '//account.hwhrq.com/auth/login?theme=tiny&s=1&p=1&a=1&r=http://adc.dnvod.tv?k=1', boxid: 'frameless', width: 800, height: 400, fixed: true, maskid: 'bluemask', maskopacity: 40 })"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    \u7acb\u5373\u9884\u5b9a\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](29, 0, null, null, 3, "div", [
                ["class", "page_img_2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](31, 0, null, null, 0, "img", [], [
                [8, "src", 4]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 5, 0, "tips_title", n(l, 6, 0, "IS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title || "AIS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title)), n(l, 10, 0, "tips_text", n(l, 11, 0, "IS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title || "AIS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title)), n(l, 15, 0, "tips_text2", n(l, 16, 0, "IS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title || "AIS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a" === e.page_title))
            }, function(n, l) {
                var e = l.component;
                n(l, 7, 0, e.page_title), n(l, 12, 0, e.page_des1), n(l, 17, 0, e.page_des2), n(l, 31, 0, e.page_img)
            })
        }

        function p(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "th", [
                ["class", "ad-tooltip region"],
                ["style", "border-right: 1px solid #9e9e9e"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["\n                    ", "\n                    "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "classic"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["\u5305\u62ec", ""])), (n()(), t["\u0275ted"](-1, null, ["\n                "]))], null, function(n, l) {
                n(l, 1, 0, l.context.$implicit.RegionName), n(l, 3, 0, l.context.$implicit.IncludeCountries)
            })
        }

        function g(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "td", [], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", " ", ""])), t["\u0275ppd"](2, 1)], null, function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.moneyType, t["\u0275unv"](l, 1, 1, n(l, 2, 0, t["\u0275nov"](l.parent, 0), l.context.$implicit.Price1 * e.exRate)))
            })
        }

        function f(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "td", [], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", " ", ""])), t["\u0275ppd"](2, 1)], null, function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.moneyType, t["\u0275unv"](l, 1, 1, n(l, 2, 0, t["\u0275nov"](l.parent, 0), l.context.$implicit.Price2 * e.exRate)))
            })
        }

        function h(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "td", [], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", " ", ""])), t["\u0275ppd"](2, 1)], null, function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.moneyType, t["\u0275unv"](l, 1, 1, n(l, 2, 0, t["\u0275nov"](l.parent, 0), l.context.$implicit.Price3 * e.exRate)))
            })
        }

        function m(n) {
            return t["\u0275vid"](0, [t["\u0275pid"](0, r.DecimalPipe, [t.LOCALE_ID]), (n()(), t["\u0275and"](16777216, null, null, 1, null, c)), t["\u0275did"](2, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275and"](16777216, null, null, 1, null, d)), t["\u0275did"](5, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275eld"](7, 0, null, null, 44, "div", [
                ["class", "inner_Ctn2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](9, 0, null, null, 41, "div", [
                ["class", "detail_form"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](11, 0, null, null, 38, "div", [
                ["border", "1"],
                ["cellpadding", "0"],
                ["cellspacing", "0"],
                ["class", "page_price"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](13, 0, null, null, 36, "tbody", [], null, null, null, null, null)), (n()(), t["\u0275eld"](14, 0, null, null, 7, "tr", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](16, 0, null, null, 1, "th", [
                ["style", "border-right: 1px solid #9e9e9e; border-bottom: 1px solid #9e9e9e;"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u5730\u533a"])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, p)), t["\u0275did"](20, 802816, null, 0, r.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](23, 0, null, null, 7, "tr", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](25, 0, null, null, 1, "th", [
                ["style", "border-bottom: 1px solid #9e9e9e"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](26, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, g)), t["\u0275did"](29, 802816, null, 0, r.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](32, 0, null, null, 7, "tr", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](34, 0, null, null, 1, "th", [
                ["style", "border-bottom: 1px solid #9e9e9e"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](35, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](38, 802816, null, 0, r.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](41, 0, null, null, 7, "tr", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](43, 0, null, null, 1, "th", [], null, null, null, null, null)), (n()(), t["\u0275ted"](44, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, h)), t["\u0275did"](47, 802816, null, 0, r.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 2, 0, "left" === e.imgPos), n(l, 5, 0, "right" === e.imgPos), n(l, 20, 0, null == e.priceType ? null : e.priceType.List), n(l, 29, 0, null == e.priceType ? null : e.priceType.List), n(l, 38, 0, null == e.priceType ? null : e.priceType.List), n(l, 47, 0, null == e.priceType ? null : e.priceType.List)
            }, function(n, l) {
                var e = l.component;
                n(l, 26, 0, null == e.priceType ? null : e.priceType.Period1), n(l, 35, 0, null == e.priceType ? null : e.priceType.Period2), n(l, 44, 0, null == e.priceType ? null : e.priceType.Period3)
            })
        }
        var v = e("bfOx"),
            _ = e("BVs2"),
            b = e("kZql"),
            y = function() {
                function n(n) {
                    this.priceService = n, this.isAdult = b.a.cinema, this.mode = "commonMode", this.loadComplete = !1
                }
                return n.prototype.loadScript = function() {
                    for (var n = !1, l = document.getElementsByTagName("script"), e = 0; e < l.length; ++e) null != l[e].getAttribute("src") && l[e].getAttribute("src").includes("loader") && (n = !0);
                    if (!n) {
                        var t = ["../../../assets/javascript/getPageCount.js"];
                        for (e = 0; e < t.length; e++) {
                            var i = document.createElement("script");
                            i.src = t[e], i.type = "text/javascript", i.async = !1, i.charset = "utf-8", document.getElementsByTagName("body")[0].appendChild(i)
                        }
                    }
                }, n.prototype.JsAfterData = function() {
                    var n = this;
                    this.loadData().then(function() {
                        n.loadComplete = !0, !0 === n.loadComplete && n.loadJs()
                    })
                }, n.prototype.loadJs = function() {
                    var n = this;
                    return new Promise(function(l) {
                        n.loadScript(), l(!0)
                    })
                }, n.prototype.loadData = function() {
                    var n = this;
                    return new Promise(function(l) {
                        n.setDisplayMode(), l(!0)
                    })
                }, n.prototype.ngOnInit = function() {
                    this.JsAfterData()
                }, n.prototype.setDisplayMode = function() {
                    2 === this.isAdult ? (this.mode = "adultMode", this.getAllStatus_A()) : (this.mode = "commonMode", this.getAllStatus())
                }, n.prototype.ngAfterViewInit = function() {}, n.prototype.getAllStatus = function() {
                    var n = this;
                    this.priceService.getAllStatus().subscribe(function(l) {
                        n.Price_all_pc = l[0], n.Price_Region = l[1], n.RegionsCount = l[1].length
                    })
                }, n.prototype.getAllStatus_A = function() {
                    var n = this;
                    this.priceService.getAllStatus_A().subscribe(function(l) {
                        n.APrice_all_pc = l[0], n.Price_Region = l[1], n.RegionsCount = l[1].length
                    })
                }, n
            }(),
            x = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".title_text[_ngcontent-%COMP%]{font-size:38px;font-weight:bolder;color:#4b4b4b}.title_text2[_ngcontent-%COMP%]{font-size:24px;font-weight:bolder;color:#4b4b4b}.form_title[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.icon_text[_ngcontent-%COMP%]{margin-right:20px;margin-top:-3px}.icon_idle[_ngcontent-%COMP%]{height:20px;width:20px;margin-right:6px;border:1px solid #000}.icon_valid[_ngcontent-%COMP%]{height:20px;width:20px;margin-right:6px;background-color:#66f;border:1px solid #000}.icon_invalid[_ngcontent-%COMP%]{height:20px;width:20px;margin-right:6px;background-color:#666;border:1px solid #000}.form_comment[_ngcontent-%COMP%]{color:red;font-size:18px;font-family:Georgia,'Microsoft YaHei';font-weight:700;text-align:center;height:50px;width:1110px;margin-top:30px}.calc_btn[_ngcontent-%COMP%]{color:brown;font-size:18px;text-decoration:none;font-weight:700}.pc_form[_ngcontent-%COMP%]{width:1342px;height:1050px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.pc_icon[_ngcontent-%COMP%]{width:48px;height:46px}.form_title2[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.form_title_container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;width:358px;height:50px;margin-left:20px;margin-bottom:20px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.form_title_text2[_ngcontent-%COMP%]{font-size:40px;margin-top:-8px;margin-left:25px;color:#434343;text-indent:0}.form_title_book2[_ngcontent-%COMP%]{font-size:20px;color:#434343;margin-left:445px;margin-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.table_main[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]{border-top:1px solid #9e9e9e;background-color:#333;color:#fff}.table-row[_ngcontent-%COMP%]{border:0 solid #9e9e9e}.table_main[_ngcontent-%COMP%]   .ad-page[_ngcontent-%COMP%]{border-left:1px solid #9e9e9e;background-color:#333;color:#fff}table[_ngcontent-%COMP%]{display:table;width:1100px;min-height:750px;border-spacing:0;border-collapse:separate;border:solid #9e9e9e;border-width:1px 0 0 1px}tr[_ngcontent-%COMP%]{display:table-row;border-collapse:separate;border:solid #9e9e9e;border-width:0 1px 0 0}th[_ngcontent-%COMP%]{height:40px;width:90px;font-size:16px;font-weight:lighter;border-right:1px solid #9e9e9e;border-bottom:1px solid #9e9e9e;border-collapse:separate;color:#fff;background-color:#333;text-align:center}td[_ngcontent-%COMP%]{height:40px;font-size:16px;font-family:Georgia,'Microsoft YaHei';text-align:center;border-collapse:separate;border:solid #9e9e9e;border-width:0 1px 1px 0}.atleast[_ngcontent-%COMP%], .gg-position[_ngcontent-%COMP%]{background-color:#ddd}.ad-tooltip[_ngcontent-%COMP%]{outline:0;cursor:help;text-decoration:none;position:relative}.ad-tooltip.ad-slot[_ngcontent-%COMP%]:after{display:none}.ad-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:-999em;position:absolute;text-align:center;font-size:15px;color:#000;max-width:240px;white-space:normal}.ad-tooltip[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;box-shadow:5px 5px 5px rgba(0,0,0,.1);-webkit-box-shadow:5px 5px rgba(0,0,0,.1);-moz-box-shadow:5px 5px rgba(0,0,0,.1);font-family:Calibri,Tahoma,Geneva,sans-serif;position:absolute;left:-70px;top:2.5em;z-index:999;margin-left:0;min-width:240px}.classic[_ngcontent-%COMP%]{background:#ffa;border:1px solid #ffad33;padding:.8em 1em}.class_bold[_ngcontent-%COMP%]{font-size:15px;font-weight:700}.des_text[_ngcontent-%COMP%]{font-size:15px;font-style:normal}.valid[_ngcontent-%COMP%]{background-color:#66f;color:#fff}.invalid[_ngcontent-%COMP%]{background-color:#666;color:#fff}.isday[_ngcontent-%COMP%]{font-style:normal}"]
                ],
                data: {}
            });

        function w(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "th", [
                ["class", "ad-tooltip region"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "classic class_bold"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["\u5305\u62ec", ""]))], null, function(n, l) {
                n(l, 1, 0, l.context.$implicit.RegionName), n(l, 3, 0, l.context.$implicit.IncludeCountries)
            })
        }

        function C(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "i", [
                ["class", "isday"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u7a7a\u95f2"]))], null, null)
        }

        function P(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "i", [
                ["class", "isday"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u53ef\u9884\u5b9a"]))], null, null)
        }

        function S(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "i", [
                ["class", "isday"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u65e0\u6cd5\u9884\u5b9a"]))], null, null)
        }

        function R(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "span", [
                ["class", "classic"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "h6", [
                ["class", "class_bold"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u72b6\u6001\uff1a\u53ef\u9884\u5b9a"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](5, 0, null, null, 0, "i", [
                ["class", "des_text"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "]))], null, function(n, l) {
                n(l, 5, 0, l.parent.context.$implicit.Description)
            })
        }

        function O(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "span", [
                ["class", "classic"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "h6", [
                ["class", "class_bold"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u72b6\u6001\uff1a\u65e0\u6cd5\u9884\u5b9a"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](5, 0, null, null, 0, "i", [
                ["class", "des_text"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "]))], null, function(n, l) {
                n(l, 5, 0, l.parent.context.$implicit.Description)
            })
        }

        function M(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 18, "td", [
                ["class", "ad-tooltip table-data"]
            ], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](2, {
                valid: 0,
                invalid: 1
            }), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, C)), t["\u0275did"](5, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, P)), t["\u0275did"](8, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, S)), t["\u0275did"](11, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, R)), t["\u0275did"](14, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, O)), t["\u0275did"](17, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "]))], function(n, l) {
                n(l, 1, 0, "ad-tooltip table-data", n(l, 2, 0, 1 === l.context.$implicit.Status, 2 === l.context.$implicit.Status)), n(l, 5, 0, 1 !== l.context.$implicit.Status && 2 !== l.context.$implicit.Status), n(l, 8, 0, 1 === l.context.$implicit.Status), n(l, 11, 0, 2 === l.context.$implicit.Status), n(l, 14, 0, 1 === l.context.$implicit.Status), n(l, 17, 0, 2 === l.context.$implicit.Status)
            }, null)
        }

        function T(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 13, "tr", [
                ["class", "table-row"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "th", [
                ["class", "ad-page"],
                ["scope", "row"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](5, 0, null, null, 1, "td", [
                ["class", "gg-position"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](6, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](8, 0, null, null, 1, "td", [
                ["class", "atleast"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](9, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, M)), t["\u0275did"](12, 802816, null, 0, r.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "]))], function(n, l) {
                n(l, 12, 0, l.context.$implicit.Boxes)
            }, function(n, l) {
                n(l, 3, 0, l.context.$implicit.PageName), n(l, 6, 0, l.context.$implicit.Position), n(l, 9, 0, l.context.$implicit.MinADTime)
            })
        }

        function k(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 52, "div", [
                ["class", "pc_form"],
                ["id", "pc_form"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 26, "div", [
                ["class", "form_title2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](4, 0, null, null, 5, "span", [
                ["class", "form_title_container"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](7, 0, null, null, 1, "p", [
                ["class", "form_title_text2"],
                ["style", "margin-left: 0;"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u5e7f\u544a\u4f4d\u9884\u5b9a\u72b6\u51b5"])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](11, 0, null, null, 16, "span", [
                ["class", "form_title_book2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](13, 0, null, null, 0, "span", [
                ["class", "icon_idle"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](15, 0, null, null, 1, "span", [
                ["class", "icon_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u7a7a\u95f2"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](18, 0, null, null, 0, "span", [
                ["class", "icon_valid"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](20, 0, null, null, 1, "span", [
                ["class", "icon_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u53ef\u9884\u5b9a"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](23, 0, null, null, 0, "span", [
                ["class", "icon_invalid"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](25, 0, null, null, 1, "span", [
                ["class", "icon_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u65e0\u6cd5\u9884\u5b9a"])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](30, 0, null, null, 20, "table", [
                ["class", "table_main"],
                ["id", "table_status"]
            ], [
                [8, "hidden", 0]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](32, 0, null, null, 18, "tbody", [], null, null, null, null, null)), (n()(), t["\u0275eld"](33, 0, null, null, 13, "tr", [
                ["class", "table-header"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](35, 0, null, null, 1, "td", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u9875\u9762"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](38, 0, null, null, 1, "td", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u5e7f\u544a\u4f4d"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](41, 0, null, null, 1, "td", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u6700\u77ed\u8d77\u6295"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, w)), t["\u0275did"](45, 802816, null, 0, r.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, T)), t["\u0275did"](49, 802816, null, 0, r.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, [" \n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 45, 0, e.Price_Region), n(l, 49, 0, e.Price_all_pc)
            }, function(n, l) {
                n(l, 30, 0, !l.component.loadComplete)
            })
        }

        function A(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "th", [
                ["class", "ad-tooltip region"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "span", [
                ["class", "classic class_bold"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["\u5305\u62ec", ""]))], null, function(n, l) {
                n(l, 1, 0, l.context.$implicit.RegionName), n(l, 3, 0, l.context.$implicit.IncludeCountries)
            })
        }

        function I(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "i", [
                ["class", "isday"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u7a7a\u95f2"]))], null, null)
        }

        function E(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "i", [
                ["class", "isday"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u53ef\u9884\u5b9a"]))], null, null)
        }

        function N(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "i", [
                ["class", "isday"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u65e0\u6cd5\u9884\u5b9a"]))], null, null)
        }

        function D(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "span", [
                ["class", "classic"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "h6", [
                ["class", "class_bold"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u72b6\u6001\uff1a\u53ef\u9884\u5b9a"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](5, 0, null, null, 0, "i", [
                ["class", "des_text"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "]))], null, function(n, l) {
                n(l, 5, 0, l.parent.context.$implicit.Description)
            })
        }

        function V(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "span", [
                ["class", "classic"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "h6", [
                ["class", "class_bold"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u72b6\u6001\uff1a\u65e0\u6cd5\u9884\u5b9a"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](5, 0, null, null, 0, "i", [
                ["class", "des_text"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "]))], null, function(n, l) {
                n(l, 5, 0, l.parent.context.$implicit.Description)
            })
        }

        function U(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 18, "td", [
                ["class", "ad-tooltip table-data"]
            ], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](2, {
                valid: 0,
                invalid: 1
            }), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, I)), t["\u0275did"](5, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, E)), t["\u0275did"](8, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, N)), t["\u0275did"](11, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, D)), t["\u0275did"](14, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, V)), t["\u0275did"](17, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "]))], function(n, l) {
                n(l, 1, 0, "ad-tooltip table-data", n(l, 2, 0, 1 === l.context.$implicit.Status, 2 === l.context.$implicit.Status)), n(l, 5, 0, 1 !== l.context.$implicit.Status && 2 !== l.context.$implicit.Status), n(l, 8, 0, 1 === l.context.$implicit.Status), n(l, 11, 0, 2 === l.context.$implicit.Status), n(l, 14, 0, 1 === l.context.$implicit.Status), n(l, 17, 0, 2 === l.context.$implicit.Status)
            }, null)
        }

        function j(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 13, "tr", [
                ["class", "table-row"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "th", [
                ["class", "ad-page"],
                ["scope", "row"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](5, 0, null, null, 1, "td", [
                ["class", "gg-position"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](6, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](8, 0, null, null, 1, "td", [
                ["class", "atleast"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](9, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, U)), t["\u0275did"](12, 802816, null, 0, r.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "]))], function(n, l) {
                n(l, 12, 0, l.context.$implicit.Boxes)
            }, function(n, l) {
                n(l, 3, 0, l.context.$implicit.PageName), n(l, 6, 0, l.context.$implicit.Position), n(l, 9, 0, l.context.$implicit.MinADTime)
            })
        }

        function z(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 52, "div", [
                ["class", "pc_form"],
                ["id", "pc_form"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 26, "div", [
                ["class", "form_title2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](4, 0, null, null, 5, "span", [
                ["class", "form_title_container"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](7, 0, null, null, 1, "p", [
                ["class", "form_title_text2"],
                ["style", "margin-left: 0;"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u5e7f\u544a\u4f4d\u9884\u5b9a\u72b6\u51b5"])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](11, 0, null, null, 16, "span", [
                ["class", "form_title_book2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](13, 0, null, null, 0, "span", [
                ["class", "icon_idle"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](15, 0, null, null, 1, "span", [
                ["class", "icon_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u7a7a\u95f2"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](18, 0, null, null, 0, "span", [
                ["class", "icon_valid"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](20, 0, null, null, 1, "span", [
                ["class", "icon_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u53ef\u9884\u5b9a"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](23, 0, null, null, 0, "span", [
                ["class", "icon_invalid"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](25, 0, null, null, 1, "span", [
                ["class", "icon_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u65e0\u6cd5\u9884\u5b9a"])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](30, 0, null, null, 20, "table", [
                ["class", "table_main"],
                ["id", "table_status"]
            ], [
                [8, "hidden", 0]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](32, 0, null, null, 18, "tbody", [], null, null, null, null, null)), (n()(), t["\u0275eld"](33, 0, null, null, 13, "tr", [
                ["class", "table-header"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](35, 0, null, null, 1, "td", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u9875\u9762"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](38, 0, null, null, 1, "td", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u5e7f\u544a\u4f4d"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](41, 0, null, null, 1, "td", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u6700\u77ed\u8d77\u6295"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, A)), t["\u0275did"](45, 802816, null, 0, r.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, j)), t["\u0275did"](49, 802816, null, 0, r.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, [" \n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 45, 0, e.Price_Region), n(l, 49, 0, e.APrice_all_pc)
            }, function(n, l) {
                n(l, 30, 0, !l.component.loadComplete)
            })
        }

        function B(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, k)), t["\u0275did"](1, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n\n"])), (n()(), t["\u0275and"](16777216, null, null, 1, null, z)), t["\u0275did"](4, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "commonMode" === e.mode), n(l, 4, 0, "adultMode" === e.mode)
            }, null)
        }
        var L = e("kAEF"),
            F = e("OE0E"),
            K = e("Zy4i");
        e.d(l, "a", function() {
            return ll
        });
        var H = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                [".content_title[_ngcontent-%COMP%]{width:1342px;height:120px;margin-top:300px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.content_title2[_ngcontent-%COMP%]{width:1342px;height:120px;margin-top:100px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.title_container1[_ngcontent-%COMP%], .title_container2[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;height:100px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:auto;margin-left:140px}.title_text[_ngcontent-%COMP%]{font-size:40px;font-weight:400;color:#4b4b4b}.title_text2[_ngcontent-%COMP%]{font-size:20px;font-style:italic;font-weight:400;color:#4b4b4b;padding-top:10px}.faq_tips[_ngcontent-%COMP%]{display:none;width:225px;height:205px;top:440px;right:360px;position:fixed;z-index:91;border-radius:10px;-webkit-box-shadow:2px 1px 8px 2px #e9e9e9;box-shadow:2px 1px 8px 2px #e9e9e9}.faq_title[_ngcontent-%COMP%]{color:#fff;background-color:#ff3838;height:30px;padding-top:3px;border-radius:10px 10px 0 0}.dn-icon[_ngcontent-%COMP%]{font-size:19px;vertical-align:middle;margin-left:8px}.title-font[_ngcontent-%COMP%]{font-size:16px;vertical-align:middle}.faq_question[_ngcontent-%COMP%]{height:175px;color:#9c9c9c;background-color:#fff;border-radius:0 0 10px 10px}ol._questions[_ngcontent-%COMP%]{padding:10px 12px 10px 26px;font-weight:700;color:#555}li[_ngcontent-%COMP%]{list-style-type:decimal;padding:10px 0}li[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%]:hover   .ql[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ff3838}.ql[_ngcontent-%COMP%]{height:50px}.ql[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;color:#555}.faq_tips.active[_ngcontent-%COMP%]{display:block}@media screen and (max-width:1259px){.lift_nav[_ngcontent-%COMP%]{display:none}.faq_tips[_ngcontent-%COMP%]{right:30px}}@media screen and (min-width:1260px) and (max-width:1534px){.lift_nav[_ngcontent-%COMP%]{display:none}.faq_tips[_ngcontent-%COMP%]{right:100px}}@media screen and (min-width:1535px) and (max-width:1609px){.lift_nav[_ngcontent-%COMP%]{margin-right:-80px}.faq_tips[_ngcontent-%COMP%]{right:230px}}@media screen and (min-width:1610px) and (max-width:1679px){.lift_nav[_ngcontent-%COMP%]{margin-right:-130px}.faq_tips[_ngcontent-%COMP%]{right:250px}}@media screen and (min-width:1680px) and (max-width:1729px){.faq_tips[_ngcontent-%COMP%]{right:270px}}@media screen and (min-width:1730px) and (max-width:1850px){.faq_tips[_ngcontent-%COMP%]{right:300px}}@media screen and (min-height:800px) and (max-height:900px){.faq_tips[_ngcontent-%COMP%]{top:400px}}@media screen and (min-height:700px) and (max-height:799px){.faq_tips[_ngcontent-%COMP%]{top:360px}}@media screen and (max-height:699px){.faq_tips[_ngcontent-%COMP%]{top:320px}}.lift_nav[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-top:-280px;margin-right:-150px;z-index:91}.fixed_nav[_ngcontent-%COMP%]{margin-top:300px}nav[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;z-index:92;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:#fff;border:.5px solid #ebebeb;border-radius:10px;-webkit-box-shadow:2px 2px 2px #ddd;box-shadow:2px 2px 2px #ddd}.btn[_ngcontent-%COMP%]{text-decoration:none;height:38px;width:120px;font-size:16px;color:#878787;z-index:93;display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.btn-top[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;text-decoration:none;height:38px;width:120px;font-size:16px;color:#878787;z-index:93;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.btn-bottom[_ngcontent-%COMP%]{border-radius:0 0 10px 10px;text-decoration:none;height:38px;width:120px;font-size:16px;color:#878787;z-index:93;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.btn_gap[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.btn_udl[_ngcontent-%COMP%]{width:110px;z-index:93;border-bottom:1px solid #e6e6e6}btn[_ngcontent-%COMP%]:link, btn[_ngcontent-%COMP%]:visited{color:#878787;text-decoration:none}nav[_ngcontent-%COMP%]   .btn-bottom[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   .btn-top[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#ff3838;font-size:16px;color:#fff;text-decoration:none}.btn-bottom.active[_ngcontent-%COMP%], .btn-top.active[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%]{background-color:#ff3838;color:#fff}.ads_intro[_ngcontent-%COMP%]{width:1342px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.intro_content_1[_ngcontent-%COMP%]{width:1342px;height:750px;padding-top:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.count_switch_1[_ngcontent-%COMP%]{width:1280px;height:600px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #dadada}.count_switch_2[_ngcontent-%COMP%]{width:1280px;height:600px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.count_switch_3[_ngcontent-%COMP%]{width:1280px;height:600px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid #dadada}.count_switch_4[_ngcontent-%COMP%]{width:1280px;height:600px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.intro_content_2[_ngcontent-%COMP%]{width:1342px;height:750px;padding-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.fix_gap_ctn[_ngcontent-%COMP%]{background-color:#f8f8f8;width:1344px;margin-left:-1px}.fix_gap[_ngcontent-%COMP%]{width:1344px;height:25px;position:relative;z-index:10;border-top:1px solid #ddd!important;border-bottom:1px solid #ddd!important;border-left:1px solid #f8f8f8!important;border-right:1px solid #f8f8f8!important;background-color:#f8f8f8}.status_content[_ngcontent-%COMP%]{padding-top:75px}.content_3[_ngcontent-%COMP%]{height:300px;width:1342px;margin-left:-15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.customer_icon_title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90px;height:75px;margin-bottom:20px}.customer_text[_ngcontent-%COMP%]{color:#46a6f5;font-size:27px;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px}.wechat-helper[_ngcontent-%COMP%]{margin-top:60px;margin-bottom:40px}.enter-icon[_ngcontent-%COMP%]{width:22px;height:24px;margin-top:8px;margin-left:10px}"]
            ],
            data: {}
        });

        function $(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-count", [
                ["class", "count_switch_2"]
            ], null, null, null, o, u)), t["\u0275did"](1, 114688, null, 0, i, [], {
                count_img: [0, "count_img"],
                count_title: [1, "count_title"],
                count_des1: [2, "count_des1"],
                count_des1_2: [3, "count_des1_2"],
                count_fee_1: [4, "count_fee_1"],
                count_fee_2: [5, "count_fee_2"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "/assets/img/PI.gif", "PI\uff1a\u89c6\u9891\u524d\u7f6e/\u63d2\u64ad\u5e7f\u544a", "\u89c6\u9891\u6bcf\u64ad\u653e10-20\u5206\u949f\u968f\u673a\u63d2\u64ad1\u4e2a20\u79d2\u7684\u89c6\u9891\u5e7f\u544a\uff0c", "VIP\u7528\u6237\u53ef\u8fc7\u6ee4\uff0c\u5e7f\u544a\u5546\u53ef\u8bbe\u7f6e\u6bcf\u65e5\u64ad\u653e\u6b21\u6570\u3002", e.PI_CPM + " \u6b27\u5143", e.PI_CPC + " \u6b27\u5143")
            }, null)
        }

        function Y(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-count", [
                ["class", "count_switch_2"]
            ], null, null, null, o, u)), t["\u0275did"](1, 114688, null, 0, i, [], {
                count_img: [0, "count_img"],
                count_title: [1, "count_title"],
                count_des1: [2, "count_des1"],
                count_des1_2: [3, "count_des1_2"],
                count_fee_1: [4, "count_fee_1"],
                count_fee_2: [5, "count_fee_2"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "/assets/img/PI.gif", "PI\uff1a\u89c6\u9891\u524d\u7f6e/\u63d2\u64ad\u5e7f\u544a", "\u89c6\u9891\u6bcf\u64ad\u653e10-20\u5206\u949f\u968f\u673a\u63d2\u64ad1\u4e2a20\u79d2\u7684\u89c6\u9891\u5e7f\u544a\uff0c", "VIP\u7528\u6237\u53ef\u8fc7\u6ee4\uff0c\u5e7f\u544a\u5546\u53ef\u8bbe\u7f6e\u6bcf\u65e5\u64ad\u653e\u6b21\u6570\u3002", e.PI_CPM * e.eur2usd + " \u7f8e\u5143", e.PI_CPC * e.eur2usd + " \u7f8e\u5143")
            }, null)
        }

        function q(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-count", [
                ["class", "count_switch_2"]
            ], null, null, null, o, u)), t["\u0275did"](1, 114688, null, 0, i, [], {
                count_img: [0, "count_img"],
                count_title: [1, "count_title"],
                count_des1: [2, "count_des1"],
                count_des1_2: [3, "count_des1_2"],
                count_fee_1: [4, "count_fee_1"],
                count_fee_2: [5, "count_fee_2"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "/assets/img/PI.gif", "PI\uff1a\u89c6\u9891\u524d\u7f6e/\u63d2\u64ad\u5e7f\u544a", "\u89c6\u9891\u6bcf\u64ad\u653e10-20\u5206\u949f\u968f\u673a\u63d2\u64ad1\u4e2a20\u79d2\u7684\u89c6\u9891\u5e7f\u544a\uff0c", "VIP\u7528\u6237\u53ef\u8fc7\u6ee4\uff0c\u5e7f\u544a\u5546\u53ef\u8bbe\u7f6e\u6bcf\u65e5\u64ad\u653e\u6b21\u6570\u3002", e.PI_CPM * e.eur2cny + " \u4eba\u6c11\u5e01", e.PI_CPC * e.eur2cny + " \u4eba\u6c11\u5e01")
            }, null)
        }

        function W(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "left", "/assets/img/PZ.png", "PZ\uff1a\u7535\u8111\u7248\u64ad\u653e\u9875\u89c6\u9891\u6682\u505c\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_PZ, 1, "\u20ac")
            }, null)
        }

        function Z(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/PZ.png", "PZ\uff1a\u7535\u8111\u7248\u64ad\u653e\u9875\u89c6\u9891\u6682\u505c\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_PZ, e.eur2usd, "$")
            }, null)
        }

        function X(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/PZ.png", "PZ\uff1a\u7535\u8111\u7248\u64ad\u653e\u9875\u89c6\u9891\u6682\u505c\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_PZ, e.eur2cny, "\xa5")
            }, null)
        }

        function G(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des1: [3, "page_des1"],
                page_des2: [4, "page_des2"],
                priceType: [5, "priceType"],
                exRate: [6, "exRate"],
                moneyType: [7, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "left", "/assets/img/IS_new.png", "IS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a", "\u7b2c\u4e00\u5e45\u51fa\u73b0\uff0c\u505c\u755910\u79d2", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001Mac\u3001iPad\u3001\u624b\u673a", l.component.Price_IS, 1, "\u20ac")
            }, null)
        }

        function Q(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des1: [3, "page_des1"],
                page_des2: [4, "page_des2"],
                priceType: [5, "priceType"],
                exRate: [6, "exRate"],
                moneyType: [7, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/IS_new.png", "IS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a", "\u7b2c\u4e00\u5e45\u51fa\u73b0\uff0c\u505c\u755910\u79d2", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001Mac\u3001iPad\u3001\u624b\u673a", e.Price_IS, e.eur2usd, "$")
            }, null)
        }

        function J(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des1: [3, "page_des1"],
                page_des2: [4, "page_des2"],
                priceType: [5, "priceType"],
                exRate: [6, "exRate"],
                moneyType: [7, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/IS_new.png", "IS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a", "\u7b2c\u4e00\u5e45\u51fa\u73b0\uff0c\u505c\u755910\u79d2", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001Mac\u3001iPad\u3001\u624b\u673a", e.Price_IS, e.eur2cny, "\xa5")
            }, null)
        }

        function nn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "right", "/assets/img/MT.png", "MT\uff1a\u542f\u52a8APP/\u79fb\u52a8\u7248\u7f51\u7ad9\u5f00\u5c4f\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", l.component.Price_MT, 1, "\u20ac")
            }, null)
        }

        function ln(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/MT.png", "MT\uff1a\u542f\u52a8APP/\u79fb\u52a8\u7248\u7f51\u7ad9\u5f00\u5c4f\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", e.Price_MT, e.eur2usd, "$")
            }, null)
        }

        function en(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/MT.png", "MT\uff1a\u542f\u52a8APP/\u79fb\u52a8\u7248\u7f51\u7ad9\u5f00\u5c4f\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", e.Price_MT, e.eur2cny, "\xa5")
            }, null)
        }

        function tn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "left", "/assets/img/MPB.png", "MPB\uff1aAPP/\u79fb\u52a8\u7248\u89c6\u9891\u64ad\u653e\u9875\u5e95\u90e8\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", l.component.Price_MPB, 1, "\u20ac")
            }, null)
        }

        function un(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/MPB.png", "MPB\uff1aAPP/\u79fb\u52a8\u7248\u89c6\u9891\u64ad\u653e\u9875\u5e95\u90e8\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", e.Price_MPB, e.eur2usd, "$")
            }, null)
        }

        function on(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/MPB.png", "MPB\uff1aAPP/\u79fb\u52a8\u7248\u89c6\u9891\u64ad\u653e\u9875\u5e95\u90e8\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", e.Price_MPB, e.eur2cny, "\xa5")
            }, null)
        }

        function rn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "right", "/assets/img/DR.png", "DR\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_DR, 1, "\u20ac")
            }, null)
        }

        function sn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/DR.png", "DR\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_DR, e.eur2usd, "$")
            }, null)
        }

        function an(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/DR.png", "DR\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_DR, e.eur2cny, "\xa5")
            }, null)
        }

        function cn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "left", "/assets/img/DB.png", "DB\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_DB, 1, "\u20ac")
            }, null)
        }

        function dn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/DB.png", "DB\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_DB, e.eur2usd, "$")
            }, null)
        }

        function pn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/DB.png", "DB\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_DB, e.eur2cny, "\xa5")
            }, null)
        }

        function gn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "right", "/assets/img/PR1.png", "PR1\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u5de6\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_PR1, 1, "\u20ac")
            }, null)
        }

        function fn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/PR1.png", "PR1\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u5de6\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_PR1, e.eur2usd, "$")
            }, null)
        }

        function hn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/PR1.png", "PR1\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u5de6\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_PR1, e.eur2cny, "\xa5")
            }, null)
        }

        function mn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "left", "/assets/img/PR2.png", "PR2\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_PR2, 1, "\u20ac")
            }, null)
        }

        function vn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/PR2.png", "PR2\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_PR2, e.eur2usd, "$")
            }, null)
        }

        function _n(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/PR2.png", "PR2\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_PR2, e.eur2cny, "\xa5")
            }, null)
        }

        function bn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "right", "/assets/img/PB.png", "PB\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_PB, 1, "\u20ac")
            }, null)
        }

        function yn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/PB.png", "PB\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_PB, e.eur2usd, "$")
            }, null)
        }

        function xn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/PB.png", "PB\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_PB, e.eur2cny, "\xa5")
            }, null)
        }

        function wn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 295, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](3, 0, null, null, 19, "div", [
                ["class", "lift_nav"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](5, 0, null, null, 16, "nav", [
                ["class", "fixed_nav"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](7, 0, null, null, 3, "a", [
                ["class", "btn-top"]
            ], [
                [2, "active", null]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0;
                return "click" === l && (i = !1 !== n.component.scrollTo(t["\u0275nov"](n, 89)) && i), i
            }, null, null)), t["\u0275did"](8, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](9, {
                active: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n                \u8ba1\u8d39\u5e7f\u544a\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](12, 0, null, null, 3, "a", [
                ["class", "btn"]
            ], [
                [2, "active", null]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0;
                return "click" === l && (i = !1 !== n.component.scrollTo(t["\u0275nov"](n, 124)) && i), i
            }, null, null)), t["\u0275did"](13, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](14, {
                active: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n                \u9875\u9762\u5e7f\u544a\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](17, 0, null, null, 3, "a", [
                ["class", "btn-bottom"]
            ], [
                [2, "active", null]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0;
                return "click" === l && (i = !1 !== n.component.scrollTo(t["\u0275nov"](n, 268)) && i), i
            }, null, null)), t["\u0275did"](18, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](19, {
                active: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n                \u9884\u5b9a\u72b6\u51b5\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](24, 0, null, null, 45, "div", [
                ["class", "faq_tips"]
            ], [
                [2, "active", null]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](26, 0, null, null, 6, "div", [
                ["class", "faq_title"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](28, 0, null, null, 0, "span", [
                ["class", "dn-icon icon-help"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](30, 0, null, null, 1, "span", [
                ["class", "title-font"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u5e38\u89c1\u95ee\u9898"])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](34, 0, null, null, 34, "div", [
                ["class", "faq_question"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](36, 0, null, null, 31, "ol", [
                ["class", "_questions"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](38, 0, null, null, 8, "li", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](40, 0, null, null, 5, "span", [
                ["class", "ql"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](42, 0, null, null, 2, "a", [
                ["routerLink", "/ad-center/faq"]
            ], [
                [1, "target", 0],
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0,
                    u = n.component;
                return "click" === l && (i = !1 !== t["\u0275nov"](n, 43).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i), "click" === l && (i = !1 !== u.scrollIntoView("design_faq") && i), i
            }, null, null)), t["\u0275did"](43, 671744, null, 0, v.q, [v.o, v.a, r.LocationStrategy], {
                routerLink: [0, "routerLink"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\u5e7f\u544a\u89c6\u9891\u7531\u6211\u81ea\u5df1\u63d0\u4f9b\uff1f\u8fd8\u662f\u4f60\u4eec\u4f1a\u5e2e\u6211\u5236\u4f5c\uff1f"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](48, 0, null, null, 8, "li", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](50, 0, null, null, 5, "span", [
                ["class", "ql"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](52, 0, null, null, 2, "a", [
                ["routerLink", "/ad-center/design"]
            ], [
                [1, "target", 0],
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0,
                    u = n.component;
                return "click" === l && (i = !1 !== t["\u0275nov"](n, 53).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i), "click" === l && (i = !1 !== u.scrollIntoView("design_type") && i), i
            }, null, null)), t["\u0275did"](53, 671744, null, 0, v.q, [v.o, v.a, r.LocationStrategy], {
                routerLink: [0, "routerLink"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\u6211\u81ea\u5df1\u63d0\u4f9b\u89c6\u9891\u7684\u8bdd\uff0c\u8981\u63d0\u4f9b\u4ec0\u4e48\u89c4\u683c\u7684\uff1f"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](58, 0, null, null, 8, "li", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](60, 0, null, null, 5, "span", [
                ["class", "ql"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](62, 0, null, null, 2, "a", [
                ["routerLink", "/ad-center/payment"]
            ], [
                [1, "target", 0],
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0,
                    u = n.component;
                return "click" === l && (i = !1 !== t["\u0275nov"](n, 63).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i), "click" === l && (i = !1 !== u.scrollIntoView("payment_type") && i), i
            }, null, null)), t["\u0275did"](63, 671744, null, 0, v.q, [v.o, v.a, r.LocationStrategy], {
                routerLink: [0, "routerLink"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\u5982\u4f55\u5145\u503c\u5e7f\u544a\u8d39\uff1f"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](71, 0, null, null, 223, "div", [
                ["class", "main_container"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](73, 0, null, null, 220, "div", [
                ["id", "container"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](75, 0, null, null, 217, "div", [
                ["class", "ads_intro"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](77, 0, null, null, 10, "span", [
                ["class", "content_title"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](79, 0, null, null, 7, "span", [
                ["class", "title_container1"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](81, 0, null, null, 1, "span", [
                ["class", "title_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u8ba1\u8d39\u5e7f\u544a"])), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](84, 0, null, null, 1, "span", [
                ["class", "title_text2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u6839\u636e\u5c55\u793a\u7387\u548c\u70b9\u51fb\u7387\u6536\u8d39\uff0c\u7528\u6237\u6bcf\u4e00\u6b21\u70b9\u51fb\u5e7f\u544a\u90fd\u80fd\u4ea7\u751f\u5b9e\u9645\u6548\u76ca\uff0c\u4fdd\u8bc1\u6bcf\u5206\u94b1\u90fd\u82b1\u5728\u5200\u5203\u4e0a\uff01"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](89, 0, [
                ["count_content_1", 1]
            ], null, 15, "div", [
                ["class", "intro_content_1"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](91, 0, null, null, 12, "span", [], null, null, null, null, null)), t["\u0275did"](92, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, $)), t["\u0275did"](96, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Y)), t["\u0275did"](99, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, q)), t["\u0275did"](102, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](107, 0, null, null, 3, "div", [
                ["class", "fix_gap_ctn"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](109, 0, null, null, 0, "div", [
                ["class", "fix_gap"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](112, 0, null, null, 10, "span", [
                ["class", "content_title2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](114, 0, null, null, 7, "span", [
                ["class", "title_container2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](116, 0, null, null, 1, "span", [
                ["class", "title_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u9875\u9762\u5e7f\u544a"])), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](119, 0, null, null, 1, "span", [
                ["class", "title_text2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u9875\u9762\u5e7f\u544a\u6309\u6708\u6216\u6309\u5929\u6536\u53d6\u56fa\u5b9a\u4ef7\u683c\u3002\u4e00\u6b21\u6027\u6295\u653e3\u4e2a\u6708\u4f18\u60e010%\uff0c\u4e00\u6b21\u6027\u6295\u653e6\u4e2a\u6708\u4f18\u60e020%\u3002"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](124, 0, [
                ["page_content_9", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](126, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](127, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, W)), t["\u0275did"](130, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Z)), t["\u0275did"](133, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, X)), t["\u0275did"](136, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](140, 0, [
                ["page_content_1", 1]
            ], null, 14, "div", [
                ["class", "intro_content_1"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](142, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](143, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, G)), t["\u0275did"](146, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Q)), t["\u0275did"](149, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, J)), t["\u0275did"](152, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](156, 0, [
                ["page_content_2", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](158, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](159, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, nn)), t["\u0275did"](162, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, ln)), t["\u0275did"](165, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, en)), t["\u0275did"](168, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](172, 0, [
                ["page_content_3", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](174, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](175, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, tn)), t["\u0275did"](178, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, un)), t["\u0275did"](181, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, on)), t["\u0275did"](184, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](188, 0, [
                ["page_content_4", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](190, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](191, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, rn)), t["\u0275did"](194, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, sn)), t["\u0275did"](197, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, an)), t["\u0275did"](200, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](204, 0, [
                ["page_content_5", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](206, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](207, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, cn)), t["\u0275did"](210, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, dn)), t["\u0275did"](213, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, pn)), t["\u0275did"](216, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](220, 0, [
                ["page_content_6", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](222, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](223, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, gn)), t["\u0275did"](226, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, fn)), t["\u0275did"](229, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, hn)), t["\u0275did"](232, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](236, 0, [
                ["page_content_7", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](238, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](239, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, mn)), t["\u0275did"](242, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, vn)), t["\u0275did"](245, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, _n)), t["\u0275did"](248, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](252, 0, [
                ["page_content_8", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](254, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](255, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, bn)), t["\u0275did"](258, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, yn)), t["\u0275did"](261, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, xn)), t["\u0275did"](264, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](268, 0, [
                ["page_content_10", 1]
            ], null, 4, "div", [
                ["class", "status_content"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](270, 0, null, null, 1, "app-slot-form-pc", [], null, null, null, B, x)), t["\u0275did"](271, 4308992, null, 0, y, [_.a], null, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](274, 0, null, null, 17, "span", [
                ["class", "content_3"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](276, 0, null, null, 1, "span", [
                ["class", "customer_icon_title"]
            ], null, null, null, null, null)), (n()(), t["\u0275eld"](277, 0, null, null, 0, "img", [
                ["src", "../assets/icon/\u54a8\u8be2\u5ba2\u670d.png"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](279, 0, null, null, 6, "span", [
                ["class", "customer_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](281, 0, null, null, 1, "p", [
                ["id", "p7"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u66f4\u591a\u95ee\u9898\u8bf7\u54a8\u8be2\u5fae\u4fe1\u5ba2\u670d"])), (n()(), t["\u0275ted"](-1, null, [" "])), (n()(), t["\u0275eld"](284, 0, null, null, 0, "img", [
                ["class", "enter-icon"],
                ["src", "../assets/icon/\u56de\u8f66.png"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](287, 0, null, null, 3, "div", [
                ["class", "wechat-helper"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](289, 0, null, null, 0, "img", [
                ["class", "mb-2"],
                ["src", "/assets/images/wechat/ad.jpg"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 8, 0, "btn-top", n(l, 9, 0, e.isActive == t["\u0275nov"](l, 89))), n(l, 13, 0, "btn", n(l, 14, 0, e.isActive == t["\u0275nov"](l, 124))), n(l, 18, 0, "btn-bottom", n(l, 19, 0, e.isActive == t["\u0275nov"](l, 268))), n(l, 43, 0, "/ad-center/faq"), n(l, 53, 0, "/ad-center/design"), n(l, 63, 0, "/ad-center/payment"), n(l, 92, 0, e.currency), n(l, 96, 0, "EUR"), n(l, 99, 0, "USD"), n(l, 102, 0, "CNY"), n(l, 127, 0, e.currency), n(l, 130, 0, "EUR"), n(l, 133, 0, "USD"), n(l, 136, 0, "CNY"), n(l, 143, 0, e.currency), n(l, 146, 0, "EUR"), n(l, 149, 0, "USD"), n(l, 152, 0, "CNY"), n(l, 159, 0, e.currency), n(l, 162, 0, "EUR"), n(l, 165, 0, "USD"), n(l, 168, 0, "CNY"), n(l, 175, 0, e.currency), n(l, 178, 0, "EUR"), n(l, 181, 0, "USD"), n(l, 184, 0, "CNY"), n(l, 191, 0, e.currency), n(l, 194, 0, "EUR"), n(l, 197, 0, "USD"), n(l, 200, 0, "CNY"), n(l, 207, 0, e.currency), n(l, 210, 0, "EUR"), n(l, 213, 0, "USD"), n(l, 216, 0, "CNY"), n(l, 223, 0, e.currency), n(l, 226, 0, "EUR"), n(l, 229, 0, "USD"), n(l, 232, 0, "CNY"), n(l, 239, 0, e.currency), n(l, 242, 0, "EUR"), n(l, 245, 0, "USD"), n(l, 248, 0, "CNY"), n(l, 255, 0, e.currency), n(l, 258, 0, "EUR"), n(l, 261, 0, "USD"), n(l, 264, 0, "CNY"), n(l, 271, 0)
            }, function(n, l) {
                var e = l.component;
                n(l, 7, 0, e.scroll >= 85 && e.scroll < 230), n(l, 12, 0, e.scroll >= 230 && e.scroll < 1950), n(l, 17, 0, e.scroll >= 1950 && e.scroll < 2250), n(l, 24, 0, e.scroll > 30 && e.scroll <= 170), n(l, 42, 0, t["\u0275nov"](l, 43).target, t["\u0275nov"](l, 43).href), n(l, 52, 0, t["\u0275nov"](l, 53).target, t["\u0275nov"](l, 53).href), n(l, 62, 0, t["\u0275nov"](l, 63).target, t["\u0275nov"](l, 63).href)
            })
        }

        function Cn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-count", [
                ["class", "count_switch_2"]
            ], null, null, null, o, u)), t["\u0275did"](1, 114688, null, 0, i, [], {
                count_img: [0, "count_img"],
                count_title: [1, "count_title"],
                count_des1: [2, "count_des1"],
                count_des1_2: [3, "count_des1_2"],
                count_fee_1: [4, "count_fee_1"],
                count_fee_2: [5, "count_fee_2"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "/assets/img/API.gif", "API\uff1a\u89c6\u9891\u524d\u7f6e\u5e7f\u544a", "\u89c6\u9891\u64ad\u653e\u524d\u968f\u673a\u64ad\u653e1\u4e2a60\u79d2\u7684\u89c6\u9891\u5e7f\u544a\uff0c", "VIP\u7528\u6237\u53ef\u8fc7\u6ee4\uff0c\u5e7f\u544a\u5546\u53ef\u8bbe\u7f6e\u6bcf\u65e5\u64ad\u653e\u6b21\u6570\u3002", e.PI_CPM + " \u6b27\u5143", e.PI_CPC + " \u6b27\u5143")
            }, null)
        }

        function Pn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-count", [
                ["class", "count_switch_2"]
            ], null, null, null, o, u)), t["\u0275did"](1, 114688, null, 0, i, [], {
                count_img: [0, "count_img"],
                count_title: [1, "count_title"],
                count_des1: [2, "count_des1"],
                count_des1_2: [3, "count_des1_2"],
                count_fee_1: [4, "count_fee_1"],
                count_fee_2: [5, "count_fee_2"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "/assets/img/API.gif", "API\uff1a\u89c6\u9891\u524d\u7f6e\u5e7f\u544a", "\u89c6\u9891\u64ad\u653e\u524d\u968f\u673a\u64ad\u653e1\u4e2a60\u79d2\u7684\u89c6\u9891\u5e7f\u544a\uff0c", "VIP\u7528\u6237\u53ef\u8fc7\u6ee4\uff0c\u5e7f\u544a\u5546\u53ef\u8bbe\u7f6e\u6bcf\u65e5\u64ad\u653e\u6b21\u6570\u3002", e.PI_CPM * e.eur2usd + " \u7f8e\u5143", e.PI_CPC * e.eur2usd + " \u7f8e\u5143")
            }, null)
        }

        function Sn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-count", [
                ["class", "count_switch_2"]
            ], null, null, null, o, u)), t["\u0275did"](1, 114688, null, 0, i, [], {
                count_img: [0, "count_img"],
                count_title: [1, "count_title"],
                count_des1: [2, "count_des1"],
                count_des1_2: [3, "count_des1_2"],
                count_fee_1: [4, "count_fee_1"],
                count_fee_2: [5, "count_fee_2"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "/assets/img/API.gif", "API\uff1a\u89c6\u9891\u524d\u7f6e\u5e7f\u544a", "\u89c6\u9891\u64ad\u653e\u524d\u968f\u673a\u64ad\u653e1\u4e2a60\u79d2\u7684\u89c6\u9891\u5e7f\u544a\uff0c", "VIP\u7528\u6237\u53ef\u8fc7\u6ee4\uff0c\u5e7f\u544a\u5546\u53ef\u8bbe\u7f6e\u6bcf\u65e5\u64ad\u653e\u6b21\u6570\u3002", e.PI_CPM * e.eur2cny + " \u4eba\u6c11\u5e01", e.PI_CPC * e.eur2cny + " \u4eba\u6c11\u5e01")
            }, null)
        }

        function Rn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "left", "/assets/img/APZ.png", "APZ\uff1a\u7535\u8111\u7248\u64ad\u653e\u9875\u89c6\u9891\u6682\u505c\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_APZ, 1, "\u20ac")
            }, null)
        }

        function On(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/APZ.png", "APZ\uff1a\u7535\u8111\u7248\u64ad\u653e\u9875\u89c6\u9891\u6682\u505c\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_APZ, e.eur2usd, "$")
            }, null)
        }

        function Mn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/APZ.png", "APZ\uff1a\u7535\u8111\u7248\u64ad\u653e\u9875\u89c6\u9891\u6682\u505c\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_APZ, e.eur2cny, "\xa5")
            }, null)
        }

        function Tn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des1: [3, "page_des1"],
                page_des2: [4, "page_des2"],
                priceType: [5, "priceType"],
                exRate: [6, "exRate"],
                moneyType: [7, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "left", "/assets/img/AIS_new.png", "AIS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a", "\u7b2c\u4e00\u5e45\u51fa\u73b0\uff0c\u505c\u755910\u79d2", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001Mac\u3001iPad\u3001\u624b\u673a", l.component.Price_AIS, 1, "\u20ac")
            }, null)
        }

        function kn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des1: [3, "page_des1"],
                page_des2: [4, "page_des2"],
                priceType: [5, "priceType"],
                exRate: [6, "exRate"],
                moneyType: [7, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/AIS_new.png", "AIS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a", "\u7b2c\u4e00\u5e45\u51fa\u73b0\uff0c\u505c\u755910\u79d2", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001Mac\u3001iPad\u3001\u624b\u673a", e.Price_AIS, e.eur2usd, "$")
            }, null)
        }

        function An(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des1: [3, "page_des1"],
                page_des2: [4, "page_des2"],
                priceType: [5, "priceType"],
                exRate: [6, "exRate"],
                moneyType: [7, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/AIS_new.png", "AIS\uff1a\u4e3b\u9875\u5e7b\u706f\u5e7f\u544a", "\u7b2c\u4e00\u5e45\u51fa\u73b0\uff0c\u505c\u755910\u79d2", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001Mac\u3001iPad\u3001\u624b\u673a", e.Price_AIS, e.eur2cny, "\xa5")
            }, null)
        }

        function In(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "right", "/assets/img/AMT.png", "AMT\uff1a\u542f\u52a8APP/\u79fb\u52a8\u7248\u7f51\u7ad9\u5f00\u5c4f\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", l.component.Price_AMT, 1, "\u20ac")
            }, null)
        }

        function En(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/AMT.png", "AMT\uff1a\u542f\u52a8APP/\u79fb\u52a8\u7248\u7f51\u7ad9\u5f00\u5c4f\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", e.Price_AMT, e.eur2usd, "$")
            }, null)
        }

        function Nn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/AMT.png", "AMT\uff1a\u542f\u52a8APP/\u79fb\u52a8\u7248\u7f51\u7ad9\u5f00\u5c4f\u5e7f\u544a", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", e.Price_AMT, e.eur2cny, "\xa5")
            }, null)
        }

        function Dn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "left", "/assets/img/AMPB.png", "AMPB\uff1aAPP/\u79fb\u52a8\u7248\u89c6\u9891\u64ad\u653e\u9875\u5e95\u90e8\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", l.component.Price_AMPB, 1, "\u20ac")
            }, null)
        }

        function Vn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/AMPB.png", "AMPB\uff1aAPP/\u79fb\u52a8\u7248\u89c6\u9891\u64ad\u653e\u9875\u5e95\u90e8\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", e.Price_AMPB, e.eur2usd, "$")
            }, null)
        }

        function Un(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/AMPB.png", "AMPB\uff1aAPP/\u79fb\u52a8\u7248\u89c6\u9891\u64ad\u653e\u9875\u5e95\u90e8\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aiPhone\u3001iPad\u3001\u5b89\u5353\u624b\u673a", e.Price_AMPB, e.eur2cny, "\xa5")
            }, null)
        }

        function jn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "right", "/assets/img/ADR.png", "ADR\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_ADR, 1, "\u20ac")
            }, null)
        }

        function zn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/ADR.png", "ADR\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_ADR, e.eur2usd, "$")
            }, null)
        }

        function Bn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/ADR.png", "ADR\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_ADR, e.eur2cny, "\xa5")
            }, null)
        }

        function Ln(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "left", "/assets/img/ADB.png", "ADB\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_ADB, 1, "\u20ac")
            }, null)
        }

        function Fn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/ADB.png", "ADB\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_ADB, e.eur2usd, "$")
            }, null)
        }

        function Kn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/ADB.png", "ADB\uff1a\u7535\u8111\u7248\u5267\u96c6\u4ecb\u7ecd\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_ADB, e.eur2cny, "\xa5")
            }, null)
        }

        function Hn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "right", "/assets/img/APR1.png", "APR1\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u5de6\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_APR1, 1, "\u20ac")
            }, null)
        }

        function $n(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/APR1.png", "APR1\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u5de6\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_APR1, e.eur2usd, "$")
            }, null)
        }

        function Yn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/APR1.png", "APR1\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u5de6\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_APR1, e.eur2cny, "\xa5")
            }, null)
        }

        function qn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "left", "/assets/img/APR2.png", "APR2\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_APR2, 1, "\u20ac")
            }, null)
        }

        function Wn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/APR2.png", "APR2\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_APR2, e.eur2usd, "$")
            }, null)
        }

        function Zn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "left", "/assets/img/APR2.png", "APR2\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u53f3\u4fa7\u6d77\u62a5", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_APR2, e.eur2cny, "\xa5")
            }, null)
        }

        function Xn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 1, 0, "right", "/assets/img/APB.png", "APB\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", l.component.Price_APB, 1, "\u20ac")
            }, null)
        }

        function Gn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/APB.png", "APB\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_APB, e.eur2usd, "$")
            }, null)
        }

        function Qn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-ad-page", [
                ["class", "count_switch_3"]
            ], null, null, null, m, a)), t["\u0275did"](1, 114688, null, 0, s, [], {
                imgPos: [0, "imgPos"],
                page_img: [1, "page_img"],
                page_title: [2, "page_title"],
                page_des2: [3, "page_des2"],
                priceType: [4, "priceType"],
                exRate: [5, "exRate"],
                moneyType: [6, "moneyType"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "right", "/assets/img/APB.png", "APB\uff1a\u7535\u8111\u7248\u89c6\u9891\u64ad\u653e\u9875\u6a2a\u5e45", "\u652f\u6301\u8bbe\u5907\uff1aPC\u3001MAC", e.Price_APB, e.eur2cny, "\xa5")
            }, null)
        }

        function Jn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 295, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](3, 0, null, null, 19, "div", [
                ["class", "lift_nav"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](5, 0, null, null, 16, "nav", [
                ["class", "fixed_nav"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](7, 0, null, null, 3, "a", [
                ["class", "btn-top"]
            ], [
                [2, "active", null]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0;
                return "click" === l && (i = !1 !== n.component.scrollTo(t["\u0275nov"](n, 89)) && i), i
            }, null, null)), t["\u0275did"](8, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](9, {
                active: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n                \u8ba1\u8d39\u5e7f\u544a\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](12, 0, null, null, 3, "a", [
                ["class", "btn"]
            ], [
                [2, "active", null]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0;
                return "click" === l && (i = !1 !== n.component.scrollTo(t["\u0275nov"](n, 124)) && i), i
            }, null, null)), t["\u0275did"](13, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](14, {
                active: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n                \u9875\u9762\u5e7f\u544a\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](17, 0, null, null, 3, "a", [
                ["class", "btn-bottom"]
            ], [
                [2, "active", null]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0;
                return "click" === l && (i = !1 !== n.component.scrollTo(t["\u0275nov"](n, 268)) && i), i
            }, null, null)), t["\u0275did"](18, 278528, null, 0, r.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](19, {
                active: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n                \u9884\u5b9a\u72b6\u51b5\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](24, 0, null, null, 45, "div", [
                ["class", "faq_tips"]
            ], [
                [2, "active", null]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](26, 0, null, null, 6, "div", [
                ["class", "faq_title"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](28, 0, null, null, 0, "span", [
                ["class", "dn-icon icon-help"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](30, 0, null, null, 1, "span", [
                ["class", "title-font"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u5e38\u89c1\u95ee\u9898"])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](34, 0, null, null, 34, "div", [
                ["class", "faq_question"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](36, 0, null, null, 31, "ol", [
                ["class", "_questions"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](38, 0, null, null, 8, "li", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](40, 0, null, null, 5, "span", [
                ["class", "ql"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](42, 0, null, null, 2, "a", [
                ["routerLink", "/ad-center/faq"]
            ], [
                [1, "target", 0],
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0,
                    u = n.component;
                return "click" === l && (i = !1 !== t["\u0275nov"](n, 43).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i), "click" === l && (i = !1 !== u.scrollIntoView("design_faq") && i), i
            }, null, null)), t["\u0275did"](43, 671744, null, 0, v.q, [v.o, v.a, r.LocationStrategy], {
                routerLink: [0, "routerLink"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\u5e7f\u544a\u89c6\u9891\u7531\u6211\u81ea\u5df1\u63d0\u4f9b\uff1f\u8fd8\u662f\u4f60\u4eec\u4f1a\u5e2e\u6211\u5236\u4f5c\uff1f"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](48, 0, null, null, 8, "li", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](50, 0, null, null, 5, "span", [
                ["class", "ql"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](52, 0, null, null, 2, "a", [
                ["routerLink", "/ad-center/design"]
            ], [
                [1, "target", 0],
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0,
                    u = n.component;
                return "click" === l && (i = !1 !== t["\u0275nov"](n, 53).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i), "click" === l && (i = !1 !== u.scrollIntoView("design_type") && i), i
            }, null, null)), t["\u0275did"](53, 671744, null, 0, v.q, [v.o, v.a, r.LocationStrategy], {
                routerLink: [0, "routerLink"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\u6211\u81ea\u5df1\u63d0\u4f9b\u89c6\u9891\u7684\u8bdd\uff0c\u8981\u63d0\u4f9b\u4ec0\u4e48\u89c4\u683c\u7684\uff1f"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](58, 0, null, null, 8, "li", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](60, 0, null, null, 5, "span", [
                ["class", "ql"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](62, 0, null, null, 2, "a", [
                ["routerLink", "/ad-center/payment"]
            ], [
                [1, "target", 0],
                [8, "href", 4]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0,
                    u = n.component;
                return "click" === l && (i = !1 !== t["\u0275nov"](n, 63).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && i), "click" === l && (i = !1 !== u.scrollIntoView("payment_type") && i), i
            }, null, null)), t["\u0275did"](63, 671744, null, 0, v.q, [v.o, v.a, r.LocationStrategy], {
                routerLink: [0, "routerLink"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\u5982\u4f55\u5145\u503c\u5e7f\u544a\u8d39\uff1f"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](71, 0, null, null, 223, "div", [
                ["class", "main_container"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](73, 0, null, null, 220, "div", [
                ["id", "container"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](75, 0, null, null, 217, "div", [
                ["class", "ads_intro"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](77, 0, null, null, 10, "span", [
                ["class", "content_title"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](79, 0, null, null, 7, "span", [
                ["class", "title_container1"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](81, 0, null, null, 1, "span", [
                ["class", "title_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u8ba1\u8d39\u5e7f\u544a"])), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](84, 0, null, null, 1, "span", [
                ["class", "title_text2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u6839\u636e\u5c55\u793a\u7387\u548c\u70b9\u51fb\u7387\u6536\u8d39\uff0c\u7528\u6237\u6bcf\u4e00\u6b21\u70b9\u51fb\u5e7f\u544a\u90fd\u80fd\u4ea7\u751f\u5b9e\u9645\u6548\u76ca\uff0c\u4fdd\u8bc1\u6bcf\u5206\u94b1\u90fd\u82b1\u5728\u5200\u5203\u4e0a\uff01"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](89, 0, [
                ["count_content_1", 1]
            ], null, 15, "div", [
                ["class", "intro_content_1"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](91, 0, null, null, 12, "span", [], null, null, null, null, null)), t["\u0275did"](92, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Cn)), t["\u0275did"](96, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Pn)), t["\u0275did"](99, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Sn)), t["\u0275did"](102, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](107, 0, null, null, 3, "div", [
                ["class", "fix_gap_ctn"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](109, 0, null, null, 0, "div", [
                ["class", "fix_gap"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](112, 0, null, null, 10, "span", [
                ["class", "content_title2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](114, 0, null, null, 7, "span", [
                ["class", "title_container2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](116, 0, null, null, 1, "span", [
                ["class", "title_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u9875\u9762\u5e7f\u544a"])), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](119, 0, null, null, 1, "span", [
                ["class", "title_text2"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u9875\u9762\u5e7f\u544a\u6309\u6708\u6216\u6309\u5929\u6536\u53d6\u56fa\u5b9a\u4ef7\u683c\u3002\u4e00\u6b21\u6027\u6295\u653e3\u4e2a\u6708\u4f18\u60e010%\uff0c\u4e00\u6b21\u6027\u6295\u653e6\u4e2a\u6708\u4f18\u60e020%\u3002"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](124, 0, [
                ["page_content_9", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](126, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](127, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Rn)), t["\u0275did"](130, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, On)), t["\u0275did"](133, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Mn)), t["\u0275did"](136, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](140, 0, [
                ["page_content_1", 1]
            ], null, 14, "div", [
                ["class", "intro_content_1"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](142, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](143, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Tn)), t["\u0275did"](146, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, kn)), t["\u0275did"](149, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, An)), t["\u0275did"](152, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](156, 0, [
                ["page_content_2", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](158, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](159, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, In)), t["\u0275did"](162, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, En)), t["\u0275did"](165, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Nn)), t["\u0275did"](168, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](172, 0, [
                ["page_content_3", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](174, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](175, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Dn)), t["\u0275did"](178, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Vn)), t["\u0275did"](181, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Un)), t["\u0275did"](184, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](188, 0, [
                ["page_content_4", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](190, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](191, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, jn)), t["\u0275did"](194, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, zn)), t["\u0275did"](197, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Bn)), t["\u0275did"](200, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](204, 0, [
                ["page_content_5", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](206, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](207, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ln)), t["\u0275did"](210, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Fn)), t["\u0275did"](213, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Kn)), t["\u0275did"](216, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](220, 0, [
                ["page_content_6", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](222, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](223, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Hn)), t["\u0275did"](226, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, $n)), t["\u0275did"](229, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Yn)), t["\u0275did"](232, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](236, 0, [
                ["page_content_7", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](238, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](239, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, qn)), t["\u0275did"](242, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Wn)), t["\u0275did"](245, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Zn)), t["\u0275did"](248, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](252, 0, [
                ["page_content_8", 1]
            ], null, 14, "div", [
                ["class", "intro_content_2"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](254, 0, null, null, 11, "span", [], null, null, null, null, null)), t["\u0275did"](255, 16384, null, 0, r.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Xn)), t["\u0275did"](258, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Gn)), t["\u0275did"](261, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Qn)), t["\u0275did"](264, 278528, null, 0, r.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, r.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](268, 0, [
                ["page_content_10", 1]
            ], null, 4, "div", [
                ["class", "status_content"],
                ["name", "fullpagescroll"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](270, 0, null, null, 1, "app-slot-form-pc", [], null, null, null, B, x)), t["\u0275did"](271, 4308992, null, 0, y, [_.a], null, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n\n                "])), (n()(), t["\u0275eld"](274, 0, null, null, 17, "span", [
                ["class", "content_3"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](276, 0, null, null, 1, "span", [
                ["class", "customer_icon_title"]
            ], null, null, null, null, null)), (n()(), t["\u0275eld"](277, 0, null, null, 0, "img", [
                ["src", "../assets/icon/\u54a8\u8be2\u5ba2\u670d.png"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](279, 0, null, null, 6, "span", [
                ["class", "customer_text"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](281, 0, null, null, 1, "p", [
                ["id", "p7"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u66f4\u591a\u95ee\u9898\u8bf7\u54a8\u8be2\u5fae\u4fe1\u5ba2\u670d"])), (n()(), t["\u0275ted"](-1, null, [" "])), (n()(), t["\u0275eld"](284, 0, null, null, 0, "img", [
                ["class", "enter-icon"],
                ["src", "../assets/icon/\u56de\u8f66.png"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](287, 0, null, null, 3, "div", [
                ["class", "wechat-helper"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](289, 0, null, null, 0, "img", [
                ["class", "mb-2"],
                ["src", "/assets/images/wechat/ad.jpg"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 8, 0, "btn-top", n(l, 9, 0, e.isActive == t["\u0275nov"](l, 89))), n(l, 13, 0, "btn", n(l, 14, 0, e.isActive == t["\u0275nov"](l, 124))), n(l, 18, 0, "btn-bottom", n(l, 19, 0, e.isActive == t["\u0275nov"](l, 268))), n(l, 43, 0, "/ad-center/faq"), n(l, 53, 0, "/ad-center/design"), n(l, 63, 0, "/ad-center/payment"), n(l, 92, 0, e.currency), n(l, 96, 0, "EUR"), n(l, 99, 0, "USD"), n(l, 102, 0, "CNY"), n(l, 127, 0, e.currency), n(l, 130, 0, "EUR"), n(l, 133, 0, "USD"), n(l, 136, 0, "CNY"), n(l, 143, 0, e.currency), n(l, 146, 0, "EUR"), n(l, 149, 0, "USD"), n(l, 152, 0, "CNY"), n(l, 159, 0, e.currency), n(l, 162, 0, "EUR"), n(l, 165, 0, "USD"), n(l, 168, 0, "CNY"), n(l, 175, 0, e.currency), n(l, 178, 0, "EUR"), n(l, 181, 0, "USD"), n(l, 184, 0, "CNY"), n(l, 191, 0, e.currency), n(l, 194, 0, "EUR"), n(l, 197, 0, "USD"), n(l, 200, 0, "CNY"), n(l, 207, 0, e.currency), n(l, 210, 0, "EUR"), n(l, 213, 0, "USD"), n(l, 216, 0, "CNY"), n(l, 223, 0, e.currency), n(l, 226, 0, "EUR"), n(l, 229, 0, "USD"), n(l, 232, 0, "CNY"), n(l, 239, 0, e.currency), n(l, 242, 0, "EUR"), n(l, 245, 0, "USD"), n(l, 248, 0, "CNY"), n(l, 255, 0, e.currency), n(l, 258, 0, "EUR"), n(l, 261, 0, "USD"), n(l, 264, 0, "CNY"), n(l, 271, 0)
            }, function(n, l) {
                var e = l.component;
                n(l, 7, 0, e.scroll >= 85 && e.scroll < 230), n(l, 12, 0, e.scroll >= 230 && e.scroll < 1950), n(l, 17, 0, e.scroll >= 1950 && e.scroll < 2250), n(l, 24, 0, e.scroll > 30 && e.scroll <= 170), n(l, 42, 0, t["\u0275nov"](l, 43).target, t["\u0275nov"](l, 43).href), n(l, 52, 0, t["\u0275nov"](l, 53).target, t["\u0275nov"](l, 53).href), n(l, 62, 0, t["\u0275nov"](l, 63).target, t["\u0275nov"](l, 63).href)
            })
        }

        function nl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, wn)), t["\u0275did"](1, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n\n"])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Jn)), t["\u0275did"](4, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "commonMode" === e.mode), n(l, 4, 0, "adultMode" === e.mode)
            }, null)
        }
        var ll = t["\u0275ccf"]("app-ad-pc", L.a, function(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "app-ad-pc", [], null, null, null, nl, H)), t["\u0275did"](1, 4440064, null, 0, L.a, [_.a, t.Renderer2, F.Title, K.a], null, null)], function(n, l) {
                n(l, 1, 0)
            }, null)
        }, {}, {}, [])
    },
    BVs2: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        }), e("ItHS");
        var t = e("SALZ"),
            i = function() {
                function n(n) {
                    this.http = n, this.base_url = "https://adc.dnvod.tv", this.price_regionsUrl = this.base_url + "/price/GetRegions", this.eur2usd_rateUrl = this.base_url + "/price/GetCurrentRate?rate=1", this.eur2cny_rateUrl = this.base_url + "/price/GetCurrentRate?rate=2", this.price_pc_allUrl = this.base_url + "/price/GetAllPositionPrice?&set=11", this.price_mobile_allUrl = this.base_url + "/price/GetAllPositionPrice?&set=2", this.price_A_pc_allUrl = this.base_url + "/price/GetAllPositionPrice?&set=11&isA=true", this.price_A_mobile_allUrl = this.base_url + "/price/GetAllPositionPrice?&set=2&isA=true", this.price_mtUrl = this.base_url + "/price/getadprice?position=mt", this.price_misUrl = this.base_url + "/price/getadprice?position=mis", this.price_mibUrl = this.base_url + "/price/getadprice?position=mib", this.price_mlbUrl = this.base_url + "/price/getadprice?position=mlb", this.price_mdbUrl = this.base_url + "/price/getadprice?position=mdb", this.price_mpcUrl = this.base_url + "/price/getadprice?position=mpc1", this.price_mpc2Url = this.base_url + "/price/getadprice?position=mpc2", this.price_mpc3Url = this.base_url + "/price/getadprice?position=mpc3", this.price_mpc4Url = this.base_url + "/price/getadprice?position=mpc4", this.price_mpc5Url = this.base_url + "/price/getadprice?position=mpc5", this.price_mpc6Url = this.base_url + "/price/getadprice?position=mpc6", this.price_mpbUrl = this.base_url + "/price/getadprice?position=mpb", this.price_mpzUrl = this.base_url + "/price/getadprice?position=pz1", this.price_AmtUrl = this.base_url + "/price/getadprice?position=amt", this.price_AmisUrl = this.base_url + "/price/getadprice?position=amis", this.price_AmibUrl = this.base_url + "/price/getadprice?position=amib", this.price_AmlbUrl = this.base_url + "/price/getadprice?position=amlb", this.price_AmdbUrl = this.base_url + "/price/getadprice?position=amdb", this.price_AmpcUrl = this.base_url + "/price/getadprice?position=ampc1", this.price_Ampc2Url = this.base_url + "/price/getadprice?position=ampc2", this.price_Ampc3Url = this.base_url + "/price/getadprice?position=ampc3", this.price_Ampc4Url = this.base_url + "/price/getadprice?position=ampc4", this.price_Ampc5Url = this.base_url + "/price/getadprice?position=ampc5", this.price_Ampc6Url = this.base_url + "/price/getadprice?position=ampc6", this.price_AmpbUrl = this.base_url + "/price/getadprice?position=ampb", this.price_AmpzUrl = this.base_url + "/price/getadprice?position=apz1", this.price_isUrl = this.base_url + "/price/getadprice?position=is", this.price_lsUrl = this.base_url + "/price/getadprice?position=ls", this.price_lb1Url = this.base_url + "/price/getadprice?position=lb1", this.price_lb2Url = this.base_url + "/price/getadprice?position=lb2", this.price_drUrl = this.base_url + "/price/getadprice?position=dr", this.price_dbUrl = this.base_url + "/price/getadprice?position=db", this.price_pr1Url = this.base_url + "/price/getadprice?position=pr1", this.price_pr2Url = this.base_url + "/price/getadprice?position=pr2", this.price_pcUrl = this.base_url + "/price/getadprice?position=pc1", this.price_pc2Url = this.base_url + "/price/getadprice?position=pc2", this.price_pc3Url = this.base_url + "/price/getadprice?position=pc3", this.price_pc4Url = this.base_url + "/price/getadprice?position=pc4", this.price_pc5Url = this.base_url + "/price/getadprice?position=pc5", this.price_pc6Url = this.base_url + "/price/getadprice?position=pc6", this.price_pzUrl = this.base_url + "/price/getadprice?position=pz1", this.price_pz2Url = this.base_url + "/price/getadprice?position=pz2", this.price_pz3Url = this.base_url + "/price/getadprice?position=pz3", this.price_pz4Url = this.base_url + "/price/getadprice?position=pz4", this.price_pz5Url = this.base_url + "/price/getadprice?position=pz5", this.price_pz6Url = this.base_url + "/price/getadprice?position=pz6", this.price_pbUrl = this.base_url + "/price/getadprice?position=pb", this.price_AisUrl = this.base_url + "/price/getadprice?position=ais", this.price_AlsUrl = this.base_url + "/price/getadprice?position=als", this.price_Alb1Url = this.base_url + "/price/getadprice?position=alb1", this.price_Alb2Url = this.base_url + "/price/getadprice?position=alb2", this.price_AdrUrl = this.base_url + "/price/getadprice?position=adr", this.price_AdbUrl = this.base_url + "/price/getadprice?position=adb", this.price_Apr1Url = this.base_url + "/price/getadprice?position=apr1", this.price_Apr2Url = this.base_url + "/price/getadprice?position=apr2", this.price_ApcUrl = this.base_url + "/price/getadprice?position=apc1", this.price_Apc2Url = this.base_url + "/price/getadprice?position=apc2", this.price_Apc3Url = this.base_url + "/price/getadprice?position=apc3", this.price_Apc4Url = this.base_url + "/price/getadprice?position=apc4", this.price_Apc5Url = this.base_url + "/price/getadprice?position=apc5", this.price_Apc6Url = this.base_url + "/price/getadprice?position=apc6", this.price_ApzUrl = this.base_url + "/price/getadprice?position=apz1", this.price_Apz2Url = this.base_url + "/price/getadprice?position=apz2", this.price_Apz3Url = this.base_url + "/price/getadprice?position=apz3", this.price_Apz4Url = this.base_url + "/price/getadprice?position=apz4", this.price_Apz5Url = this.base_url + "/price/getadprice?position=apz5", this.price_Apz6Url = this.base_url + "/price/getadprice?position=apz6", this.price_ApbUrl = this.base_url + "/price/getadprice?position=apb"
                }
                return n.prototype.getMultiplePrice = function() {
                    var n = this.http.get(this.price_isUrl),
                        l = this.http.get(this.price_mtUrl),
                        e = this.http.get(this.price_mpbUrl),
                        i = this.http.get(this.price_drUrl),
                        u = this.http.get(this.price_dbUrl),
                        o = this.http.get(this.price_pr1Url),
                        r = this.http.get(this.price_pr2Url),
                        s = this.http.get(this.price_pbUrl),
                        a = this.http.get(this.price_pzUrl),
                        c = this.http.get(this.eur2usd_rateUrl),
                        d = this.http.get(this.eur2cny_rateUrl);
                    return Object(t.a)([n, l, e, i, u, o, r, s, a, c, d])
                }, n.prototype.getMultiplePrice_A = function() {
                    var n = this.http.get(this.price_AisUrl),
                        l = this.http.get(this.price_AmtUrl),
                        e = this.http.get(this.price_AmpbUrl),
                        i = this.http.get(this.price_AdrUrl),
                        u = this.http.get(this.price_AdbUrl),
                        o = this.http.get(this.price_Apr1Url),
                        r = this.http.get(this.price_Apr2Url),
                        s = this.http.get(this.price_ApbUrl),
                        a = this.http.get(this.price_ApzUrl),
                        c = this.http.get(this.eur2usd_rateUrl),
                        d = this.http.get(this.eur2cny_rateUrl);
                    return Object(t.a)([n, l, e, i, u, o, r, s, a, c, d])
                }, n.prototype.getAllStatus = function() {
                    var n = this.http.get(this.price_pc_allUrl),
                        l = this.http.get(this.price_regionsUrl);
                    return Object(t.a)([n, l])
                }, n.prototype.getAllStatus_A = function() {
                    var n = this.http.get(this.price_A_pc_allUrl),
                        l = this.http.get(this.price_regionsUrl);
                    return Object(t.a)([n, l])
                }, n.prototype.getPricePcAll = function() {
                    return this.http.get(this.price_pc_allUrl)
                }, n.prototype.getPriceMobileAll = function() {
                    return this.http.get(this.price_mobile_allUrl)
                }, n.prototype.getAPricePcAll = function() {
                    return this.http.get(this.price_A_pc_allUrl)
                }, n.prototype.getAPriceMobileAll = function() {
                    return this.http.get(this.price_A_mobile_allUrl)
                }, n.prototype.getPriceMt = function() {
                    return this.http.get(this.price_mtUrl)
                }, n.prototype.getPriceMis = function() {
                    return this.http.get(this.price_misUrl)
                }, n.prototype.getPriceMib = function() {
                    return this.http.get(this.price_mibUrl)
                }, n.prototype.getPriceMlb = function() {
                    return this.http.get(this.price_mlbUrl)
                }, n.prototype.getPriceMdb = function() {
                    return this.http.get(this.price_mdbUrl)
                }, n.prototype.getPriceMpc = function() {
                    return this.http.get(this.price_mpcUrl)
                }, n.prototype.getPriceMpc2 = function() {
                    return this.http.get(this.price_mpc2Url)
                }, n.prototype.getPriceMpc3 = function() {
                    return this.http.get(this.price_mpc3Url)
                }, n.prototype.getPriceMpc4 = function() {
                    return this.http.get(this.price_mpc4Url)
                }, n.prototype.getPriceMpc5 = function() {
                    return this.http.get(this.price_mpc5Url)
                }, n.prototype.getPriceMpc6 = function() {
                    return this.http.get(this.price_mpc6Url)
                }, n.prototype.getPriceMpb = function() {
                    return this.http.get(this.price_mpbUrl)
                }, n.prototype.getPriceMpz = function() {
                    return this.http.get(this.price_mpzUrl)
                }, n.prototype.getPriceRegion = function() {
                    return this.http.get(this.price_regionsUrl)
                }, n.prototype.getPriceIS = function() {
                    return this.http.get(this.price_isUrl)
                }, n.prototype.getPriceLS = function() {
                    return this.http.get(this.price_lsUrl)
                }, n.prototype.getPriceLB1 = function() {
                    return this.http.get(this.price_lb1Url)
                }, n.prototype.getPriceLB2 = function() {
                    return this.http.get(this.price_lb2Url)
                }, n.prototype.getPriceDR = function() {
                    return this.http.get(this.price_drUrl)
                }, n.prototype.getPriceDB = function() {
                    return this.http.get(this.price_dbUrl)
                }, n.prototype.getPricePR1 = function() {
                    return this.http.get(this.price_pr1Url)
                }, n.prototype.getPricePR2 = function() {
                    return this.http.get(this.price_pr2Url)
                }, n.prototype.getPricePC = function() {
                    return this.http.get(this.price_pcUrl)
                }, n.prototype.getPricePC2 = function() {
                    return this.http.get(this.price_pc2Url)
                }, n.prototype.getPricePC3 = function() {
                    return this.http.get(this.price_pc3Url)
                }, n.prototype.getPricePC4 = function() {
                    return this.http.get(this.price_pc4Url)
                }, n.prototype.getPricePC5 = function() {
                    return this.http.get(this.price_pc5Url)
                }, n.prototype.getPricePC6 = function() {
                    return this.http.get(this.price_pc6Url)
                }, n.prototype.getPricePZ = function() {
                    return this.http.get(this.price_pzUrl)
                }, n.prototype.getPricePZ2 = function() {
                    return this.http.get(this.price_pz2Url)
                }, n.prototype.getPricePZ3 = function() {
                    return this.http.get(this.price_pz3Url)
                }, n.prototype.getPricePZ4 = function() {
                    return this.http.get(this.price_pz4Url)
                }, n.prototype.getPricePZ5 = function() {
                    return this.http.get(this.price_pz5Url)
                }, n.prototype.getPricePZ6 = function() {
                    return this.http.get(this.price_pz6Url)
                }, n.prototype.getPricePB = function() {
                    return this.http.get(this.price_pbUrl)
                }, n.prototype.getEur2Usd = function() {
                    return this.http.get(this.eur2usd_rateUrl)
                }, n.prototype.getEur2Cny = function() {
                    return this.http.get(this.eur2cny_rateUrl)
                }, n.prototype.getPriceAMt = function() {
                    return this.http.get(this.price_AmtUrl)
                }, n.prototype.getPriceAMis = function() {
                    return this.http.get(this.price_AmisUrl)
                }, n.prototype.getPriceAMib = function() {
                    return this.http.get(this.price_AmibUrl)
                }, n.prototype.getPriceAMlb = function() {
                    return this.http.get(this.price_AmlbUrl)
                }, n.prototype.getPriceAMdb = function() {
                    return this.http.get(this.price_AmdbUrl)
                }, n.prototype.getPriceAMpc = function() {
                    return this.http.get(this.price_AmpcUrl)
                }, n.prototype.getPriceAMpc2 = function() {
                    return this.http.get(this.price_Ampc2Url)
                }, n.prototype.getPriceAMpc3 = function() {
                    return this.http.get(this.price_Ampc3Url)
                }, n.prototype.getPriceAMpc4 = function() {
                    return this.http.get(this.price_Ampc4Url)
                }, n.prototype.getPriceAMpc5 = function() {
                    return this.http.get(this.price_Ampc5Url)
                }, n.prototype.getPriceAMpc6 = function() {
                    return this.http.get(this.price_Ampc6Url)
                }, n.prototype.getPriceAMpb = function() {
                    return this.http.get(this.price_AmpbUrl)
                }, n.prototype.getPriceAMpz = function() {
                    return this.http.get(this.price_AmpzUrl)
                }, n.prototype.getPriceAIS = function() {
                    return this.http.get(this.price_AisUrl)
                }, n.prototype.getPriceALS = function() {
                    return this.http.get(this.price_AlsUrl)
                }, n.prototype.getPriceALB1 = function() {
                    return this.http.get(this.price_Alb1Url)
                }, n.prototype.getPriceALB2 = function() {
                    return this.http.get(this.price_Alb2Url)
                }, n.prototype.getPriceADR = function() {
                    return this.http.get(this.price_AdrUrl)
                }, n.prototype.getPriceADB = function() {
                    return this.http.get(this.price_AdbUrl)
                }, n.prototype.getPriceAPR1 = function() {
                    return this.http.get(this.price_Apr1Url)
                }, n.prototype.getPriceAPR2 = function() {
                    return this.http.get(this.price_Apr2Url)
                }, n.prototype.getPriceAPC = function() {
                    return this.http.get(this.price_ApcUrl)
                }, n.prototype.getPriceAPC2 = function() {
                    return this.http.get(this.price_Apc2Url)
                }, n.prototype.getPriceAPC3 = function() {
                    return this.http.get(this.price_Apc3Url)
                }, n.prototype.getPriceAPC4 = function() {
                    return this.http.get(this.price_Apc4Url)
                }, n.prototype.getPriceAPC5 = function() {
                    return this.http.get(this.price_Apc5Url)
                }, n.prototype.getPriceAPC6 = function() {
                    return this.http.get(this.price_Apc6Url)
                }, n.prototype.getPriceAPZ = function() {
                    return this.http.get(this.price_ApzUrl)
                }, n.prototype.getPriceAPZ2 = function() {
                    return this.http.get(this.price_Apz2Url)
                }, n.prototype.getPriceAPZ3 = function() {
                    return this.http.get(this.price_Apz3Url)
                }, n.prototype.getPriceAPZ4 = function() {
                    return this.http.get(this.price_Apz4Url)
                }, n.prototype.getPriceAPZ5 = function() {
                    return this.http.get(this.price_Apz5Url)
                }, n.prototype.getPriceAPZ6 = function() {
                    return this.http.get(this.price_Apz6Url)
                }, n.prototype.getPriceAPB = function() {
                    return this.http.get(this.price_ApbUrl)
                }, n
            }()
    },
    Dch9: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        });
        var t = e("WT6e"),
            i = (e("QO/w"), e("Ohpo"), function() {
                function n(n, l) {
                    this._userService = n, this.store = l, this.hideNameCardEvent = new t.EventEmitter, this.userLoadedEvent = new t.EventEmitter
                }
                return n.prototype.ngOnInit = function() {
                    this.userId && !this.user && (this.isLoading = !0)
                }, n.prototype.ngAfterViewInit = function() {
                    var n = this;
                    this.userId && !this.user && this._userService.getUserInfo(this.userId).subscribe(function(l) {
                        n.isLoading = !1, n.user = l, n.userLoadedEvent.emit(l)
                    })
                }, n.prototype.hideNamecard = function() {
                    this.hideNameCardEvent.emit(!0)
                }, n.prototype.onMouseLeave = function() {
                    this.hideNameCardEvent.emit(!0)
                }, n.prototype.logout = function() {
                    console.log("isme 1"), this._userService.logout()
                }, n
            }())
    },
    DvPt: function(n, l, e) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var t = e("/Zi0");
        l.SortablejsBindings = function() {
            function n(n) {
                this.bindings = n.map(function(n) {
                    return new t.SortablejsBinding(n)
                })
            }
            return n.prototype.injectIntoEvery = function(n, l) {
                this.bindings.forEach(function(e, t) {
                    return e.insert(n, l[t])
                })
            }, n.prototype.getFromEvery = function(n) {
                return this.bindings.map(function(l) {
                    return l.get(n)
                })
            }, n.prototype.extractFromEvery = function(n) {
                return this.bindings.map(function(l) {
                    return l.remove(n)
                })
            }, Object.defineProperty(n.prototype, "provided", {
                get: function() {
                    return !!this.bindings.length
                },
                enumerable: !0,
                configurable: !0
            }), n
        }()
    },
    Ilbw: function(n, l, e) {
        "use strict";
        var t = e("vx8o");
        l.dragula = t.default || t
    },
    IpMa: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return o
        }), e("D9YE");
        var t = e("+SoF"),
            i = e("aaAU"),
            u = e("QO/w"),
            o = (e("FI7P"), e("zP1J"), e("bvcM"), e("Snuo"), function() {
                function n(n, l, e, t, i, u, o, r) {
                    var s = this;
                    this._commentService = n, this._dnDialogService = l, this._messageDialogService = e, this._commentBoxService = t, this._notificationService = i, this.pageScrollService = u, this.store = o, this.document = r, this.isHot = !1, this.isLast = !1, this.showControls = !0, this.voting = !1, this.deleting = !1, this.showNamecard = !1, this.showReplyPopup = !1, o.subscribe(function() {
                        return s.readState()
                    }), this.readState()
                }
                return n.prototype.ngOnInit = function() {
                    this.comment.pollId && (this.showControls = !1)
                }, n.prototype.getStatusText = function(n) {
                    switch (n) {
                        case 0:
                            return "\u5df2\u5c01\u53f7";
                        case 2:
                            return "\u5df2\u7981\u8a00";
                        case 3:
                            return "\u5df2\u51bb\u7ed3"
                    }
                    return ""
                }, n.prototype.readState = function() {
                    var n = this.store.getState().users;
                    this.user = new u.a(!0), Object.assign(this.user, n.currentUser)
                }, n.prototype.likeComment = function() {
                    var n = this;
                    if (!this.voting) {
                        if (this.comment.deleted) return this._messageDialogService.setState({
                            type: t.b.Emoji1,
                            message: "\u8be5\u8bc4\u8bba\u5df2\u7ecf\u88ab\u5220\u9664"
                        }), void this._dnDialogService.open("message-dialog");
                        if (this.comment.liked) return this._messageDialogService.setState({
                            type: t.b.Emoji1,
                            message: "\u4e0d\u53ef\u4ee5\u91cd\u590d\u6309\u8d5e"
                        }), void this._dnDialogService.open("message-dialog");
                        this.voting = !0, this._commentService.likeComment(this.comment.commendId).subscribe(function(l) {
                            n.voting = !1, n.comment.liked = !0, n.comment.likes += 1
                        })
                    }
                }, n.prototype.deleteComment = function(n) {
                    var l = this;
                    if (this.comment.deleted) return this._messageDialogService.setState({
                        type: t.b.Emoji1,
                        message: "\u8be5\u8bc4\u8bba\u5df2\u7ecf\u88ab\u5220\u9664"
                    }), void this._dnDialogService.open("message-dialog");
                    this.deleting = !0, this._commentService.removeComment(this.user, n).subscribe(function(n) {
                        l.deleting = !1, l.comment.content = "\u8be5\u8bc4\u8bba\u5df2\u88ab\u7528\u6237\u5220\u9664\u3002", l._messageDialogService.setState({
                            type: t.b.Success,
                            message: n.ShowMsg
                        }), l._dnDialogService.open("message-dialog")
                    })
                }, n.prototype.onAvatarMouseEnter = function() {
                    this.showNamecard = !0, this.showReplyPopup = !1
                }, n.prototype.onAvatarMouseLeave = function() {
                    this.showNamecard = !1, this.showReplyPopup = !1
                }, n.prototype.onUserLoaded = function(n) {
                    this.publisher = n
                }, n.prototype.hideNamecard = function() {
                    this.showNamecard = !1
                }, n.prototype.hideReplyViewer = function() {
                    this.showReplyPopup = !1
                }, n.prototype.reply = function() {
                    var n = this;
                    if (this.comment.deleted) return this._messageDialogService.setState({
                        type: t.b.Emoji1,
                        message: "\u8be5\u8bc4\u8bba\u5df2\u7ecf\u88ab\u5220\u9664"
                    }), void this._dnDialogService.open("message-dialog");
                    this.user.id === this.comment.replyUserId && this._notificationService.markANotificationsAsReadByMessageId(this.comment.commendId, this.user).subscribe(function(l) {
                        0 === l[0].ret && n._notificationService.changeNotificationStatus(!0)
                    }), this.store.dispatch({
                        type: i.b,
                        reply: {
                            author: this.comment.author,
                            authorId: this.comment.authorId,
                            avatar: this.comment.avatar,
                            commendId: this.comment.commendId,
                            content: this.comment.content,
                            deleted: this.comment.deleted,
                            floor: this.comment.floor,
                            liked: this.comment.liked,
                            likes: this.comment.likes,
                            published: this.comment.published,
                            replyId: this.comment.replyId,
                            userLevelSymbol: this.comment.userLevelSymbol,
                            videoId: this.comment.videoId
                        }
                    })
                }, n.prototype.showReplied = function(n) {
                    0 !== this.comment.replyId ? "FONT" === n.target.tagName || "FONT" === n.target.parentNode.tagName ? (this.commentViewerId = this.comment.replyId, this.showReplyPopup = !0, this.showNamecard = !1) : (this.showNamecard = !1, this.showReplyPopup = !1) : this.showNamecard = !1
                }, n.prototype.formatContent = function(n) {
                    return this.user && this.user.id === this.comment.replyUserId ? n.replace(/\u56de\u590d\u4e86.*\<\/font>/g, "\u56de\u590d\u4e86\u60a8 [ @ " + this.comment.replyFloor + " \u697c ]</font> ") : n
                }, n
            }())
    },
    KzcY: function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = e("Xjw4");
        e("OILR"), e.d(l, "a", function() {
            return u
        }), l.b = function(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, o)), t["\u0275did"](1, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275and"](16777216, null, null, 1, null, r)), t["\u0275did"](4, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "large" === e.size), n(l, 4, 0, "medium" === e.size)
            }, null)
        };
        var u = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                [".block-title[_ngcontent-%COMP%]{display:block;padding:5px 0 5px 16px;position:relative;margin-bottom:20px}.block-title[_ngcontent-%COMP%]:after{content:'';display:block;position:absolute;left:0;top:3px;bottom:5px;width:5px;background-color:red}"]
            ],
            data: {}
        });

        function o(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "h3", [
                ["class", "block-title"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""]))], null, function(n, l) {
                n(l, 1, 0, l.component.title)
            })
        }

        function r(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "h4", [
                ["class", "block-title"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""]))], null, function(n, l) {
                n(l, 1, 0, l.component.title)
            })
        }
    },
    LKU8: function(n, l, e) {
        "use strict";
        var t = e("TToO").__decorate,
            i = e("Ilbw"),
            u = e("WT6e"),
            o = function() {
                function n() {
                    this.cancel = new u.EventEmitter, this.cloned = new u.EventEmitter, this.drag = new u.EventEmitter, this.dragend = new u.EventEmitter, this.drop = new u.EventEmitter, this.out = new u.EventEmitter, this.over = new u.EventEmitter, this.remove = new u.EventEmitter, this.shadow = new u.EventEmitter, this.dropModel = new u.EventEmitter, this.removeModel = new u.EventEmitter, this.events = ["cancel", "cloned", "drag", "dragend", "drop", "out", "over", "remove", "shadow", "dropModel", "removeModel"], this.bags = []
                }
                return n.prototype.add = function(n, l) {
                    var e = this.find(n);
                    if (e) throw new Error('Bag named: "' + n + '" already exists.');
                    return this.bags.push(e = {
                        name: n,
                        drake: l
                    }), l.models && this.handleModels(n, l), e.initEvents || this.setupEvents(e), e
                }, n.prototype.find = function(n) {
                    for (var l = 0, e = this.bags; l < e.length; l++) {
                        var t = e[l];
                        if (t.name === n) return t
                    }
                }, n.prototype.destroy = function(n) {
                    var l = this.find(n),
                        e = this.bags.indexOf(l);
                    this.bags.splice(e, 1), l.drake.destroy()
                }, n.prototype.setOptions = function(n, l) {
                    var e = this.add(n, i.dragula(l));
                    this.handleModels(n, e.drake)
                }, n.prototype.handleModels = function(n, l) {
                    var e, t, i, u, o = this;
                    l.on("remove", function(e, i) {
                        l.models && ((u = l.models[l.containers.indexOf(i)]).splice(t, 1), o.removeModel.emit([n, e, i]))
                    }), l.on("drag", function(n, l) {
                        e = n, t = o.domIndexOf(n, l)
                    }), l.on("drop", function(r, s, a) {
                        if (l.models && s) {
                            if (i = o.domIndexOf(r, s), u = l.models[l.containers.indexOf(a)], s === a) u.splice(i, 0, u.splice(t, 1)[0]);
                            else {
                                var c = e === r,
                                    d = l.models[l.containers.indexOf(s)],
                                    p = c ? u[t] : JSON.parse(JSON.stringify(u[t]));
                                c && u.splice(t, 1), d.splice(i, 0, p), s.removeChild(r)
                            }
                            o.dropModel.emit([n, r, s, a])
                        }
                    })
                }, n.prototype.setupEvents = function(n) {
                    n.initEvents = !0;
                    var l = this;
                    this.events.forEach(function(e) {
                        n.drake.on(e, function() {
                            var t = Array.prototype.slice.call(arguments);
                            l[e].emit([n.name].concat(t))
                        })
                    })
                }, n.prototype.domIndexOf = function(n, l) {
                    return Array.prototype.indexOf.call(l.children, n)
                }, n
            }();
        o = t([u.Injectable()], o), l.DragulaService = o
    },
    Lokx: function(n, l, e) {
        var t, i;
        ! function(u) {
            "use strict";
            void 0 === (i = "function" == typeof(t = function() {
                if ("undefined" == typeof window || !window.document) return function() {
                    throw new Error("Sortable.js requires a window with a document")
                };
                var n, l, e, t, i, u, o, r, s, a, c, d, p, g, f, h, m, v, _, b, y, x = {},
                    w = /\s+/g,
                    C = /left|right|inline/,
                    P = "Sortable" + (new Date).getTime(),
                    S = window,
                    R = S.document,
                    O = S.parseInt,
                    M = S.setTimeout,
                    T = S.jQuery || S.Zepto,
                    k = S.Polymer,
                    A = !1,
                    I = "draggable" in R.createElement("div"),
                    E = !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((y = R.createElement("x")).style.cssText = "pointer-events:auto", "auto" === y.style.pointerEvents),
                    N = !1,
                    D = Math.abs,
                    V = Math.min,
                    U = [],
                    j = [],
                    z = tn(function(n, l, e) {
                        if (e && l.scroll) {
                            var t, i, u, o, c, d, p = e[P],
                                g = l.scrollSensitivity,
                                f = l.scrollSpeed,
                                h = n.clientX,
                                m = n.clientY,
                                v = window.innerWidth,
                                _ = window.innerHeight;
                            if (s !== e && (s = e, a = l.scrollFn, !0 === (r = l.scroll))) {
                                r = e;
                                do {
                                    if (r.offsetWidth < r.scrollWidth || r.offsetHeight < r.scrollHeight) break
                                } while (r = r.parentNode)
                            }
                            r && (t = r, i = r.getBoundingClientRect(), u = (D(i.right - h) <= g) - (D(i.left - h) <= g), o = (D(i.bottom - m) <= g) - (D(i.top - m) <= g)), u || o || (o = (_ - m <= g) - (m <= g), ((u = (v - h <= g) - (h <= g)) || o) && (t = S)), x.vx === u && x.vy === o && x.el === t || (x.el = t, x.vx = u, x.vy = o, clearInterval(x.pid), t && (x.pid = setInterval(function() {
                                if (d = o ? o * f : 0, c = u ? u * f : 0, "function" == typeof a) return a.call(p, c, d, n);
                                t === S ? S.scrollTo(S.pageXOffset + c, S.pageYOffset + d) : (t.scrollTop += d, t.scrollLeft += c)
                            }, 24)))
                        }
                    }, 30),
                    B = function(n) {
                        function l(n, l) {
                            return void 0 !== n && !0 !== n || (n = e.name), "function" == typeof n ? n : function(e, t) {
                                var i = t.options.group.name;
                                return l ? n : n && (n.join ? n.indexOf(i) > -1 : i == n)
                            }
                        }
                        var e = {},
                            t = n.group;
                        t && "object" == typeof t || (t = {
                            name: t
                        }), e.name = t.name, e.checkPull = l(t.pull, !0), e.checkPut = l(t.put), e.revertClone = t.revertClone, n.group = e
                    };
                try {
                    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            A = {
                                capture: !1,
                                passive: !1
                            }
                        }
                    }))
                } catch (n) {}

                function L(n, l) {
                    if (!n || !n.nodeType || 1 !== n.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(n);
                    this.el = n, this.options = l = un({}, l), n[P] = this;
                    var e = {
                        group: Math.random(),
                        sort: !0,
                        disabled: !1,
                        store: null,
                        handle: null,
                        scroll: !0,
                        scrollSensitivity: 30,
                        scrollSpeed: 10,
                        draggable: /[uo]l/i.test(n.nodeName) ? "li" : ">*",
                        ghostClass: "sortable-ghost",
                        chosenClass: "sortable-chosen",
                        dragClass: "sortable-drag",
                        ignore: "a, img",
                        filter: null,
                        preventOnFilter: !0,
                        animation: 0,
                        setData: function(n, l) {
                            n.setData("Text", l.textContent)
                        },
                        dropBubble: !1,
                        dragoverBubble: !1,
                        dataIdAttr: "data-id",
                        delay: 0,
                        forceFallback: !1,
                        fallbackClass: "sortable-fallback",
                        fallbackOnBody: !1,
                        fallbackTolerance: 0,
                        fallbackOffset: {
                            x: 0,
                            y: 0
                        },
                        supportPointer: !1 !== L.supportPointer
                    };
                    for (var t in e) !(t in l) && (l[t] = e[t]);
                    for (var i in B(l), this) "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this));
                    this.nativeDraggable = !l.forceFallback && I, $(n, "mousedown", this._onTapStart), $(n, "touchstart", this._onTapStart), l.supportPointer && $(n, "pointerdown", this._onTapStart), this.nativeDraggable && ($(n, "dragover", this), $(n, "dragenter", this)), j.push(this._onDragOver), l.store && this.sort(l.store.get(this))
                }

                function F(l, e) {
                    "clone" !== l.lastPullMode && (e = !0), t && t.state !== e && (W(t, "display", e ? "none" : ""), e || t.state && (l.options.group.revertClone ? (i.insertBefore(t, u), l._animate(n, t)) : i.insertBefore(t, n)), t.state = e)
                }

                function K(n, l, e) {
                    if (n) {
                        e = e || R;
                        do {
                            if (">*" === l && n.parentNode === e || en(n, l)) return n
                        } while (n = H(n))
                    }
                    return null
                }

                function H(n) {
                    var l = n.host;
                    return l && l.nodeType ? l : n.parentNode
                }

                function $(n, l, e) {
                    n.addEventListener(l, e, A)
                }

                function Y(n, l, e) {
                    n.removeEventListener(l, e, A)
                }

                function q(n, l, e) {
                    if (n)
                        if (n.classList) n.classList[e ? "add" : "remove"](l);
                        else {
                            var t = (" " + n.className + " ").replace(w, " ").replace(" " + l + " ", " ");
                            n.className = (t + (e ? " " + l : "")).replace(w, " ")
                        }
                }

                function W(n, l, e) {
                    var t = n && n.style;
                    if (t) {
                        if (void 0 === e) return R.defaultView && R.defaultView.getComputedStyle ? e = R.defaultView.getComputedStyle(n, "") : n.currentStyle && (e = n.currentStyle), void 0 === l ? e : e[l];
                        l in t || (l = "-webkit-" + l), t[l] = e + ("string" == typeof e ? "" : "px")
                    }
                }

                function Z(n, l, e) {
                    if (n) {
                        var t = n.getElementsByTagName(l),
                            i = 0,
                            u = t.length;
                        if (e)
                            for (; i < u; i++) e(t[i], i);
                        return t
                    }
                    return []
                }

                function X(n, l, e, i, u, o, r, s) {
                    n = n || l[P];
                    var a = R.createEvent("Event"),
                        c = n.options,
                        d = "on" + e.charAt(0).toUpperCase() + e.substr(1);
                    a.initEvent(e, !0, !0), a.to = u || l, a.from = o || l, a.item = i || l, a.clone = t, a.oldIndex = r, a.newIndex = s, l.dispatchEvent(a), c[d] && c[d].call(n, a)
                }

                function G(n, l, e, t, i, u, o, r) {
                    var s, a, c = n[P],
                        d = c.options.onMove;
                    return (s = R.createEvent("Event")).initEvent("move", !0, !0), s.to = l, s.from = n, s.dragged = e, s.draggedRect = t, s.related = i || l, s.relatedRect = u || l.getBoundingClientRect(), s.willInsertAfter = r, n.dispatchEvent(s), d && (a = d.call(c, s, o)), a
                }

                function Q(n) {
                    n.draggable = !1
                }

                function J() {
                    N = !1
                }

                function nn(n) {
                    for (var l = n.tagName + n.className + n.src + n.href + n.textContent, e = l.length, t = 0; e--;) t += l.charCodeAt(e);
                    return t.toString(36)
                }

                function ln(n, l) {
                    var e = 0;
                    if (!n || !n.parentNode) return -1;
                    for (; n && (n = n.previousElementSibling);) "TEMPLATE" === n.nodeName.toUpperCase() || ">*" !== l && !en(n, l) || e++;
                    return e
                }

                function en(n, l) {
                    if (n) {
                        var e = (l = l.split(".")).shift().toUpperCase(),
                            t = new RegExp("\\s(" + l.join("|") + ")(?=\\s)", "g");
                        return !("" !== e && n.nodeName.toUpperCase() != e || l.length && ((" " + n.className + " ").match(t) || []).length != l.length)
                    }
                    return !1
                }

                function tn(n, l) {
                    var e, t;
                    return function() {
                        void 0 === e && (e = arguments, t = this, M(function() {
                            1 === e.length ? n.call(t, e[0]) : n.apply(t, e), e = void 0
                        }, l))
                    }
                }

                function un(n, l) {
                    if (n && l)
                        for (var e in l) l.hasOwnProperty(e) && (n[e] = l[e]);
                    return n
                }

                function on(n) {
                    return k && k.dom ? k.dom(n).cloneNode(!0) : T ? T(n).clone(!0)[0] : n.cloneNode(!0)
                }

                function rn(n) {
                    return M(n, 0)
                }

                function sn(n) {
                    return clearTimeout(n)
                }
                return L.prototype = {
                    constructor: L,
                    _onTapStart: function(l) {
                        var e, t = this,
                            i = this.el,
                            u = this.options,
                            r = u.preventOnFilter,
                            s = l.type,
                            a = l.touches && l.touches[0],
                            c = (a || l).target,
                            d = l.target.shadowRoot && l.path && l.path[0] || c,
                            p = u.filter;
                        if (function(n) {
                                for (var l = n.getElementsByTagName("input"), e = l.length; e--;) {
                                    var t = l[e];
                                    t.checked && U.push(t)
                                }
                            }(i), !n && !(/mousedown|pointerdown/.test(s) && 0 !== l.button || u.disabled) && !d.isContentEditable && (c = K(c, u.draggable, i)) && o !== c) {
                            if (e = ln(c, u.draggable), "function" == typeof p) {
                                if (p.call(this, l, c, this)) return X(t, d, "filter", c, i, i, e), void(r && l.preventDefault())
                            } else if (p && (p = p.split(",").some(function(n) {
                                    if (n = K(d, n.trim(), i)) return X(t, n, "filter", c, i, i, e), !0
                                }))) return void(r && l.preventDefault());
                            u.handle && !K(d, u.handle, i) || this._prepareDragStart(l, a, c, e)
                        }
                    },
                    _prepareDragStart: function(e, t, r, s) {
                        var a, c = this,
                            d = c.el,
                            p = c.options,
                            f = d.ownerDocument;
                        r && !n && r.parentNode === d && (v = e, i = d, l = (n = r).parentNode, u = n.nextSibling, o = r, h = p.group, g = s, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, n.style["will-change"] = "all", a = function() {
                            c._disableDelayedDrag(), n.draggable = c.nativeDraggable, q(n, p.chosenClass, !0), c._triggerDragStart(e, t), X(c, i, "choose", n, i, i, g)
                        }, p.ignore.split(",").forEach(function(l) {
                            Z(n, l.trim(), Q)
                        }), $(f, "mouseup", c._onDrop), $(f, "touchend", c._onDrop), $(f, "touchcancel", c._onDrop), $(f, "selectstart", c), p.supportPointer && $(f, "pointercancel", c._onDrop), p.delay ? ($(f, "mouseup", c._disableDelayedDrag), $(f, "touchend", c._disableDelayedDrag), $(f, "touchcancel", c._disableDelayedDrag), $(f, "mousemove", c._disableDelayedDrag), $(f, "touchmove", c._disableDelayedDrag), p.supportPointer && $(f, "pointermove", c._disableDelayedDrag), c._dragStartTimer = M(a, p.delay)) : a())
                    },
                    _disableDelayedDrag: function() {
                        var n = this.el.ownerDocument;
                        clearTimeout(this._dragStartTimer), Y(n, "mouseup", this._disableDelayedDrag), Y(n, "touchend", this._disableDelayedDrag), Y(n, "touchcancel", this._disableDelayedDrag), Y(n, "mousemove", this._disableDelayedDrag), Y(n, "touchmove", this._disableDelayedDrag), Y(n, "pointermove", this._disableDelayedDrag)
                    },
                    _triggerDragStart: function(l, e) {
                        (e = e || ("touch" == l.pointerType ? l : null)) ? this._onDragStart(v = {
                            target: n,
                            clientX: e.clientX,
                            clientY: e.clientY
                        }, "touch"): this.nativeDraggable ? ($(n, "dragend", this), $(i, "dragstart", this._onDragStart)) : this._onDragStart(v, !0);
                        try {
                            R.selection ? rn(function() {
                                R.selection.empty()
                            }) : window.getSelection().removeAllRanges()
                        } catch (n) {}
                    },
                    _dragStarted: function() {
                        if (i && n) {
                            var l = this.options;
                            q(n, l.ghostClass, !0), q(n, l.dragClass, !1), L.active = this, X(this, i, "start", n, i, i, g)
                        } else this._nulling()
                    },
                    _emulateDragOver: function() {
                        if (_) {
                            if (this._lastX === _.clientX && this._lastY === _.clientY) return;
                            this._lastX = _.clientX, this._lastY = _.clientY, E || W(e, "display", "none");
                            var n = R.elementFromPoint(_.clientX, _.clientY),
                                l = n,
                                t = j.length;
                            if (n && n.shadowRoot && (l = n = n.shadowRoot.elementFromPoint(_.clientX, _.clientY)), l)
                                do {
                                    if (l[P]) {
                                        for (; t--;) j[t]({
                                            clientX: _.clientX,
                                            clientY: _.clientY,
                                            target: n,
                                            rootEl: l
                                        });
                                        break
                                    }
                                    n = l
                                } while (l = l.parentNode);
                            E || W(e, "display", "")
                        }
                    },
                    _onTouchMove: function(n) {
                        if (v) {
                            var l = this.options,
                                t = l.fallbackTolerance,
                                i = l.fallbackOffset,
                                u = n.touches ? n.touches[0] : n,
                                o = u.clientX - v.clientX + i.x,
                                r = u.clientY - v.clientY + i.y,
                                s = n.touches ? "translate3d(" + o + "px," + r + "px,0)" : "translate(" + o + "px," + r + "px)";
                            if (!L.active) {
                                if (t && V(D(u.clientX - this._lastX), D(u.clientY - this._lastY)) < t) return;
                                this._dragStarted()
                            }
                            this._appendGhost(), b = !0, _ = u, W(e, "webkitTransform", s), W(e, "mozTransform", s), W(e, "msTransform", s), W(e, "transform", s), n.preventDefault()
                        }
                    },
                    _appendGhost: function() {
                        if (!e) {
                            var l, t = n.getBoundingClientRect(),
                                u = W(n),
                                o = this.options;
                            q(e = n.cloneNode(!0), o.ghostClass, !1), q(e, o.fallbackClass, !0), q(e, o.dragClass, !0), W(e, "top", t.top - O(u.marginTop, 10)), W(e, "left", t.left - O(u.marginLeft, 10)), W(e, "width", t.width), W(e, "height", t.height), W(e, "opacity", "0.8"), W(e, "position", "fixed"), W(e, "zIndex", "100000"), W(e, "pointerEvents", "none"), o.fallbackOnBody && R.body.appendChild(e) || i.appendChild(e), l = e.getBoundingClientRect(), W(e, "width", 2 * t.width - l.width), W(e, "height", 2 * t.height - l.height)
                        }
                    },
                    _onDragStart: function(l, e) {
                        var u = this,
                            o = l.dataTransfer,
                            r = u.options;
                        u._offUpEvents(), h.checkPull(u, u, n, l) && ((t = on(n)).draggable = !1, t.style["will-change"] = "", W(t, "display", "none"), q(t, u.options.chosenClass, !1), u._cloneId = rn(function() {
                            i.insertBefore(t, n), X(u, i, "clone", n)
                        })), q(n, r.dragClass, !0), e ? ("touch" === e ? ($(R, "touchmove", u._onTouchMove), $(R, "touchend", u._onDrop), $(R, "touchcancel", u._onDrop), r.supportPointer && ($(R, "pointermove", u._onTouchMove), $(R, "pointerup", u._onDrop))) : ($(R, "mousemove", u._onTouchMove), $(R, "mouseup", u._onDrop)), u._loopId = setInterval(u._emulateDragOver, 50)) : (o && (o.effectAllowed = "move", r.setData && r.setData.call(u, o, n)), $(R, "drop", u), u._dragStartId = rn(u._dragStarted))
                    },
                    _onDragOver: function(o) {
                        var r, s, a, g, f = this.el,
                            v = this.options,
                            _ = v.group,
                            y = L.active,
                            x = h === _,
                            w = !1,
                            S = v.sort;
                        if (void 0 !== o.preventDefault && (o.preventDefault(), !v.dragoverBubble && o.stopPropagation()), !n.animated && (b = !0, y && !v.disabled && (x ? S || (g = !i.contains(n)) : m === this || (y.lastPullMode = h.checkPull(this, y, n, o)) && _.checkPut(this, y, n, o)) && (void 0 === o.rootEl || o.rootEl === this.el))) {
                            if (z(o, v, this.el), N) return;
                            if (r = K(o.target, v.draggable, f), s = n.getBoundingClientRect(), m !== this && (m = this, w = !0), g) return F(y, !0), l = i, void(t || u ? i.insertBefore(n, t || u) : S || i.appendChild(n));
                            if (0 === f.children.length || f.children[0] === e || f === o.target && function(n, l) {
                                    var e = n.lastElementChild.getBoundingClientRect();
                                    return l.clientY - (e.top + e.height) > 5 || l.clientX - (e.left + e.width) > 5
                                }(f, o)) {
                                if (0 !== f.children.length && f.children[0] !== e && f === o.target && (r = f.lastElementChild), r) {
                                    if (r.animated) return;
                                    a = r.getBoundingClientRect()
                                }
                                F(y, x), !1 !== G(i, f, n, s, r, a, o) && (n.contains(f) || (f.appendChild(n), l = f), this._animate(s, n), r && this._animate(a, r))
                            } else if (r && !r.animated && r !== n && void 0 !== r.parentNode[P]) {
                                c !== r && (c = r, d = W(r), p = W(r.parentNode));
                                var R = (a = r.getBoundingClientRect()).right - a.left,
                                    O = a.bottom - a.top,
                                    T = C.test(d.cssFloat + d.display) || "flex" == p.display && 0 === p["flex-direction"].indexOf("row"),
                                    k = r.offsetWidth > n.offsetWidth,
                                    A = r.offsetHeight > n.offsetHeight,
                                    I = (T ? (o.clientX - a.left) / R : (o.clientY - a.top) / O) > .5,
                                    E = r.nextElementSibling,
                                    D = !1;
                                if (T) {
                                    var V = n.offsetTop,
                                        U = r.offsetTop;
                                    D = V === U ? r.previousElementSibling === n && !k || I && k : r.previousElementSibling === n || n.previousElementSibling === r ? (o.clientY - a.top) / O > .5 : U > V
                                } else w || (D = E !== n && !A || I && A);
                                var j = G(i, f, n, s, r, a, o, D);
                                !1 !== j && (1 !== j && -1 !== j || (D = 1 === j), N = !0, M(J, 30), F(y, x), n.contains(f) || (D && !E ? f.appendChild(n) : r.parentNode.insertBefore(n, D ? E : r)), l = n.parentNode, this._animate(s, n), this._animate(a, r))
                            }
                        }
                    },
                    _animate: function(n, l) {
                        var e = this.options.animation;
                        if (e) {
                            var t = l.getBoundingClientRect();
                            1 === n.nodeType && (n = n.getBoundingClientRect()), W(l, "transition", "none"), W(l, "transform", "translate3d(" + (n.left - t.left) + "px," + (n.top - t.top) + "px,0)"), W(l, "transition", "all " + e + "ms"), W(l, "transform", "translate3d(0,0,0)"), clearTimeout(l.animated), l.animated = M(function() {
                                W(l, "transition", ""), W(l, "transform", ""), l.animated = !1
                            }, e)
                        }
                    },
                    _offUpEvents: function() {
                        var n = this.el.ownerDocument;
                        Y(R, "touchmove", this._onTouchMove), Y(R, "pointermove", this._onTouchMove), Y(n, "mouseup", this._onDrop), Y(n, "touchend", this._onDrop), Y(n, "pointerup", this._onDrop), Y(n, "touchcancel", this._onDrop), Y(n, "pointercancel", this._onDrop), Y(n, "selectstart", this)
                    },
                    _onDrop: function(o) {
                        var r = this.el,
                            s = this.options;
                        clearInterval(this._loopId), clearInterval(x.pid), clearTimeout(this._dragStartTimer), sn(this._cloneId), sn(this._dragStartId), Y(R, "mouseover", this), Y(R, "mousemove", this._onTouchMove), this.nativeDraggable && (Y(R, "drop", this), Y(r, "dragstart", this._onDragStart)), this._offUpEvents(), o && (b && (o.preventDefault(), !s.dropBubble && o.stopPropagation()), e && e.parentNode && e.parentNode.removeChild(e), i !== l && "clone" === L.active.lastPullMode || t && t.parentNode && t.parentNode.removeChild(t), n && (this.nativeDraggable && Y(n, "dragend", this), Q(n), n.style["will-change"] = "", q(n, this.options.ghostClass, !1), q(n, this.options.chosenClass, !1), X(this, i, "unchoose", n, l, i, g), i !== l ? (f = ln(n, s.draggable)) >= 0 && (X(null, l, "add", n, l, i, g, f), X(this, i, "remove", n, l, i, g, f), X(null, l, "sort", n, l, i, g, f), X(this, i, "sort", n, l, i, g, f)) : n.nextSibling !== u && (f = ln(n, s.draggable)) >= 0 && (X(this, i, "update", n, l, i, g, f), X(this, i, "sort", n, l, i, g, f)), L.active && (null != f && -1 !== f || (f = g), X(this, i, "end", n, l, i, g, f), this.save()))), this._nulling()
                    },
                    _nulling: function() {
                        i = n = l = e = u = t = o = r = s = v = _ = b = f = c = d = m = h = L.active = null, U.forEach(function(n) {
                            n.checked = !0
                        }), U.length = 0
                    },
                    handleEvent: function(l) {
                        switch (l.type) {
                            case "drop":
                            case "dragend":
                                this._onDrop(l);
                                break;
                            case "dragover":
                            case "dragenter":
                                n && (this._onDragOver(l), function(n) {
                                    n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.preventDefault()
                                }(l));
                                break;
                            case "mouseover":
                                this._onDrop(l);
                                break;
                            case "selectstart":
                                l.preventDefault()
                        }
                    },
                    toArray: function() {
                        for (var n, l = [], e = this.el.children, t = 0, i = e.length, u = this.options; t < i; t++) K(n = e[t], u.draggable, this.el) && l.push(n.getAttribute(u.dataIdAttr) || nn(n));
                        return l
                    },
                    sort: function(n) {
                        var l = {},
                            e = this.el;
                        this.toArray().forEach(function(n, t) {
                            var i = e.children[t];
                            K(i, this.options.draggable, e) && (l[n] = i)
                        }, this), n.forEach(function(n) {
                            l[n] && (e.removeChild(l[n]), e.appendChild(l[n]))
                        })
                    },
                    save: function() {
                        var n = this.options.store;
                        n && n.set(this)
                    },
                    closest: function(n, l) {
                        return K(n, l || this.options.draggable, this.el)
                    },
                    option: function(n, l) {
                        var e = this.options;
                        if (void 0 === l) return e[n];
                        e[n] = l, "group" === n && B(e)
                    },
                    destroy: function() {
                        var n = this.el;
                        n[P] = null, Y(n, "mousedown", this._onTapStart), Y(n, "touchstart", this._onTapStart), Y(n, "pointerdown", this._onTapStart), this.nativeDraggable && (Y(n, "dragover", this), Y(n, "dragenter", this)), Array.prototype.forEach.call(n.querySelectorAll("[draggable]"), function(n) {
                            n.removeAttribute("draggable")
                        }), j.splice(j.indexOf(this._onDragOver), 1), this._onDrop(), this.el = n = null
                    }
                }, $(R, "touchmove", function(n) {
                    L.active && n.preventDefault()
                }), L.utils = {
                    on: $,
                    off: Y,
                    css: W,
                    find: Z,
                    is: function(n, l) {
                        return !!K(n, l, n)
                    },
                    extend: un,
                    throttle: tn,
                    closest: K,
                    toggleClass: q,
                    clone: on,
                    index: ln,
                    nextTick: rn,
                    cancelNextTick: sn
                }, L.create = function(n, l) {
                    return new L(n, l)
                }, L.version = "1.7.0", L
            }) ? t.call(l, e, l, n) : t) || (n.exports = i)
        }()
    },
    Nkju: function(n, l) {
        n.exports = function(n, l) {
            return Array.prototype.slice.call(n, l)
        }
    },
    OILR: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {
            function n() {
                this.title = "", this.size = "medium"
            }
            return n.prototype.ngOnInit = function() {}, n
        }()
    },
    PDeG: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {}
    },
    SBrJ: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        }), e.d(l, "b", function() {
            return o
        });
        var t = e("v8NG"),
            i = e("kZql"),
            u = function() {
                function n(n) {
                    this.sanitized = n
                }
                return n.prototype.transform = function(n, l) {
                    void 0 === l && (l = !0);
                    var e = "";
                    if ("string" == typeof n) e = n.replace(/width="\d+"/g, "").replace(/<h1>/g, "<h3>").replace(/<\/h1>/g, "</h3>").replace(/src=['"](?:[^"'\/]*\/)*([^'"]+)['"]/g, 'src="https://static.' + t.a.GetHost() + '/images/$1" class="imagehtml" width="100%"').replace('href="//', 'href="https://').replace(/href=['"](?:[\:^"'\/]*\/)*([^'"]+)['"]/g, "onclick=navigateLink('/$1')"), 2 == i.a.cinema && (e = e.replace('/images/vipcaption.jpg" class="imagehtml"', '/images/vipcaption_2.jpg" class="imagehtml"'));
                    else
                        for (var u in n) e += this.transform(n[u], !1);
                    return l ? (e = (e = e.replace('static.dnvod.tv/images/vipcaption.jpg" class="imagehtml"', window.location.hostname + '/assets/images/vipcaption.jpg" class="imagehtml"')).replace('static.dnwyb.tv/images/vipcaption_2.jpg" class="imagehtml"', window.location.hostname + '/assets/images/vipcaption_2.jpg" class="imagehtml"'), this.sanitized.bypassSecurityTrustHtml(e)) : e
                }, n
            }(),
            o = function() {
                function n() {}
                return n.prototype.transform = function(n) {
                    return n && (n = n.replace("dnvod.tv", t.a.GetHost())), n
                }, n
            }()
    },
    SkYI: function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = e("ceAo"),
            u = e("8yiT"),
            o = e("Z5i1"),
            r = e("+SoF"),
            s = e("FI7P"),
            a = e("uwhN"),
            c = e("9/5O"),
            d = e("O0BE"),
            p = e("Xjw4"),
            g = e("rhHZ"),
            f = e("Dch9"),
            h = e("Ohpo"),
            m = e("qCm+"),
            v = e("D9YE"),
            _ = function() {
                function n(n) {
                    this._commentService = n, this.closeMeEvent = new t.EventEmitter
                }
                return n.prototype.ngOnInit = function() {}, n.prototype.ngOnChanges = function(n) {
                    var l = this;
                    this.replyId && this._commentService.getCommentById(this.replyId).subscribe(function(n) {
                        l.comment = n
                    })
                }, n.prototype.ngAfterViewInit = function() {}, n.prototype.closeMe = function() {
                    this.closeMeEvent.emit(!0)
                }, n
            }(),
            b = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".viewer-container[_ngcontent-%COMP%]{position:absolute;top:50px;left:64px;background-color:transparent;width:460px;z-index:9;padding-top:8px}.viewer-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #222;min-height:156px;padding:8px;-webkit-box-shadow:2px 2px 2px 0 rgba(0,0,0,.5);box-shadow:2px 2px 2px 0 rgba(0,0,0,.5)}.viewer-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:54px;height:54px}.viewer-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.viewer-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 10px 30px;font-size:15px}.viewer-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{position:absolute;color:#999;bottom:8px;left:0;padding:0 8px}.viewer-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   #author[_ngcontent-%COMP%]{color:#999;margin-bottom:8px}.close-btn[_ngcontent-%COMP%]{position:absolute;top:13px;right:5px;width:24px;height:24px;cursor:pointer}.pulse-loading.author[_ngcontent-%COMP%]{height:24px;width:180px}.pulse-loading.date[_ngcontent-%COMP%]{height:24px;width:120px}.pulse-loading.content[_ngcontent-%COMP%]{width:100%;height:60px}"]
                ],
                data: {}
            });

        function y(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 33, "div", [
                ["class", "viewer-container"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 30, "div", [
                ["class", "inner"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](4, 0, null, null, 16, "div", [
                ["class", "d-flex w-100"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](6, 0, null, null, 3, "div", [
                ["class", "avatar"],
                ["id", "avatar"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](8, 0, null, null, 0, "img", [
                ["width", "48"]
            ], [
                [8, "src", 4]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](11, 0, null, null, 8, "div", [
                ["class", "main"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](13, 0, null, null, 1, "div", [
                ["id", "author"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](14, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](16, 0, null, null, 2, "div", [
                ["id", "content"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), t["\u0275did"](17, 278528, null, 0, p.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), t["\u0275pod"](18, {
                "text-red": 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](22, 0, null, null, 7, "div", [
                ["class", "bottom d-flex w-100"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](24, 0, null, null, 1, "div", [
                ["style", "width: 48px; text-align: center"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](25, null, ["", "\u697c"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](27, 0, null, null, 1, "div", [
                ["class", "ml-auto"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](28, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](31, 0, null, null, 0, "img", [
                ["alt", "\u5173\u95ed"],
                ["class", "close-btn"],
                ["src", "/assets/images/closeme.png"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.closeMe() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                n(l, 17, 0, n(l, 18, 0, l.component.comment.deleted))
            }, function(n, l) {
                var e = l.component;
                n(l, 8, 0, e.comment.avatar), n(l, 14, 0, e.comment.author), n(l, 16, 0, e.comment.content), n(l, 25, 0, e.comment.floor), n(l, 28, 0, e.comment.published)
            })
        }

        function x(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 26, "div", [
                ["class", "viewer-container"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 23, "div", [
                ["class", "inner"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](4, 0, null, null, 13, "div", [
                ["class", "d-flex w-100"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](6, 0, null, null, 3, "div", [
                ["class", "avatar"],
                ["id", "avatar"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](8, 0, null, null, 0, "div", [
                ["class", "avatar pulse-loading"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](11, 0, null, null, 5, "div", [
                ["class", "main"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](13, 0, null, null, 0, "div", [
                ["class", "text-bold mb-2 author pulse-loading"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](15, 0, null, null, 0, "div", [
                ["class", "pulse-loading content"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](19, 0, null, null, 3, "div", [
                ["class", "bottom"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](21, 0, null, null, 0, "div", [
                ["class", "pulse-loading date"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](24, 0, null, null, 0, "img", [
                ["alt", "\u5173\u95ed"],
                ["class", "close-btn"],
                ["src", "/assets/images/closeme.png"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.closeMe() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], null, null)
        }

        function w(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, y)), t["\u0275did"](1, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n\n"])), (n()(), t["\u0275and"](16777216, null, null, 1, null, x)), t["\u0275did"](4, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.comment), n(l, 4, 0, !e.comment)
            }, null)
        }
        var C = e("iGNb");
        e("IpMa"), e("zP1J"), e("Snuo"), e("CdNy"), e.d(l, "a", function() {
            return P
        }), l.b = function(n) {
            return t["\u0275vid"](0, [t["\u0275pid"](0, C.a, []), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275eld"](2, 0, null, null, 61, "div", [
                ["class", "comment"]
            ], null, [
                [null, "mouseleave"]
            ], function(n, l, e) {
                var t = !0;
                return "mouseleave" === l && (t = !1 !== n.component.onAvatarMouseLeave() && t), t
            }, null, null)), t["\u0275did"](3, 278528, null, 0, p.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](4, {
                last: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](6, 0, null, null, 3, "div", [
                ["class", "side text-center"]
            ], null, [
                [null, "mouseenter"]
            ], function(n, l, e) {
                var t = !0;
                return "mouseenter" === l && (t = !1 !== n.component.onAvatarMouseEnter() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](8, 0, null, null, 0, "img", [
                ["class", "avatar"]
            ], [
                [8, "src", 4]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](11, 0, null, null, 23, "div", [
                ["class", "content"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](13, 0, null, null, 13, "div", [
                ["class", "d-flex"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, S)), t["\u0275did"](16, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, R)), t["\u0275did"](19, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](21, 0, null, null, 1, "span", [
                ["class", "author text-light"]
            ], null, [
                [null, "mouseenter"]
            ], function(n, l, e) {
                var t = !0;
                return "mouseenter" === l && (t = !1 !== n.component.onAvatarMouseEnter() && t), t
            }, null, null)), (n()(), t["\u0275ted"](22, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, O)), t["\u0275did"](25, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](28, 0, null, null, 2, "div", [
                ["class", "body"]
            ], [
                [8, "innerHTML", 1]
            ], [
                [null, "mouseover"]
            ], function(n, l, e) {
                var t = !0;
                return "mouseover" === l && (t = !1 !== n.component.showReplied(e) && t), t
            }, null, null)), t["\u0275did"](29, 278528, null, 0, p.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](30, {
                "text-red": 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, M)), t["\u0275did"](33, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n\n    "])), (n()(), t["\u0275eld"](36, 0, null, null, 16, "div", [
                ["class", "bottom d-flex align-items-center"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](38, 0, null, null, 1, "div", [
                ["class", "side text-center text-light"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](39, null, ["\n            ", "\u697c\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](41, 0, null, null, 10, "div", [
                ["class", "content"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](43, 0, null, null, 7, "div", [
                ["class", "d-flex align-items-center"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](45, 0, null, null, 1, "div", [
                ["class", "time text-light"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](46, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, I)), t["\u0275did"](49, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n\n    "])), (n()(), t["\u0275eld"](54, 0, null, null, 5, "div", [
                ["class", "card"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, E)), t["\u0275did"](57, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, N)), t["\u0275did"](62, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 3, 0, "comment", n(l, 4, 0, e.isLast)), n(l, 16, 0, e.comment.userLevelSymbol), n(l, 19, 0, !!e.comment.status && 1 != e.comment.status), n(l, 25, 0, e.isHot), n(l, 29, 0, "body", n(l, 30, 0, e.comment.deleted)), n(l, 33, 0, !e.comment.deleted && e.comment.pollId > 0), n(l, 49, 0, e.showControls), n(l, 57, 0, e.showNamecard), n(l, 62, 0, 0 !== e.comment.replyId && !e.comment.deleted)
            }, function(n, l) {
                var e = l.component;
                n(l, 8, 0, e.comment.avatar), n(l, 22, 0, e.comment.author), n(l, 28, 0, e.formatContent(e.comment.content)), n(l, 39, 0, e.comment.floor), n(l, 46, 0, e.comment.published)
            })
        };
        var P = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                [".text-gray[_ngcontent-%COMP%]{color:#f8f8f8!important}.text-light[_ngcontent-%COMP%]{color:#999!important}.text-dark[_ngcontent-%COMP%]{color:#434343}.text-large[_ngcontent-%COMP%]{font-size:18px}text-medium[_ngcontent-%COMP%]{font-size:16px}.text-small[_ngcontent-%COMP%]{font-size:13px}.dn-button[_ngcontent-%COMP%]{border:none;outline:0!important;display:block;padding:6px 8px;width:auto;min-width:100px;margin:0 .4rem;border-radius:18px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;color:#fff!important;background-color:silver}.dn-button[_ngcontent-%COMP%]:hover{background-color:#cacaca}.dn-button-plain[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid silver;color:#000!important;background-color:#fff;padding:6px 20px;cursor:pointer}.dn-button-plain[_ngcontent-%COMP%]:hover{background-color:#cacaca;color:#fff!important}.dn-button-outline[_ngcontent-%COMP%]{outline:0!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:2px solid silver;border-radius:2px;background-color:#fff;padding:2px 14px;cursor:pointer}.dn-button-outline[_ngcontent-%COMP%]:hover{background-color:#cacaca;color:#fff!important}.dn-button-outline.orange[_ngcontent-%COMP%]{color:#f49800;border-color:#f49800;background-color:#434343}.dn-button-outline.orange[_ngcontent-%COMP%]:hover{color:#fe9e00!important;border-color:#fe9e00!important;background-color:#000}.dn-button-blue[_ngcontent-%COMP%]{color:#fff!important;background-color:#00a8ec}.dn-button-blue[_ngcontent-%COMP%]:hover{background-color:#00b6ff}.dn-button-disable[_ngcontent-%COMP%]{cursor:default;color:#fff!important;background-color:#ddd!important}.dn-button-orange[_ngcontent-%COMP%]{color:#fff!important;background-color:#f49800}.dn-button-orange[_ngcontent-%COMP%]:hover{background-color:#fe9e00}.dn-button-gold[_ngcontent-%COMP%]{color:#fff!important;background-color:#f49800}.dn-button-gold[_ngcontent-%COMP%]:hover{background-color:#fe9e00}.dn-button-red[_ngcontent-%COMP%]{color:#fff!important;background-color:#e81d00}.dn-button-red[_ngcontent-%COMP%]:hover{background-color:red}.dn-button-large[_ngcontent-%COMP%]{padding:10px 18px}.dn-play-button[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:4px 12px;border-radius:3px;font-size:16px;display:inline-block;color:#fff!important;background-color:#f00000}.dn-play-button[_ngcontent-%COMP%]:hover{background-color:#f10000}.dn-play-button[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:20px;vertical-align:middle}.dn-play-button[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{display:inline-block;border-left:1px solid #fff;padding:3px 8px 3px 10px;vertical-align:middle}.dn-btn-load-more[_ngcontent-%COMP%]{cursor:pointer;padding:5px 15px}.link-blue[_ngcontent-%COMP%]{color:#00a8ec}.link-blue[_ngcontent-%COMP%]:hover{color:#434343}.red[_ngcontent-%COMP%]{color:#f00000}.rose[_ngcontent-%COMP%]{color:#ff01ff}.orange[_ngcontent-%COMP%]{color:#fe9e00}.comment[_ngcontent-%COMP%]{position:relative;padding-bottom:15px;margin-bottom:25px}.comment[_ngcontent-%COMP%]:not(.last){border-bottom:1px solid #eee}.comment.last[_ngcontent-%COMP%]{padding-bottom:0;margin-bottom:17px}.bottom[_ngcontent-%COMP%]{position:relative}.side[_ngcontent-%COMP%]{position:absolute;width:48px}.avatar[_ngcontent-%COMP%]{cursor:pointer;width:48px;border-radius:50%}.author[_ngcontent-%COMP%]{cursor:pointer;font-size:15px}.content[_ngcontent-%COMP%]{padding-left:66px}.body[_ngcontent-%COMP%]{font-size:15px;padding:10px 0 15px;overflow:hidden;word-wrap:break-word}.membership[_ngcontent-%COMP%]{margin-top:2px}.controls[_ngcontent-%COMP%]{font-size:15px}.voted[_ngcontent-%COMP%]{color:#f00000}.card[_ngcontent-%COMP%]{position:absolute;left:220px;top:-60px}.hover-red[_ngcontent-%COMP%]:hover{color:red}.status[_ngcontent-%COMP%]{padding:0 .5rem;color:red}"]
            ],
            data: {}
        });

        function S(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "img", [
                ["class", "membership mr-1"],
                ["height", "15"]
            ], [
                [8, "src", 4]
            ], null, null, null, null))], null, function(n, l) {
                n(l, 0, 0, l.component.comment.userLevelSymbol)
            })
        }

        function R(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [
                ["class", "status"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["[", "]"]))], null, function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.getStatusText(e.comment.status))
            })
        }

        function O(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [
                ["class", "ml-auto"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](2, 0, null, null, 0, "img", [
                ["src", "/assets/images/hot.png"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "]))], null, null)
        }

        function M(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "app-dn-poll", [], null, null, null, i.b, i.a)), t["\u0275did"](1, 114688, null, 0, u.a, [o.a, r.a, s.a, a.a], {
                pollId: [0, "pollId"],
                user: [1, "user"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.comment.pollId, e.user)
            }, null)
        }

        function T(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "i", [
                ["class", "dn-icon-medium icon-like mr-2"],
                ["title", "\u6309\u8d5e"]
            ], null, null, null, null, null))], null, null)
        }

        function k(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "app-loader-ring", [], null, null, null, c.b, c.a)), t["\u0275did"](1, 114688, null, 0, d.a, [], null, null)], function(n, l) {
                n(l, 1, 0)
            }, null)
        }

        function A(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 8, "div", [
                ["class", "d-inline-block hover-red ml-5"],
                ["style", "cursor: pointer"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.reply() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](2, 0, null, null, 2, "i", [
                ["class", "dn-icon-medium icon-reply mr-1"],
                ["title", "\u56de\u590d"]
            ], null, null, null, null, null)), t["\u0275did"](3, 278528, null, 0, p.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](4, {
                disabled: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u56de\u590d"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "]))], function(n, l) {
                n(l, 3, 0, "dn-icon-medium icon-reply mr-1", n(l, 4, 0, l.component.comment.deleted))
            }, null)
        }

        function I(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 25, "div", [
                ["class", "controls ml-auto"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](2, 0, null, null, 19, "div", [
                ["class", "d-inline-block"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](4, 0, null, null, 16, "div", [
                ["class", "hover-red"],
                ["style", "cursor: pointer"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.likeComment() && t), t
            }, null, null)), t["\u0275did"](5, 278528, null, 0, p.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](6, {
                voted: 0,
                disabled: 1
            }), (n()(), t["\u0275ted"](-1, null, ["\n                            "])), (n()(), t["\u0275eld"](8, 0, null, null, 7, "div", [
                ["class", "d-inline-block text-center"],
                ["style", "width: 35px"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, T)), t["\u0275did"](11, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, k)), t["\u0275did"](14, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                            "])), (n()(), t["\u0275ted"](-1, null, ["\n                            "])), (n()(), t["\u0275eld"](17, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](18, null, ["", ""])), t["\u0275ppd"](19, 1), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, A)), t["\u0275did"](24, 16384, null, 0, p.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "]))], function(n, l) {
                var e = l.component;
                n(l, 5, 0, "hover-red", n(l, 6, 0, e.comment.liked, e.comment.deleted)), n(l, 11, 0, !e.voting), n(l, 14, 0, e.voting), n(l, 24, 0, e.user.id !== e.comment.authorId)
            }, function(n, l) {
                var e = l.component;
                n(l, 18, 0, t["\u0275unv"](l, 18, 0, n(l, 19, 0, t["\u0275nov"](l.parent, 0), e.comment.likes)))
            })
        }

        function E(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "app-namecard", [], null, [
                [null, "userLoadedEvent"],
                [null, "hideNameCardEvent"]
            ], function(n, l, e) {
                var t = !0,
                    i = n.component;
                return "userLoadedEvent" === l && (t = !1 !== i.onUserLoaded(e) && t), "hideNameCardEvent" === l && (t = !1 !== i.hideNamecard() && t), t
            }, g.b, g.a)), t["\u0275did"](1, 4308992, null, 0, f.a, [h.a, m.a], {
                user: [0, "user"],
                userId: [1, "userId"],
                hide: [2, "hide"]
            }, {
                hideNameCardEvent: "hideNameCardEvent",
                userLoadedEvent: "userLoadedEvent"
            })], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.publisher, e.comment.authorId, !e.showNamecard)
            }, null)
        }

        function N(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "app-comment-viewer", [], [
                [8, "hidden", 0]
            ], [
                [null, "closeMeEvent"]
            ], function(n, l, e) {
                var t = !0;
                return "closeMeEvent" === l && (t = !1 !== n.component.hideReplyViewer() && t), t
            }, w, b)), t["\u0275did"](1, 4833280, null, 0, _, [v.a], {
                replyId: [0, "replyId"]
            }, {
                closeMeEvent: "closeMeEvent"
            })], function(n, l) {
                n(l, 1, 0, l.component.commentViewerId)
            }, function(n, l) {
                n(l, 0, 0, !l.component.showReplyPopup)
            })
        }
    },
    T7ur: function(n, l, e) {
        "use strict";
        e.d(l, "b", function() {
            return t
        }), e.d(l, "a", function() {
            return i
        });
        var t = function(n) {
                return n[n.SearchPageLeft = 0] = "SearchPageLeft", n[n.SearchPageRight = 1] = "SearchPageRight", n[n.SearchPageContent = 2] = "SearchPageContent", n[n.VideoPageLeft = 3] = "VideoPageLeft", n[n.VideoPageRight = 4] = "VideoPageRight", n[n.VideoPageContent = 5] = "VideoPageContent", n
            }({}),
            i = function(n) {
                return n[n.Image = 0] = "Image", n[n.Video = 1] = "Video", n
            }({})
    },
    Tgtk: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {}
    },
    UPw7: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        });
        var t = e("WT6e"),
            i = this && this.__assign || Object.assign || function(n) {
                for (var l, e = 1, t = arguments.length; e < t; e++)
                    for (var i in l = arguments[e]) Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
                return n
            },
            u = function() {
                function n() {
                    this.tabs = [], this.tabsStyle = {}, this.tabStyle = {}, this.tabActiveStyle = {}, this.tabHoveredStyle = {}, this.activeShadowStyle = {}, this.shadowMargin = 0, this.dicrection = "Horizontal", this.showShadow = !0, this.showHoverShadow = !0, this.activeTabOnHover = !1, this.activeTab = 0, this.justifyTabs = "justify-content-start", this.selectTabEvent = new t.EventEmitter, this.shadowThickness = 4, this.hoverTab = 0, this.shadow = {
                        left: 0,
                        width: 0,
                        top: 0,
                        height: 0
                    }, this.activeShadow = {
                        left: 0,
                        width: 0,
                        top: 0,
                        height: 0
                    }, this.transitionInit = !1
                }
                return n.prototype.ngOnInit = function() {}, n.prototype.ngOnChanges = function(n) {}, n.prototype.onTabHover = function(n) {
                    this.showHoverShadow && (this.shadow.left = n.elem.nativeElement.offsetLeft, this.shadow.top = n.elem.nativeElement.offsetTop, this.shadow.width = n.elem.nativeElement.getBoundingClientRect().width, this.shadow.height = n.elem.nativeElement.getBoundingClientRect().height), this.activeTabOnHover && this.onTabActive(n)
                }, n.prototype.onTabChange = function(n) {
                    this.activeTab = n.index, this.showShadow && (this.activeShadow.left = n.elem.nativeElement.offsetLeft, this.activeShadow.top = n.elem.nativeElement.offsetTop, this.activeShadow.width = n.elem.nativeElement.getBoundingClientRect().width, this.activeShadow.height = n.elem.nativeElement.getBoundingClientRect().height), this.showHoverShadow && (this.shadow.left = n.elem.nativeElement.offsetLeft, this.shadow.top = n.elem.nativeElement.offsetTop, this.shadow.width = n.elem.nativeElement.getBoundingClientRect().width, this.shadow.height = n.elem.nativeElement.getBoundingClientRect().height)
                }, n.prototype.onTabActive = function(n) {
                    var l = this;
                    if (this.onTabChange(n), n.init) var e = setTimeout(function() {
                        l.transitionInit = !0, clearTimeout(e)
                    }, 100);
                    this.selectTabEvent.emit(this.activeTab)
                }, n.prototype.onTabClick = function(n) {
                    this.onTabActive(n)
                }, n.prototype.onMouseLeave = function() {
                    this.showHoverShadow && (this.shadow.left = this.activeShadow.left, this.shadow.top = this.activeShadow.top, this.shadow.width = this.activeShadow.width, this.shadow.height = this.activeShadow.height)
                }, n.prototype.shadowStyles = function(n) {
                    var l = {
                            transition: this.transitionInit ? "all 0.3s ease-in-out" : "none"
                        },
                        e = this.getShadowRect(n);
                    return i({}, l, e, this.activeShadowStyle)
                }, n.prototype.getShadowRect = function(n) {
                    var l = {};
                    if (this.showShadow) {
                        if (n && "Horizontal" === this.dicrection) return l.left = this.activeShadow.left + "px", l.width = this.activeShadow.width + "px", l.height = this.shadowThickness + "px", l.bottom = 0, l;
                        if (n && "Horizontal" !== this.dicrection) return l.top = this.activeShadow.top + this.shadowMargin + "px", l.height = this.activeShadow.height - 2 * this.shadowMargin + "px", l.width = this.shadowThickness + "px", l
                    }
                    if (this.showHoverShadow) {
                        if (!n && "Horizontal" === this.dicrection) return l.left = this.shadow.left + "px", l.width = this.shadow.width + "px", l.height = this.shadowThickness + "px", l.bottom = 0, l;
                        if (!n && "Horizontal" !== this.dicrection) return l.top = this.shadow.top + this.shadowMargin + "px", l.height = this.shadow.height - 2 * this.shadowMargin + "px", l.width = this.shadowThickness + "px", l
                    }
                }, n.prototype.getTabsClasses = function() {
                    return "Horizontal" === this.dicrection ? "d-flex " + this.justifyTabs : ""
                }, n.prototype.getTabsStyles = function() {
                    return this.tabsStyle
                }, n
            }()
    },
    "V/hQ": function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = e("Xjw4");
        e("YE+3"), e.d(l, "a", function() {
            return u
        }), l.b = function(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 10, "div", [
                ["style", "position: relative"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [
                ["class", "rating-bar"]
            ], null, null, null, null, null)), t["\u0275did"](3, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, o)), t["\u0275did"](6, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, r)), t["\u0275did"](9, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 3, 0, e.getBarStyle()), n(l, 6, 0, e.multipleColors), n(l, 9, 0, !e.multipleColors)
            }, null)
        };
        var u = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                [".rating-bar[_ngcontent-%COMP%]{background-color:#ddd;border-radius:30px}.value[_ngcontent-%COMP%]{position:absolute;left:0;top:0;background-color:#0ec610;border-top-left-radius:30px;border-bottom-left-radius:30px;width:16px}.value.low[_ngcontent-%COMP%]{background-color:red}.value.medium[_ngcontent-%COMP%]{background-color:#ff9501}.value.full[_ngcontent-%COMP%]{border-radius:4px}.value.default-color[_ngcontent-%COMP%]{background-color:#0ec610}"]
            ],
            data: {}
        });

        function o(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [
                ["class", "value"]
            ], [
                [4, "width", "px"]
            ], null, null, null, null)), t["\u0275did"](1, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](2, {
                low: 0,
                medium: 1,
                high: 2,
                full: 3
            }), t["\u0275did"](3, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "value", n(l, 2, 0, e.value < 4.5, e.value >= 4.5 && e.value < 6, e.value >= 6, 10 === e.value)), n(l, 3, 0, e.getValueStyle())
            }, function(n, l) {
                n(l, 0, 0, l.component.getValueWidth())
            })
        }

        function r(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "value default-color"]
            ], [
                [4, "width", "px"]
            ], null, null, null, null)), t["\u0275did"](1, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.getValueStyle())
            }, function(n, l) {
                n(l, 0, 0, l.component.getValueWidth())
            })
        }
    },
    VPIZ: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {
            function n() {}
            return n.prototype.transform = function(n) {
                var l = new Date(null);
                return l.setSeconds(Math.floor(n)), l.toISOString().substr(11, 8)
            }, n
        }()
    },
    WWez: function(n, l, e) {
        "use strict";
        var t = e("ys6Q");
        n.exports = function(n, l, e) {
            n && t(function() {
                n.apply(e || null, l || [])
            })
        }
    },
    "YE+3": function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {
            function n() {
                this.height = 10, this.borderRadius = 8, this.multipleColors = !0, this.whiteBackground = !1
            }
            return n.prototype.ngOnInit = function() {}, n.prototype.getBarStyle = function() {
                return {
                    width: this.width + "px",
                    height: this.height + "px",
                    "border-radius": this.borderRadius,
                    "background-color": this.whiteBackground ? "#fff" : "#ddd"
                }
            }, n.prototype.getValueStyle = function() {
                return this.value > 9.5 ? {
                    width: this.width + "px",
                    height: this.height + "px",
                    "border-top-left-radius": this.borderRadius + "px",
                    "border-bottom-left-radius": this.borderRadius + "px",
                    "border-top-right-radius": this.borderRadius + "px",
                    "border-bottom-right-radius": this.borderRadius + "px"
                } : {
                    width: this.width + "px",
                    height: this.height + "px",
                    "border-radius": this.borderRadius + "px"
                }
            }, n.prototype.getValueWidth = function() {
                var n = this.value / 10 * this.width;
                return 0 === n ? 0 : n < 10 ? 10 : n
            }, n
        }()
    },
    YLJQ: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        });
        var t = e("WT6e"),
            i = e("Ykpd"),
            u = function() {
                function n(n) {
                    var l = this;
                    this._windowService = n, this.total = 0, this.pageSize = 10, this.selectPageEvent = new t.EventEmitter, this.pager = {}, this.screenType = i.a, this._windowService.size$.subscribe(function(n) {
                        l.screenSize = n
                    })
                }
                return n.prototype.ngOnInit = function() {}, n.prototype.ngOnChanges = function() {
                    this.pager = this.getPager(this.total, this.current)
                }, n.prototype.setPage = function(n) {
                    n > this.pager.totalPages || n < 1 || this.selectPageEvent.emit(n)
                }, n.prototype.getPager = function(n, l, e) {
                    void 0 === l && (l = 1), void 0 === e && (e = this.pageSize);
                    var t, i, u = Math.ceil(n / e);
                    l < 1 ? l = 1 : l > u && (l = u), u <= 10 ? (t = 1, i = u) : l <= 6 ? (t = 1, i = 10) : l + 4 >= u ? (t = u - 9, i = u) : (t = l - 5, i = l + 4);
                    var o = (l - 1) * e,
                        r = Math.min(o + e - 1, n - 1),
                        s = Array.from(Array(i + 1 - t).keys()).map(function(n) {
                            return t + n
                        });
                    return {
                        totalItems: n,
                        currentPage: Number(l),
                        pageSize: e,
                        totalPages: u,
                        startPage: t,
                        endPage: i,
                        startIndex: o,
                        endIndex: r,
                        pages: s
                    }
                }, n
            }()
    },
    ZVnc: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {}
    },
    Zy4i: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        });
        var t = e("4zOZ"),
            i = function() {
                function n() {
                    this.sharedCurrency$ = new t.a("EUR")
                }
                return Object.defineProperty(n.prototype, "currency", {
                    set: function(n) {
                        this.sharedCurrency$.next(n)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "currency$", {
                    get: function() {
                        return this.sharedCurrency$.asObservable()
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }()
    },
    aBsJ: function(n, l, e) {
        "use strict";
        var t = this && this.__assign || Object.assign || function(n) {
            for (var l, e = 1, t = arguments.length; e < t; e++)
                for (var i in l = arguments[e]) Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
            return n
        };
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var i = e("WT6e"),
            u = (e("9TLe"), e("DvPt")),
            o = (e("6XPQ"), e("Lokx"));
        l.SortablejsDirective = function() {
            function n(n, l, e, t, i) {
                this.globalConfig = n, this.service = l, this.element = e, this.zone = t, this.renderer = i, this.runInsideAngular = !1
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.runInsideAngular ? this._sortable = o.create(this.element.nativeElement, this.options) : this.zone.runOutsideAngular(function() {
                    n._sortable = o.create(n.element.nativeElement, n.options)
                })
            }, n.prototype.ngOnChanges = function(n) {
                var l = this,
                    e = n.inputOptions;
                if (e && !e.isFirstChange()) {
                    var t = e.previousValue,
                        i = e.currentValue;
                    Object.keys(i).forEach(function(n) {
                        i[n] !== t[n] && l._sortable.option(n, l.options[n])
                    })
                }
            }, n.prototype.ngOnDestroy = function() {
                this._sortable && this._sortable.destroy()
            }, n.prototype.getBindings = function() {
                return this.sortablejs ? this.sortablejs instanceof u.SortablejsBindings ? this.sortablejs : new u.SortablejsBindings([this.sortablejs]) : new u.SortablejsBindings([])
            }, Object.defineProperty(n.prototype, "options", {
                get: function() {
                    return t({}, this.optionsWithoutEvents, this.overridenOptions)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "optionsWithoutEvents", {
                get: function() {
                    return t({}, this.globalConfig || {}, this.inputOptions || {})
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.proxyEvent = function(n) {
                for (var l = this, e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
                this.zone.run(function() {
                    var t;
                    l.optionsWithoutEvents && l.optionsWithoutEvents[n] && (t = l.optionsWithoutEvents)[n].apply(t, e)
                })
            }, Object.defineProperty(n.prototype, "isCloning", {
                get: function() {
                    return "clone" === this._sortable.options.group.checkPull(this._sortable, this._sortable)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.clone = function(n) {
                return (this.inputCloneFunction || function(n) {
                    return n
                })(n)
            }, Object.defineProperty(n.prototype, "overridenOptions", {
                get: function() {
                    var n = this;
                    return {
                        onAdd: function(l) {
                            n.service.transfer = function(e) {
                                n.getBindings().injectIntoEvery(l.newIndex, e), n.proxyEvent("onAdd", l)
                            }, n.proxyEvent("onAddOriginal", l)
                        },
                        onRemove: function(l) {
                            var e = n.getBindings();
                            e.provided && (n.isCloning ? (n.service.transfer(e.getFromEvery(l.oldIndex).map(function(l) {
                                return n.clone(l)
                            })), n.renderer.removeChild(l.item.parentNode, l.item), n.renderer.insertBefore(l.clone.parentNode, l.item, l.clone), n.renderer.removeChild(l.clone.parentNode, l.clone)) : n.service.transfer(e.extractFromEvery(l.oldIndex)), n.service.transfer = null), n.proxyEvent("onRemove", l)
                        },
                        onUpdate: function(l) {
                            var e = n.getBindings();
                            e.injectIntoEvery(l.newIndex, e.extractFromEvery(l.oldIndex)), n.proxyEvent("onUpdate", l)
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), n.decorators = [{
                type: i.Directive,
                args: [{
                    selector: "[sortablejs]"
                }]
            }], n.propDecorators = {
                sortablejs: [{
                    type: i.Input
                }],
                inputOptions: [{
                    type: i.Input,
                    args: ["sortablejsOptions"]
                }],
                inputCloneFunction: [{
                    type: i.Input,
                    args: ["sortablejsCloneFunction"]
                }],
                runInsideAngular: [{
                    type: i.Input
                }]
            }, n
        }()
    },
    c71n: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        }), e("kAEF");
        var t = function() {}
    },
    cCcU: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        });
        var t = e("WT6e"),
            i = function() {
                function n() {
                    this.sortEvent = new t.EventEmitter, this.label = "", this.active = !1, this.desc = !1, this.style = {}
                }
                return n.prototype.ngOnInit = function() {}, n.prototype.onClick = function() {
                    this.sortEvent.emit({
                        orderById: this.orderById,
                        desc: this.desc
                    })
                }, n.prototype.getStyle = function() {
                    return this.style
                }, n
            }()
    },
    ceAo: function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = e("/0DL"),
            u = e("jdtv"),
            o = e("Xjw4"),
            r = function() {
                function n() {
                    this.barWidth = 400, this.optionsCount = 0, this.total = 0, this.selectEven = new t.EventEmitter
                }
                return n.prototype.ngOnInit = function() {}, n.prototype.onSelectOption = function() {
                    this.selectEven.emit(this.option)
                }, n
            }(),
            s = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".option[_ngcontent-%COMP%]{padding-left:25px}.selector[_ngcontent-%COMP%]{position:absolute;top:-9px;left:-33px;cursor:pointer}.background[_ngcontent-%COMP%]{background-color:#eee;height:15px;border-radius:9px;margin-bottom:16px;margin-left:-5px;position:relative}.poll-bar[_ngcontent-%COMP%]{background-color:#ff9600;height:15px;border-radius:9px;width:0}"]
                ],
                data: {}
            });

        function a(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["[", "\u7968]"]))], null, function(n, l) {
                n(l, 1, 0, l.component.option.count)
            })
        }

        function c(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "option-count"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, a)), t["\u0275did"](3, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "]))], function(n, l) {
                var e = l.component;
                n(l, 3, 0, e.vote.isVoted || !e.vote.voteViewType)
            }, null)
        }

        function d(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "div", [
                ["class", "poll-bar"]
            ], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, o.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](2, {
                hot: 0,
                poor: 1
            }), t["\u0275did"](3, 278528, null, 0, o.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), t["\u0275pod"](4, {
                width: 0,
                "background-color": 1
            }), (n()(), t["\u0275ted"](-1, null, ["\n        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "poll-bar", n(l, 2, 0, e.total / e.option.count < .9 * e.optionsCount, e.total / e.option.count > 1.1 * e.optionsCount)), n(l, 3, 0, n(l, 4, 0, e.option.count / e.total * e.barWidth + "px", e.barColor))
            }, null)
        }

        function p(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 24, "div", [
                ["class", "option"]
            ], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, o.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), t["\u0275pod"](2, {
                width: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](4, 0, null, null, 11, "div", [
                ["class", "d-flex align-items-center position-relative"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](6, 0, null, null, 2, "div", [
                ["class", "dn-icon selector"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.onSelectOption() && t), t
            }, null, null)), t["\u0275did"](7, 278528, null, 0, o.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](8, {
                "icon-unselect": 0,
                "icon-select": 1
            }), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](10, 0, null, null, 1, "div", [
                ["class", "option-title mr-3"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](11, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, c)), t["\u0275did"](14, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](17, 0, null, null, 6, "div", [
                ["class", "background"]
            ], null, null, null, null, null)), t["\u0275did"](18, 278528, null, 0, o.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), t["\u0275pod"](19, {
                width: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, d)), t["\u0275did"](22, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, n(l, 2, 0, e.barWidth + "px")), n(l, 7, 0, "dn-icon selector", n(l, 8, 0, !e.option.selected, e.option.selected)), n(l, 14, 0, e.total > 0), n(l, 18, 0, n(l, 19, 0, e.barWidth + "px")), n(l, 22, 0, e.vote.isVoted || !e.vote.voteViewType || e.vote.uid === e.user.id)
            }, function(n, l) {
                n(l, 11, 0, l.component.option.title)
            })
        }
        e("8yiT"), e("Z5i1"), e("+SoF"), e("FI7P"), e("uwhN"), e.d(l, "a", function() {
            return g
        }), l.b = function(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275eld"](1, 0, null, null, 9, "div", [
                ["class", "poll mb-4"]
            ], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, o.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](3, {
                "hide-button": 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](6, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, P)), t["\u0275did"](9, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 2, 0, "poll mb-4", n(l, 3, 0, !e.showButton)), n(l, 6, 0, e.loading), n(l, 9, 0, e.poll)
            }, null)
        };
        var g = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                [".poll[_ngcontent-%COMP%]{position:relative;width:420px;min-height:200px}.poll.hide-button[_ngcontent-%COMP%]{min-height:160px}.option-title[_ngcontent-%COMP%]{line-height:24px;color:#000}.summary[_ngcontent-%COMP%]{color:#888;margin-bottom:5px}.dn-button[_ngcontent-%COMP%]{width:120px}.loading-overlay[_ngcontent-%COMP%]{min-height:100px;background-color:rgba(255,255,255,.8);z-index:1;position:absolute;left:0;right:0;top:0;bottom:0}.prompt[_ngcontent-%COMP%]{color:red}"]
            ],
            data: {}
        });

        function f(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "loading-overlay d-flex align-items-center justify-content-center"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "app-loader-spinner", [], null, null, null, i.b, i.a)), t["\u0275did"](3, 114688, null, 0, u.a, [], null, null), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], function(n, l) {
                n(l, 3, 0)
            }, null)
        }

        function h(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["\u53ef\u591a\u9009(\u6700\u591a", "\u4e2a\u9009\u9879)"]))], null, function(n, l) {
                n(l, 1, 0, l.component.poll.multipleOptions)
            })
        }

        function m(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "app-dn-poll-option", [], null, [
                [null, "selectEven"]
            ], function(n, l, e) {
                var t = !0;
                return "selectEven" === l && (t = !1 !== n.component.onSelectOption(e) && t), t
            }, p, s)), t["\u0275did"](1, 114688, null, 0, r, [], {
                vote: [0, "vote"],
                user: [1, "user"],
                option: [2, "option"],
                optionsCount: [3, "optionsCount"],
                total: [4, "total"],
                barColor: [5, "barColor"]
            }, {
                selectEven: "selectEven"
            })], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.poll, e.user, l.context.$implicit, e.poll.voteOptions.length, e.total, e.randomColors[l.context.index])
            }, null)
        }

        function v(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u8fd8\u6ca1\u6709\u7528\u6237\u53c2\u4e0e\uff0c\u6765\u6295\u4e0b\u7b2c\u4e00\u7968\u5427"]))], null, null)
        }

        function _(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u8fd8\u6ca1\u6709\u7528\u6237\u53c2\u4e0e"]))], null, null)
        }

        function b(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", "\u4eba\u5df2\u6295\u7968"]))], null, function(n, l) {
                n(l, 1, 0, l.component.poll.voteCount)
            })
        }

        function y(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u60a8\u5df2\u7ecf\u6295\u8fc7\u7968\u4e86"]))], null, null)
        }

        function x(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u60a8\u4e5f\u6765\u6295\u7968\u5427"]))], null, null)
        }

        function w(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [
                ["class", "prompt"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["(\u6295\u7968\u540e\u7ed3\u679c\u53ef\u89c1)"]))], null, null)
        }

        function C(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "div", [
                ["class", "vote-buttons d-flex"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](2, 0, null, null, 3, "div", [
                ["class", "dn-button"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.vote() && t), t
            }, null, null)), t["\u0275did"](3, 278528, null, 0, o.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](4, {
                "dn-button-disable": 0,
                "dn-button-blue": 1
            }), (n()(), t["\u0275ted"](-1, null, ["\u6295\u7968"])), (n()(), t["\u0275ted"](-1, null, ["\n        "]))], function(n, l) {
                var e = l.component;
                n(l, 3, 0, "dn-button", n(l, 4, 0, e.poll.isVoted || 0 === e.selectedOptions, e.selectedOptions > 0 && !e.poll.isVoted && !(e.selectedOptions > e.poll.multipleOptions)))
            }, null)
        }

        function P(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 37, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](2, 0, null, null, 4, "div", [
                ["class", ""]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, h)), t["\u0275did"](5, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](8, 0, null, null, 4, "div", [
                ["class", "options mt-3 mb-4"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, m)), t["\u0275did"](11, 802816, null, 0, o.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](14, 0, null, null, 19, "div", [
                ["class", "summary mb-3"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, v)), t["\u0275did"](17, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, _)), t["\u0275did"](20, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, b)), t["\u0275did"](23, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, y)), t["\u0275did"](26, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, x)), t["\u0275did"](29, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, w)), t["\u0275did"](32, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, C)), t["\u0275did"](36, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], function(n, l) {
                var e = l.component;
                n(l, 5, 0, e.poll.multipleOptions > 1), n(l, 11, 0, e.poll.voteOptions), n(l, 17, 0, 0 === e.poll.voteCount && e.showButton), n(l, 20, 0, 0 === e.poll.voteCount && !e.showButton), n(l, 23, 0, e.poll.voteCount > 0), n(l, 26, 0, e.poll.voteCount > 0 && e.poll.isVoted && e.showButton), n(l, 29, 0, e.poll.voteCount > 0 && !e.poll.isVoted && e.showButton), n(l, 32, 0, !e.poll.isVoted && e.poll.uid !== e.user.id && e.poll.voteViewType), n(l, 36, 0, e.showButton)
            }, null)
        }
    },
    fP1r: function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = e("SkYI"),
            u = e("IpMa"),
            o = e("D9YE"),
            r = e("FI7P"),
            s = e("+SoF"),
            a = e("zP1J"),
            c = e("Snuo"),
            d = e("CdNy"),
            p = e("qCm+"),
            g = e("Xjw4"),
            f = e("/0DL"),
            h = e("jdtv"),
            m = e("aNKT"),
            v = function() {
                function n(n, l, e) {
                    this.elRef = n, this.sanitizer = l, this._dnEmojiService = e, this.contenteditableModelChange = new t.EventEmitter, this.contenteditableHtml = !1
                }
                return n.prototype.ngOnChanges = function(n) {
                    n.contenteditableModel && (n.contenteditableModel.isFirstChange() && !this.contenteditableModel && this.onInput(!0), this.refreshView())
                }, n.prototype.onInput = function(n) {
                    void 0 === n && (n = !1);
                    var l = this.elRef.nativeElement[this.getProperty()];
                    n && (l = (l = l.replace(/^[\n\s]+/, "")).replace(/[\n\s]+$/, "")), this.contenteditableModelChange.emit(l)
                }, n.prototype.onPaste = function(n) {
                    n.preventDefault();
                    var l = n.clipboardData.getData("text/html");
                    l = this._dnEmojiService.emojiHtml2String(l);
                    var e = document.createElement("html");
                    e.innerHTML = l, l = e.innerText.replace(/^[\n\s]+/, "").replace(/[\n\s]+$/, "").replace(/\u00a0/g, " "), l = this._dnEmojiService.emojiString2Html(l), document.execCommand("insertHTML", !0, l)
                }, n.prototype.refreshView = function() {
                    var n = this.sanitize(this.contenteditableModel);
                    n !== this.elRef.nativeElement[this.getProperty()] && (this.elRef.nativeElement[this.getProperty()] = n)
                }, n.prototype.getProperty = function() {
                    return "innerHTML"
                }, n.prototype.sanitize = function(n) {
                    return this.contenteditableHtml ? this.sanitizer.sanitize(t.SecurityContext.HTML, n) : n
                }, n
            }(),
            _ = (e("4oid"), e("B3G4")),
            b = function() {
                function n(n) {
                    this._emojiPickerService = n
                }
                return n.prototype.select = function() {
                    this._emojiPickerService.selectEmoji(this.emoji)
                }, n
            }(),
            y = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    ["img[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;margin:0 auto}"]
                ],
                data: {}
            });

        function x(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [
                ["style", "height: 100%; width: 100%"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.select() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 0, "img", [], [
                [8, "title", 0],
                [8, "src", 4]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], null, function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.emoji.title, e.emoji.imageHost + e.emoji.image)
            })
        }
        var w = e("8/op"),
            C = function() {
                function n(n) {
                    this._sliderService = n, this.activeIndex = 0
                }
                return n.prototype.ngOnInit = function() {
                    var n = this;
                    this.subscription = this._sliderService.sliderSource$.subscribe(function(l) {
                        n.activeIndex = l
                    })
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription.unsubscribe()
                }, n
            }(),
            P = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function S(n) {
            return t["\u0275vid"](0, [t["\u0275ncd"](null, 0), (n()(), t["\u0275and"](0, null, null, 0))], null, null)
        }

        function R(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, S)), t["\u0275did"](1, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.activeIndex === e.Index)
            }, null)
        }
        var O = function() {
                function n(n) {
                    this._sliderService = n
                }
                return n.prototype.ngOnInit = function() {
                    var n = this;
                    this.subscription = this._sliderService.sliderSource$.subscribe(function(l) {
                        n.current = l
                    })
                }, n.prototype.selectSlider = function() {
                    this.index !== this.current && this._sliderService.changeCurrentIndex(this.index)
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription.unsubscribe()
                }, n
            }(),
            M = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".dot[_ngcontent-%COMP%]{width:10px;height:10px;display:block;background-color:#ccc;border-radius:50%;margin:0 8px;cursor:pointer}.dot[_ngcontent-%COMP%]:hover{background-color:#aaa}.dot.active[_ngcontent-%COMP%]{background-color:#888}"]
                ],
                data: {}
            });

        function T(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "span", [
                ["class", "dot"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.selectSlider() && t), t
            }, null, null)), t["\u0275did"](1, 278528, null, 0, g.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](2, {
                active: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "dot", n(l, 2, 0, e.index === e.current))
            }, null)
        }
        var k = function() {
                function n(n) {
                    this._sliderService = n, this.currentSlider = 0, this.sliderItems = 0, this.sliderStyle = {}, this.dots = []
                }
                return n.prototype.ngOnChanges = function(n) {
                    if (n.data) {
                        this.dots = [];
                        for (var l = 0; l < n.data.currentValue.pages; l++) this.dots.push("");
                        this.currentSlider = 0, this._sliderService.changeCurrentIndex(this.currentSlider)
                    }
                }, n.prototype.ngOnInit = function() {
                    var n = this;
                    this.subscription = this._sliderService.sliderSource$.subscribe(function(l) {
                        n.currentSlider = l
                    })
                }, n.prototype.slide = function(n) {
                    n < 0 && this.currentSlider + n > -1 && (this.currentSlider = this.currentSlider + n, this._sliderService.changeCurrentIndex(this.currentSlider)), n > 0 && this.currentSlider + n < this.sliderItems && (this.currentSlider = this.currentSlider + n, this._sliderService.changeCurrentIndex(this.currentSlider))
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription.unsubscribe()
                }, n
            }(),
            A = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".dn-slider[_ngcontent-%COMP%]{position:relative;height:100%;width:100%}.control[_ngcontent-%COMP%]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.control[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:opacity(15%);filter:opacity(15%)}.control[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{-webkit-filter:opacity(50%);filter:opacity(50%)}.prev[_ngcontent-%COMP%]{left:0}.next[_ngcontent-%COMP%]{right:0}.dots[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:8px}"]
                ],
                data: {}
            });

        function I(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [
                ["class", "control prev"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.slide(-1) && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](2, 0, null, null, 0, "img", [
                ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAKlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKE86IAAAADXRSTlMAAQcKDg9mZ2hplejp/0TjSAAAAD9JREFUCFtjYAADYQYYYFwdAGNK3T0EE1x7NwEueI0SQSQmkgKQcAFC+DqScANC+AaS8ASE8Ca48GoHGBPsIQCsex/6SU9nuQAAAABJRU5ErkJggg=="]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], null, null)
        }

        function E(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [
                ["class", "control next"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.slide(1) && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](2, 0, null, null, 0, "img", [
                ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAKlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKE86IAAAADXRSTlMAAQcKDg9mZ2hplejp/0TjSAAAADtJREFUCFtjYGBgFmCAgeiFMBbT2Vtw4dy7cGG2u1QQRjDZEQp64YIcCMG5cEFObIJMexHme8ONh3sIAMakIB3uNGtdAAAAAElFTkSuQmCC"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], null, null)
        }

        function N(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "app-slider-dots", [], null, null, null, T, M)), t["\u0275did"](1, 245760, null, 0, O, [w.a], {
                index: [0, "index"],
                current: [1, "current"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.context.index, l.component.currentSlider)
            }, null)
        }

        function D(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 16, "div", [
                ["class", "dn-slider"]
            ], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, g.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), t["\u0275ncd"](null, 0), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, I)), t["\u0275did"](6, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, E)), t["\u0275did"](9, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](11, 0, null, null, 4, "div", [
                ["class", "dots"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, N)), t["\u0275did"](14, 802816, null, 0, g.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.sliderStyle), n(l, 6, 0, e.sliderItems > 1), n(l, 9, 0, e.sliderItems > 1), n(l, 14, 0, e.dots)
            }, null)
        }
        var V = e("3AMW"),
            U = e("UPw7"),
            j = e("t8os"),
            z = e("3uOu"),
            B = function() {
                function n(n, l, e, t, i, u) {
                    var o = this;
                    this._dnEmojiService = n, this._emojiPickerService = l, this._cdr = e, this._rechargeBoxService = t, this._permission = i, this.store = u, this.subscriptions = [], this.show = !1, this.emojiSets = [], this.width = 430, this.height = 200, this.tabsStyle = {
                        border: "1px solid #ddd"
                    }, this.tabStyle = {
                        "background-color": "#f8f8f8",
                        "border-right": "1px solid #ddd",
                        "padding-top": "6px",
                        "padding-bottom": "6px",
                        "padding-left": "8px",
                        "padding-right": "8px",
                        color: "#222"
                    }, this.tabActiveStyle = {
                        "background-color": "#fff",
                        color: "#222",
                        "margin-top": "-1px",
                        "padding-top": "7px"
                    }, this.tabHoveredStyle = {
                        "background-color": "#f8f8f8",
                        color: "#222"
                    }, this.sliderItems = [], u.subscribe(function() {
                        return o.readState()
                    }), this.readState()
                }
                return n.prototype.readState = function() {
                    var n = this.store.getState().users;
                    this.user = n.currentUser
                }, n.prototype.ngOnInit = function() {
                    var n = this;
                    this.emojiSets.push(this._dnEmojiService.getEmojiItems()), this.emojiSets.push(this._dnEmojiService.getEmojiTuzki()), this.emojiSets.push(this._dnEmojiService.getEmojiRumi()), this.emojiSets.push(this._dnEmojiService.getEmojiCopyCat()), this.emojiSets.push(this._dnEmojiService.getEmojiMonkeys()), this.emojiSets.push(this._dnEmojiService.getEmojiOnions()), this.emojiSets.map(function(l) {
                        var e = Math.floor((n.height - 28) / l.height),
                            t = Math.floor((n.width - 40) / l.width),
                            i = e * t,
                            u = Math.ceil(l.items.length / i),
                            o = Math.floor((n.width - l.width * t - 2 * (t + 1)) / 2);
                        return l.rows = e, l.columns = t, l.pageSize = i, l.pages = u, l.horizonSpacing = o, l
                    }), this.tabs = this.emojiSets.map(function(n) {
                        return n.label
                    }), this.currentSet = this.emojiSets[0]
                }, n.prototype.onSelectTab = function(n) {
                    this.currentIndex = n, this.currentSet = this.emojiSets[n], this.sliderItems = [];
                    for (var l = 0; l < this.currentSet.pages; l++) this.sliderItems.push("");
                    this._cdr.detectChanges()
                }, n.prototype.containerStyle = function() {
                    return {
                        display: "block",
                        "background-color": "#fff",
                        "border-left": "1px solid #ddd",
                        "border-right": "1px solid #ddd",
                        "border-top": "1px solid #ddd",
                        "text-align": "center",
                        width: this.width + "px",
                        height: this.height + "px"
                    }
                }, n.prototype.sliderStyle = function() {
                    return {
                        "padding-left": this.currentSet.horizonSpacing + "px",
                        "padding-right": this.currentSet.horizonSpacing + "px"
                    }
                }, n.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(n) {
                        return n.unsubscribe()
                    })
                }, n.prototype.showRechargeBox = function() {
                    this._rechargeBoxService.changeDisplayStatus(!0)
                }, n.prototype.canNotUseVipEmoj = function() {
                    return 0 !== this.currentIndex && this.user && !(this.user.daysOfMembership > 0) && !this._permission.isValid(z.b.VIPFaceExpression)
                }, n
            }(),
            L = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".emoji-box[_ngcontent-%COMP%]{position:absolute;bottom:50px;right:0}.emoji-container[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;border:1px solid #ddd;margin:1px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.emoji-container[_ngcontent-%COMP%]:hover{border-color:#666}.vip-only[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:0;bottom:0;z-index:9;background-color:rgba(255,255,255,.8)}.dn-button[_ngcontent-%COMP%]{width:80px;border-radius:4px;margin:0 auto}.highlight-text[_ngcontent-%COMP%]{background-color:#666;color:#fff;padding:6px 12px}"]
                ],
                data: {}
            });

        function F(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 10, "div", [
                ["class", "vip-only d-flex align-items-center justify-content-center"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](2, 0, null, null, 7, "div", [
                ["class", "text-center"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](4, 0, null, null, 1, "div", [
                ["class", "highlight-text mb-3"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u4ec5\u9650VIP\u4f1a\u5458\u4f7f\u7528"])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](7, 0, null, null, 1, "div", [
                ["class", "dn-button dn-button-red"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.showRechargeBox() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u5347\u7ea7VIP"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "]))], null, null)
        }

        function K(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "emoji-container"]
            ], [
                [4, "width", "px"],
                [4, "height", "px"]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "app-emoji", [], null, null, null, x, y)), t["\u0275did"](3, 49152, null, 0, b, [_.a], {
                emoji: [0, "emoji"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "]))], function(n, l) {
                n(l, 3, 0, l.context.$implicit)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, e.currentSet.width, e.currentSet.height)
            })
        }

        function H(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "app-slider-item", [
                ["class", "d-flex flex-wrap"]
            ], null, null, null, R, P)), t["\u0275did"](1, 245760, null, 0, C, [w.a], {
                Index: [0, "Index"]
            }, null), (n()(), t["\u0275ted"](-1, 0, ["\n                "])), (n()(), t["\u0275and"](16777216, null, 0, 1, null, K)), t["\u0275did"](4, 802816, null, 0, g.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, 0, ["\n            "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, l.context.index), n(l, 4, 0, e.currentSet.items.slice(l.context.index * e.currentSet.pageSize, (l.context.index + 1) * e.currentSet.pageSize))
            }, null)
        }

        function $(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 12, "app-slider", [], null, null, null, D, A)), t["\u0275did"](1, 278528, null, 0, g.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), t["\u0275did"](2, 770048, null, 0, k, [w.a], {
                sliderItems: [0, "sliderItems"],
                sliderStyle: [1, "sliderStyle"],
                data: [2, "data"]
            }, null), (n()(), t["\u0275ted"](-1, 0, ["\n        "])), (n()(), t["\u0275and"](16777216, null, 0, 1, null, F)), t["\u0275did"](5, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, 0, ["\n        "])), (n()(), t["\u0275eld"](7, 0, null, 0, 4, "div", [
                ["class", "inner"],
                ["style", "padding-top: 8px;"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, H)), t["\u0275did"](10, 802816, null, 0, g.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, 0, ["\n    "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.containerStyle()), n(l, 2, 0, e.currentSet.pages, e.sliderStyle(), e.currentSet), n(l, 5, 0, e.canNotUseVipEmoj()), n(l, 10, 0, e.sliderItems)
            }, null)
        }

        function Y(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275eld"](1, 0, null, null, 7, "div", [
                ["class", "emoji-box"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, $)), t["\u0275did"](4, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](6, 0, null, null, 1, "app-tabs", [], null, [
                [null, "selectTabEvent"]
            ], function(n, l, e) {
                var t = !0;
                return "selectTabEvent" === l && (t = !1 !== n.component.onSelectTab(e) && t), t
            }, V.b, V.a)), t["\u0275did"](7, 638976, null, 0, U.a, [], {
                tabs: [0, "tabs"],
                tabsStyle: [1, "tabsStyle"],
                tabStyle: [2, "tabStyle"],
                tabActiveStyle: [3, "tabActiveStyle"],
                tabHoveredStyle: [4, "tabHoveredStyle"],
                showShadow: [5, "showShadow"],
                showHoverShadow: [6, "showHoverShadow"]
            }, {
                selectTabEvent: "selectTabEvent"
            }), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 4, 0, e.sliderItems.length && e.emojiSets.length), n(l, 7, 0, e.tabs, e.tabsStyle, e.tabStyle, e.tabActiveStyle, e.tabHoveredStyle, !1, !1)
            }, null)
        }
        var q = e("7DMc"),
            W = e("aBsJ"),
            Z = e("9TLe"),
            X = e("6XPQ"),
            G = [{
                label: "\u6240\u6709\u4eba\u53ef\u89c1",
                value: 0
            }, {
                label: "\u6295\u7968\u540e\u53ef\u89c1",
                value: 1
            }],
            Q = [{
                label: "\u5355\u9009",
                value: !1
            }, {
                label: "\u591a\u9009",
                value: !0
            }],
            J = e("QO/w"),
            nn = e("NPwD"),
            ln = e("Z5i1"),
            en = e("uwhN"),
            tn = e("5ggz"),
            un = function() {
                function n(n, l, e, i, u) {
                    var o = this;
                    this.formBuilder = n, this._pollService = l, this._toastService = e, this._commentListService = i, this.store = u, this.multipleSelectOptions = Q, this.viewVotingsOptions = G, this.maxTitleSize = 30, this.maxOptionCharacterSize = 12, this.closeEvent = new t.EventEmitter, u.subscribe(function() {
                        return o.readState()
                    }), this.readState()
                }
                return n.prototype.readState = function() {
                    var n = this.store.getState().users,
                        l = this.store.getState().video;
                    this.user = new J.a(!0), Object.assign(this.user, n.currentUser), this.video = new Object, Object.assign(this.video, l.currentVideo)
                }, Object.defineProperty(n.prototype, "title", {
                    get: function() {
                        return this.createPollForm.get("title")
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    this.createForm()
                }, n.prototype.createForm = function() {
                    this.fields = {
                        isRequired: !0,
                        type: {
                            options: [{
                                value: ""
                            }, {
                                value: ""
                            }]
                        }
                    }, this.createPollForm = this.formBuilder.group({
                        title: new q.f("", [q.u.required, q.u.maxLength(30)]),
                        multipleSelect: new q.f("false"),
                        viewResults: new q.f("0"),
                        type: this.formBuilder.group({
                            options: this.formBuilder.array(this.fields.type.options.map(function(n) {
                                return new q.f(n)
                            }))
                        })
                    })
                }, n.prototype.addOption = function() {
                    this.createPollForm.controls.type.controls.options.push(this.formBuilder.group({
                        value: ""
                    }))
                }, n.prototype.deleteOption = function(n) {
                    this.createPollForm.controls.type.controls.options.removeAt(n)
                }, n.prototype.close = function() {
                    this.closeEvent.emit("true")
                }, n.prototype.create = function() {
                    var n = this;
                    if (console.log(this.createPollForm), !this.createPollForm.valid) return Object.keys(this.createPollForm.controls).forEach(function(l) {
                        n.createPollForm.get(l).markAsTouched({
                            onlySelf: !0
                        }), n.createPollForm.get(l).markAsTouched({
                            onlySelf: !0
                        })
                    }), void this.createPollForm.controls.type.controls.options.markAsTouched();
                    this._pollService.create(this.user, this.createPollForm, this.video.id).subscribe(function(l) {
                        l.code || 1 === l[0].Code && (n.close(), n._commentListService.getComments(n.video.id, 1, 1).subscribe(function(l) {
                            n.store.dispatch({
                                type: nn.c,
                                comments: l
                            })
                        }), n._toastService.showBlackToast("\u53d1\u8868\u6210\u529f\uff01"), n.createForm())
                    })
                }, n
            }(),
            on = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".inner[_ngcontent-%COMP%]{position:relative;height:100%;width:100%}.title[_ngcontent-%COMP%]{padding:8px 12px}.bottom[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;bottom:10px;left:0;padding:1rem 1rem 2.5rem;text-align:center}.dn-button[_ngcontent-%COMP%]{width:116px!important;height:40px!important;font-size:15px!important;line-height:29px!important;border-radius:37px}.input-placeholder[_ngcontent-%COMP%]{width:390px}.form-row[_ngcontent-%COMP%]{padding:3px 10px;margin:0}.counter[_ngcontent-%COMP%]{margin:0;padding:.375rem .75rem;line-height:1.5;border:1px solid transparent;font-size:1rem;color:#707070}select#multipleSelect[_ngcontent-%COMP%], select#viewResults[_ngcontent-%COMP%]{width:auto}.delete[_ngcontent-%COMP%]{position:absolute;top:1px;right:0;font-size:24px}.delete[_ngcontent-%COMP%]:hover{color:red;cursor:pointer}perfect-scrollbar[_ngcontent-%COMP%] > .ps.ps--active-y[_ngcontent-%COMP%] > .ps__rail-y[_ngcontent-%COMP%]:hover{width:10px}.btn-add-option[_ngcontent-%COMP%]{position:absolute;right:0;top:0}.options[_ngcontent-%COMP%]{height:206px;margin-left:-5px;margin-right:-5px;padding:15px 7px;border-radius:5px;overflow:hidden}.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:175px}.vote-option[_ngcontent-%COMP%]{width:50%;padding:2px!important}.option-inner[_ngcontent-%COMP%]{padding:2px 8px;width:100%;position:relative;background-color:rgba(200,200,200,.3);border:1px dashed transparent}.option-inner[_ngcontent-%COMP%]:hover{cursor:move;background-color:#d9fbd5;border:1px solid green}.option-inner[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%]{cursor:move}.top-box[_ngcontent-%COMP%]{z-index:10000;position:fixed;right:0;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);min-height:200px;background-color:#fff;padding:12px;border:1px solid #222;-webkit-box-shadow:2px 2px 2px 0 rgba(0,0,0,.5);box-shadow:2px 2px 2px 0 rgba(0,0,0,.5)}.close-dialog[_ngcontent-%COMP%]{position:absolute;cursor:pointer;z-index:100;opacity:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;top:10px;right:10px}.close-btn[_ngcontent-%COMP%]{width:24px;height:24px;cursor:pointer}.closeme-button[_ngcontent-%COMP%]{display:block;width:24px;height:24px;overflow:hidden;background-image:url(/assets/images/closeme2.png)}.closeme-button[_ngcontent-%COMP%]:hover{background-position-y:-24px}.options.ng-touched[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%], input.ng-touched.ng-invalid[_ngcontent-%COMP%]{border:1px solid red}"]
                ],
                data: {}
            });

        function rn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u8bf7\u8f93\u5165\u6807\u9898"]))], null, null)
        }

        function sn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "counter form-error-message text-red"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, rn)), t["\u0275did"](3, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "]))], function(n, l) {
                var e = l.component;
                n(l, 3, 0, null == e.title.errors ? null : e.title.errors.required)
            }, null)
        }

        function an(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u6700\u591a30\u4e2a\u5b57\u7b26"]))], null, null)
        }

        function cn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "counter form-error-message text-red"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, an)), t["\u0275did"](3, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "]))], function(n, l) {
                var e = l.component;
                n(l, 3, 0, null == e.title.errors ? null : e.title.errors.maxlength)
            }, null)
        }

        function dn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](1, 147456, null, 0, q.q, [t.ElementRef, t.Renderer2, [2, q.t]], {
                value: [0, "value"]
            }, null), t["\u0275did"](2, 147456, null, 0, q.y, [t.ElementRef, t.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (n()(), t["\u0275ted"](3, null, ["", ""]))], function(n, l) {
                n(l, 1, 0, l.context.$implicit.value), n(l, 2, 0, l.context.$implicit.value)
            }, function(n, l) {
                n(l, 3, 0, l.context.$implicit.label)
            })
        }

        function pn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](1, 147456, null, 0, q.q, [t.ElementRef, t.Renderer2, [2, q.t]], {
                value: [0, "value"]
            }, null), t["\u0275did"](2, 147456, null, 0, q.y, [t.ElementRef, t.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (n()(), t["\u0275ted"](3, null, ["", ""]))], function(n, l) {
                n(l, 1, 0, l.context.$implicit.value), n(l, 2, 0, l.context.$implicit.value)
            }, function(n, l) {
                n(l, 3, 0, l.context.$implicit.label)
            })
        }

        function gn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "dn-button-plain btn-add-option"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.addOption() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["+ \u589e\u52a0\u9009\u9879"]))], null, null)
        }

        function fn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "label", [
                ["class", "ml-auto text-red"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u6700\u591a\u63d0\u4f9b8\u4e2a\u9009\u9879"]))], null, null)
        }

        function hn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 22, "div", [
                ["class", "vote-option form-row"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                            "])), (n()(), t["\u0275eld"](2, 0, null, null, 19, "div", [
                ["class", "option-inner d-inline-flex"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                                "])), (n()(), t["\u0275eld"](4, 0, null, null, 1, "label", [
                ["class", "label"]
            ], [
                [8, "htmlFor", 0]
            ], null, null, null, null)), (n()(), t["\u0275ted"](5, null, ["\u9009\u9879", ""])), (n()(), t["\u0275ted"](-1, null, ["\n                                "])), (n()(), t["\u0275eld"](7, 0, null, null, 11, "div", [
                ["class", ""]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                                    "])), (n()(), t["\u0275eld"](9, 0, null, null, 8, "input", [
                ["class", "form-control"],
                ["required", ""],
                ["type", "text"]
            ], [
                [8, "id", 0],
                [1, "required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"]
            ], function(n, l, e) {
                var i = !0;
                return "input" === l && (i = !1 !== t["\u0275nov"](n, 10)._handleInput(e.target.value) && i), "blur" === l && (i = !1 !== t["\u0275nov"](n, 10).onTouched() && i), "compositionstart" === l && (i = !1 !== t["\u0275nov"](n, 10)._compositionStart() && i), "compositionend" === l && (i = !1 !== t["\u0275nov"](n, 10)._compositionEnd(e.target.value) && i), "ngModelChange" === l && (i = !1 !== (n.context.$implicit.value.value = e) && i), i
            }, null, null)), t["\u0275did"](10, 16384, null, 0, q.c, [t.Renderer2, t.ElementRef, [2, q.a]], null, null), t["\u0275did"](11, 16384, null, 0, q.s, [], {
                required: [0, "required"]
            }, null), t["\u0275prd"](1024, null, q.k, function(n) {
                return [n]
            }, [q.s]), t["\u0275prd"](1024, null, q.l, function(n) {
                return [n]
            }, [q.c]), t["\u0275did"](14, 671744, null, 0, q.p, [
                [2, q.b],
                [2, q.k],
                [8, null],
                [2, q.l]
            ], {
                name: [0, "name"],
                model: [1, "model"],
                options: [2, "options"]
            }, {
                update: "ngModelChange"
            }), t["\u0275pod"](15, {
                standalone: 0
            }), t["\u0275prd"](2048, null, q.m, null, [q.p]), t["\u0275did"](17, 16384, null, 0, q.n, [q.m], null, null), (n()(), t["\u0275ted"](-1, null, ["\n                                "])), (n()(), t["\u0275ted"](-1, null, ["\n                                "])), (n()(), t["\u0275eld"](20, 0, null, null, 0, "span", [
                ["class", "dn-icon icon-cancel delete"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.deleteOption(n.context.index) && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                            "])), (n()(), t["\u0275ted"](-1, null, ["\n                        "]))], function(n, l) {
                n(l, 11, 0, ""), n(l, 14, 0, "option" + l.context.index, l.context.$implicit.value.value, n(l, 15, 0, !0))
            }, function(n, l) {
                n(l, 4, 0, "option" + l.context.index), n(l, 5, 0, l.context.index + 1), n(l, 9, 0, "option" + l.context.index, t["\u0275nov"](l, 11).required ? "" : null, t["\u0275nov"](l, 17).ngClassUntouched, t["\u0275nov"](l, 17).ngClassTouched, t["\u0275nov"](l, 17).ngClassPristine, t["\u0275nov"](l, 17).ngClassDirty, t["\u0275nov"](l, 17).ngClassValid, t["\u0275nov"](l, 17).ngClassInvalid, t["\u0275nov"](l, 17).ngClassPending)
            })
        }

        function mn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 118, "div", [
                ["class", "top-box"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 115, "div", [
                ["class", "inner"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](5, 0, null, null, 111, "form", [
                ["novalidate", ""]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngSubmit"],
                [null, "submit"],
                [null, "reset"]
            ], function(n, l, e) {
                var i = !0,
                    u = n.component;
                return "submit" === l && (i = !1 !== t["\u0275nov"](n, 7).onSubmit(e) && i), "reset" === l && (i = !1 !== t["\u0275nov"](n, 7).onReset() && i), "ngSubmit" === l && (i = !1 !== u.create() && i), i
            }, null, null)), t["\u0275did"](6, 16384, null, 0, q.w, [], null, null), t["\u0275did"](7, 540672, null, 0, q.h, [
                [8, null],
                [8, null]
            ], {
                form: [0, "form"]
            }, {
                ngSubmit: "ngSubmit"
            }), t["\u0275prd"](2048, null, q.b, null, [q.h]), t["\u0275did"](9, 16384, null, 0, q.o, [q.b], null, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](11, 0, null, null, 9, "div", [
                ["class", "d-flex"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](13, 0, null, null, 1, "h4", [
                ["class", "title"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u53d1\u8d77\u6295\u7968"])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](16, 0, null, null, 3, "a", [
                ["class", "close-dialog"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.close() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](18, 0, null, null, 0, "span", [
                ["class", "closeme-button"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](22, 0, null, null, 84, "div", [
                ["class", "content"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](24, 0, null, null, 22, "div", [
                ["class", "d-flex form-row"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](26, 0, null, null, 1, "label", [
                ["class", "label"],
                ["for", "title"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u6807\u9898\uff1a"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](29, 0, null, null, 10, "div", [
                ["class", "input-placeholder"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275eld"](31, 0, null, null, 7, "input", [
                ["class", "form-control"],
                ["formControlName", "title"],
                ["name", "title"],
                ["required", ""],
                ["type", "text"]
            ], [
                [1, "required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"]
            ], function(n, l, e) {
                var i = !0;
                return "input" === l && (i = !1 !== t["\u0275nov"](n, 32)._handleInput(e.target.value) && i), "blur" === l && (i = !1 !== t["\u0275nov"](n, 32).onTouched() && i), "compositionstart" === l && (i = !1 !== t["\u0275nov"](n, 32)._compositionStart() && i), "compositionend" === l && (i = !1 !== t["\u0275nov"](n, 32)._compositionEnd(e.target.value) && i), i
            }, null, null)), t["\u0275did"](32, 16384, null, 0, q.c, [t.Renderer2, t.ElementRef, [2, q.a]], null, null), t["\u0275did"](33, 16384, null, 0, q.s, [], {
                required: [0, "required"]
            }, null), t["\u0275prd"](1024, null, q.k, function(n) {
                return [n]
            }, [q.s]), t["\u0275prd"](1024, null, q.l, function(n) {
                return [n]
            }, [q.c]), t["\u0275did"](36, 671744, null, 0, q.g, [
                [3, q.b],
                [2, q.k],
                [8, null],
                [2, q.l]
            ], {
                name: [0, "name"]
            }, null), t["\u0275prd"](2048, null, q.m, null, [q.g]), t["\u0275did"](38, 16384, null, 0, q.n, [q.m], null, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, sn)), t["\u0275did"](42, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, cn)), t["\u0275did"](45, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](48, 0, null, null, 29, "div", [
                ["class", "d-flex form-row"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](50, 0, null, null, 1, "label", [
                ["class", "label"],
                ["for", "multipleSelect"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u7c7b\u578b\uff1a"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](53, 0, null, null, 9, "select", [
                ["class", "form-control"],
                ["formControlName", "multipleSelect"],
                ["id", "multipleSelect"],
                ["name", "multipleSelect"]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "change"],
                [null, "blur"]
            ], function(n, l, e) {
                var i = !0;
                return "change" === l && (i = !1 !== t["\u0275nov"](n, 54).onChange(e.target.value) && i), "blur" === l && (i = !1 !== t["\u0275nov"](n, 54).onTouched() && i), i
            }, null, null)), t["\u0275did"](54, 16384, null, 0, q.t, [t.Renderer2, t.ElementRef], null, null), t["\u0275prd"](1024, null, q.l, function(n) {
                return [n]
            }, [q.t]), t["\u0275did"](56, 671744, null, 0, q.g, [
                [3, q.b],
                [8, null],
                [8, null],
                [2, q.l]
            ], {
                name: [0, "name"]
            }, null), t["\u0275prd"](2048, null, q.m, null, [q.g]), t["\u0275did"](58, 16384, null, 0, q.n, [q.m], null, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, dn)), t["\u0275did"](61, 802816, null, 0, g.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](64, 0, null, null, 1, "label", [
                ["class", "label"],
                ["for", "viewResults"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u7ed3\u679c\uff1a"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](67, 0, null, null, 9, "select", [
                ["class", "form-control"],
                ["formControlName", "viewResults"],
                ["id", "viewResults"],
                ["name", "viewResults"]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "change"],
                [null, "blur"]
            ], function(n, l, e) {
                var i = !0;
                return "change" === l && (i = !1 !== t["\u0275nov"](n, 68).onChange(e.target.value) && i), "blur" === l && (i = !1 !== t["\u0275nov"](n, 68).onTouched() && i), i
            }, null, null)), t["\u0275did"](68, 16384, null, 0, q.t, [t.Renderer2, t.ElementRef], null, null), t["\u0275prd"](1024, null, q.l, function(n) {
                return [n]
            }, [q.t]), t["\u0275did"](70, 671744, null, 0, q.g, [
                [3, q.b],
                [8, null],
                [8, null],
                [2, q.l]
            ], {
                name: [0, "name"]
            }, null), t["\u0275prd"](2048, null, q.m, null, [q.g]), t["\u0275did"](72, 16384, null, 0, q.n, [q.m], null, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, pn)), t["\u0275did"](75, 802816, null, 0, g.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](79, 0, null, null, 10, "div", [
                ["class", "form-row d-flex position-relative"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](81, 0, null, null, 1, "label", [
                ["class", "label"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u9009\u9879\uff1a(\u6295\u7968\u81f3\u5c11\u5e94\u6709\u4e24\u4e2a\u9009\u9879\uff0c\u6bcf\u4e2a\u9009\u9879\u6700\u591a\u53ef\u8f93\u516512\u4e2a\u5b57\u7b26)"])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, gn)), t["\u0275did"](85, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, fn)), t["\u0275did"](88, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](91, 0, null, null, 14, "div", [
                ["class", "mt-2 options"],
                ["formGroupName", "type"]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], null, null, null, null)), t["\u0275did"](92, 212992, null, 0, q.i, [
                [3, q.b],
                [8, null],
                [8, null]
            ], {
                name: [0, "name"]
            }, null), t["\u0275prd"](2048, null, q.b, null, [q.i]), t["\u0275did"](94, 16384, null, 0, q.o, [q.b], null, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](96, 0, null, null, 8, "div", [
                ["class", "s-inner d-flex flex-wrap"],
                ["formArrayName", "options"]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], null, null, null, null)), t["\u0275did"](97, 212992, null, 0, q.d, [
                [3, q.b],
                [8, null],
                [8, null]
            ], {
                name: [0, "name"]
            }, null), t["\u0275prd"](2048, null, q.b, null, [q.d]), t["\u0275did"](99, 16384, null, 0, q.o, [q.b], null, null), t["\u0275did"](100, 737280, null, 0, W.SortablejsDirective, [
                [2, Z.GLOBALS], X.SortablejsService, t.ElementRef, t.NgZone, t.Renderer2
            ], {
                sortablejs: [0, "sortablejs"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, hn)), t["\u0275did"](103, 802816, null, 0, g.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](108, 0, null, null, 7, "div", [
                ["class", "bottom d-flex justify-content-center "]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](110, 0, null, null, 1, "button", [
                ["class", "dn-button dn-button-blue mr-3"],
                ["href", "javascript:void(0); "]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u53d1\u8d77\u6295\u7968"])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](113, 0, null, null, 1, "a", [
                ["class", "dn-button "],
                ["href", "javascript:void(0); "]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.close() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u53d6\u6d88"])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 7, 0, e.createPollForm), n(l, 33, 0, ""), n(l, 36, 0, "title"), n(l, 42, 0, e.title.invalid && e.title.touched), n(l, 45, 0, e.title.invalid && e.title.touched), n(l, 56, 0, "multipleSelect"), n(l, 61, 0, e.multipleSelectOptions), n(l, 70, 0, "viewResults"), n(l, 75, 0, e.viewVotingsOptions), n(l, 85, 0, e.createPollForm.controls.type.controls.options.controls.length < 8), n(l, 88, 0, 8 === e.createPollForm.controls.type.controls.options.controls.length), n(l, 92, 0, "type"), n(l, 97, 0, "options"), n(l, 100, 0, e.createPollForm.value.type.options), n(l, 103, 0, e.createPollForm.controls.type.controls.options.controls)
            }, function(n, l) {
                n(l, 5, 0, t["\u0275nov"](l, 9).ngClassUntouched, t["\u0275nov"](l, 9).ngClassTouched, t["\u0275nov"](l, 9).ngClassPristine, t["\u0275nov"](l, 9).ngClassDirty, t["\u0275nov"](l, 9).ngClassValid, t["\u0275nov"](l, 9).ngClassInvalid, t["\u0275nov"](l, 9).ngClassPending), n(l, 31, 0, t["\u0275nov"](l, 33).required ? "" : null, t["\u0275nov"](l, 38).ngClassUntouched, t["\u0275nov"](l, 38).ngClassTouched, t["\u0275nov"](l, 38).ngClassPristine, t["\u0275nov"](l, 38).ngClassDirty, t["\u0275nov"](l, 38).ngClassValid, t["\u0275nov"](l, 38).ngClassInvalid, t["\u0275nov"](l, 38).ngClassPending), n(l, 53, 0, t["\u0275nov"](l, 58).ngClassUntouched, t["\u0275nov"](l, 58).ngClassTouched, t["\u0275nov"](l, 58).ngClassPristine, t["\u0275nov"](l, 58).ngClassDirty, t["\u0275nov"](l, 58).ngClassValid, t["\u0275nov"](l, 58).ngClassInvalid, t["\u0275nov"](l, 58).ngClassPending), n(l, 67, 0, t["\u0275nov"](l, 72).ngClassUntouched, t["\u0275nov"](l, 72).ngClassTouched, t["\u0275nov"](l, 72).ngClassPristine, t["\u0275nov"](l, 72).ngClassDirty, t["\u0275nov"](l, 72).ngClassValid, t["\u0275nov"](l, 72).ngClassInvalid, t["\u0275nov"](l, 72).ngClassPending), n(l, 91, 0, t["\u0275nov"](l, 94).ngClassUntouched, t["\u0275nov"](l, 94).ngClassTouched, t["\u0275nov"](l, 94).ngClassPristine, t["\u0275nov"](l, 94).ngClassDirty, t["\u0275nov"](l, 94).ngClassValid, t["\u0275nov"](l, 94).ngClassInvalid, t["\u0275nov"](l, 94).ngClassPending), n(l, 96, 0, t["\u0275nov"](l, 99).ngClassUntouched, t["\u0275nov"](l, 99).ngClassTouched, t["\u0275nov"](l, 99).ngClassPristine, t["\u0275nov"](l, 99).ngClassDirty, t["\u0275nov"](l, 99).ngClassValid, t["\u0275nov"](l, 99).ngClassInvalid, t["\u0275nov"](l, 99).ngClassPending)
            })
        }

        function vn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "div", [
                ["class", "top-mask"]
            ], null, null, null, null, null))], null, null)
        }

        function _n(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, mn)), t["\u0275did"](1, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275and"](16777216, null, null, 1, null, vn)), t["\u0275did"](4, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.showing), n(l, 4, 0, e.showing)
            }, null)
        }
        e("fUIa"), e("bfOx"), e("FWfI"), e("Ohpo"), e.d(l, "a", function() {
            return bn
        }), l.b = function(n) {
            return t["\u0275vid"](0, [t["\u0275qud"](671088640, 1, {
                editorRef: 0
            }), (n()(), t["\u0275and"](16777216, null, null, 1, null, yn)), t["\u0275did"](2, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n\n"])), (n()(), t["\u0275eld"](4, 0, null, null, 63, "div", [
                ["class", "comment-box"],
                ["id", "comment-box"]
            ], null, null, null, null, null)), t["\u0275did"](5, 278528, null, 0, g.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](6, {
                focused: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, xn)), t["\u0275did"](9, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](11, 0, null, null, 13, "div", [
                ["class", "d-flex"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, wn)), t["\u0275did"](14, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Cn)), t["\u0275did"](17, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Pn)), t["\u0275did"](20, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Sn)), t["\u0275did"](23, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Rn)), t["\u0275did"](28, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](31, 0, null, null, 32, "div", [
                ["class", "comment-tools"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](33, 0, null, null, 29, "div", [
                ["class", "comment-tools-inner d-flex"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, On)), t["\u0275did"](36, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, Mn)), t["\u0275did"](40, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](42, 0, null, null, 19, "div", [
                ["class", "ml-auto d-flex align-items-center"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 2, null, Tn)), t["\u0275did"](45, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](0, g.JsonPipe, []), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](48, 0, null, null, 6, "div", [
                ["class", "d-flex mr-4 align-items-center"],
                ["style", "cursor: pointer;"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.toggleEmojiPicker() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](50, 0, null, null, 0, "img", [
                ["class", "mr-2"],
                ["src", "/assets/images/smile.png"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](52, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u8868\u60c5"])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](56, 0, null, null, 1, "div", [
                ["class", "dn-button dn-button-red"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.publishComment() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u53d1\u8868"])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, kn)), t["\u0275did"](60, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, An)), t["\u0275did"](66, 16384, null, 0, g.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n\n"])), (n()(), t["\u0275eld"](69, 0, null, null, 1, "app-voting-creator", [], null, [
                [null, "closeEvent"]
            ], function(n, l, e) {
                var t = !0;
                return "closeEvent" === l && (t = !1 !== n.component.closeVotingCreatorDialog() && t), t
            }, _n, on)), t["\u0275did"](70, 114688, null, 0, un, [q.e, ln.a, en.a, tn.a, p.a], {
                showing: [0, "showing"]
            }, {
                closeEvent: "closeEvent"
            }), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.showReply && e.reply && e.reply.author), n(l, 5, 0, "comment-box", n(l, 6, 0, e.focused)), n(l, 9, 0, e.publishing), n(l, 14, 0, e.user && e.user.id && e.reply && !e.reply.author), n(l, 17, 0, e.user && e.user.id && e.reply && e.reply.floor), n(l, 20, 0, e.user && e.user.id && e.reply && e.reply.author && !e.reply.floor), n(l, 23, 0, e.user && e.user.id && e.reply.author && "video" === e.hostPage), n(l, 28, 0, e.user && e.user.id), n(l, 36, 0, e.charactersLeft > 0), n(l, 40, 0, e.charactersLeft < 0), n(l, 45, 0, "video" === e.hostPage && (!e.reply || "{}" === t["\u0275unv"](l, 45, 0, t["\u0275nov"](l, 46).transform(e.reply)))), n(l, 60, 0, e.showEmojiPicker), n(l, 66, 0, !e.user || !e.user.id), n(l, 70, 0, e.showVotingCreator)
            }, null)
        };
        var bn = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                [".text-gray[_ngcontent-%COMP%]{color:#f8f8f8!important}.text-light[_ngcontent-%COMP%]{color:#999!important}.text-dark[_ngcontent-%COMP%]{color:#434343}.text-large[_ngcontent-%COMP%]{font-size:18px}text-medium[_ngcontent-%COMP%]{font-size:16px}.text-small[_ngcontent-%COMP%]{font-size:13px}.dn-button[_ngcontent-%COMP%]{border:none;outline:0!important;display:block;padding:6px 8px;width:auto;min-width:100px;margin:0 .4rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;color:#fff!important;background-color:silver}.dn-button[_ngcontent-%COMP%]:hover{background-color:#cacaca}.dn-button-plain[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid silver;color:#000!important;background-color:#fff;padding:6px 20px;cursor:pointer}.dn-button-plain[_ngcontent-%COMP%]:hover{background-color:#cacaca;color:#fff!important}.dn-button-outline[_ngcontent-%COMP%]{outline:0!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:2px solid silver;border-radius:2px;background-color:#fff;padding:2px 14px;cursor:pointer}.dn-button-outline[_ngcontent-%COMP%]:hover{background-color:#cacaca;color:#fff!important}.dn-button-outline.orange[_ngcontent-%COMP%]{color:#f49800;border-color:#f49800;background-color:#434343}.dn-button-outline.orange[_ngcontent-%COMP%]:hover{color:#fe9e00!important;border-color:#fe9e00!important;background-color:#000}.dn-button-blue[_ngcontent-%COMP%]{color:#fff!important;background-color:#00a8ec}.dn-button-blue[_ngcontent-%COMP%]:hover{background-color:#00b6ff}.dn-button-disable[_ngcontent-%COMP%]{cursor:default;color:#fff!important;background-color:#ddd!important}.dn-button-orange[_ngcontent-%COMP%]{color:#fff!important;background-color:#f49800}.dn-button-orange[_ngcontent-%COMP%]:hover{background-color:#fe9e00}.dn-button-gold[_ngcontent-%COMP%]{color:#fff!important;background-color:#f49800}.dn-button-gold[_ngcontent-%COMP%]:hover{background-color:#fe9e00}.dn-button-red[_ngcontent-%COMP%]{color:#fff!important;background-color:#e81d00}.dn-button-red[_ngcontent-%COMP%]:hover{background-color:red}.dn-button-large[_ngcontent-%COMP%]{padding:10px 18px}.dn-play-button[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:4px 12px;border-radius:3px;font-size:16px;display:inline-block;color:#fff!important;background-color:#f00000}.dn-play-button[_ngcontent-%COMP%]:hover{background-color:#f10000}.dn-play-button[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:20px;vertical-align:middle}.dn-play-button[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{display:inline-block;border-left:1px solid #fff;padding:3px 8px 3px 10px;vertical-align:middle}.dn-btn-load-more[_ngcontent-%COMP%]{cursor:pointer;padding:5px 15px}.link-blue[_ngcontent-%COMP%]{color:#00a8ec}.link-blue[_ngcontent-%COMP%]:hover{color:#434343}.red[_ngcontent-%COMP%]{color:#f00000}.rose[_ngcontent-%COMP%]{color:#ff01ff}.orange[_ngcontent-%COMP%]{color:#fe9e00}.comment-box[_ngcontent-%COMP%]{border:1px solid #cdcdcd;min-height:12em;padding:4px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;border-radius:3px}.comment-box.focused[_ngcontent-%COMP%]{border:1px solid #666}.comment-tools[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;height:44px;padding:4px 12px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.comment-tools-inner[_ngcontent-%COMP%]{border-top:1px solid #eee;width:100%;height:100%;padding-top:3px}.counter[_ngcontent-%COMP%]{line-height:32px}.comment-input[_ngcontent-%COMP%]{padding:1em 1em 50px;width:100%;height:100%}.comment-prompt[_ngcontent-%COMP%]{padding:12px 12px 0}.dn-button[_ngcontent-%COMP%]{border-radius:4px;min-width:80px}.comment-box-mask-layer[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(255,255,255,0)}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#fff;z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:.8}.new-comment[_ngcontent-%COMP%]{color:#666;text-decoration:underline;cursor:pointer}[contenteditable=true][_ngcontent-%COMP%]:empty:before{content:attr(placeholder);display:block;color:#aaa;cursor:text}"]
            ],
            data: {}
        });

        function yn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "app-dn-comment", [], null, null, null, i.b, i.a)), t["\u0275did"](1, 114688, null, 0, u.a, [o.a, r.a, s.a, a.a, c.a, d.b, p.a, g.DOCUMENT], {
                comment: [0, "comment"],
                isLast: [1, "isLast"],
                showControls: [2, "showControls"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                n(l, 1, 0, l.component.reply, !0, !1)
            }, null)
        }

        function xn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 10, "div", [
                ["class", "loading-overlay"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](2, 0, null, null, 7, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](4, 0, null, null, 1, "app-loader-spinner", [], null, null, null, f.b, f.a)), t["\u0275did"](5, 114688, null, 0, h.a, [], null, null), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u6b63\u5728\u53d1\u8868..."])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], function(n, l) {
                n(l, 5, 0)
            }, null)
        }

        function wn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "comment-prompt"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u8bf7\u5728\u6b64\u53d1\u8868\u610f\u89c1"]))], null, null)
        }

        function Cn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "comment-prompt text-green"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["\u56de\u590d", "@", "\u697c"]))], null, function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.reply.author, e.reply.floor)
            })
        }

        function Pn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "comment-prompt text-green"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["\u56de\u590d", "@", ""]))], null, function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.reply.author, e.reply.video)
            })
        }

        function Sn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "new-comment comment-prompt ml-auto"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.newComment() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u53d1\u8868\u65b0\u7684\u8bc4\u8bba"]))], null, null)
        }

        function Rn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, [
                [1, 0],
                ["editor", 1]
            ], null, 2, "div", [
                ["class", "comment-input"],
                ["contenteditable", "true"],
                ["id", "comment-input"],
                ["placeholder", "\u6ce8\u610f\uff0c\u4ee5\u4e0b\u884c\u4e3a\u5c06\u88ab\u5c01\u53f7\uff1a\u4e25\u91cd\u5267\u900f\u3001\u53d1\u5e03\u5e7f\u544a\u3001\u6728\u9a6c\u94fe\u63a5\u3001\u5ba3\u4f20\u540c\u7c7b\u7f51\u7ad9\u3001\u8fb1\u9a82\u5de5\u4f5c\u4eba\u5458\u7b49\u3002"]
            ], null, [
                [null, "contenteditableModelChange"],
                [null, "focusin"],
                [null, "focusout"],
                [null, "dragover"],
                [null, "dragleave"],
                [null, "drop"],
                [null, "blur"],
                [null, "input"],
                [null, "keyup"],
                [null, "paste"]
            ], function(n, l, e) {
                var i = !0,
                    u = n.component;
                return "input" === l && (i = !1 !== t["\u0275nov"](n, 1).onInput() && i), "blur" === l && (i = !1 !== t["\u0275nov"](n, 1).onInput() && i), "keyup" === l && (i = !1 !== t["\u0275nov"](n, 1).onInput() && i), "paste" === l && (i = !1 !== t["\u0275nov"](n, 1).onPaste(e) && i), "contenteditableModelChange" === l && (i = !1 !== (u.comment = e) && i), "contenteditableModelChange" === l && (i = !1 !== u.onChange() && i), "focusin" === l && (i = !1 !== u.onFocusIn() && i), "focusout" === l && (i = !1 !== u.onFocusOut() && i), "dragover" === l && (i = !1 !== u.onDragOver(e) && i), "dragleave" === l && (i = !1 !== u.onDragLeave(e) && i), "drop" === l && (i = !1 !== u.onDrop(e) && i), "blur" === l && (i = !1 !== u.onTextAreaBlur() && i), i
            }, null, null)), t["\u0275did"](1, 540672, null, 0, v, [t.ElementRef, t.Sanitizer, m.a], {
                contenteditableModel: [0, "contenteditableModel"]
            }, {
                contenteditableModelChange: "contenteditableModelChange"
            }), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], function(n, l) {
                n(l, 1, 0, l.component.comment)
            }, null)
        }

        function On(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [
                ["class", "counter"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u8fd8\u53ef\u4ee5\u8f93\u5165"])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\u5b57"]))], null, function(n, l) {
                n(l, 3, 0, l.component.charactersLeft)
            })
        }

        function Mn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [
                ["class", "counter red"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u60a8\u53d1\u8868\u7684\u5185\u5bb9\u8fc7\u957f\uff0c\u8bf7\u7b80\u77ed\u53d1\u8a00"]))], null, null)
        }

        function Tn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "div", [
                ["class", "mr-4 d-flex align-items-center"],
                ["style", "cursor: pointer;"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.openVotingCreatorDialog() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](2, 0, null, null, 0, "img", [
                ["class", "mr-2"],
                ["src", "/assets/images/vote.png"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u53d1\u8d77\u6295\u7968"])), (n()(), t["\u0275ted"](-1, null, ["\n                "]))], null, null)
        }

        function kn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "app-emoji-box", [], null, [
                [null, "close"]
            ], function(n, l, e) {
                var t = !0;
                return "close" === l && (t = 0 != (n.component.showEmojiPicker = !1) && t), t
            }, Y, L)), t["\u0275did"](1, 245760, null, 0, B, [m.a, _.a, t.ChangeDetectorRef, j.a, z.a, p.a], null, null)], function(n, l) {
                n(l, 1, 0)
            }, null)
        }

        function An(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 8, "div", [
                ["class", "comment-box-mask-layer"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.login() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](3, 0, null, null, 4, "div", [
                ["class", "comment-prompt"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.newComment() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u60a8\u8fd8\u672a\u767b\u5f55\uff0c\u8bf7\u5148"])), (n()(), t["\u0275eld"](5, 0, null, null, 1, "span", [
                ["class", "text-red"],
                ["style", "cursor: pointer;"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.login() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["[\u767b\u5f55]"])), (n()(), t["\u0275ted"](-1, null, ["\u540e\u518d\u53d1\u8868\u8bc4\u8bba"])), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], null, null)
        }
    },
    fUIa: function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = (e("B3G4"), e("4oid")),
            u = (e("aNKT"), e("bfOx")),
            o = e("aaAU"),
            r = e("NPwD"),
            s = e("QO/w"),
            a = (e("FI7P"), e("D9YE"), e("5ggz"), e("+SoF")),
            c = (e("zP1J"), e("uwhN"), e("bvcM")),
            d = e("FWfI");
        e("Ohpo"), e("Snuo");
        var p = e("3uOu");
        e.d(l, "a", function() {
            return g
        });
        var g = function() {
            function n(n, l, e, i, u, o, r, s, a, c, d, p, g, f, h, m, v, _) {
                var b = this;
                this._emojiPickerService = n, this._dnEmojiService = l, this._dnDialogService = e, this._commentService = i, this._commentListService = u, this._commentBoxService = o, this._messageDialogService = r, this.pageScrollService = s, this._router = a, this._route = c, this.cdRef = d, this._toastService = p, this._confirmDialogService = g, this._userService = f, this._notificationService = h, this._permission = m, this.store = v, this.document = _, this.subscriptions = [], this.close = new t.EventEmitter, this.replySuccessEvent = new t.EventEmitter, this.hostPage = "video", this.showReply = !0, this.reply = {}, this.publishing = !1, this.showEmojiPicker = !1, this.comment = "", this.maxiumCharacters = 255, this.charactersLeft = 255, this.focused = !1, this.showVotingCreator = !1, this.AppStoreUnsubscribe = v.subscribe(function() {
                    return b.readState()
                }), this.readState()
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.focused = !1, this.subscriptions.push(this._emojiPickerService.emojiSource$.subscribe(function(l) {
                    l && l.hasOwnProperty("id") && (function(n) {
                        if (!n) return !1;
                        if (window.getSelection) {
                            var l = window.getSelection();
                            return l.removeAllRanges(), l.addRange(n), !0
                        }
                        document.getSelection && n.select && n.select()
                    }(n.savedSelection), n.pasteHtmlAtCaret(Object.assign(new i.a, l).html, !1), n._emojiPickerService.selectEmoji(null))
                })), this.subscriptions.push(this._router.events.subscribe(function(l) {
                    l instanceof u.e && (n._route.snapshot.queryParams.from || n._commentBoxService.clearCommentBoxReply())
                })), this.subscriptions.push(this._route.queryParams.subscribe(function(l) {
                    n._route.snapshot.queryParams.from || n._commentBoxService.clearCommentBoxReply()
                }))
            }, n.prototype.readState = function() {
                var n = this,
                    l = this.store.getState(),
                    e = l.users;
                this.user = new s.a(!0), Object.assign(this.user, e.currentUser);
                var t = l.refReply;
                t.currentReply.author && (this.reply = t.currentReply, this.store.dispatch({
                    type: o.a,
                    reply: {}
                }), setTimeout(function() {
                    var l = c.a.newInstance({
                        document: n.document,
                        pageScrollDuration: 500,
                        pageScrollOffset: 100,
                        scrollTarget: "#comments-title"
                    });
                    n.pageScrollService.start(l)
                }, 100), setTimeout(function() {
                    return n.setFocus()
                }, 50), this.reply.notificationId && this._notificationService.markANotificationsAsRead(this.reply.notificationId, this.user).subscribe(function(l) {
                    n._notificationService.changeNotificationStatus(!0)
                })), this.showEmojiPicker = !1
            }, n.prototype.ngAfterViewInit = function() {
                this.cdRef.detectChanges()
            }, n.prototype.newComment = function() {
                var n = this;
                if (this.isEmpty(this.comment)) return this.reply = {}, void this.setFocus();
                this._confirmDialogService.setState({
                    id: "clear-reply-box",
                    message: "<h5>\u786e\u5b9a\u8981\u6e05\u9664\u5185\u5bb9\u5e76\u53d1\u8868\u65b0\u8bc4\u8bba\u5417\uff1f</h5>",
                    showIcon: !0,
                    state: d.b.Unknown
                }), this._dnDialogService.open("confirm-dialog"), this._confirmDialogService.confirmDialogSource$.subscribe(function(l) {
                    l.state === d.b.Confirmed && "clear-reply-box" === l.id && (n.reply = {}, n.setFocus(), n.comment = "", n._dnDialogService.close("confirm-dialog")), l.state === d.b.Cancalled && "clear-reply-box" === l.id && n._dnDialogService.close("confirm-dialog")
                })
            }, n.prototype.onChange = function(n) {
                this.charactersLeft = this.maxiumCharacters - this._dnEmojiService.emojiHtml2String(this.comment).length
            }, n.prototype.onFocusIn = function() {
                this.focused = !0
            }, n.prototype.onFocusOut = function() {
                this.focused = !1
            }, n.prototype.onDragOver = function(n) {
                n.preventDefault()
            }, n.prototype.onDragLeave = function(n) {
                n.preventDefault()
            }, n.prototype.onDrop = function(n) {
                n.preventDefault()
            }, n.prototype.openVotingCreatorDialog = function() {
                this.user.roleId < 1 && !this._permission.isValid(p.b.PublishVote) ? this._dnDialogService.open("vip-only") : this.showVotingCreator = !0
            }, n.prototype.closeVotingCreatorDialog = function() {
                this.showVotingCreator = !1
            }, n.prototype.toggleEmojiPicker = function() {
                this.showEmojiPicker = !this.showEmojiPicker
            }, n.prototype.setFocus = function() {
                this.editorRef && this.editorRef.nativeElement.focus()
            }, n.prototype.pasteHtmlAtCaret = function(n, l) {
                var e, t;
                if (this.editorRef.nativeElement.focus(), window.getSelection && (e = window.getSelection()).getRangeAt && e.rangeCount && ((t = e.getRangeAt(0)).commonAncestorContainer.parentNode === this.editorRef.nativeElement || t.commonAncestorContainer === this.editorRef.nativeElement)) {
                    t.deleteContents();
                    var i = document.createElement("div");
                    i.innerHTML = n;
                    for (var u = document.createDocumentFragment(), o = void 0, r = void 0; o = i.firstChild;) r = u.appendChild(o);
                    var s = u.firstChild;
                    return t.insertNode(u), void(r && ((t = t.cloneRange()).setStartAfter(r), l ? t.setStartBefore(s) : t.collapse(!0), e.removeAllRanges(), e.addRange(t)))
                }
            }, n.prototype.login = function() {
                this._userService.showLoginDialog(!0)
            }, n.prototype.publishComment = function() {
                var n = this;
                return this.comment = this.comment.replace(/&nbsp;/g, " ").replace(/\u00a0/g, " ").replace(/^\s+|\s+$/g, ""), this.isEmpty(this.comment) ? (this._messageDialogService.setState({
                    type: a.b.Emoji1,
                    message: "\u4e0d\u80fd\u53d1\u8868\u7a7a\u7684\u8bc4\u8bba"
                }), void this._dnDialogService.open("message-dialog")) : this._dnEmojiService.emojiHtml2String(this.comment.trim()).length > 255 ? (this._messageDialogService.setState({
                    type: a.b.Emoji1,
                    message: "\u60a8\u53d1\u8868\u7684\u5185\u5bb9\u8fc7\u957f\uff0c\u8bf7\u7b80\u77ed\u53d1\u8a00"
                }), void this._dnDialogService.open("message-dialog")) : (this.publishing = !0, void this.subscriptions.push(this.reply.commendId ? this._commentService.replyComment(this.user, this.reply.commendId, this._dnEmojiService.emojiHtml2String(this.comment.trim())).subscribe(function(l) {
                    l && ("video" === n.hostPage && n.subscriptions.push(n._commentListService.getComments(n.videoId, 1, 1).subscribe(function(l) {
                        n.store.dispatch({
                            type: r.c,
                            comments: l
                        })
                    })), n._toastService.showBlackToast("\u53d1\u8868\u6210\u529f\uff01"), n.comment = "", n.reply = {}, n.onChange(null)), n.publishing = !1, n.replySuccessEvent.emit()
                }) : this._commentService.publishComment(this.user, this.videoId, this._dnEmojiService.emojiHtml2String(this.comment.trim())).subscribe(function(l) {
                    l && (n.subscriptions.push(n._commentListService.getComments(n.videoId, 1, 1).subscribe(function(l) {
                        n.store.dispatch({
                            type: r.c,
                            comments: l
                        })
                    })), n._toastService.showBlackToast("\u53d1\u8868\u6210\u529f\uff01"), n.comment = "", n.onChange(null)), n.publishing = !1
                })))
            }, n.prototype.ngOnDestroy = function() {
                this.subscriptions.forEach(function(n) {
                    return n.unsubscribe()
                }), this.AppStoreUnsubscribe()
            }, n.prototype.isEmpty = function(n) {
                return "" === n.replace(/&nbsp;/g, " ").replace(/\u00a0/g, " ").replace(/^\s+|\s+$/g, "")
            }, n.prototype.onTextAreaBlur = function() {
                this.savedSelection = function() {
                    if (window.getSelection) {
                        var n = window.getSelection();
                        if (n.getRangeAt && n.rangeCount) return n.getRangeAt(0)
                    } else if (document.getSelection && document.createRange) return document.createRange();
                    return null
                }()
            }, n
        }()
    },
    hTTC: function(n, l, e) {
        "use strict";
        (function(l) {
            var e = [],
                t = "",
                i = /^on/;
            for (t in l) i.test(t) && e.push(t.slice(2));
            n.exports = e
        }).call(l, e("DuR2"))
    },
    i3Rj: function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = e("Xjw4");
        e("cCcU"), e.d(l, "a", function() {
            return u
        }), l.b = function(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 7, "div", [
                ["class", "d-flex sort-button align-item-center"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.onClick() && t), t
            }, null, null)), t["\u0275did"](1, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](2, {
                active: 0,
                desc: 1
            }), t["\u0275did"](3, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](5, null, ["", ""])), (n()(), t["\u0275eld"](6, 0, null, null, 0, "i", [
                ["class", "dn-icon-small icon-sort"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n"])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "d-flex sort-button align-item-center", n(l, 2, 0, e.active, e.desc)), n(l, 3, 0, e.getStyle())
            }, function(n, l) {
                n(l, 5, 0, l.component.label)
            })
        };
        var u = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                [".sort-button[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;border:1px solid silver;padding:5px 23px 5px 8px;cursor:pointer}.sort-button[_ngcontent-%COMP%]   .icon-sort[_ngcontent-%COMP%]{position:absolute;right:2px;top:4px;color:#fff}.sort-button.active[_ngcontent-%COMP%], .sort-button[_ngcontent-%COMP%]:hover:not(.active){background:#f00000;color:#fff;border-color:#f00000!important}.sort-button[_ngcontent-%COMP%]:hover:not(.active)   .icon-sort[_ngcontent-%COMP%]{opacity:0;color:#fff}.sort-button.desc[_ngcontent-%COMP%]   .icon-sort[_ngcontent-%COMP%]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);top:2px}.sort-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sort-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:16px}.sort-button[_ngcontent-%COMP%]   .dn-icon[_ngcontent-%COMP%]:before{margin:0;line-height:18px}"]
            ],
            data: {}
        })
    },
    kAEF: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        });
        var t = e("kZql"),
            i = function() {
                function n(n, l, e, i) {
                    this.priceService = n, this.renderer = l, this._titleService = e, this.setCurrencyService = i, this.isAdult = t.a.cinema, this.mode = "commonMode", this.active = !1, this.sections = 4, this.c_eur = "\u6b27\u5143", this.c_usd = "\u7f8e\u5143", this.c_cny = "\u4eba\u6c11\u5e01", this.PI_CPM = 1, this.PI_CPC = .1, this.PZ_CPM = .5, this.PZ_CPC = .1, this.Price_IS = {}, this.Price_MT = {}, this.Price_MPB = {}, this.Price_DR = {}, this.Price_DB = {}, this.Price_PR1 = {}, this.Price_PR2 = {}, this.Price_PB = {}, this.Price_PZ = {}, this.Price_AIS = {}, this.Price_AMT = {}, this.Price_AMPB = {}, this.Price_ADR = {}, this.Price_ADB = {}, this.Price_APR1 = {}, this.Price_APR2 = {}, this.Price_APB = {}, this.Price_APZ = {}
                }
                return n.prototype.ngOnInit = function() {
                    var n = this;
                    this.sharedCurrencySubscribtion = this.setCurrencyService.currency$.subscribe(function(l) {
                        n.currency = l
                    }), this.setDisplayMode()
                }, n.prototype.ngOnDestroy = function() {
                    this.sharedCurrencySubscribtion.unsubscribe()
                }, n.prototype.scrollIntoView = function(n) {
                    setTimeout(function() {
                        var l = document.getElementById(n);
                        l && (l.focus(), l.scrollIntoView())
                    })
                }, n.prototype.setDisplayMode = function() {
                    2 === this.isAdult ? (this.mode = "adultMode", this._titleService.setTitle("\u5e7f\u544a\u4ecb\u7ecd - \u591a\u7459\u5348\u591c\u7248"), this.getMultiplePrice_A()) : (this.mode = "commonMode", this._titleService.setTitle("\u5e7f\u544a\u4ecb\u7ecd - \u591a\u7459\u5f71\u9662"), this.getMultiplePrice())
                }, n.prototype.ngAfterViewInit = function() {
                    var n = this;
                    this.renderer.listen(window, "scroll", function(l) {
                        n.scroll = window.scrollY / n.sections
                    })
                }, n.prototype.scrollTo = function(n) {
                    this.isActive = n, n.scrollIntoView({
                        behavior: "smooth"
                    })
                }, n.prototype.getMultiplePrice = function() {
                    var n = this;
                    this.priceService.getMultiplePrice().subscribe(function(l) {
                        n.Price_IS = l[0], n.Price_MT = l[1], n.Price_MPB = l[2], n.Price_DR = l[3], n.Price_DB = l[4], n.Price_PR1 = l[5], n.Price_PR2 = l[6], n.Price_PB = l[7], n.Price_PZ = l[8], n.eur2usd = l[9], n.eur2cny = l[10]
                    })
                }, n.prototype.getMultiplePrice_A = function() {
                    var n = this;
                    this.priceService.getMultiplePrice_A().subscribe(function(l) {
                        n.Price_AIS = l[0], n.Price_AMT = l[1], n.Price_AMPB = l[2], n.Price_ADR = l[3], n.Price_ADB = l[4], n.Price_APR1 = l[5], n.Price_APR2 = l[6], n.Price_APB = l[7], n.Price_APZ = l[8], n.eur2usd = l[9], n.eur2cny = l[10]
                    })
                }, n.prototype.getPriceIS = function() {
                    var n = this;
                    this.priceService.getPriceIS().subscribe(function(l) {
                        n.Price_IS = l
                    })
                }, n.prototype.getPriceMt = function() {
                    var n = this;
                    this.priceService.getPriceMt().subscribe(function(l) {
                        n.Price_MT = l
                    })
                }, n.prototype.getPriceMpb = function() {
                    var n = this;
                    this.priceService.getPriceMpb().subscribe(function(l) {
                        n.Price_MPB = l
                    })
                }, n.prototype.getPriceDR = function() {
                    var n = this;
                    this.priceService.getPriceDR().subscribe(function(l) {
                        n.Price_DR = l
                    })
                }, n.prototype.getPriceDB = function() {
                    var n = this;
                    this.priceService.getPriceDB().subscribe(function(l) {
                        n.Price_DB = l
                    })
                }, n.prototype.getPricePR1 = function() {
                    var n = this;
                    this.priceService.getPricePR1().subscribe(function(l) {
                        n.Price_PR1 = l
                    })
                }, n.prototype.getPricePR2 = function() {
                    var n = this;
                    this.priceService.getPricePR2().subscribe(function(l) {
                        n.Price_PR2 = l
                    })
                }, n.prototype.getPricePB = function() {
                    var n = this;
                    this.priceService.getPricePB().subscribe(function(l) {
                        n.Price_PB = l
                    })
                }, n.prototype.getPricePZ = function() {
                    var n = this;
                    this.priceService.getPricePZ().subscribe(function(l) {
                        n.Price_PZ = l
                    })
                }, n.prototype.getPriceAIS = function() {
                    var n = this;
                    this.priceService.getPriceAIS().subscribe(function(l) {
                        n.Price_AIS = l
                    })
                }, n.prototype.getPriceAMt = function() {
                    var n = this;
                    this.priceService.getPriceAMt().subscribe(function(l) {
                        n.Price_AMT = l
                    })
                }, n.prototype.getPriceAMpb = function() {
                    var n = this;
                    this.priceService.getPriceAMpb().subscribe(function(l) {
                        n.Price_AMPB = l
                    })
                }, n.prototype.getPriceADR = function() {
                    var n = this;
                    this.priceService.getPriceADR().subscribe(function(l) {
                        n.Price_ADR = l
                    })
                }, n.prototype.getPriceADB = function() {
                    var n = this;
                    this.priceService.getPriceADB().subscribe(function(l) {
                        n.Price_ADB = l
                    })
                }, n.prototype.getPriceAPR1 = function() {
                    var n = this;
                    this.priceService.getPriceAPR1().subscribe(function(l) {
                        n.Price_APR1 = l
                    })
                }, n.prototype.getPriceAPR2 = function() {
                    var n = this;
                    this.priceService.getPriceAPR2().subscribe(function(l) {
                        n.Price_APR2 = l
                    })
                }, n.prototype.getPriceAPB = function() {
                    var n = this;
                    this.priceService.getPriceAPB().subscribe(function(l) {
                        n.Price_APB = l
                    })
                }, n.prototype.getPriceAPZ = function() {
                    var n = this;
                    this.priceService.getPriceAPZ().subscribe(function(l) {
                        n.Price_APZ = l
                    })
                }, n.prototype.getEur2Usd = function() {
                    var n = this;
                    this.priceService.getEur2Usd().subscribe(function(l) {
                        n.eur2usd = l
                    })
                }, n.prototype.getEur2Cny = function() {
                    var n = this;
                    this.priceService.getEur2Cny().subscribe(function(l) {
                        n.eur2cny = l
                    })
                }, n
            }()
    },
    lyLw: function(n, l, e) {
        "use strict";
        var t = e("Nkju"),
            i = e("WWez");
        n.exports = function(n, l) {
            var e = l || {},
                u = {};
            return void 0 === n && (n = {}), n.on = function(l, e) {
                return u[l] ? u[l].push(e) : u[l] = [e], n
            }, n.once = function(l, e) {
                return e._once = !0, n.on(l, e), n
            }, n.off = function(l, e) {
                var t = arguments.length;
                if (1 === t) delete u[l];
                else if (0 === t) u = {};
                else {
                    var i = u[l];
                    if (!i) return n;
                    i.splice(i.indexOf(e), 1)
                }
                return n
            }, n.emit = function() {
                var l = t(arguments);
                return n.emitterSnapshot(l.shift()).apply(this, l)
            }, n.emitterSnapshot = function(l) {
                var o = (u[l] || []).slice(0);
                return function() {
                    var u = t(arguments),
                        r = this || n;
                    if ("error" === l && !1 !== e.throws && !o.length) throw 1 === u.length ? u[0] : u;
                    return o.forEach(function(t) {
                        e.async ? i(t, u, r) : t.apply(r, u), t._once && n.off(l, t)
                    }), n
                }
            }, n
        }
    },
    ob4r: function(n, l, e) {
        "use strict";
        var t = {},
            i = "(?:^|\\s)",
            u = "(?:\\s|$)";

        function o(n) {
            var l = t[n];
            return l ? l.lastIndex = 0 : t[n] = l = new RegExp(i + n + u, "g"), l
        }
        n.exports = {
            add: function(n, l) {
                var e = n.className;
                e.length ? o(l).test(e) || (n.className += " " + l) : n.className = l
            },
            rm: function(n, l) {
                n.className = n.className.replace(o(l), " ").trim()
            }
        }
    },
    qjx7: function(n, l, e) {
        "use strict";
        (function(l) {
            var t = e("23/L"),
                i = e("hTTC"),
                u = l.document,
                o = function(n, l, e, t) {
                    return n.addEventListener(l, e, t)
                },
                r = function(n, l, e, t) {
                    return n.removeEventListener(l, e, t)
                },
                s = [];

            function a(n, l, e) {
                var t = function(n, l, e) {
                    var t, i;
                    for (t = 0; t < s.length; t++)
                        if ((i = s[t]).element === n && i.type === l && i.fn === e) return t
                }(n, l, e);
                if (t) {
                    var i = s[t].wrapper;
                    return s.splice(t, 1), i
                }
            }
            l.addEventListener || (o = function(n, e, t) {
                return n.attachEvent("on" + e, function(n, e, t) {
                    var i = a(n, e, t) || function(n, e, t) {
                        return function(e) {
                            var i = e || l.event;
                            i.target = i.target || i.srcElement, i.preventDefault = i.preventDefault || function() {
                                i.returnValue = !1
                            }, i.stopPropagation = i.stopPropagation || function() {
                                i.cancelBubble = !0
                            }, i.which = i.which || i.keyCode, t.call(n, i)
                        }
                    }(n, 0, t);
                    return s.push({
                        wrapper: i,
                        element: n,
                        type: e,
                        fn: t
                    }), i
                }(n, e, t))
            }, r = function(n, l, e) {
                var t = a(n, l, e);
                if (t) return n.detachEvent("on" + l, t)
            }), n.exports = {
                add: o,
                remove: r,
                fabricate: function(n, l, e) {
                    var o = -1 === i.indexOf(l) ? new t(l, {
                        detail: e
                    }) : function() {
                        var n;
                        return u.createEvent ? (n = u.createEvent("Event")).initEvent(l, !0, !0) : u.createEventObject && (n = u.createEventObject()), n
                    }();
                    n.dispatchEvent ? n.dispatchEvent(o) : n.fireEvent("on" + l, o)
                }
            }
        }).call(l, e("DuR2"))
    },
    rhHZ: function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = e("bfOx"),
            u = e("Xjw4"),
            o = e("GEDM"),
            r = e("9/5O"),
            s = e("O0BE"),
            a = e("8MAE"),
            c = e("t9Vy");
        e("Dch9"), e("Ohpo"), e("qCm+"), e.d(l, "a", function() {
            return d
        }), l.b = function(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 14, "div", [
                ["class", "name-card"]
            ], [
                [8, "hidden", 0]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](2, 0, null, null, 2, "app-box-arrow", [], null, null, null, a.b, a.a)), t["\u0275did"](3, 114688, null, 0, c.a, [], {
                direction: [0, "direction"],
                position: [1, "position"]
            }, null), t["\u0275pod"](4, {
                left: 0,
                top: 1
            }), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, g)), t["\u0275did"](7, 16384, null, 0, u.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](10, 0, null, null, 0, "img", [
                ["alt", "\u5173\u95ed"],
                ["class", "close-btn"],
                ["src", "/assets/images/closeme.png"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.hideNamecard() && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](13, 16384, null, 0, u.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 3, 0, "left", n(l, 4, 0, "0", "25px")), n(l, 7, 0, e.user), n(l, 13, 0, e.isLoading)
            }, function(n, l) {
                n(l, 0, 0, l.component.hide)
            })
        };
        var d = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                [".name-card[_ngcontent-%COMP%]{font-size:14px;width:330px;top:48px;left:-156px;z-index:999;position:absolute;background-color:#fff;border:1px solid #222;-webkit-box-shadow:2px 2px 2px 0 rgba(0,0,0,.5);box-shadow:2px 2px 2px 0 rgba(0,0,0,.5)}.nickname[_ngcontent-%COMP%]{line-height:16px}.content[_ngcontent-%COMP%]{position:relative;padding:12px 18px}.avatar[_ngcontent-%COMP%]{position:absolute;width:114px;height:114px;left:12px;top:13px;border:1px solid #aaa}.info[_ngcontent-%COMP%]{padding-left:123px;min-height:114px}.left[_ngcontent-%COMP%]{width:64px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.line[_ngcontent-%COMP%]{line-height:22px}.dn-badge[_ngcontent-%COMP%]{display:inline-block;line-height:1.5;height:18px;width:54px;margin-right:5px}.from[_ngcontent-%COMP%]{line-height:1.4;margin:4px 0;font-size:14px;color:#aaa}.footer[_ngcontent-%COMP%]{border-top:1px solid #ddd;padding:10px 20px}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 5px}.close-btn[_ngcontent-%COMP%]{position:absolute;top:5px;right:5px;width:24px;height:24px;cursor:pointer}.pulse-loading.nickname[_ngcontent-%COMP%]{width:160px;height:24px}.pulse-loading.mem-from[_ngcontent-%COMP%]{width:140px;height:24px}.pulse-loading.level[_ngcontent-%COMP%]{width:160px;height:24px}.pulse-loading.coins[_ngcontent-%COMP%]{width:120px;height:24px}"]
            ],
            data: {}
        });

        function p(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [
                ["class", "left mr-1"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](2, 0, null, null, 0, "img", [
                ["class", "dn-badge"]
            ], [
                [8, "src", 4]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "]))], null, function(n, l) {
                n(l, 2, 0, t["\u0275inlineInterpolate"](1, " ", l.component.user.badge, " "))
            })
        }

        function g(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 67, "div", [
                ["class", "content"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "a", [
                ["href", "javascript:void(0)"]
            ], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 0, "img", [
                ["class", "avatar"]
            ], [
                [8, "src", 4]
            ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](5, 0, null, null, 61, "div", [
                ["class", "info"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](7, 0, null, null, 3, "div", [
                ["class", "text-bold mb-1 nickname"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var i = !0;
                return "click" === l && (i = !1 !== t["\u0275nov"](n, 8).onClick() && i), i
            }, null, null)), t["\u0275did"](8, 16384, null, 0, i.p, [i.o, i.a, [8, null], t.Renderer2, t.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), t["\u0275pad"](9, 1), (n()(), t["\u0275ted"](10, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](12, 0, null, null, 7, "div", [
                ["class", "line d-flex align-items-center"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, p)), t["\u0275did"](15, 16384, null, 0, u.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](17, 0, null, null, 1, "span", [
                ["class", "from"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](18, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](21, 0, null, null, 12, "div", [
                ["class", "line"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](23, 0, null, null, 5, "div", [
                ["class", "left"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](26, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u7b49\u7ea7"])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](30, 0, null, null, 1, "div", [
                ["appUserLevel", ""],
                ["class", "d-inline"]
            ], null, null, null, null, null)), t["\u0275did"](31, 540672, null, 0, o.a, [t.Renderer2, t.ElementRef], {
                userLevel: [0, "userLevel"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](35, 0, null, null, 17, "div", [
                ["class", "line"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](37, 0, null, null, 5, "div", [
                ["class", "left"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](40, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u7ecf\u9a8c\u503c"])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](44, 0, null, null, 7, "div", [
                ["class", "d-inline"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](46, 0, null, null, 1, "span", [
                ["class", "red"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](47, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, [" / "])), (n()(), t["\u0275eld"](49, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](50, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275eld"](54, 0, null, null, 11, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](56, 0, null, null, 5, "div", [
                ["class", "left"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275ted"](-1, null, ["\n                    "])), (n()(), t["\u0275eld"](59, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u91d1\u5e01"])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275ted"](-1, null, ["\n                "])), (n()(), t["\u0275eld"](63, 0, null, null, 1, "span", [
                ["class", "text-gold"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](64, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n            "])), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], function(n, l) {
                var e = l.component;
                n(l, 8, 0, n(l, 9, 0, "/user")), n(l, 15, 0, e.user.badge), n(l, 31, 0, e.user.level)
            }, function(n, l) {
                var e = l.component;
                n(l, 3, 0, t["\u0275inlineInterpolate"](1, "", e.user.avatarPath, "")), n(l, 10, 0, e.user.nickname), n(l, 18, 0, e.user.from), n(l, 47, 0, e.user.experience), n(l, 50, 0, e.user.expToNextLevel), n(l, 64, 0, e.user.dnCoins)
            })
        }

        function f(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "div", [
                ["class", "content d-flex align-items-center justify-content-center"],
                ["style", "min-height: 140px"]
            ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "app-loader-ring", [], null, null, null, r.b, r.a)), t["\u0275did"](3, 114688, null, 0, s.a, [], {
                size: [0, "size"],
                color: [1, "color"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], function(n, l) {
                n(l, 3, 0, "medium", "gray")
            }, null)
        }
    },
    s4FP: function(n, l, e) {
        "use strict";
        var t = e("WT6e"),
            i = e("Xjw4");
        e("YLJQ"), e("Ykpd"), e.d(l, "a", function() {
            return u
        }), l.b = function(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, r)), t["\u0275did"](1, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.pager.pages && e.pager.pages.length > 1)
            }, null)
        };
        var u = t["\u0275crt"]({
            encapsulation: 0,
            styles: [
                [".pagination[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 auto;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:6px 12px;margin:4px;border:1px solid #ddd;border-radius:2px;min-width:40px;white-space:nowrap}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#eee;color:#222}li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border:1px solid red;background-color:red;color:#fff}li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#eee!important;background-color:#fff!important}.screen-small[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:2px}"]
            ],
            data: {}
        });

        function o(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "li", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](2, 0, null, null, 3, "a", [], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.setPage(n.context.$implicit) && t), t
            }, null, null)), t["\u0275did"](3, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), t["\u0275pod"](4, {
                active: 0
            }), (n()(), t["\u0275ted"](5, null, ["", ""])), (n()(), t["\u0275ted"](-1, null, ["\n    "]))], function(n, l) {
                n(l, 3, 0, n(l, 4, 0, l.component.pager.currentPage == l.context.$implicit))
            }, function(n, l) {
                n(l, 5, 0, l.context.$implicit)
            })
        }

        function r(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 38, "ul", [
                ["class", "pagination"]
            ], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](2, {
                "screen-xxsmall": 0,
                "screen-xsmall": 1,
                "screen-small": 2,
                "screen-medium": 3,
                "screen-large": 4
            }), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275eld"](4, 0, null, null, 6, "li", [], null, null, null, null, null)), t["\u0275did"](5, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), t["\u0275pod"](6, {
                disabled: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](8, 0, null, null, 1, "a", [], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.setPage(1) && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u7b2c\u4e00\u9875"])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n\n    "])), (n()(), t["\u0275eld"](12, 0, null, null, 6, "li", [], null, null, null, null, null)), t["\u0275did"](13, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), t["\u0275pod"](14, {
                disabled: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](16, 0, null, null, 1, "a", [], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0,
                    i = n.component;
                return "click" === l && (t = !1 !== i.setPage(i.pager.currentPage - 1) && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u4e0a\u4e00\u9875"])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n\n    "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, o)), t["\u0275did"](21, 802816, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275ted"](-1, null, ["\n\n    "])), (n()(), t["\u0275eld"](23, 0, null, null, 6, "li", [], null, null, null, null, null)), t["\u0275did"](24, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), t["\u0275pod"](25, {
                disabled: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](27, 0, null, null, 1, "a", [], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0,
                    i = n.component;
                return "click" === l && (t = !1 !== i.setPage(i.pager.currentPage + 1) && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u4e0b\u4e00\u9875"])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n\n    "])), (n()(), t["\u0275eld"](31, 0, null, null, 6, "li", [], null, null, null, null, null)), t["\u0275did"](32, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), t["\u0275pod"](33, {
                disabled: 0
            }), (n()(), t["\u0275ted"](-1, null, ["\n        "])), (n()(), t["\u0275eld"](35, 0, null, null, 1, "a", [], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0,
                    i = n.component;
                return "click" === l && (t = !1 !== i.setPage(i.pager.totalPages) && t), t
            }, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u672b\u5c3e\u9875"])), (n()(), t["\u0275ted"](-1, null, ["\n    "])), (n()(), t["\u0275ted"](-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "pagination", n(l, 2, 0, e.screenSize === e.screenType.XXSmall, e.screenSize === e.screenType.XSmall, e.screenSize === e.screenType.Small, e.screenSize === e.screenType.Medium, e.screenSize === e.screenType.Large)), n(l, 5, 0, n(l, 6, 0, 1 == e.pager.currentPage)), n(l, 13, 0, n(l, 14, 0, 1 == e.pager.currentPage)), n(l, 21, 0, e.pager.pages), n(l, 24, 0, n(l, 25, 0, e.pager.currentPage == e.pager.totalPages)), n(l, 32, 0, n(l, 33, 0, e.pager.currentPage == e.pager.totalPages))
            }, null)
        }
    },
    slB3: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return _
        }), e.d(l, "b", function() {
            return b
        });
        var t = e("WT6e"),
            i = e("YWe0"),
            u = e("hl8n"),
            o = e("l5y7");

        function r(n) {
            return n && !n.firstChange
        }
        var s = {
                clientHeight: "clientHeight",
                offsetHeight: "offsetHeight",
                scrollHeight: "scrollHeight",
                pageYOffset: "pageYOffset",
                offsetTop: "offsetTop",
                scrollTop: "scrollTop",
                top: "top"
            },
            a = {
                clientHeight: "clientWidth",
                offsetHeight: "offsetWidth",
                scrollHeight: "scrollWidth",
                pageYOffset: "pageXOffset",
                offsetTop: "offsetLeft",
                scrollTop: "scrollLeft",
                top: "left"
            },
            c = function() {
                function n(n) {
                    void 0 === n && (n = !0), this.vertical = n, this.propsMap = n ? s : a
                }
                return n.prototype.clientHeightKey = function() {
                    return this.propsMap.clientHeight
                }, n.prototype.offsetHeightKey = function() {
                    return this.propsMap.offsetHeight
                }, n.prototype.scrollHeightKey = function() {
                    return this.propsMap.scrollHeight
                }, n.prototype.pageYOffsetKey = function() {
                    return this.propsMap.pageYOffset
                }, n.prototype.offsetTopKey = function() {
                    return this.propsMap.offsetTop
                }, n.prototype.scrollTopKey = function() {
                    return this.propsMap.scrollTop
                }, n.prototype.topKey = function() {
                    return this.propsMap.top
                }, n
            }();

        function d(n, l) {
            return n ? l.document.documentElement : null
        }

        function p(n, l) {
            var e, t, i = f((e = l).container, e.isWindow, (t = g(e.axis)).offsetHeightKey, t.clientHeightKey);
            return l.isWindow ? function(n, l, e) {
                var t = e.axis,
                    i = e.container,
                    u = e.isWindow,
                    o = g(t),
                    r = o.offsetHeightKey,
                    s = o.clientHeightKey,
                    a = n + h(d(u, i), t, u),
                    c = f(l.nativeElement, u, r, s);
                return {
                    height: n,
                    scrolled: a,
                    totalToScroll: function(n, l, e) {
                        var t = l.topKey();
                        if (n.getBoundingClientRect) return n.getBoundingClientRect()[t] + h(n, l, e)
                    }(l.nativeElement, t, u) + c
                }
            }(i, n, l) : function(n, l, e) {
                var t = e.axis,
                    i = e.container;
                return {
                    height: n,
                    scrolled: i[t.scrollTopKey()],
                    totalToScroll: i[t.scrollHeightKey()]
                }
            }(i, 0, l)
        }

        function g(n) {
            return {
                offsetHeightKey: n.offsetHeightKey(),
                clientHeightKey: n.clientHeightKey()
            }
        }

        function f(n, l, e, t) {
            if (isNaN(n[e])) {
                var i = d(l, n);
                return i ? i[t] : 0
            }
            return n[e]
        }

        function h(n, l, e) {
            var t = l.pageYOffsetKey(),
                i = l.scrollTopKey(),
                u = l.offsetTopKey();
            return isNaN(window[t]) ? d(e, n)[i] : n.ownerDocument ? n.ownerDocument.defaultView[t] : n[u]
        }
        var m = {
            DOWN: "[NGX_ISE] DOWN",
            UP: "[NGX_ISE] UP"
        };

        function v(n) {
            return {
                type: n.scrollDown ? m.DOWN : m.UP,
                payload: {
                    currentScrollPosition: n.stats.scrolled
                }
            }
        }
        var _ = function() {
                function n(n, l) {
                    this.element = n, this.zone = l, this.scrolled = new t.EventEmitter, this.scrolledUp = new t.EventEmitter, this.infiniteScrollDistance = 2, this.infiniteScrollUpDistance = 1.5, this.infiniteScrollThrottle = 150, this.infiniteScrollDisabled = !1, this.infiniteScrollContainer = null, this.scrollWindow = !0, this.immediateCheck = !1, this.horizontal = !1, this.alwaysCallback = !1, this.fromRoot = !1
                }
                return n.prototype.ngAfterViewInit = function() {
                    this.infiniteScrollDisabled || this.setup()
                }, n.prototype.ngOnChanges = function(n) {
                    var l = n.infiniteScrollDisabled,
                        e = n.infiniteScrollDistance,
                        t = r(n.infiniteScrollContainer),
                        i = r(l),
                        u = r(e),
                        o = !i && !this.infiniteScrollDisabled || i && !l.currentValue || u;
                    (t || i || u) && (this.destroyScroller(), o && this.setup())
                }, n.prototype.setup = function() {
                    var n = this;
                    "undefined" != typeof window && this.zone.runOutsideAngular(function() {
                        var l, e, t, r, s, a, d, g, f, h, m, _;
                        n.disposeScroller = (l = {
                            fromRoot: n.fromRoot,
                            alwaysCallback: n.alwaysCallback,
                            disable: n.infiniteScrollDisabled,
                            downDistance: n.infiniteScrollDistance,
                            element: n.element,
                            horizontal: n.horizontal,
                            scrollContainer: n.infiniteScrollContainer,
                            scrollWindow: n.scrollWindow,
                            throttle: n.infiniteScrollThrottle,
                            upDistance: n.infiniteScrollUpDistance
                        }, a = l.scrollContainer, d = l.scrollWindow, g = l.element, f = l.fromRoot, h = function(n, l) {
                            return Object.assign({}, n, {
                                container: n.isWindow || l && !l.nativeElement ? l : l.nativeElement
                            })
                        }({
                            axis: (e = {
                                axis: new c(!l.horizontal),
                                windowElement: function(n, l, e, t) {
                                    var i = window && !!window.document && window.document.documentElement,
                                        u = i && l ? window : e;
                                    if (n && !(u = n && i && "string" == typeof n ? function(n, l, t) {
                                            return (t ? window.document : e.nativeElement).querySelector(n)
                                        }(n, 0, t) : n)) throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");
                                    return u
                                }(a, d, g, f)
                            }).axis,
                            isWindow: function(n) {
                                return ["Window", "global"].some(function(l) {
                                    return Object.prototype.toString.call(n).includes(l)
                                })
                            }(t = e.windowElement)
                        }, t), m = {
                            lastScrollPosition: 0,
                            lastTotalToScroll: 0,
                            totalToScroll: p(g, h).totalToScroll,
                            triggered: {
                                down: 0,
                                up: 0
                            }
                        }, _ = {
                            up: l.upDistance,
                            down: l.downDistance
                        }, (r = {
                            container: h.container,
                            throttle: l.throttle
                        }, s = Object(u.a)(r.container, "scroll"), r.throttle && (s = s.pipe(Object(o.sampleTime)(r.throttle))), s).pipe(Object(o.mergeMap)(function(n) {
                            return Object(i.a)(p(g, h))
                        }), Object(o.map)(function(n) {
                            return function(n, l, e) {
                                var t = function(n, l, e) {
                                    var t = function(n, l) {
                                        return n < l.scrolled
                                    }(m.lastScrollPosition, l);
                                    return {
                                        fire: function(n, l, e) {
                                            var i, u, o = n.height + n.scrolled;
                                            return t ? (i = (n.totalToScroll - o) / n.totalToScroll, u = l.down / 10) : (i = o / n.totalToScroll, u = l.up / 10), i <= u
                                        }(l, e),
                                        scrollDown: t
                                    }
                                }(0, l, e);
                                return {
                                    scrollDown: t.scrollDown,
                                    fire: t.fire,
                                    stats: l
                                }
                            }(0, n, _)
                        }), Object(o.tap)(function(n) {
                            var l = n.stats;
                            return function(n, l, e) {
                                ! function(n, e) {
                                    e.lastScrollPosition = l
                                }(0, n),
                                function(n, l) {
                                    l.lastTotalToScroll !== n && (l.lastTotalToScroll = l.totalToScroll, l.totalToScroll = n)
                                }(e, n)
                            }(m, l.scrolled, l.totalToScroll)
                        }), Object(o.filter)(function(n) {
                            var e, t, i;
                            return e = l.alwaysCallback, t = n.fire, i = function(l, e, t) {
                                return n.scrollDown ? e.triggered.down === l : e.triggered.up === l
                            }(n.stats.totalToScroll, m), (e || t) && !i
                        }), Object(o.tap)(function(n) {
                            ! function(l, e, t, i) {
                                n.scrollDown ? e.triggered.down = l : e.triggered.up = l
                            }(n.stats.totalToScroll, m)
                        }), Object(o.map)(v))).subscribe(function(l) {
                            return n.zone.run(function() {
                                return n.handleOnScroll(l)
                            })
                        })
                    })
                }, n.prototype.handleOnScroll = function(n) {
                    var l = n.payload;
                    switch (n.type) {
                        case m.DOWN:
                            return this.scrolled.emit(l);
                        case m.UP:
                            return this.scrolledUp.emit(l);
                        default:
                            return
                    }
                }, n.prototype.ngOnDestroy = function() {
                    this.destroyScroller()
                }, n.prototype.destroyScroller = function() {
                    this.disposeScroller && this.disposeScroller.unsubscribe()
                }, n
            }(),
            b = function() {}
    },
    vx8o: function(n, l, e) {
        "use strict";
        (function(l) {
            var t = e("lyLw"),
                i = e("qjx7"),
                u = e("ob4r"),
                o = document,
                r = o.documentElement;

            function s(n, e, t, u) {
                l.navigator.pointerEnabled ? i[e](n, {
                    mouseup: "pointerup",
                    mousedown: "pointerdown",
                    mousemove: "pointermove"
                } [t], u) : l.navigator.msPointerEnabled ? i[e](n, {
                    mouseup: "MSPointerUp",
                    mousedown: "MSPointerDown",
                    mousemove: "MSPointerMove"
                } [t], u) : (i[e](n, {
                    mouseup: "touchend",
                    mousedown: "touchstart",
                    mousemove: "touchmove"
                } [t], u), i[e](n, t, u))
            }

            function a(n) {
                if (void 0 !== n.touches) return n.touches.length;
                if (void 0 !== n.which && 0 !== n.which) return n.which;
                if (void 0 !== n.buttons) return n.buttons;
                var l = n.button;
                return void 0 !== l ? 1 & l ? 1 : 2 & l ? 3 : 4 & l ? 2 : 0 : void 0
            }

            function c(n, e) {
                return "undefined" != typeof l[e] ? l[e] : r.clientHeight ? r[n] : o.body[n]
            }

            function d(n, l, e) {
                var t, i = n || {},
                    u = i.className;
                return i.className += " gu-hide", t = o.elementFromPoint(l, e), i.className = u, t
            }

            function p() {
                return !1
            }

            function g() {
                return !0
            }

            function f(n) {
                return n.width || n.right - n.left
            }

            function h(n) {
                return n.height || n.bottom - n.top
            }

            function m(n) {
                return n.parentNode === o ? null : n.parentNode
            }

            function v(n) {
                return "INPUT" === n.tagName || "TEXTAREA" === n.tagName || "SELECT" === n.tagName || function n(l) {
                    return !!l && "false" !== l.contentEditable && ("true" === l.contentEditable || n(m(l)))
                }(n)
            }

            function _(n) {
                return n.nextElementSibling || function() {
                    var l = n;
                    do {
                        l = l.nextSibling
                    } while (l && 1 !== l.nodeType);
                    return l
                }()
            }

            function b(n, l) {
                var e = function(n) {
                        return n.targetTouches && n.targetTouches.length ? n.targetTouches[0] : n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n
                    }(l),
                    t = {
                        pageX: "clientX",
                        pageY: "clientY"
                    };
                return n in t && !(n in e) && t[n] in e && (n = t[n]), e[n]
            }
            n.exports = function(n, l) {
                var e, y, x, w, C, P, S, R, O, M, T;
                1 === arguments.length && !1 === Array.isArray(n) && (l = n, n = []);
                var k, A = null,
                    I = l || {};
                void 0 === I.moves && (I.moves = g), void 0 === I.accepts && (I.accepts = g), void 0 === I.invalid && (I.invalid = function() {
                    return !1
                }), void 0 === I.containers && (I.containers = n || []), void 0 === I.isContainer && (I.isContainer = p), void 0 === I.copy && (I.copy = !1), void 0 === I.copySortSource && (I.copySortSource = !1), void 0 === I.revertOnSpill && (I.revertOnSpill = !1), void 0 === I.removeOnSpill && (I.removeOnSpill = !1), void 0 === I.direction && (I.direction = "vertical"), void 0 === I.ignoreInputTextSelection && (I.ignoreInputTextSelection = !0), void 0 === I.mirrorContainer && (I.mirrorContainer = o.body);
                var E = t({
                    containers: I.containers,
                    start: function(n) {
                        var l = L(n);
                        l && F(l)
                    },
                    end: K,
                    cancel: W,
                    remove: q,
                    destroy: function() {
                        D(!0), $({})
                    },
                    canMove: function(n) {
                        return !!L(n)
                    },
                    dragging: !1
                });
                return !0 === I.removeOnSpill && E.on("over", function(n) {
                    u.rm(n, "gu-hide")
                }).on("out", function(n) {
                    E.dragging && u.add(n, "gu-hide")
                }), D(), E;

                function N(n) {
                    return -1 !== E.containers.indexOf(n) || I.isContainer(n)
                }

                function D(n) {
                    var l = n ? "remove" : "add";
                    s(r, l, "mousedown", z), s(r, l, "mouseup", $)
                }

                function V(n) {
                    s(r, n ? "remove" : "add", "mousemove", B)
                }

                function U(n) {
                    var l = n ? "remove" : "add";
                    i[l](r, "selectstart", j), i[l](r, "click", j)
                }

                function j(n) {
                    k && n.preventDefault()
                }

                function z(n) {
                    if (P = n.clientX, S = n.clientY, 1 === a(n) && !n.metaKey && !n.ctrlKey) {
                        var l = n.target,
                            e = L(l);
                        e && (k = e, V(), "mousedown" === n.type && (v(l) ? l.focus() : n.preventDefault()))
                    }
                }

                function B(n) {
                    if (k)
                        if (0 !== a(n)) {
                            if (void 0 === n.clientX || n.clientX !== P || void 0 === n.clientY || n.clientY !== S) {
                                if (I.ignoreInputTextSelection) {
                                    var l = b("clientX", n),
                                        t = b("clientY", n);
                                    if (v(o.elementFromPoint(l, t))) return
                                }
                                var i = k;
                                V(!0), U(), K(), F(i);
                                var d, p = {
                                    left: (d = x.getBoundingClientRect()).left + c("scrollLeft", "pageXOffset"),
                                    top: d.top + c("scrollTop", "pageYOffset")
                                };
                                w = b("pageX", n) - p.left, C = b("pageY", n) - p.top, u.add(M || x, "gu-transit"),
                                    function() {
                                        if (!e) {
                                            var n = x.getBoundingClientRect();
                                            (e = x.cloneNode(!0)).style.width = f(n) + "px", e.style.height = h(n) + "px", u.rm(e, "gu-transit"), u.add(e, "gu-mirror"), I.mirrorContainer.appendChild(e), s(r, "add", "mousemove", Q), u.add(I.mirrorContainer, "gu-unselectable"), E.emit("cloned", e, x, "mirror")
                                        }
                                    }(), Q(n)
                            }
                        } else $({})
                }

                function L(n) {
                    if (!(E.dragging && e || N(n))) {
                        for (var l = n; m(n) && !1 === N(m(n));) {
                            if (I.invalid(n, l)) return;
                            if (!(n = m(n))) return
                        }
                        var t = m(n);
                        if (t && !I.invalid(n, l) && I.moves(n, t, l, _(n))) return {
                            item: n,
                            source: t
                        }
                    }
                }

                function F(n) {
                    ("boolean" == typeof I.copy ? I.copy : I.copy(n.item, n.source)) && (M = n.item.cloneNode(!0), E.emit("cloned", M, n.item, "copy")), y = n.source, x = n.item, R = O = _(n.item), E.dragging = !0, E.emit("drag", x, y)
                }

                function K() {
                    if (E.dragging) {
                        var n = M || x;
                        Y(n, m(n))
                    }
                }

                function H() {
                    k = !1, V(!0), U(!0)
                }

                function $(n) {
                    if (H(), E.dragging) {
                        var l = M || x,
                            t = b("clientX", n),
                            i = b("clientY", n),
                            u = G(d(e, t, i), t, i);
                        u && (M && I.copySortSource || !M || u !== y) ? Y(l, u) : I.removeOnSpill ? q() : W()
                    }
                }

                function Y(n, l) {
                    var e = m(n);
                    M && I.copySortSource && l === y && e.removeChild(x), X(l) ? E.emit("cancel", n, y, y) : E.emit("drop", n, l, y, O), Z()
                }

                function q() {
                    if (E.dragging) {
                        var n = M || x,
                            l = m(n);
                        l && l.removeChild(n), E.emit(M ? "cancel" : "remove", n, l, y), Z()
                    }
                }

                function W(n) {
                    if (E.dragging) {
                        var l = arguments.length > 0 ? n : I.revertOnSpill,
                            e = M || x,
                            t = m(e),
                            i = X(t);
                        !1 === i && l && (M ? t && t.removeChild(M) : y.insertBefore(e, R)), i || l ? E.emit("cancel", e, y, y) : E.emit("drop", e, t, y, O), Z()
                    }
                }

                function Z() {
                    var n = M || x;
                    H(), e && (u.rm(I.mirrorContainer, "gu-unselectable"), s(r, "remove", "mousemove", Q), m(e).removeChild(e), e = null), n && u.rm(n, "gu-transit"), T && clearTimeout(T), E.dragging = !1, A && E.emit("out", n, A, y), E.emit("dragend", n), y = x = M = R = O = T = A = null
                }

                function X(n, l) {
                    var t;
                    return t = void 0 !== l ? l : e ? O : _(M || x), n === y && t === R
                }

                function G(n, l, e) {
                    for (var t = n; t && !i();) t = m(t);
                    return t;

                    function i() {
                        if (!1 === N(t)) return !1;
                        var i = J(t, n),
                            u = nn(t, i, l, e);
                        return !!X(t, u) || I.accepts(x, t, y, u)
                    }
                }

                function Q(n) {
                    if (e) {
                        n.preventDefault();
                        var l = b("clientX", n),
                            t = b("clientY", n),
                            i = t - C;
                        e.style.left = l - w + "px", e.style.top = i + "px";
                        var u = M || x,
                            o = d(e, l, t),
                            r = G(o, l, t),
                            s = null !== r && r !== A;
                        (s || null === r) && (A && g("out"), A = r, s && g("over"));
                        var a = m(u);
                        if (r !== y || !M || I.copySortSource) {
                            var c, p = J(r, o);
                            if (null !== p) c = nn(r, p, l, t);
                            else {
                                if (!0 !== I.revertOnSpill || M) return void(M && a && a.removeChild(u));
                                c = R, r = y
                            }(null === c && s || c !== u && c !== _(u)) && (O = c, r.insertBefore(u, c), E.emit("shadow", u, r, y))
                        } else a && a.removeChild(u)
                    }

                    function g(n) {
                        E.emit(n, u, A, y)
                    }
                }

                function J(n, l) {
                    for (var e = l; e !== n && m(e) !== n;) e = m(e);
                    return e === r ? null : e
                }

                function nn(n, l, e, t) {
                    var i, u = "horizontal" === I.direction;
                    return l !== n ? (i = l.getBoundingClientRect(), (u ? e > i.left + f(i) / 2 : t > i.top + h(i) / 2) ? _(l) : l) : function() {
                        var l, i, o, r = n.children.length;
                        for (l = 0; l < r; l++) {
                            if (o = (i = n.children[l]).getBoundingClientRect(), u && o.left + o.width / 2 > e) return i;
                            if (!u && o.top + o.height / 2 > t) return i
                        }
                        return null
                    }()
                }
            }
        }).call(l, e("DuR2"))
    },
    xiuF: function(n, l, e) {
        "use strict";
        var t = e("TToO").__decorate,
            i = e("TToO").__metadata,
            u = e("WT6e"),
            o = (e("LKU8"), e("Ilbw")),
            r = function() {
                function n(n, l) {
                    this.el = n, this.dragulaService = l, this.container = n.nativeElement
                }
                return n.prototype.ngOnInit = function() {
                    var n = this,
                        l = this.dragulaService.find(this.dragula),
                        e = function() {
                            n.dragulaModel && (n.drake.models ? n.drake.models.push(n.dragulaModel) : n.drake.models = [n.dragulaModel])
                        };
                    l ? (this.drake = l.drake, e(), this.drake.containers.push(this.container)) : (this.drake = o.dragula([this.container], Object.assign({}, this.dragulaOptions)), e(), this.dragulaService.add(this.dragula, this.drake))
                }, n.prototype.ngOnChanges = function(n) {
                    if (n && n.dragulaModel && this.drake)
                        if (this.drake.models) {
                            var l = this.drake.models.indexOf(n.dragulaModel.previousValue);
                            this.drake.models.splice(l, 1, n.dragulaModel.currentValue)
                        } else this.drake.models = [n.dragulaModel.currentValue]
                }, n
            }();
        t([u.Input(), i("design:type", String)], r.prototype, "dragula", void 0), t([u.Input(), i("design:type", Object)], r.prototype, "dragulaModel", void 0), t([u.Input(), i("design:type", Object)], r.prototype, "dragulaOptions", void 0), r = t([u.Directive({
            selector: "[dragula]"
        })], r), l.DragulaDirective = r
    },
    ys6Q: function(n, l) {
        var e = "function" == typeof setImmediate;
        n.exports = e ? function(n) {
            setImmediate(n)
        } : function(n) {
            setTimeout(n, 0)
        }
    }
});