import{cg as t,i as e,r,aA as n}from"./index-C6F7-JtS.js";function i(t){if("number"==typeof t)return{"":t.toString()};const e={};return t.split(/ +/).forEach((t=>{if(""===t)return;const[r,n]=t.split(":");void 0===n?e[""]=r:e[r]=n})),e}function s(t,e){var r;if(null==t)return;const n=i(t);if(void 0===e)return n[""];if("string"==typeof e)return null!==(r=n[e])&&void 0!==r?r:n[""];if(Array.isArray(e)){for(let t=e.length-1;t>=0;--t){const r=e[t];if(r in n)return n[r]}return n[""]}{let t,r=-1;return Object.keys(n).forEach((i=>{const s=Number(i);!Number.isNaN(s)&&e>=s&&s>=r&&(r=s,t=n[i])})),t}}const a={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};const o={};function c(i=a){if(!t)return e((()=>[]));if("function"!=typeof window.matchMedia)return e((()=>[]));const s=r({}),c=Object.keys(i),f=(t,e)=>{t.matches?s.value[e]=!0:s.value[e]=!1};return c.forEach((t=>{const e=i[t];let r,n;void 0===o[e]?(r=window.matchMedia(`(min-width: ${e}px)`),r.addEventListener?r.addEventListener("change",(e=>{n.forEach((r=>{r(e,t)}))})):r.addListener&&r.addListener((e=>{n.forEach((r=>{r(e,t)}))})),n=new Set,o[e]={mql:r,cbs:n}):(r=o[e].mql,n=o[e].cbs),n.add(f),r.matches&&n.forEach((e=>{e(r,t)}))})),n((()=>{c.forEach((t=>{const{cbs:e}=o[i[t]];e.has(f)&&e.delete(f)}))})),e((()=>{const{value:t}=s;return c.filter((e=>t[e]))}))}export{s as a,i as p,c as u};
