/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ../../packages/utils/ats-fingerprint.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Which applicant tracking system (ATS) runs an employer's OWN career site — careers.filed.com is Teamtailor, careers.aaa.com
// a Phenom career site (2026-10-25, plan ~/.claude/plans/i-see-a-lot-ticklish-glade.md F1; owner: group the Doctor's
// "employer's own site" learning cases under the ATS behind them, and let the extensions run that ATS's existing adapter
// on the employer's domain). Shared by the extensions (a content script collects the signals, the background decides and
// injects), the Doctor box (its live attempts and lab runs report what they saw) and applyorg-bff (it re-detects every
// sighting itself — a client verdict is never trusted). Dependency-free and browser-safe, like bot-wall.js; a SUBPATH
// module (`@bidhub/utils/ats-fingerprint.js`), never re-exported from the index barrel, so only its importers retag.
//
// Measured on the 276 live postings behind the open "employer's own site" learning cases (2026-10-25): ~120 run on a known
// platform — Phenom 31, iCIMS Jibe 20, SAP SuccessFactors career sites ~25, Teamtailor 13, Radancy TalentBrew ~12, Avature 7,
// Recruitee 4, Greenhouse embeds 3, Clinch 3, Paradox 2 — the vendor's own asset CDN (scripts, styles, images) is the
// reliable mark; "Powered by" text is mostly prose (only exact vendor phrases count). The rest are truly the employer's own.
//
// Three kinds of vendor:
//   hosted    the ATS renders the application ON the employer's domain (Teamtailor, Recruitee, Avature, Comeet, Pinpoint,
//             Eightfold) — an adapter exists; the extensions inject `bundles` there
//   embed     the form lives in an iframe on the vendor's own host (Greenhouse, iCIMS) — the static manifest groups already
//             run in that frame; grouped, nothing to inject
//   platform  a career-site platform whose Apply continues on an ATS (Phenom, iCIMS Jibe, SuccessFactors, TalentBrew,
//             Clinch, Paradox) — no adapter; grouped so ONE case learns the way from that platform to the form
//
// Strength rule — a page that merely LINKS to a vendor, or a blog post naming it, never matches:
//   STRONG (3)  a script / stylesheet / icon / page request from the vendor's hosts; ≥ 2 images from its CDN; a form or
//               iframe on its app host (an embed); the generator meta
//   MEDIUM (2)  a vendor phrase in the FOOTER; a vendor DOM marker (in-page collection only); a vendor url marker (gh_jid=)
//   WEAK (1)    links to the vendor's host; a single vendor image — capped at 1 point in all
//   match = ≥ 1 STRONG, or ≥ 2 distinct MEDIUM classes. Several vendors: the one holding the form / iframe wins (that is where
//   the application is), else a ≥ 2-point lead, else `ambiguous` (no verdict). On the vendor's NATIVE host the answer is
//   `{ native }` (the page is already the vendor's own — never an alias).

var ATS_DETECTOR_VERSION = 1;
var ATS_KINDS = Object.freeze(['hosted', 'embed', 'platform']);

/**
 * The vendor table. `key` = the vendor's registered domain = the Doctor's case key of a NATIVE posting (apply-fleet
 * pure/onboarding.js platformKeyForUrl of `sampleNativeHost`); `assetHosts` = the vendor's CDNs (a host or any subdomain);
 * `appHosts` = where its application forms live (a frame / form / script there is strong); `bundles` = the adapter's
 * content-script files (packages/extension-core/manifest/platform-content-scripts.json) for a hosted vendor; `notes` = one
 * plain sentence for the Doctor's prompts.
 */
