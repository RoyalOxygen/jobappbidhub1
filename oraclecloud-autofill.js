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
          return sleep(500 * attempt);
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
;// ../../packages/job-parsers/content/platforms/oraclecloud/autofill.js
function autofill_regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(autofill_typeof(e) + " is not iterable"); }
function autofill_typeof(o) { "@babel/helpers - typeof"; return autofill_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, autofill_typeof(o); }
function autofill_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return autofill_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (autofill_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, autofill_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, autofill_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), autofill_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", autofill_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), autofill_regeneratorDefine2(u), autofill_regeneratorDefine2(u, o, "Generator"), autofill_regeneratorDefine2(u, n, function () { return this; }), autofill_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (autofill_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function autofill_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } autofill_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { autofill_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, autofill_regeneratorDefine2(e, r, n, t); }
function autofill_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function autofill_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { autofill_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function autofill_slicedToArray(r, e) { return autofill_arrayWithHoles(r) || autofill_iterableToArrayLimit(r, e) || autofill_unsupportedIterableToArray(r, e) || autofill_nonIterableRest(); }
function autofill_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function autofill_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function autofill_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function autofill_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function autofill_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? autofill_ownKeys(Object(t), !0).forEach(function (r) { autofill_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : autofill_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function autofill_defineProperty(e, r, t) { return (r = autofill_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function autofill_toPropertyKey(t) { var i = autofill_toPrimitive(t, "string"); return "symbol" == autofill_typeof(i) ? i : i + ""; }
function autofill_toPrimitive(t, r) { if ("object" != autofill_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != autofill_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function autofill_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = autofill_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function autofill_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return autofill_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? autofill_arrayLikeToArray(r, a) : void 0; } }
function autofill_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






// Oracle Cloud Recruiting (ORC) "Candidate Experience" apply flow.
//
// Multi-page Knockout SPA (data-bind), with a few React-rendered widgets
// (`cx-select`) embedded in it. The flow is:
//   1. /job/<id>                 job posting          -> "Apply Now"
//   2. /job/<id>/apply/email     email + legal gate   -> "Next"
//   3. /job/<id>/apply/section/N application form(s)  -> "Continue"... "Submit"
// All three live on the same origin and are reached by SPA route changes, so a
// single content script persists across them. Autonext drives 1 -> 2 -> 3.
//
// Some tenants route "Apply Now" into the quick-apply ("easy apply") flow instead:
//   2'. /job/<id>/easy-apply/email  the same email + legal gate, an icon-only Next
//   3'. /job/<id>/easy-apply        "Let's make this quick": resume / LinkedIn import
//                                   or "manually"; an import opens a one-block-at-a-time
//                                   fixer (.../easy-apply/section/N/block/M)
// Autonext takes the "manually" link from 3' into the standard flow (3), which this
// adapter fills.

var autofill_NEVER_ABORT = function NEVER_ABORT() {
  return false;
};
var FORM_SELECTOR = 'form.apply-flow__content-form';
var COMBO_INPUT_SELECTOR = 'input.cx-select-input[role="combobox"]';
var UPLOAD_COMPLETE_TIMEOUT_MS = 60000;
var ATTACHMENT_RESET_TIMEOUT_MS = 10000;
// ORC's draft monitor saves the application first once its sections are ready, then
// every 10 s (ORA_IRC_CE_SAVE_DRAFT_INTRVL); the waits between upload attempts cover both.
var UPLOAD_RETRY_DELAYS_MS = [3000, 5000, 8000];

// Address is a cascading dependent set. Selecting a ZIP option (labelled
// "ZIP, City, County, State") auto-fills city/county/state, so the block is
// filled as ONE composite: country -> ZIP (pick the option whose city matches)
// -> street, with direct city/state/county fills only as a no-ZIP fallback.
// `region2` = State, `region1` = County.
var ADDRESS_FIELD_NAMES = ['country', 'postalCode', 'region2', 'region1', 'city', 'addressLine1', 'addressLine2', 'addressLine3'];
// ORC mounts the block in stages: Country first — preselected from the browser's location (a prompt nobody
// answers on a fleet box times out after 10 s), else the job's country — then the controls that depend on it,
// and every Country change clears and REBUILDS those (new elements, new ids). The composite was detected while
// only Country was in, filled Country and was done; the street / ZIP / State / City / County mounted a moment
// later and nothing filled them (Pella, Hertz, … 2026-10-22). The composite's fieldId now names the dependent
// set it was detected with (its first visible anchor control's id): when the dependents show up, or ORC rebuilds
// them, detection reports a NEW address field and the run fills it like any newly appeared field.
var ADDRESS_FIELD_ID = 'address';
// The first visible of these names the dependent set. Not State / County: a ZIP pick re-renders those two.
var ADDRESS_ANCHOR_FIELD_NAMES = ['postalCode', 'addressLine1', 'city'];
// After a ZIP pick ORC fills State / City / County from the option; give it a beat before filling them directly.
var ADDRESS_ZIP_CASCADE_WAIT_MS = 3000;
// A ZIP list that never narrowed to the typed ZIP is cleared and typed once more, after this pause.
var POSTAL_CODE_FILTER_ATTEMPTS = 2;
var POSTAL_CODE_RETYPE_PAUSE_MS = 800;
function clean(value) {
  return String(value !== null && value !== void 0 ? value : '').replace(/\s+/g, ' ').trim();
}
function stripRequiredMark(text) {
  return clean(text).replace(/\s*\*$/, '').trim();
}

// Map a backend single-select answer (a 0-based option INDEX, as a number or
// numeric string) to the option label. Mirrors the runtime's resolver, which
// only covers answerType 'single-select'/'multi-select'. Returns the answer
// unchanged when it already matches an option label or isn't an index.
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
function isVisible(element) {
  if (!element || !(element instanceof Element)) return false;
  var style = getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden') return false;
  if (element.matches('input[type="file"]')) return true;
  var rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}
function sectionTitle(element) {
  var _element$closest, _block$querySelector;
  var block = element === null || element === void 0 || (_element$closest = element.closest) === null || _element$closest === void 0 ? void 0 : _element$closest.call(element, '.apply-flow-block');
  return clean(block === null || block === void 0 || (_block$querySelector = block.querySelector('.apply-flow-block__title')) === null || _block$querySelector === void 0 ? void 0 : _block$querySelector.textContent) || '';
}

// Radio/checkbox inputs are visually-hidden styled controls, so isVisible() on
// the input is always false. Determine whether the choice is actually shown via
// its label / wrapping row instead.
function isChoiceVisible(input) {
  var label = null;
  if (input.id) {
    try {
      label = document.querySelector("label[for=\"".concat(CSS.escape(input.id), "\"]"));
    } catch (_error) {/* */}
  }
  // `[aria-labelledby$="-label"]` targets the GROUP wrapper, but exclude the
  // input itself: an id-less agreement checkbox carries its own
  // `aria-labelledby="...-label"` (pointing at its wrapping label), so a bare
  // closest() would return the visually-hidden control and report it invisible.
  return isVisible(label || input.closest('label, .input-row, [aria-labelledby$="-label"]:not(input)') || input);
}

// Resolve a control's question text from ORC's Knockout label structure.
function getControlLabel(control) {
  var _control$getAttribute, _control$getAttribute2, _control$getAttribute3, _control$getAttribute4;
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!control) return fallback;
  var id = control.id;
  if (id) {
    var labelTextSpan = document.getElementById("labelText-".concat(id));
    if (clean(labelTextSpan === null || labelTextSpan === void 0 ? void 0 : labelTextSpan.textContent)) return stripRequiredMark(labelTextSpan.textContent);
    try {
      var explicitLabel = document.querySelector("label[for=\"".concat(CSS.escape(id), "\"]"));
      if (clean(explicitLabel === null || explicitLabel === void 0 ? void 0 : explicitLabel.textContent)) return stripRequiredMark(explicitLabel.textContent);
    } catch (_error) {/* invalid selector */}
  }
  var ariaLabel = clean((_control$getAttribute = control.getAttribute) === null || _control$getAttribute === void 0 ? void 0 : _control$getAttribute.call(control, 'aria-label'));
  if (ariaLabel) return stripRequiredMark(ariaLabel);
  var labelledBy = (_control$getAttribute2 = control.getAttribute) === null || _control$getAttribute2 === void 0 ? void 0 : _control$getAttribute2.call(control, 'aria-labelledby');
  if (labelledBy) {
    var text = labelledBy.split(/\s+/).map(function (labelId) {
      return document.getElementById(labelId);
    }).filter(Boolean).map(function (node) {
      return clean(node.textContent);
    }).filter(Boolean).join(' ');
    if (text) return stripRequiredMark(text);
  }
  return stripRequiredMark(((_control$getAttribute3 = control.getAttribute) === null || _control$getAttribute3 === void 0 ? void 0 : _control$getAttribute3.call(control, 'placeholder')) || ((_control$getAttribute4 = control.getAttribute) === null || _control$getAttribute4 === void 0 ? void 0 : _control$getAttribute4.call(control, 'name')) || fallback);
}

// Resolve the QUESTION text for a radio/checkbox group from its group wrapper.
// The question lives in a `#labelText-<id>` / `.input-row__linebreak` /
// `.input-row__label` span inside the group container — NOT in the individual
// option labels (each radio's own aria-labelledby points to its option, e.g.
// "Yes"). Prefer the labelText span, then the aria-labelledby target, then the
// `#labelText-<name>` element matching the group name.
function getGroupQuestionText(wrapper, name) {
  if (wrapper) {
    var _wrapper$getAttribute;
    var span = wrapper.querySelector('[id^="labelText-"], .input-row__linebreak, .input-row__label-text');
    if (clean(span === null || span === void 0 ? void 0 : span.textContent)) return stripRequiredMark(span.textContent);
    var labelledBy = (_wrapper$getAttribute = wrapper.getAttribute) === null || _wrapper$getAttribute === void 0 ? void 0 : _wrapper$getAttribute.call(wrapper, 'aria-labelledby');
    if (labelledBy) {
      var target = document.getElementById(labelledBy.split(/\s+/)[0]);
      if (clean(target === null || target === void 0 ? void 0 : target.textContent)) return stripRequiredMark(target.textContent);
    }
  }
  if (name) {
    var byName = document.getElementById("labelText-".concat(name));
    if (clean(byName === null || byName === void 0 ? void 0 : byName.textContent)) return stripRequiredMark(byName.textContent);
  }
  return '';
}

// ORC marks required fields via a label/title modifier class or an asterisk
// "required star" span (applied by a KO `css: {... : element.isRequired}` bind,
// so its presence in the live DOM is reliable) — NOT always `aria-required` on
// the input. Check the native attrs AND the field's scope (row/group/block).
var REQUIRED_MARKER_SELECTOR = '[class*="label--required"], [class*="title--required"], [class*="required-star"]';
function isRequiredField(control, scope) {
  var _control$getAttribute5, _control$getAttribute6, _scope$getAttribute, _scope$querySelector;
  if (control && (control.required || ((_control$getAttribute5 = control.getAttribute) === null || _control$getAttribute5 === void 0 ? void 0 : _control$getAttribute5.call(control, 'aria-required')) === 'true' || ((_control$getAttribute6 = control.getAttribute) === null || _control$getAttribute6 === void 0 ? void 0 : _control$getAttribute6.call(control, 'required')) != null)) {
    return true;
  }
  if ((scope === null || scope === void 0 || (_scope$getAttribute = scope.getAttribute) === null || _scope$getAttribute === void 0 ? void 0 : _scope$getAttribute.call(scope, 'aria-required')) === 'true') return true;
  return Boolean(scope === null || scope === void 0 || (_scope$querySelector = scope.querySelector) === null || _scope$querySelector === void 0 ? void 0 : _scope$querySelector.call(scope, REQUIRED_MARKER_SELECTOR));
}
function isRequiredControl(control) {
  var _control$closest;
  return isRequiredField(control, control === null || control === void 0 || (_control$closest = control.closest) === null || _control$closest === void 0 ? void 0 : _control$closest.call(control, '.input-row'));
}

// --- Field detection ---------------------------------------------------------

// Candidate verification ("Confirm your identity"). After the email step ORC
// routes to /job/<id>/apply/pin and emails a one-time code; the page is
// `form.pin-code-verification` holding SIX single-digit inputs (`#pin-code-1`…
// `#pin-code-6`) and a Verify button in its `.apply-flow-dialog__footer`. The KO
// model only takes the code once all six boxes hold a digit. Detected as ONE
// `verification_code` field (Greenhouse's "Security code" shape): the background
// polls the profile's linked inbox under the `oraclecloud.com` key (served by the
// notification service's "Confirm your identity" rule), the fill types one digit
// per box, and advanceFlow presses Verify. Left to the generic gate scan below,
// the six boxes became six free-text AI questions and nothing pressed Verify.
//
// ORC (oj-hcm-ce 2607.26) draws the same six boxes in THREE places, each with its
// own Verify button:
//  - `form.pin-code-verification`: the /apply/pin page and the post-submit
//    confirm-application page (below);
//  - `form.quick-apply-flow-pin-code-verification`: the quick-apply pin page;
//  - `.inline-pin-code-form`: inline, under the field whose change started the
//    verification — the form's email / phone edit (`--email` / `--phone`) and the
//    email gate of a returning candidate.
// Only the first was known until 2026-10-26: the inline boxes inside the form fell
// into the main scan as six "Enter verification code digit N of six." questions
// and no Verify was pressed anywhere but on the first (Uber and ~240 sessions on
// other tenants in ten days).
var PIN_CODE_INPUT_SELECTOR = 'input.pin-code-input__input';
var PIN_VERIFICATION_FORM_SELECTOR = 'form.pin-code-verification';
var PIN_VERIFY_BUTTON_SELECTOR = ["".concat(PIN_VERIFICATION_FORM_SELECTOR, " .apply-flow-dialog__footer button[type=\"submit\"]"), 'form.quick-apply-flow-pin-code-verification .apply-flow-dialog__footer button[type="submit"]', '.inline-pin-code-form button.inline-pin-code-form__submit'].join(', ');
// The phone edit's inline boxes: ORC texted that code to the customer's phone, so
// it never reaches the mailbox the background polls.
var SMS_PIN_FORM_SELECTOR = '.inline-pin-code-form--phone';
// The personal-information block's "Use SMS for communication" row (see detectCheckboxGroups).
var SMS_PREFERENCE_CHECKBOX_SELECTOR = '.phone-preferred-channel--checkbox';
var VERIFICATION_FIELD_ID = 'verification_code';
function getVisiblePinInputs() {
  return Array.from(document.querySelectorAll(PIN_CODE_INPUT_SELECTOR)).filter(isVisible);
}
function isPinCodeComplete() {
  var inputs = getVisiblePinInputs();
  return inputs.length > 0 && inputs.every(function (input) {
    return /^\d$/.test(input.value);
  });
}
function isSmsPinVerification() {
  return getVisiblePinInputs().some(function (input) {
    return input.closest(SMS_PIN_FORM_SELECTOR);
  });
}
function getPinVerifyButton() {
  return Array.from(document.querySelectorAll(PIN_VERIFY_BUTTON_SELECTOR)).find(isVisible) || null;
}

// Identity check of a candidate the tenant already knows, shown after the email step, before
// any code — the code page's dialog shell around the tenant's chosen proof and a Next
// (`.apply-flow-dialog__footer button[type="submit"]`):
//  - `apply-flow-last-name-check` ("Confirm Your Identity — We first need to verify your last
//    name"): ONE text box;
//  - `apply-flow-phone-check` ("Verify your phone — Your email is already associated with a phone
//    number in our system"): the composite phone row (country code + number).
// The gate scan below fills it; advanceFlow presses this Next once every box holds a value. Before,
// advanceFlow knew only the pagination Next and the code page's Verify, so the filled step sat until
// the advance stall (Akamai, 2026-10-23: 10 of the tenant's 12 advance stalls in a week; the phone
// check on Pella, Ford, eeho and fa-evlf tenants, 2026-10-23/24).
var IDENTITY_CHECK_SELECTOR = '.apply-flow-last-name-check, .apply-flow-phone-check';
function getIdentityCheckStep() {
  var step = Array.from(document.querySelectorAll(IDENTITY_CHECK_SELECTOR)).find(function (node) {
    return isVisible(node);
  });
  return step || null;
}
function getIdentityCheckNextButton() {
  var _getIdentityCheckStep;
  var button = (_getIdentityCheckStep = getIdentityCheckStep()) === null || _getIdentityCheckStep === void 0 ? void 0 : _getIdentityCheckStep.querySelector('.apply-flow-dialog__footer button[type="submit"]');
  return button && isVisible(button) ? button : null;
}

// The phone row's country-code cx-select carries no .input-row__control; its tel input does.
function isIdentityCheckFilled() {
  var _getIdentityCheckStep2;
  var inputs = Array.from(((_getIdentityCheckStep2 = getIdentityCheckStep()) === null || _getIdentityCheckStep2 === void 0 ? void 0 : _getIdentityCheckStep2.querySelectorAll('input.input-row__control')) || []).filter(function (input) {
    return !isHiddenControl(input) && isVisible(input);
  });
  return inputs.length > 0 && inputs.every(function (input) {
    return Boolean(clean(input.value));
  });
}

// The post-submit "confirm your application" page (ORC `apply-flow-confirm-application`):
// a candidate new to the tenant presses Submit, the form gives way to the same six code
// boxes under `.apply-flow-summary-pin-code-required` ("You're almost done" on EXL), and
// ORC accepts the application only once the emailed code is verified — that Verify IS the
// final submission. So it is the submit control (getSubmitControl: the driver's
// post-challenge re-press clicks it once the code is in) and never an advance
// (advanceFlow / detectAdvanceButton leave it alone, so the run's own press and the
// driver's re-press cannot both land, and the main extension never auto-presses it).
// Before, the re-press looked only for the form's Submit, which is gone on this page,
// so Verify was never pressed (EXL, 2026-10-22: every new candidate's code sat unread).
var CONFIRM_APPLICATION_SELECTOR = '.apply-flow-summary-pin-code-required';
function isConfirmApplicationPage() {
  var wrapper = document.querySelector(CONFIRM_APPLICATION_SELECTOR);
  return Boolean(wrapper && isVisible(wrapper) && wrapper.querySelector(PIN_VERIFICATION_FORM_SELECTOR));
}
function getConfirmApplicationVerifyButton() {
  if (!isConfirmApplicationPage() || !isPinCodeComplete()) return null;
  var button = document.querySelector("".concat(CONFIRM_APPLICATION_SELECTOR, " ").concat(PIN_VERIFICATION_FORM_SELECTOR, " .apply-flow-dialog__footer button[type=\"submit\"]"));
  return button && isVisible(button) ? button : null;
}

// "Send new code" (the `resend-pin` component). While its countdown runs ORC shows
// a timer instead, and a click only reveals the timer.
function getPinResendButton() {
  var button = document.querySelector('resend-pin button.pin-code-form__action-button');
  return button && isVisible(button) ? button : null;
}
function detectVerificationCodeField() {
  var _document$getElementB;
  var inputs = getVisiblePinInputs();
  if (!inputs.length) return null;
  return {
    question: clean((_document$getElementB = document.getElementById('pin-code-a11y-label')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.textContent) || 'Verification code',
    fieldId: VERIFICATION_FIELD_ID,
    answerType: 'verification_code',
    fieldKind: 'verification_code',
    dependsOnPrevious: false,
    field: inputs[0].closest('.input-row--pin-code, .pin-code-input') || inputs[0].parentElement,
    options: [],
    constraints: {
      required: true
    }
  };
}

// The pre-application gate is a SEQUENCE of small verification steps rendered by
// the same form-builder before the real form: an email + legal-acknowledgement
// step, then one or more identity-confirmation steps (e.g. "Confirm your last
// name", the emailed code above). Detect it GENERICALLY — every visible text
// input plus every acknowledgement checkbox — instead of hard-coding the email
// field, so non-email gate steps (last-name check, etc.) are filled too. The
// email and legal-disclaimer fields keep their stable fieldIds for
// answer-override continuity; everything else keys off its name/id.
var GATE_TEXT_INPUT_SELECTOR = ['input.input-row__control', 'textarea.input-row__control', 'input[type="text"]', 'input[type="email"]', 'input[type="tel"]', 'input[type="number"]'].join(', ');
var GATE_SKIP_INPUT_TYPES = new Set(['checkbox', 'radio', 'file', 'hidden', 'submit', 'button', 'image', 'reset']);

// ORC keeps inactive steps' inputs in the DOM and hides them — sometimes via the
// `hidden` / `aria-hidden` attribute rather than CSS display, which `isVisible`
// won't catch on a zero-impact element. Treat any of those as hidden.
function isHiddenControl(input) {
  return input.hidden || input.getAttribute('aria-hidden') === 'true' || Boolean(input.closest('[hidden], [aria-hidden="true"]'));
}
function detectEmailGateFields() {
  // Scope to the apply-flow content region so we don't grab unrelated page chrome
  // (site search boxes, etc.). Reached only when the real form isn't present yet.
  var scope = document.querySelector('.apply-flow__content') || document.querySelector('main#main') || document.body;
  var questions = [];
  var seen = new Set();
  var push = function push(entry) {
    if (entry && entry.fieldId && !seen.has(entry.fieldId)) {
      seen.add(entry.fieldId);
      questions.push(entry);
    }
  };
  push(detectVerificationCodeField());

  // The phone check (see IDENTITY_CHECK_SELECTOR) asks for the composite phone row: ONE 'phone'
  // field, like the main form's. Left to the text scan below, its country-code cx-select (a text
  // input named "phone-number") and its tel input became two text questions, the whole number was
  // typed into both, and ORC answered "Enter a valid number" (Pella, 2026-10-24).
  var phoneField = detectPhoneField(scope);
  var phoneRow = phoneField && !isHiddenControl(phoneField.field) ? phoneField.field : null;
  if (phoneRow) push(phoneField);

  // Text-like inputs: email, last-name confirmation, etc.
  var _iterator = autofill_createForOfIteratorHelper(scope.querySelectorAll(GATE_TEXT_INPUT_SELECTOR)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var input = _step.value;
      var type = (input.getAttribute('type') || 'text').toLowerCase();
      if (GATE_SKIP_INPUT_TYPES.has(type)) continue;
      if (input.matches(PIN_CODE_INPUT_SELECTOR)) continue; // the verification_code field
      if (phoneRow !== null && phoneRow !== void 0 && phoneRow.contains(input)) continue; // the composite phone field above

      if (isHiddenControl(input) || !isVisible(input)) continue;
      var name = input.getAttribute('name') || '';
      var isEmail = type === 'email' || /email/i.test(input.id || '') || /email/i.test(name);
      // Email gets a known label fallback so the backend reliably resolves it.
      var question = getControlLabel(input, isEmail ? 'Email Address' : '');
      if (!question) continue;
      push({
        question: question,
        fieldId: isEmail ? 'orc-email' : name || input.id || "gate-".concat(question),
        answerType: 'text',
        fieldKind: 'text',
        dependsOnPrevious: false,
        field: input,
        options: [],
        constraints: getInputConstraints(question, input)
      });
    }

    // Acknowledgement / consent checkboxes (privacy statement, legal disclaimer).
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = autofill_createForOfIteratorHelper(scope.querySelectorAll('input[type="checkbox"]')),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _checkbox$closest;
      var checkbox = _step2.value;
      if (isHiddenControl(checkbox) || !isChoiceVisible(checkbox)) continue;
      var isLegal = checkbox.id === 'legal-disclaimer-checkbox';
      var _question2 = isLegal ? 'Privacy Statement and Acknowledgement' : getControlLabel(checkbox) || clean((_checkbox$closest = checkbox.closest('label, .input-row')) === null || _checkbox$closest === void 0 ? void 0 : _checkbox$closest.textContent);
      if (!_question2) continue;
      push({
        question: _question2,
        fieldId: isLegal ? 'orc-legal-acknowledgement' : checkbox.id || checkbox.getAttribute('name') || "gate-ack-".concat(_question2),
        answerType: 'acknowledge',
        fieldKind: 'acknowledge',
        dependsOnPrevious: false,
        field: checkbox,
        options: [],
        constraints: {
          required: isLegal ? true : isRequiredControl(checkbox) || undefined
        }
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return questions.length ? questions : null;
}

// ORC's composite phone control: a country-code cx-select + a tel input, detected as ONE logical
// field so both parts are filled together (the 'phone' handler: the prefix first, then the number).
function detectPhoneField(scope) {
  var telInput = scope.querySelector('input.phone-row__input, input[type="tel"]');
  if (!telInput || !isVisible(telInput)) return null;
  var phoneWrapper = telInput.closest('.phone-row') || telInput.closest('.input-row') || telInput.parentElement;
  var codeCombo = phoneWrapper === null || phoneWrapper === void 0 ? void 0 : phoneWrapper.querySelector('input.cx-select-input[role="combobox"]');
  var question = getControlLabel(codeCombo) || getControlLabel(telInput) || 'Phone Number';
  return {
    question: question,
    fieldId: 'phoneNumber',
    answerType: 'text',
    fieldKind: 'phone',
    dependsOnPrevious: false,
    field: phoneWrapper,
    options: [],
    constraints: getInputConstraints(question, telInput)
  };
}
function detectComboField(input) {
  var _input$id;
  // Skip the phone country-code selector; the phone number lands in the tel input.
  if ((_input$id = input.id) !== null && _input$id !== void 0 && _input$id.startsWith('country-codes-dropdown') || input.getAttribute('name') === 'phoneNumber') return null;
  var question = getControlLabel(input);
  if (!question) return null;
  // Auto-suggest controls (e.g. street Address Line 1) are free-text typeaheads
  // with no enumerable list, so the backend answers free-form. Every other
  // cx-select is a real dropdown: read its options and let the backend pick one.
  var isAutoSuggest = input.classList.contains('cx-select-input--auto-suggest');
  return {
    question: question,
    fieldId: input.getAttribute('name') || input.id,
    answerType: isAutoSuggest ? 'text' : 'cx-select',
    fieldKind: 'combo',
    dependsOnPrevious: isDependentQuestion(question),
    field: input,
    options: null,
    constraints: autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(question, input)), {}, {
      required: isRequiredControl(input) || undefined
    })
  };
}

// A "datepicker-row" is a composite date control: a Month + (optional Day) +
// Year row of cx-select combos that all SHARE one `name` (e.g.
// "earliestAvailableDate"), distinguished only by an id prefix. Detected as ONE
// logical field so the backend answers a single date and the handler fills each
// combo — left to the generic combo scan, the three inputs collide on the shared
// name (only the first survives the fieldId dedup) and only the month gets filled.
var DATEPICKER_ROW_SELECTOR = '.datepicker-row';
function detectDateField(row) {
  var combos = Array.from(row.querySelectorAll(COMBO_INPUT_SELECTOR));
  if (combos.length === 0) return null;
  var name = combos[0].getAttribute('name') || combos[0].id;
  var question = getGroupQuestionText(row, name) || clean(row.getAttribute('aria-label')) || getControlLabel(combos[0]);
  if (!question || !name) return null;
  // Tell the backend this is a DATE (with the format we parse) so it answers a
  // real date string — without the hint it treats the question as free text and
  // returns prose the date parser can't read.
  var hasDay = Boolean(row.querySelector("".concat(COMBO_INPUT_SELECTOR, "[id^=\"day-\"]")));
  return {
    question: question,
    fieldId: name,
    answerType: 'date',
    fieldKind: 'date',
    dependsOnPrevious: isDependentQuestion(question),
    field: row,
    options: [],
    constraints: {
      required: isRequiredField(null, row) || undefined,
      inputType: 'date',
      format: hasDay ? 'YYYY-MM-DD' : 'YYYY-MM'
    }
  };
}

// The address block is one composite field (cascade). Detect it when any of the
// known address sub-controls are present; the handler fills them in order.
function detectAddressBlock(block, push) {
  var hasAddressControl = ADDRESS_FIELD_NAMES.some(function (name) {
    return block.querySelector("[name=\"".concat(name, "\"]"));
  });
  if (hasAddressControl) {
    push({
      question: 'Address',
      fieldId: addressFieldId(block),
      answerType: 'address',
      fieldKind: 'address',
      dependsOnPrevious: false,
      field: block,
      options: [],
      constraints: {
        required: isRequiredField(null, block) || undefined
      }
    });
  }

  // Independent extras in the block (Tax District, etc.) — plain text fields not
  // part of the cascade.
  var _iterator3 = autofill_createForOfIteratorHelper(block.querySelectorAll('input.input-row__control, textarea.input-row__control')),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var input = _step3.value;
      if (!isVisible(input) || input.matches(COMBO_INPUT_SELECTOR)) continue;
      if (ADDRESS_FIELD_NAMES.includes(input.getAttribute('name'))) continue;
      push(detectTextField(input));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
function detectPillsField(pillsContainer) {
  var options = Array.from(pillsContainer.querySelectorAll('.cx-select-pill-name')).map(function (pill) {
    return clean(pill.textContent);
  }).filter(Boolean);
  if (options.length === 0) return null;
  var dataQaWrapper = pillsContainer.closest('[data-qa]');
  var question = clean(pillsContainer.getAttribute('aria-label')) || getControlLabel(dataQaWrapper) || sectionTitle(pillsContainer);
  var fieldId = (dataQaWrapper === null || dataQaWrapper === void 0 ? void 0 : dataQaWrapper.getAttribute('data-qa')) || "pills-".concat(clean(pillsContainer.getAttribute('aria-label')));
  if (!question || !fieldId) return null;
  var isMulti = pillsContainer.getAttribute('aria-multiselectable') === 'true';
  var scope = pillsContainer.closest('.input-row') || dataQaWrapper || pillsContainer;
  return {
    question: question,
    fieldId: fieldId,
    answerType: isMulti ? 'multi-select' : 'single-select',
    fieldKind: isMulti ? 'pills-multi' : 'pills',
    dependsOnPrevious: isDependentQuestion(question),
    field: pillsContainer,
    options: options,
    constraints: {
      required: isRequiredField(null, scope) || undefined
    }
  };
}
function detectRadioGroups(scope, seenFieldIds) {
  var entries = [];
  var groups = new Map();
  var _iterator4 = autofill_createForOfIteratorHelper(scope.querySelectorAll('input[type="radio"]')),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var radio = _step4.value;
      var name = radio.getAttribute('name');
      if (!name) continue;
      if (!groups.has(name)) groups.set(name, []);
      groups.get(name).push(radio);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  var _iterator5 = autofill_createForOfIteratorHelper(groups),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _step5$value = autofill_slicedToArray(_step5.value, 2),
        _name = _step5$value[0],
        radios = _step5$value[1];
      if (seenFieldIds.has(_name)) continue;
      if (!radios.some(isChoiceVisible)) continue; // hidden group (other step / conditional)
      // The radio GROUP wrapper (NOT the radio input / option, whose own
      // aria-labelledby points to its option label e.g. "Yes").
      var wrapper = radios[0].closest('[role="radiogroup"], .input-row--radiogroup, .apply-flow-input-radio-group, .input-row') || radios[0].parentElement;
      var options = radios.map(function (radio) {
        return getControlLabel(radio);
      }).filter(Boolean);
      if (options.length === 0) continue;
      var question = getGroupQuestionText(wrapper, _name) || sectionTitle(radios[0]) || options[0];
      entries.push({
        question: question,
        fieldId: _name,
        answerType: 'single-select',
        fieldKind: 'radio',
        dependsOnPrevious: isDependentQuestion(question),
        field: wrapper,
        options: options,
        constraints: {
          required: isRequiredField(radios[0], wrapper) || undefined
        }
      });
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return entries;
}

// A lone checkbox is a Yes/No question (agreement / consent / self-id). The
// prompt is the checkbox label, else the group label, else the surrounding
// wrapper text. The box is only checked on an affirmative answer. Don't bail on
// an empty per-control label — agreement checkboxes are often id-less hidden
// inputs whose text lives on the wrapper.
function buildSingleCheckboxEntry(checkbox, fieldId) {
  var _checkbox$closest2;
  var groupLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var question = getControlLabel(checkbox) || groupLabel || clean((_checkbox$closest2 = checkbox.closest('label, .input-row')) === null || _checkbox$closest2 === void 0 ? void 0 : _checkbox$closest2.textContent) || sectionTitle(checkbox);
  if (!question) return null;
  return {
    question: question,
    fieldId: fieldId,
    answerType: 'single-select',
    fieldKind: 'checkbox-single',
    dependsOnPrevious: isDependentQuestion(question),
    // Scope to a clickable container (label/row), since the input may be a
    // hidden, id-less control toggled by clicking its wrapping label.
    field: checkbox.closest('label.apply-flow-input-checkbox, label, .input-row') || checkbox,
    options: ['Yes', 'No'],
    constraints: {
      required: isRequiredField(checkbox, checkbox.closest('.input-row, [aria-labelledby$="-label"]:not(input)')) || undefined
    }
  };
}
function detectCheckboxGroups(scope, seenFieldIds) {
  var entries = [];
  var groups = new Map(); // -label group wrapper -> [checkboxes]
  var standalone = []; // labelled checkboxes with no -label group wrapper
  var _iterator6 = autofill_createForOfIteratorHelper(scope.querySelectorAll('input[type="checkbox"]')),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _checkbox = _step6.value;
      // The email-gate legal disclaimer is handled by the email-gate path.
      if (_checkbox.id === 'legal-disclaimer-checkbox') continue;
      // "Use SMS for communication" (`phonePreferredFlag`) is never touched: ticking it
      // makes ORC text a verification code to the customer's phone and hold the form
      // on six code boxes nobody can fill (the engine answered Yes in every one of 34
      // runner sessions, 2026-10-22..26). Left at ORC's default.
      if (_checkbox.closest(SMS_PREFERENCE_CHECKBOX_SELECTOR)) continue;
      if (!isChoiceVisible(_checkbox)) continue; // hidden (other step / conditional)
      // ORC puts an aria-labelledby on every individual checkbox (e.g.
      // "label-dq-option-4"); the GROUP wrapper's id ends in "-label" (e.g.
      // "...ETHNICITY...-label"). Group by that wrapper so a multi-option set
      // (race/ethnicity) collapses into one multi-select instead of N singles.
      // `:not(input)` skips the checkbox itself: an id-less agreement opt-in
      // carries its own `aria-labelledby="...-label"` (its wrapping label), which
      // would otherwise self-match and mis-group it as its own wrapper.
      var groupWrapper = _checkbox.closest('[aria-labelledby$="-label"]:not(input)');
      if (groupWrapper) {
        if (!groups.has(groupWrapper)) groups.set(groupWrapper, []);
        groups.get(groupWrapper).push(_checkbox);
      } else {
        // Standalone checkboxes (agreements, consents, marketing opt-ins like
        // job-alerts) carry their own id + label[for] but no group wrapper.
        standalone.push(_checkbox);
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  var pushEntry = function pushEntry(entry) {
    if (entry && entry.fieldId && !seenFieldIds.has(entry.fieldId)) entries.push(entry);
  };
  var _iterator7 = autofill_createForOfIteratorHelper(groups),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _wrapper$getAttribute2, _document$getElementB2;
      var _step7$value = autofill_slicedToArray(_step7.value, 2),
        wrapper = _step7$value[0],
        checkboxes = _step7$value[1];
      var labelledBy = (_wrapper$getAttribute2 = wrapper.getAttribute) === null || _wrapper$getAttribute2 === void 0 ? void 0 : _wrapper$getAttribute2.call(wrapper, 'aria-labelledby');
      var baseId = labelledBy ? labelledBy.split(/\s+/)[0].replace(/-label$/, '') : null;
      var fieldId = baseId || checkboxes[0].id;
      if (!fieldId || seenFieldIds.has(fieldId)) continue;
      var groupLabel = baseId ? clean((_document$getElementB2 = document.getElementById("".concat(baseId, "-label"))) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.textContent) : '';
      if (checkboxes.length === 1) {
        pushEntry(buildSingleCheckboxEntry(checkboxes[0], fieldId, groupLabel));
        continue;
      }
      var options = checkboxes.map(function (checkbox) {
        return getControlLabel(checkbox);
      }).filter(Boolean);
      if (options.length === 0) continue;
      var question = groupLabel || sectionTitle(checkboxes[0]) || 'Please select';
      pushEntry({
        question: question,
        fieldId: fieldId,
        answerType: 'multi-select',
        fieldKind: 'checkbox-group',
        dependsOnPrevious: isDependentQuestion(question),
        field: wrapper,
        options: options,
        constraints: {
          required: isRequiredField(checkboxes[0], wrapper) || undefined
        }
      });
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  for (var _i = 0, _standalone = standalone; _i < _standalone.length; _i++) {
    var checkbox = _standalone[_i];
    if (!checkbox.id) continue; // need a stable id to key the field on
    pushEntry(buildSingleCheckboxEntry(checkbox, checkbox.id));
  }
  return entries;
}
var DOCUMENT_UPLOAD_SECTION_SELECTOR = '.file-upload-wrapper__section, .file-form-element';

// Stable per-type upload containers (Knockout components). These persist whether
// the slot is empty or already filled, so they're preferred over the drop-zone
// text — which becomes the uploaded filename and no longer names the type.
var DOCUMENT_TYPE_CONTAINERS = [{
  fieldId: 'resume',
  question: 'Resume/CV',
  answerType: 'resume',
  fieldKind: 'resume',
  selector: 'resume-upload-button, [params*="resumeUploadButtonViewModel"], [params*="isResume"]'
}, {
  fieldId: 'cover_letter',
  question: 'Cover Letter',
  answerType: 'cover_letter',
  fieldKind: 'cover_letter',
  selector: 'cover-letter-upload-button, [params*="coverLetterUploadButtonViewModel"], [params*="isCoverLetter"]'
}];
function classifyDocumentType(text) {
  var value = String(text !== null && text !== void 0 ? text : '').toLowerCase();
  if (/cover\s*letter/.test(value)) {
    return {
      fieldId: 'cover_letter',
      question: 'Cover Letter',
      answerType: 'cover_letter',
      fieldKind: 'cover_letter'
    };
  }
  if (/\bresume\b|\bcv\b|curriculum/.test(value)) {
    return {
      fieldId: 'resume',
      question: 'Resume/CV',
      answerType: 'resume',
      fieldKind: 'resume'
    };
  }
  return null;
}

// Detect an upload by its SECTION rather than the file <input>: once a file is
// uploaded ORC swaps the input for an uploaded-file + Remove view, so an
// input-only detector misses already-filled resume/cover-letter slots. The type
// is read from the section's persistent label text ("...Resume...", "...Cover
// Letter...").
function detectDocumentField(section) {
  var _section$querySelecto;
  var meta = classifyDocumentType(section.textContent) || classifyDocumentType(getControlLabel(section.querySelector('input[type="file"]')));
  if (!meta) return null;
  var accept = ((_section$querySelecto = section.querySelector('input[type="file"]')) === null || _section$querySelecto === void 0 ? void 0 : _section$querySelecto.getAttribute('accept')) || '';
  return autofill_objectSpread(autofill_objectSpread({}, meta), {}, {
    accept: accept
  });
}
function detectFileField(input) {
  var meta = classifyDocumentType(getControlLabel(input));
  if (!meta) return null;
  return autofill_objectSpread(autofill_objectSpread({}, meta), {}, {
    accept: input.getAttribute('accept') || ''
  });
}

// An attachment slot that already holds an uploaded file shows the "filled"
// state: a remove/delete control, a pre-uploaded attachment, or the
// `--filled` drop-zone modifier.
function documentAlreadyUploaded(container) {
  if (!container) return false;
  if (container.querySelector('.attachment-upload-button--filled, attachment-preuploaded')) return true;
  return Boolean(container.querySelector('[aria-label*="remove" i], [aria-label*="delete" i], [title*="remove" i], [title*="delete" i], .file-item, .attachment-item, .file-form-element__uploaded, .attachment-name, .file-name'));
}
function detectTextField(input) {
  var question = getControlLabel(input);
  if (!question) return null;
  return {
    question: question,
    fieldId: input.getAttribute('name') || input.id || "text-".concat(question),
    answerType: 'text',
    fieldKind: 'text',
    dependsOnPrevious: isDependentQuestion(question),
    field: input,
    options: [],
    constraints: autofill_objectSpread(autofill_objectSpread({}, getInputConstraints(question, input)), {}, {
      required: isRequiredControl(input) || undefined
    })
  };
}

// Blocks we intentionally skip in the standard field scan.
//  - profile-import: an alternative "parse my resume" uploader (we use the
//    dedicated Resume upload in the file-upload block instead).
//  - work-and-education-timeline / (unique-)tile-profile-items: modal-based
//    repeatable editors. Work/Education are handled explicitly via
//    findProfileItemAddControl + the workHistory/educationHistory handlers; the
//    remaining tile sections (licenses, languages) are not auto-filled here.
// NOTE: the agreements block IS scanned — it holds required acknowledgement /
// consent checkboxes. Only the pure marketing job-alerts opt-in is skipped
// (by id, in detectCheckboxGroups).
var SKIPPED_BLOCK_MODIFIERS = ['apply-flow-block--profile-import', 'apply-flow-block--work-and-education-timeline', 'apply-flow-block--tile-profile-items', 'apply-flow-block--unique-tile-profile-items',
// Skills is a tile editor handled explicitly via the 'skills' field.
'apply-flow-block--skill'];
function isSkippedBlock(block) {
  return SKIPPED_BLOCK_MODIFIERS.some(function (modifier) {
    return block.classList.contains(modifier);
  });
}
function detectMainFormFields(form) {
  var questions = [];
  var seenFieldIds = new Set();
  var seenControls = new WeakSet();
  var push = function push(entry) {
    if (!entry || !entry.fieldId || seenFieldIds.has(entry.fieldId)) return;
    if (entry.field instanceof Element) seenControls.add(entry.field);
    seenFieldIds.add(entry.fieldId);
    questions.push(entry);
  };
  var blocks = Array.from(form.querySelectorAll('.apply-flow-block'));
  var scopes = blocks.length ? blocks : [form];
  var _iterator8 = autofill_createForOfIteratorHelper(scopes),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var _block$classList, _block$classList2;
      var block = _step8.value;
      if ((_block$classList = block.classList) !== null && _block$classList !== void 0 && _block$classList.contains && isSkippedBlock(block)) continue;
      // Multi-step forms keep EVERY step's blocks in the DOM; only the current
      // step's are visible. Skip hidden blocks so we never detect phantom
      // questions from other steps. (Block-level visibility is reliable; the
      // radio/checkbox INPUTS are always visually-hidden styled controls, so they
      // can't be used for this check.)
      if (block !== form && !isVisible(block)) continue;

      // Address is a cascading set (country -> ZIP -> auto-fills city/county/state)
      // so it's handled as ONE composite field, not field-by-field.
      if ((_block$classList2 = block.classList) !== null && _block$classList2 !== void 0 && _block$classList2.contains('apply-flow-block--personal-information-address-v2')) {
        detectAddressBlock(block, push);
        continue;
      }
      push(detectPhoneField(block));

      // Composite date pickers (Month/Day/Year cx-select rows). Detected first so
      // their inner combos are skipped by the generic combo scan below.
      var _iterator0 = autofill_createForOfIteratorHelper(block.querySelectorAll(DATEPICKER_ROW_SELECTOR)),
        _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          var row = _step0.value;
          if (!isVisible(row)) continue;
          push(detectDateField(row));
        }

        // Comboboxes (cx-select) + plain text/textarea inputs.
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      var fieldControls = [];
      var _iterator1 = autofill_createForOfIteratorHelper(block.querySelectorAll(COMBO_INPUT_SELECTOR)),
        _step1;
      try {
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
          var combo = _step1.value;
          if (!isVisible(combo)) continue;
          if (combo.closest(DATEPICKER_ROW_SELECTOR)) continue; // part of a composite date field
          var _entry = detectComboField(combo);
          if (_entry) fieldControls.push({
            control: combo,
            entry: _entry
          });
        }
        // The email / phone edit's inline code boxes (they carry .input-row__control
        // too) are ONE verification_code field, never six text questions.
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
      if (Array.from(block.querySelectorAll(PIN_CODE_INPUT_SELECTOR)).some(isVisible)) {
        push(detectVerificationCodeField());
      }
      var _iterator10 = autofill_createForOfIteratorHelper(block.querySelectorAll('input.input-row__control, textarea.input-row__control')),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var input = _step10.value;
          if (!isVisible(input)) continue;
          // The phone tel input also carries .input-row__control — it is handled by
          // the composite phone field above.
          if (input.matches(COMBO_INPUT_SELECTOR) || input.classList.contains('phone-row__input')) continue;
          if (input.matches(PIN_CODE_INPUT_SELECTOR)) continue;
          var _entry2 = detectTextField(input);
          if (_entry2) fieldControls.push({
            control: input,
            entry: _entry2
          });
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      for (var _i2 = 0, _fieldControls = fieldControls; _i2 < _fieldControls.length; _i2++) {
        var entry = _fieldControls[_i2].entry;
        push(entry);
      }

      // Pill selectors (Title, Yes/No questions, work preferences).
      var _iterator11 = autofill_createForOfIteratorHelper(block.querySelectorAll('ul.cx-select-pills-container')),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var pills = _step11.value;
          if (!isVisible(pills)) continue;
          push(detectPillsField(pills));
        }

        // Radio and checkbox groups (EEO/diversity/disability).
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      var _iterator12 = autofill_createForOfIteratorHelper(detectRadioGroups(block, seenFieldIds)),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _entry3 = _step12.value;
          push(_entry3);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      var _iterator13 = autofill_createForOfIteratorHelper(detectCheckboxGroups(block, seenFieldIds)),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _entry4 = _step13.value;
          push(_entry4);
        }

        // File uploads (resume / cover letter). Detected so they're found whether
        // the slot is empty OR already holds a file. Three strategies, deduped by
        // fieldId (most stable first):
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      var pushDocument = function pushDocument(meta, field) {
        if (!meta || seenFieldIds.has(meta.fieldId) || !field) return;
        push({
          question: meta.question,
          fieldId: meta.fieldId,
          answerType: meta.answerType,
          fieldKind: meta.fieldKind,
          dependsOnPrevious: false,
          field: field,
          options: [],
          constraints: meta.accept ? {
            accept: meta.accept
          } : {}
        });
      };
      // 1) Stable per-type component containers (survive the uploaded state).
      var _iterator14 = autofill_createForOfIteratorHelper(DOCUMENT_TYPE_CONTAINERS),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var _container$querySelec;
          var docType = _step14.value;
          if (seenFieldIds.has(docType.fieldId)) continue;
          var container = block.querySelector(docType.selector);
          if (!container) continue;
          var accept = ((_container$querySelec = container.querySelector('input[type="file"]')) === null || _container$querySelec === void 0 ? void 0 : _container$querySelec.getAttribute('accept')) || '';
          pushDocument(autofill_objectSpread(autofill_objectSpread({}, docType), {}, {
            accept: accept
          }), container);
        }
        // 2) Fallback: classify an upload section by its label text (empty-state).
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
      var _iterator15 = autofill_createForOfIteratorHelper(block.querySelectorAll(DOCUMENT_UPLOAD_SECTION_SELECTOR)),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var section = _step15.value;
          if (!isVisible(section)) continue;
          pushDocument(detectDocumentField(section), section);
        }
        // 3) Fallback: a bare file input not wrapped in a recognized section.
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      var _iterator16 = autofill_createForOfIteratorHelper(block.querySelectorAll('input[type="file"]')),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var _input = _step16.value;
          if (_input.closest(DOCUMENT_UPLOAD_SECTION_SELECTOR)) continue;
          pushDocument(detectFileField(_input), _input);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }

    // Work / education history — modal-based repeatable editors, run through the shared
    // profile-section hierarchy: the collector emits root + a group per committed tile/timeline
    // item + leaves for the OPEN modal from the CURRENT DOM (getContainer gates on the SECTION
    // BLOCK's visibility, which is stable for the whole step — the Add control flickers while the
    // modal is open). Entries the root's iterator adds appear on the next detection pass.
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  var _iterator9 = autofill_createForOfIteratorHelper(ORACLE_PROFILE_SECTIONS),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var _section = _step9.value;
      var _iterator17 = autofill_createForOfIteratorHelper(collectSectionHierarchyQuestions(_section)),
        _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var sectionQuestion = _step17.value;
          push(sectionQuestion);
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  var skillsBlock = findProfileSectionBlock('skills');
  if (skillsBlock) {
    push({
      question: 'Skills',
      fieldId: 'skills',
      answerType: 'skills',
      fieldKind: 'skills',
      dependsOnPrevious: false,
      field: skillsBlock,
      options: [],
      constraints: {
        required: isRequiredField(null, skillsBlock) || undefined
      }
    });
  }
  return questions;
}
function detectAutofillFields() {
  var form = document.querySelector(FORM_SELECTOR);
  if (form && form.querySelector('.apply-flow-block')) {
    return detectMainFormFields(form);
  }
  // Quick-apply chooser / fixer: nothing to fill here (its fixer blocks are not the
  // standard form) — advanceFlow takes the way into the standard flow.
  if (getQuickApplyExitControl()) return [];
  // No application form yet — we might be on the email/legal gate.
  var emailGate = detectEmailGateFields();
  if (emailGate) return emailGate;
  // Otherwise this is a field-less posting/landing page; autonext handles it.
  return [];
}

// --- Final submit (passive) + autonext --------------------------------------

// The quick-apply flow draws its pagination as icon-only arrows: the name lives
// only in aria-label / title ("Next"; "You need to fill out the required fields
// to continue." while disabled), never in the text.
function buttonLabel(button) {
  return clean(button.textContent) || clean(button.getAttribute('aria-label')) || clean(button.getAttribute('title'));
}
function getFinalSubmitButton() {
  // `.submit-button` = the quick-apply fixer's last-block Submit.
  var direct = document.querySelector('.apply-flow-pagination__submit-button, .apply-flow-pagination__button.submit-button');
  if (direct && isVisible(direct)) return direct;
  var byText = Array.from(document.querySelectorAll('.apply-flow-pagination__button')).find(function (button) {
    return isVisible(button) && /\bsubmit\b/i.test(buttonLabel(button));
  });
  return byText || null;
}

// The live node a Submit press clicks: the form's Submit, else the post-submit
// confirm-application Verify once the code is in (see getConfirmApplicationVerifyButton).
function getSubmitControl() {
  return getFinalSubmitButton() || getConfirmApplicationVerifyButton();
}
function getApplyNowButton() {
  var button = document.querySelector('button.apply-now-button');
  return button && isVisible(button) ? button : null;
}
function getForwardPaginationButton() {
  return Array.from(document.querySelectorAll('.apply-flow-pagination__button')).find(function (button) {
    if (!isVisible(button)) return false;
    if (button.matches('[data-qa="applyFlowPaginationNextButton"]')) return true;
    var text = buttonLabel(button);
    if (/\bsubmit\b/i.test(text)) return false;
    return /\b(next|continue|review)\b/i.test(text);
  }) || null;
}

// Quick-apply after its email step (`form.quick-apply-flow__content`): the chooser
// and every fixer block but the last carry "You can also manually fill out your
// application", whose link opens the standard flow. A candidate with a saved
// profile / draft gets "Use my profile from <date>" on the chooser instead (no
// link); it opens the fixer, which has the link.
function getQuickApplyExitControl() {
  var form = document.querySelector('form.quick-apply-flow__content');
  if (!form || !isVisible(form)) return null;
  var manualLink = form.querySelector('a.quick-apply-flow__manually--link');
  if (manualLink && isVisible(manualLink)) return manualLink;
  var useProfile = form.querySelector('button.quick-apply-flow-use-profile--button');
  return useProfile && isVisible(useProfile) ? useProfile : null;
}
function isButtonDisabled(button) {
  return Boolean(button.disabled || button.getAttribute('aria-disabled') === 'true' || button.classList.contains('oj-disabled'));
}
function detectSubmitButton() {
  var submitButton = getFinalSubmitButton();
  if (!submitButton) return {
    detected: false
  };
  return {
    detected: true,
    label: clean(submitButton.textContent) || 'Submit',
    disabled: isButtonDisabled(submitButton),
    // ORC renders a <dot-loader> in the Submit button while it validates and sends the
    // application; the autoapply driver holds its post-submit watchdog while this is true.
    busy: Boolean(submitButton.querySelector('dot-loader, .dot-loader'))
  };
}

// The forward control advanceFlow would press, never the final Submit. `disabled` lets the
// autoapply driver read a Continue whose section save is still running as busy, not stuck.
function detectAdvanceButton() {
  var verifyButton = getPinVerifyButton();
  if (verifyButton) {
    if (isConfirmApplicationPage()) return {
      detected: false
    };
    return {
      detected: true,
      label: clean(verifyButton.textContent) || 'Verify',
      disabled: isButtonDisabled(verifyButton)
    };
  }
  var identityNext = getIdentityCheckNextButton();
  if (identityNext) return {
    detected: true,
    label: clean(identityNext.textContent) || 'Next',
    disabled: isButtonDisabled(identityNext)
  };
  if (getFinalSubmitButton()) return {
    detected: false
  };
  var quickApplyExit = getQuickApplyExitControl();
  if (quickApplyExit) return {
    detected: true,
    label: buttonLabel(quickApplyExit) || 'Fill out manually',
    disabled: false
  };
  var forward = getForwardPaginationButton() || getApplyNowButton();
  if (!forward) return {
    detected: false
  };
  return {
    detected: true,
    label: buttonLabel(forward) || 'Continue',
    disabled: isButtonDisabled(forward)
  };
}
function advanceFlow() {
  // Candidate-verification boxes (any of the three renderings, getPinVerifyButton):
  // press their Verify once all six digits are in. Nothing else moves while a code
  // is pending — an incomplete code would only render ORC's required-field error,
  // and the email gate's Next stays on screen beside the inline boxes.
  var verifyButton = getPinVerifyButton();
  if (verifyButton) {
    // The confirm-application Verify is the final submission, never an advance.
    if (isConfirmApplicationPage() || !isPinCodeComplete()) return false;
    verifyButton.scrollIntoView({
      block: 'center'
    });
    verifyButton.click();
    return true;
  }

  // Identity check (last name / phone): Next once every box holds a value (an empty box would
  // only render ORC's required-field error).
  var identityNext = getIdentityCheckNextButton();
  if (identityNext) {
    if (!isIdentityCheckFilled()) return false;
    identityNext.scrollIntoView({
      block: 'center'
    });
    identityNext.click();
    return true;
  }

  // On the final form step the only forward control is the gated submit — never
  // auto-click it here.
  if (getFinalSubmitButton()) return false;
  var quickApplyExit = getQuickApplyExitControl();
  if (quickApplyExit) {
    quickApplyExit.scrollIntoView({
      block: 'center'
    });
    quickApplyExit.click();
    return true;
  }
  var forward = getForwardPaginationButton();
  if (forward) {
    forward.scrollIntoView({
      block: 'center'
    });
    forward.click();
    return true;
  }
  var applyNow = getApplyNowButton();
  if (applyNow) {
    applyNow.scrollIntoView({
      block: 'center'
    });
    applyNow.click();
    return true;
  }
  return false;
}
function isAutofillAvailable(_ref) {
  var fieldCount = _ref.fieldCount,
    submitButton = _ref.submitButton;
  if (fieldCount > 0) return true;
  if (submitButton !== null && submitButton !== void 0 && submitButton.detected) return true;
  return Boolean(getApplyNowButton() || getForwardPaginationButton() || getQuickApplyExitControl() || getIdentityCheckNextButton());
}

// --- Answer-type handlers ----------------------------------------------------

function backendAnswerHandler(type) {
  return {
    isMetadataReady: function isMetadataReady() {
      return true;
    },
    fetchMissingMetadata: function () {
      var _fetchMissingMetadata = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee(metadata) {
        return autofill_regenerator().w(function (_context) {
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
    generateAnswer: function generateAnswer(question, metadata, fieldId) {
      var _metadata$options, _metadata$constraints, _metadata$referenceQa;
      return getAnswer(question, type, (_metadata$options = metadata.options) !== null && _metadata$options !== void 0 ? _metadata$options : [], (_metadata$constraints = metadata.constraints) !== null && _metadata$constraints !== void 0 ? _metadata$constraints : {}, fieldId, true, (_metadata$referenceQa = metadata.referenceQaPairs) !== null && _metadata$referenceQa !== void 0 ? _metadata$referenceQa : []);
    }
  };
}

// The emailed one-time code, as its digits, or null. The autoapply background
// answers `{ type:'skip', reason }` on an empty poll; the manual builds answer null.
function pollOracleVerificationCode() {
  return _pollOracleVerificationCode.apply(this, arguments);
}
function _pollOracleVerificationCode() {
  _pollOracleVerificationCode = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee39() {
    var result, code, _t13;
    return autofill_regenerator().w(function (_context39) {
      while (1) switch (_context39.p = _context39.n) {
        case 0:
          result = null;
          _context39.p = 1;
          _context39.n = 2;
          return getVerificationCodeForAutofill();
        case 2:
          result = _context39.v;
          _context39.n = 4;
          break;
        case 3:
          _context39.p = 3;
          _t13 = _context39.v;
          console.warn('[oraclecloud] verification code poll failed:', (_t13 === null || _t13 === void 0 ? void 0 : _t13.message) || _t13);
        case 4:
          code = typeof result === 'string' ? result.trim() : '';
          return _context39.a(2, {
            code: /^\d{4,10}$/.test(code) ? code : null,
            result: result
          });
      }
    }, _callee39, null, [[1, 3]]);
  }));
  return _pollOracleVerificationCode.apply(this, arguments);
}
function reportOracleVerificationFailure(_x2) {
  return _reportOracleVerificationFailure.apply(this, arguments);
}
function _reportOracleVerificationFailure() {
  _reportOracleVerificationFailure = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee40(reason) {
    var detail,
      _args40 = arguments,
      _t14;
    return autofill_regenerator().w(function (_context40) {
      while (1) switch (_context40.p = _context40.n) {
        case 0:
          detail = _args40.length > 1 && _args40[1] !== undefined ? _args40[1] : null;
          _context40.p = 1;
          _context40.n = 2;
          return reportAutofillVerificationFailure({
            platform: 'oraclecloud',
            reason: reason,
            detail: detail
          });
        case 2:
          _context40.n = 4;
          break;
        case 3:
          _context40.p = 3;
          _t14 = _context40.v;
          console.warn('[oraclecloud] failed to report verification failure:', (_t14 === null || _t14 === void 0 ? void 0 : _t14.message) || _t14);
        case 4:
          return _context40.a(2);
      }
    }, _callee40, null, [[1, 3]]);
  }));
  return _reportOracleVerificationFailure.apply(this, arguments);
}
var ANSWER_TYPE_HANDLERS = new Map([['text', backendAnswerHandler('text')],
// Composite date picker (Month/Day/Year cx-selects). The backend answers a
// single date string; the field-kind handler parses it and fills each combo.
['date', backendAnswerHandler('text')],
// cx-select dropdown: open it, read the real option list, then let the backend
// pick the best option from that list (single-select). Falls back to free-text
// only if the list can't be read (e.g. an empty dependent dropdown).
['cx-select', {
  // Ready once we've attempted to read the list (options set, even if empty).
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options);
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee2(metadata, _fieldId, _question, field) {
      var _ref2,
        _ref2$shouldAbort,
        shouldAbort,
        _yield$readComboOptio,
        options,
        complete,
        _args2 = arguments;
      return autofill_regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _ref2 = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : {}, _ref2$shouldAbort = _ref2.shouldAbort, shouldAbort = _ref2$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref2$shouldAbort;
            _context2.n = 1;
            return readComboOptions(field, shouldAbort);
          case 1:
            _yield$readComboOptio = _context2.v;
            options = _yield$readComboOptio.options;
            complete = _yield$readComboOptio.complete;
            return _context2.a(2, autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
              options: options,
              comboListComplete: complete
            }));
        }
      }, _callee2);
    }));
    function fetchMissingMetadata(_x3, _x4, _x5, _x6) {
      return _fetchMissingMetadata2.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee3(question, metadata, fieldId) {
      var _metadata$options2, _metadata$constraints2, _metadata$referenceQa2;
      var options, useList, type, answer;
      return autofill_regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            options = (_metadata$options2 = metadata.options) !== null && _metadata$options2 !== void 0 ? _metadata$options2 : []; // Let the backend pick from the real list when it's a small, fully-read
            // dropdown (gender, veteran, state, country). For huge typeahead lists
            // (city/ZIP/county — truncated) or an unreadable list, fall back to
            // free-text, which the field-kind handler types and filters in the DOM.
            useList = options.length > 0 && metadata.comboListComplete;
            type = useList ? 'single-select' : 'text';
            _context3.n = 1;
            return getAnswer(question, type, useList ? options : [], (_metadata$constraints2 = metadata.constraints) !== null && _metadata$constraints2 !== void 0 ? _metadata$constraints2 : {}, fieldId, true, (_metadata$referenceQa2 = metadata.referenceQaPairs) !== null && _metadata$referenceQa2 !== void 0 ? _metadata$referenceQa2 : []);
          case 1:
            answer = _context3.v;
            return _context3.a(2, useList ? resolveOptionByIndex(answer, options) : answer);
        }
      }, _callee3);
    }));
    function generateAnswer(_x7, _x8, _x9) {
      return _generateAnswer.apply(this, arguments);
    }
    return generateAnswer;
  }()
}],
// Composite address: fetch each sub-field's value, then cascade-fill (ZIP
// selection auto-fills city/county/state) in the field-kind handler.
['address', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.addressFields);
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee4(metadata, _fieldId, _question, field) {
      var addressFields;
      return autofill_regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            addressFields = ADDRESS_FIELD_NAMES.map(function (name) {
              var el = field.querySelector("[name=\"".concat(name, "\"]"));
              return el && isVisible(el) ? {
                name: name,
                label: getControlLabel(el) || name
              } : null;
            }).filter(Boolean);
            return _context4.a(2, autofill_objectSpread(autofill_objectSpread({}, metadata), {}, {
              addressFields: addressFields
            }));
        }
      }, _callee4);
    }));
    function fetchMissingMetadata(_x0, _x1, _x10, _x11) {
      return _fetchMissingMetadata3.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer2 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee6(_question, metadata) {
      var _metadata$addressFiel;
      var entries;
      return autofill_regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return Promise.all(((_metadata$addressFiel = metadata.addressFields) !== null && _metadata$addressFiel !== void 0 ? _metadata$addressFiel : []).map(/*#__PURE__*/function () {
              var _ref4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee5(_ref3) {
                var name, label, _t, _t2, _t3, _t4;
                return autofill_regenerator().w(function (_context5) {
                  while (1) switch (_context5.p = _context5.n) {
                    case 0:
                      name = _ref3.name, label = _ref3.label;
                      _context5.p = 1;
                      _t = name;
                      _t2 = addressAnswerValue;
                      _context5.n = 2;
                      return getAnswer(label, 'text', [], {}, "".concat(ADDRESS_FIELD_ID, "-").concat(name), true);
                    case 2:
                      _t3 = _t2(_context5.v);
                      return _context5.a(2, [_t, _t3]);
                    case 3:
                      _context5.p = 3;
                      _t4 = _context5.v;
                      return _context5.a(2, [name, '']);
                  }
                }, _callee5, null, [[1, 3]]);
              }));
              return function (_x14) {
                return _ref4.apply(this, arguments);
              };
            }()));
          case 1:
            entries = _context6.v;
            return _context6.a(2, Object.fromEntries(entries));
        }
      }, _callee6);
    }));
    function generateAnswer(_x12, _x13) {
      return _generateAnswer2.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  stringifyAnswerForPanel: function stringifyAnswerForPanel(answer) {
    return joinParts([answer === null || answer === void 0 ? void 0 : answer.addressLine1, answer === null || answer === void 0 ? void 0 : answer.city, answer === null || answer === void 0 ? void 0 : answer.region2, answer === null || answer === void 0 ? void 0 : answer.postalCode, answer === null || answer === void 0 ? void 0 : answer.country]);
  }
}], ['single-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options) && metadata.options.length > 0;
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
    function fetchMissingMetadata(_x15) {
      return _fetchMissingMetadata4.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function generateAnswer(question, metadata, fieldId) {
    var _metadata$options3, _metadata$constraints3, _metadata$referenceQa3;
    return getAnswer(question, 'single-select', (_metadata$options3 = metadata.options) !== null && _metadata$options3 !== void 0 ? _metadata$options3 : [], (_metadata$constraints3 = metadata.constraints) !== null && _metadata$constraints3 !== void 0 ? _metadata$constraints3 : {}, fieldId, true, (_metadata$referenceQa3 = metadata.referenceQaPairs) !== null && _metadata$referenceQa3 !== void 0 ? _metadata$referenceQa3 : []);
  }
}], ['multi-select', {
  isMetadataReady: function isMetadataReady(metadata) {
    return Array.isArray(metadata.options) && metadata.options.length > 0;
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
    function fetchMissingMetadata(_x16) {
      return _fetchMissingMetadata5.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function generateAnswer(question, metadata, fieldId) {
    var _metadata$options4, _metadata$constraints4, _metadata$referenceQa4;
    return getAnswer(question, 'multi-select', (_metadata$options4 = metadata.options) !== null && _metadata$options4 !== void 0 ? _metadata$options4 : [], (_metadata$constraints4 = metadata.constraints) !== null && _metadata$constraints4 !== void 0 ? _metadata$constraints4 : {}, fieldId, true, (_metadata$referenceQa4 = metadata.referenceQaPairs) !== null && _metadata$referenceQa4 !== void 0 ? _metadata$referenceQa4 : []);
  }
}], ['resume', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata6 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee9(metadata) {
      return autofill_regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            return _context9.a(2, metadata);
        }
      }, _callee9);
    }));
    function fetchMissingMetadata(_x17) {
      return _fetchMissingMetadata6.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer3 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee0() {
      var _yield$getResumeForAu, _t5, _t6, _t7, _t8;
      return autofill_regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            _context0.n = 1;
            return getResumeForAutofill();
          case 1:
            _t6 = _yield$getResumeForAu = _context0.v;
            _t5 = _t6 !== null;
            if (!_t5) {
              _context0.n = 2;
              break;
            }
            _t5 = _yield$getResumeForAu !== void 0;
          case 2:
            if (!_t5) {
              _context0.n = 3;
              break;
            }
            _t7 = _yield$getResumeForAu;
            _context0.n = 4;
            break;
          case 3:
            _t7 = {
              type: 'skip'
            };
          case 4:
            return _context0.a(2, _t7);
          case 5:
            _context0.p = 5;
            _t8 = _context0.v;
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
    var _fetchMissingMetadata7 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee1(metadata) {
      return autofill_regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            return _context1.a(2, metadata);
        }
      }, _callee1);
    }));
    function fetchMissingMetadata(_x18) {
      return _fetchMissingMetadata7.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer4 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee10(_question, metadata) {
      var _yield$getCoverLetter, _metadata$constraints5, _t9, _t0, _t1, _t10;
      return autofill_regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            _context10.p = 0;
            _context10.n = 1;
            return getCoverLetterForAutofill((_metadata$constraints5 = metadata.constraints) !== null && _metadata$constraints5 !== void 0 ? _metadata$constraints5 : {});
          case 1:
            _t0 = _yield$getCoverLetter = _context10.v;
            _t9 = _t0 !== null;
            if (!_t9) {
              _context10.n = 2;
              break;
            }
            _t9 = _yield$getCoverLetter !== void 0;
          case 2:
            if (!_t9) {
              _context10.n = 3;
              break;
            }
            _t1 = _yield$getCoverLetter;
            _context10.n = 4;
            break;
          case 3:
            _t1 = {
              type: 'skip'
            };
          case 4:
            return _context10.a(2, _t1);
          case 5:
            _context10.p = 5;
            _t10 = _context10.v;
            return _context10.a(2, {
              type: 'skip'
            });
        }
      }, _callee10, null, [[0, 5]]);
    }));
    function generateAnswer(_x19, _x20) {
      return _generateAnswer4.apply(this, arguments);
    }
    return generateAnswer;
  }()
}], ['acknowledge', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata8 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee11(metadata) {
      return autofill_regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            return _context11.a(2, metadata);
        }
      }, _callee11);
    }));
    function fetchMissingMetadata(_x21) {
      return _fetchMissingMetadata8.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer5 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee12() {
      return autofill_regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            return _context12.a(2, true);
        }
      }, _callee12);
    }));
    function generateAnswer() {
      return _generateAnswer5.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  stringifyAnswerForPanel: function stringifyAnswerForPanel() {
    return 'Acknowledged';
  },
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}],
// Emailed "Confirm your identity" code — REQUIRED: the form never opens without
// it. The code is mailed when the pin page loads; a manual run started later
// can fall outside the inbox poll's 20 s look-back, so an empty poll presses
// "Send new code" and polls once more. Still nothing (or no mailbox to poll) →
// report the failure so the autoapply driver hands the row to a human
// ('verification_failed') instead of skipping the field. A code ORC texted to the
// phone never reaches the mailbox: reported at once — no poll, and no "Send new
// code", which would text the customer again.
['verification_code', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata9 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee13(metadata) {
      return autofill_regenerator().w(function (_context13) {
        while (1) switch (_context13.n) {
          case 0:
            return _context13.a(2, metadata);
        }
      }, _callee13);
    }));
    function fetchMissingMetadata(_x22) {
      return _fetchMissingMetadata9.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  generateAnswer: function () {
    var _generateAnswer6 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee14() {
      var _first$result;
      var first, resendButton, second;
      return autofill_regenerator().w(function (_context14) {
        while (1) switch (_context14.n) {
          case 0:
            if (!isSmsPinVerification()) {
              _context14.n = 2;
              break;
            }
            _context14.n = 1;
            return reportOracleVerificationFailure('not_found', 'sms_code');
          case 1:
            return _context14.a(2, {
              type: 'skip'
            });
          case 2:
            _context14.n = 3;
            return pollOracleVerificationCode();
          case 3:
            first = _context14.v;
            if (!first.code) {
              _context14.n = 4;
              break;
            }
            return _context14.a(2, first.code);
          case 4:
            if (!(((_first$result = first.result) === null || _first$result === void 0 ? void 0 : _first$result.reason) === 'mailbox_not_connected')) {
              _context14.n = 6;
              break;
            }
            _context14.n = 5;
            return reportOracleVerificationFailure('mailbox_not_connected');
          case 5:
            return _context14.a(2, {
              type: 'skip'
            });
          case 6:
            resendButton = getPinResendButton();
            if (resendButton) {
              _context14.n = 8;
              break;
            }
            _context14.n = 7;
            return reportOracleVerificationFailure('not_found', 'no_resend_button');
          case 7:
            return _context14.a(2, {
              type: 'skip'
            });
          case 8:
            resendButton.click();
            _context14.n = 9;
            return pollOracleVerificationCode();
          case 9:
            second = _context14.v;
            if (!second.code) {
              _context14.n = 10;
              break;
            }
            return _context14.a(2, second.code);
          case 10:
            _context14.n = 11;
            return reportOracleVerificationFailure('not_found', 'after_resend');
          case 11:
            return _context14.a(2, {
              type: 'skip'
            });
        }
      }, _callee14);
    }));
    function generateAnswer() {
      return _generateAnswer6.apply(this, arguments);
    }
    return generateAnswer;
  }(),
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}], ['skills', {
  isMetadataReady: function isMetadataReady() {
    return true;
  },
  fetchMissingMetadata: function () {
    var _fetchMissingMetadata0 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee15(metadata) {
      return autofill_regenerator().w(function (_context15) {
        while (1) switch (_context15.n) {
          case 0:
            return _context15.a(2, metadata);
        }
      }, _callee15);
    }));
    function fetchMissingMetadata(_x23) {
      return _fetchMissingMetadata0.apply(this, arguments);
    }
    return fetchMissingMetadata;
  }(),
  // Skills come from the (job-aware) AI answer API as a text list, not the raw
  // profile section. The handler/panel parse it into individual skills.
  generateAnswer: function generateAnswer(question, metadata, fieldId) {
    var _metadata$options5, _metadata$constraints6, _metadata$referenceQa5;
    return getAnswer(question, 'text', (_metadata$options5 = metadata.options) !== null && _metadata$options5 !== void 0 ? _metadata$options5 : [], (_metadata$constraints6 = metadata.constraints) !== null && _metadata$constraints6 !== void 0 ? _metadata$constraints6 : {}, fieldId, true, (_metadata$referenceQa5 = metadata.referenceQaPairs) !== null && _metadata$referenceQa5 !== void 0 ? _metadata$referenceQa5 : []);
  },
  stringifyAnswerForPanel: function stringifyAnswerForPanel(answer) {
    return parseSkillList(answer).join(', ') || 'No skills';
  },
  isEditableOnPanel: function isEditableOnPanel() {
    return false;
  }
}]]);

