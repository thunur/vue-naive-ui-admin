var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{gs as u,gt as l,fc as s,gu as m,gv as f,gw as d,d as v,i as c,gx as p,q as y,k as g,L as h,E as x,gy as b,o as w,e as D,U as O}from"./index-C6F7-JtS.js";import{a as T,f as S,g as j}from"./index-DLh_GeA6.js";import{u as M}from"./use-locale-ByhSuOII.js";var E=1440,R=525600;function B(e,t,a){var r,o,n;u(2,arguments);var i=f(),d=null!==(r=null!==(o=null==a?void 0:a.locale)&&void 0!==o?o:i.locale)&&void 0!==r?r:s;if(!d.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var v=function(e,t){u(2,arguments);var a=l(e),r=l(t),o=a.getTime()-r.getTime();return o<0?-1:o>0?1:o}(e,t);if(isNaN(v))throw new RangeError("Invalid time value");var c,p,y=T(T({},a),{addSuffix:Boolean(null==a?void 0:a.addSuffix),comparison:v});v>0?(c=l(t),p=l(e)):(c=l(e),p=l(t));var g,h=String(null!==(n=null==a?void 0:a.roundingMethod)&&void 0!==n?n:"round");if("floor"===h)g=Math.floor;else if("ceil"===h)g=Math.ceil;else{if("round"!==h)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");g=Math.round}var x,b=p.getTime()-c.getTime(),w=b/6e4,D=(b-(m(p)-m(c)))/6e4,O=null==a?void 0:a.unit;if("second"===(x=O?String(O):w<1?"second":w<60?"minute":w<E?"hour":D<43200?"day":D<R?"month":"year")){var S=g(b/1e3);return d.formatDistance("xSeconds",S,y)}if("minute"===x){var j=g(w);return d.formatDistance("xMinutes",j,y)}if("hour"===x){var M=g(w/60);return d.formatDistance("xHours",M,y)}if("day"===x){var B=g(D/E);return d.formatDistance("xDays",B,y)}if("month"===x){var P=g(D/43200);return 12===P&&"month"!==O?d.formatDistance("xYears",1,y):d.formatDistance("xMonths",P,y)}if("year"===x){var N=g(D/R);return d.formatDistance("xYears",N,y)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function P(e){u(1,arguments);var t=d(e);return l(1e3*t)}const N=v({name:"Time",props:{time:{type:[Number,Date],default:void 0},type:{type:String,default:"datetime"},to:{type:[Number,Date],default:void 0},unix:Boolean,format:String,text:Boolean,timeZone:String},setup(e){const t=Date.now(),{localeRef:a,dateLocaleRef:r}=M("Time"),o=c((()=>{const{timeZone:t}=e;return t?(e,a,r)=>S(e,t,a,r):p})),n=c((()=>({locale:r.value.locale}))),i=c((()=>{const{time:a}=e;return e.unix?void 0===a?t:P("number"==typeof a?a:a.valueOf()):null!=a?a:t})),u=c((()=>{const{to:a}=e;return e.unix?void 0===a?t:P("number"==typeof a?a:a.valueOf()):null!=a?a:t}));return{renderedTime:c((()=>e.format?o.value(i.value,e.format,n.value):"date"===e.type?o.value(i.value,a.value.dateFormat,n.value):"datetime"===e.type?o.value(i.value,a.value.dateTimeFormat,n.value):B(i.value,u.value,{addSuffix:!0,locale:r.value.locale})))}},render(){return this.text?y(this.renderedTime):g("time",[this.renderedTime])}}),z=v((F=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&i(e,a,t[a]);return e})({},{name:"Time"}),I={props:{step:{default:0},time:{},type:{},to:{default:Date.now()},unix:{type:Boolean},format:{},text:{type:Boolean},timezone:{}},setup(e){const t=e;let a,r=Date.now();const o=c((()=>a.value-r)),n=c((()=>{if(!t.step)return r;const{time:e}=t;return(e||0===e?j(e):r)+o.value})),i=c((()=>h(t,["time","step"])));return x((()=>t.step),(e=>{const{timestamp:t,pause:o}=b({controls:!0,interval:e});e||(r=Date.now(),o()),a=t}),{immediate:!0}),(e,t)=>{const a=N;return w(),D(a,O({time:n.value},i.value),null,16,["time"])}}},t(F,a(I))));var F,I;export{z as _};
