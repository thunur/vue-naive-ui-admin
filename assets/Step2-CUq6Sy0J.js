var t=(t,s,o)=>new Promise(((r,i)=>{var e=t=>{try{p(o.next(t))}catch(s){i(s)}},m=t=>{try{p(o.throw(t))}catch(s){i(s)}},p=t=>t.done?r(t.value):Promise.resolve(t.value).then(e,m);p((o=o.apply(t,s)).next())}));import{_ as s}from"./BasicForm-qOHCsuot.js";import{u as o}from"./useForm-KCRZjC-K.js";import{a as r}from"./data-CVAC1kHX.js";import{d as i,o as e,c as m,a as p,h as a,w as l,q as n,b as j}from"./index-BLWT44Eo.js";import{_ as u}from"./Alert-BpGxeCzV.js";import{a as c,_ as d}from"./DescriptionsItem-BevDAeOu.js";import{_ as h}from"./Divider-BIoCbvN2.js";import"./Icon-CRcO2jOk.js";import"./propTypes-BrA6lfYr.js";import"./useDesign-CZnxk_Lj.js";import"./get-C07Juxwr.js";import"./useBreakpoint-BeUap6gk.js";import"./Input-BelaXqkC.js";import"./use-locale-7p-wVYXM.js";import"./use-merged-state-DCdOf7ht.js";import"./light-g9fEKwFD.js";import"./Add-CzCGN0lD.js";import"./InputNumber-D-AHAWQT.js";import"./light-C72C8OYA.js";import"./RadioGroup-B2rFP7HH.js";import"./get-slot-BjAOOWF7.js";import"./ColorPicker--twUTkIu.js";import"./convert-BEzjbT9T.js";import"./Tooltip-anTY7wtM.js";import"./_baseIsEqual-BGsWZIhh.js";import"./format-length-l2rsThpR.js";import"./cssr-Bn6OPr4i.js";import"./next-frame-once-DiJwGkuW.js";import"./utils-Ur8S4I8h.js";import"./Checkmark-COOfFbaS.js";import"./Empty-BfqMuUzh.js";import"./Select-DqydGNb3.js";import"./Tag-Bmq0WN4v.js";import"./light-CNoan_WW.js";import"./attribute-Cap6sGiE.js";import"./Checkbox-D1qHqI7h.js";import"./ChevronRight-Bi2575K4.js";import"./Slider-BwH87vok.js";import"./DatePicker-C5rP7mE9.js";import"./index-DVGRNl7o.js";import"./utils-C-DyHkjJ.js";import"./Switch-D1kMYwab.js";import"./light-hewbUTA9.js";import"./RadioButton-DKPfpUY1.js";import"./FormItem-DN9aaP3F.js";import"./text-CvtvQEOx.js";import"./Space-B9frXtWC.js";import"./light-DFJtCmXp.js";import"./Grid-cihNI7Wf.js";import"./use-breakpoints-DcVC2Cdm.js";import"./Icon-DLWgwdKK.js";import"./light-D1YRry2D.js";const f={class:"step2"},g={class:"mx-auto max-w-400px"},x=i({__name:"Step2",emits:["next","prev"],setup(i,{emit:x}){const b=x,[v,{validate:_,setProps:y}]=o({labelWidth:100,schemas:r,gridProps:{cols:1},resetButtonText:"上一步",submitButtonText:"提交",resetFunc:function(){return t(this,null,(function*(){b("prev")}))},submitFunc:function(){return t(this,null,(function*(){try{const t=yield _();y({submitButtonOptions:{loading:!0}}),setTimeout((()=>{y({submitButtonOptions:{loading:!1}}),b("next",t)}),1500)}catch(t){}}))}});return(t,o)=>{const r=u,i=c,x=d,b=h,_=s;return e(),m("div",f,[p("div",g,[a(r,{type:"info"},{default:l((()=>[n(" 确认转账后，资金将直接打入对方账户，无法退回。 ")])),_:1}),a(x,{column:1,class:"mt-5 ml-4"},{default:l((()=>[a(i,{label:"付款账户"},{default:l((()=>[n(" test@example.com ")])),_:1}),a(i,{label:"收款账户"},{default:l((()=>[n(" zmtlwzy@example.com ")])),_:1}),a(i,{label:"收款人姓名"},{default:l((()=>[n(" Zmtlwzy ")])),_:1}),a(i,{label:"转账金额"},{default:l((()=>[n(" XXX元 ")])),_:1})])),_:1}),a(b),a(_,{onRegister:j(v)},null,8,["onRegister"])])])}}});export{x as default};