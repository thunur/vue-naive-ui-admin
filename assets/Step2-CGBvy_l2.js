var t=(t,s,o)=>new Promise(((r,i)=>{var e=t=>{try{p(o.next(t))}catch(s){i(s)}},m=t=>{try{p(o.throw(t))}catch(s){i(s)}},p=t=>t.done?r(t.value):Promise.resolve(t.value).then(e,m);p((o=o.apply(t,s)).next())}));import{_ as s}from"./BasicForm-DyNGCjSr.js";import{u as o}from"./useForm-Cw0LBdEj.js";import{a as r}from"./data-CVAC1kHX.js";import{d as i,o as e,c as m,a as p,h as a,w as l,q as n,b as j}from"./index-C6F7-JtS.js";import{_ as u}from"./Alert-jdnZ6lUq.js";import{a as c,_ as d}from"./DescriptionsItem-x15YFvty.js";import{_ as h}from"./Divider-C2yuMtyF.js";import"./Icon-DYE_U4AS.js";import"./propTypes-BrA6lfYr.js";import"./useDesign-CRwT266l.js";import"./get-jboavJ-P.js";import"./useBreakpoint-DX913jyV.js";import"./Input-DqCdjJu0.js";import"./use-locale-ByhSuOII.js";import"./use-merged-state-9o6AQHu9.js";import"./light-C9o_lqNo.js";import"./Add-BGq-MMEf.js";import"./InputNumber-BGGzQzEn.js";import"./light-BCII6s01.js";import"./RadioGroup-DOryPW2D.js";import"./get-slot-BjAOOWF7.js";import"./ColorPicker-CPqBhJa7.js";import"./convert-BEzjbT9T.js";import"./Tooltip-CPoKw1Lj.js";import"./_baseIsEqual-DbOFHBu2.js";import"./format-length-l2rsThpR.js";import"./cssr-D4_Fn8ts.js";import"./next-frame-once-DiJwGkuW.js";import"./utils-CT_bzgsu.js";import"./Checkmark-DWXw6Z11.js";import"./Empty-Dc5RLD8j.js";import"./Select-DA-oj4aE.js";import"./Tag-DflLOt6s.js";import"./light-xKurh90B.js";import"./attribute-Cap6sGiE.js";import"./Checkbox-DY9r01Qv.js";import"./ChevronRight-TJ_DNj_a.js";import"./Slider-CvoLn5uS.js";import"./DatePicker-w1EpL8-p.js";import"./index-DLh_GeA6.js";import"./utils-DssuNWeR.js";import"./Switch-5e_v6W0i.js";import"./light-DIUvUmOo.js";import"./RadioButton-CmcsGo2G.js";import"./FormItem-D5Bi41Vk.js";import"./text-Dwv7G5S3.js";import"./Space-nLn5ELHN.js";import"./light-D16k62Gl.js";import"./Grid-DrL4JrfR.js";import"./use-breakpoints-Dzw82uW6.js";import"./Icon-Besm54VG.js";import"./light-lUIJmzb6.js";const f={class:"step2"},g={class:"mx-auto max-w-400px"},x=i({__name:"Step2",emits:["next","prev"],setup(i,{emit:x}){const b=x,[v,{validate:_,setProps:y}]=o({labelWidth:100,schemas:r,gridProps:{cols:1},resetButtonText:"上一步",submitButtonText:"提交",resetFunc:function(){return t(this,null,(function*(){b("prev")}))},submitFunc:function(){return t(this,null,(function*(){try{const t=yield _();y({submitButtonOptions:{loading:!0}}),setTimeout((()=>{y({submitButtonOptions:{loading:!1}}),b("next",t)}),1500)}catch(t){}}))}});return(t,o)=>{const r=u,i=c,x=d,b=h,_=s;return e(),m("div",f,[p("div",g,[a(r,{type:"info"},{default:l((()=>[n(" 确认转账后，资金将直接打入对方账户，无法退回。 ")])),_:1}),a(x,{column:1,class:"mt-5 ml-4"},{default:l((()=>[a(i,{label:"付款账户"},{default:l((()=>[n(" test@example.com ")])),_:1}),a(i,{label:"收款账户"},{default:l((()=>[n(" zmtlwzy@example.com ")])),_:1}),a(i,{label:"收款人姓名"},{default:l((()=>[n(" Zmtlwzy ")])),_:1}),a(i,{label:"转账金额"},{default:l((()=>[n(" XXX元 ")])),_:1})])),_:1}),a(b),a(_,{onRegister:j(v)},null,8,["onRegister"])])])}}});export{x as default};
