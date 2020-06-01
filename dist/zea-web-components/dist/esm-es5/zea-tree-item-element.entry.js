import { r as registerInstance, h, d as getElement } from './index-12ee0265.js';
import './global-eddac5e6.js';
import './index-ee0e95b8.js';
import './events-a71dfb91.js';
import './buffer-es6-4f6a9935.js';
import { y, d as de } from './zea-ux.esm-7961f302.js';
var zeaTreeItemElementCss = ":host{display:block;font-size:14px}:host,input,button,select,textarea{font-family:'Roboto', sans-serif}.wrap{opacity:0.7;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.wrap.visible{opacity:1}.header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:4px 0;position:relative;left:-7px}.arrow{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:2px}.label{white-space:nowrap}.toggle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:1.2em;margin:0 1px 0 4px}.children{padding-left:19px;border-left:1px dotted gray}zea-tree-item-element{margin-left:16px}zea-tree-item-element.has-children{margin-left:0}.zea-tree-item-label{padding:3px 5px;border-radius:4px;border:1px solid transparent;margin-left:22px}.is-tree-item .zea-tree-item-label{margin-left:0}.highlighted .zea-tree-item-label{background-color:var(\n    --treeview-highlight-bg-color,\n    var(--color-secondary-3)\n  );border:1px solid var(--treeview-highlight-color, var(--color-secondary-1))}.selected .zea-tree-item-label{background-color:var(--treeview-highlight-color, var(--color-secondary-1));border:1px solid var(--treeview-highlight-color, var(--color-secondary-1))}";
var ZeaTreeItemElement = /** @class */ (function () {
    function ZeaTreeItemElement(hostRef) {
        registerInstance(this, hostRef);
        this.label = 'Loading...';
        this.isRoot = false;
        this.isTreeItem = false;
        this.isSelected = false;
        this.isVisible = false;
        this.isHighlighted = false;
        this.isExpanded = false;
        this.childItems = [];
    }
    /**
     * Placeholder comment
     */
    ZeaTreeItemElement.prototype.treeItemChanged = function () {
        if (this.treeItem) {
            this.initTreeItem();
        }
    };
    /**
     * Placeholder comment
     */
    ZeaTreeItemElement.prototype.componentWillLoad = function () {
        if (this.treeItem) {
            this.initTreeItem();
        }
    };
    /**
     * Placeholder comment
     */
    ZeaTreeItemElement.prototype.componentDidLoad = function () {
        this.updateSelected();
        this.updateVisibility();
        this.updateHighlight();
        if (this.childItems.length)
            this.rootElement.classList.add('has-children');
        else
            this.rootElement.classList.remove('has-children');
        this.treeItem.titleElement = this.rootElement;
    };
    /**
     * Placeholder comment
     */
    ZeaTreeItemElement.prototype.initTreeItem = function () {
        var _this = this;
        // Name
        this.label = this.treeItem.getName();
        this.nameChangedId = this.treeItem.nameChanged.connect(function () {
            _this.label = _this.treeItem.getName();
        });
        // Selection
        this.updateSelectedId = this.treeItem.selectedChanged.connect(this.updateSelected.bind(this));
        if (typeof this.treeItem.getChildren === 'function') {
            this.isTreeItem = true;
            this.childItems = this.treeItem.getChildren();
            // Visibility
            this.updateVisibilityId = this.treeItem.visibilityChanged.connect(this.updateVisibility.bind(this));
        }
        else {
            this.isTreeItem = false;
            this.isVisible = true;
        }
        // Highlights
        if ('highlightChanged' in this.treeItem) {
            this.updateHighlightId = this.treeItem.highlightChanged.connect(this.updateHighlight.bind(this));
        }
    };
    /**
     * Placeholder comment
     */
    ZeaTreeItemElement.prototype.updateSelected = function () {
        if ('getSelected' in this.treeItem)
            this.isSelected = this.treeItem.getSelected();
    };
    /**
     * Placeholder comment
     */
    ZeaTreeItemElement.prototype.updateVisibility = function () {
        if ('getVisible' in this.treeItem) {
            this.isVisible = this.treeItem.getVisible();
        }
    };
    /**
     * Placeholder comment
     */
    ZeaTreeItemElement.prototype.updateHighlight = function () {
        if ('isHighlighted' in this.treeItem) {
            this.isHighlighted = this.treeItem.isHighlighted();
            if (this.isHighlighted && 'getHighlight' in this.treeItem) {
                var highlightColor = this.treeItem.getHighlight();
                var bgColor = highlightColor.lerp(new y(0.75, 0.75, 0.75, 0), 0.5);
                this.itemContainer.style.setProperty('--treeview-highlight-bg-color', bgColor.toHex() + "60" // add transparency
                );
                this.itemContainer.style.setProperty('--treeview-highlight-color', highlightColor.toHex());
            }
        }
    };
    /**
     * Placeholder comment
     */
    ZeaTreeItemElement.prototype.toggleChildren = function () {
        this.isExpanded = !this.isExpanded;
    };
    /**
     * Placeholder comment
     */
    ZeaTreeItemElement.prototype.onVisibilityToggleClick = function () {
        var visibleParam = this.treeItem.getParameter('Visible');
        if (this.appData && this.appData.undoRedoManager) {
            var change = new de(visibleParam, !visibleParam.getValue());
            this.appData.undoRedoManager.addChange(change);
        }
        else {
            visibleParam.setValue(!visibleParam.getValue());
        }
    };
    /**
     * Placeholder comment
     * @param {any} e The event object
     */
    ZeaTreeItemElement.prototype.onLabelClick = function (e) {
        if (!this.appData || !this.appData.selectionManager) {
            this.treeItem.setSelected(!this.treeItem.getSelected());
            return;
        }
        if (this.appData.selectionManager.pickingModeActive()) {
            this.appData.selectionManager.pick(this.treeItem);
            return;
        }
        this.appData.selectionManager.toggleItemSelection(this.treeItem, !e.ctrlKey);
    };
    /**
     * Main render method for the component
     * @return {JSX} The generated markup
     */
    ZeaTreeItemElement.prototype.render = function () {
        var _this = this;
        return (h("div", { class: {
                wrap: true,
                'has-children': this.childItems.length,
                selected: this.isSelected,
                visible: this.isVisible,
                highlighted: this.isHighlighted,
                'is-tree-item': this.isTreeItem,
            }, style: { display: 'block' }, ref: function (el) { return (_this.itemContainer = el); } }, h("div", { class: "header" }, h("div", { class: "arrow", style: { display: this.childItems.length > 0 ? 'block' : 'none' }, onClick: function () { return _this.toggleChildren(); } }, h("span", null, this.isExpanded ? (h("zea-icon", { name: "caret-down", size: 12 })) : (h("zea-icon", { name: "caret-forward", size: 12 })))), this.isTreeItem && (h("div", { class: "toggle", onClick: this.onVisibilityToggleClick.bind(this) }, h("zea-icon", { name: this.isVisible ? 'eye-outline' : 'eye-off-outline', ref: function (el) { return (_this.visibilityIcon = el); }, size: 16 }))), h("div", { class: "zea-tree-item-label", onClick: this.onLabelClick.bind(this) }, this.label)), this.isTreeItem && (h("div", { class: "children", style: { display: this.isExpanded ? 'block' : 'none' } }, this.isExpanded &&
            this.childItems.map(function (child) { return (h("zea-tree-item-element", { treeItem: child, appData: _this.appData })); })))));
    };
    Object.defineProperty(ZeaTreeItemElement.prototype, "rootElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZeaTreeItemElement, "watchers", {
        get: function () {
            return {
                "treeItem": ["treeItemChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return ZeaTreeItemElement;
}());
ZeaTreeItemElement.style = zeaTreeItemElementCss;
export { ZeaTreeItemElement as zea_tree_item_element };
