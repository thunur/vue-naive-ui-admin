var t=(t,s,o)=>new Promise(((r,i)=>{var e=t=>{try{p(o.next(t))}catch(s){i(s)}},m=t=>{try{p(o.throw(t))}catch(s){i(s)}},p=t=>t.done?r(t.value):Promise.resolve(t.value).then(e,m);p((o=o.apply(t,s)).next())}));import{_ as s}from"./BasicForm-BVhac1H-.js";import{u as o}from"./useForm-CgimpDA7.js";import{a as r}from"./data-CVAC1kHX.js";import{d as i,o as e,c as m,a as p,h as a,w as l,q as n,b as j}from"./index-DRiF00Hx.js";import{_ as u}from"./Alert-BOWdd9vj.js";import{a as c,_ as d}from"./DescriptionsItem-DzRAHhWB.js";import{_ as h}from"./Divider-Bf1_7ZnV.js";import"./Icon-BBFjs19F.js";import"./propTypes-BrA6lfYr.js";import"./useDesign-BvV_xiJk.js";import"./get-g7Q8ZpuG.js";import"./useBreakpoint-D5Jm5jpu.js";import"./Input-CsapG9XR.js";import"./use-locale-B6YvjK0_.js";import"./use-merged-state-D6ChJkmy.js";import"./light-BWoNxIrM.js";import"./Add-CNS4l2VR.js";import"./InputNumber-gtL-_-KQ.js";import"./light-uiqwkDz5.js";import"./RadioGroup-B2bZxxCM.js";import"./get-slot-BjAOOWF7.js";import"./ColorPicker-BGgrNs60.js";import"./convert-BEzjbT9T.js";import"./Tooltip-CFz38RsP.js";import"./_baseIsEqual-CCRaRR-p.js";import"./format-length-l2rsThpR.js";import"./cssr-BAp9t9hT.js";import"./next-frame-once-DiJwGkuW.js";import"./utils-gZPJG5sK.js";import"./Checkmark-DfZLjuro.js";import"./Empty-Byo6tjCM.js";import"./Select-DJOhsJHO.js";import"./Tag-DnTiE1E0.js";import"./light-BjF-GFCJ.js";import"./attribute-Cap6sGiE.js";import"./Checkbox-B0o-0lIF.js";import"./ChevronRight-IasqeWR6.js";import"./Slider-DhqDtrZC.js";import"./DatePicker-h7fBJGMd.js";import"./index-Dge0Bz3e.js";import"./utils-BKNBMClf.js";import"./Switch-CQUz5TKJ.js";import"./light-41H1pviH.js";import"./RadioButton-CnEjLwTa.js";import"./FormItem-CyKV7FfW.js";import"./text-B2L-mfFF.js";import"./Space-Bn-zZsLi.js";import"./light-iUBSSS2B.js";import"./Grid-V2ocwKXT.js";import"./use-breakpoints-904_rLaz.js";import"./Icon-CrA-p7eB.js";import"./light-B2Z_Bonw.js";const f={class:"step2"},g={class:"mx-auto max-w-400px"},x=i({__name:"Step2",emits:["next","prev"],setup(i,{emit:x}){const b=x,[v,{validate:_,setProps:y}]=o({labelWidth:100,schemas:r,gridProps:{cols:1},resetButtonText:"上一步",submitButtonText:"提交",resetFunc:function(){return t(this,null,(function*(){b("prev")}))},submitFunc:function(){return t(this,null,(function*(){try{const t=yield _();y({submitButtonOptions:{loading:!0}}),setTimeout((()=>{y({submitButtonOptions:{loading:!1}}),b("next",t)}),1500)}catch(t){}}))}});return(t,o)=>{const r=u,i=c,x=d,b=h,_=s;return e(),m("div",f,[p("div",g,[a(r,{type:"info"},{default:l((()=>[n(" 确认转账后，资金将直接打入对方账户，无法退回。 ")])),_:1}),a(x,{column:1,class:"mt-5 ml-4"},{default:l((()=>[a(i,{label:"付款账户"},{default:l((()=>[n(" test@example.com ")])),_:1}),a(i,{label:"收款账户"},{default:l((()=>[n(" zmtlwzy@example.com ")])),_:1}),a(i,{label:"收款人姓名"},{default:l((()=>[n(" Zmtlwzy ")])),_:1}),a(i,{label:"转账金额"},{default:l((()=>[n(" XXX元 ")])),_:1})])),_:1}),a(b),a(_,{onRegister:j(v)},null,8,["onRegister"])])])}}});export{x as default};