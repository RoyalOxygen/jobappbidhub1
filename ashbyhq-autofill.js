/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// UNUSED EXPORTS: deriveComboboxSearchCandidates, formatAshbyDateAnswer, isAshbyLocationQuestion

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
/* unused harmony import specifier */ var dom_interactions_sleep;
/* unused harmony import specifier */ var dom_interactions_base64ToArrayBuffer;
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
var TEXT_INPUT_REASSERT_DELAYS_MS = (/* unused pure expression or super */ null && ([20, 60, 150, 350]));

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
          return dom_interactions_sleep(delay);
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
var waitForPositiveResult = /*#__PURE__*/function () {
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
          return sleep(1000);
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
}();
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
;// ../../packages/job-parsers/content/platforms/location-utils.js
function location_utils_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = location_utils_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || location_utils_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function location_utils_toConsumableArray(r) { return location_utils_arrayWithoutHoles(r) || location_utils_iterableToArray(r) || location_utils_unsupportedIterableToArray(r) || location_utils_nonIterableSpread(); }
function location_utils_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function location_utils_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return location_utils_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? location_utils_arrayLikeToArray(r, a) : void 0; } }
function location_utils_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function location_utils_arrayWithoutHoles(r) { if (Array.isArray(r)) return location_utils_arrayLikeToArray(r); }
function location_utils_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Place-name helpers shared by the platform adapters (no DOM, no messages).

var US_STATE_NAMES_BY_CODE = Object.freeze({
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
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
  DC: 'District of Columbia',
  PR: 'Puerto Rico'
});
var CA_PROVINCE_NAMES_BY_CODE = Object.freeze({
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
});

// "Georgia" alone is also a country, so only its code (GA) implies the United States.
var AMBIGUOUS_REGION_NAMES = new Set(['georgia']);
var COUNTRY_BY_REGION_NAME = new Map([].concat(location_utils_toConsumableArray(Object.values(US_STATE_NAMES_BY_CODE).map(function (name) {
  return [name.toLowerCase(), 'United States'];
})), location_utils_toConsumableArray(Object.values(CA_PROVINCE_NAMES_BY_CODE).map(function (name) {
  return [name.toLowerCase(), 'Canada'];
})), [['washington dc', 'United States'], ['washington d.c.', 'United States'], ['québec', 'Canada']]).filter(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
    name = _ref2[0];
  return !AMBIGUOUS_REGION_NAMES.has(name);
}));
var COUNTRY_BY_REGION_CODE = new Map([].concat(location_utils_toConsumableArray(Object.keys(US_STATE_NAMES_BY_CODE).map(function (code) {
  return [code, 'United States'];
})), location_utils_toConsumableArray(Object.keys(CA_PROVINCE_NAMES_BY_CODE).map(function (code) {
  return [code, 'Canada'];
}))));

