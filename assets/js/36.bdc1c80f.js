(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{633:function(t,_,o){"use strict";o.r(_);var v=o(39),r=Object(v.a)({},(function(){var t=this,_=t.$createElement,o=t._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[o("a",{attrs:{href:"https://chen-cong.blog.csdn.net/article/details/81211729",target:"_blank",rel:"noopener noreferrer"}},[t._v("帮你彻底搞懂JS中的prototype、__proto__与constructor"),o("OutboundLink")],1)]),t._v(" "),o("p",[o("img",{attrs:{src:"https://c2.im5i.com/2022/01/12/UExJj.png",alt:"UExJj.png"}})]),t._v(" "),o("h2",{attrs:{id:"一、-前言"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一、-前言"}},[t._v("#")]),t._v(" 一、 前言")]),t._v(" "),o("p",[t._v("本文的目的，是为了搞懂JS中的"),o("code",[t._v("prototype")]),t._v("、"),o("code",[t._v("__proto__")]),t._v("与"),o("code",[t._v("constructor")]),t._v("属性")]),t._v(" "),o("p",[t._v("从一个简单的例子开始")]),t._v(" "),o("div",{staticClass:"language-js line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f1 "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[t._v("1")]),o("br"),o("span",{staticClass:"line-number"},[t._v("2")]),o("br")])]),o("p",[t._v("让我们看看它的关系\n"),o("img",{attrs:{src:"https://c2.im5i.com/2022/01/12/UExJj.png",alt:"UExJj.png"}})]),t._v(" "),o("ul",[o("li",[o("p",[t._v("各箭头的说明")]),t._v(" "),o("ul",[o("li",[t._v("红色箭头表示"),o("code",[t._v("__proto__")]),t._v("属性指向、")]),t._v(" "),o("li",[t._v("绿色箭头表示"),o("code",[t._v("prototype")]),t._v("属性的指向、")]),t._v(" "),o("li",[t._v("棕色实线箭头表示本身具有的"),o("code",[t._v("constructor")]),t._v("属性的指向，")]),t._v(" "),o("li",[t._v("棕色虚线箭头表示继承而来的"),o("code",[t._v("constructor")]),t._v("属性的指向；")])])]),t._v(" "),o("li",[o("p",[t._v("各方块说明")]),t._v(" "),o("ul",[o("li",[t._v("蓝色方块表示对象，")]),t._v(" "),o("li",[t._v("浅绿色方块表示函数（这里为了更好看清，"),o("code",[t._v("Foo()")]),t._v("仅代表是函数，并不是指执行函数"),o("code",[t._v("Foo")]),t._v("后得到的结果，图中的其他函数同理）")])])]),t._v(" "),o("li",[o("p",[t._v("基础概念")]),t._v(" "),o("ul",[o("li",[o("strong",[o("code",[t._v("__proto__")]),t._v("和"),o("code",[t._v("constructor")]),t._v("属性是对象所独有的")])]),t._v(" "),o("li",[o("strong",[o("code",[t._v("prototype")]),t._v("属性是函数所独有的。但是由于JS中函数也是一种对象，所以函数也拥有"),o("code",[t._v("__proto__")]),t._v("和"),o("code",[t._v("constructor")]),t._v("属性")])])])])]),t._v(" "),o("h2",{attrs:{id:"二、-proto-属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#二、-proto-属性"}},[t._v("#")]),t._v(" 二、 __ proto __ 属性")]),t._v(" "),o("blockquote",[o("p",[t._v("该属性在ES标准定义中的名字应该是[[Prototype]]，具体实现是由浏览器代理自己实现，谷歌浏览器的实现就是将[[Prototype]]命名为__proto__")])]),t._v(" "),o("p",[o("img",{attrs:{src:"https://c2.im5i.com/2022/01/13/Uuu2Z.png",alt:"Uuu2Z.png"}})]),t._v(" "),o("ul",[o("li",[t._v("定义\n"),o("ul",[o("li",[o("code",[t._v("__proto__")]),t._v("属性都是由一个对象指向一个对象，即指向它们的原型对象（也可以理解为父对象）")])])]),t._v(" "),o("li",[t._v("原型链\n"),o("ul",[o("li",[t._v("当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的"),o("code",[t._v("__proto__")]),t._v("属性所指向的那个对象（可以理解为父对象）里找，如果父对象也不存在这个属性，则继续往父对象的__proto__属性所指向的那个对象（可以理解为爷爷对象）里找，如果还没找到，则继续往上找…直到原型链顶端"),o("code",[t._v("null")]),t._v("（可以理解为原始人。。。）")]),t._v(" "),o("li",[t._v("这种通过"),o("code",[t._v("__proto__")]),t._v("属性来连接对象直到null的一条链即为我们所谓的"),o("code",[t._v("原型链")]),t._v("。")])])])]),t._v(" "),o("h2",{attrs:{id:"三、-prototype属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#三、-prototype属性"}},[t._v("#")]),t._v(" 三、 prototype属性")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://c2.im5i.com/2022/01/13/UuE38.png",alt:"UuE38.png"}})]),t._v(" "),o("ul",[o("li",[t._v("定义\n"),o("ul",[o("li",[o("strong",[t._v("函数所独有的，指向该函数的原型对象。")]),t._v(" 比如："),o("code",[t._v("f1.__proto__ === Foo.prototype")])]),t._v(" "),o("li",[t._v("任何函数在创建的时候，会默认同时创建该函数的prototype对象。")]),t._v(" "),o("li",[t._v("包含可以由特定类型的所有实例共享的属性和方法，也就是"),o("strong",[t._v("让该函数所实例化的对象们都可以找到公用的属性和方法。")])])])]),t._v(" "),o("li",[t._v("q&a\n"),o("ul",[o("li",[t._v("所有函数都可以作为构造函数嘛？")])])])]),t._v(" "),o("h2",{attrs:{id:"四、-constructor属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四、-constructor属性"}},[t._v("#")]),t._v(" 四、 constructor属性")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://c2.im5i.com/2022/01/13/Uutlw.png",alt:"Uutlw.png"}})]),t._v(" "),o("ul",[o("li",[t._v("定义\n"),o("ul",[o("li",[o("strong",[t._v("对象(js里万物皆对象)都拥有的，指向该对象的构造函数。")])]),t._v(" "),o("li",[o("strong",[t._v("每个对象都有构造函数")]),t._v("，有些是本身拥有的，有些是通过"),o("code",[t._v("__proto__")]),t._v("继承来的")]),t._v(" "),o("li",[o("code",[t._v("Function")]),t._v("这个对象比较特殊，它的构造函数就是它自己（因为"),o("code",[t._v("Function")]),t._v("可以看成是一个函数，也可以是一个对象）")]),t._v(" "),o("li",[t._v("所有函数和对象最终都是由"),o("code",[t._v("Function")]),t._v("构造函数得来，所以constructor属性的终点就是"),o("code",[t._v("Function")]),t._v("这个函数。")])])]),t._v(" "),o("li",[t._v("q&a\n"),o("ul",[o("li",[t._v("“每个对象都有构造函数”怎么理解？\n"),o("ul",[o("li",[t._v("创建对象的前提是需要有"),o("code",[t._v("constructor")]),t._v("，而这个"),o("code",[t._v("constructor")]),t._v("可能是对象自己本身显式定义的或者通过"),o("code",[t._v("__proto__")]),t._v("在原型链中找到的。")]),t._v(" "),o("li",[t._v("而单从"),o("code",[t._v("constructor")]),t._v("这个属性来讲，只有"),o("code",[t._v("prototype")]),t._v("对象才有。")]),t._v(" "),o("li",[t._v("每个函数在创建的时候，JS会同时创建一个该函数对应的"),o("code",[t._v("prototype")]),t._v("对象，而"),o("code",[t._v("f1.__proto__ === Foo.prototype")]),t._v("，"),o("code",[t._v("Foo.prototype.constructor===Foo")])])])])])])])])}),[],!1,null,null,null);_.default=r.exports}}]);