var r=Object.defineProperty,e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,a=(r,a)=>{for(var s in a||(a={}))t.call(a,s)&&n(r,s,a[s]);if(e)for(var s of e(a))o.call(a,s)&&n(r,s,a[s]);return r};import{r as s,i,ag as l,b as c,eV as u}from"./index-C6F7-JtS.js";var g=(r=>(r[r.LOGIN=0]="LOGIN",r[r.REGISTER=1]="REGISTER",r[r.RESET_PASSWORD=2]="RESET_PASSWORD",r[r.MOBILE=3]="MOBILE",r[r.QR_CODE=4]="QR_CODE",r))(g||{});const d=s(0);function p(){function r(r){d.value=r}return{setLoginState:r,getLoginState:i((()=>d.value)),handleBackLogin:function(){r(0)}}}function f(r){const e=c(r);if(!e)return;const t=u(),o=u();return e.validate((r=>{r?o.trigger(r):t.trigger(r)})),{onSuccess:t.on,onError:o.on}}function b(r){const{t:e}=l(),t=i((()=>E(e("sys.login.accountPlaceholder")))),o=i((()=>E(e("sys.login.passwordPlaceholder")))),n=i((()=>E(e("sys.login.smsPlaceholder")))),s=i((()=>E(e("sys.login.mobilePlaceholder")))),u=(r,t)=>!!t||new Error(e("sys.login.policyPlaceholder")),g=(e,t)=>{const o=null==r?void 0:r.password;return!!o&&o.startsWith(t)&&o.length>=t.length},p=(e,t)=>(null==r?void 0:r.password)===t;return{getFormRules:i((()=>{const r=c(t),e=c(o),i={sms:c(n),mobile:c(s)};switch(c(d)){case 1:return a({account:r,password:e,confirmPassword:[{required:!0,message:"请再次输入密码",trigger:["input","blur"]},{validator:g,trigger:"input"},{validator:p,trigger:["blur","password-input"]}],policy:[{validator:u,trigger:"change"}]},i);case 2:return a({account:r},i);case 3:return i;default:return{account:r,password:e}}}))}}function E(r){return[{required:!0,message:r,trigger:"change"}]}export{g as L,b as a,f as b,p as u};