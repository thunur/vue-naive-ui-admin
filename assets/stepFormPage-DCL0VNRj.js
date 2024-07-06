var t=Object.defineProperty,r=Object.defineProperties,e=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(r,e,o)=>e in r?t(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;import{_ as m}from"./PageWrapper-BNfpqhdE.js";import{d as a,r as l,o as j,e as n,w as u,h as c,a as v,b as f,S as d,T as g,f as b,_ as h}from"./index-C6F7-JtS.js";import{u as y}from"./useBreakpoint-DX913jyV.js";import S from"./Step1-C7tSsRjd.js";import k from"./Step2-CGBvy_l2.js";import x from"./Step3-8a2BFydF.js";import{_ as P,a as I}from"./Step-y1RYwvpm.js";import"./useRootSetting-BNDABB0S.js";import"./useNaiveInternal-BQMcGFc6.js";import"./light-lUIJmzb6.js";import"./light-7ReSsyVq.js";import"./light-C9o_lqNo.js";import"./light-CKZC8SgX.js";import"./light-xKurh90B.js";import"./light-D16k62Gl.js";import"./light-BCII6s01.js";import"./light-CucOWYbQ.js";import"./light-DIUvUmOo.js";import"./useDesign-CRwT266l.js";import"./useAppInject-PHGHdkg2.js";import"./propTypes-BrA6lfYr.js";import"./BasicForm-DyNGCjSr.js";import"./Icon-DYE_U4AS.js";import"./get-jboavJ-P.js";import"./Input-DqCdjJu0.js";import"./use-locale-ByhSuOII.js";import"./use-merged-state-9o6AQHu9.js";import"./Add-BGq-MMEf.js";import"./InputNumber-BGGzQzEn.js";import"./RadioGroup-DOryPW2D.js";import"./get-slot-BjAOOWF7.js";import"./ColorPicker-CPqBhJa7.js";import"./convert-BEzjbT9T.js";import"./Tooltip-CPoKw1Lj.js";import"./_baseIsEqual-DbOFHBu2.js";import"./format-length-l2rsThpR.js";import"./cssr-D4_Fn8ts.js";import"./next-frame-once-DiJwGkuW.js";import"./utils-CT_bzgsu.js";import"./Checkmark-DWXw6Z11.js";import"./Empty-Dc5RLD8j.js";import"./Select-DA-oj4aE.js";import"./Tag-DflLOt6s.js";import"./attribute-Cap6sGiE.js";import"./Checkbox-DY9r01Qv.js";import"./ChevronRight-TJ_DNj_a.js";import"./Slider-CvoLn5uS.js";import"./DatePicker-w1EpL8-p.js";import"./index-DLh_GeA6.js";import"./utils-DssuNWeR.js";import"./Switch-5e_v6W0i.js";import"./Divider-C2yuMtyF.js";import"./RadioButton-CmcsGo2G.js";import"./FormItem-D5Bi41Vk.js";import"./text-Dwv7G5S3.js";import"./Space-nLn5ELHN.js";import"./Grid-DrL4JrfR.js";import"./use-breakpoints-Dzw82uW6.js";import"./Icon-Besm54VG.js";import"./data-CVAC1kHX.js";import"./useForm-Cw0LBdEj.js";import"./headers-ehtePGxl.js";import"./Alert-jdnZ6lUq.js";import"./DescriptionsItem-x15YFvty.js";import"./Result-DVkvdxVs.js";const O={class:"mx-auto w-750px m-4"},w={class:"mt-8"},D=a((R=((t,r)=>{for(var e in r||(r={}))s.call(r,e)&&p(t,e,r[e]);if(o)for(var e of o(r))i.call(r,e)&&p(t,e,r[e]);return t})({},{name:"StepFormPage"}),r(R,e({setup(t){const r=l(1),e=l("process"),o=l(!1),s=l(!1),{smaller:i,sizeEnum:p}=y(),a=i(p.MD);function D(t){r.value++,o.value=!0}function R(){r.value--}function _(){r.value++,s.value=!0}function C(){r.value=1,o.value=!1,s.value=!1}return(t,i)=>{const p=P,l=I,y=h,E=m;return j(),n(E,{title:"分步表单","content-background":"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。","content-class":"p-4"},{default:u((()=>[c(y,null,{default:u((()=>[v("div",O,[c(l,{current:r.value,vertical:f(a),status:e.value,class:"md:ml-1/7"},{default:u((()=>[c(p,{title:"填写转账信息"}),c(p,{title:"确认转账信息"}),c(p,{title:"完成"})])),_:1},8,["current","vertical","status"])]),v("div",w,[d(c(S,{onNext:D},null,512),[[g,1===r.value]]),o.value?d((j(),n(k,{key:0,onPrev:R,onNext:_},null,512)),[[g,2===r.value]]):b("",!0),s.value?d((j(),n(x,{key:1,onRedo:C},null,512)),[[g,3===r.value]]):b("",!0)])])),_:1})])),_:1})}}}))));var R;export{D as default};