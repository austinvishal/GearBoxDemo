import { r as registerInstance, h, H as Host } from './index-12ee0265.js';
import { g as getIonMode } from './ionic-global-9ae0f2dd.js';
import { o as openURL, c as createColorClasses } from './theme-74c22054.js';
var routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
var RouterLink = /** @class */ (function () {
    function RouterLink(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        this.onClick = function (ev) {
            openURL(_this.href, ev, _this.routerDirection);
        };
    }
    RouterLink.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        var attrs = {
            href: this.href,
            rel: this.rel,
            target: this.target
        };
        return (h(Host, { onClick: this.onClick, class: Object.assign(Object.assign({}, createColorClasses(this.color)), (_a = {}, _a[mode] = true, _a['ion-activatable'] = true, _a)) }, h("a", Object.assign({}, attrs), h("slot", null))));
    };
    return RouterLink;
}());
RouterLink.style = routerLinkCss;
export { RouterLink as ion_router_link };
