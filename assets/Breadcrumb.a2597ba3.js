import{_ as e}from"./Icon.6be87540.js";import{G as t,v as a,n as s,ar as o,W as n,X as r,R as u,cK as i,V as l,a9 as c,ab as m,ap as d,aF as p,as as b,b6 as f,cL as h}from"./vendor.07696a3b.js";import{u as v}from"./useRootSetting.c150df23.js";import{m as g,b as k,a1 as j}from"./index.5eb97f6e.js";import"./propTypes.eec1be73.js";import"./useDesign.2e5b3993.js";const y=t({name:"LayoutBreadcrumb",setup(){const e=a([]),{currentRoute:t}=s(),{getShowBreadCrumbIcon:n}=v(),{t:r}=k();return o((()=>{const a=t.value.matched,s=[],o=j(a,(e=>{const{meta:t,name:a}=e;if(!t)return!!a;const{title:s,hideBreadcrumb:o,hideMenu:n}=t;return!(!s||o||n)}));o.forEach(((e,t)=>{var a;const n=o.length-1!==t?e.path:void 0;s.push({link:n,title:r(null==e?void 0:e.meta.title),icon:null==(a=null==e?void 0:e.meta)?void 0:a.icon})})),s.length&&(e.value=s)})),{t:r,routesList:e,getShowBreadCrumbIcon:n}}}),B={key:2};var x=g(y,[["render",function(t,a,s,o,v,g){const k=e,j=u("router-link"),y=h,x=i;return l(),n(x,null,{default:r((()=>[(l(!0),c(f,null,m(t.routesList,(({title:e,link:a,icon:s})=>(l(),n(y,{key:a},{default:r((()=>[t.getShowBreadCrumbIcon&&s?(l(),n(k,{key:0,class:"mr-1 text-18px",icon:s},null,8,["icon"])):d("",!0),a?(l(),n(j,{key:1,to:a},{default:r((()=>[p(b(e),1)])),_:2},1032,["to"])):(l(),c("span",B,b(e),1))])),_:2},1024)))),128))])),_:1})}]]);export{x as default};