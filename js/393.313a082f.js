"use strict";(globalThis["webpackChunkprojact_tabula_design"]=globalThis["webpackChunkprojact_tabula_design"]||[]).push([[393],{9393:(e,t,l)=>{l.r(t),l.d(t,{default:()=>he});var a=l(3673),n=l(1959),o=l(2323),u=l(4222);function s(e,t){const l=(0,a.up)("mobile-page-header-btn");return(0,a.wg)(),(0,a.j4)(l,{icon:"timer"})}var i=l(4260);const r={},m=(0,i.Z)(r,[["render",s]]),d=m,c={__name:"PlayPauseBtn",props:{switchIcon:{type:Boolean,default:!1}},setup(e){const t=e;return(e,l)=>{const n=(0,a.up)("flat-btn");return(0,a.wg)(),(0,a.j4)(n,{icon:t.switchIcon?"pause_circle":"play_circle"},null,8,["icon"])}}},p=c,w=p;function g(e,t){const l=(0,a.up)("flat-btn");return(0,a.wg)(),(0,a.j4)(l,{icon:"restart_alt"})}const v={},S=(0,i.Z)(v,[["render",g]]),b=S;function _(e,t){const l=(0,a.up)("flat-btn");return(0,a.wg)(),(0,a.j4)(l,{icon:"tune"})}const U={},h=(0,i.Z)(U,[["render",_]]),k=h;var W=l(741);const y=(0,a._)("div",{class:"text-h6"},"Stopwatch",-1),f=(0,a.Uk)(' Это секундомер, каждую минуту поле "duration" будет автоматически обновляться. '),q=(0,a._)("div",{class:"text-h6"},"Timer",-1),j=(0,a.Uk)(' Это таймер. При его запуске поле "duration" автоматически заполняется значением таймера '),V={key:0},Z=(0,a._)("div",{class:"text-h6"},"Plain",-1),x=(0,a.Uk)(" Это классический метроном. "),T=(0,a._)("div",{class:"text-h6"},"Timer",-1),I=(0,a.Uk)(' Это метроном для пранаямы. Данные автоматически подставляются из полей сессии, относящихся к "паттерну дыхания". Но могут быть изменены '),Q={__name:"TimerSettings",setup(e){const t=(0,W.oR)(),l=(0,a.Fl)({get(){return t.state.journal.timerSettings.type},set(e){let l=Object.assign({},t.state.journal.timerSettings);l.type=e,t.commit("journal/setTimerSettings",l)}}),o=(0,a.Fl)({get(){return t.state.journal.timerSettings.countdownMinutes},set(e){let l=Object.assign({},t.state.journal.timerSettings);l.countdownMinutes=e,t.commit("journal/setTimerSettings",l)}}),u=(0,a.Fl)({get(){return t.state.journal.timerSettings.useMetronome},set(e){let l=Object.assign({},t.state.journal.timerSettings);l.useMetronome=e,t.commit("journal/setTimerSettings",l)}}),s=(0,a.Fl)({get(){return t.state.journal.timerSettings.metronomeType},set(e){let l=Object.assign({},t.state.journal.timerSettings);l.metronomeType=e,t.commit("journal/setTimerSettings",l)}});return(e,t)=>{const i=(0,a.up)("q-option-group"),r=(0,a.up)("q-tab-panel"),m=(0,a.up)("x-input"),d=(0,a.up)("q-tab-panels"),c=(0,a.up)("q-checkbox"),p=(0,a.up)("card");return(0,a.wg)(),(0,a.j4)(p,{class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{modelValue:(0,n.SU)(l),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.dq)(l)?l.value=e:null),inline:"",options:[{label:"Stopwatch",value:"stopwatch"},{label:"Countdown",value:"countdown"}]},null,8,["modelValue"]),(0,a.Wm)(d,{modelValue:(0,n.SU)(l),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,n.dq)(l)?l.value=e:null),class:"bg-transparent"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{name:"stopwatch"},{default:(0,a.w5)((()=>[y,f])),_:1}),(0,a.Wm)(r,{name:"countdown"},{default:(0,a.w5)((()=>[q,(0,a.Wm)(m,{type:"number",modelValue:(0,n.SU)(o),"onUpdate:modelValue":t[1]||(t[1]=e=>(0,n.dq)(o)?o.value=e:null),dense:"",label:"Minutes"},null,8,["modelValue"]),j])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",null,[(0,a.Wm)(c,{modelValue:(0,n.SU)(u),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,n.dq)(u)?u.value=e:null),label:"Use Metronome"},null,8,["modelValue"])]),(0,n.SU)(u)?((0,a.wg)(),(0,a.iD)("div",V,[(0,a.Wm)(i,{modelValue:(0,n.SU)(s),"onUpdate:modelValue":t[4]||(t[4]=e=>(0,n.dq)(s)?s.value=e:null),inline:"",options:[{label:"Plain",value:"plain"},{label:"Pranayama",value:"pranayama"}]},null,8,["modelValue"]),(0,a.Wm)(d,{modelValue:(0,n.SU)(s),"onUpdate:modelValue":t[5]||(t[5]=e=>(0,n.dq)(s)?s.value=e:null),class:"bg-transparent"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{name:"plain"},{default:(0,a.w5)((()=>[Z,x])),_:1}),(0,a.Wm)(r,{name:"pranayama"},{default:(0,a.w5)((()=>[T,I])),_:1})])),_:1},8,["modelValue"])])):(0,a.kq)("",!0)])),_:1})}}};var P=l(8870),C=l(5906),H=l(6602),D=l(5735),E=l(7518),M=l.n(E);const F=Q,O=F;M()(Q,"components",{QOptionGroup:P.Z,QTabPanels:C.Z,QTabPanel:H.Z,QCheckbox:D.Z});const B={class:"text-center"},z=(0,a._)("span",{id:"clock"},"00:00",-1),A={key:0,autoplay:"",src:"sounds/finish_session_bell.mp3"},N={__name:"TimerExpansionPanel",props:{show:{type:Boolean,default:!1}},setup(e){const t=e,l=(0,W.oR)(),o=(0,a.Fl)((()=>l.getters["journal/getTimerSettings"])),u=(0,n.iH)(!1),s=()=>{u.value=!u.value},i=(0,n.iH)(!1),r=(0,n.iH)(!1);let m=null,d=0,c=0;const p=()=>{d++,d/60===1&&(d=0,c++),y(c,d)};let g=0,v=o.value.countdownMinutes;const S=()=>{0!==g||0!==v?(g/60!==1&&0!==g||(g=59,v--),g--,y(v,g)):_()},_=()=>{console.log("finish"),r.value=!1,h(),i.value=!0},U=()=>{r.value?(r.value=!1,window.clearInterval(m)):(i.value=!1,r.value=!0,console.log("started ",o.value.type),"stopwatch"===o.value.type&&(m=window.setInterval(p,1e3)),"countdown"===o.value.type&&(m=window.setInterval(S,1e3)))},h=()=>{window.clearInterval(m),"stopwatch"===o.value.type&&(d=0,c=0,y(c,d)),"countdown"===o.value.type&&(g=0,v=o.value.countdownMinutes,y(v,g))},y=(e,t)=>{let l=t,a=e;t<10&&(l="0"+t.toString()),e<10&&(a="0"+e.toString()),document.getElementById("clock").innerHTML=a+":"+l};return(e,l)=>{const m=(0,a.up)("q-item-section"),d=(0,a.up)("q-icon"),c=(0,a.up)("title-2"),p=(0,a.up)("q-item"),g=(0,a.up)("card"),v=(0,a.up)("q-expansion-item"),S=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)("div",B,[(0,a.Wm)(v,{"header-style":"display: none",modelValue:t.show,"onUpdate:modelValue":l[0]||(l[0]=e=>t.show=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{style:{"min-height":"60px"},class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(w),{switchIcon:r.value,onClick:U},null,8,["switchIcon"])])),_:1}),(0,a.Wm)(m,{class:"text-left"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[z,(0,a._)("sup",null,["countdown"===(0,n.SU)(o).type?((0,a.wg)(),(0,a.j4)(d,{key:0,name:"las la-hourglass-half"})):((0,a.wg)(),(0,a.j4)(d,{key:1,name:"las la-stopwatch"}))])])),_:1})])),_:1}),(0,a.Wm)(m,{side:""},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)((0,n.SU)(b),{onClick:h,class:"q-mr-md"}),(0,a.Wm)((0,n.SU)(k),{onClick:s})])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(S,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=e=>u.value=e),"transition-show":"rotate","transition-hide":"rotate"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(O))])),_:1},8,["modelValue"]),i.value?((0,a.wg)(),(0,a.iD)("audio",A)):(0,a.kq)("",!0)])}}};var R=l(429),G=l(3414),K=l(2035),L=l(4554),J=l(6778);const X=N,Y=X;M()(N,"components",{QExpansionItem:R.Z,QItem:G.Z,QItemSection:K.Z,QIcon:L.Z,QDialog:J.Z});var $=l(2707),ee=l(1628),te=l(72),le=l(5681),ae=l(3679),ne=l(9770);const oe=(0,a.Uk)("Edit Session"),ue={__name:"SessionEditSheet",setup(e){const t=(0,n.iH)("Малый Ритуал Пентаграммы"),l=(0,n.iH)("Класический ритуал западной магической традиции. Рекомендован к ежедневной практике каждым соискателем."),o=(0,n.iH)("Public"),u=(0,n.iH)(["Public","Private","Secret"]);return(e,s)=>{const i=(0,a.up)("mobile-sheet-header"),r=(0,a.up)("x-input"),m=(0,a.up)("q-card-section"),d=(0,a.up)("x-select"),c=(0,a.up)("q-card"),p=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(c,{class:"custom-border-radius bg-foreground text-paragraph q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{class:"q-mb-md"},{"buttons-left":(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)((0,n.SU)(ne.Z),null,null,512),[[p]])])),title:(0,a.w5)((()=>[oe])),"buttons-right":(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)((0,n.SU)(ae.Z),null,null,512),[[p]])])),_:1}),(0,a.Wm)(m,{class:"row items-center no-wrap"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{class:"col",outlined:"",modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=e=>t.value=e),label:"Name"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(m,{class:"row items-center no-wrap"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{class:"col",outlined:"",modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=e=>t.value=e),label:"Name"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(m,{class:"row items-center no-wrap"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{class:"col",outlined:"",autogrow:"",modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]=e=>l.value=e),label:"Description"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(m,{class:"row items-center no-wrap"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"col",outlined:"",modelValue:o.value,"onUpdate:modelValue":s[3]||(s[3]=e=>o.value=e),options:u.value,label:"Privacy"},null,8,["modelValue","options"])])),_:1})])),_:1})}}};var se=l(151),ie=l(5589),re=l(677);const me=(0,i.Z)(ue,[["__scopeId","data-v-155e0db6"]]),de=me;M()(ue,"components",{QCard:se.Z,QCardSection:ie.Z}),M()(ue,"directives",{ClosePopup:re.Z});var ce=l(8339);const pe={key:0,class:"q-mt-lg"},we={class:"text-center q-mt-lg"},ge=(0,a._)("div",{class:"page-body-spacer-footer"},null,-1),ve={__name:"SessionForm",setup(e){const t=(0,ce.tv)(),l=((0,ce.yj)(),(0,W.oR)()),s=(0,n.iH)(!1),i=()=>{s.value=!0},r=()=>{l.dispatch("journal/updateSessionStatus","ACTIVE"),t.push("/training")},m=(0,n.iH)(!1),c=()=>{m.value=!m.value},p=(0,a.Fl)((()=>l.getters["journal/getSession"])),w=(0,a.Fl)((()=>l.getters["journal/isSessionActive"]));return(e,t)=>{const l=(0,a.up)("mobile-page-header-btn"),g=(0,a.up)("title-3"),v=(0,a.up)("drop-menu-item"),S=(0,a.up)("drop-menu"),b=(0,a.up)("mobile-page-header"),_=(0,a.up)("x-separator"),U=(0,a.up)("q-icon"),h=(0,a.up)("q-dialog"),k=(0,a.up)("q-space"),W=(0,a.up)("q-toolbar"),y=(0,a.up)("q-page-sticky"),f=(0,a.up)("mobile-page-body"),q=(0,a.up)("mobile-page");return(0,a.wg)(),(0,a.j4)(q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{"buttons-left":(0,a.w5)((()=>[(0,a.Wm)(l,{back:""})])),title:(0,a.w5)((()=>[(0,n.SU)(p)?((0,a.wg)(),(0,a.j4)(g,{key:0,"text-color":"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,n.SU)(p).practice.name),1)])),_:1})):(0,a.kq)("",!0)])),"buttons-right":(0,a.w5)((()=>[(0,n.SU)(w)?((0,a.wg)(),(0,a.j4)((0,n.SU)(d),{key:0,onClick:c})):(0,a.kq)("",!0),(0,a.Wm)((0,n.SU)(le.Z),null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,n.SU)(w)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(v,{key:0,avatar:"",icon:"las la-edit",title:"Edit Session",onClick:i})),(0,n.SU)(w)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(v,{key:1,avatar:"",icon:"las la-undo",title:"Back Status to Active",onClick:r}))])),_:1})])),_:1})])),_:1}),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(Y),{show:m.value,class:"q-mb-lg"},null,8,["show"]),(0,a.Wm)((0,n.SU)(u.Z)),(0,n.SU)(p)&&!(0,n.SU)(w)?((0,a.wg)(),(0,a.iD)("div",pe,[(0,a.Wm)(_),(0,a._)("div",we,["DONE"===(0,n.SU)(p).status?((0,a.wg)(),(0,a.j4)(U,{key:0,name:"las la-check",color:"positive",size:"8em"})):(0,a.kq)("",!0),"SKIPPED"===(0,n.SU)(p).status?((0,a.wg)(),(0,a.j4)(U,{key:1,name:"las la-ban",color:"negative",size:"8em"})):(0,a.kq)("",!0)])])):(0,a.kq)("",!0),ge,(0,n.SU)(w)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(h,{key:1,modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e),position:"bottom"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(de))])),_:1},8,["modelValue"])),(0,n.SU)(w)?((0,a.wg)(),(0,a.j4)(y,{key:2,expand:"",position:"bottom"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{class:"bg-foreground text-primary shadow-3 q-px-lg q-py-md"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)($.Z)),(0,a.Wm)(k),(0,a.Wm)((0,n.SU)(ee.Z)),(0,a.Wm)(k),(0,a.Wm)((0,n.SU)(te.Z))])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1})}}};var Se=l(9645),be=l(9570),_e=l(2025);const Ue=ve,he=Ue;M()(ve,"components",{QIcon:L.Z,QDialog:J.Z,QPageSticky:Se.Z,QToolbar:be.Z,QSpace:_e.Z})}}]);