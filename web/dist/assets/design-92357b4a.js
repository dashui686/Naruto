import{h as Ue,y as ne,r as se,B as Te,an as U,G as M,n as ce,ar as ue,p as n,l as p,o as m,q as d,K as u,k as r,V as _,J as b,R as P,Q as F,X as v,W as V,S as C,a8 as Ie,_ as me,i as T,m as fe,a4 as Re,ab as xe,t as h,Z as pe,$ as Ke,a0 as Ne,Y as Ae,a3 as $}from"./vue-cc6aeb83.js";import{S as be,B as ye}from"./index-9ca9fad8.js";import{F as f}from"./index-ed702c00.js";import{f as I,d as ge,t as L,g as Ge,a as H,b as je,c as $e,e as Fe,h as qe,s as k,p as Be,i as ze}from"./crud-6959cf1a.js";import{p as Ee,A as Oe,X as W,af as ve,_ as Je}from"./index-1ab2f843.js";import{b as R,a as Me}from"./validate-080ffb17.js";import"./controllerUrls-941681c3.js";import"./index-7a4e471c.js";const He=x=>(Ke("data-v-9df8a32c"),x=x(),Ne(),x),We={class:"default-main"},Qe={class:"header-config-box"},Xe={class:"header"},Ye={class:"header-item-box"},Ze={class:"header-right"},el={key:0,class:"header-senior-config-box"},ll={class:"header-senior-config-form"},tl={class:"default-sort-field-box"},al=["onClick","data-id"],ol={class:"design-field"},rl={class:"design-field"},il={class:"design-field-right"},dl={key:0,class:"design-field-empty"},nl={class:"field-config ba-scroll-style"},sl={key:0,class:"design-field-empty"},cl={class:"field-inline"},ul={class:"field-inline"},ml={class:"field-inline"},fl={class:"confirm-generate-dialog-body"},pl=He(()=>m("br",null,null,-1)),bl={class:"confirm-generate-dialog-footer"},yl=Ue({__name:"design",setup(x){const{t:o}=Ee(),Se=Ae(),Q=ne(),q=ne(),K=Oe();let X=1;const e=se({loading:{init:!1,generate:!1,remoteSelect:!1},table:{name:"",comment:"",quickSearchField:[],defaultSortField:"",formFields:[],columnFields:[],defaultSortType:"desc",modelFile:"",controllerFile:"",validateFile:"",webViewsDir:""},fields:[],activateField:-1,fieldCollapseName:["common","base","senior"],remoteSelectPre:{show:!1,index:-1,dbList:[],fieldList:[],modelFileList:[],controllerFileList:[],loading:!1,hideDelField:!1,form:{table:"",pk:"",label:"",joinField:[],modelFile:"",controllerFile:""}},showHeaderSeniorConfig:!1,confirmGenerate:{show:!1,table:!1,controller:!1}}),he=a=>{e.activateField=a},Ve=()=>{const a=U(e.fields[e.activateField]);for(const l in a.table)a.table[l]=a.table[l].value;for(const l in a.form)a.form[l]=a.form[l].value;e.fields[e.activateField]=N(a)},Y=a=>{for(const l in L)for(const i in e.table[L[l]])W(e.fields,"name",e.table[L[l]][i])||(e.table[L[l]][i]=a);e.table.defaultSortField&&(W(e.fields,"name",e.table.defaultSortField)||(e.table.defaultSortField=a))},Z=a=>{if(e.fields[a]){e.activateField=-1,e.fields[a].name==e.table.defaultSortField&&(e.table.defaultSortField="");for(const l in L){const i=e.table[L[l]].findIndex(c=>c==e.fields[a].name);i!=-1&&e.table[L[l]].splice(i,1)}e.fields.splice(a,1)}},ee=(a,l=!1)=>{e.remoteSelectPre.show=!0,e.remoteSelectPre.loading=!0,e.remoteSelectPre.index=a,e.remoteSelectPre.hideDelField=l,Ge().then(i=>{e.remoteSelectPre.dbList=i.data.dbs,e.fields[a]&&e.fields[a].form["remote-table"].value&&(e.remoteSelectPre.form.table=e.fields[a].form["remote-table"].value,e.remoteSelectPre.form.pk=e.fields[a].form["remote-pk"].value,e.remoteSelectPre.form.label=e.fields[a].form["remote-field"].value,e.remoteSelectPre.form.controllerFile=e.fields[a].form["remote-controller"].value,e.remoteSelectPre.form.modelFile=e.fields[a].form["remote-model"].value,e.remoteSelectPre.form.joinField=e.fields[a].form["relation-fields"].value.split(","),T(e.remoteSelectPre.fieldList)&&ve(e.fields[a].form["remote-table"].value).then(c=>{const g={};for(const S in c.data.fieldList)g[S]=(S?S+" - ":"")+c.data.fieldList[S];e.remoteSelectPre.fieldList=g}),(T(e.remoteSelectPre.modelFileList)||T(e.remoteSelectPre.controllerFileList))&&H(e.fields[a].form["remote-table"].value).then(c=>{e.remoteSelectPre.modelFileList=c.data.modelFileList,e.remoteSelectPre.controllerFileList=c.data.controllerFileList}))}).finally(()=>{e.remoteSelectPre.loading=!1})},we=(a,l)=>{if(["remoteSelect","remoteSelects"].includes(l.designType))return ee(a)},B=()=>{e.confirmGenerate.show=!1},le=()=>{e.loading.generate=!0;const a=U(e.fields);for(const l in a){for(const i in a[l].table)a[l].table[i]=a[l].table[i].value;for(const i in a[l].form)a[l].form[i]=a[l].form[i].value}je({table:e.table,fields:a}).then(()=>{Se.go(0)}).finally(()=>{e.loading.generate=!1,B()})},Pe=()=>{let a="";if(e.fields.find(i=>{if(!Me(i.name))return a=o("crud.crud.Field name is invalid It starts with a letter or underscore and cannot contain any character other than letters, digits, or underscores",{field:i.name}),!0}),e.fields.findIndex(i=>i.primaryKey)===-1&&(a=o("crud.crud.Please design the primary key field!")),e.table.name||(a=o("crud.crud.Please enter the data table name!")),a){M({type:"error",message:a});return}e.loading.generate=!0,$e({table:e.table.name,controllerFile:e.table.controllerFile}).then(()=>{le()}).catch(i=>{e.loading.generate=!1,i.code==-1?(e.confirmGenerate.show=!0,e.confirmGenerate.table=i.data.table,e.confirmGenerate.controller=i.data.controller):M({type:"error",message:i.msg})})},ke=()=>{if(!e.table.name&&!e.table.comment&&!e.fields.length)return Fe("start");xe.confirm(o("crud.crud.It is irreversible to give up the design Are you sure you want to give up?"),o("Reminder"),{confirmButtonText:o("crud.crud.give up"),cancelButtonText:o("Cancel"),type:"warning"}).then(()=>{Fe("start")}).catch(()=>{})},N=a=>{const l=U(ge[a.designType]);for(const i in a.form)l.form[i]&&(l.form[i].value=a.form[i]),i=="image-multi"&&a.form[i]&&(l.table.render=qe("render","images"));for(const i in a.table)l.table[i]&&(l.table[i].value=a.table[i]);return a.form=l.form,a.table=l.table,a},_e=a=>{if(["enum","set"].includes(e.fields[e.activateField].type)){if(!a){e.fields[e.activateField].dataType=`${e.fields[e.activateField].type}()`;return}a=a.replaceAll("：",":"),a=a.replaceAll("，",",");let l=a.split(":");l[1]&&(l=l[1].split(","),l=l.map(i=>{if(!i)return"";let c=i.split("=");return c[0]&&c[1]?`'${c[0]}'`:""}).filter(i=>i!=""),e.fields[e.activateField].dataType=`${e.fields[e.activateField].type}(${l.join(",")})`)}},Ce=()=>{if(["db","sql","log"].includes(k.type)){if(e.loading.init=!0,k.type=="log"){Be(parseInt(k.startData.logId)).then(a=>{e.table=a.data.table;const l=a.data.fields;for(const i in l){const c=N(U(l[i]));e.fields.push(c)}}).finally(()=>{e.loading.init=!1});return}ze(k.type,k.startData.db,k.startData.sql).then(a=>{let l=[];for(const i in a.data.columns){const c=N(a.data.columns[i]);["id","update_time","create_time","updatetime","createtime"].includes(c.name)||e.table.formFields.push(c.name),["textarea","file","files","editor","password","array"].includes(c.designType)||e.table.columnFields.push(c.name),c.designType=="pk"&&(e.table.defaultSortField=c.name,e.table.quickSearchField.push(c.name)),c.designType=="weigh"&&(e.table.defaultSortField=c.name),l.push(c)}e.fields=l,e.table.comment=a.data.comment,k.type=="db"&&k.startData.db&&(e.table.name=k.startData.db,te(k.startData.db))}).finally(()=>{e.loading.init=!1})}};Te(()=>{Ce();const a=be.create(Q.value,{group:"design-field",animation:200,filter:".design-field-empty",onAdd:l=>{var g,S;const i=(S=(g=l.originalEvent)==null?void 0:g.dataTransfer)==null?void 0:S.getData("name"),c=I[i];if(c&&c[l.oldIndex]){const y=N(U(c[l.oldIndex]));if(y.primaryKey==!0){if(e.fields.find(E=>E.primaryKey))return M({type:"error",message:o("crud.crud.There can only be one primary key field")}),l.item.remove();e.table.defaultSortField=y.name,e.table.quickSearchField.push(y.name)}y.designType=="weigh"&&(e.table.defaultSortField=y.name),W(e.fields,"name",y.name)&&(y.name=y.name+X,X++),e.fields.splice(l.newIndex,0,y),["remoteSelect","remoteSelects"].includes(y.designType)&&ee(l.newIndex,!0),y.formBuildExclude||e.table.formFields.push(y.name),y.tableBuildExclude||e.table.columnFields.push(y.name)}l.item.remove(),ce(()=>{a.sort(ue(e.fields.length).map(y=>y.toString()))})},onEnd:l=>{const i=e.fields[l.oldIndex];e.fields.splice(l.oldIndex,1),e.fields.splice(l.newIndex,0,i),ce(()=>{a.sort(ue(e.fields.length).map(c=>c.toString()))})}});K.value.forEach((l,i)=>{be.create(l,{sort:!1,group:{name:"design-field",pull:"clone",put:!1},animation:200,setData:c=>{c.setData("name",Object.keys(I)[i])}})})});const te=a=>{a&&H(a).then(l=>{e.table.modelFile=l.data.modelFile,e.table.controllerFile=l.data.controllerFile,e.table.validateFile=l.data.validateFile,e.table.webViewsDir=l.data.webViewsDir})},Le=a=>{a&&(z(),e.remoteSelectPre.form.table=a,e.loading.remoteSelect=!0,ve(a).then(l=>{e.remoteSelectPre.form.pk=l.data.pk;const i=["name","title","username","nickname"];for(const g in l.data.fieldList)if(i.includes(g)){e.remoteSelectPre.form.label=g,e.remoteSelectPre.form.joinField.push(g);break}const c={};for(const g in l.data.fieldList)c[g]=(g?g+" - ":"")+l.data.fieldList[g];e.remoteSelectPre.fieldList=c}).finally(()=>{e.loading.remoteSelect=!1}),H(a).then(l=>{e.remoteSelectPre.modelFileList=l.data.modelFileList,e.remoteSelectPre.controllerFileList=l.data.controllerFileList,Object.keys(l.data.modelFileList).includes(l.data.modelFile)&&(e.remoteSelectPre.form.modelFile=l.data.modelFile),Object.keys(l.data.controllerFileList).includes(l.data.controllerFile)&&(e.remoteSelectPre.form.controllerFile=l.data.controllerFile)}))},ae=()=>{const a=()=>{e.fields[e.remoteSelectPre.index].form["remote-table"].value=e.remoteSelectPre.form.table,e.fields[e.remoteSelectPre.index].form["remote-pk"].value=e.remoteSelectPre.form.pk,e.fields[e.remoteSelectPre.index].form["remote-field"].value=e.remoteSelectPre.form.label,e.fields[e.remoteSelectPre.index].form["remote-controller"].value=e.remoteSelectPre.form.controllerFile,e.fields[e.remoteSelectPre.index].form["remote-model"].value=e.remoteSelectPre.form.modelFile,e.fields[e.remoteSelectPre.index].form["relation-fields"].value=e.remoteSelectPre.form.joinField.join(","),e.remoteSelectPre.index=-1,e.remoteSelectPre.show=!1,z()};q.value&&q.value.validate(l=>{l&&a()})},oe=()=>{e.remoteSelectPre.show=!1,z(),e.remoteSelectPre.index!==-1&&e.remoteSelectPre.hideDelField&&Z(e.remoteSelectPre.index)},z=()=>{for(const a in e.remoteSelectPre.form)a=="joinField"?e.remoteSelectPre.form[a]=[]:e.remoteSelectPre.form[a]=""},De=se({table:[R({name:"required",title:o("crud.crud.remote-table")})],pk:[R({name:"required",title:o("crud.crud.Drop down value field")})],label:[R({name:"required",title:o("crud.crud.Drop down label field")})],joinField:[R({name:"required",title:o("crud.crud.Fields displayed in the table")})],controllerFile:[R({name:"required",title:o("crud.crud.Controller position")})]});return(a,l)=>{const i=h("el-button"),c=h("el-row"),g=h("el-option"),S=h("el-select"),y=h("el-form-item"),A=h("Icon"),G=h("el-collapse-item"),E=h("el-collapse"),O=h("el-col"),j=h("el-divider"),re=h("el-form"),ie=h("el-dialog"),de=h("el-alert"),D=pe("blur"),J=pe("loading");return n(),p("div",We,[m("div",Qe,[d(c,{class:"header-box"},{default:u(()=>[m("div",Xe,[m("div",Ye,[d(f,{class:"mr-20 table-name-item",label:r(o)("crud.log.table_name"),modelValue:e.table.name,"onUpdate:modelValue":l[0]||(l[0]=t=>e.table.name=t),type:"string",placeholder:r(o)("crud.crud.Name of the data table"),"input-attr":{onChange:te}},null,8,["label","modelValue","placeholder","input-attr"]),d(f,{class:"table-comment-item",label:r(o)("crud.crud.Data Table Notes"),modelValue:e.table.comment,"onUpdate:modelValue":l[1]||(l[1]=t=>e.table.comment=t),type:"string",placeholder:r(o)("crud.crud.For example: `user table` will be generated into `user management`")},null,8,["label","modelValue","placeholder"])]),m("div",Ze,[_((n(),b(i,{type:"primary",loading:e.loading.generate,onClick:Pe},{default:u(()=>[P(F(r(o)("crud.crud.Generate CRUD code")),1)]),_:1},8,["loading"])),[[D]]),_((n(),b(i,{onClick:ke,type:"danger"},{default:u(()=>[P(F(r(o)("crud.crud.give up")),1)]),_:1})),[[D]])])])]),_:1}),d(Ie,{name:e.showHeaderSeniorConfig?"el-zoom-in-top":"el-zoom-in-bottom"},{default:u(()=>[e.showHeaderSeniorConfig?(n(),p("div",el,[m("div",ll,[d(y,{"label-width":140,label:r(o)("crud.crud.Table Quick Search Fields")},{default:u(()=>[d(S,{clearable:!0,multiple:!0,class:"w100",modelValue:e.table.quickSearchField,"onUpdate:modelValue":l[2]||(l[2]=t=>e.table.quickSearchField=t),placement:"bottom"},{default:u(()=>[(n(!0),p(v,null,V(e.fields,(t,s)=>(n(),b(g,{key:s,label:t.name+(t.title?"-"+t.title:""),value:t.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),m("div",tl,[d(y,{"label-width":140,class:"default-sort-field",label:r(o)("crud.crud.Table Default Sort Fields")},{default:u(()=>[d(S,{clearable:!0,modelValue:e.table.defaultSortField,"onUpdate:modelValue":l[3]||(l[3]=t=>e.table.defaultSortField=t),placement:"bottom"},{default:u(()=>[(n(!0),p(v,null,V(e.fields,(t,s)=>(n(),b(g,{key:s,label:t.name+(t.title?"-"+t.title:""),value:t.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),d(f,{class:"default-sort-field-type",label:r(o)("crud.crud.sort order"),modelValue:e.table.defaultSortType,"onUpdate:modelValue":l[4]||(l[4]=t=>e.table.defaultSortType=t),type:"select",data:{content:{desc:r(o)("crud.crud.sort order desc"),asc:r(o)("crud.crud.sort order asc")}}},null,8,["label","modelValue","data"])]),d(y,{"label-width":140,label:r(o)("crud.crud.Fields as Table Columns")},{default:u(()=>[d(S,{clearable:!0,multiple:!0,class:"w100",modelValue:e.table.columnFields,"onUpdate:modelValue":l[5]||(l[5]=t=>e.table.columnFields=t),placement:"bottom"},{default:u(()=>[(n(!0),p(v,null,V(e.fields,(t,s)=>(n(),b(g,{key:s,label:t.name+(t.title?"-"+t.title:""),value:t.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),d(y,{"label-width":140,label:r(o)("crud.crud.Fields as form items")},{default:u(()=>[d(S,{clearable:!0,multiple:!0,class:"w100",modelValue:e.table.formFields,"onUpdate:modelValue":l[6]||(l[6]=t=>e.table.formFields=t),placement:"bottom"},{default:u(()=>[(n(!0),p(v,null,V(e.fields,(t,s)=>(n(),b(g,{key:s,label:t.name+(t.title?"-"+t.title:""),value:t.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),d(f,{label:r(o)("crud.crud.Generated Controller Location"),modelValue:e.table.controllerFile,"onUpdate:modelValue":l[7]||(l[7]=t=>e.table.controllerFile=t),type:"string",attr:{"label-width":140}},null,8,["label","modelValue"]),d(f,{label:r(o)("crud.crud.Generated Data Model Location"),modelValue:e.table.modelFile,"onUpdate:modelValue":l[8]||(l[8]=t=>e.table.modelFile=t),type:"string",attr:{"label-width":140}},null,8,["label","modelValue"]),d(f,{label:r(o)("crud.crud.Generated Validator Location"),modelValue:e.table.validateFile,"onUpdate:modelValue":l[9]||(l[9]=t=>e.table.validateFile=t),type:"string",attr:{"label-width":140}},null,8,["label","modelValue"]),d(f,{label:r(o)("crud.crud.WEB end view directory"),modelValue:e.table.webViewsDir,"onUpdate:modelValue":l[10]||(l[10]=t=>e.table.webViewsDir=t),type:"string",attr:{"label-width":140}},null,8,["label","modelValue"])])])):C("",!0)]),_:1},8,["name"]),m("div",{onClick:l[11]||(l[11]=t=>e.showHeaderSeniorConfig=!e.showHeaderSeniorConfig),class:"header-senior-config"},[m("span",null,F(r(o)("crud.crud.Advanced Configuration")),1),d(A,{class:"senior-config-arrow-icon",size:"14",color:"var(--el-color-info)",name:e.showHeaderSeniorConfig?"el-icon-ArrowUp":"el-icon-ArrowDown"},null,8,["name"])])]),_((n(),b(c,{class:"fields-box",gutter:20},{default:u(()=>[d(O,{xs:24,span:6},{default:u(()=>[d(E,{class:"field-collapse",modelValue:e.fieldCollapseName,"onUpdate:modelValue":l[12]||(l[12]=t=>e.fieldCollapseName=t)},{default:u(()=>[d(G,{title:r(o)("crud.crud.Common Fields"),name:"common"},{default:u(()=>[m("div",{class:"field-box",ref:r(K).set},[(n(!0),p(v,null,V(r(I).common,(t,s)=>(n(),p("div",{key:s,class:"field-item"},[m("span",null,F(t.title),1)]))),128))],512)]),_:1},8,["title"]),d(G,{title:r(o)("crud.crud.Base Fields"),name:"base"},{default:u(()=>[m("div",{class:"field-box",ref:r(K).set},[(n(!0),p(v,null,V(r(I).base,(t,s)=>(n(),p("div",{key:s,class:"field-item"},[m("span",null,F(t.title),1)]))),128))],512)]),_:1},8,["title"]),d(G,{title:r(o)("crud.crud.Advanced Fields"),name:"senior"},{default:u(()=>[m("div",{class:"field-box",ref:r(K).set},[(n(!0),p(v,null,V(r(I).senior,(t,s)=>(n(),p("div",{key:s,class:"field-item"},[m("span",null,F(t.title),1)]))),128))],512)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1}),d(O,{xs:24,span:12},{default:u(()=>[m("div",{ref_key:"designWindowRef",ref:Q,class:me(["design-window ba-scroll-style",e.fields.length?"":"design-window-empty"])},[(n(!0),p(v,null,V(e.fields,(t,s)=>(n(),p("div",{key:s,class:me([s===e.activateField?"activate":"","design-field-box"]),onClick:w=>he(s),"data-id":s},[m("div",ol,[m("span",null,F(r(o)("crud.crud.Field Name"))+"：",1),d(ye,{onPointerdown:l[13]||(l[13]=$(()=>{},["stop"])),class:"design-field-name-input",modelValue:t.name,"onUpdate:modelValue":w=>t.name=w,type:"string",attr:{size:"small",onChange:Y}},null,8,["modelValue","onUpdate:modelValue","attr"])]),m("div",rl,[m("span",null,F(r(o)("crud.crud.field comment"))+"：",1),d(ye,{onPointerdown:l[14]||(l[14]=$(()=>{},["stop"])),class:"design-field-name-comment",modelValue:t.comment,"onUpdate:modelValue":w=>t.comment=w,type:"string",attr:{size:"small"}},null,8,["modelValue","onUpdate:modelValue"])]),m("div",il,[["remoteSelect","remoteSelects"].includes(t.designType)?_((n(),b(i,{key:0,onClick:$(w=>we(s,t),["stop"]),type:"primary",size:"small",circle:""},{default:u(()=>[d(A,{color:"var(--el-color-white)",size:"15",name:"fa fa-pencil icon"})]),_:2},1032,["onClick"])),[[D]]):C("",!0),_((n(),b(i,{onClick:$(w=>Z(s),["stop"]),type:"danger",size:"small",circle:""},{default:u(()=>[d(A,{color:"var(--el-color-white)",size:"15",name:"fa fa-trash"})]),_:2},1032,["onClick"])),[[D]])])],10,al))),128)),e.fields.length?C("",!0):(n(),p("div",dl,F(r(o)("crud.crud.Drag the left element here to start designing CRUD")),1))],2)]),_:1}),d(O,{xs:24,span:6},{default:u(()=>[m("div",nl,[e.activateField===-1?(n(),p("div",sl,F(r(o)("crud.crud.Please select a field from the left first")),1)):(n(),p("div",{key:"activate-field-"+e.activateField},[d(re,{"label-position":"top"},{default:u(()=>[d(j,{"content-position":"left"},{default:u(()=>[P(F(r(o)("crud.crud.Common")),1)]),_:1}),d(y,{label:r(o)("crud.crud.generate")},{default:u(()=>[d(S,{onChange:Ve,class:"w100",modelValue:e.fields[e.activateField].designType,"onUpdate:modelValue":l[15]||(l[15]=t=>e.fields[e.activateField].designType=t),placement:"bottom"},{default:u(()=>[(n(!0),p(v,null,V(r(ge),(t,s)=>(n(),b(g,{key:s,label:t.name,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),d(f,{label:r(o)("crud.crud.Field comments (CRUD dictionary)"),type:"textarea","input-attr":{rows:2,onChange:_e},placeholder:r(o)("crud.crud.The field comment will be used as the CRUD dictionary, and will be identified as the field title before the colon, and as the data dictionary after the colon"),modelValue:e.fields[e.activateField].comment,"onUpdate:modelValue":l[16]||(l[16]=t=>e.fields[e.activateField].comment=t)},null,8,["label","input-attr","placeholder","modelValue"]),d(j,{"content-position":"left"},{default:u(()=>[P(F(r(o)("crud.crud.Field Properties")),1)]),_:1}),d(f,{label:r(o)("crud.crud.Field Name"),type:"string",modelValue:e.fields[e.activateField].name,"onUpdate:modelValue":l[17]||(l[17]=t=>e.fields[e.activateField].name=t),"input-attr":{onChange:Y}},null,8,["label","modelValue","input-attr"]),e.fields[e.activateField].dataType?(n(),b(f,{key:0,label:r(o)("crud.crud.Field Type"),type:"textarea",modelValue:e.fields[e.activateField].dataType,"onUpdate:modelValue":l[18]||(l[18]=t=>e.fields[e.activateField].dataType=t)},null,8,["label","modelValue"])):(n(),p(v,{key:1},[d(f,{label:r(o)("crud.crud.Field Type"),type:"string",modelValue:e.fields[e.activateField].type,"onUpdate:modelValue":l[19]||(l[19]=t=>e.fields[e.activateField].type=t)},null,8,["label","modelValue"]),m("div",cl,[d(f,{label:r(o)("crud.crud.length"),type:"number",modelValue:e.fields[e.activateField].length,"onUpdate:modelValue":l[20]||(l[20]=t=>e.fields[e.activateField].length=t),modelModifiers:{number:!0}},null,8,["label","modelValue"]),d(f,{label:r(o)("crud.crud.decimal point"),type:"number",modelValue:e.fields[e.activateField].precision,"onUpdate:modelValue":l[21]||(l[21]=t=>e.fields[e.activateField].precision=t),modelModifiers:{number:!0}},null,8,["label","modelValue"])])],64)),d(f,{label:r(o)("crud.crud.Field Defaults"),placeholder:r(o)("crud.crud.You can directly enter null, 0, empty string"),type:"string",modelValue:e.fields[e.activateField].default,"onUpdate:modelValue":l[22]||(l[22]=t=>e.fields[e.activateField].default=t)},null,8,["label","placeholder","modelValue"]),m("div",ul,[d(f,{class:"form-item-position-right",label:r(o)("crud.state.Primary key"),type:"switch",modelValue:e.fields[e.activateField].primaryKey,"onUpdate:modelValue":l[23]||(l[23]=t=>e.fields[e.activateField].primaryKey=t)},null,8,["label","modelValue"]),d(f,{class:"form-item-position-right",label:r(o)("crud.crud.Auto increment"),type:"switch",modelValue:e.fields[e.activateField].autoIncrement,"onUpdate:modelValue":l[24]||(l[24]=t=>e.fields[e.activateField].autoIncrement=t)},null,8,["label","modelValue"])]),m("div",ml,[d(f,{class:"form-item-position-right",label:r(o)("crud.crud.Unsigned"),type:"switch",modelValue:e.fields[e.activateField].unsigned,"onUpdate:modelValue":l[25]||(l[25]=t=>e.fields[e.activateField].unsigned=t)},null,8,["label","modelValue"]),d(f,{class:"form-item-position-right",label:r(o)("crud.crud.Allow NULL"),type:"switch",modelValue:e.fields[e.activateField].null,"onUpdate:modelValue":l[26]||(l[26]=t=>e.fields[e.activateField].null=t)},null,8,["label","modelValue"])]),r(T)(e.fields[e.activateField].table)?C("",!0):(n(),p(v,{key:2},[d(j,{"content-position":"left"},{default:u(()=>[P(F(r(o)("crud.crud.Field Table Properties")),1)]),_:1}),(n(!0),p(v,null,V(e.fields[e.activateField].table,(t,s)=>(n(),b(f,{key:s,label:a.$t("crud.crud."+s),type:t.type,modelValue:e.fields[e.activateField].table[s].value,"onUpdate:modelValue":w=>e.fields[e.activateField].table[s].value=w,placeholder:e.fields[e.activateField].table[s].placeholder??"",data:{content:e.fields[e.activateField].table[s].options??{}},"input-attr":e.fields[e.activateField].table[s].attr??{}},null,8,["label","type","modelValue","onUpdate:modelValue","placeholder","data","input-attr"]))),128))],64)),r(T)(e.fields[e.activateField].form)?C("",!0):(n(),p(v,{key:3},[d(j,{"content-position":"left"},{default:u(()=>[P(F(r(o)("crud.crud.Field Form Properties")),1)]),_:1}),(n(!0),p(v,null,V(e.fields[e.activateField].form,(t,s)=>(n(),b(f,{key:s,label:a.$t("crud.crud."+s),type:t.type,modelValue:e.fields[e.activateField].form[s].value,"onUpdate:modelValue":w=>e.fields[e.activateField].form[s].value=w,placeholder:e.fields[e.activateField].form[s].placeholder??"",data:{content:e.fields[e.activateField].form[s].options??{}},"input-attr":e.fields[e.activateField].form[s].attr??{}},null,8,["label","type","modelValue","onUpdate:modelValue","placeholder","data","input-attr"]))),128))],64))]),_:1})]))])]),_:1})]),_:1})),[[J,e.loading.init]]),d(ie,{onClose:oe,class:"ba-operate-dialog","model-value":e.remoteSelectPre.show,title:r(o)("crud.crud.Remote drop-down association information"),"close-on-click-modal":!1,onKeyup:Re(ae,["enter"])},{footer:u(()=>[m("div",{style:fe("width: calc(100% - 88px)")},[d(i,{onClick:oe},{default:u(()=>[P(F(a.$t("Cancel")),1)]),_:1}),_((n(),b(i,{onClick:ae,type:"primary"},{default:u(()=>[P(F(a.$t("Save")),1)]),_:1})),[[D]])],4)]),default:u(()=>[m("div",{class:"ba-operate-form",style:fe("width: calc(100% - 80px)")},[_((n(),b(re,{ref_key:"formRef",ref:q,model:e.remoteSelectPre.form,rules:De,"label-position":"right","label-width":"160px","destroy-on-close":!0},{default:u(()=>[(n(),b(f,{prop:"table",type:"select",label:r(o)("crud.crud.Associated Data Table"),modelValue:e.remoteSelectPre.form.table,"onUpdate:modelValue":l[27]||(l[27]=t=>e.remoteSelectPre.form.table=t),key:JSON.stringify(e.remoteSelectPre.dbList),data:{content:e.remoteSelectPre.dbList},"input-attr":{onChange:Le}},null,8,["label","modelValue","data","input-attr"])),_((n(),p("div",null,[(n(),b(f,{prop:"pk",type:"select",label:r(o)("crud.crud.Drop down value field"),modelValue:e.remoteSelectPre.form.pk,"onUpdate:modelValue":l[28]||(l[28]=t=>e.remoteSelectPre.form.pk=t),placeholder:r(o)("crud.crud.Please select the value field of the select component"),key:"select-value"+JSON.stringify(e.remoteSelectPre.fieldList),data:{content:e.remoteSelectPre.fieldList}},null,8,["label","modelValue","placeholder","data"])),(n(),b(f,{prop:"label",type:"select",label:r(o)("crud.crud.Drop down label field"),modelValue:e.remoteSelectPre.form.label,"onUpdate:modelValue":l[29]||(l[29]=t=>e.remoteSelectPre.form.label=t),placeholder:r(o)("crud.crud.Please select the label field of the select component"),key:"select-label"+JSON.stringify(e.remoteSelectPre.fieldList),data:{content:e.remoteSelectPre.fieldList}},null,8,["label","modelValue","placeholder","data"])),(n(),b(f,{prop:"joinField",type:"selects",label:r(o)("crud.crud.Fields displayed in the table"),modelValue:e.remoteSelectPre.form.joinField,"onUpdate:modelValue":l[30]||(l[30]=t=>e.remoteSelectPre.form.joinField=t),placeholder:r(o)("crud.crud.Please select the fields displayed in the table"),key:"join-field"+JSON.stringify(e.remoteSelectPre.fieldList),data:{content:e.remoteSelectPre.fieldList}},null,8,["label","modelValue","placeholder","data"])),(n(),b(f,{prop:"controllerFile",type:"select",label:r(o)("crud.crud.Controller position"),modelValue:e.remoteSelectPre.form.controllerFile,"onUpdate:modelValue":l[31]||(l[31]=t=>e.remoteSelectPre.form.controllerFile=t),placeholder:r(o)("crud.crud.Please select the controller of the data table"),key:"controller-file"+JSON.stringify(e.remoteSelectPre.controllerFileList),data:{content:e.remoteSelectPre.controllerFileList},attr:{"block-help":r(o)("crud.crud.The remote pull-down will request the corresponding controller to obtain data, so it is recommended that you create the CRUD of the associated table")}},null,8,["label","modelValue","placeholder","data","attr"])),(n(),b(f,{type:"select",label:r(o)("crud.crud.Data Model Location"),modelValue:e.remoteSelectPre.form.modelFile,"onUpdate:modelValue":l[32]||(l[32]=t=>e.remoteSelectPre.form.modelFile=t),placeholder:r(o)("crud.crud.Please select the data model location of the data table"),key:"model-file"+JSON.stringify(e.remoteSelectPre.modelFileList),data:{content:e.remoteSelectPre.modelFileList},attr:{"block-help":r(o)("crud.crud.If it is left blank, the model of the associated table will be generated automatically If the table already has a model, it is recommended to select it to avoid repeated generation")}},null,8,["label","modelValue","placeholder","data","attr"]))])),[[J,e.loading.remoteSelect]])]),_:1},8,["model","rules"])),[[J,e.remoteSelectPre.loading]])],4)]),_:1},8,["model-value","title","onKeyup"]),d(ie,{onClose:B,class:"ba-operate-dialog confirm-generate-dialog","model-value":e.confirmGenerate.show,title:r(o)("crud.crud.Confirm CRUD code generation")},{footer:u(()=>[m("div",bl,[d(i,{onClick:B},{default:u(()=>[P(F(a.$t("Cancel")),1)]),_:1}),_((n(),b(i,{loading:e.loading.generate,onClick:le,type:"primary"},{default:u(()=>[P(F(r(o)("crud.crud.Continue building")),1)]),_:1},8,["loading"])),[[D]])])]),default:u(()=>[m("div",fl,[e.confirmGenerate.controller?(n(),b(de,{key:0,title:r(o)("crud.crud.The controller already exists Continuing to generate will automatically overwrite the existing code!"),center:"",type:"error"},null,8,["title"])):C("",!0),pl,e.confirmGenerate.table?(n(),b(de,{key:1,title:r(o)("crud.crud.The data table already exists Continuing to generate will automatically delete the original table and create a new one!"),center:"",type:"error"},null,8,["title"])):C("",!0)])]),_:1},8,["model-value","title"])])}}});const kl=Je(yl,[["__scopeId","data-v-9df8a32c"]]);export{kl as default};
