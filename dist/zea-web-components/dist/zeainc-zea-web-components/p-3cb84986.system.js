System.register(["./p-6ab71ff6.system.js","./p-3771f237.system.js","./p-4f1c0bb7.system.js","./p-b2c87b45.system.js"],(function(e){"use strict";var t,o,i,r,n,s,c,a;return{setters:[function(e){t=e.r;o=e.h},function(e){i=e.E;r=e.d;n=e.y;s=e.x},function(e){c=e.u},function(e){a=e.i}],execute:function(){var l=":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-param-widget-color{color:var(--color-foreground-1)}.color-sample{height:30px;line-height:30px;border:1px solid var(--color-foreground-1);margin-bottom:0.5em;text-align:center;font-size:0.8em}";var h=e("Z",function(){function e(e){t(this,e);this.colorPickerHeight=200}e.prototype.handlewindowResize=function(){var e=this;clearTimeout(this.resizeTimeout);this.resizeTimeout=setTimeout((function(){return e.resizeColorPicker()}),500)};e.prototype.resizeColorPicker=function(){this.colorPicker.resize(this.container.offsetWidth,this.colorPickerHeight)};e.prototype.componentDidLoad=function(){var e=this;this.setUpColorPicker();this.parameter.valueChanged.connect((function(t){e.onValueChange(t)}));this.onValueChange(i.USER_SETVALUE);setTimeout((function(){return window.dispatchEvent(new Event("resize"))}),1e3)};e.prototype.onValueChange=function(e){var t=this;if(!this.change){this.undoing=true;this.colorPicker.color.rgb=this.parameter.getValue().getAsRGBDict();this.undoing=false;this.sampleColor=this.colorPicker.color.hslString;this.setSampleTextColor();console.log(i);if(e==i.REMOTEUSER_SETVALUE){this.container.classList.add("user-edited");if(this.remoteUserEditedHighlightId)clearTimeout(this.remoteUserEditedHighlightId);this.remoteUserEditedHighlightId=setTimeout((function(){t.container.classList.remove("user-edited");t.remoteUserEditedHighlightId=null}),1500)}}};e.prototype.setSampleTextColor=function(){var e=100-this.colorPicker.color.hsl.l;this.sampleTextColor="hsl(1, 0%, "+e+"%)"};e.prototype.setUpColorPicker=function(){var e=this;this.colorPicker=a.ColorPicker(this.colorPickerContainer,{width:this.container.offsetWidth,height:this.colorPickerHeight,anticlockwise:true,borderWidth:0,borderColor:"#fff",sliderHeight:"10px",padding:1,sliderMargin:4,handleRadius:4,layout:[{component:a.ui.Slider,options:{sliderType:"hue"}},{component:a.ui.Slider,options:{sliderType:"saturation"}},{component:a.ui.Slider,options:{}}]});this.colorPicker.on("input:start",(function(){e.change=new r(e.parameter);e.appData.undoRedoManager.addChange(e.change)}));this.colorPicker.on("input:end",(function(){e.change=undefined}));this.colorPicker.on("color:change",(function(){if(e.undoing)return;var t=new n;t.setFromRGBDict(e.colorPicker.color.rgb);e.sampleColor=e.colorPicker.color.hslString;e.setSampleTextColor();if(!e.change){e.change=new r(e.parameter,t);e.appData.undoRedoManager.addChange(e.change)}else{e.change.update({value:t})}}))};e.prototype.render=function(){var e=this;return o("div",{ref:function(t){return e.container=t},class:"zea-param-widget-color"},o("div",{style:{color:this.sampleTextColor,backgroundColor:this.sampleColor},class:"color-sample"},this.sampleColor),o("div",{ref:function(t){return e.colorPickerContainer=t},class:"color-picker"}))};return e}());c.registerWidget("zea-param-widget-color",(function(e){return e.constructor.name==s.name}));h.style=l}}}));