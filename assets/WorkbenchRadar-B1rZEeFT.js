import{p as a}from"./propTypes-BrA6lfYr.js";import{u as e}from"./useECharts-DPSTCsEY.js";import{d as t,r as s,o as r,e as o,w as i,a as m,bv as n,_ as d}from"./index-C6F7-JtS.js";import"./useRootSetting-BNDABB0S.js";import"./layoutContentResize-CrU3lvLf.js";const l=t({__name:"WorkbenchRadar",props:{width:a.string.def("100%"),height:a.string.def("350px")},setup(a){const t=s();return e({chartRef:t},{tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"一月",max:160},{name:"二月",max:160},{name:"三月",max:160},{name:"四月",max:160},{name:"五月",max:160},{name:"六月",max:160}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:3,shadowColor:"rgba(0,0,0,.15)",shadowOffsetX:3,shadowOffsetY:5,opacity:.75},data:[{value:[78,32,120,64,40,29],name:"点赞",itemStyle:{color:"#00d8ff"}},{value:[98,87,63,46,112,101],name:"评论数",itemStyle:{color:"#1fdaca"}}]}]}),(e,s)=>{const l=d;return r(),o(l,{title:"数据统计"},{default:i((()=>[m("div",{ref_key:"chartRef",ref:t,style:n({width:a.width,height:a.height})},null,4)])),_:1})}}});export{l as default};
