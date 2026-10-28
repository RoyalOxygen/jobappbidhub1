/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// UNUSED EXPORTS: SMART_PROFILE_SECTIONS, formatSmartDate, replaceSmartSemicolons

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
/* unused harmony import specifier */ var remote_input_sleep;
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
          return remote_input_sleep(SETTLE_MS);
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
          return remote_input_sleep(SETTLE_MS + 60);
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
          return remote_input_sleep(SETTLE_MS);
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
          return remote_input_sleep(SETTLE_MS);
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
;// ../../packages/job-parsers/content/platforms/smartrecruiters/autofill.js
function autofill_typeof(o) { "@babel/helpers - typeof"; return autofill_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, autofill_typeof(o); }
function autofill_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function autofill_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? autofill_ownKeys(Object(t), !0).forEach(function (r) { autofill_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : autofill_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function autofill_defineProperty(e, r, t) { return (r = autofill_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function autofill_toPropertyKey(t) { var i = autofill_toPrimitive(t, "string"); return "symbol" == autofill_typeof(i) ? i : i + ""; }
function autofill_toPrimitive(t, r) { if ("object" != autofill_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != autofill_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function autofill_regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(autofill_typeof(e) + " is not iterable"); }
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
function autofill_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function autofill_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






var autofill_NEVER_ABORT = function NEVER_ABORT() {
  return false;
};
var SMARTRECRUITERS_PLATFORM_KEY = 'smartrecruiters';

// Runner lane: the host (apps/apply-runner slot / runner-lane-local-debug) advertises remote input for
// SmartRecruiters → every click/keystroke below is replayed by patchright as TRUSTED input instead of
// the synthetic value-setter + event sequences (content/platforms/remote-input.js). The oneclick form is
// DataDome-walled: it scores the session on exactly what synthetic events cannot fake (isTrusted, real
// pointer travel, key cadence). Anywhere else (assistant browsers, CDN installs, old boxes) this is
// false and the synthetic path runs unchanged. Memoized by remote-input.js. File uploads stay on the
// DOM path on every lane. Every native control here sits inside a spl-*/oc-* shadow root — the remote
// primitives hit-test through shadow roots and slots (remote-input.js deepElementFromPoint).
var useRemoteInput = function useRemoteInput() {
  return isRemoteInputEnabled(SMARTRECRUITERS_PLATFORM_KEY)["catch"](function () {
    return false;
  });
};
// Human-like pacing between fields on every lane (the form is bot-scored); the shared runtime jitters it.
// 300 → 200 (2026-10-06): a fill is paced by its own gestures too (real pointer travel + key cadence on the
// runner lane, the option/menu waits everywhere), so the between-field beat can be shorter.
var SMART_INTER_FIELD_DELAY_MS = 200;
// Settle after a real click commits an option / toggles a custom radio before the state is read back.
var REMOTE_COMMIT_SETTLE_MS = 250;
// The location search list carries a "Cannot find your city? Click here to fill in manually" item with
// role=option: never a match for a city, but the right pick when the search returns nothing else (it
// reveals the manual country/city inputs fillLocationField then fills).
var MANUAL_ENTRY_OPTION_PATTERN = /cannot find|fill in manually|enter (it )?manually/i;
var MENU_WAIT_TIMEOUT_MS = 2500;
// Autocomplete direct-match wait, two-phase (see waitForAutocompleteMatch): once the list has shown the
// SAME real options for this long — and at least AUTOCOMPLETE_MATCH_MIN_WAIT_MS has passed since typing
// ended, so a search request still in flight can land and reset the clock — the search counts as
// finished and the best visible option is taken instead of idling out MENU_WAIT_TIMEOUT_MS. The
// experience/education widgets (job title, company, school, location) hit that cap on nearly every entry
// because their suggestions seldom echo the profile text verbatim.
var AUTOCOMPLETE_OPTIONS_SETTLE_MS = 500;
var AUTOCOMPLETE_MATCH_MIN_WAIT_MS = 1000;
var SECTION_CANCEL_WAIT_MS = 2500;
// Settle after an entry Save commits; the shared iterator adds its own 300 ms saveSettleMs on top, and the
// next Add is appear-waited and re-pressed, so a late commit costs a retry, never a mis-filled entry.
var SECTION_SAVE_WAIT_MS = 600;
var AUTO_ADVANCE_WAIT_TIMEOUT_MS = 5000;
var MAX_PROFILE_SECTION_ENTRIES = 3;
// The oneclick footer is localized: German postings label Next "Weiter" (Sopra Steria, 2026-10-21/22 —
// the advance step found no safe Next and parked; pressing Weiter by hand went straight through).
var SAFE_ADVANCE_BUTTON_TEXT_PATTERN = /\b(next|continue|review|preview|weiter|suivant|continuer|siguiente|continuar|avanti|volgende|doorgaan|dalej)\b/i;
var UNSAFE_ADVANCE_BUTTON_TEXT_PATTERN = /\b(submit|apply|complete|finish|done|send)\b/i;
function normalizeText(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
}
function normalizeQuestion(value) {
  return normalizeText(value).replace(/\s*\*/g, '').trim();
}
function normalizeComparisonText(value) {
  return normalizeText(value).toLowerCase();
}
function uniqueValues(values) {
  var seen = new Set();
  var output = [];
  values.forEach(function (value) {
    var normalized = normalizeText(value);
    if (!normalized || seen.has(normalized)) return;
    seen.add(normalized);
    output.push(normalized);
  });
  return output;
}
function isElementVisible(element) {
  if (!(element instanceof Element)) return false;
  var style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
  var rect = element.getBoundingClientRect();
  return rect.width > 0 || rect.height > 0;
}
function getDeepText(element) {
  if (!element) return '';
  var chunks = [];
  var visited = new Set();
  var _visit = function visit(node) {
    if (!node) return;
    if (visited.has(node)) return;
    visited.add(node);
    if (node.nodeType === Node.TEXT_NODE) {
      chunks.push(node.textContent);
      return;
    }
    if (!(node instanceof Element || node instanceof DocumentFragment)) return;
    if (node instanceof HTMLSlotElement) {
      var _node$assignedNodes, _node$assignedNodes2;
      var assignedNodes = (_node$assignedNodes = (_node$assignedNodes2 = node.assignedNodes) === null || _node$assignedNodes2 === void 0 ? void 0 : _node$assignedNodes2.call(node, {
        flatten: true
      })) !== null && _node$assignedNodes !== void 0 ? _node$assignedNodes : [];
      if (assignedNodes.length > 0) {
        assignedNodes.forEach(_visit);
        return;
      }
    }
    if (node instanceof Element) {
      var label = node.getAttribute('label') || node.getAttribute('aria-label') || node.getAttribute('title');
      if (label) chunks.push(label);
    }
    Array.from(node.childNodes).forEach(_visit);
    if (node instanceof Element && node.shadowRoot) {
      Array.from(node.shadowRoot.childNodes).forEach(_visit);
    }
  };
  _visit(element);
  return normalizeText(chunks.join(' '));
}
function getFieldControl(field) {
  var _field$matches;
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'input:not([type="hidden"]):not([type="file"]), textarea, select, [role="radio"], input[type="checkbox"]';
  if (!field) return null;
  if ((_field$matches = field.matches) !== null && _field$matches !== void 0 && _field$matches.call(field, selector)) return field;
  return querySelectorDeep(selector, field);
}
function getFieldTextInput(field) {
  return getFieldControl(field, ['input[type="text"]', 'input[type="email"]', 'input[type="tel"]', 'input[type="url"]', 'input[type="number"]', 'input:not([type])'].join(', '));
}
function setSmartInputValue(element, value) {
  var prototype = Object.getPrototypeOf(element);
  var valueDescriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
  if (valueDescriptor !== null && valueDescriptor !== void 0 && valueDescriptor.set) {
    valueDescriptor.set.call(element, value);
    return;
  }
  element.value = value;
}
function dispatchSmartInputEvent(element, eventType) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? null : _ref$data,
    _ref$inputType = _ref.inputType,
    inputType = _ref$inputType === void 0 ? 'insertText' : _ref$inputType,
    _ref$cancelable = _ref.cancelable,
    cancelable = _ref$cancelable === void 0 ? false : _ref$cancelable;
  if (!(element !== null && element !== void 0 && element.dispatchEvent)) return true;
  try {
    return element.dispatchEvent(new InputEvent(eventType, {
      bubbles: true,
      cancelable: cancelable,
      composed: true,
      data: data,
      inputType: inputType
    }));
  } catch (_error) {
    return element.dispatchEvent(new Event(eventType, {
      bubbles: true,
      cancelable: cancelable,
      composed: true
    }));
  }
}
function dispatchSmartKeyEvent(element, eventType, key) {
  if (!(element !== null && element !== void 0 && element.dispatchEvent)) return;
  var isSingleCharacter = key.length === 1;
  var upperKey = key.toUpperCase();
  var keyCode = isSingleCharacter ? upperKey.charCodeAt(0) : 0;
  var code = /^[a-z]$/i.test(key) ? "Key".concat(upperKey) : /^\d$/.test(key) ? "Digit".concat(key) : key === ' ' ? 'Space' : key;
  element.dispatchEvent(new KeyboardEvent(eventType, {
    key: key,
    code: code,
    which: keyCode,
    keyCode: keyCode,
    charCode: eventType === 'keypress' ? keyCode : 0,
    bubbles: true,
    cancelable: true,
    composed: true
  }));
}
function fillSmartTextInput(element, value) {
  var _element$focus;
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref2$blur = _ref2.blur,
    blur = _ref2$blur === void 0 ? true : _ref2$blur,
    _ref2$change = _ref2.change,
    change = _ref2$change === void 0 ? true : _ref2$change;
  if (!element || value == null) return;
  var stringValue = String(value);
  if (stringValue.startsWith('/Volumes/')) return;
  var lastValue = element.value;
  (_element$focus = element.focus) === null || _element$focus === void 0 || _element$focus.call(element);
  setSmartInputValue(element, stringValue);
  var tracker = element._valueTracker;
  if (tracker) tracker.setValue(lastValue);
  dispatchSmartInputEvent(element, 'input', {
    data: stringValue
  });
  if (change) element.dispatchEvent(new Event('change', {
    bubbles: true,
    composed: true
  }));
  if (blur) element.dispatchEvent(new Event('blur', {
    bubbles: true,
    composed: true
  }));
}

// Text fill: real typing on the runner lane (click, verified clear, type — verification off for widgets
// that reformat the value, e.g. the phone field), the synthetic value-setter sequence elsewhere.
function fillSmartText(_x, _x2) {
  return _fillSmartText.apply(this, arguments);
}
function _fillSmartText() {
  _fillSmartText = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee18(input, value) {
    var _ref33,
      _ref33$verify,
      verify,
      _args19 = arguments;
    return autofill_regenerator().w(function (_context19) {
      while (1) switch (_context19.n) {
        case 0:
          _ref33 = _args19.length > 2 && _args19[2] !== undefined ? _args19[2] : {}, _ref33$verify = _ref33.verify, verify = _ref33$verify === void 0 ? true : _ref33$verify;
          if (!(!input || value == null)) {
            _context19.n = 1;
            break;
          }
          return _context19.a(2);
        case 1:
          _context19.n = 2;
          return useRemoteInput();
        case 2:
          if (!_context19.v) {
            _context19.n = 4;
            break;
          }
          _context19.n = 3;
          return remoteTypeInto(input, String(value), {
            verify: verify
          });
        case 3:
          return _context19.a(2);
        case 4:
          fillSmartTextInput(input, value);
        case 5:
          return _context19.a(2);
      }
    }, _callee18);
  }));
  return _fillSmartText.apply(this, arguments);
}
function getQuestionFieldId(question, fallback) {
  var slug = normalizeComparisonText(question).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
  return slug || fallback;
}

// Identically-worded controls (Endava's screening step repeats "You declare that you have read and agree
// to the privacy notice…" for three separate boxes) would otherwise share one slug — the engine keys
// fields by fieldId, so only the first box ever got ticked and the required siblings blocked Submit.
function uniqueFieldId(questions, fieldId, index) {
  if (!questions.some(function (entry) {
    return entry.fieldId === fieldId;
  })) return fieldId;
  return "".concat(fieldId, "-").concat(index);
}
function createBackendAnswerHandler(answerType) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref3$isMetadataReady = _ref3.isMetadataReady,
    isMetadataReady = _ref3$isMetadataReady === void 0 ? function () {
      return true;
    } : _ref3$isMetadataReady,
    _ref3$fetchMissingMet = _ref3.fetchMissingMetadata,
    fetchMissingMetadata = _ref3$fetchMissingMet === void 0 ? (/*#__PURE__*/function () {
      var _ref4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee(metadata) {
        return autofill_regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, metadata);
          }
        }, _callee);
      }));
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()) : _ref3$fetchMissingMet;
  return {
    isMetadataReady: isMetadataReady,
    fetchMissingMetadata: fetchMissingMetadata,
    generateAnswer: function generateAnswer(question, metadata, fieldId) {
      var _metadata$options, _metadata$constraints, _metadata$referenceQa;
      return getAnswer(question, answerType, (_metadata$options = metadata.options) !== null && _metadata$options !== void 0 ? _metadata$options : [], (_metadata$constraints = metadata.constraints) !== null && _metadata$constraints !== void 0 ? _metadata$constraints : {}, fieldId, true, (_metadata$referenceQa = metadata.referenceQaPairs) !== null && _metadata$referenceQa !== void 0 ? _metadata$referenceQa : []);
    }
  };
}
function addFieldEntry(questions, _ref5) {
  var question = _ref5.question,
    fieldId = _ref5.fieldId,
    field = _ref5.field,
    _ref5$answerType = _ref5.answerType,
    answerType = _ref5$answerType === void 0 ? 'text' : _ref5$answerType,
    _ref5$fieldKind = _ref5.fieldKind,
    fieldKind = _ref5$fieldKind === void 0 ? 'text' : _ref5$fieldKind,
    _ref5$options = _ref5.options,
    options = _ref5$options === void 0 ? [] : _ref5$options,
    _ref5$constraints = _ref5.constraints,
    constraints = _ref5$constraints === void 0 ? {} : _ref5$constraints,
    _ref5$dependsOnPrevio = _ref5.dependsOnPrevious,
    dependsOnPrevious = _ref5$dependsOnPrevio === void 0 ? isDependentQuestion(question) : _ref5$dependsOnPrevio;
  if (!question || !fieldId || !field) return;
  questions.push({
    question: question,
    fieldId: fieldId,
    answerType: answerType,
    fieldKind: fieldKind,
    dependsOnPrevious: dependsOnPrevious,
    field: field,
    options: options,
    constraints: constraints
  });
}
function getFirstPageRoot() {
  return querySelectorDeep('oc-oneclick-form, oc-oneclick-form-root, main') || document.body;
}
function getPersonalInfoRoot() {
  return querySelectorDeep('[data-test="personal-information"]') || getFirstPageRoot();
}
function getWebProfilesRoot() {
  return querySelectorDeep('[data-test="web"]') || getFirstPageRoot();
}
function addKnownTextField(questions, _ref6) {
  var fieldId = _ref6.fieldId,
    question = _ref6.question,
    selector = _ref6.selector,
    _ref6$root = _ref6.root,
    root = _ref6$root === void 0 ? getFirstPageRoot() : _ref6$root,
    _ref6$fieldKind = _ref6.fieldKind,
    fieldKind = _ref6$fieldKind === void 0 ? 'text' : _ref6$fieldKind,
    _ref6$answerType = _ref6.answerType,
    answerType = _ref6$answerType === void 0 ? 'text' : _ref6$answerType;
  var field = querySelectorDeep(selector, root);
  var control = getFieldControl(field);
  if (!field || !control || !isElementVisible(control)) return;
  addFieldEntry(questions, {
    question: question,
    fieldId: fieldId,
    field: field,
    answerType: answerType,
    fieldKind: fieldKind,
    options: [],
    constraints: getInputConstraints(question, control)
  });
}
var SMART_PERSONAL_TEXT_FIELDS = new Map([['firstName', {
  question: 'First name',
  selector: 'oc-input[data-test="personal-info-first-name-input"], spl-input#first-name-input'
}], ['lastName', {
  question: 'Last name',
  selector: 'oc-input[data-test="personal-info-last-name-input"], spl-input#last-name-input'
}], ['email', {
  question: 'Email',
  selector: 'oc-input[data-test="personal-info-email-input"], spl-input#email-input'
}], ['confirmEmail', {
  question: 'Confirm your email',
  selector: 'oc-input[data-test="personal-info-email-confirm-input"], spl-input#confirm-email-input'
}]]);

// Personal-info values typed on this page. SmartRecruiters can blank a box AFTER the fill verified it
// (First name twice, 2026-10-19/20: last name, email, city and phone kept, "Please provide your first
// name" on Next), and the park scan cannot see inside the spl-input shadow roots — so the advance step
// re-types any of them that came back empty right before pressing Next.
var smartTypedPersonalValues = new Map();
function retypeBlankedPersonalFields() {
  return _retypeBlankedPersonalFields.apply(this, arguments);
} // Country + postal-code location variant (NBCUniversal, 2026-10-20): the personal block shows a
// "Country/Region" search box and a "Postal code" box instead of the city search, with generic ids and
// no data-test hooks — both were left empty and Next answered "… is required". Each box is found by its
// label on the innermost widget that holds exactly ONE input (a wrapper holding both never matches).
function _retypeBlankedPersonalFields() {
  _retypeBlankedPersonalFields = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee19() {
    var root, _iterator5, _step5, _input$value, _step5$value, fieldId, value, input, _t6, _t7;
    return autofill_regenerator().w(function (_context20) {
      while (1) switch (_context20.p = _context20.n) {
        case 0:
          root = getPersonalInfoRoot();
          _iterator5 = autofill_createForOfIteratorHelper(smartTypedPersonalValues);
          _context20.p = 1;
          _iterator5.s();
        case 2:
          if ((_step5 = _iterator5.n()).done) {
            _context20.n = 8;
            break;
          }
          _step5$value = autofill_slicedToArray(_step5.value, 2), fieldId = _step5$value[0], value = _step5$value[1];
          input = getFieldTextInput(querySelectorDeep(SMART_PERSONAL_TEXT_FIELDS.get(fieldId).selector, root));
          if (!(!input || !isElementVisible(input) || String((_input$value = input.value) !== null && _input$value !== void 0 ? _input$value : '') !== '')) {
            _context20.n = 3;
            break;
          }
          return _context20.a(3, 7);
        case 3:
          traceRemoteInput("smartrecruiters ".concat(fieldId, " came back empty before Next \u2014 retyping"));
          _context20.p = 4;
          _context20.n = 5;
          return fillSmartText(input, value);
        case 5:
          _context20.n = 7;
          break;
        case 6:
          _context20.p = 6;
          _t6 = _context20.v;
          traceRemoteInput("smartrecruiters ".concat(fieldId, " retype failed: ").concat((_t6 === null || _t6 === void 0 ? void 0 : _t6.message) || _t6));
        case 7:
          _context20.n = 2;
          break;
        case 8:
          _context20.n = 10;
          break;
        case 9:
          _context20.p = 9;
          _t7 = _context20.v;
          _iterator5.e(_t7);
        case 10:
          _context20.p = 10;
          _iterator5.f();
          return _context20.f(10);
        case 11:
          return _context20.a(2);
      }
    }, _callee19, null, [[4, 6], [1, 9, 10, 11]]);
  }));
  return _retypeBlankedPersonalFields.apply(this, arguments);
}
var SMART_POSTAL_LABEL_PATTERN = /\b(postal|zip)\s*code\b/i;
var SMART_COUNTRY_LABEL_PATTERN = /\bcountry\s*\/\s*region\b/i;
var SMART_LABELLED_HOST_SELECTOR = 'spl-form-field, spl-autocomplete, spl-input';
var SMART_SINGLE_INPUT_SELECTOR = 'input:not([type="hidden"]):not([type="file"]):not([type="checkbox"]):not([type="radio"])';
function findSmartLabelledHost(root, pattern) {
  var _querySelectorAllDeep;
  return (_querySelectorAllDeep = querySelectorAllDeep(SMART_LABELLED_HOST_SELECTOR, root).find(function (host) {
    if (closestDeep(host, 'oc-phone-number, spl-phone-field')) return false;
    var inputs = querySelectorAllDeep(SMART_SINGLE_INPUT_SELECTOR, host);
    return inputs.length === 1 && isElementVisible(inputs[0]) && pattern.test(getDeepText(host));
  })) !== null && _querySelectorAllDeep !== void 0 ? _querySelectorAllDeep : null;
}

