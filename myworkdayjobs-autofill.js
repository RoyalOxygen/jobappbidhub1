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
;// ../../packages/job-parsers/content/platforms/degree-level.js
function degree_level_toConsumableArray(r) { return degree_level_arrayWithoutHoles(r) || degree_level_iterableToArray(r) || degree_level_unsupportedIterableToArray(r) || degree_level_nonIterableSpread(); }
function degree_level_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function degree_level_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function degree_level_arrayWithoutHoles(r) { if (Array.isArray(r)) return degree_level_arrayLikeToArray(r); }
function degree_level_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = degree_level_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || degree_level_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function degree_level_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return degree_level_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? degree_level_arrayLikeToArray(r, a) : void 0; } }
function degree_level_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// The degree level a profile value or a Degree dropdown option names. Profiles mostly hold
// abbreviations ("BS", "B.S.", "M.S.", "MS", "B.A.", "BBA" …), and an embedding match puts those
// next to the WRONG degree: bah.wd1 2026-10-20 committed "M.D." for a profile "M.S." (doctor
// session 0dfb859a). The professional and MBA levels are checked before the generic "master" /
// "doctor" words they contain. Short abbreviations that are also words or state codes (ma, be,
// md …) only count as the FIRST word.
var DEGREE_LEVEL_PATTERNS = [['mba', /\bmba\b|\bmaster of business administration\b/], ['md', /^md\b|\bdoctor of medicine\b/], ['jd', /^jd\b|\bjuris doctor\b/], ['doctorate', /\bphd\b|\bph d\b|\bdphil\b|^edd\b|\bdoctor(?:ate|al)?\b/], ['master', /\bmasters?\b|\b(?:msc|meng|mtech|mca|mres)\b|^(?:ms|ma|mcs|mfa|mph|mps)\b/], ['bachelor', /\bbachelors?\b|\b(?:bsc|beng|btech|bba|bcom|bca|bfa)\b|^(?:bs|ba|be|bas)\b|\bundergraduate\b/], ['associate', /\bassociates?\b|^(?:aa|aas|as)\b/]];

// An MBA is a master's degree: a list without its own MBA entry takes the master's one.
var DEGREE_LEVEL_FALLBACKS = {
  mba: ['master']
};

// The field a degree names inside its level, for lists that split one level by field ("BA" / "BS",
// "Bachelor of Arts" / "… of Science"). An embedding cannot tell those apart either: chrobinson.wd5
// 2026-10-20 committed "BA" for a profile "BSc." from GED / HS / AA / AS / BA / BS / MA / MS / …
// (doctor session 09e22ba0). The EARLIEST match names the field, so "BA in Computer Science" stays
// arts and "Bachelor of Fine Arts" is fine arts, not arts.
var DEGREE_FIELD_PATTERNS = [['fineArts', /\bfine arts?\b|\b(?:bfa|mfa)\b/], ['engineering', /\bengineering\b|\b(?:beng|meng)\b|^be\b/], ['science', /\bsciences?\b|\b(?:bsc|msc)\b|^(?:bs|ms|as)\b/], ['arts', /\barts?\b|^(?:ba|ma|aa)\b/]];
function normalizeDegreeText(value) {
  return String(value !== null && value !== void 0 ? value : '').toLowerCase().replace(/[.'’`]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}
function getDegreeLevel(value) {
  var _DEGREE_LEVEL_PATTERN, _DEGREE_LEVEL_PATTERN2;
  var text = normalizeDegreeText(value);
  if (!text) return null;
  return (_DEGREE_LEVEL_PATTERN = (_DEGREE_LEVEL_PATTERN2 = DEGREE_LEVEL_PATTERNS.find(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      pattern = _ref2[1];
    return pattern.test(text);
  })) === null || _DEGREE_LEVEL_PATTERN2 === void 0 ? void 0 : _DEGREE_LEVEL_PATTERN2[0]) !== null && _DEGREE_LEVEL_PATTERN !== void 0 ? _DEGREE_LEVEL_PATTERN : null;
}
function getDegreeField(value) {
  var _earliest$field, _earliest;
  var text = normalizeDegreeText(value);
  if (!text) return null;
  var earliest = null;
  var _iterator = degree_level_createForOfIteratorHelper(DEGREE_FIELD_PATTERNS),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        field = _step$value[0],
        pattern = _step$value[1];
      var match = pattern.exec(text);
      if (match && (!earliest || match.index < earliest.index)) earliest = {
        field: field,
        index: match.index
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return (_earliest$field = (_earliest = earliest) === null || _earliest === void 0 ? void 0 : _earliest.field) !== null && _earliest$field !== void 0 ? _earliest$field : null;
}

// Keeps the options of the answer's field when the level's options name one; otherwise all of them.
function narrowByDegreeField(answer, options, getText) {
  if (options.length < 2) return options;
  var field = getDegreeField(answer);
  if (!field) return options;
  var sameField = options.filter(function (option) {
    return getDegreeField(getText(option)) === field;
  });
  return sameField.length > 0 ? sameField : options;
}

// The options naming the same degree level as `answer` (`getText` maps an option to its label) —
// only those of its field when the list splits the level by field — or [] when the answer names no
// level or no option shares it — the caller then keeps its own matching. Lists without degree
// levels (Yes/No, countries …) always answer [].
function filterOptionsByDegreeLevel(answer, options) {
  var getText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (option) {
    return option;
  };
  var level = getDegreeLevel(answer);
  if (!level || !Array.isArray(options)) return [];
  var _loop = function _loop() {
      var candidateLevel = _arr[_i];
      var matches = options.filter(function (option) {
        return getDegreeLevel(getText(option)) === candidateLevel;
      });
      if (matches.length > 0) return {
        v: narrowByDegreeField(answer, matches, getText)
      };
    },
    _ret;
  for (var _i = 0, _arr = [level].concat(degree_level_toConsumableArray((_DEGREE_LEVEL_FALLBAC = DEGREE_LEVEL_FALLBACKS[level]) !== null && _DEGREE_LEVEL_FALLBAC !== void 0 ? _DEGREE_LEVEL_FALLBAC : [])); _i < _arr.length; _i++) {
    var _DEGREE_LEVEL_FALLBAC;
    _ret = _loop();
    if (_ret) return _ret.v;
  }
  return [];
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
/* unused harmony import specifier */ var autofill_section_hierarchy_sleep;
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
  return getTextarea(field) || getTextInput(field);
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
  var select = (field === null || field === void 0 ? void 0 : field.tagName) === 'SELECT' || typeof (field === null || field === void 0 ? void 0 : field.querySelector) === 'function' ? getNativeSelect(field) : null;
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
  var gpa = cleanGpa(entry === null || entry === void 0 ? void 0 : entry.gpa) || cleanGpa(entry === null || entry === void 0 ? void 0 : entry.gradeAverage) || cleanGpa(entry === null || entry === void 0 ? void 0 : entry.grade);
  if (!gpa) return null;
  var leadingNumber = gpaLeadingNumber(gpa);
  var control = getLiveTextControl(live === null || live === void 0 ? void 0 : live.field);
  if (control) {
    var limit = getTextLengthLimit(control);
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
;// ../../packages/job-parsers/content/platforms/myworkdayjobs/autofill.js
/* unused harmony import specifier */ var autofill_waitForPositiveResultWithAbort;
var autofill_templateObject, autofill_templateObject2, autofill_templateObject3, autofill_templateObject4, autofill_templateObject5, autofill_templateObject6, autofill_templateObject7, _templateObject8, _templateObject9, _templateObject0;
function autofill_typeof(o) { "@babel/helpers - typeof"; return autofill_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, autofill_typeof(o); }
function autofill_regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(autofill_typeof(e) + " is not iterable"); }
function autofill_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return autofill_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (autofill_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, autofill_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, autofill_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), autofill_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", autofill_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), autofill_regeneratorDefine2(u), autofill_regeneratorDefine2(u, o, "Generator"), autofill_regeneratorDefine2(u, n, function () { return this; }), autofill_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (autofill_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function autofill_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } autofill_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { autofill_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, autofill_regeneratorDefine2(e, r, n, t); }
function autofill_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function autofill_slicedToArray(r, e) { return autofill_arrayWithHoles(r) || autofill_iterableToArrayLimit(r, e) || autofill_unsupportedIterableToArray(r, e) || autofill_nonIterableRest(); }
function autofill_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function autofill_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var LISTBOX_WAIT_TIMEOUT_MS = 3000;
var LISTBOX_CLOSE_WAIT_TIMEOUT_MS = 5000;
var MULTISELECT_WAIT_TIMEOUT_MS = 4000;
// After a prompt-option click: the pill commits, or — for a category of a nested prompt — its
// children render from a server round-trip.
var MULTISELECT_COMMIT_WAIT_TIMEOUT_MS = 4000;
var MULTISELECT_MAX_PROMPT_DEPTH = 3;
// Workday saves the Skills list with the rest of My Experience, and a long list fails that save:
// cisco.wd5 answered 91 skills with a 500 after 20 s, pureinsurance.wd5 dropped the connection at
// 47-66 (both a "Page Error" on Save and Continue, prod 2026-10-19/20) while 36-38 saved. Keep the
// first 25 the engine lists.
var WORKDAY_SKILLS_FIELD_ID = 'skills--skills';
var WORKDAY_MAX_SKILLS = 25;
// After clicking a listbox option, wait for the select button to actually render the chosen
// option. Workday commits the selection asynchronously (React re-render + hidden input update),
// so moving on as soon as the popup closes can race the commit and leave the field visually unset.
var SELECT_COMMIT_WAIT_TIMEOUT_MS = 10000;
// A checkbox click is re-read after this beat; one still mismatched gets one more click.
var CHECKBOX_COMMIT_SETTLE_MS = 300;
var CHECKBOX_MAX_ATTEMPTS = 2;
// Before the re-commits of a refused Save and Continue are pressed, Workday re-renders the changes.
var FIELD_ERROR_REPAIR_SETTLE_MS = 500;
var FILE_UPLOAD_WAIT_TIMEOUT_MS = 5000;
var AUTOFILL_ADVANCE_WAIT_MS = 1200;
// Before an empty-advance clicks a Next/Continue button, wait this long for the step's fields to render.
// Workday apply-flow pages can paint their footer Next button BEFORE their questions, so a page detected
// as field-less-but-available would otherwise be skipped (Next clicked) with nothing filled — then fail
// validation on the next step. If fields appear within this window, we don't advance and let the engine
// detect + fill them.
var WORKDAY_ADVANCE_FIELDS_SETTLE_MS = 3000;
// A just-navigated apply-flow step (and the standalone /login page) can render its interactive
// content SECONDS after the page mounts — e.g. NVIDIA's sign-in chooser appears ~5s after the
// Apply Manually navigation (gated on an async authproviders fetch). A run auto-started inside that
// window sees nothing actionable and ends — and because every field-less-but-available page shares
// ONE background auto-start signature (EMPTY_AUTOFILL_STEP_SIGNATURE), that no-op run consumes the
// step's one-shot auto-start: when the chooser finally renders, its detection is dedup-blocked and
// "Sign in with email" is never clicked. So a run that lands on a truly empty step must wait for the
// step to render and act on what appears IN THIS CALL instead of relying on a later re-trigger.
var WORKDAY_STEP_RENDER_WAIT_MS = 20000;
// A step Workday is still building shows each field it is still loading as a grey skeleton (see
// hasWorkdayLoadingSkeleton). Tabs froze for good in that window (2026-10-19/20: 47 Workday applications
// on 29 tenants in one day): My Information was mounting (sources / previous-worker / phone requests in
// flight, skeletons up) when the fill opened the Country list; the countries list never arrived and every
// page script, read and reload hung, while a fresh tab of the same page loaded and filled fine. A person
// never opens a drop-down in that second — so nothing is opened or typed until the skeletons are gone; a
// step that keeps one past the bound is filled as before.
var WORKDAY_STEP_SETTLE_TIMEOUT_MS = 10000;
var WORKDAY_STEP_SETTLE_POLL_MS = 200;
var SAFE_ADVANCE_BUTTON_TEXT_PATTERN = /\b(next|continue|review|preview)\b/i;
var UNSAFE_ADVANCE_BUTTON_TEXT_PATTERN = /\b(submit|apply|complete|finish|done|send)\b/i;
var NON_ADVANCE_BUTTON_TEXT_PATTERN = /\b(back|previous|cancel|close|delete|remove|upload|browse|choose|skip)\b/i;
var WORKDAY_AUTH_FORM_WAIT_MS = 4000;
// Bounded retry for the vault resolve in driveWorkdayAuth: beforeStartAutofill can fire while the tab's
// session/checkpoint exists but isn't yet populated with profileId/jobId, in which case the background
// answers { type: 'skip' } (no API call) — retry until the real { password, created } state arrives.
var WORKDAY_AUTH_RESOLVE_MAX_ATTEMPTS = 16;
var WORKDAY_AUTH_RESOLVE_RETRY_MS = 500;
function normalizeWorkdayText(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
}
function normalizeComparisonText(value) {
  return normalizeWorkdayText(value).toLowerCase();
}
function cleanQuestionText(value) {
  return normalizeWorkdayText(value).replace(/\s*\*+\s*/g, ' ').replace(/\bcurrent value is\b.*$/i, '').replace(/\s+/g, ' ').trim();
}
function cssEscapeValue(value) {
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
    return CSS.escape(String(value));
  }
  return String(value).replace(/["\\]/g, '\\$&');
}
function isElementVisible(element) {
  if (!(element instanceof Element) || !element.isConnected) return false;
  var style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
    return false;
  }
  var rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}
function getWorkdayApplyPage() {
  return document.querySelector('[data-automation-id="applyFlowPage"]');
}
function getCurrentStepRoot() {
  var page = getWorkdayApplyPage();

  // On the standalone /login?redirect=... page, signInContent exists without applyFlowPage.
  if (!page) {
    var standaloneSignIn = document.querySelector('[data-automation-id="signInContent"]');
    return standaloneSignIn && isElementVisible(standaloneSignIn) ? standaloneSignIn : null;
  }
  return Array.from(page.querySelectorAll('[data-automation-id]')).find(function (element) {
    var _element$getAttribute;
    var automationId = (_element$getAttribute = element.getAttribute('data-automation-id')) !== null && _element$getAttribute !== void 0 ? _element$getAttribute : '';
    return (automationId.startsWith('applyFlow') && automationId.endsWith('Page') && automationId !== 'applyFlowPage' || automationId === 'signInContent') && isElementVisible(element);
  }) || null;
}
function getCurrentStepHeading() {
  var _getCurrentStepRoot$q, _getCurrentStepRoot;
  return cleanQuestionText((_getCurrentStepRoot$q = (_getCurrentStepRoot = getCurrentStepRoot()) === null || _getCurrentStepRoot === void 0 || (_getCurrentStepRoot = _getCurrentStepRoot.querySelector('h3')) === null || _getCurrentStepRoot === void 0 ? void 0 : _getCurrentStepRoot.textContent) !== null && _getCurrentStepRoot$q !== void 0 ? _getCurrentStepRoot$q : '');
}

// Workday's loading skeleton (Canvas Kit Skeleton, the Suspense fallback of a field whose data is still
// on its way): a visually hidden "Loading" label next to an aria-hidden block of grey shapes. No
// automation id — the label + shapes pair is the signature (nothing else in the apply flow renders it).
function isWorkdayLoadingSkeleton(shapes) {
  var label = shapes.previousElementSibling;
  return Boolean(label) && label.childElementCount === 0 && normalizeComparisonText(label.textContent) === 'loading' && isElementVisible(shapes.parentElement);
}
function hasWorkdayLoadingSkeleton() {
  var page = getWorkdayApplyPage();
  if (!page) return false;
  return Array.from(page.querySelectorAll('[aria-hidden="true"]')).some(isWorkdayLoadingSkeleton);
}

// The step the wait last gave up on (url + heading): one that keeps a skeleton is not waited on again.
var workdaySettleGaveUpOn = null;
function waitForWorkdayStepSettled() {
  return _waitForWorkdayStepSettled.apply(this, arguments);
}
function _waitForWorkdayStepSettled() {
  _waitForWorkdayStepSettled = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee23() {
    var shouldAbort,
      stepKey,
      settled,
      _args24 = arguments;
    return autofill_regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          shouldAbort = _args24.length > 0 && _args24[0] !== undefined ? _args24[0] : autofill_NEVER_ABORT;
          if (hasWorkdayLoadingSkeleton()) {
            _context24.n = 1;
            break;
          }
          return _context24.a(2, true);
        case 1:
          stepKey = "".concat(window.location.href, "|").concat(getCurrentStepHeading());
          if (!(workdaySettleGaveUpOn === stepKey)) {
            _context24.n = 2;
            break;
          }
          return _context24.a(2, false);
        case 2:
          console.log('[bidhub][workday] step still loading — waiting before filling', {
            step: getCurrentStepHeading()
          });
          _context24.n = 3;
          return waitForPositiveResultWithAbort(function () {
            return hasWorkdayLoadingSkeleton() ? null : true;
          }, WORKDAY_STEP_SETTLE_TIMEOUT_MS, shouldAbort, WORKDAY_STEP_SETTLE_POLL_MS);
        case 3:
          settled = _context24.v;
          if (!settled && !shouldAbort()) {
            workdaySettleGaveUpOn = stepKey;
            console.warn('[bidhub][workday] step still loading after the wait — filling anyway', {
              step: getCurrentStepHeading()
            });
          }
          return _context24.a(2, Boolean(settled));
      }
    }, _callee23);
  }));
  return _waitForWorkdayStepSettled.apply(this, arguments);
}
function getVisibleTopLevelFieldWrappers(root) {
  if (!root) return [];
  return Array.from(root.querySelectorAll('[data-automation-id^="formField-"]')).filter(function (field) {
    return isElementVisible(field);
  }).filter(function (field) {
    var _field$parentElement, _field$parentElement$;
    return !((_field$parentElement = field.parentElement) !== null && _field$parentElement !== void 0 && (_field$parentElement$ = _field$parentElement.closest) !== null && _field$parentElement$ !== void 0 && _field$parentElement$.call(_field$parentElement, '[data-automation-id^="formField-"]'));
  });
}
function getQuestionNode(field) {
  var candidates = [].concat(autofill_toConsumableArray(field.querySelectorAll('legend [data-automation-id="richText"]')), autofill_toConsumableArray(field.querySelectorAll('legend label')), autofill_toConsumableArray(field.querySelectorAll('legend')), autofill_toConsumableArray(field.querySelectorAll(':scope > label')), autofill_toConsumableArray(field.querySelectorAll('label')), autofill_toConsumableArray(field.querySelectorAll('[data-automation-id="richText"]')));
  return candidates.find(function (node) {
    return cleanQuestionText(node.textContent || node.innerText);
  });
}
function isResumeUploadField(field) {
  var _field$querySelector;
  return Boolean(field === null || field === void 0 || (_field$querySelector = field.querySelector) === null || _field$querySelector === void 0 ? void 0 : _field$querySelector.call(field, '[data-automation-id="resumeUpload"]'));
}

// A questionnaire file-drop slot asking for the cover letter ("Please upload a cover letter",
// gunder.wd5 JR100237). Workday gives it no stable automation id — only its label tells it apart
// from the resume drop zone and from any other upload (writing sample, transcript), so match on the
// question text. Recognised with the hidden file input present (empty slot) OR with an uploaded
// file item (filled slot), so the live re-resolution still finds it after an upload.
var COVER_LETTER_QUESTION_PATTERN = /cover\s*letter/i;
function isCoverLetterUploadField(field) {
  if (!(field instanceof Element) || isResumeUploadField(field)) return false;
  if (!getFileInputInsideField(field) && getUploadedFileItems(field).length === 0) return false;
  return COVER_LETTER_QUESTION_PATTERN.test(getFieldQuestionText(field));
}
function findCoverLetterUploadField() {
  var _root$querySelectorAl, _root$querySelectorAl2;
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  return Array.from((_root$querySelectorAl = root === null || root === void 0 || (_root$querySelectorAl2 = root.querySelectorAll) === null || _root$querySelectorAl2 === void 0 ? void 0 : _root$querySelectorAl2.call(root, '[data-automation-id^="formField-"]')) !== null && _root$querySelectorAl !== void 0 ? _root$querySelectorAl : []).find(function (field) {
    return isElementVisible(field) && isCoverLetterUploadField(field);
  }) || null;
}

// The Preferred Name sub-form (revealed by "I have a preferred name" on My Information) reuses
// the exact "First Name"/"Last Name" labels of the Legal Name section, so an unqualified question
// resolves to the LEGAL name and fills it into the preferred-name fields. The wrapper ids are the
// only distinguishing marker (name--preferredName--firstName / formField-preferredName--firstName);
// qualify the question so it hits the dedicated preferred-name answers ("Preferred First Name" /
// "Preferred Last Name" patterns → profile preferredFirstName/preferredLastName).
function qualifyPreferredNameQuestion(field, question) {
  var _field$getAttribute, _field$getAttribute2, _field$getAttribute3, _field$getAttribute4;
  if (!question || /preferred/i.test(question)) return question;
  var idScope = "".concat((_field$getAttribute = field === null || field === void 0 || (_field$getAttribute2 = field.getAttribute) === null || _field$getAttribute2 === void 0 ? void 0 : _field$getAttribute2.call(field, 'data-fkit-id')) !== null && _field$getAttribute !== void 0 ? _field$getAttribute : '', " ").concat((_field$getAttribute3 = field === null || field === void 0 || (_field$getAttribute4 = field.getAttribute) === null || _field$getAttribute4 === void 0 ? void 0 : _field$getAttribute4.call(field, 'data-automation-id')) !== null && _field$getAttribute3 !== void 0 ? _field$getAttribute3 : '');
  if (!/preferredName--/i.test(idScope)) return question;
  return "Preferred ".concat(question);
}
function getFieldQuestionText(field) {
  var _getQuestionNode, _getQuestionNode2;
  var questionText = cleanQuestionText(((_getQuestionNode = getQuestionNode(field)) === null || _getQuestionNode === void 0 ? void 0 : _getQuestionNode.textContent) || ((_getQuestionNode2 = getQuestionNode(field)) === null || _getQuestionNode2 === void 0 ? void 0 : _getQuestionNode2.innerText) || '');
  if (questionText) return qualifyPreferredNameQuestion(field, questionText);
  if (isResumeUploadField(field)) return 'Resume/CV';
  return '';
}
function getSelectButton(field) {
  var _field$matches;
  if (field !== null && field !== void 0 && (_field$matches = field.matches) !== null && _field$matches !== void 0 && _field$matches.call(field, 'button[aria-haspopup="listbox"]')) return field;
  return (field === null || field === void 0 ? void 0 : field.querySelector('button[aria-haspopup="listbox"]')) || null;
}
function getMultiselectInput(field) {
  var _field$matches2;
  if (field !== null && field !== void 0 && (_field$matches2 = field.matches) !== null && _field$matches2 !== void 0 && _field$matches2.call(field, '[data-automation-id="multiSelectContainer"] input')) return field;
  return (field === null || field === void 0 ? void 0 : field.querySelector('[data-automation-id="multiSelectContainer"] input')) || null;
}
function getDateInputs(field) {
  var _field$querySelectorA;
  return Array.from((_field$querySelectorA = field === null || field === void 0 ? void 0 : field.querySelectorAll('input[role="spinbutton"]')) !== null && _field$querySelectorA !== void 0 ? _field$querySelectorA : []).filter(function (input) {
    return isElementVisible(input);
  });
}
function getDateInputWrapper(field) {
  if (!(field instanceof Element)) return null;
  if (field.getAttribute('data-automation-id') === 'dateInputWrapper') return field;
  return field.closest('[data-automation-id="dateInputWrapper"]') || field.querySelector('[data-automation-id="dateInputWrapper"]') || null;
}
function getVisibleTextInput(field) {
  var _field$querySelectorA2;
  var isVisibleTextInput = function isVisibleTextInput(input) {
    var _field$querySelector2;
    var type = (input.type || '').toLowerCase();
    if (type === 'hidden' || type === 'file' || type === 'radio' || type === 'checkbox') return false;
    if (input.getAttribute('role') === 'spinbutton') return false;
    if (input.closest('[data-automation-id="multiSelectContainer"]')) return false;
    if ((_field$querySelector2 = field.querySelector) !== null && _field$querySelector2 !== void 0 && _field$querySelector2.call(field, 'button[aria-haspopup="listbox"]')) return false;
    return isElementVisible(input);
  };
  if ((field === null || field === void 0 ? void 0 : field.tagName) === 'INPUT' && isVisibleTextInput(field)) return field;
  return Array.from((_field$querySelectorA2 = field === null || field === void 0 ? void 0 : field.querySelectorAll('input')) !== null && _field$querySelectorA2 !== void 0 ? _field$querySelectorA2 : []).find(function (input) {
    return isVisibleTextInput(input);
  }) || null;
}

// Workday questionnaire numeric inputs (e.g. "Please provide your salary expectation") render as a
// plain <input type="text"> with NO static numeric marker — no inputmode/role/pattern/min/max —
// so they are indistinguishable from free-text by attributes alone. Their React onChange digit-
// filters the value SYNCHRONOUSLY ("$85,000.50 per year" → "8500050", letters/commas/dots all
// dropped), which mangles formatted answers and empties digit-less ones. Detect the filter
// behaviorally: append a letter to the CURRENT value through the React value setter — the digit
// filter strips it (readback unchanged) while a free-text input keeps it — then restore the
// original value verbatim. Works for empty AND pre-filled inputs (Workday restores saved draft
// values on revisit, and the constraint must still be promoted then). The sanitize runs
// synchronously on the input event, so probe + restore happen in the same task (no visible
// flicker). Results are cached per input ELEMENT — some renders stamp every wrapper
// data-fkit-id="primaryQuestionnaire--null", so fieldIds can collide while elements can't.
var NUMERIC_FILTER_PROBE_CHAR = 'a';
var numericFilterProbeCache = new WeakMap();

// The questionnaire check must look at the wrapper's fkit id as well: on "--null"-stamped renders
// getFieldId skips the fkit id and falls back to input id / automation-id slugs that may not
// mention the questionnaire at all.
function isQuestionnaireField(fieldId, field) {
  var _field$getAttribute5, _field$getAttribute6;
  return /questionnaire/i.test(String(fieldId !== null && fieldId !== void 0 ? fieldId : '')) || /questionnaire/i.test((_field$getAttribute5 = field === null || field === void 0 || (_field$getAttribute6 = field.getAttribute) === null || _field$getAttribute6 === void 0 ? void 0 : _field$getAttribute6.call(field, 'data-fkit-id')) !== null && _field$getAttribute5 !== void 0 ? _field$getAttribute5 : '');
}
function isNumericFilteredQuestionnaireInput(fieldId, field, input) {
  if (!isQuestionnaireField(fieldId, field)) return false;
  if (!(input instanceof HTMLInputElement)) return false;
  if (numericFilterProbeCache.has(input)) return numericFilterProbeCache.get(input);
  var originalValue = input.value;
  // A maxLength with no room for the probe char would truncate it and read as a false
  // positive — indeterminate, so leave uncached.
  if (input.maxLength > 0 && originalValue.length + NUMERIC_FILTER_PROBE_CHAR.length > input.maxLength) {
    return false;
  }
  var numericFiltered = false;
  try {
    writeReactTextValue(input, originalValue + NUMERIC_FILTER_PROBE_CHAR);
    numericFiltered = input.value === originalValue;
  } finally {
    writeReactTextValue(input, originalValue);
  }
  numericFilterProbeCache.set(input, numericFiltered);
  return numericFiltered;
}

// First number token of a formatted answer, comma-grouped digits collapsed ("$85,000 - $95,000
// per year" → "85000"). Decimals are intentionally cut at the dot: Workday's digit filter drops
// the dot itself, so "85000.50" would commit as 8500050.
function extractFirstNumberToken(value) {
  var match = String(value !== null && value !== void 0 ? value : '').match(/\d[\d,]*/);
  return match ? match[0].replace(/,/g, '') : '';
}

