import{gr as s,es as t,b6 as e}from"./index-C6F7-JtS.js";const o=Symbol(),n=(n,i=!0)=>{const{on:r,off:a,reset:f,emit:m}=s(o);let c,u;function b(s){const t=s||c||u;t&&a(t)}return t((()=>{i&&b()})),{on:function(s,{wait:t=150,immediate:o=!1,isPassPars:n=!0}={}){c=e(s,t),u=()=>{c()},r(n?c:()=>{c()}),o&&m()},off:b,reset:f,emit:m}};export{n as u};
