var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{u as i}from"./useECharts-DPSTCsEY.js";import{b as s}from"./chartProps-Bicb7JjS.js";import{d as p,r as l,o as n,c as y,bv as b}from"./index-C6F7-JtS.js";import"./useRootSetting-BNDABB0S.js";import"./layoutContentResize-CrU3lvLf.js";import"./propTypes-BrA6lfYr.js";const c=p({__name:"VisitAnalysisBar",props:((e,i)=>{for(var s in i||(i={}))r.call(i,s)&&a(e,s,i[s]);if(t)for(var s of t(i))o.call(i,s)&&a(e,s,i[s]);return e})({},s("280px")),setup(e){const t=l();return i({chartRef:t},{tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]}),(e,r)=>(n(),y("div",{ref_key:"chartRef",ref:t,style:b({height:e.height,width:e.width})},null,4))}});export{c as default};
