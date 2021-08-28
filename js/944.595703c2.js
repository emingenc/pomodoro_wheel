"use strict";(self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[]).push([[944],{3944:(e,o,l)=>{l.r(o),l.d(o,{default:()=>x});var r=l(3673),t=l(2323);const s={class:"flex flex-center text-center"},a=(0,r.Wm)("div",{class:"text-h6 q-pa-xl"},"Appearance",-1),d=(0,r.Uk)(" Choose color "),m={class:"q-pa-xl q-gutter-lg",style:{"max-width":"400px"}},n={class:"q-gutter-y-md q-pa-xl"},u=(0,r.Wm)("div",{class:"text-h6 q-pa-xl"},"Rewards",-1),c={class:"q-gutter-y-md q-pa-xl"},i=(0,r.Wm)("div",{class:"text-h6 q-pa-xl"},"Time settings",-1),p=(0,r.Wm)("br",null,null,-1),W=(0,r.Wm)("br",null,null,-1),C=(0,r.Wm)("br",null,null,-1),b=(0,r.Wm)("br",null,null,-1);function w(e,o,l,w,h,V){const g=(0,r.up)("q-btn"),k=(0,r.up)("q-input"),y=(0,r.up)("q-slider");return(0,r.wg)(),(0,r.j4)("div",s,[(0,r.Wm)("div",{class:"bg-"+w.store.state.primary},[a,d,(0,r.Wm)("div",m,[(0,r.Wm)(g,{round:"",color:"red-3",onClick:o[1]||(o[1]=e=>w.store.methods.setColor("red"))}),(0,r.Wm)(g,{round:"",color:"indigo-3",onClick:o[2]||(o[2]=e=>w.store.methods.setColor("indigo"))}),(0,r.Wm)(g,{round:"",color:"blue-3",onClick:o[3]||(o[3]=e=>w.store.methods.setColor("blue"))}),(0,r.Wm)(g,{round:"",color:"light-blue-3",onClick:o[4]||(o[4]=e=>w.store.methods.setColor("light-blue"))}),(0,r.Wm)(g,{round:"",color:"green-3",onClick:o[5]||(o[5]=e=>w.store.methods.setColor("green"))}),(0,r.Wm)(g,{round:"",color:"purple-3",onClick:o[6]||(o[6]=e=>w.store.methods.setColor("purple"))}),(0,r.Wm)(g,{round:"",color:"deep-purple-3",onClick:o[7]||(o[7]=e=>w.store.methods.setColor("deep-purple"))}),(0,r.Wm)(g,{round:"",color:"brown-3",onClick:o[8]||(o[8]=e=>w.store.methods.setColor("brown"))}),(0,r.Wm)(g,{round:"",color:"teal-3",onClick:o[9]||(o[9]=e=>w.store.methods.setColor("teal"))}),(0,r.Wm)(g,{round:"",color:"cyan-3",onClick:o[10]||(o[10]=e=>w.store.methods.setColor("cyan"))}),(0,r.Wm)(g,{round:"",color:"lime-3",onClick:o[11]||(o[11]=e=>w.store.methods.setColor("lime"))}),(0,r.Wm)(g,{round:"",color:"yellow-3",onClick:o[12]||(o[12]=e=>w.store.methods.setColor("yellow"))}),(0,r.Wm)(g,{round:"",color:"amber-3",onClick:o[13]||(o[13]=e=>w.store.methods.setColor("amber"))}),(0,r.Wm)(g,{round:"",color:"orange-3",onClick:o[14]||(o[14]=e=>w.store.methods.setColor("orange"))}),(0,r.Wm)(g,{round:"",color:"deep-orange-3",onClick:o[15]||(o[15]=e=>w.store.methods.setColor("deep-orange"))}),(0,r.Wm)(g,{round:"",color:"blue-grey",onClick:o[16]||(o[16]=e=>w.store.methods.setColor("blue-grey"))})]),(0,r.Wm)("div",n,[u,(0,r.Wm)(k,{clearable:"",filled:"",class:"q-pa-sm",color:w.store.state.primary,modelValue:w.store.state.reward1,"onUpdate:modelValue":o[17]||(o[17]=e=>w.store.state.reward1=e),label:"Reward 1"},null,8,["color","modelValue"]),(0,r.Wm)(k,{clearable:"",filled:"",class:"q-pa-sm",color:w.store.state.primary,modelValue:w.store.state.reward2,"onUpdate:modelValue":o[18]||(o[18]=e=>w.store.state.reward2=e),label:"Reward 2"},null,8,["color","modelValue"]),(0,r.Wm)(k,{clearable:"",filled:"",class:"q-pa-sm",color:w.store.state.primary,modelValue:w.store.state.reward3,"onUpdate:modelValue":o[19]||(o[19]=e=>w.store.state.reward3=e),label:"Reward 3"},null,8,["color","modelValue"]),(0,r.Wm)(k,{clearable:"",filled:"",class:"q-pa-sm",color:w.store.state.primary,modelValue:w.store.state.reward4,"onUpdate:modelValue":o[20]||(o[20]=e=>w.store.state.reward4=e),label:"Reward 4"},null,8,["color","modelValue"]),(0,r.Wm)(k,{clearable:"",filled:"",class:"q-pa-sm",color:w.store.state.primary,modelValue:w.store.state.reward5,"onUpdate:modelValue":o[21]||(o[21]=e=>w.store.state.reward5=e),label:"Reward 5"},null,8,["color","modelValue"]),(0,r.Wm)(k,{clearable:"",filled:"",class:"q-pa-sm",color:w.store.state.primary,modelValue:w.store.state.reward6,"onUpdate:modelValue":o[22]||(o[22]=e=>w.store.state.reward6=e),label:"Reward 6"},null,8,["color","modelValue"])]),(0,r.Wm)("div",c,[i,(0,r.Wm)("p",null,"focus: "+(0,t.zw)(w.store.state.focus)+" min",1),(0,r.Wm)(y,{modelValue:w.store.state.focus,"onUpdate:modelValue":o[23]||(o[23]=e=>w.store.state.focus=e),min:15,max:45,color:w.store.state.secondary},null,8,["modelValue","color"]),(0,r.Wm)("p",null,"short break: "+(0,t.zw)(w.store.state.short)+" min",1),(0,r.Wm)(y,{modelValue:w.store.state.short,"onUpdate:modelValue":o[24]||(o[24]=e=>w.store.state.short=e),min:1,max:15,color:w.store.state.secondary},null,8,["modelValue","color"]),(0,r.Wm)("p",null,"long break: "+(0,t.zw)(w.store.state.long)+" min",1),(0,r.Wm)(y,{modelValue:w.store.state.long,"onUpdate:modelValue":o[25]||(o[25]=e=>w.store.state.long=e),min:10,max:30,color:w.store.state.secondary},null,8,["modelValue","color"])]),p,W,C,b],2)])}var h=l(1959);const V={setup(){const e=(0,r.f3)("store");return{store:e,tab:(0,h.iH)("rewards")}}};var g=l(4607),k=l(8908),y=l(2064),q=l(7518),f=l.n(q);V.render=w;const x=V;f()(V,"components",{QBtn:g.Z,QInput:k.Z,QSlider:y.Z})}}]);