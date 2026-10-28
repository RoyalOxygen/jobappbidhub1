/******/ (() => { // webpackBootstrap
// panel-event-shield (MAIN world, document_start)
//
// Some application pages make their dialogs "modal" by installing a capture-phase listener on
// `window`/`document` that calls `event.stopPropagation()` for every interaction whose target is
// outside the dialog. The BidHub panel is injected as a separate `#bidhub-panel-host` shadow host
// (a `<body>` child, outside any page dialog), so those guards swallow the panel's clicks and key
// presses mid-capture — before they can reach the panel — making the whole panel unresponsive once
// such a dialog opens (observed on motionrecruitment.com, whose apply form is exactly this kind of
// modal).
//
// z-index / top-layer tricks cannot fix this: the panel is already painted on top and is the
// hit-test target, but the page stops the event during capture before it descends into the panel.
// The only robust fix is to make those page guards ignore events that belong to the panel, so the
// native (trusted) events flow into the panel untouched — preserving clicking AND typing.
//
// We do that by wrapping `addEventListener`/`removeEventListener` on the few document-level targets
// where such guards live (window, document, documentElement). Listeners registered there are
// wrapped so they are skipped for events whose composedPath includes the panel host. We deliberately
// do NOT patch `EventTarget.prototype`, so ordinary element listeners and per-element overhead are
// untouched. Runs in the MAIN world at document_start so the wrap is in place before the page
// registers its dialog guards.

(function () {
  var PANEL_HOST_ID = 'bidhub-panel-host';

  // Only interaction events are swallowed by modal guards; restricting to these bounds overhead and
  // never touches high-frequency events (mousemove/scroll/wheel/pointermove).
  var GUARDED_TYPES = new Set(['click', 'dblclick', 'auxclick', 'contextmenu', 'mousedown', 'mouseup', 'pointerdown', 'pointerup', 'touchstart', 'touchend', 'keydown', 'keyup', 'keypress', 'focusin', 'submit', 'input', 'change']);
  var eventTargetsPanel = function eventTargetsPanel(event) {
    try {
      var path = typeof event.composedPath === 'function' ? event.composedPath() : null;
      if (path) {
        for (var i = 0; i < path.length; i += 1) {
          var node = path[i];
          if (node && node.id === PANEL_HOST_ID) return true;
        }
        return false;
      }
    } catch (_error) {/* fall through to target check */}
    var target = event.target;
    return Boolean(target && target.id === PANEL_HOST_ID);
  };

  // Per original-listener registry so removeEventListener(originalFn) still works after wrapping.
  var wrapperRegistry = new WeakMap(); // listenerFn -> Map<typeKey, wrappedFn>

  var captureFlag = function captureFlag(options) {
    return options === true || !!options && options.capture === true;
  };
  var keyFor = function keyFor(type, options) {
    return "".concat(type, "|").concat(captureFlag(options) ? 'c' : 'b');
  };
  var wrapListener = function wrapListener(listener, type, options) {
    var perListener = wrapperRegistry.get(listener);
    if (!perListener) {
      perListener = new Map();
      wrapperRegistry.set(listener, perListener);
    }
    var key = keyFor(type, options);
    var wrapped = perListener.get(key);
    if (!wrapped) {
      wrapped = function wrapped(event) {
        // Let the panel's own events flow natively — never run the page's guard for them.
        if (eventTargetsPanel(event)) return undefined;
        return listener.apply(this, arguments);
      };
      perListener.set(key, wrapped);
    }
    return wrapped;
  };

  // `unload` is policy-gated: Chrome's unload deprecation flips the Permissions-Policy `unload`
  // default to disallowed on a growing share of installs. Registering it there does nothing but log
  // "Permissions policy violation: unload is not allowed in this document" — and Chrome pins that
  // report on the innermost stack frame, i.e. THIS wrapper, so a page/other-extension listener shows
  // up as a bh-extension runtime error (seen on origina.bamboohr.com). The listener would never fire
  // anyway, so drop it instead of forwarding: identical behavior, no misattributed report.
  var isPolicyBlockedUnload = function isPolicyBlockedUnload(type) {
    if (type !== 'unload') return false;
    try {
      var policy = document.permissionsPolicy || document.featurePolicy;
      return Boolean(policy && typeof policy.allowsFeature === 'function' && !policy.allowsFeature('unload'));
    } catch (_unused) {
      return false;
    }
  };
  var patchTarget = function patchTarget(targetObject) {
    if (!targetObject) return;
    var originalAdd = targetObject.addEventListener;
    var originalRemove = targetObject.removeEventListener;
    if (typeof originalAdd !== 'function' || originalAdd.__bidhubShielded) return;
    var patchedAdd = function patchedAdd(type, listener, options) {
      if (isPolicyBlockedUnload(type)) return undefined;
      if (typeof listener === 'function' && GUARDED_TYPES.has(type)) {
        return originalAdd.call(this, type, wrapListener(listener, type, options), options);
      }
      return originalAdd.call(this, type, listener, options);
    };
    patchedAdd.__bidhubShielded = true;
    var patchedRemove = function patchedRemove(type, listener, options) {
      if (typeof listener === 'function' && GUARDED_TYPES.has(type)) {
        var perListener = wrapperRegistry.get(listener);
        var wrapped = perListener && perListener.get(keyFor(type, options));
        if (wrapped) return originalRemove.call(this, type, wrapped, options);
      }
      return originalRemove.call(this, type, listener, options);
    };
    try {
      Object.defineProperty(targetObject, 'addEventListener', {
        value: patchedAdd,
        configurable: true,
        writable: true
      });
      Object.defineProperty(targetObject, 'removeEventListener', {
        value: patchedRemove,
        configurable: true,
        writable: true
      });
    } catch (_error) {/* leave target unpatched if it is locked down */}
  };
  patchTarget(window);
  patchTarget(document);
  patchTarget(document.documentElement);
})();
/******/ })()
;