(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=(n(2),n(0));n(3);const r=Object(o.d)("<div></div>",2),a=Object(o.d)('<div class="App"><header class="App-header"></header></div>',4),i=Object(o.d)("<div>Loading</div>",2),d=Object(o.d)('<img width="100%">',1);var l=function(){const[e,t]=Object(c.h)([]),[n]=Object(c.f)(()=>async function e(n){let o=await fetch(n).then(e=>e.json());return console.log(o),o.filter(e=>null==e.download_url).map(n=>e(n.url).then(e=>t(t=>t.concat(e)))),o}("https://api.github.com/repos/catppuccin/wallpapers/contents"));return(()=>{const t=a.cloneNode(!0),l=t.firstChild;return Object(o.a)(l,Object(c.c)(c.b,{get when(){return!n.loading},get children(){const t=r.cloneNode(!0);return t.style.setProperty("display","grid"),t.style.setProperty("grid-template-columns","repeat(3, 1fr)"),t.style.setProperty("padding","4rem"),t.style.setProperty("gap","3rem"),Object(o.a)(t,Object(c.c)(c.a,{get each(){return e()},get fallback(){return i.cloneNode(!0)},children:e=>(()=>{const t=d.cloneNode(!0);return Object(c.e)(n=>{const c=e.download_url,r=e.name,a=e.name;return c!==n._v$&&Object(o.c)(t,"src",n._v$=c),r!==n._v$2&&Object(o.c)(t,"alt",n._v$2=r),a!==n._v$3&&Object(o.c)(t,"title",n._v$3=a),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()})),t}})),t})()};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(o.b)(l,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}],[[4,1,2]]]);