var ATS_VENDORS = Object.freeze([{
  key: 'teamtailor.com',
  label: 'Teamtailor',
  kind: 'hosted',
  sampleNativeHost: 'acme.teamtailor.com',
  nativeHosts: ['teamtailor.com'],
  assetHosts: ['teamtailor-cdn.com'],
  appHosts: ['teamtailor.com'],
  footer: [/applicant tracking system by teamtailor/i, /career site by teamtailor/i, /powered by teamtailor/i],
  dom: ['turbo-frame#application_form', 'a[href*="/connect/login"]'],
  adapter: 'teamtailor',
  bundles: ['teamtailor.js', 'teamtailor-autofill.js'],
  notes: '"Log in to Connect" in a Teamtailor header is its candidate network, not a wall; "Apply for this job" opens the form on the same page.'
}, {
  key: 'recruitee.com',
  label: 'Recruitee',
  kind: 'hosted',
  sampleNativeHost: 'acme.recruitee.com',
  nativeHosts: ['recruitee.com'],
  assetHosts: ['recruiteecdn.com'],
  appHosts: ['recruitee.com'],
  footer: [/powered by recruitee/i],
  dom: [],
  adapter: 'recruitee',
  bundles: ['recruitee.js', 'recruitee-autofill.js'],
  notes: 'A Recruitee career site renders the application on the employer\'s domain.'
}, {
  key: 'avature.net',
  label: 'Avature',
  kind: 'hosted',
  sampleNativeHost: 'acme.avature.net',
  nativeHosts: ['avature.net'],
  assetHosts: ['avacdn.net'],
  appHosts: ['avature.net'],
  footer: [/powered by avature/i],
  dom: [],
  adapter: 'avature',
  bundles: ['avature.js', 'avature-autofill.js'],
  notes: 'An Avature career site renders its application on the employer\'s domain.'
}, {
  key: 'comeet.com',
  label: 'Comeet',
  kind: 'hosted',
  sampleNativeHost: 'www.comeet.com',
  nativeHosts: ['comeet.com', 'comeet.co'],
  assetHosts: ['comeet.co', 'comeet.com'],
  appHosts: ['comeet.co', 'comeet.com'],
  footer: [/powered by comeet/i],
  dom: [],
  adapter: 'comeet',
  bundles: ['comeet.js', 'comeet-autofill.js'],
  notes: 'A Comeet career page embeds the Comeet application.'
}, {
  key: 'pinpointhq.com',
  label: 'Pinpoint',
  kind: 'hosted',
  sampleNativeHost: 'acme.pinpointhq.com',
  nativeHosts: ['pinpointhq.com'],
  assetHosts: ['pinpointhq.com'],
  appHosts: ['pinpointhq.com'],
  footer: [/powered by pinpoint/i],
  dom: [],
  adapter: 'pinpointhq',
  bundles: ['pinpointhq.js', 'pinpointhq-autofill.js'],
  notes: 'A Pinpoint career site renders the application on the employer\'s domain.'
}, {
  key: 'eightfold.ai',
  label: 'Eightfold',
  kind: 'hosted',
  sampleNativeHost: 'acme.eightfold.ai',
  nativeHosts: ['eightfold.ai'],
  assetHosts: ['vscdn.net'],
  appHosts: ['eightfold.ai'],
  footer: [/powered by eightfold/i],
  dom: [],
  adapter: 'eightfold',
  bundles: ['eightfold.js', 'eightfold-autofill.js'],
  notes: 'An Eightfold career site runs its application on the employer\'s domain.'
}, {
  key: 'greenhouse.io',
  label: 'Greenhouse',
  kind: 'embed',
  sampleNativeHost: 'job-boards.greenhouse.io',
  nativeHosts: ['greenhouse.io'],
  assetHosts: [],
  appHosts: ['boards.greenhouse.io', 'job-boards.greenhouse.io', 'job-boards.eu.greenhouse.io', 'boards-api.greenhouse.io'],
  footer: [/powered by greenhouse/i],
  urlMarkers: [/[?&]gh_jid=\d+/i],
  dom: ['#grnhse_app', '#grnhse_iframe'],
  adapter: 'greenhouse',
  bundles: [],
  notes: 'The Greenhouse application is embedded in an iframe on Greenhouse\'s own host.'
}, {
  key: 'icims.com',
  label: 'iCIMS',
  kind: 'embed',
  sampleNativeHost: 'careers-acme.icims.com',
  nativeHosts: ['icims.com'],
  assetHosts: [],
  appHosts: ['icims.com'],
  footer: [],
  dom: ['#icims_content_iframe'],
  adapter: 'icims',
  bundles: [],
  notes: 'The iCIMS application runs in an iframe on iCIMS\'s own host.'
}, {
  key: 'phenompeople.com',
  label: 'Phenom',
  kind: 'platform',
  sampleNativeHost: 'jobs.phenompeople.com',
  nativeHosts: ['phenompeople.com', 'phenompro.com'],
  assetHosts: ['phenompeople.com', 'phenompro.com'],
  appHosts: [],
  footer: [/powered by phenom/i],
  dom: ['[data-ph-at-id]'],
  adapter: null,
  bundles: [],
  notes: 'A Phenom career site: its Apply usually continues on the employer\'s ATS (Workday, SuccessFactors, iCIMS, Taleo) or Phenom\'s own form.'
}, {
  key: 'jibeapply.com',
  label: 'iCIMS Jibe',
  kind: 'platform',
  sampleNativeHost: 'acme.jibeapply.com',
  nativeHosts: ['jibeapply.com'],
  assetHosts: ['jibecdn.com', 'jibeapply.com'],
  appHosts: ['jibeapply.com'],
  footer: [],
  dom: [],
  adapter: null,
  bundles: [],
  notes: 'An iCIMS Jibe career site: its Apply continues on the employer\'s ATS.'
}, {
  key: 'successfactors.com',
  label: 'SAP SuccessFactors',
  kind: 'platform',
  sampleNativeHost: 'career4.successfactors.com',
  nativeHosts: ['successfactors.com', 'successfactors.eu', 'sapsf.com', 'sapsf.eu'],
  assetHosts: ['successfactors.com', 'successfactors.eu', 'sapsf.com', 'sapsf.eu'],
  appHosts: ['successfactors.com', 'successfactors.eu', 'sapsf.com', 'sapsf.eu'],
  footer: [],
  dom: [],
  adapter: null,
  bundles: [],
  notes: 'A SuccessFactors career site: its Apply continues in SuccessFactors.'
}, {
  key: 'talentbrew.com',
  label: 'Radancy TalentBrew',
  kind: 'platform',
  sampleNativeHost: 'apply.talentbrew.com',
  nativeHosts: ['talentbrew.com', 'talentbrew.io'],
  assetHosts: ['talentbrew.com', 'talentbrew.io', 'tmpwebeng.com'],
  appHosts: ['talentbrew.io'],
  footer: [],
  dom: [],
  adapter: null,
  bundles: [],
  notes: 'A Radancy (TalentBrew) career site: its Apply continues on the employer\'s ATS.'
}, {
  key: 'clinchtalent.com',
  label: 'Clinch',
  kind: 'platform',
  sampleNativeHost: 'files.clinchtalent.com',
  nativeHosts: ['clinchtalent.com'],
  assetHosts: ['clinchtalent.com'],
  appHosts: [],
  footer: [],
  dom: [],
  adapter: null,
  bundles: [],
  notes: 'A Clinch career site: its Apply continues on the employer\'s ATS.'
}, {
  key: 'paradox.ai',
  label: 'Paradox',
  kind: 'platform',
  sampleNativeHost: 'cdn.sites.paradox.ai',
  nativeHosts: ['paradox.ai'],
  assetHosts: ['paradox.ai'],
  appHosts: [],
  footer: [/powered by paradox/i],
  dom: [],
  adapter: null,
  bundles: [],
  notes: 'A Paradox career site: its Apply is a chat with the assistant "Olivia" or continues on the employer\'s ATS.'
}]);

