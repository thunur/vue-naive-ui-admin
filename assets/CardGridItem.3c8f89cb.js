var a=Object.defineProperty,r=Object.defineProperties,e=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,p=(r,e,s)=>e in r?a(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;import{a as n}from"./useNaiveInternal.58a61ad8.js";import{u as l}from"./useDesign.1773b4b7.js";import{G as i,q as b,V as c,W as d,X as u,N as f,Z as g,u as m,o as y,aN as v,a6 as j,Y as O,aa as _,ab as x,ac as C,ad as N,b0 as P,aM as h}from"./vendor.07696a3b.js";import{p as w}from"./propTypes.eec1be73.js";const I=i({setup(a){const{prefixCls:r}=l("card-grid"),e=n("Card","borderColor"),s=b((()=>({backgroundColor:e.value,transition:"background-color var(--app-transition-duration) var(--app-bezier)",paddingTop:"1px"})));return(a,e)=>{const o=v;return c(),d(o,g({class:m(r),style:m(s)},m(y)(a.$attrs,["y-gap","x-gap"]),{"y-gap":1,"x-gap":1}),{default:u((()=>[f(a.$slots,"default")])),_:3},16,["class","style"])}}});const $=i((k=((a,r)=>{for(var e in r||(r={}))o.call(r,e)&&p(a,e,r[e]);if(s)for(var e of s(r))t.call(r,e)&&p(a,e,r[e]);return a})({},{__GRID_ITEM__:!0}),D={props:{offset:w.stringNumber,span:w.stringNumber,suffix:w.bool},setup(a){const r=a,{prefixCls:e}=l("card-grid-item"),s=j(),o=b((()=>y(s,["hoverable","bordered"])));return(a,s)=>{const t=P,p=h;return c(),d(p,g(r,{class:m(e)}),{default:u((()=>[O(t,g({class:"card-grid--hoverable",hoverable:"",bordered:!1},m(o)),_({_:2},[x(Object.keys(a.$slots),(r=>({name:r,fn:u((e=>[f(a.$slots,r,C(N(e||{})))]))})))]),1040)])),_:3},16,["class"])}}},r(k,e(D))));var k,D;export{$ as _,I as a};
