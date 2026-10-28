/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// UNUSED EXPORTS: deriveInstitutionType, getModalKind, normalizeCountryName, normalizePhoneDigits, parseDateAnswer, referenceMonthsKnownRemainder, sectionEntryCountry, sectionEntryState, toPlainPunctuation

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
          return dom_interactions_sleep(randomKeyDelayMs(keyHoldBaseMs, 0.6));
        case 7:
          dispatchCharKeyEvents(element, _char3, ['keyup']);
          gapMs = randomKeyDelayMs(gapBaseMs, jitterRatio);
          if (_char3 === ' ') gapMs += randomKeyDelayMs(wordPauseBaseMs, 0.5);
          // Occasional heavier "thinking" pause, so the interval histogram is
          // right-skewed (like real typing) rather than a flat jitter band.
          else if (Math.random() < 0.06) gapMs += randomKeyDelayMs(baseDelayMs * 2.5, 0.6);
          _context5.n = 8;
          return dom_interactions_sleep(gapMs);
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
;// ../../packages/job-parsers/content/platforms/autofill-section-hierarchy.js
/* unused harmony import specifier */ var autofill_section_hierarchy_getTextarea;
/* unused harmony import specifier */ var autofill_section_hierarchy_getTextInput;
/* unused harmony import specifier */ var autofill_section_hierarchy_getNativeSelect;
/* unused harmony import specifier */ var autofill_section_hierarchy_getTextLengthLimit;
/* unused harmony import specifier */ var autofill_section_hierarchy_sleep;
/* unused harmony import specifier */ var autofill_section_hierarchy_cleanGpa;
/* unused harmony import specifier */ var autofill_section_hierarchy_gpaLeadingNumber;
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
  var from = parseProfileDate(String((_entry$knownFrom = entry === null || entry === void 0 ? void 0 : entry.knownFrom) !== null && _entry$knownFrom !== void 0 ? _entry$knownFrom : ''));
  if (!from.year) return null;
  var now = new Date();
  var hasTo = Boolean(String((_entry$knownTo = entry === null || entry === void 0 ? void 0 : entry.knownTo) !== null && _entry$knownTo !== void 0 ? _entry$knownTo : '').trim());
  var to = hasTo ? parseProfileDate(String(entry.knownTo)) : {
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
;// ../../packages/job-parsers/content/platforms/auth-driver-shared.js
function auth_driver_shared_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return auth_driver_shared_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (auth_driver_shared_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, auth_driver_shared_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, auth_driver_shared_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), auth_driver_shared_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", auth_driver_shared_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), auth_driver_shared_regeneratorDefine2(u), auth_driver_shared_regeneratorDefine2(u, o, "Generator"), auth_driver_shared_regeneratorDefine2(u, n, function () { return this; }), auth_driver_shared_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (auth_driver_shared_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function auth_driver_shared_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } auth_driver_shared_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { auth_driver_shared_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, auth_driver_shared_regeneratorDefine2(e, r, n, t); }
function auth_driver_shared_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function auth_driver_shared_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { auth_driver_shared_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { auth_driver_shared_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Shared conditional signup-first auth ADVANCER, generalized from the UltiPro auth wall. Unlike the
// original beforeStartAutofill takeover, this is driven from a platform's `advanceFlow` hook — it runs
// AFTER the engine has filled the current auth form (email/password are auto-detected + filled by the
// shared password path), so it is naturally error-driven: submit the form that's showing, and only
// change course when the server rejects it. That mirrors the product spec:
//
//   - Land on a sign-up form (or sign-in form) → the engine fills it → advance() clicks its submit.
//   - Sign-up rejected "account already exists" → steer to sign-in ONCE (the vault password either
//     signs in, or its own failure escalates).
//   - Sign-in rejected (wrong/unknown credentials) → steer to sign-up ONCE where the page offers it
//     (a fresh account gets created); otherwise escalate to a human.
//   - Fallback exhausted → reportAutofillAuthFailure → autoapply pauses the schedule for human
//     takeover; manual builds show an on-page notice. Never re-submits the same rejected form.
//
// The one-shot cross-form fallback is tracked in sessionStorage (survives a same-origin sign-in ↔
// sign-up nav, e.g. Auth0 /u/login ↔ /u/signup). Cross-origin steers (a tenant register host → a
// separate SSO host) reset it, which is safe: the destination page config only offers the OPPOSITE
// direction (or none), so no ping-pong is possible. Since the whole flow keys off server errors + the
// vault password (resolved by the shared password fill), it needs NO pre-fill `created` resolve — the
// reason beforeStartAutofill existed — so it composes cleanly with advanceFlow.
//
// Per-page adapter (platform supplies one per auth page kind):
//   role               'signin' | 'signup' | 'neutral' — what this page's form does.
//   prepare()          optional async: clear consent gates / modals BEFORE the form can fill. Returns
//                      true if it acted (form not ready yet) so advance() short-circuits to let the
//                      engine re-detect + fill; false/undefined when nothing to clear.
//   getBlockingError() optional: a currently-VISIBLE server-round-trip error, or null. Return
//                      { code: 'account_exists' | 'signin_failed', message }. Never client validation.
//   advance()          async: click this form's submit/continue (Register / Sign In / Create account).
//                      Returns true if it clicked.
//   goToSignIn()       optional async: steer to the sign-in form (click a toggle/link). Truthy = acted.
//   goToSignUp()       optional async: steer to the sign-up form. Truthy = acted.

var AUTH_PAGE_ROLE_SIGN_IN = 'signin';
var AUTH_PAGE_ROLE_SIGN_UP = 'signup';
var AUTH_PAGE_ROLE_NEUTRAL = 'neutral';
var fallbackKey = function fallbackKey(platform) {
  return "bidhub_".concat(platform, "_auth_fallback_used");
};
var authFallbackUsed = function authFallbackUsed(platform) {
  try {
    return sessionStorage.getItem(fallbackKey(platform)) === '1';
  } catch (_unused) {
    return false;
  }
};
var markAuthFallbackUsed = function markAuthFallbackUsed(platform) {
  try {
    sessionStorage.setItem(fallbackKey(platform), '1');
  } catch (_unused2) {/* storage blocked — best-effort */}
};
function createConditionalAuthAdvancer(_ref) {
  var platform = _ref.platform,
    getPageKind = _ref.getPageKind,
    pages = _ref.pages;
  // Escalate at most once per loaded page (module state resets on navigation).
  var escalatedHref = null;
  var escalate = function escalate(error) {
    if (escalatedHref === window.location.href) return;
    escalatedHref = window.location.href;
    console.warn("[bidhub][".concat(platform, "] auth sign-in failed \u2014 escalating for manual handling:"), (error === null || error === void 0 ? void 0 : error.message) || (error === null || error === void 0 ? void 0 : error.code));
    void reportAutofillAuthFailure({
      platform: platform,
      reason: 'signin_failed',
      detail: (error === null || error === void 0 ? void 0 : error.message) || (error === null || error === void 0 ? void 0 : error.code) || null
    })["catch"](function (reportError) {
      console.warn("[bidhub][".concat(platform, "] reportAutofillAuthFailure failed:"), (reportError === null || reportError === void 0 ? void 0 : reportError.message) || reportError);
    });
  };

  // Suitable as (part of) a platform's advanceFlow. Returns true when it clicked/steered (the engine
  // treats that as "advanced" and re-detects), false when it did nothing or escalated.
  return /*#__PURE__*/function () {
    var _advanceConditionalAuth = auth_driver_shared_asyncToGenerator(/*#__PURE__*/auth_driver_shared_regenerator().m(function _callee() {
      var kind, page, prepared, error, _t, _t2, _t3;
      return auth_driver_shared_regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            kind = typeof getPageKind === 'function' ? getPageKind() : null;
            page = kind ? pages === null || pages === void 0 ? void 0 : pages[kind] : null;
            if (page) {
              _context.n = 1;
              break;
            }
            return _context.a(2, false);
          case 1:
            if (!(typeof page.prepare === 'function')) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return page.prepare();
          case 2:
            prepared = _context.v;
            if (!prepared) {
              _context.n = 3;
              break;
            }
            return _context.a(2, true);
          case 3:
            error = typeof page.getBlockingError === 'function' ? page.getBlockingError() : null;
            if (!((error === null || error === void 0 ? void 0 : error.code) === 'account_exists')) {
              _context.n = 6;
              break;
            }
            if (!(typeof page.goToSignIn === 'function' && !authFallbackUsed(platform))) {
              _context.n = 5;
              break;
            }
            markAuthFallbackUsed(platform);
            console.log("[bidhub][".concat(platform, "] sign-up says account exists \u2014 switching to sign-in"));
            _t = Boolean;
            _context.n = 4;
            return page.goToSignIn();
          case 4:
            return _context.a(2, _t(_context.v));
          case 5:
            escalate(error);
            return _context.a(2, false);
          case 6:
            if (!((error === null || error === void 0 ? void 0 : error.code) === 'signin_failed')) {
              _context.n = 9;
              break;
            }
            if (!(typeof page.goToSignUp === 'function' && !authFallbackUsed(platform))) {
              _context.n = 8;
              break;
            }
            markAuthFallbackUsed(platform);
            console.log("[bidhub][".concat(platform, "] sign-in failed \u2014 trying sign-up"));
            _t2 = Boolean;
            _context.n = 7;
            return page.goToSignUp();
          case 7:
            return _context.a(2, _t2(_context.v));
          case 8:
            escalate(error);
            return _context.a(2, false);
          case 9:
            if (!(typeof page.advance === 'function')) {
              _context.n = 11;
              break;
            }
            _t3 = Boolean;
            _context.n = 10;
            return page.advance();
          case 10:
            return _context.a(2, _t3(_context.v));
          case 11:
            return _context.a(2, false);
        }
      }, _callee);
    }));
    function advanceConditionalAuth() {
      return _advanceConditionalAuth.apply(this, arguments);
    }
    return advanceConditionalAuth;
  }();
}
;// ../../packages/job-parsers/content/platforms/paycom/autofill.js
function autofill_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return autofill_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (autofill_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, autofill_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, autofill_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), autofill_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", autofill_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), autofill_regeneratorDefine2(u), autofill_regeneratorDefine2(u, o, "Generator"), autofill_regeneratorDefine2(u, n, function () { return this; }), autofill_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (autofill_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function autofill_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } autofill_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { autofill_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, autofill_regeneratorDefine2(e, r, n, t); }
function autofill_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = autofill_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function autofill_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function autofill_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? autofill_ownKeys(Object(t), !0).forEach(function (r) { autofill_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : autofill_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function autofill_defineProperty(e, r, t) { return (r = autofill_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function autofill_toPropertyKey(t) { var i = autofill_toPrimitive(t, "string"); return "symbol" == autofill_typeof(i) ? i : i + ""; }
function autofill_toPrimitive(t, r) { if ("object" != autofill_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != autofill_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function autofill_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function autofill_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function autofill_toConsumableArray(r) { return autofill_arrayWithoutHoles(r) || autofill_iterableToArray(r) || autofill_unsupportedIterableToArray(r) || autofill_nonIterableSpread(); }
function autofill_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function autofill_arrayWithoutHoles(r) { if (Array.isArray(r)) return autofill_arrayLikeToArray(r); }
function autofill_slicedToArray(r, e) { return autofill_arrayWithHoles(r) || autofill_iterableToArrayLimit(r, e) || autofill_unsupportedIterableToArray(r, e) || autofill_nonIterableRest(); }
function autofill_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return autofill_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? autofill_arrayLikeToArray(r, a) : void 0; } }
function autofill_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function autofill_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function autofill_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function autofill_typeof(o) { "@babel/helpers - typeof"; return autofill_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, autofill_typeof(o); }








// --- Paycom career portal (www.paycomonline.net/v4/ats/web.php/portal/<clientkey>/…) -------------
//
// Flow (verified live on the SHOALS TECHNOLOGIES tenant, 2026-10-07):
//   1. Posting page (/portal/<key>/jobs/<id>): "Apply" opens the "Getting You Started" MODAL — a
//      per-tenant candidate ACCOUNT form (legal first/last name, email + confirm, phone, SMS consent)
//      gated by an invisible hCaptcha on "Continue To Application". Links in the modal switch to the
//      Sign In modal (email + password) and back. No email code is asked of a fresh account (a temp
//      password is issued and a "Password setup" mail sent); POST api/ats/account + api/ats/application
//      then navigate to /portal/<key>/applications#/applications/<applicationId>. When the invisible
//      hCaptcha fails, api/ats/account answers 418 and a "Verify Your Email" modal opens over the form
//      instead: Send Code mails a 6-digit code (systemmessage@paycomonline.com, filed by the notification
//      service under 'paycomonline.net'), then a Verification Code input + Submit Code (live 2026-10-27).
//   2. Application page: ONE long page (side nav = sections) — Personal Information (Resume/CV +
//      Cover Letter dropzones, legal name, phone + type, SMS consent, address with a Country modal
//      picker, referral source/name), Education (Institution #N), Employment (Employer #N),
//      Professional References (#N), Voluntary Information (EEO selects + the disability form), the
//      Authorization acknowledgement, then "Save and Complete Later" / "Submit". A "Start Application"
//      modal (Autofill with Resume/CV | Apply Manually) opens on first load; we apply manually so the
//      profile stays the source of truth. Edits auto-save (PATCH per section on blur).
//
// DOM contract (Paycom's "uiLib" design system): every control carries a deterministic id/name —
// `personal-information-<field>-field`, `<section>-<field>-field-<row>` (1-based row suffix), radio
// names = the field id, checkbox `input.uiLibCheckboxInput` mirrored by `button#CheckboxOuterID-<id>`
// (`input.click()` toggles), native `select.uiLibNativeSelect`, dates = a `[role=textbox][aria-label]`
// root with MM / DD / YYYY inputs (`<id>-month|-day|-year`), the country picker = `.uiLibCountryList`
// button → modal with `input#search` + `li[data-testid="country-list-item-<Name>"]`, the institution
// name = autocomplete whose suggestions ("Name | City, ST") render in a `[data-popper-placement]` popper.
// Labels are `label[for]` (text + " *" when required) or `aria-label`.

var autofill_NEVER_ABORT = function NEVER_ABORT() {
  return false;
};
var PLATFORM = 'paycom';
var RESUME_FIELD_ID = 'resume';
var COVER_LETTER_FIELD_ID = 'cover_letter';
var VERIFICATION_CODE_FIELD_ID = 'verification_code';
var MIDDLE_NAME_FIELD_ID = 'personal-information-legal-middle-name-field';
var NO_MIDDLE_NAME_CHECKBOX_NAME = 'i-do-not-have-a-middle-name';
var ACKNOWLEDGEMENT_CHECKBOX_NAME = 'authorization-acknowledge-disclosure-field';
var UPDATE_ACCOUNT_CHECKBOX_NAME = 'update-my-account-checkbox';
var WOTC_OPT_IN_CHECKBOX_NAME = 'tax-credit-opt-in-questionnaire';
var WOTC_OPT_OUT_FIELD_ID = 'tax-credit-questionnaire-opt-out';
var SIGNUP_EMAIL_ID = 'email';
var SIGNUP_CONFIRM_EMAIL_ID = 'confirmEmail';
var SIGNATURE_FIELD_ID = 'authorization-signature-image-field';
var LEGAL_FIRST_NAME_FIELD_ID = 'personal-information-legal-first-name-field';
var LEGAL_LAST_NAME_FIELD_ID = 'personal-information-legal-last-name-field';
// Tenant-defined questions (the Questions section and the "Let's Get Started!" screening step).
var TENANT_QUESTION_ID_PATTERN = /^questions-\d+-field$/;
var OPEN_MODAL_SELECTOR = '.uiLibModal.ui-modal-open';
var VERIFY_EMAIL_TITLE_PATTERN = /verify your email/i;
var VERIFY_SEND_CODE_PATTERN = /^send code$/i;
var VERIFY_SUBMIT_CODE_PATTERN = /^submit code$/i;
var APPLY_BUTTON_SELECTOR = '[data-testid="Apply-loadingbutton"]';
var SIGNUP_CONTINUE_SELECTOR = '[data-testid="createAccountNextButton-loadingbutton"]';
var SIGNIN_SUBMIT_SELECTOR = '[data-testid="signInSubmitButton-loadingbutton"]';
// The uiLib ClickableText appends its own suffix: live ids read `signInClickableTextClickableText` (2026-10-24).
var SIGNIN_LINK_SELECTOR = '[data-testid^="signInClickableText"]';
var CREATE_ACCOUNT_LINK_SELECTOR = '[data-testid^="createAccountClickableText"]';
var COUNTRY_LIST_ITEM_SELECTOR = 'li[data-testid^="country-list-item-"]';
var COUNTRY_SEARCH_SELECTOR = 'input#search, input[data-testid="searchsearchinput"], input[type="search"]';
var INSTITUTION_SUGGESTION_SELECTOR = '[data-popper-placement] [tabindex="0"]';
var BOTTOM_BUTTONS_SELECTOR = '[data-testid="BottomButtonLayout"]';
var EXCLUDED_SCOPE_SELECTOR = '.uiLibModal, nav, [data-testid="sideNavContainer"], footer, [id*="tax-credit"]';
// Section rows: `<section>-<field>-field-<n>` controls (+ the opt-out checkbox and the date parts).
var SECTION_CONTROL_PATTERN = /^(education|employment|reference)-.*-(field|checkbox)-\d+(?:-(?:month|day|year))?$/i;
var MODAL_WAIT_MS = 3000;
var MODAL_CLOSE_WAIT_MS = 2500;
var COUNTRY_ITEM_WAIT_MS = 3000;
var SUGGESTION_WAIT_MS = 3000;
var UPLOAD_SETTLE_MS = 20000;
var APPLY_REVEAL_WAIT_MS = 4000;
var POLICY_AGREE_WAIT_MS = 4000;
var SIGNATURE_INPUT_WAIT_MS = 3000;
var POLL_MS = 150;

// --- text helpers ---------------------------------------------------------------------------------

// jsdom (unit tests) has no CSS.escape; ids/names here are plain tokens, so a quote/backslash escape suffices.
var cssEscape = function cssEscape(value) {
  return typeof CSS !== 'undefined' && typeof CSS.escape === 'function' ? CSS.escape(String(value)) : String(value).replace(/["\\]/g, '\\$&');
};
var cleanText = function cleanText(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/\u200b/g, '').replace(/\s+/g, ' ').trim();
};

// Text of an element WITHOUT its <style>/<script> children — Paycom's SMS-consent paragraph carries an
// inline <style> for its links, which textContent would hand back as the question.
function textOf(element) {
  var _element$querySelecto, _element$textContent, _clone$textContent;
  if (!element) return '';
  if (!((_element$querySelecto = element.querySelector) !== null && _element$querySelecto !== void 0 && _element$querySelecto.call(element, 'style, script'))) return (_element$textContent = element.textContent) !== null && _element$textContent !== void 0 ? _element$textContent : '';
  var clone = element.cloneNode(true);
  clone.querySelectorAll('style, script').forEach(function (node) {
    return node.remove();
  });
  return (_clone$textContent = clone.textContent) !== null && _clone$textContent !== void 0 ? _clone$textContent : '';
}

// Question text: Paycom appends " *" to required labels and " N of M." to radio aria-labels.
var cleanQuestion = function cleanQuestion(value) {
  return cleanText(value).replace(/\s*\*\s*$/, '').replace(/\s*\d+\s+of\s+\d+\.?\s*$/i, '').trim();
};
var normalizeComparisonText = function normalizeComparisonText(value) {
  return cleanText(value).normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
};
var isSkipAnswer = function isSkipAnswer(answer) {
  return answer === -1 || answer == null || autofill_typeof(answer) === 'object' && answer.type === 'skip';
};

// Paycom's tenant text questions refuse typographic punctuation ("Field contains invalid characters (‑)"
// under a generated answer, 2026-10-19) — type the plain-ASCII spelling.
var toPlainPunctuation = function toPlainPunctuation(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/[\u2010-\u2015\u2212]/g, '-').replace(/[\u2018\u2019\u201a\u201b\u2032]/g, "'").replace(/[\u201c\u201d\u201e\u201f\u2033]/g, '"').replace(/\u2026/g, '...').replace(/[\u00a0\u2007\u202f]/g, ' ');
};
var isAffirmative = function isAffirmative(answer) {
  if (typeof answer === 'boolean') return answer;
  var value = cleanText(answer).toLowerCase();
  if (!value) return false;
  return !['no', 'false', '0', 'n', 'unchecked', 'decline', 'none', 'off'].includes(value);
};
function normalizePhoneDigits(answer) {
  var digits = String(answer !== null && answer !== void 0 ? answer : '').replace(/\D/g, '');
  // The field carries its own country-code button (+1 default) — hand over the national number.
  if (digits.length === 11 && digits.startsWith('1')) return digits.slice(1);
  return digits;
}

// Profile dates are 'MM/YYYY' (or ISO / a full MM/DD/YYYY from the answer system); the form's
// MM / DD / YYYY inputs need every part — day defaults to the 1st.
function parseDateAnswer(answer) {
  var value = cleanText(answer);
  if (!value) return null;
  var parsed = parseProfileDate(value);
  if (!parsed.year) return null;
  return {
    month: parsed.month || '01',
    day: parsed.day || '01',
    year: parsed.year
  };
}

// Paycom's country list spells the US "United States of America (USA)"; map the usual profile
// spellings onto what the search box will match.
var COUNTRY_ALIASES = [[/^(usa?|u\.s\.a?\.?|united states( of america)?( \(usa\))?)$/i, 'United States of America'], [/^(uk|u\.k\.|great britain|britain|england)$/i, 'United Kingdom'], [/^(uae|u\.a\.e\.)$/i, 'United Arab Emirates']];
function normalizeCountryName(answer) {
  var value = cleanText(answer);
  if (!value) return '';
  var alias = COUNTRY_ALIASES.find(function (_ref) {
    var _ref2 = autofill_slicedToArray(_ref, 1),
      pattern = _ref2[0];
    return pattern.test(value);
  });
  return alias ? alias[1] : value;
}
function deriveInstitutionType(degree) {
  var value = cleanText(degree).toLowerCase();
  if (!value) return null;
  if (/high school|secondary|\bged\b|diploma/.test(value)) return 'High School';
  if (/master|mba|m\.s|m\.a\b|ph\.?d|doctor|juris|j\.d|m\.d\b|graduate/.test(value)) return 'Graduate School';
  return 'University';
}
function isElementVisible(element) {
  if (!(element !== null && element !== void 0 && element.isConnected)) return false;
  if (element.hidden) return false;
  var style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden') return false;
  return true;
}

// uiLib checkboxes keep the native input display:none and render a `button#CheckboxOuterID-<id>`
// (inside the `label[for]`) as the visible control — judge visibility by that.
function isCheckboxVisible(input) {
  if (!(input !== null && input !== void 0 && input.isConnected)) return false;
  var button = input.id ? document.getElementById("CheckboxOuterID-".concat(input.id)) : null;
  var label = input.id && document.querySelector("label[for=\"".concat(cssEscape(input.id), "\"]")) || input.closest('label');
  return isElementVisible(button || label || input);
}

// --- page / modal state -----------------------------------------------------------------------------

var isJobPage = function isJobPage() {
  return /\/portal\/[^/]+\/jobs\/\d+/i.test(window.location.pathname);
};
var isApplicationPage = function isApplicationPage() {
  return /\/portal\/[^/]+\/applications(?:\/|$)/i.test(window.location.pathname);
};
function getOpenModal() {
  var modals = Array.from(document.querySelectorAll(OPEN_MODAL_SELECTOR)).filter(isElementVisible);
  return modals[modals.length - 1] || null; // topmost
}
function getModalTitle(modal) {
  var _modal$querySelector;
  return cleanText(modal === null || modal === void 0 || (_modal$querySelector = modal.querySelector('h2, h1')) === null || _modal$querySelector === void 0 ? void 0 : _modal$querySelector.textContent);
}

// 'quick-apply' (the one-step Quick Apply form) | 'signup' (Getting You Started) | 'signin' |
// 'start' (Start Application) | 'verify-email' (the 6-digit email code) | 'country' (picker) |
// 'resume-parse' (use the uploaded résumé to fill the form?) | 'other' | null (no modal).
function getModalKind(modal) {
  if (!modal) return null;
  var title = getModalTitle(modal);
  // Some tenants post a "Quick Apply" button instead of "Apply" (seen 2026-10-22, INDEX ANALYTICS): it
  // opens a one-step application MODAL — contact details, SMS consent, Resume/CV and its own Submit,
  // with Sign In / Create Account links under it — and no application page follows.
  if (/^quick apply$/i.test(title)) return 'quick-apply';
  if (modal.querySelector(SIGNUP_CONTINUE_SELECTOR) || /getting you started/i.test(title)) return 'signup';
  if (modal.querySelector(SIGNIN_SUBMIT_SELECTOR) || /sign in/i.test(title) && modal.querySelector('input[type="password"]')) return 'signin';
  if (/start application/i.test(title)) return 'start';
  if (VERIFY_EMAIL_TITLE_PATTERN.test(title) || findModalButton(modal, VERIFY_SEND_CODE_PATTERN) || findModalButton(modal, VERIFY_SUBMIT_CODE_PATTERN)) return 'verify-email';
  if (modal.querySelector(COUNTRY_LIST_ITEM_SELECTOR) || modal.querySelector(COUNTRY_SEARCH_SELECTOR)) return 'country';
  if (/resume\/?cv uploaded|use this resume|replace all existing entries/i.test(cleanText(modal.textContent))) return 'resume-parse';
  return 'other';
}
function findModalButton(modal, pattern) {
  var _modal$querySelectorA;
  return Array.from((_modal$querySelectorA = modal === null || modal === void 0 ? void 0 : modal.querySelectorAll('button, [role="button"]')) !== null && _modal$querySelectorA !== void 0 ? _modal$querySelectorA : []).filter(isElementVisible).find(function (button) {
    return pattern.test(cleanText(button.textContent));
  }) || null;
}
function waitForModalClosed() {
  var timeoutMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MODAL_CLOSE_WAIT_MS;
  var shouldAbort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : autofill_NEVER_ABORT;
  return waitForPositiveResultWithAbort(function () {
    return getOpenModal() ? null : true;
  }, timeoutMs, shouldAbort, POLL_MS);
}

// Some tenants gate the signup modal's "I confirm that I have read and understood the Privacy Policy"
// checkbox behind a policy dialog: ticking it opens "Privacy Policy" (Cancel / Agree) over the modal,
// and Agree stays disabled until the policy body is scrolled to the bottom; Agree ticks the checkbox
// (seen live on two tenants, 2026-10-19). Matched by title + an Agree button, as its own uiLib modal or
// a dialog nested in the signup modal.
var POLICY_TITLE_PATTERN = /privacy (policy|notice)|terms (of use|and conditions)/i;
var POLICY_AGREE_PATTERN = /^(i )?(agree|accept)$/i;
var isButtonDisabled = function isButtonDisabled(button) {
  return Boolean((button === null || button === void 0 ? void 0 : button.disabled) || (button === null || button === void 0 ? void 0 : button.getAttribute('aria-disabled')) === 'true');
};
function getPolicyDialog() {
  var dialogs = Array.from(document.querySelectorAll("".concat(OPEN_MODAL_SELECTOR, ", [role=\"dialog\"]"))).filter(isElementVisible);
  for (var index = dialogs.length - 1; index >= 0; index -= 1) {
    var dialog = dialogs[index];
    var title = getModalTitle(dialog) || cleanText(dialog.getAttribute('aria-label'));
    if (!POLICY_TITLE_PATTERN.test(title) || dialog.querySelector(SIGNUP_CONTINUE_SELECTOR)) continue;
    if (findModalButton(dialog, POLICY_AGREE_PATTERN)) return dialog;
  }
  return null;
}
function scrollPolicyToBottom(dialog) {
  [dialog].concat(autofill_toConsumableArray(dialog.querySelectorAll('*'))).filter(function (element) {
    return element.scrollHeight > element.clientHeight + 1;
  }).forEach(function (element) {
    element.scrollTop = element.scrollHeight;
    element.dispatchEvent(new Event('scroll', {
      bubbles: true
    }));
  });
}

// Scroll the policy to the bottom until Agree enables, then press it. False when Agree never enables
// (the run then stalls on the dialog exactly as before).
function acceptPolicyDialog() {
  return _acceptPolicyDialog.apply(this, arguments);
}
function _acceptPolicyDialog() {
  _acceptPolicyDialog = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee37() {
    var shouldAbort,
      dialog,
      agree,
      _args37 = arguments;
    return autofill_regenerator().w(function (_context37) {
      while (1) switch (_context37.n) {
        case 0:
          shouldAbort = _args37.length > 0 && _args37[0] !== undefined ? _args37[0] : autofill_NEVER_ABORT;
          dialog = getPolicyDialog();
          if (dialog) {
            _context37.n = 1;
            break;
          }
          return _context37.a(2, false);
        case 1:
          _context37.n = 2;
          return waitForPositiveResultWithAbort(function () {
            scrollPolicyToBottom(dialog);
            var button = findModalButton(dialog, POLICY_AGREE_PATTERN);
            return button && !isButtonDisabled(button) ? button : null;
          }, POLICY_AGREE_WAIT_MS, shouldAbort, POLL_MS);
        case 2:
          agree = _context37.v;
          if (agree) {
            _context37.n = 3;
            break;
          }
          return _context37.a(2, false);
        case 3:
          agree.click();
          _context37.n = 4;
          return waitForPositiveResultWithAbort(function () {
            return getPolicyDialog() ? null : true;
          }, MODAL_CLOSE_WAIT_MS, shouldAbort, POLL_MS);
        case 4:
          return _context37.a(2, true);
      }
    }, _callee37);
  }));
  return _acceptPolicyDialog.apply(this, arguments);
}
function isSectionRowControl(element) {
  var _element$getAttribute;
  var id = (element === null || element === void 0 ? void 0 : element.id) || '';
  var name = (element === null || element === void 0 || (_element$getAttribute = element.getAttribute) === null || _element$getAttribute === void 0 ? void 0 : _element$getAttribute.call(element, 'name')) || '';
  return SECTION_CONTROL_PATTERN.test(id) || SECTION_CONTROL_PATTERN.test(name) || /^education-country-field-\d+$/i.test(id);
}
function isExcludedFromScan(element, scope) {
  var node = element;
  while (node && node !== scope && node !== document.body) {
    var _node$matches, _node;
    if ((_node$matches = (_node = node).matches) !== null && _node$matches !== void 0 && _node$matches.call(_node, EXCLUDED_SCOPE_SELECTOR)) return true;
    node = node.parentElement;
  }
  return false;
}

// --- labels / constraints ---------------------------------------------------------------------------

function getLinkedLabel(control) {
  if (!(control !== null && control !== void 0 && control.id)) return null;
  return document.querySelector("label[for=\"".concat(cssEscape(control.id), "\"]"));
}

// Tenant questions (`questions-<n>-field`) carry only a generic aria-label ("Text Question", "Numeric
// Question", "Date Question", "Multiple Choice Question") or an empty one, and no label[for]: the
// question is the numbered paragraph ("3 * . Will you consent to a post-offer background screening?")
// Paycom renders in the row's other column. Without it every screening question reached the answer
// engine as "Text Question" / "questions 14482" (live 2026-10-21: "No" to "Are you authorized to work in
// the United States?", small talk typed into "Salary Desired"). The row is the smallest ancestor that
// holds exactly ONE numbered paragraph.
var NUMBERED_PROMPT_PATTERN = /^\d+\s*(?:\*\s*)?\.\s*/;
var isTenantQuestionId = function isTenantQuestionId(id) {
  return TENANT_QUESTION_ID_PATTERN.test(String(id || ''));
};
function getTenantQuestion(control) {
  var node = control === null || control === void 0 ? void 0 : control.parentElement;
  for (var depth = 0; node && node !== document.body && depth < 12; depth += 1, node = node.parentElement) {
    var prompts = Array.from(node.querySelectorAll('p')).map(function (paragraph) {
      return cleanText(textOf(paragraph));
    }).filter(function (text) {
      return NUMBERED_PROMPT_PATTERN.test(text);
    });
    if (prompts.length > 1) return null;
    if (prompts.length === 1) {
      var question = cleanQuestion(prompts[0].replace(NUMBERED_PROMPT_PATTERN, ''));
      return question ? {
        question: question,
        required: /^\d+\s*\*/.test(prompts[0])
      } : null;
    }
  }
  return null;
}
function getControlQuestion(control) {
  var _control$closest;
  if (isTenantQuestionId(control.id)) {
    var tenant = getTenantQuestion(control);
    if (tenant) return tenant.question;
  }
  var linked = getLinkedLabel(control);
  if (linked) {
    // The checkbox label wraps the control: its text IS the question.
    var text = cleanQuestion(textOf(linked));
    if (text) return text;
  }
  var ariaLabel = cleanQuestion(control.getAttribute('aria-label'));
  if (ariaLabel) return ariaLabel;
  var wrappedLabel = control.closest('label');
  if (wrappedLabel) {
    var _text = cleanQuestion(textOf(wrappedLabel));
    if (_text) return _text;
  }
  var wrapperLabel = (_control$closest = control.closest('.uiLibInput, .uiLibNativeSelectBase')) === null || _control$closest === void 0 || (_control$closest = _control$closest.parentElement) === null || _control$closest === void 0 ? void 0 : _control$closest.querySelector('label');
  if (wrapperLabel) {
    var _text2 = cleanQuestion(textOf(wrapperLabel));
    if (_text2) return _text2;
  }
  var placeholder = cleanQuestion(control.getAttribute('placeholder'));
  if (placeholder) return placeholder;
  var testId = control.getAttribute('data-testid') || '';
  if (/-select$/.test(testId)) return cleanQuestion(testId.replace(/-select$/, ''));
  return '';
}
function isRequiredControl(control) {
  var _getTenantQuestion;
  if (control.required || control.getAttribute('aria-required') === 'true') return true;
  if (control.closest('.ui-input-required, .ui-native-select-required, .ui-countrylist-required')) return true;
  if (isTenantQuestionId(control.id) && (_getTenantQuestion = getTenantQuestion(control)) !== null && _getTenantQuestion !== void 0 && _getTenantQuestion.required) return true;
  if (isRichTextWrapper(control)) return /\*\s*$/.test(cleanText(textOf(control.querySelector('p'))));
  var label = getLinkedLabel(control) || control.closest('label');
  return /\*\s*$/.test(cleanText(textOf(label)));
}
function buildConstraints(question, control) {
  var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var constraints = autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(question, control)), extra);
  if (isRequiredControl(control)) constraints.required = true;
  return constraints;
}
var compareDocumentOrder = function compareDocumentOrder(left, right) {
  if (left === right || !(left !== null && left !== void 0 && left.compareDocumentPosition)) return 0;
  var position = left.compareDocumentPosition(right);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
  if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
  return 0;
};

