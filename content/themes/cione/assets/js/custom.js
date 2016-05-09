(function($){
    function onReady(){
        function addSubscribe(){
            var subscriberUri='https://www.cione.vn/api/v1/apps/subscribers';
            $.ajax({
                method:'post',
                url:subscriberUri,
                data:{email:$('#txtEmail').val()},
                complete:function(){
                    $('#txtEmail').val('');
                }
            });
        }
        $('#subscribe').submit(function(e){
            e.preventDefault();
           addSubscribe(); 
        });
        $('.nav-title').html($('.entry-header').find('h1').html());
        buildHeading();
    }
    function buildHeading(){
        var $first=$('.entry-content >h2:first');
        var $nav= $('.q-navigator');
        var $widget=$('.navigator-widget');
        $widget.hide();
        $nav.append(getNavigatorNode($first));
        $first.siblings('h1,h2,h3,h4,h5,h6').each(function(idx,item){
             var $list = getNavigatorNode(item);
            
            $nav.append($list);
        });
        $widget.show();
        setTimeout(function(){
            $('body').scrollspy({ target:'#q-navigator' });    
        },2000);
        
    }
    function getNavigatorNode(target){
        var nodeName='';
        if(target.push && target[0] && target[0].nodeName){
            nodeName=target[0].nodeName.toLowerCase();
        }else if(target.nodeName){
            nodeName=target.nodeName.toLowerCase();
        }
        return $(['<li role="navigation" class="',nodeName,'"', '><a href="#',$(target).attr('id'),'">',$(target).text(),'</a>','</li>'].join(''));
    }
    $(document).ready(onReady);
})($);

