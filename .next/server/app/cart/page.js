(()=>{var e={};e.id=565,e.ids=[565],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},41892:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),s(24133),s(33411),s(35866);var r=s(23191),a=s(88716),n=s(37922),i=s.n(n),l=s(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,24133)),"C:\\Users\\USER-WT-11\\Desktop\\lulu-main\\app\\cart\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,33411)),"C:\\Users\\USER-WT-11\\Desktop\\lulu-main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\USER-WT-11\\Desktop\\lulu-main\\app\\cart\\page.js"],u="/cart/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},34750:(e,t,s)=>{Promise.resolve().then(s.bind(s,35750))},5161:(e,t,s)=>{Promise.resolve().then(s.bind(s,98534)),Promise.resolve().then(s.bind(s,5579)),Promise.resolve().then(s.bind(s,82253))},95575:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,12994,23)),Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23))},35750:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(10326),a=s(17577),n=s(38890);let i=()=>{let[e,t]=(0,a.useState)([]),[s,i]=(0,a.useState)(""),[l,o]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),[u,m]=(0,a.useState)(!1),[x,p]=(0,a.useState)(!0);(0,a.useEffect)(()=>{(async()=>{t(JSON.parse(localStorage.getItem("cart"))||[]),p(!1)})()},[]);let f=s=>{let r=e.filter((e,t)=>t!==s);t(r),localStorage.setItem("cart",JSON.stringify(r))},h=e=>{confirm("هل أنت متأكد أنك تريد إزالة هذا العنصر من سلة التسوق؟")&&f(e)},g=()=>e.reduce((e,t)=>e+t.price*(t.quantity||1),0),b=async r=>{r.preventDefault();let a={_type:"order",name:s,address:l,phoneNumber:d,items:e.map((e,t)=>({key:e.index,_type:"orderItem",productName:e.title||"منتج بدون اسم",productRef:{_type:"reference",_ref:e._id},quantity:e.quantity||1,price:e.price,totalPrice:e.price*(e.quantity||1)})),totalOrderPrice:g()};try{await n.Lp.create(a,{token:"skMuyw0al2locWT7DGTeGftHSEEIlQcWaykJV8J6qdXxVQrjouuBIEmlFGNTBOWuI0LFmIrRMN3RjEQsbFThTGkG9UqLKbm8aZncweW8nK17NSwco4hU9DNU0mxMSyrKFs2OObhyfoow1MtNlWQsoSKthTquglxVauiK8ecpCF3cgIO2pbZT"}),localStorage.removeItem("cart"),t([]),m(!0),console.log("تم تقديم الطلب بنجاح")}catch(e){console.error("خطأ في إنشاء الطلب:",e)}};return r.jsx("div",{className:"max-w-screen-lg mx-auto p-4 rtl",children:x?r.jsx("div",{className:"flex justify-center items-center h-screen",children:r.jsx("div",{className:"loader"})}):(0,r.jsxs)("div",{children:[u&&r.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,r.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-lg",children:[r.jsx("h2",{className:"text-xl font-bold mb-4",children:"تم تقديم الطلب بنجاح!"}),r.jsx("p",{className:"mb-4",children:"شكرًا على الشراء."}),r.jsx("button",{onClick:()=>{m(!1)},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"إغلاق"})]})}),!u&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("h1",{className:"text-black text-2xl font-bold mb-4",children:"سلة التسوق الخاصة بك"}),0===e.length?r.jsx("div",{className:"text-center mt-8",children:"سلة التسوق الخاصة بك فارغة."}):(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"grid gap-4",children:e.map((e,t)=>r.jsx("div",{className:"flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0",children:(0,r.jsxs)("div",{className:"flex md:flex-row flex-row-reverse items-center w-full",children:[e.images&&e.images[0]?r.jsx("img",{src:(0,n.uH)(e.images[0]).width(100).height(130).url(),alt:e.name,className:"w-24 h-34 rounded-lg mr-4 mb-4 md:mb-0 md:mr-4"}):r.jsx("div",{className:"w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg mr-4 mb-4 md:mb-0 md:mr-4",children:"لا توجد صورة"}),(0,r.jsxs)("div",{className:"flex-grow text-right",children:[(0,r.jsxs)("h2",{className:"text-black text-lg mb-2",children:["الإسم: ",e.title||"منتج بدون اسم"]}),(0,r.jsxs)("h2",{className:"text-black text-lg mb-2",children:["الحجم: ",e.size||""]}),(0,r.jsxs)("p",{className:"text-black mb-2",children:["السعر: ",e.price||"غير متوفر"," دينار"]}),(0,r.jsxs)("p",{className:"text-black mb-2",children:["الكمية: ",e.quantity||1]}),(0,r.jsxs)("p",{className:"text-black mb-2",children:["الإجمالي: $",e.price*(e.quantity||1)]}),r.jsx("button",{onClick:()=>h(t),className:"text-red-500 mt-2",children:"إزالة"})]})]})},t))}),r.jsx("div",{className:"mt-8 text-right",children:(0,r.jsxs)("h2",{className:"text-black font-bold",children:["الإجمالي: $",g()]})}),(0,r.jsxs)("form",{onSubmit:b,className:"mt-8",children:[(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"الاسم"}),r.jsx("input",{type:"text",value:s,onChange:e=>i(e.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"العنوان"}),r.jsx("input",{type:"text",value:l,onChange:e=>o(e.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"رقم الهاتف"}),r.jsx("input",{type:"text",value:d,onChange:e=>c(e.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),r.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"تقديم الطلب"})]})]})]})]})})}},98534:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var r=s(10326),a=s(77626),n=s.n(a),i=s(90434),l=s(17577),o=s(90622),d=s(35047),c=s(46109);let u=()=>{let e=(0,d.usePathname)(),[t,s]=(0,l.useState)(e),[a,u]=(0,l.useState)(!1);(0,l.useEffect)(()=>{s(e);let t=()=>u(!0),r=()=>u(!1);return c.default.events.on("routeChangeStart",t),c.default.events.on("routeChangeComplete",r),c.default.events.on("routeChangeError",r),()=>{c.default.events.off("routeChangeStart",t),c.default.events.off("routeChangeComplete",r),c.default.events.off("routeChangeError",r)}},[e]);let m=e=>({fontSize:"1.6rem",fontWeight:"bold",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:e?"0":"43"});return(0,r.jsxs)(r.Fragment,{children:[a&&r.jsx("div",{className:"jsx-2535abdc67ddd944 fixed inset-0 bg-white flex items-center justify-center z-50",children:r.jsx("div",{className:"jsx-2535abdc67ddd944 spinner"})}),r.jsx("header",{className:"jsx-2535abdc67ddd944 bg-gray-100 text-black p-4 fixed bottom-0 w-full",children:r.jsx("div",{className:"jsx-2535abdc67ddd944 container mx-auto flex justify-between items-center",children:(0,r.jsxs)("nav",{className:"jsx-2535abdc67ddd944 flex justify-around w-full",children:[r.jsx(i.default,{href:"/cart",passHref:!0,prefetch:!0,children:(0,r.jsxs)("div",{onClick:()=>s("/cart"),className:`jsx-2535abdc67ddd944 flex flex-col items-center justify-center ${"/cart"===t?"text-gray-700 font-semibold":"text-gray-700"}`,children:[r.jsx(o.FeP,{className:"text-4xl",style:m("/cart"===t)}),r.jsx("span",{className:"jsx-2535abdc67ddd944 text-xs mt-1",children:"عربة التسوق"})]})}),r.jsx(i.default,{href:"/shop",passHref:!0,prefetch:!0,children:(0,r.jsxs)("div",{onClick:()=>s("/shop"),className:`jsx-2535abdc67ddd944 flex flex-col items-center justify-center ${"/shop"===t?"text-gray-700 font-semibold":"text-gray-700"}`,children:[r.jsx(o.Xfy,{className:"text-4xl",style:m("/shop"===t)}),r.jsx("span",{className:"jsx-2535abdc67ddd944 text-xs mt-1",children:"تسوق"})]})}),r.jsx(i.default,{href:"/",passHref:!0,prefetch:!0,children:(0,r.jsxs)("div",{onClick:()=>s("/"),className:`jsx-2535abdc67ddd944 flex flex-col items-center justify-center ${"/"===t?"text-gray-700 font-semibold":"text-gray-700"}`,children:[r.jsx(o.xng,{className:"text-4xl",style:m("/"===t)}),r.jsx("span",{className:"jsx-2535abdc67ddd944 text-xs mt-1",children:"الرئيسية"})]})})]})})}),r.jsx(n(),{id:"2535abdc67ddd944",children:".spinner.jsx-2535abdc67ddd944{border:4px solid rgba(0,0,0,.1);border-left-color:#000;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:50px;height:50px;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}"})]})}},5579:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var r=s(10326);s(17577);let a=()=>(0,r.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-gray-200",children:[r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"}),r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"}),r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"}),r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"})]})},82253:(e,t,s)=>{"use strict";function r(){return null}s.d(t,{default:()=>r}),s(17577)},38890:(e,t,s)=>{"use strict";s.d(t,{Lp:()=>i,uH:()=>o});var r=s(55225),a=s(86426),n=s.n(a);let i=(0,r.eI)({projectId:"1pi0qth2",dataset:"production",apiVersion:"2021-03-25",useCdn:!0}),l=n()(i),o=e=>l.image(e)},24133:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var r=s(68570);let a=(0,r.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\cart\page.js`),{__esModule:n,$$typeof:i}=a;a.default;let l=(0,r.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\cart\page.js#default`)},33411:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y,metadata:()=>j});var r=s(19510),a=s(84005),n=s.n(a);s(67272);var i=s(68570);let l=(0,i.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Header.js`),{__esModule:o,$$typeof:d}=l;l.default;let c=(0,i.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Header.js#default`),u=(0,i.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Loading .js`),{__esModule:m,$$typeof:x}=u;u.default;let p=(0,i.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Loading .js#default`);s(46745);let f=(0,i.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\sw.js`),{__esModule:h,$$typeof:g}=f;f.default;let b=(0,i.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\sw.js#default`),j={title:"Create Next App",description:"Generated by create next app"};function y({children:e,loading:t}){return(0,r.jsxs)("html",{lang:"en","data-theme":"fantasy",dir:"rtl",children:[(0,r.jsxs)("head",{children:[r.jsx("link",{rel:"manifest",href:"/manifest.json"}),r.jsx("script",{src:"https://cdn.onesignal.com/sdks/OneSignalSDK.js",async:""})]}),(0,r.jsxs)("body",{className:n().className,children:[r.jsx(b,{}),t?r.jsx(p,{}):e,r.jsx("div",{className:"w-full h-20 bg-white"}),r.jsx(c,{})]})]})}},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,500,315],()=>s(41892));module.exports=r})();