// The country a free-text place implies through a US state / Canadian province in one of its comma
// segments: "Naperville, Illinois" / "Austin, TX 78701" → "United States", "Toronto, Ontario" →
// "Canada"; null when no segment names one ("Los Angeles", "London"). A bare two-letter code is
// also an ISO country code ("Bangalore, IN" is India, "Toronto, CA" is Canada), so in free text a
// code counts only before a US ZIP; `allowCodes` is for a structured STATE field ("IL", "ON").
// Codes count only in capitals ("IN", never the word "in").
function inferCountryFromPlace(text) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref3$allowCodes = _ref3.allowCodes,
    allowCodes = _ref3$allowCodes === void 0 ? false : _ref3$allowCodes;
  var segments = String(text !== null && text !== void 0 ? text : '').split(/\s*,\s*/).map(function (segment) {
    return segment.trim();
  }).filter(Boolean);
  var _iterator = location_utils_createForOfIteratorHelper(segments),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _segment$match;
      var rawSegment = _step.value;
      var zipPattern = /\s+\d{5}(?:-\d{4})?$/;
      var hasZip = zipPattern.test(rawSegment);
      var segment = rawSegment.replace(zipPattern, '').trim();
      var byName = COUNTRY_BY_REGION_NAME.get(segment.toLowerCase());
      if (byName) return byName;
      if (!allowCodes && !hasZip) continue;
      var code = (_segment$match = segment.match(/(?:^|\s)([A-Z]{2})$/)) === null || _segment$match === void 0 ? void 0 : _segment$match[1];
      var byCode = code ? COUNTRY_BY_REGION_CODE.get(code) : null;
      if (byCode) return byCode;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
}
;// ../../packages/job-parsers/content/platforms/captcha-shared.js
/* unused harmony import specifier */ var captcha_shared_fillTextInput;
/* unused harmony import specifier */ var captcha_shared_getCaptchaTokenForAutofill;
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
var NEVER_ABORT = function NEVER_ABORT() {
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
      return captcha_shared_fillTextInput(field, token);
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
              return captcha_shared_getCaptchaTokenForAutofill(captcha_shared_objectSpread(captcha_shared_objectSpread(captcha_shared_objectSpread(captcha_shared_objectSpread(captcha_shared_objectSpread(captcha_shared_objectSpread({
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
            _ref3 = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : {}, _ref3$shouldAbort = _ref3.shouldAbort, shouldAbort = _ref3$shouldAbort === void 0 ? NEVER_ABORT : _ref3$shouldAbort;
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
function autofill_shared_slicedToArray(r, e) { return autofill_shared_arrayWithHoles(r) || autofill_shared_iterableToArrayLimit(r, e) || autofill_shared_unsupportedIterableToArray(r, e) || autofill_shared_nonIterableRest(); }
function autofill_shared_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_shared_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function autofill_shared_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var autofill_shared_NEVER_ABORT = function NEVER_ABORT() {
  return false;
};
var activeAutofillRun = null;
var currentAbortCheck = autofill_shared_NEVER_ABORT;
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
        var _ref7 = autofill_shared_slicedToArray(_ref6, 2),
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
        var _step$value = autofill_shared_slicedToArray(_step.value, 2),
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
      var _ref1 = autofill_shared_slicedToArray(_ref0, 2),
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
        var _ref12 = autofill_shared_slicedToArray(_ref11, 1),
          otherFieldId = _ref12[0];
        return otherFieldId !== fieldId;
      }).map(function (_ref13) {
        var _ref14 = autofill_shared_slicedToArray(_ref13, 2),
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
        var _step3$value = autofill_shared_slicedToArray(_step3.value, 2),
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
    shouldAbort = _ref28$shouldAbort === void 0 ? autofill_shared_NEVER_ABORT : _ref28$shouldAbort;
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
            _ref31 = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : {}, _ref31$shouldAbort = _ref31.shouldAbort, shouldAbort = _ref31$shouldAbort === void 0 ? autofill_shared_NEVER_ABORT : _ref31$shouldAbort;
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
;// ../../packages/job-parsers/content/platforms/education-gpa.js
// Local copy of cleanGpa / gpaLeadingNumber from packages/utils/profile/education-gpa.js
// (@bidhub/utils/profile/education-gpa.js): job-parsers declares no @bidhub/utils dependency, so the
// GPA cleaners live here too. Keep the two in lockstep — ./education-gpa.test.js runs every vector of
// packages/utils/profile/education-gpa.parity.json against this copy.

var GPA_MAX_LENGTH = 20;
var INVISIBLE_CHARS = /[\u200B-\u200D\u2060\uFEFF]/g;
var PLACEHOLDERS = new Set(['n/a', 'na', 'n.a.', 'none', 'null', 'nil', 'tbd', 'not applicable', '-', '--', '—', '–']);

// The stored form of a GPA: a finite number becomes its JS string ("4", "3.8"), whitespace (NBSP included)
// collapses to single spaces, placeholders ("N/A", "none", "—") and values over GPA_MAX_LENGTH become ''.
var cleanGpa = function cleanGpa(raw) {
  var text;
  if (typeof raw === 'number') {
    if (!Number.isFinite(raw)) return '';
    text = String(raw);
  } else if (typeof raw === 'string') {
    text = raw;
  } else {
    return '';
  }
  var cleaned = text.replace(INVISIBLE_CHARS, '').replace(/\s+/g, ' ').trim();
  if (!cleaned || PLACEHOLDERS.has(cleaned.toLowerCase())) return '';
  return cleaned.length > GPA_MAX_LENGTH ? '' : cleaned;
};

// The first number of the cleaned GPA, decimal comma folded to a dot: "3.8/4.0" → "3.8",
// "3,8/4" → "3.8", "85%" → "85". '' when the GPA states no number ("First Class Honours").
var gpaLeadingNumber = function gpaLeadingNumber(raw) {
  var match = cleanGpa(raw).match(/[0-9]+(?:[.,][0-9]+)?/);
  return match ? match[0].replace(',', '.') : '';
};
;// ../../packages/job-parsers/content/platforms/autofill-section-hierarchy.js
/* unused harmony import specifier */ var autofill_section_hierarchy_getTextarea;
/* unused harmony import specifier */ var autofill_section_hierarchy_getTextInput;
/* unused harmony import specifier */ var autofill_section_hierarchy_getNativeSelect;
/* unused harmony import specifier */ var autofill_section_hierarchy_getTextLengthLimit;
/* unused harmony import specifier */ var autofill_section_hierarchy_sleep;
/* unused harmony import specifier */ var autofill_section_hierarchy_cleanGpa;
/* unused harmony import specifier */ var autofill_section_hierarchy_gpaLeadingNumber;
/* unused harmony import specifier */ var autofill_section_hierarchy_parseProfileDate;
function autofill_section_hierarchy_regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(autofill_section_hierarchy_typeof(e) + " is not iterable"); }
function autofill_section_hierarchy_typeof(o) { "@babel/helpers - typeof"; return autofill_section_hierarchy_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, autofill_section_hierarchy_typeof(o); }
function autofill_section_hierarchy_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return autofill_section_hierarchy_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (autofill_section_hierarchy_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, autofill_section_hierarchy_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, autofill_section_hierarchy_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), autofill_section_hierarchy_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", autofill_section_hierarchy_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), autofill_section_hierarchy_regeneratorDefine2(u), autofill_section_hierarchy_regeneratorDefine2(u, o, "Generator"), autofill_section_hierarchy_regeneratorDefine2(u, n, function () { return this; }), autofill_section_hierarchy_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (autofill_section_hierarchy_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function autofill_section_hierarchy_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } autofill_section_hierarchy_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { autofill_section_hierarchy_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, autofill_section_hierarchy_regeneratorDefine2(e, r, n, t); }
function autofill_section_hierarchy_toConsumableArray(r) { return autofill_section_hierarchy_arrayWithoutHoles(r) || autofill_section_hierarchy_iterableToArray(r) || autofill_section_hierarchy_unsupportedIterableToArray(r) || autofill_section_hierarchy_nonIterableSpread(); }
function autofill_section_hierarchy_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_section_hierarchy_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function autofill_section_hierarchy_arrayWithoutHoles(r) { if (Array.isArray(r)) return autofill_section_hierarchy_arrayLikeToArray(r); }
function autofill_section_hierarchy_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function autofill_section_hierarchy_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? autofill_section_hierarchy_ownKeys(Object(t), !0).forEach(function (r) { autofill_section_hierarchy_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : autofill_section_hierarchy_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function autofill_section_hierarchy_defineProperty(e, r, t) { return (r = autofill_section_hierarchy_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function autofill_section_hierarchy_toPropertyKey(t) { var i = autofill_section_hierarchy_toPrimitive(t, "string"); return "symbol" == autofill_section_hierarchy_typeof(i) ? i : i + ""; }
function autofill_section_hierarchy_toPrimitive(t, r) { if ("object" != autofill_section_hierarchy_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != autofill_section_hierarchy_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function autofill_section_hierarchy_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function autofill_section_hierarchy_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { autofill_section_hierarchy_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { autofill_section_hierarchy_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function autofill_section_hierarchy_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = autofill_section_hierarchy_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function autofill_section_hierarchy_slicedToArray(r, e) { return autofill_section_hierarchy_arrayWithHoles(r) || autofill_section_hierarchy_iterableToArrayLimit(r, e) || autofill_section_hierarchy_unsupportedIterableToArray(r, e) || autofill_section_hierarchy_nonIterableRest(); }
function autofill_section_hierarchy_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_section_hierarchy_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return autofill_section_hierarchy_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? autofill_section_hierarchy_arrayLikeToArray(r, a) : void 0; } }
function autofill_section_hierarchy_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function autofill_section_hierarchy_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function autofill_section_hierarchy_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Shared hierarchical profile-section support (root → entry group → leaf), platform-parameterized.
//
// A repeatable profile section (work history / education / references / links) is detected as a
// three-level hierarchy instead of one collapsed block field:
//   root  ('workHistory')                — answer = profile entry COUNT; fill = the per-entry
//                                          ITERATOR: clear existing entries, then per entry ensure
//                                          its row/editor exists (Add click + appear-wait +
//                                          retries), release its group gate, wait event-driven for
//                                          its leaves to settle, save when the platform commits
//                                          per entry, continue
//   group ('workHistory:0')              — one per row element; the per-entry SYNC POINT
//                                          (answerType 'profileSectionEntry'): its answer resolves
//                                          when the root's iterator marks the row ready, gating
//                                          the leaves; no DOM operation of its own
//   leaf  ('workHistory:0:companyName')  — one per mapped row control; answerType
//                                          'profileSectionField' resolves its value from profile
//                                          entry[rowIndex]; fieldKind 'section-<baseKind>' wrapper
//                                          re-resolves the LIVE control and delegates to the
//                                          platform's base handler
// Once a group resolves, its leaves are individual fields: answers resolve concurrently and the
// engine's DOM mutex serializes the actual DOM work. The loop is detector-driven: the root's fill
// mutates the DOM, the MutationObserver re-detects, and the new rows'/editor's groups and leaves
// fold into the active run; the root then observes their settlement through question-state events.
//
// Two flavors share the iterator: ROWS mode (all rows editable simultaneously — Greenhouse,
// Workday, Zoho, Freshteam, Breezy, Ashby, BuiltIn, Avature, Paylocity, Dayforce) and EDITOR mode
// (add → editor → SAVE per entry, committed entries collapse to read-only cards — Workable,
// SmartRecruiters, UltiPro, Oracle Cloud, Indeed), selected by the presence of `getEditor`.
// Only iCIMS keeps its monolithic fill (skip-if-filled reconciliation over resume-parse-prefilled
// containers with no delete mechanism conflicts with the clear-first iterator).
//
// Section descriptor shape (per platform):
//   {
//     rootFieldId: 'workHistory',        // also the root's answerType AND fieldKind name
//     rootQuestion: 'Work history',
//     profileSection: 'workHistory',     // key into getProfileSectionData()
//     aiContextPairs?: (entry) => [{question, answer}],  // per-entry grounding pairs for
//                                        // aiFallback leaves (sent as referenceQaPairs)
//     getEntries?: (profileData) => [],  // override when the profile data isn't already an array
//                                        // under profileSection (e.g. Freshteam links object)
//     rowLabel: (i) => `Work history ${i + 1}`,
//     maxEntries?: number | () => number, // cap on rows created / count answered; a function is
//                                        // resolved LIVE (fixed-capacity blocks: rendered rows)
//     rootWaitForFieldId?: 'resume',     // platforms that gate everything on a resume parse
//     getContainer: () => Element|null,          // LIVE lookup — never cache
//     getRows: (container) => Element[],         // LIVE row elements (editor mode: committed rows)
//     getRowField: (rowEl, mapping, rowIndex) => ({ field, fieldId }|null),  // LIVE control lookup
//     classifyLeaf?: (mapping, fieldInfo, rowIndex) => ({ fieldKind?, options?, constraints? }),
//     addRow: async (container, { shouldAbort }) => void,   // click "add" ONCE (appear-wait +
//                                        // retries are the iterator's job)
//     afterEntries?: async (container, { shouldAbort }) => void,  // once EVERY entry is filled:
//                                        // drop an entry the page says to leave out (a row deleted
//                                        // mid-pass would shift the rows of the entries after it)
//     clearRows?: async (container, { shouldAbort }) => void,  // omit when rows can't be deleted
//     // --- editor mode (add -> editor -> SAVE per entry); presence of getEditor switches it on:
//     getEditor?: (container) => Element|null,   // the OPEN entry editor, or null
//     saveEntry?: async (container, { shouldAbort }) => void,  // press Save, wait until committed
//     editorAppearTimeoutMs?: number,    // wait for row/editor after an add click (default 5000;
//                                        // falls back to legacy rowGrowthTimeoutMs)
//     addRetryLimit?: number,            // re-press attempts when it doesn't appear (default 3)
//     entryCompleteTimeoutMs?: number,   // fail-safe cap on the per-entry leaf wait (default 60s)
//     saveSettleMs?: number,             // pause after saveEntry (default 300)
//     mappings: [{
//       key: 'companyName',              // stable id segment
//       label: 'Company name',           // short display label (panel)
//       question?: 'Company name',       // row label text, when the platform locates by label
//       profileKey?: 'companyName',      // entry property; or use resolveValue
//       resolveValue?: (entry, { options, fieldKind, mapping, live }) => value|Promise,
//       fieldKind?: 'text'|'dropdown'|'date'|'checkbox',  // VALUE-RESOLUTION kind (see resolver)
//       datePart?: 'month'|'year',
//       leafKind?: 'text',               // explicit base fill kind when classifyLeaf can't tell
//       fieldHandlerKey?: 'education-school',  // explicit base fill handler override
//       aiFallback?: true,               // when deterministic resolution yields nothing, ask the
//                                        // AI answer system grounded on the section's
//                                        // aiContextPairs(entry) (requires the platform to pass
//                                        // getAnswer to registerProfileSectionHierarchy) — NEVER
//                                        // on a GPA mapping (resolveEducationGpa: stored or blank)
//     }],
//   }






var autofill_section_hierarchy_NEVER_ABORT = function NEVER_ABORT() {
  return false;
};
var TERMINAL_LEAF_STATUSES = new Set(['filled', 'skipped', 'error', 'review_required']);
var DEFAULT_ADD_RETRY_LIMIT = 3;
var DEFAULT_ENTRY_APPEAR_TIMEOUT_MS = 5000;
var DEFAULT_ENTRY_COMPLETE_TIMEOUT_MS = 60000;
var DEFAULT_ENTRY_READY_CAP_MS = 180000;
var ENTRY_SETTLE_MS = 400;
var DEFAULT_SAVE_SETTLE_MS = 300;

// --- Per-root fill passes -----------------------------------------------------------------------
// The root's fill iterates entries: ensure row/editor i exists -> mark it ready -> its group's
// answer resolves -> the leaves fill -> wait for them to settle -> save (editor mode) -> next.
// Groups gate their leaves on the CURRENT pass: while a pass is active, a group's answer resolves
// only once the root marks its row ready (so leaves can never fill before the clear / before their
// row exists). With no active pass (incremental run where the root is already 'filled', late
// re-detections), groups resolve immediately — the rows are already in their final state.
var activeSectionPasses = new Map(); // rootFieldId -> { readyRows:Set<number>, listeners:Set<fn>, done:boolean, filling:boolean }

function notifySectionPass(pass) {
  pass.listeners.forEach(function (listener) {
    try {
      listener();
    } catch (error) {
      console.error('Section pass listener failed:', error);
    }
  });
}

// Called SYNCHRONOUSLY at the top of the root's generateAnswer: the root is scheduled (and its
// processField microtask runs) before its groups', so the pass is active by the time any group's
// answer evaluates.
function beginSectionPass(rootFieldId) {
  activeSectionPasses.set(rootFieldId, {
    readyRows: new Set(),
    listeners: new Set(),
    done: false,
    filling: false
  });
}

// The root's fill has started: its `finally` ends the pass whatever happens, so from here the groups
// wait for their row (or the pass end) with no cap.
function markSectionPassFilling(rootFieldId) {
  var pass = activeSectionPasses.get(rootFieldId);
  if (!pass) return;
  pass.filling = true;
  notifySectionPass(pass);
}
function markSectionEntryReady(rootFieldId, rowIndex) {
  var pass = activeSectionPasses.get(rootFieldId);
  if (!pass) return;
  pass.readyRows.add(rowIndex);
  notifySectionPass(pass);
}
function endSectionPass(rootFieldId) {
  var pass = activeSectionPasses.get(rootFieldId);
  if (!pass) return;
  pass.done = true;
  notifySectionPass(pass);
  activeSectionPasses["delete"](rootFieldId);
}
function waitForSectionEntryReady(rootFieldId, rowIndex) {
  var capMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_ENTRY_READY_CAP_MS;
  var pass = activeSectionPasses.get(rootFieldId);
  if (!pass || pass.done || pass.readyRows.has(rowIndex)) return Promise.resolve();
  return new Promise(function (resolve) {
    var timeoutId = null;
    var _listener = function listener() {
      if (pass.filling && timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      if (!pass.done && !pass.readyRows.has(rowIndex)) return;
      pass.listeners["delete"](_listener);
      if (timeoutId) clearTimeout(timeoutId);
      resolve();
    };
    pass.listeners.add(_listener);
    // Fail-safe cap only — for a pass whose root fill never starts (the run aborted between the
    // root's answer and its fill), so it never wedges the run. It never runs once the fill has
    // started: the root reaches row N only after rows 0..N-1 settled, which on a slow page takes
    // minutes, and a cap that opened the group before its row existed let the leaves "fill" nothing
    // and report filled — the row the root added afterwards stayed blank (seic.wd1 2026-10-20: four
    // saved Workday work-history rows, Work Experience 3 and 4 left empty behind a long skills list).
    if (!pass.filling) {
      timeoutId = setTimeout(function () {
        pass.listeners["delete"](_listener);
        resolve();
      }, capMs);
    }
  });
}

// One platform bundle runs per page, so a module-level registry is safe.
var sectionsByRootId = new Map();
function getRegisteredSection(rootFieldId) {
  var _sectionsByRootId$get;
  return (_sectionsByRootId$get = sectionsByRootId.get(rootFieldId)) !== null && _sectionsByRootId$get !== void 0 ? _sectionsByRootId$get : null;
}

// The section's profile entries as an array: `getEntries` adapter when the profile shape isn't
// already an array under `profileSection` (e.g. a links OBJECT expanded into rows), else the
// direct key lookup.
function resolveSectionEntries(section, profileData) {
  var entries = section.getEntries ? section.getEntries(profileData) : profileData === null || profileData === void 0 ? void 0 : profileData[section.profileSection];
  return Array.isArray(entries) ? entries : [];
}

// Section fieldIds are synthetic and hierarchical so they stay stable across the root's
// clear/re-add cycle (row DOM ids may regenerate) and carry their own context:
//   'workHistory:0'             -> group { section, rowIndex }
//   'workHistory:0:companyName' -> leaf  { section, rowIndex, mapping }
function parseSectionFieldId(fieldId) {
  var _section$mappings$fin;
  var _String$split = String(fieldId !== null && fieldId !== void 0 ? fieldId : '').split(':'),
    _String$split2 = autofill_section_hierarchy_slicedToArray(_String$split, 3),
    rootId = _String$split2[0],
    rowIndex = _String$split2[1],
    mappingKey = _String$split2[2];
  var section = sectionsByRootId.get(rootId);
  if (!section || rowIndex === undefined || !/^\d+$/.test(rowIndex)) return null;
  var mapping = mappingKey ? (_section$mappings$fin = section.mappings.find(function (m) {
    return m.key === mappingKey;
  })) !== null && _section$mappings$fin !== void 0 ? _section$mappings$fin : null : null;
  if (mappingKey && !mapping) return null;
  return {
    section: section,
    rowIndex: Number(rowIndex),
    mapping: mapping
  };
}

// The live element hosting row `rowIndex`'s controls. Rows mode: the row element. Editor mode:
// committed rows first; the OPEN editor acts as the row at index == committed-row count (the
// entry currently being edited).
function getSectionRowElementForIndex(section, rowIndex) {
  var container = section.getContainer();
  if (!container) return null;
  var rows = section.getRows(container);
  if (rows[rowIndex]) return rows[rowIndex];
  if (typeof section.getEditor === 'function' && rowIndex === rows.length) {
    var _section$getEditor;
    return (_section$getEditor = section.getEditor(container)) !== null && _section$getEditor !== void 0 ? _section$getEditor : null;
  }
  return null;
}

// Leaf handlers never trust cached DOM elements: row-0 leaves are detected before the root clears
// and re-creates the rows, so the control is re-resolved (container -> row index -> mapping) at
// metadata-fetch and fill time. Returns { field, fieldId } of the live control, or null if gone.
function resolveLiveSectionField(fieldId) {
  var _parsed$section$getRo;
  var parsed = parseSectionFieldId(fieldId);
  if (!(parsed !== null && parsed !== void 0 && parsed.mapping)) return null;
  var row = getSectionRowElementForIndex(parsed.section, parsed.rowIndex);
  if (!row) return null;
  return (_parsed$section$getRo = parsed.section.getRowField(row, parsed.mapping, parsed.rowIndex)) !== null && _parsed$section$getRo !== void 0 ? _parsed$section$getRo : null;
}
function baseSectionFieldKind(fieldKind) {
  return typeof fieldKind === 'string' && fieldKind.startsWith('section-') ? fieldKind.slice('section-'.length) : fieldKind;
}

// Value-RESOLUTION kind for a mapping: the mapping's declared kind wins; otherwise derived from
// the control's detected fill kind. Distinct from the FILL kind — e.g. a 'date'-resolved month
// value may be written through a select or a text input.
function resolveSectionMappingKind(mappingFieldKind, metadataFieldKind) {
  if (mappingFieldKind) return mappingFieldKind;
  if (typeof metadataFieldKind === 'string' && /select|dropdown|combo/.test(metadataFieldKind)) return 'dropdown';
  if (metadataFieldKind === 'checkbox') return 'checkbox';
  return 'text';
}

// Location part of a profile section entry (work history / education): prefer the explicit
// entry key, else split the free-form `location` string ("City, State[, Country]") — city is the
// first token, state the second, country the last. (Moved from dayforcehcm; platform-neutral.)
function locationPart(entry, part) {
  if (!entry) return null;
  var explicit = part === 'city' ? entry.city : part === 'state' ? entry.state : entry.country;
  if (explicit) return explicit;
  var tokens = String(entry.location || '').split(',').map(function (t) {
    return t.trim();
  }).filter(Boolean);
  if (tokens.length === 0) return null;
  if (part === 'city') return tokens[0];
  if (part === 'state') return tokens[1] || null;
  return tokens[tokens.length - 1] || null;
}

// Work-history summary text lives under different profile keys depending on how the entry was
// built: `achievements` (the current shape — an array of bullet strings), or `description` /
// `summary` / `responsibilities` (string or array) on older/imported entries. Pick the first with
// content and join array bullets onto their own lines. A `description`-only resolveValue misses
// the common `achievements` case and leaves the field blank. (Zoho keeps a local variant that
// additionally flattens whitespace for its widgets.)
function workSummaryLines(entry) {
  var toLines = function toLines(value) {
    return (Array.isArray(value) ? value : [value]).map(function (item) {
      return String(item !== null && item !== void 0 ? item : '').trim();
    }).filter(Boolean);
  };
  for (var _i = 0, _arr = [entry === null || entry === void 0 ? void 0 : entry.achievements, entry === null || entry === void 0 ? void 0 : entry.description, entry === null || entry === void 0 ? void 0 : entry.summary, entry === null || entry === void 0 ? void 0 : entry.responsibilities]; _i < _arr.length; _i++) {
    var value = _arr[_i];
    var lines = toLines(value);
    if (lines.length > 0) return lines;
  }
  return null;
}

// Joined form of workSummaryLines. Prefer returning the LINES from a mapping's resolveValue so the
// resolver can fit them to the control's character cap (see fitLinesToLimit).
function workSummaryText(entry) {
  var _workSummaryLines$joi, _workSummaryLines;
  return (_workSummaryLines$joi = (_workSummaryLines = workSummaryLines(entry)) === null || _workSummaryLines === void 0 ? void 0 : _workSummaryLines.join('\n')) !== null && _workSummaryLines$joi !== void 0 ? _workSummaryLines$joi : null;
}

// Compose bullet lines into a text that fits `limit` characters: append lines in order and stop at
// the FIRST one that would overflow (keeps the narrative order — no cherry-picking later, shorter
// bullets). A single first line longer than the cap is cut at its last word boundary so the field
// is never left blank. WHY: platform editors cap descriptions (UltiPro Work Experience: 2000) and
// programmatic fills bypass `maxlength`, so an over-long value is rejected only on Save.
function fitLinesToLimit(lines, limit) {
  var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\n';
  var cleanLines = (Array.isArray(lines) ? lines : [lines]).map(function (line) {
    return String(line !== null && line !== void 0 ? line : '').trim();
  }).filter(Boolean);
  if (cleanLines.length === 0) return '';
  if (!(Number.isFinite(limit) && limit > 0)) return cleanLines.join(separator);
  var text = '';
  var _iterator = autofill_section_hierarchy_createForOfIteratorHelper(cleanLines),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var line = _step.value;
      var candidate = text ? "".concat(text).concat(separator).concat(line) : line;
      if (candidate.length > limit) break;
      text = candidate;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (text) return text;
  var head = cleanLines[0].slice(0, limit);
  var lastSpace = head.lastIndexOf(' ');
  return (lastSpace > 0 ? head.slice(0, lastSpace) : head).trim();
}

// Whole years a reference has been known: knownFrom → (knownTo || today), both 'MM/YYYY' profile
// strings. Returns an integer ≥ 0, or null when knownFrom is unparseable — callers fall back to a
// legacy pre-v2 `yearsKnown` string themselves.
function referenceYearsKnown(entry) {
  var _entry$knownFrom, _entry$knownTo;
  var from = autofill_section_hierarchy_parseProfileDate(String((_entry$knownFrom = entry === null || entry === void 0 ? void 0 : entry.knownFrom) !== null && _entry$knownFrom !== void 0 ? _entry$knownFrom : ''));
  if (!from.year) return null;
  var now = new Date();
  var hasTo = Boolean(String((_entry$knownTo = entry === null || entry === void 0 ? void 0 : entry.knownTo) !== null && _entry$knownTo !== void 0 ? _entry$knownTo : '').trim());
  var to = hasTo ? autofill_section_hierarchy_parseProfileDate(String(entry.knownTo)) : {
    month: String(now.getMonth() + 1),
    year: String(now.getFullYear())
  };
  if (!to.year) return null;
  var months = (Number(to.year) - Number(from.year)) * 12 + ((Number(to.month) || 1) - (Number(from.month) || 1));
  return Math.max(0, Math.floor(months / 12));
}

// HTML `pattern` semantics: the WHOLE value must match; browsers compile it with the `v` flag (older
// ones `u`) and ignore a pattern that does not compile. Null when there is no usable pattern.
function compileHtmlPattern(source) {
  if (typeof source !== 'string' || source === '') return null;
  for (var _i2 = 0, _arr2 = ['v', 'u']; _i2 < _arr2.length; _i2++) {
    var flags = _arr2[_i2];
    try {
      return new RegExp("^(?:".concat(source, ")$"), flags);
    } catch (_unused) {
      // not valid under these flags — try the next set
    }
  }
  return null;
}

// The text control a section leaf writes: the live field itself, or the one inside a wrapper.
function getLiveTextControl(field) {
  if (!field) return null;
  if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') return field;
  if (typeof field.querySelector !== 'function') return null;
  return autofill_section_hierarchy_getTextarea(field) || autofill_section_hierarchy_getTextInput(field);
}

// A control that only takes a number: type="number", a numeric/decimal keyboard (inputmode), or a
// `pattern` that rejects the GPA as written but accepts its leading number.
function isNumericOnlyGpaControl(control, gpa, leadingNumber) {
  var _control$type, _control$getAttribute, _control$getAttribute2, _control$getAttribute3;
  if (String((_control$type = control.type) !== null && _control$type !== void 0 ? _control$type : '').toLowerCase() === 'number') return true;
  var inputMode = String((_control$getAttribute = (_control$getAttribute2 = control.getAttribute) === null || _control$getAttribute2 === void 0 ? void 0 : _control$getAttribute2.call(control, 'inputmode')) !== null && _control$getAttribute !== void 0 ? _control$getAttribute : '').trim().toLowerCase();
  if (inputMode === 'numeric' || inputMode === 'decimal') return true;
  var pattern = compileHtmlPattern((_control$getAttribute3 = control.getAttribute) === null || _control$getAttribute3 === void 0 ? void 0 : _control$getAttribute3.call(control, 'pattern'));
  return Boolean(pattern && leadingNumber && !pattern.test(gpa) && pattern.test(leadingNumber));
}

// A GPA option list ("3.5 - 4.0", "3.80", "3.8/4.0") is never similarity-matched — that would pick a
// bucket by resemblance. Only an option that STATES the stored GPA counts: the same text, else the
// one option whose number equals its leading number or whose closed range ("a - b", "a to b") holds
// it. No match, two matches (overlapping buckets) or open-ended phrasing ("3.5+") → null.
var GPA_OPTION_NUMBER = /^(\d+(?:[.,]\d+)?)%?$/;
var GPA_OPTION_RANGE = /^(\d+(?:[.,]\d+)?)%?(?:-|to)(\d+(?:[.,]\d+)?)%?$/;
function pickGpaOption(optionTexts, gpa, leadingNumber) {
  var compact = function compact(text) {
    return String(text !== null && text !== void 0 ? text : '').toLowerCase().replace(/[–—−]/g, '-').replace(/\s+/g, '');
  };
  var target = compact(gpa);
  var exact = optionTexts.find(function (text) {
    return compact(text) === target;
  });
  if (exact != null) return exact;
  var number = leadingNumber ? Number(leadingNumber) : Number.NaN;
  if (!Number.isFinite(number)) return null;
  var toNumber = function toNumber(text) {
    return Number(text.replace(',', '.'));
  };
  var matches = optionTexts.filter(function (text) {
    var option = compact(text);
    var single = option.match(GPA_OPTION_NUMBER);
    if (single) return toNumber(single[1]) === number;
    var range = option.match(GPA_OPTION_RANGE);
    return Boolean(range) && toNumber(range[1]) <= number && number <= toNumber(range[2]);
  });
  return matches.length === 1 ? matches[0] : null;
}

// The option labels of the live control: a native <select>, else the options the leaf's metadata
// carries (fetchLeafOptions). Empty for a free-text control or a custom widget.
function getGpaOptionTexts(field, options) {
  var _select$options;
  var select = (field === null || field === void 0 ? void 0 : field.tagName) === 'SELECT' || typeof (field === null || field === void 0 ? void 0 : field.querySelector) === 'function' ? autofill_section_hierarchy_getNativeSelect(field) : null;
  var source = select ? Array.from((_select$options = select.options) !== null && _select$options !== void 0 ? _select$options : [], function (option) {
    return option.text;
  }) : Array.isArray(options) ? options : [];
  return source.map(function (option) {
    var _ref, _option$text;
    return typeof option === 'string' ? option : String((_ref = (_option$text = option === null || option === void 0 ? void 0 : option.text) !== null && _option$text !== void 0 ? _option$text : option === null || option === void 0 ? void 0 : option.label) !== null && _ref !== void 0 ? _ref : '');
  }).filter(function (text) {
    return text.trim() !== '';
  });
}

// The GPA of an education entry for its LIVE row control (2026-10-21): the stored text ("3.8/4.0",
// "8.7/10", "85%"; `gradeAverage` / `grade` are older aliases), its leading number ("3.8") when the
// control only takes a number or is too short for the text, the option that states it for a select,
// else null — the leaf then SKIPS and the control stays blank. A GPA is only ever the profile's own
// (owner rule: never guessed, not even for a required field), so a GPA mapping must never carry
// `aiFallback`; a value is never cut to fit either ("3.8/" / "3.8" from "3.85" would misstate it) and
// a bucket is never picked by resemblance — nothing is better than a wrong GPA.
function resolveEducationGpa(entry) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    live = _ref2.live,
    options = _ref2.options;
  var gpa = autofill_section_hierarchy_cleanGpa(entry === null || entry === void 0 ? void 0 : entry.gpa) || autofill_section_hierarchy_cleanGpa(entry === null || entry === void 0 ? void 0 : entry.gradeAverage) || autofill_section_hierarchy_cleanGpa(entry === null || entry === void 0 ? void 0 : entry.grade);
  if (!gpa) return null;
  var leadingNumber = autofill_section_hierarchy_gpaLeadingNumber(gpa);
  var control = getLiveTextControl(live === null || live === void 0 ? void 0 : live.field);
  if (control) {
    var limit = autofill_section_hierarchy_getTextLengthLimit(control);
    var fits = function fits(value) {
      return Boolean(value) && !(limit && value.length > limit);
    };
    if (isNumericOnlyGpaControl(control, gpa, leadingNumber)) return fits(leadingNumber) ? leadingNumber : null;
    if (fits(gpa)) return gpa;
    return fits(leadingNumber) ? leadingNumber : null;
  }
  var optionTexts = getGpaOptionTexts(live === null || live === void 0 ? void 0 : live.field, options);
  if (optionTexts.length > 0) return pickGpaOption(optionTexts, gpa, leadingNumber);
  return gpa; // a custom widget (pills, typeahead) matches the stored text itself
}

// Generic profile-value resolution for a section mapping (moved from greenhouse; platform-neutral):
// text join, dropdown exact + embedding option match, date month/year parts, checkbox booleans.
function resolveSectionMappingValue(_x, _x2, _x3) {
  return _resolveSectionMappingValue.apply(this, arguments);
}

// Reads the CURRENT DOM and returns the hierarchy's question entries: [root, group0, leaves0,
// group1, ...]. Called from the platform detector on every pass, so the emitted nodes always
// reflect live state — rows the root adds appear on the next pass (detector-driven).
function _resolveSectionMappingValue() {
  _resolveSectionMappingValue = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee0(entry, mapping, options) {
    var context,
      profileKey,
      fieldKind,
      datePart,
      resolveValue,
      rawValue,
      _ref0,
      _getTextLengthLimit,
      _context$live,
      limit,
      text,
      normalizedValue,
      exactMatch,
      _yield$getEmbeddingMa,
      parsed,
      monthLabel,
      _exactMatch,
      _yield$getEmbeddingMa2,
      _args0 = arguments,
      _t4,
      _t5,
      _t6,
      _t7,
      _t8,
      _t9,
      _t0,
      _t1,
      _t10;
    return autofill_section_hierarchy_regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          context = _args0.length > 3 && _args0[3] !== undefined ? _args0[3] : {};
          profileKey = mapping.profileKey, fieldKind = mapping.fieldKind, datePart = mapping.datePart, resolveValue = mapping.resolveValue;
          if (!resolveValue) {
            _context0.n = 2;
            break;
          }
          _context0.n = 1;
          return resolveValue(entry, autofill_section_hierarchy_objectSpread({
            options: options,
            fieldKind: fieldKind,
            mapping: mapping
          }, context));
        case 1:
          _t4 = _context0.v;
          _context0.n = 3;
          break;
        case 2:
          _t4 = entry === null || entry === void 0 ? void 0 : entry[profileKey];
        case 3:
          rawValue = _t4;
          if (!(rawValue === undefined || rawValue === null)) {
            _context0.n = 4;
            break;
          }
          return _context0.a(2, null);
        case 4:
          if (!(fieldKind === 'checkbox')) {
            _context0.n = 6;
            break;
          }
          if (!(typeof rawValue === 'string')) {
            _context0.n = 5;
            break;
          }
          return _context0.a(2, rawValue.trim() || null);
        case 5:
          return _context0.a(2, rawValue || null);
        case 6:
          if (!(typeof rawValue === 'string' && !rawValue.trim())) {
            _context0.n = 7;
            break;
          }
          return _context0.a(2, null);
        case 7:
          if (!(fieldKind === 'text')) {
            _context0.n = 9;
            break;
          }
          // Character cap: the live control's own (maxlength / validation attrs / "N characters left"
          // counter) wins; `mapping.maxLength` is the platform's declared fallback when the DOM exposes
          // none. Array values are bullets — fit them line by line; a string is clipped at a word.
          limit = (_ref0 = (_getTextLengthLimit = getTextLengthLimit((_context$live = context.live) === null || _context$live === void 0 ? void 0 : _context$live.field)) !== null && _getTextLengthLimit !== void 0 ? _getTextLengthLimit : mapping.maxLength) !== null && _ref0 !== void 0 ? _ref0 : null;
          if (!Array.isArray(rawValue)) {
            _context0.n = 8;
            break;
          }
          return _context0.a(2, fitLinesToLimit(rawValue, limit) || null);
        case 8:
          text = String(rawValue).trim();
          return _context0.a(2, limit && text.length > limit ? fitLinesToLimit([text], limit) : text);
        case 9:
          if (!(fieldKind === 'dropdown')) {
            _context0.n = 17;
            break;
          }
          normalizedValue = String(rawValue).trim();
          if (!(!options || options.length === 0)) {
            _context0.n = 10;
            break;
          }
          return _context0.a(2, normalizedValue);
        case 10:
          exactMatch = options.find(function (option) {
            return String(option).trim().toLowerCase() === normalizedValue.toLowerCase();
          });
          if (!(exactMatch != null)) {
            _context0.n = 11;
            break;
          }
          return _context0.a(2, exactMatch);
        case 11:
          _context0.p = 11;
          _context0.n = 12;
          return getEmbeddingMatch(normalizedValue, options);
        case 12:
          _t6 = _yield$getEmbeddingMa = _context0.v;
          _t5 = _t6 !== null;
          if (!_t5) {
            _context0.n = 13;
            break;
          }
          _t5 = _yield$getEmbeddingMa !== void 0;
        case 13:
          if (!_t5) {
            _context0.n = 14;
            break;
          }
          _t7 = _yield$getEmbeddingMa;
          _context0.n = 15;
          break;
        case 14:
          _t7 = normalizedValue;
        case 15:
          return _context0.a(2, _t7);
        case 16:
          _context0.p = 16;
          _t8 = _context0.v;
          return _context0.a(2, normalizedValue);
        case 17:
          if (!(fieldKind === 'date' && datePart)) {
            _context0.n = 27;
            break;
          }
          parsed = parseProfileDate(String(rawValue));
          if (!(datePart === 'month')) {
            _context0.n = 26;
            break;
          }
          if (parsed.month) {
            _context0.n = 18;
            break;
          }
          return _context0.a(2, null);
        case 18:
          if (!(!options || options.length === 0)) {
            _context0.n = 19;
            break;
          }
          return _context0.a(2, parsed.month);
        case 19:
          monthLabel = getMonthDisplay(parsed.month) || parsed.month;
          _exactMatch = options.find(function (option) {
            return String(option).trim().toLowerCase() === monthLabel.toLowerCase();
          });
          if (!(_exactMatch != null)) {
            _context0.n = 20;
            break;
          }
          return _context0.a(2, _exactMatch);
        case 20:
          _context0.p = 20;
          _context0.n = 21;
          return getEmbeddingMatch(monthLabel, options);
        case 21:
          _t0 = _yield$getEmbeddingMa2 = _context0.v;
          _t9 = _t0 !== null;
          if (!_t9) {
            _context0.n = 22;
            break;
          }
          _t9 = _yield$getEmbeddingMa2 !== void 0;
        case 22:
          if (!_t9) {
            _context0.n = 23;
            break;
          }
          _t1 = _yield$getEmbeddingMa2;
          _context0.n = 24;
          break;
        case 23:
          _t1 = parsed.month;
        case 24:
          return _context0.a(2, _t1);
        case 25:
          _context0.p = 25;
          _t10 = _context0.v;
          return _context0.a(2, parsed.month);
        case 26:
          if (!(datePart === 'year')) {
            _context0.n = 27;
            break;
          }
          return _context0.a(2, parsed.year || null);
        case 27:
          return _context0.a(2, null);
      }
    }, _callee0, null, [[20, 25], [11, 16]]);
  }));
  return _resolveSectionMappingValue.apply(this, arguments);
}
function collectSectionHierarchyQuestions(section) {
  var _section$answerType;
  var container = section.getContainer();
  if (!container) return [];
  var rootAnswerType = (_section$answerType = section.answerType) !== null && _section$answerType !== void 0 ? _section$answerType : section.rootFieldId;
  var questions = [autofill_section_hierarchy_objectSpread(autofill_section_hierarchy_objectSpread({
    question: section.rootQuestion,
    fieldId: section.rootFieldId,
    answerType: rootAnswerType,
    // root answerType AND root fieldKind share the name
    fieldKind: rootAnswerType,
    dependsOnPrevious: false,
    // Marks this node as a hierarchy container for the engine's panel-refill routing: a root must
    // fill through a RUN (its children fold in via re-detection) even while it has NO children in
    // the field cache yet — sections that start at 0 rows (Zoho, Paylocity) would otherwise route
    // to the bare single-field path, add their rows with no active run, and leave them empty.
    hierarchyRoot: true
  }, section.rootWaitForFieldId ? {
    waitForFieldId: section.rootWaitForFieldId
  } : {}), {}, {
    field: container
  })];

  // Rows mode: every row element. Editor mode: committed rows (group nodes only — their controls
  // are read-only cards) plus, when an editor is open, the entry currently being edited as the
  // last row (its leaves come from the editor's controls).
  var rowElements = autofill_section_hierarchy_toConsumableArray(section.getRows(container));
  var isEditorMode = typeof section.getEditor === 'function';
  var editorRowIndex = isEditorMode ? rowElements.length : -1;
  if (isEditorMode) {
    var editor = section.getEditor(container);
    if (editor) rowElements.push(editor);
  }
  rowElements.forEach(function (rowEl, rowIndex) {
    var groupFieldId = "".concat(section.rootFieldId, ":").concat(rowIndex);
    questions.push(autofill_section_hierarchy_objectSpread(autofill_section_hierarchy_objectSpread({
      question: section.rowLabel(rowIndex),
      label: section.rowLabel(rowIndex),
      // The group is the leaves' sync point: its answer resolves only once the root's iterator
      // marks this row ready (see waitForSectionEntryReady) — so leaves can never fill before the
      // clear, or before their row/editor exists. It still has no DOM operation of its own.
      fieldId: groupFieldId,
      answerType: 'profileSectionEntry',
      fieldKind: null,
      dependsOnPrevious: false
    }, section.rootWaitForFieldId ? {
      waitForFieldId: section.rootWaitForFieldId
    } : {}), {}, {
      parentFieldId: section.rootFieldId,
      field: rowEl
    }));

    // Editor-mode committed rows are read-only cards — no fillable controls, group node only.
    if (isEditorMode && rowIndex < editorRowIndex) return;
    var _iterator2 = autofill_section_hierarchy_createForOfIteratorHelper(section.mappings),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _section$classifyLeaf, _section$classifyLeaf2, _classified$options;
        var mapping = _step2.value;
        var fieldInfo = section.getRowField(rowEl, mapping, rowIndex);
        if (!fieldInfo) continue; // control absent (hidden/unmapped) — leave untouched
        var classified = (_section$classifyLeaf = (_section$classifyLeaf2 = section.classifyLeaf) === null || _section$classifyLeaf2 === void 0 ? void 0 : _section$classifyLeaf2.call(section, mapping, fieldInfo, rowIndex)) !== null && _section$classifyLeaf !== void 0 ? _section$classifyLeaf : {};
        var baseKind = mapping.fieldHandlerKey || classified.fieldKind || mapping.leafKind || 'text';
        questions.push({
          question: "".concat(section.rowLabel(rowIndex), " \u2014 ").concat(mapping.label),
          label: mapping.label,
          fieldId: "".concat(groupFieldId, ":").concat(mapping.key),
          answerType: 'profileSectionField',
          fieldKind: "section-".concat(baseKind),
          options: (_classified$options = classified.options) !== null && _classified$options !== void 0 ? _classified$options : null,
          constraints: autofill_section_hierarchy_objectSpread(autofill_section_hierarchy_objectSpread({}, classified.constraints), {}, {
            section: section.profileSection,
            entryIndex: rowIndex,
            mappingKey: mapping.key
          }),
          dependsOnPrevious: false,
          // Leaves wait on their GROUP (the per-entry sync point); once it resolves they are
          // individual fields — answers resolve concurrently, DOM work serializes via the mutex.
          // A mapping may instead wait on a SIBLING leaf (`waitForMappingKey`) when its control is
          // repopulated by that sibling's value (e.g. a Country→State cascading dropdown), so it
          // fills only after the sibling settles.
          waitForFieldId: mapping.waitForMappingKey ? "".concat(groupFieldId, ":").concat(mapping.waitForMappingKey) : groupFieldId,
          parentFieldId: groupFieldId,
          field: fieldInfo.field
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  return questions;
}

// `maxEntries` may be a number (static cap) or a function resolved live — fixed-capacity blocks
// (e.g. Paylocity references: exactly referencesRequiredCount rows, no "Add" button) report their
// rendered row count so the root never chases a row that can never exist.
function resolveSectionMaxEntries(section) {
  var max = typeof section.maxEntries === 'function' ? section.maxEntries() : section.maxEntries;
  return Number.isFinite(max) && max >= 0 ? max : null;
}
function createSectionRootAnswerHandler(section) {
  return {
    isMetadataReady: function isMetadataReady() {
      return true;
    },
    fetchMissingMetadata: function () {
      var _fetchMissingMetadata = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee(metadata) {
        return autofill_section_hierarchy_regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, metadata);
          }
        }, _callee);
      }));
      function fetchMissingMetadata(_x4) {
        return _fetchMissingMetadata.apply(this, arguments);
      }
      return fetchMissingMetadata;
    }(),
    generateAnswer: function () {
      var _generateAnswer = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee2() {
        var profileData, count, maxEntries, _t;
        return autofill_section_hierarchy_regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              // Synchronous prefix: the root's processField runs before its groups' (scheduling order),
              // so the pass is active by the time any group's answer evaluates and gates its leaves.
              beginSectionPass(section.rootFieldId);
              _context2.p = 1;
              _context2.n = 2;
              return getProfileSectionData();
            case 2:
              profileData = _context2.v;
              count = resolveSectionEntries(section, profileData).length;
              maxEntries = resolveSectionMaxEntries(section);
              return _context2.a(2, maxEntries != null ? Math.min(count, maxEntries) : count);
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              console.warn("[".concat(section.rootFieldId, "] Failed to get profile data:"), _t);
              endSectionPass(section.rootFieldId); // the fill handler won't run — release the groups
              return _context2.a(2, {
                type: 'error',
                error: 'Failed to load profile data'
              });
          }
        }, _callee2, null, [[1, 3]]);
      }));
      function generateAnswer() {
        return _generateAnswer.apply(this, arguments);
      }
      return generateAnswer;
    }(),
    stringifyAnswerForPanel: function stringifyAnswerForPanel(count) {
      return "".concat(count, " ").concat(count === 1 ? 'entry' : 'entries');
    },
    isEditableOnPanel: function isEditableOnPanel() {
      return false;
    }
  };
}

// True when entry `rowIndex` is present and fillable: rows mode — the row element exists; editor
// mode — an editor is open (the entry being edited) or a committed row already covers the index.
function isSectionEntryPresent(section, rowIndex) {
  var container = section.getContainer();
  if (!container) return false;
  var committedCount = section.getRows(container).length;
  if (typeof section.getEditor === 'function') {
    return committedCount > rowIndex || committedCount === rowIndex && Boolean(section.getEditor(container));
  }
  return committedCount > rowIndex;
}

// Ensures entry `rowIndex` exists: press Add (under the DOM mutex), wait for the editing child to
// appear; re-press on timeout, up to `addRetryLimit` attempts.
function ensureSectionEntryPresent(_x5, _x6) {
  return _ensureSectionEntryPresent.apply(this, arguments);
} // Event-driven wait for all of entry `rowIndex`'s leaves to settle. The expected leaf set is
// recomputed from the LIVE row on every question-state event (conditional controls can appear or
// vanish mid-fill); completion requires a non-empty set with every leaf in a terminal status,
// stable for a short settle window. The overall timeout is a fail-safe (log + proceed) so a stuck
// leaf can never wedge the run.
function _ensureSectionEntryPresent() {
  _ensureSectionEntryPresent = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee1(section, rowIndex) {
    var _section$addRetryLimi, _ref10, _section$editorAppear;
    var _ref1,
      _ref1$shouldAbort,
      shouldAbort,
      attempts,
      appearTimeoutMs,
      _loop2,
      _ret,
      attempt,
      _args10 = arguments;
    return autofill_section_hierarchy_regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _ref1 = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : {}, _ref1$shouldAbort = _ref1.shouldAbort, shouldAbort = _ref1$shouldAbort === void 0 ? autofill_section_hierarchy_NEVER_ABORT : _ref1$shouldAbort;
          if (!isSectionEntryPresent(section, rowIndex)) {
            _context10.n = 1;
            break;
          }
          return _context10.a(2, true);
        case 1:
          attempts = (_section$addRetryLimi = section.addRetryLimit) !== null && _section$addRetryLimi !== void 0 ? _section$addRetryLimi : DEFAULT_ADD_RETRY_LIMIT;
          appearTimeoutMs = (_ref10 = (_section$editorAppear = section.editorAppearTimeoutMs) !== null && _section$editorAppear !== void 0 ? _section$editorAppear : section.rowGrowthTimeoutMs) !== null && _ref10 !== void 0 ? _ref10 : DEFAULT_ENTRY_APPEAR_TIMEOUT_MS;
          _loop2 = /*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _loop2() {
            var container, appeared;
            return autofill_section_hierarchy_regenerator().w(function (_context1) {
              while (1) switch (_context1.n) {
                case 0:
                  if (!(shouldAbort() || isAborted())) {
                    _context1.n = 1;
                    break;
                  }
                  return _context1.a(2, {
                    v: false
                  });
                case 1:
                  container = section.getContainer();
                  if (container) {
                    _context1.n = 2;
                    break;
                  }
                  return _context1.a(2, {
                    v: false
                  });
                case 2:
                  _context1.n = 3;
                  return runDomTask(function () {
                    return section.addRow(container, {
                      shouldAbort: shouldAbort
                    });
                  }, {
                    shouldAbort: shouldAbort
                  });
                case 3:
                  _context1.n = 4;
                  return waitForPositiveResult(function () {
                    return isSectionEntryPresent(section, rowIndex) ? true : null;
                  }, appearTimeoutMs);
                case 4:
                  appeared = _context1.v;
                  if (!appeared) {
                    _context1.n = 5;
                    break;
                  }
                  return _context1.a(2, {
                    v: true
                  });
                case 5:
                  return _context1.a(2);
              }
            }, _loop2);
          });
          attempt = 0;
        case 2:
          if (!(attempt < attempts)) {
            _context10.n = 5;
            break;
          }
          return _context10.d(autofill_section_hierarchy_regeneratorValues(_loop2()), 3);
        case 3:
          _ret = _context10.v;
          if (!_ret) {
            _context10.n = 4;
            break;
          }
          return _context10.a(2, _ret.v);
        case 4:
          attempt += 1;
          _context10.n = 2;
          break;
        case 5:
          return _context10.a(2, isSectionEntryPresent(section, rowIndex));
      }
    }, _callee1);
  }));
  return _ensureSectionEntryPresent.apply(this, arguments);
}
function waitForEditingSectionToComplete(section, rowIndex) {
  var _section$entryComplet;
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref3$shouldAbort = _ref3.shouldAbort,
    shouldAbort = _ref3$shouldAbort === void 0 ? autofill_section_hierarchy_NEVER_ABORT : _ref3$shouldAbort;
  var timeoutMs = (_section$entryComplet = section.entryCompleteTimeoutMs) !== null && _section$entryComplet !== void 0 ? _section$entryComplet : DEFAULT_ENTRY_COMPLETE_TIMEOUT_MS;
  var isEntryComplete = function isEntryComplete() {
    var rowEl = getSectionRowElementForIndex(section, rowIndex);
    if (!rowEl) return false;
    var expectedStatuses = section.mappings.filter(function (mapping) {
      return section.getRowField(rowEl, mapping, rowIndex);
    }).map(function (mapping) {
      return getAutofillQuestionState("".concat(section.rootFieldId, ":").concat(rowIndex, ":").concat(mapping.key)).status;
    });
    return expectedStatuses.length > 0 && expectedStatuses.every(function (status) {
      return TERMINAL_LEAF_STATUSES.has(status);
    });
  };
  return new Promise(function (resolve) {
    var unsubscribe = null;
    var settleTimeoutId = null;
    var failSafeTimeoutId = null;
    var finish = function finish() {
      var _unsubscribe;
      (_unsubscribe = unsubscribe) === null || _unsubscribe === void 0 || _unsubscribe();
      if (settleTimeoutId) clearTimeout(settleTimeoutId);
      if (failSafeTimeoutId) clearTimeout(failSafeTimeoutId);
      resolve();
    };
    var evaluate = function evaluate() {
      if (shouldAbort() || isAborted()) {
        finish();
        return;
      }
      if (settleTimeoutId) {
        clearTimeout(settleTimeoutId);
        settleTimeoutId = null;
      }
      if (!isEntryComplete()) return;
      // Settle window: a late conditional leaf appearing (or flipping back to pending) before the
      // timer fires re-enters evaluate() via its state event and cancels this completion.
      settleTimeoutId = setTimeout(function () {
        if (isEntryComplete() || shouldAbort() || isAborted()) finish();
      }, ENTRY_SETTLE_MS);
    };
    failSafeTimeoutId = setTimeout(function () {
      console.warn("[".concat(section.rootFieldId, "] Entry ").concat(rowIndex + 1, " did not settle within ").concat(timeoutMs, "ms \u2014 continuing"));
      finish();
    }, timeoutMs);
    unsubscribe = subscribeAutofillQuestionState(evaluate);
    evaluate();
  });
}

// The iterative section root fill: clear existing entries, then per entry — ensure its row/editor
// exists (Add + appear-wait + retries), mark it ready (releases the group gate; the detector has
// picked the revealed controls up and their normal read -> answer -> write flows run), wait
// event-driven for all its leaves to settle, save when the platform commits per entry, continue.
// Runs OUTSIDE the engine's DOM mutex (bypassDomMutex) — it takes the mutex only around its own
// clicks; the leaf fills it waits on need the mutex themselves.
function createSectionRootKindHandler(section) {
  var handler = /*#__PURE__*/function () {
    var _ref4 = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee3(_fieldId, _question, count, field) {
      var _ref5,
        _ref5$shouldAbort,
        shouldAbort,
        container,
        liveMaxEntries,
        targetCount,
        rowIndex,
        present,
        _section$saveSettleMs,
        _args3 = arguments;
      return autofill_section_hierarchy_regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _ref5 = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : {}, _ref5$shouldAbort = _ref5.shouldAbort, shouldAbort = _ref5$shouldAbort === void 0 ? autofill_section_hierarchy_NEVER_ABORT : _ref5$shouldAbort;
            _context3.p = 1;
            markSectionPassFilling(section.rootFieldId);
            container = section.getContainer() || field;
            if (!(!container || shouldAbort())) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2);
          case 2:
            if (!section.clearRows) {
              _context3.n = 3;
              break;
            }
            _context3.n = 3;
            return runDomTask(function () {
              return section.clearRows(section.getContainer() || field, {
                shouldAbort: shouldAbort
              });
            }, {
              shouldAbort: shouldAbort
            });
          case 3:
            if (!(typeof count !== 'number' || count <= 0)) {
              _context3.n = 4;
              break;
            }
            return _context3.a(2);
          case 4:
            liveMaxEntries = resolveSectionMaxEntries(section);
            targetCount = liveMaxEntries != null ? Math.min(count, liveMaxEntries) : count;
            rowIndex = 0;
          case 5:
            if (!(rowIndex < targetCount)) {
              _context3.n = 13;
              break;
            }
            if (!(shouldAbort() || isAborted())) {
              _context3.n = 6;
              break;
            }
            return _context3.a(2);
          case 6:
            _context3.n = 7;
            return ensureSectionEntryPresent(section, rowIndex, {
              shouldAbort: shouldAbort
            });
          case 7:
            present = _context3.v;
            if (present) {
              _context3.n = 9;
              break;
            }
            if (!(shouldAbort() || isAborted())) {
              _context3.n = 8;
              break;
            }
            return _context3.a(2);
          case 8:
            throw new Error("Could not open entry ".concat(rowIndex + 1, " of ").concat(targetCount, " for ").concat(section.rootQuestion));
          case 9:
            markSectionEntryReady(section.rootFieldId, rowIndex);
            _context3.n = 10;
            return waitForEditingSectionToComplete(section, rowIndex, {
              shouldAbort: shouldAbort
            });
          case 10:
            if (!(section.saveEntry && !shouldAbort() && !isAborted())) {
              _context3.n = 12;
              break;
            }
            _context3.n = 11;
            return runDomTask(function () {
              return section.saveEntry(section.getContainer() || field, {
                shouldAbort: shouldAbort
              });
            }, {
              shouldAbort: shouldAbort
            });
          case 11:
            _context3.n = 12;
            return sleep((_section$saveSettleMs = section.saveSettleMs) !== null && _section$saveSettleMs !== void 0 ? _section$saveSettleMs : DEFAULT_SAVE_SETTLE_MS);
          case 12:
            rowIndex += 1;
            _context3.n = 5;
            break;
          case 13:
            if (!(section.afterEntries && !shouldAbort() && !isAborted())) {
              _context3.n = 14;
              break;
            }
            _context3.n = 14;
            return runDomTask(function () {
              return section.afterEntries(section.getContainer() || field, {
                shouldAbort: shouldAbort
              });
            }, {
              shouldAbort: shouldAbort
            });
          case 14:
            _context3.p = 14;
            // Always release the pass — group gates must never outlive the root's fill (abort/error
            // included), or their leaves would hang until the fail-safe cap.
            endSectionPass(section.rootFieldId);
            return _context3.f(14);
          case 15:
            return _context3.a(2);
        }
      }, _callee3, null, [[1,, 14, 15]]);
    }));
    return function handler(_x7, _x8, _x9, _x0) {
      return _ref4.apply(this, arguments);
    };
  }();
  handler.bypassDomMutex = true;
  return handler;
}