// Workday single-line text inputs commit to the applicant form model the same way the textareas
// do (see fillWorkdayTextarea): the input event only updates the widget's React state (the
// VISIBLE value), while the model write happens in onBlur — which React fires only for a
// focusout reaching its root. fillTextInput's synthetic `new Event('blur')` is non-bubbling and
// never gets there, so a write without a focus→blur cycle leaves the field SHOWING the value
// while save-validation still fails it with "required and must have a value". Verified live on
// assuranceamerica.wd12: the identical write passes validation bracketed by focus()/blur() and
// fails without them. A plain focus()/blur() is not enough either: Chrome fires no focus events
// while the tab lacks system focus (user switched windows mid-fill, unfocused runner window), so
// the cycle goes through focusElementReliably/blurElementReliably (A/B-verified live 2026-10-13,
// Work Experience Job Title + From). So: focus, write (with the React state-restore re-assert),
// repair a digit-filtered mangle while STILL focused, then one blur to commit.
function fillWorkdayTextInput(_x, _x2) {
  return _fillWorkdayTextInput.apply(this, arguments);
}
function _fillWorkdayTextInput() {
  _fillWorkdayTextInput = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee24(input, value) {
    var shouldAbort,
      text,
      numericAnswer,
      _args25 = arguments;
    return autofill_regenerator().w(function (_context25) {
      while (1) switch (_context25.n) {
        case 0:
          shouldAbort = _args25.length > 2 && _args25[2] !== undefined ? _args25[2] : autofill_NEVER_ABORT;
          if (input) {
            _context25.n = 1;
            break;
          }
          return _context25.a(2);
        case 1:
          text = String(value !== null && value !== void 0 ? value : '');
          focusElementReliably(input);
          _context25.n = 2;
          return fillTextInputReliably(input, text, {
            blur: false,
            shouldAbort: shouldAbort
          });
        case 2:
          if (!(input.value !== text && input.value === text.replace(/\D+/g, ''))) {
            _context25.n = 3;
            break;
          }
          numericAnswer = extractFirstNumberToken(text);
          if (!(numericAnswer && input.value !== numericAnswer)) {
            _context25.n = 3;
            break;
          }
          _context25.n = 3;
          return fillTextInputReliably(input, numericAnswer, {
            blur: false,
            shouldAbort: shouldAbort
          });
        case 3:
          blurElementReliably(input);
        case 4:
          return _context25.a(2);
      }
    }, _callee24);
  }));
  return _fillWorkdayTextInput.apply(this, arguments);
}
function getChoiceInputLabelText(input) {
  var _input$labels, _input$closest;
  var fallbackQuestion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!input) return fallbackQuestion;
  var linkedLabel = (_input$labels = input.labels) === null || _input$labels === void 0 ? void 0 : _input$labels[0];
  var linkedText = cleanQuestionText((linkedLabel === null || linkedLabel === void 0 ? void 0 : linkedLabel.textContent) || (linkedLabel === null || linkedLabel === void 0 ? void 0 : linkedLabel.innerText));
  if (linkedText) return linkedText;
  var wrappedLabel = cleanQuestionText((_input$closest = input.closest('label')) === null || _input$closest === void 0 ? void 0 : _input$closest.textContent);
  if (wrappedLabel) return wrappedLabel;
  var valueText = cleanQuestionText(input.value);
  if (valueText) return valueText;
  return fallbackQuestion;
}
function isFieldRequired(field) {
  var _field$querySelector3, _field$textContent;
  return Boolean((field === null || field === void 0 || (_field$querySelector3 = field.querySelector) === null || _field$querySelector3 === void 0 ? void 0 : _field$querySelector3.call(field, 'abbr, .requiredAsterisk, [aria-required="true"], [required]')) || (field === null || field === void 0 || (_field$textContent = field.textContent) === null || _field$textContent === void 0 ? void 0 : _field$textContent.includes('*')));
}
function inferDateFormat(field) {
  var labels = getDateInputs(field).map(function (input) {
    return normalizeComparisonText(input.getAttribute('aria-label'));
  });
  if (labels.includes('month') && labels.includes('day') && labels.includes('year')) return 'MM/DD/YYYY';
  if (labels.includes('month') && labels.includes('year')) return 'MM/YYYY';
  if (labels.includes('year')) return 'YYYY';
  return 'MM/DD/YYYY';
}
function buildDateConstraints(field) {
  return {
    required: isFieldRequired(field),
    inputType: 'date',
    format: inferDateFormat(field)
  };
}
function getFieldId(field, question) {
  var _field$getAttribute7, _field$getAttribute8;
  if (isResumeUploadField(field)) return 'resume';
  // The cover-letter drop zone is a DOCUMENT slot like the resume: the fixed id is what the panel's
  // document row + Attach chip, the background's document selections and the autoapply session-
  // document refetch key on (`fieldId === 'cover_letter'`); a fkit id would leave it a plain row.
  if (isCoverLetterUploadField(field)) return 'cover_letter';
  var fkitId = field === null || field === void 0 || (_field$getAttribute7 = field.getAttribute) === null || _field$getAttribute7 === void 0 ? void 0 : _field$getAttribute7.call(field, 'data-fkit-id');
  if (fkitId && !fkitId.endsWith('--null')) return fkitId;
  var primaryControl = getSelectButton(field) || getMultiselectInput(field) || getDateInputs(field)[0] || getFileInputInsideField(field) || getTextarea(field) || getRadioInputs(field)[0] || getCheckboxInputs(field)[0] || getVisibleTextInput(field);
  if (primaryControl !== null && primaryControl !== void 0 && primaryControl.id) return primaryControl.id;
  if (primaryControl !== null && primaryControl !== void 0 && primaryControl.name) return primaryControl.name;
  var automationId = field === null || field === void 0 || (_field$getAttribute8 = field.getAttribute) === null || _field$getAttribute8 === void 0 ? void 0 : _field$getAttribute8.call(field, 'data-automation-id');
  if (automationId) return "".concat(automationId, "-").concat(question).replace(/\s+/g, '-').toLowerCase();
  return question.replace(/\s+/g, '-').toLowerCase();
}
function getFieldMetadataSync(fieldId, question, field) {
  var fileInput = getFileInputInsideField(field);
  if (fileInput) {
    var constraints = autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(question, fileInput)), {}, {
      required: isFieldRequired(field)
    });
    if (/resume|cv/i.test(question) || /resumeAttachments/i.test(fieldId)) {
      return {
        answerType: 'resume',
        fieldKind: 'resume',
        options: null,
        constraints: constraints
      };
    }
    if (COVER_LETTER_QUESTION_PATTERN.test(question)) {
      // The slot is a FILE drop zone. Without coverLetterOutput:'file' the background answers with
      // the letter's TEXT (its default shape), the 'upload' handler ignores a non-file answer and
      // the REQUIRED upload stays empty while the panel shows the paragraph as filled (prod
      // 2026-10-06, gunder.wd5 "Please upload a cover letter").
      return {
        answerType: 'cover_letter',
        fieldKind: 'upload',
        options: null,
        constraints: autofill_objectSpread(autofill_objectSpread({}, constraints), {}, {
          coverLetterOutput: 'file'
        })
      };
    }
    return {
      answerType: null,
      fieldKind: null,
      options: null,
      constraints: constraints
    };
  }
  var dateInputs = getDateInputs(field);
  if (dateInputs.length > 0) {
    return {
      answerType: 'date',
      fieldKind: 'date',
      options: null,
      constraints: buildDateConstraints(field)
    };
  }
  var radioInputs = getRadioInputs(field);
  if (radioInputs.length > 0) {
    return {
      answerType: 'single-select',
      fieldKind: 'radio',
      options: radioInputs.map(function (input) {
        return getChoiceInputLabelText(input, question);
      }).filter(Boolean),
      constraints: {
        required: isFieldRequired(field)
      }
    };
  }
  var checkboxInputs = getCheckboxInputs(field);
  if (checkboxInputs.length > 0) {
    if (checkboxInputs.length === 1) {
      return {
        answerType: 'single-select',
        fieldKind: 'checkbox',
        options: ['Yes', 'No'],
        constraints: {
          required: isFieldRequired(field)
        }
      };
    }
    return {
      answerType: 'multi-select',
      fieldKind: 'checkbox',
      options: checkboxInputs.map(function (input) {
        return getChoiceInputLabelText(input, question);
      }).filter(Boolean),
      constraints: {
        required: isFieldRequired(field)
      }
    };
  }
  var textarea = getTextarea(field);
  if (textarea) {
    return {
      answerType: 'text',
      fieldKind: 'textarea',
      options: null,
      constraints: autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(question, textarea)), {}, {
        required: isFieldRequired(field)
      })
    };
  }
  var multiselectInput = getMultiselectInput(field);
  if (multiselectInput) {
    return {
      answerType: 'multi-select-text',
      fieldKind: 'multi-select',
      options: null,
      constraints: autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(question, multiselectInput)), {}, {
        required: isFieldRequired(field)
      })
    };
  }
  var selectButton = getSelectButton(field);
  if (selectButton) {
    return {
      answerType: 'single-select',
      fieldKind: 'select-custom',
      options: null,
      constraints: {
        required: isFieldRequired(field)
      }
    };
  }
  var textInput = getVisibleTextInput(field);
  if (textInput) {
    var _constraints = autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(question, textInput)), {}, {
      required: isFieldRequired(field)
    });
    // Digit-filtered questionnaire input: tell the backend to answer with a bare number
    // (ai-core normalizes to digits when inputType is 'number') instead of prose the
    // input would mangle.
    if (isNumericFilteredQuestionnaireInput(fieldId, field, textInput)) {
      _constraints.inputType = 'number';
      _constraints.numericOnly = true;
    }
    return {
      answerType: 'text',
      fieldKind: 'text',
      options: null,
      constraints: _constraints
    };
  }
  return {
    answerType: null,
    fieldKind: null,
    options: null,
    constraints: {}
  };
}
function addQuestionEntry(questions, _ref) {
  var question = _ref.question,
    fieldId = _ref.fieldId,
    field = _ref.field,
    answerType = _ref.answerType,
    fieldKind = _ref.fieldKind,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? null : _ref$options,
    _ref$constraints = _ref.constraints,
    constraints = _ref$constraints === void 0 ? {} : _ref$constraints,
    _ref$dependsOnPreviou = _ref.dependsOnPrevious,
    dependsOnPrevious = _ref$dependsOnPreviou === void 0 ? isDependentQuestion(question) : _ref$dependsOnPreviou,
    _ref$waitForFieldId = _ref.waitForFieldId,
    waitForFieldId = _ref$waitForFieldId === void 0 ? null : _ref$waitForFieldId;
  if (!question || !fieldId || !field || !answerType || !fieldKind) return;
  questions.push(autofill_objectSpread({
    question: question,
    fieldId: fieldId,
    field: field,
    answerType: answerType,
    fieldKind: fieldKind,
    options: options,
    constraints: constraints,
    dependsOnPrevious: dependsOnPrevious
  }, waitForFieldId ? {
    waitForFieldId: waitForFieldId
  } : {}));
}
function getSectionGroupByHeadingId(sectionId) {
  var heading = document.getElementById(sectionId);
  if (!heading) return null;
  return heading.closest('[role="group"][aria-labelledby]') || heading.parentElement || null;
}
function detectExperienceFields(root) {
  var questions = [];
  var workSection = getWorkExperienceSection();
  var educationSection = getSectionGroupByHeadingId('Education-section');
  var skillsSection = getSectionGroupByHeadingId('Skills-section');
  var resumeSection = getSectionGroupByHeadingId('Resume/CV-section');
  var skillsField = root.querySelector('[data-automation-id="formField-skills"]');
  // The resume drop zone: the My Experience step's `resumeUpload` widget (or an upload inside the
  // Resume/CV section) first, otherwise the first other upload on the page — but NEVER a cover-letter
  // slot: on a questionnaire step it is often the ONLY upload and would be relabelled "Resume/CV" and
  // receive the resume. It is detected as a standard field (fieldId 'cover_letter') instead.
  var uploadFields = Array.from(root.querySelectorAll('[data-automation-id^="formField-"]')).filter(function (field) {
    return isElementVisible(field) && getFileInputInsideField(field);
  });
  var resumeField = uploadFields.find(function (field) {
    return isResumeUploadField(field) || Boolean(resumeSection === null || resumeSection === void 0 ? void 0 : resumeSection.contains(field));
  }) || uploadFields.find(function (field) {
    return !isCoverLetterUploadField(field);
  });
  var collapsedContainers = [workSection, educationSection, skillsSection, skillsField, resumeSection, resumeField];

  // Profile sections are emitted as a root → group → leaf hierarchy by the shared collector,
  // reflecting the CURRENT DOM on every detection pass — rows the root's fill adds appear on the
  // next pass. Their containers stay in `collapsedContainers` so detectStandardFields never
  // double-emits the section's internal controls.
  if (workSection && isElementVisible(workSection)) {
    questions.push.apply(questions, autofill_toConsumableArray(collectSectionHierarchyQuestions(WORKDAY_WORK_HISTORY_SECTION)));
  }
  var hasEducationSection = Boolean(educationSection && isElementVisible(educationSection));
  if (hasEducationSection) {
    questions.push.apply(questions, autofill_toConsumableArray(collectSectionHierarchyQuestions(WORKDAY_EDUCATION_SECTION)));
  }
  if (skillsField && isElementVisible(skillsField)) {
    var metadata = getFieldMetadataSync('skills--skills', 'Skills', skillsField);
    addQuestionEntry(questions, {
      question: 'Skills',
      fieldId: 'skills--skills',
      field: skillsField,
      answerType: metadata.answerType,
      fieldKind: metadata.fieldKind,
      options: metadata.options,
      constraints: metadata.constraints,
      // Skills fill AFTER every Education row. Education 2 is added only once Education 1 settles,
      // so its leaves queued on the DOM mutex behind the Skills loop (one search per skill, minutes
      // for a long list) and opened their lists while the last skill search was still open: the
      // Degree pick read the Skills results instead of its own list and committed nothing
      // (micron.wd1 lab 2026-10-20: "B.S." ticked the skill "Vector NTI"; alegeus.wd1 Education 2
      // Degree + Field of Study left empty, doctor sessions fe59ae48 / c0eafa20).
      waitForFieldId: hasEducationSection ? WORKDAY_EDUCATION_SECTION.rootFieldId : null
    });
  }
  if (resumeField) {
    var _metadata = getFieldMetadataSync('resume', 'Resume/CV', resumeField);
    addQuestionEntry(questions, {
      question: 'Resume/CV',
      fieldId: 'resume',
      field: resumeField,
      answerType: _metadata.answerType,
      fieldKind: _metadata.fieldKind,
      options: _metadata.options,
      constraints: _metadata.constraints,
      dependsOnPrevious: false
    });
  }
  var standardFields = detectStandardFields(root).filter(function (entry) {
    return !isFieldInsideAnyContainer(entry.field, collapsedContainers);
  });
  questions.push.apply(questions, autofill_toConsumableArray(standardFields));
  return questions;
}
function detectStandardFields(root) {
  var questions = [];
  var _iterator = autofill_createForOfIteratorHelper(getVisibleTopLevelFieldWrappers(root)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;
      var question = getFieldQuestionText(field);
      if (!question) continue;
      var fieldId = getFieldId(field, question);
      var metadata = getFieldMetadataSync(fieldId, question, field);
      if (!metadata.answerType || !metadata.fieldKind) continue;
      addQuestionEntry(questions, {
        question: question,
        fieldId: fieldId,
        field: field,
        answerType: metadata.answerType,
        fieldKind: metadata.fieldKind,
        options: metadata.options,
        constraints: metadata.constraints
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  console.log('standard questions detected', questions);
  return questions;
}
function isFieldInsideAnyContainer(field, containers) {
  return containers.some(function (container) {
    return container && container.contains(field);
  });
}

// Workday's account-creation consent ("I agree to creating this account …",
// data-automation-id="createAccountCheckbox") is not a real question: the auth takeover already
// decided to SIGN UP, so consenting is implied by the flow itself and leaving it unchecked only
// blocks the Create Account submit. Tenants render it inconsistently — sometimes outside the
// formField- sweep or the step root, with an input id reminted on every auth re-render — which
// left it undetected (idle in the panel, never answered). So it gets a dedicated document-scoped
// detection with a STABLE fieldId and a local always-Yes resolution (zero backend/AI round-trip):
// the 'single-select' answer handler and the 'checkbox' kind handler both special-case the
// fieldId — the former answers Yes locally, the latter re-queries the live input by automation id.
var CREATE_ACCOUNT_CONSENT_FIELD_ID = 'createAccountCheckbox';
var CREATE_ACCOUNT_CONSENT_FALLBACK_QUESTION = 'I agree to creating this account';
function getCreateAccountConsentInput() {
  var _marker$matches, _marker$querySelector, _marker$closest, _marker$closest$query;
  var marker = document.querySelector('[data-automation-id="createAccountCheckbox"]');
  if (!marker) return null;

  // The automation id sits on the input itself on some tenants and on a wrapper on others.
  if ((_marker$matches = marker.matches) !== null && _marker$matches !== void 0 && _marker$matches.call(marker, 'input[type="checkbox"]')) return marker;
  return ((_marker$querySelector = marker.querySelector) === null || _marker$querySelector === void 0 ? void 0 : _marker$querySelector.call(marker, 'input[type="checkbox"]')) || ((_marker$closest = marker.closest) === null || _marker$closest === void 0 || (_marker$closest = _marker$closest.call(marker, '[data-automation-id^="formField-"]')) === null || _marker$closest === void 0 || (_marker$closest$query = _marker$closest.querySelector) === null || _marker$closest$query === void 0 ? void 0 : _marker$closest$query.call(_marker$closest, 'input[type="checkbox"]')) || null;
}
function detectCreateAccountConsentField() {
  var input = getCreateAccountConsentInput();
  if (!input || input.disabled) return null;

  // Custom-rendered checkboxes can visually hide the input itself — judge visibility by the
  // consent block, falling back to the input.
  var wrapper = input.closest('[data-automation-id^="formField-"]') || input.closest('[data-automation-id="createAccountCheckbox"]') || input.parentElement;
  if (!isElementVisible(wrapper) && !isElementVisible(input)) return null;
  var question = (wrapper ? getFieldQuestionText(wrapper) : '') || cleanQuestionText(getChoiceInputLabelText(input, '')) || CREATE_ACCOUNT_CONSENT_FALLBACK_QUESTION;
  return {
    question: question,
    fieldId: CREATE_ACCOUNT_CONSENT_FIELD_ID,
    field: wrapper !== null && wrapper !== void 0 ? wrapper : input,
    answerType: 'single-select',
    fieldKind: 'checkbox',
    options: ['Yes', 'No'],
    constraints: {
      required: true
    },
    dependsOnPrevious: false
  };
}

// The Voluntary Disclosures step's "Terms and Conditions" block ends in a lone required "I agree"
// checkbox (termsAndConditions--acceptTermsAndAgreements). Its label is only "I agree" — the
// certification paragraph is a richText block outside the formField — so the engine got a bare
// "I agree" Yes/No with no context and answered No or blank about 1 time in 18 (uw.wd5,
// digitalturbine.wd501, expedia.wd108, prod 2026-10-17..20): the box stayed unticked and Save and
// Continue failed "Field and Value required". Like the account-creation consent it is an
// attestation the apply flow already implies, so it resolves to Yes locally (no getAnswer).
var TERMS_AGREEMENT_FIELD_ID_PATTERN = /--acceptTermsAndAgreements$/;
function isTermsAgreementFieldId(fieldId) {
  return TERMS_AGREEMENT_FIELD_ID_PATTERN.test(String(fieldId !== null && fieldId !== void 0 ? fieldId : ''));
}
function detectAutofillFields() {
  var stepRoot = getCurrentStepRoot();
  if (!stepRoot) return [];
  if (stepRoot.getAttribute('data-automation-id') === 'applyFlowMyExpPage') {
    return detectExperienceFields(stepRoot);
  }
  var questions = detectStandardFields(stepRoot);
  var consentField = detectCreateAccountConsentField();
  if (consentField) {
    // Tenant-dependent, the consent input may ALSO sit inside a formField- wrapper the standard
    // sweep emits under its unstable input id — drop that duplicate and keep only the dedicated
    // stable-id entry (appended last: it is the final control before the Create Account submit).
    var consentInput = getCreateAccountConsentInput();
    questions = [].concat(autofill_toConsumableArray(questions.filter(function (entry) {
      var _entry$field, _entry$field$contains;
      return !(consentInput && (_entry$field = entry.field) !== null && _entry$field !== void 0 && (_entry$field$contains = _entry$field.contains) !== null && _entry$field$contains !== void 0 && _entry$field$contains.call(_entry$field, consentInput));
    })), [consentField]);
  }
  questions = chainPhoneCodeAfterCountry(questions);

  // The Sign In step's "verify your account" bounce is its own field entry (see
  // detectAccountVerificationField), emitted next to the email/password entries — never a hidden
  // side flow. It renders AFTER the failed Sign In as an SPA banner update (no navigation), and
  // detection re-runs on every DOM mutation, so the banner is picked up as one more question.
  var accountVerificationField = detectAccountVerificationField(stepRoot);
  if (accountVerificationField) questions.push(accountVerificationField);
  return questions;
}
function isPlaceholderAnswer(value) {
  var normalized = normalizeComparisonText(value);
  return !normalized || normalized === 'n/a' || normalized === 'na' || normalized === 'not applicable';
}
function splitAnswerList(answer) {
  if (Array.isArray(answer)) {
    return answer.map(function (value) {
      return normalizeWorkdayText(value);
    }).filter(function (value) {
      return !isPlaceholderAnswer(value);
    });
  }
  var normalized = normalizeWorkdayText(answer);
  if (isPlaceholderAnswer(normalized)) return [];
  return normalized.split(/\n|;|,(?!\d)/).map(function (value) {
    return normalizeWorkdayText(value);
  }).filter(function (value) {
    return !isPlaceholderAnswer(value);
  });
}
function capWorkdaySkills(values) {
  var seen = new Set();
  return values.filter(function (value) {
    var key = normalizeComparisonText(value);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, WORKDAY_MAX_SKILLS);
}
var SKILL_MATCH_STOP_WORDS = new Set(['an', 'and', 'for', 'in', 'of', 'on', 'the', 'to', 'with']);

// Hyphens, dots and symbols stay inside a word, so "SQL" is not "U-SQL" and "C++" stays "c++".
// Every dash reads as "-": the answer engine writes "Scikit‑learn" with a non-breaking hyphen
// (U+2011) where Workday's catalogue has "scikit-learn" (carrier.wd5, prod 2026-10-20).
// A library's ".js" suffix is dropped, so "React" takes Workday's "React.js" (veradigm.wd12, prod
// 2026-10-20) while "Java" still refuses "Java.net".
function getSkillMatchWords(value) {
  return normalizeComparisonText(value).replace(/[\u2010-\u2015\u2212]/g, '-').split(/[\s()[\],;/]+/).map(function (word) {
    return word.replace(/^[.:-]+|[.:-]+$/g, '').replace(/^(.{2,}?)\.?js$/, '$1');
  }).filter(function (word) {
    return word && !SKILL_MATCH_STOP_WORDS.has(word);
  });
}

// Workday's skill search answers with whatever it has and the closest-option pick falls back to the
// first hit, so unrelated skills landed on applications: "RAGAS" → "Raku Tongs", "W&B" → "Bias for
// Action", "MCP" → "MCC Panel" (cisco.wd5, prod 2026-10-20). A skill only takes an option that shares
// a word with it; a one-letter word counts only when it is the whole skill ("R").
function isPlausibleSkillOption(skill, optionText) {
  var skillWords = getSkillMatchWords(skill);
  var optionWords = new Set(getSkillMatchWords(optionText));
  return skillWords.some(function (word) {
    return optionWords.has(word) && (word.length > 1 || skillWords.length === 1);
  });
}
function getListboxOptionText(option) {
  var _option$querySelector, _option$getAttribute;
  var promptOption = option === null || option === void 0 || (_option$querySelector = option.querySelector) === null || _option$querySelector === void 0 ? void 0 : _option$querySelector.call(option, '[data-automation-id="promptOption"]');
  return normalizeWorkdayText((promptOption === null || promptOption === void 0 ? void 0 : promptOption.getAttribute('data-automation-label')) || (promptOption === null || promptOption === void 0 ? void 0 : promptOption.textContent) || (option === null || option === void 0 || (_option$getAttribute = option.getAttribute) === null || _option$getAttribute === void 0 || (_option$getAttribute = _option$getAttribute.call(option, 'aria-label')) === null || _option$getAttribute === void 0 ? void 0 : _option$getAttribute.replace(/\s+(not\s+)?checked$/i, '')) || (option === null || option === void 0 ? void 0 : option.textContent));
}
function isEmptyListboxOption(option) {
  var normalizedText = normalizeComparisonText(getListboxOptionText(option)).replace(/\.$/, '');
  // "No matches found" heads a nested prompt's category list after a search found no leaf.
  return normalizedText === 'no items' || normalizedText === 'no matches found';
}
function getListboxOptionEntries(listbox) {
  if (!listbox) return [];
  return Array.from(listbox.querySelectorAll('[role="option"]')).filter(function (option) {
    return isElementVisible(option) && option.getAttribute('aria-disabled') !== 'true';
  }).filter(function (option) {
    return !isEmptyListboxOption(option);
  }).map(function (option) {
    var _ref2, _option$getAttribute2;
    var promptOption = option.querySelector('[data-automation-id="promptOption"]');
    return {
      element: option,
      clickTarget: promptOption || option.querySelector('[data-automation-id="promptLeafNode"]') || option,
      text: getListboxOptionText(option),
      value: (_ref2 = (_option$getAttribute2 = option.getAttribute('data-value')) !== null && _option$getAttribute2 !== void 0 ? _option$getAttribute2 : option.id) !== null && _ref2 !== void 0 ? _ref2 : ''
    };
  }).filter(function (option) {
    return option.text;
  });
}
function getVisibleInteractiveListboxState() {
  var visibleListboxes = Array.from(document.querySelectorAll('[role="listbox"]')).filter(function (listbox) {
    return isElementVisible(listbox);
  }).filter(function (listbox) {
    return listbox.getAttribute('data-automation-id') !== 'selectedItemList';
  });
  var readyListbox = visibleListboxes.find(function (listbox) {
    return getListboxOptionEntries(listbox).length > 0;
  });
  if (readyListbox) {
    return {
      type: 'ready',
      listbox: readyListbox
    };
  }
  var emptyListbox = visibleListboxes.find(function (listbox) {
    return Array.from(listbox.querySelectorAll('[role="option"]')).some(function (option) {
      return isEmptyListboxOption(option);
    });
  });
  if (emptyListbox) {
    return {
      type: 'empty',
      listbox: emptyListbox
    };
  }
  var loadingPrompt = Array.from(document.querySelectorAll('[data-automation-id="responsiveMonikerPrompt"]')).filter(function (prompt) {
    return isElementVisible(prompt);
  }).find(function (prompt) {
    return prompt.getAttribute('aria-busy') === 'true';
  });
  if (loadingPrompt) {
    return {
      type: 'loading',
      prompt: loadingPrompt
    };
  }
  return null;
}
function getVisibleInteractiveListbox() {
  var _getVisibleInteractiv;
  return ((_getVisibleInteractiv = getVisibleInteractiveListboxState()) === null || _getVisibleInteractiv === void 0 ? void 0 : _getVisibleInteractiv.type) === 'ready' ? getVisibleInteractiveListboxState().listbox : null;
}
function getVisibleInteractivePopup() {
  // const promptPopup = Array.from(document.querySelectorAll('[data-automation-id="responsiveMonikerPrompt"]'))
  //   .filter((prompt) => isElementVisible(prompt))
  //   .map((prompt) => prompt.closest('[data-behavior-click-outside-close="always"]') || prompt)
  //   .find(Boolean);
  // if (promptPopup) return promptPopup;

  // const listboxState = getVisibleInteractiveListboxState();
  // const listbox = listboxState?.listbox;
  // if (!listbox) return null;

  // return listbox.closest('[data-behavior-click-outside-close="always"]') || listbox;

  return document.querySelector('[data-behavior-click-outside-close="always"]') || document.querySelector('[data-behavior-click-outside-close="topmost"]');
}

// Workday answers some prompt searches with no popup at all. On ghr.wd1's School prompt a miss sends
// GET …/schools?search=<term> (200) and renders nothing: no "No Items" row, no notice, no pill (lab
// 2026-10-20, DOM probed 1.5 s and 4 s after Enter), so the wait ran out and read as "the search
// never answered". The page's own resource timing tells the two apart: a search for exactly the
// typed term that came back, with the prompt still silent a moment later, is a miss.
var PROMPT_SILENT_MISS_MS = 1000;
var answeredPromptSearches = [];
var promptSearchObserver = null;
function watchPromptSearches() {
  if (promptSearchObserver || typeof PerformanceObserver !== 'function') return;
  try {
    promptSearchObserver = new PerformanceObserver(function (list) {
      answeredPromptSearches.push.apply(answeredPromptSearches, autofill_toConsumableArray(list.getEntries().filter(function (entry) {
        return /[?&]search=/.test(entry.name);
      })));
      answeredPromptSearches.splice(0, Math.max(0, answeredPromptSearches.length - 50));
    });
    promptSearchObserver.observe({
      type: 'resource',
      buffered: true
    });
  } catch (_error) {
    promptSearchObserver = null;
  }
}

// When the typed term's search came back (performance.now() clock), or null.
function getPromptSearchAnsweredAt(term, since) {
  var _performance$getEntri, _performance$getEntri2, _performance;
  var wanted = normalizeComparisonText(term);
  var entries = [].concat(answeredPromptSearches, autofill_toConsumableArray((_performance$getEntri = (_performance$getEntri2 = (_performance = performance).getEntriesByType) === null || _performance$getEntri2 === void 0 ? void 0 : _performance$getEntri2.call(_performance, 'resource')) !== null && _performance$getEntri !== void 0 ? _performance$getEntri : []));
  var answered = entries.find(function (entry) {
    if (!(entry.startTime >= since) || !(entry.responseEnd > 0)) return false;
    try {
      return normalizeComparisonText(new URL(entry.name, location.href).searchParams.get('search')) === wanted;
    } catch (_error) {
      return false;
    }
  });
  return answered ? answered.responseEnd : null;
}
function clickWorkdayOption(option) {
  var target = (option === null || option === void 0 ? void 0 : option.clickTarget) || (option === null || option === void 0 ? void 0 : option.element);
  if (!(target instanceof Element)) return false;
  target.click();
  return true;
}
function selectButtonShowsOption(button, option) {
  if (!button) return false;
  var optionText = normalizeComparisonText(option);
  return optionText && normalizeComparisonText(button.textContent) === optionText;
}
function waitForSelectCommit(_x3, _x4, _x5, _x6) {
  return _waitForSelectCommit.apply(this, arguments);
}
function _waitForSelectCommit() {
  _waitForSelectCommit = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee25(fieldId, field, optionText, shouldAbort) {
    var _t12;
    return autofill_regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          _t12 = Boolean;
          _context26.n = 1;
          return waitForPositiveResultWithAbort(function () {
            var button = getSelectButton(resolveLiveField(fieldId, field));
            return selectButtonShowsOption(button, optionText) ? true : null;
          }, SELECT_COMMIT_WAIT_TIMEOUT_MS, shouldAbort, 50);
        case 1:
          return _context26.a(2, _t12(_context26.v));
      }
    }, _callee25);
  }));
  return _waitForSelectCommit.apply(this, arguments);
}
function getWorkdayButtonText(button) {
  var _button$getAttribute, _button$getAttribute2;
  return normalizeWorkdayText((button === null || button === void 0 || (_button$getAttribute = button.getAttribute) === null || _button$getAttribute === void 0 ? void 0 : _button$getAttribute.call(button, 'aria-label')) || (button === null || button === void 0 || (_button$getAttribute2 = button.getAttribute) === null || _button$getAttribute2 === void 0 ? void 0 : _button$getAttribute2.call(button, 'data-automation-label')) || (button === null || button === void 0 ? void 0 : button.textContent) || (button === null || button === void 0 ? void 0 : button.innerText) || '');
}
function getWorkdayButtonRank(button, buttonText) {
  var _button$getAttribute3;
  var automationId = normalizeComparisonText(button === null || button === void 0 || (_button$getAttribute3 = button.getAttribute) === null || _button$getAttribute3 === void 0 ? void 0 : _button$getAttribute3.call(button, 'data-automation-id'));
  var normalizedText = normalizeComparisonText(buttonText);
  if (/next|continue/.test(automationId) || /\b(next|continue)\b/.test(normalizedText)) return 0;
  if (/review|preview/.test(automationId) || /\b(review|preview)\b/.test(normalizedText)) return 1;
  return 2;
}

// Is the current page a Workday job detail/listing page (not yet in the apply flow)?
function isWorkdayDetailPage() {
  return Boolean(document.querySelector('[data-automation-id="jobPostingHeader"]')) && !getWorkdayApplyPage();
}

// Finds the primary "Apply" button on the job detail page. Only valid when not already in the
// apply flow, to avoid misidentifying buttons inside the form.
function getWorkdayDetailApplyButton() {
  if (!isWorkdayDetailPage()) return null;
  var byAutomationId = document.querySelector('[data-automation-id="applyButton"]');
  if (byAutomationId && isElementVisible(byAutomationId)) return byAutomationId;
  var _iterator2 = autofill_createForOfIteratorHelper(document.querySelectorAll('button, a[role="button"]')),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;
      if (!isElementVisible(element)) continue;
      var text = normalizeWorkdayText(element.getAttribute('aria-label') || element.textContent || '');
      // Match bare "Apply" or "Apply Now" / "Apply for Job" but not "Applied", "Apply with ...", etc.
      if (/^apply(\s+(now|for\s+\w+))?$/i.test(text)) return element;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return null;
}

// Checks whether a Workday apply-method dialog (e.g. "Apply Manually" vs "Apply with LinkedIn")
// is currently open. Excludes our own panel host.
function isWorkdayApplyDialogOpen() {
  var candidates = document.querySelectorAll('[data-automation-id="applyManually"], [role="dialog"], dialog[open], [aria-modal="true"]');
  var _iterator3 = autofill_createForOfIteratorHelper(candidates),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var el = _step3.value;
      if (el.id === 'bidhub-panel-host' || el.closest('#bidhub-panel-host')) continue;
      if (isElementVisible(el)) return true;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return false;
}

// Finds the "Apply manually" button inside the apply-method selection dialog.
// Only the manual-apply option should be clicked for autonext; LinkedIn / other shortcuts are excluded.
function getWorkdayApplyManuallyButton() {
  if (!isWorkdayApplyDialogOpen()) return null;

  // Workday's own automation ID for the manual-apply option
  for (var _i = 0, _arr = ['applyManually', 'manualApplyButton', 'apply-manually']; _i < _arr.length; _i++) {
    var id = _arr[_i];
    var el = document.querySelector("[data-automation-id=\"".concat(id, "\"]"));
    if (el && isElementVisible(el)) return el;
  }

  // Text-based fallback: search inside visible dialog overlays
  var _iterator4 = autofill_createForOfIteratorHelper(document.querySelectorAll('[role="dialog"], dialog[open], [aria-modal="true"]')),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var dialog = _step4.value;
      if (dialog.id === 'bidhub-panel-host' || dialog.closest('#bidhub-panel-host')) continue;
      if (!isElementVisible(dialog)) continue;
      var _iterator5 = autofill_createForOfIteratorHelper(dialog.querySelectorAll('button, a[role="button"], a')),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var button = _step5.value;
          if (!isElementVisible(button)) continue;
          var text = normalizeWorkdayText(button.getAttribute('aria-label') || button.textContent || '');
          if (/\bapply\s+manually\b/i.test(text)) return button;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return null;
}

// Resolves the interactive click target for a Workday auth button. Workday renders some auth buttons as
// aria-hidden <button> elements (aria-hidden="true", tabindex="-2") with a sibling
// [data-automation-id="click_filter"] div as the actual React-handled click target — click the
// click_filter when present, not the hidden button itself. Returns null when the button is missing or
// no candidate is visible.
function getWorkdayAuthClickTarget(button) {
  var _button$parentElement;
  if (!(button instanceof Element)) return null;
  var clickFilter = (_button$parentElement = button.parentElement) === null || _button$parentElement === void 0 ? void 0 : _button$parentElement.querySelector('[data-automation-id="click_filter"]');
  if (clickFilter && isElementVisible(clickFilter)) return clickFilter;
  return isElementVisible(button) ? button : null;
}

// Whether the email/password form (sign-in or create-account) is currently rendered inside the auth
// step — distinguishes the social-login chooser (no form yet) from the revealed email form.
function hasWorkdayEmailAuthForm(stepRoot) {
  var _stepRoot$querySelect;
  return Boolean(stepRoot === null || stepRoot === void 0 || (_stepRoot$querySelect = stepRoot.querySelector) === null || _stepRoot$querySelect === void 0 ? void 0 : _stepRoot$querySelect.call(stepRoot, '[data-automation-id="email"], [data-automation-id="password"], [data-automation-id="signInSubmitButton"], [data-automation-id="createAccountSubmitButton"]'));
}

// Finds the interactive target for the current auth step.
//
// The auth step can first render a social-login chooser (Apple/Google/LinkedIn + "Sign in with
// email") with NO email form yet — return the "Sign in with email" button so advanceWorkdayAutofillFlow
// clicks it to reveal the email/password form. Once the form is shown, the target is the Sign In /
// Create Account submit (via its click_filter overlay).
function getWorkdaySignInStepButton() {
  var stepRoot = getCurrentStepRoot();
  if (!stepRoot || stepRoot.getAttribute('data-automation-id') !== 'signInContent') return null;

  // Social-login chooser (no email form yet): reveal it via "Sign in with email".
  if (!hasWorkdayEmailAuthForm(stepRoot)) {
    var emailReveal = getWorkdayAuthClickTarget(stepRoot.querySelector('[data-automation-id="SignInWithEmailButton"]'));
    console.log('[bidhub][workday] getWorkdaySignInStepButton: email reveal button', {
      emailReveal: emailReveal
    });
    if (emailReveal) return emailReveal;
  }
  for (var _i2 = 0, _arr2 = ['signInSubmitButton', 'createAccountSubmitButton']; _i2 < _arr2.length; _i2++) {
    var btnId = _arr2[_i2];
    var target = getWorkdayAuthClickTarget(stepRoot.querySelector("[data-automation-id=\"".concat(btnId, "\"]")));
    if (target) return target;
  }
  return null;
}
function getWorkdaySubmitButton() {
  var btn = document.querySelector('[data-automation-id="pageFooterNextButton"]');
  if (!btn || !isElementVisible(btn)) return null;
  var text = getWorkdayButtonText(btn);
  if (!UNSAFE_ADVANCE_BUTTON_TEXT_PATTERN.test(text)) return null;
  return btn;
}
function detectWorkdaySubmitButton() {
  var btn = getWorkdaySubmitButton();
  if (!btn) return {
    detected: false
  };
  return {
    detected: true,
    label: getWorkdayButtonText(btn),
    disabled: Boolean(btn.disabled || btn.getAttribute('aria-disabled') === 'true')
  };
}

// The Sign In press already landed: Workday accepted the credentials (the header swapped its
// "Sign In" utility button for the signed-in account menu) but the apply flow still renders the
// Sign In step. RTX's tenant (globalhr.wd5, 2026-10-19/20) answers POST /login with 303 in under a
// second, yet on some presses keeps the filled Sign In form on screen indefinitely (lab: 90 s, no
// move) while on others My Information renders within 2 s. The 8 s advance clock handed the stuck
// ones off as 'advance'; luna / the doctor saw "a sign-in page" and handed them to a human, and the
// remote assistant's one more Sign In press moved the flow on within ~10 s every time. A visible
// verification / wrong-password notice is a real bounce, never "completing" (the
// account-verification field and the auth_signin_failed page state own those).
function isWorkdaySignInCompleting(stepRoot) {
  if (!stepRoot || stepRoot.getAttribute('data-automation-id') !== 'signInContent') return false;
  if (getWorkdaySignInVerificationNotice(stepRoot)) return false;
  var accountMenu = document.querySelector('[data-automation-id="utilityButtonAccountTasksMenu"]');
  return Boolean(accountMenu && isElementVisible(accountMenu));
}

// How long an accepted Sign In press may leave the Sign In step on screen before the one re-press.
var WORKDAY_SIGN_IN_REPRESS_MS = 10000;
var workdaySignInRepressed = false;

// Fire-and-forget after the Sign In press (outside the DOM mutex — nothing else runs on a stuck
// auth step): still signed in and still on Sign In after the window → press Sign In ONCE more per
// page load. The advance clock is kept waiting meanwhile by detectWorkdayAdvanceButton's busy flag,
// so the re-press lands inside the original advance window instead of after a handoff.
function repressWorkdaySignInIfStuck() {
  return _repressWorkdaySignInIfStuck.apply(this, arguments);
} // Workday answers a step save that died server-side (a section POST dropped mid-flight, a
// "VPS|<uuid>" backend error) with an Errors Found box whose only entry reads "Error - Page Error",
// with "Network Error" / "Error Code: VPS|..." beneath it. Nothing on the page is wrong: the same
// Save and Continue pressed again goes through (pureinsurance.wd5 2026-10-19: 3 of 3 cleared on one
// re-press). A field-level error names the field instead ("Error - Degree"), so it never matches.
// Walks text nodes, not elements: the My Experience step carries thousands of nodes and only a
// handful of text nodes ever mention "page error".
function _repressWorkdaySignInIfStuck() {
  _repressWorkdaySignInIfStuck = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee26() {
    var target;
    return autofill_regenerator().w(function (_context27) {
      while (1) switch (_context27.n) {
        case 0:
          _context27.n = 1;
          return sleep(WORKDAY_SIGN_IN_REPRESS_MS);
        case 1:
          if (!(workdaySignInRepressed || !isWorkdaySignInCompleting(getCurrentStepRoot()))) {
            _context27.n = 2;
            break;
          }
          return _context27.a(2);
        case 2:
          target = getWorkdaySignInStepButton();
          if (target) {
            _context27.n = 3;
            break;
          }
          return _context27.a(2);
        case 3:
          workdaySignInRepressed = true;
          console.log('[bidhub][workday] sign-in accepted but the Sign In step stuck — pressing Sign In once more');
          _context27.n = 4;
          return clickWorkdayButton(target);
        case 4:
          return _context27.a(2);
      }
    }, _callee26);
  }));
  return _repressWorkdaySignInIfStuck.apply(this, arguments);
}
var WORKDAY_PAGE_ERROR_TEXT_PATTERN = /^(?:error\s*-\s*)?page error$/i;
function hasWorkdayPageError() {
  var page = getWorkdayApplyPage();
  if (!page) return false;
  var walker = document.createTreeWalker(page, NodeFilter.SHOW_TEXT);
  for (var node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!/page error/i.test(node.nodeValue || '')) continue;
    var element = node.parentElement;
    if (!element || element.closest('textarea, input, [contenteditable="true"]')) continue;
    if (!WORKDAY_PAGE_ERROR_TEXT_PATTERN.test(normalizeWorkdayText(element.textContent))) continue;
    if (isElementVisible(element)) return true;
  }
  return false;
}

// Workday's answer model sometimes drops a value the fill already wrote while it takes the NEXT
// question's change: the salary box kept showing its text, or the government-service "No" box went
// unticked, and Save and Continue answered "The field … is required and must have a value"
// (humana.wd5 2026-10-20: one lost answer per run, a different one each time; re-typing that one
// answer and pressing again went through 4 of 4). Drop-downs lose theirs the same way: USAA's
// questionnaire inserts a sponsorship question once the work-authorization answer lands, and the
// military drop-down picked just below it went back to "Select One" (usaa.wd1 2026-10-21, 3 of 5
// doctor sessions). The fill remembers what it wrote per control, so a press Workday refuses on a
// control we answered can re-commit it and press once more.
var workdayFilledAnswers = new Map();
function rememberWorkdayFill(fieldId, kind, answer) {
  if (!fieldId || answer == null || answer === '') return;
  workdayFilledAnswers.set(fieldId, {
    kind: kind,
    answer: answer
  });
}