// --- detection: controls → question entries ---------------------------------------------------------

function getRadioLabel(radio) {
  var linked = getLinkedLabel(radio);
  var fromLabel = cleanQuestion(textOf(linked));
  if (fromLabel) return fromLabel;
  var fromAria = cleanQuestion(radio.getAttribute('aria-label'));
  if (fromAria) return fromAria;
  return cleanQuestion(radio.value);
}
function getRadiosByName(name) {
  if (!name) return [];
  return Array.from(document.querySelectorAll("input[type=\"radio\"][name=\"".concat(cssEscape(name), "\"]")));
}

// The group's prompt: the paragraph Paycom renders right before the field wrapper (the SMS consent
// text) beats the terse aria-label ("Opt in for texts to this number") that only names the control.
// The paragraph Paycom renders right before a radio group's wrapper (the SMS consent text). It is
// followed by an inline <style> for its links — step back over those.
function getRadioGroupPrompt(group, name) {
  var _wrapper$previousElem;
  var wrapper = document.getElementById(name) || group.closest('div[id]');
  var prompt = (_wrapper$previousElem = wrapper === null || wrapper === void 0 ? void 0 : wrapper.previousElementSibling) !== null && _wrapper$previousElem !== void 0 ? _wrapper$previousElem : null;
  while (prompt && prompt.matches('style, script')) prompt = prompt.previousElementSibling;
  if (!prompt || prompt.querySelector('input, select, textarea')) return null;
  return prompt;
}
function getRadioGroupQuestion(group, name) {
  var _group$closest;
  if (isTenantQuestionId(name)) {
    var tenant = getTenantQuestion(document.getElementById(name) || group);
    if (tenant) return tenant.question;
  }
  var prompt = getRadioGroupPrompt(group, name);
  var promptText = prompt ? cleanQuestion(textOf(prompt)) : '';
  if (promptText && promptText.length > 3) return promptText;
  var legend = cleanQuestion(textOf((_group$closest = group.closest('fieldset')) === null || _group$closest === void 0 ? void 0 : _group$closest.querySelector('legend')));
  if (legend) return legend;
  return cleanQuestion(group.getAttribute('aria-label')) || cleanQuestion(name.replace(/^[a-z-]+-information-/, '').replace(/-field$/, '').replace(/-/g, ' '));
}
function getDateParts(root) {
  return {
    month: (root === null || root === void 0 ? void 0 : root.querySelector('input[id$="-month"], input[placeholder="MM"]')) || null,
    day: (root === null || root === void 0 ? void 0 : root.querySelector('input[id$="-day"], input[placeholder="DD"]')) || null,
    year: (root === null || root === void 0 ? void 0 : root.querySelector('input[id$="-year"], input[placeholder="YYYY"]')) || null
  };
}
var isDateRoot = function isDateRoot(element) {
  var _element$querySelecto2, _element$matches;
  return Boolean(element === null || element === void 0 || (_element$querySelecto2 = element.querySelector) === null || _element$querySelecto2 === void 0 ? void 0 : _element$querySelecto2.call(element, '.uiLibDateInput, input[placeholder="MM"]')) && !((_element$matches = element.matches) !== null && _element$matches !== void 0 && _element$matches.call(element, '.uiLibDateInput'));
};
function isDatePrefilled(root) {
  var _parts$month, _parts$day, _parts$year;
  var parts = getDateParts(root);
  return Boolean(cleanText((_parts$month = parts.month) === null || _parts$month === void 0 ? void 0 : _parts$month.value) && cleanText((_parts$day = parts.day) === null || _parts$day === void 0 ? void 0 : _parts$day.value) && cleanText((_parts$year = parts.year) === null || _parts$year === void 0 ? void 0 : _parts$year.value));
}
function getCountryWrapper(element) {
  var _element$matches2, _element$querySelecto3, _element$closest;
  if (!element) return null;
  if ((_element$matches2 = element.matches) !== null && _element$matches2 !== void 0 && _element$matches2.call(element, '.uiLibCountryList')) return element;
  return ((_element$querySelecto3 = element.querySelector) === null || _element$querySelecto3 === void 0 ? void 0 : _element$querySelecto3.call(element, '.uiLibCountryList')) || ((_element$closest = element.closest) === null || _element$closest === void 0 ? void 0 : _element$closest.call(element, '.uiLibCountryList')) || null;
}
function getCountryButton(element) {
  var _getCountryWrapper;
  return ((_getCountryWrapper = getCountryWrapper(element)) === null || _getCountryWrapper === void 0 ? void 0 : _getCountryWrapper.querySelector('button')) || null;
}
function readSelectedCountry(button) {
  var match = /country combo box,?\s*(.*?)\s*selected/i.exec((button === null || button === void 0 ? void 0 : button.getAttribute('aria-label')) || '');
  return cleanText(match === null || match === void 0 ? void 0 : match[1]);
}
function getDropzoneKind(label) {
  if (/resume|\bcv\b|curriculum/i.test(label)) return 'resume';
  if (/cover\s*letter/i.test(label)) return 'cover_letter';
  return 'file';
}
function getDropzones(scope) {
  return Array.from(scope.querySelectorAll('[role="button"][aria-label]')).filter(function (element) {
    return element.querySelector('input[type="file"]') && !isExcludedFromScan(element, scope);
  });
}

