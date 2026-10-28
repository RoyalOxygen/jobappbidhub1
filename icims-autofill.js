/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

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
;// ../../packages/job-parsers/content/platforms/icims/autofill.js
function autofill_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return autofill_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (autofill_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, autofill_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, autofill_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), autofill_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", autofill_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), autofill_regeneratorDefine2(u), autofill_regeneratorDefine2(u, o, "Generator"), autofill_regeneratorDefine2(u, n, function () { return this; }), autofill_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (autofill_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function autofill_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } autofill_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { autofill_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, autofill_regeneratorDefine2(e, r, n, t); }
function autofill_slicedToArray(r, e) { return autofill_arrayWithHoles(r) || autofill_iterableToArrayLimit(r, e) || autofill_unsupportedIterableToArray(r, e) || autofill_nonIterableRest(); }
function autofill_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function autofill_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function autofill_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function autofill_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? autofill_ownKeys(Object(t), !0).forEach(function (r) { autofill_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : autofill_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function autofill_defineProperty(e, r, t) { return (r = autofill_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function autofill_toPropertyKey(t) { var i = autofill_toPrimitive(t, "string"); return "symbol" == autofill_typeof(i) ? i : i + ""; }
function autofill_toPrimitive(t, r) { if ("object" != autofill_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != autofill_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function autofill_toConsumableArray(r) { return autofill_arrayWithoutHoles(r) || autofill_iterableToArray(r) || autofill_unsupportedIterableToArray(r) || autofill_nonIterableSpread(); }
function autofill_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function autofill_arrayWithoutHoles(r) { if (Array.isArray(r)) return autofill_arrayLikeToArray(r); }
function autofill_typeof(o) { "@babel/helpers - typeof"; return autofill_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, autofill_typeof(o); }
function autofill_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function autofill_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function autofill_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = autofill_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function autofill_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return autofill_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? autofill_arrayLikeToArray(r, a) : void 0; } }
function autofill_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// iCIMS candidate-application autofill.
//
// iCIMS ("careers-*.icims.com") wraps every careersite page in an outer document
// that hosts the real content in an `iframe#icims_content_iframe` (its src carries
// `&in_iframe=1`). All content scripts run in that inner frame (manifest match is
// `all_frames:true`). The candidate flow spans several page loads:
//
//   1. Job posting            — an "Apply" anchor (mode=apply) opens the flow.
//   2. Email-first login gate  — `#enterEmailForm` (css_loginName + a per-tenant GDPR
//      consent checkbox), gated on submit by an INVISIBLE hCaptcha; then either a
//      tenant password step or iCIMS's Auth0 Universal Login (login.icims.com).
//   3. Multi-step application  — resume upload (+ server-side parse that PREFILLS the
//      form), then profile / EEO / custom-question steps, then a final Submit.
//
// The single hard ordering constraint is the résumé: uploading it triggers iCIMS's
// parser, which re-renders the form with prefilled values. We must NOT fill the rest
// of the step until that parse settles, or our values get clobbered by the re-render
// (or we fill fields that don't exist yet). This is implemented by gating every
// post-résumé field on the résumé field's completion (`waitForFieldId: RESUME_FIELD_ID`)
// and by having the résumé field-kind handler block until the parse handoff finishes.
// Tenants that FULL-RELOAD after upload restart this content script; a small
// sessionStorage continuation re-triggers autofill once the reloaded form is parsed.
//
// Field detection keys off iCIMS's stable markup: `.iCIMS_TableRow` question rows,
// `<select id="X">` + companion `#X_icimsDropdown` searchable dropdowns, `_File`
// upload inputs, `.iCIMS_CollectionContainer` repeatable sections (Education / Work),
// and the `validatesalaryamnt` salary composite. These class/id conventions are shared
// across tenants; visible label text is localized, so questions are read from labels
// but control routing is structural.








// --- constants ---------------------------------------------------------------

var autofill_NEVER_ABORT = function NEVER_ABORT() {
  return false;
};
var RESUME_FIELD_ID = 'resume';
var COVER_LETTER_FIELD_ID = 'cover_letter';
var DROPDOWN_WAIT_MS = 2500;
var DROPDOWN_LOADING_GRACE_MS = 500;

// Résumé parse handoff: after we set the file, wait up to HANDOFF for iCIMS to either
// show its "Parsing résumé…" spinner (in-place parse) or navigate away (full reload);
// if the spinner appears, wait up to PARSE for it to clear.
var RESUME_HANDOFF_WAIT_MS = 10000;
var RESUME_PARSE_WAIT_MS = 60000;

// Reload continuation (tenants that full-reload after upload): re-trigger autofill on
// the reloaded, parsed form.
var RESUME_CONTINUATION_KEY = 'bidhub.icims.resumeUploadContinuation';
var RESUME_CONTINUATION_TTL_MS = 2 * 60 * 1000;
var RESUME_CONTINUATION_POLL_MS = 500;
var RESUME_CONTINUATION_TIMEOUT_MS = 45 * 1000;
var RESUME_CONTINUATION_START_DELAY_MS = 2000;
var AUTH0_LOGIN_HOST = 'login.icims.com';

// Application navigation controls (advance to the next step; never the terminal submit). Beyond the
// generic Next/Continue/Review, this covers the iCIMS Candidate Portal step button
// (#cp_form_submit_i / name="profileButton"), whose label changes per step — "Update Profile" /
// "Submit Profile" / "Create Profile" on the account+profile page, "Continue" / "Save & Continue"
// on later steps. Each SAVES the current step and moves forward; none finalizes the application
// (that button is matched by FINAL_SUBMIT_LABEL_PATTERN below).
var ADVANCE_LABEL_PATTERN = /^(?:next|continue|save (?:and|&) continue|save (?:and|&) finish later|proceed|review|(?:update|submit|save|create) profile|create account|register)$/i;
// The terminal submit — the click that files the application and yields the confirmation ("Thank
// you") page. Scoped to the finalize labels ("Submit", "Submit Application") so an intermediate
// "Submit Profile" / "Update Profile" step button (an advance control above) is never mistaken for
// it, and so advanceFlow's `if (getFinalSubmitButton()) return false` guard doesn't wedge the flow
// on a profile step whose button merely contains the word "submit".
//
// CRUCIAL iCIMS quirk: the multi-step Candidate Portal labels the step-ADVANCE button "Submit" on
// EVERY step (e.g. "Candidate Questions" → next step), identical to the terminal submit. Matching
// "Submit" by label alone therefore misclassifies every intermediate advance as terminal — wedging
// autonext on step 2 of 6 (advanceFlow refuses the guarded submit; the driver holds for a human
// submit that never comes). So a "Submit" is treated as terminal ONLY when we are on the LAST step
// (isOnFinalIcimsStep, via the `.iCIMS_Steps` indicator); on any earlier step it is an advance.
var FINAL_SUBMIT_LABEL_PATTERN = /^submit(?:\s+(?:your\s+)?application)?$/i;
var APPLY_ANCHOR_SELECTOR = ['a.iCIMS_ApplyOnlineButton', 'a[href*="mode=apply"][href*="apply=yes"]', 'a[href*="mode=apply"]'].join(', ');

// Login form: tenants vary the wrapper but reuse the css_loginName / css_password
// input names and the enterEmail/enterPassword form ids.
var LOGIN_FORM_SELECTOR = ['form#enterEmailForm', 'form[name="enterEmailForm"]', 'form#enterPasswordForm', 'form[name="enterPasswordForm"]', '.iCIMS_LoginPage'].join(', ');
var LOGIN_ADVANCE_SELECTOR = '#enterEmailSubmitButton, #enterPasswordSubmitButton';

// Auth0 Universal Login (login.icims.com) — a distinct host with hashed-CSS markup.
var AUTH0_USERNAME_SELECTOR = 'input#username[name="username"], input[name="username"][autocomplete="email"]';
var AUTH0_ADVANCE_SELECTOR = ['button[type="submit"][data-action-button-primary="true"]', 'button._button-login-id', 'button._button-login-password'].join(', ');
// Post-login Auth0 interstitials (e.g. /u/mfa-webauthn-platform-enrollment, "Log In Faster on
// This Device"): an automated cloud browser must never enroll a passkey — its "Continue" would
// pop the OS biometric dialog and wedge the run. Click the decline action instead, preferring
// the permanent "Not on this device" (refuse-add-device) over "Remind me later" (snooze) so the
// prompt doesn't come back on the next login. Checked BEFORE the advance selectors.
var AUTH0_ENROLLMENT_DECLINE_SELECTORS = ['button[type="submit"][name="action"][value="refuse-add-device"]', 'button[type="submit"][name="action"][value="snooze-enrollment"]'];
var IGNORED_INPUT_TYPES = new Set(['button', 'hidden', 'image', 'reset', 'submit']);

// Address-verification override checkbox (see getAddressVerifyCheckboxes). The answer type is
// mirrored by hand in extension-core/background/maybeAutofillVerificationField.js (the background
// can't import content modules) — keep the two strings in sync.
var ADDRESS_VERIFY_ANSWER_TYPE = 'address_verify';
// Matches the inline bounce wording, e.g. "Error: The address you provided was not able to be
// verified. If you would like to use this address anyway, please check this box." Two clauses:
// "address …not/unable/cannot… verified/validated" (bounded so unrelated far-apart words can't
// pair up), or the explicit "use this address anyway" instruction.
var ADDRESS_VERIFY_TEXT_PATTERN = /\baddress\b[\s\S]{0,200}?(?:\bnot\b|n['’]t\b|\bunable\b|\bcannot\b)[\s\S]{0,80}?\b(?:verif|validat)|\buse\s+th(?:is|e|at)\s+address\s+anyway\b/i;
var TEXT_INPUT_SELECTOR = ['input[type="text"]', 'input[type="email"]', 'input[type="tel"]', 'input[type="url"]', 'input[type="number"]', 'input[type="password"]', 'input[type="date"]', 'input:not([type])'].join(', ');
var DASHES = "[-\\u2010-\\u2015\\u2212]";
var PLACEHOLDER_OPTION_PATTERN = new RegExp("^(?:".concat(DASHES, "+\\s*)?(?:make a selection|type to search|no results|please select a country|select)(?:\\s*").concat(DASHES, "+)?$"), 'i');
var GENERIC_FILE_SOURCE_PATTERN = /^(?:my computer|google drive|dropbox|onedrive)(?:\s*\(opens new window\))?$/i;

// --- text helpers ------------------------------------------------------------

function normalizeText(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/\u00a0/g, ' ').replace(/[*]/g, '').replace(/\brequired\.?/gi, '').replace(/^\s*error:\s*/i, '').replace(/\s+/g, ' ').trim();
}
function comparableText(value) {
  return normalizeText(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
function slugify(value) {
  return comparableText(value).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function escapeAttr(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
function firstText() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  var _iterator = autofill_createForOfIteratorHelper(values.flat()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      var text = normalizeText(value);
      if (text) return text;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return '';
}

// Turn an iCIMS field id/name into a human-ish question when no label exists.
function humanizeIdentifier(identifier) {
  return normalizeText(String(identifier !== null && identifier !== void 0 ? identifier : '').replace(/^-\d+_/, '').replace(/^icims_f_/i, '') // packet self-id form field prefix (icims_f_Veteran → Veteran)
  .replace(/(?:Person|Portal|Cand)ProfileFields\./g, '').replace(/^rcf/i, 'Custom field ').replace(/^Q(\d+)$/i, 'Question $1').replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[_.-]+/g, ' '));
}
function isPlaceholderOption(text) {
  return !text || PLACEHOLDER_OPTION_PATTERN.test(normalizeText(text));
}

// --- visibility / page context ----------------------------------------------

function isVisible(element) {
  var _element$matches, _element$matches2;
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$allowHiddenFileI = _ref.allowHiddenFileInput,
    allowHiddenFileInput = _ref$allowHiddenFileI === void 0 ? false : _ref$allowHiddenFileI,
    _ref$allowHiddenSelec = _ref.allowHiddenSelect,
    allowHiddenSelect = _ref$allowHiddenSelec === void 0 ? false : _ref$allowHiddenSelec;
  if (!(element !== null && element !== void 0 && element.isConnected)) return false;
  if (allowHiddenFileInput && (_element$matches = element.matches) !== null && _element$matches !== void 0 && _element$matches.call(element, 'input[type="file"]')) return true;
  if (allowHiddenSelect && (_element$matches2 = element.matches) !== null && _element$matches2 !== void 0 && _element$matches2.call(element, 'select.dropdown-hide')) return true;
  var style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden') return false;
  var rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}
function isIcimsJobsPage() {
  var hasJobIdQuery = new URLSearchParams(window.location.search).has('jobid');
  return /\.icims\.com$/i.test(window.location.hostname) && (/\/jobs\/\d+(?:\/|$)/i.test(window.location.pathname) || /\/jobs\/[^/]+\/login(?:\/|$)?/i.test(window.location.pathname) || /\/jobs\/login(?:\/|$)?/i.test(window.location.pathname) && hasJobIdQuery);
}

// The iCIMS "Forms" module: the EEO / voluntary self-identification "packet" sub-forms (Veteran /
// Disability), each rendered in its own frame nested in a careersite step's content iframe, served
// from the bare tenant host with a distinct `<form name="icims_form" class="iCIMS_FormMainStyle">`
// markup — so it needs its own page/context recognition.
//
// The frame URL is unreliable: it varies by tenant AND by sub-form —
//   * constructconnect.icims.com/forms?...&form=<Name>&isPacket=1
//   * <tenant>.icims.com/forms?...&selected=<Name>&isPacket=1     (param is `selected`, not `form`)
//   * <tenant>.icims.com/icims2/servlet/icims2?...&action=showForm (legacy servlet path, no /forms)
// so recognise by URL where we can, then fall back to the stable packet-form markup itself.
function isIcimsPacketFormPage() {
  if (!/\.icims\.com$/i.test(window.location.hostname)) return false;
  var path = window.location.pathname;
  var params = new URLSearchParams(window.location.search);
  var byUrl = /(?:^|\/)forms(?:\/|$)/i.test(path) && (params.has('form') || params.has('selected')) || /\/icims2\/servlet\/icims2/i.test(path) && /(?:[?&])action=showForm\b/i.test(window.location.search);
  if (byUrl) return true;
  // DOM fallback: the packet sub-form is a `form[name="icims_form"]` carrying an `isPacket=1` hidden
  // input — present only in the real form frame, never on the careersite wrapper frames (which just
  // host the nested form iframe and carry no such form).
  return Boolean(document.querySelector('form[name="icims_form"] input[name="isPacket"][value="1"]'));
}
function getIcimsRoot() {
  var _roots$;
  if (!isIcimsJobsPage() && !isIcimsPacketFormPage()) return null;
  var roots = Array.from(document.querySelectorAll(['.iCIMS_CenteredPageContent', 'form#questions', 'form[name="questions"]', 'form[name="icims_form"]', '.iCIMS_FormMainStyle', LOGIN_FORM_SELECTOR].join(', '))).filter(function (root) {
    return root.querySelector('.iCIMS_Forms_Global, .iCIMS_TableRow, input, select, textarea');
  });
  return (_roots$ = roots[0]) !== null && _roots$ !== void 0 ? _roots$ : null;
}

// --- login context (tenant email/password) ----------------------------------

function getLoginForm() {
  var _known$querySelector, _loginInput$closest;
  if (!isIcimsJobsPage()) return null;
  var known = document.querySelector(LOGIN_FORM_SELECTOR);
  if (known) return known.matches('form') ? known : (_known$querySelector = known.querySelector('form')) !== null && _known$querySelector !== void 0 ? _known$querySelector : known;
  var loginInput = document.querySelector('input[name="css_loginName"], input[name="css_password"]');
  return (_loginInput$closest = loginInput === null || loginInput === void 0 ? void 0 : loginInput.closest('form')) !== null && _loginInput$closest !== void 0 ? _loginInput$closest : null;
}
function isLoginContext() {
  return Boolean(getLoginForm()) || isAuth0LoginPage();
}

// --- Auth0 Universal Login (login.icims.com) --------------------------------

function getAuth0UsernameInput() {
  if (window.location.hostname !== AUTH0_LOGIN_HOST) return null;
  var input = document.querySelector(AUTH0_USERNAME_SELECTOR);
  return input && !input.disabled && isVisible(input) ? input : null;
}
function getAuth0PasswordInput() {
  var _Array$from$find;
  if (window.location.hostname !== AUTH0_LOGIN_HOST) return null;
  return (_Array$from$find = Array.from(document.querySelectorAll('input[type="password"]')).find(function (input) {
    return !input.disabled && isVisible(input);
  })) !== null && _Array$from$find !== void 0 ? _Array$from$find : null;
}
function getAuth0AdvanceButton() {
  if (window.location.hostname !== AUTH0_LOGIN_HOST) return null;
  var clickable = function clickable(button) {
    return isVisible(button) && !button.disabled && button.getAttribute('aria-disabled') !== 'true';
  };
  // Decline selectors are checked one by one (not comma-joined) so "Not on this device" wins
  // over "Remind me later" regardless of their DOM order on the enrollment page.
  for (var _i = 0, _arr = [].concat(AUTH0_ENROLLMENT_DECLINE_SELECTORS, [AUTH0_ADVANCE_SELECTOR]); _i < _arr.length; _i++) {
    var selector = _arr[_i];
    var match = Array.from(document.querySelectorAll(selector)).find(clickable);
    if (match) return match;
  }
  return null;
}
function isAuth0LoginPage() {
  if (window.location.hostname !== AUTH0_LOGIN_HOST) return false;
  return Boolean(getAuth0UsernameInput() || getAuth0PasswordInput() || getAuth0AdvanceButton());
}

// The Auth0 identifier step surfaces the username (email) field; the password step is
// left to the shared password path (it appends the visible password input + resolves
// it from the vault keyed on login.icims.com). advanceFlow clicks Continue / LOG IN.
function detectAuth0LoginFields() {
  var fields = [];
  var passwordInput = getAuth0PasswordInput();
  var usernameInput = passwordInput ? null : getAuth0UsernameInput();
  if (usernameInput) {
    fields.push({
      question: 'Email',
      fieldId: 'username',
      answerType: 'text',
      fieldKind: 'text',
      dependsOnPrevious: false,
      field: usernameInput,
      options: [],
      constraints: {}
    });
  }
  var captchaEntry = buildCaptchaFieldEntry(document);
  return captchaEntry ? [].concat(fields, [captchaEntry]) : fields;
}

// --- control eligibility + question labelling -------------------------------

function isEligibleControl(control) {
  var _control$type;
  if (!control || control.disabled) return false;
  if (control.closest('.dropdown-container')) return false;
  if (control.matches('select')) {
    return isVisible(control, {
      allowHiddenSelect: true
    }) || Boolean(getDropdownAnchor(control));
  }
  if (control.matches('textarea')) return isVisible(control);
  if (!control.matches('input')) return false;
  var type = ((_control$type = control.type) !== null && _control$type !== void 0 ? _control$type : '').toLowerCase();
  if (IGNORED_INPUT_TYPES.has(type)) return false;
  if (type === 'file') return isVisible(control, {
    allowHiddenFileInput: true
  });
  // The hidden value input of a searchable combobox (login-step phone country code)
  // is the canonical control even though it is display:none.
  if (getComboboxAnchor(control)) return true;
  return isVisible(control);
}
function getLogicalControls(root) {
  return Array.from(root.querySelectorAll('input, select, textarea')).filter(isEligibleControl);
}

// --- packet self-identification forms (iCIMS "Forms" module) ----------------
//
// Packet sub-forms (Voluntary Self-ID of Veteran / Disability, EEO) don't use `.iCIMS_TableRow`
// rows. Instead every control of one logical question carries an `iCIMS_Forms_Q<Name>` class (on the
// control or its wrapping span), radio/checkbox choice labels are trailing text nodes (no <label>),
// and pre-populated signature metadata (Name, today's Date) is left as-is. These helpers group a
// control's question scope by its Q-class and read those trailing-text labels.

// The `iCIMS_Forms_Q<Name>` class carried by a control or its nearest tagged ancestor.
function getPacketQuestionClass(control) {
  var _control$closest, _Array$from$find2, _tagged$classList;
  var tagged = (control === null || control === void 0 || (_control$closest = control.closest) === null || _control$closest === void 0 ? void 0 : _control$closest.call(control, '[class*="iCIMS_Forms_Q"]')) || control;
  return (_Array$from$find2 = Array.from((_tagged$classList = tagged === null || tagged === void 0 ? void 0 : tagged.classList) !== null && _tagged$classList !== void 0 ? _tagged$classList : []).find(function (cls) {
    return /^iCIMS_Forms_Q.+$/.test(cls);
  })) !== null && _Array$from$find2 !== void 0 ? _Array$from$find2 : null;
}

// The smallest element containing every control of a packet question (so a radio group's siblings —
// which share no `.iCIMS_TableRow`/fieldset — are gathered under one scope). Falls back to the tagged
// wrapper / control when the class is unique or absent.
function getPacketQuestionScope(control) {
  var _control$closest2, _control$closest3;
  var qClass = getPacketQuestionClass(control);
  var tagged = (control === null || control === void 0 || (_control$closest2 = control.closest) === null || _control$closest2 === void 0 ? void 0 : _control$closest2.call(control, '[class*="iCIMS_Forms_Q"]')) || control;
  if (!qClass) return (control === null || control === void 0 || (_control$closest3 = control.closest) === null || _control$closest3 === void 0 ? void 0 : _control$closest3.call(control, '.iCIMS_TableRow, fieldset')) || control;
  var members = Array.from(document.getElementsByClassName(qClass));
  if (members.length <= 1) return members[0] || tagged;
  var scope = members[0];
  while ((_scope = scope) !== null && _scope !== void 0 && _scope.parentElement && !members.every(function (member) {
    return scope.contains(member);
  })) {
    var _scope;
    scope = scope.parentElement;
  }
  return scope || tagged;
}

// A packet radio/checkbox option label: the text trailing the input's wrapper span (packet choices
// have no associated <label>). Stops at a <br> OR the NEXT choice's wrapper — options may sit on one
// line separated only by whitespace (`Yes&nbsp;&nbsp;No`), so a <br>-only scan would swallow the next
// option's text into this one's label ("Yes" → "Yes No").
function getPacketChoiceLabel(input) {
  if (!input || !isIcimsPacketFormPage()) return '';
  var wrapper = input.closest('span.iCIMS_Forms_Global, span.customFieldContainer') || input;
  var text = '';
  for (var node = wrapper.nextSibling; node; node = node.nextSibling) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      var _node$matches, _node, _node$querySelector, _node2;
      if (node.tagName === 'BR') break;
      // The next choice wrapper (any element hosting a form control) ends this label.
      if ((_node$matches = (_node = node).matches) !== null && _node$matches !== void 0 && _node$matches.call(_node, 'input, select, textarea') || (_node$querySelector = (_node2 = node).querySelector) !== null && _node$querySelector !== void 0 && _node$querySelector.call(_node2, 'input, select, textarea')) break;
    }
    text += node.textContent || '';
  }
  return normalizeText(text);
}

// The visible QUESTION for a packet/Forms-module field: the leading text of the control's block
// (`<p>`/`<td>`), before the first form control. Forms-module renders the question as a plain
// `<span>`/text node followed by `<br>` then the control(s) — there is NO `<label for>`, so without
// this getControlQuestion falls back to the humanized field id ("Work In US", "Month"). Mirror of
// getPacketChoiceLabel (which reads the TRAILING text for a choice's option label). Stops at the
// first control or a date composite, and skips the hidden `.iCIMS_508_Label` Month/Day/Year labels.
// Reject a leading blob longer than this — the self-id "packet" forms (Veteran / Disability) embed
// their radios inside a `<td>` of multi-paragraph legal explanation, whose leading text is a wall,
// not a question; those fall back to the concise humanized field id ("Veteran"/"Disability").
var PACKET_QUESTION_MAX_LEN = 250;
function getPacketQuestionLabel(control) {
  if (!control || !isIcimsPacketFormPage()) return '';
  var block = control.closest('p, td');
  if (!block) return '';
  var firstControl = block.querySelector('input, select, textarea');
  if (!firstControl) return '';
  var text = '';
  var walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  for (var node = walker.nextNode(); node; node = walker.nextNode()) {
    var _node$parentElement, _node$parentElement$c;
    if (node.nodeType === Node.ELEMENT_NODE) {
      var _node$matches2, _node3;
      if (node === firstControl || (_node$matches2 = (_node3 = node).matches) !== null && _node$matches2 !== void 0 && _node$matches2.call(_node3, 'input, select, textarea, .iCIMS_Forms_DateOnlyField')) break;
    } else if (!((_node$parentElement = node.parentElement) !== null && _node$parentElement !== void 0 && (_node$parentElement$c = _node$parentElement.closest) !== null && _node$parentElement$c !== void 0 && _node$parentElement$c.call(_node$parentElement, '.iCIMS_508_Label'))) {
      text += node.textContent || '';
    }
  }
  var question = normalizeText(text);
  // return question.length > PACKET_QUESTION_MAX_LEN ? '' : question;
  return question;
}

// True when a packet control is PRE-POPULATED by iCIMS and should be left alone (the signature Name,
// and the today's-Date composite handled separately). Scoped to TEXT/SELECT metadata ONLY — never
// radio/checkbox. A radio/checkbox question we fill must stay DETECTED even after we fill it: dropping
// it once "answered" would empty the step, which flips the engine onto the terminal-submit path
// (submitAutofillFlow → getFinalSubmitButton, null on a packet page) instead of clicking the packet
// "Submit" via advanceFlow — wedging the flow on a fully-filled form.
function isPacketFieldAnswered(field) {
  if (getRadioInputs(field).length || getCheckboxInputs(field).length) return false;
  var select = getNativeSelect(field);
  if (select) return Boolean(select.value) && select.value !== '0' && select.value !== '-1';
  var textarea = getTextarea(field);
  if (textarea) return Boolean(normalizeText(textarea.value));
  var input = autofill_getTextInput(field);
  return Boolean(input && normalizeText(input.value));
}

// The question wrapper for a control (used for scoped querying during fill).
function getQuestionField(control) {
  if (!control) return null;

  // Packet self-id forms group by `iCIMS_Forms_Q<Name>`, not `.iCIMS_TableRow`.
  if (isIcimsPacketFormPage()) {
    var scope = getPacketQuestionScope(control);
    if (scope) return scope;
  }
  if (control.type === 'file') {
    return control.closest('.iCIMS_TableRow') || control.closest('fieldset') || control.closest('.iCIMS_ResumeContentDiv') || control.parentElement || control;
  }
  if (control.type === 'radio' || control.type === 'checkbox') {
    return control.closest('fieldset, .iCIMS_TableRow') || control;
  }
  if (getComboboxAnchor(control)) {
    var _getComboboxAnchor$cl;
    return control.closest('.iCIMS_TableRow, fieldset') || ((_getComboboxAnchor$cl = getComboboxAnchor(control).closest('.iCIMS_InfoData')) === null || _getComboboxAnchor$cl === void 0 ? void 0 : _getComboboxAnchor$cl.parentElement) || control.closest('.iCIMS_InfoData') || control;
  }
  return control.closest('.iCIMS_TableRow, fieldset') || control;
}
function getCollectionLabel(control) {
  var _control$closest4;
  var collection = control === null || control === void 0 || (_control$closest4 = control.closest) === null || _control$closest4 === void 0 ? void 0 : _control$closest4.call(control, '.iCIMS_CollectionContainer');
  if (!collection) return '';
  var legend = collection.querySelector('legend .iCIMS_LabelText, legend');
  return normalizeText(legend === null || legend === void 0 ? void 0 : legend.textContent);
}
function getAriaLabelledText(control) {
  var _control$getAttribute, _control$getAttribute2;
  return String((_control$getAttribute = control === null || control === void 0 || (_control$getAttribute2 = control.getAttribute) === null || _control$getAttribute2 === void 0 ? void 0 : _control$getAttribute2.call(control, 'aria-labelledby')) !== null && _control$getAttribute !== void 0 ? _control$getAttribute : '').split(/\s+/).map(function (id) {
    var _document$getElementB;
    return normalizeText((_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.textContent);
  }).filter(Boolean).join(' ');
}
function getDescribedByText(control) {
  var _control$getAttribute3, _control$getAttribute4;
  return String((_control$getAttribute3 = control === null || control === void 0 || (_control$getAttribute4 = control.getAttribute) === null || _control$getAttribute4 === void 0 ? void 0 : _control$getAttribute4.call(control, 'aria-describedby')) !== null && _control$getAttribute3 !== void 0 ? _control$getAttribute3 : '').split(/\s+/).map(function (id) {
    var _document$getElementB2;
    return normalizeText((_document$getElementB2 = document.getElementById(id)) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.textContent);
  }).filter(Boolean).join(' ');
}
function getLinkedLabelText(control) {
  if (!(control !== null && control !== void 0 && control.id)) return '';
  var labels = Array.from(document.querySelectorAll("label[for=\"".concat(escapeAttr(control.id), "\"]")));
  var texts = labels.flatMap(function (label) {
    return [getQuestionText(label), label.textContent];
  }).map(function (value) {
    return normalizeText(value);
  }).filter(Boolean);
  return texts.find(function (text) {
    return !GENERIC_FILE_SOURCE_PATTERN.test(text);
  }) || texts[0] || '';
}
function getFieldLabelText(field) {
  var _field$querySelector, _field$querySelector2, _field$querySelector3;
  return firstText(field === null || field === void 0 || (_field$querySelector = field.querySelector) === null || _field$querySelector === void 0 || (_field$querySelector = _field$querySelector.call(field, '.iCIMS_InfoField label')) === null || _field$querySelector === void 0 ? void 0 : _field$querySelector.textContent, field === null || field === void 0 || (_field$querySelector2 = field.querySelector) === null || _field$querySelector2 === void 0 || (_field$querySelector2 = _field$querySelector2.call(field, 'legend .iCIMS_LabelText, legend')) === null || _field$querySelector2 === void 0 ? void 0 : _field$querySelector2.textContent, field === null || field === void 0 || (_field$querySelector3 = field.querySelector) === null || _field$querySelector3 === void 0 || (_field$querySelector3 = _field$querySelector3.call(field, 'label')) === null || _field$querySelector3 === void 0 ? void 0 : _field$querySelector3.textContent);
}

// The user-facing question for a control, tried label→aria→identifier, prefixed with
// its collection legend when that adds meaning (e.g. "Addresses" + "City").
function getControlQuestion(control) {
  var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!control) return '';
  var raw = firstText(
  // Packet/Forms-module fields label their question with a leading <span>, not a <label> — read
  // it first so we don't fall through to aria-label / the humanized field id (its raw stem).
  getPacketQuestionLabel(control), getLinkedLabelText(control), getInputLabelText(control), getAriaLabelledText(control), control.getAttribute('aria-label'), control.getAttribute('data-label'), getFieldLabelText(field), getDescribedByText(control), humanizeIdentifier(control.name || control.id));
  var collectionLabel = getCollectionLabel(control);
  var question = raw;
  if (collectionLabel && raw && !comparableText(raw).startsWith(comparableText(collectionLabel))) {
    question = normalizeText("".concat(collectionLabel, " ").concat(raw));
  }
  // Qualify a phone-number control whose label is generic ("Number") so the answer engine resolves
  // the profile phone rather than guessing at a bare "Number" (which yields e.g. "12 years"). Only
  // hit in the per-field pass — a Phones-section leaf fills deterministically from the profile.
  if (isPhoneNumberField(control) && !/\bphone\b/.test(comparableText(question))) {
    question = question ? "Phone ".concat(question) : 'Phone number';
  }
  return question;
}
function getChoiceLabel(input) {
  var _input$labels;
  var fallbackQuestion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return normalizeText(
  // NB: call getInputLabelText WITHOUT the fallback — it returns its fallback verbatim when the
  // control has no <label>, which for a packet radio/checkbox (labelled by a trailing text node,
  // no <label>) would short-circuit the chain to the QUESTION ("Veteran") for every option. That
  // made all options share one label at fill time → the answer never exact-matched → the option
  // matcher fell back to the first (pre-checked) radio. Let it return '' so getPacketChoiceLabel wins.
  getInputLabelText(input) || (input === null || input === void 0 || (_input$labels = input.labels) === null || _input$labels === void 0 || (_input$labels = _input$labels[0]) === null || _input$labels === void 0 ? void 0 : _input$labels.textContent) || getPacketChoiceLabel(input) // packet self-id choices: label is a trailing text node
  || (input === null || input === void 0 ? void 0 : input.value) || fallbackQuestion);
}
function autofill_getTextInput(field) {
  var _field$matches;
  if (!field) return null;
  if ((_field$matches = field.matches) !== null && _field$matches !== void 0 && _field$matches.call(field, 'input')) {
    var _field$type;
    var type = ((_field$type = field.type) !== null && _field$type !== void 0 ? _field$type : '').toLowerCase();
    if (!IGNORED_INPUT_TYPES.has(type) && type !== 'file') return field;
  }
  return field.querySelector(TEXT_INPUT_SELECTOR);
}

// --- iCIMS custom searchable <select> (id + companion _icimsDropdown) --------

function getDropdownAnchor(select) {
  return select !== null && select !== void 0 && select.id ? document.getElementById("".concat(select.id, "_icimsDropdown")) : null;
}
function getDropdownContainer(select) {
  return select !== null && select !== void 0 && select.id ? document.getElementById("".concat(select.id, "_icimsDropdown_ctnr")) : null;
}
function getDropdownResults(select) {
  return select !== null && select !== void 0 && select.id ? document.getElementById("".concat(select.id, "_dropdown-results")) : null;
}
function getDropdownSearchInput(select) {
  var _getDropdownContainer, _getDropdownContainer2, _getDropdownContainer3;
  return (_getDropdownContainer = (_getDropdownContainer2 = getDropdownContainer(select)) === null || _getDropdownContainer2 === void 0 || (_getDropdownContainer3 = _getDropdownContainer2.querySelector) === null || _getDropdownContainer3 === void 0 ? void 0 : _getDropdownContainer3.call(_getDropdownContainer2, 'input.dropdown-search')) !== null && _getDropdownContainer !== void 0 ? _getDropdownContainer : null;
}
// A dropdown is SEARCHABLE when it exposes a usable search box: a long, server-filtered
// typeahead (country/state). iCIMS marks the search input `dropdown-invisible` for a short,
// fully-enumerable list — those we read in full and let the AI pick from directly.
function isDropdownSearchable(select) {
  var search = getDropdownSearchInput(select);
  return Boolean(search && !search.classList.contains('dropdown-invisible'));
}
function getDropdownLoadingElement(select) {
  var _getDropdownContainer4, _getDropdownContainer5, _getDropdownContainer6;
  return (_getDropdownContainer4 = (_getDropdownContainer5 = getDropdownContainer(select)) === null || _getDropdownContainer5 === void 0 || (_getDropdownContainer6 = _getDropdownContainer5.querySelector) === null || _getDropdownContainer6 === void 0 ? void 0 : _getDropdownContainer6.call(_getDropdownContainer5, '.dropdown-loading')) !== null && _getDropdownContainer4 !== void 0 ? _getDropdownContainer4 : null;
}
function isCustomDropdown(select) {
  return Boolean((select === null || select === void 0 ? void 0 : select.tagName) === 'SELECT' && (select.classList.contains('dropdown-hide') || getDropdownAnchor(select)));
}
function isDropdownOpen(select) {
  var container = getDropdownContainer(select);
  var anchor = getDropdownAnchor(select);
  return Boolean(container && !container.classList.contains('dropdown-invisible') && (anchor === null || anchor === void 0 ? void 0 : anchor.getAttribute('aria-expanded')) === 'true');
}
function isDropdownLoading(select) {
  var el = getDropdownLoadingElement(select);
  if (!el) return false;
  if (el.hidden || ['hide', 'hidden', 'iCIMS_NoDisplay', 'dropdown-invisible'].some(function (c) {
    return el.classList.contains(c);
  }) || el.getAttribute('aria-hidden') === 'true') {
    return false;
  }
  return isVisible(el);
}
function getDropdownSelectedText(select) {
  var _anchor$querySelector, _select$selectedOptio;
  var anchor = getDropdownAnchor(select);
  return normalizeText((anchor === null || anchor === void 0 || (_anchor$querySelector = anchor.querySelector) === null || _anchor$querySelector === void 0 || (_anchor$querySelector = _anchor$querySelector.call(anchor, '.dropdown-text')) === null || _anchor$querySelector === void 0 ? void 0 : _anchor$querySelector.textContent) || (select === null || select === void 0 || (_select$selectedOptio = select.selectedOptions) === null || _select$selectedOptio === void 0 || (_select$selectedOptio = _select$selectedOptio[0]) === null || _select$selectedOptio === void 0 ? void 0 : _select$selectedOptio.textContent) || '');
}
function getSelectOptionEntries(field) {
  var select = getNativeSelect(field);
  if (!select) return [];
  return Array.from(select.querySelectorAll('option')).filter(function (option) {
    return option.value && !isPlaceholderOption(option.textContent);
  }).map(function (option) {
    return {
      value: option.value,
      text: normalizeText(option.textContent || option.getAttribute('title'))
    };
  }).filter(function (option) {
    return option.text;
  });
}
function getDropdownOptionEntries(field) {
  var _results$querySelecto, _results$querySelecto2;
  var select = getNativeSelect(field);
  if (!select || !isCustomDropdown(select)) return [];
  var results = getDropdownResults(select);
  var entries = Array.from((_results$querySelecto = results === null || results === void 0 || (_results$querySelecto2 = results.querySelectorAll) === null || _results$querySelecto2 === void 0 ? void 0 : _results$querySelecto2.call(results, 'li.dropdown-result, [role="option"]')) !== null && _results$querySelecto !== void 0 ? _results$querySelecto : []).map(function (element) {
    return {
      element: element,
      text: normalizeText(element.getAttribute('title') || element.getAttribute('aria-label') || element.textContent)
    };
  }).filter(function (option) {
    return option.text && !isPlaceholderOption(option.text);
  });
  return entries.length > 0 ? entries : getSelectOptionEntries(field);
}

// --- iCIMS searchable combobox (hidden value input + a.dropdown-select) ------
// The login-step phone country code renders as a combobox: a hidden text input holds
// the ISO code, a sibling `a.dropdown-select` triggers a `.dropdown-container` listbox.

function getComboboxAnchor(control) {
  var _control$matches, _wrapper$querySelecto, _wrapper$querySelecto2;
  if (!(control !== null && control !== void 0 && (_control$matches = control.matches) !== null && _control$matches !== void 0 && _control$matches.call(control, 'input'))) return null;
  if (control.closest('.dropdown-container')) return null;
  if (isVisible(control)) return null;
  var wrapper = control.closest('.iCIMS_InfoData') || control.parentElement;
  return (_wrapper$querySelecto = wrapper === null || wrapper === void 0 || (_wrapper$querySelecto2 = wrapper.querySelector) === null || _wrapper$querySelecto2 === void 0 ? void 0 : _wrapper$querySelecto2.call(wrapper, 'a.dropdown-select[aria-controls], a.dropdown-select[role="combobox"]')) !== null && _wrapper$querySelecto !== void 0 ? _wrapper$querySelecto : null;
}
function getComboboxControl(field) {
  var _field$matches2, _Array$from$find3, _field$querySelectorA, _field$querySelectorA2;
  if (!field) return null;
  if ((_field$matches2 = field.matches) !== null && _field$matches2 !== void 0 && _field$matches2.call(field, 'input') && getComboboxAnchor(field)) return field;
  return (_Array$from$find3 = Array.from((_field$querySelectorA = (_field$querySelectorA2 = field.querySelectorAll) === null || _field$querySelectorA2 === void 0 ? void 0 : _field$querySelectorA2.call(field, 'input')) !== null && _field$querySelectorA !== void 0 ? _field$querySelectorA : []).find(function (input) {
    return getComboboxAnchor(input);
  })) !== null && _Array$from$find3 !== void 0 ? _Array$from$find3 : null;
}
function getComboboxWidget(control) {
  var _anchor$parentElement, _anchor$parentElement2;
  var anchor = getComboboxAnchor(control);
  if (!anchor) return null;
  var containerId = anchor.getAttribute('aria-controls');
  var container = containerId && document.getElementById(containerId) || ((_anchor$parentElement = anchor.parentElement) === null || _anchor$parentElement === void 0 || (_anchor$parentElement2 = _anchor$parentElement.querySelector) === null || _anchor$parentElement2 === void 0 ? void 0 : _anchor$parentElement2.call(_anchor$parentElement, '.dropdown-container')) || null;
  if (!container) return null;
  return {
    anchor: anchor,
    container: container,
    results: container.querySelector('.dropdown-results, [role="listbox"]')
  };
}
function getComboboxOptionEntries(widget) {
  if (!(widget !== null && widget !== void 0 && widget.results)) return [];
  return Array.from(widget.results.querySelectorAll('li.dropdown-result, [role="option"]')).map(function (element) {
    return {
      element: element,
      value: element.getAttribute('value') || element.getAttribute('dropdown-result') || '',
      text: normalizeText(element.getAttribute('aria-label') || element.getAttribute('title') || element.textContent)
    };
  }).filter(function (option) {
    return option.text && !isPlaceholderOption(option.text);
  });
}
function isComboboxOpen(widget) {
  var _ref2 = widget !== null && widget !== void 0 ? widget : {},
    anchor = _ref2.anchor,
    container = _ref2.container;
  if (!anchor || !container) return false;
  return anchor.getAttribute('aria-expanded') === 'true' && !container.classList.contains('hidden') && !container.classList.contains('dropdown-invisible');
}

// --- low-level interaction helpers ------------------------------------------

// iCIMS anchors/dropdown results listen for the full mouse sequence, not a bare click.
function pointerClick(element) {
  if (!element) return;
  element.dispatchEvent(new MouseEvent('mouseover', {
    bubbles: true,
    cancelable: true
  }));
  element.dispatchEvent(new MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true
  }));
  element.dispatchEvent(new MouseEvent('mouseup', {
    bubbles: true,
    cancelable: true
  }));
  element.click();
}
function dispatchKey(element, type, key) {
  element.dispatchEvent(new KeyboardEvent(type, {
    key: key,
    code: key.length === 1 ? "Key".concat(key.toUpperCase()) : key,
    bubbles: true,
    cancelable: true
  }));
}
function typeSearchText(_x, _x2) {
  return _typeSearchText.apply(this, arguments);
} // --- option matching ---------------------------------------------------------
// Map a backend single-select answer (a 0-based option INDEX, as a number or numeric
// string) to the option label. The custom-dropdown answer type stays 'icims-dropdown',
// so the shared resolver (resolveAutofillAnswer, which only handles 'single-select'/
// 'multi-select') is intentionally bypassed — we resolve the index here instead. Returns
// the answer unchanged when it already matches an option label or isn't an index.
function _typeSearchText() {
  _typeSearchText = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee24(searchInput, text) {
    var value, typed, _iterator1, _step10, _char, _t1;
    return autofill_regenerator().w(function (_context24) {
      while (1) switch (_context24.p = _context24.n) {
        case 0:
          value = normalizeText(text);
          if (!(!searchInput || !value)) {
            _context24.n = 1;
            break;
          }
          return _context24.a(2);
        case 1:
          searchInput.focus();
          fillTextInputWithoutBlur(searchInput, '');
          searchInput.dispatchEvent(new Event('change', {
            bubbles: true
          }));
          typed = '';
          _iterator1 = autofill_createForOfIteratorHelper(value);
          _context24.p = 2;
          _iterator1.s();
        case 3:
          if ((_step10 = _iterator1.n()).done) {
            _context24.n = 5;
            break;
          }
          _char = _step10.value;
          dispatchKey(searchInput, 'keydown', _char);
          typed += _char;
          fillTextInputWithoutBlur(searchInput, typed);
          dispatchKey(searchInput, 'keypress', _char);
          dispatchKey(searchInput, 'keyup', _char);
          _context24.n = 4;
          return sleep(10);
        case 4:
          _context24.n = 3;
          break;
        case 5:
          _context24.n = 7;
          break;
        case 6:
          _context24.p = 6;
          _t1 = _context24.v;
          _iterator1.e(_t1);
        case 7:
          _context24.p = 7;
          _iterator1.f();
          return _context24.f(7);
        case 8:
          searchInput.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        case 9:
          return _context24.a(2);
      }
    }, _callee24, null, [[2, 6, 7, 8]]);
  }));
  return _typeSearchText.apply(this, arguments);
}
function resolveOptionByIndex(answer, options) {
  if (!Array.isArray(options) || options.length === 0 || answer == null) return answer;
  if (typeof answer === 'number' && Number.isInteger(answer) && answer >= 0 && answer < options.length) {
    return options[answer];
  }
  if (typeof answer === 'string') {
    var value = answer.trim();
    var exact = options.find(function (option) {
      return String(option).trim().toLowerCase() === value.toLowerCase();
    });
    if (exact != null) return exact;
    if (/^\d+$/.test(value)) {
      var index = Number(value);
      if (index >= 0 && index < options.length) return options[index];
    }
  }
  return answer;
}
function getBestMatchingOption(_x3, _x4) {
  return _getBestMatchingOption.apply(this, arguments);
} // --- dropdown open / read / select ------------------------------------------
function _getBestMatchingOption() {
  _getBestMatchingOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee25(answer, options) {
    var _options$;
    var want, exact, _options$2, _ref21, _options$find, best, _options$3, _t10;
    return autofill_regenerator().w(function (_context25) {
      while (1) switch (_context25.p = _context25.n) {
        case 0:
          if (!(!Array.isArray(options) || options.length === 0)) {
            _context25.n = 1;
            break;
          }
          return _context25.a(2, null);
        case 1:
          want = comparableText(typeof answer === 'boolean' ? answer ? 'Yes' : 'No' : answer);
          if (want) {
            _context25.n = 2;
            break;
          }
          return _context25.a(2, (_options$ = options[0]) !== null && _options$ !== void 0 ? _options$ : null);
        case 2:
          exact = options.find(function (option) {
            return comparableText(option.text) === want;
          });
          if (!exact) {
            _context25.n = 3;
            break;
          }
          return _context25.a(2, exact);
        case 3:
          _context25.p = 3;
          _context25.n = 4;
          return getEmbeddingMatch(answer, options.map(function (option) {
            return option.text;
          }));
        case 4:
          best = _context25.v;
          if (best) {
            _context25.n = 5;
            break;
          }
          return _context25.a(2, (_options$2 = options[0]) !== null && _options$2 !== void 0 ? _options$2 : null);
        case 5:
          return _context25.a(2, (_ref21 = (_options$find = options.find(function (option) {
            return option.text === best;
          })) !== null && _options$find !== void 0 ? _options$find : options[0]) !== null && _ref21 !== void 0 ? _ref21 : null);
        case 6:
          _context25.p = 6;
          _t10 = _context25.v;
          return _context25.a(2, (_options$3 = options[0]) !== null && _options$3 !== void 0 ? _options$3 : null);
      }
    }, _callee25, null, [[3, 6]]);
  }));
  return _getBestMatchingOption.apply(this, arguments);
}
function openDropdown(_x5) {
  return _openDropdown.apply(this, arguments);
}
function _openDropdown() {
  _openDropdown = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee26(select) {
    var shouldAbort,
      anchor,
      _args26 = arguments;
    return autofill_regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          shouldAbort = _args26.length > 1 && _args26[1] !== undefined ? _args26[1] : autofill_NEVER_ABORT;
          anchor = getDropdownAnchor(select);
          if (!(!anchor || isDropdownOpen(select))) {
            _context26.n = 1;
            break;
          }
          return _context26.a(2);
        case 1:
          anchor.focus();
          pointerClick(anchor);
          _context26.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return isDropdownOpen(select) ? true : null;
          }, DROPDOWN_WAIT_MS, shouldAbort, 50);
        case 2:
          return _context26.a(2);
      }
    }, _callee26);
  }));
  return _openDropdown.apply(this, arguments);
}
function closeDropdown(_x6) {
  return _closeDropdown.apply(this, arguments);
}
function _closeDropdown() {
  _closeDropdown = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee27(select) {
    var shouldAbort,
      anchor,
      _args27 = arguments;
    return autofill_regenerator().w(function (_context27) {
      while (1) switch (_context27.n) {
        case 0:
          shouldAbort = _args27.length > 1 && _args27[1] !== undefined ? _args27[1] : autofill_NEVER_ABORT;
          anchor = getDropdownAnchor(select);
          if (!(!anchor || !isDropdownOpen(select))) {
            _context27.n = 1;
            break;
          }
          return _context27.a(2);
        case 1:
          pointerClick(anchor);
          _context27.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return isDropdownOpen(select) ? null : true;
          }, DROPDOWN_WAIT_MS, shouldAbort, 50);
        case 2:
          return _context27.a(2);
      }
    }, _callee27);
  }));
  return _closeDropdown.apply(this, arguments);
}
function waitDropdownResults(_x7, _x8, _x9) {
  return _waitDropdownResults.apply(this, arguments);
}
function _waitDropdownResults() {
  _waitDropdownResults = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee28(field, select, shouldAbort) {
    var options;
    return autofill_regenerator().w(function (_context28) {
      while (1) switch (_context28.n) {
        case 0:
          _context28.n = 1;
          return waitForPositiveResultWithAbort(function () {
            if (isDropdownLoading(select)) return null;
            var entries = getDropdownOptionEntries(field);
            return entries.length > 0 ? entries : null;
          }, DROPDOWN_WAIT_MS, shouldAbort, 100);
        case 1:
          options = _context28.v;
          return _context28.a(2, options !== null && options !== void 0 ? options : getDropdownOptionEntries(field));
      }
    }, _callee28);
  }));
  return _waitDropdownResults.apply(this, arguments);
}
function waitDropdownLoadingToSettle(_x0, _x1) {
  return _waitDropdownLoadingToSettle.apply(this, arguments);
}
function _waitDropdownLoadingToSettle() {
  _waitDropdownLoadingToSettle = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee29(select, shouldAbort) {
    var started;
    return autofill_regenerator().w(function (_context29) {
      while (1) switch (_context29.n) {
        case 0:
          _context29.n = 1;
          return waitForPositiveResultWithAbort(function () {
            return isDropdownLoading(select) ? true : null;
          }, DROPDOWN_LOADING_GRACE_MS, shouldAbort, 50);
        case 1:
          started = _context29.v;
          if (!(!started && !isDropdownLoading(select))) {
            _context29.n = 2;
            break;
          }
          return _context29.a(2);
        case 2:
          _context29.n = 3;
          return waitForPositiveResultWithAbort(function () {
            return !isDropdownLoading(select) ? true : null;
          }, DROPDOWN_WAIT_MS, shouldAbort, 100);
        case 3:
          return _context29.a(2);
      }
    }, _callee29);
  }));
  return _waitDropdownLoadingToSettle.apply(this, arguments);
}
function readDropdownOptions(_x10) {
  return _readDropdownOptions.apply(this, arguments);
} // Read EVERY option of an already-open, non-searchable dropdown. iCIMS renders a fixed
// list lazily — rows below the fold aren't in the DOM until scrolled into view. Scroll the
// results container to the bottom repeatedly (waiting out any ajax loading spinner) until
// the option count stabilizes, deduping by text while preserving DOM order. Mirrors the
// oraclecloud cx-select readComboOptions scroll loop.
function _readDropdownOptions() {
  _readDropdownOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee30(field) {
    var _ref22,
      _ref22$shouldAbort,
      shouldAbort,
      _ref22$open,
      open,
      _ref22$searchText,
      searchText,
      select,
      _args30 = arguments;
    return autofill_regenerator().w(function (_context30) {
      while (1) switch (_context30.n) {
        case 0:
          _ref22 = _args30.length > 1 && _args30[1] !== undefined ? _args30[1] : {}, _ref22$shouldAbort = _ref22.shouldAbort, shouldAbort = _ref22$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref22$shouldAbort, _ref22$open = _ref22.open, open = _ref22$open === void 0 ? false : _ref22$open, _ref22$searchText = _ref22.searchText, searchText = _ref22$searchText === void 0 ? '' : _ref22$searchText;
          select = getNativeSelect(field);
          if (!(!select || !isCustomDropdown(select))) {
            _context30.n = 1;
            break;
          }
          return _context30.a(2, []);
        case 1:
          if (!open) {
            _context30.n = 3;
            break;
          }
          _context30.n = 2;
          return openDropdown(select, shouldAbort);
        case 2:
          if (!shouldAbort()) {
            _context30.n = 3;
            break;
          }
          return _context30.a(2, []);
        case 3:
          if (!(normalizeText(searchText) && isDropdownSearchable(select))) {
            _context30.n = 7;
            break;
          }
          _context30.n = 4;
          return typeSearchText(getDropdownSearchInput(select), searchText);
        case 4:
          if (!shouldAbort()) {
            _context30.n = 5;
            break;
          }
          return _context30.a(2, []);
        case 5:
          _context30.n = 6;
          return waitDropdownLoadingToSettle(select, shouldAbort);
        case 6:
          if (!shouldAbort()) {
            _context30.n = 7;
            break;
          }
          return _context30.a(2, []);
        case 7:
          return _context30.a(2, waitDropdownResults(field, select, shouldAbort));
      }
    }, _callee30);
  }));
  return _readDropdownOptions.apply(this, arguments);
}
function readAllDropdownOptions(_x11, _x12) {
  return _readAllDropdownOptions.apply(this, arguments);
} // Open the dropdown, decide whether it's a searchable typeahead, and (for a fixed list)
// read every option label so the backend can pick from it directly. A searchable list is
// server-filtered and potentially huge, so we DON'T enumerate it — the fill handler types
// the free-text answer and filters in the DOM. Leaves the dropdown closed.
function _readAllDropdownOptions() {
  _readAllDropdownOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee31(field, select) {
    var _getDropdownResults;
    var shouldAbort,
      max,
      seen,
      collect,
      scroller,
      isScrollable,
      lastSize,
      stable,
      _args31 = arguments;
    return autofill_regenerator().w(function (_context31) {
      while (1) switch (_context31.n) {
        case 0:
          shouldAbort = _args31.length > 2 && _args31[2] !== undefined ? _args31[2] : autofill_NEVER_ABORT;
          max = _args31.length > 3 && _args31[3] !== undefined ? _args31[3] : 300;
          _context31.n = 1;
          return waitDropdownLoadingToSettle(select, shouldAbort);
        case 1:
          if (!shouldAbort()) {
            _context31.n = 2;
            break;
          }
          return _context31.a(2, []);
        case 2:
          seen = new Map(); // text -> live entry (dedup, preserve first-seen order)
          collect = function collect() {
            var _iterator10 = autofill_createForOfIteratorHelper(getDropdownOptionEntries(field)),
              _step11;
            try {
              for (_iterator10.s(); !(_step11 = _iterator10.n()).done;) {
                var entry = _step11.value;
                if (entry.text && !seen.has(entry.text)) seen.set(entry.text, entry);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          };
          collect();
          scroller = (_getDropdownResults = getDropdownResults(select)) !== null && _getDropdownResults !== void 0 ? _getDropdownResults : getDropdownContainer(select);
          isScrollable = function isScrollable(el) {
            return Boolean(el) && el.scrollHeight > el.clientHeight + 4;
          };
          if (!isScrollable(scroller)) {
            _context31.n = 6;
            break;
          }
          lastSize = -1;
          stable = 0;
        case 3:
          if (!(seen.size < max && stable < 2 && !shouldAbort())) {
            _context31.n = 6;
            break;
          }
          scroller.scrollTop = scroller.scrollHeight;
          _context31.n = 4;
          return sleep(80);
        case 4:
          if (!isDropdownLoading(select)) {
            _context31.n = 5;
            break;
          }
          _context31.n = 5;
          return waitDropdownLoadingToSettle(select, shouldAbort);
        case 5:
          collect();
          if (seen.size === lastSize) stable += 1;else {
            stable = 0;
            lastSize = seen.size;
          }
          _context31.n = 3;
          break;
        case 6:
          return _context31.a(2, Array.from(seen.values()));
      }
    }, _callee31);
  }));
  return _readAllDropdownOptions.apply(this, arguments);
}
function probeDropdown(_x13) {
  return _probeDropdown.apply(this, arguments);
}
function _probeDropdown() {
  _probeDropdown = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee32(field) {
    var shouldAbort,
      select,
      searchable,
      options,
      _args32 = arguments,
      _t11;
    return autofill_regenerator().w(function (_context32) {
      while (1) switch (_context32.n) {
        case 0:
          shouldAbort = _args32.length > 1 && _args32[1] !== undefined ? _args32[1] : autofill_NEVER_ABORT;
          select = getNativeSelect(field);
          if (!(!select || !isCustomDropdown(select) || shouldAbort())) {
            _context32.n = 1;
            break;
          }
          return _context32.a(2, {
            searchable: false,
            options: []
          });
        case 1:
          _context32.n = 2;
          return openDropdown(select, shouldAbort);
        case 2:
          if (!shouldAbort()) {
            _context32.n = 3;
            break;
          }
          return _context32.a(2, {
            searchable: false,
            options: []
          });
        case 3:
          searchable = isDropdownSearchable(select);
          if (!searchable) {
            _context32.n = 4;
            break;
          }
          _t11 = [];
          _context32.n = 6;
          break;
        case 4:
          _context32.n = 5;
          return readAllDropdownOptions(field, select, shouldAbort);
        case 5:
          _t11 = _context32.v.map(function (entry) {
            return entry.text;
          }).filter(Boolean);
        case 6:
          options = _t11;
          _context32.n = 7;
          return closeDropdown(select, shouldAbort);
        case 7:
          return _context32.a(2, {
            searchable: searchable,
            options: options
          });
      }
    }, _callee32);
  }));
  return _probeDropdown.apply(this, arguments);
}
function selectDropdownOption(_x14, _x15, _x16, _x17) {
  return _selectDropdownOption.apply(this, arguments);
} // --- combobox open / select --------------------------------------------------
function _selectDropdownOption() {
  _selectDropdownOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee33(field, select, option, shouldAbort) {
    var _option$element;
    var _option$element$scrol, _option$element2;
    return autofill_regenerator().w(function (_context33) {
      while (1) switch (_context33.n) {
        case 0:
          if (!(option !== null && option !== void 0 && (_option$element = option.element) !== null && _option$element !== void 0 && _option$element.isConnected)) {
            _context33.n = 2;
            break;
          }
          (_option$element$scrol = (_option$element2 = option.element).scrollIntoView) === null || _option$element$scrol === void 0 || _option$element$scrol.call(_option$element2, {
            block: 'nearest'
          });
          pointerClick(option.element);
          _context33.n = 1;
          return waitForPositiveResultWithAbort(function () {
            if (shouldAbort() || !isDropdownOpen(select)) return true;
            return comparableText(getDropdownSelectedText(select)) === comparableText(option.text) ? true : null;
          }, DROPDOWN_WAIT_MS, shouldAbort, 100);
        case 1:
          return _context33.a(2);
        case 2:
          if (!((option === null || option === void 0 ? void 0 : option.value) != null)) {
            _context33.n = 3;
            break;
          }
          fillSelectInput(select, option.value);
          _context33.n = 3;
          return waitDropdownResults(field, select, shouldAbort);
        case 3:
          return _context33.a(2);
      }
    }, _callee33);
  }));
  return _selectDropdownOption.apply(this, arguments);
}
function openCombobox(_x18) {
  return _openCombobox.apply(this, arguments);
}
function _openCombobox() {
  _openCombobox = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee34(widget) {
    var shouldAbort,
      _args34 = arguments;
    return autofill_regenerator().w(function (_context34) {
      while (1) switch (_context34.n) {
        case 0:
          shouldAbort = _args34.length > 1 && _args34[1] !== undefined ? _args34[1] : autofill_NEVER_ABORT;
          if (!(!(widget !== null && widget !== void 0 && widget.anchor) || isComboboxOpen(widget))) {
            _context34.n = 1;
            break;
          }
          return _context34.a(2);
        case 1:
          widget.anchor.focus();
          pointerClick(widget.anchor);
          _context34.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return isComboboxOpen(widget) ? true : null;
          }, DROPDOWN_WAIT_MS, shouldAbort, 50);
        case 2:
          return _context34.a(2);
      }
    }, _callee34);
  }));
  return _openCombobox.apply(this, arguments);
}
function closeCombobox(_x19) {
  return _closeCombobox.apply(this, arguments);
}
function _closeCombobox() {
  _closeCombobox = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee35(widget) {
    var shouldAbort,
      _args35 = arguments;
    return autofill_regenerator().w(function (_context35) {
      while (1) switch (_context35.n) {
        case 0:
          shouldAbort = _args35.length > 1 && _args35[1] !== undefined ? _args35[1] : autofill_NEVER_ABORT;
          if (!(!(widget !== null && widget !== void 0 && widget.anchor) || !isComboboxOpen(widget))) {
            _context35.n = 1;
            break;
          }
          return _context35.a(2);
        case 1:
          pointerClick(widget.anchor);
          _context35.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return isComboboxOpen(widget) ? null : true;
          }, DROPDOWN_WAIT_MS, shouldAbort, 50);
        case 2:
          return _context35.a(2);
      }
    }, _callee35);
  }));
  return _closeCombobox.apply(this, arguments);
}
function selectComboboxOption(_x20, _x21, _x22) {
  return _selectComboboxOption.apply(this, arguments);
} // --- selectable-option reads (sync + async) ---------------------------------
// A single checkbox is modeled as a lone forced "Yes" (checking it), which is right for a
// consent/acknowledgment the candidate must accept ("I accept", "I agree to the terms", the
// login-gate GDPR consent) — the answer engine, given the sole required option, always checks it.
// But a single checkbox phrased as a yes/no QUESTION is binary: e.g. iCIMS's `eu_resident` —
// "If you are a European Union (EU) or United Kingdom (UK) resident, please check this box." — must
// be LEFT UNCHECKED for a US-based profile. Offering only "Yes" forces the engine to check it (it
// can't answer "No"), falsely self-identifying the candidate as an EU/UK resident. For these we
// offer BOTH "Yes" and "No" so the engine can decline from the profile; the checkbox fill handler
// already leaves the box unchecked on a non-affirmative answer.
//
// The consent guard wins first, so a consent statement is never mistaken for a question (protecting
// the GDPR-consent login flow, whose "Next" only enables once the box is checked).
function _selectComboboxOption() {
  _selectComboboxOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee36(widget, option, shouldAbort) {
    var _option$element3, _option$element$scrol2, _option$element4;
    return autofill_regenerator().w(function (_context36) {
      while (1) switch (_context36.n) {
        case 0:
          if (option !== null && option !== void 0 && (_option$element3 = option.element) !== null && _option$element3 !== void 0 && _option$element3.isConnected) {
            _context36.n = 1;
            break;
          }
          return _context36.a(2);
        case 1:
          (_option$element$scrol2 = (_option$element4 = option.element).scrollIntoView) === null || _option$element$scrol2 === void 0 || _option$element$scrol2.call(_option$element4, {
            block: 'nearest'
          });
          pointerClick(option.element);
          _context36.n = 2;
          return waitForPositiveResultWithAbort(function () {
            var _widget$anchor$queryS;
            if (shouldAbort() || !isComboboxOpen(widget)) return true;
            var text = normalizeText(((_widget$anchor$queryS = widget.anchor.querySelector('.dropdown-text')) === null || _widget$anchor$queryS === void 0 ? void 0 : _widget$anchor$queryS.textContent) || '');
            return text && comparableText(text) === comparableText(option.text) ? true : null;
          }, DROPDOWN_WAIT_MS, shouldAbort, 100);
        case 2:
          return _context36.a(2);
      }
    }, _callee36);
  }));
  return _selectComboboxOption.apply(this, arguments);
}
var CONSENT_CHECKBOX_PATTERN = /\bi\s+(?:accept|agree|consent|acknowledge|certif|authoriz|attest|declare|understand|have\s+read)|\b(?:agree|consent)\s+to\b|\bterms\b|\bprivacy\s+(?:policy|notice|statement)\b/i;
var BINARY_QUESTION_CHECKBOX_PATTERN = /^if\b|\bare (?:you|your)\b|\bdo you\b|\bdid you\b|\bhave you\b|\bwould you\b|\bwill you\b|\bcan you\b|\bis your\b|\?|\bresident\b|\bciti(?:zen|zenship)\b|\bsponsorship\b|\bwork (?:visa|permit|authoriz)|\beligible\b|\brelocat/i;
function isBinaryQuestionCheckbox(label) {
  var text = comparableText(label);
  if (!text || CONSENT_CHECKBOX_PATTERN.test(text)) return false;
  return BINARY_QUESTION_CHECKBOX_PATTERN.test(text);
}
function getSyncOptions(field) {
  var checkboxes = getCheckboxInputs(field);
  if (checkboxes.length > 0) {
    if (checkboxes.length === 1) {
      var label = getChoiceLabel(checkboxes[0]);
      if (/^acknowledged\b/i.test(label)) return ['Acknowledged'];
      return isBinaryQuestionCheckbox(label) ? ['Yes', 'No'] : ['Yes'];
    }
    return checkboxes.map(function (checkbox) {
      return getChoiceLabel(checkbox);
    }).filter(Boolean);
  }
  var radios = getRadioInputs(field);
  if (radios.length > 0) return radios.map(function (radio) {
    return getChoiceLabel(radio);
  }).filter(Boolean);
  var select = getNativeSelect(field);
  if (isCustomDropdown(select)) {
    var _options = getDropdownOptionEntries(field).map(function (option) {
      return option.text;
    });
    return _options.length > 0 ? _options : null;
  }
  var options = getSelectOptionEntries(field).map(function (option) {
    return option.text;
  });
  return options.length > 0 ? options : null;
}
function getAsyncOptions(_x23) {
  return _getAsyncOptions.apply(this, arguments);
} // --- constraints -------------------------------------------------------------
function _getAsyncOptions() {
  _getAsyncOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee37(field) {
    var _getSyncOptions;
    var _ref23,
      _ref23$shouldAbort,
      shouldAbort,
      select,
      options,
      _args37 = arguments;
    return autofill_regenerator().w(function (_context37) {
      while (1) switch (_context37.n) {
        case 0:
          _ref23 = _args37.length > 1 && _args37[1] !== undefined ? _args37[1] : {}, _ref23$shouldAbort = _ref23.shouldAbort, shouldAbort = _ref23$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref23$shouldAbort;
          select = getNativeSelect(field);
          if (!isCustomDropdown(select)) {
            _context37.n = 2;
            break;
          }
          _context37.n = 1;
          return readDropdownOptions(field, {
            shouldAbort: shouldAbort,
            open: true
          });
        case 1:
          options = _context37.v;
          return _context37.a(2, options.map(function (option) {
            return option.text;
          }).filter(Boolean));
        case 2:
          return _context37.a(2, (_getSyncOptions = getSyncOptions(field)) !== null && _getSyncOptions !== void 0 ? _getSyncOptions : []);
      }
    }, _callee37);
  }));
  return _getAsyncOptions.apply(this, arguments);
}
function isMarkedRequired(field, control) {
  var _control$getAttribute5, _control$getAttribute6, _field$querySelector4;
  return Boolean((control === null || control === void 0 ? void 0 : control.required) || (control === null || control === void 0 || (_control$getAttribute5 = control.getAttribute) === null || _control$getAttribute5 === void 0 ? void 0 : _control$getAttribute5.call(control, 'aria-required')) === 'true' || (control === null || control === void 0 || (_control$getAttribute6 = control.getAttribute) === null || _control$getAttribute6 === void 0 ? void 0 : _control$getAttribute6.call(control, 'i_required')) === 'true' || (field === null || field === void 0 || (_field$querySelector4 = field.querySelector) === null || _field$querySelector4 === void 0 ? void 0 : _field$querySelector4.call(field, '.Field_Required, .Field_RequiredStar')));
}
function buildConstraints(field, question, control) {
  var _control$getAttribute7, _control$getAttribute8;
  var constraints = control ? getInputConstraints(question, control) : {};
  if (!constraints.required && isMarkedRequired(field, control)) constraints.required = true;
  var placeholder = control === null || control === void 0 || (_control$getAttribute7 = control.getAttribute) === null || _control$getAttribute7 === void 0 ? void 0 : _control$getAttribute7.call(control, 'placeholder');
  if (placeholder) constraints.placeholder = placeholder;
  var validTypes = control === null || control === void 0 || (_control$getAttribute8 = control.getAttribute) === null || _control$getAttribute8 === void 0 ? void 0 : _control$getAttribute8.call(control, 'validtypes');
  if (validTypes) constraints.accept = validTypes;
  return constraints;
}

