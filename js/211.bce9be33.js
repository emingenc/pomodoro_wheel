"use strict";(self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[]).push([[211],{211:(t,e,s)=>{s.r(e),s.d(e,{default:()=>T});var o=s(3673);function a(t,e,s,a,r,n){const l=(0,o.up)("Todo",!0);return(0,o.wg)(),(0,o.j4)("div",{onDblclick:e[1]||(e[1]=t=>this.store.state.step++),class:this.$q.screen.xs?"fit q-pa-lg":"q-pa-xl",style:this.$q.screen.xs?"":"margin-right: auto; margin-left: auto;  width:61.8%"},[(0,o.Wm)(l)],38)}var r=s(2323),n=s(8880);const l={key:0,class:"text-center"},d={class:"row items-center"},m=(0,o.Uk)(" Done "),c={class:"row items-center"},i=(0,o.Uk)(" Delete "),p=(0,o.Wm)("p",{class:"text-center",style:{"font-size":"10px",opacity:"50%"}},[(0,o.Uk)("swipe "),(0,o.Wm)("br"),(0,o.Uk)(" right done - left delete")],-1);function u(t,e,s,a,u,w){const h=(0,o.up)("q-icon"),g=(0,o.up)("q-input"),f=(0,o.up)("q-card"),k=(0,o.up)("q-item-section"),W=(0,o.up)("q-item"),q=(0,o.up)("q-slide-item"),x=(0,o.up)("q-list");return(0,o.wg)(),(0,o.j4)("div",{class:"q-pa-md text-white bg-"+a.store.state.primary},[(0,o.Wm)(f,{flat:"",class:" fit bg-"+a.store.state.primary},{default:(0,o.w5)((()=>[a.store.state.completedTodos.length>2?((0,o.wg)(),(0,o.j4)("h6",l,[(0,o.Uk)((0,r.zw)(a.store.state.completedTodos.length)+" tasks completed ",1),(0,o.Wm)(h,{name:"done "})])):(0,o.kq)("",!0),a.store.state.todos.length<a.store.state.todoLimit?((0,o.wg)(),(0,o.j4)(g,{key:1,rounded:"",standout:"","bottom-slots":"",onKeyup:e[2]||(e[2]=(0,n.D2)((t=>a.store.methods.addTask(a.store.state.text)),["enter"])),modelValue:a.store.state.text,"onUpdate:modelValue":e[3]||(e[3]=t=>a.store.state.text=t),label:"Add task",style:{width:"100%"},class:"q-pt-sm top "},{prepend:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"task"})])),append:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"add",onClick:e[1]||(e[1]=t=>a.store.methods.addTask(a.store.state.text)),class:"cursor-pointer"})])),_:1},8,["modelValue"])):(0,o.kq)("",!0)])),_:1},8,["class"]),(0,o.Wm)(x,{class:" bg-"+a.store.state.primary},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(a.store.state.todos,(t=>((0,o.wg)(),(0,o.j4)(q,{onLeft:e=>a.store.methods.addCompletedTask(t),class:"q-ma-md  text-center text-white bg-"+a.store.state.secondary,style:"height:50px ;",onRight:e=>a.store.methods.deleteTask(t),"left-color":"green","right-color":"red",key:t},{left:(0,o.w5)((()=>[(0,o.Wm)("div",d,[(0,o.Wm)(h,{left:"",name:"done"}),m])])),right:(0,o.w5)((()=>[(0,o.Wm)("div",c,[i,(0,o.Wm)(h,{right:"",name:"delete"})])])),default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"primary",name:"done"})])),_:1}),(0,o.Wm)(k,{class:"text-center text-white bg-"+a.store.state.secondary},{default:(0,o.w5)((()=>[(0,o.Wm)("strong",null,(0,r.zw)(t),1)])),_:2},1032,["class"]),(0,o.Wm)(k,{avatar:""},{default:(0,o.w5)((()=>[p])),_:1})])),_:2},1024)])),_:2},1032,["onLeft","class","onRight"])))),128))])),_:1},8,["class"])],2)}const w={name:"Todo",setup(){const t=(0,o.f3)("store");return{store:t}}};var h=s(151),g=s(4554),f=s(4842),k=s(7011),W=s(8951),q=s(3414),x=s(2035),y=s(7518),b=s.n(y);w.render=u;const _=w;b()(w,"components",{QCard:h.Z,QIcon:g.Z,QInput:f.Z,QList:k.Z,QSlideItem:W.Z,QItem:q.Z,QItemSection:x.Z});const v={components:{Todo:_},setup(){const t=(0,o.f3)("store");return{store:t}}};v.render=a;const T=v}}]);