// The row's heading ("Resume/CV *"): the nearest short preceding sibling of the zone or of one of its
// ancestors. The application page puts it right above the zone; the Quick Apply modal (live
// 2026-10-23, INDEX ANALYTICS) puts it in the row's other column and gives the zone (`div#resume`,
// under an aria-hidden wrapper) an EMPTY aria-label.
function getDropzoneHeading(dropzone) {
  var node = dropzone;
  for (var depth = 0; node && depth < 6; depth += 1, node = node.parentElement) {
    var _node$matches2, _node2;
    if ((_node$matches2 = (_node2 = node).matches) !== null && _node$matches2 !== void 0 && _node$matches2.call(_node2, '.uiLibModal, [role="dialog"], form') || node === document.body) break;
    var text = node.previousElementSibling ? cleanText(textOf(node.previousElementSibling)) : '';
    if (text) return text.length < 60 ? text : '';
  }
  return '';
}
function getDropzoneLabel(dropzone) {
  return cleanQuestion(dropzone.getAttribute('aria-label')) || cleanQuestion(getDropzoneHeading(dropzone));
}

// The label decides; a label-less zone falls back to its id (`resume` on the Quick Apply modal).
function getDropzoneKindOf(dropzone) {
  var kind = getDropzoneKind(getDropzoneLabel(dropzone));
  return kind === 'file' ? getDropzoneKind((dropzone.id || '').replace(/[-_]+/g, ' ')) : kind;
}
function isDropzoneRequired(dropzone) {
  var header = dropzone.previousElementSibling;
  if (header && /\*/.test(cleanText(header.textContent))) return true;
  var section = dropzone.parentElement;
  var heading = section ? Array.from(section.children).find(function (child) {
    return child !== dropzone && /\*/.test(cleanText(child.textContent)) && cleanText(child.textContent).length < 60;
  }) : null;
  if (heading) return true;
  // Quick Apply: the inner drop target carries `required=""` and the row heading ends in " * ".
  return Boolean(dropzone.querySelector('[required]')) || /\*\s*$/.test(getDropzoneHeading(dropzone));
}
function buildDropzoneEntry(dropzone, index) {
  var label = getDropzoneLabel(dropzone);
  var input = dropzone.querySelector('input[type="file"]');
  var kind = getDropzoneKindOf(dropzone);
  var constraints = autofill_objectSpread({
    required: isDropzoneRequired(dropzone)
  }, input !== null && input !== void 0 && input.getAttribute('accept') ? {
    accept: input.getAttribute('accept')
  } : {});
  if (kind === 'resume') {
    return {
      question: label || 'Resume/CV',
      fieldId: RESUME_FIELD_ID,
      answerType: 'resume',
      fieldKind: 'resume',
      options: [],
      constraints: constraints,
      dependsOnPrevious: false,
      field: dropzone
    };
  }
  if (kind === 'cover_letter') {
    // The slot is a file input (.pdf/.doc/.docx/.txt/… on the tenant seen): ask for a FILE so the
    // background renders the letter instead of handing back inline text; the accept list rides
    // along so a plain-text fallback is only ever made when the slot takes .txt.
    return {
      question: label || 'Cover Letter',
      fieldId: COVER_LETTER_FIELD_ID,
      answerType: 'cover_letter',
      fieldKind: 'cover_letter',
      options: [],
      constraints: autofill_objectSpread(autofill_objectSpread({}, constraints), {}, {
        coverLetterOutput: 'file'
      }),
      dependsOnPrevious: false,
      field: dropzone
    };
  }
  return {
    question: label || "Document upload ".concat(index + 1),
    fieldId: dropzone.id || "paycom-file-".concat(index),
    answerType: 'file',
    fieldKind: 'file',
    options: [],
    constraints: constraints,
    dependsOnPrevious: false,
    field: dropzone
  };
}
var TEXT_INPUT_TYPES = new Set(['text', 'email', 'tel', 'number', 'url', '']);
function buildTextEntry(control, scope) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref3$modal = _ref3.modal,
    modal = _ref3$modal === void 0 ? false : _ref3$modal;
  var fieldId = control.id || control.getAttribute('name') || control.getAttribute('data-testid') || '';
  if (!fieldId) return null;
  var question = getControlQuestion(control);
  if (!question) return null;
  if (/social.?security|\bssn\b/i.test("".concat(fieldId, " ").concat(question))) return null; // never
  var isTextarea = control.tagName === 'TEXTAREA';
  var isPhone = /internationalphonenumbers$/i.test(control.getAttribute('data-testid') || '') || control.getAttribute('inputmode') === 'tel' || control.type === 'tel';
  var common = {
    question: question,
    fieldId: fieldId,
    dependsOnPrevious: isDependentQuestion(question),
    field: control,
    options: [],
    constraints: buildConstraints(question, control, isPhone ? {
      inputType: 'tel'
    } : {})
  };
  if (/verification code/i.test(question)) {
    return autofill_objectSpread(autofill_objectSpread({}, common), {}, {
      fieldId: VERIFICATION_CODE_FIELD_ID,
      answerType: 'verification_code',
      fieldKind: 'verification_code'
    });
  }
  if (fieldId === MIDDLE_NAME_FIELD_ID) {
    // Required unless "I do not have a middle name" is ticked: one logical question — a profile
    // without a middle name ticks the box instead of leaving a required input empty.
    return autofill_objectSpread(autofill_objectSpread({}, common), {}, {
      answerType: 'paycom-middle-name',
      fieldKind: 'middle-name'
    });
  }
  if (modal && fieldId === SIGNUP_CONFIRM_EMAIL_ID) {
    // Repeat the email the engine just typed rather than asking the answer system to guess.
    return autofill_objectSpread(autofill_objectSpread({}, common), {}, {
      answerType: 'paycom-confirm-email',
      fieldKind: 'text',
      waitForFieldId: SIGNUP_EMAIL_ID
    });
  }
  if (/-institution-name-field-/i.test(fieldId)) {
    return autofill_objectSpread(autofill_objectSpread({}, common), {}, {
      answerType: 'text',
      fieldKind: 'institution'
    });
  }
  if (isPhone) return autofill_objectSpread(autofill_objectSpread({}, common), {}, {
    answerType: 'text',
    fieldKind: 'phone'
  });
  if (isTextarea) return autofill_objectSpread(autofill_objectSpread({}, common), {}, {
    answerType: 'text',
    fieldKind: 'textarea'
  });
  return autofill_objectSpread(autofill_objectSpread({}, common), {}, {
    answerType: 'text',
    fieldKind: 'text'
  });
}
function buildSelectEntry(select) {
  var _select$closest;
  var fieldId = select.id || select.getAttribute('name') || (select.getAttribute('data-testid') || '').replace(/-select$/, '');
  if (!fieldId) return null;
  var question = getControlQuestion(select) || cleanQuestion((_select$closest = select.closest('[role="listbox"]')) === null || _select$closest === void 0 ? void 0 : _select$closest.getAttribute('aria-label'));
  if (!question) return null;
  var options = Array.from(select.options).map(function (option) {
    return cleanText(option.textContent);
  }).filter(Boolean);
  if (options.length === 0) return null;
  return {
    question: question,
    fieldId: fieldId,
    answerType: 'single-select',
    fieldKind: 'select-native',
    options: options,
    constraints: buildConstraints(question, select),
    dependsOnPrevious: isDependentQuestion(question),
    field: select
  };
}
function buildRadioGroupEntry(group) {
  var _radios$, _getTenantQuestion2;
  var radios = Array.from(group.querySelectorAll('input[type="radio"]'));
  var name = ((_radios$ = radios[0]) === null || _radios$ === void 0 ? void 0 : _radios$.getAttribute('name')) || '';
  if (!name) return null;
  var options = radios.map(function (radio) {
    return getRadioLabel(radio);
  }).filter(Boolean);
  if (options.length === 0) return null;
  var question = getRadioGroupQuestion(group, name);
  var constraints = {};
  if (group.getAttribute('aria-required') === 'true' || radios.some(function (radio) {
    return radio.required;
  })) constraints.required = true;
  var prompt = getRadioGroupPrompt(group, name);
  if (prompt && /\*\s*$/.test(cleanText(textOf(prompt)))) constraints.required = true;
  if (isTenantQuestionId(name) && (_getTenantQuestion2 = getTenantQuestion(document.getElementById(name) || group)) !== null && _getTenantQuestion2 !== void 0 && _getTenantQuestion2.required) constraints.required = true;
  return {
    question: question,
    fieldId: name,
    answerType: 'single-select',
    fieldKind: 'radio',
    options: options,
    constraints: constraints,
    dependsOnPrevious: isDependentQuestion(question),
    field: group
  };
}
function buildCheckboxEntry(checkbox) {
  var fieldId = checkbox.id || checkbox.getAttribute('name') || '';
  var name = checkbox.getAttribute('name') || checkbox.id || '';
  if (!fieldId) return null;
  var question = getControlQuestion(checkbox);
  if (!question) return null;
  if (name === ACKNOWLEDGEMENT_CHECKBOX_NAME) {
    // The application cannot be submitted without this acknowledgement; it carries no profile data.
    // `fillLast`: the certification covers the application AS SIGNED — Paycom un-ticks it when a
    // later edit (a section row, an autosave) changes the form, so it must be the final write.
    return {
      question: question,
      fieldId: fieldId,
      answerType: 'paycom-affirm',
      fieldKind: 'checkbox',
      options: ['Yes', 'No'],
      constraints: {
        required: true
      },
      dependsOnPrevious: false,
      fillLast: true,
      field: checkbox
    };
  }
  return {
    question: question,
    fieldId: fieldId,
    answerType: 'single-select',
    fieldKind: 'checkbox',
    options: ['Yes', 'No'],
    constraints: buildConstraints(question, checkbox),
    dependsOnPrevious: isDependentQuestion(question),
    field: checkbox
  };
}
function buildDateEntry(root) {
  var _root$querySelector, _parts$month2, _root$querySelector2;
  var fieldId = root.id || '';
  if (!fieldId || isDatePrefilled(root)) return null;
  var tenant = isTenantQuestionId(fieldId) ? getTenantQuestion(root) : null;
  var question = (tenant === null || tenant === void 0 ? void 0 : tenant.question) || cleanQuestion(root.getAttribute('aria-label')) || cleanQuestion((_root$querySelector = root.querySelector('.uiLibDateInputLabel')) === null || _root$querySelector === void 0 ? void 0 : _root$querySelector.textContent);
  if (!question) return null;
  var parts = getDateParts(root);
  var required = Boolean((tenant === null || tenant === void 0 ? void 0 : tenant.required) || ((_parts$month2 = parts.month) === null || _parts$month2 === void 0 ? void 0 : _parts$month2.required) || root.getAttribute('aria-required') === 'true' || /\*\s*$/.test(cleanText((_root$querySelector2 = root.querySelector('.uiLibDateInputLabel')) === null || _root$querySelector2 === void 0 ? void 0 : _root$querySelector2.textContent)));
  return {
    question: question,
    fieldId: fieldId,
    answerType: 'text',
    fieldKind: 'date',
    options: [],
    constraints: autofill_objectSpread({
      inputType: 'date',
      format: 'MM/DD/YYYY'
    }, required ? {
      required: true
    } : {}),
    dependsOnPrevious: isDependentQuestion(question),
    field: root
  };
}
function buildCountryEntry(wrapper) {
  var _wrapper$querySelecto;
  var host = wrapper.closest('span[id], div[id]');
  var fieldId = (host === null || host === void 0 ? void 0 : host.id) || 'country';
  var question = cleanQuestion((_wrapper$querySelecto = wrapper.querySelector('label')) === null || _wrapper$querySelecto === void 0 ? void 0 : _wrapper$querySelecto.textContent) || 'Country';
  var constraints = wrapper.matches('.ui-countrylist-required') ? {
    required: true
  } : {};
  return {
    question: question,
    fieldId: fieldId,
    answerType: 'text',
    fieldKind: 'country',
    options: [],
    constraints: constraints,
    dependsOnPrevious: false,
    field: host || wrapper
  };
}

// The Authorization section ends with a required "Signature" pad (on every application page seen
// 2026-10-11 → 10-21): Draw | Type tabs over a canvas image; "Type" swaps the canvas for an id-less
// <input> whose text Paycom renders as the signature. Nothing labels it, so no scan ever saw it and
// Submit answered "Entry must be provided" under the pad (28 of 30 submit parks). It is signed with the
// legal name the application carries, after everything else (`fillLast`) so that name is in place.
function getSignaturePad() {
  var pad = document.getElementById(SIGNATURE_FIELD_ID);
  return pad && isElementVisible(pad) ? pad : null;
}
function getSignatureInput(pad) {
  var _pad$querySelectorAll;
  return Array.from((_pad$querySelectorAll = pad === null || pad === void 0 ? void 0 : pad.querySelectorAll('input')) !== null && _pad$querySelectorAll !== void 0 ? _pad$querySelectorAll : []).find(function (input) {
    return TEXT_INPUT_TYPES.has((input.getAttribute('type') || '').toLowerCase()) && isElementVisible(input);
  }) || null;
}
function isSignaturePadSigned(pad) {
  var input = getSignatureInput(pad);
  if (input) return Boolean(cleanText(input.value));
  // Draw mode keeps its "Draw with your finger or mouse" placeholder until something is drawn.
  return !/draw with your finger/i.test(cleanText(pad === null || pad === void 0 ? void 0 : pad.textContent));
}
function readLegalName() {
  var _document$getElementB, _document$getElementB2;
  var first = cleanText((_document$getElementB = document.getElementById(LEGAL_FIRST_NAME_FIELD_ID)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value);
  var last = cleanText((_document$getElementB2 = document.getElementById(LEGAL_LAST_NAME_FIELD_ID)) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.value);
  return first && last ? "".concat(first, " ").concat(last) : '';
}
function buildSignatureEntry() {
  var pad = getSignaturePad();
  if (!pad) return null;
  return {
    question: 'Signature (type your full legal name)',
    fieldId: SIGNATURE_FIELD_ID,
    answerType: 'paycom-signature',
    fieldKind: 'paycom-signature',
    options: [],
    constraints: {
      required: true
    },
    dependsOnPrevious: false,
    fillLast: true,
    field: pad
  };
}

// Generic scan of a scope (the application page, or one auth modal). Repeatable sections are
// skipped here — the hierarchy collector emits them (detectApplicationFields appends it).
function scanControls(scope) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref4$modal = _ref4.modal,
    modal = _ref4$modal === void 0 ? false : _ref4$modal;
  var entries = [];
  var seen = new Set();
  var push = function push(entry) {
    if (!(entry !== null && entry !== void 0 && entry.fieldId) || seen.has(entry.fieldId)) return;
    seen.add(entry.fieldId);
    entries.push(entry);
  };
  var skip = function skip(element) {
    return !isElementVisible(element) || !modal && isExcludedFromScan(element, scope) || isSectionRowControl(element);
  };
  getDropzones(scope).forEach(function (dropzone, index) {
    if (skip(dropzone)) return;
    push(buildDropzoneEntry(dropzone, index));
  });
  Array.from(scope.querySelectorAll('input, textarea')).forEach(function (control) {
    if (skip(control)) return;
    var type = (control.getAttribute('type') || '').toLowerCase();
    if (control.tagName === 'INPUT' && !TEXT_INPUT_TYPES.has(type)) return;
    if (type === 'search' || control.matches(COUNTRY_SEARCH_SELECTOR)) return;
    if (control.closest('.uiLibDateInput, .uiLibCountryList')) return;
    if (control.getAttribute('name') === NO_MIDDLE_NAME_CHECKBOX_NAME) return;
    if (/^(search-by-keyword|select-location-input|Rows per page)/i.test(control.id || control.getAttribute('name') || '')) return;
    push(buildTextEntry(control, scope, {
      modal: modal
    }));
  });
  Array.from(scope.querySelectorAll('select')).forEach(function (select) {
    if (skip(select)) return;
    push(buildSelectEntry(select));
  });
  Array.from(scope.querySelectorAll('[role="radiogroup"]')).forEach(function (group) {
    if (skip(group)) return;
    var radios = group.querySelectorAll('input[type="radio"]');
    if (radios.length === 0 || Array.from(radios).some(isSectionRowControl)) return;
    push(buildRadioGroupEntry(group));
  });
  Array.from(scope.querySelectorAll('input[type="checkbox"]')).forEach(function (checkbox) {
    if (!isCheckboxVisible(checkbox) || !modal && isExcludedFromScan(checkbox, scope) || isSectionRowControl(checkbox)) return;
    var name = checkbox.getAttribute('name') || checkbox.id || '';
    if ([NO_MIDDLE_NAME_CHECKBOX_NAME, UPDATE_ACCOUNT_CHECKBOX_NAME, WOTC_OPT_IN_CHECKBOX_NAME].includes(name)) return;
    push(buildCheckboxEntry(checkbox));
  });
  Array.from(scope.querySelectorAll('[role="textbox"][aria-label], [id][aria-label]')).forEach(function (root) {
    if (!isDateRoot(root) || skip(root)) return;
    push(buildDateEntry(root));
  });
  Array.from(scope.querySelectorAll('.uiLibCountryList')).forEach(function (wrapper) {
    if (skip(wrapper) || isSectionRowControl(wrapper.closest('span[id], div[id]'))) return;
    push(buildCountryEntry(wrapper));
  });
  entries.sort(function (left, right) {
    return compareDocumentOrder(left.field, right.field);
  });
  return entries;
}
function detectApplicationFields() {
  var questions = scanControls(document.body);

  // Work Opportunity Tax Credit questionnaire (tenant-toggled, asks SSN / DOB / benefit history):
  // opt out instead of answering it — the questionnaire is voluntary and never application data.
  var wotcOptIn = document.querySelector("input[type=\"checkbox\"][name=\"".concat(WOTC_OPT_IN_CHECKBOX_NAME, "\"]"));
  if (wotcOptIn && isCheckboxVisible(wotcOptIn)) {
    questions.push({
      question: 'I would like to complete the Tax Credit Questionnaire',
      fieldId: WOTC_OPT_OUT_FIELD_ID,
      answerType: 'paycom-decline',
      fieldKind: 'checkbox',
      options: ['Yes', 'No'],
      constraints: {},
      dependsOnPrevious: false,
      field: wotcOptIn
    });
  }
  var signature = buildSignatureEntry();
  if (signature) questions.push(signature);
  var _iterator = autofill_createForOfIteratorHelper(PAYCOM_SECTIONS),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var section = _step.value;
      questions.push.apply(questions, autofill_toConsumableArray(collectSectionHierarchyQuestions(section)));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return questions;
}
function detectAuthModalFields(modal, kind) {
  var questions = scanControls(modal, {
    modal: true
  });
  if (kind === 'signup' || kind === 'quick-apply') {
    // Invisible hCaptcha executes on "Continue To Application"; the shared builder only emits an
    // entry once a challenge is actually blocking (auto-apply build only).
    var captcha = buildCaptchaFieldEntry(modal);
    if (captcha) questions.push(captcha);
  }
  return questions;
}