/** Every vendor's DOM markers — passed to collectAtsSignals (it must stay closure-free). */
var ATS_DOM_MARKERS = Object.freeze(_toConsumableArray(new Set(ATS_VENDORS.flatMap(function (vendor) {
  return vendor.dom || [];
}))));
var vendorFor = function vendorFor(key) {
  return ATS_VENDORS.find(function (vendor) {
    return vendor.key === key;
  }) || null;
};
var lower = function lower(value) {
  return typeof value === 'string' ? value.trim().toLowerCase() : '';
};
/** `host` is `domain` or a subdomain of it. */
var hostIn = function hostIn(host) {
  var domains = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var h = lower(host).replace(/:\d+$/, '');
  return Boolean(h) && domains.some(function (domain) {
    return h === domain || h.endsWith(".".concat(domain));
  });
};
var isNativeHost = function isNativeHost(key, host) {
  var vendor = vendorFor(key);
  return Boolean(vendor) && hostIn(host, vendor.nativeHosts);
};
/**
 * A url on the vendor's own host (`https://<sampleNativeHost>/`), for rules written against the vendor's domain — the
 * autofill feature flags (a tester-only adapter) — that must hold on its employer domains too; null for an unknown key.
 */
var atsNativeSampleUrl = function atsNativeSampleUrl(key) {
  var vendor = vendorFor(key);
  return vendor ? "https://".concat(vendor.sampleNativeHost, "/") : null;
};
var hostOfUrl = function hostOfUrl(value) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  if (typeof value !== 'string' || !value.trim() || /^(data|javascript|mailto|tel|blob|about):/i.test(value.trim())) return null;
  try {
    var url = new URL(value.trim(), base);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.hostname.toLowerCase() : null;
  } catch (_unused) {
    return null;
  }
};

