/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8896
() {

// Content script to bridge authentication between web app and extension
// This script runs in the web app context and communicates with the extension.
//
// The autoapply cloud browser authenticates via this SAME WEB_AUTH_LOGIN postMessage path: the backend,
// connected to the cloud browser over CDP, navigates to the web origin and posts WEB_AUTH_LOGIN carrying
// the single cloud_browser_session token (+ cloudBrowserSessionId/profileId). After the background
// persists it, it sends `extensionAuthStatus`, which we re-broadcast as EXTENSION_AUTH_STATUS so the
// backend can confirm authentication before closing+reopening the browser.

// Listen for messages from the web app
window.addEventListener('message', function (event) {
  // Only accept messages from the same origin (web app)
  if (event.origin !== window.location.origin) {
    return;
  }

  // Handle authentication messages from web app
  if (event.data.type === 'WEB_AUTH_LOGIN') {
    var _event$data = event.data,
      userData = _event$data.userData,
      authToken = _event$data.authToken,
      toClose = _event$data.toClose,
      cloudBrowserSessionId = _event$data.cloudBrowserSessionId,
      profileId = _event$data.profileId;
    // [AA-AUTH] the BidHub web app (or the CDP-driving backend) posted WEB_AUTH_LOGIN; forward it to the
    // background as `webLogin` so the extension authenticates. cloudBrowserSessionId/profileId are present
    // only on the autoapply cloud-browser-session path.
    console.log('[AA-AUTH] auth-bridge: WEB_AUTH_LOGIN received → forwarding webLogin', {
      hasAuthToken: !!authToken,
      authTokenLen: (authToken === null || authToken === void 0 ? void 0 : authToken.length) || 0,
      userId: userData === null || userData === void 0 ? void 0 : userData.id,
      hasSession: !!cloudBrowserSessionId
    });
    // Forward to extension background script
    chrome.runtime.sendMessage({
      message_type: 'webLogin',
      userData: userData,
      authToken: authToken,
      toClose: toClose,
      cloudBrowserSessionId: cloudBrowserSessionId,
      profileId: profileId
    }, function (response) {});
  } else if (event.data.type === 'WEB_AUTH_LOGOUT') {
    var _toClose = event.data.toClose;
    // Forward to extension background script
    chrome.runtime.sendMessage({
      message_type: 'webLogout',
      toClose: _toClose
    }, function (response) {});
  } else if (event.data.type === 'WEB_AUTH_TOKEN_REFRESH') {
    var _authToken = event.data.authToken;

    // Forward to extension background script
    chrome.runtime.sendMessage({
      message_type: 'webTokenRefresh',
      authToken: _authToken
    }, function (response) {});
  }
});

// Listen for messages from extension background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.message_type === 'extensionAuthStatus') {
    // setMessageToTab nests the payload under `data`. Forward auth status to the web app (and thus to the
    // CDP-driving backend listening for EXTENSION_AUTH_STATUS).
    var payload = message.data || {};
    window.postMessage({
      type: 'EXTENSION_AUTH_STATUS',
      isAuthenticated: payload.isAuthenticated,
      userData: payload.userData
    }, window.location.origin);
  }
});

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _core_content_general_auth_bridge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8896);
/* harmony import */ var _core_content_general_auth_bridge_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_content_general_auth_bridge_js__WEBPACK_IMPORTED_MODULE_0__);
// Moved to @bidhub/extension-core (shared with the autoapply extension).

})();

/******/ })()
;