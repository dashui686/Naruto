import{b as d,T as u,a as m}from"./index-9ca9fad8.js";import{c as h}from"./controllerUrls-941681c3.js";import{p as b,ad as f,Z as g,ae as y}from"./index-1ab2f843.js";import L from"./info-1f1817a2.js";import{h as c,aq as _,an as w,p,l as z,k as r,J as k,S as q,q as n,t as E,al as I}from"./vue-cc6aeb83.js";import"./index-7a4e471c.js";const T={class:"default-main ba-table-box"},P=c({name:"auth/adminLog"}),S=c({...P,setup(F){const{t:e}=b();let l=[{render:"tipButton",name:"info",title:"info",text:"",type:"primary",icon:"fa fa-search-plus",class:"table-row-edit",disabledTip:!1,click:t=>{i(t)}}];l=_(l,f(["delete"]));const a=new d(new g(h),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("auth.adminLog.admin_id"),prop:"admin_id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("auth.adminLog.username"),prop:"username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:160},{label:e("auth.adminLog.title"),prop:"title",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{show:!1,label:e("auth.adminLog.data"),prop:"data",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),"show-overflow-tooltip":!0},{label:e("auth.adminLog.url"),prop:"url",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),"show-overflow-tooltip":!0,render:"url"},{label:e("auth.adminLog.ip"),prop:"ip",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),render:"tag"},{label:e("auth.adminLog.useragent"),prop:"useragent",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),"show-overflow-tooltip":!0},{label:e("auth.adminLog.createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("operate"),align:"center",width:"100",render:"buttons",buttons:l,operator:!1}],dblClickNotEditColumn:[void 0]},{},{onTableDblclick:({row:t})=>(i(t),!1)});a.mount(),a.getIndex(),I("baTable",a);const i=t=>{if(!t)return;let o=w(t);o.data=o.data?[{label:"点击展开",children:y(JSON.parse(o.data))}]:[],a.form.extend.info=o,a.form.operate="info"};return(t,o)=>{const s=E("el-alert");return p(),z("div",T,[r(a).table.remark?(p(),k(s,{key:0,class:"ba-table-alert",title:r(a).table.remark,type:"info","show-icon":""},null,8,["title"])):q("",!0),n(u,{buttons:["refresh","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":r(e)("quick Search Placeholder",{fields:r(e)("auth.adminLog.title")})},null,8,["quick-search-placeholder"]),n(m),n(L)])}}});export{S as default};
