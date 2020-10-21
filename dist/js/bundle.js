/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_jquery_flexslider_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/jquery.flexslider-min */ "./src/js/components/jquery.flexslider-min.js");
/* harmony import */ var _components_jquery_flexslider_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_jquery_flexslider_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_jquery_event_move_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/jquery.event.move.min.js */ "./src/js/components/jquery.event.move.min.js");
/* harmony import */ var _components_jquery_event_move_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_jquery_event_move_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_jquery_twentytwenty_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/jquery.twentytwenty.min.js */ "./src/js/components/jquery.twentytwenty.min.js");
/* harmony import */ var _components_jquery_twentytwenty_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_jquery_twentytwenty_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_full_image_flexslider_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/full-image-flexslider-item */ "./src/js/components/full-image-flexslider-item.js");
/* harmony import */ var _components_full_image_flexslider_item__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_full_image_flexslider_item__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/services */ "./src/js/components/services.js");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_services__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_before_and_after__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/before-and-after */ "./src/js/components/before-and-after.js");
/* harmony import */ var _components_before_and_after__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_before_and_after__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact */ "./src/js/components/contact.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_contact__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_smooth_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/smooth-scroll */ "./src/js/components/smooth-scroll.js");
/* harmony import */ var _components_smooth_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_smooth_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_news_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/news-slider */ "./src/js/components/news-slider.js");
/* harmony import */ var _components_news_slider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_news_slider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_front_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/front-page */ "./src/js/components/front-page.js");
/* harmony import */ var _components_front_page__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_front_page__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_404__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/404 */ "./src/js/components/404.js");
/* harmony import */ var _components_404__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_404__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_designer_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/designer-login */ "./src/js/components/designer-login.js");
/* harmony import */ var _components_designer_login__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_designer_login__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_product_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-slider */ "./src/js/components/product-slider.js");
/* harmony import */ var _components_product_slider__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_product_slider__WEBPACK_IMPORTED_MODULE_14__);
/** Import dependencies **/



/** Import Custom files **/














/***/ }),

/***/ "./src/js/components/404.js":
/*!**********************************!*\
  !*** ./src/js/components/404.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(document).ready(function () {
  //trigger downloads sub menu
  $('.product-404').click(function () {
    $('.downloads').removeClass('sub-menu-open');
    $('.products').toggleClass('sub-menu-open');
  }); //change product menu link on mobile

  var w = window.innerWidth;

  if (w < 1200) {
    $('.product-404').attr('href', '/products');
  }
});

/***/ }),

/***/ "./src/js/components/before-and-after.js":
/*!***********************************************!*\
  !*** ./src/js/components/before-and-after.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(document).ready(function () {
  if ($('.ba-image-comparison').length || $('.post-ba-image-comparison').length) {
    $(window).load(function () {
      $(".ba_images_to_compare").twentytwenty();
    });
  }
});

/***/ }),

/***/ "./src/js/components/contact.js":
/*!**************************************!*\
  !*** ./src/js/components/contact.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(document).ready(function () {
  var w = window.innerWidth;

  if (w < 1200) {
    $('.contact-us').click(function () {
      $('.contact-col-1').toggleClass('show-column');
    });
    $('.mobile__cross').click(function () {
      $('.contact-col-1').removeClass('show-column');
      $('.contact-col-2').removeClass('show-column');
    });
    $('.opportunities').click(function () {
      $('.contact-col-2').toggleClass('show-column');
    });
  }

  console.log(w);
});

/***/ }),

/***/ "./src/js/components/designer-login.js":
/*!*********************************************!*\
  !*** ./src/js/components/designer-login.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(document).ready(function () {
  $(".tab_content_login").hide();
  $("ul.tabs_login li:first").addClass("active_login").show();
  $(".tab_content_login:first").show();
  $("ul.tabs_login li").click(function () {
    $("ul.tabs_login li").removeClass("active_login");
    $(this).addClass("active_login");
    $(".tab_content_login").hide();
    var activeTab = $(this).find("a").attr("href");

    if ($.browser.msie) {
      $(activeTab).show();
    } else {
      $(activeTab).show();
    }

    return false;
  });
});

/***/ }),

/***/ "./src/js/components/front-page.js":
/*!*****************************************!*\
  !*** ./src/js/components/front-page.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;

function hideVideo() {
  $('#video-container').css('display', 'none');
}

function hideVideoTitles() {
  $('.video-titles').css('display', 'none');
}

setTimeout(hideVideoTitles, 4000);
setTimeout(hideVideo, 4500);

/***/ }),

/***/ "./src/js/components/full-image-flexslider-item.js":
/*!*********************************************************!*\
  !*** ./src/js/components/full-image-flexslider-item.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;

(function () {
  // store the slider in a local variable
  var $window = $(window),
      flexslider = {
    vars: {}
  }; // tiny helper function to add breakpoints

  function getGridSize() {
    return window.innerWidth < 100 ? 1 : 1;
  }

  $window.ready(function () {
    $('.full-image-item-flexslider-container').each(function () {
      $(this).find(".flexslider").flexslider({
        animation: "slide",
        slideshowSpeed: 12000,
        animationLoop: true,
        controlNav: false,
        customDirectionNav: $(this).find(".custom-navigation a"),
        minItems: getGridSize(),
        // use function to pull in initial value
        maxItems: getGridSize(),
        // use function to pull in initial value
        start: function start(slider) {
          flexslider = slider;
        }
      });
    });
  }); // check grid size on resize event

  $window.resize(function () {
    var gridSize = getGridSize();
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
})();

/***/ }),

/***/ "./src/js/components/jquery.event.move.min.js":
/*!****************************************************!*\
  !*** ./src/js/components/jquery.event.move.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function () {
  var i = Object.assign || window.jQuery && jQuery.extend,
      p = 8,
      a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
    return window.setTimeout(function () {
      e();
    }, 25);
  };

  function e(e, t) {
    t = t || {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    };
    var n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
  }

  "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e);
  var o = {
    textarea: !0,
    input: !0,
    select: !0,
    button: !0
  },
      c = {
    move: "mousemove",
    cancel: "mouseup dragstart",
    end: "mouseup"
  },
      u = {
    move: "touchmove",
    cancel: "touchend",
    end: "touchend"
  },
      r = /\s+/,
      d = {
    bubbles: !0,
    cancelable: !0
  },
      t = "function" == typeof Symbol ? Symbol("events") : {};

  function m(e) {
    return e[t] || (e[t] = {});
  }

  function v(e, t, n, o) {
    t = t.split(r);
    var i,
        a = m(e),
        c = t.length;

    function u(e) {
      n(e, o);
    }

    for (; c--;) {
      (a[i = t[c]] || (a[i] = [])).push([n, u]), e.addEventListener(i, u);
    }
  }

  function f(e, t, n) {
    t = t.split(r);
    var o,
        i,
        a,
        c = m(e),
        u = t.length;
    if (c) for (; u--;) {
      if (i = c[o = t[u]]) for (a = i.length; a--;) {
        i[a][0] === n && (e.removeEventListener(o, i[a][1]), i.splice(a, 1));
      }
    }
  }

  function g(e, t, n) {
    var o = new CustomEvent(t, d);
    n && i(o, n), e.dispatchEvent(o);
  }

  function s(e) {
    var n = e,
        o = !1,
        i = !1;

    function t(e) {
      o ? (n(), a(t), o = !(i = !0)) : i = !1;
    }

    this.kick = function (e) {
      o = !0, i || t();
    }, this.end = function (e) {
      var t = n;
      e && (i ? (n = o ? function () {
        t(), e();
      } : e, o = !0) : e());
    };
  }

  function h() {}

  function l(e) {
    e.preventDefault();
  }

  function X(e, t) {
    var n, o;
    if (e.identifiedTouch) return e.identifiedTouch(t);

    for (n = -1, o = e.length; ++n < o;) {
      if (e[n].identifier === t) return e[n];
    }
  }

  function Y(e, t) {
    var n = X(e.changedTouches, t.identifier);
    if (n && (n.pageX !== t.pageX || n.pageY !== t.pageY)) return n;
  }

  function n(e, t) {
    T(e, t, e, w);
  }

  function y(e, t) {
    w();
  }

  function w() {
    f(document, c.move, n), f(document, c.cancel, y);
  }

  function b(e) {
    f(document, u.move, e.touchmove), f(document, u.cancel, e.touchend);
  }

  function T(e, t, n, o) {
    var i,
        a,
        c,
        u,
        r,
        d,
        m,
        v,
        f,
        s = n.pageX - t.pageX,
        l = n.pageY - t.pageY;
    s * s + l * l < p * p || (a = t, c = n, u = s, r = l, d = o, m = (i = e).targetTouches, v = i.timeStamp - a.timeStamp, f = {
      altKey: i.altKey,
      ctrlKey: i.ctrlKey,
      shiftKey: i.shiftKey,
      startX: a.pageX,
      startY: a.pageY,
      distX: u,
      distY: r,
      deltaX: u,
      deltaY: r,
      pageX: c.pageX,
      pageY: c.pageY,
      velocityX: u / v,
      velocityY: r / v,
      identifier: a.identifier,
      targetTouches: m,
      finger: m ? m.length : 1,
      enableMove: function enableMove() {
        this.moveEnabled = !0, this.enableMove = h, i.preventDefault();
      }
    }, g(a.target, "movestart", f), d(a));
  }

  function E(e, t) {
    var n = t.timer;
    t.touch = e, t.timeStamp = e.timeStamp, n.kick();
  }

  function S(e, t) {
    var n = t.target,
        o = t.event,
        i = t.timer;
    f(document, c.move, E), f(document, c.end, S), K(n, o, i, function () {
      setTimeout(function () {
        f(n, "click", l);
      }, 0);
    });
  }

  function k(e, t) {
    var n,
        o = t.target,
        i = t.event,
        a = t.timer;
    X(e.changedTouches, i.identifier) && (n = t, f(document, u.move, n.activeTouchmove), f(document, u.end, n.activeTouchend), K(o, i, a));
  }

  function K(e, t, n, o) {
    n.end(function () {
      return g(e, "moveend", t), o && o();
    });
  }

  if (v(document, "mousedown", function (e) {
    var t;
    1 !== (t = e).which || t.ctrlKey || t.altKey || o[e.target.tagName.toLowerCase()] || (v(document, c.move, n, e), v(document, c.cancel, y, e));
  }), v(document, "touchstart", function (e) {
    if (!o[e.target.tagName.toLowerCase()]) {
      var t = e.changedTouches[0],
          n = {
        target: t.target,
        pageX: t.pageX,
        pageY: t.pageY,
        identifier: t.identifier,
        touchmove: function touchmove(e, t) {
          !function (e, t) {
            var n = Y(e, t);
            if (!n) return;
            T(e, t, n, b);
          }(e, t);
        },
        touchend: function touchend(e, t) {
          !function (e, t) {
            if (!X(e.changedTouches, t.identifier)) return;
            b(t);
          }(e, t);
        }
      };
      v(document, u.move, n.touchmove, n), v(document, u.cancel, n.touchend, n);
    }
  }), v(document, "movestart", function (e) {
    if (!e.defaultPrevented && e.moveEnabled) {
      var t = {
        startX: e.startX,
        startY: e.startY,
        pageX: e.pageX,
        pageY: e.pageY,
        distX: e.distX,
        distY: e.distY,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        velocityX: e.velocityX,
        velocityY: e.velocityY,
        identifier: e.identifier,
        targetTouches: e.targetTouches,
        finger: e.finger
      },
          n = {
        target: e.target,
        event: t,
        timer: new s(function (e) {
          (function (e, t, n) {
            var o = n - e.timeStamp;
            e.distX = t.pageX - e.startX, e.distY = t.pageY - e.startY, e.deltaX = t.pageX - e.pageX, e.deltaY = t.pageY - e.pageY, e.velocityX = .3 * e.velocityX + .7 * e.deltaX / o, e.velocityY = .3 * e.velocityY + .7 * e.deltaY / o, e.pageX = t.pageX, e.pageY = t.pageY;
          })(t, n.touch, n.timeStamp), g(n.target, "move", t);
        }),
        touch: void 0,
        timeStamp: e.timeStamp
      };
      void 0 === e.identifier ? (v(e.target, "click", l), v(document, c.move, E, n), v(document, c.end, S, n)) : (n.activeTouchmove = function (e, t) {
        var n, o, i, a, c;
        n = e, i = (o = t).event, a = o.timer, (c = Y(n, i)) && (n.preventDefault(), i.targetTouches = n.targetTouches, o.touch = c, o.timeStamp = n.timeStamp, a.kick());
      }, n.activeTouchend = function (e, t) {
        k(e, t);
      }, v(document, u.move, n.activeTouchmove, n), v(document, u.end, n.activeTouchend, n));
    }
  }), window.jQuery) {
    var j = "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" ");
    jQuery.event.special.movestart = {
      setup: function setup() {
        return v(this, "movestart", C), !1;
      },
      teardown: function teardown() {
        return f(this, "movestart", C), !1;
      },
      add: A
    }, jQuery.event.special.move = {
      setup: function setup() {
        return v(this, "movestart", Q), !1;
      },
      teardown: function teardown() {
        return f(this, "movestart", Q), !1;
      },
      add: A
    }, jQuery.event.special.moveend = {
      setup: function setup() {
        return v(this, "movestart", q), !1;
      },
      teardown: function teardown() {
        return f(this, "movestart", q), !1;
      },
      add: A
    };
  }

  function C(e) {
    e.enableMove();
  }

  function Q(e) {
    e.enableMove();
  }

  function q(e) {
    e.enableMove();
  }

  function A(e) {
    var o = e.handler;

    e.handler = function (e) {
      for (var t, n = j.length; n--;) {
        e[t = j[n]] = e.originalEvent[t];
      }

      o.apply(this, arguments);
    };
  }
});

/***/ }),

