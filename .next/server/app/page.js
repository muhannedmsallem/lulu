(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},61818:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),s(52232),s(33411),s(35866);var r=s(23191),a=s(88716),i=s(37922),n=s.n(i),l=s(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,52232)),"C:\\Users\\USER-WT-11\\Desktop\\lulu-main\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,33411)),"C:\\Users\\USER-WT-11\\Desktop\\lulu-main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\USER-WT-11\\Desktop\\lulu-main\\app\\page.js"],u="/page",x={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5161:(e,t,s)=>{Promise.resolve().then(s.bind(s,98534)),Promise.resolve().then(s.bind(s,5579)),Promise.resolve().then(s.bind(s,82253))},77576:(e,t,s)=>{Promise.resolve().then(s.bind(s,38256))},95575:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,12994,23)),Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23))},98534:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var r=s(10326),a=s(77626),i=s.n(a),n=s(90434),l=s(17577),o=s(90622),d=s(35047),c=s(46109);let u=()=>{let e=(0,d.usePathname)(),[t,s]=(0,l.useState)(e),[a,u]=(0,l.useState)(!1);(0,l.useEffect)(()=>{s(e);let t=()=>u(!0),r=()=>u(!1);return c.default.events.on("routeChangeStart",t),c.default.events.on("routeChangeComplete",r),c.default.events.on("routeChangeError",r),()=>{c.default.events.off("routeChangeStart",t),c.default.events.off("routeChangeComplete",r),c.default.events.off("routeChangeError",r)}},[e]);let x=e=>({fontSize:"1.6rem",fontWeight:"bold",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:e?"0":"43"});return(0,r.jsxs)(r.Fragment,{children:[a&&r.jsx("div",{className:"jsx-2535abdc67ddd944 fixed inset-0 bg-white flex items-center justify-center z-50",children:r.jsx("div",{className:"jsx-2535abdc67ddd944 spinner"})}),r.jsx("header",{className:"jsx-2535abdc67ddd944 bg-gray-100 text-black p-4 fixed bottom-0 w-full",children:r.jsx("div",{className:"jsx-2535abdc67ddd944 container mx-auto flex justify-between items-center",children:(0,r.jsxs)("nav",{className:"jsx-2535abdc67ddd944 flex justify-around w-full",children:[r.jsx(n.default,{href:"/cart",passHref:!0,prefetch:!0,children:(0,r.jsxs)("div",{onClick:()=>s("/cart"),className:`jsx-2535abdc67ddd944 flex flex-col items-center justify-center ${"/cart"===t?"text-gray-700 font-semibold":"text-gray-700"}`,children:[r.jsx(o.FeP,{className:"text-4xl",style:x("/cart"===t)}),r.jsx("span",{className:"jsx-2535abdc67ddd944 text-xs mt-1",children:"عربة التسوق"})]})}),r.jsx(n.default,{href:"/shop",passHref:!0,prefetch:!0,children:(0,r.jsxs)("div",{onClick:()=>s("/shop"),className:`jsx-2535abdc67ddd944 flex flex-col items-center justify-center ${"/shop"===t?"text-gray-700 font-semibold":"text-gray-700"}`,children:[r.jsx(o.Xfy,{className:"text-4xl",style:x("/shop"===t)}),r.jsx("span",{className:"jsx-2535abdc67ddd944 text-xs mt-1",children:"تسوق"})]})}),r.jsx(n.default,{href:"/",passHref:!0,prefetch:!0,children:(0,r.jsxs)("div",{onClick:()=>s("/"),className:`jsx-2535abdc67ddd944 flex flex-col items-center justify-center ${"/"===t?"text-gray-700 font-semibold":"text-gray-700"}`,children:[r.jsx(o.xng,{className:"text-4xl",style:x("/"===t)}),r.jsx("span",{className:"jsx-2535abdc67ddd944 text-xs mt-1",children:"الرئيسية"})]})})]})})}),r.jsx(i(),{id:"2535abdc67ddd944",children:".spinner.jsx-2535abdc67ddd944{border:4px solid rgba(0,0,0,.1);border-left-color:#000;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:50px;height:50px;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}"})]})}},5579:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var r=s(10326);s(17577);let a=()=>(0,r.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-gray-200",children:[r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"}),r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"}),r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"}),r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"})]})},11427:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(10326);s(17577);var a=s(38890),i=s(90434);let n=({product:e})=>(0,r.jsxs)("div",{className:"bg-white w-full max-w-sm mx-auto pt-4 shadow-md rounded-lg overflow-hidden flex flex-col justify-center items-center",children:[r.jsx("div",{className:"aspect-w-1 aspect-h-1 w-full",children:r.jsx("img",{className:"object-center w-full h-auto",src:(0,a.uH)(e.images[0]).width(300).height(400).url(),alt:e.title})}),(0,r.jsxs)("div",{className:"p-4 text-center",children:[r.jsx("h2",{className:"text-gray-800 text-lg font-semibold",children:e.title}),(0,r.jsxs)("p",{className:"text-gray-600 mt-1",children:["$",e.price]}),r.jsx(i.default,{href:`/product/${e._id}`,passHref:!0,children:r.jsx("button",{className:"btn btn-primary mt-2",children:"More"})})]})]})},38256:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(10326),a=s(17577);s(38890);var i=s(11427);function n(){let[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(!0);return r.jsx("div",{className:"overflow-y-scroll h-full",children:s?r.jsx("div",{className:"flex justify-center items-center h-screen",children:r.jsx("div",{className:"loader"})}):r.jsx("div",{className:"flex justify-center items-center",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[r.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Welcome to our Clothes Store"}),r.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"Browse our collection of stylish and affordable clothing"}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:e.map(e=>r.jsx(i.Z,{product:e},e._id))})]})})})}},82253:(e,t,s)=>{"use strict";function r(){return null}s.d(t,{default:()=>r}),s(17577)},38890:(e,t,s)=>{"use strict";s.d(t,{Lp:()=>n,uH:()=>o});var r=s(55225),a=s(86426),i=s.n(a);let n=(0,r.eI)({projectId:"1pi0qth2",dataset:"production",apiVersion:"2021-03-25",useCdn:!0}),l=i()(n),o=e=>l.image(e)},33411:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v,metadata:()=>b});var r=s(19510),a=s(84005),i=s.n(a);s(67272);var n=s(68570);let l=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Header.js`),{__esModule:o,$$typeof:d}=l;l.default;let c=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Header.js#default`),u=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Loading .js`),{__esModule:x,$$typeof:m}=u;u.default;let p=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Loading .js#default`);s(46745);let f=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\sw.js`),{__esModule:h,$$typeof:g}=f;f.default;let j=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\sw.js#default`),b={title:"Create Next App",description:"Generated by create next app"};function v({children:e,loading:t}){return(0,r.jsxs)("html",{lang:"en","data-theme":"fantasy",dir:"rtl",children:[(0,r.jsxs)("head",{children:[r.jsx("link",{rel:"manifest",href:"/manifest.json"}),r.jsx("script",{src:"https://cdn.onesignal.com/sdks/OneSignalSDK.js",async:""})]}),(0,r.jsxs)("body",{className:i().className,children:[r.jsx(j,{}),t?r.jsx(p,{}):e,r.jsx("div",{className:"w-full h-20 bg-white"}),r.jsx(c,{})]})]})}},52232:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var r=s(68570);let a=(0,r.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\page.js`),{__esModule:i,$$typeof:n}=a;a.default;let l=(0,r.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\page.js#default`)},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,500,315],()=>s(61818));module.exports=r})();