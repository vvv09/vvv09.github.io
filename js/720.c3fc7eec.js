"use strict";(globalThis["webpackChunkprojact_tabula_design"]=globalThis["webpackChunkprojact_tabula_design"]||[]).push([[720],{6720:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var s=a(3673),l=a(1959),r=a(2323),n=a(741),c=a(8339);const i=(0,s.Uk)(" Description "),u={class:"absolute-bottom text-subtitle1 text-center"},o={key:1},p=["text-color"],d=(0,s.Uk)("Item description"),m=(0,s.Uk)("Correspondence description"),_={__name:"Description",setup(e){const t=(0,n.oR)(),a=((0,c.tv)(),(0,c.yj)()),_=(0,s.Fl)((()=>t.getters["directoriesTables/getItem"])),g=(0,s.Fl)((()=>t.getters["directoriesTables/getCorrespondence"])),k=(0,s.Fl)((()=>t.getters["directoriesTables/getRelatedImages"])),w=(0,s.Fl)((()=>{if(k.value&&k.value.length>0){let e=k.value.filter((e=>!0===e.cover))[0];if(e)return{url:`/uploads/${e.url}`,caption:e.caption}}return null}));return(0,s.dl)((()=>{t.dispatch("directoriesTables/fetchItem",a.params.itemId),t.dispatch("directoriesTables/fetchCorrespondence",a.query.cor),t.dispatch("directoriesTables/fetchRelatedImages",a.params.itemId)})),(e,t)=>{const a=(0,s.up)("mobile-page-header-btn"),n=(0,s.up)("mobile-page-header"),c=(0,s.up)("q-img"),k=(0,s.up)("q-btn"),b=(0,s.up)("title-2"),U=(0,s.up)("q-card-section"),S=(0,s.up)("title-3"),f=(0,s.up)("paragraph"),q=(0,s.up)("mobile-page-body"),h=(0,s.up)("mobile-page");return e.$q.screen.lt.md?((0,s.wg)(),(0,s.j4)(h,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{"buttons-left":(0,s.w5)((()=>[(0,s.Wm)(a,{back:""})])),title:(0,s.w5)((()=>[i])),_:1}),(0,s.Wm)(q,{"no-padding":""},{default:(0,s.w5)((()=>[(0,l.SU)(w)?((0,s.wg)(),(0,s.j4)(c,{key:0,src:(0,l.SU)(w).url},{default:(0,s.w5)((()=>[(0,s._)("div",u,(0,r.zw)((0,l.SU)(w).caption),1)])),_:1},8,["src"])):(0,s.kq)("",!0),(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,l.SU)(w)?((0,s.wg)(),(0,s.j4)(k,{key:0,fab:"",color:"primary",icon:"las la-image",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}})):(0,s.kq)("",!0),(0,l.SU)(_)?((0,s.wg)(),(0,s.iD)("div",o,[(0,l.SU)(_).special_name?((0,s.wg)(),(0,s.j4)(b,{key:0},{default:(0,s.w5)((()=>[(0,s._)("span",{"text-color":`${(0,l.SU)(_).special_class}`,class:(0,r.C_)(`${(0,l.SU)(_).special_class} text-${(0,l.SU)(_).special_class}`)},(0,r.zw)((0,l.SU)(_).special_name),11,p)])),_:1})):(0,s.kq)("",!0),(0,l.SU)(_).name_ru?((0,s.wg)(),(0,s.j4)(b,{key:1},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)((0,l.SU)(_).name_ru),1)])),_:1})):(0,s.kq)("",!0),(0,l.SU)(_).trans_ru?((0,s.wg)(),(0,s.j4)(b,{key:2},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)((0,l.SU)(_).trans_ru),1)])),_:1})):(0,s.kq)("",!0),(0,l.SU)(_).value?((0,s.wg)(),(0,s.j4)(b,{key:3},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)((0,l.SU)(_).value),1)])),_:1})):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])),_:1}),(0,l.SU)(_)&&(0,l.SU)(_).descr_ru?((0,s.wg)(),(0,s.j4)(U,{key:1,class:"q-pt-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{class:"q-mb-sm"},{default:(0,s.w5)((()=>[d])),_:1}),(0,s.Wm)(f,{innerHTML:(0,l.SU)(_).descr_ru},null,8,["innerHTML"])])),_:1})):(0,s.kq)("",!0),(0,l.SU)(g)&&(0,l.SU)(g).descr_ru?((0,s.wg)(),(0,s.j4)(U,{key:2,class:"q-pt-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{class:"q-mb-sm"},{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(f,{innerHTML:(0,l.SU)(g).descr_ru},null,8,["innerHTML"])])),_:1})):(0,s.kq)("",!0)])),_:1})])),_:1})):(0,s.kq)("",!0)}}};var g=a(4027),k=a(5589),w=a(8240),b=a(7518),U=a.n(b);const S=_,f=S;U()(_,"components",{QImg:g.Z,QCardSection:k.Z,QBtn:w.Z})}}]);