(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d96875c"],{"133b":function(t,a,e){"use strict";var n=e("e7a1"),i=RegExp.prototype.exec,s=String.prototype.replace,r=i,o="lastIndex",c=function(){var t=/a/,a=/b*/g;return i.call(t,"a"),i.call(a,"a"),0!==t[o]||0!==a[o]}(),p=void 0!==/()??/.exec("")[1],l=c||p;l&&(r=function(t){var a,e,r,l,d=this;return p&&(e=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),c&&(a=d[o]),r=i.call(d,t),c&&r&&(d[o]=d.global?r.index+r[0].length:a),p&&r&&r.length>1&&s.call(r[0],e,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),t.exports=r},2137:function(t,a,e){"use strict";var n=e("02f2"),i=RegExp.prototype.exec;t.exports=function(t,a){var e=t.exec;if("function"===typeof e){var s=e.call(t,a);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,a)}},"310e":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail"},[e("div",{attrs:{id:"map"}}),"trip"===this.data.type?e("div",{staticClass:"detail-con"},[e("p",{staticClass:"detail-con-title"},[e("span",[t._v(t._s(t.data.tripType))]),e("span",[t._v(t._s(t.data.date))])]),e("h2",[e("span",[t._v(t._s(t.data.distance))]),t._v("\n      公里\n    ")]),e("div",{staticClass:"detail-con-detail"},[e("p",[e("span",[t._v(t._s(t.data.time))]),e("br"),e("span",[t._v("总计时间")])]),e("p",[e("span",[t._v(t._s(t.data.speed))]),e("br"),e("span",[t._v("平均配速(km/h)")])]),e("p",[e("span",[t._v(t._s(t.data.Calorie))]),e("br"),e("span",[t._v("消耗能量(k)")])])]),e("p",{staticClass:"detail-con-mark"},[e("span",[t._v("备注：")]),e("span",[t._v(t._s(t.data.mark))])])]):t._e(),"traffic"===this.data.type?e("div",{staticClass:"detail-con"},[e("p",{staticClass:"detail-con-title"},[e("span",[t._v(t._s(t.data.tripType))]),e("span",[t._v(t._s(t.data.date))])]),e("div",{staticClass:"detail-con-place"},[e("span",[t._v(t._s(t.data.startPlace))]),e("svg-icon",{staticClass:"place-svg",attrs:{"icon-class":"place-right"}}),e("span",[t._v(t._s(t.data.endPlace))])],1),e("div",{staticClass:"detail-con-detail"},[e("p",[e("span",[t._v(t._s(t.data.time))]),e("br"),e("span",[t._v("出发时间")])]),e("p",[e("span",[t._v(t._s(t.data.price)+"元")]),e("br"),e("span",[t._v("行程花费(RMB)")])]),e("p",[e("span",[t._v(t._s(t.data.distance))]),e("br"),e("span",[t._v("里程(km)")])])]),e("p",{staticClass:"detail-con-mark"},[e("span",[t._v("备注：")]),e("span",[t._v(t._s(t.data.mark))])])]):t._e()])},i=[],s=(e("db3e"),e("7090")),r={name:"historyDetails",data:function(){return{map:null,isPopupShow:!0,data:{}}},mounted:function(){this.data=this.$route.params,this.initMap(),"trip"===this.data.type&&this.mapPath(),"traffic"===this.data.type&&this.searchDriving()},methods:{initMap:function(){this.map=new window.AMap.Map("map",{resizeEnable:!0,zoom:11,center:[126.56092959999998,43.920187299999995]})},mapPath:function(){var t=this,a=this.data.trajectory.slice(),e=new window.AMap.Marker({map:t.map,position:a[0],icon:"https://webapi.amap.com/images/car.png",offset:new window.AMap.Pixel(-26,-13),autoRotation:!0,angle:-90}),n=(new window.AMap.Polyline({map:t.map,path:a,showDir:!0,strokeColor:"#28F",strokeWeight:6}),new window.AMap.Polyline({map:t.map,strokeColor:"red",strokeWeight:6}));e.on("moving",(function(t){n.setPath(t.passedPath)})),t.map.setFitView(),e.moveAlong(a,200)},searchDriving:function(t){this.ToastHide("正在规划路线...");var a=this;this.map.plugin("AMap.Transfer",(function(){a.driving=new window.AMap.Transfer({map:a.map,city:"北京市",autoFitView:!0}),a.driving.search(new window.AMap.LngLat(a.data.startCode[0],a.data.startCode[1]),new window.AMap.LngLat(a.data.endCode[0],a.data.endCode[1]),(function(t,e){s["h"].hide(),console.log(t,e),"complete"===t?(console.log("绘制驾车路线完成"),a.panelListShow=!0):(console.log("获取驾车数据失败："+e),s["h"].failed("未检测到匹配路线"))}))}))},ToastHide:function(){setTimeout((function(){s["h"].hide()}),15e3)}}},o=r,c=(e("98f7"),e("4e82")),p=Object(c["a"])(o,n,i,!1,null,"e15347f8",null);a["default"]=p.exports},"6af6":function(t,a,e){"use strict";e("b3f3");var n=e("a6d5"),i=e("b8ea"),s=e("0cc1"),r=e("3038"),o=e("1277"),c=e("133b"),p=o("species"),l=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,a=t.exec;t.exec=function(){return a.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,a,e){var u=o(t),v=!s((function(){var a={};return a[u]=function(){return 7},7!=""[t](a)})),f=v?!s((function(){var a=!1,e=/a/;return e.exec=function(){return a=!0,null},"split"===t&&(e.constructor={},e.constructor[p]=function(){return e}),e[u](""),!a})):void 0;if(!v||!f||"replace"===t&&!l||"split"===t&&!d){var h=/./[u],g=e(r,u,""[t],(function(t,a,e,n,i){return a.exec===c?v&&!i?{done:!0,value:h.call(a,e,n)}:{done:!0,value:t.call(e,a,n)}:{done:!1}})),_=g[0],m=g[1];n(String.prototype,t,_),i(RegExp.prototype,u,2==a?function(t,a){return m.call(t,this,a)}:function(t){return m.call(t,this)})}}},"8f12":function(t,a){t.exports=Object.is||function(t,a){return t===a?0!==t||1/t===1/a:t!=t&&a!=a}},"98f7":function(t,a,e){"use strict";var n=e("ac58"),i=e.n(n);i.a},ac58:function(t,a,e){},b3f3:function(t,a,e){"use strict";var n=e("133b");e("2498")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},db3e:function(t,a,e){"use strict";var n=e("8cac"),i=e("8f12"),s=e("2137");e("6af6")("search",1,(function(t,a,e,r){return[function(e){var n=t(this),i=void 0==e?void 0:e[a];return void 0!==i?i.call(e,n):new RegExp(e)[a](String(n))},function(t){var a=r(e,t,this);if(a.done)return a.value;var o=n(t),c=String(this),p=o.lastIndex;i(p,0)||(o.lastIndex=0);var l=s(o,c);return i(o.lastIndex,p)||(o.lastIndex=p),null===l?-1:l.index}]}))},e7a1:function(t,a,e){"use strict";var n=e("8cac");t.exports=function(){var t=n(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}}}]);
//# sourceMappingURL=chunk-8d96875c.89156764.js.map