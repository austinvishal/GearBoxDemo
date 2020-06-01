'use strict';

const index = require('./index-81865576.js');
const zeaUx_esm = require('./zea-ux.esm-aa49a158.js');
const UxFactory = require('./UxFactory-16a95afe.js');

const zeaParamWidgetStringCss = ":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-param-widget-string{color:var(--color-foreground-1);background-color:var(--color-background-2)}input{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0.3em;font-size:0.9em;border:1px solid var(--color-grey-3);color:var(--color-foreground-1);background-color:var(--color-background-3)}.user-edited{-webkit-box-shadow:0 0 8px var(--color-success-1);box-shadow:0 0 8px var(--color-success-1);margin:0px}";

const ZeaParamWidgetString = class {
    /**
     * Class constructor
     */
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.onInput = this.onInput.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    /**
     * Run when component loads
     */
    componentDidLoad() {
        this.setUpInputs();
        this.onValueChanged(zeaUx_esm.E.USER_SETVALUE);
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
            if (mode == zeaUx_esm.E.REMOTEUSER_SETVALUE) {
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
            this.change = new zeaUx_esm.de(this.parameter, value);
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
        return (index.h("div", { class: "zea-param-widget-string", ref: (el) => (this.widgetContainer = el) }, index.h("input", { onInput: this.onInput, onChange: this.onChange, ref: (el) => (this.txtField = el), id: this.parameter.getName(), type: "text", tabindex: "0" })));
    }
};
UxFactory.uxFactory.registerWidget('zea-param-widget-string', (p) => p.constructor.name == zeaUx_esm.Me.name);
ZeaParamWidgetString.style = zeaParamWidgetStringCss;

exports.ZeaParamWidgetString = ZeaParamWidgetString;