// The "Verify Your Email" modal's code input — none on its first step (Send Code only).
function getVerifyCodeInput(modal) {
  var _modal$querySelectorA2;
  var inputs = Array.from((_modal$querySelectorA2 = modal === null || modal === void 0 ? void 0 : modal.querySelectorAll('input')) !== null && _modal$querySelectorA2 !== void 0 ? _modal$querySelectorA2 : []).filter(function (input) {
    return TEXT_INPUT_TYPES.has(input.type) && isElementVisible(input);
  });
  return inputs.find(function (input) {
    return /code/i.test(getControlQuestion(input) || '');
  }) || (inputs.length === 1 ? inputs[0] : null);
}
function detectVerifyEmailFields(modal) {
  var input = getVerifyCodeInput(modal);
  if (!input) return [];
  return [{
    question: getControlQuestion(input) || 'Verification Code',
    fieldId: VERIFICATION_CODE_FIELD_ID,
    answerType: 'verification_code',
    fieldKind: 'verification_code',
    options: [],
    constraints: {
      required: true
    },
    dependsOnPrevious: false,
    field: input
  }];
}
function detectAutofillFields() {
  var modal = getOpenModal();
  var kind = getModalKind(modal);
  var questions = [];
  if (kind === 'signup' || kind === 'signin' || kind === 'quick-apply') {
    questions = detectAuthModalFields(modal, kind);
  } else if (kind === 'verify-email') {
    questions = detectVerifyEmailFields(modal);
  } else if (isApplicationPage()) {
    questions = detectApplicationFields();
  }
  return questions.length > 0 ? questions : null;
}

// --- live control resolution ------------------------------------------------------------------------

function liveControl(fieldId) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (fieldId) {
    var byId = document.getElementById(fieldId);
    if (byId) return byId;
    var byName = document.querySelector("[name=\"".concat(cssEscape(fieldId), "\"]"));
    if (byName) return byName;
    var byTestId = document.querySelector("select[data-testid=\"".concat(cssEscape("".concat(fieldId, "-select")), "\"], [data-testid=\"").concat(cssEscape(fieldId), "\"]"));
    if (byTestId) return byTestId;
  }
  return fallback;
}
function liveDropzone(fieldId, fallback) {
  if (fieldId === RESUME_FIELD_ID || fieldId === COVER_LETTER_FIELD_ID) {
    var kind = fieldId === RESUME_FIELD_ID ? 'resume' : 'cover_letter';
    // An open modal (Quick Apply) holds the zone; the page-level scan leaves modals out.
    var match = getDropzones(getOpenModal() || document.body).find(function (zone) {
      return getDropzoneKindOf(zone) === kind;
    });
    if (match) return match;
  }
  return liveControl(fieldId, fallback);
}

// --- fills --------------------------------------------------------------------------------------------
function matchOptionIndex(_x, _x2) {
  return _matchOptionIndex.apply(this, arguments);
} // A controlled <select> can be wiped back to its placeholder by React's state-restore when the write
// lands right after the component (re)rendered — live, Gender / Disability / Referral Source reverted
// while every other select stuck. Re-write on later ticks until it holds; never fight a real change.
function _matchOptionIndex() {
  _matchOptionIndex = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee38(texts, answer) {
    var wanted, normalized, exact, prefix, partial, best, index, _t6;
    return autofill_regenerator().w(function (_context38) {
      while (1) switch (_context38.p = _context38.n) {
        case 0:
          wanted = normalizeComparisonText(typeof answer === 'boolean' ? answer ? 'Yes' : 'No' : answer);
          if (wanted) {
            _context38.n = 1;
            break;
          }
          return _context38.a(2, -1);
        case 1:
          normalized = texts.map(function (text) {
            return normalizeComparisonText(text);
          });
          exact = normalized.findIndex(function (text) {
            return text === wanted;
          });
          if (!(exact >= 0)) {
            _context38.n = 2;
            break;
          }
          return _context38.a(2, exact);
        case 2:
          prefix = normalized.findIndex(function (text) {
            return text.length >= 3 && (text.startsWith(wanted) || wanted.startsWith(text));
          });
          if (!(prefix >= 0)) {
            _context38.n = 3;
            break;
          }
          return _context38.a(2, prefix);
        case 3:
          partial = normalized.findIndex(function (text) {
            return wanted.length >= 4 && text.includes(wanted);
          });
          if (!(partial >= 0)) {
            _context38.n = 4;
            break;
          }
          return _context38.a(2, partial);
        case 4:
          _context38.p = 4;
          _context38.n = 5;
          return getEmbeddingMatch(typeof answer === 'boolean' ? answer ? 'Yes' : 'No' : String(answer), texts);
        case 5:
          best = _context38.v;
          index = texts.indexOf(best);
          if (!(index >= 0)) {
            _context38.n = 6;
            break;
          }
          return _context38.a(2, index);
        case 6:
          _context38.n = 8;
          break;
        case 7:
          _context38.p = 7;
          _t6 = _context38.v;
        case 8:
          return _context38.a(2, -1);
      }
    }, _callee38, null, [[4, 7]]);
  }));
  return _matchOptionIndex.apply(this, arguments);
}
var SELECT_REASSERT_DELAYS_MS = [20, 60, 150, 350, 700];
function commitSelectValue(_x3, _x4) {
  return _commitSelectValue.apply(this, arguments);
}
function _commitSelectValue() {
  _commitSelectValue = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee39(select, value) {
    var before, _iterator2, _step2, delay, _t7;
    return autofill_regenerator().w(function (_context39) {
      while (1) switch (_context39.p = _context39.n) {
        case 0:
          before = select.value;
          fillSelectInput(select, value);
          _iterator2 = autofill_createForOfIteratorHelper(SELECT_REASSERT_DELAYS_MS);
          _context39.p = 1;
          _iterator2.s();
        case 2:
          if ((_step2 = _iterator2.n()).done) {
            _context39.n = 7;
            break;
          }
          delay = _step2.value;
          _context39.n = 3;
          return sleep(delay);
        case 3:
          if (!(!select.isConnected || select.value === value)) {
            _context39.n = 4;
            break;
          }
          return _context39.a(2);
        case 4:
          if (!(select.value !== before && select.value !== '')) {
            _context39.n = 5;
            break;
          }
          return _context39.a(2);
        case 5:
          // someone else set a real value
          fillSelectInput(select, value);
        case 6:
          _context39.n = 2;
          break;
        case 7:
          _context39.n = 9;
          break;
        case 8:
          _context39.p = 8;
          _t7 = _context39.v;
          _iterator2.e(_t7);
        case 9:
          _context39.p = 9;
          _iterator2.f();
          return _context39.f(9);
        case 10:
          return _context39.a(2);
      }
    }, _callee39, null, [[1, 8, 9, 10]]);
  }));
  return _commitSelectValue.apply(this, arguments);
}
function fillNativeSelect(_x5, _x6) {
  return _fillNativeSelect.apply(this, arguments);
}
function _fillNativeSelect() {
  _fillNativeSelect = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee40(select, answer) {
    var options, index;
    return autofill_regenerator().w(function (_context40) {
      while (1) switch (_context40.n) {
        case 0:
          if (!(!select || isSkipAnswer(answer))) {
            _context40.n = 1;
            break;
          }
          return _context40.a(2);
        case 1:
          options = Array.from(select.options).filter(function (option) {
            return cleanText(option.textContent);
          });
          _context40.n = 2;
          return matchOptionIndex(options.map(function (option) {
            return cleanText(option.textContent);
          }), answer);
        case 2:
          index = _context40.v;
          if (!(index < 0)) {
            _context40.n = 3;
            break;
          }
          return _context40.a(2);
        case 3:
          if (!(select.value !== options[index].value)) {
            _context40.n = 4;
            break;
          }
          _context40.n = 4;
          return commitSelectValue(select, options[index].value);
        case 4:
          return _context40.a(2);
      }
    }, _callee40);
  }));
  return _fillNativeSelect.apply(this, arguments);
}
function chooseRadio(_x7, _x8) {
  return _chooseRadio.apply(this, arguments);
}
function _chooseRadio() {
  _chooseRadio = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee41(radios, answer) {
    var index, radio;
    return autofill_regenerator().w(function (_context41) {
      while (1) switch (_context41.n) {
        case 0:
          if (!(radios.length === 0 || isSkipAnswer(answer))) {
            _context41.n = 1;
            break;
          }
          return _context41.a(2);
        case 1:
          _context41.n = 2;
          return matchOptionIndex(radios.map(function (radio) {
            return getRadioLabel(radio);
          }), answer);
        case 2:
          index = _context41.v;
          if (!(index < 0)) {
            _context41.n = 3;
            break;
          }
          return _context41.a(2);
        case 3:
          radio = radios[index];
          if (!radio.checked) radio.click();
        case 4:
          return _context41.a(2);
      }
    }, _callee41);
  }));
  return _chooseRadio.apply(this, arguments);
}
function isCheckboxChecked(input) {
  var button = input !== null && input !== void 0 && input.id ? document.getElementById("CheckboxOuterID-".concat(input.id)) : null;
  if (button !== null && button !== void 0 && button.hasAttribute('aria-checked')) return button.getAttribute('aria-checked') === 'true';
  return Boolean(input === null || input === void 0 ? void 0 : input.checked);
}

// uiLib checkboxes toggle on the hidden input's click (the visible button is presentational).
function setCheckbox(input, desired) {
  if (!input) return;
  if (isCheckboxChecked(input) !== desired) input.click();
}

// Click, then confirm the state held across the next few ticks (a re-render can swallow the toggle).
var CHECKBOX_REASSERT_DELAYS_MS = [60, 200, 500];
function commitCheckbox(_x9, _x0) {
  return _commitCheckbox.apply(this, arguments);
} // Paycom blocks Submit while the acknowledgement is un-ticked and resets it on later edits, so the
// submit click re-affirms it first (idempotent when it already holds).
function _commitCheckbox() {
  _commitCheckbox = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee42(input, desired) {
    var _iterator3, _step3, delay, _t8;
    return autofill_regenerator().w(function (_context42) {
      while (1) switch (_context42.p = _context42.n) {
        case 0:
          if (input) {
            _context42.n = 1;
            break;
          }
          return _context42.a(2);
        case 1:
          setCheckbox(input, desired);
          _iterator3 = autofill_createForOfIteratorHelper(CHECKBOX_REASSERT_DELAYS_MS);
          _context42.p = 2;
          _iterator3.s();
        case 3:
          if ((_step3 = _iterator3.n()).done) {
            _context42.n = 8;
            break;
          }
          delay = _step3.value;
          _context42.n = 4;
          return sleep(delay);
        case 4:
          if (!getPolicyDialog()) {
            _context42.n = 5;
            break;
          }
          return _context42.a(2);
        case 5:
          if (!(!input.isConnected || isCheckboxChecked(input) === desired)) {
            _context42.n = 6;
            break;
          }
          return _context42.a(2);
        case 6:
          setCheckbox(input, desired);
        case 7:
          _context42.n = 3;
          break;
        case 8:
          _context42.n = 10;
          break;
        case 9:
          _context42.p = 9;
          _t8 = _context42.v;
          _iterator3.e(_t8);
        case 10:
          _context42.p = 10;
          _iterator3.f();
          return _context42.f(10);
        case 11:
          return _context42.a(2);
      }
    }, _callee42, null, [[2, 9, 10, 11]]);
  }));
  return _commitCheckbox.apply(this, arguments);
}
function ensureAcknowledged() {
  return _ensureAcknowledged.apply(this, arguments);
} // Switch the pad to "Type" (the input only exists there) and type the name; a pad already signed —
// typed or drawn — is left alone.
function _ensureAcknowledged() {
  _ensureAcknowledged = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee43() {
    var input;
    return autofill_regenerator().w(function (_context43) {
      while (1) switch (_context43.n) {
        case 0:
          input = document.querySelector("input[type=\"checkbox\"][name=\"".concat(ACKNOWLEDGEMENT_CHECKBOX_NAME, "\"]"));
          if (!(!input || isCheckboxChecked(input))) {
            _context43.n = 1;
            break;
          }
          return _context43.a(2);
        case 1:
          _context43.n = 2;
          return commitCheckbox(input, true);
        case 2:
          return _context43.a(2);
      }
    }, _callee43);
  }));
  return _ensureAcknowledged.apply(this, arguments);
}
function signSignaturePad(_x1) {
  return _signSignaturePad.apply(this, arguments);
} // Like the acknowledgement, re-check the signature right before Submit (idempotent once signed).
function _signSignaturePad() {
  _signSignaturePad = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee44(answer) {
    var shouldAbort,
      pad,
      name,
      input,
      typeTab,
      _args44 = arguments;
    return autofill_regenerator().w(function (_context44) {
      while (1) switch (_context44.n) {
        case 0:
          shouldAbort = _args44.length > 1 && _args44[1] !== undefined ? _args44[1] : autofill_NEVER_ABORT;
          pad = getSignaturePad();
          name = cleanText(typeof answer === 'string' ? answer : '') || readLegalName();
          if (!(!pad || !name || shouldAbort() || isSignaturePadSigned(pad))) {
            _context44.n = 1;
            break;
          }
          return _context44.a(2);
        case 1:
          input = getSignatureInput(pad);
          if (input) {
            _context44.n = 4;
            break;
          }
          typeTab = Array.from(pad.querySelectorAll('button')).find(function (button) {
            return /^type$/i.test(cleanText(button.textContent));
          });
          if (typeTab) {
            _context44.n = 2;
            break;
          }
          throw new Error("".concat(PLATFORM, ": the signature pad has no Type option"));
        case 2:
          typeTab.click();
          _context44.n = 3;
          return waitForPositiveResultWithAbort(function () {
            return getSignatureInput(getSignaturePad());
          }, SIGNATURE_INPUT_WAIT_MS, shouldAbort, POLL_MS);
        case 3:
          input = _context44.v;
          if (input) {
            _context44.n = 4;
            break;
          }
          throw new Error("".concat(PLATFORM, ": the typed-signature box never appeared"));
        case 4:
          if (!cleanText(input.value)) {
            _context44.n = 5;
            break;
          }
          return _context44.a(2);
        case 5:
          _context44.n = 6;
          return fillTextInputReliably(input, toPlainPunctuation(name), {
            shouldAbort: shouldAbort
          });
        case 6:
          input.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        case 7:
          return _context44.a(2);
      }
    }, _callee44);
  }));
  return _signSignaturePad.apply(this, arguments);
}
function ensureSigned() {
  return _ensureSigned.apply(this, arguments);
}
function _ensureSigned() {
  _ensureSigned = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee45() {
    var _t9;
    return autofill_regenerator().w(function (_context45) {
      while (1) switch (_context45.p = _context45.n) {
        case 0:
          _context45.p = 0;
          _context45.n = 1;
          return signSignaturePad(readLegalName());
        case 1:
          _context45.n = 3;
          break;
        case 2:
          _context45.p = 2;
          _t9 = _context45.v;
          console.warn("[".concat(PLATFORM, "][signature] could not sign before submit:"), _t9);
        case 3:
          return _context45.a(2);
      }
    }, _callee45, null, [[0, 2]]);
  }));
  return _ensureSigned.apply(this, arguments);
}
function fillDateRoot(root, answer) {
  var parts = parseDateAnswer(answer);
  var inputs = getDateParts(root);
  if (!parts || !inputs.month || !inputs.year) return;
  for (var _i = 0, _arr = [[inputs.month, parts.month], [inputs.day, parts.day], [inputs.year, parts.year]]; _i < _arr.length; _i++) {
    var _arr$_i = autofill_slicedToArray(_arr[_i], 2),
      input = _arr$_i[0],
      value = _arr$_i[1];
    if (!input) continue;
    fillTextInput(input, value);
    input.dispatchEvent(new Event('change', {
      bubbles: true
    }));
  }
}
function findCountryItem(modal, desired) {
  var wanted = normalizeComparisonText(desired);
  var items = Array.from(modal.querySelectorAll(COUNTRY_LIST_ITEM_SELECTOR)).filter(isElementVisible);
  if (items.length === 0 || !wanted) return null;
  var texts = items.map(function (item) {
    return normalizeComparisonText(item.textContent);
  });
  var exact = texts.findIndex(function (text) {
    return text === wanted;
  });
  if (exact >= 0) return items[exact];
  var prefix = texts.findIndex(function (text) {
    return text.startsWith(wanted);
  });
  if (prefix >= 0) return items[prefix];
  var alias = texts.findIndex(function (text) {
    return text.endsWith(wanted) || text.includes(wanted);
  });
  return alias >= 0 ? items[alias] : null;
}
function fillCountryPicker(_x10, _x11) {
  return _fillCountryPicker.apply(this, arguments);
}
function _fillCountryPicker() {
  _fillCountryPicker = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee46(host, answer) {
    var shouldAbort,
      button,
      desired,
      current,
      modal,
      search,
      item,
      back,
      _args46 = arguments;
    return autofill_regenerator().w(function (_context46) {
      while (1) switch (_context46.n) {
        case 0:
          shouldAbort = _args46.length > 2 && _args46[2] !== undefined ? _args46[2] : autofill_NEVER_ABORT;
          button = getCountryButton(host);
          desired = normalizeCountryName(answer);
          if (!(!button || !desired || shouldAbort())) {
            _context46.n = 1;
            break;
          }
          return _context46.a(2);
        case 1:
          current = readSelectedCountry(button);
          if (!(current && (normalizeComparisonText(current) === normalizeComparisonText(desired) || normalizeComparisonText(current).startsWith(normalizeComparisonText(desired))))) {
            _context46.n = 2;
            break;
          }
          return _context46.a(2);
        case 2:
          button.click();
          _context46.n = 3;
          return waitForPositiveResultWithAbort(function () {
            var open = getOpenModal();
            return getModalKind(open) === 'country' ? open : null;
          }, MODAL_WAIT_MS, shouldAbort, POLL_MS);
        case 3:
          modal = _context46.v;
          if (modal) {
            _context46.n = 4;
            break;
          }
          return _context46.a(2);
        case 4:
          search = modal.querySelector(COUNTRY_SEARCH_SELECTOR);
          if (search) fillTextInputWithoutBlur(search, desired);
          _context46.n = 5;
          return waitForPositiveResultWithAbort(function () {
            return findCountryItem(modal, desired);
          }, COUNTRY_ITEM_WAIT_MS, shouldAbort, POLL_MS);
        case 5:
          item = _context46.v;
          if (!item) {
            _context46.n = 7;
            break;
          }
          item.click();
          _context46.n = 6;
          return waitForModalClosed(MODAL_CLOSE_WAIT_MS, shouldAbort);
        case 6:
          return _context46.a(2);
        case 7:
          // Nothing matched — leave the selection as it was and close the picker.
          back = findModalButton(modal, /^back$|^close$|^cancel$/i);
          if (back) back.click();else document.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            bubbles: true
          }));
          _context46.n = 8;
          return waitForModalClosed(MODAL_CLOSE_WAIT_MS, shouldAbort);
        case 8:
          return _context46.a(2);
      }
    }, _callee46);
  }));
  return _fillCountryPicker.apply(this, arguments);
}
function findInstitutionSuggestion(name) {
  var _scored$find, _scored$find2;
  var wanted = normalizeComparisonText(name);
  var items = Array.from(document.querySelectorAll(INSTITUTION_SUGGESTION_SELECTOR)).filter(isElementVisible);
  var scored = items.map(function (item) {
    return {
      item: item,
      school: normalizeComparisonText(cleanText(item.textContent).split('|')[0])
    };
  }).filter(function (_ref5) {
    var school = _ref5.school;
    return school;
  });
  return ((_scored$find = scored.find(function (_ref6) {
    var school = _ref6.school;
    return school === wanted;
  })) === null || _scored$find === void 0 ? void 0 : _scored$find.item) || ((_scored$find2 = scored.find(function (_ref7) {
    var school = _ref7.school;
    return school.startsWith(wanted) || wanted.startsWith(school);
  })) === null || _scored$find2 === void 0 ? void 0 : _scored$find2.item) || null;
}