// Parse an AI skills answer (a comma/newline/bullet list, or an array) into a
// clean, de-duplicated list of individual skill names.
function parseSkillList(answer) {
  var value = answer;
  if (value && autofill_typeof(value) === 'object' && !Array.isArray(value)) {
    var _ref5, _ref6, _value$value;
    value = (_ref5 = (_ref6 = (_value$value = value.value) !== null && _value$value !== void 0 ? _value$value : value.answer) !== null && _ref6 !== void 0 ? _ref6 : value.text) !== null && _ref5 !== void 0 ? _ref5 : '';
  }
  var raw = Array.isArray(value) ? value.map(skillName) : String(value !== null && value !== void 0 ? value : '').split(/[\n,;|•·]+/);
  var seen = new Set();
  var result = [];
  var _iterator18 = autofill_createForOfIteratorHelper(raw),
    _step18;
  try {
    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
      var item = _step18.value;
      var name = clean(String(item).replace(/^[\s\d.)\-*•·]+/, '')); // strip leading bullets/numbers
      var key = name.toLowerCase();
      if (name && !seen.has(key)) {
        seen.add(key);
        result.push(name);
      }
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
  }
  return result;
}
function joinParts(parts) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';
  return parts.map(function (p) {
    return clean(p);
  }).filter(Boolean).join(separator);
}