/***/ "./src/js/components/jquery.flexslider-min.js":
/*!****************************************************!*\
  !*** ./src/js/components/jquery.flexslider-min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * jQuery FlexSlider v2.7.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function ($) {
  var e = !0;
  $.flexslider = function (t, a) {
    var n = $(t);
    void 0 === a.rtl && "rtl" == $("html").attr("dir") && (a.rtl = !0), n.vars = $.extend({}, $.flexslider.defaults, a);
    var i = n.vars.namespace,
        r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        s = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
        o = "click touchend MSPointerUp keyup",
        l = "",
        c,
        d = "vertical" === n.vars.direction,
        u = n.vars.reverse,
        v = n.vars.itemWidth > 0,
        p = "fade" === n.vars.animation,
        m = "" !== n.vars.asNavFor,
        f = {};
    $.data(t, "flexslider", n), f = {
      init: function init() {
        n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : n.vars.rtl ? "marginRight" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function () {
          var e = document.createElement("div"),
              t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];

          for (var a in t) {
            if (void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
          }

          return !1;
        }(), n.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1, n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === $(n.vars.customDirectionNav).length && $(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function () {
          return Math.round(Math.random()) - .5;
        }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function (e) {
          var t = e.keyCode;

          if (!n.animating && (39 === t || 37 === t)) {
            var a = n.vars.rtl ? 37 === t ? n.getTarget("next") : 39 === t && n.getTarget("prev") : 39 === t ? n.getTarget("next") : 37 === t && n.getTarget("prev");
            n.flexAnimate(a, n.vars.pauseOnAction);
          }
        }), n.vars.mousewheel && n.bind("mousewheel", function (e, t, a, i) {
          e.preventDefault();
          var r = t < 0 ? n.getTarget("next") : n.getTarget("prev");
          n.flexAnimate(r, n.vars.pauseOnAction);
        }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
          n.manualPlay || n.manualPause || n.pause();
        }, function () {
          n.manualPause || n.manualPlay || n.stopped || n.play();
        }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), s && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
          n.vars.start(n);
        }, 200);
      },
      asNav: {
        setup: function setup() {
          n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), r ? (t._slider = n, n.slides.each(function () {
            var e = this;
            e._gesture = new MSGesture(), e._gesture.target = e, e.addEventListener("MSPointerDown", function (e) {
              e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId);
            }, !1), e.addEventListener("MSGestureTap", function (e) {
              e.preventDefault();
              var t = $(this),
                  a = t.index();
              $(n.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0));
            });
          })) : n.slides.on(o, function (e) {
            e.preventDefault();
            var t = $(this),
                a = t.index(),
                r;
            r = n.vars.rtl ? -1 * (t.offset().right - $(n).scrollLeft()) : t.offset().left - $(n).scrollLeft(), r <= 0 && t.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || t.hasClass(i + "active-slide") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0));
          });
        }
      },
      controlNav: {
        setup: function setup() {
          n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging();
        },
        setupPaging: function setupPaging() {
          var e = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
              t = 1,
              a,
              r;
          if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + e + '"></ol>'), n.pagingCount > 1) for (var s = 0; s < n.pagingCount; s++) {
            if (r = n.slides.eq(s), void 0 === r.attr("data-thumb-alt") && r.attr("data-thumb-alt", ""), a = $("<a></a>").attr("href", "#").text(t), "thumbnails" === n.vars.controlNav && (a = $("<img/>").attr("src", r.attr("data-thumb"))), "" !== r.attr("data-thumb-alt") && a.attr("alt", r.attr("data-thumb-alt")), "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
              var c = r.attr("data-thumbcaption");

              if ("" !== c && void 0 !== c) {
                var d = $("<span></span>").addClass(i + "caption").text(c);
                a.append(d);
              }
            }

            var u = $("<li>");
            a.appendTo(u), u.append("</li>"), n.controlNavScaffold.append(u), t++;
          }
          n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", o, function (e) {
            if (e.preventDefault(), "" === l || l === e.type) {
              var t = $(this),
                  a = n.controlNav.index(t);
              t.hasClass(i + "active") || (n.direction = a > n.currentSlide ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction));
            }

            "" === l && (l = e.type), f.setToClearWatchedEvent();
          });
        },
        setupManual: function setupManual() {
          n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(o, function (e) {
            if (e.preventDefault(), "" === l || l === e.type) {
              var t = $(this),
                  a = n.controlNav.index(t);
              t.hasClass(i + "active") || (a > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(a, n.vars.pauseOnAction));
            }

            "" === l && (l = e.type), f.setToClearWatchedEvent();
          });
        },
        set: function set() {
          var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
          n.controlNav = $("." + i + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n);
        },
        active: function active() {
          n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active");
        },
        update: function update(e, t) {
          n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append($('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(t).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(t, e) : f.controlNav.active();
        }
      },
      directionNav: {
        setup: function setup() {
          var e = $('<ul class="' + i + 'direction-nav"><li class="' + i + 'nav-prev"><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + i + 'nav-next"><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
          n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? ($(n.controlsContainer).append(e), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = $("." + i + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(o, function (e) {
            e.preventDefault();
            var t;
            "" !== l && l !== e.type || (t = $(this).hasClass(i + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(t, n.vars.pauseOnAction)), "" === l && (l = e.type), f.setToClearWatchedEvent();
          });
        },
        update: function update() {
          var e = i + "disabled";
          1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex");
        }
      },
      pausePlay: {
        setup: function setup() {
          var e = $('<div class="' + i + 'pauseplay"><a href="#"></a></div>');
          n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = $("." + i + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(o, function (e) {
            e.preventDefault(), "" !== l && l !== e.type || ($(this).hasClass(i + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === l && (l = e.type), f.setToClearWatchedEvent();
          });
        },
        update: function update(e) {
          "play" === e ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText);
        }
      },
      touch: function touch() {
        function e(e) {
          e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), w = 0, c = d ? n.h : n.w, f = Number(new Date()), l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c);
        }

        function a(e) {
          e.stopPropagation();
          var a = e.target._slider;

          if (a) {
            var n = -e.translationX,
                i = -e.translationY;
            if (w += d ? i : n, m = (a.vars.rtl ? -1 : 1) * w, x = d ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA) return void setImmediate(function () {
              t._gesture.stop();
            });
            (!x || Number(new Date()) - f > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (m = w / (0 === a.currentSlide && w < 0 || a.currentSlide === a.last && w > 0 ? Math.abs(w) / c + 2 : 1)), a.setProps(l + m, "setTouch")));
          }
        }

        function i(e) {
          e.stopPropagation();
          var t = e.target._slider;

          if (t) {
            if (t.animatingTo === t.currentSlide && !x && null !== m) {
              var a = u ? -m : m,
                  n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
              t.canAdvance(n) && (Number(new Date()) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0);
            }

            s = null, o = null, m = null, l = null, w = 0;
          }
        }

        var s,
            o,
            l,
            c,
            m,
            f,
            g,
            h,
            _S,
            x = !1,
            y = 0,
            b = 0,
            w = 0;

        r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture(), t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", i, !1)) : (g = function g(e) {
          n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), c = d ? n.h : n.w, f = Number(new Date()), y = e.touches[0].pageX, b = e.touches[0].pageY, l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c, s = d ? b : y, o = d ? y : b, t.addEventListener("touchmove", h, !1), t.addEventListener("touchend", _S, !1));
        }, h = function h(e) {
          y = e.touches[0].pageX, b = e.touches[0].pageY, m = d ? s - b : (n.vars.rtl ? -1 : 1) * (s - y), x = d ? Math.abs(m) < Math.abs(y - o) : Math.abs(m) < Math.abs(b - o);
          var t = 500;
          (!x || Number(new Date()) - f > 500) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (m /= 0 === n.currentSlide && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / c + 2 : 1), n.setProps(l + m, "setTouch")));
        }, _S = function S(e) {
          if (t.removeEventListener("touchmove", h, !1), n.animatingTo === n.currentSlide && !x && null !== m) {
            var a = u ? -m : m,
                i = a > 0 ? n.getTarget("next") : n.getTarget("prev");
            n.canAdvance(i) && (Number(new Date()) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0);
          }

          t.removeEventListener("touchend", _S, !1), s = null, o = null, m = null, l = null;
        }, t.addEventListener("touchstart", g, !1));
      },
      resize: function resize() {
        !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")));
      },
      smoothHeight: function smoothHeight(e) {
        if (!d || p) {
          var t = p ? n : n.viewport;
          e ? t.animate({
            height: n.slides.eq(n.animatingTo).innerHeight()
          }, e) : t.innerHeight(n.slides.eq(n.animatingTo).innerHeight());
        }
      },
      sync: function sync(e) {
        var t = $(n.vars.sync).data("flexslider"),
            a = n.animatingTo;

        switch (e) {
          case "animate":
            t.flexAnimate(a, n.vars.pauseOnAction, !1, !0);
            break;

          case "play":
            t.playing || t.asNav || t.play();
            break;

          case "pause":
            t.pause();
            break;
        }
      },
      uniqueID: function uniqueID(e) {
        return e.filter("[id]").add(e.find("[id]")).each(function () {
          var e = $(this);
          e.attr("id", e.attr("id") + "_clone");
        }), e;
      },
      pauseInvisible: {
        visProp: null,
        init: function init() {
          var e = f.pauseInvisible.getHiddenProp();

          if (e) {
            var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
            document.addEventListener(t, function () {
              f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play();
            });
          }
        },
        isHidden: function isHidden() {
          var e = f.pauseInvisible.getHiddenProp();
          return !!e && document[e];
        },
        getHiddenProp: function getHiddenProp() {
          var e = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) return "hidden";

          for (var t = 0; t < e.length; t++) {
            if (e[t] + "Hidden" in document) return e[t] + "Hidden";
          }

          return null;
        }
      },
      setToClearWatchedEvent: function setToClearWatchedEvent() {
        clearTimeout(c), c = setTimeout(function () {
          l = "";
        }, 3e3);
      }
    }, n.flexAnimate = function (e, t, a, r, o) {
      if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, o) || a) && n.is(":visible")) {
        if (m && r) {
          var l = $(n.vars.asNavFor).data("flexslider");
          if (n.atEnd = 0 === e || e === n.count - 1, l.flexAnimate(e, !0, !1, !0, o), n.direction = n.currentItem < e ? "next" : "prev", l.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), !1;
          n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), e = Math.floor(e / n.visible);
        }

        if (n.animating = !0, n.animatingTo = e, t && n.pause(), n.vars.before(n), n.syncExists && !o && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && f.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) s ? (n.slides.eq(n.currentSlide).css({
          opacity: 0,
          zIndex: 1
        }), n.slides.eq(e).css({
          opacity: 1,
          zIndex: 2
        }), n.wrapup(c)) : (n.slides.eq(n.currentSlide).css({
          zIndex: 1
        }).animate({
          opacity: 0
        }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
          zIndex: 2
        }).animate({
          opacity: 1
        }, n.vars.animationSpeed, n.vars.easing, n.wrapup));else {
          var c = d ? n.slides.filter(":first").height() : n.computedW,
              g,
              h,
              S;
          v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * c : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * c : u ? (n.count - 1 - e + n.cloneOffset) * c : (e + n.cloneOffset) * c, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
            clearTimeout(n.ensureAnimationEnd), n.wrapup(c);
          }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
            n.wrapup(c);
          }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
            n.wrapup(c);
          });
        }
        n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed);
      }
    }, n.wrapup = function (e) {
      p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n);
    }, n.animateSlides = function () {
      !n.animating && e && n.flexAnimate(n.getTarget("next"));
    }, n.pause = function () {
      clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause");
    }, n.play = function () {
      n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play");
    }, n.stop = function () {
      n.pause(), n.stopped = !0;
    }, n.canAdvance = function (e, t) {
      var a = m ? n.pagingCount - 1 : n.last;
      return !!t || !(!m || n.currentItem !== n.count - 1 || 0 !== e || "prev" !== n.direction) || (!m || 0 !== n.currentItem || e !== n.pagingCount - 1 || "next" === n.direction) && !(e === n.currentSlide && !m) && (!!n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || e !== a || "next" === n.direction) && (!n.atEnd || n.currentSlide !== a || 0 !== e || "next" !== n.direction));
    }, n.getTarget = function (e) {
      return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1;
    }, n.setProps = function (e, t, a) {
      var i = function () {
        var a = e || (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo;
        return function () {
          if (v) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;

          switch (t) {
            case "setTotal":
              return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;

            case "setTouch":
              return e;

            case "jumpEnd":
              return u ? e : n.count * e;

            case "jumpStart":
              return u ? n.count * e : e;

            default:
              return e;
          }
        }() * (n.vars.rtl ? 1 : -1) + "px";
      }();

      n.transitions && (i = n.isFirefox ? d ? "translate3d(0," + i + ",0)" : "translate3d(" + parseInt(i) + "px,0,0)" : d ? "translate3d(0," + i + ",0)" : "translate3d(" + (n.vars.rtl ? -1 : 1) * parseInt(i) + "px,0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i);
    }, n.setup = function (e) {
      if (p) n.vars.rtl ? n.slides.css({
        width: "100%",
        "float": "right",
        marginLeft: "-100%",
        position: "relative"
      }) : n.slides.css({
        width: "100%",
        "float": "left",
        marginRight: "-100%",
        position: "relative"
      }), "init" === e && (s ? n.slides.css({
        opacity: 0,
        display: "block",
        webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
        zIndex: 1
      }).eq(n.currentSlide).css({
        opacity: 1,
        zIndex: 2
      }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
        opacity: 0,
        display: "block",
        zIndex: 1
      }).eq(n.currentSlide).css({
        zIndex: 2
      }).css({
        opacity: 1
      }) : n.slides.css({
        opacity: 0,
        display: "block",
        zIndex: 1
      }).eq(n.currentSlide).css({
        zIndex: 2
      }).animate({
        opacity: 1
      }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight();else {
        var t, a;
        "init" === e && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
          overflow: "hidden",
          position: "relative"
        }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (a = $.makeArray(n.slides).reverse(), n.slides = $(a), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = $(n.vars.selector, n), t = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
          n.newSlides.css({
            display: "block"
          }), n.doMath(), n.viewport.height(n.h), n.setProps(t * n.h, "init");
        }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(t * n.computedW, "init"), setTimeout(function () {
          n.doMath(), n.vars.rtl && n.isFirefox ? n.newSlides.css({
            width: n.computedW,
            marginRight: n.computedM,
            "float": "right",
            display: "block"
          }) : n.newSlides.css({
            width: n.computedW,
            marginRight: n.computedM,
            "float": "left",
            display: "block"
          }), n.vars.smoothHeight && f.smoothHeight();
        }, "init" === e ? 100 : 0));
      }
      v || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n);
    }, n.doMath = function () {
      var e = n.slides.first(),
          t = n.vars.itemMargin,
          a = n.vars.minItems,
          i = n.vars.maxItems;
      n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.isFirefox && (n.w = n.width()), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.itemM = t, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM;
    }, n.update = function (e, t) {
      n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update();
    }, n.addSlide = function (e, t) {
      var a = $(e);
      n.count += 1, n.last = n.count - 1, d && u ? void 0 !== t ? n.slides.eq(n.count - t).after(a) : n.container.prepend(a) : void 0 !== t ? n.slides.eq(t).before(a) : n.container.append(a), n.update(t, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n);
    }, n.removeSlide = function (e) {
      var t = isNaN(e) ? n.slides.index($(e)) : e;
      n.count -= 1, n.last = n.count - 1, isNaN(e) ? $(e, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(t, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n);
    }, f.init();
  }, $(window).blur(function (t) {
    e = !1;
  }).focus(function (t) {
    e = !0;
  }), $.flexslider.defaults = {
    namespace: "flex-",
    selector: ".slides > li",
    animation: "fade",
    easing: "swing",
    direction: "horizontal",
    reverse: !1,
    animationLoop: !0,
    smoothHeight: !1,
    startAt: 0,
    slideshow: !0,
    slideshowSpeed: 7e3,
    animationSpeed: 600,
    initDelay: 0,
    randomize: !1,
    fadeFirstSlide: !0,
    thumbCaptions: !1,
    pauseOnAction: !0,
    pauseOnHover: !1,
    pauseInvisible: !0,
    useCSS: !0,
    touch: !0,
    video: !1,
    controlNav: !0,
    directionNav: !0,
    prevText: "Previous",
    nextText: "Next",
    keyboard: !0,
    multipleKeyboard: !1,
    mousewheel: !1,
    pausePlay: !1,
    pauseText: "Pause",
    playText: "Play",
    controlsContainer: "",
    manualControls: "",
    customDirectionNav: "",
    sync: "",
    asNavFor: "",
    itemWidth: 0,
    itemMargin: 0,
    minItems: 1,
    maxItems: 0,
    move: 0,
    allowOneSlide: !0,
    isFirefox: !1,
    start: function start() {},
    before: function before() {},
    after: function after() {},
    end: function end() {},
    added: function added() {},
    removed: function removed() {},
    init: function init() {},
    rtl: !1
  }, $.fn.flexslider = function (e) {
    if (void 0 === e && (e = {}), "object" == _typeof(e)) return this.each(function () {
      var t = $(this),
          a = e.selector ? e.selector : ".slides > li",
          n = t.find(a);
      1 === n.length && !1 === e.allowOneSlide || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e);
    });
    var t = $(this).data("flexslider");

    switch (e) {
      case "play":
        t.play();
        break;

      case "pause":
        t.pause();
        break;

      case "stop":
        t.stop();
        break;

      case "next":
        t.flexAnimate(t.getTarget("next"), !0);
        break;

      case "prev":
      case "previous":
        t.flexAnimate(t.getTarget("prev"), !0);
        break;

      default:
        "number" == typeof e && t.flexAnimate(e, !0);
    }
  };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/components/jquery.twentytwenty.min.js":
/*!******************************************************!*\
  !*** ./src/js/components/jquery.twentytwenty.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (g) {
  g.fn.twentytwenty = function (m) {
    m = g.extend({
      default_offset_pct: .5,
      orientation: "horizontal",
      before_label: "Before",
      after_label: "After",
      no_overlay: !1,
      move_slider_on_hover: !1,
      move_with_handle_only: !0,
      click_to_move: !1
    }, m);
    return this.each(function () {
      var e = m.default_offset_pct,
          s = g(this),
          r = m.orientation,
          t = "vertical" === r ? "down" : "left",
          n = "vertical" === r ? "up" : "right";

      if (s.wrap("<div class='twentytwenty-wrapper twentytwenty-" + r + "'></div>"), !m.no_overlay) {
        s.append("<div class='twentytwenty-overlay'></div>");
        var a = s.find(".twentytwenty-overlay");
        a.append("<div class='twentytwenty-before-label' data-content='" + m.before_label + "'></div>"), a.append("<div class='twentytwenty-after-label' data-content='" + m.after_label + "'></div>");
      }

      var c = s.find("img:first"),
          l = s.find("img:last");
      s.append("<div class='twentytwenty-handle'></div>");
      var d = s.find(".twentytwenty-handle");
      d.append("<span class='twentytwenty-" + t + "-arrow'></span>"), d.append("<span class='twentytwenty-" + n + "-arrow'></span>"), s.addClass("twentytwenty-container"), c.addClass("twentytwenty-before"), l.addClass("twentytwenty-after");

      function i(t) {
        var e,
            n,
            a,
            i,
            o = (e = t, n = c.width(), a = c.height(), {
          w: n + "px",
          h: a + "px",
          cw: e * n + "px",
          ch: e * a + "px"
        });
        d.css("vertical" === r ? "top" : "left", "vertical" === r ? o.ch : o.cw), i = o, "vertical" === r ? (c.css("clip", "rect(0," + i.w + "," + i.ch + ",0)"), l.css("clip", "rect(" + i.ch + "," + i.w + "," + i.h + ",0)")) : (c.css("clip", "rect(0," + i.cw + "," + i.h + ",0)"), l.css("clip", "rect(0," + i.w + "," + i.h + "," + i.cw + ")")), s.css("height", i.h);
      }

      function o(t, e) {
        var n, a, i;
        return n = "vertical" === r ? (e - y) / u : (t - p) / h, a = 0, i = 1, Math.max(a, Math.min(i, n));
      }

      g(window).on("resize.twentytwenty", function (t) {
        i(e);
      });

      function w(t) {
        (t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY) && "vertical" !== r ? t.preventDefault() : (t.distX < t.distY && t.distX < -t.distY || t.distX > t.distY && t.distX > -t.distY) && "vertical" === r && t.preventDefault(), s.addClass("active"), p = s.offset().left, y = s.offset().top, h = c.width(), u = c.height();
      }

      function f(t) {
        s.hasClass("active") && (e = o(t.pageX, t.pageY), i(e));
      }

      function v() {
        s.removeClass("active");
      }

      var p = 0,
          y = 0,
          h = 0,
          u = 0,
          _ = m.move_with_handle_only ? d : s;

      _.on("movestart", w), _.on("move", f), _.on("moveend", v), m.move_slider_on_hover && (s.on("mouseenter", w), s.on("mousemove", f), s.on("mouseleave", v)), d.on("touchmove", function (t) {
        t.preventDefault();
      }), s.find("img").on("mousedown", function (t) {
        t.preventDefault();
      }), m.click_to_move && s.on("click", function (t) {
        p = s.offset().left, y = s.offset().top, h = c.width(), u = c.height(), e = o(t.pageX, t.pageY), i(e);
      }), g(window).trigger("resize.twentytwenty");
    });
  };
}(jQuery);

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(document).ready(function () {
  $('#menu-open').click(function () {
    $('#menu-open span').toggleClass('open');
    $('.nav').slideToggle('slow');
  }); //products sub menu

  $('.products-menu-link>a').click(function () {
    $('.downloads').removeClass('sub-menu-open');
    $('.products').toggleClass('sub-menu-open');
  }); //downloads sub menu

  $('.download-menu-link').click(function () {
    $('.products').removeClass('sub-menu-open');
    $('.downloads').toggleClass('sub-menu-open');
  }); //change product menu link on mobile

  var w = window.innerWidth;

  if (w < 1200) {
    $('.products-menu-link>a').attr('href', '/products');
    $('.download-menu-link>a').attr('href', '/downloads');
  } //collapsible menus function


  function setup_collapsible_submenus() {
    var $menu = $('#mobile_menu'),
        top_level_link = '#mobile_menu .menu-item-has-children > a';
    console.log($menu);
    $menu.find('a').each(function () {
      $(this).off('click');

      if ($(this).is(top_level_link)) {
        $(this).attr('href', '#');
      }

      if (!$(this).siblings('.sub-menu').length) {
        $(this).on('click', function (event) {
          $(this).parents('.menu-button').trigger('click');
        });
      } else {
        $(this).on('click', function (event) {
          event.preventDefault();
          $(this).parent().toggleClass('visible');
        });
      }
    });
  }

  $(window).load(function () {
    setTimeout(function () {
      setup_collapsible_submenus();
    }, 700);
  });
});

/***/ }),