// --- field classification ----------------------------------------------------

function isResumeField(question, control) {
  var _control$id, _control$name;
  var q = comparableText(question);
  var id = comparableText("".concat((_control$id = control === null || control === void 0 ? void 0 : control.id) !== null && _control$id !== void 0 ? _control$id : '', " ").concat((_control$name = control === null || control === void 0 ? void 0 : control.name) !== null && _control$name !== void 0 ? _control$name : ''));
  return /\b(resume|cv)\b/.test(q) || /\bresume\b/.test(id);
}
function isCoverLetterField(question, control) {
  var _control$id2, _control$name2;
  var q = comparableText(question);
  var id = comparableText("".concat((_control$id2 = control === null || control === void 0 ? void 0 : control.id) !== null && _control$id2 !== void 0 ? _control$id2 : '', " ").concat((_control$name2 = control === null || control === void 0 ? void 0 : control.name) !== null && _control$name2 !== void 0 ? _control$name2 : ''));
  return /cover\s*letter/.test(q) || /cover\s*letter/.test(id);
}
function isPasswordConfirmField(question, control) {
  var _control$id3, _control$name3;
  var q = comparableText(question);
  var id = comparableText("".concat((_control$id3 = control === null || control === void 0 ? void 0 : control.id) !== null && _control$id3 !== void 0 ? _control$id3 : '', " ").concat((_control$name3 = control === null || control === void 0 ? void 0 : control.name) !== null && _control$name3 !== void 0 ? _control$name3 : ''));
  return id.includes('password confirm') || /password.*(?:re-enter|confirm)/.test(q);
}

