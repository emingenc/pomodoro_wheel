"use strict";(self["webpackChunktomatodo"]=self["webpackChunktomatodo"]||[]).push([[888],{1888:(e,o,l)=>{l.r(o),l.d(o,{default:()=>x});var r=l(3673),t=l(2323);const s={class:"flex flex-center text-center"},a=(0,r.Wm)("div",{class:"text-h6 q-pa-xl"},"Appearance",-1),d=(0,r.Uk)(" Choose color "),m={class:"q-pa-xl q-gutter-lg",style:{"max-width":"%61"}},n={class:"q-gutter-y-md q-pa-xl"},u=(0,r.Wm)("div",{class:"text-h6 q-pa-xl"},"Rewards",-1),c={class:"q-gutter-y-md q-pa-xl"},i=(0,r.Wm)("div",{class:"text-h6 q-pa-xl"},"Time settings",-1),p=(0,r.Wm)("br",null,null,-1),h=(0,r.Wm)("br",null,null,-1),W=(0,r.Wm)("br",null,null,-1),C=(0,r.Wm)("br",null,null,-1);function b(e,o,l,b,w,g){const V=(0,r.up)("q-btn"),q=(0,r.up)("q-input"),f=(0,r.up)("q-slider");return(0,r.wg)(),(0,r.j4)("div",s,[(0,r.Wm)("div",{class:"bg-"+b.store.state.primary},[a,d,(0,r.Wm)("div",m,[(0,r.Wm)(V,{round:"",color:"red-3",onClick:o[1]||(o[1]=e=>b.store.methods.setColor("red"))}),(0,r.Wm)(V,{round:"",color:"indigo-3",onClick:o[2]||(o[2]=e=>b.store.methods.setColor("indigo"))}),(0,r.Wm)(V,{round:"",color:"blue-3",onClick:o[3]||(o[3]=e=>b.store.methods.setColor("blue"))}),(0,r.Wm)(V,{round:"",color:"light-blue-3",onClick:o[4]||(o[4]=e=>b.store.methods.setColor("light-blue"))}),(0,r.Wm)(V,{round:"",color:"green-3",onClick:o[5]||(o[5]=e=>b.store.methods.setColor("green"))}),(0,r.Wm)(V,{round:"",color:"purple-3",onClick:o[6]||(o[6]=e=>b.store.methods.setColor("purple"))}),(0,r.Wm)(V,{round:"",color:"deep-purple-3",onClick:o[7]||(o[7]=e=>b.store.methods.setColor("deep-purple"))}),(0,r.Wm)(V,{round:"",color:"brown-3",onClick:o[8]||(o[8]=e=>b.store.methods.setColor("brown"))}),(0,r.Wm)(V,{round:"",color:"teal-3",onClick:o[9]||(o[9]=e=>b.store.methods.setColor("teal"))}),(0,r.Wm)(V,{round:"",color:"cyan-3",onClick:o[10]||(o[10]=e=>b.store.methods.setColor("cyan"))}),(0,r.Wm)(V,{round:"",color:"lime-3",onClick:o[11]||(o[11]=e=>b.store.methods.setColor("lime"))}),(0,r.Wm)(V,{round:"",color:"yellow-3",onClick:o[12]||(o[12]=e=>b.store.methods.setColor("yellow"))}),(0,r.Wm)(V,{round:"",color:"amber-3",onClick:o[13]||(o[13]=e=>b.store.methods.setColor("amber"))}),(0,r.Wm)(V,{round:"",color:"orange-3",onClick:o[14]||(o[14]=e=>b.store.methods.setColor("orange"))}),(0,r.Wm)(V,{round:"",color:"deep-orange-3",onClick:o[15]||(o[15]=e=>b.store.methods.setColor("deep-orange"))}),(0,r.Wm)(V,{round:"",color:"blue-grey",onClick:o[16]||(o[16]=e=>b.store.methods.setColor("blue-grey"))})]),(0,r.Wm)("div",n,[u,(0,r.Wm)(q,{clearable:"",filled:"",rules:[e=>0!=e.length||"This field is required"],class:"q-pa-sm",color:b.store.state.primary,modelValue:b.store.state.reward1,"onUpdate:modelValue":o[17]||(o[17]=e=>b.store.state.reward1=e),label:"Reward 1"},null,8,["rules","color","modelValue"]),(0,r.Wm)(q,{clearable:"",filled:"",rules:[e=>0!=e.length||"This field is required"],class:"q-pa-sm",color:b.store.state.primary,modelValue:b.store.state.reward2,"onUpdate:modelValue":o[18]||(o[18]=e=>b.store.state.reward2=e),label:"Reward 2"},null,8,["rules","color","modelValue"]),(0,r.Wm)(q,{clearable:"",filled:"",rules:[e=>0!=e.length||"This field is required"],class:"q-pa-sm",color:b.store.state.primary,modelValue:b.store.state.reward3,"onUpdate:modelValue":o[19]||(o[19]=e=>b.store.state.reward3=e),label:"Reward 3"},null,8,["rules","color","modelValue"]),(0,r.Wm)(q,{clearable:"",filled:"",rules:[e=>0!=e.length||"This field is required"],class:"q-pa-sm",color:b.store.state.primary,modelValue:b.store.state.reward4,"onUpdate:modelValue":o[20]||(o[20]=e=>b.store.state.reward4=e),label:"Reward 4"},null,8,["rules","color","modelValue"]),(0,r.Wm)(q,{clearable:"",filled:"",rules:[e=>0!=e.length||"This field is required"],class:"q-pa-sm",color:b.store.state.primary,modelValue:b.store.state.reward5,"onUpdate:modelValue":o[21]||(o[21]=e=>b.store.state.reward5=e),label:"Reward 5"},null,8,["rules","color","modelValue"]),(0,r.Wm)(q,{clearable:"",filled:"",rules:[e=>0!=e.length||"This field is required"],class:"q-pa-sm",color:b.store.state.primary,modelValue:b.store.state.reward6,"onUpdate:modelValue":o[22]||(o[22]=e=>b.store.state.reward6=e),label:"Reward 6"},null,8,["rules","color","modelValue"])]),(0,r.Wm)("div",c,[i,(0,r.Wm)("p",null,"focus: "+(0,t.zw)(b.store.state.focus)+" min",1),(0,r.Wm)(f,{modelValue:b.store.state.focus,"onUpdate:modelValue":o[23]||(o[23]=e=>b.store.state.focus=e),min:15,max:45,color:b.store.state.secondary},null,8,["modelValue","color"]),(0,r.Wm)("p",null,"short break: "+(0,t.zw)(b.store.state.short)+" min",1),(0,r.Wm)(f,{modelValue:b.store.state.short,"onUpdate:modelValue":o[24]||(o[24]=e=>b.store.state.short=e),min:1,max:15,color:b.store.state.secondary},null,8,["modelValue","color"]),(0,r.Wm)("p",null,"long break: "+(0,t.zw)(b.store.state.long)+" min",1),(0,r.Wm)(f,{modelValue:b.store.state.long,"onUpdate:modelValue":o[25]||(o[25]=e=>b.store.state.long=e),min:10,max:30,color:b.store.state.secondary},null,8,["modelValue","color"])]),p,h,W,C],2)])}var w=l(1959);const g={setup(){const e=(0,r.f3)("store");return{store:e,tab:(0,w.iH)("rewards")}}};var V=l(4607),q=l(4842),f=l(2064),k=l(7518),y=l.n(k);g.render=b;const x=g;y()(g,"components",{QBtn:V.Z,QInput:q.Z,QSlider:f.Z})}}]);