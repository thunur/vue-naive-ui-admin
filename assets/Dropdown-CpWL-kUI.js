import{B as e,a as o,V as n,r,c as t,p as i}from"./Tooltip-CPoKw1Lj.js";import{r as l,E as d,d as a,k as s,a6 as p,s as u,aI as c,i as v,a5 as f,cn as h,aD as b,U as m,cE as w,f3 as y,a4 as g,aJ as x,aH as S,eQ as N,y as R,ax as k,x as P,ai as C,z as I,A as O,F as $,C as z,G as A,am as F,a8 as j,H as _,cG as K,fN as T}from"./index-C6F7-JtS.js";import{N as D}from"./Icon-Besm54VG.js";import{C as L}from"./ChevronRight-TJ_DNj_a.js";import{h as B,c as H,u as M}from"./utils-CT_bzgsu.js";import{u as E}from"./use-merged-state-9o6AQHu9.js";import{c as U}from"./create-ref-setter-DNc6_3jH.js";const q=a({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),G=p("n-dropdown-menu"),W=p("n-dropdown"),V=p("n-dropdown-option");function J(e,o){return"submenu"===e.type||void 0===e.type&&void 0!==e[o]}function Q(e){return"divider"===e.type}const X=a({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=u(W),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:p,renderLabelRef:b,renderIconRef:m,labelFieldRef:w,childrenFieldRef:y,renderOptionRef:g,nodePropsRef:x,menuPropsRef:S}=o,N=u(V,null),R=u(G),k=u(c),P=v((()=>e.tmNode.rawNode)),C=v((()=>{const{value:o}=y;return J(e.tmNode.rawNode,o)})),I=v((()=>{const{disabled:o}=e.tmNode;return o})),O=function(e,o,n){const r=l(e.value);let t=null;return d(e,(e=>{null!==t&&window.clearTimeout(t),!0===e?n&&!n.value?r.value=!0:t=window.setTimeout((()=>{r.value=!0}),o):r.value=!1})),r}(v((()=>{if(!C.value)return!1;const{key:o,disabled:l}=e.tmNode;if(l)return!1;const{value:d}=n,{value:a}=r,{value:s}=t,{value:p}=i;return null!==d?p.includes(o):null!==a?p.includes(o)&&p[p.length-1]!==o:null!==s&&p.includes(o)})),300,v((()=>null===r.value&&!s.value))),$=v((()=>!!(null==N?void 0:N.enteringSubmenuRef.value))),z=l(!1);function A(){const{parentKey:o,tmNode:i}=e;i.disabled||p.value&&(t.value=o,r.value=null,n.value=i.key)}return f(V,{enteringSubmenuRef:z}),{labelField:w,renderLabel:b,renderIcon:m,siblingHasIcon:R.showIconRef,siblingHasSubmenu:R.hasSubmenuRef,menuProps:S,popoverBody:k,animated:s,mergedShowSubmenu:v((()=>O.value&&!$.value)),rawNode:P,hasSubmenu:C,pending:h((()=>{const{value:o}=i,{key:n}=e.tmNode;return o.includes(n)})),childActive:h((()=>{const{value:o}=a,{key:n}=e.tmNode,r=o.findIndex((e=>n===e));return-1!==r&&r<o.length-1})),active:h((()=>{const{value:o}=a,{key:n}=e.tmNode,r=o.findIndex((e=>n===e));return-1!==r&&r===o.length-1})),mergedDisabled:I,renderOption:g,nodeProps:x,handleClick:function(){const{value:n}=C,{tmNode:r}=e;p.value&&(n||r.disabled||(o.doSelect(r.key,r.rawNode),o.doUpdateShow(!1)))},handleMouseMove:function(){const{tmNode:o}=e;o.disabled||p.value&&n.value!==o.key&&A()},handleMouseEnter:A,handleMouseLeave:function(o){if(e.tmNode.disabled)return;if(!p.value)return;const{relatedTarget:r}=o;!r||B({target:r},"dropdownOption")||B({target:r},"scrollbarRail")||(n.value=null)},handleSubmenuBeforeEnter:function(){z.value=!0},handleSubmenuAfterEnter:function(){z.value=!1}}},render(){var r,t;const{animated:i,rawNode:l,mergedShowSubmenu:d,clsPrefix:a,siblingHasIcon:p,siblingHasSubmenu:u,renderLabel:c,renderIcon:v,renderOption:f,nodeProps:h,props:y,scrollable:g}=this;let x=null;if(d){const e=null===(r=this.menuProps)||void 0===r?void 0:r.call(this,l,l.children);x=s(oe,Object.assign({},e,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const S={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},N=null==h?void 0:h(l),R=s("div",Object.assign({class:[`${a}-dropdown-option`,null==N?void 0:N.class],"data-dropdown-option":!0},N),s("div",m(S,y),[s("div",{class:[`${a}-dropdown-option-body__prefix`,p&&`${a}-dropdown-option-body__prefix--show-icon`]},[v?v(l):w(l.icon)]),s("div",{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},c?c(l):w(null!==(t=l[this.labelField])&&void 0!==t?t:l.title)),s("div",{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,u&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(D,null,{default:()=>s(L,null)}):null)]),this.hasSubmenu?s(e,null,{default:()=>[s(o,null,{default:()=>s("div",{class:`${a}-dropdown-offset-container`},s(n,{show:this.mergedShowSubmenu,placement:this.placement,to:g&&this.popoverBody||void 0,teleportDisabled:!g},{default:()=>s("div",{class:`${a}-dropdown-menu-wrapper`},i?s(b,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>x}):x)}))})]}):null);return f?f({node:R,option:l}):R}}),Y=a({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=u(G),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:t,renderOptionRef:i}=u(W);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:n,nodeProps:t,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:n,showIcon:r,nodeProps:t,renderLabel:i,renderOption:l}=this,{rawNode:d}=this.tmNode,a=s("div",Object.assign({class:`${o}-dropdown-option`},null==t?void 0:t(d)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},w(d.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(d):w(null!==(e=d.title)&&void 0!==e?e:d[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,n&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:d}):a}}),Z=a({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:n}=this,{children:r}=e;return s(g,null,s(Y,{clsPrefix:n,tmNode:e,key:e.key}),null==r?void 0:r.map((e=>{const{rawNode:r}=e;return!1===r.show?null:Q(r)?s(q,{clsPrefix:n,key:e.key}):e.isGroup?(y("dropdown","`group` node is not allowed to be put in `group` node."),null):s(X,{clsPrefix:n,tmNode:e,parentKey:o,key:e.key})})))}}),ee=a({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[null==e?void 0:e()])}}),oe=a({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:n}=u(W);f(G,{showIconRef:v((()=>{const n=o.value;return e.tmNodes.some((e=>{var o;if(e.isGroup)return null===(o=e.children)||void 0===o?void 0:o.some((({rawNode:e})=>n?n(e):e.icon));const{rawNode:r}=e;return n?n(r):r.icon}))})),hasSubmenuRef:v((()=>{const{value:o}=n;return e.tmNodes.some((e=>{var n;if(e.isGroup)return null===(n=e.children)||void 0===n?void 0:n.some((({rawNode:e})=>J(e,o)));const{rawNode:r}=e;return J(r,o)}))}))});const r=l(null);return f(x,null),f(S,null),f(c,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:n}=this,t=this.tmNodes.map((r=>{const{rawNode:t}=r;return!1===t.show?null:function(e){return"render"===e.type}(t)?s(ee,{tmNode:r,key:r.key}):Q(t)?s(q,{clsPrefix:o,key:r.key}):function(e){return"group"===e.type}(t)?s(Z,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):s(X,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:t.props,scrollable:n})}));return s("div",{class:[`${o}-dropdown-menu`,n&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},n?s(N,{contentClass:`${o}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?r({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),ne=R("dropdown-menu","\n transform-origin: var(--v-transform-origin);\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n position: relative;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n",[k(),R("dropdown-option","\n position: relative;\n ",[P("a","\n text-decoration: none;\n color: inherit;\n outline: none;\n ",[P("&::before",'\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]),R("dropdown-option-body","\n display: flex;\n cursor: pointer;\n position: relative;\n height: var(--n-option-height);\n line-height: var(--n-option-height);\n font-size: var(--n-font-size);\n color: var(--n-option-text-color);\n transition: color .3s var(--n-bezier);\n ",[P("&::before",'\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n left: 4px;\n right: 4px;\n transition: background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n '),C("disabled",[I("pending","\n color: var(--n-option-text-color-hover);\n ",[O("prefix, suffix","\n color: var(--n-option-text-color-hover);\n "),P("&::before","background-color: var(--n-option-color-hover);")]),I("active","\n color: var(--n-option-text-color-active);\n ",[O("prefix, suffix","\n color: var(--n-option-text-color-active);\n "),P("&::before","background-color: var(--n-option-color-active);")]),I("child-active","\n color: var(--n-option-text-color-child-active);\n ",[O("prefix, suffix","\n color: var(--n-option-text-color-child-active);\n ")])]),I("disabled","\n cursor: not-allowed;\n opacity: var(--n-option-opacity-disabled);\n "),I("group","\n font-size: calc(var(--n-font-size) - 1px);\n color: var(--n-group-header-text-color);\n ",[O("prefix","\n width: calc(var(--n-option-prefix-width) / 2);\n ",[I("show-icon","\n width: calc(var(--n-option-icon-prefix-width) / 2);\n ")])]),O("prefix","\n width: var(--n-option-prefix-width);\n display: flex;\n justify-content: center;\n align-items: center;\n color: var(--n-prefix-color);\n transition: color .3s var(--n-bezier);\n z-index: 1;\n ",[I("show-icon","\n width: var(--n-option-icon-prefix-width);\n "),R("icon","\n font-size: var(--n-option-icon-size);\n ")]),O("label","\n white-space: nowrap;\n flex: 1;\n z-index: 1;\n "),O("suffix","\n box-sizing: border-box;\n flex-grow: 0;\n flex-shrink: 0;\n display: flex;\n justify-content: flex-end;\n align-items: center;\n min-width: var(--n-option-suffix-width);\n padding: 0 8px;\n transition: color .3s var(--n-bezier);\n color: var(--n-suffix-color);\n z-index: 1;\n ",[I("has-submenu","\n width: var(--n-option-icon-suffix-width);\n "),R("icon","\n font-size: var(--n-option-icon-size);\n ")]),R("dropdown-menu","pointer-events: all;")]),R("dropdown-offset-container","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: -4px;\n bottom: -4px;\n ")]),R("dropdown-divider","\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 4px 0;\n "),R("dropdown-menu-wrapper","\n transform-origin: var(--v-transform-origin);\n width: fit-content;\n "),P(">",[R("scrollbar","\n height: inherit;\n max-height: inherit;\n ")]),C("scrollable","\n padding: var(--n-padding);\n "),I("scrollable",[O("content","\n padding: var(--n-padding);\n ")])]),re={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},te=Object.keys(i),ie=a({name:"Dropdown",inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},i),re),A.props),setup(e){const o=l(!1),n=E($(e,"show"),o),r=v((()=>{const{keyField:o,childrenField:n}=e;return H(e.options,{getKey:e=>e[o],getDisabled:e=>!0===e.disabled,getIgnored:e=>"divider"===e.type||"render"===e.type,getChildren:e=>e[n]})})),t=v((()=>r.value.treeNodes)),i=l(null),a=l(null),s=l(null),p=v((()=>{var e,o,n;return null!==(n=null!==(o=null!==(e=i.value)&&void 0!==e?e:a.value)&&void 0!==o?o:s.value)&&void 0!==n?n:null})),u=v((()=>r.value.getPath(p.value).keyPath)),c=v((()=>r.value.getPath(e.value).keyPath)),b=h((()=>e.keyboard&&n.value));M({keydown:{ArrowUp:{prevent:!0,handler:function(){R("up")}},ArrowRight:{prevent:!0,handler:function(){R("right")}},ArrowDown:{prevent:!0,handler:function(){R("down")}},ArrowLeft:{prevent:!0,handler:function(){R("left")}},Enter:{prevent:!0,handler:function(){const e=N();(null==e?void 0:e.isLeaf)&&n.value&&(g(e.key,e.rawNode),x(!1))}},Escape:function(){x(!1)}}},b);const{mergedClsPrefixRef:m,inlineThemeDisabled:w}=z(e),y=A("Dropdown","-dropdown",ne,T,e,m);function g(o,n){const{onSelect:r}=e;r&&F(r,o,n)}function x(n){const{"onUpdate:show":r,onUpdateShow:t}=e;r&&F(r,n),t&&F(t,n),o.value=n}function S(){i.value=null,a.value=null,s.value=null}function N(){var e;const{value:o}=r,{value:n}=p;return o&&null!==n&&null!==(e=o.getNode(n))&&void 0!==e?e:null}function R(e){const{value:o}=p,{value:{getFirstAvailableNode:n}}=r;let t=null;if(null===o){const e=n();null!==e&&(t=e.key)}else{const o=N();if(o){let n;switch(e){case"down":n=o.getNext();break;case"up":n=o.getPrev();break;case"right":n=o.getChild();break;case"left":n=o.getParent()}n&&(t=n.key)}}null!==t&&(i.value=null,a.value=t)}f(W,{labelFieldRef:$(e,"labelField"),childrenFieldRef:$(e,"childrenField"),renderLabelRef:$(e,"renderLabel"),renderIconRef:$(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:u,activeKeyPathRef:c,animatedRef:$(e,"animated"),mergedShowRef:n,nodePropsRef:$(e,"nodeProps"),renderOptionRef:$(e,"renderOption"),menuPropsRef:$(e,"menuProps"),doSelect:g,doUpdateShow:x}),d(n,(o=>{e.animated||o||S()}));const k=v((()=>{const{size:o,inverted:n}=e,{common:{cubicBezierEaseInOut:r},self:t}=y.value,{padding:i,dividerColor:l,borderRadius:d,optionOpacityDisabled:a,[j("optionIconSuffixWidth",o)]:s,[j("optionSuffixWidth",o)]:p,[j("optionIconPrefixWidth",o)]:u,[j("optionPrefixWidth",o)]:c,[j("fontSize",o)]:v,[j("optionHeight",o)]:f,[j("optionIconSize",o)]:h}=t,b={"--n-bezier":r,"--n-font-size":v,"--n-padding":i,"--n-border-radius":d,"--n-option-height":f,"--n-option-prefix-width":c,"--n-option-icon-prefix-width":u,"--n-option-suffix-width":p,"--n-option-icon-suffix-width":s,"--n-option-icon-size":h,"--n-divider-color":l,"--n-option-opacity-disabled":a};return n?(b["--n-color"]=t.colorInverted,b["--n-option-color-hover"]=t.optionColorHoverInverted,b["--n-option-color-active"]=t.optionColorActiveInverted,b["--n-option-text-color"]=t.optionTextColorInverted,b["--n-option-text-color-hover"]=t.optionTextColorHoverInverted,b["--n-option-text-color-active"]=t.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=t.optionTextColorChildActiveInverted,b["--n-prefix-color"]=t.prefixColorInverted,b["--n-suffix-color"]=t.suffixColorInverted,b["--n-group-header-text-color"]=t.groupHeaderTextColorInverted):(b["--n-color"]=t.color,b["--n-option-color-hover"]=t.optionColorHover,b["--n-option-color-active"]=t.optionColorActive,b["--n-option-text-color"]=t.optionTextColor,b["--n-option-text-color-hover"]=t.optionTextColorHover,b["--n-option-text-color-active"]=t.optionTextColorActive,b["--n-option-text-color-child-active"]=t.optionTextColorChildActive,b["--n-prefix-color"]=t.prefixColor,b["--n-suffix-color"]=t.suffixColor,b["--n-group-header-text-color"]=t.groupHeaderTextColor),b})),P=w?_("dropdown",v((()=>`${e.size[0]}${e.inverted?"i":""}`)),k,e):void 0;return{mergedClsPrefix:m,mergedTheme:y,tmNodes:t,mergedShow:n,handleAfterLeave:()=>{e.animated&&S()},doUpdateShow:x,cssVars:w?void 0:k,themeClass:null==P?void 0:P.themeClass,onRender:null==P?void 0:P.onRender}},render(){const{mergedTheme:e}=this,o={show:this.mergedShow,theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:(e,o,n,r,t)=>{var i;const{mergedClsPrefix:l,menuProps:d}=this;null===(i=this.onRender)||void 0===i||i.call(this);const a=(null==d?void 0:d(void 0,this.tmNodes.map((e=>e.rawNode))))||{},p={ref:U(o),class:[e,`${l}-dropdown`,this.themeClass],clsPrefix:l,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:t};return s(oe,m(this.$attrs,p,a))},onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(t,Object.assign({},K(this.$props,te),o),{trigger:()=>{var e,o;return null===(o=(e=this.$slots).default)||void 0===o?void 0:o.call(e)}})}});export{ie as N};