// A profile skill may be a string or an object — extract the display name.
function skillName(skill) {
  if (typeof skill === 'string') return clean(skill);
  return clean((skill === null || skill === void 0 ? void 0 : skill.name) || (skill === null || skill === void 0 ? void 0 : skill.skill) || (skill === null || skill === void 0 ? void 0 : skill.title) || (skill === null || skill === void 0 ? void 0 : skill.value));
}

// --- Field-kind handlers -----------------------------------------------------

function resolveControl(field, selector) {
  var _field$matches, _field$querySelector, _field$querySelector2;
  if (!field) return null;
  if ((_field$matches = field.matches) !== null && _field$matches !== void 0 && _field$matches.call(field, selector)) return field;
  return (_field$querySelector = (_field$querySelector2 = field.querySelector) === null || _field$querySelector2 === void 0 ? void 0 : _field$querySelector2.call(field, selector)) !== null && _field$querySelector !== void 0 ? _field$querySelector : null;
}
function getComboListOptions(input) {
  var listboxId = input.getAttribute('aria-controls');
  var listbox = listboxId && document.getElementById(listboxId) || document.querySelector('.cx-select__list');
  if (!listbox) return null;
  var cells = listbox.querySelectorAll('[role="gridcell"], [role="option"]');
  if (!cells.length) return null;
  return Array.from(cells).map(function (cell) {
    var _cell$querySelector;
    return {
      el: cell,
      text: clean(((_cell$querySelector = cell.querySelector('.cx-select__list-item--content')) === null || _cell$querySelector === void 0 ? void 0 : _cell$querySelector.textContent) || cell.textContent)
    };
  }).filter(function (option) {
    return option.text;
  });
}
function closeComboDropdown(input) {
  input.dispatchEvent(new KeyboardEvent('keydown', {
    key: 'Escape',
    bubbles: true
  }));
  input.dispatchEvent(new Event('blur', {
    bubbles: true
  }));
}
function getComboDropdownArrow(input) {
  var _input$parentElement, _container$querySelec2;
  var container = input.closest('.cx-select-container') || input.closest('.input-field-container') || ((_input$parentElement = input.parentElement) === null || _input$parentElement === void 0 ? void 0 : _input$parentElement.parentElement);
  return (_container$querySelec2 = container === null || container === void 0 ? void 0 : container.querySelector('.icon-dropdown-arrow')) !== null && _container$querySelec2 !== void 0 ? _container$querySelec2 : null;
}