// Registers the whole hierarchy into a platform's handler maps:
//  - root answerType (count) + root fieldKind (clear + add×N) per section
//  - the shared 'profileSectionField' leaf answerType — profile-resolved (or AI-resolved for
//    aiFallback leaves), never banked as profile knowledge: the backend keeps these row-scoped
//    Q&As out of the qas bank via isProfileSectionQa (@bidhub/service-utils/confirmationRouting)
//  - 'section-<baseKind>' wrapper fieldKinds that re-resolve the live control and delegate to the
//    platform's base handlers
// `getAnswer` (optional): the platform's answer client (extension-client getAnswer) — enables
// aiFallback leaves; without it they skip exactly as before.
function registerProfileSectionHierarchy(_ref6) {
  var sections = _ref6.sections,
    answerTypeHandlers = _ref6.answerTypeHandlers,
    fieldKindHandlers = _ref6.fieldKindHandlers,
    _ref6$wrappedFieldKin = _ref6.wrappedFieldKinds,
    wrappedFieldKinds = _ref6$wrappedFieldKin === void 0 ? [] : _ref6$wrappedFieldKin,
    _ref6$optionDependent = _ref6.optionDependentLeafKinds,
    optionDependentLeafKinds = _ref6$optionDependent === void 0 ? [] : _ref6$optionDependent,
    _ref6$fetchLeafOption = _ref6.fetchLeafOptions,
    fetchLeafOptions = _ref6$fetchLeafOption === void 0 ? null : _ref6$fetchLeafOption,
    _ref6$getAnswer = _ref6.getAnswer,
    getAnswer = _ref6$getAnswer === void 0 ? null : _ref6$getAnswer;
  sections.forEach(function (section) {
    var _section$answerType2, _section$answerType3;
    sectionsByRootId.set(section.rootFieldId, section);
    answerTypeHandlers.set((_section$answerType2 = section.answerType) !== null && _section$answerType2 !== void 0 ? _section$answerType2 : section.rootFieldId, createSectionRootAnswerHandler(section));
    fieldKindHandlers.set((_section$answerType3 = section.answerType) !== null && _section$answerType3 !== void 0 ? _section$answerType3 : section.rootFieldId, createSectionRootKindHandler(section));
  });

  // Entry group: the per-row sync point. Its answer resolves once the root's iterator marks the
  // row ready (immediately when no fill pass is active); the leaves wait on it via waitForFieldId.
  // No DOM operation (fieldKind null). In LIVE_ONLY_ANSWER_TYPES like the other section types.
  answerTypeHandlers.set('profileSectionEntry', {
    isMetadataReady: function isMetadataReady() {
      return true;
    },
    fetchMissingMetadata: function () {
      var _fetchMissingMetadata2 = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee4(metadata) {
        return autofill_section_hierarchy_regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              return _context4.a(2, metadata);
          }
        }, _callee4);
      }));
      function fetchMissingMetadata(_x1) {
        return _fetchMissingMetadata2.apply(this, arguments);
      }
      return fetchMissingMetadata;
    }(),
    generateAnswer: function () {
      var _generateAnswer2 = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee5(_question, _metadata, fieldId) {
        var parsed;
        return autofill_section_hierarchy_regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              parsed = parseSectionFieldId(fieldId);
              if (!(parsed && !parsed.mapping)) {
                _context5.n = 1;
                break;
              }
              _context5.n = 1;
              return waitForSectionEntryReady(parsed.section.rootFieldId, parsed.rowIndex);
            case 1:
              return _context5.a(2, null);
          }
        }, _callee5);
      }));
      function generateAnswer(_x10, _x11, _x12) {
        return _generateAnswer2.apply(this, arguments);
      }
      return generateAnswer;
    }(),
    isEditableOnPanel: function isEditableOnPanel() {
      return false;
    }
  });
  answerTypeHandlers.set('profileSectionField', {
    isMetadataReady: function isMetadataReady(metadata) {
      return !optionDependentLeafKinds.includes(metadata.fieldKind) || Array.isArray(metadata.options);
    },
    fetchMissingMetadata: function () {
      var _fetchMissingMetadata3 = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee6(metadata, fieldId, _question, _field, context) {
        var parsed, live;
        return autofill_section_hierarchy_regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (fetchLeafOptions) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2, metadata);
            case 1:
              parsed = parseSectionFieldId(fieldId);
              live = resolveLiveSectionField(fieldId);
              if (!(!(parsed !== null && parsed !== void 0 && parsed.mapping) || !live)) {
                _context6.n = 2;
                break;
              }
              return _context6.a(2, metadata);
            case 2:
              return _context6.a(2, fetchLeafOptions(metadata, fieldId, parsed, live, context));
          }
        }, _callee6);
      }));
      function fetchMissingMetadata(_x13, _x14, _x15, _x16, _x17) {
        return _fetchMissingMetadata3.apply(this, arguments);
      }
      return fetchMissingMetadata;
    }(),
    generateAnswer: function () {
      var _generateAnswer3 = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee7(question, metadata, fieldId) {
        var parsed, entry, profileData, effectiveFieldKind, value, _parsed$section$aiCon, _parsed$section$aiCon2, _parsed$section, pairs, options, answerType, _metadata$constraints, aiAnswer, text, _t2, _t3;
        return autofill_section_hierarchy_regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              parsed = parseSectionFieldId(fieldId);
              if (parsed !== null && parsed !== void 0 && parsed.mapping) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2, {
                type: 'skip'
              });
            case 1:
              _context7.p = 1;
              _context7.n = 2;
              return getProfileSectionData();
            case 2:
              profileData = _context7.v;
              entry = resolveSectionEntries(parsed.section, profileData)[parsed.rowIndex];
              _context7.n = 4;
              break;
            case 3:
              _context7.p = 3;
              _t2 = _context7.v;
              console.warn('[profileSectionField] Failed to get profile data:', _t2);
              return _context7.a(2, {
                type: 'error',
                error: 'Failed to load profile data'
              });
            case 4:
              if (!(entry === undefined)) {
                _context7.n = 5;
                break;
              }
              return _context7.a(2, {
                type: 'skip'
              });
            case 5:
              // DOM row beyond the profile's entries
              effectiveFieldKind = resolveSectionMappingKind(parsed.mapping.fieldKind, baseSectionFieldKind(metadata.fieldKind));
              _context7.n = 6;
              return resolveSectionMappingValue(entry, autofill_section_hierarchy_objectSpread(autofill_section_hierarchy_objectSpread({}, parsed.mapping), {}, {
                fieldKind: effectiveFieldKind
              }), metadata.options || [], {
                live: resolveLiveSectionField(fieldId)
              });
            case 6:
              value = _context7.v;
              if (!(value != null)) {
                _context7.n = 7;
                break;
              }
              return _context7.a(2, value);
            case 7:
              if (!(parsed.mapping.aiFallback && typeof getAnswer === 'function')) {
                _context7.n = 13;
                break;
              }
              pairs = (_parsed$section$aiCon = (_parsed$section$aiCon2 = (_parsed$section = parsed.section).aiContextPairs) === null || _parsed$section$aiCon2 === void 0 ? void 0 : _parsed$section$aiCon2.call(_parsed$section, entry)) !== null && _parsed$section$aiCon !== void 0 ? _parsed$section$aiCon : [];
              options = Array.isArray(metadata.options) ? metadata.options : [];
              answerType = options.length > 0 ? 'single-select' : 'text';
              _context7.p = 8;
              _context7.n = 9;
              return getAnswer(question, answerType, options, (_metadata$constraints = metadata.constraints) !== null && _metadata$constraints !== void 0 ? _metadata$constraints : {}, fieldId, true, pairs);
            case 9:
              aiAnswer = _context7.v;
              if (!(aiAnswer && autofill_section_hierarchy_typeof(aiAnswer) === 'object')) {
                _context7.n = 10;
                break;
              }
              return _context7.a(2, aiAnswer);
            case 10:
              text = String(aiAnswer !== null && aiAnswer !== void 0 ? aiAnswer : '').trim();
              if (!text) {
                _context7.n = 11;
                break;
              }
              return _context7.a(2, resolveAutofillAnswer(text, answerType, options));
            case 11:
              _context7.n = 13;
              break;
            case 12:
              _context7.p = 12;
              _t3 = _context7.v;
              console.warn("[profileSectionField] AI fallback failed for ".concat(fieldId, ":"), _t3);
            case 13:
              return _context7.a(2, {
                type: 'skip'
              });
          }
        }, _callee7, null, [[8, 12], [1, 3]]);
      }));
      function generateAnswer(_x18, _x19, _x20) {
        return _generateAnswer3.apply(this, arguments);
      }
      return generateAnswer;
    }(),
    stringifyAnswerForPanel: function stringifyAnswerForPanel(answer) {
      return typeof answer === 'boolean' ? answer ? 'Yes' : 'No' : undefined;
    },
    isEditableOnPanel: function isEditableOnPanel() {
      return true;
    }
  });

  // Wrapper field-kinds for section leaves: re-resolve the LIVE control (the root's clear/re-add
  // cycle replaces row DOM nodes after row-0 leaves were detected) and delegate to the base
  // handler under the mapping's row label so label-matching handlers keep working. A vanished
  // control (row cleared, conditional field hidden) is a silent no-op.
  var _iterator3 = autofill_section_hierarchy_createForOfIteratorHelper(wrappedFieldKinds),
    _step3;
  try {
    var _loop = function _loop() {
      var baseKind = _step3.value;
      var baseHandler = fieldKindHandlers.get(baseKind);
      fieldKindHandlers.set("section-".concat(baseKind), /*#__PURE__*/function () {
        var _ref7 = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee8(fieldId, _question, answer, _field, context) {
          var _parsed$mapping$quest;
          var parsed, live;
          return autofill_section_hierarchy_regenerator().w(function (_context8) {
            while (1) switch (_context8.n) {
              case 0:
                parsed = parseSectionFieldId(fieldId);
                live = resolveLiveSectionField(fieldId);
                if (!(!(parsed !== null && parsed !== void 0 && parsed.mapping) || !live)) {
                  _context8.n = 1;
                  break;
                }
                return _context8.a(2, undefined);
              case 1:
                return _context8.a(2, baseHandler === null || baseHandler === void 0 ? void 0 : baseHandler(live.fieldId, (_parsed$mapping$quest = parsed.mapping.question) !== null && _parsed$mapping$quest !== void 0 ? _parsed$mapping$quest : parsed.mapping.label, answer, live.field, context));
            }
          }, _callee8);
        }));
        return function (_x21, _x22, _x23, _x24, _x25) {
          return _ref7.apply(this, arguments);
        };
      }());
    };
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

// Convenience for platforms that click one "add" button and need a settle pause.
function createClickAddRowAction(findAddButton) {
  var settleMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  return /*#__PURE__*/function () {
    var _ref8 = autofill_section_hierarchy_asyncToGenerator(/*#__PURE__*/autofill_section_hierarchy_regenerator().m(function _callee9(container) {
      var _ref9,
        _ref9$shouldAbort,
        shouldAbort,
        button,
        _args9 = arguments;
      return autofill_section_hierarchy_regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _ref9 = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {}, _ref9$shouldAbort = _ref9.shouldAbort, shouldAbort = _ref9$shouldAbort === void 0 ? autofill_section_hierarchy_NEVER_ABORT : _ref9$shouldAbort;
            button = findAddButton(container);
            if (!(!button || shouldAbort())) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            button.click();
            _context9.n = 2;
            return autofill_section_hierarchy_sleep(settleMs);
          case 2:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    return function (_x26) {
      return _ref8.apply(this, arguments);
    };
  }();
}
;// ../../packages/job-parsers/content/platforms/remote-input.js
function remote_input_typeof(o) { "@babel/helpers - typeof"; return remote_input_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, remote_input_typeof(o); }
function remote_input_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = remote_input_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function remote_input_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return remote_input_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? remote_input_arrayLikeToArray(r, a) : void 0; } }
function remote_input_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function remote_input_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return remote_input_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (remote_input_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, remote_input_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, remote_input_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), remote_input_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", remote_input_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), remote_input_regeneratorDefine2(u), remote_input_regeneratorDefine2(u, o, "Generator"), remote_input_regeneratorDefine2(u, n, function () { return this; }), remote_input_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (remote_input_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function remote_input_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } remote_input_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { remote_input_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, remote_input_regeneratorDefine2(e, r, n, t); }
function remote_input_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function remote_input_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { remote_input_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { remote_input_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, remote_input_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function remote_input_toPropertyKey(t) { var i = remote_input_toPrimitive(t, "string"); return "symbol" == remote_input_typeof(i) ? i : i + ""; }
function remote_input_toPrimitive(t, r) { if ("object" != remote_input_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != remote_input_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == remote_input_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
// Remote input — the content-script half of the runner lane's "outer agent" fill path.
//
// Bot-scored platforms (Ashby's reCAPTCHA v3 spam wall, Lever's hCaptcha Enterprise) fold pointer motion and key cadence into a
// SESSION risk score, and a content script can only ever synthesize `isTrusted:false` events. On the
// runner lane the host process (apps/apply-runner slot, or the runner-lane-local-debug harness) owns
// the browser through patchright, so instead of touching the DOM these primitives work out WHAT a
// person would do — where to click (viewport px), what to type — and ask the host to do it:
//
//   content  ──chrome.runtime── background `remoteInput` ──local bridge { type:'input' }── host
//            (this module)      (autoapply background.js)   (local-bridge.sendInputRequest)   (humanInput.js)
//
// The host replays the batch through page.mouse / page.keyboard (CDP Input.* → trusted events) with
// Bézier glides and jittered timing. Coordinates are main-frame viewport CSS px, so this only works
// from the TOP frame (iframe-hosted forms throw — see assertTopFrame).
//
// Capability: the host advertises the platforms it serves (runContext.remoteInput.platforms); the
// background answers `getRemoteInputCapability`. Platform adapters ask `isRemoteInputEnabled('ashbyhq')`
// once per fill and branch. There is deliberately NO DOM fallback in here: when the host refuses or the
// wire is down the primitive throws RemoteInputError and the field fails like any other fill failure
// (a half-human, half-synthetic session is exactly what the scorer flags).


var VIEWPORT_MARGIN_PX = 40;
// Sticky cookie/privacy bars sit at the bottom of the viewport (Lever's "Privacy Notice" is ~100 px):
// a target scrolled to just above the bottom edge is CLICKED THROUGH the bar (2026-09-11 Virtualitics
// run: the Disability select never focused). Keep a taller bottom margin and hit-test before clicking.
var VIEWPORT_BOTTOM_MARGIN_PX = 130;
// A themed form can be wider than the window (Nous Research's Ashby board: every input and the Submit
// button end 48 px past the right edge at any window width). The vertical wheel can never change that,
// and a click only needs an on-screen point that lands on the target — so a target counts as in view
// along x once this much of its width is on screen, and the click aims inside that visible part.
var MIN_VISIBLE_WIDTH_PX = 24;
var MAX_SCROLL_ATTEMPTS = 6;
var MAX_WHEEL_PER_ATTEMPT_PX = 1500;
// Values longer than this are typed for the first TYPED_PREFIX_CHARS keystrokes, then inserted in one
// go (the paste-like path) — a person pastes a cover letter, and 2,000 keystrokes at human cadence
// would blow the fill clock.
var LONG_TEXT_THRESHOLD_CHARS = 160;
var TYPED_PREFIX_CHARS = 50;
var SETTLE_MS = 70;
var RemoteInputError = /*#__PURE__*/function (_Error) {
  function RemoteInputError(message) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$code = _ref.code,
      code = _ref$code === void 0 ? 'remote_input_failed' : _ref$code,
      _ref$detail = _ref.detail,
      detail = _ref$detail === void 0 ? null : _ref$detail;
    _classCallCheck(this, RemoteInputError);
    _this = _callSuper(this, RemoteInputError, [message]);
    _this.name = 'RemoteInputError';
    _this.code = code;
    _this.detail = detail;
    return _this;
  }
  _inherits(RemoteInputError, _Error);
  return _createClass(RemoteInputError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Fire-and-forget trace to the HOST log (background `remoteInputTrace` → bridge { type:'input-trace' }):
 * the only window into this content script the runner box / harness has. Every thrown
 * RemoteInputError goes through `fail()` so a refused gesture is visible where the operator looks.
 */
function traceRemoteInput(message) {
  var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log("[remote-input] ".concat(message), detail !== null && detail !== void 0 ? detail : '');
  try {
    void sendRuntimeMessage({
      message_type: 'remoteInputTrace',
      message: message,
      detail: detail,
      url: typeof window !== 'undefined' ? window.location.href : null
    })["catch"](function () {
      return undefined;
    });
  } catch (_unused) {/* no runtime — nothing to trace to */}
}
function fail(message) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var error = new RemoteInputError(message, options);
  traceRemoteInput("\u2717 ".concat(error.code, ": ").concat(message), error.detail);
  return error;
}
var toLowerList = function toLowerList(list) {
  return Array.isArray(list) ? list.map(function (p) {
    return String(p).toLowerCase();
  }) : [];
};
var capabilityPromise = null;

/** { enabled, platforms } from the background — memoized for the life of the content script. */
function getRemoteInputCapability() {
  if (!capabilityPromise) {
    capabilityPromise = sendRuntimeMessage({
      message_type: 'getRemoteInputCapability'
    }, 'remote input capability failed').then(function (data) {
      return {
        enabled: Boolean(data === null || data === void 0 ? void 0 : data.enabled),
        platforms: toLowerList(data === null || data === void 0 ? void 0 : data.platforms)
      };
    })["catch"](function () {
      return {
        enabled: false,
        platforms: []
      };
    });
  }
  return capabilityPromise;
}

/** True when the host replays gestures for `platformKey` (e.g. 'ashbyhq'). */
function isRemoteInputEnabled(_x) {
  return _isRemoteInputEnabled.apply(this, arguments);
}

/** Tests only: forget the memoized capability. */
function _isRemoteInputEnabled() {
  _isRemoteInputEnabled = remote_input_asyncToGenerator(/*#__PURE__*/remote_input_regenerator().m(function _callee(platformKey) {
    var capability;
    return remote_input_regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return getRemoteInputCapability();
        case 1:
          capability = _context.v;
          return _context.a(2, capability.enabled && capability.platforms.includes(String(platformKey !== null && platformKey !== void 0 ? platformKey : '').toLowerCase()));
      }
    }, _callee);
  }));
  return _isRemoteInputEnabled.apply(this, arguments);
}
function resetRemoteInputCapabilityCache() {
  capabilityPromise = null;
}
function assertTopFrame() {
  if (typeof window !== 'undefined' && window.top && window.top !== window) {
    throw fail('remote input is only supported in the top frame', {
      code: 'remote_input_unsupported_frame'
    });
  }
}
function viewportSize() {
  var _document$documentEle, _document$documentEle2;
  return {
    width: window.innerWidth || ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.clientWidth) || 1920,
    height: window.innerHeight || ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.clientHeight) || 1080
  };
}

/** The on-screen part of `rect` along x (its left / right clipped to the viewport). */
function visibleSpanX(rect) {
  var _viewportSize = viewportSize(),
    width = _viewportSize.width;
  return {
    left: Math.max(rect.left, 0),
    right: Math.min(rect.right, width)
  };
}

/**
 * Aim a little off-centre (not always dead-centre) — a natural pointer target inside the element, and
 * inside the part of it that is on screen when it runs past the window's edge.
 */
function pointFor(element) {
  var rect = element.getBoundingClientRect();
  var span = visibleSpanX(rect);
  var left = span.right > span.left ? span.left : rect.left;
  var width = span.right > span.left ? span.right - span.left : rect.width;
  return {
    x: Math.round(left + width * (0.35 + Math.random() * 0.3)),
    y: Math.round(rect.top + rect.height * (0.35 + Math.random() * 0.3))
  };
}
function isInViewport(rect) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : VIEWPORT_MARGIN_PX;
  var bottomMargin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : VIEWPORT_BOTTOM_MARGIN_PX;
  var _viewportSize2 = viewportSize(),
    height = _viewportSize2.height;
  var span = visibleSpanX(rect);
  return rect.top >= margin && rect.bottom <= height - Math.max(margin, bottomMargin) && span.right - span.left >= Math.min(rect.width, MIN_VISIBLE_WIDTH_PX);
}
var pageScrollY = function pageScrollY() {
  var _ref2, _ref3, _window$scrollY, _document$documentEle3;
  return (_ref2 = (_ref3 = (_window$scrollY = window.scrollY) !== null && _window$scrollY !== void 0 ? _window$scrollY : window.pageYOffset) !== null && _ref3 !== void 0 ? _ref3 : (_document$documentEle3 = document.documentElement) === null || _document$documentEle3 === void 0 ? void 0 : _document$documentEle3.scrollTop) !== null && _ref2 !== void 0 ? _ref2 : 0;
};

// Composed-tree parent: a slotted light-DOM node → its <slot>; a shadow root's child → the host. Web-
// component forms (SmartRecruiters' spl-*/oc-* widgets) put every native control inside a shadow root
// and project the button text through a slot, so `Node.contains` (which stops at shadow boundaries)
// says "unrelated" for a click that a real browser would deliver straight to the control.
function composedParent(node) {
  if (!node) return null;
  if (node.assignedSlot) return node.assignedSlot;
  var parent = node.parentNode;
  if (parent && typeof ShadowRoot !== 'undefined' && parent instanceof ShadowRoot) return parent.host;
  return parent;
}
function composedContains(ancestor, node) {
  for (var current = node; current; current = composedParent(current)) {
    if (current === ancestor) return true;
  }
  return false;
}

/** Deepest element under (x, y), descending through open shadow roots (document.elementFromPoint stops at the host). */
function deepElementFromPoint(x, y) {
  if (typeof document.elementFromPoint !== 'function') return null;
  var hit = document.elementFromPoint(x, y);
  for (var guard = 0; (_hit = hit) !== null && _hit !== void 0 && _hit.shadowRoot && guard < 25; guard += 1) {
    var _hit;
    var inner = typeof hit.shadowRoot.elementFromPoint === 'function' ? hit.shadowRoot.elementFromPoint(x, y) : null;
    if (!inner || inner === hit) break;
    hit = inner;
  }
  return hit;
}

/**
 * What a click at (x, y) would land on — the target itself, something inside it (including its slotted
 * content), or an ancestor such as its wrapping label / shadow host. Composed-tree aware.
 */
function isHitOn(element, x, y) {
  if (typeof document.elementFromPoint !== 'function') return true; // no layout engine (tests)
  var hit = deepElementFromPoint(x, y);
  if (!hit) return false;
  return hit === element || composedContains(element, hit) || composedContains(hit, element);
}

/**
 * Send one gesture batch to the host. Resolves the host's { ok:true, cursor, executed }; throws
 * RemoteInputError on a refusal ({ ok:false, error }) or a broken wire. Never falls back to the DOM.
 */
function runRemoteInput(_x2) {
  return _runRemoteInput.apply(this, arguments);
}

/**
 * Bring `element` inside the viewport with real wheel scrolling (no scrollIntoView — a scroll
 * position that changes with zero wheel input is a tell). The wheel is aimed at the page's left
 * gutter so a scrollable widget under the cursor cannot swallow it.
 */
function _runRemoteInput() {
  _runRemoteInput = remote_input_asyncToGenerator(/*#__PURE__*/remote_input_regenerator().m(function _callee2(actions) {
    var _result;
    var result, _result2, _result3, _t;
    return remote_input_regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          assertTopFrame();
          _context2.p = 1;
          _context2.n = 2;
          return sendRuntimeMessage({
            message_type: 'remoteInput',
            url: window.location.href,
            actions: actions
          }, 'remote input failed');
        case 2:
          result = _context2.v;
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t = _context2.v;
          throw fail("remote input bridge error: ".concat((_t === null || _t === void 0 ? void 0 : _t.message) || _t), {
            code: 'remote_input_bridge',
            detail: _t === null || _t === void 0 ? void 0 : _t.message
          });
        case 4:
          if ((_result = result) !== null && _result !== void 0 && _result.ok) {
            _context2.n = 5;
            break;
          }
          throw fail("remote input refused: ".concat(((_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.error) || 'unknown'), {
            code: ((_result3 = result) === null || _result3 === void 0 ? void 0 : _result3.error) || 'remote_input_failed',
            detail: result
          });
        case 5:
          traceRemoteInput("".concat(actions.map(function (a) {
            return a.type;
          }).join(','), " \u2192 ok"));
          return _context2.a(2, result);
      }
    }, _callee2, null, [[1, 3]]);
  }));
  return _runRemoteInput.apply(this, arguments);
}
function scrollIntoViewRemote(_x3) {
  return _scrollIntoViewRemote.apply(this, arguments);
}

/** Scroll into view, glide, click. Resolves the point clicked. */
function _scrollIntoViewRemote() {
  _scrollIntoViewRemote = remote_input_asyncToGenerator(/*#__PURE__*/remote_input_regenerator().m(function _callee3(element) {
    var attempt, rect, _viewportSize3, height, wanted, dy, before;
    return remote_input_regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          attempt = 0;
        case 1:
          if (!(attempt < MAX_SCROLL_ATTEMPTS)) {
            _context3.n = 7;
            break;
          }
          rect = element.getBoundingClientRect();
          if (!isInViewport(rect)) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2);
        case 2:
          _viewportSize3 = viewportSize(), height = _viewportSize3.height;
          wanted = rect.top + rect.height / 2 - height / 2;
          dy = Math.max(-MAX_WHEEL_PER_ATTEMPT_PX, Math.min(MAX_WHEEL_PER_ATTEMPT_PX, Math.round(wanted)));
          if (!(dy === 0)) {
            _context3.n = 3;
            break;
          }
          return _context3.a(3, 7);
        case 3:
          before = pageScrollY();
          _context3.n = 4;
          return runRemoteInput([{
            type: 'wheel',
            x: 40,
            y: Math.round(height / 2),
            dy: dy
          }]);
        case 4:
          _context3.n = 5;
          return sleep(SETTLE_MS + 60);
        case 5:
          if (!(pageScrollY() === before && isInViewport(element.getBoundingClientRect(), 0, 0))) {
            _context3.n = 6;
            break;
          }
          return _context3.a(2);
        case 6:
          attempt += 1;
          _context3.n = 1;
          break;
        case 7:
          if (isInViewport(element.getBoundingClientRect(), 0, 0)) {
            _context3.n = 8;
            break;
          }
          throw fail('could not scroll the element into view', {
            code: 'remote_input_scroll_failed'
          });
        case 8:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _scrollIntoViewRemote.apply(this, arguments);
}
function remoteClick(_x4) {
  return _remoteClick.apply(this, arguments);
}

/** Short DOM descriptor for traces: tag, name/id, first class, leading text. */
function _remoteClick() {
  _remoteClick = remote_input_asyncToGenerator(/*#__PURE__*/remote_input_regenerator().m(function _callee4(element) {
    var _ref4,
      _ref4$button,
      button,
      size,
      point,
      rect,
      _viewportSize4,
      height,
      dy,
      _hit$getAttribute,
      _hit$getAttribute2,
      hit,
      by,
      title,
      captcha,
      code,
      detail,
      _args4 = arguments;
    return remote_input_regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _ref4 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, _ref4$button = _ref4.button, button = _ref4$button === void 0 ? 'left' : _ref4$button;
          if (element) {
            _context4.n = 1;
            break;
          }
          throw fail('no element to click', {
            code: 'remote_input_no_target'
          });
        case 1:
          size = element.getBoundingClientRect();
          if (size.width > 0 && size.height > 0) {
            _context4.n = 2;
            break;
          }
          throw fail('target is not visible', {
            code: 'remote_input_hidden_target'
          });
        case 2:
          _context4.n = 3;
          return scrollIntoViewRemote(element);
        case 3:
          point = pointFor(element);
          if (isHitOn(element, point.x, point.y)) {
            _context4.n = 6;
            break;
          }
          // Something fixed (cookie bar, sticky header) covers the target: centre it and re-test once.
          rect = element.getBoundingClientRect();
          _viewportSize4 = viewportSize(), height = _viewportSize4.height;
          dy = Math.round(rect.top + rect.height / 2 - height / 2);
          if (!(dy !== 0)) {
            _context4.n = 5;
            break;
          }
          _context4.n = 4;
          return runRemoteInput([{
            type: 'wheel',
            x: 40,
            y: Math.round(height / 2),
            dy: Math.max(-MAX_WHEEL_PER_ATTEMPT_PX, Math.min(MAX_WHEEL_PER_ATTEMPT_PX, dy))
          }]);
        case 4:
          _context4.n = 5;
          return sleep(SETTLE_MS + 60);
        case 5:
          point = pointFor(element);
          if (isHitOn(element, point.x, point.y)) {
            _context4.n = 6;
            break;
          }
          hit = deepElementFromPoint(point.x, point.y); // Name the cover. hCaptcha's challenge is a full-viewport fixed <iframe title="…hCaptcha security
          // challenge"> (z-index max) — when it is up, EVERY later field reports obscured; the box logs need to
          // tell that (a captcha, not an input bug) from a sticky bar or an overlay.
          by = hit ? "".concat(hit.tagName.toLowerCase()).concat(hit.id ? "#".concat(hit.id) : '').concat(hit.className ? ".".concat(String(hit.className).split(' ')[0]) : '') : null;
          title = (hit === null || hit === void 0 || (_hit$getAttribute = hit.getAttribute) === null || _hit$getAttribute === void 0 ? void 0 : _hit$getAttribute.call(hit, 'title')) || null;
          captcha = /captcha/i.test("".concat(title || '', " ").concat((hit === null || hit === void 0 || (_hit$getAttribute2 = hit.getAttribute) === null || _hit$getAttribute2 === void 0 ? void 0 : _hit$getAttribute2.call(hit, 'src')) || ''));
          code = captcha ? 'remote_input_captcha_challenge' : 'remote_input_obscured';
          detail = {
            by: by,
            title: title,
            target: "".concat(element.tagName.toLowerCase()).concat(element.name ? "[name=".concat(element.name, "]") : element.id ? "#".concat(element.id) : '')
          };
          if (captcha) {
            // Tell the driver NOW (autoapply background `remoteInputChallenge` → auto-driver
            // onRemoteInputChallenge): with the challenge up every later gesture fails the same way, so
            // the row parks for a remote assistant instead of riding the fill clock down field by field.
            void sendRuntimeMessage({
              message_type: 'remoteInputChallenge',
              code: code,
              detail: detail,
              url: window.location.href
            })["catch"](function () {
              return undefined;
            });
          }
          throw fail(captcha ? 'target is covered by a captcha challenge' : 'target is covered by another element', {
            code: code,
            detail: detail
          });
        case 6:
          _context4.n = 7;
          return runRemoteInput([{
            type: 'click',
            x: point.x,
            y: point.y,
            button: button
          }]);
        case 7:
          traceRemoteInput("clicked ".concat(describeTarget(element), " @").concat(point.x, ",").concat(point.y));
          return _context4.a(2, point);
      }
    }, _callee4);
  }));
  return _remoteClick.apply(this, arguments);
}
function describeTarget(element) {
  var _element$tagName;
  if (!element) return 'null';
  var tag = ((_element$tagName = element.tagName) === null || _element$tagName === void 0 ? void 0 : _element$tagName.toLowerCase()) || '?';
  var name = element.name ? "[name=".concat(element.name, "]") : element.id ? "#".concat(element.id) : '';
  var cls = element.className && typeof element.className === 'string' ? ".".concat(element.className.split(' ')[0]) : '';
  var text = String(element.textContent || element.value || '').replace(/\s+/g, ' ').trim().slice(0, 40);
  return "".concat(tag).concat(name).concat(cls).concat(text ? " \"".concat(text, "\"") : '');
}

