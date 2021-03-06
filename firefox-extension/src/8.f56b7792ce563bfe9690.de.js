(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        EEnh: function(t, e) {
            // -----------------
            // remove app-gg-block
            var css = 'app-gg-block.d-block { display:none !important; } \n app-gg-block a {display: none !important;}',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet){
              style.styleSheet.cssText = css;
            } else {
              style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
            // -----------------

            var i;
            (i = window.AmCharts).AmSlicedChart = i.Class({
                    inherits: i.AmChart,
                    construct: function(t) {
                        this.createEvents("rollOverSlice", "rollOutSlice", "clickSlice", "pullOutSlice", "pullInSlice", "rightClickSlice"), i.AmSlicedChart.base.construct.call(this, t), this.colors = "#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" "), this.alpha = 1, this.groupPercent = 0, this.groupedTitle = "Other", this.groupedPulled = !1, this.groupedAlpha = 1, this.marginLeft = 0, this.marginBottom = this.marginTop = 10, this.marginRight = 0, this.hoverAlpha = 1, this.outlineColor = "#FFFFFF", this.outlineAlpha = 0, this.outlineThickness = 1, this.startAlpha = 0, this.startDuration = 1, this.startEffect = "bounce", this.sequencedAnimation = !0, this.pullOutDuration = 1, this.pullOutEffect = "bounce", this.pullOnHover = this.pullOutOnlyOne = !1, this.labelsEnabled = !0, this.labelTickColor = "#000000", this.labelTickAlpha = .2, this.hideLabelsPercent = 0, this.urlTarget = "_self", this.autoMarginOffset = 10, this.gradientRatio = [], this.maxLabelWidth = 200, this.accessibleLabel = "[[title]]: [[percents]]% [[value]] [[description]]", i.applyTheme(this, t, "AmSlicedChart")
                    },
                    initChart: function() {
                        i.AmSlicedChart.base.initChart.call(this), this.dataChanged && (this.parseData(), this.dispatchDataUpdated = !0, this.dataChanged = !1, this.setLegendData(this.chartData)), this.drawChart()
                    },
                    handleLegendEvent: function(t) {
                        var e = t.type,
                            i = t.dataItem,
                            n = this.legend;
                        if (i.wedge && i) {
                            var l = i.hidden;
                            switch (t = t.event, e) {
                                case "clickMarker":
                                    l || n.switchable || this.clickSlice(i, t);
                                    break;
                                case "clickLabel":
                                    l || this.clickSlice(i, t, !1);
                                    break;
                                case "rollOverItem":
                                    l || this.rollOverSlice(i, !1, t);
                                    break;
                                case "rollOutItem":
                                    l || this.rollOutSlice(i, t);
                                    break;
                                case "hideItem":
                                    this.hideSlice(i, t);
                                    break;
                                case "showItem":
                                    this.showSlice(i, t)
                            }
                        }
                    },
                    invalidateVisibility: function() {
                        this.recalculatePercents(), this.initChart();
                        var t = this.legend;
                        t && t.invalidateSize()
                    },
                    addEventListeners: function(t, e) {
                        var i = this;
                        t.mouseover(function(t) {
                            i.rollOverSlice(e, !0, t)
                        }).mouseout(function(t) {
                            i.rollOutSlice(e, t)
                        }).touchend(function(t) {
                            i.rollOverSlice(e, t)
                        }).mouseup(function(t) {
                            i.clickSlice(e, t)
                        }).contextmenu(function(t) {
                            i.handleRightClick(e, t)
                        }).focus(function(t) {
                            i.rollOverSlice(e, t)
                        }).blur(function(t) {
                            i.rollOutSlice(e, t)
                        })
                    },
                    formatString: function(t, e, n) {
                        t = i.formatValue(t, e, ["value"], this.nf, "", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers);
                        var l = this.pf.precision;
                        return isNaN(this.tempPrec) || (this.pf.precision = this.tempPrec), t = i.formatValue(t, e, ["percents"], this.pf), t = i.massReplace(t, {
                            "[[title]]": e.title,
                            "[[description]]": e.description
                        }), this.pf.precision = l, -1 != t.indexOf("[[") && (t = i.formatDataContextValue(t, e.dataContext)), t = n ? i.fixNewLines(t) : i.fixBrakes(t), i.cleanFromEmpty(t)
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
                        var e, i = this.chartData;
                        for (e = 0; e < i.length; e++) {
                            var n = i[e];
                            n.pulled && this.pullSlice(n, 1, t)
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
                            i = this.startDuration,
                            n = t.labelSet;
                        e && 0 < i && (0 < t.alpha && e.show(), e.translate(t.startX, t.startY), this.animatable.push(e), e.animate({
                            opacity: 1,
                            translate: "0,0"
                        }, i, this.startEffect)), n && 0 < i && (0 < t.alpha && n.show(), n.translate(t.startX, t.startY), n.animate({
                            opacity: 1,
                            translate: "0,0"
                        }, i, this.startEffect))
                    },
                    showLabels: function() {
                        var t, e = this.chartData;
                        for (t = 0; t < e.length; t++) {
                            var i = e[t];
                            if (0 < i.alpha) {
                                var n = i.label;
                                n && n.show(), (i = i.tick) && i.show()
                            }
                        }
                    },
                    showSlice: function(t) {
                        isNaN(t) ? t.hidden = !1 : this.chartData[t].hidden = !1, this.invalidateVisibility()
                    },
                    hideSlice: function(t) {
                        isNaN(t) ? t.hidden = !0 : this.chartData[t].hidden = !0, this.hideBalloon(), this.invalidateVisibility()
                    },
                    rollOverSlice: function(t, e, n) {
                        if (isNaN(t) || (t = this.chartData[t]), clearTimeout(this.hoverInt), !t.hidden) {
                            this.pullOnHover && this.pullSlice(t, 1), 1 > this.hoverAlpha && t.wedge && t.wedge.attr({
                                opacity: this.hoverAlpha
                            });
                            var l = t.balloonX,
                                s = t.balloonY;
                            t.pulled && (l += t.pullX, s += t.pullY);
                            var a = this.formatString(this.balloonText, t, !0),
                                o = this.balloonFunction;
                            o && (a = o(t, a)), o = i.adjustLuminosity(t.color, -.15), a ? this.showBalloon(a, o, e, l, s) : this.hideBalloon(), 0 === t.value && this.hideBalloon(), this.fire({
                                type: "rollOverSlice",
                                dataItem: t,
                                chart: this,
                                event: n
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
                    clickSlice: function(t, e, n) {
                        this.checkTouchDuration(e) && (isNaN(t) || (t = this.chartData[t]), this.pullSlice(t, t.pulled ? 0 : 1), i.getURL(t.url, this.urlTarget), n || this.fire({
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
                            var n = e[t];
                            if (n.label && !n.skipTick) {
                                var l = i.line(this.container, [n.tx0, n.tx, n.tx2], [n.ty0, l = n.ty, l], this.labelTickColor, this.labelTickAlpha);
                                i.setCN(this, l, this.type + "-tick"), i.setCN(this, l, n.className, !0), n.tick = l, n.wedge.push(l), "AmFunnelChart" == this.cname && l.toBack()
                            }
                        }
                    },
                    initialStart: function() {
                        var t = this,
                            e = t.startDuration,
                            i = setTimeout(function() {
                                t.showLabels.call(t)
                            }, 1e3 * e);
                        t.timeOuts.push(i), t.chartCreated ? t.pullSlices(!0) : (t.startSlices(), 0 < e ? (e = setTimeout(function() {
                            t.pullSlices.call(t)
                        }, 1200 * e), t.timeOuts.push(e)) : t.pullSlices(!0))
                    },
                    pullSlice: function(t, e, i) {
                        var n = this.pullOutDuration;
                        !0 === i && (n = 0), (i = t.wedge) && (0 < n ? (i.animate({
                            translate: e * t.pullX + "," + e * t.pullY
                        }, n, this.pullOutEffect), t.labelSet && t.labelSet.animate({
                            translate: e * t.pullX + "," + e * t.pullY
                        }, n, this.pullOutEffect)) : (t.labelSet && t.labelSet.translate(e * t.pullX, e * t.pullY), i.translate(e * t.pullX, e * t.pullY))), 1 == e ? (t.pulled = !0, this.pullOutOnlyOne && this.pullInAll(t.index), t = {
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
                        var e, i = this.chartData;
                        for (e = 0; e < this.chartData.length; e++) e != t && i[e].pulled && this.pullSlice(i[e], 0)
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
                            var n, l, s, a = e.length,
                                o = 0;
                            for (n = 0; n < a; n++) {
                                var r = e[n];
                                (l = {}).dataContext = r, null !== r[this.valueField] && (l.value = Number(r[this.valueField])), (s = r[this.titleField]) || (s = ""), l.title = s, l.pulled = i.toBoolean(r[this.pulledField], !1), (s = r[this.descriptionField]) || (s = ""), l.description = s, l.labelRadius = Number(r[this.labelRadiusField]), l.switchable = !0, l.className = r[this.classNameField], l.url = r[this.urlField], !(s = r[this.patternField]) && this.patterns && (s = this.patterns[n]), l.pattern = s, l.visibleInLegend = i.toBoolean(r[this.visibleInLegendField], !0), l.alpha = void 0 !== (s = r[this.alphaField]) ? Number(s) : this.alpha, void 0 !== (s = r[this.colorField]) && (l.color = s), l.labelColor = i.toColor(r[this.labelColorField]), o += l.value, l.hidden = !1, t[n] = l
                            }
                            for (n = e = 0; n < a; n++)(l = t[n]).percents = l.value / o * 100, l.percents < this.groupPercent && e++;
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
                                })), (a = this.baseColor) || (a = this.pieBaseColor), (o = this.brightnessStep) || (o = this.pieBrightnessStep), n = 0; n < t.length; n++) a ? s = i.adjustLuminosity(a, n * o / 100) : void 0 === (s = this.colors[n]) && (s = i.randomColor()), void 0 === t[n].color && (t[n].color = s);
                            this.recalculatePercents()
                        }
                    },
                    recalculatePercents: function() {
                        var t, e, i = this.chartData,
                            n = 0;
                        for (t = 0; t < i.length; t++) !(e = i[t]).hidden && 0 < e.value && (n += e.value);
                        for (t = 0; t < i.length; t++)(e = this.chartData[t]).percents = !e.hidden && 0 < e.value ? 100 * e.value / n : 0
                    },
                    removeSmallSlices: function() {
                        var t, e = this.chartData;
                        for (t = e.length - 1; 0 <= t; t--) e[t].percents < this.groupPercent && (this.groupValue += e[t].value, e.splice(t, 1))
                    },
                    animateAgain: function() {
                        var t = this;
                        t.startSlices();
                        for (var e = 0; e < t.chartData.length; e++) {
                            var i = t.chartData[e];
                            i.started = !1;
                            var n = i.wedge;
                            n && (n.setAttr("opacity", t.startAlpha), n.translate(i.startX, i.startY)), (n = i.labelSet) && (n.setAttr("opacity", t.startAlpha), n.translate(i.startX, i.startY))
                        }
                        0 < (e = t.startDuration) ? (e = setTimeout(function() {
                            t.pullSlices.call(t)
                        }, 1200 * e), t.timeOuts.push(e)) : t.pullSlices()
                    },
                    measureMaxLabel: function() {
                        var t, e = this.chartData,
                            n = 0;
                        for (t = 0; t < e.length; t++) {
                            var l = e[t],
                                s = this.formatString(this.labelText, l),
                                a = this.labelFunction;
                            a && (s = a(l, s)), (s = (l = i.text(this.container, s, this.color, this.fontFamily, this.fontSize)).getBBox().width) > n && (n = s), l.remove()
                        }
                        return n
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
                                    var i = this.startDuration,
                                        n = this.container,
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
                                            var x = this.alpha;
                                            if (isNaN(c.alpha) || (x = c.alpha), y = {
                                                    fill: c.color,
                                                    stroke: y,
                                                    "stroke-width": this.outlineThickness,
                                                    "stroke-opacity": this.outlineAlpha,
                                                    "fill-opacity": x
                                                }, c.url && (y.cursor = "pointer"), y = t.wedge(n, a, o, g, m, r, l, h, this.depth3D, y, this.gradientRatio, c.pattern, this.path, this.gradientType), t.setCN(this, y, "pie-item"), t.setCN(this, y.wedge, "pie-slice"), t.setCN(this, y, c.className, !0), this.addEventListeners(y, c), c.startAngle = g, e[d].wedge = y, 0 < i && (this.chartCreated || y.setAttr("opacity", this.startAlpha)), c.ix = v, c.iy = b, c.wedge = y, c.index = d, c.label = null, x = n.set(), this.labelsEnabled && this.labelText && c.percents >= this.hideLabelsPercent) {
                                                var C = g + m / 2;
                                                0 > C && (C += 360), 360 < C && (C -= 360);
                                                var w = f;
                                                isNaN(c.labelRadius) || 0 > (w = c.labelRadius) && (c.skipTick = !0), m = a + v * (r + w);
                                                var k, S, M = o + b * (r + w),
                                                    A = 0;
                                                isNaN(u) && 350 < C && 1 < e.length - d && (u = d - 1 + Math.floor((e.length - d) / 2)), 0 <= w ? (90 >= C && 0 <= C ? (S = 0, k = "start", A = 8) : 90 <= C && 180 > C ? (S = 1, k = "start", A = 8) : 180 <= C && 270 > C ? (S = 2, k = "end", A = -8) : 270 <= C && 354 >= C ? (S = 3, k = "end", A = -8) : 354 <= C && (d > u ? (S = 0, k = "start", A = 8) : (S = 3, k = "end", A = -8)), c.labelQuarter = S) : k = "middle", C = this.formatString(this.labelText, c), (w = this.labelFunction) && (C = w(c, C)), (w = c.labelColor) || (w = this.color), "" !== C && (C = t.wrappedText(n, C, w, this.fontFamily, this.fontSize, k, !1, this.maxLabelWidth), t.setCN(this, C, "pie-label"), t.setCN(this, C, c.className, !0), C.translate(m + 1.5 * A, M), 0 > f && (C.node.style.pointerEvents = "none"), C.node.style.cursor = "default", c.ty = M, c.textX = m + 1.5 * A, x.push(C), this.axesSet.push(x), c.labelSet = x, c.label = C, this.addEventListeners(x, c)), c.tx = m, c.tx2 = m + A, c.tx0 = a + v * r, c.ty0 = o + b * r
                                            }
                                            m = h + (r - h) / 2, c.pulled && (m += s), this.accessible && this.accessibleLabel && (M = this.formatString(this.accessibleLabel, c), this.makeAccessible(y, M)), void 0 !== this.tabIndex && y.setAttr("tabindex", this.tabIndex), c.balloonX = v * m + a, c.balloonY = b * m + o, c.startX = Math.round(v * p), c.startY = Math.round(b * p), c.pullX = Math.round(v * s), c.pullY = Math.round(b * s), this.graphsSet.push(y), (0 === c.alpha || 0 < i && !this.chartCreated) && (y.hide(), x && x.hide()), 360 < (g += 360 * c.percents / 100) && (g -= 360)
                                        } 0 < f && this.arrangeLabels(), this.pieXReal = a, this.pieYReal = o, this.radiusReal = r, this.innerRadiusReal = h, 0 < f && this.drawTicks(), this.initialStart(), this.setDepths()
                                }(e = this.legend) && e.invalidateSize()
                            } else this.cleanChart();
                            this.dispDUpd()
                        },
                        setDepths: function() {
                            var t, e = this.chartData;
                            for (t = 0; t < e.length; t++) {
                                var i, n = (i = e[t]).wedge;
                                0 <= (i = i.startAngle) && 180 > i ? n.toFront() : 180 <= i && n.toBack()
                            }
                        },
                        arrangeLabels: function() {
                            var t, e, i = this.chartData,
                                n = i.length;
                            for (e = n - 1; 0 <= e; e--) 0 !== (t = i[e]).labelQuarter || t.hidden || this.checkOverlapping(e, t, 0, !0, 0);
                            for (e = 0; e < n; e++) 1 != (t = i[e]).labelQuarter || t.hidden || this.checkOverlapping(e, t, 1, !1, 0);
                            for (e = n - 1; 0 <= e; e--) 2 != (t = i[e]).labelQuarter || t.hidden || this.checkOverlapping(e, t, 2, !0, 0);
                            for (e = 0; e < n; e++) 3 != (t = i[e]).labelQuarter || t.hidden || this.checkOverlapping(e, t, 3, !1, 0)
                        },
                        checkOverlapping: function(t, e, i, n, l) {
                            var s, a, o = this.chartData,
                                r = o.length,
                                u = e.label;
                            if (u) {
                                if (!0 === n)
                                    for (a = t + 1; a < r; a++) o[a].labelQuarter == i && (s = this.checkOverlappingReal(e, o[a], i)) && (a = r);
                                else
                                    for (a = t - 1; 0 <= a; a--) o[a].labelQuarter == i && (s = this.checkOverlappingReal(e, o[a], i)) && (a = 0);
                                !0 === s && 200 > l && isNaN(e.labelRadius) && (e.ty = s = e.ty + 3 * e.iy, u.translate(e.textX, s), this.checkOverlapping(t, e, i, n, l + 1))
                            }
                        },
                        checkOverlappingReal: function(e, i, n) {
                            var l = !1,
                                s = e.label,
                                a = i.label;
                            return e.labelQuarter != n || e.hidden || i.hidden || !a || (s = s.getBBox(), (n = {}).width = s.width, n.height = s.height, n.y = e.ty, n.x = e.tx, e = a.getBBox(), (a = {}).width = e.width, a.height = e.height, a.y = i.ty, a.x = i.tx, t.hitTest(n, a) && (l = !0)), l
                        }
                    })
                }()
        },
        I2Dd: function(t, e) {
            var i;
            window.AmCharts ? i = window.AmCharts : (i = {}, window.AmCharts = i, i.themes = {}, i.maps = {}, i.inheriting = {}, i.charts = [], i.onReadyArray = [], i.useUTC = !1, i.updateRate = 60, i.uid = 0, i.lang = {}, i.translations = {}, i.mapTranslations = {}, i.windows = {}, i.initHandlers = [], i.amString = "am", i.pmString = "pm"), i.Class = function(t) {
                    var e = function() {
                        arguments[0] !== i.inheriting && (this.events = {}, this.construct.apply(this, arguments))
                    };
                    for (var n in t.inherits ? (e.prototype = new t.inherits(i.inheriting), e.base = t.inherits.prototype, delete t.inherits) : (e.prototype.createEvents = function() {
                            for (var t = 0; t < arguments.length; t++) this.events[arguments[t]] = []
                        }, e.prototype.listenTo = function(t, e, i) {
                            this.removeListener(t, e, i), t.events[e].push({
                                handler: i,
                                scope: this
                            })
                        }, e.prototype.addListener = function(t, e, i) {
                            this.removeListener(this, t, e), t && this.events[t] && this.events[t].push({
                                handler: e,
                                scope: i
                            })
                        }, e.prototype.removeListener = function(t, e, i) {
                            if (t && t.events && (t = t.events[e]))
                                for (e = t.length - 1; 0 <= e; e--) t[e].handler === i && t.splice(e, 1)
                        }, e.prototype.fire = function(t) {
                            for (var e = this.events[t.type], i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.handler.call(n.scope, t)
                            }
                        }), t) e.prototype[n] = t[n];
                    return e
                }, i.addChart = function(t) {
                    window.requestAnimationFrame ? i.animationRequested || (i.animationRequested = !0, window.requestAnimationFrame(i.update)) : i.updateInt || (i.updateInt = setInterval(function() {
                        i.update()
                    }, Math.round(1e3 / i.updateRate))), i.charts.push(t)
                }, i.removeChart = function(t) {
                    for (var e = i.charts, n = e.length - 1; 0 <= n; n--) e[n] == t && e.splice(n, 1);
                    0 === e.length && (i.requestAnimation && (window.cancelAnimationFrame(i.requestAnimation), i.animationRequested = !1), i.updateInt && (clearInterval(i.updateInt), i.updateInt = NaN))
                }, i.isModern = !0, i.getIEVersion = function() {
                    var t, e = 0;
                    return "Microsoft Internet Explorer" == navigator.appName && (t = navigator.userAgent, null !== /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(t) && (e = parseFloat(RegExp.$1))), e
                }, i.applyLang = function(t, e) {
                    var n = i.translations;
                    e.dayNames = i.extend({}, i.dayNames), e.shortDayNames = i.extend({}, i.shortDayNames), e.monthNames = i.extend({}, i.monthNames), e.shortMonthNames = i.extend({}, i.shortMonthNames), e.amString = "am", e.pmString = "pm", n && (n = n[t]) && (i.lang = n, e.langObj = n, n.monthNames && (e.dayNames = i.extend({}, n.dayNames), e.shortDayNames = i.extend({}, n.shortDayNames), e.monthNames = i.extend({}, n.monthNames), e.shortMonthNames = i.extend({}, n.shortMonthNames)), n.am && (e.amString = n.am), n.pm && (e.pmString = n.pm)), i.amString = e.amString, i.pmString = e.pmString
                }, i.IEversion = i.getIEVersion(), 9 > i.IEversion && 0 < i.IEversion && (i.isModern = !1, i.isIE = !0), i.dx = 0, i.dy = 0, (document.addEventListener || window.opera) && (i.isNN = !0, i.isIE = !1, i.dx = .5, i.dy = .5), document.attachEvent && (i.isNN = !1, i.isIE = !0, i.isModern || (i.dx = 0, i.dy = 0)), window.chrome && (i.chrome = !0), i.handleMouseUp = function(t) {
                    for (var e = i.charts, n = 0; n < e.length; n++) {
                        var l = e[n];
                        l && l.handleReleaseOutside && l.handleReleaseOutside(t)
                    }
                }, i.handleMouseMove = function(t) {
                    for (var e = i.charts, n = 0; n < e.length; n++) {
                        var l = e[n];
                        l && l.handleMouseMove && l.handleMouseMove(t)
                    }
                }, i.handleWheel = function(t) {
                    for (var e = i.charts, n = 0; n < e.length; n++) {
                        var l = e[n];
                        if (l && l.mouseIsOver) {
                            (l.mouseWheelScrollEnabled || l.mouseWheelZoomEnabled) && l.handleWheel && (l.handleMouseMove(t), l.handleWheel(t));
                            break
                        }
                    }
                }, i.resetMouseOver = function() {
                    for (var t = i.charts, e = 0; e < t.length; e++) {
                        var n = t[e];
                        n && (n.mouseIsOver = !1)
                    }
                }, i.ready = function(t) {
                    i.onReadyArray.push(t)
                }, i.handleLoad = function() {
                    i.isReady = !0;
                    for (var t = i.onReadyArray, e = 0; e < t.length; e++) {
                        var n = t[e];
                        isNaN(i.processDelay) ? n() : setTimeout(n, i.processDelay * e)
                    }
                    i.onReadyArray = []
                }, i.addInitHandler = function(t, e) {
                    i.initHandlers.push({
                        method: t,
                        types: e
                    })
                }, i.callInitHandler = function(t) {
                    var e = i.initHandlers;
                    if (i.initHandlers)
                        for (var n = 0; n < e.length; n++) {
                            var l = e[n];
                            l.types ? i.isInArray(l.types, t.type) && l.method(t) : l.method(t)
                        }
                }, i.getUniqueId = function() {
                    return i.uid++, "AmChartsEl-" + i.uid
                }, i.isNN && (document.addEventListener("mousemove", i.handleMouseMove), document.addEventListener("mouseup", i.handleMouseUp, !0), window.addEventListener("load", i.handleLoad, !0)), i.isIE && (document.attachEvent("onmousemove", i.handleMouseMove), document.attachEvent("onmouseup", i.handleMouseUp), window.attachEvent("onload", i.handleLoad)), i.addWheelListeners = function() {
                    i.wheelIsListened || (i.isNN && (window.addEventListener("DOMMouseScroll", i.handleWheel, !0), document.addEventListener("mousewheel", i.handleWheel, !0)), i.isIE && document.attachEvent("onmousewheel", i.handleWheel)), i.wheelIsListened = !0
                }, i.clear = function() {
                    var t = i.charts;
                    if (t)
                        for (var e = t.length - 1; 0 <= e; e--) t[e].clear();
                    i.updateInt && clearInterval(i.updateInt), i.requestAnimation && window.cancelAnimationFrame(i.requestAnimation), i.charts = [], i.isNN && (document.removeEventListener("mousemove", i.handleMouseMove, !0), document.removeEventListener("mouseup", i.handleMouseUp, !0), window.removeEventListener("load", i.handleLoad, !0), window.removeEventListener("DOMMouseScroll", i.handleWheel, !0), document.removeEventListener("mousewheel", i.handleWheel, !0)), i.isIE && (document.detachEvent("onmousemove", i.handleMouseMove), document.detachEvent("onmouseup", i.handleMouseUp), window.detachEvent("onload", i.handleLoad))
                }, i.makeChart = function(t, e, n) {
                    var l, s = e.type,
                        a = e.theme;
                    switch (i.isString(a) && (e.theme = a = i.themes[a]), s) {
                        case "serial":
                            l = new i.AmSerialChart(a);
                            break;
                        case "xy":
                            l = new i.AmXYChart(a);
                            break;
                        case "pie":
                            l = new i.AmPieChart(a);
                            break;
                        case "radar":
                            l = new i.AmRadarChart(a);
                            break;
                        case "gauge":
                            l = new i.AmAngularGauge(a);
                            break;
                        case "funnel":
                            l = new i.AmFunnelChart(a);
                            break;
                        case "map":
                            l = new i.AmMap(a);
                            break;
                        case "stock":
                            l = new i.AmStockChart(a);
                            break;
                        case "gantt":
                            l = new i.AmGanttChart(a)
                    }
                    return i.extend(l, e), i.isReady ? isNaN(n) ? l.write(t) : setTimeout(function() {
                        i.realWrite(l, t)
                    }, n) : i.ready(function() {
                        isNaN(n) ? l.write(t) : setTimeout(function() {
                            i.realWrite(l, t)
                        }, n)
                    }), l
                }, i.realWrite = function(t, e) {
                    t.write(e)
                }, i.updateCount = 0, i.validateAt = Math.round(i.updateRate / 10), i.update = function() {
                    var t = i.charts;
                    i.updateCount++;
                    var e = !1;
                    if (i.updateCount == i.validateAt && (e = !0, i.updateCount = 0), t)
                        for (var n = t.length - 1; 0 <= n; n--) t[n].update && t[n].update(), e && (t[n].autoResize ? t[n].validateSize && t[n].validateSize() : t[n].premeasure && t[n].premeasure());
                    window.requestAnimationFrame && (i.requestAnimation = window.requestAnimationFrame(i.update))
                }, "complete" == document.readyState && i.handleLoad(),
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
                        var i;
                        if (void 0 !== e && void 0 !== t)
                            for (i = t.length - 1; 0 <= i; i--) t[i] == e && t.splice(i, 1)
                    }, t.getPath = function() {
                        var t = document.getElementsByTagName("script");
                        if (t)
                            for (var e = 0; e < t.length; e++) {
                                var i = t[e].src;
                                if (-1 !== i.search(/\/(amcharts|ammap)\.js/)) return i.replace(/\/(amcharts|ammap)\.js.*/, "/")
                            }
                    }, t.normalizeUrl = function(t) {
                        return "" !== t && -1 === t.search(/\/$/) ? t + "/" : t
                    }, t.isAbsolute = function(t) {
                        return 0 === t.search(/^http[s]?:|^\//)
                    }, t.isInArray = function(t, e) {
                        for (var i = 0; i < t.length; i++)
                            if (t[i] == e) return !0;
                        return !1
                    }, t.getDecimals = function(t) {
                        var e = 0;
                        return isNaN(t) || (-1 != (t = String(t)).indexOf("e-") ? e = Number(t.split("-")[1]) : -1 != t.indexOf(".") && (e = t.split(".")[1].length)), e
                    }, t.wordwrap = function(e, i, n, l) {
                        var s, a, o, r;
                        if (e += "", 1 > i) return e;
                        for (s = -1, e = (r = e.split(/\r\n|\n|\r/)).length; ++s < e; r[s] += o) {
                            for (o = r[s], r[s] = ""; o.length > i; r[s] += t.trim(o.slice(0, a)) + ((o = o.slice(a)).length ? n : "")) a = 2 == l || (a = o.slice(0, i + 1).match(/\S*(\s)?$/))[1] ? i : a.input.length - a[0].length || 1 == l && i || a.input.length + (a = o.slice(i).match(/^\S*/))[0].length;
                            o = t.trim(o)
                        }
                        return r.join(n)
                    }, t.trim = function(t) {
                        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }, t.wrappedText = function(e, i, n, l, s, a, o, r) {
                        var u = t.text(e, i, n, l, s, a, o);
                        if (u) {
                            var h = u.getBBox();
                            if (h.width > r) {
                                var d = "\n";
                                t.isModern || (d = "<br>"), 2 < (r = Math.floor(r / (h.width / i.length))) && (r -= 2), i = t.wordwrap(i, r, d, !0), u.remove(), u = t.text(e, i, n, l, s, a, o)
                            }
                        }
                        return u
                    }, t.getStyle = function(t, e) {
                        var i = "";
                        if (document.defaultView && document.defaultView.getComputedStyle) try {
                            i = document.defaultView.getComputedStyle(t, "").getPropertyValue(e)
                        } catch (n) {} else t.currentStyle && (e = e.replace(/\-(\w)/g, function(t, e) {
                            return e.toUpperCase()
                        }), i = t.currentStyle[e]);
                        return i
                    }, t.removePx = function(t) {
                        if (void 0 !== t) return Number(t.substring(0, t.length - 2))
                    }, t.getURL = function(e, i) {
                        if (e)
                            if ("_self" != i && i)
                                if ("_top" == i && window.top) window.top.location.href = e;
                                else if ("_parent" == i && window.parent) window.parent.location.href = e;
                        else if ("_blank" == i) window.open(e);
                        else {
                            var n = document.getElementsByName(i)[0];
                            n ? n.src = e : (n = t.windows[i]) && n.opener && !n.opener.closed ? n.location.href = e : t.windows[i] = window.open(e)
                        } else window.location.href = e
                    }, t.ifArray = function(t) {
                        return !!(t && "object" == typeof t && 0 < t.length)
                    }, t.callMethod = function(t, e) {
                        var i;
                        for (i = 0; i < e.length; i++) {
                            var n = e[i];
                            if (n) {
                                n[t] && n[t]();
                                var l, s = n.length;
                                if (0 < s)
                                    for (l = 0; l < s; l++) {
                                        var a = n[l];
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
                                    var i = t[e].substring(t[e].length - 6, t[e].length);
                                    t[e] = "#" + i
                                }
                            } else t = "#" + (t = t.substring(t.length - 6, t.length));
                        return t
                    }, t.toCoordinate = function(t, e, i) {
                        var n;
                        return void 0 !== t && (t = String(t), i && i < e && (e = i), n = Number(t), -1 != t.indexOf("!") && (n = e - Number(t.substr(1))), -1 != t.indexOf("%") && (n = e * Number(t.substr(0, t.length - 1)) / 100)), n
                    }, t.fitToBounds = function(t, e, i) {
                        return t < e && (t = e), t > i && (t = i), t
                    }, t.isDefined = function(t) {
                        return void 0 !== t
                    }, t.stripNumbers = function(t) {
                        return t.replace(/[0-9]+/g, "")
                    }, t.roundTo = function(t, e) {
                        if (0 > e) return t;
                        var i = Math.pow(10, e);
                        return Math.round(t * i) / i
                    }, t.toFixed = function(t, e) {
                        var i = !1;
                        0 > t && (i = !0, t = Math.abs(t));
                        var n = String(Math.round(t * Math.pow(10, e)));
                        if (0 < e) {
                            var l, s = n.length;
                            if (s < e)
                                for (l = 0; l < e - s; l++) n = "0" + n;
                            return "" === (s = n.substring(0, n.length - e)) && (s = 0), n = s + "." + n.substring(n.length - e, n.length), i ? "-" + n : n
                        }
                        return String(n)
                    }, t.formatDuration = function(e, i, n, l, s, a) {
                        var o = t.intervals,
                            r = a.decimalSeparator;
                        if (e >= o[i].contains) {
                            var u = e - Math.floor(e / o[i].contains) * o[i].contains;
                            return "ss" == i ? 1 == (u = t.formatNumber(u, a)).split(r)[0].length && (u = "0" + u) : u = t.roundTo(u, a.precision), ("mm" == i || "hh" == i) && 10 > u && (u = "0" + u), n = u + "" + l[i] + n, e = Math.floor(e / o[i].contains), t.formatDuration(e, i = o[i].nextInterval, n, l, s, a)
                        }
                        if ("ss" == i && 1 == (e = t.formatNumber(e, a)).split(r)[0].length && (e = "0" + e), "mm" == i && (e = t.roundTo(e, a.precision)), ("mm" == i || "hh" == i) && 10 > e && (e = "0" + e), n = e + "" + l[i] + n, o[s].count > o[i].count)
                            for (e = o[i].count; e < o[s].count; e++) "ss" == (i = o[i].nextInterval) || "mm" == i || "hh" == i ? n = "00" + l[i] + n : "DD" == i && (n = "0" + l[i] + n);
                        return ":" == n.charAt(n.length - 1) && (n = n.substring(0, n.length - 1)), n
                    }, t.formatNumber = function(e, i, n, l, s) {
                        e = t.roundTo(e, i.precision), isNaN(n) && (n = i.precision);
                        var a, o = i.decimalSeparator;
                        null == o && (o = ","), null == (i = i.thousandsSeparator) && (i = " "), a = 0 > e ? "-" : "", e = Math.abs(e);
                        var r = !1; - 1 != (d = String(e)).indexOf("e") && (r = !0), 0 <= n && !r && (d = t.toFixed(e, n));
                        var u = "";
                        if (r) u = d;
                        else {
                            var h, d = d.split(".");
                            for (h = (r = String(d[0])).length; 0 <= h; h -= 3) u = h != r.length ? 0 !== h ? r.substring(h - 3, h) + i + u : r.substring(h - 3, h) + u : r.substring(h - 3, h);
                            void 0 !== d[1] && (u = u + o + d[1]), void 0 !== n && 0 < n && "0" != u && (u = t.addZeroes(u, o, n))
                        }
                        return u = a + u, "" === a && !0 === l && 0 !== e && (u = "+" + u), !0 === s && (u += "%"), u
                    }, t.addZeroes = function(e, i, n) {
                        return void 0 === (e = e.split(i))[1] && 0 < n && (e[1] = "0"), e[1].length < n ? (e[1] += "0", t.addZeroes(e[0] + i + e[1], i, n)) : void 0 !== e[1] ? e[0] + i + e[1] : e[0]
                    }, t.scientificToNormal = function(t) {
                        var e, i;
                        if ("-" == (t = String(t).split("e"))[1].substr(0, 1)) {
                            for (e = "0.", i = 0; i < Math.abs(Number(t[1])) - 1; i++) e += "0";
                            e += t[0].split(".").join("")
                        } else {
                            var n = 0;
                            for ((e = t[0].split("."))[1] && (n = e[1].length), e = t[0].split(".").join(""), i = 0; i < Math.abs(Number(t[1])) - n; i++) e += "0"
                        }
                        return e
                    }, t.toScientific = function(t, e) {
                        if (0 === t) return "0";
                        var i = Math.floor(Math.log(Math.abs(t)) * Math.LOG10E),
                            n = String(n).split(".").join(e);
                        return String(n) + "e" + i
                    }, t.randomColor = function() {
                        return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6)
                    }, t.hitTest = function(e, i, n) {
                        var l = !1,
                            s = e.x,
                            a = e.x + e.width,
                            o = e.y,
                            r = e.y + e.height,
                            u = t.isInRectangle;
                        return l || (l = u(s, o, i)), l || (l = u(s, r, i)), l || (l = u(a, o, i)), l || (l = u(a, r, i)), l || !0 === n || (l = t.hitTest(i, e, !0)), l
                    }, t.isInRectangle = function(t, e, i) {
                        return t >= i.x - 5 && t <= i.x + i.width + 5 && e >= i.y - 5 && e <= i.y + i.height + 5
                    }, t.isPercents = function(t) {
                        if (-1 != String(t).indexOf("%")) return !0
                    }, t.formatValue = function(e, i, n, l, s, a, o, r) {
                        var u;
                        if (i)
                            for (void 0 === s && (s = ""), u = 0; u < n.length; u++) {
                                var h = n[u],
                                    d = i[h];
                                void 0 !== d && (d = a ? t.addPrefix(d, r, o, l) : t.formatNumber(d, l), e = e.replace(new RegExp("\\[\\[" + s + h + "\\]\\]", "g"), d))
                            }
                        return e
                    }, t.formatDataContextValue = function(t, e) {
                        if (t) {
                            var i, n = t.match(/\[\[.*?\]\]/g);
                            for (i = 0; i < n.length; i++) {
                                var l;
                                void 0 !== e[l = (l = n[i]).substr(2, l.length - 4)] && (t = t.replace(new RegExp("\\[\\[" + l + "\\]\\]", "g"), e[l]))
                            }
                        }
                        return t
                    }, t.massReplace = function(t, e) {
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var n = e[i];
                                void 0 === n && (n = ""), t = t.replace(i, n)
                            } return t
                    }, t.cleanFromEmpty = function(t) {
                        return t.replace(/\[\[[^\]]*\]\]/g, "")
                    }, t.addPrefix = function(e, i, n, l, s) {
                        var a, o, r, u = t.formatNumber(e, l),
                            h = "";
                        if (0 === e) return "0";
                        if (0 > e && (h = "-"), 1 < (e = Math.abs(e))) {
                            for (a = i.length - 1; - 1 < a; a--)
                                if (e >= i[a].number && (o = e / i[a].number, 1 > (r = Number(l.precision)) && (r = 1), n = t.roundTo(o, r), r = t.formatNumber(n, {
                                        precision: -1,
                                        decimalSeparator: l.decimalSeparator,
                                        thousandsSeparator: l.thousandsSeparator
                                    }), !s || o == n)) {
                                    u = h + "" + r + i[a].prefix;
                                    break
                                }
                        } else
                            for (a = 0; a < n.length; a++)
                                if (e <= n[a].number) {
                                    o = e / n[a].number, r = Math.abs(Math.floor(Math.log(o) * Math.LOG10E)), u = h + "" + (o = t.roundTo(o, r)) + n[a].prefix;
                                    break
                                } return u
                    }, t.remove = function(t) {
                        t && t.remove()
                    }, t.getEffect = function(t) {
                        return ">" == t && (t = "easeOutSine"), "<" == t && (t = "easeInSine"), "elastic" == t && (t = "easeOutElastic"), t
                    }, t.getObjById = function(t, e) {
                        var i, n;
                        for (n = 0; n < t.length; n++) {
                            var l = t[n];
                            if (l.id == e) {
                                i = l;
                                break
                            }
                        }
                        return i
                    }, t.applyTheme = function(e, i, n) {
                        i || (i = t.theme);
                        try {
                            i = JSON.parse(JSON.stringify(i))
                        } catch (l) {}
                        i && i[n] && t.extend(e, i[n])
                    }, t.isString = function(t) {
                        return "string" == typeof t
                    }, t.extend = function(t, e, i) {
                        var n;
                        for (n in t || (t = {}), e) i && t.hasOwnProperty(n) || (t[n] = e[n]);
                        return t
                    }, t.copyProperties = function(t, e) {
                        for (var i in t) t.hasOwnProperty(i) && "events" != i && void 0 !== t[i] && "function" != typeof t[i] && "cname" != i && (e[i] = t[i])
                    }, t.processObject = function(e, i, n, l) {
                        if (0 == e instanceof i && (e = l ? t.extend(new i(n), e) : t.extend(e, new i(n), !0)).listeners)
                            for (var s in e.listeners) e.addListener((i = e.listeners[s]).event, i.method);
                        return e
                    }, t.fixNewLines = function(t) {
                        var e = RegExp("\\n", "g");
                        return t && (t = t.replace(e, "<br />")), t
                    }, t.fixBrakes = function(e) {
                        if (t.isModern) {
                            var i = RegExp("<br>", "g");
                            e && (e = e.replace(i, "\n"))
                        } else e = t.fixNewLines(e);
                        return e
                    }, t.deleteObject = function(e, i) {
                        if (e && (null == i && (i = 20), 0 !== i))
                            if ("[object Array]" === Object.prototype.toString.call(e))
                                for (var n = 0; n < e.length; n++) t.deleteObject(e[n], i - 1), e[n] = null;
                            else if (e && !e.tagName) try {
                            for (n in e.theme = null, e) e[n] && ("object" == typeof e[n] && t.deleteObject(e[n], i - 1), "function" != typeof e[n] && (e[n] = null))
                        } catch (l) {}
                    }, t.bounce = function(t, e, i, n, l) {
                        return (e /= l) < 1 / 2.75 ? 7.5625 * n * e * e + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
                    }, t.easeInOutQuad = function(t, e, i, n, l) {
                        return 1 > (e /= l / 2) ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
                    }, t.easeInSine = function(t, e, i, n, l) {
                        return -n * Math.cos(e / l * (Math.PI / 2)) + n + i
                    }, t.easeOutSine = function(t, e, i, n, l) {
                        return n * Math.sin(e / l * (Math.PI / 2)) + i
                    }, t.easeOutElastic = function(t, e, i, n, l) {
                        t = 1.70158;
                        var s = 0,
                            a = n;
                        return 0 === e ? i : 1 == (e /= l) ? i + n : (s || (s = .3 * l), a < Math.abs(n) ? (a = n, t = s / 4) : t = s / (2 * Math.PI) * Math.asin(n / a), a * Math.pow(2, -10 * e) * Math.sin(2 * (e * l - t) * Math.PI / s) + n + i)
                    }, t.fixStepE = function(e) {
                        e = e.toExponential(0).split("e");
                        var i = Number(e[1]);
                        return 9 == Number(e[0]) && i++, t.generateNumber(1, i)
                    }, t.generateNumber = function(t, e) {
                        var i, n, l = "";
                        for (i = 0 > e ? Math.abs(e) - 1 : Math.abs(e), n = 0; n < i; n++) l += "0";
                        return 0 > e ? Number("0." + l + String(t)) : Number(String(t) + l)
                    }, t.setCN = function(t, e, i, n) {
                        if (t.addClassNames && e && (e = e.node) && i) {
                            var l = e.getAttribute("class");
                            t = t.classNamePrefix + "-", n && (t = ""), e.setAttribute("class", l ? l + " " + t + i : t + i)
                        }
                    }, t.removeCN = function(t, e, i) {
                        e && (e = e.node) && i && (e = e.classList) && e.remove(t.classNamePrefix + "-" + i)
                    }, t.parseDefs = function(e, i) {
                        for (var n in e) {
                            var l = typeof e[n];
                            if (0 < e[n].length && "object" == l)
                                for (var s = 0; s < e[n].length; s++) l = document.createElementNS(t.SVG_NS, n), i.appendChild(l), t.parseDefs(e[n][s], l);
                            else "object" == l ? (l = document.createElementNS(t.SVG_NS, n), i.appendChild(l), t.parseDefs(e[n], l)) : i.setAttribute(n, e[n])
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
                                i = e.set();
                            t.gridSet.push(i), this.set = i, e = e.set(), t.axesLabelsSet.push(e), this.labelsSet = e, this.axisLine = new this.axisRenderer(this), this.autoGridCount ? ("V" == this.orientation ? 3 > (t = this.height / this.minVerticalGap) && (t = 3) : t = this.width / this.minHorizontalGap, this.gridCountR = Math.max(t, 1)) : this.gridCountR = this.gridCount, this.axisWidth = this.axisLine.axisWidth, this.addTitle()
                        },
                        setOrientation: function(t) {
                            this.orientation = t ? "H" : "V"
                        },
                        addTitle: function() {
                            var e = this.title;
                            if (this.titleLabel = null, e) {
                                var i = this.chart,
                                    n = this.titleColor;
                                void 0 === n && (n = i.color);
                                var l = this.titleFontSize;
                                isNaN(l) && (l = i.fontSize + 1), e = t.text(i.container, e, n, i.fontFamily, l, this.titleAlign, this.titleBold), t.setCN(i, e, this.bcn + "title"), this.titleLabel = e
                            }
                        },
                        positionTitle: function() {
                            var e = this.titleLabel;
                            if (e) {
                                var i, n, l = {};
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
                                        i = "left" == p ? -1 : "right" == p ? r : r / 2, n = a - 10 - d;
                                        break;
                                    case "bottom":
                                        i = "left" == p ? -1 : "right" == p ? r : r / 2, n = a + l + 10 + d;
                                        break;
                                    case "left":
                                        i = s - 10 - d, c && (i -= 5), h = -90, n = ("left" == p ? u + 1 : "right" == p ? -1 : u / 2) + this.titleDY, this.titleWidth = d + 10;
                                        break;
                                    case "right":
                                        i = s + o + 10 + d, c && (i += 7), n = ("left" == p ? u + 2 : "right" == p ? -2 : u / 2) + this.titleDY, this.titleWidth = d + 10, h = -90
                                }
                                this.marginsChanged ? (e.translate(i, n), this.tx = i, this.ty = n) : e.translate(this.tx, this.ty), this.marginsChanged = !1, isNaN(this.titleRotation) || (h = this.titleRotation), 0 !== h && e.rotate(h)
                            }
                        },
                        pushAxisItem: function(t, e) {
                            var i = this,
                                n = t.graphics();
                            0 < n.length() && (e ? i.labelsSet.push(n) : i.set.push(n)), (n = t.getLabel()) && (i.labelsSet.push(n), n.click(function(e) {
                                i.handleMouse(e, t, "clickItem")
                            }).touchend(function(e) {
                                i.handleMouse(e, t, "clickItem")
                            }).mouseover(function(e) {
                                i.handleMouse(e, t, "rollOverItem")
                            }).mouseout(function(e) {
                                i.handleMouse(e, t, "rollOutItem")
                            }))
                        },
                        handleMouse: function(t, e, i) {
                            this.fire({
                                type: i,
                                value: e.value,
                                serialDataItem: e.serialDataItem,
                                axis: this,
                                target: e.label,
                                chart: this.chart,
                                event: t
                            })
                        },
                        addGuide: function(e) {
                            for (var i = this.guides, n = !1, l = i.length, s = 0; s < i.length; s++) i[s] == e && (n = !0, l = s);
                            (e = t.processObject(e, t.Guide, this.theme)).id || (e.id = "guideAuto" + l + "_" + (new Date).getTime()), n || i.push(e)
                        },
                        removeGuide: function(t) {
                            var e, i = this.guides;
                            for (e = 0; e < i.length; e++) i[e] == t && i.splice(e, 1)
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
                            var i = t.fillColor;
                            void 0 === i && (i = t.lineColor), this.chart.showBalloon(t.balloonText, i, !0, this.x + e.x + e.width / 2, e = this.y + e.y + e.height / 2), this.fire({
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
                            var i = this;
                            t.mouseover(function() {
                                i.handleGuideOver(e)
                            }), t.mouseup(function() {
                                i.handleGuideClick(e)
                            }), t.touchstart(function() {
                                i.handleGuideOver(e)
                            }), t.mouseout(function() {
                                i.handleGuideOut(e)
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
                            var e, i, n, l, s, a, o, r = this.chart,
                                u = this.showFirstLabel,
                                h = this.showLastLabel,
                                d = "",
                                c = t.extractPeriod(this.minPeriod),
                                p = t.getPeriodDuration(c.period, c.count),
                                g = this.firstDayOfWeek,
                                f = this.boldPeriodBeginning;
                            e = this.minorGridEnabled;
                            var m, v, b, y = this.gridAlpha,
                                x = (b = this.choosePeriod(0)).period,
                                C = t.getPeriodDuration(x, b = b.count);
                            C < p && (x = c.period, b = c.count, C = p), "WW" == (c = x) && (c = "DD"), this.stepWidth = this.getStepWidth(this.timeDifference);
                            var w = Math.ceil(this.timeDifference / C) + 5,
                                k = n = t.resetDateToMin(new Date(this.startTime - C), x, b, g).getTime();
                            (c == x && 1 == b && this.centerLabelOnFullPeriod || this.autoWrap || this.centerLabels) && (s = C * this.stepWidth, this.autoWrap && !this.centerLabels && (s = -s)), this.cellWidth = p * this.stepWidth, p = -1, (a = Math.round(n / C)) / 2 == Math.round(a / 2) && (p = -2, n -= C), a = this.firstTime;
                            var S = 0,
                                M = 0;
                            if (e && 1 < b && (m = this.chooseMinorFrequency(b), v = t.getPeriodDuration(x, m), "DD" == x && (v += t.getPeriodDuration("hh")), "fff" == x && (v = 1)), 0 < this.gridCountR)
                                for (w - 5 - p > this.autoRotateCount && !isNaN(this.autoRotateAngle) && (this.labelRotationR = this.autoRotateAngle), e = p; e <= w; e++) {
                                    if (o = a + C * (e + Math.floor((k - a) / C)) - S, "DD" == x && (o += 36e5), o = t.resetDateToMin(new Date(o), x, b, g).getTime(), "MM" == x && (i = (o - n) / C, 1.5 <= (o - n) / C && (o = o - (i - 1) * C + t.getPeriodDuration("DD", 3), o = t.resetDateToMin(new Date(o), x, 1).getTime(), S += C)), i = (o - this.startTime) * this.stepWidth, "radar" == r.type) {
                                        if (0 > (i = this.axisWidth - i) || i > this.axisWidth) continue
                                    } else this.rotate ? "date" == this.type && "middle" == this.gridPosition && (M = -C * this.stepWidth / 2) : "date" == this.type && (i = this.axisWidth - i);
                                    if (d = !1, this.nextPeriod[c] && (d = this.checkPeriodChange(this.nextPeriod[c], 1, o, n, c)), n = !1, d && this.markPeriodChange ? (d = this.dateFormatsObject[this.nextPeriod[c]], this.twoLineMode && (d = t.fixBrakes(d = this.dateFormatsObject[c] + "\n" + d)), n = !0) : d = this.dateFormatsObject[c], f || (n = !1), this.currentDateFormat = d, d = t.formatDate(new Date(o), d, r), (e == p && !u || e == w && !h) && (d = " "), this.labelFunction && (d = this.labelFunction(d, new Date(o), this, x, b, l).toString()), this.boldLabels && (n = !0), l = new this.axisItemRenderer(this, i, d, !1, s, M, !1, n), this.pushAxisItem(l), l = n = o, !isNaN(m))
                                        for (i = 1; i < b; i += m) this.gridAlpha = this.minorGridAlpha, d = o + v * i, d = t.resetDateToMin(new Date(d), x, m, g).getTime(), d = new this.axisItemRenderer(this, (d - this.startTime) * this.stepWidth, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), this.pushAxisItem(d);
                                    this.gridAlpha = y
                                }
                        },
                        choosePeriod: function(e) {
                            var i = t.getPeriodDuration(this.periods[e].period, this.periods[e].count),
                                n = this.periods;
                            return this.timeDifference < i && 0 < e ? n[e - 1] : Math.ceil(this.timeDifference / i) <= this.gridCountR ? n[e] : e + 1 < n.length ? this.choosePeriod(e + 1) : n[e]
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
                        checkPeriodChange: function(e, i, n, l, s) {
                            n = new Date(n);
                            var a = new Date(l),
                                o = this.firstDayOfWeek;
                            return l = i, "DD" == e && (i = 1), n = t.resetDateToMin(n, e, i, o).getTime(), i = t.resetDateToMin(a, e, i, o).getTime(), !("DD" == e && "hh" != s && n - i < t.getPeriodDuration(e, l) - t.getPeriodDuration("hh", 1)) && n != i
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
                        showBalloon: function(t, e, i, n) {
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
                            if (i || (i = this.currentDateFormat), "V" == this.orientation) {
                                if (0 > e || e > this.height) return;
                                if (isNaN(e)) return void this.hideBalloon();
                                e = this.adjustBalloonCoordinate(e, n), n = this.coordinateToValue(e)
                            } else {
                                if (0 > t || t > this.width) return;
                                if (isNaN(t)) return void this.hideBalloon();
                                t = this.adjustBalloonCoordinate(t, n), n = this.coordinateToValue(t)
                            }(s = this.chart.chartCursor) && (l = s.index), this.balloon && void 0 !== n && this.balloon.enabled && (this.balloonTextFunction ? ("date" != this.type && !0 !== this.parseDates || (n = new Date(n)), n = this.balloonTextFunction(n)) : this.balloonText ? n = this.formatBalloonText(this.balloonText, l, i) : isNaN(n) || (n = this.formatValue(n, i)), t == this.prevBX && e == this.prevBY || (this.balloon.setPosition(t, e), this.prevBX = t, this.prevBY = e, n && this.balloon.showBalloon(n)))
                        },
                        adjustBalloonCoordinate: function(t) {
                            return t
                        },
                        createBalloon: function() {
                            var e = this.chart,
                                i = e.chartCursor;
                            i && ("mouse" != (i = i.cursorPosition) && (this.stickBalloonToCategory = !0), "start" == i && (this.stickBalloonToStart = !0), "ValueAxis" == this.cname && (this.stickBalloonToCategory = !1)), this.balloon && (this.balloon.destroy && this.balloon.destroy(), t.extend(this.balloon, e.balloon, !0))
                        },
                        setBalloonBounds: function() {
                            var t = this.balloon;
                            if (t) {
                                var e = this.chart;
                                t.cornerRadius = 0, t.shadowAlpha = 0, t.borderThickness = 1, t.borderAlpha = 1, t.adjustBorderColor = !1, t.showBullet = !1, this.balloon = t, t.chart = e, t.mainSet = e.plotBalloonsSet, t.pointerWidth = this.tickLength, (this.parseDates || "date" == this.type) && (t.pointerWidth = 0), t.className = this.id, e = "V", "V" == this.orientation && (e = "H"), this.stickBalloonToCategory || (t.animationDuration = 0);
                                var i, n, l, s, a = this.inside,
                                    o = this.width,
                                    r = this.height;
                                switch (this.position) {
                                    case "bottom":
                                        i = 0, n = o, a ? (l = 0, s = r) : (l = r, s = r + 1e3);
                                        break;
                                    case "top":
                                        i = 0, n = o, a ? (l = 0, s = r) : (l = -1e3, s = 0);
                                        break;
                                    case "left":
                                        l = 0, s = r, a ? (i = 0, n = o) : (i = -1e3, n = 0);
                                        break;
                                    case "right":
                                        l = 0, s = r, a ? (i = 0, n = o) : (i = o, n = o + 1e3)
                                }
                                t.drop || (t.pointerOrientation = e), t.setBounds(i, l, n, s)
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
                                i = this.set;
                            this.labelRotationR = this.labelRotation, t.setCN(e, this.set, "value-axis value-axis-" + this.id), t.setCN(e, this.labelsSet, "value-axis value-axis-" + this.id), t.setCN(e, this.axisLine.axisSet, "value-axis value-axis-" + this.id);
                            var n = this.type;
                            if ("duration" == n && (this.duration = "ss"), !0 === this.dataChanged && (this.updateData(), this.dataChanged = !1), "date" == n && (this.logarithmic = !1, this.min = this.minRR, this.max = this.maxRR, this.reversed = !1, this.getDateMinMax()), this.logarithmic) {
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
                                var b, y, x = 0;
                                for (1 > this.step && -1 < this.step && (x = t.getDecimals(this.step)), this.integersOnly && (x = 0), x > this.maxDecCount && (x = this.maxDecCount), v = this.precision, isNaN(v) || (x = v), isNaN(this.maxZoom) && (this.max = t.roundTo(this.max, this.maxDecCount), this.min = t.roundTo(this.min, this.maxDecCount)), (o = {}).precision = x, o.decimalSeparator = e.nf.decimalSeparator, o.thousandsSeparator = e.nf.thousandsSeparator, this.numberFormatter = o, this.exponential = !1, o = f; o < m; o += g) {
                                    var C = t.roundTo(this.step * o + this.min, x); - 1 != String(C).indexOf("e") && (this.exponential = !0)
                                }
                                if (this.duration && (this.maxInterval = t.getMaxInterval(this.max, this.duration)), x = this.step, C = this.minorGridAlpha, this.minorGridEnabled && (y = this.getMinorGridStep(x, this.stepWidth * x)), this.autoGridCount || 0 !== this.gridCount)
                                    if ("date" == n) this.generateDFObject(), this.timeDifference = this.max - this.min, this.maxTime = this.lastTime = this.max, this.startTime = this.firstTime = this.min, this.parseDatesDraw();
                                    else
                                        for (m >= this.autoRotateCount && !isNaN(this.autoRotateAngle) && (this.labelRotationR = this.autoRotateAngle), n = this.minCalc, s && (n = this.maxCalc - ++m * x), this.gridCountReal = m, o = this.startCount = f; o < m; o += g)
                                            if (f = t.roundTo(f = x * o + n, this.maxDecCount + 1), (!this.integersOnly || Math.round(f) == f) && (isNaN(v) || Number(t.toFixed(f, v)) == f)) {
                                                if (!0 === s)
                                                    if (h > this.logGridLimit) {
                                                        if ((f = Math.pow(10, o)) > this.max) continue
                                                    } else if (0 >= f && 0 >= (f = n + x * o + x / 2)) continue;
                                                var w;
                                                if (b = this.formatValue(f, !1, o), Math.round(o / d) != o / d && (b = void 0), (0 === o && !c || o == m - 1 && !p) && (b = " "), a = this.getCoordinate(f), this.rotate && this.autoWrap && (w = this.stepWidth * x - 10), b = new this.axisItemRenderer(this, a, b, void 0, w, void 0, void 0, this.boldLabels), this.pushAxisItem(b), f == this.baseValue && "radar" != e.type) {
                                                    var k, S, M = this.width,
                                                        A = this.height;
                                                    "H" == this.orientation ? 0 <= a && a <= M + 1 && (k = [a, a, a + r], S = [A, 0, u]) : 0 <= a && a <= A + 1 && (k = [0, M, M + r], S = [a, a, a + u]), k && (a = t.fitToBounds(2 * this.gridAlpha, 0, 1), isNaN(this.zeroGridAlpha) || (a = this.zeroGridAlpha), (a = t.line(e.container, k, S, this.gridColor, a, 1, this.dashLength)).translate(this.x, this.y), this.grid0 = a, e.axesSet.push(a), a.toBack(), t.setCN(e, a, this.bcn + "zero-grid-" + this.id), t.setCN(e, a, this.bcn + "zero-grid"))
                                                }
                                                if (!isNaN(y) && 0 < C && o < m - 1) {
                                                    for (a = x / y, s && (y = t.roundTo(y = x * (o + g) + this.minCalc, this.maxDecCount + 1), h > this.logGridLimit && (y = Math.pow(10, o + g)), y = (y - f) / (a = 9)), M = this.gridAlpha, this.gridAlpha = this.minorGridAlpha, A = 1; A < a; A++) {
                                                        var P = this.getCoordinate(f + y * A);
                                                        P = new this.axisItemRenderer(this, P, "", !1, 0, 0, !1, !1, 0, !0), this.pushAxisItem(P)
                                                    }
                                                    this.gridAlpha = M
                                                }
                                            } if (0 < (w = (h = this.guides).length)) {
                                    for (k = this.fillAlpha, o = this.fillAlpha = 0; o < w; o++) r = NaN, y = (S = h[o]).above, isNaN(S.toValue) || (r = this.getCoordinate(S.toValue), b = new this.axisItemRenderer(this, r, "", !0, NaN, NaN, S), this.pushAxisItem(b, y)), u = NaN, isNaN(S.value) || (u = this.getCoordinate(S.value), b = new this.axisItemRenderer(this, u, S.label, !0, NaN, (r - u) / 2, S), this.pushAxisItem(b, y)), isNaN(r) && (r = 3 + (u -= 3)), b && (d = b.label) && this.addEventListeners(d, S), isNaN(r - u) || 0 > u && 0 > r || (r = new this.guideFillRenderer(this, u, r, S), this.pushAxisItem(r, y), y = r.graphics(), S.graphics = y, this.addEventListeners(y, S));
                                    this.fillAlpha = k
                                }
                                b = this.baseValue, this.min > this.baseValue && this.max > this.baseValue && (b = this.min), this.min < this.baseValue && this.max < this.baseValue && (b = this.max), s && b < this.minReal && (b = this.minReal), this.baseCoord = this.getCoordinate(b, !0), (b = {
                                    type: "axisChanged",
                                    target: this,
                                    chart: e
                                }).min = s ? this.minReal : this.min, b.max = this.max, this.fire(b), this.axisCreated = !0
                            }
                            s = this.axisLine.set, b = this.labelsSet, i.translate(this.x, this.y), b.translate(this.x, this.y), this.positionTitle(), "radar" != e.type && s.toFront(), !this.visible || l ? (i.hide(), s.hide(), b.hide()) : (i.show(), s.show(), b.show()), this.axisY = this.y, this.axisX = this.x
                        },
                        getDateMinMax: function() {
                            this.minimumDate && (this.minimumDate instanceof Date || (this.minimumDate = t.getDate(this.minimumDate, this.chart.dataDateFormat, "fff")), this.min = this.minimumDate.getTime()), this.maximumDate && (this.maximumDate instanceof Date || (this.maximumDate = t.getDate(this.maximumDate, this.chart.dataDateFormat, "fff")), this.max = this.maximumDate.getTime())
                        },
                        formatValue: function(e, i, n) {
                            var l = this.exponential,
                                s = this.logarithmic,
                                a = this.numberFormatter,
                                o = this.chart;
                            if (a) return !0 === this.logarithmic && (l = -1 != String(e).indexOf("e")), this.useScientificNotation && (l = !0), this.usePrefixes && (l = !1), l ? (l = (n = -1 == String(e).indexOf("e") ? e.toExponential(15) : String(e)).split("e"), n = Number(l[0]), l = Number(l[1]), n = t.roundTo(n, 14), i || isNaN(this.precision) || (n = t.roundTo(n, this.precision)), 10 == n && (n = 1, l += 1), n = n + "e" + l, 0 === e && (n = "0"), 1 == e && (n = "1")) : (s && ((l = String(e).split("."))[1] ? (a.precision = l[1].length, 0 > n && (a.precision = Math.abs(n)), i && 1 < e && (a.precision = 0), i || isNaN(this.precision) || (a.precision = this.precision)) : a.precision = -1), n = this.usePrefixes ? t.addPrefix(e, o.prefixesOfBigNumbers, o.prefixesOfSmallNumbers, a, !i) : t.formatNumber(e, a, a.precision)), this.duration && (i && (a.precision = 0), n = t.formatDuration(e, this.duration, "", this.durationUnits, this.maxInterval, a)), "date" == this.type && (n = t.formatDate(new Date(e), this.currentDateFormat, o)), this.recalculateToPercents ? n += "%" : (i = this.unit) && (n = "left" == this.unitPosition ? i + n : n + i), this.labelFunction && (n = "date" == this.type ? this.labelFunction(n, new Date(e), this).toString() : this.labelFunction(e, n, this).toString()), n
                        },
                        getMinorGridStep: function(t, e) {
                            var i = [5, 4, 2];
                            60 > e && i.shift();
                            for (var n = Math.floor(Math.log(Math.abs(t)) * Math.LOG10E), l = 0; l < i.length; l++) {
                                var s = t / i[l],
                                    a = Math.floor(Math.log(Math.abs(s)) * Math.LOG10E);
                                if (!(1 < Math.abs(n - a)))
                                    if (1 > t) {
                                        if ((a = Math.pow(10, -a) * s) == Math.round(a)) return s
                                    } else if (s == Math.round(s)) return s
                            }
                            return 1
                        },
                        stackGraphs: function(e) {
                            var i = this.stackType;
                            "stacked" == i && (i = "regular"), "line" == i && (i = "none"), "100% stacked" == i && (i = "100%"), this.stackType = i;
                            var n, l, s, a, o, r, u = [],
                                h = [],
                                d = [],
                                c = [],
                                p = this.chart.graphs,
                                g = this.baseValue,
                                f = !1;
                            if ("line" != e && "step" != e && "smoothedLine" != e || (f = !0), f && ("regular" == i || "100%" == i))
                                for (o = 0; o < p.length; o++)(a = p[o]).stackGraph = null, a.hidden || (s = a.type, a.chart == this.chart && a.valueAxis == this && e == s && a.stackable && (l && (a.stackGraph = l), l = a));
                            for (l = this.end + 10, a = t.fitToBounds(a = this.start - 10, 0, o = this.data.length - 1), l = t.fitToBounds(l, 0, o), r = a; r <= l; r++) {
                                var m = 0;
                                for (o = 0; o < p.length; o++)
                                    if ((a = p[o]).hidden) a.newStack && (d[r] = NaN, h[r] = NaN);
                                    else if (s = a.type, a.chart == this.chart && a.valueAxis == this && e == s && a.stackable)
                                    if (n = (s = this.data[r].axes[this.id].graphs[a.id]).values.value, isNaN(n)) a.newStack && (d[r] = NaN, h[r] = NaN);
                                    else {
                                        var v = t.getDecimals(n);
                                        m < v && (m = v), isNaN(c[r]) ? c[r] = Math.abs(n) : c[r] += Math.abs(n), c[r] = t.roundTo(c[r], m), v = a.fillToGraph, f && v && (v = this.data[r].axes[this.id].graphs[v.id]) && (s.values.open = v.values.value), "regular" == i && (f && (isNaN(u[r]) ? (u[r] = n, s.values.close = n, s.values.open = this.baseValue) : (s.values.close = isNaN(n) ? u[r] : n + u[r], s.values.open = u[r], u[r] = s.values.close)), "column" == e && (a.newStack && (d[r] = NaN, h[r] = NaN), s.values.close = n, 0 > n ? (s.values.close = n, isNaN(h[r]) ? s.values.open = g : (s.values.close += h[r], s.values.open = h[r]), h[r] = s.values.close) : (s.values.close = n, isNaN(d[r]) ? s.values.open = g : (s.values.close += d[r], s.values.open = d[r]), d[r] = s.values.close)))
                                    }
                            }
                            for (r = this.start; r <= this.end; r++)
                                for (o = 0; o < p.length; o++)(a = p[o]).hidden ? a.newStack && (d[r] = NaN, h[r] = NaN) : (s = a.type, a.chart == this.chart && a.valueAxis == this && e == s && a.stackable && (n = (s = this.data[r].axes[this.id].graphs[a.id]).values.value, isNaN(n) || (s.values.percents = u = n / c[r] * 100, s.values.total = c[r], a.newStack && (d[r] = NaN, h[r] = NaN), "100%" == i && (isNaN(h[r]) && (h[r] = 0), isNaN(d[r]) && (d[r] = 0), 0 > u ? (s.values.close = t.fitToBounds(u + h[r], -100, 100), s.values.open = h[r], h[r] = s.values.close) : (s.values.close = t.fitToBounds(u + d[r], -100, 100), s.values.open = d[r], d[r] = s.values.close)))))
                        },
                        recalculate: function() {
                            var e, i = this.chart,
                                n = i.graphs;
                            for (e = 0; e < n.length; e++) {
                                var l = n[e];
                                if (l.valueAxis == this) {
                                    var s = "value";
                                    "candlestick" != l.type && "ohlc" != l.type || (s = "open");
                                    var a, o, r, u = this.end + 2;
                                    if (u = t.fitToBounds(this.end + 1, 0, this.data.length - 1), 0 < (p = this.start) && p--, o = this.start, l.compareFromStart && (o = 0), !isNaN(i.startTime) && (r = i.categoryAxis)) {
                                        var h = r.minDuration(),
                                            d = (h = new Date(i.startTime + h / 2), t.resetDateToMin(new Date(i.startTime), r.minPeriod).getTime());
                                        t.resetDateToMin(new Date(h), r.minPeriod).getTime() > d && o++
                                    }
                                    for ((r = i.recalculateFromDate) && (r = t.getDate(r, i.dataDateFormat, "fff"), o = i.getClosestIndex(i.chartData, "time", r.getTime(), !0, 0, i.chartData.length), u = i.chartData.length - 1), r = o; r <= u && (a = (o = this.data[r].axes[this.id].graphs[l.id]).values[s], l.recalculateValue && (a = o.dataContext[l.valueField + l.recalculateValue]), isNaN(a)); r++);
                                    for (this.recBaseValue = a, s = p; s <= u; s++) {
                                        (o = this.data[s].axes[this.id].graphs[l.id]).percents = {};
                                        var c, p = o.values;
                                        for (c in p) o.percents[c] = "percents" != c ? p[c] / a * 100 - 100 : p[c]
                                    }
                                }
                            }
                        },
                        getMinMax: function() {
                            var e, i = !1,
                                n = this.chart,
                                l = n.graphs;
                            for (e = 0; e < l.length; e++) {
                                var s = l[e].type;
                                ("line" == s || "step" == s || "smoothedLine" == s) && this.expandMinMax && (i = !0)
                            }
                            if (i && (0 < this.start && this.start--, this.end < this.data.length - 1 && this.end++), "serial" == n.type && (!0 !== n.categoryAxis.parseDates || i || this.end < this.data.length - 1 && this.end++), this.includeAllValues && (this.start = 0, this.end = this.data.length - 1), i = this.minMaxMultiplier, n = this.getExtremes(this.start, this.end), this.min = n.min, this.max = n.max, this.minRR = this.min, this.maxRR = this.max, this.min -= i = (this.max - this.min) * (i - 1), this.max += i, i = this.guides.length, this.includeGuidesInMinMax && 0 < i)
                                for (n = 0; n < i; n++)(l = this.guides[n]).toValue < this.min && (this.min = l.toValue), l.value < this.min && (this.min = l.value), l.toValue > this.max && (this.max = l.toValue), l.value > this.max && (this.max = l.value);
                            isNaN(this.minimum) || (this.min = this.minimum), isNaN(this.maximum) || (this.max = this.maximum), "date" == this.type && this.getDateMinMax(), this.min > this.max && (i = this.max, this.max = this.min, this.min = i), isNaN(this.minZoom) || (this.min = this.minZoom), isNaN(this.maxZoom) || (this.max = this.maxZoom), this.minCalc = this.min, this.maxCalc = this.max, this.minReal = this.min, this.maxReal = this.max, 0 === this.min && 0 === this.max && (this.max = 9), this.min > this.max && (this.min = this.max - 1), i = this.min, n = this.max, e = 0 == (l = this.max - this.min) ? Math.pow(10, Math.floor(Math.log(Math.abs(this.max)) * Math.LOG10E)) / 10 : Math.pow(10, Math.floor(Math.log(Math.abs(l)) * Math.LOG10E)) / 10, isNaN(this.maximum) && (this.max = Math.ceil(this.max / e) * e + e), isNaN(this.minimum) && (this.min = Math.floor(this.min / e) * e - e), 0 > this.min && 0 <= i && (this.min = 0), 0 < this.max && 0 >= n && (this.max = 0), "100%" == this.stackType && (this.min = 0 > this.min ? -100 : 0, this.max = 0 > this.max ? 0 : 100), l = this.max - this.min, e = Math.pow(10, Math.floor(Math.log(Math.abs(l)) * Math.LOG10E)) / 10, this.step = Math.ceil(l / this.gridCountR / e) * e, l = Math.pow(10, Math.floor(Math.log(Math.abs(this.step)) * Math.LOG10E)), l = t.fixStepE(l), 5 < (e = Math.ceil(this.step / l)) && (e = 10), 5 >= e && 2 < e && (e = 5), this.step = Math.ceil(this.step / (l * e)) * l * e, isNaN(this.setStep) || (this.step = this.setStep), 1 > l ? (this.maxDecCount = Math.abs(Math.log(Math.abs(l)) * Math.LOG10E), this.maxDecCount = Math.round(this.maxDecCount), this.step = t.roundTo(this.step, this.maxDecCount + 1)) : this.maxDecCount = 0, this.min = this.step * Math.floor(this.min / this.step), this.max = this.step * Math.ceil(this.max / this.step), 0 > this.min && 0 <= i && (this.min = 0), 0 < this.max && 0 >= n && (this.max = 0), 1 < this.minReal && 1 < this.max - this.minReal && (this.minReal = Math.floor(this.minReal)), l = Math.pow(10, Math.floor(Math.log(Math.abs(this.minReal)) * Math.LOG10E)), 0 === this.min && (this.minReal = l), 0 === this.min && 1 < this.minReal && (this.minReal = 1), 0 < this.min && 0 < this.minReal - this.step && (this.minReal = this.min + this.step < this.minReal ? this.min + this.step : this.min), this.logarithmic && (2 < Math.log(n) * Math.LOG10E - Math.log(i) * Math.LOG10E ? (this.minReal = this.min = Math.pow(10, Math.floor(Math.log(Math.abs(i)) * Math.LOG10E)), this.maxReal = this.max = Math.pow(10, Math.ceil(Math.log(Math.abs(n)) * Math.LOG10E))) : (i = Math.pow(10, Math.floor(Math.log(Math.abs(i)) * Math.LOG10E)) / 10, Math.pow(10, Math.floor(Math.log(Math.abs(this.min)) * Math.LOG10E)) / 10 < i && (this.minReal = this.min = 10 * i)))
                        },
                        getExtremes: function(t, e) {
                            var i, n, l;
                            for (l = t; l <= e; l++) {
                                var s, a = this.data[l].axes[this.id].graphs;
                                for (s in a)
                                    if (a.hasOwnProperty(s)) {
                                        var o, r = this.chart.graphsById[s];
                                        if (r.includeInMinMax && (!r.hidden || this.includeHidden))
                                            if (isNaN(i) && (i = 1 / 0), isNaN(n) && (n = -1 / 0), this.foundGraphs = !0, r = a[s].values, this.recalculateToPercents && (r = a[s].percents), this.minMaxField)(o = r[this.minMaxField]) < i && (i = o), o > n && (n = o);
                                            else
                                                for (var u in r) r.hasOwnProperty(u) && "percents" != u && "total" != u && "error" != u && ((o = r[u]) < i && (i = o), o > n && (n = o))
                                    }
                            }
                            return {
                                min: i,
                                max: n
                            }
                        },
                        zoomOut: function(t) {
                            this.maxZoom = this.minZoom = NaN, this.zoomToRelativeValues(0, 1, t)
                        },
                        zoomToRelativeValues: function(t, e, i) {
                            if (this.reversed) {
                                var n = t;
                                t = 1 - e, e = 1 - n
                            }
                            var l = this.fullMax,
                                s = (n = this.fullMin) + (l - n) * t,
                                a = n + (l - n) * e;
                            return 0 <= this.minimum && 0 > s && (s = 0), this.logarithmic && (isNaN(this.minimum) || (n = this.minimum), isNaN(this.maximum) || (l = this.maximum), l = Math.log(l) * Math.LOG10E - Math.log(n) * Math.LOG10E, s = Math.pow(10, l * t + Math.log(n) * Math.LOG10E), a = Math.pow(10, l * e + Math.log(n) * Math.LOG10E)), this.zoomToValues(s, a, i)
                        },
                        zoomToValues: function(e, i, n) {
                            if (i < e) {
                                var l = i;
                                i = e, e = l
                            }
                            if (this.relativeStart = t.roundTo((e - (l = this.fullMin)) / ((s = this.fullMax) - l), 9), this.relativeEnd = t.roundTo((i - l) / (s - l), 9), this.logarithmic) {
                                isNaN(this.minimum) || (l = this.minimum), isNaN(this.maximum) || (s = this.maximum);
                                var s = Math.log(s) * Math.LOG10E - Math.log(l) * Math.LOG10E,
                                    a = Math.log(i) / Math.LN10 - Math.log(l) * Math.LOG10E;
                                this.relativeStart = t.roundTo((Math.log(e) / Math.LN10 - Math.log(l) * Math.LOG10E) / s, 9), this.relativeEnd = t.roundTo(a / s, 9)
                            }
                            if (this.minZoom != e || this.maxZoom != i) return this.minZoom = e, this.maxZoom = i, (l = {
                                type: "axisZoomed"
                            }).chart = this.chart, l.valueAxis = this, l.startValue = e, l.endValue = i, l.relativeStart = this.relativeStart, l.relativeEnd = this.relativeEnd, this.prevStartValue == e && this.prevEndValue == i || this.fire(l), this.prevStartValue = e, this.prevEndValue = i, n || (t.copyProperties(l, e = {}), e.type = "axisIntZoomed", this.fire(e)), 0 === this.relativeStart && 1 == this.relativeEnd && (this.maxZoom = this.minZoom = NaN), !0
                        },
                        coordinateToValue: function(t) {
                            if (isNaN(t)) return NaN;
                            var e = this.axisWidth,
                                i = this.stepWidth,
                                n = this.reversed,
                                l = this.rotate,
                                s = this.min;
                            return !0 === this.logarithmic ? Math.pow(10, (l ? !0 === n ? (e - t) / i : t / i : !0 === n ? t / i : (e - t) / i) + Math.log(this.minReal) * Math.LOG10E) : !0 === n ? l ? s - (t - e) / i : t / i + s : l ? t / i + s : s - (t - e) / i
                        },
                        getCoordinate: function(t, e) {
                            if (isNaN(t)) return NaN;
                            var i = this.rotate,
                                n = this.reversed,
                                l = this.axisWidth,
                                s = this.stepWidth,
                                a = this.min,
                                o = this.minReal;
                            return !0 === this.logarithmic ? (0 === t && (t = this.treatZeroAs), a = Math.log(t) * Math.LOG10E - Math.log(o) * Math.LOG10E, i = i ? !0 === n ? l - s * a : s * a : !0 === n ? s * a : l - s * a) : i = !0 === n ? i ? l - s * (t - a) : s * (t - a) : i ? s * (t - a) : l - s * (t - a), 1e7 < Math.abs(i) && (i = i / Math.abs(i) * 1e7), e || (i = Math.round(i)), i
                        },
                        synchronizeWithAxis: function(t) {
                            this.synchronizeWith = t, this.listenTo(this.synchronizeWith, "axisChanged", this.handleSynchronization)
                        },
                        handleSynchronization: function() {
                            if (this.synchronizeWith) {
                                t.isString(this.synchronizeWith) && (this.synchronizeWith = this.chart.getValueAxisById(this.synchronizeWith));
                                var e = (n = this.synchronizeWith).min,
                                    i = n.max,
                                    n = n.step,
                                    l = this.synchronizationMultiplier;
                                l && (this.min = e * l, this.max = i * l, this.step = n * l, e = Math.abs(Math.log(Math.abs(Math.pow(10, Math.floor(Math.log(Math.abs(this.step)) * Math.LOG10E)))) * Math.LOG10E), this.maxDecCount = e = Math.round(e), this.draw())
                            }
                        }
                    })
                }(),
                function() {
                    var t = window.AmCharts;
                    t.RecAxis = t.Class({
                        construct: function(e) {
                            var i = e.chart,
                                n = e.axisThickness,
                                l = e.axisColor,
                                s = e.axisAlpha,
                                a = e.offset,
                                o = e.dx,
                                r = e.dy,
                                u = e.x,
                                h = e.y,
                                d = e.height,
                                c = e.width,
                                p = i.container;
                            "H" == e.orientation ? (l = t.line(p, [0, c], [0, 0], l, s, n), this.axisWidth = e.width, "bottom" == e.position ? (r = n / 2 + a + d + h - 1, n = u) : (r = -n / 2 - a + h + r, n = o + u)) : (this.axisWidth = e.height, "right" == e.position ? (l = t.line(p, [0, 0, -o], [0, d, d - r], l, s, n), r = h + r, n = n / 2 + a + o + c + u - 1) : (l = t.line(p, [0, 0], [0, d], l, s, n), r = h, n = -n / 2 - a + u)), l.translate(n, r), (n = i.container.set()).push(l), i.axesSet.push(n), t.setCN(i, l, e.bcn + "line"), this.axisSet = n, this.set = l
                        }
                    })
                }(),
                function() {
                    var t = window.AmCharts;
                    t.RecItem = t.Class({
                        construct: function(e, i, n, l, s, a, o, r, u, h, d, c) {
                            i = Math.round(i);
                            var p = e.chart;
                            this.value = n, null == n && (n = ""), u || (u = 0), null == l && (l = !0);
                            var g = p.fontFamily,
                                f = e.fontSize;
                            null == f && (f = p.fontSize);
                            var m = e.color;
                            null == m && (m = p.color), void 0 !== d && (m = d);
                            var v = e.chart.container,
                                b = v.set();
                            this.set = b;
                            var y = e.axisThickness,
                                x = e.axisColor,
                                C = e.axisAlpha,
                                w = e.tickLength,
                                k = e.gridAlpha,
                                S = e.gridThickness,
                                M = e.gridColor,
                                A = e.dashLength,
                                P = e.fillColor,
                                N = e.fillAlpha,
                                T = e.labelsEnabled;
                            d = e.labelRotationR;
                            var I, O, R = e.counter,
                                D = e.inside,
                                L = e.labelOffset,
                                B = e.dx,
                                E = e.dy,
                                V = e.orientation,
                                F = e.position,
                                _ = e.previousCoord,
                                z = e.height,
                                H = e.width,
                                G = e.offset;
                            o ? (void 0 !== o.id && (c = p.classNamePrefix + "-guide-" + o.id), T = !0, isNaN(o.tickLength) || (w = o.tickLength), null != o.lineColor && (M = o.lineColor), null != o.color && (m = o.color), isNaN(o.lineAlpha) || (k = o.lineAlpha), isNaN(o.dashLength) || (A = o.dashLength), isNaN(o.lineThickness) || (S = o.lineThickness), !0 === o.inside && (D = !0, 0 < G && (G = 0)), isNaN(o.labelRotation) || (d = o.labelRotation), isNaN(o.fontSize) || (f = o.fontSize), o.position && (F = o.position), void 0 !== o.boldLabel && (r = o.boldLabel), isNaN(o.labelOffset) || (L = o.labelOffset)) : "" === n && (w = 0), h && !isNaN(e.minorTickLength) && (w = e.minorTickLength);
                            var W = "start";
                            0 < s && (W = "middle"), e.centerLabels && (W = "middle");
                            var Y, j, X, U = d * Math.PI / 180,
                                K = 0,
                                q = 0,
                                Z = 0,
                                Q = Y = 0,
                                J = 0;
                            "V" == V && (d = 0), T && "" !== n && (Q = (W = (X = e.autoWrap && 0 === d ? t.wrappedText(v, n, m, g, f, W, r, Math.abs(s), 0) : t.text(v, n, m, g, f, W, r)).getBBox()).width, J = W.height), "H" == V ? (0 <= i && i <= H + 1 && (0 < w && 0 < C && i + u <= H + 1 && (I = t.line(v, [i + u, i + u], [0, w], x, C, S), b.push(I)), 0 < k && (O = t.line(v, [i, i + B, i + B], [z, z + E, E], M, k, S, A), b.push(O))), q = 0, K = i, o && 90 == d && D && (K -= f), !1 === l ? (W = "start", q = "bottom" == F ? D ? q + w : q - w : D ? q - w : q + w, K += 3, 0 < s && (K += s / 2 - 3, W = "middle"), 0 < d && (W = "middle")) : W = "middle", 1 == R && 0 < N && !o && !h && _ < H && 0 < (Y = (l = t.fitToBounds(i, 0, H)) - (_ = t.fitToBounds(_, 0, H))) && ((j = t.rect(v, Y, e.height, P, N)).translate(l - Y + B, E), b.push(j)), "bottom" == F ? (q += z + f / 2 + G, D ? (0 < d ? (q = z - Q / 2 * Math.sin(U) - w - 3, e.centerRotatedLabels || (K += Q / 2 * Math.cos(U) - 4 + 2)) : 0 > d ? (q = z + Q * Math.sin(U) - w - 3 + 2, K += -Q * Math.cos(U) - J * Math.sin(U) - 4) : q -= w + f + 3 + 3, q -= L) : (0 < d ? (q = z + Q / 2 * Math.sin(U) + w + 3, e.centerRotatedLabels || (K -= Q / 2 * Math.cos(U))) : 0 > d ? (q = z + w + 3 - Q / 2 * Math.sin(U) + 2, K += Q / 2 * Math.cos(U)) : q += w + y + 3 + 3, q += L)) : (q += E + f / 2 - G, K += B, D ? (0 < d ? (q = Q / 2 * Math.sin(U) + w + 3, e.centerRotatedLabels || (K -= Q / 2 * Math.cos(U))) : q += w + 3, q += L) : (0 < d ? (q = -Q / 2 * Math.sin(U) - w - 6, e.centerRotatedLabels || (K += Q / 2 * Math.cos(U))) : q -= w + f + 3 + y + 3, q -= L)), "bottom" == F ? Y = (D ? z - w - 1 : z + y - 1) + G : (Z = B, Y = (D ? E : E - w - y + 1) - G), a && (K += a), f = K, 0 < d && (f += Q / 2 * Math.cos(U)), X && (a = 0, D && (a = Q / 2 * Math.cos(U)), f + a > H + 2 || 0 > f) && (X.remove(), X = null)) : (0 <= i && i <= z + 1 && (0 < w && 0 < C && i + u <= z + 1 && (I = t.line(v, [0, w + 1], [i + u, i + u], x, C, S), b.push(I)), 0 < k && (O = t.line(v, [0, B, H + B], [i, i + E, i + E], M, k, S, A), b.push(O))), W = "end", (!0 === D && "left" == F || !1 === D && "right" == F) && (W = "start"), q = i - J / 2 + 2, 1 == R && 0 < N && !o && !h && (l = t.fitToBounds(i, 0, z), _ = t.fitToBounds(_, 0, z), (j = t.polygon(v, [0, e.width, e.width, 0], [0, 0, U = l - _, U], P, N)).translate(B, l - U + E), b.push(j)), q += f / 2, "right" == F ? (K += B + H + G, q += E, D ? (a || (q -= f / 2 + 3), K = K - (w + 4) - L) : (K += w + 4 + y, q -= 2, K += L)) : D ? (K += w + 4 - G, a || (q -= f / 2 + 3), o && (K += B, q += E), K += L) : (K += -w - y - 4 - 2 - G, q -= 2, K -= L), I && ("right" == F ? (Z += B + G + H - 1, Y += E, Z = D ? Z - y : Z + y) : (Z -= G, D || (Z -= w + y))), a && (q += a), D = -3, "right" == F && (D += E), X && (q > z + 1 || q < D - f / 10) && (X.remove(), X = null)), I && (I.translate(Z, Y), t.setCN(p, I, e.bcn + "tick"), t.setCN(p, I, c, !0), o && t.setCN(p, I, "guide")), !1 === e.visible && (I && I.remove(), X && (X.remove(), X = null)), X && (X.attr({
                                "text-anchor": W
                            }), X.translate(K, q, NaN, !0), 0 !== d && X.rotate(-d, e.chart.backgroundColor), e.allLabels.push(X), this.label = X, t.setCN(p, X, e.bcn + "label"), t.setCN(p, X, c, !0), o && t.setCN(p, X, "guide")), O && (t.setCN(p, O, e.bcn + "grid"), t.setCN(p, O, c, !0), o && t.setCN(p, O, "guide")), j && (t.setCN(p, j, e.bcn + "fill"), t.setCN(p, j, c, !0)), h ? O && t.setCN(p, O, e.bcn + "grid-minor") : (e.counter = 0 === R ? 1 : 0, e.previousCoord = i), 0 === this.set.node.childNodes.length && this.set.remove()
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
                        construct: function(e, i, n, l) {
                            var s = e.dx,
                                a = e.dy,
                                o = e.orientation,
                                r = 0;
                            if (n < i) {
                                var u = i;
                                i = n, n = u
                            }
                            var h = l.fillAlpha;
                            isNaN(h) && (h = 0), u = e.chart.container;
                            var d = l.fillColor;
                            "V" == o ? (i = t.fitToBounds(i, 0, e.height), n = t.fitToBounds(n, 0, e.height)) : (i = t.fitToBounds(i, 0, e.width), n = t.fitToBounds(n, 0, e.width)), n -= i, isNaN(n) && (n = 4, r = 2, h = 0), 0 > n && "object" == typeof d && (d = d.join(",").split(",").reverse()), "V" == o ? (o = t.rect(u, e.width, n, d, h)).translate(s, i - r + a) : (o = t.rect(u, n, e.height, d, h)).translate(i - r + s, a), t.setCN(e.chart, o, "guide-fill"), l.id && t.setCN(e.chart, o, "guide-fill-" + l.id), this.set = u.set([o])
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
                            var i = document.createElement("div"),
                                n = i.style;
                            n.overflow = "hidden", n.position = "relative", n.textAlign = "left", this.chartDiv = i, (n = (i = document.createElement("div")).style).overflow = "hidden", n.position = "relative", n.textAlign = "left", this.legendDiv = i, this.titleHeight = 0, this.hideBalloonTime = 150, this.handDrawScatter = 2, this.cssScale = this.handDrawThickness = 1, this.cssAngle = 0, this.prefixesOfBigNumbers = [{
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
                        makeAccessible: function(t, e, i) {
                            this.accessible && t && (i && t.setAttr("role", i), t.setAttr("aria-label", e))
                        },
                        drawBackground: function() {
                            t.remove(this.background);
                            var e = this.container,
                                i = this.backgroundColor,
                                n = this.backgroundAlpha,
                                l = this.set;
                            t.isModern || 0 !== n || (n = .001);
                            var s = this.updateWidth();
                            this.realWidth = s;
                            var a = this.updateHeight();
                            this.realHeight = a, i = t.polygon(e, [0, s - 1, s - 1, 0], [0, 0, a - 1, a - 1], i, n, 1, this.borderColor, this.borderAlpha), t.setCN(this, i, "bg"), this.background = i, l.push(i), (i = this.backgroundImage) && (e = e.image(i, 0, 0, s, a), t.setCN(this, i, "bg-image"), this.bgImg = e, l.push(e))
                        },
                        drawTitles: function(e) {
                            var i = this.titles;
                            if (this.titleHeight = 0, t.ifArray(i)) {
                                var n, l = 20;
                                for (n = 0; n < i.length; n++) {
                                    var s;
                                    if (!1 !== (s = t.processObject(s = i[n], t.Title, this.theme)).enabled) {
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
                                for (var i = 0; i < e.listeners.length; i++) {
                                    var n = e.listeners[i];
                                    e.addListener(n.event, n.method)
                                }
                            e.fire({
                                type: "buildStarted",
                                chart: e
                            }), e.afterWriteTO && clearTimeout(e.afterWriteTO), 0 < e.processTimeout ? e.afterWriteTO = setTimeout(function() {
                                e.afterWrite.call(e, t)
                            }, e.processTimeout) : e.afterWrite(t)
                        },
                        afterWrite: function(e) {
                            var i;
                            if (i = "object" != typeof e ? document.getElementById(e) : e) {
                                for (; i.firstChild;) i.removeChild(i.firstChild);
                                this.div = i, i.style.overflow = "hidden", i.style.textAlign = "left";
                                var n = this.legendDiv,
                                    l = this.legend,
                                    s = n.style,
                                    a = (e = this.chartDiv).style;
                                this.measure(), this.previousHeight = this.divRealHeight, this.previousWidth = this.divRealWidth;
                                var o, r = document.createElement("div");
                                if ((o = r.style).position = "relative", this.containerDiv = r, r.className = this.classNamePrefix + "-main-div", e.className = this.classNamePrefix + "-chart-div", i.appendChild(r), (i = this.exportConfig) && t.AmExport && !this.AmExport && (this.AmExport = new t.AmExport(this, i)), this.amExport && t.AmExport && (this.AmExport = t.extend(this.amExport, new t.AmExport(this), !0)), this.AmExport && this.AmExport.init && this.AmExport.init(), l) {
                                    if ((l = this.addLegend(l, l.divId)).enabled) switch (s.left = null, s.top = null, s.right = null, a.left = null, a.right = null, a.top = null, s.position = "relative", a.position = "relative", o.width = "100%", o.height = "100%", l.position) {
                                        case "bottom":
                                            r.appendChild(e), r.appendChild(n);
                                            break;
                                        case "top":
                                            r.appendChild(n), r.appendChild(e);
                                            break;
                                        case "absolute":
                                            s.position = "absolute", a.position = "absolute", void 0 !== l.left && (s.left = l.left + "px"), void 0 !== l.right && (s.right = l.right + "px"), void 0 !== l.top && (s.top = l.top + "px"), void 0 !== l.bottom && (s.bottom = l.bottom + "px"), l.marginLeft = 0, l.marginRight = 0, r.appendChild(e), r.appendChild(n);
                                            break;
                                        case "right":
                                            s.position = "relative", a.position = "absolute", r.appendChild(e), r.appendChild(n);
                                            break;
                                        case "left":
                                            s.position = "absolute", a.position = "relative", r.appendChild(e), r.appendChild(n);
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
                                } catch (n) {}
                                var e = t.offsetWidth,
                                    i = t.offsetHeight;
                                t.clientHeight && (e = t.clientWidth, i = t.clientHeight), e == this.mw && i == this.mh || (this.mw = e, this.mh = i, this.measure())
                            }
                        },
                        measure: function() {
                            if (s = this.div) {
                                var e = this.chartDiv,
                                    i = s.offsetWidth,
                                    n = s.offsetHeight,
                                    l = this.container;
                                s.clientHeight && (i = s.clientWidth, n = s.clientHeight), n = Math.round(n), i = Math.round(i);
                                var s = Math.round(t.toCoordinate(this.width, i)),
                                    a = Math.round(t.toCoordinate(this.height, n));
                                (i != this.previousWidth || n != this.previousHeight) && 0 < s && 0 < a && (e.style.width = s + "px", e.style.height = a + "px", e.style.padding = 0, l && l.setSize(s, a), this.balloon = t.processObject(this.balloon, t.AmBalloon, this.theme)), this.balloon && this.balloon.setBounds && this.balloon.setBounds(2, 2, s - 2, a), this.updateWidth(), this.balloon.chart = this, this.realWidth = s, this.realHeight = a, this.divRealWidth = i, this.divRealHeight = n
                            }
                        },
                        checkDisplay: function() {
                            if (this.autoDisplay && this.container) {
                                var e = t.rect(this.container, 10, 10),
                                    i = e.getBBox();
                                0 === i.width && 0 === i.height && (this.divRealHeight = this.divRealWidth = this.realHeight = this.realWidth = 0, this.previousWidth = this.previousHeight = NaN), e.remove()
                            }
                        },
                        checkTransform: function(t) {
                            if (this.autoTransform && window.getComputedStyle && t) {
                                if (t.style && (e = window.getComputedStyle(t, null)) && (e = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("-moz-transform") || e.getPropertyValue("-ms-transform") || e.getPropertyValue("-o-transform") || e.getPropertyValue("transform")) && "none" !== e) {
                                    var e = (i = e.split("(")[1].split(")")[0].split(","))[0],
                                        i = i[1];
                                    e = Math.sqrt(e * e + i * i), isNaN(e) || (this.cssScale *= e)
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
                            } catch (i) {}
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
                            var i = this;
                            if (i.container && !1 !== e.enabled) {
                                var n = (e = t.processObject(e, t.Label, i.theme)).y,
                                    l = e.text,
                                    s = e.align,
                                    a = e.size,
                                    o = e.color,
                                    r = e.rotation,
                                    u = e.alpha,
                                    h = e.bold,
                                    d = t.toCoordinate(e.x, i.realWidth);
                                d || (d = 0), (n = t.toCoordinate(n, i.realHeight)) || (n = 0), void 0 === o && (o = i.color), isNaN(a) && (a = i.fontSize), s || (s = "start"), "left" == s && (s = "start"), "right" == s && (s = "end"), "center" == s && (s = "middle", r ? n = i.realHeight - n + n / 2 : d = i.realWidth / 2 - d), void 0 === u && (u = 1), void 0 === r && (r = 0), n += a / 2, (l = t.text(i.container, l, o, i.fontFamily, a, s, h, u)).translate(d, n), void 0 !== e.tabIndex && l.setAttr("tabindex", e.tabIndex), t.setCN(i, l, "label"), e.id && t.setCN(i, l, "label-" + e.id), 0 !== r && l.rotate(r), e.url ? (l.setAttr("cursor", "pointer"), l.click(function() {
                                    t.getURL(e.url, i.urlTarget)
                                })) : l.node.style.pointerEvents = "none", i.labelsSet.push(l), i.labels.push(l)
                            }
                        },
                        addLabel: function(t, e, i, n, l, s, a, o, r, u) {
                            t = {
                                x: t,
                                y: e,
                                text: i,
                                align: n,
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
                                i = this.legend;
                            if (i) {
                                var n = (s = this.legendDiv).offsetWidth;
                                isNaN(i.width) || (n = i.width), i.ieW && (n = i.ieW);
                                var l = s.offsetHeight,
                                    s = s.style,
                                    a = this.chartDiv.style,
                                    o = i.position;
                                "right" != o && "left" != o || void 0 !== i.divId || ((0 > (t -= n) || isNaN(t)) && (t = 0), a.width = t + "px", this.balloon && this.balloon.setBounds && this.balloon.setBounds(2, 2, t - 2, this.realHeight), "left" == o ? (a.left = n + "px", s.left = "0px") : (a.left = "0px", s.left = t + "px"), e > l && (s.top = (e - l) / 2 + "px"))
                            }
                            return t
                        },
                        getTitleHeight: function() {
                            return this.drawTitles(!0), this.titleHeight
                        },
                        addTitle: function(t, e, i, n, l) {
                            return isNaN(e) && (e = this.fontSize + 2), this.titles.push(t = {
                                text: t,
                                size: e,
                                color: i,
                                alpha: n,
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
                                i = (new Date).getTime();
                            if (t)
                                if (t.touches) e.isTouchEvent = !0;
                                else if (!e.isTouchEvent) return !0;
                            if (i - e.touchStartTime > e.touchClickDuration) return !0;
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
                                        var i = setTimeout(function() {
                                            e.invalidateSize()
                                        }, 10);
                                        t.timeOuts.push(i), t.legendInitTO = i
                                    }
                                    t.marginsUpdated = !1, clearTimeout(t.initTO), i = setTimeout(function() {
                                        t.initChart()
                                    }, 10), t.timeOuts.push(i), t.initTO = i
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
                            var i = this.legend;
                            i && i.position != this.prevLegendPosition && (this.previousWidth = this.mw = 0, i.invalidateSize && (i.invalidateSize(), this.validateSize())), this.write(this.div)
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
                        showBalloon: function(t, e, i, n, l) {
                            var s = this;
                            clearTimeout(s.balloonTO), clearTimeout(s.hoverInt), s.balloonTO = setTimeout(function() {
                                s.showBalloonReal.call(s, t, e, i, n, l)
                            }, 1)
                        },
                        showBalloonReal: function(t, e, i, n, l) {
                            this.handleMouseMove();
                            var s = this.balloon;
                            s.enabled && (s.followCursor(!1), s.changeColor(e), !i || s.fixedPosition ? (s.setPosition(n, l), isNaN(n) || isNaN(l) ? s.followCursor(!0) : s.followCursor(!1)) : s.followCursor(!0), t && s.showBalloon(t))
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
                            var e, i, n, l;
                            if (t || (t = window.event), this.mouse2Y = this.mouse2X = NaN, t) {
                                if (t.touches) {
                                    var s = t.touches.item(1);
                                    if (s && this.panEventsEnabled && this.boundingRect && (n = s.clientX - this.boundingRect.left, l = s.clientY - this.boundingRect.top), !(t = t.touches.item(0))) return
                                } else this.wasTouched = !1;
                                this.boundingRect && t.clientX && (e = t.clientX - this.boundingRect.left, i = t.clientY - this.boundingRect.top), isNaN(n) ? this.mouseX = e : (this.mouseX = Math.min(e, n), this.mouse2X = Math.max(e, n)), isNaN(l) ? this.mouseY = i : (this.mouseY = Math.min(i, l), this.mouse2Y = Math.max(i, l)), this.autoTransform && (this.mouseX /= this.cssScale, this.mouseY /= this.cssScale)
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
                        addLegend: function(e, i) {
                            var n;
                            return (e = t.processObject(e, t.AmLegend, this.theme)).divId = i, e.ieW = 0, n = "object" != typeof i && i ? document.getElementById(i) : i, this.legend = e, e.chart = this, n ? (e.div = n, e.position = "outside", e.autoMargins = !1) : e.div = this.legendDiv, e
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
                        animate: function(e, i, n, l, s, a, o) {
                            return e["an_" + i] && t.removeFromArray(this.animations, e["an_" + i]), e["an_" + i] = n = {
                                obj: e,
                                frame: 0,
                                attribute: i,
                                from: n,
                                to: l,
                                time: s,
                                effect: a,
                                suffix: o
                            }, this.animations.push(n), n
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
                                    var i = this.animations[e],
                                        n = i.frame + 1,
                                        l = i.obj,
                                        s = i.attribute;
                                    if (n <= (r = t.updateRate * i.time)) {
                                        i.frame++;
                                        var a = Number(i.from),
                                            o = Number(i.to) - a,
                                            r = t[i.effect](0, n, a, o, r);
                                        0 === o ? (this.animations.splice(e, 1), l.node.style[s] = Number(i.to) + i.suffix) : l.node.style[s] = r + i.suffix
                                    } else l.node.style[s] = Number(i.to) + i.suffix, l.animationFinished = !0, this.animations.splice(e, 1)
                                }
                        },
                        update: function() {
                            this.updateAnimations();
                            var t = this.animatable;
                            if (0 < t.length) {
                                for (var e = !0, i = t.length - 1; 0 <= i; i--) {
                                    var n = t[i];
                                    n && (n.animationFinished ? t.splice(i, 1) : e = !1)
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
                                if (2 <= (i = window.location.hostname.split(".")).length && (t = i[i.length - 2] + "." + i[i.length - 1]), this.amLink && (i = this.amLink.parentNode) && i.removeChild(this.amLink), t != e || !0 === this.inIframe()) {
                                    t = e = "http://www." + e;
                                    var i = "JavaScript charts",
                                        n = "JS chart by amCharts";
                                    "ammap" == this.product && (t = e + "/javascript-maps/", i = "Interactive JavaScript maps", n = "JS map by amCharts"), e = document.createElement("a"), n = document.createTextNode(n), e.setAttribute("href", t), e.setAttribute("title", i), this.urlTarget && e.setAttribute("target", this.urlTarget), e.appendChild(n), this.chartDiv.appendChild(e), this.amLink = e, (e = e.style).position = "absolute", e.textDecoration = "none", e.color = this.color, e.fontFamily = this.fontFamily, e.fontSize = "11px", e.opacity = .7, e.display = "block", this.positionCred()
                                }
                            }
                        },
                        positionCred: function() {
                            if (n = this.amLink) {
                                var t = this.creditsPosition,
                                    e = n.style,
                                    i = n.offsetWidth,
                                    n = n.offsetHeight,
                                    l = 0,
                                    s = 0,
                                    a = this.realWidth,
                                    o = this.realHeight;
                                "serial" != (r = this.type) && "xy" != r && "gantt" != r || (a = (l = this.marginLeftReal) + this.plotAreaWidth, o = (s = this.marginTopReal) + this.plotAreaHeight);
                                var r = 5 + l,
                                    u = s + 5;
                                "bottom-left" == t && (r = 5 + l, u = o - n - 3), "bottom-right" == t && (r = a - i - 5, u = o - n - 3), "top-right" == t && (r = a - i - 5, u = s + 5), e.left = r + "px", e.top = u + "px"
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
                            var i = e.type;
                            if (e.drawGraphs) {
                                isNaN(this.precision) || (this.numberFormatter ? this.numberFormatter.precision = this.precision : this.numberFormatter = {
                                    precision: this.precision,
                                    decimalSeparator: e.decimalSeparator,
                                    thousandsSeparator: e.thousandsSeparator
                                });
                                var n = e.container;
                                this.container = n, this.destroy();
                                var l = n.set();
                                this.set = l, l.translate(this.x, this.y);
                                var s = n.set();
                                this.bulletSet = s, s.translate(this.x, this.y), this.behindColumns ? (e.graphsBehindSet.push(l), e.bulletBehindSet.push(s)) : (e.graphsSet.push(l), e.bulletSet.push(s));
                                var a = this.bulletAxis;
                                t.isString(a) && (this.bulletAxis = e.getValueAxisById(a)), n = n.set(), t.remove(this.columnsSet), this.columnsSet = n, t.setCN(e, l, "graph-" + this.type), t.setCN(e, l, "graph-" + this.id), t.setCN(e, s, "graph-" + this.type), t.setCN(e, s, "graph-" + this.id), this.columnsArray = [], this.ownColumns = [], this.allBullets = [], this.animationArray = [], (s = this.labelPosition) || (a = this.valueAxis.stackType, s = "top", "column" == this.type && (e.rotate && (s = "right"), "100%" == a || "regular" == a) && (s = "middle"), this.labelPosition = s), t.ifArray(this.data) && (e = !1, "xy" == i ? this.xAxis.axisCreated && this.yAxis.axisCreated && (e = !0) : this.valueAxis.axisCreated && (e = !0), !this.hidden && e && this.createGraph()), l.push(n)
                            }
                        },
                        createGraph: function() {
                            var e = this,
                                i = e.chart;
                            e.startAlpha = i.startAlpha, e.seqAn = i.sequencedAnimation, e.baseCoord = e.valueAxis.baseCoord, void 0 === e.fillAlphas && (e.fillAlphas = 0), e.bulletColorR = e.bulletColor, void 0 === e.bulletColorR && (e.bulletColorR = e.lineColorR, e.bulletColorNegative = e.negativeLineColor), void 0 === e.bulletAlpha && (e.bulletAlpha = e.lineAlpha), ("step" == n || t.VML) && (e.noRounding = !1);
                            var n = i.type;
                            if ("gantt" == n && (n = "serial"), clearTimeout(e.playedTO), !isNaN(e.valueAxis.min) && !isNaN(e.valueAxis.max)) {
                                switch (n) {
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
                                i = [],
                                n = this.xAxis,
                                l = this.yAxis;
                            for (this.pmh = l.height, this.pmw = n.width, this.pmy = this.pmx = 0, t = this.start; t <= this.end; t++) {
                                var s = this.data[t].axes[n.id].graphs[this.id],
                                    a = (r = s.values).x,
                                    o = r.y,
                                    r = n.getCoordinate(a, this.noRounding),
                                    u = l.getCoordinate(o, this.noRounding);
                                if (!isNaN(a) && !isNaN(o) && (e.push(r), i.push(u), s.x = r, s.y = u, a = this.createBullet(s, r, u, t), o = this.labelText)) {
                                    o = this.createLabel(s, o);
                                    var h = 0;
                                    a && (h = a.size), this.positionLabel(s, r, u, o, h)
                                }
                            }
                            this.drawLineGraph(e, i), this.launchAnimation()
                        },
                        createRadarGraph: function() {
                            var t, e, i, n, l, s = this.valueAxis.stackType,
                                a = [],
                                o = [],
                                r = [],
                                u = [];
                            for (l = this.start; l <= this.end; l++) {
                                var h, d, c = this.data[l].axes[this.valueAxis.id].graphs[this.id];
                                if ("none" == s || "3d" == s ? h = c.values.value : (h = c.values.close, d = c.values.open), isNaN(h)) this.connect || (this.drawLineGraph(a, o, r, u), a = [], o = [], r = [], u = []);
                                else {
                                    var p = this.valueAxis.getCoordinate(h, this.noRounding) - this.height,
                                        g = -360 / (this.end - this.start + 1) * l;
                                    if ("middle" == this.valueAxis.pointPosition && (g -= 180 / (this.end - this.start + 1)), h = (p *= this.valueAxis.rMultiplier) * Math.sin(g / 180 * Math.PI), p *= Math.cos(g / 180 * Math.PI), a.push(h), o.push(p), !isNaN(d)) {
                                        var f, m = (f = (f = this.valueAxis.getCoordinate(d, this.noRounding) - this.height) * this.valueAxis.rMultiplier) * Math.sin(g / 180 * Math.PI);
                                        g = f * Math.cos(g / 180 * Math.PI), r.push(m), u.push(g), isNaN(i) && (i = m), isNaN(n) && (n = g)
                                    }
                                    g = this.createBullet(c, h, p, l), c.x = h, c.y = p, (m = this.labelText) && (m = this.createLabel(c, m), f = 0, g && (f = g.size), this.positionLabel(c, h, p, m, f)), isNaN(t) && (t = h), isNaN(e) && (e = p)
                                }
                            }
                            a.push(t), o.push(e), isNaN(i) || (r.push(i), u.push(n)), this.drawLineGraph(a, o, r, u), this.launchAnimation()
                        },
                        positionLabel: function(t, e, i, n, l) {
                            if (n) {
                                var s = this.chart,
                                    a = this.valueAxis,
                                    o = "middle",
                                    r = !1,
                                    u = this.labelPosition,
                                    h = n.getBBox(),
                                    d = this.chart.rotate,
                                    c = t.isNegative;
                                switch (void 0 === (p = this.fontSize) && (p = this.chart.fontSize), i -= h.height / 2 - p / 2 - 1, void 0 !== t.labelIsNegative && (c = t.labelIsNegative), u) {
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
                                        i = a.reversed ? i + (l / 2 + h.height / 2 + m) : i - (l / 2 + h.height / 2 + m);
                                        break;
                                    case "bottom":
                                        i = a.reversed ? i - (l / 2 + h.height / 2 + m) : i + (l / 2 + h.height / 2 + m);
                                        break;
                                    case "left":
                                        o = "end", e -= l / 2 + m;
                                        break;
                                    case "inside":
                                        "column" == this.type && (r = !0, d ? c ? (o = "end", e = g - 3 - m) : (o = "start", e = g + 3 + m) : i = c ? f + 7 + m : f - 10 - m);
                                        break;
                                    case "middle":
                                        "column" == this.type && (r = !0, d ? e -= (e - g) / 2 + m - 3 : i -= (i - f) / 2 + m - 3)
                                }
                                return "auto" != this.labelAnchor && (o = this.labelAnchor), n.attr({
                                    "text-anchor": o
                                }), this.labelRotation && n.rotate(this.labelRotation), n.translate(e, i), !this.showAllValueLabels && p && r && ((h = n.getBBox()).height > t.columnHeight || h.width > t.columnWidth) && (n.remove(), n = null), n && "radar" != s.type && (d ? ((0 > i || i > this.height) && (n.remove(), n = null), !this.showAllValueLabels && n && (0 > e || e > this.width) && (n.remove(), n = null)) : ((0 > e || e > this.width) && (n.remove(), n = null), !this.showAllValueLabels && n && (0 > i || i > this.height) && (n.remove(), n = null))), n && this.allBullets.push(n), n
                            }
                        },
                        getGradRotation: function() {
                            var t = 270;
                            return "horizontal" == this.gradientOrientation && (t = 0), this.gradientRotation = t
                        },
                        createSerialGraph: function() {
                            this.dashLengthSwitched = this.fillColorsSwitched = this.lineColorSwitched = void 0;
                            var e = this.chart,
                                i = this.id,
                                n = this.index,
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
                                x = this.columnCount,
                                C = t.toCoordinate(this.cornerRadiusTop, r / 2),
                                w = this.connect,
                                k = [],
                                S = [],
                                M = this.chart.graphs.length,
                                A = this.dx / this.tcc,
                                P = this.dy / this.tcc,
                                N = a.stackType,
                                T = this.start,
                                I = this.end,
                                O = this.scrollbar,
                                R = "graph-column-";
                            O && (R = "scrollbar-graph-column-");
                            var D, L = this.categoryAxis,
                                B = this.baseCoord,
                                E = this.negativeBase,
                                V = this.columnIndex,
                                F = this.lineThickness,
                                _ = this.lineAlpha,
                                z = this.lineColorR,
                                H = this.dashLength,
                                G = this.set,
                                W = this.getGradRotation(),
                                Y = this.chart.columnSpacing,
                                j = L.cellWidth,
                                X = (j * r - x) / x;
                            Y > X && (Y = X);
                            var U, K, q, Z = v,
                                Q = m,
                                J = 0,
                                $ = 0,
                                tt = 0,
                                et = 0,
                                it = 0,
                                nt = 0,
                                lt = this.fillColorsR,
                                st = this.negativeFillColors,
                                at = this.negativeLineColor,
                                ot = this.fillAlphas,
                                rt = this.negativeFillAlphas;
                            "object" == typeof ot && (ot = ot[0]), "object" == typeof rt && (rt = rt[0]);
                            var ut = this.noRounding;
                            "step" == o && (ut = !1);
                            var ht = a.getCoordinate(a.min);
                            if (a.logarithmic && (ht = a.getCoordinate(a.minReal)), this.minCoord = ht, this.resetBullet && (this.bullet = "none"), !(O || "line" != o && "smoothedLine" != o && "step" != o || (1 == l.length && "step" != o && "none" == this.bullet && (this.bullet = "round", this.resetBullet = !0), !st && null == at || f))) {
                                var dt = E;
                                dt > a.max && (dt = a.max), dt < a.min && (dt = a.min), a.logarithmic && (dt = a.minReal);
                                var ct = a.getCoordinate(dt) + .5,
                                    pt = a.getCoordinate(a.max);
                                y ? (Z = v, Q = Math.abs(pt - ct), tt = v, et = Math.abs(ht - ct), nt = $ = 0, a.reversed ? (J = 0, it = ct) : (J = ct, it = 0)) : (Q = m, Z = Math.abs(pt - ct), et = m, tt = Math.abs(ht - ct), it = J = 0, a.reversed ? (nt = b, $ = ct) : nt = ct)
                            }
                            var gt = Math.round;
                            this.pmx = gt(J), this.pmy = gt($), this.pmh = gt(Z), this.pmw = gt(Q), this.nmx = gt(it), this.nmy = gt(nt), this.nmh = gt(tt), this.nmw = gt(et), t.isModern || (this.nmy = this.nmx = 0, this.nmh = this.height), this.clustered || (x = 1), 1 > (r = "column" == o ? (j * r - Y * (x - 1)) / x : j * r) && (r = 1);
                            var ft, mt = this.fixedColumnWidth;
                            if (isNaN(mt) || (r = mt), "line" == o || "step" == o || "smoothedLine" == o) {
                                if (0 < T) {
                                    for (ft = T - 1; - 1 < ft; ft--)
                                        if (q = (K = (U = l[ft]).axes[a.id].graphs[i]).values.value, !isNaN(q)) {
                                            T = ft;
                                            break
                                        } if (this.lineColorField)
                                        for (ft = T; - 1 < ft; ft--)
                                            if ((K = (U = l[ft]).axes[a.id].graphs[i]).lineColor) {
                                                this.lineColorSwitched = K.lineColor, void 0 === this.bulletColor && (this.bulletColorSwitched = this.lineColorSwitched);
                                                break
                                            } if (this.fillColorsField)
                                        for (ft = T; - 1 < ft; ft--)
                                            if ((K = (U = l[ft]).axes[a.id].graphs[i]).fillColors) {
                                                this.fillColorsSwitched = K.fillColors;
                                                break
                                            } if (this.dashLengthField)
                                        for (ft = T; - 1 < ft; ft--)
                                            if (K = (U = l[ft]).axes[a.id].graphs[i], !isNaN(K.dashLength)) {
                                                this.dashLengthSwitched = K.dashLength;
                                                break
                                            }
                                }
                                if (I < l.length - 1)
                                    for (ft = I + 1; ft < l.length; ft++)
                                        if (q = (K = (U = l[ft]).axes[a.id].graphs[i]).values.value, !isNaN(q)) {
                                            I = ft;
                                            break
                                        }
                            }
                            I < l.length - 1 && I++;
                            var vt = [],
                                bt = [],
                                yt = !1;
                            "line" != o && "step" != o && "smoothedLine" != o || (this.stackable && "regular" == N || "100%" == N || this.fillToGraph) && (yt = !0);
                            var xt = this.noStepRisers,
                                Ct = -1e3,
                                wt = -1e3,
                                kt = this.minDistance,
                                St = !0,
                                Mt = !1;
                            for (ft = T; ft <= I; ft++) {
                                (K = (U = l[ft]).axes[a.id].graphs[i]).index = ft;
                                var At, Pt = NaN;
                                if (f && null == this.openField)
                                    for (var Nt = ft + 1; Nt < l.length && (!l[Nt] || !(At = l[ft + 1].axes[a.id].graphs[i]) || !At.values || (Pt = At.values.value, isNaN(Pt))); Nt++);
                                var Tt, It, Ot, Rt, Dt, Lt, Bt = NaN,
                                    Et = NaN,
                                    Vt = NaN,
                                    Ft = NaN,
                                    _t = NaN,
                                    zt = NaN,
                                    Ht = NaN,
                                    Gt = NaN,
                                    Wt = NaN,
                                    Yt = NaN,
                                    jt = NaN,
                                    Xt = NaN,
                                    Ut = NaN,
                                    Kt = NaN,
                                    qt = NaN,
                                    Zt = NaN,
                                    Qt = NaN,
                                    Jt = void 0,
                                    $t = lt,
                                    te = ot,
                                    ee = z,
                                    ie = this.proCandlesticks,
                                    ne = this.topRadius,
                                    le = v - 1,
                                    se = m - 1,
                                    ae = this.pattern;
                                null != K.pattern && (ae = K.pattern), isNaN(K.alpha) || (te = K.alpha), isNaN(K.dashLength) || (H = K.dashLength);
                                var oe = K.values;
                                if (a.recalculateToPercents && (oe = K.percents), "none" == N && (V = isNaN(K.columnIndex) ? this.columnIndex : K.columnIndex), oe) {
                                    if (Kt = this.stackable && "none" != N && "3d" != N ? oe.close : oe.value, "candlestick" != o && "ohlc" != o || (Kt = oe.close, Ht = a.getCoordinate(Zt = oe.low), Wt = a.getCoordinate(qt = oe.high)), Qt = oe.open, Vt = a.getCoordinate(Kt, ut), isNaN(Qt) || (_t = a.getCoordinate(Qt, ut), f && "regular" != N && "100%" != N && (Pt = Qt, Qt = _t = NaN)), f && (null == this.openField ? At && (At.isNegative = Pt < Kt, isNaN(Pt) && (K.isNegative = !St)) : K.isNegative = Pt > Kt), !O) switch (this.showBalloonAt) {
                                        case "close":
                                            K.y = Vt;
                                            break;
                                        case "open":
                                            K.y = _t;
                                            break;
                                        case "high":
                                            K.y = Wt;
                                            break;
                                        case "low":
                                            K.y = Ht
                                    }
                                    Bt = U.x[L.id];
                                    var re = this.periodSpan - 1;
                                    "step" != o || isNaN(U.cellWidth) || (j = U.cellWidth);
                                    var ue = Math.floor(j / 2) + Math.floor(re * j / 2),
                                        he = ue;
                                    if ("left" == this.stepDirection && (Bt -= (2 * j + re * j) / 2), "center" == this.stepDirection && (Bt -= j / 2), "start" == this.pointPosition && (Bt -= j / 2 + Math.floor(re * j / 2), ue = 0, he = Math.floor(j) + Math.floor(re * j)), "end" == this.pointPosition && (Bt += j / 2 + Math.floor(re * j / 2), ue = Math.floor(j) + Math.floor(re * j), he = 0), xt) {
                                        var de = this.columnWidth;
                                        isNaN(de) || (ue *= de, he *= de)
                                    }
                                    O || (K.x = Bt), -1e5 > Bt && (Bt = -1e5), Bt > m + 1e5 && (Bt = m + 1e5), y ? (Et = Vt, Ft = _t, _t = Vt = Bt, isNaN(Qt) && !this.fillToGraph && (Ft = B), zt = Ht, Gt = Wt) : (Ft = Et = Bt, isNaN(Qt) && !this.fillToGraph && (_t = B)), (!ie && Kt < Qt || ie && Kt < D) && (K.isNegative = !0, st && ($t = st), rt && (te = rt), null != at && (ee = at)), Mt = !1, isNaN(Kt) || (f ? Kt > Pt ? (St && (Mt = !0), St = !1) : (St || (Mt = !0), St = !0) : K.isNegative = Kt < E, D = Kt);
                                    var ce = !1;
                                    switch (O && e.chartScrollbar.ignoreCustomColors && (ce = !0), ce || (null != K.color && ($t = K.color), K.fillColors && ($t = K.fillColors)), Vt = t.fitToBounds(Vt, -3e4, 3e4), o) {
                                        case "line":
                                            isNaN(Kt) ? w || (this.drawLineGraph(k, S, vt, bt), k = [], S = [], vt = [], bt = []) : ((Math.abs(Et - Ct) >= kt || Math.abs(Vt - wt) >= kt) && (k.push(Et), S.push(Vt), Ct = Et, wt = Vt), Yt = Et, jt = Vt, Xt = Et, Ut = Vt, !yt || isNaN(_t) || isNaN(Ft) || (vt.push(Ft), bt.push(_t)), (Mt || null != K.lineColor && K.lineColor != this.lineColorSwitched || null != K.fillColors && K.fillColors != this.fillColorsSwitched || !isNaN(K.dashLength)) && (this.drawLineGraph(k, S, vt, bt), k = [Et], S = [Vt], vt = [], bt = [], !yt || isNaN(_t) || isNaN(Ft) || (vt.push(Ft), bt.push(_t)), f ? (St ? (this.lineColorSwitched = z, this.fillColorsSwitched = lt) : (this.lineColorSwitched = at, this.fillColorsSwitched = st), void 0 === this.bulletColor && (this.bulletColorSwitched = z)) : (this.lineColorSwitched = K.lineColor, this.fillColorsSwitched = K.fillColors, void 0 === this.bulletColor && (this.bulletColorSwitched = this.lineColorSwitched)), this.dashLengthSwitched = K.dashLength), K.gap && (this.drawLineGraph(k, S, vt, bt), k = [], S = [], vt = [], bt = [], wt = Ct = -1e3));
                                            break;
                                        case "smoothedLine":
                                            isNaN(Kt) ? w || (this.drawSmoothedGraph(k, S, vt, bt), k = [], S = [], vt = [], bt = []) : ((Math.abs(Et - Ct) >= kt || Math.abs(Vt - wt) >= kt) && (k.push(Et), S.push(Vt), Ct = Et, wt = Vt), Yt = Et, jt = Vt, Xt = Et, Ut = Vt, !yt || isNaN(_t) || isNaN(Ft) || (vt.push(Ft), bt.push(_t)), (Mt || null != K.lineColor && K.lineColor != this.lineColorSwitched || null != K.fillColors && K.fillColors != this.fillColorsSwitched || !isNaN(K.dashLength)) && (this.drawSmoothedGraph(k, S, vt, bt), k = [Et], S = [Vt], vt = [], bt = [], !yt || isNaN(_t) || isNaN(Ft) || (vt.push(Ft), bt.push(_t)), this.lineColorSwitched = K.lineColor, this.fillColorsSwitched = K.fillColors, this.dashLengthSwitched = K.dashLength), K.gap && (this.drawSmoothedGraph(k, S, vt, bt), k = [], S = [], vt = [], bt = []));
                                            break;
                                        case "step":
                                            if (isNaN(Kt)) w || ((1 >= this.periodSpan || 1 < this.periodSpan && Et - h > ue + he) && (h = d = NaN), this.drawLineGraph(k, S, vt, bt), k = [], S = [], vt = [], bt = []);
                                            else {
                                                if (y ? (isNaN(h) || (k.push(h), S.push(Vt - ue)), S.push(Vt - ue), k.push(Et), S.push(Vt + he), k.push(Et), !yt || isNaN(_t) || isNaN(Ft) || (isNaN(c) || (vt.push(c), bt.push(_t - ue)), vt.push(Ft), bt.push(_t - ue), vt.push(Ft), bt.push(_t + he))) : (isNaN(d) || (S.push(d), k.push(Et - ue)), k.push(Et - ue), S.push(Vt), k.push(Et + he), S.push(Vt), !yt || isNaN(_t) || isNaN(Ft) || (isNaN(p) || (vt.push(Ft - ue), bt.push(p)), vt.push(Ft - ue), bt.push(_t), vt.push(Ft + he), bt.push(_t))), h = Et, d = Vt, c = Ft, p = _t, Yt = Et, jt = Vt, Xt = Et, Ut = Vt, Mt || null != K.lineColor || null != K.fillColors || !isNaN(K.dashLength)) {
                                                    var pe = k[k.length - 2],
                                                        ge = S[S.length - 2];
                                                    k.pop(), S.pop(), vt.pop(), bt.pop(), this.drawLineGraph(k, S, vt, bt), k = [pe], S = [ge], vt = [], bt = [], yt && (vt = [pe, pe + ue + he], bt = [p, p]), y ? (S.push(Vt + he), k.push(Et)) : (k.push(Et + he), S.push(Vt)), this.lineColorSwitched = K.lineColor, this.fillColorsSwitched = K.fillColors, this.dashLengthSwitched = K.dashLength, f && (St ? (this.lineColorSwitched = z, this.fillColorsSwitched = lt) : (this.lineColorSwitched = at, this.fillColorsSwitched = st))
                                                }(xt || K.gap) && (h = d = NaN, this.drawLineGraph(k, S, vt, bt), k = [], S = [], vt = [], bt = [])
                                            }
                                            break;
                                        case "column":
                                            if (Dt = ee, null != K.lineColor && (Dt = K.lineColor), !isNaN(Kt)) {
                                                f || (K.isNegative = Kt < E), K.isNegative && (st && ($t = st), null != at && (Dt = at));
                                                var fe, me = a.min,
                                                    ve = a.max,
                                                    be = Qt;
                                                if (isNaN(be) && (be = E), !(Kt < me && be < me || Kt > ve && be > ve))
                                                    if (y) {
                                                        "3d" == N ? (It = Vt - (x / 2 - this.depthCount + 1) * (r + Y) + Y / 2 + P * V, Tt = Ft + A * V, fe = V) : (It = Math.floor(Vt - (x / 2 - V) * (r + Y) + Y / 2), Tt = Ft, fe = 0), Yt = Et, jt = It + r / 2, Xt = Et, Ut = It + r / 2, It + (Ot = r) > v + fe * P && (Ot = v - It + fe * P), It < fe * P && (Ot += It, It = fe * P), Rt = Et - Ft;
                                                        var ye = Tt;
                                                        Tt = t.fitToBounds(Tt, 0, m), Rt = t.fitToBounds(Rt += ye - Tt, -Tt, m - Tt + A * V), K.labelIsNegative = 0 > Rt, 0 === Rt && 1 / Kt == -1 / 0 && (K.labelIsNegative = !0), isNaN(U.percentWidthValue) || (jt = (It = Bt - (Ot = this.height * U.percentWidthValue / 100) / 2) + Ot / 2), Ot = t.roundTo(Ot, 2), Rt = t.roundTo(Rt, 2), It < v && 0 < Ot && (Jt = new t.Cuboid(s, Rt, Ot, A - e.d3x, P - e.d3y, $t, te, F, Dt, _, W, C, y, H, ae, ne, R), K.columnWidth = Math.abs(Rt), K.columnHeight = Math.abs(Ot))
                                                    } else {
                                                        "3d" == N ? (Tt = Et - (x / 2 - this.depthCount + 1) * (r + Y) + Y / 2 + A * V, It = _t + P * V, fe = V) : (Tt = Et - (x / 2 - V) * (r + Y) + Y / 2, It = _t, fe = 0), Yt = Tt + r / 2, jt = Vt, Xt = Tt + r / 2, Ut = Vt, Tt + (Ot = r) > m + fe * A && (Ot = m - Tt + fe * A), Tt < fe * A && (Ot += Tt - fe * A, Tt = fe * A), K.labelIsNegative = 0 < (Rt = Vt - _t), 0 === Rt && 1 / Kt != 1 / Math.abs(Kt) && (K.labelIsNegative = !0);
                                                        var xe = It;
                                                        It = t.fitToBounds(It, this.dy, v), Rt = t.fitToBounds(Rt += xe - It, P * fe - It, v - It), isNaN(U.percentWidthValue) || (Yt = (Tt = Bt - (Ot = this.width * U.percentWidthValue / 100) / 2) + Ot / 2), Ot = t.roundTo(Ot, 2), Rt = t.roundTo(Rt, 2), Tt < m + V * A && 0 < Ot && (this.showOnAxis && (It -= P / 2), Jt = new t.Cuboid(s, Ot, Rt, A - e.d3x, P - e.d3y, $t, te, F, Dt, this.lineAlpha, W, C, y, H, ae, ne, R), K.columnHeight = Math.abs(Rt), K.columnWidth = Math.abs(Ot))
                                                    } Jt && (Lt = Jt.set, t.setCN(e, Jt.set, "graph-" + this.type), t.setCN(e, Jt.set, "graph-" + this.id), K.className && t.setCN(e, Jt.set, K.className, !0), K.columnGraphics = Lt, Tt = t.roundTo(Tt, 2), It = t.roundTo(It, 2), Lt.translate(Tt, It), (K.url || this.showHandOnHover) && Lt.setAttr("cursor", "pointer"), O || ("none" == N && (g = y ? (this.end + 1 - ft) * M - n : M * ft + n), "3d" == N && (y ? (g = (this.end + 1 - ft) * M - n - 1e3 * this.depthCount, Yt += A * V, Xt += A * V, K.y += A * V) : (g = (M - n) * (ft + 1) + 1e3 * this.depthCount, jt += P * V, Ut += P * V, K.y += P * V)), "regular" != N && "100%" != N || (g = y ? 0 < oe.value ? (this.end + 1 - ft) * M + n + 1e3 * this.depthCount : (this.end + 1 - ft) * M - n + 1e3 * this.depthCount : 0 < oe.value ? M * ft + n : M * ft - n), this.columnsArray.push({
                                                    column: Jt,
                                                    depth: g
                                                }), K.x = y ? It + Ot / 2 : Tt + Ot / 2, this.ownColumns.push(Jt), this.animateColumns(Jt, ft, Et, Ft, Vt, _t), this.addListeners(Lt, K), void 0 !== this.tabIndex && Lt.setAttr("tabindex", this.tabIndex)), this.columnsSet.push(Lt))
                                            }
                                            break;
                                        case "candlestick":
                                            if (!isNaN(Qt) && !isNaN(Kt)) {
                                                var Ce, we;
                                                if (Dt = ee, null != K.lineColor && (Dt = K.lineColor), Yt = Et, Ut = jt = Vt, Xt = Et, y) {
                                                    if ("open" == u && (Xt = Ft), "high" == u && (Xt = Gt), "low" == u && (Xt = zt), Et = t.fitToBounds(Et, 0, se), Ft = t.fitToBounds(Ft, 0, se), zt = t.fitToBounds(zt, 0, se), Gt = t.fitToBounds(Gt, 0, se), 0 === Et && 0 === Ft && 0 === zt && 0 === Gt) continue;
                                                    if (Et == se && Ft == se && zt == se && Gt == se) continue;
                                                    var ke, Se;
                                                    Tt = Ft, (It = Vt - r / 2) + (Ot = r) > v && (Ot = v - It), 0 > It && (Ot += It, It = 0), It < v && 0 < Ot && (Kt > Qt ? (ke = [Et, Gt], Se = [Ft, zt]) : (ke = [Ft, Gt], Se = [Et, zt]), !isNaN(Gt) && !isNaN(zt) && Vt < v && 0 < Vt && (Ce = t.line(s, ke, [Vt, Vt], Dt, _, F), we = t.line(s, Se, [Vt, Vt], Dt, _, F)), Jt = new t.Cuboid(s, Rt = Et - Ft, Ot, A, P, $t, ot, F, Dt, _, W, C, y, H, ae, ne, R))
                                                } else {
                                                    if ("open" == u && (Ut = _t), "high" == u && (Ut = Wt), "low" == u && (Ut = Ht), Vt = t.fitToBounds(Vt, 0, le), _t = t.fitToBounds(_t, 0, le), Ht = t.fitToBounds(Ht, 0, le), Wt = t.fitToBounds(Wt, 0, le), 0 === Vt && 0 === _t && 0 === Ht && 0 === Wt) continue;
                                                    if (Vt == le && _t == le && Ht == le && Wt == le) continue;
                                                    var Me, Ae;
                                                    It = _t + F / 2, (Tt = Et - r / 2) + (Ot = r) > m && (Ot = m - Tt), 0 > Tt && (Ot += Tt, Tt = 0), Rt = Vt - _t, Tt < m && 0 < Ot && (ie && Kt >= Qt && (te = 0), Jt = new t.Cuboid(s, Ot, Rt, A, P, $t, te, F, Dt, _, W, C, y, H, ae, ne, R), Kt > Qt ? (Me = [Vt, Wt], Ae = [_t, Ht]) : (Me = [_t, Wt], Ae = [Vt, Ht]), !isNaN(Wt) && !isNaN(Ht) && Et < m && 0 < Et && (Ce = t.line(s, [Et, Et], Me, Dt, _, F), we = t.line(s, [Et, Et], Ae, Dt, _, F), t.setCN(e, Ce, this.bcn + "line-high"), K.className && t.setCN(e, Ce, K.className, !0), t.setCN(e, we, this.bcn + "line-low"), K.className && t.setCN(e, we, K.className, !0)))
                                                }
                                                Jt && (K.columnGraphics = Lt = Jt.set, G.push(Lt), Lt.translate(Tt, It - F / 2), (K.url || this.showHandOnHover) && Lt.setAttr("cursor", "pointer"), Ce && (G.push(Ce), G.push(we)), O || (K.x = y ? It + Ot / 2 : Tt + Ot / 2, this.animateColumns(Jt, ft, Et, Ft, Vt, _t), this.addListeners(Lt, K), void 0 !== this.tabIndex && Lt.setAttr("tabindex", this.tabIndex)))
                                            }
                                            break;
                                        case "ohlc":
                                            if (!(isNaN(Qt) || isNaN(qt) || isNaN(Zt) || isNaN(Kt))) {
                                                var Pe, Ne, Te, Ie = s.set();
                                                if (G.push(Ie), Kt < Qt && (K.isNegative = !0, null != at && (ee = at)), null != K.lineColor && (ee = K.lineColor), y) {
                                                    if (Ut = Vt, Xt = Et, "open" == u && (Xt = Ft), "high" == u && (Xt = Gt), "low" == u && (Xt = zt), zt = t.fitToBounds(zt, 0, se), Gt = t.fitToBounds(Gt, 0, se), 0 === Et && 0 === Ft && 0 === zt && 0 === Gt) continue;
                                                    if (Et == se && Ft == se && zt == se && Gt == se) continue;
                                                    var Oe = t.fitToBounds(Oe = Vt - r / 2, 0, v),
                                                        Re = t.fitToBounds(Vt, 0, v),
                                                        De = t.fitToBounds(De = Vt + r / 2, 0, v);
                                                    0 <= Ft && Ft <= se && (Ne = t.line(s, [Ft, Ft], [Oe, Re], ee, _, F, H)), 0 < Vt && Vt < v && (Pe = t.line(s, [zt, Gt], [Vt, Vt], ee, _, F, H)), 0 <= Et && Et <= se && (Te = t.line(s, [Et, Et], [Re, De], ee, _, F, H))
                                                } else {
                                                    Ut = Vt, "open" == u && (Ut = _t), "high" == u && (Ut = Wt), "low" == u && (Ut = Ht), Xt = Et, Ht = t.fitToBounds(Ht, 0, le), Wt = t.fitToBounds(Wt, 0, le);
                                                    var Le = t.fitToBounds(Le = Et - r / 2, 0, m),
                                                        Be = t.fitToBounds(Et, 0, m),
                                                        Ee = t.fitToBounds(Ee = Et + r / 2, 0, m);
                                                    0 <= _t && _t <= le && (Ne = t.line(s, [Le, Be], [_t, _t], ee, _, F, H)), 0 < Et && Et < m && (Pe = t.line(s, [Et, Et], [Ht, Wt], ee, _, F, H)), 0 <= Vt && Vt <= le && (Te = t.line(s, [Be, Ee], [Vt, Vt], ee, _, F, H))
                                                }
                                                G.push(Ne), G.push(Pe), G.push(Te), t.setCN(e, Ne, this.bcn + "stroke-open"), t.setCN(e, Te, this.bcn + "stroke-close"), t.setCN(e, Pe, this.bcn + "stroke"), K.className && t.setCN(e, Ie, K.className, !0), Pe && this.addListeners(Pe, K), Te && this.addListeners(Te, K), Ne && this.addListeners(Ne, K), Yt = Et, jt = Vt
                                            }
                                    }
                                    if (!O && !isNaN(Kt)) {
                                        var Ve = this.hideBulletsCount;
                                        if (this.end - this.start <= Ve || 0 === Ve) {
                                            var Fe = this.createBullet(K, Xt, Ut, ft),
                                                _e = this.labelText;
                                            if (_e && !isNaN(Yt) && !isNaN(Yt)) {
                                                var ze = this.createLabel(K, _e),
                                                    He = 0;
                                                Fe && (He = Fe.size), this.positionLabel(K, Yt, jt, ze, He)
                                            }
                                            if ("regular" == N || "100%" == N) {
                                                var Ge = a.totalText;
                                                if (Ge) {
                                                    var We = this.createLabel(K, Ge, a.totalTextColor);
                                                    if (t.setCN(e, We, this.bcn + "label-total"), this.allBullets.push(We), We) {
                                                        var Ye, je, Xe = We.getBBox(),
                                                            Ue = Xe.width,
                                                            Ke = Xe.height,
                                                            qe = a.totalTextOffset,
                                                            Ze = a.totals[ft];
                                                        Ze && Ze.remove();
                                                        var Qe = 0;
                                                        "column" != o && (Qe = this.bulletSize), y ? (je = jt, Ye = 0 > Kt ? Et - Ue / 2 - 2 - Qe - qe : Et + Ue / 2 + 3 + Qe + qe) : (Ye = Yt, je = 0 > Kt ? Vt + Ke / 2 + Qe + qe : Vt - Ke / 2 - 3 - Qe - qe), We.translate(Ye, je), a.totals[ft] = We, y ? (0 > je || je > v) && We.remove() : (0 > Ye || Ye > m) && We.remove()
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            this.lastDataItem = K, "line" != o && "step" != o && "smoothedLine" != o || ("smoothedLine" == o ? this.drawSmoothedGraph(k, S, vt, bt) : this.drawLineGraph(k, S, vt, bt), O || this.launchAnimation()), this.bulletsHidden && this.hideBullets(), this.customBulletsHidden && this.hideCustomBullets()
                        },
                        animateColumns: function(t, e) {
                            var i = this,
                                n = i.chart.startDuration;
                            0 < n && !i.animationPlayed && (i.seqAn ? (t.set.hide(), i.animationArray.push(t), n = setTimeout(function() {
                                i.animate.call(i)
                            }, n / (i.end - i.start + 1) * (e - i.start) * 1e3), i.timeOuts.push(n)) : i.animate(t), i.chart.animatable.push(t))
                        },
                        createLabel: function(e, i, n) {
                            var l = this.chart,
                                s = e.labelColor;
                            s || (s = this.color), s || (s = l.color), n && (s = n), void 0 === (n = this.fontSize) && (this.fontSize = n = l.fontSize);
                            var a = this.labelFunction;
                            if (i = l.formatString(i, e), i = t.cleanFromEmpty(i), a && (i = a(e, i)), void 0 !== i && "" !== i) return (e = t.text(this.container, i, s, l.fontFamily, n)).node.style.pointerEvents = "none", t.setCN(l, e, this.bcn + "label"), this.bulletSet.push(e), e
                        },
                        positiveClip: function(t) {
                            t.clipRect(this.pmx, this.pmy, this.pmw, this.pmh)
                        },
                        negativeClip: function(t) {
                            t.clipRect(this.nmx, this.nmy, this.nmw, this.nmh)
                        },
                        drawLineGraph: function(e, i, n, l) {
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
                                    x = s.negativeFillAlphas,
                                    C = s.baseCoord;
                                0 !== s.negativeBase && ((C = s.valueAxis.getCoordinate(s.negativeBase, a)) > s.height && (C = s.height), 0 > C && (C = 0)), (c = t.line(u, e, i, g, c, p, v, !1, !1, a)).node.setAttribute("stroke-linejoin", "round"), t.setCN(r, c, s.bcn + "stroke"), h.push(c), h.click(function(t) {
                                    s.handleGraphEvent(t, "clickGraph")
                                }).mouseover(function(t) {
                                    s.handleGraphEvent(t, "rollOverGraph")
                                }).mouseout(function(t) {
                                    s.handleGraphEvent(t, "rollOutGraph")
                                }).touchmove(function(t) {
                                    s.chart.handleMouseMove(t)
                                }).touchend(function(t) {
                                    s.chart.handleTouchEnd(t)
                                }), void 0 === b || s.useNegativeColorIfDown || ((p = t.line(u, e, i, b, f, p, v, !1, !1, a)).node.setAttribute("stroke-linejoin", "round"), t.setCN(r, p, s.bcn + "stroke"), t.setCN(r, p, s.bcn + "stroke-negative"), d.push(p)), (0 < o || 0 < x) && (p = e.join(";").split(";"), f = i.join(";").split(";"), "serial" == (c = r.type) || "radar" == c ? 0 < n.length ? (n.reverse(), l.reverse(), p = e.concat(n), f = i.concat(l)) : "radar" == c ? (f.push(0), p.push(0)) : s.rotate ? (f.push(f[f.length - 1]), p.push(C), f.push(f[0]), p.push(C), f.push(f[0]), p.push(p[0])) : (p.push(p[p.length - 1]), f.push(C), p.push(p[0]), f.push(C), p.push(e[0]), f.push(f[0])) : "xy" == c && (i = s.fillToAxis) && (t.isString(i) && (i = r.getValueAxisById(i)), "H" == i.orientation ? (C = "top" == i.position ? 0 : i.height, p.push(p[p.length - 1]), f.push(C), p.push(p[0]), f.push(C), p.push(e[0]), f.push(f[0])) : (C = "left" == i.position ? 0 : i.width, f.push(f[f.length - 1]), p.push(C), f.push(f[0]), p.push(C), f.push(f[0]), p.push(p[0]))), e = s.gradientRotation, 0 < o && ((i = t.polygon(u, p, f, m, o, 1, "#000", 0, e, a)).pattern(s.pattern, NaN, r.path), t.setCN(r, i, s.bcn + "fill"), h.push(i), i.toBack()), (y || void 0 !== b) && (isNaN(x) && (x = o), y || (y = b), a = t.polygon(u, p, f, y, x, 1, "#000", 0, e, a), t.setCN(r, a, s.bcn + "fill"), t.setCN(r, a, s.bcn + "fill-negative"), a.pattern(s.pattern, NaN, r.path), d.push(a), a.toBack(), d.click(function(t) {
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
                            var i = t.length();
                            "serial" != this.chart.type || this.scrollbar || (this.positiveClip(e), 0 < i && this.negativeClip(t))
                        },
                        drawSmoothedGraph: function(e, i, n, l) {
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
                                var x = this.negativeLineAlpha;
                                isNaN(x) && (x = h), y = this.getGradRotation(), h = new t.Bezier(o, e, i, p, h, d, g, 0, s, void 0, y), t.setCN(a, h, this.bcn + "stroke"), r.push(h.path), void 0 !== f && (d = new t.Bezier(o, e, i, f, x, d, g, 0, s, void 0, y), t.setCN(a, d, this.bcn + "stroke"), t.setCN(a, d, this.bcn + "stroke-negative"), u.push(d.path)), 0 < c && (d = e.join(";").split(";"), h = i.join(";").split(";"), p = "", 0 < n.length ? (n.push("M"), l.push("M"), n.reverse(), l.reverse(), d = e.concat(n), h = i.concat(l)) : (this.rotate ? (p += " L" + b + "," + i[i.length - 1], p += " L" + b + "," + i[0]) : (p += " L" + e[e.length - 1] + "," + b, p += " L" + e[0] + "," + b), p += " L" + e[0] + "," + i[0]), e = new t.Bezier(o, d, h, NaN, 0, 0, g, c, s, p, y), t.setCN(a, e, this.bcn + "fill"), e.path.pattern(this.pattern, NaN, a.path), r.push(e.path), m || void 0 !== f) && (v || (v = c), m || (m = f), (o = new t.Bezier(o, d, h, NaN, 0, 0, m, v, s, p, y)).path.pattern(this.pattern, NaN, a.path), t.setCN(a, o, this.bcn + "fill"), t.setCN(a, o, this.bcn + "fill-negative"), u.push(o.path)), this.applyMask(u, r)
                            }
                        },
                        launchAnimation: function() {
                            var e = this,
                                i = e.chart.startDuration;
                            if (0 < i && !e.animationPlayed) {
                                var n = e.set,
                                    l = e.bulletSet;
                                t.VML || (n.attr({
                                    opacity: e.startAlpha
                                }), l.attr({
                                    opacity: e.startAlpha
                                })), n.hide(), l.hide(), e.seqAn ? (i = setTimeout(function() {
                                    e.animateGraphs.call(e)
                                }, e.index * i * 1e3), e.timeOuts.push(i)) : e.animateGraphs()
                            }
                        },
                        animateGraphs: function() {
                            var t = this.chart,
                                e = this.set,
                                i = this.bulletSet,
                                n = this.x,
                                l = this.y;
                            e.show(), i.show();
                            var s = t.startDuration,
                                a = t.startEffect;
                            e && (this.rotate ? (e.translate(-1e3, l), i.translate(-1e3, l)) : (e.translate(n, -1e3), i.translate(n, -1e3)), e.animate({
                                opacity: 1,
                                translate: n + "," + l
                            }, s, a), i.animate({
                                opacity: 1,
                                translate: n + "," + l
                            }, s, a), t.animatable.push(e))
                        },
                        animate: function(e) {
                            var i = this.chart,
                                n = this.animationArray;
                            !e && 0 < n.length && (e = n[0], n.shift()), n = t[t.getEffect(i.startEffect)], i = i.startDuration, e && (this.rotate ? e.animateWidth(i, n) : e.animateHeight(i, n), e.set.show())
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
                        createBullet: function(e, i, n) {
                            if (!isNaN(i) && !isNaN(n) && ("none" != this.bullet || this.customBullet || e.bullet || e.customBullet)) {
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
                                isNaN(h) || (isNaN(u) || (o = (u - d) / (h - d) * (c - p) + p), d == h && (o = c)), h = o, this.bulletAxis && (o = e.values.error, isNaN(o) || (u = o), o = this.bulletAxis.stepWidth * u), o < this.minBulletSize && (o = this.minBulletSize), this.rotate ? i = e.isNegative ? i - a : i + a : n = e.isNegative ? n + a : n - a, p = this.bulletColorR, e.lineColor && void 0 === this.bulletColor && (this.bulletColorSwitched = e.lineColor), this.bulletColorSwitched && (p = this.bulletColorSwitched), e.isNegative && void 0 !== this.bulletColorNegative && (p = this.bulletColorNegative), void 0 !== e.color && (p = e.color), "xy" == l.type && this.valueField && (r = this.pattern, e.pattern && (r = e.pattern)), a = this.bullet, e.bullet && (a = e.bullet), u = this.bulletBorderThickness, c = this.bulletBorderAlpha;
                                var g = this.bulletAlpha;
                                (d = this.bulletBorderColorR) || (d = p), this.useLineColorForBulletBorder && (d = this.lineColorR, e.isNegative && this.negativeLineColor && (d = this.negativeLineColor), this.lineColorSwitched && (d = this.lineColorSwitched));
                                var f = e.alpha;
                                return isNaN(f) || (g = f), r = t.bullet(s, a, o, p, g, u, d, c, h, 0, r, l.path), h = this.customBullet, e.customBullet && (h = e.customBullet), h && (r && r.remove(), "function" == typeof h ? ((h = new h).chart = l, e.bulletConfig && (h.availableSpace = n, h.graph = this, h.graphDataItem = e, h.bulletY = n, e.bulletConfig.minCoord = this.minCoord - n, h.bulletConfig = e.bulletConfig), h.write(s), r && h.showBullet && h.set.push(r), e.customBulletGraphics = h.cset, r = h.set) : (r = s.set(), h = s.image(h, 0, 0, o, o), r.push(h), this.centerCustomBullets && h.translate(-o / 2, -o / 2))), r && ((e.url || this.showHandOnHover) && r.setAttr("cursor", "pointer"), "serial" != l.type && "gantt" != l.type || (-.5 > i || i > this.width || n < -o / 2 || n > this.height) && (r.remove(), r = null), r && (this.bulletSet.push(r), r.translate(i, n), this.addListeners(r, e), this.allBullets.push(r)), e.bx = i, e.by = n, t.setCN(l, r, this.bcn + "bullet"), e.className && t.setCN(l, r, e.className, !0)), r ? (r.size = o || 0, (l = this.bulletHitAreaSize) && ((s = t.circle(s, l, "#FFFFFF", .001, 0)).translate(i, n), e.hitBullet = s, this.bulletSet.push(s), this.addListeners(s, e)), e.bulletGraphics = r, void 0 !== this.tabIndex && r.setAttr("tabindex", this.tabIndex)) : r = {
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
                                var i = e[t].graphDataItem;
                                i && i.customBulletGraphics && i.customBulletGraphics.show()
                            }
                        },
                        hideCustomBullets: function() {
                            var t, e = this.allBullets;
                            for (this.customBulletsHidden = !0, t = 0; t < e.length; t++) {
                                var i = e[t].graphDataItem;
                                i && i.customBulletGraphics && i.customBulletGraphics.hide()
                            }
                        },
                        addListeners: function(t, e) {
                            var i = this;
                            t.mouseover(function(t) {
                                i.handleRollOver(e, t)
                            }).mouseout(function(t) {
                                i.handleRollOut(e, t)
                            }).touchend(function(t) {
                                i.handleRollOver(e, t), i.chart.panEventsEnabled && i.handleClick(e, t)
                            }).touchstart(function(t) {
                                i.handleRollOver(e, t)
                            }).click(function(t) {
                                i.handleClick(e, t)
                            }).dblclick(function(t) {
                                i.handleDoubleClick(e, t)
                            }).contextmenu(function(t) {
                                i.handleRightClick(e, t)
                            });
                            var n = i.chart;
                            if (n.accessible && i.accessibleLabel) {
                                var l = n.formatString(i.accessibleLabel, e);
                                n.makeAccessible(t, l)
                            }
                        },
                        handleRollOver: function(t, e) {
                            if (this.handleGraphEvent(e, "rollOverGraph"), t) {
                                var i = this.chart;
                                t.bulletConfig && (i.isRolledOverBullet = !0);
                                var n = {
                                    type: "rollOverGraphItem",
                                    item: t,
                                    index: t.index,
                                    graph: this,
                                    target: this,
                                    chart: this.chart,
                                    event: e
                                };
                                this.fire(n), i.fire(n), clearTimeout(i.hoverInt), (i = i.chartCursor) && i.valueBalloonsEnabled || this.showGraphBalloon(t, "V", !0)
                            }
                        },
                        handleRollOut: function(t, e) {
                            var i = this.chart;
                            if (t) {
                                var n = {
                                    type: "rollOutGraphItem",
                                    item: t,
                                    index: t.index,
                                    graph: this,
                                    target: this,
                                    chart: this.chart,
                                    event: e
                                };
                                this.fire(n), i.fire(n), i.isRolledOverBullet = !1
                            }
                            this.handleGraphEvent(e, "rollOutGraph"), (i = i.chartCursor) && i.valueBalloonsEnabled || this.hideBalloon()
                        },
                        handleClick: function(e, i) {
                            if (!this.chart.checkTouchMoved() && this.chart.checkTouchDuration(i)) {
                                if (e) {
                                    var n = {
                                        type: "clickGraphItem",
                                        item: e,
                                        index: e.index,
                                        graph: this,
                                        target: this,
                                        chart: this.chart,
                                        event: i
                                    };
                                    this.fire(n), this.chart.fire(n), t.getURL(e.url, this.urlTarget)
                                }
                                this.handleGraphEvent(i, "clickGraph")
                            }
                        },
                        handleGraphEvent: function(t, e) {
                            var i = {
                                type: e,
                                graph: this,
                                target: this,
                                chart: this.chart,
                                event: t
                            };
                            this.fire(i), this.chart.fire(i)
                        },
                        handleRightClick: function(t, e) {
                            if (t) {
                                var i = {
                                    type: "rightClickGraphItem",
                                    item: t,
                                    index: t.index,
                                    graph: this,
                                    target: this,
                                    chart: this.chart,
                                    event: e
                                };
                                this.fire(i), this.chart.fire(i)
                            }
                        },
                        handleDoubleClick: function(t, e) {
                            if (t) {
                                var i = {
                                    type: "doubleClickGraphItem",
                                    item: t,
                                    index: t.index,
                                    graph: this,
                                    target: this,
                                    chart: this.chart,
                                    event: e
                                };
                                this.fire(i), this.chart.fire(i)
                            }
                        },
                        zoom: function(t, e) {
                            this.start = t, this.end = e, this.draw()
                        },
                        changeOpacity: function(t) {
                            var e, i = this.set;
                            if (i && i.setAttr("opacity", t), i = this.ownColumns)
                                for (e = 0; e < i.length; e++) {
                                    var n = i[e].set;
                                    n && n.setAttr("opacity", t)
                                }(i = this.bulletSet) && i.setAttr("opacity", t)
                        },
                        destroy: function() {
                            t.remove(this.set), t.remove(this.bulletSet);
                            var e, i = this.timeOuts;
                            if (i)
                                for (e = 0; e < i.length; e++) clearTimeout(i[e]);
                            this.timeOuts = []
                        },
                        createBalloon: function() {
                            var e = this.chart;
                            this.balloon ? this.balloon.destroy && this.balloon.destroy() : this.balloon = {};
                            var i = this.balloon;
                            t.extend(i, e.balloon, !0), i.chart = e, i.mainSet = e.plotBalloonsSet, i.className = this.id
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
                                    var i = e.bulletGraphics;
                                    if (i && !i.doNotScale) {
                                        i.translate(e.bx, e.by, 1);
                                        var n = this.bulletAlpha;
                                        isNaN(e.alpha) || (n = e.alpha), i.setAttr("fill-opacity", n), i.setAttr("stroke-opacity", this.bulletBorderAlpha)
                                    }
                                }
                                this.resizedDItem = null
                            }
                        },
                        showGraphBalloon: function(e, i, n, l, s) {
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
                                    c && (d = c(e, e.graph)), d && (d = t.cleanFromEmpty(d)), d && "" !== d ? (l = a.getBalloonColor(this, e), o.drop || (o.pointerOrientation = i), i = e.x, s = e.y, a.rotate && (i = e.y, s = e.x), i += r, s += u, isNaN(i) || isNaN(s) ? this.hideBalloonReal() : (e = this.width, c = this.height, h && o.setBounds(r, u, e + r, c + u), o.changeColor(l), o.setPosition(i, s), o.fixPrevious(), o.fixedPosition && (n = !1), !n && "radar" != a.type && (i < r - .5 || i > e + r || s < u - .5 || s > c + u) ? (o.showBalloon(d), o.hide(0)) : (o.followCursor(n), o.showBalloon(d)))) : (this.hideBalloonReal(), o.hide(), this.resizeBullet(e, l, s))
                                } else this.hideBalloonReal()
                            }
                        },
                        resizeBullet: function(e, i, n) {
                            if (this.fixBulletSize(), e && t.isModern && (1 != i || !isNaN(n))) {
                                var l = e.bulletGraphics;
                                l && !l.doNotScale && (l.translate(e.bx, e.by, i), isNaN(n) || (l.setAttr("fill-opacity", n), l.setAttr("stroke-opacity", n)), this.resizedDItem = e)
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
                            var i = e.container;
                            this.rotate = e.rotate, this.container = i, this.prevLineHeight = this.prevLineWidth = NaN, (i = i.set()).translate(this.x, this.y), this.set = i, e.cursorSet.push(i), this.createElements(), t.isString(this.limitToGraph) && (this.limitToGraph = t.getObjById(e.graphs, this.limitToGraph), this.fullWidth = !1, this.cursorPosition = "middle"), this.pointer = this.balloonPointerOrientation.substr(0, 1).toUpperCase(), this.isHidden = !1, this.hideLines(), this.valueLineAxis || (this.valueLineAxis = e.valueAxes[0])
                        },
                        createElements: function() {
                            var e, i, n = this,
                                l = n.chart,
                                s = l.dx,
                                a = l.dy,
                                o = n.width,
                                r = n.height,
                                u = n.cursorAlpha,
                                h = n.valueLineAlpha;
                            n.rotate ? (e = h, i = u) : (i = h, e = u), "xy" == l.type && (i = u, void 0 !== h && (i = h), e = u), n.vvLine = t.line(n.container, [s, 0, 0], [a, 0, r], n.cursorColor, e, 1), t.setCN(l, n.vvLine, "cursor-line"), t.setCN(l, n.vvLine, "cursor-line-vertical"), n.hhLine = t.line(n.container, [0, o, o + s], [0, 0, a], n.cursorColor, i, 1), t.setCN(l, n.hhLine, "cursor-line"), t.setCN(l, n.hhLine, "cursor-line-horizontal"), n.vLine = n.rotate ? n.vvLine : n.hhLine, n.set.push(n.vvLine), n.set.push(n.hhLine), n.set.node.style.pointerEvents = "none", n.fullLines = n.container.set(), (l = l.cursorLineSet).push(n.fullLines), l.translate(n.x, n.y), l.clipRect(-1, -1, o + 2, r + 2), void 0 !== n.tabIndex && (l.setAttr("tabindex", n.tabIndex), l.keyup(function(t) {
                                n.handleKeys(t)
                            }).focus(function(t) {
                                n.showCursor()
                            }).blur(function(t) {
                                n.hideCursor()
                            })), n.set.clipRect(0, 0, o, r)
                        },
                        handleKeys: function(e) {
                            var i = this.prevIndex,
                                n = this.chart;
                            if (n) {
                                var l = n.chartData;
                                l && (isNaN(i) && (i = l.length - 1), 37 != e.keyCode && 40 != e.keyCode || i--, 39 != e.keyCode && 38 != e.keyCode || i++, i = t.fitToBounds(i, n.startIndex, n.endIndex), (e = this.chart.chartData[i]) && this.setPosition(e.x.categoryAxis), this.prevIndex = i)
                            }
                        },
                        update: function() {
                            var t = this.chart;
                            if (t) {
                                var e, i = t.mouseX - this.x,
                                    n = t.mouseY - this.y;
                                if (this.mouseX = i, this.mouseY = n, this.mouse2X = t.mouse2X - this.x, this.mouse2Y = t.mouse2Y - this.y, t.chartData && 0 < t.chartData.length) {
                                    if (this.mouseIsOver() ? (this.hideGraphBalloons = !1, this.rolledOver = e = !0, this.updateDrawing(), this.vvLine && isNaN(this.fx) && (t.rotate || !this.limitToGraph) && this.vvLine.translate(i, 0), !this.hhLine || !isNaN(this.fy) || t.rotate && this.limitToGraph || this.hhLine.translate(0, n), isNaN(this.mouse2X) ? this.dispatchMovedEvent(i, n) : e = !1) : this.forceShow || this.hideCursor(), this.zooming) {
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
                                var e, i = (e = this.chart).marginTop;
                                this.drawingLine = t.line(this.container, [this.drawStartX + (e = e.marginLeft), this.mouseX + e], [this.drawStartY + i, this.mouseY + i], this.cursorColor, 1, 1)
                            }
                        },
                        fixWidth: function(e) {
                            if (this.fullWidth && this.prevLineWidth != e) {
                                var i = this.vvLine,
                                    n = 0;
                                i && (i.remove(), n = i.x), (i = this.container.set()).translate(n, 0), n = t.rect(this.container, e, this.height, this.cursorColor, this.cursorAlpha, this.cursorAlpha, this.cursorColor), t.setCN(this.chart, n, "cursor-fill"), n.translate(-e / 2 - 1, 0), i.push(n), this.vvLine = i, this.fullLines.push(i), this.prevLineWidth = e
                            }
                        },
                        fixHeight: function(e) {
                            if (this.fullWidth && this.prevLineHeight != e) {
                                var i = this.hhLine,
                                    n = 0;
                                i && (i.remove(), n = i.y), (i = this.container.set()).translate(0, n), (n = t.rect(this.container, this.width, e, this.cursorColor, this.cursorAlpha)).translate(0, -e / 2), i.push(n), this.fullLines.push(i), this.hhLine = i, this.prevLineHeight = e
                            }
                        },
                        fixVLine: function(t, e) {
                            if (!isNaN(t) && this.vvLine) {
                                if (isNaN(this.prevLineX)) {
                                    var i = 0,
                                        n = this.mouseX;
                                    if (this.limitToGraph) {
                                        var l = this.chart.categoryAxis;
                                        l && (this.chart.rotate || (i = "bottom" == l.position ? this.height : -this.height), n = t)
                                    }
                                    this.vvLine.translate(n, i)
                                } else this.prevLineX != t && this.vvLine.translate(this.prevLineX, this.prevLineY);
                                this.fx = t, this.prevLineX != t && (i = this.animationDuration, this.zooming && (i = 0), this.vvLine.stop(), this.vvLine.animate({
                                    translate: t + "," + e
                                }, i, "easeOutSine"), this.prevLineX = t, this.prevLineY = e)
                            }
                        },
                        fixHLine: function(t, e) {
                            if (!isNaN(t) && this.hhLine) {
                                if (isNaN(this.prevLineY)) {
                                    var i = 0,
                                        n = this.mouseY;
                                    if (this.limitToGraph) {
                                        var l = this.chart.categoryAxis;
                                        l && (this.chart.rotate && (i = "right" == l.position ? this.width : -this.width), n = t)
                                    }
                                    this.hhLine.translate(i, n)
                                } else this.prevLineY != t && this.hhLine.translate(this.prevLineX, this.prevLineY);
                                this.fy = t, this.prevLineY != t && (i = this.animationDuration, this.zooming && (i = 0), this.hhLine.stop(), this.hhLine.animate({
                                    translate: e + "," + t
                                }, i, "easeOutSine"), this.prevLineY = t, this.prevLineX = e)
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
                                    i = this.mouseY;
                                isNaN(this.fx) || (e = this.fx), isNaN(this.fy) || (i = this.fy), this.clearSelection();
                                var n, l = this.mouseX0,
                                    s = this.mouseY0,
                                    a = this.width,
                                    o = this.height;
                                (e = t.fitToBounds(e, 0, a)) < l && (n = e, e = l, l = n), (i = t.fitToBounds(i, 0, o)) < s && (n = i, i = s, s = n), this.hZoomEnabled ? a = e - l : l = 0, this.vZoomEnabled ? o = i - s : s = 0, isNaN(this.mouse2X) && 0 < Math.abs(a) && 0 < Math.abs(o) && (e = this.chart, i = t.rect(this.container, a, o, this.cursorColor, this.selectionAlpha), t.setCN(e, i, "cursor-selection"), i.width = a, i.height = o, i.translate(l, s), this.set.push(i), this.selection = i), this.updateFullLine()
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
                                    i = this.drawStartY,
                                    n = this.mouseX,
                                    l = this.mouseY,
                                    s = this.chart;
                                (2 < Math.abs(e - n) || 2 < Math.abs(i - l)) && this.fire({
                                    type: "draw",
                                    target: this,
                                    chart: s,
                                    initialX: e,
                                    initialY: i,
                                    finalX: n,
                                    finalY: l
                                })
                            }
                            this.zooming && (this.zooming = !1, this.selectWithoutZooming ? this.dispatchZoomEvent("selected") : (this.hZoomEnabled || this.vZoomEnabled) && this.dispatchZoomEvent("zoomed"), this.rolledOver && this.dispatchMovedEvent(this.mouseX, this.mouseY)), this.mouse2Y0 = this.mouse2X0 = this.mouseY0 = this.mouseX0 = NaN
                        },
                        dispatchZoomEvent: function(t) {
                            if (!this.pan && (u = this.selection) && 3 < Math.abs(u.width) && 3 < Math.abs(u.height)) {
                                var e = Math.min(this.index, this.index0),
                                    i = Math.max(this.index, this.index0),
                                    n = e,
                                    l = i,
                                    s = this.chart,
                                    a = s.chartData,
                                    o = s.categoryAxis;
                                o && o.parseDates && !o.equalSpacing && (n = a[e] ? a[e].time : Math.min(this.timestamp0, this.timestamp), l = a[i] ? s.getEndTime(a[i].time) : Math.max(this.timestamp0, this.timestamp));
                                var r, u = {
                                    type: t,
                                    chart: this.chart,
                                    target: this,
                                    end: l,
                                    start: n,
                                    startIndex: e,
                                    endIndex: i,
                                    selectionHeight: u.height,
                                    selectionWidth: u.width,
                                    selectionY: u.y,
                                    selectionX: u.x
                                };
                                this.hZoomEnabled && 4 < Math.abs(this.mouseX0 - this.mouseX) && (u.startX = this.mouseX0 / this.width, u.endX = this.mouseX / this.width, r = !0), this.vZoomEnabled && 4 < Math.abs(this.mouseY0 - this.mouseY) && (u.startY = 1 - this.mouseY0 / this.height, u.endY = 1 - this.mouseY / this.height, r = !0), r && (this.prevY = this.prevX = NaN, this.fire(u), "selected" != t && this.clearSelection()), this.hideCursor()
                            }
                        },
                        dispatchMovedEvent: function(t, e, i, n) {
                            if (t = Math.round(t), e = Math.round(e), !this.isHidden && (t != this.prevX || e != this.prevY || "changed" == i)) {
                                i || (i = "moved");
                                var l = this.fx,
                                    s = this.fy;
                                isNaN(l) && (l = t), isNaN(s) && (s = e);
                                var a = !1;
                                this.zooming && this.pan && (a = !0), a = {
                                    hidden: this.isHidden,
                                    type: i,
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
                                    skip: n,
                                    hideBalloons: this.hideGraphBalloons
                                }, this.prevIndex = this.index, this.rotate ? (a.position = e, a.finalPosition = s) : (a.position = t, a.finalPosition = l), this.prevX = t, this.prevY = e, n ? this.chart.handleCursorMove(a) : (this.fire(a), "changed" == i && this.chart.fire(a))
                            }
                        },
                        dispatchPanEvent: function() {
                            if (this.mouseIsDown) {
                                var e = t.roundTo((this.mouseX - this.mouseX0) / this.width, 3),
                                    i = t.roundTo((this.mouseY - this.mouseY0) / this.height, 3),
                                    n = t.roundTo((this.mouse2X - this.mouse2X0) / this.width, 3),
                                    l = t.roundTo((this.mouse2Y - this.mouse2Y0) / this.height, 2),
                                    s = !1;
                                0 !== Math.abs(e) && 0 !== Math.abs(i) && (s = !0), this.prevDeltaX != e && this.prevDeltaY != i || (s = !1), isNaN(n) || isNaN(l) || (0 !== Math.abs(n) && 0 !== Math.abs(l) && (s = !0), this.prevDelta2X != n && this.prevDelta2Y != l) || (s = !1), s && (this.hideLines(), this.fire({
                                    type: "panning",
                                    chart: this.chart,
                                    target: this,
                                    deltaX: e,
                                    deltaY: i,
                                    delta2X: n,
                                    delta2Y: l,
                                    index: this.index
                                }), this.prevDeltaX = e, this.prevDeltaY = i, this.prevDelta2X = n, this.prevDelta2Y = l)
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
                            var i, n, l = this.chart,
                                s = l.categoryAxis;
                            s && (void 0 === e && (e = s.coordinateToValue(t)), s.showBalloonAt(e, t), this.forceShow = !0, s.stickBalloonToCategory ? l.rotate ? this.fixHLine(t, 0) : this.fixVLine(t, 0) : (this.showCursor(), l.rotate ? this.hhLine.translate(0, t) : this.vvLine.translate(t, 0)), l.rotate ? i = t : n = t, l.rotate ? (this.vvLine && this.vvLine.hide(), this.hhLine && this.hhLine.show()) : (this.hhLine && this.hhLine.hide(), this.vvLine && this.vvLine.show()), this.updateFullLine(), this.isHidden = !1, this.dispatchMovedEvent(n, i, "moved", !0))
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
                            var i = t.vvLine,
                                n = t.hhLine;
                            this.index = t.index, this.forceShow = !0, this.zooming && this.pan || this.showCursor(!0), this.hideGraphBalloons = e, this.justReleased = t.justReleased, this.zooming = t.zooming, this.index0 = t.index0, this.mouseX0 = t.mouseX0, this.mouseY0 = t.mouseY0, this.mouse2X0 = t.mouse2X0, this.mouse2Y0 = t.mouse2Y0, this.timestamp0 = t.timestamp0, this.prevDeltaX = t.prevDeltaX, this.prevDeltaY = t.prevDeltaY, this.prevDelta2X = t.prevDelta2X, this.prevDelta2Y = t.prevDelta2Y, this.fx = t.fx, this.fy = t.fy, t.zooming && this.updateSelection();
                            var l = t.mouseX,
                                s = t.mouseY;
                            this.rotate ? (l = NaN, this.vvLine && this.vvLine.hide(), this.hhLine && n && (isNaN(t.fy) ? this.hhLine.translate(0, t.mouseY) : this.fixHLine(t.fy, 0))) : (s = NaN, this.hhLine && this.hhLine.hide(), this.vvLine && i && (isNaN(t.fx) ? this.vvLine.translate(t.mouseX, 0) : this.fixVLine(t.fx, 0))), this.dispatchMovedEvent(l, s, "moved", !0)
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
                            var t = (n = this.getDBox()).x,
                                e = n.y,
                                i = n.width,
                                n = n.height;
                            this.rotate ? (t = 1 - e / this.height, e = 1 - (e + n) / this.height) : (e = t / this.width, t = (t + i) / this.width), this.percentStart = e, this.percentEnd = t
                        },
                        draw: function() {
                            var e = this;
                            if (e.destroy(), e.enabled) {
                                var i = e.chart.container,
                                    n = e.rotate,
                                    l = e.chart;
                                l.panRequired = !0;
                                var s, a, o = i.set();
                                if (e.set = o, t.setCN(l, o, n ? "scrollbar-vertical" : "scrollbar-horizontal"), l.scrollbarsSet.push(o), n ? (s = e.scrollbarHeight, a = l.plotAreaHeight) : (a = e.scrollbarHeight, s = l.plotAreaWidth), e.width = s, (e.height = a) && s) {
                                    var r, u = t.rect(i, s, a, e.backgroundColor, e.backgroundAlpha, 1, e.backgroundColor, e.backgroundAlpha);
                                    t.setCN(l, u, "scrollbar-bg"), e.bg = u, o.push(u), u = t.rect(i, s, a, "#000", .005), o.push(u), e.invisibleBg = u, u.click(function() {
                                        e.handleBgClick()
                                    }).mouseover(function() {
                                        e.handleMouseOver()
                                    }).mouseout(function() {
                                        e.handleMouseOut()
                                    }).touchend(function() {
                                        e.handleBgClick()
                                    }), u = t.rect(i, s, a, e.selectedBackgroundColor, e.selectedBackgroundAlpha), t.setCN(l, u, "scrollbar-bg-selected"), e.selectedBG = u, o.push(u), s = t.rect(i, s, a, "#000", .005), e.dragger = s, o.push(s), s.mousedown(function(t) {
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
                                    }), a = l.pathToImages, u = e.dragIcon.replace(/\.[a-z]*$/i, ""), t.isAbsolute(u) && (a = ""), n ? (r = a + u + "H" + l.extension, a = e.dragIconWidth, n = e.dragIconHeight) : (r = a + u + l.extension, n = e.dragIconWidth, a = e.dragIconHeight), u = i.image(r, 0, 0, n, a), t.setCN(l, u, "scrollbar-grip-left"), r = i.image(r, 0, 0, n, a), t.setCN(l, r, "scrollbar-grip-right");
                                    var h = 10,
                                        d = 20;
                                    l.panEventsEnabled && (h = 25, d = e.scrollbarHeight);
                                    var c = t.rect(i, h, d, "#000", .005),
                                        p = t.rect(i, h, d, "#000", .005);
                                    p.translate(-(h - n) / 2, -(d - a) / 2), c.translate(-(h - n) / 2, -(d - a) / 2), n = i.set([u, p]), i = i.set([r, c]), e.iconLeft = n, o.push(e.iconLeft), e.iconRight = i, o.push(i), e.updateGripCursor(!1), l.makeAccessible(n, e.accessibleLabel), l.makeAccessible(i, e.accessibleLabel), l.makeAccessible(s, e.accessibleLabel), n.setAttr("role", "menuitem"), i.setAttr("role", "menuitem"), s.setAttr("role", "menuitem"), void 0 !== e.tabIndex && (n.setAttr("tabindex", e.tabIndex), n.keyup(function(t) {
                                        e.handleKeys(t, 1, 0)
                                    })), void 0 !== e.tabIndex && (s.setAttr("tabindex", e.tabIndex), s.keyup(function(t) {
                                        e.handleKeys(t, 1, 1)
                                    })), void 0 !== e.tabIndex && (i.setAttr("tabindex", e.tabIndex), i.keyup(function(t) {
                                        e.handleKeys(t, 0, 1)
                                    })), n.mousedown(function() {
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
                                    }), i.mousedown(function() {
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
                        handleKeys: function(t, e, i) {
                            this.getPercents();
                            var n = this.percentStart,
                                l = this.percentEnd;
                            if (this.rotate) {
                                var s = l;
                                l = n, n = s
                            }
                            37 != t.keyCode && 40 != t.keyCode || (n -= .02 * e, l -= .02 * i), 39 != t.keyCode && 38 != t.keyCode || (n += .02 * e, l += .02 * i), this.rotate && (t = l, l = n, n = t), isNaN(l) || isNaN(n) || this.percentZoom(n, l, !0)
                        },
                        updateScrollbarSize: function(t, e) {
                            if (!isNaN(t) && !isNaN(e)) {
                                t = Math.round(t), e = Math.round(e);
                                var i, n, l, s, a, o = this.dragger;
                                this.rotate ? (i = 0, n = t, l = this.width + 1, s = e - t, o.setAttr("height", e - t), o.setAttr("y", n)) : (n = 0, l = e - t, s = this.height + 1, a = e - t, o.setAttr("x", i = t), o.setAttr("width", a)), this.clipAndUpdate(i, n, l, s)
                            }
                        },
                        update: function() {
                            var t, e, i, n = !1,
                                l = this.x,
                                s = this.y,
                                a = this.dragger;
                            if (r = this.getDBox()) {
                                e = r.x + l, i = r.y + s;
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
                                this.resizingRight && (u ? (t = p - i, !isNaN(this.maxHeight) && t > this.maxHeight && (t = this.maxHeight), t + i > d + s && (t = d - i + s), 0 > t ? (this.resizingRight = !1, n = this.resizingLeft = !0) : ((0 === t || isNaN(t)) && (t = .1), a.setAttr("height", t))) : (t = c - e, !isNaN(this.maxWidth) && t > this.maxWidth && (t = this.maxWidth), t + e > h + l && (t = h - e + l), 0 > t ? (this.resizingRight = !1, n = this.resizingLeft = !0) : ((0 === t || isNaN(t)) && (t = .1), a.setAttr("width", t))), this.clipDragger(!0)), this.resizingLeft && (u ? (e = i, (i = p) < s && (i = s), isNaN(i) && (i = s), i > d + s && (i = d + s), t = !0 === n ? e - i : r + e - i, !isNaN(this.maxHeight) && t > this.maxHeight && (t = this.maxHeight, i = e), 0 > t ? (this.resizingRight = !0, this.resizingLeft = !1, a.setAttr("y", e + r - s)) : ((0 === t || isNaN(t)) && (t = .1), a.setAttr("y", i - s), a.setAttr("height", t))) : ((i = c) < l && (i = l), isNaN(i) && (i = l), i > h + l && (i = h + l), t = !0 === n ? e - i : o + e - i, !isNaN(this.maxWidth) && t > this.maxWidth && (t = this.maxWidth, i = e), 0 > t ? (this.resizingRight = !0, this.resizingLeft = !1, a.setAttr("x", e + o - l)) : ((0 === t || isNaN(t)) && (t = .1), a.setAttr("x", i - l), a.setAttr("width", t))), this.clipDragger(!0))
                            }
                        },
                        stopForceClip: function() {
                            this.animating = this.forceClip = !1
                        },
                        clipDragger: function(t) {
                            if (l = this.getDBox()) {
                                var e = l.x,
                                    i = l.y,
                                    n = l.width,
                                    l = l.height,
                                    s = !1;
                                this.rotate ? (e = 0, n = this.width + 1, (this.clipY != i || this.clipH != l) && (s = !0)) : (i = 0, l = this.height + 1, (this.clipX != e || this.clipW != n) && (s = !0)), s && this.clipAndUpdate(e, i, n, l), t && (this.updateOnReleaseOnly || this.dispatchScrollbarEvent())
                            }
                        },
                        maskGraphs: function() {},
                        clipAndUpdate: function(t, e, i, n) {
                            this.clipX = t, this.clipY = e, this.clipW = i, this.clipH = n, this.selectedBG.setAttr("width", i), this.selectedBG.setAttr("height", n), this.selectedBG.translate(t, e), this.updateDragIconPositions(), this.maskGraphs(t, e, i, n)
                        },
                        dispatchScrollbarEvent: function() {
                            if (this.skipEvent) this.skipEvent = !1;
                            else {
                                var t = this.chart;
                                t.hideBalloon();
                                var e = (l = this.getDBox()).x,
                                    i = l.y,
                                    n = l.width,
                                    l = l.height;
                                this.getPercents(), this.rotate ? (e = i, n = this.height / l) : n = this.width / n, t = {
                                    type: "zoomed",
                                    position: e,
                                    chart: t,
                                    target: this,
                                    multiplier: n,
                                    relativeStart: this.percentStart,
                                    relativeEnd: this.percentEnd
                                }, this.percentStart == this.prevPercentStart && this.percentEnd == this.prevPercentEnd && this.prevMultiplier == n || (this.fire(t), this.prevPercentStart = this.percentStart, this.prevPercentEnd = this.percentEnd, this.prevMultiplier = n)
                            }
                        },
                        updateDragIconPositions: function() {
                            var t, e, i = this.getDBox(),
                                n = i.x,
                                l = i.y,
                                s = this.iconLeft,
                                a = this.iconRight,
                                o = this.scrollbarHeight;
                            this.rotate ? (s.translate((o - (e = this.dragIconHeight)) / 2, l - (t = this.dragIconWidth) / 2), a.translate((o - e) / 2, l + i.height - t / 2)) : (s.translate(n - (e = this.dragIconWidth) / 2, (o - (t = this.dragIconHeight)) / 2), a.translate(n - e / 2 + i.width, (o - t) / 2))
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
                        percentZoom: function(e, i, n) {
                            var l, s;
                            e = t.fitToBounds(e, 0, i), i = t.fitToBounds(i, e, 1), this.dragger && this.enabled && (this.dragger.stop(), isNaN(e) && (e = 0), isNaN(i) && (i = 1), this.rotate ? (i = (l = this.height) - l * i, s = l - l * e) : (s = (l = this.width) * i, i = l * e), this.updateScrollbarSize(i, s), this.clipDragger(!1), this.getPercents(), n && this.dispatchScrollbarEvent())
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
                                var i = this.getDBox();
                                this.rotate ? (this.initialCoord = i.y, this.initialMouse = e.mouseY) : (this.initialCoord = i.x, this.initialMouse = e.mouseX)
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
                                var i, n, l = e.scrollDuration,
                                    s = e.dragger,
                                    a = (i = e.getDBox()).height,
                                    o = i.width;
                                n = e.chart;
                                var r = e.x,
                                    u = e.rotate;
                                u ? (i = "y", n = t.fitToBounds(n = n.mouseY - a / 2 - e.y, 0, e.height - a)) : (i = "x", n = t.fitToBounds(n = n.mouseX - o / 2 - r, 0, e.width - o)), e.updateOnReleaseOnly ? (e.skipEvent = !1, s.setAttr(i, n), e.dispatchScrollbarEvent(), e.clipDragger()) : (e.animating = !0, n = Math.round(n), s.animate(u ? {
                                    y: n
                                } : {
                                    x: n
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
                                i = this.chart,
                                n = this.gridAxis;
                            e || ("CategoryAxis" == this.gridAxis.cname ? (this.catScrollbar = !0, (e = new t.CategoryAxis).id = "scrollbar") : ((e = new t.ValueAxis).data = i.chartData, e.id = n.id, e.type = n.type, e.maximumDate = n.maximumDate, e.minimumDate = n.minimumDate, e.minPeriod = n.minPeriod, e.minMaxField = n.minMaxField), this.categoryAxis = e), e.chart = i;
                            var l = i.categoryAxis;
                            l && (e.firstDayOfWeek = l.firstDayOfWeek), e.dateFormats = n.dateFormats, e.markPeriodChange = n.markPeriodChange, e.boldPeriodBeginning = n.boldPeriodBeginning, e.labelFunction = n.labelFunction, e.axisItemRenderer = t.RecItem, e.axisRenderer = t.RecAxis, e.guideFillRenderer = t.RecFill, e.inside = !0, e.fontSize = this.fontSize, e.tickLength = 0, e.axisAlpha = 0, t.isString(this.graph) && (this.graph = t.getObjById(i.graphs, this.graph)), (e = this.graph) && this.catScrollbar && ((n = this.valueAxis) || (this.valueAxis = n = new t.ValueAxis, n.visible = !1, n.scrollbar = !0, n.axisItemRenderer = t.RecItem, n.axisRenderer = t.RecAxis, n.guideFillRenderer = t.RecFill, n.labelsEnabled = !1, n.chart = i), (i = this.unselectedGraph) || ((i = new t.AmGraph).scrollbar = !0, this.unselectedGraph = i, i.negativeBase = e.negativeBase, i.noStepRisers = e.noStepRisers), (i = this.selectedGraph) || ((i = new t.AmGraph).scrollbar = !0, this.selectedGraph = i, i.negativeBase = e.negativeBase, i.noStepRisers = e.noStepRisers)), this.scrollbarCreated = !0
                        },
                        draw: function() {
                            var e = this;
                            if (t.ChartScrollbar.base.draw.call(e), e.enabled) {
                                e.scrollbarCreated || e.init();
                                var i = e.chart,
                                    n = i.chartData,
                                    l = e.categoryAxis,
                                    s = e.rotate,
                                    a = e.x,
                                    o = e.y,
                                    r = e.width,
                                    u = e.height,
                                    h = e.gridAxis,
                                    d = e.set;
                                if (l.setOrientation(!s), l.parseDates = h.parseDates, "ValueAxis" == e.categoryAxis.cname && (l.rotate = !s), l.equalSpacing = h.equalSpacing, l.minPeriod = h.minPeriod, l.startOnAxis = h.startOnAxis, l.width = r - 1, l.height = u, l.gridCount = e.gridCount, l.gridColor = e.gridColor, l.gridAlpha = e.gridAlpha, l.color = e.color, l.tickLength = 0, l.axisAlpha = 0, l.autoGridCount = e.autoGridCount, l.parseDates && !l.equalSpacing && l.timeZoom(i.firstTime, i.lastTime), l.minimum = e.gridAxis.fullMin, l.maximum = e.gridAxis.fullMax, l.strictMinMax = !0, l.zoom(0, n.length - 1), (h = e.graph) && e.catScrollbar) {
                                    var c, p = e.valueAxis,
                                        g = h.valueAxis;
                                    for (p.id = g.id, p.rotate = s, p.setOrientation(s), p.width = r, p.height = u, p.dataProvider = n, p.reversed = g.reversed, p.logarithmic = g.logarithmic, p.gridAlpha = 0, p.axisAlpha = 0, d.push(p.set), s ? (p.y = o, p.x = 0) : (p.x = a, p.y = 0), a = 1 / 0, o = -1 / 0, c = 0; c < n.length; c++) {
                                        var f, m = n[c].axes[g.id].graphs[h.id].values;
                                        for (f in m)
                                            if (m.hasOwnProperty(f) && "percents" != f && "total" != f) {
                                                var v = m[f];
                                                v < a && (a = v), v > o && (o = v)
                                            }
                                    }
                                    1 / 0 != a && (p.minimum = a), -1 / 0 != o && (p.maximum = o + .1 * (o - a)), a == o && (--p.minimum, p.maximum += 1), void 0 !== e.minimum && (p.minimum = e.minimum), void 0 !== e.maximum && (p.maximum = e.maximum), p.zoom(0, n.length - 1), (f = e.unselectedGraph).id = h.id, f.bcn = "scrollbar-graph-", f.rotate = s, f.chart = i, f.data = n, f.valueAxis = p, f.chart = h.chart, f.categoryAxis = e.categoryAxis, f.periodSpan = h.periodSpan, f.valueField = h.valueField, f.openField = h.openField, f.closeField = h.closeField, f.highField = h.highField, f.lowField = h.lowField, f.lineAlpha = e.graphLineAlpha, f.lineColorR = e.graphLineColor, f.fillAlphas = e.graphFillAlpha, f.fillColorsR = e.graphFillColor, f.connect = h.connect, f.hidden = h.hidden, f.width = r, f.height = u, f.pointPosition = h.pointPosition, f.stepDirection = h.stepDirection, f.periodSpan = h.periodSpan, (g = e.selectedGraph).id = h.id, g.bcn = f.bcn + "selected-", g.rotate = s, g.chart = i, g.data = n, g.valueAxis = p, g.chart = h.chart, g.categoryAxis = l, g.periodSpan = h.periodSpan, g.valueField = h.valueField, g.openField = h.openField, g.closeField = h.closeField, g.highField = h.highField, g.lowField = h.lowField, g.lineAlpha = e.selectedGraphLineAlpha, g.lineColorR = e.selectedGraphLineColor, g.fillAlphas = e.selectedGraphFillAlpha, g.fillColorsR = e.selectedGraphFillColor, g.connect = h.connect, g.hidden = h.hidden, g.width = r, g.height = u, g.pointPosition = h.pointPosition, g.stepDirection = h.stepDirection, g.periodSpan = h.periodSpan, (i = e.graphType) || (i = h.type), f.type = i, g.type = i, f.zoom(0, n = n.length - 1), g.zoom(0, n), g.set.click(function() {
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
                        timeZoom: function(e, i, n) {
                            this.startTime = e, this.endTime = i, this.timeDifference = i - e, this.skipEvent = !t.toBoolean(n), this.zoomScrollbar(), this.dispatchScrollbarEvent()
                        },
                        zoom: function(t, e) {
                            this.start = t, this.end = e, this.skipEvent = !0, this.zoomScrollbar()
                        },
                        dispatchScrollbarEvent: function() {
                            if (this.categoryAxis && "ValueAxis" == this.categoryAxis.cname) t.ChartScrollbar.base.dispatchScrollbarEvent.call(this);
                            else if (this.skipEvent) this.skipEvent = !1;
                            else {
                                var e, i, n = this.chart.chartData;
                                e = (a = this.dragger.getBBox()).x;
                                var l = a.y,
                                    s = a.width,
                                    a = a.height,
                                    o = this.chart;
                                this.rotate ? (e = l, i = a) : i = s, (s = {
                                    type: "zoomed",
                                    target: this
                                }).chart = o;
                                var r = this.categoryAxis,
                                    u = this.stepWidth,
                                    h = (l = o.minSelectedTime, a = o.maxSelectedTime, !1);
                                r.parseDates && !r.equalSpacing ? (n = o.lastTime, o = o.firstTime, (r = Math.round(e / u) + o) > (e = this.dragging ? r + this.timeDifference : Math.round((e + i) / u) + o) && (r = e), 0 < l && e - r < l && (r = (e = Math.round(r + (e - r) / 2)) - (h = Math.round(l / 2)), e += h, h = !0), 0 < a && e - r > a && (r = (e = Math.round(r + (e - r) / 2)) - (h = Math.round(a / 2)), e += h, h = !0), e > n && (e = n), e - l < r && (r = e - l), r < o && (r = o), r + l > e && (e = r + l), (r != this.startTime || e != this.endTime) && (this.startTime = r, this.endTime = e, s.start = r, s.end = e, s.startDate = new Date(r), s.endDate = new Date(e), this.fire(s))) : (r.startOnAxis || (e += u / 2), i -= this.stepWidth / 2, l = r.xToIndex(e), e = r.getCoordinate(l) - this.stepWidth / 2, e = r.xToIndex(e + i), l == this.start && this.end == e || (r.startOnAxis && (this.resizingRight && l == e && e++, this.resizingLeft && l == e && (0 < l ? l-- : e = 1)), this.start = l, this.end = this.dragging ? this.start + this.difference : e, s.start = this.start, s.end = this.end, r.parseDates && (n[this.start] && (s.startDate = new Date(n[this.start].time)), n[this.end] && (s.endDate = new Date(n[this.end].time))), this.fire(s)), this.percentStart = l, this.percentEnd = e), h && this.zoomScrollbar(!0)
                            }
                        },
                        zoomScrollbar: function(t) {
                            if ((!(this.dragging || this.resizingLeft || this.resizingRight || this.animating) || t) && this.dragger && this.enabled) {
                                var e, i, n = this.chart;
                                t = n.chartData;
                                var l = this.categoryAxis;
                                l.parseDates && !l.equalSpacing ? (e = (t = l.stepWidth) * (this.startTime - (i = n.firstTime)), i = t * (this.endTime - i)) : (t[this.start] && (e = t[this.start].x[l.id]), t[this.end] && (i = t[this.end].x[l.id]), t = l.stepWidth, l.startOnAxis || (e -= n = t / 2, i += n)), this.stepWidth = t, isNaN(e) || isNaN(i) || this.updateScrollbarSize(e, i)
                            }
                        },
                        maskGraphs: function(t, e, i, n) {
                            var l = this.selectedGraph;
                            l && l.set.clipRect(t, e, i, n)
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
                                i = this.pointToY;
                            t.isModern || (this.drop = !1);
                            var n = this.chart;
                            if (t.VML && (this.fadeOutDuration = 0), this.xAnim && n.stopAnim(this.xAnim), this.yAnim && n.stopAnim(this.yAnim), this.sdy = this.sdx = 0, !isNaN(e)) {
                                var l = this.follow,
                                    s = n.container,
                                    a = this.set;
                                if (t.remove(a), this.removeDiv(), (a = s.set()).node.style.pointerEvents = "none", this.set = a, this.mainSet ? (this.mainSet.push(this.set), this.sdx = this.mainSet.x, this.sdy = this.mainSet.y) : n.balloonsSet.push(a), this.show) {
                                    var o = this.l,
                                        r = this.t,
                                        u = this.r,
                                        h = this.b,
                                        d = this.fillColor,
                                        c = this.borderColor,
                                        p = d;
                                    null != (x = this.balloonColor) && (this.adjustBorderColor ? p = c = x : d = x);
                                    var g = this.horizontalPadding,
                                        f = this.verticalPadding,
                                        m = this.pointerWidth,
                                        v = this.pointerOrientation,
                                        b = this.cornerRadius,
                                        y = n.fontFamily;
                                    null == (P = this.fontSize) && (P = n.fontSize);
                                    var x = document.createElement("div"),
                                        C = n.classNamePrefix;
                                    x.className = C + "-balloon-div", this.className && (x.className = x.className + " " + C + "-balloon-div-" + this.className), C = x.style, this.disableMouseEvents && (C.pointerEvents = "none"), C.position = "absolute";
                                    var w = this.minWidth,
                                        k = document.createElement("div");
                                    x.appendChild(k);
                                    var S = k.style;
                                    isNaN(w) || (S.minWidth = w - 2 * g + "px"), S.textAlign = this.textAlign, S.maxWidth = this.maxWidth + "px", S.fontSize = P + "px", S.color = this.color, S.fontFamily = y, k.innerHTML = this.text, n.chartDiv.appendChild(x), this.textDiv = x, S = x.offsetWidth;
                                    var M = x.offsetHeight;
                                    x.clientHeight && (S = x.clientWidth, M = x.clientHeight), y = M + 2 * f, k = S + 2 * g, !isNaN(w) && k < w && (k = w), window.opera && (y += 2);
                                    var A = !1,
                                        P = this.offsetY;
                                    n.handDrawn && (P += n.handDrawScatter + 2), "H" != v ? (w = e - k / 2, i < r + y + 10 && "down" != v ? (A = !0, l && (i += P), P = i + m, this.deltaSignY = -1) : (l && (i -= P), P = i - y - m, this.deltaSignY = 1)) : (2 * m > y && (m = y / 2), P = i - y / 2, e < o + (u - o) / 2 ? (w = e + m, this.deltaSignX = -1) : (w = e - k - m, this.deltaSignX = 1)), P + y >= h && (P = h - y), P < r && (P = r), w < o && (w = o), w + k > u && (w = u - k), r = P + f, h = w + g;
                                    var N, T = this.shadowAlpha,
                                        I = this.shadowColor,
                                        O = (g = this.borderThickness, f = this.fillAlpha, this.borderAlpha);
                                    this.showBullet && (N = t.circle(s, this.bulletSize, p, f), a.push(N)), this.drop ? (o = k / 1.6, u = 0, "V" == v && (v = "down"), "H" == v && (v = "left"), "down" == v && (w = e + 1, P = i - o - o / 3), "up" == v && (u = 180, w = e + 1, P = i + o + o / 3), "left" == v && (u = 270, w = e + o + o / 3 + 2, P = i), "right" == v && (u = 90, w = e - o - o / 3 + 2, P = i), r = P - M / 2 + 1, h = w - S / 2 - 1, d = t.drop(s, o, u, d, f, g, c, O)) : 0 < b || 0 === m ? (0 < T && (e = t.rect(s, k, y, d, 0, g + 1, I, T, b), t.isModern ? e.translate(1, 1) : e.translate(4, 4), a.push(e)), d = t.rect(s, k, y, d, f, g, c, O, b)) : (p = [], b = [], "H" != v ? ((o = e - w) > k - m && (o = k - m), o < m && (o = m), p = [0, o - m, e - w, o + m, k, k, 0, 0], b = A ? [0, 0, i - P, 0, 0, y, y, 0] : [y, y, i - P, y, y, 0, 0, y]) : ((v = i - P) > y - m && (v = y - m), v < m && (v = m), b = [0, v - m, i - P, v + m, y, y, 0, 0], p = e < o + (u - o) / 2 ? [0, 0, w < e ? 0 : e - w, 0, 0, k, k, 0] : [k, k, w + k > e ? k : e - w, k, k, 0, 0, k]), 0 < T && ((e = t.polygon(s, p, b, d, 0, g, I, T)).translate(1, 1), a.push(e)), d = t.polygon(s, p, b, d, f, g, c, O)), this.bg = d, a.push(d), d.toFront(), t.setCN(n, d, "balloon-bg"), this.className && t.setCN(n, d, "balloon-bg-" + this.className), s = 1 * this.deltaSignX, r += this.sdy, C.left = (h += this.sdx) + "px", C.top = r + "px", a.translate(w - s, P, 1, !0), d = d.getBBox(), this.bottom = P + y + 1, this.yPos = d.y + P, N && N.translate(this.pointToX - w + s, i - P), i = this.animationDuration, 0 < this.animationDuration && !l && !isNaN(this.prevX) && (a.translate(this.prevX, this.prevY, NaN, !0), a.animate({
                                        translate: w - s + "," + P
                                    }, i, "easeOutSine"), x && (C.left = this.prevTX + "px", C.top = this.prevTY + "px", this.xAnim = n.animate({
                                        node: x
                                    }, "left", this.prevTX, h, i, "easeOutSine", "px"), this.yAnim = n.animate({
                                        node: x
                                    }, "top", this.prevTY, r, i, "easeOutSine", "px"))), this.prevX = w - s, this.prevY = P, this.prevTX = h, this.prevTY = r
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
                                if (this.pointToX = i = this.chart.mouseX - this.offsetX * this.deltaSignX - this.sdx, this.pointToY = t, i != this.previousX || t != this.previousY)
                                    if (this.previousX = i, this.previousY = t, 0 === this.cornerRadius) this.draw();
                                    else {
                                        var e = this.set;
                                        if (e) {
                                            var i, n = e.getBBox(),
                                                l = t - n.height - 10;
                                            (i -= n.width / 2) < this.l && (i = this.l), i > this.r - n.width && (i = this.r - n.width), l < this.t && (l = t + 10), e.translate(i, l), (t = this.textDiv.style).left = i + this.horizontalPadding + "px", t.top = l + this.verticalPadding + "px"
                                        }
                                    }
                            }
                        },
                        changeColor: function(t) {
                            this.balloonColor = t
                        },
                        setBounds: function(t, e, i, n) {
                            this.l = t, this.t = e, this.r = i, this.b = n, this.destroyTO && clearTimeout(this.destroyTO)
                        },
                        showBalloon: function(t) {
                            (this.text != t || this.positionChanged) && (this.text = t, this.isHiding = !1, this.show = !0, this.destroyTO && clearTimeout(this.destroyTO), t = this.chart, this.fadeAnim1 && t.stopAnim(this.fadeAnim1), this.fadeAnim2 && t.stopAnim(this.fadeAnim2), this.draw(), this.positionChanged = !1)
                        },
                        hide: function(t) {
                            var e = this;
                            e.text = void 0, isNaN(t) && (t = e.fadeOutDuration);
                            var i = e.chart;
                            if (0 < t && !e.isHiding) {
                                e.isHiding = !0, e.destroyTO && clearTimeout(e.destroyTO), e.destroyTO = setTimeout(function() {
                                    e.destroy.call(e)
                                }, 1e3 * t), e.follow = !1, e.show = !1;
                                var n = e.set;
                                n && (n.setAttr("opacity", e.fillAlpha), e.fadeAnim1 = n.animate({
                                    opacity: 0
                                }, t, "easeInSine")), e.textDiv && (e.fadeAnim2 = i.animate({
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
                            var i = e.chart.mouseX - e.sdx,
                                n = e.chart.mouseY - e.sdy;
                            !isNaN(i) && t && (e.pointToX = i - e.offsetX * e.deltaSignX, e.pointToY = n, e.followMouse(), e.interval = setInterval(function() {
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
                                    for (var i = 0; i < e; i++) this.delayParseSerialData(t, i)
                                } else this.parseCount = 0, this.parsePartSerialData(t, 0, t.length, 0);
                            else this.onDataUpdated()
                        },
                        delayParseSerialData: function(t, e) {
                            var i = this,
                                n = i.processCount;
                            setTimeout(function() {
                                i.parsePartSerialData.call(i, t, e * n, (e + 1) * n, e)
                            }, i.processTimeout)
                        },
                        parsePartSerialData: function(e, i, n, l) {
                            n > e.length && (n = e.length);
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
                            var y, x = this.dataDateFormat,
                                C = {};
                            for (y = i; y < n; y++) {
                                var w = {},
                                    k = e[y];
                                if (i = k[this.categoryField], w.dataContext = k, w.category = r ? r(i, k, p) : String(i), u && (w.forceShow = k[u]), d && (w.className = k[d]), h && (w.labelColor = k[h]), b[k[o]] = w, !c || (p.categoryFunction ? i = p.categoryFunction(i, k, p) : (!x || i instanceof Date || (i = i.toString() + " |"), i = t.getDate(i, x, p.minPeriod)), i = t.resetDateToMin(i, f, g, p.firstDayOfWeek), w.category = i, w.time = i.getTime(), !isNaN(w.time))) {
                                    var S, M = this.valueAxes;
                                    for (w.axes = {}, w.x = {}, S = 0; S < M.length; S++) {
                                        var A, P = M[S].id;
                                        for (w.axes[P] = {}, w.axes[P].graphs = {}, A = 0; A < s.length; A++) {
                                            var N = (i = s[A]).id,
                                                T = 1.1;
                                            isNaN(i.gapPeriod) || (T = i.gapPeriod);
                                            var I = i.periodValue;
                                            if (i.valueAxis.id == P) {
                                                w.axes[P].graphs[N] = {};
                                                var O = {};
                                                O.index = y;
                                                var R = k;
                                                if (i.dataProvider && (R = a), O.values = this.processValues(R, i, I), !i.connect || i.forceGap && !isNaN(i.gapPeriod))
                                                    if (C && C[N] && 0 < T && w.time - v[N] >= m * T && (C[N].gap = !0), i.forceGap) {
                                                        var D;
                                                        for (D in T = 0, O.values) T++;
                                                        0 < T && (v[N] = w.time, C[N] = O)
                                                    } else v[N] = w.time, C[N] = O;
                                                this.processFields(i, O, R), O.category = w.category, O.serialDataItem = w, O.graph = i, w.axes[P].graphs[N] = O
                                            }
                                        }
                                    }
                                    this.chartData[y] = w
                                }
                            }
                            if (this.parseCount == l) {
                                for (e = 0; e < s.length; e++)(i = s[e]).dataProvider && this.parseGraphData(i);
                                this.dataChanged = !1, this.dispatchDataUpdated = !0, this.onDataUpdated()
                            }
                        },
                        processValues: function(e, i, n) {
                            var l, s = {},
                                a = !1;
                            "candlestick" != i.type && "ohlc" != i.type || "" === n || (a = !0);
                            for (var o = "value error open close low high".split(" "), r = 0; r < o.length; r++) {
                                var u = o[r];
                                "value" != u && "error" != u && a && (n = u.charAt(0).toUpperCase() + u.slice(1));
                                var h = e[i[u + "Field"] + n];
                                null !== h && (l = Number(h), isNaN(l) || (s[u] = l), "date" == i.valueAxis.type && void 0 !== h && (l = t.getDate(h, i.chart.dataDateFormat), s[u] = l.getTime()))
                            }
                            return s
                        },
                        parseGraphData: function(t) {
                            var e, i = t.dataProvider,
                                n = t.seriesIdField;
                            for (n || (n = this.seriesIdField), n || (n = this.categoryField), e = 0; e < i.length; e++) {
                                var l = i[e],
                                    s = this.lookupTable[String(l[n])],
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
                            var e, i = this.graphs;
                            for (e = i.length - 1; 0 <= e; e--) {
                                var n = i[e];
                                n && n.valueAxis == t && this.removeGraph(n)
                            }
                            for (e = (i = this.valueAxes).length - 1; 0 <= e; e--) i[e] == t && i.splice(e, 1);
                            this.validateData()
                        },
                        addGraph: function(t) {
                            this.graphs.push(t), this.chooseGraphColor(t, this.graphs.length - 1), this.validateData()
                        },
                        removeGraph: function(t) {
                            var e, i = this.graphs;
                            for (e = i.length - 1; 0 <= e; e--) i[e] == t && (i.splice(e, 1), t.destroy());
                            this.validateData()
                        },
                        handleValueAxisZoom: function() {},
                        processValueAxes: function() {
                            var e, i = this.valueAxes;
                            for (e = 0; e < i.length; e++) {
                                var n = t.processObject(n = i[e], t.ValueAxis, this.theme);
                                i[e] = n, n.chart = this, n.init(), this.listenTo(n, "axisIntZoomed", this.handleValueAxisZoom), n.id || (n.id = "valueAxisAuto" + e + "_" + (new Date).getTime()), void 0 === n.usePrefixes && (n.usePrefixes = this.usePrefixes)
                            }
                        },
                        processGuides: function() {
                            var e = this.guides,
                                i = this.categoryAxis;
                            if (e)
                                for (var n = 0; n < e.length; n++) {
                                    var l = e[n];
                                    (void 0 !== l.category || void 0 !== l.date) && i && i.addGuide(l), l.id || (l.id = "guideAuto" + n + "_" + (new Date).getTime());
                                    var s = l.valueAxis;
                                    s ? (t.isString(s) && (s = this.getValueAxisById(s)), s ? s.addGuide(l) : this.valueAxes[0].addGuide(l)) : isNaN(l.value) || this.valueAxes[0].addGuide(l)
                                }
                        },
                        processGraphs: function() {
                            var e, i = this.graphs;
                            for (this.graphsById = {}, e = 0; e < i.length; e++) {
                                var n = t.processObject(n = i[e], t.AmGraph, this.theme);
                                i[e] = n, this.chooseGraphColor(n, e), n.chart = this, n.init(), t.isString(n.valueAxis) && (n.valueAxis = this.getValueAxisById(n.valueAxis)), n.valueAxis || (n.valueAxis = this.valueAxes[0]), n.id || (n.id = "graphAuto" + e + "_" + (new Date).getTime()), this.graphsById[n.id] = n
                            }
                        },
                        formatString: function(e, i, n) {
                            var l = i.graph,
                                s = l.valueAxis;
                            if (s.duration && s.maxInterval && i.values.value) {
                                var a = s.numberFormatter;
                                a || (a = chart.nf), s = t.formatDuration(i.values.value, s.duration, "", s.durationUnits, s.maxInterval, a), e = e.split("[[value]]").join(s)
                            }
                            return e = t.massReplace(e, {
                                "[[title]]": l.title,
                                "[[description]]": i.description
                            }), e = n ? t.fixNewLines(e) : t.fixBrakes(e), t.cleanFromEmpty(e)
                        },
                        getBalloonColor: function(e, i, n) {
                            var l = e.lineColor,
                                s = e.balloonColor;
                            return n && (s = l), "object" == typeof(n = e.fillColorsR) ? l = n[0] : void 0 !== n && (l = n), i.isNegative && (n = e.negativeLineColor, "object" == typeof(e = e.negativeFillColors) ? n = e[0] : void 0 !== e && (n = e), void 0 !== n && (l = n)), void 0 !== i.color && (l = i.color), void 0 !== i.lineColor && (l = i.lineColor), void 0 !== (i = i.fillColors) && (l = i, t.ifArray(i) && (l = i[0])), void 0 === s && (s = l), s
                        },
                        getGraphById: function(e) {
                            return t.getObjById(this.graphs, e)
                        },
                        getValueAxisById: function(e) {
                            return t.getObjById(this.valueAxes, e)
                        },
                        processFields: function(e, i, n) {
                            if (e.itemColors) {
                                var l = e.itemColors,
                                    s = i.index;
                                i.color = s < l.length ? l[s] : t.randomColor()
                            }
                            for (l = "lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className columnIndex".split(" "), s = 0; s < l.length; s++) {
                                var a = l[s],
                                    o = e[a + "Field"];
                                o && t.isDefined(o = n[o]) && (i[a] = o)
                            }
                            i.dataContext = n
                        },
                        chooseGraphColor: function(e, i) {
                            var n;
                            e.lineColor ? e.lineColorR = e.lineColor : (n = this.colors.length > i ? this.colors[i] : e.lineColorR ? e.lineColorR : t.randomColor(), e.lineColorR = n), e.fillColorsR = e.fillColors ? e.fillColors : e.lineColorR, e.bulletBorderColorR = e.bulletBorderColor ? e.bulletBorderColor : e.useLineColorForBulletBorder ? e.lineColorR : e.bulletColor, e.bulletColorR = e.bulletColor ? e.bulletColor : e.lineColorR, (n = this.patterns) && (e.pattern = n[i])
                        },
                        handleLegendEvent: function(t) {
                            var e = t.type;
                            if (t = t.dataItem) {
                                var i = t.hidden,
                                    n = t.showBalloon;
                                switch (e) {
                                    case "clickMarker":
                                        this.textClickEnabled && (n ? this.hideGraphsBalloon(t) : this.showGraphsBalloon(t));
                                        break;
                                    case "clickLabel":
                                        n ? this.hideGraphsBalloon(t) : this.showGraphsBalloon(t);
                                        break;
                                    case "rollOverItem":
                                        i || this.highlightGraph(t);
                                        break;
                                    case "rollOutItem":
                                        i || this.unhighlightGraph();
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
                                var i, n = .2;
                                if (this.legend && (n = this.legend.rollOverGraphAlpha), 1 != n)
                                    for (i = 0; i < e.length; i++) {
                                        var l = e[i];
                                        l != t && l.changeOpacity(n)
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
                            var i, n, l, s, a = e.chart,
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
                                x = a.dataDateFormat;
                            r && (u && (u = t.getDate(u, x, "fff"), e.initialDate = u, i = r.dateToCoordinate(u)), h && (i = r.categoryToCoordinate(h)), d && (d = t.getDate(d, x, "fff"), e.finalDate = d, n = r.dateToCoordinate(d)), c && (n = r.categoryToCoordinate(c))), g && !y && (isNaN(f) || (i = g.getCoordinate(f)), isNaN(m) || (n = g.getCoordinate(m))), p && !y && (isNaN(v) || (l = p.getCoordinate(v)), isNaN(b) || (s = p.getCoordinate(b))), isNaN(i) || isNaN(n) || isNaN(l) || isNaN(l) || (a.rotate ? (r = [l, s], s = [i, n]) : (r = [i, n], s = [l, s]), l = t.line(o, r, s, e.lineColor, e.lineAlpha, e.lineThickness, e.dashLength), i = r, n = s, 0 == (d = r[1] - r[0]) && (d = .01), 0 == (c = s[1] - s[0]) && (c = .01), u = d / Math.abs(d), h = c / Math.abs(c), c = 90 * Math.PI / 180 - Math.asin(d / (d * c / Math.abs(d * c) * Math.sqrt(Math.pow(d, 2) + Math.pow(c, 2)))), d = Math.abs(5 * Math.cos(c)), c = Math.abs(5 * Math.sin(c)), i.push(r[1] - u * c, r[0] - u * c), n.push(s[1] + h * d, s[0] + h * d), s = t.polygon(o, i, n, "#ffffff", .005, 0), (o = o.set([s, l])).translate(a.marginLeftReal, a.marginTopReal), a.trendLinesSet.push(o), t.setCN(a, l, "trend-line"), t.setCN(a, l, "trend-line-" + e.id), e.line = l, e.set = o, (l = e.initialImage) && ((l = t.processObject(l, t.Image, e.theme)).chart = a, l.draw(), l.translate(i[0] + l.offsetX, n[0] + l.offsetY), o.push(l.set)), (l = e.finalImage) && ((l = t.processObject(l, t.Image, e.theme)).chart = a, l.draw(), l.translate(i[1] + l.offsetX, n[1] + l.offsetY), o.push(l.set)), o.mouseup(function() {
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
                            var e, i, n = t.chart.container;
                            t.set = n.set(), t.url ? (e = n.image(t.url, 0, 0, t.width, t.height), i = 1) : t.svgPath && ((e = n.path(t.svgPath)).setAttr("fill", t.color), e.setAttr("stroke", t.outlineColor), n = e.getBBox(), i = Math.min(t.width / n.width, t.height / n.height)), e && (e.setAttr("opacity", t.opacity), t.set.rotate(t.rotation), e.translate(-t.width / 2, -t.height / 2, i), t.balloonText && e.mouseover(function() {
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
                    t.circle = function(e, i, n, l, s, a, o, r, u) {
                        return 0 >= i && (i = .001), null != s && 0 !== s || (s = .01), void 0 === a && (a = "#000000"), void 0 === o && (o = 0), l = {
                            fill: n,
                            stroke: a,
                            "fill-opacity": l,
                            "stroke-width": s,
                            "stroke-opacity": o
                        }, e = isNaN(u) ? e.circle(0, 0, i).attr(l) : e.ellipse(0, 0, i, u).attr(l), r && e.gradient("radialGradient", [n, t.adjustLuminosity(n, -.6)]), e
                    }, t.text = function(e, i, n, l, s, a, o, r) {
                        return a || (a = "middle"), "right" == a && (a = "end"), "left" == a && (a = "start"), isNaN(r) && (r = 1), void 0 !== i && (i = String(i), t.isIE && !t.isModern && (i = (i = i.replace("&amp;", "&")).replace("&", "&amp;"))), n = {
                            fill: n,
                            "font-family": l,
                            "font-size": s + "px",
                            opacity: r
                        }, !0 === o && (n["font-weight"] = "bold"), n["text-anchor"] = a, e.text(i, n)
                    }, t.polygon = function(e, i, n, l, s, a, o, r, u, h, d) {
                        isNaN(a) && (a = .01), isNaN(r) && (r = s);
                        var c = l,
                            p = !1;
                        for ("object" == typeof c && 1 < c.length && (p = !0, c = c[0]), void 0 === o && (o = c), s = {
                                fill: c,
                                stroke: o,
                                "fill-opacity": s,
                                "stroke-width": a,
                                "stroke-opacity": r
                            }, void 0 !== d && 0 < d && (s["stroke-dasharray"] = d), d = t.dx, a = t.dy, e.handDrawn && (i = (n = t.makeHD(i, n, e.handDrawScatter))[0], n = n[1]), o = Math.round, h && (o = Number), r = "M" + (o(i[0]) + d) + "," + (o(n[0]) + a), c = 1; c < i.length; c++) h && (i[c] = t.roundTo(i[c], 5), n[c] = t.roundTo(n[c], 5)), r += " L" + (o(i[c]) + d) + "," + (o(n[c]) + a);
                        return e = e.path(r + " Z").attr(s), p && e.gradient("linearGradient", l, u), e
                    }, t.rect = function(e, i, n, l, s, a, o, r, u, h, d) {
                        if (isNaN(i) || isNaN(n)) return e.set();
                        isNaN(a) && (a = 0), void 0 === u && (u = 0), void 0 === h && (h = 270), isNaN(s) && (s = 0);
                        var c = l,
                            p = !1;
                        "object" == typeof c && (c = c[0], p = !0), void 0 === o && (o = c), void 0 === r && (r = s), i = Math.round(i), n = Math.round(n);
                        var g = 0,
                            f = 0;
                        return 0 > i && (g = -(i = Math.abs(i))), 0 > n && (f = -(n = Math.abs(n))), g += t.dx, f += t.dy, s = {
                            fill: c,
                            stroke: o,
                            "fill-opacity": s,
                            "stroke-opacity": r
                        }, void 0 !== d && 0 < d && (s["stroke-dasharray"] = d), e = e.rect(g, f, i, n, u, a).attr(s), p && e.gradient("linearGradient", l, h), e
                    }, t.bullet = function(e, i, n, l, s, a, o, r, u, h, d, c, p) {
                        var g;
                        switch ("circle" == i && (i = "round"), i) {
                            case "round":
                                g = t.circle(e, n / 2, l, s, a, o, r);
                                break;
                            case "square":
                                g = t.polygon(e, [-n / 2, n / 2, n / 2, -n / 2], [n / 2, n / 2, -n / 2, -n / 2], l, s, a, o, r, h - 180, void 0, p);
                                break;
                            case "rectangle":
                                g = t.polygon(e, [-n, n, n, -n], [n / 2, n / 2, -n / 2, -n / 2], l, s, a, o, r, h - 180, void 0, p);
                                break;
                            case "diamond":
                                g = t.polygon(e, [-n / 2, 0, n / 2, 0], [0, -n / 2, 0, n / 2], l, s, a, o, r);
                                break;
                            case "triangleUp":
                                g = t.triangle(e, n, 0, l, s, a, o, r);
                                break;
                            case "triangleDown":
                                g = t.triangle(e, n, 180, l, s, a, o, r);
                                break;
                            case "triangleLeft":
                                g = t.triangle(e, n, 270, l, s, a, o, r);
                                break;
                            case "triangleRight":
                                g = t.triangle(e, n, 90, l, s, a, o, r);
                                break;
                            case "bubble":
                                g = t.circle(e, n / 2, l, s, a, o, r, !0);
                                break;
                            case "line":
                                g = t.line(e, [-n / 2, n / 2], [0, 0], l, s, a, o, r);
                                break;
                            case "yError":
                                (g = e.set()).push(t.line(e, [0, 0], [-n / 2, n / 2], l, s, a)), g.push(t.line(e, [-u, u], [-n / 2, -n / 2], l, s, a)), g.push(t.line(e, [-u, u], [n / 2, n / 2], l, s, a));
                                break;
                            case "xError":
                                (g = e.set()).push(t.line(e, [-n / 2, n / 2], [0, 0], l, s, a)), g.push(t.line(e, [-n / 2, -n / 2], [-u, u], l, s, a)), g.push(t.line(e, [n / 2, n / 2], [-u, u], l, s, a))
                        }
                        return g && g.pattern(d, NaN, c), g
                    }, t.triangle = function(t, e, i, n, l, s, a, o) {
                        var r;
                        return void 0 !== s && 0 !== s || (s = 1), void 0 === a && (a = "#000"), void 0 === o && (o = 0), n = {
                            fill: n,
                            stroke: a,
                            "fill-opacity": l,
                            "stroke-width": s,
                            "stroke-opacity": o
                        }, e /= 2, 0 === i && (r = " M" + -e + "," + e + " L0," + -e + " L" + e + "," + e + " Z"), 180 == i && (r = " M" + -e + "," + -e + " L0," + e + " L" + e + "," + -e + " Z"), 90 == i && (r = " M" + -e + "," + -e + " L" + e + ",0 L" + -e + "," + e + " Z"), 270 == i && (r = " M" + -e + ",0 L" + e + "," + e + " L" + e + "," + -e + " Z"), t.path(r).attr(n)
                    }, t.line = function(e, i, n, l, s, a, o, r, u, h, d) {
                        if (e.handDrawn && !d) return t.handDrawnLine(e, i, n, l, s, a, o, r, u, h, d);
                        for (a = {
                                fill: "none",
                                "stroke-width": a
                            }, void 0 !== o && 0 < o && (a["stroke-dasharray"] = o), isNaN(s) || (a["stroke-opacity"] = s), l && (a.stroke = l), l = Math.round, h && (l = Number, i[0] = t.roundTo(i[0], 5), n[0] = t.roundTo(n[0], 5)), h = t.dx, s = t.dy, o = "M" + (l(i[0]) + h) + "," + (l(n[0]) + s), r = 1; r < i.length; r++) i[r] = t.roundTo(i[r], 5), n[r] = t.roundTo(n[r], 5), o += " L" + (l(i[r]) + h) + "," + (l(n[r]) + s);
                        return t.VML ? e.path(o, void 0, !0).attr(a) : (u && (o += " M0,0 L0,0"), e.path(o).attr(a))
                    }, t.makeHD = function(t, e, i) {
                        for (var n = [], l = [], s = 1; s < t.length; s++)
                            for (var a = Number(t[s - 1]), o = Number(e[s - 1]), r = Number(t[s]), u = Number(e[s]), h = Math.round(Math.sqrt(Math.pow(r - a, 2) + Math.pow(u - o, 2)) / 50) + 1, d = (r = (r - a) / h, u = (u - o) / h, 0); d <= h; d++) {
                                var c = o + d * u + Math.random() * i;
                                n.push(a + d * r + Math.random() * i), l.push(c)
                            }
                        return [n, l]
                    }, t.handDrawnLine = function(e, i, n, l, s, a, o, r, u, h) {
                        var d, c = e.set();
                        for (d = 1; d < i.length; d++)
                            for (var p = (g = t.makeHD(p = [i[d - 1], i[d]], g = [n[d - 1], n[d]], e.handDrawScatter))[0], g = g[1], f = 1; f < p.length; f++) c.push(t.line(e, [p[f - 1], p[f]], [g[f - 1], g[f]], l, s, a + Math.random() * e.handDrawThickness - e.handDrawThickness / 2, o, r, u, h, !0));
                        return c
                    }, t.doNothing = function(t) {
                        return t
                    }, t.drop = function(t, e, i, n, l, s, a, o) {
                        var r = 1 / 180 * Math.PI,
                            u = i - 20,
                            h = Math.sin(u * r) * e,
                            d = Math.cos(u * r) * e,
                            c = .8 * e,
                            p = -e / 3,
                            g = e / 3;
                        return 0 === i && (p = -p, g = 0), 180 == i && (g = 0), 90 == i && (p = 0), 270 == i && (p = 0, g = -g), i = {
                            fill: n,
                            stroke: a,
                            "stroke-width": s,
                            "stroke-opacity": o,
                            "fill-opacity": l
                        }, e = "M" + h + "," + d + " A" + e + "," + e + ",0,1,1," + Math.sin((u + 40) * r) * e + "," + Math.cos((u + 40) * r) * e + " A" + c + "," + c + ",0,0,0," + (Math.sin((u + 20) * r) * e + g) + "," + (Math.cos((u + 20) * r) * e + p), t.path(e += " A" + c + "," + c + ",0,0,0," + h + "," + d, void 0, void 0, "1000,1000").attr(i)
                    }, t.wedge = function(e, i, n, l, s, a, o, r, u, h, d, c, p, g) {
                        var f = Math.round;
                        a = f(a), o = f(o), r = f(r);
                        var m = f(o / a * r),
                            v = t.VML;
                        359.94 < (C = 359.5 + a / 100) && (C = 359.94), s >= C && (s = C);
                        var b, y, x = 1 / 180 * Math.PI,
                            C = i + Math.sin(l * x) * r,
                            w = n - Math.cos(l * x) * m,
                            k = i + Math.sin(l * x) * a,
                            S = n - Math.cos(l * x) * o,
                            M = i + Math.sin((l + s) * x) * a,
                            A = n - Math.cos((l + s) * x) * o,
                            P = i + Math.sin((l + s) * x) * r,
                            N = (x = n - Math.cos((l + s) * x) * m, {
                                fill: t.adjustLuminosity(h.fill, -.2),
                                "stroke-opacity": 0,
                                "fill-opacity": h["fill-opacity"]
                            }),
                            T = 0;
                        if (180 < Math.abs(s) && (T = 1), l = e.set(), v && (C = f(10 * C), k = f(10 * k), M = f(10 * M), P = f(10 * P), w = f(10 * w), S = f(10 * S), A = f(10 * A), x = f(10 * x), i = f(10 * i), u = f(10 * u), n = f(10 * n), a *= 10, o *= 10, r *= 10, m *= 10, 1 > Math.abs(s) && 1 >= Math.abs(M - k) && 1 >= Math.abs(A - S) && (b = !0)), s = "", c && (N["fill-opacity"] = 0, N["stroke-opacity"] = h["stroke-opacity"] / 2, N.stroke = h.stroke), 0 < u) {
                            y = " M" + C + "," + (w + u) + " L" + k + "," + (S + u), v ? (b || (y += " A" + (i - a) + "," + (u + n - o) + "," + (i + a) + "," + (u + n + o) + "," + k + "," + (S + u) + "," + M + "," + (A + u)), y += " L" + P + "," + (x + u), 0 < r && (b || (y += " B" + (i - r) + "," + (u + n - m) + "," + (i + r) + "," + (u + n + m) + "," + P + "," + (u + x) + "," + C + "," + (u + w)))) : (y += " A" + a + "," + o + ",0," + T + ",1," + M + "," + (A + u) + " L" + P + "," + (x + u), 0 < r && (y += " A" + r + "," + m + ",0," + T + ",0," + C + "," + (w + u))), y += " Z";
                            var I = u;
                            v && (I /= 10);
                            for (var O = 0; O < I; O += 10) {
                                var R = e.path(y, void 0, void 0, "1000,1000").attr(N);
                                l.push(R), R.translate(0, -O)
                            }
                            y = e.path(" M" + C + "," + w + " L" + C + "," + (w + u) + " L" + k + "," + (S + u) + " L" + k + "," + S + " L" + C + "," + w + " Z", void 0, void 0, "1000,1000").attr(N), u = e.path(" M" + M + "," + A + " L" + M + "," + (A + u) + " L" + P + "," + (x + u) + " L" + P + "," + x + " L" + M + "," + A + " Z", void 0, void 0, "1000,1000").attr(N), l.push(y), l.push(u)
                        }
                        if (v ? (b || (s = " A" + f(i - a) + "," + f(n - o) + "," + f(i + a) + "," + f(n + o) + "," + f(k) + "," + f(S) + "," + f(M) + "," + f(A)), o = " M" + f(C) + "," + f(w) + " L" + f(k) + "," + f(S) + s + " L" + f(P) + "," + f(x)) : o = " M" + C + "," + w + " L" + k + "," + S + " A" + a + "," + o + ",0," + T + ",1," + M + "," + A + " L" + P + "," + x, 0 < r && (v ? b || (o += " B" + (i - r) + "," + (n - m) + "," + (i + r) + "," + (n + m) + "," + P + "," + x + "," + C + "," + w) : o += " A" + r + "," + m + ",0," + T + ",0," + C + "," + w), e.handDrawn && (r = t.line(e, [C, k], [w, S], h.stroke, h.thickness * Math.random() * e.handDrawThickness, h["stroke-opacity"]), l.push(r)), e = e.path(o + " Z", void 0, void 0, "1000,1000").attr(h), d) {
                            for (r = [], m = 0; m < d.length; m++) r.push(t.adjustLuminosity(h.fill, d[m]));
                            "radial" != g || t.isModern || (r = []), 0 < r.length && e.gradient(g + "Gradient", r)
                        }
                        return t.isModern && "radial" == g && e.grad && (e.grad.setAttribute("gradientUnits", "userSpaceOnUse"), e.grad.setAttribute("r", a), e.grad.setAttribute("cx", i), e.grad.setAttribute("cy", n)), e.pattern(c, NaN, p), l.wedge = e, l.push(e), l
                    }, t.rgb2hex = function(t) {
                        return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
                    }, t.adjustLuminosity = function(e, i) {
                        e && -1 != e.indexOf("rgb") && (e = t.rgb2hex(e)), 6 > (e = String(e).replace(/[^0-9a-f]/gi, "")).length && (e = String(e[0]) + String(e[0]) + String(e[1]) + String(e[1]) + String(e[2]) + String(e[2])), i = i || 0;
                        var n, l, s = "#";
                        for (l = 0; 3 > l; l++) n = parseInt(e.substr(2 * l, 2), 16), s += ("00" + (n = Math.round(Math.min(Math.max(0, n + n * i), 255)).toString(16))).substr(n.length);
                        return s
                    }
                }(),
                function() {
                    var t = window.AmCharts;
                    t.Bezier = t.Class({
                        construct: function(e, i, n, l, s, a, o, r, u, h, d) {
                            var c, p, g = e.chart,
                                f = t.bezierX,
                                m = t.bezierY;
                            for (isNaN(g.bezierX) || (f = g.bezierX), isNaN(g.bezierY) || (m = g.bezierY), isNaN(f) && (g.rotate ? (f = 20, m = 4) : (m = 20, f = 4)), "object" == typeof o && 1 < o.length && (p = !0, c = o, o = o[0]), "object" == typeof r && (r = r[0]), 0 === r && (o = "none"), a = {
                                    fill: o,
                                    "fill-opacity": r,
                                    "stroke-width": a
                                }, void 0 !== u && 0 < u && (a["stroke-dasharray"] = u), isNaN(s) || (a["stroke-opacity"] = s), l && (a.stroke = l), l = "M" + Math.round(i[0]) + "," + Math.round(n[0]) + " ", s = [], u = 0; u < i.length; u++) isNaN(i[u]) || isNaN(n[u]) ? (l += this.drawSegment(s, f, m), u < i.length - 1 && (l += "L" + i[u + 1] + "," + n[u + 1] + " "), s = []) : s.push({
                                x: Number(i[u]),
                                y: Number(n[u])
                            });
                            l += this.drawSegment(s, f, m), h && (l += h), this.path = e.path(l).attr(a), this.node = this.path.node, p && this.path.gradient("linearGradient", c, d)
                        },
                        drawSegment: function(t, e, i) {
                            var n = "";
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
                                        y: o((i * s[1].y - s[0].y + s[2].y) / i)
                                    }), a.push({
                                        x: o((s[1].x + e * s[2].x - s[3].x) / e),
                                        y: o((s[1].y + i * s[2].y - s[3].y) / i)
                                    }), a.push({
                                        x: o(s[2].x),
                                        y: o(s[2].y)
                                    }), n += "C" + a[1].x + "," + a[1].y + "," + a[2].x + "," + a[2].y + "," + a[3].x + "," + a[3].y + " "
                                } else 1 < t.length && (n += "L" + t[1].x + "," + t[1].y);
                            return n
                        }
                    })
                }(),
                function() {
                    var t = window.AmCharts;
                    t.AmDraw = t.Class({
                        construct: function(e, i, n, l) {
                            t.SVG_NS = "http://www.w3.org/2000/svg", t.SVG_XLINK = "http://www.w3.org/1999/xlink", t.hasSVG = !!document.createElementNS && !!document.createElementNS(t.SVG_NS, "svg").createSVGRect, 1 > i && (i = 10), 1 > n && (n = 10), this.div = e, this.width = i, this.height = n, this.rBin = document.createElement("div"), t.hasSVG ? (t.SVG = !0, i = this.createSvgElement("svg"), e.appendChild(i), this.container = i, this.addDefs(l), this.R = new t.SVGRenderer(this)) : t.isIE && t.VMLRenderer && (t.VML = !0, t.vmlStyleSheet || (document.namespaces.add("amvml", "urn:schemas-microsoft-com:vml"), 31 > document.styleSheets.length ? ((i = document.createStyleSheet()).addRule(".amvml", "behavior:url(#default#VML); display:inline-block; antialias:true"), t.vmlStyleSheet = i) : document.styleSheets[0].addRule(".amvml", "behavior:url(#default#VML); display:inline-block; antialias:true")), this.container = e, this.R = new t.VMLRenderer(this, l), this.R.disableSelection(e))
                        },
                        createSvgElement: function(e) {
                            return document.createElementNS(t.SVG_NS, e)
                        },
                        circle: function(e, i, n, l) {
                            var s = new t.AmDObject("circle", this);
                            return s.attr({
                                r: n,
                                cx: e,
                                cy: i
                            }), this.addToContainer(s.node, l), s
                        },
                        ellipse: function(e, i, n, l, s) {
                            var a = new t.AmDObject("ellipse", this);
                            return a.attr({
                                rx: n,
                                ry: l,
                                cx: e,
                                cy: i
                            }), this.addToContainer(a.node, s), a
                        },
                        setSize: function(t, e) {
                            0 < t && 0 < e && (this.container.style.width = t + "px", this.container.style.height = e + "px")
                        },
                        rect: function(e, i, n, l, s, a, o) {
                            var r = new t.AmDObject("rect", this);
                            return t.VML && (s = Math.round(100 * s / Math.min(n, l)), n += 2 * a, l += 2 * a, r.bw = a, r.node.style.marginLeft = -a, r.node.style.marginTop = -a), 1 > n && (n = 1), 1 > l && (l = 1), r.attr({
                                x: e,
                                y: i,
                                width: n,
                                height: l,
                                rx: s,
                                ry: s,
                                "stroke-width": a
                            }), this.addToContainer(r.node, o), r
                        },
                        image: function(e, i, n, l, s, a) {
                            var o = new t.AmDObject("image", this);
                            return o.attr({
                                x: i,
                                y: n,
                                width: l,
                                height: s
                            }), this.R.path(o, e), this.addToContainer(o.node, a), o
                        },
                        addToContainer: function(t, e) {
                            e || (e = this.container), e.appendChild(t)
                        },
                        text: function(t, e, i) {
                            return this.R.text(t, e, i)
                        },
                        path: function(e, i, n, l) {
                            var s = new t.AmDObject("path", this);
                            return l || (l = "100,100"), s.attr({
                                cs: l
                            }), s.attr(n ? {
                                dd: e
                            } : {
                                d: e
                            }), this.addToContainer(s.node, i), s
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
                                var i = t.getBoundingClientRect(),
                                    n = i.left - Math.round(i.left),
                                    l = i.top - Math.round(i.top);
                                n && (e.left = n + "px"), l && (e.top = l + "px")
                            } catch (s) {}
                        },
                        update: function() {
                            this.R.update()
                        },
                        addDefs: function(e) {
                            if (t.hasSVG) {
                                var i = this.createSvgElement("desc"),
                                    n = this.container;
                                if (n.setAttribute("version", "1.1"), n.style.position = "absolute", this.setSize(this.width, this.height), e.accessibleTitle) {
                                    var l = this.createSvgElement("text");
                                    n.appendChild(l), l.innerHTML = e.accessibleTitle, l.style.opacity = 0
                                }
                                t.rtl && (n.setAttribute("direction", "rtl"), n.style.left = "auto", n.style.right = "0px"), e && (e.addCodeCredits && i.appendChild(document.createTextNode("JavaScript chart by amCharts " + e.version)), e.accessibleDescription && (i.innerHTML = "", i.appendChild(document.createTextNode(e.accessibleDescription))), n.appendChild(i), e.defs && (i = this.createSvgElement("defs"), n.appendChild(i), t.parseDefs(e.defs, i), this.defs = i))
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
                        clipRect: function(t, e, i, n) {
                            this.R.clipRect(this, t, e, i, n)
                        },
                        translate: function(t, e, i, n) {
                            n || (t = Math.round(t), e = Math.round(e)), this.R.move(this, t, e, i), this.x = t, this.y = e, this.scale = i, this.angle && this.rotate(this.angle)
                        },
                        rotate: function(t, e) {
                            this.R.rotate(this, t, e), this.angle = t
                        },
                        animate: function(e, i, n) {
                            for (var l in e)
                                if (e.hasOwnProperty(l)) {
                                    var s = l,
                                        a = e[l];
                                    n = t.getEffect(n), this.R.animate(this, s, a, i, n)
                                }
                        },
                        push: function(t) {
                            if (t) {
                                var e = this.node;
                                e.appendChild(t.node);
                                var i = t.clipPath;
                                i && e.appendChild(i), (t = t.grad) && e.appendChild(t)
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
                                    var i = e.firstChild;
                                    i && e.insertBefore(t, i)
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
                        gradient: function(t, e, i) {
                            this.R.gradient(this, t, e, i)
                        },
                        pattern: function(t, e, i) {
                            t && this.R.pattern(this, t, e, i)
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
                            var i;
                            if ("group" == e) i = document.createElement("div"), t.type = "div";
                            else if ("text" == e) i = document.createElement("div"), t.type = "text";
                            else if ("image" == e) i = document.createElement("img"), t.type = "image";
                            else {
                                t.type = "shape", t.shapeType = this.cNames[e], i = document.createElement("amvml:" + this.cNames[e]);
                                var n = document.createElement("amvml:stroke");
                                i.appendChild(n), t.stroke = n;
                                var l = document.createElement("amvml:fill");
                                i.appendChild(l), t.fill = l, l.className = "amvml", n.className = "amvml", i.className = "amvml"
                            }
                            return i.style.position = "absolute", i.style.top = 0, i.style.left = 0, i
                        },
                        path: function(t, e) {
                            t.node.setAttribute("src", e)
                        },
                        setAttr: function(e, i, n) {
                            if (void 0 !== n) {
                                var l;
                                8 === document.documentMode && (l = !0);
                                var s = e.node,
                                    a = e.type,
                                    o = s.style;
                                "r" == i && (o.width = 2 * n, o.height = 2 * n), "oval" == e.shapeType && ("rx" == i && (o.width = 2 * n), "ry" == i && (o.height = 2 * n)), "roundrect" == e.shapeType && ("width" != i && "height" != i || --n), "cursor" == i && (o.cursor = n), "cx" == i && (o.left = n - t.removePx(o.width) / 2), "cy" == i && (o.top = n - t.removePx(o.height) / 2);
                                var r = this.styleMap[i];
                                if ("width" == r && 0 > n && (n = 0), void 0 !== r && (o[r] = n), "text" == a && ("text-anchor" == i && (e.anchor = n, r = s.clientWidth, "end" == n && (o.marginLeft = -r + "px"), "middle" == n && (o.marginLeft = -r / 2 + "px", o.textAlign = "center"), "start" == n && (o.marginLeft = "0px")), "fill" == i && (o.color = n), "font-weight" == i && (o.fontWeight = n)), o = e.children)
                                    for (r = 0; r < o.length; r++) o[r].setAttr(i, n);
                                "shape" == a && ("cs" == i && (s.style.width = "100px", s.style.height = "100px", s.setAttribute("coordsize", n)), "d" == i && s.setAttribute("path", this.svgPathToVml(n)), "dd" == i && s.setAttribute("path", n), a = e.stroke, e = e.fill, "stroke" == i && (l ? a.color = n : a.setAttribute("color", n)), "stroke-width" == i && (l ? a.weight = n : a.setAttribute("weight", n)), "stroke-opacity" == i && (l ? a.opacity = n : a.setAttribute("opacity", n)), "stroke-dasharray" == i && (o = "solid", 0 < n && 3 > n && (o = "dot"), 3 <= n && 6 >= n && (o = "dash"), 6 < n && (o = "longdash"), l ? a.dashstyle = o : a.setAttribute("dashstyle", o)), "fill-opacity" != i && "opacity" != i || (0 === n ? l ? e.on = !1 : e.setAttribute("on", !1) : l ? e.opacity = n : e.setAttribute("opacity", n)), "fill" == i && (l ? e.color = n : e.setAttribute("color", n)), "rx" == i && (l ? s.arcSize = n + "%" : s.setAttribute("arcsize", n + "%")))
                            }
                        },
                        attr: function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && this.setAttr(t, i, e[i])
                        },
                        text: function(e, i, n) {
                            var l = new t.AmDObject("text", this.D),
                                s = l.node;
                            return s.style.whiteSpace = "pre", s.innerHTML = e, this.D.addToContainer(s, n), this.attr(l, i), l
                        },
                        getBBox: function(t) {
                            return this.getBox(t.node)
                        },
                        getBox: function(t) {
                            var e, i = t.offsetLeft,
                                n = t.offsetTop,
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
                                0 > a && (i += a), 0 > o && (n += o)
                            }
                            return {
                                x: i,
                                y: n,
                                width: l,
                                height: s
                            }
                        },
                        setText: function(t, e) {
                            var i = t.node;
                            i && (i.innerHTML = e), this.setAttr(t, "text-anchor", t.anchor)
                        },
                        addListener: function(t, e, i) {
                            t.node["on" + e] = i
                        },
                        move: function(e, i, n) {
                            var l = e.node,
                                s = l.style;
                            "text" == e.type && (n -= t.removePx(s.fontSize) / 2 - 1), "oval" == e.shapeType && (i -= t.removePx(s.width) / 2, n -= t.removePx(s.height) / 2), e = e.bw, isNaN(e) || (i -= e, n -= e), isNaN(i) || isNaN(n) || (l.style.left = i + "px", l.style.top = n + "px")
                        },
                        svgPathToVml: function(t) {
                            var e = t.split(" ");
                            t = "";
                            var i, n, l = Math.round;
                            for (n = 0; n < e.length; n++) {
                                var s, a = (s = e[n]).substring(0, 1),
                                    o = (s = s.substring(1)).split(","),
                                    r = l(o[0]) + "," + l(o[1]);
                                if ("M" == a && (t += " m " + r), "L" == a && (t += " l " + r), "Z" == a && (t += " x e"), "Q" == a) {
                                    var u = i.length,
                                        h = i[u - 1],
                                        d = o[0],
                                        c = o[1],
                                        p = (r = o[2], o[3]);
                                    t += " c " + (i = l(i[u - 2] / 3 + 2 / 3 * d)) + "," + (h = l(h / 3 + 2 / 3 * c)) + "," + (d = l(2 / 3 * d + r / 3)) + "," + (c = l(2 / 3 * c + p / 3)) + "," + r + "," + p
                                }
                                "C" == a && (t += " c " + o[0] + "," + o[1] + "," + o[2] + "," + o[3] + "," + o[4] + "," + o[5]), "A" == a && (t += " wa " + s), "B" == a && (t += " at " + s), i = o
                            }
                            return t
                        },
                        animate: function(t, e, i, n, l) {
                            var s = t.node,
                                a = this.chart;
                            if (t.animationFinished = !1, "translate" == e) {
                                e = i.split(","), i = e[1];
                                var o = s.offsetTop;
                                a.animate(t, "left", s.offsetLeft, e[0], n, l, "px"), a.animate(t, "top", o, i, n, l, "px")
                            }
                        },
                        clipRect: function(t, e, i, n, l) {
                            t = t.node, 0 === e && 0 === i ? (t.style.width = n + "px", t.style.height = l + "px", t.style.overflow = "hidden") : t.style.clip = "rect(" + i + "px " + (e + n) + "px " + (i + l) + "px " + e + "px)"
                        },
                        rotate: function(e, i, n) {
                            if (0 !== Number(i)) {
                                e = (u = e.node).style, n || (n = this.getBGColor(u.parentNode)), e.backgroundColor = n, e.paddingLeft = 1, n = i * Math.PI / 180;
                                var l = Math.cos(n),
                                    s = Math.sin(n),
                                    a = t.removePx(e.left),
                                    o = t.removePx(e.top),
                                    r = u.offsetWidth,
                                    u = u.offsetHeight;
                                i /= Math.abs(i), e.left = a + r / 2 - r / 2 * Math.cos(n) - i * u / 2 * Math.sin(n) + 3, e.top = o - i * r / 2 * Math.sin(n) + i * u / 2 * Math.sin(n), e.cssText = e.cssText + "; filter:progid:DXImageTransform.Microsoft.Matrix(M11='" + l + "', M12='" + -s + "', M21='" + s + "', M22='" + l + "', sizingmethod='auto expand');"
                            }
                        },
                        getBGColor: function(t) {
                            var e = "#FFFFFF";
                            if (t.style) {
                                var i = t.style.backgroundColor;
                                "" !== i ? e = i : t.parentNode && (e = this.getBGColor(t.parentNode))
                            }
                            return e
                        },
                        set: function(e) {
                            var i, n = new t.AmDObject("group", this.D);
                            if (this.D.container.appendChild(n.node), e)
                                for (i = 0; i < e.length; i++) n.push(e[i]);
                            return n
                        },
                        gradient: function(t, e, i, n) {
                            var l, s = "";
                            for ("radialGradient" == e && (e = "gradientradial", i.reverse()), "linearGradient" == e && (e = "gradient"), l = 0; l < i.length; l++) s += Math.round(100 * l / (i.length - 1)) + "% " + i[l], l < i.length - 1 && (s += ",");
                            t = t.fill, 90 == n ? n = 0 : 270 == n ? n = 180 : 180 == n ? n = 90 : 0 === n && (n = 270), 8 === document.documentMode ? (t.type = e, t.angle = n) : (t.setAttribute("type", e), t.setAttribute("angle", n)), s && (t.colors.value = s)
                        },
                        remove: function(t) {
                            t.clipPath && this.D.remove(t.clipPath), this.D.remove(t.node)
                        },
                        disableSelection: function(t) {
                            t.onselectstart = function() {
                                return !1
                            }, t.style.cursor = "default"
                        },
                        pattern: function(e, i, n, l) {
                            n = e.node, e = e.fill;
                            var s = "none";
                            i.color && (s = i.color), n.fillColor = s, t.isAbsolute(i = i.url) || (i = l + i), 8 === document.documentMode ? (e.type = "tile", e.src = i) : (e.setAttribute("type", "tile"), e.setAttribute("src", i))
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
                        create: function(e, i) {
                            return document.createElementNS(t.SVG_NS, i)
                        },
                        attr: function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && this.setAttr(t, i, e[i])
                        },
                        setAttr: function(t, e, i) {
                            void 0 !== i && t.node.setAttribute(e, i)
                        },
                        animate: function(e, i, n, l, s) {
                            e.animationFinished = !1;
                            var a = e.node;
                            e["an_" + i] && t.removeFromArray(this.animations, e["an_" + i]), "translate" == i ? 0 === (a = (a = (a = (a = a.getAttribute("transform")) ? String(a).substring(10, a.length - 1) : "0,0").split(", ").join(" ")).split(" ").join(",")) && (a = "0,0") : a = Number(a.getAttribute(i)), this.animations.push(n = {
                                obj: e,
                                frame: 0,
                                attribute: i,
                                from: a,
                                to: n,
                                time: l,
                                effect: s
                            }), e["an_" + i] = n
                        },
                        update: function() {
                            var e, i = this.animations;
                            for (e = i.length - 1; 0 <= e; e--) {
                                var n, l, s, a = i[e],
                                    o = a.time * t.updateRate,
                                    r = a.frame + 1,
                                    u = a.obj,
                                    h = a.attribute;
                                if (r <= o) {
                                    if (a.frame++, "translate" == h) {
                                        if (n = a.from.split(","), h = Number(n[0]), n = Number(n[1]), isNaN(n) && (n = 0), l = a.to.split(","), s = Number(l[0]), l = Number(l[1]), s = 0 == s - h ? s : Math.round(t[a.effect](0, r, h, s - h, o)), a = 0 == l - n ? l : Math.round(t[a.effect](0, r, n, l - n, o)), h = "transform", isNaN(s) || isNaN(a)) continue;
                                        a = "translate(" + s + "," + a + ")"
                                    } else l = Number(a.from), n = Number(a.to), a = t[a.effect](0, r, l, s = n - l, o), isNaN(a) && (a = n), 0 === s && this.animations.splice(e, 1);
                                    this.setAttr(u, h, a)
                                } else "translate" == h ? (l = a.to.split(","), s = Number(l[0]), l = Number(l[1]), u.translate(s, l)) : (n = Number(a.to), this.setAttr(u, h, n)), u.animationFinished = !0, this.animations.splice(e, 1)
                            }
                        },
                        getBBox: function(t) {
                            if (t = t.node) try {
                                return t.getBBox()
                            } catch (e) {}
                            return {
                                width: 0,
                                height: 0,
                                x: 0,
                                y: 0
                            }
                        },
                        path: function(e, i) {
                            e.node.setAttributeNS(t.SVG_XLINK, "xlink:href", i)
                        },
                        clipRect: function(e, i, n, l, s) {
                            var a = e.node,
                                o = e.clipPath;
                            o && this.D.remove(o);
                            var r = a.parentNode;
                            r && (a = document.createElementNS(t.SVG_NS, "clipPath"), o = t.getUniqueId(), a.setAttribute("id", o), this.D.rect(i, n, l, s, 0, 0, a), r.appendChild(a), i = "#", t.baseHref && !t.isIE && (i = this.removeTarget(window.location.href) + i), this.setAttr(e, "clip-path", "url(" + i + o + ")"), this.clipPathC++, e.clipPath = a)
                        },
                        text: function(e, i, n) {
                            var l = new t.AmDObject("text", this.D);
                            e = String(e).split("\n");
                            var s, a = t.removePx(i["font-size"]);
                            for (s = 0; s < e.length; s++) {
                                var o = this.create(null, "tspan");
                                o.appendChild(document.createTextNode(e[s])), o.setAttribute("y", (a + 2) * s + Math.round(a / 2)), o.setAttribute("x", 0), l.node.appendChild(o)
                            }
                            return l.node.setAttribute("y", Math.round(a / 2)), this.attr(l, i), this.D.addToContainer(l.node, n), l
                        },
                        setText: function(t, e) {
                            var i = t.node;
                            i && (i.removeChild(i.firstChild), i.appendChild(document.createTextNode(e)))
                        },
                        move: function(t, e, i, n) {
                            isNaN(e) && (e = 0), isNaN(i) && (i = 0), e = "translate(" + e + "," + i + ")", n && (e = e + " scale(" + n + ")"), this.setAttr(t, "transform", e)
                        },
                        rotate: function(t, e) {
                            var i = t.node.getAttribute("transform"),
                                n = "rotate(" + e + ")";
                            i && (n = i + " " + n), this.setAttr(t, "transform", n)
                        },
                        set: function(e) {
                            var i, n = new t.AmDObject("g", this.D);
                            if (this.D.container.appendChild(n.node), e)
                                for (i = 0; i < e.length; i++) n.push(e[i]);
                            return n
                        },
                        addListener: function(t, e, i) {
                            t.node["on" + e] = i
                        },
                        gradient: function(e, i, n, l) {
                            var s = e.node,
                                a = e.grad;
                            if (a && this.D.remove(a), i = document.createElementNS(t.SVG_NS, i), a = t.getUniqueId(), i.setAttribute("id", a), !isNaN(l)) {
                                var o = 0,
                                    r = 0,
                                    u = 0,
                                    h = 0;
                                90 == l ? u = 100 : 270 == l ? h = 100 : 180 == l ? o = 100 : 0 === l && (r = 100), i.setAttribute("x1", o + "%"), i.setAttribute("x2", r + "%"), i.setAttribute("y1", u + "%"), i.setAttribute("y2", h + "%")
                            }
                            for (l = 0; l < n.length; l++) o = document.createElementNS(t.SVG_NS, "stop"), r = 100 * l / (n.length - 1), 0 === l && (r = 0), o.setAttribute("offset", r + "%"), o.setAttribute("stop-color", n[l]), i.appendChild(o);
                            s.parentNode.appendChild(i), n = "#", t.baseHref && !t.isIE && (n = this.removeTarget(window.location.href) + n), s.setAttribute("fill", "url(" + n + a + ")"), e.grad = i
                        },
                        removeTarget: function(t) {
                            return t.split("#")[0]
                        },
                        pattern: function(e, i, n, l) {
                            var s = e.node;
                            isNaN(n) && (n = 1), (a = e.patternNode) && this.D.remove(a);
                            var a = document.createElementNS(t.SVG_NS, "pattern"),
                                o = t.getUniqueId(),
                                r = i;
                            i.url && (r = i.url), t.isAbsolute(r) || -1 != r.indexOf("data:image") || (r = l + r), l = Number(i.width), isNaN(l) && (l = 4);
                            var u = Number(i.height);
                            isNaN(u) && (u = 4), l /= n, u /= n, n = i.x, isNaN(n) && (n = 0);
                            var h = -Math.random() * Number(i.randomX);
                            isNaN(h) || (n = h), h = i.y, isNaN(h) && (h = 0);
                            var d = -Math.random() * Number(i.randomY);
                            isNaN(d) || (h = d), a.setAttribute("id", o), a.setAttribute("width", l), a.setAttribute("height", u), a.setAttribute("patternUnits", "userSpaceOnUse"), a.setAttribute("xlink:href", r), i.color && ((d = document.createElementNS(t.SVG_NS, "rect")).setAttributeNS(null, "height", l), d.setAttributeNS(null, "width", u), d.setAttributeNS(null, "fill", i.color), a.appendChild(d)), this.D.image(r, 0, 0, l, u, a).translate(n, h), r = "#", t.baseHref && !t.isIE && (r = this.removeTarget(window.location.href) + r), s.setAttribute("fill", "url(" + r + o + ")"), e.patternNode = a, s.parentNode.appendChild(a)
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
                                i = this.position,
                                n = this.width,
                                l = e.divRealWidth,
                                s = e.divRealHeight,
                                a = this.div,
                                o = this.legendData;
                            if (this.data && (o = this.combineLegend ? this.legendData.concat(this.data) : this.data), isNaN(this.fontSize) && (this.fontSize = e.fontSize), this.maxColumnsReal = this.maxColumns, "right" == i || "left" == i) this.maxColumnsReal = 1, this.autoMargins && (this.marginLeft = this.marginRight = 10);
                            else if (this.autoMargins) {
                                this.marginRight = e.marginRight, this.marginLeft = e.marginLeft;
                                var r = e.autoMarginOffset;
                                "bottom" == i ? (this.marginBottom = r, this.marginTop = 0) : (this.marginTop = r, this.marginBottom = 0)
                            }
                            if (n = void 0 !== n ? t.toCoordinate(n, l) : "right" != i && "left" != i ? e.realWidth : 0 < this.ieW ? this.ieW : e.realWidth, "outside" == i ? (n = a.offsetWidth, s = a.offsetHeight, a.clientHeight && (n = a.clientWidth, s = a.clientHeight)) : (isNaN(n) || (a.style.width = n + "px"), a.className = "amChartsLegend " + e.classNamePrefix + "-legend-div"), this.divWidth = n, (i = this.container) ? (i.container.innerHTML = "", a.appendChild(i.container), i.width = n, i.height = s, i.setSize(n, s), i.addDefs(e)) : i = new t.AmDraw(a, n, s, e), this.container = i, this.lx = 0, this.ly = 8, (s = this.markerSize) > this.fontSize && (this.ly = s / 2 - 1), 0 < s && (this.lx += s + this.markerLabelGap), this.titleWidth = 0, (s = this.title) && (s = t.text(this.container, s, this.color, e.fontFamily, this.fontSize, "start", !0), t.setCN(e, s, "legend-title"), s.translate(this.marginLeft, this.marginTop + this.verticalGap + this.ly + 1), e = s.getBBox(), this.titleWidth = e.width + 15, this.titleHeight = e.height + 6), this.index = this.maxLabelWidth = 0, this.showEntries) {
                                for (e = 0; e < o.length; e++) this.createEntry(o[e]);
                                for (e = this.index = 0; e < o.length; e++) this.createValue(o[e])
                            }
                            this.arrangeEntries(), this.updateValues()
                        },
                        arrangeEntries: function() {
                            var e = this.position,
                                i = this.marginLeft + this.titleWidth,
                                n = this.marginRight,
                                l = this.marginTop,
                                s = this.marginBottom,
                                a = this.horizontalGap,
                                o = this.div,
                                r = this.divWidth,
                                u = this.maxColumnsReal,
                                h = this.verticalGap,
                                d = this.spacing,
                                c = r - n - i,
                                p = 0,
                                g = 0,
                                f = this.container;
                            this.set && this.set.remove();
                            var m = f.set();
                            this.set = m;
                            var v = f.set();
                            m.push(v);
                            var b, y, x = this.entries;
                            for (y = 0; y < x.length; y++)(C = (b = x[y].getBBox()).width) > p && (p = C), (b = b.height) > g && (g = b);
                            var C = g = 0,
                                w = a,
                                k = 0,
                                S = 0;
                            for (y = 0; y < x.length; y++) {
                                var M, A = x[y];
                                this.reversedOrder && (A = x[x.length - y - 1]), b = A.getBBox(), this.equalWidths ? M = C * (p + d + this.markerLabelGap) : (M = w, w = w + b.width + a + d), M + b.width > c && 0 < y && 0 !== C && (g++, w = (M = C = 0) + b.width + a + d, k = k + S + h, S = 0), b.height > S && (S = b.height), A.translate(M, k), C++, !isNaN(u) && C >= u && (C = 0, g++, k = k + S + h, w = a, S = 0), v.push(A)
                            }
                            u = (b = v.getBBox()).height + 2 * h - 1, "left" == e || "right" == e ? (o.style.width = (r = (d = b.width + 2 * a) + i + n) + "px", this.ieW = r) : d = r - i - n - 1, n = t.polygon(this.container, [0, d, d, 0], [0, 0, u, u], this.backgroundColor, this.backgroundAlpha, 1, this.borderColor, this.borderAlpha), t.setCN(this.chart, n, "legend-bg"), m.push(n), m.translate(i, l), n.toBack(), i = a, "top" != e && "bottom" != e && "absolute" != e && "outside" != e || ("center" == this.align ? i = a + (d - b.width) / 2 : "right" == this.align && (i = a + d - b.width)), v.translate(i, h + 1), this.titleHeight > u && (u = this.titleHeight), 0 > (l = u + l + s + 1) && (l = 0), "absolute" != e && "outside" != e && l > this.chart.divRealHeight && (o.style.top = "0px"), o.style.height = Math.round(l) + "px", f.setSize(this.divWidth, l)
                        },
                        createEntry: function(e) {
                            if (!1 !== e.visibleInLegend && !e.hideFromLegend) {
                                var i = this,
                                    n = i.chart,
                                    l = i.useGraphSettings,
                                    s = e.markerType;
                                s && (l = !1), e.legendEntryWidth = i.markerSize, s || (s = i.markerType);
                                var a, o = e.color,
                                    r = e.alpha;
                                e.legendKeyColor && (o = e.legendKeyColor()), e.legendKeyAlpha && (r = e.legendKeyAlpha()), !0 === e.hidden && (a = o = i.markerDisabledColor);
                                var u, h = e.pattern,
                                    d = e.customMarker;
                                d || (d = i.customMarker);
                                var c, p, g = i.container,
                                    f = i.markerSize,
                                    m = 0,
                                    v = 0,
                                    b = f / 2;
                                if (l) l = e.type, i.switchType = void 0, "line" == l || "step" == l || "smoothedLine" == l || "ohlc" == l ? (u = g.set(), e.hidden || (o = e.lineColorR, a = e.bulletBorderColorR), m = t.line(g, [0, 2 * f], [f / 2, f / 2], o, e.lineAlpha, e.lineThickness, e.dashLength), t.setCN(n, m, "graph-stroke"), u.push(m), e.bullet && (e.hidden || (o = e.bulletColorR), m = t.bullet(g, e.bullet, e.bulletSize, o, e.bulletAlpha, e.bulletBorderThickness, a, e.bulletBorderAlpha)) && (t.setCN(n, m, "graph-bullet"), m.translate(f + 1, f / 2), u.push(m)), b = 0, m = f, v = f / 3) : (e.getGradRotation && 0 === (u = e.getGradRotation()) && (u = 180), m = e.fillColorsR, !0 === e.hidden && (m = o), (u = i.createMarker("rectangle", m, e.fillAlphas, e.lineThickness, o, e.lineAlpha, u, h, e.dashLength)) && u.translate(b = f, f / 2), m = f), t.setCN(n, u, "graph-" + l), t.setCN(n, u, "graph-" + e.id);
                                else if (d) u = g.image(d, 0, 0, f, f);
                                else {
                                    var y;
                                    isNaN(i.gradientRotation) || (y = 180 + i.gradientRotation), (u = i.createMarker(s, o, r, void 0, void 0, void 0, y, h)) && u.translate(f / 2, f / 2)
                                }
                                t.setCN(n, u, "legend-marker"), i.addListeners(u, e), g = g.set([u]), i.switchable && e.switchable && g.setAttr("cursor", "pointer"), void 0 !== e.id && t.setCN(n, g, "legend-item-" + e.id), t.setCN(n, g, e.className, !0), (a = i.switchType) && "none" != a && 0 < f && ("x" == a ? (c = i.createX()).translate(f / 2, f / 2) : c = i.createV(), c.dItem = e, !0 !== e.hidden ? "x" == a ? c.hide() : c.show() : "x" != a && c.hide(), i.switchable || c.hide(), i.addListeners(c, e), e.legendSwitch = c, g.push(c), t.setCN(n, c, "legend-switch")), a = i.color, e.showBalloon && i.textClickEnabled && void 0 !== i.selectedColor && (a = i.selectedColor), i.useMarkerColorForLabels && !h && (a = o), !0 === e.hidden && (a = i.markerDisabledColor), o = t.massReplace(i.labelText, {
                                    "[[title]]": e.title
                                }), void 0 !== i.tabIndex && (g.setAttr("tabindex", i.tabIndex), g.setAttr("role", "menuitem"), g.keyup(function(t) {
                                    13 == t.keyCode && i.clickMarker(e, t)
                                })), n.accessible && i.accessibleLabel && (h = t.massReplace(i.accessibleLabel, {
                                    "[[title]]": e.title
                                }), n.makeAccessible(g, h)), h = i.fontSize, u && (f <= h && (u.translate(b, f = f / 2 + i.ly - h / 2 + (h + 2 - f) / 2 - v), c && c.translate(c.x, f)), e.legendEntryWidth = u.getBBox().width), o && (o = t.fixBrakes(o), e.legendTextReal = o, p = i.labelWidth, p = isNaN(p) ? t.text(i.container, o, a, n.fontFamily, h, "start") : t.wrappedText(i.container, o, a, n.fontFamily, h, "start", !1, p, 0), t.setCN(n, p, "legend-label"), p.translate(i.lx + m, i.ly), g.push(p), i.labelDx = m, n = p.getBBox().width, i.maxLabelWidth < n && (i.maxLabelWidth = n)), i.entries[i.index] = g, e.legendEntry = i.entries[i.index], e.legendMarker = u, e.legendLabel = p, i.index++
                            }
                        },
                        addListeners: function(t, e) {
                            var i = this;
                            t && t.mouseover(function(t) {
                                i.rollOverMarker(e, t)
                            }).mouseout(function(t) {
                                i.rollOutMarker(e, t)
                            }).click(function(t) {
                                i.clickMarker(e, t)
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
                                var i = this.color;
                                void 0 !== this.selectedColor && t.showBalloon && (i = this.selectedColor), this.useMarkerColorForLabels && void 0 === (i = t.lineColor) && (i = t.color), t.legendLabel.attr({
                                    fill: i
                                })
                            }
                            this.dispatch("rollOutItem", t, e)
                        },
                        clickLabel: function(t, e) {
                            this.textClickEnabled ? t.hidden || this.dispatch("clickLabel", t, e) : this.switchable && this.dispatch(!0 === t.hidden ? "showItem" : "hideItem", t, e)
                        },
                        dispatch: function(t, e, i) {
                            t = {
                                type: t,
                                dataItem: e,
                                target: this,
                                event: i,
                                chart: this.chart
                            }, this.chart && this.chart.handleLegendEvent(t), this.fire(t)
                        },
                        createValue: function(e) {
                            var i = this,
                                n = i.fontSize,
                                l = i.chart;
                            if (!1 !== e.visibleInLegend && !e.hideFromLegend) {
                                var s = i.maxLabelWidth,
                                    a = 0;
                                i.forceWidth && (s = i.labelWidth), i.equalWidths || (i.valueAlign = "left"), a = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }, e.legendLabel && (a = e.legendLabel.getBBox()), "left" == i.valueAlign && (s = a.width), a = a.height;
                                var o = s,
                                    r = i.markerSize;
                                if (r < n + 7 && (r = n + 7, t.VML && (r += 3)), i.valueText && 0 < i.valueWidth) {
                                    var u = i.color;
                                    i.useMarkerColorForValues && (u = e.color, e.legendKeyColor && (u = e.legendKeyColor())), !0 === e.hidden && (u = i.markerDisabledColor), s = s + i.lx + i.labelDx + i.markerLabelGap + i.valueWidth;
                                    var h = "end";
                                    "left" == i.valueAlign && (s -= i.valueWidth, h = "start"), n = t.text(i.container, i.valueText, u, i.chart.fontFamily, n, h), t.setCN(l, n, "legend-value"), n.translate(s, i.ly), i.entries[i.index].push(n), o += i.valueWidth + 2 * i.markerLabelGap, n.dItem = e, i.valueLabels.push(n), r < a + 5 && (r = a + 5)
                                }
                                i.index++, (l = i.container.rect(e.legendEntryWidth, 0, o, r, 0, 0).attr({
                                    stroke: "none",
                                    fill: "#fff",
                                    "fill-opacity": .005
                                })).dItem = e, i.entries[i.index - 1].push(l), l.mouseover(function(t) {
                                    i.rollOverLabel(e, t)
                                }).mouseout(function(t) {
                                    i.rollOutLabel(e, t)
                                }).click(function(t) {
                                    i.clickLabel(e, t)
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
                                i = this.container,
                                n = t.line(i, [-(l = (this.markerSize - 4) / 2), l], [-l, l]).attr(e),
                                l = t.line(i, [-l, l], [l, -l]).attr(e);
                            return this.container.set([n, l])
                        },
                        createMarker: function(e, i, n, l, s, a, o, r, u) {
                            var h = this.markerSize,
                                d = this.container;
                            return s || (s = this.markerBorderColor), s || (s = i), isNaN(l) && (l = this.markerBorderThickness), isNaN(a) && (a = this.markerBorderAlpha), t.bullet(d, e, h, i, n, l, s, a, h, o, r, this.chart.path, u)
                        },
                        validateNow: function() {
                            this.invalidateSize()
                        },
                        updateValues: function() {
                            var e, i = this.valueLabels,
                                n = this.chart,
                                l = this.data;
                            if (i)
                                for (e = 0; e < i.length; e++) {
                                    var s = i[e],
                                        a = s.dItem;
                                    a.periodDataItem = void 0, a.periodPercentDataItem = void 0;
                                    var o = " ";
                                    if (l) s.text(a.value ? a.value : "");
                                    else {
                                        var r = null;
                                        if (void 0 !== a.type) {
                                            var u = this.periodValueText;
                                            a.legendPeriodValueText && (u = a.legendPeriodValueText), a.legendPeriodValueTextR && (u = a.legendPeriodValueTextR), (r = a.currentDataItem) ? (o = this.valueText, a.legendValueText && (o = a.legendValueText), a.legendValueTextR && (o = a.legendValueTextR), o = n.formatString(o, r)) : u && n.formatPeriodString && (u = t.massReplace(u, {
                                                "[[title]]": a.title
                                            }), o = n.formatPeriodString(u, a))
                                        } else o = n.formatString(this.valueText, a);
                                        u = a, r && (u = r);
                                        var h, d = this.valueFunction;
                                        d && (o = d(u, o, n.periodDataItem)), this.useMarkerColorForLabels && !r && a.lastDataItem && (r = a.lastDataItem), r ? h = n.getBalloonColor(a, r) : a.legendKeyColor && (h = a.legendKeyColor()), a.legendColorFunction && (h = a.legendColorFunction(u, o, a.periodDataItem, a.periodPercentDataItem)), s.text(o), !a.pattern && (this.useMarkerColorForValues && s.setAttr("fill", h), this.useMarkerColorForLabels) && ((s = a.legendMarker) && (s.setAttr("fill", h), s.setAttr("stroke", h)), (s = a.legendLabel) && s.setAttr("fill", a.hidden ? this.markerDisabledColor : h))
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
                            var i = e.getMilliseconds(),
                                n = String(i);
                            10 > i && (n = "00" + i), 10 <= i && 100 > i && (n = "0" + i), t = t.replace(/fff/g, n)
                        }
                        return t
                    }, t.extractPeriod = function(e) {
                        var i = t.stripNumbers(e),
                            n = 1;
                        return i != e && (n = Number(e.slice(0, e.indexOf(i)))), {
                            period: i,
                            count: n
                        }
                    }, t.getDate = function(e, i, n) {
                        return e instanceof Date ? t.newDate(e, n) : i && isNaN(e) ? t.stringToDate(e, i) : new Date(e)
                    }, t.daysInMonth = function(t) {
                        return new Date(t.getYear(), t.getMonth() + 1, 0).getDate()
                    }, t.newDate = function(t, e) {
                        return e && -1 == e.indexOf("fff") ? new Date(t) : new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
                    }, t.resetDateToMin = function(e, i, n, l) {
                        var s, a, o, r, u, h, d;
                        switch (void 0 === l && (l = 1), t.useUTC ? (s = e.getUTCFullYear(), a = e.getUTCMonth(), o = e.getUTCDate(), r = e.getUTCHours(), u = e.getUTCMinutes(), h = e.getUTCSeconds(), d = e.getUTCMilliseconds(), e = e.getUTCDay()) : (s = e.getFullYear(), a = e.getMonth(), o = e.getDate(), r = e.getHours(), u = e.getMinutes(), h = e.getSeconds(), d = e.getMilliseconds(), e = e.getDay()), i) {
                            case "YYYY":
                                s = Math.floor(s / n) * n, a = 0, o = 1, d = h = u = r = 0;
                                break;
                            case "MM":
                                a = Math.floor(a / n) * n, o = 1, d = h = u = r = 0;
                                break;
                            case "WW":
                                o = e >= l ? o - e + l : o - (7 + e) + l, d = h = u = r = 0;
                                break;
                            case "DD":
                                d = h = u = r = 0;
                                break;
                            case "hh":
                                r = Math.floor(r / n) * n, d = h = u = 0;
                                break;
                            case "mm":
                                u = Math.floor(u / n) * n, d = h = 0;
                                break;
                            case "ss":
                                h = Math.floor(h / n) * n, d = 0;
                                break;
                            case "fff":
                                d = Math.floor(d / n) * n
                        }
                        return t.useUTC ? ((e = new Date).setUTCFullYear(s, a, o), e.setUTCHours(r, u, h, d)) : e = new Date(s, a, o, r, u, h, d), e
                    }, t.getPeriodDuration = function(t, e) {
                        var i;
                        switch (void 0 === e && (e = 1), t) {
                            case "YYYY":
                                i = 316224e5;
                                break;
                            case "MM":
                                i = 26784e5;
                                break;
                            case "WW":
                                i = 6048e5;
                                break;
                            case "DD":
                                i = 864e5;
                                break;
                            case "hh":
                                i = 36e5;
                                break;
                            case "mm":
                                i = 6e4;
                                break;
                            case "ss":
                                i = 1e3;
                                break;
                            case "fff":
                                i = 1
                        }
                        return i * e
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
                    }, t.getMaxInterval = function(e, i) {
                        var n = t.intervals;
                        return e >= n[i].contains ? (e = Math.round(e / n[i].contains), t.getMaxInterval(e, i = n[i].nextInterval)) : "ss" == i ? n[i].nextInterval : i
                    }, t.dayNames = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), t.shortDayNames = "Sun Mon Tue Wed Thu Fri Sat".split(" "), t.monthNames = "January February March April May June July August September October November December".split(" "), t.shortMonthNames = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), t.getWeekNumber = function(t) {
                        (t = new Date(t)).setHours(0, 0, 0), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                        var e = new Date(t.getFullYear(), 0, 1);
                        return Math.ceil(((t - e) / 864e5 + 1) / 7)
                    }, t.stringToDate = function(e, i) {
                        var n = {},
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
                            s = !0; - 1 != (u = i.indexOf("AA")) && (e.substr(u, 2), "pm" == e.toLowerCase && (s = !1));
                        var a, o, r, u = i;
                        for (r = 0; r < l.length; r++) n[o = l[r].period] = 0, "date" == o && (n[o] = 1);
                        for (r = 0; r < l.length; r++)
                            if (o = l[r].period, -1 != i.indexOf(a = l[r].pattern)) {
                                var h = t.getFromDateString(a, e, u);
                                i = i.replace(a, ""), "KK" != a && "K" != a && "LL" != a && "L" != a || s || (h += 12), n[o] = h
                            } return t.useUTC ? ((l = new Date).setUTCFullYear(n.year, n.month, n.date), l.setUTCHours(n.hours, n.minutes, n.seconds, n.milliseconds)) : l = new Date(n.year, n.month, n.date, n.hours, n.minutes, n.seconds, n.milliseconds), l
                    }, t.getFromDateString = function(t, e, i) {
                        if (void 0 !== e) return i = i.indexOf(t), "0" == (e = (e = String(e)).substr(i, t.length)).charAt(0) && (e = e.substr(1, e.length - 1)), e = Number(e), isNaN(e) && (e = 0), -1 != t.indexOf("M") && e--, e
                    }, t.formatDate = function(e, i, n) {
                        n || (n = t);
                        var l, s, a, o, r, u, h, d, c = t.getWeekNumber(e);
                        t.useUTC ? (l = e.getUTCFullYear(), s = e.getUTCMonth(), a = e.getUTCDate(), o = e.getUTCDay(), r = e.getUTCHours(), u = e.getUTCMinutes(), h = e.getUTCSeconds(), d = e.getUTCMilliseconds()) : (l = e.getFullYear(), s = e.getMonth(), a = e.getDate(), o = e.getDay(), r = e.getHours(), u = e.getMinutes(), h = e.getSeconds(), d = e.getMilliseconds());
                        var p = String(l).substr(2, 2),
                            g = "0" + o;
                        i = i.replace(/W/g, c), 24 == (c = r) && (c = 0);
                        var f = c;
                        10 > f && (f = "0" + f), i = (i = i.replace(/JJ/g, f)).replace(/J/g, c), 0 === (f = r) && (f = 24, -1 != i.indexOf("H") && 0 == --a && ((l = new Date(e)).setDate(l.getDate() - 1), s = l.getMonth(), a = l.getDate(), l = l.getFullYear())), e = s + 1, 9 > s && (e = "0" + e), c = a, 10 > a && (c = "0" + a);
                        var m = f;
                        return 10 > m && (m = "0" + m), i = (i = i.replace(/HH/g, m)).replace(/H/g, f), 11 < (f = r) && (f -= 12), 10 > (m = f) && (m = "0" + m), i = (i = i.replace(/KK/g, m)).replace(/K/g, f), 0 === (f = r) && (f = 12), 12 < f && (f -= 12), 10 > (m = f) && (m = "0" + m), i = (i = i.replace(/LL/g, m)).replace(/L/g, f), 10 > (f = u) && (f = "0" + f), i = (i = i.replace(/NN/g, f)).replace(/N/g, u), 10 > (u = h) && (u = "0" + u), i = (i = i.replace(/SS/g, u)).replace(/S/g, h), 10 > (h = d) ? h = "00" + h : 100 > h && (h = "0" + h), 10 > (u = d) && (u = "00" + u), (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = (i = i.replace(/A/g, "@A@")).replace(/QQQ/g, h)).replace(/QQ/g, u)).replace(/Q/g, d)).replace(/YYYY/g, "@IIII@")).replace(/YY/g, "@II@")).replace(/MMMM/g, "@XXXX@")).replace(/MMM/g, "@XXX@")).replace(/MM/g, "@XX@")).replace(/M/g, "@X@")).replace(/DD/g, "@RR@")).replace(/D/g, "@R@")).replace(/EEEE/g, "@PPPP@")).replace(/EEE/g, "@PPP@")).replace(/EE/g, "@PP@")).replace(/E/g, "@P@")).replace(/@IIII@/g, l)).replace(/@II@/g, p)).replace(/@XXXX@/g, n.monthNames[s])).replace(/@XXX@/g, n.shortMonthNames[s])).replace(/@XX@/g, e)).replace(/@X@/g, s + 1)).replace(/@RR@/g, c)).replace(/@R@/g, a)).replace(/@PPPP@/g, n.dayNames[o])).replace(/@PPP@/g, n.shortDayNames[o])).replace(/@PP@/g, g)).replace(/@P@/g, o)).replace(/@A@/g, 12 > r ? n.amString : n.pmString)
                    }, t.changeDate = function(e, i, n, l, s) {
                        if (t.useUTC) return t.changeUTCDate(e, i, n, l, s);
                        var a = -1;
                        switch (void 0 === l && (l = !0), void 0 === s && (s = !1), !0 === l && (a = 1), i) {
                            case "YYYY":
                                e.setFullYear(e.getFullYear() + n * a), l || s || e.setDate(e.getDate() + 1);
                                break;
                            case "MM":
                                i = e.getMonth();
                                var o = e.getFullYear();
                                e.setMonth(e.getMonth() + n * a), o == e.getFullYear() && e.getMonth() > i + n * a && e.setDate(e.getDate() - 1), l || s || e.setDate(e.getDate() + 1);
                                break;
                            case "DD":
                                e.setDate(e.getDate() + n * a);
                                break;
                            case "WW":
                                e.setDate(e.getDate() + n * a * 7);
                                break;
                            case "hh":
                                e.setHours(e.getHours() + n * a);
                                break;
                            case "mm":
                                e.setMinutes(e.getMinutes() + n * a);
                                break;
                            case "ss":
                                e.setSeconds(e.getSeconds() + n * a);
                                break;
                            case "fff":
                                e.setMilliseconds(e.getMilliseconds() + n * a)
                        }
                        return e
                    }, t.changeUTCDate = function(t, e, i, n, l) {
                        var s = -1;
                        switch (void 0 === n && (n = !0), void 0 === l && (l = !1), !0 === n && (s = 1), e) {
                            case "YYYY":
                                t.setUTCFullYear(t.getUTCFullYear() + i * s), n || l || t.setUTCDate(t.getUTCDate() + 1);
                                break;
                            case "MM":
                                e = t.getUTCMonth(), t.setUTCMonth(t.getUTCMonth() + i * s), t.getUTCMonth() > e + i * s && t.setUTCDate(t.getUTCDate() - 1), n || l || t.setUTCDate(t.getUTCDate() + 1);
                                break;
                            case "DD":
                                t.setUTCDate(t.getUTCDate() + i * s);
                                break;
                            case "WW":
                                t.setUTCDate(t.getUTCDate() + i * s * 7);
                                break;
                            case "hh":
                                t.setUTCHours(t.getUTCHours() + i * s);
                                break;
                            case "mm":
                                t.setUTCMinutes(t.getUTCMinutes() + i * s);
                                break;
                            case "ss":
                                t.setUTCSeconds(t.getUTCSeconds() + i * s);
                                break;
                            case "fff":
                                t.setUTCMilliseconds(t.getUTCMilliseconds() + i * s)
                        }
                        return t
                    }
                }()
        },
        "mUY/": function(t, e) {
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
        oLyD: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("CcnG"),
                l = function() {
                    return function() {}
                }(),
                s = i("pMnS"),
                a = i("K3YL"),
                o = i("X/as"),
                r = i("VDo3"),
                u = i("Kn7y"),
                h = i("7Hzh"),
                d = i("Gu4V"),
                c = i("7DwK"),
                p = i("22MO"),
                g = i("kizo"),
                f = i("Ip0R"),
                m = i("xQLJ"),
                v = i("XlPw"),
                b = i("F/XL"),
                y = i("HCBw"),
                x = i("NO+K"),
                C = i("oliS"),
                w = i("Njeq"),
                k = i("tWDZ"),
                S = i("YKxU"),
                M = i("etJ/"),
                A = i("9Z1F"),
                P = i("67Y/"),
                N = i("vubp"),
                T = function() {
                    function t(t, e, i, n, l, s, a) {
                        this.httpClient = t, this._videoTransFormer = e, this._mediaTransFormer = i, this._apiUrlHelper = n, this._httpClientHelper = l, this._toastService = s, this._storage = a
                    }
                    return t.prototype.playNextVideo = function(t) {
                        var e = this._apiUrlHelper.urlBuilder("video-playnext", t);
                        return this._httpClientHelper.get(e).pipe(Object(A.a)(function(t) {
                            return Object(v.a)("Server error: getVideo: " + t)
                        }))
                    }, t.prototype.filterVideo = function(t, e) {
                        var i = this._apiUrlHelper.urlBuilder("video-filter", t ? {
                            id: e,
                            uid: t.id,
                            gid: t.token.gid,
                            expire: t.token.expire,
                            sign: t.token.sign,
                            token: t.token.token
                        } : {
                            id: e
                        });
                        return this._httpClientHelper.get(i).pipe(Object(A.a)(function(t) {
                            return Object(v.a)("Server error: getVideo: " + t)
                        }))
                    }, t.prototype.IsUserFilter = function(t, e) {
                        var i = this._apiUrlHelper.urlBuilder("video-is-filter", t ? {
                            id: e,
                            uid: t.id,
                            gid: t.token.gid,
                            expire: t.token.expire,
                            sign: t.token.sign,
                            token: t.token.token
                        } : {
                            id: e
                        });
                        return this._httpClientHelper.get(i).pipe(Object(P.a)(function(t) {
                            return t[0]
                        }))
                    }, t.prototype.getVideo = function(t, e) {
                        var i, n = this;
                        (i = t ? {
                            id: e,
                            uid: t.id,
                            gid: t.token.gid,
                            expire: t.token.expire,
                            sign: t.token.sign,
                            token: t.token.token
                        } : {
                            id: e
                        }).device = 1;
                        var l = this._apiUrlHelper.urlBuilder("video-detail", i);
                        return this._httpClientHelper.get(l).pipe(Object(P.a)(function(t) {
                            return n._videoTransFormer.transformFromVideoService(t[0])
                        })).pipe(Object(A.a)(function(t) {
                            return Object(v.a)("Server error: getVideo: " + t)
                        }))
                    }, t.prototype.getLastPlay = function(t, e) {
                        var i = this._apiUrlHelper.urlBuilder("video-last-play", t ? {
                            id: e,
                            uid: t.id,
                            gid: t.token.gid,
                            expire: t.token.expire,
                            sign: t.token.sign,
                            token: t.token.token
                        } : {
                            id: e
                        });
                        return this._httpClientHelper.get(i).pipe(Object(P.a)(function(t) {
                            return t[0]
                        })).pipe(Object(A.a)(function(t) {
                            return Object(v.a)("Server error: getVideo: " + t)
                        }))
                    }, t.prototype.getMedia = function(t, e, i) {
                        var n;
                        void 0 === i && (i = !0), (n = t ? {
                            id: e,
                            uid: t.id,
                            gid: t.token.gid,
                            expire: t.token.expire,
                            sign: t.token.sign,
                            token: t.token.token
                        } : {
                            id: e
                        }).region = this._storage.GetConfig().region, n.device = 1, n.ispath = i;
                        var l = this._apiUrlHelper.urlBuilder("video-media", n);
                        return this._httpClientHelper.get(l).pipe(Object(P.a)(function(t) {
                            return null !== t[0] ? t[0] : []
                        })).pipe(Object(A.a)(function(t) {
                            return Object(v.a)("Server error:" + t)
                        }))
                    }, t.prototype.like = function(t) {
                        var e = this;
                        if (this.isVoted(t)) return Object(b.a)({
                            message: "\u60a8\u5df2\u7ecf\u9012\u4ea4\u8fc7\u4e86"
                        }).pipe(Object(N.a)(300));
                        var i = this._apiUrlHelper.urlBuilder("video-like", {
                            videoID: t
                        });
                        return this._httpClientHelper.get(i).pipe(Object(P.a)(function(i) {
                            return e.voteRecord(t, "like"), i
                        })).pipe(Object(N.a)(300))
                    }, t.prototype.pageViewRecord = function(t) {
                        return this.httpClient.get(t).pipe(Object(P.a)(function(t) {
                            return t
                        }))
                    }, t.prototype.dislike = function(t) {
                        var e = this;
                        if (this.isVoted(t)) return Object(b.a)({
                            message: "\u60a8\u5df2\u7ecf\u9012\u4ea4\u8fc7\u4e86"
                        }).pipe(Object(N.a)(300));
                        var i = this._apiUrlHelper.urlBuilder("video-dislike", {
                            videoID: t
                        });
                        return this._httpClientHelper.get(i).pipe(Object(P.a)(function(i) {
                            return e.voteRecord(t, "dislike"), i
                        })).pipe(Object(N.a)(300)).pipe(Object(A.a)(function(t) {
                            return Object(v.a)("Server error:" + t)
                        }))
                    }, t.prototype.isVoted = function(t) {
                        return (this._storage.GetItem("voteVideo") ? JSON.parse(this._storage.GetItem("voteVideo")) : []).filter(function(e) {
                            return e.id === t
                        }).length > 0
                    }, t.prototype.voteRecord = function(t, e) {
                        if (!this.isVoted(t)) {
                            var i = this._storage.GetItem("voteVideo") ? JSON.parse(this._storage.GetItem("voteVideo")) : [];
                            i.push({
                                id: t,
                                behavior: e
                            }), i = i.slice(-50), this._storage.SetItem("voteVideo", JSON.stringify(i))
                        }
                    }, t.prototype.favorite = function(t, e) {
                        var i = this._apiUrlHelper.urlBuilder("video-favorite", {
                            videoID: e,
                            uid: t.id,
                            gid: t.token.gid,
                            expire: t.token.expire,
                            sign: t.token.sign,
                            token: t.token.token
                        });
                        return this._httpClientHelper.get(i).pipe(Object(P.a)(function(t) {
                            return t
                        })).pipe(Object(N.a)(300)).pipe(Object(A.a)(function(t) {
                            return Object(v.a)("Server error:" + t)
                        }))
                    }, t.prototype.purchaseMedia = function(t, e) {
                        var i = this._apiUrlHelper.urlBuilder("media-purchase", {
                            id: e,
                            uid: t.id,
                            expire: t.token.expire,
                            sign: t.token.sign,
                            token: t.token.token
                        });
                        return this._httpClientHelper.get(i).pipe(Object(P.a)(function(t) {
                            return t[0]
                        })).pipe(Object(N.a)(200)).pipe(Object(A.a)(function(t) {
                            return Object(v.a)("Server error:" + t)
                        }))
                    }, t.prototype.sendPlayHistory = function(t) {
                        this._httpClientHelper.getAsync(t)
                    }, t.prototype.sendWatched = function(t) {
                        this._httpClientHelper.getAsync(t)
                    }, t.prototype.getPlaylistByLanguage = function(t, e) {
                        var i = this._apiUrlHelper.urlBuilder("languagesplaylist", {
                            VID: e,
                            lsk: 1,
                            uid: t ? t.id : void 0,
                            gid: t ? t.token.gid : void 0,
                            expire: t ? t.token.expire : void 0,
                            sign: t ? t.token.sign : void 0,
                            token: t ? t.token.token : void 0
                        });
                        return this._httpClientHelper.get(i).pipe(Object(P.a)(function(t) {
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
                        })).pipe(Object(N.a)(200)).pipe(Object(A.a)(function(t) {
                            return Object(v.a)("Server error:" + t)
                        }))
                    }, t.prototype.getStatistics = function(t) {
                        var e = this._apiUrlHelper.urlBuilder("video-statistics", {
                            id: t
                        });
                        return this._httpClientHelper.get(e).pipe(Object(P.a)(function(t) {
                            return t
                        })).pipe(Object(N.a)(200)).pipe(Object(A.a)(function(t) {
                            return Object(v.a)("Server error:" + t)
                        }))
                    }, t
                }(),
                I = (i("I2Dd"), i("mUY/"), i("EEnh"), function() {
                    function t(t, e, i, n) {
                        var l = this;
                        this._amChartsService = t, this._videoService = e, this._route = i, this._windowService = n, this.chatMode = 0, this.screenType = g.a, this._windowService.size$.subscribe(function(t) {
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
                        var i = {
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
                        return i.legend = {
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
                        }, i
                    }, t.prototype.ngAfterViewInit = function() {}, t.prototype.createChat = function() {
                        var t = this;
                        this._videoService.getStatistics(this.videoKey).subscribe(function(e) {
                            t.data = e;
                            var i, n = [],
                                l = [];
                            for (var s in t.data.ConstellationCount) t.data.ConstellationCount.hasOwnProperty(s) && "\u672a\u77e5" !== s && 0 !== t.data.ConstellationCount[s] && n.push({
                                constellation: s,
                                value: t.data.ConstellationCount[s]
                            });
                            for (var s in t.data.AgeSexCount) t.data.AgeSexCount.hasOwnProperty(s) && "\u672a\u77e5" !== s && 0 !== t.data.AgeSexCount[s] && l.push({
                                constellation: s,
                                value: t.data.AgeSexCount[s]
                            });
                            switch (t.chatMode) {
                                case 0:
                                    i = n;
                                    break;
                                case 1:
                                    i = l;
                                    break;
                                default:
                                    i = n
                            }
                            t.constellationChart = t._amChartsService.makeChart("chartdiv", t.renderChart(i))
                        })
                    }, t
                }()),
                O = i("ZYCi"),
                R = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".statistics[_ngcontent-%COMP%]{padding-left:25px}.chart-container[_ngcontent-%COMP%]{width:420px;min-width:420px;max-width:420px;margin-top:-30px}.screen-small[_ngcontent-%COMP%]   .statistics[_ngcontent-%COMP%]{padding-left:15px}.screen-small[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{width:280px;min-width:280px;max-width:280px;margin-top:-30px}.screen-medium[_ngcontent-%COMP%]   .statistics[_ngcontent-%COMP%]{padding-left:15px}.screen-medium[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{width:300px;min-width:300px;max-width:300px;margin-top:-30px}.screen-large[_ngcontent-%COMP%]   .statistics[_ngcontent-%COMP%]{padding-left:15px}.screen-large[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{width:320px;min-width:320px;max-width:320px;margin-top:-30px}"]
                    ],
                    data: {}
                });

            function D(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 6, "div", [
                    ["class", "statistics"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    "screen-xxsmall": 0,
                    "screen-xsmall": 1,
                    "screen-small": 2,
                    "screen-medium": 3,
                    "screen-large": 4
                }), (t()(), n["\u0275eld"](3, 0, null, null, 1, "h4", [
                    ["class", "py-3 mb-4 text-center"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u559c\u6b22\u6b64\u5267\u7684\u4eba\u7fa4\uff1a"])), (t()(), n["\u0275eld"](5, 0, null, null, 1, "div", [
                    ["class", "chart-container "]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](6, 0, null, null, 0, "div", [
                    ["id", "chartdiv"]
                ], [
                    [4, "width", "%"],
                    [4, "height", "px"]
                ], null, null, null, null))], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.screenSize === i.screenType.XXSmall, i.screenSize === i.screenType.XSmall, i.screenSize === i.screenType.Small, i.screenSize === i.screenType.Medium, i.screenSize === i.screenType.Large);
                    t(e, 1, 0, "statistics", n)
                }, function(t, e) {
                    t(e, 6, 0, 100, 380)
                })
            }
            var L = i("IsHp"),
                B = i("UaQO"),
                E = i("23Bk"),
                V = i("8V5e"),
                F = i("AytR"),
                _ = function() {
                    function t(t) {
                        this._categoryService = t, this.isAdult = 2 === F.a.cinema, this.screenType = g.a
                    }
                    return t.prototype.ngOnInit = function() {}, t.prototype.getRatingBarWidth = function() {
                        return this.screenSize === g.a.Small ? 150 : this.screenSize === g.a.Medium ? 100 : this.screenSize === g.a.Large ? 160 : 218
                    }, t
                }(),
                z = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".bar-container[_ngcontent-%COMP%]{position:relative;border-radius:20px;height:20px;padding-left:54px;background-color:#fff;overflow:hidden;border:1px solid #ddd}.bar-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;top:0;left:15px;font-size:15px;line-height:17px}.actors[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:inherit;max-width:35em}.screen-medium[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%], .screen-small[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%]{display:inline-block!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.info-label[_ngcontent-%COMP%]{display:inline-block;width:60px}.star[_ngcontent-%COMP%]{cursor:pointer;white-space:normal}"]
                    ],
                    data: {}
                });

            function H(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "span", [
                    ["class", "d-inline text-dark"],
                    ["style", "font-size: 22px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["[\u8fde\u8f7d]"]))], null, null)
            }

            function G(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](1, null, ["", ""])), n["\u0275ppd"](2, 1)], null, function(t, e) {
                    var i = e.component,
                        l = n["\u0275unv"](e, 1, 0, t(e, 2, 0, n["\u0275nov"](e.parent.parent, 0), i.video.category));
                    t(e, 1, 0, l)
                })
            }

            function W(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5348\u591c\u7248"]))], null, null)
            }

            function Y(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "published d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5e74\u4efd\uff1a"])), (t()(), n["\u0275eld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](4, null, ["", ""]))], null, function(t, e) {
                    t(e, 4, 0, e.component.video.published)
                })
            }

            function j(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "region d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u533a\u57df\uff1a"])), (t()(), n["\u0275eld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](4, null, ["", ""]))], null, function(t, e) {
                    t(e, 4, 0, e.component.video.region)
                })
            }

            function X(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "region d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u8bed\u8a00\uff1a"])), (t()(), n["\u0275eld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](4, null, ["", ""]))], null, function(t, e) {
                    t(e, 4, 0, e.component.video.language)
                })
            }

            function U(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "directors d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5bfc\u6f14\uff1a"])), (t()(), n["\u0275eld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](4, null, ["", ""]))], null, function(t, e) {
                    t(e, 4, 0, e.component.video.directors)
                })
            }

            function K(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "updateSchedule d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u66f4\u65b0\uff1a"])), (t()(), n["\u0275eld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](4, null, ["", ""]))], null, function(t, e) {
                    var i = e.component;
                    t(e, 4, 0, i.video.inProgress ? i.video.updateSchedule : "\u5df2\u5b8c\u7ed3")
                })
            }

            function q(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "isFree d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u8d44\u8d39\uff1a"])), (t()(), n["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["style", "display:inline-block; width: 60px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](4, null, ["", ""]))], null, function(t, e) {
                    t(e, 4, 0, e.component.video.isFree ? "\u514d\u8d39" : "\u6536\u8d39")
                })
            }

            function Z(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u672a\u77e5"]))], null, null)
            }

            function Q(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "span", [
                    ["class", "tag"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](1, null, [" ", " "]))], null, function(t, e) {
                    t(e, 1, 0, e.context.$implicit)
                })
            }

            function J(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "d-inline"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Q)), n["\u0275did"](2, 278528, null, 0, f.NgForOf, [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.component.video.tags)
                }, null)
            }

            function $(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 6, "div", [
                    ["class", "tags d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5185\u5bb9\uff1a"])), (t()(), n["\u0275and"](16777216, null, null, 1, null, Z)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, J)), n["\u0275did"](6, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 4, 0, !i.video.tags.length), t(e, 6, 0, i.video.tags.length)
                }, null)
            }

            function tt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "mosaic d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5175\u79cd\uff1a "])), (t()(), n["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "d-inline-block"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](4, null, [" ", " "]))], null, function(t, e) {
                    t(e, 4, 0, e.component.video.mosaic ? "\u9a91\u5175" : "\u6b65\u5175")
                })
            }

            function et(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "span", [
                    ["style", "display:inline-block; width: 60px; min-width: 60px; vertical-align: top;"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u4e3b\u6f14\uff1a"]))], null, null)
            }

            function it(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "span", [
                    ["style", "display:inline-block; width: 60px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5973\u4f18\uff1a "]))], null, null)
            }

            function nt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "d-inline-block actors"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u672a\u77e5"]))], null, null)
            }

            function lt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "span", [
                    ["class", "text-light mx-1"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["/"]))], null, null)
            }

            function st(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 7, "span", [], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 4, "span", [
                    ["class", "star"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var l = !0;
                    return "click" === e && (l = !1 !== n["\u0275nov"](t, 2).onClick() && l), l
                }, null, null)), n["\u0275did"](2, 16384, null, 0, O.p, [O.o, O.a, [8, null], n.Renderer2, n.ElementRef], {
                    queryParams: [0, "queryParams"],
                    routerLink: [1, "routerLink"]
                }, null), n["\u0275pod"](3, {
                    star: 0
                }), n["\u0275pad"](4, 1), (t()(), n["\u0275ted"](5, null, ["", ""])), (t()(), n["\u0275and"](16777216, null, null, 1, null, lt)), n["\u0275did"](7, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = t(e, 3, 0, e.context.$implicit),
                        n = t(e, 4, 0, "/search");
                    t(e, 2, 0, i, n), t(e, 7, 0, !e.context.last)
                }, function(t, e) {
                    t(e, 5, 0, e.context.$implicit)
                })
            }

            function at(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["..."]))], null, null)
            }

            function ot(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "d-inline-flex actors"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, st)), n["\u0275did"](2, 278528, null, 0, f.NgForOf, [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, at)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, i.video.actors.slice(0, 10)), t(e, 4, 0, i.video.actors.length > 10)
                }, null)
            }

            function rt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 60, "div", [
                    ["class", "video-detail"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    "screen-xxsmall": 0,
                    "screen-xsmall": 1,
                    "screen-small": 2,
                    "screen-medium": 3,
                    "screen-large": 4
                }), (t()(), n["\u0275eld"](3, 0, null, null, 4, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 1, "h1", [
                    ["class", "d-inline text-dark"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](5, null, ["", ""])), (t()(), n["\u0275and"](16777216, null, null, 1, null, H)), n["\u0275did"](7, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](8, 0, null, null, 10, "div", [
                    ["class", "popular mb-4 d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](9, 0, null, null, 4, "div", [
                    ["class", "bar-container popularity mr-3"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](10, 0, null, null, 1, "span", [
                    ["class", "label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u4eba\u6c14"])), (t()(), n["\u0275eld"](12, 0, null, null, 1, "app-rating-bar", [
                    ["class", "rating-bar"]
                ], null, null, null, L.b, L.a)), n["\u0275did"](13, 114688, null, 0, B.a, [], {
                    width: [0, "width"],
                    height: [1, "height"],
                    value: [2, "value"],
                    borderRadius: [3, "borderRadius"],
                    whiteBackground: [4, "whiteBackground"]
                }, null), (t()(), n["\u0275eld"](14, 0, null, null, 4, "div", [
                    ["class", "bar-container rating"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](15, 0, null, null, 1, "span", [
                    ["class", "label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u8bc4\u5206"])), (t()(), n["\u0275eld"](17, 0, null, null, 1, "app-rating-bar", [
                    ["class", "rating-bar"]
                ], null, null, null, L.b, L.a)), n["\u0275did"](18, 114688, null, 0, B.a, [], {
                    width: [0, "width"],
                    height: [1, "height"],
                    value: [2, "value"],
                    borderRadius: [3, "borderRadius"],
                    whiteBackground: [4, "whiteBackground"]
                }, null), (t()(), n["\u0275eld"](19, 0, null, null, 6, "div", [
                    ["class", "category d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](20, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u9891\u9053\uff1a"])), (t()(), n["\u0275and"](16777216, null, null, 1, null, G)), n["\u0275did"](23, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, W)), n["\u0275did"](25, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](26, 0, null, null, 4, "div", [
                    ["class", "genre d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](27, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5206\u7c7b\uff1a"])), (t()(), n["\u0275eld"](29, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](30, null, ["", ""])), (t()(), n["\u0275and"](16777216, null, null, 1, null, Y)), n["\u0275did"](32, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](33, 0, null, null, 4, "div", [
                    ["class", "created d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](34, 0, null, null, 1, "span", [
                    ["class", "info-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6dfb\u52a0\uff1a"])), (t()(), n["\u0275eld"](36, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](37, null, ["", ""])), (t()(), n["\u0275and"](16777216, null, null, 1, null, j)), n["\u0275did"](39, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, X)), n["\u0275did"](41, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, U)), n["\u0275did"](43, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, K)), n["\u0275did"](45, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, q)), n["\u0275did"](47, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, $)), n["\u0275did"](49, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, tt)), n["\u0275did"](51, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](52, 0, null, null, 8, "div", [
                    ["class", " d-flex"],
                    ["style", "white-space: nowrap"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, et)), n["\u0275did"](54, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, it)), n["\u0275did"](56, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, nt)), n["\u0275did"](58, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, ot)), n["\u0275did"](60, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.screenSize === i.screenType.XXSmall, i.screenSize === i.screenType.XSmall, i.screenSize === i.screenType.Small, i.screenSize === i.screenType.Medium, i.screenSize === i.screenType.Large);
                    t(e, 1, 0, "video-detail", n), t(e, 7, 0, i.video.inProgress), t(e, 13, 0, i.getRatingBarWidth(), 20, 10 * i.video.userData.popular, 0, !0), t(e, 18, 0, i.getRatingBarWidth(), 20, 10 * i.video.userData.rate, 0, !0), t(e, 23, 0, !i.isAdult), t(e, 25, 0, i.isAdult), t(e, 32, 0, !i.isAdult), t(e, 39, 0, !i.isAdult), t(e, 41, 0, !i.isAdult), t(e, 43, 0, (null == i.video.directors ? null : i.video.directors.length) && !i.isAdult), t(e, 45, 0, i.video.updateSchedule && !i.isAdult), t(e, 47, 0, i.isAdult), t(e, 49, 0, i.isAdult), t(e, 51, 0, i.isAdult), t(e, 54, 0, !i.isAdult), t(e, 56, 0, i.isAdult), t(e, 58, 0, !i.video.actors.length), t(e, 60, 0, i.video.actors.length)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 5, 0, i.video.title), t(e, 30, 0, i.video.genre), t(e, 37, 0, i.video.created)
                })
            }

            function ut(t) {
                return n["\u0275vid"](0, [n["\u0275pid"](0, E.a, [V.a]), (t()(), n["\u0275and"](16777216, null, null, 1, null, rt)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, i.video && i.video.title)
                }, null)
            }
            var ht = function() {
                    function t() {
                        this.iconClasses = "", this.style = {}, this.clickEvent = new n.EventEmitter
                    }
                    return t.prototype.ngOnInit = function() {}, t.prototype.onClick = function(t) {
                        this.clickEvent.emit(t)
                    }, t.prototype.getStyle = function() {
                        return this.style
                    }, t
                }(),
                dt = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".play-button[_ngcontent-%COMP%]{display:inline-block;padding:2px 18px;color:#fff;background-color:#e81d00;border-radius:30px;cursor:pointer}.play-button[_ngcontent-%COMP%]:hover{background-color:red}.button-icon[_ngcontent-%COMP%]{width:28px;height:38px;margin-right:10px;display:flex;align-items:center;justify-content:center}.button-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px}.button-label[_ngcontent-%COMP%]{width:65px;height:38px;display:flex;align-items:center;justify-content:center}"]
                    ],
                    data: {}
                });

            function ct(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 7, "div", [
                    ["class", "play-button"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.onClick(i) && n), n
                }, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgStyle, [n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), (t()(), n["\u0275eld"](2, 0, null, null, 5, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](3, 0, null, null, 2, "div", [
                    ["class", "button-icon"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 1, "i", [], null, null, null, null, null)), n["\u0275did"](5, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), (t()(), n["\u0275eld"](6, 0, null, null, 1, "div", [
                    ["class", "button-label"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](7, null, [" ", " "]))], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.getStyle()), t(e, 5, 0, i.iconClasses)
                }, function(t, e) {
                    t(e, 7, 0, e.component.label)
                })
            }
            var pt = i("2P1N"),
                gt = i("7jsL"),
                ft = i("0Xxy"),
                mt = i("bTYh"),
                vt = i("3My9"),
                bt = function() {
                    function t(t, e, i, l) {
                        var s = this;
                        this._videoService = t, this._windowService = e, this._dnDialogService = i, this._messageDialogService = l, this.screenType = g.a, this.screenSize = g.a.Large, this.showPlaylistEvent = new n.EventEmitter, this.gid = -1, this._windowService.size$.subscribe(function(t) {
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
                            } : t, vt.a.Notify("changeHistory", e.history)
                        })
                    }, t.prototype.play = function(t) {
                        var e = {};
                        for (var i in t) "media" == i ? e.id = decodeURIComponent(t[i]) : e[i] = decodeURIComponent(t[i]);
                        this.router.navigate(["/play"], {
                            queryParams: e,
                            replaceUrl: vt.a.isUrlContains(["play"])
                        })
                    }, t.prototype.quickPlay = function() {
                        var t = Object.keys(this.video.playlist);
                        if (t.length) {
                            var e = void 0;
                            try {
                                if (e = (i = this.video.playlist[t[1]].medias)[0].key) return void this.play({
                                    id: this.video.key,
                                    media: e
                                })
                            } catch (l) {}
                            if (this.video.playlist[t[0]].medias.length) this.play({
                                id: this.video.key,
                                media: e = this.video.playlist[t[0]].medias[0].key
                            });
                            else try {
                                var i;
                                e = (i = this.video.playlist[t[1]].medias)[0].key;
                                var n = document.getElementById("triggerkey_" + i[0].title);
                                return void(null != n && n.click())
                            } catch (s) {}
                        } else this._messageDialogService.setState({
                            type: mt.b.Info,
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
                yt = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".play-buttons[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;bottom:40px;left:40px}.last-play[_ngcontent-%COMP%]{margin-bottom:25px}.screen-medium.play-buttons[_ngcontent-%COMP%], .screen-small.play-buttons[_ngcontent-%COMP%]{bottom:20px;left:20px}.screen-medium[_ngcontent-%COMP%]   .last-play[_ngcontent-%COMP%], .screen-small[_ngcontent-%COMP%]   .last-play[_ngcontent-%COMP%]{margin-bottom:5px}"]
                    ],
                    data: {}
                });

            function xt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-play-button", [], null, [
                    [null, "clickEvent"]
                ], function(t, e, i) {
                    var n = !0;
                    return "clickEvent" === e && (n = !1 !== t.component.quickPlay() && n), n
                }, ct, dt)), n["\u0275did"](1, 114688, null, 0, ht, [], {
                    label: [0, "label"],
                    iconClasses: [1, "iconClasses"]
                }, {
                    clickEvent: "clickEvent"
                })], function(t, e) {
                    t(e, 1, 0, "\u7acb\u5373\u64ad\u653e", "dn-icon icon-play")
                }, null)
            }

            function Ct(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 7, "div", [
                    ["class", "play-buttons"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    "screen-xxsmall": 0,
                    "screen-xsmall": 1,
                    "screen-small": 2,
                    "screen-medium": 3,
                    "screen-large": 4
                }), (t()(), n["\u0275and"](16777216, null, null, 1, null, xt)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](5, 0, null, null, 2, "app-play-button", [], null, [
                    [null, "clickEvent"]
                ], function(t, e, i) {
                    var n = !0;
                    return "clickEvent" === e && (n = !1 !== t.component.showPlaylist() && n), n
                }, ct, dt)), n["\u0275did"](6, 114688, null, 0, ht, [], {
                    label: [0, "label"],
                    iconClasses: [1, "iconClasses"],
                    style: [2, "style"]
                }, {
                    clickEvent: "clickEvent"
                }), n["\u0275pod"](7, {
                    "margin-left": 0
                })], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.screenSize === i.screenType.XXSmall, i.screenSize === i.screenType.XSmall, i.screenSize === i.screenType.Small, i.screenSize === i.screenType.Medium, i.screenSize === i.screenType.Large);
                    t(e, 1, 0, "play-buttons", n), t(e, 4, 0, i.gid > 0);
                    var l = t(e, 7, 0, "15px");
                    t(e, 6, 0, "\u64ad\u653e\u5217\u8868", "dn-icon icon-list", l)
                }, null)
            }

            function wt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-play-button", [], null, [
                    [null, "clickEvent"]
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "clickEvent" === e && (n = !1 !== l.continuePlay(l.history.mKey, l.history.current) && n), n
                }, ct, dt)), n["\u0275did"](1, 114688, null, 0, ht, [], {
                    label: [0, "label"],
                    iconClasses: [1, "iconClasses"]
                }, {
                    clickEvent: "clickEvent"
                })], function(t, e) {
                    t(e, 1, 0, "\u7ee7\u7eed\u64ad\u653e", "dn-icon icon-play")
                }, null)
            }

            function kt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "app-play-button", [], null, [
                    [null, "clickEvent"]
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "clickEvent" === e && (n = !1 !== l.continuePlay(l.history.mKey, l.history.current) && n), n
                }, ct, dt)), n["\u0275did"](1, 114688, null, 0, ht, [], {
                    label: [0, "label"],
                    iconClasses: [1, "iconClasses"],
                    style: [2, "style"]
                }, {
                    clickEvent: "clickEvent"
                }), n["\u0275pod"](2, {
                    "border-radius": 0
                })], function(t, e) {
                    var i = t(e, 2, 0, "30px 0 0 30px");
                    t(e, 1, 0, "\u7ee7\u7eed\u64ad\u653e", "dn-icon icon-continue", i)
                }, null)
            }

            function St(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "app-play-button", [], null, [
                    [null, "clickEvent"]
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "clickEvent" === e && (n = !1 !== l.continuePlay(l.history.nextMid, 0) && n), n
                }, ct, dt)), n["\u0275did"](1, 114688, null, 0, ht, [], {
                    label: [0, "label"],
                    iconClasses: [1, "iconClasses"],
                    style: [2, "style"]
                }, {
                    clickEvent: "clickEvent"
                }), n["\u0275pod"](2, {
                    "margin-left": 0,
                    "border-radius": 1
                })], function(t, e) {
                    var i = t(e, 2, 0, "-2px", "0 30px 30px 0");
                    t(e, 1, 0, "\u64ad\u653e\u4e0b\u96c6", "dn-icon icon-next", i)
                }, null)
            }

            function Mt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 17, "div", [
                    ["class", "play-buttons"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    "screen-xxsmall": 0,
                    "screen-xsmall": 1,
                    "screen-small": 2,
                    "screen-medium": 3,
                    "screen-large": 4
                }), (t()(), n["\u0275eld"](3, 0, null, null, 5, "div", [
                    ["class", "last-play text-dark"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 1, "span", [
                    ["class", "text-large"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), n["\u0275ppd"](5, 2), (t()(), n["\u0275eld"](6, 0, null, null, 2, "span", [
                    ["class", "text-large"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](7, null, ["", ""])), n["\u0275ppd"](8, 1), (t()(), n["\u0275and"](16777216, null, null, 1, null, wt)), n["\u0275did"](10, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, kt)), n["\u0275did"](12, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, St)), n["\u0275did"](14, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](15, 0, null, null, 2, "app-play-button", [], null, [
                    [null, "clickEvent"]
                ], function(t, e, i) {
                    var n = !0;
                    return "clickEvent" === e && (n = !1 !== t.component.showPlaylist() && n), n
                }, ct, dt)), n["\u0275did"](16, 114688, null, 0, ht, [], {
                    label: [0, "label"],
                    iconClasses: [1, "iconClasses"],
                    style: [2, "style"]
                }, {
                    clickEvent: "clickEvent"
                }), n["\u0275pod"](17, {
                    "margin-left": 0
                })], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.screenSize === i.screenType.XXSmall, i.screenSize === i.screenType.XSmall, i.screenSize === i.screenType.Small, i.screenSize === i.screenType.Medium, i.screenSize === i.screenType.Large);
                    t(e, 1, 0, "play-buttons", n), t(e, 10, 0, !i.history.nextMid || "movie" === (null == i.video ? null : i.video.category)), t(e, 12, 0, i.history.nextMid && "movie" !== (null == i.video ? null : i.video.category)), t(e, 14, 0, i.history.nextMid && "movie" !== (null == i.video ? null : i.video.category));
                    var l = t(e, 17, 0, "15px");
                    t(e, 16, 0, "\u64ad\u653e\u5217\u8868", "dn-icon icon-list", l)
                }, function(t, e) {
                    var i = e.component,
                        l = n["\u0275unv"](e, 4, 0, t(e, 5, 0, n["\u0275nov"](e.parent, 0), i.history.mTitle, i.video));
                    t(e, 4, 0, l);
                    var s = n["\u0275unv"](e, 7, 0, t(e, 8, 0, n["\u0275nov"](e.parent, 1), i.history.current));
                    t(e, 7, 0, s)
                })
            }

            function At(t) {
                return n["\u0275vid"](0, [n["\u0275pid"](0, pt.b, []), n["\u0275pid"](0, gt.a, []), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ct)), n["\u0275did"](3, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Mt)), n["\u0275did"](5, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 3, 0, i.video && !i.history || !i.user || !i.user.membership || "vip" === i.user.membership), t(e, 5, 0, i.video && i.history && i.user && i.user.membership && "vip" !== i.user.membership)
                }, null)
            }
            var Pt = i("0BEm"),
                Nt = i("i0K8"),
                Tt = function() {
                    function t(t, e, i) {
                        var n = this;
                        this.API = e, this.isBarShow = !1, this.hideArrowBar = !0, this.subscriptions = [], this.timeout = null, this.subscriptions.push(i.isHidden.subscribe(function(t) {
                            return n.onHideScrubBar(t)
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
                It = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ['\n      vg-sidebar{\n        position: absolute;\n        right: 0;\n        height: 100%;\n        z-index:499;\n        pointer-events: none;\n\n      }\n      vg-sidebar.hide{\n        width: 1px;\n\n      }\n   \n      .arrow{\n        pointer-events: initial;\n        background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAImSURBVHja7Nq9ixNBFADwt9lNcqhEEfFMIVjINQf+GzZ63cBZ+VHJXWmT/yGlLGFIujRWYmUlWInbCIoG4WCTIiEkgcx+RdiZZHZsLmFuL2qu8WbCPNjiwSy8387Hzg5rCSFgG6IAWxIGYiAGYiB6haNCEZZlbfLAs23okexfteo0tDIz2Q3kEupXFoIQsuX6EEIAAOD7vo0xLhBCHnDOv/m+/xpjvGOpsI3fYPk9E0mS7JfL5bfFYnEPAIAQ8kq7oRXH8V6pVHqzRHDOQ8dxOiCEuPRr04ii6D6l9Ks4jcViERBCHiOECtpAgiC4Ryn9IiHCIAgOVg10gEyn07uU0s8S4lcYhuhMI9Ug+XwymdyhlH6SELMoig7P3aMSJJ+PRqPbaZp+lBAsjuOn6zpCGUg+Hw6HtxhjH5YIznkax/HzP40mJSCDwcDK5TfTNH0vIeZJkhwtARjj8w9DBUj+opS+k3siSZKXS4TneZV+v79q63mePnstIcTq1V+tVpnrutelHGq1mlZD61jG1ev1a8oNrQtM9hcyptFoXFUOsm75HY/Hu2uW32cyptVqXVEOcoEX4hO5TafTccwWRYVNIyHk4HQ+WduwjX+kVY/IH1aU0u8yJoqih9p9IVYqlRPG2OF8Pj8BALBt+wZjbF+7w4der2c3m82fs9kMZVn2o9vtuu1229Xy8MEc0BnIf6y1oBHir6fxlvlhwEAMxEAMxEAMBOD3AEZca+NEDTmSAAAAAElFTkSuQmCC");\n      background-repeat: no-repeat;\n      width: 3em;\n      height: 3em;\n      background-size: contain;\n      position: absolute;\n      top: 50%;\n      right: 0;\n      transform: translateY(-50%);\n      opacity: 0.8;\n      padding-right: 0.5em;\n      box-sizing: content-box;\n      transition: right 0.3s;\n      }\n\n      vg-sidebar.hide .arrow{\n\n        right:-3em;\n        \n        \n      }\n\n      vg-sidebar .vgsidebar{\n        pointer-events: initial;\n\n            margin:0;\n            position:relative;\n       \n            background-color: rgba(0, 0, 0, 0.67);\n            right:-100%;\n            transition: right 0.3s;\n            top:50%;\n            transform: translateY(-50%);\n\n\n      }\n      .vgsidebar.show{\n\n        right:0;\n      }\n        \n    '],
                    data: {}
                });

            function Ot(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "arrow"]
                ], null, [
                    [null, "click"],
                    [null, "mouseenter"]
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "click" === e && (n = !1 !== l.showBar() && n), "mouseenter" === e && (n = !1 !== l.showBar() && n), n
                }, null, null))], null, null)
            }

            function Rt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275and"](16777216, null, null, 1, null, Ot)), n["\u0275did"](1, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](2, 0, null, null, 3, "div", [
                    ["class", "vgsidebar"]
                ], null, [
                    [null, "mouseover"],
                    [null, "mouseout"]
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "mouseover" === e && (n = !1 !== l.showBar() && n), "mouseout" === e && (n = !1 !== l.hideBar() && n), n
                }, null, null)), n["\u0275did"](3, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](4, {
                    show: 0
                }), n["\u0275ncd"](null, 0)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, !i.isBarShow);
                    var n = t(e, 4, 0, i.isBarShow);
                    t(e, 3, 0, "vgsidebar", n)
                }, null)
            }
            var Dt = function() {
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
                        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length, this.target instanceof Pt.a ? this.target.playbackRate = this.playbackValues[this.playbackIndex] : this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex]
                    }, t.prototype.getPlaybackRate = function() {
                        return this.ariaValue = this.target ? this.target.playbackRate : 1, this.ariaValue
                    }, t.prototype.ngOnDestroy = function() {
                        this.subscriptions.forEach(function(t) {
                            return t.unsubscribe()
                        })
                    }, t
                }(),
                Lt = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n      vg-playback-button {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n\n        vg-playback-button .button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n        }\n    "],
                    data: {}
                });

            function Bt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "span", [
                    ["aria-label", "playback speed button"],
                    ["class", "button"],
                    ["role", "button"],
                    ["tabindex", "0"]
                ], [
                    [1, "aria-valuetext", 0]
                ], null, null, null, null)), (t()(), n["\u0275ted"](1, null, [" ", "x "]))], null, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, i.ariaValue), t(e, 1, 0, i.getPlaybackRate())
                })
            }
            var Et = function() {
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
                Vt = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-volume {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 100px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n\n        vg-volume .volumeBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n        }\n        vg-volume .volumeBackground {\n            display: flex;\n            flex-grow: 1;\n            height: 5px;\n            pointer-events: none;\n            background-color: #333;\n        }\n        vg-volume .volumeValue {\n            display: flex;\n            height: 5px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeKnob {\n            position: absolute;\n            width: 15px; height: 15px;\n            left: 0; top: 50%;\n            transform: translateY(-50%);\n            border-radius: 15px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeBackground.dragging .volumeValue,\n        vg-volume .volumeBackground.dragging .volumeKnob {\n            transition: none;\n        }\n\n        vg-volume.vertical{\n            height: 100px;\n            width: 3.5em;\n            display: block;\n            padding-top: 2em;\n            line-height: 2em;\n\n        }\n        vg-volume.vertical .volumeBar{\n\n\n            position: relative;\n            display: block;\n            top: 0.3em;\n        }\n        \n        vg-volume.vertical .volumeBackground{\n\n            \n       \n        width: 0.2em;\n        background-color:white;\n        height:100px;\n        margin: 0 auto;\n\n\n    }\n    vg-volume.vertical .volumeValue{\n\n        width: 0.2em;\n        height:auto;\n        position: absolute;\n        bottom: 0;\n        background-color:red;\n    }\n\n    vg-volume.vertical .volumeKnob{\n\n        top: auto;\n    left: 50%;\n   // margin-left: -7.5px;\n    background-color:red;\n    transform: translateX(-50%);\n   // margin-bottom: -15px;\n    }\n\n    vg-volume .caption{\n\n        position: absolute;\n        top: 0;\n        text-align: center;\n        width: 100%;\n        margin-top:0.1em;\n    }\n    "],
                    data: {}
                });

            function Ft(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "caption"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](1, null, ["", ""]))], null, function(t, e) {
                    t(e, 1, 0, e.component.getVolumecCaption())
                })
            }

            function _t(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "volumeBackground"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    dragging: 0
                }), (t()(), n["\u0275eld"](3, 0, null, null, 0, "div", [
                    ["class", "volumeValue"]
                ], [
                    [4, "width", null]
                ], null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 0, "div", [
                    ["class", "volumeKnob"]
                ], [
                    [4, "left", null]
                ], null, null, null, null))], function(t, e) {
                    var i = t(e, 2, 0, e.component.isDragging);
                    t(e, 1, 0, "volumeBackground", i)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 3, 0, 85 * i.getVolume() + "%"), t(e, 4, 0, 85 * i.getVolume() + "%")
                })
            }

            function zt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "volumeBackground"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    dragging: 0
                }), (t()(), n["\u0275eld"](3, 0, null, null, 0, "div", [
                    ["class", "volumeValue"]
                ], [
                    [4, "height", null]
                ], null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 0, "div", [
                    ["class", "volumeKnob"]
                ], [
                    [4, "bottom", null]
                ], null, null, null, null))], function(t, e) {
                    var i = t(e, 2, 0, e.component.isDragging);
                    t(e, 1, 0, "volumeBackground", i)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 3, 0, 85 * i.getVolume() + "%"), t(e, 4, 0, 85 * i.getVolume() + "%")
                })
            }

            function Ht(t) {
                return n["\u0275vid"](0, [n["\u0275qud"](402653184, 1, {
                    volumeBarRef: 0
                }), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ft)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](3, 0, [
                    [1, 0],
                    ["volumeBar", 1]
                ], null, 4, "div", [
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
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "click" === e && (n = !1 !== l.onClick(i) && n), "mousedown" === e && (n = !1 !== l.onMouseDown(i) && n), n
                }, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, _t)), n["\u0275did"](5, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, zt)), n["\u0275did"](7, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, i.vertical), t(e, 5, 0, !i.vertical), t(e, 7, 0, i.vertical)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 3, 0, i.vertical ? i.ariaValueY : i.ariaValue, i.vertical ? i.ariaValueY : i.ariaValue + "%")
                })
            }
            var Gt = i("Xsui"),
                Wt = i("c2Dm"),
                Yt = i("CDBu"),
                jt = i("B4PT"),
                Xt = function() {
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
                Ut = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-media-title{\n            z-index: 201; \n            position:absolute;\n            width:100%;\n            height:2em;\n            background: linear-gradient(to top, rgba(0, 0, 0, 0), black);\n            opacity: 0.8;\n            padding: 0.5em 0 1em 0.2em;\n            box-sizing: content-box;\n            pointer-event:none;\n            top:0;\n            -webkit-transition: top 0.5s;\n            -khtml-transition: top 0.5s;\n            -moz-transition: top 0.5s;\n            -ms-transition: top 0.5s;\n            transition: top 0.5s;\n        }\n        vg-media-title.hide{\n\n            top:-4em;\n        }\n        .vg-overlay-title{\n            font-size: 18px;\n            padding-left: 0.5em;\n            color:white;\n        }\n    "],
                    data: {}
                });

            function Kt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "vg-overlay-title"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](1, null, [" ", " "]))], null, function(t, e) {
                    t(e, 1, 0, e.component.title)
                })
            }
            var qt = i("yf2Q");
            ! function() {
                if ("undefined" == typeof window || "function" == typeof window.CustomEvent) return !1;

                function t(t, e) {
                    e = e || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
                }
                t.prototype = window.Event.prototype, window.CustomEvent = t
            }();
            var Zt = function() {
                    function t(t, e, i) {
                        this.API = e, this.vgSeekBarAPI = i, this.shouldLoad = !0, this.onShowPauseAds = new n.EventEmitter, this.shouldShow = !0, this.subscriptions = [], this.shouldShowControl = !1, this.pauseImage = null, this.elem = t.nativeElement
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
                        t.stopPropagation(), qt.d.openInNewWindow(this.pauseImage.href)
                    }, t.prototype.ngOnDestroy = function() {
                        this.subscriptions.forEach(function(t) {
                            return t.unsubscribe()
                        })
                    }, t
                }(),
                Qt = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-pause-ads{\n        //   position:absolute;\n        //   width:100%;\n        //   height:100%;\n           z-index: 204;\n        }\n        \n        .vg-overlay-pause{\n\n            width: 100%;\n            height: 100%;\n        }\n        .vg-bg{\n            display: none; \n\n position:absolute;\n\n            max-width: 640px;\n            max-height: 360px;\n            background-size: 100%;\n            margin: 0 auto;\n            cursor:pointer;\n            transform: translate(-50%,-50%);\n            left: 50%;\n            top: 50%;\n            width: 57%;\n            height: 57%;\n        }\n        .vg-b{\n            width: 100%;\n            height: 100%;\n\n        }\n        .vg-pause-close{\n            \n            background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHySURBVHjavJZNSFRRFMd/o0IQrcqyGMZFFEIUGRUhKPRBswghQsGislW4l2IgaNWyMGjjom0biaIwCjISLJionMYMtaJAJshMXES1ydevhQPpzJsP+nh/uIt3zzvnf8/HPefGVMogAewDWoBmYCNQD8wB74EskAaGgVxJK2rYiqspNWN1yOT/j4fZCyNIqoP+GQbz+mVJOtUx/w5jeTuhJMl/QLCUKFlIEi8K0ey8ZiY1CCqb/KmOTujn+cLQxZeSpIoUR0Z151G9PrRopByejmvTYb18rVCSUqnJl2lXUdmtr4eFBei9CHcfQalKz76G3ksQBLBqZaG0C0igdpc84fhb3XVM1+7VW8PF8ucTurVDNxzQ++lSHnej9pcNRXZKtxzR1W1648Hv/ScvteWkNiaX7xejHzVd+apN6rYObdivQ2l990H3HF/8DvNwOdIx9ROwjkp49gp6LsCPABrWQG4Gzp+GE+2VNGdRg6qr/9wVXbF7cR3s0S/fqtEKavLNjqo8ufcYNjdC6w6Y/gi3H1ajORdJTiKrrkjuSSJ0bryZ1u2dmkjqnZHSreXFlLae0k3tevVm2JxJ1OQn2kBRumbmoK4O+s7CoTaIlUhrcxP0nYHaWvj6vVA6AOQi7cKRzJPIJmNkM/6/vFZiUby7fg0AfskAwR4G0nsAAAAASUVORK5CYII=');\n            background-repeat:no-repeat;\n            width:25px;\n            height:25px;\n            //top: -20px;\n            right: -15px;\n            position:absolute;\n            margin-left: auto;\n            margin-right: 0;\n            top: -15px;\n                }\n        .vg-pause-close:hover{\n            background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAK9SURBVHjaxNZtaJVlGAfw355zRCiRSZumx7PKGBM19ai9KMMc2qgQBYn25XySDFGH5QuIpqxGC9oYln0o8uVDIxpIVEiCBSKIIwOdYkEMBjZ8Wa0Zo8QPzvnhPKedPWdnZ+Wg/5cHnuu+rj/3fV/X/3+XDE2uNgaSqMFyLMYclKEP3ehEB06jp1CRkgIkCaRRh5TiuIh2tOHaeEhqUY+1/j1O4BBO5f6MRxa9gv1Y6L9hLSowFcezP4PIDh6EIIuFYZ3aKEkiPKJhgvJSUlUEQfGyJVhSRVlpLlF9WPcfknTeHcx9nE/3smFVpshYWDaPz98h/WL06NJZkmTYRSNx8w/iMVq38/KKwkSLK2l9g1iMv25Ho3VIBuEc5LdpVw/pA/T2c+wA61bmEyydy2dv82SCLe9z5JvoihRqgnDQRseVbl5r4vdbHN3Phprh2LPzObSLqQ+zrYXvzjM0apXlsYZ4xVuYXZCot5+OK6xexqur6ezCEIf38cQstjbz1ZmxbuxuydDk6l5ML9pBT8/jkz1MimeIkzNoPErbyWKZvwWhFhXHjz9z8hyVSaoXcfUGX58ZT2ZZEIqdce3kpRWZhjh7icdmsv758WT2BaGajo1UFUf2MauMNw/yehO3BmipZ/3KYtndQSjXhbGokrYGEtPZ0sz35+m+zvbWzPfDnSO7Lh+dQegHo2PBHA7vpXwaGxv58vRw7IefqG9h4G8+2sULzxQa2I5YQ7yiH6swc0SoMskX72Y0bFMTJ87mp9/oo+Myzz1F3Rpu3+HCL1GfeS8IHa09r8Cjj3B3kB0f8O25QoOWmZsdBxkcZMpD0Wg7erKmlcDHI0SyvJTZM7jUxb17xVU4VcWvvfT9mWtgm3Et1xlr0TwBfgKXsTvrkLlmcQqN4YIHJWjMteCo/R7HwER7/P/2Wpnwd9f9AQCf9MFXVuEYnQAAAABJRU5ErkJggg==');\n\n        }\n    "],
                    data: {}
                });

            function Jt(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "vg-overlay-pause"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 3, "div", [
                    ["class", "vg-bg"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 0, "div", [
                    ["class", "vg-pause-close"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.close() && n), n
                }, null, null)), (t()(), n["\u0275eld"](3, 0, null, null, 1, "div", [
                    ["class", "vg-b"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.navigate(i) && n), n
                }, null, null)), n["\u0275did"](4, 278528, null, 0, f.NgStyle, [n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null)], function(t, e) {
                    t(e, 4, 0, e.component.getBackgroudImage())
                }, null)
            }

            function $t(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275and"](16777216, null, null, 1, null, Jt)), n["\u0275did"](1, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    t(e, 1, 0, !!e.component.pauseImage)
                }, null)
            }
            var te = i("uvtY"),
                ee = function() {
                    function t(t, e, i, n) {
                        this.API = e, this.fsAPI = i, this.controlsHidden = n, this.isNativeFullscreen = !1, this.areControlsHidden = !1, this.subscriptions = [], this.isTouchDevice = qt.d.isTouchDevice, this.isDesktop = !this.isTouchDevice, this.isBuffering = !0, this.shouldShowControl = !1, this.timeout = null, this.lastState = null, this.doubleClickTimer = {
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
                            e.isSingleClick = !0, ++e.clicked, null != e.timer ? (qt.d.clearTimeout(e.timer), e.isSingleClick = !1, e.timer = null, t.doubleToFull("left")) : e.timer = qt.d.setTimeout(function() {
                                e.isSingleClick && t.onClick(), e.timer = null
                            }, t.doubleClickdelay)
                        })
                    }, t.prototype.playOrPauseVideo = function() {
                        var t = this.getState();
                        t == te.a.VG_PLAYING ? this.target.pause() : (t = te.a.VG_PAUSED) && this.target.play()
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
                                case te.a.VG_PLAYING:
                                    this.shouldShowControl ? (this.shouldShowControl = !1, this.controlsHidden.show()) : this.controlsHidden.force(!0);
                                    break;
                                case te.a.VG_PAUSED:
                                case te.a.VG_ENDED:
                                    this.shouldShowControl = !1, this.target.play()
                            }
                            this.lastState = t
                        } else switch (t) {
                            case te.a.VG_PLAYING:
                                this.target.pause();
                                break;
                            case te.a.VG_PAUSED:
                            case te.a.VG_ENDED:
                                this.shouldShowControl = !1, this.target.play()
                        }
                        this.lastState = t
                    }, t.prototype.pauseVideo = function() {
                        var t = this.getState();
                        t == te.a.VG_PLAYING ? this.target.pause() : (t = te.a.VG_PAUSED) && this.target.play()
                    }, t.prototype.onSeekStart = function() {
                        this.showCaption = !0
                    }, t.prototype.onSeekEnd = function() {
                        this.showCaption = !1
                    }, t.prototype.handleClick = function(t) {
                        var e, i = this;
                        this.isTouchDevice && (this.getState() == te.a.VG_PAUSED ? ((e = this.doubleClickTimer[t]).isSingleClick = !0, null != e.timer && qt.d.clearTimeout(e.timer), this.onClick()) : ((e = this.doubleClickTimer[t]).isSingleClick = !0, null != e.timer ? (qt.d.clearTimeout(e.timer), this.handleDouble(t)) : e.timer = qt.d.setTimeout(function() {
                            e.isSingleClick && i.onClick(), e.timer = null
                        }, this.doubleClickdelay)))
                    }, t.prototype.handleDouble = function(t) {
                        var e = this.doubleClickTimer[t];
                        e.isSingleClick = !1, e.timer = null, "left" == t ? (this.API.seekTime(this.API.currentTime - this.seekTime), this.playWithLeft()) : (this.API.seekTime(this.API.currentTime + this.seekTime), this.playWithRight())
                    }, t.prototype.doubleToFull = function(t) {
                        this.fsAPI.toggleFullscreen()
                    }, t.prototype.playWithLeft = function() {
                        var t = this;
                        this.viewLeft = !0, qt.d.setTimeout(function() {
                            t.viewLeft = !1, qt.d.setTimeout(function() {
                                t.viewLeft = !0, qt.d.setTimeout(function() {
                                    return t.viewLeft = !1
                                }, 100)
                            }, 100)
                        }, 100)
                    }, t.prototype.playWithRight = function() {
                        var t = this;
                        this.viewRight = !0, qt.d.setTimeout(function() {
                            t.viewRight = !1, qt.d.setTimeout(function() {
                                t.viewRight = !0, qt.d.setTimeout(function() {
                                    return t.viewRight = !1
                                }, 100)
                            }, 100)
                        }, 100)
                    }, t.prototype.getState = function() {
                        var t = te.a.VG_PAUSED;
                        if (this.target)
                            if (this.target.state instanceof Array) {
                                for (var e = 0, i = this.target.state.length; e < i; e++)
                                    if (this.target.state[e] === te.a.VG_PLAYING) {
                                        t = te.a.VG_PLAYING;
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
                ie = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-overlay-play {\n            z-index: 200;\n        }\n        vg-overlay-play.is-buffering {\n            display: none;\n        }\n        vg-overlay-play.isdesktop .vv-state\n        {\n            pointer-events:none;\n        }\n   \n        vg-overlay-play .vg-overlay-play {\n            \n           \n            position: absolute;\n            display: block;\n            color: white;\n            width: 100%;\n            height: 100%;\n            font-size: 80px;\n           \n\n        }\n        vg-overlay-play .vg-overlay-play.is-buffering\n        {\n            display:none;\n        }\n\n        vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n\n        .vg-overlay-play .overlay-play-container{\n            width:100%;\n            height:100%;\n            position:relative;\n          }\n\n\n        .vv-state{\n            width: 2.5em;\n            height: 2.5em;\n            position: absolute;\n            color:white;\n            font-size: 100px;\n          //  background-color: rgba(255, 255, 255, 0.95);\n           // color: black;\n            border-radius: 50%;\n            padding: 0.5em;\n            left:50%;\n            top:50%;\n            margin-left: -1.25em;\n            margin-top: -1.5em;\n            transition:opacity 0.3s;\n            opacity:0;\n            visibility:hidden;\n        }\n\n        .overlay-play-container  .vg-icon-pause{\n\n            opacity:1.0;\n            visibility:visible;\n      \n         }\n \n         .overlay-play-container .vg-icon-play_arrow {\n              \n                opacity:1.0;\n               visibility:visible;\n         }\n \n        vg-overlay-play .vg-overlay-play:hover {\n            filter: alpha(opacity=100);\n            opacity: 1;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before {\n            transform: scale(1.2);\n        }\n\n        .overlay-play-container .overlay-part{\n            width:50%;\n             height:100%;\n            text-align: center;\n          }\n        .overlay-play-container .overlay-part.overlay-play-left{\n            float:left;\n          }\n        .overlay-play-container .overlay-part.overlay-play-right{\n            float:right;\n          }\n      .overlay-part>svg{\n          \n          height: 2em;\n          width: 3em;\n          font-size: 14px;\n          position: absolute;\n          top: 50%;\n          margin-top: -1.5em;\n      }\n    \n    \n       .overlay-part.overlay-play-left>svg{\n            transform: scaleX(-1);\n        left: 1em;\n        }\n       .overlay-part.overlay-play-right>svg{\n             //  margin-left: 1.2em;\n          right:2em;\n        }\n    \n        .overlay-caption{\n               width: 100%;\n        height: 3.5em;\n        font-size: 15px;\n        text-align: center;\n        background: linear-gradient(to top, transparent, black);\n        padding-top: 1em;\n        }\n    \n        .overlay-logo{\n          position:absolute;\n          width: 1.5em;\n          height: 1em;\n          pointer-events: none;\n          background-position:left top;\n          background-repeat:no-repeat;\n          margin-left: 0.5em;\n          margin-top: 0.7em;\n          top:0;\n         -webkit-transition: top 1s;\n                -khtml-transition: top 1s;\n                -moz-transition: top 1s;\n                -ms-transition: top 1s;\n                transition: top 1s;\n            background-size: contain;\n            font-size: 70px;\n        }\n        .overlay-logo.hide{\n          //top:-1em;\n      \n        }\n    "],
                    data: {}
                });

            function ne(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "overlay-caption"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5728\u5de6\u4fa7\u6216\u53f3\u4fa7\u70b9\u6309\u4e24\u6b21\u5373\u53ef\u8df3\u8fc710\u79d2"]))], null, null)
            }

            function le(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, ":svg:svg", [
                    [":xml:space", "preserve"],
                    [":xmlns:xlink", "http://www.w3.org/1999/xlink"],
                    ["id", "jump"],
                    ["style", "/* display: none; */"],
                    ["version", "1.1"],
                    ["viewBox", "0 0 36 24"],
                    ["x", "0px"],
                    ["xmlns", "http://www.w3.org/2000/svg"],
                    ["y", "0px"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 0, ":svg:polygon", [
                    ["class", "arrow"],
                    ["id", "arrow-1"],
                    ["points", "5,18 13.5,12 5,6 "]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 0, ":svg:polygon", [
                    ["class", "arrow"],
                    ["id", "arrow-2"],
                    ["points", "14,18 22.5,12 14,6 "]
                ], null, null, null, null, null))], null, null)
            }

            function se(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, ":svg:svg", [
                    [":xml:space", "preserve"],
                    [":xmlns:xlink", "http://www.w3.org/1999/xlink"],
                    ["id", "jump"],
                    ["version", "1.1"],
                    ["viewBox", "0 0 36 24"],
                    ["x", "0px"],
                    ["xmlns", "http://www.w3.org/2000/svg"],
                    ["y", "0px"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 0, ":svg:polygon", [
                    ["class", "arrow"],
                    ["id", "arrow-2"],
                    ["points", "14,18 22.5,12 14,6 "]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 0, ":svg:polygon", [
                    ["class", "arrow"],
                    ["id", "arrow-3"],
                    ["points", "23,6 23,18 31.5,12 "]
                ], null, null, null, null, null))], null, null)
            }

            function ae(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 3, "div", [
                    ["class", "overlay-logo"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    hide: 0
                }), n["\u0275did"](3, 278528, null, 0, f.NgStyle, [n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null)], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.areControlsHidden);
                    t(e, 1, 0, "overlay-logo", n), t(e, 3, 0, i.getBackgroudImage())
                }, null)
            }

            function oe(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 12, "div", [
                    ["class", "vg-overlay-play"]
                ], [
                    [2, "native-fullscreen", null],
                    [2, "controls-hidden", null],
                    [2, "is-buffering", null]
                ], null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 11, "div", [
                    ["class", "overlay-play-container"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, ne)), n["\u0275did"](3, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "vv-state"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.playOrPauseVideo() && n), n
                }, null, null)), n["\u0275did"](5, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](6, {
                    "vg-icon-play_arrow": 0,
                    "vg-icon-pause": 1
                }), (t()(), n["\u0275eld"](7, 0, null, null, 2, "div", [
                    ["class", "overlay-part overlay-play-left"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.handleClick("left") && n), n
                }, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, le)), n["\u0275did"](9, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](10, 0, null, null, 2, "div", [
                    ["class", "overlay-part overlay-play-right"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.handleClick("right") && n), n
                }, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, se)), n["\u0275did"](12, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, ae)), n["\u0275did"](14, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 3, 0, i.showCaption);
                    var n = t(e, 6, 0, "playing" !== i.getState(), i.isTouchDevice && !i.shouldShowControl);
                    t(e, 5, 0, "vv-state", n), t(e, 9, 0, i.viewLeft), t(e, 12, 0, i.viewRight), t(e, 14, 0, !i.isPlayingAds)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, i.isNativeFullscreen, i.areControlsHidden, i.isBuffering)
                })
            }
            var re = function() {
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
                ue = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-buffering {\n            display: none;\n            z-index: 201;\n        }\n\n        vg-buffering.is-buffering {\n            display: block;\n        }\n\n        .vg-buffering {\n            position: absolute;\n            display: block;\n            width: 100%;\n            height: 100%;\n        }\n\n        .vg-buffering .bufferingContainer {\n            width: 100%;\n            position: absolute;\n            cursor: pointer;\n            top: 50%;\n            margin-top: -50px;\n\n            zoom: 1;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        \n        .vg-buffering .loadingSpinner {\n            background-color: rgba(0, 0, 0, 0);\n            border: 2px solid white;\n            opacity: .9;\n            border-top: 5px solid rgba(0, 0, 0, 0);\n            border-left: 5px solid rgba(0, 0, 0, 0);\n            border-radius: 50px;\n            //box-shadow: 0 0 35px #FFFFFF;\n            width: 50px;\n            height: 50px;\n            margin: 0 auto;\n            -moz-animation: spin .5s infinite linear;\n            -webkit-animation: spin .5s infinite linear;\n        }\n\n        .vg-buffering .loadingSpinner .stop {\n            -webkit-animation-play-state: paused;\n            -moz-animation-play-state: paused;\n        }\n\n        @-moz-keyframes spin {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(360deg);\n            }\n        }\n\n        @-moz-keyframes spinoff {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(-360deg);\n            }\n        }\n\n        @-webkit-keyframes spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(360deg);\n            }\n        }\n\n        @-webkit-keyframes spinoff {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(-360deg);\n            }\n        }\n    "],
                    data: {}
                });

            function he(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "vg-buffering"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "div", [
                    ["class", "bufferingContainer"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 0, "div", [
                    ["class", "loadingSpinner"]
                ], null, null, null, null, null))], null, null)
            }
            var de = i("bne5"),
                ce = function() {
                    function t(t, e, i) {
                        this.API = t, this.ref = e, this.hidden = i, this.isAdsPlaying = "initial", this.hideControls = !1, this.vgAutohide = !1, this.vgAutohideTime = 3, this.subscriptions = [], this.elem = e.nativeElement
                    }
                    return t.prototype.ngOnInit = function() {
                        var t = this,
                            e = Object(de.a)(this.API.videogularElement, "mousemove");
                        if (this.subscriptions.push(e.subscribe(this.show.bind(this))), !qt.d.shouldHandleMouse) {
                            var i = Object(de.a)(this.API.videogularElement, "touchstart", {
                                passive: !0
                            });
                            this.subscriptions.push(i.subscribe(this.show.bind(this)))
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
                        this.API.state === te.a.VG_PLAYING && (this.timer = setTimeout(function() {
                            t.hideControls = !0, t.hidden.state(!0)
                        }, 1e3 * this.vgAutohideTime))
                    }, t.prototype.ngOnDestroy = function() {
                        this.subscriptions.forEach(function(t) {
                            return t.unsubscribe()
                        })
                    }, t
                }(),
                pe = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-controls {\n            position: absolute;\n            display: flex;\n            width: 100%;\n            height: 50px;\n            z-index: 300;\n            bottom: 0;\n            background-color: rgba(0, 0, 0, 0.5);\n            -webkit-transition: bottom 1s;\n            -khtml-transition: bottom 1s;\n            -moz-transition: bottom 1s;\n            -ms-transition: bottom 1s;\n            transition: bottom 1s;\n        }\n\n        vg-controls.hide {\n            bottom: -50px;\n        }\n    "],
                    data: {}
                });

            function ge(t) {
                return n["\u0275vid"](0, [n["\u0275ncd"](null, 0)], null, null)
            }
            var fe = function() {
                    function t(t, e, i, n) {
                        var l = this;
                        this.API = e, this.vgSeekBarAPI = n, this.hideScrubBar = !1, this.vgSlider = !0, this.isSeeking = !1, this.wasPlaying = !1, this.display = "", this.percetange = "0%", this.subscriptions = [], this.playerReady = !1, this.asClick = null, this.hasPaused = !1, this.timeout = null, this.elem = t.nativeElement, this.subscriptions.push(i.isHidden.subscribe(function(t) {
                            return l.onHideScrubBar(t)
                        }))
                    }
                    return Object.defineProperty(t.prototype, "istouchdevice", {
                        get: function() {
                            return qt.d.isTouchDevice
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
                        this.target.canPlay && (this.isSeeking = !0, this.target.state === te.a.VG_PLAYING && (this.wasPlaying = !0), this.hasPaused = !1, this.vgSeekBarAPI.notify("seekstart"))
                    }, t.prototype.seekMove = function(t) {
                        var e = this;
                        if (this.isSeeking) {
                            this.asClick ? (qt.d.clearTimeout(this.asClick), this.asClick = null) : this.hasPaused || (this.hasPaused = !0, this.target.pause());
                            var i = Math.max(Math.min(100 * t / this.elem.scrollWidth, 99.9), 0);
                            this.target.time.current = i * this.target.time.total / 100, null != this.timeout && qt.d.clearTimeout(this.timeout), this.timeout = qt.d.setTimeout(function() {
                                return e.target.seekTime(i, !0)
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
                        for (var e = 0, i = t.target; i;) e += i.offsetLeft, i = i.offsetParent;
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
                        if (qt.d.shouldHandleMouse && this.target && !this.target.isLive && this.vgSlider && this.isSeeking) {
                            var e = this.getPosition(this.elem).left;
                            t.clientX >= e && t.clientX <= e + this.elem.offsetWidth && this.seekMove(t.clientX - e)
                        }
                    }, t.prototype.onMouseOver = function(t) {
                        if (qt.d.shouldHandleMouse && this.target && !this.target.isLive) {
                            var e = Math.max(Math.min(t.offsetX / this.elem.scrollWidth, .999), 0),
                                i = new Date(this.target.time.total * e),
                                n = "hh:mm:ss",
                                l = i.getUTCSeconds(),
                                s = i.getUTCMinutes(),
                                a = i.getUTCHours();
                            l < 10 && (l = "0" + l), s < 10 && (s = "0" + s), a < 10 && (a = "0" + a), n = (n = (n = n.replace(/ss/g, l)).replace(/mm/g, s)).replace(/hh/g, a), this.display = n, e > .95 && (e = .95), e < .05 && (e = .05), this.percetange = 100 * e + "%"
                        }
                    }, t.prototype.onMouseUpScrubBar = function(t) {
                        qt.d.shouldHandleMouse && this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.seekEnd(t.offsetX)
                    }, t.prototype.onTouchStartScrubBar = function(t) {
                        var e = this;
                        if (!qt.d.shouldHandleMouse && this.target && !this.target.isLive)
                            if (this.vgSlider) {
                                null != this.asClick && qt.d.clearTimeout(this.asClick);
                                var i = this.getTouchOffset(t);
                                this.asClick = qt.d.setTimeout(function() {
                                    e.seekEnd(i)
                                }, 250), this.seekStart()
                            } else this.seekEnd(this.getTouchOffset(t))
                    }, t.prototype.onTouchMoveScrubBar = function(t) {
                        qt.d.shouldHandleMouse || this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.seekMove(this.getTouchOffset(t))
                    }, t.prototype.onTouchCancelScrubBar = function(t) {
                        qt.d.shouldHandleMouse || this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.touchEnd()
                    }, t.prototype.onTouchEndScrubBar = function(t) {
                        qt.d.shouldHandleMouse || this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.touchEnd()
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
                me = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-scrub-bar {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            position: absolute;\n            width: 100%;\n            height: 5px;\n            bottom: 50px;\n            margin: 0;\n            cursor: pointer;\n            align-items: center;\n            background: rgba(0, 0, 0, 0.75);\n            z-index: 250;\n            -webkit-transition: bottom 1s, opacity 0.5s;\n            -khtml-transition: bottom 1s, opacity 0.5s;\n            -moz-transition: bottom 1s, opacity 0.5s;\n            -ms-transition: bottom 1s, opacity 0.5s;\n            transition: bottom 1s, opacity 0.5s;\n        }\n        \n        vg-scrub-bar .scrubBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            height: 1em;\n        }\n\n        vg-controls vg-scrub-bar {\n            position: relative;\n            bottom: 0;\n            background: transparent;\n            height: 50px;\n            flex-grow: 1;\n            flex-basis: 0;\n            margin: 0 10px;\n            -webkit-transition: initial;\n            -khtml-transition: initial;\n            -moz-transition: initial;\n            -ms-transition: initial;\n            transition: initial;\n        }\n\n        vg-scrub-bar.hide {\n            bottom: 0;\n            opacity: 0;\n        }\n\n        vg-controls vg-scrub-bar.hide {\n            bottom: initial;\n            opacity: initial;\n        }\n        .scrubBar .overshow{\n            position: absolute;\n            top: -2.5em;\n            background-color: #222222;\n            text-align: center;\n            font-size: 15px;\n            color: white;\n            padding: 0.2em 1em;\n            border: 1px solid #4d4d4d;\n            display:none;\n            transform: translateX(-50%);\n        }\n        .scrubBar:hover .overshow{\n\n            display:block;\n        }\n        \n    "],
                    data: {}
                });

            function ve(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 3, "div", [
                    ["class", "overshow"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgStyle, [n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), n["\u0275pod"](2, {
                    left: 0
                }), (t()(), n["\u0275ted"](3, null, ["", ""]))], function(t, e) {
                    var i = t(e, 2, 0, e.component.percetange);
                    t(e, 1, 0, i)
                }, function(t, e) {
                    t(e, 3, 0, e.component.display)
                })
            }

            function be(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 3, "div", [
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
                ], function(t, e, i) {
                    var n = !0;
                    return "mousemove" === e && (n = !1 !== t.component.onMouseOver(i) && n), n
                }, null, null)), n["\u0275ncd"](null, 0), (t()(), n["\u0275and"](16777216, null, null, 1, null, ve)), n["\u0275did"](3, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 3, 0, !i.istouchdevice && i.playerReady)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, i.getPercentage(), i.getPercentage() + "%")
                })
            }
            var ye = function() {
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
                xe = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ['\n        vg-scrub-bar-current-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-current-time .background {\n            background-color: #fe0000;\n           // border-radius: 0.2em;\n            z-index:1;\n        }\n        vg-scrub-bar-current-time .background::before {\n            content: " ";\n            width: 16px;\n            height: 16px;\n            position: relative;\n            display: block;\n            //  right: -8px;\n            background-color: white;\n            border: 3px solid red;\n            border-radius: 50%;\n            top: -4px;\n            right: 0;\n            float: right;\n            right: -9px;\n          }\n\n        vg-controls vg-scrub-bar-current-time {\n            position: absolute;\n            top: calc(50% - 3px);\n           \n        }\n\n        vg-controls vg-scrub-bar-current-time .background {\n           // border: 1px solid white;\n            //-webkit-border-radius: 2px;\n            //-moz-border-radius: 2px;\n            //border-radius: 2px;\n        }\n        \n        vg-scrub-bar-current-time .slider{\n            background: white;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            box-shadow: 0px 0px 10px black;\n            margin-top: -5px;\n            margin-left: -10px;\n        }\n    '],
                    data: {}
                });

            function Ce(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "span", [
                    ["class", "slider"]
                ], null, null, null, null, null))], null, null)
            }

            function we(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "background"]
                ], [
                    [4, "width", null]
                ], null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ce)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.component.vgSlider)
                }, function(t, e) {
                    t(e, 0, 0, e.component.getPercentage())
                })
            }
            var ke = function() {
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
                Se = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-scrub-bar-buffering-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-buffering-time .background {\n            background-color: rgba(255, 255, 255, 0.3);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time .background {\n            \n        }\n    "],
                    data: {}
                });

            function Me(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "background"]
                ], [
                    [4, "width", null]
                ], null, null, null, null))], null, function(t, e) {
                    t(e, 0, 0, e.component.getBufferTime())
                })
            }
            var Ae = function() {
                    function t(t, e) {
                        this.API = e, this.subscriptions = [], this.ariaValue = te.a.VG_PAUSED, this.elem = t.nativeElement
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
                            case te.a.VG_PLAYING:
                                this.target.pause();
                                break;
                            case te.a.VG_PAUSED:
                            case te.a.VG_ENDED:
                                this.target.play()
                        }
                    }, t.prototype.getState = function() {
                        return this.ariaValue = this.target ? this.target.state : te.a.VG_PAUSED, this.ariaValue
                    }, t.prototype.ngOnDestroy = function() {
                        this.subscriptions.forEach(function(t) {
                            return t.unsubscribe()
                        })
                    }, t
                }(),
                Pe = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-play-pause {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-play-pause .icon {\n            pointer-events: none;\n        }\n    "],
                    data: {}
                });

            function Ne(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "icon"],
                    ["role", "button"],
                    ["tabindex", "0"]
                ], [
                    [2, "vg-icon-pause", null],
                    [2, "vg-icon-play_arrow", null],
                    [1, "aria-label", 0],
                    [1, "aria-valuetext", 0]
                ], null, null, null, null))], null, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, "playing" === i.getState(), "paused" === i.getState() || "ended" === i.getState(), "paused" === i.getState() ? "play" : "pause", i.ariaValue)
                })
            }
            var Te = function() {
                    function t(t) {
                        this.API = t, this.subscriptions = [], this.isAvailable = !1, this.attched = !1
                    }
                    return t.prototype.ngOnInit = function() {
                        var t = this;
                        (qt.d.isiOSDevice() || qt.d.IsMac()) && (this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(function() {
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
                Ie = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n    vg-airplay\n     {\n      \n        display: none !important;\n        width: 1.8em;\n        height: 1.2em;\n        text-align: center;\n        color:white;\n        cursor:pointer;\n        margin-right: 2em !important;\n\n     }\n     vg-airplay .icon{\n     }\n     vg-airplay .icon:before{\n       color:white;\n     }\n     vg-airplay.show\n     {\n\n       display:inline-block !important;\n       cursor:pointer;\n     }\n  "],
                    data: {}
                });

            function Oe(t) {
                return n["\u0275vid"](0, [n["\u0275qud"](402653184, 1, {
                    video: 0
                }), (t()(), n["\u0275eld"](1, 0, null, null, 2, "div", [
                    ["class", "icon vg-icon-airplay"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.showList() && n), n
                }, null, null)), n["\u0275did"](2, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](3, {
                    show: 0
                }), (t()(), n["\u0275eld"](4, 0, [
                    [1, 0],
                    ["videoElement", 1]
                ], null, 0, "video", [
                    ["style", "display:none"]
                ], null, null, null, null, null))], function(t, e) {
                    var i = t(e, 3, 0, e.component.isAvailable);
                    t(e, 2, 0, "icon vg-icon-airplay", i)
                }, null)
            }
            var Re = function() {
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
                De = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-mute {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-mute .icon {\n            pointer-events: none;\n        }\n    "],
                    data: {}
                });

            function Le(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
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
                ], null, null, null, null))], null, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, i.getVolume() >= .75, i.getVolume() >= .25 && i.getVolume() < .75, i.getVolume() > 0 && i.getVolume() < .25, 0 === i.getVolume(), i.ariaValue)
                })
            }
            var Be = function() {
                    function t() {}
                    return t.prototype.transform = function(t, e) {
                        var i = new Date(t),
                            n = e,
                            l = i.getUTCSeconds(),
                            s = i.getUTCMinutes(),
                            a = i.getUTCHours();
                        return l < 10 && (l = "0" + l), s < 10 && (s = "0" + s), a < 10 && (a = "0" + a), (n = (n = n.replace(/ss/g, l)).replace(/mm/g, s)).replace(/hh/g, a)
                    }, t
                }(),
                Ee = function() {
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
                Ve = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-time-display {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 60px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            pointer-events: none;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "],
                    data: {}
                });

            function Fe(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["LIVE"]))], null, null)
            }

            function _e(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](1, null, ["", ""])), n["\u0275ppd"](2, 2)], null, function(t, e) {
                    var i = e.component,
                        l = n["\u0275unv"](e, 1, 0, t(e, 2, 0, n["\u0275nov"](e.parent, 0), i.getTime(), i.vgFormat));
                    t(e, 1, 0, l)
                })
            }

            function ze(t) {
                return n["\u0275vid"](0, [n["\u0275pid"](0, Be, []), (t()(), n["\u0275and"](16777216, null, null, 1, null, Fe)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, _e)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), n["\u0275ncd"](null, 0)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, null == i.target ? null : i.target.isLive), t(e, 4, 0, !(null != i.target && i.target.isLive))
                }, null)
            }
            var He = function() {
                    function t(t, e, i) {
                        this.API = e, this.fsAPI = i, this.isFullscreen = !1, this.subscriptions = [], this.ariaValue = "normal mode", this.elem = t.nativeElement, this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)))
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
                        this.target instanceof Pt.a && (t = null), this.fsAPI.toggleFullscreen(t)
                    }, t.prototype.ngOnDestroy = function() {
                        this.subscriptions.forEach(function(t) {
                            return t.unsubscribe()
                        })
                    }, t
                }(),
                Ge = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: ["\n        vg-fullscreen {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-fullscreen .icon {\n            pointer-events: none;\n        }\n    "],
                    data: {}
                });

            function We(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["aria-label", "fullscreen button"],
                    ["class", "icon"],
                    ["role", "button"],
                    ["tabindex", "0"]
                ], [
                    [2, "vg-icon-fullscreen", null],
                    [2, "vg-icon-fullscreen_exit", null],
                    [1, "aria-valuetext", 0]
                ], null, null, null, null))], null, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, !i.isFullscreen, i.isFullscreen, i.ariaValue)
                })
            }
            var Ye = i("XJ1o"),
                je = i("X/Az"),
                Xe = i("gI3B"),
                Ue = function(t) {
                    return t[t.Timer = 0] = "Timer", t[t.SkipTimer = 1] = "SkipTimer", t[t.ShouldPlayAds = 2] = "ShouldPlayAds", t[t.ShouldLoadAds = 3] = "ShouldLoadAds", t[t.ShouldBackToPlay = 4] = "ShouldBackToPlay", t[t.ShouldCancel = 5] = "ShouldCancel", t[t.StandBy = 6] = "StandBy", t
                }({}),
                Ke = function() {
                    function t() {
                        this.pointToshow = [], this.eventList = new n.EventEmitter, this.timer = null, this.subscript = null, this.globalsubscript = null, this.dataList = [], this.maxSecond = 20, this.waitSecond = 5, this.skipSecond = 0, this.startSecond = 600, this.everySecond = 1200, this.isPlayingAds = !1, this.globaltimer = null, this.state = Ue.StandBy, this.ispaused = !1, this.pausesecond = 0, this.index = 0, this.key = "", this.rules = [{
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
                    }, t.prototype.invokeList = function(e, i, n) {
                        var l = this;
                        i > -1 && (this.startSecond = i), n > 0 && (this.everySecond = n);
                        for (var s = 0; s < e.length; ++s) e[s].playfirst || this.dataList.push(e[s]);
                        t.isUseGolbal && (this.globaltimer = Object(Xe.a)(1e3 * this.startSecond, 1e3 * this.everySecond), this.globalsubscript = this.globaltimer.subscribe(function(t) {
                            l.ispaused || l.isPlayingAds || l.play()
                        }))
                    }, t.prototype.reset = function() {
                        this.subscript && this.subscript.unsubscribe(), this.eventList.emit({
                            event: Ue.ShouldCancel,
                            data: {}
                        }), this.isPlayingAds = !1, this.pointToshow.forEach(function(t) {
                            t.played = !1
                        }), this.state = Ue.ShouldCancel, this.attenpToPlay = !1
                    }, t.prototype.cancel = function() {
                        this.pointToshow.forEach(function(t) {
                            t.played = !0
                        })
                    }, t.prototype.continue = function() {}, t.prototype.stopPlay = function() {
                        this.timer && (this.timer = null), this.subscript && this.subscript.unsubscribe(), this.attenpToPlay = !1, this.eventList.emit({
                            event: Ue.ShouldBackToPlay,
                            data: {}
                        }), this.state = Ue.ShouldBackToPlay, this.pausesecond = 0, this.isPlayingAds = !1
                    }, t.prototype.pause = function() {
                        this.ispaused = !0
                    }, t.prototype.renew = function() {
                        this.ispaused = !1
                    }, t.prototype.play = function() {
                        this.dataList.length > this.index || (this.index = 0), this.startPlay(this.dataList[this.index]), ++this.index
                    }, t.prototype.startPlay = function(t) {
                        var e = this;
                        t && (this.timer && (this.timer = null), this.subscript && this.subscript.unsubscribe(), this.timer = Object(Xe.a)(1e3, 1e3), this.subscript = this.timer.subscribe(function(t) {
                            e.ispaused ? ++e.pausesecond : t - e.pausesecond == e.waitSecond ? (e.eventList.emit({
                                event: Ue.ShouldPlayAds,
                                data: {}
                            }), e.state = Ue.ShouldPlayAds, e.timer = null, e.subscript.unsubscribe(), e.subscript = null, e.startLoadCounter()) : (e.eventList.emit({
                                event: Ue.Timer,
                                data: {
                                    time: e.waitSecond + e.pausesecond - t + ""
                                }
                            }), e.state = Ue.Timer)
                        }), this.isPlayingAds = !0, this.eventList.emit({
                            event: Ue.ShouldLoadAds,
                            data: t
                        }), this.state = Ue.ShouldLoadAds)
                    }, t.prototype.startCountDown = function(t, e, i) {
                        var n = this;
                        this.timer = Object(Xe.a)(0, 1e3), this.subscript = this.timer.subscribe(function(l) {
                            n.ispaused ? ++n.pausesecond : (l - n.pausesecond == t && n.subscript.unsubscribe(), (l - n.pausesecond) % e == 0 && i(), n.eventList.emit({
                                event: Ue.SkipTimer,
                                data: {
                                    time: n.skipSecond - l + n.pausesecond + "",
                                    left: t - l + n.pausesecond
                                }
                            }), n.state = Ue.SkipTimer)
                        })
                    }, t.prototype.startLoadCounter = function() {
                        var t = this;
                        this.timer = Object(Xe.a)(0, 1e3), this.subscript = this.timer.subscribe(function(e) {
                            e == t.maxSecond ? t.stopPlay() : (t.eventList.emit({
                                event: Ue.SkipTimer,
                                data: {
                                    time: t.skipSecond - e + "",
                                    left: t.maxSecond - e
                                }
                            }), t.state = Ue.SkipTimer)
                        })
                    }, t.prototype.getTimeDefine = function(t, e) {
                        if (!this.key || this.key != t) {
                            this.key = t;
                            var i = [],
                                n = null;
                            for (var l in this.rules)
                                if (this.rules[l].second > e) {
                                    n = this.rules[l];
                                    break
                                } if (n || (n = this.rules[0]), n) {
                                var s = Math.floor(e / n.every);
                                n.total = e, n.canshow = s, n.canshow > n.min && s * n.every > e - n.left && --n.canshow;
                                for (var a = 0; a < n.canshow; ++a) i.push({
                                    point: n.every * (a + 1),
                                    played: !1
                                });
                                this.pointToshow = i
                            }
                        }
                    }, t.prototype.needToShow = function(t) {
                        if (!this.attenpToPlay && t > 0)
                            for (var e = 0; e < this.pointToshow.length; ++e) !this.pointToshow[e].played && t > this.pointToshow[e].point && (this.attenpToPlay ? this.pointToshow[e].point = t + 1 * (e + 1) * 60 : (this.pointToshow[e].played = !0, this.attenpToPlay = !0, this.play()))
                    }, t.isUseGolbal = !1, t
                }(),
                qe = function() {
                    function t() {}
                    return t.clearTimeout = function(t) {
                        t && t.unsubscribe()
                    }, t.setTimeout = function(t, e) {
                        var i = Object(Xe.a)(e, 0),
                            n = i.subscribe(function(e) {
                                t(), n.unsubscribe(), i = null
                            });
                        return n
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
                            navigator && navigator.mimeTypes && null != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = !0)
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
                            i = e.vendor,
                            n = e.userAgent.indexOf("OPR") > -1,
                            l = e.userAgent.indexOf("Edge") > -1;
                        return !!e.userAgent.match("CriOS") || null != t && "Google Inc." === i && 0 == n && 0 == l
                    }, t.IsMac = function() {
                        try {
                            return -1 != navigator.userAgent.indexOf("Macintosh")
                        } catch (t) {}
                    }, t.GetFileExtension = function(t) {
                        return t && (t = t.substr(1 + t.lastIndexOf("/")).split("?")[0]).lastIndexOf(".") > -1 ? t.substr(t.lastIndexOf(".")) : ""
                    }, t
                }(),
                Ze = function(t) {
                    return t[t.none = 0] = "none", t[t.playnext = 1] = "playnext", t[t.intersistial = 2] = "intersistial", t[t.playerload = 3] = "playerload", t[t.loadmedia = 4] = "loadmedia", t[t.skipads = 5] = "skipads", t[t.onPlayVideo = 6] = "onPlayVideo", t[t.ended = 7] = "ended", t[t.invokeplaySecond = 8] = "invokeplaySecond", t[t.reload = 9] = "reload", t[t.changeConfig = 10] = "changeConfig", t
                }({}),
                Qe = function() {
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
                        var i = e,
                            n = "",
                            l = 0;
                        ".m3u8" == qe.GetFileExtension(e) && (i = t.ckfolder + "m3u8.swf", n = encodeURIComponent(e), l = 4);
                        var s = t.defaultOption;
                        return s.f = i, s.a = n, s.s = l, s
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
                            this.eventList[t] = new n.EventEmitter
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
                            }).length > 1) switch (this.publicManager = new Ke, t.action) {
                            case Ze.playerload:
                                this.getRef().getparent().isPlayingAds = !0, this.eventAttached = !0, this.getCkObject().setLogoVisible(!1), this.getCkObject().setSideBarVisible(!1), this.subscripted = this.publicManager.eventList.subscribe(function(t) {
                                    switch (e.intersitialHandler(t), t) {
                                        case Ue.ShouldBackToPlay:
                                            e.backToPlay(), e.getRef().ckAction(null, {
                                                action: "playerload",
                                                params: null
                                            })
                                    }
                                });
                                var i = 0,
                                    n = F.a.production ? 20 : 5;
                                this.publicManager.startCountDown((this.mediaList.length - 1) * n, n, function() {
                                    ++i > 3 ? (e.isplayAds = !1, e.backToPlay(), e.getRef().ckAction(null, {
                                        action: "playerload",
                                        params: null
                                    })) : i > 0 && (1 == i && (e.publicManager.eventList.next({
                                        event: Ue.ShouldLoadAds,
                                        data: e.mediaList[i]
                                    }), e.publicManager.eventList.next({
                                        event: Ue.ShouldPlayAds,
                                        data: null
                                    })), e.isplayAds = !0, e.mediaList[i - 1].isplayed = !0, i > 1 && (e.embedSWF(e.mediaList[i - 1].src, "", !0), e.getRef().getparent().onPlayNextVideo(!0)))
                                })
                        }
                    }, t.prototype.embedSWF = function(e, i, n) {
                        if (this.isplayAds = n, t.defaultOption.title = i, this.isEmbed) {
                            this.setTitle(i);
                            var l = {
                                s: 0,
                                a: "",
                                f: ""
                            };
                            ".m3u8" == qe.GetFileExtension(e) ? (l.s = 4, l.f = t.ckfolder + "m3u8.swf", l.a = e) : (l.s = 0, l.f = e, l.a = ""), n ? (l.e = 1, l.lv = 1) : (l.e = 0, l.lv = 0), this.getCkObject().newAddress(this.getData(l)), this.getCkObject().setLogoVisible(!this.isplayAds), this.getCkObject().setSideBarVisible(!this.isplayAds)
                        } else this.isEmbed = !0, this.ckAPI.embedSWF(t.ckPlayerPath, t.ckId, t.ckobjId, "100%", "100%", t.flashVar(e), {
                            bgcolor: "#FFF",
                            allowFullScreen: !0,
                            allowScriptAccess: "always",
                            wmode: "transparent"
                        })
                    }, t.prototype.getData = function(t) {
                        var e = "";
                        for (var i in t) e += "{" + i + "->" + t[i] + "}";
                        return e + ""
                    }, t.prototype.setTitle = function(e) {
                        this.eventAttached && (void 0 === e && (e = ""), this.ckAPI.getObjectById(t.ckobjId).setTitle(e))
                    }, t.prototype.getCkObject = function() {
                        return this.ckAPI.getObjectById(t.ckobjId)
                    }, t.prototype._mutipleVideoHandler = function(e) {
                        0 == this.mediaList.length && (this.mediaList = e);
                        var i = e[0];
                        t.defaultOption.lv = 1, this.playMedia = i, this.embedSWF(i.rtmp || i.src, i.title, !0), this.triggerPlayAds(i)
                    }, t.prototype.triggerPlayAds = function(t) {
                        this.trigger("playAds", t)
                    }, t.prototype.playVideo = function(t, e) {
                        if (t.length > 1) this._mutipleVideoHandler(t);
                        else if (t.length > 0) {
                            var i = t[0];
                            e ? this.triggerPlayAds(i) : this.playMedia = i, this.embedSWF(i.rtmp || i.src, i.title, e), this.getRef().getparent().onPlayNextVideo(e)
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
                            for (var i in n = "", l = "", e) n += e[i].src + "|", l += e[i].href + "|", this.cachePause += e[i].src + "|";
                            e.length && (n.substring(0, n.length - 2), l.substring(0, l.length - 2), this.cachePause.substring(0, this.cachePause.length - 2)), this.getCkObject().changeFlashvars(this.getData({
                                d: n,
                                u: l
                            }))
                        } else {
                            var n = "",
                                l = "";
                            for (var i in e) n += encodeURIComponent(e[i].src) + "|", l += encodeURIComponent(e[i].href) + "|", this.cachePause += e[i].src + "|";
                            e.length && (n.substring(0, n.length - 2), l.substring(0, l.length - 2), this.cachePause.substring(0, this.cachePause.length - 2)), t.defaultOption.d = n, t.defaultOption.u = l
                        }
                        this.getRef().getparent().invokePauseList(e)
                    }, t.prototype.setFilterGold = function(t) {
                        this.getCkObject().setFilterGold(t)
                    }, t.prototype.intersitialHandler = function(t) {
                        if (this.eventAttached) {
                            switch (t.event) {
                                // case Ue.ShouldPlayAds:
                                //     this.cacheSecond = this.currentTime, this.getCkObject().changeFlashvars(this.getData({
                                //         d: ""
                                //     }));
                                //     break;
                                case Ue.ShouldBackToPlay:
                                    this.getCkObject().changeFlashvars(this.getData({
                                        d: this.cachePause
                                    }));
                                    break;
                                case Ue.ShouldCancel:
                                    this.cacheSecond = 0
                            }
                            this.getCkObject().interstitialhandler(t)
                        }
                    }, t.prototype.seekCacheSecond = function() {
                        var t = this;
                        !this.isplayAds && this.cacheSecond > 0 && qe.setTimeout(function() {
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
                            i = this.listenTo("play").subscribe(function() {
                                t.seek(e), i.unsubscribe()
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
                Je = function() {
                    function t() {
                        this.videoPath = "", this.onCkEvent = new n.EventEmitter, this.onPlayerReady = new n.EventEmitter, this.onPlayerTrulyReady = new n.EventEmitter, this.filterGold = 10, this.parent = null, this.ckPlayer = null, this.loadHandlerKey = Qe.loadHandlerKey, this.ckId = Qe.ckId, this.isVideoplaying = !1, this.isInPassive = !1, this.totalTime = 0, this.previoustime = 0
                    }
                    return Object.defineProperty(t.prototype, "flashVar", {
                        get: function() {
                            return Qe.flashVar(this.videoPath)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ngOnInit = function() {}, t.prototype.playerReady = function() {
                        this.ckPlayer = CKobject, this.api = new Qe(this, this.ckPlayer), this.onPlayerReady.next(this.api)
                    }, t.prototype.ckAction = function(t, e) {
                        if (e && e.action)
                            if (e.action = Ze[e.action], e.action != Ze.skipads && this.api.isplayAds) this.api.isplayAds && this.api.doaction(e);
                            else {
                                switch (e.action) {
                                    case Ze.playerload:
                                        this.api.eventAttached = !0, this.videoPlayerLoaded();
                                        break;
                                    case Ze.loadmedia:
                                        this.api.eventList.loadedmetadata.next();
                                        break;
                                    case Ze.ended:
                                        this.api.eventList.ended.next(), this.api.mediaList = [];
                                        break;
                                    case Ze.reload:
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
                $e = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".expand[_ngcontent-%COMP%]{width:100%;height:100%}.pauseCaption[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;top:0;left:0;background-color:rgba(128,128,128,.490196);z-index:5000}.pauseCaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{position:relative;height:3em;top:50%;margin-top:-1.5em;color:#fff;text-align:center;cursor:pointer}"]
                    ],
                    data: {}
                });

            function ti(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "expand"]
                ], [
                    [1, "id", 0]
                ], null, null, null, null))], null, function(t, e) {
                    t(e, 0, 0, e.component.ckId)
                })
            }
            i("JQBr");
            var ei = function() {
                    function t(t) {
                        this._cookie = t
                    }
                    return t.prototype.QueryStringToJSON = function(t) {
                        var e = t ? t.split("&") : [],
                            i = {};
                        return e.forEach(function(t) {
                            var e = (t = t.split("="))[0],
                                n = t[1];
                            e.length && (void 0 !== i[e] ? (i[e].push || (i[e] = [i[e]]), i[e].push(n || "")) : i[e] = n || "")
                        }), i
                    }, t.toQueryString = function(t) {
                        var e = [];
                        for (var i in t) t.hasOwnProperty(i) && e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
                        return e.join("&")
                    }, t.prototype.getConfig = function() {
                        var t = this._cookie.get("dn_config");
                        return this.QueryStringToJSON(t)
                    }, t.GetHost = function(e) {
                        void 0 === e && (e = "");
                        var i = "";
                        return i = t.GetDomain(window.location.hostname), e && (i = e.replace("{Host}", i)), i
                    }, t.GetDomain = function(t, e) {
                        return void 0 === e && (e = !1), e = e || !1, t = t.replace(/(https?:\/\/)?(www.)?/i, ""), e || (t = (t = t.split(".")).slice(t.length - 2).join(".")), -1 !== t.indexOf("/") ? t.split("/")[0] : t
                    }, t.prototype.setCookie = function(e, i, n) {
                        var l = "";
                        if (n) {
                            var s = new Date;
                            s.setTime(s.getTime() + 24 * n * 60 * 60 * 1e3), l = "; expires=" + s.toUTCString()
                        }
                        var a = t.GetHost(),
                            o = "domain=" + (a && 0 == a.indexOf(".") ? a : "." + a);
                        document.cookie = e + "=" + (i || "") + l + "; path=/;" + o
                    }, t.prototype.setConfig = function(e) {
                        var i = this.getConfig();
                        for (var n in e) i[n] = e[n];
                        this.setCookie("dn_config", t.toQueryString(i), 365)
                    }, t
                }(),
                ii = i("jmvC"),
                ni = function() {
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
                li = function() {
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
                        var i = this,
                            l = this.vgAPI.getDefaultMedia();
                        if (!this.eventList[t] && (this.eventList[t] = new n.EventEmitter, l)) switch (t) {
                            case "ended":
                                this.subscriptions.push(l.subscriptions.ended.subscribe(function() {
                                    l.currentPlayPos > 6 && !i.isPlayingAds && (i.mediaList = [], i.eventList[t].next(null))
                                }));
                                break;
                            case "time":
                                this.subscriptions.push(l.subscriptions.timeUpdate.subscribe(function(e) {
                                    i.isPlayingAds || l.time && l.time.current && l.time.total && !isNaN(l.time.total) && (!i.lastTimer || Math.abs(l.time.current - i.lastTimer.current) > 1e3) && (i.lastTimer = l.time, i.eventList[t].next(l.time))
                                }));
                                break;
                            case "fullscreen":
                                this.subscriptions.push(Object(de.a)(window, qt.b.VG_FULLSCREEN).subscribe(function(e) {
                                    e && e.detail && i.eventList[t].next({
                                        isfullscreen: e.detail.isfullscren,
                                        isfake: e.detail.isfake
                                    })
                                }));
                                break;
                            case "play":
                                this.subscriptions.push(l.subscriptions.play.subscribe(function(e) {
                                    i.isPlayingAds || i.eventList[t].next(l.time)
                                }));
                                break;
                            case "pause":
                                this.subscriptions.push(l.subscriptions.pause.subscribe(function(e) {
                                    i.isPlayingAds || i.eventList[t].next(l.time)
                                }));
                                break;
                            case "controlBarShow":
                                this.subscriptions.push(this.vgAPI.hiddenAPI.isHidden.subscribe(function(e) {
                                    i.eventList[t].next(!e)
                                }));
                                break;
                            case "loadedmetadata":
                                this.subscriptions.push(l.subscriptions.loadedMetadata.subscribe(function(e) {
                                    i.isPlayingAds || null == i.getPlayMedia || "loading" == i.getPlayMedia.title || i.eventList[t].next(!e)
                                }));
                            case "volumechange":
                                this.subscriptions.push(l.subscriptions.volumeChange.subscribe(function(e) {
                                    i.isPlayingAds || i.eventList[t].next(parseInt(100 * l.volume + ""))
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
                            t.src = t.backup, t.backup = e, t.isHls = ".m3u8" == qe.GetFileExtension(t.src)
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
                            var i = t[0];
                            0 != this.component.isFluence || i.isHls || this.swapBackup(i), this.component.media = i, this.component.isPlayingAds = e, this._playVideo(), e ? (this.isPlayingAds = !0, this.triggerPlayAds(i)) : this.isPlayingAds = !1, this.component.onPlayNextVideo(e)
                        }
                    }, t.prototype.intersitialHandler = function(t) {
                        switch (t.event) {
                            // case Ue.Timer:
                            //     break;
                            // case Ue.ShouldPlayAds:
                            //     this.isPlayingAds = !0, window.dispatchEvent(new CustomEvent(qt.b.VG_START_ADS));
                            //     break;
                            case Ue.ShouldBackToPlay:
                                for (var e = 0; e < this.mediaList.length; ++e) this.mediaList[e].isAd && (this.mediaList[e].isplayed = !0);
                                this.mediaList.length > 0 && this.playVideo(this.mediaList.filter(function(t) {
                                    return !t.isplayed
                                })), window.dispatchEvent(new CustomEvent(qt.b.VG_END_ADS));
                                break;
                            // case Ue.ShouldLoadAds:
                            // case Ue.SkipTimer:
                            //     break;
                            case Ue.ShouldCancel:
                                window.dispatchEvent(new CustomEvent(qt.b.VG_END_ADS))
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
                        this.seekCount > 0 && (null != this.timeout && qt.d.clearTimeout(this.timeout), this.timeout = qt.d.setTimeout(function() {
                            t.currentTime >= t.lastSeekTime || t.lastSeekTime >= t.totalTime ? (t.lastSeekTime = 0, t.seekCount = 5) : (t.vgAPI.seekTime(t.lastSeekTime, !1), t.vgAPI.getDefaultMedia().currentTime = t.lastSeekTime, t.seekAgain(), --t.seekCount)
                        }, 500))
                    }, t.prototype.seek = function(t) {
                        var e = parseInt("" + t);
                        this.vgAPI.seekTime(e), e > 0 && (this.lastSeekTime = e, this.seekAgain())
                    }, t
                }(),
                si = function(t) {
                    return t[t.Original = 0] = "Original", t[t.Flash = 1] = "Flash", t
                }({}),
                ai = function(t) {
                    return t[t.MP4 = 0] = "MP4", t[t.M3U8 = 1] = "M3U8", t
                }({}),
                oi = function() {
                    function t() {}
                    return t.secondFormat = '<font class="text-red" color="#F00000">{second}s</font > \u540e\u64ad\u653e\u5e7f\u544a', t.vipskipFormat = '\u60a8\u662f<font class="text-red" color="#F00000">VIP</font >\uff0c\u5df2\u4e3a\u60a8\u8fc7\u6ee4\u5e7f\u544a', t.vipskipFrontFormat = '\u60a8\u662f<font class="text-red" color="#F00000">VIP</font >\uff0c\u5df2\u81ea\u52a8\u4e3a\u60a8\u8df3\u8fc7\u7247\u5934', t.vipskipEndFormat = '\u60a8\u662f<font class="text-red" color="#F00000">VIP</font >\uff0c5\u79d2\u540e\u81ea\u52a8\u4e3a\u60a8\u8df3\u8fc7\u7247\u5c3e', t.boughtVideo = '\u91d1\u5e01<font class="text-gold" color="#FFC000">-{0}</font >\uff01 \u5df2\u8fc7\u6ee4\u5e7f\u544a\uff01', t.alreadyBought = "\u60a8\u5df2\u7ecf\u4f7f\u7528\u91d1\u5e01\u8fc7\u6ee4\u5e7f\u544a\u3002", t.alreadymax = "\u6ca1\u6709\u4e0b\u4e00\u96c6\u4e86", t.viptoskip = '\u6b64\u529f\u80fd\u4ec5\u9650<font class="text-red" color="#F00000">VIP</font >\u4f7f\u7528', t.startup = "\u6b63\u5728\u4e3a\u60a8\u64ad\u653e\u524d\u7f6e\u5e7f\u544a", t.notenoughGold = '\u8bf7\u5148\u83b7\u53d6\u91d1\u5e01\uff0c\u6216\u5347\u7ea7<font class="text-red" color="#F00000">VIP</font >\u8fc7\u6ee4\u5e7f\u544a', t.highFormat = "\u60a8\u662f\u9ad8\u7b49\u7ea7\u7528\u6237\uff0c\u5df2\u4e3a\u60a8\u8fc7\u6ee4\u5e7f\u544a", t
                }(),
                ri = function() {
                    function t(t) {
                        this._configManager = t, this.isAdult = 2 == F.a.cinema ? 1 : 0, this.subscriptions = [], this._serverInfo = {
                            status: -1
                        }, this._needBought = !1, this._cachedLogo = "", this.showPerfect = !1, this.playerSelection = si.Original, this.streamTech = ai.MP4, this.serverCaption = "", this.onVideoReady = new n.EventEmitter, this.onErrorHandler = new n.EventEmitter, this.shouldSkipAds = !1, this.topPrefix = -147, this.customHeight = 0, this.isloadDefault = !1, this.filterGold = 10, this.filterCallback = null, this.playNextCallback = null, this.isPlayRatio = !1, this._hasBought = 0, this.containerRatio = 16 / 9, this.winWidth = window.innerWidth, this.windHeight = window.innerHeight, this.isIPhone = !1, this.touchDevice = !1, this.media = {
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
                        }, this.isPlayerReady = !1, this.api = new ni, this.hasState = !1, this.skipAfter = 10, this.shouldPlaySeoncd = 0, this.leftSecond = 20, this.mutable = !1, this.isChrome = !1, this.isControlshow = !0, this.cachePlaySecond = null, this.currentPlayingAds = null, this.isMuted = !1, this.infoTimeout = null, this.isVolumeShow = !1, this.volumeTimer = null, this.volumeTimeout = 330, this.loadMedia = null, this.isFluence = !1, this.isJump = !0, this.isVideoSuccessPlayed = !1, this.videoSuccessPlayerTimeout = null, this.shouldPlayVideo = !1, this.hasError = !1, this.errorText = "\u53d1\u751f\u4e86\u672a\u77e5\u9519\u8bef\uff0c\u70b9\u51fb\u91cd\u8bd5\uff0c\u6216\u91cd\u65b0\u52a0\u8f7d\u9875\u9762", this.caption = "", this.pendding = null, this.pauseList = [], this.skipEndTime = 0, this.isBackToPlayMedia = !1, this.totalCount = 20, this.scaled = "", this.videoStyle = {}, this.needUserTouch = !1
                    }
                    return t.prototype.onUserStateChange = function(t, e) {
                        if ("auto" == this._logo ? (this._cachedLogo = e ? 2 == F.a.cinema ? "./assets/images/player_logo_adult.png" : "./assets/images/player_logo.png" : 2 == F.a.cinema ? "./assets/images/player_logo_adult_vip.png" : "./assets/images/player_logo_vip.png", this.api.setLogo && this.api.setLogo(this.logo)) : this._cachedLogo = this._logo, !e) {
                            this.publicManager && null != this.api && (this.publicManager.stopPlay(), this.api.showInfo(oi.vipskipFormat, 5));
                            var i = this._configManager.getConfig();
                            this.isJump = !(0 == i.jump), this.api.changeConfig && this.api.changeConfig("jump", this.isJump ? 1 : 0), this.api.backToPlay && this.api.backToPlay()
                        }
                    }, t.prototype.onServerInfoChange = function(t, e) {
                        e.status > -1 && (this.showPerfect = !(e.ismp4available || !this.mutable), this.serverCaption = e.info)
                    }, Object.defineProperty(t.prototype, "hasBought", {
                        get: function() {
                            return this._hasBought
                        },
                        set: function(t) {
                            t && !this._hasBought && this.publicManager && this.api && this.api.currentTime > 0 && (this.publicManager.stopPlay(), this.api.showInfo(1 == t ? oi.alreadyBought : oi.highFormat, 5)), this._hasBought = t
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
                            return qe.isTouchDevice()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "canPlayRTMP", {
                        get: function() {
                            return qe.isFlashAvailable() && !qe.IsMac() && !qe.isTouchDevice()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ngOnInit = function() {
                        this.isPlayerReady = !0, qe.IsMac() || qe.isIphoneDevice() || qe.isTouchDevice() || qe.isChrome() && qe.getChromeVersion(navigator.userAgent) >= 68 ? (this.playerSelection = si.Original, this.mutable = !0, this.isFluence = !0) : qe.isFlashAvailable() ? (this.playerSelection = si.Flash, this.isFluence = !0) : (this.playerSelection = si.Original, this.isFluence = !1), this.getUserPerference(), qt.d.shouldUseNative = !0, qt.d.shouldHandleMouse = !qe.isIphoneDevice(), qt.d.shouldUseFakeFullScreen = !1, qt.d.useFakeFullScreenWhenNotPossible = !0, qe.isTouchDevice() && (this.touchDevice = qt.d.isTouchDevice = !0), this.initMedia(this.mediaList), this.isIPhone = qe.isIphoneDevice(), this.isChrome = qe.isChrome()
                    }, t.prototype.getUserPerference = function() {
                        var t = this._configManager.getConfig();
                        this.mutable ? this.isFluence = !t.tech || "RTMP" == t.tech : (this.playerSelection = "VideoJS" == t.player ? si.Original : si.Flash, this.isFluence = this.playerSelection == si.Flash), this.isJump = !(this.needBought || 0 == t.jump)
                    }, t.prototype.setConfigOnSelection = function() {
                        var t = this._configManager.getConfig();
                        t.player = this.playerSelection == si.Flash ? "CKPlayer" : "VideoJS", t.tech = this.isFluence ? "RTMP" : "HLS", this.needBought || (t.jump = this.isJump ? 1 : 0), this._configManager.setConfig(t)
                    }, t.prototype.startLoadMedia = function(t) {
                        if (this.loadMedia = t, this.isChrome) try {
                            null != this.loader && this.loader.nativeElement.load()
                        } catch (e) {}
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
                                "loading" == t.api.getPlayMedia.title || t.isPlayingAds || (e = 0, isNaN(t.api.totalTime) || t.publicManager.getTimeDefine(t.api.getPlayMedia.title, t.api.totalTime), t.cachePlaySecond && (t.invokePlaySecond(t.cachePlaySecond), t.cachePlaySecond = null), t.publicManager.state == Ue.ShouldCancel && t.publicManager.continue())
                            }), this.api.subscript("time", function(i) {
                                if (!t.isPlayingAds) {
                                    var n = i.current / 1e3;
                                    t.publicManager.needToShow(n), t.skipEndTime && n > t.skipEndTime && t.isJump ? (e || t.api.showInfo(oi.vipskipEndFormat, 5), ++e > 5 && t.playNextVideo()) : e = 0
                                }
                            }), null == this.publicManager) {
                            this.publicManager = new Ke;
                            var i = null,
                                n = 0;
                            this.subscriptions.push(this.publicManager.eventList.subscribe(function(e) {
                                switch (t.api.intersitialHandler(e), e.event) {
                                    // case Ue.Timer:
                                    //     t.api.showInfo(oi.secondFormat.replace("{second}", e.data.time), 0);
                                    //     break;
                                    // case Ue.ShouldPlayAds:
                                    //     t.api.showInfo("", 0), i = t.api.getPlayMedia, n = t.api.currentTime, t.currentPlayingAds = t.loadMedia, t.currentPlayingAds.isImage ? t.api.pause() : t.api.playVideo([t.currentPlayingAds], !0), t.isPlayingAds = !0, t.skipAfter = 10;
                                    //     break;
                                    case Ue.ShouldBackToPlay:
                                        t.isBackToPlayMedia = !0, (!t.shouldSkipAds && !t.hasBought || t.isPlayingAds) && null != i && (t.currentPlayingAds = t.loadMedia = null, t.api.playVideo([i], !1), t.isPlayingAds = !1, t.shouldPlaySeoncd = n);
                                        break;
                                    // case Ue.ShouldLoadAds:
                                    //     t.isBackToPlayMedia = !1, t.shouldSkipAds || t.hasBought ? (t.publicManager.stopPlay(), t.hasState || t.api.showInfo(t.needBought ? 1 == t.hasBought ? oi.alreadyBought : oi.highFormat : oi.vipskipFormat, 5)) : t.startLoadMedia(e.data);
                                    //     break;
                                    case Ue.SkipTimer:
                                        t.skipAfter = e.data.time, t.leftSecond = e.data.left;
                                        break;
                                    case Ue.ShouldCancel:
                                        t.caption = "", i = null, n = 0, t.loadMedia = null, t.isPlayingAds = !1
                                }
                            })), this.pendding && (this.publicManager.invokeList(this.pendding.mediaList, this.pendding.startSecond, this.pendding.periodicSecond), this.pendding = null)
                        }
                    }, t.prototype.muted = function(t) {
                        null != t && t.stopPropagation(), this.isMuted = !this.isMuted, this.api.muted(this.isMuted)
                    }, t.prototype.navigatetopublic = function() {
                        qt.d.openInNewWindow(this.currentPlayingAds.href)
                    }, t.prototype.showInfo = function(t, e) {
                        var i = this;
                        void 0 === e && (e = 5), this.caption = t, null != this.infoTimeout && qe.clearTimeout(this.infoTimeout), e > 0 && (this.infoTimeout = qe.setTimeout(function() {
                            return i.caption = ""
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
                            t.api.showInfo(oi.alreadymax, 5)
                        })
                    }, t.prototype.skipAds = function(t) {
                        var e = this;
                        null != t && t.stopPropagation(), this.needBought ? this.filterCallback && this.filterCallback(function() {
                            e.publicManager.cancel(), e.publicManager.stopPlay(), e.api.showInfo(oi.boughtVideo.replace("{0}", "" + e.filterGold), 5)
                        }, function(t) {
                            e.api.showInfo(oi.notenoughGold, 5)
                        }) : this.filterAllAds()
                    }, t.prototype.filterAllAds = function() {
                        this.api.showInfo(oi.boughtVideo, 5), this.publicManager.stopPlay()
                    }, t.prototype.initMedia = function(t) {
                        t && (this.mediaList = t, this.media && (this.media = this.mediaList.find(function(t) {
                            return !!t && !t.isAd
                        })))
                    }, t.prototype.onWindowResize = function() {
                        this.winWidth = window.innerWidth, this.windHeight = window.innerHeight
                    }, t.prototype.onFlashTrulyReady = function() {
                        var t = this;
                        this._onPlayerReady(), this.api.setLogo(this.logo), this.api.subscript("loadedmetadata", function() {
                            t.shouldPlaySeoncd && qe.setTimeout(function() {
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
                            this.media.src = this.media.backup, this.media.backup = t, this.media.isHls = ".m3u8" == qe.GetFileExtension(this.media.src)
                        }
                    }, t.prototype.mediaJudge = function() {
                        this.mutable && (this.media.isHls ? (this.isFluence = !1, this.streamTech = ai.M3U8) : (this.isFluence = !0, this.streamTech = ai.MP4))
                    }, t.prototype.selectTech = function() {
                        this.shouldPlaySeoncd = this.api.currentTime, this.mutable ? (this.swapBackup(), this.streamTech == ai.MP4 ? (this.streamTech = ai.M3U8, this.isFluence = !1) : (this.streamTech = ai.MP4, this.isFluence = !0), this.onPlayVideo()) : (this.playerSelection == si.Original ? (this.playerSelection = si.Flash, this.isFluence = !0) : (this.playerSelection = si.Original, this.isFluence = !1), this.media = this.api.getPlayMedia, this.playerSelection != si.Original || this.media.isHls || this.swapBackup(), this.dispose(), this.isControlshow = !0), this.setConfigOnSelection()
                    }, t.prototype.selectTian = function() {
                        this.isJump = !this.isJump, this.needBought && (this.isJump = !1, this.api.showInfo(oi.viptoskip, 5)), this.setConfigOnSelection()
                    }, t.prototype.dispose = function() {
                        this.api.dispose(), this.api = null
                    }, t.prototype.onPlayerReady = function(t) {
                        var e = this;
                        this.api = new li, this.api.assignData(t, this), this.subscriptions.push(t.getDefaultMedia().subscriptions.loadedMetadata.subscribe(function() {
                            e.needPlayVideo(), e.videoSuccessPlayerTimeout = qt.d.setTimeout(function() {
                                qe.isQQBrwoser() && qe.isIphoneDevice() ? (e.needUserTouch = !1, e.publicManager.renew(), e.isVideoSuccessPlayed = !0) : e.isVideoSuccessPlayed || (e.needUserTouch = !0, e.needBought && e.publicManager.pause())
                            }, 200)
                        })), this.subscriptions.push(t.getDefaultMedia().subscriptions.play.subscribe(function() {
                            e.needUserTouch = !1, e.isVideoSuccessPlayed = !0, qt.d.clearTimeout(e.videoSuccessPlayerTimeout), e.needBought && e.publicManager.renew()
                        })), this._onPlayerReady(), this.onVideoReady.emit(this.api)
                    }, t.prototype.showAds = function(t) {
                        this.api.triggerPlayAds(t)
                    }, t.prototype.needPlayVideo = function() {
                        this.media && this.media.isHls && this.api.seek(0), this.shouldPlaySeoncd && (this.api.seek(this.shouldPlaySeoncd), this.shouldPlaySeoncd = 0), this.api.play(), this.mediaJudge()
                    }, t.prototype.seekVideo = function() {
                        this.shouldPlayVideo = !this.api.getRef().state || this.api.getRef().state != qt.c.VG_PAUSED
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
                    }, t.prototype.timeUpdate = function(t) {}, t.prototype.invokeInterstitial = function(t, e, i) {
                        this.publicManager ? this.publicManager.invokeList(t, e, i) : this.pendding = {
                            mediaList: t,
                            startsecond: e,
                            periodicSecond: i
                        }
                    }, t.prototype.invokePauseList = function(t) {
                        this.pauseList = t
                    }, t.prototype.onCkEvent = function(t) {
                        switch (t.action) {
                            case Ze.playnext:
                                this.playNextVideo();
                                break;
                            case Ze.intersistial:
                                this.invokeInterstitial(t.params, -1, 0);
                                break;
                            case Ze.skipads:
                                this.skipAds(null);
                                break;
                            case Ze.onPlayVideo:
                                this.media = t.params;
                                break;
                            case Ze.invokeplaySecond:
                                this.invokePlaySecond(t.params);
                                break;
                            case Ze.changeConfig:
                                this.changeConfig(t.params.key, t.params.value)
                        }
                    }, t.prototype.changeConfig = function(t, e) {
                        switch (t) {
                            case "jump":
                                this.needBought ? (this.api.showInfo(oi.viptoskip, 5), this.api.changeConfig("jump", 0)) : (this.isJump = 1 == e, this.setConfigOnSelection())
                        }
                    }, t.prototype.invokePlaySecond = function(t) {
                        if (0 != this.api.eventAttached) {
                            if (!this.isJump && t.info) return;
                            this.shouldPlaySeoncd = t.start || 0, t.info && this.api.showInfo(oi.vipskipFrontFormat, 5)
                        } else this.cachePlaySecond = t;
                        this.skipEndTime = t.end
                    }, t.prototype.onPlayNextVideo = function(t) {
                        !(this.isPlayingAds || null != this.publicManager && this.publicManager.state == Ue.Timer) || t || this.isBackToPlayMedia || (null != this.publicManager && this.publicManager.reset(), this.api.showInfo("", 0)), this.isBackToPlayMedia = !1, this.isMuted = !1
                    }, t.prototype.triggerCounter = function(t, e) {
                        this.totalCount = 20 * t, this.leftSecond = 20 * t, this.publicManager.startCountDown(20 * t, 20, e)
                    }, t.prototype.scaleVideo = function(t) {
                        var e = new ui;
                        this.videoStyle = e.getResult(this.api.getVideoMeta, t, this.playerHeight, this.containerRatio), this.scaled = e.getScaled()
                    }, t.prototype.toPlay = function() {
                        null != this.api && this.api.play(), this.hasError = !1
                    }, t.prototype.retry = function() {
                        console.log("error occur,", this.api.currentTime), this.shouldPlaySeoncd = this.api.currentTime + 5, this.hasError = !1, this.api.dispose(), this.publicManager.dispose(), this.onErrorHandler.emit(!0)
                    }, t
                }(),
                ui = function() {
                    function t() {
                        this.scaled = ""
                    }
                    return t.prototype.getScaled = function() {
                        return this.scaled
                    }, t.prototype.getResult = function(t, e, i, n) {
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
                                        videoShouldWidth: s * i,
                                        videoShouldHeight: i,
                                        videoCanWidth: i * n,
                                        videoCanHeight: i,
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
                hi = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".video-container[_ngcontent-%COMP%]{background-color:#000;position:relative}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]{width:100%}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{font-size:16px;position:absolute;color:#fff;right:1em;top:5.5em;background-color:rgba(0,0,0,.74902);border-radius:.8em;visibility:hidden;pointer-events:none;max-width:0;transition:max-width 1s;word-break:normal;white-space:nowrap;text-shadow:2px 1px 4px #434343;z-index:204;overflow:hidden}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   .caption.show[_ngcontent-%COMP%]{max-width:20em;visibility:visible}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{margin:.2em .5em}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar[_ngcontent-%COMP%]{background-color:transparent;position:absolute;margin:0;width:98%;bottom:-.4em;padding:1em 0;box-sizing:border-box}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar.tiny[_ngcontent-%COMP%]{height:5px!important;box-sizing:content-box;bottom:-5.5em!important}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar-buffering-time[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar-current-time[_ngcontent-%COMP%]{height:7px}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar-buffering-time[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar-current-time[_ngcontent-%COMP%]{top:0}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-controls[_ngcontent-%COMP%]{height:6.5em;padding-top:3.3em;background-color:transparent!important}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-controls.hide[_ngcontent-%COMP%]{bottom:-5.5em}.video-container[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   vg-scrub-bar-current-time[_ngcontent-%COMP%]{background-color:rgba(116,116,116,.58)}.video-container[_ngcontent-%COMP%]   .stick-bottom[_ngcontent-%COMP%]{position:absolute;height:.5em;width:100%;bottom:4.5em;padding:0 1%}.video-container[_ngcontent-%COMP%]   .stick-bottom[_ngcontent-%COMP%]   vg-time-display[_ngcontent-%COMP%]{height:2em;line-height:2em;display:inline-block;text-align:right;width:auto;min-width:40px}.video-container.iphone[_ngcontent-%COMP%]   vg-scrub-bar[_ngcontent-%COMP%]{display:block}.video-container.iphone[_ngcontent-%COMP%]   vg-scrub-bar.tiny[_ngcontent-%COMP%]{margin:0!important;height:5px!important}.video-container[_ngcontent-%COMP%]   .publicplay[_ngcontent-%COMP%]   vg-controls[_ngcontent-%COMP%]{display:none}.bg-overlayer[_ngcontent-%COMP%]{background:linear-gradient(to bottom,rgba(0,0,0,0),#000);display:block}.control-item[_ngcontent-%COMP%]{margin-right:1em;display:inline-block}.text-fixed[_ngcontent-%COMP%]{margin:0 -.3em}.video-loader[_ngcontent-%COMP%]{width:1px;height:1px}.publicbox[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:203;cursor:pointer}.publicbox[_ngcontent-%COMP%]   .control-list[_ngcontent-%COMP%]{color:#fff;background-color:rgba(0,0,0,.74902);border-radius:.8em;margin:3em 1em 0 0;padding-left:.2em;font-size:15px}.publicbox[_ngcontent-%COMP%]   .control-item[_ngcontent-%COMP%]{margin:0;border-right:1px solid #fff;padding:.6em 1.5em .1em .5em}.publicbox[_ngcontent-%COMP%]   .control-item.none[_ngcontent-%COMP%]{border-right:none;margin-right:-.3em}.publicbox[_ngcontent-%COMP%]   .control-item.ismuted[_ngcontent-%COMP%]{position:relative}.publicbox[_ngcontent-%COMP%]   .control-item.cross[_ngcontent-%COMP%]:before{content:' ';position:absolute;width:2px;height:130%;background-color:#fff;-webkit-transform:rotate(119deg);transform:rotate(119deg);top:-.3em;left:1.5em}.publicbox[_ngcontent-%COMP%]   .control-item.cross[_ngcontent-%COMP%]:after{content:' ';position:absolute;width:2px;height:130%;background-color:#fff;-webkit-transform:rotate(57deg);transform:rotate(57deg);top:-.3em;left:1.5em}.publicbox[_ngcontent-%COMP%]   .control-fix[_ngcontent-%COMP%]{position:relative;top:-.2em;margin:0 -.8em 0 0;padding-right:.3em}.publicbox[_ngcontent-%COMP%]   .control-fix.none[_ngcontent-%COMP%]{border-right:none}.publicbox[_ngcontent-%COMP%]   .control-fix.hover[_ngcontent-%COMP%]:hover{color:#f00000}.publicbox[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:1px;height:100%}.splash[_ngcontent-%COMP%]{color:#fff;font-size:12px;margin-left:-.3em;margin-right:.1em;display:inline-block;position:relative;top:-.1em}.hover-item[_ngcontent-%COMP%]{position:absolute;bottom:5.5em;background-color:rgba(0,0,0,.67);border-radius:.5em;height:10.5em;max-height:0;transition:max-height .2s;overflow:hidden}.hover-item.show[_ngcontent-%COMP%]{max-height:10.5em}.controll-right[_ngcontent-%COMP%]{float:right;margin-top:-.5em}.cleartop[_ngcontent-%COMP%]{display:inline-block;position:relative;top:-4px;font-size:14px}vg-fullscreen.control-item[_ngcontent-%COMP%]{position:relative;top:-.1em}vg-time-display.control-item[_ngcontent-%COMP%]{margin-right:0}vg-play-pause.control-item[_ngcontent-%COMP%]{margin-left:1em}vg-playback-button.control-item[_ngcontent-%COMP%]{margin-top:-1em;position:relative;font-size:16px;margin-left:.5em}.play-next[_ngcontent-%COMP%]{height:2em;cursor:pointer;margin-left:-1.5em;position:relative}.stick-top[_ngcontent-%COMP%]{position:relative;top:3em}.second[_ngcontent-%COMP%]{color:red;font-size:14px}.gold[_ngcontent-%COMP%]{color:#ffc000;padding:0 .1em;font-size:14px}.pull-right[_ngcontent-%COMP%]{float:right!important}.player-selection[_ngcontent-%COMP%]{position:absolute;right:0;z-index:500;color:#fff;font-size:16px;padding:.5em 1.2em .2em .2em;cursor:pointer;top:-2em;transition:top .5s;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.player-selection.gray[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#707070}.player-selection.isshow[_ngcontent-%COMP%]{top:0}.player-selection[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#f00000;display:inline-block;width:2em;height:.8em;margin:0 .5em;box-sizing:content-box;position:relative;top:.05em;border-radius:.5em}.player-selection[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;width:1.3em;height:1.3em;border-radius:50%;background-color:#fff;top:-.25em;left:-.2em;transition:left .5s}.player-selection.second[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{left:.8em}.video-header[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{color:#f00000;text-align:center;position:absolute;z-index:500;left:50%;font-size:20px;margin-left:-1em;margin-top:.1em;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.box[_ngcontent-%COMP%]{color:#fff;padding:.5em .5em 1em;font-size:16px}.box[_ngcontent-%COMP%]   .b-t[_ngcontent-%COMP%]{color:#fff;padding:.5em;font-size:16px}.box[_ngcontent-%COMP%]   .b-i[_ngcontent-%COMP%]{display:inline-block;min-width:3em;text-align:center;cursor:pointer}.box[_ngcontent-%COMP%]   .b-i.select[_ngcontent-%COMP%]{color:#f00000;text-shadow:1px 1px 1px #000}.box[_ngcontent-%COMP%]   .b-c[_ngcontent-%COMP%]:after{clear:both;content:' '}.switch-caption[_ngcontent-%COMP%]{position:relative;top:-.2em;left:.1em}.change-selection[_ngcontent-%COMP%]{position:absolute;z-index:500;color:#fff;font-size:16px;padding:.5em 1.2em .2em .2em;cursor:pointer;transition:top .5s;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;right:-1.4em;top:-.44em}.change-selection.gray[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#707070}.change-selection.isshow[_ngcontent-%COMP%]{top:0}.change-selection[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#707070;display:inline-block;width:2em;height:.8em;margin:0 .5em;box-sizing:content-box;position:relative;top:.05em;border-radius:.5em;transition:background-color .3s}.change-selection[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;width:1.3em;height:1.3em;border-radius:50%;background-color:#fff;top:-.25em;left:-.2em;transition:left .5s}.change-selection.second[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#f00000}.change-selection.second[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{left:.8em}.box-data[_ngcontent-%COMP%]{margin-left:.5em;position:relative;overflow:hidden}vg-player.fake-fullscreen[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;left:0;z-index:100000;top:0}.progress[_ngcontent-%COMP%]{height:5px;bottom:0;position:absolute;background-color:#e3e300;transition:width .5s;border-radius:0}.needTouch[_ngcontent-%COMP%]{background-image:url(player-button1.5606977a9f147667eb7c.png);background-repeat:no-repeat;position:absolute;width:100%;height:100%;background-size:contain;z-index:500;background-position:center}.needTouch[_ngcontent-%COMP%]   .c[_ngcontent-%COMP%]{text-align:center;position:absolute;width:100%;top:8em;color:red;font-size:20px}"]
                    ],
                    data: {}
                });

            function di(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "caption"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](1, null, [" ", " "]))], null, function(t, e) {
                    t(e, 1, 0, e.component.serverCaption)
                })
            }

            function ci(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 8, "div", [
                    ["class", "player-selection"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.selectTech() && n), n
                }, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    second: 0,
                    isshow: 1
                }), (t()(), n["\u0275eld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6d41\u7545"])), (t()(), n["\u0275eld"](5, 0, null, null, 1, "span", [
                    ["class", "bar"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](6, 0, null, null, 0, "span", [
                    ["class", "slider"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u517c\u5bb9"]))], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, !i.isFluence, i.isControlshow);
                    t(e, 1, 0, "player-selection", n)
                }, null)
            }

            function pi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 7, "div", [
                    ["class", "player-selection second gray"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    isshow: 0
                }), (t()(), n["\u0275eld"](3, 0, null, null, 0, "span", [], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 1, "span", [
                    ["class", "bar"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](5, 0, null, null, 0, "span", [
                    ["class", "slider"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6700\u4f73"]))], function(t, e) {
                    var i = t(e, 2, 0, e.component.isControlshow);
                    t(e, 1, 0, "player-selection second gray", i)
                }, null)
            }

            function gi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "needTouch"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.retry() && n), n
                }, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "div", [
                    ["class", "c"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](2, null, ["", ""]))], null, function(t, e) {
                    t(e, 2, 0, e.component.errorText)
                })
            }

            function fi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "needTouch"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.toPlay() && n), n
                }, null, null))], null, null)
            }

            function mi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 5, "div", [
                    ["class", "control-item"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 4, "div", [
                    ["class", "control-fix"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, [" \u5e7f\u544a "])), (t()(), n["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "second"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](4, null, ["", ""])), (t()(), n["\u0275ted"](-1, null, [" s "]))], null, function(t, e) {
                    t(e, 4, 0, e.component.leftSecond)
                })
            }

            function vi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "ismuted control-item"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.muted(i) && n), n
                }, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    cross: 0
                }), (t()(), n["\u0275eld"](3, 0, null, null, 1, "div", [
                    ["class", "control-fix hover"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, [" \u9759\u97f3 "]))], function(t, e) {
                    var i = t(e, 2, 0, e.component.isMuted);
                    t(e, 1, 0, "ismuted control-item", i)
                }, null)
            }

            function bi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 5, "div", [
                    ["class", "control-fix"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    none: 0
                }), (t()(), n["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "text-red"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](4, null, ["", "s"])), (t()(), n["\u0275ted"](-1, null, [" \u540e\u8df3\u8fc7\u5e7f\u544a "]))], function(t, e) {
                    var i = t(e, 2, 0, e.component.currentPlayingAds.isImage);
                    t(e, 1, 0, "control-fix", i)
                }, function(t, e) {
                    t(e, 4, 0, e.component.skipAfter)
                })
            }

            function yi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "control-fix hover"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.skipAds(i) && n), n
                }, null, null)), (t()(), n["\u0275ted"](-1, null, [" \u8df3\u8fc7 ("])), (t()(), n["\u0275eld"](2, 0, null, null, 1, "span", [
                    ["class", "gold"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](3, null, ["", ""])), (t()(), n["\u0275ted"](-1, null, ["\u91d1\u5e01) "]))], null, function(t, e) {
                    t(e, 3, 0, e.component.filterGold)
                })
            }

            function xi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 14, "div", [
                    ["class", "publicbox"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.navigatetopublic() && n), n
                }, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgStyle, [n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), (t()(), n["\u0275eld"](2, 0, null, null, 9, "div", [
                    ["class", "control-list pull-right "]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, mi)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, vi)), n["\u0275did"](6, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](7, 0, null, null, 4, "div", [
                    ["class", "control-item none"],
                    ["style", "margin-right:0;border:none"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, bi)), n["\u0275did"](9, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, yi)), n["\u0275did"](11, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](12, 0, null, null, 2, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), n["\u0275did"](13, 278528, null, 0, f.NgStyle, [n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), n["\u0275pod"](14, {
                    width: 0
                })], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.getBackgroudImage(i.currentPlayingAds)), t(e, 4, 0, i.leftSecond > 0), t(e, 6, 0, !i.currentPlayingAds.isImage), t(e, 9, 0, i.skipAfter > 0), t(e, 11, 0, i.skipAfter <= 0);
                    var n = t(e, 14, 0, 100 - i.leftSecond / i.totalCount * 100 + "%");
                    t(e, 13, 0, n)
                }, null)
            }

            function Ci(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 11, "div", [
                    ["class", "box"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    vip: 0
                }), (t()(), n["\u0275eld"](3, 0, null, null, 8, "div", [
                    ["class", "b-c box-data"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.selectTian() && n), n
                }, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "b-i"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u8df3\u8fc7\u7247\u5934 / \u7247\u5c3e"])), (t()(), n["\u0275eld"](7, 0, null, null, 4, "div", [
                    ["class", "change-selection"]
                ], null, null, null, null, null)), n["\u0275did"](8, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](9, {
                    second: 0
                }), (t()(), n["\u0275eld"](10, 0, null, null, 1, "span", [
                    ["class", "bar"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](11, 0, null, null, 0, "span", [
                    ["class", "slider"]
                ], null, null, null, null, null))], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.needBought);
                    t(e, 1, 0, "box", n);
                    var l = t(e, 9, 0, !i.needBought && i.isJump);
                    t(e, 8, 0, "change-selection", l)
                }, null)
            }

            function wi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 23, "vg-sidebar", [], [
                    [2, "hide", null]
                ], null, null, Rt, It)), n["\u0275did"](1, 245760, null, 0, Tt, [n.ElementRef, Pt.a, Nt.a], null, null), (t()(), n["\u0275eld"](2, 0, null, 0, 19, "div", [
                    ["class", "box"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](3, 0, null, null, 1, "div", [
                    ["class", "b-t"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u753b\u9762\u6bd4\u4f8b"])), (t()(), n["\u0275eld"](5, 0, null, null, 16, "div", [
                    ["class", "b-c"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](6, 0, null, null, 3, "div", [
                    ["class", "b-i select"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.scaleVideo("") && n), n
                }, null, null)), n["\u0275did"](7, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](8, {
                    select: 0
                }), (t()(), n["\u0275ted"](-1, null, ["\u9ed8\u8ba4"])), (t()(), n["\u0275eld"](10, 0, null, null, 3, "div", [
                    ["class", "b-i"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.scaleVideo("4:3") && n), n
                }, null, null)), n["\u0275did"](11, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](12, {
                    select: 0
                }), (t()(), n["\u0275ted"](-1, null, ["4:3"])), (t()(), n["\u0275eld"](14, 0, null, null, 3, "div", [
                    ["class", "b-i"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.scaleVideo("16:9") && n), n
                }, null, null)), n["\u0275did"](15, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](16, {
                    select: 0
                }), (t()(), n["\u0275ted"](-1, null, ["16:9"])), (t()(), n["\u0275eld"](18, 0, null, null, 3, "div", [
                    ["class", "b-i"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.scaleVideo("full") && n), n
                }, null, null)), n["\u0275did"](19, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](20, {
                    select: 0
                }), (t()(), n["\u0275ted"](-1, null, ["\u94fa\u6ee1"])), (t()(), n["\u0275and"](16777216, null, 0, 1, null, Ci)), n["\u0275did"](23, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0);
                    var n = t(e, 8, 0, "" == i.scaled);
                    t(e, 7, 0, "b-i select", n);
                    var l = t(e, 12, 0, "4:3" == i.scaled);
                    t(e, 11, 0, "b-i", l);
                    var s = t(e, 16, 0, "16:9" == i.scaled);
                    t(e, 15, 0, "b-i", s);
                    var a = t(e, 20, 0, "full" == i.scaled);
                    t(e, 19, 0, "b-i", a), t(e, 23, 0, !i.isAdult)
                }, function(t, e) {
                    t(e, 0, 0, n["\u0275nov"](e, 1).hideArrowBar)
                })
            }

            function ki(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "vg-playback-button", [
                    ["class", "control-item"]
                ], null, [
                    [null, "click"],
                    [null, "keydown"]
                ], function(t, e, i) {
                    var l = !0;
                    return "click" === e && (l = !1 !== n["\u0275nov"](t, 1).onClick() && l), "keydown" === e && (l = !1 !== n["\u0275nov"](t, 1).onKeyDown(i) && l), l
                }, Bt, Lt)), n["\u0275did"](1, 245760, null, 0, Dt, [n.ElementRef, Pt.a], null, null)], function(t, e) {
                    t(e, 1, 0)
                }, null)
            }

            function Si(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "hover-item"]
                ], null, [
                    [null, "mouseenter"],
                    [null, "mouseleave"]
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "mouseenter" === e && (n = !1 !== l.keepVolume() && n), "mouseleave" === e && (n = !1 !== l.hideVolume() && n), n
                }, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    show: 0
                }), (t()(), n["\u0275eld"](3, 0, null, null, 1, "vg-volume", [], [
                    [2, "vertical", null]
                ], [
                    ["document", "mousemove"],
                    ["document", "mouseup"],
                    ["document", "keydown"]
                ], function(t, e, i) {
                    var l = !0;
                    return "document:mousemove" === e && (l = !1 !== n["\u0275nov"](t, 4).onDrag(i) && l), "document:mouseup" === e && (l = !1 !== n["\u0275nov"](t, 4).onStopDrag(i) && l), "document:keydown" === e && (l = !1 !== n["\u0275nov"](t, 4).arrowAdjustVolume(i) && l), l
                }, Ht, Vt)), n["\u0275did"](4, 245760, null, 0, Et, [n.ElementRef, Pt.a], null, null)], function(t, e) {
                    var i = t(e, 2, 0, e.component.isVolumeShow);
                    t(e, 1, 0, "hover-item", i), t(e, 4, 0)
                }, function(t, e) {
                    t(e, 3, 0, n["\u0275nov"](e, 4).vertical)
                })
            }

            function Mi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 63, "vg-player", [], [
                    [2, "fullscreen", null],
                    [2, "native-fullscreen", null],
                    [2, "controls-hidden", null],
                    [2, "fake-fullscreen", null],
                    [4, "z-index", null]
                ], [
                    [null, "onPlayerReady"]
                ], function(t, e, i) {
                    var n = !0;
                    return "onPlayerReady" === e && (n = !1 !== t.component.onPlayerReady(i) && n), n
                }, Gt.b, Gt.a)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    publicplay: 0
                }), n["\u0275prd"](512, null, Pt.a, Pt.a, []), n["\u0275prd"](512, null, Wt.a, Wt.a, []), n["\u0275prd"](512, null, Nt.a, Nt.a, []), n["\u0275did"](6, 1228800, null, 1, Yt.a, [n.ElementRef, Pt.a, Wt.a, Nt.a], null, {
                    onPlayerReady: "onPlayerReady"
                }), n["\u0275qud"](603979776, 2, {
                    medias: 1
                }), n["\u0275prd"](512, null, jt.a, jt.a, []), (t()(), n["\u0275and"](16777216, null, 0, 1, null, gi)), n["\u0275did"](10, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, 0, 1, null, fi)), n["\u0275did"](12, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](13, 0, null, 0, 1, "vg-media-title", [], [
                    [2, "hide", null]
                ], null, null, Kt, Ut)), n["\u0275did"](14, 245760, null, 0, Xt, [Pt.a, Nt.a], {
                    title: [0, "title"]
                }, null), (t()(), n["\u0275eld"](15, 0, null, 0, 1, "vg-pause-ads", [], null, [
                    [null, "onShowPauseAds"]
                ], function(t, e, i) {
                    var n = !0;
                    return "onShowPauseAds" === e && (n = !1 !== t.component.showAds(i) && n), n
                }, $t, Qt)), n["\u0275did"](16, 245760, null, 0, Zt, [n.ElementRef, Pt.a, jt.a], {
                    list: [0, "list"],
                    shouldLoad: [1, "shouldLoad"]
                }, {
                    onShowPauseAds: "onShowPauseAds"
                }), (t()(), n["\u0275eld"](17, 0, null, 0, 3, "div", [
                    ["class", "caption"]
                ], null, null, null, null, null)), n["\u0275did"](18, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](19, {
                    show: 0
                }), (t()(), n["\u0275eld"](20, 0, null, null, 0, "div", [
                    ["class", "inner"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), n["\u0275and"](16777216, null, 0, 1, null, xi)), n["\u0275did"](22, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, 0, 1, null, wi)), n["\u0275did"](24, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](25, 0, null, 0, 1, "vg-overlay-play", [], [
                    [2, "isdesktop", null]
                ], null, null, oe, ie)), n["\u0275did"](26, 245760, null, 0, ee, [n.ElementRef, Pt.a, Wt.a, Nt.a], {
                    logo: [0, "logo"],
                    isPlayingAds: [1, "isPlayingAds"]
                }, null), (t()(), n["\u0275eld"](27, 0, null, 0, 1, "vg-buffering", [], [
                    [2, "is-buffering", null]
                ], null, null, he, ue)), n["\u0275did"](28, 245760, null, 0, re, [n.ElementRef, Pt.a], null, null), (t()(), n["\u0275eld"](29, 0, null, 0, 30, "vg-controls", [
                    ["class", "bg-overlayer"]
                ], [
                    [4, "pointer-events", null],
                    [2, "hide", null]
                ], null, null, ge, pe)), n["\u0275did"](30, 4440064, null, 0, ce, [Pt.a, n.ElementRef, Nt.a], {
                    vgAutohide: [0, "vgAutohide"],
                    vgAutohideTime: [1, "vgAutohideTime"]
                }, null), (t()(), n["\u0275eld"](31, 0, null, 0, 6, "div", [
                    ["class", "stick-bottom"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](32, 0, null, null, 5, "vg-scrub-bar", [], [
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
                ], function(t, e, i) {
                    var l = !0;
                    return "mousedown" === e && (l = !1 !== n["\u0275nov"](t, 33).onMouseDownScrubBar(i) && l), "document:mousemove" === e && (l = !1 !== n["\u0275nov"](t, 33).onMouseMoveScrubBar(i) && l), "document:mouseup" === e && (l = !1 !== n["\u0275nov"](t, 33).onMouseUpScrubBar(i) && l), "touchstart" === e && (l = !1 !== n["\u0275nov"](t, 33).onTouchStartScrubBar(i) && l), "document:touchmove" === e && (l = !1 !== n["\u0275nov"](t, 33).onTouchMoveScrubBar(i) && l), "document:touchcancel" === e && (l = !1 !== n["\u0275nov"](t, 33).onTouchCancelScrubBar(i) && l), "document:touchend" === e && (l = !1 !== n["\u0275nov"](t, 33).onTouchEndScrubBar(i) && l), "document:keydown" === e && (l = !1 !== n["\u0275nov"](t, 33).arrowAdjustVolume(i) && l), l
                }, be, me)), n["\u0275did"](33, 245760, null, 0, fe, [n.ElementRef, Pt.a, Nt.a, jt.a], null, null), (t()(), n["\u0275eld"](34, 0, null, 0, 1, "vg-scrub-bar-current-time", [], null, null, null, we, xe)), n["\u0275did"](35, 245760, null, 0, ye, [n.ElementRef, Pt.a], null, null), (t()(), n["\u0275eld"](36, 0, null, 0, 1, "vg-scrub-bar-buffering-time", [], null, null, null, Me, Se)), n["\u0275did"](37, 245760, null, 0, ke, [n.ElementRef, Pt.a], null, null), (t()(), n["\u0275eld"](38, 0, null, 0, 1, "vg-play-pause", [
                    ["class", "control-item"]
                ], null, [
                    [null, "click"],
                    ["document", "keydown"]
                ], function(t, e, i) {
                    var l = !0;
                    return "click" === e && (l = !1 !== n["\u0275nov"](t, 39).onClick() && l), "document:keydown" === e && (l = !1 !== n["\u0275nov"](t, 39).onKeyDown(i) && l), l
                }, Ne, Pe)), n["\u0275did"](39, 245760, null, 0, Ae, [n.ElementRef, Pt.a], null, null), (t()(), n["\u0275eld"](40, 0, null, 0, 1, "div", [
                    ["class", "play-next control-item"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.playNextVideo() && n), n
                }, null, null)), (t()(), n["\u0275eld"](41, 0, null, null, 0, "div", [
                    ["class", "icon vg-icon-play_next"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, 0, 1, null, ki)), n["\u0275did"](43, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](44, 0, null, 0, 15, "div", [
                    ["class", "controll-right"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](45, 0, null, null, 1, "vg-airplay", [
                    ["class", "control-item"]
                ], null, null, null, Oe, Ie)), n["\u0275did"](46, 114688, null, 0, Te, [Pt.a], null, null), (t()(), n["\u0275eld"](47, 0, null, null, 1, "vg-mute", [
                    ["class", "control-item"]
                ], null, [
                    [null, "mouseenter"],
                    [null, "mouseleave"],
                    [null, "click"],
                    [null, "keydown"]
                ], function(t, e, i) {
                    var l = !0,
                        s = t.component;
                    return "click" === e && (l = !1 !== n["\u0275nov"](t, 48).onClick() && l), "keydown" === e && (l = !1 !== n["\u0275nov"](t, 48).onKeyDown(i) && l), "mouseenter" === e && (l = !1 !== s.showVolume() && l), "mouseleave" === e && (l = !1 !== s.hideVolume() && l), l
                }, Le, De)), n["\u0275did"](48, 245760, null, 0, Re, [n.ElementRef, Pt.a], null, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Si)), n["\u0275did"](50, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](51, 0, null, null, 6, "div", [
                    ["class", "cleartop"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](52, 0, null, null, 1, "vg-time-display", [
                    ["class", "control-item"],
                    ["vgFormat", "hh:mm:ss"],
                    ["vgProperty", "current"]
                ], null, null, null, ze, Ve)), n["\u0275did"](53, 245760, null, 0, Ee, [n.ElementRef, Pt.a], {
                    vgProperty: [0, "vgProperty"],
                    vgFormat: [1, "vgFormat"]
                }, null), (t()(), n["\u0275eld"](54, 0, null, null, 1, "div", [
                    ["class", "splash"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["/"])), (t()(), n["\u0275eld"](56, 0, null, null, 1, "vg-time-display", [
                    ["class", "control-item"],
                    ["vgFormat", "hh:mm:ss"],
                    ["vgProperty", "total"]
                ], null, null, null, ze, Ve)), n["\u0275did"](57, 245760, null, 0, Ee, [n.ElementRef, Pt.a], {
                    vgProperty: [0, "vgProperty"],
                    vgFormat: [1, "vgFormat"]
                }, null), (t()(), n["\u0275eld"](58, 0, null, null, 1, "vg-fullscreen", [
                    ["class", "control-item"]
                ], null, [
                    [null, "click"],
                    [null, "keydown"]
                ], function(t, e, i) {
                    var l = !0;
                    return "click" === e && (l = !1 !== n["\u0275nov"](t, 59).onClick() && l), "keydown" === e && (l = !1 !== n["\u0275nov"](t, 59).onKeyDown(i) && l), l
                }, We, Ge)), n["\u0275did"](59, 245760, null, 0, He, [n.ElementRef, Pt.a, Wt.a], null, null), (t()(), n["\u0275eld"](60, 0, [
                    ["myMedia", 1]
                ], 0, 3, "video", [
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
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "seeking" === e && (n = !1 !== l.seekVideo() && n), "seeked" === e && (n = !1 !== l.seekedVideo() && n), "canPlay" === e && (n = !1 !== l.canplay(i) && n), "error" === e && (n = !1 !== l.errorHandler(i) && n), n
                }, null, null)), n["\u0275did"](61, 278528, null, 0, f.NgStyle, [n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), n["\u0275did"](62, 212992, [
                    [2, 4]
                ], 0, Ye.a, [Pt.a, n.ChangeDetectorRef], {
                    vgMedia: [0, "vgMedia"]
                }, null), n["\u0275did"](63, 737280, null, 0, je.a, [n.ElementRef, Pt.a], {
                    vgHls: [0, "vgHls"]
                }, null)], function(t, e) {
                    var i = e.component,
                        l = t(e, 2, 0, i.isPlayingAds);
                    t(e, 1, 0, l), t(e, 10, 0, i.hasError), t(e, 12, 0, i.needUserTouch), t(e, 14, 0, i.media.title), t(e, 16, 0, i.pauseList, !i.isPlayingAds);
                    var s = t(e, 19, 0, !!i.caption);
                    t(e, 18, 0, "caption", s), t(e, 22, 0, i.isPlayingAds && !!i.currentPlayingAds), t(e, 24, 0, !i.isPlayingAds), t(e, 26, 0, i.logo, i.isPlayingAds), t(e, 28, 0), t(e, 30, 0, !0, 2.5), t(e, 33, 0), t(e, 35, 0), t(e, 37, 0), t(e, 39, 0), t(e, 43, 0, !i.needBought || i.isPlayRatio), t(e, 46, 0), t(e, 48, 0), t(e, 50, 0, !i.touchDevice), t(e, 53, 0, "current", "hh:mm:ss"), t(e, 57, 0, "total", "hh:mm:ss"), t(e, 59, 0), t(e, 61, 0, i.isPlayingAds ? n["\u0275EMPTY_MAP"] : i.videoStyle), t(e, 62, 0, n["\u0275nov"](e, 60)), t(e, 63, 0, i.media.src)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, n["\u0275nov"](e, 6).isFullscreen, n["\u0275nov"](e, 6).isNativeFullscreen, n["\u0275nov"](e, 6).areControlsHidden, n["\u0275nov"](e, 6).isFakeFullScreen, n["\u0275nov"](e, 6).zIndex), t(e, 13, 0, n["\u0275nov"](e, 14).isControlHide), t(e, 20, 0, i.caption), t(e, 25, 0, n["\u0275nov"](e, 26).isDesktop), t(e, 27, 0, n["\u0275nov"](e, 28).isBuffering), t(e, 29, 0, n["\u0275nov"](e, 30).isAdsPlaying, n["\u0275nov"](e, 30).hideControls), t(e, 32, 0, n["\u0275nov"](e, 33).hideScrubBar)
                })
            }

            function Ai(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "video", [
                    ["autobuffer", ""],
                    ["muted", ""],
                    ["playsinline", ""],
                    ["webkit-playsinline", ""]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 0, "source", [], [
                    [8, "src", 4],
                    [8, "type", 0]
                ], null, null, null, null))], null, function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.loadMedia.src, i.loadMedia.type)
                })
            }

            function Pi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "video-loader"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ai)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.component.loadMedia)
                }, null)
            }

            function Ni(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "video-box"]
                ], [
                    [4, "height", "px"]
                ], null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Mi)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Pi)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, !!i.media), t(e, 4, 0, i.isChrome)
                }, function(t, e) {
                    t(e, 0, 0, e.component.playerHeight)
                })
            }

            function Ti(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "video-box"]
                ], [
                    [4, "height", "px"]
                ], null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "dn-ckplayer", [], null, [
                    [null, "onPlayerReady"],
                    [null, "onCkEvent"],
                    [null, "onPlayerTrulyReady"],
                    ["window", "ckaction"],
                    ["window", "ckCustom"]
                ], function(t, e, i) {
                    var l = !0,
                        s = t.component;
                    return "window:ckaction" === e && (l = !1 !== n["\u0275nov"](t, 2).ckAction(i, i.detail) && l), "window:ckCustom" === e && (l = !1 !== n["\u0275nov"](t, 2).ckCustom(i, i.detail) && l), "onPlayerReady" === e && (l = !1 !== s.onPlayerReadyFlash(i) && l), "onCkEvent" === e && (l = !1 !== s.onCkEvent(i) && l), "onPlayerTrulyReady" === e && (l = !1 !== s.onFlashTrulyReady() && l), l
                }, ti, $e)), n["\u0275did"](2, 4308992, null, 0, Je, [], {
                    filterGold: [0, "filterGold"],
                    parent: [1, "parent"]
                }, {
                    onCkEvent: "onCkEvent",
                    onPlayerReady: "onPlayerReady",
                    onPlayerTrulyReady: "onPlayerTrulyReady"
                })], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, i.filterGold, i)
                }, function(t, e) {
                    t(e, 0, 0, e.component.playerHeight)
                })
            }

            function Ii(t) {
                return n["\u0275vid"](0, [n["\u0275qud"](402653184, 1, {
                    loader: 0
                }), (t()(), n["\u0275eld"](1, 0, null, null, 14, "div", [
                    ["class", "video-container"]
                ], null, null, null, null, null)), n["\u0275did"](2, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](3, {
                    iphone: 0
                }), (t()(), n["\u0275eld"](4, 0, null, null, 6, "div", [
                    ["class", "video-header"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, di)), n["\u0275did"](6, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, ci)), n["\u0275did"](8, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, pi)), n["\u0275did"](10, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ni)), n["\u0275did"](12, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ti)), n["\u0275did"](14, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](15, 0, null, null, 0, "div", [
                    ["class", "video-footer"]
                ], null, null, null, null, null))], function(t, e) {
                    var i = e.component,
                        n = t(e, 3, 0, i.isIPhone);
                    t(e, 2, 0, "video-container", n), t(e, 6, 0, i.serverCaption), t(e, 8, 0, !i.isPlayingAds && !i.showPerfect), t(e, 10, 0, !i.isPlayingAds && i.showPerfect), t(e, 12, 0, i.isPlayerReady && 0 == i.playerSelection), t(e, 14, 0, i.isPlayerReady && 1 == i.playerSelection)
                }, null)
            }
            var Oi = i("ZVvj"),
                Ri = i("Plof"),
                Di = i("hXCn"),
                Li = i("3umQ"),
                Bi = i("SbQY"),
                Ei = function() {
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
                Vi = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".ru-tabs[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;margin-bottom:5px;position:relative}.ru-tab[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer}.ru-tab.active[_ngcontent-%COMP%], .ru-tab[_ngcontent-%COMP%]:hover{color:red}.item[_ngcontent-%COMP%]{line-height:26px;padding:0 8px 8px}.last-update[_ngcontent-%COMP%]{display:block;width:60px}.title[_ngcontent-%COMP%]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.last-item[_ngcontent-%COMP%]{width:90px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:right}.last-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:red!important}.tab-shadow[_ngcontent-%COMP%]{position:absolute;height:5px;background-color:red;bottom:-3px;transition:all .3s ease-out}.seprator-line[_ngcontent-%COMP%]{border-bottom:3px solid #e8e8e8;margin-bottom:14px;padding-top:8px}"]
                    ],
                    data: {}
                });

            function Fi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-tabs", [
                    ["class", "d-block pb-2 mb-2"]
                ], null, [
                    [null, "selectTabEvent"]
                ], function(t, e, i) {
                    var n = !0;
                    return "selectTabEvent" === e && (n = !1 !== t.component.changeTab(i) && n), n
                }, Oi.b, Oi.a)), n["\u0275did"](1, 638976, null, 0, Ri.a, [], {
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
                })], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.tabs, i.tabsStyle, i.tabStyle, i.activeShadowStyle, !1, !0, i.currentTab, "justify-content-between")
                }, null)
            }

            function _i(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "seprator-line"]
                ], null, null, null, null, null))], null, null)
            }

            function zi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 16, "div", [
                    ["class", "d-flex item"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [
                    ["class", "last-update"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](2, null, ["", ""])), (t()(), n["\u0275eld"](3, 0, null, null, 6, "span", [
                    ["class", "title"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 5, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var l = !0;
                    return "click" === e && (l = !1 !== n["\u0275nov"](t, 5).onClick(i.button, i.ctrlKey, i.metaKey, i.shiftKey) && l), l
                }, null, null)), n["\u0275did"](5, 671744, null, 0, O.q, [O.o, O.a, f.LocationStrategy], {
                    queryParams: [0, "queryParams"],
                    routerLink: [1, "routerLink"]
                }, null), n["\u0275ppd"](6, 1), n["\u0275pod"](7, {
                    id: 0
                }), n["\u0275pad"](8, 1), (t()(), n["\u0275ted"](9, null, ["", ""])), (t()(), n["\u0275eld"](10, 0, null, null, 6, "span", [
                    ["class", "last-item"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](11, 0, null, null, 5, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var l = !0;
                    return "click" === e && (l = !1 !== n["\u0275nov"](t, 12).onClick(i.button, i.ctrlKey, i.metaKey, i.shiftKey) && l), l
                }, null, null)), n["\u0275did"](12, 671744, null, 0, O.q, [O.o, O.a, f.LocationStrategy], {
                    queryParams: [0, "queryParams"],
                    routerLink: [1, "routerLink"]
                }, null), n["\u0275ppd"](13, 1), n["\u0275pod"](14, {
                    id: 0
                }), n["\u0275pad"](15, 1), (t()(), n["\u0275ted"](16, null, ["", ""]))], function(t, e) {
                    var i = t(e, 7, 0, n["\u0275unv"](e, 5, 0, t(e, 6, 0, n["\u0275nov"](e.parent.parent, 0), e.context.$implicit.Key))),
                        l = t(e, 8, 0, "/detail");
                    t(e, 5, 0, i, l);
                    var s = t(e, 14, 0, n["\u0275unv"](e, 12, 0, t(e, 13, 0, n["\u0275nov"](e.parent.parent, 0), e.context.$implicit.Key))),
                        a = t(e, 15, 0, "/detail");
                    t(e, 12, 0, s, a)
                }, function(t, e) {
                    t(e, 2, 0, e.context.$implicit.Month + "-" + e.context.$implicit.Day), t(e, 4, 0, n["\u0275nov"](e, 5).target, n["\u0275nov"](e, 5).href), t(e, 9, 0, e.context.$implicit.Title), t(e, 11, 0, n["\u0275nov"](e, 12).target, n["\u0275nov"](e, 12).href), t(e, 16, 0, e.context.$implicit.Renew)
                })
            }

            function Hi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, zi)), n["\u0275did"](2, 278528, null, 0, f.NgForOf, [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.component.items)
                }, null)
            }

            function Gi(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-center justify-content-center"],
                    ["style", "min-height: 340px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6682\u65e0\u5185\u5bb9"]))], null, null)
            }

            function Wi(t) {
                return n["\u0275vid"](0, [n["\u0275pid"](0, pt.a, []), (t()(), n["\u0275eld"](1, 0, null, null, 1, "app-block-title", [], null, null, null, Di.b, Di.a)), n["\u0275did"](2, 114688, null, 0, Li.a, [], {
                    title: [0, "title"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Fi)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, _i)), n["\u0275did"](6, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](7, 0, null, null, 4, "div", [
                    ["class", "text-small"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Hi)), n["\u0275did"](9, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Gi)), n["\u0275did"](11, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, i.blockTitle), t(e, 4, 0, i.tabs && i.tabs.length && i.tabs.length > 1), t(e, 6, 0, 0 === (null == i.tabs ? null : i.tabs.length)), t(e, 9, 0, i.items && i.items.length), t(e, 11, 0, !i.items || !i.items.length)
                }, null)
            }
            var Yi = i("YWSn"),
                ji = function() {
                    function t(t, e, i) {
                        var n = this;
                        this._categoryService = t, this._navbarLinksService = e, this.store = i, this.genre = "", this.isAdult = !1, this.blockTitle = "", this.dispose = null, this.isAdult = 2 === F.a.cinema, this.dispose = i.subscribe(function() {
                            return n.readState()
                        }), this.readState()
                    }
                    return t.prototype.ngOnDestroy = function() {
                        this.dispose && this.dispose()
                    }, t.prototype.readState = function() {
                        var t = this,
                            e = this.store.getState().video,
                            i = this._categoryService.getSecondLevelCid(e.currentVideo.cid),
                            n = e.currentVideo.category;
                        if (this.currentSecondLevelCid !== i) {
                            this.currentSecondLevelCid = i, this._navbarLinksService.getNavbarSecondLinks(this.currentSecondLevelCid).subscribe(function(e) {
                                t.items = e
                            });
                            var l = this.isAdult ? "\u6392\u884c\u699c" : "\u7535\u5f71\u6392\u884c\u699c";
                            switch (n) {
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
                Xi = i("bTnO"),
                Ui = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".rank[_ngcontent-%COMP%]{position:relative;padding:0 0 8px 42px;vertical-align:middle}.title[_ngcontent-%COMP%]{height:26px;line-height:26px;width:170px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.favorite[_ngcontent-%COMP%]{height:26px;width:80px;line-height:26px}.rank-pos[_ngcontent-%COMP%]{position:absolute;height:26px;width:26px;top:0;left:4px;text-align:center;background-color:#bfbfbf;color:#fff;line-height:26px;font-size:11px}.rank1[_ngcontent-%COMP%]{background-color:#ff3000}.rank2[_ngcontent-%COMP%]{background-color:#ff6000}.rank3[_ngcontent-%COMP%]{background-color:#ffb400}.rating-bar[_ngcontent-%COMP%]{margin-top:8px;width:48px;display:inline-block;text-align:center;line-height:26px}.tab-header[_ngcontent-%COMP%]{border-bottom:3px solid #e8e8e8;padding-left:4px}.tab-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:208px}.tab-header[_ngcontent-%COMP%]   .rating-bar[_ngcontent-%COMP%]{margin:0}"]
                    ],
                    data: {}
                });

            function Ki(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 15, "div", [
                    ["class", "rank"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 14, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 3, "span", [
                    ["class", "rank-pos"]
                ], null, null, null, null, null)), n["\u0275did"](3, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](4, {
                    rank1: 0,
                    rank2: 1,
                    rank3: 2
                }), (t()(), n["\u0275ted"](5, null, ["", ""])), (t()(), n["\u0275eld"](6, 0, null, null, 5, "a", [
                    ["class", "title"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var l = !0;
                    return "click" === e && (l = !1 !== n["\u0275nov"](t, 7).onClick(i.button, i.ctrlKey, i.metaKey, i.shiftKey) && l), l
                }, null, null)), n["\u0275did"](7, 671744, null, 0, O.q, [O.o, O.a, f.LocationStrategy], {
                    queryParams: [0, "queryParams"],
                    routerLink: [1, "routerLink"]
                }, null), n["\u0275ppd"](8, 1), n["\u0275pod"](9, {
                    id: 0
                }), n["\u0275pad"](10, 1), (t()(), n["\u0275ted"](11, null, ["", ""])), (t()(), n["\u0275eld"](12, 0, null, null, 1, "span", [
                    ["class", "favorite text-number text-right pr-4"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](13, null, ["", ""])), (t()(), n["\u0275eld"](14, 0, null, null, 1, "app-rating-bar", [
                    ["class", "rating-bar d-inline-block"]
                ], null, null, null, L.b, L.a)), n["\u0275did"](15, 114688, null, 0, B.a, [], {
                    width: [0, "width"],
                    value: [1, "value"]
                }, null)], function(t, e) {
                    var i = t(e, 4, 0, 0 === e.context.index, 1 === e.context.index, 2 === e.context.index);
                    t(e, 3, 0, "rank-pos", i);
                    var l = t(e, 9, 0, n["\u0275unv"](e, 7, 0, t(e, 8, 0, n["\u0275nov"](e.parent, 0), e.context.$implicit.key))),
                        s = t(e, 10, 0, "/detail");
                    t(e, 7, 0, l, s), t(e, 15, 0, 48, 10 * e.context.$implicit.userData.rate)
                }, function(t, e) {
                    t(e, 5, 0, e.context.index + 1), t(e, 6, 0, n["\u0275nov"](e, 7).target, n["\u0275nov"](e, 7).href), t(e, 11, 0, e.context.$implicit.title), t(e, 13, 0, e.context.$implicit.userData.favorites)
                })
            }

            function qi(t) {
                return n["\u0275vid"](0, [n["\u0275pid"](0, pt.a, []), (t()(), n["\u0275eld"](1, 0, null, null, 1, "app-block-title", [], null, null, null, Di.b, Di.a)), n["\u0275did"](2, 114688, null, 0, Li.a, [], {
                    title: [0, "title"]
                }, null), (t()(), n["\u0275eld"](3, 0, null, null, 6, "div", [
                    ["class", "tab-header py-2 d-flex mb-3"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 1, "h5", [
                    ["class", "title"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u4eba\u6c14"])), (t()(), n["\u0275eld"](6, 0, null, null, 1, "h5", [
                    ["class", "favorite text-center"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6536\u85cf"])), (t()(), n["\u0275eld"](8, 0, null, null, 1, "h5", [
                    ["class", "rating-bar text-center"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u8bc4\u5206"])), (t()(), n["\u0275eld"](10, 0, null, null, 2, "div", [
                    ["class", "text-small"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ki)), n["\u0275did"](12, 278528, null, 0, f.NgForOf, [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, i.blockTitle), t(e, 12, 0, i.items)
                }, null)
            }
            var Zi = function() {
                    function t() {
                        this.shouldHide = !1, this.expanded = !1
                    }
                    return t.prototype.ngOnInit = function() {}, t.prototype.ngOnChanges = function(t) {
                        this.text = "", this.brief = "", this.expanded = !1;
                        var e = this.stripHtml(this.summary);
                        if ((e = e.replace("\r\n", "\n")).length > 250) {
                            var i = e.substring(0, 250).split("\n");
                            i = i.map(function(t) {
                                return t.trim().length > 10 ? "<p>" + t.trim() + "</p>" : "<b>" + t.trim() + "</b>"
                            }), this.brief = i.join("")
                        }
                        var n = e.split("\n");
                        n = n.map(function(t) {
                            return t.trim().length > 10 ? "<p>" + t.trim() + "</p>" : "<b>" + t.trim() + "</b>"
                        }), this.text = n.join("")
                    }, t.prototype.ngAfterViewInit = function() {}, t.prototype.onClick = function() {
                        this.expanded = !this.expanded
                    }, t.prototype.stripHtml = function(t) {
                        var e = document.createElement("div");
                        return e.innerHTML = t.replace("\u3000", "\r\n"), e.textContent || e.innerText || ""
                    }, t
                }(),
                Qi = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{margin-bottom:35px}.summary[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:pre-wrap;transition:all .5s ease-in-out}.summary.expanded[_ngcontent-%COMP%]{max-height:500px!important;transition:all .5s ease-out}.summary.should-hide[_ngcontent-%COMP%]{max-height:6rem}.expander[_ngcontent-%COMP%]{color:#00a8ec!important}.expander[_ngcontent-%COMP%]:hover{color:#1278ba!important}"]
                    ],
                    data: {}
                });

            function Ji(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, [
                    [1, 0],
                    ["summaryBox", 1]
                ], null, 2, "div", [
                    ["class", "summary"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    expanded: 0,
                    "should-hide": 1
                })], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.expanded, i.shouldHide);
                    t(e, 1, 0, "summary", n)
                }, function(t, e) {
                    t(e, 0, 0, e.component.text)
                })
            }

            function $i(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, [
                    [1, 0],
                    ["summaryBox", 1]
                ], null, 2, "span", [
                    ["class", "summary"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    expanded: 0,
                    "should-hide": 1
                })], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.expanded, i.shouldHide);
                    t(e, 1, 0, "summary", n)
                }, function(t, e) {
                    t(e, 0, 0, e.component.brief)
                })
            }

            function tn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "a", [
                    ["class", "expander float-right mt-1 mr-2"],
                    ["href", "javascript:void(0);"]
                ], [
                    [8, "innerHTML", 1]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "click" === e && (n = 0 != (l.expanded = !l.expanded) && n), n
                }, null, null))], null, function(t, e) {
                    t(e, 0, 0, "[\u5c55\u5f00]")
                })
            }

            function en(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "a", [
                    ["class", "expander float-right mt-1 mr-2"],
                    ["href", "javascript:void(0);"]
                ], [
                    [8, "innerHTML", 1]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "click" === e && (n = 0 != (l.expanded = !l.expanded) && n), n
                }, null, null))], null, function(t, e) {
                    t(e, 0, 0, "[\u6536\u8d77]")
                })
            }

            function nn(t) {
                return n["\u0275vid"](0, [n["\u0275qud"](671088640, 1, {
                    elementView: 0
                }), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ji)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, $i)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, tn)), n["\u0275did"](6, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, en)), n["\u0275did"](8, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, !i.brief || i.expanded), t(e, 4, 0, i.brief && !i.expanded), t(e, 6, 0, i.brief && !i.expanded), t(e, 8, 0, i.brief && i.expanded)
                }, null)
            }
            var ln = i("6nLG"),
                sn = function() {
                    function t(t) {
                        var e = this;
                        this.store = t, this.tabs = [], this.on = !0, this.switchLanguageEvent = new n.EventEmitter, setTimeout(function() {
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
                            type: ln.c,
                            language: t
                        }), this.switchLanguageEvent.next(t)
                    }, t.prototype.onClick = function() {
                        this.on = !this.on, this.changeTab(this.on ? 0 : 1)
                    }, t
                }(),
                an = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".lang-switch[_ngcontent-%COMP%]{background-image:url(switch.ed8641d5f2c0c05143cb.png);width:71px;height:28px;position:relative;cursor:pointer;overflow:hidden}.lang-switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{left:0;right:unset;position:absolute;background-image:url(slider.86ee205a0360c46a79e9.png);width:29px;height:28px;transition:all ease-out .3s}.lang-switch[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:15px;color:#fff;line-height:28px;position:absolute;transition:all ease-out .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.lang-switch[_ngcontent-%COMP%]   .on-text[_ngcontent-%COMP%]{left:30px}.lang-switch[_ngcontent-%COMP%]   .off-text[_ngcontent-%COMP%]{left:-40px}.off[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{left:42px}.off[_ngcontent-%COMP%]   .on-text[_ngcontent-%COMP%]{left:71px}.off[_ngcontent-%COMP%]   .off-text[_ngcontent-%COMP%]{left:10px}"]
                    ],
                    data: {}
                });

            function on(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 7, "div", [
                    ["class", "lang-switch pb-2 mb-4"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.onClick() && n), n
                }, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    off: 0
                }), (t()(), n["\u0275eld"](3, 0, null, null, 0, "div", [
                    ["class", "slider"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 1, "div", [
                    ["class", "text on-text"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](5, null, ["", ""])), (t()(), n["\u0275eld"](6, 0, null, null, 1, "div", [
                    ["class", "text off-text"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](7, null, ["", ""]))], function(t, e) {
                    var i = t(e, 2, 0, !e.component.on);
                    t(e, 1, 0, "lang-switch pb-2 mb-4", i)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 5, 0, i.languages[0].Title), t(e, 7, 0, i.languages[1].Title)
                })
            }
            var rn = i("2a2r"),
                un = function() {
                    function t(t) {
                        this._resourceService = t
                    }
                    return t.prototype.ngOnInit = function() {
                        this.symbolLogo = this._resourceService.getResource("vr" + this.resolution)
                    }, t
                }(),
                hn = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function dn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["height", "36"],
                    ["style", "margin-left: -6px;"]
                ], [
                    [8, "title", 0],
                    [8, "src", 4]
                ], null, null, null, null))], null, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, i.resolution, i.symbolLogo)
                })
            }
            var cn = [".expander[_ngcontent-%COMP%]{position:relative;padding-right:30px!important;cursor:pointer;width:78px}.dn-icon[_ngcontent-%COMP%]{position:absolute;right:6px;top:3px;font-size:18px;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.media-button[_ngcontent-%COMP%]{font-family:Microsoft YaHei;text-align:center;padding:3px 17px;min-width:80px;border-radius:2px;display:inline-block;border:1px solid #e2e2e2;background-color:#f8f8f8;height:40px;line-height:33px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#009cff;margin-bottom:2px}.media-button[_ngcontent-%COMP%]:visited{color:#6ccbff}.active.media-button[_ngcontent-%COMP%], .media-button[_ngcontent-%COMP%]:hover{background-color:#009cff;color:#fff}.vip[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]{border:1px solid #e2e2e2;color:#ff9000}.vip[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]:visited{color:#fcbd72}.vip[_ngcontent-%COMP%]   .media-button.active[_ngcontent-%COMP%], .vip[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]:hover{background-color:#ff9000;color:#fff}.download[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]{border:1px solid #e2e2e2;color:#009e96}.download[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]:visited{color:#009e96}.download[_ngcontent-%COMP%]   .media-button[_ngcontent-%COMP%]:hover{background-color:#009e96;color:#fff}.vip.active.media-button[_ngcontent-%COMP%]{background-color:#ff9000;color:#fff}.new-media[_ngcontent-%COMP%]{position:absolute;width:13px;height:13px;top:2px;right:9px;background:url(/assets/images/bflba.png)}.flex-place-holder[_ngcontent-%COMP%]{min-width:78px}.bought[_ngcontent-%COMP%]{position:absolute;right:5px;bottom:31px}.icon-check[_ngcontent-%COMP%]{border-radius:50%;background-color:#0ec610;color:#fff;height:17px;font-size:12px;width:17px}.lastplay[_ngcontent-%COMP%]{max-width:10em;padding:.4em 1em;border:1px solid #bcbcbc;text-align:center;position:absolute;box-shadow:1px 1px 2px #d6d6d6;margin-left:-1.5em;z-index:100;background-color:#fff;font-size:14px}.lastplay[_ngcontent-%COMP%]:after, .lastplay[_ngcontent-%COMP%]:before{content:'';display:block;position:absolute;left:50%;width:1em;height:0;border-style:solid;margin-left:-.5em}.lastplay[_ngcontent-%COMP%]:after{top:-1em;border-color:transparent transparent #fff;border-width:.5em}.lastplay[_ngcontent-%COMP%]:before{top:-1.2em;border-color:transparent transparent #b4b4b4;border-width:.6em;margin-left:-.55em}"],
                pn = i("5kbV"),
                gn = function() {
                    function t(t, e, i, l, s) {
                        var a = this;
                        this._dnDialogService = t, this._activatedRoute = e, this._purchaseRequiredDialogService = i, this._messageDialogService = l, this.store = s, this.shouldReplace = !1, this.selectMediaEvent = new n.EventEmitter, s.subscribe(function() {
                            return a.readState()
                        }), this.readState()
                    }
                    return Object.defineProperty(t.prototype, "mediaKey", {
                        set: function(t) {
                            t && this.item.key && (this.active = decodeURIComponent(this.item.key) === t, this.shouldReplace = vt.a.isUrlContains(["play"]))
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
                fn = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [cn],
                    data: {}
                });

            function mn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 7, "a", [
                    ["class", "media-button text-small mr-2"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var l = !0;
                    return "click" === e && (l = !1 !== n["\u0275nov"](t, 3).onClick(i.button, i.ctrlKey, i.metaKey, i.shiftKey) && l), l
                }, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    active: 0
                }), n["\u0275did"](3, 671744, null, 0, O.q, [O.o, O.a, f.LocationStrategy], {
                    queryParams: [0, "queryParams"],
                    replaceUrl: [1, "replaceUrl"],
                    routerLink: [2, "routerLink"]
                }, null), n["\u0275ppd"](4, 1), n["\u0275pod"](5, {
                    id: 0
                }), n["\u0275pad"](6, 1), (t()(), n["\u0275ted"](7, null, ["", ""]))], function(t, e) {
                    var i = e.component,
                        l = t(e, 2, 0, i.active);
                    t(e, 1, 0, "media-button text-small mr-2", l);
                    var s = t(e, 5, 0, n["\u0275unv"](e, 3, 0, t(e, 4, 0, n["\u0275nov"](e.parent, 0), i.item.key))),
                        a = i.shouldReplace,
                        o = t(e, 6, 0, "/play");
                    t(e, 3, 0, s, a, o)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, n["\u0275nov"](e, 3).target, n["\u0275nov"](e, 3).href), t(e, 7, 0, i.item.title)
                })
            }

            function vn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "a", [
                    ["class", "media-button text-small mr-2"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), n["\u0275ted"](1, null, ["", ""]))], null, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, i.item.key), t(e, 1, 0, i.item.title)
                })
            }

            function bn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "a", [
                    ["class", "media-button text-small mr-2"],
                    ["href", "javascript:void(0);"]
                ], [
                    [1, "id", 0]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.onClick() && n), n
                }, null, null)), (t()(), n["\u0275ted"](1, null, ["", ""]))], null, function(t, e) {
                    var i = e.component;
                    t(e, 0, 0, "triggerkey_" + i.item.title), t(e, 1, 0, i.item.title)
                })
            }

            function yn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "a", [
                    ["class", "media-button text-small mr-2"],
                    ["href", "javascript:void(0);"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.onDownloadClick() && n), n
                }, null, null)), (t()(), n["\u0275ted"](1, null, ["", ""]))], null, function(t, e) {
                    t(e, 1, 0, e.component.item.title)
                })
            }

            function xn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "new-media"]
                ], null, null, null, null, null))], null, null)
            }

            function Cn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "bought"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 0, "span", [
                    ["class", "dn-icon icon-check"]
                ], null, null, null, null, null))], null, null)
            }

            function wn(t) {
                return n["\u0275vid"](0, [n["\u0275pid"](0, pt.a, []), (t()(), n["\u0275eld"](1, 0, null, null, 14, "div", [
                    ["class", "media-btn position-relative"]
                ], null, null, null, null, null)), n["\u0275did"](2, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](3, {
                    guest: 0,
                    vip: 1,
                    download: 2
                }), (t()(), n["\u0275and"](16777216, null, null, 1, null, mn)), n["\u0275did"](5, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, vn)), n["\u0275did"](7, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, bn)), n["\u0275did"](9, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, yn)), n["\u0275did"](11, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, xn)), n["\u0275did"](13, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Cn)), n["\u0275did"](15, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component,
                        n = t(e, 3, 0, "guest" === i.type, "vip" === i.type, "download" === i.type);
                    t(e, 2, 0, "media-btn position-relative", n), t(e, 5, 0, i.item.key && "download" !== i.type), t(e, 7, 0, i.item.key && "download" === i.type), t(e, 9, 0, !i.item.key && "download" !== i.type), t(e, 11, 0, !i.item.key && "download" === i.type), t(e, 13, 0, i.item.isNew), t(e, 15, 0, i.item.bought)
                }, null)
            }
            var kn = i("6VMI"),
                Sn = function() {
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
                            type: kn.a,
                            status: !this.listOpenStatus
                        }) : (console.log("vip", this.listOpenStatus), this.store.dispatch({
                            type: kn.b,
                            status: !this.listOpenStatus
                        }))
                    }, t.prototype.setFlexPlaceholders = function(t) {
                        for (this.flexPlaceholder = [];
                            (t + 1 + this.flexPlaceholder.length) % this.columns > 0;) this.flexPlaceholder.push([])
                    }, t.prototype.toClose = function() {
                        this.playedKey = "-1"
                    }, t
                }(),
                Mn = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [cn],
                    data: {}
                });

            function An(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 8, "div", [
                    ["class", "text-center"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.toggleShowAll() && n), n
                }, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    guest: 0,
                    vip: 1
                }), (t()(), n["\u0275eld"](3, 0, null, null, 5, "a", [
                    ["class", "expander media-button text-small mr-2"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 2, "i", [
                    ["class", "dn-icon icon-close"]
                ], null, null, null, null, null)), n["\u0275did"](5, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](6, {
                    "rotate-90": 0
                }), (t()(), n["\u0275eld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](8, null, ["", ""]))], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, "guest" === i.type, "vip" === i.type);
                    t(e, 1, 0, "text-center", n);
                    var l = t(e, 6, 0, !i.listOpenStatus);
                    t(e, 5, 0, "dn-icon icon-close", l)
                }, function(t, e) {
                    t(e, 8, 0, e.component.expanderText)
                })
            }

            function Pn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 6, "div", [
                    ["class", "lastplay"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.toClose() && n), n
                }, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 0, "div", [
                    ["class", "cl"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 4, "div", [
                    ["class", "c"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, [" \u4e0a\u6b21\u64ad\u653e\u5230\u8fd9\u91cc"])), (t()(), n["\u0275eld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), n["\u0275eld"](5, 0, null, null, 1, "div", [
                    ["class", "t"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](6, null, ["", ""]))], null, function(t, e) {
                    t(e, 6, 0, e.component.viewTime)
                })
            }

            function Nn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "text-center"]
                ], [
                    [1, "data-value", 0]
                ], null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "app-media-button", [], null, null, null, wn, fn)), n["\u0275did"](2, 114688, null, 0, gn, [ft.a, O.a, pn.a, mt.a, Xi.a], {
                    item: [0, "item"],
                    videoId: [1, "videoId"],
                    type: [2, "type"],
                    mediaKey: [3, "mediaKey"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Pn)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, e.context.$implicit, i.videoId, i.type, i.mediaKey), t(e, 4, 0, e.context.$implicit.key == i.playedKey)
                }, function(t, e) {
                    t(e, 0, 0, e.context.$implicit.key)
                })
            }

            function Tn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "flex-place-holder mr-2 d-block"]
                ], null, null, null, null, null))], null, null)
            }

            function In(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 6, "div", [
                    ["class", "d-flex flex-wrap my-1 text-small"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, An)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Nn)), n["\u0275did"](4, 278528, null, 0, f.NgForOf, [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Tn)), n["\u0275did"](6, 278528, null, 0, f.NgForOf, [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, i.items.length > i.defaultItems), t(e, 4, 0, i.items.slice(0 - i.showItems)), t(e, 6, 0, i.flexPlaceholder)
                }, null)
            }

            function On(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275and"](16777216, null, null, 1, null, In)), n["\u0275did"](1, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.items && i.items.length)
                }, null)
            }
            var Rn = i("PIM2"),
                Dn = i("3U4i"),
                Ln = i("OeGS"),
                Bn = i("ruQk"),
                En = i("SCto"),
                Vn = i("HxCd"),
                Fn = i("HEn4"),
                _n = i("dayM"),
                zn = i("dU8u"),
                Hn = i("7K1u"),
                Gn = i("t9Fn"),
                Wn = i("KRVc"),
                Yn = function() {
                    function t(t, e, i, n, l) {
                        var s = this;
                        this._router = t, this._activatedRoute = e, this._commentListService = i, this._votingService = n, this.store = l, this.commentPager = 0, this.pageSize = 10, this.bottomLine = !1, this.isLoading = !1, l.subscribe(function() {
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
                            type: Wn.b
                        }), this.getComments(this.commentPager + 1)
                    }, t.prototype.getComments = function(t) {
                        var e = this;
                        this.isLoading || this.bottomLine || (this.isLoading = !0, this._commentListService.getComments(this.videoId, t, 10).subscribe(function(t) {
                            e.isLoading = !1, t.comments.map(function(t) {
                                t.liked = e._votingService.isVoted(Gn.b.LikeComment, t.commendId)
                            }), t.topComments.map(function(t) {
                                t.liked = e._votingService.isVoted(Gn.b.LikeComment, t.commendId)
                            }), e.store.dispatch({
                                type: Wn.a,
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
                jn = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        ['.text-gray[_ngcontent-%COMP%]{color:#f8f8f8!important}.text-light[_ngcontent-%COMP%]{color:#999!important}.text-dark[_ngcontent-%COMP%]{color:#434343}.text-large[_ngcontent-%COMP%]{font-size:18px}text-medium[_ngcontent-%COMP%]{font-size:16px}.text-small[_ngcontent-%COMP%]{font-size:13px}.dn-button[_ngcontent-%COMP%]{border:none;outline:0!important;display:block;padding:6px 8px;width:auto;min-width:100px;margin:0 .4rem;border-radius:18px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;color:#fff!important;background-color:silver}.dn-button[_ngcontent-%COMP%]:hover{background-color:#cacaca}.dn-button-plain[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid silver;color:#000!important;background-color:#fff;padding:6px 20px;cursor:pointer}.dn-button-plain[_ngcontent-%COMP%]:hover{background-color:#cacaca;color:#fff!important}.dn-button-outline[_ngcontent-%COMP%]{outline:0!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:2px solid silver;border-radius:2px;background-color:#fff;padding:2px 14px;cursor:pointer}.dn-button-outline[_ngcontent-%COMP%]:hover{background-color:#cacaca;color:#fff!important}.dn-button-outline.orange[_ngcontent-%COMP%]{color:#f49800;border-color:#f49800;background-color:#434343}.dn-button-outline.orange[_ngcontent-%COMP%]:hover{color:#fe9e00!important;border-color:#fe9e00!important;background-color:#000}.dn-button-blue[_ngcontent-%COMP%]{color:#fff!important;background-color:#00a8ec}.dn-button-blue[_ngcontent-%COMP%]:hover{background-color:#00b6ff}.dn-button-disable[_ngcontent-%COMP%]{cursor:default;color:#fff!important;background-color:#ddd!important}.dn-button-orange[_ngcontent-%COMP%]{color:#fff!important;background-color:#f49800}.dn-button-orange[_ngcontent-%COMP%]:hover{background-color:#fe9e00}.dn-button-gold[_ngcontent-%COMP%]{color:#fff!important;background-color:#f49800}.dn-button-gold[_ngcontent-%COMP%]:hover{background-color:#fe9e00}.dn-button-red[_ngcontent-%COMP%]{color:#fff!important;background-color:#e81d00}.dn-button-red[_ngcontent-%COMP%]:hover{background-color:red}.dn-button-large[_ngcontent-%COMP%]{padding:10px 18px}.dn-play-button[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:4px 12px;border-radius:3px;font-size:16px;display:inline-block;color:#fff!important;background-color:#f00000}.dn-play-button[_ngcontent-%COMP%]:hover{background-color:#f10000}.dn-play-button[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:20px;vertical-align:middle}.dn-play-button[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{display:inline-block;border-left:1px solid #fff;padding:3px 8px 3px 10px;vertical-align:middle}.dn-btn-load-more[_ngcontent-%COMP%]{cursor:pointer;padding:5px 15px}.link-blue[_ngcontent-%COMP%]{color:#00a8ec}.link-blue[_ngcontent-%COMP%]:hover{color:#434343}.red[_ngcontent-%COMP%]{color:#f00000}.rose[_ngcontent-%COMP%]{color:#ff01ff}.orange[_ngcontent-%COMP%]{color:#fe9e00}.top-comments[_ngcontent-%COMP%]{border-bottom:2px dotted #ddd;margin-bottom:25px}.bottom-line[_ngcontent-%COMP%]{position:relative;z-index:0;margin-top:35px}.bottom-line[_ngcontent-%COMP%]:before{content:"";border-top:1px solid #eee;margin:0 auto;position:absolute;top:40%;left:0;right:0;bottom:0;width:100%;z-index:-1}.body[_ngcontent-%COMP%]   font[_ngcontent-%COMP%]{color:#00ae00!important}.centerload[_ngcontent-%COMP%]{display:inline-block;position:relative;width:32px;height:32px}.centerload[_ngcontent-%COMP%] > app-loader-spinner[_ngcontent-%COMP%]{margin-top:.5em;position:absolute;left:-1em;top:1.5em}']
                    ],
                    data: {}
                });

            function Xn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-center justify-content-center"],
                    ["style", "min-height: 240px"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6682\u65e0\u8bc4\u8bba"]))], null, null)
            }

            function Un(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-dn-comment", [], null, null, null, Rn.b, Rn.a)), n["\u0275did"](1, 114688, null, 0, Dn.a, [Ln.a, ft.a, mt.a, Bn.a, En.a, Vn.b, Xi.a, f.DOCUMENT], {
                    comment: [0, "comment"],
                    isHot: [1, "isHot"],
                    isLast: [2, "isLast"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.context.$implicit, !0, e.context.last)
                }, null)
            }

            function Kn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "top-comments"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Un)), n["\u0275did"](2, 278528, null, 0, f.NgForOf, [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.component.comments.topComments)
                }, null)
            }

            function qn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-dn-comment", [], null, null, null, Rn.b, Rn.a)), n["\u0275did"](1, 114688, null, 0, Dn.a, [Ln.a, ft.a, mt.a, Bn.a, En.a, Vn.b, Xi.a, f.DOCUMENT], {
                    comment: [0, "comment"],
                    isLast: [1, "isLast"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.context.$implicit, e.context.last)
                }, null)
            }

            function Zn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 5, "div", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 2, "div", [
                    ["class", "centerload"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 1, "app-loader-spinner", [], null, null, null, Fn.b, Fn.a)), n["\u0275did"](3, 114688, null, 0, _n.a, [], null, null), (t()(), n["\u0275eld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6b63\u5728\u52a0\u8f7d"]))], function(t, e) {
                    t(e, 3, 0)
                }, null)
            }

            function Qn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "bottom-line text-center"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6211\u662f\u6709\u5e95\u7ebf\u7684"]))], null, null)
            }

            function Jn(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Kn)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](3, 0, null, null, 3, "div", [
                    ["class", "search-results"],
                    ["infiniteScroll", ""]
                ], null, [
                    [null, "scrolled"]
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "scrolled" === e && (n = !1 !== l.getComments(l.commentPager + 1) && n), n
                }, null, null)), n["\u0275did"](4, 4866048, null, 0, zn.a, [n.ElementRef, n.NgZone], {
                    infiniteScrollDistance: [0, "infiniteScrollDistance"],
                    infiniteScrollThrottle: [1, "infiniteScrollThrottle"]
                }, {
                    scrolled: "scrolled"
                }), (t()(), n["\u0275and"](16777216, null, null, 1, null, qn)), n["\u0275did"](6, 278528, null, 0, f.NgForOf, [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Zn)), n["\u0275did"](8, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Qn)), n["\u0275did"](10, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, i.comments.topComments.length), t(e, 4, 0, 2, 500), t(e, 6, 0, i.comments.comments), t(e, 8, 0, i.isLoading), t(e, 10, 0, i.bottomLine && i.commentPager > 1)
                }, null)
            }

            function $n(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275and"](16777216, null, null, 1, null, Xn)), n["\u0275did"](1, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Jn)), n["\u0275did"](3, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.comments && (!i.comments.comments || !i.comments.comments.length)), t(e, 3, 0, i.comments.comments && i.comments.comments.length)
                }, null)
            }
            var tl = i("b7oE"),
                el = i("oAdE"),
                il = i("N9ew"),
                nl = i("BXbW"),
                ll = i("q5P3"),
                sl = i("ciLT"),
                al = i("xMFu"),
                ol = function() {
                    function t(t, e, i) {
                        this._router = t, this.document = e, this.store = i, this.subscriptions = [], this.showQRCode = !1, this.domain = e.location.protocol + "//" + e.location.hostname
                    }
                    return t.prototype.ngOnInit = function() {
                        var t = this;
                        this.showQRCode = !1, this.genLinks(), this.subscriptions.push(this._router.events.subscribe(function(e) {
                            t.showQRCode = !1, t.genLinks()
                        }))
                    }, t.prototype.shareLink = function(t, e, i, n) {
                        return "https://hwhrq.com/r?url=" + encodeURI(t) + "&click=1&uid=0&to=" + n + "&type=text&pic=" + encodeURI(e) + "&title=" + encodeURI(i) + "&key=&desc=&comment=&relateUid=&searchPic=0&sign=on"
                    }, t.prototype.genLinks = function() {
                        var t = ("https://www." + vt.a.GetHost() + "/detail.aspx?id={id}").replace("{page}", 2 == F.a.cinema ? "Adult" : "Movie").replace("{id}", this.id);
                        this.qrCodeSrc = "https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=" + encodeURI("https://hwhrq.com/r?url=" + encodeURI(t)), this.fbLink = this.shareLink(t, this.image, this.title, "fbook"), this.twitterLink = this.shareLink(t, this.image, this.title, "twi"), this.qqZoneLink = this.shareLink(t, this.image, this.title, "qzone"), this.qqLink = this.shareLink(t, this.image, this.title, "sqq"), this.weiboLink = this.shareLink(t, this.image, this.title, "tsina")
                    }, t.prototype.share = function(t) {
                        t && (this.showQRCode = !0), this.store.dispatch({
                            type: ln.a
                        })
                    }, t
                }(),
                rl = i("ZYjt"),
                ul = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".share[_ngcontent-%COMP%]{padding:30px 120px}.prompt[_ngcontent-%COMP%], .qr-code[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;width:240px;height:180px}.prompt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .qr-code[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid #ddd;padding:5px;display:block}.social-link[_ngcontent-%COMP%]{width:20%}"]
                    ],
                    data: {}
                });

            function hl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "share-wechat d-flex justify-content-center mb-5"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "div", [
                    ["class", "prompt"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, [" \u70b9\u51fb\u56fe\u6807\u5206\u4eab\u8fd9\u4e2a\u9875\u9762 "]))], null, null)
            }

            function dl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 5, "div", [
                    ["class", "share-wechat d-flex justify-content-center mb-5"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 4, "div", [
                    ["class", "qr-code flex-1"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 3, "div", [], null, null, null, null, null)), (t()(), n["\u0275eld"](3, 0, null, null, 0, "img", [
                    ["class", "mb-3"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u626b\u63cf\u4e8c\u7ef4\u7801\u5206\u4eab"]))], null, function(t, e) {
                    t(e, 3, 0, n["\u0275inlineInterpolate"](1, "", e.component.qrCodeSrc, ""))
                })
            }

            function cl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 17, "div", [
                    ["class", "share"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, hl)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, dl)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](5, 0, null, null, 12, "div", [
                    ["class", "d-flex align-items-center justify-content-center"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](6, 0, null, null, 1, "a", [
                    ["class", "social-link"],
                    ["href", "javascript:void(0)"],
                    ["title", "\u5206\u4eab\u5230\u5fae\u4fe1"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.share(!0) && n), n
                }, null, null)), (t()(), n["\u0275eld"](7, 0, null, null, 0, "img", [
                    ["class", "social"],
                    ["src", "/assets/images/social/wechat-1.png"],
                    ["width", "64"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](8, 0, null, null, 1, "a", [
                    ["class", "social-link"],
                    ["target", "_blank"],
                    ["title", "\u5206\u4eab\u5230\u65b0\u6d6a\u5fae\u535a"]
                ], [
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.share(!1) && n), n
                }, null, null)), (t()(), n["\u0275eld"](9, 0, null, null, 0, "img", [
                    ["class", "social"],
                    ["src", "/assets/images/social/weibo.png"],
                    ["width", "64"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](10, 0, null, null, 1, "a", [
                    ["class", "social-link"],
                    ["target", "_blank"],
                    ["title", "\u5206\u4eab\u5230QQ\u597d\u53cb"]
                ], [
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.share(!1) && n), n
                }, null, null)), (t()(), n["\u0275eld"](11, 0, null, null, 0, "img", [
                    ["class", "social"],
                    ["src", "/assets/images/social/qq.png"],
                    ["width", "64"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](12, 0, null, null, 1, "a", [
                    ["class", "social-link"],
                    ["target", "_blank"],
                    ["title", "\u5206\u4eab\u5230QQ\u7a7a\u95f4"]
                ], [
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.share(!1) && n), n
                }, null, null)), (t()(), n["\u0275eld"](13, 0, null, null, 0, "img", [
                    ["class", "social"],
                    ["src", "/assets/images/social/qq-zone.png"],
                    ["width", "64"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](14, 0, null, null, 1, "a", [
                    ["class", "social-link"],
                    ["target", "_blank"],
                    ["title", "\u5206\u4eab\u5230Twitter"]
                ], [
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.share(!1) && n), n
                }, null, null)), (t()(), n["\u0275eld"](15, 0, null, null, 0, "img", [
                    ["class", "social"],
                    ["src", "/assets/images/social/twitter.png"],
                    ["width", "64"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](16, 0, null, null, 1, "a", [
                    ["class", "social-link"],
                    ["target", "_blank"],
                    ["title", "\u5206\u4eabFacebook"]
                ], [
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.share(!1) && n), n
                }, null, null)), (t()(), n["\u0275eld"](17, 0, null, null, 0, "img", [
                    ["class", "social"],
                    ["src", "/assets/images/social/facebook.png"],
                    ["width", "64"]
                ], null, null, null, null, null))], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, !i.showQRCode), t(e, 4, 0, i.showQRCode)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 8, 0, i.weiboLink), t(e, 10, 0, i.qqLink), t(e, 12, 0, i.qqZoneLink), t(e, 14, 0, i.twitterLink), t(e, 16, 0, i.fbLink)
                })
            }
            var pl = i("E1MD"),
                gl = i("TCkQ"),
                fl = i("Le4d"),
                ml = i("RP43"),
                vl = i("syxV"),
                bl = function() {
                    function t(t, e, i, l, s, a, o, r, u) {
                        var h = this;
                        this._videoService = t, this._dnDialogService = e, this._messageDialogService = i, this._favoriteService = l, this.pageScrollService = s, this._toastService = a, this._windowService = o, this.document = r, this.store = u, this.subscriptions = [], this.likeLoading = !1, this.dislikeLoading = !1, this.favoriteLoading = !1, this.userBehaviorEvent = new n.EventEmitter, this.screenType = g.a, u.subscribe(function() {
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
                                type: mt.b.Emoji1,
                                message: e.message
                            }), t._dnDialogService.open("message-dialog")) : (t.userBehaviorEvent.emit("like"), t._toastService.showBlackToast("\u9012\u4ea4\u6210\u529f\uff01"))
                        })))
                    }, t.prototype.dislike = function() {
                        var t = this;
                        this.dislikeLoading || (this.dislikeLoading = !0, this.subscriptions.push(this._videoService.dislike(this.video.id).subscribe(function(e) {
                            t.dislikeLoading = !1, e.message ? (t._messageDialogService.setState({
                                type: mt.b.Emoji1,
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
                            type: mt.b.Warning,
                            message: "\u8be5\u5f71\u7247\u6682\u65f6\u4e0d\u53ef\u4e0b\u8f7d"
                        }), this._dnDialogService.open("message-dialog")
                    }, t.prototype.showComments = function() {
                        var t = ml.a.newInstance({
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
                yl = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".user-data-bar[_ngcontent-%COMP%]{position:relative;margin-bottom:30px;font-size:15px;line-height:30px}.icon-container[_ngcontent-%COMP%]{height:30px;width:30px;text-align:center;display:flex;justify-content:center}.dn-icon[_ngcontent-%COMP%]{font-size:25px;margin:0 auto 2px;cursor:pointer}.seprator-overlay[_ngcontent-%COMP%]{z-index:-1}.ico[_ngcontent-%COMP%]{position:relative;cursor:pointer}.ico[_ngcontent-%COMP%]:hover   .dn-icon[_ngcontent-%COMP%], .ico[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{color:red}.sec-first[_ngcontent-%COMP%], .sec-last[_ngcontent-%COMP%], .sec-second[_ngcontent-%COMP%]{width:33%}.seprator[_ngcontent-%COMP%]{height:30px;width:1px;background-color:#ddd}.sec-center[_ngcontent-%COMP%]{border-left:1px solid #ddd;border-right:1px solid #ddd}.icon-favorite[_ngcontent-%COMP%]{margin-top:-2px}.favorited[_ngcontent-%COMP%]{position:absolute;font-size:13px;background-color:red;line-height:18px;color:#fff;top:2px;padding:1px 2px;right:0;border:1px solid red}.screen-medium[_ngcontent-%COMP%]   .icon-text[_ngcontent-%COMP%]{display:none}"]
                    ],
                    data: {}
                });

            function xl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "dn-icon dn-icon icon-favorite"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    "text-red": 0
                })], function(t, e) {
                    var i = t(e, 2, 0, e.component.video.userBehaviors.favorite);
                    t(e, 1, 0, "dn-icon dn-icon icon-favorite", i)
                }, null)
            }

            function Cl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-loader-ring", [], null, null, null, pl.b, pl.a)), n["\u0275did"](1, 114688, null, 0, gl.a, [], null, null)], function(t, e) {
                    t(e, 1, 0)
                }, null)
            }

            function wl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "dn-icon icon-like"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    "text-red": 0
                })], function(t, e) {
                    var i = t(e, 2, 0, e.component.video.userBehaviors.like);
                    t(e, 1, 0, "dn-icon icon-like", i)
                }, null)
            }

            function kl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-loader-ring", [], null, null, null, pl.b, pl.a)), n["\u0275did"](1, 114688, null, 0, gl.a, [], null, null)], function(t, e) {
                    t(e, 1, 0)
                }, null)
            }

            function Sl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "dn-icon icon-dislike"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    "text-red": 0
                })], function(t, e) {
                    var i = t(e, 2, 0, e.component.video.userBehaviors.dislike);
                    t(e, 1, 0, "dn-icon icon-dislike", i)
                }, null)
            }

            function Ml(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-loader-ring", [], null, null, null, pl.b, pl.a)), n["\u0275did"](1, 114688, null, 0, gl.a, [], null, null)], function(t, e) {
                    t(e, 1, 0)
                }, null)
            }

            function Al(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 73, "div", [
                    ["class", "user-data-bar d-flex justify-content-between"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    "screen-xxsmall": 0,
                    "screen-xsmall": 1,
                    "screen-small": 2,
                    "screen-medium": 3,
                    "screen-large": 4
                }), (t()(), n["\u0275eld"](3, 0, null, null, 8, "div", [
                    ["class", "ico"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 7, "div", [
                    ["class", "d-flex align-items-center"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](5, 0, null, null, 1, "div", [
                    ["class", "icon-container mr-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](6, 0, null, null, 0, "div", [
                    ["class", "dn-icon icon-watch"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](7, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), n["\u0275eld"](8, 0, null, null, 1, "span", [
                    ["class", "icon-text"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u64ad\u653e"])), (t()(), n["\u0275ted"](10, null, [" ", ""])), n["\u0275ppd"](11, 1), (t()(), n["\u0275eld"](12, 0, null, null, 8, "div", [
                    ["class", "ico"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](13, 0, null, null, 7, "div", [
                    ["class", "d-flex align-items-center"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.showComments() && n), n
                }, null, null)), (t()(), n["\u0275eld"](14, 0, null, null, 1, "div", [
                    ["class", "icon-container mr-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](15, 0, null, null, 0, "div", [
                    ["class", "dn-icon icon-comment"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](16, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), n["\u0275eld"](17, 0, null, null, 1, "span", [
                    ["class", "icon-text"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u8bc4\u8bba"])), (t()(), n["\u0275ted"](19, null, [" ", ""])), n["\u0275ppd"](20, 1), (t()(), n["\u0275eld"](21, 0, null, null, 0, "div", [
                    ["class", "seprator"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](22, 0, null, null, 13, "div", [
                    ["class", "ico"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](23, 0, null, null, 12, "div", [
                    ["class", "d-flex align-items-center"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.favorite() && n), n
                }, null, null)), (t()(), n["\u0275eld"](24, 0, null, null, 4, "div", [
                    ["class", "icon-container mr-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, xl)), n["\u0275did"](26, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Cl)), n["\u0275did"](28, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](29, 0, null, null, 6, "div", [], null, null, null, null, null)), n["\u0275did"](30, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), n["\u0275pod"](31, {
                    "text-red": 0
                }), (t()(), n["\u0275eld"](32, 0, null, null, 1, "span", [
                    ["class", "icon-text"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6536\u85cf"])), (t()(), n["\u0275ted"](34, null, [" ", " "])), n["\u0275ppd"](35, 1), (t()(), n["\u0275eld"](36, 0, null, null, 8, "div", [
                    ["class", "ico"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](37, 0, null, null, 7, "div", [
                    ["class", "d-flex align-items-center"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.share() && n), n
                }, null, null)), (t()(), n["\u0275eld"](38, 0, null, null, 1, "div", [
                    ["class", "icon-container mr-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](39, 0, null, null, 0, "div", [
                    ["class", "dn-icon icon-share"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](40, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), n["\u0275eld"](41, 0, null, null, 1, "span", [
                    ["class", "icon-text"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5206\u4eab"])), (t()(), n["\u0275ted"](43, null, [" ", ""])), n["\u0275ppd"](44, 1), (t()(), n["\u0275eld"](45, 0, null, null, 0, "div", [
                    ["class", "seprator"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](46, 0, null, null, 13, "div", [
                    ["class", "ico"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](47, 0, null, null, 12, "div", [
                    ["class", "d-flex align-items-center"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.like() && n), n
                }, null, null)), (t()(), n["\u0275eld"](48, 0, null, null, 4, "div", [
                    ["class", "icon-container mr-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, wl)), n["\u0275did"](50, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, kl)), n["\u0275did"](52, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](53, 0, null, null, 6, "div", [], null, null, null, null, null)), n["\u0275did"](54, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), n["\u0275pod"](55, {
                    "text-red": 0
                }), (t()(), n["\u0275eld"](56, 0, null, null, 1, "span", [
                    ["class", "icon-text"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u8d5e"])), (t()(), n["\u0275ted"](58, null, [" ", ""])), n["\u0275ppd"](59, 1), (t()(), n["\u0275eld"](60, 0, null, null, 13, "div", [
                    ["class", "ico"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](61, 0, null, null, 12, "div", [
                    ["class", "d-flex align-items-center"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.dislike() && n), n
                }, null, null)), (t()(), n["\u0275eld"](62, 0, null, null, 4, "div", [
                    ["class", "icon-container mr-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Sl)), n["\u0275did"](64, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ml)), n["\u0275did"](66, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](67, 0, null, null, 6, "div", [], null, null, null, null, null)), n["\u0275did"](68, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), n["\u0275pod"](69, {
                    "text-red": 0
                }), (t()(), n["\u0275eld"](70, 0, null, null, 1, "span", [
                    ["class", "icon-text"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u8e29"])), (t()(), n["\u0275ted"](72, null, ["", ""])), n["\u0275ppd"](73, 1)], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.screenSize === i.screenType.XXSmall, i.screenSize === i.screenType.XSmall, i.screenSize === i.screenType.Small, i.screenSize === i.screenType.Medium, i.screenSize === i.screenType.Large);
                    t(e, 1, 0, "user-data-bar d-flex justify-content-between", n), t(e, 26, 0, !i.favoriteLoading), t(e, 28, 0, i.favoriteLoading);
                    var l = t(e, 31, 0, i.video.userBehaviors.favorite);
                    t(e, 30, 0, l), t(e, 50, 0, !i.likeLoading), t(e, 52, 0, i.likeLoading);
                    var s = t(e, 55, 0, i.video.userBehaviors.like);
                    t(e, 54, 0, s), t(e, 64, 0, !i.dislikeLoading), t(e, 66, 0, i.dislikeLoading);
                    var a = t(e, 69, 0, i.video.userBehaviors.dislike);
                    t(e, 68, 0, a)
                }, function(t, e) {
                    var i = e.component,
                        l = n["\u0275unv"](e, 10, 0, t(e, 11, 0, n["\u0275nov"](e.parent, 0), i.video.userData.viewCount));
                    t(e, 10, 0, l);
                    var s = n["\u0275unv"](e, 19, 0, t(e, 20, 0, n["\u0275nov"](e.parent, 0), i.video.userData.comments));
                    t(e, 19, 0, s);
                    var a = n["\u0275unv"](e, 34, 0, t(e, 35, 0, n["\u0275nov"](e.parent, 0), i.video.userData.favorites));
                    t(e, 34, 0, a);
                    var o = n["\u0275unv"](e, 43, 0, t(e, 44, 0, n["\u0275nov"](e.parent, 0), i.video.userData.shared));
                    t(e, 43, 0, o);
                    var r = n["\u0275unv"](e, 58, 0, t(e, 59, 0, n["\u0275nov"](e.parent, 0), i.video.userData.like));
                    t(e, 58, 0, r);
                    var u = n["\u0275unv"](e, 72, 0, t(e, 73, 0, n["\u0275nov"](e.parent, 0), i.video.userData.dislike));
                    t(e, 72, 0, u)
                })
            }

            function Pl(t) {
                return n["\u0275vid"](0, [n["\u0275pid"](0, fl.a, []), (t()(), n["\u0275and"](16777216, null, null, 1, null, Al)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.component.video)
                }, null)
            }
            var Nl = i("rXD5"),
                Tl = i("jhYu"),
                Il = function() {
                    function t(t, e, i) {
                        var n = this;
                        this._videoListService = t, this._categoryService = e, this.store = i, this.display = Tl.a.Compact, this.subscript = null, this.cacheKey = null, this.subscript = i.subscribe(function() {
                            return n.readState()
                        }), this.readState()
                    }
                    return t.prototype.ngOnInit = function() {}, t.prototype.ngOnDestroy = function() {
                        this.subscript && this.subscript()
                    }, t.prototype.readState = function() {
                        var t = this,
                            e = this.store.getState().video;
                        if (e.currentVideo && this.cacheKey !== e.currentVideo.key) {
                            this.cacheKey = e.currentVideo.key;
                            var i = e.currentVideo.key;
                            this.currentCid = e.currentVideo.cid, this._videoListService.getRelatedVideos(this.currentCid, e.currentVideo.title).subscribe(function(e) {
                                t.items = e.filter(function(t) {
                                    return t.key !== i
                                }).slice(0, 5)
                            })
                        }
                    }, t
                }(),
                Ol = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Rl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "app-video-teaser", [], null, null, null, Nl.b, Nl.a)), n["\u0275did"](2, 114688, null, 0, Tl.b, [O.a, g.b], {
                    video: [0, "video"],
                    display: [1, "display"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.context.$implicit, e.component.display)
                }, null)
            }

            function Dl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-block-title", [], null, null, null, Di.b, Di.a)), n["\u0275did"](1, 114688, null, 0, Li.a, [], {
                    title: [0, "title"]
                }, null), (t()(), n["\u0275eld"](2, 0, null, null, 2, "div", [
                    ["style", "padding-top: 8px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Rl)), n["\u0275did"](4, 278528, null, 0, f.NgForOf, [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, "\u76f8\u5173\u5267\u96c6"), t(e, 4, 0, i.items)
                }, null)
            }
            var Ll = i("6jz6"),
                Bl = i("LmEr"),
                El = i("m6eS"),
                Vl = i("qUyv"),
                Fl = i("O4lX"),
                _l = i("dEix"),
                zl = function() {
                    function t(t) {
                        var e = this;
                        this._purchaseRequiredDialogService = t, this._purchaseRequiredDialogService.purchaseRequiredDialogSource$.subscribe(function(t) {
                            e.price = t.price, e.mediaId = t.mediaId
                        })
                    }
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                Hl = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Gl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "h5", [
                    ["class", "mb-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u89e3\u9501\u6b64\u89c6\u9891\u5c06\u82b1\u8d39"])), (t()(), n["\u0275eld"](2, 0, null, null, 1, "span", [
                    ["class", "text-gold"],
                    ["id", "purchase-required-price"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](3, null, ["", ""])), (t()(), n["\u0275ted"](-1, null, ["\u91d1\u5e01\uff0c\u6216\u8005\u5347\u7ea7\u4e3aVIP\u4f1a\u5458\uff0c\u65e0\u9650\u5236\u64ad\u653e"]))], null, function(t, e) {
                    t(e, 3, 0, e.component.price)
                })
            }
            var Wl = i("k72D"),
                Yl = i("qWkz"),
                jl = i("sP/5"),
                Xl = i("Jr3z"),
                Ul = i("UzK5"),
                Kl = i("ZR7r"),
                ql = i("pLpv"),
                Zl = function() {
                    function t(t, e, i) {
                        var n = this;
                        this._router = t, this._purchaseSuccessDialogService = e, this._dnDialogService = i, this._purchaseSuccessDialogService.purchaseSuccessDialogSource$.subscribe(function(t) {
                            n.videoKey = t.videoKey, n.mediaKey = t.mediaKey
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
                Ql = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Jl(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "dn-button dn-button-blue"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.playNow() && n), n
                }, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u7acb\u5373\u64ad\u653e"]))], null, null)
            }
            var $l = function(t) {
                    return t[t.Barrel = 0] = "Barrel", t[t.FixTop = 1] = "FixTop", t[t.FixBottom = 2] = "FixBottom", t
                }({}),
                ts = [{
                    id: "1",
                    time: 2.1,
                    font: "small",
                    color: "#F0F8FF",
                    content: "\u53ef\u601c\u7684\u5c0f\u7075\u68a6",
                    type: $l.FixTop,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "2",
                    time: 2.16,
                    font: "small",
                    color: "#FAEBD7",
                    content: "\u6211\u5bb6\u5927\u5e08\u5144\u8111\u5b50\u6709\u5751",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "3",
                    time: 2.34,
                    font: "small",
                    color: "#00FFFF",
                    content: "\u60f3\u770b\u74dc\u54e5\u8df3\u821e\u54c8\u54c8\u54c8\u54c8",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "4",
                    time: 2.84,
                    font: "small",
                    color: "#ff0000",
                    content: "\u6211\u592a\u6fc0\u52a8\u4e86\u54c8\u54c8\u54c8",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "5",
                    time: 3.43,
                    font: "small",
                    color: "#7FFFD4",
                    content: "\u745e\u91d1\u4e00\u751f\u63a8\uff01\u554a\u554a\u554a\u554a\u554a\u554a\u554a\u554a\u554a",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "6",
                    time: 4.22,
                    font: "small",
                    color: "#0000FF",
                    content: "\u4ed6\u773c\u4e2d\u7684\u661f\u8fb0\u5927\u6d77\uff0c\u662f\u9a91\u58eb\u89e6\u800c\u4e0d\u53ca\u7684\u5149\u8292",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "7",
                    time: 4.55,
                    font: "small",
                    color: "#8A2BE2",
                    content: "\u5f3a\u70c8\u63a8\u8350\u8fd9\u9996\u6b4c\u7684\u821e\u8e48\u7248\uff0c\u662fRE-M!X\u8df3\u7684\uff0c\u5927\u5bb6\u76f4\u63a5\u672c\u7ad9\u641c\u7d22\u56fd\u738b\u6e38\u620f\u5c31\u80fd\u627e\u5230",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "8",
                    time: 5,
                    font: "small",
                    color: "#A52A2A",
                    content: "\u7ed9\u7897\u8001\u5e08\u75af\u72c2\u6253call\u554a\u554a\u554a\u554a\u554a",
                    type: $l.Barrel,
                    author: {
                        name: "\u591a\u7459\u91d1\u57ce\u6b66"
                    }
                }, {
                    id: "9",
                    time: 5.55,
                    font: "small",
                    color: "#5F9EA0",
                    content: "\u4e00\u4eba\u8840\u66f8\u74dc\u54e5\u8df3\u821e",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "10",
                    time: 5.65,
                    font: "small",
                    color: "#7FFF00",
                    content: "\u6211\u6c38\u8fdc\u559c\u6b22\u5b89\u96f7\u3002",
                    type: $l.FixTop,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "11",
                    time: 6.12,
                    font: "small",
                    color: "#D2691E",
                    content: "\u4e0d\u8bba\u6392\u540d\u591a\u5c11\u6211\u90fd\u6c38\u8fdc\u652f\u6301\u4f60\u4eec",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "12",
                    time: 6.55,
                    font: "small",
                    color: "#FF7F50",
                    content: "\u8868\u767d\u897f\u56db\uff01\uff01\uff01",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "13",
                    time: 7,
                    font: "small",
                    color: "#6495ED",
                    content: "\u8001\u5927\uff0c\u597d\u597d\u770b\u554a\u554a\u554a\u554a\u554a\u554a",
                    type: $l.Barrel,
                    author: {
                        name: "\u957f\u6c5f\u540e\u6d6a\u63a8\u524d\u6d6a"
                    }
                }, {
                    id: "14",
                    time: 7.65,
                    font: "small",
                    color: "#DC143C",
                    content: "\u5b89\u96f7\u662f\u6211\u7b2c\u4e00\u4e2a\u60f3\u7528\u5fc3\u53bb\u5b88\u62a4\u7684\u5708\u5b50",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "15",
                    time: 7.222,
                    font: "small",
                    color: "#00008B",
                    content: "\u4eca\u5929\u5929\u6c14\u5f88\u597d\uff0c\u539f\u6765\u5927\u5bb6\u90fd\u5728\u5bb6\u91cc\u505a\u83dc\u3002\u3002\u3002",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "16",
                    time: 8.12,
                    font: "small",
                    color: "#008B8B",
                    content: "\u80dc\u51fa\uff01\u6211\u6572\uff01\uff01\uff01",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "17",
                    time: 8.32,
                    font: "small",
                    color: "#B8860B",
                    content: "\u5c0f\u59d0\u59d0\u505a\u83dc\u770b\u8d77\u6765\u5f88\u597d\u5403\u7684\u6837\u5b50\u3002\u3002\u3002\u3002",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "18",
                    time: 8.34,
                    font: "small",
                    color: "#A9A9A9",
                    content: "\u7a81\u7136\u53d1\u73b0\u81ea\u5df1\u597d\u524d\uff01\uff01\uff1f",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "19",
                    time: 9.25,
                    font: "small",
                    color: "#006400",
                    content: "\u7b2c\u4e00\u4e2a\u770b\u5b8c\uff01",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "20",
                    time: 9.55,
                    font: "small",
                    color: "#BDB76B",
                    content: "\u60f3\u770b\u74dc\u54e5\u8df3\u821e\u54c8\u54c8\u54c8\u54c8",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "21",
                    time: 9.61,
                    font: "small",
                    color: "#8B008B",
                    content: "6666",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "22",
                    time: 9.66,
                    font: "small",
                    color: "#556B2F",
                    content: "\u5982\u679c\u4e0d\u662f\u4f60\uff0c\u4ed6\u65e0\u6cd5\u5f81\u670d\u661f\u8fb0\u5927\u6d77",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "23",
                    time: 10,
                    font: "small",
                    color: "#FF8C00",
                    content: "\u524d\u65b9\u9ad8\u80fd",
                    type: $l.Barrel,
                    author: {
                        name: "\u9e21\u9e21\u548c\u9e21\u9e21"
                    }
                }, {
                    id: "24",
                    time: 10.1112,
                    font: "small",
                    color: "#8FBC8F",
                    content: "\u524d\u65b9\u6709\u4eba\u5267\u900f\uff0c\u5927\u5bb6\u95ea\u907f",
                    type: $l.Barrel,
                    author: {
                        name: "\u4e13\u4fee\u4e0b\u6c34\u9053"
                    }
                }, {
                    id: "25",
                    time: 10.7,
                    font: "small",
                    color: "#483D8B",
                    content: "\u4e91\u4eae\u55f7\u55f7\u55f7\uff01\uff01",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "26",
                    time: 10.75,
                    font: "small",
                    color: "#2F4F4F",
                    content: "HHHHHH\u5986\u6709\u70b9\u592a\u6d53\u4e86",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "27",
                    time: 11,
                    font: "small",
                    color: "#00CED1",
                    content: "\u5c0f\u7f16\u8d85\u8d5e\u7684\u5566\u53ec\u5524\u5b57\u5e55\u541b",
                    type: $l.Barrel,
                    author: {
                        name: "iadW"
                    }
                }, {
                    id: "28",
                    time: 11.2,
                    font: "small",
                    color: "#9400D3",
                    content: "\u5929\u5929\u5c31\u662f\u5929\u5929",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "29",
                    time: 11.25,
                    font: "small",
                    color: "#FF1493",
                    content: "\u4e5d\u83dc\u82b1\u5230\u5e95\u662f\u4ec0\u4e48\u82b1",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "30",
                    time: 11.55,
                    font: "small",
                    color: "#dad28e",
                    content: "\u5b57\u5e55\u541b\uff01\uff01\u547c\u53eb\u5b57\u5e55\u541b\uff01\uff01",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "31",
                    time: 12.55,
                    font: "small",
                    color: "#00BFFF",
                    content: "\u54c7\u8fd9\u5957\u8863\u670d\u5e05\u7684",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "32",
                    time: 13,
                    font: "small",
                    color: "#696969",
                    content: "\u53ec\u5524\u5b57\u5e55\u541b",
                    type: $l.Barrel,
                    author: {
                        name: "caiDn"
                    }
                }, {
                    id: "33",
                    time: 13.25,
                    font: "small",
                    color: "#008000",
                    content: "\u55f7\u55f7\u55f7\u55f7\u55f7\u55f7\u597d\u9e21\u51bb",
                    type: $l.Barrel,
                    author: {
                        name: "\u5c0f\u5f1f\u767d\u91cc\u6d6a\u6761"
                    }
                }, {
                    id: "34",
                    time: 14,
                    font: "small",
                    color: "#CD5C5C",
                    content: "\u745e\u5609\u5927\u6cd5\u597d\uff01\uff01\uff01\uff01",
                    type: $l.Barrel,
                    author: {
                        name: "caaaaiDn"
                    }
                }],
                es = function() {
                    function t() {}
                    return t.prototype.getDanmu = function() {
                        return Object(b.a)(ts)
                    }, t
                }(),
                is = i("c0WJ"),
                ns = function() {
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
                            var i = t.video.playlist[e].medias.filter(function(e) {
                                return e.key === t.mediaKey
                            });
                            i.length > 0 && (t.media = i[0])
                        })
                    }, t.prototype.nextMedia = function() {
                        var t = this,
                            e = "";
                        return ["tv-series", "anime", "variety"].includes(this.video.category) ? (Object.keys(this.video.playlist).map(function(i) {
                            var n = t.video.playlist[i].medias.findIndex(function(e) {
                                return e.id === t.media.id
                            });
                            n > -1 && n < t.video.playlist[i].medias.length - 1 && (e = t.video.playlist[i].medias[n + 1].id)
                        }), e) : e
                    }, t.prototype.save = function(t, e, i) {
                        if (this.mediaKey = i, this.getMedia(), this.video && this.media && (this.current = t, this.duration = e, !this.veryBeginning())) {
                            var n = {
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
                            this._playHistoryService.pushLocalPlayHistory(n)
                        }
                    }, t.prototype.getFromLocal = function() {
                        return this._playHistoryService.getLocalPlayHistoryById(this.video.id)
                    }, t
                }(),
                ls = i("K9Ia"),
                ss = i("1XPh"),
                as = i("KVMJ"),
                os = i("b1b0"),
                rs = function() {
                    function t(t, e, i, n, l, s, a, o, r, u, h, d, c, p, f, m, v, b, y, x, C, w) {
                        var k = this;
                        this._videoService = t, this._danmuService = e, this._router = i, this._activatedRoute = n, this._titleService = l, this._dnDialogService = s, this._windowService = a, this._messageDialogService = o, this.pageScrollService = r, this._rechargeBoxService = u, this._favoriteService = h, this._purchaseRequiredDialogService = d, this._purchaseSuccessDialogService = c, this.document = p, this.store = f, this._location = m, this._videoTransFormer = v, this._mediaTransFormer = b, this._storage = y, this.watchHistoy = x, this._playHistoryService = C, this._permission = w, this.isAdult = 2 === F.a.cinema, this.pendingPlayList = null, this.broker = "", this.videoTitle = "", this.mediaid = null, this.filterGold = 10, this.showSmallPlayer = !1, this.timer$ = new ls.a, this.customData = null, this.screenType = g.a, this.screenSize = g.a.Large, this.messageDialogType = mt.b, this.start = 0, this.hasBought = 0, this.isVideoOver = !1, this.subscriptions = [], this.ggPosition = ss.b, this.purchasing = !1, this.currentLanguage = 0, this.serverInfo = {}, this.subscript = null, this.playedKey = "-1", this.viewTime = "", this.cinema = F.a.cinema, this.detailPageRender = !1, this.playRatio = !1, this.shouldClose = !1, this.reload = !1, this._windowService.size$.subscribe(function(t) {
                            k.screenSize = t
                        }), this.subscriptions.push(i.events.subscribe(function(t) {
                            if (t instanceof O.g && k.mediaKey && k.api) try {
                                k.watchHistoy.save(k.api.currentTime, k.api.totalTime, k.mediaKey)
                            } catch (e) {}
                        })), this._purchaseRequiredDialogService.purchaseRequiredDialogSource$.subscribe(function(t) {
                            k.videoInShoppingCart = {
                                price: t.price,
                                mediaId: t.mediaId
                            }
                        }), this.subscript = f.subscribe(function() {
                            return k.readState()
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
                        }), this.playRatio = this._permission.isValid(al.b.PlayRatio), this._activatedRoute.queryParams.subscribe(function(e) {
                            vt.a.isUrlContains(["play"]) ? t.mediaKey = e.id : vt.a.isUrlContains(["detail"]) && (t.videoKey = e.id, t.detailPageRender = !1, t.mediaKey = null), t.renderVideoPage(), t.renderPlayer()
                        }), this.subscriptions.push(vt.a.GetOrCreateSubscript("changeHistory").subscribe(function(e) {
                            e && (t.playedKey = e.mKey, t.viewTime = vt.a.getTimeSpan(e.current))
                        }))
                    }, t.prototype.readState = function() {
                        var t = this,
                            e = this.store.getState().users;
                        (!this.user && e.currentUser || this.user && !e.currentUser) && (null == this.user && e.currentUser.id > 0 && this.mediaKey && this._videoService.IsUserFilter(e.currentUser, this.mediaKey).subscribe(function(i) {
                            0 === e.currentUser.token.gid && (t.hasBought = i.IsFilter ? 1 : 0), t.broker = i.Broker
                        }), this.user = e.currentUser, this.renderVideoPage(), this.user && this.user.token && this.user.token.gid > 0 && this.getPlayList()), this.user = e.currentUser;
                        var i = this.store.getState().comments;
                        this.comments = i.currentComments
                    }, t.prototype.renderVideoPage = function(t) {
                        var e = this;
                        void 0 === t && (t = null), this.start = this._activatedRoute.snapshot.queryParams.start, this.videoKey && !this.detailPageRender && this.subscriptions.push(this._videoService.getVideo(this.user, this.videoKey).subscribe(function(t) {
                            e.detailPageRender = !0, e.invokeDataToVideoPage(t), e.user && e.user.id && e.subscriptions.push(e._favoriteService.getFavoriteUpdates(e.user).subscribe(function(t) {
                                e.store.dispatch({
                                    type: as.g,
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
                            type: ln.d,
                            video: this.video
                        }), this.store.dispatch({
                            type: ln.c,
                            language: this.video.language
                        }), this._videoService.pageViewRecord(this.video.recApiUrl).subscribe(function(t) {
                            "ok" === t && e._favoriteService.changeFavoriteStatus(!0)
                        }), this.video.languages && 2 === this.video.languages.length && this._videoService.getPlaylistByLanguage(this.user, this.video.languages[1].Link).subscribe(function(t) {
                            e.store.dispatch({
                                type: ln.b,
                                videos: t
                            })
                        })
                    }, t.prototype.renderPlayer = function() {
                        var t = this;
                        this.mediaKey && (this.subscriptions.push(this._videoService.getMedia(this.user, this.mediaKey, !!this.videoKey).subscribe(function(e) {
                            var i = null,
                                n = null,
                                l = null;
                            t.videoKey ? (i = [].concat(t.video.playlist.guest.medias).concat(t.video.playlist.vip.medias).concat(t.video.playlist.guest.alter || []).concat(t.video.playlist.vip.alter || []), n = t.video.title, l = t.video.language) : (t.videoKey = e.Key, t.invokeDataToVideoPage(t._videoTransFormer.transformFromVideoService(e)), t.detailPageRender = !0);
                            var s = t._mediaTransFormer.transform(e, i, n, l),
                                a = [],
                                o = [],
                                r = [];
                            if (t.serverInfo = s.serverinfo, t.mediaid = s.id, t.customData = s.custom, s.startlist && !t._permission.isValid(al.b.FilterFrontAds))
                                for (var u = 0; u < s.startlist.length; ++u) {
                                    var h = t.converHtml5ToMedia(s.sources[u]);
                                    a.push(h)
                                }
                            var d = 3;
                            for (u = 0; u < s.sources.length; ++u) {
                                var c = s.sources[u];
                                if (c.link) c.source && (t._permission.isValid(al.b.FilterFrontAds) || (t.shouldUseFronAds(s.title) ? d > 0 && (--d, a.push(t.converHtml5ToMedia(c))) : o.push(t.converHtml5ToMedia(c))));
                                else {
                                    t.broker = s.sources[u].broker;
                                    var p = t.converHtml5ToMedia(s.sources[u]);
                                    p.title = s.title, a.push(p)
                                }
                            }
                            s.pauselist && !t._permission.isValid(al.b.FilterPauseAds) && (r = s.pauselist.map(function(e) {
                                return t.converHtml5ToMedia2(e)
                            })), t.assingPendding("medias", a), 0 === o.length && (null != t.user && t.user.token.gid <= 0 && (t.hasBought = t._permission.isValid(al.b.FilterFrontAds) ? 2 : 1), o = [{
                                src: "",
                                href: "",
                                isAd: !0
                            }]), t.shouldUseFronAds(s.title) || t.assingPendding("adsList", o), t.assingPendding("pauseList", r), t.playOrWait()
                        })), this.shouldClose = !0)
                    }, t.prototype.shouldUseFronAds = function(t) {
                        return 2 == F.a.cinema ? -1 == t.indexOf("\u9884\u89c8") : !!vt.a.isIphoneDevice()
                    }, Object.defineProperty(t.prototype, "filterCallbackFunc", {
                        get: function() {
                            return this.filterCallback.bind(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.filterCallback = function(t, e) {
                        this.user ? this._videoService.filterVideo(this.user, this.mediaid).subscribe(function(i) {
                            var n = i[0];
                            n && (n && n.issucess ? t() : e(n))
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
                        var i = null;
                        this.api.subscript("time", function(t) {
                            if (e.broker && (!i || Math.abs(t.current - i.current) > 1e4)) {
                                i = t;
                                var n = e.broker.replace("__placeholder__", Math.floor(t.current / 1e3) + "_" + Math.floor(t.total / 1e3));
                                e._videoService.sendPlayHistory(n)
                            }
                        }), this.api.subscript("ended", function() {
                            (e.user && e.user.token.gid > 0 || e._permission.isValid(al.b.AutoPlayNext)) && e.nextVideo(e._permission.isValid(al.b.AutoPlayNext), null, function() {})
                        }), this.api.subscript("fullscreen", function(t) {
                            t.isfullscreen || window.scrollTo(0, 0)
                        }), this.api.subscript("playAds", function(t) {
                            t.href && e._videoService.sendWatched(t.href.replace("/c/c", "/c/d").replace("http:", "https:"))
                        })
                    }, t.prototype.ngOnDestroy = function() {
                        var e = this;
                        this.subscriptions.forEach(function(t) {
                            return t.unsubscribe()
                        }), this.subscript(), null != this.user && (vt.a.clearTimeout(t.timeout), t.timeout = vt.a.setTimeout(function() {
                            return e._playHistoryService.changePlayHistoryStatus(!0)
                        }, 5e3))
                    }, t.prototype.showPlaylist = function() {
                        var t = ml.a.newInstance({
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
                            e && (this.purchasing = !0, this._videoService.purchaseMedia(this.user, e).subscribe(function(i) {
                                if (t.purchasing = !1, i.issucess) {
                                    if ("movie" === t.video.category) i.key.split(",").map(function(e, i) {
                                        t.video.playlist.vip.medias[i].bought = !0, t.video.playlist.vip.medias[i].key = e
                                    });
                                    else {
                                        var n = t.video.playlist.vip.medias.filter(function(t) {
                                            return t.id === Number(e)
                                        });
                                        n.length && (n[0].bought = !0, n[0].key = i.key)
                                    }
                                    t.store.dispatch({
                                        type: as.f,
                                        values: {
                                            dnCoins: i.json.gold,
                                            level: i.json.currentLevel
                                        }
                                    }), t._messageDialogService.setState({
                                        type: mt.b.Emoji3,
                                        message: '<h5 class="mb-4">\u89c6\u9891\u5df2\u89e3\u9501\uff0c\u5e76\u5df2\u6dfb\u52a0\u5230\u6536\u85cf\u5939\u3002</h5><div>' + i.subtitle + "</div>"
                                    }), t._purchaseSuccessDialogService.setState({
                                        mediaKey: i.key.split(",")[0],
                                        videoKey: t.video.key
                                    }), t._dnDialogService.open("purchase-success", {
                                        success: i.key
                                    })
                                } else t._messageDialogService.setState({
                                    type: mt.b.Danger,
                                    message: i
                                }), t._dnDialogService.open("message-dialog")
                            }))
                        }
                    }, t.prototype.responsivePlayerSize = function() {
                        return this.screenSize === g.a.Small ? {
                            width: 761,
                            height: 428
                        } : this.screenSize === g.a.Medium ? {
                            width: 802,
                            height: 451
                        } : this.screenSize === g.a.Large ? {
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
                            var i = [];
                            t.video.playlist.vip.medias.forEach(function(t) {
                                i.push(t.isNew)
                            }), t.video.playlist.vip.medias = e.VipList.map(function(t, e) {
                                return t.isNew = i[e], t
                            }), t.reload = !1
                        }))
                    }, t.prototype.switchLanguage = function(t) {
                        var e = this;
                        this.video.languages && 2 === this.video.languages.length && this._videoService.getPlaylistByLanguage(this.user, this.video.languages[1].Link).subscribe(function(t) {
                            null != e.video && (e.video.playlist.guest.alter = t.GuessList, e.video.playlist.vip.alter = t.VipList), e.store.dispatch({
                                type: ln.b,
                                videos: t
                            })
                        })
                    }, t.prototype.nextVideo = function(t, e, i) {
                        var n = this;
                        void 0 === t && (t = !1), (null != this.user && this.user.token.gid > 0 || !0 === t) && this._videoService.playNextVideo({
                            ID: this.mediaid
                        }).subscribe(function(t) {
                            if (t && t.length) {
                                if (!t[0]) return n.isVideoOver = !0, void i();
                                n.customData = t[0].custom, n.interpreterCustom(), n._titleService.setTitle(n.videoTitle + "-" + t[0].title);
                                var l = n._router.parseUrl(n._router.url);
                                l.queryParams.start = "", delete l.queryParams.start, n.start = 0, n.mediaKey = l.queryParams.id = decodeURIComponent(t[0].key), n._router.navigateByUrl(l, {
                                    replaceUrl: !0
                                }), n.mediaid = t[0].id, e && e()
                            } else i && i()
                        })
                    }, t.prototype.handleError = function() {
                        this.renderPlayer()
                    }, t.timeout = null, t
                }(),
                us = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [".content[_ngcontent-%COMP%]{padding:24px}.player-header[_ngcontent-%COMP%]{padding:11px 10px;background-color:#000;color:#fff}.player-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.player-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ddd}.player-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.video-meta[_ngcontent-%COMP%]{height:633px;padding:35px 40px;background-color:#ededed;position:relative;color:#434343}.video-meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:16px;line-height:29px}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(255,255,255,.8);z-index:999}.media-btn[_ngcontent-%COMP%]{font-family:Microsoft YaHei}.list-title[_ngcontent-%COMP%]{width:80px}.page-container[_ngcontent-%COMP%]{width:1068px;min-width:1068px;margin:0 auto;padding:22px 49px}.v-page-content[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{padding-top:0!important}.video-player[_ngcontent-%COMP%]{padding:0!important}.screen-small[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.screen-small[_ngcontent-%COMP%]   .video-meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:15px;line-height:24px}.screen-small.container[_ngcontent-%COMP%]{width:1290px;min-width:1290px;max-width:1290px}.screen-small[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{width:960px;min-width:960px;margin:0 auto;padding:0 16px 16px 0}.screen-small[_ngcontent-%COMP%]   .page-container.video-meta[_ngcontent-%COMP%]{padding:20px;width:689px;min-width:689px;height:460px}.screen-small[_ngcontent-%COMP%]   .page-container.video-player[_ngcontent-%COMP%]{width:689px;min-width:689px;height:460px;background-color:#000}.screen-medium[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.screen-medium[_ngcontent-%COMP%]   .video-meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:15px;line-height:24px}.screen-medium.container[_ngcontent-%COMP%]{width:1360px;min-width:1360px;max-width:1360px}.screen-medium[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{width:706px;min-width:706px;margin:0 auto;padding:0 20px}.screen-medium[_ngcontent-%COMP%]   .page-container.video-meta[_ngcontent-%COMP%]{padding:20px;width:706px;min-width:706px;height:500px}.screen-medium[_ngcontent-%COMP%]   .page-container.video-player[_ngcontent-%COMP%]{width:706px;min-width:706px;height:500px;background-color:#000}.screen-large.container[_ngcontent-%COMP%]{width:1528px;min-width:1528px;max-width:1528px}.screen-large[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{width:947px;min-width:947px;margin:0 auto;padding:22px}.screen-large[_ngcontent-%COMP%]   .page-container.video-meta[_ngcontent-%COMP%]{height:500px}.screen-large[_ngcontent-%COMP%]   .page-container.video-player[_ngcontent-%COMP%]{width:947px;min-width:947px;height:500px;background-color:#000}.screen-large[_ngcontent-%COMP%]   .video-meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:15px;line-height:24px}.star[_ngcontent-%COMP%]{cursor:pointer}.fixed-player[_ngcontent-%COMP%]{position:fixed;right:30px;top:80px;width:480px;height:320px;z-index:9999}.border-warp[_ngcontent-%COMP%]{margin:0 auto;width:1903px;background-color:#fff}.screen-small.border-warp[_ngcontent-%COMP%]{width:1349px}.screen-medium.border-warp[_ngcontent-%COMP%]{width:1423px}.screen-large.border-warp[_ngcontent-%COMP%]{width:1663px}"]
                    ],
                    data: {}
                });

            function hs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-gg-block", [], null, null, null, d.b, d.a)), n["\u0275did"](1, 245760, null, 0, c.a, [p.a, g.b], {
                    posterImage: [0, "posterImage"],
                    ggPosition: [1, "ggPosition"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.posterImage + "?w=420&format=jpg", i.ggPosition.VideoPageLeft)
                }, null)
            }

            function ds(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-play-statistics", [], null, null, null, D, R)), n["\u0275did"](1, 4308992, null, 0, I, [m.b, T, O.a, g.b], {
                    videoKey: [0, "videoKey"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.component.videoKey)
                }, null)
            }

            function cs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-gg-block", [], null, null, null, d.b, d.a)), n["\u0275did"](1, 245760, null, 0, c.a, [p.a, g.b], {
                    ggPosition: [0, "ggPosition"],
                    code: [1, "code"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.ggPosition.VideoPageRight, i.isAdult ? "ADR" : "DR")
                }, null)
            }

            function ps(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-gg-block", [], null, null, null, d.b, d.a)), n["\u0275did"](1, 245760, null, 0, c.a, [p.a, g.b], {
                    ggPosition: [0, "ggPosition"],
                    code: [1, "code"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.ggPosition.VideoPageRight, i.isAdult ? "APR1" : "PR1")
                }, null)
            }

            function gs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 18, "div", [
                    ["class", "container v-page v-page-top d-flex"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    "screen-xxsmall": 0,
                    "screen-xsmall": 1,
                    "screen-small": 2,
                    "screen-medium": 3,
                    "screen-large": 4
                }), (t()(), n["\u0275eld"](3, 0, null, null, 2, "div", [
                    ["class", "player-side player-left"],
                    ["style", "flex:1"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, hs)), n["\u0275did"](5, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](6, 0, null, null, 7, "div", [
                    ["class", "page-container video-meta"]
                ], [
                    [4, "width", "px"],
                    [4, "height", "px"]
                ], null, null, null, null)), (t()(), n["\u0275eld"](7, 0, null, null, 4, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](8, 0, null, null, 1, "app-video-info", [], null, null, null, ut, z)), n["\u0275did"](9, 114688, null, 0, _, [V.a], {
                    video: [0, "video"],
                    screenSize: [1, "screenSize"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, ds)), n["\u0275did"](11, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](12, 0, null, null, 1, "app-play-history", [], null, [
                    [null, "showPlaylistEvent"]
                ], function(t, e, i) {
                    var n = !0;
                    return "showPlaylistEvent" === e && (n = !1 !== t.component.showPlaylist() && n), n
                }, At, yt)), n["\u0275did"](13, 638976, null, 0, bt, [T, g.b, ft.a, mt.a], {
                    router: [0, "router"],
                    video: [1, "video"],
                    videoKey: [2, "videoKey"],
                    user: [3, "user"]
                }, {
                    showPlaylistEvent: "showPlaylistEvent"
                }), (t()(), n["\u0275eld"](14, 0, null, null, 4, "div", [
                    ["class", "player-side player-right"],
                    ["style", "flex:1"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, cs)), n["\u0275did"](16, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, ps)), n["\u0275did"](18, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.screenSize === i.screenType.XXSmall, i.screenSize === i.screenType.XSmall, i.screenSize === i.screenType.Small, i.screenSize === i.screenType.Medium, i.screenSize === i.screenType.Large);
                    t(e, 1, 0, "container v-page v-page-top d-flex", n), t(e, 5, 0, !!i.posterImage), t(e, 9, 0, i.video, i.screenSize), t(e, 11, 0, i.screenSize > i.screenType.Medium), t(e, 13, 0, i._router, i.video, i.videoKey, i.user), t(e, 16, 0, !i.mediaKey), t(e, 18, 0, i.mediaKey)
                }, function(t, e) {
                    var i = e.component;
                    t(e, 6, 0, i.responsivePlayerSize().width, i.responsivePlayerSize().height)
                })
            }

            function fs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 13, "div", [
                    ["class", "container v-page v-page-content d-flex"]
                ], null, null, null, null, null)), n["\u0275did"](1, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](2, {
                    "screen-xxsmall": 0,
                    "screen-xsmall": 1,
                    "screen-small": 2,
                    "screen-medium": 3,
                    "screen-large": 4
                }), (t()(), n["\u0275eld"](3, 0, null, null, 10, "div", [
                    ["class", "d-flex w-100"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "player-side player-left"],
                    ["style", "flex:1"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](5, 0, null, null, 1, "app-gg-block", [], null, null, null, d.b, d.a)), n["\u0275did"](6, 245760, null, 0, c.a, [p.a, g.b], {
                    ggPosition: [0, "ggPosition"],
                    code: [1, "code"]
                }, null), (t()(), n["\u0275eld"](7, 0, null, null, 3, "div", [
                    ["class", "page-container video-player"]
                ], [
                    [4, "width", "px"],
                    [4, "height", "px"]
                ], null, null, null, null)), (t()(), n["\u0275eld"](8, 0, null, null, 2, "dn-videoplayer", [
                    ["topPrefix", "0"]
                ], null, [
                    [null, "onVideoReady"],
                    [null, "onErrorHandler"],
                    ["window", "resize"]
                ], function(t, e, i) {
                    var l = !0,
                        s = t.component;
                    return "window:resize" === e && (l = !1 !== n["\u0275nov"](t, 10).onWindowResize() && l), "onVideoReady" === e && (l = !1 !== s.onPlayerReady(i) && l), "onErrorHandler" === e && (l = !1 !== s.handleError() && l), l
                }, Ii, hi)), n["\u0275prd"](512, null, ei, ei, [ii.a]), n["\u0275did"](10, 245760, null, 0, ri, [ei], {
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
                }), (t()(), n["\u0275eld"](11, 0, null, null, 2, "div", [
                    ["class", "player-side player-right"],
                    ["style", "flex:1"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](12, 0, null, null, 1, "app-gg-block", [], null, null, null, d.b, d.a)), n["\u0275did"](13, 245760, null, 0, c.a, [p.a, g.b], {
                    ggPosition: [0, "ggPosition"],
                    code: [1, "code"]
                }, null)], function(t, e) {
                    var i = e.component,
                        n = t(e, 2, 0, i.screenSize === i.screenType.XXSmall, i.screenSize === i.screenType.XSmall, i.screenSize === i.screenType.Small, i.screenSize === i.screenType.Medium, i.screenSize === i.screenType.Large);
                    t(e, 1, 0, "container v-page v-page-content d-flex", n), t(e, 6, 0, i.ggPosition.VideoPageLeft, i.isAdult ? "APR1" : "PR1"), t(e, 10, 1, [i.getGID > 0, "0", i.responsivePlayerSize().height, i.filterGold, i.filterCallbackFunc, i.playNextFunc, i.playRatio, i.hasBought, i.serverInfo, i.getGID <= 0, "auto"]), t(e, 13, 0, i.ggPosition.VideoPageRight, i.isAdult ? "APR2" : "PR2")
                }, function(t, e) {
                    var i = e.component;
                    t(e, 7, 0, i.responsivePlayerSize().width, i.responsivePlayerSize().height)
                })
            }

            function ms(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-sidebar-recent-updates", [
                    ["class", "d-block mb-5"]
                ], null, null, null, Wi, Vi)), n["\u0275did"](1, 770048, null, 0, Ei, [Bi.a, V.a], {
                    cid: [0, "cid"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.component.video.cid)
                }, null)
            }

            function vs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-sidebar-recent-updates", [
                    ["class", "d-block mb-5"]
                ], null, null, null, Wi, Vi)), n["\u0275did"](1, 770048, null, 0, Ei, [Bi.a, V.a], {
                    cid: [0, "cid"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.component.video.cid)
                }, null)
            }

            function bs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-sidebar-topvideos", [
                    ["class", "d-block"]
                ], null, null, null, qi, Ui)), n["\u0275did"](1, 245760, null, 0, ji, [V.a, Yi.a, Xi.a], null, null)], function(t, e) {
                    t(e, 1, 0)
                }, null)
            }

            function ys(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 6, "div", [
                    ["class", "page-left"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, ms)), n["\u0275did"](2, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, vs)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, bs)), n["\u0275did"](6, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, !i.isAdult && i.video && "movie" !== i.video.category && "tv-series" !== i.video.category), t(e, 4, 0, !i.isAdult && i.video && "tv-series" === i.video.category), t(e, 6, 0, i.video)
                }, null)
            }

            function xs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-gg-block", [
                    ["class", "d-block mb-5"]
                ], null, null, null, d.b, d.a)), n["\u0275did"](1, 245760, null, 0, c.a, [p.a, g.b], {
                    ggPosition: [0, "ggPosition"],
                    code: [1, "code"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.ggPosition.VideoPageContent, i.isAdult ? "ADB" : "DB")
                }, null)
            }

            function Cs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-gg-block", [
                    ["class", "d-block mb-5"]
                ], null, null, null, d.b, d.a)), n["\u0275did"](1, 245760, null, 0, c.a, [p.a, g.b], {
                    ggPosition: [0, "ggPosition"],
                    code: [1, "code"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i.ggPosition.VideoPageContent, i.isAdult ? "APB" : "PB")
                }, null)
            }

            function ws(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "app-summary", [], null, null, null, nn, Qi)), n["\u0275did"](2, 4833280, null, 0, Zi, [], {
                    summary: [0, "summary"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.component.video.summary)
                }, null)
            }

            function ks(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "div", [
                    ["class", "mb-5 mt-4"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "h4", [
                    ["style", "margin-bottom: 20px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5267\u60c5\u7b80\u4ecb"])), (t()(), n["\u0275and"](16777216, null, null, 1, null, ws)), n["\u0275did"](4, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    t(e, 4, 0, e.component.video)
                }, null)
            }

            function Ss(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "app-language-switch", [], null, [
                    [null, "switchLanguageEvent"]
                ], function(t, e, i) {
                    var n = !0;
                    return "switchLanguageEvent" === e && (n = !1 !== t.component.switchLanguage(i) && n), n
                }, on, an)), n["\u0275did"](2, 114688, null, 0, sn, [Xi.a], {
                    languages: [0, "languages"],
                    currentTab: [1, "currentTab"]
                }, {
                    switchLanguageEvent: "switchLanguageEvent"
                })], function(t, e) {
                    var i = e.component;
                    t(e, 2, 0, i.video.languages, i.currentLanguage)
                }, null)
            }

            function Ms(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-video-resolution-symbol", [], null, null, null, dn, hn)), n["\u0275did"](1, 114688, null, 0, un, [rn.a], {
                    resolution: [0, "resolution"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.component.video.playlist.guest.resolution)
                }, null)
            }

            function As(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 15, "div", [
                    ["class", "mb-5"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 12, "div", [
                    ["class", "d-flex align-items-center mb-4"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 9, "div", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](3, 0, null, null, 8, "h4", [], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 5, "span", [
                    ["class", "d-inline-block list-title"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](5, 0, null, null, 1, "span", [
                    ["class", "text-blue"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6e38\u5ba2"])), (t()(), n["\u0275ted"](-1, null, ["/"])), (t()(), n["\u0275eld"](8, 0, null, null, 1, "span", [
                    ["class", "text-green"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u4f1a\u5458"])), (t()(), n["\u0275eld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u64ad\u653e\u5217\u8868"])), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ms)), n["\u0275did"](13, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](14, 0, null, null, 1, "app-media-list", [], null, null, null, On, Mn)), n["\u0275did"](15, 114688, null, 0, Sn, [Xi.a], {
                    lists: [0, "lists"],
                    videoId: [1, "videoId"],
                    type: [2, "type"],
                    playedKey: [3, "playedKey"],
                    viewTime: [4, "viewTime"],
                    mediaKey: [5, "mediaKey"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 13, 0, i.video.playlist.guest.resolution), t(e, 15, 0, null == i.video ? null : i.video.playlist.guest, null == i.video ? null : i.video.key, "guest", i.shouldClose ? "-1" : i.playedKey, i.viewTime, i.mediaKey)
                }, null)
            }

            function Ps(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-video-resolution-symbol", [], null, null, null, dn, hn)), n["\u0275did"](1, 114688, null, 0, un, [rn.a], {
                    resolution: [0, "resolution"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.component.video.playlist.vip.resolution)
                }, null)
            }

            function Ns(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-media-list", [], null, [
                    [null, "selectMediaEvent"]
                ], function(t, e, i) {
                    var n = !0;
                    return "selectMediaEvent" === e && (n = !1 !== t.component.onSelectMediaEvent(i) && n), n
                }, On, Mn)), n["\u0275did"](1, 114688, null, 0, Sn, [Xi.a], {
                    lists: [0, "lists"],
                    videoId: [1, "videoId"],
                    type: [2, "type"],
                    playedKey: [3, "playedKey"],
                    viewTime: [4, "viewTime"],
                    mediaKey: [5, "mediaKey"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, null == i.video ? null : i.video.playlist.vip, null == i.video ? null : i.video.key, "vip", i.shouldClose ? "-1" : i.playedKey, i.viewTime, i.mediaKey)
                }, null)
            }

            function Ts(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 15, "div", [
                    ["class", "mb-5"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 12, "div", [
                    ["class", "d-flex align-items-center mb-4"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 9, "div", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](3, 0, null, null, 8, "h4", [], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 5, "span", [
                    ["class", "d-inline-block list-title"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](5, 0, null, null, 2, "span", [
                    ["class", "text-gold"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](6, 0, null, null, 1, "b", [
                    ["style", "letter-spacing: 3px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["VIP"])), (t()(), n["\u0275eld"](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u4f1a\u5458"])), (t()(), n["\u0275eld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u64ad\u653e\u5217\u8868"])), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ps)), n["\u0275did"](13, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ns)), n["\u0275did"](15, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 13, 0, i.video.playlist.vip.resolution), t(e, 15, 0, !i.reload)
                }, null)
            }

            function Is(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-center justify-content-start ml-1"],
                    ["style", "min-height: 30px"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "h5", [
                    ["class", "text-light"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6682\u65e0\u5185\u5bb9"]))], null, null)
            }

            function Os(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-media-list", [], null, [
                    [null, "selectMediaEvent"]
                ], function(t, e, i) {
                    var n = !0;
                    return "selectMediaEvent" === e && (n = !1 !== t.component.onSelectMediaEvent(i) && n), n
                }, On, Mn)), n["\u0275did"](1, 114688, null, 0, Sn, [Xi.a], {
                    lists: [0, "lists"],
                    videoId: [1, "videoId"],
                    type: [2, "type"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, null == i.video ? null : i.video.playlist.downloads, null == i.video ? null : i.video.key, "download")
                }, null)
            }

            function Rs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 9, "div", [
                    ["class", "mb-5"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-center mb-4"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 3, "div", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](3, 0, null, null, 2, "h4", [], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 1, "span", [
                    ["class", "d-inline-block list-title"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u4e0b\u8f7d\u5217\u8868"])), (t()(), n["\u0275and"](16777216, null, null, 1, null, Is)), n["\u0275did"](7, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Os)), n["\u0275did"](9, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 7, 0, !i.video.playlist.downloads.medias.length), t(e, 9, 0, i.video.playlist.downloads.medias.length)
                }, null)
            }

            function Ds(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-dn-comments", [], null, null, null, $n, jn)), n["\u0275did"](1, 770048, null, 0, Yn, [O.o, O.a, Hn.a, Gn.a, Xi.a], {
                    videoId: [0, "videoId"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.component.video.id)
                }, null)
            }

            function Ls(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, [
                    ["comments", 1]
                ], null, 7, "div", [], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 2, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 1, "h4", [
                    ["id", "comments-title"],
                    ["style", "line-height: 36px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u8ba8\u8bba\u533a"])), (t()(), n["\u0275eld"](4, 0, null, null, 1, "app-comment-box", [
                    ["class", "d-block mb-5"]
                ], null, null, null, tl.b, tl.a)), n["\u0275did"](5, 4440064, null, 0, el.a, [il.a, nl.a, ft.a, Ln.a, Hn.a, Bn.a, mt.a, Vn.b, O.o, O.a, n.ChangeDetectorRef, S.a, ll.a, sl.a, En.a, al.a, Xi.a, f.DOCUMENT], {
                    videoId: [0, "videoId"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ds)), n["\u0275did"](7, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 5, 0, i.video.id), t(e, 7, 0, i.video)
                }, null)
            }

            function Bs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-sidebar-recent-updates", [
                    ["class", "d-block mb-5"]
                ], null, null, null, Wi, Vi)), n["\u0275did"](1, 770048, null, 0, Ei, [Bi.a, V.a], {
                    cid: [0, "cid"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.component.video.cid)
                }, null)
            }

            function Es(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-sidebar-recent-updates", [
                    ["class", "d-block mb-5"]
                ], null, null, null, Wi, Vi)), n["\u0275did"](1, 770048, null, 0, Ei, [Bi.a, V.a], {
                    cid: [0, "cid"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.component.video.cid)
                }, null)
            }

            function Vs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-sidebar-topvideos", [
                    ["class", "d-block mb-5"]
                ], null, null, null, qi, Ui)), n["\u0275did"](1, 245760, null, 0, ji, [V.a, Yi.a, Xi.a], {
                    genre: [0, "genre"]
                }, null)], function(t, e) {
                    t(e, 1, 0, e.component.video.category)
                }, null)
            }

            function Fs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 5, "div", [
                    ["class", "loading-overlay d-flex align-items-center justify-content-center"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 1, "app-loader-spinner", [], null, null, null, Fn.b, Fn.a)), n["\u0275did"](3, 114688, null, 0, _n.a, [], null, null), (t()(), n["\u0275eld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6b63\u5728\u63d0\u4ea4..."]))], function(t, e) {
                    t(e, 3, 0)
                }, null)
            }

            function _s(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "app-share", [], null, null, null, cl, ul)), n["\u0275did"](1, 114688, null, 0, ol, [O.o, rl.DOCUMENT, Xi.a], {
                    url: [0, "url"],
                    title: [1, "title"],
                    id: [2, "id"],
                    image: [3, "image"]
                }, null)], function(t, e) {
                    var i = e.component;
                    t(e, 1, 0, i._router.url, i.video.title, i.videoKey, i.posterImage)
                }, null)
            }

            function zs(t) {
                return n["\u0275vid"](0, [n["\u0275qud"](402653184, 1, {
                    canvas: 0
                }), n["\u0275qud"](402653184, 2, {
                    mediaIdDiv: 0
                }), (t()(), n["\u0275eld"](2, 0, null, null, 40, "div", [
                    ["class", "border-warp"],
                    ["style", "padding-bottom: 30px;"]
                ], null, null, null, null, null)), n["\u0275did"](3, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](4, {
                    "screen-xxsmall": 0,
                    "screen-xsmall": 1,
                    "screen-small": 2,
                    "screen-medium": 3,
                    "screen-large": 4
                }), (t()(), n["\u0275and"](16777216, null, null, 1, null, gs)), n["\u0275did"](6, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, fs)), n["\u0275did"](8, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](9, 0, null, null, 33, "div", [
                    ["class", "container v-page v-page-content boxed d-flex"],
                    ["style", "padding-top: 30px;"]
                ], null, null, null, null, null)), n["\u0275did"](10, 278528, null, 0, f.NgClass, [n.IterableDiffers, n.KeyValueDiffers, n.ElementRef, n.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), n["\u0275pod"](11, {
                    "screen-xxsmall": 0,
                    "screen-xsmall": 1,
                    "screen-small": 2,
                    "screen-medium": 3,
                    "screen-large": 4
                }), (t()(), n["\u0275and"](16777216, null, null, 1, null, ys)), n["\u0275did"](13, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](14, 0, null, null, 19, "div", [
                    ["class", "page-container"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](15, 0, null, null, 1, "app-video-user-data-bar", [], null, [
                    [null, "userBehaviorEvent"],
                    [null, "showCommentsEvent"]
                ], function(t, e, i) {
                    var n = !0,
                        l = t.component;
                    return "userBehaviorEvent" === e && (n = !1 !== l.onUserrBehavior(i) && n), "showCommentsEvent" === e && (n = !1 !== l.showPlaylist() && n), n
                }, Pl, yl)), n["\u0275did"](16, 245760, null, 0, bl, [T, ft.a, mt.a, vl.a, Vn.b, S.a, g.b, f.DOCUMENT, Xi.a], {
                    video: [0, "video"]
                }, {
                    userBehaviorEvent: "userBehaviorEvent"
                }), (t()(), n["\u0275and"](16777216, null, null, 1, null, xs)), n["\u0275did"](18, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Cs)), n["\u0275did"](20, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, ks)), n["\u0275did"](22, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ss)), n["\u0275did"](24, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](25, 0, [
                    ["playLists", 1]
                ], null, 2, "div", [
                    ["id", "playlists"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, As)), n["\u0275did"](27, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ts)), n["\u0275did"](29, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Rs)), n["\u0275did"](31, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Ls)), n["\u0275did"](33, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](34, 0, null, null, 8, "div", [
                    ["class", "page-right"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, Bs)), n["\u0275did"](36, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Es)), n["\u0275did"](38, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275and"](16777216, null, null, 1, null, Vs)), n["\u0275did"](40, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](41, 0, null, null, 1, "app-sidebar-related-videos", [
                    ["class", "d-block mb-4"]
                ], null, null, null, Dl, Ol)), n["\u0275did"](42, 245760, null, 0, Il, [Bi.a, V.a, Xi.a], null, null), (t()(), n["\u0275eld"](43, 0, [
                    ["toastContainer", 1]
                ], null, 0, "div", [], null, null, null, null, null)), (t()(), n["\u0275eld"](44, 0, null, null, 1, "app-footer", [], null, null, null, Ll.b, Ll.a)), n["\u0275did"](45, 114688, null, 0, Bl.a, [g.b], null, null), (t()(), n["\u0275eld"](46, 0, null, null, 19, "dn-dialog", [
                    ["class", "dn-dialog-background"],
                    ["id", "purchase-required"]
                ], null, null, null, El.b, El.a)), n["\u0275did"](47, 245760, null, 0, Vl.a, [ft.a, n.ElementRef], {
                    id: [0, "id"]
                }, null), (t()(), n["\u0275and"](16777216, null, 0, 1, null, Fs)), n["\u0275did"](49, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](50, 0, null, 0, 1, "app-alert-icon", [], null, null, null, Fl.b, Fl.a)), n["\u0275did"](51, 114688, null, 0, _l.a, [], {
                    alertType: [0, "alertType"]
                }, null), (t()(), n["\u0275eld"](52, 0, null, 0, 4, "div", [
                    ["class", "text-center"],
                    ["style", "padding-top: 30px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](53, 0, null, null, 1, "app-purchase-required", [], null, null, null, Gl, Hl)), n["\u0275did"](54, 114688, null, 0, zl, [pn.a], null, null), (t()(), n["\u0275eld"](55, 0, null, null, 1, "a", [
                    ["class", "link-blue"],
                    ["href", "/help-center?cid=7&item=61"],
                    ["target", "_blank\n           "]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5982\u4f55\u83b7\u53d6\u91d1\u5e01\uff1f"])), (t()(), n["\u0275eld"](57, 0, null, 0, 6, "div", [
                    ["class", "dn-dialog-buttons"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](58, 0, null, null, 1, "div", [
                    ["class", "dn-button dn-button-red"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.buyMedia() && n), n
                }, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u4f7f\u7528\u91d1\u5e01"])), (t()(), n["\u0275eld"](60, 0, null, null, 1, "div", [
                    ["class", "dn-button dn-button-gold"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.showRechargeBox() && n), n
                }, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5347\u7ea7VIP"])), (t()(), n["\u0275eld"](62, 0, null, null, 1, "app-dn-dialog-button", [], null, null, null, Wl.b, Wl.a)), n["\u0275did"](63, 114688, null, 0, Yl.a, [ft.a], {
                    dialog: [0, "dialog"]
                }, null), (t()(), n["\u0275eld"](64, 0, null, 0, 1, "app-dn-dialog-close-button", [], null, null, null, jl.b, jl.a)), n["\u0275did"](65, 114688, null, 0, Xl.a, [ft.a], {
                    dialog: [0, "dialog"]
                }, null), (t()(), n["\u0275eld"](66, 0, null, null, 8, "dn-dialog", [
                    ["class", "dn-dialog-background"],
                    ["id", "purchase-success"]
                ], null, null, null, El.b, El.a)), n["\u0275did"](67, 245760, null, 0, Vl.a, [ft.a, n.ElementRef], {
                    id: [0, "id"]
                }, null), (t()(), n["\u0275eld"](68, 0, null, 0, 1, "app-message-dialog", [], null, null, null, Ul.b, Ul.a)), n["\u0275did"](69, 114688, null, 0, Kl.a, [mt.a], null, null), (t()(), n["\u0275eld"](70, 0, null, 0, 2, "div", [
                    ["class", "dn-dialog-buttons"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](71, 0, null, null, 1, "app-purchase-success", [], null, null, null, Jl, Ql)), n["\u0275did"](72, 114688, null, 0, Zl, [O.o, ql.a, ft.a], null, null), (t()(), n["\u0275eld"](73, 0, null, 0, 1, "app-dn-dialog-close-button", [], null, null, null, jl.b, jl.a)), n["\u0275did"](74, 114688, null, 0, Xl.a, [ft.a], {
                    dialog: [0, "dialog"]
                }, null), (t()(), n["\u0275eld"](75, 0, null, null, 15, "dn-dialog", [
                    ["class", "dn-dialog-background"],
                    ["id", "media-unavailable"]
                ], null, null, null, El.b, El.a)), n["\u0275did"](76, 245760, null, 0, Vl.a, [ft.a, n.ElementRef], {
                    id: [0, "id"]
                }, null), (t()(), n["\u0275eld"](77, 0, null, 0, 1, "app-alert-icon", [], null, null, null, Fl.b, Fl.a)), n["\u0275did"](78, 114688, null, 0, _l.a, [], {
                    alertType: [0, "alertType"]
                }, null), (t()(), n["\u0275eld"](79, 0, null, 0, 4, "div", [
                    ["class", "text-center"],
                    ["style", "padding-top: 30px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](80, 0, null, null, 1, "h5", [
                    ["class", "mb-2\n           "]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u91d1\u5e01\u4e0d\u8db3\uff01\u8bf7\u5148\u83b7\u53d6\u91d1\u5e01\uff0c\u6216\u8005\u5347\u7ea7\u4e3aVIP\u4f1a\u5458"])), (t()(), n["\u0275eld"](82, 0, null, null, 1, "a", [
                    ["class", "link-blue"],
                    ["href", "/help-center?cid=7&item=61"],
                    ["target", "_blank\n           "]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5982\u4f55\u83b7\u53d6\u91d1\u5e01\uff1f"])), (t()(), n["\u0275eld"](84, 0, null, 0, 4, "div", [
                    ["class", "dn-dialog-buttons"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](85, 0, null, null, 1, "div", [
                    ["class", "dn-button dn-button-gold"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.showRechargeBox() && n), n
                }, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5347\u7ea7VIP"])), (t()(), n["\u0275eld"](87, 0, null, null, 1, "app-dn-dialog-button", [], null, null, null, Wl.b, Wl.a)), n["\u0275did"](88, 114688, null, 0, Yl.a, [ft.a], {
                    dialog: [0, "dialog"]
                }, null), (t()(), n["\u0275eld"](89, 0, null, 0, 1, "app-dn-dialog-close-button", [], null, null, null, jl.b, jl.a)), n["\u0275did"](90, 114688, null, 0, Xl.a, [ft.a], {
                    dialog: [0, "dialog"]
                }, null), (t()(), n["\u0275eld"](91, 0, null, null, 13, "dn-dialog", [
                    ["class", "dn-dialog-background"],
                    ["id", "vip-only"]
                ], null, null, null, El.b, El.a)), n["\u0275did"](92, 245760, null, 0, Vl.a, [ft.a, n.ElementRef], {
                    id: [0, "id"]
                }, null), (t()(), n["\u0275eld"](93, 0, null, 0, 1, "app-alert-icon", [], null, null, null, Fl.b, Fl.a)), n["\u0275did"](94, 114688, null, 0, _l.a, [], {
                    alertType: [0, "alertType"]
                }, null), (t()(), n["\u0275eld"](95, 0, null, 0, 2, "div", [
                    ["class", "text-center"],
                    ["style", "padding-top:30px;"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](96, 0, null, null, 1, "h5", [
                    ["class", "mb-2"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u6b64\u529f\u80fd\u4ec5\u9650 VIP \u7528\u6237\u4f7f\u7528"])), (t()(), n["\u0275eld"](98, 0, null, 0, 4, "div", [
                    ["class", "dn-dialog-buttons"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](99, 0, null, null, 1, "div", [
                    ["class", "dn-button dn-button-gold"]
                ], null, [
                    [null, "click"]
                ], function(t, e, i) {
                    var n = !0;
                    return "click" === e && (n = !1 !== t.component.showRechargeBox() && n), n
                }, null, null)), (t()(), n["\u0275ted"](-1, null, ["\u5347\u7ea7VIP"])), (t()(), n["\u0275eld"](101, 0, null, null, 1, "app-dn-dialog-button", [], null, null, null, Wl.b, Wl.a)), n["\u0275did"](102, 114688, null, 0, Yl.a, [ft.a], {
                    dialog: [0, "dialog"]
                }, null), (t()(), n["\u0275eld"](103, 0, null, 0, 1, "app-dn-dialog-close-button", [], null, null, null, jl.b, jl.a)), n["\u0275did"](104, 114688, null, 0, Xl.a, [ft.a], {
                    dialog: [0, "dialog"]
                }, null), (t()(), n["\u0275eld"](105, 0, null, null, 6, "dn-dialog", [
                    ["class", "dn-dialog-background"],
                    ["id", "share"]
                ], null, null, null, El.b, El.a)), n["\u0275did"](106, 245760, null, 0, Vl.a, [ft.a, n.ElementRef], {
                    id: [0, "id"]
                }, null), (t()(), n["\u0275eld"](107, 0, null, 0, 2, "div", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (t()(), n["\u0275and"](16777216, null, null, 1, null, _s)), n["\u0275did"](109, 16384, null, 0, f.NgIf, [n.ViewContainerRef, n.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), n["\u0275eld"](110, 0, null, 0, 1, "app-dn-dialog-close-button", [], null, null, null, jl.b, jl.a)), n["\u0275did"](111, 114688, null, 0, Xl.a, [ft.a], {
                    dialog: [0, "dialog"]
                }, null)], function(t, e) {
                    var i = e.component,
                        n = t(e, 4, 0, i.screenSize === i.screenType.XXSmall, i.screenSize === i.screenType.XSmall, i.screenSize === i.screenType.Small, i.screenSize === i.screenType.Medium, i.screenSize === i.screenType.Large);
                    t(e, 3, 0, "border-warp", n), t(e, 6, 0, !i.mediaKey), t(e, 8, 0, i.mediaKey);
                    var l = t(e, 11, 0, i.screenSize === i.screenType.XXSmall, i.screenSize === i.screenType.XSmall, i.screenSize === i.screenType.Small, i.screenSize === i.screenType.Medium, i.screenSize === i.screenType.Large);
                    t(e, 10, 0, "container v-page v-page-content boxed d-flex", l), t(e, 13, 0, i.screenSize !== i.screenType.Small), t(e, 16, 0, i.video), t(e, 18, 0, !i.mediaKey), t(e, 20, 0, i.mediaKey), t(e, 22, 0, i.video && i.video.summary), t(e, 24, 0, i.video && (null == i.video.languages ? null : i.video.languages.length)), t(e, 27, 0, i.video && i.video.playlist.guest), t(e, 29, 0, i.video && (null == i.video.playlist.vip ? null : i.video.playlist.vip.medias.length)), t(e, 31, 0, i.video && ("movie" === i.video.category || 2 == i.cinema)), t(e, 33, 0, i.video), t(e, 36, 0, !i.isAdult && i.screenSize < i.screenType.Medium && i.video && "movie" !== i.video.category && "tv-series" !== i.video.category), t(e, 38, 0, !i.isAdult && i.screenSize < i.screenType.Medium && i.video && "tv-series" === i.video.category), t(e, 40, 0, i.video && i.screenSize === i.screenType.Small), t(e, 42, 0), t(e, 45, 0), t(e, 47, 0, "purchase-required"), t(e, 49, 0, i.purchasing), t(e, 51, 0, 4), t(e, 54, 0), t(e, 63, 0, "purchase-required"), t(e, 65, 0, "purchase-required"), t(e, 67, 0, "purchase-success"), t(e, 69, 0), t(e, 72, 0), t(e, 74, 0, "purchase-success"), t(e, 76, 0, "media-unavailable"), t(e, 78, 0, 5), t(e, 88, 0, "media-unavailable"), t(e, 90, 0, "media-unavailable"), t(e, 92, 0, "vip-only"), t(e, 94, 0, 4), t(e, 102, 0, "vip-only"), t(e, 104, 0, "vip-only"), t(e, 106, 0, "share"), t(e, 109, 0, i.video), t(e, 111, 0, "share")
                }, null)
            }

            function Hs(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 4, "app-index", [], null, [
                    ["window", "beforeunload"]
                ], function(t, e, i) {
                    var l = !0;
                    return "window:beforeunload" === e && (l = !1 !== n["\u0275nov"](t, 4).beforeUnload() && l), l
                }, zs, us)), n["\u0275prd"](512, null, T, T, [y.a, x.a, C.a, w.a, k.a, S.a, M.a]), n["\u0275prd"](512, null, es, es, []), n["\u0275prd"](512, null, ns, ns, [is.a]), n["\u0275did"](4, 245760, null, 0, rs, [T, es, O.o, O.a, rl.Title, ft.a, g.b, mt.a, Vn.b, os.a, vl.a, pn.a, ql.a, f.DOCUMENT, Xi.a, f.Location, x.a, C.a, M.a, ns, is.a, al.a], null, null)], function(t, e) {
                    t(e, 4, 0)
                }, null)
            }
            var Gs = n["\u0275ccf"]("app-index", rs, Hs, {
                    vgFor: "vgFor"
                }, {}, []),
                Ws = i("gIcY"),
                Ys = i("gQZO"),
                js = i("6xUE"),
                Xs = i("Mb2U"),
                Us = i("a87Y"),
                Ks = function() {
                    function t() {
                        this.scripts = {
                            ckplayer: {
                                loaded: !1,
                                src: "./assets/lib/_player/ckplayer.js"
                            }
                        }
                    }
                    return t.prototype.load = function() {
                        for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                        var n = e.map(function(e) {
                            return t.loadScript(e)
                        });
                        return Promise.all(n)
                    }, t.prototype.loadScript = function(t) {
                        var e = this;
                        return new Promise(function(i, n) {
                            if (e.scripts[t].loaded) i({
                                script: t,
                                loaded: !0,
                                status: "Already Loaded"
                            });
                            else {
                                var l = document.createElement("script");
                                l.type = "text/javascript", l.src = e.scripts[t].src, l.onload = function() {
                                    e.scripts[t].loaded = !0, i({
                                        script: t,
                                        loaded: !0,
                                        status: "Loaded"
                                    })
                                }, l.onerror = function(e) {
                                    return n({
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
                qs = i("KX97"),
                Zs = i("RqDB"),
                Qs = i("8eqO"),
                Js = i("beoP"),
                $s = i("bse0"),
                ta = i("XimB"),
                ea = i("jmij"),
                ia = i("2zRG"),
                na = i("Ybe3"),
                la = i("ypMf"),
                sa = i("U+g8"),
                aa = i("9oGu"),
                oa = i("1STb"),
                ra = i("AKFx"),
                ua = i("2KqO"),
                ha = i("RGtq"),
                da = i("iWjc"),
                ca = {
                    preloadScripts: ["ckplayer"]
                },
                pa = function() {
                    return function() {}
                }(),
                ga = function() {
                    return function() {}
                }(),
                fa = function() {
                    return function() {}
                }(),
                ma = function() {
                    return function() {}
                }(),
                va = i("Ttb/"),
                ba = i("zKC0"),
                ya = i("cxvS"),
                xa = i("18J0");
            i.d(e, "VideoModuleNgFactory", function() {
                return Ca
            });
            var Ca = n["\u0275cmf"](l, [], function(t) {
                return n["\u0275mod"]([n["\u0275mpd"](512, n.ComponentFactoryResolver, n["\u0275CodegenComponentFactoryResolver"], [
                    [8, [s.a, a.a, o.a, r.a, u.a, h.a, Gs]],
                    [3, n.ComponentFactoryResolver], n.NgModuleRef
                ]), n["\u0275mpd"](4608, f.NgLocalization, f.NgLocaleLocalization, [n.LOCALE_ID, [2, f["\u0275angular_packages_common_common_a"]]]), n["\u0275mpd"](4608, Ws.x, Ws.x, []), n["\u0275mpd"](4608, Ws.e, Ws.e, []), n["\u0275mpd"](4608, Ys.a, Ys.a, []), n["\u0275mpd"](4608, il.a, il.a, []), n["\u0275mpd"](4608, Pt.a, Pt.a, []), n["\u0275mpd"](4608, Wt.a, Wt.a, []), n["\u0275mpd"](4608, js.a, js.a, []), n["\u0275mpd"](4608, Nt.a, Nt.a, []), n["\u0275mpd"](5120, Vn.b, Vn.a, [
                    [3, Vn.b]
                ]), n["\u0275mpd"](4608, Bn.a, Bn.a, []), n["\u0275mpd"](4608, nl.a, nl.a, []), n["\u0275mpd"](4608, Xs.a, Xs.a, []), n["\u0275mpd"](4608, Us.a, Us.a, [w.a, k.a]), n["\u0275mpd"](4608, Ks, Ks, []), n["\u0275mpd"](4608, qs.DragulaService, qs.DragulaService, []), n["\u0275mpd"](4608, Zs.SortablejsService, Zs.SortablejsService, []), n["\u0275mpd"](4608, Qs.a, Qs.a, []), n["\u0275mpd"](4608, Js.a, Js.a, [w.a, Xs.a, k.a]), n["\u0275mpd"](1073742336, f.CommonModule, f.CommonModule, []), n["\u0275mpd"](1073742336, Ws.v, Ws.v, []), n["\u0275mpd"](1073742336, Ws.j, Ws.j, []), n["\u0275mpd"](1073742336, Ws.r, Ws.r, []), n["\u0275mpd"](1073742336, O.r, O.r, [
                    [2, O.x],
                    [2, O.o]
                ]), n["\u0275mpd"](1073742336, $s.b, $s.b, []), n["\u0275mpd"](1073742336, ta.LazyLoadImagesModule, ta.LazyLoadImagesModule, []), n["\u0275mpd"](1073742336, ea.a, ea.a, []), n["\u0275mpd"](1073742336, ia.a, ia.a, []), n["\u0275mpd"](1073742336, na.a, na.a, []), n["\u0275mpd"](1073742336, la.a, la.a, []), n["\u0275mpd"](1073742336, sa.a, sa.a, []), n["\u0275mpd"](1073742336, qt.a, qt.a, []), n["\u0275mpd"](1073742336, aa.a, aa.a, []), n["\u0275mpd"](1073742336, oa.a, oa.a, []), n["\u0275mpd"](1073742336, ra.a, ra.a, []), n["\u0275mpd"](1073742336, ua.a, ua.a, []), n["\u0275mpd"](1073742336, ha.a, ha.a, []), n["\u0275mpd"](1073742336, da.a, da.a, []), n["\u0275mpd"](1073742336, pa, pa, []), n["\u0275mpd"](1073742336, ga, ga, []), n["\u0275mpd"](1073742336, fa, fa, []), n["\u0275mpd"](1073742336, ma, ma, []), n["\u0275mpd"](1073742336, va.DragulaModule, va.DragulaModule, []), n["\u0275mpd"](1073742336, zn.b, zn.b, []), n["\u0275mpd"](1073742336, ba.SortablejsModule, ba.SortablejsModule, []), n["\u0275mpd"](1073742336, ya.a, ya.a, []), n["\u0275mpd"](1073742336, xa.a, xa.a, []), n["\u0275mpd"](1073742336, l, l, []), n["\u0275mpd"](256, $s.a, da.b, []), n["\u0275mpd"](1024, O.m, function() {
                    return [
                        [{
                            path: "**",
                            component: rs,
                            resolve: {
                                preloadScripts: Ks
                            },
                            data: ca
                        }]
                    ]
                }, [])])
            })
        }
    }
]);