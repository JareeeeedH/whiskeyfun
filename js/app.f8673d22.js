(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},i={app:0},o=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"acfdddba"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"3e18a9ff"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[t],h.parentNode.removeChild(h),n(o)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){s[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}i[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/whiskeyfun/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"4b50":function(t,e,n){t.exports=n.p+"img/loading.8a58d6c6.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("搜尋")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("收藏")])],1),n("router-view")],1)},i=[],o=(n("034f"),n("2877")),r={},c=Object(o["a"])(r,s,i,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("WhiskyFun")]),n("div",{staticClass:"container-fluid mb-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"d-flex justify-content-between align-items-center bg-light"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchContent,expression:"searchContent"}],staticClass:"w-100 p-2",staticStyle:{border:"none",outline:"none","background-color":"transparent"},attrs:{placeholder:"請搜尋名稱..",id:"titleInput"},domProps:{value:t.searchContent},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.searchContent=e.target.value)}}})])])]),n("div",{staticClass:"row my-3"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"d-flex justify-content-between align-items-center bg-light"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchContent_points,expression:"searchContent_points"}],staticClass:"w-100 p-2",staticStyle:{border:"none",outline:"none","background-color":"transparent"},attrs:{type:"number",placeholder:"請搜尋分數..",id:"pointsInput"},domProps:{value:t.searchContent_points},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.searchContent_points=e.target.value)}}})])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"},[n("button",{staticClass:"btn btn-primary",on:{click:t.search}},[t._v(" Go! ")])]),n("div",{staticClass:"col-6"},[n("div",[t.matched_Title?n("div",{staticClass:"h3",staticStyle:{"text-align":"left"}},[t._v(" 名稱: "+t._s(t.matched_Title)+" ")]):t._e(),t.matched_Points?n("div",{staticClass:"h3",staticStyle:{"text-align":"left"}},[t._v(" 分數: "+t._s(t.matched_Points)+" ")]):t._e()])]),n("div",{staticClass:"col-md-4 margin-left-auto"},[n("div",{staticStyle:{"text-align":"right"}},[n("h1",[t._v("共有"+t._s(this.rendering.length)+"筆搜尋")])])])])]),!0===t.searched?n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},t._l(t.rendering,(function(e){return n("div",{key:e.id,staticClass:"col-md-12 col-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"title d-flex flex-column"},[n("h1",[t._v(" "+t._s(e.mainTitle)+" "),n("button",{staticClass:"addBtn",on:{click:function(n){return t.addToLocalStorage(e)}}},[t._v(" RECORD ")])]),n("h1",[t._v(t._s(e.subTitle))])]),n("div",{staticClass:"row p-3"},[n("div",{staticClass:"col-md-2 d-flex flex-column justify-content-center align-items-center"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgSrc,expression:"item.imgSrc"}]}),n("p",{staticClass:"score"},[t._v(" "+t._s(e.scores)+" ")]),n("button",{staticClass:"d-md-none btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.openModal(e.mainTitle,e.NOTE)}}},[t._v(" 查看評論 ")])]),n("div",{staticClass:"col-md-10 d-none d-md-block"},[n("p",{staticClass:"note"},[t._v(t._s(e.NOTE))])])])])])})),0)]):n("div",{staticClass:"carousel-container"},[n("div",{staticClass:"carousel"},[n("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.rendering,(function(e,a){return n("swiper-slide",{key:a},[n("img",{attrs:{src:e.imgSrc,alt:""}}),n("h3",[t._v(t._s(e.mainTitle))])])})),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),n("ul",{staticClass:"carousel-list"},t._l(t.rendering,(function(e,a){return n("li",{key:a,staticClass:"each-carousel"},[t._v(" "+t._s(e.mainTitle)+" ")])})),0)]),n("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h1",{staticClass:"modal-title bg-Main",attrs:{id:"exampleModalLabel"}},[t._v(" "+t._s(t.modalTitle)+" ")]),t._m(2)]),n("div",{staticClass:"modal-body modealText"},[t._v(" "+t._s(t.modalNote)+" ")]),t._m(3)])])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"px-3 mb-0 text-primary d-flex align-items-center text-barSecond",attrs:{for:"titleInput"}},[n("i",{staticClass:"fas fa-search"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"px-3 mb-0 text-primary d-flex align-items-center text-barSecond",attrs:{for:"pointsInput"}},[n("i",{staticClass:"fas fa-search"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[n("span",[t._v("×")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" Close ")])])}],f=n("9cae"),m=f["a"],p=(n("cccb"),Object(o["a"])(m,d,h,!1,null,null,null)),v=p.exports;a["a"].use(u["a"]);var _=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],b=new u["a"]({routes:_}),C=b,g=(n("4de4"),n("159b"),n("ac1f"),n("1276"),n("2f62")),y=n("bc3a"),T=n.n(y),w=n("2106"),S=n.n(w);a["a"].use(g["a"]),a["a"].use(S.a,T.a);var x="https://raw.githubusercontent.com/JareeeeedH/fundata/master/WhiskyFun.json",E=function(){var t=JSON.parse(window.localStorage.getItem("wineRecord"))||[];return t},L=function(t){window.localStorage.setItem("wineRecord",JSON.stringify(t))},O=new g["a"].Store({state:{funData:[],lovedList:[],userNmae:""},actions:{GET_JSON_DATA:function(t){var e={};T.a.get(x).then((function(n){return t.commit("SET_DATA",n.data),e=n.data,e}))},GET_LOCAL_DATA:function(t){var e=E();t.commit("SET_LOCAL_DATA",e)},ADD_LOVED_LIST:function(t,e){var n=E();n.push(e),t.commit("SET_LOCAL_DATA",n)},DEL_LOVED_LIST:function(t,e){var n=E(),a=n.filter((function(t){return t.id!==e}));t.commit("SET_LOCAL_DATA",a)}},mutations:{SET_DATA:function(t,e){t.funData=e,console.log("data have been saved")},SET_LOCAL_DATA:function(t,e){t.lovedList=e,console.log(e),L(e),console.log("commit!")}},getters:{dataList:function(t){var e="https://raw.githubusercontent.com/JareeeeedH/fundata/master/whiskyfun/",n=[];return t.funData.forEach((function(t){var a=t.IMAGE_PATH.split("/")[1].split("")[0],s=t.IMAGE_PATH.split("/")[1],i=e+a+"/"+s,o=t.NAME.split(" ("),r=o[0],c="("+o[1],l=t.SCORE,u=t.SCORE.split(" - "),d=u[0],h=u[1],f={SGP:d,points:h,mainTitle:r,subTitle:c,imgSrc:i,score:l,note:t.NOTE,id:t.id};n.push(f)})),n}}}),A=n("7212"),D=n.n(A),k=(n("a7a3"),n("4989"),n("ab8b"),n("caf9"));a["a"].use(S.a,T.a),a["a"].use(D.a),a["a"].use(k["a"],{loading:n("4b50")}),a["a"].config.productionTip=!1,new a["a"]({router:C,store:O,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},"9cae":function(t,e,n){"use strict";(function(t){var a=n("3835");n("d81d"),n("498a"),n("ac1f"),n("1276"),n("159b"),n("a9e3");e["a"]={data:function(){return{name:"whiskyFun",searchContent:"",searchContent_points:"",matched_Points:null,matched_Title:null,modalTitle:"",modalNote:"",isDoubleSearch:"",rendering:[],searched:!1,swiperOption:{autoplay:!1,effect:"cube",mousewheel:!0,keyboard:!0,pagination:{el:".swiper-pagination",type:"progressbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{funDataList:function(){return this.$store.getters.dataList.map((function(t){var e={id:t.id,mainTitle:t.mainTitle,subTitle:t.subTitle,imgSrc:t.imgSrc,points:parseInt(t.points),SGP:t.SGP,scores:t.score,NOTE:t.note};return e}))}},methods:{search:function(){var t=this;if(this.isDoubleSearch=-1!==this.searchContent.trim().indexOf(" "),console.log("isDoubleSearch",this.isDoubleSearch),!this.searchContent.trim()&&!this.searchContent_points)return console.log("兩個空白: StopSearching"),void alert("請搜尋名稱或者分數..");if(this.isDoubleSearch&&!this.searchContent_points){var e=this.searchContent.trim().split(" "),n=Object(a["a"])(e,2),s=n[0],i=n[1];this.matched_Points=null,this.matched_Title=null,this.matched_Points=this.searchContent_points,this.matched_Title=this.searchContent;var o=[];return this.funDataList.forEach((function(t){var e=t.mainTitle.toLowerCase(),n=t.subTitle.toLowerCase();-1!=e.indexOf(s.toLowerCase())&&-1!=n.indexOf(i)&&o.push(t)})),this.rendering=o,void(this.searched=!0)}if(this.isDoubleSearch&&this.searchContent_points)alert("名稱雙重搜尋不支援搜尋分數");else{if(!this.searchContent.trim()&&this.searchContent_points){this.matched_Points=null,this.matched_Title=null,this.matched_Points=this.searchContent_points;var r=[];this.funDataList.forEach((function(e){Number(e.points)==Number(t.searchContent_points)&&r.push(e)})),this.rendering=r}else if(this.searchContent.trim()&&!this.searchContent_points){this.matched_Points=null,this.matched_Title=null,this.matched_Points=null,this.matched_Title=this.searchContent;var c=[];this.funDataList.forEach((function(e){var n=e.mainTitle.toLowerCase();-1!=n.indexOf(t.searchContent.toLowerCase())&&c.push(e)})),this.rendering=c}else if(this.searchContent.trim()&&this.searchContent_points){this.matched_Points=null,this.matched_Title=null,this.matched_Points=this.searchContent_points,this.matched_Title=this.searchContent;var l=[];this.funDataList.forEach((function(e){var n=e.mainTitle.toLowerCase();-1!=n.indexOf(t.searchContent.toLowerCase())&&Number(e.points)==Number(t.searchContent_points)&&l.push(e)})),this.rendering=l}this.searched=!0}},getRandom:function(){for(var t=[],e=0;e<5;e++){var n=Math.floor(Math.random()*this.funDataList.length);t.push(this.funDataList[n])}this.rendering=t},openModal:function(e,n){this.modalTitle=e,this.modalNote=n,t("#exampleModal").modal("show")},addToLocalStorage:function(t){this.$store.dispatch("ADD_LOVED_LIST",t),alert("已加入")}},mounted:function(){var t=this;this.$store.dispatch("GET_JSON_DATA").then((function(e){setTimeout((function(){t.getRandom()}),2e3)}))}}}).call(this,n("1157"))},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.f8673d22.js.map