// Select-all is Cmd+A on a Mac browser (the local harness) and Ctrl+A everywhere else (the Linux
// boxes) — the chord that does NOT match the OS just moves the caret, and a Backspace after it eats
// one character while the typed text lands on top of the prefill (2026-09-11 harness run: phone
// "(215) 645-2845(215) 645-2845…"). Try the OS's chord first, verify the field is empty, fall back.
var isMacBrowser = function isMacBrowser() {
  var _navigator$userAgentD;
  return /Mac|iPhone|iPad/i.test(typeof navigator !== 'undefined' && (((_navigator$userAgentD = navigator.userAgentData) === null || _navigator$userAgentD === void 0 ? void 0 : _navigator$userAgentD.platform) || navigator.platform) || '');
};
var selectAllChords = function selectAllChords() {
  return isMacBrowser() ? ['Meta+a', 'Control+a'] : ['Control+a', 'Meta+a'];
};

/** Empty a focused text control with select-all + Backspace, verifying it actually emptied. */
function clearControl(_x5) {
  return _clearControl.apply(this, arguments);
}
/**
 * Click into a text control and type `text`. Lever's résumé parse prefills name/email/phone/links
 * before these fields fill: an existing value is cleared first (clearControl, verified empty), and a
 * prefill that already equals `text` is left alone (a person does not retype a correct field). Long
 * values: typed prefix + one insertText (see LONG_TEXT_THRESHOLD_CHARS). Verifies the value landed
 * (one clear + insertText rescue), else throws.
 */
function _clearControl() {
  _clearControl = remote_input_asyncToGenerator(/*#__PURE__*/remote_input_regenerator().m(function _callee5(element) {
    var _element$value;
    var _iterator, _step, chord, _t2;
    return remote_input_regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _iterator = remote_input_createForOfIteratorHelper(selectAllChords());
          _context5.p = 1;
          _iterator.s();
        case 2:
          if ((_step = _iterator.n()).done) {
            _context5.n = 6;
            break;
          }
          chord = _step.value;
          _context5.n = 3;
          return runRemoteInput([{
            type: 'key',
            key: chord
          }, {
            type: 'key',
            key: 'Backspace'
          }]);
        case 3:
          _context5.n = 4;
          return sleep(SETTLE_MS);
        case 4:
          if (element.value) {
            _context5.n = 5;
            break;
          }
          return _context5.a(2);
        case 5:
          _context5.n = 2;
          break;
        case 6:
          _context5.n = 8;
          break;
        case 7:
          _context5.p = 7;
          _t2 = _context5.v;
          _iterator.e(_t2);
        case 8:
          _context5.p = 8;
          _iterator.f();
          return _context5.f(8);
        case 9:
          throw fail('could not clear the field', {
            code: 'remote_input_clear_failed',
            detail: {
              actual: String((_element$value = element.value) !== null && _element$value !== void 0 ? _element$value : '').slice(0, 80)
            }
          });
        case 10:
          return _context5.a(2);
      }
    }, _callee5, null, [[1, 7, 8, 9]]);
  }));
  return _clearControl.apply(this, arguments);
}
function remoteTypeInto(_x6, _x7) {
  return _remoteTypeInto.apply(this, arguments);
}

/**
 * Pick `option` ({ value, text }) on a native <select> like a keyboard user: click to focus, Escape the
 * OS-level popup (unreachable by page-level input), type the label (Chrome's typeahead), then step with
 * the arrow keys toward the target when typeahead landed elsewhere. Verifies `select.value`.
 */