// The remembered controls Workday currently marks invalid (aria-invalid on the control or the
// checkbox group's fieldset) on the visible step.
function getRefusedWorkdayFills() {
  var page = getWorkdayApplyPage();
  if (!page) return [];
  var refused = [];
  var _iterator6 = autofill_createForOfIteratorHelper(workdayFilledAnswers),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _step6$value = autofill_slicedToArray(_step6.value, 2),
        fieldId = _step6$value[0],
        fill = _step6$value[1];
      var field = resolveLiveField(fieldId, null);
      if (!field || !page.contains(field) || !isElementVisible(field)) continue;
      if (field.getAttribute('aria-invalid') !== 'true' && !field.querySelector('[aria-invalid="true"]')) continue;
      refused.push(autofill_objectSpread({
        fieldId: fieldId,
        field: field
      }, fill));
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  return refused;
}
function repairRefusedWorkdayFills() {
  return _repairRefusedWorkdayFills.apply(this, arguments);
} // Non-mutating advance probe (takeover panel adaptive label — "Snapshot & Continue" vs plain
// "Snapshot"): does the page currently show an actionable NON-final forward control, i.e.
// anything advanceWorkdayAutofillFlow would click — the auth-step button, Apply / Apply Manually,
// or the footer Next/Continue/Review? The final Submit is excluded by construction:
// getSafeWorkdayAdvanceButton's SAFE/UNSAFE text split already rejects submit-labelled buttons,
// so a Review page whose only forward control is Submit reports detected:false and the panel
// labels off submitButton instead. `transientError` rides an enabled footer control when the page
// shows Workday's server-side Page Error (see hasWorkdayPageError), or calls a control the fill
// answered empty (see getRefusedWorkdayFills): the background's advance clock re-presses once
// instead of handing the row off, and that press re-commits the refused answers first.
function _repairRefusedWorkdayFills() {
  _repairRefusedWorkdayFills = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee27() {
    var refused, _iterator10, _step10, _step10$value, fieldId, field, kind, answer, _FIELD_KIND_HANDLERS$, control, _t13, _t14;
    return autofill_regenerator().w(function (_context28) {
      while (1) switch (_context28.p = _context28.n) {
        case 0:
          refused = getRefusedWorkdayFills();
          _iterator10 = autofill_createForOfIteratorHelper(refused);
          _context28.p = 1;
          _iterator10.s();
        case 2:
          if ((_step10 = _iterator10.n()).done) {
            _context28.n = 9;
            break;
          }
          _step10$value = _step10.value, fieldId = _step10$value.fieldId, field = _step10$value.field, kind = _step10$value.kind, answer = _step10$value.answer;
          console.log('[bidhub][workday] re-committing an answer Workday called empty', {
            fieldId: fieldId,
            kind: kind
          });
          _context28.p = 3;
          if (!(kind === 'text' || kind === 'textarea')) {
            _context28.n = 5;
            break;
          }
          // The box still SHOWS the answer, and writing the same text again is no change to React
          // (no onChange, the model stays empty): clear it first so the re-write is a real change.
          control = kind === 'textarea' ? getTextarea(field) : getVisibleTextInput(field);
          if (control) {
            _context28.n = 4;
            break;
          }
          return _context28.a(3, 8);
        case 4:
          writeReactTextValue(control, '');
        case 5:
          _context28.n = 6;
          return (_FIELD_KIND_HANDLERS$ = FIELD_KIND_HANDLERS.get(kind)) === null || _FIELD_KIND_HANDLERS$ === void 0 ? void 0 : _FIELD_KIND_HANDLERS$(fieldId, '', answer, field);
        case 6:
          _context28.n = 8;
          break;
        case 7:
          _context28.p = 7;
          _t13 = _context28.v;
          console.warn('[bidhub][workday] re-commit failed', {
            fieldId: fieldId,
            error: (_t13 === null || _t13 === void 0 ? void 0 : _t13.message) || _t13
          });
        case 8:
          _context28.n = 2;
          break;
        case 9:
          _context28.n = 11;
          break;
        case 10:
          _context28.p = 10;
          _t14 = _context28.v;
          _iterator10.e(_t14);
        case 11:
          _context28.p = 11;
          _iterator10.f();
          return _context28.f(11);
        case 12:
          if (!(refused.length > 0)) {
            _context28.n = 13;
            break;
          }
          _context28.n = 13;
          return sleep(FIELD_ERROR_REPAIR_SETTLE_MS);
        case 13:
          return _context28.a(2, refused.length);
      }
    }, _callee27, null, [[3, 7], [1, 10, 11, 12]]);
  }));
  return _repairRefusedWorkdayFills.apply(this, arguments);
}
function detectWorkdayAdvanceButton() {
  var signInStepButton = getWorkdaySignInStepButton();
  if (signInStepButton) {
    var label = getWorkdayButtonText(signInStepButton) || 'Sign In';
    // Signed in, flow not re-rendered yet: present-but-busy, like a disabled Save and Continue.
    // The background's advance clock keeps waiting (ADVANCE_BUSY_MAX_WAIT_MS-bounded) instead of
    // handing the row off. The click path (advanceWorkdayAutofillFlow) never reads this flag.
    if (isWorkdaySignInCompleting(getCurrentStepRoot())) return {
      detected: true,
      label: label,
      disabled: true
    };
    return {
      detected: true,
      label: label
    };
  }
  var applyManuallyButton = getWorkdayApplyManuallyButton();
  if (applyManuallyButton) {
    return {
      detected: true,
      label: getWorkdayButtonText(applyManuallyButton) || 'Apply Manually'
    };
  }
  var detailApplyButton = getWorkdayDetailApplyButton();
  if (detailApplyButton) {
    return {
      detected: true,
      label: getWorkdayButtonText(detailApplyButton) || 'Apply'
    };
  }
  var advanceButton = getSafeWorkdayAdvanceButton();
  if (advanceButton) {
    var probe = {
      detected: true,
      label: getWorkdayButtonText(advanceButton)
    };
    if (hasWorkdayPageError() || getRefusedWorkdayFills().length > 0) probe.transientError = true;
    return probe;
  }

  // A DISABLED footer Next/Continue = a step save in flight (see getBusyWorkdayAdvanceButton).
  // Same shape as the submit probe: consumers read detected+disabled as "present, not actionable
  // yet" — the background's advance clock keeps waiting instead of handing the row off.
  var busyButton = getBusyWorkdayAdvanceButton();
  if (busyButton) {
    return {
      detected: true,
      label: getWorkdayButtonText(busyButton),
      disabled: true
    };
  }
  return {
    detected: false
  };
}
function isWorkdayAutofillAvailable() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    fieldCount = _ref3.fieldCount,
    submitButton = _ref3.submitButton;
  if (fieldCount > 0) return true;
  if (submitButton !== null && submitButton !== void 0 && submitButton.detected) return true;
  if (getWorkdayApplyManuallyButton()) return true;
  if (getWorkdayDetailApplyButton()) return true;
  if (getWorkdaySignInStepButton()) return true;
  return Boolean(getSafeWorkdayAdvanceButton());
}
function isWorkdayButtonDisabled(button) {
  return Boolean(button.disabled || button.getAttribute('aria-disabled') === 'true');
}

// allowDisabled: judge the button on label/automation-id alone (getBusyWorkdayAdvanceButton looks
// for the safe advance target in its DISABLED state); the default rejects disabled buttons.
function isSafeWorkdayAdvanceButton(button) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref4$allowDisabled = _ref4.allowDisabled,
    allowDisabled = _ref4$allowDisabled === void 0 ? false : _ref4$allowDisabled;
  if (!(button instanceof Element) || !isElementVisible(button)) return false;
  if (!allowDisabled && isWorkdayButtonDisabled(button)) return false;
  var buttonText = getWorkdayButtonText(button);
  var automationId = normalizeComparisonText(button.getAttribute('data-automation-id'));
  var searchableText = normalizeWorkdayText("".concat(buttonText, " ").concat(automationId));
  var hasSafeAutomationId = /next|continue|review|preview/.test(automationId);
  var hasUnsafeAutomationId = /submit|apply|complete|finish|done|send/.test(automationId);
  var hasNonAdvanceAutomationId = /back|previous|cancel|close|delete|remove|upload|browse|choose|skip/.test(automationId);
  if (!hasSafeAutomationId && !SAFE_ADVANCE_BUTTON_TEXT_PATTERN.test(searchableText)) return false;
  if (hasUnsafeAutomationId || UNSAFE_ADVANCE_BUTTON_TEXT_PATTERN.test(searchableText)) return false;
  if (hasNonAdvanceAutomationId || NON_ADVANCE_BUTTON_TEXT_PATTERN.test(searchableText)) return false;
  return true;
}
function getSafeWorkdayAdvanceButton() {
  var page = getWorkdayApplyPage() || document;
  var buttons = Array.from(page.querySelectorAll('button, [role="button"]')).filter(function (button) {
    return isSafeWorkdayAdvanceButton(button);
  }).sort(function (left, right) {
    var leftRank = getWorkdayButtonRank(left, getWorkdayButtonText(left));
    var rightRank = getWorkdayButtonRank(right, getWorkdayButtonText(right));
    if (leftRank !== rightRank) return leftRank - rightRank;
    var leftRect = left.getBoundingClientRect();
    var rightRect = right.getBoundingClientRect();
    return rightRect.top + rightRect.left - (leftRect.top + leftRect.left);
  });
  return buttons[0] || null;
}

// The footer Next/Continue that WOULD be the safe advance target except that it is currently
// disabled — Workday's "step save in flight" state: the button is disabled for the whole server
// round-trip of Save and Continue and nothing else on the page changes (no spinner, no aria-busy).
// The My Experience save (work history + education + resume) routinely takes longer than the
// background's 8s advance window; without this signal it handed the row off as a stuck Continue.
function getBusyWorkdayAdvanceButton() {
  var page = getWorkdayApplyPage() || document;
  return Array.from(page.querySelectorAll('button, [role="button"]')).find(function (button) {
    return isSafeWorkdayAdvanceButton(button, {
      allowDisabled: true
    }) && isWorkdayButtonDisabled(button);
  }) || null;
}
function clickWorkdayButton(_x7) {
  return _clickWorkdayButton.apply(this, arguments);
} // Clicks the final Submit button. The shared submit path defaults to a bare button.click(),
// which Workday's footer button ignores — its React handler fires off the pointer/mouse sequence,
// and (like the sign-in submit) the real interactive target can be a sibling click_filter overlay
// rather than the aria-hidden <button> itself. So: click the click_filter when present, else the
// button, always via clickWorkdayButton's full pointerdown→click dispatch (the mechanism every
// other button in this flow uses). The log makes the submit attempt visible when diagnosing a
// stuck auto-apply — its ABSENCE means submitAutofillFlow never reached the page (an upstream gate),
// not a click problem.
function _clickWorkdayButton() {
  _clickWorkdayButton = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee28(button) {
    var _button$scrollIntoVie;
    return autofill_regenerator().w(function (_context29) {
      while (1) switch (_context29.n) {
        case 0:
          if (button instanceof Element) {
            _context29.n = 1;
            break;
          }
          return _context29.a(2, false);
        case 1:
          (_button$scrollIntoVie = button.scrollIntoView) === null || _button$scrollIntoVie === void 0 || _button$scrollIntoVie.call(button, {
            block: 'center',
            inline: 'nearest'
          });
          ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach(function (eventType) {
            button.dispatchEvent(new MouseEvent(eventType, {
              bubbles: true,
              cancelable: true,
              composed: true,
              view: window
            }));
          });
          return _context29.a(2, true);
      }
    }, _callee28);
  }));
  return _clickWorkdayButton.apply(this, arguments);
}
function clickWorkdaySubmitButton(_x8) {
  return _clickWorkdaySubmitButton.apply(this, arguments);
} // On the social-login chooser, click "Sign in with email" to reveal the email/password form. Resolves
// true when the form is (or becomes) present, false when neither the form nor the button exists.
function _clickWorkdaySubmitButton() {
  _clickWorkdaySubmitButton = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee29(button) {
    var _button$parentElement2;
    var clickFilter, target;
    return autofill_regenerator().w(function (_context30) {
      while (1) switch (_context30.n) {
        case 0:
          if (button instanceof Element) {
            _context30.n = 1;
            break;
          }
          return _context30.a(2, false);
        case 1:
          clickFilter = (_button$parentElement2 = button.parentElement) === null || _button$parentElement2 === void 0 ? void 0 : _button$parentElement2.querySelector('[data-automation-id="click_filter"]');
          target = clickFilter && isElementVisible(clickFilter) ? clickFilter : button; // eslint-disable-next-line no-console
          console.log('[bidhub][workday] submit click', {
            label: getWorkdayButtonText(button),
            usedClickFilter: target !== button,
            ariaDisabled: button.getAttribute('aria-disabled'),
            disabled: Boolean(button.disabled)
          });
          return _context30.a(2, clickWorkdayButton(target));
      }
    }, _callee29);
  }));
  return _clickWorkdaySubmitButton.apply(this, arguments);
}
function revealWorkdayEmailSignInForm() {
  return _revealWorkdayEmailSignInForm.apply(this, arguments);
} // --- Sign In account-verification field ---------------------------------------
//
// An UNVERIFIED candidate account shows one of two notices on the still-filled Sign In form, and
// both are modeled as ONE MORE (required) FIELD next to email/password — the Workday twin of
// Greenhouse's post-submit "Security code" (same 'verification_code' answerType/fieldKind):
//   - `[data-automation-id="alertMessage"]` right after Create Account: "An email has been sent to
//     you. Please verify your account." — the activation link is already in flight (2026-09-06 prod:
//     the email landed 10 s after this notice; the old detector ignored the notice, filled the form,
//     pressed Sign In and the 8 s advance clock handed the row off 3 s before the link was ingested);
//   - `[data-automation-id="errorMessage"]` after a Sign In press on an unverified account: "Verify
//     your account before you sign in or request a verification email." Sign In does NOT resend the
//     link (17 presses → 0 emails on the same row) — only the "Resend Account Verification" button
//     (`informationalBlurbButton`) does.
//   - detection: a separate entry with a stable fieldId, anchored on the notice ELEMENT only. No text
//     matching (tenants localize the copy);
//   - answer: the background polls the linked inbox for the emailed link; the SERVER visits it
//     (notification getVerification), so a returned link means the account is now verified. When the
//     poll comes back empty, press Resend (when rendered) and poll ONCE more; still nothing (or no
//     mailbox to poll) → the field is REQUIRED, so report the failure — the autoapply driver hands
//     the row to a human ('verification_failed') instead of skipping the field, whose "completed"
//     run used to re-press Sign In every ~2 min until the browser-run ceiling (2026-09-07);
//   - fill: nothing to type — the visit is the fill; the run completes and the engine's auto-advance
//     re-clicks Sign In on the still-filled form.
// Trade-off (deliberate): any other sign-in errorMessage also emits the entry (element-only anchor).
// The wrong-credentials / locked-account banner ("You may have entered the wrong email address or
// password or your account might be locked.") is handled ABOVE this field by the page-state config
// (page-states/state-transition.json `auth_signin_failed` → terminal fail on both lanes, first
// bid-counter tick): nobody can recover a rejected password, so the autoapply driver closes the tab
// before this field's inbox poll matters. Any remaining unknown errorMessage still polls → empty →
// the human handoff.
function _revealWorkdayEmailSignInForm() {
  _revealWorkdayEmailSignInForm = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee30() {
    var stepRoot, emailButton, _t15;
    return autofill_regenerator().w(function (_context31) {
      while (1) switch (_context31.n) {
        case 0:
          stepRoot = getCurrentStepRoot();
          if (stepRoot) {
            _context31.n = 1;
            break;
          }
          return _context31.a(2, false);
        case 1:
          if (!hasWorkdayEmailAuthForm(stepRoot)) {
            _context31.n = 2;
            break;
          }
          return _context31.a(2, true);
        case 2:
          emailButton = stepRoot.querySelector('[data-automation-id="SignInWithEmailButton"]');
          if (!(!emailButton || !isElementVisible(emailButton))) {
            _context31.n = 3;
            break;
          }
          return _context31.a(2, false);
        case 3:
          _context31.n = 4;
          return clickWorkdayButton(getWorkdayAuthClickTarget(emailButton) || emailButton);
        case 4:
          _t15 = Boolean;
          _context31.n = 5;
          return autofill_waitForPositiveResultWithAbort(function () {
            return hasWorkdayEmailAuthForm(getCurrentStepRoot()) ? true : null;
          }, WORKDAY_AUTH_FORM_WAIT_MS, autofill_NEVER_ABORT, 100);
        case 5:
          return _context31.a(2, _t15(_context31.v));
      }
    }, _callee30);
  }));
  return _revealWorkdayEmailSignInForm.apply(this, arguments);
}
var ACCOUNT_VERIFICATION_FIELD_ID = 'accountVerification';
var ACCOUNT_VERIFICATION_QUESTION = 'Account verification';
var WORKDAY_VERIFICATION_LINK_PATTERN = /^https:\/\/[^/]+\.myworkdayjobs\.com\//i;
var WORKDAY_SIGN_IN_NOTICE_SELECTOR = '[data-automation-id="errorMessage"], [data-automation-id="alertMessage"]';

// The visible sign-in verification notice element (error banner OR post-sign-up alert), or null off
// the Sign In step / when no notice is shown.
function getWorkdaySignInVerificationNotice(stepRoot) {
  if (!stepRoot || stepRoot.getAttribute('data-automation-id') !== 'signInContent') return null;
  var _iterator7 = autofill_createForOfIteratorHelper(stepRoot.querySelectorAll(WORKDAY_SIGN_IN_NOTICE_SELECTOR)),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var noticeEl = _step7.value;
      if (isElementVisible(noticeEl)) return noticeEl;
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return null;
}

// The "Resend Account Verification" button on the Sign In step (rendered with the errorMessage
// bounce on most tenants; absent right after Create Account, when the email is already in flight).
function getWorkdayResendVerificationButton() {
  var stepRoot = getCurrentStepRoot();
  if (!stepRoot || stepRoot.getAttribute('data-automation-id') !== 'signInContent') return null;
  var button = stepRoot.querySelector('[data-automation-id="informationalBlurbButton"]');
  return button && isElementVisible(button) ? button : null;
}
function detectAccountVerificationField(stepRoot) {
  var noticeEl = getWorkdaySignInVerificationNotice(stepRoot);
  if (!noticeEl) return null;
  return {
    question: ACCOUNT_VERIFICATION_QUESTION,
    fieldId: ACCOUNT_VERIFICATION_FIELD_ID,
    field: noticeEl,
    answerType: 'verification_code',
    fieldKind: 'verification_code',
    constraints: {
      required: true
    },
    dependsOnPrevious: false
  };
}

// The inbox poll ended without a Workday activation link, or answered a non-Workday value.
function isWorkdayVerificationLink(value) {
  return typeof value === 'string' && WORKDAY_VERIFICATION_LINK_PATTERN.test(value);
}

// Required-field failure: the autoapply background hands the row to a human; the manual builds
// no-op. Never lets a reporting error mask the skip that follows.
function reportWorkdayVerificationFailure(_x9, _x0) {
  return _reportWorkdayVerificationFailure.apply(this, arguments);
} // Auth-step takeover (runs in ALL THREE builds — the resolvePlatformPasswordState handler is registered
// in the autoapply background AND the main/ambohire background), wired as the engine's
// `beforeStartAutofill` hook — it runs (under the DOM mutex) right before the engine detects/fills the
// current page. Its ONLY job on the sign-in step is to make the form match the credential vault; the
// engine then fills email + password(s) (all inside formField- wrappers, so normal detection covers
// them) and advanceFlow clicks Sign In / Create Account.
//   created:true  → no saved password for this tenant yet → CREATE ACCOUNT (the sign-up persists the pw)
//   created:false → a password is already saved           → SIGN IN
// Resolving the vault HERE, before any field fill, keeps it the FIRST resolve for the tenant so `created`
// is reliable (a password fill via getPasswordForAutofill would otherwise create the entry and flip it to
// false). When the toggle to Create Account is clicked, the hook returns false to CANCEL the run — the
// swapped-in sign-up form is effectively a new step, and filling it must go back through the background's
// auto-start gate (auto-start off → wait for the user's click; auto-start on / auto-apply → a fresh run
// starts, and this hook no-ops on the Create Account form so the engine fills it).
function _reportWorkdayVerificationFailure() {
  _reportWorkdayVerificationFailure = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee31(reason, detail) {
    var _t16;
    return autofill_regenerator().w(function (_context32) {
      while (1) switch (_context32.p = _context32.n) {
        case 0:
          _context32.p = 0;
          _context32.n = 1;
          return reportAutofillVerificationFailure({
            platform: 'myworkdayjobs',
            reason: reason,
            detail: detail
          });
        case 1:
          _context32.n = 3;
          break;
        case 2:
          _context32.p = 2;
          _t16 = _context32.v;
          console.warn('[bidhub][workday] verification failure report failed:', (_t16 === null || _t16 === void 0 ? void 0 : _t16.message) || _t16);
        case 3:
          return _context32.a(2);
      }
    }, _callee31, null, [[0, 2]]);
  }));
  return _reportWorkdayVerificationFailure.apply(this, arguments);
}
function driveWorkdayAuth() {
  return _driveWorkdayAuth.apply(this, arguments);
} // Nothing on the step is actionable yet (no fields, no auth/apply/advance/submit buttons) — almost
// always a step whose content is still rendering (see WORKDAY_STEP_RENDER_WAIT_MS). Wait for
// something to appear and act on it here, because a later detection cannot re-trigger an auto-start
// for this step (the shared empty-step signature was already consumed when this run started):
//   - fields / the email auth form → return false; detection re-reports them and the auto-start
//     re-gate fills them (checked BEFORE the sign-in button so a direct-rendered auth form is
//     filled rather than submitted empty);
//   - the social-login chooser → click "Sign in with email" now, in this run;
//   - a submit button → return false; the detection-driven submit path clicks it.
function _driveWorkdayAuth() {
  _driveWorkdayAuth = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee32() {
    var _passwordState, _getCurrentStepRoot2;
    var _ref41,
      _ref41$runActive,
      runActive,
      passwordState,
      settled,
      toggle,
      _args33 = arguments,
      _t17;
    return autofill_regenerator().w(function (_context33) {
      while (1) switch (_context33.p = _context33.n) {
        case 0:
          _ref41 = _args33.length > 0 && _args33[0] !== undefined ? _args33[0] : {}, _ref41$runActive = _ref41.runActive, runActive = _ref41$runActive === void 0 ? false : _ref41$runActive;
          console.log('[bidhub][workday] driveWorkdayAuth', {
            runActive: runActive
          });
          // A run is already filling this page (duplicate startAutofill from a re-detection or a racing
          // trigger) — never toggle the form mid-fill.
          if (!runActive) {
            _context33.n = 1;
            break;
          }
          return _context33.a(2);
        case 1:
          _context33.n = 2;
          return waitForWorkdayStepSettled();
        case 2:
          if (document.querySelector('[data-automation-id="password"]') && !document.querySelector('[data-automation-id="verifyPassword"]')) {
            _context33.n = 3;
            break;
          }
          return _context33.a(2);
        case 3:
          if (!getWorkdaySignInVerificationNotice(getCurrentStepRoot())) {
            _context33.n = 4;
            break;
          }
          return _context33.a(2);
        case 4:
          passwordState = null; // for (let attempt = 0; attempt < WORKDAY_AUTH_RESOLVE_MAX_ATTEMPTS; attempt++) {
          _context33.p = 5;
          _context33.n = 6;
          return resolvePlatformPasswordState();
        case 6:
          passwordState = _context33.v;
          _context33.n = 8;
          break;
        case 7:
          _context33.p = 7;
          _t17 = _context33.v;
          console.warn('[bidhub][workday] resolvePlatformPasswordState failed:', (_t17 === null || _t17 === void 0 ? void 0 : _t17.message) || _t17);
        case 8:
          if (!(typeof ((_passwordState = passwordState) === null || _passwordState === void 0 ? void 0 : _passwordState.created) !== 'boolean')) {
            _context33.n = 9;
            break;
          }
          return _context33.a(2);
        case 9:
          if (!(passwordState.created === false)) {
            _context33.n = 10;
            break;
          }
          return _context33.a(2);
        case 10:
          _context33.n = 11;
          return waitForPositiveResultWithAbort(function () {
            var root = getCurrentStepRoot();
            var toggle = root === null || root === void 0 ? void 0 : root.querySelector("[data-automation-id=\"createAccountLink\"]");
            return toggle && isElementVisible(toggle) ? 'toggle' : null;
          }, WORKDAY_AUTH_FORM_WAIT_MS, autofill_NEVER_ABORT, 100);
        case 11:
          settled = _context33.v;
          if (!(settled !== 'toggle')) {
            _context33.n = 12;
            break;
          }
          return _context33.a(2);
        case 12:
          toggle = getWorkdayAuthClickTarget((_getCurrentStepRoot2 = getCurrentStepRoot()) === null || _getCurrentStepRoot2 === void 0 ? void 0 : _getCurrentStepRoot2.querySelector("[data-automation-id=\"createAccountLink\"]"));
          if (toggle) {
            _context33.n = 13;
            break;
          }
          return _context33.a(2);
        case 13:
          _context33.n = 14;
          return clickWorkdayButton(toggle);
        case 14:
          _context33.n = 15;
          return waitForPositiveResultWithAbort(function () {
            var _getCurrentStepRoot3;
            return (_getCurrentStepRoot3 = getCurrentStepRoot()) !== null && _getCurrentStepRoot3 !== void 0 && _getCurrentStepRoot3.querySelector("[data-automation-id=\"createAccountSubmitButton\"]") ? true : null;
          }, WORKDAY_AUTH_FORM_WAIT_MS, autofill_NEVER_ABORT, 100);
        case 15:
          return _context33.a(2, false);
      }
    }, _callee32, null, [[5, 7]]);
  }));
  return _driveWorkdayAuth.apply(this, arguments);
}
function driveLateRenderingWorkdayStep() {
  return _driveLateRenderingWorkdayStep.apply(this, arguments);
}
function _driveLateRenderingWorkdayStep() {
  _driveLateRenderingWorkdayStep = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee33() {
    var _target$type;
    var target, manualButton;
    return autofill_regenerator().w(function (_context34) {
      while (1) switch (_context34.n) {
        case 0:
          _context34.n = 1;
          return waitForPositiveResultWithAbort(function () {
            if (detectAutofillFields().length > 0) return {
              type: 'fields'
            };
            if (hasWorkdayEmailAuthForm(getCurrentStepRoot())) return {
              type: 'fields'
            };
            var signInStepButton = getWorkdaySignInStepButton();
            if (signInStepButton) return {
              type: 'signIn',
              button: signInStepButton
            };
            // A late-rendering job DETAIL page (the driver can start autofill before its Apply button
            // paints): drive the same Apply → Apply Manually sequence as advanceFlow's steps 2-3.
            var applyManuallyButton = getWorkdayApplyManuallyButton();
            if (applyManuallyButton) return {
              type: 'applyManually',
              button: applyManuallyButton
            };
            var detailApplyButton = getWorkdayDetailApplyButton();
            if (detailApplyButton) return {
              type: 'detailApply',
              button: detailApplyButton
            };
            if (getWorkdaySubmitButton()) return {
              type: 'submit'
            };
            return null;
          }, WORKDAY_STEP_RENDER_WAIT_MS, autofill_NEVER_ABORT, 250);
        case 1:
          target = _context34.v;
          console.log('[bidhub][workday] driveLateRenderingWorkdayStep resolved', {
            type: (_target$type = target === null || target === void 0 ? void 0 : target.type) !== null && _target$type !== void 0 ? _target$type : 'timeout'
          });
          if (!((target === null || target === void 0 ? void 0 : target.type) === 'signIn' || (target === null || target === void 0 ? void 0 : target.type) === 'applyManually')) {
            _context34.n = 3;
            break;
          }
          _context34.n = 2;
          return clickWorkdayButton(target.button);
        case 2:
          _context34.n = 6;
          break;
        case 3:
          if (!((target === null || target === void 0 ? void 0 : target.type) === 'detailApply')) {
            _context34.n = 6;
            break;
          }
          _context34.n = 4;
          return clickWorkdayButton(target.button);
        case 4:
          _context34.n = 5;
          return waitForPositiveResultWithAbort(function () {
            return getWorkdayApplyManuallyButton();
          }, 3000, autofill_NEVER_ABORT, 100);
        case 5:
          manualButton = _context34.v;
          if (!manualButton) {
            _context34.n = 6;
            break;
          }
          _context34.n = 6;
          return clickWorkdayButton(manualButton);
        case 6:
          return _context34.a(2, false);
      }
    }, _callee33);
  }));
  return _driveLateRenderingWorkdayStep.apply(this, arguments);
}
function advanceWorkdayAutofillFlow() {
  return _advanceWorkdayAutofillFlow.apply(this, arguments);
}
function _advanceWorkdayAutofillFlow() {
  _advanceWorkdayAutofillFlow = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee34() {
    var signInStepButton, _signInStepButton$par, applyManuallyButton, detailApplyButton, manualButton, advanceButton;
    return autofill_regenerator().w(function (_context35) {
      while (1) switch (_context35.n) {
        case 0:
          console.log('[bidhub][workday] advanceWorkdayAutofillFlow');
          // Step 1: Auth step. On the social-login chooser, click "Sign in with email" to reveal the email
          // form; on the revealed form, click the Sign In / Create Account submit (the click_filter overlay
          // div, the actual React-handled interactive target, not the aria-hidden <button> sibling). Used by
          // the manual builds, and post-takeover by the auto-apply build to complete a redirect-back sign-in.
          signInStepButton = getWorkdaySignInStepButton();
          if (!signInStepButton) {
            _context35.n = 2;
            break;
          }
          _context35.n = 1;
          return clickWorkdayButton(signInStepButton);
        case 1:
          // Only the Sign In submit (not the email reveal / Create Account) can stick signed-in.
          if ((_signInStepButton$par = signInStepButton.parentElement) !== null && _signInStepButton$par !== void 0 && _signInStepButton$par.querySelector('[data-automation-id="signInSubmitButton"]')) {
            void repressWorkdaySignInIfStuck();
          }
          return _context35.a(2, false);
        case 2:
          // Step 2: If the apply-method dialog is already open, click "Apply manually" only. Click but return
          // FALSE (same auto-start-off fix as BambooHR): the step that renders next (usually the sign-in /
          // sign-up form) must NOT be filled as a continuation of THIS run — returning true would send the
          // engine through waitForFieldsAfterEmptyAdvance, which folds the new step's fields into the current
          // run and fills them with no config check. Returning false ends the run here; the background then
          // re-detects the new step and maybeAutoStartAutofill re-gates on the auto-start setting (auto-apply
          // injects always-true, and a fresh startAutofill there also lets driveWorkdayAuth run on the auth
          // step itself, which the continuation path skipped).
          applyManuallyButton = getWorkdayApplyManuallyButton();
          if (!applyManuallyButton) {
            _context35.n = 4;
            break;
          }
          _context35.n = 3;
          return clickWorkdayButton(applyManuallyButton);
        case 3:
          return _context35.a(2, false);
        case 4:
          // Step 3: If still on the job detail page, click the primary Apply button.
          // Then immediately wait for the apply-method dialog to appear and click "Apply manually".
          // Both clicks must happen in a single advanceFlow() call because the detail page and the
          // dialog share the same URL/step-signature — a second autostart would be dedup-blocked.
          // Returns FALSE for the same re-detect + re-gate reason as Step 2 (also when the dialog never
          // appears — a signed-in tenant navigates straight into the apply flow, whose fields must
          // likewise wait for the auto-start gate).
          detailApplyButton = getWorkdayDetailApplyButton();
          if (!detailApplyButton) {
            _context35.n = 8;
            break;
          }
          _context35.n = 5;
          return clickWorkdayButton(detailApplyButton);
        case 5:
          _context35.n = 6;
          return waitForPositiveResultWithAbort(function () {
            return getWorkdayApplyManuallyButton();
          }, 3000, autofill_NEVER_ABORT, 100);
        case 6:
          manualButton = _context35.v;
          if (!manualButton) {
            _context35.n = 7;
            break;
          }
          _context35.n = 7;
          return clickWorkdayButton(manualButton);
        case 7:
          return _context35.a(2, false);
        case 8:
          // Step 4: Inside the apply flow, advance with the safe Next/Continue/Review button.
          advanceButton = getSafeWorkdayAdvanceButton();
          if (advanceButton) {
            _context35.n = 10;
            break;
          }
          if (!(detectAutofillFields().length === 0 && !getWorkdaySubmitButton())) {
            _context35.n = 9;
            break;
          }
          return _context35.a(2, driveLateRenderingWorkdayStep());
        case 9:
          return _context35.a(2, false);
        case 10:
          _context35.n = 11;
          return repairRefusedWorkdayFills();
        case 11:
          return _context35.a(2, clickWorkdayButton(advanceButton));
      }
    }, _callee34);
  }));
  return _advanceWorkdayAutofillFlow.apply(this, arguments);
}
function getBestMatchingOption(_x1, _x10) {
  return _getBestMatchingOption.apply(this, arguments);
} // A job-board answer ("LinkedIn", "Indeed") that no option names belongs in the tenant's job-board
// category: the embedding match alone pairs "LinkedIn" with whichever category sounds professional.
// LinkedIn is a social network too: a tenant with no job-board category files it under its social
// one (workday.wd5: "Socially" > "Social Media", while its "Government Job Portal" holds a Singapore
// portal and its "Workday" category insider answers such as "I'm a Current Active Contractor").
// A board's own category may only abbreviate it in its children (associatedbank.wd1: "LinkedIn" >
// "Advertising (LI)" / "Direct outreach (LI)" / "Job posting (LI)"): the posting is what an applicant
// found, the embedding match alone takes the ad. Some tenants name the job-board category for the
// recruiter (r1rcm.wd1: "Recruiting Boards" beside "Recruiting Event" > "Campus" / "Walk-in" and
// "Social" > "Facebook" / "Twitter"): unrecognised, Indeed could land on a campus event. With neither
// kind of category, a websites one is the last rule before the embedding (coke.wd1's careers site:
// "Websites" > LinkedIn / Indeed / Glassdoor / … beside "Coca-Cola System Employee" > its bottlers).
// Inside it the catch-all site comes before a site the tenant names (directsupply.wd501: "Website" >
// "Direct Supply Website" … "Other Website"): a board it does not list is not the employer's own site.
// A source answer that names no board ("Job Board") goes where a board would, then to that catch-all:
// the embedding match alone may pick a board the applicant never named.
// A job site for one audience is not the job-board category, wherever the tenant lists it
// (invitationhomes.wd503: "Diversity Job Site" first, "Job Board" > LinkedIn / Indeed / … fifth, "Veteran Job
// Site" last): the first job-site entry would file every board under the diversity one.
function _getBestMatchingOption() {
  _getBestMatchingOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee35(answer, options) {
    var _options$;
    var normalizedAnswer, exactMatch, degreeOptions, candidates, _candidates$, _ref42, _candidates$find, matchedText, _candidates$2, _t18;
    return autofill_regenerator().w(function (_context36) {
      while (1) switch (_context36.p = _context36.n) {
        case 0:
          if (!(!Array.isArray(options) || options.length === 0)) {
            _context36.n = 1;
            break;
          }
          return _context36.a(2, null);
        case 1:
          normalizedAnswer = normalizeComparisonText(answer);
          if (normalizedAnswer) {
            _context36.n = 2;
            break;
          }
          return _context36.a(2, (_options$ = options[0]) !== null && _options$ !== void 0 ? _options$ : null);
        case 2:
          exactMatch = options.find(function (option) {
            return normalizeComparisonText(option.text) === normalizedAnswer;
          });
          if (!exactMatch) {
            _context36.n = 3;
            break;
          }
          return _context36.a(2, exactMatch);
        case 3:
          // A degree abbreviation sits next to the wrong degree for an embedding ("M.S." → "M.D.",
          // "B.A." → "M.B.A."), so a list that names degree levels is narrowed to the answer's level
          // first, and to its field when the list splits that level ("BSc." → "BS", never "BA"); the
          // embedding only chooses among what is left.
          degreeOptions = filterOptionsByDegreeLevel(answer, options, function (option) {
            return option.text;
          });
          if (!(degreeOptions.length === 1)) {
            _context36.n = 4;
            break;
          }
          return _context36.a(2, degreeOptions[0]);
        case 4:
          candidates = degreeOptions.length > 1 ? degreeOptions : options;
          _context36.p = 5;
          _context36.n = 6;
          return getEmbeddingMatch(answer, candidates.map(function (option) {
            return option.text;
          }));
        case 6:
          matchedText = _context36.v;
          if (matchedText) {
            _context36.n = 7;
            break;
          }
          return _context36.a(2, (_candidates$ = candidates[0]) !== null && _candidates$ !== void 0 ? _candidates$ : null);
        case 7:
          return _context36.a(2, (_ref42 = (_candidates$find = candidates.find(function (option) {
            return option.text === matchedText;
          })) !== null && _candidates$find !== void 0 ? _candidates$find : candidates[0]) !== null && _ref42 !== void 0 ? _ref42 : null);
        case 8:
          _context36.p = 8;
          _t18 = _context36.v;
          return _context36.a(2, (_candidates$2 = candidates[0]) !== null && _candidates$2 !== void 0 ? _candidates$2 : null);
      }
    }, _callee35, null, [[5, 8]]);
  }));
  return _getBestMatchingOption.apply(this, arguments);
}
var JOB_BOARD_ANSWER_PATTERN = /\b(linked\s?in|indeed|glassdoor|zip\s?recruiter|monster|dice|career\s?builder|simply\s?hired|handshake|wellfound)\b/i;
var GENERIC_JOB_BOARD_ANSWER_PATTERN = /\b(job\s?(boards?|sites?)|online\s?job)\b/i;
var JOB_BOARD_OPTION_PATTERN = /\b(job\s?boards?|recruit(ing|ment)\s?boards?|job\s?search|job\s?sites?|internet|online)\b/i;
var AUDIENCE_JOB_SITE_OPTION_PATTERN = /\b(diversity|diverse|veterans?|military|disabilit(y|ies)|women|minorit(y|ies)|colleges?|universit(y|ies)|campus|government)\b/i;
var JOB_POSTING_OPTION_PATTERN = /\bjob\s?(postings?|posts?|listings?)\b/i;
var SOCIAL_NETWORK_ANSWER_PATTERN = /\b(linked\s?in|facebook|instagram|twitter)\b/i;
var SOCIAL_OPTION_PATTERN = /\bsocial(ly)?\b/i;
var WEBSITES_OPTION_PATTERN = /\bweb\s?sites?\b/i;
var OTHER_OPTION_PATTERN = /\bother\b/i;
function getWebsitesOption(options) {
  var websites = options.filter(function (option) {
    return WEBSITES_OPTION_PATTERN.test(option.text);
  });
  return websites.find(function (option) {
    return OTHER_OPTION_PATTERN.test(option.text);
  }) || websites[0] || null;
}
function getJobSourceCategoryOption(answer, options) {
  var _answerText$match, _answerText$match2;
  var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref5$sourcePrompt = _ref5.sourcePrompt,
    sourcePrompt = _ref5$sourcePrompt === void 0 ? false : _ref5$sourcePrompt;
  var answerText = String(answer !== null && answer !== void 0 ? answer : '');
  var boardName = (_answerText$match = answerText.match(JOB_BOARD_ANSWER_PATTERN)) === null || _answerText$match === void 0 ? void 0 : _answerText$match[0];
  var networkName = (_answerText$match2 = answerText.match(SOCIAL_NETWORK_ANSWER_PATTERN)) === null || _answerText$match2 === void 0 ? void 0 : _answerText$match2[0];
  var sourceName = boardName || networkName;
  var anyBoard = !sourceName && sourcePrompt && GENERIC_JOB_BOARD_ANSWER_PATTERN.test(answerText);
  if (!sourceName && !anyBoard) return null;
  if (sourceName) {
    var compactSourceName = normalizeComparisonText(sourceName).replace(/\s+/g, '');
    var namesSource = function namesSource(option) {
      return normalizeComparisonText(option.text).replace(/\s+/g, '').includes(compactSourceName);
    };
    if (options.some(namesSource)) return null;
  }
  var board = boardName || anyBoard;
  var isJobBoardOption = function isJobBoardOption(option) {
    return JOB_BOARD_OPTION_PATTERN.test(option.text) && !AUDIENCE_JOB_SITE_OPTION_PATTERN.test(option.text);
  };
  return board && options.find(isJobBoardOption) || board && options.find(function (option) {
    return JOB_POSTING_OPTION_PATTERN.test(option.text);
  }) || networkName && options.find(function (option) {
    return SOCIAL_OPTION_PATTERN.test(option.text);
  }) || getWebsitesOption(options) || null;
}

