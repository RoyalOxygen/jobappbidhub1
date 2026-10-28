/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 382
() {

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function getVisibleScrollRegion(el) {
  var elRect = el.getBoundingClientRect();

  // Part of element that is currently on screen (in px)
  var visibleTopOnScreen = Math.max(elRect.top, 0);
  var visibleBottomOnScreen = Math.min(elRect.bottom, window.innerHeight);

  // Convert that into scroll-space coordinates (px)
  var scrollTop = el.scrollTop + (visibleTopOnScreen - elRect.top);
  var scrollBottom = el.scrollTop + (visibleBottomOnScreen - elRect.top);
  var scrollHeight = el.scrollHeight;

  // Convert to percentage of total content height
  var topPercent = scrollTop / scrollHeight;
  var bottomPercent = scrollBottom / scrollHeight;

  // Clamp 0 → 1
  topPercent = Math.max(0, Math.min(1, topPercent));
  bottomPercent = Math.max(0, Math.min(1, bottomPercent));
  return {
    top: topPercent,
    bottom: bottomPercent
  };
}
function getInputsOffset(inputElements) {
  if (inputElements.length === 0) {
    return 0;
  }
  var centerYOffsets = inputElements.map(function (input) {
    var rect = input.getBoundingClientRect();
    return rect.top + rect.height / 2;
  });
  var averageOffset = centerYOffsets.reduce(function (sum, offset) {
    return sum + offset;
  }, 0) / centerYOffsets.length;
  return averageOffset;
}

// Store previous screenshot state
var previousScreenshotState = null;

// Check if an element is visible
function isElementVisible(element) {
  var rect = element.getBoundingClientRect();
  var style = window.getComputedStyle(element);

  // Check if element has dimensions
  if (rect.width === 0 || rect.height === 0) {
    return false;
  }

  // Check if element is hidden via CSS
  if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
    return false;
  }

  // Check if element is actually in the DOM and has offset dimensions
  if (element.offsetWidth === 0 || element.offsetHeight === 0) {
    return false;
  }
  return true;
}

// Get all input elements within an element
function getInputElements() {
  return Array.from(document.querySelectorAll('input, textarea, select, label, fieldset')).filter(isElementVisible);
}

// Check if it's the same screen by comparing with previous state
function isSameScreen() {
  // If no previous state, this is a new screen
  if (!previousScreenshotState) {
    return false;
  }
  var currentUrl = window.location.href;
  var _previousScreenshotSt = previousScreenshotState,
    prevInputs = _previousScreenshotSt.inputElements,
    prevUrl = _previousScreenshotSt.url;

  // Check if URL has changed
  if (currentUrl !== prevUrl) {
    return false;
  }
  // Check if more than 70% of input elements have disappeared or become hidden
  if (prevInputs.length > 0) {
    var stillVisibleInputs = prevInputs.filter(function (input) {
      return input.isConnected && document.contains(input) && isElementVisible(input);
    });
    var disappearanceRate = (prevInputs.length - stillVisibleInputs.length) / prevInputs.length;

    // If more than 70% disappeared or became hidden, it's a different screen
    if (disappearanceRate > 0.7) {
      return false;
    }
  }
  return true;
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var messageType = request.message_type;
  if (messageType === 'screenshot') {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var sameScreen, inputElements, currentUrl, offset, screenHeight;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            try {
              sameScreen = isSameScreen(); // Get current input elements for state tracking
              inputElements = getInputElements();
              currentUrl = window.location.href; // Store current screenshot state
              previousScreenshotState = {
                inputElements: inputElements,
                url: currentUrl
              };
              offset = getInputsOffset(inputElements);
              screenHeight = window.innerHeight;
              sendResponse({
                success: true,
                region: {
                  top: offset - screenHeight / 2,
                  bottom: offset + screenHeight / 2
                },
                url: currentUrl,
                sameScreen: sameScreen
              });
            } catch (error) {
              sendResponse({
                success: false,
                error: JSON.stringify(error.message)
              });
            }
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
    return true;
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
/* harmony import */ var _core_content_general_screenshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(382);
/* harmony import */ var _core_content_general_screenshot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_content_general_screenshot_js__WEBPACK_IMPORTED_MODULE_0__);
// Moved to @bidhub/extension-core (shared with the autoapply extension).

})();

/******/ })()
;