// Open a cx-select via its dropdown-arrow, read its option labels, then close
// it. Returns { options, complete }: `complete` means the whole list was read
// (small enumerable dropdown -> single-select). A long list is capped at `max`
// and reported incomplete -> the caller falls back to free-text + type/filter,
// so we DON'T waste time scrolling thousands of rows (city/ZIP/county).
function readComboOptions(_x24) {
  return _readComboOptions.apply(this, arguments);
}
function _readComboOptions() {
  _readComboOptions = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee41(field) {
    var shouldAbort,
      max,
      input,
      arrow,
      first,
      listboxId,
      listbox,
      texts,
      _iterator21,
      _step21,
      _option,
      scrollable,
      complete,
      lastSize,
      stable,
      _iterator22,
      _step22,
      option,
      _args41 = arguments;
    return autofill_regenerator().w(function (_context41) {
      while (1) switch (_context41.n) {
        case 0:
          shouldAbort = _args41.length > 1 && _args41[1] !== undefined ? _args41[1] : autofill_NEVER_ABORT;
          max = _args41.length > 2 && _args41[2] !== undefined ? _args41[2] : 60;
          input = resolveControl(field, COMBO_INPUT_SELECTOR) || resolveControl(field, 'input');
          if (!(!input || shouldAbort())) {
            _context41.n = 1;
            break;
          }
          return _context41.a(2, {
            options: [],
            complete: false
          });
        case 1:
          input.scrollIntoView({
            block: 'center'
          });
          input.focus();
          arrow = getComboDropdownArrow(input);
          if (arrow) {
            arrow.click();
          } else {
            triggerMouseEvent(input, 'mousedown');
            triggerMouseEvent(input, 'mouseup');
          }
          _context41.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return getComboListOptions(input);
          }, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort);
        case 2:
          first = _context41.v;
          if (first) {
            _context41.n = 3;
            break;
          }
          closeComboDropdown(input);
          return _context41.a(2, {
            options: [],
            complete: false
          });
        case 3:
          listboxId = input.getAttribute('aria-controls');
          listbox = listboxId && document.getElementById(listboxId) || document.querySelector('.cx-select__list');
          texts = new Set();
          _iterator21 = autofill_createForOfIteratorHelper(getComboListOptions(input) || []);
          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              _option = _step21.value;
              texts.add(_option.text);
            }

            // Fully rendered (not scrollable) -> we already have the whole list.
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
          scrollable = listbox && listbox.scrollHeight > listbox.clientHeight + 4;
          complete = !scrollable;
          if (!scrollable) {
            _context41.n = 7;
            break;
          }
          lastSize = -1;
          stable = 0;
        case 4:
          if (!(texts.size < max && stable < 2 && !shouldAbort())) {
            _context41.n = 6;
            break;
          }
          _iterator22 = autofill_createForOfIteratorHelper(getComboListOptions(input) || []);
          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              option = _step22.value;
              texts.add(option.text);
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
          if (texts.size === lastSize) stable += 1;else {
            stable = 0;
            lastSize = texts.size;
          }
          listbox.scrollTop = listbox.scrollHeight;
          _context41.n = 5;
          return sleep(80);
        case 5:
          _context41.n = 4;
          break;
        case 6:
          complete = texts.size < max; // stabilized before the cap = whole list read
        case 7:
          closeComboDropdown(input);
          return _context41.a(2, {
            options: Array.from(texts).slice(0, max),
            complete: complete
          });
      }
    }, _callee41);
  }));
  return _readComboOptions.apply(this, arguments);
}
function selectComboOption(_x25, _x26) {
  return _selectComboOption.apply(this, arguments);
} // Type `filterText` into a cx-select and click the option `choose(options)` returns. Unlike
// selectComboOption there is NO fuzzy fallback: no acceptable option → the typed filter is cleared
// and nothing is selected (a strict list like Country must never take a near-miss, and typed text
// the React state ignores only reads as filled). Returns the chosen option text, or null.
function _selectComboOption() {
  _selectComboOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee43(input, value) {
    var shouldAbort,
      target,
      _args43 = arguments;
    return autofill_regenerator().w(function (_context43) {
      while (1) switch (_context43.n) {
        case 0:
          shouldAbort = _args43.length > 2 && _args43[2] !== undefined ? _args43[2] : autofill_NEVER_ABORT;
          target = clean(value);
          if (!(!target || shouldAbort())) {
            _context43.n = 1;
            break;
          }
          return _context43.a(2, value);
        case 1:
          return _context43.a(2, withRetry(/*#__PURE__*/autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee42() {
            var options, lowered, chosen, matchedText, _t15;
            return autofill_regenerator().w(function (_context42) {
              while (1) switch (_context42.p = _context42.n) {
                case 0:
                  if (!shouldAbort()) {
                    _context42.n = 1;
                    break;
                  }
                  return _context42.a(2, value);
                case 1:
                  input.scrollIntoView({
                    block: 'center'
                  });
                  input.focus();
                  triggerMouseEvent(input, 'mousedown');
                  triggerMouseEvent(input, 'mouseup');
                  // Type to filter the (often long, dependent) option grid.
                  fillTextInputWithoutBlur(input, target);
                  _context42.n = 2;
                  return waitForPositiveResultWithAbort(function () {
                    return getComboListOptions(input);
                  }, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort);
                case 2:
                  options = _context42.v;
                  if (!shouldAbort()) {
                    _context42.n = 3;
                    break;
                  }
                  return _context42.a(2, value);
                case 3:
                  if (!(!options || options.length === 0)) {
                    _context42.n = 4;
                    break;
                  }
                  // Free-text / auto-suggest control with no menu — leave the typed value.
                  input.dispatchEvent(new Event('change', {
                    bubbles: true
                  }));
                  input.dispatchEvent(new Event('blur', {
                    bubbles: true
                  }));
                  return _context42.a(2, target);
                case 4:
                  lowered = target.toLowerCase();
                  chosen = options.find(function (option) {
                    return option.text.toLowerCase() === lowered;
                  }) || options.find(function (option) {
                    return option.text.toLowerCase().startsWith(lowered);
                  }) || options.find(function (option) {
                    return option.text.toLowerCase().includes(lowered);
                  });
                  if (chosen) {
                    _context42.n = 8;
                    break;
                  }
                  _context42.p = 5;
                  _context42.n = 6;
                  return getEmbeddingMatch(target, options.map(function (option) {
                    return option.text;
                  }));
                case 6:
                  matchedText = _context42.v;
                  if (matchedText) chosen = options.find(function (option) {
                    return option.text === matchedText;
                  });
                  _context42.n = 8;
                  break;
                case 7:
                  _context42.p = 7;
                  _t15 = _context42.v;
                case 8:
                  if (chosen) {
                    _context42.n = 9;
                    break;
                  }
                  // No match (e.g. a typed street address): keep the typed text, close menu.
                  input.dispatchEvent(new Event('change', {
                    bubbles: true
                  }));
                  input.dispatchEvent(new KeyboardEvent('keydown', {
                    key: 'Escape',
                    bubbles: true
                  }));
                  return _context42.a(2, target);
                case 9:
                  triggerMouseEvent(chosen.el, 'mousedown');
                  triggerMouseEvent(chosen.el, 'mouseup');
                  chosen.el.click();
                  return _context42.a(2, chosen.text);
              }
            }, _callee42, null, [[5, 7]]);
          }))));
      }
    }, _callee43);
  }));
  return _selectComboOption.apply(this, arguments);
}
function selectComboWhere(_x27, _x28, _x29) {
  return _selectComboWhere.apply(this, arguments);
} // Country cx-select (work / education entries): the exact country name, or an option that
// starts with it ("Korea" → "Korea, Republic of"); never a substring hit.
function _selectComboWhere() {
  _selectComboWhere = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee44(input, filterText, choose) {
    var shouldAbort,
      filter,
      readOptions,
      options,
      chosen,
      _args44 = arguments;
    return autofill_regenerator().w(function (_context44) {
      while (1) switch (_context44.n) {
        case 0:
          shouldAbort = _args44.length > 3 && _args44[3] !== undefined ? _args44[3] : autofill_NEVER_ABORT;
          filter = clean(filterText);
          if (!(!input || !filter || shouldAbort())) {
            _context44.n = 1;
            break;
          }
          return _context44.a(2, null);
        case 1:
          input.scrollIntoView({
            block: 'center'
          });
          input.focus();
          triggerMouseEvent(input, 'mousedown');
          triggerMouseEvent(input, 'mouseup');
          fillTextInputWithoutBlur(input, filter);
          // The input's OWN listbox when it names one: a just-closed combo's list can linger in the DOM.
          readOptions = function readOptions() {
            return input.getAttribute('aria-controls') ? getOwnComboOptions(input) : getComboListOptions(input);
          };
          _context44.n = 2;
          return waitForPositiveResultWithAbort(readOptions, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort);
        case 2:
          options = _context44.v;
          chosen = options && !shouldAbort() ? choose(options) : null;
          if (chosen) {
            _context44.n = 3;
            break;
          }
          fillTextInputWithoutBlur(input, '');
          closeComboDropdown(input);
          return _context44.a(2, null);
        case 3:
          triggerMouseEvent(chosen.el, 'mousedown');
          triggerMouseEvent(chosen.el, 'mouseup');
          chosen.el.click();
          return _context44.a(2, chosen.text);
      }
    }, _callee44);
  }));
  return _selectComboWhere.apply(this, arguments);
}
function selectCountryComboOption(input, country) {
  var shouldAbort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : autofill_NEVER_ABORT;
  var wanted = clean(country).toLowerCase();
  return selectComboWhere(input, country, function (options) {
    return options.find(function (option) {
      return option.text.toLowerCase() === wanted;
    }) || options.find(function (option) {
      return option.text.toLowerCase().startsWith("".concat(wanted, ","));
    }) || null;
  }, shouldAbort);
}

// Phone prefix cx-select. Options read "+1 (United States)" / "+1 (Canada)" (ORC's
// territoryShortName), so a dial code alone is ambiguous — and when nothing is chosen ORC
// validates the number against the SITE's territory (a Canadian tenant rejected a US number:
// "Enter a valid number"). Pick by the profile's country, held to the answer's dial code when
// it has one; else the dial code's first territory.
function selectPhonePrefixOption(_x30) {
  return _selectPhonePrefixOption.apply(this, arguments);
} // The listed options for `zipText`: the row's ZIP part equals it, extends it, or is its leading part (ZIP+4
// "98115-1234" → "98115", a Canadian "M5V 3L9" → "M5V"); null while the list shows none.
function _selectPhonePrefixOption() {
  _selectPhonePrefixOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee45(input) {
    var _ref59,
      _ref59$country,
      country,
      _ref59$dialCode,
      dialCode,
      shouldAbort,
      wantedCountry,
      dialPrefix,
      picked,
      _args45 = arguments;
    return autofill_regenerator().w(function (_context45) {
      while (1) switch (_context45.n) {
        case 0:
          _ref59 = _args45.length > 1 && _args45[1] !== undefined ? _args45[1] : {}, _ref59$country = _ref59.country, country = _ref59$country === void 0 ? '' : _ref59$country, _ref59$dialCode = _ref59.dialCode, dialCode = _ref59$dialCode === void 0 ? '' : _ref59$dialCode;
          shouldAbort = _args45.length > 2 && _args45[2] !== undefined ? _args45[2] : autofill_NEVER_ABORT;
          wantedCountry = clean(country).toLowerCase();
          dialPrefix = dialCode ? "+".concat(dialCode, " (") : '';
          if (!wantedCountry) {
            _context45.n = 2;
            break;
          }
          _context45.n = 1;
          return selectComboWhere(input, country, function (options) {
            return options.find(function (option) {
              var text = option.text.toLowerCase();
              return text.endsWith("(".concat(wantedCountry, ")")) && (!dialPrefix || text.startsWith(dialPrefix));
            }) || null;
          }, shouldAbort);
        case 1:
          picked = _context45.v;
          if (!picked) {
            _context45.n = 2;
            break;
          }
          return _context45.a(2, picked);
        case 2:
          if (dialPrefix) {
            _context45.n = 3;
            break;
          }
          return _context45.a(2, null);
        case 3:
          return _context45.a(2, selectComboWhere(input, "+".concat(dialCode), function (options) {
            return options.find(function (option) {
              return option.text.startsWith(dialPrefix);
            }) || null;
          }, shouldAbort));
      }
    }, _callee45);
  }));
  return _selectPhonePrefixOption.apply(this, arguments);
}
function postalCodeOptionsFor(input, zipText) {
  var key = function key(text) {
    return clean(text).replace(/\s+/g, '').toUpperCase();
  };
  var zipKey = key(zipText);
  var matching = (getComboListOptions(input) || []).filter(function (option) {
    var optionKey = key(option.text.split(',')[0]);
    return optionKey && (optionKey.startsWith(zipKey) || optionKey.length >= 3 && zipKey.startsWith(optionKey));
  });
  return matching.length ? matching : null;
}

// The text typed to filter the ZIP list: a US ZIP+4 ("90029-2050", "90029 2050", "900292050") as its 5-digit ZIP.
// ORC's list rows carry 5-digit ZIPs and match the typed text as their prefix, so a typed ZIP+4 narrows to
// nothing — the list stays on its unfiltered first page and the ZIP / City / County stayed empty (BNY 2026-10-23).
function postalCodeFilterText(zip) {
  var zipText = clean(zip);
  var zipPlus4 = /^(\d{5})[-\s]?\d{4}$/.exec(zipText);
  return zipPlus4 ? zipPlus4[1] : zipText;
}

// ZIP/postal combo: options are "ZIP, City, County, State"; selecting one
// auto-fills city/county/state. Pick the option whose CITY part matches the
// desired city, else the first option for the typed ZIP. Only a row FOR the typed ZIP is ever picked: Oracle's own
// site opens the list on its unfiltered first page ("00000, Baker Island, …"), narrows it a beat later, and can
// drop a filter typed before that page loaded until the ZIP is typed again — the first row of that page put
// Baker Island in as the home address. A list that never names the ZIP is left alone (the required ZIP stays empty).
function selectPostalCodeOption(_x31, _x32, _x33) {
  return _selectPostalCodeOption.apply(this, arguments);
} // Some sites render City and the ZIP as plain text boxes (eClerx), others as cx-select lists: a plain box takes the
// value as typed. Treated as a list it waited 5 s for options that never come, and the ZIP pick then cleared the
// typed ZIP (eClerx lab run 2026-10-24: ~16 s on the block and the ZIP left empty).
function _selectPostalCodeOption() {
  _selectPostalCodeOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee46(input, zip, city) {
    var shouldAbort,
      zipText,
      wantCity,
      cityOf,
      attempt,
      options,
      chosen,
      _args46 = arguments;
    return autofill_regenerator().w(function (_context46) {
      while (1) switch (_context46.n) {
        case 0:
          shouldAbort = _args46.length > 3 && _args46[3] !== undefined ? _args46[3] : autofill_NEVER_ABORT;
          zipText = postalCodeFilterText(zip);
          if (!(!zipText || shouldAbort())) {
            _context46.n = 1;
            break;
          }
          return _context46.a(2, false);
        case 1:
          wantCity = clean(city).toLowerCase();
          cityOf = function cityOf(text) {
            return clean(text.split(',')[1] || '').toLowerCase();
          };
          attempt = 0;
        case 2:
          if (!(attempt < POSTAL_CODE_FILTER_ATTEMPTS && !shouldAbort())) {
            _context46.n = 8;
            break;
          }
          input.scrollIntoView({
            block: 'center'
          });
          input.focus();
          triggerMouseEvent(input, 'mousedown');
          triggerMouseEvent(input, 'mouseup');
          if (!(attempt > 0)) {
            _context46.n = 3;
            break;
          }
          fillTextInputWithoutBlur(input, '');
          _context46.n = 3;
          return sleep(POSTAL_CODE_RETYPE_PAUSE_MS);
        case 3:
          fillTextInputWithoutBlur(input, zipText);
          _context46.n = 4;
          return waitForPositiveResultWithAbort(function () {
            return postalCodeOptionsFor(input, zipText);
          }, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort);
        case 4:
          options = _context46.v;
          if (!(!options || shouldAbort())) {
            _context46.n = 5;
            break;
          }
          return _context46.a(3, 7);
        case 5:
          chosen = wantCity && options.find(function (o) {
            return cityOf(o.text) === wantCity;
          }) || options[0];
          triggerMouseEvent(chosen.el, 'mousedown');
          triggerMouseEvent(chosen.el, 'mouseup');
          chosen.el.click();
          _context46.n = 6;
          return sleep(250);
        case 6:
          return _context46.a(2, true);
        case 7:
          attempt += 1;
          _context46.n = 2;
          break;
        case 8:
          // Typed text the cx-select never committed only looks filled.
          fillTextInputWithoutBlur(input, '');
          closeComboDropdown(input);
          return _context46.a(2, false);
      }
    }, _callee46);
  }));
  return _selectPostalCodeOption.apply(this, arguments);
}
function isListControl(input) {
  return input.matches(COMBO_INPUT_SELECTOR);
}

// County (region1): the county itself or nothing. A profile's county is free text and some hold the state
// (48 of 873 profiles on 2026-10-24 have a two-letter county): typed into ORC's county list, "CA" was picked as
// "Calaveras" for a Los Angeles address (prefix match), and selectComboOption's contains / embedding fallbacks
// pick SOME county for any value. Only an exact name is picked ("Los Angeles" = "Los Angeles County"); a
// two-letter value is never a county; no matching row → the typed filter is cleared and the field stays empty.
var COUNTY_SUFFIX_PATTERN = /\s+(county|parish|borough)$/i;
var countyKey = function countyKey(value) {
  return clean(value).toLowerCase().replace(COUNTY_SUFFIX_PATTERN, '');
};
function selectCountyOption(_x34, _x35) {
  return _selectCountyOption.apply(this, arguments);
} // The block's visible address controls by name, Country included.
function _selectCountyOption() {
  _selectCountyOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee47(input, value) {
    var shouldAbort,
      key,
      match,
      _args47 = arguments;
    return autofill_regenerator().w(function (_context47) {
      while (1) switch (_context47.n) {
        case 0:
          shouldAbort = _args47.length > 2 && _args47[2] !== undefined ? _args47[2] : autofill_NEVER_ABORT;
          key = countyKey(value);
          if (!(key.length <= 2 || shouldAbort())) {
            _context47.n = 1;
            break;
          }
          return _context47.a(2, false);
        case 1:
          if (isListControl(input)) {
            _context47.n = 2;
            break;
          }
          fillTextInput(input, clean(value));
          return _context47.a(2, true);
        case 2:
          input.scrollIntoView({
            block: 'center'
          });
          input.focus();
          triggerMouseEvent(input, 'mousedown');
          triggerMouseEvent(input, 'mouseup');
          fillTextInputWithoutBlur(input, clean(value).replace(COUNTY_SUFFIX_PATTERN, ''));
          _context47.n = 3;
          return waitForPositiveResultWithAbort(function () {
            var _getComboListOptions;
            return (_getComboListOptions = getComboListOptions(input)) === null || _getComboListOptions === void 0 ? void 0 : _getComboListOptions.find(function (option) {
              return countyKey(option.text) === key;
            });
          }, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort);
        case 3:
          match = _context47.v;
          if (!(!match || shouldAbort())) {
            _context47.n = 4;
            break;
          }
          fillTextInputWithoutBlur(input, '');
          closeComboDropdown(input);
          return _context47.a(2, false);
        case 4:
          triggerMouseEvent(match.el, 'mousedown');
          triggerMouseEvent(match.el, 'mouseup');
          match.el.click();
          return _context47.a(2, true);
      }
    }, _callee47);
  }));
  return _selectCountyOption.apply(this, arguments);
}
function addressControls(block) {
  var controls = new Map();
  var _iterator19 = autofill_createForOfIteratorHelper(ADDRESS_FIELD_NAMES),
    _step19;
  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      var name = _step19.value;
      var control = block === null || block === void 0 ? void 0 : block.querySelector("input[name=\"".concat(name, "\"]"));
      if (control && isVisible(control)) controls.set(name, control);
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }
  return controls;
}

// The address composite's fieldId: 'address' while only Country is shown, then 'address:<anchor id>' — a new
// id when the dependent controls mount and again whenever ORC rebuilds them (see ADDRESS_FIELD_ID).
function addressFieldId(block) {
  var controls = addressControls(block);
  var anchor = ADDRESS_ANCHOR_FIELD_NAMES.map(function (name) {
    return controls.get(name);
  }).find(Boolean);
  return anchor !== null && anchor !== void 0 && anchor.id ? "".concat(ADDRESS_FIELD_ID, ":").concat(anchor.id) : ADDRESS_FIELD_ID;
}

// One address sub-field's answer as text: a skip / review / error sentinel ({ type }) or -1 is "no value" —
// stringified, it typed "[object Object]" into Address Line 2.
function addressAnswerValue(value) {
  return typeof value === 'string' || typeof value === 'number' && value !== -1 ? clean(value) : '';
}

// US state/territory full name <-> 2-letter code. The State (region2) combo
// sometimes lists ONLY abbreviations (or only full names), so a profile value of
// "California" can't filter a "CA"-only list (and "CA" can't filter a
// full-name-only list). We read the real option list and match by EITHER form.
var US_STATE_CODES = {
  alabama: 'AL',
  alaska: 'AK',
  arizona: 'AZ',
  arkansas: 'AR',
  california: 'CA',
  colorado: 'CO',
  connecticut: 'CT',
  delaware: 'DE',
  'district of columbia': 'DC',
  florida: 'FL',
  georgia: 'GA',
  hawaii: 'HI',
  idaho: 'ID',
  illinois: 'IL',
  indiana: 'IN',
  iowa: 'IA',
  kansas: 'KS',
  kentucky: 'KY',
  louisiana: 'LA',
  maine: 'ME',
  maryland: 'MD',
  massachusetts: 'MA',
  michigan: 'MI',
  minnesota: 'MN',
  mississippi: 'MS',
  missouri: 'MO',
  montana: 'MT',
  nebraska: 'NE',
  nevada: 'NV',
  'new hampshire': 'NH',
  'new jersey': 'NJ',
  'new mexico': 'NM',
  'new york': 'NY',
  'north carolina': 'NC',
  'north dakota': 'ND',
  ohio: 'OH',
  oklahoma: 'OK',
  oregon: 'OR',
  pennsylvania: 'PA',
  'rhode island': 'RI',
  'south carolina': 'SC',
  'south dakota': 'SD',
  tennessee: 'TN',
  texas: 'TX',
  utah: 'UT',
  vermont: 'VT',
  virginia: 'VA',
  washington: 'WA',
  'west virginia': 'WV',
  wisconsin: 'WI',
  wyoming: 'WY',
  'puerto rico': 'PR',
  guam: 'GU',
  'american samoa': 'AS',
  'virgin islands': 'VI',
  'northern mariana islands': 'MP'
};
var US_STATE_NAMES = Object.fromEntries(Object.entries(US_STATE_CODES).map(function (_ref7) {
  var _ref8 = autofill_slicedToArray(_ref7, 2),
    name = _ref8[0],
    code = _ref8[1];
  return [code, name];
}));
var CA_PROVINCE_CODES = {
  alberta: 'AB',
  'british columbia': 'BC',
  manitoba: 'MB',
  'new brunswick': 'NB',
  'newfoundland and labrador': 'NL',
  'nova scotia': 'NS',
  ontario: 'ON',
  'prince edward island': 'PE',
  quebec: 'QC',
  saskatchewan: 'SK',
  'northwest territories': 'NT',
  nunavut: 'NU',
  yukon: 'YT'
};
var CA_PROVINCE_ABBREVIATIONS = new Set(Object.values(CA_PROVINCE_CODES));
var COUNTRY_ALIASES = {
  us: 'United States',
  usa: 'United States',
  'united states of america': 'United States',
  america: 'United States',
  uk: 'United Kingdom',
  'great britain': 'United Kingdom',
  britain: 'United Kingdom',
  england: 'United Kingdom',
  scotland: 'United Kingdom',
  wales: 'United Kingdom',
  'northern ireland': 'United Kingdom',
  uae: 'United Arab Emirates'
};

// Words a profile writes where a place belongs ("Remote", "Hybrid") — never a country.
var NON_PLACE_PATTERN = /^(remote|hybrid|on-?site|in[- ]office|anywhere|worldwide|global|virtual|home|work from home|wfh|n\/?a|none)$/i;

// The country a profile location names, as ORC lists it ("United States", "India"), or the
// fallback when the location names none. US profile locations are written "City, ST" — the last
// part is a STATE — and ORC's country combo filters by "contains", so typing the raw last part
// selected a foreign country ("NY" → Germany, "CA" → Cambodia, "NC" → France).
function resolveCountryName(location) {
  var _parts$at;
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var parts = String(location !== null && location !== void 0 ? location : '').split(',').map(function (part) {
    return clean(part);
  }).filter(Boolean);
  var last = (_parts$at = parts.at(-1)) !== null && _parts$at !== void 0 ? _parts$at : '';
  var key = last.toLowerCase().replace(/\./g, '');
  if (!last || NON_PLACE_PATTERN.test(last)) return fallback;
  if (COUNTRY_ALIASES[key]) return COUNTRY_ALIASES[key];
  if (US_STATE_CODES[key] || US_STATE_NAMES[last.toUpperCase()]) return 'United States';
  if (CA_PROVINCE_CODES[key] || CA_PROVINCE_ABBREVIATIONS.has(last.toUpperCase())) return 'Canada';
  // Any other short code is ambiguous (a region, a province elsewhere) — never type it.
  if (/^[a-z]{1,3}$/i.test(last)) return fallback;
  return last;
}

