(this["webpackJsonpuam-alk"]=this["webpackJsonpuam-alk"]||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(16),a=n.n(r),i=(n(22),n(10)),u=n(3),l=n(2),j=function(e,t,n){var c=e.slice();return c.splice(t,1,n),c},o=function(e,t){var n,c=new Array(e).fill(1),s=new Array(e).fill(t),r=[];for(r.push(c);!c.every((function(e,t){return e===s[t]}));){if(c[n=e-1]<t)c=j(c,n,c[n]+1);else if(c[n]===t){for(;c[n]===t;)n--;for(c=j(c,n,c[n]+1),n++;n<e;)c=j(c,n,1),n++}r.push(c)}return r},b=n(0),p=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(1),a=Object(l.a)(r,2),i=a[0],u=a[1],j=Object(c.useState)(null),p=Object(l.a)(j,2),h=p[0],m=p[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"heading",children:"Zadanie 1"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=o(parseInt(n),parseInt(i));m(t)},className:"form",children:[Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 n:",Object(b.jsx)("input",{type:"number",min:"1",name:"n",className:"input",placeholder:n,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 k:",Object(b.jsx)("input",{type:"number",min:"1",name:"k",className:"input",placeholder:i,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("button",{type:"submit",className:"button",children:["Generuj dla n=",n," i k=",i]})]}),h&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h3",{className:"output-size",children:["Number of elements: ",h.length]}),Object(b.jsx)("ul",{className:"output-list",children:h.map((function(e){return Object(b.jsx)("li",{className:"output-list__item",children:e.reduce((function(e,t){return e.concat(t).concat(",")}),[]).slice(0,-1)},e)}))})]})]})},h=function(e,t,n){var c=e.slice();return c.splice(t,1,n),c},m=function(e){var t,n,c=new Array(e).fill(1),s=[];for(s.push(c);;){if(c[t=e-1]===t+1||9===c[t]){for(;c[t]===t+1||9===c[t];)t--;if(t<0)break;for(c=h(c,t,c[t]+1),t++;t<e;)c=h(c,t,1),t++}else c[t]<t+1&&(n=c[t]+1<9?c[t]+1:9,c=h(c,t,n));s.push(c)}return s},O=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),a=Object(l.a)(r,2),i=a[0],u=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"heading",children:"Zadanie 2"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=m(parseInt(n));u(t)},className:"form",children:[Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 n:",Object(b.jsx)("input",{type:"number",min:"1",max:"9",name:"n",className:"input",placeholder:n,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("button",{type:"submit",className:"button",children:["Generuj dla n=",n]})]}),i&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h3",{className:"output-size",children:["Number of elements: ",i.length]}),Object(b.jsx)("ul",{className:"output-list",children:i.map((function(e){return Object(b.jsx)("li",{className:"output-list__item",children:e.reduce((function(e,t){return e.concat(t).concat(",")}),[]).slice(0,-1)},e)}))})]})]})},d=function(e){for(var t=[],n=1;n<=e;n++)t.push(n);return t},f=function(e,t,n){var c=e.slice();return c.splice(t,1,n),c},x=function(e,t){var n,c=d(e),s=[];for(s.push(c);;){if(c[n=e-1]===t-e+n+1){for(;c[n]===t-e+n+1;)n--;if(n<0)break;for(c=f(c,n,c[n]+1),n++;n<e;)c=f(c,n,c[n-1]+1),n++}else c[n]<t&&(c=f(c,n,c[n]+1));s.push(c)}return s},N=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(1),a=Object(l.a)(r,2),i=a[0],u=a[1],j=Object(c.useState)(null),o=Object(l.a)(j,2),p=o[0],h=o[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"heading",children:"Zadanie 3"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=x(parseInt(n),parseInt(i));h(t)},className:"form",children:[Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 n:",Object(b.jsx)("input",{type:"number",min:"1",name:"n",className:"input",placeholder:n,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 k:",Object(b.jsx)("input",{type:"number",min:n,name:"k",className:"input",placeholder:i,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("button",{type:"submit",className:"button",children:["Generuj dla n=",n," i k=",i]})]}),p&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h3",{className:"output-size",children:["Number of elements: ",p.length]}),Object(b.jsx)("ul",{className:"output-list",children:p.map((function(e){return Object(b.jsx)("li",{className:"output-list__item",children:e.reduce((function(e,t){return e.concat(t).concat(",")}),[]).slice(0,-1)},e)}))})]})]})},g=function(e){var t,n=[],c=new Array(e).fill(0);for(n.push(c);;){if(t=e-1,c.filter((function(e){return 1===e})).length%2===0)c=v(c,t,1===c[t]?0:1);else{for(;0===c[t];)t--;if(0===t)break;c=v(c,t-1,1===c[t-1]?0:1)}n.push(c)}return n},v=function(e,t,n){var c=e.slice();return c.splice(t,1,n),c},y=function(e){var t,n=[];return 0===e?(n.push([]),n):(g(e).map((function(e){return t=[],e.filter((function(e,n){return 1===e?t.push(n+1):null})),n.push(t)})),n)},S=function(e){var t=e.number,n=Object(c.useState)(0),s=Object(l.a)(n,2),r=s[0],a=s[1],i=Object(c.useState)(null),u=Object(l.a)(i,2),j=u[0],o=u[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{className:"heading",children:["Zadanie ",t]}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=y(parseInt(r));o(t)},className:"form",children:[Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 n:",Object(b.jsx)("input",{type:"number",min:"0",name:"n",className:"input",placeholder:r,onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)("button",{type:"submit",className:"button",children:["Generuj dla n=",r]})]}),j&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h3",{className:"output-size",children:["Number of elements: ",j.length]}),Object(b.jsxs)("ul",{className:"output-list",children:[Object(b.jsx)("li",{className:"output-list__item",children:"\u2205"},"empty"),j.map((function(e,t){return Object(b.jsx)("li",{className:"output-list__item",children:e.reduce((function(e,t){return e.concat(t).concat(",")}),[]).slice(0,-1)},t)}))]})]})]})};var _=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsx)(O,{}),Object(b.jsx)(N,{}),Object(b.jsx)(S,{number:"4"})]})},w=function(e){return e.includes(",")?e.split(",").map((function(e){return parseInt(e)})):[parseInt(e)]},z=function(e){return e.length!==new Set(e).size},k=function(e,t){for(var n=0;n<e.length;n++)if(parseInt(e[n])>t)return!0;return!1},F=function(e,t){var n=[],c=0,s=w(t);if(""===t||s.length>e||z(s)||k(s,e))return"to nie jest podzbi\xf3r";for(var r=1;r<=e;r++)s.indexOf(r)>=0?n.push(1):n.push(0);for(var a=0;a<n.length;a++)1===n[a]&&(c+=Math.pow(2,n.length-a-1));return c},I=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(l.a)(r,2),i=a[0],u=a[1],j=Object(c.useState)(null),o=Object(l.a)(j,2),p=o[0],h=o[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"heading",children:"Zadanie 1"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=F(n,i);h(t)},className:"form",children:[Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 n:",Object(b.jsx)("input",{type:"number",min:"1",name:"n",placeholder:n,className:"input",onChange:function(e){s(e.target.value)}})]}),Object(b.jsxs)("p",{children:["Wpisz podzbi\xf3r T:",Object(b.jsx)("input",{type:"text",name:"t",placeholder:"np. 1,3,12",pattern:"((([0-9]{1,},){1,})||[0-9]{1,})+",className:"input",onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("button",{type:"submit",className:"button",children:["Generuj dla n=",n]})]}),null!==p&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"output-size",children:"Rank: "}),Object(b.jsx)("ul",{className:"output-list",children:Object(b.jsx)("li",{className:"output-list__item",children:p})})]})]})},W=function(e){var t=[];return e.filter((function(e,n){return 1===e?t.push(n+1):null})),t},C=function(e,t){for(var n=t,c=[],s=0;s<e;s++)n>=Math.pow(2,e-s-1)?(c.push(1),n-=Math.pow(2,e-s-1)):c.push(0);return c},D=function(e,t){var n=C(e,t);return W(n)},G=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(0),a=Object(l.a)(r,2),i=a[0],u=a[1],j=Object(c.useState)(null),o=Object(l.a)(j,2),p=o[0],h=o[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"heading",children:"Zadanie 2"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(D(parseInt(n),parseInt(i)))},className:"form",children:[Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 n:",Object(b.jsx)("input",{type:"number",min:"1",name:"n",placeholder:n,className:"input",onChange:function(e){s(e.target.value)}})]}),Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 r:",Object(b.jsx)("input",{type:"number",name:"r",placeholder:i,min:"0",max:Math.pow(2,n)-1,className:"input",onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("button",{type:"submit",className:"button",children:["Generuj dla n=",n," i r=",i]})]}),p&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"output-size",children:"Podzbi\xf3r: "}),Object(b.jsx)("ul",{className:"output-list",children:p.length?Object(b.jsx)("li",{className:"output-list__item",children:p.reduce((function(e,t){return e.concat(t).concat(",")}),[]).slice(0,-1)}):Object(b.jsx)("li",{className:"output-list__item",children:"\u2205"},"empty")})]})]})},M=[],Z={n:1,k:1},A=function e(t,n){if(n===Z.n)M.push(t);else for(var c=0;c<Z.k;c++){var s=t.slice();s.push(c+1),e(s,n+1)}},J=function(e,t){M=[],Z={n:e,k:t};return A([],0),M},P=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(1),a=Object(l.a)(r,2),i=a[0],u=a[1],j=Object(c.useState)(null),o=Object(l.a)(j,2),p=o[0],h=o[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"heading",children:"Zadanie 3"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(J(parseInt(n),parseInt(i)))},className:"form",children:[Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 n:",Object(b.jsx)("input",{type:"number",min:"1",name:"n",placeholder:n,className:"input",onChange:function(e){s(e.target.value)}})]}),Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 k:",Object(b.jsx)("input",{type:"number",min:"1",name:"k",placeholder:i,className:"input",onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("button",{type:"submit",className:"button",children:["Generuj dla n=",n," i k=",i]})]}),p&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h3",{className:"output-size",children:["Number of elements: ",p.length]}),Object(b.jsx)("ul",{className:"output-list",children:p.map((function(e,t){return Object(b.jsx)("li",{className:"output-list__item",children:e.reduce((function(e,t){return e.concat(t).concat(",")}),[]).slice(0,-1)},t)}))})]})]})};var R=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{}),Object(b.jsx)(G,{}),Object(b.jsx)(P,{})]})},T=function(e){return e.includes(",")?e.split(",").map((function(e){return parseInt(e)})):[parseInt(e)]},B=function(e){return e.length!==new Set(e).size},E=function(e,t){for(var n=0;n<e.length;n++)if(parseInt(e[n])>t||parseInt(e[n])<0)return!0;return!1},K=function(e,t){var n=[],c=T(t);if(""===t||c.length>e||B(c)||E(c,e))return"to nie jest podzbi\xf3r";for(var s=1;s<=e;s++)c.indexOf(s)>=0?n.push(1):n.push(0);for(var r=[],a=0,i=0;i<e;i++)a^=n[i],r.push(a);return parseInt(r.join(""),2)},q=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(l.a)(r,2),i=a[0],u=a[1],j=Object(c.useState)(null),o=Object(l.a)(j,2),p=o[0],h=o[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"heading",children:"Zadanie 2"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=K(n,i);h(t)},className:"form",children:[Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 n:",Object(b.jsx)("input",{type:"number",min:"1",name:"n",placeholder:n,className:"input",onChange:function(e){s(e.target.value)}})]}),Object(b.jsxs)("p",{children:["Wpisz podzbi\xf3r T:",Object(b.jsx)("input",{type:"text",name:"t",placeholder:"np. 1,3,12",pattern:"((([0-9]{1,},){1,})||[0-9]{1,})+",className:"input",onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("button",{type:"submit",className:"button",children:["Generuj dla n=",n]})]}),null!==p&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"output-size",children:"Rank: "}),Object(b.jsx)("ul",{className:"output-list",children:Object(b.jsx)("li",{className:"output-list__item",children:p})})]})]})},H=function(e,t){for(var n=t,c=[],s=0;s<e;s++)n>=Math.pow(2,e-s-1)?(c.push(1),n-=Math.pow(2,e-s-1)):c.push(0);return c},L=function(e){var t=e.slice();return t.pop(),t.unshift(0),t},Q=function(e,t){for(var n=[],c=0;c<e.length;c++)n.push(e[c]^t[c]);return n},U=function(e){for(var t=[],n=0;n<e.length;n++)1===e[n]&&t.push(n+1);return t},V=function(e,t){if(t>Math.pow(2,e)-1||t<0||e<1)return"nieprawid\u0142owe dane wejsciowe";var n=H(e,t),c=L(n),s=Q(n,c);return U(s)},X=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(1),a=Object(l.a)(r,2),i=a[0],u=a[1],j=Object(c.useState)(null),o=Object(l.a)(j,2),p=o[0],h=o[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"heading",children:"Zadanie 3"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(V(parseInt(n),parseInt(i)))},className:"form",children:[Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 n:",Object(b.jsx)("input",{type:"number",min:"1",name:"n",placeholder:n,className:"input",onChange:function(e){s(e.target.value)}})]}),Object(b.jsxs)("p",{children:["Wpisz warto\u015b\u0107 r:",Object(b.jsx)("input",{type:"number",name:"r",placeholder:i,min:"0",max:Math.pow(2,n)-1,className:"input",onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("button",{type:"submit",className:"button",children:["Generuj dla n=",n," i r=",i]})]}),p&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"output-size",children:"Podzbi\xf3r: "}),Object(b.jsx)("ul",{className:"output-list",children:p.length?Object(b.jsx)("li",{className:"output-list__item",children:p.reduce((function(e,t){return e.concat(t).concat(",")}),[]).slice(0,-1)}):Object(b.jsx)("li",{className:"output-list__item",children:"\u2205"},"empty")})]})]})};var Y=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{number:"1"}),Object(b.jsx)(q,{}),Object(b.jsx)(X,{})]})};var $=function(){return Object(b.jsxs)("div",{className:"app-container",children:[Object(b.jsx)("h1",{className:"app-container__heading",children:"Algorytmy Kombinatoryczne"}),Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"nav-list",children:[Object(b.jsx)("li",{className:"nav-list__item",children:Object(b.jsx)(i.b,{to:"/lab1",className:"item__link",activeStyle:{fontWeight:"bold",textDecoration:"underline"},children:"lab1"})}),Object(b.jsx)("li",{className:"nav-list__item",children:Object(b.jsx)(i.b,{to:"/lab2",className:"item__link",activeStyle:{fontWeight:"bold",textDecoration:"underline"},children:"lab2"})}),Object(b.jsx)("li",{className:"nav-list__item",children:Object(b.jsx)(i.b,{to:"/lab3",className:"item__link",activeStyle:{fontWeight:"bold",textDecoration:"underline"},children:"lab3"})})]})}),Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:"/lab1",children:Object(b.jsx)(_,{})}),Object(b.jsx)(u.b,{path:"/lab2",children:Object(b.jsx)(R,{})}),Object(b.jsx)(u.b,{path:"/lab3",children:Object(b.jsx)(Y,{})}),Object(b.jsx)(u.b,{path:"/"}),Object(b.jsx)(u.a,{to:"/"})]})]})})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)($,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.bbafbd8d.chunk.js.map