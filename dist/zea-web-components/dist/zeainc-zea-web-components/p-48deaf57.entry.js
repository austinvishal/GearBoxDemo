import{r as e,h as t,d as o}from"./p-da09bae5.js";const i=class{constructor(t){e(this,t),this.shown=!1}dialogCloseHandler(e){e.detail==this.dialog&&(this.shown=!1)}render(){return t("zea-dialog",{ref:e=>this.dialog=e,width:"fit-content",class:"share-dialog",shown:this.shown},t("h3",{slot:"title"},"Share"),t("div",{slot:"body"},t("zea-tabs",{orientation:"horizontal",density:"small"},t("div",{slot:"tab-bar"},"Share Link"),t("div",null,t("zea-qr-code",{scale:4}),t("zea-copy-link",null)),t("div",{slot:"tab-bar"},"Send SMS"),t("div",null,"Tab Content 2"),t("div",{slot:"tab-bar"},"Send Email"),t("div",null,"Tab Content 3"))))}};i.style=".zea-dialog-share{color:var(--color-freground-1)}";const s=class{constructor(t){e(this,t),this.placeholder=""}toggleSearchBox(){this.mainContainer.classList.toggle("active"),this.mainInput.focus()}render(){return t("div",{class:"zea-input-search",ref:e=>{this.mainContainer=e}},t("span",{class:"zea-input-search-icon",onClick:()=>{this.toggleSearchBox()}},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 24 24"},t("path",{class:"icon",d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),t("path",{d:"M0 0h24v24H0z",fill:"none"}))),t("span",{class:"zea-input-search-text-container"},t("input",{ref:e=>{this.mainInput=e},onBlur:()=>{this.mainContainer.classList.remove("active")},onKeyDown:e=>{e.stopPropagation()},onKeyUp:e=>{e.stopPropagation()},class:"zea-input-search-text",type:"text",placeholder:this.placeholder})))}get mainElement(){return o(this)}};s.style=":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-input-search{color:var(--color-foreground-1);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;width:2em;border-radius:3px;-webkit-transition:all 0.5s;transition:all 0.5s;background-color:transparent;border:1px solid transparent}path.icon{fill:var(--color-foreground-1)}.zea-input-search.active{width:100%;border:1px solid var(--color-grey-3);background-color:var(--color-background-1)}.zea-input-search-icon{height:2em;width:2em;display:inline-block;vertical-align:middle;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0.2em;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.zea-input-search-icon:hover{background-color:var(--color-primary-3);color:var(--color-button-text-1)}.zea-input-search.active .zea-input-search-icon:hover{background-color:var(--color-background-1)}input{display:block;height:100%;width:100%;border:none;background-color:transparent;outline:none;font-size:1em;color:var(--color-foreground-1)}.zea-input-search-text-container{height:2em;-ms-flex-positive:1;flex-grow:1;opacity:0;-webkit-transition:all 0.5s;transition:all 0.5s}.zea-input-search.active .zea-input-search-text-container{opacity:1}";const r=class{constructor(t){e(this,t),this.cellCount=3,this.orientation="horizontal",this.resizeCellA=!0,this.resizeCellC=!0,this.cellASize=100,this.cellCSize=100,this.resizeInterval=50,this.showBorders=!0,this.error="",this.minimumGap=20,this.maximunGap=50}onHandleMouseDown(e){this.activeHandle=e.target,document.getElementsByTagName("body")[0].style.cursor="vertical"===this.orientation?"row-resize":"col-resize",document.getElementsByTagName("body")[0].style.userSelect="none"}onHandleMouseUp(){this.activeHandle=null,document.getElementsByTagName("body")[0].style.cursor="default",document.getElementsByTagName("body")[0].style.userSelect="initial"}mouseMoveHandler(e){if(this.activeHandle){const t=this.activeHandle.classList.contains("zea-handle-a");this.processDrag(e,"vertical"===this.orientation?"Y":"X",t?"a":"c")}}processDrag(e,t,o){const i=this.activeHandle,s=i.parentElement,r=s.getBoundingClientRect(),a=i.getBoundingClientRect(),l="X"==t?"width":"height",n=this.cellB.getBoundingClientRect()[l];let c=a["X"==t?"left":"top"]-e["client"+t];c="a"==o?-c:c;let h=r[l]+c;s.style[l]=h+"px",h<this.minimumGap&&(h=this.minimumGap);const d=r[l]+n-this.minimumGap;h>d&&(h=d),this["a"==o?"cellASize":"cellCSize"]=h,s.style[l]=h+"px",this.triggerResize(h)}triggerResize(e){window.dispatchEvent(new CustomEvent("resize",{bubbles:!0,detail:e}))}layout(){let e,t;"vertical"===this.orientation?(e="height",t=this.layoutContainer.clientHeight):(e="width",t=this.layoutContainer.clientWidth);const o=t-this.cellASize-this.cellCSize;this.cellA.style[e]=this.cellASize+"px",this.cellB.style[e]=o+"px",this.cellC.style[e]=this.cellCSize+"px"}componentDidLoad(){this.mainElement.addEventListener("dragstart",e=>{e.preventDefault(),e.stopPropagation()}),window.addEventListener("resize",()=>{this.layout()})}componentDidRender(){this.layout()}render(){const e={},o={};this.cellASize||(this.resizeCellA=!1),this.cellCSize||(this.resizeCellC=!1),void 0!==this.cellASize&&("vertical"===this.orientation?e.height=this.cellASize+"px":e.width=this.cellASize+"px"),void 0!==this.cellCSize&&("vertical"===this.orientation?o.height=this.cellCSize+"px":o.width=this.cellCSize+"px");const i=t("div",{class:"zea-layout-cell cell-a",style:e,ref:e=>this.cellA=e},this.resizeCellA&&t("div",{class:"zea-resize-handle zea-handle-a",onMouseDown:this.onHandleMouseDown.bind(this)}),t("slot",{name:"a"})),s=t("div",{class:"zea-layout-cell cell-b",ref:e=>this.cellB=e},t("slot",{name:"b"})),r=this.cellCount>2&&t("div",{class:"zea-layout-cell cell-c",style:o,ref:e=>this.cellC=e},this.resizeCellC&&t("div",{class:"zea-resize-handle zea-handle-c",onMouseDown:this.onHandleMouseDown.bind(this)}),t("slot",{name:"c"}));return t("div",{ref:e=>this.layoutContainer=e,class:`zea-layout ${this.orientation} ${this.showBorders?"with-borders":""}`},this.error||[i,s,r])}get mainElement(){return o(this)}};r.style=":host{height:100%}:host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-layout{color:var(--color-foreground-1);display:-ms-flexbox;display:flex;width:100%;height:100%}.zea-layout.vertical{-ms-flex-direction:column;flex-direction:column}.zea-layout-cell{-ms-flex-positive:1;flex-grow:1;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--color-background-1)}.with-borders .zea-layout-cell{border:1px solid var(--color-grey-1)}.zea-layout-cell:nth-child(1){-ms-flex-positive:0;flex-grow:0;width:100px;height:auto}.zea-layout-cell:nth-child(3){-ms-flex-positive:0;flex-grow:0;width:100px;height:auto}.vertical .zea-layout-cell:nth-child(1){-ms-flex-positive:0;flex-grow:0;height:100px;width:auto}.vertical .zea-layout-cell:nth-child(3){-ms-flex-positive:0;flex-grow:0;height:100px;width:auto}.zea-resize-handle{position:absolute;display:block;content:'';width:6px;height:100%;background-color:transparent;background-repeat:no-repeat;background-position:center center;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAXCAYAAAAoRj52AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEFJREFUeNpinDRp0v+XL18yLF26lFFMTIwhJiYGzGf6/fs3w58/fxhgAMZnYsABRiWGrwQLCwsDMzMzXADGBwgwAF78GJLqRabNAAAAAElFTkSuQmCC);z-index:1000000;top:0;opacity:0.5;cursor:col-resize}.zea-resize-handle:hover{background-color:var(--color-background-2);opacity:1}.vertical .zea-resize-handle{left:0 !important;right:0 !important;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAGCAYAAAAooAWeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpinDhx4v8/f/4wUBuwsrIysLx8+ZLh79+/VDechYWFgVFBQYGBVoBFTEyMdoZHR0cPzTAHCDAAG7UW+bsxwNcAAAAASUVORK5CYII=')}.zea-layout-cell:nth-child(1) .zea-resize-handle{right:-1px}.zea-layout-cell:nth-child(3) .zea-resize-handle{left:-1px}.vertical .zea-resize-handle{position:absolute;width:100%;height:6px;cursor:row-resize;margin-left:0;left:0;background-repeat:no-repeat}.vertical .zea-layout-cell:nth-child(1) .zea-resize-handle{bottom:-1px;top:auto}.vertical .zea-layout-cell:nth-child(3) .zea-resize-handle{top:-1px}";const a=class{constructor(t){e(this,t),this.shown=!1}handleClick(){this.shown=!1}onToggleClick(){this.shown=!this.shown}render(){return t("div",{ref:e=>this.container=e,class:{"zea-navigation-drawer":!0,shown:this.shown}},t("div",{class:"drawer"},t("div",{class:"drawer-content"},t("slot",null))),t("div",{class:"toggle",onClick:this.onToggleClick.bind(this)},t("zea-icon",{size:30,name:"menu"})))}};a.style=":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-navigation-drawer{color:var(--color-foreground-1);display:inline-block;vertical-align:middle}.drawer{position:fixed;top:0;left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:192px;height:100vh;background-color:var(--color-background-4);z-index:10000000;-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.shown .drawer{left:0;-webkit-transform:translateX(0);transform:translateX(0)}.toggle{position:relative;z-index:10000010;margin-right:12px;margin-left:7px;background-color:transparent;border-radius:50%;padding:4px;display:inline-block}.toggle:hover{background-color:var(--color-grey-3)}.drawer-content{padding-top:80px;padding-left:9px;font-size:14px}";const l=class{constructor(t){e(this,t)}render(){return t("div",{class:"zea-panel-progress-bar"},t("zea-dialog",{shown:!0,allowClose:!1,width:"300px"},t("div",{slot:"body"},t("slot",null),t("zea-progress-bar",{ref:e=>this.progressBar=e,type:"indeterminate"}))))}};l.style=".zea-panel-progress-bar{color:var(--color-freground-1);position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--color-shadow);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}";const n=class{constructor(t){e(this,t),this.showImages=!0,this.initialZIndex=1e3,this.overflowLimit=5,this.overflowShown=!1,this.shownOverflowEntry=null}sessionChanged(){this.setupSession()}componentWillLoad(){this.setupSession()}setupSession(){if("sub"in this.session){const e=[];for(let t in this.session.users)this.session.users.hasOwnProperty(t)&&e.push(this.session.users[t]);this.userDatas=e,this.session.sub("user-joined",e=>{this.userDatas.find(t=>t.id==e.id)||(this.userDatas=[e,...this.userDatas])}),this.session.sub("user-left",e=>{const t=this.userDatas.findIndex(t=>t.id==e.id);if(-1==t)return void console.warn("User id not in session:",e.id);const o=[...this.userDatas];o.splice(t,1),this.userDatas=o})}else this.userDatas=[]}onChipClick(){}render(){const e=this.userDatas.slice(0,this.overflowLimit),o=this.userDatas.slice(this.overflowLimit);return t("div",{class:"zea-chip-set"},e&&e.map(e=>t("zea-user-chip",{showImages:this.showImages,key:e.id,userData:e,onClick:this.onChipClick.bind(this)})),o.length>0&&t("div",{class:"overflow"},t("div",{class:"overflow-thumb",onClick:()=>this.overflowShown=!this.overflowShown},["+"+(this.userDatas.length-this.overflowLimit),!this.overflowShown&&t("div",{class:"overflow-tooltip"},"Show All")]),t("div",{class:{"overflow-list":!0,shown:this.overflowShown}},o.map(e=>t("div",{key:e.id,class:{"overflow-entry":!0,shown:this.shownOverflowEntry==e.id}},t("div",{class:"overflow-entry-collapser",onClick:t=>{this.shownOverflowEntry=this.shownOverflowEntry==e.id?null:e.id,t.currentTarget.scrollIntoView()}},t("zea-icon",{name:this.shownOverflowEntry==e.id?"chevron-up-outline":"chevron-down-outline",size:14})),t("zea-user-card",{userData:e,collapsible:!1,density:this.shownOverflowEntry==e.id?"normal":"small"}))))))}static get watchers(){return{session:["sessionChanged"]}}};n.style=":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-chip-set{color:var(--color-foreground-1);display:-ms-flexbox;display:flex;position:relative}zea-user-chip{margin-left:-8px;width:36px;height:36px;border:1px solid transparent;border-radius:19px}.overflow-thumb{border:2px solid var(--color-background-3);background-color:var(--color-background-3);width:36px;height:36px;color:var(--color-foreground-2);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;font-size:13px;margin-left:-8px;border-radius:19px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.overflow-tooltip{position:absolute;top:35px;padding:4px 7px;border-radius:4px;font-size:12px;color:var(--color-foreground-1);background-color:var(--color-grey-3);z-index:10000;white-space:nowrap;display:none}.overflow-thumb:hover .overflow-tooltip{display:block}.overflow-list{max-height:calc(100vh - 60px);width:-webkit-min-content;width:-moz-min-content;width:min-content;overflow-y:auto;background-color:var(--color-background-2);display:none}.overflow-list.shown{display:block}.overflow-list zea-user-card{display:block;}.overflow-entry{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch}.overflow-entry-collapser{padding-left:8px;padding-top:14px;padding-right:8px}";export{i as zea_dialog_share,s as zea_input_search,r as zea_layout,a as zea_navigation_drawer,l as zea_panel_progress_bar,n as zea_user_chip_set}