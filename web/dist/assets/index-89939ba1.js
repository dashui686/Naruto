import{b as y,T as k,a as I}from"./index-9ca9fad8.js";import{k as L}from"./controllerUrls-941681c3.js";import{a as E,P as q}from"./popupForm-8a09f8ec.js";import{p as v,Z as w}from"./index-1ab2f843.js";import{h as d,y as S,r as z,av as C,C as N,p as l,l as P,k as a,J as u,S as i,q as n,K as m,i as R,V as T,o as U,Q as x,L as A,t as p,al as D,Z as B}from"./vue-cc6aeb83.js";import"./index-7a4e471c.js";import"./index-ed702c00.js";import"./validate-080ffb17.js";const F={class:"default-main ba-table-box"},K={class:"table-header-operate-text"},G=d({name:"user/scoreLog"}),X=d({...G,setup(V){const{t:e}=v(),b=S(),f=A().query.user_id??"",t=z({userInfo:{}}),r=new y(new w(L),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("user.moneyLog.User ID"),prop:"user_id",align:"center",operator:"=",width:70},{label:e("user.moneyLog.User name"),prop:"user.username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.moneyLog.User nickname"),prop:"user.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.scoreLog.Change points"),prop:"score",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.Before change"),prop:"before",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.After change"),prop:"after",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.remarks"),prop:"memo",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),"show-overflow-tooltip":!0},{label:e("createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160}],dblClickNotEditColumn:["all"]},{defaultItems:{user_id:f,memo:""}},{},{onSubmit:()=>{s(r.comSearch.form.user_id)}});r.mount(),r.getIndex(),D("baTable",r);const s=o=>{o&&C(o)>0?E(o).then(c=>{t.userInfo=c.data.user}):t.userInfo={}};return s(r.comSearch.form.user_id),N(()=>r.comSearch.form.user_id,o=>{r.form.defaultItems.user_id=o,s(o)}),(o,c)=>{const h=p("el-alert"),_=p("el-button"),g=B("blur");return l(),P("div",F,[a(r).table.remark?(l(),u(h,{key:0,class:"ba-table-alert",title:a(r).table.remark,type:"info","show-icon":""},null,8,["title"])):i("",!0),n(k,{buttons:["refresh","add","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("quick Search Placeholder",{fields:a(e)("user.moneyLog.User name")+"/"+a(e)("user.moneyLog.User nickname")})},{default:m(()=>[a(R)(t.userInfo)?i("",!0):T((l(),u(_,{key:0,class:"table-header-operate"},{default:m(()=>[U("span",K,x(t.userInfo.username+"(ID:"+t.userInfo.id+") "+a(e)("user.scoreLog.integral")+":"+t.userInfo.score),1)]),_:1})),[[g]])]),_:1},8,["quick-search-placeholder"]),n(I,{ref_key:"tableRef",ref:b},null,512),n(q)])}}});export{X as default};
