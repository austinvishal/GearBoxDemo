import{r as e,h as t,H as o}from"./p-da09bae5.js";const r=class{constructor(t){e(this,t)}onKeyDown(e){if(!this.mouseIsOver)return;const{selectionManager:t}=this.appData;if(t){if("ArrowLeft"==e.key){const o=Array.from(t.getSelection())[0];return this.collapseSelection(o),e.preventDefault(),void e.stopPropagation()}if("ArrowRight"==e.key){const o=Array.from(t.getSelection())[0];return this.expandSelection(o),e.preventDefault(),void e.stopPropagation()}if("ArrowUp"==e.key){const o=Array.from(t.getSelection())[0],r=new Set,i=o.getOwner();if(i){const e=i.getChildIndex(o),t=i.getChild(e-1);r.add(0==e?i:t&&t.getNumChildren&&t.titleElement.isExpanded?t.getChild(t.getNumChildren()-1):o.getOwner().getChild(e-1))}return r.size>0&&t.setSelection(r),e.preventDefault(),void e.stopPropagation()}if("ArrowDown"==e.key){const o=Array.from(t.getSelection())[0],r=new Set;if(o&&o.getChild&&o.titleElement.isExpanded)r.add(o.getChild(0));else if(o.getOwner){const e=o.getOwner().getChildIndex(o);if(e==o.getOwner().getNumChildren()-1){const e=o.getOwner(),t=e.getOwner();if(e&&t){const o=t.getChildIndex(e);o==t.getNumChildren()-1||r.add(t.getChild(o+1))}}else r.add(o.getOwner().getChild(e+1))}return r.size>0&&t.setSelection(r),e.preventDefault(),void e.stopPropagation()}}}expandSelection(e,t=!0){e.getNumChildren()&&e.titleElement&&!e.titleElement.isExpanded&&(e.titleElement.isExpanded=!0),t&&this.scrollItemIntoView(e)}collapseSelection(e,t=!0){e.getNumChildren()&&e.titleElement.isExpanded&&(e.titleElement.isExpanded=!1),t&&this.scrollItemIntoView(e)}scrollItemIntoView(e){e&&e.titleElement&&e.titleElement.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}onMouseEnter(){this.mouseIsOver=!0}onMouseLeave(){this.mouseIsOver=!1}render(){return t(o,null,t("div",{class:"wrap",onMouseEnter:this.onMouseEnter.bind(this),onMouseLeave:this.onMouseLeave.bind(this)},t("zea-tree-item-element",{ref:e=>this.rootItem.titleElement=e,"is-root":"true","expand-on-load":"true",treeItem:this.rootItem,appData:this.appData,isExpanded:!0})))}};r.style=":host{display:block;height:100%}:host,input,button,select,textarea{font-family:'Roboto', sans-serif}.wrap{height:100%;padding:0.5em;overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-foreground-1)}";export{r as zea_tree_view}