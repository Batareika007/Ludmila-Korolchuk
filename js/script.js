// alert("hello");    

// ----------------   swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 32,
    slidesPerView: 4,
    slidesPerGroup: 4,
    // autoHeight:true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets:true,
        // dynamicMainBullets:1,
    },
    breakpoints: {
        // when window width is >= 320px
        110: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            //   spaceBetween: 20
        },
        // when window width is >= 480px
        540: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            //   spaceBetween: 30
        },
        // when window width is >= 640px
        840: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            //   spaceBetween: 40
        },
        1100: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            //   spaceBetween: 40
        }
    }

});

// ------------------- hide header on scroll down

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-128px";
    }
    prevScrollpos = currentScrollPos;
}

// ------------------  accordion


$(document).ready(function () {
    $('.accordion__box').click(function () {
        $(this).toggleClass('active').siblings().removeClass('active');

    });
});


    // form make phone number 

    /* maskinput.js */

    /*

    Copyright (c) 2021 - Alexei - https://codepen.io/tem_pool/pen/ExKEMKr

    Permission is hereby granted, free of charge, to any person 
    obtaining a copy of this software and associated documentation 
    files (the "Software"), to deal in the Software without restriction,
     including without limitation the rights to use, copy, modify, 
    merge, publish, distribute, sublicense, and/or sell copies of 
    the Software, and to permit persons to whom the Software is 
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall 
    be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
    DEALINGS IN THE SOFTWARE.

    */
    ! function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    }(function (a) {
        var b, c = navigator.userAgent,
            d = /iphone/i.test(c),
            e = /chrome/i.test(c),
            f = /android/i.test(c);
        a.mask = {
                definitions: {
                    9: "[0-9]",
                    a: "[A-Za-z]",
                    "*": "[A-Za-z0-9]"
                },
                autoclear: !0,
                dataName: "rawMaskFn",
                placeholder: "_"
            },
            a.fn.extend({
                caret: function (a, b) {
                    var c;
                    if (0 !== this.length && !this.is(":hidden"))
                        return "number" == typeof a ? (b = "number" == typeof b ? b : a,
                            this.each(function () {
                                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(),
                                    c.collapse(!0),
                                    c.moveEnd("character", b),
                                    c.moveStart("character", a),
                                    c.select())
                            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart,
                            b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(),
                            a = 0 - c.duplicate().moveStart("character", -1e5),
                            b = a + c.text.length), {
                            begin: a,
                            end: b
                        })
                },
                unmask: function () {
                    return this.trigger("unmask")
                },
                mask: function (c, g) {
                    var h, i, j, k, l, m, n, o;
                    if (!c && this.length > 0) {
                        h = a(this[0]);
                        var p = h.data(a.mask.dataName);
                        return p ? p() : void 0
                    }
                    return g = a.extend({
                            autoclear: a.mask.autoclear,
                            placeholder: a.mask.placeholder,
                            completed: null
                        }, g),
                        i = a.mask.definitions,
                        j = [],
                        k = n = c.length,
                        l = null,
                        a.each(c.split(""), function (a, b) {
                            "?" == b ? (n--,
                                k = a) : i[b] ? (j.push(new RegExp(i[b])),
                                null === l && (l = j.length - 1),
                                k > a && (m = j.length - 1)) : j.push(null)
                        }),
                        this.trigger("unmask").each(function () {
                            function h() {
                                if (g.completed) {
                                    for (var a = l; m >= a; a++)
                                        if (j[a] && C[a] === p(a))
                                            return;
                                    g.completed.call(B)
                                }
                            }

                            function p(a) {
                                return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                            }

                            function q(a) {
                                for (; ++a < n && !j[a];)
                                ;
                                return a
                            }

                            function r(a) {
                                for (; --a >= 0 && !j[a];)
                                ;
                                return a
                            }

                            function s(a, b) {
                                var c, d;
                                if (!(0 > a)) {
                                    for (c = a,
                                        d = q(b); n > c; c++)
                                        if (j[c]) {
                                            if (!(n > d && j[c].test(C[d])))
                                                break;
                                            C[c] = C[d],
                                                C[d] = p(d),
                                                d = q(d)
                                        }
                                    z(),
                                        B.caret(Math.max(l, a))
                                }
                            }

                            function t(a) {
                                var b, c, d, e;
                                for (b = a,
                                    c = p(a); n > b; b++)
                                    if (j[b]) {
                                        if (d = q(b),
                                            e = C[b],
                                            C[b] = c,
                                            !(n > d && j[d].test(e)))
                                            break;
                                        c = e
                                    }
                            }

                            function u() {
                                var a = B.val(),
                                    b = B.caret();
                                if (o && o.length && o.length > a.length) {
                                    for (A(!0); b.begin > 0 && !j[b.begin - 1];)
                                        b.begin--;
                                    if (0 === b.begin)
                                        for (; b.begin < l && !j[b.begin];)
                                            b.begin++;
                                    B.caret(b.begin, b.begin)
                                } else {
                                    for (A(!0); b.begin < n && !j[b.begin];)
                                        b.begin++;
                                    B.caret(b.begin, b.begin)
                                }
                                h()
                            }

                            function v() {
                                A(),
                                    B.val() != E && B.change()
                            }

                            function w(a) {
                                if (!B.prop("readonly")) {
                                    var b, c, e, f = a.which || a.keyCode;
                                    o = B.val(),
                                        8 === f || 46 === f || d && 127 === f ? (b = B.caret(),
                                            c = b.begin,
                                            e = b.end,
                                            e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1),
                                                e = 46 === f ? q(e) : e),
                                            y(c, e),
                                            s(c, e - 1),
                                            a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E),
                                            B.caret(0, A()),
                                            a.preventDefault())
                                }
                            }

                            function x(b) {
                                if (!B.prop("readonly")) {
                                    var c, d, e, g = b.which || b.keyCode,
                                        i = B.caret();
                                    if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                                        if (i.end - i.begin !== 0 && (y(i.begin, i.end),
                                                s(i.begin, i.end - 1)),
                                            c = q(i.begin - 1),
                                            n > c && (d = String.fromCharCode(g),
                                                j[c].test(d))) {
                                            if (t(c),
                                                C[c] = d,
                                                z(),
                                                e = q(c),
                                                f) {
                                                var k = function () {
                                                    a.proxy(a.fn.caret, B, e)()
                                                };
                                                setTimeout(k, 0)
                                            } else
                                                B.caret(e);
                                            i.begin <= m && h()
                                        }
                                        b.preventDefault()
                                    }
                                }
                            }

                            function y(a, b) {
                                var c;
                                for (c = a; b > c && n > c; c++)
                                    j[c] && (C[c] = p(c))
                            }

                            function z() {
                                B.val(C.join(""))
                            }

                            function A(a) {
                                var b, c, d, e = B.val(),
                                    f = -1;
                                for (b = 0,
                                    d = 0; n > b; b++)
                                    if (j[b]) {
                                        for (C[b] = p(b); d++ < e.length;)
                                            if (c = e.charAt(d - 1),
                                                j[b].test(c)) {
                                                C[b] = c,
                                                    f = b;
                                                break
                                            }
                                        if (d > e.length) {
                                            y(b + 1, n);
                                            break
                                        }
                                    } else
                                        C[b] === e.charAt(d) && d++,
                                        k > b && (f = b);
                                return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""),
                                        y(0, n)) : z() : (z(),
                                        B.val(B.val().substring(0, f + 1))),
                                    k ? b : l
                            }
                            var B = a(this),
                                C = a.map(c.split(""), function (a, b) {
                                    return "?" != a ? i[a] ? p(b) : a : void 0
                                }),
                                D = C.join(""),
                                E = B.val();
                            B.data(a.mask.dataName, function () {
                                    return a.map(C, function (a, b) {
                                        return j[b] && a != p(b) ? a : null
                                    }).join("")
                                }),
                                B.one("unmask", function () {
                                    B.off(".mask").removeData(a.mask.dataName)
                                }).on("focus.mask", function () {
                                    if (!B.prop("readonly")) {
                                        clearTimeout(b);
                                        var a;
                                        E = B.val(),
                                            a = A(),
                                            b = setTimeout(function () {
                                                B.get(0) === document.activeElement && (z(),
                                                    a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
                                            }, 10)
                                    }
                                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
                                    B.prop("readonly") || setTimeout(function () {
                                        var a = A(!0);
                                        B.caret(a),
                                            h()
                                    }, 0)
                                }),
                                e && f && B.off("input.mask").on("input.mask", u),
                                A()
                        })
                }
            })
    });

$(document).ready(function () {
    $("#phone-input").mask("+38(099) 999-99-99", {
        autoclear: false
    });
});