// A source answer that claims no tie to the employer must never land on an insider entry: the
// embedding match (or its first-option fallback) would file a false claim — cohesity.wd5's "Other"
// holds only {Acquisition, Contractor Conversion, Rehire}, GM's top level "Referred by GM Employee",
// workday.wd5's "Workday" "I'm a Current Active Contractor", coke.wd1's "Coca-Cola System Employee" (a
// bottler's staff) and "Prior Employee - …". An empty required prompt parks for a person; a wrong pick is
// submitted. Source prompts only: elsewhere these words are plain options ("Internal Medicine").
var INSIDER_SOURCE_OPTION_PATTERN = /\b(re-?hires?|rehired|former|prior|current(ly)?|employees?|alumni|boomerang|contractor conversion|acquisitions?|internal|referr(al|als|ed))\b/i;
var SOURCE_PROMPT_QUESTION_PATTERN = /\bhow did you (hear|learn|find)\b|\bsource\b/i;
function isSourcePrompt(fieldId, question) {
  return /^source(--|$)/i.test(String(fieldId !== null && fieldId !== void 0 ? fieldId : '')) || SOURCE_PROMPT_QUESTION_PATTERN.test(String(question !== null && question !== void 0 ? question : ''));
}

// A career-site answer ("Career site - Corporate") goes to the employer's own careers-site entry: the
// embedding match alone may hear "Career" in a career fair (warnerbros.wd5: "Career Fair/Event" beside
// "Warner Bros. Discovery Careers Website"). Only one such entry decides, never a school's career site
// (coke.wd1's "Websites" > "University Career Site"); otherwise the embedding does. A tenant with no
// careers-site entry files its own site under its websites one (directsupply.wd501: "Website" > "Direct
// Supply Website" beside the boards and "Other Website"): then the one websites entry that is neither a
// catch-all, a school nor a board decides — at the top level, the category itself. A tenant with neither
// files its site under a category that is the employer's own name (boeing.wd1: "Boeing" > "Boeing Career
// Site" beside "Job Board" and "Recruiting Event"; prod 2026-10-13/23 the prompt stayed empty, and luna
// filed "Job Board" > "Other"): the one entry whose text is the host's tenant decides.
var CAREER_SITE_PATTERN = /\b(careers?\s?(web\s?)?(sites?|pages?|portal)|(company|corporate)\s?(web\s?)?sites?)\b/i;
var SCHOOL_PATTERN = /\b(universit(y|ies)|college|campus|school)\b/i;

// The employer as the posting host names it: "boeing" on boeing.wd1.myworkdayjobs.com.
function getWorkdayTenantKey() {
  var _window$location$host;
  var host = String((_window$location$host = window.location.hostname) !== null && _window$location$host !== void 0 ? _window$location$host : '').toLowerCase();
  return /\.myworkdayjobs\.com$/.test(host) ? host.split('.')[0].replace(/[^a-z0-9]/g, '') : '';
}
function getCareerSiteSourceOption(answer, options) {
  if (!CAREER_SITE_PATTERN.test(String(answer !== null && answer !== void 0 ? answer : ''))) return null;
  var matches = options.filter(function (option) {
    return CAREER_SITE_PATTERN.test(option.text) && !SCHOOL_PATTERN.test(option.text);
  });
  if (matches.length > 0) return matches.length === 1 ? matches[0] : null;
  var ownSites = options.filter(function (option) {
    return WEBSITES_OPTION_PATTERN.test(option.text) && !OTHER_OPTION_PATTERN.test(option.text) && !SCHOOL_PATTERN.test(option.text) && !JOB_BOARD_ANSWER_PATTERN.test(option.text);
  });
  if (ownSites.length > 0) return ownSites.length === 1 ? ownSites[0] : null;
  var tenant = getWorkdayTenantKey();
  var employer = tenant ? options.filter(function (option) {
    return normalizeComparisonText(option.text).replace(/[^a-z0-9]/g, '') === tenant;
  }) : [];
  return employer.length === 1 ? employer[0] : null;
}

// An agency answer ("External Agency") goes to the tenant's agency entry ("Placement Agency", "Agency/Search
// Firm"), and with none to its catch-all: directsupply.wd501 has no agency entry, only "Other" > "Not
// Specified" / "Media" / "Email List", and the embedding match alone may hear a recruiter's email or a
// professional association in "agency". Never an insider entry.
// A tenant may list a public employment office beside the staffing agency (flir.wd1: "Outside Staffing
// Agency" and "State Agency"): an answer that names no public body is a private agency, so the public
// entries step aside and the one left decides.
var AGENCY_PATTERN = /\b(agency|agencies|search\s?firms?|staffing|head\s?hunters?)\b/i;
var PUBLIC_AGENCY_PATTERN = /\b(state|government|govt|federal|county|municipal|public|workforce)\b/i;
var CATCH_ALL_SOURCE_OPTION_PATTERN = /^(other|not specified|unspecified)\b|\bnot (specified|listed)\b/i;
// The words an agency ENTRY is made of ("Placement Agency", "Staff Agency/Search Firm", "8 - Contacted by
// Recruiting Agency"). Any other word names a firm: sbasite.wd5's "Agency" category lists only firms
// ("Agylinc" … "Hinge Staffing" …), and a generic answer filed under one claims that firm sent the applicant.
var AGENCY_ENTRY_WORDS = new Set(['agency', 'agencies', 'staffing', 'staff', 'search', 'firm', 'firms', 'head', 'hunter', 'hunters', 'headhunter', 'headhunters', 'recruiting', 'recruitment', 'recruiter', 'recruiters', 'placement', 'outside', 'external', 'third', 'party', '3rd', 'private', 'temporary', 'temp', 'employment', 'contacted', 'contact', 'by', 'a', 'an', 'the', 'of', 'or', 'and', 'via', 'through', 'from', 'other', 'not', 'listed', 'please', 'specify', 'service', 'services', 'state', 'government', 'govt', 'federal', 'county', 'municipal', 'public', 'workforce']);
function isNamedAgencyFirm(text) {
  return normalizeComparisonText(text).split(/[^a-z0-9]+/).some(function (word) {
    return word && !/^\d+$/.test(word) && !AGENCY_ENTRY_WORDS.has(word);
  });
}

// An answer naming a firm may take that firm; a generic one only a generic agency entry.
function getAgencyEntryOptions(answerText, options) {
  var namedAnswer = isNamedAgencyFirm(answerText);
  return options.filter(function (option) {
    return AGENCY_PATTERN.test(option.text) && (namedAnswer || !isNamedAgencyFirm(option.text));
  });
}
function getAgencySourceOption(answer, options) {
  var answerText = String(answer !== null && answer !== void 0 ? answer : '');
  if (!AGENCY_PATTERN.test(answerText)) return null;
  var allAgencies = getAgencyEntryOptions(answerText, options);
  var publicAnswer = PUBLIC_AGENCY_PATTERN.test(answerText);
  var agencies = allAgencies.length > 1 ? allAgencies.filter(function (option) {
    return PUBLIC_AGENCY_PATTERN.test(option.text) === publicAnswer;
  }) : allAgencies;
  if (allAgencies.length > 0) return agencies.length === 1 ? agencies[0] : null;
  var catchAlls = options.filter(function (option) {
    return CATCH_ALL_SOURCE_OPTION_PATTERN.test(normalizeWorkdayText(option.text)) && !INSIDER_SOURCE_OPTION_PATTERN.test(option.text);
  });
  return catchAlls.length === 1 ? catchAlls[0] : null;
}

// With neither an agency entry nor a single catch-all on the level, an agency answer stays unpicked: the
// embedding match alone files it wherever it sounds closest (invitationhomes.wd503: "External Agency" →
// "Recruiter Sourced" > "INVH Recruiter", the employer's own recruiter; with no match, the first category,
// "Diversity Job Site"). The empty required prompt parks for a person — so does a generic answer on a level of
// named firms only (sbasite.wd5).
function isUnplaceableAgencyAnswer(answer, options) {
  var answerText = String(answer !== null && answer !== void 0 ? answer : '');
  return AGENCY_PATTERN.test(answerText) && getAgencyEntryOptions(answerText, options).length === 0;
}

// The phone-code prompt lists "<Country> (+<code>)" and the answer is the profile's phone country name.
// "United States" is not an exact option there ("United States of America (+1)"), and the embedding (or
// its first-option fallback) may take "United States Minor Outlying Islands (+1)", the first of the two
// a search for it returns (workday.wd5, 2026-10-20: the code went to Canada / American Samoa (+1) for
// US applicants). The name decides, with Workday's spelling of the common ones.
var DIAL_CODE_SUFFIX_PATTERN = /\s*\(\+\d[\d\s-]*\)$/;
var WORKDAY_COUNTRY_NAMES = new Map([['united states', 'united states of america'], ['usa', 'united states of america'], ['us', 'united states of america'], ['russia', 'russian federation'], ['south korea', 'korea, republic of'], ['czech republic', 'czechia'], ['turkey', 'türkiye']]);
function getDialCodeCountryOption(answer, options) {
  if (!options.some(function (option) {
    return DIAL_CODE_SUFFIX_PATTERN.test(normalizeWorkdayText(option.text));
  })) return null;
  var countryName = normalizeComparisonText(answer).replace(/\.$/, '');
  var wantedNames = new Set([countryName, WORKDAY_COUNTRY_NAMES.get(countryName)].filter(Boolean));
  var matches = options.filter(function (option) {
    return wantedNames.has(normalizeComparisonText(normalizeWorkdayText(option.text).replace(DIAL_CODE_SUFFIX_PATTERN, '')));
  });
  return matches.length === 1 ? matches[0] : null;
}

// Workday keeps the phone code in step with Country: a Country commit fetches that country's code
// (GET …/countries/<id>/countryphonecode) and swaps the phone-code pill for it. The phone code used to be
// filled before Country, so a profile whose country is not its phone's ended on the Country's code — a
// France country with a US phone left "France (+33)" and Save and Continue refused the 10-digit number
// ("The number length does not match valid numbers for this region"; accenture.wd103, case 686c71a7: the
// lab trace typed "United States" at 08:43:21.3, Country committed France at 22.3, its code was fetched at
// 22.6). So the phone code waits for Country, then for Workday's swap to land, then takes the profile's
// phone country.
var WORKDAY_COUNTRY_FIELD_ID = 'country--country';
var WORKDAY_PHONE_CODE_FIELD_ID = 'phoneNumber--countryPhoneCode';
// The swap's request left 0.3 s after the Country commit in that trace.
var PHONE_CODE_COUNTRY_SYNC_TIMEOUT_MS = 2000;
function chainPhoneCodeAfterCountry(questions) {
  var country = questions.find(function (entry) {
    return entry.fieldId === WORKDAY_COUNTRY_FIELD_ID;
  });
  if (!country) return questions;
  return questions.map(function (entry) {
    return entry.fieldId === WORKDAY_PHONE_CODE_FIELD_ID && !entry.waitForFieldId ? autofill_objectSpread(autofill_objectSpread({}, entry), {}, {
      waitForFieldId: country.fieldId
    }) : entry;
  });
}

// The pill names the committed Country ("France (+33)" under Country "France"), or there is no Country.
function phoneCodeFollowsCountry(phoneField) {
  var _document$getElementB;
  var countryText = normalizeComparisonText((_document$getElementB = document.getElementById(WORKDAY_COUNTRY_FIELD_ID)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.textContent);
  if (!countryText || countryText === 'select one') return true;
  return getSelectedItemTexts(phoneField).some(function (pill) {
    return normalizeComparisonText(pill.replace(DIAL_CODE_SUFFIX_PATTERN, '')) === countryText;
  });
}
function waitForPhoneCodeToFollowCountry(_x11, _x12, _x13) {
  return _waitForPhoneCodeToFollowCountry.apply(this, arguments);
} // After the swap a US applicant's code already reads "United States of America (+1)" for the answer
// "United States": kept as it is, never cleared and typed again.
function _waitForPhoneCodeToFollowCountry() {
  _waitForPhoneCodeToFollowCountry = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee36(fieldId, field, shouldAbort) {
    return autofill_regenerator().w(function (_context37) {
      while (1) switch (_context37.n) {
        case 0:
          _context37.n = 1;
          return waitForPositiveResultWithAbort(function () {
            return phoneCodeFollowsCountry(resolveLiveField(fieldId, field)) ? true : null;
          }, PHONE_CODE_COUNTRY_SYNC_TIMEOUT_MS, shouldAbort, 100);
        case 1:
          return _context37.a(2);
      }
    }, _callee36);
  }));
  return _waitForPhoneCodeToFollowCountry.apply(this, arguments);
}
function phoneCodeShowsAnswer(fieldId, field, values) {
  if (fieldId !== WORKDAY_PHONE_CODE_FIELD_ID || values.length !== 1) return false;
  var pills = getSelectedItemTexts(field);
  return pills.length === 1 && Boolean(getDialCodeCountryOption(values[0], [{
    text: pills[0]
  }]));
}
function getBestMultiselectOption(_x14, _x15) {
  return _getBestMultiselectOption.apply(this, arguments);
} // A search the prompt's top level cannot match may open no list at all: on CVS Health's nested "How Did You
// Hear About Us?" (cvshealth.wd1, lab 2026-10-20) Workday answered GET …/sources?search=LinkedIn, yet nothing
// rendered for 4 s, so the drill never ran and the required prompt stayed empty (GM's generalmotors.wd5 lab run
// ended the same way). A click on the prompt opens its full top level — the categories the drill walks.
// Only for a REQUIRED prompt still holding nothing: an optional one (Skills) must not take the closest of an
// unfiltered list.
function _getBestMultiselectOption() {
  _getBestMultiselectOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee37(answer, options) {
    var _ref43,
      _ref43$sourcePrompt,
      sourcePrompt,
      dialCodeCountry,
      sourceCategory,
      careerSiteCategory,
      agencyCategory,
      candidates,
      _args38 = arguments;
    return autofill_regenerator().w(function (_context38) {
      while (1) switch (_context38.n) {
        case 0:
          _ref43 = _args38.length > 2 && _args38[2] !== undefined ? _args38[2] : {}, _ref43$sourcePrompt = _ref43.sourcePrompt, sourcePrompt = _ref43$sourcePrompt === void 0 ? false : _ref43$sourcePrompt;
          dialCodeCountry = getDialCodeCountryOption(answer, options);
          if (!dialCodeCountry) {
            _context38.n = 1;
            break;
          }
          return _context38.a(2, dialCodeCountry);
        case 1:
          sourceCategory = getJobSourceCategoryOption(answer, options, {
            sourcePrompt: sourcePrompt
          });
          if (!sourceCategory) {
            _context38.n = 2;
            break;
          }
          return _context38.a(2, sourceCategory);
        case 2:
          careerSiteCategory = sourcePrompt ? getCareerSiteSourceOption(answer, options) : null;
          if (!careerSiteCategory) {
            _context38.n = 3;
            break;
          }
          return _context38.a(2, careerSiteCategory);
        case 3:
          agencyCategory = sourcePrompt ? getAgencySourceOption(answer, options) : null;
          if (!agencyCategory) {
            _context38.n = 4;
            break;
          }
          return _context38.a(2, agencyCategory);
        case 4:
          if (!(sourcePrompt && isUnplaceableAgencyAnswer(answer, options))) {
            _context38.n = 5;
            break;
          }
          return _context38.a(2, null);
        case 5:
          candidates = sourcePrompt && !INSIDER_SOURCE_OPTION_PATTERN.test(String(answer !== null && answer !== void 0 ? answer : '')) ? options.filter(function (option) {
            return !INSIDER_SOURCE_OPTION_PATTERN.test(option.text);
          }) : options;
          return _context38.a(2, getBestMatchingOption(answer, candidates));
      }
    }, _callee37);
  }));
  return _getBestMultiselectOption.apply(this, arguments);
}
function shouldOpenEmptyPromptList(fieldId, field, input) {
  if (countMultiselectPills(fieldId, field) > 0) return false;
  return isFieldRequired(input.closest('[data-automation-id^="formField-"]') || resolveLiveField(fieldId, field));
}

// The prompt's list icon ("promptIcon", the browse control at the right of the search box).
function getMultiselectPromptIcon(input) {
  var _input$closest2;
  return (input === null || input === void 0 || (_input$closest2 = input.closest) === null || _input$closest2 === void 0 || (_input$closest2 = _input$closest2.call(input, '[data-automation-id="multiSelectContainer"]')) === null || _input$closest2 === void 0 ? void 0 : _input$closest2.querySelector('[data-automation-id="promptIcon"]')) || null;
}

// On some tenants a click on the search input opens an EMPTY popup that stays empty: taxwell.wd1's
// "How Did You Hear About Us?" (doctor session 00cd4f74, 2026-10-20) showed a blank list for ~50 s;
// Escape, then the list icon, opened the categories at once. So the icon is the second try.
function openMultiselectPromptList(_x16, _x17) {
  return _openMultiselectPromptList.apply(this, arguments);
} // Workday nests some prompts: GM's "How Did You Hear About Us?" lists only categories, each opening
// its own children ("Internet Job Board / Job Search" > "Other"), and its search matches the top
// level only, so "LinkedIn" answers "No matches found" above the category list. A click on a
// category drills into it instead of selecting (prod 2026-10-19, generalmotors.wd5 My Information
// advance parks). Resolves 'selection' once a pill commits, or 'level' once a prompt list shows
// options no level so far had (seenTexts) — whether Workday re-renders the same popup or mounts a
// new one. A list that falls back to an earlier level (after a leaf commit) is never drilled again.
// Warner Bros' categories may hold one child that repeats their name (warnerbros.wd5, doctor session
// 69c84674, 2026-10-20: "Warner Bros. Discovery Careers Website" > "← Warner Bros. Discovery Careers
// Website" (back link) + the same name as a radio leaf): both filters drop that child, so the prompt
// stayed empty. A list holding only the parent's name, unlike the list clicked (listTextsBefore), is
// that level; its last entry is the child, after the back link.
function _openMultiselectPromptList() {
  _openMultiselectPromptList = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee38(input, shouldAbort) {
    var waitForReadyList, state, promptIcon;
    return autofill_regenerator().w(function (_context39) {
      while (1) switch (_context39.n) {
        case 0:
          waitForReadyList = function waitForReadyList() {
            return waitForPositiveResultWithAbort(function () {
              var listboxState = getVisibleInteractiveListboxState();
              return (listboxState === null || listboxState === void 0 ? void 0 : listboxState.type) === 'ready' ? listboxState : null;
            }, LISTBOX_WAIT_TIMEOUT_MS, shouldAbort, 50);
          };
          _context39.n = 1;
          return clickWorkdayButton(input);
        case 1:
          _context39.n = 2;
          return waitForReadyList();
        case 2:
          state = _context39.v;
          promptIcon = state || shouldAbort() ? null : getMultiselectPromptIcon(input);
          if (!promptIcon) {
            _context39.n = 6;
            break;
          }
          dispatchEscapeKey(input);
          _context39.n = 3;
          return sleep(300);
        case 3:
          _context39.n = 4;
          return clickWorkdayButton(promptIcon);
        case 4:
          _context39.n = 5;
          return waitForReadyList();
        case 5:
          state = _context39.v;
        case 6:
          return _context39.a(2, state ? {
            type: 'listbox',
            listbox: state.listbox
          } : null);
      }
    }, _callee38);
  }));
  return _openMultiselectPromptList.apply(this, arguments);
}
function waitForMultiselectPick(_x18, _x19, _x20, _x21, _x22, _x23, _x24) {
  return _waitForMultiselectPick.apply(this, arguments);
} // The pills live in the prompt's formField wrapper; resolveLiveField may hand back the bare input.
function _waitForMultiselectPick() {
  _waitForMultiselectPick = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee39(fieldId, field, pillsBefore, clickedOption, seenTexts, listTextsBefore, shouldAbort) {
    var parentText;
    return autofill_regenerator().w(function (_context40) {
      while (1) switch (_context40.n) {
        case 0:
          parentText = normalizeComparisonText(clickedOption.text);
          return _context40.a(2, waitForPositiveResultWithAbort(function () {
            if (countMultiselectPills(fieldId, field) > pillsBefore) return {
              type: 'selection'
            };
            var visibleOptions = getVisiblePromptListOptions();
            var visibleTexts = visibleOptions.map(function (option) {
              return normalizeComparisonText(option.text);
            });
            // The drilled-in level heads its list with the parent (a back link); never pick it again.
            var options = visibleOptions.filter(function (_option, index) {
              return visibleTexts[index] !== parentText;
            });
            if (options.some(function (option) {
              return !seenTexts.has(normalizeComparisonText(option.text));
            })) {
              return {
                type: 'level',
                options: options
              };
            }
            var listChanged = visibleTexts.length !== listTextsBefore.length || visibleTexts.some(function (text, index) {
              return text !== listTextsBefore[index];
            });
            return options.length === 0 && visibleOptions.length > 0 && listChanged ? {
              type: 'level',
              options: visibleOptions.slice(-1)
            } : null;
          }, MULTISELECT_COMMIT_WAIT_TIMEOUT_MS, shouldAbort, 50));
      }
    }, _callee39);
  }));
  return _waitForMultiselectPick.apply(this, arguments);
}
function countMultiselectPills(fieldId, field) {
  var _liveField$closest;
  var liveField = resolveLiveField(fieldId, field);
  return getSelectedItemTexts((liveField === null || liveField === void 0 || (_liveField$closest = liveField.closest) === null || _liveField$closest === void 0 ? void 0 : _liveField$closest.call(liveField, '[data-automation-id^="formField-"]')) || liveField).length;
}

// The open prompt's options: never the pill list, never an inline select's own list (aria-controls),
// so a Country list some other control left open is not mistaken for a category's children.
function getVisiblePromptListOptions() {
  var inlineSelectListIds = new Set(Array.from(document.querySelectorAll('button[aria-haspopup="listbox"][aria-controls]')).map(function (button) {
    return button.getAttribute('aria-controls');
  }));
  var listbox = Array.from(document.querySelectorAll('[role="listbox"]')).filter(function (candidate) {
    return candidate.getAttribute('data-automation-id') !== 'selectedItemList';
  }).filter(function (candidate) {
    return !inlineSelectListIds.has(candidate.id) && isElementVisible(candidate);
  }).find(function (candidate) {
    return getListboxOptionEntries(candidate).length > 0;
  });
  return listbox ? getListboxOptionEntries(listbox) : [];
}
function resolveLiveField(fieldId, fallbackField) {
  if (!fieldId) return fallbackField;
  // The cover-letter slot carries a fixed id with no DOM counterpart: re-find the live drop zone by
  // its label so a fill after Workday's re-render does not write into a detached wrapper.
  if (fieldId === 'cover_letter') return findCoverLetterUploadField() || fallbackField;
  var escapedFieldId = cssEscapeValue(fieldId);
  return document.querySelector("[data-fkit-id=\"".concat(escapedFieldId, "\"]")) || document.getElementById(fieldId) || document.querySelector("[id=\"".concat(escapedFieldId, "\"]")) || document.querySelector("[name=\"".concat(escapedFieldId, "\"]")) || fallbackField;
}
function normalizeWorkdayDateFieldId(fieldId) {
  return normalizeWorkdayText(fieldId).replace(/^helpText-/, '').replace(/-dateSection(?:Month|Day|Year)(?:-(?:input|display))?$/, '');
}
function resolveWorkdayDateField(fieldId, fallbackField) {
  var _exactWrapper$getAttr;
  var liveField = resolveLiveField(fieldId, fallbackField);
  var dateWrapper = getDateInputWrapper(liveField) || getDateInputWrapper(fallbackField);
  if (dateWrapper) return dateWrapper;
  var normalizedDateFieldId = normalizeWorkdayDateFieldId(fieldId || (liveField === null || liveField === void 0 ? void 0 : liveField.id) || (fallbackField === null || fallbackField === void 0 ? void 0 : fallbackField.id));
  if (!normalizedDateFieldId) return liveField;
  var exactWrapper = document.getElementById(normalizedDateFieldId);
  if ((exactWrapper === null || exactWrapper === void 0 || (_exactWrapper$getAttr = exactWrapper.getAttribute) === null || _exactWrapper$getAttr === void 0 ? void 0 : _exactWrapper$getAttr.call(exactWrapper, 'data-automation-id')) === 'dateInputWrapper') {
    return exactWrapper;
  }
  return liveField;
}
function dispatchEscapeKey(target) {
  if (!(target !== null && target !== void 0 && target.dispatchEvent)) return;
  ['keydown', 'keyup'].forEach(function (eventType) {
    target.dispatchEvent(new KeyboardEvent(eventType, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      which: 27,
      bubbles: true,
      composed: true
    }));
  });
}
function waitForListboxToClose() {
  return _waitForListboxToClose.apply(this, arguments);
}
function _waitForListboxToClose() {
  _waitForListboxToClose = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee40() {
    var _t19;
    return autofill_regenerator().w(function (_context41) {
      while (1) switch (_context41.n) {
        case 0:
          _t19 = Boolean;
          _context41.n = 1;
          return waitForPositiveResultWithAbort(function () {
            return !getVisibleInteractivePopup() ? true : null;
          }, LISTBOX_CLOSE_WAIT_TIMEOUT_MS, autofill_NEVER_ABORT, 50);
        case 1:
          return _context41.a(2, _t19(_context41.v));
      }
    }, _callee40);
  }));
  return _waitForListboxToClose.apply(this, arguments);
}
function dispatchClickAtPoint(x, y) {
  var target = document.elementFromPoint(x, y);
  if (!(target !== null && target !== void 0 && target.dispatchEvent)) return;
  ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach(function (eventType) {
    target.dispatchEvent(new MouseEvent(eventType, {
      bubbles: true,
      cancelable: true,
      clientX: x,
      clientY: y,
      composed: true
    }));
  });
}
function getPopupFallbackClickPoints(popup) {
  var popupRect = popup.getBoundingClientRect();
  return [{
    x: Math.max(8, Math.floor(popupRect.left) - 12),
    y: Math.max(8, Math.floor(popupRect.top) - 12)
  }, {
    x: 8,
    y: 8
  }];
}
function closeOpenListbox() {
  return _closeOpenListbox.apply(this, arguments);
}
function _closeOpenListbox() {
  _closeOpenListbox = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee41() {
    var _document$activeEleme, _document$activeEleme2;
    var initialPopup, _iterator11, _step11, point, _t20;
    return autofill_regenerator().w(function (_context42) {
      while (1) switch (_context42.p = _context42.n) {
        case 0:
          initialPopup = getVisibleInteractivePopup();
          if (initialPopup) {
            _context42.n = 1;
            break;
          }
          return _context42.a(2);
        case 1:
          _iterator11 = autofill_createForOfIteratorHelper(getPopupFallbackClickPoints(initialPopup));
          _context42.p = 2;
          _iterator11.s();
        case 3:
          if ((_step11 = _iterator11.n()).done) {
            _context42.n = 6;
            break;
          }
          point = _step11.value;
          dispatchClickAtPoint(point.x, point.y);
          _context42.n = 4;
          return waitForListboxToClose();
        case 4:
          if (!_context42.v) {
            _context42.n = 5;
            break;
          }
          return _context42.a(2);
        case 5:
          _context42.n = 3;
          break;
        case 6:
          _context42.n = 8;
          break;
        case 7:
          _context42.p = 7;
          _t20 = _context42.v;
          _iterator11.e(_t20);
        case 8:
          _context42.p = 8;
          _iterator11.f();
          return _context42.f(8);
        case 9:
          (_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 || (_document$activeEleme2 = _document$activeEleme.blur) === null || _document$activeEleme2 === void 0 || _document$activeEleme2.call(_document$activeEleme);
          _context42.n = 10;
          return waitForListboxToClose();
        case 10:
          return _context42.a(2);
      }
    }, _callee41, null, [[2, 7, 8, 9]]);
  }));
  return _closeOpenListbox.apply(this, arguments);
}
function fetchSelectOptions(_x25, _x26, _x27, _x28) {
  return _fetchSelectOptions.apply(this, arguments);
}
function _fetchSelectOptions() {
  _fetchSelectOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee42(metadata, fieldId, question, field) {
    var _ref44,
      _ref44$shouldAbort,
      shouldAbort,
      liveField,
      button,
      listboxState,
      listbox,
      options,
      _args43 = arguments;
    return autofill_regenerator().w(function (_context43) {
      while (1) switch (_context43.n) {
        case 0:
          _ref44 = _args43.length > 4 && _args43[4] !== undefined ? _args43[4] : {}, _ref44$shouldAbort = _ref44.shouldAbort, shouldAbort = _ref44$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref44$shouldAbort;
          _context43.n = 1;
          return waitForWorkdayStepSettled(shouldAbort);
        case 1:
          liveField = resolveLiveField(fieldId, field);
          button = getSelectButton(liveField);
          if (!(!button || shouldAbort())) {
            _context43.n = 2;
            break;
          }
          return _context43.a(2, metadata);
        case 2:
          button.click();
          _context43.n = 3;
          return waitForPositiveResultWithAbort(function () {
            var state = getVisibleInteractiveListboxState();
            return (state === null || state === void 0 ? void 0 : state.type) === 'ready' || (state === null || state === void 0 ? void 0 : state.type) === 'empty' ? state : null;
          }, LISTBOX_WAIT_TIMEOUT_MS, shouldAbort, 100);
        case 3:
          listboxState = _context43.v;
          listbox = (listboxState === null || listboxState === void 0 ? void 0 : listboxState.type) === 'ready' ? listboxState.listbox : null;
          options = getListboxOptionEntries(listbox).map(function (option) {
            return option.text;
          });
          _context43.n = 4;
          return closeOpenListbox(button);
        case 4:
          return _context43.a(2, options.length > 0 ? autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
            options: options
          }) : metadata);
      }
    }, _callee42);
  }));
  return _fetchSelectOptions.apply(this, arguments);
}
function parseAutofillDateAnswer(answer) {
  var value = normalizeWorkdayText(answer);
  if (!value) return {
    month: null,
    day: null,
    year: null
  };
  var isoMatch = value.match(/^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?$/);
  if (isoMatch) {
    return {
      year: isoMatch[1],
      month: isoMatch[2] ? isoMatch[2].padStart(2, '0') : null,
      day: isoMatch[3] ? isoMatch[3].padStart(2, '0') : null
    };
  }
  var numericDateMatch = value.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})$/);
  if (numericDateMatch) {
    var year = numericDateMatch[3].length === 2 ? "20".concat(numericDateMatch[3]) : numericDateMatch[3];
    return {
      month: numericDateMatch[1].padStart(2, '0'),
      day: numericDateMatch[2].padStart(2, '0'),
      year: year
    };
  }
  var parsedMonthYear = parseProfileDate(value);
  if (parsedMonthYear.year || parsedMonthYear.month) {
    return {
      month: parsedMonthYear.month,
      day: null,
      year: parsedMonthYear.year
    };
  }
  var nativeDate = new Date(value);
  if (!Number.isNaN(nativeDate.getTime())) {
    return {
      month: String(nativeDate.getMonth() + 1).padStart(2, '0'),
      day: String(nativeDate.getDate()).padStart(2, '0'),
      year: String(nativeDate.getFullYear())
    };
  }
  if (/^\d{4}$/.test(value)) {
    return {
      month: null,
      day: null,
      year: value
    };
  }
  return {
    month: null,
    day: null,
    year: null
  };
}

// Like the text inputs, the date segments commit in onBlur — and the old synthetic
// `change`/bubbling `blur` Events never reach React's focusout listener, so a fill in a tab
// without system focus left "The field From is required" under a visibly filled date. Move focus
// segment to segment the way typing does, then blur once.
function commitWorkdayDateSegments(liveField, writes) {
  var _iterator8 = autofill_createForOfIteratorHelper(writes),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var _step8$value = _step8.value,
        input = _step8$value.input,
        value = _step8$value.value;
      focusElementReliably(input);
      writeReactTextValue(input, value);
    }

    // Writing the Year segment makes Workday move focus back to Month (seen live), so blur whichever
    // segment holds focus as well as the last one written.
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  var lastInput = writes[writes.length - 1].input;
  blurElementReliably(lastInput);
  var activeElement = lastInput.getRootNode().activeElement;
  if (activeElement && activeElement !== lastInput && liveField.contains(activeElement)) {
    blurElementReliably(activeElement);
  }
}

// A different-but-valid value for one segment: Day/Month flip between 01 and 02 (valid in every
// month), Year steps back one.
function nudgeWorkdayDateSegment(label, value) {
  if (label === 'year') return String(Number(value) - 1);
  return value === '01' ? '02' : '01';
}
function getWorkdayDateNudgeWrites(writes) {
  var label = ['day', 'month', 'year'].find(function (candidate) {
    return writes.some(function (write) {
      return write.label === candidate;
    });
  });
  return writes.map(function (write) {
    return write.label === label ? autofill_objectSpread(autofill_objectSpread({}, write), {}, {
      value: nudgeWorkdayDateSegment(label, write.value)
    }) : write;
  });
}
function fillWorkdayDateField(_x29, _x30, _x31) {
  return _fillWorkdayDateField.apply(this, arguments);
}
function _fillWorkdayDateField() {
  _fillWorkdayDateField = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee43(fieldId, answer, field) {
    var question,
      liveField,
      dateInputs,
      parsed,
      partsByLabel,
      writes,
      _args44 = arguments;
    return autofill_regenerator().w(function (_context44) {
      while (1) switch (_context44.n) {
        case 0:
          question = _args44.length > 3 && _args44[3] !== undefined ? _args44[3] : '';
          liveField = resolveWorkdayDateField(fieldId, field);
          dateInputs = getDateInputs(liveField);
          if (!(dateInputs.length === 0)) {
            _context44.n = 1;
            break;
          }
          return _context44.a(2);
        case 1:
          parsed = parseAutofillDateAnswer(answer);
          partsByLabel = {
            month: parsed.month,
            day: parsed.day,
            year: parsed.year
          };
          writes = dateInputs.map(function (input) {
            var label = normalizeComparisonText(input.getAttribute('aria-label'));
            return {
              input: input,
              label: label,
              value: partsByLabel[label]
            };
          }).filter(function (_ref45) {
            var value = _ref45.value;
            return value;
          });
          if (!(writes.length === 0)) {
            _context44.n = 2;
            break;
          }
          return _context44.a(2);
        case 2:
          if (!writes.every(function (_ref46) {
            var input = _ref46.input,
              value = _ref46.value;
            return input.value === value;
          })) {
            _context44.n = 3;
            break;
          }
          commitWorkdayDateSegments(liveField, getWorkdayDateNudgeWrites(writes));
          _context44.n = 3;
          return sleep(150);
        case 3:
          commitWorkdayDateSegments(liveField, writes);
        case 4:
          return _context44.a(2);
      }
    }, _callee43);
  }));
  return _fillWorkdayDateField.apply(this, arguments);
}
function getSelectedItemTexts(field) {
  var _field$querySelectorA3;
  return Array.from((_field$querySelectorA3 = field === null || field === void 0 ? void 0 : field.querySelectorAll('[data-automation-id="selectedItem"]')) !== null && _field$querySelectorA3 !== void 0 ? _field$querySelectorA3 : []).map(function (item) {
    return normalizeWorkdayText(item.textContent || item.getAttribute('aria-label'));
  }).filter(Boolean);
}
function clearMultiselectSelections(_x32) {
  return _clearMultiselectSelections.apply(this, arguments);
} // The pill's own remove charm: the nearest ancestor holding a DELETE_charm and no other pill.
function _clearMultiselectSelections() {
  _clearMultiselectSelections = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee44(field) {
    var _field$querySelectorA6;
    var question,
      deleteButtons,
      _iterator12,
      _step12,
      button,
      _args45 = arguments,
      _t21;
    return autofill_regenerator().w(function (_context45) {
      while (1) switch (_context45.p = _context45.n) {
        case 0:
          question = _args45.length > 1 && _args45[1] !== undefined ? _args45[1] : '';
          deleteButtons = Array.from((_field$querySelectorA6 = field === null || field === void 0 ? void 0 : field.querySelectorAll('[data-automation-id="DELETE_charm"]')) !== null && _field$querySelectorA6 !== void 0 ? _field$querySelectorA6 : []).filter(function (button) {
            return isElementVisible(button);
          });
          _iterator12 = autofill_createForOfIteratorHelper(deleteButtons);
          _context45.p = 1;
          _iterator12.s();
        case 2:
          if ((_step12 = _iterator12.n()).done) {
            _context45.n = 4;
            break;
          }
          button = _step12.value;
          button.click();
          _context45.n = 3;
          return sleep(120);
        case 3:
          _context45.n = 2;
          break;
        case 4:
          _context45.n = 6;
          break;
        case 5:
          _context45.p = 5;
          _t21 = _context45.v;
          _iterator12.e(_t21);
        case 6:
          _context45.p = 6;
          _iterator12.f();
          return _context45.f(6);
        case 7:
          return _context45.a(2);
      }
    }, _callee44, null, [[1, 5, 6, 7]]);
  }));
  return _clearMultiselectSelections.apply(this, arguments);
}
function getSelectedItemDeleteButton(item, field) {
  var node = item.parentElement;
  while (node && node !== (field === null || field === void 0 ? void 0 : field.parentElement)) {
    if (node.querySelectorAll('[data-automation-id="selectedItem"]').length > 1) return null;
    var button = node.querySelector('[data-automation-id="DELETE_charm"]');
    if (button) return button;
    node = node.parentElement;
  }
  return null;
}