/***/ "./src/js/components/news-slider.js":
/*!******************************************!*\
  !*** ./src/js/components/news-slider.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(window).load(function () {
  $('.news-slider').flexslider({
    animation: "fade",
    slideshowSpeed: 7000,
    animationSpeed: 600,
    animationLoop: true,
    pauseOnAction: false,
    //controlNav: true,  
    rtl: true,
    customDirectionNav: $(".custom-navigation a")
  });
});

/***/ }),

/***/ "./src/js/components/product-slider.js":
/*!*********************************************!*\
  !*** ./src/js/components/product-slider.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(window).load(function () {
  $('.product-slider').flexslider({
    animation: "fade",
    //slideshowSpeed: 7000,
    animationSpeed: 600,
    animationLoop: false,
    pauseOnAction: false,
    controlNav: true,
    rtl: true,
    customDirectionNav: $(".custom-navigation a")
  });
});

/***/ }),

/***/ "./src/js/components/services.js":
/*!***************************************!*\
  !*** ./src/js/components/services.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(document).ready(function () {
  $('.before').mouseenter(function () {
    $('.before').fadeOut(1500);
  });
});

if ($('.image-comparison').length) {
  $(window).load(function () {
    $("#images_to_compare").twentytwenty();
  });
}

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(window).load(function () {
  $('.flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 7000,
    animationSpeed: 600,
    animationLoop: true,
    controlNav: true,
    rtl: true
  });
});

/***/ }),

