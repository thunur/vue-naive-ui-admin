import{_ as t}from"./BasicModal-BDsSerbV.js";import{_ as s}from"./BasicForm-qOHCsuot.js";import{a as o}from"./useModal-H67vdMV5.js";import{u as i}from"./useForm-KCRZjC-K.js";import{V as r,d as e,r as p,o as m,e as a,w as n,a as j,h as l,U as u,Y as d}from"./index-BLWT44Eo.js";import"./ScrollContainer-CRCJ2gdx.js";import"./componentSetting-C8-BnnRr.js";import"./useWindowSizeFn-DLIVMrXN.js";import"./useDesign-CZnxk_Lj.js";import"./Icon-CRcO2jOk.js";import"./propTypes-BrA6lfYr.js";import"./Tooltip-anTY7wtM.js";import"./_baseIsEqual-BGsWZIhh.js";import"./get-C07Juxwr.js";import"./format-length-l2rsThpR.js";import"./cssr-Bn6OPr4i.js";import"./use-merged-state-DCdOf7ht.js";import"./next-frame-once-DiJwGkuW.js";import"./Space-B9frXtWC.js";import"./light-DFJtCmXp.js";import"./get-slot-BjAOOWF7.js";import"./useBreakpoint-BeUap6gk.js";import"./Input-BelaXqkC.js";import"./use-locale-7p-wVYXM.js";import"./light-g9fEKwFD.js";import"./Add-CzCGN0lD.js";import"./InputNumber-D-AHAWQT.js";import"./light-C72C8OYA.js";import"./RadioGroup-B2rFP7HH.js";import"./ColorPicker--twUTkIu.js";import"./convert-BEzjbT9T.js";import"./utils-Ur8S4I8h.js";import"./Checkmark-COOfFbaS.js";import"./Empty-BfqMuUzh.js";import"./Select-DqydGNb3.js";import"./Tag-Bmq0WN4v.js";import"./light-CNoan_WW.js";import"./attribute-Cap6sGiE.js";import"./Checkbox-D1qHqI7h.js";import"./ChevronRight-Bi2575K4.js";import"./Slider-BwH87vok.js";import"./DatePicker-C5rP7mE9.js";import"./index-DVGRNl7o.js";import"./utils-C-DyHkjJ.js";import"./Switch-D1kMYwab.js";import"./light-hewbUTA9.js";import"./Divider-BIoCbvN2.js";import"./RadioButton-DKPfpUY1.js";import"./FormItem-DN9aaP3F.js";import"./text-CvtvQEOx.js";import"./Grid-cihNI7Wf.js";import"./use-breakpoints-DcVC2Cdm.js";import"./Icon-DLWgwdKK.js";import"./isEqual-BiDbZAVD.js";const c=[{field:"field1",component:"NInput",label:"字段1",giProps:{span:24},defaultValue:"111"},{field:"field2",component:"NInput",label:"字段2",giProps:{span:24}}],g=e({components:{BasicForm:s},props:{userData:{type:Object}},setup(t){const s=p({}),[r,{}]=i({labelWidth:120,schemas:c,showActionButtonGroup:!1,giProps:{span:24}}),[e]=o((t=>{t&&m(t)}));function m(t){s.value={field2:t.data,field1:t.info}}return{register:e,schemas:c,registerForm:r,model:s,handleVisibleChange:function(s){s&&t.userData&&d((()=>m(t.userData)))}}}}),h={class:"pt-3px pr-3px"};const f=r(g,[["render",function(o,i,r,e,p,d){const c=s,g=t;return m(),a(g,u(o.$attrs,{onRegister:o.register,title:"Modal Title",onVisibleChange:o.handleVisibleChange}),{default:n((()=>[j("div",h,[l(c,{onRegister:o.registerForm,model:o.model},null,8,["onRegister","model"])])])),_:1},16,["onRegister","onVisibleChange"])}]]);export{f as default};