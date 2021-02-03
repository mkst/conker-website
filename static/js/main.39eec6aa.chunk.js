(this["webpackJsonpconker-website"]=this["webpackJsonpconker-website"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),i=n.n(c),o=n(9),r=n.n(o),a=(n(17),n(3)),l=(n(18),function(e){var t=e.condition,n=e.children;return t?Object(s.jsx)(s.Fragment,{children:n}):null}),u=(n(19),function(e){var t=e.item,n=e.active,c=e.onClick,i=n?"active":"";return Object(s.jsx)("div",{className:"menu-item "+i,onClick:c,children:t})}),d=n(10),j=n(11),b=(n(25),function(e){var t=e.url;return Object(s.jsx)("div",{className:"github",children:Object(s.jsxs)("a",{href:t,alt:"Check it out on GitHub",target:"_blank",rel:"noreferrer",children:[Object(s.jsx)("span",{className:"github-icon",children:Object(s.jsx)(d.a,{icon:j.a})}),Object(s.jsx)("span",{className:"github-text",children:"GitHub"})]})})}),h=(n(26),function(e){var t=e.activePanelHook,n=Object(a.a)(t,2),c=n[0],i=n[1];return Object(s.jsxs)("div",{className:"menu",children:[Object(s.jsxs)("div",{className:"menu-items-left",children:[Object(s.jsx)(u,{item:"progress",active:"progress"===c,onClick:function(){return i("progress")}}),Object(s.jsx)(u,{item:"faq",active:"faq"===c,onClick:function(){return i("faq")}})]}),Object(s.jsx)("div",{className:"menu-items-right",children:Object(s.jsx)(b,{url:"https://github.com/mkst/conker"})})]})}),f=(n(8),function(){return Object(s.jsxs)("div",{className:"panel",children:[Object(s.jsx)("div",{className:"panel-headline",children:"Welcome to the Conker's Bad Fur Day decompilation website!"}),Object(s.jsx)("div",{className:"panel-text"})]})}),m=(n(27),function(){return Object(s.jsxs)("div",{className:"panel",children:[Object(s.jsx)("div",{className:"panel-headline",children:"Frequently Asked Questions:"}),Object(s.jsx)("div",{className:"question",children:"Q) When is it going to be done?"}),Object(s.jsx)("div",{className:"answer",children:"A) ... these things take years. Right now it's just me - at the current rate of progress it'll be done around 2030!"}),Object(s.jsx)("div",{className:"question",children:"Q) What about Twelve Tails (12T)? Have you uncovered anything cool yet?"}),Object(s.jsxs)("div",{className:"answer",children:["A) There's very little in terms of 12T content left in BFD (see ",Object(s.jsx)("a",{href:"https://tcrf.net/Conker%27s_Bad_Fur_Day",target:"_blank",rel:"noreferrer",children:"TCRF"}),"). in terms of code - probably a lot has been re-used/re-cycled."]}),Object(s.jsx)("div",{className:"question",children:"Q) Ok, then what about the DEBUG and ECTS ROMs?"}),Object(s.jsx)("div",{className:"answer",children:"A) The DEBUG ROM is very similar in terms of layout to the retail ROMs, I expect much of the code/assets are the same too. ECTS ROM does not have the same layout and so needs further investigation."}),Object(s.jsx)("div",{className:"question",children:"Q) I'm in. What can I do to help?"}),Object(s.jsxs)("div",{className:"answer",children:["A) Great! Checkout the ",Object(s.jsx)("a",{href:"https://github.com/mkst/conker/wiki/Contributing",target:"_blank",rel:"noreferrer",children:"Contributing"})," page on the ",Object(s.jsx)("a",{href:"https://github.com/mkst/conker/wiki",target:"_blank",rel:"noreferrer",children:"Wiki"})," or find me on Discord (mkst#4741)."]}),Object(s.jsx)("div",{className:"question",children:"Q) Damn, this website is horrible."}),Object(s.jsxs)("div",{className:"answer",children:["A) Not really a question... But yeah, feel free to ",Object(s.jsx)("a",{href:"https://github.com/mkst/conker-website",target:"_blank",rel:"noreferrer",children:"improve it!"})]})]})}),O=n(6),g=n.n(O),x=(n(31),function(e){var t=e.data,n=e.version,i=e.section,o=Object(c.useState)(null),r=Object(a.a)(o,2),l=r[0],u=r[1],d=Object(c.useState)(null),j=Object(a.a)(d,2),b=j[0],h=j[1];return Object(c.useEffect)((function(){if(null===t||null==t)return null;if(-1===Object.keys(t).indexOf("progress"))return null;for(var e=0;e<t.progress.length;e++)if(t.progress[e].version===n)for(var s=t.progress[e].sections,c=0;c<s.length;c++)if(s[c].section===i){u({c:s[c].c,c_functions:s[c].c_functions,percent:s[c].percent,section:s[c].section,total:s[c].total,total_functions:s[c].total_functions});break}}),[t,n,i]),Object(c.useEffect)((function(){null!==l&&h(Object(s.jsx)(g.a,{data:[{title:l.percent.toFixed(2)+"<br>%",values:[l.c,l.total-l.c],labels:["C","ASM"],type:"pie",hole:.66,textinfo:"none",marker:{colors:["#ffde08","rgba(0,0,0,0.1)"]},domain:{row:0,column:0},direction:"clockwise",sort:!1,name:"bytes"},{title:l.c_functions+"<br>of<br>"+l.total_functions,values:[l.c_functions,l.total_functions-l.c_functions],labels:["C","ASM"],type:"pie",hole:.66,textinfo:"none",marker:{colors:["#ffde08","rgba(0,0,0,0.1)"]},domain:{row:0,column:1},direction:"clockwise",sort:!1,name:"functions"}],layout:{font:{family:"Lithos Black Bold",size:20,color:"#111"},grid:{rows:1,columns:2},margin:{t:10,b:"15",l:0,r:0},showlegend:!1,paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"rgba(0,0,0,0)",hovermode:!1},config:{displayModeBar:!1,responsive:!0},style:{width:"100%",height:"100%"}}))}),[l]),Object(s.jsx)("div",{className:"current-progress",children:b})}),v=(n(32),function(e){var t=e.data,n=e.version,i=e.section,o=Object(c.useState)(null),r=Object(a.a)(o,2),l=r[0],u=r[1],d=Object(c.useState)(null),j=Object(a.a)(d,2),b=j[0],h=j[1];return Object(c.useEffect)((function(){if(null===t||null==t)return null;if(console.log(t),-1===Object.keys(t).indexOf("commits"))return null;for(var e=[],s=[],c=[],o=[],r=[],a=0;a<t.commits.length;a++){var l=t.commits[a],d=l.date,j=new Date(0);j.setUTCSeconds(d);for(var b=l.progress,h=0;h<b.length;h++){var f=b[h];if(f.version===n)for(var m=0;m<f.sections.length;m++)if(f.sections[m].section==i){f.sections[m].c,f.sections[m].total;var O=f.sections[m].c_functions,g=f.sections[m].total_functions,x=f.sections[m].percent;e.push(j),s.push(x),c.push(x.toFixed(2)+"%"),o.push(O/g*100),r.push(O+"/"+g)}}}console.log(e,s),u({x:e,y_bytes:s,y_bytes_text:c,y_functions:o,y_functions_text:r})}),[t,n,i]),Object(c.useEffect)((function(){null!==l&&h(Object(s.jsx)(g.a,{data:[{x:l.x,y:l.y_bytes,text:l.y_bytes_text,name:"bytes",mode:"lines",fill:"tozeroy",marker:{color:"#382506"}},{x:l.x,y:l.y_functions,text:l.y_functions_text,name:"functions",mode:"lines",fill:"tozeroy",visible:"legendonly",marker:{color:"#6a4108"}}],layout:{font:{family:"Lithos Black Bold",color:"#111"},margin:{t:20,b:40,l:40,r:40},showlegend:!0,legend:{orientation:"h"},xaxis:{showgrid:!1},yaxis:{title:"Percentage Complete",showgrid:!1},paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"rgba(0,0,0,0)"},config:{displayModeBar:!1,responsive:!0},style:{width:"100%",height:"100%"}}))}),[l]),Object(s.jsx)("div",{className:"historic-progress",children:b})}),p=(n(33),function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(null),r=Object(a.a)(o,2),l=r[0],u=r[1],d="game";return Object(c.useEffect)((function(){fetch("/commits.json").then((function(e){return e.json()})).then(i)}),[i]),Object(c.useEffect)((function(){fetch("/latest.json").then((function(e){return e.json()})).then(u)}),[u]),Object(s.jsxs)("div",{className:"panel",children:[Object(s.jsx)("div",{className:"panel-headline",children:"CBFD Decomp Current Progress:"}),Object(s.jsx)(x,{data:l,version:"us",section:d}),Object(s.jsx)("div",{className:"panel-headline",children:"Historic Progress:"}),Object(s.jsx)(v,{data:n,version:"us",section:d})]})}),y=function(){var e=Object(c.useState)("progress"),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(h,{activePanelHook:[n,i]}),Object(s.jsx)(l,{condition:"progress"===n,children:Object(s.jsx)(p,{})}),Object(s.jsx)(l,{condition:"info"===n,children:Object(s.jsx)(f,{})}),Object(s.jsx)(l,{condition:"faq"===n,children:Object(s.jsx)(m,{})})]})};n(34);var k=function(){return Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(y,{})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),i(e),o(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),_()}],[[35,1,2]]]);
//# sourceMappingURL=main.39eec6aa.chunk.js.map