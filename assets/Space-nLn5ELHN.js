import{f7 as e,d as t,C as a,G as r,aj as n,i,a8 as l,bO as s,bL as o,al as p,k as d,cM as c}from"./index-C6F7-JtS.js";import{s as m}from"./light-D16k62Gl.js";import{g}from"./get-slot-BjAOOWF7.js";let u;const f=()=>{if(!e)return!0;if(void 0===u){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=1===e.scrollHeight;return document.body.removeChild(e),u=t}return u},y=t({name:"Space",props:Object.assign(Object.assign({},r.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:p}=a(e),d=r("Space","-space",void 0,m,e,t),c=n("Space",p,t);return{useGap:f(),rtlEnabled:c,mergedClsPrefix:t,margin:i((()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if("number"==typeof t)return{horizontal:t,vertical:t};const{self:{[l("gap",t)]:a}}=d.value,{row:r,col:n}=s(a);return{horizontal:o(n),vertical:o(r)}}))}},render(){const{vertical:e,reverse:t,align:a,inline:r,justify:n,itemClass:i,itemStyle:l,margin:s,wrap:o,mergedClsPrefix:m,rtlEnabled:u,useGap:f,wrapItem:y,internalUseGap:v}=this,h=p(g(this),!1);if(!h.length)return null;const x=`${s.horizontal}px`,b=s.horizontal/2+"px",w=`${s.vertical}px`,B=s.vertical/2+"px",C=h.length-1,j=n.startsWith("space-");return d("div",{role:"none",class:[`${m}-space`,u&&`${m}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!o||e?"nowrap":"wrap",marginTop:f||e?"":`-${B}`,marginBottom:f||e?"":`-${B}`,alignItems:a,gap:f?`${s.vertical}px ${s.horizontal}px`:""}},y||!f&&!v?h.map(((t,a)=>t.type===c?t:d("div",{role:"none",class:i,style:[l,{maxWidth:"100%"},f?"":e?{marginBottom:a!==C?w:""}:u?{marginLeft:j?"space-between"===n&&a===C?"":b:a!==C?x:"",marginRight:j?"space-between"===n&&0===a?"":b:"",paddingTop:B,paddingBottom:B}:{marginRight:j?"space-between"===n&&a===C?"":b:a!==C?x:"",marginLeft:j?"space-between"===n&&0===a?"":b:"",paddingTop:B,paddingBottom:B}]},t))):h)}});export{y as _};