var t=Object.defineProperty,e=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(e,r,s)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,m=(t,e)=>{for(var r in e||(e={}))o.call(e,r)&&p(t,r,e[r]);if(s)for(var r of s(e))i.call(e,r)&&p(t,r,e[r]);return t},a=(t,s)=>e(t,r(s));import{u as l}from"./useDesign-CRwT266l.js";import{d as n,ag as j,i as u,E as c,o as g,e as b,w as v,h as d,U as f,b as h,dz as y,n as S}from"./index-C6F7-JtS.js";import{t as x}from"./toWritableRef-BnUDICWg.js";import{_ as O}from"./Wrapper-Chbzomel.js";import{b as w}from"./handler-BE47u_zC.js";import{_ as I}from"./Select-DA-oj4aE.js";import"./text-Dwv7G5S3.js";import"./Space-nLn5ELHN.js";import"./light-D16k62Gl.js";import"./get-slot-BjAOOWF7.js";import"./index-BARrnPzd.js";import"./Icon-DYE_U4AS.js";import"./propTypes-BrA6lfYr.js";import"./index-D6U5iBOR.js";import"./index-SERtKvMR.js";import"./Tooltip-CPoKw1Lj.js";import"./_baseIsEqual-DbOFHBu2.js";import"./get-jboavJ-P.js";import"./format-length-l2rsThpR.js";import"./cssr-D4_Fn8ts.js";import"./use-merged-state-9o6AQHu9.js";import"./next-frame-once-DiJwGkuW.js";import"./Popselect-D9VoX1Bd.js";import"./utils-CT_bzgsu.js";import"./Checkmark-DWXw6Z11.js";import"./Empty-Dc5RLD8j.js";import"./use-locale-ByhSuOII.js";import"./create-ref-setter-DNc6_3jH.js";import"./vue.runtime.esm-bundler-FIsfoQel.js";import"./use-breakpoints-Dzw82uW6.js";import"./convert-BEzjbT9T.js";import"./toNumber-DQlKSSj4.js";import"./useAppInject-PHGHdkg2.js";import"./useRootSetting-BNDABB0S.js";import"./vuedraggable-CIX9DEG0.js";import"./componentSetting-C8-BnnRr.js";import"./ScrollContainer-B06qkTnk.js";import"./Input-DqCdjJu0.js";import"./Skeleton-CPFA5W4M.js";import"./light-CucOWYbQ.js";import"./use-houdini-HcxwaZbf.js";import"./useNaiveInternal-BQMcGFc6.js";import"./light-lUIJmzb6.js";import"./light-7ReSsyVq.js";import"./light-C9o_lqNo.js";import"./light-CKZC8SgX.js";import"./light-xKurh90B.js";import"./light-BCII6s01.js";import"./light-DIUvUmOo.js";import"./Menu-DrEvQTHU.js";import"./Dropdown-CpWL-kUI.js";import"./Icon-Besm54VG.js";import"./ChevronRight-TJ_DNj_a.js";import"./useBreakpoint-DX913jyV.js";import"./index-CkIyn3Ei.js";import"./layoutContentResize-CrU3lvLf.js";import"./Scrollbar-DYvzMVwK.js";import"./Divider-C2yuMtyF.js";import"./Tag-DflLOt6s.js";import"./attribute-Cap6sGiE.js";const k=n(a(m({},{inheritAttrs:!1}),{__name:"SelectItem",props:{event:{type:Number},title:{type:String},val:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(t){const e=t,{prefixCls:r}=l("setting-select-item"),{t:s}=j(),o=x(e,"val"),i=u((()=>e.options.map((t=>a(m({},t),{label:s(t.label)})))));function p(t){e.event&&w(e.event,t)}return c((()=>e.options),(t=>{const e=t.map((t=>t.value));e.includes(o.value)||(o.value=e.length>0?e[0]:void 0),p(o.value)})),(e,s)=>{const m=I;return g(),b(O,{class:S(h(r)),title:t.title},{default:v((()=>[d(m,f({value:h(o),"onUpdate:value":s[0]||(s[0]=t=>y(o)?o.value=t:null),class:"min-w-110px",size:"small"},e.$attrs,{options:i.value,onUpdateValue:p}),null,16,["value","options"])])),_:1},8,["class","title"])}}}));export{k as default};