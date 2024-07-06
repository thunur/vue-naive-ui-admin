import{_ as e}from"./Icon-BBFjs19F.js";import{y as r,x as n,z as t,A as o,d as a,C as s,G as i,fB as l,a5 as c,F as u,i as m,H as d,k as h,a6 as v,r as p,D as b,dN as f,f7 as g,s as x,aa as k,V as C,aq as y,ag as z,ay as B,X as w,o as R,e as L,w as S,c as _,O as j,a4 as P,aX as E,f as I,q as T,t as $}from"./index-DRiF00Hx.js";import{u as H}from"./useRootSetting-CvQdJ3NP.js";import"./propTypes-BrA6lfYr.js";import"./useDesign-BvV_xiJk.js";const O=r("breadcrumb","\n white-space: nowrap;\n cursor: default;\n line-height: var(--n-item-line-height);\n",[n("ul","\n list-style: none;\n padding: 0;\n margin: 0;\n "),n("a","\n color: inherit;\n text-decoration: inherit;\n "),r("breadcrumb-item","\n font-size: var(--n-font-size);\n transition: color .3s var(--n-bezier);\n display: inline-flex;\n align-items: center;\n ",[r("icon","\n font-size: 18px;\n vertical-align: -.2em;\n transition: color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n "),n("&:not(:last-child)",[t("clickable",[o("link","\n cursor: pointer;\n ",[n("&:hover","\n background-color: var(--n-item-color-hover);\n "),n("&:active","\n background-color: var(--n-item-color-pressed); \n ")])])]),o("link","\n padding: 4px;\n border-radius: var(--n-item-border-radius);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n position: relative;\n ",[n("&:hover","\n color: var(--n-item-text-color-hover);\n ",[r("icon","\n color: var(--n-item-text-color-hover);\n ")]),n("&:active","\n color: var(--n-item-text-color-pressed);\n ",[r("icon","\n color: var(--n-item-text-color-pressed);\n ")])]),o("separator","\n margin: 0 8px;\n color: var(--n-separator-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n "),n("&:last-child",[o("link","\n font-weight: var(--n-font-weight-active);\n cursor: unset;\n color: var(--n-item-text-color-active);\n ",[r("icon","\n color: var(--n-item-text-color-active);\n ")]),o("separator","\n display: none;\n ")])])]),A=v("n-breadcrumb"),D=a({name:"Breadcrumb",props:Object.assign(Object.assign({},i.props),{separator:{type:String,default:"/"}}),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=s(e),t=i("Breadcrumb","-breadcrumb",O,l,e,r);c(A,{separatorRef:u(e,"separator"),mergedClsPrefixRef:r});const o=m((()=>{const{common:{cubicBezierEaseInOut:e},self:{separatorColor:r,itemTextColor:n,itemTextColorHover:o,itemTextColorPressed:a,itemTextColorActive:s,fontSize:i,fontWeightActive:l,itemBorderRadius:c,itemColorHover:u,itemColorPressed:m,itemLineHeight:d}}=t.value;return{"--n-font-size":i,"--n-bezier":e,"--n-item-text-color":n,"--n-item-text-color-hover":o,"--n-item-text-color-pressed":a,"--n-item-text-color-active":s,"--n-separator-color":r,"--n-item-color-hover":u,"--n-item-color-pressed":m,"--n-item-border-radius":c,"--n-font-weight-active":l,"--n-item-line-height":d}})),a=n?d("breadcrumb",void 0,o,e):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:o,themeClass:null==a?void 0:a.themeClass,onRender:null==a?void 0:a.onRender}},render(){var e;return null===(e=this.onRender)||void 0===e||e.call(this),h("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},h("ul",null,this.$slots))}}),V=a({name:"BreadcrumbItem",props:{separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},setup(e,{slots:r}){const n=x(A,null);if(!n)return()=>null;const{separatorRef:t,mergedClsPrefixRef:o}=n,a=((e=(g?window:null))=>{const r=()=>{const{hash:r,host:n,hostname:t,href:o,origin:a,pathname:s,port:i,protocol:l,search:c}=(null==e?void 0:e.location)||{};return{hash:r,host:n,hostname:t,href:o,origin:a,pathname:s,port:i,protocol:l,search:c}},n=()=>{t.value=r()},t=p(r());return b((()=>{e&&(e.addEventListener("popstate",n),e.addEventListener("hashchange",n))})),f((()=>{e&&(e.removeEventListener("popstate",n),e.removeEventListener("hashchange",n))})),t})(),s=m((()=>e.href?"a":"span")),i=m((()=>a.value.href===e.href?"location":null));return()=>{const{value:n}=o;return h("li",{class:[`${n}-breadcrumb-item`,e.clickable&&`${n}-breadcrumb-item--clickable`]},h(s.value,{class:`${n}-breadcrumb-item__link`,"aria-current":i.value,href:e.href,onClick:e.onClick},r),h("span",{class:`${n}-breadcrumb-item__separator`,"aria-hidden":"true"},k(r.separator,(()=>{var r;return[null!==(r=e.separator)&&void 0!==r?r:t.value]}))))}}}),q=a({name:"LayoutBreadcrumb",setup(){const e=p([]),{currentRoute:r}=y(),{getShowBreadCrumbIcon:n}=H(),{t:t}=z();return B((()=>{const n=r.value.matched,o=[],a=E(n,(e=>{const{meta:r,name:n}=e;if(!r)return!!n;const{title:t,hideBreadcrumb:o,hideMenu:a}=r;return!(!t||o||a)}));a.forEach(((e,r)=>{var n;const s=a.length-1!==r?e.path:void 0;o.push({link:s,title:t(null==e?void 0:e.meta.title),icon:null==(n=null==e?void 0:e.meta)?void 0:n.icon})})),o.length&&(e.value=o)})),{t:t,routesList:e,getShowBreadCrumbIcon:n}}}),F={key:2};const X=C(q,[["render",function(r,n,t,o,a,s){const i=e,l=w("router-link"),c=V,u=D;return R(),L(u,null,{default:S((()=>[(R(!0),_(P,null,j(r.routesList,(({title:e,link:n,icon:t})=>(R(),L(c,{key:n},{default:S((()=>[r.getShowBreadCrumbIcon&&t?(R(),L(i,{key:0,class:"mr-1 text-18px",icon:t},null,8,["icon"])):I("",!0),n?(R(),L(l,{key:1,to:n},{default:S((()=>[T($(e),1)])),_:2},1032,["to"])):(R(),_("span",F,$(e),1))])),_:2},1024)))),128))])),_:1})}]]);export{X as default};