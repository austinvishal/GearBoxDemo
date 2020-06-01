var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{u(r.next(e))}catch(t){s(t)}}function a(e){try{u(r["throw"](e))}catch(t){s(t)}}function u(e){e.done?n(e.value):i(e.value).then(o,a)}u((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return u([e,t])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(s=o[0]&2?i["return"]:o[0]?i["throw"]||((s=i["return"])&&s.call(i),0):i.next)&&!(s=s.call(i,o[1])).done)return s;if(i=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){n.label=o[1];break}if(o[0]===6&&n.label<s[1]){n.label=s[1];s=o;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(o);break}if(s[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(a){o=[6,a];i=0}finally{r=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-6ab71ff6.system.js","./p-394b76b8.system.js","./p-43d2bece.system.js","./p-00b3eaa0.system.js","./p-c50dc49a.system.js","./p-8e2a920e.system.js"],(function(e,t){"use strict";var n,r,i,s,o,a,u,f,h,c,l,v,p,d,m;return{setters:[function(e){n=e.r;r=e.c;i=e.h;s=e.d},function(e){o=e.g;a=e.c},function(e){u=e.b},function(e){f=e.g},function(e){h=e.a},function(e){c=e.l;l=e.t;v=e.s;p=e.L;d=e.a;m=e.b}],execute:function(){var g=1;var w=2;var y=3;var b=function(){function e(e,t){this.component=e;this.params=t;this.state=g}e.prototype.init=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){switch(r.label){case 0:this.state=w;if(!!this.element)return[3,2];t=this.component;n=this;return[4,h(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)];case 1:n.element=r.sent();r.label=2;case 2:return[2]}}))}))};e.prototype._destroy=function(){u(this.state!==y,"view state must be ATTACHED");var e=this.element;if(e){if(this.delegate){this.delegate.removeViewFromDom(e.parentElement,e)}else{e.remove()}}this.nav=undefined;this.state=y};return e}();var S=function(e,t,n){if(!e){return false}if(e.component!==t){return false}var r=e.params;if(r===n){return true}if(!r&&!n){return true}if(!r||!n){return false}var i=Object.keys(r);var s=Object.keys(n);if(i.length!==s.length){return false}for(var o=0,a=i;o<a.length;o++){var u=a[o];if(r[u]!==n[u]){return false}}return true};var T=function(e,t){if(!e){return null}if(e instanceof b){return e}return new b(e,t)};var V=function(e){return e.map((function(e){if(e instanceof b){return e}if("page"in e){return T(e.page,e.params)}return T(e,undefined)})).filter((function(e){return e!==null}))};var C=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var _=e("ion_nav",function(){function e(e){n(this,e);this.transInstr=[];this.animationEnabled=true;this.useRouter=false;this.isTransitioning=false;this.destroyed=false;this.views=[];this.animated=true;this.ionNavWillLoad=r(this,"ionNavWillLoad",7);this.ionNavWillChange=r(this,"ionNavWillChange",3);this.ionNavDidChange=r(this,"ionNavDidChange",3)}e.prototype.swipeGestureChanged=function(){if(this.gesture){this.gesture.enable(this.swipeGesture===true)}};e.prototype.rootChanged=function(){if(this.root!==undefined){if(!this.useRouter){this.setRoot(this.root,this.rootParams)}}};e.prototype.componentWillLoad=function(){this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]");if(this.swipeGesture===undefined){var e=o(this);this.swipeGesture=a.getBoolean("swipeBackEnabled",e==="ios")}this.ionNavWillLoad.emit()};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:this.rootChanged();e=this;return[4,t.import("./p-416713f4.system.js")];case 1:e.gesture=n.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this));this.swipeGestureChanged();return[2]}}))}))};e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];c(n.element,p);n._destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.transInstr.length=this.views.length=0;this.destroyed=true};e.prototype.push=function(e,t,n,r){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},r)};e.prototype.insert=function(e,t,n,r,i){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:r},i)};e.prototype.insertPages=function(e,t,n,r){return this.queueTrns({insertStart:e,insertViews:t,opts:n},r)};e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)};e.prototype.popTo=function(e,t,n){var r={removeStart:-1,removeCount:-1,opts:t};if(typeof e==="object"&&e.component){r.removeView=e;r.removeStart=1}else if(typeof e==="number"){r.removeStart=e+1}return this.queueTrns(r,n)};e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)};e.prototype.removeIndex=function(e,t,n,r){if(t===void 0){t=1}return this.queueTrns({removeStart:e,removeCount:t,opts:n},r)};e.prototype.setRoot=function(e,t,n,r){return this.setPages([{page:e,params:t}],n,r)};e.prototype.setPages=function(e,t,n){if(t==null){t={}}if(t.animated!==true){t.animated=false}return this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)};e.prototype.setRouteId=function(e,t,n){var r=this;var i=this.getActiveSync();if(S(i,e,t)){return Promise.resolve({changed:false,element:i.element})}var s;var o=new Promise((function(e){return s=e}));var a;var u={updateURL:false,viewIsReady:function(e){var t;var n=new Promise((function(e){return t=e}));s({changed:true,element:e,markVisible:function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:t();return[4,a];case 1:e.sent();return[2]}}))}))}});return n}};if(n==="root"){a=this.setRoot(e,t,u)}else{var f=this.views.find((function(n){return S(n,e,t)}));if(f){a=this.popTo(f,Object.assign(Object.assign({},u),{direction:"back"}))}else if(n==="forward"){a=this.push(e,t,u)}else if(n==="back"){a=this.setRoot(e,t,Object.assign(Object.assign({},u),{direction:"back",animated:true}))}}return o};e.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=this.getActiveSync();return[2,e?{id:e.element.tagName,params:e.params,element:e.element}:undefined]}))}))};e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())};e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])};e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))};e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))};e.prototype.getLength=function(){return this.views.length};e.prototype.getActiveSync=function(){return this.views[this.views.length-1]};e.prototype.canGoBackSync=function(e){if(e===void 0){e=this.getActiveSync()}return!!(e&&this.getPreviousSync(e))};e.prototype.getPreviousSync=function(e){if(e===void 0){e=this.getActiveSync()}if(!e){return undefined}var t=this.views;var n=t.indexOf(e);return n>0?t[n-1]:undefined};e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&e.opts!=null&&e.opts.skipIfBusy){return Promise.resolve(false)}var n=new Promise((function(t,n){e.resolve=t;e.reject=n}));e.done=t;if(e.insertViews&&e.insertViews.length===0){e.insertViews=undefined}this.transInstr.push(e);this.nextTrns();return n};e.prototype.success=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}if(t.done){t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction)}t.resolve(e.hasCompleted);if(t.opts.updateURL!==false&&this.useRouter){var n=document.querySelector("ion-router");if(n){var r=e.direction==="back"?"back":"forward";n.navChanged(r)}}};e.prototype.failed=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}this.transInstr.length=0;this.fireError(e,t)};e.prototype.fireError=function(e,t){if(t.done){t.done(false,false,e)}if(t.reject&&!this.destroyed){t.reject(e)}else{t.resolve(false)}};e.prototype.nextTrns=function(){if(this.isTransitioning){return false}var e=this.transInstr.shift();if(!e){return false}this.runTransition(e);return true};e.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,r,i,s,o;return __generator(this,(function(a){switch(a.label){case 0:a.trys.push([0,6,,7]);this.ionNavWillChange.emit();this.isTransitioning=true;this.prepareTI(e);t=this.getActiveSync();n=this.getEnteringView(e,t);if(!t&&!n){throw new Error("no views in the stack to be removed")}if(!(n&&n.state===g))return[3,2];return[4,n.init(this.el)];case 1:a.sent();a.label=2;case 2:this.postViewInit(n,t,e);r=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t;if(!r)return[3,4];return[4,this.transition(n,t,e)];case 3:s=a.sent();return[3,5];case 4:s={hasCompleted:true,requiresTransition:false};a.label=5;case 5:i=s;this.success(i,e);this.ionNavDidChange.emit();return[3,7];case 6:o=a.sent();this.failed(o,e);return[3,7];case 7:this.isTransitioning=false;this.nextTrns();return[2]}}))}))};e.prototype.prepareTI=function(e){var t=this.views.length;e.opts=e.opts||{};if(e.opts.delegate===undefined){e.opts.delegate=this.delegate}if(e.removeView!==undefined){u(e.removeStart!==undefined,"removeView needs removeStart");u(e.removeCount!==undefined,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0){throw new Error("removeView was not found")}e.removeStart+=n}if(e.removeStart!==undefined){if(e.removeStart<0){e.removeStart=t-1}if(e.removeCount<0){e.removeCount=t-e.removeStart}e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t}if(e.insertViews){if(e.insertStart<0||e.insertStart>t){e.insertStart=t}e.enteringRequiresTransition=e.insertStart===t}var r=e.insertViews;if(!r){return}u(r.length>0,"length can not be zero");var i=V(r);if(i.length===0){throw new Error("invalid views to insert")}for(var s=0,o=i;s<o.length;s++){var a=o[s];a.delegate=e.opts.delegate;var f=a.nav;if(f&&f!==this){throw new Error("inserted view was already inserted")}if(a.state===y){throw new Error("inserted view was already destroyed")}}e.insertViews=i};e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(n!==undefined){return n[n.length-1]}var r=e.removeStart;if(r!==undefined){var i=this.views;var s=r+e.removeCount;for(var o=i.length-1;o>=0;o--){var a=i[o];if((o<r||o>=s)&&a!==t){return a}}}return undefined};e.prototype.postViewInit=function(e,t,n){u(t||e,"Both leavingView and enteringView are null");u(n.resolve,"resolve must be valid");u(n.reject,"reject must be valid");var r=n.opts;var i=n.insertViews;var s=n.removeStart;var o=n.removeCount;var a;if(s!==undefined&&o!==undefined){u(s>=0,"removeStart can not be negative");u(o>=0,"removeCount can not be negative");a=[];for(var f=0;f<o;f++){var h=this.views[f+s];if(h&&h!==e&&h!==t){a.push(h)}}r.direction=r.direction||"back"}var l=this.views.length+(i!==undefined?i.length:0)-(o!==undefined?o:0);u(l>=0,"final balance can not be negative");if(l===0){console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el);throw new Error("navigation stack needs at least one root page")}if(i){var v=n.insertStart;for(var g=0,w=i;g<w.length;g++){var h=w[g];this.insertViewAt(h,v);v++}if(n.enteringRequiresTransition){r.direction=r.direction||"forward"}}if(a&&a.length>0){for(var y=0,b=a;y<b.length;y++){var h=b[y];c(h.element,d);c(h.element,m);c(h.element,p)}for(var S=0,T=a;S<T.length;S++){var h=T[S];this.destroyView(h)}}};e.prototype.transition=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var r,i,s,u,f,h,c;var v=this;return __generator(this,(function(p){switch(p.label){case 0:r=n.opts;i=r.progressAnimation?function(e){return v.sbAni=e}:undefined;s=o(this);u=e.element;f=t&&t.element;h=Object.assign({mode:s,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||r.animationBuilder||a.get("navAnimation"),progressCallback:i,animated:this.animated&&a.getBoolean("animated",true),enteringEl:u,leavingEl:f},r);return[4,l(h)];case 1:c=p.sent().hasCompleted;return[2,this.transitionFinish(c,e,t,r)]}}))}))};e.prototype.transitionFinish=function(e,t,n,r){var i=e?t:n;if(i){this.cleanup(i)}return{hasCompleted:e,requiresTransition:true,enteringView:t,leavingView:n,direction:r.direction}};e.prototype.insertViewAt=function(e,t){var n=this.views;var r=n.indexOf(e);if(r>-1){u(e.nav===this,"view is not part of the nav");n.splice(t,0,n.splice(r,1)[0])}else{u(!e.nav,"nav is used");e.nav=this;n.splice(t,0,e)}};e.prototype.removeView=function(e){u(e.state===w||e.state===y,"view state should be loaded or destroyed");var t=this.views;var n=t.indexOf(e);u(n>-1,"view must be part of the stack");if(n>=0){t.splice(n,1)}};e.prototype.destroyView=function(e){e._destroy();this.removeView(e)};e.prototype.cleanup=function(e){if(this.destroyed){return}var t=this.views;var n=t.indexOf(e);for(var r=t.length-1;r>=0;r--){var i=t[r];var s=i.element;if(r>n){c(s,p);this.destroyView(i)}else if(r<n){v(s,true)}}};e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&this.transInstr.length===0&&this.animationEnabled&&this.canGoBackSync()};e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:true}},undefined)};e.prototype.onMove=function(e){if(this.sbAni){this.sbAni.progressStep(e)}};e.prototype.onEnd=function(e,t,n){var r=this;if(this.sbAni){this.animationEnabled=false;this.sbAni.onFinish((function(){r.animationEnabled=true}),{oneTimeCallback:true});var i=e?-.001:.001;if(!e){this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");i+=f([0,0],[1,0],[.68,.28],[1,1],t)[0]}else{i+=f([0,0],[.32,.72],[0,1],[1,1],t)[0]}this.sbAni.progressEnd(e?1:0,i,n)}};e.prototype.render=function(){return i("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:true,configurable:true});return e}());_.style=C}}}));