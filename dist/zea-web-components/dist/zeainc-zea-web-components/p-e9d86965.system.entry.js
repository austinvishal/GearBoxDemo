var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{l(i.next(t))}catch(e){o(e)}}function s(t){try{l(i["throw"](t))}catch(e){o(e)}}function l(t){t.done?n(t.value):r(t.value).then(a,s)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(s){a=[6,s];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-6ab71ff6.system.js","./p-394b76b8.system.js","./p-506cc8db.system.js","./p-a1a7132d.system.js","./p-babd758f.system.js","./p-43d2bece.system.js"],(function(t){"use strict";var e,n,i,r,o,a,s,l,c,u,d,p;return{setters:[function(t){e=t.r;n=t.c;i=t.h;r=t.H;o=t.d},function(t){a=t.g},function(){},function(t){s=t.f;l=t.g;c=t.h},function(t){u=t.h},function(t){d=t.f;p=t.a}],execute:function(){var h=function(t,e,n){var i=new MutationObserver((function(t){n(f(t,e))}));i.observe(t,{childList:true,subtree:true});return i};var f=function(t,e){var n;t.forEach((function(t){for(var i=0;i<t.addedNodes.length;i++){n=v(t.addedNodes[i],e)||n}}));return n};var v=function(t,e){if(t.nodeType!==1){return undefined}var n=t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e));return n.find((function(e){return e.value===t.value}))};var g=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}";var b=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}";var m=t("ion_select",function(){function t(t){var i=this;e(this,t);this.inputId="ion-sel-"+k++;this.didInit=false;this.isExpanded=false;this.disabled=false;this.cancelText="Cancel";this.okText="OK";this.name=this.inputId;this.multiple=false;this.interface="alert";this.interfaceOptions={};this.onClick=function(t){i.setFocus();i.open(t)};this.onFocus=function(){i.ionFocus.emit()};this.onBlur=function(){i.ionBlur.emit()};this.ionChange=n(this,"ionChange",7);this.ionCancel=n(this,"ionCancel",7);this.ionFocus=n(this,"ionFocus",7);this.ionBlur=n(this,"ionBlur",7);this.ionStyle=n(this,"ionStyle",7)}t.prototype.disabledChanged=function(){this.emitStyle()};t.prototype.valueChanged=function(){this.emitStyle();if(this.didInit){this.ionChange.emit({value:this.value})}};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){this.updateOverlayOptions();this.emitStyle();this.mutationO=h(this.el,"ion-select-option",(function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){this.updateOverlayOptions();return[2]}))}))}));return[2]}))}))};t.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};t.prototype.componentDidLoad=function(){this.didInit=true};t.prototype.open=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;var i=this;return __generator(this,(function(r){switch(r.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}n=this;return[4,this.createOverlay(t)];case 1:e=n.overlay=r.sent();this.isExpanded=true;e.onDidDismiss().then((function(){i.overlay=undefined;i.isExpanded=false;i.setFocus()}));return[4,e.present()];case 2:r.sent();return[2,e]}}))}))};t.prototype.createOverlay=function(t){var e=this.interface;if((e==="action-sheet"||e==="popover")&&this.multiple){console.warn('Select interface cannot be "'+e+'" with a multi-value select. Using the "alert" interface instead.');e="alert"}if(e==="popover"&&!t){console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');e="alert"}if(e==="popover"){return this.openPopover(t)}if(e==="action-sheet"){return this.openActionSheet()}return this.openAlert()};t.prototype.updateOverlayOptions=function(){var t=this.overlay;if(!t){return}var e=this.childOpts;var n=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(e,n);break;case"popover":var i=t.querySelector("ion-select-popover");if(i){i.options=this.createPopoverOptions(e,n)}break;case"alert":var r=this.multiple?"checkbox":"radio";t.inputs=this.createAlertInputs(e,r,n);break}};t.prototype.createActionSheetButtons=function(t,e){var n=this;var i=t.map((function(t){var i=x(t);return{role:y(i,e,n.compareWith)?"selected":"",text:t.textContent,handler:function(){n.value=i}}}));i.push({text:this.cancelText,role:"cancel",handler:function(){n.ionCancel.emit()}});return i};t.prototype.createAlertInputs=function(t,e,n){var i=this;return t.map((function(t){var r=x(t);return{type:e,label:t.textContent||"",value:r,checked:y(r,n,i.compareWith),disabled:t.disabled}}))};t.prototype.createPopoverOptions=function(t,e){var n=this;return t.map((function(t){var i=x(t);return{text:t.textContent||"",value:i,checked:y(i,e,n.compareWith),disabled:t.disabled,handler:function(){n.value=i;n.close()}}}))};t.prototype.openPopover=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n,i,r;return __generator(this,(function(o){e=this.interfaceOptions;n=a(this);i=this.value;r=Object.assign(Object.assign({mode:n},e),{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,value:i,options:this.createPopoverOptions(this.childOpts,i)}});return[2,s.create(r)]}))}))};t.prototype.openActionSheet=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n;return __generator(this,(function(i){t=a(this);e=this.interfaceOptions;n=Object.assign(Object.assign({mode:t},e),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",e.cssClass]});return[2,l.create(n)]}))}))};t.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,i,r,o;var s=this;return __generator(this,(function(l){t=this.getLabel();e=t?t.textContent:null;n=this.interfaceOptions;i=this.multiple?"checkbox":"radio";r=a(this);o=Object.assign(Object.assign({mode:r},n),{header:n.header?n.header:e,inputs:this.createAlertInputs(this.childOpts,i,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){s.ionCancel.emit()}},{text:this.okText,handler:function(t){s.value=t}}],cssClass:["select-alert",n.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return[2,c.create(o)]}))}))};t.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}return this.overlay.dismiss()};t.prototype.getLabel=function(){return d(this.el)};t.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(t.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))},enumerable:true,configurable:true});t.prototype.getText=function(){var t=this.selectedText;if(t!=null&&t!==""){return t}return C(this.childOpts,this.value,this.compareWith)};t.prototype.setFocus=function(){if(this.buttonEl){this.buttonEl.focus()}};t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,select:true,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})};t.prototype.render=function(){var t;var e=this;var n=this,o=n.placeholder,s=n.name,l=n.disabled,c=n.isExpanded,h=n.value,f=n.el;var v=a(this);var g=this.inputId+"-lbl";var b=d(f);if(b){b.id=g}var m=false;var y=this.getText();if(y===""&&o!=null){y=o;m=true}p(true,f,s,w(h),l);var x={"select-text":true,"select-placeholder":m};var O=m?"placeholder":"text";return i(r,{onClick:this.onClick,role:"combobox","aria-haspopup":"dialog","aria-disabled":l?"true":null,"aria-expanded":""+c,"aria-labelledby":g,class:(t={},t[v]=true,t["in-item"]=u("ion-item",f),t["select-disabled"]=l,t)},i("div",{class:x,part:O},y),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner",part:"icon-inner"})),i("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:l,ref:function(t){return e.buttonEl=t}}))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}},enumerable:true,configurable:true});return t}());var y=function(t,e,n){if(t===undefined){return false}if(Array.isArray(t)){return t.some((function(t){return O(t,e,n)}))}else{return O(t,e,n)}};var x=function(t){var e=t.value;return e===undefined?t.textContent||"":e};var w=function(t){if(t==null){return undefined}if(Array.isArray(t)){return t.join(",")}return t.toString()};var O=function(t,e,n){if(typeof n==="function"){return n(t,e)}else if(typeof n==="string"){return t[n]===e[n]}else{return Array.isArray(e)?e.includes(t):t===e}};var C=function(t,e,n){if(e===undefined){return""}if(Array.isArray(e)){return e.map((function(e){return _(t,e,n)})).filter((function(t){return t!==null})).join(", ")}else{return _(t,e,n)||""}};var _=function(t,e,n){var i=t.find((function(t){return O(x(t),e,n)}));return i?i.textContent:null};var k=0;m.style={md:b}}}}));