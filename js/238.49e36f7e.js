"use strict";(self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[]).push([[238],{8238:(t,e,o)=>{o.r(e),o.d(e,{default:()=>b});var i=o(3673);function s(t,e,o,s,r,n){const l=(0,i.up)("Timer"),a=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(a,{class:"flex bg-red-5 flex-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(l)])),_:1})}var r=o(2323),n=o(8880);const l={class:"full-width text-center"},a={class:"text-center text-grey-2 full-width  q-pa-md"},m=(0,i.Uk)(" Choose your time: "),u={class:"text-center q-mt-lg q-mb-lg full-width  q-pa-md"};function c(t,e,o,s,c,h){const p=(0,i.up)("q-option-group"),d=(0,i.up)("q-circular-progress"),w=(0,i.up)("q-btn");return(0,i.wg)(),(0,i.j4)("div",l,[(0,i.Wm)("div",a,[m,(0,i.Wm)(p,{modelValue:c.timeChoose,"onUpdate:modelValue":e[1]||(e[1]=t=>c.timeChoose=t),options:c.timeOptions,color:"blue",dark:"",inline:""},null,8,["modelValue","options"])]),(0,i.Wm)(d,{"show-value":"",class:"text-white q-mb-none q-mt-lg",max:h.initialTime,value:c.totalTime,size:"230px",thickness:.13,color:h.timerColor,"track-color":"dark"},{default:(0,i.w5)((()=>[(0,i.Wm)("span",{class:`text-${h.timerColor}`},(0,r.zw)(h.minutes)+":"+(0,r.zw)(h.seconds),3)])),_:1},8,["max","value","thickness","color"]),(0,i.Wm)("div",u,[c.pauseButton?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(w,{key:0,flat:"",size:"15px",color:"white",label:"Start",stack:"",icon:"play_arrow",onClick:h.startTimer},null,8,["onClick"])),c.pauseButton?((0,i.wg)(),(0,i.j4)(w,{key:1,flat:"",size:"15px",color:"white",label:"Pause",onClick:h.pauseTimer,stack:"",icon:"pause"},null,8,["onClick"])):(0,i.kq)("",!0),(0,i.wy)((0,i.Wm)(w,{flat:"",size:"15px",color:"white",label:"Reset",onClick:h.resetTimer,stack:"",icon:"restore"},null,8,["onClick"]),[[n.F8,c.resetButton]])])])}const h={methods:{askNotificationPermission(){"granted"!==Notification.permission&&Notification.requestPermission()},showNotification(t,e,o){const i=new Notification(t,{body:e,icon:o});return i}}},p=h,d={mixins:[p],data(){return{timer:null,timeChoose:25,pauseButton:!1,resetButton:!1,totalTime:1500,timeOptions:[{label:"Pomodoro",value:25},{label:"Short Break",value:5},{label:"Long Break",value:10}]}},computed:{initialTime(){return 60*this.timeChoose},minutes(){const t=Math.floor(this.totalTime/60);return this.padTime(t)},seconds(){const t=this.totalTime-60*this.minutes;return this.padTime(t)},timerColor(){const t=this.totalTime/60;return t<=3?"red-6":t<=10?"orange-6":"white"}},watch:{timeChoose(){this.resetTimer()},totalTime(){0===this.totalTime&&this.showNotification("Time is up!","","statics/app-logo-128x128.png")}},meta(){return{title:this.timer?`(${this.minutes}:${this.seconds}) Pomodoro Timer`:"Pomodoro Timer"}},methods:{startTimer(){this.timer=setInterval((()=>this.countdown()),1e3),this.resetButton=!0,this.pauseButton=!0},pauseTimer(){this.pauseButton=!1,clearInterval(this.timer),this.timer=null,this.resetButton=!0},resetTimer(){this.totalTime=60*this.timeChoose,clearInterval(this.timer),this.timer=null,this.resetButton=!1,this.pauseButton=!1},padTime(t){return(t<10?"0":"")+t},countdown(){this.totalTime>=1?this.totalTime--:(this.totalTime=0,this.resetTimer())}}};var w=o(5094),T=o(7086),k=o(1889),f=o(7518),g=o.n(f);d.render=c;const C=d;g()(d,"components",{QOptionGroup:w.Z,QCircularProgress:T.Z,QBtn:k.Z});const x=(0,i.aZ)({name:"PageIndex",components:{Timer:C}});var v=o(4379);x.render=s;const b=x;g()(x,"components",{QPage:v.Z})}}]);