// The postal box comes in two shapes: a plain text box beside the Country/Region search (manual mode), or
// a single "Postal code / zip code" SEARCH box (search mode, NBCUniversal 2026-10-23 lab run): a search
// keeps only a picked suggestion — typed text is discarded and the box stays "Please provide your place of
// residence" — so it is filled like any other autocomplete.
function isSmartSearchHost(host) {
  var _host$matches;
  return Boolean((host === null || host === void 0 || (_host$matches = host.matches) === null || _host$matches === void 0 ? void 0 : _host$matches.call(host, 'spl-autocomplete')) || querySelectorDeep('spl-autocomplete, input[role="combobox"]', host));
}
function addCountryPostalFields(questions, personalInfoRoot) {
  var postalHost = findSmartLabelledHost(personalInfoRoot, SMART_POSTAL_LABEL_PATTERN);
  if (!postalHost) return false;
  var countryHost = findSmartLabelledHost(personalInfoRoot, SMART_COUNTRY_LABEL_PATTERN);
  if (countryHost) {
    addFieldEntry(questions, {
      question: 'Country/Region',
      fieldId: 'country',
      field: countryHost,
      fieldKind: 'autocomplete'
    });
  }
  addFieldEntry(questions, {
    question: 'Postal code',
    fieldId: 'postalCode',
    field: postalHost,
    fieldKind: isSmartSearchHost(postalHost) ? 'autocomplete' : 'text'
  });
  return true;
}
function addFirstPageFields(questions) {
  var personalInfoRoot = getPersonalInfoRoot();
  var webProfilesRoot = getWebProfilesRoot();
  var _iterator = autofill_createForOfIteratorHelper(SMART_PERSONAL_TEXT_FIELDS),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = autofill_slicedToArray(_step.value, 2),
        fieldId = _step$value[0],
        _step$value$ = _step$value[1],
        question = _step$value$.question,
        selector = _step$value$.selector;
      addKnownTextField(questions, {
        fieldId: fieldId,
        question: question,
        selector: selector,
        root: personalInfoRoot
      });
    }

    // The City entry is skipped on the country + postal-code variant: there is no city box, and
    // fillLocationField would type the city answer into the country search.
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var hasCountryPostal = addCountryPostalFields(questions, personalInfoRoot);
  var locationField = !hasCountryPostal && (querySelectorDeep('oc-location', personalInfoRoot) || querySelectorDeep('spl-autocomplete[data-test="location-autocomplete"]', personalInfoRoot) || querySelectorDeep('spl-autocomplete[data-test="manual-location-country"]', personalInfoRoot));
  if (locationField) {
    addFieldEntry(questions, {
      question: 'City',
      fieldId: 'location',
      field: locationField,
      answerType: 'text',
      fieldKind: 'location',
      options: [],
      constraints: {}
    });
  }
  var phoneField = querySelectorDeep('oc-phone-number', personalInfoRoot);
  if (phoneField) {
    addFieldEntry(questions, {
      question: 'Phone number',
      fieldId: 'phoneNumber',
      field: phoneField,
      answerType: 'text',
      fieldKind: 'phone',
      options: [],
      constraints: {
        inputType: 'tel'
      }
    });
  }
  addKnownTextField(questions, {
    fieldId: 'linkedIn',
    question: 'LinkedIn',
    selector: 'oc-input[data-test="web-profiles-linkedin"], spl-input#linkedin-input',
    root: webProfilesRoot
  });
  addKnownTextField(questions, {
    fieldId: 'facebook',
    question: 'Facebook',
    selector: 'oc-input[data-test="web-profiles-facebook"], spl-input#facebook-input',
    root: webProfilesRoot
  });
  addKnownTextField(questions, {
    fieldId: 'twitter',
    question: 'X (fka Twitter)',
    selector: 'oc-input[data-test="web-profiles-twitter"], spl-input#twitter-input',
    root: webProfilesRoot
  });
  addKnownTextField(questions, {
    fieldId: 'website',
    question: 'Website',
    selector: 'oc-input[data-test="web-profiles-website"], spl-input#website-input',
    root: webProfilesRoot
  });

  // Profile-section hierarchies (experience & education): the shared collector emits root + a
  // group per committed entry card + leaves for the OPEN editor from the CURRENT DOM; entries
  // the root's iterator adds appear on the next detection pass.
  var _iterator2 = autofill_createForOfIteratorHelper(SMART_PROFILE_SECTIONS),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var section = _step2.value;
      questions.push.apply(questions, autofill_toConsumableArray(collectSectionHierarchyQuestions(section)));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var resumeField = querySelectorDeep('spl-dropzone[data-test="resume-upload"]');
  if (resumeField) {
    var input = querySelectorDeep('input[type="file"]', resumeField);
    addFieldEntry(questions, {
      question: 'Resume',
      fieldId: 'resume',
      field: resumeField,
      answerType: 'resume',
      fieldKind: 'resume',
      options: null,
      constraints: input ? getInputConstraints('Resume', input) : {},
      dependsOnPrevious: false
    });
  }
  addKnownTextField(questions, {
    fieldId: 'hiringManagerMessage',
    question: 'Message to the Hiring Team',
    selector: 'oc-textarea[data-test="hiring-manager-message-text"], spl-textarea#hiring-manager-message-input',
    fieldKind: 'textarea'
  });
}
var SCREENING_QUESTION_SELECTOR = '[data-test="question-container"]';
var SCREENING_INPUT_SELECTOR = 'input:not([type="hidden"]):not([type="file"])';
// Widget hosts a screening control sits in (outermost first): a sub-field entry is bound to its own
// host so every lookup the fill/option-probe handlers do (`input[role="combobox"], input` inside
// `field`) resolves to THAT control and not to the container's first input.
var SCREENING_AUTOCOMPLETE_HOST_SELECTOR = 'spl-autocomplete, oc-autocomplete';
var SCREENING_INPUT_HOST_SELECTOR = 'spl-input, oc-input, spl-select, oc-select';

// A screening question-container can NEST a conditionally-revealed follow-up question-container
// inside itself (SmartRecruiters renders the child in place when its trigger answer is chosen —
// e.g. relocating "Yes" reveals "…relocate at your own expense?"). Detection must scope each
// question to its OWN controls/label: an element belongs to `container` only when its nearest
// question-container ancestor IS `container`. Without this the parent's whole-container scan
// swallows the child (parent inherits the merged question text + the child's radios, mis-typing
// the parent and leaving the child unfilled).
function screeningContainerOwns(container, element) {
  return closestDeep(element, SCREENING_QUESTION_SELECTOR) === container;
}
function getOwnScreeningElements(selector, container) {
  return querySelectorAllDeep(selector, container).filter(function (element) {
    return screeningContainerOwns(container, element);
  });
}
function getOwnScreeningElement(selector, container) {
  var _getOwnScreeningEleme;
  return (_getOwnScreeningEleme = getOwnScreeningElements(selector, container)[0]) !== null && _getOwnScreeningEleme !== void 0 ? _getOwnScreeningEleme : null;
}

// Light-DOM text of the container with any nested question-container pruned out, so a parent's
// question never merges with its revealed follow-up. Mirrors the old `container.textContent`
// (light DOM only) for the common non-nested case.
function getScreeningContainerOwnText(container) {
  if (!container) return '';
  var chunks = [];
  var _walk = function walk(node) {
    node.childNodes.forEach(function (child) {
      var _child$matches;
      if (child.nodeType === Node.TEXT_NODE) {
        chunks.push(child.textContent);
        return;
      }
      if (child.nodeType !== Node.ELEMENT_NODE) return;
      if (child !== container && (_child$matches = child.matches) !== null && _child$matches !== void 0 && _child$matches.call(child, SCREENING_QUESTION_SELECTOR)) return;
      _walk(child);
    });
  };
  _walk(container);
  return normalizeText(chunks.join(' '));
}
function getScreeningQuestionText(container) {
  var text = normalizeQuestion(getScreeningContainerOwnText(container));
  if (text) return text;
  var labelled = getOwnScreeningElement('label, legend, spl-typography-body, spl-typography-title', container);
  return normalizeQuestion(getDeepText(labelled));
}
function getCustomRadioOptions(container) {
  return getOwnScreeningElements('[role="radio"], spl-radio', container).filter(function (radio) {
    return isElementVisible(radio);
  }).map(function (radio) {
    return radio.getAttribute('label') || radio.getAttribute('aria-label') || radio.textContent;
  }).filter(Boolean).map(normalizeText);
}

// A control's OWN name inside a question-container: the placeholder / aria-label SmartRecruiters
// gives each select of a compound question (the US EEO "Gender, Race and Ethnicity" question renders
// a "Gender" and a "Race/Ethnicity" select side by side under ONE label — the placeholders are the
// only per-control text on the page). Falls back to the hosting widget's label attributes.
function getScreeningControlLabel(control) {
  var _control$getAttribute, _control$getAttribute2, _host$getAttribute, _host$getAttribute2, _host$getAttribute3;
  var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var candidates = [control === null || control === void 0 || (_control$getAttribute = control.getAttribute) === null || _control$getAttribute === void 0 ? void 0 : _control$getAttribute.call(control, 'placeholder'), control === null || control === void 0 || (_control$getAttribute2 = control.getAttribute) === null || _control$getAttribute2 === void 0 ? void 0 : _control$getAttribute2.call(control, 'aria-label'), host === null || host === void 0 || (_host$getAttribute = host.getAttribute) === null || _host$getAttribute === void 0 ? void 0 : _host$getAttribute.call(host, 'label'), host === null || host === void 0 || (_host$getAttribute2 = host.getAttribute) === null || _host$getAttribute2 === void 0 ? void 0 : _host$getAttribute2.call(host, 'placeholder'), host === null || host === void 0 || (_host$getAttribute3 = host.getAttribute) === null || _host$getAttribute3 === void 0 ? void 0 : _host$getAttribute3.call(host, 'aria-label')];
  for (var _i = 0, _candidates = candidates; _i < _candidates.length; _i++) {
    var candidate = _candidates[_i];
    var label = normalizeQuestion(candidate);
    if (label) return label;
  }
  return '';
}
function getScreeningControlHost(control, container) {
  return closestDeep(control, SCREENING_AUTOCOMPLETE_HOST_SELECTOR, container) || closestDeep(control, SCREENING_INPUT_HOST_SELECTOR, container) || control;
}

// Question text for ONE control of a compound question: the container's label plus the control's own
// name ("Gender, Race and Ethnicity (definitions): Race/Ethnicity"), so the answer engine, the panel
// and the question bank see which select this is; an unnamed control is numbered instead.
function getScreeningSubQuestion(question, control, host, ordinal) {
  var label = getScreeningControlLabel(control, host);
  if (label && normalizeComparisonText(label) !== normalizeComparisonText(question)) {
    return "".concat(question, ": ").concat(label);
  }
  return "".concat(question, " (").concat(ordinal, ")");
}
function getConsentQuestionText(consentField) {
  var label = querySelectorDeep('[slot="label-content"], label, spl-typography-label', consentField);
  return normalizeQuestion(getDeepText(label)) || normalizeQuestion(getDeepText(consentField)) || 'Privacy notice consent';
}
function addConsentFields(questions) {
  var seenFields = new Set();
  var consentFields = ['oc-checkbox[data-test="consent-box"]', 'oc-consent spl-checkbox[required]', 'oc-consent spl-checkbox', '[data-test="consent"] spl-checkbox[required]', '[data-test="consent"] spl-checkbox'].flatMap(function (selector) {
    return querySelectorAllDeep(selector);
  }).filter(function (field) {
    return field instanceof Element;
  }).filter(function (field) {
    if (seenFields.has(field)) return false;
    seenFields.add(field);
    return true;
  }).filter(isElementVisible);
  consentFields.forEach(function (consentField, index) {
    var consentInput = querySelectorDeep('input[type="checkbox"]', consentField);
    if (!consentInput) return;
    var question = getConsentQuestionText(consentField);
    addFieldEntry(questions, {
      question: question,
      fieldId: uniqueFieldId(questions, index === 0 ? 'privacyConsent' : getQuestionFieldId(question, "privacyConsent-".concat(index)), index),
      field: consentField,
      answerType: 'single-select',
      fieldKind: 'checkbox',
      options: ['Yes', 'No'],
      constraints: getInputConstraints(question, consentInput),
      dependsOnPrevious: false
    });
  });
}
function addScreeningFields(questions) {
  var containers = querySelectorAllDeep(SCREENING_QUESTION_SELECTOR).filter(isElementVisible);
  containers.forEach(function (container, index) {
    var _visibleInputs$;
    var question = getScreeningQuestionText(container);
    if (!question) {
      // A container with no text of its own (a control rendered apart from the label it shares with
      // a sibling container) is still a field: its control's own name is the question.
      var control = getOwnScreeningElements("".concat(SCREENING_INPUT_SELECTOR, ", textarea"), container).filter(isElementVisible)[0];
      question = control ? getScreeningControlLabel(control, getScreeningControlHost(control, container)) : '';
    }
    if (!question) return;

    // All control lookups are scoped to this container's OWN region (nested follow-up
    // question-containers excluded) so a parent question never adopts its revealed child's control.
    var radios = getOwnScreeningElements('[role="radio"], spl-radio', container).filter(isElementVisible);
    if (radios.length > 0) {
      addFieldEntry(questions, {
        question: question,
        fieldId: uniqueFieldId(questions, getQuestionFieldId(question, radios[0].id || "screening-radio-".concat(index)), index),
        field: container,
        answerType: 'single-select',
        fieldKind: 'radio-custom',
        options: getCustomRadioOptions(container),
        constraints: {}
      });
      return;
    }
    var checkbox = getOwnScreeningElement('input[type="checkbox"], [role="checkbox"]', container);
    if (checkbox) {
      addFieldEntry(questions, {
        question: question,
        fieldId: uniqueFieldId(questions, getQuestionFieldId(question, checkbox.id || "screening-checkbox-".concat(index)), index),
        field: container,
        answerType: 'single-select',
        fieldKind: 'checkbox',
        options: ['Yes', 'No'],
        constraints: getInputConstraints(question, checkbox)
      });
      return;
    }
    var textarea = getOwnScreeningElement('textarea', container);
    if (textarea) {
      addFieldEntry(questions, {
        question: question,
        fieldId: uniqueFieldId(questions, textarea.id || getQuestionFieldId(question, "screening-textarea-".concat(index)), index),
        field: container,
        answerType: 'text',
        fieldKind: 'textarea',
        options: [],
        constraints: getInputConstraints(question, textarea)
      });
      return;
    }
    var inputs = getOwnScreeningElements(SCREENING_INPUT_SELECTOR, container);
    var visibleInputs = inputs.filter(isElementVisible);

    // Compound question: SEVERAL controls under ONE label (the US EEO "Gender, Race and Ethnicity"
    // question = a Gender select + a Race/Ethnicity select). One entry per control, each bound to its
    // own widget host — the old single entry filled the first select only, and the required second
    // one stayed empty, so Submit never enabled.
    if (visibleInputs.length > 1) {
      visibleInputs.forEach(function (input, subIndex) {
        var host = getScreeningControlHost(input, container);
        var subQuestion = getScreeningSubQuestion(question, input, host, subIndex + 1);
        var isAutocomplete = input.getAttribute('role') === 'combobox';
        addFieldEntry(questions, {
          question: subQuestion,
          fieldId: uniqueFieldId(questions, input.id || getQuestionFieldId(subQuestion, "screening-input-".concat(index, "-").concat(subIndex)), "".concat(index, "-").concat(subIndex)),
          field: host,
          answerType: isAutocomplete ? 'single-select' : 'text',
          fieldKind: isAutocomplete ? 'autocomplete' : 'text',
          options: isAutocomplete ? null : [],
          constraints: getInputConstraints(subQuestion, input)
        });
      });
      return;
    }
    var input = (_visibleInputs$ = visibleInputs[0]) !== null && _visibleInputs$ !== void 0 ? _visibleInputs$ : inputs[0];
    if (input) {
      var isAutocomplete = input.getAttribute('role') === 'combobox';
      addFieldEntry(questions, {
        question: question,
        fieldId: uniqueFieldId(questions, input.id || getQuestionFieldId(question, "screening-input-".concat(index)), index),
        field: container,
        answerType: isAutocomplete ? 'single-select' : 'text',
        fieldKind: isAutocomplete ? 'autocomplete' : 'text',
        options: isAutocomplete ? null : [],
        constraints: getInputConstraints(question, input)
      });
    }
  });
}
function detectAutofillFields() {
  if (!isOnOneClickForm()) return [];
  if (querySelectorDeep('iframe[title*="CAPTCHA"], iframe[src*="captcha-delivery"]')) return [];
  var questions = [];
  addFirstPageFields(questions);
  addScreeningFields(questions);
  addConsentFields(questions);
  return questions;
}
function getControlledListboxes(input) {
  var _input$getAttribute;
  var controlledIds = normalizeText(input === null || input === void 0 || (_input$getAttribute = input.getAttribute) === null || _input$getAttribute === void 0 ? void 0 : _input$getAttribute.call(input, 'aria-controls')).split(/\s+/).filter(Boolean);
  var controlledListboxes = controlledIds.map(function (id) {
    return querySelectorDeep("#".concat(CSS.escape(id)));
  }).filter(function (listbox) {
    return listbox && isElementVisible(listbox);
  });
  var visibleListboxes = querySelectorAllDeep('[role="listbox"]').filter(isElementVisible);
  return Array.from(new Set([].concat(autofill_toConsumableArray(controlledListboxes), autofill_toConsumableArray(visibleListboxes))));
}
function getVisibleListboxOptionElements() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var options = [];
  var _iterator3 = autofill_createForOfIteratorHelper(getControlledListboxes(input)),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var listbox = _step3.value;
      options.push.apply(options, autofill_toConsumableArray(querySelectorAllDeep('[role="option"]', listbox).filter(function (option) {
        return isElementVisible(option) && option.getAttribute('aria-disabled') !== 'true';
      })));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return Array.from(new Set(options));
}
function getVisibleListboxOptionEntries() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return getVisibleListboxOptionElements(input).map(function (element) {
    return {
      element: element,
      text: getListboxOptionText(element)
    };
  }).filter(function (option) {
    return option.text;
  });
}
function getElementTitleText(element) {
  if (!(element instanceof Element)) return '';
  var directTitle = normalizeText(element.getAttribute('title'));
  if (directTitle) return directTitle;
  var titledElement = querySelectorDeep('[title]', element);
  return normalizeText(titledElement === null || titledElement === void 0 ? void 0 : titledElement.getAttribute('title'));
}
function getListboxOptionText(option) {
  var _option$getRootNode, _option$getAttribute, _option$getAttribute2, _option$getAttribute3;
  var host = option === null || option === void 0 || (_option$getRootNode = option.getRootNode) === null || _option$getRootNode === void 0 || (_option$getRootNode = _option$getRootNode.call(option)) === null || _option$getRootNode === void 0 ? void 0 : _option$getRootNode.host;
  return normalizeText((option === null || option === void 0 || (_option$getAttribute = option.getAttribute) === null || _option$getAttribute === void 0 ? void 0 : _option$getAttribute.call(option, 'label')) || (option === null || option === void 0 || (_option$getAttribute2 = option.getAttribute) === null || _option$getAttribute2 === void 0 ? void 0 : _option$getAttribute2.call(option, 'aria-label')) || (option === null || option === void 0 || (_option$getAttribute3 = option.getAttribute) === null || _option$getAttribute3 === void 0 ? void 0 : _option$getAttribute3.call(option, 'title')) || getElementTitleText(host) || getElementTitleText(option) || getDeepText(host) || getDeepText(option) || (option === null || option === void 0 ? void 0 : option.textContent));
}
function getVisibleListboxOptions() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var options = getVisibleListboxOptionEntries(input).map(function (option) {
    return option.text;
  });
  return uniqueValues(options);
}
function getAutocompleteInput(field) {
  return querySelectorDeep(['spl-autocomplete input[role="combobox"]', 'oc-autocomplete input[role="combobox"]', 'input[role="combobox"]', 'input[aria-autocomplete]', 'input:not([type="hidden"]):not([type="file"])'].join(', '), field);
}
function clickSmartControl(control) {
  var _control$focus;
  if (!control || !isElementVisible(control)) return;
  (_control$focus = control.focus) === null || _control$focus === void 0 || _control$focus.call(control);
  triggerMouseEvent(control, 'mousedown');
  triggerMouseEvent(control, 'mouseup');
  triggerMouseEvent(control, 'click');
}
function waitForAutocompleteOptions(_x4) {
  return _waitForAutocompleteOptions.apply(this, arguments);
}
function _waitForAutocompleteOptions() {
  _waitForAutocompleteOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee20(input) {
    var shouldAbort,
      _args21 = arguments;
    return autofill_regenerator().w(function (_context21) {
      while (1) switch (_context21.n) {
        case 0:
          shouldAbort = _args21.length > 1 && _args21[1] !== undefined ? _args21[1] : autofill_NEVER_ABORT;
          _context21.n = 1;
          return waitForPositiveResultWithAbort(function () {
            var values = getVisibleListboxOptions(input);
            return values.length > 0 ? values : null;
          }, MENU_WAIT_TIMEOUT_MS, shouldAbort, 100);
        case 1:
          return _context21.a(2, _context21.v);
      }
    }, _callee20);
  }));
  return _waitForAutocompleteOptions.apply(this, arguments);
}
function openAutocompleteOptions(_x5, _x6) {
  return _openAutocompleteOptions.apply(this, arguments);
} // Close a probed list without committing anything. Escape on an untouched spl-autocomplete just closes
// the menu (it would also discard typed text — never used after typing, see fillAutocompleteInput).
function _openAutocompleteOptions() {
  _openAutocompleteOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee21(input, field) {
    var shouldAbort,
      alreadyOpenOptions,
      options,
      _args22 = arguments;
    return autofill_regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          shouldAbort = _args22.length > 2 && _args22[2] !== undefined ? _args22[2] : autofill_NEVER_ABORT;
          if (!(!input || shouldAbort())) {
            _context22.n = 1;
            break;
          }
          return _context22.a(2, []);
        case 1:
          alreadyOpenOptions = getVisibleListboxOptions(input);
          if (!(alreadyOpenOptions.length > 0)) {
            _context22.n = 2;
            break;
          }
          return _context22.a(2, alreadyOpenOptions);
        case 2:
          _context22.n = 3;
          return useRemoteInput();
        case 3:
          if (!_context22.v) {
            _context22.n = 5;
            break;
          }
          _context22.n = 4;
          return remoteClick(input);
        case 4:
          _context22.n = 6;
          break;
        case 5:
          clickSmartControl(input);
        case 6:
          _context22.n = 7;
          return waitForAutocompleteOptions(input, shouldAbort);
        case 7:
          options = _context22.v;
          return _context22.a(2, options !== null && options !== void 0 ? options : []);
      }
    }, _callee21);
  }));
  return _openAutocompleteOptions.apply(this, arguments);
}
function closeAutocompleteOptions(_x7) {
  return _closeAutocompleteOptions.apply(this, arguments);
}
function _closeAutocompleteOptions() {
  _closeAutocompleteOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee22(input) {
    return autofill_regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          if (input) {
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
          return remoteKey('Escape');
        case 3:
          return _context23.a(2);
        case 4:
          dispatchKeyboardSequence(input, {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27
          });
          input.dispatchEvent(new Event('blur', {
            bubbles: true,
            composed: true
          }));
        case 5:
          return _context23.a(2);
      }
    }, _callee22);
  }));
  return _closeAutocompleteOptions.apply(this, arguments);
}
function fetchAutocompleteOptions(_x8, _x9) {
  return _fetchAutocompleteOptions.apply(this, arguments);
}
function _fetchAutocompleteOptions() {
  _fetchAutocompleteOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee23(metadata, field) {
    var shouldAbort,
      input,
      options,
      _args24 = arguments;
    return autofill_regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          shouldAbort = _args24.length > 2 && _args24[2] !== undefined ? _args24[2] : autofill_NEVER_ABORT;
          input = getAutocompleteInput(field);
          if (!(!input || shouldAbort())) {
            _context24.n = 1;
            break;
          }
          return _context24.a(2, metadata);
        case 1:
          _context24.n = 2;
          return openAutocompleteOptions(input, field, shouldAbort);
        case 2:
          options = _context24.v;
          _context24.n = 3;
          return closeAutocompleteOptions(input);
        case 3:
          return _context24.a(2, options.length > 0 ? autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
            options: options
          }) : metadata);
      }
    }, _callee23);
  }));
  return _fetchAutocompleteOptions.apply(this, arguments);
}
function getBestMatchingOption(_x0, _x1) {
  return _getBestMatchingOption.apply(this, arguments);
}
function _getBestMatchingOption() {
  _getBestMatchingOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee24(answer, options) {
    var _options$2;
    var normalizedAnswer, direct, _options$3, _t8;
    return autofill_regenerator().w(function (_context25) {
      while (1) switch (_context25.p = _context25.n) {
        case 0:
          normalizedAnswer = normalizeComparisonText(typeof answer === 'boolean' ? answer ? 'Yes' : 'No' : answer);
          if (normalizedAnswer) {
            _context25.n = 1;
            break;
          }
          return _context25.a(2, (_options$2 = options[0]) !== null && _options$2 !== void 0 ? _options$2 : null);
        case 1:
          direct = options.find(function (option) {
            return normalizeComparisonText(option) === normalizedAnswer;
          });
          if (!direct) {
            _context25.n = 2;
            break;
          }
          return _context25.a(2, direct);
        case 2:
          _context25.p = 2;
          _context25.n = 3;
          return getEmbeddingMatch(answer, options);
        case 3:
          return _context25.a(2, _context25.v);
        case 4:
          _context25.p = 4;
          _t8 = _context25.v;
          return _context25.a(2, (_options$3 = options[0]) !== null && _options$3 !== void 0 ? _options$3 : null);
      }
    }, _callee24, null, [[2, 4]]);
  }));
  return _getBestMatchingOption.apply(this, arguments);
}
function getDirectMatchingOptionEntry(answer, options) {
  var _options$;
  var normalizedAnswer = normalizeComparisonText(typeof answer === 'boolean' ? answer ? 'Yes' : 'No' : answer);
  if (!normalizedAnswer) return (_options$ = options[0]) !== null && _options$ !== void 0 ? _options$ : null;
  return options.find(function (option) {
    return normalizeComparisonText(option.text) === normalizedAnswer;
  }) || null;
}
function getBestMatchingOptionEntry(_x10, _x11) {
  return _getBestMatchingOptionEntry.apply(this, arguments);
}
function _getBestMatchingOptionEntry() {
  _getBestMatchingOptionEntry = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee25(answer, options) {
    var _ref34, _options$find;
    var direct, matchedText;
    return autofill_regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          if (!(!Array.isArray(options) || options.length === 0)) {
            _context26.n = 1;
            break;
          }
          return _context26.a(2, null);
        case 1:
          direct = getDirectMatchingOptionEntry(answer, options);
          if (!direct) {
            _context26.n = 2;
            break;
          }
          return _context26.a(2, direct);
        case 2:
          _context26.n = 3;
          return getBestMatchingOption(answer, options.map(function (option) {
            return option.text;
          }));
        case 3:
          matchedText = _context26.v;
          return _context26.a(2, (_ref34 = (_options$find = options.find(function (option) {
            return option.text === matchedText;
          })) !== null && _options$find !== void 0 ? _options$find : options[0]) !== null && _ref34 !== void 0 ? _ref34 : null);
      }
    }, _callee25);
  }));
  return _getBestMatchingOptionEntry.apply(this, arguments);
}
function fillSmartAutocompleteSearchInput(_x12, _x13) {
  return _fillSmartAutocompleteSearchInput.apply(this, arguments);
} // spl-radio has no native input: selection is `aria-checked="true"` (mirrored by a `checked` attribute).
function _fillSmartAutocompleteSearchInput() {
  _fillSmartAutocompleteSearchInput = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee26(input, value) {
    var _input$focus;
    var shouldAbort,
      stringValue,
      _i2,
      _Array$from,
      character,
      lastValue,
      tracker,
      _args27 = arguments;
    return autofill_regenerator().w(function (_context27) {
      while (1) switch (_context27.n) {
        case 0:
          shouldAbort = _args27.length > 2 && _args27[2] !== undefined ? _args27[2] : autofill_NEVER_ABORT;
          stringValue = String(value);
          (_input$focus = input.focus) === null || _input$focus === void 0 || _input$focus.call(input);
          clickSmartControl(input);
          if (!input.value) {
            _context27.n = 1;
            break;
          }
          fillSmartTextInput(input, '', {
            blur: false,
            change: false
          });
          dispatchSmartInputEvent(input, 'input', {
            data: null,
            inputType: 'deleteContentBackward'
          });
          _context27.n = 1;
          return sleep(30);
        case 1:
          _i2 = 0, _Array$from = Array.from(stringValue);
        case 2:
          if (!(_i2 < _Array$from.length)) {
            _context27.n = 5;
            break;
          }
          character = _Array$from[_i2];
          if (!shouldAbort()) {
            _context27.n = 3;
            break;
          }
          return _context27.a(2);
        case 3:
          dispatchSmartKeyEvent(input, 'keydown', character);
          dispatchSmartKeyEvent(input, 'keypress', character);
          dispatchSmartInputEvent(input, 'beforeinput', {
            data: character,
            inputType: 'insertText',
            cancelable: true
          });
          lastValue = input.value;
          setSmartInputValue(input, "".concat(lastValue).concat(character));
          tracker = input._valueTracker;
          if (tracker) tracker.setValue(lastValue);
          dispatchSmartInputEvent(input, 'input', {
            data: character,
            inputType: 'insertText'
          });
          dispatchSmartKeyEvent(input, 'keyup', character);
          _context27.n = 4;
          return sleep(12);
        case 4:
          _i2++;
          _context27.n = 2;
          break;
        case 5:
          return _context27.a(2);
      }
    }, _callee26);
  }));
  return _fillSmartAutocompleteSearchInput.apply(this, arguments);
}
function isSmartRadioSelected(radio) {
  var _radio$getAttribute, _radio$hasAttribute;
  return (radio === null || radio === void 0 || (_radio$getAttribute = radio.getAttribute) === null || _radio$getAttribute === void 0 ? void 0 : _radio$getAttribute.call(radio, 'aria-checked')) === 'true' || (radio === null || radio === void 0 || (_radio$hasAttribute = radio.hasAttribute) === null || _radio$hasAttribute === void 0 ? void 0 : _radio$hasAttribute.call(radio, 'checked')) || (radio === null || radio === void 0 ? void 0 : radio.checked) === true;
}

