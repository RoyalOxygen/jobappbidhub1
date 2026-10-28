/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1838
() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Store remembered selection ranges by message ID
var rememberedRanges = new Map();
// Track current selection range for real-time updates
var currentSelectionRange = null;

// Function to check if a range is still valid
function isRangeValid(range) {
  try {
    // Check if the range's containers are still in the document
    if (!document.contains(range.startContainer) || !document.contains(range.endContainer)) {
      return false;
    }

    // Check if we can still get a bounding rect (this will throw if the range is detached)
    var rect = range.getBoundingClientRect();
    return rect !== null;
  } catch (e) {
    // If getBoundingClientRect throws, the range is invalid
    return false;
  }
}

// Function to get bounding box for a range
function getRangeBoundingBox(range) {
  try {
    var rect = range.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      return {
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height
      };
    }
  } catch (e) {
    // Range might be invalid
  }
  return null;
}

// --- Cross-frame coordinate accumulation -------------------------------------
// A selection rect from range.getBoundingClientRect() is relative to THIS frame's viewport. To
// position the tooltip (rendered in the top frame) we must translate it to the top viewport. The
// top frame cannot measure a nested (and possibly cross-origin) iframe's offset, so we accumulate
// offsets up the frame chain: each frame posts the payload to its parent, the parent adds its own
// child-iframe offset and re-posts, and the top frame terminates by relaying to the background.

var FRAME_SELECTION_MARKER = '__bidhubSel';

// This frame's chrome frameId, needed by the panel to route rememberSelectionRange/
// deleteSelectionRange back to the exact frame the selection lives in. A content script can't read
// its own frameId, so we ask the background once. Positioning never depends on this (a human click
// for "answer" happens long after this resolves), so we attach it opportunistically.
var selfFrameId = null;
var whoAmIPending = false;
// Ask the background for our own frameId. Retried lazily (see the selectionchange handler) so a
// failed or raced first attempt — e.g. an asleep MV3 service worker that errors the callback —
// doesn't leave a nested frame permanently without an id, which would misroute the panel's
// remember/delete (sent with frameId 0) to the top frame instead of this one.
function ensureSelfFrameId() {
  if (selfFrameId !== null || whoAmIPending) return;
  whoAmIPending = true;
  try {
    chrome.runtime.sendMessage({
      message_type: 'whoAmI'
    }, function (response) {
      var _response$data$frameI, _response$data;
      whoAmIPending = false;
      if (chrome.runtime.lastError) return;
      selfFrameId = (_response$data$frameI = response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.frameId) !== null && _response$data$frameI !== void 0 ? _response$data$frameI : null;
    });
  } catch (e) {
    whoAmIPending = false; // Extension context not ready; positioning still works without frameId.
  }
}
ensureSelfFrameId();
var isTopFrame = function isTopFrame() {
  return window === window.top;
};

// Translate a child-frame-relative rect into THIS frame's viewport by adding the child iframe
// element's position (+ border + padding). Read live each call (including getComputedStyle) so a
// border/padding change on the iframe can't leave a stale offset. Null-safe (rect may be null).
function offsetRectByIframe(rect, iframeEl) {
  if (!rect) return rect;
  var frameRect = iframeEl.getBoundingClientRect();
  var cs = window.getComputedStyle(iframeEl);
  var borderLeft = parseFloat(cs.borderLeftWidth) || 0;
  var borderTop = parseFloat(cs.borderTopWidth) || 0;
  var paddingLeft = parseFloat(cs.paddingLeft) || 0;
  var paddingTop = parseFloat(cs.paddingTop) || 0;
  var dx = frameRect.left + borderLeft + paddingLeft;
  var dy = frameRect.top + borderTop + paddingTop;
  return {
    top: rect.top + dy,
    left: rect.left + dx,
    right: rect.right + dx,
    bottom: rect.bottom + dy,
    width: rect.width,
    height: rect.height
  };
}

// Apply an iframe offset to every rect a payload carries (a single `rect`, or each `updates[].rect`).
function offsetPayloadRects(payload, iframeEl) {
  var next = _objectSpread({}, payload);
  if ('rect' in payload) next.rect = offsetRectByIframe(payload.rect, iframeEl);
  if (Array.isArray(payload.updates)) {
    next.updates = payload.updates.map(function (u) {
      return _objectSpread(_objectSpread({}, u), {}, {
        rect: offsetRectByIframe(u.rect, iframeEl)
      });
    });
  }
  return next;
}