// Workday commits a search with exactly one hit on Enter, so a wrong lone hit ("RAGAS" → "Raku
// Tongs") is already a pill before any option check runs. After the fill, remove every pill that
// matches none of the skills asked for, and every repeat of an earlier pill: Workday refuses the
// whole list on save when one skill is in it twice ("You cannot enter duplicate skills", synnex.wd5
// prod 2026-10-21).
function removeImplausibleSkillSelections(_x33, _x34) {
  return _removeImplausibleSkillSelections.apply(this, arguments);
}
function _removeImplausibleSkillSelections() {
  _removeImplausibleSkillSelections = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee45(field, skills) {
    var _field$querySelectorA7;
    var shouldAbort,
      items,
      keys,
      _loop3,
      _ret3,
      index,
      _args47 = arguments;
    return autofill_regenerator().w(function (_context47) {
      while (1) switch (_context47.n) {
        case 0:
          shouldAbort = _args47.length > 2 && _args47[2] !== undefined ? _args47[2] : autofill_NEVER_ABORT;
          items = Array.from((_field$querySelectorA7 = field === null || field === void 0 ? void 0 : field.querySelectorAll('[data-automation-id="selectedItem"]')) !== null && _field$querySelectorA7 !== void 0 ? _field$querySelectorA7 : []);
          keys = items.map(function (item) {
            return normalizeComparisonText(item.textContent || item.getAttribute('aria-label'));
          });
          _loop3 = /*#__PURE__*/autofill_regenerator().m(function _loop3() {
            var item, text, repeat, deleteButton;
            return autofill_regenerator().w(function (_context46) {
              while (1) switch (_context46.n) {
                case 0:
                  if (!shouldAbort()) {
                    _context46.n = 1;
                    break;
                  }
                  return _context46.a(2, {
                    v: void 0
                  });
                case 1:
                  item = items[index];
                  text = normalizeWorkdayText(item.textContent || item.getAttribute('aria-label'));
                  if (text) {
                    _context46.n = 2;
                    break;
                  }
                  return _context46.a(2, 0);
                case 2:
                  repeat = keys.indexOf(keys[index]) < index;
                  if (!(!repeat && skills.some(function (skill) {
                    return isPlausibleSkillOption(skill, text);
                  }))) {
                    _context46.n = 3;
                    break;
                  }
                  return _context46.a(2, 0);
                case 3:
                  deleteButton = getSelectedItemDeleteButton(item, field);
                  if (!(!deleteButton || !isElementVisible(deleteButton))) {
                    _context46.n = 4;
                    break;
                  }
                  return _context46.a(2, 0);
                case 4:
                  deleteButton.click();
                  _context46.n = 5;
                  return sleep(120);
                case 5:
                  return _context46.a(2);
              }
            }, _loop3);
          });
          index = items.length - 1;
        case 1:
          if (!(index >= 0)) {
            _context47.n = 5;
            break;
          }
          return _context47.d(autofill_regeneratorValues(_loop3()), 2);
        case 2:
          _ret3 = _context47.v;
          if (!(_ret3 === 0)) {
            _context47.n = 3;
            break;
          }
          return _context47.a(3, 4);
        case 3:
          if (!_ret3) {
            _context47.n = 4;
            break;
          }
          return _context47.a(2, _ret3.v);
        case 4:
          index -= 1;
          _context47.n = 1;
          break;
        case 5:
          return _context47.a(2);
      }
    }, _callee45);
  }));
  return _removeImplausibleSkillSelections.apply(this, arguments);
}
function getUploadedFileItems(field) {
  var _field$querySelectorA4, _field$querySelectorA5;
  return Array.from((_field$querySelectorA4 = field === null || field === void 0 || (_field$querySelectorA5 = field.querySelectorAll) === null || _field$querySelectorA5 === void 0 ? void 0 : _field$querySelectorA5.call(field, '[data-automation-id="file-upload-item"]')) !== null && _field$querySelectorA4 !== void 0 ? _field$querySelectorA4 : []).filter(function (item) {
    return isElementVisible(item);
  });
}
function getUploadedFileDeleteButton(fileItem) {
  var _fileItem$querySelect, _fileItem$querySelect2, _fileItem$querySelect3;
  return (fileItem === null || fileItem === void 0 || (_fileItem$querySelect = fileItem.querySelector) === null || _fileItem$querySelect === void 0 ? void 0 : _fileItem$querySelect.call(fileItem, '[data-automation-id="delete-file"]')) || Array.from((_fileItem$querySelect2 = fileItem === null || fileItem === void 0 || (_fileItem$querySelect3 = fileItem.querySelectorAll) === null || _fileItem$querySelect3 === void 0 ? void 0 : _fileItem$querySelect3.call(fileItem, 'button')) !== null && _fileItem$querySelect2 !== void 0 ? _fileItem$querySelect2 : []).find(function (button) {
    return /\b(delete|remove)\b/i.test(normalizeWorkdayText(button.textContent || button.getAttribute('aria-label')));
  }) || null;
}
function clearExistingUploadedFiles(_x35) {
  return _clearExistingUploadedFiles.apply(this, arguments);
}
function _clearExistingUploadedFiles() {
  _clearExistingUploadedFiles = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee46(resolveField) {
    var shouldAbort,
      _loop4,
      _ret4,
      _args49 = arguments;
    return autofill_regenerator().w(function (_context49) {
      while (1) switch (_context49.n) {
        case 0:
          shouldAbort = _args49.length > 1 && _args49[1] !== undefined ? _args49[1] : autofill_NEVER_ABORT;
          _loop4 = /*#__PURE__*/autofill_regenerator().m(function _loop4() {
            var liveField, uploadedItems, deleteButton, removed;
            return autofill_regenerator().w(function (_context48) {
              while (1) switch (_context48.n) {
                case 0:
                  liveField = resolveField();
                  uploadedItems = getUploadedFileItems(liveField);
                  deleteButton = uploadedItems.map(function (item) {
                    return getUploadedFileDeleteButton(item);
                  }).find(function (button) {
                    return button && isElementVisible(button);
                  });
                  if (deleteButton) {
                    _context48.n = 1;
                    break;
                  }
                  return _context48.a(2, {
                    v: void 0
                  });
                case 1:
                  deleteButton.click();
                  _context48.n = 2;
                  return waitForPositiveResultWithAbort(function () {
                    var refreshedItems = getUploadedFileItems(resolveField());
                    return refreshedItems.length < uploadedItems.length || !deleteButton.isConnected ? true : null;
                  }, FILE_UPLOAD_WAIT_TIMEOUT_MS, shouldAbort, 100);
                case 2:
                  removed = _context48.v;
                  if (removed) {
                    _context48.n = 3;
                    break;
                  }
                  return _context48.a(2, {
                    v: void 0
                  });
                case 3:
                  return _context48.a(2);
              }
            }, _loop4);
          });
        case 1:
          if (shouldAbort()) {
            _context49.n = 4;
            break;
          }
          return _context49.d(autofill_regeneratorValues(_loop4()), 2);
        case 2:
          _ret4 = _context49.v;
          if (!_ret4) {
            _context49.n = 3;
            break;
          }
          return _context49.a(2, _ret4.v);
        case 3:
          _context49.n = 1;
          break;
        case 4:
          return _context49.a(2);
      }
    }, _callee46);
  }));
  return _clearExistingUploadedFiles.apply(this, arguments);
}
function ensureResumeFileInput(_x36, _x37) {
  return _ensureResumeFileInput.apply(this, arguments);
} // The heading id is derived from the tenant's own section title: 'Work-Experience-section' by
// default, but tenants rename it (Buildertrend: "Add a Job" -> 'Add-a-Job-section'). Missing it
// dropped the row controls into detectStandardFields, which asked "From" / "To" / "I currently work
// here" without the profile entry and filled them wrong. The row controls keep Workday's own
// `workExperience-<n>--<field>` ids whatever the title, so fall back to the section group holding one.
// A renamed section can also start with NO row, only its Add button (CSI csiweb.wd1 and Alegeus
// "Professional Experience", prod 2026-10-20..22): neither id exists until a row is added, the
// section was never filled and every application went out with no job history (the section is
// optional, so nothing stalled). Last resort: the My Experience section whose title names work.
function _ensureResumeFileInput() {
  _ensureResumeFileInput = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee47(fieldId, field) {
    var _liveField$querySelec, _liveField$querySelec2;
    var shouldAbort,
      resolveField,
      liveField,
      existingInput,
      removeButton,
      _args50 = arguments;
    return autofill_regenerator().w(function (_context50) {
      while (1) switch (_context50.n) {
        case 0:
          shouldAbort = _args50.length > 2 && _args50[2] !== undefined ? _args50[2] : autofill_NEVER_ABORT;
          resolveField = function resolveField() {
            return resolveLiveField(fieldId, field);
          };
          if (!shouldAbort()) {
            _context50.n = 1;
            break;
          }
          return _context50.a(2, null);
        case 1:
          _context50.n = 2;
          return clearExistingUploadedFiles(resolveField, shouldAbort);
        case 2:
          liveField = resolveField();
          existingInput = getFileInputInsideField(liveField);
          if (!existingInput) {
            _context50.n = 3;
            break;
          }
          return _context50.a(2, existingInput);
        case 3:
          removeButton = Array.from((_liveField$querySelec = liveField === null || liveField === void 0 || (_liveField$querySelec2 = liveField.querySelectorAll) === null || _liveField$querySelec2 === void 0 ? void 0 : _liveField$querySelec2.call(liveField, 'button')) !== null && _liveField$querySelec !== void 0 ? _liveField$querySelec : []).find(function (button) {
            return /\b(remove|delete|replace)\b/i.test(normalizeWorkdayText(button.textContent || button.getAttribute('aria-label')));
          });
          if (!removeButton) {
            _context50.n = 4;
            break;
          }
          removeButton.click();
          return _context50.a(2, waitForPositiveResultWithAbort(function () {
            var refreshedField = resolveField();
            return getFileInputInsideField(refreshedField);
          }, FILE_UPLOAD_WAIT_TIMEOUT_MS, shouldAbort, 100));
        case 4:
          return _context50.a(2, null);
      }
    }, _callee47);
  }));
  return _ensureResumeFileInput.apply(this, arguments);
}
var WORK_SECTION_TITLE_PATTERN = /\b(experience|employment|work history|jobs?)\b/i;
var NON_WORK_SECTION_TITLE_PATTERN = /\b(education|skills?|languages?|resume|cv|linkedin|websites?|social|certifications?|licen[cs]es?|volunteer|military|references?)\b/i;
function getWorkExperienceSection() {
  var _document$querySelect;
  return getSectionGroupByHeadingId('Work-Experience-section') || ((_document$querySelect = document.querySelector('[id^="workExperience-"][id$="--jobTitle"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.closest('[role="group"][aria-labelledby$="-section"]')) || getWorkExperienceSectionByTitle() || null;
}
function getWorkExperienceSectionByTitle() {
  var stepRoot = document.querySelector('[data-automation-id="applyFlowMyExpPage"]');
  if (!stepRoot) return null;
  return Array.from(stepRoot.querySelectorAll('[role="group"][aria-labelledby$="-section"]')).find(function (group) {
    var _document$getElementB2;
    var title = normalizeWorkdayText((_document$getElementB2 = document.getElementById(group.getAttribute('aria-labelledby'))) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.textContent);
    return WORK_SECTION_TITLE_PATTERN.test(title) && !NON_WORK_SECTION_TITLE_PATTERN.test(title);
  }) || null;
}
function getEducationSection() {
  return getSectionGroupByHeadingId('Education-section');
}
function getScopedDateField(row, fieldIdSuffix) {
  if (!(row instanceof Element)) return null;
  return row.querySelector("[data-automation-id=\"dateInputWrapper\"][id$=\"".concat(fieldIdSuffix, "\"]"));
}
function getEducationSchoolField(row) {
  var _schoolInput$closest;
  if (!(row instanceof Element)) return null;
  var schoolField = row.querySelector('[data-automation-id="formField-school"]');
  if (schoolField) return schoolField;
  var schoolInput = row.querySelector('input[name="schoolName"], input[id$="--school"]');
  return (schoolInput === null || schoolInput === void 0 || (_schoolInput$closest = schoolInput.closest) === null || _schoolInput$closest === void 0 ? void 0 : _schoolInput$closest.call(schoolInput, '[data-automation-id^="formField-"]')) || schoolInput || null;
}

// University systems Workday lists spelled out ("University of California-San Diego") while
// résumés write the acronym ("UC San Diego"). Only unambiguous systems: a wrong school is worse
// than an empty one (the field then parks for a human).
var SCHOOL_SYSTEM_ACRONYMS = {
  UC: 'University of California',
  CSU: 'California State University',
  SUNY: 'State University of New York',
  CUNY: 'City University of New York',
  UT: 'University of Texas',
  UNC: 'University of North Carolina'
};

// Single universities a résumé names by acronym, often with the school inside it ("NYU Stern School
// of Business"). Workday lists the university spelled out ("New York University") and answers "No
// matches found" for the résumé's text: one applicant's School was left empty on ~30 Workday stops in
// 8 days (bigcommerce.wd12 and others, prod 2026-10-13..20) until the doctor searched "New York
// University". Only unambiguous acronyms (one that two universities share is spelled out by the
// entry's state, SCHOOL_STATE_ACRONYMS), and the pick must BE that university or one of its campuses
// (`strict`) — "New York Institute of Technology" shares every distinctive word.
var SCHOOL_UNIVERSITY_ACRONYMS = {
  NYU: 'New York University',
  MIT: 'Massachusetts Institute of Technology',
  UCLA: 'University of California Los Angeles'
};

// Acronyms that name a different university in each state, spelled out only when the education
// entry's own location names that state. "USC Marshall School of Business" (Los Angeles, CA) answered
// "No matches found" on CVS Health, Alto and Leidos (cvshealth.wd1 / alto.wd1 / leidos.wd5, doctor
// 262c9701 / 6998b769 / db7d692b / a5cd17c8, prod 2026-10-27) and the School stayed empty until the
// doctor searched "University of Southern California"; a bare "USC" search lists "University of Spa &
// Cosmetology Arts (USCA)" there. Without a state that names one of them, nothing is spelled out.
var SCHOOL_STATE_ACRONYMS = {
  USC: {
    CA: 'University of Southern California',
    SC: 'University of South Carolina'
  }
};
var SCHOOL_STATE_CODES = new Map([['california', 'CA'], ['south carolina', 'SC']]);

// The university an acronym names in the state the education entry's own location names ("Los
// Angeles, CA", "Columbia, South Carolina, United States"), or undefined.
function getStateAcronymUniversity(acronym, schoolName) {
  var byState = SCHOOL_STATE_ACRONYMS[acronym];
  if (!byState) return undefined;
  var location = schoolLocationsByName.get(normalizeComparisonText(schoolName));
  var _iterator9 = autofill_createForOfIteratorHelper(String(location !== null && location !== void 0 ? location : '').split(',')),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var part = _step9.value;
      var place = part.replace(/\d+/g, '').trim();
      var code = /^[A-Z]{2}$/.test(place) ? place : SCHOOL_STATE_CODES.get(normalizeComparisonText(place));
      if (byState[code]) return byState[code];
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  return undefined;
}

// The City University of New York's colleges are listed "CUNY <college>" — the federal (IPEDS) names
// Workday's default institution list carries: "CUNY City College", "CUNY Hunter College", "CUNY
// Brooklyn College", "CUNY New York City College of Technology" — while résumés write "The City
// College of New York", "Hunter College, CUNY" or "Brooklyn College of the City University of New
// York". On BigCommerce (bigcommerce.wd12, doctor 507d5377 / 7c9ccfb2, prod 2026-10-22) "The City
// College of New York" answered "No matches found", "City College of New York" made Workday commit
// its ONLY hit on Enter — "CUNY New York City College of Technology", a different college — and the
// doctor's "CUNY" search listed "CUNY City College". The listed name, or null when the name is not a
// CUNY college (a bare "City College" may be any of a dozen).
var CUNY_MENTION = String.raw(autofill_templateObject || (autofill_templateObject = autofill_taggedTemplateLiteral(["(?:CUNY|Citys+Universitys+ofs+News+York)"], ["(?:CUNY|City\\s+University\\s+of\\s+New\\s+York)"])));
function getCunyCollegeListName(value) {
  var name = normalizeWorkdayText(value).replace(/^the\s+/i, '');
  var isCityCollege = /^(?:city\s+college\s+of\s+new\s+york|ccny)\b/i.test(name);
  if (!isCityCollege && !new RegExp(String.raw(autofill_templateObject2 || (autofill_templateObject2 = autofill_taggedTemplateLiteral(["\b", "\b"], ["\\b", "\\b"])), CUNY_MENTION), 'i').test(name)) return null;
  var college = normalizeWorkdayText(name.replace(new RegExp(String.raw(autofill_templateObject3 || (autofill_templateObject3 = autofill_taggedTemplateLiteral(["(s*(?:thes+)?", "s*)"], ["\\(\\s*(?:the\\s+)?", "\\s*\\)"])), CUNY_MENTION), 'gi'), ' ').replace(new RegExp(String.raw(autofill_templateObject4 || (autofill_templateObject4 = autofill_taggedTemplateLiteral(["s*(?:,|s[\u2013\u2014-]|s(?:of|at))s*(?:thes+)?", "\b.*$"], ["\\s*(?:,|\\s[\u2013\u2014-]|\\s(?:of|at))\\s*(?:the\\s+)?", "\\b.*$"])), CUNY_MENTION), 'i'), '').replace(new RegExp(String.raw(autofill_templateObject5 || (autofill_templateObject5 = autofill_taggedTemplateLiteral(["^", "s*[,:\u2013\u2014-]?s*"], ["^", "\\s*[,:\u2013\u2014-]?\\s*"])), CUNY_MENTION), 'i'), '').split(/,|;|\s[|–—-]\s/)[0].replace(/^ccny\b/i, 'City College').replace(/^city\s+college\s+of\s+new\s+york\b/i, 'City College'));
  return getSchoolWords(college).length > 0 ? "CUNY ".concat(college) : null;
}

// Workday's School prompt is a server-side search over the tenant's institution list, so résumé
// text that is not a list label ("Purdue University.", "X University, City, ST", "City College of
// New York" — listed as "CUNY City College", "UC <campus>") answers "No Items" and the required
// field stays empty (icwgroup.wd5 / jj.wd5 My Experience parks, prod 2026-10-19). Search terms run
// from most to least specific; the pick is still matched against the FULL original name. Each term
// carries `fit`, the name a listed school must fit (the term itself, or for an acronym the spelled-out
// system + campus — a bare "San Diego" search lists 25 schools on onehealthineers.wd3: Argosy
// University-San Diego, University of San Diego, … and only "University of California-San Diego" is
// the applicant's), and `names`, the school names a list entry may be equal to or a campus of
// (pickListedSchool) — none for a cut-down word run like "City College". A `strict` term accepts
// only an entry that IS one of its names or a campus of it (isSchoolNameOrCampus); a `sameWords` term
// only the ONE entry whose distinctive words are exactly the term's (hasSameSchoolWords).
function buildSchoolSearchTerms(value) {
  var _withoutArticle$match, _withoutArticle$match2, _beforeUnit$match, _withoutArticle$match3, _SCHOOL_UNIVERSITY_AC, _match;
  var terms = [];
  var push = function push(term) {
    var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref6$fit = _ref6.fit,
      fit = _ref6$fit === void 0 ? term : _ref6$fit,
      _ref6$isName = _ref6.isName,
      isName = _ref6$isName === void 0 ? true : _ref6$isName,
      _ref6$strict = _ref6.strict,
      strict = _ref6$strict === void 0 ? false : _ref6$strict,
      _ref6$sameWords = _ref6.sameWords,
      sameWords = _ref6$sameWords === void 0 ? false : _ref6$sameWords;
    var cleaned = normalizeWorkdayText(term).replace(/^[\s.,;:|–—-]+|[\s.,;:|–—-]+$/g, '');
    if (cleaned.length < 3) return;
    if (terms.some(function (existing) {
      return normalizeComparisonText(existing.term) === normalizeComparisonText(cleaned);
    })) return;
    var fitName = normalizeWorkdayText(fit);
    terms.push({
      term: cleaned,
      fit: fitName,
      names: isName || fit !== term ? [fitName] : [],
      strict: strict,
      sameWords: sameWords
    });
  };
  var full = normalizeWorkdayText(value);
  // First: a looser CUNY search commits a sister college on Enter.
  var cunyCollege = getCunyCollegeListName(full);
  if (cunyCollege) push(cunyCollege, {
    strict: true
  });
  push(full);
  var withoutParens = full.replace(/\([^)]*\)/g, ' ');
  push(withoutParens);
  var head = withoutParens.split(/,|;|\s[|–—-]\s/)[0];
  push(head);
  var withoutArticle = normalizeWorkdayText(head).replace(/^the\s+/i, '');
  push(withoutArticle);
  // A campus joined by "at": Trimble (trimble.wd1) lists "University of Illinois Urbana-Champaign",
  // so "University of Illinois at Urbana-Champaign" answered "No matches found" and the School stayed
  // empty until the doctor searched the campus word (doctor a1b94cc7, 2026-10-20). The search wants
  // every typed word in the label, so the name without "at" still finds a list that keeps it.
  push(withoutArticle.replace(/\s+at\s+/i, ' '));
  // "UC Berkeley College of Engineering" → "UC Berkeley College" lists a different school (Berkeley
  // College) wherever the search is loose; a system acronym is spelled out below instead.
  var leadingSystem = SCHOOL_SYSTEM_ACRONYMS[(_withoutArticle$match = withoutArticle.match(/^([A-Z]{2,5})\s/)) === null || _withoutArticle$match === void 0 ? void 0 : _withoutArticle$match[1]];
  var beforeQualifier = withoutArticle.split(/\s+(?:of|at|in)\s+/i)[0];
  if (!leadingSystem && beforeQualifier.split(/\s+/).length >= 2) push(beforeQualifier, {
    isName: false
  });
  // A college inside the university ("UC Berkeley College of Engineering", "Boston University School
  // of Law"): Workday lists the university only, and every search word has to be in the label.
  var _ref7 = (_withoutArticle$match2 = withoutArticle.match(/^(.+)\s+(?:college|school|faculty)\s+of\s+\S.*$/i)) !== null && _withoutArticle$match2 !== void 0 ? _withoutArticle$match2 : [],
    _ref8 = autofill_slicedToArray(_ref7, 2),
    beforeUnit = _ref8[1];
  var unitParent = beforeUnit && (/\b(?:university|institute)\b/i.test(beforeUnit) || SCHOOL_SYSTEM_ACRONYMS[(_beforeUnit$match = beforeUnit.match(/^([A-Z]{2,5})\s/)) === null || _beforeUnit$match === void 0 ? void 0 : _beforeUnit$match[1]]) ? beforeUnit : null;
  if (unitParent) push(unitParent);
  var leadingAcronym = (_withoutArticle$match3 = withoutArticle.match(/^([A-Z]{2,5})(?:\s|$)/)) === null || _withoutArticle$match3 === void 0 ? void 0 : _withoutArticle$match3[1];
  var universityName = (_SCHOOL_UNIVERSITY_AC = SCHOOL_UNIVERSITY_ACRONYMS[leadingAcronym]) !== null && _SCHOOL_UNIVERSITY_AC !== void 0 ? _SCHOOL_UNIVERSITY_AC : getStateAcronymUniversity(leadingAcronym, value);
  if (universityName) push(universityName, {
    strict: true
  });
  var _ref9 = (_match = (unitParent || withoutArticle).match(/^([A-Z]{2,5})\s+(.+)$/)) !== null && _match !== void 0 ? _match : [],
    _ref0 = autofill_slicedToArray(_ref9, 3),
    acronym = _ref0[1],
    campus = _ref0[2];
  var systemName = SCHOOL_SYSTEM_ACRONYMS[acronym];
  if (systemName) {
    push("".concat(systemName, " ").concat(campus));
    push(campus, {
      fit: "".concat(systemName, " ").concat(campus),
      isName: false
    });
  }
  // The name without its kind-of-school words, last: a school that changed what it calls itself is
  // listed under the other word. Wonder (wonder.wd1, doctor da81fa11, 2026-10-22) lists "Medaille
  // College" for the résumé's "Medaille University" (renamed in 2022), so every search above answered
  // "No Items"; "Medaille" alone lists that one entry. Only an entry with exactly those distinctive
  // words is taken (never "Medaille College-Amherst" or "Lincoln Memorial University" for "Lincoln").
  var distinctive = withoutArticle.split(/\s+/).filter(function (word) {
    return getSchoolDistinctiveWords(word).length > 0;
  }).join(' ');
  if (distinctive) push(distinctive, {
    isName: false,
    sameWords: true
  });
  return terms;
}

// Tenants whose institution list lacks a school say what to pick instead, in the Education
// instructions: 'If it does not appear, choose "OTHER"' (ghr.wd1, Bank of America), 'School not
// listed? Enter "Not Provided."' (uw.wd5). On ghr.wd1 (prod 2026-10-13..20) Education 2's School
// was the most common advance park: the school is not in the bank's list, or the applicant's second
// degree is from the SAME school and the prompt no longer offers it ("No Items" for Stanford / UC
// Berkeley / Georgia Tech); the doctor picked OTHER and Save and Continue went through. Lennar
// (lennar.wd1) says 'If your school does not populate, please type "School Not Listed"'; on
// 2026-10-19..20 its School was left empty on 4 advance parks and the doctor's "School Not Listed"
// cleared it. Singapore's public service (sggovterp.wd102, Careers@Gov) quotes its label in SINGLE
// quotes: "If your school does not appear in the drop-down menu, select 'School Unavailable'." — a
// non-US school left Education 2 empty there (2026-10-20) until the doctor picked that entry.
// CrowdStrike (crowdstrike.wd5) says 'If your school is not among the options, please type "Other"'.
// Leidos (leidos.wd5) says 'If your school is not in our list, please select "School Not Found".'
// Airbus (ag.wd3) says 'School or University : you have to type the name … and select it in the drop
// down list. If you don't find it, type "Other" and press "Enter".' — 6 of its 10 advance parks in 30
// days (2026-09-29..10-23) were an empty School, until the doctor typed "Other" (doctor 152e9fc5).
// Mass General Brigham (massgeneralbrigham.wd1) says 'If you do not see your school listed, please
// choose the "Other" option from the list.' — a "do not see" and an article before the label.
// Only the employer's own quoted label is used, and only as the list entry (isSchoolNotListedEntry).
var SCHOOL_NOT_LISTED_QUOTED_LABEL = String.raw(autofill_templateObject6 || (autofill_templateObject6 = autofill_taggedTemplateLiteral(["(?:[\"\u201C]([^\"\u201C\u201D]{2,40})[\"\u201D]|['\u2018]([^'\u2018\u2019\"\u201C\u201D]{2,40})['\u2019])"])));
var SCHOOL_NOT_LISTED_PHRASE = String.raw(autofill_templateObject7 || (autofill_templateObject7 = autofill_taggedTemplateLiteral(["(?:(?:not|n['\u2019]t)s+(?:appear|listed|found|available|populate|see|shows+up|ins+(?:the|our|this)s+list|among)|(?:can(?:no|['\u2019])t|unables+to|do(?:s+not|n['\u2019]t))s+find)"], ["(?:(?:not|n['\u2019]t)\\s+(?:appear|listed|found|available|populate|see|show\\s+up|in\\s+(?:the|our|this)\\s+list|among)|(?:can(?:no|['\u2019])t|unable\\s+to|do(?:\\s+not|n['\u2019]t))\\s+find)"])));
var SCHOOL_NOT_LISTED_PICK = String.raw(_templateObject8 || (_templateObject8 = autofill_taggedTemplateLiteral(["\b(?:choose|select|pick|enter|type|use)s+(?:thes+|an?s+)?"], ["\\b(?:choose|select|pick|enter|type|use)\\s+(?:the\\s+|an?\\s+)?"])));
var SCHOOL_NOT_LISTED_HINT_PATTERNS = [new RegExp(String.raw(_templateObject9 || (_templateObject9 = autofill_taggedTemplateLiteral(["", "[^\"\u201C\u201D]{0,80}?", "", ""])), SCHOOL_NOT_LISTED_PHRASE, SCHOOL_NOT_LISTED_PICK, SCHOOL_NOT_LISTED_QUOTED_LABEL), 'i'), new RegExp(String.raw(_templateObject0 || (_templateObject0 = autofill_taggedTemplateLiteral(["", "", "[^.]{0,60}?", ""])), SCHOOL_NOT_LISTED_PICK, SCHOOL_NOT_LISTED_QUOTED_LABEL, SCHOOL_NOT_LISTED_PHRASE), 'i')];
// How far before a hint the school must be named: Airbus names it a whole sentence before its "If you
// don't find it" (157 characters).
var SCHOOL_NOT_LISTED_HINT_LEAD = 200;

// Tenants that want the WHOLE entry left out when a value is not in their lists say so instead:
// Guidehouse (guidehouse.wd1) — "Please complete the required fields for all relevant education
// history using keywords for School, Degree and Field of Study. If any of the values are missing from
// the drop down listing please leave the section blank." Its school list has no "Other" entry; on
// 2026-10-23 an applicant's second school was not in it, School stayed empty and Save and Continue
// stopped on "School or University is required" until luna deleted that Education entry (it applied).
var SCHOOL_LEAVE_BLANK_HINT_PATTERN = /\b(?:missing|not\s+(?:listed|found|available|in\s+(?:the|our|this)\s+(?:list|drop[\s-]?down))|(?:can(?:no|['’])t|unable\s+to|do(?:\s+not|n['’]t))\s+find)\b[^.]{0,80}?\bleave\s+(?:the|this|that)\s+(?:education\s+)?(?:section|entry)\s+(?:blank|empty)\b/i;
function educationAsksToLeaveUnlistedSchoolOut() {
  var _getEducationSection;
  var text = normalizeWorkdayText((_getEducationSection = getEducationSection()) === null || _getEducationSection === void 0 ? void 0 : _getEducationSection.textContent);
  var match = text.match(SCHOOL_LEAVE_BLANK_HINT_PATTERN);
  if (!match) return false;
  var lead = text.slice(Math.max(0, match.index - SCHOOL_NOT_LISTED_HINT_LEAD), match.index + match[0].length);
  return /school|universit|college|institution/i.test(lead);
}

// The School prompts (input ids) whose school is not in the list on a page that asks to leave such an
// entry out; dropUnlistedSchoolEntries deletes those entries once every entry is filled.
var unlistedSchoolInputIds = new Set();

// "Other" in the languages a multilingual list names side by side in ONE entry: Airbus's school list
// offers "Other / Autre / Sonstige / Otras", and typing "Other" + Enter commits it by itself.
var OTHER_IN_LANGUAGES = new Set(['other', 'others', 'autre', 'autres', 'sonstige', 'sonstiges', 'andere', 'otra', 'otras', 'otro', 'otros', 'outra', 'outras', 'outro', 'outros', 'altra', 'altre', 'altro', 'altri', 'overig', 'overige']);

// Whether a list entry IS the "not listed" entry the label names: the label itself, or the label
// followed by a bracketed / dashed note that says the school is not listed. CrowdStrike's entry is
// "OTHER (If your school is not an available selection)"; typing "Other" + Enter commits it by
// itself, and the bare-label check cleared it again — 7 doctor completions on My Experience
// (2026-10-19..21) were each that one pick. The label among its own translations ("Other / Autre /
// Sonstige / Otras") is the entry too, and so is the label followed only by the kind of school the box
// asks for: Mass General Brigham's list answers "Other" with "Other High School" and "Other School"
// (live schools search, 2026-10-24) while its page says "Other"; a school it lacks left the box empty
// on 3 applications (2026-10-16..23) until a person deleted the entry. A high school is never a
// degree's school. A neighbour ("Other - International", "Otterbein", "Other / International", "Other
// High School") is never the entry.
var SCHOOL_KIND_SUFFIX = /^\s+(?:school|college|university|institution)s?(?:\s*(?:\/|or|and|&)\s*(?:school|college|university|institution)s?)?$/;
function isSchoolNotListedEntry(label, text) {
  var _rest$match$, _rest$match, _rest$match2;
  var wanted = normalizeComparisonText(label);
  var listed = normalizeComparisonText(text);
  if (listed === wanted) return true;
  var translations = listed.split(/\s*\/\s*/);
  if (translations.length > 1 && translations.includes(wanted) && translations.every(function (part) {
    return OTHER_IN_LANGUAGES.has(part);
  })) return true;
  if (!wanted || !listed.startsWith(wanted)) return false;
  if (SCHOOL_KIND_SUFFIX.test(listed.slice(wanted.length))) return true;
  var rest = listed.slice(wanted.length).trim();
  var note = (_rest$match$ = (_rest$match = rest.match(/^\((.+)\)$/)) === null || _rest$match === void 0 ? void 0 : _rest$match[1]) !== null && _rest$match$ !== void 0 ? _rest$match$ : (_rest$match2 = rest.match(/^[-–—:]\s*(.+)$/)) === null || _rest$match2 === void 0 ? void 0 : _rest$match2[1];
  return Boolean(note) && /\bnot\b|n['’]t\b|\bunlisted\b|\bunavailable\b/.test(note);
}

// The place a per-country "not listed" entry names, or null. Analog Devices (analogdevices.wd1) has no
// plain "Other": its page says 'If your institution does not appear in the pre-populated list, or if your
// highest degree is High School Diploma, type “Other,” press Enter, and then select the appropriate
// country.' and "Other" lists 190 entries "Other Institution - Afghanistan" … "Other Institution -
// Zimbabwe" (its schools search, read live 2026-10-24). The entry is the label, optionally the kind of
// school, then a dash (or brackets) and the place.
function getSchoolNotListedPlace(label, text) {
  var _rest$match$2, _rest$match3, _rest$match4;
  var wanted = normalizeComparisonText(label);
  var listed = normalizeComparisonText(text);
  if (!wanted || !listed.startsWith(wanted)) return null;
  var rest = listed.slice(wanted.length).replace(/^\s+(?:school|college|university|institution)s?\b/, '');
  var place = (_rest$match$2 = (_rest$match3 = rest.match(/^\s*[-–—:]\s*(.+)$/)) === null || _rest$match3 === void 0 ? void 0 : _rest$match3[1]) !== null && _rest$match$2 !== void 0 ? _rest$match$2 : (_rest$match4 = rest.match(/^\s*\((.+)\)$/)) === null || _rest$match4 === void 0 ? void 0 : _rest$match4[1];
  if (!place || /\bnot\b|n['’]t\b|\bunlisted\b|\bunavailable\b/.test(place)) return null;
  return place.trim();
}

// Country spellings a profile or an answer uses where Workday's country list spells it out.
var SCHOOL_COUNTRY_ALIASES = new Map([['us', 'united states'], ['usa', 'united states'], ['u s', 'united states'], ['u s a', 'united states'], ['united states of america', 'united states'], ['america', 'united states'], ['uk', 'united kingdom'], ['u k', 'united kingdom'], ['great britain', 'united kingdom'], ['england', 'united kingdom'], ['scotland', 'united kingdom'], ['wales', 'united kingdom'], ['prc', 'china'], ['mainland china', 'china']]);
var SCHOOL_COUNTRY_SEARCH_NAMES = new Map([['united states', 'United States'], ['united kingdom', 'United Kingdom'], ['china', 'China']]);
function normalizeSchoolCountry(value) {
  var _SCHOOL_COUNTRY_ALIAS;
  var text = normalizeComparisonText(String(value !== null && value !== void 0 ? value : '').normalize('NFD').replace(/(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFA-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDE41\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74\uDFB8-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFCA\uDFCC-\uDFD0\uDFD2\uDFE1\uDFE2]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99\uDF60-\uDF67]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6\uDF00\uDF01\uDF03\uDF34-\uDF3A\uDF3E-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF])/g, '').replace(/\./g, ' ')).replace(/^the\s+/, '').replace(/\s+/g, ' ').trim();
  return (_SCHOOL_COUNTRY_ALIAS = SCHOOL_COUNTRY_ALIASES.get(text)) !== null && _SCHOOL_COUNTRY_ALIAS !== void 0 ? _SCHOOL_COUNTRY_ALIAS : text;
}

// The country as the list spells it, for the search: "USA" is typed "United States".
function getSchoolCountrySearchName(country) {
  var _SCHOOL_COUNTRY_SEARC;
  return (_SCHOOL_COUNTRY_SEARC = SCHOOL_COUNTRY_SEARCH_NAMES.get(normalizeSchoolCountry(country))) !== null && _SCHOOL_COUNTRY_SEARC !== void 0 ? _SCHOOL_COUNTRY_SEARC : normalizeWorkdayText(country);
}

// Whether a list entry is the label's "not listed" entry for `country` ("Other Institution - United
// States of America" for "USA"; "Other Institution - Korea, Republic of" for "Korea").
function isSchoolNotListedCountryEntry(label, text, country) {
  var place = getSchoolNotListedPlace(label, text);
  var wanted = normalizeSchoolCountry(country);
  if (!place || !wanted) return false;
  var listed = normalizeSchoolCountry(place);
  return listed === wanted || listed.startsWith("".concat(wanted, " ")) || listed.startsWith("".concat(wanted, ","));
}

// The last part of an education entry's own location ("Corpus Christi, Texas, United States"), never a
// two-letter state code ("San Jose, CA"); a state name ("Austin, Texas") finds no country entry, and the
// answer engine is asked next.
var schoolLocationsByName = new Map();
function rememberSchoolLocation(entry, name) {
  if (name && entry !== null && entry !== void 0 && entry.location) schoolLocationsByName.set(normalizeComparisonText(name), String(entry.location));
  return name;
}
function getSchoolLocationCountry(schoolName) {
  var location = schoolLocationsByName.get(normalizeComparisonText(schoolName));
  var last = String(location !== null && location !== void 0 ? location : '').split(',').map(function (part) {
    return part.trim();
  }).filter(Boolean).at(-1);
  if (!last || /\d/.test(last) || /^[A-Z]{2}$/.test(last)) return null;
  return last;
}

// An answer the engine gives for a school's country: a short place name, never a sentence or a
// skip sentinel.
function readSchoolCountryAnswer(answer) {
  if (typeof answer !== 'string') return null;
  var text = normalizeWorkdayText(answer).replace(/[.\s]+$/, '');
  if (!text || text.length > 60 || /\d|[?!;:]/.test(text) || text.split(/\s+/).length > 6) return null;
  return text;
}

// The answer engine's country for a school whose entry names none. The School box is required, so the
// engine answers from what its sources say (a résumé line, a state in the school's name) or asks the
// applicant; asked as optional it leaves the answer blank (lab 2026-10-24: "University of Maryland
// Baltimore County" → ""). Asked only once the list has shown per-country entries.
function askSchoolCountry(_x38, _x39, _x40) {
  return _askSchoolCountry.apply(this, arguments);
} // ADI's hint also covers the High School Diploma case ("…, or if your highest degree is High School
// Diploma, type “Other,” …"): that clause names a degree but the hint is still the School's.
function _askSchoolCountry() {
  _askSchoolCountry = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee48(schoolName, fieldId, shouldAbort) {
    var _t22, _t23;
    return autofill_regenerator().w(function (_context51) {
      while (1) switch (_context51.p = _context51.n) {
        case 0:
          if (!shouldAbort()) {
            _context51.n = 1;
            break;
          }
          return _context51.a(2, null);
        case 1:
          _context51.p = 1;
          _t22 = readSchoolCountryAnswer;
          _context51.n = 2;
          return getAnswer("Country where the school \"".concat(schoolName, "\" from your education history is located (the country name only)"), 'text', [], {
            required: true
          }, "".concat(fieldId, ":country"), true);
        case 2:
          return _context51.a(2, _t22(_context51.v));
        case 3:
          _context51.p = 3;
          _t23 = _context51.v;
          return _context51.a(2, null);
      }
    }, _callee48, null, [[1, 3]]);
  }));
  return _askSchoolCountry.apply(this, arguments);
}
var SCHOOL_HINT_HIGH_SCHOOL_CLAUSE = /\b(?:(?:highest\s+)?(?:degree|level\s+of\s+education)\s+is\s+(?:an?\s+)?)?high\s+school(?:\s+(?:diploma|degree))?\b/gi;
function getSchoolNotListedLabel(schoolField) {
  for (var _i3 = 0, _arr3 = [schoolField, getEducationSection()]; _i3 < _arr3.length; _i3++) {
    var scope = _arr3[_i3];
    var text = normalizeWorkdayText(scope === null || scope === void 0 ? void 0 : scope.textContent);
    for (var _i4 = 0, _SCHOOL_NOT_LISTED_HI = SCHOOL_NOT_LISTED_HINT_PATTERNS; _i4 < _SCHOOL_NOT_LISTED_HI.length; _i4++) {
      var _match$;
      var pattern = _SCHOOL_NOT_LISTED_HI[_i4];
      var match = text.match(pattern);
      if (!match) continue;
      // The hint must be about the school ("Select your school or university from the list. If it
      // does not appear, …"), never a Degree / Field of Study hint in the same section.
      var lead = text.slice(Math.max(0, match.index - SCHOOL_NOT_LISTED_HINT_LEAD), match.index + match[0].length);
      if (!/school|universit|college|institution/i.test(lead) || /degree|field of study|major/i.test(match[0].replace(SCHOOL_HINT_HIGH_SCHOOL_CLAUSE, ' '))) continue;
      var label = ((_match$ = match[1]) !== null && _match$ !== void 0 ? _match$ : match[2]).replace(/[\s.,;:!?]+$/, '');
      if (label) return label;
    }
  }
  return null;
}

