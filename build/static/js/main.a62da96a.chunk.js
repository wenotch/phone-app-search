(this.webpackJsonpphoneapp=this.webpackJsonpphoneapp||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(72),i=n.n(c),s=n(137),o=n(5),l=n(73),d=n.n(l),j=n(125),b=n(126),h=n(11),g=n(112),u=n(128),x=n(136),m=n(127),p=n.p+"static/media/search1.8287bcf3.svg",f=n(3),O=function(){return Object(f.jsxs)(j.a,{w:"full",justifyContent:"center",alignContent:"center",alignItems:"center",direction:{base:"column",md:"row-reverse"},px:{base:8,md:36},py:{base:20,md:24},mx:"auto",bg:"teal",children:[Object(f.jsx)(b.a,{w:{base:"100%",md:"50%"},children:Object(f.jsx)(m.a,{w:"90%",src:p,alt:"Segun Adebayo"})}),Object(f.jsxs)(b.a,{w:{base:"100%",md:"50%"},textAlign:{base:"left",md:"left"},mx:"auto",children:[Object(f.jsxs)(h.a.h1,{mb:3,fontSize:{base:"4xl",md:"5xl"},fontWeight:{base:"bold",md:"extrabold"},color:Object(g.c)("white","gray.100"),lineHeight:"shorter",textAlign:"left",children:["Your"," ",Object(f.jsxs)(u.a,{as:"span",color:"#FFD200",children:["Ultimate"," "]})," ","Mobile Phone Filter."]}),Object(f.jsx)(h.a.p,{mb:6,fontSize:{base:"lg",md:"xl"},color:"whiteAlpha.800",lineHeight:"base",textAlign:"left",children:"This is your ultimate phone search. made specially for you using; reactjs and chakra Ui. Feel free to search using whatever you like. if we have it, it would definitely show up."}),Object(f.jsx)(x.a,{bg:"white",color:"teal",_hover:{bg:"#FFD200",color:"white",transition:"all ease .3s"},size:"lg",children:"Get Started"})]})]})},w=n(129);function y(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(h.a.header,{bg:Object(g.c)("white","gray.800"),w:"full",px:{base:2,sm:4,md:32},py:4,shadow:"md",children:Object(f.jsxs)(j.a,{alignItems:"center",justifyContent:"space-between",mx:"auto",children:[Object(f.jsx)(x.a,{variant:"ghost",children:"Logo"}),Object(f.jsx)(w.a,{size:"sm",name:"Emmanuel Nwanochie"})]})})})}var S=n(139),v=n(132),z=n(133),C=n(138),A=n(130),F=n(140),k=n(135);function P(e){var t=e.name,n=e.imgUrl,r=e.price,a=e.storage,c=e.grade;return Object(f.jsx)(A.a,{py:5,children:Object(f.jsxs)(b.a,{role:"group",p:6,w:"320px",bg:Object(g.c)("white","gray.800"),boxShadow:"2xl",rounded:"lg",pos:"relative",textAlign:"center",justifyContent:"center",zIndex:1,children:[Object(f.jsx)(b.a,{rounded:"lg",pt:12,pb:5,m:"auto",w:40,mt:-12,textAlign:"center",children:Object(f.jsx)(m.a,{rounded:"lg",src:n})}),Object(f.jsxs)(F.a,{align:"center",children:[Object(f.jsx)(u.a,{color:"gray.500",fontSize:"sm",textTransform:"Capitalize",children:t}),Object(f.jsxs)(F.a,{direction:"row",align:"center",children:[Object(f.jsxs)(u.a,{m:"0",as:"p",color:"gray.500",fontSize:"sm",children:["Grade: ",c]}),Object(f.jsxs)(u.a,{m:"0",as:"p",color:"gray.500",fontSize:"sm",children:["Storage Size: ",a]})]}),Object(f.jsx)(F.a,{direction:"row",align:"center",children:Object(f.jsxs)(u.a,{fontWeight:800,fontSize:"xl",children:["$",r]})})]})]})})}var I=n(141);var L=function(){Object(r.useEffect)((function(){d.a.get("https://ezeapi-prod-copy.herokuapp.com/api/v1/sell-request/in-stock?sort=new&limit=20&page=1&minPrice=0&maxPrice=2500&storageSizeString=&conditionString=&category=Smartphones&brand=Apple,Samsung,Google,Huawei,LG,Motorola,OnePlus").then((function(e){var t=e.data.data.data.filter((function(e){return"Apple"===e.brand&&"undefined"!==typeof e.lowestAsk}));j(t)})).catch((function(e){return console.error(e)}))}),[]);var e=a.a.useState(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),s=Object(o.a)(i,2),l=s[0],j=s[1],h=l.filter((function(e){return Object.keys(e).some((function(t){return e[t].toString().toLowerCase().includes(n.toString().toLowerCase())}))}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{}),Object(f.jsx)(O,{}),Object(f.jsx)(A.a,{children:Object(f.jsxs)(b.a,{w:"full",mx:{base:5,md:24},mt:5,bg:Object(g.c)("white","gray.800"),boxShadow:"2xl",rounded:"md",overflow:"hidden",py:8,px:{base:4,md:34},children:[Object(f.jsx)(F.a,{direction:"row",spacing:4,mb:4,align:"center",justify:"center",children:Object(f.jsxs)(v.a,{w:"60",m:"auto",children:[Object(f.jsx)(z.a,{pointerEvents:"none",children:Object(f.jsx)(S.a,{color:"#046494"})}),Object(f.jsx)(C.a,{value:n,onChange:function(e){return c(e.target.value)},size:"md",placeholder:"Search Phone of Choice"})]})}),Object(f.jsx)(k.a,{}),Object(f.jsx)(I.a,{w:"full",alignContents:"center",minChildWidth:"330px",spacing:0,placeItems:"center",children:h.map((function(e){return Object(f.jsx)(P,{name:e.name,imgUrl:e.imgUrl,price:e.lowestAsk.price,grade:e.lowestAsk.grade,storage:e.lowestAsk.storageSize},e._id)}))})]})})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(s.a,{children:Object(f.jsx)(L,{})})}),document.getElementById("root")),U()}},[[109,1,2]]]);
//# sourceMappingURL=main.a62da96a.chunk.js.map