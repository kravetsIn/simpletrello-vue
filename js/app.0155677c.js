(function(t){function e(e){for(var r,s,u=e[0],i=e[1],c=e[2],f=0,d=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/simpletrello-vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0322":function(t,e,n){},"034f":function(t,e,n){"use strict";n("64a9")},1191:function(t,e,n){"use strict";n("0322")},"133a":function(t,e,n){"use strict";n("d39d")},"158c":function(t,e,n){"use strict";n("5410")},5410:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("ecee"),o=n("c074"),s=n("ad3d");a["c"].add(o["a"]),r["a"].component("AppIcon",s["a"]);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("034f"),n("2877")),l={},f=Object(c["a"])(l,u,i,!1,null,null,null),d=f.exports,m=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[n("div",{staticClass:"flex flex-row items-start"},[t._l(t.board.columns,(function(e,r){return n("BoardColumn",{key:r,attrs:{column:e,columnIndex:r,board:t.board}})})),n("div",{staticClass:"column flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newColumnName,expression:"newColumnName"}],staticClass:"p-2 flex-grow",attrs:{type:"text",placeholder:"New Column Name"},domProps:{value:t.newColumnName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createColumn(e)},input:function(e){e.target.composing||(t.newColumnName=e.target.value)}}})])],2),t.isTaskOpen?n("div",{staticClass:"task-bg",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("router-view")],1):t._e()])},b=[],v=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),k=n("2f62"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column",attrs:{draggable:"true"},on:{drop:function(e){return t.moveTaskOrColumn(e,t.column.tasks,t.columnIndex)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()},dragstart:function(e){return e.target!==e.currentTarget?null:t.pickupColumn(e,t.columnIndex)}}},[n("div",{staticClass:"flex items-center mb-2 font-bold"},[t._v(t._s(t.column.name))]),n("div",{staticClass:"list-reset"},[t._l(t.column.tasks,(function(e,r){return n("BoardColumnTask",{key:r,attrs:{task:e,taskIndex:r,column:t.column,columnIndex:t.columnIndex,board:t.board}})})),n("input",{staticClass:"block p-2 w-full bg-transparent",attrs:{type:"text",placeholder:"+ Enter new tasks"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTask(e,t.column.tasks)}}})],2)])},g=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task cursor-pointer",attrs:{draggable:"true"},on:{dragstart:function(e){return t.pickupTask(e,t.taskIndex,t.columnIndex)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()},drop:function(e){return e.stopPropagation(),t.moveTaskOrColumn(e,t.column.tasks,t.columnIndex,t.taskIndex)},click:function(e){return t.goToTask(t.task.id)}}},[n("span",{staticClass:"w-full flex-no-shrink font-bold"},[t._v(t._s(t.task.name))]),t.task.description?n("p",{staticClass:"w-full flex-no-shrink mt-1 text-sm"},[t._v(t._s(t.task.description))]):t._e()])},O=[],x=(n("c5f6"),{props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},board:{type:Object,required:!0}},methods:{moveTaskOrColumn:function(t,e,n,r){var a=t.dataTransfer.getData("type");"task"===a&&this.moveTask(t,e,"undefined"!==r?r:e.length),"column"===a&&this.moveColumn(t,n)},moveColumn:function(t,e){var n=t.dataTransfer.getData("from-column-index");this.$store.commit("MOVE_COLUMN",{fromColumnIndex:n,toColumnIndex:e})},moveTask:function(t,e,n){var r=t.dataTransfer.getData("from-column-index"),a=this.board.columns[r].tasks,o=t.dataTransfer.getData("from-task-index");this.$store.commit("MOVE_TASK",{fromTasks:a,fromTaskIndex:o,toTasks:e,toTaskIndex:n})}}}),T={name:"BoardColumnTask",mixins:[x],props:{task:{type:Object,required:!0},taskIndex:{type:Number,required:!0}},methods:{pickupTask:function(t,e,n){t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move",t.dataTransfer.setData("from-task-index",e),t.dataTransfer.setData("from-column-index",n),t.dataTransfer.setData("type","task")},goToTask:function(t){this.$router.push({name:"task",params:{id:t}})}}},w=T,C=(n("1191"),Object(c["a"])(w,h,O,!1,null,"79c0e258",null)),j=C.exports,_={name:"BoardColumn",components:{BoardColumnTask:j},mixins:[x],methods:{pickupColumn:function(t,e){t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move",t.dataTransfer.setData("from-column-index",e),t.dataTransfer.setData("type","column")},createTask:function(t,e){this.$store.commit("CREATE_TASK",{tasks:e,name:t.target.value}),t.target.value=""}}},P=_,E=(n("133a"),Object(c["a"])(P,y,g,!1,null,"2e99618e",null)),S=E.exports;function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var D={components:{BoardColumn:S},data:function(){return{newColumnName:""}},computed:I(I({},Object(k["c"])(["board"])),{},{isTaskOpen:function(){return"task"===this.$route.name}}),methods:{close:function(){this.$router.push({name:"board"})},createColumn:function(){this.$store.commit("CREATE_COLUMN",{name:this.newColumnName}),this.newColumnName=""}}},N=D,$=(n("158c"),Object(c["a"])(N,p,b,!1,null,null,null)),M=$.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.task?n("div",{staticClass:"task-view"},[n("div",{staticClass:"flex flex-col flex-grow items-start justify-between px-4"},[n("input",{staticClass:"p-2 w-full mr-2 flex-grow text-xl font-bold",attrs:{type:"text"},domProps:{value:t.task.name},on:{change:function(e){return t.updateTaskProperty(e,"name")}}}),n("textarea",{staticClass:"relative bg-transparent px-2 border mt-2 h-64 w-full border-none leading-normal",domProps:{value:t.task.description},on:{change:function(e){return t.updateTaskProperty(e,"description")}}})])]):t._e()},U=[];function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var L={name:"Task",computed:K(K({},Object(k["b"])(["getTask"])),{},{task:function(){return this.getTask(this.$route.params.id)}}),methods:{updateTaskProperty:function(t,e){this.$store.commit("UPDATE_TASK",{task:this.task,key:e,value:t.target.value})}}},J=L,R=(n("b39f"),Object(c["a"])(J,q,U,!1,null,null,null)),V=R.exports;r["a"].use(m["a"]);var z=new m["a"]({mode:"history",base:"/simpletrello-vue/",routes:[{path:"/",name:"board",component:M,children:[{path:"task/:id",name:"task",component:V}]}]});n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54");function F(){return Math.random().toString(16).slice(2)}function G(t){t.subscribe((function(t,e){return localStorage.setItem("board",JSON.stringify(e.board))}))}var H={name:"workshop",columns:[{name:"todo",tasks:[{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",name:"first task",id:F(),userAssigned:null},{description:"",name:"second task",id:F(),userAssigned:null},{description:"",name:"and thrid",id:F(),userAssigned:null}]},{name:"in-progress",tasks:[{description:"",name:"first task",id:F(),userAssigned:null}]},{name:"done",tasks:[{description:"",name:"first task",id:F(),userAssigned:null}]}]};function Q(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=W(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){u=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw o}}}}function W(t,e){if(t){if("string"===typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}r["a"].use(k["a"]);var Y=JSON.parse(localStorage.getItem("board"))||H,Z=new k["a"].Store({plugins:[G],state:{board:Y},mutations:{CREATE_COLUMN:function(t,e){var n=e.name;t.board.columns.push({name:n,tasks:[]})},CREATE_TASK:function(t,e){var n=e.tasks,r=e.name;n.push({name:r,id:F(),description:""})},UPDATE_TASK:function(t,e){var n=e.task,r=e.key,a=e.value;n[r]=a},MOVE_TASK:function(t,e){var n=e.fromTasks,r=e.toTasks,a=e.fromTaskIndex,o=e.toTaskIndex,s=n.splice(a,1)[0];r.splice(o,0,s)},MOVE_COLUMN:function(t,e){var n=e.fromColumnIndex,r=e.toColumnIndex,a=t.board.columns,o=a.splice(n,1)[0];a.splice(r,0,o)}},getters:{getTask:function(t){return function(e){var n,r=Q(t.board.columns);try{for(r.s();!(n=r.n()).done;){var a,o=n.value,s=Q(o.tasks);try{for(s.s();!(a=s.n()).done;){var u=a.value;if(u.id===e)return u}}catch(i){s.e(i)}finally{s.f()}}}catch(i){r.e(i)}finally{r.f()}}}}}),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",class:t.typeClasses,attrs:{type:"button"}},[t._t("default")],2)},et=[],nt={props:{type:{type:String}},computed:{typeClasses:function(){switch(this.type){case"danger":return"bg-red";default:return"bg-teal"}}}},rt=nt,at=(n("b9b4"),Object(c["a"])(rt,tt,et,!1,null,"460433cb",null)),ot=at.exports;r["a"].component("AppButton",ot),r["a"].config.productionTip=!1,new r["a"]({router:z,store:Z,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,n){},"6eff":function(t,e,n){},aedd:function(t,e,n){},b39f:function(t,e,n){"use strict";n("aedd")},b9b4:function(t,e,n){"use strict";n("6eff")},d39d:function(t,e,n){}});
//# sourceMappingURL=app.0155677c.js.map