/**
 * The in-page collector (the extensions' content script, the Doctor box's park bridge / lab page): ONE call per frame. It
 * must stay self-contained (no closure captures — every transport serialises it); `markers` = ATS_DOM_MARKERS.
 * → `{ url, host, generator, scripts, styles, images, frames, forms, resources, anchors, footer, markers }`.
 */
var collectAtsSignals = function collectAtsSignals() {
  var _document$body, _document$querySelect;
  var markers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hostOf = function hostOf(value) {
    try {
      var url = new URL(String(value), location.href);
      return url.protocol === 'http:' || url.protocol === 'https:' ? url.hostname.toLowerCase() : null;
    } catch (_unused2) {
      return null;
    }
  };
  var uniq = function uniq(list) {
    return _toConsumableArray(new Set(list.filter(Boolean))).slice(0, 80);
  };
  var count = function count(list) {
    var out = {};
    var _iterator = _createForOfIteratorHelper(list),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var host = _step.value;
        if (host) out[host] = (out[host] || 0) + 1;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return out;
  };
  var scripts = uniq(Array.from(document.scripts || []).map(function (s) {
    return s.src ? hostOf(s.src) : null;
  }));
  var styles = uniq(Array.from(document.querySelectorAll('link[href]')).filter(function (l) {
    return /stylesheet|preload|icon/i.test(l.getAttribute('rel') || '');
  }).map(function (l) {
    return hostOf(l.href);
  }));
  var images = count(Array.from(document.images || []).slice(0, 300).map(function (img) {
    return hostOf(img.currentSrc || img.src);
  }));
  var frames = Array.from(document.querySelectorAll('iframe[src]')).slice(0, 20).map(function (f) {
    return String(f.src).slice(0, 300);
  });
  var forms = Array.from(document.forms || []).slice(0, 20).map(function (f) {
    return f.getAttribute('action');
  }).filter(Boolean).map(function (action) {
    try {
      return new URL(action, location.href).href.slice(0, 300);
    } catch (_unused3) {
      return null;
    }
  }).filter(Boolean);
  var resources = [];
  try {
    resources = uniq(performance.getEntriesByType('resource').filter(function (e) {
      return ['script', 'link', 'css', 'fetch', 'xmlhttprequest', 'iframe'].includes(e.initiatorType);
    }).map(function (e) {
      return hostOf(e.name);
    }));
  } catch (_unused4) {
    resources = [];
  }
  var anchors = count(Array.from(document.links || []).slice(0, 500).map(function (a) {
    return hostOf(a.href);
  }));
  var footerEl = document.querySelector('footer, [role="contentinfo"]');
  var text = (footerEl ? footerEl.innerText || footerEl.textContent : (((_document$body = document.body) === null || _document$body === void 0 ? void 0 : _document$body.innerText) || '').slice(-600)) || '';
  var generator = ((_document$querySelect = document.querySelector('meta[name="generator" i]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute('content')) || null;
  var found = (Array.isArray(markers) ? markers : []).filter(function (selector) {
    try {
      return Boolean(document.querySelector(selector));
    } catch (_unused5) {
      return false;
    }
  }).slice(0, 20);
  return {
    url: location.href,
    host: location.hostname.toLowerCase(),
    generator: generator,
    scripts: scripts,
    styles: styles,
    images: images,
    frames: frames,
    forms: forms,
    resources: resources,
    anchors: anchors,
    footer: text.replace(/\s+/g, ' ').trim().slice(0, 600),
    markers: found
  };
};

/** The same signals from stored / fetched HTML (a snapshot, a static fetch) — no DOM markers, no page requests. */
var collectAtsSignalsFromHtml = function collectAtsSignalsFromHtml(html) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$url = _ref.url,
    url = _ref$url === void 0 ? null : _ref$url;
  var page = typeof html === 'string' ? html : '';
  var base = typeof url === 'string' && url ? url : undefined;
  var tags = function tags(re) {
    return page.match(re) || [];
  };
  var attr = function attr(tag, name) {
    var m = tag.match(new RegExp("\\b".concat(name, "\\s*=\\s*[\"']([^\"']+)[\"']"), 'i'));
    return m ? m[1].replace(/&amp;/g, '&') : null;
  };
  var uniq = function uniq(list) {
    return _toConsumableArray(new Set(list.filter(Boolean))).slice(0, 80);
  };
  var count = function count(list) {
    var out = {};
    var _iterator2 = _createForOfIteratorHelper(list),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var host = _step2.value;
        if (host) out[host] = (out[host] || 0) + 1;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return out;
  };
  var scripts = uniq(tags(/<script\b[^>]*>/gi).map(function (tag) {
    return hostOfUrl(attr(tag, 'src'), base);
  }));
  var styles = uniq(tags(/<link\b[^>]*>/gi).filter(function (tag) {
    return /stylesheet|preload|icon/i.test(attr(tag, 'rel') || '');
  }).map(function (tag) {
    return hostOfUrl(attr(tag, 'href'), base);
  }));
  var images = count(tags(/<img\b[^>]*>/gi).slice(0, 300).map(function (tag) {
    return hostOfUrl(attr(tag, 'src'), base);
  }));
  var frames = tags(/<iframe\b[^>]*>/gi).map(function (tag) {
    return attr(tag, 'src');
  }).filter(Boolean).slice(0, 20).map(function (src) {
    try {
      return new URL(src, base).href.slice(0, 300);
    } catch (_unused6) {
      return null;
    }
  }).filter(Boolean);
  var forms = tags(/<form\b[^>]*>/gi).map(function (tag) {
    return attr(tag, 'action');
  }).filter(Boolean).slice(0, 20).map(function (action) {
    try {
      return new URL(action, base).href.slice(0, 300);
    } catch (_unused7) {
      return null;
    }
  }).filter(Boolean);
  var anchors = count(tags(/<a\b[^>]*>/gi).slice(0, 500).map(function (tag) {
    return hostOfUrl(attr(tag, 'href'), base);
  }));
  var footerHtml = (page.match(/<footer\b[\s\S]*?<\/footer>/i) || [''])[0];
  var footer = footerHtml.replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().slice(0, 600);
  var generatorTag = tags(/<meta\b[^>]*>/gi).find(function (tag) {
    return /\bname\s*=\s*["']generator["']/i.test(tag);
  });
  return {
    url: base || null,
    host: hostOfUrl(base || ''),
    generator: generatorTag ? attr(generatorTag, 'content') : null,
    scripts: scripts,
    styles: styles,
    images: images,
    frames: frames,
    forms: forms,
    resources: [],
    anchors: anchors,
    footer: footer,
    markers: []
  };
};
var STRONG = 3;
var MEDIUM = 2;
var list = function list(value) {
  return Array.isArray(value) ? value : [];
};
var counts = function counts(value) {
  return value && _typeof(value) === 'object' && !Array.isArray(value) ? value : {};
};

/** One vendor's evidence over one frame's signals → `{ strong: [{ cls, evidence }], medium: [...], weak: [...] }`. */
var evidenceFor = function evidenceFor(vendor, s, _ref2) {
  var topFrame = _ref2.topFrame;
  var strong = [];
  var medium = [];
  var weak = [];
  var own = [].concat(_toConsumableArray(vendor.assetHosts), _toConsumableArray(vendor.appHosts));
  var asset = [].concat(_toConsumableArray(list(s.scripts)), _toConsumableArray(list(s.styles)), _toConsumableArray(list(s.resources))).find(function (host) {
    return hostIn(host, own);
  });
  if (asset) strong.push({
    cls: 'asset',
    evidence: asset
  });
  var vendorImages = Object.entries(counts(s.images)).filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
      host = _ref4[0];
    return hostIn(host, vendor.assetHosts);
  });
  var imageCount = vendorImages.reduce(function (sum, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      n = _ref6[1];
    return sum + (Number(n) || 0);
  }, 0);
  if (imageCount >= 2) strong.push({
    cls: 'images',
    evidence: "".concat(imageCount, " images from ").concat(vendorImages[0][0])
  });else if (imageCount === 1) weak.push({
    cls: 'image',
    evidence: vendorImages[0][0]
  });
  var frame = list(s.frames).find(function (src) {
    return hostIn(hostOfUrl(src), vendor.appHosts);
  });
  if (frame) strong.push({
    cls: 'frame',
    evidence: hostOfUrl(frame)
  });
  var form = list(s.forms).find(function (action) {
    return hostIn(hostOfUrl(action), vendor.appHosts);
  });
  if (form) strong.push({
    cls: 'form',
    evidence: hostOfUrl(form)
  });
  // A child frame that IS on the vendor's app host is where the application lives (an embed seen from inside).
  if (!topFrame && hostIn(s.host, vendor.appHosts)) strong.push({
    cls: 'frame',
    evidence: lower(s.host)
  });
  if (typeof s.generator === 'string' && new RegExp("\\b".concat(vendor.label.split(' ')[0], "\\b"), 'i').test(s.generator)) strong.push({
    cls: 'generator',
    evidence: s.generator.slice(0, 80)
  });
  var phrase = list(vendor.footer).map(function (re) {
    return typeof s.footer === 'string' ? s.footer.match(re) : null;
  }).find(Boolean);
  if (phrase) medium.push({
    cls: 'footer',
    evidence: phrase[0]
  });
  var marker = list(s.markers).find(function (selector) {
    return list(vendor.dom).includes(selector);
  });
  if (marker) medium.push({
    cls: 'dom',
    evidence: marker
  });
  var urlMark = list(vendor.urlMarkers).find(function (re) {
    return typeof s.url === 'string' && re.test(s.url);
  });
  if (urlMark) medium.push({
    cls: 'url',
    evidence: String(urlMark.source).slice(0, 40)
  });
  var link = Object.keys(counts(s.anchors)).find(function (host) {
    return hostIn(host, vendor.appHosts) || hostIn(host, vendor.nativeHosts);
  });
  if (link) weak.push({
    cls: 'link',
    evidence: link
  });
  return {
    strong: strong,
    medium: medium,
    weak: weak
  };
};

/**
 * Decide the ATS over a page's signals — ONE object (the top frame) or a list (the top frame first, then its child frames).
 * → `{ atsKey, label, kind, adapter, bundles, confidence: 'strong' | 'ok', score, matched: [{ cls, evidence }], frameUrl }`
 * | `{ native, label }` | `{ ambiguous: [keys] }` | null.
 */
var detectAts = function detectAts(signals) {
  var frames = (Array.isArray(signals) ? signals : [signals]).filter(function (s) {
    return s && _typeof(s) === 'object';
  });
  if (!frames.length) return null;
  var top = frames[0];
  var nativeVendor = ATS_VENDORS.find(function (vendor) {
    return hostIn(top.host || hostOfUrl(top.url), vendor.nativeHosts);
  });
  if (nativeVendor) return {
    "native": nativeVendor.key,
    label: nativeVendor.label
  };
  var results = [];
  var _iterator3 = _createForOfIteratorHelper(ATS_VENDORS),
    _step3;
  try {
    var _loop = function _loop() {
      var vendor = _step3.value;
      var strong = [];
      var medium = [];
      var weak = [];
      var frameUrl = null;
      frames.forEach(function (s, index) {
        var found = evidenceFor(vendor, s, {
          topFrame: index === 0
        });
        strong.push.apply(strong, _toConsumableArray(found.strong));
        medium.push.apply(medium, _toConsumableArray(found.medium));
        weak.push.apply(weak, _toConsumableArray(found.weak));
        if (!frameUrl && index > 0 && found.strong.some(function (e) {
          return e.cls === 'frame';
        })) frameUrl = typeof s.url === 'string' ? s.url : null;
      });
      var strongClasses = new Set(strong.map(function (e) {
        return e.cls;
      }));
      var mediumClasses = new Set(medium.map(function (e) {
        return e.cls;
      }));
      if (!strongClasses.size && mediumClasses.size < 2) return 1; // continue
      var score = STRONG * strongClasses.size + MEDIUM * mediumClasses.size + Math.min(1, weak.length);
      var holdsForm = strongClasses.has('frame') || strongClasses.has('form');
      var confidence = score >= 5 || strongClasses.size && mediumClasses.size ? 'strong' : 'ok';
      var matched = [].concat(strong, medium, weak).filter(function (e, i, all) {
        return all.findIndex(function (x) {
          return x.cls === e.cls;
        }) === i;
      });
      results.push({
        vendor: vendor,
        score: score,
        holdsForm: holdsForm,
        confidence: confidence,
        matched: matched,
        frameUrl: frameUrl
      });
    };
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      if (_loop()) continue;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  if (!results.length) return null;
  var pick = function pick(r) {
    return _objectSpread({
      atsKey: r.vendor.key,
      label: r.vendor.label,
      kind: r.holdsForm && r.vendor.kind !== 'hosted' ? 'embed' : r.vendor.kind,
      adapter: r.vendor.adapter,
      bundles: _toConsumableArray(r.vendor.bundles),
      confidence: r.confidence,
      score: r.score,
      matched: r.matched
    }, r.frameUrl ? {
      frameUrl: r.frameUrl
    } : {});
  };
  if (results.length === 1) return pick(results[0]);
  var withForm = results.filter(function (r) {
    return r.holdsForm;
  });
  if (withForm.length === 1) return pick(withForm[0]);
  var sorted = [].concat(results).sort(function (a, b) {
    return b.score - a.score;
  });
  if (sorted[0].score - sorted[1].score >= 2) return pick(sorted[0]);
  return {
    ambiguous: sorted.map(function (r) {
      return r.vendor.key;
    })
  };
};

/** A detection in plain words for people and prompts ("Teamtailor — its own image and script servers"). */
var ATS_EVIDENCE_WORDS = Object.freeze({
  asset: 'loads scripts or styles from the vendor',
  images: 'shows images from the vendor',
  frame: 'holds the vendor\'s application frame',
  form: 'posts its form to the vendor',
  generator: 'names the vendor as the site builder',
  footer: 'its footer names the vendor',
  dom: 'carries the vendor\'s page markup',
  url: 'carries the vendor\'s job id',
  link: 'links to the vendor',
  image: 'shows an image from the vendor'
});
var atsEvidenceSentence = function atsEvidenceSentence(detection) {
  if (!(detection !== null && detection !== void 0 && detection.atsKey)) return null;
  var words = (detection.matched || []).map(function (e) {
    return ATS_EVIDENCE_WORDS[e.cls];
  }).filter(Boolean).slice(0, 3);
  return "".concat(detection.label, ": the page ").concat(words.join(', ') || 'matches the vendor', ".");
};
;// ../../packages/extension-core/content/general/ats-detector.js
// ATS detector (2026-10-26, plan ~/.claude/plans/i-see-a-lot-ticklish-glade.md F7): recognises which applicant tracking system
// runs an employer's OWN career site (careers.filed.com = Teamtailor) and asks the background to run that ATS's existing
// adapter here (background/ats-adapter-inject.js — it re-decides with the same table and injects into this frame only).
// Shared by all three extensions (the bh wrapper re-imports it; ah builds from bh's general dir). Every frame, document_idle.
// Sends ONLY when a vendor matched locally — an ordinary page sends nothing — and looks once more after RECHECK_MS when the
// first look was not conclusive (an SPA's footer and scripts arrive late). Nothing leaves the browser: the message goes to
// this extension's own background.

var RECHECK_MS = 2500;
// = background/ats-adapter-inject.js ATS_SIGNALS_MESSAGE (a literal here keeps the injector out of every page's bundle).
var ATS_SIGNALS_MESSAGE = 'atsSignals';

// Orphan guard (bid-counter.js): after an extension update this context is invalidated but its timer would still fire.
var isExtensionContextAlive = function isExtensionContextAlive() {
  var _globalThis$chrome;
  return Boolean((_globalThis$chrome = globalThis.chrome) === null || _globalThis$chrome === void 0 || (_globalThis$chrome = _globalThis$chrome.runtime) === null || _globalThis$chrome === void 0 ? void 0 : _globalThis$chrome.id);
};
var look = function look() {
  if (!isExtensionContextAlive()) return null;
  var signals = null;
  try {
    signals = collectAtsSignals(ATS_DOM_MARKERS);
  } catch (_unused) {
    return null;
  }
  var verdict = detectAts(signals);
  if (verdict !== null && verdict !== void 0 && verdict.atsKey) {
    try {
      chrome.runtime.sendMessage({
        message_type: ATS_SIGNALS_MESSAGE,
        data: signals
      })["catch"](function () {
        return undefined;
      });
    } catch (_unused2) {
      // the extension context went away between the check and the send
    }
  }
  return verdict;
};
if (/^https?:$/.test(location.protocol)) {
  var first = look();
  if (!(first !== null && first !== void 0 && first["native"]) && (!(first !== null && first !== void 0 && first.atsKey) || first.confidence !== 'strong')) setTimeout(look, RECHECK_MS);
}
;// ./src/content/general/ats-detector.js
// Shared with the autoapply extension (@bidhub/extension-core): recognises the ATS behind an employer's own career site and
// lets the background run that ATS's existing adapter there.

/******/ })()
;