// A phone-NUMBER control (iCIMS names it `…PersonProfileFields.PhoneNumber` / `icims_<N>_PhoneNumber`).
// Its visible label is frequently just "Number" (the "Phone" heading sits above the group), which the
// answer engine can't resolve to a phone — it guesses nonsense (e.g. "12 years"). Matched by id/name
// so the vague label can be qualified. Excludes the phone Type / Extension fields.
function isPhoneNumberField(control) {
  var _control$id4, _control$name4;
  return /phone\W*number/i.test("".concat((_control$id4 = control === null || control === void 0 ? void 0 : control.id) !== null && _control$id4 !== void 0 ? _control$id4 : '', " ").concat((_control$name4 = control === null || control === void 0 ? void 0 : control.name) !== null && _control$name4 !== void 0 ? _control$name4 : ''));
}
function emptyMetadata() {
  return {
    answerType: null,
    fieldKind: null,
    options: null,
    constraints: {}
  };
}

// --- iCIMS file-upload state (uploaded? / error?) ---------------------------

function getFileBaseId(control) {
  return String((control === null || control === void 0 ? void 0 : control.id) || (control === null || control === void 0 ? void 0 : control.name) || '').replace(/_File$/, '');
}
function isClassHidden(element) {
  var _element$classList, _element$classList2;
  return Boolean((element === null || element === void 0 || (_element$classList = element.classList) === null || _element$classList === void 0 ? void 0 : _element$classList.contains('iCIMS_NoDisplay')) || (element === null || element === void 0 || (_element$classList2 = element.classList) === null || _element$classList2 === void 0 ? void 0 : _element$classList2.contains('NoDisplay')));
}
function isFileAlreadyUploaded(control) {
  var _document$getElementB3, _document$getElementB4;
  var baseId = getFileBaseId(control);
  if (!baseId) return false;
  if (((_document$getElementB3 = document.getElementById(baseId)) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.value) === 'true') return true;
  if (normalizeText((_document$getElementB4 = document.getElementById("".concat(baseId, "_FileName"))) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.value)) return true;
  var label = document.getElementById("".concat(baseId, "_FileNameLabel"));
  return Boolean(label && !isClassHidden(label) && normalizeText(label.textContent));
}

