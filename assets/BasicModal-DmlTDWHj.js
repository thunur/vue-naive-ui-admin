var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,r=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))a.call(t,n)&&s(e,n,t[n]);return e},i=(e,l)=>t(e,n(l)),c=(e,t,n)=>new Promise(((l,o)=>{var a=e=>{try{r(n.next(e))}catch(t){o(t)}},s=e=>{try{r(n.throw(e))}catch(t){o(t)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(a,s);r((n=n.apply(e,t)).next())}));import{_ as u}from"./ScrollContainer-C3LgCatW.js";import{u as p,_ as d,e as f}from"./useWindowSizeFn-DPkcjxGY.js";import{ew as g,V as h,d as m,r as y,he as b,i as w,b as C,ay as S,E as k,D as v,dN as H,Y as F,a0 as x,o as B,e as O,w as P,S as M,c as j,bv as _,P as N,ag as R,U as W,q as T,t as $,f as D,B as A,a4 as E,a as L,h as q,n as z,hf as V,W as I,p as X,dm as Y,bk as K,N as U,dC as Q,F as Z,L as G,X as J,M as ee,O as te,Q as ne,R as le,et as oe,gP as ae,_ as se}from"./index-DRiF00Hx.js";import{_ as re}from"./Space-Bn-zZsLi.js";import{_ as ie}from"./Icon-BBFjs19F.js";import{u as ce}from"./useDesign-BvV_xiJk.js";import{_ as ue}from"./Tooltip-CFz38RsP.js";const pe=Symbol();const de={loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},show:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},fe=m({name:"ModalWrapper",components:{ScrollContainer:u},inheritAttrs:!1,props:de,emits:["height-change","ext-height"],setup(e,{emit:t}){const n=y(null),l=y(null),o=y(0),a=y(0);let s=0;p(i.bind(null,!1)),b(l,(()=>{i()}),{attributes:!0,subtree:!0}),g({redoModalHeight:i},pe);const r=w((()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${C(o)}px`})));function i(){return c(this,null,(function*(){if(e.show)try{let n=window.innerHeight-100-(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;yield F();const a=C(l);if(!a)return;yield F(),s=a.scrollHeight,e.fullScreen?o.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:o.value=e.height?e.height:s>n?n:s,t("height-change",C(o))}catch(n){}}))}return S((()=>{e.useWrapper&&i()})),k((()=>e.fullScreen),(e=>{i(),e?a.value=o.value:o.value=a.value})),v((()=>{const{modalHeaderHeight:n,modalFooterHeight:l}=e;t("ext-height",n+l)})),H((()=>{})),{wrapperRef:n,spinRef:l,spinStyle:r,setModalHeight:i}}}),ge=["loading-tip"];const he=h(fe,[["render",function(e,t,n,l,o,a){const s=u,r=x("loading");return B(),O(s,{ref:"wrapperRef"},{default:P((()=>[M((B(),j("div",{ref:"spinRef",style:_(e.spinStyle),"loading-tip":e.loadingTip},[N(e.$slots,"default")],12,ge)),[[r,e.loading]])])),_:3},512)}]]),{t:me}=R(),ye={show:{type:Boolean},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:me("common.cancelText")},okText:{type:String,default:me("common.okText")},closeFunc:Function},be=Object.assign({},ye,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},tipsMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,onAfterLeave:Function,contentStyle:Object,confirmLoading:{type:Boolean},to:String||HTMLElement,closeOnEsc:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,autoFocus:{type:Boolean,default:!0},title:{type:String},show:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});const we=h(m({name:"BasicModalFooter",props:be,emits:["ok","cancel"],setup:(e,{emit:t})=>({handleOk:function(e){t("ok",e)},handleCancel:function(e){t("cancel",e)}})}),[["render",function(e,t,n,l,o,a){const s=A,r=re;return B(),O(r,{justify:"end"},{default:P((()=>[N(e.$slots,"insertFooter"),e.showCancelBtn?(B(),O(s,W({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:P((()=>[T($(e.cancelText),1)])),_:1},16,["onClick"])):D("",!0),N(e.$slots,"centerFooter"),e.showOkBtn?(B(),O(s,W({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:P((()=>[T($(e.okText),1)])),_:1},16,["type","onClick","loading"])):D("",!0),N(e.$slots,"appendFooter")])),_:3})}]]);const Ce=h(m({name:"ModalClose",props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:t}){const{prefixCls:n}=ce("basic-modal-close"),{t:l}=R();return{t:l,getClass:w((()=>[n,`${n}--custom`,{[`${n}--can-full`]:e.canFullscreen}])),prefixCls:n,handleCancel:function(e){t("cancel",e)},handleFullScreen:function(e){null==e||e.stopPropagation(),null==e||e.preventDefault(),t("fullscreen")}}}}),[["render",function(e,t,n,l,o,a){const s=ie,r=ue;return B(),j("div",{class:z(e.getClass)},[e.canFullscreen?(B(),j(E,{key:0},[e.fullScreen?(B(),O(r,{key:0,placement:"bottom"},{trigger:P((()=>[L("span",null,[q(s,{icon:"ant-design:fullscreen-exit-outlined",role:"full",onClick:e.handleFullScreen},null,8,["onClick"])])])),default:P((()=>[T(" "+$(e.t("component.modal.restore")),1)])),_:1})):(B(),O(r,{key:1,placement:"bottom"},{trigger:P((()=>[L("span",null,[q(s,{class:"text-18px",icon:"ant-design:fullscreen-outlined",role:"full",onClick:e.handleFullScreen},null,8,["onClick"])])])),default:P((()=>[T(" "+$(e.t("component.modal.maximize")),1)])),_:1}))],64)):D("",!0),q(r,{placement:"bottom"},{trigger:P((()=>[L("span",null,[q(s,{class:"text-18px",icon:"ant-design:close-outlined",role:"close",onClick:e.handleCancel},null,8,["onClick"])])])),default:P((()=>[T(" "+$(e.t("component.modal.close")),1)])),_:1})],2)}]]);const Se=h(m({name:"BasicModalHeader",props:{tipsMessage:{type:[String,Array]},title:{type:String}},emits:["dblclick"],setup:(e,{emit:t})=>({handleFullScreen:function(e){null==e||e.stopPropagation(),null==e||e.preventDefault(),t("dblclick")}})}),[["render",function(e,t,n,l,o,a){const s=d;return B(),O(s,{tipsMessage:e.tipsMessage,onDblclick:e.handleFullScreen},{default:P((()=>[T($(e.title),1)])),_:1},8,["tipsMessage","onDblclick"])}]]);function ke(e){const t=function(e,t){return getComputedStyle(e)[t]},n=n=>{if(!n)return;n.setAttribute("data-drag",C(e.draggable));const l=n.querySelector(".n-card-header ,.n-dialog__title"),o=n.querySelector(".n-modal");if(!l||!o||!C(e.draggable))return;const a=l.querySelector(".n-card-header__main");l.style.cursor="move",a.style.cursor="move",l.onmousedown=function(e){if(!e)return;const n=e.clientX,l=e.clientY,a=document.body.clientWidth,s=document.documentElement.clientHeight,r=o.offsetWidth,i=o.offsetHeight,c=o.offsetLeft,u=a-o.offsetLeft-r,p=o.offsetTop,d=s-o.offsetTop-i,f=t(o,"left"),g=t(o,"top");let h=+f,m=+g;f.includes("%")?(h=+document.body.clientWidth*(+f.replace(/%/g,"")/100),m=+document.body.clientHeight*(+g.replace(/%/g,"")/100)):(h=+f.replace(/px/g,""),m=+g.replace(/px/g,"")),e.preventDefault(),document.onmousemove=function(e){let t=e.clientX-n,a=e.clientY-l;-t>c?t=-c:t>u&&(t=u),-a>p?a=-p:a>d&&(a=d),o.style.cssText+=`;left:${t+h}px;top:${a+m}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}}};S((()=>{C(e.show)&&C(e.draggable)&&V((()=>{(()=>{const e=document.querySelectorAll(".n-modal-body-wrapper");for(const l of Array.from(e)){if(!l)continue;const e=t(l,"display"),o=l.getAttribute("data-drag");"none"!==e&&null===o&&n(l)}})()}),30)}))}const ve=["class","style"],He=/^on[A-Z]/;function Fe(e={}){const t=Y();if(!t)return{};const{excludeListeners:n=!1,excludeKeys:l=[],excludeDefaultKeys:o=!0}=e,a=I({}),s=l.concat(o?ve:[]);return t.attrs=X(t.attrs),S((()=>{const e=(l=t.attrs,Object.keys(l).map((e=>[e,l[e]]))).reduce(((e,[t,l])=>(s.includes(t)||n&&He.test(t)||(e[t]=l),e)),{});var l;a.value=e})),a}const xe=m({name:"Modal",inheritAttrs:!1,props:be,emits:["cancel"],setup(e,{slots:t}){const{show:n,draggable:l}=K(e),o=Fe();return ke({show:n,draggable:l}),()=>{let n;const l=r(r({},C(o)),e);return q(U,l,"function"==typeof(a=n=f(t))||"[object Object]"===Object.prototype.toString.call(a)&&!Q(a)?n:{default:()=>[n]});var a}}});const Be=m({name:"BasicModal",components:{Modal:xe,ModalWrapper:he,ModalClose:Ce,ModalFooter:we,ModalHeader:Se},inheritAttrs:!1,props:be,emits:["show-change","height-change","cancel","ok","register","update:show"],setup(e,{emit:t,attrs:n}){const l=y(!1),o=y(null),a=y(null),{prefixCls:s}=ce("basic-modal"),u=y(0),p={setModalProps:function(e){o.value=ae(C(o)||{},e),Reflect.has(e,"show")&&(l.value=!!e.show);Reflect.has(e,"defaultFullscreen")&&(m.value=!!e.defaultFullscreen)},emitShow:void 0,redoModalHeight:()=>{F((()=>{C(a)&&C(a).setModalHeight()}))}},d=Y();d&&t("register",p,d.uid);const f=w((()=>r(r({},e),C(o)))),{handleFullScreen:g,getWrapClassName:h,fullScreenRef:m}=function(e){const t=y(!1);return{getWrapClassName:w((()=>{const n=C(e.wrapClassName)||"";return C(t)?`fullscreen-modal ${n} `:C(n)})),handleFullScreen:function(e){e&&e.stopPropagation(),t.value=!C(t)},fullScreenRef:t}}({modalWrapperRef:a,extHeightRef:u,wrapClassName:Z(f.value,"wrapClassName")}),b=w((()=>{const e=i(r({},C(f)),{show:C(l),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return i(r({},e),{wrapClassName:C(h)})})),v=w((()=>{const e=i(r(r({},n),C(f)),{show:C(l),wrapClassName:C(h)});return C(m)?G(e,["height","title"]):G(e,"title")})),H=w((()=>{if(!C(m))return C(b).height}));return S((()=>{l.value=!!e.show,m.value=!!e.defaultFullscreen})),k((()=>C(l)),(e=>{var n;t("show-change",e),t("update:show",e),d&&(null==(n=p.emitShow)||n.call(p,e,d.uid))}),{immediate:!1}),{prefixCls:s,handleCancel:function(n){return c(this,null,(function*(){var o,a;if(null==n||n.stopPropagation(),!(null==(a=null==(o=n.target)?void 0:o.classList)?void 0:a.contains(s+"-close--custom")))if(e.closeFunc&&oe(e.closeFunc)){const t=yield e.closeFunc();l.value=!t}else l.value=!1,t("cancel",n)}))},getBindValue:v,getProps:b,handleFullScreen:g,fullScreenRef:m,getMergeProps:f,handleOk:function(e){t("ok",e)},showRef:l,omit:G,modalWrapperRef:a,handleExtHeight:function(e){u.value=e},handleHeightChange:function(e){t("height-change",e)},handleTitleDbClick:function(t){e.canFullscreen&&g(t)},getWrapperHeight:H}}}),Oe={class:"w-full"};const Pe=h(Be,[["render",function(e,t,n,l,o,a){const s=Se,r=Ce,i=we,c=he,u=se,p=J("Modal");return B(),O(p,W(e.getBindValue,{onCancel:e.handleCancel,class:e.prefixCls,show:e.showRef,"onUpdate:show":t[0]||(t[0]=t=>e.showRef=t)}),{default:P((()=>[q(u,{bordered:!1,size:"huge",role:"dialog","aria-modal":"true",class:z([e.prefixCls,e.getBindValue.wrapClassName]),style:_({width:e.getProps.width})},ee({header:P((()=>[L("div",Oe,[q(s,{title:e.getMergeProps.title,tipsMessage:e.getProps.tipsMessage,onDblclick:e.handleTitleDbClick},null,8,["title","tipsMessage","onDblclick"])])])),"header-extra":P((()=>[q(r,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])])),default:P((()=>[q(c,W({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,show:e.showRef},e.omit(e.getProps.wrapperProps,"show","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:P((()=>[N(e.$slots,"default")])),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","show","onExtHeight","onHeightChange"])])),_:2},[e.$slots.action?void 0:{name:"action",fn:P((()=>[q(i,W(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),ee({_:2},[te(Object.keys(e.$slots),(t=>({name:t,fn:P((n=>[N(e.$slots,t,ne(le(n||{})))]))})))]),1040,["onOk","onCancel"])])),key:"0"},te(Object.keys(e.omit(e.$slots,"default")),(t=>({name:t,fn:P((n=>[N(e.$slots,t,ne(le(n||{})))]))})))]),1032,["class","style"])])),_:3},16,["onCancel","class","show"])}]]);export{Pe as _};