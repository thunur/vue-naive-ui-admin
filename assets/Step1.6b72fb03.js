import{_ as e}from"./BasicForm.4dff5274.js";import{s as a}from"./data.b0440d6e.js";import{u as t}from"./useForm.9e060af5.js";import{G as s,V as o,a9 as r,ao as n,Y as l,X as u,u as i,aF as m,aH as c,aP as d,cb as p,cm as f,aO as v}from"./vendor.07696a3b.js";import"./Icon.b68f9da1.js";import"./index.3471ac16.js";import"./propTypes.eec1be73.js";import"./useDesign.9e27b231.js";import"./useBreakpoint.df800c30.js";const x={class:"mx-auto max-w-450px"},b=m(" ￥ "),h=m("说明"),j=m("转账到支付宝账户"),y=n("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),_=m("转账到银行卡"),g=m(" 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 "),w=s({emits:["next"],setup(s,{emit:m}){const[w,{validate:B}]=t({labelWidth:100,schemas:a,showResetButton:!1,gridProps:{cols:1},submitButtonText:"下一步",submitFunc:function(){return e=this,a=null,t=function*(){try{const e=yield B();m("next",e)}catch(e){}},new Promise(((s,o)=>{var r=e=>{try{l(t.next(e))}catch(a){o(a)}},n=e=>{try{l(t.throw(e))}catch(a){o(a)}},l=e=>e.done?s(e.value):Promise.resolve(e.value).then(r,n);l((t=t.apply(e,a)).next())}));var e,a,t}});return(a,t)=>{const s=c,m=e,B=d,F=p,P=f,R=v;return o(),r("div",null,[n("div",x,[l(m,{onRegister:i(w)},{money:u((({model:e,field:a})=>[l(s,{value:e[a],"onUpdate:value":t=>e[a]=t},{prefix:u((()=>[b])),_:2},1032,["value","onUpdate:value"])])),_:1},8,["onRegister"])]),l(B),l(F,null,{default:u((()=>[h])),_:1}),l(P,null,{default:u((()=>[j])),_:1}),y,l(P,null,{default:u((()=>[_])),_:1}),l(R,null,{default:u((()=>[g])),_:1})])}}});export{w as default};