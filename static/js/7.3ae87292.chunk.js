(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{408:function(t,e,a){"use strict";a.r(e);var c=a(55),l=a(22),n=a(1),s=a.n(n),i=a(231),r=a(12),o=a(16),g=a(7),d=a(2);e.default=function(){var t=Object(g.h)(),e=t.HandelGetLayHistoryAPI,a=t.data,n=t.error,u=t.pagination,m=s.a.useRef(1),b=s.a.useState(m.current),h=Object(l.a)(b,2),j=h[0],p=h[1];return s.a.useEffect((function(){(!u._total||m.current<j)&&e({_limit:20,_page:j})}),[j,n,e,u._total]),u._total?Object(d.jsxs)(i.a,{dataLength:a.length,next:function(){a.length<u._total&&p(j+1)},hasMore:a.length!==u._total,loader:Object(d.jsx)(r.b,{items:a.length||10,className:"grid grid-template-columns-4 gap-4 my-4"}),children:[Object(d.jsx)(o.c,{title:"L\u1ecbch s\u1eed xem",className:"text-white mb-4"}),Object(d.jsx)("div",{className:"grid grid-template-columns-4 gap-4",children:a.map((function(t,e){return Object(d.jsx)(o.g,Object(c.a)(Object(c.a)({data:a,index:e},t),{},{className:"grid grid-cols-1 min-w-3xl w-full h-full overflow-hidden bg-[rgba(33,33,42,255)]"}),e)}))})]}):Object(d.jsx)(r.b,{items:10,className:"grid grid-template-columns-4 gap-4"})}}}]);