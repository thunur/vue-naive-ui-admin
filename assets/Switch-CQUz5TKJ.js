import{y as e,A as n,ah as t,x as a,z as i,ai as o,d as r,C as l,G as s,e$ as c,r as d,F as h,i as u,a8 as b,bU as v,bL as g,H as f,eP as p,k as w,a9 as m,an as k,eY as y,am as x}from"./index-DRiF00Hx.js";import{u as $}from"./use-merged-state-D6ChJkmy.js";import{s as _}from"./light-41H1pviH.js";const C=e("switch","\n height: var(--n-height);\n min-width: var(--n-width);\n vertical-align: middle;\n user-select: none;\n -webkit-user-select: none;\n display: inline-flex;\n outline: none;\n justify-content: center;\n align-items: center;\n",[n("children-placeholder","\n height: var(--n-rail-height);\n display: flex;\n flex-direction: column;\n overflow: hidden;\n pointer-events: none;\n visibility: hidden;\n "),n("rail-placeholder","\n display: flex;\n flex-wrap: none;\n "),n("button-placeholder","\n width: calc(1.75 * var(--n-rail-height));\n height: var(--n-rail-height);\n "),e("base-loading","\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n font-size: calc(var(--n-button-width) - 4px);\n color: var(--n-loading-color);\n transition: color .3s var(--n-bezier);\n ",[t({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),n("checked, unchecked","\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n box-sizing: border-box;\n position: absolute;\n white-space: nowrap;\n top: 0;\n bottom: 0;\n display: flex;\n align-items: center;\n line-height: 1;\n "),n("checked","\n right: 0;\n padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),n("unchecked","\n left: 0;\n justify-content: flex-end;\n padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),a("&:focus",[n("rail","\n box-shadow: var(--n-box-shadow-focus);\n ")]),i("round",[n("rail","border-radius: calc(var(--n-rail-height) / 2);",[n("button","border-radius: calc(var(--n-button-height) / 2);")])]),o("disabled",[o("icon",[i("rubber-band",[i("pressed",[n("rail",[n("button","max-width: var(--n-button-width-pressed);")])]),n("rail",[a("&:active",[n("button","max-width: var(--n-button-width-pressed);")])]),i("active",[i("pressed",[n("rail",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),n("rail",[a("&:active",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),i("active",[n("rail",[n("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),n("rail","\n overflow: hidden;\n height: var(--n-rail-height);\n min-width: var(--n-rail-width);\n border-radius: var(--n-rail-border-radius);\n cursor: pointer;\n position: relative;\n transition:\n opacity .3s var(--n-bezier),\n background .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-rail-color);\n ",[n("button-icon","\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n font-size: calc(var(--n-button-height) - 4px);\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n justify-content: center;\n align-items: center;\n line-height: 1;\n ",[t()]),n("button",'\n align-items: center; \n top: var(--n-offset);\n left: var(--n-offset);\n height: var(--n-button-height);\n width: var(--n-button-width-pressed);\n max-width: var(--n-button-width);\n border-radius: var(--n-button-border-radius);\n background-color: var(--n-button-color);\n box-shadow: var(--n-button-box-shadow);\n box-sizing: border-box;\n cursor: inherit;\n content: "";\n position: absolute;\n transition:\n background-color .3s var(--n-bezier),\n left .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n ')]),i("active",[n("rail","background-color: var(--n-rail-color-active);")]),i("loading",[n("rail","\n cursor: wait;\n ")]),i("disabled",[n("rail","\n cursor: not-allowed;\n opacity: .5;\n ")])]);let z;const S=r({name:"Switch",props:Object.assign(Object.assign({},s.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]}),setup(e){void 0===z&&(z="undefined"==typeof CSS||void 0!==CSS.supports&&CSS.supports("width","max(1px)"));const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=l(e),a=s("Switch","-switch",C,_,e,n),i=c(e),{mergedSizeRef:o,mergedDisabledRef:r}=i,p=d(e.defaultValue),w=h(e,"value"),m=$(w,p),k=u((()=>m.value===e.checkedValue)),y=d(!1),S=d(!1),B=u((()=>{const{railStyle:n}=e;if(n)return n({focused:S.value,checked:k.value})}));function V(n){const{"onUpdate:value":t,onChange:a,onUpdateValue:o}=e,{nTriggerFormInput:r,nTriggerFormChange:l}=i;t&&x(t,n),o&&x(o,n),a&&x(a,n),p.value=n,r(),l()}const F=u((()=>{const{value:e}=o,{self:{opacityDisabled:n,railColor:t,railColorActive:i,buttonBoxShadow:r,buttonColor:l,boxShadowFocus:s,loadingColor:c,textColor:d,iconColor:h,[b("buttonHeight",e)]:u,[b("buttonWidth",e)]:f,[b("buttonWidthPressed",e)]:p,[b("railHeight",e)]:w,[b("railWidth",e)]:m,[b("railBorderRadius",e)]:k,[b("buttonBorderRadius",e)]:y},common:{cubicBezierEaseInOut:x}}=a.value;let $,_,C;return z?($=`calc((${w} - ${u}) / 2)`,_=`max(${w}, ${u})`,C=`max(${m}, calc(${m} + ${u} - ${w}))`):($=v((g(w)-g(u))/2),_=v(Math.max(g(w),g(u))),C=g(w)>g(u)?m:v(g(m)+g(u)-g(w))),{"--n-bezier":x,"--n-button-border-radius":y,"--n-button-box-shadow":r,"--n-button-color":l,"--n-button-width":f,"--n-button-width-pressed":p,"--n-button-height":u,"--n-height":_,"--n-offset":$,"--n-opacity-disabled":n,"--n-rail-border-radius":k,"--n-rail-color":t,"--n-rail-color-active":i,"--n-rail-height":w,"--n-rail-width":m,"--n-width":C,"--n-box-shadow-focus":s,"--n-loading-color":c,"--n-text-color":d,"--n-icon-color":h}})),R=t?f("switch",u((()=>o.value[0])),F,e):void 0;return{handleClick:function(){e.loading||r.value||(m.value!==e.checkedValue?V(e.checkedValue):V(e.uncheckedValue))},handleBlur:function(){S.value=!1,function(){const{nTriggerFormBlur:e}=i;e()}(),y.value=!1},handleFocus:function(){S.value=!0,function(){const{nTriggerFormFocus:e}=i;e()}()},handleKeyup:function(n){e.loading||r.value||" "===n.key&&(m.value!==e.checkedValue?V(e.checkedValue):V(e.uncheckedValue),y.value=!1)},handleKeydown:function(n){e.loading||r.value||" "===n.key&&(n.preventDefault(),y.value=!0)},mergedRailStyle:B,pressed:y,mergedClsPrefix:n,mergedValue:m,checked:k,mergedDisabled:r,cssVars:t?void 0:F,themeClass:null==R?void 0:R.themeClass,onRender:null==R?void 0:R.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:t,mergedRailStyle:a,onRender:i,$slots:o}=this;null==i||i();const{checked:r,unchecked:l,icon:s,"checked-icon":c,"unchecked-icon":d}=o,h=!(p(s)&&p(c)&&p(d));return w("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,t&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},w("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:a},m(r,(n=>m(l,(t=>n||t?w("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},w("div",{class:`${e}-switch__rail-placeholder`},w("div",{class:`${e}-switch__button-placeholder`}),n),w("div",{class:`${e}-switch__rail-placeholder`},w("div",{class:`${e}-switch__button-placeholder`}),t)):null)))),w("div",{class:`${e}-switch__button`},m(s,(n=>m(c,(t=>m(d,(a=>w(k,null,{default:()=>this.loading?w(y,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(t||n)?w("div",{class:`${e}-switch__button-icon`,key:t?"checked-icon":"icon"},t||n):this.checked||!a&&!n?null:w("div",{class:`${e}-switch__button-icon`,key:a?"unchecked-icon":"icon"},a||n)}))))))),m(r,(n=>n&&w("div",{key:"checked",class:`${e}-switch__checked`},n))),m(l,(n=>n&&w("div",{key:"unchecked",class:`${e}-switch__unchecked`},n))))))}});export{S as _};