import{_ as t}from"./PageWrapper-BNfpqhdE.js";import{u as o}from"./useAppInject-PHGHdkg2.js";import r from"./BaseSetting-B1jFpePa.js";import i from"./SecureSetting-DqshWZ8_.js";import s from"./AccountBind-971MaVsd.js";import e from"./MsgNotify-SydfK6sS.js";import{d as m,r as p,i as a,o as j,e as l,w as n,h as u,a as c,n as g,b as d,j as f,t as h,_ as v}from"./index-C6F7-JtS.js";import{_ as b}from"./Menu-DrEvQTHU.js";import"./useRootSetting-BNDABB0S.js";import"./useNaiveInternal-BQMcGFc6.js";import"./light-lUIJmzb6.js";import"./light-7ReSsyVq.js";import"./light-C9o_lqNo.js";import"./light-CKZC8SgX.js";import"./light-xKurh90B.js";import"./light-D16k62Gl.js";import"./light-BCII6s01.js";import"./light-CucOWYbQ.js";import"./light-DIUvUmOo.js";import"./useDesign-CRwT266l.js";import"./propTypes-BrA6lfYr.js";import"./BasicForm-DyNGCjSr.js";import"./Icon-DYE_U4AS.js";import"./get-jboavJ-P.js";import"./useBreakpoint-DX913jyV.js";import"./Input-DqCdjJu0.js";import"./use-locale-ByhSuOII.js";import"./use-merged-state-9o6AQHu9.js";import"./Add-BGq-MMEf.js";import"./InputNumber-BGGzQzEn.js";import"./RadioGroup-DOryPW2D.js";import"./get-slot-BjAOOWF7.js";import"./ColorPicker-CPqBhJa7.js";import"./convert-BEzjbT9T.js";import"./Tooltip-CPoKw1Lj.js";import"./_baseIsEqual-DbOFHBu2.js";import"./format-length-l2rsThpR.js";import"./cssr-D4_Fn8ts.js";import"./next-frame-once-DiJwGkuW.js";import"./utils-CT_bzgsu.js";import"./Checkmark-DWXw6Z11.js";import"./Empty-Dc5RLD8j.js";import"./Select-DA-oj4aE.js";import"./Tag-DflLOt6s.js";import"./attribute-Cap6sGiE.js";import"./Checkbox-DY9r01Qv.js";import"./ChevronRight-TJ_DNj_a.js";import"./Slider-CvoLn5uS.js";import"./DatePicker-w1EpL8-p.js";import"./index-DLh_GeA6.js";import"./utils-DssuNWeR.js";import"./Switch-5e_v6W0i.js";import"./Divider-C2yuMtyF.js";import"./RadioButton-CmcsGo2G.js";import"./FormItem-D5Bi41Vk.js";import"./text-Dwv7G5S3.js";import"./Space-nLn5ELHN.js";import"./Grid-DrL4JrfR.js";import"./use-breakpoints-Dzw82uW6.js";import"./Icon-Besm54VG.js";import"./useForm-Cw0LBdEj.js";import"./data-D29bvWzb.js";import"./Avatar-CykgL1nv.js";import"./Thing-IYwex50_.js";import"./ListItem-CbasuLGC.js";import"./Dropdown-CpWL-kUI.js";import"./create-ref-setter-DNc6_3jH.js";const S={class:"grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-x-6 gap-y-4"},k={class:"text-xl mt-2 mb-4"},y=m({__name:"accountSettingPage",setup(m){const y={BaseSetting:r,SecureSetting:i,AccountBind:s,MsgNotify:e},x=[{label:"基础设置",key:"BaseSetting"},{label:"安全设置",key:"SecureSetting"},{label:"账号绑定",key:"AccountBind"},{label:"新消息通知",key:"MsgNotify"}],B=p("BaseSetting"),{getIsMobile:I}=o(),_=a((()=>I.value?"horizontal":"vertical")),A=a((()=>{var t;return null==(t=x.find((t=>t.key===B.value)))?void 0:t.label}));return(o,r)=>{const i=b,s=v,e=t;return j(),l(e,null,{default:n((()=>[u(s,null,{default:n((()=>[c("div",S,[u(i,{value:B.value,"onUpdate:value":r[0]||(r[0]=t=>B.value=t),options:x,mode:_.value,class:g([d(I)?"justify-center":"w-200px border-r justify-center border-$app-border-color transition-all duration-300 ease-in-out"])},null,8,["value","mode","class"]),(j(),l(f(y[B.value]),null,{title:n((()=>[c("div",k,h(A.value),1)])),_:1}))])])),_:1})])),_:1})}}});export{y as default};