// The profile's own country (address first, then the phone's country), normalized like a
// location, and its city / state. One read per page — the profile does not change under a
// running fill.
var profileAddressPromise = null;
function loadProfileAddress() {
  profileAddressPromise !== null && profileAddressPromise !== void 0 ? profileAddressPromise : profileAddressPromise = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee16() {
    var _data$addresses$, _data$addresses, _data$phones, data, address, _t11;
    return autofill_regenerator().w(function (_context16) {
      while (1) switch (_context16.p = _context16.n) {
        case 0:
          _context16.p = 0;
          _context16.n = 1;
          return getProfileSectionData();
        case 1:
          data = _context16.v;
          address = (_data$addresses$ = data === null || data === void 0 || (_data$addresses = data.addresses) === null || _data$addresses === void 0 ? void 0 : _data$addresses[0]) !== null && _data$addresses$ !== void 0 ? _data$addresses$ : {};
          return _context16.a(2, {
            country: resolveCountryName(address.country),
            phoneCountry: resolveCountryName(data === null || data === void 0 || (_data$phones = data.phones) === null || _data$phones === void 0 || (_data$phones = _data$phones[0]) === null || _data$phones === void 0 ? void 0 : _data$phones.countryName),
            city: clean(address.city),
            state: clean(address.state)
          });
        case 2:
          _context16.p = 2;
          _t11 = _context16.v;
          return _context16.a(2, {
            country: '',
            phoneCountry: '',
            city: '',
            state: ''
          });
      }
    }, _callee16, null, [[0, 2]]);
  }))();
  return profileAddressPromise;
}
function isStateOrProvince(part) {
  var key = clean(part).toLowerCase();
  return Boolean(US_STATE_CODES[key] || US_STATE_NAMES[key.toUpperCase()] || CA_PROVINCE_CODES[key] || CA_PROVINCE_ABBREVIATIONS.has(key.toUpperCase()));
}

// City / state named by a profile location ("New York, NY", "Austin, TX, USA"). `place` is false
// for a non-place ("Remote") or an empty location.
function parseLocationParts(location) {
  var parts = String(location !== null && location !== void 0 ? location : '').split(',').map(function (part) {
    return clean(part);
  }).filter(Boolean);
  if (!parts.length || parts.length === 1 && NON_PLACE_PATTERN.test(parts[0])) return {
    city: '',
    state: '',
    place: false
  };
  var stateIndex = parts.findIndex(function (part, index) {
    return index > 0 && isStateOrProvince(part);
  });
  if (stateIndex > 0) return {
    city: parts[0],
    state: parts[stateIndex],
    place: true
  };
  return {
    city: parts.length >= 2 ? parts[0] : '',
    state: '',
    place: true
  };
}

// All accepted spellings of a state value (lower-cased): the original, its
// 2-letter code, and its full name — whichever the original wasn't.
function stateValueVariants(value) {
  var trimmed = clean(value);
  var variants = new Set();
  if (!trimmed) return variants;
  var lower = trimmed.toLowerCase();
  variants.add(lower);
  if (US_STATE_CODES[lower]) variants.add(US_STATE_CODES[lower].toLowerCase());
  if (/^[a-z]{2}$/i.test(trimmed) && US_STATE_NAMES[trimmed.toUpperCase()]) {
    variants.add(US_STATE_NAMES[trimmed.toUpperCase()]);
  }
  return variants;
}

// Fill the State (region2) cx-select. The list may carry full names OR just
// abbreviations, so read the option labels and match the profile state against
// ANY of its spellings, then select that exact option. Falls back to typing the
// raw value (selectComboOption's own fuzzy match) when the list can't be read or
// no variant matched a label.
function selectStateOption(_x36, _x37) {
  return _selectStateOption.apply(this, arguments);
} // Pick the closest option label to a profile value by exact/base/prefix/substring
// matching (no network). Options are often "Full Name - ABBREV" (e.g. "Bachelor
// of Science - BS"), so compare against the base (text before " - ") too, so a
// profile value like "Bachelor of Science in CS" matches "Bachelor of Science -
// BS". Returns the matched option string, or null if nothing matched locally.
function _selectStateOption() {
  _selectStateOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee48(input, value) {
    var shouldAbort,
      target,
      _yield$readComboOptio2,
      options,
      variants,
      match,
      _args48 = arguments;
    return autofill_regenerator().w(function (_context48) {
      while (1) switch (_context48.n) {
        case 0:
          shouldAbort = _args48.length > 2 && _args48[2] !== undefined ? _args48[2] : autofill_NEVER_ABORT;
          target = clean(value);
          if (!(!target || shouldAbort())) {
            _context48.n = 1;
            break;
          }
          return _context48.a(2);
        case 1:
          _context48.n = 2;
          return readComboOptions(input, shouldAbort);
        case 2:
          _yield$readComboOptio2 = _context48.v;
          options = _yield$readComboOptio2.options;
          if (!shouldAbort()) {
            _context48.n = 3;
            break;
          }
          return _context48.a(2);
        case 3:
          if (!options.length) {
            _context48.n = 5;
            break;
          }
          variants = stateValueVariants(target);
          match = options.find(function (option) {
            var label = clean(option).toLowerCase();
            if (variants.has(label)) return true;
            // "Full Name - ABBR" style labels: match either side.
            return label.split(' - ').some(function (part) {
              return variants.has(part.trim());
            });
          });
          if (!match) {
            _context48.n = 5;
            break;
          }
          _context48.n = 4;
          return selectComboOption(input, match, shouldAbort);
        case 4:
          return _context48.a(2);
        case 5:
          _context48.n = 6;
          return selectComboOption(input, target, shouldAbort);
        case 6:
          return _context48.a(2);
      }
    }, _callee48);
  }));
  return _selectStateOption.apply(this, arguments);
}
function pickBestMatchOption(value, options) {
  var lowered = clean(value).toLowerCase();
  if (!lowered || !Array.isArray(options) || !options.length) return null;
  var base = function base(option) {
    return String(option).split(' - ')[0].trim().toLowerCase();
  };
  return options.find(function (o) {
    return String(o).toLowerCase() === lowered;
  }) || options.find(function (o) {
    return base(o) === lowered;
  }) || options.find(function (o) {
    return String(o).toLowerCase().startsWith(lowered);
  }) || options.find(function (o) {
    return lowered.startsWith(base(o));
  }) || options.find(function (o) {
    return lowered.startsWith(String(o).toLowerCase());
  }) || options.find(function (o) {
    return String(o).toLowerCase().includes(lowered);
  }) || null;
}

// Pick the BEST option from an enumerable dropdown (e.g. Degree) for a profile
// value that won't match verbatim. Reads the full option list, matches locally,
// then falls back to a backend embedding match, and selects the chosen option by
// its exact label.
function selectComboBestMatch(_x38, _x39) {
  return _selectComboBestMatch.apply(this, arguments);
} // Pills variant of `selectComboBestMatch`: the SAME logical field (e.g. Degree)
// can render as a pills group instead of a cx-select. Pills are always an
// enumerable set, so read the option labels, best-match (local then embedding),
// and click the chosen pill — never leaving the field as free text.
function _selectComboBestMatch() {
  _selectComboBestMatch = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee49(input, value) {
    var shouldAbort,
      target,
      _yield$readComboOptio3,
      options,
      best,
      _args49 = arguments,
      _t16;
    return autofill_regenerator().w(function (_context49) {
      while (1) switch (_context49.p = _context49.n) {
        case 0:
          shouldAbort = _args49.length > 2 && _args49[2] !== undefined ? _args49[2] : autofill_NEVER_ABORT;
          target = clean(value);
          if (!(!target || shouldAbort())) {
            _context49.n = 1;
            break;
          }
          return _context49.a(2);
        case 1:
          _context49.n = 2;
          return readComboOptions(input, shouldAbort);
        case 2:
          _yield$readComboOptio3 = _context49.v;
          options = _yield$readComboOptio3.options;
          if (options.length) {
            _context49.n = 4;
            break;
          }
          _context49.n = 3;
          return selectComboOption(input, target, shouldAbort);
        case 3:
          return _context49.a(2);
        case 4:
          best = pickBestMatchOption(target, options);
          if (best) {
            _context49.n = 8;
            break;
          }
          _context49.p = 5;
          _context49.n = 6;
          return getEmbeddingMatch(target, options);
        case 6:
          best = _context49.v;
          _context49.n = 8;
          break;
        case 7:
          _context49.p = 7;
          _t16 = _context49.v;
        case 8:
          if (!(best && options.includes(best))) {
            _context49.n = 9;
            break;
          }
          _context49.n = 9;
          return selectComboOption(input, best, shouldAbort);
        case 9:
          return _context49.a(2);
      }
    }, _callee49, null, [[5, 7]]);
  }));
  return _selectComboBestMatch.apply(this, arguments);
}
function selectPillsBestMatch(_x40, _x41) {
  return _selectPillsBestMatch.apply(this, arguments);
}
function _selectPillsBestMatch() {
  _selectPillsBestMatch = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee50(pillsContainer, value) {
    var shouldAbort,
      target,
      buttons,
      names,
      options,
      best,
      index,
      button,
      _args50 = arguments,
      _t17;
    return autofill_regenerator().w(function (_context50) {
      while (1) switch (_context50.p = _context50.n) {
        case 0:
          shouldAbort = _args50.length > 2 && _args50[2] !== undefined ? _args50[2] : autofill_NEVER_ABORT;
          target = clean(value);
          if (!(!target || shouldAbort())) {
            _context50.n = 1;
            break;
          }
          return _context50.a(2);
        case 1:
          buttons = Array.from(pillsContainer.querySelectorAll('.cx-select-pill-section'));
          names = buttons.map(function (button) {
            var _button$querySelector2;
            return clean((_button$querySelector2 = button.querySelector('.cx-select-pill-name')) === null || _button$querySelector2 === void 0 ? void 0 : _button$querySelector2.textContent);
          });
          options = names.filter(Boolean);
          if (options.length) {
            _context50.n = 2;
            break;
          }
          return _context50.a(2);
        case 2:
          best = pickBestMatchOption(target, options);
          if (best) {
            _context50.n = 6;
            break;
          }
          _context50.p = 3;
          _context50.n = 4;
          return getEmbeddingMatch(target, options);
        case 4:
          best = _context50.v;
          _context50.n = 6;
          break;
        case 5:
          _context50.p = 5;
          _t17 = _context50.v;
        case 6:
          if (!(!best || shouldAbort())) {
            _context50.n = 7;
            break;
          }
          return _context50.a(2);
        case 7:
          index = names.findIndex(function (name) {
            return name === best;
          });
          button = buttons[index];
          if (button && button.getAttribute('aria-pressed') !== 'true') button.click();
        case 8:
          return _context50.a(2);
      }
    }, _callee50, null, [[3, 5]]);
  }));
  return _selectPillsBestMatch.apply(this, arguments);
}
function clickPill(field, value) {
  var _match$querySelector;
  var buttons = Array.from(field.querySelectorAll('.cx-select-pill-section'));
  var names = buttons.map(function (button) {
    var _button$querySelector;
    return clean((_button$querySelector = button.querySelector('.cx-select-pill-name')) === null || _button$querySelector === void 0 ? void 0 : _button$querySelector.textContent);
  });
  // Defensive: a raw option index could reach here if it wasn't resolved upstream.
  var target = clean(resolveOptionByIndex(value, names)).toLowerCase();
  if (!target) return null;
  var match = buttons.find(function (_button, i) {
    return names[i].toLowerCase() === target;
  }) || buttons.find(function (_button, i) {
    return names[i].toLowerCase().startsWith(target);
  });
  if (match && match.getAttribute('aria-pressed') !== 'true') {
    match.click();
  }
  return match ? clean((_match$querySelector = match.querySelector('.cx-select-pill-name')) === null || _match$querySelector === void 0 ? void 0 : _match$querySelector.textContent) : null;
}
function setChoiceByLabel(input, shouldCheck) {
  var label = null;
  if (input.id) {
    try {
      label = document.querySelector("label[for=\"".concat(CSS.escape(input.id), "\"]"));
    } catch (_e) {/* */}
  }
  // Hidden, id-less ORC checkboxes/radios are toggled by clicking their
  // wrapping label, not the visually-hidden input.
  var clickable = label || input.closest('label') || input;
  if (Boolean(input.checked) !== Boolean(shouldCheck)) {
    clickable.click();
  }
}
var FIELD_KIND_HANDLERS = new Map([['text', (/*#__PURE__*/function () {
  var _ref0 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee17(_fieldId, _question, answer, field) {
    var input;
    return autofill_regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          input = resolveControl(field, 'input, textarea');
          if (input && answer != null) fillTextInput(input, String(answer));
        case 1:
          return _context17.a(2);
      }
    }, _callee17);
  }));
  return function (_x42, _x43, _x44, _x45) {
    return _ref0.apply(this, arguments);
  };
}())], ['phone', (/*#__PURE__*/function () {
  var _ref1 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee18(_fieldId, _question, answer, field) {
    var _field$querySelector3;
    var _ref10,
      _ref10$shouldAbort,
      shouldAbort,
      value,
      telInput,
      codeCombo,
      national,
      dialCode,
      match,
      prefix,
      profile,
      _ref11,
      _field$querySelector4,
      _match,
      shownPrefix,
      prefixDial,
      digits,
      _args18 = arguments,
      _t12;
    return autofill_regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          _ref10 = _args18.length > 4 && _args18[4] !== undefined ? _args18[4] : {}, _ref10$shouldAbort = _ref10.shouldAbort, shouldAbort = _ref10$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref10$shouldAbort;
          value = clean(answer);
          if (value) {
            _context18.n = 1;
            break;
          }
          return _context18.a(2);
        case 1:
          telInput = resolveControl(field, 'input.phone-row__input') || resolveControl(field, 'input[type="tel"]');
          codeCombo = (_field$querySelector3 = field.querySelector) === null || _field$querySelector3 === void 0 ? void 0 : _field$querySelector3.call(field, 'input.cx-select-input[role="combobox"]'); // An international "+<cc> <national>" answer carries its dial code; the country comes from
          // the profile (the phone's own country, else the address). The prefix goes FIRST — ORC formats
          // and validates the typed number against the selected prefix. An unseparated "+16153481055"
          // names no boundary (a greedy read took "1615", so no prefix matched and the number lost its
          // area code): the prefix is picked by the country alone and ITS dial code is cut off the digits.
          national = value;
          dialCode = '';
          match = value.match(/^\+\s*(\d{1,4})[\s).-]+(.*)$/);
          if (match) {
            dialCode = match[1];
            national = clean(match[2]) || value;
          }
          prefix = '';
          if (!(codeCombo && !shouldAbort())) {
            _context18.n = 5;
            break;
          }
          _context18.n = 2;
          return loadProfileAddress();
        case 2:
          profile = _context18.v;
          _context18.n = 3;
          return selectPhonePrefixOption(codeCombo, {
            country: profile.phoneCountry || profile.country,
            dialCode: dialCode
          }, shouldAbort);
        case 3:
          _t12 = _context18.v;
          if (_t12) {
            _context18.n = 4;
            break;
          }
          _t12 = '';
        case 4:
          prefix = _t12;
        case 5:
          if (!match && /^\+\d+$/.test(value.replace(/[\s().-]/g, ''))) {
            shownPrefix = ((_ref11 = codeCombo || ((_field$querySelector4 = field.querySelector) === null || _field$querySelector4 === void 0 ? void 0 : _field$querySelector4.call(field, 'input.cx-select-input'))) === null || _ref11 === void 0 ? void 0 : _ref11.value) || '';
            prefixDial = ((_match = (prefix || shownPrefix).match(/^\+(\d{1,4})\b/)) === null || _match === void 0 ? void 0 : _match[1]) || '';
            digits = value.replace(/\D/g, '');
            if (prefixDial && digits.startsWith(prefixDial) && digits.length > prefixDial.length) national = digits.slice(prefixDial.length);
          }
          if (telInput && !shouldAbort()) fillTextInput(telInput, national);
        case 6:
          return _context18.a(2);
      }
    }, _callee18);
  }));
  return function (_x46, _x47, _x48, _x49) {
    return _ref1.apply(this, arguments);
  };
}())], ['combo', (/*#__PURE__*/function () {
  var _ref12 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee19(_fieldId, _question, answer, field) {
    var _ref13,
      _ref13$shouldAbort,
      shouldAbort,
      input,
      _args19 = arguments;
    return autofill_regenerator().w(function (_context19) {
      while (1) switch (_context19.n) {
        case 0:
          _ref13 = _args19.length > 4 && _args19[4] !== undefined ? _args19[4] : {}, _ref13$shouldAbort = _ref13.shouldAbort, shouldAbort = _ref13$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref13$shouldAbort;
          input = resolveControl(field, COMBO_INPUT_SELECTOR) || resolveControl(field, 'input');
          if (!(!input || answer == null)) {
            _context19.n = 1;
            break;
          }
          return _context19.a(2, undefined);
        case 1:
          return _context19.a(2, selectComboOption(input, String(answer), shouldAbort));
      }
    }, _callee19);
  }));
  return function (_x50, _x51, _x52, _x53) {
    return _ref12.apply(this, arguments);
  };
}())],
// Composite date picker. `field` is the `.datepicker-row`; `answer` is a date
// string. Parse it and select each present Month/Day/Year click-to-select combo.
['date', (/*#__PURE__*/function () {
  var _ref14 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee20(_fieldId, _question, answer, field) {
    var _ref15,
      _ref15$shouldAbort,
      shouldAbort,
      value,
      _args20 = arguments;
    return autofill_regenerator().w(function (_context20) {
      while (1) switch (_context20.n) {
        case 0:
          _ref15 = _args20.length > 4 && _args20[4] !== undefined ? _args20[4] : {}, _ref15$shouldAbort = _ref15.shouldAbort, shouldAbort = _ref15$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref15$shouldAbort;
          value = clean(answer);
          if (!(!value || shouldAbort())) {
            _context20.n = 1;
            break;
          }
          return _context20.a(2);
        case 1:
          _context20.n = 2;
          return fillCompositeDate(field, value, shouldAbort);
        case 2:
          return _context20.a(2);
      }
    }, _callee20);
  }));
  return function (_x54, _x55, _x56, _x57) {
    return _ref14.apply(this, arguments);
  };
}())],
// Composite address cascade. `field` is the address block; `answer` is the
// structured { country, postalCode, city, region2, region1, addressLine1... }.
['address', (/*#__PURE__*/function () {
  var _ref16 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee21(fieldId, _question, answer, field) {
    var _ref17,
      _ref17$shouldAbort,
      shouldAbort,
      get,
      filled,
      country,
      _get,
      before,
      zipControl,
      _i3,
      _arr,
      name,
      el,
      _args21 = arguments;
    return autofill_regenerator().w(function (_context21) {
      while (1) switch (_context21.n) {
        case 0:
          _ref17 = _args21.length > 4 && _args21[4] !== undefined ? _args21[4] : {}, _ref17$shouldAbort = _ref17.shouldAbort, shouldAbort = _ref17$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref17$shouldAbort;
          if (!(!answer || autofill_typeof(answer) !== 'object')) {
            _context21.n = 1;
            break;
          }
          return _context21.a(2);
        case 1:
          if (!(addressFieldId(field) !== fieldId)) {
            _context21.n = 2;
            break;
          }
          return _context21.a(2);
        case 2:
          get = function get(name) {
            var _addressControls$get;
            return (_addressControls$get = addressControls(field).get(name)) !== null && _addressControls$get !== void 0 ? _addressControls$get : null;
          };
          filled = function filled(name) {
            var el = get(name);
            return el && clean(el.value);
          }; // 1) Country first (filters the dependent lists) — only a different (or empty) one. A change makes ORC
          //    rebuild every dependent control, so stop there: the rebuilt set is detected as a new address field
          //    (see ADDRESS_FIELD_ID) and filled by its own turn.
          country = get('country');
          if (!(answer.country && country && !shouldAbort() && clean(country.value).toLowerCase() !== clean(answer.country).toLowerCase())) {
            _context21.n = 4;
            break;
          }
          before = clean(country.value);
          _context21.n = 3;
          return selectComboOption(country, answer.country, shouldAbort);
        case 3:
          if (!(clean((_get = get('country')) === null || _get === void 0 ? void 0 : _get.value) !== before)) {
            _context21.n = 4;
            break;
          }
          return _context21.a(2);
        case 4:
          // 2) ZIP drives the cascade: picking the option matching the city auto-fills
          //    city/county/state. A plain ZIP box (no list, no cascade) takes the ZIP as typed.
          zipControl = get('postalCode');
          if (!(answer.postalCode && zipControl && !shouldAbort())) {
            _context21.n = 7;
            break;
          }
          if (isListControl(zipControl)) {
            _context21.n = 5;
            break;
          }
          fillTextInput(zipControl, clean(answer.postalCode));
          _context21.n = 7;
          break;
        case 5:
          _context21.n = 6;
          return selectPostalCodeOption(zipControl, answer.postalCode, answer.city, shouldAbort);
        case 6:
          if (!_context21.v) {
            _context21.n = 7;
            break;
          }
          _context21.n = 7;
          return waitForPositiveResultWithAbort(function () {
            return filled('city') || filled('region2');
          }, ADDRESS_ZIP_CASCADE_WAIT_MS, shouldAbort);
        case 7:
          if (!(!shouldAbort() && get('city') && !filled('city') && answer.city)) {
            _context21.n = 10;
            break;
          }
          if (!isListControl(get('city'))) {
            _context21.n = 9;
            break;
          }
          _context21.n = 8;
          return selectComboOption(get('city'), answer.city, shouldAbort);
        case 8:
          _context21.n = 10;
          break;
        case 9:
          fillTextInput(get('city'), clean(answer.city));
        case 10:
          if (!(!shouldAbort() && get('region2') && !filled('region2') && (answer.region2 || answer.state))) {
            _context21.n = 11;
            break;
          }
          _context21.n = 11;
          return selectStateOption(get('region2'), answer.region2 || answer.state, shouldAbort);
        case 11:
          if (!(!shouldAbort() && get('region1') && !filled('region1') && answer.region1)) {
            _context21.n = 12;
            break;
          }
          _context21.n = 12;
          return selectCountyOption(get('region1'), answer.region1, shouldAbort);
        case 12:
          _i3 = 0, _arr = ['addressLine1', 'addressLine2', 'addressLine3'];
        case 13:
          if (!(_i3 < _arr.length)) {
            _context21.n = 16;
            break;
          }
          name = _arr[_i3];
          if (!shouldAbort()) {
            _context21.n = 14;
            break;
          }
          return _context21.a(2);
        case 14:
          el = get(name);
          if (el && answer[name]) fillTextInput(el, answer[name]);
        case 15:
          _i3++;
          _context21.n = 13;
          break;
        case 16:
          return _context21.a(2);
      }
    }, _callee21);
  }));
  return function (_x58, _x59, _x60, _x61) {
    return _ref16.apply(this, arguments);
  };
}())], ['pills', (/*#__PURE__*/function () {
  var _ref18 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee22(_fieldId, _question, answer, field) {
    return autofill_regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          if (!(answer == null)) {
            _context22.n = 1;
            break;
          }
          return _context22.a(2, undefined);
        case 1:
          return _context22.a(2, clickPill(field, String(answer)));
      }
    }, _callee22);
  }));
  return function (_x62, _x63, _x64, _x65) {
    return _ref18.apply(this, arguments);
  };
}())], ['pills-multi', (/*#__PURE__*/function () {
  var _ref19 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee23(_fieldId, _question, answer, field) {
    var values, applied, _iterator20, _step20, value, result;
    return autofill_regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          values = Array.isArray(answer) ? answer : [answer];
          applied = [];
          _iterator20 = autofill_createForOfIteratorHelper(values);
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              value = _step20.value;
              result = clickPill(field, String(value));
              if (result) applied.push(result);
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
          return _context23.a(2, applied.length ? applied : undefined);
      }
    }, _callee23);
  }));
  return function (_x66, _x67, _x68, _x69) {
    return _ref19.apply(this, arguments);
  };
}())], ['radio', (/*#__PURE__*/function () {
  var _ref20 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee24(_fieldId, _question, answer, field) {
    var _ref21,
      _ref21$shouldAbort,
      shouldAbort,
      radios,
      labels,
      target,
      i,
      label,
      _args24 = arguments;
    return autofill_regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          _ref21 = _args24.length > 4 && _args24[4] !== undefined ? _args24[4] : {}, _ref21$shouldAbort = _ref21.shouldAbort, shouldAbort = _ref21$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref21$shouldAbort;
          radios = Array.from(field.querySelectorAll('input[type="radio"]'));
          labels = radios.map(function (radio) {
            return getControlLabel(radio);
          }); // Defensive: resolve a raw option index to its label.
          target = clean(resolveOptionByIndex(answer, labels)).toLowerCase();
          if (target) {
            _context24.n = 1;
            break;
          }
          return _context24.a(2);
        case 1:
          i = 0;
        case 2:
          if (!(i < radios.length)) {
            _context24.n = 5;
            break;
          }
          if (!shouldAbort()) {
            _context24.n = 3;
            break;
          }
          return _context24.a(2);
        case 3:
          label = labels[i].toLowerCase();
          if (!(label === target || label.startsWith(target) || String(radios[i].value).toLowerCase() === target)) {
            _context24.n = 4;
            break;
          }
          setChoiceByLabel(radios[i], true);
          return _context24.a(2);
        case 4:
          i += 1;
          _context24.n = 2;
          break;
        case 5:
          return _context24.a(2);
      }
    }, _callee24);
  }));
  return function (_x70, _x71, _x72, _x73) {
    return _ref20.apply(this, arguments);
  };
}())], ['checkbox-single', (/*#__PURE__*/function () {
  var _ref22 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee25(_fieldId, _question, answer, field) {
    var _field$matches2;
    var checkbox, resolved, affirmative;
    return autofill_regenerator().w(function (_context25) {
      while (1) switch (_context25.n) {
        case 0:
          checkbox = (_field$matches2 = field.matches) !== null && _field$matches2 !== void 0 && _field$matches2.call(field, 'input[type="checkbox"]') ? field : field.querySelector('input[type="checkbox"]');
          if (checkbox) {
            _context25.n = 1;
            break;
          }
          return _context25.a(2);
        case 1:
          // Yes/No question (options ['Yes','No']): resolve an index first (0->Yes,
          // 1->No), then check only on an affirmative answer.
          resolved = clean(resolveOptionByIndex(answer, ['Yes', 'No']));
          affirmative = answer === true || /^(yes|true|agree|i agree|checked|on)$/i.test(resolved);
          setChoiceByLabel(checkbox, affirmative);
        case 2:
          return _context25.a(2);
      }
    }, _callee25);
  }));
  return function (_x74, _x75, _x76, _x77) {
    return _ref22.apply(this, arguments);
  };
}())], ['checkbox-group', (/*#__PURE__*/function () {
  var _ref23 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee26(_fieldId, _question, answer, field) {
    var _ref24,
      _ref24$shouldAbort,
      shouldAbort,
      checkboxes,
      labels,
      selected,
      i,
      shouldCheck,
      _args26 = arguments;
    return autofill_regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          _ref24 = _args26.length > 4 && _args26[4] !== undefined ? _args26[4] : {}, _ref24$shouldAbort = _ref24.shouldAbort, shouldAbort = _ref24$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref24$shouldAbort;
          checkboxes = Array.from(field.querySelectorAll('input[type="checkbox"]'));
          labels = checkboxes.map(function (checkbox) {
            return getControlLabel(checkbox);
          }); // Defensive: resolve raw option indices to labels before matching.
          selected = (Array.isArray(answer) ? answer : [answer]).map(function (value) {
            return clean(resolveOptionByIndex(value, labels)).toLowerCase();
          }).filter(Boolean);
          i = 0;
        case 1:
          if (!(i < checkboxes.length)) {
            _context26.n = 4;
            break;
          }
          if (!shouldAbort()) {
            _context26.n = 2;
            break;
          }
          return _context26.a(2);
        case 2:
          shouldCheck = selected.includes(labels[i].toLowerCase()) || selected.includes(String(checkboxes[i].value).toLowerCase());
          setChoiceByLabel(checkboxes[i], shouldCheck);
        case 3:
          i += 1;
          _context26.n = 1;
          break;
        case 4:
          return _context26.a(2);
      }
    }, _callee26);
  }));
  return function (_x78, _x79, _x80, _x81) {
    return _ref23.apply(this, arguments);
  };
}())], ['acknowledge', (/*#__PURE__*/function () {
  var _ref25 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee27(_fieldId, _question, answer, field) {
    var checkbox, shouldCheck;
    return autofill_regenerator().w(function (_context27) {
      while (1) switch (_context27.n) {
        case 0:
          checkbox = resolveControl(field, 'input[type="checkbox"]');
          if (checkbox) {
            _context27.n = 1;
            break;
          }
          return _context27.a(2);
        case 1:
          shouldCheck = answer !== false;
          setChoiceByLabel(checkbox, shouldCheck);
        case 2:
          return _context27.a(2);
      }
    }, _callee27);
  }));
  return function (_x82, _x83, _x84, _x85) {
    return _ref25.apply(this, arguments);
  };
}())],
// One digit per box, through focus + `input` (the segment's KO `valueUpdate`),
// the way typing moves through them. Read live: KO may re-render the boxes.
['verification_code', (/*#__PURE__*/function () {
  var _ref26 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee28(_fieldId, _question, answer, _field) {
    var _ref27,
      _ref27$shouldAbort,
      shouldAbort,
      digits,
      inputs,
      i,
      _args28 = arguments;
    return autofill_regenerator().w(function (_context28) {
      while (1) switch (_context28.n) {
        case 0:
          _ref27 = _args28.length > 4 && _args28[4] !== undefined ? _args28[4] : {}, _ref27$shouldAbort = _ref27.shouldAbort, shouldAbort = _ref27$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref27$shouldAbort;
          digits = String(answer !== null && answer !== void 0 ? answer : '').replace(/\D/g, '');
          inputs = getVisiblePinInputs();
          if (!(!digits || !inputs.length || shouldAbort())) {
            _context28.n = 1;
            break;
          }
          return _context28.a(2);
        case 1:
          if (!(digits.length !== inputs.length)) {
            _context28.n = 2;
            break;
          }
          console.warn("[oraclecloud] verification code has ".concat(digits.length, " digits for ").concat(inputs.length, " boxes \u2014 leaving it for the user"));
          return _context28.a(2);
        case 2:
          i = 0;
        case 3:
          if (!(i < inputs.length)) {
            _context28.n = 6;
            break;
          }
          if (!shouldAbort()) {
            _context28.n = 4;
            break;
          }
          return _context28.a(2);
        case 4:
          fillTextInputWithoutBlur(inputs[i], digits[i]);
          _context28.n = 5;
          return sleep(40);
        case 5:
          i += 1;
          _context28.n = 3;
          break;
        case 6:
          return _context28.a(2);
      }
    }, _callee28);
  }));
  return function (_x86, _x87, _x88, _x89) {
    return _ref26.apply(this, arguments);
  };
}())], ['resume', (/*#__PURE__*/function () {
  var _ref28 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee29(_fieldId, _question, answer, field) {
    var _ref29,
      _ref29$shouldAbort,
      shouldAbort,
      _args29 = arguments;
    return autofill_regenerator().w(function (_context29) {
      while (1) switch (_context29.n) {
        case 0:
          _ref29 = _args29.length > 4 && _args29[4] !== undefined ? _args29[4] : {}, _ref29$shouldAbort = _ref29.shouldAbort, shouldAbort = _ref29$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref29$shouldAbort;
          if (!(shouldAbort() || !answer || autofill_typeof(answer) !== 'object' || answer.type !== 'file')) {
            _context29.n = 1;
            break;
          }
          return _context29.a(2);
        case 1:
          _context29.n = 2;
          return uploadDocument(field, answer, shouldAbort);
        case 2:
          return _context29.a(2);
      }
    }, _callee29);
  }));
  return function (_x90, _x91, _x92, _x93) {
    return _ref28.apply(this, arguments);
  };
}())], ['cover_letter', (/*#__PURE__*/function () {
  var _ref30 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee30(_fieldId, _question, answer, field) {
    var _ref31,
      _ref31$shouldAbort,
      shouldAbort,
      fileAnswer,
      _args30 = arguments;
    return autofill_regenerator().w(function (_context30) {
      while (1) switch (_context30.n) {
        case 0:
          _ref31 = _args30.length > 4 && _args30[4] !== undefined ? _args30[4] : {}, _ref31$shouldAbort = _ref31.shouldAbort, shouldAbort = _ref31$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref31$shouldAbort;
          if (!(shouldAbort() || answer == null)) {
            _context30.n = 1;
            break;
          }
          return _context30.a(2);
        case 1:
          // This slot only exposes a file uploader, so a generated text cover letter
          // is uploaded as a .txt file.
          fileAnswer = typeof answer === 'string' ? createPlainTextFileAnswer(answer, {
            fileName: 'cover-letter.txt'
          }) : answer.type === 'file' ? answer : null;
          if (fileAnswer) {
            _context30.n = 2;
            break;
          }
          return _context30.a(2);
        case 2:
          _context30.n = 3;
          return uploadDocument(field, fileAnswer, shouldAbort);
        case 3:
          return _context30.a(2);
      }
    }, _callee30);
  }));
  return function (_x94, _x95, _x96, _x97) {
    return _ref30.apply(this, arguments);
  };
}())],
// Section-editor base kinds: the 'section-<baseKind>' wrappers re-resolve the LIVE modal
// control (via getRowField's resolveTimelineControl lookup) and pass it directly as `field`.
// They mirror the old fillTimelineControl dispatch (text / combo / combo-best / pills / date).
['oracle-timeline-text', (/*#__PURE__*/function () {
  var _ref32 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee31(_fieldId, _question, answer, field) {
    var value;
    return autofill_regenerator().w(function (_context31) {
      while (1) switch (_context31.n) {
        case 0:
          value = clean(answer);
          if (!(!value || !field)) {
            _context31.n = 1;
            break;
          }
          return _context31.a(2);
        case 1:
          fillTextInput(field, value);
        case 2:
          return _context31.a(2);
      }
    }, _callee31);
  }));
  return function (_x98, _x99, _x100, _x101) {
    return _ref32.apply(this, arguments);
  };
}())], ['oracle-timeline-combo', (/*#__PURE__*/function () {
  var _ref33 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee32(_fieldId, _question, answer, field) {
    var _ref34,
      _ref34$shouldAbort,
      shouldAbort,
      value,
      _args32 = arguments;
    return autofill_regenerator().w(function (_context32) {
      while (1) switch (_context32.n) {
        case 0:
          _ref34 = _args32.length > 4 && _args32[4] !== undefined ? _args32[4] : {}, _ref34$shouldAbort = _ref34.shouldAbort, shouldAbort = _ref34$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref34$shouldAbort;
          value = clean(answer);
          if (!(!value || !field)) {
            _context32.n = 1;
            break;
          }
          return _context32.a(2);
        case 1:
          _context32.n = 2;
          return selectComboOption(field, value, shouldAbort);
        case 2:
          return _context32.a(2);
      }
    }, _callee32);
  }));
  return function (_x102, _x103, _x104, _x105) {
    return _ref33.apply(this, arguments);
  };
}())],
// Country of a work / education entry: the resolved country name, strict (no near-miss).
['oracle-timeline-country', (/*#__PURE__*/function () {
  var _ref35 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee33(_fieldId, _question, answer, field) {
    var _ref36,
      _ref36$shouldAbort,
      shouldAbort,
      value,
      _args33 = arguments;
    return autofill_regenerator().w(function (_context33) {
      while (1) switch (_context33.n) {
        case 0:
          _ref36 = _args33.length > 4 && _args33[4] !== undefined ? _args33[4] : {}, _ref36$shouldAbort = _ref36.shouldAbort, shouldAbort = _ref36$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref36$shouldAbort;
          value = clean(answer);
          if (!(!value || !field)) {
            _context33.n = 1;
            break;
          }
          return _context33.a(2);
        case 1:
          _context33.n = 2;
          return selectCountryComboOption(field, value, shouldAbort);
        case 2:
          return _context33.a(2);
      }
    }, _callee33);
  }));
  return function (_x106, _x107, _x108, _x109) {
    return _ref35.apply(this, arguments);
  };
}())],
// State of a work / education entry: the list may carry codes only ("CT") or full names.
['oracle-timeline-state', (/*#__PURE__*/function () {
  var _ref37 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee34(_fieldId, _question, answer, field) {
    var _ref38,
      _ref38$shouldAbort,
      shouldAbort,
      value,
      _args34 = arguments;
    return autofill_regenerator().w(function (_context34) {
      while (1) switch (_context34.n) {
        case 0:
          _ref38 = _args34.length > 4 && _args34[4] !== undefined ? _args34[4] : {}, _ref38$shouldAbort = _ref38.shouldAbort, shouldAbort = _ref38$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref38$shouldAbort;
          value = clean(answer);
          if (!(!value || !field)) {
            _context34.n = 1;
            break;
          }
          return _context34.a(2);
        case 1:
          _context34.n = 2;
          return selectStateOption(field, value, shouldAbort);
        case 2:
          return _context34.a(2);
      }
    }, _callee34);
  }));
  return function (_x110, _x111, _x112, _x113) {
    return _ref37.apply(this, arguments);
  };
}())], ['oracle-timeline-combo-best', (/*#__PURE__*/function () {
  var _ref39 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee35(_fieldId, _question, answer, field) {
    var _ref40,
      _ref40$shouldAbort,
      shouldAbort,
      value,
      _args35 = arguments;
    return autofill_regenerator().w(function (_context35) {
      while (1) switch (_context35.n) {
        case 0:
          _ref40 = _args35.length > 4 && _args35[4] !== undefined ? _args35[4] : {}, _ref40$shouldAbort = _ref40.shouldAbort, shouldAbort = _ref40$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref40$shouldAbort;
          value = clean(answer);
          if (!(!value || !field)) {
            _context35.n = 1;
            break;
          }
          return _context35.a(2);
        case 1:
          _context35.n = 2;
          return selectComboBestMatch(field, value, shouldAbort);
        case 2:
          return _context35.a(2);
      }
    }, _callee35);
  }));
  return function (_x114, _x115, _x116, _x117) {
    return _ref39.apply(this, arguments);
  };
}())], ['oracle-timeline-pills', (/*#__PURE__*/function () {
  var _ref41 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee36(_fieldId, _question, answer, field) {
    var _ref42,
      _ref42$shouldAbort,
      shouldAbort,
      value,
      _args36 = arguments;
    return autofill_regenerator().w(function (_context36) {
      while (1) switch (_context36.n) {
        case 0:
          _ref42 = _args36.length > 4 && _args36[4] !== undefined ? _args36[4] : {}, _ref42$shouldAbort = _ref42.shouldAbort, shouldAbort = _ref42$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref42$shouldAbort;
          value = clean(answer);
          if (!(!value || !field)) {
            _context36.n = 1;
            break;
          }
          return _context36.a(2);
        case 1:
          _context36.n = 2;
          return selectPillsBestMatch(field, value, shouldAbort);
        case 2:
          return _context36.a(2);
      }
    }, _callee36);
  }));
  return function (_x118, _x119, _x120, _x121) {
    return _ref41.apply(this, arguments);
  };
}())],
// Month/Year cx-select pair sharing the field NAME (delivered as the live fieldId); the
// answer is the raw profile date string, parsed by fillTimelineDate.
['oracle-timeline-date', (/*#__PURE__*/function () {
  var _ref43 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee37(fieldId, _question, answer, field) {
    var _field$closest;
    var _ref44,
      _ref44$shouldAbort,
      shouldAbort,
      value,
      form,
      _args37 = arguments;
    return autofill_regenerator().w(function (_context37) {
      while (1) switch (_context37.n) {
        case 0:
          _ref44 = _args37.length > 4 && _args37[4] !== undefined ? _args37[4] : {}, _ref44$shouldAbort = _ref44.shouldAbort, shouldAbort = _ref44$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref44$shouldAbort;
          value = clean(answer);
          form = field === null || field === void 0 || (_field$closest = field.closest) === null || _field$closest === void 0 ? void 0 : _field$closest.call(field, TIMELINE_FORM_SELECTOR);
          if (!(!value || !form)) {
            _context37.n = 1;
            break;
          }
          return _context37.a(2);
        case 1:
          _context37.n = 2;
          return fillTimelineDate(form, fieldId, value, shouldAbort);
        case 2:
          return _context37.a(2);
      }
    }, _callee37);
  }));
  return function (_x122, _x123, _x124, _x125) {
    return _ref43.apply(this, arguments);
  };
}())], ['skills', (/*#__PURE__*/function () {
  var _ref45 = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee38(_fieldId, _question, answer, _field) {
    var _ref46,
      _ref46$shouldAbort,
      shouldAbort,
      names,
      _args38 = arguments;
    return autofill_regenerator().w(function (_context38) {
      while (1) switch (_context38.n) {
        case 0:
          _ref46 = _args38.length > 4 && _args38[4] !== undefined ? _args38[4] : {}, _ref46$shouldAbort = _ref46.shouldAbort, shouldAbort = _ref46$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref46$shouldAbort;
          names = parseSkillList(answer); // The skill modal has one field (`name="skills"`, label "Skill") — plain text
          // on some sites, a searchable combo on others; `combo-or-text` handles both.
          _context38.n = 1;
          return fillTimelineEntries(names, 'skills', function (name) {
            return [{
              name: 'skills',
              kind: 'combo-or-text',
              value: name
            }];
          }, shouldAbort);
        case 1:
          return _context38.a(2);
      }
    }, _callee38);
  }));
  return function (_x126, _x127, _x128, _x129) {
    return _ref45.apply(this, arguments);
  };
}())]]);

