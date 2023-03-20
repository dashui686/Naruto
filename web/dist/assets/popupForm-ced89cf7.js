import{h as G,y as C,r as x,C as L,p as c,J as f,K as r,V as h,l as P,R as g,Q as y,k as e,o as K,q as u,m as R,a4 as T,_ as U,ah as W,t as i,Z as p}from"./vue-cc6aeb83.js";import{g as $,p as A,q as V,_ as H}from"./index-1ab2f843.js";import{h as J}from"./controllerUrls-941681c3.js";import{F as Q}from"./index-ed702c00.js";import{b as Z}from"./validate-080ffb17.js";import"./index-9ca9fad8.js";import"./index-7a4e471c.js";function M(){return $({url:J+"index",method:"get"})}const O={class:"title"},X=G({__name:"popupForm",setup(Y,{expose:w}){const _=C(),b=C(),t=W("baTable"),{t:l}=A(),a=x({treeKey:V(),defaultCheckedKeys:[],menuRules:[]}),F=x({name:[Z({name:"required",title:l("user.group.Group name")})],auth:[{required:!0,validator:(s,o,n)=>v().length<=0?n(new Error(l("Please select field",{field:l("user.group.jurisdiction")}))):n()}]});M().then(s=>{a.menuRules=s.data.list});const v=()=>_.value.getCheckedKeys().concat(_.value.getHalfCheckedKeys()),N=(s,o)=>{if(o.isLeaf)return"";let n=!0;for(const m in o.childNodes)o.childNodes[m].isLeaf||(n=!1);return n?"penultimate-node":""};return w({getCheckeds:v}),L(()=>t.form.items.rules,()=>{if(t.form.items.rules&&t.form.items.rules.length)if(t.form.items.rules.includes("*")){let s=[];for(const o in a.menuRules)s.push(a.menuRules[o].id);a.defaultCheckedKeys=s}else a.defaultCheckedKeys=t.form.items.rules;else a.defaultCheckedKeys=[];a.treeKey=V()}),(s,o)=>{const n=i("el-input"),m=i("el-form-item"),S=i("el-tree"),D=i("el-form"),I=i("el-scrollbar"),k=i("el-button"),q=i("el-dialog"),z=p("drag"),B=p("zoom"),j=p("loading"),E=p("blur");return c(),f(q,{class:"ba-operate-dialog",top:"10vh","close-on-click-modal":!1,"model-value":!!e(t).form.operate,onClose:e(t).toggleForm,"destroy-on-close":!0},{header:r(()=>[h((c(),P("div",O,[g(y(e(t).form.operate?e(l)(e(t).form.operate):""),1)])),[[z,[".ba-operate-dialog",".el-dialog__header"]],[B,".ba-operate-dialog"]])]),footer:r(()=>[K("div",{style:R("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[u(k,{onClick:o[3]||(o[3]=d=>e(t).toggleForm(""))},{default:r(()=>[g(y(e(l)("Cancel")),1)]),_:1}),h((c(),f(k,{loading:e(t).form.submitLoading,onClick:o[4]||(o[4]=d=>e(t).onSubmit(b.value)),type:"primary"},{default:r(()=>[g(y(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[E]])],4)]),default:r(()=>[h((c(),f(I,{class:"ba-table-form-scrollbar"},{default:r(()=>[K("div",{class:U(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:R("width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[u(D,{ref_key:"formRef",ref:b,onKeyup:o[2]||(o[2]=T(d=>e(t).onSubmit(b.value),["enter"])),model:e(t).form.items,"label-position":"right","label-width":e(t).form.labelWidth+"px",rules:F},{default:r(()=>[u(m,{prop:"name",label:e(l)("user.group.Group name")},{default:r(()=>[u(n,{modelValue:e(t).form.items.name,"onUpdate:modelValue":o[0]||(o[0]=d=>e(t).form.items.name=d),type:"string",placeholder:e(l)("Please input field",{field:e(l)("user.group.Group name")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),u(m,{prop:"auth",label:e(l)("user.group.jurisdiction")},{default:r(()=>[(c(),f(S,{ref_key:"treeRef",ref:_,key:a.treeKey,"default-checked-keys":a.defaultCheckedKeys,"default-expand-all":!0,"show-checkbox":"","node-key":"id",props:{children:"children",label:"title",class:N},data:a.menuRules},null,8,["default-checked-keys","props","data"]))]),_:1},8,["label"]),u(Q,{label:e(l)("state"),modelValue:e(t).form.items.status,"onUpdate:modelValue":o[1]||(o[1]=d=>e(t).form.items.status=d),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"])],6)]),_:1})),[[j,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});const ne=H(X,[["__scopeId","data-v-72027edc"]]);export{ne as default};
