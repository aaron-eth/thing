(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/thing/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"0780":function(t,e,n){},1887:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o={},s=o,c=(n("034f"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null),l=u.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"mainContainer"}},[n("div",{staticClass:"bubble",attrs:{id:"bubble1"}}),n("div",{staticClass:"bubble",attrs:{id:"bubble2"}}),n("div",{staticClass:"bubble",attrs:{id:"bubble3"}}),n("div",{staticClass:"bubble",attrs:{id:"bubble4"}}),n("div",{staticClass:"bubble",attrs:{id:"bubble5"}}),n("div",{attrs:{id:"mainTitle"},on:{click:function(e){return t.clickedTitle()}}},[t._v("thing")]),n("div",{attrs:{id:"description"}},[t._v("pure breathe exercise")])])])},m=[],b={name:"home",data(){return{}},methods:{clickedTitle(){document.getElementById("mainContainer").style.background="black",document.getElementById("mainTitle").style.color="floralwhite",document.getElementById("mainTitle").style.borderColor="floralwhite",document.getElementById("mainTitle").style.opacity="0",setTimeout(()=>{document.getElementById("mainTitle").style.display="none",F.push("type")},300)}},created(){document.getElementById("mainContainer").style.background="#90b1ff",document.getElementById("mainTitle").style.color="black",document.getElementById("mainTitle").style.borderColor="black",document.getElementById("mainTitle").style.opacity="1",document.getElementById("mainTitle").style.display="block"}},y=b,f=(n("a127"),Object(c["a"])(y,p,m,!1,null,"f357bdd6",null)),v=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"typeTitle"},[t._v("choose a type")]),n("div",{staticClass:"typeContainer"},[n("div",{staticClass:"type",on:{click:function(e){return t.setType(4)}}},[t._v("4 sec")]),n("div",{staticClass:"type",on:{click:function(e){return t.setType(6)}}},[t._v("6 sec")]),n("div",{staticClass:"type",on:{click:function(e){return t.setType(9)}}},[t._v("9 sec")]),n("div",{staticClass:"type",on:{click:function(e){return t.setType(11)}}},[t._v("11 sec")])])])},g=[],_=n("2f62");a["a"].use(_["a"]);var k=new _["a"].Store({state:{meditationType:0,meditationSound:""},mutations:{},actions:{},modules:{}}),T={data(){return{}},methods:{setType(t){k.state.meditationType=t,F.push("/sound")}},created(){document.body.style.background="black"}},C=T,w=(n("b64c"),Object(c["a"])(C,h,g,!1,null,null,null)),O=w.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{style:{animationDuration:t.duration+"s"},attrs:{id:"mediContainer"}},[n("div",{style:{animationDuration:t.duration+"s"},attrs:{id:"circle"}}),n("div",{style:{animationDuration:t.duration/2+"s"},attrs:{id:"message"}},[t._v(" "+t._s(t.message)+" ")]),n("audio",{attrs:{src:t.sound,autoplay:"",loop:""}}),n("div",{attrs:{id:"back"}},[n("router-link",{attrs:{to:"/type"}},[t._v("back")])],1)])])},j=[],S={data(){return{message:"breathe in",duration:k.state.meditationType,sound:k.state.meditationSound+".mp3"}},methods:{changeMsg(){"breathe in"==this.message?this.message="breathe out":this.message="breathe in"}},created(){0==k.state.meditationType&&F.push("/type"),document.body.style.background="black",setInterval(()=>{this.changeMsg()},this.duration/2*1e3)}},x=S,I=(n("7a8e"),Object(c["a"])(x,E,j,!1,null,null,null)),B=I.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"typeTitle"},[t._v("choose a sound")]),n("div",{staticClass:"typeContainer"},[n("div",{staticClass:"type",on:{click:function(e){return t.setSound("none")}}},[t._v("none")]),n("div",{staticClass:"type",attrs:{id:"fire"},on:{click:function(e){return t.setSound("fire")}}},[t._v("fire")]),n("div",{staticClass:"type",attrs:{id:"water"},on:{click:function(e){return t.setSound("water")}}},[t._v("water")]),n("div",{staticClass:"type",attrs:{id:"music"},on:{click:function(e){return t.setSound("classic")}}},[t._v("music")])])])},M=[],$={name:"sound",data(){return{}},methods:{setSound(t){k.state.meditationSound=t,F.push("/meditation")}},created(){document.body.style.background="black;"}},D=$,J=(n("e84d"),Object(c["a"])(D,P,M,!1,null,"685ced07",null)),q=J.exports;a["a"].use(d["a"]);const z=[{path:"/",name:"home",component:v},{path:"/duration",name:"duration",component:Duration},{path:"/type",name:"type",component:O},{path:"/meditation",name:"meditation",component:B},{path:"/sound",name:"sound",component:q}],A=new d["a"]({mode:"history",base:"/thing/",routes:z});var F=A;a["a"].config.productionTip=!1,new a["a"]({router:F,store:k,render:function(t){return t(l)}}).$mount("#app")},"67b2":function(t,e,n){},7452:function(t,e,n){},"7a8e":function(t,e,n){"use strict";var a=n("7452"),i=n.n(a);i.a},"85ec":function(t,e,n){},a127:function(t,e,n){"use strict";var a=n("0780"),i=n.n(a);i.a},b64c:function(t,e,n){"use strict";var a=n("1887"),i=n.n(a);i.a},e84d:function(t,e,n){"use strict";var a=n("67b2"),i=n.n(a);i.a}});
//# sourceMappingURL=app.e720600e.js.map