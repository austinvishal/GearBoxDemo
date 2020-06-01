import{r as o,h as t}from"./p-da09bae5.js";const i=class{constructor(t){o(this,t),this.variant="solid",this.disabled=!1,this.color=!1,this.density="normal"}render(){return t("button",{class:`zea-button ${this.variant} ${this.density}`,disabled:this.disabled},t("span",{class:"zea-button-content-wrap"},t("span",{class:"zea-start-icon"},t("slot",{name:"start-icon"})),this.htmlContent?t("span",{class:"zea-button-label",innerHTML:this.htmlContent}):t("span",{class:"zea-button-label"},t("slot",null)),t("span",{class:"zea-end-icon"},t("slot",{name:"end-icon"}))))}};i.style=":host{display:inline-block}:host,input,button,select,textarea{font-family:'Roboto', sans-serif;font-size:13px}.small{font-size:11px}.zea-button{border-radius:2px;outline:none;padding:0;width:100%}.zea-button-label{padding:0.5em 1em;white-space:nowrap}.zea-button-content-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.zea-button{color:var(--color-foreground-1);background-color:var(--color-background-1);border:1px solid var(--color-background-1)}.zea-button:hover{background-color:var(--color-primary-3)}.zea-button:disabled{background-color:var(--color-disabled-2);border:1px solid var(--color-disabled-2);color:var(--color-disabled-1)}.zea-button.solid{color:var(--color-foreground-1);background-color:var(--color-secondary-1);border:1px solid var(--color-secondary-1)}.zea-button.solid:hover{background-color:var(--color-secondary-2);border:1px solid var(--color-secondary-2)}.zea-button.solid:disabled{background-color:var(--color-disabled-2);border:1px solid var(--color-disabled-2);color:var(--color-disabled-1)}.zea-button.outlined{color:var(--color-secondary-1);background-color:transparent;border:1px solid var(--color-secondary-1)}.zea-button.outlined:hover{background-color:var(--color-secondary-3)}.zea-button.outlined:disabled{background-color:var(--color-disabled-2);border:1px solid var(--color-disabled-2);color:var(--color-disabled-1)}.zea-button.pill{color:var(--color-button-text-1);background-color:var(--color-primary-1);border:1px solid var(--color-primary-1);border-radius:20px;min-height:40px}.zea-button.pill:hover{background-color:var(--color-primary-2);border:1px solid var(--color-primary-2)}.zea-button.pill:disabled{background-color:var(--color-disabled-2);border:1px solid var(--color-disabled-2);color:var(--color-foreground-1)}.zea-start-icon ::slotted(zea-icon){vertical-align:middle;padding-left:0.5em}.zea-end-icon ::slotted(zea-icon){vertical-align:middle;padding-right:0.5em}";const s=class{constructor(t){o(this,t),this.submitText="SUBMIT",this.validate=!0,this.isValid=!0,this.formValue={},this.inputs=[]}getFormValue(){return this.checkValidation(),this.inputs.forEach(o=>{this.formValue[o.name]=o.value}),this.formValue}checkValidation(){if(!this.validate)return!0;for(let o=0;o<this.inputs.length;o++){const t=this.inputs[o];if(!t.isValid)return t.invalidMessageShown=!0,this.isValid=!1,!1;t.invalidMessageShown=!1,this.isValid=!0}return!0}onSubmit(){this.submitCallback&&this.submitCallback(this.getFormValue())}componentDidRender(){this.setupChildren()}setupChildren(){this.formContainer.querySelector("slot").assignedElements().forEach(o=>{o.tagName.match(/^ZEA-INPUT/i)&&this.inputs.push(o)})}render(){return t("div",{class:"zea-form",ref:o=>this.formContainer=o},t("slot",null),t("zea-button",{onClick:this.onSubmit.bind(this),class:"submit"},this.submitText))}};s.style=":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-form{color:var(--color-foreground-1)}zea-button.submit{margin-top:2em;width:100%}";const e=class{constructor(t){o(this,t),this.name="zea-input",this.type="text",this.label="Enter text...",this.invalidMessage="Not valid",this.required=!1,this.isValid=!0,this.autoValidate=!1,this.invalidMessageShown=!1,this.showLabel=!1,this.photoBase64="",this.colorPopupShown=!1,this.colorPopupAlign="bottom-right",this.colorOptions=["#F34235","#E81D62","#292929","#9B26AF","#6639B6","#3E50B4","#2095F2","#02A8F3","#00BBD3","#009587","#4BAE4F","#8AC249","#CCDB38","#FEEA3A","#FEC006","#FE9700","#FE5621","#785447","#9D9D9D","#5F7C8A"]}handleClick(o){o.composedPath().includes(this.colorPopup)||o.composedPath().includes(this.selectedColorContainer)||(this.colorPopupShown=!1)}checkValue(){this.inputElement&&("photo"==this.type?this.value=this.photoBase64:"color"==this.type?this.value=this.selectedColor:(this.value=this.inputElement.value,this.value.replace(/(^\s+|\s+$)/,"")),this.required&&(this.value?(this.isValid=!0,this.invalidMessageShown=!1):(this.invalidMessage="Field is required",this.isValid=!1,this.autoValidate&&(this.invalidMessageShown=!0))))}onKeyUp(o){this.checkValue(),o.stopPropagation()}onKeyDown(o){o.stopPropagation()}onColorClick(o){this.selectColor(o.currentTarget.dataset.color)}selectColor(o){const t=this.inputWrapElement.querySelector(`.color-option[data-color="${o}"]`);t&&(this.selectedColor=t.dataset.color,this.currentColorElement&&this.currentColorElement.classList.remove("active"),t.classList.add("active"),this.currentColorElement=t,this.value=this.selectedColor)}onPhotoChange(o){const t=o.currentTarget.files[0],i=new FileReader;i.addEventListener("load",()=>{this.photoBase64=""+i.result,this.value=this.photoBase64,this.checkValue()},!1),t&&i.readAsDataURL(t)}componentDidRender(){}componentWillLoad(){"color"!=this.type||this.selectedColor||this.value?"color"==this.type&&this.value&&(this.selectedColor=this.value):(this.selectedColor=this.colorOptions[Math.floor(Math.random()*this.colorOptions.length)],this.value=this.selectedColor),"photo"==this.type&&this.value&&(this.photoBase64=this.value)}componentDidLoad(){this.selectColor(this.selectedColor)}render(){const o={text:[this.showLabel&&t("label",{class:"input-label"},this.label),t("input",{ref:o=>this.inputElement=o,placeholder:this.showLabel?"":this.label,type:"text",value:this.value,onKeyDown:this.onKeyDown.bind(this),onKeyUp:this.onKeyUp.bind(this),class:{invalid:(this.autoValidate||this.invalidMessageShown)&&!this.isValid}})],photo:t("div",{class:"photo-input"},t("div",{class:"photo-thumb",onClick:()=>{this.inputElement.dispatchEvent(new MouseEvent("click"))}},t("zea-icon",{name:"camera-outline",size:30}),t("div",{id:"photo-preview",style:{backgroundImage:`url(${this.value})`}})),t("div",{class:"photo-copy"},t("label",{class:"input-label"},this.label),"Your photo lets people recognize you while working together."),t("input",{ref:o=>this.inputElement=o,type:"file",onChange:this.onPhotoChange.bind(this),class:{invalid:(this.autoValidate||this.invalidMessageShown)&&!this.isValid}})),color:t("div",{class:"color-input"},t("div",{class:"color-thumb"},t("div",{ref:o=>this.selectedColorContainer=o,class:"choosen-color",style:{backgroundColor:this.selectedColor},onClick:()=>{this.colorPopupShown=!this.colorPopupShown}}),t("div",{ref:o=>this.colorPopup=o,class:`color-popup ${this.colorPopupShown?"shown":""} ${this.colorPopupAlign}`},this.colorOptions.map(o=>t("div",{class:"color-option","data-color":o,onMouseDown:this.onColorClick.bind(this),onMouseUp:()=>{this.colorPopupShown=!1}},t("div",{class:"color-sample",style:{backgroundColor:o}}))))),this.showLabel&&t("div",{class:"color-copy"},t("label",{class:"input-label"},this.label),"Your color helps you stand out from other people."))};return t("div",{class:"input-wrap",ref:o=>this.inputWrapElement=o},o[this.type],!this.isValid&&this.invalidMessageShown&&t("div",{class:"invalid-message"},this.invalidMessage))}};e.style=".zea-input{color:var(--color-foreground-1)}.input-label{font-size:11px;color:var(--color-grey-3)}.input-wrap{display:block;}input[type='text']{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;color:var(--color-foreground-2);background-color:transparent;border:none;outline:none;font-size:1em;border-bottom:1px solid var(--color-grey-3)}input[type='text'].invalid{border-bottom:1px solid var(--color-warning-2)}.invalid-message{color:var(--color-warning-2);padding:0.3em 0;font-size:12px}.photo-input{display:-ms-flexbox;display:flex;overflow:hidden}.photo-input input{position:absolute;left:-100000px}:host,input,button,select,textarea{font-family:'Roboto', sans-serif}.photo-input .input-label{display:block}.photo-thumb{-ms-flex-negative:0;flex-shrink:0;display:block;width:54px;height:54px;border-radius:30px;margin-right:10px;background-color:var(--color-secondary-1);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:12px;position:relative}.photo-copy{font-size:12px;color:var(--color-foreground-2)}#photo-preview{position:absolute;width:100%;height:100%;background-size:cover;border-radius:30px}.color-input{display:-ms-flexbox;display:flex;overflow:hidden}.color-input .input-label{display:block}.color-thumb{-ms-flex-negative:0;flex-shrink:0;display:block;width:54px;height:54px;border-radius:30px;margin-right:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:12px}.color-copy{font-size:12px;color:var(--color-foreground-2)}.color-popup{padding:7px;position:absolute;grid-template-columns:1fr 1fr 1fr 1fr;margin-top:-70px;margin-left:43px;border-radius:10px;background-color:var(--color-background-2);display:none;z-index:1000}.color-popup.top-left{margin-top:110px;margin-left:-54px}.color-popup.shown{display:grid}.color-option{padding:8px}.color-option.active{padding:0}.color-option.active .color-sample{width:32px;height:32px;border-radius:20px}.color-sample{width:16px;height:16px;border-radius:10px}.choosen-color{width:32px;height:32px;border-radius:20px}";const r=class{constructor(t){o(this,t),this.name="zea-input",this.label="Enter text...",this.invalidMessage="Not valid",this.required=!1,this.disabled=!1,this.isValid=!0,this.autoValidate=!1,this.invalidMessageShown=!1,this.showLabel=!0}checkValue(){this.inputElement&&(this.value=this.inputElement.value,this.value.replace(/(^\s+|\s+$)/,""),this.required&&(this.value?(this.isValid=!0,this.invalidMessageShown=!1):(this.invalidMessage="Field is required",this.isValid=!1,this.autoValidate&&(this.invalidMessageShown=!0))))}onKeyUp(o){this.checkValue(),o.stopPropagation()}onKeyDown(o){o.stopPropagation()}onBlur(){this.inputWrapElement.classList.remove("focused")}onFocus(){this.inputWrapElement.classList.add("focused")}componentDidRender(){this.checkValue()}render(){return t("div",{class:`input-wrap ${this.value?"not-empty":"empty"} ${this.invalidMessageShown?"invalid":"valid"} ${this.disabled?"disabled":""}`,ref:o=>this.inputWrapElement=o},this.showLabel&&t("label",{class:"input-label"},this.label),t("input",{ref:o=>this.inputElement=o,type:"text",value:this.value,onKeyDown:this.onKeyDown.bind(this),onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),disabled:this.disabled,class:{invalid:(this.autoValidate||this.invalidMessageShown)&&!this.isValid}}),t("div",{class:"underliner"},t("div",{class:"expander"})),!this.isValid&&this.invalidMessageShown&&t("div",{class:"invalid-message"},this.invalidMessage))}};r.style=":host{display:inline-block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}:host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-input{color:var(--color-foreground-1)}.input-label{color:var(--color-grey-3);position:relative;-webkit-transition:all 0.2s linear;transition:all 0.2s linear;pointer-events:none}.empty .input-label{top:18px;font-size:13px}.not-empty .input-label,.focused .input-label{top:0;font-size:11px}.focused .input-label{color:var(--color-secondary-1)}.input-wrap{display:block;position:relative}input[type='text']{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;color:var(--color-foreground-2);background-color:transparent;border:none;outline:none;font-size:1em;font-size:13px}.invalid-message{color:var(--color-warning-1);padding:0.3em 0;font-size:12px}.underliner{text-align:center;height:1px;background-color:var(--color-grey-3);overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.underliner .expander{height:1px;background-color:var(--color-secondary-1);overflow:hidden;display:inline-block;width:0;-webkit-transition:width 0.2s linear;transition:width 0.2s linear}.focused .underliner .expander{width:100%}.invalid .underliner .expander{background-color:var(--color-warning-1);width:100%}.disabled .underliner{background-color:transparent;border-bottom:1px dotted var(--color-grey-3)}";export{i as zea_button,s as zea_form,e as zea_input,r as zea_input_text}