(this["webpackJsonpconker-website"]=this["webpackJsonpconker-website"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e){e.exports=JSON.parse('{"summary":[{"date":1608073161,"hash":"1544ecaedb4438a6bfe7ea41d26b505c1f5ee770","summary":[{"version":"us","c":25564,"total":2072880,"c_functions":364,"total_functions":5323}]},{"date":1609006709,"hash":"3a776d9033f348a8b1bb4357d7f75cfeed572d0d","summary":[{"version":"us","c":31348,"total":2072880,"c_functions":412,"total_functions":5323}]},{"date":1609182715,"hash":"feaa721d4194135d84592df68bd17acc47703034","summary":[{"version":"us","c":44960,"total":2072880,"c_functions":656,"total_functions":5323}]},{"date":1609759115,"hash":"a7330b4c0288db9942a7630eea56eb815e8db2b0","summary":[{"version":"us","c":48508,"total":2072880,"c_functions":697,"total_functions":5323}]},{"date":1609971986,"hash":"3f71f42b55670bf994326f776b97cadf5b2289a3","summary":[{"version":"us","c":48932,"total":2072880,"c_functions":704,"total_functions":5323}]},{"date":1610276703,"hash":"dd6b1978dd847a779d734e9bbd8926c32264c316","summary":[{"version":"us","c":62596,"total":2072880,"c_functions":871,"total_functions":5323}]}]}')},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),r=n.n(a),i=n(9),c=n.n(i),o=(n(17),n(6)),l=(n(18),function(e){var t=e.condition,n=e.children;return t?Object(s.jsx)(s.Fragment,{children:n}):null}),d=(n(19),function(e){var t=e.item,n=e.active,a=e.onClick,r=n?"active":"";return Object(s.jsx)("div",{className:"menu-item "+r,onClick:a,children:t})}),u=n(10),h=n(11),b=(n(25),function(e){var t=e.url;return Object(s.jsx)("div",{className:"github",children:Object(s.jsxs)("a",{href:t,alt:"Check it out on GitHub",target:"_blank",rel:"noreferrer",children:[Object(s.jsx)("span",{className:"github-icon",children:Object(s.jsx)(u.a,{icon:h.a})}),Object(s.jsx)("span",{className:"github-text",children:"GitHub"})]})})}),m=(n(26),function(e){var t=e.activePanelHook,n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(s.jsxs)("div",{className:"menu",children:[Object(s.jsxs)("div",{className:"menu-items-left",children:[Object(s.jsx)(d,{item:"progress",active:"progress"===a,onClick:function(){return r("progress")}}),Object(s.jsx)(d,{item:"faq",active:"faq"===a,onClick:function(){return r("faq")}})]}),Object(s.jsx)("div",{className:"menu-items-right",children:Object(s.jsx)(b,{url:"https://github.com/mkst/conker"})})]})}),j=(n(8),function(){return Object(s.jsxs)("div",{className:"panel",children:[Object(s.jsx)("div",{className:"panel-headline",children:"Welcome to the Conker's Bad Fur Day decompilation website!"}),Object(s.jsx)("div",{className:"panel-text"})]})}),f=(n(27),function(){return Object(s.jsxs)("div",{className:"panel",children:[Object(s.jsx)("div",{className:"panel-headline",children:"Frequently Asked Questions:"}),Object(s.jsx)("div",{className:"question",children:"Q) When is it going to be done?"}),Object(s.jsx)("div",{className:"answer",children:"A) ... these things take years. Right now it's just me - at the current rate of progress it'll be done around 2030!"}),Object(s.jsx)("div",{className:"question",children:"Q) What about Twelve Tails (12T)? Have you uncovered anything cool yet?"}),Object(s.jsxs)("div",{className:"answer",children:["A) There's very little in terms of 12T content left in BFD (see ",Object(s.jsx)("a",{href:"https://tcrf.net/Conker%27s_Bad_Fur_Day",target:"_blank",rel:"noreferrer",children:"TCRF"}),"). in terms of code - probably a lot has been re-used/re-cycled."]}),Object(s.jsx)("div",{className:"question",children:"Q) Ok, then what about the DEBUG and ECTS ROMs?"}),Object(s.jsx)("div",{className:"answer",children:"A) The DEBUG ROM is very similar in terms of layout to the retail ROMs, I expect much of the code/assets are the same too. ECTS ROM does not have the same layout and so needs further investigation."}),Object(s.jsx)("div",{className:"question",children:"Q) I'm in. What can I do to help?"}),Object(s.jsxs)("div",{className:"answer",children:["A) Great! Checkout the ",Object(s.jsx)("a",{href:"https://github.com/mkst/conker/wiki/Contributing",target:"_blank",rel:"noreferrer",children:"Contributing"})," page on the ",Object(s.jsx)("a",{href:"https://github.com/mkst/conker/wiki",target:"_blank",rel:"noreferrer",children:"Wiki"})," or find me on Discord (mkst#4741)."]}),Object(s.jsx)("div",{className:"question",children:"Q) Damn, this website is horrible."}),Object(s.jsx)("div",{className:"answer",children:"A) Not really a question... But yeah, feel free to improve it!"})]})}),v=n(5),x=n.n(v),O=(n(31),function(e){var t=e.data;if(null===t||null==t)return null;if(-1===Object.keys(t).indexOf("summary"))return null;var n=t.summary[t.summary.length-1].summary[0],a=n.c,r=n.total,i=n.c_functions,c=n.total_functions,o=a/r*100;return Object(s.jsx)("div",{className:"current-progress",children:Object(s.jsx)(x.a,{data:[{title:o.toFixed(2)+"<br>%",values:[a,r-a],labels:["C","ASM"],type:"pie",hole:.66,textinfo:"none",marker:{colors:["#ffde08","rgba(0,0,0,0.1)"]},domain:{row:0,column:0},direction:"clockwise",sort:!1,name:"bytes"},{title:i+"<br>of<br>"+c,values:[i,c-i],labels:["C","ASM"],type:"pie",hole:.66,textinfo:"none",marker:{colors:["#ffde08","rgba(0,0,0,0.1)"]},domain:{row:0,column:1},direction:"clockwise",sort:!1,name:"functions"}],layout:{font:{family:"Lithos Black Bold",size:20,color:"#111"},grid:{rows:1,columns:2},margin:{t:10,b:"15",l:0,r:0},showlegend:!1,paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"rgba(0,0,0,0)",hovermode:!1},config:{displayModeBar:!1,responsive:!0},style:{width:"100%",height:"100%"}})})}),g=(n(32),function(e){var t=e.data;if(null===t||null==t)return null;if(-1===Object.keys(t).indexOf("summary"))return null;for(var n=[],a=[],r=[],i=[],c=[],o=0;o<t.summary.length;o++){var l=t.summary[o],d=l.date,u=new Date(0);u.setUTCSeconds(d);for(var h=l.summary,b=0;b<h.length;b++){var m=h[b],j=m.c,f=m.total,v=m.c_functions,O=m.total_functions;n.push(u);var g=j/f*100;a.push(g),r.push(g.toFixed(2)+"%"),i.push(v/O*100),c.push(v+"/"+O)}}return Object(s.jsx)("div",{className:"historic-progress",children:Object(s.jsx)(x.a,{data:[{x:n,y:a,text:r,name:"bytes",mode:"lines",fill:"tozeroy",marker:{color:"#382506"}},{x:n,y:i,text:c,name:"functions",mode:"lines",fill:"tozeroy",visible:"legendonly",marker:{color:"#6a4108"}}],layout:{font:{family:"Lithos Black Bold",color:"#111"},margin:{t:20,b:40,l:40,r:40},showlegend:!0,legend:{orientation:"h"},xaxis:{showgrid:!1},yaxis:{title:"Percentage Complete",showgrid:!1},paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"rgba(0,0,0,0)"},config:{displayModeBar:!1,responsive:!0},style:{width:"100%",height:"100%"}})})}),p=(n(33),function(){var e=n(34);return Object(s.jsxs)("div",{className:"panel",children:[Object(s.jsx)("div",{className:"panel-headline",children:"CBFD Decomp Current Progress:"}),Object(s.jsx)(O,{data:e}),Object(s.jsx)("div",{className:"panel-headline",children:"Historic Progress:"}),Object(s.jsx)(g,{data:e})]})}),y=function(){var e=Object(a.useState)("progress"),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(m,{activePanelHook:[n,r]}),Object(s.jsx)(l,{condition:"progress"===n,children:Object(s.jsx)(p,{})}),Object(s.jsx)(l,{condition:"info"===n,children:Object(s.jsx)(j,{})}),Object(s.jsx)(l,{condition:"faq"===n,children:Object(s.jsx)(f,{})})]})};n(35);var k=function(){return Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(y,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),N()}],[[36,1,2]]]);
//# sourceMappingURL=main.e0086062.chunk.js.map