import{D as W,a as q,_ as J}from"./useDark-7f7a3752.js";import{h as B,p as n,J as c,K as t,o as r,k as e,q as p,Q as l,V as $,l as y,W as S,X as I,Y as F,t as u,Z as H,S as V,_ as U,r as K,R as k,L as P,$ as Q,a0 as X}from"./vue-cc6aeb83.js";import{u as E,g as Y,s as Z,h as j,j as G,_ as R,f as O,k as ee}from"./index-1ab2f843.js";import{u as A,o as te}from"./router-5a06563b.js";const ne="/api/index/";function se(){const f=E(),d=A();if(!f.siteName)return Y({url:ne+"index",method:"get"}).then(s=>{Z(s.data.site.siteName),f.dataFill(s.data.site),d.setStatus(s.data.openMemberCenter),s.data.openMemberCenter||d.setLayoutMode("Disable")})}const ae={class:"userinfo"},oe=["src"],le={class:"username"},re={class:"user-menus"},ie={key:0,class:"user-menu-max-title"},ue=["onClick"],ce=B({__name:"aside",setup(f){const d=F(),s=j(),i=A(),_=(v="",m)=>{document.body.clientWidth<992&&i.toggleMenuExpand(!1),v?d.push({name:v}):m&&te(m)};return(v,m)=>{const x=u("Icon"),C=u("el-button"),a=u("el-button-group"),z=u("el-aside"),g=H("blur");return n(),c(z,{class:"ba-user-layouts"},{default:t(()=>[r("div",ae,[r("div",{onClick:m[0]||(m[0]=b=>_("account/profile")),class:"user-avatar-box"},[r("img",{class:"user-avatar",src:e(G)(e(s).avatar?e(s).avatar:"/static/images/avatar.png"),alt:""},null,8,oe),p(x,{class:"user-avatar-gender",name:e(s).getGenderIcon().name,size:"14",color:e(s).getGenderIcon().color},null,8,["name","color"])]),r("p",le,l(e(s).nickname),1),p(a,null,{default:t(()=>[$((n(),c(C,{onClick:m[1]||(m[1]=b=>_("account/integral")),class:"userinfo-button-item",title:v.$t("Integral")+" "+e(s).score,size:"default",plain:""},{default:t(()=>[r("span",null,l(v.$t("Integral")+" "+e(s).score),1)]),_:1},8,["title"])),[[g]]),$((n(),c(C,{onClick:m[2]||(m[2]=b=>_("account/balance")),class:"userinfo-button-item",title:v.$t("Balance")+" "+e(s).money,size:"default",plain:""},{default:t(()=>[r("span",null,l(v.$t("Balance")+" "+e(s).money),1)]),_:1},8,["title"])),[[g]])]),_:1})]),r("div",re,[(n(!0),y(I,null,S(e(i).state.viewRoutes,(b,D)=>{var M;return n(),y(I,{key:D},[e(i).state.showHeadline?(n(),y("div",ie,l((M=b.meta)==null?void 0:M.title),1)):V("",!0),(n(!0),y(I,null,S(b.children,(w,N)=>{var L,h,o;return n(),y("div",{key:N,onClick:T=>_("",w),class:U(["user-menu-item",((L=e(i).state.activeRoute)==null?void 0:L.name)==w.name?"active":""])},[p(x,{name:(h=w.meta)==null?void 0:h.icon,size:"16",color:"var(--el-text-color-secondary)"},null,8,["name"]),r("span",null,l((o=w.meta)==null?void 0:o.title),1)],10,ue)}),128))],64)}),128))])]),_:1})}}});const de=R(ce,[["__scopeId","data-v-723a7442"]]),_e=f=>(Q("data-v-2a8c3fb6"),f=f(),X(),f),me=_e(()=>r("img",{src:J},null,-1)),pe={class:"hidden-xs-only"},fe={class:"header-user-box"},ve=["src"],ge=B({__name:"header",setup(f){const d=K({activeMenu:""}),s=P(),i=j(),_=F(),v=O(),m=E(),x=A();switch(s.name){case"/":d.activeMenu="";break;case"userLogin":d.activeMenu="user";break}return se(),(C,a)=>{const z=u("Icon"),g=u("el-menu-item"),b=u("el-sub-menu"),D=u("el-menu"),M=u("el-col"),w=u("el-row"),N=u("el-drawer"),L=u("el-header"),h=H("blur");return n(),c(L,{class:"header"},{default:t(()=>[p(w,{justify:"center"},{default:t(()=>[p(M,{class:"header-row",span:16,xs:24},{default:t(()=>[r("div",{class:U([e(i).isLogin()?"hidden-sm-and-down":"","header-logo"]),onClick:a[0]||(a[0]=o=>e(_).push({name:"/"}))},[me,r("span",pe,l(e(m).siteName),1)],2),e(i).isLogin()?(n(),y("div",{key:0,onClick:a[1]||(a[1]=o=>e(x).toggleMenuExpand(!0)),class:"user-menus-expand hidden-md-and-up"},[p(z,{name:"fa fa-indent",color:"var(--el-color-primary)",size:"20"})])):V("",!0),p(D,{"default-active":d.activeMenu,class:"frontend-header-menu",mode:"horizontal",ellipsis:!1},{default:t(()=>[$((n(),c(g,{onClick:a[2]||(a[2]=o=>e(_).push({name:"/"})),index:"index"},{default:t(()=>[k(l(C.$t("Home")),1)]),_:1})),[[h]]),e(x).state.open?(n(),y(I,{key:0},[e(i).isLogin()?$((n(),c(b,{key:0,index:"user"},{title:t(()=>[r("div",fe,[r("img",{class:"header-user-avatar",src:e(G)(e(i).avatar?e(i).avatar:"/static/images/avatar.png"),alt:""},null,8,ve),k(" "+l(e(i).nickname),1)])]),default:t(()=>[$((n(),c(g,{onClick:a[3]||(a[3]=o=>e(_).push({name:"user"})),index:"user-index"},{default:t(()=>[k(l(C.$t("Member Center")),1)]),_:1})),[[h]]),$((n(),c(g,{onClick:a[4]||(a[4]=o=>e(i).logout()),index:"user-logout"},{default:t(()=>[k(l(C.$t("Logout login")),1)]),_:1})),[[h]])]),_:1})),[[h]]):$((n(),c(g,{key:1,onClick:a[5]||(a[5]=o=>e(_).push({name:"user"})),index:"user"},{default:t(()=>[k(l(C.$t("Member Center")),1)]),_:1})),[[h]])],64)):V("",!0),$((n(),c(b,{index:"switch-language"},{title:t(()=>[k(l(C.$t("Language")),1)]),default:t(()=>[(n(!0),y(I,null,S(e(v).lang.langArray,o=>(n(),c(g,{onClick:T=>e(ee)(o.name),key:o.name,index:"switch-language-"+o.value},{default:t(()=>[k(l(o.value),1)]),_:2},1032,["onClick","index"]))),128))]),_:1})),[[h]]),p(g,{index:"theme-switch",class:"theme-switch"},{default:t(()=>[p(W,{onClick:a[6]||(a[6]=o=>e(q)())})]),_:1})]),_:1},8,["default-active"])]),_:1})]),_:1}),p(N,{class:"aside-drawer","append-to-body":!0,modelValue:e(x).state.menuExpand,"onUpdate:modelValue":a[7]||(a[7]=o=>e(x).state.menuExpand=o),"with-header":!1,direction:"ltr",size:"70%"},{default:t(()=>[p(de)]),_:1},8,["modelValue"])]),_:1})}}});const xe=R(ge,[["__scopeId","data-v-2a8c3fb6"]]),he={href:"http://beian.miit.gov.cn/"},Ce=B({__name:"footer",setup(f){const d=E();return(s,i)=>{const _=u("el-footer");return n(),c(_,{class:"footer"},{default:t(()=>[r("div",null,[k(" Copyright @ 2020~2022 "+l(e(d).siteName)+" "+l(s.$t("Copyright"))+" ",1),r("a",he,l(e(d).recordNumber),1)])]),_:1})}}});const we=R(Ce,[["__scopeId","data-v-5dadaf49"]]);export{de as A,we as F,xe as H};
