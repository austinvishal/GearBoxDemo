import{r as t,c as i,h as e,d as s}from"./p-da09bae5.js";import{g as o,c as r}from"./p-382b6e3d.js";import{b as n}from"./p-54ff9b40.js";import{g as a}from"./p-177ede88.js";import{a as h}from"./p-718ae824.js";import{l as c,t as d,s as u,L as l,a as v,b as m}from"./p-9bbc1b7d.js";class f{constructor(t,i){this.component=t,this.params=i,this.state=1}async init(t){if(this.state=2,!this.element){const i=this.component;this.element=await h(this.delegate,t,i,["ion-page","ion-page-invisible"],this.params)}}_destroy(){n(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const p=(t,i,e)=>{if(!t)return!1;if(t.component!==i)return!1;const s=t.params;if(s===e)return!0;if(!s&&!e)return!0;if(!s||!e)return!1;const o=Object.keys(s),r=Object.keys(e);if(o.length!==r.length)return!1;for(const n of o)if(s[n]!==e[n])return!1;return!0},w=(t,i)=>t?t instanceof f?t:new f(t,i):null,b=class{constructor(e){t(this,e),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=i(this,"ionNavWillLoad",7),this.ionNavWillChange=i(this,"ionNavWillChange",3),this.ionNavDidChange=i(this,"ionNavDidChange",3)}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const t=o(this);this.swipeGesture=r.getBoolean("swipeBackEnabled","ios"===t)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await __sc_import_zeainc_zea_web_components("./p-e827e3d5.js")).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}componentDidUnload(){for(const t of this.views)c(t.element,l),t._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(t,i,e,s){return this.queueTrns({insertStart:-1,insertViews:[{page:t,params:i}],opts:e},s)}insert(t,i,e,s,o){return this.queueTrns({insertStart:t,insertViews:[{page:i,params:e}],opts:s},o)}insertPages(t,i,e,s){return this.queueTrns({insertStart:t,insertViews:i,opts:e},s)}pop(t,i){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},i)}popTo(t,i,e){const s={removeStart:-1,removeCount:-1,opts:i};return"object"==typeof t&&t.component?(s.removeView=t,s.removeStart=1):"number"==typeof t&&(s.removeStart=t+1),this.queueTrns(s,e)}popToRoot(t,i){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},i)}removeIndex(t,i=1,e,s){return this.queueTrns({removeStart:t,removeCount:i,opts:e},s)}setRoot(t,i,e,s){return this.setPages([{page:t,params:i}],e,s)}setPages(t,i,e){return null==i&&(i={}),!0!==i.animated&&(i.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:i},e)}setRouteId(t,i,e){const s=this.getActiveSync();if(p(s,t,i))return Promise.resolve({changed:!1,element:s.element});let o;const r=new Promise(t=>o=t);let n;const a={updateURL:!1,viewIsReady:t=>{let i;const e=new Promise(t=>i=t);return o({changed:!0,element:t,markVisible:async()=>{i(),await n}}),e}};if("root"===e)n=this.setRoot(t,i,a);else{const s=this.views.find(e=>p(e,t,i));s?n=this.popTo(s,Object.assign(Object.assign({},a),{direction:"back"})):"forward"===e?n=this.push(t,i,a):"back"===e&&(n=this.setRoot(t,i,Object.assign(Object.assign({},a),{direction:"back",animated:!0})))}return r}async getRouteId(){const t=this.getActiveSync();return t?{id:t.element.tagName,params:t.params,element:t.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(t){return Promise.resolve(this.views[t])}canGoBack(t){return Promise.resolve(this.canGoBackSync(t))}getPrevious(t){return Promise.resolve(this.getPreviousSync(t))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!(!t||!this.getPreviousSync(t))}getPreviousSync(t=this.getActiveSync()){if(!t)return;const i=this.views,e=i.indexOf(t);return e>0?i[e-1]:void 0}queueTrns(t,i){if(this.isTransitioning&&null!=t.opts&&t.opts.skipIfBusy)return Promise.resolve(!1);const e=new Promise((i,e)=>{t.resolve=i,t.reject=e});return t.done=i,t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),e}success(t,i){if(this.destroyed)this.fireError("nav controller was destroyed",i);else if(i.done&&i.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),i.resolve(t.hasCompleted),!1!==i.opts.updateURL&&this.useRouter){const i=document.querySelector("ion-router");i&&i.navChanged("back"===t.direction?"back":"forward")}}failed(t,i){this.destroyed?this.fireError("nav controller was destroyed",i):(this.transInstr.length=0,this.fireError(t,i))}fireError(t,i){i.done&&i.done(!1,!1,t),i.reject&&!this.destroyed?i.reject(t):i.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const i=this.getActiveSync(),e=this.getEnteringView(t,i);if(!i&&!e)throw new Error("no views in the stack to be removed");e&&1===e.state&&await e.init(this.el),this.postViewInit(e,i,t);const s=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&e!==i?await this.transition(e,i,t):{hasCompleted:!0,requiresTransition:!1};this.success(s,t),this.ionNavDidChange.emit()}catch(i){this.failed(i,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){const i=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),void 0!==t.removeView){n(void 0!==t.removeStart,"removeView needs removeStart"),n(void 0!==t.removeCount,"removeView needs removeCount");const i=this.views.indexOf(t.removeView);if(i<0)throw new Error("removeView was not found");t.removeStart+=i}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=i-1),t.removeCount<0&&(t.removeCount=i-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===i),t.insertViews&&((t.insertStart<0||t.insertStart>i)&&(t.insertStart=i),t.enteringRequiresTransition=t.insertStart===i);const e=t.insertViews;if(!e)return;n(e.length>0,"length can not be zero");const s=e.map(t=>t instanceof f?t:"page"in t?w(t.page,t.params):w(t,void 0)).filter(t=>null!==t);if(0===s.length)throw new Error("invalid views to insert");for(const o of s){o.delegate=t.opts.delegate;const i=o.nav;if(i&&i!==this)throw new Error("inserted view was already inserted");if(3===o.state)throw new Error("inserted view was already destroyed")}t.insertViews=s}getEnteringView(t,i){const e=t.insertViews;if(void 0!==e)return e[e.length-1];const s=t.removeStart;if(void 0!==s){const e=this.views,o=s+t.removeCount;for(let t=e.length-1;t>=0;t--){const r=e[t];if((t<s||t>=o)&&r!==i)return r}}}postViewInit(t,i,e){n(i||t,"Both leavingView and enteringView are null"),n(e.resolve,"resolve must be valid"),n(e.reject,"reject must be valid");const s=e.opts,o=e.insertViews,r=e.removeStart,a=e.removeCount;let h;if(void 0!==r&&void 0!==a){n(r>=0,"removeStart can not be negative"),n(a>=0,"removeCount can not be negative"),h=[];for(let e=0;e<a;e++){const s=this.views[e+r];s&&s!==t&&s!==i&&h.push(s)}s.direction=s.direction||"back"}const d=this.views.length+(void 0!==o?o.length:0)-(void 0!==a?a:0);if(n(d>=0,"final balance can not be negative"),0===d)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){let t=e.insertStart;for(const i of o)this.insertViewAt(i,t),t++;e.enteringRequiresTransition&&(s.direction=s.direction||"forward")}if(h&&h.length>0){for(const t of h)c(t.element,v),c(t.element,m),c(t.element,l);for(const t of h)this.destroyView(t)}}async transition(t,i,e){const s=e.opts,n=s.progressAnimation?t=>this.sbAni=t:void 0,a=o(this),h=t.element,c=i&&i.element,u=Object.assign({mode:a,showGoBack:this.canGoBackSync(t),baseEl:this.el,animationBuilder:this.animation||s.animationBuilder||r.get("navAnimation"),progressCallback:n,animated:this.animated&&r.getBoolean("animated",!0),enteringEl:h,leavingEl:c},s),{hasCompleted:l}=await d(u);return this.transitionFinish(l,t,i,s)}transitionFinish(t,i,e,s){const o=t?i:e;return o&&this.cleanup(o),{hasCompleted:t,requiresTransition:!0,enteringView:i,leavingView:e,direction:s.direction}}insertViewAt(t,i){const e=this.views,s=e.indexOf(t);s>-1?(n(t.nav===this,"view is not part of the nav"),e.splice(i,0,e.splice(s,1)[0])):(n(!t.nav,"nav is used"),t.nav=this,e.splice(i,0,t))}removeView(t){n(2===t.state||3===t.state,"view state should be loaded or destroyed");const i=this.views,e=i.indexOf(t);n(e>-1,"view must be part of the stack"),e>=0&&i.splice(e,1)}destroyView(t){t._destroy(),this.removeView(t)}cleanup(t){if(this.destroyed)return;const i=this.views,e=i.indexOf(t);for(let s=i.length-1;s>=0;s--){const t=i[s],o=t.element;s>e?(c(o,l),this.destroyView(t)):s<e&&u(o,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(t){this.sbAni&&this.sbAni.progressStep(t)}onEnd(t,i,e){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let s=t?-.001:.001;t?s+=a([0,0],[.32,.72],[0,1],[1,1],i)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=a([0,0],[1,0],[.68,.28],[1,1],i)[0]),this.sbAni.progressEnd(t?1:0,s,e)}}render(){return e("slot",null)}get el(){return s(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};b.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";export{b as ion_nav}