(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6948:function(e,t,s){Promise.resolve().then(s.bind(s,2590))},4432:function(e,t,s){"use strict";var c=s(7437);s(2265);var r=s(3383),l=s(7138);t.Z=e=>{let{product:t}=e;return(0,c.jsxs)("div",{className:"bg-white w-full max-w-sm mx-auto pt-4 shadow-md rounded-lg overflow-hidden flex flex-col justify-center items-center",children:[(0,c.jsx)("div",{className:"aspect-w-1 aspect-h-1 w-full",children:(0,c.jsx)("img",{className:"object-center w-full h-auto",src:(0,r.uH)(t.images[0]).width(300).height(400).url(),alt:t.title})}),(0,c.jsxs)("div",{className:"p-4 text-center",children:[(0,c.jsx)("h2",{className:"text-gray-800 text-lg font-semibold",children:t.title}),(0,c.jsxs)("p",{className:"text-gray-600 mt-1",children:["$",t.price]}),(0,c.jsx)(l.default,{href:"/product/".concat(t._id),passHref:!0,children:(0,c.jsx)("button",{className:"btn btn-primary mt-2",children:"More"})})]})]})}},2590:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return n}});var c=s(7437),r=s(2265),l=s(3383),i=s(4432);function n(){let[e,t]=(0,r.useState)([]),[s,n]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{t(await l.Lp.fetch('*[_type == "product"]{\n          _id,\n          title,\n          price,\n          images,\n          "category": category->title,\n          "subcategory": subcategory->title\n        }[0...3]')),n(!1)})()},[]),(0,c.jsx)("div",{className:"overflow-y-scroll h-full",children:s?(0,c.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,c.jsx)("div",{className:"loader"})}):(0,c.jsx)("div",{className:"flex justify-center items-center",children:(0,c.jsxs)("div",{className:"flex flex-col items-center",children:[(0,c.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"Welcome to our Clothes Store"}),(0,c.jsx)("p",{className:"text-lg text-gray-600 mb-8",children:"Browse our collection of stylish and affordable clothing"}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:e.map(e=>(0,c.jsx)(i.Z,{product:e},e._id))})]})})})}},3383:function(e,t,s){"use strict";s.d(t,{Lp:function(){return i},uH:function(){return a}});var c=s(8961),r=s(6103),l=s.n(r);let i=(0,c.eI)({projectId:"1pi0qth2",dataset:"production",apiVersion:"2021-03-25",useCdn:!0}),n=l()(i),a=e=>n.image(e)}},function(e){e.O(0,[923,138,971,23,744],function(){return e(e.s=6948)}),_N_E=e.O()}]);