// The edit form container (holds fields + the Save/Cancel footer). Two ORC
// variants: `standard-apply-flow-timeline-form` and `standard-apply-flow-profile-item`.
var TIMELINE_FORM_SELECTOR = '.standard-apply-flow-timeline-form, .standard-apply-flow-profile-item';
var TIMELINE_MODAL_WAIT_MS = 8000;

// The country an entry's location names, else the profile's own country (a "Remote" role).
function resolveEntryCountry(_x130) {
  return _resolveEntryCountry.apply(this, arguments);
} // Work entry State / City (required on some tenants): the entry's own location, else — for a
// "Remote" or blank role — where the candidate worked from, the profile's home. A real place with
// no state part ("Bengaluru, India") leaves State empty rather than borrowing the home state.
function _resolveEntryCountry() {
  _resolveEntryCountry = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee51(entry) {
    var profile;
    return autofill_regenerator().w(function (_context51) {
      while (1) switch (_context51.n) {
        case 0:
          _context51.n = 1;
          return loadProfileAddress();
        case 1:
          profile = _context51.v;
          return _context51.a(2, resolveCountryName(entry === null || entry === void 0 ? void 0 : entry.location, profile.country || profile.phoneCountry));
      }
    }, _callee51);
  }));
  return _resolveEntryCountry.apply(this, arguments);
}
function resolveWorkLocationPart(_x131, _x132) {
  return _resolveWorkLocationPart.apply(this, arguments);
} // Education entry State / City: the entry's own location only; otherwise the AI fallback names
// where the school is (aiContextPairs below), never the candidate's home.
function _resolveWorkLocationPart() {
  _resolveWorkLocationPart = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee52(entry, part) {
    var parsed, profile;
    return autofill_regenerator().w(function (_context52) {
      while (1) switch (_context52.n) {
        case 0:
          parsed = parseLocationParts(entry === null || entry === void 0 ? void 0 : entry.location);
          if (!parsed[part]) {
            _context52.n = 1;
            break;
          }
          return _context52.a(2, parsed[part]);
        case 1:
          if (!parsed.place) {
            _context52.n = 2;
            break;
          }
          return _context52.a(2, null);
        case 2:
          _context52.n = 3;
          return loadProfileAddress();
        case 3:
          profile = _context52.v;
          return _context52.a(2, profile[part] || null);
      }
    }, _callee52);
  }));
  return _resolveWorkLocationPart.apply(this, arguments);
}
function resolveEducationLocationPart(entry, part) {
  return parseLocationParts(entry === null || entry === void 0 ? void 0 : entry.location)[part] || null;
}
var PROFILE_SECTION_TITLE_RE = {
  work: /\b(experience|work)\b/i,
  education: /education/i,
  skills: /\bskills?\b/i
};

// The section block for a profile-item section (work/education/skills), ignoring
// visibility. Timeline variant: the shared work-and-education block. Tile/skill
// variants: a tile block matched by title, or the dedicated `--skill` block.
function sectionBlockFor(kind) {
  if (kind === 'work' || kind === 'education') {
    var timelineAdd = document.querySelector(kind === 'work' ? '.timeline-work-add-button' : '.timeline-education-add-button');
    if (timelineAdd) return timelineAdd.closest('.apply-flow-block');
  }
  if (kind === 'skills') {
    var skillBlock = document.querySelector('.apply-flow-block--skill');
    if (skillBlock) return skillBlock;
  }
  var titleRe = PROFILE_SECTION_TITLE_RE[kind];
  return Array.from(document.querySelectorAll('.apply-flow-block--tile-profile-items, .apply-flow-block--unique-tile-profile-items, .apply-flow-block--skill')).find(function (b) {
    var _b$querySelector;
    return titleRe.test(clean((_b$querySelector = b.querySelector('.apply-flow-block__title')) === null || _b$querySelector === void 0 ? void 0 : _b$querySelector.textContent));
  }) || null;
}

// The VISIBLE section block (or null). Used for DETECTION: stable across the
// step regardless of modal state, and hidden on other steps of a multi-step form.
function findProfileSectionBlock(kind) {
  var block = sectionBlockFor(kind);
  return block && isVisible(block) ? block : null;
}

// Locate the "Add" control for a section (timeline add-button or tile add).
function findProfileItemAddControl(kind) {
  if (kind === 'work') {
    var b = document.querySelector('.timeline-work-add-button');
    if (b) return b;
  }
  if (kind === 'education') {
    var _b = document.querySelector('.timeline-education-add-button');
    if (_b) return _b;
  }
  var block = sectionBlockFor(kind);
  if (!block) return null;
  return block.querySelector('.apply-flow-profile-item-tile__new-tile') || Array.from(block.querySelectorAll('button')).find(function (b) {
    return /\badd\b/i.test(clean(b.textContent || b.getAttribute('aria-label')));
  }) || null;
}

// The open edit form: a visible container that holds inputs AND a Save button.
function getTimelineForm() {
  return Array.from(document.querySelectorAll(TIMELINE_FORM_SELECTOR)).find(function (el) {
    return isVisible(el) && el.querySelector('input, textarea') && el.querySelector('.save-btn');
  }) || null;
}

// Find all existing committed entries for a section. Tile variant: every
// `.apply-flow-profile-item-tile` in the (kind-specific) block. Timeline variant:
// work + education share one block, so filter `.beautiful-timeline-item` by the
// kind in its class ("...experiences..." vs "...education..."). Skills are tiles
// only: on a page with a timeline Work/Education block, an EMPTY skills block used
// to fall through to every timeline item on the page, and the skills fill deleted
// the work and education entries.
//
// While an entry editor is open the committed list cannot be read: the timeline
// layout REMOVES it from the DOM, the tile layout inserts a placeholder tile for the
// entry being edited ("Unnamed Job Title — Fields to fix") or hides the list. The
// section iterator counts committed entries to tell "entry N is open" from "entry N
// is saved", so a live read mid-edit made it take a placeholder for a saved entry
// (Nike skipped, "Entry 1 did not settle") or see 0 entries and keep pressing Add —
// each press committing the open editor as an empty "Unnamed Job Title" — until
// "Could not open entry 2". While an editor is open, the list last read without one
// answers.
var lastCommittedItems = {
  work: [],
  education: []
};
function findAllExistingProfileItems(block, kind) {
  var remembered = Object.hasOwn(lastCommittedItems, kind);
  if (remembered && getTimelineForm()) return lastCommittedItems[kind];
  var scope = block || document;
  var kindRe = kind === 'work' ? /experience/i : kind === 'education' ? /education/i : null;
  var tiles = Array.from(scope.querySelectorAll('.apply-flow-profile-item-tile:not(.apply-flow-profile-item-tile__new-tile)'));
  var items = tiles.length || !kindRe ? tiles : Array.from(scope.querySelectorAll('.beautiful-timeline-item')).filter(function (item) {
    return kindRe.test(item.className);
  });
  if (remembered) lastCommittedItems[kind] = items;
  return items;
}
function findProfileItemDeleteButton(item) {
  return item.querySelector('.apply-flow-profile-item-tile__delete-icon, .beautiful-timeline-item__delete-icon') || item.querySelector('[class*="delete" i], [aria-label*="remove" i], [aria-label*="delete" i]');
}
function findDeletionConfirmButton() {
  return Array.from(document.querySelectorAll('.app-dialog button, oj-dialog button, [role="dialog"] button')).find(function (button) {
    return isVisible(button) && /^(delete|remove|yes|confirm|ok)\b/i.test(clean(button.textContent));
  }) || null;
}