// A list with a plain "Others" / "Other" entry and no hint of its own: ocbc.wd102 (prod
// 2026-10-19..20) lists 248 "Others" entries and gives no instructions; on 3 doctor sessions the
// school was not in OCBC's list and the doctor's "Others" cleared the stall. Used only when the
// page quotes no label, and only as the exact entry.
var SCHOOL_GENERIC_NOT_LISTED_LABELS = ['Others', 'Other'];

// Words that say what kind of school, not which one.
var SCHOOL_GENERIC_WORDS = new Set(['and', 'at', 'college', 'de', 'for', 'in', 'inst', 'institute', 'institution', 'of', 'saint', 'school', 'st', 'the', 'univ', 'universidad', 'universite', 'university']);
function getSchoolWords(value) {
  return normalizeComparisonText(String(value !== null && value !== void 0 ? value : '').normalize('NFD').replace(/(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFA-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDE41\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74\uDFB8-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFCA\uDFCC-\uDFD0\uDFD2\uDFE1\uDFE2]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99\uDF60-\uDF67]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6\uDF00\uDF01\uDF03\uDF34-\uDF3A\uDF3E-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF])/g, '')).split(/(?:[\0-\/:-@\[-`\{-\xA9\xAB-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u065F\u066A-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07BF\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u0890-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0965\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09E5\u09F2\u09F3\u09FA\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A65\u0A70\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AE5\u0AF0-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B65\u0B70\u0B78-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0BE5\u0BF3-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5E\u0C5F\u0C62-\u0C65\u0C70-\u0C77\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDB\u0CDF\u0CE2-\u0CE5\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57\u0D62-\u0D65\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DE5\u0DF0-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F1F\u0F34-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u104A-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u1368\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u17DF\u17EA-\u17EF\u17FA-\u180F\u181A-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A17-\u1A1F\u1A55-\u1A7F\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B4F\u1B5A-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BFF\u1C24-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C8B-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFC\u2CFE\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3008-\u3020\u302A-\u3030\u3036\u3037\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31C0-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6F0-\uA716\uA720\uA721\uA789\uA78A\uA7DD-\uA7F0\uA802\uA806\uA80B\uA823-\uA82F\uA836-\uA83F\uA874-\uA881\uA8B4-\uA8CF\uA8DA-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9DA-\uA9DF\uA9E5\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEE0\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC57\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1F\uDD3A-\uDD3F\uDD5A-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE3F\uDE49-\uDE5F\uDE7F\uDEA0-\uDEBF\uDEC8\uDEE5-\uDEEA\uDEF0-\uDEFF\uDF36-\uDF3F\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD24-\uDD2F\uDD3A-\uDD3F\uDD66-\uDD6E\uDD86-\uDE5F\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEC1\uDEC8-\uDEFF\uDF28-\uDF2F\uDF46-\uDF50\uDF55-\uDF6F\uDF82-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC51\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDD02\uDD27-\uDD35\uDD40-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDCF\uDDDB\uDDDD-\uDDE0\uDDF5-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDEEF\uDEFA-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD4-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC4F\uDC5A-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEBF\uDECA-\uDECF\uDEE4-\uDEFF\uDF1B-\uDF2F\uDF3C-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFBF\uDFE1-\uDFEF\uDFFA-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC4F\uDC6D-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDD9F\uDDAA-\uDDAF\uDDDC-\uDDDF\uDDEA-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDF4F\uDF5A-\uDFAF\uDFB1-\uDFBF\uDFD5-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD836\uD83D\uD83F\uD87C\uD87D\uD87F\uD88E-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDD2F\uDD3A-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6F\uDEBF\uDECA-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD6D-\uDD6F\uDD7A-\uDE3F\uDE97-\uDE9F\uDEB9\uDEBA\uDED4-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFF1\uDFF7-\uDFFF]|\uD823[\uDCD6-\uDCFE\uDD1F-\uDD7F\uDDF3-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD833[\uDC00-\uDCEF\uDCFA-\uDFFF]|\uD834[\uDC00-\uDEBF\uDED4-\uDEDF\uDEF4-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDEEF\uDEFA-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDCEF\uDCFA-\uDDCF\uDDEE\uDDEF\uDDFB-\uDEBF\uDEDF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5-\uDEFD\uDF00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD0-\uDCFF\uDD44-\uDD4A\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCAC\uDCB0\uDCB5-\uDD00\uDD2E\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEAE\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD88D[\uDC7A-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+/).filter(function (word) {
    return word.length > 1 && !SCHOOL_GENERIC_WORDS.has(word);
  });
}

// Every word that says which school, single letters and an apostrophe's "s" included: "Texas A&M
// University" → texas a m, never just "texas" (= "University of Texas").
function getSchoolDistinctiveWords(value) {
  return normalizeComparisonText(String(value !== null && value !== void 0 ? value : '').normalize('NFD').replace(/(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFA-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDE41\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74\uDFB8-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFCA\uDFCC-\uDFD0\uDFD2\uDFE1\uDFE2]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99\uDF60-\uDF67]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6\uDF00\uDF01\uDF03\uDF34-\uDF3A\uDF3E-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF])/g, '').replace(/['’]/g, '')).split(/(?:[\0-\/:-@\[-`\{-\xA9\xAB-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u065F\u066A-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07BF\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u0890-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0965\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09E5\u09F2\u09F3\u09FA\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A65\u0A70\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AE5\u0AF0-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B65\u0B70\u0B78-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0BE5\u0BF3-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5E\u0C5F\u0C62-\u0C65\u0C70-\u0C77\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDB\u0CDF\u0CE2-\u0CE5\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57\u0D62-\u0D65\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DE5\u0DF0-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F1F\u0F34-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u104A-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u1368\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u17DF\u17EA-\u17EF\u17FA-\u180F\u181A-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A17-\u1A1F\u1A55-\u1A7F\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B4F\u1B5A-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BFF\u1C24-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C8B-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFC\u2CFE\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3008-\u3020\u302A-\u3030\u3036\u3037\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31C0-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6F0-\uA716\uA720\uA721\uA789\uA78A\uA7DD-\uA7F0\uA802\uA806\uA80B\uA823-\uA82F\uA836-\uA83F\uA874-\uA881\uA8B4-\uA8CF\uA8DA-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9DA-\uA9DF\uA9E5\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEE0\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC57\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1F\uDD3A-\uDD3F\uDD5A-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE3F\uDE49-\uDE5F\uDE7F\uDEA0-\uDEBF\uDEC8\uDEE5-\uDEEA\uDEF0-\uDEFF\uDF36-\uDF3F\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD24-\uDD2F\uDD3A-\uDD3F\uDD66-\uDD6E\uDD86-\uDE5F\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEC1\uDEC8-\uDEFF\uDF28-\uDF2F\uDF46-\uDF50\uDF55-\uDF6F\uDF82-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC51\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDD02\uDD27-\uDD35\uDD40-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDCF\uDDDB\uDDDD-\uDDE0\uDDF5-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDEEF\uDEFA-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD4-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC4F\uDC5A-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEBF\uDECA-\uDECF\uDEE4-\uDEFF\uDF1B-\uDF2F\uDF3C-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFBF\uDFE1-\uDFEF\uDFFA-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC4F\uDC6D-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDD9F\uDDAA-\uDDAF\uDDDC-\uDDDF\uDDEA-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDF4F\uDF5A-\uDFAF\uDFB1-\uDFBF\uDFD5-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD836\uD83D\uD83F\uD87C\uD87D\uD87F\uD88E-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDD2F\uDD3A-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6F\uDEBF\uDECA-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD6D-\uDD6F\uDD7A-\uDE3F\uDE97-\uDE9F\uDEB9\uDEBA\uDED4-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFF1\uDFF7-\uDFFF]|\uD823[\uDCD6-\uDCFE\uDD1F-\uDD7F\uDDF3-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD833[\uDC00-\uDCEF\uDCFA-\uDFFF]|\uD834[\uDC00-\uDEBF\uDED4-\uDEDF\uDEF4-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDEEF\uDEFA-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDCEF\uDCFA-\uDDCF\uDDEE\uDDEF\uDDFB-\uDEBF\uDEDF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5-\uDEFD\uDF00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD0-\uDCFF\uDD44-\uDD4A\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCAC\uDCB0\uDCB5-\uDD00\uDD2E\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEAE\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD88D[\uDC7A-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+/).filter(function (word) {
    return word && !SCHOOL_GENERIC_WORDS.has(word);
  });
}

// Whether a listed school differs from the name only in its kind-of-school words ("Medaille College"
// for "Medaille"): the same distinctive words, in any order, nothing more and nothing less.
function hasSameSchoolWords(name, text) {
  var wanted = autofill_toConsumableArray(new Set(getSchoolDistinctiveWords(name))).sort();
  var listed = autofill_toConsumableArray(new Set(getSchoolDistinctiveWords(text))).sort();
  return wanted.length > 0 && wanted.length === listed.length && wanted.every(function (word, index) {
    return word === listed[index];
  });
}

// Whether a listed school can be the one the search term names: every distinctive word of the term
// is in it — the same word, its plural, or spelled out from a short form ("Tech" → "Technology",
// "Penn" → "Pennsylvania"); an acronym ("UC", "IIT") may be spelled out entirely. ocbc.wd102 picked
// "International University College of Technology Twintech" for "International Technological
// University" (doctor 49e3747b): a wrong school is worse than an empty one or the list's "Others".
function schoolOptionFitsTerm(term, text) {
  var _String$match;
  var acronyms = new Set(((_String$match = String(term !== null && term !== void 0 ? term : '').match(/\b[A-Z]{2,6}\b/g)) !== null && _String$match !== void 0 ? _String$match : []).map(function (word) {
    return word.toLowerCase();
  }));
  var textWords = getSchoolWords(text);
  return getSchoolWords(term).filter(function (word) {
    return !acronyms.has(word);
  }).every(function (word) {
    return textWords.some(function (candidate) {
      return candidate === word || candidate === "".concat(word, "s") || word === "".concat(candidate, "s") || word.length >= 3 && candidate.startsWith(word);
    });
  });
}

// A school name with case, accents, punctuation and a leading "The" dropped: "The Ohio State
// University" and "Ohio State University" compare equal, as do "University of California San Diego"
// and the list's "University of California-San Diego".
function getSchoolCompareText(value) {
  return normalizeComparisonText(String(value !== null && value !== void 0 ? value : '').normalize('NFD').replace(/(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFA-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDE41\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74\uDFB8-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFCA\uDFCC-\uDFD0\uDFD2\uDFE1\uDFE2]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99\uDF60-\uDF67]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6\uDF00\uDF01\uDF03\uDF34-\uDF3A\uDF3E-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF])/g, '')).replace(/(?:[\0-\/:-@\[-`\{-\xA9\xAB-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u065F\u066A-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07BF\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u0890-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0965\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09E5\u09F2\u09F3\u09FA\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A65\u0A70\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AE5\u0AF0-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B65\u0B70\u0B78-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0BE5\u0BF3-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5E\u0C5F\u0C62-\u0C65\u0C70-\u0C77\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDB\u0CDF\u0CE2-\u0CE5\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57\u0D62-\u0D65\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DE5\u0DF0-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F1F\u0F34-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u104A-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u1368\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u17DF\u17EA-\u17EF\u17FA-\u180F\u181A-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A17-\u1A1F\u1A55-\u1A7F\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B4F\u1B5A-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BFF\u1C24-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C8B-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFC\u2CFE\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3008-\u3020\u302A-\u3030\u3036\u3037\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31C0-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6F0-\uA716\uA720\uA721\uA789\uA78A\uA7DD-\uA7F0\uA802\uA806\uA80B\uA823-\uA82F\uA836-\uA83F\uA874-\uA881\uA8B4-\uA8CF\uA8DA-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9DA-\uA9DF\uA9E5\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEE0\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC57\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1F\uDD3A-\uDD3F\uDD5A-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE3F\uDE49-\uDE5F\uDE7F\uDEA0-\uDEBF\uDEC8\uDEE5-\uDEEA\uDEF0-\uDEFF\uDF36-\uDF3F\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD24-\uDD2F\uDD3A-\uDD3F\uDD66-\uDD6E\uDD86-\uDE5F\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEC1\uDEC8-\uDEFF\uDF28-\uDF2F\uDF46-\uDF50\uDF55-\uDF6F\uDF82-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC51\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDD02\uDD27-\uDD35\uDD40-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDCF\uDDDB\uDDDD-\uDDE0\uDDF5-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDEEF\uDEFA-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD4-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC4F\uDC5A-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEBF\uDECA-\uDECF\uDEE4-\uDEFF\uDF1B-\uDF2F\uDF3C-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFBF\uDFE1-\uDFEF\uDFFA-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC4F\uDC6D-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDD9F\uDDAA-\uDDAF\uDDDC-\uDDDF\uDDEA-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDF4F\uDF5A-\uDFAF\uDFB1-\uDFBF\uDFD5-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD836\uD83D\uD83F\uD87C\uD87D\uD87F\uD88E-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDD2F\uDD3A-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6F\uDEBF\uDECA-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD6D-\uDD6F\uDD7A-\uDE3F\uDE97-\uDE9F\uDEB9\uDEBA\uDED4-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFF1\uDFF7-\uDFFF]|\uD823[\uDCD6-\uDCFE\uDD1F-\uDD7F\uDDF3-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD833[\uDC00-\uDCEF\uDCFA-\uDFFF]|\uD834[\uDC00-\uDEBF\uDED4-\uDEDF\uDEF4-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDEEF\uDEFA-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDCEF\uDCFA-\uDDCF\uDDEE\uDDEF\uDDFB-\uDEBF\uDEDF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5-\uDEFD\uDF00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD0-\uDCFF\uDD44-\uDD4A\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCAC\uDCB0\uDCB5-\uDD00\uDD2E\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEAE\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD88D[\uDC7A-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+/g, ' ').trim().replace(/^the\s+/, '');
}

// Workday's institution list names one entry per campus: "Ohio State University" lists Lima, Main,
// Mansfield, Marion and Newark campuses plus its Agricultural Technical Institute; "University of
// Michigan" lists Ann Arbor, Dearborn and Flint next to Michigan State University College of Law
// (onehealthineers.wd3, doctor 2026-10-20). An embedding pick among those is a coin toss, so the
// list entry is decided here when the names decide it: the entry that IS the name, else the name's
// "Main Campus" (the bare name means the main campus), else its only campus. Several campuses and
// nothing that names one: searching the résumé's own name, the embedding still picks, but only among
// that name's campuses ({ narrowTo }); searching a SHORTENED name ("University of California, US" →
// "University of California") = { ambiguous: true } — a wrong school is worse than an empty one,
// which parks for a person. null = no campus entries; the embedding picks as before.
function pickListedSchool(options, names) {
  var _ref1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref1$searchedFullNam = _ref1.searchedFullName,
    searchedFullName = _ref1$searchedFullNam === void 0 ? false : _ref1$searchedFullNam;
  var wanted = autofill_toConsumableArray(new Set(names.map(getSchoolCompareText).filter(Boolean)));
  var listed = options.map(function (option) {
    return {
      option: option,
      text: getSchoolCompareText(option.text)
    };
  });
  var exact = listed.find(function (_ref10) {
    var text = _ref10.text;
    return wanted.includes(text);
  });
  if (exact) return {
    option: exact.option
  };
  var _iterator0 = autofill_createForOfIteratorHelper(wanted),
    _step0;
  try {
    var _loop = function _loop() {
        var name = _step0.value;
        var campuses = listed.filter(function (_ref11) {
          var text = _ref11.text;
          return text.startsWith("".concat(name, " "));
        });
        if (campuses.length === 0) return 0; // continue
        var mainCampus = campuses.find(function (_ref12) {
          var text = _ref12.text;
          return text === "".concat(name, " main campus");
        });
        if (mainCampus) return {
          v: {
            option: mainCampus.option
          }
        };
        if (campuses.length === 1) return {
          v: {
            option: campuses[0].option
          }
        };
        return {
          v: searchedFullName ? {
            narrowTo: campuses.map(function (_ref13) {
              var option = _ref13.option;
              return option;
            })
          } : {
            ambiguous: true
          }
        };
      },
      _ret;
    for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
      _ret = _loop();
      if (_ret === 0) continue;
      if (_ret) return _ret.v;
    }
  } catch (err) {
    _iterator0.e(err);
  } finally {
    _iterator0.f();
  }
  return null;
}

// Whether a list entry IS one of the names or a campus of it ("New York University", "New York
// University-Abu Dhabi") — the check a strict search term applies instead of schoolOptionFitsTerm.
function isSchoolNameOrCampus(names, text) {
  var listed = getSchoolCompareText(text);
  return names.map(getSchoolCompareText).filter(Boolean).some(function (name) {
    return listed === name || listed.startsWith("".concat(name, " "));
  });
}

// Words a listed school may carry beyond the résumé's name and still be that school: a campus label,
// and the system acronym Workday puts in front of a member college ("CUNY City College").
var SCHOOL_LISTING_WORDS = new Set(['campus', 'main'].concat(autofill_toConsumableArray(Object.keys(SCHOOL_SYSTEM_ACRONYMS).map(function (acronym) {
  return acronym.toLowerCase();
}))));

// The system a school belongs to and the words naming its campus ("University of California, Irvine"
// and "UC Irvine" → university of california + [irvine]), or null when it is no system's school. A
// country or state code after the name names no campus ("University of California, US").
var SCHOOL_PLACE_WORDS = new Set(['usa', 'united', 'states', 'america']);
function getSchoolSystemCampus(value) {
  var name = getSchoolCompareText(value);
  for (var _i5 = 0, _Object$entries = Object.entries(SCHOOL_SYSTEM_ACRONYMS); _i5 < _Object$entries.length; _i5++) {
    var _Object$entries$_i = autofill_slicedToArray(_Object$entries[_i5], 2),
      acronym = _Object$entries$_i[0],
      system = _Object$entries$_i[1];
    var systemName = getSchoolCompareText(system);
    var prefix = [systemName, acronym.toLowerCase()].find(function (candidate) {
      return name.startsWith("".concat(candidate, " "));
    });
    if (prefix) {
      var campus = getSchoolWords(name.slice(prefix.length)).filter(function (word) {
        return word.length > 2 && !SCHOOL_LISTING_WORDS.has(word) && !SCHOOL_PLACE_WORDS.has(word);
      });
      return {
        system: systemName,
        campus: campus
      };
    }
  }
  return null;
}

// A university system's campuses are separate universities: a listed campus that shares no word with
// the campus the résumé names is another school. ocbc.wd102 (doctor case c7e1410b, prod 2026-10-23)
// lists "University of California, Berkeley" but not Irvine; the shortened "University of California"
// search listed Berkeley alone, and "its only campus" would have answered an Irvine degree with it.
function isOtherSystemCampus(fullName, text) {
  var wanted = getSchoolSystemCampus(fullName);
  if (!(wanted !== null && wanted !== void 0 && wanted.campus.length)) return false;
  var listed = getSchoolSystemCampus(text);
  return Boolean(listed && listed.system === wanted.system && listed.campus.length > 0 && !listed.campus.some(function (word) {
    return wanted.campus.includes(word);
  }));
}

// Whether a listed school names something the résumé never says: a distinctive word that is in none
// of `said` (the same word, a plural, or spelled out from a short form: "Tech" → "Technology"), not a
// campus label or system acronym, on an entry that is not one of `names` or a campus of it. Workday
// commits a search's ONLY hit on Enter: BigCommerce (bigcommerce.wd12, doctor 7c9ccfb2, 2026-10-22)
// answered "City College of New York" with "CUNY New York City College of Technology" — every word
// of the search is in it, and so is "Technology": a different college. A search carrying an acronym
// ("IIT Bombay" → "Indian Institute of Technology-Bombay") is spelled out by the list, so it is not
// judged here.
function namesAnotherSchool(text, term, said, names) {
  if (/\b[A-Z]{2,6}\b/.test(term) || isSchoolNameOrCampus(names, text)) return false;
  var saidWords = said.flatMap(getSchoolWords);
  return getSchoolWords(text).some(function (word) {
    return !SCHOOL_LISTING_WORDS.has(word) && !saidWords.some(function (saidWord) {
      return saidWord === word || "".concat(saidWord, "s") === word || saidWord === "".concat(word, "s") || saidWord.length >= 3 && word.startsWith(saidWord);
    });
  });
}
function fillEducationSchoolField(_x41, _x42) {
  return _fillEducationSchoolField.apply(this, arguments);
}
function _fillEducationSchoolField() {
  _fillEducationSchoolField = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee49(schoolField, schoolValue) {
    var _schoolField$matches;
    var shouldAbort,
      multiselectInput,
      fieldId,
      fullName,
      getLiveSchoolField,
      outcomes,
      terms,
      fitsSearchTerm,
      quotedLabel,
      fallbackLabels,
      isFallbackLabel,
      isCountryFallbackEntry,
      kept,
      _iterator13,
      _step13,
      _loop5,
      _ret5,
      _getMultiselectInput,
      inputId,
      _iterator14,
      _step14,
      _loop6,
      _ret6,
      schoolInput,
      _args55 = arguments,
      _t25,
      _t26;
    return autofill_regenerator().w(function (_context55) {
      while (1) switch (_context55.p = _context55.n) {
        case 0:
          shouldAbort = _args55.length > 2 && _args55[2] !== undefined ? _args55[2] : autofill_NEVER_ABORT;
          if (!(!schoolField || !schoolValue || shouldAbort())) {
            _context55.n = 1;
            break;
          }
          return _context55.a(2);
        case 1:
          multiselectInput = getMultiselectInput(schoolField);
          if (!multiselectInput) {
            _context55.n = 23;
            break;
          }
          fieldId = getFieldId(schoolField, 'Education: School');
          fullName = normalizeWorkdayText(schoolValue); // The fieldId is the prompt INPUT's id, so resolveLiveField returns the bare input; the
          // selected pill lives in the formField wrapper around it.
          getLiveSchoolField = function getLiveSchoolField() {
            var _liveInput$closest;
            var liveInput = resolveLiveField(fieldId, schoolField);
            return (liveInput === null || liveInput === void 0 || (_liveInput$closest = liveInput.closest) === null || _liveInput$closest === void 0 ? void 0 : _liveInput$closest.call(liveInput, '[data-automation-id^="formField-"]')) || liveInput;
          };
          outcomes = [];
          terms = buildSchoolSearchTerms(schoolValue);
          fitsSearchTerm = function fitsSearchTerm(_ref47, text) {
            var fit = _ref47.fit,
              names = _ref47.names,
              strict = _ref47.strict,
              sameWords = _ref47.sameWords;
            if (isOtherSystemCampus(fullName, text)) return false;
            if (sameWords) return hasSameSchoolWords(fit, text);
            return strict ? isSchoolNameOrCampus(names, text) : schoolOptionFitsTerm(fit, text) && !namesAnotherSchool(text, fit, [fullName, fit].concat(autofill_toConsumableArray(names)), [fullName].concat(autofill_toConsumableArray(names)));
          };
          quotedLabel = getSchoolNotListedLabel(schoolField);
          fallbackLabels = quotedLabel ? [quotedLabel] : SCHOOL_GENERIC_NOT_LISTED_LABELS;
          isFallbackLabel = function isFallbackLabel(text) {
            return fallbackLabels.some(function (label) {
              return isSchoolNotListedEntry(label, text);
            });
          };
          isCountryFallbackEntry = function isCountryFallbackEntry(text) {
            return fallbackLabels.some(function (label) {
              return getSchoolNotListedPlace(label, text);
            });
          }; // A pill already in the box (a resumed draft, an earlier run) stays only when it is this school or
          // the list's "not listed" entry. Workday keeps a draft's My Experience across runs: on Airbus
          // (ag.wd3, lab 2026-10-23) an older build's near-name pick — "International University College of
          // Technology Twintech" for "International Technological University" — came back with the draft,
          // and keeping it would have sent the wrong school.
          kept = getSelectedItemTexts(getLiveSchoolField());
          if (!(kept.length > 0 && !kept.every(function (text) {
            return isFallbackLabel(text) || isCountryFallbackEntry(text) || terms.some(function (term) {
              return fitsSearchTerm(term, text);
            });
          }))) {
            _context55.n = 2;
            break;
          }
          _context55.n = 2;
          return clearMultiselectSelections(getLiveSchoolField(), 'Education: School');
        case 2:
          _iterator13 = autofill_createForOfIteratorHelper(terms);
          _context55.p = 3;
          _loop5 = /*#__PURE__*/autofill_regenerator().m(function _loop5() {
            var searchTerm, term, names, sameWords, liveField, searchedFullName, fitsTerm, committed, _t24;
            return autofill_regenerator().w(function (_context52) {
              while (1) switch (_context52.n) {
                case 0:
                  searchTerm = _step13.value;
                  term = searchTerm.term, names = searchTerm.names, sameWords = searchTerm.sameWords;
                  if (!shouldAbort()) {
                    _context52.n = 1;
                    break;
                  }
                  return _context52.a(2, {
                    v: void 0
                  });
                case 1:
                  liveField = getLiveSchoolField();
                  if (!(getSelectedItemTexts(liveField).length > 0)) {
                    _context52.n = 2;
                    break;
                  }
                  return _context52.a(2, {
                    v: void 0
                  });
                case 2:
                  searchedFullName = getSchoolCompareText(term) === getSchoolCompareText(fullName);
                  fitsTerm = function fitsTerm(text) {
                    return fitsSearchTerm(searchTerm, text);
                  };
                  _t24 = outcomes;
                  _context52.n = 3;
                  return FIELD_KIND_HANDLERS.get('multi-select')(fieldId, 'Education: School', [term], liveField, {
                    shouldAbort: shouldAbort,
                    matchText: fullName,
                    optionFilter: function optionFilter(option) {
                      return fitsTerm(option.text);
                    },
                    // Two entries with the same distinctive words are two schools: neither is taken.
                    pickOption: sameWords ? function (options) {
                      return options.length === 1 ? {
                        option: options[0]
                      } : {
                        unmatched: true
                      };
                    } : function (options) {
                      return pickListedSchool(options, [fullName].concat(autofill_toConsumableArray(names)), {
                        searchedFullName: searchedFullName
                      });
                    }
                  });
                case 3:
                  _t24.push.call(_t24, _context52.v);
                  if (!(outcomes.at(-1) === 'ambiguous')) {
                    _context52.n = 4;
                    break;
                  }
                  return _context52.a(2, 0);
                case 4:
                  // A pill the prompt committed by itself on Enter has to fit the term as well.
                  committed = getSelectedItemTexts(getLiveSchoolField());
                  if (!(committed.length > 0 && !committed.some(fitsTerm))) {
                    _context52.n = 5;
                    break;
                  }
                  _context52.n = 5;
                  return clearMultiselectSelections(getLiveSchoolField(), 'Education: School');
                case 5:
                  return _context52.a(2);
              }
            }, _loop5);
          });
          _iterator13.s();
        case 4:
          if ((_step13 = _iterator13.n()).done) {
            _context55.n = 8;
            break;
          }
          return _context55.d(autofill_regeneratorValues(_loop5()), 5);
        case 5:
          _ret5 = _context55.v;
          if (!(_ret5 === 0)) {
            _context55.n = 6;
            break;
          }
          return _context55.a(3, 8);
        case 6:
          if (!_ret5) {
            _context55.n = 7;
            break;
          }
          return _context55.a(2, _ret5.v);
        case 7:
          _context55.n = 4;
          break;
        case 8:
          _context55.n = 10;
          break;
        case 9:
          _context55.p = 9;
          _t25 = _context55.v;
          _iterator13.e(_t25);
        case 10:
          _context55.p = 10;
          _iterator13.f();
          return _context55.f(10);
        case 11:
          if (!(outcomes.includes('timeout') || outcomes.includes('ambiguous') || shouldAbort())) {
            _context55.n = 12;
            break;
          }
          return _context55.a(2);
        case 12:
          if (!(!quotedLabel && educationAsksToLeaveUnlistedSchoolOut())) {
            _context55.n = 13;
            break;
          }
          inputId = (_getMultiselectInput = getMultiselectInput(getLiveSchoolField())) === null || _getMultiselectInput === void 0 ? void 0 : _getMultiselectInput.id;
          if (inputId && getSelectedItemTexts(getLiveSchoolField()).length === 0) {
            console.log('[bidhub][workday] school not in the tenant list — the page asks to leave the entry out', {
              inputId: inputId
            });
            unlistedSchoolInputIds.add(inputId);
          }
          return _context55.a(2);
        case 13:
          _iterator14 = autofill_createForOfIteratorHelper(fallbackLabels);
          _context55.p = 14;
          _loop6 = /*#__PURE__*/autofill_regenerator().m(function _loop6() {
            var label, listed, committed, _loop7, _ret7, _i6, _arr4;
            return autofill_regenerator().w(function (_context54) {
              while (1) switch (_context54.n) {
                case 0:
                  label = _step14.value;
                  if (!shouldAbort()) {
                    _context54.n = 1;
                    break;
                  }
                  return _context54.a(2, {
                    v: void 0
                  });
                case 1:
                  if (!(getSelectedItemTexts(getLiveSchoolField()).length > 0)) {
                    _context54.n = 2;
                    break;
                  }
                  return _context54.a(2, {
                    v: void 0
                  });
                case 2:
                  console.log('[bidhub][workday] school not in the tenant list — picking its own entry', {
                    label: label
                  });
                  listed = [];
                  _context54.n = 3;
                  return FIELD_KIND_HANDLERS.get('multi-select')(fieldId, 'Education: School', [label], getLiveSchoolField(), {
                    shouldAbort: shouldAbort,
                    exactMatch: true,
                    optionFilter: function optionFilter(option) {
                      return listed.push(option.text) > 0;
                    }
                  });
                case 3:
                  // Only the entry itself stays, never a neighbour the prompt committed on Enter.
                  committed = getSelectedItemTexts(getLiveSchoolField());
                  if (!(committed.length > 0 && !committed.every(isFallbackLabel))) {
                    _context54.n = 4;
                    break;
                  }
                  _context54.n = 4;
                  return clearMultiselectSelections(getLiveSchoolField(), 'Education: School');
                case 4:
                  if (!(getSelectedItemTexts(getLiveSchoolField()).length > 0 || !listed.some(function (text) {
                    return getSchoolNotListedPlace(label, text);
                  }))) {
                    _context54.n = 5;
                    break;
                  }
                  return _context54.a(2, 0);
                case 5:
                  _loop7 = /*#__PURE__*/autofill_regenerator().m(function _loop7() {
                    var getCountry, country, isCountryEntry, countryPick;
                    return autofill_regenerator().w(function (_context53) {
                      while (1) switch (_context53.n) {
                        case 0:
                          getCountry = _arr4[_i6];
                          if (!(shouldAbort() || getSelectedItemTexts(getLiveSchoolField()).length > 0)) {
                            _context53.n = 1;
                            break;
                          }
                          return _context53.a(2, 0);
                        case 1:
                          _context53.n = 2;
                          return getCountry();
                        case 2:
                          country = _context53.v;
                          if (!(!country || shouldAbort())) {
                            _context53.n = 3;
                            break;
                          }
                          return _context53.a(2, 1);
                        case 3:
                          isCountryEntry = function isCountryEntry(text) {
                            return isSchoolNotListedCountryEntry(label, text, country);
                          };
                          console.log('[bidhub][workday] school not in the tenant list — picking its entry for the country', {
                            label: label,
                            country: country
                          });
                          _context53.n = 4;
                          return FIELD_KIND_HANDLERS.get('multi-select')(fieldId, 'Education: School', ["".concat(label, " ").concat(getSchoolCountrySearchName(country))], getLiveSchoolField(), {
                            shouldAbort: shouldAbort,
                            optionFilter: function optionFilter(option) {
                              return isCountryEntry(option.text);
                            },
                            pickOption: function pickOption(options) {
                              return options.length === 1 ? {
                                option: options[0]
                              } : {
                                unmatched: true
                              };
                            }
                          });
                        case 4:
                          countryPick = getSelectedItemTexts(getLiveSchoolField());
                          if (!(countryPick.length > 0 && !countryPick.every(isCountryEntry))) {
                            _context53.n = 5;
                            break;
                          }
                          _context53.n = 5;
                          return clearMultiselectSelections(getLiveSchoolField(), 'Education: School');
                        case 5:
                          return _context53.a(2);
                      }
                    }, _loop7);
                  });
                  _i6 = 0, _arr4 = [function () {
                    return getSchoolLocationCountry(schoolValue);
                  }, function () {
                    return askSchoolCountry(fullName, fieldId, shouldAbort);
                  }];
                case 6:
                  if (!(_i6 < _arr4.length)) {
                    _context54.n = 10;
                    break;
                  }
                  return _context54.d(autofill_regeneratorValues(_loop7()), 7);
                case 7:
                  _ret7 = _context54.v;
                  if (!(_ret7 === 0)) {
                    _context54.n = 8;
                    break;
                  }
                  return _context54.a(3, 10);
                case 8:
                  if (!(_ret7 === 1)) {
                    _context54.n = 9;
                    break;
                  }
                  return _context54.a(3, 9);
                case 9:
                  _i6++;
                  _context54.n = 6;
                  break;
                case 10:
                  return _context54.a(2);
              }
            }, _loop6);
          });
          _iterator14.s();
        case 15:
          if ((_step14 = _iterator14.n()).done) {
            _context55.n = 19;
            break;
          }
          return _context55.d(autofill_regeneratorValues(_loop6()), 16);
        case 16:
          _ret6 = _context55.v;
          if (!(_ret6 === 0)) {
            _context55.n = 17;
            break;
          }
          return _context55.a(3, 18);
        case 17:
          if (!_ret6) {
            _context55.n = 18;
            break;
          }
          return _context55.a(2, _ret6.v);
        case 18:
          _context55.n = 15;
          break;
        case 19:
          _context55.n = 21;
          break;
        case 20:
          _context55.p = 20;
          _t26 = _context55.v;
          _iterator14.e(_t26);
        case 21:
          _context55.p = 21;
          _iterator14.f();
          return _context55.f(21);
        case 22:
          return _context55.a(2);
        case 23:
          schoolInput = (_schoolField$matches = schoolField.matches) !== null && _schoolField$matches !== void 0 && _schoolField$matches.call(schoolField, 'input') ? schoolField : getVisibleTextInput(schoolField);
          if (schoolInput) {
            _context55.n = 24;
            break;
          }
          return _context55.a(2);
        case 24:
          _context55.n = 25;
          return fillWorkdayTextInput(schoolInput, schoolValue, shouldAbort);
        case 25:
          return _context55.a(2);
      }
    }, _callee49, null, [[14, 20, 21, 22], [3, 9, 10, 11]]);
  }));
  return _fillEducationSchoolField.apply(this, arguments);
}
function getBlockRows(section) {
  if (!section) return [];
  return Array.from(section.querySelectorAll('h5[id$="-panel"]')).map(function (heading) {
    return heading.closest('[role="group"][aria-labelledby]');
  }).filter(Boolean);
}
function clearBlockRows(_x43) {
  return _clearBlockRows.apply(this, arguments);
} // Workday removes a deleted row client-side, without a server round trip.
function _clearBlockRows() {
  _clearBlockRows = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee50(container) {
    var _ref48,
      _ref48$shouldAbort,
      shouldAbort,
      rows,
      _iterator15,
      _step15,
      row,
      deleteButton,
      _args56 = arguments,
      _t27;
    return autofill_regenerator().w(function (_context56) {
      while (1) switch (_context56.p = _context56.n) {
        case 0:
          _ref48 = _args56.length > 1 && _args56[1] !== undefined ? _args56[1] : {}, _ref48$shouldAbort = _ref48.shouldAbort, shouldAbort = _ref48$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref48$shouldAbort;
          rows = getBlockRows(container);
          _iterator15 = autofill_createForOfIteratorHelper(autofill_toConsumableArray(rows).reverse());
          _context56.p = 1;
          _iterator15.s();
        case 2:
          if ((_step15 = _iterator15.n()).done) {
            _context56.n = 6;
            break;
          }
          row = _step15.value;
          if (!shouldAbort()) {
            _context56.n = 3;
            break;
          }
          return _context56.a(2);
        case 3:
          deleteButton = Array.from(row.querySelectorAll('button')).find(function (button) {
            return /\bdelete\b/i.test(normalizeWorkdayText(button.textContent || button.getAttribute('aria-label')));
          });
          if (deleteButton) {
            _context56.n = 4;
            break;
          }
          return _context56.a(3, 5);
        case 4:
          deleteButton.click();
          _context56.n = 5;
          return sleep(180);
        case 5:
          _context56.n = 2;
          break;
        case 6:
          _context56.n = 8;
          break;
        case 7:
          _context56.p = 7;
          _t27 = _context56.v;
          _iterator15.e(_t27);
        case 8:
          _context56.p = 8;
          _iterator15.f();
          return _context56.f(8);
        case 9:
          return _context56.a(2);
      }
    }, _callee50, null, [[1, 7, 8, 9]]);
  }));
  return _clearBlockRows.apply(this, arguments);
}
var UNLISTED_SCHOOL_ROW_DELETE_WAIT_MS = 2000;

// Deletes the Education entries whose school is not in the employer's list, on a page that asks to
// leave such an entry out (educationAsksToLeaveUnlistedSchoolOut). An entry that holds a school by now
// stays, and so does a row without a Delete button: its empty School still parks for a person.
function dropUnlistedSchoolEntries(_x44) {
  return _dropUnlistedSchoolEntries.apply(this, arguments);
} // Clicks the LAST visible add-button in the container ("Add Another" once rows exist).
function _dropUnlistedSchoolEntries() {
  _dropUnlistedSchoolEntries = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee51(container) {
    var _ref49,
      _ref49$shouldAbort,
      shouldAbort,
      _iterator16,
      _step16,
      _loop8,
      _ret8,
      _args58 = arguments,
      _t28;
    return autofill_regenerator().w(function (_context58) {
      while (1) switch (_context58.p = _context58.n) {
        case 0:
          _ref49 = _args58.length > 1 && _args58[1] !== undefined ? _args58[1] : {}, _ref49$shouldAbort = _ref49.shouldAbort, shouldAbort = _ref49$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref49$shouldAbort;
          _context58.p = 1;
          _iterator16 = autofill_createForOfIteratorHelper(autofill_toConsumableArray(getBlockRows(container)).reverse());
          _context58.p = 2;
          _loop8 = /*#__PURE__*/autofill_regenerator().m(function _loop8() {
            var _getMultiselectInput2;
            var row, schoolField, inputId, deleteButton;
            return autofill_regenerator().w(function (_context57) {
              while (1) switch (_context57.n) {
                case 0:
                  row = _step16.value;
                  if (!(unlistedSchoolInputIds.size === 0 || shouldAbort())) {
                    _context57.n = 1;
                    break;
                  }
                  return _context57.a(2, {
                    v: void 0
                  });
                case 1:
                  schoolField = getEducationSchoolField(row);
                  inputId = (_getMultiselectInput2 = getMultiselectInput(schoolField)) === null || _getMultiselectInput2 === void 0 ? void 0 : _getMultiselectInput2.id;
                  if (!(!inputId || !unlistedSchoolInputIds.has(inputId))) {
                    _context57.n = 2;
                    break;
                  }
                  return _context57.a(2, 0);
                case 2:
                  if (!(getSelectedItemTexts(schoolField).length > 0)) {
                    _context57.n = 3;
                    break;
                  }
                  return _context57.a(2, 0);
                case 3:
                  deleteButton = Array.from(row.querySelectorAll('button')).find(function (button) {
                    return /\bdelete\b/i.test(normalizeWorkdayText(button.textContent || button.getAttribute('aria-label')));
                  });
                  if (deleteButton) {
                    _context57.n = 4;
                    break;
                  }
                  return _context57.a(2, 0);
                case 4:
                  console.log('[bidhub][workday] leaving out the Education entry whose school is not in the list', {
                    inputId: inputId
                  });
                  deleteButton.click();
                  _context57.n = 5;
                  return waitForPositiveResultWithAbort(function () {
                    return row.isConnected ? null : true;
                  }, UNLISTED_SCHOOL_ROW_DELETE_WAIT_MS, shouldAbort, 100);
                case 5:
                  return _context57.a(2);
              }
            }, _loop8);
          });
          _iterator16.s();
        case 3:
          if ((_step16 = _iterator16.n()).done) {
            _context58.n = 7;
            break;
          }
          return _context58.d(autofill_regeneratorValues(_loop8()), 4);
        case 4:
          _ret8 = _context58.v;
          if (!(_ret8 === 0)) {
            _context58.n = 5;
            break;
          }
          return _context58.a(3, 6);
        case 5:
          if (!_ret8) {
            _context58.n = 6;
            break;
          }
          return _context58.a(2, _ret8.v);
        case 6:
          _context58.n = 3;
          break;
        case 7:
          _context58.n = 9;
          break;
        case 8:
          _context58.p = 8;
          _t28 = _context58.v;
          _iterator16.e(_t28);
        case 9:
          _context58.p = 9;
          _iterator16.f();
          return _context58.f(9);
        case 10:
          _context58.p = 10;
          // One section pass only: the next pass re-adds its rows and marks its own prompts.
          unlistedSchoolInputIds.clear();
          return _context58.f(10);
        case 11:
          return _context58.a(2);
      }
    }, _callee51, null, [[2, 8, 9, 10], [1,, 10, 11]]);
  }));
  return _dropUnlistedSchoolEntries.apply(this, arguments);
}
function clickSectionAddButton(_x45) {
  return _clickSectionAddButton.apply(this, arguments);
} // Workday's multi-line fields are UNCONTROLLED (React `defaultValue`) and their only
// handler is `onBlur`: the submitted value is committed to the form model when the
// textarea actually loses focus, NOT on `input`/`change`. Writing the value without a
// real focus->blur cycle leaves the textarea SHOWING the typed text while the model
// stays empty and submits blank. Verified live against a Workday tenant: the exact
// same write commits (and survives a reload from the server model) when preceded by
// focus() and followed by blur(), and does NOT commit without them. So: focus, write
// (with the React state-restore re-assert), then a blur so `onBlur` fires — both through the
// *ElementReliably helpers, which still deliver the events when the tab lacks system focus.
function _clickSectionAddButton() {
  _clickSectionAddButton = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee52(container) {
    var _container$querySelec, _container$querySelec2;
    var _ref50,
      _ref50$shouldAbort,
      shouldAbort,
      addButton,
      _args59 = arguments;
    return autofill_regenerator().w(function (_context59) {
      while (1) switch (_context59.n) {
        case 0:
          _ref50 = _args59.length > 1 && _args59[1] !== undefined ? _args59[1] : {}, _ref50$shouldAbort = _ref50.shouldAbort, shouldAbort = _ref50$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref50$shouldAbort;
          addButton = Array.from((_container$querySelec = container === null || container === void 0 || (_container$querySelec2 = container.querySelectorAll) === null || _container$querySelec2 === void 0 ? void 0 : _container$querySelec2.call(container, 'button[data-automation-id="add-button"]')) !== null && _container$querySelec !== void 0 ? _container$querySelec : []).filter(function (button) {
            return isElementVisible(button);
          }).pop();
          if (!(!addButton || shouldAbort())) {
            _context59.n = 1;
            break;
          }
          return _context59.a(2);
        case 1:
          addButton.click();
          _context59.n = 2;
          return sleep(100);
        case 2:
          return _context59.a(2);
      }
    }, _callee52);
  }));
  return _clickSectionAddButton.apply(this, arguments);
}
function fillWorkdayTextarea(_x46, _x47) {
  return _fillWorkdayTextarea.apply(this, arguments);
}
function _fillWorkdayTextarea() {
  _fillWorkdayTextarea = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee53(textarea, value) {
    var shouldAbort,
      text,
      strictText,
      _args60 = arguments;
    return autofill_regenerator().w(function (_context60) {
      while (1) switch (_context60.n) {
        case 0:
          shouldAbort = _args60.length > 2 && _args60[2] !== undefined ? _args60[2] : autofill_NEVER_ABORT;
          if (textarea) {
            _context60.n = 1;
            break;
          }
          return _context60.a(2);
        case 1:
          text = sanitizeWorkdayTextareaValue(value);
          if (text) {
            _context60.n = 2;
            break;
          }
          return _context60.a(2);
        case 2:
          _context60.n = 3;
          return commitWorkdayTextarea(textarea, text, shouldAbort);
        case 3:
          if (!shouldAbort()) {
            _context60.n = 4;
            break;
          }
          return _context60.a(2);
        case 4:
          _context60.n = 5;
          return sleep(WORKDAY_TEXTAREA_ERROR_SETTLE_MS);
        case 5:
          if (getWorkdayTextareaIllegalCharsError(textarea)) {
            _context60.n = 6;
            break;
          }
          return _context60.a(2);
        case 6:
          strictText = sanitizeWorkdayTextareaValueStrict(text);
          if (!(!strictText || strictText === text)) {
            _context60.n = 7;
            break;
          }
          return _context60.a(2);
        case 7:
          _context60.n = 8;
          return commitWorkdayTextarea(textarea, strictText, shouldAbort);
        case 8:
          return _context60.a(2);
      }
    }, _callee53);
  }));
  return _fillWorkdayTextarea.apply(this, arguments);
}
function commitWorkdayTextarea(_x48, _x49, _x50) {
  return _commitWorkdayTextarea.apply(this, arguments);
} // Workday tenants validate multi-line text fields against a fixed illegal-character set
// (`< > [ ] { } \ "` — the "Contains illegal characters" inline error seen on Role Description).
// Resume bullets routinely carry all of them (`"..."`, `>30%`, `<1s`, `[x]`, `path\to`), and a
// rejected field stalls the step into a required-field handoff. Substitute rather than strip so
// the claim survives (`<1s` → `under 1s`, NOT `1s`); newlines are preserved (achievements are
// newline-joined by getWorkHistoryDescription), only intra-line whitespace runs collapse.
function _commitWorkdayTextarea() {
  _commitWorkdayTextarea = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee54(textarea, text, shouldAbort) {
    return autofill_regenerator().w(function (_context61) {
      while (1) switch (_context61.n) {
        case 0:
          focusElementReliably(textarea);
          _context61.n = 1;
          return fillTextInputReliably(textarea, text, {
            blur: false,
            shouldAbort: shouldAbort
          });
        case 1:
          blurElementReliably(textarea);
        case 2:
          return _context61.a(2);
      }
    }, _callee54);
  }));
  return _commitWorkdayTextarea.apply(this, arguments);
}
var WORKDAY_ILLEGAL_TEXT_CHARS_PATTERN = /[<>[\]{}\\"]/;
// Last-resort allowlist used only when the tenant still rejects the substituted text.
var WORKDAY_STRICT_TEXT_DISALLOWED_PATTERN = /(?:[\0-\x08\x0E-\x1F"<->\[-\^`\{-\}\x7F-\x9F\xA1-\xA9\xAB-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u065F\u066A-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07BF\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u0890-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0965\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09E5\u09F2\u09F3\u09FA\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A65\u0A70\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AE5\u0AF0-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B65\u0B70\u0B78-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0BE5\u0BF3-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5E\u0C5F\u0C62-\u0C65\u0C70-\u0C77\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDB\u0CDF\u0CE2-\u0CE5\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57\u0D62-\u0D65\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DE5\u0DF0-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F1F\u0F34-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u104A-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u1368\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u17DF\u17EA-\u17EF\u17FA-\u180F\u181A-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A17-\u1A1F\u1A55-\u1A7F\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B4F\u1B5A-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BFF\u1C24-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C8B-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFC\u2CFE\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u2FFF\u3001-\u3004\u3008-\u3020\u302A-\u3030\u3036\u3037\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31C0-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6F0-\uA716\uA720\uA721\uA789\uA78A\uA7DD-\uA7F0\uA802\uA806\uA80B\uA823-\uA82F\uA836-\uA83F\uA874-\uA881\uA8B4-\uA8CF\uA8DA-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9DA-\uA9DF\uA9E5\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD\uFEFE\uFF00-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEE0\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC57\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1F\uDD3A-\uDD3F\uDD5A-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE3F\uDE49-\uDE5F\uDE7F\uDEA0-\uDEBF\uDEC8\uDEE5-\uDEEA\uDEF0-\uDEFF\uDF36-\uDF3F\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD24-\uDD2F\uDD3A-\uDD3F\uDD66-\uDD6E\uDD86-\uDE5F\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEC1\uDEC8-\uDEFF\uDF28-\uDF2F\uDF46-\uDF50\uDF55-\uDF6F\uDF82-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC51\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDD02\uDD27-\uDD35\uDD40-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDCF\uDDDB\uDDDD-\uDDE0\uDDF5-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDEEF\uDEFA-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD4-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC4F\uDC5A-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEBF\uDECA-\uDECF\uDEE4-\uDEFF\uDF1B-\uDF2F\uDF3C-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFBF\uDFE1-\uDFEF\uDFFA-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC4F\uDC6D-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDD9F\uDDAA-\uDDAF\uDDDC-\uDDDF\uDDEA-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDF4F\uDF5A-\uDFAF\uDFB1-\uDFBF\uDFD5-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD836\uD83D\uD83F\uD87C\uD87D\uD87F\uD88E-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDD2F\uDD3A-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6F\uDEBF\uDECA-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD6D-\uDD6F\uDD7A-\uDE3F\uDE97-\uDE9F\uDEB9\uDEBA\uDED4-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFF1\uDFF7-\uDFFF]|\uD823[\uDCD6-\uDCFE\uDD1F-\uDD7F\uDDF3-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD833[\uDC00-\uDCEF\uDCFA-\uDFFF]|\uD834[\uDC00-\uDEBF\uDED4-\uDEDF\uDEF4-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDEEF\uDEFA-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDCEF\uDCFA-\uDDCF\uDDEE\uDDEF\uDDFB-\uDEBF\uDEDF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5-\uDEFD\uDF00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD0-\uDCFF\uDD44-\uDD4A\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCAC\uDCB0\uDCB5-\uDD00\uDD2E\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEAE\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD88D[\uDC7A-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var WORKDAY_ILLEGAL_CHARS_ERROR_PATTERN = /illegal characters?/i;
var WORKDAY_TEXTAREA_ERROR_SETTLE_MS = 400;
function sanitizeWorkdayTextareaValue(value) {
  var text = String(value !== null && value !== void 0 ? value : '');
  if (!WORKDAY_ILLEGAL_TEXT_CHARS_PATTERN.test(text)) return text;
  return text.split('\n').map(function (line) {
    return line.replace(/(?:->|=>)/g, ' to ').replace(/<=\s*(?=\d)/g, 'at most ').replace(/>=\s*(?=\d)/g, 'at least ').replace(/<\s*(?=\d)/g, 'under ').replace(/>\s*(?=\d)/g, 'over ').replace(/[<>]/g, '').replace(/"/g, "'").replace(/[[{]/g, '(').replace(/[\]}]/g, ')').replace(/\\/g, '/').replace(/[ \t\u00a0]{2,}/g, ' ').trim();
  }).join('\n');
}
function sanitizeWorkdayTextareaValueStrict(value) {
  return sanitizeWorkdayTextareaValue(value).replace(WORKDAY_STRICT_TEXT_DISALLOWED_PATTERN, '').split('\n').map(function (line) {
    return line.replace(/[ \t]{2,}/g, ' ').trim();
  }).join('\n');
}

// Workday renders field-level validation as `[data-automation-id="errorMessage"]` inside the
// field's formField wrapper; returns that element when it carries the illegal-characters error.
function getWorkdayTextareaIllegalCharsError(textarea) {
  var _textarea$parentEleme, _scope$querySelectorA, _scope$querySelectorA2;
  var scope = textarea.closest('[data-automation-id^="formField-"]') || ((_textarea$parentEleme = textarea.parentElement) === null || _textarea$parentEleme === void 0 ? void 0 : _textarea$parentEleme.parentElement) || textarea.parentElement;
  return Array.from((_scope$querySelectorA = scope === null || scope === void 0 || (_scope$querySelectorA2 = scope.querySelectorAll) === null || _scope$querySelectorA2 === void 0 ? void 0 : _scope$querySelectorA2.call(scope, '[data-automation-id="errorMessage"], [role="alert"]')) !== null && _scope$querySelectorA !== void 0 ? _scope$querySelectorA : []).find(function (el) {
    return isElementVisible(el) && WORKDAY_ILLEGAL_CHARS_ERROR_PATTERN.test(el.textContent || '');
  }) || null;
}
function getWorkHistoryDescription(entry) {
  if (Array.isArray(entry === null || entry === void 0 ? void 0 : entry.achievements) && entry.achievements.length > 0) {
    return entry.achievements.filter(Boolean).join('\n');
  }
  return normalizeWorkdayText(entry === null || entry === void 0 ? void 0 : entry.description);
}

// --- Profile-section hierarchy (Work Experience & Education on the My Experience step) ---
// Detector-driven root → group → leaf model; shared machinery in ../autofill-section-hierarchy.js.
// Rows are the `h5[id$="-panel"]` groups; each mapping resolves its row-scoped control by
// name/id-suffix selector (date mappings resolve the dateInputWrapper element — the wrapper IS
// the leaf's control). Leaves delegate through 'section-<baseKind>' wrappers that re-resolve the
// LIVE control at fill time, which makes the row re-render caused by toggling "I currently work
// here" (it detaches/removes the End-date nodes) safe by construction: a vanished control
// resolves to null and the leaf no-ops.

function getWorkHistoryRowField(rowEl, mapping) {
  if (!(rowEl instanceof Element)) return null;
  switch (mapping.key) {
    case 'jobTitle':
    case 'companyName':
    case 'location':
    case 'currentlyWorkHere':
      {
        var input = rowEl.querySelector("input[name=\"".concat(mapping.key, "\"]"));
        return input ? {
          field: input,
          fieldId: input.id || input.name
        } : null;
      }
    case 'startDate':
    case 'endDate':
      {
        var wrapper = getScopedDateField(rowEl, "--".concat(mapping.key));
        return wrapper ? {
          field: wrapper,
          fieldId: wrapper.id
        } : null;
      }
    case 'roleDescription':
      {
        var textarea = rowEl.querySelector('textarea[id$="--roleDescription"]');
        return textarea ? {
          field: textarea,
          fieldId: textarea.id
        } : null;
      }
    default:
      return null;
  }
}
function getEducationRowField(rowEl, mapping) {
  if (!(rowEl instanceof Element)) return null;
  switch (mapping.key) {
    case 'school':
      {
        var schoolField = getEducationSchoolField(rowEl);
        return schoolField ? {
          field: schoolField,
          fieldId: getFieldId(schoolField, 'Education: School')
        } : null;
      }
    case 'degree':
      {
        var degreeButton = rowEl.querySelector('button[name="degree"]');
        if (!degreeButton) return null;
        var field = rowEl.querySelector('[data-automation-id="formField-degree"]') || degreeButton.parentElement;
        return field ? {
          field: field,
          fieldId: degreeButton.id || mapping.key
        } : null;
      }
    case 'fieldOfStudy':
      {
        var input = rowEl.querySelector('input[id$="--fieldOfStudy"]');
        if (!input) return null;
        var _field = rowEl.querySelector('[data-automation-id="formField-fieldOfStudy"]') || input.closest('[data-automation-id^="formField-"]');
        return _field ? {
          field: _field,
          fieldId: input.id || mapping.key
        } : null;
      }
    case 'gradeAverage':
      {
        var _input = rowEl.querySelector('input[name="gradeAverage"]');
        return _input ? {
          field: _input,
          fieldId: _input.id || _input.name
        } : null;
      }
    case 'firstYearAttended':
    case 'lastYearAttended':
      {
        var wrapper = getScopedDateField(rowEl, "--".concat(mapping.key));
        return wrapper ? {
          field: wrapper,
          fieldId: wrapper.id
        } : null;
      }
    default:
      return null;
  }
}
var WORKDAY_WORK_HISTORY_SECTION = {
  rootFieldId: 'workHistory',
  rootQuestion: 'Work Experience',
  answerType: 'workHistory',
  // root answerType AND root fieldKind
  profileSection: 'workHistory',
  // key into getProfileSectionData()
  rowLabel: function rowLabel(rowIndex) {
    return "Work Experience ".concat(rowIndex + 1);
  },
  rowGrowthTimeoutMs: LISTBOX_WAIT_TIMEOUT_MS,
  getContainer: getWorkExperienceSection,
  getRows: getBlockRows,
  getRowField: getWorkHistoryRowField,
  addRow: clickSectionAddButton,
  clearRows: clearBlockRows,
  mappings: [{
    key: 'jobTitle',
    label: 'Job title',
    question: 'Work Experience: Job Title',
    profileKey: 'positionTitle',
    fieldKind: 'text',
    leafKind: 'workday-section-text'
  }, {
    key: 'companyName',
    label: 'Company',
    question: 'Work Experience: Company',
    profileKey: 'companyName',
    fieldKind: 'text',
    leafKind: 'workday-section-text'
  }, {
    key: 'location',
    label: 'Location',
    question: 'Work Experience: Location',
    profileKey: 'location',
    fieldKind: 'text',
    leafKind: 'workday-section-text'
  }, {
    // Fill order vs the End-date leaf doesn't matter even though checking this removes the
    // End-date inputs: a false value resolves to null -> skip (rows are freshly recreated and
    // start unchecked), and when true the End-date leaf skips itself (entry has no endDate).
    key: 'currentlyWorkHere',
    label: 'I currently work here',
    question: 'Work Experience: I currently work here',
    fieldKind: 'checkbox',
    leafKind: 'workday-section-checkbox',
    resolveValue: function resolveValue(entry) {
      return !normalizeWorkdayText(entry === null || entry === void 0 ? void 0 : entry.endDate);
    }
  }, {
    key: 'startDate',
    label: 'From',
    question: 'Work Experience: From',
    profileKey: 'startDate',
    fieldKind: 'text',
    leafKind: 'workday-section-date'
  }, {
    key: 'endDate',
    label: 'To',
    question: 'Work Experience: To',
    fieldKind: 'text',
    leafKind: 'workday-section-date',
    resolveValue: function resolveValue(entry) {
      return normalizeWorkdayText(entry === null || entry === void 0 ? void 0 : entry.endDate) ? entry.endDate : null;
    }
  }, {
    key: 'roleDescription',
    label: 'Role description',
    question: 'Work Experience: Role Description',
    fieldKind: 'text',
    leafKind: 'workday-section-textarea',
    resolveValue: getWorkHistoryDescription
  }]
};
var WORKDAY_EDUCATION_SECTION = {
  rootFieldId: 'educationHistory',
  rootQuestion: 'Education',
  answerType: 'educationHistory',
  profileSection: 'education',
  rowLabel: function rowLabel(rowIndex) {
    return "Education ".concat(rowIndex + 1);
  },
  rowGrowthTimeoutMs: LISTBOX_WAIT_TIMEOUT_MS,
  getContainer: getEducationSection,
  getRows: getBlockRows,
  getRowField: getEducationRowField,
  addRow: clickSectionAddButton,
  clearRows: clearBlockRows,
  afterEntries: dropUnlistedSchoolEntries,
  mappings: [{
    key: 'school',
    label: 'School',
    question: 'Education: School',
    fieldKind: 'text',
    leafKind: 'workday-section-school',
    resolveValue: function resolveValue(entry) {
      return rememberSchoolLocation(entry, (entry === null || entry === void 0 ? void 0 : entry.universityName) || (entry === null || entry === void 0 ? void 0 : entry.schoolName));
    }
  },
  // Degree and Field of Study reuse the platform's own widget handlers ('select-custom' Workday
  // listbox dropdown / 'multi-select' type-and-pick): their 'section-' wrappers hand the resolved
  // text plus the live control straight to those handlers, which do their own option matching.
  {
    key: 'degree',
    label: 'Degree',
    question: 'Education: Degree',
    profileKey: 'degree',
    fieldKind: 'text',
    leafKind: 'select-custom'
  }, {
    key: 'fieldOfStudy',
    label: 'Field of study',
    question: 'Education: Field of Study',
    profileKey: 'major',
    fieldKind: 'text',
    leafKind: 'multi-select'
  },
  // "Overall Result (GPA)" is free text, so the stored GPA goes in as written ("3.8/4.0"); a
  // profile without one leaves it blank — never aiFallback. Called through an arrow: the adapter
  // tests mock the hierarchy module without resolveEducationGpa.
  {
    key: 'gradeAverage',
    label: 'Grade average',
    question: 'Education: Grade Average',
    fieldKind: 'text',
    leafKind: 'workday-section-text',
    resolveValue: function resolveValue(entry, context) {
      return resolveEducationGpa(entry, context);
    }
  }, {
    key: 'firstYearAttended',
    label: 'From',
    question: 'Education: From',
    profileKey: 'startDate',
    fieldKind: 'text',
    leafKind: 'workday-section-date'
  }, {
    key: 'lastYearAttended',
    label: 'To',
    question: 'Education: To',
    profileKey: 'endDate',
    fieldKind: 'text',
    leafKind: 'workday-section-date'
  }]
};
var WORKDAY_PROFILE_SECTIONS = [WORKDAY_WORK_HISTORY_SECTION, WORKDAY_EDUCATION_SECTION];
function createBackendAnswerHandler(answerType) {
  var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref14$isMetadataRead = _ref14.isMetadataReady,
    isMetadataReady = _ref14$isMetadataRead === void 0 ? function () {
      return true;
    } : _ref14$isMetadataRead,
    _ref14$fetchMissingMe = _ref14.fetchMissingMetadata,
    fetchMissingMetadata = _ref14$fetchMissingMe === void 0 ? (/*#__PURE__*/function () {
      var _ref15 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee(metadata) {
        return autofill_regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, metadata);
          }
        }, _callee);
      }));
      return function (_x51) {
        return _ref15.apply(this, arguments);
      };
    }()) : _ref14$fetchMissingMe;
  return {
    isMetadataReady: isMetadataReady,
    fetchMissingMetadata: fetchMissingMetadata,
    generateAnswer: function generateAnswer(question, metadata, fieldId) {
      var _metadata$options, _metadata$referenceQa;
      return getAnswer(question, answerType, (_metadata$options = metadata.options) !== null && _metadata$options !== void 0 ? _metadata$options : [], metadata.constraints, fieldId, true, (_metadata$referenceQa = metadata.referenceQaPairs) !== null && _metadata$referenceQa !== void 0 ? _metadata$referenceQa : []);
    }
  };
}

// The Self Identify (CC-305) "Date" is the form's signing date, and Workday accepts only the
// BROWSER's local today ("Enter today's date" otherwise — the doctor's live sessions on
// blackbaud.wd1 2026-10-20 at 00:50-03:20 UTC, box in America/New_York: 10/20 was rejected,
// 10/19 passed). The answer engine dates in UTC and answers this question blank, yearless
// ("10/20") or with tomorrow's date during the US evening, so the prefilled today stayed
// uncommitted ("The field Date is required") or a committed answer was refused. Resolve it here
// like the account-creation consent: no getAnswer round-trip, always the page's own today.
function isWorkdaySigningDateField(fieldId) {
  return /--dateSignedOn$/.test(normalizeWorkdayDateFieldId(fieldId));
}
function getLocalTodayDateAnswer() {
  var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var month = String(now.getMonth() + 1).padStart(2, '0');
  var day = String(now.getDate()).padStart(2, '0');
  return "".concat(month, "/").concat(day, "/").concat(now.getFullYear());
}
function createDateAnswerHandler() {
  var backendHandler = createBackendAnswerHandler('text');
  return autofill_objectSpread(autofill_objectSpread({}, backendHandler), {}, {
    generateAnswer: function generateAnswer(question, metadata, fieldId) {
      return isWorkdaySigningDateField(fieldId) ? Promise.resolve(getLocalTodayDateAnswer()) : backendHandler.generateAnswer(question, metadata, fieldId);
    }
  });
}
var ANSWER_TYPE_HANDLERS = new Map([['text', createBackendAnswerHandler('text')], ['date', createDateAnswerHandler()], ['single-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options);
  },
  fetchMissingMetadata: fetchSelectOptions,
  generateAnswer: function generateAnswer(question, metadata, fieldId) {
    var _metadata$options2, _metadata$referenceQa2;
    // Account-creation consent and the Terms and Conditions "I agree" resolve locally to Yes, no
    // getAnswer round-trip — the flow already implies both, and there is exactly one value that
    // lets it proceed. Every other single-select keeps the backend round-trip.
    if (fieldId === CREATE_ACCOUNT_CONSENT_FIELD_ID || isTermsAgreementFieldId(fieldId)) return Promise.resolve('Yes');
    return getAnswer(question, 'single-select', (_metadata$options2 = metadata.options) !== null && _metadata$options2 !== void 0 ? _metadata$options2 : [], metadata.constraints, fieldId, true, (_metadata$referenceQa2 = metadata.referenceQaPairs) !== null && _metadata$referenceQa2 !== void 0 ? _metadata$referenceQa2 : []);
  }
}], ['multi-select', createBackendAnswerHandler('multi-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options);
  }
})], ['multi-select-text', {
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
    function fetchMissingMetadata(_x52) {
      return _fetchMissingMetadata.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee3(question, metadata, fieldId) {
      var _metadata$referenceQa3;
      var rawAnswer;
      return autofill_regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return getAnswer(question, 'text', [], metadata.constraints, fieldId, true, (_metadata$referenceQa3 = metadata.referenceQaPairs) !== null && _metadata$referenceQa3 !== void 0 ? _metadata$referenceQa3 : []);
          case 1:
            rawAnswer = _context3.v;
            return _context3.a(2, splitAnswerList(rawAnswer));
        }
      }, _callee3);
    }));
    function generateAnswer(_x53, _x54, _x55) {
      return _generateAnswer.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  stringifyAnswerForPanel: function stringifyAnswerForPanel(answer) {
    return splitAnswerList(answer).join(', ');
  }
}], ['resume', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee4(metadata) {
      return autofill_regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            return _context4.a(2, metadata);
        }
      }, _callee4);
    }));
    function fetchMissingMetadata(_x56) {
      return _fetchMissingMetadata2.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee5() {
      var _yield$getResumeForAu, _t, _t2, _t3, _t4;
      return autofill_regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return getResumeForAutofill();
          case 1:
            _t2 = _yield$getResumeForAu = _context5.v;
            _t = _t2 !== null;
            if (!_t) {
              _context5.n = 2;
              break;
            }
            _t = _yield$getResumeForAu !== void 0;
          case 2:
            if (!_t) {
              _context5.n = 3;
              break;
            }
            _t3 = _yield$getResumeForAu;
            _context5.n = 4;
            break;
          case 3:
            _t3 = {
              type: 'skip'
            };
          case 4:
            return _context5.a(2, _t3);
          case 5:
            _context5.p = 5;
            _t4 = _context5.v;
            return _context5.a(2, {
              type: 'skip'
            });
        }
      }, _callee5, null, [[0, 5]]);
    }));
    function generateAnswer() {
      return _generateAnswer2.apply(this, arguments);
    }
    return generateAnswer;
  }()
}], ['cover_letter', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee6(metadata) {
      return autofill_regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            return _context6.a(2, metadata);
        }
      }, _callee6);
    }));
    function fetchMissingMetadata(_x57) {
      return _fetchMissingMetadata3.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee7(_question, metadata) {
      var _yield$getCoverLetter, _metadata$constraints, _t5, _t6, _t7, _t8;
      return autofill_regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            _context7.n = 1;
            return getCoverLetterForAutofill((_metadata$constraints = metadata.constraints) !== null && _metadata$constraints !== void 0 ? _metadata$constraints : {});
          case 1:
            _t6 = _yield$getCoverLetter = _context7.v;
            _t5 = _t6 !== null;
            if (!_t5) {
              _context7.n = 2;
              break;
            }
            _t5 = _yield$getCoverLetter !== void 0;
          case 2:
            if (!_t5) {
              _context7.n = 3;
              break;
            }
            _t7 = _yield$getCoverLetter;
            _context7.n = 4;
            break;
          case 3:
            _t7 = {
              type: 'skip'
            };
          case 4:
            return _context7.a(2, _t7);
          case 5:
            _context7.p = 5;
            _t8 = _context7.v;
            return _context7.a(2, {
              type: 'skip'
            });
        }
      }, _callee7, null, [[0, 5]]);
    }));
    function generateAnswer(_x58, _x59) {
      return _generateAnswer3.apply(this, arguments);
    }
    return generateAnswer;
  }()
}],
// Sign In account verification (see detectAccountVerificationField). The background polls the
// linked inbox for the emailed activation link and the server VISITS it before answering, so the
// link coming back means the account is verified. An empty poll answers `{ type:'skip', reason }`
// (autoapply background; the manual builds answer a bare null): 'mailbox_not_connected' → nothing to
// poll, report at once; otherwise press "Resend Account Verification" (when rendered — it is NOT
// after Create Account, where the email is already in flight) and poll once more with a fresh
// window. Still empty → report the required-field failure (human handoff) and skip.
['verification_code', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee8(metadata) {
      return autofill_regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            return _context8.a(2, metadata);
        }
      }, _callee8);
    }));
    function fetchMissingMetadata(_x60) {
      return _fetchMissingMetadata4.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee9() {
      var _result;
      var result, resendButton, resent, _t9, _t0;
      return autofill_regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            _context9.n = 1;
            return getVerificationCodeForAutofill();
          case 1:
            result = _context9.v;
            _context9.n = 3;
            break;
          case 2:
            _context9.p = 2;
            _t9 = _context9.v;
            console.warn('[bidhub][workday] account verification failed:', (_t9 === null || _t9 === void 0 ? void 0 : _t9.message) || _t9);
            result = null;
          case 3:
            if (!isWorkdayVerificationLink(result)) {
              _context9.n = 4;
              break;
            }
            return _context9.a(2, result);
          case 4:
            if (!(((_result = result) === null || _result === void 0 ? void 0 : _result.reason) === 'mailbox_not_connected')) {
              _context9.n = 6;
              break;
            }
            console.warn('[bidhub][workday] no mailbox connected — account verification cannot be fetched');
            _context9.n = 5;
            return reportWorkdayVerificationFailure('mailbox_not_connected');
          case 5:
            return _context9.a(2, {
              type: 'skip'
            });
          case 6:
            console.warn('[bidhub][workday] no verification link resolved from inbox', {
              result: result
            });
            resendButton = getWorkdayResendVerificationButton();
            if (resendButton) {
              _context9.n = 8;
              break;
            }
            _context9.n = 7;
            return reportWorkdayVerificationFailure('not_found', 'no_resend_button');
          case 7:
            return _context9.a(2, {
              type: 'skip'
            });
          case 8:
            console.log('[bidhub][workday] pressing Resend Account Verification and polling the inbox again');
            _context9.n = 9;
            return clickWorkdayButton(resendButton);
          case 9:
            _context9.p = 9;
            _context9.n = 10;
            return getVerificationCodeForAutofill();
          case 10:
            resent = _context9.v;
            _context9.n = 12;
            break;
          case 11:
            _context9.p = 11;
            _t0 = _context9.v;
            console.warn('[bidhub][workday] account verification failed after resend:', (_t0 === null || _t0 === void 0 ? void 0 : _t0.message) || _t0);
            resent = null;
          case 12:
            if (!isWorkdayVerificationLink(resent)) {
              _context9.n = 13;
              break;
            }
            return _context9.a(2, resent);
          case 13:
            console.warn('[bidhub][workday] no verification link resolved from inbox after resend', {
              resent: resent
            });
            _context9.n = 14;
            return reportWorkdayVerificationFailure('not_found', 'after_resend');
          case 14:
            return _context9.a(2, {
              type: 'skip'
            });
        }
      }, _callee9, null, [[9, 11], [0, 2]]);
    }));
    function generateAnswer() {
      return _generateAnswer4.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  // The answer is a one-time token URL — never show it raw on the panel.
  stringifyAnswerForPanel: function stringifyAnswerForPanel() {
    return 'Verified via email link';
  },
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}]]);
var FIELD_KIND_HANDLERS = new Map([
// Account verification has no control to write into (Greenhouse's variant types the code into its
// inputs): the server's visit of the emailed link IS the fill, so reaching 'filled' is all that is
// left — the run then completes and the engine's auto-advance re-clicks Sign In.
['verification_code', (/*#__PURE__*/function () {
  var _ref16 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee0(_fieldId, _question, answer) {
    return autofill_regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          if (!(typeof answer !== 'string' || !answer)) {
            _context0.n = 1;
            break;
          }
          return _context0.a(2);
        case 1:
          console.log('[bidhub][workday] account verification link visited by server');
        case 2:
          return _context0.a(2);
      }
    }, _callee0);
  }));
  return function (_x61, _x62, _x63) {
    return _ref16.apply(this, arguments);
  };
}())], ['text', (/*#__PURE__*/function () {
  var _ref17 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee1(fieldId, question, answer, field) {
    var _ref18,
      _ref18$shouldAbort,
      shouldAbort,
      liveField,
      input,
      _args1 = arguments;
    return autofill_regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          _ref18 = _args1.length > 4 && _args1[4] !== undefined ? _args1[4] : {}, _ref18$shouldAbort = _ref18.shouldAbort, shouldAbort = _ref18$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref18$shouldAbort;
          liveField = resolveLiveField(fieldId, field);
          input = getVisibleTextInput(liveField);
          if (input) {
            _context1.n = 1;
            break;
          }
          return _context1.a(2);
        case 1:
          _context1.n = 2;
          return fillWorkdayTextInput(input, answer, shouldAbort);
        case 2:
          rememberWorkdayFill(fieldId, 'text', answer);
        case 3:
          return _context1.a(2);
      }
    }, _callee1);
  }));
  return function (_x64, _x65, _x66, _x67) {
    return _ref17.apply(this, arguments);
  };
}())], ['textarea', (/*#__PURE__*/function () {
  var _ref19 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee10(fieldId, question, answer, field) {
    var _ref20,
      _ref20$shouldAbort,
      shouldAbort,
      liveField,
      textarea,
      _args10 = arguments;
    return autofill_regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _ref20 = _args10.length > 4 && _args10[4] !== undefined ? _args10[4] : {}, _ref20$shouldAbort = _ref20.shouldAbort, shouldAbort = _ref20$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref20$shouldAbort;
          liveField = resolveLiveField(fieldId, field);
          textarea = getTextarea(liveField);
          if (textarea) {
            _context10.n = 1;
            break;
          }
          return _context10.a(2);
        case 1:
          _context10.n = 2;
          return fillWorkdayTextarea(textarea, String(answer !== null && answer !== void 0 ? answer : ''), shouldAbort);
        case 2:
          rememberWorkdayFill(fieldId, 'textarea', answer);
        case 3:
          return _context10.a(2);
      }
    }, _callee10);
  }));
  return function (_x68, _x69, _x70, _x71) {
    return _ref19.apply(this, arguments);
  };
}())], ['radio', (/*#__PURE__*/function () {
  var _ref21 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee11(fieldId, question, answer, field) {
    var _input$labels2;
    var liveField, options, selectedOption, input, label;
    return autofill_regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          liveField = resolveLiveField(fieldId, field);
          options = getRadioInputs(liveField).map(function (input) {
            return {
              input: input,
              text: getChoiceInputLabelText(input, question)
            };
          }).filter(function (option) {
            return option.text;
          });
          _context11.n = 1;
          return getBestMatchingOption(answer, options);
        case 1:
          selectedOption = _context11.v;
          if (selectedOption !== null && selectedOption !== void 0 && selectedOption.input) {
            _context11.n = 2;
            break;
          }
          return _context11.a(2);
        case 2:
          input = selectedOption.input;
          if (!input.checked) {
            _context11.n = 3;
            break;
          }
          return _context11.a(2);
        case 3:
          label = (_input$labels2 = input.labels) === null || _input$labels2 === void 0 ? void 0 : _input$labels2[0];
          if (label) label.click();else input.click();
        case 4:
          return _context11.a(2);
      }
    }, _callee11);
  }));
  return function (_x72, _x73, _x74, _x75) {
    return _ref21.apply(this, arguments);
  };
}())], ['checkbox', (/*#__PURE__*/function () {
  var _ref22 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee12(fieldId, question, answer, field) {
    var resolveCheckboxField, normalizedSelections, getMismatchedInputs, attempt, mismatched;
    return autofill_regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          // The account-creation consent's stable fieldId is not a DOM id — re-query its input by
          // automation id (auth-form re-renders remint elements/ids, so the cached field goes stale).
          resolveCheckboxField = function resolveCheckboxField() {
            return fieldId === CREATE_ACCOUNT_CONSENT_FIELD_ID && getCreateAccountConsentInput() || resolveLiveField(fieldId, field);
          };
          if (!(getCheckboxInputs(resolveCheckboxField()).length === 0)) {
            _context12.n = 1;
            break;
          }
          return _context12.a(2);
        case 1:
          normalizedSelections = Array.isArray(answer) ? answer.map(function (value) {
            return normalizeComparisonText(value);
          }) : [normalizeComparisonText(answer)];
          getMismatchedInputs = function getMismatchedInputs() {
            var inputs = getCheckboxInputs(resolveCheckboxField());
            return inputs.filter(function (input) {
              var labelText = normalizeComparisonText(getChoiceInputLabelText(input, question));
              var shouldCheck = inputs.length === 1 ? normalizedSelections.includes('yes') || normalizedSelections.includes('true') : normalizedSelections.includes(labelText) || normalizedSelections.includes(normalizeComparisonText(input.value));
              return input.checked !== shouldCheck;
            });
          }; // Workday's boxes are controlled: a click its model did not take is put back by React, so a box
          // still mismatched after a beat gets one more click on the live input (Humana's "select all that
          // apply" government-service question was left with no box ticked, 2026-10-20).
          attempt = 0;
        case 2:
          if (!(attempt < CHECKBOX_MAX_ATTEMPTS)) {
            _context12.n = 5;
            break;
          }
          mismatched = getMismatchedInputs();
          if (!(mismatched.length === 0)) {
            _context12.n = 3;
            break;
          }
          return _context12.a(3, 5);
        case 3:
          if (attempt > 0) console.warn('[bidhub][workday] checkbox did not commit, retrying', {
            fieldId: fieldId,
            question: question
          });
          mismatched.forEach(function (input) {
            return input.click();
          });
          _context12.n = 4;
          return sleep(CHECKBOX_COMMIT_SETTLE_MS);
        case 4:
          attempt += 1;
          _context12.n = 2;
          break;
        case 5:
          if (fieldId !== CREATE_ACCOUNT_CONSENT_FIELD_ID) rememberWorkdayFill(fieldId, 'checkbox', answer);
        case 6:
          return _context12.a(2);
      }
    }, _callee12);
  }));
  return function (_x76, _x77, _x78, _x79) {
    return _ref22.apply(this, arguments);
  };
}())], ['select-custom', (/*#__PURE__*/function () {
  var _ref23 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee13(fieldId, question, answer, field) {
    var _ref24,
      _ref24$shouldAbort,
      shouldAbort,
      liveField,
      button,
      currentText,
      listboxState,
      listbox,
      options,
      selectedOption,
      selectedText,
      _args13 = arguments;
    return autofill_regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          _ref24 = _args13.length > 4 && _args13[4] !== undefined ? _args13[4] : {}, _ref24$shouldAbort = _ref24.shouldAbort, shouldAbort = _ref24$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref24$shouldAbort;
          _context13.n = 1;
          return waitForWorkdayStepSettled(shouldAbort);
        case 1:
          liveField = resolveLiveField(fieldId, field);
          button = getSelectButton(liveField);
          if (!(!button || shouldAbort())) {
            _context13.n = 2;
            break;
          }
          return _context13.a(2);
        case 2:
          // Remembered before the click: a pick a re-render swallows is refused at Save and Continue too.
          rememberWorkdayFill(fieldId, 'select-custom', answer);
          currentText = normalizeComparisonText(button.textContent);
          if (!(currentText && currentText === normalizeComparisonText(answer) && currentText !== 'select one')) {
            _context13.n = 3;
            break;
          }
          return _context13.a(2);
        case 3:
          button.click();
          _context13.n = 4;
          return waitForPositiveResultWithAbort(function () {
            var state = getVisibleInteractiveListboxState();
            return (state === null || state === void 0 ? void 0 : state.type) === 'ready' || (state === null || state === void 0 ? void 0 : state.type) === 'empty' ? state : null;
          }, LISTBOX_WAIT_TIMEOUT_MS, shouldAbort, 100);
        case 4:
          listboxState = _context13.v;
          if (!(!listboxState || shouldAbort())) {
            _context13.n = 5;
            break;
          }
          return _context13.a(2);
        case 5:
          if (!(listboxState.type !== 'ready')) {
            _context13.n = 7;
            break;
          }
          _context13.n = 6;
          return closeOpenListbox(button);
        case 6:
          return _context13.a(2);
        case 7:
          listbox = listboxState.listbox;
          options = getListboxOptionEntries(listbox);
          _context13.n = 8;
          return getBestMatchingOption(answer, options);
        case 8:
          selectedOption = _context13.v;
          if (!(!(selectedOption !== null && selectedOption !== void 0 && selectedOption.element) || shouldAbort())) {
            _context13.n = 10;
            break;
          }
          _context13.n = 9;
          return closeOpenListbox(button);
        case 9:
          return _context13.a(2);
        case 10:
          selectedText = selectedOption.text;
          clickWorkdayOption(selectedOption);
          rememberWorkdayFill(fieldId, 'select-custom', selectedText);
          _context13.n = 11;
          return waitForSelectCommit(fieldId, field, selectedText, shouldAbort);
        case 11:
          _context13.n = 12;
          return waitForListboxToClose();
        case 12:
          _context13.n = 13;
          return sleep(150);
        case 13:
          return _context13.a(2);
      }
    }, _callee13);
  }));
  return function (_x80, _x81, _x82, _x83) {
    return _ref23.apply(this, arguments);
  };
}())], ['multi-select', (/*#__PURE__*/function () {
  var _ref25 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee14(fieldId, question, answer, field) {
    var _ref26,
      _ref26$shouldAbort,
      shouldAbort,
      _ref26$matchText,
      matchText,
      _ref26$exactMatch,
      exactMatch,
      _ref26$optionFilter,
      optionFilter,
      _ref26$pickOption,
      pickOption,
      liveField,
      input,
      isSkillsField,
      values,
      existingSelections,
      desiredSelections,
      alreadyMatches,
      outcome,
      sourcePrompt,
      _iterator1,
      _step1,
      _loop2,
      _ret2,
      _skillsInput$closest,
      skillsInput,
      skillsField,
      _args15 = arguments,
      _t11;
    return autofill_regenerator().w(function (_context15) {
      while (1) switch (_context15.p = _context15.n) {
        case 0:
          _ref26 = _args15.length > 4 && _args15[4] !== undefined ? _args15[4] : {}, _ref26$shouldAbort = _ref26.shouldAbort, shouldAbort = _ref26$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref26$shouldAbort, _ref26$matchText = _ref26.matchText, matchText = _ref26$matchText === void 0 ? null : _ref26$matchText, _ref26$exactMatch = _ref26.exactMatch, exactMatch = _ref26$exactMatch === void 0 ? false : _ref26$exactMatch, _ref26$optionFilter = _ref26.optionFilter, optionFilter = _ref26$optionFilter === void 0 ? null : _ref26$optionFilter, _ref26$pickOption = _ref26.pickOption, pickOption = _ref26$pickOption === void 0 ? null : _ref26$pickOption;
          _context15.n = 1;
          return waitForWorkdayStepSettled(shouldAbort);
        case 1:
          if (!(fieldId === WORKDAY_PHONE_CODE_FIELD_ID)) {
            _context15.n = 2;
            break;
          }
          _context15.n = 2;
          return waitForPhoneCodeToFollowCountry(fieldId, field, shouldAbort);
        case 2:
          liveField = resolveLiveField(fieldId, field);
          input = getMultiselectInput(liveField);
          if (!(!input || shouldAbort())) {
            _context15.n = 3;
            break;
          }
          return _context15.a(2);
        case 3:
          watchPromptSearches();
          isSkillsField = fieldId === WORKDAY_SKILLS_FIELD_ID;
          values = isSkillsField ? capWorkdaySkills(splitAnswerList(answer)) : splitAnswerList(answer);
          if (!(values.length === 0)) {
            _context15.n = 4;
            break;
          }
          return _context15.a(2);
        case 4:
          existingSelections = getSelectedItemTexts(liveField).map(function (value) {
            return normalizeComparisonText(value);
          });
          desiredSelections = values.map(function (value) {
            return normalizeComparisonText(value);
          });
          alreadyMatches = existingSelections.length === desiredSelections.length && existingSelections.every(function (value) {
            return desiredSelections.includes(value);
          }) || phoneCodeShowsAnswer(fieldId, liveField, values);
          if (!alreadyMatches) {
            _context15.n = 5;
            break;
          }
          return _context15.a(2);
        case 5:
          if (!(existingSelections.length > 0)) {
            _context15.n = 6;
            break;
          }
          _context15.n = 6;
          return clearMultiselectSelections(liveField, question);
        case 6:
          // The last value's search outcome ('selected' | 'empty' | 'unmatched' | 'ambiguous' | 'timeout'), so
          // a caller can tell "the list has no such entry" from "the search never answered".
          outcome = null;
          sourcePrompt = isSourcePrompt(fieldId, question);
          _iterator1 = autofill_createForOfIteratorHelper(values);
          _context15.p = 7;
          _loop2 = /*#__PURE__*/autofill_regenerator().m(function _loop2() {
            var _options$find, _decided$option, _decided$narrowTo, _pickedOption, _currentField$closest;
            var value, currentField, currentInput, previousSelectionCount, searchStartedAt, selectionResult, browsed, listbox, levelOptions, isPickable, options, decided, pickedOption, seenTexts, pillsRoot, depth, _pickedOption2, pillsBefore, listTextsBefore, pick, _t1, _t10;
            return autofill_regenerator().w(function (_context14) {
              while (1) switch (_context14.n) {
                case 0:
                  value = _step1.value;
                  if (!shouldAbort()) {
                    _context14.n = 1;
                    break;
                  }
                  return _context14.a(2, {
                    v: void 0
                  });
                case 1:
                  currentField = resolveLiveField(fieldId, field);
                  currentInput = getMultiselectInput(currentField);
                  if (currentInput) {
                    _context14.n = 2;
                    break;
                  }
                  return _context14.a(2, {
                    v: void 0
                  });
                case 2:
                  previousSelectionCount = getSelectedItemTexts(currentField).length;
                  searchStartedAt = performance.now();
                  fillTextInputWithoutBlur(currentInput, value);
                  _context14.n = 3;
                  return sleep(50);
                case 3:
                  triggerEnterEvent(currentInput);
                  _context14.n = 4;
                  return waitForPositiveResultWithAbort(function () {
                    var refreshedField = resolveLiveField(fieldId, field);
                    if (getSelectedItemTexts(refreshedField).length > previousSelectionCount) {
                      return {
                        type: 'selection'
                      };
                    }
                    var listboxState = getVisibleInteractiveListboxState();
                    if ((listboxState === null || listboxState === void 0 ? void 0 : listboxState.type) === 'ready') {
                      return {
                        type: 'listbox',
                        listbox: listboxState.listbox
                      };
                    }
                    if ((listboxState === null || listboxState === void 0 ? void 0 : listboxState.type) === 'empty') {
                      return {
                        type: 'empty'
                      };
                    }
                    // The search came back but the prompt stayed silent (no list, no pill): a miss.
                    if ((listboxState === null || listboxState === void 0 ? void 0 : listboxState.type) !== 'loading') {
                      var answeredAt = getPromptSearchAnsweredAt(value, searchStartedAt);
                      if (answeredAt !== null && performance.now() - answeredAt > PROMPT_SILENT_MISS_MS) return {
                        type: 'empty'
                      };
                    }
                    return null;
                  }, MULTISELECT_WAIT_TIMEOUT_MS, shouldAbort, 50);
                case 4:
                  selectionResult = _context14.v;
                  // The full list a silent search falls back to says nothing about the search itself: a pick from
                  // it still has to pass the caller's checks, and finding none there is still a 'timeout' (the
                  // school fallback must not read it as "not in the list").
                  browsed = false;
                  if (!(!selectionResult && !shouldAbort() && shouldOpenEmptyPromptList(fieldId, field, currentInput))) {
                    _context14.n = 6;
                    break;
                  }
                  _context14.n = 5;
                  return openMultiselectPromptList(currentInput, shouldAbort);
                case 5:
                  selectionResult = _context14.v;
                  browsed = Boolean(selectionResult);
                case 6:
                  if (!(!selectionResult || shouldAbort())) {
                    _context14.n = 7;
                    break;
                  }
                  outcome = 'timeout';
                  return _context14.a(2, 0);
                case 7:
                  if (!(selectionResult.type === 'selection')) {
                    _context14.n = 8;
                    break;
                  }
                  outcome = 'selected';
                  return _context14.a(2, 0);
                case 8:
                  if (!(selectionResult.type === 'empty')) {
                    _context14.n = 10;
                    break;
                  }
                  outcome = 'empty';
                  _context14.n = 9;
                  return closeOpenListbox();
                case 9:
                  return _context14.a(2, 0);
                case 10:
                  listbox = selectionResult.listbox; // optionFilter: the caller's check that an option can be the answer at all (a school sharing
                  // only some words with the name is a different school). Skills: the search answers with whatever
                  // it has, so a skill only takes an option that shares a word with it.
                  levelOptions = getListboxOptionEntries(listbox);
                  isPickable = function isPickable(option) {
                    return (!optionFilter || optionFilter(option)) && (!isSkillsField || isPlausibleSkillOption(value, option.text));
                  };
                  options = levelOptions.filter(isPickable); // pickOption: the caller's own decision before any embedding — { option } picks it, { narrowTo }
                  // leaves the embedding fewer options, { ambiguous } picks nothing (the school's campuses),
                  // { unmatched } picks nothing and says the list has no such entry.
                  decided = !exactMatch && pickOption ? pickOption(options) : null;
                  if (!(decided !== null && decided !== void 0 && decided.ambiguous || decided !== null && decided !== void 0 && decided.unmatched)) {
                    _context14.n = 12;
                    break;
                  }
                  outcome = decided.ambiguous ? 'ambiguous' : browsed ? 'timeout' : 'unmatched';
                  _context14.n = 11;
                  return closeOpenListbox();
                case 11:
                  return _context14.a(2, 0);
                case 12:
                  if (!exactMatch) {
                    _context14.n = 13;
                    break;
                  }
                  _t1 = (_options$find = options.find(function (option) {
                    return normalizeComparisonText(option.text) === normalizeComparisonText(value);
                  })) !== null && _options$find !== void 0 ? _options$find : options.find(function (option) {
                    return isSchoolNotListedEntry(value, option.text);
                  });
                  _context14.n = 17;
                  break;
                case 13:
                  if (!((_decided$option = decided === null || decided === void 0 ? void 0 : decided.option) !== null && _decided$option !== void 0)) {
                    _context14.n = 14;
                    break;
                  }
                  _t10 = _decided$option;
                  _context14.n = 16;
                  break;
                case 14:
                  _context14.n = 15;
                  return getBestMultiselectOption(matchText || value, (_decided$narrowTo = decided === null || decided === void 0 ? void 0 : decided.narrowTo) !== null && _decided$narrowTo !== void 0 ? _decided$narrowTo : options, {
                    sourcePrompt: sourcePrompt
                  });
                case 15:
                  _t10 = _context14.v;
                case 16:
                  _t1 = _t10;
                case 17:
                  pickedOption = _t1;
                  if ((_pickedOption = pickedOption) !== null && _pickedOption !== void 0 && _pickedOption.element) {
                    _context14.n = 19;
                    break;
                  }
                  outcome = browsed ? 'timeout' : 'unmatched';
                  _context14.n = 18;
                  return closeOpenListbox();
                case 18:
                  return _context14.a(2, 0);
                case 19:
                  outcome = 'selected';
                  // A nested prompt drills level by level (waitForMultiselectPick). An exact label pick is the
                  // caller's whole decision and never drills; a deeper level still passes the caller's optionFilter.
                  seenTexts = new Set(levelOptions.map(function (option) {
                    return normalizeComparisonText(option.text);
                  }));
                  pillsRoot = (currentField === null || currentField === void 0 || (_currentField$closest = currentField.closest) === null || _currentField$closest === void 0 ? void 0 : _currentField$closest.call(currentField, '[data-automation-id^="formField-"]')) || currentField;
                  depth = 0;
                case 20:
                  if (!((_pickedOption2 = pickedOption) !== null && _pickedOption2 !== void 0 && _pickedOption2.element && depth < MULTISELECT_MAX_PROMPT_DEPTH)) {
                    _context14.n = 27;
                    break;
                  }
                  if (!shouldAbort()) {
                    _context14.n = 21;
                    break;
                  }
                  return _context14.a(2, {
                    v: void 0
                  });
                case 21:
                  if (!(isSkillsField && getSelectedItemTexts(pillsRoot).map(normalizeComparisonText).includes(normalizeComparisonText(pickedOption.text)))) {
                    _context14.n = 22;
                    break;
                  }
                  return _context14.a(3, 27);
                case 22:
                  pillsBefore = countMultiselectPills(fieldId, field);
                  listTextsBefore = getVisiblePromptListOptions().map(function (option) {
                    return normalizeComparisonText(option.text);
                  });
                  clickWorkdayOption(pickedOption);
                  _context14.n = 23;
                  return waitForMultiselectPick(fieldId, field, pillsBefore, pickedOption, seenTexts, listTextsBefore, shouldAbort);
                case 23:
                  pick = _context14.v;
                  if (!((pick === null || pick === void 0 ? void 0 : pick.type) !== 'level' || exactMatch)) {
                    _context14.n = 24;
                    break;
                  }
                  return _context14.a(3, 27);
                case 24:
                  pick.options.forEach(function (option) {
                    return seenTexts.add(normalizeComparisonText(option.text));
                  });
                  _context14.n = 25;
                  return getBestMultiselectOption(matchText || value, pick.options.filter(isPickable), {
                    sourcePrompt: sourcePrompt
                  });
                case 25:
                  pickedOption = _context14.v;
                case 26:
                  depth += 1;
                  _context14.n = 20;
                  break;
                case 27:
                  _context14.n = 28;
                  return closeOpenListbox();
                case 28:
                  return _context14.a(2);
              }
            }, _loop2);
          });
          _iterator1.s();
        case 8:
          if ((_step1 = _iterator1.n()).done) {
            _context15.n = 12;
            break;
          }
          return _context15.d(autofill_regeneratorValues(_loop2()), 9);
        case 9:
          _ret2 = _context15.v;
          if (!(_ret2 === 0)) {
            _context15.n = 10;
            break;
          }
          return _context15.a(3, 11);
        case 10:
          if (!_ret2) {
            _context15.n = 11;
            break;
          }
          return _context15.a(2, _ret2.v);
        case 11:
          _context15.n = 8;
          break;
        case 12:
          _context15.n = 14;
          break;
        case 13:
          _context15.p = 13;
          _t11 = _context15.v;
          _iterator1.e(_t11);
        case 14:
          _context15.p = 14;
          _iterator1.f();
          return _context15.f(14);
        case 15:
          if (!(isSkillsField && !shouldAbort())) {
            _context15.n = 16;
            break;
          }
          // The skills fieldId is the prompt INPUT's id; the pills live in the formField wrapper.
          skillsInput = resolveLiveField(fieldId, field);
          skillsField = (skillsInput === null || skillsInput === void 0 || (_skillsInput$closest = skillsInput.closest) === null || _skillsInput$closest === void 0 ? void 0 : _skillsInput$closest.call(skillsInput, '[data-automation-id^="formField-"]')) || skillsInput;
          _context15.n = 16;
          return removeImplausibleSkillSelections(skillsField, values, shouldAbort);
        case 16:
          return _context15.a(2, outcome);
      }
    }, _callee14, null, [[7, 13, 14, 15]]);
  }));
  return function (_x84, _x85, _x86, _x87) {
    return _ref25.apply(this, arguments);
  };
}())], ['date', (/*#__PURE__*/function () {
  var _ref27 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee15(fieldId, question, answer, field) {
    return autofill_regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          _context16.n = 1;
          return fillWorkdayDateField(fieldId, answer, field, question);
        case 1:
          return _context16.a(2);
      }
    }, _callee15);
  }));
  return function (_x88, _x89, _x90, _x91) {
    return _ref27.apply(this, arguments);
  };
}())], ['resume', (/*#__PURE__*/function () {
  var _ref28 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee16(fieldId, question, answer, field) {
    var _ref29,
      _ref29$shouldAbort,
      shouldAbort,
      input,
      _args17 = arguments;
    return autofill_regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          _ref29 = _args17.length > 4 && _args17[4] !== undefined ? _args17[4] : {}, _ref29$shouldAbort = _ref29.shouldAbort, shouldAbort = _ref29$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref29$shouldAbort;
          if (!(!answer || autofill_typeof(answer) !== 'object' || answer.type !== 'file')) {
            _context17.n = 1;
            break;
          }
          return _context17.a(2);
        case 1:
          _context17.n = 2;
          return ensureResumeFileInput(fieldId, field, shouldAbort);
        case 2:
          input = _context17.v;
          if (!(!input || shouldAbort())) {
            _context17.n = 3;
            break;
          }
          return _context17.a(2);
        case 3:
          fillFileInput(input, answer.fileName, answer.base64, answer.mimeType);
        case 4:
          return _context17.a(2);
      }
    }, _callee16);
  }));
  return function (_x92, _x93, _x94, _x95) {
    return _ref28.apply(this, arguments);
  };
}())], ['upload', (/*#__PURE__*/function () {
  var _ref30 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee17(fieldId, question, answer, field) {
    var _ref31,
      _ref31$shouldAbort,
      shouldAbort,
      input,
      _args18 = arguments;
    return autofill_regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          _ref31 = _args18.length > 4 && _args18[4] !== undefined ? _args18[4] : {}, _ref31$shouldAbort = _ref31.shouldAbort, shouldAbort = _ref31$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref31$shouldAbort;
          if (!(!answer || autofill_typeof(answer) !== 'object' || answer.type !== 'file')) {
            _context18.n = 1;
            break;
          }
          return _context18.a(2);
        case 1:
          _context18.n = 2;
          return ensureResumeFileInput(fieldId, field, shouldAbort);
        case 2:
          input = _context18.v;
          if (!(!input || shouldAbort())) {
            _context18.n = 3;
            break;
          }
          return _context18.a(2);
        case 3:
          fillFileInput(input, answer.fileName, answer.base64, answer.mimeType);
        case 4:
          return _context18.a(2);
      }
    }, _callee17);
  }));
  return function (_x96, _x97, _x98, _x99) {
    return _ref30.apply(this, arguments);
  };
}())],
// --- Section-leaf base kinds ---
// Wrapped as 'section-<kind>' by the shared hierarchy module: the wrapper re-resolves the LIVE
// row control via getRowField before delegating here, so `field` is always the freshly-resolved
// control (never a node detached by the current-role re-render).
['workday-section-text', (/*#__PURE__*/function () {
  var _ref32 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee18(_fieldId, _question, answer, field) {
    var _field$matches3;
    var _ref33,
      _ref33$shouldAbort,
      shouldAbort,
      input,
      _args19 = arguments;
    return autofill_regenerator().w(function (_context19) {
      while (1) switch (_context19.n) {
        case 0:
          _ref33 = _args19.length > 4 && _args19[4] !== undefined ? _args19[4] : {}, _ref33$shouldAbort = _ref33.shouldAbort, shouldAbort = _ref33$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref33$shouldAbort;
          input = field !== null && field !== void 0 && (_field$matches3 = field.matches) !== null && _field$matches3 !== void 0 && _field$matches3.call(field, 'input') ? field : getVisibleTextInput(field);
          if (input) {
            _context19.n = 1;
            break;
          }
          return _context19.a(2);
        case 1:
          _context19.n = 2;
          return fillWorkdayTextInput(input, answer, shouldAbort);
        case 2:
          return _context19.a(2);
      }
    }, _callee18);
  }));
  return function (_x100, _x101, _x102, _x103) {
    return _ref32.apply(this, arguments);
  };
}())], ['workday-section-textarea', (/*#__PURE__*/function () {
  var _ref34 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee19(_fieldId, _question, answer, field) {
    var _field$matches4;
    var _ref35,
      _ref35$shouldAbort,
      shouldAbort,
      textarea,
      _args20 = arguments;
    return autofill_regenerator().w(function (_context20) {
      while (1) switch (_context20.n) {
        case 0:
          _ref35 = _args20.length > 4 && _args20[4] !== undefined ? _args20[4] : {}, _ref35$shouldAbort = _ref35.shouldAbort, shouldAbort = _ref35$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref35$shouldAbort;
          textarea = field !== null && field !== void 0 && (_field$matches4 = field.matches) !== null && _field$matches4 !== void 0 && _field$matches4.call(field, 'textarea') ? field : getTextarea(field);
          if (textarea) {
            _context20.n = 1;
            break;
          }
          return _context20.a(2);
        case 1:
          _context20.n = 2;
          return fillWorkdayTextarea(textarea, String(answer !== null && answer !== void 0 ? answer : ''), shouldAbort);
        case 2:
          return _context20.a(2);
      }
    }, _callee19);
  }));
  return function (_x104, _x105, _x106, _x107) {
    return _ref34.apply(this, arguments);
  };
}())], ['workday-section-checkbox', (/*#__PURE__*/function () {
  var _ref36 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee20(_fieldId, _question, answer, field) {
    var _field$matches5, _input$labels3;
    var _ref37,
      _ref37$shouldAbort,
      shouldAbort,
      input,
      shouldCheck,
      _args21 = arguments;
    return autofill_regenerator().w(function (_context21) {
      while (1) switch (_context21.n) {
        case 0:
          _ref37 = _args21.length > 4 && _args21[4] !== undefined ? _args21[4] : {}, _ref37$shouldAbort = _ref37.shouldAbort, shouldAbort = _ref37$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref37$shouldAbort;
          if (!shouldAbort()) {
            _context21.n = 1;
            break;
          }
          return _context21.a(2);
        case 1:
          input = field !== null && field !== void 0 && (_field$matches5 = field.matches) !== null && _field$matches5 !== void 0 && _field$matches5.call(field, 'input[type="checkbox"]') ? field : getCheckboxInputs(field)[0];
          if (input) {
            _context21.n = 2;
            break;
          }
          return _context21.a(2);
        case 2:
          shouldCheck = typeof answer === 'boolean' ? answer : ['yes', 'true'].includes(normalizeComparisonText(answer));
          if (!(input.checked === shouldCheck)) {
            _context21.n = 3;
            break;
          }
          return _context21.a(2);
        case 3:
          if ((_input$labels3 = input.labels) !== null && _input$labels3 !== void 0 && _input$labels3[0]) {
            input.labels[0].click();
          } else {
            input.click();
          }
          _context21.n = 4;
          return sleep(150);
        case 4:
          return _context21.a(2);
      }
    }, _callee20);
  }));
  return function (_x108, _x109, _x110, _x111) {
    return _ref36.apply(this, arguments);
  };
}())],
// `field` is the dateInputWrapper element itself; the answer is the raw profile date string —
// fillWorkdayDateField parses it and writes the month/day/year spinbuttons.
['workday-section-date', (/*#__PURE__*/function () {
  var _ref38 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee21(fieldId, question, answer, field) {
    return autofill_regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          _context22.n = 1;
          return fillWorkdayDateField(fieldId, answer, field, question);
        case 1:
          return _context22.a(2);
      }
    }, _callee21);
  }));
  return function (_x112, _x113, _x114, _x115) {
    return _ref38.apply(this, arguments);
  };
}())], ['workday-section-school', (/*#__PURE__*/function () {
  var _ref39 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee22(_fieldId, _question, answer, field) {
    var _ref40,
      _ref40$shouldAbort,
      shouldAbort,
      _args23 = arguments;
    return autofill_regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          _ref40 = _args23.length > 4 && _args23[4] !== undefined ? _args23[4] : {}, _ref40$shouldAbort = _ref40.shouldAbort, shouldAbort = _ref40$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref40$shouldAbort;
          _context23.n = 1;
          return fillEducationSchoolField(field, String(answer !== null && answer !== void 0 ? answer : ''), shouldAbort);
        case 1:
          return _context23.a(2);
      }
    }, _callee22);
  }));
  return function (_x116, _x117, _x118, _x119) {
    return _ref39.apply(this, arguments);
  };
}())]]);

