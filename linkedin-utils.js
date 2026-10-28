/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
/* unused harmony exports normalizeLinkedInJobUrl, isLinkedInEasyApplyButton */
function normalizeLinkedInJobUrl(url) {
  var _parsed$searchParams$, _parsed$pathname$matc;
  var parsed = new URL(url);
  var jobId = (_parsed$searchParams$ = parsed.searchParams.get('currentJobId')) !== null && _parsed$searchParams$ !== void 0 ? _parsed$searchParams$ : (_parsed$pathname$matc = parsed.pathname.match(/^\/jobs\/view\/(\d+)/)) === null || _parsed$pathname$matc === void 0 ? void 0 : _parsed$pathname$matc[1];
  if (jobId) {
    return "".concat(parsed.protocol, "//").concat(parsed.hostname, "/jobs/view/").concat(jobId);
  }
  return null;
}
function isLinkedInEasyApplyButton(applyButton) {
  if (!applyButton) return false;
  var buttonText = applyButton.textContent.split('\n').filter(function (line) {
    return line.trim().length > 0;
  }).join('').toLowerCase();
  return buttonText.includes('easy apply') || buttonText === 'easy apply';
}
/******/ })()
;