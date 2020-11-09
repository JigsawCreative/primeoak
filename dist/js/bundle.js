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
    $('.contact__cross').click(function () {
      $('.contact-col-1').removeClass('show-column');
      $('.contact-col-2').removeClass('show-column');
    });
    $('.opportunities').click(function () {
      $('.contact-col-2').toggleClass('show-column');
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvNDA0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9kZXNpZ25lci1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mcm9udC1wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Z1bGwtaW1hZ2UtZmxleHNsaWRlci1pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2pxdWVyeS5ldmVudC5tb3ZlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9qcXVlcnkuZmxleHNsaWRlci1taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvanF1ZXJ5LnR3ZW50eXR3ZW50eS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9uZXdzLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wcm9kdWN0LXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc21vb3RoLXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImdsb2JhbCIsInVuZGVmaW5lZCIsInNldEltbWVkaWF0ZSIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiZG9jIiwiZG9jdW1lbnQiLCJyZWdpc3RlckltbWVkaWF0ZSIsImNhbGxiYWNrIiwiRnVuY3Rpb24iLCJ0YXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJoYW5kbGUiLCJydW5JZlByZXNlbnQiLCJpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbiIsImNhblVzZVBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwicG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyIsIm9sZE9uTWVzc2FnZSIsIm9ubWVzc2FnZSIsImluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uIiwibWVzc2FnZVByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJldmVudCIsInNvdXJjZSIsImRhdGEiLCJpbmRleE9mIiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbiIsImNoYW5uZWwiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwicG9ydDIiLCJpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uIiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJ0b1N0cmluZyIsInNlbGYiLCJzY29wZSIsIndpbmRvdyIsIlRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsImlkIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJpdGVtIiwibXNlY3MiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwiYWN0aXZlIiwib25UaW1lb3V0IiwiX29uVGltZW91dCIsInJlcXVpcmUiLCJnIiwiJCIsImpRdWVyeSIsInJlYWR5IiwiY2xpY2siLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwidyIsImlubmVyV2lkdGgiLCJhdHRyIiwibG9hZCIsInR3ZW50eXR3ZW50eSIsImhpZGUiLCJhZGRDbGFzcyIsInNob3ciLCJhY3RpdmVUYWIiLCJmaW5kIiwibXNpZSIsImhpZGVWaWRlbyIsImNzcyIsImhpZGVWaWRlb1RpdGxlcyIsIiR3aW5kb3ciLCJmbGV4c2xpZGVyIiwidmFycyIsImdldEdyaWRTaXplIiwiZWFjaCIsImFuaW1hdGlvbiIsInNsaWRlc2hvd1NwZWVkIiwiYW5pbWF0aW9uTG9vcCIsImNvbnRyb2xOYXYiLCJjdXN0b21EaXJlY3Rpb25OYXYiLCJtaW5JdGVtcyIsIm1heEl0ZW1zIiwic3RhcnQiLCJzbGlkZXIiLCJyZXNpemUiLCJncmlkU2l6ZSIsImRlZmluZSIsImFzc2lnbiIsImV4dGVuZCIsInAiLCJhIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwibiIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJFdmVudCIsIm8iLCJ0ZXh0YXJlYSIsImlucHV0Iiwic2VsZWN0IiwiYnV0dG9uIiwiYyIsIm1vdmUiLCJjYW5jZWwiLCJlbmQiLCJ1IiwiciIsImQiLCJTeW1ib2wiLCJtIiwidiIsInNwbGl0IiwiZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcGxpY2UiLCJkaXNwYXRjaEV2ZW50IiwicyIsImtpY2siLCJoIiwibCIsInByZXZlbnREZWZhdWx0IiwiWCIsImlkZW50aWZpZWRUb3VjaCIsImlkZW50aWZpZXIiLCJZIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiVCIsInkiLCJiIiwidG91Y2htb3ZlIiwidG91Y2hlbmQiLCJ0YXJnZXRUb3VjaGVzIiwidGltZVN0YW1wIiwiYWx0S2V5IiwiY3RybEtleSIsInNoaWZ0S2V5Iiwic3RhcnRYIiwic3RhcnRZIiwiZGlzdFgiLCJkaXN0WSIsImRlbHRhWCIsImRlbHRhWSIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImZpbmdlciIsImVuYWJsZU1vdmUiLCJtb3ZlRW5hYmxlZCIsInRhcmdldCIsIkUiLCJ0aW1lciIsInRvdWNoIiwiUyIsIksiLCJrIiwiYWN0aXZlVG91Y2htb3ZlIiwiYWN0aXZlVG91Y2hlbmQiLCJ3aGljaCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJqIiwic3BlY2lhbCIsIm1vdmVzdGFydCIsInNldHVwIiwiQyIsInRlYXJkb3duIiwiYWRkIiwiQSIsIlEiLCJtb3ZlZW5kIiwicSIsImhhbmRsZXIiLCJvcmlnaW5hbEV2ZW50IiwicnRsIiwiZGVmYXVsdHMiLCJuYW1lc3BhY2UiLCJuYXZpZ2F0b3IiLCJtc1BvaW50ZXJFbmFibGVkIiwiTVNHZXN0dXJlIiwiRG9jdW1lbnRUb3VjaCIsImRpcmVjdGlvbiIsInJldmVyc2UiLCJpdGVtV2lkdGgiLCJhc05hdkZvciIsImluaXQiLCJhbmltYXRpbmciLCJjdXJyZW50U2xpZGUiLCJwYXJzZUludCIsInN0YXJ0QXQiLCJpc05hTiIsImFuaW1hdGluZ1RvIiwiYXRFbmQiLCJsYXN0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJzZWxlY3RvciIsInN1YnN0ciIsInNlYXJjaCIsInNsaWRlcyIsImNvbnRhaW5lciIsImNvdW50Iiwic3luY0V4aXN0cyIsInN5bmMiLCJwcm9wIiwibWFudWFsUGF1c2UiLCJzdG9wcGVkIiwic3RhcnRlZCIsInN0YXJ0VGltZW91dCIsInRyYW5zaXRpb25zIiwidmlkZW8iLCJ1c2VDU1MiLCJzdHlsZSIsInBmeCIsInJlcGxhY2UiLCJpc0ZpcmVmb3giLCJ1c2VyQWdlbnQiLCJlbnN1cmVBbmltYXRpb25FbmQiLCJjb250cm9sc0NvbnRhaW5lciIsIm1hbnVhbENvbnRyb2xzIiwicmFuZG9taXplIiwic29ydCIsInJvdW5kIiwiZW1wdHkiLCJhcHBlbmQiLCJkb01hdGgiLCJkaXJlY3Rpb25OYXYiLCJrZXlib2FyZCIsIm11bHRpcGxlS2V5Ym9hcmQiLCJiaW5kIiwia2V5Q29kZSIsImdldFRhcmdldCIsImZsZXhBbmltYXRlIiwicGF1c2VPbkFjdGlvbiIsIm1vdXNld2hlZWwiLCJwYXVzZVBsYXkiLCJzbGlkZXNob3ciLCJwYXVzZUludmlzaWJsZSIsInBhdXNlT25Ib3ZlciIsImhvdmVyIiwibWFudWFsUGxheSIsInBhdXNlIiwicGxheSIsImlzSGlkZGVuIiwiaW5pdERlbGF5IiwiYXNOYXYiLCJzbW9vdGhIZWlnaHQiLCJmbG9vciIsImN1cnJlbnRJdGVtIiwiZXEiLCJfc2xpZGVyIiwiX2dlc3R1cmUiLCJjdXJyZW50VGFyZ2V0IiwiYWRkUG9pbnRlciIsInBvaW50ZXJJZCIsImluZGV4IiwiaGFzQ2xhc3MiLCJvZmZzZXQiLCJyaWdodCIsInNjcm9sbExlZnQiLCJsZWZ0Iiwic2V0dXBNYW51YWwiLCJzZXR1cFBhZ2luZyIsImNvbnRyb2xOYXZTY2FmZm9sZCIsInBhZ2luZ0NvdW50IiwidGV4dCIsInRodW1iQ2FwdGlvbnMiLCJhcHBlbmRUbyIsInNldCIsImRlbGVnYXRlIiwidHlwZSIsInNldFRvQ2xlYXJXYXRjaGVkRXZlbnQiLCJ1cGRhdGUiLCJyZW1vdmUiLCJjbG9zZXN0IiwicHJldlRleHQiLCJuZXh0VGV4dCIsInJlbW92ZUF0dHIiLCJmaWx0ZXIiLCJwbGF5VGV4dCIsInBhdXNlVGV4dCIsInN0b3BQcm9wYWdhdGlvbiIsIk51bWJlciIsIkRhdGUiLCJsaW1pdCIsIml0ZW1XIiwiaXRlbU1hcmdpbiIsImNsb25lT2Zmc2V0IiwidHJhbnNsYXRpb25YIiwidHJhbnNsYXRpb25ZIiwieCIsImFicyIsIk1TR0VTVFVSRV9GTEFHX0lORVJUSUEiLCJzdG9wIiwic2V0UHJvcHMiLCJjYW5BZHZhbmNlIiwibXNUb3VjaEFjdGlvbiIsInRvdWNoZXMiLCJpcyIsIndpZHRoIiwiY29tcHV0ZWRXIiwidmlld3BvcnQiLCJoZWlnaHQiLCJuZXdTbGlkZXMiLCJhbmltYXRlIiwiaW5uZXJIZWlnaHQiLCJwbGF5aW5nIiwidW5pcXVlSUQiLCJ2aXNQcm9wIiwiZ2V0SGlkZGVuUHJvcCIsImNlaWwiLCJ2aXNpYmxlIiwiYmVmb3JlIiwib3BhY2l0eSIsInpJbmRleCIsIndyYXB1cCIsImFuaW1hdGlvblNwZWVkIiwiZWFzaW5nIiwidW5iaW5kIiwiYWZ0ZXIiLCJhbmltYXRlU2xpZGVzIiwiYW5pbWF0ZWRTbGlkZXMiLCJtYXJnaW5MZWZ0IiwicG9zaXRpb24iLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJ3ZWJraXRUcmFuc2l0aW9uIiwiZmFkZUZpcnN0U2xpZGUiLCJvdmVyZmxvdyIsImNsb25lQ291bnQiLCJtYWtlQXJyYXkiLCJmaXJzdCIsImNsb25lIiwicHJlcGVuZCIsImNvbXB1dGVkTSIsImJveFBhZGRpbmciLCJvdXRlcldpZHRoIiwiaXRlbVQiLCJpdGVtTSIsIm1pblciLCJtYXhXIiwiYWRkU2xpZGUiLCJhZGRlZCIsInJlbW92ZVNsaWRlIiwicmVtb3ZlZCIsImJsdXIiLCJmb2N1cyIsImFsbG93T25lU2xpZGUiLCJmbiIsImZhZGVJbiIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsIm9yaWVudGF0aW9uIiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwibW92ZV9zbGlkZXJfb25faG92ZXIiLCJtb3ZlX3dpdGhfaGFuZGxlX29ubHkiLCJjbGlja190b19tb3ZlIiwid3JhcCIsImN3IiwiY2giLCJtYXgiLCJtaW4iLCJ0b3AiLCJfIiwidHJpZ2dlciIsInNsaWRlVG9nZ2xlIiwic2V0dXBfY29sbGFwc2libGVfc3VibWVudXMiLCIkbWVudSIsInRvcF9sZXZlbF9saW5rIiwiY29uc29sZSIsImxvZyIsInNpYmxpbmdzIiwicGFyZW50cyIsInBhcmVudCIsIm1vdXNlZW50ZXIiLCJmYWRlT3V0IiwiaGFzaCIsInNjcm9sbFRvcCIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJQSxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUEvQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUMsZ0JBQUo7QUFDQSxJQUFJQyxrQkFBSjs7QUFFQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUN4QixRQUFNLElBQUlDLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0g7O0FBQ0QsU0FBU0MsbUJBQVQsR0FBZ0M7QUFDNUIsUUFBTSxJQUFJRCxLQUFKLENBQVUsbUNBQVYsQ0FBTjtBQUNIOztBQUNBLGFBQVk7QUFDVCxNQUFJO0FBQ0EsUUFBSSxPQUFPRSxVQUFQLEtBQXNCLFVBQTFCLEVBQXND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LFFBQUQsQ0FBRCxDQUFZd0UsS0FBWixDQUFrQixZQUFVO0FBQzFCO0FBQ0FGLEdBQUMsQ0FBQyxHQUFELENBQUQsQ0FBTzdGLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVMyQyxLQUFULEVBQWdCO0FBRWpDO0FBQ0EsUUFBSSxLQUFLa1ksSUFBTCxLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCO0FBQ0FsWSxXQUFLLENBQUNpSSxjQUFOLEdBRm9CLENBSXBCOztBQUNBLFVBQUlpUSxJQUFJLEdBQUcsS0FBS0EsSUFBaEIsQ0FMb0IsQ0FPcEI7QUFDQTs7QUFDQWhWLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J1USxPQUFoQixDQUF3QjtBQUN0QjBFLGlCQUFTLEVBQUVqVixDQUFDLENBQUNnVixJQUFELENBQUQsQ0FBUXhILE1BQVIsR0FBaUIwRztBQUROLE9BQXhCLEVBRUcsR0FGSCxFQUVRLFlBQVU7QUFFaEI7QUFDQXpWLGNBQU0sQ0FBQ3lXLFFBQVAsQ0FBZ0JGLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNELE9BTkQ7QUFPRCxLQW5CZ0MsQ0FtQi9COztBQUNILEdBcEJEO0FBcUJELENBdkJELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKiovXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS5mbGV4c2xpZGVyLW1pbic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS5ldmVudC5tb3ZlLm1pbi5qcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS50d2VudHl0d2VudHkubWluLmpzJztcclxuXHJcbi8qKiBJbXBvcnQgQ3VzdG9tIGZpbGVzICoqL1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tZW51JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZnVsbC1pbWFnZS1mbGV4c2xpZGVyLWl0ZW0nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZXJ2aWNlcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jb250YWN0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc21vb3RoLXNjcm9sbCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL25ld3Mtc2xpZGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZnJvbnQtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzLzQwNCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2Rlc2lnbmVyLWxvZ2luJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvZHVjdC1zbGlkZXInOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy90cmlnZ2VyIGRvd25sb2FkcyBzdWIgbWVudVxyXG4gICAgJCgnLnByb2R1Y3QtNDA0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmRvd25sb2FkcycpLnJlbW92ZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzJykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvL2NoYW5nZSBwcm9kdWN0IG1lbnUgbGluayBvbiBtb2JpbGVcclxuXHJcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIGlmKHcgPCAxMjAwKSB7XHJcbiAgICAgICQoJy5wcm9kdWN0LTQwNCcpLmF0dHIoJ2hyZWYnLCAnL3Byb2R1Y3RzJyk7XHJcbiAgICB9IFxyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdGlmKCQoJy5iYS1pbWFnZS1jb21wYXJpc29uJykubGVuZ3RoIHx8ICQoJy5wb3N0LWJhLWltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGgpIHtcclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIi5iYV9pbWFnZXNfdG9fY29tcGFyZVwiKS50d2VudHl0d2VudHkoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7ICAgXHJcbiAgICBpZih3IDwgMTIwMCkge1xyXG4gICAgICAgICQoJy5jb250YWN0LXVzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmNvbnRhY3QtY29sLTEnKS50b2dnbGVDbGFzcygnc2hvdy1jb2x1bW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcuY29udGFjdF9fY3Jvc3MnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuY29udGFjdC1jb2wtMScpLnJlbW92ZUNsYXNzKCdzaG93LWNvbHVtbicpO1xyXG4gICAgICAgICQoJy5jb250YWN0LWNvbC0yJykucmVtb3ZlQ2xhc3MoJ3Nob3ctY29sdW1uJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLm9wcG9ydHVuaXRpZXMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuY29udGFjdC1jb2wtMicpLnRvZ2dsZUNsYXNzKCdzaG93LWNvbHVtbicpO1xyXG4gICAgfSk7ICAgIFxyXG4gICAgfVxyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIudGFiX2NvbnRlbnRfbG9naW5cIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCJ1bC50YWJzX2xvZ2luIGxpOmZpcnN0XCIpLmFkZENsYXNzKFwiYWN0aXZlX2xvZ2luXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiLnRhYl9jb250ZW50X2xvZ2luOmZpcnN0XCIpLnNob3coKTtcclxuICAgICAgICAkKFwidWwudGFic19sb2dpbiBsaVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChcInVsLnRhYnNfbG9naW4gbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVfbG9naW5cIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVfbG9naW5cIik7XHJcbiAgICAgICAgICAgICQoXCIudGFiX2NvbnRlbnRfbG9naW5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlVGFiID0gJCh0aGlzKS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgaWYgKCQuYnJvd3Nlci5tc2llKSB7JChhY3RpdmVUYWIpLnNob3coKTt9XHJcbiAgICAgICAgICAgIGVsc2UgeyQoYWN0aXZlVGFiKS5zaG93KCk7fVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsiLCJjb25zdCAkID0galF1ZXJ5O1xyXG5cclxuZnVuY3Rpb24gaGlkZVZpZGVvKCkge1xyXG4gICAgJCgnI3ZpZGVvLWNvbnRhaW5lcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVWaWRlb1RpdGxlcygpIHtcclxuICAgICQoJy52aWRlby10aXRsZXMnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG59XHJcbnNldFRpbWVvdXQoaGlkZVZpZGVvVGl0bGVzLCA0MDAwKTtcclxuc2V0VGltZW91dChoaWRlVmlkZW8sIDQ1MDApOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQvLyBzdG9yZSB0aGUgc2xpZGVyIGluIGEgbG9jYWwgdmFyaWFibGVcclxuXHR2YXIgJHdpbmRvdyA9ICQod2luZG93KSxcclxuXHRcdGZsZXhzbGlkZXIgPSB7IHZhcnM6e30gfTtcclxuXHJcblx0Ly8gdGlueSBoZWxwZXIgZnVuY3Rpb24gdG8gYWRkIGJyZWFrcG9pbnRzXHJcblx0ZnVuY3Rpb24gZ2V0R3JpZFNpemUoKSB7XHJcblx0XHRyZXR1cm4gKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAwICkgPyAxIDogMTtcclxuXHR9XHJcblxyXG5cdCR3aW5kb3cucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0ICQoJy5mdWxsLWltYWdlLWl0ZW0tZmxleHNsaWRlci1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0JCh0aGlzKS5maW5kKFwiLmZsZXhzbGlkZXJcIikuZmxleHNsaWRlcih7XHJcblx0XHRcdFx0YW5pbWF0aW9uOiBcInNsaWRlXCIsXHJcblx0XHRcdFx0c2xpZGVzaG93U3BlZWQ6IDEyMDAwLFxyXG5cdFx0XHRcdGFuaW1hdGlvbkxvb3A6IHRydWUsXHJcblx0XHRcdFx0Y29udHJvbE5hdjogZmFsc2UsXHJcblx0XHRcdFx0Y3VzdG9tRGlyZWN0aW9uTmF2OiAkKHRoaXMpLmZpbmQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKSxcclxuXHRcdFx0XHRtaW5JdGVtczogZ2V0R3JpZFNpemUoKSwgLy8gdXNlIGZ1bmN0aW9uIHRvIHB1bGwgaW4gaW5pdGlhbCB2YWx1ZVxyXG5cdFx0XHRcdG1heEl0ZW1zOiBnZXRHcmlkU2l6ZSgpLCAvLyB1c2UgZnVuY3Rpb24gdG8gcHVsbCBpbiBpbml0aWFsIHZhbHVlXHJcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKHNsaWRlcikge1xyXG5cdFx0XHRcdFx0ZmxleHNsaWRlciA9IHNsaWRlcjtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vIGNoZWNrIGdyaWQgc2l6ZSBvbiByZXNpemUgZXZlbnRcclxuXHQkd2luZG93LnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHZhciBncmlkU2l6ZSA9IGdldEdyaWRTaXplKCk7XHJcblx0XHRmbGV4c2xpZGVyLnZhcnMubWluSXRlbXMgPSBncmlkU2l6ZTtcclxuXHRcdGZsZXhzbGlkZXIudmFycy5tYXhJdGVtcyA9IGdyaWRTaXplO1xyXG5cdH0pO1x0XHJcbn0oKSk7IiwiIWZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbnVsbCE9PW1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZTplKCl9KGZ1bmN0aW9uKCl7dmFyIGk9T2JqZWN0LmFzc2lnbnx8d2luZG93LmpRdWVyeSYmalF1ZXJ5LmV4dGVuZCxwPTgsYT13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlLHQpe3JldHVybiB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2UoKX0sMjUpfTtmdW5jdGlvbiBlKGUsdCl7dD10fHx7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDB9O3ZhciBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7cmV0dXJuIG4uaW5pdEN1c3RvbUV2ZW50KGUsdC5idWJibGVzLHQuY2FuY2VsYWJsZSx0LmRldGFpbCksbn1cImZ1bmN0aW9uXCIhPXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQmJihlLnByb3RvdHlwZT13aW5kb3cuRXZlbnQucHJvdG90eXBlLHdpbmRvdy5DdXN0b21FdmVudD1lKTt2YXIgbz17dGV4dGFyZWE6ITAsaW5wdXQ6ITAsc2VsZWN0OiEwLGJ1dHRvbjohMH0sYz17bW92ZTpcIm1vdXNlbW92ZVwiLGNhbmNlbDpcIm1vdXNldXAgZHJhZ3N0YXJ0XCIsZW5kOlwibW91c2V1cFwifSx1PXttb3ZlOlwidG91Y2htb3ZlXCIsY2FuY2VsOlwidG91Y2hlbmRcIixlbmQ6XCJ0b3VjaGVuZFwifSxyPS9cXHMrLyxkPXtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9LHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sP1N5bWJvbChcImV2ZW50c1wiKTp7fTtmdW5jdGlvbiBtKGUpe3JldHVybiBlW3RdfHwoZVt0XT17fSl9ZnVuY3Rpb24gdihlLHQsbixvKXt0PXQuc3BsaXQocik7dmFyIGksYT1tKGUpLGM9dC5sZW5ndGg7ZnVuY3Rpb24gdShlKXtuKGUsbyl9Zm9yKDtjLS07KShhW2k9dFtjXV18fChhW2ldPVtdKSkucHVzaChbbix1XSksZS5hZGRFdmVudExpc3RlbmVyKGksdSl9ZnVuY3Rpb24gZihlLHQsbil7dD10LnNwbGl0KHIpO3ZhciBvLGksYSxjPW0oZSksdT10Lmxlbmd0aDtpZihjKWZvcig7dS0tOylpZihpPWNbbz10W3VdXSlmb3IoYT1pLmxlbmd0aDthLS07KWlbYV1bMF09PT1uJiYoZS5yZW1vdmVFdmVudExpc3RlbmVyKG8saVthXVsxXSksaS5zcGxpY2UoYSwxKSl9ZnVuY3Rpb24gZyhlLHQsbil7dmFyIG89bmV3IEN1c3RvbUV2ZW50KHQsZCk7biYmaShvLG4pLGUuZGlzcGF0Y2hFdmVudChvKX1mdW5jdGlvbiBzKGUpe3ZhciBuPWUsbz0hMSxpPSExO2Z1bmN0aW9uIHQoZSl7bz8obigpLGEodCksbz0hKGk9ITApKTppPSExfXRoaXMua2ljaz1mdW5jdGlvbihlKXtvPSEwLGl8fHQoKX0sdGhpcy5lbmQ9ZnVuY3Rpb24oZSl7dmFyIHQ9bjtlJiYoaT8obj1vP2Z1bmN0aW9uKCl7dCgpLGUoKX06ZSxvPSEwKTplKCkpfX1mdW5jdGlvbiBoKCl7fWZ1bmN0aW9uIGwoZSl7ZS5wcmV2ZW50RGVmYXVsdCgpfWZ1bmN0aW9uIFgoZSx0KXt2YXIgbixvO2lmKGUuaWRlbnRpZmllZFRvdWNoKXJldHVybiBlLmlkZW50aWZpZWRUb3VjaCh0KTtmb3Iobj0tMSxvPWUubGVuZ3RoOysrbjxvOylpZihlW25dLmlkZW50aWZpZXI9PT10KXJldHVybiBlW25dfWZ1bmN0aW9uIFkoZSx0KXt2YXIgbj1YKGUuY2hhbmdlZFRvdWNoZXMsdC5pZGVudGlmaWVyKTtpZihuJiYobi5wYWdlWCE9PXQucGFnZVh8fG4ucGFnZVkhPT10LnBhZ2VZKSlyZXR1cm4gbn1mdW5jdGlvbiBuKGUsdCl7VChlLHQsZSx3KX1mdW5jdGlvbiB5KGUsdCl7dygpfWZ1bmN0aW9uIHcoKXtmKGRvY3VtZW50LGMubW92ZSxuKSxmKGRvY3VtZW50LGMuY2FuY2VsLHkpfWZ1bmN0aW9uIGIoZSl7Zihkb2N1bWVudCx1Lm1vdmUsZS50b3VjaG1vdmUpLGYoZG9jdW1lbnQsdS5jYW5jZWwsZS50b3VjaGVuZCl9ZnVuY3Rpb24gVChlLHQsbixvKXt2YXIgaSxhLGMsdSxyLGQsbSx2LGYscz1uLnBhZ2VYLXQucGFnZVgsbD1uLnBhZ2VZLXQucGFnZVk7cypzK2wqbDxwKnB8fChhPXQsYz1uLHU9cyxyPWwsZD1vLG09KGk9ZSkudGFyZ2V0VG91Y2hlcyx2PWkudGltZVN0YW1wLWEudGltZVN0YW1wLGY9e2FsdEtleTppLmFsdEtleSxjdHJsS2V5OmkuY3RybEtleSxzaGlmdEtleTppLnNoaWZ0S2V5LHN0YXJ0WDphLnBhZ2VYLHN0YXJ0WTphLnBhZ2VZLGRpc3RYOnUsZGlzdFk6cixkZWx0YVg6dSxkZWx0YVk6cixwYWdlWDpjLnBhZ2VYLHBhZ2VZOmMucGFnZVksdmVsb2NpdHlYOnUvdix2ZWxvY2l0eVk6ci92LGlkZW50aWZpZXI6YS5pZGVudGlmaWVyLHRhcmdldFRvdWNoZXM6bSxmaW5nZXI6bT9tLmxlbmd0aDoxLGVuYWJsZU1vdmU6ZnVuY3Rpb24oKXt0aGlzLm1vdmVFbmFibGVkPSEwLHRoaXMuZW5hYmxlTW92ZT1oLGkucHJldmVudERlZmF1bHQoKX19LGcoYS50YXJnZXQsXCJtb3Zlc3RhcnRcIixmKSxkKGEpKX1mdW5jdGlvbiBFKGUsdCl7dmFyIG49dC50aW1lcjt0LnRvdWNoPWUsdC50aW1lU3RhbXA9ZS50aW1lU3RhbXAsbi5raWNrKCl9ZnVuY3Rpb24gUyhlLHQpe3ZhciBuPXQudGFyZ2V0LG89dC5ldmVudCxpPXQudGltZXI7Zihkb2N1bWVudCxjLm1vdmUsRSksZihkb2N1bWVudCxjLmVuZCxTKSxLKG4sbyxpLGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2YobixcImNsaWNrXCIsbCl9LDApfSl9ZnVuY3Rpb24gayhlLHQpe3ZhciBuLG89dC50YXJnZXQsaT10LmV2ZW50LGE9dC50aW1lcjtYKGUuY2hhbmdlZFRvdWNoZXMsaS5pZGVudGlmaWVyKSYmKG49dCxmKGRvY3VtZW50LHUubW92ZSxuLmFjdGl2ZVRvdWNobW92ZSksZihkb2N1bWVudCx1LmVuZCxuLmFjdGl2ZVRvdWNoZW5kKSxLKG8saSxhKSl9ZnVuY3Rpb24gSyhlLHQsbixvKXtuLmVuZChmdW5jdGlvbigpe3JldHVybiBnKGUsXCJtb3ZlZW5kXCIsdCksbyYmbygpfSl9aWYodihkb2N1bWVudCxcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGUpe3ZhciB0OzEhPT0odD1lKS53aGljaHx8dC5jdHJsS2V5fHx0LmFsdEtleXx8b1tlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCldfHwodihkb2N1bWVudCxjLm1vdmUsbixlKSx2KGRvY3VtZW50LGMuY2FuY2VsLHksZSkpfSksdihkb2N1bWVudCxcInRvdWNoc3RhcnRcIixmdW5jdGlvbihlKXtpZighb1tlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCldKXt2YXIgdD1lLmNoYW5nZWRUb3VjaGVzWzBdLG49e3RhcmdldDp0LnRhcmdldCxwYWdlWDp0LnBhZ2VYLHBhZ2VZOnQucGFnZVksaWRlbnRpZmllcjp0LmlkZW50aWZpZXIsdG91Y2htb3ZlOmZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUsdCl7dmFyIG49WShlLHQpO2lmKCFuKXJldHVybjtUKGUsdCxuLGIpfShlLHQpfSx0b3VjaGVuZDpmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlLHQpe2lmKCFYKGUuY2hhbmdlZFRvdWNoZXMsdC5pZGVudGlmaWVyKSlyZXR1cm47Yih0KX0oZSx0KX19O3YoZG9jdW1lbnQsdS5tb3ZlLG4udG91Y2htb3ZlLG4pLHYoZG9jdW1lbnQsdS5jYW5jZWwsbi50b3VjaGVuZCxuKX19KSx2KGRvY3VtZW50LFwibW92ZXN0YXJ0XCIsZnVuY3Rpb24oZSl7aWYoIWUuZGVmYXVsdFByZXZlbnRlZCYmZS5tb3ZlRW5hYmxlZCl7dmFyIHQ9e3N0YXJ0WDplLnN0YXJ0WCxzdGFydFk6ZS5zdGFydFkscGFnZVg6ZS5wYWdlWCxwYWdlWTplLnBhZ2VZLGRpc3RYOmUuZGlzdFgsZGlzdFk6ZS5kaXN0WSxkZWx0YVg6ZS5kZWx0YVgsZGVsdGFZOmUuZGVsdGFZLHZlbG9jaXR5WDplLnZlbG9jaXR5WCx2ZWxvY2l0eVk6ZS52ZWxvY2l0eVksaWRlbnRpZmllcjplLmlkZW50aWZpZXIsdGFyZ2V0VG91Y2hlczplLnRhcmdldFRvdWNoZXMsZmluZ2VyOmUuZmluZ2VyfSxuPXt0YXJnZXQ6ZS50YXJnZXQsZXZlbnQ6dCx0aW1lcjpuZXcgcyhmdW5jdGlvbihlKXsoZnVuY3Rpb24oZSx0LG4pe3ZhciBvPW4tZS50aW1lU3RhbXA7ZS5kaXN0WD10LnBhZ2VYLWUuc3RhcnRYLGUuZGlzdFk9dC5wYWdlWS1lLnN0YXJ0WSxlLmRlbHRhWD10LnBhZ2VYLWUucGFnZVgsZS5kZWx0YVk9dC5wYWdlWS1lLnBhZ2VZLGUudmVsb2NpdHlYPS4zKmUudmVsb2NpdHlYKy43KmUuZGVsdGFYL28sZS52ZWxvY2l0eVk9LjMqZS52ZWxvY2l0eVkrLjcqZS5kZWx0YVkvbyxlLnBhZ2VYPXQucGFnZVgsZS5wYWdlWT10LnBhZ2VZfSkodCxuLnRvdWNoLG4udGltZVN0YW1wKSxnKG4udGFyZ2V0LFwibW92ZVwiLHQpfSksdG91Y2g6dm9pZCAwLHRpbWVTdGFtcDplLnRpbWVTdGFtcH07dm9pZCAwPT09ZS5pZGVudGlmaWVyPyh2KGUudGFyZ2V0LFwiY2xpY2tcIixsKSx2KGRvY3VtZW50LGMubW92ZSxFLG4pLHYoZG9jdW1lbnQsYy5lbmQsUyxuKSk6KG4uYWN0aXZlVG91Y2htb3ZlPWZ1bmN0aW9uKGUsdCl7dmFyIG4sbyxpLGEsYztuPWUsaT0obz10KS5ldmVudCxhPW8udGltZXIsKGM9WShuLGkpKSYmKG4ucHJldmVudERlZmF1bHQoKSxpLnRhcmdldFRvdWNoZXM9bi50YXJnZXRUb3VjaGVzLG8udG91Y2g9YyxvLnRpbWVTdGFtcD1uLnRpbWVTdGFtcCxhLmtpY2soKSl9LG4uYWN0aXZlVG91Y2hlbmQ9ZnVuY3Rpb24oZSx0KXtrKGUsdCl9LHYoZG9jdW1lbnQsdS5tb3ZlLG4uYWN0aXZlVG91Y2htb3ZlLG4pLHYoZG9jdW1lbnQsdS5lbmQsbi5hY3RpdmVUb3VjaGVuZCxuKSl9fSksd2luZG93LmpRdWVyeSl7dmFyIGo9XCJzdGFydFggc3RhcnRZIHBhZ2VYIHBhZ2VZIGRpc3RYIGRpc3RZIGRlbHRhWCBkZWx0YVkgdmVsb2NpdHlYIHZlbG9jaXR5WVwiLnNwbGl0KFwiIFwiKTtqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3Zlc3RhcnQ9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIHYodGhpcyxcIm1vdmVzdGFydFwiLEMpLCExfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBmKHRoaXMsXCJtb3Zlc3RhcnRcIixDKSwhMX0sYWRkOkF9LGpRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmU9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIHYodGhpcyxcIm1vdmVzdGFydFwiLFEpLCExfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBmKHRoaXMsXCJtb3Zlc3RhcnRcIixRKSwhMX0sYWRkOkF9LGpRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmVlbmQ9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIHYodGhpcyxcIm1vdmVzdGFydFwiLHEpLCExfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBmKHRoaXMsXCJtb3Zlc3RhcnRcIixxKSwhMX0sYWRkOkF9fWZ1bmN0aW9uIEMoZSl7ZS5lbmFibGVNb3ZlKCl9ZnVuY3Rpb24gUShlKXtlLmVuYWJsZU1vdmUoKX1mdW5jdGlvbiBxKGUpe2UuZW5hYmxlTW92ZSgpfWZ1bmN0aW9uIEEoZSl7dmFyIG89ZS5oYW5kbGVyO2UuaGFuZGxlcj1mdW5jdGlvbihlKXtmb3IodmFyIHQsbj1qLmxlbmd0aDtuLS07KWVbdD1qW25dXT1lLm9yaWdpbmFsRXZlbnRbdF07by5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX0pOyIsIi8qXHJcbiAqIGpRdWVyeSBGbGV4U2xpZGVyIHYyLjcuMlxyXG4gKiBDb3B5cmlnaHQgMjAxMiBXb29UaGVtZXNcclxuICogQ29udHJpYnV0aW5nIEF1dGhvcjogVHlsZXIgU21pdGhcclxuICovIWZ1bmN0aW9uKCQpe3ZhciBlPSEwOyQuZmxleHNsaWRlcj1mdW5jdGlvbih0LGEpe3ZhciBuPSQodCk7dm9pZCAwPT09YS5ydGwmJlwicnRsXCI9PSQoXCJodG1sXCIpLmF0dHIoXCJkaXJcIikmJihhLnJ0bD0hMCksbi52YXJzPSQuZXh0ZW5kKHt9LCQuZmxleHNsaWRlci5kZWZhdWx0cyxhKTt2YXIgaT1uLnZhcnMubmFtZXNwYWNlLHI9d2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkJiZ3aW5kb3cuTVNHZXN0dXJlLHM9KFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHJ8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpJiZuLnZhcnMudG91Y2gsbz1cImNsaWNrIHRvdWNoZW5kIE1TUG9pbnRlclVwIGtleXVwXCIsbD1cIlwiLGMsZD1cInZlcnRpY2FsXCI9PT1uLnZhcnMuZGlyZWN0aW9uLHU9bi52YXJzLnJldmVyc2Usdj1uLnZhcnMuaXRlbVdpZHRoPjAscD1cImZhZGVcIj09PW4udmFycy5hbmltYXRpb24sbT1cIlwiIT09bi52YXJzLmFzTmF2Rm9yLGY9e307JC5kYXRhKHQsXCJmbGV4c2xpZGVyXCIsbiksZj17aW5pdDpmdW5jdGlvbigpe24uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPXBhcnNlSW50KG4udmFycy5zdGFydEF0P24udmFycy5zdGFydEF0OjAsMTApLGlzTmFOKG4uY3VycmVudFNsaWRlKSYmKG4uY3VycmVudFNsaWRlPTApLG4uYW5pbWF0aW5nVG89bi5jdXJyZW50U2xpZGUsbi5hdEVuZD0wPT09bi5jdXJyZW50U2xpZGV8fG4uY3VycmVudFNsaWRlPT09bi5sYXN0LG4uY29udGFpbmVyU2VsZWN0b3I9bi52YXJzLnNlbGVjdG9yLnN1YnN0cigwLG4udmFycy5zZWxlY3Rvci5zZWFyY2goXCIgXCIpKSxuLnNsaWRlcz0kKG4udmFycy5zZWxlY3RvcixuKSxuLmNvbnRhaW5lcj0kKG4uY29udGFpbmVyU2VsZWN0b3Isbiksbi5jb3VudD1uLnNsaWRlcy5sZW5ndGgsbi5zeW5jRXhpc3RzPSQobi52YXJzLnN5bmMpLmxlbmd0aD4wLFwic2xpZGVcIj09PW4udmFycy5hbmltYXRpb24mJihuLnZhcnMuYW5pbWF0aW9uPVwic3dpbmdcIiksbi5wcm9wPWQ/XCJ0b3BcIjpuLnZhcnMucnRsP1wibWFyZ2luUmlnaHRcIjpcIm1hcmdpbkxlZnRcIixuLmFyZ3M9e30sbi5tYW51YWxQYXVzZT0hMSxuLnN0b3BwZWQ9ITEsbi5zdGFydGVkPSExLG4uc3RhcnRUaW1lb3V0PW51bGwsbi50cmFuc2l0aW9ucz0hbi52YXJzLnZpZGVvJiYhcCYmbi52YXJzLnVzZUNTUyYmZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHQ9W1wicGVyc3BlY3RpdmVQcm9wZXJ0eVwiLFwiV2Via2l0UGVyc3BlY3RpdmVcIixcIk1velBlcnNwZWN0aXZlXCIsXCJPUGVyc3BlY3RpdmVcIixcIm1zUGVyc3BlY3RpdmVcIl07Zm9yKHZhciBhIGluIHQpaWYodm9pZCAwIT09ZS5zdHlsZVt0W2FdXSlyZXR1cm4gbi5wZng9dFthXS5yZXBsYWNlKFwiUGVyc3BlY3RpdmVcIixcIlwiKS50b0xvd2VyQ2FzZSgpLG4ucHJvcD1cIi1cIituLnBmeCtcIi10cmFuc2Zvcm1cIiwhMDtyZXR1cm4hMX0oKSxuLmlzRmlyZWZveD1uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImZpcmVmb3hcIik+LTEsbi5lbnN1cmVBbmltYXRpb25FbmQ9XCJcIixcIlwiIT09bi52YXJzLmNvbnRyb2xzQ29udGFpbmVyJiYobi5jb250cm9sc0NvbnRhaW5lcj0kKG4udmFycy5jb250cm9sc0NvbnRhaW5lcikubGVuZ3RoPjAmJiQobi52YXJzLmNvbnRyb2xzQ29udGFpbmVyKSksXCJcIiE9PW4udmFycy5tYW51YWxDb250cm9scyYmKG4ubWFudWFsQ29udHJvbHM9JChuLnZhcnMubWFudWFsQ29udHJvbHMpLmxlbmd0aD4wJiYkKG4udmFycy5tYW51YWxDb250cm9scykpLFwiXCIhPT1uLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2JiYobi5jdXN0b21EaXJlY3Rpb25OYXY9Mj09PSQobi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdikubGVuZ3RoJiYkKG4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYpKSxuLnZhcnMucmFuZG9taXplJiYobi5zbGlkZXMuc29ydChmdW5jdGlvbigpe3JldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpLS41fSksbi5jb250YWluZXIuZW1wdHkoKS5hcHBlbmQobi5zbGlkZXMpKSxuLmRvTWF0aCgpLG4uc2V0dXAoXCJpbml0XCIpLG4udmFycy5jb250cm9sTmF2JiZmLmNvbnRyb2xOYXYuc2V0dXAoKSxuLnZhcnMuZGlyZWN0aW9uTmF2JiZmLmRpcmVjdGlvbk5hdi5zZXR1cCgpLG4udmFycy5rZXlib2FyZCYmKDE9PT0kKG4uY29udGFpbmVyU2VsZWN0b3IpLmxlbmd0aHx8bi52YXJzLm11bHRpcGxlS2V5Ym9hcmQpJiYkKGRvY3VtZW50KS5iaW5kKFwia2V5dXBcIixmdW5jdGlvbihlKXt2YXIgdD1lLmtleUNvZGU7aWYoIW4uYW5pbWF0aW5nJiYoMzk9PT10fHwzNz09PXQpKXt2YXIgYT1uLnZhcnMucnRsPzM3PT09dD9uLmdldFRhcmdldChcIm5leHRcIik6Mzk9PT10JiZuLmdldFRhcmdldChcInByZXZcIik6Mzk9PT10P24uZ2V0VGFyZ2V0KFwibmV4dFwiKTozNz09PXQmJm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24pfX0pLG4udmFycy5tb3VzZXdoZWVsJiZuLmJpbmQoXCJtb3VzZXdoZWVsXCIsZnVuY3Rpb24oZSx0LGEsaSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciByPXQ8MD9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpO24uZmxleEFuaW1hdGUocixuLnZhcnMucGF1c2VPbkFjdGlvbil9KSxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS5zZXR1cCgpLG4udmFycy5zbGlkZXNob3cmJm4udmFycy5wYXVzZUludmlzaWJsZSYmZi5wYXVzZUludmlzaWJsZS5pbml0KCksbi52YXJzLnNsaWRlc2hvdyYmKG4udmFycy5wYXVzZU9uSG92ZXImJm4uaG92ZXIoZnVuY3Rpb24oKXtuLm1hbnVhbFBsYXl8fG4ubWFudWFsUGF1c2V8fG4ucGF1c2UoKX0sZnVuY3Rpb24oKXtuLm1hbnVhbFBhdXNlfHxuLm1hbnVhbFBsYXl8fG4uc3RvcHBlZHx8bi5wbGF5KCl9KSxuLnZhcnMucGF1c2VJbnZpc2libGUmJmYucGF1c2VJbnZpc2libGUuaXNIaWRkZW4oKXx8KG4udmFycy5pbml0RGVsYXk+MD9uLnN0YXJ0VGltZW91dD1zZXRUaW1lb3V0KG4ucGxheSxuLnZhcnMuaW5pdERlbGF5KTpuLnBsYXkoKSkpLG0mJmYuYXNOYXYuc2V0dXAoKSxzJiZuLnZhcnMudG91Y2gmJmYudG91Y2goKSwoIXB8fHAmJm4udmFycy5zbW9vdGhIZWlnaHQpJiYkKHdpbmRvdykuYmluZChcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBmb2N1c1wiLGYucmVzaXplKSxuLmZpbmQoXCJpbWdcIikuYXR0cihcImRyYWdnYWJsZVwiLFwiZmFsc2VcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24udmFycy5zdGFydChuKX0sMjAwKX0sYXNOYXY6e3NldHVwOmZ1bmN0aW9uKCl7bi5hc05hdj0hMCxuLmFuaW1hdGluZ1RvPU1hdGguZmxvb3Iobi5jdXJyZW50U2xpZGUvbi5tb3ZlKSxuLmN1cnJlbnRJdGVtPW4uY3VycmVudFNsaWRlLG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEobi5jdXJyZW50SXRlbSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxyPyh0Ll9zbGlkZXI9bixuLnNsaWRlcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9nZXN0dXJlPW5ldyBNU0dlc3R1cmUsZS5fZ2VzdHVyZS50YXJnZXQ9ZSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuY3VycmVudFRhcmdldC5fZ2VzdHVyZSYmZS5jdXJyZW50VGFyZ2V0Ll9nZXN0dXJlLmFkZFBvaW50ZXIoZS5wb2ludGVySWQpfSwhMSksZS5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlVGFwXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0PSQodGhpcyksYT10LmluZGV4KCk7JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLmFuaW1hdGluZ3x8dC5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8KG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08YT9cIm5leHRcIjpcInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24sITEsITAsITApKX0pfSkpOm4uc2xpZGVzLm9uKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0PSQodGhpcyksYT10LmluZGV4KCkscjtyPW4udmFycy5ydGw/LTEqKHQub2Zmc2V0KCkucmlnaHQtJChuKS5zY3JvbGxMZWZ0KCkpOnQub2Zmc2V0KCkubGVmdC0kKG4pLnNjcm9sbExlZnQoKSxyPD0wJiZ0Lmhhc0NsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIik/bi5mbGV4QW5pbWF0ZShuLmdldFRhcmdldChcInByZXZcIiksITApOiQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKS5hbmltYXRpbmd8fHQuaGFzQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKXx8KG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08YT9cIm5leHRcIjpcInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24sITEsITAsITApKX0pfX0sY29udHJvbE5hdjp7c2V0dXA6ZnVuY3Rpb24oKXtuLm1hbnVhbENvbnRyb2xzP2YuY29udHJvbE5hdi5zZXR1cE1hbnVhbCgpOmYuY29udHJvbE5hdi5zZXR1cFBhZ2luZygpfSxzZXR1cFBhZ2luZzpmdW5jdGlvbigpe3ZhciBlPVwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXY/XCJjb250cm9sLXRodW1ic1wiOlwiY29udHJvbC1wYWdpbmdcIix0PTEsYSxyO2lmKG4uY29udHJvbE5hdlNjYWZmb2xkPSQoJzxvbCBjbGFzcz1cIicraStcImNvbnRyb2wtbmF2IFwiK2krZSsnXCI+PC9vbD4nKSxuLnBhZ2luZ0NvdW50PjEpZm9yKHZhciBzPTA7czxuLnBhZ2luZ0NvdW50O3MrKyl7aWYocj1uLnNsaWRlcy5lcShzKSx2b2lkIDA9PT1yLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiKSYmci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIixcIlwiKSxhPSQoXCI8YT48L2E+XCIpLmF0dHIoXCJocmVmXCIsXCIjXCIpLnRleHQodCksXCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdiYmKGE9JChcIjxpbWcvPlwiKS5hdHRyKFwic3JjXCIsci5hdHRyKFwiZGF0YS10aHVtYlwiKSkpLFwiXCIhPT1yLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiKSYmYS5hdHRyKFwiYWx0XCIsci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikpLFwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXYmJiEwPT09bi52YXJzLnRodW1iQ2FwdGlvbnMpe3ZhciBjPXIuYXR0cihcImRhdGEtdGh1bWJjYXB0aW9uXCIpO2lmKFwiXCIhPT1jJiZ2b2lkIDAhPT1jKXt2YXIgZD0kKFwiPHNwYW4+PC9zcGFuPlwiKS5hZGRDbGFzcyhpK1wiY2FwdGlvblwiKS50ZXh0KGMpO2EuYXBwZW5kKGQpfX12YXIgdT0kKFwiPGxpPlwiKTthLmFwcGVuZFRvKHUpLHUuYXBwZW5kKFwiPC9saT5cIiksbi5jb250cm9sTmF2U2NhZmZvbGQuYXBwZW5kKHUpLHQrK31uLmNvbnRyb2xzQ29udGFpbmVyPyQobi5jb250cm9sc0NvbnRhaW5lcikuYXBwZW5kKG4uY29udHJvbE5hdlNjYWZmb2xkKTpuLmFwcGVuZChuLmNvbnRyb2xOYXZTY2FmZm9sZCksZi5jb250cm9sTmF2LnNldCgpLGYuY29udHJvbE5hdi5hY3RpdmUoKSxuLmNvbnRyb2xOYXZTY2FmZm9sZC5kZWxlZ2F0ZShcImEsIGltZ1wiLG8sZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCI9PT1sfHxsPT09ZS50eXBlKXt2YXIgdD0kKHRoaXMpLGE9bi5jb250cm9sTmF2LmluZGV4KHQpO3QuaGFzQ2xhc3MoaStcImFjdGl2ZVwiKXx8KG4uZGlyZWN0aW9uPWE+bi5jdXJyZW50U2xpZGU/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKSl9XCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sc2V0dXBNYW51YWw6ZnVuY3Rpb24oKXtuLmNvbnRyb2xOYXY9bi5tYW51YWxDb250cm9scyxmLmNvbnRyb2xOYXYuYWN0aXZlKCksbi5jb250cm9sTmF2LmJpbmQobyxmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksXCJcIj09PWx8fGw9PT1lLnR5cGUpe3ZhciB0PSQodGhpcyksYT1uLmNvbnRyb2xOYXYuaW5kZXgodCk7dC5oYXNDbGFzcyhpK1wiYWN0aXZlXCIpfHwoYT5uLmN1cnJlbnRTbGlkZT9uLmRpcmVjdGlvbj1cIm5leHRcIjpuLmRpcmVjdGlvbj1cInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24pKX1cIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSxzZXQ6ZnVuY3Rpb24oKXt2YXIgZT1cInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2P1wiaW1nXCI6XCJhXCI7bi5jb250cm9sTmF2PSQoXCIuXCIraStcImNvbnRyb2wtbmF2IGxpIFwiK2Usbi5jb250cm9sc0NvbnRhaW5lcj9uLmNvbnRyb2xzQ29udGFpbmVyOm4pfSxhY3RpdmU6ZnVuY3Rpb24oKXtuLmNvbnRyb2xOYXYucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZVwiKS5lcShuLmFuaW1hdGluZ1RvKS5hZGRDbGFzcyhpK1wiYWN0aXZlXCIpfSx1cGRhdGU6ZnVuY3Rpb24oZSx0KXtuLnBhZ2luZ0NvdW50PjEmJlwiYWRkXCI9PT1lP24uY29udHJvbE5hdlNjYWZmb2xkLmFwcGVuZCgkKCc8bGk+PGEgaHJlZj1cIiNcIj4nK24uY291bnQrXCI8L2E+PC9saT5cIikpOjE9PT1uLnBhZ2luZ0NvdW50P24uY29udHJvbE5hdlNjYWZmb2xkLmZpbmQoXCJsaVwiKS5yZW1vdmUoKTpuLmNvbnRyb2xOYXYuZXEodCkuY2xvc2VzdChcImxpXCIpLnJlbW92ZSgpLGYuY29udHJvbE5hdi5zZXQoKSxuLnBhZ2luZ0NvdW50PjEmJm4ucGFnaW5nQ291bnQhPT1uLmNvbnRyb2xOYXYubGVuZ3RoP24udXBkYXRlKHQsZSk6Zi5jb250cm9sTmF2LmFjdGl2ZSgpfX0sZGlyZWN0aW9uTmF2OntzZXR1cDpmdW5jdGlvbigpe3ZhciBlPSQoJzx1bCBjbGFzcz1cIicraSsnZGlyZWN0aW9uLW5hdlwiPjxsaSBjbGFzcz1cIicraSsnbmF2LXByZXZcIj48YSBjbGFzcz1cIicraSsncHJldlwiIGhyZWY9XCIjXCI+JytuLnZhcnMucHJldlRleHQrJzwvYT48L2xpPjxsaSBjbGFzcz1cIicraSsnbmF2LW5leHRcIj48YSBjbGFzcz1cIicraSsnbmV4dFwiIGhyZWY9XCIjXCI+JytuLnZhcnMubmV4dFRleHQrXCI8L2E+PC9saT48L3VsPlwiKTtuLmN1c3RvbURpcmVjdGlvbk5hdj9uLmRpcmVjdGlvbk5hdj1uLmN1c3RvbURpcmVjdGlvbk5hdjpuLmNvbnRyb2xzQ29udGFpbmVyPygkKG4uY29udHJvbHNDb250YWluZXIpLmFwcGVuZChlKSxuLmRpcmVjdGlvbk5hdj0kKFwiLlwiK2krXCJkaXJlY3Rpb24tbmF2IGxpIGFcIixuLmNvbnRyb2xzQ29udGFpbmVyKSk6KG4uYXBwZW5kKGUpLG4uZGlyZWN0aW9uTmF2PSQoXCIuXCIraStcImRpcmVjdGlvbi1uYXYgbGkgYVwiLG4pKSxmLmRpcmVjdGlvbk5hdi51cGRhdGUoKSxuLmRpcmVjdGlvbk5hdi5iaW5kKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0O1wiXCIhPT1sJiZsIT09ZS50eXBlfHwodD0kKHRoaXMpLmhhc0NsYXNzKGkrXCJuZXh0XCIpP24uZ2V0VGFyZ2V0KFwibmV4dFwiKTpuLmdldFRhcmdldChcInByZXZcIiksbi5mbGV4QW5pbWF0ZSh0LG4udmFycy5wYXVzZU9uQWN0aW9uKSksXCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGU9aStcImRpc2FibGVkXCI7MT09PW4ucGFnaW5nQ291bnQ/bi5kaXJlY3Rpb25OYXYuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTpuLnZhcnMuYW5pbWF0aW9uTG9vcD9uLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIik6MD09PW4uYW5pbWF0aW5nVG8/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkuZmlsdGVyKFwiLlwiK2krXCJwcmV2XCIpLmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi5hbmltYXRpbmdUbz09PW4ubGFzdD9uLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5maWx0ZXIoXCIuXCIraStcIm5leHRcIikuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTpuLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIil9fSxwYXVzZVBsYXk6e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9JCgnPGRpdiBjbGFzcz1cIicraSsncGF1c2VwbGF5XCI+PGEgaHJlZj1cIiNcIj48L2E+PC9kaXY+Jyk7bi5jb250cm9sc0NvbnRhaW5lcj8obi5jb250cm9sc0NvbnRhaW5lci5hcHBlbmQoZSksbi5wYXVzZVBsYXk9JChcIi5cIitpK1wicGF1c2VwbGF5IGFcIixuLmNvbnRyb2xzQ29udGFpbmVyKSk6KG4uYXBwZW5kKGUpLG4ucGF1c2VQbGF5PSQoXCIuXCIraStcInBhdXNlcGxheSBhXCIsbikpLGYucGF1c2VQbGF5LnVwZGF0ZShuLnZhcnMuc2xpZGVzaG93P2krXCJwYXVzZVwiOmkrXCJwbGF5XCIpLG4ucGF1c2VQbGF5LmJpbmQobyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksXCJcIiE9PWwmJmwhPT1lLnR5cGV8fCgkKHRoaXMpLmhhc0NsYXNzKGkrXCJwYXVzZVwiKT8obi5tYW51YWxQYXVzZT0hMCxuLm1hbnVhbFBsYXk9ITEsbi5wYXVzZSgpKToobi5tYW51YWxQYXVzZT0hMSxuLm1hbnVhbFBsYXk9ITAsbi5wbGF5KCkpKSxcIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSx1cGRhdGU6ZnVuY3Rpb24oZSl7XCJwbGF5XCI9PT1lP24ucGF1c2VQbGF5LnJlbW92ZUNsYXNzKGkrXCJwYXVzZVwiKS5hZGRDbGFzcyhpK1wicGxheVwiKS5odG1sKG4udmFycy5wbGF5VGV4dCk6bi5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MoaStcInBsYXlcIikuYWRkQ2xhc3MoaStcInBhdXNlXCIpLmh0bWwobi52YXJzLnBhdXNlVGV4dCl9fSx0b3VjaDpmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSxuLmFuaW1hdGluZz9lLnByZXZlbnREZWZhdWx0KCk6KG4ucGF1c2UoKSx0Ll9nZXN0dXJlLmFkZFBvaW50ZXIoZS5wb2ludGVySWQpLHc9MCxjPWQ/bi5oOm4udyxmPU51bWJlcihuZXcgRGF0ZSksbD12JiZ1JiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0PzA6diYmdT9uLmxpbWl0LShuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbzp2JiZuLmN1cnJlbnRTbGlkZT09PW4ubGFzdD9uLmxpbWl0OnY/KG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmN1cnJlbnRTbGlkZTp1PyhuLmxhc3Qtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYzoobi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYyl9ZnVuY3Rpb24gYShlKXtlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBhPWUudGFyZ2V0Ll9zbGlkZXI7aWYoYSl7dmFyIG49LWUudHJhbnNsYXRpb25YLGk9LWUudHJhbnNsYXRpb25ZO2lmKHcrPWQ/aTpuLG09KGEudmFycy5ydGw/LTE6MSkqdyx4PWQ/TWF0aC5hYnModyk8TWF0aC5hYnMoLW4pOk1hdGguYWJzKHcpPE1hdGguYWJzKC1pKSxlLmRldGFpbD09PWUuTVNHRVNUVVJFX0ZMQUdfSU5FUlRJQSlyZXR1cm4gdm9pZCBzZXRJbW1lZGlhdGUoZnVuY3Rpb24oKXt0Ll9nZXN0dXJlLnN0b3AoKX0pOygheHx8TnVtYmVyKG5ldyBEYXRlKS1mPjUwMCkmJihlLnByZXZlbnREZWZhdWx0KCksIXAmJmEudHJhbnNpdGlvbnMmJihhLnZhcnMuYW5pbWF0aW9uTG9vcHx8KG09dy8oMD09PWEuY3VycmVudFNsaWRlJiZ3PDB8fGEuY3VycmVudFNsaWRlPT09YS5sYXN0JiZ3PjA/TWF0aC5hYnModykvYysyOjEpKSxhLnNldFByb3BzKGwrbSxcInNldFRvdWNoXCIpKSl9fWZ1bmN0aW9uIGkoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD1lLnRhcmdldC5fc2xpZGVyO2lmKHQpe2lmKHQuYW5pbWF0aW5nVG89PT10LmN1cnJlbnRTbGlkZSYmIXgmJm51bGwhPT1tKXt2YXIgYT11Py1tOm0sbj1hPjA/dC5nZXRUYXJnZXQoXCJuZXh0XCIpOnQuZ2V0VGFyZ2V0KFwicHJldlwiKTt0LmNhbkFkdmFuY2UobikmJihOdW1iZXIobmV3IERhdGUpLWY8NTUwJiZNYXRoLmFicyhhKT41MHx8TWF0aC5hYnMoYSk+Yy8yKT90LmZsZXhBbmltYXRlKG4sdC52YXJzLnBhdXNlT25BY3Rpb24pOnB8fHQuZmxleEFuaW1hdGUodC5jdXJyZW50U2xpZGUsdC52YXJzLnBhdXNlT25BY3Rpb24sITApfXM9bnVsbCxvPW51bGwsbT1udWxsLGw9bnVsbCx3PTB9fXZhciBzLG8sbCxjLG0sZixnLGgsUyx4PSExLHk9MCxiPTAsdz0wO3I/KHQuc3R5bGUubXNUb3VjaEFjdGlvbj1cIm5vbmVcIix0Ll9nZXN0dXJlPW5ldyBNU0dlc3R1cmUsdC5fZ2VzdHVyZS50YXJnZXQ9dCx0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsZSwhMSksdC5fc2xpZGVyPW4sdC5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlQ2hhbmdlXCIsYSwhMSksdC5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlRW5kXCIsaSwhMSkpOihnPWZ1bmN0aW9uKGUpe24uYW5pbWF0aW5nP2UucHJldmVudERlZmF1bHQoKTood2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkfHwxPT09ZS50b3VjaGVzLmxlbmd0aCkmJihuLnBhdXNlKCksYz1kP24uaDpuLncsZj1OdW1iZXIobmV3IERhdGUpLHk9ZS50b3VjaGVzWzBdLnBhZ2VYLGI9ZS50b3VjaGVzWzBdLnBhZ2VZLGw9diYmdSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnYmJnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86diYmbi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/bi5saW1pdDp2PyhuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5jdXJyZW50U2xpZGU6dT8obi5sYXN0LW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmM6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmMscz1kP2I6eSxvPWQ/eTpiLHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGgsITEpLHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsUywhMSkpfSxoPWZ1bmN0aW9uKGUpe3k9ZS50b3VjaGVzWzBdLnBhZ2VYLGI9ZS50b3VjaGVzWzBdLnBhZ2VZLG09ZD9zLWI6KG4udmFycy5ydGw/LTE6MSkqKHMteSkseD1kP01hdGguYWJzKG0pPE1hdGguYWJzKHktbyk6TWF0aC5hYnMobSk8TWF0aC5hYnMoYi1vKTt2YXIgdD01MDA7KCF4fHxOdW1iZXIobmV3IERhdGUpLWY+NTAwKSYmKGUucHJldmVudERlZmF1bHQoKSwhcCYmbi50cmFuc2l0aW9ucyYmKG4udmFycy5hbmltYXRpb25Mb29wfHwobS89MD09PW4uY3VycmVudFNsaWRlJiZtPDB8fG4uY3VycmVudFNsaWRlPT09bi5sYXN0JiZtPjA/TWF0aC5hYnMobSkvYysyOjEpLG4uc2V0UHJvcHMobCttLFwic2V0VG91Y2hcIikpKX0sUz1mdW5jdGlvbihlKXtpZih0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSxuLmFuaW1hdGluZ1RvPT09bi5jdXJyZW50U2xpZGUmJiF4JiZudWxsIT09bSl7dmFyIGE9dT8tbTptLGk9YT4wP24uZ2V0VGFyZ2V0KFwibmV4dFwiKTpuLmdldFRhcmdldChcInByZXZcIik7bi5jYW5BZHZhbmNlKGkpJiYoTnVtYmVyKG5ldyBEYXRlKS1mPDU1MCYmTWF0aC5hYnMoYSk+NTB8fE1hdGguYWJzKGEpPmMvMik/bi5mbGV4QW5pbWF0ZShpLG4udmFycy5wYXVzZU9uQWN0aW9uKTpwfHxuLmZsZXhBbmltYXRlKG4uY3VycmVudFNsaWRlLG4udmFycy5wYXVzZU9uQWN0aW9uLCEwKX10LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLFMsITEpLHM9bnVsbCxvPW51bGwsbT1udWxsLGw9bnVsbH0sdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGcsITEpKX0scmVzaXplOmZ1bmN0aW9uKCl7IW4uYW5pbWF0aW5nJiZuLmlzKFwiOnZpc2libGVcIikmJih2fHxuLmRvTWF0aCgpLHA/Zi5zbW9vdGhIZWlnaHQoKTp2PyhuLnNsaWRlcy53aWR0aChuLmNvbXB1dGVkVyksbi51cGRhdGUobi5wYWdpbmdDb3VudCksbi5zZXRQcm9wcygpKTpkPyhuLnZpZXdwb3J0LmhlaWdodChuLmgpLG4uc2V0UHJvcHMobi5oLFwic2V0VG90YWxcIikpOihuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpLG4ubmV3U2xpZGVzLndpZHRoKG4uY29tcHV0ZWRXKSxuLnNldFByb3BzKG4uY29tcHV0ZWRXLFwic2V0VG90YWxcIikpKX0sc21vb3RoSGVpZ2h0OmZ1bmN0aW9uKGUpe2lmKCFkfHxwKXt2YXIgdD1wP246bi52aWV3cG9ydDtlP3QuYW5pbWF0ZSh7aGVpZ2h0Om4uc2xpZGVzLmVxKG4uYW5pbWF0aW5nVG8pLmlubmVySGVpZ2h0KCl9LGUpOnQuaW5uZXJIZWlnaHQobi5zbGlkZXMuZXEobi5hbmltYXRpbmdUbykuaW5uZXJIZWlnaHQoKSl9fSxzeW5jOmZ1bmN0aW9uKGUpe3ZhciB0PSQobi52YXJzLnN5bmMpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLGE9bi5hbmltYXRpbmdUbztzd2l0Y2goZSl7Y2FzZVwiYW5pbWF0ZVwiOnQuZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCk7YnJlYWs7Y2FzZVwicGxheVwiOnQucGxheWluZ3x8dC5hc05hdnx8dC5wbGF5KCk7YnJlYWs7Y2FzZVwicGF1c2VcIjp0LnBhdXNlKCk7YnJlYWt9fSx1bmlxdWVJRDpmdW5jdGlvbihlKXtyZXR1cm4gZS5maWx0ZXIoXCJbaWRdXCIpLmFkZChlLmZpbmQoXCJbaWRdXCIpKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9JCh0aGlzKTtlLmF0dHIoXCJpZFwiLGUuYXR0cihcImlkXCIpK1wiX2Nsb25lXCIpfSksZX0scGF1c2VJbnZpc2libGU6e3Zpc1Byb3A6bnVsbCxpbml0OmZ1bmN0aW9uKCl7dmFyIGU9Zi5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7aWYoZSl7dmFyIHQ9ZS5yZXBsYWNlKC9bSHxoXWlkZGVuLyxcIlwiKStcInZpc2liaWxpdHljaGFuZ2VcIjtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHQsZnVuY3Rpb24oKXtmLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCk/bi5zdGFydFRpbWVvdXQ/Y2xlYXJUaW1lb3V0KG4uc3RhcnRUaW1lb3V0KTpuLnBhdXNlKCk6bi5zdGFydGVkP24ucGxheSgpOm4udmFycy5pbml0RGVsYXk+MD9zZXRUaW1lb3V0KG4ucGxheSxuLnZhcnMuaW5pdERlbGF5KTpuLnBsYXkoKX0pfX0saXNIaWRkZW46ZnVuY3Rpb24oKXt2YXIgZT1mLnBhdXNlSW52aXNpYmxlLmdldEhpZGRlblByb3AoKTtyZXR1cm4hIWUmJmRvY3VtZW50W2VdfSxnZXRIaWRkZW5Qcm9wOmZ1bmN0aW9uKCl7dmFyIGU9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdO2lmKFwiaGlkZGVuXCJpbiBkb2N1bWVudClyZXR1cm5cImhpZGRlblwiO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWlmKGVbdF0rXCJIaWRkZW5cImluIGRvY3VtZW50KXJldHVybiBlW3RdK1wiSGlkZGVuXCI7cmV0dXJuIG51bGx9fSxzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGMpLGM9c2V0VGltZW91dChmdW5jdGlvbigpe2w9XCJcIn0sM2UzKX19LG4uZmxleEFuaW1hdGU9ZnVuY3Rpb24oZSx0LGEscixvKXtpZihuLnZhcnMuYW5pbWF0aW9uTG9vcHx8ZT09PW4uY3VycmVudFNsaWRlfHwobi5kaXJlY3Rpb249ZT5uLmN1cnJlbnRTbGlkZT9cIm5leHRcIjpcInByZXZcIiksbSYmMT09PW4ucGFnaW5nQ291bnQmJihuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGU/XCJuZXh0XCI6XCJwcmV2XCIpLCFuLmFuaW1hdGluZyYmKG4uY2FuQWR2YW5jZShlLG8pfHxhKSYmbi5pcyhcIjp2aXNpYmxlXCIpKXtpZihtJiZyKXt2YXIgbD0kKG4udmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIik7aWYobi5hdEVuZD0wPT09ZXx8ZT09PW4uY291bnQtMSxsLmZsZXhBbmltYXRlKGUsITAsITEsITAsbyksbi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxlP1wibmV4dFwiOlwicHJldlwiLGwuZGlyZWN0aW9uPW4uZGlyZWN0aW9uLE1hdGguY2VpbCgoZSsxKS9uLnZpc2libGUpLTE9PT1uLmN1cnJlbnRTbGlkZXx8MD09PWUpcmV0dXJuIG4uY3VycmVudEl0ZW09ZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksITE7bi5jdXJyZW50SXRlbT1lLG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxlPU1hdGguZmxvb3IoZS9uLnZpc2libGUpfWlmKG4uYW5pbWF0aW5nPSEwLG4uYW5pbWF0aW5nVG89ZSx0JiZuLnBhdXNlKCksbi52YXJzLmJlZm9yZShuKSxuLnN5bmNFeGlzdHMmJiFvJiZmLnN5bmMoXCJhbmltYXRlXCIpLG4udmFycy5jb250cm9sTmF2JiZmLmNvbnRyb2xOYXYuYWN0aXZlKCksdnx8bi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLG4uYXRFbmQ9MD09PWV8fGU9PT1uLmxhc3Qsbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYudXBkYXRlKCksZT09PW4ubGFzdCYmKG4udmFycy5lbmQobiksbi52YXJzLmFuaW1hdGlvbkxvb3B8fG4ucGF1c2UoKSkscClzPyhuLnNsaWRlcy5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHtvcGFjaXR5OjAsekluZGV4OjF9KSxuLnNsaWRlcy5lcShlKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6Mn0pLG4ud3JhcHVwKGMpKToobi5zbGlkZXMuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjF9KS5hbmltYXRlKHtvcGFjaXR5OjB9LG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nKSxuLnNsaWRlcy5lcShlKS5jc3Moe3pJbmRleDoyfSkuYW5pbWF0ZSh7b3BhY2l0eToxfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyxuLndyYXB1cCkpO2Vsc2V7dmFyIGM9ZD9uLnNsaWRlcy5maWx0ZXIoXCI6Zmlyc3RcIikuaGVpZ2h0KCk6bi5jb21wdXRlZFcsZyxoLFM7dj8oZz1uLnZhcnMuaXRlbU1hcmdpbixTPShuLml0ZW1XK2cpKm4ubW92ZSpuLmFuaW1hdGluZ1RvLGg9Uz5uLmxpbWl0JiYxIT09bi52aXNpYmxlP24ubGltaXQ6Uyk6aD0wPT09bi5jdXJyZW50U2xpZGUmJmU9PT1uLmNvdW50LTEmJm4udmFycy5hbmltYXRpb25Mb29wJiZcIm5leHRcIiE9PW4uZGlyZWN0aW9uP3U/KG4uY291bnQrbi5jbG9uZU9mZnNldCkqYzowOm4uY3VycmVudFNsaWRlPT09bi5sYXN0JiYwPT09ZSYmbi52YXJzLmFuaW1hdGlvbkxvb3AmJlwicHJldlwiIT09bi5kaXJlY3Rpb24/dT8wOihuLmNvdW50KzEpKmM6dT8obi5jb3VudC0xLWUrbi5jbG9uZU9mZnNldCkqYzooZStuLmNsb25lT2Zmc2V0KSpjLG4uc2V0UHJvcHMoaCxcIlwiLG4udmFycy5hbmltYXRpb25TcGVlZCksbi50cmFuc2l0aW9ucz8obi52YXJzLmFuaW1hdGlvbkxvb3AmJm4uYXRFbmR8fChuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1uLmFuaW1hdGluZ1RvKSxuLmNvbnRhaW5lci51bmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIiksbi5jb250YWluZXIuYmluZChcIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiLGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KG4uZW5zdXJlQW5pbWF0aW9uRW5kKSxuLndyYXB1cChjKX0pLGNsZWFyVGltZW91dChuLmVuc3VyZUFuaW1hdGlvbkVuZCksbi5lbnN1cmVBbmltYXRpb25FbmQ9c2V0VGltZW91dChmdW5jdGlvbigpe24ud3JhcHVwKGMpfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQrMTAwKSk6bi5jb250YWluZXIuYW5pbWF0ZShuLmFyZ3Msbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcsZnVuY3Rpb24oKXtuLndyYXB1cChjKX0pfW4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KG4udmFycy5hbmltYXRpb25TcGVlZCl9fSxuLndyYXB1cD1mdW5jdGlvbihlKXtwfHx2fHwoMD09PW4uY3VycmVudFNsaWRlJiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0JiZuLnZhcnMuYW5pbWF0aW9uTG9vcD9uLnNldFByb3BzKGUsXCJqdW1wRW5kXCIpOm4uY3VycmVudFNsaWRlPT09bi5sYXN0JiYwPT09bi5hbmltYXRpbmdUbyYmbi52YXJzLmFuaW1hdGlvbkxvb3AmJm4uc2V0UHJvcHMoZSxcImp1bXBTdGFydFwiKSksbi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9bi5hbmltYXRpbmdUbyxuLnZhcnMuYWZ0ZXIobil9LG4uYW5pbWF0ZVNsaWRlcz1mdW5jdGlvbigpeyFuLmFuaW1hdGluZyYmZSYmbi5mbGV4QW5pbWF0ZShuLmdldFRhcmdldChcIm5leHRcIikpfSxuLnBhdXNlPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChuLmFuaW1hdGVkU2xpZGVzKSxuLmFuaW1hdGVkU2xpZGVzPW51bGwsbi5wbGF5aW5nPSExLG4udmFycy5wYXVzZVBsYXkmJmYucGF1c2VQbGF5LnVwZGF0ZShcInBsYXlcIiksbi5zeW5jRXhpc3RzJiZmLnN5bmMoXCJwYXVzZVwiKX0sbi5wbGF5PWZ1bmN0aW9uKCl7bi5wbGF5aW5nJiZjbGVhckludGVydmFsKG4uYW5pbWF0ZWRTbGlkZXMpLG4uYW5pbWF0ZWRTbGlkZXM9bi5hbmltYXRlZFNsaWRlc3x8c2V0SW50ZXJ2YWwobi5hbmltYXRlU2xpZGVzLG4udmFycy5zbGlkZXNob3dTcGVlZCksbi5zdGFydGVkPW4ucGxheWluZz0hMCxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS51cGRhdGUoXCJwYXVzZVwiKSxuLnN5bmNFeGlzdHMmJmYuc3luYyhcInBsYXlcIil9LG4uc3RvcD1mdW5jdGlvbigpe24ucGF1c2UoKSxuLnN0b3BwZWQ9ITB9LG4uY2FuQWR2YW5jZT1mdW5jdGlvbihlLHQpe3ZhciBhPW0/bi5wYWdpbmdDb3VudC0xOm4ubGFzdDtyZXR1cm4hIXR8fCghKCFtfHxuLmN1cnJlbnRJdGVtIT09bi5jb3VudC0xfHwwIT09ZXx8XCJwcmV2XCIhPT1uLmRpcmVjdGlvbil8fCghbXx8MCE9PW4uY3VycmVudEl0ZW18fGUhPT1uLnBhZ2luZ0NvdW50LTF8fFwibmV4dFwiPT09bi5kaXJlY3Rpb24pJiYoIShlPT09bi5jdXJyZW50U2xpZGUmJiFtKSYmKCEhbi52YXJzLmFuaW1hdGlvbkxvb3B8fCghbi5hdEVuZHx8MCE9PW4uY3VycmVudFNsaWRlfHxlIT09YXx8XCJuZXh0XCI9PT1uLmRpcmVjdGlvbikmJighbi5hdEVuZHx8bi5jdXJyZW50U2xpZGUhPT1hfHwwIT09ZXx8XCJuZXh0XCIhPT1uLmRpcmVjdGlvbikpKSl9LG4uZ2V0VGFyZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBuLmRpcmVjdGlvbj1lLFwibmV4dFwiPT09ZT9uLmN1cnJlbnRTbGlkZT09PW4ubGFzdD8wOm4uY3VycmVudFNsaWRlKzE6MD09PW4uY3VycmVudFNsaWRlP24ubGFzdDpuLmN1cnJlbnRTbGlkZS0xfSxuLnNldFByb3BzPWZ1bmN0aW9uKGUsdCxhKXt2YXIgaT1mdW5jdGlvbigpe3ZhciBhPWV8fChuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbztyZXR1cm4gZnVuY3Rpb24oKXtpZih2KXJldHVyblwic2V0VG91Y2hcIj09PXQ/ZTp1JiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0PzA6dT9uLmxpbWl0LShuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbzpuLmFuaW1hdGluZ1RvPT09bi5sYXN0P24ubGltaXQ6YTtzd2l0Y2godCl7Y2FzZVwic2V0VG90YWxcIjpyZXR1cm4gdT8obi5jb3VudC0xLW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmU6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmU7Y2FzZVwic2V0VG91Y2hcIjpyZXR1cm4gZTtjYXNlXCJqdW1wRW5kXCI6cmV0dXJuIHU/ZTpuLmNvdW50KmU7Y2FzZVwianVtcFN0YXJ0XCI6cmV0dXJuIHU/bi5jb3VudCplOmU7ZGVmYXVsdDpyZXR1cm4gZX19KCkqKG4udmFycy5ydGw/MTotMSkrXCJweFwifSgpO24udHJhbnNpdGlvbnMmJihpPW4uaXNGaXJlZm94P2Q/XCJ0cmFuc2xhdGUzZCgwLFwiK2krXCIsMClcIjpcInRyYW5zbGF0ZTNkKFwiK3BhcnNlSW50KGkpK1wicHgsMCwwKVwiOmQ/XCJ0cmFuc2xhdGUzZCgwLFwiK2krXCIsMClcIjpcInRyYW5zbGF0ZTNkKFwiKyhuLnZhcnMucnRsPy0xOjEpKnBhcnNlSW50KGkpK1wicHgsMCwwKVwiLGE9dm9pZCAwIT09YT9hLzFlMytcInNcIjpcIjBzXCIsbi5jb250YWluZXIuY3NzKFwiLVwiK24ucGZ4K1wiLXRyYW5zaXRpb24tZHVyYXRpb25cIixhKSxuLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsYSkpLG4uYXJnc1tuLnByb3BdPWksKG4udHJhbnNpdGlvbnN8fHZvaWQgMD09PWEpJiZuLmNvbnRhaW5lci5jc3Mobi5hcmdzKSxuLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2Zvcm1cIixpKX0sbi5zZXR1cD1mdW5jdGlvbihlKXtpZihwKW4udmFycy5ydGw/bi5zbGlkZXMuY3NzKHt3aWR0aDpcIjEwMCVcIixmbG9hdDpcInJpZ2h0XCIsbWFyZ2luTGVmdDpcIi0xMDAlXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSk6bi5zbGlkZXMuY3NzKHt3aWR0aDpcIjEwMCVcIixmbG9hdDpcImxlZnRcIixtYXJnaW5SaWdodDpcIi0xMDAlXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSksXCJpbml0XCI9PT1lJiYocz9uLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix3ZWJraXRUcmFuc2l0aW9uOlwib3BhY2l0eSBcIituLnZhcnMuYW5pbWF0aW9uU3BlZWQvMWUzK1wicyBlYXNlXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OjJ9KTowPT1uLnZhcnMuZmFkZUZpcnN0U2xpZGU/bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6Mn0pLmNzcyh7b3BhY2l0eToxfSk6bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6Mn0pLmFuaW1hdGUoe29wYWNpdHk6MX0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcpKSxuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpO2Vsc2V7dmFyIHQsYTtcImluaXRcIj09PWUmJihuLnZpZXdwb3J0PSQoJzxkaXYgY2xhc3M9XCInK2krJ3ZpZXdwb3J0XCI+PC9kaXY+JykuY3NzKHtvdmVyZmxvdzpcImhpZGRlblwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLmFwcGVuZFRvKG4pLmFwcGVuZChuLmNvbnRhaW5lciksbi5jbG9uZUNvdW50PTAsbi5jbG9uZU9mZnNldD0wLHUmJihhPSQubWFrZUFycmF5KG4uc2xpZGVzKS5yZXZlcnNlKCksbi5zbGlkZXM9JChhKSxuLmNvbnRhaW5lci5lbXB0eSgpLmFwcGVuZChuLnNsaWRlcykpKSxuLnZhcnMuYW5pbWF0aW9uTG9vcCYmIXYmJihuLmNsb25lQ291bnQ9MixuLmNsb25lT2Zmc2V0PTEsXCJpbml0XCIhPT1lJiZuLmNvbnRhaW5lci5maW5kKFwiLmNsb25lXCIpLnJlbW92ZSgpLG4uY29udGFpbmVyLmFwcGVuZChmLnVuaXF1ZUlEKG4uc2xpZGVzLmZpcnN0KCkuY2xvbmUoKS5hZGRDbGFzcyhcImNsb25lXCIpKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpLnByZXBlbmQoZi51bmlxdWVJRChuLnNsaWRlcy5sYXN0KCkuY2xvbmUoKS5hZGRDbGFzcyhcImNsb25lXCIpKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpKSxuLm5ld1NsaWRlcz0kKG4udmFycy5zZWxlY3RvcixuKSx0PXU/bi5jb3VudC0xLW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQ6bi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCxkJiYhdj8obi5jb250YWluZXIuaGVpZ2h0KDIwMCoobi5jb3VudCtuLmNsb25lQ291bnQpK1wiJVwiKS5jc3MoXCJwb3NpdGlvblwiLFwiYWJzb2x1dGVcIikud2lkdGgoXCIxMDAlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm5ld1NsaWRlcy5jc3Moe2Rpc3BsYXk6XCJibG9ja1wifSksbi5kb01hdGgoKSxuLnZpZXdwb3J0LmhlaWdodChuLmgpLG4uc2V0UHJvcHModCpuLmgsXCJpbml0XCIpfSxcImluaXRcIj09PWU/MTAwOjApKToobi5jb250YWluZXIud2lkdGgoMjAwKihuLmNvdW50K24uY2xvbmVDb3VudCkrXCIlXCIpLG4uc2V0UHJvcHModCpuLmNvbXB1dGVkVyxcImluaXRcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24uZG9NYXRoKCksbi52YXJzLnJ0bCYmbi5pc0ZpcmVmb3g/bi5uZXdTbGlkZXMuY3NzKHt3aWR0aDpuLmNvbXB1dGVkVyxtYXJnaW5SaWdodDpuLmNvbXB1dGVkTSxmbG9hdDpcInJpZ2h0XCIsZGlzcGxheTpcImJsb2NrXCJ9KTpuLm5ld1NsaWRlcy5jc3Moe3dpZHRoOm4uY29tcHV0ZWRXLG1hcmdpblJpZ2h0Om4uY29tcHV0ZWRNLGZsb2F0OlwibGVmdFwiLGRpc3BsYXk6XCJibG9ja1wifSksbi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKX0sXCJpbml0XCI9PT1lPzEwMDowKSl9dnx8bi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShuLmN1cnJlbnRTbGlkZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxuLnZhcnMuaW5pdChuKX0sbi5kb01hdGg9ZnVuY3Rpb24oKXt2YXIgZT1uLnNsaWRlcy5maXJzdCgpLHQ9bi52YXJzLml0ZW1NYXJnaW4sYT1uLnZhcnMubWluSXRlbXMsaT1uLnZhcnMubWF4SXRlbXM7bi53PXZvaWQgMD09PW4udmlld3BvcnQ/bi53aWR0aCgpOm4udmlld3BvcnQud2lkdGgoKSxuLmlzRmlyZWZveCYmKG4udz1uLndpZHRoKCkpLG4uaD1lLmhlaWdodCgpLG4uYm94UGFkZGluZz1lLm91dGVyV2lkdGgoKS1lLndpZHRoKCksdj8obi5pdGVtVD1uLnZhcnMuaXRlbVdpZHRoK3Qsbi5pdGVtTT10LG4ubWluVz1hP2Eqbi5pdGVtVDpuLncsbi5tYXhXPWk/aSpuLml0ZW1ULXQ6bi53LG4uaXRlbVc9bi5taW5XPm4udz8obi53LXQqKGEtMSkpL2E6bi5tYXhXPG4udz8obi53LXQqKGktMSkpL2k6bi52YXJzLml0ZW1XaWR0aD5uLnc/bi53Om4udmFycy5pdGVtV2lkdGgsbi52aXNpYmxlPU1hdGguZmxvb3Iobi53L24uaXRlbVcpLG4ubW92ZT1uLnZhcnMubW92ZT4wJiZuLnZhcnMubW92ZTxuLnZpc2libGU/bi52YXJzLm1vdmU6bi52aXNpYmxlLG4ucGFnaW5nQ291bnQ9TWF0aC5jZWlsKChuLmNvdW50LW4udmlzaWJsZSkvbi5tb3ZlKzEpLG4ubGFzdD1uLnBhZ2luZ0NvdW50LTEsbi5saW1pdD0xPT09bi5wYWdpbmdDb3VudD8wOm4udmFycy5pdGVtV2lkdGg+bi53P24uaXRlbVcqKG4uY291bnQtMSkrdCoobi5jb3VudC0xKToobi5pdGVtVyt0KSpuLmNvdW50LW4udy10KToobi5pdGVtVz1uLncsbi5pdGVtTT10LG4ucGFnaW5nQ291bnQ9bi5jb3VudCxuLmxhc3Q9bi5jb3VudC0xKSxuLmNvbXB1dGVkVz1uLml0ZW1XLW4uYm94UGFkZGluZyxuLmNvbXB1dGVkTT1uLml0ZW1NfSxuLnVwZGF0ZT1mdW5jdGlvbihlLHQpe24uZG9NYXRoKCksdnx8KGU8bi5jdXJyZW50U2xpZGU/bi5jdXJyZW50U2xpZGUrPTE6ZTw9bi5jdXJyZW50U2xpZGUmJjAhPT1lJiYobi5jdXJyZW50U2xpZGUtPTEpLG4uYW5pbWF0aW5nVG89bi5jdXJyZW50U2xpZGUpLG4udmFycy5jb250cm9sTmF2JiYhbi5tYW51YWxDb250cm9scyYmKFwiYWRkXCI9PT10JiYhdnx8bi5wYWdpbmdDb3VudD5uLmNvbnRyb2xOYXYubGVuZ3RoP2YuY29udHJvbE5hdi51cGRhdGUoXCJhZGRcIik6KFwicmVtb3ZlXCI9PT10JiYhdnx8bi5wYWdpbmdDb3VudDxuLmNvbnRyb2xOYXYubGVuZ3RoKSYmKHYmJm4uY3VycmVudFNsaWRlPm4ubGFzdCYmKG4uY3VycmVudFNsaWRlLT0xLG4uYW5pbWF0aW5nVG8tPTEpLGYuY29udHJvbE5hdi51cGRhdGUoXCJyZW1vdmVcIixuLmxhc3QpKSksbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYudXBkYXRlKCl9LG4uYWRkU2xpZGU9ZnVuY3Rpb24oZSx0KXt2YXIgYT0kKGUpO24uY291bnQrPTEsbi5sYXN0PW4uY291bnQtMSxkJiZ1P3ZvaWQgMCE9PXQ/bi5zbGlkZXMuZXEobi5jb3VudC10KS5hZnRlcihhKTpuLmNvbnRhaW5lci5wcmVwZW5kKGEpOnZvaWQgMCE9PXQ/bi5zbGlkZXMuZXEodCkuYmVmb3JlKGEpOm4uY29udGFpbmVyLmFwcGVuZChhKSxuLnVwZGF0ZSh0LFwiYWRkXCIpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yK1wiOm5vdCguY2xvbmUpXCIsbiksbi5zZXR1cCgpLG4udmFycy5hZGRlZChuKX0sbi5yZW1vdmVTbGlkZT1mdW5jdGlvbihlKXt2YXIgdD1pc05hTihlKT9uLnNsaWRlcy5pbmRleCgkKGUpKTplO24uY291bnQtPTEsbi5sYXN0PW4uY291bnQtMSxpc05hTihlKT8kKGUsbi5zbGlkZXMpLnJlbW92ZSgpOmQmJnU/bi5zbGlkZXMuZXEobi5sYXN0KS5yZW1vdmUoKTpuLnNsaWRlcy5lcShlKS5yZW1vdmUoKSxuLmRvTWF0aCgpLG4udXBkYXRlKHQsXCJyZW1vdmVcIiksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IrXCI6bm90KC5jbG9uZSlcIixuKSxuLnNldHVwKCksbi52YXJzLnJlbW92ZWQobil9LGYuaW5pdCgpfSwkKHdpbmRvdykuYmx1cihmdW5jdGlvbih0KXtlPSExfSkuZm9jdXMoZnVuY3Rpb24odCl7ZT0hMH0pLCQuZmxleHNsaWRlci5kZWZhdWx0cz17bmFtZXNwYWNlOlwiZmxleC1cIixzZWxlY3RvcjpcIi5zbGlkZXMgPiBsaVwiLGFuaW1hdGlvbjpcImZhZGVcIixlYXNpbmc6XCJzd2luZ1wiLGRpcmVjdGlvbjpcImhvcml6b250YWxcIixyZXZlcnNlOiExLGFuaW1hdGlvbkxvb3A6ITAsc21vb3RoSGVpZ2h0OiExLHN0YXJ0QXQ6MCxzbGlkZXNob3c6ITAsc2xpZGVzaG93U3BlZWQ6N2UzLGFuaW1hdGlvblNwZWVkOjYwMCxpbml0RGVsYXk6MCxyYW5kb21pemU6ITEsZmFkZUZpcnN0U2xpZGU6ITAsdGh1bWJDYXB0aW9uczohMSxwYXVzZU9uQWN0aW9uOiEwLHBhdXNlT25Ib3ZlcjohMSxwYXVzZUludmlzaWJsZTohMCx1c2VDU1M6ITAsdG91Y2g6ITAsdmlkZW86ITEsY29udHJvbE5hdjohMCxkaXJlY3Rpb25OYXY6ITAscHJldlRleHQ6XCJQcmV2aW91c1wiLG5leHRUZXh0OlwiTmV4dFwiLGtleWJvYXJkOiEwLG11bHRpcGxlS2V5Ym9hcmQ6ITEsbW91c2V3aGVlbDohMSxwYXVzZVBsYXk6ITEscGF1c2VUZXh0OlwiUGF1c2VcIixwbGF5VGV4dDpcIlBsYXlcIixjb250cm9sc0NvbnRhaW5lcjpcIlwiLG1hbnVhbENvbnRyb2xzOlwiXCIsY3VzdG9tRGlyZWN0aW9uTmF2OlwiXCIsc3luYzpcIlwiLGFzTmF2Rm9yOlwiXCIsaXRlbVdpZHRoOjAsaXRlbU1hcmdpbjowLG1pbkl0ZW1zOjEsbWF4SXRlbXM6MCxtb3ZlOjAsYWxsb3dPbmVTbGlkZTohMCxpc0ZpcmVmb3g6ITEsc3RhcnQ6ZnVuY3Rpb24oKXt9LGJlZm9yZTpmdW5jdGlvbigpe30sYWZ0ZXI6ZnVuY3Rpb24oKXt9LGVuZDpmdW5jdGlvbigpe30sYWRkZWQ6ZnVuY3Rpb24oKXt9LHJlbW92ZWQ6ZnVuY3Rpb24oKXt9LGluaXQ6ZnVuY3Rpb24oKXt9LHJ0bDohMX0sJC5mbi5mbGV4c2xpZGVyPWZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUmJihlPXt9KSxcIm9iamVjdFwiPT10eXBlb2YgZSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9JCh0aGlzKSxhPWUuc2VsZWN0b3I/ZS5zZWxlY3RvcjpcIi5zbGlkZXMgPiBsaVwiLG49dC5maW5kKGEpOzE9PT1uLmxlbmd0aCYmITE9PT1lLmFsbG93T25lU2xpZGV8fDA9PT1uLmxlbmd0aD8obi5mYWRlSW4oNDAwKSxlLnN0YXJ0JiZlLnN0YXJ0KHQpKTp2b2lkIDA9PT10LmRhdGEoXCJmbGV4c2xpZGVyXCIpJiZuZXcgJC5mbGV4c2xpZGVyKHRoaXMsZSl9KTt2YXIgdD0kKHRoaXMpLmRhdGEoXCJmbGV4c2xpZGVyXCIpO3N3aXRjaChlKXtjYXNlXCJwbGF5XCI6dC5wbGF5KCk7YnJlYWs7Y2FzZVwicGF1c2VcIjp0LnBhdXNlKCk7YnJlYWs7Y2FzZVwic3RvcFwiOnQuc3RvcCgpO2JyZWFrO2Nhc2VcIm5leHRcIjp0LmZsZXhBbmltYXRlKHQuZ2V0VGFyZ2V0KFwibmV4dFwiKSwhMCk7YnJlYWs7Y2FzZVwicHJldlwiOmNhc2VcInByZXZpb3VzXCI6dC5mbGV4QW5pbWF0ZSh0LmdldFRhcmdldChcInByZXZcIiksITApO2JyZWFrO2RlZmF1bHQ6XCJudW1iZXJcIj09dHlwZW9mIGUmJnQuZmxleEFuaW1hdGUoZSwhMCl9fX0oalF1ZXJ5KTsiLCIhZnVuY3Rpb24oZyl7Zy5mbi50d2VudHl0d2VudHk9ZnVuY3Rpb24obSl7bT1nLmV4dGVuZCh7ZGVmYXVsdF9vZmZzZXRfcGN0Oi41LG9yaWVudGF0aW9uOlwiaG9yaXpvbnRhbFwiLGJlZm9yZV9sYWJlbDpcIkJlZm9yZVwiLGFmdGVyX2xhYmVsOlwiQWZ0ZXJcIixub19vdmVybGF5OiExLG1vdmVfc2xpZGVyX29uX2hvdmVyOiExLG1vdmVfd2l0aF9oYW5kbGVfb25seTohMCxjbGlja190b19tb3ZlOiExfSxtKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9bS5kZWZhdWx0X29mZnNldF9wY3Qscz1nKHRoaXMpLHI9bS5vcmllbnRhdGlvbix0PVwidmVydGljYWxcIj09PXI/XCJkb3duXCI6XCJsZWZ0XCIsbj1cInZlcnRpY2FsXCI9PT1yP1widXBcIjpcInJpZ2h0XCI7aWYocy53cmFwKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LXdyYXBwZXIgdHdlbnR5dHdlbnR5LVwiK3IrXCInPjwvZGl2PlwiKSwhbS5ub19vdmVybGF5KXtzLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1vdmVybGF5Jz48L2Rpdj5cIik7dmFyIGE9cy5maW5kKFwiLnR3ZW50eXR3ZW50eS1vdmVybGF5XCIpO2EuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWJlZm9yZS1sYWJlbCcgZGF0YS1jb250ZW50PSdcIittLmJlZm9yZV9sYWJlbCtcIic+PC9kaXY+XCIpLGEuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWFmdGVyLWxhYmVsJyBkYXRhLWNvbnRlbnQ9J1wiK20uYWZ0ZXJfbGFiZWwrXCInPjwvZGl2PlwiKX12YXIgYz1zLmZpbmQoXCJpbWc6Zmlyc3RcIiksbD1zLmZpbmQoXCJpbWc6bGFzdFwiKTtzLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1oYW5kbGUnPjwvZGl2PlwiKTt2YXIgZD1zLmZpbmQoXCIudHdlbnR5dHdlbnR5LWhhbmRsZVwiKTtkLmFwcGVuZChcIjxzcGFuIGNsYXNzPSd0d2VudHl0d2VudHktXCIrdCtcIi1hcnJvdyc+PC9zcGFuPlwiKSxkLmFwcGVuZChcIjxzcGFuIGNsYXNzPSd0d2VudHl0d2VudHktXCIrbitcIi1hcnJvdyc+PC9zcGFuPlwiKSxzLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWNvbnRhaW5lclwiKSxjLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWJlZm9yZVwiKSxsLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWFmdGVyXCIpO2Z1bmN0aW9uIGkodCl7dmFyIGUsbixhLGksbz0oZT10LG49Yy53aWR0aCgpLGE9Yy5oZWlnaHQoKSx7dzpuK1wicHhcIixoOmErXCJweFwiLGN3OmUqbitcInB4XCIsY2g6ZSphK1wicHhcIn0pO2QuY3NzKFwidmVydGljYWxcIj09PXI/XCJ0b3BcIjpcImxlZnRcIixcInZlcnRpY2FsXCI9PT1yP28uY2g6by5jdyksaT1vLFwidmVydGljYWxcIj09PXI/KGMuY3NzKFwiY2xpcFwiLFwicmVjdCgwLFwiK2kudytcIixcIitpLmNoK1wiLDApXCIpLGwuY3NzKFwiY2xpcFwiLFwicmVjdChcIitpLmNoK1wiLFwiK2kudytcIixcIitpLmgrXCIsMClcIikpOihjLmNzcyhcImNsaXBcIixcInJlY3QoMCxcIitpLmN3K1wiLFwiK2kuaCtcIiwwKVwiKSxsLmNzcyhcImNsaXBcIixcInJlY3QoMCxcIitpLncrXCIsXCIraS5oK1wiLFwiK2kuY3crXCIpXCIpKSxzLmNzcyhcImhlaWdodFwiLGkuaCl9ZnVuY3Rpb24gbyh0LGUpe3ZhciBuLGEsaTtyZXR1cm4gbj1cInZlcnRpY2FsXCI9PT1yPyhlLXkpL3U6KHQtcCkvaCxhPTAsaT0xLE1hdGgubWF4KGEsTWF0aC5taW4oaSxuKSl9Zyh3aW5kb3cpLm9uKFwicmVzaXplLnR3ZW50eXR3ZW50eVwiLGZ1bmN0aW9uKHQpe2koZSl9KTtmdW5jdGlvbiB3KHQpeyh0LmRpc3RYPnQuZGlzdFkmJnQuZGlzdFg8LXQuZGlzdFl8fHQuZGlzdFg8dC5kaXN0WSYmdC5kaXN0WD4tdC5kaXN0WSkmJlwidmVydGljYWxcIiE9PXI/dC5wcmV2ZW50RGVmYXVsdCgpOih0LmRpc3RYPHQuZGlzdFkmJnQuZGlzdFg8LXQuZGlzdFl8fHQuZGlzdFg+dC5kaXN0WSYmdC5kaXN0WD4tdC5kaXN0WSkmJlwidmVydGljYWxcIj09PXImJnQucHJldmVudERlZmF1bHQoKSxzLmFkZENsYXNzKFwiYWN0aXZlXCIpLHA9cy5vZmZzZXQoKS5sZWZ0LHk9cy5vZmZzZXQoKS50b3AsaD1jLndpZHRoKCksdT1jLmhlaWdodCgpfWZ1bmN0aW9uIGYodCl7cy5oYXNDbGFzcyhcImFjdGl2ZVwiKSYmKGU9byh0LnBhZ2VYLHQucGFnZVkpLGkoZSkpfWZ1bmN0aW9uIHYoKXtzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfXZhciBwPTAseT0wLGg9MCx1PTAsXz1tLm1vdmVfd2l0aF9oYW5kbGVfb25seT9kOnM7Xy5vbihcIm1vdmVzdGFydFwiLHcpLF8ub24oXCJtb3ZlXCIsZiksXy5vbihcIm1vdmVlbmRcIix2KSxtLm1vdmVfc2xpZGVyX29uX2hvdmVyJiYocy5vbihcIm1vdXNlZW50ZXJcIix3KSxzLm9uKFwibW91c2Vtb3ZlXCIsZikscy5vbihcIm1vdXNlbGVhdmVcIix2KSksZC5vbihcInRvdWNobW92ZVwiLGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKX0pLHMuZmluZChcImltZ1wiKS5vbihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKX0pLG0uY2xpY2tfdG9fbW92ZSYmcy5vbihcImNsaWNrXCIsZnVuY3Rpb24odCl7cD1zLm9mZnNldCgpLmxlZnQseT1zLm9mZnNldCgpLnRvcCxoPWMud2lkdGgoKSx1PWMuaGVpZ2h0KCksZT1vKHQucGFnZVgsdC5wYWdlWSksaShlKX0pLGcod2luZG93KS50cmlnZ2VyKFwicmVzaXplLnR3ZW50eXR3ZW50eVwiKX0pfX0oalF1ZXJ5KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI21lbnUtb3BlbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNtZW51LW9wZW4gc3BhbicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJCgnLm5hdicpLnNsaWRlVG9nZ2xlKCdzbG93Jyk7ICBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcHJvZHVjdHMgc3ViIG1lbnVcclxuICAgICQoJy5wcm9kdWN0cy1tZW51LWxpbms+YScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5kb3dubG9hZHMnKS5yZW1vdmVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICQoJy5wcm9kdWN0cycpLnRvZ2dsZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICB9KTsgIFxyXG5cclxuICAgIC8vZG93bmxvYWRzIHN1YiBtZW51XHJcbiAgICAkKCcuZG93bmxvYWQtbWVudS1saW5rJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzJykucmVtb3ZlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgICAgICAkKCcuZG93bmxvYWRzJykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY2hhbmdlIHByb2R1Y3QgbWVudSBsaW5rIG9uIG1vYmlsZVxyXG5cclxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgaWYodyA8IDEyMDApIHtcclxuICAgICAgJCgnLnByb2R1Y3RzLW1lbnUtbGluaz5hJykuYXR0cignaHJlZicsICcvcHJvZHVjdHMnKTtcclxuICAgICAgJCgnLmRvd25sb2FkLW1lbnUtbGluaz5hJykuYXR0cignaHJlZicsICcvZG93bmxvYWRzJyk7XHJcbiAgICB9IFxyXG5cclxuICAvL2NvbGxhcHNpYmxlIG1lbnVzIGZ1bmN0aW9uXHJcbiAgZnVuY3Rpb24gc2V0dXBfY29sbGFwc2libGVfc3VibWVudXMoKSB7XHJcbiAgICB2YXIgJG1lbnUgPSAkKCcjbW9iaWxlX21lbnUnKSxcclxuICAgICAgdG9wX2xldmVsX2xpbmsgPSAnI21vYmlsZV9tZW51IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSc7XHJcbiAgICAgIGNvbnNvbGUubG9nKCRtZW51KTtcclxuICAgICRtZW51LmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLm9mZignY2xpY2snKTtcclxuICAgICAgIFxyXG4gICAgICBpZiAoICQodGhpcykuaXModG9wX2xldmVsX2xpbmspICkge1xyXG4gICAgICAgICQodGhpcykuYXR0cignaHJlZicsICcjJyk7XHJcbiAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICBpZiAoICEgJCh0aGlzKS5zaWJsaW5ncygnLnN1Yi1tZW51JykubGVuZ3RoICkge1xyXG4gICAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICQodGhpcykucGFyZW50cygnLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgIFxyXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgc2V0dXBfY29sbGFwc2libGVfc3VibWVudXMoKTtcclxuICAgIH0sIDcwMCk7XHJcbiAgfSk7XHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubmV3cy1zbGlkZXInKS5mbGV4c2xpZGVyKHtcclxuICAgICAgICBhbmltYXRpb246IFwiZmFkZVwiLFxyXG4gICAgICAgIHNsaWRlc2hvd1NwZWVkOiA3MDAwLFxyXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA2MDAsXHJcbiAgICAgICAgYW5pbWF0aW9uTG9vcDogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uQWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAvL2NvbnRyb2xOYXY6IHRydWUsICBcclxuICAgICAgICBydGw6IHRydWUsXHJcbiAgICAgICAgY3VzdG9tRGlyZWN0aW9uTmF2OiAkKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIilcclxuICAgIH0pO1xyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnByb2R1Y3Qtc2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBcImZhZGVcIixcclxuICAgICAgICAvL3NsaWRlc2hvd1NwZWVkOiA3MDAwLFxyXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA2MDAsXHJcbiAgICAgICAgYW5pbWF0aW9uTG9vcDogZmFsc2UsXHJcbiAgICAgICAgcGF1c2VPbkFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgY29udHJvbE5hdjogdHJ1ZSxcclxuICAgICAgICBydGw6IHRydWUsXHJcbiAgICAgICAgY3VzdG9tRGlyZWN0aW9uTmF2OiAkKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIilcclxuICAgIH0pO1xyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5iZWZvcmUnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLmJlZm9yZScpLmZhZGVPdXQoMTUwMCk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuaWYoJCgnLmltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGgpIHtcclxuXHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHQgICQoXCIjaW1hZ2VzX3RvX2NvbXBhcmVcIikudHdlbnR5dHdlbnR5KCk7XHJcblx0fSk7XHJcbn0iLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICQoJy5mbGV4c2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICBhbmltYXRpb246IFwiZmFkZVwiLFxyXG4gICAgc2xpZGVzaG93U3BlZWQ6IDcwMDAsXHJcbiAgICBhbmltYXRpb25TcGVlZDogNjAwLCAgXHJcbiAgICBhbmltYXRpb25Mb29wOiB0cnVlLFxyXG5cdGNvbnRyb2xOYXY6IHRydWUsICBcclxuICAgIHJ0bDogdHJ1ZSxcclxuICB9KTtcclxufSk7IiwiLy9hZGQgc21vb3RoIHNjcm9sbCB0byBhbGwgbGlua3NcclxudmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gIC8vIEFkZCBzbW9vdGggc2Nyb2xsaW5nIHRvIGFsbCBsaW5rc1xyXG4gICQoXCJhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIHRoaXMuaGFzaCBoYXMgYSB2YWx1ZSBiZWZvcmUgb3ZlcnJpZGluZyBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICBpZiAodGhpcy5oYXNoICE9PSBcIlwiKSB7XHJcbiAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIC8vIFN0b3JlIGhhc2hcclxuICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XHJcblxyXG4gICAgICAvLyBVc2luZyBqUXVlcnkncyBhbmltYXRlKCkgbWV0aG9kIHRvIGFkZCBzbW9vdGggcGFnZSBzY3JvbGxcclxuICAgICAgLy8gVGhlIG9wdGlvbmFsIG51bWJlciAoODAwKSBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdGFrZXMgdG8gc2Nyb2xsIHRvIHRoZSBzcGVjaWZpZWQgYXJlYVxyXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcFxyXG4gICAgICB9LCA4MDAsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vIEFkZCBoYXNoICgjKSB0byBVUkwgd2hlbiBkb25lIHNjcm9sbGluZyAoZGVmYXVsdCBjbGljayBiZWhhdmlvcilcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICAgIH0pO1xyXG4gICAgfSAvLyBFbmQgaWZcclxuICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==