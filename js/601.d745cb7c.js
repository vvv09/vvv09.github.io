"use strict";(globalThis["webpackChunkprojact_tabula_design"]=globalThis["webpackChunkprojact_tabula_design"]||[]).push([[601],{8601:(e,l,t)=>{t.r(l),t.d(l,{default:()=>Y});var a=t(3673),s=t(1959),n=t(2323),c=t(8825),r=t(741),u=t(8339);const i={__name:"SpellsList",setup(e){const l=(0,c.Z)(),t=(0,r.oR)(),i=(0,u.tv)(),o=((0,u.yj)(),(0,a.Fl)((()=>t.getters["directoriesSpells/getSpells"]))),d=e=>{l.screen.gt.sm&&t.dispatch("directoriesSpells/fetchSpellById",e),l.screen.lt.md&&i.push(`/home/spells/${e}`)};return(0,a.dl)((()=>{t.dispatch("directoriesSpells/fetchAllSpells")})),(e,t)=>{const c=(0,a.up)("q-img"),r=(0,a.up)("q-avatar"),u=(0,a.up)("q-item-section"),i=(0,a.up)("title-5"),p=(0,a.up)("q-item-label"),m=(0,a.up)("q-icon"),g=(0,a.up)("q-item"),w=(0,a.up)("x-separator"),_=(0,a.up)("q-list");return(0,a.wg)(),(0,a.j4)(_,{dense:"",class:"text-paragraph"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,s.SU)(o),((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a.Wm)(g,{dense:(0,s.SU)(l).screen.gt.sm,class:"q-pa-none",clickable:"",onClick:l=>d(e.id)},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{top:"",avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{rounded:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{src:e.imgUrl,ratio:1},null,8,["src"])])),_:2},1024)])),_:2},1024),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,a.Wm)(u,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{name:"chevron_right"})])),_:1})])),_:2},1032,["dense","onClick"]),t!==(0,s.SU)(o).length-1?((0,a.wg)(),(0,a.j4)(w,{key:0,spaced:"",inset:"item"})):(0,a.kq)("",!0)])))),128))])),_:1})}}};var o=t(7011),d=t(3414),p=t(2035),m=t(5096),g=t(4027),w=t(2350),_=t(4554),f=t(7518),S=t.n(f);const k=i,b=k;S()(i,"components",{QList:o.Z,QItem:d.Z,QItemSection:p.Z,QAvatar:m.Z,QImg:g.Z,QItemLabel:w.Z,QIcon:_.Z});var h=t(1001);function v(e,l){const t=(0,a.up)("flat-btn");return(0,a.wg)(),(0,a.j4)(t,{icon:"las la-columns"})}var W=t(4260);const U={},q=(0,W.Z)(U,[["render",v]]),Z=q,y={class:"q-pa-md"},j=(0,a.Uk)("Русский"),Q={class:"q-pa-md"},C=(0,a.Uk)("English"),I={key:1,class:"full-width"},L={__name:"SpellBlock",setup(e){const l=(0,r.oR)(),t=((0,c.Z)(),(0,a.Fl)((()=>l.getters["directoriesSpells/getSpell"]))),u=()=>{l.commit("directoriesSpells/setSpell",null)},i=(0,s.iH)(50);return(e,l)=>{const c=(0,a.up)("bar"),r=(0,a.up)("title-2"),o=(0,a.up)("paragraph"),d=(0,a.up)("q-splitter"),p=(0,a.up)("q-icon"),m=(0,a.up)("card");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c,null,(0,a.Nv)({default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)((0,s.SU)(t)?(0,s.SU)(t).title:"Select Spell From The List")+" ",1)])),_:2},[(0,s.SU)(t)?{name:"actions",fn:(0,a.w5)((()=>[(0,a.Wm)((0,s.SU)(Z),{onClick:l[0]||(l[0]=e=>i.value=50)}),(0,a.Wm)((0,s.SU)(h.Z),{onClick:u})]))}:void 0]),1024),(0,a.Wm)(m,{class:(0,n.C_)(["q-pa-md card-height-full",(0,s.SU)(t)?"":"flex text-center"])},{default:(0,a.w5)((()=>[(0,s.SU)(t)?((0,a.wg)(),(0,a.j4)(d,{key:0,modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=e=>i.value=e),class:"card-height-full-padding-md","before-class":"custom-scrollbar","after-class":"custom-scrollbar"},{before:(0,a.w5)((()=>[(0,a._)("div",y,[(0,a.Wm)(r,{class:"q-mb-md"},{default:(0,a.w5)((()=>[j])),_:1}),(0,a.Wm)(o,{innerHTML:(0,s.SU)(t).translation},null,8,["innerHTML"])])])),after:(0,a.w5)((()=>[(0,a._)("div",Q,[(0,a.Wm)(r,{class:"q-mb-md"},{default:(0,a.w5)((()=>[C])),_:1}),(0,a.Wm)(o,{innerHTML:(0,s.SU)(t).original},null,8,["innerHTML"])])])),_:1},8,["modelValue"])):((0,a.wg)(),(0,a.iD)("div",I,[(0,a.Wm)(p,{size:"8rem",style:{opacity:"0.3"},name:"las la-book-reader"})]))])),_:1},8,["class"])],64)}}};var H=t(218);const T=L,D=T;S()(L,"components",{QSplitter:H.Z,QIcon:_.Z});const x=e=>((0,a.dD)("data-v-0a13f8c4"),e=e(),(0,a.Cn)(),e),M={class:"row justify-center q-col-gutter-lg"},z={class:"col"},B=(0,a.Uk)("Spells"),F={class:"col-8"},V=x((()=>(0,a._)("div",{class:"col"},null,-1))),$=(0,a.Uk)("Book of Spells"),A={__name:"Spells",setup(e){return(e,l)=>{const t=(0,a.up)("bar"),n=(0,a.up)("desktop-page"),c=(0,a.up)("mobile-page-header-btn"),r=(0,a.up)("mobile-page-header"),u=(0,a.up)("mobile-page-body"),i=(0,a.up)("mobile-page");return(0,a.wg)(),(0,a.iD)("div",null,[e.$q.screen.gt.sm?((0,a.wg)(),(0,a.j4)(n,{key:0},{default:(0,a.w5)((()=>[(0,a._)("div",M,[(0,a._)("div",z,[(0,a.Wm)(t,null,{default:(0,a.w5)((()=>[B])),_:1}),(0,a.Wm)((0,s.SU)(b),{class:"card-height-full"})]),(0,a._)("div",F,[(0,a.Wm)((0,s.SU)(D))]),V])])),_:1})):e.$q.screen.lt.md?((0,a.wg)(),(0,a.j4)(i,{key:1},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{"buttons-left":(0,a.w5)((()=>[(0,a.Wm)(c,{back:""})])),title:(0,a.w5)((()=>[$])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,s.SU)(b))])),_:1})])),_:1})):(0,a.kq)("",!0)])}}},R=(0,W.Z)(A,[["__scopeId","data-v-0a13f8c4"]]),Y=R}}]);