// Tick/untick a spl-checkbox's native input. The input is opacity-0 but keeps its 14×14 box, and the
// label text is NOT a click surface (verified live) — so the remote path clicks the input itself
// (remoteCheck: label first when one wraps it, else the control) and verifies `.checked`.
function setSmartCheckbox(_x14, _x15) {
  return _setSmartCheckbox.apply(this, arguments);
}
function _setSmartCheckbox() {
  _setSmartCheckbox = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee27(checkbox, shouldCheck) {
    return autofill_regenerator().w(function (_context28) {
      while (1) switch (_context28.n) {
        case 0:
          if (!(!checkbox || checkbox.checked === shouldCheck)) {
            _context28.n = 1;
            break;
          }
          return _context28.a(2);
        case 1:
          _context28.n = 2;
          return useRemoteInput();
        case 2:
          if (!_context28.v) {
            _context28.n = 4;
            break;
          }
          _context28.n = 3;
          return remoteCheck(checkbox, shouldCheck);
        case 3:
          return _context28.a(2);
        case 4:
          checkbox.click();
          checkbox.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true
          }));
        case 5:
          return _context28.a(2);
      }
    }, _callee27);
  }));
  return _setSmartCheckbox.apply(this, arguments);
}
function isTruthyCheckboxAnswer(answer) {
  if (typeof answer === 'boolean') return answer;
  var normalized = normalizeComparisonText(answer);
  return ['yes', 'true', 'y', 'agree', 'accepted', 'consent', 'read and understand'].some(function (value) {
    return normalized.includes(value);
  });
}

// Listbox entries a value can legitimately land on: the manual-entry item only when it is the ONLY
// thing the search returned (see MANUAL_ENTRY_OPTION_PATTERN).
function getSelectableListboxOptionEntries(input) {
  var entries = getVisibleListboxOptionEntries(input);
  var real = entries.filter(function (entry) {
    return !MANUAL_ENTRY_OPTION_PATTERN.test(entry.text);
  });
  return real.length > 0 ? real : entries;
}

// The option to click after typing into an autocomplete: an option whose text equals the typed value, the
// moment it shows; else null once the search has settled (same real options for
// AUTOCOMPLETE_OPTIONS_SETTLE_MS past AUTOCOMPLETE_MATCH_MIN_WAIT_MS) or at MENU_WAIT_TIMEOUT_MS — the
// caller then takes the best visible option. A list holding only the manual-entry item is not a finished
// search (the city results may still be loading): it waits for the cap, as before.
function waitForAutocompleteMatch(_x16, _x17) {
  return _waitForAutocompleteMatch.apply(this, arguments);
} // A typed value only reaches the submission as a CLICKED option — spl-autocomplete discards free text
// on Escape and ignores Enter/Tab even with allowcustomvalues (the custom value shows up as the single
// option to click). Type (real keystrokes on the runner lane), wait for the match
// (waitForAutocompleteMatch), click it.
// `allowManualEntry: false` (the experience / education editors): the location search's "fill in manually"
// item is never taken — it switches the box to a manual Country/Region + City pair that becomes REQUIRED and
// that no section leaf fills, so the entry can never be saved (Miratech 2026-10-23: the doctor pressed "Use
// search" to undo it). With only that item on offer, the optional box is left empty instead.
function _waitForAutocompleteMatch() {
  _waitForAutocompleteMatch = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee28(input, requestedValue) {
    var _result$option;
    var shouldAbort,
      startedAt,
      lastSignature,
      stableSince,
      result,
      _args29 = arguments;
    return autofill_regenerator().w(function (_context29) {
      while (1) switch (_context29.n) {
        case 0:
          shouldAbort = _args29.length > 2 && _args29[2] !== undefined ? _args29[2] : autofill_NEVER_ABORT;
          startedAt = Date.now();
          lastSignature = null;
          stableSince = startedAt;
          _context29.n = 1;
          return waitForPositiveResultWithAbort(function () {
            var options = getSelectableListboxOptionEntries(input);
            if (options.length === 0) {
              lastSignature = null;
              return null;
            }
            var direct = getDirectMatchingOptionEntry(requestedValue, options);
            if (direct) return {
              option: direct
            };
            if (options.every(function (option) {
              return MANUAL_ENTRY_OPTION_PATTERN.test(option.text);
            })) return null;
            var now = Date.now();
            var signature = options.map(function (option) {
              return option.text;
            }).join('\n');
            if (signature !== lastSignature) {
              lastSignature = signature;
              stableSince = now;
              return null;
            }
            var settled = now - stableSince >= AUTOCOMPLETE_OPTIONS_SETTLE_MS && now - startedAt >= AUTOCOMPLETE_MATCH_MIN_WAIT_MS;
            return settled ? {
              option: null
            } : null;
          }, MENU_WAIT_TIMEOUT_MS, shouldAbort, 100);
        case 1:
          result = _context29.v;
          return _context29.a(2, (_result$option = result === null || result === void 0 ? void 0 : result.option) !== null && _result$option !== void 0 ? _result$option : null);
      }
    }, _callee28);
  }));
  return _waitForAutocompleteMatch.apply(this, arguments);
}
function fillAutocompleteInput(_x18, _x19) {
  return _fillAutocompleteInput.apply(this, arguments);
}
function _fillAutocompleteInput() {
  _fillAutocompleteInput = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee29(input, value) {
    var shouldAbort,
      _ref35,
      _ref35$allowManualEnt,
      allowManualEntry,
      requestedValue,
      remote,
      matchingOption,
      listedOptions,
      fallbackOptions,
      selectedOption,
      _selectedOption$eleme,
      _selectedOption$eleme2,
      _args30 = arguments,
      _t9;
    return autofill_regenerator().w(function (_context30) {
      while (1) switch (_context30.n) {
        case 0:
          shouldAbort = _args30.length > 2 && _args30[2] !== undefined ? _args30[2] : autofill_NEVER_ABORT;
          _ref35 = _args30.length > 3 && _args30[3] !== undefined ? _args30[3] : {}, _ref35$allowManualEnt = _ref35.allowManualEntry, allowManualEntry = _ref35$allowManualEnt === void 0 ? true : _ref35$allowManualEnt;
          if (!(!input || value == null || shouldAbort())) {
            _context30.n = 1;
            break;
          }
          return _context30.a(2);
        case 1:
          requestedValue = String(value);
          _context30.n = 2;
          return useRemoteInput();
        case 2:
          remote = _context30.v;
          if (!remote) {
            _context30.n = 4;
            break;
          }
          _context30.n = 3;
          return remoteTypeInto(input, requestedValue, {
            verify: false
          });
        case 3:
          _context30.n = 5;
          break;
        case 4:
          _context30.n = 5;
          return fillSmartAutocompleteSearchInput(input, requestedValue, shouldAbort);
        case 5:
          _context30.n = 6;
          return waitForAutocompleteMatch(input, requestedValue, shouldAbort);
        case 6:
          matchingOption = _context30.v;
          if (!shouldAbort()) {
            _context30.n = 7;
            break;
          }
          return _context30.a(2);
        case 7:
          listedOptions = matchingOption ? [] : getSelectableListboxOptionEntries(input);
          fallbackOptions = allowManualEntry ? listedOptions : listedOptions.filter(function (option) {
            return !MANUAL_ENTRY_OPTION_PATTERN.test(option.text);
          });
          _t9 = matchingOption;
          if (_t9) {
            _context30.n = 9;
            break;
          }
          _context30.n = 8;
          return getBestMatchingOptionEntry(requestedValue, fallbackOptions);
        case 8:
          _t9 = _context30.v;
        case 9:
          selectedOption = _t9;
          if (!(selectedOption !== null && selectedOption !== void 0 && selectedOption.element)) {
            _context30.n = 13;
            break;
          }
          if (!remote) {
            _context30.n = 12;
            break;
          }
          _context30.n = 10;
          return remoteClick(selectedOption.element);
        case 10:
          _context30.n = 11;
          return sleep(REMOTE_COMMIT_SETTLE_MS);
        case 11:
          return _context30.a(2);
        case 12:
          (_selectedOption$eleme = (_selectedOption$eleme2 = selectedOption.element).scrollIntoView) === null || _selectedOption$eleme === void 0 || _selectedOption$eleme.call(_selectedOption$eleme2, {
            block: 'nearest',
            inline: 'nearest'
          });
          triggerMouseEvent(selectedOption.element, 'mousedown');
          triggerMouseEvent(selectedOption.element, 'mouseup');
          triggerMouseEvent(selectedOption.element, 'click');
          input.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true
          }));
          input.dispatchEvent(new Event('blur', {
            bubbles: true,
            composed: true
          }));
          return _context30.a(2);
        case 13:
          if (!(listedOptions.length > 0)) {
            _context30.n = 14;
            break;
          }
          return _context30.a(2);
        case 14:
          if (!remote) {
            _context30.n = 16;
            break;
          }
          _context30.n = 15;
          return remoteKey('Enter');
        case 15:
          return _context30.a(2);
        case 16:
          dispatchKeyboardSequence(input, {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13
          });
          _context30.n = 17;
          return sleep(150);
        case 17:
          if (!(normalizeComparisonText(input.value) === normalizeComparisonText(requestedValue))) {
            _context30.n = 19;
            break;
          }
          dispatchKeyboardSequence(input, {
            key: 'ArrowDown',
            code: 'ArrowDown',
            keyCode: 40
          });
          _context30.n = 18;
          return sleep(80);
        case 18:
          dispatchKeyboardSequence(input, {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13
          });
        case 19:
          input.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true
          }));
          input.dispatchEvent(new Event('blur', {
            bubbles: true,
            composed: true
          }));
        case 20:
          return _context30.a(2);
      }
    }, _callee29);
  }));
  return _fillAutocompleteInput.apply(this, arguments);
}
function getLocationParts(answer) {
  var value = normalizeText(answer);
  var parts = value.split(',').map(function (part) {
    return normalizeText(part);
  }).filter(Boolean);
  var hasUsSignal = /\b(us|usa|united states|ma|ny|ca|tx|fl|wa|il|pa|va|ga)\b/i.test(value);
  return {
    city: parts[0] || value,
    country: /canada/i.test(value) ? 'Canada' : hasUsSignal ? 'United States' : parts[parts.length - 1] || ''
  };
}
function fillLocationField(_x20, _x21) {
  return _fillLocationField.apply(this, arguments);
} // The experience/education date fields are flatpickr month-year pickers with `allowInput`, parsing typed
// text with flatpickr's `Y-m-d` format: `2020-09-01` commits September 2020, whereas the old `09/01/2020`
// was read as year "09"… → January of the year (verified live 2026-09-13). Day is always the 1st.
function _fillLocationField() {
  _fillLocationField = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee30(answer, field) {
    var shouldAbort,
      value,
      autocompleteInput,
      _getLocationParts,
      city,
      country,
      manualCountryInput,
      manualCityInput,
      _args31 = arguments;
    return autofill_regenerator().w(function (_context31) {
      while (1) switch (_context31.n) {
        case 0:
          shouldAbort = _args31.length > 2 && _args31[2] !== undefined ? _args31[2] : autofill_NEVER_ABORT;
          value = normalizeText(answer);
          if (value) {
            _context31.n = 1;
            break;
          }
          return _context31.a(2);
        case 1:
          autocompleteInput = querySelectorDeep('spl-autocomplete[data-test="location-autocomplete"] input[role="combobox"], input[role="combobox"]', field);
          if (!(autocompleteInput && isElementVisible(autocompleteInput))) {
            _context31.n = 3;
            break;
          }
          _context31.n = 2;
          return fillAutocompleteInput(autocompleteInput, value, shouldAbort);
        case 2:
          _context31.n = 3;
          return sleep(500);
        case 3:
          _getLocationParts = getLocationParts(value), city = _getLocationParts.city, country = _getLocationParts.country;
          manualCountryInput = querySelectorDeep('spl-autocomplete[data-test="manual-location-country"] input[role="combobox"], input[data-sr-id="location-autocomplete-country-search-input"]');
          if (!(manualCountryInput && isElementVisible(manualCountryInput) && country)) {
            _context31.n = 4;
            break;
          }
          _context31.n = 4;
          return fillAutocompleteInput(manualCountryInput, country, shouldAbort);
        case 4:
          manualCityInput = querySelectorDeep('spl-input[data-test="manual-location-city"] input, input[data-sr-id="location-autocomplete-city-input"]');
          if (!(manualCityInput && isElementVisible(manualCityInput) && city)) {
            _context31.n = 5;
            break;
          }
          _context31.n = 5;
          return fillSmartText(manualCityInput, city);
        case 5:
          return _context31.a(2);
      }
    }, _callee30);
  }));
  return _fillLocationField.apply(this, arguments);
}
function formatSmartDate(value) {
  var parsed = parseProfileDate(String(value !== null && value !== void 0 ? value : ''));
  if (!parsed.year) return null;
  var month = String(parsed.month || '01').padStart(2, '0');
  return "".concat(parsed.year, "-").concat(month, "-01");
}
function getWorkHistorySummary(entry) {
  if (Array.isArray(entry === null || entry === void 0 ? void 0 : entry.description)) return entry.description.filter(Boolean).join('\n');
  return normalizeText((entry === null || entry === void 0 ? void 0 : entry.summary) || (entry === null || entry === void 0 ? void 0 : entry.description));
}
function isCurrentDatedEntry(entry) {
  var endDate = normalizeComparisonText(entry === null || entry === void 0 ? void 0 : entry.endDate);
  return !endDate || endDate === 'present' || endDate === 'current';
}
function getEducationSchool(entry) {
  return normalizeText((entry === null || entry === void 0 ? void 0 : entry.universityName) || (entry === null || entry === void 0 ? void 0 : entry.schoolName) || (entry === null || entry === void 0 ? void 0 : entry.institution) || (entry === null || entry === void 0 ? void 0 : entry.school));
}
function getSmartButtonControl(field) {
  return querySelectorDeep('button', field) || field;
}
function getSectionButtons(dataTest) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return querySelectorAllDeep("oc-button[data-test=\"".concat(dataTest, "\"], spl-button[data-test=\"").concat(dataTest, "\"]"), root).map(getSmartButtonControl).filter(Boolean);
}
function getSectionButton(dataTest) {
  var _getSectionButtons$;
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return (_getSectionButtons$ = getSectionButtons(dataTest, root)[0]) !== null && _getSectionButtons$ !== void 0 ? _getSectionButtons$ : null;
}
function clickSmartButton(button) {
  var _button$scrollIntoVie;
  if (!button) return false;
  (_button$scrollIntoVie = button.scrollIntoView) === null || _button$scrollIntoVie === void 0 || _button$scrollIntoVie.call(button, {
    block: 'center',
    inline: 'nearest'
  });
  triggerMouseEvent(button, 'mousedown');
  triggerMouseEvent(button, 'mouseup');
  triggerMouseEvent(button, 'click');
  return true;
}

