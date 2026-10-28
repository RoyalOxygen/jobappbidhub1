/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// UNUSED EXPORTS: RIPPLEHIRE_PLATFORM_KEY, advanceRippleHireAutofillFlow, amountCurrencyCode, choosePhoneCountry, claimRippleHireRouteReload, clickRippleHireSubmitButton, detectAutofillFields, detectRippleHireAdvanceButton, detectRippleHireSubmitButton, formatRippleHireDate, getRippleHireAdvanceTarget, getRippleHirePageKind, getRippleHireSubmitButton, isRippleHireAutofillAvailable, isRippleHireRouteStalled, pickPlaceItem, rippleHireAcceptingJobUrl, rippleHireSwitchSourceHref, sanitizeFileName, switchRippleHireToAcceptingLink, watchRippleHireRoute

;// ../../packages/job-parsers/shared/common.js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var sleep = function sleep(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
};
function sleepAbout(durationAbout) {
  return sleep(durationAbout * (Math.random() * 0.5 + 1));
}
function base64ToArrayBuffer(base64) {
  var binaryString = atob(base64);
  var bytes = new Uint8Array(binaryString.length);
  for (var i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}
function readBase64fromResponse(response) {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
      var blob, reader;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return response.blob();
          case 1:
            blob = _context.v;
            reader = new FileReader();
            reader.onload = function () {
              var b64 = reader.result.replace(/^data:.+;base64,/, '');
              resolve(b64);
            };
            reader.readAsDataURL(blob);
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
function isPlaceholderTextValue(value) {
  if (typeof value !== 'string') return false;
  var normalized = value.trim().toLowerCase();
  return normalized === '' || normalized === 'n/a' || normalized === 'na' || normalized === 'not applicable';
}
var safeAsync = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(asyncFunc) {
    var result, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return asyncFunc();
        case 1:
          result = _context2.v;
          return _context2.a(2, {
            success: true,
            result: result
          });
        case 2:
          _context2.p = 2;
          _t = _context2.v;
          return _context2.a(2, {
            success: false,
            error: (_t === null || _t === void 0 ? void 0 : _t.message) || 'Unknown error'
          });
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function safeAsync(_x3) {
    return _ref2.apply(this, arguments);
  };
}()));
var useStoppableAsync = function useStoppableAsync(terminationFunc) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(asyncFunc) {
      var response;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (!terminationFunc()) {
              _context3.n = 1;
              break;
            }
            throw new Error('terminated');
          case 1:
            _context3.n = 2;
            return asyncFunc();
          case 2:
            response = _context3.v;
            if (!terminationFunc()) {
              _context3.n = 3;
              break;
            }
            throw new Error('terminated');
          case 3:
            return _context3.a(2, response);
        }
      }, _callee3);
    }));
    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var deepCopy = function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
};
var retryOnFail = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(func, retry) {
    var result, _t2;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          if (!retry--) {
            _context4.n = 5;
            break;
          }
          _context4.p = 1;
          _context4.n = 2;
          return func();
        case 2:
          result = _context4.v;
          return _context4.a(2, result);
        case 3:
          _context4.p = 3;
          _t2 = _context4.v;
          if (!(retry === 0)) {
            _context4.n = 4;
            break;
          }
          throw _t2;
        case 4:
          _context4.n = 0;
          break;
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 3]]);
  }));
  return function retryOnFail(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}()));
;// ../../packages/job-parsers/shared/file-accept.js
// `<input type="file" accept="…">` gating shared by the content-side fill helpers
// (content/platforms/dom-interactions.js) and the extension background's cover letter pipeline
// (extension-core/background/coverletter-autofill.js). Rippling, Paylocity, Gusto, Kula… declare a
// `.doc,.docx,.pdf`-style list and their uploaders silently DROP anything else — Rippling keeps
// "Total 0 file selected" for a .txt — so a generated plain-text cover letter must never be
// fabricated for, or attached to, such a slot.

var EXTENSION_MIME_TYPES = {
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.txt': 'text/plain',
  '.rtf': 'application/rtf',
  '.odt': 'application/vnd.oasis.opendocument.text'
};

// Lower-cased, trimmed tokens of an accept list: extensions (".pdf"), MIME types
// ("application/pdf") or wildcards ("image/*"). Not a string / blank → [] — the attribute is
// optional and an absent one accepts everything.
function parseAcceptList(accept) {
  if (typeof accept !== 'string') return [];
  return accept.split(',').map(function (token) {
    return token.trim().toLowerCase();
  }).filter(Boolean);
}
function getFileExtension(fileName) {
  var match = /\.[^./\\\s]+$/.exec(String(fileName !== null && fileName !== void 0 ? fileName : '').trim().toLowerCase());
  return match ? match[0] : '';
}

// Whether a file with this name / MIME type satisfies the accept list: the name's extension against
// extension tokens, the declared MIME type (or the one the extension implies) against MIME and
// wildcard tokens. No list → true.
function fileMatchesAccept() {
  var _EXTENSION_MIME_TYPES;
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    fileName = _ref.fileName,
    mimeType = _ref.mimeType;
  var accept = arguments.length > 1 ? arguments[1] : undefined;
  var tokens = parseAcceptList(accept);
  if (tokens.length === 0) return true;
  var extension = getFileExtension(fileName);
  var declaredMime = String(mimeType !== null && mimeType !== void 0 ? mimeType : '').trim().toLowerCase();
  var impliedMime = (_EXTENSION_MIME_TYPES = EXTENSION_MIME_TYPES[extension]) !== null && _EXTENSION_MIME_TYPES !== void 0 ? _EXTENSION_MIME_TYPES : '';
  var mimes = [declaredMime, impliedMime].filter(Boolean);
  return tokens.some(function (token) {
    if (token === '*' || token === '*/*') return true;
    if (token.startsWith('.')) return extension === token;
    if (token.endsWith('/*')) {
      var prefix = token.slice(0, -1);
      return mimes.some(function (mime) {
        return mime.startsWith(prefix);
      });
    }
    return mimes.includes(token);
  });
}

// Whether a generated plain-text file (cover-letter.txt) can go into the slot at all.
function acceptAllowsPlainText(accept) {
  return fileMatchesAccept({
    fileName: 'cover-letter.txt',
    mimeType: 'text/plain'
  }, accept);
}
;// ../../packages/job-parsers/content/platforms/dom-interactions.js
/* unused harmony import specifier */ var dom_interactions_base64ToArrayBuffer;
/* unused harmony import specifier */ var dom_interactions_sleep;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function dom_interactions_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return dom_interactions_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (dom_interactions_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, dom_interactions_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, dom_interactions_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), dom_interactions_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", dom_interactions_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), dom_interactions_regeneratorDefine2(u), dom_interactions_regeneratorDefine2(u, o, "Generator"), dom_interactions_regeneratorDefine2(u, n, function () { return this; }), dom_interactions_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (dom_interactions_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function dom_interactions_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } dom_interactions_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { dom_interactions_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, dom_interactions_regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function dom_interactions_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function dom_interactions_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { dom_interactions_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { dom_interactions_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

// Accept-list gating for the plain-text fallback (createPlainTextFileAnswer): a `.doc,.docx,.pdf`
// slot silently drops a .txt (Rippling keeps "Total 0 file selected"), so platform fills check first.



// Schedule of re-assert delays (ms). A React controlled input can wipe a value we
// just wrote programmatically: its state-restore runs at the end of the same event
// dispatch, BEFORE the component's onChange setState commits, so the value reverts
// to the (still-empty) prop. This reliably clears the FIRST text field filled in a
// rapid burst right after the field's component (re)rendered — e.g. Workable's
// "First name" or the freshly-opened education editor's "School" — while later
// fields in the same burst stick. Re-writing on subsequent ticks (after React has
// committed) makes the value hold. Kept short so the whole recovery is well under a
// second; it stops as soon as the value sticks.
var TEXT_INPUT_REASSERT_DELAYS_MS = [20, 60, 150, 350];

// Exported for widgets that CLEAR the input themselves after consuming the value (e.g. a chips/
// tags editor committing an entry): fillTextInput's reassert recovery would see the cleared input
// and re-type the old text, fighting the widget — write raw and manage timing at the call site.
function writeReactTextValue(element, value) {
  var lastValue = element.value;
  element.value = value;
  var tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  element.dispatchEvent(new Event('input', {
    target: element,
    bubbles: true
  }));
}

// Verify a just-written value held; if a React state-restore wiped it back to empty,
// re-write on later ticks until it sticks. Does NOT write on entry (the caller wrote
// once already). Bails if the element detaches, the value already holds, the run
// aborts, or the host/user set some OTHER non-empty value (never fight a real change).
function reassertTextInputValue(_x, _x2) {
  return _reassertTextInputValue.apply(this, arguments);
}
function _reassertTextInputValue() {
  _reassertTextInputValue = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee3(element, text) {
    var _ref20,
      _ref20$blur,
      blur,
      _ref20$shouldAbort,
      shouldAbort,
      _iterator6,
      _step6,
      delay,
      _args3 = arguments,
      _t;
    return dom_interactions_regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _ref20 = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {}, _ref20$blur = _ref20.blur, blur = _ref20$blur === void 0 ? true : _ref20$blur, _ref20$shouldAbort = _ref20.shouldAbort, shouldAbort = _ref20$shouldAbort === void 0 ? function () {
            return false;
          } : _ref20$shouldAbort;
          _iterator6 = _createForOfIteratorHelper(TEXT_INPUT_REASSERT_DELAYS_MS);
          _context3.p = 1;
          _iterator6.s();
        case 2:
          if ((_step6 = _iterator6.n()).done) {
            _context3.n = 9;
            break;
          }
          delay = _step6.value;
          if (!(!element.isConnected || shouldAbort())) {
            _context3.n = 3;
            break;
          }
          return _context3.a(2);
        case 3:
          if (!(element.value === text)) {
            _context3.n = 4;
            break;
          }
          return _context3.a(2);
        case 4:
          if (!(element.value !== '' && element.value !== text)) {
            _context3.n = 5;
            break;
          }
          return _context3.a(2);
        case 5:
          _context3.n = 6;
          return sleep(delay);
        case 6:
          if (!(!element.isConnected || shouldAbort() || element.value === text)) {
            _context3.n = 7;
            break;
          }
          return _context3.a(2);
        case 7:
          writeReactTextValue(element, text);
          if (blur) element.dispatchEvent(new Event('blur'));
        case 8:
          _context3.n = 2;
          break;
        case 9:
          _context3.n = 11;
          break;
        case 10:
          _context3.p = 10;
          _t = _context3.v;
          _iterator6.e(_t);
        case 11:
          _context3.p = 11;
          _iterator6.f();
          return _context3.f(11);
        case 12:
          return _context3.a(2);
      }
    }, _callee3, null, [[1, 10, 11, 12]]);
  }));
  return _reassertTextInputValue.apply(this, arguments);
}
function fillTextInput(element, value) {
  if (value && value.startsWith('/Volumes/')) {
    return;
  }
  if (!element) return;
  var text = String(value !== null && value !== void 0 ? value : '');
  writeReactTextValue(element, text);
  element.dispatchEvent(new Event('blur'));
  // Fire-and-forget recovery for callers that can't await (the React state-restore
  // wipe above). Bounded + guarded, so it's a no-op once the value holds.
  void reassertTextInputValue(element, text, {
    blur: true
  });
}

// Awaitable text fill that does not resolve until the value has actually stuck (or
// recovery is exhausted). Use this where a later synchronous step depends on the
// value already being present — e.g. saving the Workable education/experience editor
// immediately after filling its required "School"/"Title" field.
function fillTextInputReliably(_x3, _x4) {
  return _fillTextInputReliably.apply(this, arguments);
}
function _fillTextInputReliably() {
  _fillTextInputReliably = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee4(element, value) {
    var _ref,
      _ref$blur,
      blur,
      _ref$shouldAbort,
      shouldAbort,
      text,
      _args4 = arguments;
    return dom_interactions_regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _ref = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {}, _ref$blur = _ref.blur, blur = _ref$blur === void 0 ? true : _ref$blur, _ref$shouldAbort = _ref.shouldAbort, shouldAbort = _ref$shouldAbort === void 0 ? function () {
            return false;
          } : _ref$shouldAbort;
          if (element) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2);
        case 1:
          text = String(value !== null && value !== void 0 ? value : '');
          if (!text.startsWith('/Volumes/')) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2);
        case 2:
          writeReactTextValue(element, text);
          if (blur) element.dispatchEvent(new Event('blur'));
          _context4.n = 3;
          return reassertTextInputValue(element, text, {
            blur: blur,
            shouldAbort: shouldAbort
          });
        case 3:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return _fillTextInputReliably.apply(this, arguments);
}
function fillTextInputWithoutBlur(element, value) {
  if (value && value.startsWith('/Volumes/')) {
    return;
  }
  var lastValue = element.value;
  element.focus();
  element.value = value;
  var event = new Event("input", {
    target: element,
    bubbles: true
  });
  var tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  element.dispatchEvent(event);
}

// Chrome delivers focus/blur/focusin/focusout only while the page has system focus. In a
// background tab, behind another window, or in an unfocused automation window, element.focus()
// and element.blur() just move document.activeElement SILENTLY — so a widget that commits its
// value in onBlur (React listens for focusin/focusout at its root) keeps SHOWING what we wrote
// while its form model never receives it (Workday: "The field Job Title is required and must have
// a value" under a visibly filled input). These helpers make the real call and, only when no
// event came through, dispatch the bubbling pair a real focus move fires — so a focused page sees
// exactly the native events and an unfocused one sees one synthetic pair, never both.
function dispatchFocusTransition(element, focusType, bubblingType, relatedTarget) {
  element.dispatchEvent(new FocusEvent(focusType, {
    relatedTarget: relatedTarget,
    composed: true
  }));
  element.dispatchEvent(new FocusEvent(bubblingType, {
    relatedTarget: relatedTarget,
    bubbles: true,
    composed: true
  }));
}
function wasEventDelivered(element, type, action) {
  var delivered = false;
  var markDelivered = function markDelivered() {
    delivered = true;
  };
  element.addEventListener(type, markDelivered);
  try {
    action();
  } finally {
    element.removeEventListener(type, markDelivered);
  }
  return delivered;
}
function focusElementReliably(element) {
  var _element$getRootNode, _element$getRootNode2;
  if (!element) return;
  var root = (_element$getRootNode = (_element$getRootNode2 = element.getRootNode) === null || _element$getRootNode2 === void 0 ? void 0 : _element$getRootNode2.call(element)) !== null && _element$getRootNode !== void 0 ? _element$getRootNode : document;
  var previous = root.activeElement;
  if (previous === element) return;
  if (wasEventDelivered(element, 'focusin', function () {
    return element.focus();
  })) return;
  // Not focusable (disabled, hidden): focus() was a no-op, nothing to report.
  if (root.activeElement !== element) return;
  var relatedTarget = previous && previous !== element.ownerDocument.body ? previous : null;
  if (relatedTarget) dispatchFocusTransition(relatedTarget, 'blur', 'focusout', element);
  dispatchFocusTransition(element, 'focus', 'focusin', relatedTarget);
}

// Also fires when the page moved focus off the element before we blurred it: its onBlur commit is
// what the caller is after, and a repeated commit of the same value is harmless.
function blurElementReliably(element) {
  if (!element) return;
  if (wasEventDelivered(element, 'focusout', function () {
    return element.blur();
  })) return;
  dispatchFocusTransition(element, 'blur', 'focusout', null);
}

// React-safe value write: use the prototype's native value setter (controlled
// inputs override the instance `value`) and rewind the internal value tracker so
// React's onChange fires for the dispatched `input` event.
function setReactInputValue(element, value) {
  var _Object$getOwnPropert;
  var prototype = element instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  var valueSetter = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(prototype, 'value')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set;
  var lastValue = element.value;
  if (valueSetter) {
    valueSetter.call(element, value);
  } else {
    element.value = value;
  }
  var tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
}

// Characters that a real keyboard produces with Shift held (capitals + the
// shifted row). Used so capitals/symbols carry shiftKey:true instead of looking
// like they were typed without ever pressing Shift.
var SHIFTED_CHAR_PATTERN = /[A-Z!@#$%^&*()_+{}|:"<>?~]/;
function getCharKeyEventInit(_char) {
  var isLetter = /^[a-zA-Z]$/.test(_char);
  var isDigit = /^[0-9]$/.test(_char);
  var code = '';
  var keyCode = _char.charCodeAt(0);
  var key = _char;
  if (isLetter) {
    code = "Key".concat(_char.toUpperCase());
    keyCode = _char.toUpperCase().charCodeAt(0);
  } else if (isDigit) {
    code = "Digit".concat(_char);
  } else if (_char === ' ') {
    code = 'Space';
    keyCode = 32;
  } else if (_char === '\n') {
    code = 'Enter';
    key = 'Enter';
    keyCode = 13;
  }
  return {
    key: key,
    code: code,
    keyCode: keyCode,
    shiftKey: SHIFTED_CHAR_PATTERN.test(_char)
  };
}
function dispatchCharKeyEvents(element, _char2, eventTypes) {
  var _getCharKeyEventInit = getCharKeyEventInit(_char2),
    key = _getCharKeyEventInit.key,
    code = _getCharKeyEventInit.code,
    keyCode = _getCharKeyEventInit.keyCode,
    shiftKey = _getCharKeyEventInit.shiftKey;
  var _iterator = _createForOfIteratorHelper(eventTypes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var type = _step.value;
      element.dispatchEvent(new KeyboardEvent(type, {
        key: key,
        code: code,
        keyCode: keyCode,
        which: keyCode,
        charCode: type === 'keypress' ? keyCode : 0,
        shiftKey: shiftKey,
        bubbles: true,
        cancelable: true,
        composed: true
      }));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function randomKeyDelayMs(baseDelayMs, jitterRatio) {
  var jitter = baseDelayMs * jitterRatio;
  return Math.max(1, Math.round(baseDelayMs - jitter + Math.random() * jitter * 2));
}

// Floor for the per-char cadence so the total-time budget can't drive very long
// values (cover letters) down to a near-zero, perfectly-flat interval. Kept low
// so typing stays fast; the discrete keydown/input/keyup per char is what makes
// it human, not the speed.
var MIN_HUMAN_CHAR_DELAY_MS = 3;

// Fill a text input/textarea the way a person would: focus, then emit a real
// per-character key/beforeinput/input/keyup sequence with jittered delays so the
// value grows one keystroke at a time instead of appearing instantly. This
// defeats the common bot heuristics (instant value set, no focus, no key events).
// NOTE: content-script synthetic events are still `isTrusted === false`; a
// detector that strictly checks `isTrusted` needs CDP-level input, which a content
// script cannot produce. `maxTotalTypingMs` bounds the cadence so long values
// (cover letters) don't stall the autofill run.
function fillTextInputLikeHuman(_x5, _x6) {
  return _fillTextInputLikeHuman.apply(this, arguments);
}
function _fillTextInputLikeHuman() {
  _fillTextInputLikeHuman = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee5(element, value) {
    var _element$focus2;
    var _ref2,
      _ref2$blur,
      blur,
      _ref2$clearFirst,
      clearFirst,
      _ref2$perCharDelayMs,
      perCharDelayMs,
      _ref2$maxTotalTypingM,
      maxTotalTypingMs,
      _ref2$jitterRatio,
      jitterRatio,
      _ref2$shouldAbort,
      shouldAbort,
      text,
      typed,
      baseDelayMs,
      keyHoldBaseMs,
      gapBaseMs,
      wordPauseBaseMs,
      _iterator7,
      _step7,
      _char3,
      gapMs,
      _args5 = arguments,
      _t2;
    return dom_interactions_regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _ref2 = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {}, _ref2$blur = _ref2.blur, blur = _ref2$blur === void 0 ? true : _ref2$blur, _ref2$clearFirst = _ref2.clearFirst, clearFirst = _ref2$clearFirst === void 0 ? true : _ref2$clearFirst, _ref2$perCharDelayMs = _ref2.perCharDelayMs, perCharDelayMs = _ref2$perCharDelayMs === void 0 ? 45 : _ref2$perCharDelayMs, _ref2$maxTotalTypingM = _ref2.maxTotalTypingMs, maxTotalTypingMs = _ref2$maxTotalTypingM === void 0 ? 4000 : _ref2$maxTotalTypingM, _ref2$jitterRatio = _ref2.jitterRatio, jitterRatio = _ref2$jitterRatio === void 0 ? 0.5 : _ref2$jitterRatio, _ref2$shouldAbort = _ref2.shouldAbort, shouldAbort = _ref2$shouldAbort === void 0 ? function () {
            return false;
          } : _ref2$shouldAbort;
          if (element) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2);
        case 1:
          text = String(value !== null && value !== void 0 ? value : '');
          if (!text.startsWith('/Volumes/')) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2);
        case 2:
          if (!(element.value === text)) {
            _context5.n = 3;
            break;
          }
          return _context5.a(2);
        case 3:
          (_element$focus2 = element.focus) === null || _element$focus2 === void 0 || _element$focus2.call(element);
          typed = element.value || '';
          if (clearFirst && typed) {
            setReactInputValue(element, '');
            element.dispatchEvent(new InputEvent('input', {
              bubbles: true,
              inputType: 'deleteContentBackward',
              data: null
            }));
            typed = '';
          }
          baseDelayMs = Math.max(MIN_HUMAN_CHAR_DELAY_MS, Math.min(perCharDelayMs, maxTotalTypingMs / Math.max(text.length, 1))); // A real keypress holds the key down briefly before release, and typists pause
          // between words. The hold is part of the per-char budget (subtracted from the
          // inter-key gap, not added on top), and word pauses stay active at all cadences.
          keyHoldBaseMs = Math.min(35, baseDelayMs * 0.4);
          gapBaseMs = Math.max(1, baseDelayMs - keyHoldBaseMs);
          wordPauseBaseMs = Math.min(160, baseDelayMs * 1.4);
          _iterator7 = _createForOfIteratorHelper(text);
          _context5.p = 4;
          _iterator7.s();
        case 5:
          if ((_step7 = _iterator7.n()).done) {
            _context5.n = 9;
            break;
          }
          _char3 = _step7.value;
          if (!(shouldAbort !== null && shouldAbort !== void 0 && shouldAbort())) {
            _context5.n = 6;
            break;
          }
          return _context5.a(3, 9);
        case 6:
          dispatchCharKeyEvents(element, _char3, ['keydown', 'keypress']);
          element.dispatchEvent(new InputEvent('beforeinput', {
            bubbles: true,
            cancelable: true,
            inputType: 'insertText',
            data: _char3
          }));
          typed += _char3;
          setReactInputValue(element, typed);
          element.dispatchEvent(new InputEvent('input', {
            bubbles: true,
            inputType: 'insertText',
            data: _char3
          }));
          _context5.n = 7;
          return sleep(randomKeyDelayMs(keyHoldBaseMs, 0.6));
        case 7:
          dispatchCharKeyEvents(element, _char3, ['keyup']);
          gapMs = randomKeyDelayMs(gapBaseMs, jitterRatio);
          if (_char3 === ' ') gapMs += randomKeyDelayMs(wordPauseBaseMs, 0.5);
          // Occasional heavier "thinking" pause, so the interval histogram is
          // right-skewed (like real typing) rather than a flat jitter band.
          else if (Math.random() < 0.06) gapMs += randomKeyDelayMs(baseDelayMs * 2.5, 0.6);
          _context5.n = 8;
          return sleep(gapMs);
        case 8:
          _context5.n = 5;
          break;
        case 9:
          _context5.n = 11;
          break;
        case 10:
          _context5.p = 10;
          _t2 = _context5.v;
          _iterator7.e(_t2);
        case 11:
          _context5.p = 11;
          _iterator7.f();
          return _context5.f(11);
        case 12:
          element.dispatchEvent(new Event('change', {
            bubbles: true
          }));
          if (blur) {
            element.dispatchEvent(new Event('blur', {
              bubbles: true
            }));
          }
        case 13:
          return _context5.a(2);
      }
    }, _callee5, null, [[4, 10, 11, 12]]);
  }));
  return _fillTextInputLikeHuman.apply(this, arguments);
}
function getElementPointerPoint(element) {
  var _element$getBoundingC, _element$getBoundingC2;
  var rect = (_element$getBoundingC = (_element$getBoundingC2 = element.getBoundingClientRect) === null || _element$getBoundingC2 === void 0 ? void 0 : _element$getBoundingC2.call(element)) !== null && _element$getBoundingC !== void 0 ? _element$getBoundingC : {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  };
  // Aim a little off-centre (not always dead-centre) for a more natural pointer.
  var x = rect.left + rect.width * (0.35 + Math.random() * 0.3);
  var y = rect.top + rect.height * (0.35 + Math.random() * 0.3);
  return {
    x: Math.round(x),
    y: Math.round(y)
  };
}

// Last dispatched pointer coordinate, so movementX/Y carry real deltas instead
// of staying 0 while clientX/clientY advance (an internally inconsistent tell).
var lastMovePoint = {
  x: 0,
  y: 0
};

// Build a pointer/mouse event init with screen coordinates offset by the real
// window position + browser chrome height (so screenX/Y !== clientX/Y, as in a
// real window) and movementX/Y deltas from the previous point.
function buildPointerInit(x, y) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref3$button = _ref3.button,
    button = _ref3$button === void 0 ? 0 : _ref3$button,
    _ref3$buttons = _ref3.buttons,
    buttons = _ref3$buttons === void 0 ? 0 : _ref3$buttons;
  var chromeHeight = Math.max(0, (window.outerHeight || 0) - (window.innerHeight || 0));
  var init = {
    bubbles: true,
    cancelable: true,
    composed: true,
    view: window,
    clientX: x,
    clientY: y,
    screenX: x + (window.screenX || 0),
    screenY: y + (window.screenY || 0) + chromeHeight,
    movementX: x - lastMovePoint.x,
    movementY: y - lastMovePoint.y,
    button: button,
    buttons: buttons
  };
  lastMovePoint = {
    x: x,
    y: y
  };
  return init;
}
function dispatchPointerAndMouse(element, _ref4, x, y) {
  var pointer = _ref4.pointer,
    mouse = _ref4.mouse;
  var _ref5 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
    _ref5$button = _ref5.button,
    button = _ref5$button === void 0 ? 0 : _ref5$button,
    _ref5$buttons = _ref5.buttons,
    buttons = _ref5$buttons === void 0 ? 0 : _ref5$buttons,
    _ref5$bubbles = _ref5.bubbles,
    bubbles = _ref5$bubbles === void 0 ? true : _ref5$bubbles;
  var init = _objectSpread(_objectSpread({}, buildPointerInit(x, y, {
    button: button,
    buttons: buttons
  })), {}, {
    bubbles: bubbles
  });
  if (pointer && typeof PointerEvent === 'function') {
    element.dispatchEvent(new PointerEvent(pointer, _objectSpread(_objectSpread({}, init), {}, {
      pointerId: 1,
      pointerType: 'mouse',
      isPrimary: true,
      width: 1,
      height: 1,
      pressure: buttons ? 0.5 : 0
    })));
  }
  if (mouse) {
    element.dispatchEvent(new MouseEvent(mouse, _objectSpread(_objectSpread({}, init), {}, {
      detail: mouse === 'mousedown' || mouse === 'mouseup' ? 1 : 0
    })));
  }
}

// The simulated cursor's last viewport position, so successive clicks travel a
// continuous path across the page instead of teleporting target-to-target.
var lastPointerPosition = null;

// The element the simulated cursor is currently over, so we can fire
// out/over boundary-crossing events as the path moves between elements.
var lastMoveElement = null;
function dispatchMouseMovePoint(x, y) {
  var _document$elementFrom, _document;
  var target = ((_document$elementFrom = (_document = document).elementFromPoint) === null || _document$elementFrom === void 0 ? void 0 : _document$elementFrom.call(_document, x, y)) || document.body || document.documentElement;
  if (!target) return;
  if (target !== lastMoveElement) {
    if (lastMoveElement) {
      dispatchPointerAndMouse(lastMoveElement, {
        pointer: 'pointerout',
        mouse: 'mouseout'
      }, x, y);
      dispatchPointerAndMouse(lastMoveElement, {
        pointer: 'pointerleave',
        mouse: 'mouseleave'
      }, x, y, {
        bubbles: false
      });
    }
    // over/enter must precede the first move on the newly-entered element.
    dispatchPointerAndMouse(target, {
      pointer: 'pointerover',
      mouse: 'mouseover'
    }, x, y);
    dispatchPointerAndMouse(target, {
      pointer: 'pointerenter',
      mouse: 'mouseenter'
    }, x, y, {
      bubbles: false
    });
    lastMoveElement = target;
  }
  dispatchPointerAndMouse(target, {
    pointer: 'pointermove',
    mouse: 'mousemove'
  }, x, y);
}

// Glide the simulated cursor from its last position to (x, y) over several
// eased, slightly-wobbly steps so a behavioural tracker sees a real movement
// path (mousemove/pointermove on the elements under the path) rather than a jump.
function moveMouseAlongPathTo(_x7, _x8) {
  return _moveMouseAlongPathTo.apply(this, arguments);
} // Activate a control (radio, checkbox, button, listbox option, or a text field
// before typing) the way a person would: scroll it into view, glide the cursor
// over to it along a path, hover, then press and release with a full
// pointer/mouse sequence and jittered dwell times. The real activation is still
// `element.click()` at the end, so selection/focus can never regress — the
// pointer events only wrap it so the interaction looks human. Same
// `isTrusted:false` caveat as fillTextInputLikeHuman applies.
function _moveMouseAlongPathTo() {
  _moveMouseAlongPathTo = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee6(x, y) {
    var _ref21,
      _ref21$shouldAbort,
      shouldAbort,
      start,
      distance,
      steps,
      i,
      t,
      ease,
      wobble,
      _args6 = arguments;
    return dom_interactions_regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _ref21 = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {}, _ref21$shouldAbort = _ref21.shouldAbort, shouldAbort = _ref21$shouldAbort === void 0 ? function () {
            return false;
          } : _ref21$shouldAbort;
          start = lastPointerPosition || {
            x: Math.max(0, x - 140),
            y: Math.max(0, y - 100)
          };
          distance = Math.hypot(x - start.x, y - start.y);
          steps = Math.max(2, Math.min(8, Math.round(distance / 80)));
          i = 1;
        case 1:
          if (!(i <= steps)) {
            _context6.n = 4;
            break;
          }
          if (!(shouldAbort !== null && shouldAbort !== void 0 && shouldAbort())) {
            _context6.n = 2;
            break;
          }
          return _context6.a(3, 4);
        case 2:
          t = i / steps;
          ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          wobble = Math.sin(t * Math.PI) * (Math.random() * 6 - 3);
          dispatchMouseMovePoint(Math.round(start.x + (x - start.x) * ease + wobble), Math.round(start.y + (y - start.y) * ease + wobble));
          _context6.n = 3;
          return sleep(Math.max(1, Math.round(3 + Math.random() * 7)));
        case 3:
          i += 1;
          _context6.n = 1;
          break;
        case 4:
          lastPointerPosition = {
            x: x,
            y: y
          };
        case 5:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return _moveMouseAlongPathTo.apply(this, arguments);
}
function clickLikeHuman(_x9) {
  return _clickLikeHuman.apply(this, arguments);
}
function _clickLikeHuman() {
  _clickLikeHuman = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee7(element) {
    var _element$getBoundingC4, _element$focus3;
    var _ref6,
      _ref6$shouldAbort,
      shouldAbort,
      rect0,
      viewportHeight,
      alreadyVisible,
      _element$scrollIntoVi,
      direction,
      wheelTicks,
      i,
      _lastPointerPosition$,
      _lastPointerPosition,
      _lastPointerPosition$2,
      _lastPointerPosition2,
      _getElementPointerPoi,
      x,
      y,
      _args7 = arguments;
    return dom_interactions_regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _ref6 = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {}, _ref6$shouldAbort = _ref6.shouldAbort, shouldAbort = _ref6$shouldAbort === void 0 ? function () {
            return false;
          } : _ref6$shouldAbort;
          if (element) {
            _context7.n = 1;
            break;
          }
          return _context7.a(2);
        case 1:
          // Scroll like a person: skip if already on screen; otherwise emit a few wheel
          // events (the input that causes scrolling) before the reliable programmatic
          // scroll, so a scroll position change isn't paired with zero wheel input.
          rect0 = (_element$getBoundingC4 = element.getBoundingClientRect) === null || _element$getBoundingC4 === void 0 ? void 0 : _element$getBoundingC4.call(element);
          viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
          alreadyVisible = rect0 && rect0.top >= 40 && rect0.bottom <= viewportHeight - 40;
          if (alreadyVisible) {
            _context7.n = 6;
            break;
          }
          direction = rect0 && rect0.top < 0 ? -1 : 1;
          wheelTicks = 2 + Math.floor(Math.random() * 2);
          i = 0;
        case 2:
          if (!(i < wheelTicks)) {
            _context7.n = 5;
            break;
          }
          if (!(shouldAbort !== null && shouldAbort !== void 0 && shouldAbort())) {
            _context7.n = 3;
            break;
          }
          return _context7.a(2);
        case 3:
          document.dispatchEvent(new WheelEvent('wheel', {
            bubbles: true,
            cancelable: true,
            composed: true,
            view: window,
            deltaMode: 0,
            deltaY: direction * (90 + Math.random() * 70),
            clientX: (_lastPointerPosition$ = (_lastPointerPosition = lastPointerPosition) === null || _lastPointerPosition === void 0 ? void 0 : _lastPointerPosition.x) !== null && _lastPointerPosition$ !== void 0 ? _lastPointerPosition$ : 0,
            clientY: (_lastPointerPosition$2 = (_lastPointerPosition2 = lastPointerPosition) === null || _lastPointerPosition2 === void 0 ? void 0 : _lastPointerPosition2.y) !== null && _lastPointerPosition$2 !== void 0 ? _lastPointerPosition$2 : 0
          }));
          _context7.n = 4;
          return sleep(randomKeyDelayMs(18, 0.5));
        case 4:
          i += 1;
          _context7.n = 2;
          break;
        case 5:
          (_element$scrollIntoVi = element.scrollIntoView) === null || _element$scrollIntoVi === void 0 || _element$scrollIntoVi.call(element, {
            block: 'center',
            inline: 'center'
          });
          _context7.n = 6;
          return sleep(randomKeyDelayMs(55, 0.5));
        case 6:
          if (!(shouldAbort !== null && shouldAbort !== void 0 && shouldAbort())) {
            _context7.n = 7;
            break;
          }
          return _context7.a(2);
        case 7:
          _getElementPointerPoi = getElementPointerPoint(element), x = _getElementPointerPoi.x, y = _getElementPointerPoi.y; // Cursor glides to the target (the path fires over/enter on arrival), settles.
          _context7.n = 8;
          return moveMouseAlongPathTo(x, y, {
            shouldAbort: shouldAbort
          });
        case 8:
          if (!(shouldAbort !== null && shouldAbort !== void 0 && shouldAbort())) {
            _context7.n = 9;
            break;
          }
          return _context7.a(2);
        case 9:
          dispatchPointerAndMouse(element, {
            pointer: 'pointermove',
            mouse: 'mousemove'
          }, x, y);
          _context7.n = 10;
          return sleep(randomKeyDelayMs(25, 0.6));
        case 10:
          if (!(shouldAbort !== null && shouldAbort !== void 0 && shouldAbort())) {
            _context7.n = 11;
            break;
          }
          return _context7.a(2);
        case 11:
          // Press (hold), then release.
          dispatchPointerAndMouse(element, {
            pointer: 'pointerdown',
            mouse: 'mousedown'
          }, x, y, {
            button: 0,
            buttons: 1
          });
          (_element$focus3 = element.focus) === null || _element$focus3 === void 0 || _element$focus3.call(element);
          _context7.n = 12;
          return sleep(randomKeyDelayMs(30, 0.5));
        case 12:
          if (!(shouldAbort !== null && shouldAbort !== void 0 && shouldAbort())) {
            _context7.n = 13;
            break;
          }
          return _context7.a(2);
        case 13:
          dispatchPointerAndMouse(element, {
            pointer: 'pointerup',
            mouse: 'mouseup'
          }, x, y, {
            button: 0,
            buttons: 0
          });
          element.click();
          lastPointerPosition = {
            x: x,
            y: y
          };
        case 14:
          return _context7.a(2);
      }
    }, _callee7);
  }));
  return _clickLikeHuman.apply(this, arguments);
}
function fillFileInput(element, fileName, base64) {
  var mimeType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'application/pdf';
  var fileContent = base64ToArrayBuffer(base64);
  var dataTransfer = new DataTransfer();
  var fileObj = new File([fileContent], fileName, {
    type: mimeType
  });
  dataTransfer.items.add(fileObj);
  var lastFiles = element.files;
  element.files = dataTransfer.files;
  var event = new Event("change", {
    target: element,
    bubbles: true
  });
  var tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastFiles);
  }
  element.dispatchEvent(event);
}

// Hands a file to a drag-and-drop upload zone the way a person dropping it would: dragenter →
// dragover → drop, each carrying a DataTransfer that holds the File. For zones whose file input is
// not inside the field — Dropzone.js appends one hidden input per zone to <body> (HiringThing) — so
// fillFileInput has nothing to write. The page's own drop handler reads event.dataTransfer
// (.files / .items) and starts its upload; the caller waits for the zone's own success marker.
function dropFileOnElement(element, fileName, base64) {
  var mimeType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'application/pdf';
  if (!element) return false;
  var fileObj = new File([dom_interactions_base64ToArrayBuffer(base64)], fileName, {
    type: mimeType
  });
  var dataTransfer = new DataTransfer();
  dataTransfer.items.add(fileObj);
  for (var _i = 0, _arr = ['dragenter', 'dragover', 'drop']; _i < _arr.length; _i++) {
    var type = _arr[_i];
    element.dispatchEvent(new DragEvent(type, {
      bubbles: true,
      cancelable: true,
      composed: true,
      dataTransfer: dataTransfer
    }));
  }
  return true;
}

// Clears a file input so a subsequent upload registers as a real change. Some
// dropzone widgets (JobDiva, Built In) keep the old File on the native input even
// after their UI "remove" — re-attaching the same/new file is then a no-op for the
// framework's onChange. Reset value + the React value tracker, then notify.
function clearFileInput(element) {
  if (!element) return;
  var lastFiles = element.files;
  element.value = '';
  var tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastFiles);
  }
  element.dispatchEvent(new Event('input', {
    bubbles: true
  }));
  element.dispatchEvent(new Event('change', {
    bubbles: true
  }));
}
function encodeTextAsBase64(text) {
  var bytes = new TextEncoder().encode(String(text !== null && text !== void 0 ? text : ''));
  var binary = '';
  var _iterator2 = _createForOfIteratorHelper(bytes),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _byte = _step2.value;
      binary += String.fromCharCode(_byte);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return btoa(binary);
}
function toTxtFileName(fileName) {
  var fallbackBaseName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'generated-text';
  var normalized = String(fileName !== null && fileName !== void 0 ? fileName : '').trim();
  if (!normalized) return "".concat(fallbackBaseName, ".txt");
  if (normalized.toLowerCase().endsWith('.txt')) return normalized;
  var withoutExtension = normalized.replace(/\.[^.]+$/, '');
  return "".concat(withoutExtension || fallbackBaseName, ".txt");
}
function createPlainTextFileAnswer(text) {
  var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref7$fileName = _ref7.fileName,
    fileName = _ref7$fileName === void 0 ? 'generated-text.txt' : _ref7$fileName,
    _ref7$mimeType = _ref7.mimeType,
    mimeType = _ref7$mimeType === void 0 ? 'text/plain' : _ref7$mimeType;
  if (typeof text !== 'string') return null;
  return {
    type: 'file',
    fileName: toTxtFileName(fileName, 'generated-text'),
    mimeType: mimeType,
    base64: encodeTextAsBase64(text)
  };
}

// A native slider (<input type="range">, often visually hidden under a styled track): the first
// number of the answer, written through the value setter + input/change — the slider widgets and
// the form listen to those. The browser clamps and snaps the value to min / max / step itself, so
// the value it kept is returned (null when the answer holds no number: nothing was written).
function fillRangeInput(element, value) {
  var match = String(value !== null && value !== void 0 ? value : '').replace(/(\d),(?=\d{3}\b)/g, '$1').match(/-?\d+(?:\.\d+)?/);
  if (!element || !match) return null;
  var lastValue = element.value;
  element.value = match[0];
  var tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  element.dispatchEvent(new Event('input', {
    bubbles: true
  }));
  element.dispatchEvent(new Event('change', {
    bubbles: true
  }));
  return element.value;
}
function fillSelectInput(element, value) {
  var lastValue = element.value;
  element.value = value;
  var event = new Event("change", {
    target: element,
    bubbles: true
  });
  var tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  element.dispatchEvent(event);
}
var NANP_PHONE_BOX_SIZES = (/* unused pure expression or super */ null && ([3, 3, 4]));

// A phone number typed into consecutive boxes (area code / prefix / line — Jobvite's screening
// "Phone" question, older ATS forms): the national digits are dealt out by each box's maxlength,
// or the North American 3 / 3 / 4 split when the boxes declare none. A leading country code 1 is
// dropped when it is the one digit too many. Throws when the number does not fit the boxes (an
// international number in US boxes) — never a partial or reshuffled number.
function fillSplitPhoneInputs(inputs, value) {
  var boxes = Array.from(inputs !== null && inputs !== void 0 ? inputs : []).filter(Boolean);
  if (boxes.length === 0) throw new Error('No phone boxes to fill');
  var sizes = boxes.map(function (box, index) {
    var maxLength = Number(box.getAttribute('maxlength'));
    if (Number.isInteger(maxLength) && maxLength > 0) return maxLength;
    return boxes.length === NANP_PHONE_BOX_SIZES.length ? NANP_PHONE_BOX_SIZES[index] : null;
  });
  if (sizes.some(function (size) {
    return size == null;
  })) throw new Error("Cannot split a phone number over ".concat(boxes.length, " boxes"));
  var total = sizes.reduce(function (sum, size) {
    return sum + size;
  }, 0);
  var digits = String(value !== null && value !== void 0 ? value : '').replace(/\D/g, '');
  if (digits.length === total + 1 && digits.startsWith('1')) digits = digits.slice(1);
  if (digits.length !== total) throw new Error("Phone number does not fit ".concat(boxes.length, " boxes of ").concat(total, " digits"));
  var offset = 0;
  boxes.forEach(function (box, index) {
    fillTextInput(box, digits.slice(offset, offset + sizes[index]));
    offset += sizes[index];
  });
}

// jQuery Chosen (harvesthq/chosen) hides the native <select> (display:none) and renders its own widget
// right after it (`<select id>_chosen`: a.chosen-single + ul.chosen-results). The form posts the native
// select, but Chosen never reads the native change event, so a bare write leaves the widget showing its
// placeholder. Commit through the widget like a person: mousedown opens it and renders the result rows
// synchronously, mouseup on a row selects it (both are jQuery handlers on the container / the results
// list, which dispatched events reach). Then verify the native value; a page without the widget (Chosen
// skips phone browsers) or a widget that did not commit gets the native write. Throws when the select
// still does not hold the value.
var CHOSEN_RESULTS_WAIT_MS = 1000;

// Chosen reads neither the pointer position nor the view, only that the press reached its handlers.
function dispatchChosenMouse(node, type) {
  node.dispatchEvent(new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    composed: true,
    button: 0,
    buttons: type === 'mousedown' ? 1 : 0
  }));
}
function getChosenContainer(select) {
  var _sibling$classList;
  if (!select) return null;
  var sibling = select.nextElementSibling;
  if (sibling !== null && sibling !== void 0 && (_sibling$classList = sibling.classList) !== null && _sibling$classList !== void 0 && _sibling$classList.contains('chosen-container')) return sibling;
  return select.id ? select.ownerDocument.getElementById("".concat(select.id, "_chosen")) : null;
}
function selectChosenOption(_x0, _x1) {
  return _selectChosenOption.apply(this, arguments);
}
function _selectChosenOption() {
  _selectChosenOption = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee8(select, optionValue) {
    var _option$textContent;
    var _ref8,
      _ref8$shouldAbort,
      shouldAbort,
      options,
      option,
      optionText,
      container,
      findRow,
      row,
      _args8 = arguments;
    return dom_interactions_regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          _ref8 = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : {}, _ref8$shouldAbort = _ref8.shouldAbort, shouldAbort = _ref8$shouldAbort === void 0 ? function () {
            return false;
          } : _ref8$shouldAbort;
          if (select) {
            _context8.n = 1;
            break;
          }
          throw new Error('select not found');
        case 1:
          options = Array.from(select.options);
          option = options.find(function (candidate) {
            return candidate.value === optionValue;
          });
          if (option) {
            _context8.n = 2;
            break;
          }
          throw new Error("select has no option \"".concat(optionValue, "\""));
        case 2:
          optionText = String((_option$textContent = option.textContent) !== null && _option$textContent !== void 0 ? _option$textContent : '').replace(/\s+/g, ' ').trim();
          container = getChosenContainer(select);
          if (!(container && select.value !== optionValue && !shouldAbort())) {
            _context8.n = 4;
            break;
          }
          dispatchChosenMouse(container.querySelector('.chosen-single, .chosen-choices') || container, 'mousedown');
          findRow = function findRow() {
            var rows = Array.from(container.querySelectorAll('.chosen-results li.active-result'));
            return rows.find(function (row) {
              var _row$textContent;
              return String((_row$textContent = row.textContent) !== null && _row$textContent !== void 0 ? _row$textContent : '').replace(/\s+/g, ' ').trim() === optionText;
            }) || rows.find(function (row) {
              return row.getAttribute('data-option-array-index') === String(options.indexOf(option));
            }) || null;
          };
          _context8.n = 3;
          return waitForPositiveResultWithAbort(findRow, CHOSEN_RESULTS_WAIT_MS, shouldAbort);
        case 3:
          row = _context8.v;
          if (row) {
            dispatchChosenMouse(row, 'mouseover');
            dispatchChosenMouse(row, 'mouseup');
          }
        case 4:
          if (!shouldAbort()) {
            _context8.n = 5;
            break;
          }
          return _context8.a(2);
        case 5:
          if (select.value !== optionValue) fillSelectInput(select, optionValue);
          if (!(select.value !== optionValue)) {
            _context8.n = 6;
            break;
          }
          throw new Error("select did not take \"".concat(optionText, "\""));
        case 6:
          return _context8.a(2);
      }
    }, _callee8);
  }));
  return _selectChosenOption.apply(this, arguments);
}
function escapeAttributeValue(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
var DEFAULT_TEXT_INPUT_SELECTOR = ['input[type="text"]', 'input[type="email"]', 'input[type="tel"]', 'input[type="url"]', 'input[type="number"]', 'input[type="password"]', 'input:not([type])'].join(', ');
function getQuestionText(textSource) {
  var _textSource$innerText;
  return (textSource === null || textSource === void 0 || (_textSource$innerText = textSource.innerText) === null || _textSource$innerText === void 0 ? void 0 : _textSource$innerText.split('\n')[0].replace('*', '').trim()) || '';
}
function getChoiceInputs(field, inputType) {
  if (!field) return [];
  if (field.tagName === 'INPUT' && field.type === inputType) return [field];
  return Array.from(field.querySelectorAll("input[type=\"".concat(inputType, "\"]")));
}
function getCheckboxInputs(field) {
  return getChoiceInputs(field, 'checkbox');
}
function getRadioInputs(field) {
  return getChoiceInputs(field, 'radio');
}
function getInputLabelText(input) {
  var _wrappedTarget$textCo;
  var fallbackText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var _ref9 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref9$descendantSelec = _ref9.descendantSelector,
    descendantSelector = _ref9$descendantSelec === void 0 ? null : _ref9$descendantSelec;
  if (!input) return fallbackText;
  if (input.id) {
    var _linkedTarget$textCon;
    var linkedLabel = document.querySelector("label[for=\"".concat(escapeAttributeValue(input.id), "\"]"));
    var linkedTarget = descendantSelector ? linkedLabel === null || linkedLabel === void 0 ? void 0 : linkedLabel.querySelector(descendantSelector) : linkedLabel;
    var linkedText = getQuestionText(linkedTarget) || (linkedTarget === null || linkedTarget === void 0 || (_linkedTarget$textCon = linkedTarget.textContent) === null || _linkedTarget$textCon === void 0 ? void 0 : _linkedTarget$textCon.trim());
    if (linkedText) return linkedText;
  }
  var wrappedLabel = input.closest('label');
  var wrappedTarget = descendantSelector ? wrappedLabel === null || wrappedLabel === void 0 ? void 0 : wrappedLabel.querySelector(descendantSelector) : wrappedLabel;
  var wrappedText = getQuestionText(wrappedTarget) || (wrappedTarget === null || wrappedTarget === void 0 || (_wrappedTarget$textCo = wrappedTarget.textContent) === null || _wrappedTarget$textCo === void 0 ? void 0 : _wrappedTarget$textCo.trim());
  if (wrappedText) return wrappedText;
  return fallbackText;
}
function getNativeSelect(field) {
  if (!field) return null;
  return field.tagName === 'SELECT' ? field : field.querySelector('select');
}
function getTextarea(field) {
  if (!field) return null;
  return field.tagName === 'TEXTAREA' ? field : field.querySelector('textarea');
}
function getTextInput(field) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_TEXT_INPUT_SELECTOR;
  if (!field) return null;
  if (field.tagName === 'INPUT' && field.type !== 'hidden' && field.type !== 'file') return field;
  return field.querySelector(selector);
}
function getPrimaryFieldControl(field) {
  var textInputSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_TEXT_INPUT_SELECTOR;
  var fileInput = getFileInputInsideField(field);
  if (fileInput) return fileInput;
  var select = getNativeSelect(field);
  if (select) return select;
  var textarea = getTextarea(field);
  if (textarea) return textarea;
  var radio = getRadioInputs(field)[0];
  if (radio) return radio;
  var checkbox = getCheckboxInputs(field)[0];
  if (checkbox) return checkbox;
  return getTextInput(field, textInputSelector);
}
function getShadowTraversalRoots(root) {
  if (!root) return [];
  var roots = [];
  if (root instanceof Element && root.shadowRoot) roots.push(root.shadowRoot);
  var queryRoot = root instanceof Document || root instanceof DocumentFragment || root instanceof Element ? root : null;
  if (!(queryRoot !== null && queryRoot !== void 0 && queryRoot.querySelectorAll)) return roots;
  queryRoot.querySelectorAll('*').forEach(function (element) {
    if (element.shadowRoot) roots.push(element.shadowRoot);
  });
  return roots;
}
function querySelectorAllDeep(selector) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  if (!selector || !root) return [];
  var results = [];
  var visited = new Set();
  var _visit = function visit(currentRoot) {
    var _currentRoot$matches;
    if (!currentRoot || visited.has(currentRoot)) return;
    visited.add(currentRoot);
    if (currentRoot instanceof Element && (_currentRoot$matches = currentRoot.matches) !== null && _currentRoot$matches !== void 0 && _currentRoot$matches.call(currentRoot, selector)) {
      results.push(currentRoot);
    }
    if (currentRoot.querySelectorAll) {
      results.push.apply(results, _toConsumableArray(Array.from(currentRoot.querySelectorAll(selector))));
    }
    getShadowTraversalRoots(currentRoot).forEach(_visit);
  };
  _visit(root);
  return Array.from(new Set(results));
}
function querySelectorDeep(selector) {
  var _querySelectorAllDeep;
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return (_querySelectorAllDeep = querySelectorAllDeep(selector, root)[0]) !== null && _querySelectorAllDeep !== void 0 ? _querySelectorAllDeep : null;
}
function closestDeep(element, selector) {
  var stopRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var current = element;
  while (current) {
    var _current$matches, _current, _current$getRootNode, _current2;
    if (current instanceof Element && (_current$matches = (_current = current).matches) !== null && _current$matches !== void 0 && _current$matches.call(_current, selector)) return current;
    if (stopRoot && current === stopRoot) return null;
    if (current.parentElement) {
      current = current.parentElement;
      continue;
    }
    var host = (_current$getRootNode = (_current2 = current).getRootNode) === null || _current$getRootNode === void 0 || (_current$getRootNode = _current$getRootNode.call(_current2)) === null || _current$getRootNode === void 0 ? void 0 : _current$getRootNode.host;
    if (!host || host === current) return null;
    current = host;
  }
  return null;
}

// Whether a scrolling ancestor (overflow other than visible — a dropdown's listbox, a menu panel)
// clips `element` out of that ancestor's own visible area. A real pointer cannot reach such an
// element even when the page shows the widget (the runner's remote input scrolls the PAGE, never
// the widget), so the caller has to bring it into the widget's view first — e.g. type to filter a
// long list down to it, as a person does.
function isClippedByScrollAncestor(element) {
  if (!(element !== null && element !== void 0 && element.getBoundingClientRect)) return false;
  var rect = element.getBoundingClientRect();
  if (!(rect.width > 0 && rect.height > 0)) return false;
  for (var node = element.parentElement; node && node !== document.body && node !== document.documentElement; node = node.parentElement) {
    var overflowY = window.getComputedStyle(node).overflowY;
    if (!overflowY || overflowY === 'visible') continue;
    var box = node.getBoundingClientRect();
    if (!(box.width > 0 && box.height > 0)) continue;
    if (rect.top < box.top - 1 || rect.bottom > box.bottom + 1) return true;
  }
  return false;
}

// The answer as an absolute http(s) link for an <input type="url">, or null when it is not a link
// at all ("No", "N/A", a sentence). A bare domain or path ("github.com/me") gets "https://" — the
// box takes only absolute URLs, and sites such as Ashby refuse anything else as "not a valid URL".
function toUrlAnswer(value) {
  var text = String(value !== null && value !== void 0 ? value : '').trim();
  if (!text || /\s/.test(text)) return null;
  var candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(text) ? text : "https://".concat(text.replace(/^\/+/, ''));
  try {
    var url = new URL(candidate);
    if (!/^https?:$/.test(url.protocol) || url.username || url.password) return null;
    if (!/^[^.]+(\.[^.]+)+$/.test(url.hostname)) return null;
    return candidate;
  } catch (_unused) {
    return null;
  }
}
function inferInputType(question, control) {
  var _control$type$toLower, _control$type, _control$type$toLower2, _control$name$toLower, _control$name, _control$name$toLower2;
  var normalizedQuestion = String(question !== null && question !== void 0 ? question : '').replace(/\s+/g, ' ').trim().toLowerCase();
  var controlType = (_control$type$toLower = control === null || control === void 0 || (_control$type = control.type) === null || _control$type === void 0 || (_control$type$toLower2 = _control$type.toLowerCase) === null || _control$type$toLower2 === void 0 ? void 0 : _control$type$toLower2.call(_control$type)) !== null && _control$type$toLower !== void 0 ? _control$type$toLower : '';
  var controlName = (_control$name$toLower = control === null || control === void 0 || (_control$name = control.name) === null || _control$name === void 0 || (_control$name$toLower2 = _control$name.toLowerCase) === null || _control$name$toLower2 === void 0 ? void 0 : _control$name$toLower2.call(_control$name)) !== null && _control$name$toLower !== void 0 ? _control$name$toLower : '';
  if (controlType && !['text', 'file', 'checkbox', 'radio', 'hidden', 'select-one'].includes(controlType)) {
    return controlType;
  }
  if (controlName.startsWith('urls[') || /\burl\b/.test(normalizedQuestion) || normalizedQuestion.includes('website') || normalizedQuestion.includes('linkedin') || normalizedQuestion.includes('github') || normalizedQuestion.includes('portfolio')) {
    return 'url';
  }
  if (normalizedQuestion.includes('email')) return 'email';
  if (normalizedQuestion.includes('phone')) return 'tel';
  if (controlType === 'number') return 'number';
  if (controlType === 'email') return 'email';
  return controlType || 'text';
}

// Character cap of a text control, or null. Programmatic fills (native value setter / .value=)
// BYPASS `maxlength`, so callers must clip themselves — and many editors enforce the cap only in
// their own validator (UltiPro's Work Experience description: no attribute, a "-2053 characters
// left" counter + "must not exceed 2000 characters" on Save). Sources, in order:
//   1. the native maxLength property (attribute present and > 0)
//   2. validation-hint attributes (ASP.NET unobtrusive `data-val-length-max`, `data-maxlength`)
//   3. a "N characters left/remaining" counter in the control's field container or right after it:
//      limit = remaining + current length (== the limit while the control is still empty; also
//      right after a partial fill, where the counter has gone negative).
var CHARACTERS_LEFT_PATTERN = /(-?\d[\d,]*)\s*characters?\s*(?:left|remaining)\b/gi;
function getTextLengthLimit(field) {
  var _control$parentElemen, _control$closest;
  // Accept a wrapper element too (section leaves may hand in the row cell): probe its text control.
  var control = (field === null || field === void 0 ? void 0 : field.tagName) === 'INPUT' || (field === null || field === void 0 ? void 0 : field.tagName) === 'TEXTAREA' ? field : getTextarea(field) || getTextInput(field);
  if (!control) return null;
  if (typeof control.maxLength === 'number' && control.maxLength > 0) return control.maxLength;
  for (var _i2 = 0, _arr2 = ['data-val-length-max', 'data-maxlength', 'maxlength']; _i2 < _arr2.length; _i2++) {
    var _control$getAttribute, _control$getAttribute2;
    var attribute = _arr2[_i2];
    var parsed = Number.parseInt((_control$getAttribute = (_control$getAttribute2 = control.getAttribute) === null || _control$getAttribute2 === void 0 ? void 0 : _control$getAttribute2.call(control, attribute)) !== null && _control$getAttribute !== void 0 ? _control$getAttribute : '', 10);
    if (Number.isFinite(parsed) && parsed > 0) return parsed;
  }

  // Nearest scopes first; a scope only counts when it holds exactly ONE counter, so a wide field
  // container that wraps several counted controls can't hand us a sibling field's number.
  var scopes = [control.nextElementSibling, control.parentElement, (_control$parentElemen = control.parentElement) === null || _control$parentElemen === void 0 ? void 0 : _control$parentElemen.nextElementSibling, (_control$closest = control.closest) === null || _control$closest === void 0 ? void 0 : _control$closest.call(control, '.form-group, .field, [class*="field"], [class*="textarea"]')].filter(Boolean);
  var _iterator3 = _createForOfIteratorHelper(scopes),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _control$value;
      var scope = _step3.value;
      var matches = Array.from((scope.textContent || '').matchAll(CHARACTERS_LEFT_PATTERN));
      if (matches.length !== 1) continue;
      var remaining = Number.parseInt(matches[0][1].replace(/,/g, ''), 10);
      if (!Number.isFinite(remaining)) continue;
      var limit = remaining + String((_control$value = control.value) !== null && _control$value !== void 0 ? _control$value : '').length;
      if (limit > 0) return limit;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return null;
}

// A text answer cut to a control's character cap (getTextLengthLimit) so a programmatic fill never writes past it: the
// answer engine is told the cap but its prose can still run over (a Greenhouse 255-character question got 381 / 295
// characters, 2026-10-24, case 2f7d8157 — the live run left both boxes empty and stopped at Submit). Cut at the last
// sentence end inside the cap when that keeps at least half of it, else at the last clause (", " / "; ", closed with a
// full stop), else at the last word; a non-string or an answer that fits is returned unchanged.
var SENTENCE_END_PATTERN = /[.!?](?=\s|$)/g;
function fitTextToLimit(text, limit) {
  if (typeof text !== 'string' || !(Number.isFinite(limit) && limit > 0) || text.length <= limit) return text;
  var head = text.slice(0, limit);
  var sentenceEnd = -1;
  var _iterator4 = _createForOfIteratorHelper(head.matchAll(SENTENCE_END_PATTERN)),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var match = _step4.value;
      sentenceEnd = match.index + 1;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  if (sentenceEnd >= limit / 2) return head.slice(0, sentenceEnd).trim();
  var clauseEnd = Math.max(head.slice(0, limit - 1).lastIndexOf(', '), head.slice(0, limit - 1).lastIndexOf('; '));
  if (clauseEnd >= limit / 2) return "".concat(head.slice(0, clauseEnd).trim(), ".");
  var lastSpace = head.lastIndexOf(' ');
  var cut = lastSpace > 0 ? head.slice(0, lastSpace) : head;
  return cut.replace(/[\s,;:–—-]+$/, '').trim();
}
function getInputConstraints(question, control) {
  var _control$getAttribute3, _control$getAttribute4, _control$getAttribute5, _control$getAttribute6, _control$getAttribute7, _control$getAttribute8;
  if (!control) return {};
  var constraints = {};
  if (control.required) constraints.required = true;

  // if aria-required is true, that means it is required, even if the required property is not set on the control
  if (((_control$getAttribute3 = control.getAttribute) === null || _control$getAttribute3 === void 0 ? void 0 : _control$getAttribute3.call(control, 'aria-required')) === 'true') {
    constraints.required = true;
  }
  var lengthLimit = getTextLengthLimit(control);
  if (lengthLimit) constraints.maxLength = lengthLimit;
  var pattern = (_control$getAttribute4 = control.getAttribute) === null || _control$getAttribute4 === void 0 ? void 0 : _control$getAttribute4.call(control, 'pattern');
  if (pattern) constraints.pattern = pattern;
  var accept = (_control$getAttribute5 = control.getAttribute) === null || _control$getAttribute5 === void 0 ? void 0 : _control$getAttribute5.call(control, 'accept');
  if (accept) constraints.accept = accept;
  var min = (_control$getAttribute6 = control.getAttribute) === null || _control$getAttribute6 === void 0 ? void 0 : _control$getAttribute6.call(control, 'min');
  if (min != null && min !== '') constraints.min = min;
  var max = (_control$getAttribute7 = control.getAttribute) === null || _control$getAttribute7 === void 0 ? void 0 : _control$getAttribute7.call(control, 'max');
  if (max != null && max !== '') constraints.max = max;
  var step = (_control$getAttribute8 = control.getAttribute) === null || _control$getAttribute8 === void 0 ? void 0 : _control$getAttribute8.call(control, 'step');
  if (step != null && step !== '') constraints.step = step;
  if (control.tagName === 'INPUT' || control.tagName === 'TEXTAREA') {
    constraints.inputType = inferInputType(question, control);
  }
  return constraints;
}
var waitForElement = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref0 = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee(query, timeout) {
    var element;
    return dom_interactions_regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (timeout === undefined) timeout = Number.MAX_VALUE;
        case 1:
          if (!(timeout >= 0)) {
            _context.n = 4;
            break;
          }
          element = document.querySelector(query);
          if (!element) {
            _context.n = 2;
            break;
          }
          return _context.a(2, element);
        case 2:
          _context.n = 3;
          return dom_interactions_sleep(1000);
        case 3:
          timeout -= 1000;
          _context.n = 1;
          break;
        case 4:
          return _context.a(2, null);
      }
    }, _callee);
  }));
  return function waitForElement(_x10, _x11) {
    return _ref0.apply(this, arguments);
  };
}()));
var findElementByText = function findElementByText(query, pattern) {
  var elements = document.querySelectorAll(query);
  var _iterator5 = _createForOfIteratorHelper(elements),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var element = _step5.value;
      var content = element.textContent.trim();
      if (pattern instanceof RegExp) {
        if (pattern.exec(content)) return element;
      } else {
        if (content === pattern) return element;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return null;
};
var waitForPositiveResult = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref1 = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee2(callback, timeout) {
    var result;
    return dom_interactions_regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (timeout === undefined) timeout = Number.MAX_VALUE;
        case 1:
          if (!(timeout >= 0)) {
            _context2.n = 4;
            break;
          }
          result = callback();
          if (!result) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, result);
        case 2:
          _context2.n = 3;
          return dom_interactions_sleep(1000);
        case 3:
          timeout -= 1000;
          _context2.n = 1;
          break;
        case 4:
          return _context2.a(2, null);
      }
    }, _callee2);
  }));
  return function waitForPositiveResult(_x12, _x13) {
    return _ref1.apply(this, arguments);
  };
}()));
function waitForPositiveResultWithAbort(_x14, _x15) {
  return _waitForPositiveResultWithAbort.apply(this, arguments);
}

/**
 * Returns the file input for a field container, whether the container itself
 * is the input or it contains a nested file input.
 *
 * @param {Element | null | undefined} field
 * @returns {HTMLInputElement | null}
 */
function _waitForPositiveResultWithAbort() {
  _waitForPositiveResultWithAbort = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee9(callback, timeout) {
    var shouldAbort,
      intervalMs,
      remaining,
      result,
      _args9 = arguments;
    return dom_interactions_regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          shouldAbort = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : function () {
            return false;
          };
          intervalMs = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : 100;
          remaining = timeout !== null && timeout !== void 0 ? timeout : Number.MAX_VALUE;
        case 1:
          if (!(remaining >= 0)) {
            _context9.n = 5;
            break;
          }
          if (!shouldAbort()) {
            _context9.n = 2;
            break;
          }
          return _context9.a(2, null);
        case 2:
          result = callback();
          if (!result) {
            _context9.n = 3;
            break;
          }
          return _context9.a(2, result);
        case 3:
          _context9.n = 4;
          return sleep(intervalMs);
        case 4:
          remaining -= intervalMs;
          _context9.n = 1;
          break;
        case 5:
          return _context9.a(2, null);
      }
    }, _callee9);
  }));
  return _waitForPositiveResultWithAbort.apply(this, arguments);
}
function getFileInputInsideField(field) {
  if (!field) return null;
  return field.tagName === 'INPUT' && field.type === 'file' ? field : field.querySelector('input[type="file"]');
}
var DROPDOWN_WAIT_TIMEOUT_MS = 5000;

// --- ARIA combobox listboxes ---
// A `role="combobox"` control (a button or a text input) whose options live in the listbox its
// `aria-controls` / `aria-owns` names and are rendered only while it is open — Salesforce
// Lightning's base combobox (picklists and record lookups) among others. The platform supplies
// what is specific (which rows are answers, how a commit shows); these own the generic part.

function getAriaControlledListbox(control) {
  var _control$getAttribute9, _control$getAttribute0, _control$getRootNode, _root$getElementById;
  var id = (control === null || control === void 0 || (_control$getAttribute9 = control.getAttribute) === null || _control$getAttribute9 === void 0 ? void 0 : _control$getAttribute9.call(control, 'aria-controls')) || (control === null || control === void 0 || (_control$getAttribute0 = control.getAttribute) === null || _control$getAttribute0 === void 0 ? void 0 : _control$getAttribute0.call(control, 'aria-owns'));
  if (!id) return null;
  var root = (_control$getRootNode = control.getRootNode) === null || _control$getRootNode === void 0 ? void 0 : _control$getRootNode.call(control);
  return root && root !== document && ((_root$getElementById = root.getElementById) === null || _root$getElementById === void 0 ? void 0 : _root$getElementById.call(root, id)) || document.getElementById(id);
}

// The listbox's options as { element, label, value }: label = the option's visible text (the
// `title` of its text node when it carries one), value = its `data-value`. `filter` drops rows that
// are no answer (a "--None--" placeholder, a lookup's "Show more results" action).
function readAriaListboxOptions(listbox) {
  var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref10$optionSelector = _ref10.optionSelector,
    optionSelector = _ref10$optionSelector === void 0 ? '[role="option"]' : _ref10$optionSelector,
    _ref10$filter = _ref10.filter,
    filter = _ref10$filter === void 0 ? null : _ref10$filter;
  if (!listbox) return [];
  return Array.from(listbox.querySelectorAll(optionSelector)).map(function (element) {
    var _element$querySelecto;
    return {
      element: element,
      label: String(((_element$querySelecto = element.querySelector('[title]')) === null || _element$querySelecto === void 0 ? void 0 : _element$querySelecto.getAttribute('title')) || element.textContent || '').replace(/\s+/g, ' ').trim(),
      value: element.getAttribute('data-value')
    };
  }).filter(function (option) {
    return option.label && (!filter || filter(option));
  });
}

// Open the combobox (a click while aria-expanded is not "true") and wait for its options. A second
// click when the first did not open it: a click that lands while another list is open can be spent
// closing that one. Resolves to the options, [] when none rendered.
function openAriaCombobox(_x16) {
  return _openAriaCombobox.apply(this, arguments);
}

// Commit one option the way a pointer does: press (a list that closes when its input blurs keeps
// itself open while the press is on it), release, click.
function _openAriaCombobox() {
  _openAriaCombobox = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee0(control) {
    var _ref11,
      _ref11$readOptions,
      readOptions,
      _ref11$timeoutMs,
      timeoutMs,
      _ref11$attempts,
      attempts,
      _ref11$shouldAbort,
      shouldAbort,
      read,
      attempt,
      _options,
      _args0 = arguments;
    return dom_interactions_regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          _ref11 = _args0.length > 1 && _args0[1] !== undefined ? _args0[1] : {}, _ref11$readOptions = _ref11.readOptions, readOptions = _ref11$readOptions === void 0 ? null : _ref11$readOptions, _ref11$timeoutMs = _ref11.timeoutMs, timeoutMs = _ref11$timeoutMs === void 0 ? DROPDOWN_WAIT_TIMEOUT_MS : _ref11$timeoutMs, _ref11$attempts = _ref11.attempts, attempts = _ref11$attempts === void 0 ? 2 : _ref11$attempts, _ref11$shouldAbort = _ref11.shouldAbort, shouldAbort = _ref11$shouldAbort === void 0 ? function () {
            return false;
          } : _ref11$shouldAbort;
          if (control) {
            _context0.n = 1;
            break;
          }
          return _context0.a(2, []);
        case 1:
          read = readOptions || function () {
            return readAriaListboxOptions(getAriaControlledListbox(control));
          };
          attempt = 0;
        case 2:
          if (!(attempt < attempts)) {
            _context0.n = 6;
            break;
          }
          if (!shouldAbort()) {
            _context0.n = 3;
            break;
          }
          return _context0.a(2, []);
        case 3:
          if (control.getAttribute('aria-expanded') !== 'true') control.click();
          _context0.n = 4;
          return waitForPositiveResultWithAbort(function () {
            var current = read();
            return current.length ? current : null;
          }, timeoutMs, shouldAbort);
        case 4:
          _options = _context0.v;
          if (!_options) {
            _context0.n = 5;
            break;
          }
          return _context0.a(2, _options);
        case 5:
          attempt += 1;
          _context0.n = 2;
          break;
        case 6:
          return _context0.a(2, []);
      }
    }, _callee0);
  }));
  return _openAriaCombobox.apply(this, arguments);
}
function commitAriaListboxOption(option) {
  var element = (option === null || option === void 0 ? void 0 : option.element) || option;
  if (!element) return;
  var init = {
    bubbles: true,
    cancelable: true,
    composed: true,
    button: 0
  };
  element.dispatchEvent(new MouseEvent('mousedown', _objectSpread(_objectSpread({}, init), {}, {
    buttons: 1
  })));
  element.dispatchEvent(new MouseEvent('mouseup', init));
  element.click();
}

/**
 * Retries an async operation up to maxAttempts times.
 * Rethrows the last error if all attempts fail.
 */
function withRetry(_x17) {
  return _withRetry.apply(this, arguments);
}
function _withRetry() {
  _withRetry = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee1(fn) {
    var maxAttempts,
      lastErr,
      attempt,
      _args1 = arguments,
      _t3;
    return dom_interactions_regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          maxAttempts = _args1.length > 1 && _args1[1] !== undefined ? _args1[1] : 3;
          attempt = 1;
        case 1:
          if (!(attempt <= maxAttempts)) {
            _context1.n = 6;
            break;
          }
          _context1.p = 2;
          _context1.n = 3;
          return fn();
        case 3:
          return _context1.a(2, _context1.v);
        case 4:
          _context1.p = 4;
          _t3 = _context1.v;
          lastErr = _t3;
          if (!(attempt < maxAttempts)) {
            _context1.n = 5;
            break;
          }
          _context1.n = 5;
          return dom_interactions_sleep(500 * attempt);
        case 5:
          attempt++;
          _context1.n = 1;
          break;
        case 6:
          throw lastErr;
        case 7:
          return _context1.a(2);
      }
    }, _callee1, null, [[2, 4]]);
  }));
  return _withRetry.apply(this, arguments);
}
function dispatchKeyboardSequence(target, _ref12) {
  var key = _ref12.key,
    code = _ref12.code,
    keyCode = _ref12.keyCode,
    _ref12$charCode = _ref12.charCode,
    charCode = _ref12$charCode === void 0 ? keyCode : _ref12$charCode;
  if (!(target !== null && target !== void 0 && target.dispatchEvent)) return;
  var eventInit = {
    key: key,
    code: code,
    which: keyCode,
    keyCode: keyCode,
    charCode: charCode,
    bubbles: true,
    cancelable: true,
    composed: true
  };
  ['keydown', 'keypress', 'keyup'].forEach(function (eventType) {
    target.dispatchEvent(new KeyboardEvent(eventType, eventInit));
  });
}
function triggerMouseEvent(node, eventType) {
  var _node$getBoundingClie, _node$getBoundingClie2;
  if (!(node !== null && node !== void 0 && node.dispatchEvent)) return;
  var rect = (_node$getBoundingClie = (_node$getBoundingClie2 = node.getBoundingClientRect) === null || _node$getBoundingClie2 === void 0 ? void 0 : _node$getBoundingClie2.call(node)) !== null && _node$getBoundingClie !== void 0 ? _node$getBoundingClie : {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  };
  var clientX = rect.left + rect.width / 2;
  var clientY = rect.top + rect.height / 2;
  var isPrimaryPress = eventType === 'mousedown' || eventType === 'mouseup' || eventType === 'click';
  node.dispatchEvent(new MouseEvent(eventType, {
    bubbles: true,
    cancelable: true,
    composed: true,
    view: window,
    detail: eventType === 'click' ? 1 : 0,
    button: isPrimaryPress ? 0 : -1,
    buttons: eventType === 'mousedown' ? 1 : 0,
    clientX: clientX,
    clientY: clientY
  }));
}
function triggerEnterEvent(element) {
  var _element$focus;
  if (!(element !== null && element !== void 0 && element.dispatchEvent)) return;
  (_element$focus = element.focus) === null || _element$focus === void 0 || _element$focus.call(element);
  var eventInit = {
    key: 'Enter',
    code: 'Enter',
    which: 13,
    keyCode: 13,
    charCode: 13,
    bubbles: true,
    cancelable: true,
    composed: true
  };
  ['keydown', 'keypress', 'keyup'].forEach(function (eventType) {
    element.dispatchEvent(new KeyboardEvent(eventType, eventInit));
  });
}
function waitForDocumentReady() {
  return new Promise(function (resolve) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
}

// Legacy react-select (v1: `.Select` > `.Select-control` > `.Select-arrow-zone`, options as
// `.Select-menu-outer .Select-option` — HiringThing's dropdowns). Its menu exists only while open. A
// mousedown on the arrow zone opens it directly (v1 handleMouseDownOnArrow sets isOpen without
// waiting for the input's focus, which an unfocused window never delivers), a second one closes it,
// and a mousedown on an option selects it (Option.handleMouseDown → onSelect). `.is-open` on the
// `.Select` marks the open state; `.Select-value-label` holds the chosen label.
var LEGACY_REACT_SELECT_OPTION_SELECTOR = '.Select-menu-outer .Select-option';

// v1 reads only the event type and the primary button; no pointer position or view is needed.
function dispatchPrimaryMouseDown(element) {
  element === null || element === void 0 || element.dispatchEvent(new MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true,
    composed: true,
    button: 0,
    buttons: 1
  }));
}
function getLegacyReactSelectValue(select) {
  var _select$querySelector;
  return (select === null || select === void 0 || (_select$querySelector = select.querySelector('.Select-value-label')) === null || _select$querySelector === void 0 || (_select$querySelector = _select$querySelector.textContent) === null || _select$querySelector === void 0 ? void 0 : _select$querySelector.replace(/\s+/g, ' ').trim()) || '';
}

// Opens the menu and resolves its option nodes as soon as they render ([] when none came within the
// ceiling — a menu of a few hundred countries renders in one React commit).
function openLegacyReactSelectMenu(_x18) {
  return _openLegacyReactSelectMenu.apply(this, arguments);
}
function _openLegacyReactSelectMenu() {
  _openLegacyReactSelectMenu = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee10(select) {
    var _ref13,
      _ref13$shouldAbort,
      shouldAbort,
      _ref13$timeoutMs,
      timeoutMs,
      readOptions,
      _args10 = arguments,
      _t4;
    return dom_interactions_regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _ref13 = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {}, _ref13$shouldAbort = _ref13.shouldAbort, shouldAbort = _ref13$shouldAbort === void 0 ? function () {
            return false;
          } : _ref13$shouldAbort, _ref13$timeoutMs = _ref13.timeoutMs, timeoutMs = _ref13$timeoutMs === void 0 ? DROPDOWN_WAIT_TIMEOUT_MS : _ref13$timeoutMs;
          if (select) {
            _context10.n = 1;
            break;
          }
          return _context10.a(2, []);
        case 1:
          readOptions = function readOptions() {
            var options = Array.from(select.querySelectorAll(LEGACY_REACT_SELECT_OPTION_SELECTOR));
            return options.length ? options : null;
          };
          if (!select.classList.contains('is-open')) {
            dispatchPrimaryMouseDown(select.querySelector('.Select-arrow-zone') || select.querySelector('.Select-control'));
          }
          _context10.n = 2;
          return waitForPositiveResultWithAbort(readOptions, timeoutMs, shouldAbort);
        case 2:
          _t4 = _context10.v;
          if (_t4) {
            _context10.n = 3;
            break;
          }
          _t4 = [];
        case 3:
          return _context10.a(2, _t4);
      }
    }, _callee10);
  }));
  return _openLegacyReactSelectMenu.apply(this, arguments);
}
function closeLegacyReactSelectMenu(select) {
  if (!(select !== null && select !== void 0 && select.classList.contains('is-open'))) return;
  dispatchPrimaryMouseDown(select.querySelector('.Select-arrow-zone'));
}

// Picks `option` (a node from openLegacyReactSelectMenu) and resolves true once the control shows its
// label, false when the pick did not take within the ceiling.
function pickLegacyReactSelectOption(_x19, _x20) {
  return _pickLegacyReactSelectOption.apply(this, arguments);
}

// --- Widget drivers shared by the platform adapters (CONVENTIONS.md §5) ------------------------
function _pickLegacyReactSelectOption() {
  _pickLegacyReactSelectOption = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee11(select, option) {
    var _ref14,
      _ref14$shouldAbort,
      shouldAbort,
      _ref14$timeoutMs,
      timeoutMs,
      label,
      _args11 = arguments,
      _t5;
    return dom_interactions_regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          _ref14 = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : {}, _ref14$shouldAbort = _ref14.shouldAbort, shouldAbort = _ref14$shouldAbort === void 0 ? function () {
            return false;
          } : _ref14$shouldAbort, _ref14$timeoutMs = _ref14.timeoutMs, timeoutMs = _ref14$timeoutMs === void 0 ? DROPDOWN_WAIT_TIMEOUT_MS : _ref14$timeoutMs;
          if (!(!select || !option)) {
            _context11.n = 1;
            break;
          }
          return _context11.a(2, false);
        case 1:
          label = option.textContent.replace(/\s+/g, ' ').trim();
          dispatchPrimaryMouseDown(option);
          _t5 = Boolean;
          _context11.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return getLegacyReactSelectValue(select) === label;
          }, timeoutMs, shouldAbort);
        case 2:
          return _context11.a(2, _t5(_context11.v));
      }
    }, _callee11);
  }));
  return _pickLegacyReactSelectOption.apply(this, arguments);
}
var normalizeWidgetText = function normalizeWidgetText(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
};

// Press a menu option (a react-select option, a country-list entry) with a pointer/mouse sequence
// and a click — WITHOUT focusing it. clickLikeHuman focuses the target between mousedown and click,
// which blurs a react-select combobox: the menu closes and unmounts and the click lands on a detached
// node (Kula, live-verified 2026-09-30: plain / pointer-sequence / real clicks commit, the
// focus-then-click path never does). Pointer events only where the runtime has them (jsdom has none).
function pressOptionElement(element) {
  var _element$getBoundingC3;
  if (!element) return;
  var rect = ((_element$getBoundingC3 = element.getBoundingClientRect) === null || _element$getBoundingC3 === void 0 ? void 0 : _element$getBoundingC3.call(element)) || {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  };
  var init = {
    bubbles: true,
    cancelable: true,
    composed: true,
    button: 0,
    clientX: Math.round(rect.left + Math.min(rect.width / 2, 12)),
    clientY: Math.round(rect.top + Math.min(rect.height / 2, 12))
  };
  var pointer = function pointer(type, buttons) {
    return typeof PointerEvent === 'function' ? new PointerEvent(type, _objectSpread(_objectSpread({}, init), {}, {
      pointerId: 1,
      pointerType: 'mouse',
      isPrimary: true,
      buttons: buttons
    })) : null;
  };
  var dispatch = function dispatch(event) {
    return event && element.dispatchEvent(event);
  };
  dispatch(pointer('pointerdown', 1));
  dispatch(new MouseEvent('mousedown', _objectSpread(_objectSpread({}, init), {}, {
    buttons: 1
  })));
  dispatch(pointer('pointerup', 0));
  dispatch(new MouseEvent('mouseup', init));
  element.click();
}

// react-select (v5): the combobox `input[role=combobox]` names its OPEN menu through aria-controls
// (the listbox may be portalled to <body>); options only exist while it is open, as [role=option]
// nodes whose ids carry the input's `react-select-N` prefix.
function getReactSelectListbox(input) {
  var _input$getAttribute, _input$getAttribute2;
  var id = (input === null || input === void 0 || (_input$getAttribute = input.getAttribute) === null || _input$getAttribute === void 0 ? void 0 : _input$getAttribute.call(input, 'aria-controls')) || (input === null || input === void 0 || (_input$getAttribute2 = input.getAttribute) === null || _input$getAttribute2 === void 0 ? void 0 : _input$getAttribute2.call(input, 'aria-owns'));
  return id ? document.getElementById(id) : null;
}
function isReactSelectMenuOpen(input) {
  var _input$getAttribute3;
  return (input === null || input === void 0 || (_input$getAttribute3 = input.getAttribute) === null || _input$getAttribute3 === void 0 ? void 0 : _input$getAttribute3.call(input, 'aria-expanded')) === 'true' || Boolean(getReactSelectListbox(input));
}

// The open menu's options as { element, text, selected } (selected = aria-selected, which a
// multi-select keeps on its checked options while the menu stays open).
function readReactSelectOptions(input) {
  var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref15$clean = _ref15.clean,
    clean = _ref15$clean === void 0 ? normalizeWidgetText : _ref15$clean;
  var listbox = getReactSelectListbox(input);
  var prefix = ((input === null || input === void 0 ? void 0 : input.id) || '').replace(/-input$/, '');
  return Array.from((listbox || document).querySelectorAll('[role="option"]')).filter(function (node) {
    return listbox || !prefix || (node.id || '').startsWith(prefix);
  }).map(function (element) {
    return {
      element: element,
      text: clean(element.textContent),
      selected: element.getAttribute('aria-selected') === 'true'
    };
  }).filter(function (option) {
    return option.text;
  });
}
function waitForReactSelectOptions(_x21) {
  return _waitForReactSelectOptions.apply(this, arguments);
}

// react-datepicker calendar: a day grid ("October 2026" header), a month grid of a
// `showMonthYearPicker` ("2026" header, arrows step a YEAR), or month/year <select>s when the picker
// renders them. Navigates with the arrows until the header shows the wanted month — after each press
// it waits for the header to change (the page's own signal, never a fixed settle) — then presses the
// day cell, else the month cell. Returns false when the calendar cannot show or offer that date (no
// header, no arrow that way, a disabled cell): the caller throws, so the field never reads filled.
// `click` is the platform's press (remote input on the runner lane, a synthetic click elsewhere).
function _waitForReactSelectOptions() {
  _waitForReactSelectOptions = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee12(input) {
    var _ref16,
      _ref16$shouldAbort,
      shouldAbort,
      _ref16$timeoutMs,
      timeoutMs,
      clean,
      _args12 = arguments;
    return dom_interactions_regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          _ref16 = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {}, _ref16$shouldAbort = _ref16.shouldAbort, shouldAbort = _ref16$shouldAbort === void 0 ? function () {
            return false;
          } : _ref16$shouldAbort, _ref16$timeoutMs = _ref16.timeoutMs, timeoutMs = _ref16$timeoutMs === void 0 ? DROPDOWN_WAIT_TIMEOUT_MS : _ref16$timeoutMs, clean = _ref16.clean;
          return _context12.a(2, waitForPositiveResultWithAbort(function () {
            var options = readReactSelectOptions(input, clean ? {
              clean: clean
            } : {});
            return options.length ? options : null;
          }, timeoutMs, shouldAbort));
      }
    }, _callee12);
  }));
  return _waitForReactSelectOptions.apply(this, arguments);
}
var DATEPICKER_HEADER_SELECTOR = '.react-datepicker__current-month, .react-datepicker-year-header';
var DATEPICKER_NAV_WAIT_MS = 1500;
function parseDatepickerHeader(text) {
  var clean = normalizeWidgetText(text);
  var yearOnly = clean.match(/^(\d{4})$/);
  if (yearOnly) return {
    year: Number(yearOnly[1]),
    month: null
  };
  var parsed = new Date("".concat(clean, " 1"));
  if (Number.isNaN(parsed.getTime())) return null;
  return {
    year: parsed.getFullYear(),
    month: parsed.getMonth() + 1
  };
}
var isDatepickerCellDisabled = function isDatepickerCellDisabled(cell) {
  var _cell$getAttribute, _cell$classList;
  return Boolean((cell === null || cell === void 0 || (_cell$getAttribute = cell.getAttribute) === null || _cell$getAttribute === void 0 ? void 0 : _cell$getAttribute.call(cell, 'aria-disabled')) === 'true' || Array.from((_cell$classList = cell === null || cell === void 0 ? void 0 : cell.classList) !== null && _cell$classList !== void 0 ? _cell$classList : []).some(function (name) {
    return /--disabled$/.test(name);
  }));
};
function pickReactDatepickerDate(_x22, _x23) {
  return _pickReactDatepickerDate.apply(this, arguments);
}

// intl-tel-input (v17+, `.iti` markup): select the country whose dial code prefixes `digits` (the
// E.164 digits without '+') from the widget's own country list — the longest dial code wins; a code
// several countries share (+1, +7, +44) keeps the selected country when it shares it, else the
// conventional owner. Returns { dial, countryCode } of the country selected afterwards, or null when
// the widget has no list or no country matches. The national digits are the caller's to type.
function _pickReactDatepickerDate() {
  _pickReactDatepickerDate = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee13(calendar, _ref17) {
    var year,
      month,
      _ref17$day,
      day,
      _ref18,
      _ref18$click,
      click,
      _ref18$shouldAbort,
      shouldAbort,
      _ref18$maxSteps,
      maxSteps,
      monthSelect,
      yearSelect,
      headerText,
      _loop,
      _ret,
      step,
      dayCell,
      target,
      _args14 = arguments;
    return dom_interactions_regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          year = _ref17.year, month = _ref17.month, _ref17$day = _ref17.day, day = _ref17$day === void 0 ? 1 : _ref17$day;
          _ref18 = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : {}, _ref18$click = _ref18.click, click = _ref18$click === void 0 ? clickLikeHuman : _ref18$click, _ref18$shouldAbort = _ref18.shouldAbort, shouldAbort = _ref18$shouldAbort === void 0 ? function () {
            return false;
          } : _ref18$shouldAbort, _ref18$maxSteps = _ref18.maxSteps, maxSteps = _ref18$maxSteps === void 0 ? 36 : _ref18$maxSteps;
          if (!(!calendar || !year || !month)) {
            _context14.n = 1;
            break;
          }
          return _context14.a(2, false);
        case 1:
          monthSelect = calendar.querySelector('.react-datepicker__month-select');
          yearSelect = calendar.querySelector('.react-datepicker__year-select');
          if (!(monthSelect && yearSelect)) {
            _context14.n = 2;
            break;
          }
          fillSelectInput(yearSelect, String(year));
          fillSelectInput(monthSelect, String(month - 1));
          _context14.n = 7;
          break;
        case 2:
          headerText = function headerText() {
            var _calendar$querySelect, _calendar$querySelect2;
            return (_calendar$querySelect = (_calendar$querySelect2 = calendar.querySelector(DATEPICKER_HEADER_SELECTOR)) === null || _calendar$querySelect2 === void 0 ? void 0 : _calendar$querySelect2.textContent) !== null && _calendar$querySelect !== void 0 ? _calendar$querySelect : '';
          };
          _loop = /*#__PURE__*/dom_interactions_regenerator().m(function _loop() {
            var shown, diff, nav, before, moved;
            return dom_interactions_regenerator().w(function (_context13) {
              while (1) switch (_context13.n) {
                case 0:
                  if (!shouldAbort()) {
                    _context13.n = 1;
                    break;
                  }
                  return _context13.a(2, {
                    v: false
                  });
                case 1:
                  shown = parseDatepickerHeader(headerText());
                  if (shown) {
                    _context13.n = 2;
                    break;
                  }
                  return _context13.a(2, {
                    v: false
                  });
                case 2:
                  diff = shown.month == null ? (year - shown.year) * 12 : (year - shown.year) * 12 + (month - shown.month);
                  if (!(diff === 0)) {
                    _context13.n = 3;
                    break;
                  }
                  return _context13.a(2, 0);
                case 3:
                  if (!(step === maxSteps)) {
                    _context13.n = 4;
                    break;
                  }
                  return _context13.a(2, {
                    v: false
                  });
                case 4:
                  nav = calendar.querySelector(diff > 0 ? '.react-datepicker__navigation--next' : '.react-datepicker__navigation--previous');
                  if (nav) {
                    _context13.n = 5;
                    break;
                  }
                  return _context13.a(2, {
                    v: false
                  });
                case 5:
                  before = headerText();
                  _context13.n = 6;
                  return click(nav, {
                    shouldAbort: shouldAbort
                  });
                case 6:
                  _context13.n = 7;
                  return waitForPositiveResultWithAbort(function () {
                    return headerText() !== before;
                  }, DATEPICKER_NAV_WAIT_MS, shouldAbort, 20);
                case 7:
                  moved = _context13.v;
                  if (moved) {
                    _context13.n = 8;
                    break;
                  }
                  return _context13.a(2, {
                    v: false
                  });
                case 8:
                  return _context13.a(2);
              }
            }, _loop);
          });
          step = 0;
        case 3:
          if (!(step <= maxSteps)) {
            _context14.n = 7;
            break;
          }
          return _context14.d(_regeneratorValues(_loop()), 4);
        case 4:
          _ret = _context14.v;
          if (!(_ret === 0)) {
            _context14.n = 5;
            break;
          }
          return _context14.a(3, 7);
        case 5:
          if (!_ret) {
            _context14.n = 6;
            break;
          }
          return _context14.a(2, _ret.v);
        case 6:
          step += 1;
          _context14.n = 3;
          break;
        case 7:
          dayCell = Array.from(calendar.querySelectorAll('.react-datepicker__day')).find(function (cell) {
            return !cell.classList.contains('react-datepicker__day--outside-month') && Number(normalizeWidgetText(cell.textContent)) === day;
          });
          target = dayCell || calendar.querySelector(".react-datepicker__month-".concat(month - 1));
          if (!(!target || isDatepickerCellDisabled(target))) {
            _context14.n = 8;
            break;
          }
          return _context14.a(2, false);
        case 8:
          _context14.n = 9;
          return click(target, {
            shouldAbort: shouldAbort
          });
        case 9:
          return _context14.a(2, true);
      }
    }, _callee13);
  }));
  return _pickReactDatepickerDate.apply(this, arguments);
}
var ITI_SHARED_DIAL_OWNERS = (/* unused pure expression or super */ null && (['us', 'ca', 'gb', 'ru', 'kz']));
function getIntlTelSelectedCountry(widget) {
  var _widget$querySelector, _flag$classList, _widget$querySelector2, _normalizeWidgetText$, _widget$querySelector3, _widget$querySelector4;
  var flag = widget === null || widget === void 0 || (_widget$querySelector = widget.querySelector) === null || _widget$querySelector === void 0 ? void 0 : _widget$querySelector.call(widget, '.iti__selected-country .iti__flag, .iti__selected-flag .iti__flag');
  var countryCode = Array.from((_flag$classList = flag === null || flag === void 0 ? void 0 : flag.classList) !== null && _flag$classList !== void 0 ? _flag$classList : []).map(function (name) {
    var _name$match;
    return (_name$match = name.match(/^iti__([a-z]{2})$/)) === null || _name$match === void 0 ? void 0 : _name$match[1];
  }).find(Boolean) || null;
  var dialText = normalizeWidgetText(widget === null || widget === void 0 || (_widget$querySelector2 = widget.querySelector) === null || _widget$querySelector2 === void 0 || (_widget$querySelector2 = _widget$querySelector2.call(widget, '.iti__selected-dial-code')) === null || _widget$querySelector2 === void 0 ? void 0 : _widget$querySelector2.textContent) || ((_normalizeWidgetText$ = normalizeWidgetText(widget === null || widget === void 0 || (_widget$querySelector3 = widget.querySelector) === null || _widget$querySelector3 === void 0 || (_widget$querySelector3 = _widget$querySelector3.call(widget, '.iti__selected-country, .iti__selected-flag')) === null || _widget$querySelector3 === void 0 || (_widget$querySelector4 = _widget$querySelector3.getAttribute) === null || _widget$querySelector4 === void 0 ? void 0 : _widget$querySelector4.call(_widget$querySelector3, 'title')).match(/\+\d+/)) === null || _normalizeWidgetText$ === void 0 ? void 0 : _normalizeWidgetText$[0]) || '';
  return {
    countryCode: countryCode,
    dial: dialText.replace(/\D/g, '') || null
  };
}
function selectIntlTelCountryForNumber(_x24, _x25) {
  return _selectIntlTelCountryForNumber.apply(this, arguments);
}
function _selectIntlTelCountryForNumber() {
  _selectIntlTelCountryForNumber = dom_interactions_asyncToGenerator(/*#__PURE__*/dom_interactions_regenerator().m(function _callee14(widget, digits) {
    var _widget$querySelector5, _widget$querySelector6, _chosen$element$scrol, _chosen$element;
    var _ref19,
      _ref19$click,
      click,
      _ref19$shouldAbort,
      shouldAbort,
      _ref19$timeoutMs,
      timeoutMs,
      items,
      wanted,
      options,
      matching,
      longest,
      candidates,
      current,
      chosen,
      button,
      dropdown,
      selected,
      _args15 = arguments;
    return dom_interactions_regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          _ref19 = _args15.length > 2 && _args15[2] !== undefined ? _args15[2] : {}, _ref19$click = _ref19.click, click = _ref19$click === void 0 ? clickLikeHuman : _ref19$click, _ref19$shouldAbort = _ref19.shouldAbort, shouldAbort = _ref19$shouldAbort === void 0 ? function () {
            return false;
          } : _ref19$shouldAbort, _ref19$timeoutMs = _ref19.timeoutMs, timeoutMs = _ref19$timeoutMs === void 0 ? DROPDOWN_WAIT_TIMEOUT_MS : _ref19$timeoutMs;
          items = Array.from((_widget$querySelector5 = widget === null || widget === void 0 || (_widget$querySelector6 = widget.querySelectorAll) === null || _widget$querySelector6 === void 0 ? void 0 : _widget$querySelector6.call(widget, 'li.iti__country[data-dial-code][data-country-code]')) !== null && _widget$querySelector5 !== void 0 ? _widget$querySelector5 : []);
          wanted = String(digits !== null && digits !== void 0 ? digits : '').replace(/\D/g, '');
          if (!(!items.length || !wanted)) {
            _context15.n = 1;
            break;
          }
          return _context15.a(2, null);
        case 1:
          options = items.map(function (element) {
            return {
              element: element,
              dial: String(element.getAttribute('data-dial-code')).replace(/\D/g, ''),
              countryCode: String(element.getAttribute('data-country-code')).toLowerCase()
            };
          });
          matching = options.filter(function (option) {
            return option.dial && wanted.startsWith(option.dial);
          });
          if (matching.length) {
            _context15.n = 2;
            break;
          }
          return _context15.a(2, null);
        case 2:
          longest = Math.max.apply(Math, _toConsumableArray(matching.map(function (option) {
            return option.dial.length;
          })));
          candidates = matching.filter(function (option) {
            return option.dial.length === longest;
          });
          current = getIntlTelSelectedCountry(widget);
          chosen = candidates.find(function (option) {
            return option.countryCode === current.countryCode;
          }) || ITI_SHARED_DIAL_OWNERS.map(function (code) {
            return candidates.find(function (option) {
              return option.countryCode === code;
            });
          }).find(Boolean) || candidates[0];
          if (!(chosen.countryCode === current.countryCode)) {
            _context15.n = 3;
            break;
          }
          return _context15.a(2, {
            dial: chosen.dial,
            countryCode: chosen.countryCode
          });
        case 3:
          button = widget.querySelector('.iti__selected-country, .iti__selected-flag');
          if (!(!button || shouldAbort())) {
            _context15.n = 4;
            break;
          }
          return _context15.a(2, null);
        case 4:
          _context15.n = 5;
          return click(button, {
            shouldAbort: shouldAbort
          });
        case 5:
          dropdown = chosen.element.closest('.iti__dropdown-content, .iti__country-list');
          _context15.n = 6;
          return waitForPositiveResultWithAbort(function () {
            return !(dropdown !== null && dropdown !== void 0 && dropdown.classList.contains('iti__hide'));
          }, timeoutMs, shouldAbort, 50);
        case 6:
          (_chosen$element$scrol = (_chosen$element = chosen.element).scrollIntoView) === null || _chosen$element$scrol === void 0 || _chosen$element$scrol.call(_chosen$element, {
            block: 'nearest'
          });
          pressOptionElement(chosen.element);
          _context15.n = 7;
          return waitForPositiveResultWithAbort(function () {
            return getIntlTelSelectedCountry(widget).countryCode === chosen.countryCode ? true : null;
          }, timeoutMs, shouldAbort, 50);
        case 7:
          selected = _context15.v;
          return _context15.a(2, selected ? {
            dial: chosen.dial,
            countryCode: chosen.countryCode
          } : null);
      }
    }, _callee14);
  }));
  return _selectIntlTelCountryForNumber.apply(this, arguments);
}
;// ../../packages/job-parsers/content/platforms/date-utils.js
var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function parseProfileDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return {
    month: null,
    day: null,
    year: null
  };
  var value = dateStr.trim();
  if (!value) return {
    month: null,
    day: null,
    year: null
  };
  var pad = function pad(part) {
    return part ? String(part).padStart(2, '0') : null;
  };
  var isoMatch = value.match(/^(\d{4})(?:-(\d{1,2})(?:-(\d{1,2}))?)?(?:T.*)?$/);
  if (isoMatch) {
    return {
      month: pad(isoMatch[2]),
      day: pad(isoMatch[3]),
      year: isoMatch[1]
    };
  }
  var slashMatch = value.match(/^(\d{1,2})[\/\-](\d{4})$/);
  if (slashMatch) {
    return {
      month: slashMatch[1].padStart(2, '0'),
      day: null,
      year: slashMatch[2]
    };
  }
  var numericDateMatch = value.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (numericDateMatch) {
    var year = numericDateMatch[3].length === 2 ? "20".concat(numericDateMatch[3]) : numericDateMatch[3];
    return {
      month: numericDateMatch[1].padStart(2, '0'),
      day: numericDateMatch[2].padStart(2, '0'),
      year: year
    };
  }
  var nameMatch = value.match(/^([A-Za-z]+)\s+(?:(\d{1,2}),?\s+)?(\d{4})$/);
  if (nameMatch) {
    var monthIndex = MONTH_NAMES.findIndex(function (month) {
      return month.toLowerCase().startsWith(nameMatch[1].toLowerCase());
    });
    return {
      month: monthIndex >= 0 ? String(monthIndex + 1).padStart(2, '0') : null,
      day: pad(nameMatch[2]),
      year: nameMatch[3]
    };
  }
  if (/^\d{4}$/.test(value)) return {
    month: null,
    day: null,
    year: value
  };
  return {
    month: null,
    day: null,
    year: null
  };
}
function getMonthDisplay(monthNum) {
  if (!monthNum) return null;
  var monthIndex = parseInt(monthNum, 10);
  return monthIndex >= 1 && monthIndex <= 12 ? MONTH_NAMES[monthIndex - 1] : monthNum;
}
function getProfileDatePart(dateStr, datePart) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$displayMonth = _ref.displayMonth,
    displayMonth = _ref$displayMonth === void 0 ? false : _ref$displayMonth;
  var parsed = parseProfileDate(dateStr);
  if (datePart === 'month') {
    if (!parsed.month) return null;
    return displayMonth ? getMonthDisplay(parsed.month) : parsed.month;
  }
  if (datePart === 'year') {
    return parsed.year || null;
  }
  return null;
}
var pad2 = function pad2(part) {
  return String(part).padStart(2, '0');
};

// A date answer as the ISO `YYYY-MM-DD` a native <input type="date"> (or a flatpickr input) commits —
// "11/15/2026" or "15.11.2026" typed into one leave it empty — or '' when the answer names no full
// date. Reads ISO (with or without a time), US M/D/YYYY, European dotted D.M.YYYY and
// "Month D, YYYY". `firstOfMonth` turns a month-only answer ("06/2026") into its first day.
function toIsoDateAnswer(value) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref2$firstOfMonth = _ref2.firstOfMonth,
    firstOfMonth = _ref2$firstOfMonth === void 0 ? false : _ref2$firstOfMonth;
  var text = String(value !== null && value !== void 0 ? value : '').trim();
  if (!text) return '';
  var dotted = text.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (dotted) return "".concat(dotted[3], "-").concat(pad2(dotted[2]), "-").concat(pad2(dotted[1]));
  var _parseProfileDate = parseProfileDate(text),
    year = _parseProfileDate.year,
    month = _parseProfileDate.month,
    day = _parseProfileDate.day;
  if (!year || !month) return '';
  if (day) return "".concat(year, "-").concat(month, "-").concat(day);
  return firstOfMonth ? "".concat(year, "-").concat(month, "-01") : '';
}

// Today in the browser's own calendar, as `YYYY-MM-DD` (a signature date is the day the form is filled).
function todayIsoDate() {
  var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  return "".concat(now.getFullYear(), "-").concat(pad2(now.getMonth() + 1), "-").concat(pad2(now.getDate()));
}
;// ../../packages/job-parsers/content/platforms/extension-client.js
function extension_client_typeof(o) { "@babel/helpers - typeof"; return extension_client_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, extension_client_typeof(o); }
function extension_client_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function extension_client_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? extension_client_ownKeys(Object(t), !0).forEach(function (r) { extension_client_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : extension_client_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function extension_client_defineProperty(e, r, t) { return (r = extension_client_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function extension_client_toPropertyKey(t) { var i = extension_client_toPrimitive(t, "string"); return "symbol" == extension_client_typeof(i) ? i : i + ""; }
function extension_client_toPrimitive(t, r) { if ("object" != extension_client_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != extension_client_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function extension_client_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return extension_client_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (extension_client_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, extension_client_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, extension_client_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), extension_client_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", extension_client_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), extension_client_regeneratorDefine2(u), extension_client_regeneratorDefine2(u, o, "Generator"), extension_client_regeneratorDefine2(u, n, function () { return this; }), extension_client_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (extension_client_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function extension_client_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } extension_client_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { extension_client_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, extension_client_regeneratorDefine2(e, r, n, t); }
function extension_client_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function extension_client_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { extension_client_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { extension_client_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function sendRuntimeMessage(_x) {
  return _sendRuntimeMessage.apply(this, arguments);
}
function _sendRuntimeMessage() {
  _sendRuntimeMessage = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee(payload) {
    var fallbackError,
      response,
      _args = arguments;
    return extension_client_regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          fallbackError = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'Runtime request failed';
          _context.n = 1;
          return chrome.runtime.sendMessage(payload);
        case 1:
          response = _context.v;
          if (response !== null && response !== void 0 && response.success) {
            _context.n = 2;
            break;
          }
          throw new Error((response === null || response === void 0 ? void 0 : response.error) || fallbackError);
        case 2:
          return _context.a(2, response.data);
      }
    }, _callee);
  }));
  return _sendRuntimeMessage.apply(this, arguments);
}
function getAnswer(_x2) {
  return _getAnswer.apply(this, arguments);
}
function _getAnswer() {
  _getAnswer = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee2(question) {
    var type,
      options,
      constraints,
      fieldId,
      refetch,
      referenceQaPairs,
      payload,
      _args2 = arguments;
    return extension_client_regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          type = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'text';
          options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : [];
          constraints = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
          fieldId = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : null;
          refetch = _args2.length > 5 && _args2[5] !== undefined ? _args2[5] : false;
          referenceQaPairs = _args2.length > 6 && _args2[6] !== undefined ? _args2[6] : [];
          payload = {
            message_type: 'getTextAnswer',
            text: question,
            type: type,
            options: options,
            constraints: constraints
          };
          if (fieldId != null) payload.fieldId = fieldId;
          if (refetch) payload.refetch = true;
          if ((referenceQaPairs === null || referenceQaPairs === void 0 ? void 0 : referenceQaPairs.length) > 0) payload.referenceQaPairs = referenceQaPairs;
          _context2.n = 1;
          return sendRuntimeMessage(payload, 'Failed to get answer');
        case 1:
          return _context2.a(2, _context2.v);
      }
    }, _callee2);
  }));
  return _getAnswer.apply(this, arguments);
}
function getEmbeddingMatch(_x3, _x4) {
  return _getEmbeddingMatch.apply(this, arguments);
}
function _getEmbeddingMatch() {
  _getEmbeddingMatch = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee3(value, options) {
    var normalizedValue;
    return extension_client_regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (!(value == null)) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, null);
        case 1:
          normalizedValue = typeof value === 'string' ? value.trim() : value;
          if (!isPlaceholderTextValue(normalizedValue)) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, null);
        case 2:
          _context3.n = 3;
          return sendRuntimeMessage({
            message_type: 'getEmbeddingMatch',
            value: normalizedValue,
            options: options
          }, 'Failed to get embedding match');
        case 3:
          return _context3.a(2, _context3.v);
      }
    }, _callee3);
  }));
  return _getEmbeddingMatch.apply(this, arguments);
}
function getProfileSectionData() {
  return _getProfileSectionData.apply(this, arguments);
}
function _getProfileSectionData() {
  _getProfileSectionData = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee4() {
    return extension_client_regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return sendRuntimeMessage({
            message_type: 'getProfileSectionData'
          }, 'Failed to get profile section data');
        case 1:
          return _context4.a(2, _context4.v);
      }
    }, _callee4);
  }));
  return _getProfileSectionData.apply(this, arguments);
}
function getResumeForAutofill() {
  return _getResumeForAutofill.apply(this, arguments);
}

// Profile photo for ATS photo fields (Workable "Photo"); null when the profile has none. `required`
// (with the field's question / fieldId) lets the auto-apply background PARK the application for the
// owner instead of skipping a mandatory field; the main extension's background ignores the extras.
function _getResumeForAutofill() {
  _getResumeForAutofill = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee5() {
    return extension_client_regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return sendRuntimeMessage({
            message_type: 'getResumeForAutofill'
          }, 'Failed to get resume for autofill');
        case 1:
          return _context5.a(2, _context5.v);
      }
    }, _callee5);
  }));
  return _getResumeForAutofill.apply(this, arguments);
}
function getProfilePhotoForAutofill() {
  return _getProfilePhotoForAutofill.apply(this, arguments);
}
function _getProfilePhotoForAutofill() {
  _getProfilePhotoForAutofill = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee6() {
    var _ref,
      _ref$question,
      question,
      _ref$fieldId,
      fieldId,
      _ref$required,
      required,
      payload,
      _args6 = arguments;
    return extension_client_regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _ref = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, _ref$question = _ref.question, question = _ref$question === void 0 ? null : _ref$question, _ref$fieldId = _ref.fieldId, fieldId = _ref$fieldId === void 0 ? null : _ref$fieldId, _ref$required = _ref.required, required = _ref$required === void 0 ? false : _ref$required;
          payload = {
            message_type: 'getProfilePhotoForAutofill'
          };
          if (question) payload.question = question;
          if (fieldId != null) payload.fieldId = fieldId;
          if (required === true) payload.required = true;
          _context6.n = 1;
          return sendRuntimeMessage(payload, 'Failed to get profile photo for autofill');
        case 1:
          return _context6.a(2, _context6.v);
      }
    }, _callee6);
  }));
  return _getProfilePhotoForAutofill.apply(this, arguments);
}
function getCoverLetterForAutofill() {
  return _getCoverLetterForAutofill.apply(this, arguments);
}
function _getCoverLetterForAutofill() {
  _getCoverLetterForAutofill = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee7() {
    var constraints,
      _ref2,
      _ref2$coverLetterId,
      coverLetterId,
      _ref2$forceGenerate,
      forceGenerate,
      payload,
      _args7 = arguments;
    return extension_client_regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          constraints = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
          _ref2 = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {}, _ref2$coverLetterId = _ref2.coverLetterId, coverLetterId = _ref2$coverLetterId === void 0 ? null : _ref2$coverLetterId, _ref2$forceGenerate = _ref2.forceGenerate, forceGenerate = _ref2$forceGenerate === void 0 ? false : _ref2$forceGenerate;
          payload = {
            message_type: 'getCoverLetterForAutofill',
            constraints: constraints
          };
          if (coverLetterId != null) payload.coverLetterId = coverLetterId;
          if (forceGenerate) payload.forceGenerate = true;
          _context7.n = 1;
          return sendRuntimeMessage(payload, 'Failed to get cover letter for autofill');
        case 1:
          return _context7.a(2, _context7.v);
      }
    }, _callee7);
  }));
  return _getCoverLetterForAutofill.apply(this, arguments);
}
function getVerificationCodeForAutofill() {
  return _getVerificationCodeForAutofill.apply(this, arguments);
}
function _getVerificationCodeForAutofill() {
  _getVerificationCodeForAutofill = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee8() {
    return extension_client_regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          _context8.n = 1;
          return sendRuntimeMessage({
            message_type: 'getVerificationCodeForAutofill'
          }, 'Failed to get verification code for autofill');
        case 1:
          return _context8.a(2, _context8.v);
      }
    }, _callee8);
  }));
  return _getVerificationCodeForAutofill.apply(this, arguments);
}
function getCaptchaTokenForAutofill() {
  return _getCaptchaTokenForAutofill.apply(this, arguments);
}
function _getCaptchaTokenForAutofill() {
  _getCaptchaTokenForAutofill = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee9() {
    var _ref3,
      sitekey,
      _ref3$pageurl,
      pageurl,
      _ref3$type,
      type,
      _ref3$action,
      action,
      _ref3$cdata,
      cdata,
      _ref3$enterprise,
      enterprise,
      _ref3$apiDomain,
      apiDomain,
      _ref3$invisible,
      invisible,
      _ref3$image,
      image,
      _ref3$userAgent,
      userAgent,
      _args9 = arguments;
    return extension_client_regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          _ref3 = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {}, sitekey = _ref3.sitekey, _ref3$pageurl = _ref3.pageurl, pageurl = _ref3$pageurl === void 0 ? window.location.href : _ref3$pageurl, _ref3$type = _ref3.type, type = _ref3$type === void 0 ? 'recaptcha_v2' : _ref3$type, _ref3$action = _ref3.action, action = _ref3$action === void 0 ? null : _ref3$action, _ref3$cdata = _ref3.cdata, cdata = _ref3$cdata === void 0 ? null : _ref3$cdata, _ref3$enterprise = _ref3.enterprise, enterprise = _ref3$enterprise === void 0 ? false : _ref3$enterprise, _ref3$apiDomain = _ref3.apiDomain, apiDomain = _ref3$apiDomain === void 0 ? null : _ref3$apiDomain, _ref3$invisible = _ref3.invisible, invisible = _ref3$invisible === void 0 ? false : _ref3$invisible, _ref3$image = _ref3.image, image = _ref3$image === void 0 ? null : _ref3$image, _ref3$userAgent = _ref3.userAgent, userAgent = _ref3$userAgent === void 0 ? null : _ref3$userAgent;
          _context9.n = 1;
          return sendRuntimeMessage(extension_client_objectSpread(extension_client_objectSpread(extension_client_objectSpread(extension_client_objectSpread(extension_client_objectSpread(extension_client_objectSpread(extension_client_objectSpread({
            message_type: 'getCaptchaTokenForAutofill',
            sitekey: sitekey,
            pageurl: pageurl,
            type: type
          }, action ? {
            action: action
          } : {}), cdata ? {
            cdata: cdata
          } : {}), enterprise ? {
            enterprise: enterprise
          } : {}), apiDomain ? {
            apiDomain: apiDomain
          } : {}), invisible ? {
            invisible: invisible
          } : {}), userAgent ? {
            userAgent: userAgent
          } : {}), image ? {
            image: image
          } : {}), 'Failed to get captcha token for autofill');
        case 1:
          return _context9.a(2, _context9.v);
      }
    }, _callee9);
  }));
  return _getCaptchaTokenForAutofill.apply(this, arguments);
}
function getPasswordForAutofill() {
  return _getPasswordForAutofill.apply(this, arguments);
}

// Resolves the platform password AND whether the vault entry already existed. Returns
// { password, created } or { type: 'skip' } (no session/profile). `created: true` means no saved
// password existed — the auth takeover should SIGN UP (create the account); `false` means SIGN IN.
// Registered in all three backgrounds (autoapply's autofill-handlers.js + the main/ambohire
// background.js). Must be the FIRST vault resolve for the tenant — a prior getPasswordForAutofill
// call creates the entry and flips `created` to false.
function _getPasswordForAutofill() {
  _getPasswordForAutofill = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee0() {
    var _ref4,
      _ref4$url,
      url,
      _ref4$domain,
      domain,
      payload,
      _args0 = arguments;
    return extension_client_regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          _ref4 = _args0.length > 0 && _args0[0] !== undefined ? _args0[0] : {}, _ref4$url = _ref4.url, url = _ref4$url === void 0 ? window.location.href : _ref4$url, _ref4$domain = _ref4.domain, domain = _ref4$domain === void 0 ? null : _ref4$domain;
          payload = {
            message_type: 'getPasswordForAutofill',
            url: url
          };
          if (domain) payload.domain = domain;
          _context0.n = 1;
          return sendRuntimeMessage(payload, 'Failed to get password for autofill');
        case 1:
          return _context0.a(2, _context0.v);
      }
    }, _callee0);
  }));
  return _getPasswordForAutofill.apply(this, arguments);
}
function resolvePlatformPasswordState() {
  return _resolvePlatformPasswordState.apply(this, arguments);
}

// Sign-in on a platform auth wall failed terminally (wrong/unknown credentials after the
// signup-first fallback) — a human must handle it. The autoapply background forwards this to the
// driver timeout endpoint (schedule pause + takeover broadcast); the main/ambohire background
// surfaces a panel status. Fire-and-forget from the auth driver; never blocks the run.
function _resolvePlatformPasswordState() {
  _resolvePlatformPasswordState = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee1() {
    var _ref5,
      _ref5$url,
      url,
      _ref5$domain,
      domain,
      payload,
      _args1 = arguments;
    return extension_client_regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          _ref5 = _args1.length > 0 && _args1[0] !== undefined ? _args1[0] : {}, _ref5$url = _ref5.url, url = _ref5$url === void 0 ? window.location.href : _ref5$url, _ref5$domain = _ref5.domain, domain = _ref5$domain === void 0 ? null : _ref5$domain;
          payload = {
            message_type: 'resolvePlatformPasswordState',
            url: url
          };
          if (domain) payload.domain = domain;
          _context1.n = 1;
          return sendRuntimeMessage(payload, 'Failed to resolve platform password state');
        case 1:
          return _context1.a(2, _context1.v);
      }
    }, _callee1);
  }));
  return _resolvePlatformPasswordState.apply(this, arguments);
}
function reportAutofillAuthFailure() {
  return _reportAutofillAuthFailure.apply(this, arguments);
}

// A REQUIRED live challenge (a post-submit email/SMS security code, Workday's verify-account link)
// could not be fetched from the linked inbox. The field cannot be skipped — the application cannot
// proceed without it — so the autoapply background hands the row to a human assistant under the
// 'verification_failed' reason (runner lane: server handoff + tab close; assistant lane: local hold).
// The main/ambohire backgrounds no-op (the user is present and sees the skipped field). reason ∈
// 'not_found' (poll exhausted) | 'mailbox_not_connected' (nothing to poll). Fire-and-forget: callers
// swallow errors; it never blocks the run.
function _reportAutofillAuthFailure() {
  _reportAutofillAuthFailure = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee10() {
    var _ref6,
      _ref6$platform,
      platform,
      _ref6$reason,
      reason,
      _ref6$detail,
      detail,
      _args10 = arguments;
    return extension_client_regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _ref6 = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {}, _ref6$platform = _ref6.platform, platform = _ref6$platform === void 0 ? null : _ref6$platform, _ref6$reason = _ref6.reason, reason = _ref6$reason === void 0 ? 'signin_failed' : _ref6$reason, _ref6$detail = _ref6.detail, detail = _ref6$detail === void 0 ? null : _ref6$detail;
          _context10.n = 1;
          return sendRuntimeMessage({
            message_type: 'reportAutofillAuthFailure',
            platform: platform,
            reason: reason,
            detail: detail
          }, 'Failed to report autofill auth failure');
        case 1:
          return _context10.a(2, _context10.v);
      }
    }, _callee10);
  }));
  return _reportAutofillAuthFailure.apply(this, arguments);
}
function reportAutofillVerificationFailure() {
  return _reportAutofillVerificationFailure.apply(this, arguments);
}
function _reportAutofillVerificationFailure() {
  _reportAutofillVerificationFailure = extension_client_asyncToGenerator(/*#__PURE__*/extension_client_regenerator().m(function _callee11() {
    var _ref7,
      _ref7$platform,
      platform,
      _ref7$reason,
      reason,
      _ref7$detail,
      detail,
      _args11 = arguments;
    return extension_client_regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          _ref7 = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {}, _ref7$platform = _ref7.platform, platform = _ref7$platform === void 0 ? null : _ref7$platform, _ref7$reason = _ref7.reason, reason = _ref7$reason === void 0 ? 'not_found' : _ref7$reason, _ref7$detail = _ref7.detail, detail = _ref7$detail === void 0 ? null : _ref7$detail;
          _context11.n = 1;
          return sendRuntimeMessage({
            message_type: 'reportAutofillVerificationFailure',
            platform: platform,
            reason: reason,
            detail: detail
          }, 'Failed to report autofill verification failure');
        case 1:
          return _context11.a(2, _context11.v);
      }
    }, _callee11);
  }));
  return _reportAutofillVerificationFailure.apply(this, arguments);
}
var messageHandlers = new Map();
var listenerRegistered = false;
function ensureListener() {
  if (listenerRegistered) return;
  listenerRegistered = true;
  chrome.runtime.onMessage.addListener(function (request, _sender, sendResponse) {
    var handler = messageHandlers.get(request.message_type);
    if (!handler) return false;
    // Forward the handler's return value as the message response so the background can round-trip
    // (e.g. advanceAutofillFlow's { advanced } click report). A promise keeps the channel open (return
    // true) until it settles; rejections resolve undefined so a content-side error can never leave the
    // background's callback hanging.
    var result = handler(request);
    if (result && typeof result.then === 'function') {
      result.then(function (data) {
        return sendResponse(data);
      })["catch"](function () {
        return sendResponse(undefined);
      });
      return true;
    }
    // Nothing to say (null / undefined, synchronously): leave the answer to another frame. A tab-wide
    // sendMessage takes the FIRST frame's answer, so a frame with no form of its own (a career page
    // around the application iframe) answering a live probe with null used to win over the frame that
    // holds the form — the submit-wait read "not busy" while that form's Submit was still answering
    // (Puffy, 2026-10-26). Fire-and-forget senders never notice; a probe nobody answers reads undefined,
    // which every caller already treats like null.
    if (result == null) return false;
    sendResponse(result);
    return false;
  });
}
function onMessage(messageType, handler) {
  ensureListener();
  messageHandlers.set(messageType, handler);
}
;// ../../packages/job-parsers/content/platforms/parser.js
function parser_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return parser_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (parser_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, parser_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, parser_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), parser_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", parser_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), parser_regeneratorDefine2(u), parser_regeneratorDefine2(u, o, "Generator"), parser_regeneratorDefine2(u, n, function () { return this; }), parser_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (parser_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function parser_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } parser_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { parser_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, parser_regeneratorDefine2(e, r, n, t); }
function parser_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function parser_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { parser_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { parser_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function isSameData(newData, oldData) {
  if (!oldData) return false;
  try {
    return JSON.stringify(newData) === JSON.stringify(oldData);
  } catch (e) {
    return false;
  }
}
function defaultMessageSender(payload) {
  chrome.runtime.sendMessage(payload)["catch"](function (err) {
    console.error('Failed to send parser result to background:', err);
  });
}
function parser(_x) {
  return _parser.apply(this, arguments);
}
function _parser() {
  _parser = parser_asyncToGenerator(/*#__PURE__*/parser_regenerator().m(function _callee(parserFunc) {
    var messageType,
      debounceMs,
      sendMessage,
      lastResult,
      lastUrl,
      resetUrl,
      _args = arguments;
    return parser_regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          messageType = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'autoParserResultFound';
          debounceMs = _args.length > 2 && _args[2] !== undefined ? _args[2] : 250;
          sendMessage = _args.length > 3 && _args[3] !== undefined ? _args[3] : defaultMessageSender;
          _context.n = 1;
          return waitForDocumentReady();
        case 1:
          lastResult = null;
          lastUrl = window.location.href;
          resetUrl = function resetUrl() {
            lastUrl = null; // Reset to allow parser to run on URL change
          };
          executeWithMutationObserver(function () {
            var response = parserFunc();
            if (isSameData(response, lastResult) && window.location.href === lastUrl) return null;
            lastResult = response;
            lastUrl = window.location.href;
            return {
              message_type: messageType,
              data: response
            };
          }, resetUrl, debounceMs, sendMessage);
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _parser.apply(this, arguments);
}
var observingElement = null;
function executeWithMutationObserver(parserFunc, resetUrlCallback, debounceMs, sendMessage) {
  var observer = null;
  var debounceTimeoutId = null;
  var currentUrl = window.location.href;
  var run = function run() {
    try {
      var parseResult = parserFunc();
      if (parseResult === null) return;

      // Send message to background script whenever parser detects something
      sendMessage(parseResult);
    } catch (err) {
      // Don't send error messages on every failed attempt to avoid spam
      // Only log for debugging
    }
  };
  var debouncedRun = function debouncedRun() {
    // Clear existing debounce timeout
    if (debounceTimeoutId) {
      clearTimeout(debounceTimeoutId);
    }
    // Set new debounce timeout - wait DEBOUNCE_MS after last mutation
    debounceTimeoutId = setTimeout(run, debounceMs);
  };

  // Handle URL changes for SPAs
  var handleUrlChange = function handleUrlChange() {
    var newUrl = window.location.href;
    if (newUrl !== currentUrl) {
      currentUrl = newUrl;
      // Reset lastUrl in outer scope to allow parser to run
      if (resetUrlCallback) {
        resetUrlCallback();
      }
      // Trigger debounced parser function
      debouncedRun();
    }
  };
  try {
    observer = new MutationObserver(function () {
      if (document.documentElement !== observingElement) {
        observingElement = document.documentElement;
        observer.disconnect();
        observer.observe(observingElement, {
          childList: true,
          attributes: true,
          characterData: true,
          subtree: true
        });
      }
      debouncedRun();
    });
    // Try to run immediately first
    debouncedRun();
    observingElement = document.documentElement;
    observer.observe(document.documentElement, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });

    // Listen for URL changes via history API (popstate event)
    window.addEventListener('popstate', handleUrlChange);

    // Listen for hash changes (for hash-based routing)
    window.addEventListener('hashchange', handleUrlChange);

    // Periodic URL check for SPAs (catches pushState/replaceState changes)
    // Check every 100ms to catch URL changes quickly without being too aggressive
    var urlCheckInterval = setInterval(handleUrlChange, 500);

    // Note: Observer will keep running indefinitely to detect changes
    // No timeout to disconnect - parser should always listen
  } catch (_unused) {
    /* empty */
  }
}
;// ../../packages/job-parsers/shared/password-answer.js
var PASSWORD_PANEL_MASK = '************';
var PASSWORD_FIELD_QUESTION_PATTERN = /^(?:(?:please\s+)?(?:create|choose|set|enter|confirm(?:ation)?|verify|repeat|re-?\s*(?:enter|type))\s+)?(?:your\s+)?(?:new\s+)?password\b/i;
function isPasswordQuestionText() {
  var question = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return PASSWORD_FIELD_QUESTION_PATTERN.test(String(question !== null && question !== void 0 ? question : '').trim());
}
function maskPasswordAnswerForQuestion(answer) {
  var question = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return isPasswordQuestionText(question) ? PASSWORD_PANEL_MASK : answer;
}
;// ../../packages/job-parsers/shared/dependent-question.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
// Mirrored in packages/job-parsers/shared/dependent-question.js,
// packages/extension-core/shared/dependent-question.js and
// packages/service-utils/dependent-question.js — keep all three copies in sync
// (same convention as password-answer.js). The service-utils copy lets the confirmation
// answer / correction paths recognise a follow-up whose parked entry predates the stored
// referenceQaPairs and fetch the preceding form answer as context.
//
// Detects questions whose answer is conditioned on a previous answer. Covers:
//  - "if so / if yes / please explain" follow-ups;
//  - conditional questions that reference an earlier choice ("if you selected Other...",
//    "...in the previous question...");
//  - follow-ups that refer to a PERSON named or implied by the previous answer through a
//    pronoun ("What's their name or email address?" under Workday's "How Did You Hear
//    About Us?", "his or her title", "this person", "the employee who referred you").
//    Without the previous answer the pronoun has no referent — the AI would otherwise read
//    "their email" as the candidate's own (jimmyhdlee incident, 2026-09-05).
// Content-side detection flags these `dependsOnPrevious`; the background uses the same
// test to keep deterministic answer-patterns away from them — a static profile-template
// answer can't honor the condition.
var DEPENDENT_QUESTION_PATTERN = new RegExp([// Explicit conditionals / instructions to elaborate on the prior answer.
String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["\b(?:ifs+yous+(?:answered|selected|chose|checked|picked|indicated|marked|said)|if\b[^.?!\n]*\babove\b|ifs+so|ifs+not|ifs+yes|ifs+no|ifs+applicable|previouss+question|pleases+explain|pleases+specify|explains+why|explains+how|ins+thats+case)\b"], ["\\b(?:if\\s+you\\s+(?:answered|selected|chose|checked|picked|indicated|marked|said)|if\\b[^.?!\\n]*\\babove\\b|if\\s+so|if\\s+not|if\\s+yes|if\\s+no|if\\s+applicable|previous\\s+question|please\\s+explain|please\\s+specify|explain\\s+why|explain\\s+how|in\\s+that\\s+case)\\b"]))), // "What's their …" / "What is his …" / "Who are they" — a pronoun standing in for the
// previous answer's subject.
String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\bwhat(?:'s|s+is|s+are|s+was|s+were)?s+(?:their|his|her|its)\b"], ["\\bwhat(?:'s|\\s+is|\\s+are|\\s+was|\\s+were)?\\s+(?:their|his|her|its)\\b"]))), String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\bwhos+(?:is|are|was|were)s+(?:they|he|she|it)\b"], ["\\bwho\\s+(?:is|are|was|were)\\s+(?:they|he|she|it)\\b"]))), // Possessive pronoun + a contact/identity attribute ("their name", "his or her email").
String.raw(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\b(?:their|his|her)(?:s+ors+(?:her|his))?s+(?:fulls+|firsts+|lasts+|works+|jobs+)?(?:name|e-?mail(?:s+address)?|phone(?:s+number)?|contact(?:s+information|s+info|s+details)?|title|position|role|relationship|company|department|employees+(?:id|number)|id)\b"], ["\\b(?:their|his|her)(?:\\s+or\\s+(?:her|his))?\\s+(?:full\\s+|first\\s+|last\\s+|work\\s+|job\\s+)?(?:name|e-?mail(?:\\s+address)?|phone(?:\\s+number)?|contact(?:\\s+information|\\s+info|\\s+details)?|title|position|role|relationship|company|department|employee\\s+(?:id|number)|id)\\b"]))), // Demonstrative reference to a person introduced earlier.
String.raw(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\b(?:this|that)s+(?:person|individual|employee|referrer)\b"], ["\\b(?:this|that)\\s+(?:person|individual|employee|referrer)\\b"]))), // Referral follow-ups.
String.raw(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\bwhos+referreds+you\b"], ["\\bwho\\s+referred\\s+you\\b"]))), String.raw(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\bthes+(?:person|employee|individual|colleague)s+(?:who|that)s+referred\b"], ["\\bthe\\s+(?:person|employee|individual|colleague)\\s+(?:who|that)\\s+referred\\b"])))].join('|'), 'i');
function isDependentQuestion(questionText) {
  var _questionText$trim;
  return DEPENDENT_QUESTION_PATTERN.test((_questionText$trim = questionText === null || questionText === void 0 ? void 0 : questionText.trim()) !== null && _questionText$trim !== void 0 ? _questionText$trim : '');
}
;// ../../packages/job-parsers/content/platforms/autofill-shared.js
function autofill_shared_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = autofill_shared_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || autofill_shared_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function autofill_shared_typeof(o) { "@babel/helpers - typeof"; return autofill_shared_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, autofill_shared_typeof(o); }
function autofill_shared_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return autofill_shared_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (autofill_shared_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, autofill_shared_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, autofill_shared_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), autofill_shared_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", autofill_shared_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), autofill_shared_regeneratorDefine2(u), autofill_shared_regeneratorDefine2(u, o, "Generator"), autofill_shared_regeneratorDefine2(u, n, function () { return this; }), autofill_shared_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (autofill_shared_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function autofill_shared_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } autofill_shared_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { autofill_shared_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, autofill_shared_regeneratorDefine2(e, r, n, t); }
function autofill_shared_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function autofill_shared_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { autofill_shared_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { autofill_shared_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function autofill_shared_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function autofill_shared_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? autofill_shared_ownKeys(Object(t), !0).forEach(function (r) { autofill_shared_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : autofill_shared_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function autofill_shared_defineProperty(e, r, t) { return (r = autofill_shared_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function autofill_shared_toPropertyKey(t) { var i = autofill_shared_toPrimitive(t, "string"); return "symbol" == autofill_shared_typeof(i) ? i : i + ""; }
function autofill_shared_toPrimitive(t, r) { if ("object" != autofill_shared_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != autofill_shared_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function autofill_shared_toConsumableArray(r) { return autofill_shared_arrayWithoutHoles(r) || autofill_shared_iterableToArray(r) || autofill_shared_unsupportedIterableToArray(r) || autofill_shared_nonIterableSpread(); }
function autofill_shared_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_shared_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return autofill_shared_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? autofill_shared_arrayLikeToArray(r, a) : void 0; } }
function autofill_shared_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function autofill_shared_arrayWithoutHoles(r) { if (Array.isArray(r)) return autofill_shared_arrayLikeToArray(r); }
function autofill_shared_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Shared autofill utilities for all platforms.
 * Provides abort state that can be used by Greenhouse, Lever, Ashby, or any other platform with autofill.
 */






var PASSWORD_AUTOFILL_FIELD_ID = 'password';
var PASSWORD_CONFIRM_AUTOFILL_FIELD_ID = 'password_confirm';
var PASSWORD_AUTOFILL_ANSWER_TYPE = 'password';
var PASSWORD_LABEL_PATTERN = /\bpassword\b/i;
var PASSWORD_CONFIRM_LABEL_PATTERN = /\b(confirm(?:ation)?|re-?\s*enter|repeat|verify|again)\b/i;
function getPasswordControl(entry) {
  var _field$matches, _field$querySelector, _field$querySelector2;
  var field = entry === null || entry === void 0 ? void 0 : entry.field;
  if (!field) return null;
  if ((_field$matches = field.matches) !== null && _field$matches !== void 0 && _field$matches.call(field, 'input[type="password"]')) return field;
  return (_field$querySelector = (_field$querySelector2 = field.querySelector) === null || _field$querySelector2 === void 0 ? void 0 : _field$querySelector2.call(field, 'input[type="password"]')) !== null && _field$querySelector !== void 0 ? _field$querySelector : null;
}
function getEntryIdentifierText(entry) {
  var _control$getAttribute, _control$getAttribute2;
  var control = getPasswordControl(entry);
  return [entry === null || entry === void 0 ? void 0 : entry.fieldId, entry === null || entry === void 0 ? void 0 : entry.question, control === null || control === void 0 ? void 0 : control.id, control === null || control === void 0 ? void 0 : control.name, control === null || control === void 0 ? void 0 : control.autocomplete, control === null || control === void 0 ? void 0 : control.placeholder, control === null || control === void 0 || (_control$getAttribute = control.getAttribute) === null || _control$getAttribute === void 0 ? void 0 : _control$getAttribute.call(control, 'aria-label'), control === null || control === void 0 || (_control$getAttribute2 = control.getAttribute) === null || _control$getAttribute2 === void 0 ? void 0 : _control$getAttribute2.call(control, 'data-testid')].filter(Boolean).join(' ');
}
function isVisiblePasswordInput(input) {
  if (!input || input.disabled) return false;
  var style = window.getComputedStyle(input);
  if (style.display === 'none' || style.visibility === 'hidden') return false;
  var rect = input.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}
function getPasswordInputQuestion(input) {
  var _input$labels, _input$getAttribute;
  var fallbackQuestion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Password';
  var labelText = Array.from((_input$labels = input === null || input === void 0 ? void 0 : input.labels) !== null && _input$labels !== void 0 ? _input$labels : []).map(function (label) {
    var _label$textContent;
    return label === null || label === void 0 || (_label$textContent = label.textContent) === null || _label$textContent === void 0 ? void 0 : _label$textContent.trim();
  }).find(Boolean);
  return labelText || (input === null || input === void 0 || (_input$getAttribute = input.getAttribute) === null || _input$getAttribute === void 0 ? void 0 : _input$getAttribute.call(input, 'aria-label')) || (input === null || input === void 0 ? void 0 : input.placeholder) || (input === null || input === void 0 ? void 0 : input.name) || (input === null || input === void 0 ? void 0 : input.id) || fallbackQuestion;
}
function appendDetectedPasswordQuestions() {
  var questions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var sourceQuestions = Array.isArray(questions) ? autofill_shared_toConsumableArray(questions) : [];
  var representedInputs = new Set();
  sourceQuestions.forEach(function (entry) {
    var passwordControl = getPasswordControl(entry);
    if (passwordControl) representedInputs.add(passwordControl);
  });
  Array.from(document.querySelectorAll('input[type="password"]')).filter(isVisiblePasswordInput).forEach(function (input, index) {
    if (representedInputs.has(input)) return;
    sourceQuestions.push({
      fieldId: input.id || input.name || "bidhub-password-".concat(index),
      question: getPasswordInputQuestion(input),
      answerType: PASSWORD_AUTOFILL_ANSWER_TYPE,
      fieldKind: 'text',
      field: input
    });
  });
  return sourceQuestions;
}
function isPasswordAutofillEntry(entry) {
  if ((entry === null || entry === void 0 ? void 0 : entry.answerType) === PASSWORD_AUTOFILL_ANSWER_TYPE || (entry === null || entry === void 0 ? void 0 : entry.answerType) === 'password-confirm') {
    return true;
  }
  if (getPasswordControl(entry)) return true;
  return PASSWORD_LABEL_PATTERN.test(getEntryIdentifierText(entry));
}
function isPasswordConfirmationEntry(entry) {
  if ((entry === null || entry === void 0 ? void 0 : entry.answerType) === 'password-confirm' || (entry === null || entry === void 0 ? void 0 : entry.fieldId) === PASSWORD_CONFIRM_AUTOFILL_FIELD_ID) {
    return true;
  }
  var identifierText = getEntryIdentifierText(entry);
  return PASSWORD_LABEL_PATTERN.test(identifierText) && PASSWORD_CONFIRM_LABEL_PATTERN.test(identifierText);
}
function normalizePasswordAutofillQuestions() {
  var questions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$detectPasswordIn = _ref.detectPasswordInputs,
    detectPasswordInputs = _ref$detectPasswordIn === void 0 ? true : _ref$detectPasswordIn;
  var sourceQuestions = detectPasswordInputs ? appendDetectedPasswordQuestions(questions) : autofill_shared_toConsumableArray(Array.isArray(questions) ? questions : []);
  var primaryPasswordAdded = false;
  var confirmationPasswordAdded = false;
  var normalizedQuestions = [];
  var seenFieldIds = new Set();
  sourceQuestions.forEach(function (questionInfo) {
    if (!(questionInfo !== null && questionInfo !== void 0 && questionInfo.fieldId)) return;
    if (!isPasswordAutofillEntry(questionInfo)) {
      if (!seenFieldIds.has(questionInfo.fieldId)) {
        normalizedQuestions.push(questionInfo);
        seenFieldIds.add(questionInfo.fieldId);
      }
      return;
    }
    var shouldUseConfirmation = isPasswordConfirmationEntry(questionInfo) || primaryPasswordAdded;
    var fieldId = shouldUseConfirmation ? PASSWORD_CONFIRM_AUTOFILL_FIELD_ID : PASSWORD_AUTOFILL_FIELD_ID;
    if (fieldId === PASSWORD_AUTOFILL_FIELD_ID) {
      primaryPasswordAdded = true;
    } else {
      confirmationPasswordAdded = true;
    }
    if (seenFieldIds.has(fieldId)) return;
    normalizedQuestions.push(autofill_shared_objectSpread(autofill_shared_objectSpread({}, questionInfo), {}, {
      fieldId: fieldId,
      question: fieldId === PASSWORD_CONFIRM_AUTOFILL_FIELD_ID ? 'Confirm Password' : 'Password',
      answerType: PASSWORD_AUTOFILL_ANSWER_TYPE,
      fieldKind: 'text',
      editableOnPanel: false,
      sensitive: true,
      dependsOnPrevious: fieldId === PASSWORD_CONFIRM_AUTOFILL_FIELD_ID ? true : Boolean(questionInfo.dependsOnPrevious),
      waitForPreviousField: fieldId === PASSWORD_CONFIRM_AUTOFILL_FIELD_ID ? true : Boolean(questionInfo.waitForPreviousField)
    }));
    seenFieldIds.add(fieldId);
  });
  if (confirmationPasswordAdded && !primaryPasswordAdded) {
    var confirmationIndex = normalizedQuestions.findIndex(function (entry) {
      return entry.fieldId === PASSWORD_CONFIRM_AUTOFILL_FIELD_ID;
    });
    if (confirmationIndex >= 0) {
      normalizedQuestions[confirmationIndex] = autofill_shared_objectSpread(autofill_shared_objectSpread({}, normalizedQuestions[confirmationIndex]), {}, {
        fieldId: PASSWORD_AUTOFILL_FIELD_ID,
        question: 'Password',
        dependsOnPrevious: false,
        waitForPreviousField: false
      });
    }
  }
  return normalizedQuestions;
}
function ensurePasswordAnswerTypeHandler(answerTypeHandlers) {
  var _answerTypeHandlers$h;
  if (!(answerTypeHandlers !== null && answerTypeHandlers !== void 0 && (_answerTypeHandlers$h = answerTypeHandlers.has) !== null && _answerTypeHandlers$h !== void 0 && _answerTypeHandlers$h.call(answerTypeHandlers, PASSWORD_AUTOFILL_ANSWER_TYPE))) {
    var _answerTypeHandlers$s;
    answerTypeHandlers === null || answerTypeHandlers === void 0 || (_answerTypeHandlers$s = answerTypeHandlers.set) === null || _answerTypeHandlers$s === void 0 || _answerTypeHandlers$s.call(answerTypeHandlers, PASSWORD_AUTOFILL_ANSWER_TYPE, {
      isMetadataReady: function isMetadataReady() {
        return true;
      },
      fetchMissingMetadata: function () {
        var _fetchMissingMetadata = autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee(metadata) {
          return autofill_shared_regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                return _context.a(2, metadata);
            }
          }, _callee);
        }));
        function fetchMissingMetadata(_x) {
          return _fetchMissingMetadata.apply(this, arguments);
        }
        return fetchMissingMetadata;
      }(),
      generateAnswer: function () {
        var _generateAnswer = autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee2(_question, metadata, fieldId) {
          var existingPrimaryPassword;
          return autofill_shared_regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                if (!(fieldId === PASSWORD_CONFIRM_AUTOFILL_FIELD_ID && metadata !== null && metadata !== void 0 && metadata.dependencyAnswer)) {
                  _context2.n = 1;
                  break;
                }
                return _context2.a(2, metadata.dependencyAnswer);
              case 1:
                if (!(fieldId === PASSWORD_CONFIRM_AUTOFILL_FIELD_ID)) {
                  _context2.n = 2;
                  break;
                }
                existingPrimaryPassword = Array.from(document.querySelectorAll('input[type="password"]')).map(function (input) {
                  return input === null || input === void 0 ? void 0 : input.value;
                }).find(function (value) {
                  return typeof value === 'string' && value.length > 0;
                });
                if (!existingPrimaryPassword) {
                  _context2.n = 2;
                  break;
                }
                return _context2.a(2, existingPrimaryPassword);
              case 2:
                _context2.n = 3;
                return getPasswordForAutofill();
              case 3:
                return _context2.a(2, _context2.v);
            }
          }, _callee2);
        }));
        function generateAnswer(_x2, _x3, _x4) {
          return _generateAnswer.apply(this, arguments);
        }
        return generateAnswer;
      }(),
      stringifyAnswerForPanel: function stringifyAnswerForPanel() {
        return PASSWORD_PANEL_MASK;
      },
      isEditableOnPanel: function isEditableOnPanel() {
        return false;
      }
    });
  }
}

// --- State: set by message handlers, checked by autofill loops ---
var autofillInProgress = false;
var DEFAULT_AUTOFILL_STATUS = 'idle';
var autofillQuestionState = new Map();
var NEVER_ABORT = function NEVER_ABORT() {
  return false;
};
var activeAutofillRun = null;
var currentAbortCheck = NEVER_ABORT;
var AUTOFILL_RUNTIME_PORT = 'bidhub-autofill-runtime';
var autofillPort = null;
var domMutex = createMutex();
function isAborted() {
  return currentAbortCheck();
}
function isAutofillInProgress() {
  return autofillInProgress;
}
function resetAutofillState() {
  cancelAutofillRun(activeAutofillRun);
  autofillQuestionState.clear();
}

// Follow an apply control that LEAVES the page — in THIS tab, with no history entry. The autoapply run
// is one context keyed by tabId: a `click()` on a `target="_blank"` anchor opens a NEW tab the driver
// never adopts (the run stalls on the posting), while a same-tab cross-document navigation keeps the
// schedule — the background re-drives the landing page and the destination platform's own autofill,
// or the driver's unsupported hand-off, takes over. `replace`, not `assign`: no Back entry to the
// listing.
function navigateSameTab(href) {
  window.location.replace(href);
}

// Reload THIS page once per `key` per tab — auto-apply builds only. A page the site broke while it loaded (one of its own
// requests lost to a dropped proxy tunnel) usually comes back whole on a fresh load, and the driver re-drives a reloaded
// apply tab like any reload. true = the reload was started; false = nothing was done: a main build (the job seeker's own
// tab is never reloaded under them), a frame (its reload is not the tab's), the key already spent within
// RELOAD_ONCE_WINDOW_MS, or no tab storage — a reload loop is worse than the stop it replaces.
var RELOAD_ONCE_WINDOW_MS = (/* unused pure expression or super */ null && (10 * 60 * 1000));
var RELOAD_ONCE_KEY_PREFIX = 'bidhub-autofill-reload-once:';
function reloadPageOnce(key) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    storage = _ref2.storage,
    _ref2$now = _ref2.now,
    now = _ref2$now === void 0 ? Date.now() : _ref2$now,
    _ref2$reload = _ref2.reload,
    reload = _ref2$reload === void 0 ? function () {
      return window.location.reload();
    } : _ref2$reload;
  if (true) return false;
  // removed by dead control flow
 var spentAt, storageKey, tab; 
  // removed by dead control flow

  // removed by dead control flow

}
function createAutofillRun() {
  var resolveCompletion;
  var run = {
    cancelled: false,
    scheduledFieldIds: new Set(),
    fieldPromises: new Map(),
    idleTimeoutId: null,
    // When the run last went idle (no field in flight); bounds how far detection churn may push the
    // idle window (AUTOFILL_RUN_IDLE_MAX_WAIT_MS). null while a field is in flight.
    idleSince: null,
    completionResolved: false,
    completionPromise: new Promise(function (resolve) {
      resolveCompletion = resolve;
    })
  };
  run.resolveCompletion = function () {
    if (run.completionResolved) return;
    run.completionResolved = true;
    resolveCompletion();
  };
  activeAutofillRun = run;
  return run;
}
function cancelAutofillRun(run) {
  var _run$resolveCompletio;
  if (!run) return;
  run.cancelled = true;
  if (run.idleTimeoutId) {
    clearTimeout(run.idleTimeoutId);
    run.idleTimeoutId = null;
  }
  (_run$resolveCompletio = run.resolveCompletion) === null || _run$resolveCompletio === void 0 || _run$resolveCompletio.call(run);
  if (activeAutofillRun === run) {
    activeAutofillRun = null;
  }
}
function clearAutofillRun(run) {
  if (run !== null && run !== void 0 && run.idleTimeoutId) {
    clearTimeout(run.idleTimeoutId);
    run.idleTimeoutId = null;
  }
  if (activeAutofillRun === run) {
    activeAutofillRun = null;
  }
}
function shouldAbortRun(run) {
  return Boolean(run === null || run === void 0 ? void 0 : run.cancelled);
}
function setAutofillInProgress(inProgress) {
  if (autofillInProgress === inProgress) return;
  autofillInProgress = inProgress;
  postAutofillMessage({
    message_type: 'autofillInProgressChanged',
    data: {
      inProgress: inProgress
    }
  });
}
function getAutofillQuestionState(fieldId) {
  var _autofillQuestionStat;
  if (!fieldId) return {
    status: DEFAULT_AUTOFILL_STATUS
  };
  return (_autofillQuestionStat = autofillQuestionState.get(fieldId)) !== null && _autofillQuestionStat !== void 0 ? _autofillQuestionStat : {
    status: DEFAULT_AUTOFILL_STATUS
  };
}

// Question-state change events: fired on every status patch AND when a new fieldId first appears
// in detection. Lets orchestrating handlers (section hierarchy roots) wait for leaf completion
// event-driven instead of polling. Listener errors must never break fills.
var autofillQuestionStateListeners = new Set();
function subscribeAutofillQuestionState(listener) {
  autofillQuestionStateListeners.add(listener);
  return function () {
    return autofillQuestionStateListeners["delete"](listener);
  };
}
function notifyAutofillQuestionStateListeners(fieldId) {
  autofillQuestionStateListeners.forEach(function (listener) {
    try {
      listener(fieldId);
    } catch (error) {
      console.error('Autofill question-state listener failed:', error);
    }
  });
}
function syncAutofillQuestionState() {
  var fieldIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var nextFieldIds = new Set(fieldIds.filter(Boolean));
  nextFieldIds.forEach(function (fieldId) {
    if (!autofillQuestionState.has(fieldId)) {
      autofillQuestionState.set(fieldId, {
        status: DEFAULT_AUTOFILL_STATUS
      });
      notifyAutofillQuestionStateListeners(fieldId);
    }
  });
  if (!autofillInProgress) {
    Array.from(autofillQuestionState.keys()).forEach(function (fieldId) {
      if (!nextFieldIds.has(fieldId)) {
        autofillQuestionState["delete"](fieldId);
      }
    });
  }
}
function updateAutofillQuestionState(fieldId) {
  var _ref3, _patch$status;
  var patch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!fieldId) return getAutofillQuestionState(fieldId);
  var current = getAutofillQuestionState(fieldId);
  var next = autofill_shared_objectSpread(autofill_shared_objectSpread(autofill_shared_objectSpread({}, current), patch), {}, {
    status: (_ref3 = (_patch$status = patch.status) !== null && _patch$status !== void 0 ? _patch$status : current.status) !== null && _ref3 !== void 0 ? _ref3 : DEFAULT_AUTOFILL_STATUS
  });
  autofillQuestionState.set(fieldId, next);
  notifyAutofillQuestionStateListeners(fieldId);
  return next;
}

/**
 * Sends autofill progress to the extension (panel, background).
 * Used by all platforms to report filled/skipped/error status per field.
 */
function sendProgress(fieldId, data) {
  updateAutofillQuestionState(fieldId, data);
  postAutofillMessage({
    message_type: 'autofillProgress',
    data: autofill_shared_objectSpread({
      fieldId: fieldId
    }, data)
  });
}
function ensureAutofillPort() {
  if (autofillPort) return autofillPort;
  try {
    autofillPort = chrome.runtime.connect({
      name: AUTOFILL_RUNTIME_PORT
    });
    autofillPort.onDisconnect.addListener(function () {
      autofillPort = null;
    });
  } catch (_unused2) {
    autofillPort = null;
  }
  return autofillPort;
}
function postAutofillMessage(message) {
  var port = ensureAutofillPort();
  if (!port) return;
  try {
    port.postMessage(message);
  } catch (_unused3) {
    autofillPort = null;
  }
}

// --- MV3 service-worker keepalive ping (auto-apply build only) ----------------------------------
// Chrome kills an idle extension SW ~30s after its last event; an apply's quiet stretches (slow
// page loads, field waits) generate no port traffic, and a mid-job kill abandons the auto-apply
// driver's in-memory job. This page-side interval (content-script timers are NOT idle-killed)
// pings the background every 20s over the existing autofill runtime port — each message resets the
// SW idle timer, and a ping landing AFTER a kill reconnects the (lazily re-created) port and wakes
// the fresh SW, whose boot path restarts the driver loop. `process.env.IS_AUTOAPPLY` is a
// build-time literal (webpack DefinePlugin), so this is dead-stripped from the manual/ambohire
// bundles; their backgrounds ignore the message type anyway (defense in depth).
var AUTOFILL_KEEPALIVE_PING_MS = 20000;
var keepalivePingTimer = null;
function startAutofillKeepalivePing() {
  if (true) return;
  // removed by dead control flow

  // removed by dead control flow

}
var handlersRegistered = false;
var autofillRuntimeRegistered = false;
var AUTOFILL_QUESTION_PARSER_DEBOUNCE_MS = 25;
var EMPTY_ADVANCE_FIELD_WAIT_TIMEOUT_MS = 10000;
var EMPTY_ADVANCE_FIELD_POLL_MS = 250;
// Idle settle window: after the last field fills, wait this long for dynamically-appearing
// (conditional/dependent) fields before declaring the step complete. Build-time tunable per app
// via DefinePlugin (createCommonConfig injects a default of 1500; the autoapply extension overrides
// to a longer window because cloud-browser answer resolution / document generation is slower).
var AUTOFILL_RUN_IDLE_COMPLETION_MS = Number("1500") || 1500;
// Every DOM mutation re-runs detection, and a detection pass during a run re-arms the idle window —
// so the window also waits out a page that is still busy re-rendering. A page that NEVER goes quiet
// (Oracle Recruiting ticks its session-timeout countdown text every second) pushed it out forever:
// the run never completed, no autofillComplete → no advance, and the driver parked the row `fill`
// after 5 min. A pass that schedules nothing may push the window out at most this far past the
// moment the run went idle (no field in flight); a newly-appeared field still restarts it. Not
// env-tunable (see DEPENDENT_FIELD_REMOUNT_SETTLE_MS).
var AUTOFILL_RUN_IDLE_MAX_WAIT_MS = Math.max(15000, AUTOFILL_RUN_IDLE_COMPLETION_MS);
// Settle beat after filling a DEPENDENT field: its row is the one the previous answer re-renders, and
// that re-render can land after an instant fill (BambooHR remounts Province→State ~130 ms after the
// Country click). Only dependent fields pay it.
// Not env-tunable on purpose: the extension webpack configs only define specific process.env keys
// (DefinePlugin); an env read they do not define survives into the content-script bundle and throws at load.
var DEPENDENT_FIELD_REMOUNT_SETTLE_MS = 400;
var isDetachedFieldNode = function isDetachedFieldNode(field) {
  return (field === null || field === void 0 ? void 0 : field.isConnected) === false;
};
var isDependentEntry = function isDependentEntry(entry) {
  return Boolean((entry === null || entry === void 0 ? void 0 : entry.dependsOnPrevious) || (entry === null || entry === void 0 ? void 0 : entry.waitForPreviousField) || (entry === null || entry === void 0 ? void 0 : entry.waitForFieldId));
};
// How long submitAutofillFlow waits for the submit button to become enabled before giving up, and
// the poll cadence. Covers platforms that enable Submit asynchronously after the last field's input
// events (e.g. Greenhouse's verification-code screen).
var SUBMIT_BUTTON_ENABLE_WAIT_MS = 3000;
var SUBMIT_BUTTON_ENABLE_POLL_MS = 250;
// The background may WIDEN that wait per message (`data.enableWaitMs`) — the autoapply driver's
// post-challenge re-submit does, since a platform can take well over 3s to enable Submit after a
// verification code lands. Capped so a bad payload can never park the handler.
var SUBMIT_BUTTON_ENABLE_WAIT_MAX_MS = 60000;
var resolveSubmitEnableWaitMs = function resolveSubmitEnableWaitMs(requested) {
  var value = Number(requested);
  if (!Number.isFinite(value) || value <= SUBMIT_BUTTON_ENABLE_WAIT_MS) return SUBMIT_BUTTON_ENABLE_WAIT_MS;
  return Math.min(value, SUBMIT_BUTTON_ENABLE_WAIT_MAX_MS);
};
// Base "review the form before submitting" pause for humanizeClicks platforms.
var SUBMIT_REVIEW_PAUSE_MS = 700;
function stringifyAutofillAnswerForReference(answerTypeHandlers, entry, answer) {
  var answerHandler = answerTypeHandlers.get(entry === null || entry === void 0 ? void 0 : entry.answerType);
  var panelAnswer = getAutofillPanelAnswer(answerHandler, answer, {
    entry: entry
  });
  if (typeof panelAnswer === 'string') return panelAnswer.trim();
  if (typeof panelAnswer === 'number' || typeof panelAnswer === 'boolean') return String(panelAnswer);
  if (Array.isArray(panelAnswer)) {
    return panelAnswer.map(function (item) {
      return typeof item === 'string' ? item.trim() : JSON.stringify(item);
    }).filter(Boolean).join(', ');
  }
  if (panelAnswer && autofill_shared_typeof(panelAnswer) === 'object') {
    if (panelAnswer.fileName) return panelAnswer.fileName;
    return JSON.stringify(panelAnswer);
  }
  return '';
}
function buildReferenceQaPairsFromAnswer(answerTypeHandlers, entry, answer) {
  if (!(entry !== null && entry !== void 0 && entry.question) || answer == null) return [];
  var referenceAnswer = stringifyAutofillAnswerForReference(answerTypeHandlers, entry, answer);
  if (!referenceAnswer) return [];
  return [{
    question: entry.question,
    answer: referenceAnswer,
    relationship: 'previous_question_answer'
  }];
}
function stripFieldFromQuestion(questionInfo) {
  if (!questionInfo) return {};
  var nextQuestionInfo = autofill_shared_objectSpread({}, questionInfo);
  delete nextQuestionInfo.field;
  return nextQuestionInfo;
}

// Synchronous djb2 hex hash of the normalized page location (origin + pathname; query/hash are too
// volatile). Stamped per field at FIRST detection so the question bank can group a multi-page form's
// questions by source page — position ordinals alone can collide across steps (the positionBase seed
// is in-memory and forfeited on a service-worker restart). Sync on purpose: it runs inside the sync
// position-assignment path (crypto.subtle would force it async).
function computePageSignature() {
  var value = "".concat(window.location.origin).concat(window.location.pathname);
  var hash = 5381;
  for (var i = 0; i < value.length; i += 1) {
    hash = (hash << 5) + hash + value.charCodeAt(i) >>> 0; // hash * 33 + c, unsigned 32-bit
  }
  return hash.toString(16).padStart(8, '0');
}
function getDetectedQuestionState(questionInfo, answerTypeHandlers) {
  var fieldId = questionInfo === null || questionInfo === void 0 ? void 0 : questionInfo.fieldId;
  var questionState = getAutofillQuestionState(fieldId);
  if (!fieldId || questionState.editableOnPanel !== undefined) {
    return questionState;
  }

  // Structural nodes (null answerType) have no answer to edit.
  if ((questionInfo === null || questionInfo === void 0 ? void 0 : questionInfo.answerType) == null) {
    return autofill_shared_objectSpread(autofill_shared_objectSpread({}, questionState), {}, {
      editableOnPanel: false
    });
  }
  var answerHandler = answerTypeHandlers.get(questionInfo === null || questionInfo === void 0 ? void 0 : questionInfo.answerType);
  return autofill_shared_objectSpread(autofill_shared_objectSpread({}, questionState), {}, {
    editableOnPanel: isAutofillAnswerEditableOnPanel(answerHandler, null, {
      fieldId: fieldId,
      entry: questionInfo
    })
  });
}

/**
 * Registers shared autofill runtime for a platform.
 * Platform code should only provide field detection and handler maps.
 */
function registerAutofillHandlers() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    detectFields = _ref4.detectFields,
    _ref4$detectSubmitBut = _ref4.detectSubmitButton,
    detectSubmitButton = _ref4$detectSubmitBut === void 0 ? null : _ref4$detectSubmitBut,
    _ref4$detectAdvanceBu = _ref4.detectAdvanceButton,
    detectAdvanceButton = _ref4$detectAdvanceBu === void 0 ? null : _ref4$detectAdvanceBu,
    _ref4$getSubmitButton = _ref4.getSubmitButton,
    getSubmitButton = _ref4$getSubmitButton === void 0 ? null : _ref4$getSubmitButton,
    _ref4$clickSubmitButt = _ref4.clickSubmitButton,
    clickSubmitButton = _ref4$clickSubmitButt === void 0 ? null : _ref4$clickSubmitButt,
    answerTypeHandlers = _ref4.answerTypeHandlers,
    fieldKindHandlers = _ref4.fieldKindHandlers,
    _ref4$isAutofillAvail = _ref4.isAutofillAvailable,
    isAutofillAvailable = _ref4$isAutofillAvail === void 0 ? null : _ref4$isAutofillAvail,
    _ref4$beforeStartAuto = _ref4.beforeStartAutofill,
    beforeStartAutofill = _ref4$beforeStartAuto === void 0 ? null : _ref4$beforeStartAuto,
    _ref4$advanceFlow = _ref4.advanceFlow,
    advanceFlow = _ref4$advanceFlow === void 0 ? null : _ref4$advanceFlow,
    _ref4$detectPasswordI = _ref4.detectPasswordInputs,
    detectPasswordInputs = _ref4$detectPasswordI === void 0 ? true : _ref4$detectPasswordI,
    _ref4$parserDebounceM = _ref4.parserDebounceMs,
    parserDebounceMs = _ref4$parserDebounceM === void 0 ? AUTOFILL_QUESTION_PARSER_DEBOUNCE_MS : _ref4$parserDebounceM,
    _ref4$interFieldDelay = _ref4.interFieldDelayMs,
    interFieldDelayMs = _ref4$interFieldDelay === void 0 ? 0 : _ref4$interFieldDelay,
    _ref4$humanizeClicks = _ref4.humanizeClicks,
    humanizeClicks = _ref4$humanizeClicks === void 0 ? false : _ref4$humanizeClicks,
    _ref4$onComplete = _ref4.onComplete,
    onComplete = _ref4$onComplete === void 0 ? /*#__PURE__*/autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee3() {
      return autofill_shared_regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            postAutofillMessage({
              message_type: 'autofillComplete'
            });
          case 1:
            return _context3.a(2);
        }
      }, _callee3);
    })) : _ref4$onComplete;
  ensurePasswordAnswerTypeHandler(answerTypeHandlers);
  if (!handlersRegistered) {
    handlersRegistered = true;
    onMessage('pauseAutofill', function () {
      cancelAutofillRun(activeAutofillRun);
      setAutofillInProgress(false);
      Array.from(autofillQuestionState.entries()).forEach(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          fieldId = _ref7[0],
          state = _ref7[1];
        if ((state === null || state === void 0 ? void 0 : state.status) === 'pending') {
          sendProgress(fieldId, {
            status: 'skipped'
          });
        }
      });
    });
    onMessage('autofillStatusPatch', function (request) {
      var _ref8 = request.data || request,
        fieldId = _ref8.fieldId,
        patch = _ref8.patch;
      if (!fieldId || !patch) return;
      sendProgress(fieldId, patch);
    });
  }
  if (autofillRuntimeRegistered) {
    return;
  }
  autofillRuntimeRegistered = true;

  // Auto-apply build: keep the background SW alive while this (apply) page is open. Runs in every
  // frame that hosts the autofill runtime on purpose — embedded boards (e.g. Greenhouse iframes)
  // only have the script in the iframe.
  startAutofillKeepalivePing();
  var fieldCache = new Map();
  var autofillDetectionEnabled = false;
  // Fill-only run (the auto-apply doctor lab's shadow re-run): the form is filled to its final step and
  // NEVER submitted, so submitAutofillFlow (where every submit path ends) refuses without clicking. Set
  // from the load-time detection-state answer (`fillOnly` — every page of a fill-only tab, even one no
  // startAutofill ever reaches) or a startAutofill carrying `fillOnly: true`. Sticky for the document:
  // a later startAutofill without the key (a post-action top-up, a verification fill) never clears it.
  // Next / Continue (advanceAutofillFlow) are unaffected — the form must reach its last step.
  var fillOnlyRun = false;
  // No-auto-advance run (the auto-apply doctor lab's GATED run — the box releases every press): a
  // startAutofill carrying `noAutoAdvance: true` makes this document never click the platform's advance
  // on its own when it finds no field to fill (the empty-page advance below) — that press is the
  // background driver's, asked of the box first, and it goes out through advanceAutofillFlow, which is
  // unaffected. Sticky for the document like fillOnlyRun: a later startAutofill without the key (a
  // post-action top-up, a verification fill) never re-enables it. Nothing else sets it, so every other
  // build and run behaves exactly as before.
  var noAutoAdvanceRun = false;
  // A final-Submit press is being carried out right now (submitAutofillFlow: the enable wait, the
  // review pause, the platform's click). The press is REQUESTED long before it LANDS on the runner
  // lane — Ashby's remote-input press (review scroll, the wheel down to a Submit at the bottom of a
  // long form, the glide) took ~11 s in the doctor's lab on 2026-10-24 — so the submit-wait probe
  // reports it (`pressing`) and the auto-apply driver keeps waiting for the press instead of parking
  // the run before its own click.
  var submitPressInFlight = false;

  // --- form-position ordinals -------------------------------------------------------------------
  // Every field gets a sticky gapped ordinal at FIRST detection, carried on every question in the
  // autofillQuestionsFound payload — the auto-apply driver's form-state snapshot registers it so
  // session_qas can reproduce the on-form order. Gaps let a field that only appears mid-fill
  // (conditional/dependent inputs) take the midpoint between its DOM neighbors instead of landing
  // at the end; an ordinal never changes or shifts once assigned.
  var POSITION_GAP = 1000;
  var fieldPositions = new Map(); // fieldId -> ordinal; survives fieldCache rebuilds
  var fieldPageSignatures = new Map(); // fieldId -> page signature at first detection; sticky like positions
  var maxAssignedPosition = null;

  // Continue numbering above what the background already registered for this job: hard-reload
  // multi-step forms restart this content script, and without the base step N would collide with
  // step 1. SPA step changes don't need it (the maps above survive those).
  var seedFieldPositionBase = function seedFieldPositionBase(reportedMax) {
    if (!Number.isFinite(reportedMax)) return;
    var seeded = Math.ceil((reportedMax + 1) / POSITION_GAP) * POSITION_GAP;
    if (maxAssignedPosition == null || seeded > maxAssignedPosition) maxAssignedPosition = seeded;
  };

  // Reopen an exhausted gap: sequential midpoint insertion between the same neighbors halves the
  // room each time (1000 → 500 → … → 1 → COLLISION after ~10), and a hierarchical section's
  // iterator drops entries × leaves fields into ONE gap mid-fill — far past that budget. Duplicate
  // ordinals scramble the Form tab (session_qas sorts position ASC with only a createdAt tiebreak,
  // and batch registration shares one timestamp). Shifting every known ordinal >= threshold up a
  // full gap keeps relative order and is safe to do in-memory mid-run: session_qas positions are
  // registered ONCE, at submit/park, with the final ordinals (mid-fill write-through rows are swept
  // at registration; the job-question bank is fill-only, never order-displayed). Cross-page rows
  // already registered are never shifted — a page's ordinals all sit above every previous page's
  // (the base is seeded past the running max), so threshold (a current-page ordinal) exceeds them.
  var shiftFieldPositionsFrom = function shiftFieldPositionsFrom(threshold, delta) {
    var _iterator = autofill_shared_createForOfIteratorHelper(fieldPositions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          fieldId = _step$value[0],
          position = _step$value[1];
        if (position >= threshold) fieldPositions.set(fieldId, position + delta);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (maxAssignedPosition != null && maxAssignedPosition >= threshold) maxAssignedPosition += delta;
  };
  var assignFieldPositions = function assignFieldPositions(orderedQuestions) {
    var ordered = orderedQuestions.filter(function (questionInfo) {
      return questionInfo === null || questionInfo === void 0 ? void 0 : questionInfo.fieldId;
    });
    var positionAt = function positionAt(index) {
      var _fieldPositions$get, _ordered$index;
      return (_fieldPositions$get = fieldPositions.get((_ordered$index = ordered[index]) === null || _ordered$index === void 0 ? void 0 : _ordered$index.fieldId)) !== null && _fieldPositions$get !== void 0 ? _fieldPositions$get : null;
    };
    var pageSignature = computePageSignature();
    ordered.forEach(function (questionInfo, index) {
      if (!fieldPageSignatures.has(questionInfo.fieldId)) {
        fieldPageSignatures.set(questionInfo.fieldId, pageSignature);
      }
      if (fieldPositions.has(questionInfo.fieldId)) return;
      var prev = null;
      for (var i = index - 1; i >= 0 && prev == null; i -= 1) prev = positionAt(i);
      var next = null;
      for (var _i = index + 1; _i < ordered.length && next == null; _i += 1) next = positionAt(_i);
      // The scans above only see CURRENTLY-detected fields, but fieldPositions also holds ordinals
      // of vanished ones (an editor-mode section's saved-entry leaves, a conditional removed by an
      // answer) — a blind midpoint between visible neighbors lands exactly on a vanished ordinal.
      // Editor-mode hierarchical sections hit this on EVERY entry after the first: the previous
      // entry's leaves vanish behind the read-only card but keep their ordinals inside the visible
      // (prev, next) gap, so each new entry's fields would duplicate them one-for-one (duplicate
      // ordinals = scrambled Form tab). Tighten prev to the highest ordinal already assigned
      // inside the window: the newcomer sorts after everything that ever lived there, which
      // matches DOM order for the add→fill→save loop (each new entry renders below the previous
      // entry's saved card). Also upgrades the appeared-above-everything branch: instead of
      // stepping next - GAP (which can dip into the previous page's range), it midpoints above
      // the highest earlier ordinal.
      var _iterator2 = autofill_shared_createForOfIteratorHelper(fieldPositions.values()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var assigned = _step2.value;
          if ((prev == null || assigned > prev) && (next == null || assigned < next)) prev = assigned;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var position;
      if (prev != null && next != null) {
        if (next - prev < 2) {
          // no integer midpoint left — reopen the gap (see shiftFieldPositionsFrom)
          shiftFieldPositionsFrom(next, POSITION_GAP);
          next += POSITION_GAP;
        }
        position = Math.floor((prev + next) / 2); // mid-fill insertion between known neighbors
      } else if (next != null) {
        position = next - POSITION_GAP; // appeared above everything known (may go negative)
      } else if (prev != null) {
        position = prev + POSITION_GAP;
      } else {
        position = maxAssignedPosition == null ? 0 : maxAssignedPosition + POSITION_GAP;
      }
      fieldPositions.set(questionInfo.fieldId, position);
      if (maxAssignedPosition == null || position > maxAssignedPosition) maxAssignedPosition = position;
    });
  };
  var processField = createFieldProcessor({
    answerTypeHandlers: answerTypeHandlers,
    fieldKindHandlers: fieldKindHandlers,
    interFieldDelayMs: interFieldDelayMs,
    resolveLiveFieldEntry: function resolveLiveFieldEntry(fieldId, entry) {
      return waitForLiveFieldEntry(fieldId, entry);
    },
    onMetadataResolved: function onMetadataResolved(fieldId, metadata) {
      var _metadata$answerType, _metadata$fieldKind, _metadata$options, _metadata$constraints;
      var current = fieldCache.get(fieldId);
      if (!current || !metadata) return;

      // Fold fill-time-gathered metadata (e.g. a React select's options, only readable after a DOM
      // interaction) into the cache so the form-state snapshot carries the full option list.
      fieldCache.set(fieldId, autofill_shared_objectSpread(autofill_shared_objectSpread({}, current), {}, {
        answerType: (_metadata$answerType = metadata.answerType) !== null && _metadata$answerType !== void 0 ? _metadata$answerType : current.answerType,
        fieldKind: (_metadata$fieldKind = metadata.fieldKind) !== null && _metadata$fieldKind !== void 0 ? _metadata$fieldKind : current.fieldKind,
        options: (_metadata$options = metadata.options) !== null && _metadata$options !== void 0 ? _metadata$options : current.options,
        constraints: (_metadata$constraints = metadata.constraints) !== null && _metadata$constraints !== void 0 ? _metadata$constraints : current.constraints
      }));
    }
  });
  var _createDependentAutof = createDependentAutofillEntryBuilder({
      getOrderedFieldIds: function getOrderedFieldIds() {
        return fieldCache.keys();
      },
      buildReferenceQaPairs: function buildReferenceQaPairs(entry, answer) {
        return buildReferenceQaPairsFromAnswer(answerTypeHandlers, entry, answer);
      }
    }),
    buildProcessingEntry = _createDependentAutof.buildProcessingEntry,
    rememberFieldAnswer = _createDependentAutof.rememberFieldAnswer,
    clearFieldAnswerHistory = _createDependentAutof.clearFieldAnswerHistory;
  var scheduleRunCompletionIfIdle = function scheduleRunCompletionIfIdle(run) {
    if (!run || shouldAbortRun(run) || run.completionResolved) return;
    if (run.fieldPromises.size > 0) {
      // Still waiting on field answers — completion blocked. If one of these never resolves, the run
      // never completes (no autofillComplete -> no advance/submit).
      if (run.idleTimeoutId) {
        clearTimeout(run.idleTimeoutId);
        run.idleTimeoutId = null;
      }
      run.idleSince = null;
      return;
    }

    // Restarted on every call (a field just settled, or a detection pass), but never past
    // AUTOFILL_RUN_IDLE_MAX_WAIT_MS after the run went idle: a page that never stops mutating still
    // completes.
    var now = Date.now();
    if (run.idleSince == null) run.idleSince = now;
    var delayMs = Math.max(0, Math.min(AUTOFILL_RUN_IDLE_COMPLETION_MS, run.idleSince + AUTOFILL_RUN_IDLE_MAX_WAIT_MS - now));
    if (run.idleTimeoutId) {
      clearTimeout(run.idleTimeoutId);
    }
    run.idleTimeoutId = setTimeout(function () {
      var _run$resolveCompletio2;
      run.idleTimeoutId = null;
      if (shouldAbortRun(run) || run.completionResolved || run.fieldPromises.size > 0) {
        return;
      }
      (_run$resolveCompletio2 = run.resolveCompletion) === null || _run$resolveCompletio2 === void 0 || _run$resolveCompletio2.call(run);
    }, delayMs);
  };
  var schedulePendingAutofillFields = function schedulePendingAutofillFields(run) {
    if (!run || shouldAbortRun(run)) return;

    // Chain one field: after `dependencyPromise` (never rejects), process it under the run's abort
    // guard. Registered in run.fieldPromises so run completion waits on it.
    var scheduleField = function scheduleField(fieldId, entry, dependencyPromise) {
      run.scheduledFieldIds.add(fieldId);
      run.idleSince = null;
      if (run.idleTimeoutId) {
        clearTimeout(run.idleTimeoutId);
        run.idleTimeoutId = null;
      }
      var fieldPromise = dependencyPromise.then(/*#__PURE__*/autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee4() {
        var latestEntry, entryToProcess, answer;
        return autofill_shared_regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!shouldAbortRun(run)) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2, undefined);
            case 1:
              _context4.n = 2;
              return waitForLiveFieldEntry(fieldId, entry);
            case 2:
              latestEntry = _context4.v;
              if (latestEntry) {
                _context4.n = 3;
                break;
              }
              return _context4.a(2, undefined);
            case 3:
              entryToProcess = buildProcessingEntry(fieldId, latestEntry);
              _context4.n = 4;
              return processField(fieldId, entryToProcess, {
                shouldAbort: function shouldAbort() {
                  return shouldAbortRun(run);
                }
              });
            case 4:
              answer = _context4.v;
              rememberFieldAnswer(fieldId, entryToProcess, answer);
              return _context4.a(2, answer);
          }
        }, _callee4);
      })));
      run.fieldPromises.set(fieldId, fieldPromise);
      fieldPromise["finally"](function () {
        if (run.fieldPromises.get(fieldId) === fieldPromise) {
          run.fieldPromises["delete"](fieldId);
        }
        scheduleRunCompletionIfIdle(run);
      });
    };

    // `fillLast` entries are held back until every other field scheduled in this pass has settled
    // (Lever's location autocomplete: focusing it fires hcaptcha.execute(), so a challenge it pops must
    // not cover fields still to be filled — and by then the page's own prefill has landed for the
    // handler to compare against). Their own waitForFieldId / dependsOnPrevious still applies.
    var deferred = [];
    var previousFieldId = null;
    Array.from(fieldCache.entries()).forEach(function (_ref0) {
      var _getAutofillQuestionS;
      var _ref1 = _slicedToArray(_ref0, 2),
        fieldId = _ref1[0],
        entry = _ref1[1];
      // Scoped runs (a panel retry on a hierarchical field) only ever process their target
      // hierarchy — every other field on the page is left untouched, including newly-detected
      // ones folded in mid-run.
      if (run.fieldScope && !run.fieldScope(fieldId)) {
        previousFieldId = fieldId;
        return;
      }
      if (run.scheduledFieldIds.has(fieldId)) {
        previousFieldId = fieldId;
        return;
      }

      // Never re-fill a field that already completed on this page. Per-field status persists across
      // runs (syncAutofillQuestionState keeps it), so a re-detection that introduces a NEW field
      // (e.g. a security/verification code that appears after earlier fields are filled) schedules
      // ONLY that new field instead of restarting the whole form from scratch.
      if (((_getAutofillQuestionS = getAutofillQuestionState(fieldId)) === null || _getAutofillQuestionS === void 0 ? void 0 : _getAutofillQuestionS.status) === 'filled') {
        previousFieldId = fieldId;
        return;
      }
      var dependencyFieldId = (entry === null || entry === void 0 ? void 0 : entry.waitForFieldId) || (entry !== null && entry !== void 0 && entry.dependsOnPrevious || entry !== null && entry !== void 0 && entry.waitForPreviousField ? previousFieldId : null);
      var dependencyPromise = dependencyFieldId && run.fieldPromises.has(dependencyFieldId) ? run.fieldPromises.get(dependencyFieldId)["catch"](function () {
        return undefined;
      }) : Promise.resolve();
      if (entry !== null && entry !== void 0 && entry.fillLast) {
        // Claim the slot now so nothing schedules it ahead of the others; chained below.
        run.scheduledFieldIds.add(fieldId);
        deferred.push({
          fieldId: fieldId,
          entry: entry,
          dependencyPromise: dependencyPromise
        });
      } else {
        scheduleField(fieldId, entry, dependencyPromise);
      }
      previousFieldId = fieldId;
    });
    deferred.forEach(function (_ref10) {
      var fieldId = _ref10.fieldId,
        entry = _ref10.entry,
        dependencyPromise = _ref10.dependencyPromise;
      var others = Array.from(run.fieldPromises.entries()).filter(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 1),
          otherFieldId = _ref12[0];
        return otherFieldId !== fieldId;
      }).map(function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
          promise = _ref14[1];
        return promise["catch"](function () {
          return undefined;
        });
      });
      scheduleField(fieldId, entry, Promise.all([dependencyPromise].concat(autofill_shared_toConsumableArray(others))).then(function () {
        return undefined;
      }));
    });
    scheduleRunCompletionIfIdle(run);
  };

  // --- live-node re-resolution ------------------------------------------------------------------
  // A previous fill can make the platform unmount and remount a control under the SAME fieldId
  // (BambooHR: Country → US swaps the "Province" <input name="state.value"> for a "State" Fabric
  // select ~130 ms after the click). The stale cached node used to be filled with the old kind's
  // handler, reported 'filled', and the re-detection (same fieldId) skipped it as already done. If the
  // cached node is detached, park the field until the next updateFieldCache carries a live node for it
  // (timeout = fallback to the stale entry). Used at THREE points: when the field's turn starts, right
  // before the DOM fill (the remount may land while the answer is being generated — processField), and
  // after a dependent field's fill settle beat. Non-DOM `field` values are never treated as stale.
  var LIVE_FIELD_SETTLE_TIMEOUT_MS = 2000;
  var liveFieldWaiters = new Map(); // fieldId -> resolve(entry); one per fieldId at a time
  var isDetachedFieldEntry = function isDetachedFieldEntry(entry) {
    return isDetachedFieldNode(entry === null || entry === void 0 ? void 0 : entry.field);
  };
  var waitForLiveFieldEntry = function waitForLiveFieldEntry(fieldId, fallbackEntry) {
    var _fieldCache$get;
    var currentEntry = (_fieldCache$get = fieldCache.get(fieldId)) !== null && _fieldCache$get !== void 0 ? _fieldCache$get : fallbackEntry;
    if (!isDetachedFieldEntry(currentEntry)) return currentEntry;
    return new Promise(function (resolve) {
      var timeoutId = setTimeout(function () {
        var _fieldCache$get2;
        liveFieldWaiters["delete"](fieldId);
        resolve((_fieldCache$get2 = fieldCache.get(fieldId)) !== null && _fieldCache$get2 !== void 0 ? _fieldCache$get2 : fallbackEntry);
      }, LIVE_FIELD_SETTLE_TIMEOUT_MS);
      liveFieldWaiters.set(fieldId, function (liveEntry) {
        clearTimeout(timeoutId);
        resolve(liveEntry);
      });
    });
  };
  var resolveLiveFieldWaiters = function resolveLiveFieldWaiters() {
    var _iterator3 = autofill_shared_createForOfIteratorHelper(liveFieldWaiters),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
          fieldId = _step3$value[0],
          resolve = _step3$value[1];
        var entry = fieldCache.get(fieldId);
        if (!entry || isDetachedFieldEntry(entry)) continue; // transient rebuild without it: keep waiting
        liveFieldWaiters["delete"](fieldId);
        resolve(entry);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };
  var updateFieldCache = function updateFieldCache() {
    var questions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var normalizedQuestions = normalizePasswordAutofillQuestions(questions, {
      detectPasswordInputs: detectPasswordInputs
    });
    assignFieldPositions(normalizedQuestions);
    var previousFieldCache = new Map(fieldCache);
    fieldCache.clear();
    normalizedQuestions.forEach(function (questionInfo) {
      if (questionInfo !== null && questionInfo !== void 0 && questionInfo.fieldId) {
        var _ref15, _questionInfo$answerT, _ref16, _questionInfo$fieldKi, _ref17, _questionInfo$options, _ref18, _questionInfo$constra, _fieldPositions$get2, _fieldPageSignatures$;
        var previousQuestionInfo = previousFieldCache.get(questionInfo.fieldId);
        fieldCache.set(questionInfo.fieldId, autofill_shared_objectSpread(autofill_shared_objectSpread(autofill_shared_objectSpread({}, previousQuestionInfo), questionInfo), {}, {
          answerType: (_ref15 = (_questionInfo$answerT = questionInfo.answerType) !== null && _questionInfo$answerT !== void 0 ? _questionInfo$answerT : previousQuestionInfo === null || previousQuestionInfo === void 0 ? void 0 : previousQuestionInfo.answerType) !== null && _ref15 !== void 0 ? _ref15 : null,
          fieldKind: (_ref16 = (_questionInfo$fieldKi = questionInfo.fieldKind) !== null && _questionInfo$fieldKi !== void 0 ? _questionInfo$fieldKi : previousQuestionInfo === null || previousQuestionInfo === void 0 ? void 0 : previousQuestionInfo.fieldKind) !== null && _ref16 !== void 0 ? _ref16 : null,
          options: (_ref17 = (_questionInfo$options = questionInfo.options) !== null && _questionInfo$options !== void 0 ? _questionInfo$options : previousQuestionInfo === null || previousQuestionInfo === void 0 ? void 0 : previousQuestionInfo.options) !== null && _ref17 !== void 0 ? _ref17 : null,
          constraints: (_ref18 = (_questionInfo$constra = questionInfo.constraints) !== null && _questionInfo$constra !== void 0 ? _questionInfo$constra : previousQuestionInfo === null || previousQuestionInfo === void 0 ? void 0 : previousQuestionInfo.constraints) !== null && _ref18 !== void 0 ? _ref18 : {},
          position: (_fieldPositions$get2 = fieldPositions.get(questionInfo.fieldId)) !== null && _fieldPositions$get2 !== void 0 ? _fieldPositions$get2 : null,
          pageSignature: (_fieldPageSignatures$ = fieldPageSignatures.get(questionInfo.fieldId)) !== null && _fieldPageSignatures$ !== void 0 ? _fieldPageSignatures$ : null
        }));
      }
    });
    syncAutofillQuestionState(normalizedQuestions.map(function (questionInfo) {
      return questionInfo === null || questionInfo === void 0 ? void 0 : questionInfo.fieldId;
    }));
    resolveLiveFieldWaiters();
    if (autofillInProgress && activeAutofillRun) {
      // Re-detect during an active run reschedules any newly-appeared (conditional/dependent) fields.
      schedulePendingAutofillFields(activeAutofillRun);
    }
    return normalizedQuestions;
  };
  var detectAndCacheFields = function detectAndCacheFields() {
    var questions = detectFields();
    var normalizedQuestions = updateFieldCache(questions);
    var submitButton = typeof detectSubmitButton === 'function' ? detectSubmitButton() : null;
    // Non-mutating advance probe (see the registerAutofillHandlers hook doc). Errors are swallowed
    // to null — a broken probe must never take down field detection.
    var advanceButton = null;
    if (typeof detectAdvanceButton === 'function') {
      try {
        var _detectAdvanceButton;
        advanceButton = (_detectAdvanceButton = detectAdvanceButton()) !== null && _detectAdvanceButton !== void 0 ? _detectAdvanceButton : null;
      } catch (_unused4) {
        advanceButton = null;
      }
    }
    var autofillAvailable = typeof isAutofillAvailable === 'function' ? Boolean(isAutofillAvailable({
      questions: questions,
      normalizedQuestions: normalizedQuestions,
      fieldCount: normalizedQuestions.length,
      submitButton: submitButton
    })) : normalizedQuestions.length > 0;
    if (!autofillAvailable && normalizedQuestions.length === 0 && !(submitButton !== null && submitButton !== void 0 && submitButton.detected)) {
      return null;
    }
    return {
      autofillAvailable: autofillAvailable,
      submitButton: submitButton,
      advanceButton: advanceButton,
      // The page url lets the background scope its field-less-step signature per step: SPA route
      // changes (e.g. Workday details → apply/applyManually) don't reset qa-state in every build,
      // so two field-less steps must not share one auto-start one-shot across urls.
      url: window.location.href,
      questions: normalizedQuestions.map(function (questionInfo) {
        var _fieldPositions$get3, _fieldPageSignatures$2;
        return autofill_shared_objectSpread(autofill_shared_objectSpread(autofill_shared_objectSpread({}, stripFieldFromQuestion(questionInfo)), getDetectedQuestionState(questionInfo, answerTypeHandlers)), {}, {
          // The sticky form ordinal + source-page hash assigned in updateFieldCache (which always
          // runs assignFieldPositions before this payload is built). They MUST ride the payload:
          // this is the only channel to the background — without the stamp they only ever lived on
          // the internal fieldCache, every session_qas row registered position NULL, and the Form
          // tab's position sort collapsed to createdAt (= concurrent answer-resolution order, i.e.
          // a scrambled display). Safe for the step signature: normalizeAutofillStepQuestions
          // whitelists fieldId/question/answerType/fieldKind/options/constraints, so an ordinal
          // shift can never mint a phantom step change.
          position: (_fieldPositions$get3 = fieldPositions.get(questionInfo === null || questionInfo === void 0 ? void 0 : questionInfo.fieldId)) !== null && _fieldPositions$get3 !== void 0 ? _fieldPositions$get3 : null,
          pageSignature: (_fieldPageSignatures$2 = fieldPageSignatures.get(questionInfo === null || questionInfo === void 0 ? void 0 : questionInfo.fieldId)) !== null && _fieldPageSignatures$2 !== void 0 ? _fieldPageSignatures$2 : null
        });
      })
    };
  };
  var getFieldEntry = function getFieldEntry(fieldId) {
    var _fieldCache$get3;
    if (fieldCache.has(fieldId)) return fieldCache.get(fieldId);
    detectAndCacheFields();
    return (_fieldCache$get3 = fieldCache.get(fieldId)) !== null && _fieldCache$get3 !== void 0 ? _fieldCache$get3 : null;
  };
  var waitForFieldsAfterEmptyAdvance = /*#__PURE__*/function () {
    var _ref19 = autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee5() {
      var deadline;
      return autofill_shared_regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            deadline = Date.now() + EMPTY_ADVANCE_FIELD_WAIT_TIMEOUT_MS;
          case 1:
            if (!(Date.now() <= deadline)) {
              _context5.n = 4;
              break;
            }
            detectAndCacheFields();
            if (!(fieldCache.size > 0)) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2, true);
          case 2:
            _context5.n = 3;
            return sleep(EMPTY_ADVANCE_FIELD_POLL_MS);
          case 3:
            _context5.n = 1;
            break;
          case 4:
            return _context5.a(2, false);
        }
      }, _callee5);
    }));
    return function waitForFieldsAfterEmptyAdvance() {
      return _ref19.apply(this, arguments);
    };
  }();
  ensureAutofillPort();
  void sendRuntimeMessage({
    message_type: 'getAutofillDetectionState',
    url: window.location.href
  }, 'Failed to resolve autofill detection state').then(function (_ref20) {
    var enabled = _ref20.enabled,
      positionBase = _ref20.positionBase,
      fillOnly = _ref20.fillOnly,
      noAutoAdvance = _ref20.noAutoAdvance;
    // Only the autoapply background reports positionBase; elsewhere it's undefined (no-op seed).
    seedFieldPositionBase(positionBase);
    // A fill-only tab (only the autoapply background ever says so — the doctor lab's shadow re-run):
    // Submit is refused on this page from load on, whatever reaches it first (see fillOnlyRun).
    if (fillOnly === true) fillOnlyRun = true;
    // A gated tab (only the autoapply background ever says so — the doctor lab's onboarding run): this
    // document never clicks the platform's advance on an empty page by itself (see noAutoAdvanceRun).
    if (noAutoAdvance === true) noAutoAdvanceRun = true;
    autofillDetectionEnabled = Boolean(enabled);
    if (!autofillDetectionEnabled) return;
    return parser(detectAndCacheFields, 'autofillQuestionsFound', parserDebounceMs, postAutofillMessage);
  })["catch"](function () {
    autofillDetectionEnabled = false;
  });

  // --- hierarchy-scoped refill -------------------------------------------------------------------
  // A field with parentFieldId children (e.g. a work-history section root whose fill only claims
  // rows by clicking "Add another") cannot be re-filled by a bare processField: its children only
  // ever fill through RUN scheduling — re-detected fields fold into a run via updateFieldCache,
  // which requires an active run. So a panel retry on such a field runs as a mini-run scoped to the
  // target's hierarchy: nothing else on the page fills, and no autofillComplete is emitted (that
  // message is the auto-advance trigger for full runs).

  var isFieldDescendantOf = function isFieldDescendantOf(fieldId, ancestorFieldId) {
    var _fieldCache$get$paren, _fieldCache$get4;
    var visited = new Set([fieldId]);
    var currentId = (_fieldCache$get$paren = (_fieldCache$get4 = fieldCache.get(fieldId)) === null || _fieldCache$get4 === void 0 ? void 0 : _fieldCache$get4.parentFieldId) !== null && _fieldCache$get$paren !== void 0 ? _fieldCache$get$paren : null;
    while (currentId != null && !visited.has(currentId)) {
      var _fieldCache$get$paren2, _fieldCache$get5;
      if (currentId === ancestorFieldId) return true;
      visited.add(currentId);
      currentId = (_fieldCache$get$paren2 = (_fieldCache$get5 = fieldCache.get(currentId)) === null || _fieldCache$get5 === void 0 ? void 0 : _fieldCache$get5.parentFieldId) !== null && _fieldCache$get$paren2 !== void 0 ? _fieldCache$get$paren2 : null;
    }
    return false;
  };
  var fieldHasHierarchyChildren = function fieldHasHierarchyChildren(targetFieldId) {
    var _iterator4 = autofill_shared_createForOfIteratorHelper(fieldCache.values()),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var entry = _step4.value;
        if ((entry === null || entry === void 0 ? void 0 : entry.parentFieldId) === targetFieldId) return true;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return false;
  };
  var refillFieldHierarchy = /*#__PURE__*/function () {
    var _ref21 = autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee6(targetFieldId) {
      var inHierarchy, knownFieldIds, run, isCurrentRun;
      return autofill_shared_regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            // Descendant-ness via cache parent chains, plus the section hierarchy's synthetic-id prefix
            // ('workHistory:0:companyName'): editor-mode section LEAVES leave the field cache when their
            // editor closes (only committed group cards stay detected), so the parent-chain walk can't see
            // them — but their fieldIds still carry the root's prefix.
            inHierarchy = function inHierarchy(fieldId) {
              return fieldId === targetFieldId || String(fieldId !== null && fieldId !== void 0 ? fieldId : '').startsWith("".concat(targetFieldId, ":")) || isFieldDescendantOf(fieldId, targetFieldId);
            }; // Reset the hierarchy's persisted statuses ('filled' fields are never rescheduled) so every
            // node — target, groups, leaves — becomes eligible again; panel rows flip back to idle.
            // Include autofillQuestionState keys, NOT just cached fields: leaf statuses persist after the
            // leaves are pruned from the cache (an idle page runs no detection pass to prune state, and
            // pruning wouldn't matter — the reset must clear them). Without this, the re-run's freshly
            // re-detected leaves are skipped as already-'filled', so an editor-mode section (UltiPro work
            // history) saves a BLANK entry, the platform rejects it ("company must not be empty"), the
            // stuck-open editor hides the Add button, and the root dies with "Could not open entry N".
            knownFieldIds = new Set([].concat(autofill_shared_toConsumableArray(fieldCache.keys()), autofill_shared_toConsumableArray(autofillQuestionState.keys())));
            Array.from(knownFieldIds).filter(inHierarchy).forEach(function (fieldId) {
              sendProgress(fieldId, {
                status: 'idle',
                answer: null
              });
            });
            if (!(autofillInProgress && activeAutofillRun)) {
              _context6.n = 1;
              break;
            }
            // A run is already active — fold the reset hierarchy into it. Fields that run already
            // scheduled are skipped (run-local scheduledFieldIds); retrying again once it settles
            // performs the full refill.
            schedulePendingAutofillFields(activeAutofillRun);
            return _context6.a(2);
          case 1:
            run = createAutofillRun();
            run.fieldScope = inHierarchy;
            setAutofillInProgress(true);
            _context6.p = 2;
            schedulePendingAutofillFields(run);
            _context6.n = 3;
            return run.completionPromise;
          case 3:
            _context6.p = 3;
            isCurrentRun = activeAutofillRun === run;
            clearAutofillRun(run);
            if (isCurrentRun) {
              setAutofillInProgress(false);
            }
            // Intentionally no onComplete(): a scoped refill must not announce run completion.
            return _context6.f(3);
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[2,, 3, 4]]);
    }));
    return function refillFieldHierarchy(_x5) {
      return _ref21.apply(this, arguments);
    };
  }();
  onMessage('fillAutofillField', /*#__PURE__*/function () {
    var _ref22 = autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee7(request) {
      var _ref23, fieldId, question, answer, refetch, entry, processedEntry, generatedAnswer, answerHandler, editableOnPanel, kindHandler, _t;
      return autofill_shared_regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _ref23 = request.data || request, fieldId = _ref23.fieldId, question = _ref23.question, answer = _ref23.answer, refetch = _ref23.refetch;
            if (fieldId) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            if (!(answer === -1 || answer && autofill_shared_typeof(answer) === 'object' && answer.type === 'skip')) {
              _context7.n = 2;
              break;
            }
            sendProgress(fieldId, {
              status: 'skipped',
              answer: null
            });
            return _context7.a(2);
          case 2:
            entry = getFieldEntry(fieldId);
            if (entry) {
              _context7.n = 3;
              break;
            }
            return _context7.a(2);
          case 3:
            if (!(refetch || answer == null)) {
              _context7.n = 7;
              break;
            }
            if (!(entry.hierarchyRoot || fieldHasHierarchyChildren(fieldId))) {
              _context7.n = 5;
              break;
            }
            _context7.n = 4;
            return refillFieldHierarchy(fieldId);
          case 4:
            return _context7.a(2);
          case 5:
            processedEntry = buildProcessingEntry(fieldId, entry);
            _context7.n = 6;
            return processField(fieldId, processedEntry);
          case 6:
            generatedAnswer = _context7.v;
            rememberFieldAnswer(fieldId, processedEntry, generatedAnswer);
            return _context7.a(2);
          case 7:
            answerHandler = answerTypeHandlers.get(entry.answerType);
            editableOnPanel = isAutofillAnswerEditableOnPanel(answerHandler, answer, {
              fieldId: fieldId,
              entry: entry
            });
            sendProgress(fieldId, {
              status: 'pending',
              editableOnPanel: editableOnPanel
            });
            _context7.p = 8;
            kindHandler = fieldKindHandlers.get(entry.fieldKind);
            if (!kindHandler) {
              _context7.n = 9;
              break;
            }
            _context7.n = 9;
            return runDomTask(function () {
              return kindHandler(fieldId, question !== null && question !== void 0 ? question : entry.question, answer, entry.field);
            });
          case 9:
            sendProgress(fieldId, {
              status: 'filled',
              answer: getAutofillPanelAnswer(answerHandler, answer, {
                fieldId: fieldId,
                entry: entry
              }),
              editableOnPanel: editableOnPanel
            });
            rememberFieldAnswer(fieldId, entry, answer);
            _context7.n = 11;
            break;
          case 10:
            _context7.p = 10;
            _t = _context7.v;
            console.error('Error filling field:', _t);
            sendProgress(fieldId, {
              status: 'error',
              answer: _t.message,
              editableOnPanel: editableOnPanel
            });
          case 11:
            return _context7.a(2);
        }
      }, _callee7, null, [[8, 10]]);
    }));
    return function (_x6) {
      return _ref22.apply(this, arguments);
    };
  }());

  // Click the platform's Next/Continue and REPORT whether anything was actually clicked — the
  // response rides the response-capable onMessage listener back to the background (the takeover
  // panel's "No Continue button found" feedback and the driver's hold-preserving bare-Snapshot
  // path consume it). advanceFlow's contract: truthy return = clicked an advance target. NOTE:
  // some platforms deliberately return false after an apply-REVEAL click (bamboohr/rippling/
  // ashbyhq/workday pre-form steps — auto-start re-gating); consumers run on FORM pages where
  // that under-report can't occur, and a masked click self-heals via the driver's
  // stepAdvanced-clears-the-hold path.
  onMessage('advanceAutofillFlow', /*#__PURE__*/autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee8() {
    var _t2, _t3, _t4;
    return autofill_shared_regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          if (!(typeof advanceFlow !== 'function')) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2, {
            advanced: false
          });
        case 1:
          _context8.p = 1;
          _t2 = Boolean;
          _context8.n = 2;
          return runDomTask(function () {
            return advanceFlow();
          });
        case 2:
          _t3 = _t2(_context8.v);
          return _context8.a(2, {
            advanced: _t3
          });
        case 3:
          _context8.p = 3;
          _t4 = _context8.v;
          console.error('Error advancing autofill flow:', _t4);
          return _context8.a(2, {
            advanced: false
          });
      }
    }, _callee8, null, [[1, 3]]);
  })));

  // Submit step: click the platform's detected submit button. The background only sends this when
  // auto-submit is enabled (gated upstream); the enabled-button check is the final gate — if no
  // enabled submit button appears within the wait, nothing is clicked. The wait exists because the
  // click can race the platform enabling the button (e.g. Greenhouse enables Submit asynchronously
  // after the verification-code digits fire their input events). Polling happens OUTSIDE the dom
  // mutex — holding it would block the very fill tasks that enable the button; only the final
  // re-check + click takes the mutex.
  // Live, NON-mutating forward-control probe for the background's advance clock (auto-driver
  // onAdvanceTimeout): re-runs the platform's detectAdvanceButton against the CURRENT DOM and returns
  // its result ({ detected, label, disabled? }; null without a probe). Authoritative where the cached
  // detection payload trails the DOM (parser debounce/dedupe) — a step save in flight is a bare
  // `disabled` flip on the Next button and nothing else. Never clicks, never waits, no dom mutex.
  onMessage('probeAdvanceButton', function () {
    if (typeof detectAdvanceButton !== 'function') return null;
    try {
      var _detectAdvanceButton2;
      return (_detectAdvanceButton2 = detectAdvanceButton()) !== null && _detectAdvanceButton2 !== void 0 ? _detectAdvanceButton2 : null;
    } catch (_unused5) {
      return null;
    }
  });
  // Live submit-button probe for the background's submit-wait (auto-driver onSubmitTimeout): re-runs
  // the platform's detectSubmitButton against the CURRENT DOM ({ detected, label, disabled, busy? }).
  // `busy` is the platform's own word for "the press landed and the site is still answering it"
  // (RippleHire's "Please wait…"); `pressing` = this document is still carrying out the requested
  // press (submitPressInFlight). The driver holds its watchdog on either. Never clicks, never waits.
  onMessage('probeSubmitButton', function () {
    if (typeof detectSubmitButton !== 'function') return submitPressInFlight ? {
      pressing: true
    } : null;
    try {
      var _detectSubmitButton;
      var probe = (_detectSubmitButton = detectSubmitButton()) !== null && _detectSubmitButton !== void 0 ? _detectSubmitButton : null;
      return submitPressInFlight ? autofill_shared_objectSpread(autofill_shared_objectSpread({}, probe || {}), {}, {
        pressing: true
      }) : probe;
    } catch (_unused6) {
      return submitPressInFlight ? {
        pressing: true
      } : null;
    }
  });

  // Click report (mirrors advanceAutofillFlow's { advanced }): resolves { clicked: true } once the
  // button was clicked, { clicked: false, reason } when no ENABLED submit button appeared within the
  // wait (NOTHING was clicked — the background may safely press again), { clicked: null } when the
  // click path threw (unknown). Fire-and-forget senders ignore it.
  onMessage('submitAutofillFlow', /*#__PURE__*/function () {
    var _ref25 = autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee0(request) {
      var _request$data;
      var isSubmitButtonBlocked, enableWaitMs, deadline, clicked, _t5;
      return autofill_shared_regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            if (!fillOnlyRun) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2, {
              clicked: false,
              reason: 'fill_only'
            });
          case 1:
            if (!(typeof getSubmitButton !== 'function')) {
              _context0.n = 2;
              break;
            }
            return _context0.a(2);
          case 2:
            isSubmitButtonBlocked = function isSubmitButtonBlocked(button) {
              return !button || button.disabled || button.getAttribute('aria-disabled') === 'true';
            };
            enableWaitMs = resolveSubmitEnableWaitMs(request === null || request === void 0 || (_request$data = request.data) === null || _request$data === void 0 ? void 0 : _request$data.enableWaitMs);
            submitPressInFlight = true;
            _context0.p = 3;
            deadline = Date.now() + enableWaitMs;
          case 4:
            if (!isSubmitButtonBlocked(getSubmitButton())) {
              _context0.n = 7;
              break;
            }
            if (!(Date.now() >= deadline)) {
              _context0.n = 5;
              break;
            }
            return _context0.a(2, {
              clicked: false,
              reason: 'submit_button_blocked'
            });
          case 5:
            _context0.n = 6;
            return sleep(SUBMIT_BUTTON_ENABLE_POLL_MS);
          case 6:
            _context0.n = 4;
            break;
          case 7:
            if (!humanizeClicks) {
              _context0.n = 8;
              break;
            }
            _context0.n = 8;
            return sleep(Math.round(SUBMIT_REVIEW_PAUSE_MS * (0.7 + Math.random() * 0.6)));
          case 8:
            clicked = false;
            _context0.n = 9;
            return runDomTask(/*#__PURE__*/autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee9() {
              var button;
              return autofill_shared_regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    button = getSubmitButton();
                    if (!isSubmitButtonBlocked(button)) {
                      _context9.n = 1;
                      break;
                    }
                    return _context9.a(2);
                  case 1:
                    if (!(typeof clickSubmitButton === 'function')) {
                      _context9.n = 3;
                      break;
                    }
                    _context9.n = 2;
                    return clickSubmitButton(button);
                  case 2:
                    _context9.n = 6;
                    break;
                  case 3:
                    if (!humanizeClicks) {
                      _context9.n = 5;
                      break;
                    }
                    _context9.n = 4;
                    return clickLikeHuman(button);
                  case 4:
                    _context9.n = 6;
                    break;
                  case 5:
                    button.click();
                  case 6:
                    clicked = true;
                  case 7:
                    return _context9.a(2);
                }
              }, _callee9);
            })));
          case 9:
            if (clicked) {
              // "The press LANDED" — the auto-apply driver restarts its submit-wait window from this moment
              // (a human-paced / remote-input press lands seconds after it was requested). Fire-and-forget;
              // the main extension has no handler for it.
              void sendRuntimeMessage({
                message_type: 'autofillSubmitPressed'
              })["catch"](function () {
                return undefined;
              });
            }
            return _context0.a(2, clicked ? {
              clicked: true
            } : {
              clicked: false,
              reason: 'submit_button_blocked'
            });
          case 10:
            _context0.p = 10;
            _t5 = _context0.v;
            console.error('Error submitting autofill flow:', _t5);
            return _context0.a(2, {
              clicked: null,
              reason: 'error'
            });
          case 11:
            _context0.p = 11;
            submitPressInFlight = false;
            return _context0.f(11);
          case 12:
            return _context0.a(2);
        }
      }, _callee0, null, [[3, 10, 11, 12]]);
    }));
    return function (_x7) {
      return _ref25.apply(this, arguments);
    };
  }());
  onMessage('startAutofill', /*#__PURE__*/function () {
    var _ref27 = autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee1(request) {
      var _request$data2, _request$data3, _request$data4;
      var forceRefill, cancelled, advanced, autofillRun, isCurrentRun, _t6, _t7, _t8, _t9;
      return autofill_shared_regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            // First, before any early return: a fill-only run's flag (sticky — see fillOnlyRun).
            if ((request === null || request === void 0 || (_request$data2 = request.data) === null || _request$data2 === void 0 ? void 0 : _request$data2.fillOnly) === true) fillOnlyRun = true;
            // Likewise a gated run's (sticky — see noAutoAdvanceRun).
            if ((request === null || request === void 0 || (_request$data3 = request.data) === null || _request$data3 === void 0 ? void 0 : _request$data3.noAutoAdvance) === true) noAutoAdvanceRun = true;
            // Default is INCREMENTAL: keep per-field 'filled' status so schedulePendingAutofillFields skips
            // done fields and fills ONLY unfilled/newly-appeared ones (a verification code, a post-action
            // top-up, a resume). forceRefill is the explicit opt-in for "redo the whole form" (the manual
            // "Autofill" button) — it wipes that status so every field re-fills with fresh answers. Intent
            // must come from the caller: page state (filled fields + maybe a new one) looks identical for
            // both, and defaulting to incremental means a caller that omits the flag can never accidentally
            // re-fill a whole form.
            forceRefill = Boolean(request === null || request === void 0 || (_request$data4 = request.data) === null || _request$data4 === void 0 ? void 0 : _request$data4.forceRefill);
            if (!(typeof beforeStartAutofill === 'function')) {
              _context1.n = 5;
              break;
            }
            cancelled = false;
            _context1.p = 1;
            _context1.n = 2;
            return runDomTask(function () {
              return beforeStartAutofill({
                runActive: autofillInProgress && Boolean(activeAutofillRun)
              });
            });
          case 2:
            _t6 = _context1.v;
            cancelled = _t6 === false;
            _context1.n = 4;
            break;
          case 3:
            _context1.p = 3;
            _t7 = _context1.v;
            console.error('Error preparing autofill flow:', _t7);
          case 4:
            if (!cancelled) {
              _context1.n = 5;
              break;
            }
            return _context1.a(2);
          case 5:
            detectAndCacheFields();

            // Already filling: a duplicate startAutofill (re-detected/changed form, or a racing auto-start
            // trigger) must NOT reset and re-run from scratch. detectAndCacheFields() above already folded any
            // newly-appeared fields into the active run via updateFieldCache(); let it continue, which also
            // protects fields that are mid-fill (status 'pending') from being re-filled.
            if (!(autofillInProgress && activeAutofillRun)) {
              _context1.n = 6;
              break;
            }
            return _context1.a(2);
          case 6:
            if (!(fieldCache.size === 0)) {
              _context1.n = 12;
              break;
            }
            if (!(typeof advanceFlow === 'function' && !noAutoAdvanceRun)) {
              _context1.n = 11;
              break;
            }
            advanced = false;
            _context1.p = 7;
            _t8 = Boolean;
            _context1.n = 8;
            return runDomTask(function () {
              return advanceFlow();
            });
          case 8:
            advanced = _t8(_context1.v);
            _context1.n = 10;
            break;
          case 9:
            _context1.p = 9;
            _t9 = _context1.v;
            console.error('Error advancing empty autofill flow:', _t9);
          case 10:
            if (!advanced) {
              _context1.n = 11;
              break;
            }
            _context1.n = 11;
            return waitForFieldsAfterEmptyAdvance();
          case 11:
            if (!(fieldCache.size === 0)) {
              _context1.n = 12;
              break;
            }
            return _context1.a(2);
          case 12:
            if (forceRefill) {
              // Full redo: wipe per-field 'filled' status + dependency answer history so EVERY field re-fills.
              resetAutofillState();
              clearFieldAnswerHistory();
            } else {
              // Incremental (default): keep autofillQuestionState so already-'filled' fields stay skipped;
              // just drop any stale run object (no-op when none is active).
              cancelAutofillRun(activeAutofillRun);
            }
            autofillRun = createAutofillRun();
            setAutofillInProgress(true);
            _context1.p = 13;
            schedulePendingAutofillFields(autofillRun);
            _context1.n = 14;
            return autofillRun.completionPromise;
          case 14:
            _context1.p = 14;
            isCurrentRun = activeAutofillRun === autofillRun;
            clearAutofillRun(autofillRun);
            if (!isCurrentRun) {
              _context1.n = 15;
              break;
            }
            setAutofillInProgress(false);
            _context1.n = 15;
            return onComplete();
          case 15:
            return _context1.f(14);
          case 16:
            return _context1.a(2);
        }
      }, _callee1, null, [[13,, 14, 16], [7, 9], [1, 3]]);
    }));
    return function (_x8) {
      return _ref27.apply(this, arguments);
    };
  }());
}
var DEFAULT_METADATA_FETCH_RETRIES = 3;
var DEFAULT_METADATA_RETRY_DELAY_MS = 500;
function runDomTask(fn) {
  var _ref28 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref28$shouldAbort = _ref28.shouldAbort,
    shouldAbort = _ref28$shouldAbort === void 0 ? NEVER_ABORT : _ref28$shouldAbort;
  var runWithAbortScope = /*#__PURE__*/function () {
    var _ref29 = autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee10() {
      var previousAbortCheck;
      return autofill_shared_regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            previousAbortCheck = currentAbortCheck;
            currentAbortCheck = shouldAbort;
            _context10.p = 1;
            _context10.n = 2;
            return fn();
          case 2:
            return _context10.a(2, _context10.v);
          case 3:
            _context10.p = 3;
            currentAbortCheck = previousAbortCheck;
            return _context10.f(3);
          case 4:
            return _context10.a(2);
        }
      }, _callee10, null, [[1,, 3, 4]]);
    }));
    return function runWithAbortScope() {
      return _ref29.apply(this, arguments);
    };
  }();
  return domMutex !== null && domMutex !== void 0 && domMutex.lock ? domMutex.lock(runWithAbortScope) : runWithAbortScope();
}
function getDisplayAnswer(answer) {
  if (answer && autofill_shared_typeof(answer) === 'object' && !Array.isArray(answer) && answer.fileName) {
    return answer;
  }
  return answer != null && autofill_shared_typeof(answer) === 'object' && !Array.isArray(answer) ? 'Filled from profile' : answer;
}
function isPasswordPanelEntry() {
  var _context$answerType, _context$metadata;
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (context !== null && context !== void 0 && context.entry && isPasswordAutofillEntry(context.entry)) {
    return true;
  }
  return isPasswordAutofillEntry({
    fieldId: context === null || context === void 0 ? void 0 : context.fieldId,
    question: context === null || context === void 0 ? void 0 : context.question,
    answerType: (_context$answerType = context === null || context === void 0 ? void 0 : context.answerType) !== null && _context$answerType !== void 0 ? _context$answerType : context === null || context === void 0 || (_context$metadata = context.metadata) === null || _context$metadata === void 0 ? void 0 : _context$metadata.answerType
  });
}
function getAutofillPanelAnswer(answerHandler, answer) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (isPasswordPanelEntry(context)) {
    return PASSWORD_PANEL_MASK;
  }
  if (typeof (answerHandler === null || answerHandler === void 0 ? void 0 : answerHandler.stringifyAnswerForPanel) === 'function') {
    var panelAnswer = answerHandler.stringifyAnswerForPanel(answer);
    if (panelAnswer !== undefined) return panelAnswer;
  }
  return getDisplayAnswer(answer);
}
function isAutofillAnswerEditableOnPanel(answerHandler, answer) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (isPasswordPanelEntry(context)) {
    return false;
  }
  if (typeof (answerHandler === null || answerHandler === void 0 ? void 0 : answerHandler.isEditableOnPanel) === 'function') {
    return answerHandler.isEditableOnPanel(answer);
  }
  return true;
}
function findExactOptionMatch(value, options) {
  var _options$find;
  if (value == null || !Array.isArray(options) || options.length === 0) return null;
  var normalized = String(value).trim().toLowerCase();
  if (!normalized) return null;
  return (_options$find = options.find(function (option) {
    return String(option).trim().toLowerCase() === normalized;
  })) !== null && _options$find !== void 0 ? _options$find : null;
}
function resolveOptionValue(value, options) {
  if (value == null || !Array.isArray(options) || options.length === 0) return value;
  if (typeof value === 'number' && Number.isInteger(value) && value >= 0 && value < options.length) {
    return options[value];
  }
  if (typeof value === 'string') {
    var exact = findExactOptionMatch(value, options);
    if (exact != null) return exact;
    if (/^\d+$/.test(value.trim())) {
      var index = Number(value.trim());
      if (index >= 0 && index < options.length) {
        return options[index];
      }
    }
  }
  return value;
}
function resolveAutofillAnswer(answer, answerType, options) {
  if (!Array.isArray(options) || options.length === 0) return answer;
  if (answerType === 'single-select') {
    return resolveOptionValue(answer, options);
  }
  if (answerType === 'multi-select') {
    if (Array.isArray(answer)) {
      return answer.map(function (value) {
        return resolveOptionValue(value, options);
      });
    }
    // A multi-select answer can arrive as ONE joined string instead of an array: an
    // owner-typed confirmation answer, or a session_qas cache row stored in display form
    // ("Firestore, BigQuery, Spanner") — e.g. the extension-bff answer log and the
    // form-state snapshot both write joined text, which /autoapply/answer serves back
    // verbatim. If the whole string isn't itself an option but its comma-separated parts
    // include real options, split it so each part selects its own option.
    if (typeof answer === 'string' && !findExactOptionMatch(answer, options)) {
      var parts = answer.split(/[,\n]+/).map(function (part) {
        return part.trim();
      }).filter(Boolean);
      if (parts.length > 1 && parts.some(function (part) {
        return findExactOptionMatch(part, options);
      })) {
        return parts.map(function (part) {
          return resolveOptionValue(part, options);
        });
      }
    }
    return resolveOptionValue(answer, options);
  }
  return answer;
}
function createMutex() {
  var queue = Promise.resolve();
  return {
    lock: function lock(fn) {
      var release;
      var next = new Promise(function (resolve) {
        release = resolve;
      });
      var pending = queue.then(function () {
        return fn();
      })["finally"](release);
      queue = next;
      return pending;
    }
  };
}

/**
 * Creates a platform-specific field processor for the common autofill flow:
 * metadata readiness -> AI answer generation -> DOM injection -> progress updates.
 * Handler methods receive { shouldAbort } so platform code can cooperatively stop
 * DOM-heavy metadata/answer work when the active autofill run is cancelled.
 */
function createFieldProcessor(_ref30) {
  var answerTypeHandlers = _ref30.answerTypeHandlers,
    fieldKindHandlers = _ref30.fieldKindHandlers,
    _ref30$onMetadataReso = _ref30.onMetadataResolved,
    onMetadataResolved = _ref30$onMetadataReso === void 0 ? null : _ref30$onMetadataReso,
    _ref30$metadataFetchR = _ref30.metadataFetchRetries,
    metadataFetchRetries = _ref30$metadataFetchR === void 0 ? DEFAULT_METADATA_FETCH_RETRIES : _ref30$metadataFetchR,
    _ref30$metadataRetryD = _ref30.metadataRetryDelayMs,
    metadataRetryDelayMs = _ref30$metadataRetryD === void 0 ? DEFAULT_METADATA_RETRY_DELAY_MS : _ref30$metadataRetryD,
    _ref30$interFieldDela = _ref30.interFieldDelayMs,
    interFieldDelayMs = _ref30$interFieldDela === void 0 ? 0 : _ref30$interFieldDela,
    _ref30$resolveLiveFie = _ref30.resolveLiveFieldEntry,
    resolveLiveFieldEntry = _ref30$resolveLiveFie === void 0 ? null : _ref30$resolveLiveFie;
  return /*#__PURE__*/function () {
    var _processField = autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee14(fieldId, entry) {
      var _ref31,
        _ref31$shouldAbort,
        shouldAbort,
        question,
        field,
        answerType,
        fieldKind,
        options,
        constraints,
        referenceQaPairs,
        dependencyAnswer,
        resolveLiveEntry,
        answerHandler,
        _metadata$fieldKind2,
        _metadata$options2,
        _kindHandler,
        editableOnPanel,
        metadata,
        attempt,
        answer,
        fillEntry,
        resolveKindHandler,
        kindHandler,
        _args14 = arguments,
        _t11;
      return autofill_shared_regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            _ref31 = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : {}, _ref31$shouldAbort = _ref31.shouldAbort, shouldAbort = _ref31$shouldAbort === void 0 ? NEVER_ABORT : _ref31$shouldAbort;
            if (!shouldAbort()) {
              _context14.n = 1;
              break;
            }
            return _context14.a(2);
          case 1:
            question = entry.question, field = entry.field, answerType = entry.answerType, fieldKind = entry.fieldKind, options = entry.options, constraints = entry.constraints, referenceQaPairs = entry.referenceQaPairs, dependencyAnswer = entry.dependencyAnswer; // The LIVE control for a DOM operation. The node captured at detection (or at this field's turn
            // start) can be unmounted by the time the DOM mutex is ours — independent fields resolve their
            // entry when scheduled and then queue on the mutex, so a whole-form re-render landing during the
            // previous fill (Greenhouse hydration replacing #application-form, a BambooHR remount) leaves
            // every queued field holding a detached node. Re-resolve from the fieldId in that case.
            resolveLiveEntry = /*#__PURE__*/function () {
              var _ref32 = autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee11(baseEntry) {
                var _yield$resolveLiveFie;
                var _t0, _t1, _t10;
                return autofill_shared_regenerator().w(function (_context11) {
                  while (1) switch (_context11.n) {
                    case 0:
                      if (!(!resolveLiveFieldEntry || !isDetachedFieldNode(baseEntry === null || baseEntry === void 0 ? void 0 : baseEntry.field))) {
                        _context11.n = 1;
                        break;
                      }
                      return _context11.a(2, baseEntry);
                    case 1:
                      _context11.n = 2;
                      return resolveLiveFieldEntry(fieldId, baseEntry);
                    case 2:
                      _t1 = _yield$resolveLiveFie = _context11.v;
                      _t0 = _t1 !== null;
                      if (!_t0) {
                        _context11.n = 3;
                        break;
                      }
                      _t0 = _yield$resolveLiveFie !== void 0;
                    case 3:
                      if (!_t0) {
                        _context11.n = 4;
                        break;
                      }
                      _t10 = _yield$resolveLiveFie;
                      _context11.n = 5;
                      break;
                    case 4:
                      _t10 = baseEntry;
                    case 5:
                      return _context11.a(2, _t10);
                  }
                }, _callee11);
              }));
              return function resolveLiveEntry(_x1) {
                return _ref32.apply(this, arguments);
              };
            }();
            _context14.p = 2;
            if (!(answerType == null)) {
              _context14.n = 5;
              break;
            }
            _kindHandler = fieldKindHandlers.get(fieldKind);
            if (!_kindHandler) {
              _context14.n = 3;
              break;
            }
            _context14.n = 3;
            return runDomTask(function () {
              return _kindHandler(fieldId, question, undefined, field, {
                shouldAbort: shouldAbort
              });
            }, {
              shouldAbort: shouldAbort
            });
          case 3:
            if (!shouldAbort()) {
              _context14.n = 4;
              break;
            }
            return _context14.a(2);
          case 4:
            sendProgress(fieldId, {
              status: 'filled',
              answer: null,
              editableOnPanel: false
            });
            return _context14.a(2, undefined);
          case 5:
            answerHandler = answerTypeHandlers.get(answerType);
            if (answerHandler) {
              _context14.n = 6;
              break;
            }
            throw new Error("No handler for answer type: ".concat(answerType));
          case 6:
            editableOnPanel = isAutofillAnswerEditableOnPanel(answerHandler, null, {
              fieldId: fieldId,
              entry: entry
            });
            sendProgress(fieldId, {
              status: 'pending',
              editableOnPanel: editableOnPanel
            });
            metadata = {
              answerType: answerType,
              fieldKind: fieldKind,
              options: options,
              constraints: constraints,
              referenceQaPairs: referenceQaPairs,
              dependencyAnswer: dependencyAnswer
            };
            if (answerHandler.isMetadataReady(metadata)) {
              _context14.n = 12;
              break;
            }
            attempt = 0;
          case 7:
            if (!(attempt < metadataFetchRetries)) {
              _context14.n = 12;
              break;
            }
            if (!shouldAbort()) {
              _context14.n = 8;
              break;
            }
            return _context14.a(2);
          case 8:
            _context14.n = 9;
            return runDomTask(/*#__PURE__*/autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee12() {
              var metadataEntry;
              return autofill_shared_regenerator().w(function (_context12) {
                while (1) switch (_context12.n) {
                  case 0:
                    _context12.n = 1;
                    return resolveLiveEntry(entry);
                  case 1:
                    metadataEntry = _context12.v;
                    if (!shouldAbort()) {
                      _context12.n = 2;
                      break;
                    }
                    return _context12.a(2, metadata);
                  case 2:
                    return _context12.a(2, answerHandler.fetchMissingMetadata(metadata, fieldId, question, metadataEntry.field, {
                      shouldAbort: shouldAbort
                    }));
                }
              }, _callee12);
            })), {
              shouldAbort: shouldAbort
            });
          case 9:
            metadata = _context14.v;
            if (!answerHandler.isMetadataReady(metadata)) {
              _context14.n = 10;
              break;
            }
            return _context14.a(3, 12);
          case 10:
            if (!(attempt < metadataFetchRetries - 1)) {
              _context14.n = 11;
              break;
            }
            _context14.n = 11;
            return sleep(metadataRetryDelayMs);
          case 11:
            attempt++;
            _context14.n = 7;
            break;
          case 12:
            if (!shouldAbort()) {
              _context14.n = 13;
              break;
            }
            return _context14.a(2);
          case 13:
            onMetadataResolved === null || onMetadataResolved === void 0 || onMetadataResolved(fieldId, {
              answerType: metadata.answerType,
              fieldKind: (_metadata$fieldKind2 = metadata.fieldKind) !== null && _metadata$fieldKind2 !== void 0 ? _metadata$fieldKind2 : fieldKind,
              options: metadata.options,
              constraints: metadata.constraints
            });
            sendProgress(fieldId, {
              status: 'pending',
              type: metadata.answerType,
              options: metadata.options,
              constraints: metadata.constraints,
              editableOnPanel: editableOnPanel
            });
            _context14.n = 14;
            return answerHandler.generateAnswer(question, metadata, fieldId, {
              shouldAbort: shouldAbort
            });
          case 14:
            answer = _context14.v;
            if (!shouldAbort()) {
              _context14.n = 15;
              break;
            }
            return _context14.a(2);
          case 15:
            if (!(answer && autofill_shared_typeof(answer) === 'object' && answer.type === 'error')) {
              _context14.n = 16;
              break;
            }
            sendProgress(fieldId, {
              status: 'error',
              answer: answer.error,
              error: answer.error,
              errorCode: answer.errorCode,
              editableOnPanel: editableOnPanel
            });
            return _context14.a(2);
          case 16:
            if (!(answer === -1 || answer && autofill_shared_typeof(answer) === 'object' && answer.type === 'skip')) {
              _context14.n = 17;
              break;
            }
            sendProgress(fieldId, {
              status: 'skipped',
              answer: null,
              editableOnPanel: editableOnPanel
            });
            return _context14.a(2);
          case 17:
            if (!(answer && autofill_shared_typeof(answer) === 'object' && answer.type === 'review')) {
              _context14.n = 18;
              break;
            }
            sendProgress(fieldId, {
              status: 'review_required',
              answer: null,
              editableOnPanel: editableOnPanel
            });
            return _context14.a(2);
          case 18:
            answer = resolveAutofillAnswer(answer, metadata.answerType, (_metadata$options2 = metadata.options) !== null && _metadata$options2 !== void 0 ? _metadata$options2 : []);

            // Fill the LIVE control. The node captured at detection can be unmounted while the answer was
            // being generated (BambooHR remounts the Province input as a State select ~130 ms after the
            // Country click — after this field's turn started, before its answer came back); a remounted
            // control may also be a different kind, so the handler is picked from the live entry.
            _context14.n = 19;
            return resolveLiveEntry(entry);
          case 19:
            fillEntry = _context14.v;
            if (!shouldAbort()) {
              _context14.n = 20;
              break;
            }
            return _context14.a(2);
          case 20:
            resolveKindHandler = function resolveKindHandler(targetEntry) {
              var _metadata$fieldKind3, _ref34, _targetEntry$fieldKin;
              return fieldKindHandlers.get(targetEntry === entry ? (_metadata$fieldKind3 = metadata.fieldKind) !== null && _metadata$fieldKind3 !== void 0 ? _metadata$fieldKind3 : fieldKind : (_ref34 = (_targetEntry$fieldKin = targetEntry.fieldKind) !== null && _targetEntry$fieldKin !== void 0 ? _targetEntry$fieldKin : metadata.fieldKind) !== null && _ref34 !== void 0 ? _ref34 : fieldKind);
            };
            kindHandler = resolveKindHandler(fillEntry);
            if (!kindHandler) {
              _context14.n = 23;
              break;
            }
            if (!(kindHandler.bypassDomMutex === true)) {
              _context14.n = 22;
              break;
            }
            _context14.n = 21;
            return kindHandler(fieldId, question, answer, fillEntry.field, {
              shouldAbort: shouldAbort
            });
          case 21:
            _context14.n = 23;
            break;
          case 22:
            _context14.n = 23;
            return runDomTask(/*#__PURE__*/autofill_shared_asyncToGenerator(/*#__PURE__*/autofill_shared_regenerator().m(function _callee13() {
              var _resolveKindHandler;
              var liveKindHandler, remounted, remountedHandler, _remounted$question;
              return autofill_shared_regenerator().w(function (_context13) {
                while (1) switch (_context13.n) {
                  case 0:
                    _context13.n = 1;
                    return resolveLiveEntry(fillEntry);
                  case 1:
                    fillEntry = _context13.v;
                    if (!shouldAbort()) {
                      _context13.n = 2;
                      break;
                    }
                    return _context13.a(2);
                  case 2:
                    liveKindHandler = (_resolveKindHandler = resolveKindHandler(fillEntry)) !== null && _resolveKindHandler !== void 0 ? _resolveKindHandler : kindHandler;
                    _context13.n = 3;
                    return liveKindHandler(fieldId, question, answer, fillEntry.field, {
                      shouldAbort: shouldAbort
                    });
                  case 3:
                    if (!(resolveLiveFieldEntry && isDependentEntry(entry) && !shouldAbort())) {
                      _context13.n = 6;
                      break;
                    }
                    _context13.n = 4;
                    return sleep(DEPENDENT_FIELD_REMOUNT_SETTLE_MS);
                  case 4:
                    if (!(isDetachedFieldNode(fillEntry.field) && !shouldAbort())) {
                      _context13.n = 6;
                      break;
                    }
                    _context13.n = 5;
                    return resolveLiveFieldEntry(fieldId, fillEntry);
                  case 5:
                    remounted = _context13.v;
                    remountedHandler = remounted && !isDetachedFieldNode(remounted.field) ? resolveKindHandler(remounted) : null;
                    if (!(remountedHandler && !shouldAbort())) {
                      _context13.n = 6;
                      break;
                    }
                    _context13.n = 6;
                    return remountedHandler(fieldId, (_remounted$question = remounted.question) !== null && _remounted$question !== void 0 ? _remounted$question : question, answer, remounted.field, {
                      shouldAbort: shouldAbort
                    });
                  case 6:
                    if (!(interFieldDelayMs > 0 && !shouldAbort())) {
                      _context13.n = 7;
                      break;
                    }
                    _context13.n = 7;
                    return sleep(Math.round(interFieldDelayMs * (0.85 + Math.random() * 0.3)));
                  case 7:
                    return _context13.a(2);
                }
              }, _callee13);
            })), {
              shouldAbort: shouldAbort
            });
          case 23:
            if (!shouldAbort()) {
              _context14.n = 24;
              break;
            }
            return _context14.a(2);
          case 24:
            sendProgress(fieldId, {
              status: 'filled',
              answer: getAutofillPanelAnswer(answerHandler, answer, {
                fieldId: fieldId,
                entry: entry,
                metadata: metadata
              }),
              editableOnPanel: editableOnPanel
            });
            return _context14.a(2, answer);
          case 25:
            _context14.p = 25;
            _t11 = _context14.v;
            console.error("Error processing field ".concat(fieldId, ":"), _t11);
            sendProgress(fieldId, autofill_shared_objectSpread({
              status: 'error',
              answer: _t11.message
            }, answerHandler ? {
              editableOnPanel: isAutofillAnswerEditableOnPanel(answerHandler, null, {
                fieldId: fieldId,
                entry: entry
              })
            } : {}));
            return _context14.a(2, undefined);
        }
      }, _callee14, null, [[2, 25]]);
    }));
    function processField(_x9, _x0) {
      return _processField.apply(this, arguments);
    }
    return processField;
  }();
}
function createDependentAutofillEntryBuilder(_ref36) {
  var getOrderedFieldIds = _ref36.getOrderedFieldIds,
    buildReferenceQaPairs = _ref36.buildReferenceQaPairs;
  var fieldAnswerHistory = new Map();
  var getPreviousFieldId = function getPreviousFieldId(fieldId) {
    var previousFieldId = null;
    var _iterator5 = autofill_shared_createForOfIteratorHelper(getOrderedFieldIds()),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var currentFieldId = _step5.value;
        if (currentFieldId === fieldId) return previousFieldId;
        previousFieldId = currentFieldId;
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return null;
  };
  var buildProcessingEntry = function buildProcessingEntry(fieldId, entry) {
    var _buildReferenceQaPair;
    if (!(entry !== null && entry !== void 0 && entry.dependsOnPrevious)) return entry;
    var previousFieldId = getPreviousFieldId(fieldId);
    if (!previousFieldId) return entry;
    var previousResult = fieldAnswerHistory.get(previousFieldId);
    if (!previousResult) return entry;
    var referenceQaPairs = (_buildReferenceQaPair = buildReferenceQaPairs(previousResult.entry, previousResult.answer)) !== null && _buildReferenceQaPair !== void 0 ? _buildReferenceQaPair : [];
    return autofill_shared_objectSpread(autofill_shared_objectSpread({}, entry), {}, {
      dependencyAnswer: previousResult.answer
    }, referenceQaPairs.length > 0 ? {
      referenceQaPairs: referenceQaPairs
    } : {});
  };
  var rememberFieldAnswer = function rememberFieldAnswer(fieldId, entry, answer) {
    if (answer == null) return;
    fieldAnswerHistory.set(fieldId, {
      entry: entry,
      answer: answer
    });
  };
  var clearFieldAnswerHistory = function clearFieldAnswerHistory() {
    fieldAnswerHistory.clear();
  };
  return {
    buildProcessingEntry: buildProcessingEntry,
    rememberFieldAnswer: rememberFieldAnswer,
    clearFieldAnswerHistory: clearFieldAnswerHistory
  };
}
;// ../../packages/job-parsers/content/platforms/captcha-shared.js
function captcha_shared_typeof(o) { "@babel/helpers - typeof"; return captcha_shared_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, captcha_shared_typeof(o); }
function captcha_shared_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return captcha_shared_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (captcha_shared_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, captcha_shared_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, captcha_shared_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), captcha_shared_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", captcha_shared_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), captcha_shared_regeneratorDefine2(u), captcha_shared_regeneratorDefine2(u, o, "Generator"), captcha_shared_regeneratorDefine2(u, n, function () { return this; }), captcha_shared_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (captcha_shared_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function captcha_shared_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } captcha_shared_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { captcha_shared_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, captcha_shared_regeneratorDefine2(e, r, n, t); }
function captcha_shared_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function captcha_shared_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { captcha_shared_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { captcha_shared_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function captcha_shared_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function captcha_shared_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? captcha_shared_ownKeys(Object(t), !0).forEach(function (r) { captcha_shared_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : captcha_shared_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function captcha_shared_defineProperty(e, r, t) { return (r = captcha_shared_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function captcha_shared_toPropertyKey(t) { var i = captcha_shared_toPrimitive(t, "string"); return "symbol" == captcha_shared_typeof(i) ? i : i + ""; }
function captcha_shared_toPrimitive(t, r) { if ("object" != captcha_shared_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != captcha_shared_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function captcha_shared_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = captcha_shared_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function captcha_shared_toConsumableArray(r) { return captcha_shared_arrayWithoutHoles(r) || captcha_shared_iterableToArray(r) || captcha_shared_unsupportedIterableToArray(r) || captcha_shared_nonIterableSpread(); }
function captcha_shared_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function captcha_shared_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return captcha_shared_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? captcha_shared_arrayLikeToArray(r, a) : void 0; } }
function captcha_shared_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function captcha_shared_arrayWithoutHoles(r) { if (Array.isArray(r)) return captcha_shared_arrayLikeToArray(r); }
function captcha_shared_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Shared captcha primitives, reused across platform autofill scripts.
//
// Captcha challenges aren't platform-specific — many application forms gate submission behind a
// reCAPTCHA. This module owns the reusable pieces (widget/sitekey detection, response-field fill +
// callback invocation, and the `captcha` answer-type / field-kind handlers) so a platform opts in
// from its own `detectAutofillFields()` + handler maps with a few lines, instead of duplicating the
// logic. The actual solve happens server-side (extension-bff `/captcha/solve` → 2captcha); here we
// only detect the widget, request a token, and inject it.
//
// Scope today: reCAPTCHA v2/v3, Cloudflare Turnstile, and hCaptcha (invisible + checkbox). The
// CAPTCHA_PROVIDERS registry is the single place to add more types later — extend the registry + the
// backend task mapping. A provider may carry a custom `detect(scope)` when the websiteKey can't be read
// off a `[data-sitekey]` element or an iframe query param (Turnstile keeps it in the iframe URL path
// and, for execute-mode forms, only in the `turnstile.render(...)` call; iCIMS's invisible hCaptcha
// likewise keeps it only in the `hcaptcha.render(...)` call — both recovered via a MAIN-world bridge,
// see turnstile-bridge.js / hcaptcha-bridge.js).


var CAPTCHA_ANSWER_TYPE = 'captcha';
var CAPTCHA_FIELD_KIND = 'captcha';
var CAPTCHA_FIELD_ID = 'captcha';
var captcha_shared_NEVER_ABORT = function NEVER_ABORT() {
  return false;
};

// Supported captcha providers. `widgetSelector` locates the on-page widget carrying the websiteKey
// (`data-sitekey`); `responseSelectors` are the hidden token field(s) the form POSTs and the server
// validates. `type` is sent to the backend so it can pick the matching 2captcha task type.
//
// `iframeSelector` / `iframeSitekeyParam` are the FALLBACK when no `[data-sitekey]` element exists:
// some platforms (BambooHR) let grecaptcha render the widget itself with no on-page `.g-recaptcha`
// node anywhere — the websiteKey then survives only as the `k=` query param of the rendered challenge
// iframe's `src`. We parse it from there when the primary widget selector finds nothing.
var CAPTCHA_PROVIDERS = [{
  type: 'recaptcha_v2',
  widgetSelector: '.g-recaptcha[data-sitekey]',
  responseSelectors: ['textarea#g-recaptcha-response', 'textarea[name="g-recaptcha-response"]'],
  iframeSelector: 'iframe[src*="recaptcha/api2/anchor"], iframe[src*="recaptcha/api2/bframe"]',
  iframeSitekeyParam: 'k'
}, {
  // Cloudflare Turnstile (e.g. Workable). Workable renders it in EXPLICIT execute-mode into a
  // hidden, sitekey-less container, so there is NO on-page `[data-sitekey]` node and the websiteKey
  // lives only inside the `turnstile.render(...)` call. The MAIN-world bridge (turnstile-bridge.js)
  // captures it and mirrors the sitekey + an "interactive challenge is blocking" flag onto
  // `<html data-bidhub-turnstile-*>`, which `detectTurnstileWidget` reads. The hidden response field
  // the form POSTs is `cf-turnstile-response`; the load-bearing path, though, is the bridge calling
  // the widget's captured success callback (Turnstile exposes no `___grecaptcha_cfg`-style registry),
  // wired in the autoapply background `injectTurnstileToken`. `detect` supersedes the generic
  // widget/iframe-param probe because Turnstile keeps the key in the iframe URL PATH, not a param.
  type: 'turnstile',
  widgetSelector: '.cf-turnstile[data-sitekey]',
  responseSelectors: ['input[name="cf-turnstile-response"]', 'textarea[name="cf-turnstile-response"]', 'input#cf-turnstile-response'],
  iframeSelector: 'iframe[src*="challenges.cloudflare.com"]',
  detect: detectTurnstileWidget
}, {
  // reCAPTCHA v3 (e.g. Ashby). Score-based, invisible, no widget and no readable response textarea —
  // the app calls grecaptcha.execute(sitekey, {action}) on submit and pipes the RETURNED token into
  // its POST. So there is nothing static to probe: the MAIN-world bridge (recaptcha-v3-bridge.js)
  // captures the execute() call and mirrors { sitekey, action, enterprise, apiDomain } onto
  // `<html data-bidhub-recaptcha-*>` plus a "challenge is blocking" flag, which `detect` reads.
  // Token delivery is likewise bridge-only (injectRecaptchaV3Token resolves the pending execute()).
  type: 'recaptcha_v3',
  // No on-page widget / response field exists for v3; detection & delivery are entirely bridge-driven.
  widgetSelector: null,
  responseSelectors: [],
  detect: detectRecaptchaV3Widget
}, {
  // hCaptcha (e.g. the iCIMS login "Next" gate). iCIMS renders it INVISIBLE (executed on submit, no
  // checkbox) and the sitekey/callback live only inside the hcaptcha.render(...) call, so — like
  // Turnstile — the MAIN-world bridge (hcaptcha-bridge.js) captures them and mirrors the sitekey (+ an
  // invisible flag and a "challenge is blocking" flag) onto `<html data-bidhub-hcaptcha-*>`, which
  // `detect` reads. The visible-checkbox variant is also handled: an on-page `.h-captcha[data-sitekey]`
  // node. The response field the form POSTs is `h-captcha-response` (hCaptcha also mirrors
  // `g-recaptcha-response` for drop-in compat); the load-bearing delivery, though, is the bridge firing
  // the widget's callback / resolving its execute() promise (injectHcaptchaToken in the background).
  // Lever is the exception: it renders `h-captcha-response` as a hidden <input> (id `hcaptchaResponseInput`)
  // and reads that raw DOM value directly to gate the location-autocomplete's hcaptcha.execute() and the
  // submit click — so for Lever the ISOLATED-world write of that input IS the load-bearing delivery (no
  // bridge is loaded there). Hence the <input> variants below.
  type: 'hcaptcha',
  widgetSelector: '.h-captcha[data-sitekey]',
  responseSelectors: ['textarea[name="h-captcha-response"]', 'textarea#h-captcha-response', 'textarea[name="g-recaptcha-response"]', 'input[name="h-captcha-response"]', 'input#hcaptchaResponseInput'],
  iframeSelector: 'iframe[src*="hcaptcha.com"]',
  detect: detectHcaptchaWidget
}];

// Turnstile keeps the websiteKey as a path segment of the challenge iframe URL
// (…/turnstile/if/…/<sitekey>/…), e.g. `0x4AAAAAAA…`. Match that segment.
var TURNSTILE_SITEKEY_PATH_RE = /\/(0x[0-9A-Za-z_=-]{6,})\//;

// Has the element actually been laid out? Turnstile's invisible pre-clearance iframe is 0-sized /
// hidden; only the INTERACTIVE challenge iframe gets real layout — and only that one needs solving.
function isLaidOutElement(element) {
  if (!(element !== null && element !== void 0 && element.isConnected) || typeof element.getBoundingClientRect !== 'function') return false;
  var rect = element.getBoundingClientRect();
  return rect.width > 10 && rect.height > 10;
}

// A reCAPTCHA picture PUZZLE is on screen: the challenge frame (`bframe` — api2 or Enterprise, the image grid
// an invisible / score key escalates to) laid out and visible. reCAPTCHA keeps that frame mounted between
// challenges, hidden (`visibility: hidden`, moved to top -10000 px), so being in the DOM proves nothing. A
// puzzle is a person's job (captcha_blocked): a platform's "the site is still answering the press" signal must
// not hold the submit wait while one shows (Ashby's universal reCAPTCHA key opens it inside its pending Submit).
// It is also the only moment an invisible v2 widget's challenge may be surfaced as a `captcha` question
// (CareerPlug, Jobvite): solving the parked frame fires the widget's callback — the form's own submit — while
// the person is still on an earlier step (Jobvite posted an unfinished application from step 1 that way,
// 2026-10-24).
var RECAPTCHA_CHALLENGE_FRAME_SELECTOR = 'iframe[src*="/recaptcha/"][src*="/bframe"]';
function isCaptchaPuzzleVisible() {
  var _root$querySelectorAl, _root$querySelectorAl2;
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var frames = Array.from((_root$querySelectorAl = root === null || root === void 0 || (_root$querySelectorAl2 = root.querySelectorAll) === null || _root$querySelectorAl2 === void 0 ? void 0 : _root$querySelectorAl2.call(root, RECAPTCHA_CHALLENGE_FRAME_SELECTOR)) !== null && _root$querySelectorAl !== void 0 ? _root$querySelectorAl : []);
  return frames.some(function (frame) {
    if (!isLaidOutElement(frame)) return false;
    if (window.getComputedStyle(frame).visibility === 'hidden') return false;
    return frame.getBoundingClientRect().bottom > 0;
  });
}

// Turnstile detector (Workable + generic). Primary signal is the MAIN-world bridge, which mirrors the
// captured sitekey (+ optional action/cData and a challenge flag) onto `<html>`. We ONLY surface the
// captcha when a challenge is actually blocking submission — the bridge flag, or a laid-out Cloudflare
// challenge iframe — so an invisibly auto-passing Turnstile never spends a (paid) solve. Returns
// { sitekey, widget, action, cdata } or null.
function detectTurnstileWidget(scope) {
  var _root$dataset, _dataset$bidhubTurnst, _scope$querySelectorA, _scope$querySelectorA2, _dataset$bidhubTurnst2, _dataset$bidhubTurnst3;
  var root = document.documentElement;
  var dataset = (_root$dataset = root === null || root === void 0 ? void 0 : root.dataset) !== null && _root$dataset !== void 0 ? _root$dataset : {};
  var bridgeSitekey = String((_dataset$bidhubTurnst = dataset.bidhubTurnstileSitekey) !== null && _dataset$bidhubTurnst !== void 0 ? _dataset$bidhubTurnst : '').trim();
  var bridgeChallenge = dataset.bidhubTurnstileChallenge === '1';

  // A laid-out Cloudflare challenge iframe means an interactive challenge is on screen. This is the
  // fallback detection signal when the bridge is absent (it is still needed for token delivery).
  var iframeSitekey = null;
  var iframeWidget = null;
  var iframes = [].concat(captcha_shared_toConsumableArray(Array.from((_scope$querySelectorA = scope === null || scope === void 0 || (_scope$querySelectorA2 = scope.querySelectorAll) === null || _scope$querySelectorA2 === void 0 ? void 0 : _scope$querySelectorA2.call(scope, 'iframe[src*="challenges.cloudflare.com"]')) !== null && _scope$querySelectorA !== void 0 ? _scope$querySelectorA : [])), captcha_shared_toConsumableArray(Array.from(document.querySelectorAll('iframe[src*="challenges.cloudflare.com"]'))));
  var _iterator = captcha_shared_createForOfIteratorHelper(iframes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _iframe$getAttribute;
      var iframe = _step.value;
      var match = String((_iframe$getAttribute = iframe.getAttribute('src')) !== null && _iframe$getAttribute !== void 0 ? _iframe$getAttribute : '').match(TURNSTILE_SITEKEY_PATH_RE);
      if (match && isLaidOutElement(iframe)) {
        iframeSitekey = match[1];
        iframeWidget = iframe;
        break;
      }
    }

    // Cost gate: a solvable challenge is only "present" when one is actually blocking the form.
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (!bridgeChallenge && !iframeSitekey) return null;
  var sitekey = bridgeSitekey || iframeSitekey;
  if (!sitekey) return null;
  return {
    sitekey: sitekey,
    widget: iframeWidget || root,
    action: String((_dataset$bidhubTurnst2 = dataset.bidhubTurnstileAction) !== null && _dataset$bidhubTurnst2 !== void 0 ? _dataset$bidhubTurnst2 : '').trim() || undefined,
    cdata: String((_dataset$bidhubTurnst3 = dataset.bidhubTurnstileCdata) !== null && _dataset$bidhubTurnst3 !== void 0 ? _dataset$bidhubTurnst3 : '').trim() || undefined
  };
}

// reCAPTCHA v3 detector (Ashby + generic). v3 is invisible and score-based: there is no widget and no
// readable response field, so the ONLY signal is the MAIN-world bridge (recaptcha-v3-bridge.js), which
// mirrors the captured sitekey/action/enterprise/apiDomain onto `<html>` and sets a challenge flag the
// instant the app calls grecaptcha.execute() on submit. We surface the captcha only while that flag is
// set, so a page that never submits never spends a (paid) solve. Returns
// { sitekey, widget, action, enterprise, apiDomain } or null.
function detectRecaptchaV3Widget() {
  var _rootEl$dataset, _dataset$bidhubRecapt, _dataset$bidhubRecapt2, _dataset$bidhubRecapt3;
  var rootEl = document.documentElement;
  var dataset = (_rootEl$dataset = rootEl === null || rootEl === void 0 ? void 0 : rootEl.dataset) !== null && _rootEl$dataset !== void 0 ? _rootEl$dataset : {};
  if (dataset.bidhubRecaptchaChallenge !== '1') return null;
  var sitekey = String((_dataset$bidhubRecapt = dataset.bidhubRecaptchaSitekey) !== null && _dataset$bidhubRecapt !== void 0 ? _dataset$bidhubRecapt : '').trim();
  if (!sitekey) return null;
  return {
    sitekey: sitekey,
    widget: rootEl,
    action: String((_dataset$bidhubRecapt2 = dataset.bidhubRecaptchaAction) !== null && _dataset$bidhubRecapt2 !== void 0 ? _dataset$bidhubRecapt2 : '').trim() || undefined,
    enterprise: dataset.bidhubRecaptchaEnterprise === '1',
    apiDomain: String((_dataset$bidhubRecapt3 = dataset.bidhubRecaptchaApidomain) !== null && _dataset$bidhubRecapt3 !== void 0 ? _dataset$bidhubRecapt3 : '').trim() || undefined
  };
}

// hCaptcha detector (iCIMS + Lever + generic). Mirrors detectTurnstileWidget: the primary signal is the
// MAIN-world bridge (hcaptcha-bridge.js), which mirrors the captured sitekey (+ invisible flag +
// challenge flag) onto `<html>`. We ONLY surface the captcha when a challenge is actually blocking
// submission — the bridge flag, a laid-out hcaptcha.com iframe (checkbox or challenge modal), or an
// on-page `.h-captcha[data-sitekey]` node — so an invisible widget that never executes (or auto-passes)
// never spends a (paid) solve. `eager` lifts that gate for an on-page `.h-captcha[data-sitekey]` node
// whose iframe is NOT laid out: Lever's Enterprise sitekey renders no checkbox, and its page runs
// `hcaptcha.execute()` the moment the location field is focused unless a token is already in the
// response input — so the platform asks for the token up front (the passive pass that execute() relies
// on does not happen in the fleet browsers; the modal wedged every runner-lane Lever row).
// `enterprise` = the page loads the Enterprise script (`secure-api.js`, or `api.js` with an
// `endpoint=` override) — the solver must mint from the submitting IP/UA for those sitekeys.
// Returns { sitekey, widget, invisible, enterprise } or null.
function isHcaptchaEnterprisePage() {
  return Boolean(document.querySelector('script[src*="hcaptcha.com/1/secure-api.js"], script[src*="hcaptcha.com/1/api.js"][src*="endpoint="]'));
}
function detectHcaptchaWidget(scope) {
  var _root$dataset2, _dataset$bidhubHcaptc, _scope$querySelector, _widgetEl$getAttribut, _scope$querySelectorA3, _scope$querySelectorA4;
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$eager = _ref.eager,
    eager = _ref$eager === void 0 ? false : _ref$eager;
  var root = document.documentElement;
  var dataset = (_root$dataset2 = root === null || root === void 0 ? void 0 : root.dataset) !== null && _root$dataset2 !== void 0 ? _root$dataset2 : {};
  var bridgeSitekey = String((_dataset$bidhubHcaptc = dataset.bidhubHcaptchaSitekey) !== null && _dataset$bidhubHcaptc !== void 0 ? _dataset$bidhubHcaptc : '').trim();
  var bridgeChallenge = dataset.bidhubHcaptchaChallenge === '1';
  var bridgeInvisible = dataset.bidhubHcaptchaInvisible === '1';

  // Visible checkbox variant: an on-page `.h-captcha[data-sitekey]` node carries the websiteKey.
  var widgetEl = (scope === null || scope === void 0 || (_scope$querySelector = scope.querySelector) === null || _scope$querySelector === void 0 ? void 0 : _scope$querySelector.call(scope, '.h-captcha[data-sitekey]')) || document.querySelector('.h-captcha[data-sitekey]');
  var widgetSitekey = widgetEl === null || widgetEl === void 0 || (_widgetEl$getAttribut = widgetEl.getAttribute('data-sitekey')) === null || _widgetEl$getAttribut === void 0 ? void 0 : _widgetEl$getAttribut.trim();

  // A laid-out hCaptcha iframe (checkbox or the interactive challenge modal) means a challenge is on
  // screen. This is the fallback detection signal when the bridge is absent (still needed for delivery).
  var iframeChallenge = false;
  var iframes = [].concat(captcha_shared_toConsumableArray(Array.from((_scope$querySelectorA3 = scope === null || scope === void 0 || (_scope$querySelectorA4 = scope.querySelectorAll) === null || _scope$querySelectorA4 === void 0 ? void 0 : _scope$querySelectorA4.call(scope, 'iframe[src*="hcaptcha.com"]')) !== null && _scope$querySelectorA3 !== void 0 ? _scope$querySelectorA3 : [])), captcha_shared_toConsumableArray(Array.from(document.querySelectorAll('iframe[src*="hcaptcha.com"]'))));
  var _iterator2 = captcha_shared_createForOfIteratorHelper(iframes),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var iframe = _step2.value;
      if (isLaidOutElement(iframe)) {
        iframeChallenge = true;
        break;
      }
    }

    // Cost gate: a solvable challenge is only "present" when one is actually blocking the form — unless
    // the platform asked for an eager solve of its (never laid out) on-page widget.
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  if (!bridgeChallenge && !iframeChallenge && !(eager && widgetEl && widgetSitekey)) return null;
  var sitekey = bridgeSitekey || widgetSitekey;
  if (!sitekey) return null;
  return {
    sitekey: sitekey,
    widget: widgetEl || root,
    // Invisible unless an on-page checkbox widget is present; the bridge flag is authoritative.
    invisible: bridgeInvisible || !widgetEl,
    enterprise: isHcaptchaEnterprisePage()
  };
}

// The picture-puzzle frames a person must solve: hCaptcha's challenge (never its checkbox widget, nor
// the aria-hidden widget frame an invisible hCaptcha keeps — Gem's) and reCAPTCHA v2's challenge bframe
// (never the anchor checkbox / invisible badge).
var CAPTCHA_PUZZLE_FRAME_SELECTOR = ['iframe[src*="hcaptcha.com"]:not([title*="checkbox" i]):not([aria-hidden="true"])', 'iframe[src*="/recaptcha/api2/bframe"]:not([aria-hidden="true"])', 'iframe[src*="/recaptcha/enterprise/bframe"]:not([aria-hidden="true"])'].join(', ');

// Both providers keep a closed challenge in the DOM at full size: hidden, or parked far above the page
// (top -10000px). Opacity is no signal — a shown challenge fades in from 0.
function isShownPuzzleFrame(frame) {
  if (!isLaidOutElement(frame)) return false;
  var rect = frame.getBoundingClientRect();
  if (rect.bottom + (window.scrollY || 0) <= 0 || rect.right <= 0) return false;
  for (var node = frame; node && node.nodeType === 1; node = node.parentElement) {
    var style = window.getComputedStyle(node);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
  }
  return true;
}

// Is a captcha picture puzzle on screen right now? A platform's detectSubmitButton uses it to tell a
// Submit the site is still sending (busy — the driver's submit wait holds) from one stopped behind a
// puzzle only a person can solve (not busy — the row parks for a person at once). Passive.
function isCaptchaPuzzleOnScreen() {
  var _root$querySelectorAl3, _root$querySelectorAl4;
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  return Array.from((_root$querySelectorAl3 = (_root$querySelectorAl4 = root.querySelectorAll) === null || _root$querySelectorAl4 === void 0 ? void 0 : _root$querySelectorAl4.call(root, CAPTCHA_PUZZLE_FRAME_SELECTOR)) !== null && _root$querySelectorAl3 !== void 0 ? _root$querySelectorAl3 : []).some(isShownPuzzleFrame);
}

// Read a websiteKey from a rendered reCAPTCHA challenge iframe's `src` (`k=` param) when no
// `[data-sitekey]` element exists. Returns { sitekey, widget } (widget = the iframe) or null.
function detectCaptchaFromIframe(provider, scope) {
  var _scope$querySelectorA5, _scope$querySelectorA6;
  if (!provider.iframeSelector) return null;
  var iframes = [].concat(captcha_shared_toConsumableArray(Array.from((_scope$querySelectorA5 = (_scope$querySelectorA6 = scope.querySelectorAll) === null || _scope$querySelectorA6 === void 0 ? void 0 : _scope$querySelectorA6.call(scope, provider.iframeSelector)) !== null && _scope$querySelectorA5 !== void 0 ? _scope$querySelectorA5 : [])), captcha_shared_toConsumableArray(Array.from(document.querySelectorAll(provider.iframeSelector))));
  var _iterator3 = captcha_shared_createForOfIteratorHelper(iframes),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var iframe = _step3.value;
      var src = iframe.getAttribute('src');
      if (!src) continue;
      try {
        var _url$searchParams$get;
        var url = new URL(src, window.location.href);
        var sitekey = (_url$searchParams$get = url.searchParams.get(provider.iframeSitekeyParam)) === null || _url$searchParams$get === void 0 ? void 0 : _url$searchParams$get.trim();
        if (sitekey) return {
          sitekey: sitekey,
          widget: iframe
        };
      } catch (_error) {
        // Malformed src — keep scanning the remaining iframes.
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return null;
}

// Detect the first present, solvable captcha widget. Returns { type, sitekey, widget } or null.
// `root` scopes the search (a platform can pass the captcha wrapper); falls back to document.
// `options` reach the provider detectors (`eager`: solve an on-page widget before it blocks, see
// detectHcaptchaWidget).
function detectCaptchaWidget() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var scope = root || document;
  var _iterator4 = captcha_shared_createForOfIteratorHelper(CAPTCHA_PROVIDERS),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _scope$querySelector2, _widget$getAttribute;
      var provider = _step4.value;
      // A provider can carry a custom detector when the websiteKey isn't on a `[data-sitekey]` element
      // or an iframe query param (Turnstile). It also owns the "is this challenge actually blocking?"
      // gate, so it may legitimately return null even when its widget markup is present.
      if (typeof provider.detect === 'function') {
        var found = provider.detect(scope, options);
        if (found !== null && found !== void 0 && found.sitekey) {
          return {
            type: provider.type,
            sitekey: found.sitekey,
            widget: found.widget,
            action: found.action,
            cdata: found.cdata,
            enterprise: found.enterprise,
            apiDomain: found.apiDomain,
            invisible: found.invisible
          };
        }
        continue;
      }
      var widget = ((_scope$querySelector2 = scope.querySelector) === null || _scope$querySelector2 === void 0 ? void 0 : _scope$querySelector2.call(scope, provider.widgetSelector)) || document.querySelector(provider.widgetSelector);
      var sitekey = widget === null || widget === void 0 || (_widget$getAttribute = widget.getAttribute('data-sitekey')) === null || _widget$getAttribute === void 0 ? void 0 : _widget$getAttribute.trim();
      if (widget && sitekey) return {
        type: provider.type,
        sitekey: sitekey,
        widget: widget
      };

      // Fallback: no `[data-sitekey]` element — recover the key from the challenge iframe's `k=` param.
      var fromIframe = detectCaptchaFromIframe(provider, scope);
      if (fromIframe) return {
        type: provider.type,
        sitekey: fromIframe.sitekey,
        widget: fromIframe.widget
      };
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return null;
}

// Build a detectFields-shaped entry for a detected captcha, or null. Returns null outside the
// auto-apply build (the manual extension must never solve/show captchas) — the single home for that
// gate, so platform call-sites stay clean. `process.env.IS_AUTOAPPLY` is a build-time literal
// (webpack DefinePlugin), so this branch is dead-stripped from the manual bundle.
function buildCaptchaFieldEntry() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (true) return null;
  // removed by dead control flow
 var found; 
  // removed by dead control flow

  // removed by dead control flow

}

// Write a solved captcha token into the page DOM from the content (ISOLATED) world. Type-agnostic:
// only the active captcha's response field exists on the page, so writing every known response
// selector is safe. This sets the hidden response textarea(s) a form would POST natively.
//
// NOTE: this alone does NOT get an explicit-render / React form (e.g. BambooHR) past submit — that
// form reads the token from grecaptcha's own state (the render() callback / grecaptcha.getResponse),
// which lives in the page MAIN world and is untouched by a textarea `.value` write from this isolated
// world. The load-bearing bridge is a privileged MAIN-world injection in the autoapply background
// (injectRecaptchaToken in autofill-handlers.js, run via chrome.scripting.executeScript({ world:
// 'MAIN' }) — which bypasses page CSP, unlike a page <script>); this textarea write stays only as a
// cheap fallback for native-POST forms.
function fillCaptchaField(token) {
  if (typeof token !== 'string' || !token) return;
  var responseSelectors = CAPTCHA_PROVIDERS.flatMap(function (provider) {
    return provider.responseSelectors;
  });
  responseSelectors.forEach(function (selector) {
    Array.from(document.querySelectorAll(selector)).forEach(function (field) {
      return fillTextInput(field, token);
    });
  });
}

// Answer-type handler: requests a token from the backend solver. Reads the websiteKey + provider type
// stashed on metadata.constraints at detection. Resolved live at apply-time — never pre-resolved or
// banked (see LIVE_ONLY_ANSWER_TYPES). Returns the token string, or { type: 'skip' } when the sitekey
// is missing or solving is unavailable.
function createCaptchaAnswerTypeHandler() {
  return {
    isMetadataReady: function isMetadataReady() {
      return true;
    },
    fetchMissingMetadata: function () {
      var _fetchMissingMetadata = captcha_shared_asyncToGenerator(/*#__PURE__*/captcha_shared_regenerator().m(function _callee(metadata) {
        return captcha_shared_regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, metadata);
          }
        }, _callee);
      }));
      function fetchMissingMetadata(_x) {
        return _fetchMissingMetadata.apply(this, arguments);
      }
      return fetchMissingMetadata;
    }(),
    generateAnswer: function () {
      var _generateAnswer = captcha_shared_asyncToGenerator(/*#__PURE__*/captcha_shared_regenerator().m(function _callee2(_question, metadata) {
        var _metadata$constraints, _metadata$constraints2, _metadata$constraints3, _metadata$constraints4, _metadata$constraints5, _metadata$constraints6, _metadata$constraints7, _navigator;
        var sitekey, type, action, cdata, enterprise, apiDomain, invisible, userAgent, token, _t;
        return captcha_shared_regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              sitekey = metadata === null || metadata === void 0 || (_metadata$constraints = metadata.constraints) === null || _metadata$constraints === void 0 ? void 0 : _metadata$constraints.captchaSitekey;
              type = (metadata === null || metadata === void 0 || (_metadata$constraints2 = metadata.constraints) === null || _metadata$constraints2 === void 0 ? void 0 : _metadata$constraints2.captchaType) || 'recaptcha_v2';
              action = metadata === null || metadata === void 0 || (_metadata$constraints3 = metadata.constraints) === null || _metadata$constraints3 === void 0 ? void 0 : _metadata$constraints3.captchaAction;
              cdata = metadata === null || metadata === void 0 || (_metadata$constraints4 = metadata.constraints) === null || _metadata$constraints4 === void 0 ? void 0 : _metadata$constraints4.captchaCdata;
              enterprise = metadata === null || metadata === void 0 || (_metadata$constraints5 = metadata.constraints) === null || _metadata$constraints5 === void 0 ? void 0 : _metadata$constraints5.captchaEnterprise;
              apiDomain = metadata === null || metadata === void 0 || (_metadata$constraints6 = metadata.constraints) === null || _metadata$constraints6 === void 0 ? void 0 : _metadata$constraints6.captchaApiDomain;
              invisible = metadata === null || metadata === void 0 || (_metadata$constraints7 = metadata.constraints) === null || _metadata$constraints7 === void 0 ? void 0 : _metadata$constraints7.captchaInvisible;
              if (sitekey) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, {
                type: 'skip'
              });
            case 1:
              // The page's own UA: Enterprise hCaptcha tokens are checked against the UA that submits them, so
              // the solver emulates this browser rather than its worker's.
              userAgent = typeof navigator !== 'undefined' && (_navigator = navigator) !== null && _navigator !== void 0 && _navigator.userAgent ? navigator.userAgent : null;
              _context2.p = 2;
              _context2.n = 3;
              return getCaptchaTokenForAutofill(captcha_shared_objectSpread(captcha_shared_objectSpread(captcha_shared_objectSpread(captcha_shared_objectSpread(captcha_shared_objectSpread(captcha_shared_objectSpread({
                sitekey: sitekey,
                pageurl: window.location.href,
                type: type
              }, action ? {
                action: action
              } : {}), cdata ? {
                cdata: cdata
              } : {}), enterprise ? {
                enterprise: enterprise
              } : {}), apiDomain ? {
                apiDomain: apiDomain
              } : {}), invisible ? {
                invisible: invisible
              } : {}), userAgent ? {
                userAgent: userAgent
              } : {}));
            case 3:
              token = _context2.v;
              return _context2.a(2, token || {
                type: 'skip'
              });
            case 4:
              _context2.p = 4;
              _t = _context2.v;
              return _context2.a(2, {
                type: 'skip'
              });
          }
        }, _callee2, null, [[2, 4]]);
      }));
      function generateAnswer(_x2, _x3) {
        return _generateAnswer.apply(this, arguments);
      }
      return generateAnswer;
    }(),
    isEditableOnPanel: function isEditableOnPanel() {
      return false;
    }
  };
}

// Field-kind handler: writes the token into the page's response textarea(s). Best-effort and
// guarded — the load-bearing path is the MAIN-world bridge in the background (see fillCaptchaField),
// so a failure here must never wedge the autofill run.
function createCaptchaFieldKindHandler() {
  return /*#__PURE__*/function () {
    var _ref2 = captcha_shared_asyncToGenerator(/*#__PURE__*/captcha_shared_regenerator().m(function _callee3(_fieldId, _question, answer, _field) {
      var _ref3,
        _ref3$shouldAbort,
        shouldAbort,
        _args3 = arguments;
      return captcha_shared_regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _ref3 = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : {}, _ref3$shouldAbort = _ref3.shouldAbort, shouldAbort = _ref3$shouldAbort === void 0 ? captcha_shared_NEVER_ABORT : _ref3$shouldAbort;
            if (!shouldAbort()) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            try {
              fillCaptchaField(answer);
            } catch (_error) {
              // Swallow — the background MAIN-world injection is the primary mechanism.
            }
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x4, _x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
}
;// ../../packages/job-parsers/content/platforms/ripplehire/autofill.js
/* unused harmony import specifier */ var autofill_navigateSameTab;
function autofill_regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(autofill_typeof(e) + " is not iterable"); }
function autofill_typeof(o) { "@babel/helpers - typeof"; return autofill_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, autofill_typeof(o); }
function _toArray(r) { return autofill_arrayWithHoles(r) || autofill_iterableToArray(r) || autofill_unsupportedIterableToArray(r) || autofill_nonIterableRest(); }
function autofill_toConsumableArray(r) { return autofill_arrayWithoutHoles(r) || autofill_iterableToArray(r) || autofill_unsupportedIterableToArray(r) || autofill_nonIterableSpread(); }
function autofill_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function autofill_arrayWithoutHoles(r) { if (Array.isArray(r)) return autofill_arrayLikeToArray(r); }
function autofill_slicedToArray(r, e) { return autofill_arrayWithHoles(r) || autofill_iterableToArrayLimit(r, e) || autofill_unsupportedIterableToArray(r, e) || autofill_nonIterableRest(); }
function autofill_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function autofill_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function autofill_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = autofill_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function autofill_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return autofill_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? autofill_arrayLikeToArray(r, a) : void 0; } }
function autofill_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function autofill_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return autofill_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (autofill_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, autofill_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, autofill_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), autofill_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", autofill_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), autofill_regeneratorDefine2(u), autofill_regeneratorDefine2(u, o, "Generator"), autofill_regeneratorDefine2(u, n, function () { return this; }), autofill_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (autofill_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function autofill_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } autofill_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { autofill_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, autofill_regeneratorDefine2(e, r, n, t); }
function autofill_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function autofill_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? autofill_ownKeys(Object(t), !0).forEach(function (r) { autofill_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : autofill_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function autofill_defineProperty(e, r, t) { return (r = autofill_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function autofill_toPropertyKey(t) { var i = autofill_toPrimitive(t, "string"); return "symbol" == autofill_typeof(i) ? i : i + ""; }
function autofill_toPrimitive(t, r) { if ("object" != autofill_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != autofill_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function autofill_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function autofill_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






// RippleHire ATS (<tenant>.ripplehire.com/candidate/?token=<T>#detail/job/<seq>). A Backbone hash
// SPA over a plain jQuery / Bootstrap 3 form, live-inspected on the UST tenant 2026-09-30:
//   - #detail/job/<seq> renders the posting with `button#btn-apply` ("Apply Now", `#mob-btn-apply`
//     on phones); the click routes to #apply/job/<seq> IN THE SAME DOCUMENT, where a privacy gate
//     (`button#accept` "I Agree" / `#reject`) precedes `form#savecandidate`. Some tenants show a
//     duplicate-check pre-form first — the SAME `#savecandidate` / `#btn-submit-app` ids, but the
//     button reads "Continue" — so the final submit is recognised by its label, never by id alone.
//   - every question is a `div.form-group[.required][.show|.hide]` holding a `label.control-label`
//     ("Label :" — the colon is markup), the control(s) inside `.input_field` and, sometimes, a
//     `label.post_text` hint; controls carry `name` = `id` = the field name; the section is the
//     preceding `<legend>`. Hidden `.hide` groups are revealed by a `.decider` radio (Employee ID
//     after "worked here before" = Yes) — they are skipped until shown and picked up by the runtime's
//     mutation re-detect.
//   - widgets: intl-tel-input (`.intl-tel-input .selected-flag` + `ul.country-list li.country
//     [data-dial-code][data-country-code]`; the input takes NATIONAL digits only, `^\d{8,15}$`, the
//     dial code is read from the selected flag at submit), Google Places on the City input
//     (`input.pac-target-input`; a blur with no committed place CLEARS the value, and only the
//     keyboard path — ArrowDown + Enter — commits a synthetic pick), uniform.js wrappers on radios /
//     checkboxes (`div.radio > span > input`, `div.checker > span > input`; the native input still
//     takes the click), Jasny fileinput on `#resume` (`.fileinput-exists` + `.fileinput-filename`
//     once a file is picked; no upload XHR, the file posts with the form, 3 MB limit) or, on CV-parser
//     tenants, the `#openResume` upload popup (see "Résumé (CV-parser popup)" below),
//     bootstrap-datepicker (`input.datepicker`, format dd-M-yyyy), bootstrap-multiselect
//     (`.multi-select select`, options lazy-loaded), jquery.tokeninput skills, a reCAPTCHA v2
//     checkbox (`#g-recaptcha`, rendered by grecaptcha.render — the shared solver reads the sitekey
//     from the widget iframe) and human-only widgets (live photo, DPDP consent card) that are
//     surfaced as skipped instead of silently missing.
//   - `button#btn-submit-app[type=submit]` "Submit Application" reads "Please wait…" while the
//     multipart POST runs (2 s debounce — one press only); success routes to #apply-success, a
//     duplicate applicant to #duplicate-check (page states own both).
// No bot scoring was seen on this platform, so fills are the plain synthetic DOM path.

var autofill_NEVER_ABORT = function NEVER_ABORT() {
  return false;
};
var RIPPLEHIRE_PLATFORM_KEY = 'ripplehire';
var FORM_SELECTOR = 'form#savecandidate';
var SUBMIT_SELECTOR = '#btn-submit-app';
var PRIVACY_ACCEPT_SELECTOR = 'button#accept';
var APPLY_BUTTON_SELECTOR = '#btn-apply, #mob-btn-apply';
var FORM_GROUP_SELECTOR = '.form-group';
var CONTROL_LABEL_SELECTOR = 'label.control-label';
var POST_TEXT_SELECTOR = 'label.post_text';
var INFO_BLOCK_SELECTOR = '.info-block';
var PHONE_INPUT_SELECTOR = '.intl-tel-input input:not([type="hidden"]), input.phone';
var PLACES_INPUT_SELECTOR = 'input.pac-target-input, input#currentLocation';
var PAC_ITEM_SELECTOR = '.pac-container .pac-item';
var DATE_INPUT_SELECTOR = 'input.datepicker';
var FILEINPUT_WIDGET_SELECTOR = '.fileinput[data-provides="fileinput"]';
var MULTISELECT_WRAPPER_SELECTOR = '.multi-select';
var TOKEN_INPUT_WRAPPER_SELECTOR = '[id$="-autocomplete"]';
var TEXT_INPUT_SELECTOR = 'input.form-control:not([type="hidden"]):not([type="file"]):not([type="radio"]):not([type="checkbox"]):not([type="submit"]):not([type="button"])';
// Widgets no automation can drive: live-photo capture (face-api), the DPDP consent iframe card, the
// skills pickers and the photo cropper.
var UNSUPPORTED_SELECTOR = '#openLivePhoto, #dpdp-consent-card, #btn-dpdp-review, .candidatePhotoField, #primaryskill, #secondaryskill_btn';
// The CV-parser résumé popup — by id only: the live-photo button carries the `openResume` class too.
var RESUME_POPUP_FIELD_ID = 'openResume';
var RESUME_POPUP_UPLOAD_SELECTOR = '#openResume';
var RESUME_POPUP_CHANGE_SELECTOR = '#changeResumeFile';
var RESUME_POPUP_DIALOG_SELECTOR = '.resumeUpload';
var RESUME_POPUP_INPUT_SELECTOR = '.drop-zone input[type="file"]';
var RESUME_POPUP_SUBMIT_SELECTOR = '#resumeSumbmit'; // sic — the page's own id
var RESUME_POPUP_BACK_SELECTOR = '#backBtn, [data-dismiss="modal"]';
var RESUME_PARSED_LINK_SELECTOR = '#parseResumeFileName';
var RESUME_POPUP_OPEN_WAIT_MS = 5000;
var RESUME_POPUP_ACCEPT_WAIT_MS = 5000; // the drop zone checks a picked file after 1 s
var RESUME_PARSE_WAIT_MS = 60000; // parseResume answers in 2–12 s
var RESUME_PARSE_SETTLE_MS = 600; // the parser's form reset re-inits intl-tel-input 200 ms later
var RESUME_POPUP_ATTEMPTS = 2;
var MAX_RESUME_POPUP_BYTES = 10 * 1024 * 1024;
// `#thankyou/id/<emplRefrlSeq>` is the success route of the six-digit-id RippleHire instance (mphasis,
// tredence, cimpress, ltm, ltimindtree, myridius — 2026-10-16); usource's instance routes to
// `#apply-success`. Both are applied pages (page-states + applied-patterns carry the same two).
var POST_SUBMIT_ROUTE = /^#(apply-success|duplicate-check|success-check|thankyou(?:\/id\/\d+)?)(?:[/?#]|$)/i;
// bootstrap-multiselect's filter box: the SPA's own template renders `input.singleselect-search`, the
// plugin's stock filter is `.multiselect-filter input`. A keyup there re-queries the server
// (`search-custom-items?q=<text>`, 300 ms debounce) and REBUILDS the option list from the matches.
var MULTISELECT_SEARCH_INPUT_SELECTOR = 'input.singleselect-search, .multiselect-filter input, input.multiselect-search';
// `search-custom-items` answers at most this many rows per query (its `limit`). A dropdown whose first
// page is that long is a WINDOW on a longer catalogue (ltm 2026-10-16: countries A→Honduras, world
// states A→Arkansas), so the wanted value — United States, Texas, Ontario — must be searched for,
// never picked from the window (which left State / Country empty on every ltm / ltimindtree park).
var MULTISELECT_SEARCH_PAGE_SIZE = 100;
var MULTISELECT_SEARCH_SETTLE_MS = 400; // the page's keyup debounce (300 ms) plus a tick
var MULTISELECT_SEARCH_WAIT_MS = 3000;
// RippleHire's name rule (`matchnonenglish`, candidates_app.js): letters of any script plus . ’ ' ` —
// NO space, hyphen or digit. "J. G." / "Mary Ann" / "Jean-Luc" fail "Please enter valid … name"
// client-side and the duplicate pre-form's Continue never fires (mphasis, 2026-10-15).
var NAME_FIELD_IDS = new Set(['firstName', 'middleName', 'lastName']);
var NAME_DISALLOWED_CHARS = /(?:[\0-&\(-\x2D\/-@\[-_\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06F0-\u06F9\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07C9\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u0890-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09EF\u09F2-\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B70\u0B72-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5E\u0C5F\u0C62-\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDB\u0CDF\u0CE2-\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57-\u0D5E\u0D62-\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0EDB\u0EE0-\u0EFF\u0F01-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u1040-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16F0\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u194F\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19FF\u1A17-\u1A1F\u1A55-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BFF\u1C24-\u1C4C\u1C50-\u1C59\u1C7E\u1C7F\u1C8B-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u2018\u201A-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u2182\u2185-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3007-\u3030\u3036-\u303A\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA620-\uA629\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6E6-\uA716\uA720\uA721\uA789\uA78A\uA7DD-\uA7F0\uA802\uA806\uA80B\uA823-\uA83F\uA874-\uA881\uA8B4-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF-\uA909\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9D0-\uA9DF\uA9E5\uA9F0-\uA9F9\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEFF\uDF20-\uDF2C\uDF41\uDF4A-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0-\uDFFF]|\uD801[\uDC9E-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD3F\uDD5A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE5-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD24-\uDD49\uDD66-\uDD6E\uDD86-\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEC1\uDEC8-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF46-\uDF6F\uDF82-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDD02\uDD27-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDD9\uDDDB\uDDDD-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD4-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEFF\uDF1B-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCE0-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFBF\uDFE1-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDDAF\uDDDC-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC00-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD834\uD836\uD83C-\uD83F\uD87C\uD87D\uD87F\uD88E-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F-\uDE6F\uDEBF-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD6D-\uDE3F\uDE80-\uDE9F\uDEB9\uDEBA\uDED4-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFF1\uDFF4-\uDFFF]|\uD823[\uDCD6-\uDCFE\uDD1F-\uDD7F\uDDF3-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDDCF\uDDEE\uDDEF\uDDF1-\uDEBF\uDEDF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5-\uDEFD\uDF00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5-\uDCFF\uDD44-\uDD4A\uDD4C-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEAE\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD88D[\uDC7A-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var US_STATE_NAME_BY_CODE = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  DC: 'District of Columbia',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
  PR: 'Puerto Rico'
};
var CA_PROVINCE_NAME_BY_CODE = {
  AB: 'Alberta',
  BC: 'British Columbia',
  MB: 'Manitoba',
  NB: 'New Brunswick',
  NL: 'Newfoundland and Labrador',
  NS: 'Nova Scotia',
  NT: 'Northwest Territories',
  NU: 'Nunavut',
  ON: 'Ontario',
  PE: 'Prince Edward Island',
  QC: 'Quebec',
  SK: 'Saskatchewan',
  YT: 'Yukon'
};
// Search terms for the country spellings a profile carries that the catalogue does not.
var COUNTRY_SEARCH_ALIASES = new Map([['usa', 'United States'], ['us', 'United States'], ['u.s', 'United States'], ['u.s.a', 'United States'], ['united states of america', 'United States'], ['america', 'United States'], ['uk', 'United Kingdom'], ['great britain', 'United Kingdom'], ['britain', 'United Kingdom'], ['england', 'United Kingdom'], ['uae', 'United Arab Emirates'], ['south korea', 'Korea'], ['republic of korea', 'Korea'], ['the netherlands', 'Netherlands'], ['holland', 'Netherlands'], ['czech republic', 'Czech']]);
var CONTINUE_LABEL = /^continue$/i;
var PLEASE_WAIT_LABEL = /please wait/i;
var NUMERIC_FIELD_PATTERN = /ctc|billrate|bill_rate|salary|compensation|expectedpay|currentpay/i;
var YES_NO_OPTIONS = ['Yes', 'No'];
var AFFIRMATIVE_ANSWERS = new Set(['yes', 'y', 'true', 'on', 'checked', 'agree', 'accept', 'i agree', '1']);
var NEGATIVE_ANSWERS = new Set(['no', 'n', 'false', 'off', 'unchecked', 'decline', 'disagree', 'none', '0']);
var PHONE_NATIONAL_PATTERN = /^\d{8,15}$/;
// intl-tel-input wraps `input.phone` in `.intl-tel-input` (flag + country list) only once the page's
// view has run it — ~0.5 s AFTER the form renders on the six-digit-id instance (cimpress 2026-10-21).
// A number written into the bare input keeps every digit ("+1 213…" → 12139316324) and the plugin then
// settles on the tenant's default flag (India), so the page refuses it ("Phone number should be atleast
// 10 digits long") — 12 of 13 cimpress submit parks that day. The fill waits for the wrapper first.
var PHONE_WIDGET_WAIT_MS = 4000;
var SHARED_DIAL_PREFERENCE = ['us', 'ca', 'gb', 'in', 'ru', 'kz'];
var ADVANCE_CHAIN_WAIT_MS = 5000;
var WIDGET_SETTLE_MS = 150;
var PLACES_SUGGESTION_WAIT_MS = 5000;
var PLACES_COMMIT_WAIT_MS = 4000;
var PLACES_KEY_GAP_MS = 150;
var PLACES_ATTACH_WAIT_MS = 8000;
var PLACES_PLACE_CHANGED_SETTLE_MS = 1500;
var PLACES_BLUR_CHECK_MS = 400;
var PLACES_TYPING_OPTIONS = {
  perCharDelayMs: 40,
  maxTotalTypingMs: 2500
};
var FILE_SETTLE_WAIT_MS = 5000;
var MAX_FILE_BYTES = 3 * 1024 * 1024;
var DEFAULT_DATE_FORMAT = 'dd-M-yyyy';
var DATEPICKER_MAX_MONTH_STEPS = 36;
var MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var MONTH_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// --- Text helpers ----------------------------------------------------------

function cleanText(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/\u00a0/g, ' ').replace(/[✱*]/g, '').replace(/\s+/g, ' ').trim();
}
function slugify(value) {
  return cleanText(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// Field names are plain identifiers here, but the escaper keeps quoted attribute selectors safe in
// both browsers and jsdom (which trips on bare brackets).
function cssAttrValue(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/["\\[\]]/g, '\\$&');
}

// "Label :" / "Label:" → "Label".
var stripLabelColon = function stripLabelColon(text) {
  return cleanText(text).replace(/\s*:\s*$/, '');
};
var labelOf = function labelOf(button) {
  var _button$getAttribute;
  return cleanText((button === null || button === void 0 ? void 0 : button.textContent) || (button === null || button === void 0 || (_button$getAttribute = button.getAttribute) === null || _button$getAttribute === void 0 ? void 0 : _button$getAttribute.call(button, 'aria-label')) || (button === null || button === void 0 ? void 0 : button.value) || '');
};

// --- Visibility / page model ----------------------------------------------------

// Bootstrap's `.hide` class (the decider-controlled groups, the closed country list) and inline
// display are the signals; jsdom has no layout, so offsetParent is never consulted.
function isShown(element) {
  if (!(element !== null && element !== void 0 && element.isConnected)) return false;
  if (element.closest('.hide, [hidden]')) return false;
  var style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden';
}
function getVisibleForm() {
  var form = document.querySelector(FORM_SELECTOR);
  return form && isShown(form) ? form : null;
}
function getPrivacyAcceptButton() {
  var button = document.querySelector(PRIVACY_ACCEPT_SELECTOR);
  return button && isShown(button) ? button : null;
}
function getApplyButton() {
  return Array.from(document.querySelectorAll(APPLY_BUTTON_SELECTOR)).find(isShown) || null;
}

// The duplicate-check pre-form reuses the submit id with a "Continue" label — an advance, not the
// final submit.
function getFormSubmitControl() {
  var _getVisibleForm;
  var button = (_getVisibleForm = getVisibleForm()) === null || _getVisibleForm === void 0 ? void 0 : _getVisibleForm.querySelector(SUBMIT_SELECTOR);
  return button && isShown(button) ? button : null;
}
function getContinueButton() {
  var button = getFormSubmitControl();
  return button && CONTINUE_LABEL.test(labelOf(button)) ? button : null;
}
function getRippleHirePageKind() {
  if (getVisibleForm()) return 'form';
  if (getPrivacyAcceptButton()) return 'privacy-gate';
  if (getApplyButton()) return 'detail';
  if (POST_SUBMIT_ROUTE.test(window.location.hash || '')) return 'post-submit';
  return null;
}

// --- Submit ----------------------------------------------------------------------

function getRippleHireSubmitButton() {
  var button = getFormSubmitControl();
  return button && !CONTINUE_LABEL.test(labelOf(button)) ? button : null;
}
function detectRippleHireSubmitButton() {
  var button = getRippleHireSubmitButton();
  if (!button) return {
    detected: false
  };
  var label = labelOf(button);
  return {
    detected: true,
    label: label,
    // "Please wait…" = the multipart POST is in flight; `disabled` = the postal-code check or the
    // 2 s debounce window. A second press restarts the debounce, so both read as blocked.
    disabled: Boolean(button.disabled || button.getAttribute('aria-disabled') === 'true' || PLEASE_WAIT_LABEL.test(label)),
    // The press LANDED and the site is still answering it (the six-digit-id instance takes 20–130 s;
    // usource 6–13 s): the auto-apply driver holds its submit-wait on this instead of parking.
    busy: PLEASE_WAIT_LABEL.test(label)
  };
}

// One synthetic human-like press: the page debounces the submit for 2 s and swaps the label.
function clickRippleHireSubmitButton(_x) {
  return _clickRippleHireSubmitButton.apply(this, arguments);
}

// --- Autonext / flow advance -----------------------------------------------------------

// Forward control, in order: the privacy gate's "I Agree", the duplicate pre-form's "Continue", the
// posting's "Apply Now". Never the final submit and never "I Don't Agree".
function _clickRippleHireSubmitButton() {
  _clickRippleHireSubmitButton = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee25(button) {
    return autofill_regenerator().w(function (_context25) {
      while (1) switch (_context25.n) {
        case 0:
          _context25.n = 1;
          return clickLikeHuman(button);
        case 1:
          return _context25.a(2);
      }
    }, _callee25);
  }));
  return _clickRippleHireSubmitButton.apply(this, arguments);
}
function getRippleHireAdvanceTarget() {
  if (getRippleHireSubmitButton()) return null;
  return getPrivacyAcceptButton() || getContinueButton() || getApplyButton();
}
function detectRippleHireAdvanceButton() {
  return {
    detected: Boolean(getRippleHireAdvanceTarget())
  };
}
function isRippleHireAutofillAvailable() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$fieldCount = _ref.fieldCount,
    fieldCount = _ref$fieldCount === void 0 ? 0 : _ref$fieldCount,
    submitButton = _ref.submitButton;
  if (fieldCount > 0) return true;
  if (submitButton !== null && submitButton !== void 0 && submitButton.detected) return true;
  // The posting and the privacy gate are field-less but actionable.
  return Boolean(getRippleHireAdvanceTarget());
}

// Hash-only routing keeps this content-script context alive, so the posting → gate → form path is
// chained here as ONE logical advance (JobDiva precedent): the runtime collapses every field-less
// step into a single empty-step signature and fires advanceFlow only once for it — if only "Apply
// Now" were clicked nothing would ever accept the privacy gate and the form would never open.
// `watchRoute` is a seam for tests.
function advanceRippleHireAutofillFlow() {
  return _advanceRippleHireAutofillFlow.apply(this, arguments);
}

// --- Stalled route -----------------------------------------------------------------------

// A job route swaps its content in once its modules, templates and XHRs answer, and none of them is
// retried: one request that fails or never answers leaves the route as it was — the layout's spinner
// (the apply view's question list `getformfields`), an empty `#app-wrapper` (its layout template) or
// the posting still up on #apply/job/<seq> (the apply view's module) — with no error and nothing to
// press (cimpress 2026-10-22: 10 of 64 starts in 24 h parked `fill` that way, still stalled a minute
// later; a reload rendered the form every time the doctor tried). Auto-apply builds reload a route
// stalled for ROUTE_STALL_MS — at once when the page's resource record shows one of its requests
// failed — ROUTE_MAX_RELOADS per posting per tab, and only within ROUTE_RELOAD_LATEST_MS of the stall
// and ROUTE_WATCH_MAX_MS of the page start / the Apply Now press: the driver's 25 s fill clock re-arms
// on the reload, a later one would land in a takeover.
function _advanceRippleHireAutofillFlow() {
  _advanceRippleHireAutofillFlow = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee26() {
    var _ref2,
      _ref2$watchRoute,
      watchRoute,
      target,
      wasApply,
      pressedAt,
      accept,
      _args26 = arguments;
    return autofill_regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          _ref2 = _args26.length > 0 && _args26[0] !== undefined ? _args26[0] : {}, _ref2$watchRoute = _ref2.watchRoute, watchRoute = _ref2$watchRoute === void 0 ? watchRippleHireRoute : _ref2$watchRoute;
          if (!getRippleHireSubmitButton()) {
            _context26.n = 1;
            break;
          }
          return _context26.a(2, false);
        case 1:
          if (!isRippleHireRouteStalled()) {
            _context26.n = 4;
            break;
          }
          if (!getApplyButton()) {
            _context26.n = 2;
            break;
          }
          return _context26.a(2, false);
        case 2:
          _context26.n = 3;
          return waitForPositiveResultWithAbort(function () {
            return !isRippleHireRouteStalled();
          }, ROUTE_STALL_MS, autofill_NEVER_ABORT, ROUTE_WATCH_POLL_MS);
        case 3:
          if (!getVisibleForm()) {
            _context26.n = 4;
            break;
          }
          return _context26.a(2, true);
        case 4:
          target = getRippleHireAdvanceTarget();
          if (target) {
            _context26.n = 5;
            break;
          }
          return _context26.a(2, false);
        case 5:
          wasApply = target.matches(APPLY_BUTTON_SELECTOR);
          pressedAt = Date.now();
          if (wasApply) pressedApplyButtons.add(target);
          _context26.n = 6;
          return clickLikeHuman(target);
        case 6:
          if (!wasApply) {
            _context26.n = 8;
            break;
          }
          void watchRoute({
            since: pressedAt
          }); // the apply view can stall after the press (see ROUTE_STALL_MS)
          _context26.n = 7;
          return waitForPositiveResultWithAbort(function () {
            return getPrivacyAcceptButton();
          }, ADVANCE_CHAIN_WAIT_MS, function () {
            return Boolean(getVisibleForm());
          },
          // stop if the form opened without a gate
          100);
        case 7:
          accept = _context26.v;
          if (!accept) {
            _context26.n = 8;
            break;
          }
          _context26.n = 8;
          return clickLikeHuman(accept);
        case 8:
          return _context26.a(2, true);
      }
    }, _callee26);
  }));
  return _advanceRippleHireAutofillFlow.apply(this, arguments);
}
var ROUTE_LOADER_SELECTOR = '#mid-panel .image-loader';
var ROUTE_WRAPPER_SELECTOR = '#app-wrapper';
// The route's own requests: modules / templates (a network failure only — a missing template answers
// 404 on every posting, breadcrumbpanel.tpl) and its data XHRs (or their 5xx). One of them that
// finished within ROUTE_ARRIVING_MS means the route is still arriving (a slow proxy): the reload
// waits for a quiet moment, up to ROUTE_RELOAD_LATEST_MS.
var ROUTE_ASSET_REQUEST = /\/candidate\/candresource\//;
var ROUTE_DATA_REQUEST = /\/candidate\/(?:getformfields|companyinfo|candidatejobdetail|getcandidatecompanydetails)\?/;
var ROUTE_STALL_MS = 15000;
var ROUTE_RELOAD_LATEST_MS = 22000;
var ROUTE_ARRIVING_MS = 3000;
var ROUTE_WATCH_MAX_MS = 30000;
var ROUTE_WATCH_POLL_MS = 500;
var ROUTE_RELOADS_KEY = 'bidhub:ripplehire:route-reloads';
var ROUTE_MAX_RELOADS = 2;
var ROUTE_RELOAD_WINDOW_MS = (/* unused pure expression or super */ null && (10 * 60000));

// The Apply Now buttons this document pressed: the posting the apply view never replaced keeps them.
var pressedApplyButtons = new WeakSet();

// A job route its own content never replaced (see ROUTE_STALL_MS): the spinner, an empty layout, or
// the posting still up on the apply route after our Apply Now press. Never the form, the gate or a
// posting at rest.
function isRippleHireRouteStalled() {
  var route = (window.location.hash || '').match(RIPPLEHIRE_JOB_ROUTE);
  if (!route || getVisibleForm() || getPrivacyAcceptButton()) return false;
  var apply = getApplyButton();
  if (apply) return route[1].toLowerCase() === 'apply' && pressedApplyButtons.has(apply);
  if (Array.from(document.querySelectorAll(ROUTE_LOADER_SELECTOR)).some(isShown)) return true;
  var wrapper = document.querySelector(ROUTE_WRAPPER_SELECTOR);
  return Boolean(wrapper) && !cleanText(wrapper.textContent);
}
var isRouteRequest = function isRouteRequest(entry) {
  return String(entry.name).startsWith(window.location.origin) && (ROUTE_DATA_REQUEST.test(entry.name) || ROUTE_ASSET_REQUEST.test(entry.name));
};

// One of the route's own requests that started at or after `sinceMs` (performance.now() scale)
// failed. A browser without responseStatus never reads a failure — the stall window alone decides.
function routeRequestFailed(entries, sinceMs) {
  return entries.some(function (entry) {
    if (entry.startTime < sinceMs || typeof entry.responseStatus !== 'number' || !isRouteRequest(entry)) return false;
    if (ROUTE_DATA_REQUEST.test(entry.name)) return entry.responseStatus === 0 || entry.responseStatus >= 500;
    return entry.responseStatus === 0 && ['script', 'xmlhttprequest', 'fetch'].includes(entry.initiatorType);
  });
}

// One of the route's own requests finished within ROUTE_ARRIVING_MS of `perfNow`.
var routeStillArriving = function routeStillArriving(entries, perfNow) {
  return entries.some(function (entry) {
    return isRouteRequest(entry) && entry.responseEnd > perfNow - ROUTE_ARRIVING_MS;
  });
};

// ROUTE_MAX_RELOADS per posting per tab within ROUTE_RELOAD_WINDOW_MS (sessionStorage survives the
// reload). No tab storage = no reload: a reload loop is worse than the park it replaces.
function claimRippleHireRouteReload() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$href = _ref3.href,
    href = _ref3$href === void 0 ? window.location.href : _ref3$href,
    storage = _ref3.storage,
    _ref3$now = _ref3.now,
    now = _ref3$now === void 0 ? Date.now() : _ref3$now;
  try {
    var _url$hash$match;
    var tab = storage !== null && storage !== void 0 ? storage : window.sessionStorage; // a sandboxed frame throws on the read
    var url = new URL(href);
    var jobSeq = (_url$hash$match = url.hash.match(RIPPLEHIRE_JOB_ROUTE)) === null || _url$hash$match === void 0 ? void 0 : _url$hash$match[2];
    if (!jobSeq) return false;
    var posting = "".concat(url.host, "/").concat(jobSeq);
    var saved = JSON.parse(tab.getItem(ROUTE_RELOADS_KEY) || 'null');
    var record = (saved === null || saved === void 0 ? void 0 : saved.posting) === posting && now - saved.at < ROUTE_RELOAD_WINDOW_MS ? saved : {
      posting: posting,
      at: now,
      count: 0
    };
    if (record.count >= ROUTE_MAX_RELOADS) return false;
    tab.setItem(ROUTE_RELOADS_KEY, JSON.stringify(autofill_objectSpread(autofill_objectSpread({}, record), {}, {
      count: record.count + 1
    })));
    return true;
  } catch (_unused) {
    return false;
  }
}
var resourceEntries = function resourceEntries() {
  var _window$performance, _window$performance$g;
  return ((_window$performance = window.performance) === null || _window$performance === void 0 || (_window$performance$g = _window$performance.getEntriesByType) === null || _window$performance$g === void 0 ? void 0 : _window$performance$g.call(_window$performance, 'resource')) || [];
};
var reloadRippleHirePage = function reloadRippleHirePage() {
  return window.location.reload();
};
var routeWatch = null;

// Watches the job route for ROUTE_WATCH_MAX_MS from `since` (epoch ms: the page start or the Apply Now
// press) and reloads the page once the route has stalled ROUTE_STALL_MS in a row and none of its
// requests is still arriving — at once when one of them failed since `since`. Ends when the form / the gate shows or the page leaves the job
// route. One watch per document: a call while one runs (the press after the page-start watch) moves
// its window and restarts the stall count — the apply route starts drawing then. Auto-apply builds
// only; resolves true when it reloaded. now / reload / storage / entries are seams for tests.
function watchRippleHireRoute() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref4$since = _ref4.since,
    since = _ref4$since === void 0 ? Date.now() : _ref4$since,
    _ref4$now = _ref4.now,
    now = _ref4$now === void 0 ? function () {
      return Date.now();
    } : _ref4$now,
    _ref4$reload = _ref4.reload,
    reload = _ref4$reload === void 0 ? reloadRippleHirePage : _ref4$reload,
    storage = _ref4.storage,
    _ref4$entries = _ref4.entries,
    entries = _ref4$entries === void 0 ? resourceEntries : _ref4$entries;
  if (true) return Promise.resolve(false);
  // removed by dead control flow

  // removed by dead control flow
 var watch; 
  // removed by dead control flow

  // removed by dead control flow

  // removed by dead control flow

}

// --- Question wrappers -----------------------------------------------------------

function getGroupLabel(group) {
  // Direct child only (a nested `.control-label` span sits inside checkbox labels); walked by hand
  // because jsdom resolves `:scope >` to any descendant.
  var label = Array.from(group.children).find(function (child) {
    return child.matches(CONTROL_LABEL_SELECTOR);
  });
  return stripLabelColon(label === null || label === void 0 ? void 0 : label.textContent);
}
function getPostText(group) {
  var _group$querySelector;
  return cleanText((_group$querySelector = group.querySelector(POST_TEXT_SELECTOR)) === null || _group$querySelector === void 0 ? void 0 : _group$querySelector.textContent);
}
function getInfoBlock(group) {
  var _group$querySelector2;
  return cleanText((_group$querySelector2 = group.querySelector(INFO_BLOCK_SELECTOR)) === null || _group$querySelector2 === void 0 ? void 0 : _group$querySelector2.textContent);
}

// The nearest preceding <legend> ("Personal Details", "Professional Details", "Equal Employment
// Opportunity Questions") — context only, the labels are self-describing.
function getSectionTitle(group, form) {
  var node = group;
  while (node && node !== form) {
    for (var sibling = node.previousElementSibling; sibling; sibling = sibling.previousElementSibling) {
      var legend = sibling.matches('legend') ? sibling : sibling.querySelector('legend');
      var text = cleanText(legend === null || legend === void 0 ? void 0 : legend.textContent);
      if (text) return text;
    }
    node = node.parentElement;
  }
  return '';
}

// Required = the group's `.required`, the control's `required` class (the template stamps both) or
// the select's data-required="Y".
function isRequiredControl(group) {
  var _group$classList, _control$classList, _control$getAttribute;
  var control = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (group !== null && group !== void 0 && (_group$classList = group.classList) !== null && _group$classList !== void 0 && _group$classList.contains('required')) return true;
  if (!control) return false;
  return ((_control$classList = control.classList) === null || _control$classList === void 0 ? void 0 : _control$classList.contains('required')) || control.required || ((_control$getAttribute = control.getAttribute) === null || _control$getAttribute === void 0 ? void 0 : _control$getAttribute.call(control, 'data-required')) === 'Y';
}

// A checkbox's own statement ("I have clicked, read and understood the EEO statement.") without the
// input node's text.
function checkboxStatement(checkbox) {
  var _checkbox$labels;
  var label = checkbox.closest('label');
  return cleanText((label === null || label === void 0 ? void 0 : label.textContent) || ((_checkbox$labels = checkbox.labels) === null || _checkbox$labels === void 0 || (_checkbox$labels = _checkbox$labels[0]) === null || _checkbox$labels === void 0 ? void 0 : _checkbox$labels.textContent) || checkbox.value);
}

// Live re-resolution by field name: the SPA re-renders the form (dup-check step, decider toggles),
// so fill-time lookups never trust the detection-time node when a live one exists.
function getLiveControl(fieldId) {
  var _getVisibleForm2;
  if (!fieldId) return null;
  return ((_getVisibleForm2 = getVisibleForm()) === null || _getVisibleForm2 === void 0 ? void 0 : _getVisibleForm2.querySelector("[name=\"".concat(cssAttrValue(fieldId), "\"]"))) || null;
}
function getLiveGroup(fieldId, fallback) {
  var _getLiveControl;
  var group = (_getLiveControl = getLiveControl(fieldId)) === null || _getLiveControl === void 0 ? void 0 : _getLiveControl.closest(FORM_GROUP_SELECTOR);
  return group || fallback;
}
function getLiveControls(fieldId) {
  var _getVisibleForm$query, _getVisibleForm3;
  if (!fieldId) return [];
  return Array.from((_getVisibleForm$query = (_getVisibleForm3 = getVisibleForm()) === null || _getVisibleForm3 === void 0 ? void 0 : _getVisibleForm3.querySelectorAll("[name=\"".concat(cssAttrValue(fieldId), "\"]"))) !== null && _getVisibleForm$query !== void 0 ? _getVisibleForm$query : []);
}
function isNumericField(input) {
  return input.getAttribute('inputmode') === 'numeric' || input.type === 'number' || NUMERIC_FIELD_PATTERN.test(input.name || input.id || '') || /autonumeric|currency|numeric/i.test(input.className || '');
}

// Native <select>: the placeholder option ("Select Year", "What is your veteran status?") carries an
// empty value; everything else is a real choice.
function readSelectOptions(select) {
  var _select$options;
  return Array.from((_select$options = select === null || select === void 0 ? void 0 : select.options) !== null && _select$options !== void 0 ? _select$options : []).filter(function (option) {
    return !option.disabled && cleanText(option.value) !== '';
  }).map(function (option) {
    return {
      element: option,
      text: cleanText(option.textContent) || cleanText(option.value),
      value: option.value
    };
  }).filter(function (option) {
    return option.text;
  });
}

// A currency list's options end in the ISO code ("Rs. - INR", "$ - USD", "CHF - CHF").
var CURRENCY_OPTION_CODE = /(?:^|[\s-])([A-Z]{3})$/;
var getCurrencyCode = function getCurrencyCode(text) {
  var _cleanText$match;
  return ((_cleanText$match = cleanText(text).match(CURRENCY_OPTION_CODE)) === null || _cleanText$match === void 0 ? void 0 : _cleanText$match[1]) || null;
};
function isCurrencySelect(select) {
  var options = readSelectOptions(select);
  return options.length >= 2 && options.every(function (option) {
    return getCurrencyCode(option.text);
  });
}

// The currency an amount answer names: an ISO code the list carries ("160000 USD per year") or an
// unambiguous symbol (₹ £ € — "$" is USD, CAD, SGD, AUD … and never decides). null when it names none.
var CURRENCY_SYMBOL_CODES = new Map([['₹', 'INR'], ['£', 'GBP'], ['€', 'EUR']]);
function amountCurrencyCode(answer, codes) {
  var text = String(answer !== null && answer !== void 0 ? answer : '');
  var code = (text.match(/\b[A-Z]{3}\b/g) || []).find(function (token) {
    return codes.has(token);
  });
  if (code) return code;
  var symbol = Array.from(CURRENCY_SYMBOL_CODES.keys()).find(function (candidate) {
    return text.includes(candidate);
  });
  return symbol && codes.has(CURRENCY_SYMBOL_CODES.get(symbol)) ? CURRENCY_SYMBOL_CODES.get(symbol) : null;
}

// "Total experience" holds a Year and a Month select under one label: derive the unit from the
// placeholder option ("Select Year" → "Year") so the two questions stay distinct.
function selectQuestion(baseQuestion, select, siblingCount) {
  var _Array$from$find;
  if (siblingCount < 2) return baseQuestion;
  var placeholder = cleanText((_Array$from$find = Array.from(select.options).find(function (option) {
    return cleanText(option.value) === '';
  })) === null || _Array$from$find === void 0 ? void 0 : _Array$from$find.textContent);
  var unit = placeholder.replace(/^(select|choose)\s+/i, '');
  return unit && unit.length <= 30 ? "".concat(baseQuestion, " (").concat(unit, ")") : baseQuestion;
}

// --- Field detection -------------------------------------------------------

function detectAutofillFields() {
  var form = getVisibleForm();
  if (!form) return [];
  var questions = [];
  var usedFieldIds = new Set();
  var uniqueFieldId = function uniqueFieldId(base) {
    var candidate = base;
    var n = 2;
    while (usedFieldIds.has(candidate)) candidate = "".concat(base, "-").concat(n++);
    return candidate;
  };
  var addEntry = function addEntry(entry) {
    if (!entry.question || !entry.fieldId || !entry.field) return;
    var fieldId = uniqueFieldId(entry.fieldId);
    usedFieldIds.add(fieldId);
    questions.push(autofill_objectSpread(autofill_objectSpread({
      options: null,
      constraints: {},
      dependsOnPrevious: isDependentQuestion(entry.question)
    }, entry), {}, {
      fieldId: fieldId
    }));
  };
  var groups = Array.from(form.querySelectorAll(FORM_GROUP_SELECTOR))
  // The template also stamps `form-group` on some checkbox INPUTS; nested groups go through
  // their parent; `.hide` groups wait for their decider.
  .filter(function (group) {
    var _group$parentElement;
    return group.tagName === 'DIV' && !((_group$parentElement = group.parentElement) !== null && _group$parentElement !== void 0 && _group$parentElement.closest(FORM_GROUP_SELECTOR)) && isShown(group);
  });
  var _iterator = autofill_createForOfIteratorHelper(groups),
    _step;
  try {
    var _loop = function _loop() {
        var group = _step.value;
        // The reCAPTCHA widget is one shared entry (below), never a per-group question.
        if (group.querySelector('#g-recaptcha')) return 0; // continue
        var label = getGroupLabel(group);
        var slug = slugify(label) || 'question';
        var sectionTitle = getSectionTitle(group, form);
        var helperText = [getPostText(group), getInfoBlock(group)].filter(Boolean).join(' ');
        var baseConstraints = autofill_objectSpread(autofill_objectSpread({}, sectionTitle ? {
          sectionTitle: sectionTitle
        } : {}), helperText ? {
          helperText: helperText
        } : {});
        var requiredConstraint = function requiredConstraint() {
          var control = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return isRequiredControl(group, control) ? {
            required: true
          } : {};
        };

        // Résumé through the CV-parser popup (`#openResume` "Upload", `#changeResumeFile` once a file is
        // on the form) — detected under the same id before and after the upload.
        var resumeUpload = group.querySelector("".concat(RESUME_POPUP_UPLOAD_SELECTOR, ", ").concat(RESUME_POPUP_CHANGE_SELECTOR));
        if (resumeUpload) {
          addEntry({
            question: label || 'Upload resume',
            fieldId: RESUME_POPUP_FIELD_ID,
            field: group,
            answerType: 'resume',
            fieldKind: 'ripplehire-resume-popup',
            constraints: autofill_objectSpread(autofill_objectSpread({}, baseConstraints), requiredConstraint(group.querySelector(RESUME_POPUP_UPLOAD_SELECTOR)))
          });
          return 0; // continue
        }
        // Widgets only a human can drive → surfaced as skipped, with the label, so a required one is
        // visible on the panel instead of silently missing from the run.
        var unsupported = group.querySelector(UNSUPPORTED_SELECTOR);
        if (unsupported) {
          var control = group.querySelector('input[name], select[name]');
          addEntry({
            question: label || cleanText(unsupported.textContent) || 'Unsupported field',
            fieldId: (control === null || control === void 0 ? void 0 : control.getAttribute('name')) || unsupported.id || "unsupported:".concat(slug),
            field: group,
            answerType: 'unsupported',
            fieldKind: 'unsupported',
            constraints: autofill_objectSpread(autofill_objectSpread({}, baseConstraints), requiredConstraint(control))
          });
          return 0; // continue
        }

        // Résumé / cover letter / other documents — Jasny fileinput around a plain file input.
        var fileInput = group.querySelector('input[type="file"]');
        if (fileInput) {
          var isCoverLetter = /cover\s*letter|covering letter|motivation letter/i.test(label) || /cover/i.test(fileInput.name || '');
          var isResume = /r[ée]sum[ée]|\bcv\b|curriculum/i.test(label) || /resume|\bcv\b/i.test(fileInput.name || '');
          addEntry({
            question: label || (isResume ? 'Upload resume' : 'Upload file'),
            fieldId: fileInput.getAttribute('name') || fileInput.id || "file:".concat(slug),
            field: group,
            answerType: isCoverLetter ? 'cover_letter' : isResume ? 'resume' : 'file',
            fieldKind: 'ripplehire-file',
            constraints: autofill_objectSpread(autofill_objectSpread(autofill_objectSpread(autofill_objectSpread({}, baseConstraints), requiredConstraint(fileInput)), fileInput.getAttribute('accept') ? {
              accept: fileInput.getAttribute('accept')
            } : {}), isCoverLetter ? {
              coverLetterOutput: 'file'
            } : {})
          });
          return 0; // continue
        }

        // Phone — intl-tel-input: national digits under the flag's dial code.
        var phoneInput = group.querySelector(PHONE_INPUT_SELECTOR);
        if (phoneInput) {
          addEntry({
            question: label || 'Phone',
            fieldId: phoneInput.getAttribute('name') || phoneInput.id || "phone:".concat(slug),
            field: group,
            answerType: 'text',
            fieldKind: 'intl-tel',
            constraints: autofill_objectSpread(autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(label, phoneInput)), {}, {
              inputType: 'tel',
              pattern: '^\\d{8,15}$'
            }, baseConstraints), requiredConstraint(phoneInput))
          });
          return 0; // continue
        }

        // City — Google Places autocomplete: only a committed suggestion survives blur.
        var placesInput = group.querySelector(PLACES_INPUT_SELECTOR);
        if (placesInput) {
          addEntry({
            question: label || 'City',
            fieldId: placesInput.getAttribute('name') || placesInput.id || "places:".concat(slug),
            field: group,
            answerType: 'text',
            fieldKind: 'places',
            constraints: autofill_objectSpread(autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(label, placesInput)), baseConstraints), {}, {
              helperText: [baseConstraints.helperText, 'City name — a Google Places suggestion is picked for it'].filter(Boolean).join(' ')
            }, requiredConstraint(placesInput))
          });
          return 0; // continue
        }

        // bootstrap-datepicker.
        var dateInput = group.querySelector(DATE_INPUT_SELECTOR);
        if (dateInput) {
          addEntry({
            question: label || 'Date',
            fieldId: dateInput.getAttribute('name') || dateInput.id || "date:".concat(slug),
            field: group,
            answerType: 'text',
            fieldKind: 'datepicker',
            constraints: autofill_objectSpread(autofill_objectSpread({}, baseConstraints), {}, {
              inputType: 'date'
            }, requiredConstraint(dateInput))
          });
          return 0; // continue
        }

        // bootstrap-multiselect FIRST (2026-10-16): the plugin renders its first page as radio rows
        // (`multiple: false`) / checkbox rows inside `.btn-group ul`, and on the live ltm form those 101
        // radios made State / Country read as uniform-radio groups whose "options" were the window
        // (A→Arkansas) — never the wanted value — so the fields stayed empty on every park. The native
        // <select> behind the plugin is the question; its rows are never radios or checkboxes.
        var pluginSelects = Array.from(group.querySelectorAll('select')).filter(isPluginSelect);
        if (pluginSelects.length) {
          var _iterator3 = autofill_createForOfIteratorHelper(pluginSelects),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var select = _step3.value;
              var name = select.getAttribute('name') || select.id || "select:".concat(slug);
              addEntry({
                question: label || name,
                fieldId: name,
                field: group,
                answerType: select.multiple ? 'multi-select' : 'single-select',
                fieldKind: 'multiselect',
                // Options load on open / are a window on a server list — null makes the handler probe them.
                options: null,
                constraints: autofill_objectSpread(autofill_objectSpread({}, baseConstraints), requiredConstraint(select))
              });
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return 0; // continue
        }

        // Radio groups (uniform.js wrapped) — one question per radio name; a `.decider` toggles
        // dependent groups, which re-detection picks up once shown.
        var radios = Array.from(group.querySelectorAll('input[type="radio"]')).filter(function (radio) {
          return !isPluginRow(radio);
        });
        if (radios.length) {
          var byName = new Map();
          var _iterator4 = autofill_createForOfIteratorHelper(radios),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var radio = _step4.value;
              var _name = radio.getAttribute('name') || "radio:".concat(slug);
              if (!byName.has(_name)) byName.set(_name, []);
              byName.get(_name).push(radio);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          var _iterator5 = autofill_createForOfIteratorHelper(byName),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _step5$value = autofill_slicedToArray(_step5.value, 2),
                _name2 = _step5$value[0],
                inputs = _step5$value[1];
              var options = inputs.map(function (radio) {
                return radioOptionText(radio);
              }).filter(Boolean);
              addEntry({
                question: label || _name2,
                fieldId: _name2,
                field: group,
                answerType: 'single-select',
                fieldKind: 'uniform-radio',
                options: options.length ? options : YES_NO_OPTIONS,
                constraints: autofill_objectSpread(autofill_objectSpread({}, baseConstraints), requiredConstraint(inputs[0]))
              });
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          return 0; // continue
        }

        // Checkboxes (uniform.js wrapped): a declaration / terms / lone consent box is a Yes-No
        // question phrased as its own statement; several boxes with distinct values are a multi-select.
        var checkboxes = Array.from(group.querySelectorAll('input[type="checkbox"]')).filter(function (checkbox) {
          return !isPluginRow(checkbox);
        });
        if (checkboxes.length) {
          var values = new Set(checkboxes.map(function (checkbox) {
            return checkbox.value;
          }));
          var isDeclaration = Boolean(group.querySelector('.declaration')) || checkboxes.length === 1 || values.size < 2;
          if (isDeclaration) {
            var _iterator6 = autofill_createForOfIteratorHelper(checkboxes),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var checkbox = _step6.value;
                var statement = checkboxStatement(checkbox);
                var _name3 = checkbox.getAttribute('name') || checkbox.id || "checkbox:".concat(slug);
                addEntry({
                  question: label && statement ? "".concat(label, ": ").concat(statement) : statement || label || _name3,
                  fieldId: _name3,
                  field: group,
                  answerType: 'single-select',
                  fieldKind: 'consent-checkbox',
                  options: YES_NO_OPTIONS,
                  constraints: autofill_objectSpread(autofill_objectSpread({}, baseConstraints), requiredConstraint(checkbox))
                });
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          } else {
            var _name4 = checkboxes[0].getAttribute('name') || "checkboxes:".concat(slug);
            addEntry({
              question: label || _name4,
              fieldId: _name4,
              field: group,
              answerType: 'multi-select',
              fieldKind: 'checkbox-group',
              options: checkboxes.map(function (checkbox) {
                return checkboxStatement(checkbox) || checkbox.value;
              }).filter(Boolean),
              constraints: autofill_objectSpread(autofill_objectSpread({}, baseConstraints), requiredConstraint(checkboxes[0]))
            });
          }
          return 0; // continue
        }

        // Native selects (one label may hold two: experience years + months) and bootstrap-multiselect.
        var selects = Array.from(group.querySelectorAll('select'));
        if (selects.length) {
          var amount = group.querySelector(TEXT_INPUT_SELECTOR);
          var _iterator7 = autofill_createForOfIteratorHelper(selects),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _select = _step7.value;
              var _name5 = _select.getAttribute('name') || _select.id || "select:".concat(slug);
              var _options = readSelectOptions(_select).map(function (option) {
                return option.text;
              });
              // "Current CTC" = a currency <select> beside the amount box: asked as the bare label the engine
              // kept the first option ("Rs. - INR") for US applicants (cimpress 2026-10-21), so the select is
              // asked as the currency — and the amount's own answer settles it (fillCurrencyAmount).
              var currency = Boolean(amount && label) && isCurrencySelect(_select);
              addEntry({
                question: currency ? "".concat(label, " currency") : selectQuestion(label || _name5, _select, selects.length),
                fieldId: _name5,
                field: group,
                answerType: 'single-select',
                fieldKind: 'select-native',
                options: _options,
                constraints: autofill_objectSpread(autofill_objectSpread({}, baseConstraints), requiredConstraint(_select))
              });
            }
            // "Expected CTC" = a currency <select> AND the amount <input> under ONE label (2026-10-16): the
            // amount is its own question, else it is never filled ("Expected CTC amount" was luna's most
            // frequent ask, 71 in a day) and a tenant that requires it blocks the submit client-side.
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          if (amount && label) {
            addEntry({
              question: "".concat(label, " amount"),
              fieldId: amount.getAttribute('name') || amount.id || "amount:".concat(slug),
              field: group,
              answerType: 'text',
              fieldKind: selects.some(isCurrencySelect) ? 'currency-amount' : isNumericField(amount) ? 'numeric' : 'text',
              constraints: autofill_objectSpread(autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(label, amount)), baseConstraints), requiredConstraint(amount))
            });
          }
          return 0; // continue
        }
        var textarea = group.querySelector('textarea');
        if (textarea) {
          addEntry({
            question: label || textarea.getAttribute('name') || 'Details',
            fieldId: textarea.getAttribute('name') || textarea.id || "textarea:".concat(slug),
            field: group,
            answerType: 'text',
            fieldKind: 'textarea',
            constraints: autofill_objectSpread(autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(label, textarea)), baseConstraints), requiredConstraint(textarea))
          });
          return 0; // continue
        }

        // jquery.tokeninput skills: a hidden value input inside `#<name>-autocomplete`.
        var tokenWrapper = group.querySelector(TOKEN_INPUT_WRAPPER_SELECTOR);
        var tokenValue = tokenWrapper === null || tokenWrapper === void 0 ? void 0 : tokenWrapper.querySelector('input[type="hidden"][name]');
        if (tokenWrapper && tokenValue) {
          addEntry({
            question: label || tokenValue.getAttribute('name'),
            fieldId: tokenValue.getAttribute('name'),
            field: group,
            answerType: 'text',
            fieldKind: 'tokeninput',
            constraints: autofill_objectSpread(autofill_objectSpread({}, baseConstraints), {}, {
              helperText: [baseConstraints.helperText, 'Comma-separated list'].filter(Boolean).join(' ')
            }, requiredConstraint(tokenValue))
          });
          return 0; // continue
        }
        var input = group.querySelector(TEXT_INPUT_SELECTOR);
        if (input && label) {
          addEntry({
            question: label,
            fieldId: input.getAttribute('name') || input.id || "text:".concat(slug),
            field: group,
            answerType: 'text',
            fieldKind: isNumericField(input) ? 'numeric' : 'text',
            constraints: autofill_objectSpread(autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(label, input)), baseConstraints), requiredConstraint(input))
          });
        }
        // Label-only groups (privacy text, consent copy, simple text links) and the submit row are not
        // questions.
      },
      _ret;
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _ret = _loop();
      if (_ret === 0) continue;
    }

    // reCAPTCHA v2 checkbox (some tenants). Auto-apply build only; null elsewhere.
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var captcha = buildCaptchaFieldEntry(form);
  if (captcha) questions.push(captcha);

  // The CV parser clears every input, select, checkbox and radio of the form when the résumé lands:
  // the résumé goes first and every other field waits for it (a dependent field waits through the
  // one before it). The runtime only waits on a field scheduled earlier in the same pass.
  var resumeIndex = questions.findIndex(function (entry) {
    return entry.fieldKind === 'ripplehire-resume-popup';
  });
  if (resumeIndex >= 0) {
    var _questions$splice = questions.splice(resumeIndex, 1),
      _questions$splice2 = autofill_slicedToArray(_questions$splice, 1),
      resumeEntry = _questions$splice2[0];
    var _iterator2 = autofill_createForOfIteratorHelper(questions),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var entry = _step2.value;
        if (!entry.waitForFieldId && !entry.dependsOnPrevious && !entry.waitForPreviousField) {
          entry.waitForFieldId = resumeEntry.fieldId;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    questions.unshift(resumeEntry);
  }
  return questions;
}
function radioOptionText(radio) {
  var label = radio.closest('label');
  if (!label) return cleanText(radio.value);
  // The uniform wrapper sits inside the label; strip nothing but whitespace — the input has no text.
  return cleanText(label.textContent) || cleanText(radio.value);
}

// --- Option matching ---------------------------------------------------------

function normalizeYesNo(answer, options) {
  var texts = options.map(function (option) {
    return option.text.toLowerCase();
  });
  if (!texts.includes('yes') || !texts.includes('no')) return answer;
  if (typeof answer === 'boolean') return answer ? 'Yes' : 'No';
  var want = cleanText(answer).toLowerCase();
  if (AFFIRMATIVE_ANSWERS.has(want)) return 'Yes';
  if (NEGATIVE_ANSWERS.has(want)) return 'No';
  return answer;
}
function isAffirmativeAnswer(answer) {
  if (typeof answer === 'boolean') return answer;
  var text = cleanText(answer).toLowerCase();
  if (!text) return false;
  return !NEGATIVE_ANSWERS.has(text);
}
var isIntegerText = function isIntegerText(text) {
  return /^-?\d+$/.test(cleanText(text));
};

// exact → numeric (all-integer lists: "7 years" → 7) → option starts with the answer → option contains
// it → embedding; null when nothing fits (the caller decides between skipping and surfacing an error).
function findBestOption(_x2, _x3) {
  return _findBestOption.apply(this, arguments);
} // --- Fill primitives ---------------------------------------------------------------
// jQuery / Backbone form: the native value write + input, then change + blur so the page's own
// validators and stickit bindings see it.
function _findBestOption() {
  _findBestOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee27(answer, options) {
    var want, exact, number, wanted, numeric, prefixed, contained, best, _t6;
    return autofill_regenerator().w(function (_context27) {
      while (1) switch (_context27.p = _context27.n) {
        case 0:
          want = cleanText(answer).toLowerCase();
          if (!(!want || !options.length)) {
            _context27.n = 1;
            break;
          }
          return _context27.a(2, null);
        case 1:
          exact = options.find(function (option) {
            return option.text.toLowerCase() === want;
          });
          if (!exact) {
            _context27.n = 2;
            break;
          }
          return _context27.a(2, exact);
        case 2:
          if (!options.every(function (option) {
            return isIntegerText(option.text);
          })) {
            _context27.n = 3;
            break;
          }
          number = want.match(/-?\d+(?:\.\d+)?/);
          if (!number) {
            _context27.n = 3;
            break;
          }
          wanted = Math.round(Number(number[0]));
          numeric = options.find(function (option) {
            return Number(option.text) === wanted;
          });
          if (!numeric) {
            _context27.n = 3;
            break;
          }
          return _context27.a(2, numeric);
        case 3:
          prefixed = options.find(function (option) {
            return option.text.toLowerCase().startsWith(want);
          });
          if (!prefixed) {
            _context27.n = 4;
            break;
          }
          return _context27.a(2, prefixed);
        case 4:
          contained = options.find(function (option) {
            return option.text.toLowerCase().includes(want);
          });
          if (!contained) {
            _context27.n = 5;
            break;
          }
          return _context27.a(2, contained);
        case 5:
          _context27.p = 5;
          _context27.n = 6;
          return getEmbeddingMatch(cleanText(answer), options.map(function (option) {
            return option.text;
          }));
        case 6:
          best = _context27.v;
          return _context27.a(2, options.find(function (option) {
            return option.text === best;
          }) || null);
        case 7:
          _context27.p = 7;
          _t6 = _context27.v;
          return _context27.a(2, null);
      }
    }, _callee27, null, [[5, 7]]);
  }));
  return _findBestOption.apply(this, arguments);
}
function setNativeValue(control, value) {
  fillTextInput(control, String(value !== null && value !== void 0 ? value : ''));
  control.dispatchEvent(new Event('change', {
    bubbles: true
  }));
}

// Real keyboards fire keypress for Enter but not for the arrow keys; the legacy keyCode/which are set
// because Google's autocomplete still reads them.
function dispatchKey(target, key) {
  var keyCode = key === 'Enter' ? 13 : key === 'ArrowDown' ? 40 : key === 'Escape' ? 27 : 0;
  var types = key === 'Enter' ? ['keydown', 'keypress', 'keyup'] : ['keydown', 'keyup'];
  for (var _i = 0, _types = types; _i < _types.length; _i++) {
    var type = _types[_i];
    target.dispatchEvent(new KeyboardEvent(type, {
      key: key,
      code: key,
      keyCode: keyCode,
      which: keyCode,
      bubbles: true,
      cancelable: true
    }));
  }
}
function requiredAtFillTime(group, control) {
  return isRequiredControl(group, control);
}

// A name as RippleHire's `matchnonenglish` rule accepts it: compound names joined, punctuation other
// than . ’ ' dropped ("Mary Ann" → MaryAnn, "J. G." → J.G., "Jean-Luc" → JeanLuc).
var sanitizeRippleHireName = function sanitizeRippleHireName(answer) {
  return cleanText(answer).normalize('NFC').replace(NAME_DISALLOWED_CHARS, '');
};
function fillText(_x4, _x5, _x6) {
  return _fillText.apply(this, arguments);
} // autoNumeric currency / plain numeric inputs reject everything but digits and one dot.
function _fillText() {
  _fillText = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee28(fieldId, field, answer) {
    var group, control, value;
    return autofill_regenerator().w(function (_context28) {
      while (1) switch (_context28.n) {
        case 0:
          if (!(answer == null)) {
            _context28.n = 1;
            break;
          }
          return _context28.a(2);
        case 1:
          group = getLiveGroup(fieldId, field);
          control = getLiveControl(fieldId) || (group === null || group === void 0 ? void 0 : group.querySelector("".concat(TEXT_INPUT_SELECTOR, ", textarea")));
          if (control) {
            _context28.n = 2;
            break;
          }
          return _context28.a(2);
        case 2:
          value = NAME_FIELD_IDS.has(fieldId) ? sanitizeRippleHireName(answer) : String(answer); // A name that empties out (digits only) is left blank — an optional middle name is better absent.
          if (!(NAME_FIELD_IDS.has(fieldId) && !value)) {
            _context28.n = 3;
            break;
          }
          return _context28.a(2);
        case 3:
          setNativeValue(control, value);
        case 4:
          return _context28.a(2);
      }
    }, _callee28);
  }));
  return _fillText.apply(this, arguments);
}
function fillNumeric(_x7, _x8, _x9) {
  return _fillNumeric.apply(this, arguments);
}
function _fillNumeric() {
  _fillNumeric = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee29(fieldId, field, answer) {
    var _getLiveGroup;
    var digits, control;
    return autofill_regenerator().w(function (_context29) {
      while (1) switch (_context29.n) {
        case 0:
          digits = String(answer !== null && answer !== void 0 ? answer : '').replace(/[^\d.]/g, '').replace(/^(\d*\.\d*).*$/, '$1');
          if (digits) {
            _context29.n = 1;
            break;
          }
          return _context29.a(2);
        case 1:
          control = getLiveControl(fieldId) || ((_getLiveGroup = getLiveGroup(fieldId, field)) === null || _getLiveGroup === void 0 ? void 0 : _getLiveGroup.querySelector(TEXT_INPUT_SELECTOR));
          if (control) setNativeValue(control, digits);
        case 2:
          return _context29.a(2);
      }
    }, _callee29);
  }));
  return _fillNumeric.apply(this, arguments);
}
function fillNativeSelect(_x0, _x1, _x10) {
  return _fillNativeSelect.apply(this, arguments);
} // bootstrap-multiselect over a native <select>: options may load on first open. The native option
// state is what the form posts; the plugin's own checkbox / radio is clicked too so its button text
// follows. The SPA (candidatejobapply_view.js) initialises every `.multi-select select` with
// `enableFiltering` over a SERVER list: the first page is `search-custom-items?q=` (≤ 100 rows of the
// whole catalogue) and typing in the filter box re-queries it and rebuilds the options from the
// matches — a value beyond the first page is reachable only by searching (2026-10-16).
// A <select> bootstrap-multiselect drives: inside the SPA's `.multi-select` wrapper, followed by the
// plugin's `.btn-group`, or multi-valued (the plugin is the only multi-value widget on this form).
function _fillNativeSelect() {
  _fillNativeSelect = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee30(fieldId, field, answer) {
    var _getLiveGroup2;
    var want, select, options, chosen;
    return autofill_regenerator().w(function (_context30) {
      while (1) switch (_context30.n) {
        case 0:
          want = cleanText(answer);
          select = getLiveControl(fieldId) || ((_getLiveGroup2 = getLiveGroup(fieldId, field)) === null || _getLiveGroup2 === void 0 ? void 0 : _getLiveGroup2.querySelector('select'));
          if (!(!want || !select || select.tagName !== 'SELECT')) {
            _context30.n = 1;
            break;
          }
          return _context30.a(2);
        case 1:
          options = readSelectOptions(select);
          _context30.n = 2;
          return findBestOption(normalizeYesNo(want, options), options);
        case 2:
          chosen = _context30.v;
          if (chosen) {
            _context30.n = 4;
            break;
          }
          if (!requiredAtFillTime(select.closest(FORM_GROUP_SELECTOR), select)) {
            _context30.n = 3;
            break;
          }
          throw new Error("ripplehire: no option matched \"".concat(want, "\" for ").concat(fieldId));
        case 3:
          return _context30.a(2);
        case 4:
          if (select.value !== chosen.value) fillSelectInput(select, chosen.value);
          select.dispatchEvent(new Event('blur'));
        case 5:
          return _context30.a(2);
      }
    }, _callee30);
  }));
  return _fillNativeSelect.apply(this, arguments);
}
var isPluginSelect = function isPluginSelect(select) {
  var _select$nextElementSi;
  return Boolean(select.closest(MULTISELECT_WRAPPER_SELECTOR) || ((_select$nextElementSi = select.nextElementSibling) === null || _select$nextElementSi === void 0 || (_select$nextElementSi = _select$nextElementSi.classList) === null || _select$nextElementSi === void 0 ? void 0 : _select$nextElementSi.contains('btn-group')) || select.multiple);
};
// A radio / checkbox the PLUGIN rendered as a dropdown row (inside its `.btn-group` list).
var isPluginRow = function isPluginRow(input) {
  return Boolean(input.closest('.btn-group .dropdown-menu, .multiselect-container'));
};
function getMultiselectContainer(select) {
  var _select$nextElementSi2;
  if ((_select$nextElementSi2 = select.nextElementSibling) !== null && _select$nextElementSi2 !== void 0 && (_select$nextElementSi2 = _select$nextElementSi2.classList) !== null && _select$nextElementSi2 !== void 0 && _select$nextElementSi2.contains('btn-group')) return select.nextElementSibling;
  var wrapper = select.closest(MULTISELECT_WRAPPER_SELECTOR) || select.parentElement;
  return (wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector('.btn-group')) || null;
}
function openMultiselect(_x11, _x12) {
  return _openMultiselect.apply(this, arguments);
}
function _openMultiselect() {
  _openMultiselect = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee31(select, shouldAbort) {
    var container, button;
    return autofill_regenerator().w(function (_context31) {
      while (1) switch (_context31.n) {
        case 0:
          container = getMultiselectContainer(select);
          button = container === null || container === void 0 ? void 0 : container.querySelector('button.multiselect, button.dropdown-toggle');
          if (button) {
            _context31.n = 1;
            break;
          }
          return _context31.a(2, null);
        case 1:
          if (container.classList.contains('open')) {
            _context31.n = 3;
            break;
          }
          _context31.n = 2;
          return clickLikeHuman(button, {
            shouldAbort: shouldAbort
          });
        case 2:
          _context31.n = 3;
          return sleep(WIDGET_SETTLE_MS);
        case 3:
          return _context31.a(2, container);
      }
    }, _callee31);
  }));
  return _openMultiselect.apply(this, arguments);
}
function closeMultiselect(_x13) {
  return _closeMultiselect.apply(this, arguments);
}
function _closeMultiselect() {
  _closeMultiselect = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee32(select) {
    var _container$querySelec;
    var container;
    return autofill_regenerator().w(function (_context32) {
      while (1) switch (_context32.n) {
        case 0:
          container = getMultiselectContainer(select);
          if (container !== null && container !== void 0 && container.classList.contains('open')) (_container$querySelec = container.querySelector('button.multiselect, button.dropdown-toggle')) === null || _container$querySelec === void 0 || _container$querySelec.click();
        case 1:
          return _context32.a(2);
      }
    }, _callee32);
  }));
  return _closeMultiselect.apply(this, arguments);
}
function getMultiselectSearchInput(container) {
  var input = container === null || container === void 0 ? void 0 : container.querySelector(MULTISELECT_SEARCH_INPUT_SELECTOR);
  return input !== null && input !== void 0 && input.isConnected ? input : null;
}
var sameOptionList = function sameOptionList(a, b) {
  return a.length === b.length && a.every(function (option, index) {
    return option.value === b[index].value;
  });
};

// The options after a (re)load: a non-empty list that, when `changedFrom` is given, differs from it.
function waitForMultiselectOptions(_x14, _x15) {
  return _waitForMultiselectOptions.apply(this, arguments);
} // A searchable dropdown whose first page is full is a window on a longer catalogue.
function _waitForMultiselectOptions() {
  _waitForMultiselectOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee33(select, shouldAbort) {
    var _ref32,
      _ref32$changedFrom,
      changedFrom,
      _ref32$timeoutMs,
      timeoutMs,
      _args33 = arguments,
      _t7;
    return autofill_regenerator().w(function (_context33) {
      while (1) switch (_context33.n) {
        case 0:
          _ref32 = _args33.length > 2 && _args33[2] !== undefined ? _args33[2] : {}, _ref32$changedFrom = _ref32.changedFrom, changedFrom = _ref32$changedFrom === void 0 ? null : _ref32$changedFrom, _ref32$timeoutMs = _ref32.timeoutMs, timeoutMs = _ref32$timeoutMs === void 0 ? DROPDOWN_WAIT_TIMEOUT_MS : _ref32$timeoutMs;
          _context33.n = 1;
          return waitForPositiveResultWithAbort(function () {
            var found = readSelectOptions(select);
            if (!found.length) return null;
            if (changedFrom && sameOptionList(found, changedFrom)) return null;
            return found;
          }, timeoutMs, shouldAbort, 100);
        case 1:
          _t7 = _context33.v;
          if (_t7) {
            _context33.n = 2;
            break;
          }
          _t7 = [];
        case 2:
          return _context33.a(2, _t7);
      }
    }, _callee33);
  }));
  return _waitForMultiselectOptions.apply(this, arguments);
}
var isWindowedSearchList = function isWindowedSearchList(container, options) {
  return Boolean(getMultiselectSearchInput(container)) && options.length >= MULTISELECT_SEARCH_PAGE_SIZE;
};
function fetchMultiselectOptions(_x16, _x17, _x18) {
  return _fetchMultiselectOptions.apply(this, arguments);
} // The queries the filter box is asked for one wanted value, most specific first: a known country
// alias ("USA" → United States), a US state / Canadian province code ("TX" → Texas, "ON" → Ontario),
// the value itself; then the longest word of each of those (a server that matches whole strings
// still answers "United" / "Columbia").
function _fetchMultiselectOptions() {
  _fetchMultiselectOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee34(metadata, fieldId, field) {
    var _getLiveGroup3;
    var shouldAbort,
      select,
      options,
      opened,
      windowed,
      _args34 = arguments;
    return autofill_regenerator().w(function (_context34) {
      while (1) switch (_context34.n) {
        case 0:
          shouldAbort = _args34.length > 3 && _args34[3] !== undefined ? _args34[3] : autofill_NEVER_ABORT;
          select = getLiveControl(fieldId) || ((_getLiveGroup3 = getLiveGroup(fieldId, field)) === null || _getLiveGroup3 === void 0 ? void 0 : _getLiveGroup3.querySelector('select'));
          if (select) {
            _context34.n = 1;
            break;
          }
          return _context34.a(2, metadata);
        case 1:
          options = readSelectOptions(select);
          opened = false;
          if (options.length) {
            _context34.n = 4;
            break;
          }
          _context34.n = 2;
          return openMultiselect(select, shouldAbort);
        case 2:
          opened = true;
          _context34.n = 3;
          return waitForMultiselectOptions(select, shouldAbort);
        case 3:
          options = _context34.v;
        case 4:
          windowed = isWindowedSearchList(getMultiselectContainer(select), options);
          if (!opened) {
            _context34.n = 5;
            break;
          }
          _context34.n = 5;
          return closeMultiselect(select);
        case 5:
          if (!windowed) {
            _context34.n = 6;
            break;
          }
          return _context34.a(2, autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
            options: [],
            searchable: true
          }));
        case 6:
          return _context34.a(2, options.length ? autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
            options: options.map(function (option) {
              return option.text;
            })
          }) : metadata);
      }
    }, _callee34);
  }));
  return _fetchMultiselectOptions.apply(this, arguments);
}
function multiselectSearchTerms(want) {
  var text = cleanText(want);
  var terms = [];
  var push = function push(term) {
    var value = cleanText(term);
    if (value && !terms.some(function (known) {
      return known.toLowerCase() === value.toLowerCase();
    })) terms.push(value);
  };
  var alias = COUNTRY_SEARCH_ALIASES.get(text.toLowerCase().replace(/\.+$/, ''));
  if (alias) push(alias);
  var code = /^[A-Za-z]{2}$/.test(text) ? text.toUpperCase() : null;
  if (code && US_STATE_NAME_BY_CODE[code]) push(US_STATE_NAME_BY_CODE[code]);
  if (code && CA_PROVINCE_NAME_BY_CODE[code]) push(CA_PROVINCE_NAME_BY_CODE[code]);
  push(text);
  for (var _i2 = 0, _arr = [].concat(terms); _i2 < _arr.length; _i2++) {
    var term = _arr[_i2];
    var words = term.split(/[\s,/()-]+/).filter(function (word) {
      return word.length >= 3;
    });
    if (words.length > 1) push(autofill_toConsumableArray(words).sort(function (a, b) {
      return b.length - a.length;
    })[0]);
  }
  return terms;
}

// exact → starts with → contains over a SEARCH result — never an embedding guess on a filtered list.
function findOptionLiterally(answer, options) {
  var want = cleanText(answer).toLowerCase();
  if (!want) return null;
  return options.find(function (option) {
    return option.text.toLowerCase() === want;
  }) || options.find(function (option) {
    return option.text.toLowerCase().startsWith(want);
  }) || options.find(function (option) {
    return option.text.toLowerCase().includes(want);
  }) || null;
}

// Type the query into the filter box (keyup is the SPA's re-query trigger) and wait for the rebuilt
// list; the options are the server's matches for `term`.
function queryMultiselect(_x19, _x20, _x21, _x22) {
  return _queryMultiselect.apply(this, arguments);
} // Search the catalogue for the wanted value, one term at a time; null when nothing matches.
function _queryMultiselect() {
  _queryMultiselect = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee35(select, container, term, shouldAbort) {
    var input, before, found;
    return autofill_regenerator().w(function (_context35) {
      while (1) switch (_context35.n) {
        case 0:
          if (container.classList.contains('open')) {
            _context35.n = 1;
            break;
          }
          _context35.n = 1;
          return openMultiselect(select, shouldAbort);
        case 1:
          input = getMultiselectSearchInput(container);
          if (input) {
            _context35.n = 2;
            break;
          }
          return _context35.a(2, null);
        case 2:
          before = readSelectOptions(select);
          fillTextInputWithoutBlur(input, term);
          input.dispatchEvent(new KeyboardEvent('keyup', {
            key: term ? term.slice(-1) : 'Backspace',
            bubbles: true,
            cancelable: true
          }));
          _context35.n = 3;
          return sleep(MULTISELECT_SEARCH_SETTLE_MS);
        case 3:
          _context35.n = 4;
          return waitForMultiselectOptions(select, shouldAbort, {
            changedFrom: before,
            timeoutMs: MULTISELECT_SEARCH_WAIT_MS
          });
        case 4:
          found = _context35.v;
          return _context35.a(2, found.length ? found : readSelectOptions(select));
      }
    }, _callee35);
  }));
  return _queryMultiselect.apply(this, arguments);
}
function searchMultiselectOption(_x23, _x24, _x25, _x26) {
  return _searchMultiselectOption.apply(this, arguments);
}
function _searchMultiselectOption() {
  _searchMultiselectOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee36(select, container, want, shouldAbort) {
    var _iterator8, _step8, term, options, chosen, _t8;
    return autofill_regenerator().w(function (_context36) {
      while (1) switch (_context36.p = _context36.n) {
        case 0:
          _iterator8 = autofill_createForOfIteratorHelper(multiselectSearchTerms(want));
          _context36.p = 1;
          _iterator8.s();
        case 2:
          if ((_step8 = _iterator8.n()).done) {
            _context36.n = 7;
            break;
          }
          term = _step8.value;
          if (!shouldAbort()) {
            _context36.n = 3;
            break;
          }
          return _context36.a(2, null);
        case 3:
          _context36.n = 4;
          return queryMultiselect(select, container, term, shouldAbort);
        case 4:
          options = _context36.v;
          if (options) {
            _context36.n = 5;
            break;
          }
          return _context36.a(2, null);
        case 5:
          chosen = findOptionLiterally(term, options) || findOptionLiterally(want, options);
          if (!chosen) {
            _context36.n = 6;
            break;
          }
          return _context36.a(2, chosen);
        case 6:
          _context36.n = 2;
          break;
        case 7:
          _context36.n = 9;
          break;
        case 8:
          _context36.p = 8;
          _t8 = _context36.v;
          _iterator8.e(_t8);
        case 9:
          _context36.p = 9;
          _iterator8.f();
          return _context36.f(9);
        case 10:
          return _context36.a(2, null);
      }
    }, _callee36, null, [[1, 8, 9, 10]]);
  }));
  return _searchMultiselectOption.apply(this, arguments);
}
function fillMultiselect(_x27, _x28, _x29) {
  return _fillMultiselect.apply(this, arguments);
} // uniform.js radios: the native input (inside `div.radio > span`) still takes the click and fires
// change, which is what toggles the decider-dependent groups.
function _fillMultiselect() {
  _fillMultiselect = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee37(fieldId, field, answer) {
    var _getLiveGroup4;
    var shouldAbort,
      select,
      listed,
      values,
      options,
      container,
      searchable,
      changed,
      _iterator9,
      _step9,
      want,
      chosen,
      pool,
      pluginBox,
      searchInput,
      required,
      _args37 = arguments,
      _t9,
      _t0,
      _t1,
      _t10;
    return autofill_regenerator().w(function (_context37) {
      while (1) switch (_context37.p = _context37.n) {
        case 0:
          shouldAbort = _args37.length > 3 && _args37[3] !== undefined ? _args37[3] : autofill_NEVER_ABORT;
          select = getLiveControl(fieldId) || ((_getLiveGroup4 = getLiveGroup(fieldId, field)) === null || _getLiveGroup4 === void 0 ? void 0 : _getLiveGroup4.querySelector('select'));
          if (select) {
            _context37.n = 1;
            break;
          }
          return _context37.a(2);
        case 1:
          // A single <select> behind the plugin takes ONE value; splitting a free-text answer on commas would
          // shred an option like "Asian (Not Hispanic or Latino)", so only a real list is split.
          listed = Array.isArray(answer) ? answer : select.multiple ? String(answer !== null && answer !== void 0 ? answer : '').split(/\s*[,;|]\s*/) : [String(answer !== null && answer !== void 0 ? answer : '')];
          values = (select.multiple ? listed : listed.slice(0, 1)).map(cleanText).filter(Boolean);
          if (values.length) {
            _context37.n = 2;
            break;
          }
          return _context37.a(2);
        case 2:
          options = readSelectOptions(select);
          if (options.length) {
            _context37.n = 5;
            break;
          }
          _context37.n = 3;
          return openMultiselect(select, shouldAbort);
        case 3:
          _context37.n = 4;
          return waitForMultiselectOptions(select, shouldAbort);
        case 4:
          options = _context37.v;
        case 5:
          container = getMultiselectContainer(select);
          searchable = Boolean(getMultiselectSearchInput(container));
          changed = false;
          _iterator9 = autofill_createForOfIteratorHelper(values);
          _context37.p = 6;
          _iterator9.s();
        case 7:
          if ((_step9 = _iterator9.n()).done) {
            _context37.n = 22;
            break;
          }
          want = _step9.value;
          if (!shouldAbort()) {
            _context37.n = 8;
            break;
          }
          return _context37.a(2);
        case 8:
          if (!searchable) {
            _context37.n = 10;
            break;
          }
          _context37.n = 9;
          return searchMultiselectOption(select, container, want, shouldAbort);
        case 9:
          _t9 = _context37.v;
          _context37.n = 11;
          break;
        case 10:
          _t9 = null;
        case 11:
          chosen = _t9;
          if (chosen) {
            _context37.n = 17;
            break;
          }
          if (!searchable) {
            _context37.n = 14;
            break;
          }
          _context37.n = 12;
          return queryMultiselect(select, container, '', shouldAbort);
        case 12:
          _t1 = _context37.v;
          if (_t1) {
            _context37.n = 13;
            break;
          }
          _t1 = [];
        case 13:
          _t0 = _t1;
          _context37.n = 15;
          break;
        case 14:
          _t0 = options;
        case 15:
          pool = _t0;
          if (searchable && pool.length >= MULTISELECT_SEARCH_PAGE_SIZE) {
            _context37.n = 17;
            break;
          }
          _context37.n = 16;
          return findBestOption(want, pool);
        case 16:
          chosen = _context37.v;
        case 17:
          if (!(!chosen || chosen.element.selected)) {
            _context37.n = 18;
            break;
          }
          return _context37.a(3, 21);
        case 18:
          pluginBox = container === null || container === void 0 ? void 0 : container.querySelector("input[type=\"checkbox\"][value=\"".concat(cssAttrValue(chosen.value), "\"], input[type=\"radio\"][value=\"").concat(cssAttrValue(chosen.value), "\"]"));
          if (!pluginBox) {
            _context37.n = 20;
            break;
          }
          if (container.classList.contains('open')) {
            _context37.n = 19;
            break;
          }
          _context37.n = 19;
          return openMultiselect(select, shouldAbort);
        case 19:
          pluginBox.click();
        case 20:
          // The plugin's own click path already fired the select's change (the SPA's onChange triggers it,
          // then clears the group's error marks). Only a direct option write needs our change — a SECOND
          // change after the plugin's re-runs the page's stickit binding, which reads a plugin-made option
          // as `undefined` and re-marks the filled field "Field is required" (live ltm, 2026-10-16).
          if (!chosen.element.selected) {
            chosen.element.selected = true;
            changed = true;
          }
        case 21:
          _context37.n = 7;
          break;
        case 22:
          _context37.n = 24;
          break;
        case 23:
          _context37.p = 23;
          _t10 = _context37.v;
          _iterator9.e(_t10);
        case 24:
          _context37.p = 24;
          _iterator9.f();
          return _context37.f(24);
        case 25:
          if (changed) select.dispatchEvent(new Event('change', {
            bubbles: true
          }));
          // Leave the filter box empty for the next reader (no keyup: the selection must not be rebuilt away).
          searchInput = searchable ? getMultiselectSearchInput(container) : null;
          if (searchInput && searchInput.value) searchInput.value = '';
          _context37.n = 26;
          return closeMultiselect(select);
        case 26:
          required = requiredAtFillTime(select.closest(FORM_GROUP_SELECTOR), select);
          if (!(required && !Array.from(select.selectedOptions).some(function (option) {
            return cleanText(option.value) !== '';
          }))) {
            _context37.n = 27;
            break;
          }
          throw new Error("ripplehire: no option matched \"".concat(values.join(', '), "\" for ").concat(fieldId));
        case 27:
          return _context37.a(2);
      }
    }, _callee37, null, [[6, 23, 24, 25]]);
  }));
  return _fillMultiselect.apply(this, arguments);
}
function fillRadio(_x30, _x31, _x32) {
  return _fillRadio.apply(this, arguments);
} // Declarations / terms / a lone consent box: a required acknowledgement is always checked (the form
// cannot be submitted otherwise); an optional one follows the answer.
function _fillRadio() {
  _fillRadio = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee38(fieldId, field, answer) {
    var _getLiveGroup$querySe, _getLiveGroup5;
    var radios, inputs, options, chosen;
    return autofill_regenerator().w(function (_context38) {
      while (1) switch (_context38.n) {
        case 0:
          if (!(answer == null)) {
            _context38.n = 1;
            break;
          }
          return _context38.a(2);
        case 1:
          radios = getLiveControls(fieldId).filter(function (input) {
            return input.type === 'radio';
          });
          inputs = radios.length ? radios : Array.from((_getLiveGroup$querySe = (_getLiveGroup5 = getLiveGroup(fieldId, field)) === null || _getLiveGroup5 === void 0 ? void 0 : _getLiveGroup5.querySelectorAll('input[type="radio"]')) !== null && _getLiveGroup$querySe !== void 0 ? _getLiveGroup$querySe : []);
          if (inputs.length) {
            _context38.n = 2;
            break;
          }
          return _context38.a(2);
        case 2:
          options = inputs.map(function (input) {
            return {
              element: input,
              text: radioOptionText(input),
              value: input.value
            };
          });
          _context38.n = 3;
          return findBestOption(normalizeYesNo(answer, options), options);
        case 3:
          chosen = _context38.v;
          if (!(!chosen || chosen.element.checked)) {
            _context38.n = 4;
            break;
          }
          return _context38.a(2);
        case 4:
          chosen.element.click();
          if (!chosen.element.checked) {
            chosen.element.checked = true;
            chosen.element.dispatchEvent(new Event('change', {
              bubbles: true
            }));
          }
        case 5:
          return _context38.a(2);
      }
    }, _callee38);
  }));
  return _fillRadio.apply(this, arguments);
}
function fillConsentCheckbox(_x33, _x34, _x35) {
  return _fillConsentCheckbox.apply(this, arguments);
}
function _fillConsentCheckbox() {
  _fillConsentCheckbox = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee39(fieldId, field, answer) {
    var _getLiveGroup6;
    var checkbox, shouldCheck;
    return autofill_regenerator().w(function (_context39) {
      while (1) switch (_context39.n) {
        case 0:
          checkbox = getLiveControls(fieldId).find(function (input) {
            return input.type === 'checkbox';
          }) || ((_getLiveGroup6 = getLiveGroup(fieldId, field)) === null || _getLiveGroup6 === void 0 ? void 0 : _getLiveGroup6.querySelector('input[type="checkbox"]'));
          if (checkbox) {
            _context39.n = 1;
            break;
          }
          return _context39.a(2);
        case 1:
          shouldCheck = requiredAtFillTime(checkbox.closest(FORM_GROUP_SELECTOR), checkbox) ? true : isAffirmativeAnswer(answer);
          if (!(checkbox.checked === shouldCheck)) {
            _context39.n = 2;
            break;
          }
          return _context39.a(2);
        case 2:
          checkbox.click();
          if (checkbox.checked !== shouldCheck) {
            checkbox.checked = shouldCheck;
            checkbox.dispatchEvent(new Event('change', {
              bubbles: true
            }));
          }
        case 3:
          return _context39.a(2);
      }
    }, _callee39);
  }));
  return _fillConsentCheckbox.apply(this, arguments);
}
function fillCheckboxGroup(_x36, _x37, _x38) {
  return _fillCheckboxGroup.apply(this, arguments);
} // --- Phone (intl-tel-input) ---------------------------------------------------------
function _fillCheckboxGroup() {
  _fillCheckboxGroup = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee40(fieldId, field, answer) {
    var _getLiveGroup$querySe2, _getLiveGroup7;
    var values, checkboxes, inputs, _iterator0, _step0, _loop2, _t11;
    return autofill_regenerator().w(function (_context41) {
      while (1) switch (_context41.p = _context41.n) {
        case 0:
          values = (Array.isArray(answer) ? answer : String(answer !== null && answer !== void 0 ? answer : '').split(/\s*[,;|]\s*/)).map(function (value) {
            return cleanText(value).toLowerCase();
          }).filter(Boolean);
          checkboxes = getLiveControls(fieldId).filter(function (input) {
            return input.type === 'checkbox';
          });
          inputs = checkboxes.length ? checkboxes : Array.from((_getLiveGroup$querySe2 = (_getLiveGroup7 = getLiveGroup(fieldId, field)) === null || _getLiveGroup7 === void 0 ? void 0 : _getLiveGroup7.querySelectorAll('input[type="checkbox"]')) !== null && _getLiveGroup$querySe2 !== void 0 ? _getLiveGroup$querySe2 : []);
          _iterator0 = autofill_createForOfIteratorHelper(inputs);
          _context41.p = 1;
          _loop2 = /*#__PURE__*/autofill_regenerator().m(function _loop2() {
            var checkbox, text, shouldCheck;
            return autofill_regenerator().w(function (_context40) {
              while (1) switch (_context40.n) {
                case 0:
                  checkbox = _step0.value;
                  text = (checkboxStatement(checkbox) || checkbox.value).toLowerCase();
                  shouldCheck = values.some(function (value) {
                    return value === text || value === cleanText(checkbox.value).toLowerCase() || text.includes(value);
                  });
                  if (!(checkbox.checked === shouldCheck)) {
                    _context40.n = 1;
                    break;
                  }
                  return _context40.a(2, 1);
                case 1:
                  checkbox.click();
                  if (checkbox.checked !== shouldCheck) {
                    checkbox.checked = shouldCheck;
                    checkbox.dispatchEvent(new Event('change', {
                      bubbles: true
                    }));
                  }
                case 2:
                  return _context40.a(2);
              }
            }, _loop2);
          });
          _iterator0.s();
        case 2:
          if ((_step0 = _iterator0.n()).done) {
            _context41.n = 5;
            break;
          }
          return _context41.d(autofill_regeneratorValues(_loop2()), 3);
        case 3:
          if (!_context41.v) {
            _context41.n = 4;
            break;
          }
          return _context41.a(3, 4);
        case 4:
          _context41.n = 2;
          break;
        case 5:
          _context41.n = 7;
          break;
        case 6:
          _context41.p = 6;
          _t11 = _context41.v;
          _iterator0.e(_t11);
        case 7:
          _context41.p = 7;
          _iterator0.f();
          return _context41.f(7);
        case 8:
          return _context41.a(2);
      }
    }, _callee40, null, [[1, 6, 7, 8]]);
  }));
  return _fillCheckboxGroup.apply(this, arguments);
}
function parseCountryItem(item) {
  var _item$querySelector;
  return {
    element: item,
    iso2: (item.getAttribute('data-country-code') || '').toLowerCase(),
    dial: item.getAttribute('data-dial-code') || '',
    name: cleanText((_item$querySelector = item.querySelector('.country-name')) === null || _item$querySelector === void 0 ? void 0 : _item$querySelector.textContent)
  };
}

// The country whose dial code prefixes the E.164 digits: the longest code wins; a code shared by
// several countries (+1, +7, +44) keeps the currently selected one when it shares it, else the
// conventional owner, else the list's own `preferred` entry.
function choosePhoneCountry(items, digits) {
  var currentIso2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var matching = items.filter(function (item) {
    return item.dial && digits.startsWith(item.dial);
  });
  if (!matching.length) return null;
  var longest = Math.max.apply(Math, autofill_toConsumableArray(matching.map(function (item) {
    return item.dial.length;
  })));
  var candidates = matching.filter(function (item) {
    return item.dial.length === longest;
  });
  return candidates.find(function (item) {
    return currentIso2 && item.iso2 === currentIso2;
  }) || SHARED_DIAL_PREFERENCE.map(function (iso2) {
    return candidates.find(function (item) {
      return item.iso2 === iso2;
    });
  }).find(Boolean) || candidates.find(function (item) {
    return item.element.classList.contains('preferred');
  }) || candidates[0];
}

// The phone input and its intl-tel-input wrapper, once the plugin has wrapped it (null before).
function findPhoneWidget(fieldId, field) {
  var group = getLiveGroup(fieldId, field);
  var input = getLiveControl(fieldId) || (group === null || group === void 0 ? void 0 : group.querySelector(PHONE_INPUT_SELECTOR));
  var iti = (input === null || input === void 0 ? void 0 : input.closest('.intl-tel-input')) || (group === null || group === void 0 ? void 0 : group.querySelector('.intl-tel-input'));
  return input && iti ? {
    input: input,
    iti: iti
  } : null;
}
function fillPhone(_x39, _x40, _x41) {
  return _fillPhone.apply(this, arguments);
} // The amount beside a currency select: the currency its answer names is picked first (the select may
// still hold the first option, INR, and the page groups the amount by it), then the digits.
function _fillPhone() {
  _fillPhone = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee41(fieldId, field, answer) {
    var _widget;
    var shouldAbort,
      raw,
      group,
      input,
      normalized,
      international,
      digits,
      widget,
      iti,
      national,
      _iti$querySelector,
      items,
      currentIso2,
      chosen,
      flag,
      list,
      _args42 = arguments;
    return autofill_regenerator().w(function (_context42) {
      while (1) switch (_context42.n) {
        case 0:
          shouldAbort = _args42.length > 3 && _args42[3] !== undefined ? _args42[3] : autofill_NEVER_ABORT;
          raw = cleanText(answer);
          group = getLiveGroup(fieldId, field);
          input = getLiveControl(fieldId) || (group === null || group === void 0 ? void 0 : group.querySelector(PHONE_INPUT_SELECTOR));
          if (!(!raw || !input)) {
            _context42.n = 1;
            break;
          }
          return _context42.a(2);
        case 1:
          // "0044 …" is the same international form as "+44 …": the trunk prefix goes before the digits
          // are matched against the dial codes.
          normalized = raw.replace(/^00(?=\d)/, '+');
          international = normalized.startsWith('+');
          digits = normalized.replace(/\D/g, '');
          if (digits) {
            _context42.n = 2;
            break;
          }
          return _context42.a(2);
        case 2:
          // A bare `input.phone` is the plugin's target before it ran: wait for the wrapper (bounded — a
          // tenant without the plugin keeps the plain input and fills as before).
          widget = findPhoneWidget(fieldId, field);
          if (!(!widget && input.matches('input.phone'))) {
            _context42.n = 4;
            break;
          }
          _context42.n = 3;
          return waitForPositiveResultWithAbort(function () {
            return findPhoneWidget(fieldId, field);
          }, PHONE_WIDGET_WAIT_MS, shouldAbort, 100);
        case 3:
          widget = _context42.v;
          if (!shouldAbort()) {
            _context42.n = 4;
            break;
          }
          return _context42.a(2);
        case 4:
          if (widget) input = widget.input;
          iti = ((_widget = widget) === null || _widget === void 0 ? void 0 : _widget.iti) || null;
          national = digits;
          if (!(international && iti)) {
            _context42.n = 7;
            break;
          }
          items = Array.from(iti.querySelectorAll('.country-list li.country')).map(parseCountryItem);
          currentIso2 = (((_iti$querySelector = iti.querySelector('.country-list li.country.active')) === null || _iti$querySelector === void 0 ? void 0 : _iti$querySelector.getAttribute('data-country-code')) || '').toLowerCase();
          chosen = choosePhoneCountry(items, digits, currentIso2);
          if (!chosen) {
            _context42.n = 7;
            break;
          }
          national = digits.slice(chosen.dial.length);
          if (!(chosen.iso2 !== currentIso2)) {
            _context42.n = 7;
            break;
          }
          flag = iti.querySelector('.selected-flag');
          flag === null || flag === void 0 || flag.click();
          _context42.n = 5;
          return sleep(WIDGET_SETTLE_MS);
        case 5:
          chosen.element.click();
          _context42.n = 6;
          return sleep(WIDGET_SETTLE_MS);
        case 6:
          // The widget hides the list on a pick; if it is still open the click did not register.
          list = iti.querySelector('.country-list');
          if (list && !list.classList.contains('hide')) flag === null || flag === void 0 || flag.click();
        case 7:
          if (PHONE_NATIONAL_PATTERN.test(national)) {
            _context42.n = 8;
            break;
          }
          throw new Error("ripplehire: phone \"".concat(raw, "\" does not yield 8\u201315 national digits (got \"").concat(national, "\")"));
        case 8:
          setNativeValue(input, national);
        case 9:
          return _context42.a(2);
      }
    }, _callee41);
  }));
  return _fillPhone.apply(this, arguments);
}
function fillCurrencyAmount(_x42, _x43, _x44) {
  return _fillCurrencyAmount.apply(this, arguments);
} // --- City (Google Places) ---------------------------------------------------------
function _fillCurrencyAmount() {
  _fillCurrencyAmount = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee42(fieldId, field, answer) {
    var _getLiveGroup$querySe3, _getLiveGroup8;
    var select, options, code, option;
    return autofill_regenerator().w(function (_context43) {
      while (1) switch (_context43.n) {
        case 0:
          select = Array.from((_getLiveGroup$querySe3 = (_getLiveGroup8 = getLiveGroup(fieldId, field)) === null || _getLiveGroup8 === void 0 ? void 0 : _getLiveGroup8.querySelectorAll('select')) !== null && _getLiveGroup$querySe3 !== void 0 ? _getLiveGroup$querySe3 : []).find(isCurrencySelect);
          if (select) {
            options = readSelectOptions(select);
            code = amountCurrencyCode(answer, new Set(options.map(function (option) {
              return getCurrencyCode(option.text);
            })));
            option = code ? options.find(function (candidate) {
              return getCurrencyCode(candidate.text) === code;
            }) : null;
            if (option && select.value !== option.value) {
              fillSelectInput(select, option.value);
              select.dispatchEvent(new Event('blur'));
            }
          }
          _context43.n = 1;
          return fillNumeric(fieldId, field, answer);
        case 1:
          return _context43.a(2);
      }
    }, _callee42);
  }));
  return _fillCurrencyAmount.apply(this, arguments);
}
var isLaidOut = function isLaidOut(element) {
  if (!(element !== null && element !== void 0 && element.isConnected)) return false;
  var style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden') return false;
  var container = element.closest('.pac-container');
  return !container || window.getComputedStyle(container).display !== 'none';
};

// The suggestion that carries the answer's other parts ("Chicago, IL, USA" → IL / USA), else the first.
function pickPlaceItem(items, answer) {
  var _cleanText$split$map$ = cleanText(answer).split(',').map(function (part) {
      return cleanText(part).toLowerCase();
    }).filter(Boolean),
    _cleanText$split$map$2 = _toArray(_cleanText$split$map$),
    rest = autofill_arrayLikeToArray(_cleanText$split$map$2).slice(1);
  if (rest.length) {
    var match = items.findIndex(function (item) {
      var text = cleanText(item.textContent).toLowerCase();
      return rest.some(function (part) {
        return text.includes(part);
      });
    });
    if (match >= 0) return match;
  }
  return 0;
}

// Type the city, wait for the suggestions, move the highlight to the wanted row and press Enter —
// the keyboard path is what commits a synthetic pick (a synthetic click on `.pac-item` does not),
// with an event-loop turn between the keys: Google applies the highlight asynchronously, and an
// Enter dispatched in the same tick as the arrow only previews the row's text without selecting it
// (live-verified 2026-09-30 — the page's blur validation then wiped the field).
//
// Commit signal: the page's own place_changed handler (geolocation.js fillInAddress) rebuilds its
// address-component list and, when the place has components, hides the City group's .help-block —
// the only DOM trace of a REAL selection (a previewed row changes the input text too). Tenants
// without that markup fall back to a blur check: the page clears an uncommitted City on blur, so a
// value that survives input.blur() is committed. Free text never stays behind, and an unmatched
// required City fails loudly instead of posting an empty value.
function fillPlaces(_x45, _x46, _x47) {
  return _fillPlaces.apply(this, arguments);
} // --- Dates (bootstrap-datepicker) ----------------------------------------------------
function _fillPlaces() {
  _fillPlaces = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee44(fieldId, field, answer) {
    var _input$closest;
    var shouldAbort,
      want,
      group,
      input,
      required,
      city,
      helpBlock,
      helpSignalAvailable,
      isPreviewText,
      committedValue,
      isPlacesAttached,
      attached,
      findItems,
      typeCity,
      items,
      late,
      index,
      step,
      committed,
      target,
      _i3,
      _arr2,
      type,
      _args45 = arguments;
    return autofill_regenerator().w(function (_context45) {
      while (1) switch (_context45.n) {
        case 0:
          shouldAbort = _args45.length > 3 && _args45[3] !== undefined ? _args45[3] : autofill_NEVER_ABORT;
          want = cleanText(answer);
          group = getLiveGroup(fieldId, field);
          input = getLiveControl(fieldId) || (group === null || group === void 0 ? void 0 : group.querySelector(PLACES_INPUT_SELECTOR));
          if (!(!want || !input)) {
            _context45.n = 1;
            break;
          }
          return _context45.a(2);
        case 1:
          required = requiredAtFillTime(group, input);
          city = cleanText(want.split(',')[0]); // The page's place_changed handler re-adds `hidden` to this help-block on every real selection; a
          // previous commit (a re-fill, the résumé-parser prefill) may have left it there, so the flag is
          // cleared first and its return is the signal. The div is the empty validation placeholder — no
          // visible change.
          helpBlock = ((_input$closest = input.closest('.input_field, .form-group')) === null || _input$closest === void 0 ? void 0 : _input$closest.querySelector('.help-block')) || null;
          if (helpBlock) helpBlock.classList.remove('hidden');
          helpSignalAvailable = Boolean(helpBlock);
          isPreviewText = function isPreviewText(value) {
            return !value || value.toLowerCase() === city.toLowerCase();
          };
          committedValue = function committedValue() {
            var value = cleanText(input.value);
            if (isPreviewText(value)) return null;
            if (helpSignalAvailable) return helpBlock.classList.contains('hidden') ? value : null;
            return value;
          }; // Google's autocomplete attaches AFTER the form renders (the Maps script loads asynchronously and
          // marks the input `pac-target-input` / creates its `.pac-container` when it constructs): a City filled
          // in the first second of a run finds nothing listening and would post empty. Wait for the widget,
          // then type; if it only appears after the typing, type again so it fetches predictions.
          isPlacesAttached = function isPlacesAttached() {
            return input.classList.contains('pac-target-input') || Boolean(document.querySelector('.pac-container'));
          };
          _context45.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return isPlacesAttached() ? true : null;
          }, PLACES_ATTACH_WAIT_MS, shouldAbort, 100);
        case 2:
          attached = _context45.v;
          if (!shouldAbort()) {
            _context45.n = 3;
            break;
          }
          return _context45.a(2);
        case 3:
          findItems = function findItems() {
            var found = Array.from(document.querySelectorAll(PAC_ITEM_SELECTOR)).filter(isLaidOut);
            return found.length ? found : null;
          };
          typeCity = /*#__PURE__*/function () {
            var _ref33 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee43() {
              return autofill_regenerator().w(function (_context44) {
                while (1) switch (_context44.n) {
                  case 0:
                    _context44.n = 1;
                    return clickLikeHuman(input, {
                      shouldAbort: shouldAbort
                    });
                  case 1:
                    if (cleanText(input.value)) fillTextInput(input, '');
                    _context44.n = 2;
                    return fillTextInputLikeHuman(input, city, autofill_objectSpread(autofill_objectSpread({}, PLACES_TYPING_OPTIONS), {}, {
                      blur: false,
                      shouldAbort: shouldAbort
                    }));
                  case 2:
                    return _context44.a(2);
                }
              }, _callee43);
            }));
            return function typeCity() {
              return _ref33.apply(this, arguments);
            };
          }();
          _context45.n = 4;
          return typeCity();
        case 4:
          _context45.n = 5;
          return waitForPositiveResultWithAbort(findItems, PLACES_SUGGESTION_WAIT_MS, shouldAbort, 100);
        case 5:
          items = _context45.v;
          if (!(!items && !attached && !shouldAbort())) {
            _context45.n = 9;
            break;
          }
          _context45.n = 6;
          return waitForPositiveResultWithAbort(function () {
            return isPlacesAttached() ? true : null;
          }, PLACES_ATTACH_WAIT_MS, shouldAbort, 100);
        case 6:
          late = _context45.v;
          if (!(late && !shouldAbort())) {
            _context45.n = 9;
            break;
          }
          _context45.n = 7;
          return typeCity();
        case 7:
          _context45.n = 8;
          return waitForPositiveResultWithAbort(findItems, PLACES_SUGGESTION_WAIT_MS, shouldAbort, 100);
        case 8:
          items = _context45.v;
        case 9:
          if (!shouldAbort()) {
            _context45.n = 10;
            break;
          }
          return _context45.a(2);
        case 10:
          if (items) {
            _context45.n = 12;
            break;
          }
          setNativeValue(input, '');
          if (!required) {
            _context45.n = 11;
            break;
          }
          throw new Error("ripplehire: no Google Places suggestion for \"".concat(want, "\""));
        case 11:
          return _context45.a(2);
        case 12:
          index = pickPlaceItem(items, want);
          _context45.n = 13;
          return sleep(PLACES_KEY_GAP_MS);
        case 13:
          step = 0;
        case 14:
          if (!(step <= index)) {
            _context45.n = 17;
            break;
          }
          if (!shouldAbort()) {
            _context45.n = 15;
            break;
          }
          return _context45.a(2);
        case 15:
          dispatchKey(input, 'ArrowDown');
          _context45.n = 16;
          return sleep(PLACES_KEY_GAP_MS);
        case 16:
          step += 1;
          _context45.n = 14;
          break;
        case 17:
          dispatchKey(input, 'Enter');
          _context45.n = 18;
          return waitForPositiveResultWithAbort(committedValue, PLACES_COMMIT_WAIT_MS, shouldAbort, 100);
        case 18:
          committed = _context45.v;
          if (!shouldAbort()) {
            _context45.n = 19;
            break;
          }
          return _context45.a(2);
        case 19:
          if (committed) {
            _context45.n = 21;
            break;
          }
          // Fallback: a pointer sequence on the row (commits on real input; harmless when it does not).
          target = items[index];
          if (!(target !== null && target !== void 0 && target.isConnected)) {
            _context45.n = 21;
            break;
          }
          for (_i3 = 0, _arr2 = ['mousedown', 'mouseup', 'click']; _i3 < _arr2.length; _i3++) {
            type = _arr2[_i3];
            target.dispatchEvent(new MouseEvent(type, {
              bubbles: true,
              cancelable: true,
              button: 0
            }));
          }
          _context45.n = 20;
          return waitForPositiveResultWithAbort(committedValue, PLACES_COMMIT_WAIT_MS / 2, shouldAbort, 100);
        case 20:
          committed = _context45.v;
        case 21:
          if (!shouldAbort()) {
            _context45.n = 22;
            break;
          }
          return _context45.a(2);
        case 22:
          if (!(committed && !helpSignalAvailable)) {
            _context45.n = 26;
            break;
          }
          _context45.n = 23;
          return sleep(PLACES_PLACE_CHANGED_SETTLE_MS);
        case 23:
          if (!shouldAbort()) {
            _context45.n = 24;
            break;
          }
          return _context45.a(2);
        case 24:
          input.blur();
          _context45.n = 25;
          return sleep(PLACES_BLUR_CHECK_MS);
        case 25:
          if (isPreviewText(cleanText(input.value))) committed = null;
        case 26:
          if (committed) {
            _context45.n = 27;
            break;
          }
          setNativeValue(input, '');
          if (!required) {
            _context45.n = 27;
            break;
          }
          throw new Error("ripplehire: could not commit a Google Places suggestion for \"".concat(want, "\""));
        case 27:
          return _context45.a(2);
      }
    }, _callee44);
  }));
  return _fillPlaces.apply(this, arguments);
}
var autofill_pad2 = function pad2(value) {
  return String(value).padStart(2, '0');
};

// bootstrap-datepicker tokens: d/dd day, m/mm month number, M/MM month name, yy/yyyy year.
function formatRippleHireDate(_ref6) {
  var year = _ref6.year,
    month = _ref6.month,
    day = _ref6.day;
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_DATE_FORMAT;
  var tokens = {
    yyyy: String(year),
    yy: String(year).slice(-2),
    MM: MONTH_LONG[month - 1],
    M: MONTH_SHORT[month - 1],
    mm: autofill_pad2(month),
    m: String(month),
    dd: autofill_pad2(day),
    d: String(day)
  };
  return format.replace(/yyyy|yy|MM|M|mm|m|dd|d/g, function (token) {
    var _tokens$token;
    return (_tokens$token = tokens[token]) !== null && _tokens$token !== void 0 ? _tokens$token : token;
  });
}
function datepickerFormat(input) {
  var explicit = input.getAttribute('data-date-format');
  if (explicit) return explicit;
  var placeholder = cleanText(input.placeholder);
  // "DD/MM/YYYY"-style placeholders spell digits; only lowercase them when they hold no other letters.
  if (placeholder && /^[dmyDMY\s./-]+$/.test(placeholder) && /y/i.test(placeholder)) return placeholder.toLowerCase();
  return DEFAULT_DATE_FORMAT;
}
function parseCalendarHeader(text) {
  var clean = cleanText(text);
  var yearOnly = clean.match(/^(\d{4})$/);
  if (yearOnly) return {
    year: Number(yearOnly[1]),
    month: null
  };
  var parsed = new Date("".concat(clean, " 1"));
  if (Number.isNaN(parsed.getTime())) return null;
  return {
    year: parsed.getFullYear(),
    month: parsed.getMonth() + 1
  };
}
function fillDatepicker(_x48, _x49, _x50) {
  return _fillDatepicker.apply(this, arguments);
} // --- Files (Jasny fileinput) ---------------------------------------------------------
function _fillDatepicker() {
  _fillDatepicker = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee45(fieldId, field, answer) {
    var shouldAbort,
      raw,
      group,
      input,
      parts,
      date,
      formatted,
      icon,
      calendar,
      step,
      _calendar$querySelect,
      _shown$month,
      shown,
      diff,
      nav,
      dayCell,
      _args46 = arguments;
    return autofill_regenerator().w(function (_context46) {
      while (1) switch (_context46.n) {
        case 0:
          shouldAbort = _args46.length > 3 && _args46[3] !== undefined ? _args46[3] : autofill_NEVER_ABORT;
          raw = cleanText(answer);
          group = getLiveGroup(fieldId, field);
          input = getLiveControl(fieldId) || (group === null || group === void 0 ? void 0 : group.querySelector(DATE_INPUT_SELECTOR));
          if (!(!raw || !input)) {
            _context46.n = 1;
            break;
          }
          return _context46.a(2);
        case 1:
          // Non-date answers ("N/A", "Immediately") parse to nulls and leave the picker untouched.
          parts = parseProfileDate(raw);
          if (parts !== null && parts !== void 0 && parts.year) {
            _context46.n = 2;
            break;
          }
          return _context46.a(2);
        case 2:
          date = {
            year: Number(parts.year),
            month: Number(parts.month) || 1,
            day: Number(parts.day) || 1
          }; // (1) Value write in the widget's own format — the form posts the input value as-is.
          formatted = formatRippleHireDate(date, datepickerFormat(input));
          setNativeValue(input, formatted);
          _context46.n = 3;
          return sleep(WIDGET_SETTLE_MS);
        case 3:
          if (!(cleanText(input.value) === formatted)) {
            _context46.n = 4;
            break;
          }
          return _context46.a(2);
        case 4:
          // (2) Otherwise drive the calendar through the icon button.
          icon = (group === null || group === void 0 ? void 0 : group.querySelector('.date-icon button')) || input;
          _context46.n = 5;
          return clickLikeHuman(icon, {
            shouldAbort: shouldAbort
          });
        case 5:
          _context46.n = 6;
          return waitForPositiveResultWithAbort(function () {
            return Array.from(document.querySelectorAll('.datepicker-days')).find(isShown) || null;
          }, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort, 100);
        case 6:
          calendar = _context46.v;
          if (calendar) {
            _context46.n = 7;
            break;
          }
          throw new Error("ripplehire: could not set the date \"".concat(raw, "\""));
        case 7:
          step = 0;
        case 8:
          if (!(step < DATEPICKER_MAX_MONTH_STEPS)) {
            _context46.n = 14;
            break;
          }
          if (!shouldAbort()) {
            _context46.n = 9;
            break;
          }
          return _context46.a(2);
        case 9:
          shown = parseCalendarHeader((_calendar$querySelect = calendar.querySelector('.datepicker-switch')) === null || _calendar$querySelect === void 0 ? void 0 : _calendar$querySelect.textContent);
          if (shown) {
            _context46.n = 10;
            break;
          }
          return _context46.a(3, 14);
        case 10:
          diff = (date.year - shown.year) * 12 + (date.month - ((_shown$month = shown.month) !== null && _shown$month !== void 0 ? _shown$month : date.month));
          if (!(diff === 0)) {
            _context46.n = 11;
            break;
          }
          return _context46.a(3, 14);
        case 11:
          nav = calendar.querySelector(diff > 0 ? '.next' : '.prev');
          if (nav) {
            _context46.n = 12;
            break;
          }
          return _context46.a(3, 14);
        case 12:
          nav.click();
          _context46.n = 13;
          return sleep(60);
        case 13:
          step += 1;
          _context46.n = 8;
          break;
        case 14:
          dayCell = Array.from(calendar.querySelectorAll('td.day')).find(function (cell) {
            return !cell.classList.contains('old') && !cell.classList.contains('new') && Number(cleanText(cell.textContent)) === date.day;
          });
          if (dayCell) {
            _context46.n = 15;
            break;
          }
          throw new Error("ripplehire: could not set the date \"".concat(raw, "\""));
        case 15:
          dayCell.click();
          _context46.n = 16;
          return sleep(WIDGET_SETTLE_MS);
        case 16:
          if (cleanText(input.value)) {
            _context46.n = 17;
            break;
          }
          throw new Error("ripplehire: the date picker did not take \"".concat(raw, "\""));
        case 17:
          return _context46.a(2);
      }
    }, _callee45);
  }));
  return _fillDatepicker.apply(this, arguments);
}
var isFileAnswer = function isFileAnswer(answer) {
  return Boolean(answer) && autofill_typeof(answer) === 'object' && answer.type === 'file' && Boolean(answer.base64);
};

// The portal rejects names with characters outside letters / digits / . _ - ; keep the extension.
function sanitizeFileName(fileName) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'document.pdf';
  var clean = String(fileName || '').trim().replace(/[^A-Za-z0-9._-]+/g, '_').replace(/^_+|_+$/g, '');
  return clean && /\./.test(clean) ? clean : fallback;
}
var base64Bytes = function base64Bytes(base64) {
  var clean = String(base64 || '').replace(/[^A-Za-z0-9+/=]/g, '');
  var padding = (clean.match(/=+$/) || [''])[0].length;
  return Math.max(0, Math.floor(clean.length * 3 / 4) - padding);
};

// A cover letter can still arrive as TEXT on the panel's Attach path (an older background, or a
// persisted "Basic Cover Letter" selection): the slot takes documents only, so ask the background for
// the same letter rendered as a PDF before giving up.
function coerceCoverLetterFile(_x51, _x52, _x53) {
  return _coerceCoverLetterFile.apply(this, arguments);
}
function _coerceCoverLetterFile() {
  _coerceCoverLetterFile = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee46(fieldId, answer, group) {
    var label, rendered, _t12;
    return autofill_regenerator().w(function (_context47) {
      while (1) switch (_context47.p = _context47.n) {
        case 0:
          if (!isFileAnswer(answer)) {
            _context47.n = 1;
            break;
          }
          return _context47.a(2, answer);
        case 1:
          label = group ? getGroupLabel(group) : '';
          if (!(typeof answer !== 'string' || !/cover/i.test(fieldId) && !/cover/i.test(label))) {
            _context47.n = 2;
            break;
          }
          return _context47.a(2, null);
        case 2:
          _context47.p = 2;
          _context47.n = 3;
          return getCoverLetterForAutofill({
            coverLetterOutput: 'file'
          });
        case 3:
          rendered = _context47.v;
          return _context47.a(2, isFileAnswer(rendered) ? rendered : null);
        case 4:
          _context47.p = 4;
          _t12 = _context47.v;
          return _context47.a(2, null);
      }
    }, _callee46, null, [[2, 4]]);
  }));
  return _coerceCoverLetterFile.apply(this, arguments);
}
function fillRippleHireFile(_x54, _x55, _x56) {
  return _fillRippleHireFile.apply(this, arguments);
} // --- Résumé (CV-parser popup) ------------------------------------------------------------
//
// CV-parser tenants (citiustech, live-inspected 2026-10-23) have no file input on the form: the
// Résumé group holds `button#openResume` ("Upload"), an empty `p.resumeFileName` and a hidden
// `button#changeResumeFile`. The button opens a Bootstrap modal (`.resumeUpload`) whose drop zone
// holds `input#resumeDrag[type=file]`; a change there is checked one second later (doc / docx / pdf /
// rtf, ≤ 10 MB) and either previews the file (`.file-preview`) and keeps it on the page's model, or
// shows `.upload-error`. The modal's Submit (`#resumeSumbmit`) then closes it, CLEARS every input,
// select, checkbox and radio of the form, swaps Upload for "Change File", masks the page and posts the
// file to `parseResume`; on success it refills the form from the parse and names the file
// (`a#parseResumeFileName`), on failure it toasts and shows Upload again. Until 2026-10-23 the popup
// was "human-only": every application was filled without a résumé and Submit answered "Please upload
// resume" (each of the 7 CitiusTech forms the fleet reached, 2026-10-15 → 22).
function _fillRippleHireFile() {
  _fillRippleHireFile = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee47(fieldId, field, answer) {
    var _getLiveControl2;
    var shouldAbort,
      group,
      fileAnswer,
      input,
      fileName,
      widget,
      settled,
      _args48 = arguments;
    return autofill_regenerator().w(function (_context48) {
      while (1) switch (_context48.n) {
        case 0:
          shouldAbort = _args48.length > 3 && _args48[3] !== undefined ? _args48[3] : autofill_NEVER_ABORT;
          group = getLiveGroup(fieldId, field);
          _context48.n = 1;
          return coerceCoverLetterFile(fieldId, answer, group);
        case 1:
          fileAnswer = _context48.v;
          if (!shouldAbort()) {
            _context48.n = 2;
            break;
          }
          return _context48.a(2);
        case 2:
          if (fileAnswer) {
            _context48.n = 3;
            break;
          }
          throw new Error(typeof answer === 'string' ? 'ripplehire: this field only accepts a document — the cover letter came back as text' : "ripplehire: no file to upload for ".concat(fieldId));
        case 3:
          input = (((_getLiveControl2 = getLiveControl(fieldId)) === null || _getLiveControl2 === void 0 ? void 0 : _getLiveControl2.type) === 'file' ? getLiveControl(fieldId) : null) || (group === null || group === void 0 ? void 0 : group.querySelector('input[type="file"]'));
          if (input) {
            _context48.n = 4;
            break;
          }
          throw new Error("ripplehire: file input for ".concat(fieldId, " not found"));
        case 4:
          if (!(base64Bytes(fileAnswer.base64) > MAX_FILE_BYTES)) {
            _context48.n = 5;
            break;
          }
          throw new Error("ripplehire: \"".concat(fileAnswer.fileName, "\" exceeds the portal's 3 MB file limit"));
        case 5:
          fileName = sanitizeFileName(fileAnswer.fileName, fileAnswer.mimeType === 'application/pdf' ? 'document.pdf' : 'document.docx');
          fillFileInput(input, fileName, fileAnswer.base64, fileAnswer.mimeType);

          // Jasny swaps `.fileinput-new` for `.fileinput-exists` and shows the name; without the widget the
          // native input's own file list is the signal.
          widget = input.closest(FILEINPUT_WIDGET_SELECTOR);
          _context48.n = 6;
          return waitForPositiveResultWithAbort(function () {
            var _input$files;
            if (widget) {
              var _widget$querySelector;
              var shown = cleanText((_widget$querySelector = widget.querySelector('.fileinput-filename')) === null || _widget$querySelector === void 0 ? void 0 : _widget$querySelector.textContent);
              return widget.classList.contains('fileinput-exists') && shown ? shown : null;
            }
            return (_input$files = input.files) !== null && _input$files !== void 0 && _input$files.length ? fileName : null;
          }, FILE_SETTLE_WAIT_MS, shouldAbort, 100);
        case 6:
          settled = _context48.v;
          if (!shouldAbort()) {
            _context48.n = 7;
            break;
          }
          return _context48.a(2);
        case 7:
          if (settled) {
            _context48.n = 8;
            break;
          }
          throw new Error("ripplehire: the file widget did not register \"".concat(fileName, "\""));
        case 8:
          return _context48.a(2);
      }
    }, _callee47);
  }));
  return _fillRippleHireFile.apply(this, arguments);
}
var isPageMasked = function isPageMasked() {
  var _document$body;
  return Boolean(((_document$body = document.body) === null || _document$body === void 0 ? void 0 : _document$body.classList.contains('masked')) || document.querySelector('body > .loadmask'));
};
function getResumePopupGroup(fallback) {
  var _getVisibleForm4;
  var control = (_getVisibleForm4 = getVisibleForm()) === null || _getVisibleForm4 === void 0 ? void 0 : _getVisibleForm4.querySelector("".concat(RESUME_POPUP_UPLOAD_SELECTOR, ", ").concat(RESUME_POPUP_CHANGE_SELECTOR));
  return (control === null || control === void 0 ? void 0 : control.closest(FORM_GROUP_SELECTOR)) || fallback || null;
}

// A closed Bootstrap modal can keep its markup under a display:none `.modal`: the dialog's own
// computed style does not say so, its ancestors' do.
function isShownInTree(element) {
  if (!isShown(element)) return false;
  for (var node = element.parentElement; node && node !== document.body; node = node.parentElement) {
    if (window.getComputedStyle(node).display === 'none') return false;
  }
  return true;
}
function getOpenResumePopup() {
  return Array.from(document.querySelectorAll(RESUME_POPUP_DIALOG_SELECTOR)).find(isShownInTree) || null;
}
function readResumePopupError(popup) {
  var error = popup === null || popup === void 0 ? void 0 : popup.querySelector('.upload-error');
  return error && isShown(error) ? cleanText(error.textContent) : '';
}

// attached = the parser named the file, or "Change File" shows with the page settled; pending = the
// popup is open or the parse is running; empty = Upload shows (never uploaded, or the parse failed).
function readResumePopupState(group) {
  if (group !== null && group !== void 0 && group.querySelector(RESUME_PARSED_LINK_SELECTOR)) return 'attached';
  if (isPageMasked() || getOpenResumePopup()) return 'pending';
  var change = group === null || group === void 0 ? void 0 : group.querySelector(RESUME_POPUP_CHANGE_SELECTOR);
  return change && isShown(change) ? 'attached' : 'empty';
}

// One pass through the popup: Upload → pick the file → the drop zone's check → Submit → the parse.
// Resolves 'attached', or a reason the résumé did not land.
function uploadThroughResumePopup(_x57, _x58, _x59, _x60) {
  return _uploadThroughResumePopup.apply(this, arguments);
}
function _uploadThroughResumePopup() {
  _uploadThroughResumePopup = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee48(field, fileName, fileAnswer, shouldAbort) {
    var _getResumePopupGroup;
    var upload, popup, check, submit, back, state;
    return autofill_regenerator().w(function (_context49) {
      while (1) switch (_context49.n) {
        case 0:
          upload = (_getResumePopupGroup = getResumePopupGroup(field)) === null || _getResumePopupGroup === void 0 ? void 0 : _getResumePopupGroup.querySelector(RESUME_POPUP_UPLOAD_SELECTOR);
          if (!(!upload || !isShown(upload))) {
            _context49.n = 1;
            break;
          }
          return _context49.a(2, 'no Upload button');
        case 1:
          _context49.n = 2;
          return clickLikeHuman(upload, {
            shouldAbort: shouldAbort
          });
        case 2:
          _context49.n = 3;
          return waitForPositiveResultWithAbort(function () {
            var dialog = getOpenResumePopup();
            return dialog !== null && dialog !== void 0 && dialog.querySelector(RESUME_POPUP_INPUT_SELECTOR) ? dialog : null;
          }, RESUME_POPUP_OPEN_WAIT_MS, shouldAbort, 100);
        case 3:
          popup = _context49.v;
          if (!shouldAbort()) {
            _context49.n = 4;
            break;
          }
          return _context49.a(2, 'aborted');
        case 4:
          if (popup) {
            _context49.n = 5;
            break;
          }
          return _context49.a(2, 'the upload window did not open');
        case 5:
          fillFileInput(popup.querySelector(RESUME_POPUP_INPUT_SELECTOR), fileName, fileAnswer.base64, fileAnswer.mimeType);
          _context49.n = 6;
          return waitForPositiveResultWithAbort(function () {
            if (popup.querySelector('.file-preview')) return 'accepted';
            var error = readResumePopupError(popup);
            return error ? "refused: ".concat(error) : null;
          }, RESUME_POPUP_ACCEPT_WAIT_MS, shouldAbort, 100);
        case 6:
          check = _context49.v;
          if (!shouldAbort()) {
            _context49.n = 7;
            break;
          }
          return _context49.a(2, 'aborted');
        case 7:
          submit = check === 'accepted' ? popup.querySelector(RESUME_POPUP_SUBMIT_SELECTOR) : null;
          if (submit) {
            _context49.n = 9;
            break;
          }
          back = popup.querySelector(RESUME_POPUP_BACK_SELECTOR);
          if (!back) {
            _context49.n = 8;
            break;
          }
          _context49.n = 8;
          return clickLikeHuman(back, {
            shouldAbort: shouldAbort
          });
        case 8:
          return _context49.a(2, check === 'accepted' ? 'no Submit in the upload window' : check || 'the upload window did not take the file');
        case 9:
          _context49.n = 10;
          return clickLikeHuman(submit, {
            shouldAbort: shouldAbort
          });
        case 10:
          _context49.n = 11;
          return waitForPositiveResultWithAbort(function () {
            var error = readResumePopupError(getOpenResumePopup());
            if (error) return "refused: ".concat(error);
            var current = readResumePopupState(getResumePopupGroup(field));
            return current === 'pending' ? null : current;
          }, RESUME_PARSE_WAIT_MS, shouldAbort, 200);
        case 11:
          state = _context49.v;
          if (!shouldAbort()) {
            _context49.n = 12;
            break;
          }
          return _context49.a(2, 'aborted');
        case 12:
          if (!(state !== 'attached')) {
            _context49.n = 14;
            break;
          }
          if (!(state === 'empty')) {
            _context49.n = 13;
            break;
          }
          return _context49.a(2, 'the résumé parser refused it');
        case 13:
          return _context49.a(2, state || 'no answer from the résumé parser');
        case 14:
          _context49.n = 15;
          return sleep(RESUME_PARSE_SETTLE_MS);
        case 15:
          return _context49.a(2, 'attached');
      }
    }, _callee48);
  }));
  return _uploadThroughResumePopup.apply(this, arguments);
}
function fillRippleHireResumePopup(_x61, _x62, _x63) {
  return _fillRippleHireResumePopup.apply(this, arguments);
} // --- Skills (jquery.tokeninput) -------------------------------------------------------
function _fillRippleHireResumePopup() {
  _fillRippleHireResumePopup = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee49(fieldId, field, answer) {
    var shouldAbort,
      fileName,
      outcome,
      attempt,
      _args50 = arguments;
    return autofill_regenerator().w(function (_context50) {
      while (1) switch (_context50.n) {
        case 0:
          shouldAbort = _args50.length > 3 && _args50[3] !== undefined ? _args50[3] : autofill_NEVER_ABORT;
          if (isFileAnswer(answer)) {
            _context50.n = 1;
            break;
          }
          throw new Error("ripplehire: no r\xE9sum\xE9 file to upload for ".concat(fieldId));
        case 1:
          if (!(readResumePopupState(getResumePopupGroup(field)) === 'attached')) {
            _context50.n = 2;
            break;
          }
          return _context50.a(2);
        case 2:
          if (!(base64Bytes(answer.base64) > MAX_RESUME_POPUP_BYTES)) {
            _context50.n = 3;
            break;
          }
          throw new Error("ripplehire: \"".concat(answer.fileName, "\" exceeds the r\xE9sum\xE9 upload's 10 MB limit"));
        case 3:
          fileName = sanitizeFileName(answer.fileName, answer.mimeType === 'application/pdf' ? 'resume.pdf' : 'resume.docx');
          outcome = null;
          attempt = 0;
        case 4:
          if (!(attempt < RESUME_POPUP_ATTEMPTS)) {
            _context50.n = 7;
            break;
          }
          _context50.n = 5;
          return uploadThroughResumePopup(field, fileName, answer, shouldAbort);
        case 5:
          outcome = _context50.v;
          if (!(shouldAbort() || outcome === 'attached')) {
            _context50.n = 6;
            break;
          }
          return _context50.a(2);
        case 6:
          attempt += 1;
          _context50.n = 4;
          break;
        case 7:
          throw new Error("ripplehire: the r\xE9sum\xE9 \"".concat(fileName, "\" did not land (").concat(outcome, ")"));
        case 8:
          return _context50.a(2);
      }
    }, _callee49);
  }));
  return _fillRippleHireResumePopup.apply(this, arguments);
}
function fillTokenInput(_x64, _x65, _x66) {
  return _fillTokenInput.apply(this, arguments);
} // --- Answer-type handlers --------------------------------------------------
function _fillTokenInput() {
  _fillTokenInput = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee50(fieldId, field, answer) {
    var shouldAbort,
      values,
      group,
      wrapper,
      input,
      _iterator1,
      _step1,
      value,
      suggestion,
      _args51 = arguments,
      _t13;
    return autofill_regenerator().w(function (_context51) {
      while (1) switch (_context51.p = _context51.n) {
        case 0:
          shouldAbort = _args51.length > 3 && _args51[3] !== undefined ? _args51[3] : autofill_NEVER_ABORT;
          values = (Array.isArray(answer) ? answer : String(answer !== null && answer !== void 0 ? answer : '').split(/\s*[,;|]\s*/)).map(cleanText).filter(Boolean);
          group = getLiveGroup(fieldId, field);
          wrapper = (group === null || group === void 0 ? void 0 : group.querySelector(TOKEN_INPUT_WRAPPER_SELECTOR)) || group;
          input = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector('.token-input-list input[type="text"], ul.token-input-list input');
          if (!(!input || !values.length)) {
            _context51.n = 1;
            break;
          }
          return _context51.a(2);
        case 1:
          _iterator1 = autofill_createForOfIteratorHelper(values);
          _context51.p = 2;
          _iterator1.s();
        case 3:
          if ((_step1 = _iterator1.n()).done) {
            _context51.n = 11;
            break;
          }
          value = _step1.value;
          if (!shouldAbort()) {
            _context51.n = 4;
            break;
          }
          return _context51.a(2);
        case 4:
          _context51.n = 5;
          return clickLikeHuman(input, {
            shouldAbort: shouldAbort
          });
        case 5:
          _context51.n = 6;
          return fillTextInputLikeHuman(input, value, {
            blur: false,
            shouldAbort: shouldAbort
          });
        case 6:
          _context51.n = 7;
          return waitForPositiveResultWithAbort(function () {
            return Array.from(document.querySelectorAll('.token-input-dropdown li')).find(function (li) {
              return !/token-input-searching|token-input-dropdown-item-notfound/i.test(li.className) && cleanText(li.textContent);
            }) || null;
          }, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort, 100);
        case 7:
          suggestion = _context51.v;
          if (!suggestion) {
            _context51.n = 9;
            break;
          }
          suggestion.click();
          _context51.n = 8;
          return sleep(WIDGET_SETTLE_MS);
        case 8:
          _context51.n = 10;
          break;
        case 9:
          dispatchKey(input, 'Enter');
        case 10:
          _context51.n = 3;
          break;
        case 11:
          _context51.n = 13;
          break;
        case 12:
          _context51.p = 12;
          _t13 = _context51.v;
          _iterator1.e(_t13);
        case 13:
          _context51.p = 13;
          _iterator1.f();
          return _context51.f(13);
        case 14:
          return _context51.a(2);
      }
    }, _callee50, null, [[2, 12, 13, 14]]);
  }));
  return _fillTokenInput.apply(this, arguments);
}
function createBackendAnswerHandler(answerType) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return autofill_objectSpread({
    isMetadataReady: function isMetadataReady() {
      return true;
    },
    fetchMissingMetadata: function () {
      var _fetchMissingMetadata = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee2(metadata) {
        return autofill_regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, metadata);
          }
        }, _callee2);
      }));
      function fetchMissingMetadata(_x67) {
        return _fetchMissingMetadata.apply(this, arguments);
      }
      return fetchMissingMetadata;
    }(),
    generateAnswer: function generateAnswer(question, metadata, fieldId) {
      var _metadata$options, _metadata$referenceQa;
      return getAnswer(question, answerType, (_metadata$options = metadata.options) !== null && _metadata$options !== void 0 ? _metadata$options : [], metadata.constraints, fieldId, true, (_metadata$referenceQa = metadata.referenceQaPairs) !== null && _metadata$referenceQa !== void 0 ? _metadata$referenceQa : []);
    }
  }, overrides);
}
var SKIP_ANSWER = {
  type: 'skip'
};

// bootstrap-multiselect dropdowns load their options on first open (detection leaves `options`
// null). A WINDOWED list (fetchMultiselectOptions → `searchable`) is answered as free text — the
// profile's state / country — and searched for at fill time; a full list is offered as the choices.
var lazySelectMetadataFor = function lazySelectMetadataFor(answerType) {
  return {
    isMetadataReady: function isMetadataReady(metadata) {
      return Array.isArray(metadata.options);
    },
    fetchMissingMetadata: function fetchMissingMetadata(metadata, fieldId, _question, field) {
      var _ref7 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
        _ref7$shouldAbort = _ref7.shouldAbort,
        shouldAbort = _ref7$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref7$shouldAbort;
      return fetchMultiselectOptions(metadata, fieldId, field, shouldAbort);
    },
    generateAnswer: function generateAnswer(question, metadata, fieldId) {
      var _metadata$options2, _metadata$referenceQa2;
      return getAnswer(question, metadata.searchable ? 'text' : answerType, (_metadata$options2 = metadata.options) !== null && _metadata$options2 !== void 0 ? _metadata$options2 : [], metadata.constraints, fieldId, true, (_metadata$referenceQa2 = metadata.referenceQaPairs) !== null && _metadata$referenceQa2 !== void 0 ? _metadata$referenceQa2 : []);
    }
  };
};
var ANSWER_TYPE_HANDLERS = new Map([['text', createBackendAnswerHandler('text')],
// Radios, native selects and checkbox groups carry their options from detection; a
// bootstrap-multiselect dropdown loads its options on first open, so both select answer types can
// probe them (detection leaves `options` null for those).
['single-select', createBackendAnswerHandler('single-select', lazySelectMetadataFor('single-select'))], ['multi-select', createBackendAnswerHandler('multi-select', lazySelectMetadataFor('multi-select'))], ['resume', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee3(metadata) {
      return autofill_regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            return _context3.a(2, metadata);
        }
      }, _callee3);
    }));
    function fetchMissingMetadata(_x68) {
      return _fetchMissingMetadata2.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee4() {
      var _yield$getResumeForAu, _t, _t2, _t3, _t4;
      return autofill_regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return getResumeForAutofill();
          case 1:
            _t2 = _yield$getResumeForAu = _context4.v;
            _t = _t2 !== null;
            if (!_t) {
              _context4.n = 2;
              break;
            }
            _t = _yield$getResumeForAu !== void 0;
          case 2:
            if (!_t) {
              _context4.n = 3;
              break;
            }
            _t3 = _yield$getResumeForAu;
            _context4.n = 4;
            break;
          case 3:
            _t3 = SKIP_ANSWER;
          case 4:
            return _context4.a(2, _t3);
          case 5:
            _context4.p = 5;
            _t4 = _context4.v;
            return _context4.a(2, SKIP_ANSWER);
        }
      }, _callee4, null, [[0, 5]]);
    }));
    function generateAnswer() {
      return _generateAnswer.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  stringifyAnswerForPanel: function stringifyAnswerForPanel() {
    return 'Résumé from profile';
  },
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}],
// The field asks for `coverLetterOutput: 'file'`, so the background renders the letter as a PDF; a
// plain-text answer cannot be attached to a document slot and is skipped, never uploaded as .txt.
['cover_letter', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee5(metadata) {
      return autofill_regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            return _context5.a(2, metadata);
        }
      }, _callee5);
    }));
    function fetchMissingMetadata(_x69) {
      return _fetchMissingMetadata3.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee6(_question, metadata) {
      var answer, _t5;
      return autofill_regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return getCoverLetterForAutofill(metadata.constraints);
          case 1:
            answer = _context6.v;
            if (!(answer && autofill_typeof(answer) === 'object' && answer.type === 'file')) {
              _context6.n = 2;
              break;
            }
            return _context6.a(2, answer);
          case 2:
            return _context6.a(2, SKIP_ANSWER);
          case 3:
            _context6.p = 3;
            _t5 = _context6.v;
            return _context6.a(2, SKIP_ANSWER);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    function generateAnswer(_x70, _x71) {
      return _generateAnswer2.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  stringifyAnswerForPanel: function stringifyAnswerForPanel(answer) {
    return (answer === null || answer === void 0 ? void 0 : answer.type) === 'file' ? "Cover letter file (".concat(answer.fileName || 'from profile', ")") : 'Skipped — RippleHire only accepts a document cover letter';
  },
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}],
// A custom file question that is neither a résumé nor a cover letter has no profile document.
['file', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee7(metadata) {
      return autofill_regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            return _context7.a(2, metadata);
        }
      }, _callee7);
    }));
    function fetchMissingMetadata(_x72) {
      return _fetchMissingMetadata4.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee8() {
      return autofill_regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            return _context8.a(2, SKIP_ANSWER);
        }
      }, _callee8);
    }));
    function generateAnswer() {
      return _generateAnswer3.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  stringifyAnswerForPanel: function stringifyAnswerForPanel() {
    return 'Skipped — no matching profile document';
  },
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}],
// Human-only widgets: surfaced, never filled.
['unsupported', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata5 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee9(metadata) {
      return autofill_regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            return _context9.a(2, metadata);
        }
      }, _callee9);
    }));
    function fetchMissingMetadata(_x73) {
      return _fetchMissingMetadata5.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee0() {
      return autofill_regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            return _context0.a(2, SKIP_ANSWER);
        }
      }, _callee0);
    }));
    function generateAnswer() {
      return _generateAnswer4.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  stringifyAnswerForPanel: function stringifyAnswerForPanel() {
    return 'Skipped — needs a human (live photo / consent card / skills picker)';
  },
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}], ['captcha', createCaptchaAnswerTypeHandler()]]);

// --- Field-kind handlers ---------------------------------------------------

var FIELD_KIND_HANDLERS = new Map([['text', (/*#__PURE__*/function () {
  var _ref8 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee1(fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          _context1.n = 1;
          return fillText(fieldId, field, answer);
        case 1:
          return _context1.a(2);
      }
    }, _callee1);
  }));
  return function (_x74, _x75, _x76, _x77) {
    return _ref8.apply(this, arguments);
  };
}())], ['textarea', (/*#__PURE__*/function () {
  var _ref9 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee10(fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _context10.n = 1;
          return fillText(fieldId, field, answer);
        case 1:
          return _context10.a(2);
      }
    }, _callee10);
  }));
  return function (_x78, _x79, _x80, _x81) {
    return _ref9.apply(this, arguments);
  };
}())], ['numeric', (/*#__PURE__*/function () {
  var _ref0 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee11(fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          _context11.n = 1;
          return fillNumeric(fieldId, field, answer);
        case 1:
          return _context11.a(2);
      }
    }, _callee11);
  }));
  return function (_x82, _x83, _x84, _x85) {
    return _ref0.apply(this, arguments);
  };
}())], ['select-native', (/*#__PURE__*/function () {
  var _ref1 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee12(fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          _context12.n = 1;
          return fillNativeSelect(fieldId, field, answer);
        case 1:
          return _context12.a(2);
      }
    }, _callee12);
  }));
  return function (_x86, _x87, _x88, _x89) {
    return _ref1.apply(this, arguments);
  };
}())], ['multiselect', (/*#__PURE__*/function () {
  var _ref10 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee13(fieldId, _question, answer, field) {
    var _ref11,
      _ref11$shouldAbort,
      shouldAbort,
      _args13 = arguments;
    return autofill_regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          _ref11 = _args13.length > 4 && _args13[4] !== undefined ? _args13[4] : {}, _ref11$shouldAbort = _ref11.shouldAbort, shouldAbort = _ref11$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref11$shouldAbort;
          _context13.n = 1;
          return fillMultiselect(fieldId, field, answer, shouldAbort);
        case 1:
          return _context13.a(2);
      }
    }, _callee13);
  }));
  return function (_x90, _x91, _x92, _x93) {
    return _ref10.apply(this, arguments);
  };
}())], ['uniform-radio', (/*#__PURE__*/function () {
  var _ref12 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee14(fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          _context14.n = 1;
          return fillRadio(fieldId, field, answer);
        case 1:
          return _context14.a(2);
      }
    }, _callee14);
  }));
  return function (_x94, _x95, _x96, _x97) {
    return _ref12.apply(this, arguments);
  };
}())], ['consent-checkbox', (/*#__PURE__*/function () {
  var _ref13 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee15(fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          _context15.n = 1;
          return fillConsentCheckbox(fieldId, field, answer);
        case 1:
          return _context15.a(2);
      }
    }, _callee15);
  }));
  return function (_x98, _x99, _x100, _x101) {
    return _ref13.apply(this, arguments);
  };
}())], ['checkbox-group', (/*#__PURE__*/function () {
  var _ref14 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee16(fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          _context16.n = 1;
          return fillCheckboxGroup(fieldId, field, answer);
        case 1:
          return _context16.a(2);
      }
    }, _callee16);
  }));
  return function (_x102, _x103, _x104, _x105) {
    return _ref14.apply(this, arguments);
  };
}())], ['intl-tel', (/*#__PURE__*/function () {
  var _ref15 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee17(fieldId, _question, answer, field) {
    var _ref16,
      _ref16$shouldAbort,
      shouldAbort,
      _args17 = arguments;
    return autofill_regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          _ref16 = _args17.length > 4 && _args17[4] !== undefined ? _args17[4] : {}, _ref16$shouldAbort = _ref16.shouldAbort, shouldAbort = _ref16$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref16$shouldAbort;
          _context17.n = 1;
          return fillPhone(fieldId, field, answer, shouldAbort);
        case 1:
          return _context17.a(2);
      }
    }, _callee17);
  }));
  return function (_x106, _x107, _x108, _x109) {
    return _ref15.apply(this, arguments);
  };
}())], ['currency-amount', (/*#__PURE__*/function () {
  var _ref17 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee18(fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          _context18.n = 1;
          return fillCurrencyAmount(fieldId, field, answer);
        case 1:
          return _context18.a(2);
      }
    }, _callee18);
  }));
  return function (_x110, _x111, _x112, _x113) {
    return _ref17.apply(this, arguments);
  };
}())], ['places', (/*#__PURE__*/function () {
  var _ref18 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee19(fieldId, _question, answer, field) {
    var _ref19,
      _ref19$shouldAbort,
      shouldAbort,
      _args19 = arguments;
    return autofill_regenerator().w(function (_context19) {
      while (1) switch (_context19.n) {
        case 0:
          _ref19 = _args19.length > 4 && _args19[4] !== undefined ? _args19[4] : {}, _ref19$shouldAbort = _ref19.shouldAbort, shouldAbort = _ref19$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref19$shouldAbort;
          _context19.n = 1;
          return fillPlaces(fieldId, field, answer, shouldAbort);
        case 1:
          return _context19.a(2);
      }
    }, _callee19);
  }));
  return function (_x114, _x115, _x116, _x117) {
    return _ref18.apply(this, arguments);
  };
}())], ['datepicker', (/*#__PURE__*/function () {
  var _ref20 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee20(fieldId, _question, answer, field) {
    var _ref21,
      _ref21$shouldAbort,
      shouldAbort,
      _args20 = arguments;
    return autofill_regenerator().w(function (_context20) {
      while (1) switch (_context20.n) {
        case 0:
          _ref21 = _args20.length > 4 && _args20[4] !== undefined ? _args20[4] : {}, _ref21$shouldAbort = _ref21.shouldAbort, shouldAbort = _ref21$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref21$shouldAbort;
          _context20.n = 1;
          return fillDatepicker(fieldId, field, answer, shouldAbort);
        case 1:
          return _context20.a(2);
      }
    }, _callee20);
  }));
  return function (_x118, _x119, _x120, _x121) {
    return _ref20.apply(this, arguments);
  };
}())], ['ripplehire-file', (/*#__PURE__*/function () {
  var _ref22 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee21(fieldId, _question, answer, field) {
    var _ref23,
      _ref23$shouldAbort,
      shouldAbort,
      _args21 = arguments;
    return autofill_regenerator().w(function (_context21) {
      while (1) switch (_context21.n) {
        case 0:
          _ref23 = _args21.length > 4 && _args21[4] !== undefined ? _args21[4] : {}, _ref23$shouldAbort = _ref23.shouldAbort, shouldAbort = _ref23$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref23$shouldAbort;
          _context21.n = 1;
          return fillRippleHireFile(fieldId, field, answer, shouldAbort);
        case 1:
          return _context21.a(2);
      }
    }, _callee21);
  }));
  return function (_x122, _x123, _x124, _x125) {
    return _ref22.apply(this, arguments);
  };
}())], ['ripplehire-resume-popup', (/*#__PURE__*/function () {
  var _ref24 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee22(fieldId, _question, answer, field) {
    var _ref25,
      _ref25$shouldAbort,
      shouldAbort,
      _args22 = arguments;
    return autofill_regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          _ref25 = _args22.length > 4 && _args22[4] !== undefined ? _args22[4] : {}, _ref25$shouldAbort = _ref25.shouldAbort, shouldAbort = _ref25$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref25$shouldAbort;
          _context22.n = 1;
          return fillRippleHireResumePopup(fieldId, field, answer, shouldAbort);
        case 1:
          return _context22.a(2);
      }
    }, _callee22);
  }));
  return function (_x126, _x127, _x128, _x129) {
    return _ref24.apply(this, arguments);
  };
}())], ['tokeninput', (/*#__PURE__*/function () {
  var _ref26 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee23(fieldId, _question, answer, field) {
    var _ref27,
      _ref27$shouldAbort,
      shouldAbort,
      _args23 = arguments;
    return autofill_regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          _ref27 = _args23.length > 4 && _args23[4] !== undefined ? _args23[4] : {}, _ref27$shouldAbort = _ref27.shouldAbort, shouldAbort = _ref27$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref27$shouldAbort;
          _context23.n = 1;
          return fillTokenInput(fieldId, field, answer, shouldAbort);
        case 1:
          return _context23.a(2);
      }
    }, _callee23);
  }));
  return function (_x130, _x131, _x132, _x133) {
    return _ref26.apply(this, arguments);
  };
}())], ['unsupported', /*#__PURE__*/autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee24() {
  return autofill_regenerator().w(function (_context24) {
    while (1) switch (_context24.n) {
      case 0:
        return _context24.a(2);
    }
  }, _callee24);
}))], ['captcha', createCaptchaFieldKindHandler()]]);

// --- Accepting link ----------------------------------------------------------------
//
// A RippleHire `?token=` is a share link — the employer's careers link or an employee's referral
// link — and the tenant answers the final candjobapply POST with a 500 ("Unable to accept your
// application… Error ID") for SOME links on every applicant and posting, while the same posting
// opened through another link of the same tenant is accepted. Measured on the fleet's rows
// (2026-10-21, 30 d; accepted = #apply-success / #thankyou/id/<n>): usource 8YxW… 0 accepted of 114
// submits, the careers link xHQW… 15 accepted, the referral qI5M… 3; usource 035U… is dead (every
// job detail 500 → /candidate/unknownerror while the posting is live under the others); mphasis
// QBghj9… 7 accepted vs 0 through seven other links (~125 submits); myridius BjIJBB… 6 of 6 vs
// aicv41… 0 of 12. A job route opened through a link that is not on its tenant's list is re-opened
// through the list's first link — same tenant, same posting (the detail endpoint serves a posting
// under every live link of its tenant) — after that link is checked to serve the posting. Tenants
// with no accepting link on record (ltm, ltimindtree, tredence, cimpress) are left alone.
var RIPPLEHIRE_ACCEPTING_TOKENS = Object.freeze({
  usource: Object.freeze(['xHQWoFn4C242POo7xMpH', 'qI5MRKweCrCM5ICYFTAK']),
  mphasis: Object.freeze(['QBghj9dAEVmZUtMzyrCx']),
  myridius: Object.freeze(['BjIJBBQAWnZWESmhKjaX'])
});
var RIPPLEHIRE_JOB_ROUTE = /^#(detail|apply)\/job\/(\d+)(?:[/?]|$)/i;
var RIPPLEHIRE_TENANT_HOST = /^([a-z0-9-]+)\.ripplehire\.com$/;
var ACCEPTING_LINK_CHECK_TIMEOUT_MS = 5000;

// The same posting through the tenant's accepting link, or null when the url is not a job route of
// a listed tenant or already rides an accepting link.
function rippleHireAcceptingJobUrl(href) {
  var _url$hostname$toLower;
  var url;
  try {
    url = new URL(href);
  } catch (_unused2) {
    return null;
  }
  var tenant = (_url$hostname$toLower = url.hostname.toLowerCase().match(RIPPLEHIRE_TENANT_HOST)) === null || _url$hostname$toLower === void 0 ? void 0 : _url$hostname$toLower[1];
  var accepting = tenant ? RIPPLEHIRE_ACCEPTING_TOKENS[tenant] : null;
  if (!accepting || !/^\/candidate\/?$/.test(url.pathname)) return null;
  var route = url.hash.match(RIPPLEHIRE_JOB_ROUTE);
  if (!route) return null;
  if (accepting.includes(url.searchParams.get('token'))) return null;
  var _accepting = autofill_slicedToArray(accepting, 1),
    token = _accepting[0];
  var jobSeq = route[2];
  return {
    tenant: tenant,
    token: token,
    jobSeq: jobSeq,
    href: "https://".concat(tenant, ".ripplehire.com/candidate/?token=").concat(token, "#").concat(route[1].toLowerCase(), "/job/").concat(jobSeq)
  };
}

// The page's own detail endpoint under the accepting link: a live posting answers its jobSeq with
// enableLink "Y"; a dead link answers 500, a closed posting enableLink "N" — both keep the page.
function acceptingLinkServesPosting(_x134, _x135) {
  return _acceptingLinkServesPosting.apply(this, arguments);
} // Same tab, no history entry: the run keeps its schedule and the background re-drives the new
// document. Resolves true when it navigated.
function _acceptingLinkServesPosting() {
  _acceptingLinkServesPosting = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee51(_ref29, fetchImpl) {
    var tenant, token, jobSeq, controller, timer, _detail$jobVO$jobSeq, _detail$jobVO, response, detail, _t14;
    return autofill_regenerator().w(function (_context52) {
      while (1) switch (_context52.p = _context52.n) {
        case 0:
          tenant = _ref29.tenant, token = _ref29.token, jobSeq = _ref29.jobSeq;
          controller = typeof AbortController === 'function' ? new AbortController() : null;
          timer = controller ? setTimeout(function () {
            return controller.abort();
          }, ACCEPTING_LINK_CHECK_TIMEOUT_MS) : null;
          _context52.p = 1;
          _context52.n = 2;
          return fetchImpl("https://".concat(tenant, ".ripplehire.com/candidate/candidatejobdetail?token=").concat(token, "&jobSeq=").concat(jobSeq, "&lang=en"), {
            credentials: 'same-origin',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              Accept: 'application/json'
            },
            signal: controller === null || controller === void 0 ? void 0 : controller.signal
          });
        case 2:
          response = _context52.v;
          if (response !== null && response !== void 0 && response.ok) {
            _context52.n = 3;
            break;
          }
          return _context52.a(2, false);
        case 3:
          _context52.n = 4;
          return response.json();
        case 4:
          detail = _context52.v;
          return _context52.a(2, String((_detail$jobVO$jobSeq = detail === null || detail === void 0 || (_detail$jobVO = detail.jobVO) === null || _detail$jobVO === void 0 ? void 0 : _detail$jobVO.jobSeq) !== null && _detail$jobVO$jobSeq !== void 0 ? _detail$jobVO$jobSeq : '') === jobSeq && (detail === null || detail === void 0 ? void 0 : detail.enableLink) !== 'N' && (detail === null || detail === void 0 ? void 0 : detail.linkDeactivated) !== true);
        case 5:
          _context52.p = 5;
          _t14 = _context52.v;
          return _context52.a(2, false);
        case 6:
          _context52.p = 6;
          if (timer) clearTimeout(timer);
          return _context52.f(6);
        case 7:
          return _context52.a(2);
      }
    }, _callee51, null, [[1, 5, 6, 7]]);
  }));
  return _acceptingLinkServesPosting.apply(this, arguments);
}
function switchRippleHireToAcceptingLink() {
  return _switchRippleHireToAcceptingLink.apply(this, arguments);
}

// A dead link's first XHR throws the SPA to /candidate/unknownerror (no token, no hash) — possibly
// before the check above answers. The job route a document opens with is remembered for the tab, and
// the error page that follows within a minute switches from it, once.
function _switchRippleHireToAcceptingLink() {
  _switchRippleHireToAcceptingLink = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee52() {
    var _ref30,
      _ref30$href,
      href,
      _ref30$fetchImpl,
      fetchImpl,
      _ref30$navigate,
      navigate,
      target,
      _args53 = arguments;
    return autofill_regenerator().w(function (_context53) {
      while (1) switch (_context53.n) {
        case 0:
          _ref30 = _args53.length > 0 && _args53[0] !== undefined ? _args53[0] : {}, _ref30$href = _ref30.href, href = _ref30$href === void 0 ? window.location.href : _ref30$href, _ref30$fetchImpl = _ref30.fetchImpl, fetchImpl = _ref30$fetchImpl === void 0 ? globalThis.fetch : _ref30$fetchImpl, _ref30$navigate = _ref30.navigate, navigate = _ref30$navigate === void 0 ? autofill_navigateSameTab : _ref30$navigate;
          target = href ? rippleHireAcceptingJobUrl(href) : null;
          if (!(!target || typeof fetchImpl !== 'function')) {
            _context53.n = 1;
            break;
          }
          return _context53.a(2, false);
        case 1:
          _context53.n = 2;
          return acceptingLinkServesPosting(target, fetchImpl);
        case 2:
          if (_context53.v) {
            _context53.n = 3;
            break;
          }
          return _context53.a(2, false);
        case 3:
          navigate(target.href);
          return _context53.a(2, true);
      }
    }, _callee52);
  }));
  return _switchRippleHireToAcceptingLink.apply(this, arguments);
}
var REMEMBERED_ROUTE_KEY = 'bidhub:ripplehire:job-route';
var REMEMBERED_ROUTE_TTL_MS = 60000;
function rippleHireSwitchSourceHref() {
  var _ref31 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref31$href = _ref31.href,
    href = _ref31$href === void 0 ? window.location.href : _ref31$href,
    _ref31$storage = _ref31.storage,
    storage = _ref31$storage === void 0 ? window.sessionStorage : _ref31$storage,
    _ref31$now = _ref31.now,
    now = _ref31$now === void 0 ? Date.now() : _ref31$now;
  try {
    var url = new URL(href);
    if (RIPPLEHIRE_JOB_ROUTE.test(url.hash)) {
      try {
        storage.setItem(REMEMBERED_ROUTE_KEY, JSON.stringify({
          href: href,
          at: now
        }));
      } catch (_unused3) {/* no tab storage: the job route still switches, only the error-page fallback is lost */}
      return href;
    }
    if (!/^\/candidate\/unknownerror\/?$/.test(url.pathname)) return null;
    var saved = JSON.parse(storage.getItem(REMEMBERED_ROUTE_KEY) || 'null');
    storage.removeItem(REMEMBERED_ROUTE_KEY);
    var fresh = saved && now - saved.at < REMEMBERED_ROUTE_TTL_MS && new URL(saved.href).host === url.host;
    return fresh ? saved.href : null;
  } catch (_unused4) {
    return null;
  }
}
registerAutofillHandlers({
  detectFields: detectAutofillFields,
  detectSubmitButton: detectRippleHireSubmitButton,
  detectAdvanceButton: detectRippleHireAdvanceButton,
  getSubmitButton: getRippleHireSubmitButton,
  clickSubmitButton: clickRippleHireSubmitButton,
  isAutofillAvailable: isRippleHireAutofillAvailable,
  advanceFlow: advanceRippleHireAutofillFlow,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS
});

// Auto-apply builds only (a build-time literal, dead-stripped from the user extensions): the top
// document switches at document_start, before the SPA boots — a dead link lands on
// /candidate/unknownerror and no autofill ever starts there.
if (false) // removed by dead control flow
{ var _window$performance$n2, _window$performance3, _window$performance3$; }
/******/ })()
;