// iCIMS document-upload fields (résumé, cover letter) accept only real documents — pdf / doc / docx
// (and rtf on some tenants). A plain-text ".txt" upload is rejected by the portal ("Invalid file
// type"), which blocks a required cover-letter field. So a cover-letter FILE is uploaded only when it
// is one of these formats; a text-only answer — or the server's ".txt" text→file fallback
// (buildTextFileAnswer) — is skipped rather than uploaded in a format iCIMS refuses.
var ICIMS_DOC_FILE_EXTENSION = /\.(?:pdf|docx?|rtf)$/i;
var ICIMS_DOC_FILE_MIME = /(?:\/pdf|msword|wordprocessingml|officedocument|\/(?:x-)?rtf)/i;
function isUploadableDocumentAnswer(answer) {
  var _answer$fileName, _answer$mimeType;
  if (!answer || autofill_typeof(answer) !== 'object' || answer.type !== 'file') return false;
  return ICIMS_DOC_FILE_EXTENSION.test(String((_answer$fileName = answer.fileName) !== null && _answer$fileName !== void 0 ? _answer$fileName : '')) || ICIMS_DOC_FILE_MIME.test(String((_answer$mimeType = answer.mimeType) !== null && _answer$mimeType !== void 0 ? _answer$mimeType : ''));
}
function hasFileUploadError(control) {
  var _control$getAttribute9, _control$getAttribute0, _control$closest5;
  var baseId = getFileBaseId(control);
  if (!baseId) return false;
  var describedIds = String((_control$getAttribute9 = control === null || control === void 0 || (_control$getAttribute0 = control.getAttribute) === null || _control$getAttribute0 === void 0 ? void 0 : _control$getAttribute0.call(control, 'aria-describedby')) !== null && _control$getAttribute9 !== void 0 ? _control$getAttribute9 : '').split(/\s+/).filter(Boolean);
  var candidates = [document.getElementById("".concat(baseId, "_error"))].concat(autofill_toConsumableArray(describedIds.map(function (id) {
    return document.getElementById(id);
  })), [control === null || control === void 0 || (_control$closest5 = control.closest) === null || _control$closest5 === void 0 ? void 0 : _control$closest5.call(control, '.iCIMS_HasError')]).filter(Boolean);
  return candidates.some(function (el) {
    var _el$classList;
    return ((_el$classList = el.classList) === null || _el$classList === void 0 ? void 0 : _el$classList.contains('iCIMS_HasError')) || normalizeText(el.textContent);
  });
}

// Per-control metadata resolved synchronously at detection time (options for custom
// dropdowns are deferred to the async fetchMissingMetadata path).
function getFieldMetadata(question, field, control) {
  var constraints = buildConstraints(field, question, control);
  if ((control === null || control === void 0 ? void 0 : control.type) === 'file') {
    if (isFileAlreadyUploaded(control)) return emptyMetadata();
    if (isResumeField(question, control)) return {
      answerType: 'resume',
      fieldKind: 'resume',
      options: [],
      constraints: constraints
    };
    if (isCoverLetterField(question, control)) {
      return {
        answerType: 'cover_letter',
        fieldKind: 'cover_letter',
        options: [],
        constraints: autofill_objectSpread(autofill_objectSpread({}, constraints), {}, {
          coverLetterOutput: 'file'
        })
      };
    }
    return emptyMetadata();
  }
  if (getComboboxAnchor(control)) {
    return {
      answerType: 'text',
      fieldKind: 'icims-combobox',
      options: [],
      constraints: constraints
    };
  }
  var checkboxes = getCheckboxInputs(field);
  if (checkboxes.length > 0) {
    return {
      answerType: checkboxes.length === 1 ? 'single-select' : 'multi-select',
      fieldKind: 'checkbox',
      options: getSyncOptions(field),
      constraints: constraints
    };
  }
  var radios = getRadioInputs(field);
  if (radios.length > 0) {
    return {
      answerType: 'single-select',
      fieldKind: 'radio',
      options: getSyncOptions(field),
      constraints: constraints
    };
  }
  var select = getNativeSelect(field);
  if (select) {
    if (isCustomDropdown(select)) {
      // options: null (not an array) so the answer handler's fetchMissingMetadata runs and
      // probes the open dropdown — searchable vs fixed decides text vs single-select.
      return {
        answerType: 'icims-dropdown',
        fieldKind: 'icims-dropdown',
        options: null,
        constraints: buildConstraints(field, question, select)
      };
    }
    return {
      answerType: 'single-select',
      fieldKind: 'select-native',
      options: getSyncOptions(field),
      constraints: buildConstraints(field, question, select)
    };
  }
  var textarea = getTextarea(field);
  if (textarea) {
    var cover = isCoverLetterField(question, textarea);
    return {
      answerType: cover ? 'cover_letter' : 'text',
      fieldKind: cover ? 'cover_letter' : 'textarea',
      options: [],
      constraints: autofill_objectSpread(autofill_objectSpread({}, buildConstraints(field, question, textarea)), cover ? {
        coverLetterOutput: 'text'
      } : {})
    };
  }
  var textInput = autofill_getTextInput(field);
  if (textInput) {
    var _textInput$type;
    var _cover = isCoverLetterField(question, textInput);
    var isPassword = ((_textInput$type = textInput.type) !== null && _textInput$type !== void 0 ? _textInput$type : '').toLowerCase() === 'password';
    var isPasswordConfirm = isPasswordConfirmField(question, textInput);
    return {
      answerType: _cover ? 'cover_letter' : isPasswordConfirm ? 'password-confirm' : isPassword ? 'password' : 'text',
      fieldKind: _cover ? 'cover_letter' : 'text',
      options: [],
      constraints: autofill_objectSpread(autofill_objectSpread({}, buildConstraints(field, question, textInput)), _cover ? {
        coverLetterOutput: 'text'
      } : {})
    };
  }
  return emptyMetadata();
}
function deriveFieldId(question, control) {
  var _control$getAttribute1;
  if (isResumeField(question, control)) return RESUME_FIELD_ID;
  if (isCoverLetterField(question, control)) return COVER_LETTER_FIELD_ID;
  return (control === null || control === void 0 ? void 0 : control.name) || (control === null || control === void 0 ? void 0 : control.id) || (control === null || control === void 0 || (_control$getAttribute1 = control.getAttribute) === null || _control$getAttribute1 === void 0 ? void 0 : _control$getAttribute1.call(control, 'data-label')) || slugify(question) || null;
}
function uniqueFieldId(fieldId, usedIds) {
  if (!fieldId) return null;
  if (!usedIds.has(fieldId)) {
    usedIds.add(fieldId);
    return fieldId;
  }
  var suffix = 2;
  while (usedIds.has("".concat(fieldId, "-").concat(suffix))) suffix += 1;
  var unique = "".concat(fieldId, "-").concat(suffix);
  usedIds.add(unique);
  return unique;
}
function getChoiceGroupKey(control) {
  if (!control || !['checkbox', 'radio'].includes(control.type) || !control.name) return null;
  return "".concat(control.type, ":").concat(control.name);
}
function compareDocOrder(a, b) {
  if (a === b || !(a !== null && a !== void 0 && a.compareDocumentPosition) || !(b !== null && b !== void 0 && b.compareDocumentPosition)) return 0;
  var position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
  if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
  return 0;
}

// --- structured collection sections (Education / Work / Address / Phones) ---
//
// iCIMS renders these as `.iCIMS_CollectionContainer`s sharing a `data-collection`
// key; each field row carries `[data-collection][data-index]`, and an "Add More"
// anchor (showGroup) appends a blank instance.
//
// ALL of Education / Work / Address / Phones use the shared SECTION HIERARCHY (root →
// entry group → leaf, ../autofill-section-hierarchy.js): the root's count comes from the
// structured profile (getProfileSectionData), its fill iterator ensures one instance per
// profile entry (clicking "Add More"), and each entry's leaves resolve their value from
// profile entry[i] and fill through iCIMS's own control handlers. The hierarchy is
// detector-driven — rows the root adds are picked up on the next detection pass — so
// ordering and per-entry coordination are handled by the shared machinery. iCIMS has no
// per-row delete, so `clearRows` is omitted: the iterator only grows to the needed count
// and (re)fills each entry from the profile, reconciling whatever the résumé parse prefilled.
//
// Because iCIMS collection keys are per-tenant/posting and unknown at module load, a
// section identifies its own instances at runtime by KIND (classifyCollection: labels
// like "school" → education, "employer"/"company" → work) rather than a static key.

function getCollectionKey(container) {
  var _container$querySelec;
  return (container === null || container === void 0 || (_container$querySelec = container.querySelector) === null || _container$querySelec === void 0 || (_container$querySelec = _container$querySelec.call(container, '[data-collection]')) === null || _container$querySelec === void 0 ? void 0 : _container$querySelec.getAttribute('data-collection')) || null;
}
function getCollectionIndex(container) {
  var _container$querySelec2;
  var raw = container === null || container === void 0 || (_container$querySelec2 = container.querySelector) === null || _container$querySelec2 === void 0 || (_container$querySelec2 = _container$querySelec2.call(container, '[data-collection][data-index]')) === null || _container$querySelec2 === void 0 ? void 0 : _container$querySelec2.getAttribute('data-index');
  var value = Number.parseInt(raw !== null && raw !== void 0 ? raw : '', 10);
  return Number.isFinite(value) ? value : 0;
}
function getSectionRowLabel(row) {
  var _row$querySelector, _row$querySelector2;
  return normalizeText((row === null || row === void 0 || (_row$querySelector = row.querySelector) === null || _row$querySelector === void 0 || (_row$querySelector = _row$querySelector.call(row, 'label .iCIMS_LabelText')) === null || _row$querySelector === void 0 ? void 0 : _row$querySelector.textContent) || (row === null || row === void 0 || (_row$querySelector2 = row.querySelector) === null || _row$querySelector2 === void 0 || (_row$querySelector2 = _row$querySelector2.call(row, 'label')) === null || _row$querySelector2 === void 0 ? void 0 : _row$querySelector2.textContent));
}
function getSectionFieldRows(container) {
  var _container$querySelec3, _container$querySelec4;
  return Array.from((_container$querySelec3 = container === null || container === void 0 || (_container$querySelec4 = container.querySelectorAll) === null || _container$querySelec4 === void 0 ? void 0 : _container$querySelec4.call(container, '[data-collection][data-index]')) !== null && _container$querySelec3 !== void 0 ? _container$querySelec3 : []).filter(function (row) {
    return getSectionRowLabel(row);
  });
}
function getSectionLabelSet(container) {
  return new Set(getSectionFieldRows(container).map(function (row) {
    return comparableText(getSectionRowLabel(row));
  }));
}
function classifyCollection(key, container) {
  var _container$closest;
  var labels = getSectionLabelSet(container);
  var k = comparableText(key);
  if (/education/.test(k) || labels.has('school')) return 'education';
  if (labels.has('employer') || labels.has('company') || labels.has('title') && (labels.has('start date') || labels.has('description'))) return 'work';
  if (/address/.test(k) || labels.has('city') && (labels.has('country') || labels.has('state/province') || labels.has('zip/postal code'))) return 'address';
  // Phones checked AFTER address so an address collection (city + state/zip/country) wins first;
  // a phones-only collection (key `PersonProfileFields.Phones`, label "Number") lands here.
  if (/phone/.test(k) || labels.has('number')) return 'phones';
  if (/reference/.test(k)) return 'references';
  var subHeader = comparableText((_container$closest = container.closest('div[role="group"]')) === null || _container$closest === void 0 || (_container$closest = _container$closest.querySelector('h2.iCIMS_SubHeader')) === null || _container$closest === void 0 ? void 0 : _container$closest.textContent);
  if (/education/.test(subHeader)) return 'education';
  if (/work experience|professional experience|employment/.test(subHeader)) return 'work';
  return 'other';
}

