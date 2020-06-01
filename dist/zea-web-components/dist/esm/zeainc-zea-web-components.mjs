import { p as patchBrowser, b as bootstrapLazy } from './index-12ee0265.js';
import './ionic-global-9ae0f2dd.js';
import { g as globalScripts } from './app-globals-ab160a44.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy(JSON.parse("[[\"zea-app-shell\",[[1,\"zea-app-shell\",{\"logoUrl\":[1,\"logo-url\"],\"userData\":[8,\"user-data\"],\"session\":[8],\"leftPanelWidth\":[1,\"left-panel-width\"],\"rightPanelWidth\":[1,\"right-panel-width\"],\"leftProgressMessage\":[1,\"left-progress-message\"],\"centerProgressMessage\":[1,\"center-progress-message\"],\"rightProgressMessage\":[1,\"right-progress-message\"],\"centerProgressBar\":[8,\"center-progress-bar\"],\"leftProgressBar\":[8,\"left-progress-bar\"],\"rightProgressBar\":[8,\"right-progress-bar\"]},[[0,\"userRegistered\",\"userRegisteredHandler\"]]]]],[\"zea-dialog-drawing-settings\",[[1,\"zea-dialog-drawing-settings\",{\"allowClose\":[4,\"allow-close\"],\"shown\":[4],\"showLabels\":[4,\"show-labels\"],\"userData\":[8,\"user-data\"]},[[0,\"dialogClose\",\"todoCompletedHandler\"]]]]],[\"zea-file-system-browser\",[[1,\"zea-file-system-browser\",{\"project\":[8],\"folderId\":[1,\"folder-id\"],\"filter\":[1],\"folder\":[32],\"galleryFolder\":[32],\"isHighlighted\":[32],\"showProjectSettingsDialog\":[32],\"showAppStoreDialog\":[32],\"currentApp\":[32],\"currentAppReadmeTextContent\":[32],\"availableApps\":[32],\"readmeTextContent\":[32],\"fileAssociations\":[32]}]]],[\"zea-projects-browser\",[[1,\"zea-projects-browser\",{\"projectsClient\":[8,\"projects-client\"],\"projects\":[16],\"showCreateProjectDialog\":[32]}]]],[\"ion-select-popover\",[[2,\"ion-select-popover\",{\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"options\":[16]},[[0,\"ionChange\",\"onSelect\"]]]]],[\"zea-form-drawing-setup\",[[1,\"zea-form-drawing-setup\",{\"disciplines\":[16],\"scales\":[16]}]]],[{\"ios\":\"ion-action-sheet-ios\",\"md\":\"ion-action-sheet-md\"},[[2,\"ion-action-sheet\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"zea-tree-view\",[[1,\"zea-tree-view\",{\"rootItem\":[8,\"root-item\"],\"appData\":[8,\"app-data\"],\"mouseIsOver\":[32]},[[8,\"keydown\",\"onKeyDown\"]]]]],[{\"ios\":\"ion-alert-ios\",\"md\":\"ion-alert-md\"},[[2,\"ion-alert\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"buttons\":[16],\"inputs\":[1040],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-back-button-ios\",\"md\":\"ion-back-button-md\"},[[1,\"ion-back-button\",{\"color\":[1],\"defaultHref\":[1,\"default-href\"],\"disabled\":[516],\"icon\":[1],\"text\":[1],\"type\":[1]}]]],[{\"ios\":\"ion-fab-button-ios\",\"md\":\"ion-fab-button-md\"},[[1,\"ion-fab-button\",{\"color\":[1],\"activated\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"show\":[4],\"translucent\":[4],\"type\":[1],\"size\":[1]}]]],[{\"ios\":\"ion-loading-ios\",\"md\":\"ion-loading-md\"},[[2,\"ion-loading\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"message\":[1],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"spinner\":[1025],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-menu-button-ios\",\"md\":\"ion-menu-button-md\"},[[1,\"ion-menu-button\",{\"color\":[1],\"disabled\":[4],\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"type\":[1],\"visible\":[32]},[[32,\"ionMenuChange\",\"visibilityChanged\"],[32,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[{\"ios\":\"ion-picker-ios\",\"md\":\"ion-picker-md\"},[[2,\"ion-picker\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"columns\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"showBackdrop\":[4,\"show-backdrop\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"animated\":[4],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"getColumn\":[64]}]]],[\"ion-refresher-content\",[[0,\"ion-refresher-content\",{\"pullingIcon\":[1025,\"pulling-icon\"],\"pullingText\":[1,\"pulling-text\"],\"refreshingSpinner\":[1025,\"refreshing-spinner\"],\"refreshingText\":[1,\"refreshing-text\"]}]]],[{\"ios\":\"ion-toast-ios\",\"md\":\"ion-toast-md\"},[[1,\"ion-toast\",{\"overlayIndex\":[2,\"overlay-index\"],\"color\":[1],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"header\":[1],\"message\":[1],\"keyboardClose\":[4,\"keyboard-close\"],\"position\":[1],\"buttons\":[16],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"zea-popup-menu-item\",[[1,\"zea-popup-menu-item\",{\"clickHandler\":[16],\"startIcon\":[1,\"start-icon\"],\"endIcon\":[1,\"end-icon\"]}]]],[\"zea-toolbar-tool\",[[1,\"zea-toolbar-tool\",{\"data\":[8],\"isActive\":[4,\"is-active\"]},[[8,\"zeaToolbarToolClick\",\"zeaToolbarToolClickHandler\"]]]]],[{\"ios\":\"ion-card-ios\",\"md\":\"ion-card-md\"},[[1,\"ion-card\",{\"color\":[1],\"button\":[4],\"type\":[1],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1]}]]],[{\"ios\":\"ion-chip-ios\",\"md\":\"ion-chip-md\"},[[1,\"ion-chip\",{\"color\":[1],\"outline\":[4]}]]],[{\"ios\":\"ion-infinite-scroll-content-ios\",\"md\":\"ion-infinite-scroll-content-md\"},[[0,\"ion-infinite-scroll-content\",{\"loadingSpinner\":[1025,\"loading-spinner\"],\"loadingText\":[1,\"loading-text\"]}]]],[{\"ios\":\"ion-item-option-ios\",\"md\":\"ion-item-option-md\"},[[1,\"ion-item-option\",{\"color\":[1],\"disabled\":[4],\"download\":[1],\"expandable\":[4],\"href\":[1],\"rel\":[1],\"target\":[1],\"type\":[1]}]]],[{\"ios\":\"ion-menu-ios\",\"md\":\"ion-menu-md\"},[[1,\"ion-menu\",{\"contentId\":[513,\"content-id\"],\"menuId\":[513,\"menu-id\"],\"type\":[1025],\"disabled\":[1028],\"side\":[513],\"swipeGesture\":[4,\"swipe-gesture\"],\"maxEdgeStart\":[2,\"max-edge-start\"],\"isPaneVisible\":[32],\"isEndSide\":[32],\"isOpen\":[64],\"isActive\":[64],\"open\":[64],\"close\":[64],\"toggle\":[64],\"setOpen\":[64]},[[32,\"ionSplitPaneVisible\",\"onSplitPaneChanged\"],[2,\"click\",\"onBackdropClick\"]]]]],[{\"ios\":\"ion-modal-ios\",\"md\":\"ion-modal-md\"},[[2,\"ion-modal\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"animated\":[4],\"swipeToClose\":[4,\"swipe-to-close\"],\"presentingElement\":[16],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-popover-ios\",\"md\":\"ion-popover-md\"},[[2,\"ion-popover\",{\"delegate\":[16],\"overlayIndex\":[2,\"overlay-index\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"event\":[8],\"showBackdrop\":[4,\"show-backdrop\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-reorder-ios\",\"md\":\"ion-reorder-md\"},[[1,\"ion-reorder\",null,[[2,\"click\",\"onClick\"]]]]],[{\"ios\":\"ion-searchbar-ios\",\"md\":\"ion-searchbar-md\"},[[2,\"ion-searchbar\",{\"color\":[1],\"animated\":[4],\"autocomplete\":[1],\"autocorrect\":[1],\"cancelButtonIcon\":[1,\"cancel-button-icon\"],\"cancelButtonText\":[1,\"cancel-button-text\"],\"clearIcon\":[1,\"clear-icon\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"placeholder\":[1],\"searchIcon\":[1,\"search-icon\"],\"showCancelButton\":[1,\"show-cancel-button\"],\"spellcheck\":[4],\"type\":[1],\"value\":[1025],\"focused\":[32],\"noAnimate\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[{\"ios\":\"ion-segment-button-ios\",\"md\":\"ion-segment-button-md\"},[[1,\"ion-segment-button\",{\"disabled\":[4],\"layout\":[1],\"type\":[1],\"value\":[1],\"checked\":[32]}]]],[{\"ios\":\"ion-tab-button-ios\",\"md\":\"ion-tab-button-md\"},[[1,\"ion-tab-button\",{\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"layout\":[1025],\"selected\":[1028],\"tab\":[1],\"target\":[1]},[[16,\"ionTabBarChanged\",\"onTabBarChanged\"]]]]],[\"ion-app\",[[0,\"ion-app\"]]],[{\"ios\":\"ion-avatar-ios\",\"md\":\"ion-avatar-md\"},[[1,\"ion-avatar\"]]],[{\"ios\":\"ion-badge-ios\",\"md\":\"ion-badge-md\"},[[1,\"ion-badge\",{\"color\":[1]}]]],[{\"ios\":\"ion-buttons-ios\",\"md\":\"ion-buttons-md\"},[[2,\"ion-buttons\",{\"collapse\":[4]}]]],[{\"ios\":\"ion-card-content-ios\",\"md\":\"ion-card-content-md\"},[[0,\"ion-card-content\"]]],[{\"ios\":\"ion-card-header-ios\",\"md\":\"ion-card-header-md\"},[[1,\"ion-card-header\",{\"color\":[1],\"translucent\":[4]}]]],[{\"ios\":\"ion-card-subtitle-ios\",\"md\":\"ion-card-subtitle-md\"},[[1,\"ion-card-subtitle\",{\"color\":[1]}]]],[{\"ios\":\"ion-card-title-ios\",\"md\":\"ion-card-title-md\"},[[1,\"ion-card-title\",{\"color\":[1]}]]],[{\"ios\":\"ion-checkbox-ios\",\"md\":\"ion-checkbox-md\"},[[1,\"ion-checkbox\",{\"color\":[1],\"name\":[1],\"checked\":[1028],\"indeterminate\":[1028],\"disabled\":[4],\"value\":[1]}]]],[\"ion-col\",[[1,\"ion-col\",{\"offset\":[1],\"offsetXs\":[1,\"offset-xs\"],\"offsetSm\":[1,\"offset-sm\"],\"offsetMd\":[1,\"offset-md\"],\"offsetLg\":[1,\"offset-lg\"],\"offsetXl\":[1,\"offset-xl\"],\"pull\":[1],\"pullXs\":[1,\"pull-xs\"],\"pullSm\":[1,\"pull-sm\"],\"pullMd\":[1,\"pull-md\"],\"pullLg\":[1,\"pull-lg\"],\"pullXl\":[1,\"pull-xl\"],\"push\":[1],\"pushXs\":[1,\"push-xs\"],\"pushSm\":[1,\"push-sm\"],\"pushMd\":[1,\"push-md\"],\"pushLg\":[1,\"push-lg\"],\"pushXl\":[1,\"push-xl\"],\"size\":[1],\"sizeXs\":[1,\"size-xs\"],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"],\"sizeXl\":[1,\"size-xl\"]},[[9,\"resize\",\"onResize\"]]]]],[\"ion-content\",[[1,\"ion-content\",{\"color\":[1],\"fullscreen\":[4],\"forceOverscroll\":[1028,\"force-overscroll\"],\"scrollX\":[4,\"scroll-x\"],\"scrollY\":[4,\"scroll-y\"],\"scrollEvents\":[4,\"scroll-events\"],\"getScrollElement\":[64],\"scrollToTop\":[64],\"scrollToBottom\":[64],\"scrollByPoint\":[64],\"scrollToPoint\":[64]},[[8,\"appload\",\"onAppLoad\"],[2,\"click\",\"onClick\"]]]]],[{\"ios\":\"ion-datetime-ios\",\"md\":\"ion-datetime-md\"},[[1,\"ion-datetime\",{\"name\":[1],\"disabled\":[4],\"readonly\":[4],\"min\":[1025],\"max\":[1025],\"displayFormat\":[1,\"display-format\"],\"displayTimezone\":[1,\"display-timezone\"],\"pickerFormat\":[1,\"picker-format\"],\"cancelText\":[1,\"cancel-text\"],\"doneText\":[1,\"done-text\"],\"yearValues\":[8,\"year-values\"],\"monthValues\":[8,\"month-values\"],\"dayValues\":[8,\"day-values\"],\"hourValues\":[8,\"hour-values\"],\"minuteValues\":[8,\"minute-values\"],\"monthNames\":[1,\"month-names\"],\"monthShortNames\":[1,\"month-short-names\"],\"dayNames\":[1,\"day-names\"],\"dayShortNames\":[1,\"day-short-names\"],\"pickerOptions\":[16],\"placeholder\":[1],\"value\":[1025],\"isExpanded\":[32],\"open\":[64]}]]],[\"ion-fab\",[[1,\"ion-fab\",{\"horizontal\":[1],\"vertical\":[1],\"edge\":[4],\"activated\":[1028],\"close\":[64]}]]],[\"ion-fab-list\",[[1,\"ion-fab-list\",{\"activated\":[4],\"side\":[1]}]]],[{\"ios\":\"ion-footer-ios\",\"md\":\"ion-footer-md\"},[[4,\"ion-footer\",{\"translucent\":[4]}]]],[\"ion-grid\",[[1,\"ion-grid\",{\"fixed\":[4]}]]],[{\"ios\":\"ion-header-ios\",\"md\":\"ion-header-md\"},[[4,\"ion-header\",{\"collapse\":[1],\"translucent\":[4]}]]],[\"ion-img\",[[1,\"ion-img\",{\"alt\":[1],\"src\":[1],\"loadSrc\":[32],\"loadError\":[32]}]]],[\"ion-infinite-scroll\",[[0,\"ion-infinite-scroll\",{\"threshold\":[1],\"disabled\":[4],\"position\":[1],\"isLoading\":[32],\"complete\":[64]}]]],[{\"ios\":\"ion-input-ios\",\"md\":\"ion-input-md\"},[[2,\"ion-input\",{\"color\":[1],\"accept\":[1],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"autofocus\":[4],\"clearInput\":[4,\"clear-input\"],\"clearOnEdit\":[4,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"max\":[1],\"maxlength\":[2],\"min\":[1],\"minlength\":[2],\"multiple\":[4],\"name\":[1],\"pattern\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"step\":[1],\"size\":[2],\"type\":[1],\"value\":[1032],\"hasFocus\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[{\"ios\":\"ion-item-divider-ios\",\"md\":\"ion-item-divider-md\"},[[1,\"ion-item-divider\",{\"color\":[1],\"sticky\":[4]}]]],[{\"ios\":\"ion-item-group-ios\",\"md\":\"ion-item-group-md\"},[[0,\"ion-item-group\"]]],[{\"ios\":\"ion-item-options-ios\",\"md\":\"ion-item-options-md\"},[[0,\"ion-item-options\",{\"side\":[1],\"fireSwipeEvent\":[64]}]]],[\"ion-item-sliding\",[[0,\"ion-item-sliding\",{\"disabled\":[4],\"state\":[32],\"getOpenAmount\":[64],\"getSlidingRatio\":[64],\"open\":[64],\"close\":[64],\"closeOpened\":[64]}]]],[\"ion-menu-toggle\",[[1,\"ion-menu-toggle\",{\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"visible\":[32]},[[32,\"ionMenuChange\",\"visibilityChanged\"],[32,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[\"ion-nav\",[[1,\"ion-nav\",{\"delegate\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"animated\":[4],\"animation\":[16],\"rootParams\":[16],\"root\":[1],\"push\":[64],\"insert\":[64],\"insertPages\":[64],\"pop\":[64],\"popTo\":[64],\"popToRoot\":[64],\"removeIndex\":[64],\"setRoot\":[64],\"setPages\":[64],\"setRouteId\":[64],\"getRouteId\":[64],\"getActive\":[64],\"getByIndex\":[64],\"canGoBack\":[64],\"getPrevious\":[64]}]]],[\"ion-nav-link\",[[0,\"ion-nav-link\",{\"component\":[1],\"componentProps\":[16],\"routerDirection\":[1,\"router-direction\"]}]]],[{\"ios\":\"ion-note-ios\",\"md\":\"ion-note-md\"},[[1,\"ion-note\",{\"color\":[1]}]]],[{\"ios\":\"ion-progress-bar-ios\",\"md\":\"ion-progress-bar-md\"},[[1,\"ion-progress-bar\",{\"type\":[1],\"reversed\":[4],\"value\":[2],\"buffer\":[2],\"color\":[1]}]]],[{\"ios\":\"ion-range-ios\",\"md\":\"ion-range-md\"},[[1,\"ion-range\",{\"color\":[1],\"debounce\":[2],\"name\":[1],\"dualKnobs\":[4,\"dual-knobs\"],\"min\":[2],\"max\":[2],\"pin\":[4],\"snaps\":[4],\"step\":[2],\"ticks\":[4],\"disabled\":[4],\"value\":[1026],\"ratioA\":[32],\"ratioB\":[32],\"pressedKnob\":[32]}]]],[{\"ios\":\"ion-refresher-ios\",\"md\":\"ion-refresher-md\"},[[0,\"ion-refresher\",{\"pullMin\":[2,\"pull-min\"],\"pullMax\":[2,\"pull-max\"],\"closeDuration\":[1,\"close-duration\"],\"snapbackDuration\":[1,\"snapback-duration\"],\"pullFactor\":[2,\"pull-factor\"],\"disabled\":[4],\"nativeRefresher\":[32],\"state\":[32],\"complete\":[64],\"cancel\":[64],\"getProgress\":[64]}]]],[\"ion-reorder-group\",[[0,\"ion-reorder-group\",{\"disabled\":[4],\"state\":[32],\"complete\":[64]}]]],[\"ion-route\",[[0,\"ion-route\",{\"url\":[1],\"component\":[1],\"componentProps\":[16]}]]],[\"ion-route-redirect\",[[0,\"ion-route-redirect\",{\"from\":[1],\"to\":[1]}]]],[\"ion-router\",[[0,\"ion-router\",{\"root\":[1],\"useHash\":[4,\"use-hash\"],\"push\":[64],\"back\":[64],\"printDebug\":[64],\"navChanged\":[64]},[[8,\"popstate\",\"onPopState\"],[4,\"ionBackButton\",\"onBackButton\"]]]]],[\"ion-router-link\",[[1,\"ion-router-link\",{\"color\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1]}]]],[\"ion-router-outlet\",[[1,\"ion-router-outlet\",{\"mode\":[1025],\"delegate\":[16],\"animated\":[4],\"animation\":[16],\"swipeHandler\":[16],\"commit\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[\"ion-row\",[[1,\"ion-row\"]]],[{\"ios\":\"ion-segment-ios\",\"md\":\"ion-segment-md\"},[[1,\"ion-segment\",{\"color\":[1],\"disabled\":[4],\"scrollable\":[4],\"value\":[1025],\"activated\":[32]}]]],[{\"ios\":\"ion-select-ios\",\"md\":\"ion-select-md\"},[[1,\"ion-select\",{\"disabled\":[4],\"cancelText\":[1,\"cancel-text\"],\"okText\":[1,\"ok-text\"],\"placeholder\":[1],\"name\":[1],\"selectedText\":[1,\"selected-text\"],\"multiple\":[4],\"interface\":[1],\"interfaceOptions\":[8,\"interface-options\"],\"compareWith\":[1,\"compare-with\"],\"value\":[1032],\"isExpanded\":[32],\"open\":[64]}]]],[\"ion-select-option\",[[1,\"ion-select-option\",{\"disabled\":[4],\"value\":[8]}]]],[\"ion-skeleton-text\",[[1,\"ion-skeleton-text\",{\"animated\":[4]}]]],[\"ion-slide\",[[0,\"ion-slide\"]]],[{\"ios\":\"ion-slides-ios\",\"md\":\"ion-slides-md\"},[[4,\"ion-slides\",{\"options\":[8],\"pager\":[4],\"scrollbar\":[4],\"update\":[64],\"updateAutoHeight\":[64],\"slideTo\":[64],\"slideNext\":[64],\"slidePrev\":[64],\"getActiveIndex\":[64],\"getPreviousIndex\":[64],\"length\":[64],\"isEnd\":[64],\"isBeginning\":[64],\"startAutoplay\":[64],\"stopAutoplay\":[64],\"lockSwipeToNext\":[64],\"lockSwipeToPrev\":[64],\"lockSwipes\":[64],\"getSwiper\":[64]}]]],[{\"ios\":\"ion-split-pane-ios\",\"md\":\"ion-split-pane-md\"},[[1,\"ion-split-pane\",{\"contentId\":[513,\"content-id\"],\"disabled\":[4],\"when\":[8],\"visible\":[32]}]]],[\"ion-tab\",[[1,\"ion-tab\",{\"active\":[1028],\"delegate\":[16],\"tab\":[1],\"component\":[1],\"setActive\":[64]}]]],[{\"ios\":\"ion-tab-bar-ios\",\"md\":\"ion-tab-bar-md\"},[[1,\"ion-tab-bar\",{\"color\":[1],\"selectedTab\":[1,\"selected-tab\"],\"translucent\":[4],\"keyboardVisible\":[32]},[[8,\"keyboardWillHide\",\"onKeyboardWillHide\"],[8,\"keyboardWillShow\",\"onKeyboardWillShow\"]]]]],[\"ion-tabs\",[[1,\"ion-tabs\",{\"useRouter\":[1028,\"use-router\"],\"selectedTab\":[32],\"select\":[64],\"getTab\":[64],\"getSelected\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[\"ion-text\",[[1,\"ion-text\",{\"color\":[1]}]]],[{\"ios\":\"ion-textarea-ios\",\"md\":\"ion-textarea-md\"},[[2,\"ion-textarea\",{\"color\":[1],\"autocapitalize\":[1],\"autofocus\":[4],\"clearOnEdit\":[1028,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"cols\":[2],\"rows\":[2],\"wrap\":[1],\"autoGrow\":[4,\"auto-grow\"],\"value\":[1025],\"hasFocus\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[\"ion-thumbnail\",[[1,\"ion-thumbnail\"]]],[{\"ios\":\"ion-title-ios\",\"md\":\"ion-title-md\"},[[1,\"ion-title\",{\"color\":[1],\"size\":[1]}]]],[{\"ios\":\"ion-toggle-ios\",\"md\":\"ion-toggle-md\"},[[1,\"ion-toggle\",{\"color\":[1],\"name\":[1],\"checked\":[1028],\"disabled\":[4],\"value\":[1],\"activated\":[32]}]]],[{\"ios\":\"ion-toolbar-ios\",\"md\":\"ion-toolbar-md\"},[[1,\"ion-toolbar\",{\"color\":[1]},[[0,\"ionStyle\",\"childrenStyle\"]]]]],[\"ion-virtual-scroll\",[[0,\"ion-virtual-scroll\",{\"approxItemHeight\":[2,\"approx-item-height\"],\"approxHeaderHeight\":[2,\"approx-header-height\"],\"approxFooterHeight\":[2,\"approx-footer-height\"],\"headerFn\":[16],\"footerFn\":[16],\"items\":[16],\"itemHeight\":[16],\"headerHeight\":[16],\"footerHeight\":[16],\"renderItem\":[16],\"renderHeader\":[16],\"renderFooter\":[16],\"nodeRender\":[16],\"domRender\":[16],\"totalHeight\":[32],\"positionForItem\":[64],\"checkRange\":[64],\"checkEnd\":[64]},[[9,\"resize\",\"onResize\"]]]]],[\"zea-dropdown-menu\",[[1,\"zea-dropdown-menu\",{\"appData\":[8,\"app-data\"],\"actions\":[32],\"menuItems\":[32]},[[4,\"keydown\",\"keydownHandler\"]]]]],[\"zea-fab-button\",[[1,\"zea-fab-button\",{\"disabled\":[4]}]]],[\"zea-input-color\",[[1,\"zea-input-color\",{\"test\":[1]}]]],[\"zea-input-date\",[[1,\"zea-input-date\",{\"test\":[1]}]]],[\"zea-input-photo\",[[1,\"zea-input-photo\",{\"test\":[1]}]]],[\"zea-menu-color\",[[1,\"zea-menu-color\",{\"color\":[1],\"fgColor\":[1,\"fg-color\"]}]]],[\"zea-menu-colorpicker\",[[1,\"zea-menu-colorpicker\",{\"shown\":[4]}]]],[\"zea-menu-subitems\",[[1,\"zea-menu-subitems\",{\"shown\":[4],\"type\":[1],\"parentItem\":[8,\"parent-item\"],\"radioSelect\":[4,\"radio-select\"],\"rootMenu\":[16]},[[8,\"zeaMenuItemClick\",\"windowClickHandler\"],[8,\"zeaMenuItemPressed\",\"windowItemPressHandler\"],[9,\"mouseup\",\"handleWindowMouseup\"]]]]],[\"zea-param-widget-bbox\",[[1,\"zea-param-widget-bbox\",{\"parameter\":[8],\"appData\":[8,\"app-data\"]}]]],[\"zea-param-widget-boolean\",[[1,\"zea-param-widget-boolean\",{\"parameter\":[8],\"checked\":[4],\"appData\":[8,\"app-data\"]}]]],[\"zea-param-widget-code\",[[0,\"zea-param-widget-code\",{\"parameter\":[8],\"appData\":[8,\"app-data\"],\"editorHeight\":[32]},[[0,\"keydown\",\"keydownHandler\"]]]]],[\"zea-param-widget-color\",[[1,\"zea-param-widget-color\",{\"parameter\":[8],\"appData\":[8,\"app-data\"],\"sampleColor\":[32]},[[9,\"resize\",\"handlewindowResize\"]]]]],[\"zea-param-widget-material-color\",[[1,\"zea-param-widget-material-color\",{\"parameter\":[8],\"appData\":[8,\"app-data\"],\"sampleColor\":[32]},[[9,\"resize\",\"handlewindowResize\"]]]]],[\"zea-param-widget-number\",[[1,\"zea-param-widget-number\",{\"parameter\":[8],\"inputType\":[1,\"input-type\"],\"appData\":[8,\"app-data\"],\"value\":[8],\"range\":[32],\"step\":[32]}]]],[\"zea-param-widget-string\",[[1,\"zea-param-widget-string\",{\"parameter\":[8],\"appData\":[8,\"app-data\"]}]]],[\"zea-param-widget-vec2\",[[1,\"zea-param-widget-vec2\",{\"parameter\":[8],\"appData\":[8,\"app-data\"],\"xValue\":[32],\"yValue\":[32]}]]],[\"zea-param-widget-vec3\",[[1,\"zea-param-widget-vec3\",{\"parameter\":[8],\"appData\":[8,\"app-data\"],\"xValue\":[32],\"yValue\":[32],\"zValue\":[32]}]]],[\"zea-param-widget-vec4\",[[1,\"zea-param-widget-vec4\",{\"parameter\":[8],\"appData\":[8,\"app-data\"],\"xValue\":[32],\"yValue\":[32],\"zValue\":[32],\"tValue\":[32]}]]],[\"zea-param-widget-xfo\",[[1,\"zea-param-widget-xfo\",{\"parameter\":[8],\"appData\":[8,\"app-data\"]}]]],[\"zea-parameter-container\",[[1,\"zea-parameter-container\",{\"parameterOwner\":[8,\"parameter-owner\"],\"appData\":[8,\"app-data\"]}]]],[\"zea-popup-menu\",[[1,\"zea-popup-menu\",{\"anchorElement\":[16],\"shown\":[4],\"topOffset\":[1,\"top-offset\"],\"leftOffset\":[1,\"left-offset\"],\"bbox\":[32],\"node\":[32]},[[8,\"click\",\"handleClick\"]]]]],[\"zea-toolbar\",[[1,\"zea-toolbar\",{\"tools\":[8]},[[1,\"mousedown\",\"mousedownHandler\"],[5,\"mouseup\",\"mouseupHandler\"],[5,\"mousemove\",\"mousemoveHandler\"]]]]],[\"zea-toolbar-colorpicker\",[[1,\"zea-toolbar-colorpicker\",{\"data\":[8],\"displayChildren\":[4,\"display-children\"]}]]],[\"zea-toolbar-toolset\",[[1,\"zea-toolbar-toolset\",{\"data\":[8]},[[8,\"zeaToolbarToolClick\",\"zeaToolbarToolClickHandler\"]]]]],[{\"ios\":\"ion-picker-column-ios\",\"md\":\"ion-picker-column-md\"},[[0,\"ion-picker-column\",{\"col\":[16]}]]],[\"zea-form-disciplines-settings_2\",[[1,\"zea-form-disciplines-settings\",{\"contentId\":[1,\"content-id\"],\"disciplines\":[8]}],[1,\"zea-form-measurements-settings\",{\"test\":[1]}]]],[\"zea-input-select_2\",[[1,\"zea-input-select\",{\"name\":[1],\"value\":[8],\"label\":[1],\"invalidMessage\":[1,\"invalid-message\"],\"required\":[4],\"isValid\":[4,\"is-valid\"],\"autoValidate\":[4,\"auto-validate\"],\"invalidMessageShown\":[4,\"invalid-message-shown\"],\"showLabel\":[4,\"show-label\"],\"optionsShown\":[4,\"options-shown\"],\"selectCallback\":[8,\"select-callback\"]},[[6,\"click\",\"handleClick\"]]],[1,\"zea-input-select-item\",{\"value\":[8]}]]],[\"zea-tree-item-element\",[[1,\"zea-tree-item-element\",{\"itemContainer\":[8,\"item-container\"],\"label\":[1],\"isRoot\":[4,\"is-root\"],\"isTreeItem\":[4,\"is-tree-item\"],\"isSelected\":[4,\"is-selected\"],\"isVisible\":[4,\"is-visible\"],\"isHighlighted\":[4,\"is-highlighted\"],\"treeItem\":[8,\"tree-item\"],\"appData\":[8,\"app-data\"],\"isExpanded\":[4,\"is-expanded\"],\"childItems\":[32]}]]],[\"zea-progress-bar\",[[1,\"zea-progress-bar\",{\"type\":[1],\"percent\":[8],\"size\":[8],\"color\":[8],\"backgroundColor\":[8,\"background-color\"],\"indeterminateAnimation\":[8,\"indeterminate-animation\"]}]]],[\"zea-breadcrumbs_3\",[[1,\"zea-breadcrumbs\",{\"project\":[8],\"folder\":[8]}],[1,\"zea-images-gallery\",{\"featured\":[2],\"columns\":[2],\"folder\":[16],\"zoomedImageClass\":[32],\"zoomedImageUrl\":[32],\"zoomedTop\":[32],\"zoomedLeft\":[32],\"zoomedWidth\":[32],\"zoomedHeight\":[32],\"zoomedOpacity\":[32],\"bbox\":[32]}],[1,\"zea-markdown-viewer\",{\"mdText\":[1,\"md-text\"]}]]],[{\"ios\":\"ion-list-header_3-ios\",\"md\":\"ion-list-header_3-md\"},[[1,\"ion-list-header\",{\"color\":[1],\"lines\":[1]}],[1,\"ion-radio\",{\"color\":[1],\"name\":[1],\"disabled\":[4],\"value\":[8],\"checked\":[32]}],[0,\"ion-radio-group\",{\"allowEmptySelection\":[4,\"allow-empty-selection\"],\"name\":[1],\"value\":[1032]}]]],[\"ion-spinner\",[[1,\"ion-spinner\",{\"color\":[1],\"duration\":[2],\"name\":[1],\"paused\":[4]}]]],[\"zea-copy-link_2\",[[1,\"zea-copy-link\",{\"link\":[1],\"tooltipIsVisible\":[4,\"tooltip-is-visible\"],\"tooltipText\":[1,\"tooltip-text\"]}],[1,\"zea-qr-code\",{\"content\":[1],\"scale\":[2]}]]],[\"ion-ripple-effect\",[[1,\"ion-ripple-effect\",{\"type\":[1],\"addRipple\":[64]}]]],[{\"ios\":\"ion-button_2-ios\",\"md\":\"ion-button_2-md\"},[[1,\"ion-button\",{\"color\":[1],\"buttonType\":[1025,\"button-type\"],\"disabled\":[516],\"expand\":[513],\"fill\":[1537],\"routerDirection\":[1,\"router-direction\"],\"download\":[1],\"href\":[1],\"rel\":[1],\"shape\":[513],\"size\":[513],\"strong\":[4],\"target\":[1],\"type\":[1]}],[1,\"zea-thumbnail\",{\"zeaModelInstance\":[8,\"zea-model-instance\"],\"icon\":[8],\"zeaSession\":[8,\"zea-session\"],\"isSelected\":[32],\"fileProgress\":[32]}]]],[\"zea-tabs\",[[1,\"zea-tabs\",{\"orientation\":[1],\"density\":[1]},[[0,\"click\",\"clickHandler\"]]]]],[\"zea-scroll-pane\",[[1,\"zea-scroll-pane\",null,[[9,\"resize\",\"onResize\"],[9,\"mouseup\",\"onMouseUp\"],[9,\"mousemove\",\"onMouseMove\"]]]]],[\"zea-dialog\",[[1,\"zea-dialog\",{\"shown\":[4],\"width\":[1],\"allowClose\":[4,\"allow-close\"],\"showBackdrop\":[4,\"show-backdrop\"],\"addPadding\":[4,\"add-padding\"],\"prompt\":[64]}]]],[\"ion-icon_2\",[[1,\"zea-icon\",{\"type\":[1],\"name\":[1],\"size\":[2]}],[1,\"ion-icon\",{\"mode\":[1025],\"color\":[1],\"ariaLabel\":[1537,\"aria-label\"],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[1],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"svgContent\":[32],\"isVisible\":[32]}]]],[\"zea-button_4\",[[1,\"zea-form\",{\"submitText\":[1,\"submit-text\"],\"validate\":[4],\"isValid\":[4,\"is-valid\"],\"formValue\":[8,\"form-value\"],\"submitCallback\":[8,\"submit-callback\"]}],[1,\"zea-input\",{\"name\":[1],\"type\":[1],\"value\":[8],\"label\":[1],\"invalidMessage\":[1,\"invalid-message\"],\"required\":[4],\"isValid\":[4,\"is-valid\"],\"autoValidate\":[4,\"auto-validate\"],\"invalidMessageShown\":[4,\"invalid-message-shown\"],\"showLabel\":[4,\"show-label\"],\"photoBase64\":[1,\"photo-base-6-4\"],\"colorPopupShown\":[4,\"color-popup-shown\"],\"colorPopupAlign\":[1,\"color-popup-align\"],\"colorOptions\":[16],\"selectedColor\":[8,\"selected-color\"]},[[6,\"click\",\"handleClick\"]]],[1,\"zea-input-text\",{\"name\":[1],\"value\":[8],\"label\":[1],\"invalidMessage\":[1,\"invalid-message\"],\"required\":[4],\"disabled\":[4],\"isValid\":[4,\"is-valid\"],\"autoValidate\":[4,\"auto-validate\"],\"invalidMessageShown\":[4,\"invalid-message-shown\"],\"showLabel\":[4,\"show-label\"]}],[1,\"zea-button\",{\"htmlContent\":[1,\"html-content\"],\"variant\":[1],\"disabled\":[4],\"color\":[4],\"density\":[1]}]]],[\"zea-dialog-share_6\",[[1,\"zea-user-chip-set\",{\"showImages\":[4,\"show-images\"],\"initialZIndex\":[2,\"initial-z-index\"],\"session\":[8],\"overflowLimit\":[8,\"overflow-limit\"],\"overflowShown\":[32],\"userDatas\":[32],\"shownOverflowEntry\":[32]}],[1,\"zea-dialog-share\",{\"shown\":[4]},[[0,\"dialogClose\",\"dialogCloseHandler\"]]],[1,\"zea-navigation-drawer\",{\"shown\":[4]},[[6,\"click\",\"handleClick\"]]],[1,\"zea-panel-progress-bar\",{\"progressBar\":[8,\"progress-bar\"]}],[1,\"zea-input-search\",{\"placeholder\":[1]}],[1,\"zea-layout\",{\"cellCount\":[2,\"cell-count\"],\"orientation\":[1],\"resizeCellA\":[4,\"resize-cell-a\"],\"resizeCellC\":[4,\"resize-cell-c\"],\"cellASize\":[2,\"cell-a-size\"],\"cellCSize\":[2,\"cell-c-size\"],\"resizeInterval\":[2,\"resize-interval\"],\"showBorders\":[4,\"show-borders\"],\"error\":[32],\"prevOffset\":[32],\"minimumGap\":[32],\"maximunGap\":[32],\"activeHandle\":[32]},[[5,\"mouseup\",\"onHandleMouseUp\"],[5,\"mousemove\",\"mouseMoveHandler\"]]]]],[{\"ios\":\"ion-item_3-ios\",\"md\":\"ion-item_3-md\"},[[1,\"ion-item\",{\"color\":[1],\"button\":[4],\"detail\":[4],\"detailIcon\":[1,\"detail-icon\"],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"lines\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"type\":[1],\"multipleInputs\":[32]},[[0,\"ionStyle\",\"itemStyle\"]]],[2,\"ion-label\",{\"color\":[1],\"position\":[1],\"noAnimate\":[32]}],[0,\"ion-list\",{\"lines\":[1],\"inset\":[4],\"closeSlidingItems\":[64]}]]],[{\"ios\":\"ion-backdrop-ios\",\"md\":\"ion-backdrop-md\"},[[1,\"ion-backdrop\",{\"visible\":[4],\"tappable\":[4],\"stopPropagation\":[4,\"stop-propagation\"]},[[2,\"touchstart\",\"onTouchStart\"],[2,\"click\",\"onMouseDown\"],[2,\"mousedown\",\"onMouseDown\"]]]]],[\"zea-checkbox_2\",[[1,\"zea-checkbox\",{\"name\":[1],\"disabled\":[4],\"checked\":[4],\"elementClass\":[32]}],[1,\"zea-switch\",{\"name\":[1],\"disabled\":[4],\"checked\":[4],\"stateLabel\":[1,\"state-label\"],\"elementClass\":[32]}]]],[\"zea-menu_3\",[[1,\"zea-menu\",{\"leftOffset\":[1,\"left-offset\"],\"topOffset\":[1,\"top-offset\"],\"type\":[1],\"shown\":[4],\"showAnchor\":[4,\"show-anchor\"],\"anchorIcon\":[1,\"anchor-icon\"],\"contextualAlign\":[1,\"contextual-align\"]},[[1,\"mouseup\",\"handleClick\"],[8,\"zeaMenuItemClick\",\"handleItemClick\"],[1,\"mousedown\",\"mousedownHandler\"],[5,\"mousemove\",\"mousemoveHandler\"]]],[1,\"zea-menu-separator\",{\"class\":[1],\"orientation\":[1]}],[1,\"zea-menu-item\",{\"switch\":[4],\"active\":[4],\"hasCheckbox\":[4,\"has-checkbox\"],\"checked\":[4],\"callback\":[8],\"shown\":[4],\"allowHover\":[4,\"allow-hover\"],\"hotkey\":[1],\"type\":[1],\"hasSubitems\":[4,\"has-subitems\"],\"rootMenu\":[16]},[[8,\"zeaMenuItemClick\",\"windowClickHandler\"],[9,\"mouseup\",\"handleWindowMouseup\"],[4,\"keydown\",\"keydownHandler\"]]]]],[\"zea-dialog-profile_4\",[[1,\"zea-user-card\",{\"userData\":[8,\"user-data\"],\"isCurrentUser\":[4,\"is-current-user\"],\"collapsible\":[4],\"additionalDataShown\":[4,\"additional-data-shown\"],\"density\":[1]}],[1,\"zea-user-chip\",{\"isCurrentUser\":[4,\"is-current-user\"],\"isActive\":[4,\"is-active\"],\"showImages\":[4,\"show-images\"],\"userData\":[8,\"user-data\"],\"density\":[1],\"showTooltip\":[4,\"show-tooltip\"],\"showProfileCard\":[4,\"show-profile-card\"],\"profileCardShown\":[4,\"profile-card-shown\"],\"profileCardAlign\":[1,\"profile-card-align\"]},[[6,\"click\",\"handleClick\"]]],[1,\"zea-dialog-profile\",{\"allowClose\":[4,\"allow-close\"],\"shown\":[4],\"showLabels\":[4,\"show-labels\"],\"userData\":[8,\"user-data\"]},[[0,\"dialogClose\",\"todoCompletedHandler\"],[0,\"userRegistered\",\"userRegisteredHandler\"]]],[1,\"zea-form-profile\",{\"welcomeHtml\":[1,\"welcome-html\"],\"submitButtonText\":[1,\"submit-button-text\"],\"showLabels\":[4,\"show-labels\"],\"userData\":[8,\"user-data\"]}]]]]"), options);
});
