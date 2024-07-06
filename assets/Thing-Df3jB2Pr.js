import{y as t,A as e,x as n,d as i,C as a,G as r,g5 as l,aj as s,i as o,H as d,k as c,a4 as h}from"./index-BLWT44Eo.js";const g=t("thing","\n display: flex;\n transition: color .3s var(--n-bezier);\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n",[t("thing-avatar","\n margin-right: 12px;\n margin-top: 2px;\n "),t("thing-avatar-header-wrapper","\n display: flex;\n flex-wrap: nowrap;\n ",[t("thing-header-wrapper","\n flex: 1;\n ")]),t("thing-main","\n flex-grow: 1;\n ",[t("thing-header","\n display: flex;\n margin-bottom: 4px;\n justify-content: space-between;\n align-items: center;\n ",[e("title","\n font-size: 16px;\n font-weight: var(--n-title-font-weight);\n transition: color .3s var(--n-bezier);\n color: var(--n-title-text-color);\n ")]),e("description",[n("&:not(:last-child)","\n margin-bottom: 4px;\n ")]),e("content",[n("&:not(:first-child)","\n margin-top: 12px;\n ")]),e("footer",[n("&:not(:first-child)","\n margin-top: 12px;\n ")]),e("action",[n("&:not(:first-child)","\n margin-top: 12px;\n ")])])]),p=i({name:"Thing",props:Object.assign(Object.assign({},r.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),setup(t,{slots:e}){const{mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedRtlRef:p}=a(t),v=r("Thing","-thing",g,l,t,n),x=s("Thing",p,n),u=o((()=>{const{self:{titleTextColor:t,textColor:e,titleFontWeight:n,fontSize:i},common:{cubicBezierEaseInOut:a}}=v.value;return{"--n-bezier":a,"--n-font-size":i,"--n-text-color":e,"--n-title-font-weight":n,"--n-title-text-color":t}})),f=i?d("thing",void 0,u,t):void 0;return()=>{var a;const{value:r}=n,l=!!x&&x.value;return null===(a=null==f?void 0:f.onRender)||void 0===a||a.call(f),c("div",{class:[`${r}-thing`,null==f?void 0:f.themeClass,l&&`${r}-thing--rtl`],style:i?void 0:u.value},e.avatar&&t.contentIndented?c("div",{class:`${r}-thing-avatar`},e.avatar()):null,c("div",{class:`${r}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?c("div",{class:`${r}-thing-avatar-header-wrapper`},e.avatar?c("div",{class:`${r}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?c("div",{class:`${r}-thing-header-wrapper`},c("div",{class:`${r}-thing-header`},e.header||t.title?c("div",{class:`${r}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?c("div",{class:`${r}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?c("div",{class:[`${r}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null):null):c(h,null,e.header||t.title||e["header-extra"]||t.titleExtra?c("div",{class:`${r}-thing-header`},e.header||t.title?c("div",{class:`${r}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?c("div",{class:`${r}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?c("div",{class:[`${r}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?c("div",{class:[`${r}-thing-main__content`,t.contentClass],style:t.contentStyle},e.default?e.default():t.content):null,e.footer?c("div",{class:`${r}-thing-main__footer`},e.footer()):null,e.action?c("div",{class:`${r}-thing-main__action`},e.action()):null))}}});export{p as _};