$(document).ready(function(){
    var sHeight = $('.contentnbt').outerHeight();
    $('.sidebarnbt').animate({'height': sHeight}, 0, function(){
      $(".sticky-sidebar").pin({
           containerSelector: ".sidebar-primarynbt",
              minWidth: 940
        });
    });
});
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
      }
      return "";
  }
  function setCookie(cname, cvalue, exmin) {
        var d = new Date();
        // d.setTime(d.getTime() + (exdays*24*60*60*1000));
        d.setTime(d.getTime() + (exmin*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    
$(function(){
    var d = new Date();
    var expire = 15;
    var c = getCookie('corner');
    var close = 1;
    var scrollHeight = 1000;
    var e = $('.register-corner');
    var btn = $('.corner-btn');
    var closeBtn = $('.close');
    var eWidth = e.outerWidth();
    if(c == 1) {
      btn.css('display', 'block');
      close = 0;
    }
    e.css({'right': -eWidth, 'bottom': 0});
    btn.click(function(){
      if(close == 0) {
        e.stop().animate({'right': 0});
        btn.css('display', 'none');
      }
    });
    closeBtn.click(function(){
      e.stop().animate({'right': -eWidth});
      btn.css('display', 'block');
      if(c == "") {
        setCookie('corner', '1', 30);
      }
    });

    $(window).scroll(function(){
      var h = $(window).scrollTop();
      if(h >= scrollHeight && close == 1 && !e.hasClass('shown')) {
        if(c != 1) {
          e.addClass('shown');
          e.stop().animate({'right': 0});
          btn.css('display', 'none');
          close = 0;
        }
      }
    });
});

(function(e){"use strict";e.fn.pin=function(t){var n=0,r=[],i=false,s=e(window);t=t||{};var o=function(){for(var n=0,o=r.length;n<o;n++){var u=r[n];if(t.minWidth&&s.width()<=t.minWidth){if(u.parent().is(".pin-wrapper")){u.unwrap()}u.css({width:"",left:"",top:"",position:""});if(t.activeClass){u.removeClass(t.activeClass)}i=true;continue}else{i=false}var a=t.containerSelector?u.closest(t.containerSelector):e(document.body);var f=u.offset();var l=a.offset();var c=u.offsetParent().offset();if(!u.parent().is(".pin-wrapper")){u.wrap("<div class='pin-wrapper'>")}var h=e.extend({top:0,bottom:0},t.padding||{});u.data("pin",{pad:h,from:(t.containerSelector?l.top:f.top)-h.top,to:l.top+a.height()-u.outerHeight()-h.bottom,end:l.top+a.height(),parentTop:c.top});u.css({width:u.outerWidth()});u.parent().css("height",u.outerHeight())}};var u=function(){if(i){return}n=s.scrollTop();var o=[];for(var u=0,a=r.length;u<a;u++){var f=e(r[u]),l=f.data("pin");if(!l){continue}o.push(f);var c=l.from-l.pad.bottom,h=l.to-l.pad.top;if(c+f.outerHeight()>l.end){f.css("position","");continue}if(c<n&&h>n){!(f.css("position")=="fixed")&&f.css({left:f.offset().left,top:l.pad.top}).css("position","fixed");if(t.activeClass){f.addClass(t.activeClass)}}else if(n>=h){f.css({left:"",top:h-l.parentTop+l.pad.top}).css("position","absolute");if(t.activeClass){f.addClass(t.activeClass)}}else{f.css({position:"",top:"",left:""});if(t.activeClass){f.removeClass(t.activeClass)}}}r=o};var a=function(){o();u()};this.each(function(){var t=e(this),n=e(this).data("pin")||{};if(n&&n.update){return}r.push(t);e("img",this).one("load",o);n.update=a;e(this).data("pin",n)});s.scroll(u);s.resize(function(){o()});o();s.load(a);return this}})(jQuery)

!function(t, e, o) {
    t.fn.cornerSlider = function(i) {
        function n(t, o, i) {
            var n, c, i = parseInt(i);
            if (i = i > 0 ? i : null) {
                c = "" != h.cookieDomain ? "; domain=." + h.cookieDomain : "";
                var s = new Date;
                s.setTime(s.getTime() + 60 * i * 1e3), n = "; expires=" + s.toGMTString(), e.cookie = t + "=" + o + n + c + "; path=/"
            }
        }

        function c(t) {
            var o, i, n;
            return e.cookie.length < 1 ? !1 : (o = e.cookie.indexOf(t + "="), 0 > o ? !1 : (o = o + t.length + 1, i = e.cookie.indexOf(";", o), -1 == i && (i = e.cookie.length), n = unescape(e.cookie.substring(o, i)), n.length > 0))
        }

        function s() {
            return u ? !1 : c(h.cookieName) ? !1 : !0
        }

        function f(t) {
            t.removeClass("hidden").addClass("shown").stop(), "right" == h.directionEffect ? t.animate({
                right: h.right
            }, h.speedEffect, function() {}) : "bottom" == m ? t.animate({
                bottom: h.bottom
            }, h.speedEffect, function() {}) : t.animate({
                left: h.left
            }, h.speedEffect, function() {}), h.onShow.call(t)
        }

        function r(t, e, o) {
            t.stop(), "right" == h.directionEffect ? t.animate({
                right: -e
            }, h.speedEffect, function() {
                t.removeClass("shown").addClass("hidden")
            }) : "bottom" == m ? (height = g, t.animate({
                bottom: -height
            }, h.speedEffect, function() {
                t.removeClass("shown").addClass("hidden")
            })) : t.animate({
                left: -e
            }, h.speedEffect, function() {
                t.removeClass("shown").addClass("hidden")
            }), o ? h.onClose.call(t) : h.onHide.call(t)
        }

        function a() {
            l.find(".close").on("click", function() {
                u = !0, r(l, d, !0), n(h.cookieName, h.cookieValue, h.cookieMinutesToExpiry)
            })
        }
        var h = t.extend({
                showAtScrollingHeight: 1300,
                elemToPresent: "#presentSlider",
                directionEffect: "right",
                speedEffect: 300,
                bottom: 6,
                right: 6,
                left: 6,
                top: 6,
                cookieName: "cornerSliderHide",
                cookieValue: "hidden",
                cookieDomain: "",
                cookieMinutesToExpiry: 15,
                onShow: function() {},
                onHide: function() {},
                onClose: function() {}
            }, i),
            l = t(this),
            d = l.outerWidth(),
            g = l.outerHeight(),
            m = "right",
            u = !1;
        t(o).scroll(function() {
                var e = parseInt(t(o).scrollTop()),
                    i = parseInt(o.innerHeight),
                    n = e + i,
                    c = 0 == t(h.elemToPresent).length ? h.showAtScrollingHeight : parseInt(t(h.elemToPresent).offset().top);
                n > c ? l.hasClass("hidden") && s(h.cookieName) && f(l) : l.hasClass("shown") && r(l, d, !1)
            }),
            function() {
                width = d, height = g, m = "left" == h.directionEffect || "right" == h.directionEffect ? h.directionEffect : "bottom", t("<div class='close'><i class='icon-cancel-circled'></i></div>", {
                    text: "",
                    "class": "close"
                }).prependTo(l), a(), l.addClass("hidden"), l.css({
                    bottom: h.bottom
                }), "left" == m ? l.css({
                    left: -width,
                    right: "auto"
                }) : "right" == m ? l.css({
                    right: -width,
                    left: "auto"
                }) : ("bottom" == m && l.css({
                    bottom: -height
                }), "bottom left" == h.directionEffect ? l.css({
                    left: h.left,
                    right: "auto"
                }) : "bottom center" == h.directionEffect ? l.css({
                    "margin-right": "auto",
                    "margin-left": "auto",
                    right: 0,
                    left: 0
                }) : "bottom right" == h.directionEffect ? l.css({
                    right: h.right,
                    left: "auto"
                }) : l.css({
                    right: h.right,
                    left: "auto"
                }))
            }()
    }
}(jQuery, document, window);