/***/ "./src/js/components/smooth-scroll.js":
/*!********************************************!*\
  !*** ./src/js/components/smooth-scroll.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//add smooth scroll to all links
var $ = jQuery;
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault(); // Store hash

      var hash = this.hash; // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvNDA0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9kZXNpZ25lci1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mcm9udC1wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Z1bGwtaW1hZ2UtZmxleHNsaWRlci1pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2pxdWVyeS5ldmVudC5tb3ZlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9qcXVlcnkuZmxleHNsaWRlci1taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvanF1ZXJ5LnR3ZW50eXR3ZW50eS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9uZXdzLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wcm9kdWN0LXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc21vb3RoLXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImdsb2JhbCIsInVuZGVmaW5lZCIsInNldEltbWVkaWF0ZSIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiZG9jIiwiZG9jdW1lbnQiLCJyZWdpc3RlckltbWVkaWF0ZSIsImNhbGxiYWNrIiwiRnVuY3Rpb24iLCJ0YXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJoYW5kbGUiLCJydW5JZlByZXNlbnQiLCJpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbiIsImNhblVzZVBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwicG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyIsIm9sZE9uTWVzc2FnZSIsIm9ubWVzc2FnZSIsImluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uIiwibWVzc2FnZVByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJldmVudCIsInNvdXJjZSIsImRhdGEiLCJpbmRleE9mIiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbiIsImNoYW5uZWwiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwicG9ydDIiLCJpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uIiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJ0b1N0cmluZyIsInNlbGYiLCJzY29wZSIsIndpbmRvdyIsIlRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsImlkIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJpdGVtIiwibXNlY3MiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwiYWN0aXZlIiwib25UaW1lb3V0IiwiX29uVGltZW91dCIsInJlcXVpcmUiLCJnIiwiJCIsImpRdWVyeSIsInJlYWR5IiwiY2xpY2siLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwidyIsImlubmVyV2lkdGgiLCJhdHRyIiwibG9hZCIsInR3ZW50eXR3ZW50eSIsImNvbnNvbGUiLCJsb2ciLCJoaWRlIiwiYWRkQ2xhc3MiLCJzaG93IiwiYWN0aXZlVGFiIiwiZmluZCIsIm1zaWUiLCJoaWRlVmlkZW8iLCJjc3MiLCJoaWRlVmlkZW9UaXRsZXMiLCIkd2luZG93IiwiZmxleHNsaWRlciIsInZhcnMiLCJnZXRHcmlkU2l6ZSIsImVhY2giLCJhbmltYXRpb24iLCJzbGlkZXNob3dTcGVlZCIsImFuaW1hdGlvbkxvb3AiLCJjb250cm9sTmF2IiwiY3VzdG9tRGlyZWN0aW9uTmF2IiwibWluSXRlbXMiLCJtYXhJdGVtcyIsInN0YXJ0Iiwic2xpZGVyIiwicmVzaXplIiwiZ3JpZFNpemUiLCJkZWZpbmUiLCJhc3NpZ24iLCJleHRlbmQiLCJwIiwiYSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsIm4iLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIkN1c3RvbUV2ZW50IiwiRXZlbnQiLCJvIiwidGV4dGFyZWEiLCJpbnB1dCIsInNlbGVjdCIsImJ1dHRvbiIsImMiLCJtb3ZlIiwiY2FuY2VsIiwiZW5kIiwidSIsInIiLCJkIiwiU3ltYm9sIiwibSIsInYiLCJzcGxpdCIsImYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiZGlzcGF0Y2hFdmVudCIsInMiLCJraWNrIiwiaCIsImwiLCJwcmV2ZW50RGVmYXVsdCIsIlgiLCJpZGVudGlmaWVkVG91Y2giLCJpZGVudGlmaWVyIiwiWSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIlQiLCJ5IiwiYiIsInRvdWNobW92ZSIsInRvdWNoZW5kIiwidGFyZ2V0VG91Y2hlcyIsInRpbWVTdGFtcCIsImFsdEtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsInN0YXJ0WCIsInN0YXJ0WSIsImRpc3RYIiwiZGlzdFkiLCJkZWx0YVgiLCJkZWx0YVkiLCJ2ZWxvY2l0eVgiLCJ2ZWxvY2l0eVkiLCJmaW5nZXIiLCJlbmFibGVNb3ZlIiwibW92ZUVuYWJsZWQiLCJ0YXJnZXQiLCJFIiwidGltZXIiLCJ0b3VjaCIsIlMiLCJLIiwiayIsImFjdGl2ZVRvdWNobW92ZSIsImFjdGl2ZVRvdWNoZW5kIiwid2hpY2giLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkZWZhdWx0UHJldmVudGVkIiwiaiIsInNwZWNpYWwiLCJtb3Zlc3RhcnQiLCJzZXR1cCIsIkMiLCJ0ZWFyZG93biIsImFkZCIsIkEiLCJRIiwibW92ZWVuZCIsInEiLCJoYW5kbGVyIiwib3JpZ2luYWxFdmVudCIsInJ0bCIsImRlZmF1bHRzIiwibmFtZXNwYWNlIiwibmF2aWdhdG9yIiwibXNQb2ludGVyRW5hYmxlZCIsIk1TR2VzdHVyZSIsIkRvY3VtZW50VG91Y2giLCJkaXJlY3Rpb24iLCJyZXZlcnNlIiwiaXRlbVdpZHRoIiwiYXNOYXZGb3IiLCJpbml0IiwiYW5pbWF0aW5nIiwiY3VycmVudFNsaWRlIiwicGFyc2VJbnQiLCJzdGFydEF0IiwiaXNOYU4iLCJhbmltYXRpbmdUbyIsImF0RW5kIiwibGFzdCIsImNvbnRhaW5lclNlbGVjdG9yIiwic2VsZWN0b3IiLCJzdWJzdHIiLCJzZWFyY2giLCJzbGlkZXMiLCJjb250YWluZXIiLCJjb3VudCIsInN5bmNFeGlzdHMiLCJzeW5jIiwicHJvcCIsIm1hbnVhbFBhdXNlIiwic3RvcHBlZCIsInN0YXJ0ZWQiLCJzdGFydFRpbWVvdXQiLCJ0cmFuc2l0aW9ucyIsInZpZGVvIiwidXNlQ1NTIiwic3R5bGUiLCJwZngiLCJyZXBsYWNlIiwiaXNGaXJlZm94IiwidXNlckFnZW50IiwiZW5zdXJlQW5pbWF0aW9uRW5kIiwiY29udHJvbHNDb250YWluZXIiLCJtYW51YWxDb250cm9scyIsInJhbmRvbWl6ZSIsInNvcnQiLCJyb3VuZCIsImVtcHR5IiwiYXBwZW5kIiwiZG9NYXRoIiwiZGlyZWN0aW9uTmF2Iiwia2V5Ym9hcmQiLCJtdWx0aXBsZUtleWJvYXJkIiwiYmluZCIsImtleUNvZGUiLCJnZXRUYXJnZXQiLCJmbGV4QW5pbWF0ZSIsInBhdXNlT25BY3Rpb24iLCJtb3VzZXdoZWVsIiwicGF1c2VQbGF5Iiwic2xpZGVzaG93IiwicGF1c2VJbnZpc2libGUiLCJwYXVzZU9uSG92ZXIiLCJob3ZlciIsIm1hbnVhbFBsYXkiLCJwYXVzZSIsInBsYXkiLCJpc0hpZGRlbiIsImluaXREZWxheSIsImFzTmF2Iiwic21vb3RoSGVpZ2h0IiwiZmxvb3IiLCJjdXJyZW50SXRlbSIsImVxIiwiX3NsaWRlciIsIl9nZXN0dXJlIiwiY3VycmVudFRhcmdldCIsImFkZFBvaW50ZXIiLCJwb2ludGVySWQiLCJpbmRleCIsImhhc0NsYXNzIiwib2Zmc2V0IiwicmlnaHQiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNldHVwTWFudWFsIiwic2V0dXBQYWdpbmciLCJjb250cm9sTmF2U2NhZmZvbGQiLCJwYWdpbmdDb3VudCIsInRleHQiLCJ0aHVtYkNhcHRpb25zIiwiYXBwZW5kVG8iLCJzZXQiLCJkZWxlZ2F0ZSIsInR5cGUiLCJzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50IiwidXBkYXRlIiwicmVtb3ZlIiwiY2xvc2VzdCIsInByZXZUZXh0IiwibmV4dFRleHQiLCJyZW1vdmVBdHRyIiwiZmlsdGVyIiwicGxheVRleHQiLCJwYXVzZVRleHQiLCJzdG9wUHJvcGFnYXRpb24iLCJOdW1iZXIiLCJEYXRlIiwibGltaXQiLCJpdGVtVyIsIml0ZW1NYXJnaW4iLCJjbG9uZU9mZnNldCIsInRyYW5zbGF0aW9uWCIsInRyYW5zbGF0aW9uWSIsIngiLCJhYnMiLCJNU0dFU1RVUkVfRkxBR19JTkVSVElBIiwic3RvcCIsInNldFByb3BzIiwiY2FuQWR2YW5jZSIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaGVzIiwiaXMiLCJ3aWR0aCIsImNvbXB1dGVkVyIsInZpZXdwb3J0IiwiaGVpZ2h0IiwibmV3U2xpZGVzIiwiYW5pbWF0ZSIsImlubmVySGVpZ2h0IiwicGxheWluZyIsInVuaXF1ZUlEIiwidmlzUHJvcCIsImdldEhpZGRlblByb3AiLCJjZWlsIiwidmlzaWJsZSIsImJlZm9yZSIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJ3cmFwdXAiLCJhbmltYXRpb25TcGVlZCIsImVhc2luZyIsInVuYmluZCIsImFmdGVyIiwiYW5pbWF0ZVNsaWRlcyIsImFuaW1hdGVkU2xpZGVzIiwibWFyZ2luTGVmdCIsInBvc2l0aW9uIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5Iiwid2Via2l0VHJhbnNpdGlvbiIsImZhZGVGaXJzdFNsaWRlIiwib3ZlcmZsb3ciLCJjbG9uZUNvdW50IiwibWFrZUFycmF5IiwiZmlyc3QiLCJjbG9uZSIsInByZXBlbmQiLCJjb21wdXRlZE0iLCJib3hQYWRkaW5nIiwib3V0ZXJXaWR0aCIsIml0ZW1UIiwiaXRlbU0iLCJtaW5XIiwibWF4VyIsImFkZFNsaWRlIiwiYWRkZWQiLCJyZW1vdmVTbGlkZSIsInJlbW92ZWQiLCJibHVyIiwiZm9jdXMiLCJhbGxvd09uZVNsaWRlIiwiZm4iLCJmYWRlSW4iLCJkZWZhdWx0X29mZnNldF9wY3QiLCJvcmllbnRhdGlvbiIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSIsIm1vdmVfc2xpZGVyX29uX2hvdmVyIiwibW92ZV93aXRoX2hhbmRsZV9vbmx5IiwiY2xpY2tfdG9fbW92ZSIsIndyYXAiLCJjdyIsImNoIiwibWF4IiwibWluIiwidG9wIiwiXyIsInRyaWdnZXIiLCJzbGlkZVRvZ2dsZSIsInNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzIiwiJG1lbnUiLCJ0b3BfbGV2ZWxfbGluayIsInNpYmxpbmdzIiwicGFyZW50cyIsInBhcmVudCIsIm1vdXNlZW50ZXIiLCJmYWRlT3V0IiwiaGFzaCIsInNjcm9sbFRvcCIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJQSxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUEvQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUMsZ0JBQUo7QUFDQSxJQUFJQyxrQkFBSjs7QUFFQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUN4QixRQUFNLElBQUlDLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0g7O0FBQ0QsU0FBU0MsbUJBQVQsR0FBZ0M7QUFDNUIsUUFBTSxJQUFJRCxLQUFKLENBQVUsbUNBQVYsQ0FBTjtBQUNIOztBQUNBLGFBQVk7QUFDVCxNQUFJO0FBQ0EsUUFBSSxPQUFPRSxVQUFQLEtBQXNCLFVBQTFCLEVBQXND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QSxJQUFJeEksQ0FBQyxHQUFHQyxNQUFSO0FBRUFELENBQUMsQ0FBQ3RFLFFBQUQsQ0FBRCxDQUFZd0UsS0FBWixDQUFrQixZQUFVO0FBQzFCO0FBQ0FGLEdBQUMsQ0FBQyxHQUFELENBQUQsQ0FBTzdGLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVMyQyxLQUFULEVBQWdCO0FBRWpDO0FBQ0EsUUFBSSxLQUFLa1ksSUFBTCxLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCO0FBQ0FsWSxXQUFLLENBQUNtSSxjQUFOLEdBRm9CLENBSXBCOztBQUNBLFVBQUkrUCxJQUFJLEdBQUcsS0FBS0EsSUFBaEIsQ0FMb0IsQ0FPcEI7QUFDQTs7QUFDQWhWLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J5USxPQUFoQixDQUF3QjtBQUN0QndFLGlCQUFTLEVBQUVqVixDQUFDLENBQUNnVixJQUFELENBQUQsQ0FBUXRILE1BQVIsR0FBaUIwRztBQUROLE9BQXhCLEVBRUcsR0FGSCxFQUVRLFlBQVU7QUFFaEI7QUFDQTNWLGNBQU0sQ0FBQ3lXLFFBQVAsQ0FBZ0JGLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNELE9BTkQ7QUFPRCxLQW5CZ0MsQ0FtQi9COztBQUNILEdBcEJEO0FBcUJELENBdkJELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKiovXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS5mbGV4c2xpZGVyLW1pbic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS5ldmVudC5tb3ZlLm1pbi5qcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS50d2VudHl0d2VudHkubWluLmpzJztcclxuXHJcbi8qKiBJbXBvcnQgQ3VzdG9tIGZpbGVzICoqL1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tZW51JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZnVsbC1pbWFnZS1mbGV4c2xpZGVyLWl0ZW0nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZXJ2aWNlcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jb250YWN0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc21vb3RoLXNjcm9sbCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL25ld3Mtc2xpZGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZnJvbnQtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzLzQwNCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2Rlc2lnbmVyLWxvZ2luJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvZHVjdC1zbGlkZXInOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy90cmlnZ2VyIGRvd25sb2FkcyBzdWIgbWVudVxyXG4gICAgJCgnLnByb2R1Y3QtNDA0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmRvd25sb2FkcycpLnJlbW92ZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzJykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvL2NoYW5nZSBwcm9kdWN0IG1lbnUgbGluayBvbiBtb2JpbGVcclxuXHJcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIGlmKHcgPCAxMjAwKSB7XHJcbiAgICAgICQoJy5wcm9kdWN0LTQwNCcpLmF0dHIoJ2hyZWYnLCAnL3Byb2R1Y3RzJyk7XHJcbiAgICB9IFxyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdGlmKCQoJy5iYS1pbWFnZS1jb21wYXJpc29uJykubGVuZ3RoIHx8ICQoJy5wb3N0LWJhLWltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGgpIHtcclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIi5iYV9pbWFnZXNfdG9fY29tcGFyZVwiKS50d2VudHl0d2VudHkoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7ICAgXHJcbiAgICBpZih3IDwgMTIwMCkge1xyXG4gICAgICAgICQoJy5jb250YWN0LXVzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmNvbnRhY3QtY29sLTEnKS50b2dnbGVDbGFzcygnc2hvdy1jb2x1bW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcubW9iaWxlX19jcm9zcycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5jb250YWN0LWNvbC0xJykucmVtb3ZlQ2xhc3MoJ3Nob3ctY29sdW1uJyk7XHJcbiAgICAgICAgJCgnLmNvbnRhY3QtY29sLTInKS5yZW1vdmVDbGFzcygnc2hvdy1jb2x1bW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcub3Bwb3J0dW5pdGllcycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5jb250YWN0LWNvbC0yJykudG9nZ2xlQ2xhc3MoJ3Nob3ctY29sdW1uJyk7XHJcbiAgICB9KTsgICAgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh3KTtcclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLnRhYl9jb250ZW50X2xvZ2luXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwidWwudGFic19sb2dpbiBsaTpmaXJzdFwiKS5hZGRDbGFzcyhcImFjdGl2ZV9sb2dpblwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIi50YWJfY29udGVudF9sb2dpbjpmaXJzdFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcInVsLnRhYnNfbG9naW4gbGlcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoXCJ1bC50YWJzX2xvZ2luIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlX2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlX2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnRhYl9jb250ZW50X2xvZ2luXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZVRhYiA9ICQodGhpcykuZmluZChcImFcIikuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGlmICgkLmJyb3dzZXIubXNpZSkgeyQoYWN0aXZlVGFiKS5zaG93KCk7fVxyXG4gICAgICAgICAgICBlbHNlIHskKGFjdGl2ZVRhYikuc2hvdygpO31cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IiwiY29uc3QgJCA9IGpRdWVyeTtcclxuXHJcbmZ1bmN0aW9uIGhpZGVWaWRlbygpIHtcclxuICAgICQoJyN2aWRlby1jb250YWluZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVmlkZW9UaXRsZXMoKSB7XHJcbiAgICAkKCcudmlkZW8tdGl0bGVzJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxufVxyXG5zZXRUaW1lb3V0KGhpZGVWaWRlb1RpdGxlcywgNDAwMCk7XHJcbnNldFRpbWVvdXQoaGlkZVZpZGVvLCA0NTAwKTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcblx0Ly8gc3RvcmUgdGhlIHNsaWRlciBpbiBhIGxvY2FsIHZhcmlhYmxlXHJcblx0dmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXHJcblx0XHRmbGV4c2xpZGVyID0geyB2YXJzOnt9IH07XHJcblxyXG5cdC8vIHRpbnkgaGVscGVyIGZ1bmN0aW9uIHRvIGFkZCBicmVha3BvaW50c1xyXG5cdGZ1bmN0aW9uIGdldEdyaWRTaXplKCkge1xyXG5cdFx0cmV0dXJuICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMCApID8gMSA6IDE7XHJcblx0fVxyXG5cclxuXHQkd2luZG93LnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdCAkKCcuZnVsbC1pbWFnZS1pdGVtLWZsZXhzbGlkZXItY29udGFpbmVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdCQodGhpcykuZmluZChcIi5mbGV4c2xpZGVyXCIpLmZsZXhzbGlkZXIoe1xyXG5cdFx0XHRcdGFuaW1hdGlvbjogXCJzbGlkZVwiLFxyXG5cdFx0XHRcdHNsaWRlc2hvd1NwZWVkOiAxMjAwMCxcclxuXHRcdFx0XHRhbmltYXRpb25Mb29wOiB0cnVlLFxyXG5cdFx0XHRcdGNvbnRyb2xOYXY6IGZhbHNlLFxyXG5cdFx0XHRcdGN1c3RvbURpcmVjdGlvbk5hdjogJCh0aGlzKS5maW5kKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIiksXHJcblx0XHRcdFx0bWluSXRlbXM6IGdldEdyaWRTaXplKCksIC8vIHVzZSBmdW5jdGlvbiB0byBwdWxsIGluIGluaXRpYWwgdmFsdWVcclxuXHRcdFx0XHRtYXhJdGVtczogZ2V0R3JpZFNpemUoKSwgLy8gdXNlIGZ1bmN0aW9uIHRvIHB1bGwgaW4gaW5pdGlhbCB2YWx1ZVxyXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbihzbGlkZXIpIHtcclxuXHRcdFx0XHRcdGZsZXhzbGlkZXIgPSBzbGlkZXI7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHQvLyBjaGVjayBncmlkIHNpemUgb24gcmVzaXplIGV2ZW50XHJcblx0JHdpbmRvdy5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgZ3JpZFNpemUgPSBnZXRHcmlkU2l6ZSgpO1xyXG5cdFx0ZmxleHNsaWRlci52YXJzLm1pbkl0ZW1zID0gZ3JpZFNpemU7XHJcblx0XHRmbGV4c2xpZGVyLnZhcnMubWF4SXRlbXMgPSBncmlkU2l6ZTtcclxuXHR9KTtcdFxyXG59KCkpOyIsIiFmdW5jdGlvbihlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm51bGwhPT1tb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWU6ZSgpfShmdW5jdGlvbigpe3ZhciBpPU9iamVjdC5hc3NpZ258fHdpbmRvdy5qUXVlcnkmJmpRdWVyeS5leHRlbmQscD04LGE9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSx0KXtyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKCl9LDI1KX07ZnVuY3Rpb24gZShlLHQpe3Q9dHx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBuLmluaXRDdXN0b21FdmVudChlLHQuYnViYmxlcyx0LmNhbmNlbGFibGUsdC5kZXRhaWwpLG59XCJmdW5jdGlvblwiIT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50JiYoZS5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSx3aW5kb3cuQ3VzdG9tRXZlbnQ9ZSk7dmFyIG89e3RleHRhcmVhOiEwLGlucHV0OiEwLHNlbGVjdDohMCxidXR0b246ITB9LGM9e21vdmU6XCJtb3VzZW1vdmVcIixjYW5jZWw6XCJtb3VzZXVwIGRyYWdzdGFydFwiLGVuZDpcIm1vdXNldXBcIn0sdT17bW92ZTpcInRvdWNobW92ZVwiLGNhbmNlbDpcInRvdWNoZW5kXCIsZW5kOlwidG91Y2hlbmRcIn0scj0vXFxzKy8sZD17YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSx0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbD9TeW1ib2woXCJldmVudHNcIik6e307ZnVuY3Rpb24gbShlKXtyZXR1cm4gZVt0XXx8KGVbdF09e30pfWZ1bmN0aW9uIHYoZSx0LG4sbyl7dD10LnNwbGl0KHIpO3ZhciBpLGE9bShlKSxjPXQubGVuZ3RoO2Z1bmN0aW9uIHUoZSl7bihlLG8pfWZvcig7Yy0tOykoYVtpPXRbY11dfHwoYVtpXT1bXSkpLnB1c2goW24sdV0pLGUuYWRkRXZlbnRMaXN0ZW5lcihpLHUpfWZ1bmN0aW9uIGYoZSx0LG4pe3Q9dC5zcGxpdChyKTt2YXIgbyxpLGEsYz1tKGUpLHU9dC5sZW5ndGg7aWYoYylmb3IoO3UtLTspaWYoaT1jW289dFt1XV0pZm9yKGE9aS5sZW5ndGg7YS0tOylpW2FdWzBdPT09biYmKGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLGlbYV1bMV0pLGkuc3BsaWNlKGEsMSkpfWZ1bmN0aW9uIGcoZSx0LG4pe3ZhciBvPW5ldyBDdXN0b21FdmVudCh0LGQpO24mJmkobyxuKSxlLmRpc3BhdGNoRXZlbnQobyl9ZnVuY3Rpb24gcyhlKXt2YXIgbj1lLG89ITEsaT0hMTtmdW5jdGlvbiB0KGUpe28/KG4oKSxhKHQpLG89IShpPSEwKSk6aT0hMX10aGlzLmtpY2s9ZnVuY3Rpb24oZSl7bz0hMCxpfHx0KCl9LHRoaXMuZW5kPWZ1bmN0aW9uKGUpe3ZhciB0PW47ZSYmKGk/KG49bz9mdW5jdGlvbigpe3QoKSxlKCl9OmUsbz0hMCk6ZSgpKX19ZnVuY3Rpb24gaCgpe31mdW5jdGlvbiBsKGUpe2UucHJldmVudERlZmF1bHQoKX1mdW5jdGlvbiBYKGUsdCl7dmFyIG4sbztpZihlLmlkZW50aWZpZWRUb3VjaClyZXR1cm4gZS5pZGVudGlmaWVkVG91Y2godCk7Zm9yKG49LTEsbz1lLmxlbmd0aDsrK248bzspaWYoZVtuXS5pZGVudGlmaWVyPT09dClyZXR1cm4gZVtuXX1mdW5jdGlvbiBZKGUsdCl7dmFyIG49WChlLmNoYW5nZWRUb3VjaGVzLHQuaWRlbnRpZmllcik7aWYobiYmKG4ucGFnZVghPT10LnBhZ2VYfHxuLnBhZ2VZIT09dC5wYWdlWSkpcmV0dXJuIG59ZnVuY3Rpb24gbihlLHQpe1QoZSx0LGUsdyl9ZnVuY3Rpb24geShlLHQpe3coKX1mdW5jdGlvbiB3KCl7Zihkb2N1bWVudCxjLm1vdmUsbiksZihkb2N1bWVudCxjLmNhbmNlbCx5KX1mdW5jdGlvbiBiKGUpe2YoZG9jdW1lbnQsdS5tb3ZlLGUudG91Y2htb3ZlKSxmKGRvY3VtZW50LHUuY2FuY2VsLGUudG91Y2hlbmQpfWZ1bmN0aW9uIFQoZSx0LG4sbyl7dmFyIGksYSxjLHUscixkLG0sdixmLHM9bi5wYWdlWC10LnBhZ2VYLGw9bi5wYWdlWS10LnBhZ2VZO3MqcytsKmw8cCpwfHwoYT10LGM9bix1PXMscj1sLGQ9byxtPShpPWUpLnRhcmdldFRvdWNoZXMsdj1pLnRpbWVTdGFtcC1hLnRpbWVTdGFtcCxmPXthbHRLZXk6aS5hbHRLZXksY3RybEtleTppLmN0cmxLZXksc2hpZnRLZXk6aS5zaGlmdEtleSxzdGFydFg6YS5wYWdlWCxzdGFydFk6YS5wYWdlWSxkaXN0WDp1LGRpc3RZOnIsZGVsdGFYOnUsZGVsdGFZOnIscGFnZVg6Yy5wYWdlWCxwYWdlWTpjLnBhZ2VZLHZlbG9jaXR5WDp1L3YsdmVsb2NpdHlZOnIvdixpZGVudGlmaWVyOmEuaWRlbnRpZmllcix0YXJnZXRUb3VjaGVzOm0sZmluZ2VyOm0/bS5sZW5ndGg6MSxlbmFibGVNb3ZlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlRW5hYmxlZD0hMCx0aGlzLmVuYWJsZU1vdmU9aCxpLnByZXZlbnREZWZhdWx0KCl9fSxnKGEudGFyZ2V0LFwibW92ZXN0YXJ0XCIsZiksZChhKSl9ZnVuY3Rpb24gRShlLHQpe3ZhciBuPXQudGltZXI7dC50b3VjaD1lLHQudGltZVN0YW1wPWUudGltZVN0YW1wLG4ua2ljaygpfWZ1bmN0aW9uIFMoZSx0KXt2YXIgbj10LnRhcmdldCxvPXQuZXZlbnQsaT10LnRpbWVyO2YoZG9jdW1lbnQsYy5tb3ZlLEUpLGYoZG9jdW1lbnQsYy5lbmQsUyksSyhuLG8saSxmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtmKG4sXCJjbGlja1wiLGwpfSwwKX0pfWZ1bmN0aW9uIGsoZSx0KXt2YXIgbixvPXQudGFyZ2V0LGk9dC5ldmVudCxhPXQudGltZXI7WChlLmNoYW5nZWRUb3VjaGVzLGkuaWRlbnRpZmllcikmJihuPXQsZihkb2N1bWVudCx1Lm1vdmUsbi5hY3RpdmVUb3VjaG1vdmUpLGYoZG9jdW1lbnQsdS5lbmQsbi5hY3RpdmVUb3VjaGVuZCksSyhvLGksYSkpfWZ1bmN0aW9uIEsoZSx0LG4sbyl7bi5lbmQoZnVuY3Rpb24oKXtyZXR1cm4gZyhlLFwibW92ZWVuZFwiLHQpLG8mJm8oKX0pfWlmKHYoZG9jdW1lbnQsXCJtb3VzZWRvd25cIixmdW5jdGlvbihlKXt2YXIgdDsxIT09KHQ9ZSkud2hpY2h8fHQuY3RybEtleXx8dC5hbHRLZXl8fG9bZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXXx8KHYoZG9jdW1lbnQsYy5tb3ZlLG4sZSksdihkb2N1bWVudCxjLmNhbmNlbCx5LGUpKX0pLHYoZG9jdW1lbnQsXCJ0b3VjaHN0YXJ0XCIsZnVuY3Rpb24oZSl7aWYoIW9bZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXSl7dmFyIHQ9ZS5jaGFuZ2VkVG91Y2hlc1swXSxuPXt0YXJnZXQ6dC50YXJnZXQscGFnZVg6dC5wYWdlWCxwYWdlWTp0LnBhZ2VZLGlkZW50aWZpZXI6dC5pZGVudGlmaWVyLHRvdWNobW92ZTpmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlLHQpe3ZhciBuPVkoZSx0KTtpZighbilyZXR1cm47VChlLHQsbixiKX0oZSx0KX0sdG91Y2hlbmQ6ZnVuY3Rpb24oZSx0KXshZnVuY3Rpb24oZSx0KXtpZighWChlLmNoYW5nZWRUb3VjaGVzLHQuaWRlbnRpZmllcikpcmV0dXJuO2IodCl9KGUsdCl9fTt2KGRvY3VtZW50LHUubW92ZSxuLnRvdWNobW92ZSxuKSx2KGRvY3VtZW50LHUuY2FuY2VsLG4udG91Y2hlbmQsbil9fSksdihkb2N1bWVudCxcIm1vdmVzdGFydFwiLGZ1bmN0aW9uKGUpe2lmKCFlLmRlZmF1bHRQcmV2ZW50ZWQmJmUubW92ZUVuYWJsZWQpe3ZhciB0PXtzdGFydFg6ZS5zdGFydFgsc3RhcnRZOmUuc3RhcnRZLHBhZ2VYOmUucGFnZVgscGFnZVk6ZS5wYWdlWSxkaXN0WDplLmRpc3RYLGRpc3RZOmUuZGlzdFksZGVsdGFYOmUuZGVsdGFYLGRlbHRhWTplLmRlbHRhWSx2ZWxvY2l0eVg6ZS52ZWxvY2l0eVgsdmVsb2NpdHlZOmUudmVsb2NpdHlZLGlkZW50aWZpZXI6ZS5pZGVudGlmaWVyLHRhcmdldFRvdWNoZXM6ZS50YXJnZXRUb3VjaGVzLGZpbmdlcjplLmZpbmdlcn0sbj17dGFyZ2V0OmUudGFyZ2V0LGV2ZW50OnQsdGltZXI6bmV3IHMoZnVuY3Rpb24oZSl7KGZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1uLWUudGltZVN0YW1wO2UuZGlzdFg9dC5wYWdlWC1lLnN0YXJ0WCxlLmRpc3RZPXQucGFnZVktZS5zdGFydFksZS5kZWx0YVg9dC5wYWdlWC1lLnBhZ2VYLGUuZGVsdGFZPXQucGFnZVktZS5wYWdlWSxlLnZlbG9jaXR5WD0uMyplLnZlbG9jaXR5WCsuNyplLmRlbHRhWC9vLGUudmVsb2NpdHlZPS4zKmUudmVsb2NpdHlZKy43KmUuZGVsdGFZL28sZS5wYWdlWD10LnBhZ2VYLGUucGFnZVk9dC5wYWdlWX0pKHQsbi50b3VjaCxuLnRpbWVTdGFtcCksZyhuLnRhcmdldCxcIm1vdmVcIix0KX0pLHRvdWNoOnZvaWQgMCx0aW1lU3RhbXA6ZS50aW1lU3RhbXB9O3ZvaWQgMD09PWUuaWRlbnRpZmllcj8odihlLnRhcmdldCxcImNsaWNrXCIsbCksdihkb2N1bWVudCxjLm1vdmUsRSxuKSx2KGRvY3VtZW50LGMuZW5kLFMsbikpOihuLmFjdGl2ZVRvdWNobW92ZT1mdW5jdGlvbihlLHQpe3ZhciBuLG8saSxhLGM7bj1lLGk9KG89dCkuZXZlbnQsYT1vLnRpbWVyLChjPVkobixpKSkmJihuLnByZXZlbnREZWZhdWx0KCksaS50YXJnZXRUb3VjaGVzPW4udGFyZ2V0VG91Y2hlcyxvLnRvdWNoPWMsby50aW1lU3RhbXA9bi50aW1lU3RhbXAsYS5raWNrKCkpfSxuLmFjdGl2ZVRvdWNoZW5kPWZ1bmN0aW9uKGUsdCl7ayhlLHQpfSx2KGRvY3VtZW50LHUubW92ZSxuLmFjdGl2ZVRvdWNobW92ZSxuKSx2KGRvY3VtZW50LHUuZW5kLG4uYWN0aXZlVG91Y2hlbmQsbikpfX0pLHdpbmRvdy5qUXVlcnkpe3ZhciBqPVwic3RhcnRYIHN0YXJ0WSBwYWdlWCBwYWdlWSBkaXN0WCBkaXN0WSBkZWx0YVggZGVsdGFZIHZlbG9jaXR5WCB2ZWxvY2l0eVlcIi5zcGxpdChcIiBcIik7alF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZXN0YXJ0PXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixDKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIsQyksITF9LGFkZDpBfSxqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixRKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIsUSksITF9LGFkZDpBfSxqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlZW5kPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixxKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIscSksITF9LGFkZDpBfX1mdW5jdGlvbiBDKGUpe2UuZW5hYmxlTW92ZSgpfWZ1bmN0aW9uIFEoZSl7ZS5lbmFibGVNb3ZlKCl9ZnVuY3Rpb24gcShlKXtlLmVuYWJsZU1vdmUoKX1mdW5jdGlvbiBBKGUpe3ZhciBvPWUuaGFuZGxlcjtlLmhhbmRsZXI9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49ai5sZW5ndGg7bi0tOyllW3Q9altuXV09ZS5vcmlnaW5hbEV2ZW50W3RdO28uYXBwbHkodGhpcyxhcmd1bWVudHMpfX19KTsiLCIvKlxuICogalF1ZXJ5IEZsZXhTbGlkZXIgdjIuNy4yXG4gKiBDb3B5cmlnaHQgMjAxMiBXb29UaGVtZXNcbiAqIENvbnRyaWJ1dGluZyBBdXRob3I6IFR5bGVyIFNtaXRoXG4gKi8hZnVuY3Rpb24oJCl7dmFyIGU9ITA7JC5mbGV4c2xpZGVyPWZ1bmN0aW9uKHQsYSl7dmFyIG49JCh0KTt2b2lkIDA9PT1hLnJ0bCYmXCJydGxcIj09JChcImh0bWxcIikuYXR0cihcImRpclwiKSYmKGEucnRsPSEwKSxuLnZhcnM9JC5leHRlbmQoe30sJC5mbGV4c2xpZGVyLmRlZmF1bHRzLGEpO3ZhciBpPW4udmFycy5uYW1lc3BhY2Uscj13aW5kb3cubmF2aWdhdG9yJiZ3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQmJndpbmRvdy5NU0dlc3R1cmUscz0oXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8cnx8d2luZG93LkRvY3VtZW50VG91Y2gmJmRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCkmJm4udmFycy50b3VjaCxvPVwiY2xpY2sgdG91Y2hlbmQgTVNQb2ludGVyVXAga2V5dXBcIixsPVwiXCIsYyxkPVwidmVydGljYWxcIj09PW4udmFycy5kaXJlY3Rpb24sdT1uLnZhcnMucmV2ZXJzZSx2PW4udmFycy5pdGVtV2lkdGg+MCxwPVwiZmFkZVwiPT09bi52YXJzLmFuaW1hdGlvbixtPVwiXCIhPT1uLnZhcnMuYXNOYXZGb3IsZj17fTskLmRhdGEodCxcImZsZXhzbGlkZXJcIixuKSxmPXtpbml0OmZ1bmN0aW9uKCl7bi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9cGFyc2VJbnQobi52YXJzLnN0YXJ0QXQ/bi52YXJzLnN0YXJ0QXQ6MCwxMCksaXNOYU4obi5jdXJyZW50U2xpZGUpJiYobi5jdXJyZW50U2xpZGU9MCksbi5hbmltYXRpbmdUbz1uLmN1cnJlbnRTbGlkZSxuLmF0RW5kPTA9PT1uLmN1cnJlbnRTbGlkZXx8bi5jdXJyZW50U2xpZGU9PT1uLmxhc3Qsbi5jb250YWluZXJTZWxlY3Rvcj1uLnZhcnMuc2VsZWN0b3Iuc3Vic3RyKDAsbi52YXJzLnNlbGVjdG9yLnNlYXJjaChcIiBcIikpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yLG4pLG4uY29udGFpbmVyPSQobi5jb250YWluZXJTZWxlY3RvcixuKSxuLmNvdW50PW4uc2xpZGVzLmxlbmd0aCxuLnN5bmNFeGlzdHM9JChuLnZhcnMuc3luYykubGVuZ3RoPjAsXCJzbGlkZVwiPT09bi52YXJzLmFuaW1hdGlvbiYmKG4udmFycy5hbmltYXRpb249XCJzd2luZ1wiKSxuLnByb3A9ZD9cInRvcFwiOm4udmFycy5ydGw/XCJtYXJnaW5SaWdodFwiOlwibWFyZ2luTGVmdFwiLG4uYXJncz17fSxuLm1hbnVhbFBhdXNlPSExLG4uc3RvcHBlZD0hMSxuLnN0YXJ0ZWQ9ITEsbi5zdGFydFRpbWVvdXQ9bnVsbCxuLnRyYW5zaXRpb25zPSFuLnZhcnMudmlkZW8mJiFwJiZuLnZhcnMudXNlQ1NTJiZmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdD1bXCJwZXJzcGVjdGl2ZVByb3BlcnR5XCIsXCJXZWJraXRQZXJzcGVjdGl2ZVwiLFwiTW96UGVyc3BlY3RpdmVcIixcIk9QZXJzcGVjdGl2ZVwiLFwibXNQZXJzcGVjdGl2ZVwiXTtmb3IodmFyIGEgaW4gdClpZih2b2lkIDAhPT1lLnN0eWxlW3RbYV1dKXJldHVybiBuLnBmeD10W2FdLnJlcGxhY2UoXCJQZXJzcGVjdGl2ZVwiLFwiXCIpLnRvTG93ZXJDYXNlKCksbi5wcm9wPVwiLVwiK24ucGZ4K1wiLXRyYW5zZm9ybVwiLCEwO3JldHVybiExfSgpLG4uaXNGaXJlZm94PW5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiZmlyZWZveFwiKT4tMSxuLmVuc3VyZUFuaW1hdGlvbkVuZD1cIlwiLFwiXCIhPT1uLnZhcnMuY29udHJvbHNDb250YWluZXImJihuLmNvbnRyb2xzQ29udGFpbmVyPSQobi52YXJzLmNvbnRyb2xzQ29udGFpbmVyKS5sZW5ndGg+MCYmJChuLnZhcnMuY29udHJvbHNDb250YWluZXIpKSxcIlwiIT09bi52YXJzLm1hbnVhbENvbnRyb2xzJiYobi5tYW51YWxDb250cm9scz0kKG4udmFycy5tYW51YWxDb250cm9scykubGVuZ3RoPjAmJiQobi52YXJzLm1hbnVhbENvbnRyb2xzKSksXCJcIiE9PW4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYmJihuLmN1c3RvbURpcmVjdGlvbk5hdj0yPT09JChuLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2KS5sZW5ndGgmJiQobi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdikpLG4udmFycy5yYW5kb21pemUmJihuLnNsaWRlcy5zb3J0KGZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSktLjV9KSxuLmNvbnRhaW5lci5lbXB0eSgpLmFwcGVuZChuLnNsaWRlcykpLG4uZG9NYXRoKCksbi5zZXR1cChcImluaXRcIiksbi52YXJzLmNvbnRyb2xOYXYmJmYuY29udHJvbE5hdi5zZXR1cCgpLG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnNldHVwKCksbi52YXJzLmtleWJvYXJkJiYoMT09PSQobi5jb250YWluZXJTZWxlY3RvcikubGVuZ3RofHxuLnZhcnMubXVsdGlwbGVLZXlib2FyZCkmJiQoZG9jdW1lbnQpLmJpbmQoXCJrZXl1cFwiLGZ1bmN0aW9uKGUpe3ZhciB0PWUua2V5Q29kZTtpZighbi5hbmltYXRpbmcmJigzOT09PXR8fDM3PT09dCkpe3ZhciBhPW4udmFycy5ydGw/Mzc9PT10P24uZ2V0VGFyZ2V0KFwibmV4dFwiKTozOT09PXQmJm4uZ2V0VGFyZ2V0KFwicHJldlwiKTozOT09PXQ/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOjM3PT09dCYmbi5nZXRUYXJnZXQoXCJwcmV2XCIpO24uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbil9fSksbi52YXJzLm1vdXNld2hlZWwmJm4uYmluZChcIm1vdXNld2hlZWxcIixmdW5jdGlvbihlLHQsYSxpKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHI9dDwwP24uZ2V0VGFyZ2V0KFwibmV4dFwiKTpuLmdldFRhcmdldChcInByZXZcIik7bi5mbGV4QW5pbWF0ZShyLG4udmFycy5wYXVzZU9uQWN0aW9uKX0pLG4udmFycy5wYXVzZVBsYXkmJmYucGF1c2VQbGF5LnNldHVwKCksbi52YXJzLnNsaWRlc2hvdyYmbi52YXJzLnBhdXNlSW52aXNpYmxlJiZmLnBhdXNlSW52aXNpYmxlLmluaXQoKSxuLnZhcnMuc2xpZGVzaG93JiYobi52YXJzLnBhdXNlT25Ib3ZlciYmbi5ob3ZlcihmdW5jdGlvbigpe24ubWFudWFsUGxheXx8bi5tYW51YWxQYXVzZXx8bi5wYXVzZSgpfSxmdW5jdGlvbigpe24ubWFudWFsUGF1c2V8fG4ubWFudWFsUGxheXx8bi5zdG9wcGVkfHxuLnBsYXkoKX0pLG4udmFycy5wYXVzZUludmlzaWJsZSYmZi5wYXVzZUludmlzaWJsZS5pc0hpZGRlbigpfHwobi52YXJzLmluaXREZWxheT4wP24uc3RhcnRUaW1lb3V0PXNldFRpbWVvdXQobi5wbGF5LG4udmFycy5pbml0RGVsYXkpOm4ucGxheSgpKSksbSYmZi5hc05hdi5zZXR1cCgpLHMmJm4udmFycy50b3VjaCYmZi50b3VjaCgpLCghcHx8cCYmbi52YXJzLnNtb290aEhlaWdodCkmJiQod2luZG93KS5iaW5kKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIGZvY3VzXCIsZi5yZXNpemUpLG4uZmluZChcImltZ1wiKS5hdHRyKFwiZHJhZ2dhYmxlXCIsXCJmYWxzZVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi52YXJzLnN0YXJ0KG4pfSwyMDApfSxhc05hdjp7c2V0dXA6ZnVuY3Rpb24oKXtuLmFzTmF2PSEwLG4uYW5pbWF0aW5nVG89TWF0aC5mbG9vcihuLmN1cnJlbnRTbGlkZS9uLm1vdmUpLG4uY3VycmVudEl0ZW09bi5jdXJyZW50U2xpZGUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShuLmN1cnJlbnRJdGVtKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLHI/KHQuX3NsaWRlcj1uLG4uc2xpZGVzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX2dlc3R1cmU9bmV3IE1TR2VzdHVyZSxlLl9nZXN0dXJlLnRhcmdldD1lLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5jdXJyZW50VGFyZ2V0Ll9nZXN0dXJlJiZlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUuYWRkUG9pbnRlcihlLnBvaW50ZXJJZCl9LCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJNU0dlc3R1cmVUYXBcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ9JCh0aGlzKSxhPXQuaW5kZXgoKTskKG4udmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIikuYW5pbWF0aW5nfHx0Lmhhc0NsYXNzKFwiYWN0aXZlXCIpfHwobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxhP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCwhMCkpfSl9KSk6bi5zbGlkZXMub24obyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ9JCh0aGlzKSxhPXQuaW5kZXgoKSxyO3I9bi52YXJzLnJ0bD8tMSoodC5vZmZzZXQoKS5yaWdodC0kKG4pLnNjcm9sbExlZnQoKSk6dC5vZmZzZXQoKS5sZWZ0LSQobikuc2Nyb2xsTGVmdCgpLHI8PTAmJnQuaGFzQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKT9uLmZsZXhBbmltYXRlKG4uZ2V0VGFyZ2V0KFwicHJldlwiKSwhMCk6JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLmFuaW1hdGluZ3x8dC5oYXNDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpfHwobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxhP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCwhMCkpfSl9fSxjb250cm9sTmF2OntzZXR1cDpmdW5jdGlvbigpe24ubWFudWFsQ29udHJvbHM/Zi5jb250cm9sTmF2LnNldHVwTWFudWFsKCk6Zi5jb250cm9sTmF2LnNldHVwUGFnaW5nKCl9LHNldHVwUGFnaW5nOmZ1bmN0aW9uKCl7dmFyIGU9XCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdj9cImNvbnRyb2wtdGh1bWJzXCI6XCJjb250cm9sLXBhZ2luZ1wiLHQ9MSxhLHI7aWYobi5jb250cm9sTmF2U2NhZmZvbGQ9JCgnPG9sIGNsYXNzPVwiJytpK1wiY29udHJvbC1uYXYgXCIraStlKydcIj48L29sPicpLG4ucGFnaW5nQ291bnQ+MSlmb3IodmFyIHM9MDtzPG4ucGFnaW5nQ291bnQ7cysrKXtpZihyPW4uc2xpZGVzLmVxKHMpLHZvaWQgMD09PXIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpJiZyLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiLFwiXCIpLGE9JChcIjxhPjwvYT5cIikuYXR0cihcImhyZWZcIixcIiNcIikudGV4dCh0KSxcInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2JiYoYT0kKFwiPGltZy8+XCIpLmF0dHIoXCJzcmNcIixyLmF0dHIoXCJkYXRhLXRodW1iXCIpKSksXCJcIiE9PXIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpJiZhLmF0dHIoXCJhbHRcIixyLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiKSksXCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdiYmITA9PT1uLnZhcnMudGh1bWJDYXB0aW9ucyl7dmFyIGM9ci5hdHRyKFwiZGF0YS10aHVtYmNhcHRpb25cIik7aWYoXCJcIiE9PWMmJnZvaWQgMCE9PWMpe3ZhciBkPSQoXCI8c3Bhbj48L3NwYW4+XCIpLmFkZENsYXNzKGkrXCJjYXB0aW9uXCIpLnRleHQoYyk7YS5hcHBlbmQoZCl9fXZhciB1PSQoXCI8bGk+XCIpO2EuYXBwZW5kVG8odSksdS5hcHBlbmQoXCI8L2xpPlwiKSxuLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQodSksdCsrfW4uY29udHJvbHNDb250YWluZXI/JChuLmNvbnRyb2xzQ29udGFpbmVyKS5hcHBlbmQobi5jb250cm9sTmF2U2NhZmZvbGQpOm4uYXBwZW5kKG4uY29udHJvbE5hdlNjYWZmb2xkKSxmLmNvbnRyb2xOYXYuc2V0KCksZi5jb250cm9sTmF2LmFjdGl2ZSgpLG4uY29udHJvbE5hdlNjYWZmb2xkLmRlbGVnYXRlKFwiYSwgaW1nXCIsbyxmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksXCJcIj09PWx8fGw9PT1lLnR5cGUpe3ZhciB0PSQodGhpcyksYT1uLmNvbnRyb2xOYXYuaW5kZXgodCk7dC5oYXNDbGFzcyhpK1wiYWN0aXZlXCIpfHwobi5kaXJlY3Rpb249YT5uLmN1cnJlbnRTbGlkZT9cIm5leHRcIjpcInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24pKX1cIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSxzZXR1cE1hbnVhbDpmdW5jdGlvbigpe24uY29udHJvbE5hdj1uLm1hbnVhbENvbnRyb2xzLGYuY29udHJvbE5hdi5hY3RpdmUoKSxuLmNvbnRyb2xOYXYuYmluZChvLGZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxcIlwiPT09bHx8bD09PWUudHlwZSl7dmFyIHQ9JCh0aGlzKSxhPW4uY29udHJvbE5hdi5pbmRleCh0KTt0Lmhhc0NsYXNzKGkrXCJhY3RpdmVcIil8fChhPm4uY3VycmVudFNsaWRlP24uZGlyZWN0aW9uPVwibmV4dFwiOm4uZGlyZWN0aW9uPVwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbikpfVwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHNldDpmdW5jdGlvbigpe3ZhciBlPVwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXY/XCJpbWdcIjpcImFcIjtuLmNvbnRyb2xOYXY9JChcIi5cIitpK1wiY29udHJvbC1uYXYgbGkgXCIrZSxuLmNvbnRyb2xzQ29udGFpbmVyP24uY29udHJvbHNDb250YWluZXI6bil9LGFjdGl2ZTpmdW5jdGlvbigpe24uY29udHJvbE5hdi5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlXCIpLmVxKG4uYW5pbWF0aW5nVG8pLmFkZENsYXNzKGkrXCJhY3RpdmVcIil9LHVwZGF0ZTpmdW5jdGlvbihlLHQpe24ucGFnaW5nQ291bnQ+MSYmXCJhZGRcIj09PWU/bi5jb250cm9sTmF2U2NhZmZvbGQuYXBwZW5kKCQoJzxsaT48YSBocmVmPVwiI1wiPicrbi5jb3VudCtcIjwvYT48L2xpPlwiKSk6MT09PW4ucGFnaW5nQ291bnQ/bi5jb250cm9sTmF2U2NhZmZvbGQuZmluZChcImxpXCIpLnJlbW92ZSgpOm4uY29udHJvbE5hdi5lcSh0KS5jbG9zZXN0KFwibGlcIikucmVtb3ZlKCksZi5jb250cm9sTmF2LnNldCgpLG4ucGFnaW5nQ291bnQ+MSYmbi5wYWdpbmdDb3VudCE9PW4uY29udHJvbE5hdi5sZW5ndGg/bi51cGRhdGUodCxlKTpmLmNvbnRyb2xOYXYuYWN0aXZlKCl9fSxkaXJlY3Rpb25OYXY6e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9JCgnPHVsIGNsYXNzPVwiJytpKydkaXJlY3Rpb24tbmF2XCI+PGxpIGNsYXNzPVwiJytpKyduYXYtcHJldlwiPjxhIGNsYXNzPVwiJytpKydwcmV2XCIgaHJlZj1cIiNcIj4nK24udmFycy5wcmV2VGV4dCsnPC9hPjwvbGk+PGxpIGNsYXNzPVwiJytpKyduYXYtbmV4dFwiPjxhIGNsYXNzPVwiJytpKyduZXh0XCIgaHJlZj1cIiNcIj4nK24udmFycy5uZXh0VGV4dCtcIjwvYT48L2xpPjwvdWw+XCIpO24uY3VzdG9tRGlyZWN0aW9uTmF2P24uZGlyZWN0aW9uTmF2PW4uY3VzdG9tRGlyZWN0aW9uTmF2Om4uY29udHJvbHNDb250YWluZXI/KCQobi5jb250cm9sc0NvbnRhaW5lcikuYXBwZW5kKGUpLG4uZGlyZWN0aW9uTmF2PSQoXCIuXCIraStcImRpcmVjdGlvbi1uYXYgbGkgYVwiLG4uY29udHJvbHNDb250YWluZXIpKToobi5hcHBlbmQoZSksbi5kaXJlY3Rpb25OYXY9JChcIi5cIitpK1wiZGlyZWN0aW9uLW5hdiBsaSBhXCIsbikpLGYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpLG4uZGlyZWN0aW9uTmF2LmJpbmQobyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ7XCJcIiE9PWwmJmwhPT1lLnR5cGV8fCh0PSQodGhpcykuaGFzQ2xhc3MoaStcIm5leHRcIik/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKSxuLmZsZXhBbmltYXRlKHQsbi52YXJzLnBhdXNlT25BY3Rpb24pKSxcIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgZT1pK1wiZGlzYWJsZWRcIjsxPT09bi5wYWdpbmdDb3VudD9uLmRpcmVjdGlvbk5hdi5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4udmFycy5hbmltYXRpb25Mb29wP24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKTowPT09bi5hbmltYXRpbmdUbz9uLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5maWx0ZXIoXCIuXCIraStcInByZXZcIikuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTpuLmFuaW1hdGluZ1RvPT09bi5sYXN0P24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLmZpbHRlcihcIi5cIitpK1wibmV4dFwiKS5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKX19LHBhdXNlUGxheTp7c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT0kKCc8ZGl2IGNsYXNzPVwiJytpKydwYXVzZXBsYXlcIj48YSBocmVmPVwiI1wiPjwvYT48L2Rpdj4nKTtuLmNvbnRyb2xzQ29udGFpbmVyPyhuLmNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZChlKSxuLnBhdXNlUGxheT0kKFwiLlwiK2krXCJwYXVzZXBsYXkgYVwiLG4uY29udHJvbHNDb250YWluZXIpKToobi5hcHBlbmQoZSksbi5wYXVzZVBsYXk9JChcIi5cIitpK1wicGF1c2VwbGF5IGFcIixuKSksZi5wYXVzZVBsYXkudXBkYXRlKG4udmFycy5zbGlkZXNob3c/aStcInBhdXNlXCI6aStcInBsYXlcIiksbi5wYXVzZVBsYXkuYmluZChvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxcIlwiIT09bCYmbCE9PWUudHlwZXx8KCQodGhpcykuaGFzQ2xhc3MoaStcInBhdXNlXCIpPyhuLm1hbnVhbFBhdXNlPSEwLG4ubWFudWFsUGxheT0hMSxuLnBhdXNlKCkpOihuLm1hbnVhbFBhdXNlPSExLG4ubWFudWFsUGxheT0hMCxuLnBsYXkoKSkpLFwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHVwZGF0ZTpmdW5jdGlvbihlKXtcInBsYXlcIj09PWU/bi5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MoaStcInBhdXNlXCIpLmFkZENsYXNzKGkrXCJwbGF5XCIpLmh0bWwobi52YXJzLnBsYXlUZXh0KTpuLnBhdXNlUGxheS5yZW1vdmVDbGFzcyhpK1wicGxheVwiKS5hZGRDbGFzcyhpK1wicGF1c2VcIikuaHRtbChuLnZhcnMucGF1c2VUZXh0KX19LHRvdWNoOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXtlLnN0b3BQcm9wYWdhdGlvbigpLG4uYW5pbWF0aW5nP2UucHJldmVudERlZmF1bHQoKToobi5wYXVzZSgpLHQuX2dlc3R1cmUuYWRkUG9pbnRlcihlLnBvaW50ZXJJZCksdz0wLGM9ZD9uLmg6bi53LGY9TnVtYmVyKG5ldyBEYXRlKSxsPXYmJnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp2JiZ1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOnYmJm4uY3VycmVudFNsaWRlPT09bi5sYXN0P24ubGltaXQ6dj8obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uY3VycmVudFNsaWRlOnU/KG4ubGFzdC1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjKX1mdW5jdGlvbiBhKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGE9ZS50YXJnZXQuX3NsaWRlcjtpZihhKXt2YXIgbj0tZS50cmFuc2xhdGlvblgsaT0tZS50cmFuc2xhdGlvblk7aWYodys9ZD9pOm4sbT0oYS52YXJzLnJ0bD8tMToxKSp3LHg9ZD9NYXRoLmFicyh3KTxNYXRoLmFicygtbik6TWF0aC5hYnModyk8TWF0aC5hYnMoLWkpLGUuZGV0YWlsPT09ZS5NU0dFU1RVUkVfRkxBR19JTkVSVElBKXJldHVybiB2b2lkIHNldEltbWVkaWF0ZShmdW5jdGlvbigpe3QuX2dlc3R1cmUuc3RvcCgpfSk7KCF4fHxOdW1iZXIobmV3IERhdGUpLWY+NTAwKSYmKGUucHJldmVudERlZmF1bHQoKSwhcCYmYS50cmFuc2l0aW9ucyYmKGEudmFycy5hbmltYXRpb25Mb29wfHwobT13LygwPT09YS5jdXJyZW50U2xpZGUmJnc8MHx8YS5jdXJyZW50U2xpZGU9PT1hLmxhc3QmJnc+MD9NYXRoLmFicyh3KS9jKzI6MSkpLGEuc2V0UHJvcHMobCttLFwic2V0VG91Y2hcIikpKX19ZnVuY3Rpb24gaShlKXtlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PWUudGFyZ2V0Ll9zbGlkZXI7aWYodCl7aWYodC5hbmltYXRpbmdUbz09PXQuY3VycmVudFNsaWRlJiYheCYmbnVsbCE9PW0pe3ZhciBhPXU/LW06bSxuPWE+MD90LmdldFRhcmdldChcIm5leHRcIik6dC5nZXRUYXJnZXQoXCJwcmV2XCIpO3QuY2FuQWR2YW5jZShuKSYmKE51bWJlcihuZXcgRGF0ZSktZjw1NTAmJk1hdGguYWJzKGEpPjUwfHxNYXRoLmFicyhhKT5jLzIpP3QuZmxleEFuaW1hdGUobix0LnZhcnMucGF1c2VPbkFjdGlvbik6cHx8dC5mbGV4QW5pbWF0ZSh0LmN1cnJlbnRTbGlkZSx0LnZhcnMucGF1c2VPbkFjdGlvbiwhMCl9cz1udWxsLG89bnVsbCxtPW51bGwsbD1udWxsLHc9MH19dmFyIHMsbyxsLGMsbSxmLGcsaCxTLHg9ITEseT0wLGI9MCx3PTA7cj8odC5zdHlsZS5tc1RvdWNoQWN0aW9uPVwibm9uZVwiLHQuX2dlc3R1cmU9bmV3IE1TR2VzdHVyZSx0Ll9nZXN0dXJlLnRhcmdldD10LHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIixlLCExKSx0Ll9zbGlkZXI9bix0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU0dlc3R1cmVDaGFuZ2VcIixhLCExKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU0dlc3R1cmVFbmRcIixpLCExKSk6KGc9ZnVuY3Rpb24oZSl7bi5hbmltYXRpbmc/ZS5wcmV2ZW50RGVmYXVsdCgpOih3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWR8fDE9PT1lLnRvdWNoZXMubGVuZ3RoKSYmKG4ucGF1c2UoKSxjPWQ/bi5oOm4udyxmPU51bWJlcihuZXcgRGF0ZSkseT1lLnRvdWNoZXNbMF0ucGFnZVgsYj1lLnRvdWNoZXNbMF0ucGFnZVksbD12JiZ1JiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0PzA6diYmdT9uLmxpbWl0LShuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbzp2JiZuLmN1cnJlbnRTbGlkZT09PW4ubGFzdD9uLmxpbWl0OnY/KG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmN1cnJlbnRTbGlkZTp1PyhuLmxhc3Qtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYzoobi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYyxzPWQ/Yjp5LG89ZD95OmIsdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsaCwhMSksdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixTLCExKSl9LGg9ZnVuY3Rpb24oZSl7eT1lLnRvdWNoZXNbMF0ucGFnZVgsYj1lLnRvdWNoZXNbMF0ucGFnZVksbT1kP3MtYjoobi52YXJzLnJ0bD8tMToxKSoocy15KSx4PWQ/TWF0aC5hYnMobSk8TWF0aC5hYnMoeS1vKTpNYXRoLmFicyhtKTxNYXRoLmFicyhiLW8pO3ZhciB0PTUwMDsoIXh8fE51bWJlcihuZXcgRGF0ZSktZj41MDApJiYoZS5wcmV2ZW50RGVmYXVsdCgpLCFwJiZuLnRyYW5zaXRpb25zJiYobi52YXJzLmFuaW1hdGlvbkxvb3B8fChtLz0wPT09bi5jdXJyZW50U2xpZGUmJm08MHx8bi5jdXJyZW50U2xpZGU9PT1uLmxhc3QmJm0+MD9NYXRoLmFicyhtKS9jKzI6MSksbi5zZXRQcm9wcyhsK20sXCJzZXRUb3VjaFwiKSkpfSxTPWZ1bmN0aW9uKGUpe2lmKHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGgsITEpLG4uYW5pbWF0aW5nVG89PT1uLmN1cnJlbnRTbGlkZSYmIXgmJm51bGwhPT1tKXt2YXIgYT11Py1tOm0saT1hPjA/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmNhbkFkdmFuY2UoaSkmJihOdW1iZXIobmV3IERhdGUpLWY8NTUwJiZNYXRoLmFicyhhKT41MHx8TWF0aC5hYnMoYSk+Yy8yKT9uLmZsZXhBbmltYXRlKGksbi52YXJzLnBhdXNlT25BY3Rpb24pOnB8fG4uZmxleEFuaW1hdGUobi5jdXJyZW50U2xpZGUsbi52YXJzLnBhdXNlT25BY3Rpb24sITApfXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsUywhMSkscz1udWxsLG89bnVsbCxtPW51bGwsbD1udWxsfSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZywhMSkpfSxyZXNpemU6ZnVuY3Rpb24oKXshbi5hbmltYXRpbmcmJm4uaXMoXCI6dmlzaWJsZVwiKSYmKHZ8fG4uZG9NYXRoKCkscD9mLnNtb290aEhlaWdodCgpOnY/KG4uc2xpZGVzLndpZHRoKG4uY29tcHV0ZWRXKSxuLnVwZGF0ZShuLnBhZ2luZ0NvdW50KSxuLnNldFByb3BzKCkpOmQ/KG4udmlld3BvcnQuaGVpZ2h0KG4uaCksbi5zZXRQcm9wcyhuLmgsXCJzZXRUb3RhbFwiKSk6KG4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KCksbi5uZXdTbGlkZXMud2lkdGgobi5jb21wdXRlZFcpLG4uc2V0UHJvcHMobi5jb21wdXRlZFcsXCJzZXRUb3RhbFwiKSkpfSxzbW9vdGhIZWlnaHQ6ZnVuY3Rpb24oZSl7aWYoIWR8fHApe3ZhciB0PXA/bjpuLnZpZXdwb3J0O2U/dC5hbmltYXRlKHtoZWlnaHQ6bi5zbGlkZXMuZXEobi5hbmltYXRpbmdUbykuaW5uZXJIZWlnaHQoKX0sZSk6dC5pbm5lckhlaWdodChuLnNsaWRlcy5lcShuLmFuaW1hdGluZ1RvKS5pbm5lckhlaWdodCgpKX19LHN5bmM6ZnVuY3Rpb24oZSl7dmFyIHQ9JChuLnZhcnMuc3luYykuZGF0YShcImZsZXhzbGlkZXJcIiksYT1uLmFuaW1hdGluZ1RvO3N3aXRjaChlKXtjYXNlXCJhbmltYXRlXCI6dC5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwKTticmVhaztjYXNlXCJwbGF5XCI6dC5wbGF5aW5nfHx0LmFzTmF2fHx0LnBsYXkoKTticmVhaztjYXNlXCJwYXVzZVwiOnQucGF1c2UoKTticmVha319LHVuaXF1ZUlEOmZ1bmN0aW9uKGUpe3JldHVybiBlLmZpbHRlcihcIltpZF1cIikuYWRkKGUuZmluZChcIltpZF1cIikpLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0kKHRoaXMpO2UuYXR0cihcImlkXCIsZS5hdHRyKFwiaWRcIikrXCJfY2xvbmVcIil9KSxlfSxwYXVzZUludmlzaWJsZTp7dmlzUHJvcDpudWxsLGluaXQ6ZnVuY3Rpb24oKXt2YXIgZT1mLnBhdXNlSW52aXNpYmxlLmdldEhpZGRlblByb3AoKTtpZihlKXt2YXIgdD1lLnJlcGxhY2UoL1tIfGhdaWRkZW4vLFwiXCIpK1widmlzaWJpbGl0eWNoYW5nZVwiO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodCxmdW5jdGlvbigpe2YucGF1c2VJbnZpc2libGUuaXNIaWRkZW4oKT9uLnN0YXJ0VGltZW91dD9jbGVhclRpbWVvdXQobi5zdGFydFRpbWVvdXQpOm4ucGF1c2UoKTpuLnN0YXJ0ZWQ/bi5wbGF5KCk6bi52YXJzLmluaXREZWxheT4wP3NldFRpbWVvdXQobi5wbGF5LG4udmFycy5pbml0RGVsYXkpOm4ucGxheSgpfSl9fSxpc0hpZGRlbjpmdW5jdGlvbigpe3ZhciBlPWYucGF1c2VJbnZpc2libGUuZ2V0SGlkZGVuUHJvcCgpO3JldHVybiEhZSYmZG9jdW1lbnRbZV19LGdldEhpZGRlblByb3A6ZnVuY3Rpb24oKXt2YXIgZT1bXCJ3ZWJraXRcIixcIm1velwiLFwibXNcIixcIm9cIl07aWYoXCJoaWRkZW5cImluIGRvY3VtZW50KXJldHVyblwiaGlkZGVuXCI7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0KyspaWYoZVt0XStcIkhpZGRlblwiaW4gZG9jdW1lbnQpcmV0dXJuIGVbdF0rXCJIaWRkZW5cIjtyZXR1cm4gbnVsbH19LHNldFRvQ2xlYXJXYXRjaGVkRXZlbnQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoYyksYz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bD1cIlwifSwzZTMpfX0sbi5mbGV4QW5pbWF0ZT1mdW5jdGlvbihlLHQsYSxyLG8pe2lmKG4udmFycy5hbmltYXRpb25Mb29wfHxlPT09bi5jdXJyZW50U2xpZGV8fChuLmRpcmVjdGlvbj1lPm4uY3VycmVudFNsaWRlP1wibmV4dFwiOlwicHJldlwiKSxtJiYxPT09bi5wYWdpbmdDb3VudCYmKG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08ZT9cIm5leHRcIjpcInByZXZcIiksIW4uYW5pbWF0aW5nJiYobi5jYW5BZHZhbmNlKGUsbyl8fGEpJiZuLmlzKFwiOnZpc2libGVcIikpe2lmKG0mJnIpe3ZhciBsPSQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKTtpZihuLmF0RW5kPTA9PT1lfHxlPT09bi5jb3VudC0xLGwuZmxleEFuaW1hdGUoZSwhMCwhMSwhMCxvKSxuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGU/XCJuZXh0XCI6XCJwcmV2XCIsbC5kaXJlY3Rpb249bi5kaXJlY3Rpb24sTWF0aC5jZWlsKChlKzEpL24udmlzaWJsZSktMT09PW4uY3VycmVudFNsaWRlfHwwPT09ZSlyZXR1cm4gbi5jdXJyZW50SXRlbT1lLG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSwhMTtuLmN1cnJlbnRJdGVtPWUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLGU9TWF0aC5mbG9vcihlL24udmlzaWJsZSl9aWYobi5hbmltYXRpbmc9ITAsbi5hbmltYXRpbmdUbz1lLHQmJm4ucGF1c2UoKSxuLnZhcnMuYmVmb3JlKG4pLG4uc3luY0V4aXN0cyYmIW8mJmYuc3luYyhcImFuaW1hdGVcIiksbi52YXJzLmNvbnRyb2xOYXYmJmYuY29udHJvbE5hdi5hY3RpdmUoKSx2fHxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksbi5hdEVuZD0wPT09ZXx8ZT09PW4ubGFzdCxuLnZhcnMuZGlyZWN0aW9uTmF2JiZmLmRpcmVjdGlvbk5hdi51cGRhdGUoKSxlPT09bi5sYXN0JiYobi52YXJzLmVuZChuKSxuLnZhcnMuYW5pbWF0aW9uTG9vcHx8bi5wYXVzZSgpKSxwKXM/KG4uc2xpZGVzLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe29wYWNpdHk6MCx6SW5kZXg6MX0pLG4uc2xpZGVzLmVxKGUpLmNzcyh7b3BhY2l0eToxLHpJbmRleDoyfSksbi53cmFwdXAoYykpOihuLnNsaWRlcy5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6MX0pLmFuaW1hdGUoe29wYWNpdHk6MH0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcpLG4uc2xpZGVzLmVxKGUpLmNzcyh7ekluZGV4OjJ9KS5hbmltYXRlKHtvcGFjaXR5OjF9LG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nLG4ud3JhcHVwKSk7ZWxzZXt2YXIgYz1kP24uc2xpZGVzLmZpbHRlcihcIjpmaXJzdFwiKS5oZWlnaHQoKTpuLmNvbXB1dGVkVyxnLGgsUzt2PyhnPW4udmFycy5pdGVtTWFyZ2luLFM9KG4uaXRlbVcrZykqbi5tb3ZlKm4uYW5pbWF0aW5nVG8saD1TPm4ubGltaXQmJjEhPT1uLnZpc2libGU/bi5saW1pdDpTKTpoPTA9PT1uLmN1cnJlbnRTbGlkZSYmZT09PW4uY291bnQtMSYmbi52YXJzLmFuaW1hdGlvbkxvb3AmJlwibmV4dFwiIT09bi5kaXJlY3Rpb24/dT8obi5jb3VudCtuLmNsb25lT2Zmc2V0KSpjOjA6bi5jdXJyZW50U2xpZGU9PT1uLmxhc3QmJjA9PT1lJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmXCJwcmV2XCIhPT1uLmRpcmVjdGlvbj91PzA6KG4uY291bnQrMSkqYzp1PyhuLmNvdW50LTEtZStuLmNsb25lT2Zmc2V0KSpjOihlK24uY2xvbmVPZmZzZXQpKmMsbi5zZXRQcm9wcyhoLFwiXCIsbi52YXJzLmFuaW1hdGlvblNwZWVkKSxuLnRyYW5zaXRpb25zPyhuLnZhcnMuYW5pbWF0aW9uTG9vcCYmbi5hdEVuZHx8KG4uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPW4uYW5pbWF0aW5nVG8pLG4uY29udGFpbmVyLnVuYmluZChcIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKSxuLmNvbnRhaW5lci5iaW5kKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIsZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQobi5lbnN1cmVBbmltYXRpb25FbmQpLG4ud3JhcHVwKGMpfSksY2xlYXJUaW1lb3V0KG4uZW5zdXJlQW5pbWF0aW9uRW5kKSxuLmVuc3VyZUFuaW1hdGlvbkVuZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi53cmFwdXAoYyl9LG4udmFycy5hbmltYXRpb25TcGVlZCsxMDApKTpuLmNvbnRhaW5lci5hbmltYXRlKG4uYXJncyxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyxmdW5jdGlvbigpe24ud3JhcHVwKGMpfSl9bi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQobi52YXJzLmFuaW1hdGlvblNwZWVkKX19LG4ud3JhcHVwPWZ1bmN0aW9uKGUpe3B8fHZ8fCgwPT09bi5jdXJyZW50U2xpZGUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3QmJm4udmFycy5hbmltYXRpb25Mb29wP24uc2V0UHJvcHMoZSxcImp1bXBFbmRcIik6bi5jdXJyZW50U2xpZGU9PT1uLmxhc3QmJjA9PT1uLmFuaW1hdGluZ1RvJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmbi5zZXRQcm9wcyhlLFwianVtcFN0YXJ0XCIpKSxuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1uLmFuaW1hdGluZ1RvLG4udmFycy5hZnRlcihuKX0sbi5hbmltYXRlU2xpZGVzPWZ1bmN0aW9uKCl7IW4uYW5pbWF0aW5nJiZlJiZuLmZsZXhBbmltYXRlKG4uZ2V0VGFyZ2V0KFwibmV4dFwiKSl9LG4ucGF1c2U9ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKG4uYW5pbWF0ZWRTbGlkZXMpLG4uYW5pbWF0ZWRTbGlkZXM9bnVsbCxuLnBsYXlpbmc9ITEsbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkudXBkYXRlKFwicGxheVwiKSxuLnN5bmNFeGlzdHMmJmYuc3luYyhcInBhdXNlXCIpfSxuLnBsYXk9ZnVuY3Rpb24oKXtuLnBsYXlpbmcmJmNsZWFySW50ZXJ2YWwobi5hbmltYXRlZFNsaWRlcyksbi5hbmltYXRlZFNsaWRlcz1uLmFuaW1hdGVkU2xpZGVzfHxzZXRJbnRlcnZhbChuLmFuaW1hdGVTbGlkZXMsbi52YXJzLnNsaWRlc2hvd1NwZWVkKSxuLnN0YXJ0ZWQ9bi5wbGF5aW5nPSEwLG4udmFycy5wYXVzZVBsYXkmJmYucGF1c2VQbGF5LnVwZGF0ZShcInBhdXNlXCIpLG4uc3luY0V4aXN0cyYmZi5zeW5jKFwicGxheVwiKX0sbi5zdG9wPWZ1bmN0aW9uKCl7bi5wYXVzZSgpLG4uc3RvcHBlZD0hMH0sbi5jYW5BZHZhbmNlPWZ1bmN0aW9uKGUsdCl7dmFyIGE9bT9uLnBhZ2luZ0NvdW50LTE6bi5sYXN0O3JldHVybiEhdHx8KCEoIW18fG4uY3VycmVudEl0ZW0hPT1uLmNvdW50LTF8fDAhPT1lfHxcInByZXZcIiE9PW4uZGlyZWN0aW9uKXx8KCFtfHwwIT09bi5jdXJyZW50SXRlbXx8ZSE9PW4ucGFnaW5nQ291bnQtMXx8XCJuZXh0XCI9PT1uLmRpcmVjdGlvbikmJighKGU9PT1uLmN1cnJlbnRTbGlkZSYmIW0pJiYoISFuLnZhcnMuYW5pbWF0aW9uTG9vcHx8KCFuLmF0RW5kfHwwIT09bi5jdXJyZW50U2xpZGV8fGUhPT1hfHxcIm5leHRcIj09PW4uZGlyZWN0aW9uKSYmKCFuLmF0RW5kfHxuLmN1cnJlbnRTbGlkZSE9PWF8fDAhPT1lfHxcIm5leHRcIiE9PW4uZGlyZWN0aW9uKSkpKX0sbi5nZXRUYXJnZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG4uZGlyZWN0aW9uPWUsXCJuZXh0XCI9PT1lP24uY3VycmVudFNsaWRlPT09bi5sYXN0PzA6bi5jdXJyZW50U2xpZGUrMTowPT09bi5jdXJyZW50U2xpZGU/bi5sYXN0Om4uY3VycmVudFNsaWRlLTF9LG4uc2V0UHJvcHM9ZnVuY3Rpb24oZSx0LGEpe3ZhciBpPWZ1bmN0aW9uKCl7dmFyIGE9ZXx8KG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvO3JldHVybiBmdW5jdGlvbigpe2lmKHYpcmV0dXJuXCJzZXRUb3VjaFwiPT09dD9lOnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/bi5saW1pdDphO3N3aXRjaCh0KXtjYXNlXCJzZXRUb3RhbFwiOnJldHVybiB1PyhuLmNvdW50LTEtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqZToobi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqZTtjYXNlXCJzZXRUb3VjaFwiOnJldHVybiBlO2Nhc2VcImp1bXBFbmRcIjpyZXR1cm4gdT9lOm4uY291bnQqZTtjYXNlXCJqdW1wU3RhcnRcIjpyZXR1cm4gdT9uLmNvdW50KmU6ZTtkZWZhdWx0OnJldHVybiBlfX0oKSoobi52YXJzLnJ0bD8xOi0xKStcInB4XCJ9KCk7bi50cmFuc2l0aW9ucyYmKGk9bi5pc0ZpcmVmb3g/ZD9cInRyYW5zbGF0ZTNkKDAsXCIraStcIiwwKVwiOlwidHJhbnNsYXRlM2QoXCIrcGFyc2VJbnQoaSkrXCJweCwwLDApXCI6ZD9cInRyYW5zbGF0ZTNkKDAsXCIraStcIiwwKVwiOlwidHJhbnNsYXRlM2QoXCIrKG4udmFycy5ydGw/LTE6MSkqcGFyc2VJbnQoaSkrXCJweCwwLDApXCIsYT12b2lkIDAhPT1hP2EvMWUzK1wic1wiOlwiMHNcIixuLmNvbnRhaW5lci5jc3MoXCItXCIrbi5wZngrXCItdHJhbnNpdGlvbi1kdXJhdGlvblwiLGEpLG4uY29udGFpbmVyLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIixhKSksbi5hcmdzW24ucHJvcF09aSwobi50cmFuc2l0aW9uc3x8dm9pZCAwPT09YSkmJm4uY29udGFpbmVyLmNzcyhuLmFyZ3MpLG4uY29udGFpbmVyLmNzcyhcInRyYW5zZm9ybVwiLGkpfSxuLnNldHVwPWZ1bmN0aW9uKGUpe2lmKHApbi52YXJzLnJ0bD9uLnNsaWRlcy5jc3Moe3dpZHRoOlwiMTAwJVwiLGZsb2F0OlwicmlnaHRcIixtYXJnaW5MZWZ0OlwiLTEwMCVcIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KTpuLnNsaWRlcy5jc3Moe3dpZHRoOlwiMTAwJVwiLGZsb2F0OlwibGVmdFwiLG1hcmdpblJpZ2h0OlwiLTEwMCVcIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KSxcImluaXRcIj09PWUmJihzP24uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHdlYmtpdFRyYW5zaXRpb246XCJvcGFjaXR5IFwiK24udmFycy5hbmltYXRpb25TcGVlZC8xZTMrXCJzIGVhc2VcIix6SW5kZXg6MX0pLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6Mn0pOjA9PW4udmFycy5mYWRlRmlyc3RTbGlkZT9uLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix6SW5kZXg6MX0pLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoyfSkuY3NzKHtvcGFjaXR5OjF9KTpuLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix6SW5kZXg6MX0pLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoyfSkuYW5pbWF0ZSh7b3BhY2l0eToxfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZykpLG4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KCk7ZWxzZXt2YXIgdCxhO1wiaW5pdFwiPT09ZSYmKG4udmlld3BvcnQ9JCgnPGRpdiBjbGFzcz1cIicraSsndmlld3BvcnRcIj48L2Rpdj4nKS5jc3Moe292ZXJmbG93OlwiaGlkZGVuXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSkuYXBwZW5kVG8obikuYXBwZW5kKG4uY29udGFpbmVyKSxuLmNsb25lQ291bnQ9MCxuLmNsb25lT2Zmc2V0PTAsdSYmKGE9JC5tYWtlQXJyYXkobi5zbGlkZXMpLnJldmVyc2UoKSxuLnNsaWRlcz0kKGEpLG4uY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKG4uc2xpZGVzKSkpLG4udmFycy5hbmltYXRpb25Mb29wJiYhdiYmKG4uY2xvbmVDb3VudD0yLG4uY2xvbmVPZmZzZXQ9MSxcImluaXRcIiE9PWUmJm4uY29udGFpbmVyLmZpbmQoXCIuY2xvbmVcIikucmVtb3ZlKCksbi5jb250YWluZXIuYXBwZW5kKGYudW5pcXVlSUQobi5zbGlkZXMuZmlyc3QoKS5jbG9uZSgpLmFkZENsYXNzKFwiY2xvbmVcIikpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSkucHJlcGVuZChmLnVuaXF1ZUlEKG4uc2xpZGVzLmxhc3QoKS5jbG9uZSgpLmFkZENsYXNzKFwiY2xvbmVcIikpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSkpLG4ubmV3U2xpZGVzPSQobi52YXJzLnNlbGVjdG9yLG4pLHQ9dT9uLmNvdW50LTEtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldDpuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0LGQmJiF2PyhuLmNvbnRhaW5lci5oZWlnaHQoMjAwKihuLmNvdW50K24uY2xvbmVDb3VudCkrXCIlXCIpLmNzcyhcInBvc2l0aW9uXCIsXCJhYnNvbHV0ZVwiKS53aWR0aChcIjEwMCVcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24ubmV3U2xpZGVzLmNzcyh7ZGlzcGxheTpcImJsb2NrXCJ9KSxuLmRvTWF0aCgpLG4udmlld3BvcnQuaGVpZ2h0KG4uaCksbi5zZXRQcm9wcyh0Km4uaCxcImluaXRcIil9LFwiaW5pdFwiPT09ZT8xMDA6MCkpOihuLmNvbnRhaW5lci53aWR0aCgyMDAqKG4uY291bnQrbi5jbG9uZUNvdW50KStcIiVcIiksbi5zZXRQcm9wcyh0Km4uY29tcHV0ZWRXLFwiaW5pdFwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5kb01hdGgoKSxuLnZhcnMucnRsJiZuLmlzRmlyZWZveD9uLm5ld1NsaWRlcy5jc3Moe3dpZHRoOm4uY29tcHV0ZWRXLG1hcmdpblJpZ2h0Om4uY29tcHV0ZWRNLGZsb2F0OlwicmlnaHRcIixkaXNwbGF5OlwiYmxvY2tcIn0pOm4ubmV3U2xpZGVzLmNzcyh7d2lkdGg6bi5jb21wdXRlZFcsbWFyZ2luUmlnaHQ6bi5jb21wdXRlZE0sZmxvYXQ6XCJsZWZ0XCIsZGlzcGxheTpcImJsb2NrXCJ9KSxuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpfSxcImluaXRcIj09PWU/MTAwOjApKX12fHxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKG4uY3VycmVudFNsaWRlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLG4udmFycy5pbml0KG4pfSxuLmRvTWF0aD1mdW5jdGlvbigpe3ZhciBlPW4uc2xpZGVzLmZpcnN0KCksdD1uLnZhcnMuaXRlbU1hcmdpbixhPW4udmFycy5taW5JdGVtcyxpPW4udmFycy5tYXhJdGVtcztuLnc9dm9pZCAwPT09bi52aWV3cG9ydD9uLndpZHRoKCk6bi52aWV3cG9ydC53aWR0aCgpLG4uaXNGaXJlZm94JiYobi53PW4ud2lkdGgoKSksbi5oPWUuaGVpZ2h0KCksbi5ib3hQYWRkaW5nPWUub3V0ZXJXaWR0aCgpLWUud2lkdGgoKSx2PyhuLml0ZW1UPW4udmFycy5pdGVtV2lkdGgrdCxuLml0ZW1NPXQsbi5taW5XPWE/YSpuLml0ZW1UOm4udyxuLm1heFc9aT9pKm4uaXRlbVQtdDpuLncsbi5pdGVtVz1uLm1pblc+bi53PyhuLnctdCooYS0xKSkvYTpuLm1heFc8bi53PyhuLnctdCooaS0xKSkvaTpuLnZhcnMuaXRlbVdpZHRoPm4udz9uLnc6bi52YXJzLml0ZW1XaWR0aCxuLnZpc2libGU9TWF0aC5mbG9vcihuLncvbi5pdGVtVyksbi5tb3ZlPW4udmFycy5tb3ZlPjAmJm4udmFycy5tb3ZlPG4udmlzaWJsZT9uLnZhcnMubW92ZTpuLnZpc2libGUsbi5wYWdpbmdDb3VudD1NYXRoLmNlaWwoKG4uY291bnQtbi52aXNpYmxlKS9uLm1vdmUrMSksbi5sYXN0PW4ucGFnaW5nQ291bnQtMSxuLmxpbWl0PTE9PT1uLnBhZ2luZ0NvdW50PzA6bi52YXJzLml0ZW1XaWR0aD5uLnc/bi5pdGVtVyoobi5jb3VudC0xKSt0KihuLmNvdW50LTEpOihuLml0ZW1XK3QpKm4uY291bnQtbi53LXQpOihuLml0ZW1XPW4udyxuLml0ZW1NPXQsbi5wYWdpbmdDb3VudD1uLmNvdW50LG4ubGFzdD1uLmNvdW50LTEpLG4uY29tcHV0ZWRXPW4uaXRlbVctbi5ib3hQYWRkaW5nLG4uY29tcHV0ZWRNPW4uaXRlbU19LG4udXBkYXRlPWZ1bmN0aW9uKGUsdCl7bi5kb01hdGgoKSx2fHwoZTxuLmN1cnJlbnRTbGlkZT9uLmN1cnJlbnRTbGlkZSs9MTplPD1uLmN1cnJlbnRTbGlkZSYmMCE9PWUmJihuLmN1cnJlbnRTbGlkZS09MSksbi5hbmltYXRpbmdUbz1uLmN1cnJlbnRTbGlkZSksbi52YXJzLmNvbnRyb2xOYXYmJiFuLm1hbnVhbENvbnRyb2xzJiYoXCJhZGRcIj09PXQmJiF2fHxuLnBhZ2luZ0NvdW50Pm4uY29udHJvbE5hdi5sZW5ndGg/Zi5jb250cm9sTmF2LnVwZGF0ZShcImFkZFwiKTooXCJyZW1vdmVcIj09PXQmJiF2fHxuLnBhZ2luZ0NvdW50PG4uY29udHJvbE5hdi5sZW5ndGgpJiYodiYmbi5jdXJyZW50U2xpZGU+bi5sYXN0JiYobi5jdXJyZW50U2xpZGUtPTEsbi5hbmltYXRpbmdUby09MSksZi5jb250cm9sTmF2LnVwZGF0ZShcInJlbW92ZVwiLG4ubGFzdCkpKSxuLnZhcnMuZGlyZWN0aW9uTmF2JiZmLmRpcmVjdGlvbk5hdi51cGRhdGUoKX0sbi5hZGRTbGlkZT1mdW5jdGlvbihlLHQpe3ZhciBhPSQoZSk7bi5jb3VudCs9MSxuLmxhc3Q9bi5jb3VudC0xLGQmJnU/dm9pZCAwIT09dD9uLnNsaWRlcy5lcShuLmNvdW50LXQpLmFmdGVyKGEpOm4uY29udGFpbmVyLnByZXBlbmQoYSk6dm9pZCAwIT09dD9uLnNsaWRlcy5lcSh0KS5iZWZvcmUoYSk6bi5jb250YWluZXIuYXBwZW5kKGEpLG4udXBkYXRlKHQsXCJhZGRcIiksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IrXCI6bm90KC5jbG9uZSlcIixuKSxuLnNldHVwKCksbi52YXJzLmFkZGVkKG4pfSxuLnJlbW92ZVNsaWRlPWZ1bmN0aW9uKGUpe3ZhciB0PWlzTmFOKGUpP24uc2xpZGVzLmluZGV4KCQoZSkpOmU7bi5jb3VudC09MSxuLmxhc3Q9bi5jb3VudC0xLGlzTmFOKGUpPyQoZSxuLnNsaWRlcykucmVtb3ZlKCk6ZCYmdT9uLnNsaWRlcy5lcShuLmxhc3QpLnJlbW92ZSgpOm4uc2xpZGVzLmVxKGUpLnJlbW92ZSgpLG4uZG9NYXRoKCksbi51cGRhdGUodCxcInJlbW92ZVwiKSxuLnNsaWRlcz0kKG4udmFycy5zZWxlY3RvcitcIjpub3QoLmNsb25lKVwiLG4pLG4uc2V0dXAoKSxuLnZhcnMucmVtb3ZlZChuKX0sZi5pbml0KCl9LCQod2luZG93KS5ibHVyKGZ1bmN0aW9uKHQpe2U9ITF9KS5mb2N1cyhmdW5jdGlvbih0KXtlPSEwfSksJC5mbGV4c2xpZGVyLmRlZmF1bHRzPXtuYW1lc3BhY2U6XCJmbGV4LVwiLHNlbGVjdG9yOlwiLnNsaWRlcyA+IGxpXCIsYW5pbWF0aW9uOlwiZmFkZVwiLGVhc2luZzpcInN3aW5nXCIsZGlyZWN0aW9uOlwiaG9yaXpvbnRhbFwiLHJldmVyc2U6ITEsYW5pbWF0aW9uTG9vcDohMCxzbW9vdGhIZWlnaHQ6ITEsc3RhcnRBdDowLHNsaWRlc2hvdzohMCxzbGlkZXNob3dTcGVlZDo3ZTMsYW5pbWF0aW9uU3BlZWQ6NjAwLGluaXREZWxheTowLHJhbmRvbWl6ZTohMSxmYWRlRmlyc3RTbGlkZTohMCx0aHVtYkNhcHRpb25zOiExLHBhdXNlT25BY3Rpb246ITAscGF1c2VPbkhvdmVyOiExLHBhdXNlSW52aXNpYmxlOiEwLHVzZUNTUzohMCx0b3VjaDohMCx2aWRlbzohMSxjb250cm9sTmF2OiEwLGRpcmVjdGlvbk5hdjohMCxwcmV2VGV4dDpcIlByZXZpb3VzXCIsbmV4dFRleHQ6XCJOZXh0XCIsa2V5Ym9hcmQ6ITAsbXVsdGlwbGVLZXlib2FyZDohMSxtb3VzZXdoZWVsOiExLHBhdXNlUGxheTohMSxwYXVzZVRleHQ6XCJQYXVzZVwiLHBsYXlUZXh0OlwiUGxheVwiLGNvbnRyb2xzQ29udGFpbmVyOlwiXCIsbWFudWFsQ29udHJvbHM6XCJcIixjdXN0b21EaXJlY3Rpb25OYXY6XCJcIixzeW5jOlwiXCIsYXNOYXZGb3I6XCJcIixpdGVtV2lkdGg6MCxpdGVtTWFyZ2luOjAsbWluSXRlbXM6MSxtYXhJdGVtczowLG1vdmU6MCxhbGxvd09uZVNsaWRlOiEwLGlzRmlyZWZveDohMSxzdGFydDpmdW5jdGlvbigpe30sYmVmb3JlOmZ1bmN0aW9uKCl7fSxhZnRlcjpmdW5jdGlvbigpe30sZW5kOmZ1bmN0aW9uKCl7fSxhZGRlZDpmdW5jdGlvbigpe30scmVtb3ZlZDpmdW5jdGlvbigpe30saW5pdDpmdW5jdGlvbigpe30scnRsOiExfSwkLmZuLmZsZXhzbGlkZXI9ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSYmKGU9e30pLFwib2JqZWN0XCI9PXR5cGVvZiBlKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD0kKHRoaXMpLGE9ZS5zZWxlY3Rvcj9lLnNlbGVjdG9yOlwiLnNsaWRlcyA+IGxpXCIsbj10LmZpbmQoYSk7MT09PW4ubGVuZ3RoJiYhMT09PWUuYWxsb3dPbmVTbGlkZXx8MD09PW4ubGVuZ3RoPyhuLmZhZGVJbig0MDApLGUuc3RhcnQmJmUuc3RhcnQodCkpOnZvaWQgMD09PXQuZGF0YShcImZsZXhzbGlkZXJcIikmJm5ldyAkLmZsZXhzbGlkZXIodGhpcyxlKX0pO3ZhciB0PSQodGhpcykuZGF0YShcImZsZXhzbGlkZXJcIik7c3dpdGNoKGUpe2Nhc2VcInBsYXlcIjp0LnBsYXkoKTticmVhaztjYXNlXCJwYXVzZVwiOnQucGF1c2UoKTticmVhaztjYXNlXCJzdG9wXCI6dC5zdG9wKCk7YnJlYWs7Y2FzZVwibmV4dFwiOnQuZmxleEFuaW1hdGUodC5nZXRUYXJnZXQoXCJuZXh0XCIpLCEwKTticmVhaztjYXNlXCJwcmV2XCI6Y2FzZVwicHJldmlvdXNcIjp0LmZsZXhBbmltYXRlKHQuZ2V0VGFyZ2V0KFwicHJldlwiKSwhMCk7YnJlYWs7ZGVmYXVsdDpcIm51bWJlclwiPT10eXBlb2YgZSYmdC5mbGV4QW5pbWF0ZShlLCEwKX19fShqUXVlcnkpOyIsIiFmdW5jdGlvbihnKXtnLmZuLnR3ZW50eXR3ZW50eT1mdW5jdGlvbihtKXttPWcuZXh0ZW5kKHtkZWZhdWx0X29mZnNldF9wY3Q6LjUsb3JpZW50YXRpb246XCJob3Jpem9udGFsXCIsYmVmb3JlX2xhYmVsOlwiQmVmb3JlXCIsYWZ0ZXJfbGFiZWw6XCJBZnRlclwiLG5vX292ZXJsYXk6ITEsbW92ZV9zbGlkZXJfb25faG92ZXI6ITEsbW92ZV93aXRoX2hhbmRsZV9vbmx5OiEwLGNsaWNrX3RvX21vdmU6ITF9LG0pO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1tLmRlZmF1bHRfb2Zmc2V0X3BjdCxzPWcodGhpcykscj1tLm9yaWVudGF0aW9uLHQ9XCJ2ZXJ0aWNhbFwiPT09cj9cImRvd25cIjpcImxlZnRcIixuPVwidmVydGljYWxcIj09PXI/XCJ1cFwiOlwicmlnaHRcIjtpZihzLndyYXAoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktd3JhcHBlciB0d2VudHl0d2VudHktXCIrcitcIic+PC9kaXY+XCIpLCFtLm5vX292ZXJsYXkpe3MuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LW92ZXJsYXknPjwvZGl2PlwiKTt2YXIgYT1zLmZpbmQoXCIudHdlbnR5dHdlbnR5LW92ZXJsYXlcIik7YS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktYmVmb3JlLWxhYmVsJyBkYXRhLWNvbnRlbnQ9J1wiK20uYmVmb3JlX2xhYmVsK1wiJz48L2Rpdj5cIiksYS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktYWZ0ZXItbGFiZWwnIGRhdGEtY29udGVudD0nXCIrbS5hZnRlcl9sYWJlbCtcIic+PC9kaXY+XCIpfXZhciBjPXMuZmluZChcImltZzpmaXJzdFwiKSxsPXMuZmluZChcImltZzpsYXN0XCIpO3MuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWhhbmRsZSc+PC9kaXY+XCIpO3ZhciBkPXMuZmluZChcIi50d2VudHl0d2VudHktaGFuZGxlXCIpO2QuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J3R3ZW50eXR3ZW50eS1cIit0K1wiLWFycm93Jz48L3NwYW4+XCIpLGQuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J3R3ZW50eXR3ZW50eS1cIituK1wiLWFycm93Jz48L3NwYW4+XCIpLHMuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktY29udGFpbmVyXCIpLGMuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktYmVmb3JlXCIpLGwuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktYWZ0ZXJcIik7ZnVuY3Rpb24gaSh0KXt2YXIgZSxuLGEsaSxvPShlPXQsbj1jLndpZHRoKCksYT1jLmhlaWdodCgpLHt3Om4rXCJweFwiLGg6YStcInB4XCIsY3c6ZSpuK1wicHhcIixjaDplKmErXCJweFwifSk7ZC5jc3MoXCJ2ZXJ0aWNhbFwiPT09cj9cInRvcFwiOlwibGVmdFwiLFwidmVydGljYWxcIj09PXI/by5jaDpvLmN3KSxpPW8sXCJ2ZXJ0aWNhbFwiPT09cj8oYy5jc3MoXCJjbGlwXCIsXCJyZWN0KDAsXCIraS53K1wiLFwiK2kuY2grXCIsMClcIiksbC5jc3MoXCJjbGlwXCIsXCJyZWN0KFwiK2kuY2grXCIsXCIraS53K1wiLFwiK2kuaCtcIiwwKVwiKSk6KGMuY3NzKFwiY2xpcFwiLFwicmVjdCgwLFwiK2kuY3crXCIsXCIraS5oK1wiLDApXCIpLGwuY3NzKFwiY2xpcFwiLFwicmVjdCgwLFwiK2kudytcIixcIitpLmgrXCIsXCIraS5jdytcIilcIikpLHMuY3NzKFwiaGVpZ2h0XCIsaS5oKX1mdW5jdGlvbiBvKHQsZSl7dmFyIG4sYSxpO3JldHVybiBuPVwidmVydGljYWxcIj09PXI/KGUteSkvdToodC1wKS9oLGE9MCxpPTEsTWF0aC5tYXgoYSxNYXRoLm1pbihpLG4pKX1nKHdpbmRvdykub24oXCJyZXNpemUudHdlbnR5dHdlbnR5XCIsZnVuY3Rpb24odCl7aShlKX0pO2Z1bmN0aW9uIHcodCl7KHQuZGlzdFg+dC5kaXN0WSYmdC5kaXN0WDwtdC5kaXN0WXx8dC5kaXN0WDx0LmRpc3RZJiZ0LmRpc3RYPi10LmRpc3RZKSYmXCJ2ZXJ0aWNhbFwiIT09cj90LnByZXZlbnREZWZhdWx0KCk6KHQuZGlzdFg8dC5kaXN0WSYmdC5kaXN0WDwtdC5kaXN0WXx8dC5kaXN0WD50LmRpc3RZJiZ0LmRpc3RYPi10LmRpc3RZKSYmXCJ2ZXJ0aWNhbFwiPT09ciYmdC5wcmV2ZW50RGVmYXVsdCgpLHMuYWRkQ2xhc3MoXCJhY3RpdmVcIikscD1zLm9mZnNldCgpLmxlZnQseT1zLm9mZnNldCgpLnRvcCxoPWMud2lkdGgoKSx1PWMuaGVpZ2h0KCl9ZnVuY3Rpb24gZih0KXtzLmhhc0NsYXNzKFwiYWN0aXZlXCIpJiYoZT1vKHQucGFnZVgsdC5wYWdlWSksaShlKSl9ZnVuY3Rpb24gdigpe3MucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9dmFyIHA9MCx5PTAsaD0wLHU9MCxfPW0ubW92ZV93aXRoX2hhbmRsZV9vbmx5P2Q6cztfLm9uKFwibW92ZXN0YXJ0XCIsdyksXy5vbihcIm1vdmVcIixmKSxfLm9uKFwibW92ZWVuZFwiLHYpLG0ubW92ZV9zbGlkZXJfb25faG92ZXImJihzLm9uKFwibW91c2VlbnRlclwiLHcpLHMub24oXCJtb3VzZW1vdmVcIixmKSxzLm9uKFwibW91c2VsZWF2ZVwiLHYpKSxkLm9uKFwidG91Y2htb3ZlXCIsZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpfSkscy5maW5kKFwiaW1nXCIpLm9uKFwibW91c2Vkb3duXCIsZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpfSksbS5jbGlja190b19tb3ZlJiZzLm9uKFwiY2xpY2tcIixmdW5jdGlvbih0KXtwPXMub2Zmc2V0KCkubGVmdCx5PXMub2Zmc2V0KCkudG9wLGg9Yy53aWR0aCgpLHU9Yy5oZWlnaHQoKSxlPW8odC5wYWdlWCx0LnBhZ2VZKSxpKGUpfSksZyh3aW5kb3cpLnRyaWdnZXIoXCJyZXNpemUudHdlbnR5dHdlbnR5XCIpfSl9fShqUXVlcnkpOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjbWVudS1vcGVuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI21lbnUtb3BlbiBzcGFuJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAkKCcubmF2Jykuc2xpZGVUb2dnbGUoJ3Nsb3cnKTsgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wcm9kdWN0cyBzdWIgbWVudVxyXG4gICAgJCgnLnByb2R1Y3RzLW1lbnUtbGluaz5hJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmRvd25sb2FkcycpLnJlbW92ZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzJykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgIH0pOyAgXHJcblxyXG4gICAgLy9kb3dubG9hZHMgc3ViIG1lbnVcclxuICAgICQoJy5kb3dubG9hZC1tZW51LWxpbmsnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcucHJvZHVjdHMnKS5yZW1vdmVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICQoJy5kb3dubG9hZHMnKS50b2dnbGVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jaGFuZ2UgcHJvZHVjdCBtZW51IGxpbmsgb24gbW9iaWxlXHJcblxyXG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICBpZih3IDwgMTIwMCkge1xyXG4gICAgICAkKCcucHJvZHVjdHMtbWVudS1saW5rPmEnKS5hdHRyKCdocmVmJywgJy9wcm9kdWN0cycpO1xyXG4gICAgICAkKCcuZG93bmxvYWQtbWVudS1saW5rPmEnKS5hdHRyKCdocmVmJywgJy9kb3dubG9hZHMnKTtcclxuICAgIH0gXHJcblxyXG4gIC8vY29sbGFwc2libGUgbWVudXMgZnVuY3Rpb25cclxuICBmdW5jdGlvbiBzZXR1cF9jb2xsYXBzaWJsZV9zdWJtZW51cygpIHtcclxuICAgIHZhciAkbWVudSA9ICQoJyNtb2JpbGVfbWVudScpLFxyXG4gICAgICB0b3BfbGV2ZWxfbGluayA9ICcjbW9iaWxlX21lbnUgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhJztcclxuICAgICAgY29uc29sZS5sb2coJG1lbnUpO1xyXG4gICAgJG1lbnUuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykub2ZmKCdjbGljaycpO1xyXG4gICAgICAgXHJcbiAgICAgIGlmICggJCh0aGlzKS5pcyh0b3BfbGV2ZWxfbGluaykgKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdocmVmJywgJyMnKTtcclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgIGlmICggISAkKHRoaXMpLnNpYmxpbmdzKCcuc3ViLW1lbnUnKS5sZW5ndGggKSB7XHJcbiAgICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAgXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXR1cF9jb2xsYXBzaWJsZV9zdWJtZW51cygpO1xyXG4gICAgfSwgNzAwKTtcclxuICB9KTtcclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgICQoJy5uZXdzLXNsaWRlcicpLmZsZXhzbGlkZXIoe1xyXG4gICAgICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXHJcbiAgICAgICAgc2xpZGVzaG93U3BlZWQ6IDcwMDAsXHJcbiAgICAgICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCxcclxuICAgICAgICBhbmltYXRpb25Mb29wOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25BY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIC8vY29udHJvbE5hdjogdHJ1ZSwgIFxyXG4gICAgICAgIHJ0bDogdHJ1ZSxcclxuICAgICAgICBjdXN0b21EaXJlY3Rpb25OYXY6ICQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKVxyXG4gICAgfSk7XHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcucHJvZHVjdC1zbGlkZXInKS5mbGV4c2xpZGVyKHtcclxuICAgICAgICBhbmltYXRpb246IFwiZmFkZVwiLFxyXG4gICAgICAgIC8vc2xpZGVzaG93U3BlZWQ6IDcwMDAsXHJcbiAgICAgICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCxcclxuICAgICAgICBhbmltYXRpb25Mb29wOiBmYWxzZSxcclxuICAgICAgICBwYXVzZU9uQWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBjb250cm9sTmF2OiB0cnVlLFxyXG4gICAgICAgIHJ0bDogdHJ1ZSxcclxuICAgICAgICBjdXN0b21EaXJlY3Rpb25OYXY6ICQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKVxyXG4gICAgfSk7XHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0JCgnLmJlZm9yZScpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuYmVmb3JlJykuZmFkZU91dCgxNTAwKTtcclxuXHR9KTtcclxufSk7XHJcblxyXG5pZigkKCcuaW1hZ2UtY29tcGFyaXNvbicpLmxlbmd0aCkge1xyXG5cdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdCAgJChcIiNpbWFnZXNfdG9fY29tcGFyZVwiKS50d2VudHl0d2VudHkoKTtcclxuXHR9KTtcclxufSIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgJCgnLmZsZXhzbGlkZXInKS5mbGV4c2xpZGVyKHtcclxuICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXHJcbiAgICBzbGlkZXNob3dTcGVlZDogNzAwMCxcclxuICAgIGFuaW1hdGlvblNwZWVkOiA2MDAsICBcclxuICAgIGFuaW1hdGlvbkxvb3A6IHRydWUsXHJcblx0Y29udHJvbE5hdjogdHJ1ZSwgIFxyXG4gICAgcnRsOiB0cnVlLFxyXG4gIH0pO1xyXG59KTsiLCIvL2FkZCBzbW9vdGggc2Nyb2xsIHRvIGFsbCBsaW5rc1xyXG52YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgLy8gQWRkIHNtb290aCBzY3JvbGxpbmcgdG8gYWxsIGxpbmtzXHJcbiAgJChcImFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAvLyBNYWtlIHN1cmUgdGhpcy5oYXNoIGhhcyBhIHZhbHVlIGJlZm9yZSBvdmVycmlkaW5nIGRlZmF1bHQgYmVoYXZpb3JcclxuICAgIGlmICh0aGlzLmhhc2ggIT09IFwiXCIpIHtcclxuICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGFuY2hvciBjbGljayBiZWhhdmlvclxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgLy8gU3RvcmUgaGFzaFxyXG4gICAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcclxuXHJcbiAgICAgIC8vIFVzaW5nIGpRdWVyeSdzIGFuaW1hdGUoKSBtZXRob2QgdG8gYWRkIHNtb290aCBwYWdlIHNjcm9sbFxyXG4gICAgICAvLyBUaGUgb3B0aW9uYWwgbnVtYmVyICg4MDApIHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0YWtlcyB0byBzY3JvbGwgdG8gdGhlIHNwZWNpZmllZCBhcmVhXHJcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6ICQoaGFzaCkub2Zmc2V0KCkudG9wXHJcbiAgICAgIH0sIDgwMCwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgLy8gQWRkIGhhc2ggKCMpIHRvIFVSTCB3aGVuIGRvbmUgc2Nyb2xsaW5nIChkZWZhdWx0IGNsaWNrIGJlaGF2aW9yKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcclxuICAgICAgfSk7XHJcbiAgICB9IC8vIEVuZCBpZlxyXG4gIH0pO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9