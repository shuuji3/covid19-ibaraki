(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{324:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l}));var o=new(r(0).a),l="TOGGLE_DETAILS"},325:function(t,e,r){var content=r(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("3ead8b44",content,!0,{sourceMap:!1})},326:function(t,e,r){var content=r(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("8802fb4e",content,!0,{sourceMap:!1})},364:function(t,e,r){"use strict";var o=r(325);r.n(o).a},365:function(t,e,r){(e=r(13)(!1)).push([t.i,".header[data-v-4979df68]{position:relative;display:flex;flex-wrap:wrap;align-items:flex-end;width:100%}.pageTitle[data-v-4979df68]{font-size:3rem;display:flex;align-items:center;margin:0 calc(0.5em + 40px) 0 0;font-weight:normal;line-height:1.35;color:#4d4d4d}@media screen and (max-width: 600px){.pageTitle[data-v-4979df68]{font-size:2rem}}",""]),t.exports=e},366:function(t,e,r){"use strict";var o=r(326);r.n(o).a},367:function(t,e,r){(e=r(13)(!1)).push([t.i,".Header-Share{position:absolute;top:calc(50% - 10px);right:24px;display:flex;align-items:flex-end;background-color:#fff}.Header-Share .DataView-Share-Opener{padding:14px;margin:-14px;cursor:pointer}.Header-Share .DataView-Share-Opener>svg{width:auto !important}.Header-Share .DataView-Share-Opener:focus{outline:dotted #707070 1px}.Header-Share .DataView-Share-Buttons{position:absolute;top:1.5em;right:-4px;z-index:2;width:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:8px;text-align:left;background:#fff !important;border:solid 1px #d9d9d9;border-radius:8px;font-size:1.6rem}.Header-Share .DataView-Share-Buttons>*{padding:4px 0}.Header-Share .DataView-Share-Buttons span{display:block;margin:auto;text-align:center;font-size:1.2rem}.Header-Share .DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.Header-Share .DataView-Share-Buttons>.Close-Button button{border:1px solid #fff;border-radius:50%}.Header-Share .DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.Header-Share .DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.Header-Share .DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-right:4px;margin-left:4px}.Header-Share .DataView-Share-Buttons>.Buttons button:focus{border:1px dotted #707070;border-radius:50%;outline:none}",""]),t.exports=e},380:function(t,e,r){"use strict";r(45);var o=r(0),l=r(324),n=o.a.extend({props:{icon:{type:String,required:!1,default:""},title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1}},computed:{},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){return"".concat(location.protocol,"//").concat(location.host,"/cards/").concat(this.titleId)},twitter:function(){var t="https://twitter.com/intent/tweet?text="+encodeURIComponent(document.title.replace("|","/"))+"&url="+this.permalink()+"&hashtags=StopCovid19JP";window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u="+this.permalink();window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url="+this.permalink();window.open(t)},toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$refs.dataView})}}}),d=(r(364),r(366),r(6)),h=r(38),c=r.n(h),v=r(294),f=r(618),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("h2",{staticClass:"pageTitle"},[t.icon?r("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),r("div",{staticClass:"Header-Share"},[r("v-tooltip",{attrs:{disabled:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[r("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("このページをシェア")}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])}),t._v(" "),t.displayShare?r("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[r("div",{staticClass:"Close-Button"},[r("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("mdi-close")])],1),t._v(" "),r("span",[t._v(t._s(t.$t("このページをシェアする")))]),t._v(" "),r("div",{staticClass:"Buttons"},[r("button",{attrs:{"aria-label":t.$t("LINEでこのページをシェア")},on:{click:t.line}},[t._m(0)]),t._v(" "),r("button",{attrs:{"aria-label":t.$t("Twitterでこのページをシェア")},on:{click:t.twitter}},[t._m(1)]),t._v(" "),r("button",{attrs:{"aria-label":t.$t("facebookでこのページをシェア")},on:{click:t.facebook}},[t._m(2)])])]):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,"4979df68",null);e.a=component.exports;c()(component,{VIcon:v.a,VTooltip:f.a})},421:function(t,e,r){var content=r(422);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("7c06aa28",content,!0,{sourceMap:!1})},422:function(t,e,r){(e=r(13)(!1)).push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 rgba(255,255,255,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(255,255,255,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child{border-bottom:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(0.4, 0, 0.6, 1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto !important}.v-data-table__progress th{height:auto !important;border:none !important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td{height:32px}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0px !important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=e},450:function(t,e,r){var content=r(614);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("4182fce0",content,!0,{sourceMap:!1})},509:function(t,e,r){"use strict";r(29),r(15),r(11),r(4),r(20);var o=r(3),l=(r(68),r(421),r(10)),n=r(63),d=r(62);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(n.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(l.e)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},612:function(t){t.exports=JSON.parse('[{"<HTML>":"<HEAD>"},{"<HTML>":"<TITLE>Internal Server Error</TITLE>"},{"<HTML>":"</HEAD>"},{"<HTML>":"<BODY BGCOLOR=\\"#FFFFFF\\" TEXT=\\"#000000\\">"},{"<HTML>":"<H1>Internal Server Error</H1>"},{"<HTML>":"<H2>Error 500</H2>"},{"<HTML>":"</BODY>"},{"<HTML>":"</HTML>"}]')},613:function(t,e,r){"use strict";var o=r(450);r.n(o).a},614:function(t,e,r){(e=r(13)(!1)).push([t.i,"@media screen and (min-width: 769px){.OtherPref .StaticCard p.checkOthers{display:none}}.Others-Card{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px}.Others-Card-Table{width:100%;border-collapse:collapse}.Others-Card-Table th{font-size:1.4rem !important}.Others-Card-Table tr td{padding:0 16px;font-size:1.4rem !important}@media screen and (min-width: 769px){.Others-Card-Table thead tr{height:48px}.Others-Card-Table tbody tr{height:96px}.Others-Card-Table th.tel{width:35%}.Others-Card-Table th,.Others-Card-Table tr:not(:last-child){border-top:none;border-right:none;border-bottom:thin solid rgba(0,0,0,.12);border-left:none}.Others-Card-Table tr:last-child{border:none}}@media screen and (max-width: 768px){.Others-Card-Table thead{display:none}.Others-Card-Table tbody tr{height:auto}.Others-Card-Table tbody tr .pref{padding-top:12px;padding-bottom:8px;font-weight:bold;border-bottom:none !important}.Others-Card-Table tbody tr .site{margin-bottom:12px;border-bottom:none !important}.Others-Card-Table tbody tr .admin{display:none}.Others-Card-Table tbody tr .repo{display:none}.Others-Card-Table tbody tr:not(:last-child){border-bottom:thin solid rgba(0,0,0,.12)}.Others-Card-Table td{display:block}}",""]),t.exports=e},629:function(t,e,r){"use strict";r.r(e);var o=r(0),l=r(380),n=r(612),d=o.a.extend({components:{PageHeader:l.a},data:function(){return{Data:n}},head:function(){return{title:this.$t("他都道府県の新型コロナ対策サイト")}}}),h=(r(613),r(6)),c=r(38),v=r.n(c),f=r(509),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"OtherPref"},[r("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("他都道府県の新型コロナ対策サイト"))+"\n  ")]),t._v(" "),r("div",{staticClass:"Others-Card"},[r("v-simple-table",{staticClass:"Others-Card-Table",scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("都道府県名")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("公開サイト")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("GitHub リポジトリ")))])])]),t._v(" "),r("tbody",t._l(t.Data,(function(e){return r("tr",{key:e.text},[r("td",{staticClass:"pref text-center"},[t._v("\n              "+t._s(t.$t(e["自治体"]))+"\n              "),"1"===e["公式"]?r("span",[t._v(t._s(t.$t("【公認】")))]):"2"===e["公式"]?r("span",[t._v(t._s(t.$t("【公式】")))]):t._e()]),t._v(" "),r("td",{staticClass:"site text-center"},["https://ibaraki.stopcovid19.jp/"===e.URL?r("a",{attrs:{href:"#"}},[t._v(t._s(e.URL))]):r("a",{attrs:{href:e.URL,target:"_blank"}},[t._v(t._s(e.URL))])]),t._v(" "),r("td",{staticClass:"repo text-center"},[r("a",{attrs:{href:"https://github.com/"+e.GitHub,target:"_blank"}},[t._v(t._s(e.GitHub))])])])})),0)]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VSimpleTable:f.a})}}]);