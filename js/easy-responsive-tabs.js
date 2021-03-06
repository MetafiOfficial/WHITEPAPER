! function(t) {
    t.fn.extend({
        easyResponsiveTabs: function(a) {
            var e = a = t.extend({
                    type: "default",
                    width: "auto",
                    fit: !0,
                    closed: !1,
                    activate: function() {}
                }, a),
                s = e.type,
                i = e.fit,
                r = e.width,
                n = "vertical",
                c = "accordion";
            t(this).bind("tabactivate", function(t, e) {
                "function" == typeof a.activate && a.activate.call(e, t)
            }), this.each(function() {
                var e, o = t(this),
                    d = o.find("ul.resp-tabs-list");
                o.find("ul.resp-tabs-list li").addClass("resp-tab-item"), o.css({
                        display: "block",
                        width: r
                    }), o.find(".resp-tabs-container > div").addClass("resp-tab-content"),
                    function() {
                        s == n && o.addClass("resp-vtabs");
                        1 == i && o.css({
                            width: "100%",
                            margin: "0px"
                        });
                        s == c && (o.addClass("resp-easy-accordion"), o.find(".resp-tabs-list").css("display", "none"))
                    }(), o.find(".resp-tab-content").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");
                var l = 0;
                o.find(".resp-accordion").each(function() {
                    e = t(this);
                    var a = o.find(".resp-tab-item:eq(" + l + ")").html();
                    o.find(".resp-accordion:eq(" + l + ")").append(a), e.attr("aria-controls", "tab_item-" + l), l++
                });
                var p = 0;
                o.find(".resp-tab-item").each(function() {
                    $tabItem = t(this), $tabItem.attr("aria-controls", "tab_item-" + p), $tabItem.attr("role", "tab"), !0 === a.closed || "accordion" === a.closed && !d.is(":visible") || "tabs" === a.closed && d.is(":visible") || (o.find(".resp-tab-item").first().addClass("resp-tab-active"), o.find(".resp-accordion").first().addClass("resp-tab-active"), o.find(".resp-tab-content").first().addClass("resp-tab-content-active").attr("style", "display:block"));
                    var e = 0;
                    o.find(".resp-tab-content").each(function() {
                        t(this).attr("aria-labelledby", "tab_item-" + e), e++
                    }), p++
                }), o.find("[role=tab]").each(function() {
                    var a = t(this);
                    a.click(function() {
                        var e = a.attr("aria-controls");
                        if (a.hasClass("resp-accordion") && a.hasClass("resp-tab-active")) return o.find(".resp-tab-content-active").slideUp("", function() {
                            t(this).addClass("resp-accordion-closed")
                        }), a.removeClass("resp-tab-active"), !1;
                        !a.hasClass("resp-tab-active") && a.hasClass("resp-accordion") ? (o.find(".resp-tab-active").removeClass("resp-tab-active"), o.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), o.find("[aria-controls=" + e + "]").addClass("resp-tab-active"), o.find(".resp-tab-content[aria-labelledby = " + e + "]").slideDown().addClass("resp-tab-content-active")) : (o.find(".resp-tab-active").removeClass("resp-tab-active"), o.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), o.find("[aria-controls=" + e + "]").addClass("resp-tab-active"), o.find(".resp-tab-content[aria-labelledby = " + e + "]").addClass("resp-tab-content-active").attr("style", "display:block")), a.trigger("tabactivate", a)
                    }), t(window).resize(function() {
                        o.find(".resp-accordion-closed").removeAttr("style")
                    })
                })
            })
        }
    })
}(jQuery);