// --- iCIMS Forms-module MultiGroup repeating sections -----------------------
//
// The Forms module (`/forms?...form=<Name>`) renders repeating sections NOT as
// `.iCIMS_CollectionContainer` but as a "group loop": a hidden count `icims_gh_<Group>`,
// an add button `input.group-loop-add[name="icims_gsi_<Group>"]` ("Show More (…)"), and one
// `div.icims_group_loop[data-group-loop-name="<Group>"]` per instance. Instance controls are
// `icims_<N>_<Stem>` (0-based index N) carrying `iCIMS_Forms_Q<Stem>` (on the control, or on the
// `.iCIMS_Forms_DateOnlyField` wrapper for dates), each in its own `<td>`. We surface the three
// requested groups (by NAME) through the SAME section machinery as the collection containers — all
// via the shared hierarchy (Education / Work / Address / Phones / References).
var MULTIGROUP_KIND_BY_NAME = {
  Education: 'education',
  WorkExperience: 'work',
  Address: 'address',
  Phones: 'phones',
  References: 'references'
};
var MULTIGROUP_NAME_BY_KIND = {
  education: 'Education',
  work: 'WorkExperience',
  address: 'Address',
  phones: 'Phones',
  references: 'References'
};
function getMultiGroupInstanceIndex(instanceEl) {
  var _instanceEl$querySele, _control$getAttribute10;
  var control = instanceEl === null || instanceEl === void 0 || (_instanceEl$querySele = instanceEl.querySelector) === null || _instanceEl$querySele === void 0 ? void 0 : _instanceEl$querySele.call(instanceEl, '[name^="icims_"], [id^="icims_"]');
  var match = /^icims_(\d+)_/.exec((control === null || control === void 0 || (_control$getAttribute10 = control.getAttribute) === null || _control$getAttribute10 === void 0 ? void 0 : _control$getAttribute10.call(control, 'name')) || (control === null || control === void 0 ? void 0 : control.id) || '');
  return match ? Number.parseInt(match[1], 10) : 0;
}
function getMultiGroupInstances(groupName) {
  if (!groupName) return [];
  return Array.from(document.querySelectorAll(".icims_group_loop[data-group-loop-name=\"".concat(escapeAttr(groupName), "\"]"))).filter(function (instance) {
    return isVisible(instance);
  }).sort(function (a, b) {
    return getMultiGroupInstanceIndex(a) - getMultiGroupInstanceIndex(b);
  });
}
function getMultiGroupAddButton(groupName) {
  return groupName ? document.querySelector("input[name=\"icims_gsi_".concat(escapeAttr(groupName), "\"]")) : null;
}

// The `multigroup:<Group>` consumed-section key for a control inside a group loop.
function getMultiGroupKeyForControl(control) {
  var _control$closest6;
  var loop = control === null || control === void 0 || (_control$closest6 = control.closest) === null || _control$closest6 === void 0 ? void 0 : _control$closest6.call(control, '.icims_group_loop[data-group-loop-name]');
  return loop ? "multigroup:".concat(loop.getAttribute('data-group-loop-name')) : null;
}
function getStructuredSectionGroups(root) {
  var groups = new Map();
  var _iterator2 = autofill_createForOfIteratorHelper(root.querySelectorAll('.iCIMS_CollectionContainer')),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var container = _step2.value;
      var _key2 = getCollectionKey(container);
      if (!_key2) continue;
      if (!groups.has(_key2)) groups.set(_key2, {
        key: _key2,
        kind: classifyCollection(_key2, container),
        containers: [],
        structure: 'collection'
      });
      groups.get(_key2).containers.push(container);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = autofill_createForOfIteratorHelper(groups.values()),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var group = _step3.value;
      group.containers.sort(function (a, b) {
        return getCollectionIndex(a) - getCollectionIndex(b);
      });
    }
    // Forms-module MultiGroup sections (Education / WorkExperience / Address). Keys (`multigroup:*`)
    // can't collide with `data-collection` values, so this is purely additive.
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  for (var _i2 = 0, _Object$entries = Object.entries(MULTIGROUP_KIND_BY_NAME); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = autofill_slicedToArray(_Object$entries[_i2], 2),
      groupName = _Object$entries$_i[0],
      kind = _Object$entries$_i[1];
    var key = "multigroup:".concat(groupName);
    if (groups.has(key)) continue;
    var containers = getMultiGroupInstances(groupName);
    if (containers.length > 0) groups.set(key, {
      key: key,
      kind: kind,
      containers: containers,
      structure: 'multigroup'
    });
  }
  return Array.from(groups.values()).filter(function (group) {
    return ['education', 'work', 'address', 'phones', 'references'].includes(group.kind);
  });
}
function isControlInConsumedSection(control, consumedKeys) {
  if (consumedKeys.size === 0) return false;
  var container = control.closest('.iCIMS_CollectionContainer');
  if (container) return consumedKeys.has(getCollectionKey(container));
  var multiGroupKey = getMultiGroupKeyForControl(control);
  return multiGroupKey ? consumedKeys.has(multiGroupKey) : false;
}

// Only the last instance's buttons row is visible; its "Add More" anchor appends.
function getSectionAddAnchor(containers) {
  for (var i = containers.length - 1; i >= 0; i -= 1) {
    var row = containers[i].querySelector('.iCIMS_CollectionButtonsRow');
    if (!row || isClassHidden(row) || !isVisible(row)) continue;
    var anchor = row.querySelector('a[onclick*="showGroup"], a.iCIMS_Anchor[role="button"]');
    if (anchor && isVisible(anchor)) return anchor;
  }
  return null;
}
function cityFromLocation(location) {
  var value = normalizeText(location);
  return value ? value.split(',')[0].trim() || null : null;
}
function optionHasValue(select, value) {
  var _select$options;
  return Array.from((_select$options = select === null || select === void 0 ? void 0 : select.options) !== null && _select$options !== void 0 ? _select$options : []).some(function (option) {
    return option.value === value;
  });
}

// Fills an iCIMS DateOnly field (Month select + optional Day select + Year input)
// from a single date string. Used both for section entry dates (start/end, month/year
// only) and standalone date fields (e.g. Date Available / Date of Birth, month/day/year).
function fillSectionDate(row, value) {
  var _parseProfileDate = parseProfileDate(value),
    month = _parseProfileDate.month,
    day = _parseProfileDate.day,
    year = _parseProfileDate.year;
  var dateField = row.querySelector('.iCIMS_Forms_DateOnlyField');
  if (!dateField) return;
  var monthSelect = dateField.querySelector('select.iCIMS_Forms_MonthInput');
  var daySelect = dateField.querySelector('select.iCIMS_Forms_DayInput');
  var yearInput = dateField.querySelector('input.iCIMS_Forms_YearInput');
  if (month && monthSelect && optionHasValue(monthSelect, month)) fillSelectInput(monthSelect, month);
  if (year && yearInput) fillTextInput(yearInput, year);
  if (daySelect) {
    // Prefer the real day (padded '05' or bare '5', whichever the option list uses);
    // fall back to '1' only to satisfy a required day the profile date didn't carry —
    // and only when a month or year actually filled, so an unparseable answer (all
    // parts null) never sets a lone, meaningless day.
    var dayValue = day ? [day, String(Number(day))].find(function (candidate) {
      return optionHasValue(daySelect, candidate);
    }) : null;
    if (dayValue) fillSelectInput(daySelect, dayValue);else if ((month || year) && (!daySelect.value || daySelect.value === '0') && optionHasValue(daySelect, '1')) fillSelectInput(daySelect, '1');
  }
}
function findSectionRow(rows, includeRegex) {
  var _rows$find;
  var excludeRegex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (_rows$find = rows.find(function (row) {
    var label = comparableText(getSectionRowLabel(row));
    if (excludeRegex && excludeRegex.test(label)) return false;
    return includeRegex.test(label);
  })) !== null && _rows$find !== void 0 ? _rows$find : null;
}

// --- Education / Work History section hierarchy ------------------------------
//
// Each descriptor identifies its instances at runtime by KIND (classifyCollection),
// then exposes them to the shared root → group → leaf machinery. A "row" is one
// `.iCIMS_CollectionContainer` instance; its leaves are the mapped field rows inside.

// The section KIND's instance containers (visible, in data-index order).
function getSectionInstancesByKind(kind) {
  var root = getIcimsRoot();
  if (!root) return [];
  var group = getStructuredSectionGroups(root).find(function (entry) {
    return entry.kind === kind;
  });
  if (!group) return [];
  return group.containers.filter(function (container) {
    return isVisible(container);
  }).sort(function (a, b) {
    return getCollectionIndex(a) - getCollectionIndex(b);
  });
}

// A stable ancestor that contains every instance of a kind (and the "Add More"
// anchor). Null when the section isn't present, which makes the shared collector
// emit nothing for it.
function getSectionContainerByKind(kind) {
  var instances = getSectionInstancesByKind(kind);
  if (instances.length === 0) return null;
  return instances[0].closest('div[role="group"]') || instances[0].parentElement || getIcimsRoot();
}

// Locate the mapped field inside an instance container and return { field, fieldId }. Leaf
// handlers re-resolve this live (the field element is the scope their base handler queries within).
// Two structures: collection containers locate by row label (mapping.match); Forms-module
// MultiGroup instances locate by the stable `iCIMS_Forms_Q<Stem>` class (mapping.stem), returning
// the control's own `<td>` (which also holds the DateOnly composite for date leaves).
function getSectionRowField(instanceContainer, mapping) {
  var _instanceContainer$ma;
  if (!instanceContainer) return null;
  if ((_instanceContainer$ma = instanceContainer.matches) !== null && _instanceContainer$ma !== void 0 && _instanceContainer$ma.call(instanceContainer, '.icims_group_loop') && mapping.stem) {
    var el = instanceContainer.querySelector(".iCIMS_Forms_Q".concat(mapping.stem));
    if (!el) return null;
    var field = el.closest('td') || el;
    var _control = el.matches('input, select, textarea') ? el : field.querySelector('input, select, textarea');
    return {
      field: field,
      fieldId: (_control === null || _control === void 0 ? void 0 : _control.id) || (_control === null || _control === void 0 ? void 0 : _control.name) || mapping.key
    };
  }
  // Stem-only mappings (MultiGroup type fields like AddressType/PhoneType) have no collection-
  // container equivalent — skip them here rather than crash findSectionRow on an undefined regex.
  if (!mapping.match) return null;
  var row = findSectionRow(getSectionFieldRows(instanceContainer), mapping.match, mapping.exclude);
  if (!row) return null;
  var control = getSectionRowControl(row) || row.querySelector('input, select, textarea');
  return {
    field: row,
    fieldId: (control === null || control === void 0 ? void 0 : control.id) || (control === null || control === void 0 ? void 0 : control.name) || mapping.key
  };
}

// The base fill handler kind for a leaf, derived from the live control in its row.
function classifySectionLeaf(_mapping, fieldInfo) {
  var row = fieldInfo.field;
  if (row.querySelector('.iCIMS_Forms_DateOnlyField')) return {
    fieldKind: 'icims-date'
  };
  var select = getNativeSelect(row);
  if (select && isCustomDropdown(select)) return {
    fieldKind: 'icims-dropdown'
  };
  if (select) return {
    fieldKind: 'select-native'
  };
  if (getTextarea(row)) return {
    fieldKind: 'textarea'
  };
  if (getRadioInputs(row).length) return {
    fieldKind: 'radio'
  };
  if (getCheckboxInputs(row).length) return {
    fieldKind: 'checkbox'
  };
  return {
    fieldKind: 'text'
  };
}

// Add one instance for a kind: click its group's "Add More" control once (the shared iterator
// handles the appear-wait + retries). Collection containers use a `showGroup` anchor; MultiGroup
// uses the `icims_gsi_<Group>` "Show More" submit (whose native submit is intercepted by iCIMS's
// registerGroupLoop, which clones the last instance client-side — no POST).
function createSectionAddRow(kind) {
  return /*#__PURE__*/function () {
    var _ref3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee(_container) {
      var _instances$, _instances$$matches;
      var _ref4,
        _ref4$shouldAbort,
        shouldAbort,
        instances,
        addButton,
        anchor,
        _args = arguments;
      return autofill_regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _ref4 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref4$shouldAbort = _ref4.shouldAbort, shouldAbort = _ref4$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref4$shouldAbort;
            instances = getSectionInstancesByKind(kind);
            if (!((_instances$ = instances[0]) !== null && _instances$ !== void 0 && (_instances$$matches = _instances$.matches) !== null && _instances$$matches !== void 0 && _instances$$matches.call(_instances$, '.icims_group_loop'))) {
              _context.n = 3;
              break;
            }
            addButton = getMultiGroupAddButton(MULTIGROUP_NAME_BY_KIND[kind]);
            if (!(!addButton || shouldAbort())) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            pointerClick(addButton);
            _context.n = 2;
            return sleep(500);
          case 2:
            return _context.a(2);
          case 3:
            anchor = getSectionAddAnchor(instances);
            if (!(!anchor || shouldAbort())) {
              _context.n = 4;
              break;
            }
            return _context.a(2);
          case 4:
            pointerClick(anchor);
            _context.n = 5;
            return sleep(500);
          case 5:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x24) {
      return _ref3.apply(this, arguments);
    };
  }();
}
var EDUCATION_SECTION = {
  rootFieldId: 'educationHistory',
  answerType: 'educationHistory',
  rootQuestion: 'Education',
  profileSection: 'education',
  rowLabel: function rowLabel(rowIndex) {
    return "Education ".concat(rowIndex + 1);
  },
  // Fill only after the résumé parse re-renders/prefills the form (when a résumé field
  // is on this step; resolves immediately otherwise).
  rootWaitForFieldId: RESUME_FIELD_ID,
  getContainer: function getContainer() {
    return getSectionContainerByKind('education');
  },
  getRows: function getRows() {
    return getSectionInstancesByKind('education');
  },
  getRowField: function getRowField(rowEl, mapping) {
    return getSectionRowField(rowEl, mapping);
  },
  classifyLeaf: classifySectionLeaf,
  addRow: createSectionAddRow('education'),
  // No clearRows — iCIMS has no per-row delete; the iterator grows + fills from profile.
  mappings: [{
    key: 'universityName',
    match: /\bschool\b/,
    exclude: /other/,
    stem: 'School',
    label: 'School',
    question: 'School',
    fieldKind: 'text',
    profileKey: 'universityName'
  }, {
    key: 'degree',
    match: /degree/,
    stem: 'Degree',
    label: 'Degree',
    question: 'Degree',
    fieldKind: 'text',
    profileKey: 'degree'
  }, {
    key: 'major',
    match: /major|field of study|concentration/,
    stem: 'Major',
    label: 'Major',
    question: 'Major',
    fieldKind: 'text',
    profileKey: 'major'
  },
  // iCIMS often pre-selects a (wrong) default for "Did You Graduate?"; always resolve it.
  {
    key: 'graduated',
    match: /graduate/,
    stem: 'IsGraduated',
    label: 'Graduated',
    question: 'Did you graduate?',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return entry !== null && entry !== void 0 && entry.isCurrent ? 'No' : 'Yes';
    }
  }, {
    key: 'startDate',
    match: /start date/,
    stem: 'EducationStartDate',
    label: 'Start date',
    question: 'Start date',
    fieldKind: 'text',
    profileKey: 'startDate'
  }, {
    key: 'endDate',
    match: /(end|graduation) date/,
    stem: 'GraduationDate',
    label: 'End date',
    question: 'End date',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return entry !== null && entry !== void 0 && entry.isCurrent ? null : (entry === null || entry === void 0 ? void 0 : entry.endDate) || null;
    }
  }]
};
var WORK_HISTORY_SECTION = {
  rootFieldId: 'workHistory',
  answerType: 'workHistory',
  rootQuestion: 'Work Experience',
  profileSection: 'workHistory',
  rowLabel: function rowLabel(rowIndex) {
    return "Work history ".concat(rowIndex + 1);
  },
  rootWaitForFieldId: RESUME_FIELD_ID,
  getContainer: function getContainer() {
    return getSectionContainerByKind('work');
  },
  getRows: function getRows() {
    return getSectionInstancesByKind('work');
  },
  getRowField: function getRowField(rowEl, mapping) {
    return getSectionRowField(rowEl, mapping);
  },
  classifyLeaf: classifySectionLeaf,
  addRow: createSectionAddRow('work'),
  mappings: [{
    key: 'companyName',
    match: /employer|company/,
    stem: 'EmpName',
    label: 'Employer',
    question: 'Employer',
    fieldKind: 'text',
    profileKey: 'companyName'
  }, {
    key: 'positionTitle',
    match: /\btitle\b|position/,
    stem: 'EmpTitle',
    label: 'Title',
    question: 'Title',
    fieldKind: 'text',
    profileKey: 'positionTitle'
  }, {
    key: 'city',
    match: /\bcity\b/,
    stem: 'EmpCity',
    label: 'City',
    question: 'City',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return cityFromLocation(entry === null || entry === void 0 ? void 0 : entry.location);
    }
  }, {
    key: 'startDate',
    match: /start date/,
    stem: 'EmpStart',
    label: 'Start date',
    question: 'Start date',
    fieldKind: 'text',
    profileKey: 'startDate'
  }, {
    key: 'endDate',
    match: /end date/,
    stem: 'EmpEnd',
    label: 'End date',
    question: 'End date',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return entry !== null && entry !== void 0 && entry.isCurrent ? null : (entry === null || entry === void 0 ? void 0 : entry.endDate) || null;
    }
  }, {
    key: 'description',
    match: /description|responsibilit|summary|duties|accomplish/,
    stem: 'EmpDescription',
    label: 'Description',
    question: 'Description',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return Array.isArray(entry === null || entry === void 0 ? void 0 : entry.achievements) && entry.achievements.length > 0 ? entry.achievements.join('\n') : null;
    }
  }]
};

