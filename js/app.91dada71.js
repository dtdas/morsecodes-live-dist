(function(e){function t(t){for(var a,r,u=t[0],l=t[1],s=t[2],i=0,d=[];i<u.length;i++)r=u[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function u(e){return l.p+"js/"+({blog:"blog",home:"home",posts:"posts",projects:"projects"}[e]||e)+"."+{blog:"08503ed0","chunk-0dc5df39":"e1f5afaf","chunk-112dca71":"a9bd7cf6","chunk-6fa4209e":"27c6c09d","chunk-3c23f82a":"ad60b0b3","chunk-824b8f94":"c03c50dd","chunk-84d5e8d0":"0a7c4799",home:"bee51cf7",posts:"95a5754f",projects:"cfa6c3c4","chunk-201776e0":"5115944c","chunk-663b3970":"5e04660b","chunk-0833d7fc":"09899bc0","chunk-5adca75a":"90edc98d","chunk-2d21a72a":"0690b308","chunk-433302bd":"70317962","chunk-2d22fcd7":"36037720","chunk-64eb0730":"979fa532","chunk-b4ee3d76":"f49ac1c8","chunk-fc909a5e":"1f32ed7c"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-0dc5df39":1,"chunk-112dca71":1,"chunk-6fa4209e":1,"chunk-3c23f82a":1,"chunk-824b8f94":1,"chunk-84d5e8d0":1,"chunk-663b3970":1,"chunk-0833d7fc":1,"chunk-5adca75a":1,"chunk-b4ee3d76":1,"chunk-fc909a5e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({blog:"blog",home:"home",posts:"posts",projects:"projects"}[e]||e)+"."+{blog:"31d6cfe0","chunk-0dc5df39":"31904215","chunk-112dca71":"41bb0c1b","chunk-6fa4209e":"899f1a11","chunk-3c23f82a":"8f2e3902","chunk-824b8f94":"e3ddfbe3","chunk-84d5e8d0":"afe65f8e",home:"31d6cfe0",posts:"31d6cfe0",projects:"31d6cfe0","chunk-201776e0":"31d6cfe0","chunk-663b3970":"9c920835","chunk-0833d7fc":"9c920835","chunk-5adca75a":"33d6148b","chunk-2d21a72a":"31d6cfe0","chunk-433302bd":"31d6cfe0","chunk-2d22fcd7":"31d6cfe0","chunk-64eb0730":"31d6cfe0","chunk-b4ee3d76":"d6060f46","chunk-fc909a5e":"d6060f46"}[e]+".css",o=l.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===a||i===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],i=s.getAttribute("data-href");if(i===a||i===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=u(e);var d=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",e._b({staticClass:"mx-auto py-6 mb-2",staticStyle:{"margin-top":"-64px"},attrs:{elevation:"24",light:"","max-width":"95%"}},"v-card",e.$attrs,!1),[n("v-sheet",{staticClass:"mx-auto py-0 py-md-6",attrs:{"max-width":"1000"}},[e._t("default")],2)],1)},o=[],c={name:"BaseCard"},u=c,l=(n("fc2a"),n("2877")),s=n("6544"),i=n.n(s),d=n("b0af"),f=n("8dd9"),p=Object(l["a"])(u,r,o,!1,null,"3e9e5b5a",null),h=p.exports;i()(p,{VCard:d["a"],VSheet:f["a"]});var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{attrs:{dark:e.dark,light:e.light,tile:""}},[n("v-img",{attrs:{src:e.src,gradient:e.gradient,height:e.height}},[n("v-container",{staticClass:"fill-height px-4",staticStyle:{padding:"96px 0"}},[e._t("default")],2)],1)],1)},b=[],g=(n("a9e3"),{name:"BaseJumbotron",props:{dark:{type:Boolean,default:!1},gradient:{type:String,default:"to top, rgba(0,0,0,.62), rgba(0,0,0,.62)"},height:{type:[Number,String],default:"40vh"},light:{type:Boolean,default:!1},src:{type:String,default:void 0,required:!0}}}),y=g,k=n("a523"),v=n("adda"),w=Object(l["a"])(y,m,b,!1,null,null,null),x=w.exports;i()(w,{VContainer:k["a"],VImg:v["a"],VSheet:f["a"]});var j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"font-weight-bold",class:[e.$vuetify.breakpoint.mdAndUp?"display-3":"headline"]},[e._t("default")],2)},_=[],q={name:"BaseTitle"},P=q,C=Object(l["a"])(P,j,_,!1,null,null,null),S=C.exports;a["a"].component("BaseCard",h),a["a"].component("BaseJumbotron",x),a["a"].component("BaseTitle",S);var O=n("58ca");a["a"].use(O["a"]);var B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("core-app-bar"),n("core-drawer"),n("core-view"),n("core-footer")],1)},E=[],T=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"App",metaInfo:{titleTemplate:"%s — morsecodes"},components:{CoreAppBar:function(){return Promise.all([n.e("chunk-112dca71"),n.e("chunk-6fa4209e")]).then(n.bind(null,"dc21"))},CoreDrawer:function(){return n.e("chunk-0dc5df39").then(n.bind(null,"41c0"))},CoreFooter:function(){return Promise.all([n.e("chunk-3c23f82a"),n.e("chunk-112dca71"),n.e("chunk-824b8f94")]).then(n.bind(null,"7a74"))},CoreView:function(){return n.e("chunk-84d5e8d0").then(n.bind(null,"9306"))}}}),A=T,D=(n("034f"),n("7496")),F=Object(l["a"])(A,B,E,!1,null,null,null),L=F.exports;i()(F,{VApp:D["a"]});var N=n("8c4f");a["a"].use(N["a"]);var V=new N["a"]({mode:"history",base:"/",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"9553"))}},{path:"/blog",name:"Blog",component:function(){return n.e("blog").then(n.bind(null,"6d4b"))}},{path:"/posts/:slug",name:"Post",component:function(){return n.e("posts").then(n.bind(null,"1c4e"))}},{path:"/projects",name:"Projects",component:function(){return n.e("projects").then(n.bind(null,"e812"))}}]});a["a"].use(n("0284").default,{id:"G-949H5LK69H",router:V,autoTracking:{page:!0}});var $=V,I=n("2f62"),M=function(e){return function(t,n){return t[e]=n}},H=function(e){return function(t){return t[e]=!t[e]}},J={namespaced:!0,state:{links:[["/","Home"],["/blog","Blog"],["/projects","Projects"]],drawer:null},mutations:{setDrawer:M("drawer"),toggleDrawer:H("drawer")}},U={namespaced:!0,state:{posts:[{title:"FetchXML in Power Apps Portals",date:"February 22, 2022",author:"James Morse",body:"\n        <p>There are a few ways in Portals to read records from Dataverse - built in lists and forms, Web API, and fetchxml. Fetchxml offers a simple way to list data using liquid tags directly in the Page Template.</p>\n        <br>\n        <h2 id='setup'>Setup</h2>\n        <br>\n        <p>At the top of the <strong>Page Template</strong>, include the xml code, replacing the sample names with the information from your table.</p>\n        <br>\n        <p>Entity name: the table you would like to display data from</p>\n        <p>Order attribute: order by any column name</p>\n        <p>Note: the following code includes all columns, but if you&#39;d only like to include certain columns, you can specify them by replacing <code>all-attributes /&gt;</code> with <code>&lt;attribute name=&quot;column1&quot; /&gt;</code> for each column.</p>\n        <pre><code class='language-%' lang='%'>&lt;fetch version=&quot;1.0&quot; output-format=&quot;xml-platform&quot; mapping=&quot;logical&quot; distinct=&quot;false&quot;&gt;\n          &lt;entity name=&quot;table_name&quot;&gt;\n            &lt;all-attributes /&gt;\n            &lt;order attribute=&quot;attr1&quot; descending=&quot;false&quot; /&gt;\n          &lt;/entity&gt;\n        &lt;/fetch&gt;\n        {% endfetchxml %}\n        {% assign query_results = get_some_data.results.entities %}\n        </code></pre>\n        <br>\n        <h2 id='use'>Use</h2>\n        <p>Use a for loop to iterate through the records and display the data. In this example, we list the column1 custom column for each record in the table. Include this code directly inside any html.</p>\n        <pre><code class='language-%' lang='%'>{{ result.column1 }}\n        {% endfor %}\n        </code></pre>\n        <p>We can take advantage of conditionals and operations within liquid tags as well. For example, let&#39;s say we want to subtract column2 from column1 and display the results as a whole number:</p>\n        <pre><code class='language-%' lang='%'>{{ result.column1 | minus: result.column2 | round }}\n        {% endfor %}\n        </code></pre>\n        ",tags:["fetchxml","post","powerapps","microsoft","portals","powerapps portals"],more:"/posts/fetchxml-power-apps-portals",slug:"fetch-xml-power-apps-portals"}]}};a["a"].use(I["a"]);var K=new I["a"].Store({modules:{app:J,content:U}}),W=n("f309");n("5363");a["a"].use(W["a"]);var G=new W["a"]({theme:{themes:{light:{primary:"#F44336",secondary:"#2B2D42",accent:"#8D99AE"}}}});a["a"].config.productionTip=!1,new a["a"]({router:$,store:K,vuetify:G,render:function(e){return e(L)}}).$mount("#app")},"85ec":function(e,t,n){},"94ee":function(e,t,n){},fc2a:function(e,t,n){"use strict";n("94ee")}});
//# sourceMappingURL=app.91dada71.js.map