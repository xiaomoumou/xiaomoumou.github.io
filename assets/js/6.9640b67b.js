(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{427:function(t,e,n){"use strict";var a=n(1),i=n(67).find,o=n(179),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},474:function(t,e,n){},548:function(t,e,n){},549:function(t,e,n){"use strict";n(474)},598:function(t,e,n){"use strict";n.r(e);n(10),n(28),n(4),n(31),n(17),n(18),n(44),n(26),n(427),n(548);var a=["#2a80b9","#8f44ad","#16a086","#f1c40f","#e77e23","#16a086","#27ae61","#1a80b1","#1f44a1","#1d3e51","#f6c401","#e17e21","#e14c31","#2a80b9","#8f44ad","#16a086","#f1c40f","#e77e23","#16a086","#e14c31"];!function(t){for(var e,n,a,i=[],o=0;o<t;o++)i.push((e=void 0,n=void 0,a=void 0,e=Math.floor(254*Math.random())+1,n=Math.floor(254*Math.random())+1,a=Math.floor(254*Math.random())+1,"#"+e.toString(16)+n.toString(16)+a.toString(16)))}(20);var i={data:function(){return{flexBoxs:[{title:"flex 容器的属性",type:"container",attrs:[{id:"flex-direction",default:"row",values:["row","row-reverse","column","column-reverse"]},{id:"flex-wrap",default:"nowrap",values:["nowrap","wrap","wrap-reverse"],pConfig:{style:"width:50%;"}},{id:"justify-content",default:"flex-start",values:["flex-start","flex-end","center","space-between","space-around"]},{id:"align-items",default:"flex-start",values:["flex-start","flex-end","center","baseline","stretch"],fConfig:{index:2,indexStyle:"font-size:50px;"}},{id:"align-content",default:"flex-start",values:["flex-start","flex-end","center","space-between","space-around","stretch"],pConfig:{style:"flex-wrap: wrap;height:600px;"},fConfig:{style:"height:80px;"},cConfig:{index:2,number:20,indexStyle:"font-size:32px;"}}]}]}},computed:{activeClass:function(){var t={};return this.flexBoxs.forEach((function(e){e.attrs.forEach((function(e){t[e.id]="".concat(e.id,"-").concat(e.default)}))})),console.log(t),t}},methods:{getColorsByAttr:function(t){var e=5;return t.cConfig&&t.cConfig.number&&(e=t.cConfig.number),a.slice(0,e)},getStyle:function(t,e,n,a){var i="";if(n&&(i+="color:".concat(n,";")),!t[e])return i;var o=t[e],s=o.style,l=(o.number,o.index),r=o.indexStyle;return s&&(i+=s),l&&l===a&&(i+=r),console.log(i),i},changeClass:function(t,e){console.log(t,e),console.log(this.activeClass);var n=null;this.flexBoxs.forEach((function(e){n=e.attrs.find((function(e){return e.id===t.id}))})),n.default="".concat(e),console.log(n),console.log("temp"),console.log(this.activeClass)}}},o=(n(549),n(39)),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"felx-container"},t._l(t.flexBoxs,(function(e,a){return n("div",{key:a,staticClass:"principal"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),t._l(e.attrs,(function(e,a){return n("div",{key:a},[e.values.length?n("div",{staticClass:"control"},[n("h4",[t._v(t._s(e.id))]),t._v(" "),n("div",{staticClass:"radio-wrap"},t._l(e.values,(function(a,i){return n("div",{key:i,staticClass:"radio"},[n("input",{class:"flex"+e.id,attrs:{name:"flex-"+e.id,type:"radio",id:a+e.id},domProps:{checked:e.default===a},on:{click:function(n){return t.changeClass(e,a)}}}),t._v(" "),n("label",{staticClass:"label",attrs:{for:a+e.id}},[n("span",{staticClass:"label-btn"},[t._v(t._s(a))])])])})),0)]):t._e(),t._v(" "),n("div",{staticClass:"flex-container",class:t.activeClass[e.id],style:t.getStyle(e,"pConfig"),attrs:{id:e.id,title:[t.getStyle(e,"pConfig")]}},t._l(t.getColorsByAttr(e),(function(a,i){return n("div",{key:i,staticClass:"item",style:t.getStyle(e,"fConfig",a,i),attrs:{"data-color":a}},[n("p",{style:t.getStyle(e,"cConfig")},[t._v(t._s(i+1))])])})),0)])}))],2)})),0)}),[],!1,null,"ab835fa4",null);e.default=s.exports}}]);