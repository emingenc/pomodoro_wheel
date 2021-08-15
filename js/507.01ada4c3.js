(self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[]).push([[507],{3507:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>U});var s=o(3673),a=o(2323);const i=(0,s.Wm)("div",{class:"text-grey-8 q-gutter-xs"},null,-1),r={class:"text-center text-red-10  q-gutter-xs"},n={style:{width:"%100"}};function l(t,e,o,l,d,m){const c=(0,s.up)("q-checkbox"),u=(0,s.up)("q-item-section"),p=(0,s.up)("q-item-label"),h=(0,s.up)("q-item"),f=(0,s.up)("q-list"),w=(0,s.up)("Todo"),g=(0,s.up)("q-step"),v=(0,s.up)("Timer"),T=(0,s.up)("Wheel"),k=(0,s.up)("q-stepper"),b=(0,s.up)("q-page"),x=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.j4)(b,{class:"flex bg-red-2 flex-center"},{default:(0,s.w5)((()=>[(0,s.Wm)("div",{onDblclick:e[2]||(e[2]=t=>this.store.state.step++),class:"q-pa-md"},[(0,s.Wm)(f,{style:{width:"400px"},class:"justify-around"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(t.store.state.todos,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(h,{tag:"label",class:"q-pa-md",key:e},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{side:"",top:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{false:"",onClick:o=>t.store.methods.deleteTask(e)},null,8,["onClick"])])),_:2},1024),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(u,{top:"",side:""},{default:(0,s.w5)((()=>[i])),_:1})])),_:2},1536)),[[x]]))),128))])),_:1}),(0,s.Wm)(k,{modelValue:t.store.state.step,"onUpdate:modelValue":e[1]||(e[1]=e=>t.store.state.step=e),vertical:"",ref:"stepper",animated:"","inactive-color":"red-2","active-color":"red-10",class:"bg-red-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{name:1,title:"Decide on the Task to be done",icon:"task",done:t.store.state.step>1,"header-nav":t.store.state.step>1},{default:(0,s.w5)((()=>[(0,s.Wm)(w)])),_:1},8,["done","header-nav"]),(0,s.Wm)(g,{name:2,"inactive-color":"red-3",title:"Work for 25 minutes",caption:"",icon:"settings",done:t.store.state.step>2,"header-nav":t.store.state.step>2},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{total:25,step:3})])),_:1},8,["done","header-nav"]),(0,s.Wm)(g,{name:3,"inactive-color":"red-3",title:"Take a short break, reward yourself",icon:"add_comment","header-nav":t.store.state.step>3},{default:(0,s.w5)((()=>[(0,s.Wm)(T)])),_:1},8,["header-nav"]),(0,s.Wm)(g,{name:4,"inactive-color":"blue-3",title:"Rest 5 minutes",caption:"",icon:"settings",done:t.store.state.step>2,"header-nav":t.store.state.step>2},{default:(0,s.w5)((()=>[(0,s.Wm)("div",r,[(0,s.Wm)("h5",null,[(0,s.Wm)("strong",n,(0,a.zw)(t.store.state.reward.value),1)])]),(0,s.Wm)(v,{total:5,step:1})])),_:1},8,["done","header-nav"])])),_:1},8,["modelValue"])],32)])),_:1})}const d={class:"full-width text-center"},m={class:"fit column wrap  "};function c(t,e,o,i,r,n){const l=(0,s.up)("q-circular-progress");return(0,s.wg)(),(0,s.j4)("div",d,[(0,s.Wm)(l,{onClick:n.tapTimer,"show-value":"",class:"text-white q-ma-sm text-center",max:n.initialTime,value:r.totalTime,size:"300px",thickness:.13,color:n.timerColor,"track-color":"dark"},{default:(0,s.w5)((()=>[(0,s.Wm)("div",m,[r.pauseButton?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)("p",{key:0,class:` text-${n.timerColor}`,style:{"font-size":"15px"}}," Tap to start ",2)),r.pauseButton?((0,s.wg)(),(0,s.j4)("p",{key:1,class:` text-${n.timerColor}`,style:{"font-size":"15px"}}," Tap to pause ",2)):(0,s.kq)("",!0),(0,s.Wm)("span",{class:`row text-${n.timerColor}`},(0,a.zw)(n.minutes)+":"+(0,a.zw)(n.seconds),3)])])),_:1},8,["onClick","max","value","thickness","color"])])}const u={methods:{askNotificationPermission(){"granted"!==Notification.permission&&Notification.requestPermission()},showNotification(t,e,o){const s=new Notification(t,{body:e,icon:o});return s}}},p=u,h={mixins:[p],props:["total","step"],data(){const t=(0,s.f3)("store");return{store:t,timer:null,pauseButton:!1,resetButton:!1,totalTime:60*this.total,timeOptions:[{label:"Pomodoro",value:25},{label:"Short Break",value:5},{label:"Long Break",value:10}]}},computed:{initialTime(){return 60*this.total},minutes(){const t=Math.floor(this.totalTime/60);return this.padTime(t)},seconds(){const t=this.totalTime-60*this.minutes;return this.padTime(t)},timerColor(){const t=this.totalTime/60;return t<=3?"red-6":t<=10?"orange-6":"white"}},watch:{totalTime(){0===this.totalTime&&(this.showNotification("Time is up!","Test",o(1672)),setTimeout((()=>{this.store.state.step=this.step}),500))}},meta(){return{title:this.timer?`(${this.minutes}:${this.seconds}) Pomodoro Timer`:"Pomodoro Timer"}},methods:{startTimer(){this.timer=setInterval((()=>this.countdown()),1e3),this.resetButton=!0,this.pauseButton=!0},pauseTimer(){this.pauseButton=!1,clearInterval(this.timer),this.timer=null,this.resetButton=!0},resetTimer(){this.totalTime=60*this.total,clearInterval(this.timer),this.timer=null,this.resetButton=!1,this.pauseButton=!1},padTime(t){return(t<10?"0":"")+t},countdown(){this.totalTime>=1?this.totalTime--:(this.totalTime=0,this.resetTimer())},tapTimer(){this.pauseButton?this.pauseTimer():this.startTimer()}}};var f=o(8870),w=o(7086),g=o(7518),v=o.n(g);h.render=c;const T=h;v()(h,"components",{QOptionGroup:f.Z,QCircularProgress:w.Z});o(71);function k(t,e,o,a,i,r){const n=(0,s.up)("Wheel",!0);return(0,s.wg)(),(0,s.j4)("div",{class:"wrap",onClick:e[1]||(e[1]=(...e)=>t.$refs.wheel.spin&&t.$refs.wheel.spin(...e))},[(0,s.Wm)(n,{ref:"wheel",gift:t.gift,data:t.data,onDone:t.done,imgParams:t.logo,style:{height:"%50","font-size":"65px"}},null,8,["gift","data","onDone","imgParams"])])}var b=o(6916);const x=(0,s.aZ)({name:"App",components:{Wheel:b.A},setup(){const t=(0,s.f3)("store");return{store:t,gift:Math.floor(6*Math.random())+1,data:[{id:1,value:"Social media",bgColor:"#4267B2",color:"#ffffff"},{id:2,value:"Drink(Tea coffe etc)",bgColor:"#ffffff",color:"#000000"},{id:3,value:"short game(mobile/pc)",bgColor:"#c92729",color:"#ffffff"},{id:4,value:"Short YouTube video",bgColor:"#7d7db3",color:"#ffffff"},{id:5,value:"Meditate",bgColor:"#ffffff",color:"#000000"},{id:6,value:"Favorite music",bgColor:"#c92729",color:"#ffffff"}],logo:{src:"https://media3.giphy.com/media/XfGxvPXC4SYUvw5iAh/giphy.gif?cid=790b7611c73c7280332db7e8915af68b0bace9b780452c15&rid=giphy.gif&ct=g",width:120,height:120}}},methods:{done(t){this.store.state.reward=t,setTimeout((()=>{this.store.state.step=4}),1200)}}});x.render=k;const W=x;var q=o(8880);const C={class:"q-pa-sm row items-start flex flex-center text-white "};function y(t,e,o,a,i,r){const n=(0,s.up)("q-icon"),l=(0,s.up)("q-input"),d=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)("div",C,[(0,s.Wm)(d,{flat:"",class:"bg-red-3   ",style:{width:"90%"}},{default:(0,s.w5)((()=>[a.store.state.todos.length<1?((0,s.wg)(),(0,s.j4)(l,{key:0,rounded:"",standout:"","bottom-slots":"",onKeyup:e[2]||(e[2]=(0,q.D2)((t=>a.store.methods.addTask(a.store.state.text)),["enter"])),modelValue:a.store.state.text,"onUpdate:modelValue":e[3]||(e[3]=t=>a.store.state.text=t),label:"Add task",style:{width:"100%"},class:"q-pt-sm top "},{prepend:(0,s.w5)((()=>[(0,s.Wm)(n,{name:"task"})])),append:(0,s.w5)((()=>[(0,s.Wm)(n,{name:"add",onClick:e[1]||(e[1]=t=>a.store.methods.addTask(a.store.state.text)),class:"cursor-pointer"})])),_:1},8,["modelValue"])):(0,s.kq)("",!0)])),_:1})])}const _={name:"Todo",setup(){const t=(0,s.f3)("store");return{store:t}}};var Z=o(151),B=o(8908),Q=o(4554);_.render=y;const P=_;v()(_,"components",{QCard:Z.Z,QInput:B.Z,QIcon:Q.Z});const j=(0,s.aZ)({name:"PageIndex",components:{Timer:T,Wheel:W,Todo:P},setup(){const t=(0,s.f3)("store");return{store:t}}});var I=o(4379),z=o(7011),S=o(3414),$=o(2035),D=o(5735),N=o(2350),V=o(3518),A=o(4340),M=o(6489);j.render=l;const U=j;v()(j,"components",{QPage:I.Z,QList:z.Z,QItem:S.Z,QItemSection:$.Z,QCheckbox:D.Z,QItemLabel:N.Z,QStepper:V.Z,QStep:A.Z}),v()(j,"directives",{Ripple:M.Z})},1672:(t,e,o)=>{t.exports=o.p+"img/button.c7d10089.png"}}]);