// The institution name is an autocomplete (POST api/education-institutions as you type); picking a
// suggestion pre-populates the row's country/city/state. Type the profile's school, take the
// matching suggestion when one comes back, otherwise keep the typed text.
function fillInstitutionName(_x12, _x13) {
  return _fillInstitutionName.apply(this, arguments);
} // "Job Duties *" on an Employer #N row (tenant-toggled, seen required 2026-10-23 on INDEX ANALYTICS)
// is a CKEditor 4 classic editor: `div#employment-job-duties-field-N[data-floating-error-notice-type=
// "ckeditor"]` → `iframe[title="Editor, editorN"]` (src="", same origin) whose body is the editable.
// No scan saw it, so Submit answered "Entry must be provided" under every row. The content script
// cannot reach the page's CKEDITOR object, so the text goes in the way typing does: select the
// editable, insertHTML (a native input event), framed by a keydown / keyup pair — CKEditor's undo
// manager counts the input and turns the keyup into its own `change` event, which Paycom's form binds.
function _fillInstitutionName() {
  _fillInstitutionName = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee47(input, answer) {
    var _input$blur;
    var shouldAbort,
      name,
      suggestion,
      _args47 = arguments;
    return autofill_regenerator().w(function (_context47) {
      while (1) switch (_context47.n) {
        case 0:
          shouldAbort = _args47.length > 2 && _args47[2] !== undefined ? _args47[2] : autofill_NEVER_ABORT;
          name = cleanText(answer);
          if (!(!input || !name || shouldAbort())) {
            _context47.n = 1;
            break;
          }
          return _context47.a(2);
        case 1:
          fillTextInputWithoutBlur(input, name);
          _context47.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return findInstitutionSuggestion(name);
          }, SUGGESTION_WAIT_MS, shouldAbort, POLL_MS);
        case 2:
          suggestion = _context47.v;
          if (!suggestion) {
            _context47.n = 4;
            break;
          }
          suggestion.click();
          _context47.n = 3;
          return sleep(300);
        case 3:
          if (!cleanText(input.value)) fillTextInput(input, name);
          return _context47.a(2);
        case 4:
          input.dispatchEvent(new Event('change', {
            bubbles: true
          }));
          (_input$blur = input.blur) === null || _input$blur === void 0 || _input$blur.call(input);
        case 5:
          return _context47.a(2);
      }
    }, _callee47);
  }));
  return _fillInstitutionName.apply(this, arguments);
}
var RICH_TEXT_WRAPPER_SELECTOR = '[data-floating-error-notice-type="ckeditor"]';
var RICH_TEXT_READY_WAIT_MS = 3000;
function isRichTextWrapper(element) {
  var _element$matches3;
  return Boolean(element === null || element === void 0 || (_element$matches3 = element.matches) === null || _element$matches3 === void 0 ? void 0 : _element$matches3.call(element, RICH_TEXT_WRAPPER_SELECTOR));
}
function getRichTextBody(wrapper) {
  var _wrapper$querySelecto2;
  var iframe = wrapper === null || wrapper === void 0 || (_wrapper$querySelecto2 = wrapper.querySelector) === null || _wrapper$querySelecto2 === void 0 ? void 0 : _wrapper$querySelecto2.call(wrapper, 'iframe');
  try {
    var _ref8, _iframe$contentWindow;
    var body = (_ref8 = (iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) || (iframe === null || iframe === void 0 || (_iframe$contentWindow = iframe.contentWindow) === null || _iframe$contentWindow === void 0 ? void 0 : _iframe$contentWindow.document)) === null || _ref8 === void 0 ? void 0 : _ref8.body;
    // The editor boots asynchronously: the body is editable only once CKEditor took it over.
    return body && (body.isContentEditable || body.getAttribute('contenteditable') === 'true') ? body : null;
  } catch (_unused) {
    return null;
  }
}
var escapeHtml = function escapeHtml(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};
function fillRichTextEditor(_x14, _x15) {
  return _fillRichTextEditor.apply(this, arguments);
}
function _fillRichTextEditor() {
  _fillRichTextEditor = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee48(wrapper, answer) {
    var _win$focus, _body$focus, _win$getSelection, _win$dispatchEvent;
    var shouldAbort,
      lines,
      body,
      doc,
      win,
      html,
      range,
      selection,
      KeyboardEventCtor,
      key,
      inserted,
      _doc$execCommand,
      _args48 = arguments;
    return autofill_regenerator().w(function (_context48) {
      while (1) switch (_context48.n) {
        case 0:
          shouldAbort = _args48.length > 2 && _args48[2] !== undefined ? _args48[2] : autofill_NEVER_ABORT;
          lines = (Array.isArray(answer) ? answer : String(answer !== null && answer !== void 0 ? answer : '').split(/\n+/)).map(function (line) {
            return cleanText(toPlainPunctuation(line));
          }).filter(Boolean);
          if (!(lines.length === 0 || shouldAbort())) {
            _context48.n = 1;
            break;
          }
          return _context48.a(2);
        case 1:
          _context48.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return getRichTextBody(wrapper);
          }, RICH_TEXT_READY_WAIT_MS, shouldAbort, POLL_MS);
        case 2:
          body = _context48.v;
          if (body) {
            _context48.n = 3;
            break;
          }
          throw new Error("".concat(PLATFORM, ": the ").concat(cleanQuestion(textOf(wrapper.querySelector('p'))) || 'rich-text', " editor never became editable"));
        case 3:
          if (!cleanText(body.textContent)) {
            _context48.n = 4;
            break;
          }
          return _context48.a(2);
        case 4:
          // already written — never overwrite the applicant's text
          doc = body.ownerDocument;
          win = doc.defaultView;
          html = lines.map(function (line) {
            return "<p>".concat(escapeHtml(line), "</p>");
          }).join('');
          win === null || win === void 0 || (_win$focus = win.focus) === null || _win$focus === void 0 || _win$focus.call(win);
          (_body$focus = body.focus) === null || _body$focus === void 0 || _body$focus.call(body);
          range = doc.createRange();
          range.selectNodeContents(body);
          selection = win === null || win === void 0 || (_win$getSelection = win.getSelection) === null || _win$getSelection === void 0 ? void 0 : _win$getSelection.call(win);
          selection === null || selection === void 0 || selection.removeAllRanges();
          selection === null || selection === void 0 || selection.addRange(range);
          KeyboardEventCtor = (win === null || win === void 0 ? void 0 : win.KeyboardEvent) || KeyboardEvent;
          key = function key(type) {
            return body.dispatchEvent(new KeyboardEventCtor(type, {
              bubbles: true,
              cancelable: true,
              key: ' ',
              code: 'Space',
              keyCode: 32,
              which: 32
            }));
          };
          key('keydown');
          inserted = false;
          try {
            inserted = ((_doc$execCommand = doc.execCommand) === null || _doc$execCommand === void 0 ? void 0 : _doc$execCommand.call(doc, 'insertHTML', false, html)) === true;
          } catch (_unused3) {
            inserted = false;
          }
          if (!inserted || !cleanText(body.textContent)) {
            body.innerHTML = html;
            body.dispatchEvent(new ((win === null || win === void 0 ? void 0 : win.Event) || Event)('input', {
              bubbles: true
            }));
          }
          key('keyup');
          body.dispatchEvent(new ((win === null || win === void 0 ? void 0 : win.FocusEvent) || FocusEvent)('blur'));
          win === null || win === void 0 || (_win$dispatchEvent = win.dispatchEvent) === null || _win$dispatchEvent === void 0 || _win$dispatchEvent.call(win, new ((win === null || win === void 0 ? void 0 : win.FocusEvent) || FocusEvent)('blur'));
        case 5:
          return _context48.a(2);
      }
    }, _callee48);
  }));
  return _fillRichTextEditor.apply(this, arguments);
}
var isFileAnswer = function isFileAnswer(answer) {
  return Boolean(answer) && autofill_typeof(answer) === 'object' && answer.type === 'file' && Boolean(answer.base64);
};
function describeAcceptList(accept) {
  var tokens = String(accept !== null && accept !== void 0 ? accept : '').split(',').map(function (token) {
    return token.trim();
  }).filter(Boolean);
  return tokens.length > 0 ? tokens.join(' / ') : 'a document';
}
function dropzoneShowsFile(zone, fileName) {
  if (!zone) return false;
  var text = cleanText(zone.textContent);
  if (fileName && text.toLowerCase().includes(String(fileName).toLowerCase())) return true;
  if (zone.querySelector('[aria-label*="remove" i], [aria-label*="delete" i], [data-testid*="remove" i], [data-testid*="delete" i]')) return true;
  return !zone.querySelector('input[type="file"]') && !/upload a file/i.test(text);
}
function dismissResumeParseModal() {
  var modal = getOpenModal();
  if (getModalKind(modal) !== 'resume-parse') return false;
  var decline = findModalButton(modal, /only attach|^no\b/i) || findModalButton(modal, /^cancel$|^close$/i);
  if (!decline) return false;
  decline.click();
  return true;
}
function fillDocumentDropzone(_x16, _x17, _x18) {
  return _fillDocumentDropzone.apply(this, arguments);
} // Section-leaf fill: dispatch on what the LIVE control is (the state control is a text input until
// a country is picked, then a select — the leaf's kind is pinned at detection).
function _fillDocumentDropzone() {
  _fillDocumentDropzone = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee49(fieldId, field, answer) {
    var _ref41,
      _ref41$shouldAbort,
      shouldAbort,
      _ref41$coverLetter,
      coverLetter,
      zone,
      input,
      accept,
      fileAnswer,
      deadline,
      _args49 = arguments;
    return autofill_regenerator().w(function (_context49) {
      while (1) switch (_context49.n) {
        case 0:
          _ref41 = _args49.length > 3 && _args49[3] !== undefined ? _args49[3] : {}, _ref41$shouldAbort = _ref41.shouldAbort, shouldAbort = _ref41$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref41$shouldAbort, _ref41$coverLetter = _ref41.coverLetter, coverLetter = _ref41$coverLetter === void 0 ? false : _ref41$coverLetter;
          zone = liveDropzone(fieldId, field);
          input = getFileInputInsideField(zone);
          if (input) {
            _context49.n = 1;
            break;
          }
          throw new Error("".concat(PLATFORM, ": upload control for ").concat(fieldId, " not found"));
        case 1:
          accept = input.getAttribute('accept') || '';
          fileAnswer = answer;
          if (!(coverLetter && typeof answer === 'string' && answer.trim())) {
            _context49.n = 2;
            break;
          }
          fileAnswer = acceptAllowsPlainText(accept) ? createPlainTextFileAnswer(answer, {
            fileName: 'cover-letter.txt'
          }) : null;
          if (fileAnswer) {
            _context49.n = 2;
            break;
          }
          throw new Error("".concat(PLATFORM, ": this field only accepts ").concat(describeAcceptList(accept), " \u2014 the cover letter came back as text"));
        case 2:
          if (isFileAnswer(fileAnswer)) {
            _context49.n = 3;
            break;
          }
          throw new Error("".concat(PLATFORM, ": no file to upload for ").concat(fieldId));
        case 3:
          if (fileMatchesAccept(fileAnswer, accept)) {
            _context49.n = 4;
            break;
          }
          throw new Error("".concat(PLATFORM, ": this field only accepts ").concat(describeAcceptList(accept), " \u2014 \"").concat(fileAnswer.fileName, "\" cannot be attached"));
        case 4:
          fillFileInput(input, fileAnswer.fileName, fileAnswer.base64, fileAnswer.mimeType);

          // Paycom posts the file to its upload store and re-renders the dropzone with the file; a parse
          // prompt ("Do you want to use this resume/CV to fill out the application?") may pop — decline it
          // so the profile stays the source of truth.
          deadline = Date.now() + UPLOAD_SETTLE_MS;
        case 5:
          if (!(Date.now() < deadline && !shouldAbort())) {
            _context49.n = 8;
            break;
          }
          dismissResumeParseModal();
          if (!dropzoneShowsFile(liveDropzone(fieldId, field), fileAnswer.fileName)) {
            _context49.n = 6;
            break;
          }
          return _context49.a(2);
        case 6:
          _context49.n = 7;
          return sleep(250);
        case 7:
          _context49.n = 5;
          break;
        case 8:
          return _context49.a(2);
      }
    }, _callee49);
  }));
  return _fillDocumentDropzone.apply(this, arguments);
}
function fillLiveControl(_x19, _x20) {
  return _fillLiveControl.apply(this, arguments);
} // --- answer-type handlers -----------------------------------------------------------------------------
function _fillLiveControl() {
  _fillLiveControl = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee50(field, answer) {
    var _field$matches, _field$querySelector;
    var shouldAbort,
      _field$querySelector2,
      name,
      isPhone,
      text,
      _args50 = arguments;
    return autofill_regenerator().w(function (_context50) {
      while (1) switch (_context50.n) {
        case 0:
          shouldAbort = _args50.length > 2 && _args50[2] !== undefined ? _args50[2] : autofill_NEVER_ABORT;
          if (!(!field || isSkipAnswer(answer) || shouldAbort())) {
            _context50.n = 1;
            break;
          }
          return _context50.a(2);
        case 1:
          if (!isRichTextWrapper(field)) {
            _context50.n = 3;
            break;
          }
          _context50.n = 2;
          return fillRichTextEditor(field, answer, shouldAbort);
        case 2:
          return _context50.a(2);
        case 3:
          if (!getCountryWrapper(field)) {
            _context50.n = 5;
            break;
          }
          _context50.n = 4;
          return fillCountryPicker(field, answer, shouldAbort);
        case 4:
          return _context50.a(2);
        case 5:
          if (!isDateRoot(field)) {
            _context50.n = 6;
            break;
          }
          fillDateRoot(field, answer);
          return _context50.a(2);
        case 6:
          if (!((_field$matches = field.matches) !== null && _field$matches !== void 0 && _field$matches.call(field, '[role="radiogroup"]') || (_field$querySelector = field.querySelector) !== null && _field$querySelector !== void 0 && _field$querySelector.call(field, 'input[type="radio"]'))) {
            _context50.n = 8;
            break;
          }
          name = (_field$querySelector2 = field.querySelector('input[type="radio"]')) === null || _field$querySelector2 === void 0 ? void 0 : _field$querySelector2.getAttribute('name');
          _context50.n = 7;
          return chooseRadio(getRadiosByName(name), answer);
        case 7:
          return _context50.a(2);
        case 8:
          if (!(field.tagName === 'INPUT' && field.type === 'radio')) {
            _context50.n = 10;
            break;
          }
          _context50.n = 9;
          return chooseRadio(getRadiosByName(field.getAttribute('name')), answer);
        case 9:
          return _context50.a(2);
        case 10:
          if (!(field.tagName === 'SELECT')) {
            _context50.n = 12;
            break;
          }
          _context50.n = 11;
          return fillNativeSelect(field, answer);
        case 11:
          return _context50.a(2);
        case 12:
          if (!(field.tagName === 'INPUT' && field.type === 'checkbox')) {
            _context50.n = 14;
            break;
          }
          _context50.n = 13;
          return commitCheckbox(field, isAffirmative(answer));
        case 13:
          return _context50.a(2);
        case 14:
          if (!/-institution-name-field-/i.test(field.id || '')) {
            _context50.n = 16;
            break;
          }
          _context50.n = 15;
          return fillInstitutionName(field, answer, shouldAbort);
        case 15:
          return _context50.a(2);
        case 16:
          if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') {
            isPhone = /internationalphonenumbers$/i.test(field.getAttribute('data-testid') || '') || field.getAttribute('inputmode') === 'tel';
            text = isPhone ? normalizePhoneDigits(answer) : String(answer !== null && answer !== void 0 ? answer : '').trim();
            if (text) fillTextInput(field, text);
          }
        case 17:
          return _context50.a(2);
      }
    }, _callee50);
  }));
  return _fillLiveControl.apply(this, arguments);
}
function createBackendAnswerHandler(answerType) {
  var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref9$isMetadataReady = _ref9.isMetadataReady,
    isMetadataReady = _ref9$isMetadataReady === void 0 ? function () {
      return true;
    } : _ref9$isMetadataReady;
  return {
    isMetadataReady: isMetadataReady,
    fetchMissingMetadata: function () {
      var _fetchMissingMetadata = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee(metadata) {
        return autofill_regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, metadata);
          }
        }, _callee);
      }));
      function fetchMissingMetadata(_x21) {
        return _fetchMissingMetadata.apply(this, arguments);
      }
      return fetchMissingMetadata;
    }(),
    generateAnswer: function generateAnswer(question, metadata, fieldId) {
      var _metadata$options, _metadata$referenceQa;
      return getAnswer(question, answerType, (_metadata$options = metadata.options) !== null && _metadata$options !== void 0 ? _metadata$options : [], metadata.constraints, fieldId, true, (_metadata$referenceQa = metadata.referenceQaPairs) !== null && _metadata$referenceQa !== void 0 ? _metadata$referenceQa : []);
    }
  };
}
var ANSWER_TYPE_HANDLERS = new Map([['text', createBackendAnswerHandler('text')], ['single-select', createBackendAnswerHandler('single-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options) && metadata.options.length > 0;
  }
})], ['multi-select', createBackendAnswerHandler('multi-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options) && metadata.options.length > 0;
  }
})], ['resume', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee2(metadata) {
      return autofill_regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            return _context2.a(2, metadata);
        }
      }, _callee2);
    }));
    function fetchMissingMetadata(_x22) {
      return _fetchMissingMetadata2.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee3(_question, metadata) {
      var _metadata$constraints, _metadata$constraints2;
      var required, accept, noFile, resume, _t;
      return autofill_regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            required = Boolean((_metadata$constraints = metadata.constraints) === null || _metadata$constraints === void 0 ? void 0 : _metadata$constraints.required);
            accept = (_metadata$constraints2 = metadata.constraints) === null || _metadata$constraints2 === void 0 ? void 0 : _metadata$constraints2.accept;
            noFile = function noFile() {
              return required ? {
                type: 'error',
                error: "Resume is required, but no resume the form accepts (".concat(describeAcceptList(accept), ") is available to upload.")
              } : {
                type: 'skip'
              };
            };
            _context3.p = 1;
            _context3.n = 2;
            return getResumeForAutofill();
          case 2:
            resume = _context3.v;
            return _context3.a(2, isFileAnswer(resume) && fileMatchesAccept(resume, accept) ? resume : noFile());
          case 3:
            _context3.p = 3;
            _t = _context3.v;
            console.warn("[".concat(PLATFORM, "][resume] failed to get resume:"), _t);
            return _context3.a(2, noFile());
        }
      }, _callee3, null, [[1, 3]]);
    }));
    function generateAnswer(_x23, _x24) {
      return _generateAnswer.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}], ['cover_letter', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee4(metadata) {
      return autofill_regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            return _context4.a(2, metadata);
        }
      }, _callee4);
    }));
    function fetchMissingMetadata(_x25) {
      return _fetchMissingMetadata3.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee5(_question, metadata) {
      var _metadata$constraints3;
      var constraints, answer, _t2;
      return autofill_regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            constraints = autofill_objectSpread(autofill_objectSpread({}, (_metadata$constraints3 = metadata === null || metadata === void 0 ? void 0 : metadata.constraints) !== null && _metadata$constraints3 !== void 0 ? _metadata$constraints3 : {}), {}, {
              coverLetterOutput: 'file'
            });
            _context5.p = 1;
            _context5.n = 2;
            return getCoverLetterForAutofill(constraints);
          case 2:
            answer = _context5.v;
            if (!(isFileAnswer(answer) && fileMatchesAccept(answer, constraints.accept))) {
              _context5.n = 3;
              break;
            }
            return _context5.a(2, answer);
          case 3:
            if (!(typeof answer === 'string' && answer.trim() && acceptAllowsPlainText(constraints.accept))) {
              _context5.n = 4;
              break;
            }
            return _context5.a(2, answer);
          case 4:
            return _context5.a(2, {
              type: 'skip'
            });
          case 5:
            _context5.p = 5;
            _t2 = _context5.v;
            console.warn("[".concat(PLATFORM, "][cover_letter] failed to get cover letter:"), _t2);
            return _context5.a(2, {
              type: 'skip'
            });
        }
      }, _callee5, null, [[1, 5]]);
    }));
    function generateAnswer(_x26, _x27) {
      return _generateAnswer2.apply(this, arguments);
    }
    return generateAnswer;
  }()
}],
// Tenant-defined document questions ("Question Document Upload"): nothing in the profile fits.
['file', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee6(metadata) {
      return autofill_regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            return _context6.a(2, metadata);
        }
      }, _callee6);
    }));
    function fetchMissingMetadata(_x28) {
      return _fetchMissingMetadata4.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee7() {
      return autofill_regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            return _context7.a(2, {
              type: 'skip'
            });
        }
      }, _callee7);
    }));
    function generateAnswer() {
      return _generateAnswer3.apply(this, arguments);
    }
    return generateAnswer;
  }()
}], ['paycom-confirm-email', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata5 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee8(metadata) {
      return autofill_regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            return _context8.a(2, metadata);
        }
      }, _callee8);
    }));
    function fetchMissingMetadata(_x29) {
      return _fetchMissingMetadata5.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee9(question, metadata, fieldId) {
      var _document$getElementB3, _metadata$referenceQa2;
      var typed;
      return autofill_regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            typed = cleanText((_document$getElementB3 = document.getElementById(SIGNUP_EMAIL_ID)) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.value);
            if (!typed) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2, typed);
          case 1:
            return _context9.a(2, getAnswer('Email Address', 'text', [], metadata.constraints, fieldId, true, (_metadata$referenceQa2 = metadata.referenceQaPairs) !== null && _metadata$referenceQa2 !== void 0 ? _metadata$referenceQa2 : []));
        }
      }, _callee9);
    }));
    function generateAnswer(_x30, _x31, _x32) {
      return _generateAnswer4.apply(this, arguments);
    }
    return generateAnswer;
  }()
}], ['paycom-middle-name', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata6 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee0(metadata) {
      return autofill_regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            return _context0.a(2, metadata);
        }
      }, _callee0);
    }));
    function fetchMissingMetadata(_x33) {
      return _fetchMissingMetadata6.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer5 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee1(question, metadata, fieldId) {
      var answer, _metadata$referenceQa3, text, _t3;
      return autofill_regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            answer = null;
            _context1.p = 1;
            _context1.n = 2;
            return getAnswer(question, 'text', [], metadata.constraints, fieldId, true, (_metadata$referenceQa3 = metadata.referenceQaPairs) !== null && _metadata$referenceQa3 !== void 0 ? _metadata$referenceQa3 : []);
          case 2:
            answer = _context1.v;
            _context1.n = 4;
            break;
          case 3:
            _context1.p = 3;
            _t3 = _context1.v;
            console.warn("[".concat(PLATFORM, "][middle-name] answer failed:"), _t3);
          case 4:
            if (!(answer && autofill_typeof(answer) === 'object' && answer.type !== 'skip')) {
              _context1.n = 5;
              break;
            }
            return _context1.a(2, answer);
          case 5:
            // review / error sentinels
            text = typeof answer === 'string' ? answer.trim() : ''; // `false` = "I do not have a middle name" (the fill ticks the box instead of leaving the
            // required input blank).
            return _context1.a(2, text || false);
        }
      }, _callee1, null, [[1, 3]]);
    }));
    function generateAnswer(_x34, _x35, _x36) {
      return _generateAnswer5.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  stringifyAnswerForPanel: function stringifyAnswerForPanel(answer) {
    return answer === false ? 'No middle name' : undefined;
  }
}], ['paycom-affirm', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata7 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee10(metadata) {
      return autofill_regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            return _context10.a(2, metadata);
        }
      }, _callee10);
    }));
    function fetchMissingMetadata(_x37) {
      return _fetchMissingMetadata7.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer6 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee11() {
      return autofill_regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            return _context11.a(2, 'Yes');
        }
      }, _callee11);
    }));
    function generateAnswer() {
      return _generateAnswer6.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}], ['paycom-decline', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata8 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee12(metadata) {
      return autofill_regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            return _context12.a(2, metadata);
        }
      }, _callee12);
    }));
    function fetchMissingMetadata(_x38) {
      return _fetchMissingMetadata8.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer7 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee13() {
      return autofill_regenerator().w(function (_context13) {
        while (1) switch (_context13.n) {
          case 0:
            return _context13.a(2, 'No');
        }
      }, _callee13);
    }));
    function generateAnswer() {
      return _generateAnswer7.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}],