// Address + Phones: single-entry profile sections filled through the SAME hierarchy as
// education/work (profileSection 'addresses'/'phones' come from getProfileSectionData as 1-element
// arrays). Mappings carry BOTH `match` (Candidate-Portal `.iCIMS_CollectionContainer` row label)
// and `stem` (Forms-module MultiGroup `iCIMS_Forms_Q<Stem>`). maxEntries:1 caps the iterator.
var ADDRESS_SECTION = {
  rootFieldId: 'addressHistory',
  answerType: 'addressHistory',
  rootQuestion: 'Address',
  profileSection: 'addresses',
  rowLabel: function rowLabel(rowIndex) {
    return "Address ".concat(rowIndex + 1);
  },
  rootWaitForFieldId: RESUME_FIELD_ID,
  maxEntries: 1,
  getContainer: function getContainer() {
    return getSectionContainerByKind('address');
  },
  getRows: function getRows() {
    return getSectionInstancesByKind('address');
  },
  getRowField: function getRowField(rowEl, mapping) {
    return getSectionRowField(rowEl, mapping);
  },
  classifyLeaf: classifySectionLeaf,
  addRow: createSectionAddRow('address'),
  mappings: [{
    key: 'street1',
    match: /^address$|street.*1|address 1/,
    exclude: /2/,
    stem: 'Address',
    label: 'Address',
    question: 'Address',
    fieldKind: 'text',
    profileKey: 'street1'
  }, {
    key: 'street2',
    match: /address\s*2|street.*2/,
    stem: 'Address2',
    label: 'Address 2',
    question: 'Address line 2',
    fieldKind: 'text',
    profileKey: 'street2'
  }, {
    key: 'city',
    match: /\bcity\b/,
    stem: 'City',
    label: 'City',
    question: 'City',
    fieldKind: 'text',
    profileKey: 'city'
  }, {
    key: 'zip',
    match: /zip|postal/,
    stem: 'Zip',
    label: 'Zip',
    question: 'Zip / postal code',
    fieldKind: 'text',
    profileKey: 'zip'
  }, {
    key: 'country',
    match: /country/,
    stem: 'Country',
    label: 'Country',
    question: 'Country',
    fieldKind: 'text',
    profileKey: 'country'
  },
  // State can be a cascading dropdown repopulated by Country — fill it AFTER country settles.
  {
    key: 'state',
    match: /state|province/,
    stem: 'State',
    label: 'State',
    question: 'State / province',
    fieldKind: 'text',
    profileKey: 'state',
    waitForMappingKey: 'country'
  }, {
    key: 'county',
    match: /county/,
    stem: 'County',
    label: 'County',
    question: 'County',
    fieldKind: 'text',
    profileKey: 'county'
  },
  // MultiGroup-only type field (no collection-container equivalent) — deterministic default.
  {
    key: 'addressType',
    stem: 'AddressType',
    label: 'Type',
    question: 'Address type',
    fieldKind: 'text',
    resolveValue: function resolveValue() {
      return 'Home';
    }
  }]
};
var PHONES_SECTION = {
  rootFieldId: 'phoneHistory',
  answerType: 'phoneHistory',
  rootQuestion: 'Phone',
  profileSection: 'phones',
  rowLabel: function rowLabel(rowIndex) {
    return "Phone ".concat(rowIndex + 1);
  },
  rootWaitForFieldId: RESUME_FIELD_ID,
  maxEntries: 1,
  getContainer: function getContainer() {
    return getSectionContainerByKind('phones');
  },
  getRows: function getRows() {
    return getSectionInstancesByKind('phones');
  },
  getRowField: function getRowField(rowEl, mapping) {
    return getSectionRowField(rowEl, mapping);
  },
  classifyLeaf: classifySectionLeaf,
  addRow: createSectionAddRow('phones'),
  mappings: [{
    key: 'number',
    match: /number|phone/,
    stem: 'PhoneNumber',
    label: 'Number',
    question: 'Phone number',
    fieldKind: 'text',
    profileKey: 'number'
  },
  // MultiGroup-only type field — deterministic default.
  {
    key: 'phoneType',
    stem: 'PhoneType',
    label: 'Type',
    question: 'Phone type',
    fieldKind: 'text',
    resolveValue: function resolveValue() {
      return 'Mobile';
    }
  }]
};

// References fill from the profile's top-level `references` entries ({ name, email, phone, title,
// company, knownFrom, knownTo, notes }) — the single `name` splits into first/last below; every
// iCIMS sub-field resolves deterministically (no aiFallback leaves here). With 0 entries the block
// still COLLAPSES into a section whose leaves skip: it consumes the reference controls so the
// per-field pass can't mis-fill Ref1FirstName/Email/Phone with the CANDIDATE's own info
// (references are other people). Same contract as Paylocity's references section.
var REFERENCES_SECTION = {
  rootFieldId: 'references',
  answerType: 'references',
  rootQuestion: 'References',
  profileSection: 'references',
  rowLabel: function rowLabel(rowIndex) {
    return "Reference ".concat(rowIndex + 1);
  },
  rootWaitForFieldId: RESUME_FIELD_ID,
  getContainer: function getContainer() {
    return getSectionContainerByKind('references');
  },
  getRows: function getRows() {
    return getSectionInstancesByKind('references');
  },
  getRowField: function getRowField(rowEl, mapping) {
    return getSectionRowField(rowEl, mapping);
  },
  classifyLeaf: classifySectionLeaf,
  addRow: createSectionAddRow('references'),
  mappings: [{
    key: 'firstName',
    match: /first name/,
    stem: 'Ref1FirstName',
    label: 'First name',
    question: 'Reference first name',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.firstName) || (entry !== null && entry !== void 0 && entry.name ? entry.name.trim().split(/\s+/)[0] : null);
    }
  }, {
    key: 'lastName',
    match: /last name/,
    stem: 'Ref1LastName',
    label: 'Last name',
    question: 'Reference last name',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.lastName) || (entry !== null && entry !== void 0 && entry.name ? entry.name.trim().split(/\s+/).slice(1).join(' ') || null : null);
    }
  }, {
    key: 'email',
    match: /e-?mail/,
    stem: 'Ref1Email',
    label: 'Email',
    question: 'Reference email',
    fieldKind: 'text',
    profileKey: 'email'
  }, {
    key: 'phone',
    match: /phone/,
    stem: 'Ref1Phone',
    label: 'Phone',
    question: 'Reference phone',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.phone) || (entry === null || entry === void 0 ? void 0 : entry.phoneNumber) || null;
    }
  }, {
    key: 'company',
    match: /company|employer/,
    stem: 'Ref1Company',
    label: 'Company',
    question: 'Reference company',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.company) || (entry === null || entry === void 0 ? void 0 : entry.companyName) || null;
    }
  }]
};
var HIERARCHY_SECTIONS = [EDUCATION_SECTION, WORK_HISTORY_SECTION, ADDRESS_SECTION, PHONES_SECTION, REFERENCES_SECTION];
function getHierarchySectionForKind(kind) {
  if (kind === 'education') return EDUCATION_SECTION;
  if (kind === 'work') return WORK_HISTORY_SECTION;
  if (kind === 'address') return ADDRESS_SECTION;
  if (kind === 'phones') return PHONES_SECTION;
  if (kind === 'references') return REFERENCES_SECTION;
  return null;
}
function getSectionRowControl(row) {
  return getNativeSelect(row) || getTextarea(row) || autofill_getTextInput(row);
}

// --- salary composite (amount + currency + timeframe in one row) ------------

var SALARY_FIELD_KIND = 'icims-salary';
var SALARY_CURRENCY_CODES = ['USD', 'GBP', 'EUR', 'CAD', 'MXN', 'CNY', 'INR', 'JPY', 'NGN', 'ZAR', 'KRW', 'TWD', 'SGD', 'HKD', 'AUD', 'MYR'];
var SALARY_CURRENCY_SYMBOLS = [{
  re: /£/,
  code: 'GBP'
}, {
  re: /€/,
  code: 'EUR'
}, {
  re: /[₨₹]/,
  code: 'INR'
}, {
  re: /₦/,
  code: 'NGN'
}, {
  re: /₩/,
  code: 'KRW'
}, {
  re: /\bRM\b/i,
  code: 'MYR'
}, {
  re: /\bR\b/,
  code: 'ZAR'
}];
function getSalaryAmountInput(field) {
  var _field$matches3, _field$querySelector5, _field$querySelector6;
  if (!field) return null;
  if ((_field$matches3 = field.matches) !== null && _field$matches3 !== void 0 && _field$matches3.call(field, 'input[validatesalaryamnt="true"]')) return field;
  return (_field$querySelector5 = (_field$querySelector6 = field.querySelector) === null || _field$querySelector6 === void 0 ? void 0 : _field$querySelector6.call(field, 'input[validatesalaryamnt="true"]')) !== null && _field$querySelector5 !== void 0 ? _field$querySelector5 : null;
}
function getSalaryParts(amountInput) {
  var baseId = (amountInput === null || amountInput === void 0 ? void 0 : amountInput.id) || (amountInput === null || amountInput === void 0 ? void 0 : amountInput.name);
  if (!baseId) return null;
  return {
    amount: amountInput,
    currency: document.getElementById("".concat(baseId, "_Currency")),
    timeframe: document.getElementById("".concat(baseId, "_Timeframe"))
  };
}
function getSalaryQuestion(amountInput, field) {
  var baseId = amountInput.id || amountInput.name || '';
  var baseLabel = baseId ? document.getElementById("label_".concat(baseId)) : null;
  return firstText(baseLabel === null || baseLabel === void 0 ? void 0 : baseLabel.textContent, humanizeIdentifier(baseId), getControlQuestion(amountInput, field));
}
function extractSalaryAmount(answer) {
  if (answer == null) return '';
  var text = String(answer).trim();
  var scaled = text.match(/(\d+(?:\.\d+)?)\s*([km])\b/i);
  if (scaled) {
    var multiplier = scaled[2].toLowerCase() === 'k' ? 1e3 : 1e6;
    return String(Math.round(Number.parseFloat(scaled[1]) * multiplier));
  }
  var match = text.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
  return match ? String(Math.round(Number.parseFloat(match[0]))) : '';
}
function detectSalaryCurrency(answer) {
  var _SALARY_CURRENCY_SYMB, _SALARY_CURRENCY_SYMB2;
  var text = String(answer !== null && answer !== void 0 ? answer : '');
  var code = (text.toUpperCase().match(/\b[A-Z]{3}\b/g) || []).find(function (c) {
    return SALARY_CURRENCY_CODES.includes(c);
  });
  if (code) return code;
  return (_SALARY_CURRENCY_SYMB = (_SALARY_CURRENCY_SYMB2 = SALARY_CURRENCY_SYMBOLS.find(function (entry) {
    return entry.re.test(text);
  })) === null || _SALARY_CURRENCY_SYMB2 === void 0 ? void 0 : _SALARY_CURRENCY_SYMB2.code) !== null && _SALARY_CURRENCY_SYMB !== void 0 ? _SALARY_CURRENCY_SYMB : null;
}
function detectSalaryPeriod(answer) {
  var text = String(answer !== null && answer !== void 0 ? answer : '');
  if (/\b(?:per\s*hour|hourly|an?\s*hour|\/\s*(?:hr|hour))\b/i.test(text)) return 'Hr.';
  if (/\b(?:per\s*(?:year|annum)|yearly|annual|annually|an?\s*year|\/\s*(?:yr|year))\b/i.test(text)) return 'Yr.';
  return null;
}
function fillSalaryOptionByPrefix(select, prefix) {
  if (!select || !prefix) return;
  var needle = prefix.toLowerCase();
  var option = Array.from(select.options).find(function (candidate) {
    return comparableText(candidate.textContent).startsWith(needle);
  });
  if (option) fillSelectInput(select, option.value);
}
function getSalaryGroups(root) {
  return Array.from(root.querySelectorAll('input[validatesalaryamnt="true"]')).filter(isEligibleControl).map(function (amountInput) {
    return {
      amountInput: amountInput,
      parts: getSalaryParts(amountInput)
    };
  }).filter(function (group) {
    return group.parts;
  });
}

// --- date-only composite (Month + Day + Year under one label) ---------------
//
// iCIMS renders a single date question as an `.iCIMS_Forms_DateOnlyField` holding a
// Month `<select>`, an optional Day `<select>`, and a Year `<input>`. Detected per
// control, that is THREE bogus questions ("Month", "Day", "Year"); it is one logical
// date field (answerType 'text' → backend date string; fieldKind 'icims-date' fills
// the parts). Section entry dates are handled by the section hierarchy, so this only
// covers standalone dates (Date Available, Graduation Date, Date of Birth, …).

function getDateOnlyGroups(root) {
  return Array.from(root.querySelectorAll('.iCIMS_Forms_DateOnlyField')).map(function (dateField) {
    var controls = [dateField.querySelector('select.iCIMS_Forms_MonthInput'), dateField.querySelector('select.iCIMS_Forms_DayInput'), dateField.querySelector('input.iCIMS_Forms_YearInput')].filter(Boolean);
    return {
      dateField: dateField,
      controls: controls,
      field: dateField.closest('.iCIMS_TableRow, fieldset') || dateField.parentElement || dateField
    };
  }).filter(function (group) {
    return group.controls.length > 0 && group.controls.some(function (control) {
      return isVisible(control);
    });
  });
}

// The question for a date-only field is its ROW label — never a Month/Day/Year
// sub-control label, which getFieldLabelText would otherwise pick up (the hidden 508 `<label>Month`).
function getDateFieldQuestion(field, monthSelect) {
  var _field$querySelector7;
  return firstText(
  // Packet/Forms-module: the visible leading <span> question ("Date Available to Start").
  getPacketQuestionLabel(monthSelect), getFieldLabelText(field), normalizeText(field === null || field === void 0 || (_field$querySelector7 = field.querySelector) === null || _field$querySelector7 === void 0 || (_field$querySelector7 = _field$querySelector7.call(field, 'label .iCIMS_LabelText, label')) === null || _field$querySelector7 === void 0 ? void 0 : _field$querySelector7.textContent), humanizeIdentifier(((monthSelect === null || monthSelect === void 0 ? void 0 : monthSelect.id) || (monthSelect === null || monthSelect === void 0 ? void 0 : monthSelect.name) || '').replace(/_?Month$/i, '')));
}

// --- résumé upload + parse handoff ------------------------------------------

function getResumeFileInput() {
  var _known$matches, _Array$from$find4;
  var known = document.getElementById('PortalProfileFields.Resume_File');
  if (known !== null && known !== void 0 && (_known$matches = known.matches) !== null && _known$matches !== void 0 && _known$matches.call(known, 'input[type="file"]')) return known;
  return (_Array$from$find4 = Array.from(document.querySelectorAll('input[type="file"]')).find(function (input) {
    var field = getQuestionField(input);
    return isResumeField(getControlQuestion(input, field), input);
  })) !== null && _Array$from$find4 !== void 0 ? _Array$from$find4 : null;
}
function hasPendingResumeUploadError() {
  var input = getResumeFileInput();
  return Boolean(input && !isFileAlreadyUploaded(input) && hasFileUploadError(input));
}

// True while iCIMS shows its "Parsing résumé…" indicator.
function isResumeParsing() {
  return Array.from(document.querySelectorAll('.iCIMS_loadingImageResumeText, #PortalProfileFields\\.Resume_Loading')).some(function (element) {
    var _element$closest;
    var target = ((_element$closest = element.closest) === null || _element$closest === void 0 ? void 0 : _element$closest.call(element, '#PortalProfileFields\\.Resume_Loading')) || element;
    var text = normalizeText(element.textContent || target.textContent);
    return /parsing resume/i.test(text) && isVisible(target);
  });
}

// Resolve when `condition()` is true, the page starts unloading, or `timeoutMs`
// elapses. Résumé parse can either re-render in place (condition) or full-reload
// (pagehide) — either way we stop waiting and let the run / continuation proceed.
function waitForConditionOrPageHide(condition, timeoutMs) {
  return new Promise(function (resolve) {
    var done = false;
    var timeoutId = null;
    var intervalId = null;
    var finish = function finish(result) {
      if (done) return;
      done = true;
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener('pagehide', onHide);
      document.removeEventListener('visibilitychange', onVisibility);
      resolve(result);
    };
    var onHide = function onHide() {
      return finish('pagehide');
    };
    var onVisibility = function onVisibility() {
      if (document.visibilityState === 'hidden') finish('pagehide');
    };
    window.addEventListener('pagehide', onHide, {
      once: true
    });
    document.addEventListener('visibilitychange', onVisibility);
    intervalId = setInterval(function () {
      if (condition !== null && condition !== void 0 && condition()) finish('condition');
    }, 100);
    timeoutId = setTimeout(function () {
      return finish('timeout');
    }, timeoutMs);
    if (condition !== null && condition !== void 0 && condition()) finish('condition');
  });
}

// After setting the résumé file, block until iCIMS finishes parsing (or reloads).
// This is what makes post-résumé fields wait for the prefill re-render.
function waitForResumeParseHandoff() {
  return _waitForResumeParseHandoff.apply(this, arguments);
} // Reload continuation (for tenants that navigate/reload after upload).
function _waitForResumeParseHandoff() {
  _waitForResumeParseHandoff = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee38() {
    var handoff, parsed;
    return autofill_regenerator().w(function (_context38) {
      while (1) switch (_context38.n) {
        case 0:
          _context38.n = 1;
          return waitForConditionOrPageHide(isResumeParsing, RESUME_HANDOFF_WAIT_MS);
        case 1:
          handoff = _context38.v;
          if (!(handoff === 'pagehide')) {
            _context38.n = 2;
            break;
          }
          return _context38.a(2);
        case 2:
          if (!isResumeParsing()) {
            _context38.n = 4;
            break;
          }
          _context38.n = 3;
          return waitForConditionOrPageHide(function () {
            return !isResumeParsing();
          }, RESUME_PARSE_WAIT_MS);
        case 3:
          parsed = _context38.v;
          if (!(parsed === 'pagehide')) {
            _context38.n = 4;
            break;
          }
          return _context38.a(2);
        case 4:
          clearResumeContinuation();
        case 5:
          return _context38.a(2);
      }
    }, _callee38);
  }));
  return _waitForResumeParseHandoff.apply(this, arguments);
}
function getResumeContinuation() {
  try {
    var raw = sessionStorage.getItem(RESUME_CONTINUATION_KEY);
    if (!raw) return null;
    var value = JSON.parse(raw);
    if (!(value !== null && value !== void 0 && value.createdAt) || Date.now() - value.createdAt > RESUME_CONTINUATION_TTL_MS) {
      sessionStorage.removeItem(RESUME_CONTINUATION_KEY);
      return null;
    }
    return value;
  } catch (_error) {
    try {
      sessionStorage.removeItem(RESUME_CONTINUATION_KEY);
    } catch (_e) {/* ignore */}
    return null;
  }
}
function markResumeContinuation() {
  try {
    sessionStorage.setItem(RESUME_CONTINUATION_KEY, JSON.stringify({
      createdAt: Date.now(),
      url: window.location.href
    }));
  } catch (_error) {/* best effort */}
}
function clearResumeContinuation() {
  try {
    sessionStorage.removeItem(RESUME_CONTINUATION_KEY);
  } catch (_error) {/* ignore */}
}
function sendRuntimeMessageNoResponse(message) {
  try {
    chrome.runtime.sendMessage(message, function () {
      void chrome.runtime.lastError;
    });
  } catch (_error) {/* runtime may be gone during teardown */}
}

// After a full-reload résumé upload, the fresh content script restarts idle (the
// in-memory run died with the old page). Once the reloaded form is parsed, ask the
// background to resume filling.
//
// We ONLY send `autofillForm` — never a hand-built `autofillQuestionsFound`. The
// shared runtime's own parser already posts the NORMALIZED question list (password
// fields appended, sticky ordinals, question-state synced) over its port as soon as
// detection runs (detection is URL-gated, not auto-start-gated, so it always runs on
// an apply page). Posting our own raw `detectAutofillFields()` list created a second,
// competing question source missing those fields — which is why e.g. a filled password
// never showed as filled in the panel. Detection here is only a readiness poll: wait
// until fields exist (and the port has had time to register them), then trigger the
// run through the normal startAutofill path so progress flows back to the panel.
function scheduleResumeContinuation() {
  if (!getResumeContinuation()) return;
  var startedAt = Date.now();
  var _step4 = function step() {
    if (!getResumeContinuation()) return;
    if (isResumeParsing()) {
      setTimeout(_step4, RESUME_CONTINUATION_POLL_MS);
      return;
    }
    if (hasPendingResumeUploadError()) {
      clearResumeContinuation();
      return;
    }
    if (detectAutofillFields().length > 0) {
      clearResumeContinuation();
      // Delay so the shared runtime's port-based detection has registered the
      // normalized questions in the background before onAutofillStart reads them.
      setTimeout(function () {
        sendRuntimeMessageNoResponse({
          message_type: 'autofillForm',
          source: 'icims_resume_upload_continuation'
        });
      }, RESUME_CONTINUATION_START_DELAY_MS);
      return;
    }
    if (Date.now() - startedAt >= RESUME_CONTINUATION_TIMEOUT_MS) {
      clearResumeContinuation();
      return;
    }
    setTimeout(_step4, RESUME_CONTINUATION_POLL_MS);
  };
  setTimeout(_step4, RESUME_CONTINUATION_POLL_MS);
}

// --- address-verification override checkbox ----------------------------------
//
// Clicking Next runs iCIMS's server-side address validation; when the address can't be verified the
// step bounces back with an inline override checkbox ("Error: The address you provided was not able
// to be verified… use this address anyway"). The address IS the profile's address, so the box must
// simply always be checked — it is modeled as a dedicated always-'Yes' question (answerType
// 'address_verify', resolved locally) rather than an AI-answered yes/no the engine could decline.
// Detected as its OWN pass in detectAutofillFields: the checkbox renders inside the Address
// collection container, whose controls the per-field pass excludes (the section hierarchy owns
// them), and the hierarchy's fixed mappings don't know it either. It only ever appears after the
// step's Next click bounced — i.e. after the original run completed — so the autoapply background
// refires a top-up run on detection and re-clicks Next (maybeAutofillVerificationField).

