import{x as e,y as n,A as o,ai as t,z as l,d as r,G as a,C as i,aj as s,r as d,F as u,gf as c,i as h,cE as p,E as v,D as b,ay as f,a8 as g,bP as m,H as w,k as x,a4 as y,Y as C,gW as F,ax as O,ck as T,e$ as S,aB as P,aD as B,S as M,T as $,aF as z,g0 as I,bQ as R,gB as k,am as A}from"./index-DRiF00Hx.js";import{d as D,V as j,c as E,g as _,p as W,i as L,N as V,h as K,b as U}from"./utils-gZPJG5sK.js";import{u as N}from"./use-merged-state-D6ChJkmy.js";import{u as H}from"./use-locale-B6YvjK0_.js";import{c as Y,u as q,B as G,a as Q,V as J}from"./Tooltip-CFz38RsP.js";import{_ as X}from"./Tag-DnTiE1E0.js";import{g as Z}from"./attribute-Cap6sGiE.js";import{N as ee}from"./Input-CsapG9XR.js";const ne=e([n("base-selection","\n --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);\n --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);\n position: relative;\n z-index: auto;\n box-shadow: none;\n width: 100%;\n max-width: 100%;\n display: inline-block;\n vertical-align: bottom;\n border-radius: var(--n-border-radius);\n min-height: var(--n-height);\n line-height: 1.5;\n font-size: var(--n-font-size);\n ",[n("base-loading","\n color: var(--n-loading-color);\n "),n("base-selection-tags","min-height: var(--n-height);"),o("border, state-border","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n pointer-events: none;\n border: var(--n-border);\n border-radius: inherit;\n transition:\n box-shadow .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n "),o("state-border","\n z-index: 1;\n border-color: #0000;\n "),n("base-suffix","\n cursor: pointer;\n position: absolute;\n top: 50%;\n transform: translateY(-50%);\n right: 10px;\n ",[o("arrow","\n font-size: var(--n-arrow-size);\n color: var(--n-arrow-color);\n transition: color .3s var(--n-bezier);\n ")]),n("base-selection-overlay","\n display: flex;\n align-items: center;\n white-space: nowrap;\n pointer-events: none;\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n padding: var(--n-padding-single);\n transition: color .3s var(--n-bezier);\n ",[o("wrapper","\n flex-basis: 0;\n flex-grow: 1;\n overflow: hidden;\n text-overflow: ellipsis;\n ")]),n("base-selection-placeholder","\n color: var(--n-placeholder-color);\n ",[o("inner","\n max-width: 100%;\n overflow: hidden;\n ")]),n("base-selection-tags","\n cursor: pointer;\n outline: none;\n box-sizing: border-box;\n position: relative;\n z-index: auto;\n display: flex;\n padding: var(--n-padding-multiple);\n flex-wrap: wrap;\n align-items: center;\n width: 100%;\n vertical-align: bottom;\n background-color: var(--n-color);\n border-radius: inherit;\n transition:\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "),n("base-selection-label","\n height: var(--n-height);\n display: inline-flex;\n width: 100%;\n vertical-align: bottom;\n cursor: pointer;\n outline: none;\n z-index: auto;\n box-sizing: border-box;\n position: relative;\n transition:\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n border-radius: inherit;\n background-color: var(--n-color);\n align-items: center;\n ",[n("base-selection-input","\n font-size: inherit;\n line-height: inherit;\n outline: none;\n cursor: pointer;\n box-sizing: border-box;\n border:none;\n width: 100%;\n padding: var(--n-padding-single);\n background-color: #0000;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n caret-color: var(--n-caret-color);\n ",[o("content","\n text-overflow: ellipsis;\n overflow: hidden;\n white-space: nowrap; \n ")]),o("render-label","\n color: var(--n-text-color);\n ")]),t("disabled",[e("&:hover",[o("state-border","\n box-shadow: var(--n-box-shadow-hover);\n border: var(--n-border-hover);\n ")]),l("focus",[o("state-border","\n box-shadow: var(--n-box-shadow-focus);\n border: var(--n-border-focus);\n ")]),l("active",[o("state-border","\n box-shadow: var(--n-box-shadow-active);\n border: var(--n-border-active);\n "),n("base-selection-label","background-color: var(--n-color-active);"),n("base-selection-tags","background-color: var(--n-color-active);")])]),l("disabled","cursor: not-allowed;",[o("arrow","\n color: var(--n-arrow-color-disabled);\n "),n("base-selection-label","\n cursor: not-allowed;\n background-color: var(--n-color-disabled);\n ",[n("base-selection-input","\n cursor: not-allowed;\n color: var(--n-text-color-disabled);\n "),o("render-label","\n color: var(--n-text-color-disabled);\n ")]),n("base-selection-tags","\n cursor: not-allowed;\n background-color: var(--n-color-disabled);\n "),n("base-selection-placeholder","\n cursor: not-allowed;\n color: var(--n-placeholder-color-disabled);\n ")]),n("base-selection-input-tag","\n height: calc(var(--n-height) - 6px);\n line-height: calc(var(--n-height) - 6px);\n outline: none;\n display: none;\n position: relative;\n margin-bottom: 3px;\n max-width: 100%;\n vertical-align: bottom;\n ",[o("input","\n font-size: inherit;\n font-family: inherit;\n min-width: 1px;\n padding: 0;\n background-color: #0000;\n outline: none;\n border: none;\n max-width: 100%;\n overflow: hidden;\n width: 1em;\n line-height: inherit;\n cursor: pointer;\n color: var(--n-text-color);\n caret-color: var(--n-caret-color);\n "),o("mirror","\n position: absolute;\n left: 0;\n top: 0;\n white-space: pre;\n visibility: hidden;\n user-select: none;\n -webkit-user-select: none;\n opacity: 0;\n ")]),["warning","error"].map((r=>l(`${r}-status`,[o("state-border",`border: var(--n-border-${r});`),t("disabled",[e("&:hover",[o("state-border",`\n box-shadow: var(--n-box-shadow-hover-${r});\n border: var(--n-border-hover-${r});\n `)]),l("active",[o("state-border",`\n box-shadow: var(--n-box-shadow-active-${r});\n border: var(--n-border-active-${r});\n `),n("base-selection-label",`background-color: var(--n-color-active-${r});`),n("base-selection-tags",`background-color: var(--n-color-active-${r});`)]),l("focus",[o("state-border",`\n box-shadow: var(--n-box-shadow-focus-${r});\n border: var(--n-border-focus-${r});\n `)])])])))]),n("base-selection-popover","\n margin-bottom: -3px;\n display: flex;\n flex-wrap: wrap;\n margin-right: -8px;\n "),n("base-selection-tag-wrapper","\n max-width: 100%;\n display: inline-flex;\n padding: 0 7px 3px 0;\n ",[e("&:last-child","padding-right: 0;"),n("tag","\n font-size: 14px;\n max-width: 100%;\n ",[o("content","\n line-height: 1.25;\n text-overflow: ellipsis;\n overflow: hidden;\n ")])])]),oe=r({name:"InternalSelection",props:Object.assign(Object.assign({},a.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=i(e),t=s("InternalSelection",o,n),l=d(null),r=d(null),x=d(null),y=d(null),F=d(null),O=d(null),T=d(null),S=d(null),P=d(null),B=d(null),M=d(!1),$=d(!1),z=d(!1),I=a("InternalSelection","-internal-selection",ne,c,e,u(e,"clsPrefix")),R=h((()=>e.clearable&&!e.disabled&&(z.value||e.active))),k=h((()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):p(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder)),A=h((()=>{const n=e.selectedOption;if(n)return n[e.labelField]})),j=h((()=>e.multiple?!(!Array.isArray(e.selectedOptions)||!e.selectedOptions.length):null!==e.selectedOption));function E(){var n;const{value:o}=l;if(o){const{value:t}=r;t&&(t.style.width=`${o.offsetWidth}px`,"responsive"!==e.maxTagCount&&(null===(n=P.value)||void 0===n||n.sync({showAllItemsBeforeCalculate:!1})))}}function _(n){const{onPatternInput:o}=e;o&&o(n)}function W(n){!function(n){const{onDeleteOption:o}=e;o&&o(n)}(n)}v(u(e,"active"),(e=>{e||function(){const{value:e}=B;e&&(e.style.display="none")}()})),v(u(e,"pattern"),(()=>{e.multiple&&C(E)}));const L=d(!1);let V=null;let K=null;function U(){null!==K&&window.clearTimeout(K)}v(j,(e=>{e||(M.value=!1)})),b((()=>{f((()=>{const n=O.value;n&&(e.disabled?n.removeAttribute("tabindex"):n.tabIndex=$.value?-1:0)}))})),D(x,e.onResize);const{inlineThemeDisabled:N}=e,H=h((()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:o},self:{borderRadius:t,color:l,placeholderColor:r,textColor:a,paddingSingle:i,paddingMultiple:s,caretColor:d,colorDisabled:u,textColorDisabled:c,placeholderColorDisabled:h,colorActive:p,boxShadowFocus:v,boxShadowActive:b,boxShadowHover:f,border:w,borderFocus:x,borderHover:y,borderActive:C,arrowColor:F,arrowColorDisabled:O,loadingColor:T,colorActiveWarning:S,boxShadowFocusWarning:P,boxShadowActiveWarning:B,boxShadowHoverWarning:M,borderWarning:$,borderFocusWarning:z,borderHoverWarning:R,borderActiveWarning:k,colorActiveError:A,boxShadowFocusError:D,boxShadowActiveError:j,boxShadowHoverError:E,borderError:_,borderFocusError:W,borderHoverError:L,borderActiveError:V,clearColor:K,clearColorHover:U,clearColorPressed:N,clearSize:H,arrowSize:Y,[g("height",n)]:q,[g("fontSize",n)]:G}}=I.value,Q=m(i),J=m(s);return{"--n-bezier":o,"--n-border":w,"--n-border-active":C,"--n-border-focus":x,"--n-border-hover":y,"--n-border-radius":t,"--n-box-shadow-active":b,"--n-box-shadow-focus":v,"--n-box-shadow-hover":f,"--n-caret-color":d,"--n-color":l,"--n-color-active":p,"--n-color-disabled":u,"--n-font-size":G,"--n-height":q,"--n-padding-single-top":Q.top,"--n-padding-multiple-top":J.top,"--n-padding-single-right":Q.right,"--n-padding-multiple-right":J.right,"--n-padding-single-left":Q.left,"--n-padding-multiple-left":J.left,"--n-padding-single-bottom":Q.bottom,"--n-padding-multiple-bottom":J.bottom,"--n-placeholder-color":r,"--n-placeholder-color-disabled":h,"--n-text-color":a,"--n-text-color-disabled":c,"--n-arrow-color":F,"--n-arrow-color-disabled":O,"--n-loading-color":T,"--n-color-active-warning":S,"--n-box-shadow-focus-warning":P,"--n-box-shadow-active-warning":B,"--n-box-shadow-hover-warning":M,"--n-border-warning":$,"--n-border-focus-warning":z,"--n-border-hover-warning":R,"--n-border-active-warning":k,"--n-color-active-error":A,"--n-box-shadow-focus-error":D,"--n-box-shadow-active-error":j,"--n-box-shadow-hover-error":E,"--n-border-error":_,"--n-border-focus-error":W,"--n-border-hover-error":L,"--n-border-active-error":V,"--n-clear-size":H,"--n-clear-color":K,"--n-clear-color-hover":U,"--n-clear-color-pressed":N,"--n-arrow-size":Y}})),Y=N?w("internal-selection",h((()=>e.size[0])),H,e):void 0;return{mergedTheme:I,mergedClearable:R,mergedClsPrefix:n,rtlEnabled:t,patternInputFocused:$,filterablePlaceholder:k,label:A,selected:j,showTagsPanel:M,isComposing:L,counterRef:T,counterWrapperRef:S,patternInputMirrorRef:l,patternInputRef:r,selfRef:x,multipleElRef:y,singleElRef:F,patternInputWrapperRef:O,overflowRef:P,inputTagElRef:B,handleMouseDown:function(n){e.active&&e.filterable&&n.target!==r.value&&n.preventDefault()},handleFocusin:function(n){var o;n.relatedTarget&&(null===(o=x.value)||void 0===o?void 0:o.contains(n.relatedTarget))||function(n){const{onFocus:o}=e;o&&o(n)}(n)},handleClear:function(n){!function(n){const{onClear:o}=e;o&&o(n)}(n)},handleMouseEnter:function(){z.value=!0},handleMouseLeave:function(){z.value=!1},handleDeleteOption:W,handlePatternKeyDown:function(n){if("Backspace"===n.key&&!L.value&&!e.pattern.length){const{selectedOptions:n}=e;(null==n?void 0:n.length)&&W(n[n.length-1])}},handlePatternInputInput:function(n){const{value:o}=l;if(o){const e=n.target.value;o.textContent=e,E()}e.ignoreComposition&&L.value?V=n:_(n)},handlePatternInputBlur:function(n){var o;$.value=!1,null===(o=e.onPatternBlur)||void 0===o||o.call(e,n)},handlePatternInputFocus:function(n){var o;$.value=!0,null===(o=e.onPatternFocus)||void 0===o||o.call(e,n)},handleMouseEnterCounter:function(){e.active||(U(),K=window.setTimeout((()=>{j.value&&(M.value=!0)}),100))},handleMouseLeaveCounter:function(){U()},handleFocusout:function(n){var o;(null===(o=x.value)||void 0===o?void 0:o.contains(n.relatedTarget))||function(n){const{onBlur:o}=e;o&&o(n)}(n)},handleCompositionEnd:function(){L.value=!1,e.ignoreComposition&&_(V),V=null},handleCompositionStart:function(){L.value=!0},onPopoverUpdateShow:function(e){e||(U(),M.value=!1)},focus:function(){var n,o,t;e.filterable?($.value=!1,null===(n=O.value)||void 0===n||n.focus()):e.multiple?null===(o=y.value)||void 0===o||o.focus():null===(t=F.value)||void 0===t||t.focus()},focusInput:function(){const{value:e}=r;e&&(!function(){const{value:e}=B;e&&(e.style.display="inline-block")}(),e.focus())},blur:function(){var n,o;if(e.filterable)$.value=!1,null===(n=O.value)||void 0===n||n.blur(),null===(o=r.value)||void 0===o||o.blur();else if(e.multiple){const{value:e}=y;null==e||e.blur()}else{const{value:e}=F;null==e||e.blur()}},blurInput:function(){const{value:e}=r;e&&e.blur()},updateCounter:function(e){const{value:n}=T;n&&n.setTextContent(`+${e}`)},getCounter:function(){const{value:e}=S;return e},getTail:function(){return r.value},renderLabel:e.renderLabel,cssVars:N?void 0:H,themeClass:null==Y?void 0:Y.themeClass,onRender:null==Y?void 0:Y.onRender}},render(){const{status:e,multiple:n,size:o,disabled:t,filterable:l,maxTagCount:r,bordered:a,clsPrefix:i,ellipsisTagPopoverProps:s,onRender:d,renderTag:u,renderLabel:c}=this;null==d||d();const h="responsive"===r,v="number"==typeof r,b=h||v,f=x(F,null,{default:()=>x(ee,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e,n;return null===(n=(e=this.$slots).arrow)||void 0===n?void 0:n.call(e)}})});let g;if(n){const{labelField:e}=this,n=n=>x("div",{class:`${i}-base-selection-tag-wrapper`,key:n.value},u?u({option:n,handleClose:()=>{this.handleDeleteOption(n)}}):x(X,{size:o,closable:!n.disabled,disabled:t,onClose:()=>{this.handleDeleteOption(n)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>c?c(n,!0):p(n[e],n,!0)})),a=()=>(v?this.selectedOptions.slice(0,r):this.selectedOptions).map(n),d=l?x("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},x("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:t,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),x("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,m=h?()=>x("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},x(X,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:t})):void 0;let w;if(v){const e=this.selectedOptions.length-r;e>0&&(w=x("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},x(X,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:t},{default:()=>`+${e}`})))}const C=h?l?x(j,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:a,counter:m,tail:()=>d}):x(j,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:a,counter:m}):v&&w?a().concat(w):a(),F=b?()=>x("div",{class:`${i}-base-selection-popover`},h?a():this.selectedOptions.map(n)):void 0,O=b?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},s):null,T=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?x("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},x("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,S=l?x("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},C,h?null:d,f):x("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:t?void 0:0},C,f);g=x(y,null,b?x(Y,Object.assign({},O,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>S,default:F}):S,T)}else if(l){const e=this.pattern||this.isComposing,n=this.active?!e:!this.selected,o=!this.active&&this.selected;g=x("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`,title:this.patternInputFocused?void 0:Z(this.label)},x("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:t,disabled:t,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),o?x("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},x("div",{class:`${i}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):c?c(this.selectedOption,!0):p(this.label,this.selectedOption,!0))):null,n?x("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},x("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,f)}else g=x("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},void 0!==this.label?x("div",{class:`${i}-base-selection-input`,title:Z(this.label),key:"input"},x("div",{class:`${i}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):c?c(this.selectedOption,!0):p(this.label,this.selectedOption,!0))):x("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},x("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),f);return x("div",{ref:"selfRef",class:[`${i}-base-selection`,this.rtlEnabled&&`${i}-base-selection--rtl`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},g,a?x("div",{class:`${i}-base-selection__border`}):null,a?x("div",{class:`${i}-base-selection__state-border`}):null)}}),te=e([n("select","\n z-index: auto;\n outline: none;\n width: 100%;\n position: relative;\n "),n("select-menu","\n margin: 4px 0;\n box-shadow: var(--n-menu-box-shadow);\n ",[O({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),le=r({name:"Select",props:Object.assign(Object.assign({},a.props),{to:q.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:t,inlineThemeDisabled:l}=i(e),r=a("Select","-select",te,I,e,n),s=d(e.defaultValue),c=u(e,"value"),p=N(c,s),b=d(!1),f=d(""),g=h((()=>{const{valueField:n,childrenField:o}=e,t=U(n,o);return E(J.value,t)})),m=h((()=>_(G.value,e.valueField,e.childrenField))),x=d(!1),y=N(u(e,"show"),x),C=d(null),F=d(null),O=d(null),{localeRef:B}=H("Select"),M=h((()=>{var n;return null!==(n=e.placeholder)&&void 0!==n?n:B.value.placeholder})),$=T(e,["items","options"]),z=[],D=d([]),j=d([]),V=d(new Map),Y=h((()=>{const{fallbackOption:n}=e;if(void 0===n){const{labelField:n,valueField:o}=e;return e=>({[n]:String(e),[o]:e})}return!1!==n&&(e=>Object.assign(n(e),{value:e}))})),G=h((()=>j.value.concat(D.value).concat($.value))),Q=h((()=>{const{filter:n}=e;if(n)return n;const{labelField:o,valueField:t}=e;return(e,n)=>{if(!n)return!1;const l=n[o];if("string"==typeof l)return W(e,l);const r=n[t];return"string"==typeof r?W(e,r):"number"==typeof r&&W(e,String(r))}})),J=h((()=>{if(e.remote)return $.value;{const{value:n}=G,{value:o}=f;return o.length&&e.filterable?L(n,Q.value,o,e.childrenField):n}}));function X(n){const o=e.remote,{value:t}=V,{value:l}=m,{value:r}=Y,a=[];return n.forEach((e=>{if(l.has(e))a.push(l.get(e));else if(o&&t.has(e))a.push(t.get(e));else if(r){const n=r(e);n&&a.push(n)}})),a}const Z=h((()=>{if(e.multiple){const{value:e}=p;return Array.isArray(e)?X(e):[]}return null})),ee=h((()=>{const{value:n}=p;return e.multiple||Array.isArray(n)||null===n?null:X([n])[0]||null})),ne=S(e),{mergedSizeRef:oe,mergedDisabledRef:le,mergedStatusRef:re}=ne;function ae(n,o){const{onChange:t,"onUpdate:value":l,onUpdateValue:r}=e,{nTriggerFormChange:a,nTriggerFormInput:i}=ne;t&&A(t,n,o),r&&A(r,n,o),l&&A(l,n,o),s.value=n,a(),i()}function ie(n){const{onBlur:o}=e,{nTriggerFormBlur:t}=ne;o&&A(o,n),t()}function se(){var n;const{remote:o,multiple:t}=e;if(o){const{value:o}=V;if(t){const{valueField:t}=e;null===(n=Z.value)||void 0===n||n.forEach((e=>{o.set(e[t],e)}))}else{const n=ee.value;n&&o.set(n[e.valueField],n)}}}function de(n){const{onUpdateShow:o,"onUpdate:show":t}=e;o&&A(o,n),t&&A(t,n),x.value=n}function ue(){le.value||(de(!0),x.value=!0,e.filterable&&we())}function ce(){de(!1)}function he(){f.value="",j.value=z}const pe=d(!1);function ve(e){be(e.rawNode)}function be(n){if(le.value)return;const{tag:o,remote:t,clearFilterAfterSelect:l,valueField:r}=e;if(o&&!t){const{value:e}=j,n=e[0]||null;if(n){const e=D.value;e.length?e.push(n):D.value=[n],j.value=z}}if(t&&V.value.set(n[r],n),e.multiple){const a=function(n){if(!Array.isArray(n))return[];if(Y.value)return Array.from(n);{const{remote:o}=e,{value:t}=m;if(o){const{value:e}=V;return n.filter((n=>t.has(n)||e.has(n)))}return n.filter((e=>t.has(e)))}}(p.value),i=a.findIndex((e=>e===n[r]));if(~i){if(a.splice(i,1),o&&!t){const e=fe(n[r]);~e&&(D.value.splice(e,1),l&&(f.value=""))}}else a.push(n[r]),l&&(f.value="");ae(a,X(a))}else{if(o&&!t){const e=fe(n[r]);D.value=~e?[D.value[e]]:z}me(),ce(),ae(n[r],n)}}function fe(n){return D.value.findIndex((o=>o[e.valueField]===n))}function ge(n){var o,t,l,r,a;if(e.keyboard)switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(null===(o=C.value)||void 0===o?void 0:o.isComposing))if(y.value){const n=null===(t=O.value)||void 0===t?void 0:t.getPendingTmNode();n?ve(n):e.filterable||(ce(),me())}else if(ue(),e.tag&&pe.value){const n=j.value[0];if(n){const o=n[e.valueField],{value:t}=p;e.multiple&&Array.isArray(t)&&t.some((e=>e===o))||be(n)}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;y.value&&(null===(l=O.value)||void 0===l||l.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;y.value?null===(r=O.value)||void 0===r||r.next():ue();break;case"Escape":y.value&&(k(n),ce()),null===(a=C.value)||void 0===a||a.focus()}else n.preventDefault()}function me(){var e;null===(e=C.value)||void 0===e||e.focus()}function we(){var e;null===(e=C.value)||void 0===e||e.focusInput()}se(),v(u(e,"options"),se);const xe={focus:()=>{var e;null===(e=C.value)||void 0===e||e.focus()},focusInput:()=>{var e;null===(e=C.value)||void 0===e||e.focusInput()},blur:()=>{var e;null===(e=C.value)||void 0===e||e.blur()},blurInput:()=>{var e;null===(e=C.value)||void 0===e||e.blurInput()}},ye=h((()=>{const{self:{menuBoxShadow:e}}=r.value;return{"--n-menu-box-shadow":e}})),Ce=l?w("select",void 0,ye,e):void 0;return Object.assign(Object.assign({},xe),{mergedStatus:re,mergedClsPrefix:n,mergedBordered:o,namespace:t,treeMate:g,isMounted:P(),triggerRef:C,menuRef:O,pattern:f,uncontrolledShow:x,mergedShow:y,adjustedTo:q(e),uncontrolledValue:s,mergedValue:p,followerRef:F,localizedPlaceholder:M,selectedOption:ee,selectedOptions:Z,mergedSize:oe,mergedDisabled:le,focused:b,activeWithoutMenuOpen:pe,inlineThemeDisabled:l,onTriggerInputFocus:function(){e.filterable&&(pe.value=!0)},onTriggerInputBlur:function(){e.filterable&&(pe.value=!1,y.value||he())},handleTriggerOrMenuResize:function(){var e;y.value&&(null===(e=F.value)||void 0===e||e.syncPosition())},handleMenuFocus:function(e){b.value=!0},handleMenuBlur:function(e){var n;(null===(n=C.value)||void 0===n?void 0:n.$el.contains(e.relatedTarget))||(b.value=!1,ie(e),ce())},handleMenuTabOut:function(){var e;null===(e=C.value)||void 0===e||e.focus(),ce()},handleTriggerClick:function(){le.value||(y.value?e.filterable?we():ce():ue())},handleToggle:ve,handleDeleteOption:be,handlePatternInput:function(n){y.value||ue();const{value:o}=n.target;f.value=o;const{tag:t,remote:l}=e;if(function(n){const{onSearch:o}=e;o&&A(o,n)}(o),t&&!l){if(!o)return void(j.value=z);const{onCreate:n}=e,t=n?n(o):{[e.labelField]:o,[e.valueField]:o},{valueField:l,labelField:r}=e;$.value.some((e=>e[l]===t[l]||e[r]===t[r]))||D.value.some((e=>e[l]===t[l]||e[r]===t[r]))?j.value=z:j.value=[t]}},handleClear:function(n){n.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&ce(),function(){const{onClear:n}=e;n&&A(n)}(),o?ae([],[]):ae(null,null)},handleTriggerBlur:function(e){var n,o;(null===(o=null===(n=O.value)||void 0===n?void 0:n.selfRef)||void 0===o?void 0:o.contains(e.relatedTarget))||(b.value=!1,ie(e),ce())},handleTriggerFocus:function(n){!function(n){const{onFocus:o,showOnFocus:t}=e,{nTriggerFormFocus:l}=ne;o&&A(o,n),l(),t&&ue()}(n),b.value=!0},handleKeydown:ge,handleMenuAfterLeave:he,handleMenuClickOutside:function(e){var n;y.value&&((null===(n=C.value)||void 0===n?void 0:n.$el.contains(R(e)))||ce())},handleMenuScroll:function(n){!function(n){const{onScroll:o}=e;o&&A(o,n)}(n)},handleMenuKeydown:ge,handleMenuMousedown:function(e){K(e,"action")||K(e,"empty")||e.preventDefault()},mergedTheme:r,cssVars:l?void 0:ye,themeClass:null==Ce?void 0:Ce.themeClass,onRender:null==Ce?void 0:Ce.onRender})},render(){return x("div",{class:`${this.mergedClsPrefix}-select`},x(G,null,{default:()=>[x(Q,null,{default:()=>x(oe,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[null===(n=(e=this.$slots).arrow)||void 0===n?void 0:n.call(e)]}})}),x(J,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===q.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>x(B,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||"show"===this.displayDirective?(null===(e=this.onRender)||void 0===e||e.call(this),M(x(V,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,null===(n=this.menuProps)||void 0===n?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[null===(o=this.menuProps)||void 0===o?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var e,n;return[null===(n=(e=this.$slots).empty)||void 0===n?void 0:n.call(e)]},header:()=>{var e,n;return[null===(n=(e=this.$slots).header)||void 0===n?void 0:n.call(e)]},action:()=>{var e,n;return[null===(n=(e=this.$slots).action)||void 0===n?void 0:n.call(e)]}}),"show"===this.displayDirective?[[$,this.mergedShow],[z,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[z,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{oe as N,le as _};