// The signature is the legal name the application already carries; the engine only answers when
// those boxes are still empty.
['paycom-signature', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata9 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee14(metadata) {
      return autofill_regenerator().w(function (_context14) {
        while (1) switch (_context14.n) {
          case 0:
            return _context14.a(2, metadata);
        }
      }, _callee14);
    }));
    function fetchMissingMetadata(_x39) {
      return _fetchMissingMetadata9.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer8 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee15(_question, metadata, fieldId) {
      var _metadata$referenceQa4;
      return autofill_regenerator().w(function (_context15) {
        while (1) switch (_context15.n) {
          case 0:
            return _context15.a(2, readLegalName() || getAnswer('Full legal name', 'text', [], metadata.constraints, fieldId, true, (_metadata$referenceQa4 = metadata.referenceQaPairs) !== null && _metadata$referenceQa4 !== void 0 ? _metadata$referenceQa4 : []));
        }
      }, _callee15);
    }));
    function generateAnswer(_x40, _x41, _x42) {
      return _generateAnswer8.apply(this, arguments);
    }
    return generateAnswer;
  }()
}], ['verification_code', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata0 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee16(metadata) {
      return autofill_regenerator().w(function (_context16) {
        while (1) switch (_context16.n) {
          case 0:
            return _context16.a(2, metadata);
        }
      }, _callee16);
    }));
    function fetchMissingMetadata(_x43) {
      return _fetchMissingMetadata0.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer9 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee17() {
      var result, _result, _t4, _t5;
      return autofill_regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            result = null;
            _context17.p = 1;
            _context17.n = 2;
            return getVerificationCodeForAutofill();
          case 2:
            result = _context17.v;
            _context17.n = 4;
            break;
          case 3:
            _context17.p = 3;
            _t4 = _context17.v;
            console.warn("[".concat(PLATFORM, "][verification_code] failed:"), _t4);
          case 4:
            if (!(typeof result === 'string' && result)) {
              _context17.n = 5;
              break;
            }
            return _context17.a(2, result);
          case 5:
            _context17.p = 5;
            _context17.n = 6;
            return reportAutofillVerificationFailure({
              platform: PLATFORM,
              reason: ((_result = result) === null || _result === void 0 ? void 0 : _result.reason) === 'mailbox_not_connected' ? 'mailbox_not_connected' : 'not_found'
            });
          case 6:
            _context17.n = 8;
            break;
          case 7:
            _context17.p = 7;
            _t5 = _context17.v;
            console.warn("[".concat(PLATFORM, "][verification_code] report failed:"), _t5);
          case 8:
            return _context17.a(2, {
              type: 'skip'
            });
        }
      }, _callee17, null, [[5, 7], [1, 3]]);
    }));
    function generateAnswer() {
      return _generateAnswer9.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}], ['captcha', createCaptchaAnswerTypeHandler()]]);

// --- field-kind handlers ------------------------------------------------------------------------------

var FIELD_KIND_HANDLERS = new Map([['text', (/*#__PURE__*/function () {
  var _ref0 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee18(fieldId, _question, answer, field) {
    var input;
    return autofill_regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          input = liveControl(fieldId, field);
          if (input && !isSkipAnswer(answer)) fillTextInput(input, toPlainPunctuation(answer));
        case 1:
          return _context18.a(2);
      }
    }, _callee18);
  }));
  return function (_x44, _x45, _x46, _x47) {
    return _ref0.apply(this, arguments);
  };
}())], ['textarea', (/*#__PURE__*/function () {
  var _ref1 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee19(fieldId, _question, answer, field) {
    var input;
    return autofill_regenerator().w(function (_context19) {
      while (1) switch (_context19.n) {
        case 0:
          input = liveControl(fieldId, field);
          if (input && !isSkipAnswer(answer)) fillTextInput(input, toPlainPunctuation(answer));
        case 1:
          return _context19.a(2);
      }
    }, _callee19);
  }));
  return function (_x48, _x49, _x50, _x51) {
    return _ref1.apply(this, arguments);
  };
}())], ['phone', (/*#__PURE__*/function () {
  var _ref10 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee20(fieldId, _question, answer, field) {
    var input, digits;
    return autofill_regenerator().w(function (_context20) {
      while (1) switch (_context20.n) {
        case 0:
          input = liveControl(fieldId, field);
          digits = normalizePhoneDigits(answer);
          if (input && digits) fillTextInput(input, digits);
        case 1:
          return _context20.a(2);
      }
    }, _callee20);
  }));
  return function (_x52, _x53, _x54, _x55) {
    return _ref10.apply(this, arguments);
  };
}())], ['select-native', (/*#__PURE__*/function () {
  var _ref11 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee21(fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context21) {
      while (1) switch (_context21.n) {
        case 0:
          _context21.n = 1;
          return fillNativeSelect(liveControl(fieldId, field), answer);
        case 1:
          return _context21.a(2);
      }
    }, _callee21);
  }));
  return function (_x56, _x57, _x58, _x59) {
    return _ref11.apply(this, arguments);
  };
}())], ['radio', (/*#__PURE__*/function () {
  var _ref12 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee22(fieldId, _question, answer) {
    return autofill_regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          _context22.n = 1;
          return chooseRadio(getRadiosByName(fieldId), answer);
        case 1:
          return _context22.a(2);
      }
    }, _callee22);
  }));
  return function (_x60, _x61, _x62) {
    return _ref12.apply(this, arguments);
  };
}())], ['checkbox', (/*#__PURE__*/function () {
  var _ref13 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee23(fieldId, _question, answer, field) {
    var _ref14,
      _ref14$shouldAbort,
      shouldAbort,
      input,
      _args23 = arguments;
    return autofill_regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          _ref14 = _args23.length > 4 && _args23[4] !== undefined ? _args23[4] : {}, _ref14$shouldAbort = _ref14.shouldAbort, shouldAbort = _ref14$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref14$shouldAbort;
          input = liveControl(fieldId, field);
          if (!((input === null || input === void 0 ? void 0 : input.type) === 'checkbox')) {
            _context23.n = 1;
            break;
          }
          _context23.n = 1;
          return commitCheckbox(input, isAffirmative(answer));
        case 1:
          if (!getPolicyDialog()) {
            _context23.n = 2;
            break;
          }
          _context23.n = 2;
          return acceptPolicyDialog(shouldAbort);
        case 2:
          return _context23.a(2);
      }
    }, _callee23);
  }));
  return function (_x63, _x64, _x65, _x66) {
    return _ref13.apply(this, arguments);
  };
}())], ['middle-name', (/*#__PURE__*/function () {
  var _ref15 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee24(_fieldId, _question, answer) {
    var input, optOut, text;
    return autofill_regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          input = document.getElementById(MIDDLE_NAME_FIELD_ID);
          optOut = document.querySelector("input[type=\"checkbox\"][name=\"".concat(NO_MIDDLE_NAME_CHECKBOX_NAME, "\"]"));
          text = answer === false ? '' : cleanText(answer);
          if (text) {
            _context24.n = 2;
            break;
          }
          _context24.n = 1;
          return commitCheckbox(optOut, true);
        case 1:
          return _context24.a(2);
        case 2:
          _context24.n = 3;
          return commitCheckbox(optOut, false);
        case 3:
          if (input) fillTextInput(input, text);
        case 4:
          return _context24.a(2);
      }
    }, _callee24);
  }));
  return function (_x67, _x68, _x69) {
    return _ref15.apply(this, arguments);
  };
}())], ['date', (/*#__PURE__*/function () {
  var _ref16 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee25(fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context25) {
      while (1) switch (_context25.n) {
        case 0:
          fillDateRoot(liveControl(fieldId, field), answer);
        case 1:
          return _context25.a(2);
      }
    }, _callee25);
  }));
  return function (_x70, _x71, _x72, _x73) {
    return _ref16.apply(this, arguments);
  };
}())], ['country', (/*#__PURE__*/function () {
  var _ref17 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee26(fieldId, _question, answer, field) {
    var _ref18,
      _ref18$shouldAbort,
      shouldAbort,
      _args26 = arguments;
    return autofill_regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          _ref18 = _args26.length > 4 && _args26[4] !== undefined ? _args26[4] : {}, _ref18$shouldAbort = _ref18.shouldAbort, shouldAbort = _ref18$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref18$shouldAbort;
          _context26.n = 1;
          return fillCountryPicker(liveControl(fieldId, field), answer, shouldAbort);
        case 1:
          return _context26.a(2);
      }
    }, _callee26);
  }));
  return function (_x74, _x75, _x76, _x77) {
    return _ref17.apply(this, arguments);
  };
}())], ['institution', (/*#__PURE__*/function () {
  var _ref19 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee27(fieldId, _question, answer, field) {
    var _ref20,
      _ref20$shouldAbort,
      shouldAbort,
      _args27 = arguments;
    return autofill_regenerator().w(function (_context27) {
      while (1) switch (_context27.n) {
        case 0:
          _ref20 = _args27.length > 4 && _args27[4] !== undefined ? _args27[4] : {}, _ref20$shouldAbort = _ref20.shouldAbort, shouldAbort = _ref20$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref20$shouldAbort;
          _context27.n = 1;
          return fillInstitutionName(liveControl(fieldId, field), answer, shouldAbort);
        case 1:
          return _context27.a(2);
      }
    }, _callee27);
  }));
  return function (_x78, _x79, _x80, _x81) {
    return _ref19.apply(this, arguments);
  };
}())], ['resume', (/*#__PURE__*/function () {
  var _ref21 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee28(fieldId, _question, answer, field) {
    var _ref22,
      _ref22$shouldAbort,
      shouldAbort,
      _args28 = arguments;
    return autofill_regenerator().w(function (_context28) {
      while (1) switch (_context28.n) {
        case 0:
          _ref22 = _args28.length > 4 && _args28[4] !== undefined ? _args28[4] : {}, _ref22$shouldAbort = _ref22.shouldAbort, shouldAbort = _ref22$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref22$shouldAbort;
          _context28.n = 1;
          return fillDocumentDropzone(fieldId, field, answer, {
            shouldAbort: shouldAbort
          });
        case 1:
          return _context28.a(2);
      }
    }, _callee28);
  }));
  return function (_x82, _x83, _x84, _x85) {
    return _ref21.apply(this, arguments);
  };
}())], ['cover_letter', (/*#__PURE__*/function () {
  var _ref23 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee29(fieldId, _question, answer, field) {
    var _ref24,
      _ref24$shouldAbort,
      shouldAbort,
      _args29 = arguments;
    return autofill_regenerator().w(function (_context29) {
      while (1) switch (_context29.n) {
        case 0:
          _ref24 = _args29.length > 4 && _args29[4] !== undefined ? _args29[4] : {}, _ref24$shouldAbort = _ref24.shouldAbort, shouldAbort = _ref24$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref24$shouldAbort;
          _context29.n = 1;
          return fillDocumentDropzone(fieldId, field, answer, {
            shouldAbort: shouldAbort,
            coverLetter: true
          });
        case 1:
          return _context29.a(2);
      }
    }, _callee29);
  }));
  return function (_x86, _x87, _x88, _x89) {
    return _ref23.apply(this, arguments);
  };
}())], ['file', /*#__PURE__*/autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee30() {
  return autofill_regenerator().w(function (_context30) {
    while (1) switch (_context30.n) {
      case 0:
        return _context30.a(2);
    }
  }, _callee30);
}))], ['verification_code', (/*#__PURE__*/function () {
  var _ref26 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee31(fieldId, _question, answer, field) {
    var input;
    return autofill_regenerator().w(function (_context31) {
      while (1) switch (_context31.n) {
        case 0:
          input = liveControl(fieldId, field) || Array.from(document.querySelectorAll('input')).find(function (candidate) {
            return /verification code/i.test(getControlQuestion(candidate));
          });
          if (input && typeof answer === 'string' && answer) fillTextInput(input, answer);
        case 1:
          return _context31.a(2);
      }
    }, _callee31);
  }));
  return function (_x90, _x91, _x92, _x93) {
    return _ref26.apply(this, arguments);
  };
}())], ['captcha', createCaptchaFieldKindHandler()], ['paycom-signature', (/*#__PURE__*/function () {
  var _ref27 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee32(_fieldId, _question, answer, _field) {
    var _ref28,
      _ref28$shouldAbort,
      shouldAbort,
      _args32 = arguments;
    return autofill_regenerator().w(function (_context32) {
      while (1) switch (_context32.n) {
        case 0:
          _ref28 = _args32.length > 4 && _args32[4] !== undefined ? _args32[4] : {}, _ref28$shouldAbort = _ref28.shouldAbort, shouldAbort = _ref28$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref28$shouldAbort;
          _context32.n = 1;
          return signSignaturePad(isSkipAnswer(answer) ? '' : answer, shouldAbort);
        case 1:
          return _context32.a(2);
      }
    }, _callee32);
  }));
  return function (_x94, _x95, _x96, _x97) {
    return _ref27.apply(this, arguments);
  };
}())],
// Section-leaf base kind: the hierarchy wrapper hands the LIVE row control over as `field`.
['paycom-control', (/*#__PURE__*/function () {
  var _ref29 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee33(_fieldId, _question, answer, field) {
    var _ref30,
      _ref30$shouldAbort,
      shouldAbort,
      _args33 = arguments;
    return autofill_regenerator().w(function (_context33) {
      while (1) switch (_context33.n) {
        case 0:
          _ref30 = _args33.length > 4 && _args33[4] !== undefined ? _args33[4] : {}, _ref30$shouldAbort = _ref30.shouldAbort, shouldAbort = _ref30$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref30$shouldAbort;
          _context33.n = 1;
          return fillLiveControl(field, answer, shouldAbort);
        case 1:
          return _context33.a(2);
      }
    }, _callee33);
  }));
  return function (_x98, _x99, _x100, _x101) {
    return _ref29.apply(this, arguments);
  };
}())]]);