// Every spl/oc-button press (Add / Save / Cancel / Delete / Yes / Next / apply trigger): a real pointer
// press on the runner lane, the synthetic mousedown/mouseup/click sequence elsewhere.
function pressSmartButton(_x22) {
  return _pressSmartButton.apply(this, arguments);
}
function _pressSmartButton() {
  _pressSmartButton = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee31(button) {
    return autofill_regenerator().w(function (_context32) {
      while (1) switch (_context32.n) {
        case 0:
          if (button) {
            _context32.n = 1;
            break;
          }
          return _context32.a(2, false);
        case 1:
          _context32.n = 2;
          return useRemoteInput();
        case 2:
          if (!_context32.v) {
            _context32.n = 4;
            break;
          }
          _context32.n = 3;
          return remoteClick(button);
        case 3:
          return _context32.a(2, true);
        case 4:
          return _context32.a(2, clickSmartButton(button));
      }
    }, _callee31);
  }));
  return _pressSmartButton.apply(this, arguments);
}
function getSmartButtonHost(button) {
  return closestDeep(button, 'oc-button, spl-button') || button;
}
function getSmartButtonText(button) {
  var _button$getAttribute, _host$getAttribute4;
  var host = getSmartButtonHost(button);
  return normalizeText((button === null || button === void 0 || (_button$getAttribute = button.getAttribute) === null || _button$getAttribute === void 0 ? void 0 : _button$getAttribute.call(button, 'aria-label')) || (host === null || host === void 0 || (_host$getAttribute4 = host.getAttribute) === null || _host$getAttribute4 === void 0 ? void 0 : _host$getAttribute4.call(host, 'aria-label')) || getDeepText(host) || getDeepText(button) || (button === null || button === void 0 ? void 0 : button.textContent));
}
function isSmartButtonDisabled(button) {
  var _button$getAttribute2, _button$hasAttribute, _host$getAttribute5, _host$hasAttribute;
  var host = getSmartButtonHost(button);
  return Boolean((button === null || button === void 0 ? void 0 : button.disabled) || (button === null || button === void 0 || (_button$getAttribute2 = button.getAttribute) === null || _button$getAttribute2 === void 0 ? void 0 : _button$getAttribute2.call(button, 'aria-disabled')) === 'true' || (button === null || button === void 0 || (_button$hasAttribute = button.hasAttribute) === null || _button$hasAttribute === void 0 ? void 0 : _button$hasAttribute.call(button, 'disabled')) || (host === null || host === void 0 || (_host$getAttribute5 = host.getAttribute) === null || _host$getAttribute5 === void 0 ? void 0 : _host$getAttribute5.call(host, 'aria-disabled')) === 'true' || (host === null || host === void 0 || (_host$hasAttribute = host.hasAttribute) === null || _host$hasAttribute === void 0 ? void 0 : _host$hasAttribute.call(host, 'disabled')));
}
function getSafeSmartRecruitersNextButton() {
  var nextButton = getSectionButton('footer-next');
  if (!nextButton || !isElementVisible(nextButton) || isSmartButtonDisabled(nextButton)) return null;
  var buttonText = getSmartButtonText(nextButton);
  if (!buttonText) return null;
  if (UNSAFE_ADVANCE_BUTTON_TEXT_PATTERN.test(buttonText)) return null;
  if (!SAFE_ADVANCE_BUTTON_TEXT_PATTERN.test(buttonText)) return null;
  return nextButton;
}

// --- Two-URL flow (posting -> oneclick form) + terminal submit --------------------------------
//
// SmartRecruiters spans two URLs like Dice: the server-rendered JD posting
// `jobs.smartrecruiters.com/<Company>/<numericId>` carries an "I'm interested" apply trigger
// (`a.js-oneclick[data-sr-track="apply"]`, multiple positions) that navigates SAME-TAB to the
// oneclick-ui Angular form `.../oneclick-ui/company/<Company>/publication/<uuid>`. Detection
// (field parsing + captcha guard) is scoped to the form; the posting is field-less but actionable,
// so isAutofillAvailable reports the apply trigger and advanceFlow clicks it. A hidden sibling
// `a.js-smartr-oneclick[data-sr-track="applyWithSmartr"]` (-> www.smartr.me) is excluded by both
// the class token and the data-sr-track value.

// Apply trigger: `js-oneclick` class token (NOT the `js-smartr-oneclick` sibling) + data-sr-track
// "apply" (NOT "applyWithSmartr"). Present only on the posting; null on the oneclick form.
var APPLY_TRIGGER_SELECTOR = 'a.js-oneclick[data-sr-track="apply"]';
function isOnOneClickForm() {
  return /\/oneclick-ui\//.test(window.location.pathname);
}

// The posting renders the trigger in several positions (header / aside / bottom). The header copy is
// `aria-hidden` inside a collapsed sticky bar (positive size, but off-screen and unreachable by a real
// pointer), so the aside `#st-apply` comes first — the remote path tries the candidates in this order.
function getSmartRecruitersApplyTriggers() {
  if (isOnOneClickForm()) return [];
  var triggers = querySelectorAllDeep(APPLY_TRIGGER_SELECTOR).filter(function (element) {
    return element instanceof HTMLElement && !element.classList.contains('js-smartr-oneclick') && element.getAttribute('data-sr-track') !== 'applyWithSmartr' && isElementVisible(element);
  });
  var rank = function rank(element) {
    return element.id === 'st-apply' || element.getAttribute('data-sr-track-position') === 'aside' ? 0 : element.getAttribute('aria-hidden') === 'true' ? 2 : 1;
  };
  return triggers.sort(function (a, b) {
    return rank(a) - rank(b);
  });
}
function getSmartRecruitersApplyTrigger() {
  var _getSmartRecruitersAp;
  return (_getSmartRecruitersAp = getSmartRecruitersApplyTriggers()[0]) !== null && _getSmartRecruitersAp !== void 0 ? _getSmartRecruitersAp : null;
}

// A footer/terminal CTA is a submit when its visible label is a terminal action
// (submit/apply/complete/finish/send/...) and NOT a safe advance (next/continue/review/preview) —
// complementary-by-construction with getSafeSmartRecruitersNextButton, so advance and submit can
// never target the same reused footer CTA.
function isSmartRecruitersSubmitLabel(button) {
  if (!button || !isElementVisible(button)) return false;
  var buttonText = getSmartButtonText(button);
  if (!buttonText) return false;
  if (SAFE_ADVANCE_BUTTON_TEXT_PATTERN.test(buttonText)) return false;
  return UNSAFE_ADVANCE_BUTTON_TEXT_PATTERN.test(buttonText);
}

// The terminal Submit control on the oneclick form. Scoped to the form (never the posting, whose
// apply trigger is an <a> and whose native buttons must not be mistaken for a submit). Matches by
// LABEL rather than a hardcoded data-test because the form document is DataDome-walled to recon, so
// the exact footer-submit data-test can't be confirmed — label matching covers both a reused
// `footer-next` CTA relabelled "Submit application" and any distinct footer-submit layout.
function findSmartRecruitersSubmitControl() {
  var _querySelectorAllDeep2;
  if (!isOnOneClickForm()) return null;
  var footerControl = querySelectorAllDeep('oc-button[data-test^="footer-"], spl-button[data-test^="footer-"]').map(getSmartButtonControl).filter(Boolean).find(isSmartRecruitersSubmitLabel);
  if (footerControl) return footerControl;
  var smartControl = querySelectorAllDeep('oc-button, spl-button').map(getSmartButtonControl).filter(Boolean).find(isSmartRecruitersSubmitLabel);
  if (smartControl) return smartControl;

  // Native submit fallback (also label-gated so a stray type=submit can't hijack a field step).
  return (_querySelectorAllDeep2 = querySelectorAllDeep('button[type="submit"]').find(isSmartRecruitersSubmitLabel)) !== null && _querySelectorAllDeep2 !== void 0 ? _querySelectorAllDeep2 : null;
}

// getSubmitButton for the shared submit path: returns the control only once it is enabled, so the
// shared enable-loop polls (returns null) while form validation still has the submit blocked.
function getSmartRecruitersSubmitButton() {
  var submitControl = findSmartRecruitersSubmitControl();
  if (!submitControl || !isElementVisible(submitControl) || isSmartButtonDisabled(submitControl)) return null;
  return submitControl;
}
function detectSmartRecruitersSubmitButton() {
  var submitControl = findSmartRecruitersSubmitControl();
  if (!submitControl) return {
    detected: false
  };
  return {
    detected: true,
    label: getSmartButtonText(submitControl),
    disabled: isSmartButtonDisabled(submitControl)
  };
}

// Non-mutating advance probe (takeover panel adaptive label). Mirrors advanceFlow's guard: a page
// whose only forward control is the terminal Submit is NOT an advance target.
function detectSmartRecruitersAdvanceButton() {
  if (findSmartRecruitersSubmitControl()) return {
    detected: false
  };
  var applyTrigger = getSmartRecruitersApplyTrigger();
  if (applyTrigger) return {
    detected: true,
    label: getDeepText(applyTrigger) || 'Apply'
  };
  var nextButton = getSafeSmartRecruitersNextButton();
  if (nextButton) return {
    detected: true,
    label: getSmartButtonText(nextButton)
  };
  return {
    detected: false
  };
}

// spl/oc-button needs a real pointer sequence on the inner control, not a bare .click(). On the runner
// lane the press is REAL input preceded by a short review scroll (pointer motion right before DataDome
// scores the submission); elsewhere the synthetic sequence.
function clickSmartRecruitersSubmitButton(_x23) {
  return _clickSmartRecruitersSubmitButton.apply(this, arguments);
} // Field-less but actionable pages (the posting) must still report as autofill-available so autonext
// fires on them; the form's field steps report via fieldCount, and its terminal step via submit.
function _clickSmartRecruitersSubmitButton() {
  _clickSmartRecruitersSubmitButton = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee32(button) {
    var _t0;
    return autofill_regenerator().w(function (_context33) {
      while (1) switch (_context33.p = _context33.n) {
        case 0:
          _context33.n = 1;
          return useRemoteInput();
        case 1:
          if (!_context33.v) {
            _context33.n = 7;
            break;
          }
          traceRemoteInput('smartrecruiters submit: review scroll + real click');
          _context33.p = 2;
          _context33.n = 3;
          return remoteReviewScroll();
        case 3:
          _context33.n = 4;
          return remoteClick(button);
        case 4:
          _context33.n = 6;
          break;
        case 5:
          _context33.p = 5;
          _t0 = _context33.v;
          traceRemoteInput("smartrecruiters submit failed: ".concat((_t0 === null || _t0 === void 0 ? void 0 : _t0.message) || _t0));
          throw _t0;
        case 6:
          return _context33.a(2);
        case 7:
          clickSmartButton(button);
        case 8:
          return _context33.a(2);
      }
    }, _callee32, null, [[2, 5]]);
  }));
  return _clickSmartRecruitersSubmitButton.apply(this, arguments);
}
function isSmartRecruitersAutofillAvailable(_ref7) {
  var fieldCount = _ref7.fieldCount,
    submitButton = _ref7.submitButton;
  if (fieldCount > 0) return true;
  if (submitButton !== null && submitButton !== void 0 && submitButton.detected) return true;
  return Boolean(getSmartRecruitersApplyTrigger() || getSafeSmartRecruitersNextButton());
}
function getDeleteConfirmationButton() {
  var dialog = querySelectorDeep('spl-dialog[open], [role="dialog"]');
  if (!dialog) return null;
  var dialogText = normalizeComparisonText(getDeepText(dialog));
  if (!dialogText.includes('delete this entry')) return null;
  var buttonHosts = querySelectorAllDeep('spl-button, oc-button', dialog);
  var yesButton = buttonHosts.find(function (button) {
    return normalizeComparisonText(getDeepText(button)) === 'yes';
  }) || buttonHosts.find(function (button) {
    return button.getAttribute('type') === 'primary';
  });
  if (yesButton) return getSmartButtonControl(yesButton);
  var nativeButton = querySelectorAllDeep('button', dialog).find(function (button) {
    return normalizeComparisonText(getDeepText(button)) === 'yes';
  });
  if (nativeButton) return nativeButton;
  return null;
}
function clickDeleteConfirmationButton() {
  return _clickDeleteConfirmationButton.apply(this, arguments);
}
function _clickDeleteConfirmationButton() {
  _clickDeleteConfirmationButton = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee33() {
    var deleteConfirmationButton;
    return autofill_regenerator().w(function (_context34) {
      while (1) switch (_context34.n) {
        case 0:
          _context34.n = 1;
          return waitForPositiveResultWithAbort(function () {
            return getDeleteConfirmationButton();
          }, MENU_WAIT_TIMEOUT_MS, autofill_NEVER_ABORT, 100);
        case 1:
          deleteConfirmationButton = _context34.v;
          if (!deleteConfirmationButton) {
            _context34.n = 2;
            break;
          }
          _context34.n = 2;
          return pressSmartButton(deleteConfirmationButton);
        case 2:
          return _context34.a(2);
      }
    }, _callee33);
  }));
  return _clickDeleteConfirmationButton.apply(this, arguments);
}
function getSectionEntryDeleteButtons(section, deleteButtonTest) {
  return getSectionButtons(deleteButtonTest, section).filter(isElementVisible);
}
function cancelOpenSectionEditors(_x24, _x25) {
  return _cancelOpenSectionEditors.apply(this, arguments);
}
function _cancelOpenSectionEditors() {
  _cancelOpenSectionEditors = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee34(section, cancelButtonTest) {
    var shouldAbort,
      cancelButtons,
      _iterator6,
      _step6,
      cancelButton,
      _args35 = arguments,
      _t1;
    return autofill_regenerator().w(function (_context35) {
      while (1) switch (_context35.p = _context35.n) {
        case 0:
          shouldAbort = _args35.length > 2 && _args35[2] !== undefined ? _args35[2] : autofill_NEVER_ABORT;
          cancelButtons = getSectionButtons(cancelButtonTest, section);
          if (!(!cancelButtons || !cancelButtons.length || shouldAbort())) {
            _context35.n = 1;
            break;
          }
          return _context35.a(2);
        case 1:
          _iterator6 = autofill_createForOfIteratorHelper(cancelButtons);
          _context35.p = 2;
          _iterator6.s();
        case 3:
          if ((_step6 = _iterator6.n()).done) {
            _context35.n = 5;
            break;
          }
          cancelButton = _step6.value;
          _context35.n = 4;
          return pressSmartButton(cancelButton);
        case 4:
          _context35.n = 3;
          break;
        case 5:
          _context35.n = 7;
          break;
        case 6:
          _context35.p = 6;
          _t1 = _context35.v;
          _iterator6.e(_t1);
        case 7:
          _context35.p = 7;
          _iterator6.f();
          return _context35.f(7);
        case 8:
          _context35.n = 9;
          return waitForPositiveResultWithAbort(function () {
            var currentCount = getSectionButtons(cancelButtonTest, section).length;
            return currentCount === 0 ? true : null;
          }, SECTION_CANCEL_WAIT_MS, shouldAbort, 100);
        case 9:
          return _context35.a(2);
      }
    }, _callee34, null, [[2, 6, 7, 8]]);
  }));
  return _cancelOpenSectionEditors.apply(this, arguments);
}
function clearSectionEntries(_x26, _x27) {
  return _clearSectionEntries.apply(this, arguments);
} // --- Profile-section hierarchy (experience & education), EDITOR mode ---
// Detector-driven root → group → leaf model, shared machinery in ../autofill-section-hierarchy.js.
// SmartRecruiters commits one entry at a time (Add → inline editor → Save): committed entries
// collapse to read-only cards (group-only nodes). There is no distinct editor element — editor
// "presence" is a VISIBLE save button, so the SECTION itself acts as the editor element: leaf
// lookups deep-query the section, only one editor opens at a time, and committed cards don't
// carry the editor's data-test controls. Everything traverses shadow DOM via the deep helpers.
function _clearSectionEntries() {
  _clearSectionEntries = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee35(section, _ref8) {
    var deleteButtonTest,
      cancelButtonTest,
      shouldAbort,
      deleteButtons,
      _iterator7,
      _step7,
      deleteButton,
      _args36 = arguments,
      _t10;
    return autofill_regenerator().w(function (_context36) {
      while (1) switch (_context36.p = _context36.n) {
        case 0:
          deleteButtonTest = _ref8.deleteButtonTest, cancelButtonTest = _ref8.cancelButtonTest;
          shouldAbort = _args36.length > 2 && _args36[2] !== undefined ? _args36[2] : autofill_NEVER_ABORT;
          if (!(!section || shouldAbort())) {
            _context36.n = 1;
            break;
          }
          return _context36.a(2);
        case 1:
          _context36.n = 2;
          return cancelOpenSectionEditors(section, cancelButtonTest, shouldAbort);
        case 2:
          if (!shouldAbort()) {
            _context36.n = 3;
            break;
          }
          return _context36.a(2);
        case 3:
          deleteButtons = getSectionEntryDeleteButtons(section, deleteButtonTest);
          if (!(deleteButtons.length === 0)) {
            _context36.n = 4;
            break;
          }
          return _context36.a(2);
        case 4:
          _iterator7 = autofill_createForOfIteratorHelper(deleteButtons);
          _context36.p = 5;
          _iterator7.s();
        case 6:
          if ((_step7 = _iterator7.n()).done) {
            _context36.n = 9;
            break;
          }
          deleteButton = _step7.value;
          _context36.n = 7;
          return pressSmartButton(deleteButton);
        case 7:
          _context36.n = 8;
          return clickDeleteConfirmationButton();
        case 8:
          _context36.n = 6;
          break;
        case 9:
          _context36.n = 11;
          break;
        case 10:
          _context36.p = 10;
          _t10 = _context36.v;
          _iterator7.e(_t10);
        case 11:
          _context36.p = 11;
          _iterator7.f();
          return _context36.f(11);
        case 12:
          return _context36.a(2);
      }
    }, _callee35, null, [[5, 10, 11, 12]]);
  }));
  return _clearSectionEntries.apply(this, arguments);
}
function getSmartSectionEditor(container, saveButtonTest) {
  var saveButton = getSectionButton(saveButtonTest, container);
  return saveButton && isElementVisible(saveButton) ? container : null;
}

