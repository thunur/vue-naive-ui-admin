var t=Object.defineProperty,e=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,o,r)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,l=(t,e,o)=>new Promise(((r,i)=>{var s=t=>{try{l(o.next(t))}catch(e){i(e)}},p=t=>{try{l(o.throw(t))}catch(e){i(e)}},l=t=>t.done?r(t.value):Promise.resolve(t.value).then(s,p);l((o=o.apply(t,e)).next())}));import{_ as n}from"./PageWrapper-CfO8a5QT.js";import{_ as m}from"./BasicForm-qOHCsuot.js";import{u as a}from"./useForm-KCRZjC-K.js";import c from"./PersonTable-DrKDblbN.js";import{d as u,m as j,o as d,e as f,w as b,h as g,q as h,b as P,_ as v,B as y}from"./index-BLWT44Eo.js";import"./useRootSetting-B_pBTmqU.js";import"./useNaiveInternal-D6dNh1ey.js";import"./light-D1YRry2D.js";import"./light-o0LVF9IR.js";import"./light-g9fEKwFD.js";import"./light-BkdwHlZT.js";import"./light-CNoan_WW.js";import"./light-DFJtCmXp.js";import"./light-C72C8OYA.js";import"./light-DlnGODcc.js";import"./light-hewbUTA9.js";import"./useDesign-CZnxk_Lj.js";import"./useAppInject-D3hkI7Kk.js";import"./propTypes-BrA6lfYr.js";import"./Icon-CRcO2jOk.js";import"./get-C07Juxwr.js";import"./useBreakpoint-BeUap6gk.js";import"./Input-BelaXqkC.js";import"./use-locale-7p-wVYXM.js";import"./use-merged-state-DCdOf7ht.js";import"./Add-CzCGN0lD.js";import"./InputNumber-D-AHAWQT.js";import"./RadioGroup-B2rFP7HH.js";import"./get-slot-BjAOOWF7.js";import"./ColorPicker--twUTkIu.js";import"./convert-BEzjbT9T.js";import"./Tooltip-anTY7wtM.js";import"./_baseIsEqual-BGsWZIhh.js";import"./format-length-l2rsThpR.js";import"./cssr-Bn6OPr4i.js";import"./next-frame-once-DiJwGkuW.js";import"./utils-Ur8S4I8h.js";import"./Checkmark-COOfFbaS.js";import"./Empty-BfqMuUzh.js";import"./Select-DqydGNb3.js";import"./Tag-Bmq0WN4v.js";import"./attribute-Cap6sGiE.js";import"./Checkbox-D1qHqI7h.js";import"./ChevronRight-Bi2575K4.js";import"./Slider-BwH87vok.js";import"./DatePicker-C5rP7mE9.js";import"./index-DVGRNl7o.js";import"./utils-C-DyHkjJ.js";import"./Switch-D1kMYwab.js";import"./Divider-BIoCbvN2.js";import"./RadioButton-DKPfpUY1.js";import"./FormItem-DN9aaP3F.js";import"./text-CvtvQEOx.js";import"./Space-B9frXtWC.js";import"./Grid-cihNI7Wf.js";import"./use-breakpoints-DcVC2Cdm.js";import"./Icon-DLWgwdKK.js";import"./TableAction-O37uf_Pg.js";import"./vuedraggable-DPwRvjoG.js";import"./componentSetting-C8-BnnRr.js";import"./useWindowSizeFn-DLIVMrXN.js";import"./isEqual-BiDbZAVD.js";import"./DataTable-C0kPRk4D.js";import"./Dropdown-DYvk341l.js";import"./create-ref-setter-DNc6_3jH.js";import"./Ellipsis-DnWSkqpp.js";import"./prop-Cw6lxrfM.js";import"./Popselect-CsqDIKho.js";const N=[{label:"张三",value:"1"},{label:"李四",value:"2"}],S=[{label:"私密",value:"1"},{label:"公开",value:"2"}],x=[{field:"f1",component:"NInput",label:"仓库名"},{field:"f2",component:"NInputGroup",label:"仓库域名",childrens:[{field:"f2",component:"NInputGroupLabel",isFull:!1,defaultSlot:"http://"},{field:"f2",component:"NInput"},{field:"f2",component:"NInputGroupLabel",isFull:!1,defaultSlot:"com"}]},{field:"f3",component:"NSelect",label:"仓库管理员",required:!0,componentProps:{options:N}},{field:"f4",component:"NSelect",label:"审批人",required:!0,componentProps:{options:N}},{field:"f5",component:"NDateRangePicker",label:"生效日期",required:!0,componentProps:{type:"daterange"}},{field:"f6",component:"NSelect",label:"仓库类型",required:!0,componentProps:{options:S}}],I=[{field:"t1",component:"NInput",label:"任务名"},{field:"t2",component:"NInput",label:"任务描述"},{field:"t3",component:"NSelect",label:"执行人",componentProps:{options:N}},{field:"t4",component:"NSelect",label:"责任人",componentProps:{options:N}},{field:"t5",component:"NTimePicker",label:"生效日期"},{field:"t6",component:"NSelect",label:"任务类型",componentProps:{options:S}}],w=u((k=((t,e)=>{for(var o in e||(e={}))i.call(e,o)&&p(t,o,e[o]);if(r)for(var o of r(e))s.call(e,o)&&p(t,o,e[o]);return t})({},{name:"HighFormPage"}),e(k,o({setup(t){const{info:e}=j(),[o,{submit:r,validate:i}]=a({gridProps:{cols:"1 550:2 800:3",xGap:48,yGap:16,responsive:"self"},labelPlacement:"top",schemas:x,showActionButtonGroup:!1,submitFunc:N}),[s,{submit:p,validate:u}]=a({gridProps:{cols:"1 550:2 800:3",xGap:48,yGap:16,responsive:"self"},labelPlacement:"top",schemas:I,showActionButtonGroup:!1,submitFunc:N});function N(t){return l(this,null,(function*(){e(JSON.stringify(t))}))}function S(){return l(this,null,(function*(){try{yield Promise.all([i(),u()]),r(),p()}catch(t){}}))}return(t,e)=>{const r=m,i=v,p=y,l=n;return d(),f(l,{class:"pb-12",title:"高级表单",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:b((()=>[g(p,{type:"primary",onClick:S},{default:b((()=>[h(" 提交 ")])),_:1})])),default:b((()=>[g(i,{title:"仓库管理"},{default:b((()=>[g(r,{class:"max-w-1200px mx-auto",onRegister:P(o)},null,8,["onRegister"])])),_:1}),g(i,{title:"任务管理",bordered:!1,class:"!mt-5"},{default:b((()=>[g(r,{class:"max-w-1200px mx-auto",onRegister:P(s)},null,8,["onRegister"])])),_:1}),g(i,{title:"成员管理",bordered:!1},{default:b((()=>[g(c)])),_:1})])),_:1})}}}))));var k;export{w as default};