// --- repeatable sections (education / employment / references) -------------------------------------
//
// Rows are `Institution #N` / `Employer #N` / `Professional Reference #N` cards whose controls carry
// a 1-based row suffix (`education-major-field-2`); "Add Institution" & co append a row (row 1 can
// only be cleared, later rows get a "Remove" button), each row has an "I do not have an entry"
// opt-out. getRowField resolves controls by id from the row's suffix, so a re-render never leaves a
// stale node behind.

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
function sectionEntryState(entry) {
  var state = cleanText(locationPart(entry, 'state'));
  if (!state) return null;
  if (/^[A-Za-z]{2}$/.test(state)) return US_STATE_NAME_BY_CODE[state.toUpperCase()] || state;
  return state;
}
function sectionEntryCountry(entry) {
  var explicit = cleanText(entry === null || entry === void 0 ? void 0 : entry.country);
  if (explicit) return normalizeCountryName(explicit);
  var tokens = String((entry === null || entry === void 0 ? void 0 : entry.location) || '').split(',').map(function (token) {
    return token.trim();
  }).filter(Boolean);
  if (tokens.length >= 3) return normalizeCountryName(tokens[tokens.length - 1]);
  var state = cleanText(tokens[1]);
  if (!state) return null;
  var isUsState = Boolean(US_STATE_NAME_BY_CODE[state.toUpperCase()]) || Object.values(US_STATE_NAME_BY_CODE).some(function (name) {
    return name.toLowerCase() === state.toLowerCase();
  });
  return isUsState ? 'United States of America' : null;
}
var isCurrentEntry = function isCurrentEntry(entry) {
  return (entry === null || entry === void 0 ? void 0 : entry.isCurrent) === true || !cleanText(entry === null || entry === void 0 ? void 0 : entry.endDate);
};
var splitName = function splitName(name) {
  var tokens = cleanText(name).split(' ').filter(Boolean);
  if (tokens.length === 0) return {
    first: null,
    last: null
  };
  if (tokens.length === 1) return {
    first: tokens[0],
    last: null
  };
  return {
    first: tokens.slice(0, -1).join(' '),
    last: tokens[tokens.length - 1]
  };
};

// Months of the known period beyond the whole years (knownFrom → knownTo || today), for the Months
// select next to the Years input.
function referenceMonthsKnownRemainder(entry) {
  var _entry$knownFrom;
  var from = parseProfileDate(String((_entry$knownFrom = entry === null || entry === void 0 ? void 0 : entry.knownFrom) !== null && _entry$knownFrom !== void 0 ? _entry$knownFrom : ''));
  if (!from.year) return null;
  var now = new Date();
  var to = cleanText(entry === null || entry === void 0 ? void 0 : entry.knownTo) ? parseProfileDate(String(entry.knownTo)) : {
    month: String(now.getMonth() + 1),
    year: String(now.getFullYear())
  };
  if (!to.year) return null;
  var months = (Number(to.year) - Number(from.year)) * 12 + ((Number(to.month) || 1) - (Number(from.month) || 1));
  return String(Math.max(0, months) % 12);
}
function getRowSuffix(rowEl) {
  var _rowEl$matches, _rowEl$querySelector;
  var anchor = rowEl !== null && rowEl !== void 0 && (_rowEl$matches = rowEl.matches) !== null && _rowEl$matches !== void 0 && _rowEl$matches.call(rowEl, '[id]') && /-\d+$/.test(rowEl.id) ? rowEl : rowEl === null || rowEl === void 0 || (_rowEl$querySelector = rowEl.querySelector) === null || _rowEl$querySelector === void 0 ? void 0 : _rowEl$querySelector.call(rowEl, '[id$="-field-1"], [id*="-field-"]');
  var match = /-(\d+)$/.exec((anchor === null || anchor === void 0 ? void 0 : anchor.id) || '');
  return match ? match[1] : null;
}
function findRowElement(anchor) {
  var node = anchor.parentElement;
  while (node && node !== document.body) {
    var rowHeadings = Array.from(node.querySelectorAll('h3')).filter(function (heading) {
      return /#\s*\d+/.test(heading.textContent || '');
    });
    if (rowHeadings.length === 1) return node;
    if (rowHeadings.length > 1) break;
    node = node.parentElement;
  }
  return anchor.closest('.uiLibBasicCard') || anchor.parentElement || anchor;
}
function getSectionAnchors(anchorPrefix) {
  return Array.from(document.querySelectorAll("[id^=\"".concat(anchorPrefix, "\"]"))).map(function (element) {
    return {
      element: element,
      index: Number((element.id.match(/-(\d+)$/) || [])[1])
    };
  }).filter(function (entry) {
    return Number.isInteger(entry.index) && entry.index >= 0;
  }).sort(function (left, right) {
    return left.index - right.index;
  }).map(function (entry) {
    return entry.element;
  });
}
function findSectionContainer(anchorPrefix, addPattern) {
  var _anchor$closest;
  var anchor = document.querySelector("[id^=\"".concat(anchorPrefix, "\"]"));
  if (anchor) return anchor.closest('[id$="-section"]') || ((_anchor$closest = anchor.closest('.uiLibBasicCard')) === null || _anchor$closest === void 0 ? void 0 : _anchor$closest.parentElement) || document.body;
  var addButton = Array.from(document.querySelectorAll('button')).find(function (button) {
    return addPattern.test(cleanText(button.textContent));
  });
  return addButton ? addButton.closest('[id$="-section"]') || addButton.parentElement : null;
}
function getPaycomRowField(sectionPrefix, rowEl, mapping) {
  var suffix = getRowSuffix(rowEl);
  if (!suffix) return null;
  var id = "".concat(sectionPrefix, "-").concat(mapping.idKey, "-field-").concat(suffix);
  if (mapping.controlKind === 'radio') {
    var radio = document.querySelector("input[type=\"radio\"][name=\"".concat(cssEscape(id), "\"]"));
    if (!radio) return null;
    return {
      field: radio.closest('[role="radiogroup"]') || radio,
      fieldId: id
    };
  }
  var control = document.getElementById(id);
  if (!control || !isElementVisible(control)) return null;
  if (mapping.controlKind === 'country' && !getCountryWrapper(control)) return null;
  return {
    field: control,
    fieldId: id
  };
}
function createPaycomSection(_ref31) {
  var rootFieldId = _ref31.rootFieldId,
    rootQuestion = _ref31.rootQuestion,
    answerType = _ref31.answerType,
    profileSection = _ref31.profileSection,
    prefix = _ref31.prefix,
    anchorKey = _ref31.anchorKey,
    addPattern = _ref31.addPattern,
    rowLabel = _ref31.rowLabel,
    mappings = _ref31.mappings,
    aiContextPairs = _ref31.aiContextPairs;
  var anchorPrefix = "".concat(prefix, "-").concat(anchorKey, "-field-");
  return autofill_objectSpread(autofill_objectSpread({
    rootFieldId: rootFieldId,
    rootQuestion: rootQuestion,
    answerType: answerType,
    profileSection: profileSection,
    prefix: prefix,
    rowLabel: rowLabel,
    editorAppearTimeoutMs: 5000,
    getContainer: function getContainer() {
      return findSectionContainer(anchorPrefix, addPattern);
    },
    getRows: function getRows() {
      return getSectionAnchors(anchorPrefix).map(function (anchor) {
        return findRowElement(anchor);
      });
    },
    getRowField: function getRowField(rowEl, mapping) {
      return getPaycomRowField(prefix, rowEl, mapping);
    },
    classifyLeaf: function classifyLeaf(_mapping, fieldInfo) {
      return fieldInfo !== null && fieldInfo !== void 0 && fieldInfo.field && isRequiredControl(fieldInfo.field) ? {
        constraints: {
          required: true
        }
      } : {};
    },
    // Uncheck a stale "I do not have an entry" before filling — it disables the row's controls.
    clearRows: function () {
      var _clearRows = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee34() {
        return autofill_regenerator().w(function (_context34) {
          while (1) switch (_context34.n) {
            case 0:
              getSectionAnchors(anchorPrefix).forEach(function (anchor) {
                var suffix = (anchor.id.match(/-(\d+)$/) || [])[1];
                var optOut = document.querySelector("input[type=\"checkbox\"][name=\"".concat(prefix, "-has-opted-out-checkbox-").concat(suffix, "\"]"));
                if (optOut) setCheckbox(optOut, false);
              });
            case 1:
              return _context34.a(2);
          }
        }, _callee34);
      }));
      function clearRows() {
        return _clearRows.apply(this, arguments);
      }
      return clearRows;
    }(),
    addRow: function () {
      var _addRow = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee35(container) {
        var _ref32,
          _ref32$shouldAbort,
          shouldAbort,
          button,
          _args35 = arguments;
        return autofill_regenerator().w(function (_context35) {
          while (1) switch (_context35.n) {
            case 0:
              _ref32 = _args35.length > 1 && _args35[1] !== undefined ? _args35[1] : {}, _ref32$shouldAbort = _ref32.shouldAbort, shouldAbort = _ref32$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref32$shouldAbort;
              button = Array.from((container || document).querySelectorAll('button')).find(function (candidate) {
                return addPattern.test(cleanText(candidate.textContent));
              });
              if (!(!button || shouldAbort())) {
                _context35.n = 1;
                break;
              }
              return _context35.a(2);
            case 1:
              button.click();
              _context35.n = 2;
              return sleep(400);
            case 2:
              return _context35.a(2);
          }
        }, _callee35);
      }));
      function addRow(_x102) {
        return _addRow.apply(this, arguments);
      }
      return addRow;
    }()
  }, aiContextPairs ? {
    aiContextPairs: aiContextPairs
  } : {}), {}, {
    mappings: mappings.map(function (mapping) {
      return autofill_objectSpread({
        fieldKind: 'text',
        fieldHandlerKey: 'paycom-control'
      }, mapping);
    })
  });
}
var EDUCATION_SECTION = createPaycomSection({
  rootFieldId: 'educationHistory',
  rootQuestion: 'Education',
  answerType: 'educationHistory',
  profileSection: 'education',
  prefix: 'education',
  anchorKey: 'institution-type',
  addPattern: /^add institution$/i,
  rowLabel: function rowLabel(rowIndex) {
    return "Education ".concat(rowIndex + 1);
  },
  mappings: [{
    key: 'institutionType',
    idKey: 'institution-type',
    label: 'Institution type',
    resolveValue: function resolveValue(entry) {
      return deriveInstitutionType(entry === null || entry === void 0 ? void 0 : entry.degree) || 'University';
    }
  }, {
    key: 'institutionName',
    idKey: 'institution-name',
    label: 'Institution name',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.universityName) || (entry === null || entry === void 0 ? void 0 : entry.schoolName) || (entry === null || entry === void 0 ? void 0 : entry.institution) || null;
    }
  }, {
    key: 'country',
    idKey: 'country',
    label: 'Country',
    controlKind: 'country',
    resolveValue: function resolveValue(entry) {
      return sectionEntryCountry(entry);
    },
    waitForMappingKey: 'institutionName'
  }, {
    key: 'city',
    idKey: 'city',
    label: 'City',
    resolveValue: function resolveValue(entry) {
      return locationPart(entry, 'city');
    },
    waitForMappingKey: 'institutionName'
  }, {
    key: 'state',
    idKey: 'state',
    label: 'State / Province / Region',
    resolveValue: function resolveValue(entry) {
      return sectionEntryState(entry);
    },
    waitForMappingKey: 'country'
  }, {
    key: 'currentlyEnrolled',
    idKey: 'currently-enrolled',
    label: 'Currently enrolled',
    controlKind: 'radio',
    resolveValue: function resolveValue(entry) {
      return isCurrentEntry(entry) ? 'Yes' : 'No';
    }
  }, {
    key: 'graduated',
    idKey: 'graduated',
    label: 'Graduated',
    controlKind: 'radio',
    resolveValue: function resolveValue(entry) {
      return isCurrentEntry(entry) ? 'No' : 'Yes';
    }
  }, {
    key: 'startDate',
    idKey: 'start-date',
    label: 'Start date',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.startDate) || null;
    }
  }, {
    key: 'endDate',
    idKey: 'end-date',
    label: 'End date',
    resolveValue: function resolveValue(entry) {
      return isCurrentEntry(entry) ? null : (entry === null || entry === void 0 ? void 0 : entry.endDate) || (entry === null || entry === void 0 ? void 0 : entry.graduationDate) || null;
    }
  }, {
    key: 'degree',
    idKey: 'degree',
    label: 'Degree',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.degree) || null;
    }
  }, {
    key: 'major',
    idKey: 'major',
    label: 'Major',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.major) || (entry === null || entry === void 0 ? void 0 : entry.fieldOfStudy) || null;
    }
  }]
});
var EMPLOYMENT_SECTION = createPaycomSection({
  rootFieldId: 'workHistory',
  rootQuestion: 'Employment',
  answerType: 'workHistory',
  profileSection: 'workHistory',
  prefix: 'employment',
  anchorKey: 'employer-name',
  addPattern: /^add employer$/i,
  rowLabel: function rowLabel(rowIndex) {
    return "Employment ".concat(rowIndex + 1);
  },
  mappings: [{
    key: 'employerName',
    idKey: 'employer-name',
    label: 'Employer name',
    profileKey: 'companyName'
  },
  // No per-employer phone / address / supervisor in the profile — detected (hand-editable on the
  // panel), never guessed.
  {
    key: 'employerPhone',
    idKey: 'employer-phone-number',
    label: 'Employer phone number',
    resolveValue: function resolveValue() {
      return null;
    }
  }, {
    key: 'canContact',
    idKey: 'can-contact',
    label: 'Can contact',
    controlKind: 'radio',
    resolveValue: function resolveValue(entry) {
      return isCurrentEntry(entry) ? 'No' : 'Yes';
    }
  }, {
    key: 'currentEmployer',
    idKey: 'current-employer',
    label: 'Current employer',
    controlKind: 'radio',
    resolveValue: function resolveValue(entry) {
      return isCurrentEntry(entry) ? 'Yes' : 'No';
    }
  }, {
    key: 'startDate',
    idKey: 'start-date',
    label: 'Start date',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.startDate) || null;
    }
  }, {
    key: 'endDate',
    idKey: 'end-date',
    label: 'End date',
    resolveValue: function resolveValue(entry) {
      return isCurrentEntry(entry) ? null : (entry === null || entry === void 0 ? void 0 : entry.endDate) || null;
    }
  }, {
    key: 'country',
    idKey: 'country',
    label: 'Country',
    controlKind: 'country',
    resolveValue: function resolveValue(entry) {
      return sectionEntryCountry(entry);
    }
  }, {
    key: 'streetAddress',
    idKey: 'street-address',
    label: 'Address line 1',
    resolveValue: function resolveValue() {
      return null;
    }
  }, {
    key: 'streetAddress2',
    idKey: 'street-address-2',
    label: 'Address line 2',
    resolveValue: function resolveValue() {
      return null;
    }
  }, {
    key: 'city',
    idKey: 'city',
    label: 'City',
    resolveValue: function resolveValue(entry) {
      return locationPart(entry, 'city');
    }
  }, {
    key: 'state',
    idKey: 'state',
    label: 'State / Province / Region',
    resolveValue: function resolveValue(entry) {
      return sectionEntryState(entry);
    },
    waitForMappingKey: 'country'
  }, {
    key: 'zipcode',
    idKey: 'zipcode',
    label: 'ZIP / Postal code',
    resolveValue: function resolveValue() {
      return null;
    }
  }, {
    key: 'supervisorName',
    idKey: 'supervisor-name',
    label: 'Supervisor name',
    resolveValue: function resolveValue() {
      return null;
    }
  }, {
    key: 'jobTitle',
    idKey: 'job-title',
    label: 'Job title',
    profileKey: 'positionTitle'
  }, {
    key: 'reasonForLeaving',
    idKey: 'reason-for-leaving',
    label: 'Reason for leaving',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.reasonForLeaving) || (isCurrentEntry(entry) ? null : 'Career growth');
    }
  },
  // Tenant-toggled, required where it shows: the rich-text "Job Duties" editor (fillRichTextEditor).
  {
    key: 'jobDuties',
    idKey: 'job-duties',
    label: 'Job duties',
    resolveValue: function resolveValue(entry) {
      return workSummaryLines(entry);
    }
  }]
});
var REFERENCES_SECTION = createPaycomSection({
  rootFieldId: 'references',
  rootQuestion: 'Professional references',
  answerType: 'references',
  profileSection: 'references',
  prefix: 'reference',
  anchorKey: 'reference-first-name',
  addPattern: /^add (professional |personal )?reference$/i,
  rowLabel: function rowLabel(rowIndex) {
    return "Reference ".concat(rowIndex + 1);
  },
  aiContextPairs: function aiContextPairs(entry) {
    return [['Reference name', entry === null || entry === void 0 ? void 0 : entry.name], ["Reference's job title", entry === null || entry === void 0 ? void 0 : entry.title], ["Reference's company", entry === null || entry === void 0 ? void 0 : entry.company], ['Known since', entry === null || entry === void 0 ? void 0 : entry.knownFrom], ['Known until', cleanText(entry === null || entry === void 0 ? void 0 : entry.knownTo) || (cleanText(entry === null || entry === void 0 ? void 0 : entry.knownFrom) ? 'Present (still in touch)' : null)], ['Relationship to the candidate', entry === null || entry === void 0 ? void 0 : entry.relationship]].filter(function (_ref33) {
      var _ref34 = autofill_slicedToArray(_ref33, 2),
        value = _ref34[1];
      return cleanText(value);
    }).map(function (_ref35) {
      var _ref36 = autofill_slicedToArray(_ref35, 2),
        question = _ref36[0],
        answer = _ref36[1];
      return {
        question: question,
        answer: cleanText(answer)
      };
    });
  },
  mappings: [{
    key: 'firstName',
    idKey: 'reference-first-name',
    label: 'First name',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.firstName) || splitName(entry === null || entry === void 0 ? void 0 : entry.name).first;
    }
  }, {
    key: 'lastName',
    idKey: 'reference-last-name',
    label: 'Last name',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.lastName) || splitName(entry === null || entry === void 0 ? void 0 : entry.name).last;
    }
  }, {
    key: 'organization',
    idKey: 'organization',
    label: 'Company name',
    profileKey: 'company'
  }, {
    key: 'title',
    idKey: 'title',
    label: 'Title',
    profileKey: 'title'
  },
  // No direct profile field — the AI infers it from the reference's own facts (aiContextPairs).
  {
    key: 'relationship',
    idKey: 'relationship',
    label: 'Relationship',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.relationship) || null;
    },
    aiFallback: true
  }, {
    key: 'yearsKnown',
    idKey: 'time-known-years',
    label: 'Years known',
    resolveValue: function resolveValue(entry) {
      var years = referenceYearsKnown(entry);
      if (years != null) return String(years);
      return cleanText(entry === null || entry === void 0 ? void 0 : entry.yearsKnown) || null;
    }
  }, {
    key: 'monthsKnown',
    idKey: 'time-known-months',
    label: 'Months known',
    resolveValue: function resolveValue(entry) {
      return referenceMonthsKnownRemainder(entry);
    }
  }, {
    key: 'phone',
    idKey: 'reference-phone-number',
    label: 'Phone',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.phone) || (entry === null || entry === void 0 ? void 0 : entry.phoneNumber) || null;
    }
  }, {
    key: 'extension',
    idKey: 'reference-phone-number-extension',
    label: 'Phone extension',
    resolveValue: function resolveValue() {
      return null;
    }
  }, {
    key: 'email',
    idKey: 'reference-email',
    label: 'Email',
    profileKey: 'email'
  }]
});
var PAYCOM_SECTIONS = [EDUCATION_SECTION, EMPLOYMENT_SECTION, REFERENCES_SECTION];
registerProfileSectionHierarchy({
  sections: PAYCOM_SECTIONS,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS,
  wrappedFieldKinds: ['paycom-control'],
  getAnswer: getAnswer
});

