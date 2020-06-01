import { r as registerInstance, h, d as getElement } from './index-12ee0265.js';
var zeaCheckboxCss = ".zea-checkbox{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;overflow:hidden;width:1em;height:1em;border:0.1em solid var(--color-primary-1);border-radius:3px}.zea-checkbox.checked{background-color:var(--color-primary-1)}.zea-checkbox.disabled{border:0.1em solid var(--color-disabled-2)}.zea-checkbox.checked.disabled{background-color:var(--color-disabled-2)}.zea-checkbox path.icon-path{fill:var(--color-disabled-2)}.zea-checkbox.checked.disabled path.icon-path{fill:var(--color-disabled-1)}.zea-checkbox-wrap{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.zea-checkbox-icon{display:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.zea-checkbox.checked .zea-checkbox-icon{display:-ms-inline-flexbox;display:inline-flex}input[type='checkbox']{position:absolute;left:-50000px}";
var ZeaCheckbox = /** @class */ (function () {
    function ZeaCheckbox(hostRef) {
        registerInstance(this, hostRef);
        /**
        /**
         * Whether the checkbox is disabled
         */
        this.disabled = false;
        /**
        /**
         * Whether the checkbox is checked
         */
        this.checked = false;
    }
    /**
    /**
     * Listen for changes on the checked prop
     * @param {boolean} checked New value for the checked prop
     */
    ZeaCheckbox.prototype.onCheckedChanged = function (checked) {
        this.element.shadowRoot.querySelector('input').checked = checked;
        this.updateElementClass();
    };
    /**
    /**
     * Listen for changes on the disabled prop
     * @param {boolean} disabled New value for the disabled prop
     */
    ZeaCheckbox.prototype.onDisabledChanged = function (disabled) {
        this.element.shadowRoot.querySelector('input').disabled = disabled;
        this.updateElementClass();
    };
    /**
    /**
     * Update element class according to checkbox state
     */
    ZeaCheckbox.prototype.updateElementClass = function () {
        this.elementClass = this.checked ? 'checked' : '';
        this.elementClass += this.disabled ? ' disabled ' : '';
    };
    /**
     * Change checkbox state on click
     */
    ZeaCheckbox.prototype.toggleCheck = function () {
        if (!this.disabled) {
            this.checked = !this.checked;
        }
    };
    /**
     * Called everytime component loads
     */
    ZeaCheckbox.prototype.componentDidLoad = function () {
        this.onCheckedChanged(this.checked);
        this.onDisabledChanged(this.disabled);
    };
    /**
     * Main render function
     * @return {JSX} the generated html
     */
    ZeaCheckbox.prototype.render = function () {
        var _this = this;
        return (h("div", { class: 'zea-checkbox ' + this.elementClass, onClick: function () {
                _this.toggleCheck();
            } }, h("span", { class: "zea-checkbox-wrap" }, h("span", { class: "zea-checkbox-icon" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 24 24" }, h("path", { class: "icon-path", d: "M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" })))), h("input", { type: "checkbox", name: this.name })));
    };
    Object.defineProperty(ZeaCheckbox.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZeaCheckbox, "watchers", {
        get: function () {
            return {
                "checked": ["onCheckedChanged"],
                "disabled": ["onDisabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return ZeaCheckbox;
}());
ZeaCheckbox.style = zeaCheckboxCss;
var zeaSwitchCss = ":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-switch{display:inline-block;overflow:hidden;width:45px;height:16px;position:relative;color:var(--color-foreground-1)}.zea-switch-wrap{width:100%;height:100%}.zea-switch-track{width:25px;height:10px;border-radius:5px;position:absolute;top:3px;left:2px;background-color:var(--color-foreground-3)}.zea-switch-button{width:16px;height:16px;border-radius:8px;position:absolute;background-color:var(--color-foreground-1)}.zea-switch.checked .zea-switch-button{background-color:var(--color-primary-1);left:13px}.zea-switch.disabled .zea-switch-button{background-color:var(--color-foreground-3)}.zea-switch.checked.disabled .zea-switch-button{background-color:var(--color-foreground-3)}.zea-switch.checked .zea-switch-track{background-color:var(--color-primary-3)}.zea-switch.disabled .zea-switch-track{background-color:var(--color-disabled-2)}.zea-switch.checked.disabled .zea-switch-track{background-color:var(--color-disabled-2)}input[type='checkbox']{position:relative;left:-50000px}.zea-switch-label{position:absolute;left:32px;top:2px;font-size:10px}.zea-switch.disabled .zea-switch-label{color:var(--color-foreground-3)}";
var ZeaSwitch = /** @class */ (function () {
    function ZeaSwitch(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Whether the switch is disabled
         */
        this.disabled = false;
        /**
         * Whether the switch is checked
         */
        this.checked = false;
    }
    /**
     * Listen for changes on the checked prop
     * @param {boolean} checked the checked state
     */
    ZeaSwitch.prototype.onCheckedChanged = function (checked) {
        this.element.shadowRoot.querySelector('input').checked = checked;
        this.updateElementClass();
        this.stateLabel = checked ? 'On' : 'Off';
    };
    /**
     * Listen for changes on the disabled prop
     * @param {boolean} disabled the disabled state
     */
    ZeaSwitch.prototype.onDisabledChanged = function (disabled) {
        this.element.shadowRoot.querySelector('input').disabled = disabled;
        this.updateElementClass();
    };
    /**
     * Update element class according to switch state
     */
    ZeaSwitch.prototype.updateElementClass = function () {
        this.elementClass = this.checked ? 'checked' : '';
        this.elementClass += this.disabled ? ' disabled ' : '';
    };
    /**
     * Change switch state on click
     */
    ZeaSwitch.prototype.toggleCheck = function () {
        if (!this.disabled) {
            this.checked = !this.checked;
        }
    };
    /**
     * Runs when component loads
     */
    ZeaSwitch.prototype.componentDidLoad = function () {
        this.onCheckedChanged(this.checked);
        this.onDisabledChanged(this.disabled);
    };
    /**
     * Main render function
     * @return {JSX} the generated html
     */
    ZeaSwitch.prototype.render = function () {
        var _this = this;
        return (h("div", { class: 'zea-switch ' + this.elementClass, onClick: function () {
                _this.toggleCheck();
            } }, h("span", { class: "zea-switch-wrap" }, h("span", { class: "zea-switch-track" }), h("span", { class: "zea-switch-button" }), h("span", { class: "zea-switch-label" }, this.stateLabel)), h("input", { type: "checkbox", name: this.name })));
    };
    Object.defineProperty(ZeaSwitch.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZeaSwitch, "watchers", {
        get: function () {
            return {
                "checked": ["onCheckedChanged"],
                "disabled": ["onDisabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return ZeaSwitch;
}());
ZeaSwitch.style = zeaSwitchCss;
export { ZeaCheckbox as zea_checkbox, ZeaSwitch as zea_switch };
