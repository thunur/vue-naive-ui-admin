var e=(e,t,o)=>new Promise(((a,n)=>{var s=e=>{try{i(o.next(e))}catch(t){n(t)}},l=e=>{try{i(o.throw(e))}catch(t){n(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,l);i((o=o.apply(e,t)).next())}));import{_ as t}from"./PageWrapper.c7cbe323.js";import{S as o,U as a}from"./index.5eb97f6e.js";import{_ as n}from"./Icon.6be87540.js";import{aC as s,G as l,v as i,bV as r,V as u,W as c,X as d,a7 as f,Y as p,ca as b,aF as g,aW as v,c4 as m,aK as y,aL as _,b0 as h}from"./vendor.07696a3b.js";import"./useRootSetting.c150df23.js";import"./useNaiveInternal.d8826d2e.js";import"./useDesign.2e5b3993.js";import"./useAppInject.80b595a8.js";import"./propTypes.eec1be73.js";function k(e){let t,a=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const o=e;t=o.props||{},a=o.target||document.body}else t=e;const n=o(t,void 0,!0);return[()=>{const e=s(a);e&&n.open(e)},()=>{n.close()},e=>{n.setProps(e)}]}const j=g("组件方式"),C=g("component"),w=g("component(全屏)"),x=g("函数方式"),L=g("全屏Loading"),P=g("指定Element Loading"),I=g("指令方式"),R=g("useDirctive"),W=l({setup(o){const s={description:void 0,background:"#ffbbcc55"},l=i(),g=i(!1),W=i(!1),D=i(!1),[S,V,z]=k(s),[A,E]=k({target:l,props:s});function F(t=!1){return e(this,null,(function*(){D.value=t,g.value=!0,yield v(1e3),g.value=!1}))}function G(){return e(this,null,(function*(){z(s),S(),yield v(1e3),z({background:"rgb(125 165 123 / 50%)",description:"1秒后关闭"}),yield v(1e3),V()}))}function K(){return e(this,null,(function*(){z(s),A(),yield v(1e3),z({background:"rgb(145 115 143 / 50%)"}),yield v(1e3),E()}))}function N(){return e(this,null,(function*(){W.value=!0,yield v(1e3),W.value=!1,yield v(1e3)}))}return(e,o)=>{const s=m,i=y,v=_,k=h,S=n,V=a,z=t,A=r("loading");return u(),c(z,{title:"Loading组件示例"},{default:d((()=>[f((u(),c(k,{ref_key:"target",ref:l,"loading-description":"使用v-loading生成","loading-background":"#55555566"},{default:d((()=>[p(v,{vertical:"",size:32},{default:d((()=>[p(s,{type:"info"},{default:d((()=>[j])),_:1}),p(v,null,{default:d((()=>[p(i,{onClick:o[0]||(o[0]=e=>F())},{default:d((()=>[C])),_:1}),p(i,{onClick:o[1]||(o[1]=e=>F(!0))},{default:d((()=>[w])),_:1})])),_:1}),p(s,{type:"info"},{default:d((()=>[x])),_:1}),p(v,null,{default:d((()=>[p(i,{onClick:G},{default:d((()=>[L])),_:1}),p(i,{onClick:K},{default:d((()=>[P])),_:1})])),_:1}),p(s,{type:"info"},{default:d((()=>[I])),_:1}),p(i,{onClick:N},{default:d((()=>[R])),_:1})])),_:1})])),_:1})),[[A,W.value]]),(u(),c(b,{to:"body",disabled:!D.value},[p(V,{show:g.value,absolute:D.value,background:"rgb(125 165 123 / 50%)"},{icon:d((()=>[p(S,{icon:"logos-vue"})])),_:1},8,["show","absolute"])],8,["disabled"]))])),_:1})}}});export{W as default};