// "I do not have an entry": a profile with no entries for a section ticks row 1's opt-out (required
// sections — "Please provide at least one professional reference." — reject an empty row), while a
// profile WITH entries makes sure no row is opted out. Wraps the shared root fill.
PAYCOM_SECTIONS.forEach(function (section) {
  var baseHandler = FIELD_KIND_HANDLERS.get(section.answerType);
  if (!baseHandler) return;
  var setFirstRowOptOut = function setFirstRowOptOut(desired) {
    var anchor = getSectionAnchors("".concat(section.prefix, "-").concat(section.prefix === 'reference' ? 'reference-first-name' : section.prefix === 'education' ? 'institution-type' : 'employer-name', "-field-"))[0];
    var suffix = ((anchor === null || anchor === void 0 ? void 0 : anchor.id.match(/-(\d+)$/)) || [])[1];
    if (!suffix) return;
    var optOut = document.querySelector("input[type=\"checkbox\"][name=\"".concat(section.prefix, "-has-opted-out-checkbox-").concat(suffix, "\"]"));
    if (optOut) setCheckbox(optOut, desired);
  };
  var wrapped = /*#__PURE__*/function () {
    var _ref37 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee36(fieldId, question, count, field) {
      var context,
        _context$shouldAbort,
        shouldAbort,
        _args36 = arguments;
      return autofill_regenerator().w(function (_context36) {
        while (1) switch (_context36.n) {
          case 0:
            context = _args36.length > 4 && _args36[4] !== undefined ? _args36[4] : {};
            _context$shouldAbort = context.shouldAbort, shouldAbort = _context$shouldAbort === void 0 ? autofill_NEVER_ABORT : _context$shouldAbort;
            _context36.n = 1;
            return baseHandler(fieldId, question, count, field, context);
          case 1:
            if (!shouldAbort()) {
              _context36.n = 2;
              break;
            }
            return _context36.a(2);
          case 2:
            if (typeof count === 'number' && count > 0) {
              _context36.n = 3;
              break;
            }
            _context36.n = 3;
            return runDomTask(function () {
              return setFirstRowOptOut(true);
            }, {
              shouldAbort: shouldAbort
            });
          case 3:
            return _context36.a(2);
        }
      }, _callee36);
    }));
    return function wrapped(_x103, _x104, _x105, _x106) {
      return _ref37.apply(this, arguments);
    };
  }();
  wrapped.bypassDomMutex = true;
  FIELD_KIND_HANDLERS.set(section.answerType, wrapped);
});

// --- submit / advance -------------------------------------------------------------------------------

function getApplyButton() {
  return Array.from(document.querySelectorAll("".concat(APPLY_BUTTON_SELECTOR, ", button"))).filter(function (button) {
    return isElementVisible(button) && !button.closest('.uiLibModal');
  }).find(function (button) {
    return button.matches(APPLY_BUTTON_SELECTOR) || /^(quick )?apply$/i.test(cleanText(button.textContent));
  }) || null;
}
function getSubmitButton() {
  // The Quick Apply modal's own Submit is the final submit of that flow.
  var modal = getOpenModal();
  if (getModalKind(modal) === 'quick-apply') return findModalButton(modal, /^submit( application)?$/i);
  if (!isApplicationPage()) return null;
  return Array.from(document.querySelectorAll('button')).filter(function (button) {
    return isElementVisible(button) && !button.closest('.uiLibModal');
  }).find(function (button) {
    return /^submit( application)?$/i.test(cleanText(button.textContent));
  }) || null;
}
var describeButton = function describeButton(button) {
  return button ? {
    detected: true,
    label: cleanText(button.textContent) || button.getAttribute('aria-label') || '',
    disabled: Boolean(button.disabled || button.getAttribute('aria-disabled') === 'true')
  } : {
    detected: false
  };
};
function detectSubmitButton() {
  return describeButton(getSubmitButton());
}

// Some tenants open the application on a "Let's Get Started!" screening step (knock-out questions, seen
// on two tenants 2026-10-20) that moves on with "Next" — there is no Submit on that step yet.
function getScreeningNextButton() {
  if (!isApplicationPage() || getSubmitButton()) return null;
  return Array.from(document.querySelectorAll("".concat(BOTTOM_BUTTONS_SELECTOR, " button"))).filter(function (button) {
    return isElementVisible(button) && !button.closest('.uiLibModal');
  }).find(function (button) {
    return /^next$/i.test(cleanText(button.textContent));
  }) || null;
}

// The NON-final forward control for the current state (never the gated Submit).
function getAdvanceControl() {
  var policy = getPolicyDialog();
  if (policy) return findModalButton(policy, POLICY_AGREE_PATTERN);
  var modal = getOpenModal();
  var kind = getModalKind(modal);
  if (kind === 'start') return findModalButton(modal, /^apply manually$/i);
  if (kind === 'signup') return modal.querySelector(SIGNUP_CONTINUE_SELECTOR);
  if (kind === 'signin') return modal.querySelector(SIGNIN_SUBMIT_SELECTOR);
  if (kind === 'resume-parse') return findModalButton(modal, /only attach|^no\b/i);
  if (kind === 'verify-email') {
    return findModalButton(modal, getVerifyCodeInput(modal) ? VERIFY_SUBMIT_CODE_PATTERN : VERIFY_SEND_CODE_PATTERN);
  }
  if (modal) return null;
  if (isJobPage()) return getApplyButton();
  return getScreeningNextButton();
}
function detectAdvanceButton() {
  var described = describeButton(getAdvanceControl());
  // Agree enables once the policy is scrolled — which the advance step itself does first.
  if (described.detected && getPolicyDialog()) return autofill_objectSpread(autofill_objectSpread({}, described), {}, {
    disabled: false
  });
  return described;
}
function isAutofillAvailable() {
  var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    fieldCount = _ref38.fieldCount,
    submitButton = _ref38.submitButton;
  if (fieldCount > 0) return true;
  if (submitButton !== null && submitButton !== void 0 && submitButton.detected) return true;
  return Boolean(getAdvanceControl());
}

// Visible server-side rejection inside the auth modal (or a page-level alert). Client validation
// ("Field is required", a malformed email) never counts — the advancer only changes course on a
// round-trip error. Paycom renders the server's answer to Continue / Sign In in an error Notice at
// the top of the modal (`.uiLibNotice.ui-notice-error`, role=alert, aria-label "Error Notice") and
// client validation as helper text under the field, so a Notice's text always counts — a taken email
// reads "Invalid email address or email address already registered." (live 2026-10-24, 3 tenants).
var ACCOUNT_EXISTS_PATTERN = /already|exist|registered|in use/i;
var CLIENT_VALIDATION_PATTERN = /required|invalid email|must match|do not match/i;
var SERVER_NOTICE_SELECTOR = '.uiLibNotice, [aria-label="Error Notice"], .uiLibSnackbar, [class*="Snackbar"]';
function readAuthError(modal, role) {
  var scopes = [modal].concat(autofill_toConsumableArray(Array.from(document.querySelectorAll('[role="alert"], .uiLibSnackbar, [class*="Snackbar"]')))).filter(Boolean);
  var isErrorNode = function isErrorNode(element) {
    return /(^|[\s-])error([\s-]|$)/i.test(element.className || '') && !/noerror/i.test(element.className || '');
  };
  var texts = scopes.flatMap(function (scope) {
    var _scope$matches;
    return Array.from(scope.querySelectorAll('[role="alert"], [class*="rror"]')).concat((_scope$matches = scope.matches) !== null && _scope$matches !== void 0 && _scope$matches.call(scope, '[role="alert"]') ? [scope] : []).filter(function (element) {
      return element.matches('[role="alert"]') || isErrorNode(element);
    }).filter(isElementVisible).map(function (element) {
      return {
        text: cleanText(textOf(element)),
        notice: element.matches(SERVER_NOTICE_SELECTOR)
      };
    }).filter(function (_ref39) {
      var text = _ref39.text,
        notice = _ref39.notice;
      return text && (notice || !CLIENT_VALIDATION_PATTERN.test(text));
    }).map(function (_ref40) {
      var text = _ref40.text;
      return text;
    });
  });
  var message = texts[0];
  if (!message) return null;
  if (role === AUTH_PAGE_ROLE_SIGN_UP) {
    return ACCOUNT_EXISTS_PATTERN.test(message) ? {
      code: 'account_exists',
      message: message
    } : null;
  }
  return /incorrect|invalid|unable|not match|does not|doesn't|failed|try again|locked|not found/i.test(message) ? {
    code: 'signin_failed',
    message: message
  } : null;
}
function clickModalControl(_x107) {
  return _clickModalControl.apply(this, arguments);
}
function _clickModalControl() {
  _clickModalControl = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee51(selector) {
    var modal, control;
    return autofill_regenerator().w(function (_context51) {
      while (1) switch (_context51.n) {
        case 0:
          modal = getOpenModal();
          control = modal === null || modal === void 0 ? void 0 : modal.querySelector(selector);
          if (!(!control || !isElementVisible(control))) {
            _context51.n = 1;
            break;
          }
          return _context51.a(2, false);
        case 1:
          control.click();
          _context51.n = 2;
          return sleep(300);
        case 2:
          return _context51.a(2, true);
      }
    }, _callee51);
  }));
  return _clickModalControl.apply(this, arguments);
}
var advanceAuth = createConditionalAuthAdvancer({
  platform: PLATFORM,
  getPageKind: function getPageKind() {
    var kind = getModalKind(getOpenModal());
    return kind === 'signup' || kind === 'signin' ? kind : null;
  },
  pages: {
    signup: {
      role: AUTH_PAGE_ROLE_SIGN_UP,
      getBlockingError: function getBlockingError() {
        return readAuthError(getOpenModal(), AUTH_PAGE_ROLE_SIGN_UP);
      },
      advance: function advance() {
        return clickModalControl(SIGNUP_CONTINUE_SELECTOR);
      },
      goToSignIn: function goToSignIn() {
        return clickModalControl(SIGNIN_LINK_SELECTOR);
      }
    },
    signin: {
      role: AUTH_PAGE_ROLE_SIGN_IN,
      getBlockingError: function getBlockingError() {
        return readAuthError(getOpenModal(), AUTH_PAGE_ROLE_SIGN_IN);
      },
      advance: function advance() {
        return clickModalControl(SIGNIN_SUBMIT_SELECTOR);
      },
      goToSignUp: function goToSignUp() {
        return clickModalControl(CREATE_ACCOUNT_LINK_SELECTOR);
      }
    }
  }
});

// "Verify Your Email": Send Code mails the code and swaps in the Verification Code input — a new step
// with its own field, so return FALSE (the background re-detects it and the verification_code field
// fills it from the Job Mailbox, as after Apply); once the code is typed, Submit Code finishes the check.
function advanceVerifyEmail(_x108) {
  return _advanceVerifyEmail.apply(this, arguments);
}
function _advanceVerifyEmail() {
  _advanceVerifyEmail = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee52(modal) {
    var shouldAbort,
      input,
      send,
      submit,
      _args52 = arguments;
    return autofill_regenerator().w(function (_context52) {
      while (1) switch (_context52.n) {
        case 0:
          shouldAbort = _args52.length > 1 && _args52[1] !== undefined ? _args52[1] : autofill_NEVER_ABORT;
          input = getVerifyCodeInput(modal);
          if (input) {
            _context52.n = 3;
            break;
          }
          send = findModalButton(modal, VERIFY_SEND_CODE_PATTERN);
          if (!(!send || isButtonDisabled(send))) {
            _context52.n = 1;
            break;
          }
          return _context52.a(2, false);
        case 1:
          send.click();
          _context52.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return getVerifyCodeInput(getOpenModal()) ? true : null;
          }, MODAL_WAIT_MS, shouldAbort, POLL_MS);
        case 2:
          return _context52.a(2, false);
        case 3:
          submit = findModalButton(modal, VERIFY_SUBMIT_CODE_PATTERN);
          if (!(!cleanText(input.value) || !submit || isButtonDisabled(submit))) {
            _context52.n = 4;
            break;
          }
          return _context52.a(2, false);
        case 4:
          submit.click();
          _context52.n = 5;
          return waitForPositiveResultWithAbort(function () {
            return getOpenModal() === modal && modal.isConnected ? null : true;
          }, MODAL_CLOSE_WAIT_MS, shouldAbort, POLL_MS);
        case 5:
          return _context52.a(2, true);
      }
    }, _callee52);
  }));
  return _advanceVerifyEmail.apply(this, arguments);
}
function advancePaycomFlow() {
  return _advancePaycomFlow.apply(this, arguments);
} // The "Start Application" prompt covers the freshly-created application (Autofill with Resume/CV |
// Apply Manually) — apply manually so the profile, not Paycom's résumé parse, fills the form.
function _advancePaycomFlow() {
  _advancePaycomFlow = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee53() {
    var modal, kind, button, apply, next;
    return autofill_regenerator().w(function (_context53) {
      while (1) switch (_context53.n) {
        case 0:
          if (!getPolicyDialog()) {
            _context53.n = 1;
            break;
          }
          return _context53.a(2, acceptPolicyDialog());
        case 1:
          modal = getOpenModal();
          kind = getModalKind(modal);
          if (!(kind === 'start')) {
            _context53.n = 4;
            break;
          }
          button = findModalButton(modal, /^apply manually$/i);
          if (button) {
            _context53.n = 2;
            break;
          }
          return _context53.a(2, false);
        case 2:
          button.click();
          _context53.n = 3;
          return waitForModalClosed();
        case 3:
          return _context53.a(2, true);
        case 4:
          if (!(kind === 'resume-parse')) {
            _context53.n = 5;
            break;
          }
          return _context53.a(2, dismissResumeParseModal());
        case 5:
          if (!(kind === 'signup' || kind === 'signin')) {
            _context53.n = 6;
            break;
          }
          return _context53.a(2, advanceAuth());
        case 6:
          if (!(kind === 'verify-email')) {
            _context53.n = 7;
            break;
          }
          return _context53.a(2, advanceVerifyEmail(modal));
        case 7:
          if (!modal) {
            _context53.n = 8;
            break;
          }
          return _context53.a(2, false);
        case 8:
          if (!isJobPage()) {
            _context53.n = 11;
            break;
          }
          // Posting → account modal boundary. "Apply" opens the "Getting You Started" modal in place (or,
          // for a signed-in candidate, navigates straight to the application). Click to reveal it, then
          // return FALSE so the shared empty-advance continuation does not keep this run alive: the
          // revealed modal is a new step with its own field signature, so the background re-detects it and
          // re-applies the auto-start gate (same contract as Rippling's "Apply now").
          apply = getApplyButton();
          if (apply) {
            _context53.n = 9;
            break;
          }
          return _context53.a(2, false);
        case 9:
          apply.click();
          _context53.n = 10;
          return waitForPositiveResultWithAbort(function () {
            return getOpenModal() || isApplicationPage() ? true : null;
          }, APPLY_REVEAL_WAIT_MS, autofill_NEVER_ABORT, POLL_MS);
        case 10:
          return _context53.a(2, false);
        case 11:
          // Screening step → the application form (a new step with its own fields).
          next = getScreeningNextButton();
          if (!next) {
            _context53.n = 13;
            break;
          }
          next.click();
          _context53.n = 12;
          return waitForPositiveResultWithAbort(function () {
            return next.isConnected && getScreeningNextButton() === next ? null : true;
          }, APPLY_REVEAL_WAIT_MS, autofill_NEVER_ABORT, POLL_MS);
        case 12:
          return _context53.a(2, true);
        case 13:
          return _context53.a(2, false);
      }
    }, _callee53);
  }));
  return _advancePaycomFlow.apply(this, arguments);
}
function beforePaycomStart() {
  return _beforePaycomStart.apply(this, arguments);
} // Final submit: sign the pad if it is still empty and re-affirm the acknowledgement (reset by any edit
// since it was ticked), then press.
function _beforePaycomStart() {
  _beforePaycomStart = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee54() {
    var _ref42,
      _ref42$runActive,
      runActive,
      modal,
      kind,
      _findModalButton,
      _args54 = arguments;
    return autofill_regenerator().w(function (_context54) {
      while (1) switch (_context54.n) {
        case 0:
          _ref42 = _args54.length > 0 && _args54[0] !== undefined ? _args54[0] : {}, _ref42$runActive = _ref42.runActive, runActive = _ref42$runActive === void 0 ? false : _ref42$runActive;
          if (!runActive) {
            _context54.n = 1;
            break;
          }
          return _context54.a(2, undefined);
        case 1:
          modal = getOpenModal();
          kind = getModalKind(modal);
          if (!(kind === 'start')) {
            _context54.n = 3;
            break;
          }
          (_findModalButton = findModalButton(modal, /^apply manually$/i)) === null || _findModalButton === void 0 || _findModalButton.click();
          _context54.n = 2;
          return waitForModalClosed();
        case 2:
          _context54.n = 4;
          break;
        case 3:
          if (!(kind === 'resume-parse')) {
            _context54.n = 4;
            break;
          }
          dismissResumeParseModal();
          _context54.n = 4;
          return waitForModalClosed();
        case 4:
          return _context54.a(2, undefined);
      }
    }, _callee54);
  }));
  return _beforePaycomStart.apply(this, arguments);
}
function clickPaycomSubmitButton(_x109) {
  return _clickPaycomSubmitButton.apply(this, arguments);
}
function _clickPaycomSubmitButton() {
  _clickPaycomSubmitButton = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee55(button) {
    return autofill_regenerator().w(function (_context55) {
      while (1) switch (_context55.n) {
        case 0:
          _context55.n = 1;
          return ensureSigned();
        case 1:
          _context55.n = 2;
          return ensureAcknowledged();
        case 2:
          _context55.n = 3;
          return sleep(300);
        case 3:
          button.click();
        case 4:
          return _context55.a(2);
      }
    }, _callee55);
  }));
  return _clickPaycomSubmitButton.apply(this, arguments);
}
registerAutofillHandlers({
  detectFields: detectAutofillFields,
  detectSubmitButton: detectSubmitButton,
  detectAdvanceButton: detectAdvanceButton,
  getSubmitButton: getSubmitButton,
  clickSubmitButton: clickPaycomSubmitButton,
  isAutofillAvailable: isAutofillAvailable,
  beforeStartAutofill: beforePaycomStart,
  advanceFlow: advancePaycomFlow,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS
});
/******/ })()
;