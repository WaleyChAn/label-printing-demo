"use strict";(self["webpackChunklabel_printing_demo"]=self["webpackChunklabel_printing_demo"]||[]).push([[327],{6327:function(t,i,e){e.r(i),e.d(i,{default:function(){return c}});var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"demo-print"},[i("div",{staticClass:"demo-print__btn",on:{click:function(i){return t.onPrint()}}},[t._v("打印")]),i("div",[i("div",{ref:"refPrintContent",attrs:{id:"printContent"}},[i("div",{staticClass:"demo-print__content",staticStyle:{width:"300px",height:"165px",overflow:"hidden","padding-top":"5px","page-break-after":"always"}},[i("div",{staticClass:"demo-print__left",staticStyle:{float:"left",width:"96px"}},[i("div",{staticClass:"demo-print__logo"},[i("img",{staticStyle:{display:"block",margin:"0",width:"100%"},attrs:{src:t.imgLogo,alt:"logo"}})]),i("div",{staticClass:"demo-print__qr"},[i("img",{staticStyle:{display:"block",margin:"0",width:"100%"},attrs:{src:t.imgQr,alt:"qr"}})])]),t._m(0)]),i("div",{staticClass:"demo-print__content",staticStyle:{width:"300px",height:"165px",overflow:"hidden","padding-top":"5px","page-break-after":"always"}},[i("div",{staticClass:"demo-print__left",staticStyle:{float:"left",width:"96px"}},[i("div",{staticClass:"demo-print__logo"},[i("img",{staticStyle:{display:"block",margin:"0",width:"100%"},attrs:{src:t.imgLogo,alt:"logo"}})]),i("div",{staticClass:"demo-print__qr"},[i("img",{staticStyle:{display:"block",margin:"0",width:"100%"},attrs:{src:t.imgQr,alt:"qr"}})])]),t._m(1)]),i("div",{staticClass:"demo-print__content",staticStyle:{width:"300px",height:"165px",overflow:"hidden","padding-top":"5px","page-break-after":"always"}},[i("div",{staticClass:"demo-print__left",staticStyle:{float:"left",width:"96px"}},[i("div",{staticClass:"demo-print__logo"},[i("img",{staticStyle:{display:"block",margin:"0",width:"100%"},attrs:{src:t.imgLogo,alt:"logo"}})]),i("div",{staticClass:"demo-print__qr"},[i("img",{staticStyle:{display:"block",margin:"0",width:"100%"},attrs:{src:t.imgQr,alt:"qr"}})])]),t._m(2)])])])])},l=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"demo-print__right",staticStyle:{float:"left",width:"190px","margin-left":"10px"}},[i("dl",{staticStyle:{margin:"0"}},[i("dt",{staticStyle:{"font-size":"14px","line-height":"14px"}},[t._v("Asset Number:")]),i("dd",{staticStyle:{margin:"0","font-size":"26px","line-height":"26px",width:"90%","word-break":"break-all"}},[t._v(" CN234383 ")])]),i("dl",{staticStyle:{margin:"5px 0 0 0"}},[i("dt",{staticStyle:{"font-size":"14px","line-height":"14px"}},[t._v(" Purchasing Date: ")]),i("dd",{staticStyle:{margin:"0","font-size":"26px","line-height":"26px",width:"90%","word-break":"break-all"}},[t._v(" 2023-08-23 ")])]),i("dl",{staticStyle:{margin:"5px 0 0 0"}},[i("dt",{staticStyle:{"font-size":"14px","line-height":"14px"}},[t._v("Serial Number:")]),i("dd",{staticStyle:{margin:"0","font-size":"26px","line-height":"26px",width:"90%","word-break":"break-all"}},[t._v(" 5CG3332C32C17 ")])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"demo-print__right",staticStyle:{float:"left",width:"190px","margin-left":"10px"}},[i("dl",{staticStyle:{margin:"0"}},[i("dt",{staticStyle:{"font-size":"14px","line-height":"14px"}},[t._v("Asset Number:")]),i("dd",{staticStyle:{margin:"0","font-size":"26px","line-height":"26px",width:"90%","word-break":"break-all"}},[t._v(" CN234383 ")])]),i("dl",{staticStyle:{margin:"5px 0 0 0"}},[i("dt",{staticStyle:{"font-size":"14px","line-height":"14px"}},[t._v(" Purchasing Date: ")]),i("dd",{staticStyle:{margin:"0","font-size":"26px","line-height":"26px",width:"90%","word-break":"break-all"}},[t._v(" 2023-08-23 ")])]),i("dl",{staticStyle:{margin:"5px 0 0 0"}},[i("dt",{staticStyle:{"font-size":"14px","line-height":"14px"}},[t._v("Serial Number:")]),i("dd",{staticStyle:{margin:"0","font-size":"26px","line-height":"26px",width:"90%","word-break":"break-all"}},[t._v(" 5CG3332C32C17 ")])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"demo-print__right",staticStyle:{float:"left",width:"190px","margin-left":"10px"}},[i("dl",{staticStyle:{margin:"0"}},[i("dt",{staticStyle:{"font-size":"14px","line-height":"14px"}},[t._v("Asset Number:")]),i("dd",{staticStyle:{margin:"0","font-size":"26px","line-height":"26px",width:"90%","word-break":"break-all"}},[t._v(" CN234383 ")])]),i("dl",{staticStyle:{margin:"5px 0 0 0"}},[i("dt",{staticStyle:{"font-size":"14px","line-height":"14px"}},[t._v(" Purchasing Date: ")]),i("dd",{staticStyle:{margin:"0","font-size":"26px","line-height":"26px",width:"90%","word-break":"break-all"}},[t._v(" 2023-08-23 ")])]),i("dl",{staticStyle:{margin:"5px 0 0 0"}},[i("dt",{staticStyle:{"font-size":"14px","line-height":"14px"}},[t._v("Serial Number:")]),i("dd",{staticStyle:{margin:"0","font-size":"26px","line-height":"26px",width:"90%","word-break":"break-all"}},[t._v(" 5CG3332C32C17 ")])])])}],n=e(5097),s=e.n(n),r={name:"DemoPage",data(){return{imgLogo:e(4427),imgQr:e(183)}},methods:{onPrint(){const t=document.createElement("style"),i="\n        body {\n          margin: 0;\n          padding: 0;\n          border: 0;\n        }\n        img {\n          display: block;\n          margin: 0;\n          padding: 0;\n          border: 0;\n        }\n        .ignoreElements {\n          display: none;\n        }\n        @page {\n          size: auto;\n          margin: 0;\n        }\n      ";t.textContent=i,s()({printable:"printContent",type:"html",targetStyles:["*"],style:i})}}},d=r,o=e(1001),p=(0,o.Z)(d,a,l,!1,null,"289a7fa4",null),c=p.exports}}]);
//# sourceMappingURL=327.b3921f05.js.map