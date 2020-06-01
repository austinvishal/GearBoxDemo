var __awaiter=this&&this.__awaiter||function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function a(e){try{c(n.next(e))}catch(t){i(t)}}function s(e){try{c(n["throw"](e))}catch(t){i(t)}}function c(e){e.done?r(e.value):o(e.value).then(a,s)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(s){a=[6,s];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-6ab71ff6.system.js"],(function(e){"use strict";var t,r,n;return{setters:[function(e){t=e.r;r=e.c;n=e.h}],execute:function(){var o="@import url('https://unpkg.com/tachyons@4/css/tachyons.min.css');.ZeaProjectsBrowser{background-color:var(--color-background-1);color:var(--color-foreground-1);font-family:var(--theme-font-family)}.ZeaProjectsBrowser__title-bar{display:-ms-flexbox;display:flex;height:64px;-ms-flex-align:center;align-items:center;padding:0 1rem;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:justify;justify-content:space-between}.ZeaProjectsBrowser__projects{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.ZeaProjectsBrowser__projects>*{margin:1rem 0 0 1rem}";var i=e("zea_projects_browser",function(){function e(e){t(this,e);this.projects=[];this.dblClickProject=r(this,"dblClickProject",7)}e.prototype.render=function(){var e=this;return n("div",{class:"ZeaProjectsBrowser"},n("div",{class:"ZeaProjectsBrowser__title-bar"},n("span",null,"Projects"),n("ion-button",{shape:"round",onClick:function(){e.showCreateProjectDialog=true}},n("ion-icon",{slot:"start",name:"add"}),"new")),this.projects.length?n("div",{class:"ZeaProjectsBrowser__projects"},this.projects.map((function(t){return n("zea-thumbnail",{icon:n("ion-icon",{name:"folder"}),zeaModelInstance:t,onDblClickThumbnail:function(t){return e.dblClickProject.emit(t.detail)}})}))):n("div",null,"No projects."),this.showCreateProjectDialog&&n("zea-dialog",{shown:true},n("div",{slot:"title"},"New Project"),n("div",{slot:"body"},n("zea-form",{submitText:"CREATE",submitCallback:function(t){return __awaiter(e,void 0,void 0,(function(){var e,r;return __generator(this,(function(n){switch(n.label){case 0:e=t["project-name"];return[4,this.projectsClient.create({name:e,thumbnail:"https://placeimg.com/216/122/tech"})];case 1:r=n.sent();console.log(r);return[2]}}))}))}},n("zea-input",{label:"Project name",name:"project-name",required:true})))))};return e}());i.style=o}}}));