// Committed (saved) entry cards, located via their delete buttons.
function getSmartSectionCommittedRows(container, deleteButtonTest) {
  return getSectionEntryDeleteButtons(container, deleteButtonTest).map(function (button) {
    return closestDeep(button, 'li') || getSmartButtonHost(button);
  });
}

// The 'section-<baseKind>' wrappers receive the WIDGET element (spl-autocomplete / oc-input /
// oc-datepicker / oc-checkbox); the smart-section-* handlers extract the inner control the way
// the old fillScoped* helpers did.
function getSmartSectionRowField(rowEl, mapping) {
  var _widget$getAttribute;
  var widget = querySelectorDeep(mapping.selector, rowEl);
  if (!widget) return null;
  return {
    field: widget,
    fieldId: ((_widget$getAttribute = widget.getAttribute) === null || _widget$getAttribute === void 0 ? void 0 : _widget$getAttribute.call(widget, 'data-test')) || mapping.key
  };
}

// Single Add click — appear-wait and re-press retries are the shared iterator's job.
function addSmartSectionRow(_x28, _x29) {
  return _addSmartSectionRow.apply(this, arguments);
} // Click Save + settle pause — the old flow had no commit verification either; a blocked save
// (empty required field) leaves the editor open for the user.
function _addSmartSectionRow() {
  _addSmartSectionRow = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee36(container, addButtonTest) {
    var shouldAbort,
      _args37 = arguments;
    return autofill_regenerator().w(function (_context37) {
      while (1) switch (_context37.n) {
        case 0:
          shouldAbort = _args37.length > 2 && _args37[2] !== undefined ? _args37[2] : autofill_NEVER_ABORT;
          if (!shouldAbort()) {
            _context37.n = 1;
            break;
          }
          return _context37.a(2);
        case 1:
          _context37.n = 2;
          return pressSmartButton(getSectionButton(addButtonTest, container));
        case 2:
          return _context37.a(2);
      }
    }, _callee36);
  }));
  return _addSmartSectionRow.apply(this, arguments);
}
function saveSmartSectionEntry(_x30, _x31) {
  return _saveSmartSectionEntry.apply(this, arguments);
}
function _saveSmartSectionEntry() {
  _saveSmartSectionEntry = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee37(container, saveButtonTest) {
    var shouldAbort,
      saveButton,
      _args38 = arguments;
    return autofill_regenerator().w(function (_context38) {
      while (1) switch (_context38.n) {
        case 0:
          shouldAbort = _args38.length > 2 && _args38[2] !== undefined ? _args38[2] : autofill_NEVER_ABORT;
          saveButton = getSectionButton(saveButtonTest, container);
          if (!(!saveButton || shouldAbort())) {
            _context38.n = 1;
            break;
          }
          return _context38.a(2);
        case 1:
          _context38.n = 2;
          return pressSmartButton(saveButton);
        case 2:
          _context38.n = 3;
          return sleep(SECTION_SAVE_WAIT_MS);
        case 3:
          return _context38.a(2);
      }
    }, _callee37);
  }));
  return _saveSmartSectionEntry.apply(this, arguments);
}
function createSmartProfileSection(_ref9) {
  var rootFieldId = _ref9.rootFieldId,
    rootQuestion = _ref9.rootQuestion,
    sectionTest = _ref9.sectionTest,
    profileSection = _ref9.profileSection,
    getEntries = _ref9.getEntries,
    rowLabel = _ref9.rowLabel,
    addButtonTest = _ref9.addButtonTest,
    saveButtonTest = _ref9.saveButtonTest,
    deleteButtonTest = _ref9.deleteButtonTest,
    cancelButtonTest = _ref9.cancelButtonTest,
    mappings = _ref9.mappings;
  return {
    rootFieldId: rootFieldId,
    rootQuestion: rootQuestion,
    answerType: rootFieldId,
    // root answerType AND root fieldKind
    profileSection: profileSection,
    // key into getProfileSectionData()
    getEntries: getEntries,
    rowLabel: rowLabel,
    maxEntries: MAX_PROFILE_SECTION_ENTRIES,
    editorAppearTimeoutMs: MENU_WAIT_TIMEOUT_MS,
    getContainer: function getContainer() {
      return querySelectorDeep("[data-test=\"".concat(sectionTest, "\"]"));
    },
    getRows: function getRows(container) {
      return getSmartSectionCommittedRows(container, deleteButtonTest);
    },
    // Presence switches the shared iterator to editor mode (section-as-editor, see above).
    getEditor: function getEditor(container) {
      return getSmartSectionEditor(container, saveButtonTest);
    },
    getRowField: getSmartSectionRowField,
    addRow: function addRow(container) {
      var _ref0 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref0$shouldAbort = _ref0.shouldAbort,
        shouldAbort = _ref0$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref0$shouldAbort;
      return addSmartSectionRow(container, addButtonTest, shouldAbort);
    },
    clearRows: function clearRows(container) {
      var _ref1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref1$shouldAbort = _ref1.shouldAbort,
        shouldAbort = _ref1$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref1$shouldAbort;
      return clearSectionEntries(container, {
        deleteButtonTest: deleteButtonTest,
        cancelButtonTest: cancelButtonTest
      }, shouldAbort);
    },
    saveEntry: function saveEntry(container) {
      var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref10$shouldAbort = _ref10.shouldAbort,
        shouldAbort = _ref10$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref10$shouldAbort;
      return saveSmartSectionEntry(container, saveButtonTest, shouldAbort);
    },
    mappings: mappings
  };
}
var SMART_WORK_HISTORY_SECTION = createSmartProfileSection({
  rootFieldId: 'workHistory',
  rootQuestion: 'Work history',
  sectionTest: 'experience',
  profileSection: 'workHistory',
  // Parity with the old fill: entries without a position title were never added.
  getEntries: function getEntries(profileData) {
    return (Array.isArray(profileData === null || profileData === void 0 ? void 0 : profileData.workHistory) ? profileData.workHistory : []).filter(function (entry) {
      return entry === null || entry === void 0 ? void 0 : entry.positionTitle;
    });
  },
  rowLabel: function rowLabel(rowIndex) {
    return "Work history ".concat(rowIndex + 1);
  },
  addButtonTest: 'add-experience',
  saveButtonTest: 'experience-save',
  deleteButtonTest: 'experience-entry-delete',
  cancelButtonTest: 'experience-cancel',
  mappings: [{
    key: 'jobTitle',
    label: 'Job title',
    selector: 'spl-autocomplete[data-test="job-title-autocomplete"]',
    profileKey: 'positionTitle',
    fieldKind: 'text',
    leafKind: 'smart-section-autocomplete'
  }, {
    key: 'company',
    label: 'Company',
    selector: 'spl-autocomplete[data-test="company-autocomplete"]',
    profileKey: 'companyName',
    fieldKind: 'text',
    leafKind: 'smart-section-autocomplete'
  }, {
    key: 'location',
    label: 'Location',
    selector: 'spl-autocomplete[data-test="location-autocomplete"]',
    fieldKind: 'text',
    leafKind: 'smart-section-autocomplete',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.location) || (entry === null || entry === void 0 ? void 0 : entry.city);
    }
  }, {
    key: 'description',
    label: 'Description',
    selector: 'oc-textarea[data-test="experience-description"]',
    fieldKind: 'text',
    leafKind: 'smart-section-text',
    resolveValue: function resolveValue(entry) {
      return getWorkHistorySummary(entry);
    }
  }, {
    key: 'startDate',
    label: 'Start date',
    selector: 'oc-datepicker[data-test="experience-date-from"]',
    fieldKind: 'text',
    leafKind: 'smart-section-date',
    resolveValue: function resolveValue(entry) {
      return formatSmartDate(entry === null || entry === void 0 ? void 0 : entry.startDate);
    }
  }, {
    // Fill order vs the End-date leaf doesn't matter even though checking this removes the
    // End-date input: a false value resolves to null -> skip (never clicks; a fresh editor
    // starts unchecked), and when true the End-date leaf skips itself (resolveValue null) and
    // its control is gone anyway (getRowField null -> no leaf).
    key: 'current',
    label: 'Current role',
    selector: 'oc-checkbox[data-test="experience-current"]',
    fieldKind: 'checkbox',
    leafKind: 'smart-section-checkbox',
    resolveValue: function resolveValue(entry) {
      return isCurrentDatedEntry(entry);
    }
  }, {
    key: 'endDate',
    label: 'End date',
    selector: 'oc-datepicker[data-test="experience-date-to"]',
    fieldKind: 'text',
    leafKind: 'smart-section-date',
    resolveValue: function resolveValue(entry) {
      return isCurrentDatedEntry(entry) ? null : formatSmartDate(entry === null || entry === void 0 ? void 0 : entry.endDate);
    }
  }]
});
var SMART_EDUCATION_SECTION = createSmartProfileSection({
  rootFieldId: 'educationHistory',
  rootQuestion: 'Education',
  sectionTest: 'education',
  profileSection: 'education',
  // Parity with the old fill: entries without a school were never added.
  getEntries: function getEntries(profileData) {
    return (Array.isArray(profileData === null || profileData === void 0 ? void 0 : profileData.education) ? profileData.education : []).filter(function (entry) {
      return getEducationSchool(entry);
    });
  },
  rowLabel: function rowLabel(rowIndex) {
    return "Education ".concat(rowIndex + 1);
  },
  addButtonTest: 'add-education',
  saveButtonTest: 'education-save',
  deleteButtonTest: 'education-entry-delete',
  cancelButtonTest: 'education-cancel',
  mappings: [{
    key: 'institution',
    label: 'School',
    selector: 'spl-autocomplete[data-test="institution-autocomplete"]',
    fieldKind: 'text',
    leafKind: 'smart-section-autocomplete',
    resolveValue: function resolveValue(entry) {
      return getEducationSchool(entry);
    }
  }, {
    key: 'major',
    label: 'Major',
    selector: 'oc-input[data-test="education-major"]',
    profileKey: 'major',
    fieldKind: 'text',
    leafKind: 'smart-section-text'
  }, {
    key: 'degree',
    label: 'Degree',
    selector: 'oc-input[data-test="education-degree"]',
    profileKey: 'degree',
    fieldKind: 'text',
    leafKind: 'smart-section-text'
  }, {
    key: 'location',
    label: 'Location',
    selector: 'spl-autocomplete[data-test="location-autocomplete"]',
    fieldKind: 'text',
    leafKind: 'smart-section-autocomplete',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.location) || (entry === null || entry === void 0 ? void 0 : entry.city);
    }
  }, {
    key: 'description',
    label: 'Description',
    selector: 'oc-textarea[data-test="education-description"]',
    profileKey: 'description',
    fieldKind: 'text',
    leafKind: 'smart-section-text'
  }, {
    key: 'startDate',
    label: 'Start date',
    selector: 'oc-datepicker[data-test="education-date-from"]',
    fieldKind: 'text',
    leafKind: 'smart-section-date',
    resolveValue: function resolveValue(entry) {
      return formatSmartDate(entry === null || entry === void 0 ? void 0 : entry.startDate);
    }
  }, {
    key: 'current',
    label: 'Currently studying',
    selector: 'oc-checkbox[data-test="education-current"]',
    fieldKind: 'checkbox',
    leafKind: 'smart-section-checkbox',
    resolveValue: function resolveValue(entry) {
      return isCurrentDatedEntry(entry);
    }
  }, {
    key: 'endDate',
    label: 'End date',
    selector: 'oc-datepicker[data-test="education-date-to"]',
    fieldKind: 'text',
    leafKind: 'smart-section-date',
    resolveValue: function resolveValue(entry) {
      return isCurrentDatedEntry(entry) ? null : formatSmartDate(entry === null || entry === void 0 ? void 0 : entry.endDate);
    }
  }]
});
var SMART_PROFILE_SECTIONS = [SMART_WORK_HISTORY_SECTION, SMART_EDUCATION_SECTION];
function fillFileAnswer(_x32, _x33) {
  return _fillFileAnswer.apply(this, arguments);
} // --- A résumé upload the site refused --------------------------------------------------------------
//
// SquareTrade 2026-10-24: the upload request failed in a short network blip, the page showed "Cannot upload
// resume. Please try again in a while." plus "Please attach your resume" under the failed file, and Next
// stalled. The doctor closed the message, deleted the file and attached it again — the second upload answered
// in 2.2 s. The dropzone reflects its list on the host `files` attribute (JSON); a file the server took
// carries its fileId. So the résumé fill waits for that answer, and a refused upload is attached again (at most
// twice per résumé fill); the advance step repeats the check right before Next.
function _fillFileAnswer() {
  _fillFileAnswer = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee38(answer, field) {
    var input;
    return autofill_regenerator().w(function (_context39) {
      while (1) switch (_context39.n) {
        case 0:
          if (!(!answer || autofill_typeof(answer) !== 'object' || answer.type !== 'file')) {
            _context39.n = 1;
            break;
          }
          return _context39.a(2);
        case 1:
          input = querySelectorDeep('input[type="file"]', field);
          if (input) {
            _context39.n = 2;
            break;
          }
          return _context39.a(2);
        case 2:
          fillFileInput(input, answer.fileName, answer.base64, answer.mimeType);
          input.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true
          }));
        case 3:
          return _context39.a(2);
      }
    }, _callee38);
  }));
  return _fillFileAnswer.apply(this, arguments);
}
var SMART_RESUME_FIELD_SELECTOR = 'spl-dropzone[data-test="resume-upload"]';
var SMART_UPLOAD_ERROR_DIALOG_PATTERN = /\b(cannot|could not|couldn't|unable to)\s+upload\b|\bupload\s+failed\b/i;
var SMART_ATTACH_RESUME_ERROR_PATTERN = /\bplease attach your (resume|résumé|cv)\b/i;
var SMART_DIALOG_CLOSE_PATTERN = /^(close|ok|okay|schlie(ss|ß)en|fermer|cerrar|fechar|chiudi|sluiten)$/i;
// The doctor's retry answered in 2.2 s (a 208 KB résumé through a residential proxy); the ceiling only bounds an
// upload that never answers.
var SMART_RESUME_UPLOAD_WAIT_MS = 4500;
var SMART_RESUME_REUPLOADS_PER_FILL = 2;
var smartResumeAnswer = null;
var smartResumeReuploadsLeft = 0;
function getSmartResumeFiles(dropzone) {
  var _dropzone$hasAttribut;
  if (!(dropzone !== null && dropzone !== void 0 && (_dropzone$hasAttribut = dropzone.hasAttribute) !== null && _dropzone$hasAttribut !== void 0 && _dropzone$hasAttribut.call(dropzone, 'files'))) return null;
  try {
    var files = JSON.parse(dropzone.getAttribute('files') || '[]');
    return Array.isArray(files) ? files : [];
  } catch (_error) {
    return [];
  }
}
function isSmartResumeUploaded(dropzone) {
  var _getSmartResumeFiles;
  return Boolean((_getSmartResumeFiles = getSmartResumeFiles(dropzone)) === null || _getSmartResumeFiles === void 0 ? void 0 : _getSmartResumeFiles.some(function (file) {
    return normalizeText(file === null || file === void 0 ? void 0 : file.fileId);
  }));
}
function findSmartUploadErrorDialog() {
  var _querySelectorAllDeep3;
  return (_querySelectorAllDeep3 = querySelectorAllDeep('spl-dialog[open], [role="dialog"], [role="alertdialog"]').find(function (dialog) {
    return SMART_UPLOAD_ERROR_DIALOG_PATTERN.test(getDeepText(dialog));
  })) !== null && _querySelectorAllDeep3 !== void 0 ? _querySelectorAllDeep3 : null;
}
function isSmartResumeUploadFailed(dropzone) {
  if (findSmartUploadErrorDialog()) return true;
  if (isSmartResumeUploaded(dropzone)) return false;
  return SMART_ATTACH_RESUME_ERROR_PATTERN.test(getDeepText(closestDeep(dropzone, 'spl-form-field') || dropzone));
}

// The delete control of the refused file: the icon button of its row (never the "Choose a file" browse
// control, which carries text).
function findSmartResumeDeleteControl(dropzone) {
  var _querySelectorAllDeep4;
  return (_querySelectorAllDeep4 = querySelectorAllDeep('button, [role="button"]', dropzone).filter(function (control) {
    return isElementVisible(control);
  }).find(function (control) {
    var label = normalizeComparisonText([control.getAttribute('aria-label'), control.getAttribute('title'), getDeepText(control)].filter(Boolean).join(' '));
    if (/choose a file|browse|drop it here|upload/.test(label)) return false;
    return !label || /\b(delete|remove|trash)\b/.test(label);
  })) !== null && _querySelectorAllDeep4 !== void 0 ? _querySelectorAllDeep4 : null;
}
function closeSmartUploadErrorDialog(_x34, _x35) {
  return _closeSmartUploadErrorDialog.apply(this, arguments);
} // 'uploaded' (the server's fileId is listed) | 'failed' (the error message) | 'unknown' (no answer in time, or a
// dropzone that does not list its files — the old behaviour).
function _closeSmartUploadErrorDialog() {
  _closeSmartUploadErrorDialog = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee39(dialog, shouldAbort) {
    var hosts, close;
    return autofill_regenerator().w(function (_context40) {
      while (1) switch (_context40.n) {
        case 0:
          hosts = querySelectorAllDeep('spl-button, oc-button, button', dialog);
          close = hosts.find(function (host) {
            return SMART_DIALOG_CLOSE_PATTERN.test(normalizeText(getDeepText(host)));
          });
          if (close) {
            _context40.n = 1;
            break;
          }
          return _context40.a(2);
        case 1:
          _context40.n = 2;
          return pressSmartButton(getSmartButtonControl(close));
        case 2:
          _context40.n = 3;
          return waitForPositiveResultWithAbort(function () {
            return findSmartUploadErrorDialog() !== dialog ? true : null;
          }, SECTION_CANCEL_WAIT_MS, shouldAbort, 100);
        case 3:
          return _context40.a(2);
      }
    }, _callee39);
  }));
  return _closeSmartUploadErrorDialog.apply(this, arguments);
}
function waitForSmartResumeUpload(_x36, _x37) {
  return _waitForSmartResumeUpload.apply(this, arguments);
}
function _waitForSmartResumeUpload() {
  _waitForSmartResumeUpload = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee40(dropzone, shouldAbort) {
    var outcome;
    return autofill_regenerator().w(function (_context41) {
      while (1) switch (_context41.n) {
        case 0:
          if (getSmartResumeFiles(dropzone)) {
            _context41.n = 1;
            break;
          }
          return _context41.a(2, 'unknown');
        case 1:
          _context41.n = 2;
          return waitForPositiveResultWithAbort(function () {
            if (findSmartUploadErrorDialog()) return 'failed';
            return isSmartResumeUploaded(dropzone) ? 'uploaded' : null;
          }, SMART_RESUME_UPLOAD_WAIT_MS, shouldAbort, 100);
        case 2:
          outcome = _context41.v;
          return _context41.a(2, outcome || 'unknown');
      }
    }, _callee40);
  }));
  return _waitForSmartResumeUpload.apply(this, arguments);
}
function retrySmartResumeUpload(_x38) {
  return _retrySmartResumeUpload.apply(this, arguments);
}
function _retrySmartResumeUpload() {
  _retrySmartResumeUpload = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee41(dropzone) {
    var shouldAbort,
      outcome,
      _loop2,
      _args43 = arguments;
    return autofill_regenerator().w(function (_context43) {
      while (1) switch (_context43.n) {
        case 0:
          shouldAbort = _args43.length > 1 && _args43[1] !== undefined ? _args43[1] : autofill_NEVER_ABORT;
          outcome = 'failed';
          _loop2 = /*#__PURE__*/autofill_regenerator().m(function _loop2() {
            var _getSmartResumeFiles2;
            var dialog, deleteControl;
            return autofill_regenerator().w(function (_context42) {
              while (1) switch (_context42.n) {
                case 0:
                  smartResumeReuploadsLeft -= 1;
                  traceRemoteInput('smartrecruiters résumé upload refused — closing the message and attaching it again');
                  dialog = findSmartUploadErrorDialog();
                  if (!dialog) {
                    _context42.n = 1;
                    break;
                  }
                  _context42.n = 1;
                  return closeSmartUploadErrorDialog(dialog, shouldAbort);
                case 1:
                  deleteControl = (_getSmartResumeFiles2 = getSmartResumeFiles(dropzone)) !== null && _getSmartResumeFiles2 !== void 0 && _getSmartResumeFiles2.length ? findSmartResumeDeleteControl(dropzone) : null;
                  if (!deleteControl) {
                    _context42.n = 3;
                    break;
                  }
                  _context42.n = 2;
                  return pressSmartButton(deleteControl);
                case 2:
                  _context42.n = 3;
                  return waitForPositiveResultWithAbort(function () {
                    return !deleteControl.isConnected || !isElementVisible(deleteControl) ? true : null;
                  }, SECTION_CANCEL_WAIT_MS, shouldAbort, 100);
                case 3:
                  _context42.n = 4;
                  return fillFileAnswer(smartResumeAnswer, dropzone);
                case 4:
                  _context42.n = 5;
                  return waitForSmartResumeUpload(dropzone, shouldAbort);
                case 5:
                  outcome = _context42.v;
                case 6:
                  return _context42.a(2);
              }
            }, _loop2);
          });
        case 1:
          if (!(outcome === 'failed' && smartResumeReuploadsLeft > 0 && !shouldAbort())) {
            _context43.n = 3;
            break;
          }
          return _context43.d(autofill_regeneratorValues(_loop2()), 2);
        case 2:
          _context43.n = 1;
          break;
        case 3:
          return _context43.a(2, outcome);
      }
    }, _callee41);
  }));
  return _retrySmartResumeUpload.apply(this, arguments);
}
function fillSmartResume(_x39, _x40, _x41) {
  return _fillSmartResume.apply(this, arguments);
}
function _fillSmartResume() {
  _fillSmartResume = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee42(answer, field, shouldAbort) {
    var _field$matches4;
    var _t11, _t12;
    return autofill_regenerator().w(function (_context44) {
      while (1) switch (_context44.n) {
        case 0:
          _context44.n = 1;
          return fillFileAnswer(answer, field);
        case 1:
          if (!((answer === null || answer === void 0 ? void 0 : answer.type) !== 'file' || !(field !== null && field !== void 0 && (_field$matches4 = field.matches) !== null && _field$matches4 !== void 0 && _field$matches4.call(field, SMART_RESUME_FIELD_SELECTOR)))) {
            _context44.n = 2;
            break;
          }
          return _context44.a(2);
        case 2:
          smartResumeAnswer = answer;
          smartResumeReuploadsLeft = SMART_RESUME_REUPLOADS_PER_FILL;
          _context44.n = 3;
          return waitForSmartResumeUpload(field, shouldAbort);
        case 3:
          _t11 = _context44.v;
          if (!(_t11 !== 'failed')) {
            _context44.n = 4;
            break;
          }
          return _context44.a(2);
        case 4:
          _context44.n = 5;
          return retrySmartResumeUpload(field, shouldAbort);
        case 5:
          _t12 = _context44.v;
          if (!(_t12 === 'failed')) {
            _context44.n = 6;
            break;
          }
          throw new Error('SmartRecruiters refused the résumé upload ("Cannot upload resume")');
        case 6:
          return _context44.a(2);
      }
    }, _callee42);
  }));
  return _fillSmartResume.apply(this, arguments);
}
function repairFailedSmartResumeUpload() {
  return _repairFailedSmartResumeUpload.apply(this, arguments);
} // --- Before Next: untitled experience editors, a lingering delete confirm ---------------------------
//
// An experience editor left open with its company, location and dates filled but the required Title empty
// ("Please provide title") blocks Next: SmartRecruiters' own résumé reading opens one for a job it could not
// title, and a title whose suggestion never committed leaves one too. The doctor cleared four of them
// (2026-10-19..23) the same way: type that job's title, pick the suggestion, Save. So right before Next each
// such editor gets the title of the profile job at the same company (else the answer engine's, asked for
// that company), then Save. An editor without a company is a blank extra editor with nothing to match —
// left alone.
function _repairFailedSmartResumeUpload() {
  _repairFailedSmartResumeUpload = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee43() {
    var dropzone;
    return autofill_regenerator().w(function (_context45) {
      while (1) switch (_context45.n) {
        case 0:
          dropzone = querySelectorDeep(SMART_RESUME_FIELD_SELECTOR);
          if (!(!dropzone || !smartResumeAnswer || !isSmartResumeUploadFailed(dropzone))) {
            _context45.n = 1;
            break;
          }
          return _context45.a(2);
        case 1:
          _context45.n = 2;
          return retrySmartResumeUpload(dropzone);
        case 2:
          return _context45.a(2);
      }
    }, _callee43);
  }));
  return _repairFailedSmartResumeUpload.apply(this, arguments);
}
var SMART_TITLE_WIDGET_SELECTOR = 'spl-autocomplete[data-test="job-title-autocomplete"]';
var SMART_COMPANY_WIDGET_SELECTOR = 'spl-autocomplete[data-test="company-autocomplete"]';
var SMART_EXPERIENCE_SAVE_TEST = 'experience-save';
var SMART_INSTITUTION_WIDGET_SELECTOR = 'spl-autocomplete[data-test="institution-autocomplete"]';
var SMART_DEGREE_FIELD_SELECTOR = 'oc-input[data-test="education-degree"]';
var SMART_MAJOR_FIELD_SELECTOR = 'oc-input[data-test="education-major"]';
var SMART_EDUCATION_SAVE_TEST = 'education-save';
var MAX_UNTITLED_EDITOR_REPAIRS = 3;
var UNTITLED_EDITOR_SAVE_WAIT_MS = 4000;
function getParentAcrossShadow(node) {
  var _node$getRootNode;
  return (node === null || node === void 0 ? void 0 : node.parentElement) || (node === null || node === void 0 || (_node$getRootNode = node.getRootNode) === null || _node$getRootNode === void 0 || (_node$getRootNode = _node$getRootNode.call(node)) === null || _node$getRootNode === void 0 ? void 0 : _node$getRootNode.host) || null;
}