// Reveal (hover-gated timeline entries need it) and return an item's delete control.
function resolveProfileItemDeleteButton(_x133, _x134) {
  return _resolveProfileItemDeleteButton.apply(this, arguments);
}
function _resolveProfileItemDeleteButton() {
  _resolveProfileItemDeleteButton = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee53(item, shouldAbort) {
    var deleteBtn, _i4, _arr2, type;
    return autofill_regenerator().w(function (_context53) {
      while (1) switch (_context53.n) {
        case 0:
          deleteBtn = findProfileItemDeleteButton(item);
          if (!deleteBtn) {
            _context53.n = 1;
            break;
          }
          return _context53.a(2, deleteBtn);
        case 1:
          for (_i4 = 0, _arr2 = ['mouseover', 'mouseenter', 'mousemove']; _i4 < _arr2.length; _i4++) {
            type = _arr2[_i4];
            item.dispatchEvent(new MouseEvent(type, {
              bubbles: true
            }));
          }
          return _context53.a(2, waitForPositiveResultWithAbort(function () {
            return findProfileItemDeleteButton(item);
          }, 1000, shouldAbort));
      }
    }, _callee53);
  }));
  return _resolveProfileItemDeleteButton.apply(this, arguments);
}
var SAVED_ITEMS_STABLE_READS = 3;
var SAVED_ITEMS_READ_INTERVAL_MS = 700;
var SAVED_ITEMS_MAX_WAIT_MS = 5000;
function waitForStableProfileItemCount(_x135, _x136) {
  return _waitForStableProfileItemCount.apply(this, arguments);
} // Remove all existing entries for a section before adding fresh ones (so a
// re-autofill / pre-imported profile doesn't stack duplicates).
//
// ORC removes a tile ~1s AFTER its delete is clicked (async/server-backed), so
// deleting one-at-a-time (click → wait for it to vanish → next) costs ~1s PER
// entry. Instead FIRE ALL the deletes up front: the tiles stay in the DOM during
// that ~1s window so their delete controls remain valid, the removals overlap,
// and a whole list drains in ~one removal window instead of N of them. Configs
// that confirm via a modal dialog can't be batched (the dialog blocks the next
// click), so the first delete probes for a dialog and falls back to sequential.
function _waitForStableProfileItemCount() {
  _waitForStableProfileItemCount = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee54(block, kind) {
    var shouldAbort,
      deadline,
      lastCount,
      stableReads,
      count,
      _args54 = arguments;
    return autofill_regenerator().w(function (_context54) {
      while (1) switch (_context54.n) {
        case 0:
          shouldAbort = _args54.length > 2 && _args54[2] !== undefined ? _args54[2] : autofill_NEVER_ABORT;
          deadline = Date.now() + SAVED_ITEMS_MAX_WAIT_MS;
          lastCount = findAllExistingProfileItems(block, kind).length;
          stableReads = 1;
        case 1:
          if (!(stableReads < SAVED_ITEMS_STABLE_READS && Date.now() < deadline && !shouldAbort())) {
            _context54.n = 3;
            break;
          }
          _context54.n = 2;
          return sleep(SAVED_ITEMS_READ_INTERVAL_MS);
        case 2:
          count = findAllExistingProfileItems(block, kind).length;
          stableReads = count === lastCount ? stableReads + 1 : 1;
          lastCount = count;
          _context54.n = 1;
          break;
        case 3:
          return _context54.a(2);
      }
    }, _callee54);
  }));
  return _waitForStableProfileItemCount.apply(this, arguments);
}
function clearExistingProfileItems(_x137, _x138) {
  return _clearExistingProfileItems.apply(this, arguments);
} // Fill a profile array into a modal-based editor (work or education): clear any
// existing entries first, then for each entry open the Add modal, fill its
// fields, commit via the Save button (".save-btn") and wait for the modal to close.
function _clearExistingProfileItems() {
  _clearExistingProfileItems = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee55(block, kind) {
    var shouldAbort,
      openEditor,
      cancelButton,
      round,
      items,
      usesConfirmDialog,
      _loop,
      _ret,
      i,
      drained,
      _args56 = arguments;
    return autofill_regenerator().w(function (_context56) {
      while (1) switch (_context56.n) {
        case 0:
          shouldAbort = _args56.length > 2 && _args56[2] !== undefined ? _args56[2] : autofill_NEVER_ABORT;
          // An editor left open (an earlier run, a half-finished entry) hides the committed list and the
          // Add control; cancel it first so the entries can be read, deleted and added again.
          openEditor = getTimelineForm();
          cancelButton = openEditor === null || openEditor === void 0 ? void 0 : openEditor.querySelector('.cancel-btn');
          if (!(cancelButton && !shouldAbort())) {
            _context56.n = 1;
            break;
          }
          cancelButton.click();
          _context56.n = 1;
          return waitForPositiveResultWithAbort(function () {
            return getTimelineForm() ? null : true;
          }, TIMELINE_MODAL_WAIT_MS, shouldAbort);
        case 1:
          _context56.n = 2;
          return waitForStableProfileItemCount(block, kind, shouldAbort);
        case 2:
          round = 0;
        case 3:
          if (!(round < 10)) {
            _context56.n = 13;
            break;
          }
          if (!shouldAbort()) {
            _context56.n = 4;
            break;
          }
          return _context56.a(2);
        case 4:
          items = findAllExistingProfileItems(block, kind);
          if (items.length) {
            _context56.n = 5;
            break;
          }
          return _context56.a(2);
        case 5:
          usesConfirmDialog = false;
          _loop = /*#__PURE__*/autofill_regenerator().m(function _loop() {
            var item, deleteBtn, outcome, confirm;
            return autofill_regenerator().w(function (_context55) {
              while (1) switch (_context55.n) {
                case 0:
                  if (!shouldAbort()) {
                    _context55.n = 1;
                    break;
                  }
                  return _context55.a(2, {
                    v: void 0
                  });
                case 1:
                  item = items[i];
                  if (item.isConnected) {
                    _context55.n = 2;
                    break;
                  }
                  return _context55.a(2, 0);
                case 2:
                  item.scrollIntoView({
                    block: 'center'
                  });
                  _context55.n = 3;
                  return resolveProfileItemDeleteButton(item, shouldAbort);
                case 3:
                  deleteBtn = _context55.v;
                  if (deleteBtn) {
                    _context55.n = 4;
                    break;
                  }
                  return _context55.a(2, 0);
                case 4:
                  deleteBtn.click();
                  if (!(i === 0)) {
                    _context55.n = 7;
                    break;
                  }
                  _context55.n = 5;
                  return waitForPositiveResultWithAbort(function () {
                    return !item.isConnected ? 'removed' : findDeletionConfirmButton();
                  }, 400, shouldAbort);
                case 5:
                  outcome = _context55.v;
                  if (!(outcome && outcome !== 'removed')) {
                    _context55.n = 6;
                    break;
                  }
                  usesConfirmDialog = true;
                  outcome.click();
                  _context55.n = 6;
                  return waitForPositiveResultWithAbort(function () {
                    return item.isConnected ? null : true;
                  }, 5000, shouldAbort);
                case 6:
                  _context55.n = 11;
                  break;
                case 7:
                  if (!usesConfirmDialog) {
                    _context55.n = 10;
                    break;
                  }
                  _context55.n = 8;
                  return waitForPositiveResultWithAbort(function () {
                    return !item.isConnected ? 'removed' : findDeletionConfirmButton();
                  }, 2000, shouldAbort);
                case 8:
                  confirm = _context55.v;
                  if (!(confirm && confirm !== 'removed')) {
                    _context55.n = 9;
                    break;
                  }
                  confirm.click();
                  _context55.n = 9;
                  return waitForPositiveResultWithAbort(function () {
                    return item.isConnected ? null : true;
                  }, 5000, shouldAbort);
                case 9:
                  _context55.n = 11;
                  break;
                case 10:
                  _context55.n = 11;
                  return sleep(30);
                case 11:
                  return _context55.a(2);
              }
            }, _loop);
          });
          i = 0;
        case 6:
          if (!(i < items.length)) {
            _context56.n = 10;
            break;
          }
          return _context56.d(autofill_regeneratorValues(_loop()), 7);
        case 7:
          _ret = _context56.v;
          if (!(_ret === 0)) {
            _context56.n = 8;
            break;
          }
          return _context56.a(3, 9);
        case 8:
          if (!_ret) {
            _context56.n = 9;
            break;
          }
          return _context56.a(2, _ret.v);
        case 9:
          i += 1;
          _context56.n = 6;
          break;
        case 10:
          _context56.n = 11;
          return waitForPositiveResultWithAbort(function () {
            return findAllExistingProfileItems(block, kind).length ? null : true;
          }, 8000, shouldAbort);
        case 11:
          drained = _context56.v;
          if (!drained) {
            _context56.n = 12;
            break;
          }
          return _context56.a(2);
        case 12:
          round += 1;
          _context56.n = 3;
          break;
        case 13:
          return _context56.a(2);
      }
    }, _callee55);
  }));
  return _clearExistingProfileItems.apply(this, arguments);
}
function fillTimelineEntries(_x139, _x140, _x141) {
  return _fillTimelineEntries.apply(this, arguments);
} // Find the pills group for a timeline field. ORC wraps each control in a
// `.input-row__control-container[data-qa="<name>"]`, and the pills `ul` carries
// the question as `aria-label`. Match on the data-qa name first, then the label.
function _fillTimelineEntries() {
  _fillTimelineEntries = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee56(entries, kind, mapEntry) {
    var _findProfileItemAddCo;
    var shouldAbort,
      block,
      _iterator23,
      _step23,
      _loop2,
      _ret2,
      _args58 = arguments,
      _t20;
    return autofill_regenerator().w(function (_context58) {
      while (1) switch (_context58.p = _context58.n) {
        case 0:
          shouldAbort = _args58.length > 3 && _args58[3] !== undefined ? _args58[3] : autofill_NEVER_ABORT;
          if (entries.length) {
            _context58.n = 1;
            break;
          }
          return _context58.a(2);
        case 1:
          block = ((_findProfileItemAddCo = findProfileItemAddControl(kind)) === null || _findProfileItemAddCo === void 0 ? void 0 : _findProfileItemAddCo.closest('.apply-flow-block')) || document;
          _context58.n = 2;
          return clearExistingProfileItems(block, kind, shouldAbort);
        case 2:
          _iterator23 = autofill_createForOfIteratorHelper(entries.slice(0, 30));
          _context58.p = 3;
          _loop2 = /*#__PURE__*/autofill_regenerator().m(function _loop2() {
            var entry, addButton, form, _iterator24, _step24, fieldSpec, value, saveButton, _t18, _t19;
            return autofill_regenerator().w(function (_context57) {
              while (1) switch (_context57.p = _context57.n) {
                case 0:
                  entry = _step23.value;
                  if (!shouldAbort()) {
                    _context57.n = 1;
                    break;
                  }
                  return _context57.a(2, {
                    v: void 0
                  });
                case 1:
                  addButton = findProfileItemAddControl(kind);
                  if (addButton) {
                    _context57.n = 2;
                    break;
                  }
                  return _context57.a(2, {
                    v: void 0
                  });
                case 2:
                  addButton.scrollIntoView({
                    block: 'center'
                  });
                  addButton.click();
                  _context57.n = 3;
                  return waitForPositiveResultWithAbort(getTimelineForm, TIMELINE_MODAL_WAIT_MS, shouldAbort);
                case 3:
                  form = _context57.v;
                  if (!(!form || shouldAbort())) {
                    _context57.n = 4;
                    break;
                  }
                  return _context57.a(2, {
                    v: void 0
                  });
                case 4:
                  _iterator24 = autofill_createForOfIteratorHelper(mapEntry(entry));
                  _context57.p = 5;
                  _iterator24.s();
                case 6:
                  if ((_step24 = _iterator24.n()).done) {
                    _context57.n = 14;
                    break;
                  }
                  fieldSpec = _step24.value;
                  if (!shouldAbort()) {
                    _context57.n = 7;
                    break;
                  }
                  return _context57.a(3, 14);
                case 7:
                  value = clean(fieldSpec.value);
                  if (value) {
                    _context57.n = 8;
                    break;
                  }
                  return _context57.a(3, 13);
                case 8:
                  _context57.p = 8;
                  if (!(fieldSpec.kind === 'date')) {
                    _context57.n = 10;
                    break;
                  }
                  _context57.n = 9;
                  return fillTimelineDate(form, fieldSpec.name, value, shouldAbort);
                case 9:
                  return _context57.a(3, 13);
                case 10:
                  _context57.n = 11;
                  return fillTimelineControl(form, fieldSpec, value, shouldAbort);
                case 11:
                  _context57.n = 13;
                  break;
                case 12:
                  _context57.p = 12;
                  _t18 = _context57.v;
                case 13:
                  _context57.n = 6;
                  break;
                case 14:
                  _context57.n = 16;
                  break;
                case 15:
                  _context57.p = 15;
                  _t19 = _context57.v;
                  _iterator24.e(_t19);
                case 16:
                  _context57.p = 16;
                  _iterator24.f();
                  return _context57.f(16);
                case 17:
                  if (!shouldAbort()) {
                    _context57.n = 18;
                    break;
                  }
                  return _context57.a(2, {
                    v: void 0
                  });
                case 18:
                  // Commit the entry and wait for the modal to close before the next one.
                  saveButton = form.querySelector('.save-btn') || form.querySelector('.app-dialog__footer-button.save-btn');
                  if (saveButton) {
                    _context57.n = 19;
                    break;
                  }
                  return _context57.a(2, {
                    v: void 0
                  });
                case 19:
                  _context57.n = 20;
                  return waitForPositiveResultWithAbort(function () {
                    return saveButton.disabled || saveButton.getAttribute('aria-disabled') === 'true' ? null : true;
                  }, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort);
                case 20:
                  saveButton.click();
                  _context57.n = 21;
                  return waitForPositiveResultWithAbort(function () {
                    return getTimelineForm() ? null : true;
                  }, TIMELINE_MODAL_WAIT_MS, shouldAbort);
                case 21:
                  _context57.n = 22;
                  return sleep(150);
                case 22:
                  return _context57.a(2);
              }
            }, _loop2, null, [[8, 12], [5, 15, 16, 17]]);
          });
          _iterator23.s();
        case 4:
          if ((_step23 = _iterator23.n()).done) {
            _context58.n = 7;
            break;
          }
          return _context58.d(autofill_regeneratorValues(_loop2()), 5);
        case 5:
          _ret2 = _context58.v;
          if (!_ret2) {
            _context58.n = 6;
            break;
          }
          return _context58.a(2, _ret2.v);
        case 6:
          _context58.n = 4;
          break;
        case 7:
          _context58.n = 9;
          break;
        case 8:
          _context58.p = 8;
          _t20 = _context58.v;
          _iterator23.e(_t20);
        case 9:
          _context58.p = 9;
          _iterator23.f();
          return _context58.f(9);
        case 10:
          return _context58.a(2);
      }
    }, _callee56, null, [[3, 8, 9, 10]]);
  }));
  return _fillTimelineEntries.apply(this, arguments);
}
function findTimelinePills(form, name, labelMatch) {
  var containers = Array.from(form.querySelectorAll('ul.cx-select-pills-container'));
  if (!containers.length) return null;
  return containers.find(function (ul) {
    var _ul$closest;
    if (name && ((_ul$closest = ul.closest('[data-qa]')) === null || _ul$closest === void 0 ? void 0 : _ul$closest.getAttribute('data-qa')) === name) return true;
    if (labelMatch && labelMatch.test(clean(ul.getAttribute('aria-label')))) return true;
    return false;
  }) || null;
}

// Resolve a timeline/profile-item field to its actual widget. ORC renders the
// SAME logical field (e.g. Degree) as different widgets across configs — a plain
// text input, a cx-select combo, OR a pills group — so locate whichever is
// present (by `name`, then by `labelMatch`) and report how to fill it.
function resolveTimelineControl(form, _ref47) {
  var name = _ref47.name,
    labelMatch = _ref47.labelMatch;
  var pills = findTimelinePills(form, name, labelMatch);
  if (pills) return {
    widget: 'pills',
    el: pills
  };
  var combo = name && form.querySelector("input.cx-select-input[name=\"".concat(name, "\"]"));
  if (!combo && labelMatch) {
    combo = Array.from(form.querySelectorAll('input.cx-select-input[role="combobox"]')).find(function (c) {
      return labelMatch.test(getControlLabel(c));
    });
  }
  if (combo) return {
    widget: 'combo',
    el: combo
  };
  var input = name && form.querySelector("input[name=\"".concat(name, "\"], textarea[name=\"").concat(name, "\"]"));
  if (!input && labelMatch) {
    input = Array.from(form.querySelectorAll('input, textarea')).find(function (el) {
      return labelMatch.test(getControlLabel(el));
    });
  }
  if (input) return {
    widget: 'text',
    el: input
  };
  return null;
}

// Fill one timeline field, dispatching on the resolved widget rather than the
// declared field-spec kind — the same logical field can be a text input, combo,
// or pills group depending on the site config. Pills are always an enumerable
// set, so they always use best-match (a superset of exact match).
function fillTimelineControl(_x142, _x143, _x144) {
  return _fillTimelineControl.apply(this, arguments);
} // The month/year date combos are NOT the type-to-filter cx-selects the generic
// `selectComboOption` handles: they only open via the dropdown-ARROW (input
// mousedown does nothing) and typing does NOT filter the list — they're
// click-to-select pickers. So `selectComboOption` never opened them, found no
// options, and left uncommitted text that the React state ignored (the date
// silently reverted on save). Open via the arrow and click the exact option.
// Read options STRICTLY from this input's OWN listbox (aria-controls), never the
// global `.cx-select__list` fallback: the date combos fire back-to-back, so when
// we open the end combo the just-closed start combo's `.cx-select__list` can
// still linger in the DOM. The shared `getComboListOptions` fallback would then
// return that stale listbox, the target option wouldn't be in it, and the date
// would be silently skipped (the work-history end-date regression).
function _fillTimelineControl() {
  _fillTimelineControl = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee57(form, fieldSpec, value) {
    var shouldAbort,
      resolved,
      widget,
      el,
      _args59 = arguments;
    return autofill_regenerator().w(function (_context59) {
      while (1) switch (_context59.n) {
        case 0:
          shouldAbort = _args59.length > 3 && _args59[3] !== undefined ? _args59[3] : autofill_NEVER_ABORT;
          resolved = resolveTimelineControl(form, fieldSpec);
          if (resolved) {
            _context59.n = 1;
            break;
          }
          return _context59.a(2);
        case 1:
          widget = resolved.widget, el = resolved.el;
          if (!(widget === 'pills')) {
            _context59.n = 3;
            break;
          }
          _context59.n = 2;
          return selectPillsBestMatch(el, value, shouldAbort);
        case 2:
          return _context59.a(2);
        case 3:
          if (!(widget === 'combo')) {
            _context59.n = 7;
            break;
          }
          if (!(fieldSpec.kind === 'combo-best' || fieldSpec.kind === 'combo-or-text')) {
            _context59.n = 5;
            break;
          }
          _context59.n = 4;
          return selectComboBestMatch(el, value, shouldAbort);
        case 4:
          _context59.n = 6;
          break;
        case 5:
          _context59.n = 6;
          return selectComboOption(el, value, shouldAbort);
        case 6:
          return _context59.a(2);
        case 7:
          fillTextInput(el, value); // text / textarea
        case 8:
          return _context59.a(2);
      }
    }, _callee57);
  }));
  return _fillTimelineControl.apply(this, arguments);
}
function getOwnComboOptions(input) {
  var listboxId = input.getAttribute('aria-controls');
  var listbox = listboxId && document.getElementById(listboxId);
  if (!listbox) return null;
  var cells = listbox.querySelectorAll('[role="gridcell"], [role="option"]');
  if (!cells.length) return null;
  return Array.from(cells).map(function (cell) {
    var _cell$querySelector2;
    return {
      el: cell,
      text: clean(((_cell$querySelector2 = cell.querySelector('.cx-select__list-item--content')) === null || _cell$querySelector2 === void 0 ? void 0 : _cell$querySelector2.textContent) || cell.textContent)
    };
  }).filter(function (option) {
    return option.text;
  });
}
function selectDateComboOption(_x145, _x146) {
  return _selectDateComboOption.apply(this, arguments);
} // Date is a month-name + year pair of cx-select combos sharing the field name,
// distinguished by an id prefix ("month-<name>" / "year-<name>").
function _selectDateComboOption() {
  _selectDateComboOption = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee58(input, displayValue) {
    var shouldAbort,
      target,
      arrow,
      options,
      lowered,
      isNumeric,
      matches,
      chosen,
      listbox,
      scrolls,
      _args60 = arguments;
    return autofill_regenerator().w(function (_context60) {
      while (1) switch (_context60.n) {
        case 0:
          shouldAbort = _args60.length > 2 && _args60[2] !== undefined ? _args60[2] : autofill_NEVER_ABORT;
          target = clean(displayValue);
          if (!(!input || !target || shouldAbort())) {
            _context60.n = 1;
            break;
          }
          return _context60.a(2);
        case 1:
          input.scrollIntoView({
            block: 'center'
          });
          input.focus();
          arrow = getComboDropdownArrow(input);
          if (arrow) arrow.click();else {
            triggerMouseEvent(input, 'mousedown');
            triggerMouseEvent(input, 'mouseup');
          }

          // Wait for THIS combo to actually expand and populate its own listbox.
          _context60.n = 2;
          return waitForPositiveResultWithAbort(function () {
            return input.getAttribute('aria-expanded') === 'true' ? getOwnComboOptions(input) : null;
          }, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort);
        case 2:
          options = _context60.v;
          if (!(!options || shouldAbort())) {
            _context60.n = 3;
            break;
          }
          closeComboDropdown(input);
          return _context60.a(2);
        case 3:
          lowered = target.toLowerCase();
          isNumeric = /^\d+$/.test(target); // For numeric combos (day/year) match by numeric value too, so a padded "01"
          // option is found for a "1" target (and vice versa).
          matches = function matches(opts) {
            return opts.find(function (o) {
              return o.text.toLowerCase() === lowered;
            }) || opts.find(function (o) {
              return o.text.toLowerCase().startsWith(lowered);
            }) || (isNumeric ? opts.find(function (o) {
              return /^\d+$/.test(o.text.trim()) && Number(o.text.trim()) === Number(target);
            }) : undefined);
          };
          chosen = matches(options); // Defensive: if a config virtualizes the (long) year list, scroll to load
          // more rows until the target appears. The observed list is fully rendered.
          listbox = document.getElementById(input.getAttribute('aria-controls'));
          scrolls = 0;
        case 4:
          if (!(!chosen && listbox && listbox.scrollHeight > listbox.clientHeight + 4 && scrolls < 40 && !shouldAbort())) {
            _context60.n = 6;
            break;
          }
          listbox.scrollTop += listbox.clientHeight;
          _context60.n = 5;
          return sleep(60);
        case 5:
          chosen = matches(getOwnComboOptions(input) || []);
          scrolls += 1;
          _context60.n = 4;
          break;
        case 6:
          if (chosen) {
            _context60.n = 7;
            break;
          }
          closeComboDropdown(input);
          return _context60.a(2);
        case 7:
          triggerMouseEvent(chosen.el, 'mousedown');
          triggerMouseEvent(chosen.el, 'mouseup');
          chosen.el.click();
          // Wait for the dropdown to actually collapse before the next combo opens, so
          // the next read can't catch this listbox lingering.
          _context60.n = 8;
          return waitForPositiveResultWithAbort(function () {
            return input.getAttribute('aria-expanded') === 'true' ? null : true;
          }, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort);
        case 8:
          _context60.n = 9;
          return sleep(80);
        case 9:
          return _context60.a(2);
      }
    }, _callee58);
  }));
  return _selectDateComboOption.apply(this, arguments);
}
function fillTimelineDate(_x147, _x148, _x149) {
  return _fillTimelineDate.apply(this, arguments);
} // Standalone composite date picker (e.g. "Earliest Available Date"): a
// Month + optional Day + Year row of click-to-select cx-select combos sharing
// the field name, distinguished by an id prefix ("month-"/"day-"/"year-").
// Fill whichever sub-combos are present from the parsed answer.
function _fillTimelineDate() {
  _fillTimelineDate = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee59(form, name, value) {
    var shouldAbort,
      parsed,
      monthInput,
      yearInput,
      monthLabel,
      _args61 = arguments;
    return autofill_regenerator().w(function (_context61) {
      while (1) switch (_context61.n) {
        case 0:
          shouldAbort = _args61.length > 3 && _args61[3] !== undefined ? _args61[3] : autofill_NEVER_ABORT;
          parsed = parseProfileDate(value);
          if (parsed) {
            _context61.n = 1;
            break;
          }
          return _context61.a(2);
        case 1:
          monthInput = form.querySelector("input[name=\"".concat(name, "\"][id^=\"month-\"]"));
          yearInput = form.querySelector("input[name=\"".concat(name, "\"][id^=\"year-\"]"));
          if (!(monthInput && parsed.month)) {
            _context61.n = 2;
            break;
          }
          monthLabel = getMonthDisplay(parsed.month) || String(parsed.month);
          _context61.n = 2;
          return selectDateComboOption(monthInput, monthLabel, shouldAbort);
        case 2:
          if (!(yearInput && parsed.year && !shouldAbort())) {
            _context61.n = 3;
            break;
          }
          _context61.n = 3;
          return selectDateComboOption(yearInput, String(parsed.year), shouldAbort);
        case 3:
          return _context61.a(2);
      }
    }, _callee59);
  }));
  return _fillTimelineDate.apply(this, arguments);
}
function fillCompositeDate(_x150, _x151) {
  return _fillCompositeDate.apply(this, arguments);
} // Click the "Remove" control on a filled attachment slot and wait for the empty
// drop zone (with a fresh file input) to re-render. ORC removes the <input>
// while a file is attached, so a direct re-upload is impossible without this.
function _fillCompositeDate() {
  _fillCompositeDate = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee60(row, value) {
    var shouldAbort,
      parsed,
      monthInput,
      dayInput,
      yearInput,
      _args62 = arguments;
    return autofill_regenerator().w(function (_context62) {
      while (1) switch (_context62.n) {
        case 0:
          shouldAbort = _args62.length > 2 && _args62[2] !== undefined ? _args62[2] : autofill_NEVER_ABORT;
          parsed = parseProfileDate(value);
          if (!(!parsed || !parsed.month && !parsed.day && !parsed.year)) {
            _context62.n = 1;
            break;
          }
          return _context62.a(2);
        case 1:
          monthInput = row.querySelector("".concat(COMBO_INPUT_SELECTOR, "[id^=\"month-\"]"));
          dayInput = row.querySelector("".concat(COMBO_INPUT_SELECTOR, "[id^=\"day-\"]"));
          yearInput = row.querySelector("".concat(COMBO_INPUT_SELECTOR, "[id^=\"year-\"]"));
          if (!(monthInput && parsed.month && !shouldAbort())) {
            _context62.n = 2;
            break;
          }
          _context62.n = 2;
          return selectDateComboOption(monthInput, getMonthDisplay(parsed.month) || String(parsed.month), shouldAbort);
        case 2:
          if (!(dayInput && parsed.day && !shouldAbort())) {
            _context62.n = 3;
            break;
          }
          _context62.n = 3;
          return selectDateComboOption(dayInput, String(Number(parsed.day)), shouldAbort);
        case 3:
          if (!(yearInput && parsed.year && !shouldAbort())) {
            _context62.n = 4;
            break;
          }
          _context62.n = 4;
          return selectDateComboOption(yearInput, String(parsed.year), shouldAbort);
        case 4:
          return _context62.a(2);
      }
    }, _callee60);
  }));
  return _fillCompositeDate.apply(this, arguments);
}
function removeExistingAttachment(_x152) {
  return _removeExistingAttachment.apply(this, arguments);
} // Resolve the file input to upload into, removing any existing attachment first.
function _removeExistingAttachment() {
  _removeExistingAttachment = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee61(container) {
    var shouldAbort,
      removeButton,
      _args63 = arguments;
    return autofill_regenerator().w(function (_context63) {
      while (1) switch (_context63.n) {
        case 0:
          shouldAbort = _args63.length > 1 && _args63[1] !== undefined ? _args63[1] : autofill_NEVER_ABORT;
          removeButton = container.querySelector('[aria-label*="remove" i], [title*="remove" i], [aria-label*="delete" i], [title*="delete" i], button.attachment-upload-button__bottom-button');
          if (removeButton) {
            _context63.n = 1;
            break;
          }
          return _context63.a(2, null);
        case 1:
          removeButton.click();
          return _context63.a(2, waitForPositiveResultWithAbort(function () {
            return documentAlreadyUploaded(container) ? null : container.querySelector('input[type="file"]');
          }, ATTACHMENT_RESET_TIMEOUT_MS, shouldAbort));
      }
    }, _callee61);
  }));
  return _removeExistingAttachment.apply(this, arguments);
}
function prepareUploadInput(_x153) {
  return _prepareUploadInput.apply(this, arguments);
} // Upload a file into an attachment slot, replacing any file it holds. ORC posts the
// file straight into the application draft, but a NEW application's draft only gets
// its id from the first autosave, a few seconds after section 1 opens: an upload
// before that goes to .../recruitingCEJobApplicationDrafts/undefined/child/attachments,
// is refused ("Something went wrong") and the slot drops back to empty. A dropped
// upload is tried again once the draft had time to save; a slot that never keeps the
// file throws, so the field reports an error instead of a false "filled".
function _prepareUploadInput() {
  _prepareUploadInput = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee62(container) {
    var shouldAbort,
      _args64 = arguments;
    return autofill_regenerator().w(function (_context64) {
      while (1) switch (_context64.n) {
        case 0:
          shouldAbort = _args64.length > 1 && _args64[1] !== undefined ? _args64[1] : autofill_NEVER_ABORT;
          if (!documentAlreadyUploaded(container)) {
            _context64.n = 1;
            break;
          }
          return _context64.a(2, removeExistingAttachment(container, shouldAbort));
        case 1:
          return _context64.a(2, resolveControl(container, 'input[type="file"]'));
      }
    }, _callee62);
  }));
  return _prepareUploadInput.apply(this, arguments);
}
function uploadDocument(_x154, _x155) {
  return _uploadDocument.apply(this, arguments);
} // Fill the slot's file input and follow ORC's upload states (waiting → uploading →
// saved → filled): 'uploaded' once the slot shows the file, 'dropped' when it went
// back to waiting after uploading, null when neither happened in time. The class
// change records catch an uploading state too short for the poll to see.
function _uploadDocument() {
  _uploadDocument = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee63(container, fileAnswer) {
    var shouldAbort,
      attempt,
      input,
      outcome,
      _args65 = arguments;
    return autofill_regenerator().w(function (_context65) {
      while (1) switch (_context65.n) {
        case 0:
          shouldAbort = _args65.length > 2 && _args65[2] !== undefined ? _args65[2] : autofill_NEVER_ABORT;
          attempt = 0;
        case 1:
          _context65.n = 2;
          return prepareUploadInput(container, shouldAbort);
        case 2:
          input = _context65.v;
          if (!(!input || shouldAbort())) {
            _context65.n = 3;
            break;
          }
          return _context65.a(2);
        case 3:
          _context65.n = 4;
          return uploadIntoSlot(container, input, fileAnswer, shouldAbort);
        case 4:
          outcome = _context65.v;
          if (!(outcome !== 'dropped' || shouldAbort())) {
            _context65.n = 5;
            break;
          }
          return _context65.a(2);
        case 5:
          if (!(attempt >= UPLOAD_RETRY_DELAYS_MS.length)) {
            _context65.n = 6;
            break;
          }
          throw new Error('Oracle dropped the uploaded file each time (the attachment slot stayed empty)');
        case 6:
          _context65.n = 7;
          return sleep(UPLOAD_RETRY_DELAYS_MS[attempt]);
        case 7:
          if (!shouldAbort()) {
            _context65.n = 8;
            break;
          }
          return _context65.a(2);
        case 8:
          attempt += 1;
          _context65.n = 1;
          break;
        case 9:
          return _context65.a(2);
      }
    }, _callee63);
  }));
  return _uploadDocument.apply(this, arguments);
}
function uploadIntoSlot(_x156, _x157, _x158) {
  return _uploadIntoSlot.apply(this, arguments);
} // --- Profile-section hierarchy (work & education timeline/tile editors), EDITOR mode ---
// Detector-driven root → group → leaf model, shared machinery in ../autofill-section-hierarchy.js.
// ORC commits one entry at a time (Add → modal/inline edit form → Save): committed entries are
// tiles / timeline items (group-only nodes) and the OPEN edit form acts as the row at
// index == committed count. The edit form (getTimelineForm) is GLOBAL — it is not scoped to the
// section block — so getEditor probes the form for a kind-specific control (employerName/jobTitle
// vs educationalEstablishment/...) to never bind the OTHER section's open modal, and the
// education root serial-chains behind the work root (get rootWaitForFieldId) so the two
// iterations can never interleave on the one shared modal. Skills keeps its monolithic
// fillTimelineEntries fill.
function _uploadIntoSlot() {
  _uploadIntoSlot = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee64(container, input, fileAnswer) {
    var shouldAbort,
      scope,
      uploadStarted,
      observer,
      outcome,
      _args66 = arguments;
    return autofill_regenerator().w(function (_context66) {
      while (1) switch (_context66.p = _context66.n) {
        case 0:
          shouldAbort = _args66.length > 3 && _args66[3] !== undefined ? _args66[3] : autofill_NEVER_ABORT;
          // Scope to THIS attachment's container so the wait isn't satisfied by the
          // other slot's already-filled state.
          scope = container || document;
          uploadStarted = false;
          observer = new MutationObserver(function (records) {
            if (records.some(function (record) {
              return /attachment-upload-button--uploading\b/.test(record.oldValue || '');
            })) {
              uploadStarted = true;
            }
          });
          observer.observe(scope, {
            subtree: true,
            attributes: true,
            attributeFilter: ['class'],
            attributeOldValue: true
          });
          _context66.p = 1;
          fillFileInput(input, fileAnswer.fileName, fileAnswer.base64, fileAnswer.mimeType);
          _context66.n = 2;
          return waitForPositiveResultWithAbort(function () {
            if (documentAlreadyUploaded(scope)) return 'uploaded';
            if (scope.querySelector('.attachment-upload-button--uploading')) {
              uploadStarted = true;
              return null;
            }
            return uploadStarted && scope.querySelector('.attachment-upload-button--waiting') ? 'dropped' : null;
          }, UPLOAD_COMPLETE_TIMEOUT_MS, shouldAbort);
        case 2:
          outcome = _context66.v;
          if (!(outcome === 'uploaded')) {
            _context66.n = 3;
            break;
          }
          _context66.n = 3;
          return sleep(100);
        case 3:
          return _context66.a(2, outcome);
        case 4:
          _context66.p = 4;
          observer.disconnect();
          return _context66.f(4);
        case 5:
          return _context66.a(2);
      }
    }, _callee64, null, [[1,, 4, 5]]);
  }));
  return _uploadIntoSlot.apply(this, arguments);
}
var ORACLE_SECTION_EDITOR_PROBES = {
  work: '[name="employerName"], [name="jobTitle"]',
  education: '[name="educationalEstablishment"], [name="major"], [name="gpa"]'
};

