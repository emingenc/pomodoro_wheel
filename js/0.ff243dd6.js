(self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[]).push([[0],{2214:(t,e,s)=>{"use strict";s.d(e,{Z:()=>W});var o=s(3673),a=s(8880),r=s(2323);const i={class:"row items-center"},l=(0,o.Uk)(" Done "),n={class:"row items-center"},c=(0,o.Uk)(" Delete "),m=(0,o.Wm)("p",{class:"text-center",style:{"font-size":"10px",opacity:"50%"}},[(0,o.Uk)("swipe "),(0,o.Wm)("br"),(0,o.Uk)(" right done - left delete")],-1);function d(t,e,s,d,u,p){const h=(0,o.up)("q-icon"),f=(0,o.up)("q-input"),g=(0,o.up)("q-card"),w=(0,o.up)("q-item-section"),x=(0,o.up)("q-item"),v=(0,o.up)("q-slide-item"),k=(0,o.up)("q-list");return(0,o.wg)(),(0,o.j4)("div",{class:" q-pa-lg text-white bg-"+d.store.state.primary},[(0,o.Wm)(g,{flat:"",class:"bg-"+d.store.state.primary},{default:(0,o.w5)((()=>[d.store.state.todos.length<d.store.state.todoLimit?((0,o.wg)(),(0,o.j4)(f,{key:0,rounded:"",standout:"","bottom-slots":"",onKeyup:e[2]||(e[2]=(0,a.D2)((t=>d.store.methods.addTask(d.store.state.text)),["enter"])),modelValue:d.store.state.text,"onUpdate:modelValue":e[3]||(e[3]=t=>d.store.state.text=t),label:"Add task",style:{width:"100%"},class:"q-pt-sm top "},{prepend:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"task"})])),append:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"add",onClick:e[1]||(e[1]=t=>d.store.methods.addTask(d.store.state.text)),class:"cursor-pointer"})])),_:1},8,["modelValue"])):(0,o.kq)("",!0)])),_:1},8,["class"]),(0,o.Wm)(k,{class:" bg-"+d.store.state.primary},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(d.store.state.todos,(t=>((0,o.wg)(),(0,o.j4)(v,{onLeft:e=>d.store.methods.deleteTask(t),class:"q-ma-md  text-center text-white bg-"+d.store.state.secondary,style:"height:50px ;",onRight:e=>d.store.methods.deleteTask(t),"left-color":"green","right-color":"red",key:t},{left:(0,o.w5)((()=>[(0,o.Wm)("div",i,[(0,o.Wm)(h,{left:"",name:"done"}),l])])),right:(0,o.w5)((()=>[(0,o.Wm)("div",n,[c,(0,o.Wm)(h,{right:"",name:"delete"})])])),default:(0,o.w5)((()=>[(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"primary",name:"done"})])),_:1}),(0,o.Wm)(w,{class:"text-center text-white bg-"+d.store.state.secondary},{default:(0,o.w5)((()=>[(0,o.Wm)("strong",null,(0,r.zw)(t),1)])),_:2},1032,["class"]),(0,o.Wm)(w,{avatar:""},{default:(0,o.w5)((()=>[m])),_:1})])),_:2},1024)])),_:2},1032,["onLeft","class","onRight"])))),128))])),_:1},8,["class"])],2)}const u={name:"Todo",setup(){const t=(0,o.f3)("store");return{store:t}}};var p=s(151),h=s(8908),f=s(4554),g=s(7011),w=s(8951),x=s(3414),v=s(2035),k=s(7518),T=s.n(k);u.render=d;const W=u;T()(u,"components",{QCard:p.Z,QInput:h.Z,QIcon:f.Z,QList:g.Z,QSlideItem:w.Z,QItem:x.Z,QItemSection:v.Z})},8642:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>B});s(7280),s(5363);var o=s(3673),a=s(2323);const r={class:"text-center text-red-10  q-gutter-xs"},i={style:{width:"%100"}};function l(t,e,s,l,n,c){const m=(0,o.up)("Todo"),d=(0,o.up)("q-btn"),u=(0,o.up)("q-step"),p=(0,o.up)("Timer"),h=(0,o.up)("Wheel"),f=(0,o.up)("q-stepper"),g=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(g,{class:"bg-"+t.store.state.primary},{default:(0,o.w5)((()=>[(0,o.Wm)("div",{onDblclick:e[4]||(e[4]=t=>this.store.state.step++),class:this.$q.screen.xs?"fit q-pa-lg":"q-pa-xl",style:this.$q.screen.xs?"":"margin-right: auto; margin-left: auto;  width:61.8%"},[(0,o.Wm)(f,{modelValue:t.getStep,"onUpdate:modelValue":e[3]||(e[3]=e=>t.getStep=e),vertical:"","inactive-color":t.store.state.secondary.replace("8","5"),"active-color":t.store.state.secondary,class:"bg-"+t.store.state.primary},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{name:1,title:"Decide on the Task to be done",prefix:"1","header-nav":t.store.state.step>1},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{style:{height:"400px"}}),(0,o.Wm)(d,{color:t.store.state.secondary,label:"Next",flat:"",onClick:e[1]||(e[1]=e=>t.store.state.step++)},null,8,["color"])])),_:1},8,["header-nav"]),(0,o.Wm)(u,{name:2,title:`Focus for ${t.store.state.focus} minutes`,prefix:"2","header-nav":t.store.state.step>2},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"flex flex-center",style:{height:"500px"},total:t.store.state.focus},null,8,["total"])])),_:1},8,["title","header-nav"]),(0,o.Wm)(u,{name:3,title:"Take a short break, reward yourself",prefix:"3","header-nav":t.store.state.step>3},{default:(0,o.w5)((()=>[(0,o.Wm)(h)])),_:1},8,["header-nav"]),(0,o.Wm)(u,{name:4,title:`Rest ${t.store.state.isLong?t.store.state.long:t.store.state.short}  minutes`,caption:"",prefix:"4","header-nav":t.store.state.step>4,class:" q-gutter-md "},{default:(0,o.w5)((()=>[(0,o.Wm)("div",r,[(0,o.Wm)("h5",null,[(0,o.Wm)("strong",i,(0,a.zw)(t.store.state.reward.value),1)]),(0,o.Wm)(d,{flat:"",dense:"",rounded:"",color:t.store.state.secondary,class:"q-pa-md",label:"long - short",onClick:e[2]||(e[2]=e=>t.store.state.isLong=!t.store.state.isLong)},null,8,["color"])]),t.store.state.isLong?((0,o.wg)(),(0,o.j4)(p,{key:0,class:"flex flex-center",total:t.store.state.long,style:{height:"500px"}},null,8,["total"])):(0,o.kq)("",!0),t.store.state.isLong?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(p,{key:1,class:"flex flex-center",total:t.store.state.short,style:{height:"500px"}},null,8,["total"]))])),_:1},8,["title","header-nav"])])),_:1},8,["modelValue","inactive-color","active-color","class"])],38)])),_:1},8,["class"])}const n={class:"full-width text-center"},c={class:"fit column wrap  "};function m(t,e,s,r,i,l){const m=(0,o.up)("q-circular-progress");return(0,o.wg)(),(0,o.j4)("div",n,[(0,o.Wm)(m,{onClick:l.tapTimer,"show-value":"",class:"text-white q-ma-sm text-center",max:l.initialTime,value:i.totalTime,size:this.$q.screen.xs?"221px":"350px",thickness:.07,color:l.timerColor,"track-color":"dark"},{default:(0,o.w5)((()=>[(0,o.Wm)("div",c,[i.pauseButton?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)("p",{key:0,class:` text-${l.timerColor}`,style:{"font-size":"15px"}}," Tap to start ",2)),i.pauseButton?((0,o.wg)(),(0,o.j4)("p",{key:1,class:` text-${l.timerColor}`,style:{"font-size":"15px"}}," Tap to pause ",2)):(0,o.kq)("",!0),(0,o.Wm)("span",{class:`row text-${l.timerColor}`},(0,a.zw)(l.minutes)+":"+(0,a.zw)(l.seconds),3)])])),_:1},8,["onClick","max","value","size","thickness","color"])])}const d={methods:{askNotificationPermission(){"granted"!==Notification.permission&&Notification.requestPermission()},showNotification(t,e,s){const o=new Notification(t,{body:e,icon:s});return o}}},u=d,p={mixins:[u],props:["total"],data(){const t=(0,o.f3)("store");return{store:t,timer:null,pauseButton:!1,resetButton:!1,totalTime:60*this.total,timeOptions:[{label:"Pomodoro",value:25},{label:"Short Break",value:5},{label:"Long Break",value:10}]}},computed:{initialTime(){return 60*this.total},minutes(){const t=Math.floor(this.totalTime/60);return this.padTime(t)},seconds(){const t=this.totalTime-60*this.minutes;return this.padTime(t)},timerColor(){const t=this.totalTime/60;return t<=3?"red-8":t<=10?"red-6":"white"}},watch:{totalTime(){0===this.totalTime&&(this.showNotification("Time is up!","Test",s(1672)),setTimeout((()=>{this.store.state.step++}),500))}},meta(){return{title:this.timer?`(${this.minutes}:${this.seconds}) Pomodoro Timer`:"Pomodoro Timer"}},methods:{startTimer(){this.timer=setInterval((()=>this.countdown()),1e3),this.resetButton=!0,this.pauseButton=!0},pauseTimer(){this.pauseButton=!1,clearInterval(this.timer),this.timer=null,this.resetButton=!0},resetTimer(){this.totalTime=60*this.total,clearInterval(this.timer),this.timer=null,this.resetButton=!1,this.pauseButton=!1},padTime(t){return(t<10?"0":"")+t},countdown(){this.totalTime>=1?this.totalTime--:(this.totalTime=0,this.resetTimer())},tapTimer(){this.pauseButton?this.pauseTimer():this.startTimer()}}};var h=s(4140),f=s(6122),g=s(7518),w=s.n(g);p.render=m;const x=p;w()(p,"components",{QOptionGroup:h.Z,QCircularProgress:f.Z});s(71);function v(t,e,s,a,r,i){const l=(0,o.up)("Wheel",!0);return(0,o.wg)(),(0,o.j4)("div",{class:"wrap",onClick:e[1]||(e[1]=(...e)=>t.$refs.wheel.spin&&t.$refs.wheel.spin(...e))},[(0,o.Wm)(l,{ref:"wheel",gift:t.gift,data:t.data,onDone:t.done,imgParams:t.logo,class:"fitthis.store.state.reward1",style:{height:"%40","font-size":"65px"}},null,8,["gift","data","onDone","imgParams"])])}var k=s(6916);const T=(0,o.aZ)({name:"App",components:{Wheel:k.A},setup(){const t=(0,o.f3)("store");return{store:t,gift:Math.floor(6*Math.random())+1,data:[{id:1,value:t.state.reward1,bgColor:"#4267B2",color:"#ffffff"},{id:2,value:t.state.reward2,bgColor:"#ffffff",color:"#000000"},{id:3,value:t.state.reward3,bgColor:"#c92729",color:"#ffffff"},{id:4,value:t.state.reward4,bgColor:"#7d7db3",color:"#ffffff"},{id:5,value:t.state.reward5,bgColor:"#ffffff",color:"#000000"},{id:6,value:t.state.reward6,bgColor:"#c92729",color:"#ffffff"}],logo:{src:"https://media3.giphy.com/media/XfGxvPXC4SYUvw5iAh/giphy.gif?cid=790b7611c73c7280332db7e8915af68b0bace9b780452c15&rid=giphy.gif&ct=g",width:100,height:100}}},methods:{done(t){this.store.state.reward=t,this.store.state.step++}}});T.render=v;const W=T;var y=s(2214);const b=(0,o.aZ)({name:"PageIndex",components:{Timer:x,Wheel:W,Todo:y.Z},setup(){const t=(0,o.f3)("store");return{store:t}},computed:{getStep(){return this.store.state.step%4+1}}});var q=s(4379),C=s(3518),Z=s(4340),_=s(4607);b.render=l;const B=b;w()(b,"components",{QPage:q.Z,QStepper:C.Z,QStep:Z.Z,QBtn:_.Z})},1672:(t,e,s)=>{t.exports=s.p+"img/button.c7d10089.png"}}]);