// The editor holding `widget`: its nearest ancestor (across shadow roots) that holds a Save button — only
// when that ancestor holds no other such control (several editors under one parent stay unmatched).
function getSmartEditorRoot(widget, container) {
  var _ref11 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref11$widgetSelector = _ref11.widgetSelector,
    widgetSelector = _ref11$widgetSelector === void 0 ? SMART_TITLE_WIDGET_SELECTOR : _ref11$widgetSelector,
    _ref11$saveTest = _ref11.saveTest,
    saveTest = _ref11$saveTest === void 0 ? SMART_EXPERIENCE_SAVE_TEST : _ref11$saveTest;
  for (var node = getParentAcrossShadow(widget); node; node = getParentAcrossShadow(node)) {
    if (getSectionButtons(saveTest, node).length > 0) {
      return querySelectorAllDeep(widgetSelector, node).length === 1 ? node : null;
    }
    if (node === container) return null;
  }
  return null;
}
function getSmartWidgetInput(widget) {
  return widget ? querySelectorDeep('input', widget) : null;
}
function normalizeCompanyName(value) {
  return normalizeComparisonText(value).replace(/[^a-z0-9]+/g, ' ').trim();
}
function isSameCompany(left, right) {
  var a = normalizeCompanyName(left);
  var b = normalizeCompanyName(right);
  if (!a || !b) return false;
  if (a === b) return true;
  var _ref12 = a.length <= b.length ? [a, b] : [b, a],
    _ref13 = autofill_slicedToArray(_ref12, 2),
    shorter = _ref13[0],
    longer = _ref13[1];
  return shorter.length >= 3 && " ".concat(longer, " ").includes(" ".concat(shorter, " "));
}

// spl-autocomplete reflects its COMMITTED value on the host's `value` attribute (live markup 2026-10-23:
// value="Apple" on a picked company, value="[object Object]" on a picked city, value="" on a title whose
// typed text was never picked). true / false; null when the host carries no such attribute.
function isSmartAutocompleteCommitted(widget) {
  var _widget$getAttribute2;
  var value = widget === null || widget === void 0 || (_widget$getAttribute2 = widget.getAttribute) === null || _widget$getAttribute2 === void 0 ? void 0 : _widget$getAttribute2.call(widget, 'value');
  if (value == null) return null;
  return normalizeText(value) !== '';
}
function getSmartWidgetValue(widget) {
  var _widget$getAttribute3, _getSmartWidgetInput;
  return normalizeText((widget === null || widget === void 0 || (_widget$getAttribute3 = widget.getAttribute) === null || _widget$getAttribute3 === void 0 ? void 0 : _widget$getAttribute3.call(widget, 'value')) || ((_getSmartWidgetInput = getSmartWidgetInput(widget)) === null || _getSmartWidgetInput === void 0 ? void 0 : _getSmartWidgetInput.value));
}

// A short, common job title from the answer engine for a job at `company` (asked for the title alone — its
// free text can carry the company or a trailing period).
function getEngineJobTitle(_x42) {
  return _getEngineJobTitle.apply(this, arguments);
}
function _getEngineJobTitle() {
  _getEngineJobTitle = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee44(company) {
    var contextPairs,
      answer,
      _args46 = arguments,
      _t13;
    return autofill_regenerator().w(function (_context46) {
      while (1) switch (_context46.p = _context46.n) {
        case 0:
          contextPairs = _args46.length > 1 && _args46[1] !== undefined ? _args46[1] : [];
          if (company) {
            _context46.n = 1;
            break;
          }
          return _context46.a(2, '');
        case 1:
          _context46.p = 1;
          _context46.n = 2;
          return getAnswer("Job title only (a short, common job title without the company name) that you held at ".concat(company), 'text', [], {}, 'workHistory:untitled:jobTitle', true, [{
            question: 'Company',
            answer: company
          }].concat(autofill_toConsumableArray(contextPairs)));
        case 2:
          answer = _context46.v;
          return _context46.a(2, typeof answer === 'string' ? normalizeText(answer).replace(/^["']|["'.,;]+$/g, '').trim() : '');
        case 3:
          _context46.p = 3;
          _t13 = _context46.v;
          return _context46.a(2, '');
      }
    }, _callee44, null, [[1, 3]]);
  }));
  return _getEngineJobTitle.apply(this, arguments);
}
function getProfileTitleAtCompany(_x43) {
  return _getProfileTitleAtCompany.apply(this, arguments);
} // Types `firstValue` into a SmartRecruiters search (job title, school) and picks its suggestion. When that
// leaves the box uncommitted — the wording got no suggestion (Parallel Partners lab re-run 2026-10-23: the
// profile title was typed, nothing was picked, the box cleared to "Title is required" and the entry could
// never be saved; LLNL 2026-10-24: the same with a school) — it tries once more with `resolveFallback()`
// (the engine's wording). Answers whether a value is committed; an unknown commit state counts as committed
// (the old behaviour).
// A refused gesture (Miratech lab re-run 2026-10-24: "remote input refused: bridge_timeout" while typing the
// title, "target is covered by another element" on the school suggestion) leaves the box uncommitted the
// same way: the same value is typed once more before the engine's wording. `rethrow` (the leaves) still
// fails the field with that error when nothing committed.
function _getProfileTitleAtCompany() {
  _getProfileTitleAtCompany = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee45(company) {
    var profileData, entries, match, _t14;
    return autofill_regenerator().w(function (_context47) {
      while (1) switch (_context47.p = _context47.n) {
        case 0:
          _context47.p = 0;
          _context47.n = 1;
          return getProfileSectionData();
        case 1:
          profileData = _context47.v;
          entries = Array.isArray(profileData === null || profileData === void 0 ? void 0 : profileData.workHistory) ? profileData.workHistory : [];
          match = entries.find(function (entry) {
            return normalizeText(entry === null || entry === void 0 ? void 0 : entry.positionTitle) && isSameCompany(entry === null || entry === void 0 ? void 0 : entry.companyName, company);
          });
          return _context47.a(2, match ? normalizeText(match.positionTitle) : '');
        case 2:
          _context47.p = 2;
          _t14 = _context47.v;
          return _context47.a(2, '');
      }
    }, _callee45, null, [[0, 2]]);
  }));
  return _getProfileTitleAtCompany.apply(this, arguments);
}
function commitSmartAutocomplete(_x44, _x45, _x46, _x47) {
  return _commitSmartAutocomplete.apply(this, arguments);
}
function _commitSmartAutocomplete() {
  _commitSmartAutocomplete = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee47(widget, firstValue, resolveFallback, label) {
    var shouldAbort,
      _ref36,
      _ref36$rethrow,
      rethrow,
      tried,
      lastError,
      attempt,
      done,
      fallback,
      _args49 = arguments,
      _t16,
      _t17,
      _t18;
    return autofill_regenerator().w(function (_context49) {
      while (1) switch (_context49.n) {
        case 0:
          shouldAbort = _args49.length > 4 && _args49[4] !== undefined ? _args49[4] : autofill_NEVER_ABORT;
          _ref36 = _args49.length > 5 && _args49[5] !== undefined ? _args49[5] : {}, _ref36$rethrow = _ref36.rethrow, rethrow = _ref36$rethrow === void 0 ? false : _ref36$rethrow;
          tried = new Set();
          lastError = null;
          attempt = /*#__PURE__*/function () {
            var _ref37 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee46(candidate) {
              var _ref38,
                _ref38$again,
                again,
                value,
                key,
                _args48 = arguments,
                _t15;
              return autofill_regenerator().w(function (_context48) {
                while (1) switch (_context48.p = _context48.n) {
                  case 0:
                    _ref38 = _args48.length > 1 && _args48[1] !== undefined ? _args48[1] : {}, _ref38$again = _ref38.again, again = _ref38$again === void 0 ? false : _ref38$again;
                    value = normalizeText(candidate);
                    key = normalizeComparisonText(value);
                    if (!(!value || !again && tried.has(key) || shouldAbort())) {
                      _context48.n = 1;
                      break;
                    }
                    return _context48.a(2, false);
                  case 1:
                    tried.add(key);
                    _context48.p = 2;
                    _context48.n = 3;
                    return fillAutocompleteInput(getSmartWidgetInput(widget), value, shouldAbort);
                  case 3:
                    _context48.n = 5;
                    break;
                  case 4:
                    _context48.p = 4;
                    _t15 = _context48.v;
                    lastError = _t15;
                    traceRemoteInput("smartrecruiters ".concat(label, " fill failed: ").concat((_t15 === null || _t15 === void 0 ? void 0 : _t15.message) || _t15));
                    return _context48.a(2, false);
                  case 5:
                    _context48.n = 6;
                    return sleep(REMOTE_COMMIT_SETTLE_MS);
                  case 6:
                    return _context48.a(2, isSmartAutocompleteCommitted(widget) !== false);
                }
              }, _callee46, null, [[2, 4]]);
            }));
            return function attempt(_x119) {
              return _ref37.apply(this, arguments);
            };
          }();
          done = function done(committed) {
            if (!committed && rethrow && lastError) throw lastError;
            return committed;
          };
          _context49.n = 1;
          return attempt(firstValue);
        case 1:
          if (!_context49.v) {
            _context49.n = 2;
            break;
          }
          return _context49.a(2, true);
        case 2:
          if (!shouldAbort()) {
            _context49.n = 3;
            break;
          }
          return _context49.a(2, false);
        case 3:
          _t16 = lastError;
          if (!_t16) {
            _context49.n = 5;
            break;
          }
          _context49.n = 4;
          return attempt(firstValue, {
            again: true
          });
        case 4:
          _t16 = _context49.v;
        case 5:
          if (!_t16) {
            _context49.n = 6;
            break;
          }
          return _context49.a(2, true);
        case 6:
          if (!shouldAbort()) {
            _context49.n = 7;
            break;
          }
          return _context49.a(2, false);
        case 7:
          _t17 = normalizeText;
          _context49.n = 8;
          return resolveFallback();
        case 8:
          fallback = _t17(_context49.v);
          if (fallback) {
            _context49.n = 9;
            break;
          }
          return _context49.a(2, done(false));
        case 9:
          traceRemoteInput("smartrecruiters ".concat(label, " did not commit \u2014 retrying with the engine's wording"));
          _t18 = done;
          _context49.n = 10;
          return attempt(fallback);
        case 10:
          return _context49.a(2, _t18(_context49.v));
      }
    }, _callee47);
  }));
  return _commitSmartAutocomplete.apply(this, arguments);
}
function commitSmartJobTitle(_x48, _x49, _x50) {
  return _commitSmartJobTitle.apply(this, arguments);
} // The school's official name from the answer engine, grounded on that education entry's own facts.
function _commitSmartJobTitle() {
  _commitSmartJobTitle = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee49(titleWidget, firstTitle, resolveCompany) {
    var shouldAbort,
      options,
      _args51 = arguments;
    return autofill_regenerator().w(function (_context51) {
      while (1) switch (_context51.n) {
        case 0:
          shouldAbort = _args51.length > 3 && _args51[3] !== undefined ? _args51[3] : autofill_NEVER_ABORT;
          options = _args51.length > 4 && _args51[4] !== undefined ? _args51[4] : {};
          return _context51.a(2, commitSmartAutocomplete(titleWidget, firstTitle, /*#__PURE__*/autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee48() {
            var _t19, _t20;
            return autofill_regenerator().w(function (_context50) {
              while (1) switch (_context50.n) {
                case 0:
                  _t19 = getEngineJobTitle;
                  _t20 = normalizeText;
                  _context50.n = 1;
                  return resolveCompany();
                case 1:
                  return _context50.a(2, _t19(_t20(_context50.v)));
              }
            }, _callee48);
          })), 'job title', shouldAbort, options));
      }
    }, _callee49);
  }));
  return _commitSmartJobTitle.apply(this, arguments);
}
function getEngineSchoolName(_x51) {
  return _getEngineSchoolName.apply(this, arguments);
}
function _getEngineSchoolName() {
  _getEngineSchoolName = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee50(entry) {
    var pairs, answer, _t21;
    return autofill_regenerator().w(function (_context52) {
      while (1) switch (_context52.p = _context52.n) {
        case 0:
          pairs = [['Degree', entry === null || entry === void 0 ? void 0 : entry.degree], ['Major', entry === null || entry === void 0 ? void 0 : entry.major], ['School location', (entry === null || entry === void 0 ? void 0 : entry.location) || (entry === null || entry === void 0 ? void 0 : entry.city)], ['From', entry === null || entry === void 0 ? void 0 : entry.startDate], ['To', entry === null || entry === void 0 ? void 0 : entry.endDate]].filter(function (_ref40) {
            var _ref41 = autofill_slicedToArray(_ref40, 2),
              value = _ref41[1];
            return normalizeText(value);
          }).map(function (_ref42) {
            var _ref43 = autofill_slicedToArray(_ref42, 2),
              question = _ref43[0],
              value = _ref43[1];
            return {
              question: question,
              answer: normalizeText(value)
            };
          });
          if (!(pairs.length === 0)) {
            _context52.n = 1;
            break;
          }
          return _context52.a(2, '');
        case 1:
          _context52.p = 1;
          _context52.n = 2;
          return getAnswer('Official name of the school or university only (no degree, major or city) where you studied', 'text', [], {}, 'educationHistory:untitled:institution', true, pairs);
        case 2:
          answer = _context52.v;
          return _context52.a(2, typeof answer === 'string' ? normalizeText(answer).replace(/^["']|["'.,;]+$/g, '').trim() : '');
        case 3:
          _context52.p = 3;
          _t21 = _context52.v;
          return _context52.a(2, '');
      }
    }, _callee50, null, [[1, 3]]);
  }));
  return _getEngineSchoolName.apply(this, arguments);
}
function getProfileEducationEntries(profileData) {
  try {
    return SMART_EDUCATION_SECTION.getEntries(profileData);
  } catch (_error) {
    return [];
  }
}

// The profile school for an open education editor, matched by its degree and major (both when both are
// filled); none when the match is not unique.
function getProfileSchoolFor(_x52, _x53) {
  return _getProfileSchoolFor.apply(this, arguments);
} // The education School leaf (fieldId educationHistory:<row>:institution): the profile school first, the
// engine's official name for that entry when it does not commit.
function _getProfileSchoolFor() {
  _getProfileSchoolFor = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee51(degree, major) {
    var entries, same, matches, _t22, _t23;
    return autofill_regenerator().w(function (_context53) {
      while (1) switch (_context53.p = _context53.n) {
        case 0:
          _context53.p = 0;
          _t22 = getProfileEducationEntries;
          _context53.n = 1;
          return getProfileSectionData();
        case 1:
          entries = _t22(_context53.v);
          same = function same(left, right) {
            return normalizeComparisonText(left) === normalizeComparisonText(right);
          };
          matches = entries.filter(function (entry) {
            return (!degree || same(entry === null || entry === void 0 ? void 0 : entry.degree, degree)) && (!major || same(entry === null || entry === void 0 ? void 0 : entry.major, major));
          });
          return _context53.a(2, matches.length === 1 ? getEducationSchool(matches[0]) : '');
        case 2:
          _context53.p = 2;
          _t23 = _context53.v;
          return _context53.a(2, '');
      }
    }, _callee51, null, [[0, 2]]);
  }));
  return _getProfileSchoolFor.apply(this, arguments);
}
function fillSmartInstitutionLeaf(_x54, _x55, _x56, _x57) {
  return _fillSmartInstitutionLeaf.apply(this, arguments);
} // The work-history Title leaf (fieldId workHistory:<row>:jobTitle): the profile title first, the engine's
// short title when it does not commit. The company for the engine comes from the profile entry — the
// Company box fills after the title.
function _fillSmartInstitutionLeaf() {
  _fillSmartInstitutionLeaf = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee53(fieldId, answer, widget, shouldAbort) {
    var rowIndex;
    return autofill_regenerator().w(function (_context55) {
      while (1) switch (_context55.n) {
        case 0:
          rowIndex = Number(String(fieldId).split(':')[1]);
          _context55.n = 1;
          return commitSmartAutocomplete(widget, answer, /*#__PURE__*/autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee52() {
            var _t24, _t25, _t26, _t27;
            return autofill_regenerator().w(function (_context54) {
              while (1) switch (_context54.p = _context54.n) {
                case 0:
                  _context54.p = 0;
                  _t24 = getEngineSchoolName;
                  _t25 = getProfileEducationEntries;
                  _context54.n = 1;
                  return getProfileSectionData();
                case 1:
                  _t26 = rowIndex;
                  return _context54.a(2, _t24(_t25(_context54.v)[_t26]));
                case 2:
                  _context54.p = 2;
                  _t27 = _context54.v;
                  return _context54.a(2, '');
              }
            }, _callee52, null, [[0, 2]]);
          })), 'school name', shouldAbort, {
            rethrow: true
          });
        case 1:
          return _context55.a(2);
      }
    }, _callee53);
  }));
  return _fillSmartInstitutionLeaf.apply(this, arguments);
}
function fillSmartJobTitleLeaf(_x58, _x59, _x60, _x61) {
  return _fillSmartJobTitleLeaf.apply(this, arguments);
}
function _fillSmartJobTitleLeaf() {
  _fillSmartJobTitleLeaf = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee55(fieldId, answer, titleWidget, shouldAbort) {
    var rowIndex;
    return autofill_regenerator().w(function (_context57) {
      while (1) switch (_context57.n) {
        case 0:
          rowIndex = Number(String(fieldId).split(':')[1]);
          _context57.n = 1;
          return commitSmartJobTitle(titleWidget, answer, /*#__PURE__*/autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee54() {
            var entry, _t28, _t29, _t30;
            return autofill_regenerator().w(function (_context56) {
              while (1) switch (_context56.p = _context56.n) {
                case 0:
                  _context56.p = 0;
                  _t28 = SMART_WORK_HISTORY_SECTION;
                  _context56.n = 1;
                  return getProfileSectionData();
                case 1:
                  _t29 = rowIndex;
                  entry = _t28.getEntries.call(_t28, _context56.v)[_t29];
                  return _context56.a(2, entry === null || entry === void 0 ? void 0 : entry.companyName);
                case 2:
                  _context56.p = 2;
                  _t30 = _context56.v;
                  return _context56.a(2, '');
              }
            }, _callee54, null, [[0, 2]]);
          })), shouldAbort, {
            rethrow: true
          });
        case 1:
          return _context57.a(2);
      }
    }, _callee55);
  }));
  return _fillSmartJobTitleLeaf.apply(this, arguments);
}
function isUncommittedSmartWidget(widget, editor) {
  var input = getSmartWidgetInput(widget);
  if (!editor || !input || !isElementVisible(input)) return false;
  var committed = isSmartAutocompleteCommitted(widget);
  return committed === false || committed === null && !normalizeText(input.value);
}

