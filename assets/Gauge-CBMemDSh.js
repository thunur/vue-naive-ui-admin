var t=Object.defineProperty,e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(e,r,o)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;import{_ as s}from"./LoadingCard-DXTzHhK4.js";import{u as i}from"./useECharts-DPSTCsEY.js";import{b as p}from"./chartProps-Bicb7JjS.js";import{u as n}from"./useLoading-CAZ0Kvgl.js";import{d as l,r as m,o as u,e as f,w as j,a as d,bv as g,b}from"./index-C6F7-JtS.js";import"./Space-nLn5ELHN.js";import"./light-D16k62Gl.js";import"./get-slot-BjAOOWF7.js";import"./Skeleton-CPFA5W4M.js";import"./light-CucOWYbQ.js";import"./use-houdini-HcxwaZbf.js";import"./useRootSetting-BNDABB0S.js";import"./layoutContentResize-CrU3lvLf.js";import"./propTypes-BrA6lfYr.js";const c=l({__name:"Gauge",props:((t,s)=>{for(var i in s||(s={}))r.call(s,i)&&a(t,i,s[i]);if(e)for(var i of e(s))o.call(s,i)&&a(t,i,s[i]);return t})({},p("250px")),setup(t){const e=m(),r=n();return i({chartRef:e},{tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",progress:{show:!0},detail:{valueAnimation:!0,formatter:"{value}",fontSize:"20"},data:[{value:50,name:"SCORE"}]}]}),(t,o)=>{const a=s;return u(),f(a,{loading:b(r),title:"仪表盘"},{default:j((()=>[d("div",{ref_key:"chartRef",ref:e,style:g({width:t.width,height:t.height})},null,4)])),_:1},8,["loading"])}}});export{c as default};