// Root handlers (count answer + clear/add-rows fill), the shared 'profileSectionField' leaf
// answerType, and the 'section-<baseKind>' live-re-resolving wrapper kinds are registered by the
// shared hierarchy module. 'select-custom' (Education: Degree) and 'multi-select' (Education:
// Field of Study) wrap the platform's own widget handlers — the wrapper calls them with
// (live.fieldId, mapping.question, answer, live.field, context), mirroring the old per-entry
// invocations exactly.
registerProfileSectionHierarchy({
  sections: WORKDAY_PROFILE_SECTIONS,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS,
  wrappedFieldKinds: ['workday-section-text', 'workday-section-textarea', 'workday-section-checkbox', 'workday-section-date', 'workday-section-school', 'select-custom', 'multi-select']
});
registerAutofillHandlers({
  detectFields: detectAutofillFields,
  // Auto-apply auth: check the vault + make the sign-in/sign-up decision (and fill/submit the auth form)
  // right before the engine starts autofill on the current page. No-op off the sign-in step / on manual.
  beforeStartAutofill: driveWorkdayAuth,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS,
  advanceFlow: advanceWorkdayAutofillFlow,
  isAutofillAvailable: isWorkdayAutofillAvailable,
  detectSubmitButton: detectWorkdaySubmitButton,
  // Non-final Next/Continue/Apply probe — the autoapply takeover panel labels its adaptive
  // button "Snapshot & Continue" (vs plain "Snapshot") off this.
  detectAdvanceButton: detectWorkdayAdvanceButton,
  getSubmitButton: getWorkdaySubmitButton,
  // Workday's footer button ignores the shared path's bare button.click(); route the submit
  // click through the same pointer-sequence / click_filter mechanism every other button uses.
  clickSubmitButton: clickWorkdaySubmitButton
});
/******/ })()
;