// Before Next: each open editor of `section` whose `widgetSelector` search never committed but that carries
// other content (`hasContent`: a blank extra editor has nothing to match) gets `firstValue(editor)` (the
// profile's), else `fallbackValue(editor)` (the engine's), and is saved once that value committed.
function repairOpenSmartEditors(_x62) {
  return _repairOpenSmartEditors.apply(this, arguments);
}
function _repairOpenSmartEditors() {
  _repairOpenSmartEditors = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee56(_ref14) {
    var section, widgetSelector, saveTest, hasContent, firstValue, fallbackValue, label, _loop3, _ret, repair;
    return autofill_regenerator().w(function (_context59) {
      while (1) switch (_context59.n) {
        case 0:
          section = _ref14.section, widgetSelector = _ref14.widgetSelector, saveTest = _ref14.saveTest, hasContent = _ref14.hasContent, firstValue = _ref14.firstValue, fallbackValue = _ref14.fallbackValue, label = _ref14.label;
          _loop3 = /*#__PURE__*/autofill_regenerator().m(function _loop3() {
            var container, target, committed, saved, _t31, _t32;
            return autofill_regenerator().w(function (_context58) {
              while (1) switch (_context58.n) {
                case 0:
                  container = section.getContainer();
                  if (container) {
                    _context58.n = 1;
                    break;
                  }
                  return _context58.a(2, {
                    v: void 0
                  });
                case 1:
                  target = querySelectorAllDeep(widgetSelector, container).map(function (widget) {
                    return {
                      widget: widget,
                      editor: getSmartEditorRoot(widget, container, {
                        widgetSelector: widgetSelector,
                        saveTest: saveTest
                      })
                    };
                  }).find(function (_ref46) {
                    var widget = _ref46.widget,
                      editor = _ref46.editor;
                    return isUncommittedSmartWidget(widget, editor) && hasContent(editor);
                  });
                  if (target) {
                    _context58.n = 2;
                    break;
                  }
                  return _context58.a(2, {
                    v: void 0
                  });
                case 2:
                  traceRemoteInput("smartrecruiters ".concat(label, " missing in an open editor before Next \u2014 typing it and saving"));
                  _t31 = commitSmartAutocomplete;
                  _t32 = target.widget;
                  _context58.n = 3;
                  return firstValue(target.editor);
                case 3:
                  _context58.n = 4;
                  return _t31(_t32, _context58.v, function () {
                    return fallbackValue(target.editor);
                  }, label);
                case 4:
                  committed = _context58.v;
                  if (committed) {
                    _context58.n = 5;
                    break;
                  }
                  return _context58.a(2, {
                    v: void 0
                  });
                case 5:
                  _context58.n = 6;
                  return pressSmartButton(getSectionButton(saveTest, target.editor));
                case 6:
                  _context58.n = 7;
                  return waitForPositiveResultWithAbort(function () {
                    var input = getSmartWidgetInput(target.widget);
                    return !target.widget.isConnected || !input || !isElementVisible(input) ? true : null;
                  }, UNTITLED_EDITOR_SAVE_WAIT_MS, autofill_NEVER_ABORT, 100);
                case 7:
                  saved = _context58.v;
                  if (saved) {
                    _context58.n = 8;
                    break;
                  }
                  return _context58.a(2, {
                    v: void 0
                  });
                case 8:
                  _context58.n = 9;
                  return sleep(SECTION_SAVE_WAIT_MS);
                case 9:
                  return _context58.a(2);
              }
            }, _loop3);
          });
          repair = 0;
        case 1:
          if (!(repair < MAX_UNTITLED_EDITOR_REPAIRS)) {
            _context59.n = 4;
            break;
          }
          return _context59.d(autofill_regeneratorValues(_loop3()), 2);
        case 2:
          _ret = _context59.v;
          if (!_ret) {
            _context59.n = 3;
            break;
          }
          return _context59.a(2, _ret.v);
        case 3:
          repair += 1;
          _context59.n = 1;
          break;
        case 4:
          return _context59.a(2);
      }
    }, _callee56);
  }));
  return _repairOpenSmartEditors.apply(this, arguments);
}
var getEditorCompany = function getEditorCompany(editor) {
  return getSmartWidgetValue(querySelectorDeep(SMART_COMPANY_WIDGET_SELECTOR, editor));
};
var getEditorInputValue = function getEditorInputValue(editor, selector) {
  var _getSmartWidgetInput2;
  return normalizeText((_getSmartWidgetInput2 = getSmartWidgetInput(querySelectorDeep(selector, editor))) === null || _getSmartWidgetInput2 === void 0 ? void 0 : _getSmartWidgetInput2.value);
};
function completeUntitledExperienceEditors() {
  return repairOpenSmartEditors({
    section: SMART_WORK_HISTORY_SECTION,
    widgetSelector: SMART_TITLE_WIDGET_SELECTOR,
    saveTest: SMART_EXPERIENCE_SAVE_TEST,
    hasContent: function hasContent(editor) {
      return Boolean(getEditorCompany(editor));
    },
    firstValue: function firstValue(editor) {
      return getProfileTitleAtCompany(getEditorCompany(editor));
    },
    fallbackValue: function fallbackValue(editor) {
      return getEngineJobTitle(getEditorCompany(editor));
    },
    label: 'job title'
  });
}

// Education twin (LLNL 2026-10-24): an editor with Major / Degree / dates filled but the School empty
// ("Please provide institution").
function completeUnnamedEducationEditors() {
  var degreeOf = function degreeOf(editor) {
    return getEditorInputValue(editor, SMART_DEGREE_FIELD_SELECTOR);
  };
  var majorOf = function majorOf(editor) {
    return getEditorInputValue(editor, SMART_MAJOR_FIELD_SELECTOR);
  };
  return repairOpenSmartEditors({
    section: SMART_EDUCATION_SECTION,
    widgetSelector: SMART_INSTITUTION_WIDGET_SELECTOR,
    saveTest: SMART_EDUCATION_SAVE_TEST,
    hasContent: function hasContent(editor) {
      return Boolean(degreeOf(editor) || majorOf(editor));
    },
    firstValue: function firstValue(editor) {
      return getProfileSchoolFor(degreeOf(editor), majorOf(editor));
    },
    fallbackValue: function fallbackValue(editor) {
      return getEngineSchoolName({
        degree: degreeOf(editor),
        major: majorOf(editor)
      });
    },
    label: 'school name'
  });
}

// Blank entries before Next (Miratech 2026-10-24; AbbVie 2026-10-22 the same): SmartRecruiters can hold an
// experience / education entry with every field empty in its form model — a blank card (no title, no
// company) once its editor is cancelled. Next validates it, re-opens it as a blank editor and stays on the
// page, every time (the live run's 4 Next presses left 4 blank editors). The doctor got through by deleting
// the blank card (trash, then Yes). So before Next: Cancel each open editor with nothing in it, then delete
// each blank card. Editors and cards with any content are left alone.
var SMART_BLANK_ENTRY_SECTIONS = [{
  getSection: function getSection() {
    return SMART_WORK_HISTORY_SECTION;
  },
  saveTest: SMART_EXPERIENCE_SAVE_TEST,
  cancelTest: 'experience-cancel',
  deleteTest: 'experience-entry-delete',
  cardSelector: 'oc-experience-entry, [data-test="experience-entry"]',
  contentSelectors: [SMART_TITLE_WIDGET_SELECTOR, SMART_COMPANY_WIDGET_SELECTOR]
}, {
  getSection: function getSection() {
    return SMART_EDUCATION_SECTION;
  },
  saveTest: SMART_EDUCATION_SAVE_TEST,
  cancelTest: 'education-cancel',
  deleteTest: 'education-entry-delete',
  cardSelector: 'oc-education-entry, [data-test="education-entry"]',
  contentSelectors: [SMART_INSTITUTION_WIDGET_SELECTOR, SMART_MAJOR_FIELD_SELECTOR, SMART_DEGREE_FIELD_SELECTOR]
}];
var MAX_BLANK_ENTRY_REMOVALS = 4;

// The editor a Cancel button belongs to: its nearest ancestor (across shadow roots) holding the entry's
// anchor control (Title / School) — only when it holds exactly one of them and one Save.
function getSmartEditorForButton(button, container, saveTest, anchorSelector) {
  for (var node = getParentAcrossShadow(button); node; node = getParentAcrossShadow(node)) {
    var anchors = querySelectorAllDeep(anchorSelector, node).length;
    if (anchors > 0) return anchors === 1 && getSectionButtons(saveTest, node).length === 1 ? node : null;
    if (node === container) return null;
  }
  return null;
}
function isBlankSmartEditor(editor, contentSelectors) {
  return contentSelectors.every(function (selector) {
    return !getSmartWidgetValue(querySelectorDeep(selector, editor));
  });
}
function isBlankSmartCard(card) {
  return Boolean(card) && normalizeText(card.textContent).replace(/[\s\-–—]+/g, '') === '';
}
function waitForSmartElementGone(_x63) {
  return _waitForSmartElementGone.apply(this, arguments);
}
function _waitForSmartElementGone() {
  _waitForSmartElementGone = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee57(element) {
    var timeoutMs,
      _args60 = arguments,
      _t33;
    return autofill_regenerator().w(function (_context60) {
      while (1) switch (_context60.n) {
        case 0:
          timeoutMs = _args60.length > 1 && _args60[1] !== undefined ? _args60[1] : UNTITLED_EDITOR_SAVE_WAIT_MS;
          _t33 = Boolean;
          _context60.n = 1;
          return waitForPositiveResultWithAbort(function () {
            return !element.isConnected || !isElementVisible(element) ? true : null;
          }, timeoutMs, autofill_NEVER_ABORT, 100);
        case 1:
          return _context60.a(2, _t33(_context60.v));
      }
    }, _callee57);
  }));
  return _waitForSmartElementGone.apply(this, arguments);
}
function removeBlankSmartEntries() {
  return _removeBlankSmartEntries.apply(this, arguments);
} // A "Would you like to delete this entry?" confirm still open (the clear pass pressed a card's delete and
// its Yes never landed) covers the page, Next included. The doctor answered No both times (NBCUniversal
// 2026-10-20, Intelerad 2026-10-22): keeping the entry loses nothing.
function _removeBlankSmartEntries() {
  _removeBlankSmartEntries = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee58() {
    var _iterator8, _step8, _loop4, _t34;
    return autofill_regenerator().w(function (_context63) {
      while (1) switch (_context63.p = _context63.n) {
        case 0:
          _iterator8 = autofill_createForOfIteratorHelper(SMART_BLANK_ENTRY_SECTIONS);
          _context63.p = 1;
          _loop4 = /*#__PURE__*/autofill_regenerator().m(function _loop4() {
            var config, _loop5, _ret2, removal;
            return autofill_regenerator().w(function (_context62) {
              while (1) switch (_context62.n) {
                case 0:
                  config = _step8.value;
                  _loop5 = /*#__PURE__*/autofill_regenerator().m(function _loop5() {
                    var container, blankCancel, blankDelete;
                    return autofill_regenerator().w(function (_context61) {
                      while (1) switch (_context61.n) {
                        case 0:
                          container = config.getSection().getContainer();
                          if (container) {
                            _context61.n = 1;
                            break;
                          }
                          return _context61.a(2, 0);
                        case 1:
                          blankCancel = getSectionButtons(config.cancelTest, container).filter(isElementVisible).find(function (button) {
                            var editor = getSmartEditorForButton(button, container, config.saveTest, config.contentSelectors[0]);
                            return editor && isBlankSmartEditor(editor, config.contentSelectors);
                          });
                          if (!blankCancel) {
                            _context61.n = 5;
                            break;
                          }
                          traceRemoteInput("smartrecruiters blank ".concat(config.cancelTest.split('-')[0], " editor open before Next \u2014 cancelling it"));
                          _context61.n = 2;
                          return pressSmartButton(blankCancel);
                        case 2:
                          _context61.n = 3;
                          return waitForSmartElementGone(blankCancel, SECTION_CANCEL_WAIT_MS);
                        case 3:
                          if (_context61.v) {
                            _context61.n = 4;
                            break;
                          }
                          return _context61.a(2, 0);
                        case 4:
                          return _context61.a(2, 1);
                        case 5:
                          blankDelete = getSectionButtons(config.deleteTest, container).filter(isElementVisible).find(function (button) {
                            return isBlankSmartCard(closestDeep(button, config.cardSelector));
                          });
                          if (blankDelete) {
                            _context61.n = 6;
                            break;
                          }
                          return _context61.a(2, 0);
                        case 6:
                          traceRemoteInput("smartrecruiters blank ".concat(config.deleteTest.split('-')[0], " card before Next \u2014 deleting it"));
                          _context61.n = 7;
                          return pressSmartButton(blankDelete);
                        case 7:
                          _context61.n = 8;
                          return clickDeleteConfirmationButton();
                        case 8:
                          _context61.n = 9;
                          return waitForSmartElementGone(blankDelete);
                        case 9:
                          if (_context61.v) {
                            _context61.n = 10;
                            break;
                          }
                          return _context61.a(2, 0);
                        case 10:
                          return _context61.a(2);
                      }
                    }, _loop5);
                  });
                  removal = 0;
                case 1:
                  if (!(removal < MAX_BLANK_ENTRY_REMOVALS)) {
                    _context62.n = 5;
                    break;
                  }
                  return _context62.d(autofill_regeneratorValues(_loop5()), 2);
                case 2:
                  _ret2 = _context62.v;
                  if (!(_ret2 === 0)) {
                    _context62.n = 3;
                    break;
                  }
                  return _context62.a(3, 5);
                case 3:
                  if (!(_ret2 === 1)) {
                    _context62.n = 4;
                    break;
                  }
                  return _context62.a(3, 4);
                case 4:
                  removal += 1;
                  _context62.n = 1;
                  break;
                case 5:
                  return _context62.a(2);
              }
            }, _loop4);
          });
          _iterator8.s();
        case 2:
          if ((_step8 = _iterator8.n()).done) {
            _context63.n = 4;
            break;
          }
          return _context63.d(autofill_regeneratorValues(_loop4()), 3);
        case 3:
          _context63.n = 2;
          break;
        case 4:
          _context63.n = 6;
          break;
        case 5:
          _context63.p = 5;
          _t34 = _context63.v;
          _iterator8.e(_t34);
        case 6:
          _context63.p = 6;
          _iterator8.f();
          return _context63.f(6);
        case 7:
          return _context63.a(2);
      }
    }, _callee58, null, [[1, 5, 6, 7]]);
  }));
  return _removeBlankSmartEntries.apply(this, arguments);
}
function dismissLingeringDeleteConfirmation() {
  return _dismissLingeringDeleteConfirmation.apply(this, arguments);
}
function _dismissLingeringDeleteConfirmation() {
  _dismissLingeringDeleteConfirmation = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee59() {
    var dialog, noHost;
    return autofill_regenerator().w(function (_context64) {
      while (1) switch (_context64.n) {
        case 0:
          dialog = querySelectorDeep('spl-dialog[open], [role="dialog"]');
          if (!(!dialog || !normalizeComparisonText(getDeepText(dialog)).includes('delete this entry'))) {
            _context64.n = 1;
            break;
          }
          return _context64.a(2);
        case 1:
          noHost = querySelectorAllDeep('spl-button, oc-button', dialog).find(function (button) {
            return /^(no|nein|non)$/.test(normalizeComparisonText(getDeepText(button)));
          });
          if (noHost) {
            _context64.n = 2;
            break;
          }
          return _context64.a(2);
        case 2:
          traceRemoteInput('smartrecruiters delete-entry confirm still open before Next — answering No');
          _context64.n = 3;
          return pressSmartButton(getSmartButtonControl(noHost));
        case 3:
          _context64.n = 4;
          return sleep(REMOTE_COMMIT_SETTLE_MS);
        case 4:
          return _context64.a(2);
      }
    }, _callee59);
  }));
  return _dismissLingeringDeleteConfirmation.apply(this, arguments);
}
function advanceSmartRecruitersAutofillFlow() {
  return _advanceSmartRecruitersAutofillFlow.apply(this, arguments);
}
function _advanceSmartRecruitersAutofillFlow() {
  _advanceSmartRecruitersAutofillFlow = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee60() {
    var applyTriggers, _lastError, _iterator9, _step9, trigger, nextButton, _t35, _t36, _t37, _t38;
    return autofill_regenerator().w(function (_context65) {
      while (1) switch (_context65.p = _context65.n) {
        case 0:
          if (!findSmartRecruitersSubmitControl()) {
            _context65.n = 1;
            break;
          }
          return _context65.a(2, false);
        case 1:
          // JD posting: click the "I'm interested" apply trigger (navigates same-tab to the oneclick form).
          // Checked BEFORE the footer-next wait so the field-less posting doesn't idle the 5s timeout.
          applyTriggers = getSmartRecruitersApplyTriggers();
          if (!(applyTriggers.length > 0)) {
            _context65.n = 15;
            break;
          }
          _context65.n = 2;
          return useRemoteInput();
        case 2:
          if (!_context65.v) {
            _context65.n = 14;
            break;
          }
          // A real pointer needs an on-screen copy: the aside button first, then any other that can be
          // scrolled to; the collapsed header copy fails its scroll and is skipped.
          _lastError = null;
          _iterator9 = autofill_createForOfIteratorHelper(applyTriggers);
          _context65.p = 3;
          _iterator9.s();
        case 4:
          if ((_step9 = _iterator9.n()).done) {
            _context65.n = 10;
            break;
          }
          trigger = _step9.value;
          _context65.p = 5;
          _context65.n = 6;
          return remoteClick(trigger);
        case 6:
          return _context65.a(2, true);
        case 7:
          _context65.p = 7;
          _t35 = _context65.v;
          if (_t35 instanceof RemoteInputError) {
            _context65.n = 8;
            break;
          }
          throw _t35;
        case 8:
          _lastError = _t35;
        case 9:
          _context65.n = 4;
          break;
        case 10:
          _context65.n = 12;
          break;
        case 11:
          _context65.p = 11;
          _t36 = _context65.v;
          _iterator9.e(_t36);
        case 12:
          _context65.p = 12;
          _iterator9.f();
          return _context65.f(12);
        case 13:
          throw _lastError;
        case 14:
          clickSmartControl(applyTriggers[0]);
          return _context65.a(2, true);
        case 15:
          _context65.n = 16;
          return waitForPositiveResultWithAbort(getSafeSmartRecruitersNextButton, AUTO_ADVANCE_WAIT_TIMEOUT_MS, autofill_NEVER_ABORT, 100);
        case 16:
          nextButton = _context65.v;
          if (nextButton) {
            _context65.n = 17;
            break;
          }
          return _context65.a(2, false);
        case 17:
          _context65.p = 17;
          _context65.n = 18;
          return dismissLingeringDeleteConfirmation();
        case 18:
          _context65.n = 19;
          return completeUntitledExperienceEditors();
        case 19:
          _context65.n = 20;
          return completeUnnamedEducationEditors();
        case 20:
          _context65.n = 21;
          return removeBlankSmartEntries();
        case 21:
          _context65.n = 23;
          break;
        case 22:
          _context65.p = 22;
          _t37 = _context65.v;
          traceRemoteInput("smartrecruiters pre-Next repair failed: ".concat((_t37 === null || _t37 === void 0 ? void 0 : _t37.message) || _t37));
        case 23:
          _context65.p = 23;
          _context65.n = 24;
          return repairFailedSmartResumeUpload();
        case 24:
          _context65.n = 26;
          break;
        case 25:
          _context65.p = 25;
          _t38 = _context65.v;
          traceRemoteInput("smartrecruiters r\xE9sum\xE9 re-upload failed: ".concat((_t38 === null || _t38 === void 0 ? void 0 : _t38.message) || _t38));
        case 26:
          _context65.n = 27;
          return retypeBlankedPersonalFields();
        case 27:
          _context65.n = 28;
          return pressSmartButton(nextButton);
        case 28:
          return _context65.a(2, true);
      }
    }, _callee60, null, [[23, 25], [17, 22], [5, 7], [3, 11, 12, 13]]);
  }));
  return _advanceSmartRecruitersAutofillFlow.apply(this, arguments);
}
var ANSWER_TYPE_HANDLERS = new Map([['text', createBackendAnswerHandler('text')], ['single-select', createBackendAnswerHandler('single-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options);
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee2(metadata, _fieldId, _question, field) {
      var _ref15,
        _ref15$shouldAbort,
        shouldAbort,
        _args2 = arguments;
      return autofill_regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _ref15 = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : {}, _ref15$shouldAbort = _ref15.shouldAbort, shouldAbort = _ref15$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref15$shouldAbort;
            _context2.n = 1;
            return fetchAutocompleteOptions(metadata, field, shouldAbort);
          case 1:
            return _context2.a(2, _context2.v);
        }
      }, _callee2);
    }));
    function fetchMissingMetadata(_x64, _x65, _x66, _x67) {
      return _fetchMissingMetadata.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }()
})], ['multi-select', createBackendAnswerHandler('multi-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options);
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
  }()
})], ['consent', {
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
    function fetchMissingMetadata(_x69) {
      return _fetchMissingMetadata3.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee5() {
      return autofill_regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            return _context5.a(2, true);
        }
      }, _callee5);
    }));
    function generateAnswer() {
      return _generateAnswer.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  stringifyAnswerForPanel: function stringifyAnswerForPanel() {
    return 'Yes';
  },
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}], ['resume', {
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
    function fetchMissingMetadata(_x70) {
      return _fetchMissingMetadata4.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee7() {
      var _yield$getResumeForAu, _t, _t2, _t3, _t4;
      return autofill_regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            _context7.n = 1;
            return getResumeForAutofill();
          case 1:
            _t2 = _yield$getResumeForAu = _context7.v;
            _t = _t2 !== null;
            if (!_t) {
              _context7.n = 2;
              break;
            }
            _t = _yield$getResumeForAu !== void 0;
          case 2:
            if (!_t) {
              _context7.n = 3;
              break;
            }
            _t3 = _yield$getResumeForAu;
            _context7.n = 4;
            break;
          case 3:
            _t3 = {
              type: 'skip'
            };
          case 4:
            return _context7.a(2, _t3);
          case 5:
            _context7.p = 5;
            _t4 = _context7.v;
            return _context7.a(2, {
              type: 'skip'
            });
        }
      }, _callee7, null, [[0, 5]]);
    }));
    function generateAnswer() {
      return _generateAnswer2.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}]]);