// The open edit form, only when it belongs to THIS section (kind-specific control probe).
function getOracleSectionEditor(kind) {
  var _form$querySelector;
  var form = getTimelineForm();
  if (!(form !== null && form !== void 0 && (_form$querySelector = form.querySelector) !== null && _form$querySelector !== void 0 && _form$querySelector.call(form, ORACLE_SECTION_EDITOR_PROBES[kind]))) return null;
  return form;
}

// Single Add click — appear-wait and re-press retries are the shared iterator's job. Never while
// an entry editor is open: ORC answers Add by committing the open editor — filled or not — as an
// "Unnamed Job Title" / "Unnamed Major" entry (Fortinet / Cedars-Sinai 2026-10-20, one per retry).
function addOracleSectionRow(_x159) {
  return _addOracleSectionRow.apply(this, arguments);
} // Adapted from the old per-entry commit: wait for Save to enable, click, wait for the form to
// close. If Save never enables (a required field the fill couldn't satisfy), warn and return —
// the old flow likewise left the modal open for the user.
function _addOracleSectionRow() {
  _addOracleSectionRow = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee65(kind) {
    var _ref60,
      _ref60$shouldAbort,
      shouldAbort,
      addButton,
      _args67 = arguments;
    return autofill_regenerator().w(function (_context67) {
      while (1) switch (_context67.n) {
        case 0:
          _ref60 = _args67.length > 1 && _args67[1] !== undefined ? _args67[1] : {}, _ref60$shouldAbort = _ref60.shouldAbort, shouldAbort = _ref60$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref60$shouldAbort;
          if (!(shouldAbort() || getTimelineForm())) {
            _context67.n = 1;
            break;
          }
          return _context67.a(2);
        case 1:
          addButton = findProfileItemAddControl(kind);
          if (addButton) {
            _context67.n = 2;
            break;
          }
          return _context67.a(2);
        case 2:
          addButton.scrollIntoView({
            block: 'center'
          });
          addButton.click();
        case 3:
          return _context67.a(2);
      }
    }, _callee65);
  }));
  return _addOracleSectionRow.apply(this, arguments);
}
function saveOracleSectionEntry(_x160) {
  return _saveOracleSectionEntry.apply(this, arguments);
} // Leaf lookup inside the open edit form. Dates resolve to the month/year cx-select pair's input
// (the handler re-derives the form and fills both via fillTimelineDate, keyed by the field NAME
// carried as the live fieldId); everything else goes through resolveTimelineControl, which finds
// whichever widget (text / combo / pills) this config renders for the logical field.
function _saveOracleSectionEntry() {
  _saveOracleSectionEntry = autofill_asyncToGenerator(/*#__PURE__*/autofill_regenerator().m(function _callee66(kind) {
    var _ref61,
      _ref61$shouldAbort,
      shouldAbort,
      form,
      saveButton,
      enabled,
      _args68 = arguments;
    return autofill_regenerator().w(function (_context68) {
      while (1) switch (_context68.n) {
        case 0:
          _ref61 = _args68.length > 1 && _args68[1] !== undefined ? _args68[1] : {}, _ref61$shouldAbort = _ref61.shouldAbort, shouldAbort = _ref61$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref61$shouldAbort;
          form = getOracleSectionEditor(kind);
          if (!(!form || shouldAbort())) {
            _context68.n = 1;
            break;
          }
          return _context68.a(2);
        case 1:
          saveButton = form.querySelector('.save-btn') || form.querySelector('.app-dialog__footer-button.save-btn');
          if (saveButton) {
            _context68.n = 2;
            break;
          }
          console.warn('[oraclecloud] Timeline editor has no Save button — leaving the form open for the user');
          return _context68.a(2);
        case 2:
          _context68.n = 3;
          return waitForPositiveResultWithAbort(function () {
            return saveButton.disabled || saveButton.getAttribute('aria-disabled') === 'true' ? null : true;
          }, DROPDOWN_WAIT_TIMEOUT_MS, shouldAbort);
        case 3:
          enabled = _context68.v;
          if (enabled) {
            _context68.n = 4;
            break;
          }
          if (!shouldAbort()) console.warn('[oraclecloud] Timeline Save never enabled — leaving the form open for the user');
          return _context68.a(2);
        case 4:
          saveButton.click();
          _context68.n = 5;
          return waitForPositiveResultWithAbort(function () {
            return getTimelineForm() ? null : true;
          }, TIMELINE_MODAL_WAIT_MS, shouldAbort);
        case 5:
          return _context68.a(2);
      }
    }, _callee66);
  }));
  return _saveOracleSectionEntry.apply(this, arguments);
}
function getOracleSectionRowField(rowEl, mapping) {
  if (!(rowEl !== null && rowEl !== void 0 && rowEl.querySelector)) return null;
  if (mapping.timelineKind === 'date') {
    var dateInput = rowEl.querySelector("input[name=\"".concat(mapping.name, "\"][id^=\"month-\"], input[name=\"").concat(mapping.name, "\"][id^=\"year-\"]"));
    return dateInput ? {
      field: dateInput,
      fieldId: mapping.name
    } : null;
  }
  var resolved = resolveTimelineControl(rowEl, mapping);
  if (!resolved) return null;
  return {
    field: resolved.el,
    fieldId: mapping.name
  };
}
function classifyOracleSectionLeaf(mapping, fieldInfo) {
  var _control$matches, _control$matches2;
  if (mapping.timelineKind === 'date') return {
    fieldKind: 'oracle-timeline-date'
  };
  var control = fieldInfo.field;
  if (control !== null && control !== void 0 && (_control$matches = control.matches) !== null && _control$matches !== void 0 && _control$matches.call(control, 'ul.cx-select-pills-container')) return {
    fieldKind: 'oracle-timeline-pills'
  };
  if (control !== null && control !== void 0 && (_control$matches2 = control.matches) !== null && _control$matches2 !== void 0 && _control$matches2.call(control, COMBO_INPUT_SELECTOR)) {
    if (mapping.timelineKind === 'country') return {
      fieldKind: 'oracle-timeline-country'
    };
    if (mapping.timelineKind === 'state') return {
      fieldKind: 'oracle-timeline-state'
    };
    return {
      fieldKind: mapping.timelineKind === 'combo-best' ? 'oracle-timeline-combo-best' : 'oracle-timeline-combo'
    };
  }
  return {
    fieldKind: 'oracle-timeline-text'
  };
}
var ORACLE_WORK_HISTORY_SECTION = {
  rootFieldId: 'workHistory',
  rootQuestion: 'Work History',
  answerType: 'workHistory',
  // root answerType AND root fieldKind
  profileSection: 'workHistory',
  // key into getProfileSectionData()
  rowLabel: function rowLabel(rowIndex) {
    return "Work history ".concat(rowIndex + 1);
  },
  maxEntries: 30,
  editorAppearTimeoutMs: TIMELINE_MODAL_WAIT_MS,
  getContainer: function getContainer() {
    return findProfileSectionBlock('work');
  },
  getRows: function getRows(container) {
    return findAllExistingProfileItems(container, 'work');
  },
  getEditor: function getEditor() {
    return getOracleSectionEditor('work');
  },
  // presence switches the shared iterator to editor mode
  getRowField: getOracleSectionRowField,
  classifyLeaf: classifyOracleSectionLeaf,
  addRow: function addRow(_container) {
    var _ref48 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref48$shouldAbort = _ref48.shouldAbort,
      shouldAbort = _ref48$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref48$shouldAbort;
    return addOracleSectionRow('work', {
      shouldAbort: shouldAbort
    });
  },
  clearRows: function clearRows(container) {
    var _ref49 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref49$shouldAbort = _ref49.shouldAbort,
      shouldAbort = _ref49$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref49$shouldAbort;
    return clearExistingProfileItems(container, 'work', shouldAbort);
  },
  saveEntry: function saveEntry(_container) {
    var _ref50 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref50$shouldAbort = _ref50.shouldAbort,
      shouldAbort = _ref50$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref50$shouldAbort;
    return saveOracleSectionEntry('work', {
      shouldAbort: shouldAbort
    });
  },
  mappings: [{
    key: 'employerName',
    label: 'Employer',
    name: 'employerName',
    profileKey: 'companyName',
    fieldKind: 'text'
  }, {
    key: 'jobTitle',
    label: 'Job title',
    name: 'jobTitle',
    profileKey: 'positionTitle',
    fieldKind: 'text'
  }, {
    key: 'startDate',
    label: 'Start date',
    name: 'startDate',
    timelineKind: 'date',
    profileKey: 'startDate',
    fieldKind: 'text'
  }, {
    key: 'endDate',
    label: 'End date',
    name: 'endDate',
    timelineKind: 'date',
    profileKey: 'endDate',
    fieldKind: 'text'
  }, {
    key: 'countryCode',
    label: 'Country',
    name: 'countryCode',
    timelineKind: 'country',
    fieldKind: 'text',
    resolveValue: resolveEntryCountry
  },
  // Employer location — required on some tenants (Cedars-Sinai); absent elsewhere.
  {
    key: 'stateProvinceCode',
    label: 'State',
    name: 'stateProvinceCode',
    timelineKind: 'state',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return resolveWorkLocationPart(entry, 'state');
    }
  }, {
    key: 'city',
    label: 'City',
    name: 'city',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return resolveWorkLocationPart(entry, 'city');
    }
  },
  // "timeline" variant calls the description achievements; "tile" variant responsibilities —
  // whichever control exists gets a leaf (getRowField returns null for the other).
  {
    key: 'achievements',
    label: 'Description',
    name: 'achievements',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.description) || (entry === null || entry === void 0 ? void 0 : entry.responsibilities);
    }
  }, {
    key: 'responsibilities',
    label: 'Responsibilities',
    name: 'responsibilities',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.description) || (entry === null || entry === void 0 ? void 0 : entry.responsibilities);
    }
  }]
};
var ORACLE_EDUCATION_SECTION = {
  rootFieldId: 'educationHistory',
  rootQuestion: 'Education',
  answerType: 'educationHistory',
  // root answerType AND root fieldKind
  profileSection: 'education',
  // key into getProfileSectionData()
  rowLabel: function rowLabel(rowIndex) {
    return "Education ".concat(rowIndex + 1);
  },
  maxEntries: 30,
  editorAppearTimeoutMs: TIMELINE_MODAL_WAIT_MS,
  // Grounding for the School state / city AI fallback: this entry's own facts only.
  aiContextPairs: function aiContextPairs(entry) {
    return [['School', (entry === null || entry === void 0 ? void 0 : entry.universityName) || (entry === null || entry === void 0 ? void 0 : entry.schoolName)], ['Degree', (entry === null || entry === void 0 ? void 0 : entry.degree) || (entry === null || entry === void 0 ? void 0 : entry.degreeName)], ['Field of study', entry === null || entry === void 0 ? void 0 : entry.major]].filter(function (_ref51) {
      var _ref52 = autofill_slicedToArray(_ref51, 2),
        value = _ref52[1];
      return clean(value);
    }).map(function (_ref53) {
      var _ref54 = autofill_slicedToArray(_ref53, 2),
        question = _ref54[0],
        answer = _ref54[1];
      return {
        question: question,
        answer: clean(answer)
      };
    });
  },
  // Both sections share ONE global edit form — serialize education behind work whenever the
  // work block is on the page (breezy-style live getter; undefined when there's nothing to wait on).
  get rootWaitForFieldId() {
    return findProfileSectionBlock('work') ? 'workHistory' : undefined;
  },
  getContainer: function getContainer() {
    return findProfileSectionBlock('education');
  },
  getRows: function getRows(container) {
    return findAllExistingProfileItems(container, 'education');
  },
  getEditor: function getEditor() {
    return getOracleSectionEditor('education');
  },
  // presence switches the shared iterator to editor mode
  getRowField: getOracleSectionRowField,
  classifyLeaf: classifyOracleSectionLeaf,
  addRow: function addRow(_container) {
    var _ref55 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref55$shouldAbort = _ref55.shouldAbort,
      shouldAbort = _ref55$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref55$shouldAbort;
    return addOracleSectionRow('education', {
      shouldAbort: shouldAbort
    });
  },
  clearRows: function clearRows(container) {
    var _ref56 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref56$shouldAbort = _ref56.shouldAbort,
      shouldAbort = _ref56$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref56$shouldAbort;
    return clearExistingProfileItems(container, 'education', shouldAbort);
  },
  saveEntry: function saveEntry(_container) {
    var _ref57 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref57$shouldAbort = _ref57.shouldAbort,
      shouldAbort = _ref57$shouldAbort === void 0 ? autofill_NEVER_ABORT : _ref57$shouldAbort;
    return saveOracleSectionEntry('education', {
      shouldAbort: shouldAbort
    });
  },
  mappings: [{
    key: 'educationalEstablishment',
    label: 'School',
    name: 'educationalEstablishment',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.universityName) || (entry === null || entry === void 0 ? void 0 : entry.schoolName);
    }
  },
  // Some tenants (Cedars-Sinai) name the School dropdown by its id field.
  {
    key: 'educationalEstablishmentId',
    label: 'School',
    name: 'educationalEstablishmentId',
    timelineKind: 'combo',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.universityName) || (entry === null || entry === void 0 ? void 0 : entry.schoolName);
    }
  },
  // Degree is an enumerable set whose widget VARIES by config: a cx-select dropdown (~40 opts
  // like "Bachelor of Science - BS") on some sites, a pills group on others. classifyLeaf
  // resolves whichever is present; combo-best/pills both best-match the profile degree.
  {
    key: 'contentItemId',
    label: 'Degree',
    name: 'contentItemId',
    labelMatch: /\bdegree\b|qualification|education level/i,
    timelineKind: 'combo-best',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.degree) || (entry === null || entry === void 0 ? void 0 : entry.degreeName) || (entry === null || entry === void 0 ? void 0 : entry.qualification);
    }
  }, {
    key: 'major',
    label: 'Major',
    name: 'major',
    profileKey: 'major',
    fieldKind: 'text'
  }, {
    key: 'startDate',
    label: 'Start date',
    name: 'startDate',
    timelineKind: 'date',
    profileKey: 'startDate',
    fieldKind: 'text'
  }, {
    key: 'endDate',
    label: 'End date',
    name: 'endDate',
    timelineKind: 'date',
    profileKey: 'endDate',
    fieldKind: 'text'
  }, {
    key: 'countryCode',
    label: 'Country',
    name: 'countryCode',
    timelineKind: 'country',
    fieldKind: 'text',
    resolveValue: resolveEntryCountry
  },
  // School location — required on some tenants; the AI fallback names it when the profile
  // entry carries no location.
  {
    key: 'stateProvinceCode',
    label: 'School state',
    name: 'stateProvinceCode',
    timelineKind: 'state',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return resolveEducationLocationPart(entry, 'state');
    },
    aiFallback: true
  }, {
    key: 'city',
    label: 'School city',
    name: 'city',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry) {
      return resolveEducationLocationPart(entry, 'city');
    },
    aiFallback: true
  },
  // The stored GPA (its leading number for a numeric-only input), else blank — never aiFallback.
  {
    key: 'gpa',
    label: 'GPA',
    name: 'gpa',
    fieldKind: 'text',
    resolveValue: function resolveValue(entry, context) {
      return resolveEducationGpa(entry, context);
    }
  }]
};
var ORACLE_PROFILE_SECTIONS = [ORACLE_WORK_HISTORY_SECTION, ORACLE_EDUCATION_SECTION];

// Root handlers (count answer + the clear → per-entry add/modal/save iterator), the shared
// 'profileSectionField' leaf answerType, and the 'section-<baseKind>' live-re-resolving wrapper
// kinds are registered by the shared hierarchy module. No option-dependent leaf kinds — the
// combo/pills handlers read the live option lists (type-filter / best-match) themselves.
registerProfileSectionHierarchy({
  sections: ORACLE_PROFILE_SECTIONS,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS,
  getAnswer: getAnswer,
  // School state / city AI fallback
  wrappedFieldKinds: ['oracle-timeline-text', 'oracle-timeline-combo', 'oracle-timeline-country', 'oracle-timeline-state', 'oracle-timeline-combo-best', 'oracle-timeline-pills', 'oracle-timeline-date']
});
registerAutofillHandlers({
  detectFields: detectAutofillFields,
  detectSubmitButton: detectSubmitButton,
  detectAdvanceButton: detectAdvanceButton,
  getSubmitButton: getSubmitControl,
  advanceFlow: advanceFlow,
  isAutofillAvailable: isAutofillAvailable,
  answerTypeHandlers: ANSWER_TYPE_HANDLERS,
  fieldKindHandlers: FIELD_KIND_HANDLERS
});
/******/ })()
;