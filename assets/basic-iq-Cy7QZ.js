import{_ as o}from"./PageWrapper-DeLt5MNd.js";import{u as t}from"./useModal-BCpLf_9i.js";import r from"./Modal1-nOZTPqhM.js";import s from"./Modal2-i6bS2Wxj.js";import e from"./Modal3-BJGuyARq.js";import i from"./Modal4-DArwfYZn.js";import{V as a,d as p,W as m,r as l,X as n,o as j,e as d,w as u,h as g,q as c,j as M,Y as h,B as f}from"./index-DRiF00Hx.js";import{_ as k}from"./Alert-BOWdd9vj.js";import"./useRootSetting-CvQdJ3NP.js";import"./useNaiveInternal-CDo8OqOT.js";import"./light-B2Z_Bonw.js";import"./light-BowfIMOf.js";import"./light-BWoNxIrM.js";import"./light-DsXUiQMM.js";import"./light-BjF-GFCJ.js";import"./light-iUBSSS2B.js";import"./light-uiqwkDz5.js";import"./light-Cg5vy_o4.js";import"./light-41H1pviH.js";import"./useDesign-BvV_xiJk.js";import"./useAppInject-BhOAEsGY.js";import"./propTypes-BrA6lfYr.js";import"./isEqual-M8Xd0A8n.js";import"./_baseIsEqual-CCRaRR-p.js";import"./BasicModal-DmlTDWHj.js";import"./ScrollContainer-C3LgCatW.js";import"./componentSetting-C8-BnnRr.js";import"./useWindowSizeFn-DPkcjxGY.js";import"./Icon-BBFjs19F.js";import"./Tooltip-CFz38RsP.js";import"./get-g7Q8ZpuG.js";import"./format-length-l2rsThpR.js";import"./cssr-BAp9t9hT.js";import"./use-merged-state-D6ChJkmy.js";import"./next-frame-once-DiJwGkuW.js";import"./Space-Bn-zZsLi.js";import"./get-slot-BjAOOWF7.js";import"./BasicForm-BVhac1H-.js";import"./useBreakpoint-D5Jm5jpu.js";import"./Input-CsapG9XR.js";import"./use-locale-B6YvjK0_.js";import"./Add-CNS4l2VR.js";import"./InputNumber-gtL-_-KQ.js";import"./RadioGroup-B2bZxxCM.js";import"./ColorPicker-BGgrNs60.js";import"./convert-BEzjbT9T.js";import"./utils-gZPJG5sK.js";import"./Checkmark-DfZLjuro.js";import"./Empty-Byo6tjCM.js";import"./Select-DJOhsJHO.js";import"./Tag-DnTiE1E0.js";import"./attribute-Cap6sGiE.js";import"./Checkbox-B0o-0lIF.js";import"./ChevronRight-IasqeWR6.js";import"./Slider-DhqDtrZC.js";import"./DatePicker-h7fBJGMd.js";import"./index-Dge0Bz3e.js";import"./utils-BKNBMClf.js";import"./Switch-CQUz5TKJ.js";import"./Divider-Bf1_7ZnV.js";import"./RadioButton-CnEjLwTa.js";import"./FormItem-CyKV7FfW.js";import"./text-B2L-mfFF.js";import"./Grid-V2ocwKXT.js";import"./use-breakpoints-904_rLaz.js";import"./Icon-CrA-p7eB.js";import"./useForm-CgimpDA7.js";const b=a(p({components:{Modal1:r,Modal2:s,Modal3:e,Modal4:i},setup(){const o=m(null),a=l(!1),p=l(null),[n,{openModal:j}]=t(),[d,{openModal:u}]=t(),[g,{openModal:c}]=t(),[M,{openModal:f}]=t();return{register1:n,openModal1:j,register2:d,openModal2:u,register3:g,openModal3:c,register4:M,openModal4:f,modalShow:a,userData:p,openTargetModal:function(t){switch(t){case 1:o.value=r;break;case 2:o.value=s;break;case 3:o.value=e;break;default:o.value=i}h((()=>{p.value={data:Math.random(),info:"Info222"},a.value=!0}))},send:function(){f(!0,{data:"content",info:"Info"})},currentModal:o,openModalLoading:function(){j(!0)}}}}),[["render",function(t,r,s,e,i,a){const p=k,m=f,l=n("Modal1"),h=n("Modal2"),b=n("Modal3"),w=n("Modal4"),R=o;return j(),d(R,{title:"modal组件使用示例"},{default:u((()=>[g(p,{title:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable 参数进行控制是否可以拖动/全屏，并演示了在Modal内动态加载内容并自动调整高度",type:"info","show-icon":"",class:"mb-10px"}),g(m,{type:"primary",onClick:t.openModalLoading,class:"mb-10px"},{default:u((()=>[c(" 打开弹窗,加载动态数据并自动调整高度(默认可以拖动/全屏) ")])),_:1},8,["onClick"]),(j(),d(M(t.currentModal),{show:t.modalShow,"onUpdate:show":r[0]||(r[0]=o=>t.modalShow=o),userData:t.userData},null,40,["show","userData"])),g(p,{title:"自适应高度",type:"info","show-icon":"",class:"mb-10px"}),g(m,{type:"primary",onClick:r[1]||(r[1]=o=>t.openTargetModal(3))},{default:u((()=>[c(" 打开弹窗 ")])),_:1}),g(l,{onRegister:t.register1,minHeight:100},null,8,["onRegister"]),g(h,{onRegister:t.register2},null,8,["onRegister"]),g(b,{onRegister:t.register3},null,8,["onRegister"]),g(w,{onRegister:t.register4},null,8,["onRegister"])])),_:1})}]]);export{b as default};