// The oneclick "Message to the Hiring Team" box refuses a semicolon ("This field cannot contain following
// characters: ;") and Next stays blocked until it is gone — the engine's free text often has one. A comma
// reads the same, so the answer is typed with each semicolon replaced.
var SMART_NO_SEMICOLON_FIELD_IDS = new Set(['hiringManagerMessage']);
function replaceSmartSemicolons(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/\s*;\s*/g, ', ').trim().replace(/,$/, '');
}
var FIELD_KIND_HANDLERS = new Map([['text', (/*#__PURE__*/function () {
  var _ref16 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee8(fieldId, _question, answer, field) {
    var input;
    return autofill_regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          input = getFieldTextInput(field);
          if (input) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2);
        case 1:
          _context8.n = 2;
          return fillSmartText(input, answer);
        case 2:
          if (SMART_PERSONAL_TEXT_FIELDS.has(fieldId) && answer != null && String(answer) !== '') {
            smartTypedPersonalValues.set(fieldId, String(answer));
          }
        case 3:
          return _context8.a(2);
      }
    }, _callee8);
  }));
  return function (_x71, _x72, _x73, _x74) {
    return _ref16.apply(this, arguments);
  };
}())], ['textarea', (/*#__PURE__*/function () {
  var _ref17 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee9(fieldId, _question, answer, field) {
    var textarea, value;
    return autofill_regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          textarea = querySelectorDeep('textarea', field);
          if (textarea) {
            _context9.n = 1;
            break;
          }
          return _context9.a(2);
        case 1:
          value = SMART_NO_SEMICOLON_FIELD_IDS.has(fieldId) && answer != null ? replaceSmartSemicolons(answer) : answer;
          _context9.n = 2;
          return fillSmartText(textarea, value);
        case 2:
          return _context9.a(2);
      }
    }, _callee9);
  }));
  return function (_x75, _x76, _x77, _x78) {
    return _ref17.apply(this, arguments);
  };
}())], ['phone', (/*#__PURE__*/function () {
  var _ref18 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee0(_fieldId, _question, answer, field) {
    var input;
    return autofill_regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          input = querySelectorDeep('input[type="tel"], input[aria-label="Phone number"]', field); // spl-phone-field reformats the national number ("415 555 0184") and flips its country-code select
          // from the dial code, so the typed value is never verified back.
          if (!input) {
            _context0.n = 1;
            break;
          }
          _context0.n = 1;
          return fillSmartText(input, String(answer !== null && answer !== void 0 ? answer : '').replace(/[^\d()+\-\s]/g, ''), {
            verify: false
          });
        case 1:
          return _context0.a(2);
      }
    }, _callee0);
  }));
  return function (_x79, _x80, _x81, _x82) {
    return _ref18.apply(this, arguments);
  };
}())], ['location', (/*#__PURE__*/function () {
  var _ref19 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee1(_fieldId, _question, answer, field) {
    var _ref20,
      _ref20$shouldAbort,
      shouldAbort,
      _args1 = arguments;
    return autofill_regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          _ref20 = _args1.length > 4 && _args1[4] !== undefined ? _args1[4] : {}, _ref20$shouldAbort = _ref20.shouldAbort, shouldAbort = _ref20$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref20$shouldAbort;
          _context1.n = 1;
          return fillLocationField(answer, field, shouldAbort);
        case 1:
          return _context1.a(2);
      }
    }, _callee1);
  }));
  return function (_x83, _x84, _x85, _x86) {
    return _ref19.apply(this, arguments);
  };
}())], ['autocomplete', (/*#__PURE__*/function () {
  var _ref21 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee10(_fieldId, _question, answer, field) {
    var _ref22,
      _ref22$shouldAbort,
      shouldAbort,
      input,
      _args10 = arguments;
    return autofill_regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _ref22 = _args10.length > 4 && _args10[4] !== undefined ? _args10[4] : {}, _ref22$shouldAbort = _ref22.shouldAbort, shouldAbort = _ref22$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref22$shouldAbort;
          input = querySelectorDeep('input[role="combobox"], input', field);
          _context10.n = 1;
          return fillAutocompleteInput(input, answer, shouldAbort);
        case 1:
          return _context10.a(2);
      }
    }, _callee10);
  }));
  return function (_x87, _x88, _x89, _x90) {
    return _ref21.apply(this, arguments);
  };
}())], ['radio-custom', (/*#__PURE__*/function () {
  var _ref23 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee11(_fieldId, _question, answer, field) {
    var radios, options, match, index, radio;
    return autofill_regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          radios = querySelectorAllDeep('[role="radio"], spl-radio', field).filter(isElementVisible);
          options = radios.map(function (radio) {
            return radio.getAttribute('label') || getDeepText(radio) || radio.getAttribute('value');
          });
          _context11.n = 1;
          return getBestMatchingOption(answer, options);
        case 1:
          match = _context11.v;
          index = options.findIndex(function (option) {
            return option === match;
          });
          radio = index >= 0 ? radios[index] : radios[0];
          if (radio) {
            _context11.n = 2;
            break;
          }
          return _context11.a(2);
        case 2:
          if (!isSmartRadioSelected(radio)) {
            _context11.n = 3;
            break;
          }
          return _context11.a(2);
        case 3:
          _context11.n = 4;
          return useRemoteInput();
        case 4:
          if (!_context11.v) {
            _context11.n = 8;
            break;
          }
          _context11.n = 5;
          return remoteClick(radio);
        case 5:
          _context11.n = 6;
          return sleep(REMOTE_COMMIT_SETTLE_MS);
        case 6:
          if (isSmartRadioSelected(radio)) {
            _context11.n = 7;
            break;
          }
          throw new Error("Option \"".concat(options[index >= 0 ? index : 0], "\" did not select after a real click"));
        case 7:
          return _context11.a(2);
        case 8:
          radio.click();
          radio.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true
          }));
        case 9:
          return _context11.a(2);
      }
    }, _callee11);
  }));
  return function (_x91, _x92, _x93, _x94) {
    return _ref23.apply(this, arguments);
  };
}())], ['checkbox', (/*#__PURE__*/function () {
  var _ref24 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee12(_fieldId, question, answer, field) {
    var checkboxes, checkbox, shouldCheck, requested, _iterator4, _step4, _loop, _t5;
    return autofill_regenerator().w(function (_context13) {
      while (1) switch (_context13.p = _context13.n) {
        case 0:
          checkboxes = querySelectorAllDeep('input[type="checkbox"]', field);
          if (!(checkboxes.length === 0)) {
            _context13.n = 1;
            break;
          }
          return _context13.a(2);
        case 1:
          if (!(checkboxes.length === 1)) {
            _context13.n = 3;
            break;
          }
          checkbox = checkboxes[0];
          shouldCheck = isTruthyCheckboxAnswer(answer) || normalizeComparisonText(question).includes('privacy notice') || normalizeComparisonText(question).includes('read and understand');
          _context13.n = 2;
          return setSmartCheckbox(checkbox, shouldCheck);
        case 2:
          return _context13.a(2);
        case 3:
          requested = (Array.isArray(answer) ? answer : [answer]).map(normalizeComparisonText).filter(Boolean);
          _iterator4 = autofill_createForOfIteratorHelper(checkboxes);
          _context13.p = 4;
          _loop = /*#__PURE__*/autofill_regenerator().m(function _loop() {
            var checkbox, label, shouldCheck;
            return autofill_regenerator().w(function (_context12) {
              while (1) switch (_context12.n) {
                case 0:
                  checkbox = _step4.value;
                  label = normalizeComparisonText(getDeepText(closestDeep(checkbox, 'label') || checkbox));
                  shouldCheck = requested.some(function (value) {
                    return value === label || value.includes(label) || label.includes(value);
                  });
                  _context12.n = 1;
                  return setSmartCheckbox(checkbox, shouldCheck);
                case 1:
                  return _context12.a(2);
              }
            }, _loop);
          });
          _iterator4.s();
        case 5:
          if ((_step4 = _iterator4.n()).done) {
            _context13.n = 7;
            break;
          }
          return _context13.d(autofill_regeneratorValues(_loop()), 6);
        case 6:
          _context13.n = 5;
          break;
        case 7:
          _context13.n = 9;
          break;
        case 8:
          _context13.p = 8;
          _t5 = _context13.v;
          _iterator4.e(_t5);
        case 9:
          _context13.p = 9;
          _iterator4.f();
          return _context13.f(9);
        case 10:
          return _context13.a(2);
      }
    }, _callee12, null, [[4, 8, 9, 10]]);
  }));
  return function (_x95, _x96, _x97, _x98) {
    return _ref24.apply(this, arguments);
  };
}())], ['resume', (/*#__PURE__*/function () {
  var _ref25 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee13(_fieldId, _question, answer, field) {
    var _ref26,
      _ref26$shouldAbort,
      shouldAbort,
      _args14 = arguments;
    return autofill_regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          _ref26 = _args14.length > 4 && _args14[4] !== undefined ? _args14[4] : {}, _ref26$shouldAbort = _ref26.shouldAbort, shouldAbort = _ref26$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref26$shouldAbort;
          _context14.n = 1;
          return fillSmartResume(answer, field, shouldAbort);
        case 1:
          return _context14.a(2);
      }
    }, _callee13);
  }));
  return function (_x99, _x100, _x101, _x102) {
    return _ref25.apply(this, arguments);
  };
}())],
// Section-editor base kinds: the 'section-<baseKind>' wrappers re-resolve the LIVE widget
// element (spl-autocomplete / oc-input / oc-textarea / oc-datepicker / oc-checkbox) and pass it
// directly as `field`; the handlers extract the inner control the way fillScoped* used to.
['smart-section-autocomplete', (/*#__PURE__*/function () {
  var _ref27 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee14(fieldId, _question, answer, field) {
    var _field$matches2, _field$matches3;
    var _ref28,
      _ref28$shouldAbort,
      shouldAbort,
      input,
      _args15 = arguments;
    return autofill_regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          _ref28 = _args15.length > 4 && _args15[4] !== undefined ? _args15[4] : {}, _ref28$shouldAbort = _ref28.shouldAbort, shouldAbort = _ref28$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref28$shouldAbort;
          if (!(/:jobTitle$/.test(String(fieldId)) && field !== null && field !== void 0 && (_field$matches2 = field.matches) !== null && _field$matches2 !== void 0 && _field$matches2.call(field, SMART_TITLE_WIDGET_SELECTOR))) {
            _context15.n = 2;
            break;
          }
          _context15.n = 1;
          return fillSmartJobTitleLeaf(fieldId, answer, field, shouldAbort);
        case 1:
          return _context15.a(2);
        case 2:
          if (!(/:institution$/.test(String(fieldId)) && field !== null && field !== void 0 && (_field$matches3 = field.matches) !== null && _field$matches3 !== void 0 && _field$matches3.call(field, SMART_INSTITUTION_WIDGET_SELECTOR))) {
            _context15.n = 4;
            break;
          }
          _context15.n = 3;
          return fillSmartInstitutionLeaf(fieldId, answer, field, shouldAbort);
        case 3:
          return _context15.a(2);
        case 4:
          input = querySelectorDeep('input, textarea', field);
          _context15.n = 5;
          return fillAutocompleteInput(input, answer, shouldAbort, {
            allowManualEntry: false
          });
        case 5:
          return _context15.a(2);
      }
    }, _callee14);
  }));
  return function (_x103, _x104, _x105, _x106) {
    return _ref27.apply(this, arguments);
  };
}())], ['smart-section-text', (/*#__PURE__*/function () {
  var _ref29 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee15(_fieldId, _question, answer, field) {
    var _ref30,
      _ref30$shouldAbort,
      shouldAbort,
      input,
      _args16 = arguments;
    return autofill_regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          _ref30 = _args16.length > 4 && _args16[4] !== undefined ? _args16[4] : {}, _ref30$shouldAbort = _ref30.shouldAbort, shouldAbort = _ref30$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref30$shouldAbort;
          input = querySelectorDeep('input, textarea', field);
          if (input) {
            _context16.n = 1;
            break;
          }
          return _context16.a(2);
        case 1:
          if (!(input.getAttribute('role') === 'combobox')) {
            _context16.n = 3;
            break;
          }
          _context16.n = 2;
          return fillAutocompleteInput(input, answer, shouldAbort, {
            allowManualEntry: false
          });
        case 2:
          return _context16.a(2);
        case 3:
          _context16.n = 4;
          return fillSmartText(input, answer);
        case 4:
          return _context16.a(2);
      }
    }, _callee15);
  }));
  return function (_x107, _x108, _x109, _x110) {
    return _ref29.apply(this, arguments);
  };
}())], ['smart-section-date', (/*#__PURE__*/function () {
  var _ref31 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee16(_fieldId, _question, answer, field) {
    var input;
    return autofill_regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          // The answer is already formatted YYYY-MM-01 by the mapping's formatSmartDate resolveValue. The
          // visible flatpickr text input carries `data-input`; the calendar's own year spinner (`input.cur-year`,
          // hidden until the popup opens) must never be the target.
          input = querySelectorDeep('input[data-input], input.flatpickr-input, input[type="text"]', field);
          if (!(!input || answer == null)) {
            _context17.n = 1;
            break;
          }
          return _context17.a(2);
        case 1:
          _context17.n = 2;
          return useRemoteInput();
        case 2:
          if (!_context17.v) {
            _context17.n = 6;
            break;
          }
          _context17.n = 3;
          return remoteTypeInto(input, String(answer), {
            verify: false
          });
        case 3:
          _context17.n = 4;
          return remoteKey('Enter');
        case 4:
          _context17.n = 5;
          return sleep(REMOTE_COMMIT_SETTLE_MS);
        case 5:
          return _context17.a(2);
        case 6:
          fillSmartTextInput(input, answer);
        case 7:
          return _context17.a(2);
      }
    }, _callee16);
  }));
  return function (_x111, _x112, _x113, _x114) {
    return _ref31.apply(this, arguments);
  };
}())], ['smart-section-checkbox', (/*#__PURE__*/function () {
  var _ref32 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee17(_fieldId, _question, answer, field) {
    var checkbox;
    return autofill_regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          checkbox = querySelectorDeep('input[type="checkbox"]', field);
          if (checkbox) {
            _context18.n = 1;
            break;
          }
          return _context18.a(2);
        case 1:
          _context18.n = 2;
          return setSmartCheckbox(checkbox, answer === true || isTruthyCheckboxAnswer(answer));
        case 2:
          return _context18.a(2);
      }
    }, _callee17);
  }));
  return function (_x115, _x116, _x117, _x118) {
    return _ref32.apply(this, arguments);
  };
}())]]);

// Root handlers (count answer + the clear → per-entry add/editor/save iterator), the shared
// 'profileSectionField' leaf answerType, and the 'section-<baseKind>' live-re-resolving wrapper
// kinds are registered by the shared hierarchy module. No option-dependent leaf kinds — the
// autocomplete widgets match live suggestions themselves.
registerProfileSectionHierarchy({
  sections: SMART_PROFILE_SECTIONS,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS,
  wrappedFieldKinds: ['smart-section-autocomplete', 'smart-section-text', 'smart-section-date', 'smart-section-checkbox']
});
registerAutofillHandlers({
  detectFields: detectAutofillFields,
  detectSubmitButton: detectSmartRecruitersSubmitButton,
  detectAdvanceButton: detectSmartRecruitersAdvanceButton,
  getSubmitButton: getSmartRecruitersSubmitButton,
  clickSubmitButton: clickSmartRecruitersSubmitButton,
  isAutofillAvailable: isSmartRecruitersAutofillAvailable,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS,
  advanceFlow: advanceSmartRecruitersAutofillFlow,
  // The oneclick form is bot-scored (DataDome): pace fills apart instead of back-to-back, and let the
  // shared submit path pause for a review beat before clickSmartRecruitersSubmitButton presses.
  interFieldDelayMs: SMART_INTER_FIELD_DELAY_MS,
  humanizeClicks: true
});
/******/ })()
;