import{a as t}from"./p-4055714e.js";var e=t.process;function r(){}function n(){n.init.call(this)}function i(t){return void 0===t._maxListeners?n.defaultMaxListeners:t._maxListeners}function o(t,e,r){if(e)t.call(r);else for(var n=t.length,i=l(t,n),o=0;o<n;++o)i[o].call(r)}function s(t,e,r,n){if(e)t.call(r,n);else for(var i=t.length,o=l(t,i),s=0;s<i;++s)o[s].call(r,n)}function f(t,e,r,n,i){if(e)t.call(r,n,i);else for(var o=t.length,s=l(t,o),f=0;f<o;++f)s[f].call(r,n,i)}function u(t,e,r,n,i,o){if(e)t.call(r,n,i,o);else for(var s=t.length,f=l(t,s),u=0;u<s;++u)f[u].call(r,n,i,o)}function h(t,e,r,n){if(e)t.apply(r,n);else for(var i=t.length,o=l(t,i),s=0;s<i;++s)o[s].apply(r,n)}function c(t,e,n,o){var s,f,u,h;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((f=t._events)?(f.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),f=t._events),u=f[e]):(f=t._events=new r,t._eventsCount=0),u){if("function"==typeof u?u=f[e]=o?[n,u]:[u,n]:o?u.unshift(n):u.push(n),!u.warned&&(s=i(t))&&s>0&&u.length>s){u.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+e+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=t,c.type=e,c.count=u.length,h=c,"function"==typeof console.warn?console.warn(h):console.log(h)}}else u=f[e]=n,++t._eventsCount;return t}function a(t,e,r){var n=!1;function i(){t.removeListener(e,i),n||(n=!0,r.apply(t,arguments))}return i.listener=r,i}function v(t){var e=this._events;if(e){var r=e[t];if("function"==typeof r)return 1;if(r)return r.length}return 0}function l(t,e){for(var r=new Array(e);e--;)r[e]=t[e];return r}r.prototype=Object.create(null),n.EventEmitter=n,n.usingDomains=!1,n.prototype.domain=void 0,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.init=function(){this.domain=null,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new r,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},n.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=t,this},n.prototype.getMaxListeners=function(){return i(this)},n.prototype.emit=function(t){var e,r,n,i,c,a,v,l="error"===t;if(a=this._events)l=l&&null==a.error;else if(!l)return!1;if(v=this.domain,l){if(e=arguments[1],!v){if(e instanceof Error)throw e;var w=new Error('Uncaught, unspecified "error" event. ('+e+")");throw w.context=e,w}return e||(e=new Error('Uncaught, unspecified "error" event')),e.domainEmitter=this,e.domain=v,e.domainThrown=!1,v.emit("error",e),!1}if(!(r=a[t]))return!1;var p="function"==typeof r;switch(n=arguments.length){case 1:o(r,p,this);break;case 2:s(r,p,this,arguments[1]);break;case 3:f(r,p,this,arguments[1],arguments[2]);break;case 4:u(r,p,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(n-1),c=1;c<n;c++)i[c-1]=arguments[c];h(r,p,this,i)}return!0},n.prototype.on=n.prototype.addListener=function(t,e){return c(this,t,e,!1)},n.prototype.prependListener=function(t,e){return c(this,t,e,!0)},n.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.on(t,a(this,t,e)),this},n.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.prependListener(t,a(this,t,e)),this},n.prototype.removeListener=function(t,e){var n,i,o,s,f;if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');if(!(i=this._events))return this;if(!(n=i[t]))return this;if(n===e||n.listener&&n.listener===e)0==--this._eventsCount?this._events=new r:(delete i[t],i.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(o=-1,s=n.length;s-- >0;)if(n[s]===e||n[s].listener&&n[s].listener===e){f=n[s].listener,o=s;break}if(o<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new r,this;delete i[t]}else!function(t,e){for(var r=e,n=r+1,i=t.length;n<i;r+=1,n+=1)t[r]=t[n];t.pop()}(n,o);i.removeListener&&this.emit("removeListener",t,f||e)}return this},n.prototype.removeAllListeners=function(t){var e,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new r,this._eventsCount=0):n[t]&&(0==--this._eventsCount?this._events=new r:delete n[t]),this;if(0===arguments.length){for(var i,o=Object.keys(n),s=0;s<o.length;++s)"removeListener"!==(i=o[s])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=new r,this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(e)do{this.removeListener(t,e[e.length-1])}while(e[0]);return this},n.prototype.listeners=function(t){var e,r=this._events;return r&&(e=r[t])?"function"==typeof e?[e.listener||e]:function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(e):[]},n.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):v.call(t,e)},n.prototype.listenerCount=v,n.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};export{n as E,e as p,n as r}