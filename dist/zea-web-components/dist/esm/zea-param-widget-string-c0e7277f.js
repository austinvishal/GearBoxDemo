import { r as registerInstance, h } from './index-12ee0265.js';
import { E, d as de, M as Me } from './zea-ux.esm-7961f302.js';
import { u as uxFactory } from './UxFactory-ec90b28e.js';

const zeaParamWidgetStringCss = ":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-param-widget-string{color:var(--color-foreground-1);background-color:var(--color-background-2)}input{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0.3em;font-size:0.9em;border:1px solid var(--color-grey-3);color:var(--color-foreground-1);background-color:var(--color-background-3)}.user-edited{-webkit-box-shadow:0 0 8px var(--color-success-1);box-shadow:0 0 8px var(--color-success-1);margin:0px}";

const ZeaParamWidgetString = class {
    /**
     * Class constructor
     */
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onInput = this.onInput.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    /**
     * Run when component loads
     */
    componentDidLoad() {
        this.setUpInputs();
        this.onValueChanged(E.USER_SETVALUE);
    }
    /**
     * Set the inputs up
     */
    setUpInputs() {
        this.parameter.valueChanged.connect((mode) => {
            this.onValueChanged(mode);
        });
    }
    /**
     * Value change handler
     * @param {any} mode The value set mode
     */
    onValueChanged(mode) {
        if (!this.change) {
            this.txtField.value = this.parameter.getValue();
            if (mode == E.REMOTEUSER_SETVALUE) {
                this.widgetContainer.classList.add('user-edited');
                if (this.remoteUserEditedHighlightId)
                    clearTimeout(this.remoteUserEditedHighlightId);
                this.remoteUserEditedHighlightId = setTimeout(() => {
                    this.widgetContainer.classList.remove('user-edited');
                    this.remoteUserEditedHighlightId = null;
                }, 1500);
            }
        }
    }
    /**
     * Input handler
     */
    onInput() {
        const value = this.txtField.value;
        if (!this.change) {
            this.change = new de(this.parameter, value);
            this.appData.undoRedoManager.addChange(this.change);
        }
        else {
            this.change.update({ value });
        }
    }
    /**
     * Change handler
     */
    onChange() {
        this.onInput();
        this.change = undefined;
    }
    /**
     * Render method.
     * @return {JSX} The generated html
     */
    render() {
        return (h("div", { class: "zea-param-widget-string", ref: (el) => (this.widgetContainer = el) }, h("input", { onInput: this.onInput, onChange: this.onChange, ref: (el) => (this.txtField = el), id: this.parameter.getName(), type: "text", tabindex: "0" })));
    }
};
uxFactory.registerWidget('zea-param-widget-string', (p) => p.constructor.name == Me.name);
ZeaParamWidgetString.style = zeaParamWidgetStringCss;

export { ZeaParamWidgetString as Z };