function _remoteTypeInto() {
  _remoteTypeInto = remote_input_asyncToGenerator(/*#__PURE__*/remote_input_regenerator().m(function _callee6(element, text) {
    var _element$value2;
    var _ref5,
      _ref5$clear,
      clear,
      _ref5$verify,
      verify,
      value,
      actions,
      _element$value3,
      _args6 = arguments;
    return remote_input_regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _ref5 = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {}, _ref5$clear = _ref5.clear, clear = _ref5$clear === void 0 ? true : _ref5$clear, _ref5$verify = _ref5.verify, verify = _ref5$verify === void 0 ? true : _ref5$verify;
          value = String(text !== null && text !== void 0 ? text : '');
          if (!(clear && String((_element$value2 = element.value) !== null && _element$value2 !== void 0 ? _element$value2 : '') === value)) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2);
        case 1:
          _context6.n = 2;
          return remoteClick(element);
        case 2:
          if (!(clear && element.value)) {
            _context6.n = 3;
            break;
          }
          _context6.n = 3;
          return clearControl(element);
        case 3:
          actions = [];
          if (value.length > LONG_TEXT_THRESHOLD_CHARS) {
            actions.push({
              type: 'type',
              text: value.slice(0, TYPED_PREFIX_CHARS)
            }, {
              type: 'insertText',
              text: value.slice(TYPED_PREFIX_CHARS)
            });
          } else if (value) {
            actions.push({
              type: 'type',
              text: value
            });
          }
          if (!actions.length) {
            _context6.n = 4;
            break;
          }
          _context6.n = 4;
          return runRemoteInput(actions);
        case 4:
          if (verify) {
            _context6.n = 5;
            break;
          }
          return _context6.a(2);
        case 5:
          _context6.n = 6;
          return sleep(SETTLE_MS);
        case 6:
          if (!(element.value === value)) {
            _context6.n = 7;
            break;
          }
          return _context6.a(2);
        case 7:
          if (!element.value) {
            _context6.n = 8;
            break;
          }
          _context6.n = 8;
          return clearControl(element);
        case 8:
          _context6.n = 9;
          return runRemoteInput([{
            type: 'insertText',
            text: value
          }]);
        case 9:
          _context6.n = 10;
          return sleep(SETTLE_MS);
        case 10:
          if (!(element.value !== value)) {
            _context6.n = 11;
            break;
          }
          throw fail('typed value did not stick', {
            code: 'remote_input_value_mismatch',
            detail: {
              expected: value.slice(0, 80),
              actual: String((_element$value3 = element.value) !== null && _element$value3 !== void 0 ? _element$value3 : '').slice(0, 80)
            }
          });
        case 11:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return _remoteTypeInto.apply(this, arguments);
}
function remoteSelectNative(_x8, _x9) {
  return _remoteSelectNative.apply(this, arguments);
}

/** Tick/untick a checkbox (or pick a radio) by clicking its label, verifying `.checked`. */
function _remoteSelectNative() {
  _remoteSelectNative = remote_input_asyncToGenerator(/*#__PURE__*/remote_input_regenerator().m(function _callee7(select, option) {
    var _ref6, _option$text;
    var options, targetIndex, label, letter, i, delta, key;
    return remote_input_regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          if (!(!select || !option || option.value == null)) {
            _context7.n = 1;
            break;
          }
          throw fail('no option to select', {
            code: 'remote_input_no_target'
          });
        case 1:
          options = Array.from(select.options || []);
          targetIndex = options.findIndex(function (o) {
            return o.value === option.value;
          });
          if (!(targetIndex === -1)) {
            _context7.n = 2;
            break;
          }
          throw fail('option not on the select', {
            code: 'remote_input_no_target'
          });
        case 2:
          _context7.n = 3;
          return remoteClick(select);
        case 3:
          _context7.n = 4;
          return runRemoteInput([{
            type: 'key',
            key: 'Escape'
          }]);
        case 4:
          _context7.n = 5;
          return sleep(SETTLE_MS);
        case 5:
          // Typeahead on a focused, CLOSED select: letters pick the first option with that prefix, but a SPACE
          // re-opens the native popup (2026-09-11: "No, I do not have a disability…" never landed) — type only
          // the label's first word and let the arrow keys finish the job.
          label = String((_ref6 = (_option$text = option.text) !== null && _option$text !== void 0 ? _option$text : options[targetIndex].textContent) !== null && _ref6 !== void 0 ? _ref6 : '').trim().split(/\s+/)[0].replace(/(?:[\0-\/:-@\[-`\{-\xA9\xAB-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u065F\u066A-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07BF\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u0890-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0965\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09E5\u09F2\u09F3\u09FA\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A65\u0A70\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AE5\u0AF0-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B65\u0B70\u0B78-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0BE5\u0BF3-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5E\u0C5F\u0C62-\u0C65\u0C70-\u0C77\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDB\u0CDF\u0CE2-\u0CE5\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57\u0D62-\u0D65\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DE5\u0DF0-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F1F\u0F34-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u104A-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u1368\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u17DF\u17EA-\u17EF\u17FA-\u180F\u181A-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A17-\u1A1F\u1A55-\u1A7F\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B4F\u1B5A-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BFF\u1C24-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C8B-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFC\u2CFE\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3008-\u3020\u302A-\u3030\u3036\u3037\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31C0-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6F0-\uA716\uA720\uA721\uA789\uA78A\uA7DD-\uA7F0\uA802\uA806\uA80B\uA823-\uA82F\uA836-\uA83F\uA874-\uA881\uA8B4-\uA8CF\uA8DA-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9DA-\uA9DF\uA9E5\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEE0\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC57\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1F\uDD3A-\uDD3F\uDD5A-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE3F\uDE49-\uDE5F\uDE7F\uDEA0-\uDEBF\uDEC8\uDEE5-\uDEEA\uDEF0-\uDEFF\uDF36-\uDF3F\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD24-\uDD2F\uDD3A-\uDD3F\uDD66-\uDD6E\uDD86-\uDE5F\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEC1\uDEC8-\uDEFF\uDF28-\uDF2F\uDF46-\uDF50\uDF55-\uDF6F\uDF82-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC51\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDD02\uDD27-\uDD35\uDD40-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDCF\uDDDB\uDDDD-\uDDE0\uDDF5-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDEEF\uDEFA-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD4-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC4F\uDC5A-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEBF\uDECA-\uDECF\uDEE4-\uDEFF\uDF1B-\uDF2F\uDF3C-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFBF\uDFE1-\uDFEF\uDFFA-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC4F\uDC6D-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDD9F\uDDAA-\uDDAF\uDDDC-\uDDDF\uDDEA-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDF4F\uDF5A-\uDFAF\uDFB1-\uDFBF\uDFD5-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD836\uD83D\uD83F\uD87C\uD87D\uD87F\uD88E-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDD2F\uDD3A-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6F\uDEBF\uDECA-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD6D-\uDD6F\uDD7A-\uDE3F\uDE97-\uDE9F\uDEB9\uDEBA\uDED4-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFF1\uDFF7-\uDFFF]|\uD823[\uDCD6-\uDCFE\uDD1F-\uDD7F\uDDF3-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD833[\uDC00-\uDCEF\uDCFA-\uDFFF]|\uD834[\uDC00-\uDEBF\uDED4-\uDEDF\uDEF4-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDEEF\uDEFA-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDCEF\uDCFA-\uDDCF\uDDEE\uDDEF\uDDFB-\uDEBF\uDEDF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5-\uDEFD\uDF00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD0-\uDCFF\uDD44-\uDD4A\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCAC\uDCB0\uDCB5-\uDD00\uDD2E\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEAE\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD88D[\uDC7A-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, '').slice(0, 12);
          if (!label) {
            _context7.n = 13;
            break;
          }
          _context7.n = 6;
          return runRemoteInput([{
            type: 'type',
            text: label,
            cadence: 'fast'
          }]);
        case 6:
          _context7.n = 7;
          return sleep(SETTLE_MS + 60);
        case 7:
          if (!(select.value === option.value)) {
            _context7.n = 8;
            break;
          }
          return _context7.a(2);
        case 8:
          // Ambiguous first word ("I am a…" / "I am not a…" / "I don't wish…"): re-typing the same first
          // letter cycles through the options sharing it — the keyboard idiom every OS honours, unlike the
          // arrow keys, which open the popup on macOS.
          letter = label[0];
          i = 1;
        case 9:
          if (!(i < options.length && select.value !== option.value)) {
            _context7.n = 12;
            break;
          }
          _context7.n = 10;
          return runRemoteInput([{
            type: 'type',
            text: letter,
            cadence: 'fast'
          }]);
        case 10:
          _context7.n = 11;
          return sleep(SETTLE_MS);
        case 11:
          i += 1;
          _context7.n = 9;
          break;
        case 12:
          if (!(select.value === option.value)) {
            _context7.n = 13;
            break;
          }
          return _context7.a(2);
        case 13:
          delta = targetIndex - select.selectedIndex;
          if (!(delta !== 0 && Math.abs(delta) <= options.length)) {
            _context7.n = 15;
            break;
          }
          key = delta > 0 ? 'ArrowDown' : 'ArrowUp';
          _context7.n = 14;
          return runRemoteInput(Array.from({
            length: Math.abs(delta)
          }, function () {
            return {
              type: 'key',
              key: key
            };
          }));
        case 14:
          _context7.n = 15;
          return sleep(SETTLE_MS);
        case 15:
          if (!(select.value !== option.value)) {
            _context7.n = 16;
            break;
          }
          throw fail('select did not land on the option', {
            code: 'remote_input_value_mismatch',
            detail: {
              expected: option.value,
              actual: select.value
            }
          });
        case 16:
          return _context7.a(2);
      }
    }, _callee7);
  }));
  return _remoteSelectNative.apply(this, arguments);
}
function remoteCheck(_x0) {
  return _remoteCheck.apply(this, arguments);
}
function _remoteCheck() {
  _remoteCheck = remote_input_asyncToGenerator(/*#__PURE__*/remote_input_regenerator().m(function _callee8(input) {
    var shouldBeChecked,
      label,
      _args8 = arguments;
    return remote_input_regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          shouldBeChecked = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : true;
          if (input) {
            _context8.n = 1;
            break;
          }
          throw fail('no input to check', {
            code: 'remote_input_no_target'
          });
        case 1:
          if (!(Boolean(input.checked) === Boolean(shouldBeChecked))) {
            _context8.n = 2;
            break;
          }
          return _context8.a(2);
        case 2:
          label = input.closest('label');
          _context8.n = 3;
          return remoteClick(label || input);
        case 3:
          _context8.n = 4;
          return sleep(SETTLE_MS);
        case 4:
          if (!(Boolean(input.checked) !== Boolean(shouldBeChecked) && label)) {
            _context8.n = 6;
            break;
          }
          _context8.n = 5;
          return remoteClick(input);
        case 5:
          _context8.n = 6;
          return sleep(SETTLE_MS);
        case 6:
          if (!(Boolean(input.checked) !== Boolean(shouldBeChecked))) {
            _context8.n = 7;
            break;
          }
          throw fail('checkbox state did not change', {
            code: 'remote_input_state_mismatch'
          });
        case 7:
          return _context8.a(2);
      }
    }, _callee8);
  }));
  return _remoteCheck.apply(this, arguments);
}
var remoteChooseRadio = function remoteChooseRadio(input) {
  return remoteCheck(input, true);
};

/** Press-and-hold on an element (Press & Hold bot walls). */
function remoteHold(_x1) {
  return _remoteHold.apply(this, arguments);
}

/** Tab/Escape-style key press on the focused control (e.g. leave an autocomplete). */
function _remoteHold() {
  _remoteHold = remote_input_asyncToGenerator(/*#__PURE__*/remote_input_regenerator().m(function _callee9(element) {
    var ms,
      point,
      _args9 = arguments;
    return remote_input_regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          ms = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : 6000;
          _context9.n = 1;
          return scrollIntoViewRemote(element);
        case 1:
          point = pointFor(element);
          _context9.n = 2;
          return runRemoteInput([{
            type: 'hold',
            x: point.x,
            y: point.y,
            ms: ms
          }]);
        case 2:
          return _context9.a(2);
      }
    }, _callee9);
  }));
  return _remoteHold.apply(this, arguments);
}
var remoteKey = function remoteKey(key) {
  return runRemoteInput([{
    type: 'key',
    key: key
  }]);
};

/**
 * A short "review" pass before Submit: wheel down a little and back, with a pause — real pointer
 * motion right before the scorer is consulted, which the diagnosis singled out as missing.
 */
function remoteReviewScroll() {
  return _remoteReviewScroll.apply(this, arguments);
}
function _remoteReviewScroll() {
  _remoteReviewScroll = remote_input_asyncToGenerator(/*#__PURE__*/remote_input_regenerator().m(function _callee0() {
    var _viewportSize5, height, dy;
    return remote_input_regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          _viewportSize5 = viewportSize(), height = _viewportSize5.height;
          dy = 180 + Math.round(Math.random() * 160);
          _context0.n = 1;
          return runRemoteInput([{
            type: 'wheel',
            x: 40,
            y: Math.round(height / 2),
            dy: dy
          }, {
            type: 'wait',
            ms: 250 + Math.round(Math.random() * 300)
          }, {
            type: 'wheel',
            x: 40,
            y: Math.round(height / 2),
            dy: -dy
          }, {
            type: 'wait',
            ms: 150 + Math.round(Math.random() * 250)
          }]);
        case 1:
          return _context0.a(2);
      }
    }, _callee0);
  }));
  return _remoteReviewScroll.apply(this, arguments);
}
;// ../../packages/job-parsers/content/platforms/ashbyhq/autofill.js
function autofill_slicedToArray(r, e) { return autofill_arrayWithHoles(r) || autofill_iterableToArrayLimit(r, e) || autofill_unsupportedIterableToArray(r, e) || autofill_nonIterableRest(); }
function autofill_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function autofill_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function autofill_regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(autofill_typeof(e) + " is not iterable"); }
function autofill_typeof(o) { "@babel/helpers - typeof"; return autofill_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, autofill_typeof(o); }
function autofill_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return autofill_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (autofill_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, autofill_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, autofill_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), autofill_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", autofill_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), autofill_regeneratorDefine2(u), autofill_regeneratorDefine2(u, o, "Generator"), autofill_regeneratorDefine2(u, n, function () { return this; }), autofill_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (autofill_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function autofill_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } autofill_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { autofill_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, autofill_regeneratorDefine2(e, r, n, t); }
function autofill_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = autofill_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function autofill_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function autofill_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? autofill_ownKeys(Object(t), !0).forEach(function (r) { autofill_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : autofill_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function autofill_defineProperty(e, r, t) { return (r = autofill_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function autofill_toPropertyKey(t) { var i = autofill_toPrimitive(t, "string"); return "symbol" == autofill_typeof(i) ? i : i + ""; }
function autofill_toPrimitive(t, r) { if ("object" != autofill_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != autofill_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function autofill_toConsumableArray(r) { return autofill_arrayWithoutHoles(r) || autofill_iterableToArray(r) || autofill_unsupportedIterableToArray(r) || autofill_nonIterableSpread(); }
function autofill_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return autofill_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? autofill_arrayLikeToArray(r, a) : void 0; } }
function autofill_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function autofill_arrayWithoutHoles(r) { if (Array.isArray(r)) return autofill_arrayLikeToArray(r); }
function autofill_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function autofill_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function autofill_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var autofill_NEVER_ABORT = function NEVER_ABORT() {
  return false;
};
var ASHBY_PLATFORM_KEY = 'ashbyhq';

// Runner lane: the host (apps/apply-runner slot / runner-lane-local-debug) advertises remote input for
// Ashby → every click/keystroke below is replayed by patchright as TRUSTED input instead of the
// synthetic clickLikeHuman / fillTextInputLikeHuman sequences (content/platforms/remote-input.js).
// Ashby's "flagged as possible spam" wall is a score-based reCAPTCHA v3 — it scores exactly the
// behaviour those synthetic events cannot fake (isTrusted, real pointer motion, key cadence).
// Anywhere else (assistant browsers, CDN installs, old boxes) this is false and the synthetic path
// runs unchanged. Memoized by remote-input.js. File uploads stay on the DOM path on every lane.
var useRemoteInput = function useRemoteInput() {
  return isRemoteInputEnabled(ASHBY_PLATFORM_KEY)["catch"](function () {
    return false;
  });
};
// Ashby renders each question inside a CSS-module wrapper whose class name carries a
// build-specific hash (e.g. `_fieldEntry_1e3gg_28`), so the hash cannot be hardcoded.
// Match the stable `_fieldEntry_` CSS-module prefix instead. The legacy
// `.ashby-application-form-field-entry` companion class is present on most entries, but
// single/multi-select questions (radio and checkbox groups) are wrapped in an extra
// `_container_<hash>_<n> _fieldEntry_<hash>_<n>` element that lacks it — keeping both
// selectors ensures those select questions are detected too.
var ASHBY_FIELD_ENTRY_SELECTOR = '[class*="_fieldEntry_"], .ashby-application-form-field-entry';
var ASHBY_REQUIRED_CLASS_PATTERN = /(^|\s)_required_/;
var ASHBY_ACTIVE_CLASS_PATTERN = /(^|\s)_active_/;
// Ashby's radio/checkbox options are React-controlled custom widgets. When an option is
// selected, its label + circle container get a hash-suffixed `_checked_<hash>` class (and the
// `_option_` wrapper flips to a `true` marker). Native `.checked` is set after a real click but
// isn't reliable for options selected by React default/restore — so the class is the ground truth.
var ASHBY_CHECKED_CLASS_PATTERN = /(^|\s)_checked_/;
// A search combobox's lookup (geo location / school) answers in about a second on a healthy
// connection, but took 5–17 s (once 30 s) on a slow fleet box (2026-10-24, doctor case 2627df2a):
// the old fixed 3 s wait timed out every query before its options rendered, so the required
// Location box was reset empty. Wait for the list to answer ("No results" still returns at once) up
// to a per-query cap, inside a budget for the whole search so a dead connection ends well within
// the run's stall ceiling.
var AUTOCOMPLETE_WAIT_TIMEOUT_MS = 20000;
var COMBOBOX_SEARCH_BUDGET_MS = 60000;
// Ashby renders BOTH of its dropdown flavours as the same `input[role="combobox"]` autocomplete:
// a FIXED list (posting-defined options, e.g. 12 compensation ranges — ArrowDown on the empty
// input opens the whole list) and an async SEARCH (geo location / school lookup — ArrowDown
// opens an empty listbox; options only appear for a typed query). Nothing in the markup tells
// them apart, so the list is probed by opening it. Free text is DISCARDED on blur, so a value
// that is not a clicked option never reaches the submission.
var ASHBY_COMBOBOX_SELECTOR = 'input[role="combobox"], input[aria-autocomplete="list"]';
var COMBOBOX_LIST_PROBE_TIMEOUT_MS = 1500;
var COMBOBOX_COMMIT_SETTLE_MS = 250;
var MAX_COMBOBOX_SEARCH_CANDIDATES = 5;
// Ashby's own Location question, and custom questions asking where the candidate is — the only
// search comboboxes that get the profile-address fallback (getLocationFallbackSearch).
var ASHBY_LOCATION_FIELD_ID = '_systemfield_location';
var ASHBY_LOCATION_QUESTION_PATTERN = /\b(location|located|country|city)\b|\bwhere\b.{0,40}\b(live|reside|based)\b/i;
var MAX_LOCATION_FALLBACK_CANDIDATES = 4;
// react-datepicker text input ("Pick a date"): only a typed `MM/DD/YYYY` + Enter commits.
var ASHBY_DATE_INPUT_SELECTOR = '.ashby-application-form-input-date';
var ASHBY_DATE_FORMAT = 'MM/DD/YYYY';
var DEFAULT_START_DATE_OFFSET_DAYS = 14;
var FILE_UPLOAD_WAIT_TIMEOUT_MS = 5000;
// Ashby's FileInput keeps the hidden `input[type=file]` mounted and, once a file is picked,
// renders a `_file_` row for it right away — so a filled input / the "Replace" button say
// nothing about the upload. While `isUploading` (presigned S3 POST + the set-value GraphQL
// mutation) the row shows a spinner and NO remove button; the icon-only remove button
// (`title="Delete file"`, class `_removeButton_`) is rendered only after both finish. Submitting
// before it appears posts the form without the resume, so the file kinds block on it.
var ASHBY_FILE_REMOVE_BUTTON_SELECTOR = 'button[title="Delete file"], button[class*="_removeButton_"]';
var ASHBY_FILE_UPLOADING_SELECTOR = '[class*="_loadingIcon_"], .loadingSvg';
var ASHBY_TOAST_SELECTOR = '[class*="_toast_"], [role="alert"]';
var ASHBY_UPLOAD_FAILED_TOAST_PATTERN = /failed to upload/i;
var FILE_UPLOAD_COMPLETE_TIMEOUT_MS = 60000;
var FILE_UPLOAD_COMPLETE_POLL_MS = 200;
// Human-like pacing for Ashby's bot detection. The realism comes from the interaction
// *shape* (discrete keystrokes/pointer events, movement path, jitter), but Ashby is
// bot-sensitive so we also keep the tempo a little unhurried: a ~0.45s beat between
// fields and a calmer per-character typing cadence (still budget-capped so long cover
// letters don't stall the run).
var ASHBY_INTER_FIELD_DELAY_MS = 300;
var ASHBY_HUMAN_TYPING_OPTIONS = {
  perCharDelayMs: 22,
  maxTotalTypingMs: 4500
};
var ASHBY_APPLICATION_PATH_PATTERN = /\/application\/?$/i;
// Ashby's built-in "Education History" question is a repeatable block: one `_fieldEntry_`
// wrapper holding N `_repeatableEducationEntry_` rows, each with a School autocomplete, plain
// Degree / Field of Study text inputs, native month+year Start/End date selects, and a
// "Still Student?" (`isCurrent`) checkbox. A `+ Add Education` button appends rows. The
// per-row control ids (`..-degree`, `..-major`, `..-startDate`, ...) are DUPLICATED across
// rows, so every fill query must be scoped to a single row element.
var ASHBY_EDUCATION_ENTRY_SELECTOR = '[class*="_repeatableEducationEntry_"]';
var ASHBY_EDUCATION_ADD_BUTTON_SELECTOR = '[class*="_repeatableEducationAddButton_"]';
// Per-row "Delete" button: `_repeatableEducationButton_` + `_negative_`. The "+ Add Education"
// button shares `_repeatableEducationButton_` but is `_repeatableEducationAddButton_` (no
// `_negative_`), so the `_negative_` qualifier excludes it. Ashby allows deleting every row
// (down to zero) and keeps the Add button, so reconciling the row count is safe.
var ASHBY_EDUCATION_REMOVE_BUTTON_SELECTOR = '[class*="_repeatableEducationButton_"][class*="_negative_"]';
var ASHBY_EDUCATION_ROW_WAIT_TIMEOUT_MS = 3000;
function normalizeAshbyText(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/\u00a0/g, ' ').replace(/[✱*]/g, '').replace(/\s+/g, ' ').trim();
}
function slugifyFieldId(value) {
  var normalized = normalizeAshbyText(value).toLowerCase();
  return normalized.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function isElementVisible(element) {
  if (!(element !== null && element !== void 0 && element.isConnected)) return false;
  var style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden') return false;
  var rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

// A genuinely interactive (non-honeypot) question. Beyond display/visibility/size,
// reject opacity:0, `aria-hidden` subtrees, and elements pushed fully off the top
// or left of the page (classic honeypot, e.g. left:-9999px). A bot that types into
// such a trap is the most reliable hard spam signal a form has. Elements below or
// to the right of the fold are NOT rejected — those are legitimate, just unscrolled.
function isFieldInteractive(element) {
  if (!isElementVisible(element)) return false;
  if (parseFloat(window.getComputedStyle(element).opacity) === 0) return false;
  if (element.closest('[aria-hidden="true"]')) return false;
  var rect = element.getBoundingClientRect();
  return rect.right > 0 && rect.bottom > 0;
}
function getAshbyForm() {
  return document.querySelector('#form');
}
function getAshbyActionLabel(element) {
  var _element$getAttribute;
  return normalizeAshbyText((element === null || element === void 0 ? void 0 : element.textContent) || (element === null || element === void 0 ? void 0 : element.value) || (element === null || element === void 0 || (_element$getAttribute = element.getAttribute) === null || _element$getAttribute === void 0 ? void 0 : _element$getAttribute.call(element, 'aria-label')) || '');
}
function getAshbyApplicationLink() {
  var _Array$from$find;
  return (_Array$from$find = Array.from(document.querySelectorAll('a[href]')).find(function (link) {
    var _link$href;
    var href = (_link$href = link === null || link === void 0 ? void 0 : link.href) !== null && _link$href !== void 0 ? _link$href : '';
    if (!ASHBY_APPLICATION_PATH_PATTERN.test(new URL(href, window.location.href).pathname)) {
      return false;
    }
    var currentUrl = new URL(window.location.href);
    var linkUrl = new URL(href, window.location.href);
    if (linkUrl.href === currentUrl.href) return false;
    var label = getAshbyActionLabel(link).toLowerCase();
    return /\b(application|apply)\b/.test(label);
  })) !== null && _Array$from$find !== void 0 ? _Array$from$find : null;
}
function getFieldWrappers() {
  var form = getAshbyForm();
  if (!form) return [];
  return Array.from(form.querySelectorAll(ASHBY_FIELD_ENTRY_SELECTOR));
}
function getEducationEntries(field) {
  var _field$querySelectorA, _field$querySelectorA2;
  return Array.from((_field$querySelectorA = field === null || field === void 0 || (_field$querySelectorA2 = field.querySelectorAll) === null || _field$querySelectorA2 === void 0 ? void 0 : _field$querySelectorA2.call(field, ASHBY_EDUCATION_ENTRY_SELECTOR)) !== null && _field$querySelectorA !== void 0 ? _field$querySelectorA : []);
}
function isEducationField(field) {
  var _field$querySelector;
  return Boolean(field === null || field === void 0 || (_field$querySelector = field.querySelector) === null || _field$querySelector === void 0 ? void 0 : _field$querySelector.call(field, ASHBY_EDUCATION_ENTRY_SELECTOR));
}
function getAshbyEducationAddButton(field) {
  return (field === null || field === void 0 ? void 0 : field.querySelector(ASHBY_EDUCATION_ADD_BUTTON_SELECTOR)) || null;
}
function getAshbyEducationRemoveButtons(field) {
  var _field$querySelectorA3, _field$querySelectorA4;
  return Array.from((_field$querySelectorA3 = field === null || field === void 0 || (_field$querySelectorA4 = field.querySelectorAll) === null || _field$querySelectorA4 === void 0 ? void 0 : _field$querySelectorA4.call(field, ASHBY_EDUCATION_REMOVE_BUTTON_SELECTOR)) !== null && _field$querySelectorA3 !== void 0 ? _field$querySelectorA3 : []);
}

// The education block is recognised by its rows OR — once every row has been deleted (the
// section's clearRows empties it before re-adding) — by its "+ Add Education" button, so a
// rowless block still resolves as the live container and stays out of the generic classifier.
function isEducationSectionField(field) {
  return isEducationField(field) || Boolean(getAshbyEducationAddButton(field));
}

// Re-resolve the live education wrapper: adding a row (and selecting a school) makes Ashby
// rebuild the block, so any wrapper handle captured earlier can go stale mid-fill.
function getLiveEducationField() {
  return getFieldWrappers().find(isEducationSectionField) || null;
}

// --- Education profile-section hierarchy (root → group → leaf) ---
// Detector-driven shared model (../autofill-section-hierarchy.js): the root's answer is the
// profile education entry COUNT, its fill clears the block and re-adds that many rows, and each
// mapped row control is an independent 'profileSectionField' leaf whose
// 'section-ashby-education-*' wrapper kind re-resolves the LIVE control before delegating —
// leaf handlers never touch the detection-time element.

function getAshbyEducationRowField(rowEl, mapping) {
  var _rowEl$querySelector;
  var control = (rowEl === null || rowEl === void 0 || (_rowEl$querySelector = rowEl.querySelector) === null || _rowEl$querySelector === void 0 ? void 0 : _rowEl$querySelector.call(rowEl, mapping.controlSelector)) || null;
  if (!control) return null;
  return {
    field: control,
    fieldId: control.id || mapping.key
  };
}

// Delete every row, end-first (retained values are irrelevant — the leaves re-fill each
// re-created row from the profile). Bounded, and bails when a delete stops making progress.
function clearAshbyEducationRows(_x) {
  return _clearAshbyEducationRows.apply(this, arguments);
} // One click per call — the shared root handler waits for the row count to grow
// (rowGrowthTimeoutMs) and stops clicking when the DOM stops adding rows.
function _clearAshbyEducationRows() {
  _clearAshbyEducationRows = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee21(container) {
    var _ref33,
      _ref33$shouldAbort,
      shouldAbort,
      resolveField,
      rows,
      guard,
      _loop,
      _ret,
      _args22 = arguments;
    return autofill_regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          _ref33 = _args22.length > 1 && _args22[1] !== undefined ? _args22[1] : {}, _ref33$shouldAbort = _ref33.shouldAbort, shouldAbort = _ref33$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref33$shouldAbort;
          resolveField = function resolveField() {
            return getLiveEducationField() || container;
          };
          rows = getEducationEntries(resolveField());
          guard = rows.length + 4;
          _loop = /*#__PURE__*/autofill_regenerator().m(function _loop() {
            var removeButton, before;
            return autofill_regenerator().w(function (_context21) {
              while (1) switch (_context21.n) {
                case 0:
                  if (!shouldAbort()) {
                    _context21.n = 1;
                    break;
                  }
                  return _context21.a(2, {
                    v: void 0
                  });
                case 1:
                  removeButton = getAshbyEducationRemoveButtons(resolveField()).pop();
                  if (removeButton !== null && removeButton !== void 0 && removeButton.isConnected) {
                    _context21.n = 2;
                    break;
                  }
                  return _context21.a(2, {
                    v: void 0
                  });
                case 2:
                  before = rows.length;
                  _context21.n = 3;
                  return useRemoteInput();
                case 3:
                  if (!_context21.v) {
                    _context21.n = 5;
                    break;
                  }
                  _context21.n = 4;
                  return remoteClick(removeButton);
                case 4:
                  _context21.n = 6;
                  break;
                case 5:
                  _context21.n = 6;
                  return clickLikeHuman(removeButton, {
                    shouldAbort: shouldAbort
                  });
                case 6:
                  _context21.n = 7;
                  return waitForPositiveResultWithAbort(function () {
                    return getEducationEntries(resolveField()).length < before ? true : null;
                  }, ASHBY_EDUCATION_ROW_WAIT_TIMEOUT_MS, shouldAbort, 100);
                case 7:
                  rows = getEducationEntries(resolveField());
                  if (!(rows.length >= before)) {
                    _context21.n = 8;
                    break;
                  }
                  return _context21.a(2, {
                    v: void 0
                  });
                case 8:
                  // stuck delete — stop rather than spin
                  guard -= 1;
                case 9:
                  return _context21.a(2);
              }
            }, _loop);
          });
        case 1:
          if (!(rows.length > 0 && guard > 0)) {
            _context22.n = 4;
            break;
          }
          return _context22.d(autofill_regeneratorValues(_loop()), 2);
        case 2:
          _ret = _context22.v;
          if (!_ret) {
            _context22.n = 3;
            break;
          }
          return _context22.a(2, _ret.v);
        case 3:
          _context22.n = 1;
          break;
        case 4:
          return _context22.a(2);
      }
    }, _callee21);
  }));
  return _clearAshbyEducationRows.apply(this, arguments);
}
function addAshbyEducationRow(_x2) {
  return _addAshbyEducationRow.apply(this, arguments);
}
function _addAshbyEducationRow() {
  _addAshbyEducationRow = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee22(container) {
    var _ref34,
      _ref34$shouldAbort,
      shouldAbort,
      addButton,
      _args23 = arguments;
    return autofill_regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          _ref34 = _args23.length > 1 && _args23[1] !== undefined ? _args23[1] : {}, _ref34$shouldAbort = _ref34.shouldAbort, shouldAbort = _ref34$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref34$shouldAbort;
          addButton = getAshbyEducationAddButton(getLiveEducationField() || container);
          if (!(!addButton || shouldAbort())) {
            _context23.n = 1;
            break;
          }
          return _context23.a(2);
        case 1:
          _context23.n = 2;
          return useRemoteInput();
        case 2:
          if (!_context23.v) {
            _context23.n = 4;
            break;
          }
          _context23.n = 3;
          return remoteClick(addButton);
        case 3:
          _context23.n = 5;
          break;
        case 4:
          _context23.n = 5;
          return clickLikeHuman(addButton, {
            shouldAbort: shouldAbort
          });
        case 5:
          return _context23.a(2);
      }
    }, _callee22);
  }));
  return _addAshbyEducationRow.apply(this, arguments);
}
var ASHBY_EDUCATION_SECTION = {
  rootFieldId: 'educationHistory',
  rootQuestion: 'Education History',
  answerType: 'educationHistory',
  // root answerType AND root fieldKind
  profileSection: 'education',
  // key into getProfileSectionData()
  rowLabel: function rowLabel(rowIndex) {
    return "Education ".concat(rowIndex + 1);
  },
  rowGrowthTimeoutMs: ASHBY_EDUCATION_ROW_WAIT_TIMEOUT_MS,
  // The wrapper is STALE-PRONE (Ashby rebuilds the block on add-row and school-select), so
  // both lookups re-find the live wrapper instead of trusting the passed/captured element.
  getContainer: function getContainer() {
    return getLiveEducationField();
  },
  getRows: function getRows(container) {
    return getEducationEntries(getLiveEducationField() || container);
  },
  getRowField: getAshbyEducationRowField,
  addRow: addAshbyEducationRow,
  clearRows: clearAshbyEducationRows,
  mappings: [
  // Per-row control ids (`..-degree`, `..-startDate`, ...) are DUPLICATED across rows, so
  // every lookup stays scoped to its row element via `controlSelector`.
  {
    key: 'degree',
    label: 'Degree',
    question: 'Degree',
    profileKey: 'degree',
    fieldKind: 'text',
    leafKind: 'ashby-education-text',
    controlSelector: 'input[id$="-degree"]'
  }, {
    key: 'major',
    label: 'Field of Study',
    question: 'Field of Study',
    fieldKind: 'text',
    leafKind: 'ashby-education-text',
    controlSelector: 'input[id$="-major"]',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.major) || (entry === null || entry === void 0 ? void 0 : entry.fieldOfStudy) || (entry === null || entry === void 0 ? void 0 : entry.discipline);
    }
  },
  // Date leaves are the whole [month, year] native-select CONTAINER: the answer is the RAW
  // profile date string (fieldKind 'text' passes it through) and fillAshbyEducationDate
  // parses it and sets both selects.
  {
    key: 'startDate',
    label: 'Start Date',
    question: 'Start Date',
    profileKey: 'startDate',
    fieldKind: 'text',
    leafKind: 'ashby-education-date',
    controlSelector: '[id$="-startDate"]'
  }, {
    // "Still Student?" — rows are freshly re-created (clearRows + addRow) so they start
    // unchecked, and a false value safely resolves to null -> skip (never clicks; mirrors
    // Greenhouse's currentRole). When true, the End Date leaf skips itself (no endDate) —
    // and once checked Ashby hides the End Date container, so its leaf vanishes anyway.
    key: 'isCurrent',
    label: 'Still Student?',
    question: 'Still Student?',
    fieldKind: 'checkbox',
    leafKind: 'ashby-education-current',
    controlSelector: 'input[id$="-isCurrent"]',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.isCurrent) === true || !parseProfileDate(entry === null || entry === void 0 ? void 0 : entry.endDate).year;
    }
  }, {
    key: 'endDate',
    label: 'End Date',
    question: 'End Date',
    profileKey: 'endDate',
    fieldKind: 'text',
    leafKind: 'ashby-education-date',
    controlSelector: '[id$="-endDate"]'
  }, {
    // School — async autocomplete; kept LAST so the row's synchronous fields are scheduled
    // ahead of it (a slow/stuck option search can't block them).
    key: 'school',
    label: 'School',
    question: 'School',
    fieldKind: 'text',
    leafKind: 'ashby-education-school',
    controlSelector: 'input[role="combobox"], input[aria-autocomplete="list"]',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.universityName) || (entry === null || entry === void 0 ? void 0 : entry.schoolName) || (entry === null || entry === void 0 ? void 0 : entry.school);
    }
  }]
};
function getQuestionLabel(field) {
  return (field === null || field === void 0 ? void 0 : field.querySelector('.ashby-application-form-question-title')) || (field === null || field === void 0 ? void 0 : field.querySelector('label')) || null;
}
function getQuestionLabeledControl(field) {
  var _getQuestionLabel, _window$CSS, _field$querySelector2;
  var labelFor = (_getQuestionLabel = getQuestionLabel(field)) === null || _getQuestionLabel === void 0 ? void 0 : _getQuestionLabel.getAttribute('for');
  if (!labelFor) return null;
  var controlById = document.getElementById(labelFor);
  if (controlById && field !== null && field !== void 0 && field.contains(controlById)) return controlById;
  var escapedLabelFor = (_window$CSS = window.CSS) !== null && _window$CSS !== void 0 && _window$CSS.escape ? window.CSS.escape(labelFor) : labelFor;
  var controlByName = field === null || field === void 0 || (_field$querySelector2 = field.querySelector) === null || _field$querySelector2 === void 0 ? void 0 : _field$querySelector2.call(field, "[name=\"".concat(escapedLabelFor, "\"]"));
  return controlByName || null;
}
function getAshbyQuestionText(field) {
  var label = getQuestionLabel(field);
  var normalizedLabelText = normalizeAshbyText(getQuestionText(label) || (label === null || label === void 0 ? void 0 : label.textContent) || '');
  if (normalizedLabelText) return normalizedLabelText;
  var questionDescription = field === null || field === void 0 ? void 0 : field.querySelector('.ashby-application-form-question-description');
  if (questionDescription) {
    var normalizedDescriptionText = normalizeAshbyText(getQuestionText(questionDescription) || (questionDescription === null || questionDescription === void 0 ? void 0 : questionDescription.textContent) || '');
    if (normalizedDescriptionText) return normalizedDescriptionText;
  }
  // Consent / opt-in checkbox whose question title is ONLY the required asterisk ("*"): the
  // statement the candidate agrees to lives in the checkbox's own <label>, not the title.
  // normalizeAshbyText strips the asterisk to '' and the entry used to be dropped entirely, so the
  // box was never ticked and Ashby rejected the submit with a blank-label "Missing entry for
  // required field:" (bjak 749db450, 4 profiles stuck). Use that label as the question.
  var loneCheckbox = getLoneCheckbox(field);
  if (loneCheckbox) {
    var normalizedCheckboxLabel = normalizeAshbyText(getInputLabelText(loneCheckbox));
    if (normalizedCheckboxLabel) return normalizedCheckboxLabel;
    // No <label for>/wrapping label: the statement is a sibling text node inside the option
    // wrapper (or the entry itself, minus the asterisk title).
    var optionWrapper = loneCheckbox.closest('[class*="_option_"]') || field;
    var normalizedWrapperText = normalizeAshbyText(getQuestionText(optionWrapper) || (optionWrapper === null || optionWrapper === void 0 ? void 0 : optionWrapper.textContent) || '');
    if (normalizedWrapperText) return normalizedWrapperText;
  }
  return null;
}

// The single checkbox of a boolean (consent / opt-in) entry, or null for groups / other controls.
function getLoneCheckbox(field) {
  var checkboxInputs = getCheckboxInputs(field);
  return checkboxInputs.length === 1 ? checkboxInputs[0] : null;
}
function getChoiceInputLabelText(input) {
  var _input$labels;
  var fallbackQuestion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return normalizeAshbyText(getInputLabelText(input, fallbackQuestion) || (input === null || input === void 0 || (_input$labels = input.labels) === null || _input$labels === void 0 || (_input$labels = _input$labels[0]) === null || _input$labels === void 0 ? void 0 : _input$labels.textContent) || (input === null || input === void 0 ? void 0 : input.value) || fallbackQuestion);
}
function getChoiceButtons(field) {
  var _field$querySelectorA5;
  return Array.from((_field$querySelectorA5 = field === null || field === void 0 ? void 0 : field.querySelectorAll('button')) !== null && _field$querySelectorA5 !== void 0 ? _field$querySelectorA5 : []).map(function (button) {
    return {
      button: button,
      text: normalizeAshbyText(button.textContent)
    };
  }).filter(function (_ref) {
    var text = _ref.text;
    return Boolean(text);
  });
}
function getComboboxInput(field) {
  return (field === null || field === void 0 ? void 0 : field.querySelector(ASHBY_COMBOBOX_SELECTOR)) || null;
}
function getDateInput(field) {
  return (field === null || field === void 0 ? void 0 : field.querySelector(ASHBY_DATE_INPUT_SELECTOR)) || null;
}
function getElementClassName(element) {
  var className = element === null || element === void 0 ? void 0 : element.className;
  if (typeof className === 'string') return className;
  return (className === null || className === void 0 ? void 0 : className.baseVal) || '';
}
function getVisibleComboboxListboxes() {
  var _input$getAttribute, _input$getAttribute2;
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var controlledListboxIds = [input === null || input === void 0 || (_input$getAttribute = input.getAttribute) === null || _input$getAttribute === void 0 ? void 0 : _input$getAttribute.call(input, 'aria-controls'), input === null || input === void 0 || (_input$getAttribute2 = input.getAttribute) === null || _input$getAttribute2 === void 0 ? void 0 : _input$getAttribute2.call(input, 'aria-owns')].filter(Boolean);
  var controlledListboxes = controlledListboxIds.map(function (id) {
    return document.getElementById(id);
  }).filter(function (listbox) {
    var _listbox$getAttribute;
    return (listbox === null || listbox === void 0 || (_listbox$getAttribute = listbox.getAttribute) === null || _listbox$getAttribute === void 0 ? void 0 : _listbox$getAttribute.call(listbox, 'role')) === 'listbox' && isElementVisible(listbox);
  });
  if (controlledListboxes.length > 0) return controlledListboxes;
  return Array.from(document.querySelectorAll('[role="listbox"]')).filter(function (listbox) {
    return isElementVisible(listbox);
  });
}
function getComboboxOptionsFromListboxes(listboxes) {
  return listboxes.flatMap(function (listbox) {
    return Array.from(listbox.querySelectorAll('[role="option"]'));
  }).filter(function (option) {
    return isElementVisible(option);
  }).map(function (option) {
    return {
      element: option,
      text: normalizeAshbyText(option.textContent)
    };
  }).filter(function (option) {
    return option.text;
  });
}
function hasVisibleAutocompleteStatus(listbox, _ref2) {
  var classFragment = _ref2.classFragment,
    textPattern = _ref2.textPattern;
  return [listbox].concat(autofill_toConsumableArray(Array.from(listbox.querySelectorAll('*')))).filter(function (element) {
    return isElementVisible(element);
  }).some(function (element) {
    if (classFragment && getElementClassName(element).includes(classFragment)) return true;
    return textPattern.test(normalizeAshbyText(element.textContent));
  });
}
function getComboboxListboxState() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var listboxes = getVisibleComboboxListboxes(input);
  if (listboxes.length === 0) return null;
  var options = getComboboxOptionsFromListboxes(listboxes);
  if (options.length > 0) return {
    type: 'ready',
    options: options
  };
  var isLoading = listboxes.some(function (listbox) {
    return hasVisibleAutocompleteStatus(listbox, {
      classFragment: '_loading_',
      textPattern: /^loading\.{0,3}$/i
    });
  });
  if (isLoading) return {
    type: 'loading',
    options: []
  };
  var isEmpty = listboxes.some(function (listbox) {
    return hasVisibleAutocompleteStatus(listbox, {
      classFragment: '_noResults_',
      textPattern: /^no results$/i
    });
  });
  if (isEmpty) return {
    type: 'empty',
    options: []
  };
  return null;
}
function isQuestionMarkedRequired(field, control) {
  var _label$className, _label$textContent;
  if (control !== null && control !== void 0 && control.required) return true;
  var label = getQuestionLabel(field);
  if (ASHBY_REQUIRED_CLASS_PATTERN.test((_label$className = label === null || label === void 0 ? void 0 : label.className) !== null && _label$className !== void 0 ? _label$className : '')) return true;
  // A title that is nothing but the required marker (consent checkbox entries — see
  // getAshbyQuestionText) is required even when Ashby omits the `_required_` class.
  var rawLabelText = String((_label$textContent = label === null || label === void 0 ? void 0 : label.textContent) !== null && _label$textContent !== void 0 ? _label$textContent : '').replace(/\s+/g, '');
  return rawLabelText.length > 0 && /^[✱*]+$/.test(rawLabelText);
}
function buildAshbyConstraints(field, question, control) {
  var _control$getAttribute;
  var constraints = getInputConstraints(question, control);
  var placeholder = control === null || control === void 0 || (_control$getAttribute = control.getAttribute) === null || _control$getAttribute === void 0 ? void 0 : _control$getAttribute.call(control, 'placeholder');
  if (!constraints.required && isQuestionMarkedRequired(field, control)) {
    constraints.required = true;
  }
  if (placeholder) {
    constraints.placeholder = placeholder;
  }
  return constraints;
}
function isResumeField(question, control) {
  var _control$name$toLower, _control$name, _control$name$toLower2, _control$id$toLowerCa, _control$id, _control$id$toLowerCa2;
  var normalizedQuestion = normalizeAshbyText(question).toLowerCase();
  var controlName = (_control$name$toLower = control === null || control === void 0 || (_control$name = control.name) === null || _control$name === void 0 || (_control$name$toLower2 = _control$name.toLowerCase) === null || _control$name$toLower2 === void 0 ? void 0 : _control$name$toLower2.call(_control$name)) !== null && _control$name$toLower !== void 0 ? _control$name$toLower : '';
  var controlId = (_control$id$toLowerCa = control === null || control === void 0 || (_control$id = control.id) === null || _control$id === void 0 || (_control$id$toLowerCa2 = _control$id.toLowerCase) === null || _control$id$toLowerCa2 === void 0 ? void 0 : _control$id$toLowerCa2.call(_control$id)) !== null && _control$id$toLowerCa !== void 0 ? _control$id$toLowerCa : '';
  return /resume|cv/.test(normalizedQuestion) || /resume|cv/.test(controlName) || /resume|cv/.test(controlId);
}
function isCoverLetterField(question, control) {
  var _control$name$toLower3, _control$name2, _control$name2$toLowe, _control$id$toLowerCa3, _control$id2, _control$id2$toLowerC;
  var normalizedQuestion = normalizeAshbyText(question).toLowerCase();
  var controlName = (_control$name$toLower3 = control === null || control === void 0 || (_control$name2 = control.name) === null || _control$name2 === void 0 || (_control$name2$toLowe = _control$name2.toLowerCase) === null || _control$name2$toLowe === void 0 ? void 0 : _control$name2$toLowe.call(_control$name2)) !== null && _control$name$toLower3 !== void 0 ? _control$name$toLower3 : '';
  var controlId = (_control$id$toLowerCa3 = control === null || control === void 0 || (_control$id2 = control.id) === null || _control$id2 === void 0 || (_control$id2$toLowerC = _control$id2.toLowerCase) === null || _control$id2$toLowerC === void 0 ? void 0 : _control$id2$toLowerC.call(_control$id2)) !== null && _control$id$toLowerCa3 !== void 0 ? _control$id$toLowerCa3 : '';
  return /cover\s*letter/.test(normalizedQuestion) || /cover_?letter/.test(controlName) || /cover_?letter/.test(controlId);
}
function getTextControlMetadata(field, question, control, fieldKind) {
  var isCoverLetter = isCoverLetterField(question, control);
  var constraints = buildAshbyConstraints(field, question, control);
  if (fieldKind === 'date') {
    constraints.inputType = 'date';
    constraints.format = ASHBY_DATE_FORMAT;
  }
  return {
    answerType: isCoverLetter ? 'cover_letter' : 'text',
    fieldKind: isCoverLetter ? 'cover_letter' : fieldKind,
    // A combobox's options are unknown until its list is probed (see ASHBY_TEXT_ANSWER_HANDLER);
    // null keeps the metadata "not ready" so the probe runs before the answer is generated.
    options: fieldKind === 'combobox' && !isCoverLetter ? null : [],
    constraints: isCoverLetter ? autofill_objectSpread(autofill_objectSpread({}, constraints), {}, {
      coverLetterOutput: 'text'
    }) : constraints
  };
}
function getLabeledTextControlMetadata(field, question) {
  var _control$matches, _control$matches2, _control$matches3, _control$matches4;
  var control = getQuestionLabeledControl(field);
  if (!control) return null;
  if ((_control$matches = control.matches) !== null && _control$matches !== void 0 && _control$matches.call(control, 'textarea')) {
    return getTextControlMetadata(field, question, control, 'textarea');
  }
  if ((_control$matches2 = control.matches) !== null && _control$matches2 !== void 0 && _control$matches2.call(control, ASHBY_COMBOBOX_SELECTOR)) {
    return getTextControlMetadata(field, question, control, 'combobox');
  }
  if ((_control$matches3 = control.matches) !== null && _control$matches3 !== void 0 && _control$matches3.call(control, ASHBY_DATE_INPUT_SELECTOR)) {
    return getTextControlMetadata(field, question, control, 'date');
  }
  if ((_control$matches4 = control.matches) !== null && _control$matches4 !== void 0 && _control$matches4.call(control, 'input') && control.type !== 'hidden' && control.type !== 'file' && control.type !== 'checkbox' && control.type !== 'radio') {
    return getTextControlMetadata(field, question, control, 'text');
  }
  return null;
}
function getSyncSelectableOptions(field) {
  var question = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var buttonOptions = getChoiceButtons(field).map(function (_ref3) {
    var text = _ref3.text;
    return text;
  });
  if (buttonOptions.length > 0) return buttonOptions;
  var radioOptions = getRadioInputs(field).map(function (input) {
    return getChoiceInputLabelText(input, question);
  }).filter(Boolean);
  if (radioOptions.length > 0) return radioOptions;
  var checkboxOptions = getCheckboxInputs(field).map(function (input) {
    return getChoiceInputLabelText(input, question);
  }).filter(Boolean);
  if (checkboxOptions.length > 0) return checkboxOptions;
  return null;
}
function getEmptyFieldMetadata() {
  return {
    answerType: null,
    fieldKind: null,
    options: null,
    constraints: {}
  };
}
function getStableDocumentFieldId(answerType) {
  if (answerType === 'resume') return 'resume';
  if (answerType === 'cover_letter') return 'cover_letter';
  return null;
}
function getFieldMetadataSync(field, question) {
  var fileInput = getFileInputInsideField(field);
  if (fileInput) {
    var constraints = buildAshbyConstraints(field, question, fileInput);
    if (isResumeField(question, fileInput)) {
      return {
        answerType: 'resume',
        fieldKind: 'resume',
        options: [],
        constraints: constraints
      };
    }
    if (isCoverLetterField(question, fileInput)) {
      return {
        answerType: 'cover_letter',
        fieldKind: 'cover_letter',
        options: [],
        constraints: autofill_objectSpread(autofill_objectSpread({}, constraints), {}, {
          coverLetterOutput: 'file'
        })
      };
    }
    return getEmptyFieldMetadata();
  }
  var labeledTextControlMetadata = getLabeledTextControlMetadata(field, question);
  if (labeledTextControlMetadata) return labeledTextControlMetadata;
  var buttonOptions = getChoiceButtons(field);
  if (buttonOptions.length > 0) {
    var _buttonOptions$0$butt, _buttonOptions$;
    var button = (_buttonOptions$0$butt = (_buttonOptions$ = buttonOptions[0]) === null || _buttonOptions$ === void 0 ? void 0 : _buttonOptions$.button) !== null && _buttonOptions$0$butt !== void 0 ? _buttonOptions$0$butt : null;
    return {
      answerType: 'single-select',
      fieldKind: 'button-group',
      options: buttonOptions.map(function (option) {
        return option.text;
      }),
      constraints: buildAshbyConstraints(field, question, button)
    };
  }
  var radioInputs = getRadioInputs(field);
  if (radioInputs.length > 0) {
    return {
      answerType: 'single-select',
      fieldKind: 'radio',
      options: radioInputs.map(function (radio) {
        return getChoiceInputLabelText(radio, question);
      }).filter(Boolean),
      constraints: buildAshbyConstraints(field, question, radioInputs[0])
    };
  }
  var checkboxInputs = getCheckboxInputs(field);
  if (checkboxInputs.length > 0) {
    var options = checkboxInputs.map(function (checkbox) {
      return getChoiceInputLabelText(checkbox, question);
    }).filter(Boolean);
    return {
      answerType: checkboxInputs.length === 1 ? 'single-select' : 'multi-select',
      fieldKind: 'checkbox',
      options: options.length > 0 ? options : ['Yes'],
      constraints: buildAshbyConstraints(field, question, checkboxInputs[0])
    };
  }
  var textarea = getTextarea(field);
  if (textarea) {
    return getTextControlMetadata(field, question, textarea, 'textarea');
  }
  var combobox = getComboboxInput(field);
  if (combobox) {
    return getTextControlMetadata(field, question, combobox, 'combobox');
  }
  var dateInput = getDateInput(field);
  if (dateInput) {
    return getTextControlMetadata(field, question, dateInput, 'date');
  }
  var input = getTextInput(field);
  if (input) {
    return getTextControlMetadata(field, question, input, 'text');
  }
  if (isResumeField(question, null)) {
    return {
      answerType: 'resume',
      fieldKind: 'resume',
      options: [],
      constraints: buildAshbyConstraints(field, question, null)
    };
  }
  if (isCoverLetterField(question, null)) {
    var _constraints = buildAshbyConstraints(field, question, null);
    return {
      answerType: 'cover_letter',
      fieldKind: 'cover_letter',
      options: [],
      constraints: autofill_objectSpread(autofill_objectSpread({}, _constraints), {}, {
        coverLetterOutput: 'file'
      })
    };
  }
  return getEmptyFieldMetadata();
}
function getQuestionFieldId(field, question) {
  var label = getQuestionLabel(field);
  var labelFor = label === null || label === void 0 ? void 0 : label.getAttribute('for');
  if (labelFor) return labelFor;
  var firstButtonGroupInput = getCheckboxInputs(field)[0] || getRadioInputs(field)[0];
  var combobox = getComboboxInput(field);
  var textInput = getTextInput(field);
  var textarea = getTextarea(field);
  var fileInput = getFileInputInsideField(field);
  var primaryControl = firstButtonGroupInput || fileInput || combobox || textarea || textInput;
  var preferredId = (primaryControl === null || primaryControl === void 0 ? void 0 : primaryControl.name) || (primaryControl === null || primaryControl === void 0 ? void 0 : primaryControl.id);
  if (preferredId) return preferredId;
  return slugifyFieldId(question) || null;
}
function ensureUniqueFieldId(fieldId, usedFieldIds) {
  if (!usedFieldIds.has(fieldId)) {
    usedFieldIds.add(fieldId);
    return fieldId;
  }
  var suffix = 2;
  while (usedFieldIds.has("".concat(fieldId, "-").concat(suffix))) {
    suffix += 1;
  }
  var uniqueFieldId = "".concat(fieldId, "-").concat(suffix);
  usedFieldIds.add(uniqueFieldId);
  return uniqueFieldId;
}

// Ashby re-renders the form mid-autofill: typing, file uploads (the hidden input is swapped
// for a "Replace" button) and validation all make React briefly unmount/rebuild field
// wrappers. Detection runs on every DOM mutation, so a pass can land inside one of those
// windows and see a partial set — or a field whose control is momentarily unclassifiable —
// which the shared engine then caches and pushes to the panel. The visible result is that
// questions flicker out and their order churns even though they still exist in the UI.
//
// To keep the detected set stable, remember the last successful detection and carry forward
// any previously-known field that is missing from the current pass but whose wrapper is still
// mounted and visible. Genuinely-removed fields (conditional questions that get hidden or
// detached) fail the presence check and drop out as before. The merged set is re-sorted into
// DOM order so a carried-forward field keeps its real position instead of jumping to the end.
var lastDetectedFields = [];

// Softer than isFieldInteractive: tolerate a transient zero-size rect (mid-layout / -repaint)
// so a field being re-rendered isn't mistaken for a removed one, while still treating
// display:none / visibility:hidden / aria-hidden / detached as a real removal.
function isFieldStillMounted(field) {
  if (!(field !== null && field !== void 0 && field.isConnected)) return false;
  var style = window.getComputedStyle(field);
  if (style.display === 'none' || style.visibility === 'hidden') return false;
  return !field.closest('[aria-hidden="true"]');
}
function compareFieldDomOrder(a, b) {
  if (!(a !== null && a !== void 0 && a.field) || !(b !== null && b !== void 0 && b.field) || a.field === b.field) return 0;
  var relation = a.field.compareDocumentPosition(b.field);
  if (relation & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
  if (relation & Node.DOCUMENT_POSITION_PRECEDING) return 1;
  return 0;
}
function stabilizeDetectedFields(currentQuestions) {
  var currentFieldIds = new Set(currentQuestions.map(function (question) {
    return question.fieldId;
  }));
  var carriedForward = lastDetectedFields.filter(function (previous) {
    return !currentFieldIds.has(previous.fieldId) && isFieldStillMounted(previous.field);
  });
  var stabilized = carriedForward.length === 0 ? currentQuestions : [].concat(autofill_toConsumableArray(currentQuestions), autofill_toConsumableArray(carriedForward)).sort(compareFieldDomOrder);
  lastDetectedFields = stabilized;
  return stabilized;
}
function detectAutofillFields() {
  var form = getAshbyForm();
  if (!form) return stabilizeDetectedFields([]);
  var questions = [];
  var usedFieldIds = new Set();
  var _iterator = autofill_createForOfIteratorHelper(getFieldWrappers()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;
      // Skip hidden/off-screen honeypot traps — filling one is a hard spam signal.
      // if (!isFieldInteractive(field)) continue;

      // Ashby's repeatable "Education History" block is a profile section: the shared collector
      // emits the whole root → group → leaf hierarchy from the CURRENT DOM (rows the root's fill
      // adds appear on the next detection pass). Modeled before the generic classifier runs,
      // otherwise the block's Delete / "+ Add Education" buttons get mistaken for a button-group
      // select. Row sub-controls are not `_fieldEntry_` wrappers, so the generic loop below never
      // visits them.
      if (isEducationSectionField(field)) {
        if (usedFieldIds.has('educationHistory')) continue;
        usedFieldIds.add('educationHistory');
        questions.push.apply(questions, autofill_toConsumableArray(collectSectionHierarchyQuestions(ASHBY_EDUCATION_SECTION)));
        continue;
      }
      var question = getAshbyQuestionText(field);
      if (!question) continue;
      var metadata = getFieldMetadataSync(field, question);
      if (!metadata.answerType || !metadata.fieldKind) continue;
      var stableDocumentFieldId = getStableDocumentFieldId(metadata.answerType);
      if (stableDocumentFieldId && usedFieldIds.has(stableDocumentFieldId)) {
        continue;
      }
      var resolvedQuestion = stableDocumentFieldId === 'resume' ? 'Resume/CV' : stableDocumentFieldId === 'cover_letter' ? 'Cover Letter' : question;
      var baseFieldId = stableDocumentFieldId || getQuestionFieldId(field, resolvedQuestion);
      if (!baseFieldId || !resolvedQuestion) continue;
      var fieldId = stableDocumentFieldId;
      if (stableDocumentFieldId) {
        usedFieldIds.add(stableDocumentFieldId);
      } else {
        fieldId = ensureUniqueFieldId(baseFieldId, usedFieldIds);
      }
      questions.push({
        question: resolvedQuestion,
        fieldId: fieldId,
        answerType: metadata.answerType,
        fieldKind: metadata.fieldKind,
        dependsOnPrevious: isDependentQuestion(resolvedQuestion),
        field: field,
        options: metadata.options,
        constraints: metadata.constraints
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return stabilizeDetectedFields(questions);
}
function getAshbySubmitButton() {
  var form = getAshbyForm();
  if (!form) return null;
  var candidates = [].concat(autofill_toConsumableArray(Array.from(form.querySelectorAll(['button[type="submit"]', 'input[type="submit"]', 'button', '[role="button"]'].join(',')))), autofill_toConsumableArray(Array.from(document.querySelectorAll(['button[form="form"]', 'input[type="submit"][form="form"]', '[role="button"][form="form"]'].join(',')))));
  var submitButton = candidates.filter(function (button, index) {
    return candidates.indexOf(button) === index;
  }).filter(isElementVisible).find(function (button) {
    return /\b(submit|apply)\b/i.test(getAshbyActionLabel(button));
  });
  return submitButton || null;
}

// Ashby's Submit while the press is in flight: the button turns disabled with its `_loading_` class and
// a spinner (`svg.loadingSvg`) — the label stays "Submit Application" — while the reCAPTCHA call and the
// submission POST run; then the form gives way to the success panel or the error banner. That took
// 7–60 s on about 1 in 5 confirmed fleet submits (2026-10-24), past the driver's 6 s submit-wait tick.
var ASHBY_SUBMIT_LOADING_CLASS_PATTERN = /(^|\s)_loading_/;
function isAshbySubmitInFlight(button) {
  return ASHBY_SUBMIT_LOADING_CLASS_PATTERN.test(String(button.className || '')) || Boolean(button.querySelector('svg.loadingSvg')) || button.getAttribute('aria-busy') === 'true';
}
function detectAshbySubmitButton() {
  var submitButton = getAshbySubmitButton();
  if (!submitButton) return {
    detected: false
  };
  var disabled = Boolean(submitButton.disabled || submitButton.getAttribute('aria-disabled') === 'true');
  // busy = the press landed and Ashby is still answering it → the auto-apply submit wait holds instead of
  // parking a submission that confirms itself seconds later. Never while a captcha puzzle shows: the
  // universal reCAPTCHA key opens its picture challenge INSIDE that pending press, and a puzzle needs a person.
  var busy = disabled && isAshbySubmitInFlight(submitButton) && !isCaptchaPuzzleVisible();
  return autofill_objectSpread({
    detected: true,
    label: getAshbyActionLabel(submitButton),
    disabled: disabled
  }, busy ? {
    busy: true
  } : {});
}
function isAshbyAutofillAvailable() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    normalizedQuestions = _ref4.normalizedQuestions;
  return Boolean((normalizedQuestions === null || normalizedQuestions === void 0 ? void 0 : normalizedQuestions.length) || getAshbyApplicationLink());
}
function advanceAshbyAutofillFlow() {
  return _advanceAshbyAutofillFlow.apply(this, arguments);
}
function _advanceAshbyAutofillFlow() {
  _advanceAshbyAutofillFlow = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee23() {
    var applicationLink;
    return autofill_regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          applicationLink = getAshbyApplicationLink();
          if (applicationLink) {
            _context24.n = 1;
            break;
          }
          return _context24.a(2, false);
        case 1:
          _context24.n = 2;
          return useRemoteInput();
        case 2:
          if (!_context24.v) {
            _context24.n = 4;
            break;
          }
          _context24.n = 3;
          return remoteClick(applicationLink);
        case 3:
          _context24.n = 5;
          break;
        case 4:
          _context24.n = 5;
          return clickLikeHuman(applicationLink);
        case 5:
          return _context24.a(2, false);
      }
    }, _callee23);
  }));
  return _advanceAshbyAutofillFlow.apply(this, arguments);
}
function createBackendAnswerHandler(answerType) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref5$isMetadataReady = _ref5.isMetadataReady,
    isMetadataReady = _ref5$isMetadataReady === void 0 ? function () {
      return true;
    } : _ref5$isMetadataReady,
    _ref5$fetchMissingMet = _ref5.fetchMissingMetadata,
    fetchMissingMetadata = _ref5$fetchMissingMet === void 0 ? (/*#__PURE__*/function () {
      var _ref6 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee(metadata) {
        return autofill_regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, metadata);
          }
        }, _callee);
      }));
      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }()) : _ref5$fetchMissingMet;
  return {
    isMetadataReady: isMetadataReady,
    fetchMissingMetadata: fetchMissingMetadata,
    generateAnswer: function generateAnswer(question, metadata, fieldId) {
      var _metadata$options, _metadata$referenceQa;
      return getAnswer(question, answerType, (_metadata$options = metadata.options) !== null && _metadata$options !== void 0 ? _metadata$options : [], metadata.constraints, fieldId, true, (_metadata$referenceQa = metadata.referenceQaPairs) !== null && _metadata$referenceQa !== void 0 ? _metadata$referenceQa : []);
    }
  };
}

// Clear whatever is typed, close the list (Escape) and drop focus — leaves the combobox exactly
// as Ashby renders it untouched. Used after a probe and when no option matched (a phantom value
// would only be discarded on blur anyway).
function resetAshbyCombobox(_x4) {
  return _resetAshbyCombobox.apply(this, arguments);
} // Open a combobox's full option list the way a person does — click it, press ArrowDown on the
// empty input — and return the visible options. A fixed list opens whole; a search combobox
// opens an empty listbox (or nothing) within the probe window and yields [].
function _resetAshbyCombobox() {
  _resetAshbyCombobox = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee24(input) {
    var _input$blur2;
    var _input$blur;
    return autofill_regenerator().w(function (_context25) {
      while (1) switch (_context25.n) {
        case 0:
          if (input) {
            _context25.n = 1;
            break;
          }
          return _context25.a(2);
        case 1:
          _context25.n = 2;
          return useRemoteInput();
        case 2:
          if (!_context25.v) {
            _context25.n = 5;
            break;
          }
          if (!input.value) {
            _context25.n = 3;
            break;
          }
          _context25.n = 3;
          return remoteTypeInto(input, '');
        case 3:
          _context25.n = 4;
          return remoteKey('Escape');
        case 4:
          (_input$blur = input.blur) === null || _input$blur === void 0 || _input$blur.call(input);
          return _context25.a(2);
        case 5:
          if (input.value) writeReactTextValue(input, '');
          dispatchKeyboardSequence(input, {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27
          });
          (_input$blur2 = input.blur) === null || _input$blur2 === void 0 || _input$blur2.call(input);
        case 6:
          return _context25.a(2);
      }
    }, _callee24);
  }));
  return _resetAshbyCombobox.apply(this, arguments);
}
function openAshbyComboboxList(_x5) {
  return _openAshbyComboboxList.apply(this, arguments);
} // Probe run from the metadata step (inside the DOM mutex): a fixed list turns the question into
// a single-select over its option texts so the backend picks from the real list; a search
// combobox keeps the free-text answer (options []) and is resolved at fill time by searching.
function _openAshbyComboboxList() {
  _openAshbyComboboxList = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee25(input) {
    var _state$options;
    var shouldAbort,
      state,
      _args26 = arguments;
    return autofill_regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          shouldAbort = _args26.length > 1 && _args26[1] !== undefined ? _args26[1] : autofill_NEVER_ABORT;
          if (!(!input || shouldAbort())) {
            _context26.n = 1;
            break;
          }
          return _context26.a(2, []);
        case 1:
          _context26.n = 2;
          return useRemoteInput();
        case 2:
          if (!_context26.v) {
            _context26.n = 7;
            break;
          }
          _context26.n = 3;
          return remoteClick(input);
        case 3:
          if (!shouldAbort()) {
            _context26.n = 4;
            break;
          }
          return _context26.a(2, []);
        case 4:
          if (!input.value) {
            _context26.n = 5;
            break;
          }
          _context26.n = 5;
          return remoteTypeInto(input, '');
        case 5:
          _context26.n = 6;
          return remoteKey('ArrowDown');
        case 6:
          _context26.n = 11;
          break;
        case 7:
          _context26.n = 8;
          return clickLikeHuman(input, {
            shouldAbort: shouldAbort
          });
        case 8:
          if (!shouldAbort()) {
            _context26.n = 9;
            break;
          }
          return _context26.a(2, []);
        case 9:
          if (!input.value) {
            _context26.n = 10;
            break;
          }
          _context26.n = 10;
          return fillTextInputLikeHuman(input, '', autofill_objectSpread(autofill_objectSpread({}, ASHBY_HUMAN_TYPING_OPTIONS), {}, {
            blur: false,
            shouldAbort: shouldAbort
          }));
        case 10:
          dispatchKeyboardSequence(input, {
            key: 'ArrowDown',
            code: 'ArrowDown',
            keyCode: 40
          });
        case 11:
          _context26.n = 12;
          return waitForPositiveResultWithAbort(function () {
            var current = getComboboxListboxState(input);
            return (current === null || current === void 0 ? void 0 : current.type) === 'ready' ? current : null;
          }, COMBOBOX_LIST_PROBE_TIMEOUT_MS, shouldAbort, 100);
        case 12:
          state = _context26.v;
          return _context26.a(2, (_state$options = state === null || state === void 0 ? void 0 : state.options) !== null && _state$options !== void 0 ? _state$options : []);
      }
    }, _callee25);
  }));
  return _openAshbyComboboxList.apply(this, arguments);
}
function probeAshbyComboboxMetadata(_x6, _x7) {
  return _probeAshbyComboboxMetadata.apply(this, arguments);
} // Ashby's 'text' answers: plain inputs go straight to the backend; a combobox first probes its
// list (options are unknown from the markup). `metadata.answerType` is read at generate time
// because the probe may have upgraded the question to a single-select.
function _probeAshbyComboboxMetadata() {
  _probeAshbyComboboxMetadata = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee26(metadata, field) {
    var shouldAbort,
      input,
      listOptions,
      optionTexts,
      _args27 = arguments;
    return autofill_regenerator().w(function (_context27) {
      while (1) switch (_context27.n) {
        case 0:
          shouldAbort = _args27.length > 2 && _args27[2] !== undefined ? _args27[2] : autofill_NEVER_ABORT;
          input = getComboboxInput(field);
          if (input) {
            _context27.n = 1;
            break;
          }
          return _context27.a(2, autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
            options: []
          }));
        case 1:
          _context27.n = 2;
          return openAshbyComboboxList(input, shouldAbort);
        case 2:
          listOptions = _context27.v;
          _context27.n = 3;
          return resetAshbyCombobox(input);
        case 3:
          if (!shouldAbort()) {
            _context27.n = 4;
            break;
          }
          return _context27.a(2, metadata);
        case 4:
          optionTexts = Array.from(new Set(listOptions.map(function (option) {
            return option.text;
          })));
          if (!(optionTexts.length === 0)) {
            _context27.n = 5;
            break;
          }
          return _context27.a(2, autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
            options: []
          }));
        case 5:
          return _context27.a(2, autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
            answerType: 'single-select',
            options: optionTexts
          }));
      }
    }, _callee26);
  }));
  return _probeAshbyComboboxMetadata.apply(this, arguments);
}
var ASHBY_TEXT_ANSWER_HANDLER = {
  isMetadataReady: function isMetadataReady(metadata) {
    return metadata.fieldKind !== 'combobox' || Array.isArray(metadata.options);
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee2(metadata, _fieldId, _question, field) {
      var _ref7,
        _ref7$shouldAbort,
        shouldAbort,
        _args2 = arguments;
      return autofill_regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _ref7 = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : {}, _ref7$shouldAbort = _ref7.shouldAbort, shouldAbort = _ref7$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref7$shouldAbort;
            return _context2.a(2, probeAshbyComboboxMetadata(metadata, field, shouldAbort));
        }
      }, _callee2);
    }));
    function fetchMissingMetadata(_x8, _x9, _x0, _x1) {
      return _fetchMissingMetadata.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function generateAnswer(question, metadata, fieldId) {
    var _metadata$answerType, _metadata$options2, _metadata$referenceQa2;
    return getAnswer(question, (_metadata$answerType = metadata.answerType) !== null && _metadata$answerType !== void 0 ? _metadata$answerType : 'text', (_metadata$options2 = metadata.options) !== null && _metadata$options2 !== void 0 ? _metadata$options2 : [], metadata.constraints, fieldId, true, (_metadata$referenceQa2 = metadata.referenceQaPairs) !== null && _metadata$referenceQa2 !== void 0 ? _metadata$referenceQa2 : []);
  }
};
function splitCommaSegments(value) {
  return normalizeAshbyText(value).split(/\s*,\s*/).map(function (segment) {
    return segment.trim();
  }).filter(Boolean);
}

// Search-combobox queries derived from a free-text answer, most specific first. A profile
// location arrives as a full address ("124 East Humboldt Street, San Jose, California, 95112,
// United States") while the geo lookup indexes places: drop the numeric segments (street, zip),
// then shorten from the right (city + state, city) before falling back to each segment alone.
// Exported for tests.
function deriveComboboxSearchCandidates(answer) {
  var text = normalizeAshbyText(answer);
  if (!text) return [];
  var segments = splitCommaSegments(text);
  var placeSegments = segments.filter(function (segment) {
    return !/\d/.test(segment);
  });
  var candidates = [text];
  if (placeSegments.length > 0) {
    candidates.push(placeSegments.join(', '));
    if (placeSegments.length > 2) candidates.push(placeSegments.slice(0, 2).join(', '));
    candidates.push.apply(candidates, [placeSegments[0]].concat(autofill_toConsumableArray(placeSegments.slice(1))));
  }
  return Array.from(new Set(candidates)).slice(0, MAX_COMBOBOX_SEARCH_CANDIDATES);
}
function isAshbyLocationQuestion(fieldId, question) {
  return fieldId === ASHBY_LOCATION_FIELD_ID || ASHBY_LOCATION_QUESTION_PATTERN.test(normalizeAshbyText(question));
}
function joinDistinctPlaceSegments(values) {
  var seen = new Set();
  var segments = [];
  var _iterator2 = autofill_createForOfIteratorHelper(values),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var value = _step2.value;
      var _iterator3 = autofill_createForOfIteratorHelper(splitCommaSegments(value)),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var segment = _step3.value;
          var key = segment.toLowerCase();
          if (seen.has(key)) continue;
          seen.add(key);
          segments.push(segment);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return segments.join(', ');
}

// Extra queries for a LOCATION search that matched none of the answer's own place candidates.
// Some employers' Location lookup lists COUNTRIES only — "Austin" / "Texas" answer "No results",
// "United States" matches (g2i, verified live 2026-10-23) — while the answer engine answers with
// the city ("Los Angeles", "Naperville, Illinois"). Fall back to what a person would type next:
// the profile's own city + state, its country, the answer's last place segment (a full address's
// country, cut by MAX_COMBOBOX_SEARCH_CANDIDATES) and the country a state / province implies.
// `matchText` carries every known part, so the contained-option match picks "United States" over
// "US Virgin Islands" without an embedding round-trip.
function getLocationFallbackSearch(_x10) {
  return _getLocationFallbackSearch.apply(this, arguments);
} // Option whose every comma segment appears in the answer (most segments wins): picks
// "San Jose, California, United States" over "San Jose, Illinois, United States" for a full
// profile address without an embedding round-trip.
function _getLocationFallbackSearch() {
  _getLocationFallbackSearch = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee27(answerText) {
    var _address, _address2, _address3;
    var address, _sections$addresses$, sections, city, state, profileCountry, answerPlaces, impliedCountry, candidates, _t0;
    return autofill_regenerator().w(function (_context28) {
      while (1) switch (_context28.p = _context28.n) {
        case 0:
          address = null;
          _context28.p = 1;
          _context28.n = 2;
          return getProfileSectionData();
        case 2:
          sections = _context28.v;
          address = Array.isArray(sections === null || sections === void 0 ? void 0 : sections.addresses) ? (_sections$addresses$ = sections.addresses[0]) !== null && _sections$addresses$ !== void 0 ? _sections$addresses$ : null : null;
          _context28.n = 4;
          break;
        case 3:
          _context28.p = 3;
          _t0 = _context28.v;
          address = null;
        case 4:
          city = normalizeAshbyText((_address = address) === null || _address === void 0 ? void 0 : _address.city);
          state = normalizeAshbyText((_address2 = address) === null || _address2 === void 0 ? void 0 : _address2.state);
          profileCountry = normalizeAshbyText((_address3 = address) === null || _address3 === void 0 ? void 0 : _address3.country);
          answerPlaces = splitCommaSegments(answerText).filter(function (segment) {
            return !/\d/.test(segment);
          });
          impliedCountry = inferCountryFromPlace(answerText) || inferCountryFromPlace(state, {
            allowCodes: true
          });
          candidates = [[city, state].filter(Boolean).join(', '), profileCountry, answerPlaces.length > 1 ? answerPlaces[answerPlaces.length - 1] : '', impliedCountry].filter(Boolean);
          return _context28.a(2, {
            candidates: Array.from(new Set(candidates)).slice(0, MAX_LOCATION_FALLBACK_CANDIDATES),
            matchText: joinDistinctPlaceSegments([answerText, city, state, profileCountry || impliedCountry])
          });
      }
    }, _callee27, null, [[1, 3]]);
  }));
  return _getLocationFallbackSearch.apply(this, arguments);
}
function getContainedOption(answer, options) {
  var haystack = " ".concat(normalizeAshbyText(answer).toLowerCase(), " ");
  var best = null;
  var bestSegments = 0;
  var _iterator4 = autofill_createForOfIteratorHelper(options),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var option = _step4.value;
      var segments = splitCommaSegments(option.text).map(function (segment) {
        return segment.toLowerCase();
      });
      if (segments.length === 0) continue;
      var contained = segments.every(function (segment) {
        return haystack.includes(segment);
      });
      if (contained && segments.length > bestSegments) {
        best = option;
        bestSegments = segments.length;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return best;
}
var SEARCH_OVERLAP_STOPWORDS = new Set(['the', 'and', 'of', 'for', 'in', 'at', 'de', 'la', 'le', 'des', 'du', 'united', 'states', 'usa']);
function getSignificantTokens(value) {
  return normalizeAshbyText(value).toLowerCase().split(/[^a-z0-9]+/).filter(function (token) {
    return token.length >= 3 && !SEARCH_OVERLAP_STOPWORDS.has(token);
  });
}

// Whole-word containment: " united states " in " naperville illinois united states ", never
// "us" inside "austin".
function toSearchWords(value) {
  return " ".concat(normalizeAshbyText(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(), " ");
}

// The answer names the whole option, segment by segment ("Naperville, Illinois, United States" →
// "United States"): the overlap stopwords would otherwise reject every country-level result.
function isOptionNamedByAnswer(answer, optionText) {
  var answerWords = toSearchWords(answer);
  var segments = splitCommaSegments(optionText).map(toSearchWords).filter(function (words) {
    return words.trim();
  });
  return segments.length > 0 && segments.every(function (words) {
    return answerWords.includes(words);
  });
}

// A search result is only trusted when it visibly relates to the answer: they share a significant
// word, the answer names the whole option, or the answer is the option's acronym ("MIT" →
// "Massachusetts Institute of Technology").
// A fuzzy lookup happily returns "Landisville, New Jersey" for "Atlantis Nowhere Land"; without
// this guard the embedding/first-option fallback would commit that stranger as the location.
function isPlausibleSearchResult(answer, optionText) {
  var answerTokens = new Set(getSignificantTokens(answer));
  var optionTokens = getSignificantTokens(optionText);
  if (optionTokens.some(function (token) {
    return answerTokens.has(token);
  })) return true;
  if (isOptionNamedByAnswer(answer, optionText)) return true;
  var acronym = normalizeAshbyText(optionText).split(/[^a-zA-Z0-9]+/).filter(function (word) {
    return word && !SEARCH_OVERLAP_STOPWORDS.has(word.toLowerCase());
  }).map(function (word) {
    return word[0].toLowerCase();
  }).join('');
  var compactAnswer = normalizeAshbyText(answer).toLowerCase().replace(/[^a-z0-9]/g, '');
  return compactAnswer.length >= 2 && compactAnswer === acronym;
}
function getBestMatchingOption(_x11, _x12) {
  return _getBestMatchingOption.apply(this, arguments);
}
function _getBestMatchingOption() {
  _getBestMatchingOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee28(answer, options) {
    var _options$;
    var normalizedAnswer, exactMatch, containedMatch, _options$2, _ref35, _options$find, bestText, _options$3, _t1;
    return autofill_regenerator().w(function (_context29) {
      while (1) switch (_context29.p = _context29.n) {
        case 0:
          if (!(!Array.isArray(options) || options.length === 0)) {
            _context29.n = 1;
            break;
          }
          return _context29.a(2, null);
        case 1:
          normalizedAnswer = normalizeAshbyText(answer).toLowerCase();
          if (normalizedAnswer) {
            _context29.n = 2;
            break;
          }
          return _context29.a(2, (_options$ = options[0]) !== null && _options$ !== void 0 ? _options$ : null);
        case 2:
          exactMatch = options.find(function (option) {
            return option.text.toLowerCase() === normalizedAnswer;
          });
          if (!exactMatch) {
            _context29.n = 3;
            break;
          }
          return _context29.a(2, exactMatch);
        case 3:
          containedMatch = getContainedOption(answer, options);
          if (!containedMatch) {
            _context29.n = 4;
            break;
          }
          return _context29.a(2, containedMatch);
        case 4:
          _context29.p = 4;
          _context29.n = 5;
          return getEmbeddingMatch(answer, options.map(function (option) {
            return option.text;
          }));
        case 5:
          bestText = _context29.v;
          if (bestText) {
            _context29.n = 6;
            break;
          }
          return _context29.a(2, (_options$2 = options[0]) !== null && _options$2 !== void 0 ? _options$2 : null);
        case 6:
          return _context29.a(2, (_ref35 = (_options$find = options.find(function (option) {
            return option.text === bestText;
          })) !== null && _options$find !== void 0 ? _options$find : options[0]) !== null && _ref35 !== void 0 ? _ref35 : null);
        case 7:
          _context29.p = 7;
          _t1 = _context29.v;
          return _context29.a(2, (_options$3 = options[0]) !== null && _options$3 !== void 0 ? _options$3 : null);
      }
    }, _callee28, null, [[4, 7]]);
  }));
  return _getBestMatchingOption.apply(this, arguments);
}
function getLiveDocumentFieldById(fieldId) {
  var stableDocumentFieldId = getStableDocumentFieldId(fieldId);
  if (!stableDocumentFieldId) return null;
  return getFieldWrappers().find(function (candidateField) {
    var question = getAshbyQuestionText(candidateField);
    if (!question) return false;
    var fileInput = getFileInputInsideField(candidateField);
    return stableDocumentFieldId === 'resume' ? isResumeField(question, fileInput) : isCoverLetterField(question, fileInput);
  }) || null;
}
function getLiveFieldById(fieldId, fallbackField) {
  var _window$CSS2, _sourceNode$closest;
  if (!fieldId) return fallbackField;
  var liveDocumentField = getLiveDocumentFieldById(fieldId);
  if (liveDocumentField) return liveDocumentField;
  var escapedId = (_window$CSS2 = window.CSS) !== null && _window$CSS2 !== void 0 && _window$CSS2.escape ? window.CSS.escape(fieldId) : fieldId;
  var directControl = document.getElementById(fieldId);
  var fromName = document.querySelector("[name=\"".concat(escapedId, "\"]"));
  var fromLabel = document.querySelector("label[for=\"".concat(escapedId, "\"]"));
  var sourceNode = directControl || fromName || fromLabel;
  return (sourceNode === null || sourceNode === void 0 || (_sourceNode$closest = sourceNode.closest) === null || _sourceNode$closest === void 0 ? void 0 : _sourceNode$closest.call(sourceNode, ASHBY_FIELD_ENTRY_SELECTOR)) || fallbackField;
}
function ensureAshbyFileInput(_x13, _x14) {
  return _ensureAshbyFileInput.apply(this, arguments);
}
function _ensureAshbyFileInput() {
  _ensureAshbyFileInput = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee29(fieldId, field) {
    var _liveField$querySelec;
    var shouldAbort,
      resolveField,
      liveField,
      existingInput,
      removeButton,
      nextInput,
      _args30 = arguments;
    return autofill_regenerator().w(function (_context30) {
      while (1) switch (_context30.n) {
        case 0:
          shouldAbort = _args30.length > 2 && _args30[2] !== undefined ? _args30[2] : autofill_NEVER_ABORT;
          resolveField = function resolveField() {
            return getLiveFieldById(fieldId, field);
          };
          liveField = resolveField();
          if (!shouldAbort()) {
            _context30.n = 1;
            break;
          }
          return _context30.a(2, null);
        case 1:
          existingInput = getFileInputInsideField(liveField);
          if (!existingInput) {
            _context30.n = 2;
            break;
          }
          return _context30.a(2, existingInput);
        case 2:
          removeButton = (liveField === null || liveField === void 0 ? void 0 : liveField.querySelector(ASHBY_FILE_REMOVE_BUTTON_SELECTOR)) || Array.from((_liveField$querySelec = liveField === null || liveField === void 0 ? void 0 : liveField.querySelectorAll('button')) !== null && _liveField$querySelec !== void 0 ? _liveField$querySelec : []).find(function (button) {
            var label = normalizeAshbyText(button.textContent || button.getAttribute('aria-label') || button.getAttribute('title'));
            return /remove|delete/i.test(label);
          });
          if (!removeButton) {
            _context30.n = 10;
            break;
          }
          _context30.n = 3;
          return useRemoteInput();
        case 3:
          if (!_context30.v) {
            _context30.n = 5;
            break;
          }
          _context30.n = 4;
          return remoteClick(removeButton);
        case 4:
          _context30.n = 6;
          break;
        case 5:
          _context30.n = 6;
          return clickLikeHuman(removeButton, {
            shouldAbort: shouldAbort
          });
        case 6:
          _context30.n = 7;
          return waitForPositiveResultWithAbort(function () {
            return getFileInputInsideField(resolveField());
          }, FILE_UPLOAD_WAIT_TIMEOUT_MS, shouldAbort, 100);
        case 7:
          nextInput = _context30.v;
          if (!nextInput) {
            _context30.n = 8;
            break;
          }
          return _context30.a(2, nextInput);
        case 8:
          if (!shouldAbort()) {
            _context30.n = 9;
            break;
          }
          return _context30.a(2, null);
        case 9:
          throw new Error('File upload input did not reappear after removing the existing file');
        case 10:
          if (liveField) {
            _context30.n = 11;
            break;
          }
          throw new Error('File upload field not found');
        case 11:
          throw new Error('File upload input not found');
        case 12:
          return _context30.a(2);
      }
    }, _callee29);
  }));
  return _ensureAshbyFileInput.apply(this, arguments);
}
function getAshbyRemoveButtons(field) {
  var _field$querySelectorA6;
  return Array.from((_field$querySelectorA6 = field === null || field === void 0 ? void 0 : field.querySelectorAll(ASHBY_FILE_REMOVE_BUTTON_SELECTOR)) !== null && _field$querySelectorA6 !== void 0 ? _field$querySelectorA6 : []);
}

// The upload has settled when the field is no longer spinning and shows a remove button that was
// NOT there before the file was attached. The "new element" check matters because a previously
// attached file (a re-run, or Ashby's own resume-parse autofill) already has one: React unmounts
// it for the duration of the replacement upload and mounts a fresh button afterwards.
function isAshbyFileUploadSettled(field, previousRemoveButtons) {
  if (!field) return false;
  if (field.querySelector(ASHBY_FILE_UPLOADING_SELECTOR)) return false;
  return getAshbyRemoveButtons(field).some(function (button) {
    return !previousRemoveButtons.has(button);
  });
}

// Ashby reports a rejected S3 POST / set-value mutation only through a toast ("<name> failed to
// upload") — the file row still renders as if it were attached, so the toast is the only signal.
function findAshbyUploadFailedToast(fileName) {
  var _Array$from$find2;
  var normalizedFileName = normalizeAshbyText(fileName);
  return (_Array$from$find2 = Array.from(document.querySelectorAll(ASHBY_TOAST_SELECTOR)).find(function (toast) {
    var text = normalizeAshbyText(toast.textContent);
    return ASHBY_UPLOAD_FAILED_TOAST_PATTERN.test(text) && (!normalizedFileName || text.includes(normalizedFileName));
  })) !== null && _Array$from$find2 !== void 0 ? _Array$from$find2 : null;
}

// Attach `answer` to the field's file input and block until Ashby has actually finished
// uploading it (see ASHBY_FILE_REMOVE_BUTTON_SELECTOR). Throws — so the shared engine marks the
// field errored instead of filled — when the upload is rejected or never settles.
function fillAshbyFileInputAndAwaitUpload(_x15, _x16, _x17) {
  return _fillAshbyFileInputAndAwaitUpload.apply(this, arguments);
}
function _fillAshbyFileInputAndAwaitUpload() {
  _fillAshbyFileInputAndAwaitUpload = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee30(fieldId, field, answer) {
    var shouldAbort,
      input,
      resolveField,
      previousRemoveButtons,
      failedToast,
      settled,
      _args31 = arguments;
    return autofill_regenerator().w(function (_context31) {
      while (1) switch (_context31.n) {
        case 0:
          shouldAbort = _args31.length > 3 && _args31[3] !== undefined ? _args31[3] : autofill_NEVER_ABORT;
          _context31.n = 1;
          return ensureAshbyFileInput(fieldId, field, shouldAbort);
        case 1:
          input = _context31.v;
          if (!(!input || shouldAbort())) {
            _context31.n = 2;
            break;
          }
          return _context31.a(2);
        case 2:
          resolveField = function resolveField() {
            return getLiveFieldById(fieldId, field) || input.closest(ASHBY_FIELD_ENTRY_SELECTOR) || field;
          };
          previousRemoveButtons = new Set(getAshbyRemoveButtons(resolveField()));
          fillFileInput(input, answer.fileName, answer.base64, answer.mimeType);
          failedToast = null;
          _context31.n = 3;
          return waitForPositiveResultWithAbort(function () {
            failedToast = findAshbyUploadFailedToast(answer.fileName);
            if (failedToast) return true;
            return isAshbyFileUploadSettled(resolveField(), previousRemoveButtons);
          }, FILE_UPLOAD_COMPLETE_TIMEOUT_MS, shouldAbort, FILE_UPLOAD_COMPLETE_POLL_MS);
        case 3:
          settled = _context31.v;
          if (!shouldAbort()) {
            _context31.n = 4;
            break;
          }
          return _context31.a(2);
        case 4:
          if (!failedToast) {
            _context31.n = 5;
            break;
          }
          throw new Error("File upload rejected: ".concat(normalizeAshbyText(failedToast.textContent)));
        case 5:
          if (settled) {
            _context31.n = 6;
            break;
          }
          throw new Error("File upload did not finish within ".concat(FILE_UPLOAD_COMPLETE_TIMEOUT_MS / 1000, "s (no remove button appeared)"));
        case 6:
          return _context31.a(2);
      }
    }, _callee30);
  }));
  return _fillAshbyFileInputAndAwaitUpload.apply(this, arguments);
}
function isButtonActive(button) {
  var _button$className;
  return ASHBY_ACTIVE_CLASS_PATTERN.test((_button$className = button === null || button === void 0 ? void 0 : button.className) !== null && _button$className !== void 0 ? _button$className : '');
}

// Whether a radio/checkbox option is already selected. Ashby toggles an option OFF when the
// already-selected one is clicked again, so autofill must not re-click a selected option — it
// would deselect the candidate's (or a prior fill's) choice. Native `.checked` is checked first,
// then the `_checked_` class on the option's label / `_option_` wrapper subtree (the React-owned
// source of truth), so options selected without a native click are still recognised.
function isAshbyChoiceSelected(input) {
  var _input$labels2, _input$closest, _optionLabel$closest;
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (input !== null && input !== void 0 && input.checked) return true;
  var optionLabel = label || (input === null || input === void 0 || (_input$labels2 = input.labels) === null || _input$labels2 === void 0 ? void 0 : _input$labels2[0]) || null;
  if (ASHBY_CHECKED_CLASS_PATTERN.test(getElementClassName(optionLabel))) return true;
  var optionWrapper = (input === null || input === void 0 || (_input$closest = input.closest) === null || _input$closest === void 0 ? void 0 : _input$closest.call(input, '[class*="_option_"]')) || (optionLabel === null || optionLabel === void 0 || (_optionLabel$closest = optionLabel.closest) === null || _optionLabel$closest === void 0 ? void 0 : _optionLabel$closest.call(optionLabel, '[class*="_option_"]'));
  if (!optionWrapper) return false;
  if (ASHBY_CHECKED_CLASS_PATTERN.test(getElementClassName(optionWrapper))) return true;
  return Array.from(optionWrapper.querySelectorAll('[class]')).some(function (element) {
    return ASHBY_CHECKED_CLASS_PATTERN.test(getElementClassName(element));
  });
}

// A "No results" seen right after typing can be the PREVIOUS query's answer still on screen (the
// next lookup is in flight — common on a slow connection); a real empty answer for the new query
// needs at least a round trip, so it only counts after this settle window.
var AUTOCOMPLETE_EMPTY_SETTLE_MS = 500;
function waitForComboboxSearchState(_x18, _x19) {
  return _waitForComboboxSearchState.apply(this, arguments);
}
function _waitForComboboxSearchState() {
  _waitForComboboxSearchState = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee31(input, shouldAbort) {
    var timeoutMs,
      startedAt,
      _args32 = arguments;
    return autofill_regenerator().w(function (_context32) {
      while (1) switch (_context32.n) {
        case 0:
          timeoutMs = _args32.length > 2 && _args32[2] !== undefined ? _args32[2] : AUTOCOMPLETE_WAIT_TIMEOUT_MS;
          startedAt = Date.now();
          return _context32.a(2, waitForPositiveResultWithAbort(function () {
            var state = getComboboxListboxState(input);
            if ((state === null || state === void 0 ? void 0 : state.type) === 'ready') return state;
            if ((state === null || state === void 0 ? void 0 : state.type) === 'empty' && Date.now() - startedAt >= AUTOCOMPLETE_EMPTY_SETTLE_MS) return state;
            return null;
          }, timeoutMs, shouldAbort, 100));
      }
    }, _callee31);
  }));
  return _waitForComboboxSearchState.apply(this, arguments);
}
function commitComboboxOption(_x20, _x21, _x22) {
  return _commitComboboxOption.apply(this, arguments);
} // Click an option of a FIXED list. A long list (~250 countries) renders every option inside its own
// scrolling listbox, and the runner's real click scrolls the page, never that list: an option below
// the list's fold ("United States") failed as out of view / covered and the required box stayed
// empty (TRM Labs 2026-10-24: country of employment, work location, citizenship). Narrow the list
// the way a person does: with the caret already in the open list's input, type the option's words
// one at a time and click it the moment it is in reach — usually after the first word ("United").
function _commitComboboxOption() {
  _commitComboboxOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee32(input, option, shouldAbort) {
    return autofill_regenerator().w(function (_context33) {
      while (1) switch (_context33.n) {
        case 0:
          if (option !== null && option !== void 0 && option.element) {
            _context33.n = 1;
            break;
          }
          return _context33.a(2, false);
        case 1:
          _context33.n = 2;
          return useRemoteInput();
        case 2:
          if (!_context33.v) {
            _context33.n = 4;
            break;
          }
          _context33.n = 3;
          return remoteClick(option.element);
        case 3:
          _context33.n = 5;
          break;
        case 4:
          _context33.n = 5;
          return clickLikeHuman(option.element, {
            shouldAbort: shouldAbort
          });
        case 5:
          _context33.n = 6;
          return sleep(COMBOBOX_COMMIT_SETTLE_MS);
        case 6:
          return _context33.a(2, Boolean(normalizeAshbyText(input.value)));
      }
    }, _callee32);
  }));
  return _commitComboboxOption.apply(this, arguments);
}
function commitFixedListOption(_x23, _x24, _x25) {
  return _commitFixedListOption.apply(this, arguments);
} // Type each candidate (skipping queries already typed into this input) and click the best
// plausible option once the lookup settles; true once an option committed. `deadline` (epoch ms)
// bounds the whole search: no new query starts after it, and each wait is cut to what is left.
function _commitFixedListOption() {
  _commitFixedListOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee33(input, option, shouldAbort) {
    var _option$text$match;
    var wanted, findReachableOption, _iterator6, _step6, word, reachable, _t10, _t11;
    return autofill_regenerator().w(function (_context34) {
      while (1) switch (_context34.p = _context34.n) {
        case 0:
          _t10 = !(option !== null && option !== void 0 && option.element) || !isClippedByScrollAncestor(option.element);
          if (_t10) {
            _context34.n = 2;
            break;
          }
          _context34.n = 1;
          return useRemoteInput();
        case 1:
          _t10 = !_context34.v;
        case 2:
          if (!_t10) {
            _context34.n = 3;
            break;
          }
          return _context34.a(2, commitComboboxOption(input, option, shouldAbort));
        case 3:
          if (!(document.activeElement !== input)) {
            _context34.n = 4;
            break;
          }
          _context34.n = 4;
          return remoteClick(input);
        case 4:
          wanted = option.text.toLowerCase();
          findReachableOption = function findReachableOption() {
            var current = getComboboxListboxState(input);
            if ((current === null || current === void 0 ? void 0 : current.type) !== 'ready') return null;
            var match = current.options.find(function (candidate) {
              return candidate.text.toLowerCase() === wanted;
            });
            return match && !isClippedByScrollAncestor(match.element) ? match : null;
          };
          _iterator6 = autofill_createForOfIteratorHelper((_option$text$match = option.text.match(/\S+\s*/g)) !== null && _option$text$match !== void 0 ? _option$text$match : []);
          _context34.p = 5;
          _iterator6.s();
        case 6:
          if ((_step6 = _iterator6.n()).done) {
            _context34.n = 11;
            break;
          }
          word = _step6.value;
          if (!shouldAbort()) {
            _context34.n = 7;
            break;
          }
          return _context34.a(2, false);
        case 7:
          _context34.n = 8;
          return runRemoteInput([{
            type: 'type',
            text: word
          }]);
        case 8:
          _context34.n = 9;
          return waitForPositiveResultWithAbort(findReachableOption, COMBOBOX_LIST_PROBE_TIMEOUT_MS, shouldAbort, 100);
        case 9:
          reachable = _context34.v;
          if (!reachable) {
            _context34.n = 10;
            break;
          }
          return _context34.a(2, commitComboboxOption(input, reachable, shouldAbort));
        case 10:
          _context34.n = 6;
          break;
        case 11:
          _context34.n = 13;
          break;
        case 12:
          _context34.p = 12;
          _t11 = _context34.v;
          _iterator6.e(_t11);
        case 13:
          _context34.p = 13;
          _iterator6.f();
          return _context34.f(13);
        case 14:
          return _context34.a(2, false);
      }
    }, _callee33, null, [[5, 12, 13, 14]]);
  }));
  return _commitFixedListOption.apply(this, arguments);
}
function searchAshbyCombobox(_x26, _x27, _x28, _x29, _x30) {
  return _searchAshbyCombobox.apply(this, arguments);
} // Fill one Ashby combobox. Fixed list: open it (ArrowDown) and click the option matching the
// answer. Search list (nothing opens): type the answer, then progressively shorter place
// candidates, and click the best option once the lookup settles; a LOCATION search then tries the
// profile address (getLocationFallbackSearch). When no option matches the input is reset — Ashby
// drops free text on blur, so a phantom value would never submit anyway — and a required question
// throws so the field surfaces as an error instead of a silent blank. A gesture that fails mid-way
// (an option out of reach, a covered control) still closes the list before the error goes up: an
// open listbox covers the questions below it and the next fills fail on it in turn.
// Shared by the standalone `combobox` field kind and each education row's School field.
function _searchAshbyCombobox() {
  _searchAshbyCombobox = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee34(input, candidates, matchText, typedQueries, shouldAbort) {
    var deadline,
      _iterator7,
      _step7,
      candidate,
      remainingMs,
      queryKey,
      listboxState,
      options,
      selectedOption,
      _args35 = arguments,
      _t12;
    return autofill_regenerator().w(function (_context35) {
      while (1) switch (_context35.p = _context35.n) {
        case 0:
          deadline = _args35.length > 5 && _args35[5] !== undefined ? _args35[5] : Infinity;
          _iterator7 = autofill_createForOfIteratorHelper(candidates);
          _context35.p = 1;
          _iterator7.s();
        case 2:
          if ((_step7 = _iterator7.n()).done) {
            _context35.n = 18;
            break;
          }
          candidate = _step7.value;
          if (!shouldAbort()) {
            _context35.n = 3;
            break;
          }
          return _context35.a(2, false);
        case 3:
          remainingMs = deadline - Date.now();
          if (!(remainingMs <= 0)) {
            _context35.n = 4;
            break;
          }
          return _context35.a(2, false);
        case 4:
          queryKey = candidate.toLowerCase();
          if (!typedQueries.has(queryKey)) {
            _context35.n = 5;
            break;
          }
          return _context35.a(3, 17);
        case 5:
          typedQueries.add(queryKey);
          // The widget rewrites the value on selection, so the typed candidate is not verified back.
          _context35.n = 6;
          return useRemoteInput();
        case 6:
          if (!_context35.v) {
            _context35.n = 8;
            break;
          }
          _context35.n = 7;
          return remoteTypeInto(input, candidate, {
            verify: false
          });
        case 7:
          _context35.n = 9;
          break;
        case 8:
          _context35.n = 9;
          return fillTextInputLikeHuman(input, candidate, autofill_objectSpread(autofill_objectSpread({}, ASHBY_HUMAN_TYPING_OPTIONS), {}, {
            blur: false,
            shouldAbort: shouldAbort
          }));
        case 9:
          _context35.n = 10;
          return waitForComboboxSearchState(input, shouldAbort, Math.max(0, Math.min(AUTOCOMPLETE_WAIT_TIMEOUT_MS, deadline - Date.now())));
        case 10:
          listboxState = _context35.v;
          if (!shouldAbort()) {
            _context35.n = 11;
            break;
          }
          return _context35.a(2, false);
        case 11:
          options = (listboxState === null || listboxState === void 0 ? void 0 : listboxState.type) === 'ready' ? listboxState.options : [];
          if (!(options.length === 0)) {
            _context35.n = 12;
            break;
          }
          return _context35.a(3, 17);
        case 12:
          _context35.n = 13;
          return getBestMatchingOption(matchText, options);
        case 13:
          selectedOption = _context35.v;
          if (!shouldAbort()) {
            _context35.n = 14;
            break;
          }
          return _context35.a(2, false);
        case 14:
          if (!(!selectedOption || !isPlausibleSearchResult(matchText, selectedOption.text))) {
            _context35.n = 15;
            break;
          }
          return _context35.a(3, 17);
        case 15:
          _context35.n = 16;
          return commitComboboxOption(input, selectedOption, shouldAbort);
        case 16:
          if (!_context35.v) {
            _context35.n = 17;
            break;
          }
          return _context35.a(2, true);
        case 17:
          _context35.n = 2;
          break;
        case 18:
          _context35.n = 20;
          break;
        case 19:
          _context35.p = 19;
          _t12 = _context35.v;
          _iterator7.e(_t12);
        case 20:
          _context35.p = 20;
          _iterator7.f();
          return _context35.f(20);
        case 21:
          return _context35.a(2, false);
      }
    }, _callee34, null, [[1, 19, 20, 21]]);
  }));
  return _searchAshbyCombobox.apply(this, arguments);
}
function fillAshbyComboboxInput(_x31, _x32) {
  return _fillAshbyComboboxInput.apply(this, arguments);
}
function _fillAshbyComboboxInput() {
  _fillAshbyComboboxInput = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee35(input, answer) {
    var shouldAbort,
      options,
      _args36 = arguments,
      _t13;
    return autofill_regenerator().w(function (_context36) {
      while (1) switch (_context36.p = _context36.n) {
        case 0:
          shouldAbort = _args36.length > 2 && _args36[2] !== undefined ? _args36[2] : autofill_NEVER_ABORT;
          options = _args36.length > 3 && _args36[3] !== undefined ? _args36[3] : {};
          _context36.p = 1;
          _context36.n = 2;
          return fillAshbyComboboxInputOnce(input, answer, shouldAbort, options);
        case 2:
          _context36.n = 5;
          break;
        case 3:
          _context36.p = 3;
          _t13 = _context36.v;
          _context36.n = 4;
          return resetAshbyCombobox(input)["catch"](function () {
            return undefined;
          });
        case 4:
          throw _t13;
        case 5:
          return _context36.a(2);
      }
    }, _callee35, null, [[1, 3]]);
  }));
  return _fillAshbyComboboxInput.apply(this, arguments);
}
function fillAshbyComboboxInputOnce(_x33, _x34, _x35) {
  return _fillAshbyComboboxInputOnce.apply(this, arguments);
} // Ashby's date question is a react-datepicker text input that only commits a typed
// `MM/DD/YYYY` followed by Enter; anything else is dropped. Normalize the backend's answer
// (ISO / US / long-form dates, "immediately", "2 weeks") to that shape, or null when it is not
// a date at all. Exported for tests.
function _fillAshbyComboboxInputOnce() {
  _fillAshbyComboboxInputOnce = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee36(input, answer, shouldAbort) {
    var _ref36,
      _ref36$required,
      required,
      _ref36$location,
      location,
      answerText,
      listOptions,
      selectedOption,
      typedQueries,
      searchDeadline,
      fallback,
      _args37 = arguments;
    return autofill_regenerator().w(function (_context37) {
      while (1) switch (_context37.n) {
        case 0:
          _ref36 = _args37.length > 3 && _args37[3] !== undefined ? _args37[3] : {}, _ref36$required = _ref36.required, required = _ref36$required === void 0 ? false : _ref36$required, _ref36$location = _ref36.location, location = _ref36$location === void 0 ? false : _ref36$location;
          if (!(!input || answer == null || shouldAbort())) {
            _context37.n = 1;
            break;
          }
          return _context37.a(2);
        case 1:
          answerText = normalizeAshbyText(answer);
          if (answerText) {
            _context37.n = 2;
            break;
          }
          return _context37.a(2);
        case 2:
          _context37.n = 3;
          return openAshbyComboboxList(input, shouldAbort);
        case 3:
          listOptions = _context37.v;
          if (!shouldAbort()) {
            _context37.n = 4;
            break;
          }
          return _context37.a(2);
        case 4:
          if (!(listOptions.length > 0)) {
            _context37.n = 9;
            break;
          }
          _context37.n = 5;
          return getBestMatchingOption(answerText, listOptions);
        case 5:
          selectedOption = _context37.v;
          if (!shouldAbort()) {
            _context37.n = 6;
            break;
          }
          return _context37.a(2);
        case 6:
          _context37.n = 7;
          return commitFixedListOption(input, selectedOption, shouldAbort);
        case 7:
          if (!_context37.v) {
            _context37.n = 8;
            break;
          }
          return _context37.a(2);
        case 8:
          if (!shouldAbort()) {
            _context37.n = 9;
            break;
          }
          return _context37.a(2);
        case 9:
          typedQueries = new Set();
          searchDeadline = Date.now() + COMBOBOX_SEARCH_BUDGET_MS;
          _context37.n = 10;
          return searchAshbyCombobox(input, deriveComboboxSearchCandidates(answerText), answerText, typedQueries, shouldAbort, searchDeadline);
        case 10:
          if (!_context37.v) {
            _context37.n = 11;
            break;
          }
          return _context37.a(2);
        case 11:
          if (!shouldAbort()) {
            _context37.n = 12;
            break;
          }
          return _context37.a(2);
        case 12:
          if (!(location && listOptions.length === 0)) {
            _context37.n = 16;
            break;
          }
          _context37.n = 13;
          return getLocationFallbackSearch(answerText);
        case 13:
          fallback = _context37.v;
          if (!shouldAbort()) {
            _context37.n = 14;
            break;
          }
          return _context37.a(2);
        case 14:
          _context37.n = 15;
          return searchAshbyCombobox(input, fallback.candidates, fallback.matchText, typedQueries, shouldAbort, searchDeadline);
        case 15:
          if (!_context37.v) {
            _context37.n = 16;
            break;
          }
          return _context37.a(2);
        case 16:
          if (!shouldAbort()) {
            _context37.n = 17;
            break;
          }
          return _context37.a(2);
        case 17:
          _context37.n = 18;
          return resetAshbyCombobox(input);
        case 18:
          if (!required) {
            _context37.n = 19;
            break;
          }
          throw new Error("No dropdown option matches \"".concat(answerText, "\""));
        case 19:
          return _context37.a(2);
      }
    }, _callee36);
  }));
  return _fillAshbyComboboxInputOnce.apply(this, arguments);
}
function formatAshbyDateAnswer(answer) {
  var today = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var text = normalizeAshbyText(answer);
  if (!text) return null;
  var pad = function pad(value) {
    return String(value).padStart(2, '0');
  };
  var format = function format(date) {
    return "".concat(pad(date.getMonth() + 1), "/").concat(pad(date.getDate()), "/").concat(date.getFullYear());
  };
  var isPlausible = function isPlausible(date) {
    return !Number.isNaN(date.getTime()) && date.getFullYear() >= 1900 && date.getFullYear() <= 2100;
  };
  var addDays = function addDays(days) {
    var date = new Date(today.getTime());
    date.setDate(date.getDate() + days);
    return date;
  };
  var us = text.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$/);
  if (us) return "".concat(pad(us[1]), "/").concat(pad(us[2]), "/").concat(us[3]);
  var iso = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T\s].*)?$/);
  if (iso) return "".concat(pad(iso[2]), "/").concat(pad(iso[3]), "/").concat(iso[1]);
  if (/\d{4}/.test(text)) {
    var parsed = new Date(text);
    if (isPlausible(parsed)) return format(parsed);
  }
  if (/\b(immediately|asap|as soon as possible|right away|available now|now|flexible|negotiable)\b/i.test(text)) {
    return format(addDays(DEFAULT_START_DATE_OFFSET_DAYS));
  }
  var words = {
    a: 1,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    twelve: 12
  };
  var relative = text.match(/\b(\d+|a|one|two|three|four|five|six|seven|eight|nine|ten|twelve)\s+(day|week|month)s?\b/i);
  if (relative) {
    var amount = /^\d+$/.test(relative[1]) ? parseInt(relative[1], 10) : words[relative[1].toLowerCase()];
    var unit = relative[2].toLowerCase();
    var days = unit === 'day' ? amount : unit === 'week' ? amount * 7 : amount * 30;
    return format(addDays(days));
  }
  return null;
}
function fillAshbyDateInput(_x36, _x37) {
  return _fillAshbyDateInput.apply(this, arguments);
} // Set a native Ashby month/year <select> by matching any candidate against option value or
// visible text. Ashby's month options carry unpadded numeric values ("1".."12") while
// `parseProfileDate` yields zero-padded months, so callers pass both the numeric and the
// month-name forms.
function _fillAshbyDateInput() {
  _fillAshbyDateInput = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee37(input, answer) {
    var _input$blur4;
    var shouldAbort,
      formatted,
      _input$blur3,
      _args38 = arguments;
    return autofill_regenerator().w(function (_context38) {
      while (1) switch (_context38.n) {
        case 0:
          shouldAbort = _args38.length > 2 && _args38[2] !== undefined ? _args38[2] : autofill_NEVER_ABORT;
          if (!(!input || shouldAbort())) {
            _context38.n = 1;
            break;
          }
          return _context38.a(2);
        case 1:
          formatted = formatAshbyDateAnswer(answer);
          if (formatted) {
            _context38.n = 2;
            break;
          }
          return _context38.a(2);
        case 2:
          _context38.n = 3;
          return useRemoteInput();
        case 3:
          if (!_context38.v) {
            _context38.n = 8;
            break;
          }
          _context38.n = 4;
          return remoteTypeInto(input, formatted, {
            verify: false
          });
        case 4:
          if (!shouldAbort()) {
            _context38.n = 5;
            break;
          }
          return _context38.a(2);
        case 5:
          _context38.n = 6;
          return remoteKey('Enter');
        case 6:
          _context38.n = 7;
          return sleep(COMBOBOX_COMMIT_SETTLE_MS);
        case 7:
          (_input$blur3 = input.blur) === null || _input$blur3 === void 0 || _input$blur3.call(input);
          return _context38.a(2);
        case 8:
          _context38.n = 9;
          return clickLikeHuman(input, {
            shouldAbort: shouldAbort
          });
        case 9:
          _context38.n = 10;
          return fillTextInputLikeHuman(input, formatted, autofill_objectSpread(autofill_objectSpread({}, ASHBY_HUMAN_TYPING_OPTIONS), {}, {
            blur: false,
            shouldAbort: shouldAbort
          }));
        case 10:
          if (!shouldAbort()) {
            _context38.n = 11;
            break;
          }
          return _context38.a(2);
        case 11:
          // Enter commits the typed date in react-datepicker; a synthetic key never submits the form.
          dispatchKeyboardSequence(input, {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13
          });
          _context38.n = 12;
          return sleep(COMBOBOX_COMMIT_SETTLE_MS);
        case 12:
          (_input$blur4 = input.blur) === null || _input$blur4 === void 0 || _input$blur4.call(input);
        case 13:
          return _context38.a(2);
      }
    }, _callee37);
  }));
  return _fillAshbyDateInput.apply(this, arguments);
}
function fillAshbyNativeSelect(_x38, _x39) {
  return _fillAshbyNativeSelect.apply(this, arguments);
} // A start/end date container holds two native selects rendered in [month, year] order.
function _fillAshbyNativeSelect() {
  _fillAshbyNativeSelect = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee38(select, candidates) {
    var normalized, match;
    return autofill_regenerator().w(function (_context39) {
      while (1) switch (_context39.n) {
        case 0:
          if (select) {
            _context39.n = 1;
            break;
          }
          return _context39.a(2);
        case 1:
          normalized = (Array.isArray(candidates) ? candidates : [candidates]).map(function (candidate) {
            return normalizeAshbyText(candidate).toLowerCase();
          }).filter(Boolean);
          if (!(normalized.length === 0)) {
            _context39.n = 2;
            break;
          }
          return _context39.a(2);
        case 2:
          match = Array.from(select.options).filter(function (option) {
            return option.value !== '' && !option.disabled;
          }).find(function (option) {
            return normalized.includes(normalizeAshbyText(option.value).toLowerCase()) || normalized.includes(normalizeAshbyText(option.textContent).toLowerCase());
          });
          if (match) {
            _context39.n = 3;
            break;
          }
          return _context39.a(2);
        case 3:
          _context39.n = 4;
          return useRemoteInput();
        case 4:
          if (!_context39.v) {
            _context39.n = 6;
            break;
          }
          _context39.n = 5;
          return remoteSelectNative(select, {
            value: match.value,
            text: normalizeAshbyText(match.textContent)
          });
        case 5:
          _context39.n = 7;
          break;
        case 6:
          fillSelectInput(select, match.value);
        case 7:
          return _context39.a(2);
      }
    }, _callee38);
  }));
  return _fillAshbyNativeSelect.apply(this, arguments);
}
function fillAshbyEducationDate(_x40, _x41) {
  return _fillAshbyEducationDate.apply(this, arguments);
} // Text fill: real typing on the runner lane (click, verified clear, type), the synthetic human-like
// sequence elsewhere.
function _fillAshbyEducationDate() {
  _fillAshbyEducationDate = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee39(container, dateStr) {
    var _Array$from, _Array$from2, monthSelect, yearSelect, _parseProfileDate, month, year;
    return autofill_regenerator().w(function (_context40) {
      while (1) switch (_context40.n) {
        case 0:
          if (!(!container || !dateStr)) {
            _context40.n = 1;
            break;
          }
          return _context40.a(2);
        case 1:
          _Array$from = Array.from(container.querySelectorAll('select')), _Array$from2 = autofill_slicedToArray(_Array$from, 2), monthSelect = _Array$from2[0], yearSelect = _Array$from2[1];
          _parseProfileDate = parseProfileDate(dateStr), month = _parseProfileDate.month, year = _parseProfileDate.year;
          if (!(monthSelect && month)) {
            _context40.n = 2;
            break;
          }
          _context40.n = 2;
          return fillAshbyNativeSelect(monthSelect, [String(parseInt(month, 10)), getMonthDisplay(month)]);
        case 2:
          if (!(yearSelect && year)) {
            _context40.n = 3;
            break;
          }
          _context40.n = 3;
          return fillAshbyNativeSelect(yearSelect, [year]);
        case 3:
          return _context40.a(2);
      }
    }, _callee39);
  }));
  return _fillAshbyEducationDate.apply(this, arguments);
}
function fillAshbyText(_x42, _x43) {
  return _fillAshbyText.apply(this, arguments);
} // Final Submit. On the runner lane the press is REAL input preceded by a short review scroll (pointer
// motion right before the v3 scorer is consulted). Elsewhere the synthetic human-like click that
// `humanizeClicks` selected before this override existed (the shared runtime defers to the override).
function _fillAshbyText() {
  _fillAshbyText = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee40(control, answer) {
    var shouldAbort,
      url,
      _args41 = arguments;
    return autofill_regenerator().w(function (_context41) {
      while (1) switch (_context41.n) {
        case 0:
          shouldAbort = _args41.length > 2 && _args41[2] !== undefined ? _args41[2] : autofill_NEVER_ABORT;
          if (control) {
            _context41.n = 1;
            break;
          }
          return _context41.a(2);
        case 1:
          if (!(String(control.type || '').toLowerCase() === 'url' && String(answer !== null && answer !== void 0 ? answer : '').trim())) {
            _context41.n = 3;
            break;
          }
          url = toUrlAnswer(answer);
          if (url) {
            _context41.n = 2;
            break;
          }
          throw new Error('The answer is not a link, and this box only accepts a link');
        case 2:
          answer = url;
        case 3:
          _context41.n = 4;
          return useRemoteInput();
        case 4:
          if (!_context41.v) {
            _context41.n = 6;
            break;
          }
          _context41.n = 5;
          return remoteTypeInto(control, String(answer !== null && answer !== void 0 ? answer : ''));
        case 5:
          return _context41.a(2);
        case 6:
          _context41.n = 7;
          return clickLikeHuman(control, {
            shouldAbort: shouldAbort
          });
        case 7:
          _context41.n = 8;
          return fillTextInputLikeHuman(control, answer, autofill_objectSpread(autofill_objectSpread({}, ASHBY_HUMAN_TYPING_OPTIONS), {}, {
            shouldAbort: shouldAbort
          }));
        case 8:
          return _context41.a(2);
      }
    }, _callee40);
  }));
  return _fillAshbyText.apply(this, arguments);
}
function clickAshbySubmitButton(_x44) {
  return _clickAshbySubmitButton.apply(this, arguments);
}
function _clickAshbySubmitButton() {
  _clickAshbySubmitButton = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee41(button) {
    var _t14;
    return autofill_regenerator().w(function (_context42) {
      while (1) switch (_context42.p = _context42.n) {
        case 0:
          _context42.n = 1;
          return useRemoteInput();
        case 1:
          if (!_context42.v) {
            _context42.n = 7;
            break;
          }
          traceRemoteInput('ashby submit: review scroll + real click');
          _context42.p = 2;
          _context42.n = 3;
          return remoteReviewScroll();
        case 3:
          _context42.n = 4;
          return remoteClick(button);
        case 4:
          _context42.n = 6;
          break;
        case 5:
          _context42.p = 5;
          _t14 = _context42.v;
          traceRemoteInput("ashby submit failed: ".concat((_t14 === null || _t14 === void 0 ? void 0 : _t14.message) || _t14));
          throw _t14;
        case 6:
          return _context42.a(2);
        case 7:
          _context42.n = 8;
          return clickLikeHuman(button);
        case 8:
          return _context42.a(2);
      }
    }, _callee41, null, [[2, 5]]);
  }));
  return _clickAshbySubmitButton.apply(this, arguments);
}
var ANSWER_TYPE_HANDLERS = new Map([['text', ASHBY_TEXT_ANSWER_HANDLER], ['single-select', createBackendAnswerHandler('single-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options);
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee3(metadata, _fieldId, question, field) {
      var options;
      return autofill_regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            options = getSyncSelectableOptions(field, question);
            return _context3.a(2, options ? autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
              options: options
            }) : metadata);
        }
      }, _callee3);
    }));
    function fetchMissingMetadata(_x45, _x46, _x47, _x48) {
      return _fetchMissingMetadata2.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }()
})], ['multi-select', createBackendAnswerHandler('multi-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options);
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee4(metadata, _fieldId, question, field) {
      var options;
      return autofill_regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            options = getSyncSelectableOptions(field, question);
            return _context4.a(2, options ? autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
              options: options
            }) : metadata);
        }
      }, _callee4);
    }));
    function fetchMissingMetadata(_x49, _x50, _x51, _x52) {
      return _fetchMissingMetadata3.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }()
})], ['resume', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee5(metadata) {
      return autofill_regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            return _context5.a(2, metadata);
        }
      }, _callee5);
    }));
    function fetchMissingMetadata(_x53) {
      return _fetchMissingMetadata4.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee6() {
      var _yield$getResumeForAu, _t, _t2, _t3, _t4;
      return autofill_regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return getResumeForAutofill();
          case 1:
            _t2 = _yield$getResumeForAu = _context6.v;
            _t = _t2 !== null;
            if (!_t) {
              _context6.n = 2;
              break;
            }
            _t = _yield$getResumeForAu !== void 0;
          case 2:
            if (!_t) {
              _context6.n = 3;
              break;
            }
            _t3 = _yield$getResumeForAu;
            _context6.n = 4;
            break;
          case 3:
            _t3 = {
              type: 'skip'
            };
          case 4:
            return _context6.a(2, _t3);
          case 5:
            _context6.p = 5;
            _t4 = _context6.v;
            return _context6.a(2, {
              type: 'skip'
            });
        }
      }, _callee6, null, [[0, 5]]);
    }));
    function generateAnswer() {
      return _generateAnswer.apply(this, arguments);
    }
    return generateAnswer;
  }()
}], ['cover_letter', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata5 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee7(metadata) {
      return autofill_regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            return _context7.a(2, metadata);
        }
      }, _callee7);
    }));
    function fetchMissingMetadata(_x54) {
      return _fetchMissingMetadata5.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee8(_question, metadata) {
      var _yield$getCoverLetter, _t5, _t6, _t7, _t8;
      return autofill_regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            _context8.n = 1;
            return getCoverLetterForAutofill(metadata.constraints);
          case 1:
            _t6 = _yield$getCoverLetter = _context8.v;
            _t5 = _t6 !== null;
            if (!_t5) {
              _context8.n = 2;
              break;
            }
            _t5 = _yield$getCoverLetter !== void 0;
          case 2:
            if (!_t5) {
              _context8.n = 3;
              break;
            }
            _t7 = _yield$getCoverLetter;
            _context8.n = 4;
            break;
          case 3:
            _t7 = {
              type: 'skip'
            };
          case 4:
            return _context8.a(2, _t7);
          case 5:
            _context8.p = 5;
            _t8 = _context8.v;
            return _context8.a(2, {
              type: 'skip'
            });
        }
      }, _callee8, null, [[0, 5]]);
    }));
    function generateAnswer(_x55, _x56) {
      return _generateAnswer2.apply(this, arguments);
    }
    return generateAnswer;
  }()
}]]);
var FIELD_KIND_HANDLERS = new Map([['text', (/*#__PURE__*/function () {
  var _ref8 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee9(_fieldId, _question, answer, field) {
    var _ref9,
      _ref9$shouldAbort,
      shouldAbort,
      input,
      _args9 = arguments;
    return autofill_regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          _ref9 = _args9.length > 4 && _args9[4] !== undefined ? _args9[4] : {}, _ref9$shouldAbort = _ref9.shouldAbort, shouldAbort = _ref9$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref9$shouldAbort;
          input = getTextInput(field);
          if (input) {
            _context9.n = 1;
            break;
          }
          return _context9.a(2);
        case 1:
          _context9.n = 2;
          return fillAshbyText(input, answer, shouldAbort);
        case 2:
          return _context9.a(2);
      }
    }, _callee9);
  }));
  return function (_x57, _x58, _x59, _x60) {
    return _ref8.apply(this, arguments);
  };
}())], ['textarea', (/*#__PURE__*/function () {
  var _ref0 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee0(_fieldId, _question, answer, field) {
    var _ref1,
      _ref1$shouldAbort,
      shouldAbort,
      textarea,
      _args0 = arguments;
    return autofill_regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          _ref1 = _args0.length > 4 && _args0[4] !== undefined ? _args0[4] : {}, _ref1$shouldAbort = _ref1.shouldAbort, shouldAbort = _ref1$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref1$shouldAbort;
          textarea = getTextarea(field);
          if (textarea) {
            _context0.n = 1;
            break;
          }
          return _context0.a(2);
        case 1:
          _context0.n = 2;
          return fillAshbyText(textarea, answer, shouldAbort);
        case 2:
          return _context0.a(2);
      }
    }, _callee0);
  }));
  return function (_x61, _x62, _x63, _x64) {
    return _ref0.apply(this, arguments);
  };
}())], ['radio', (/*#__PURE__*/function () {
  var _ref10 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee1(_fieldId, _question, answer, field) {
    var _ref11,
      _ref11$shouldAbort,
      shouldAbort,
      radioOptions,
      selectedOption,
      _args1 = arguments;
    return autofill_regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          _ref11 = _args1.length > 4 && _args1[4] !== undefined ? _args1[4] : {}, _ref11$shouldAbort = _ref11.shouldAbort, shouldAbort = _ref11$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref11$shouldAbort;
          radioOptions = getRadioInputs(field).map(function (input) {
            var _input$labels3;
            return {
              input: input,
              label: ((_input$labels3 = input.labels) === null || _input$labels3 === void 0 ? void 0 : _input$labels3[0]) || null,
              text: getChoiceInputLabelText(input)
            };
          }).filter(function (option) {
            return option.text;
          });
          _context1.n = 1;
          return getBestMatchingOption(answer, radioOptions);
        case 1:
          selectedOption = _context1.v;
          if (selectedOption) {
            _context1.n = 2;
            break;
          }
          return _context1.a(2);
        case 2:
          if (!isAshbyChoiceSelected(selectedOption.input, selectedOption.label)) {
            _context1.n = 3;
            break;
          }
          return _context1.a(2);
        case 3:
          _context1.n = 4;
          return useRemoteInput();
        case 4:
          if (!_context1.v) {
            _context1.n = 6;
            break;
          }
          _context1.n = 5;
          return remoteCheck(selectedOption.input, true);
        case 5:
          _context1.n = 7;
          break;
        case 6:
          _context1.n = 7;
          return clickLikeHuman(selectedOption.label || selectedOption.input, {
            shouldAbort: shouldAbort
          });
        case 7:
          return _context1.a(2);
      }
    }, _callee1);
  }));
  return function (_x65, _x66, _x67, _x68) {
    return _ref10.apply(this, arguments);
  };
}())], ['button-group', (/*#__PURE__*/function () {
  var _ref12 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee10(_fieldId, _question, answer, field) {
    var _ref13,
      _ref13$shouldAbort,
      shouldAbort,
      buttonOptions,
      selectedOption,
      _args10 = arguments;
    return autofill_regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _ref13 = _args10.length > 4 && _args10[4] !== undefined ? _args10[4] : {}, _ref13$shouldAbort = _ref13.shouldAbort, shouldAbort = _ref13$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref13$shouldAbort;
          buttonOptions = getChoiceButtons(field);
          _context10.n = 1;
          return getBestMatchingOption(answer, buttonOptions);
        case 1:
          selectedOption = _context10.v;
          if (selectedOption !== null && selectedOption !== void 0 && selectedOption.button) {
            _context10.n = 2;
            break;
          }
          return _context10.a(2);
        case 2:
          if (!isButtonActive(selectedOption.button)) {
            _context10.n = 3;
            break;
          }
          return _context10.a(2);
        case 3:
          _context10.n = 4;
          return useRemoteInput();
        case 4:
          if (!_context10.v) {
            _context10.n = 8;
            break;
          }
          _context10.n = 5;
          return remoteClick(selectedOption.button);
        case 5:
          _context10.n = 6;
          return sleep(COMBOBOX_COMMIT_SETTLE_MS);
        case 6:
          if (isButtonActive(selectedOption.button)) {
            _context10.n = 7;
            break;
          }
          throw new Error("Option \"".concat(selectedOption.text, "\" did not activate after a real click"));
        case 7:
          return _context10.a(2);
        case 8:
          _context10.n = 9;
          return clickLikeHuman(selectedOption.button, {
            shouldAbort: shouldAbort
          });
        case 9:
          return _context10.a(2);
      }
    }, _callee10);
  }));
  return function (_x69, _x70, _x71, _x72) {
    return _ref12.apply(this, arguments);
  };
}())], ['checkbox', (/*#__PURE__*/function () {
  var _ref14 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee11(_fieldId, question, answer, field) {
    var _ref15,
      _ref15$shouldAbort,
      shouldAbort,
      checkboxInputs,
      isMultiSelectGroup,
      normalizedSelections,
      answerSelects,
      isExplicitMultiSelection,
      _iterator5,
      _step5,
      _checkbox$labels,
      checkbox,
      label,
      shouldCheck,
      isSelected,
      _args11 = arguments,
      _t9;
    return autofill_regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _ref15 = _args11.length > 4 && _args11[4] !== undefined ? _args11[4] : {}, _ref15$shouldAbort = _ref15.shouldAbort, shouldAbort = _ref15$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref15$shouldAbort;
          checkboxInputs = getCheckboxInputs(field); // A group of checkboxes is a multi-select; a lone checkbox is a boolean
          // (consent / opt-in) which is handled differently below.
          isMultiSelectGroup = checkboxInputs.length > 1; // Case-insensitive: the backend answers a lone consent box "Yes" (capitalized) and Ashby's
          // option labels/values are free-form — an exact-case compare left required consent boxes
          // unticked.
          normalizedSelections = (Array.isArray(answer) ? answer.map(function (value) {
            return normalizeAshbyText(value);
          }) : typeof answer === 'boolean' ? [] : [normalizeAshbyText(answer)]).map(function (value) {
            return value.toLowerCase();
          }).filter(Boolean);
          answerSelects = function answerSelects(value) {
            return normalizedSelections.includes(normalizeAshbyText(value).toLowerCase());
          }; // Only mirror (i.e. untick omitted boxes) when the answer is an explicit, non-empty
          // multi-value selection. An empty/unresolved answer — or a boolean/single value that
          // isn't a real multi-select list — must never clear a box the candidate already ticked.
          isExplicitMultiSelection = Array.isArray(answer) && answer.length > 0;
          _iterator5 = autofill_createForOfIteratorHelper(checkboxInputs);
          _context11.p = 1;
          _iterator5.s();
        case 2:
          if ((_step5 = _iterator5.n()).done) {
            _context11.n = 12;
            break;
          }
          checkbox = _step5.value;
          label = getChoiceInputLabelText(checkbox, question);
          shouldCheck = typeof answer === 'boolean' ? answer : answerSelects(label) || answerSelects(checkbox.value) || checkboxInputs.length === 1 && (answerSelects('yes') || answerSelects('true')); // Read the selected state from the `_checked_` class too, not just native `.checked` —
          // clicking a box Ashby already shows as ticked would toggle it back off.
          isSelected = isAshbyChoiceSelected(checkbox, ((_checkbox$labels = checkbox.labels) === null || _checkbox$labels === void 0 ? void 0 : _checkbox$labels[0]) || null);
          if (!(shouldCheck && !isSelected)) {
            _context11.n = 7;
            break;
          }
          _context11.n = 3;
          return useRemoteInput();
        case 3:
          if (!_context11.v) {
            _context11.n = 5;
            break;
          }
          _context11.n = 4;
          return remoteCheck(checkbox, true);
        case 4:
          _context11.n = 6;
          break;
        case 5:
          _context11.n = 6;
          return clickLikeHuman(checkbox, {
            shouldAbort: shouldAbort
          });
        case 6:
          _context11.n = 11;
          break;
        case 7:
          if (!(isMultiSelectGroup && isExplicitMultiSelection && !shouldCheck && isSelected)) {
            _context11.n = 11;
            break;
          }
          _context11.n = 8;
          return useRemoteInput();
        case 8:
          if (!_context11.v) {
            _context11.n = 10;
            break;
          }
          _context11.n = 9;
          return remoteCheck(checkbox, false);
        case 9:
          _context11.n = 11;
          break;
        case 10:
          _context11.n = 11;
          return clickLikeHuman(checkbox, {
            shouldAbort: shouldAbort
          });
        case 11:
          _context11.n = 2;
          break;
        case 12:
          _context11.n = 14;
          break;
        case 13:
          _context11.p = 13;
          _t9 = _context11.v;
          _iterator5.e(_t9);
        case 14:
          _context11.p = 14;
          _iterator5.f();
          return _context11.f(14);
        case 15:
          return _context11.a(2);
      }
    }, _callee11, null, [[1, 13, 14, 15]]);
  }));
  return function (_x73, _x74, _x75, _x76) {
    return _ref14.apply(this, arguments);
  };
}())], ['combobox', (/*#__PURE__*/function () {
  var _ref16 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee12(fieldId, question, answer, field) {
    var _ref17,
      _ref17$shouldAbort,
      shouldAbort,
      input,
      _args12 = arguments;
    return autofill_regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          _ref17 = _args12.length > 4 && _args12[4] !== undefined ? _args12[4] : {}, _ref17$shouldAbort = _ref17.shouldAbort, shouldAbort = _ref17$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref17$shouldAbort;
          input = getComboboxInput(field);
          _context12.n = 1;
          return fillAshbyComboboxInput(input, answer, shouldAbort, {
            required: isQuestionMarkedRequired(field, input),
            location: isAshbyLocationQuestion(fieldId, question)
          });
        case 1:
          return _context12.a(2);
      }
    }, _callee12);
  }));
  return function (_x77, _x78, _x79, _x80) {
    return _ref16.apply(this, arguments);
  };
}())], ['date', (/*#__PURE__*/function () {
  var _ref18 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee13(_fieldId, _question, answer, field) {
    var _ref19,
      _ref19$shouldAbort,
      shouldAbort,
      _args13 = arguments;
    return autofill_regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          _ref19 = _args13.length > 4 && _args13[4] !== undefined ? _args13[4] : {}, _ref19$shouldAbort = _ref19.shouldAbort, shouldAbort = _ref19$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref19$shouldAbort;
          _context13.n = 1;
          return fillAshbyDateInput(getDateInput(field) || getTextInput(field), answer, shouldAbort);
        case 1:
          return _context13.a(2);
      }
    }, _callee13);
  }));
  return function (_x81, _x82, _x83, _x84) {
    return _ref18.apply(this, arguments);
  };
}())], ['resume', (/*#__PURE__*/function () {
  var _ref20 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee14(fieldId, _question, answer, field) {
    var _ref21,
      _ref21$shouldAbort,
      shouldAbort,
      _args14 = arguments;
    return autofill_regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          _ref21 = _args14.length > 4 && _args14[4] !== undefined ? _args14[4] : {}, _ref21$shouldAbort = _ref21.shouldAbort, shouldAbort = _ref21$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref21$shouldAbort;
          if (!(!answer || autofill_typeof(answer) !== 'object' || answer.type !== 'file')) {
            _context14.n = 1;
            break;
          }
          return _context14.a(2);
        case 1:
          _context14.n = 2;
          return fillAshbyFileInputAndAwaitUpload(fieldId, field, answer, shouldAbort);
        case 2:
          return _context14.a(2);
      }
    }, _callee14);
  }));
  return function (_x85, _x86, _x87, _x88) {
    return _ref20.apply(this, arguments);
  };
}())], ['file', (/*#__PURE__*/function () {
  var _ref22 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee15(fieldId, _question, answer, field) {
    var _ref23,
      _ref23$shouldAbort,
      shouldAbort,
      _args15 = arguments;
    return autofill_regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          _ref23 = _args15.length > 4 && _args15[4] !== undefined ? _args15[4] : {}, _ref23$shouldAbort = _ref23.shouldAbort, shouldAbort = _ref23$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref23$shouldAbort;
          if (!(!answer || autofill_typeof(answer) !== 'object' || answer.type !== 'file')) {
            _context15.n = 1;
            break;
          }
          return _context15.a(2);
        case 1:
          _context15.n = 2;
          return fillAshbyFileInputAndAwaitUpload(fieldId, field, answer, shouldAbort);
        case 2:
          return _context15.a(2);
      }
    }, _callee15);
  }));
  return function (_x89, _x90, _x91, _x92) {
    return _ref22.apply(this, arguments);
  };
}())], ['cover_letter', (/*#__PURE__*/function () {
  var _ref24 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee16(fieldId, _question, answer, field) {
    var _ref25,
      _ref25$shouldAbort,
      shouldAbort,
      textarea,
      input,
      textField,
      _args16 = arguments;
    return autofill_regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          _ref25 = _args16.length > 4 && _args16[4] !== undefined ? _args16[4] : {}, _ref25$shouldAbort = _ref25.shouldAbort, shouldAbort = _ref25$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref25$shouldAbort;
          if (!(typeof answer === 'string')) {
            _context16.n = 3;
            break;
          }
          textarea = getTextarea(field);
          input = getTextInput(field);
          textField = textarea || input;
          if (!textField) {
            _context16.n = 2;
            break;
          }
          _context16.n = 1;
          return fillAshbyText(textField, answer, shouldAbort);
        case 1:
          return _context16.a(2);
        case 2:
          answer = createPlainTextFileAnswer(answer, {
            fileName: 'cover-letter.txt'
          });
        case 3:
          if (!(!answer || autofill_typeof(answer) !== 'object' || answer.type !== 'file')) {
            _context16.n = 4;
            break;
          }
          return _context16.a(2);
        case 4:
          _context16.n = 5;
          return fillAshbyFileInputAndAwaitUpload(fieldId, field, answer, shouldAbort);
        case 5:
          return _context16.a(2);
      }
    }, _callee16);
  }));
  return function (_x93, _x94, _x95, _x96) {
    return _ref24.apply(this, arguments);
  };
}())],
// --- Education section base kinds ---
// Reached only through their 'section-ashby-education-*' wrappers, which re-resolve the LIVE
// row control (Ashby rebuilds the block on add-row / school-select), so `field` is always the
// live control — never the detection-time element.
['ashby-education-text', (/*#__PURE__*/function () {
  var _ref26 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee17(_fieldId, _question, answer, field) {
    var _ref27,
      _ref27$shouldAbort,
      shouldAbort,
      _args17 = arguments;
    return autofill_regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          _ref27 = _args17.length > 4 && _args17[4] !== undefined ? _args17[4] : {}, _ref27$shouldAbort = _ref27.shouldAbort, shouldAbort = _ref27$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref27$shouldAbort;
          if (!(!field || answer == null)) {
            _context17.n = 1;
            break;
          }
          return _context17.a(2);
        case 1:
          _context17.n = 2;
          return fillAshbyText(field, String(answer), shouldAbort);
        case 2:
          return _context17.a(2);
      }
    }, _callee17);
  }));
  return function (_x97, _x98, _x99, _x100) {
    return _ref26.apply(this, arguments);
  };
}())], ['ashby-education-date', (/*#__PURE__*/function () {
  var _ref28 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee18(_fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          _context18.n = 1;
          return fillAshbyEducationDate(field, answer);
        case 1:
          return _context18.a(2);
      }
    }, _callee18);
  }));
  return function (_x101, _x102, _x103, _x104) {
    return _ref28.apply(this, arguments);
  };
}())],
// Toggle-safe: re-clicking a selected Ashby checkbox unticks it, so only click when neither
// native `.checked` nor the `_checked_` class says it is already on. A false value never gets
// here (checkbox resolution turns it into null -> skip) and rows start freshly unchecked.
['ashby-education-current', (/*#__PURE__*/function () {
  var _ref29 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee19(_fieldId, _question, answer, field) {
    var _field$labels;
    var _ref30,
      _ref30$shouldAbort,
      shouldAbort,
      _args19 = arguments;
    return autofill_regenerator().w(function (_context19) {
      while (1) switch (_context19.n) {
        case 0:
          _ref30 = _args19.length > 4 && _args19[4] !== undefined ? _args19[4] : {}, _ref30$shouldAbort = _ref30.shouldAbort, shouldAbort = _ref30$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref30$shouldAbort;
          if (!(!field || !answer)) {
            _context19.n = 1;
            break;
          }
          return _context19.a(2);
        case 1:
          if (!isAshbyChoiceSelected(field, ((_field$labels = field.labels) === null || _field$labels === void 0 ? void 0 : _field$labels[0]) || null)) {
            _context19.n = 2;
            break;
          }
          return _context19.a(2);
        case 2:
          _context19.n = 3;
          return useRemoteInput();
        case 3:
          if (!_context19.v) {
            _context19.n = 5;
            break;
          }
          _context19.n = 4;
          return remoteCheck(field, true);
        case 4:
          _context19.n = 6;
          break;
        case 5:
          _context19.n = 6;
          return clickLikeHuman(field, {
            shouldAbort: shouldAbort
          });
        case 6:
          return _context19.a(2);
      }
    }, _callee19);
  }));
  return function (_x105, _x106, _x107, _x108) {
    return _ref29.apply(this, arguments);
  };
}())], ['ashby-education-school', (/*#__PURE__*/function () {
  var _ref31 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee20(_fieldId, _question, answer, field) {
    var _ref32,
      _ref32$shouldAbort,
      shouldAbort,
      _args20 = arguments;
    return autofill_regenerator().w(function (_context20) {
      while (1) switch (_context20.n) {
        case 0:
          _ref32 = _args20.length > 4 && _args20[4] !== undefined ? _args20[4] : {}, _ref32$shouldAbort = _ref32.shouldAbort, shouldAbort = _ref32$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref32$shouldAbort;
          _context20.n = 1;
          return fillAshbyComboboxInput(field, answer, shouldAbort);
        case 1:
          return _context20.a(2);
      }
    }, _callee20);
  }));
  return function (_x109, _x110, _x111, _x112) {
    return _ref31.apply(this, arguments);
  };
}())]]);

// Root handlers (count answer + clear/add-rows fill), the shared 'profileSectionField' leaf
// answerType, and the 'section-<baseKind>' live-re-resolving wrapper kinds are all registered
// by the shared hierarchy module.
registerProfileSectionHierarchy({
  sections: [ASHBY_EDUCATION_SECTION],
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS,
  wrappedFieldKinds: ['ashby-education-text', 'ashby-education-date', 'ashby-education-current', 'ashby-education-school']
});
registerAutofillHandlers({
  detectFields: detectAutofillFields,
  detectSubmitButton: detectAshbySubmitButton,
  getSubmitButton: getAshbySubmitButton,
  clickSubmitButton: clickAshbySubmitButton,
  isAutofillAvailable: isAshbyAutofillAvailable,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS,
  advanceFlow: advanceAshbyAutofillFlow,
  // Ashby runs bot detection — pace fills ~1s apart instead of back-to-back,
  // and click the final submit with a human pointer sequence after a review pause.
  interFieldDelayMs: ASHBY_INTER_FIELD_DELAY_MS,
  humanizeClicks: true
});
/******/ })()
;