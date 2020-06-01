import{r as t,c as o,w as a,h as s,H as i,d as r}from"./p-da09bae5.js";import{g as e,c as n}from"./p-382b6e3d.js";import"./p-7261e130.js";import{B as d,p as l,a as c,c as h,d as p,e as m}from"./p-a5a3c892.js";import{g as f}from"./p-5b51185b.js";import{c as b}from"./p-54ff9b40.js";import{c as w}from"./p-5254e350.js";import{g as x}from"./p-177ede88.js";import{createGesture as u}from"./p-78321f41.js";import{a as v,d as y}from"./p-718ae824.js";import{d as g}from"./p-9bbc1b7d.js";const k=(t,o)=>{const a=w().addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),s=w().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),i=w().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(s);if(o){const t=window.innerWidth<768,r="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,e=w().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),n=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",a=`translateY(${r?"-10px":t}) scale(0.93)`;e.afterStyles({transform:a}).beforeAddWrite(()=>n.style.setProperty("background-color","black")).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:a,borderRadius:"10px 10px 0 0"}]),i.addAnimation(e)}else if(i.addAnimation(a),r){const t=`translateY(-10px) scale(${r?.93:1})`;e.afterStyles({transform:t}).addElement(o.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:t}]);const a=w().afterStyles({transform:t}).addElement(o.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:t}]);i.addAnimation([e,a])}else s.fromTo("opacity","0","1")}else i.addAnimation(a);return i},D=(t,o,a=500)=>{const s=w().addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i=w().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),r=w().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(i);if(o){const t=window.innerWidth<768,a="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,e=w().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(t=>{1===t&&(o.style.setProperty("overflow",""),Array.from(n.querySelectorAll("ion-modal")).filter(t=>void 0!==t.presentingElement).length<=1&&n.style.setProperty("background-color",""))}),n=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",s=`translateY(${a?"-10px":t}) scale(0.93)`;e.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:s,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),r.addAnimation(e)}else if(r.addAnimation(s),a){const t=`translateY(-10px) scale(${a?.93:1})`;e.addElement(o.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:t},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const s=w().addElement(o.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:t},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);r.addAnimation([e,s])}else i.fromTo("opacity","1","0")}else r.addAnimation(s);return r},Y=t=>{const o=w(),a=w(),s=w();return a.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),s.addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),o.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,s])},M=t=>{const o=w(),a=w(),s=w(),i=t.querySelector(".modal-wrapper");return a.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(i).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),o.addElement(t).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,s])},j=class{constructor(a){t(this,a),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,d)},this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onLifecycle=t=>{const o=this.usersElement,a=W[t.type];if(o&&a){const s=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(s)}},l(this.el),this.didPresent=o(this,"ionModalDidPresent",7),this.willPresent=o(this,"ionModalWillPresent",7),this.willDismiss=o(this,"ionModalWillDismiss",7),this.didDismiss=o(this,"ionModalDidDismiss",7)}async present(){if(this.presented)return;const t=this.el.querySelector(".modal-wrapper");if(!t)throw new Error("container is undefined");const o=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await v(this.delegate,t,this.component,["ion-page"],o),await g(this.usersElement),a(()=>this.el.classList.add("show-modal")),await c(this,"modalEnter",k,Y,this.presentingElement);const s=e(this);if(this.swipeToClose&&"ios"===s){const t=this.leaveAnimation||n.get("modalLeave",D),o=this.animation=t(this.el,this.presentingElement);this.gesture=((t,o,a)=>{const s=t.offsetHeight;let i=!1;const r=u({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:t=>{const o=t.event.target;return null===o||!o.closest||null===o.closest("ion-content")},onStart:()=>{o.progressStart(!0,i?1:0)},onMove:t=>{const a=t.deltaY/s;a<0||o.progressStep(a)},onEnd:t=>{const e=t.velocityY,n=t.deltaY/s;if(n<0)return;const d=(t.deltaY+1e3*e)/s>=.5;let l=d?-.001:.001;d?(o.easing("cubic-bezier(0.32, 0.72, 0, 1)"),l+=x([0,0],[.32,.72],[0,1],[1,1],n)[0]):(o.easing("cubic-bezier(1, 0, 0.68, 0.28)"),l+=x([0,0],[1,0],[.68,.28],[1,1],n)[0]);const c=((t,o)=>b(400,t/Math.abs(1.1*o),500))(d?n*s:(1-n)*s,e);i=d,r.enable(!1),o.onFinish(()=>{d||r.enable(!0)}).progressEnd(d?1:0,l,c),d&&a()}});return r})(this.el,o,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}}async dismiss(t,o){if(this.gestureAnimationDismissing&&"gesture"!==o)return!1;const a=h.get(this)||[],s=await p(this,t,o,"modalLeave",D,M,this.presentingElement);return s&&(await y(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),a.forEach(t=>t.destroy())),this.animation=void 0,s}onDidDismiss(){return m(this.el,"ionModalDidDismiss")}onWillDismiss(){return m(this.el,"ionModalWillDismiss")}render(){const t=e(this);return s(i,{"no-router":!0,"aria-modal":"true",class:Object.assign({[t]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===t},f(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},s("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===t&&s("div",{class:"modal-shadow"}),s("div",{role:"dialog",class:"modal-wrapper"}))}get el(){return r(this)}},W={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};j.style={md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"};export{j as ion_modal}