function getAddressVerifyCheckboxes(root) {
  return Array.from(root.querySelectorAll('input[type="checkbox"]')).filter(function (checkbox) {
    var _getQuestionField;
    if (!isEligibleControl(checkbox)) return false;
    // The bounce wording can sit in the linked label, an aria description, or as bare row text —
    // concatenate every candidate (rather than first-non-empty) so a short label ("Use this
    // address") still pairs with the fuller error text around it.
    var context = [getLinkedLabelText(checkbox), getInputLabelText(checkbox), getAriaLabelledText(checkbox), checkbox.getAttribute('aria-label'), getDescribedByText(checkbox), normalizeText((_getQuestionField = getQuestionField(checkbox)) === null || _getQuestionField === void 0 ? void 0 : _getQuestionField.textContent)].filter(Boolean).join(' ');
    return ADDRESS_VERIFY_TEXT_PATTERN.test(context);
  });
}

// --- detection ---------------------------------------------------------------

function detectAutofillFields() {
  // Auth0 Universal Login (login.icims.com) is a distinct host/markup.
  if (isAuth0LoginPage()) return detectAuth0LoginFields();
  var root = getIcimsRoot();
  if (!root) return [];
  var questions = [];
  var usedIds = new Set();
  var seenChoiceGroups = new Set();

  // Structured collection sections first; their controls are then excluded from the per-field
  // pass. Education / Work / Address / Phones all emit the shared root → group → leaf hierarchy,
  // filled from the profile (getProfileSectionData). Works for both the Candidate-Portal
  // `.iCIMS_CollectionContainer` and the Forms-module MultiGroup structures.
  var sectionGroups = getStructuredSectionGroups(root);
  var consumedSectionKeys = new Set(sectionGroups.map(function (group) {
    return group.key;
  }));
  var _iterator4 = autofill_createForOfIteratorHelper(sectionGroups),
    _step5;
  try {
    for (_iterator4.s(); !(_step5 = _iterator4.n()).done;) {
      var group = _step5.value;
      var section = getHierarchySectionForKind(group.kind);
      if (section) questions.push.apply(questions, autofill_toConsumableArray(collectSectionHierarchyQuestions(section)));
    }

    // Address-verification override checkboxes next (always-'Yes'; see getAddressVerifyCheckboxes).
    // Own pass: inside the consumed Address section the per-field pass would never reach them.
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  var consumedVerifyControls = new Set();
  var _iterator5 = autofill_createForOfIteratorHelper(getAddressVerifyCheckboxes(root)),
    _step6;
  try {
    for (_iterator5.s(); !(_step6 = _iterator5.n()).done;) {
      var _field$querySelector8;
      var checkbox = _step6.value;
      var field = getQuestionField(checkbox);
      // Real markup: the wrapping <label> text is just "Yes" — the full sentence lives in the
      // checkbox's aria-label and the .iCIMS_ErrorMessage row text, so read those for the question.
      var _question2 = firstText(checkbox.getAttribute('aria-label'), field === null || field === void 0 || (_field$querySelector8 = field.querySelector) === null || _field$querySelector8 === void 0 || (_field$querySelector8 = _field$querySelector8.call(field, '.iCIMS_ErrorMessage, .iCIMS_Message')) === null || _field$querySelector8 === void 0 ? void 0 : _field$querySelector8.textContent, getControlQuestion(checkbox, field)) || 'Use this address anyway?';
      // Key on the checkbox ID ("address_67390", stable per address instance) — its NAME is always
      // the shared "override", so deriveFieldId's name-first order would collide across instances.
      var fieldId = uniqueFieldId(checkbox.id || checkbox.name || slugify(_question2), usedIds);
      if (!field || !fieldId) continue;
      consumedVerifyControls.add(checkbox);
      questions.push({
        question: _question2,
        fieldId: fieldId,
        answerType: ADDRESS_VERIFY_ANSWER_TYPE,
        fieldKind: 'checkbox',
        dependsOnPrevious: false,
        field: field,
        options: ['Yes'],
        constraints: buildConstraints(field, _question2, checkbox)
      });
    }

    // Salary composites next (one logical field per row; exclude the 3 controls).
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  var consumedSalaryControls = new Set();
  var _iterator6 = autofill_createForOfIteratorHelper(getSalaryGroups(root)),
    _step7;
  try {
    for (_iterator6.s(); !(_step7 = _iterator6.n()).done;) {
      var _step7$value = _step7.value,
        amountInput = _step7$value.amountInput,
        parts = _step7$value.parts;
      if (isControlInConsumedSection(amountInput, consumedSectionKeys)) continue;
      var _field = getQuestionField(amountInput);
      var _question3 = getSalaryQuestion(amountInput, _field);
      if (!_field || !_question3) continue;
      var _fieldId2 = uniqueFieldId(deriveFieldId(_question3, amountInput), usedIds);
      if (!_fieldId2) continue;
      consumedSalaryControls.add(parts.amount);
      if (parts.currency) consumedSalaryControls.add(parts.currency);
      if (parts.timeframe) consumedSalaryControls.add(parts.timeframe);
      questions.push({
        question: _question3,
        fieldId: _fieldId2,
        answerType: 'text',
        fieldKind: SALARY_FIELD_KIND,
        dependsOnPrevious: isDependentQuestion(_question3),
        field: _field,
        options: [],
        constraints: buildConstraints(_field, _question3, amountInput)
      });
    }

    // Date-only composites next (Month + Day + Year → one logical date field; exclude
    // their sub-controls so they aren't detected as three separate "Month/Day/Year"
    // questions). Section entry dates are already owned by the hierarchy above.
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  var consumedDateControls = new Set();
  var _iterator7 = autofill_createForOfIteratorHelper(getDateOnlyGroups(root)),
    _step8;
  try {
    for (_iterator7.s(); !(_step8 = _iterator7.n()).done;) {
      var _dateField$querySelec, _monthSelect$matches;
      var _step8$value = _step8.value,
        controls = _step8$value.controls,
        _field2 = _step8$value.field,
        dateField = _step8$value.dateField;
      if (isControlInConsumedSection(dateField, consumedSectionKeys)) continue;
      if (controls.some(function (control) {
        return consumedSalaryControls.has(control);
      })) continue;
      // Packet self-id "signature date" is pre-filled with today by iCIMS — consume its parts so the
      // per-field pass ignores them, but don't emit a fill field (we would overwrite the correct date).
      if (isIcimsPacketFormPage() && normalizeText(dateField === null || dateField === void 0 || (_dateField$querySelec = dateField.querySelector) === null || _dateField$querySelec === void 0 || (_dateField$querySelec = _dateField$querySelec.call(dateField, 'input.iCIMS_Forms_YearInput')) === null || _dateField$querySelec === void 0 ? void 0 : _dateField$querySelec.value)) {
        controls.forEach(function (control) {
          return consumedDateControls.add(control);
        });
        continue;
      }
      var monthSelect = controls.find(function (control) {
        var _control$matches2;
        return (_control$matches2 = control.matches) === null || _control$matches2 === void 0 ? void 0 : _control$matches2.call(control, 'select.iCIMS_Forms_MonthInput');
      }) || controls[0];
      var _question4 = getDateFieldQuestion(_field2, monthSelect);
      if (!_field2 || !_question4) continue;
      var _fieldId3 = uniqueFieldId(deriveFieldId(_question4, monthSelect) || slugify(_question4), usedIds);
      if (!_fieldId3) continue;
      controls.forEach(function (control) {
        return consumedDateControls.add(control);
      });
      // Tell the backend this is a date so it answers in a parseable format (a plain
      // 'text' question yields prose like "I can start immediately", which can't fill
      // the Month/Year selects). The format matches the parts iCIMS actually renders.
      var hasDay = controls.some(function (control) {
        var _control$matches3;
        return (_control$matches3 = control.matches) === null || _control$matches3 === void 0 ? void 0 : _control$matches3.call(control, 'select.iCIMS_Forms_DayInput');
      });
      var hasMonth = Boolean(monthSelect === null || monthSelect === void 0 || (_monthSelect$matches = monthSelect.matches) === null || _monthSelect$matches === void 0 ? void 0 : _monthSelect$matches.call(monthSelect, 'select.iCIMS_Forms_MonthInput'));
      var dateFormat = hasDay ? 'MM/DD/YYYY' : hasMonth ? 'MM/YYYY' : 'YYYY';
      questions.push({
        question: _question4,
        fieldId: _fieldId3,
        answerType: 'text',
        fieldKind: 'icims-date',
        dependsOnPrevious: isDependentQuestion(_question4),
        field: _field2,
        options: [],
        constraints: autofill_objectSpread(autofill_objectSpread({}, buildConstraints(_field2, _question4, monthSelect)), {}, {
          inputType: 'date',
          format: dateFormat
        })
      });
    }

    // Per-field pass.
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  var _iterator8 = autofill_createForOfIteratorHelper(getLogicalControls(root)),
    _step9;
  try {
    for (_iterator8.s(); !(_step9 = _iterator8.n()).done;) {
      var _control$getAttribute11;
      var control = _step9.value;
      if (isControlInConsumedSection(control, consumedSectionKeys)) continue;
      if (consumedVerifyControls.has(control)) continue;
      if (consumedSalaryControls.has(control)) continue;
      if (consumedDateControls.has(control)) continue;
      var groupKey = getChoiceGroupKey(control);
      if (groupKey && seenChoiceGroups.has(groupKey)) continue;
      if (groupKey) seenChoiceGroups.add(groupKey);
      var _field3 = getQuestionField(control);
      var _question5 = getControlQuestion(control, _field3);
      if (!_field3 || !_question5) continue;

      // Packet self-id form: skip controls iCIMS already populated (signature Name/Date) so we neither
      // clobber them nor emit a no-op field; empty required questions (Veteran radio, signature box) fill.
      if (isIcimsPacketFormPage() && isPacketFieldAnswered(_field3)) continue;
      var metadata = getFieldMetadata(_question5, _field3, control);
      if (!metadata.answerType || !metadata.fieldKind) continue;
      var _fieldId4 = uniqueFieldId(deriveFieldId(_question5, control), usedIds);
      if (!_fieldId4) continue;
      questions.push({
        question: _question5,
        fieldId: _fieldId4,
        answerType: metadata.answerType,
        fieldKind: metadata.fieldKind,
        dependsOnPrevious: metadata.answerType === 'password-confirm' || Boolean((_control$getAttribute11 = control.getAttribute) === null || _control$getAttribute11 === void 0 ? void 0 : _control$getAttribute11.call(control, 'data-ddd-parent-link')) || isDependentQuestion(_question5),
        field: _field3,
        options: metadata.options,
        constraints: metadata.constraints
      });
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  var ordered = questions.sort(function (a, b) {
    return compareDocOrder(a.field, b.field);
  });

  // Résumé ordering: independent fields after the résumé wait for it (upload → parse
  // → prefill re-render) before filling. Gate on the résumé field id directly so they
  // fill in parallel once parse settles, rather than serializing.
  //
  // Skipped (must keep their own gating, which transitively waits for the résumé via a
  // preceding field anyway — never overwrite it with the résumé gate):
  //  - section-hierarchy nodes (roots already set waitForFieldId: RESUME_FIELD_ID;
  //    groups/leaves gate via the pass + their group).
  //  - dependent fields (`dependsOnPrevious`) — a conditional like "Please specify
  //    further" must wait for and read its PARENT answer ("How did you hear about
  //    us?"). `waitForFieldId` overrides `dependsOnPrevious` in the scheduler, so
  //    stamping the résumé here would make it fill off the résumé, out of order and
  //    without the parent's answer as context.
  var hasResume = ordered.some(function (question) {
    return question.fieldId === RESUME_FIELD_ID;
  });
  if (hasResume) {
    var afterResume = false;
    var _iterator9 = autofill_createForOfIteratorHelper(ordered),
      _step0;
    try {
      for (_iterator9.s(); !(_step0 = _iterator9.n()).done;) {
        var question = _step0.value;
        if (question.fieldId === RESUME_FIELD_ID) {
          afterResume = true;
          continue;
        }
        if (afterResume && !question.waitForFieldId && !question.parentFieldId && !question.dependsOnPrevious) {
          question.waitForFieldId = RESUME_FIELD_ID;
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
  }

  // Append the login hCaptcha field when actually blocking (auto-apply build only;
  // buildCaptchaFieldEntry returns null otherwise). Solved server-side via 2captcha.
  var captchaEntry = buildCaptchaFieldEntry(root || document);
  return captchaEntry ? [].concat(autofill_toConsumableArray(ordered), [captchaEntry]) : ordered;
}

// --- autonext / submit classification ---------------------------------------

function getControlLabel(control) {
  var _control$getAttribute12, _control$getAttribute13;
  if (!control) return '';
  return normalizeText(control.value || control.textContent || ((_control$getAttribute12 = control.getAttribute) === null || _control$getAttribute12 === void 0 ? void 0 : _control$getAttribute12.call(control, 'aria-label')) || ((_control$getAttribute13 = control.getAttribute) === null || _control$getAttribute13 === void 0 ? void 0 : _control$getAttribute13.call(control, 'title')));
}
function getApplyAnchor() {
  var _Array$from$find5;
  return (_Array$from$find5 = Array.from(document.querySelectorAll(APPLY_ANCHOR_SELECTOR)).find(function (anchor) {
    return isVisible(anchor);
  })) !== null && _Array$from$find5 !== void 0 ? _Array$from$find5 : null;
}

// The tenant login "Next" submit; null while disabled (e.g. GDPR consent unchecked)
// so advanceFlow waits for the fill pass to enable it.
function getLoginAdvanceButton() {
  var _loginForm$closest;
  var loginForm = getLoginForm();
  if (!loginForm) return null;
  var root = loginForm.matches('form') ? loginForm : (_loginForm$closest = loginForm.closest('form')) !== null && _loginForm$closest !== void 0 ? _loginForm$closest : document;
  var candidate = document.querySelector(LOGIN_ADVANCE_SELECTOR) || root.querySelector('input[type="submit"], button[type="submit"], button:not([type])');
  if (!candidate || !isVisible(candidate)) return null;
  if (candidate.disabled || candidate.getAttribute('aria-disabled') === 'true') return null;
  return candidate;
}
function getApplicationActionControls() {
  var root = getIcimsRoot() || document;
  return Array.from(root.querySelectorAll('input[type="submit"], input[type="button"], button, a.iCIMS_Button, a[role="button"], a.iCIMS_Anchor')).filter(function (control) {
    return control && isVisible(control) && !control.disabled && control.getAttribute('aria-disabled') !== 'true';
  });
}

// The Candidate Portal step indicator: a `.iCIMS_Steps` list of `<li>` steps (one per step, in
// order), the active one carrying `.iCIMS_Steps_Current` (e.g. profile → questions → EEO → job
// questions → portal forms → assessments). Read from the document (it lives in the same in_iframe
// content document as the form, but outside getIcimsRoot's form/table scope).
function getIcimsStepItems() {
  var steps = document.querySelector('.iCIMS_Steps');
  return steps ? Array.from(steps.querySelectorAll('li')) : [];
}

// True when the current step is the LAST step (so a "Submit" here files the application), or when
// there is no step indicator at all (single-step application — its lone "Submit" is terminal). On any
// EARLIER step a "Submit" merely saves + advances, so it must NOT be treated as the terminal submit.
function isOnFinalIcimsStep() {
  // A packet self-id sub-form's "Submit" (icims_submit) saves that sub-form and returns to the flow —
  // it never files the application (that happens later on the careersite), so it is always an advance.
  if (isIcimsPacketFormPage()) return false;
  var items = getIcimsStepItems();
  if (items.length === 0) return true;
  var currentIndex = items.findIndex(function (item) {
    return item.classList.contains('iCIMS_Steps_Current');
  });
  if (currentIndex === -1) return true;
  return currentIndex === items.length - 1;
}

// The application's terminal Submit (gated; NEVER auto-clicked). Absent in login, and — because
// iCIMS reuses the "Submit" label on every step's advance button — only recognised on the LAST step.
function getFinalSubmitButton() {
  var _getApplicationAction;
  if (isLoginContext() || !getIcimsRoot()) return null;
  if (!isOnFinalIcimsStep()) return null;
  return (_getApplicationAction = getApplicationActionControls().find(function (control) {
    return FINAL_SUBMIT_LABEL_PATTERN.test(getControlLabel(control));
  })) !== null && _getApplicationAction !== void 0 ? _getApplicationAction : null;
}
function getApplicationAdvanceButton() {
  if (isLoginContext() || !getIcimsRoot()) return null;
  var controls = getApplicationActionControls();
  var advance = controls.find(function (control) {
    return ADVANCE_LABEL_PATTERN.test(getControlLabel(control));
  });
  if (advance) return advance;
  // On a non-final step iCIMS labels the step-advance control "Submit" (Candidate Questions, EEO, …):
  // it saves the step and moves to the next one — it does NOT file the application. Treat it as an
  // advance so autonext walks past it; the terminal-submit guard only fires on the last step above.
  if (!isOnFinalIcimsStep()) {
    var _controls$find;
    return (_controls$find = controls.find(function (control) {
      return FINAL_SUBMIT_LABEL_PATTERN.test(getControlLabel(control));
    })) !== null && _controls$find !== void 0 ? _controls$find : null;
  }
  return null;
}

// The single forward control for the current step (posting apply → login submit →
// Auth0 continue → application Next).
function getAdvanceButton() {
  return getApplyAnchor() || getAuth0AdvanceButton() || getLoginAdvanceButton() || getApplicationAdvanceButton();
}
function advanceFlow() {
  if (getFinalSubmitButton()) return false; // never auto-click the gated final submit
  var control = getAdvanceButton();
  if (!control) return false;
  pointerClick(control);
  return true;
}
function isAutofillAvailable(_ref5) {
  var fieldCount = _ref5.fieldCount,
    submitButton = _ref5.submitButton;
  if (fieldCount > 0) return true;
  if (submitButton !== null && submitButton !== void 0 && submitButton.detected) return true;
  return Boolean(getApplyAnchor() || getApplicationAdvanceButton() || getAuth0AdvanceButton());
}
function detectSubmitButton() {
  var submitButton = getFinalSubmitButton();
  if (!submitButton) return {
    detected: false
  };
  return {
    detected: true,
    label: getControlLabel(submitButton) || 'Submit',
    disabled: Boolean(submitButton.disabled || submitButton.getAttribute('aria-disabled') === 'true')
  };
}

// --- answer-type handlers ----------------------------------------------------

function createBackendAnswerHandler(answerType) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref6$isMetadataReady = _ref6.isMetadataReady,
    isMetadataReady = _ref6$isMetadataReady === void 0 ? function () {
      return true;
    } : _ref6$isMetadataReady,
    _ref6$fetchMissingMet = _ref6.fetchMissingMetadata,
    fetchMissingMetadata = _ref6$fetchMissingMet === void 0 ? (/*#__PURE__*/function () {
      var _ref7 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee2(metadata) {
        return autofill_regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, metadata);
          }
        }, _callee2);
      }));
      return function (_x25) {
        return _ref7.apply(this, arguments);
      };
    }()) : _ref6$fetchMissingMet;
  return {
    isMetadataReady: isMetadataReady,
    fetchMissingMetadata: fetchMissingMetadata,
    generateAnswer: function generateAnswer(question, metadata, fieldId) {
      var _metadata$options, _metadata$referenceQa;
      return getAnswer(question, answerType, (_metadata$options = metadata.options) !== null && _metadata$options !== void 0 ? _metadata$options : [], metadata.constraints, fieldId, true, (_metadata$referenceQa = metadata.referenceQaPairs) !== null && _metadata$referenceQa !== void 0 ? _metadata$referenceQa : []);
    }
  };
}
function isAffirmativeAnswer(answer) {
  if (typeof answer === 'boolean') return answer;
  return /^(?:1|true|yes|y|acknowledged|agree|agreed|checked)$/i.test(normalizeText(answer));
}
function getTenantPasswordValue() {
  var _document$getElementB5, _document$querySelect;
  return ((_document$getElementB5 = document.getElementById('PersonProfileFields.Password')) === null || _document$getElementB5 === void 0 ? void 0 : _document$getElementB5.value) || ((_document$querySelect = document.querySelector('[name="PersonProfileFields.Password"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value) || '';
}
var ANSWER_TYPE_HANDLERS = new Map([['text', createBackendAnswerHandler('text')],
// iCIMS custom searchable <select>. Probe the open dropdown once: a SEARCHABLE typeahead
// (server-filtered, huge — country/state) falls back to a free-text answer the fill handler
// types + filters in the DOM; a FIXED list is read in full (scrolling to load lazy rows) and
// the backend picks directly from it (single-select). Mirrors oraclecloud's cx-select.
['icims-dropdown', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options);
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee3(metadata, _fieldId, _question, field) {
      var _ref8,
        _ref8$shouldAbort,
        shouldAbort,
        _yield$probeDropdown,
        searchable,
        options,
        _args3 = arguments;
      return autofill_regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _ref8 = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : {}, _ref8$shouldAbort = _ref8.shouldAbort, shouldAbort = _ref8$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref8$shouldAbort;
            _context3.n = 1;
            return probeDropdown(field, shouldAbort);
          case 1:
            _yield$probeDropdown = _context3.v;
            searchable = _yield$probeDropdown.searchable;
            options = _yield$probeDropdown.options;
            return _context3.a(2, autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
              options: options,
              dropdownSearchable: searchable
            }));
        }
      }, _callee3);
    }));
    function fetchMissingMetadata(_x26, _x27, _x28, _x29) {
      return _fetchMissingMetadata.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee4(question, metadata, fieldId) {
      var _metadata$options2, _metadata$referenceQa2;
      var options, useList, type, answer;
      return autofill_regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            options = (_metadata$options2 = metadata.options) !== null && _metadata$options2 !== void 0 ? _metadata$options2 : [];
            useList = !metadata.dropdownSearchable && options.length > 0;
            type = useList ? 'single-select' : 'text';
            _context4.n = 1;
            return getAnswer(question, type, useList ? options : [], metadata.constraints, fieldId, true, (_metadata$referenceQa2 = metadata.referenceQaPairs) !== null && _metadata$referenceQa2 !== void 0 ? _metadata$referenceQa2 : []);
          case 1:
            answer = _context4.v;
            return _context4.a(2, useList ? resolveOptionByIndex(answer, options) : answer);
        }
      }, _callee4);
    }));
    function generateAnswer(_x30, _x31, _x32) {
      return _generateAnswer.apply(this, arguments);
    }
    return generateAnswer;
  }()
}], ['password-confirm', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee5(metadata) {
      return autofill_regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            return _context5.a(2, metadata);
        }
      }, _callee5);
    }));
    function fetchMissingMetadata(_x33) {
      return _fetchMissingMetadata2.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee6(question, metadata, fieldId) {
      var _metadata$referenceQa3;
      var existing;
      return autofill_regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            existing = getTenantPasswordValue();
            if (!existing) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, existing);
          case 1:
            return _context6.a(2, getAnswer(question, 'password', [], metadata.constraints, fieldId, true, (_metadata$referenceQa3 = metadata.referenceQaPairs) !== null && _metadata$referenceQa3 !== void 0 ? _metadata$referenceQa3 : []));
        }
      }, _callee6);
    }));
    function generateAnswer(_x34, _x35, _x36) {
      return _generateAnswer2.apply(this, arguments);
    }
    return generateAnswer;
  }()
}], ['single-select', createBackendAnswerHandler('single-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options);
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee7(metadata, _fieldId, _question, field) {
      var context,
        options,
        _args7 = arguments;
      return autofill_regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            context = _args7.length > 4 && _args7[4] !== undefined ? _args7[4] : {};
            _context7.n = 1;
            return getAsyncOptions(field, context);
          case 1:
            options = _context7.v;
            return _context7.a(2, options.length > 0 ? autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
              options: options
            }) : metadata);
        }
      }, _callee7);
    }));
    function fetchMissingMetadata(_x37, _x38, _x39, _x40) {
      return _fetchMissingMetadata3.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }()
})], ['multi-select', createBackendAnswerHandler('multi-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options);
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee8(metadata, _fieldId, _question, field) {
      var context,
        options,
        _args8 = arguments;
      return autofill_regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            context = _args8.length > 4 && _args8[4] !== undefined ? _args8[4] : {};
            _context8.n = 1;
            return getAsyncOptions(field, context);
          case 1:
            options = _context8.v;
            return _context8.a(2, options.length > 0 ? autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
              options: options
            }) : metadata);
        }
      }, _callee8);
    }));
    function fetchMissingMetadata(_x41, _x42, _x43, _x44) {
      return _fetchMissingMetadata4.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }()
})], ['resume', {
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
    function fetchMissingMetadata(_x45) {
      return _fetchMissingMetadata5.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee0() {
      var _yield$getResumeForAu, _t, _t2, _t3, _t4;
      return autofill_regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            _context0.n = 1;
            return getResumeForAutofill();
          case 1:
            _t2 = _yield$getResumeForAu = _context0.v;
            _t = _t2 !== null;
            if (!_t) {
              _context0.n = 2;
              break;
            }
            _t = _yield$getResumeForAu !== void 0;
          case 2:
            if (!_t) {
              _context0.n = 3;
              break;
            }
            _t3 = _yield$getResumeForAu;
            _context0.n = 4;
            break;
          case 3:
            _t3 = {
              type: 'skip'
            };
          case 4:
            return _context0.a(2, _t3);
          case 5:
            _context0.p = 5;
            _t4 = _context0.v;
            return _context0.a(2, {
              type: 'skip'
            });
        }
      }, _callee0, null, [[0, 5]]);
    }));
    function generateAnswer() {
      return _generateAnswer3.apply(this, arguments);
    }
    return generateAnswer;
  }()
}], ['cover_letter', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata6 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee1(metadata) {
      return autofill_regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            return _context1.a(2, metadata);
        }
      }, _callee1);
    }));
    function fetchMissingMetadata(_x46) {
      return _fetchMissingMetadata6.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee10(_question, metadata) {
      var _yield$getCoverLetter, _t5, _t6, _t7, _t8;
      return autofill_regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            _context10.p = 0;
            _context10.n = 1;
            return getCoverLetterForAutofill(metadata.constraints);
          case 1:
            _t6 = _yield$getCoverLetter = _context10.v;
            _t5 = _t6 !== null;
            if (!_t5) {
              _context10.n = 2;
              break;
            }
            _t5 = _yield$getCoverLetter !== void 0;
          case 2:
            if (!_t5) {
              _context10.n = 3;
              break;
            }
            _t7 = _yield$getCoverLetter;
            _context10.n = 4;
            break;
          case 3:
            _t7 = {
              type: 'skip'
            };
          case 4:
            return _context10.a(2, _t7);
          case 5:
            _context10.p = 5;
            _t8 = _context10.v;
            return _context10.a(2, {
              type: 'skip'
            });
        }
      }, _callee10, null, [[0, 5]]);
    }));
    function generateAnswer(_x47, _x48) {
      return _generateAnswer4.apply(this, arguments);
    }
    return generateAnswer;
  }()
}],
// Address-verification override: deterministic and local — the box must always be checked (the
// address is the profile's own; see getAddressVerifyCheckboxes). Never asks the backend, so the
// engine can't be talked into leaving it unchecked.
[ADDRESS_VERIFY_ANSWER_TYPE, {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata7 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee11(metadata) {
      return autofill_regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            return _context11.a(2, metadata);
        }
      }, _callee11);
    }));
    function fetchMissingMetadata(_x49) {
      return _fetchMissingMetadata7.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer5 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee12() {
      return autofill_regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            return _context12.a(2, 'Yes');
        }
      }, _callee12);
    }));
    function generateAnswer() {
      return _generateAnswer5.apply(this, arguments);
    }
    return generateAnswer;
  }()
}], [CAPTCHA_ANSWER_TYPE, createCaptchaAnswerTypeHandler()]]);