// Find the child iframe whose contentWindow sent a postMessage. The identity comparison is valid
// cross-origin (you may hold/compare a WindowProxy reference; only property access is blocked), and
// it doubles as the authentication gate against spoofed messages. Memoized by source window
// (WeakMap, so detached child windows stay collectible) to avoid a full DOM query on every relay
// message; each cache hit is revalidated (still connected + contentWindow still matches).
var childFrameCache = new WeakMap();
function findChildFrameElement(sourceWindow) {
  if (!sourceWindow) return null;
  var cached = childFrameCache.get(sourceWindow);
  if (cached && cached.isConnected) {
    var cw = null;
    try {
      cw = cached.contentWindow;
    } catch (e) {
      cw = null;
    }
    if (cw && cw === sourceWindow) return cached;
  }
  var frames = document.querySelectorAll('iframe, frame');
  var _iterator = _createForOfIteratorHelper(frames),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var f = _step.value;
      var _cw = null;
      try {
        _cw = f.contentWindow;
      } catch (e) {
        _cw = null;
      }
      if (_cw && _cw === sourceWindow) {
        childFrameCache.set(sourceWindow, f);
        return f;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
}

// Send a selection payload toward the top frame. Top frame relays to the background (existing
// path); a child frame posts to its parent, where the message listener below adds the next offset.
function dispatch(messageType, payload) {
  if (isTopFrame()) {
    chrome.runtime.sendMessage(_objectSpread({
      message_type: messageType
    }, payload));
  } else {
    window.parent.postMessage(_defineProperty(_defineProperty(_defineProperty({}, FRAME_SELECTION_MARKER, true), "messageType", messageType), "payload", payload), '*');
  }
}

// Receive payloads from direct child frames, add this frame's child-iframe offset, forward up.
window.addEventListener('message', function (event) {
  var data = event.data;
  if (!data || data[FRAME_SELECTION_MARKER] !== true) return;
  var iframeEl = findChildFrameElement(event.source);
  if (!iframeEl) return; // not from a known child frame — ignore (spoof gate)
  var messageType = data.messageType,
    payload = data.payload;
  if (!messageType || !payload) return;
  dispatch(messageType, offsetPayloadRects(payload, iframeEl));
});

// Send bounding box updates for all remembered ranges and current selection
function sendRangeUpdates() {
  var updates = [];
  var invalidMessageIds = [];

  // Check current selection first
  if (currentSelectionRange && isRangeValid(currentSelectionRange)) {
    var rect = getRangeBoundingBox(currentSelectionRange);
    if (rect) {
      updates.push({
        messageId: 'current_selection',
        rect: rect,
        isCurrentSelection: true
      });
    }
  } else if (currentSelectionRange) {
    // Current selection became invalid
    invalidMessageIds.push('current_selection');
    currentSelectionRange = null;
  }

  // Check remembered ranges
  var _iterator2 = _createForOfIteratorHelper(rememberedRanges),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
        _messageId = _step2$value[0],
        range = _step2$value[1];
      if (!isRangeValid(range)) {
        invalidMessageIds.push(_messageId);
        continue;
      }
      var _rect = getRangeBoundingBox(range);
      if (_rect) {
        updates.push({
          messageId: _messageId,
          rect: _rect,
          isCurrentSelection: false
        });
      }
    }

    // Send batched updates (rects accumulate to top-viewport coords up the frame chain). No frameId:
    // updates are matched in the panel by messageId/isCurrentSelection, never routed per frame.
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  if (updates.length > 0) {
    dispatch('selectionRangeUpdate', {
      updates: updates
    });
  }

  // Remove and notify about invalid ranges
  if (invalidMessageIds.length > 0) {
    var _iterator3 = _createForOfIteratorHelper(invalidMessageIds),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var messageId = _step3.value;
        rememberedRanges["delete"](messageId);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    chrome.runtime.sendMessage({
      message_type: 'selectionRangeInvalid',
      messageIds: invalidMessageIds
    });
  }

  // Stop updates if nothing left to track
  if (!shouldSendUpdates()) {
    stopRangeUpdates();
  }
}

// Set up periodic updates for remembered ranges and current selection (every 100ms)
var updateInterval = null;
function startRangeUpdates() {
  if (updateInterval) return; // Already running
  updateInterval = setInterval(sendRangeUpdates, 50);
}
function stopRangeUpdates() {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
}

// Check if we need updates (either remembered ranges or current selection)
function shouldSendUpdates() {
  return rememberedRanges.size > 0 || currentSelectionRange !== null;
}

// Handle messages from background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.message_type === 'rememberSelectionRange') {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
      var range = selection.getRangeAt(0).cloneRange();
      rememberedRanges.set(message.data.messageId, range);
      if (shouldSendUpdates()) {
        startRangeUpdates();
      }
    }
  } else if (message.message_type === 'deleteSelectionRange') {
    rememberedRanges["delete"](message.data.messageId);
    if (!shouldSendUpdates()) {
      stopRangeUpdates();
    }
  }
});
document.addEventListener("selectionchange", function () {
  ensureSelfFrameId(); // lazy retry if the load-time whoAmI hasn't resolved yet
  var selection = window.getSelection();
  var text = selection.toString();
  var rect = null;
  var hasValidSelection = false;
  if (text && text.trim()) {
    if (selection.rangeCount > 0) {
      var range = selection.getRangeAt(selection.rangeCount - 1);
      rect = getRangeBoundingBox(range);
      if (rect) {
        currentSelectionRange = range.cloneRange();
        hasValidSelection = true;
      }
    }
  }
  if (!hasValidSelection) {
    currentSelectionRange = null;
  }

  // Start/stop updates based on whether we have anything to track
  if (shouldSendUpdates()) {
    startRangeUpdates();
  } else {
    stopRangeUpdates();
  }
  dispatch('textSelectionChange', {
    text: text.trim(),
    rect: rect,
    frameId: selfFrameId
  });
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
/* harmony import */ var _core_content_general_text_selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1838);
/* harmony import */ var _core_content_general_text_selection_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_content_general_text_selection_js__WEBPACK_IMPORTED_MODULE_0__);
// Moved to @bidhub/extension-core (shared with the autoapply extension).

})();

/******/ })()
;