(()=>{var e={};e.id=21,e.ids=[21],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},47053:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),s(87329),s(33411),s(35866);var r=s(23191),a=s(88716),i=s(37922),n=s.n(i),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["shop",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,87329)),"C:\\Users\\USER-WT-11\\Desktop\\lulu-main\\app\\shop\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,33411)),"C:\\Users\\USER-WT-11\\Desktop\\lulu-main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\USER-WT-11\\Desktop\\lulu-main\\app\\shop\\page.jsx"],u="/shop/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/shop/page",pathname:"/shop",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5161:(e,t,s)=>{Promise.resolve().then(s.bind(s,98534)),Promise.resolve().then(s.bind(s,5579)),Promise.resolve().then(s.bind(s,82253))},18416:(e,t,s)=>{Promise.resolve().then(s.bind(s,15253))},95575:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,12994,23)),Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23))},98534:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var r=s(10326),a=s(77626),i=s.n(a),n=s(90434),o=s(17577),l=s(90622),c=s(35047),d=s(46109);let u=()=>{let e=(0,c.usePathname)(),[t,s]=(0,o.useState)(e),[a,u]=(0,o.useState)(!1);(0,o.useEffect)(()=>{s(e);let t=()=>u(!0),r=()=>u(!1);return d.default.events.on("routeChangeStart",t),d.default.events.on("routeChangeComplete",r),d.default.events.on("routeChangeError",r),()=>{d.default.events.off("routeChangeStart",t),d.default.events.off("routeChangeComplete",r),d.default.events.off("routeChangeError",r)}},[e]);let p=e=>({fontSize:"1.6rem",fontWeight:"bold",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:e?"0":"43"});return(0,r.jsxs)(r.Fragment,{children:[a&&r.jsx("div",{className:"jsx-2535abdc67ddd944 fixed inset-0 bg-white flex items-center justify-center z-50",children:r.jsx("div",{className:"jsx-2535abdc67ddd944 spinner"})}),r.jsx("header",{className:"jsx-2535abdc67ddd944 bg-gray-100 text-black p-4 fixed bottom-0 w-full",children:r.jsx("div",{className:"jsx-2535abdc67ddd944 container mx-auto flex justify-between items-center",children:(0,r.jsxs)("nav",{className:"jsx-2535abdc67ddd944 flex justify-around w-full",children:[r.jsx(n.default,{href:"/cart",passHref:!0,prefetch:!0,children:(0,r.jsxs)("div",{onClick:()=>s("/cart"),className:`jsx-2535abdc67ddd944 flex flex-col items-center justify-center ${"/cart"===t?"text-gray-700 font-semibold":"text-gray-700"}`,children:[r.jsx(l.FeP,{className:"text-4xl",style:p("/cart"===t)}),r.jsx("span",{className:"jsx-2535abdc67ddd944 text-xs mt-1",children:"عربة التسوق"})]})}),r.jsx(n.default,{href:"/shop",passHref:!0,prefetch:!0,children:(0,r.jsxs)("div",{onClick:()=>s("/shop"),className:`jsx-2535abdc67ddd944 flex flex-col items-center justify-center ${"/shop"===t?"text-gray-700 font-semibold":"text-gray-700"}`,children:[r.jsx(l.Xfy,{className:"text-4xl",style:p("/shop"===t)}),r.jsx("span",{className:"jsx-2535abdc67ddd944 text-xs mt-1",children:"تسوق"})]})}),r.jsx(n.default,{href:"/",passHref:!0,prefetch:!0,children:(0,r.jsxs)("div",{onClick:()=>s("/"),className:`jsx-2535abdc67ddd944 flex flex-col items-center justify-center ${"/"===t?"text-gray-700 font-semibold":"text-gray-700"}`,children:[r.jsx(l.xng,{className:"text-4xl",style:p("/"===t)}),r.jsx("span",{className:"jsx-2535abdc67ddd944 text-xs mt-1",children:"الرئيسية"})]})})]})})}),r.jsx(i(),{id:"2535abdc67ddd944",children:".spinner.jsx-2535abdc67ddd944{border:4px solid rgba(0,0,0,.1);border-left-color:#000;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:50px;height:50px;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}"})]})}},5579:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var r=s(10326);s(17577);let a=()=>(0,r.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-gray-200",children:[r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"}),r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"}),r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"}),r.jsx("div",{className:"w-10 h-10 bg-gray-300 m-2"})]})},11427:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(10326);s(17577);var a=s(38890),i=s(90434);let n=({product:e})=>(0,r.jsxs)("div",{className:"bg-white w-full max-w-sm mx-auto pt-4 shadow-md rounded-lg overflow-hidden flex flex-col justify-center items-center",children:[r.jsx("div",{className:"aspect-w-1 aspect-h-1 w-full",children:r.jsx("img",{className:"object-center w-full h-auto",src:(0,a.uH)(e.images[0]).width(300).height(400).url(),alt:e.title})}),(0,r.jsxs)("div",{className:"p-4 text-center",children:[r.jsx("h2",{className:"text-gray-800 text-lg font-semibold",children:e.title}),(0,r.jsxs)("p",{className:"text-gray-600 mt-1",children:["$",e.price]}),r.jsx(i.default,{href:`/product/${e._id}`,passHref:!0,children:r.jsx("button",{className:"btn btn-primary mt-2",children:"More"})})]})]})},15253:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(10326),a=s(17577),i=s(38890),n=s(11427);let o=()=>{let[e,t]=(0,a.useState)([]),[s,o]=(0,a.useState)([]),[l,c]=(0,a.useState)(null),[d,u]=(0,a.useState)(null),[p,x]=(0,a.useState)(!0),[m,f]=(0,a.useState)(!1),[h,g]=(0,a.useState)(!0),[j,b]=(0,a.useState)(1);(0,a.useRef)(),(0,a.useEffect)(()=>{(async()=>{try{let[e,s]=await Promise.all([i.Lp.fetch(`*[_type == "product"] | order(_createdAt desc) [0...20] {
              _id,
              title,
              price,
              images,
              "category": category->title,
              "subcategory": subcategory->title
            }`),i.Lp.fetch(`*[_type == "category"]{
              _id,
              title,
              "subcategories": *[_type == "subcategory" && references(^._id)]
            }`)]);t(e),o(s),x(!1)}catch(e){console.error("Error fetching data:",e),x(!1)}})()},[]);let y=async()=>{f(!0);try{let e=await i.Lp.fetch(`*[_type == "product"] | order(_createdAt desc) [${20*j}...${(j+1)*20}] {
          _id,
          title,
          price,
          images,
          "category": category->title,
          "subcategory": subcategory->title
        }`);t(t=>[...t,...e]),b(e=>e+1),g(20===e.length),f(!1)}catch(e){console.error("Error fetching more products:",e),f(!1)}},v=e=>{c(e),u(null)},w=e=>{u(e)},N=d?e.filter(e=>e.category===l&&e.subcategory===d):l?e.filter(e=>e.category===l):e,k=(0,a.useRef)(),P=(0,a.useCallback)(e=>{!p&&!m&&h&&(k.current&&k.current.disconnect(),k.current=new IntersectionObserver(e=>{e[0].isIntersecting&&y()}),e&&k.current.observe(e))},[p,m,h]),S={padding:"0.5rem 1rem",fontSize:"1rem",border:"1px solid #ccc",borderRadius:"4px",margin:"0.5rem",cursor:"pointer",transition:"background-color 0.3s ease, border-color 0.3s ease"};return e?r.jsx("div",{className:"container mx-auto p-4",children:p?r.jsx("div",{className:"flex justify-center items-center h-screen",children:r.jsx("div",{className:"loader"})}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-col items-center mb-4",children:[r.jsx("div",{className:"flex flex-wrap justify-center",children:s.map(e=>r.jsx("button",{onClick:()=>v(e.title),style:{...S,backgroundColor:l===e.title?"#f0f0f0":"white",borderColor:l===e.title?"#007bff":"#ccc"},children:e.title},e._id))}),l&&r.jsx("div",{className:"flex flex-wrap justify-center mt-4",children:s.find(e=>e.title===l)?.subcategories?.map(e=>r.jsx("button",{onClick:()=>w(e.title),style:{...S,backgroundColor:d===e.title?"#f0f0f0":"white",borderColor:d===e.title?"#007bff":"#ccc"},children:e.title},e._id))})]}),r.jsx("div",{className:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto",children:N&&N.length>0?r.jsx(r.Fragment,{children:N.map((e,t)=>N.length===t+1?r.jsx("div",{ref:P,children:r.jsx(n.Z,{product:e})},e._id):r.jsx("div",{children:r.jsx(n.Z,{product:e})},e._id))}):r.jsx("h1",{className:"text-black text-center",children:"لا توجد منتجات"})}),m&&r.jsx("div",{className:"flex justify-center items-center mt-4",children:r.jsx("div",{className:"loader"})})]})}):r.jsx("div",{className:"flex items-center justify-center h-screen",children:"تحميل..."})}},82253:(e,t,s)=>{"use strict";function r(){return null}s.d(t,{default:()=>r}),s(17577)},38890:(e,t,s)=>{"use strict";s.d(t,{Lp:()=>n,uH:()=>l});var r=s(55225),a=s(86426),i=s.n(a);let n=(0,r.eI)({projectId:"1pi0qth2",dataset:"production",apiVersion:"2021-03-25",useCdn:!0}),o=i()(n),l=e=>o.image(e)},33411:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y,metadata:()=>b});var r=s(19510),a=s(84005),i=s.n(a);s(67272);var n=s(68570);let o=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Header.js`),{__esModule:l,$$typeof:c}=o;o.default;let d=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Header.js#default`),u=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Loading .js`),{__esModule:p,$$typeof:x}=u;u.default;let m=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\components\Loading .js#default`);s(46745);let f=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\sw.js`),{__esModule:h,$$typeof:g}=f;f.default;let j=(0,n.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\sw.js#default`),b={title:"Create Next App",description:"Generated by create next app"};function y({children:e,loading:t}){return(0,r.jsxs)("html",{lang:"en","data-theme":"fantasy",dir:"rtl",children:[(0,r.jsxs)("head",{children:[r.jsx("link",{rel:"manifest",href:"/manifest.json"}),r.jsx("script",{src:"https://cdn.onesignal.com/sdks/OneSignalSDK.js",async:""})]}),(0,r.jsxs)("body",{className:i().className,children:[r.jsx(j,{}),t?r.jsx(m,{}):e,r.jsx("div",{className:"w-full h-20 bg-white"}),r.jsx(d,{})]})]})}},87329:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var r=s(68570);let a=(0,r.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\shop\page.jsx`),{__esModule:i,$$typeof:n}=a;a.default;let o=(0,r.createProxy)(String.raw`C:\Users\USER-WT-11\Desktop\lulu-main\app\shop\page.jsx#default`)},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,500,315],()=>s(47053));module.exports=r})();