// --- field-kind handlers -----------------------------------------------------

var FIELD_KIND_HANDLERS = new Map([['text', (/*#__PURE__*/function () {
  var _ref9 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee13(_fieldId, _question, answer, field) {
    var input;
    return autofill_regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          input = autofill_getTextInput(field);
          if (input) fillTextInput(input, answer);
        case 1:
          return _context13.a(2);
      }
    }, _callee13);
  }));
  return function (_x50, _x51, _x52, _x53) {
    return _ref9.apply(this, arguments);
  };
}())], ['textarea', (/*#__PURE__*/function () {
  var _ref0 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee14(_fieldId, _question, answer, field) {
    var textarea;
    return autofill_regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          textarea = getTextarea(field);
          if (textarea) fillTextInput(textarea, answer);
        case 1:
          return _context14.a(2);
      }
    }, _callee14);
  }));
  return function (_x54, _x55, _x56, _x57) {
    return _ref0.apply(this, arguments);
  };
}())], ['select-native', (/*#__PURE__*/function () {
  var _ref1 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee15(_fieldId, _question, answer, field) {
    var select, option;
    return autofill_regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          select = getNativeSelect(field);
          if (select) {
            _context15.n = 1;
            break;
          }
          return _context15.a(2);
        case 1:
          _context15.n = 2;
          return getBestMatchingOption(answer, getSelectOptionEntries(field));
        case 2:
          option = _context15.v;
          if ((option === null || option === void 0 ? void 0 : option.value) != null) fillSelectInput(select, option.value);
        case 3:
          return _context15.a(2);
      }
    }, _callee15);
  }));
  return function (_x58, _x59, _x60, _x61) {
    return _ref1.apply(this, arguments);
  };
}())], ['icims-dropdown', (/*#__PURE__*/function () {
  var _ref10 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee16(_fieldId, _question, answer, field) {
    var _ref11,
      _ref11$shouldAbort,
      shouldAbort,
      select,
      options,
      option,
      _args16 = arguments,
      _t9;
    return autofill_regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          _ref11 = _args16.length > 4 && _args16[4] !== undefined ? _args16[4] : {}, _ref11$shouldAbort = _ref11.shouldAbort, shouldAbort = _ref11$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref11$shouldAbort;
          select = getNativeSelect(field);
          if (!(!select || shouldAbort())) {
            _context16.n = 1;
            break;
          }
          return _context16.a(2);
        case 1:
          _context16.n = 2;
          return openDropdown(select, shouldAbort);
        case 2:
          if (!shouldAbort()) {
            _context16.n = 3;
            break;
          }
          return _context16.a(2);
        case 3:
          if (!isDropdownSearchable(select)) {
            _context16.n = 5;
            break;
          }
          _context16.n = 4;
          return readDropdownOptions(field, {
            shouldAbort: shouldAbort,
            open: false,
            searchText: answer
          });
        case 4:
          _t9 = _context16.v;
          _context16.n = 7;
          break;
        case 5:
          _context16.n = 6;
          return readAllDropdownOptions(field, select, shouldAbort);
        case 6:
          _t9 = _context16.v;
        case 7:
          options = _t9;
          if (!shouldAbort()) {
            _context16.n = 8;
            break;
          }
          return _context16.a(2);
        case 8:
          _context16.n = 9;
          return getBestMatchingOption(answer, options);
        case 9:
          option = _context16.v;
          if (!(shouldAbort() || !option)) {
            _context16.n = 10;
            break;
          }
          return _context16.a(2);
        case 10:
          _context16.n = 11;
          return selectDropdownOption(field, select, option, shouldAbort);
        case 11:
          return _context16.a(2);
      }
    }, _callee16);
  }));
  return function (_x62, _x63, _x64, _x65) {
    return _ref10.apply(this, arguments);
  };
}())], ['icims-combobox', (/*#__PURE__*/function () {
  var _ref12 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee17(_fieldId, _question, answer, field) {
    var _ref13,
      _ref13$shouldAbort,
      shouldAbort,
      control,
      widget,
      options,
      option,
      _args17 = arguments;
    return autofill_regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          _ref13 = _args17.length > 4 && _args17[4] !== undefined ? _args17[4] : {}, _ref13$shouldAbort = _ref13.shouldAbort, shouldAbort = _ref13$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref13$shouldAbort;
          control = getComboboxControl(field);
          widget = getComboboxWidget(control);
          if (!(!widget || shouldAbort())) {
            _context17.n = 1;
            break;
          }
          return _context17.a(2);
        case 1:
          options = getComboboxOptionEntries(widget);
          if (!(options.length === 0)) {
            _context17.n = 5;
            break;
          }
          _context17.n = 2;
          return openCombobox(widget, shouldAbort);
        case 2:
          if (!shouldAbort()) {
            _context17.n = 3;
            break;
          }
          return _context17.a(2);
        case 3:
          options = getComboboxOptionEntries(widget);
          _context17.n = 4;
          return closeCombobox(widget, shouldAbort);
        case 4:
          if (!shouldAbort()) {
            _context17.n = 5;
            break;
          }
          return _context17.a(2);
        case 5:
          if (!(options.length === 0)) {
            _context17.n = 6;
            break;
          }
          return _context17.a(2);
        case 6:
          _context17.n = 7;
          return getBestMatchingOption(answer, options);
        case 7:
          option = _context17.v;
          if (!(shouldAbort() || !option)) {
            _context17.n = 8;
            break;
          }
          return _context17.a(2);
        case 8:
          _context17.n = 9;
          return openCombobox(widget, shouldAbort);
        case 9:
          if (!shouldAbort()) {
            _context17.n = 10;
            break;
          }
          return _context17.a(2);
        case 10:
          _context17.n = 11;
          return selectComboboxOption(widget, option, shouldAbort);
        case 11:
          return _context17.a(2);
      }
    }, _callee17);
  }));
  return function (_x66, _x67, _x68, _x69) {
    return _ref12.apply(this, arguments);
  };
}())], ['checkbox', (/*#__PURE__*/function () {
  var _ref14 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee18(_fieldId, question, answer, field) {
    var checkboxes, selections, _iterator0, _step1, checkbox, label, shouldCheck;
    return autofill_regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          checkboxes = getCheckboxInputs(field);
          selections = Array.isArray(answer) ? answer.map(function (value) {
            return comparableText(value);
          }) : typeof answer === 'boolean' ? [] : [comparableText(answer)];
          _iterator0 = autofill_createForOfIteratorHelper(checkboxes);
          try {
            for (_iterator0.s(); !(_step1 = _iterator0.n()).done;) {
              checkbox = _step1.value;
              label = getChoiceLabel(checkbox, question);
              shouldCheck = checkboxes.length === 1 ? isAffirmativeAnswer(answer) || selections.includes(comparableText(label)) : selections.includes(comparableText(label)) || selections.includes(comparableText(checkbox.value));
              if (checkbox.checked !== shouldCheck) checkbox.click();
            }
          } catch (err) {
            _iterator0.e(err);
          } finally {
            _iterator0.f();
          }
        case 1:
          return _context18.a(2);
      }
    }, _callee18);
  }));
  return function (_x70, _x71, _x72, _x73) {
    return _ref14.apply(this, arguments);
  };
}())], ['radio', (/*#__PURE__*/function () {
  var _ref15 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee19(_fieldId, question, answer, field) {
    var options, option;
    return autofill_regenerator().w(function (_context19) {
      while (1) switch (_context19.n) {
        case 0:
          options = getRadioInputs(field).map(function (input) {
            var _input$labels2;
            return {
              input: input,
              label: ((_input$labels2 = input.labels) === null || _input$labels2 === void 0 ? void 0 : _input$labels2[0]) || null,
              text: getChoiceLabel(input, question)
            };
          }).filter(function (option) {
            return option.text;
          });
          _context19.n = 1;
          return getBestMatchingOption(answer, options);
        case 1:
          option = _context19.v;
          if (option) {
            _context19.n = 2;
            break;
          }
          return _context19.a(2);
        case 2:
          if (!option.label) {
            _context19.n = 3;
            break;
          }
          option.label.click();
          return _context19.a(2);
        case 3:
          if (!option.input.checked) option.input.click();
        case 4:
          return _context19.a(2);
      }
    }, _callee19);
  }));
  return function (_x74, _x75, _x76, _x77) {
    return _ref15.apply(this, arguments);
  };
}())], ['resume', (/*#__PURE__*/function () {
  var _ref16 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee20(_fieldId, _question, answer, field) {
    var _ref17,
      _ref17$shouldAbort,
      shouldAbort,
      input,
      _args20 = arguments,
      _t0;
    return autofill_regenerator().w(function (_context20) {
      while (1) switch (_context20.p = _context20.n) {
        case 0:
          _ref17 = _args20.length > 4 && _args20[4] !== undefined ? _args20[4] : {}, _ref17$shouldAbort = _ref17.shouldAbort, shouldAbort = _ref17$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref17$shouldAbort;
          if (!(!answer || autofill_typeof(answer) !== 'object' || answer.type !== 'file')) {
            _context20.n = 1;
            break;
          }
          return _context20.a(2);
        case 1:
          input = getFileInputInsideField(field) || getResumeFileInput();
          if (input) {
            _context20.n = 2;
            break;
          }
          return _context20.a(2);
        case 2:
          markResumeContinuation();
          _context20.p = 3;
          fillFileInput(input, answer.fileName, answer.base64, answer.mimeType);
          // Block until iCIMS finishes parsing (or reloads). Everything after the résumé
          // is gated on this field, so it fills only once the prefill re-render settles.
          if (shouldAbort()) {
            _context20.n = 4;
            break;
          }
          _context20.n = 4;
          return waitForResumeParseHandoff();
        case 4:
          _context20.n = 6;
          break;
        case 5:
          _context20.p = 5;
          _t0 = _context20.v;
          clearResumeContinuation();
          throw _t0;
        case 6:
          return _context20.a(2);
      }
    }, _callee20, null, [[3, 5]]);
  }));
  return function (_x78, _x79, _x80, _x81) {
    return _ref16.apply(this, arguments);
  };
}())], ['cover_letter', (/*#__PURE__*/function () {
  var _ref18 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee21(_fieldId, _question, answer, field) {
    var input, textField;
    return autofill_regenerator().w(function (_context21) {
      while (1) switch (_context21.n) {
        case 0:
          input = getFileInputInsideField(field);
          if (!input) {
            _context21.n = 1;
            break;
          }
          // File upload: iCIMS accepts only pdf/doc/docx here. Upload a real document answer; skip a
          // text-only answer (or the server's ".txt" fallback) rather than upload a format iCIMS rejects.
          if (isUploadableDocumentAnswer(answer)) fillFileInput(input, answer.fileName, answer.base64, answer.mimeType);
          return _context21.a(2);
        case 1:
          // Textarea / text field: fill the generated cover-letter text.
          if (typeof answer === 'string') {
            textField = getTextarea(field) || autofill_getTextInput(field);
            if (textField) fillTextInput(textField, answer);
          }
        case 2:
          return _context21.a(2);
      }
    }, _callee21);
  }));
  return function (_x82, _x83, _x84, _x85) {
    return _ref18.apply(this, arguments);
  };
}())], [SALARY_FIELD_KIND, (/*#__PURE__*/function () {
  var _ref19 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee22(_fieldId, _question, answer, field) {
    var parts, amount, currency, period;
    return autofill_regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          parts = getSalaryParts(getSalaryAmountInput(field));
          if (parts) {
            _context22.n = 1;
            break;
          }
          return _context22.a(2);
        case 1:
          amount = extractSalaryAmount(answer);
          if (amount) fillTextInput(parts.amount, amount);
          currency = detectSalaryCurrency(answer);
          if (currency) fillSalaryOptionByPrefix(parts.currency, currency.toLowerCase());
          period = detectSalaryPeriod(answer);
          if (period) fillSalaryOptionByPrefix(parts.timeframe, period.toLowerCase().slice(0, 2));
        case 2:
          return _context22.a(2);
      }
    }, _callee22);
  }));
  return function (_x86, _x87, _x88, _x89) {
    return _ref19.apply(this, arguments);
  };
}())],
// Section date row (Month select + Year input) — used by the education/work section
// hierarchy leaves (wrapped as 'section-icims-date') and reachable directly.
['icims-date', (/*#__PURE__*/function () {
  var _ref20 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee23(_fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          if (!(answer == null || answer === '')) {
            _context23.n = 1;
            break;
          }
          return _context23.a(2);
        case 1:
          fillSectionDate(field, String(answer));
        case 2:
          return _context23.a(2);
      }
    }, _callee23);
  }));
  return function (_x90, _x91, _x92, _x93) {
    return _ref20.apply(this, arguments);
  };
}())], [CAPTCHA_FIELD_KIND, createCaptchaFieldKindHandler()]]);

// Register the education & work-history section hierarchy: it adds the root
// answerType/fieldKind ('educationHistory' / 'workHistory'), the shared
// 'profileSectionEntry' / 'profileSectionField' answer types, and the
// 'section-<baseKind>' wrapper fill-kinds that re-resolve the live control and
// delegate to the iCIMS base handlers below.
registerProfileSectionHierarchy({
  sections: HIERARCHY_SECTIONS,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS,
  wrappedFieldKinds: ['text', 'textarea', 'select-native', 'icims-dropdown', 'radio', 'checkbox', 'icims-date']
});
registerAutofillHandlers({
  detectFields: detectAutofillFields,
  detectSubmitButton: detectSubmitButton,
  getSubmitButton: getFinalSubmitButton,
  advanceFlow: advanceFlow,
  isAutofillAvailable: isAutofillAvailable,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS
});
scheduleResumeContinuation();
/******/ })()
;