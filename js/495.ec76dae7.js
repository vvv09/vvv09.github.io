"use strict";(globalThis["webpackChunkprojact_tabula_design"]=globalThis["webpackChunkprojact_tabula_design"]||[]).push([[495],{9087:(e,a,t)=>{t.r(a),t.d(a,{default:()=>oe});var l=t(3673),n=t(1959),i=t(5681),u=t(362),o=t(2323),r=t(1465),s=t(8339),c=t(741);const m=(0,l.Uk)("Total "),d=(0,l.Uk)(" sessions in "),p=(0,l.Uk)(" iterations "),w={class:"text-bold"},f=(0,l.Uk)(" sessions "),_={key:0,class:"text-orange no-wrap"},g={key:1,style:{height:"200px"},class:"flex flex-center"},W={class:"full-width"},b={class:"full-width text-center"},v=(0,l.Uk)("No history yet"),y={class:"full-width text-center"},h=(0,l.Uk)("Start First Iteration"),k={__name:"PracticeHistoryCard",setup(e){const a=(0,s.tv)(),t=(0,s.yj)(),i=(0,c.oR)(),k=e=>{a.push(`/home/practice-groups/practices/${t.params.practiceId}/${e}`)},U=(0,l.Fl)((()=>x.value.map((e=>e.sessionsCount)).reduce(((e,a)=>e+a),0))),S=(0,n.iH)("ASC"),q=()=>{"ASC"===S.value?S.value="DESC":S.value="ASC"},x=(0,l.Fl)((()=>i.getters["journal/getSelectedPracticeIterations"])),D=(0,l.Fl)((()=>{let e=x.value.filter((function(e){return e.lastDay})),a=x.value.filter((function(e){return null==e.lastDay}))[0];if("ASC"===S.value){let t=e.sort(((e,a)=>new Date(r.Z.dateStringToISO(e.lastDay))-new Date(r.Z.dateStringToISO(a.lastDay))));return a&&t.push(a),t}if("DESC"===S.value){let t=e.sort(((e,a)=>new Date(r.Z.dateStringToISO(a.lastDay))-new Date(r.Z.dateStringToISO(e.lastDay))));return a&&t.unshift(a),t}})),Z=()=>{a.push(`/home/practice-groups/practices/${t.params.practiceId}/new-iteration`)};return(0,l.dl)((()=>{i.dispatch("journal/fetchAllPracticeIterations",t.params.practiceId)})),(0,l.se)((()=>{i.commit("journal/dropIterations")})),(e,a)=>{const t=(0,l.up)("emphasize"),i=(0,l.up)("text-caption"),r=(0,l.up)("bar"),s=(0,l.up)("item-label-caption"),c=(0,l.up)("q-icon"),I=(0,l.up)("q-item-section"),C=(0,l.up)("paragraph"),V=(0,l.up)("q-item-label"),P=(0,l.up)("q-item"),Q=(0,l.up)("x-separator"),j=(0,l.up)("q-list"),z=(0,l.up)("card");return(0,n.SU)(x)?((0,l.wg)(),(0,l.j4)(z,{key:0,class:"q-pa-md"},{header:(0,l.w5)((()=>[(0,l.Wm)(r,null,{actions:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(u.Z),{switchIcon:"DESC"==S.value,onClick:q},null,8,["switchIcon"])])),default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[m,(0,l.Wm)(t,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)((0,n.SU)(U)),1)])),_:1}),d,(0,l.Wm)(t,{class:"text-title text-bold"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)((0,n.SU)(x).length),1)])),_:1}),p])),_:1})])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(j,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(D),((e,a)=>((0,l.wg)(),(0,l.iD)("div",{key:e.id},[(0,l.Wm)(P,{class:"q-px-none",onClick:a=>k(e.id),clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{"text-color":e.lastDay?"paragraph":"primary"},{default:(0,l.w5)((()=>[(0,l._)("div",w,(0,o.zw)(e.sessionsCount),1),f])),_:2},1032,["text-color"]),e.lastDay&&e.rate?((0,l.wg)(),(0,l.iD)("div",_,[(0,l.Wm)(c,{name:"star"}),(0,l.Uk)(" x"+(0,o.zw)(e.rate),1)])):(0,l.kq)("",!0)])),_:2},1024),(0,l.Wm)(I,null,{default:(0,l.w5)((()=>[(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(t,{"text-color":e.lastDay?"paragraph":"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.lastDay?e.firstDay+" - "+e.lastDay:e.firstDay),1)])),_:2},1032,["text-color"])])),_:2},1024)])),_:2},1024),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{"text-color":e.lastDay?"caption":"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.title),1)])),_:2},1032,["text-color"])])),_:2},1024)])),_:2},1024),(0,l.Wm)(I,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{name:"chevron_right",class:(0,o.C_)(e.lastDay?"text-paragraph":"text-primary")},null,8,["class"])])),_:2},1024)])),_:2},1032,["onClick"]),a!==(0,n.SU)(x).length-1?((0,l.wg)(),(0,l.j4)(Q,{key:0,spaced:""})):(0,l.kq)("",!0)])))),128))])),_:1})])),_:1})):((0,l.wg)(),(0,l.iD)("div",g,[(0,l._)("div",W,[(0,l._)("div",b,[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[v])),_:1})]),(0,l._)("div",y,[(0,l.Wm)(i,{"text-color":"primary",onClick:Z},{default:(0,l.w5)((()=>[h])),_:1})])])]))}}};var U=t(7011),S=t(3414),q=t(2035),x=t(4554),D=t(2350),Z=t(7518),I=t.n(Z);const C=k,V=C;I()(k,"components",{QList:U.Z,QItem:S.Z,QItemSection:q.Z,QIcon:x.Z,QItemLabel:D.Z});const P=(0,l.Uk)("Add Reference"),Q={__name:"PracticeReferencesCard",setup(e){const a=(0,n.iH)([{id:"1",title:"Техника выполнения ритуала",lang:"ru",type:"article"},{id:"2",title:"How to perform",lang:"en",type:"article"},{id:"3",title:"История МРП",lang:"ru",type:"link"},{id:"4",title:"Вариант исполнения МРП",lang:"ru",type:"link"},{id:"5",title:"some link",lang:"en",type:"link"},{id:"6",title:"title",lang:"en",type:"link"},{id:"7",title:"Официальная инструкция",lang:"ru",type:"document"},{id:"8",title:"title",lang:"en",type:"document"}]),t=e=>"article"===e?"las la-bookmark":"link"===e?"las la-globe":"document"===e?"las la-file-pdf":"";return(e,n)=>{const i=(0,l.up)("paragraph"),u=(0,l.up)("q-item-section"),r=(0,l.up)("q-icon"),s=(0,l.up)("lang-badge"),c=(0,l.up)("q-item"),m=(0,l.up)("x-separator"),d=(0,l.up)("q-list"),p=(0,l.up)("card");return(0,l.wg)(),(0,l.j4)(p,{class:"q-pa-md q-pl-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.value,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id},[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,l.Wm)(u,{side:""},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(r,{color:"primary",size:"2rem",name:t(e.type)},null,8,["name"]),(0,l.Wm)(s,{lang:e.lang},null,8,["lang"])])])),_:2},1024)])),_:2},1024),(0,l.Wm)(m,{spaced:""})])))),128)),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{color:"primary",name:"las la-plus"})])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[P])),_:1})])),_:1})])),_:1})])),_:1})}}},j=Q,z=j;I()(Q,"components",{QList:U.Z,QItem:S.Z,QItemSection:q.Z,QIcon:x.Z});const H={class:"flex"},T={class:"q-ml-sm"},A={__name:"PracticeCard",setup(e){const a=(0,c.oR)(),t=((0,s.tv)(),(0,s.yj)()),i=(0,l.Fl)((()=>a.getters["journal/getPractice"]));return(0,l.dl)((()=>{a.dispatch("journal/fetchPracticeById",t.params.practiceId)})),(0,l.se)((()=>{a.commit("journal/dropPractice")})),(e,a)=>{const t=(0,l.up)("q-avatar"),u=(0,l.up)("item-label-caption"),r=(0,l.up)("title-2"),s=(0,l.up)("q-item-label"),c=(0,l.up)("q-item-section"),m=(0,l.up)("paragraph"),d=(0,l.up)("card");return(0,n.SU)(i)?((0,l.wg)(),(0,l.j4)(d,{key:0,class:"q-pa-md",active:(0,n.SU)(i).active},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l._)("div",H,[(0,l.Wm)(t,{color:(0,n.SU)(i).kind.toLowerCase(),size:"5rem",class:"border-radius shadow-3",rounded:"","text-color":"white"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)((0,n.SU)(i).name[0]),1)])),_:1},8,["color"]),(0,l._)("div",T,[(0,l.Wm)(u,{lines:"1"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)((0,n.SU)(i).caption),1)])),_:1}),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)((0,n.SU)(i).name),1)])),_:1})])),_:1})])])])),_:1}),(0,l.Wm)(m,{class:"q-mt-md"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)((0,n.SU)(i).description),1)])),_:1})])),_:1},8,["active"])):(0,l.kq)("",!0)}}};var E=t(5096);const L=A,R=L;I()(A,"components",{QItemSection:q.Z,QAvatar:E.Z,QItemLabel:D.Z});var F=t(3679),O=t(9770);const $=(0,l.Uk)("Edit Practice"),N={__name:"PracticeEditSheet",setup(e){const a=(0,n.iH)("Малый Ритуал Пентаграммы"),t=(0,n.iH)("Класический ритуал западной магической традиции. Рекомендован к ежедневной практике каждым соискателем."),i=(0,n.iH)("Public"),u=(0,n.iH)(["Public","Private","Secret"]);return(e,o)=>{const r=(0,l.up)("mobile-sheet-header"),s=(0,l.up)("x-input"),c=(0,l.up)("q-card-section"),m=(0,l.up)("x-select"),d=(0,l.up)("q-card"),p=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(d,{class:"custom-border-radius bg-foreground text-paragraph q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"q-mb-md"},{"buttons-left":(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)((0,n.SU)(O.Z),null,null,512),[[p]])])),title:(0,l.w5)((()=>[$])),"buttons-right":(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)((0,n.SU)(F.Z),null,null,512),[[p]])])),_:1}),(0,l.Wm)(c,{class:"row items-center no-wrap"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"col",outlined:"",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),label:"Name"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,{class:"row items-center no-wrap"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"col",outlined:"",modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e),label:"Name"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,{class:"row items-center no-wrap"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"col",outlined:"",autogrow:"",modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=e=>t.value=e),label:"Description"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,{class:"row items-center no-wrap"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"col",modelValue:i.value,"onUpdate:modelValue":o[3]||(o[3]=e=>i.value=e),options:u.value,label:"Privacy"},null,8,["modelValue","options"])])),_:1})])),_:1})}}};var K=t(4260),Y=t(151),B=t(5589),G=t(677);const J=(0,K.Z)(N,[["__scopeId","data-v-b3be938a"]]),M=J;I()(N,"components",{QCard:Y.Z,QCardSection:B.Z}),I()(N,"directives",{ClosePopup:G.Z});var X=t(8825);const ee=(0,l.Uk)("Practice Card"),ae={__name:"Practice",setup(e){(0,c.oR)(),(0,X.Z)(),(0,n.iH)("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");const a=(0,n.iH)("history"),t=(0,s.tv)(),u=(0,s.yj)(),o=()=>{t.push(`/home/practice-groups/practices/${u.params.practiceId}/new-iteration`)},r=()=>{o()},m=(0,n.iH)(!1),d=()=>{m.value=!0};return(e,t)=>{const u=(0,l.up)("mobile-page-header-btn"),o=(0,l.up)("drop-menu-item"),s=(0,l.up)("drop-menu"),c=(0,l.up)("mobile-page-header"),p=(0,l.up)("q-tab"),w=(0,l.up)("tab-bar"),f=(0,l.up)("q-tab-panel"),_=(0,l.up)("q-tab-panels"),g=(0,l.up)("mobile-page-body"),W=(0,l.up)("q-dialog"),b=(0,l.up)("mobile-page");return(0,l.wg)(),(0,l.j4)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{"buttons-left":(0,l.w5)((()=>[(0,l.Wm)(u,{back:""})])),title:(0,l.w5)((()=>[ee])),"buttons-right":(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(i.Z),null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(o,{avatar:"",icon:"las la-plus-circle",title:"Start Iteration",onClick:r}),(0,l.Wm)(o,{avatar:"",icon:"las la-times-circle",title:"Stop Iteration"}),(0,l.Wm)(o,{avatar:"",icon:"las la-edit",title:"Edit Practice",onClick:d})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(g,{"no-padding":""},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(R),{class:"q-mb-lg q-mx-md"}),(0,l.Wm)(w,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),class:"q-mb-sm q-px-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{name:"history",label:"History"}),(0,l.Wm)(p,{name:"references",label:"References"})])),_:1},8,["modelValue"]),(0,l.Wm)(_,{animated:"",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),class:"bg-transparent q-mb-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{name:"history",class:"bg-transparent q-pa-md",style:{"padding-bottom":"70px"}},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(V))])),_:1}),(0,l.Wm)(f,{name:"references",class:"bg-transparent q-pa-md",style:{"padding-bottom":"70px"}},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(z))])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(W,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=e=>m.value=e),position:"bottom"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(M))])),_:1},8,["modelValue"])])),_:1})}}};var te=t(8408),le=t(5906),ne=t(6602),ie=t(6778);const ue=ae,oe=ue;I()(ae,"components",{QTab:te.Z,QTabPanels:le.Z,QTabPanel:ne.Z,QDialog:ie.Z})}}]);