var r=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(e,a,s)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s;import{a as n}from"./useNaiveInternal-D6dNh1ey.js";import{u as i}from"./useDesign-CZnxk_Lj.js";import{d as l,i as d,o as c,e as b,w as u,P as f,U as m,b as g,L as _,e8 as v,h as y,M as j,O,_ as x,Q as C,R as P}from"./index-BLWT44Eo.js";import{a as h,_ as w}from"./Grid-cihNI7Wf.js";import{p as I}from"./propTypes-BrA6lfYr.js";const G=l({__name:"CardGrid",setup(r){const{prefixCls:e}=i("card-grid"),a=n("Card","borderColor"),s=d((()=>({backgroundColor:a.value,transition:"background-color var(--app-transition-duration) var(--app-bezier)",paddingTop:"1px"})));return(r,a)=>{const t=h;return c(),b(t,m({class:g(e),style:s.value},g(_)(r.$attrs,["y-gap","x-gap"]),{"y-gap":1,"x-gap":1}),{default:u((()=>[f(r.$slots,"default")])),_:3},16,["class","style"])}}}),$=l((k=((r,e)=>{for(var a in e||(e={}))t.call(e,a)&&p(r,a,e[a]);if(s)for(var a of s(e))o.call(e,a)&&p(r,a,e[a]);return r})({},{__GRID_ITEM__:!0}),D={__name:"CardGridItem",props:{offset:I.stringNumber,span:I.stringNumber,suffix:I.bool},setup(r){const{prefixCls:e}=i("card-grid-item"),a=r,s=v(),t=d((()=>_(s,["hoverable","bordered"])));return(r,s)=>{const o=x,p=w;return c(),b(p,m(a,{class:g(e)}),{default:u((()=>[y(o,m({class:"card-grid--hoverable",hoverable:"",bordered:!1},t.value),j({_:2},[O(Object.keys(r.$slots),(e=>({name:e,fn:u((a=>[f(r.$slots,e,C(P(a||{})))]))})))]),1040)])),_:3},16,["class"])}}},e(k,a(D))));var k,D;export{$ as _,G as a};