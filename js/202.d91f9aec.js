"use strict";(self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[]).push([[202],{5268:(t,e,s)=>{s.d(e,{Z:()=>x});var o=s(3673),a=s(8880),r=s(2323);const l={class:"q-pa-sm  text-white  fit"},n={class:"row items-center"},d=(0,o.Uk)(" Done "),m={class:"row items-center"},c=(0,o.Uk)(" Delete "),i=(0,o.Wm)("p",{class:"text-center",style:{"font-size":"10px",opacity:"50%"}},[(0,o.Uk)("swipe "),(0,o.Wm)("br"),(0,o.Uk)(" right done - left delete")],-1);function u(t,e,s,u,p,w){const f=(0,o.up)("q-icon"),h=(0,o.up)("q-input"),g=(0,o.up)("q-card"),k=(0,o.up)("q-item-section"),W=(0,o.up)("q-item"),y=(0,o.up)("q-slide-item"),b=(0,o.up)("q-list");return(0,o.wg)(),(0,o.j4)("div",l,[(0,o.Wm)(g,{flat:"",class:"fit bg-"+u.store.state.primary,style:{width:"100%"}},{default:(0,o.w5)((()=>[u.store.state.todos.length<u.store.state.todoLimit?((0,o.wg)(),(0,o.j4)(h,{key:0,rounded:"",standout:"","bottom-slots":"",onKeyup:e[2]||(e[2]=(0,a.D2)((t=>u.store.methods.addTask(u.store.state.text)),["enter"])),modelValue:u.store.state.text,"onUpdate:modelValue":e[3]||(e[3]=t=>u.store.state.text=t),label:"Add task",style:{width:"100%"},class:"q-pt-sm top "},{prepend:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"task"})])),append:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"add",onClick:e[1]||(e[1]=t=>u.store.methods.addTask(u.store.state.text)),class:"cursor-pointer"})])),_:1},8,["modelValue"])):(0,o.kq)("",!0)])),_:1},8,["class"]),(0,o.Wm)(b,{class:"justify-between fit bg-"+u.store.state.primary},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(u.store.state.todos,(t=>((0,o.wg)(),(0,o.j4)(y,{onLeft:e=>u.store.methods.deleteTask(t),class:"q-ma-lg text-center text-white bg-"+u.store.state.secondary,onRight:e=>u.store.methods.deleteTask(t),"left-color":"green","right-color":"red",key:t},{left:(0,o.w5)((()=>[(0,o.Wm)("div",n,[(0,o.Wm)(f,{left:"",name:"done"}),d])])),right:(0,o.w5)((()=>[(0,o.Wm)("div",m,[c,(0,o.Wm)(f,{right:"",name:"delete"})])])),default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{color:"primary",name:"done"})])),_:1}),(0,o.Wm)(k,{class:"text-center text-white bg-"+u.store.state.secondary},{default:(0,o.w5)((()=>[(0,o.Wm)("strong",null,(0,r.zw)(t),1)])),_:2},1032,["class"]),(0,o.Wm)(k,{avatar:""},{default:(0,o.w5)((()=>[i])),_:1})])),_:2},1024)])),_:2},1032,["onLeft","class","onRight"])))),128))])),_:1},8,["class"])])}const p={name:"Todo",setup(){const t=(0,o.f3)("store");return{store:t}}};var w=s(151),f=s(8908),h=s(4554),g=s(7011),k=s(8951),W=s(3414),y=s(2035),b=s(7518),q=s.n(b);p.render=u;const x=p;q()(p,"components",{QCard:w.Z,QInput:f.Z,QIcon:h.Z,QList:g.Z,QSlideItem:k.Z,QItem:W.Z,QItemSection:y.Z})},2202:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var o=s(3673);function a(t,e,s,a,r,l){const n=(0,o.up)("Todo",!0);return(0,o.wg)(),(0,o.j4)("div",null,[(0,o.Wm)(n,{class:"full-height bg-"+a.store.state.primary,style:{height:"100%"}},null,8,["class"])])}var r=s(5268);const l={components:{Todo:r.Z},setup(){const t=(0,o.f3)("store");return{store:t}}};l.render=a;const n=l}}]);