(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e4cdad9"],{"02c2":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-ended",on:{click:t.click}},[t._v(t._s(t.info))])},i=[],c={name:"LiveEnded",props:["info"],methods:{click:function(){this.$emit("clicked")}}},a=c,r=(n("b62a"),n("2877")),o=Object(r["a"])(a,s,i,!1,null,"2c585cec",null);e["a"]=o.exports},"02f4":function(t,e,n){var s=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var c,a,r=String(i(e)),o=s(n),l=r.length;return o<0||o>=l?t?"":void 0:(c=r.charCodeAt(o),c<55296||c>56319||o+1===l||(a=r.charCodeAt(o+1))<56320||a>57343?t?r.charAt(o):c:t?r.slice(o,o+2):a-56320+(c-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var s=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?s(t,e).length:1)}},"03c8":function(t,e,n){},"0b81":function(t,e,n){},"0bfb":function(t,e,n){"use strict";var s=n("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0c6e":function(t,e,n){"use strict";var s=n("ec44"),i=n.n(s);i.a},"14d0":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-user-info",on:{click:t.toUserIndex}},[n("div",{staticClass:"user-name"},[t._v(t._s(t.userInfo.name))]),n("img",{staticClass:"head-pic",attrs:{src:t.userInfo.userpic}})])},i=[],c={name:"LiveBurrage",props:["userInfo"],methods:{toUserIndex:function(){this.$emit("toUserIndex",this.userInfo.userid)}}},a=c,r=(n("6757"),n("2877")),o=Object(r["a"])(a,s,i,!1,null,null,null);e["a"]=o.exports},"214f":function(t,e,n){"use strict";n("b0c5");var s=n("2aba"),i=n("32e9"),c=n("79e5"),a=n("be13"),r=n("2b4c"),o=n("520a"),l=r("species"),u=!c(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var v=r(t),p=!c(function(){var e={};return e[v]=function(){return 7},7!=""[t](e)}),d=p?!c(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[v](""),!e}):void 0;if(!p||!d||"replace"===t&&!u||"split"===t&&!f){var h=/./[v],m=n(a,v,""[t],function(t,e,n,s,i){return e.exec===o?p&&!i?{done:!0,value:h.call(e,n,s)}:{done:!0,value:t.call(n,e,s)}:{done:!1}}),_=m[0],b=m[1];s(String.prototype,t,_),i(RegExp.prototype,v,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},2639:function(t,e,n){},2651:function(t,e,n){"use strict";var s=n("0b81"),i=n.n(s);i.a},"2c47":function(t,e,n){"use strict";var s=n("6c82"),i=n.n(s);i.a},"2f21":function(t,e,n){"use strict";var s=n("79e5");t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},3279:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-burrage"},[n("div",{ref:"scroller",staticClass:"content"},t._l(t.list,function(e,s){return n("div",{key:s,staticClass:"list"},[n("a",{attrs:{href:"http://down.ipaychat.com/echat.apk",download:"http://down.ipaychat.com/echat.apk"}},[t._v("游客"+t._s(e))]),t._v("："),n("span",{staticClass:"info"},[t._v("来了")])])}),0)])},i=[],c={name:"LiveBurrage",data:function(){return{list:[9527,8341]}},mounted:function(){var t=this,e=function e(){var n=Math.floor(1e4*Math.random());t.list.length>10&&t.list.shift(),t.list.push(n),setTimeout(e,n)};setTimeout(e,Math.floor(1e4*Math.random()))}},a=c,r=(n("e2af"),n("2877")),o=Object(r["a"])(a,s,i,!1,null,null,null);e["a"]=o.exports},"37ed":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont",on:{click:t.clicked}},[t._v("")])},i=[],c={name:"Play",methods:{clicked:function(){this.$emit("clicked")}}},a=c,r=n("2877"),o=Object(r["a"])(a,s,i,!1,null,null,null);e["a"]=o.exports},"3d62":function(t,e,n){},4917:function(t,e,n){"use strict";var s=n("cb7c"),i=n("9def"),c=n("0390"),a=n("5f1b");n("214f")("match",1,function(t,e,n,r){return[function(n){var s=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,s):new RegExp(n)[e](String(s))},function(t){var e=r(n,t,this);if(e.done)return e.value;var o=s(t),l=String(this);if(!o.global)return a(o,l);var u=o.unicode;o.lastIndex=0;var f,v=[],p=0;while(null!==(f=a(o,l))){var d=String(f[0]);v[p]=d,""===d&&(o.lastIndex=c(l,i(o.lastIndex),u)),p++}return 0===p?null:v}]})},"520a":function(t,e,n){"use strict";var s=n("0bfb"),i=RegExp.prototype.exec,c=String.prototype.replace,a=i,r="lastIndex",o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[r]||0!==e[r]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(a=function(t){var e,n,a,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",s.call(f))),o&&(e=f[r]),a=i.call(f,t),o&&a&&(f[r]=f.global?a.index+a[0].length:e),l&&a&&a.length>1&&c.call(a[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)}),a}),t.exports=a},"55dd":function(t,e,n){"use strict";var s=n("5ca1"),i=n("d8e8"),c=n("4bf8"),a=n("79e5"),r=[].sort,o=[1,2,3];s(s.P+s.F*(a(function(){o.sort(void 0)})||!a(function(){o.sort(null)})||!n("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(c(this)):r.call(c(this),i(t))}})},5994:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont"},[t._v("")])},i=[],c={name:"Femail"},a=c,r=n("2877"),o=Object(r["a"])(a,s,i,!1,null,null,null);e["a"]=o.exports},"5e82":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-chat"},[n("a",{on:{click:t.toAbout}},[n("Comments",{staticClass:"item white"}),n("Leter",{staticClass:"item white"}),n("GiftColor",{staticClass:"item"})],1),n("a",{staticClass:"chat-with",on:{click:t.toAbout}},[t._v("主播邀你来聊天> ")])])},i=[],c=n("79ea"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont"},[t._v("")])},r=[],o={name:"Leter"},l=o,u=n("2877"),f=Object(u["a"])(l,a,r,!1,null,null,null),v=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont"},[t._v("")])},d=[],h={name:"GiftColor"},m=h,_=Object(u["a"])(m,p,d,!1,null,null,null),b=_.exports,C={name:"LiveChat",components:{Comments:c["a"],Leter:v,GiftColor:b},methods:{toAbout:function(){this.$router.push({name:"About"})}}},x=C,w=(n("be18"),Object(u["a"])(x,s,i,!1,null,null,null));e["a"]=w.exports},"5f1b":function(t,e,n){"use strict";var s=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},6757:function(t,e,n){"use strict";var s=n("f7c7"),i=n.n(s);i.a},"6c82":function(t,e,n){},7515:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-watcher-info-alert"},[n("Close",{staticClass:"close",on:{clicked:t.close}}),n("div",{staticClass:"head-pic center"},[n("img",{staticClass:"pic",attrs:{src:t.watcherInfo.userpic},on:{click:t.toIndex}})]),n("div",{staticClass:"name-sex-age center"},[n("span",{staticClass:"name"},[t._v(t._s(t.watcherInfo.name)+"（"+t._s(t.watcherInfoIndex)+"）")]),t.watcherInfo.sex?n("Mail",{staticClass:"mail"}):n("Femail",{staticClass:"femail"}),n("span",{staticClass:"age"},[t._v(t._s(t.watcherInfo.age)+"岁")])],1),n("div",{staticClass:"id-city center"},[t._v("富聊ID："+t._s(t.watcherInfo.userid)+" "+t._s(t.watcherInfo.city?"|":"")+" "+t._s(t.watcherInfo.city))]),n("div",{staticClass:"sign center"},[t._v(t._s(t.watcherInfo.sign))]),t.watcherInfo.lable?n("div",{staticClass:"lable center"},t._l(t.watcherInfo.lable,function(e,s){return n("span",{key:s,staticClass:"tag"},[t._v(t._s(e))])}),0):t._e(),n("div",{staticClass:"society"},[n("span",{staticClass:"focus"},[t._v("关注："+t._s(t.watcherInfo.focus))]),t._v("|\n        "),n("span",{staticClass:"fans"},[t._v("粉丝："+t._s(t.watcherInfo.fans))]),n("span",{staticClass:"send"},[t._v("送出："+t._s(t.watcherInfo.send)+"万能量")]),t._v("|\n        "),n("span",{staticClass:"featurn"},[t._v("财气值："+t._s(t.watcherInfo.featurn)+"万")])]),n("div",{staticClass:"bottom"},[n("a",{on:{click:t.toAbout}},[n("span",{staticClass:"focus"},[t._v("关注")])]),n("a",{on:{click:t.toAbout}},[n("span",{staticClass:"it"},[t._v("@TA")])]),n("a",{on:{click:t.toIndex}},[n("span",{staticClass:"index"},[t._v("主页")])])])],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont",on:{click:t.click}},[t._v("")])},a=[],r={name:"Close",methods:{click:function(){this.$emit("clicked")}}},o=r,l=n("2877"),u=Object(l["a"])(o,c,a,!1,null,null,null),f=u.exports,v=n("e628"),p=n("5994"),d={name:"LiveWatcherInfoAlert",components:{Close:f,Mail:v["a"],Femail:p["a"]},props:["watcherInfo","watcherInfoIndex"],methods:{toIndex:function(){this.$emit("toUserIndex",this.watcherInfo.userid)},close:function(){this.$emit("close")},toAbout:function(){this.$router.push({name:"About"})}}},h=d,m=(n("2c47"),Object(l["a"])(h,s,i,!1,null,"8ffd6830",null));e["a"]=m.exports},"79ea":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont"},[t._v("")])},i=[],c={name:"Comments"},a=c,r=n("2877"),o=Object(r["a"])(a,s,i,!1,null,null,null);e["a"]=o.exports},"7b75":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-info"},[n("div",{ref:"top",staticClass:"top"},[n("div",{ref:"userInfo",staticClass:"user-info"},[n("div",{staticClass:"user-pic",on:{click:t.toUserIndex}},[n("img",{staticClass:"pic",attrs:{src:t.userInfo.userpic}})]),n("div",{staticClass:"user-name",on:{click:t.toUserIndex}},[t._v(t._s(t.userInfo.name))]),n("a",{staticClass:"focus",on:{click:t.toAbout}},[t._v("关注")])]),t.liveEnded?t._e():n("div",{staticClass:"people",style:{width:t.width+"px"}},t._l(t.poepleNum,function(e,s){return n("div",{key:s,staticClass:"people-pic",style:{background:"url("+t.watcherInfo.userpic+") no-repeat center",backgroundSize:"100%"},on:{click:function(e){return t.showPeople(t.watcherInfo,s)}}},[n("div",{staticClass:"vlevel"},[t._v("V4")])])}),0)]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"id"},[t._v("富聊ID:"+t._s(t.userInfo.userid))])])])},i=[],c=n("774e"),a=n.n(c),r={name:"LiveInfo",props:["userInfo","watcherInfo","liveEnded"],data:function(){return{poepleNum:a()({length:Math.ceil(10*Math.random())}),width:0}},methods:{toUserIndex:function(){this.$emit("toUserIndex",this.userInfo.userid)},showPeople:function(t,e){this.$emit("showPeople",t,e+1)},toAbout:function(){this.$router.push({name:"About"})}},mounted:function(){var t=document.body.offsetWidth/100;this.width=this.$refs.top.offsetWidth-this.$refs.userInfo.offsetWidth-2*t-1}},o=r,l=(n("2651"),n("2877")),u=Object(l["a"])(o,s,i,!1,null,null,null);e["a"]=u.exports},"964a":function(t,e,n){"use strict";var s=n("2639"),i=n.n(s);i.a},a21f:function(t,e,n){var s=n("584a"),i=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},b0c5:function(t,e,n){"use strict";var s=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},b62a:function(t,e,n){"use strict";var s=n("03c8"),i=n.n(s);i.a},be18:function(t,e,n){"use strict";var s=n("cb2c"),i=n.n(s);i.a},cb2c:function(t,e,n){},d07c:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{ref:"mySwiper",staticClass:"live-recommend-swiper",attrs:{options:t.swiperOption},on:{slideChange:t.callback}},[n("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"}),n("swiper-slide",{staticClass:"item"},[t._l(t.recommendUserInfo["热门直播"],function(t,e){return n("UserItem",{key:e,attrs:{userInfo:t,name:"热门"}})}),n("div",{staticClass:"white"}),n("WatchMore",{attrs:{name:"热门"}})],2),n("swiper-slide",{staticClass:"item"},[t._l(t.recommendUserInfo["才艺直播"],function(t,e){return n("UserItem",{key:e,attrs:{userInfo:t,name:"才艺"}})}),n("div",{staticClass:"white"}),n("WatchMore",{attrs:{name:"才艺"}})],2)],1)},i=[],c=n("a776"),a=n("0e00"),r={name:"LiveRecommendSwiper",components:{UserItem:c["a"],WatchMore:a["a"]},props:["activeClass","name","recommendUserInfo"],data:function(){return{swiperOption:{scrollbar:{el:".swiper-scrollbar"}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{callback:function(){this.$emit("slide",this.swiper.activeIndex)}},mounted:function(){this.swiper.slideTo(this.activeClass)},watch:{activeClass:function(t,e){this.swiper.slideTo(t)}}},o=r,l=(n("964a"),n("2877")),u=Object(l["a"])(o,s,i,!1,null,"b50a76f6",null);e["a"]=u.exports},e2af:function(t,e,n){"use strict";var s=n("3d62"),i=n.n(s);i.a},e476:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"open-in-app",on:{click:t.toAbout}},[t._v("\n  APP内打开\n")])},i=[],c={name:"OpenIApp",methods:{toAbout:function(){this.$router.push({name:"About"})}}},a=c,r=(n("0c6e"),n("2877")),o=Object(r["a"])(a,s,i,!1,null,"78bbd058",null);e["a"]=o.exports},e628:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont"},[t._v("")])},i=[],c={name:"Mail"},a=c,r=n("2877"),o=Object(r["a"])(a,s,i,!1,null,null,null);e["a"]=o.exports},ec44:function(t,e,n){},f499:function(t,e,n){t.exports=n("a21f")},f7c7:function(t,e,n){}}]);