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
/* harmony import */ var _components_product_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product-slider */ "./src/js/components/product-slider.js");
/* harmony import */ var _components_product_slider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_product_slider__WEBPACK_IMPORTED_MODULE_13__);
/** Import dependencies **/



/** Import Custom files **/










 //import './components/designer-login';



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

/***/ "./src/js/components/front-page.js":
/*!*****************************************!*\
  !*** ./src/js/components/front-page.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var videoTitle = document.querySelector('.video-title');
var videoContainer = document.querySelector('#video-container');
var logo = document.querySelector('.prime-oak-logo');

function videoIntro() {
  var homepageTl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: "power2.inOut"
    }
  });
  homepageTl.fromTo(videoTitle, {
    opacity: "0"
  }, {
    opacity: "1"
  });
  homepageTl.fromTo(videoTitle, {
    opacity: "1"
  }, {
    opacity: "0"
  });
  homepageTl.to(logo, {
    opacity: "1"
  });
  homepageTl.to(logo, {
    opacity: "0"
  });
  homepageTl.fromTo(videoContainer, {
    opacity: "1"
  }, {
    duration: "1",
    opacity: "0"
  });
}

videoIntro();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvNDA0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mcm9udC1wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Z1bGwtaW1hZ2UtZmxleHNsaWRlci1pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2pxdWVyeS5ldmVudC5tb3ZlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9qcXVlcnkuZmxleHNsaWRlci1taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvanF1ZXJ5LnR3ZW50eXR3ZW50eS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9uZXdzLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wcm9kdWN0LXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc21vb3RoLXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImdsb2JhbCIsInVuZGVmaW5lZCIsInNldEltbWVkaWF0ZSIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiZG9jIiwiZG9jdW1lbnQiLCJyZWdpc3RlckltbWVkaWF0ZSIsImNhbGxiYWNrIiwiRnVuY3Rpb24iLCJ0YXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJoYW5kbGUiLCJydW5JZlByZXNlbnQiLCJpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbiIsImNhblVzZVBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwicG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyIsIm9sZE9uTWVzc2FnZSIsIm9ubWVzc2FnZSIsImluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uIiwibWVzc2FnZVByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJldmVudCIsInNvdXJjZSIsImRhdGEiLCJpbmRleE9mIiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbiIsImNoYW5uZWwiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwicG9ydDIiLCJpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uIiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJ0b1N0cmluZyIsInNlbGYiLCJzY29wZSIsIndpbmRvdyIsIlRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsImlkIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJpdGVtIiwibXNlY3MiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwiYWN0aXZlIiwib25UaW1lb3V0IiwiX29uVGltZW91dCIsInJlcXVpcmUiLCJnIiwiJCIsImpRdWVyeSIsInJlYWR5IiwiY2xpY2siLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwidyIsImlubmVyV2lkdGgiLCJhdHRyIiwibG9hZCIsInR3ZW50eXR3ZW50eSIsInZpZGVvVGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwidmlkZW9Db250YWluZXIiLCJsb2dvIiwidmlkZW9JbnRybyIsImhvbWVwYWdlVGwiLCJnc2FwIiwidGltZWxpbmUiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwiZWFzZSIsImZyb21UbyIsIm9wYWNpdHkiLCJ0byIsIiR3aW5kb3ciLCJmbGV4c2xpZGVyIiwidmFycyIsImdldEdyaWRTaXplIiwiZWFjaCIsImZpbmQiLCJhbmltYXRpb24iLCJzbGlkZXNob3dTcGVlZCIsImFuaW1hdGlvbkxvb3AiLCJjb250cm9sTmF2IiwiY3VzdG9tRGlyZWN0aW9uTmF2IiwibWluSXRlbXMiLCJtYXhJdGVtcyIsInN0YXJ0Iiwic2xpZGVyIiwicmVzaXplIiwiZ3JpZFNpemUiLCJkZWZpbmUiLCJhc3NpZ24iLCJleHRlbmQiLCJwIiwiYSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsIm4iLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIkN1c3RvbUV2ZW50IiwiRXZlbnQiLCJvIiwidGV4dGFyZWEiLCJpbnB1dCIsInNlbGVjdCIsImJ1dHRvbiIsImMiLCJtb3ZlIiwiY2FuY2VsIiwiZW5kIiwidSIsInIiLCJkIiwiU3ltYm9sIiwibSIsInYiLCJzcGxpdCIsImYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiZGlzcGF0Y2hFdmVudCIsInMiLCJraWNrIiwiaCIsImwiLCJwcmV2ZW50RGVmYXVsdCIsIlgiLCJpZGVudGlmaWVkVG91Y2giLCJpZGVudGlmaWVyIiwiWSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIlQiLCJ5IiwiYiIsInRvdWNobW92ZSIsInRvdWNoZW5kIiwidGFyZ2V0VG91Y2hlcyIsInRpbWVTdGFtcCIsImFsdEtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsInN0YXJ0WCIsInN0YXJ0WSIsImRpc3RYIiwiZGlzdFkiLCJkZWx0YVgiLCJkZWx0YVkiLCJ2ZWxvY2l0eVgiLCJ2ZWxvY2l0eVkiLCJmaW5nZXIiLCJlbmFibGVNb3ZlIiwibW92ZUVuYWJsZWQiLCJ0YXJnZXQiLCJFIiwidGltZXIiLCJ0b3VjaCIsIlMiLCJLIiwiayIsImFjdGl2ZVRvdWNobW92ZSIsImFjdGl2ZVRvdWNoZW5kIiwid2hpY2giLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkZWZhdWx0UHJldmVudGVkIiwiaiIsInNwZWNpYWwiLCJtb3Zlc3RhcnQiLCJzZXR1cCIsIkMiLCJ0ZWFyZG93biIsImFkZCIsIkEiLCJRIiwibW92ZWVuZCIsInEiLCJoYW5kbGVyIiwib3JpZ2luYWxFdmVudCIsInJ0bCIsIm5hbWVzcGFjZSIsIm5hdmlnYXRvciIsIm1zUG9pbnRlckVuYWJsZWQiLCJNU0dlc3R1cmUiLCJEb2N1bWVudFRvdWNoIiwiZGlyZWN0aW9uIiwicmV2ZXJzZSIsIml0ZW1XaWR0aCIsImFzTmF2Rm9yIiwiaW5pdCIsImFuaW1hdGluZyIsImN1cnJlbnRTbGlkZSIsInBhcnNlSW50Iiwic3RhcnRBdCIsImlzTmFOIiwiYW5pbWF0aW5nVG8iLCJhdEVuZCIsImxhc3QiLCJjb250YWluZXJTZWxlY3RvciIsInNlbGVjdG9yIiwic3Vic3RyIiwic2VhcmNoIiwic2xpZGVzIiwiY29udGFpbmVyIiwiY291bnQiLCJzeW5jRXhpc3RzIiwic3luYyIsInByb3AiLCJtYW51YWxQYXVzZSIsInN0b3BwZWQiLCJzdGFydGVkIiwic3RhcnRUaW1lb3V0IiwidHJhbnNpdGlvbnMiLCJ2aWRlbyIsInVzZUNTUyIsInN0eWxlIiwicGZ4IiwicmVwbGFjZSIsImlzRmlyZWZveCIsInVzZXJBZ2VudCIsImVuc3VyZUFuaW1hdGlvbkVuZCIsImNvbnRyb2xzQ29udGFpbmVyIiwibWFudWFsQ29udHJvbHMiLCJyYW5kb21pemUiLCJzb3J0Iiwicm91bmQiLCJlbXB0eSIsImFwcGVuZCIsImRvTWF0aCIsImRpcmVjdGlvbk5hdiIsImtleWJvYXJkIiwibXVsdGlwbGVLZXlib2FyZCIsImJpbmQiLCJrZXlDb2RlIiwiZ2V0VGFyZ2V0IiwiZmxleEFuaW1hdGUiLCJwYXVzZU9uQWN0aW9uIiwibW91c2V3aGVlbCIsInBhdXNlUGxheSIsInNsaWRlc2hvdyIsInBhdXNlSW52aXNpYmxlIiwicGF1c2VPbkhvdmVyIiwiaG92ZXIiLCJtYW51YWxQbGF5IiwicGF1c2UiLCJwbGF5IiwiaXNIaWRkZW4iLCJpbml0RGVsYXkiLCJhc05hdiIsInNtb290aEhlaWdodCIsImZsb29yIiwiY3VycmVudEl0ZW0iLCJlcSIsImFkZENsYXNzIiwiX3NsaWRlciIsIl9nZXN0dXJlIiwiY3VycmVudFRhcmdldCIsImFkZFBvaW50ZXIiLCJwb2ludGVySWQiLCJpbmRleCIsImhhc0NsYXNzIiwib2Zmc2V0IiwicmlnaHQiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNldHVwTWFudWFsIiwic2V0dXBQYWdpbmciLCJjb250cm9sTmF2U2NhZmZvbGQiLCJwYWdpbmdDb3VudCIsInRleHQiLCJ0aHVtYkNhcHRpb25zIiwiYXBwZW5kVG8iLCJzZXQiLCJkZWxlZ2F0ZSIsInR5cGUiLCJzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50IiwidXBkYXRlIiwicmVtb3ZlIiwiY2xvc2VzdCIsInByZXZUZXh0IiwibmV4dFRleHQiLCJyZW1vdmVBdHRyIiwiZmlsdGVyIiwicGxheVRleHQiLCJwYXVzZVRleHQiLCJzdG9wUHJvcGFnYXRpb24iLCJOdW1iZXIiLCJEYXRlIiwibGltaXQiLCJpdGVtVyIsIml0ZW1NYXJnaW4iLCJjbG9uZU9mZnNldCIsInRyYW5zbGF0aW9uWCIsInRyYW5zbGF0aW9uWSIsIngiLCJhYnMiLCJNU0dFU1RVUkVfRkxBR19JTkVSVElBIiwic3RvcCIsInNldFByb3BzIiwiY2FuQWR2YW5jZSIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaGVzIiwiaXMiLCJ3aWR0aCIsImNvbXB1dGVkVyIsInZpZXdwb3J0IiwiaGVpZ2h0IiwibmV3U2xpZGVzIiwiYW5pbWF0ZSIsImlubmVySGVpZ2h0IiwicGxheWluZyIsInVuaXF1ZUlEIiwidmlzUHJvcCIsImdldEhpZGRlblByb3AiLCJjZWlsIiwidmlzaWJsZSIsImJlZm9yZSIsImNzcyIsInpJbmRleCIsIndyYXB1cCIsImFuaW1hdGlvblNwZWVkIiwiZWFzaW5nIiwidW5iaW5kIiwiYWZ0ZXIiLCJhbmltYXRlU2xpZGVzIiwiYW5pbWF0ZWRTbGlkZXMiLCJtYXJnaW5MZWZ0IiwicG9zaXRpb24iLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJ3ZWJraXRUcmFuc2l0aW9uIiwiZmFkZUZpcnN0U2xpZGUiLCJvdmVyZmxvdyIsImNsb25lQ291bnQiLCJtYWtlQXJyYXkiLCJmaXJzdCIsImNsb25lIiwicHJlcGVuZCIsImNvbXB1dGVkTSIsImJveFBhZGRpbmciLCJvdXRlcldpZHRoIiwiaXRlbVQiLCJpdGVtTSIsIm1pblciLCJtYXhXIiwiYWRkU2xpZGUiLCJhZGRlZCIsInJlbW92ZVNsaWRlIiwicmVtb3ZlZCIsImJsdXIiLCJmb2N1cyIsImFsbG93T25lU2xpZGUiLCJmbiIsImZhZGVJbiIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsIm9yaWVudGF0aW9uIiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwibW92ZV9zbGlkZXJfb25faG92ZXIiLCJtb3ZlX3dpdGhfaGFuZGxlX29ubHkiLCJjbGlja190b19tb3ZlIiwid3JhcCIsImN3IiwiY2giLCJtYXgiLCJtaW4iLCJ0b3AiLCJfIiwidHJpZ2dlciIsInNsaWRlVG9nZ2xlIiwic2V0dXBfY29sbGFwc2libGVfc3VibWVudXMiLCIkbWVudSIsInRvcF9sZXZlbF9saW5rIiwiY29uc29sZSIsImxvZyIsInNpYmxpbmdzIiwicGFyZW50cyIsInBhcmVudCIsIm1vdXNlZW50ZXIiLCJmYWRlT3V0IiwiaGFzaCIsInNjcm9sbFRvcCIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJQSxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUEvQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUMsZ0JBQUo7QUFDQSxJQUFJQyxrQkFBSjs7QUFFQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUN4QixRQUFNLElBQUlDLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0g7O0FBQ0QsU0FBU0MsbUJBQVQsR0FBZ0M7QUFDNUIsUUFBTSxJQUFJRCxLQUFKLENBQVUsbUNBQVYsQ0FBTjtBQUNIOztBQUNBLGFBQVk7QUFDVCxNQUFJO0FBQ0EsUUFBSSxPQUFPRSxVQUFQLEtB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SUFBSSxHQUFHLEtBQUtBLElBQWhCLENBTG9CLENBT3BCO0FBQ0E7O0FBQ0F0VixPQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNlEsT0FBaEIsQ0FBd0I7QUFDdEIwRSxpQkFBUyxFQUFFdlYsQ0FBQyxDQUFDc1YsSUFBRCxDQUFELENBQVF4SCxNQUFSLEdBQWlCMEc7QUFETixPQUF4QixFQUVHLEdBRkgsRUFFUSxZQUFVO0FBRWhCO0FBQ0EvVixjQUFNLENBQUMrVyxRQUFQLENBQWdCRixJQUFoQixHQUF1QkEsSUFBdkI7QUFDRCxPQU5EO0FBT0QsS0FuQmdDLENBbUIvQjs7QUFDSCxHQXBCRDtBQXFCRCxDQXZCRCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICoqL1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9qcXVlcnkuZmxleHNsaWRlci1taW4nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9qcXVlcnkuZXZlbnQubW92ZS5taW4uanMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9qcXVlcnkudHdlbnR5dHdlbnR5Lm1pbi5qcyc7XHJcblxyXG4vKiogSW1wb3J0IEN1c3RvbSBmaWxlcyAqKi9cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWVudSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2Z1bGwtaW1hZ2UtZmxleHNsaWRlci1pdGVtJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2VydmljZXMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iZWZvcmUtYW5kLWFmdGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY29udGFjdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Ntb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uZXdzLXNsaWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2Zyb250LXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy80MDQnO1xyXG4vL2ltcG9ydCAnLi9jb21wb25lbnRzL2Rlc2lnbmVyLWxvZ2luJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvZHVjdC1zbGlkZXInOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy90cmlnZ2VyIGRvd25sb2FkcyBzdWIgbWVudVxyXG4gICAgJCgnLnByb2R1Y3QtNDA0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmRvd25sb2FkcycpLnJlbW92ZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzJykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvL2NoYW5nZSBwcm9kdWN0IG1lbnUgbGluayBvbiBtb2JpbGVcclxuXHJcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIGlmKHcgPCAxMjAwKSB7XHJcbiAgICAgICQoJy5wcm9kdWN0LTQwNCcpLmF0dHIoJ2hyZWYnLCAnL3Byb2R1Y3RzJyk7XHJcbiAgICB9IFxyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdGlmKCQoJy5iYS1pbWFnZS1jb21wYXJpc29uJykubGVuZ3RoIHx8ICQoJy5wb3N0LWJhLWltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGgpIHtcclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIi5iYV9pbWFnZXNfdG9fY29tcGFyZVwiKS50d2VudHl0d2VudHkoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7ICAgXHJcbiAgICBpZih3IDwgMTIwMCkge1xyXG4gICAgICAgICQoJy5jb250YWN0LXVzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmNvbnRhY3QtY29sLTEnKS50b2dnbGVDbGFzcygnc2hvdy1jb2x1bW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcuY29udGFjdF9fY3Jvc3MnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuY29udGFjdC1jb2wtMScpLnJlbW92ZUNsYXNzKCdzaG93LWNvbHVtbicpO1xyXG4gICAgICAgICQoJy5jb250YWN0LWNvbC0yJykucmVtb3ZlQ2xhc3MoJ3Nob3ctY29sdW1uJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLm9wcG9ydHVuaXRpZXMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuY29udGFjdC1jb2wtMicpLnRvZ2dsZUNsYXNzKCdzaG93LWNvbHVtbicpO1xyXG4gICAgfSk7ICAgIFxyXG4gICAgfVxyXG59KTsiLCJjb25zdCB2aWRlb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvLXRpdGxlJyk7XHJcbmNvbnN0IHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZGVvLWNvbnRhaW5lcicpO1xyXG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW1lLW9hay1sb2dvJyk7XHJcbmZ1bmN0aW9uIHZpZGVvSW50cm8oKSB7XHJcblxyXG4gICAgY29uc3QgaG9tZXBhZ2VUbCA9IGdzYXAudGltZWxpbmUoe1xyXG4gICAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246IDIsIGVhc2U6IFwicG93ZXIyLmluT3V0XCJ9XHJcbiAgICB9KTtcclxuICAgIGhvbWVwYWdlVGwuZnJvbVRvKHZpZGVvVGl0bGUsIHtvcGFjaXR5OiBcIjBcIn0sIHtvcGFjaXR5OiBcIjFcIn0pO1xyXG4gICAgaG9tZXBhZ2VUbC5mcm9tVG8odmlkZW9UaXRsZSwge29wYWNpdHk6IFwiMVwifSwge29wYWNpdHk6IFwiMFwifSk7XHJcbiAgICBob21lcGFnZVRsLnRvKGxvZ28sIHtvcGFjaXR5OiBcIjFcIn0pO1xyXG4gICAgaG9tZXBhZ2VUbC50byhsb2dvLCB7b3BhY2l0eTogXCIwXCJ9KTtcclxuICAgIGhvbWVwYWdlVGwuZnJvbVRvKHZpZGVvQ29udGFpbmVyLCB7b3BhY2l0eTpcIjFcIn0sIHtkdXJhdGlvbjogXCIxXCIsIG9wYWNpdHk6IFwiMFwifSk7XHJcbn1cclxuXHJcbnZpZGVvSW50cm8oKTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcblx0Ly8gc3RvcmUgdGhlIHNsaWRlciBpbiBhIGxvY2FsIHZhcmlhYmxlXHJcblx0dmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXHJcblx0XHRmbGV4c2xpZGVyID0geyB2YXJzOnt9IH07XHJcblxyXG5cdC8vIHRpbnkgaGVscGVyIGZ1bmN0aW9uIHRvIGFkZCBicmVha3BvaW50c1xyXG5cdGZ1bmN0aW9uIGdldEdyaWRTaXplKCkge1xyXG5cdFx0cmV0dXJuICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMCApID8gMSA6IDE7XHJcblx0fVxyXG5cclxuXHQkd2luZG93LnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdCAkKCcuZnVsbC1pbWFnZS1pdGVtLWZsZXhzbGlkZXItY29udGFpbmVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdCQodGhpcykuZmluZChcIi5mbGV4c2xpZGVyXCIpLmZsZXhzbGlkZXIoe1xyXG5cdFx0XHRcdGFuaW1hdGlvbjogXCJzbGlkZVwiLFxyXG5cdFx0XHRcdHNsaWRlc2hvd1NwZWVkOiAxMjAwMCxcclxuXHRcdFx0XHRhbmltYXRpb25Mb29wOiB0cnVlLFxyXG5cdFx0XHRcdGNvbnRyb2xOYXY6IGZhbHNlLFxyXG5cdFx0XHRcdGN1c3RvbURpcmVjdGlvbk5hdjogJCh0aGlzKS5maW5kKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIiksXHJcblx0XHRcdFx0bWluSXRlbXM6IGdldEdyaWRTaXplKCksIC8vIHVzZSBmdW5jdGlvbiB0byBwdWxsIGluIGluaXRpYWwgdmFsdWVcclxuXHRcdFx0XHRtYXhJdGVtczogZ2V0R3JpZFNpemUoKSwgLy8gdXNlIGZ1bmN0aW9uIHRvIHB1bGwgaW4gaW5pdGlhbCB2YWx1ZVxyXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbihzbGlkZXIpIHtcclxuXHRcdFx0XHRcdGZsZXhzbGlkZXIgPSBzbGlkZXI7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHQvLyBjaGVjayBncmlkIHNpemUgb24gcmVzaXplIGV2ZW50XHJcblx0JHdpbmRvdy5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgZ3JpZFNpemUgPSBnZXRHcmlkU2l6ZSgpO1xyXG5cdFx0ZmxleHNsaWRlci52YXJzLm1pbkl0ZW1zID0gZ3JpZFNpemU7XHJcblx0XHRmbGV4c2xpZGVyLnZhcnMubWF4SXRlbXMgPSBncmlkU2l6ZTtcclxuXHR9KTtcdFxyXG59KCkpOyIsIiFmdW5jdGlvbihlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm51bGwhPT1tb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWU6ZSgpfShmdW5jdGlvbigpe3ZhciBpPU9iamVjdC5hc3NpZ258fHdpbmRvdy5qUXVlcnkmJmpRdWVyeS5leHRlbmQscD04LGE9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSx0KXtyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKCl9LDI1KX07ZnVuY3Rpb24gZShlLHQpe3Q9dHx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBuLmluaXRDdXN0b21FdmVudChlLHQuYnViYmxlcyx0LmNhbmNlbGFibGUsdC5kZXRhaWwpLG59XCJmdW5jdGlvblwiIT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50JiYoZS5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSx3aW5kb3cuQ3VzdG9tRXZlbnQ9ZSk7dmFyIG89e3RleHRhcmVhOiEwLGlucHV0OiEwLHNlbGVjdDohMCxidXR0b246ITB9LGM9e21vdmU6XCJtb3VzZW1vdmVcIixjYW5jZWw6XCJtb3VzZXVwIGRyYWdzdGFydFwiLGVuZDpcIm1vdXNldXBcIn0sdT17bW92ZTpcInRvdWNobW92ZVwiLGNhbmNlbDpcInRvdWNoZW5kXCIsZW5kOlwidG91Y2hlbmRcIn0scj0vXFxzKy8sZD17YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSx0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbD9TeW1ib2woXCJldmVudHNcIik6e307ZnVuY3Rpb24gbShlKXtyZXR1cm4gZVt0XXx8KGVbdF09e30pfWZ1bmN0aW9uIHYoZSx0LG4sbyl7dD10LnNwbGl0KHIpO3ZhciBpLGE9bShlKSxjPXQubGVuZ3RoO2Z1bmN0aW9uIHUoZSl7bihlLG8pfWZvcig7Yy0tOykoYVtpPXRbY11dfHwoYVtpXT1bXSkpLnB1c2goW24sdV0pLGUuYWRkRXZlbnRMaXN0ZW5lcihpLHUpfWZ1bmN0aW9uIGYoZSx0LG4pe3Q9dC5zcGxpdChyKTt2YXIgbyxpLGEsYz1tKGUpLHU9dC5sZW5ndGg7aWYoYylmb3IoO3UtLTspaWYoaT1jW289dFt1XV0pZm9yKGE9aS5sZW5ndGg7YS0tOylpW2FdWzBdPT09biYmKGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLGlbYV1bMV0pLGkuc3BsaWNlKGEsMSkpfWZ1bmN0aW9uIGcoZSx0LG4pe3ZhciBvPW5ldyBDdXN0b21FdmVudCh0LGQpO24mJmkobyxuKSxlLmRpc3BhdGNoRXZlbnQobyl9ZnVuY3Rpb24gcyhlKXt2YXIgbj1lLG89ITEsaT0hMTtmdW5jdGlvbiB0KGUpe28/KG4oKSxhKHQpLG89IShpPSEwKSk6aT0hMX10aGlzLmtpY2s9ZnVuY3Rpb24oZSl7bz0hMCxpfHx0KCl9LHRoaXMuZW5kPWZ1bmN0aW9uKGUpe3ZhciB0PW47ZSYmKGk/KG49bz9mdW5jdGlvbigpe3QoKSxlKCl9OmUsbz0hMCk6ZSgpKX19ZnVuY3Rpb24gaCgpe31mdW5jdGlvbiBsKGUpe2UucHJldmVudERlZmF1bHQoKX1mdW5jdGlvbiBYKGUsdCl7dmFyIG4sbztpZihlLmlkZW50aWZpZWRUb3VjaClyZXR1cm4gZS5pZGVudGlmaWVkVG91Y2godCk7Zm9yKG49LTEsbz1lLmxlbmd0aDsrK248bzspaWYoZVtuXS5pZGVudGlmaWVyPT09dClyZXR1cm4gZVtuXX1mdW5jdGlvbiBZKGUsdCl7dmFyIG49WChlLmNoYW5nZWRUb3VjaGVzLHQuaWRlbnRpZmllcik7aWYobiYmKG4ucGFnZVghPT10LnBhZ2VYfHxuLnBhZ2VZIT09dC5wYWdlWSkpcmV0dXJuIG59ZnVuY3Rpb24gbihlLHQpe1QoZSx0LGUsdyl9ZnVuY3Rpb24geShlLHQpe3coKX1mdW5jdGlvbiB3KCl7Zihkb2N1bWVudCxjLm1vdmUsbiksZihkb2N1bWVudCxjLmNhbmNlbCx5KX1mdW5jdGlvbiBiKGUpe2YoZG9jdW1lbnQsdS5tb3ZlLGUudG91Y2htb3ZlKSxmKGRvY3VtZW50LHUuY2FuY2VsLGUudG91Y2hlbmQpfWZ1bmN0aW9uIFQoZSx0LG4sbyl7dmFyIGksYSxjLHUscixkLG0sdixmLHM9bi5wYWdlWC10LnBhZ2VYLGw9bi5wYWdlWS10LnBhZ2VZO3MqcytsKmw8cCpwfHwoYT10LGM9bix1PXMscj1sLGQ9byxtPShpPWUpLnRhcmdldFRvdWNoZXMsdj1pLnRpbWVTdGFtcC1hLnRpbWVTdGFtcCxmPXthbHRLZXk6aS5hbHRLZXksY3RybEtleTppLmN0cmxLZXksc2hpZnRLZXk6aS5zaGlmdEtleSxzdGFydFg6YS5wYWdlWCxzdGFydFk6YS5wYWdlWSxkaXN0WDp1LGRpc3RZOnIsZGVsdGFYOnUsZGVsdGFZOnIscGFnZVg6Yy5wYWdlWCxwYWdlWTpjLnBhZ2VZLHZlbG9jaXR5WDp1L3YsdmVsb2NpdHlZOnIvdixpZGVudGlmaWVyOmEuaWRlbnRpZmllcix0YXJnZXRUb3VjaGVzOm0sZmluZ2VyOm0/bS5sZW5ndGg6MSxlbmFibGVNb3ZlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlRW5hYmxlZD0hMCx0aGlzLmVuYWJsZU1vdmU9aCxpLnByZXZlbnREZWZhdWx0KCl9fSxnKGEudGFyZ2V0LFwibW92ZXN0YXJ0XCIsZiksZChhKSl9ZnVuY3Rpb24gRShlLHQpe3ZhciBuPXQudGltZXI7dC50b3VjaD1lLHQudGltZVN0YW1wPWUudGltZVN0YW1wLG4ua2ljaygpfWZ1bmN0aW9uIFMoZSx0KXt2YXIgbj10LnRhcmdldCxvPXQuZXZlbnQsaT10LnRpbWVyO2YoZG9jdW1lbnQsYy5tb3ZlLEUpLGYoZG9jdW1lbnQsYy5lbmQsUyksSyhuLG8saSxmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtmKG4sXCJjbGlja1wiLGwpfSwwKX0pfWZ1bmN0aW9uIGsoZSx0KXt2YXIgbixvPXQudGFyZ2V0LGk9dC5ldmVudCxhPXQudGltZXI7WChlLmNoYW5nZWRUb3VjaGVzLGkuaWRlbnRpZmllcikmJihuPXQsZihkb2N1bWVudCx1Lm1vdmUsbi5hY3RpdmVUb3VjaG1vdmUpLGYoZG9jdW1lbnQsdS5lbmQsbi5hY3RpdmVUb3VjaGVuZCksSyhvLGksYSkpfWZ1bmN0aW9uIEsoZSx0LG4sbyl7bi5lbmQoZnVuY3Rpb24oKXtyZXR1cm4gZyhlLFwibW92ZWVuZFwiLHQpLG8mJm8oKX0pfWlmKHYoZG9jdW1lbnQsXCJtb3VzZWRvd25cIixmdW5jdGlvbihlKXt2YXIgdDsxIT09KHQ9ZSkud2hpY2h8fHQuY3RybEtleXx8dC5hbHRLZXl8fG9bZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXXx8KHYoZG9jdW1lbnQsYy5tb3ZlLG4sZSksdihkb2N1bWVudCxjLmNhbmNlbCx5LGUpKX0pLHYoZG9jdW1lbnQsXCJ0b3VjaHN0YXJ0XCIsZnVuY3Rpb24oZSl7aWYoIW9bZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXSl7dmFyIHQ9ZS5jaGFuZ2VkVG91Y2hlc1swXSxuPXt0YXJnZXQ6dC50YXJnZXQscGFnZVg6dC5wYWdlWCxwYWdlWTp0LnBhZ2VZLGlkZW50aWZpZXI6dC5pZGVudGlmaWVyLHRvdWNobW92ZTpmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlLHQpe3ZhciBuPVkoZSx0KTtpZighbilyZXR1cm47VChlLHQsbixiKX0oZSx0KX0sdG91Y2hlbmQ6ZnVuY3Rpb24oZSx0KXshZnVuY3Rpb24oZSx0KXtpZighWChlLmNoYW5nZWRUb3VjaGVzLHQuaWRlbnRpZmllcikpcmV0dXJuO2IodCl9KGUsdCl9fTt2KGRvY3VtZW50LHUubW92ZSxuLnRvdWNobW92ZSxuKSx2KGRvY3VtZW50LHUuY2FuY2VsLG4udG91Y2hlbmQsbil9fSksdihkb2N1bWVudCxcIm1vdmVzdGFydFwiLGZ1bmN0aW9uKGUpe2lmKCFlLmRlZmF1bHRQcmV2ZW50ZWQmJmUubW92ZUVuYWJsZWQpe3ZhciB0PXtzdGFydFg6ZS5zdGFydFgsc3RhcnRZOmUuc3RhcnRZLHBhZ2VYOmUucGFnZVgscGFnZVk6ZS5wYWdlWSxkaXN0WDplLmRpc3RYLGRpc3RZOmUuZGlzdFksZGVsdGFYOmUuZGVsdGFYLGRlbHRhWTplLmRlbHRhWSx2ZWxvY2l0eVg6ZS52ZWxvY2l0eVgsdmVsb2NpdHlZOmUudmVsb2NpdHlZLGlkZW50aWZpZXI6ZS5pZGVudGlmaWVyLHRhcmdldFRvdWNoZXM6ZS50YXJnZXRUb3VjaGVzLGZpbmdlcjplLmZpbmdlcn0sbj17dGFyZ2V0OmUudGFyZ2V0LGV2ZW50OnQsdGltZXI6bmV3IHMoZnVuY3Rpb24oZSl7KGZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1uLWUudGltZVN0YW1wO2UuZGlzdFg9dC5wYWdlWC1lLnN0YXJ0WCxlLmRpc3RZPXQucGFnZVktZS5zdGFydFksZS5kZWx0YVg9dC5wYWdlWC1lLnBhZ2VYLGUuZGVsdGFZPXQucGFnZVktZS5wYWdlWSxlLnZlbG9jaXR5WD0uMyplLnZlbG9jaXR5WCsuNyplLmRlbHRhWC9vLGUudmVsb2NpdHlZPS4zKmUudmVsb2NpdHlZKy43KmUuZGVsdGFZL28sZS5wYWdlWD10LnBhZ2VYLGUucGFnZVk9dC5wYWdlWX0pKHQsbi50b3VjaCxuLnRpbWVTdGFtcCksZyhuLnRhcmdldCxcIm1vdmVcIix0KX0pLHRvdWNoOnZvaWQgMCx0aW1lU3RhbXA6ZS50aW1lU3RhbXB9O3ZvaWQgMD09PWUuaWRlbnRpZmllcj8odihlLnRhcmdldCxcImNsaWNrXCIsbCksdihkb2N1bWVudCxjLm1vdmUsRSxuKSx2KGRvY3VtZW50LGMuZW5kLFMsbikpOihuLmFjdGl2ZVRvdWNobW92ZT1mdW5jdGlvbihlLHQpe3ZhciBuLG8saSxhLGM7bj1lLGk9KG89dCkuZXZlbnQsYT1vLnRpbWVyLChjPVkobixpKSkmJihuLnByZXZlbnREZWZhdWx0KCksaS50YXJnZXRUb3VjaGVzPW4udGFyZ2V0VG91Y2hlcyxvLnRvdWNoPWMsby50aW1lU3RhbXA9bi50aW1lU3RhbXAsYS5raWNrKCkpfSxuLmFjdGl2ZVRvdWNoZW5kPWZ1bmN0aW9uKGUsdCl7ayhlLHQpfSx2KGRvY3VtZW50LHUubW92ZSxuLmFjdGl2ZVRvdWNobW92ZSxuKSx2KGRvY3VtZW50LHUuZW5kLG4uYWN0aXZlVG91Y2hlbmQsbikpfX0pLHdpbmRvdy5qUXVlcnkpe3ZhciBqPVwic3RhcnRYIHN0YXJ0WSBwYWdlWCBwYWdlWSBkaXN0WCBkaXN0WSBkZWx0YVggZGVsdGFZIHZlbG9jaXR5WCB2ZWxvY2l0eVlcIi5zcGxpdChcIiBcIik7alF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZXN0YXJ0PXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixDKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIsQyksITF9LGFkZDpBfSxqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixRKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIsUSksITF9LGFkZDpBfSxqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlZW5kPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixxKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIscSksITF9LGFkZDpBfX1mdW5jdGlvbiBDKGUpe2UuZW5hYmxlTW92ZSgpfWZ1bmN0aW9uIFEoZSl7ZS5lbmFibGVNb3ZlKCl9ZnVuY3Rpb24gcShlKXtlLmVuYWJsZU1vdmUoKX1mdW5jdGlvbiBBKGUpe3ZhciBvPWUuaGFuZGxlcjtlLmhhbmRsZXI9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49ai5sZW5ndGg7bi0tOyllW3Q9altuXV09ZS5vcmlnaW5hbEV2ZW50W3RdO28uYXBwbHkodGhpcyxhcmd1bWVudHMpfX19KTsiLCIvKlxyXG4gKiBqUXVlcnkgRmxleFNsaWRlciB2Mi43LjJcclxuICogQ29weXJpZ2h0IDIwMTIgV29vVGhlbWVzXHJcbiAqIENvbnRyaWJ1dGluZyBBdXRob3I6IFR5bGVyIFNtaXRoXHJcbiAqLyFmdW5jdGlvbigkKXt2YXIgZT0hMDskLmZsZXhzbGlkZXI9ZnVuY3Rpb24odCxhKXt2YXIgbj0kKHQpO3ZvaWQgMD09PWEucnRsJiZcInJ0bFwiPT0kKFwiaHRtbFwiKS5hdHRyKFwiZGlyXCIpJiYoYS5ydGw9ITApLG4udmFycz0kLmV4dGVuZCh7fSwkLmZsZXhzbGlkZXIuZGVmYXVsdHMsYSk7dmFyIGk9bi52YXJzLm5hbWVzcGFjZSxyPXdpbmRvdy5uYXZpZ2F0b3ImJndpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCYmd2luZG93Lk1TR2VzdHVyZSxzPShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHxyfHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKSYmbi52YXJzLnRvdWNoLG89XCJjbGljayB0b3VjaGVuZCBNU1BvaW50ZXJVcCBrZXl1cFwiLGw9XCJcIixjLGQ9XCJ2ZXJ0aWNhbFwiPT09bi52YXJzLmRpcmVjdGlvbix1PW4udmFycy5yZXZlcnNlLHY9bi52YXJzLml0ZW1XaWR0aD4wLHA9XCJmYWRlXCI9PT1uLnZhcnMuYW5pbWF0aW9uLG09XCJcIiE9PW4udmFycy5hc05hdkZvcixmPXt9OyQuZGF0YSh0LFwiZmxleHNsaWRlclwiLG4pLGY9e2luaXQ6ZnVuY3Rpb24oKXtuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1wYXJzZUludChuLnZhcnMuc3RhcnRBdD9uLnZhcnMuc3RhcnRBdDowLDEwKSxpc05hTihuLmN1cnJlbnRTbGlkZSkmJihuLmN1cnJlbnRTbGlkZT0wKSxuLmFuaW1hdGluZ1RvPW4uY3VycmVudFNsaWRlLG4uYXRFbmQ9MD09PW4uY3VycmVudFNsaWRlfHxuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCxuLmNvbnRhaW5lclNlbGVjdG9yPW4udmFycy5zZWxlY3Rvci5zdWJzdHIoMCxuLnZhcnMuc2VsZWN0b3Iuc2VhcmNoKFwiIFwiKSksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3Isbiksbi5jb250YWluZXI9JChuLmNvbnRhaW5lclNlbGVjdG9yLG4pLG4uY291bnQ9bi5zbGlkZXMubGVuZ3RoLG4uc3luY0V4aXN0cz0kKG4udmFycy5zeW5jKS5sZW5ndGg+MCxcInNsaWRlXCI9PT1uLnZhcnMuYW5pbWF0aW9uJiYobi52YXJzLmFuaW1hdGlvbj1cInN3aW5nXCIpLG4ucHJvcD1kP1widG9wXCI6bi52YXJzLnJ0bD9cIm1hcmdpblJpZ2h0XCI6XCJtYXJnaW5MZWZ0XCIsbi5hcmdzPXt9LG4ubWFudWFsUGF1c2U9ITEsbi5zdG9wcGVkPSExLG4uc3RhcnRlZD0hMSxuLnN0YXJ0VGltZW91dD1udWxsLG4udHJhbnNpdGlvbnM9IW4udmFycy52aWRlbyYmIXAmJm4udmFycy51c2VDU1MmJmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0PVtcInBlcnNwZWN0aXZlUHJvcGVydHlcIixcIldlYmtpdFBlcnNwZWN0aXZlXCIsXCJNb3pQZXJzcGVjdGl2ZVwiLFwiT1BlcnNwZWN0aXZlXCIsXCJtc1BlcnNwZWN0aXZlXCJdO2Zvcih2YXIgYSBpbiB0KWlmKHZvaWQgMCE9PWUuc3R5bGVbdFthXV0pcmV0dXJuIG4ucGZ4PXRbYV0ucmVwbGFjZShcIlBlcnNwZWN0aXZlXCIsXCJcIikudG9Mb3dlckNhc2UoKSxuLnByb3A9XCItXCIrbi5wZngrXCItdHJhbnNmb3JtXCIsITA7cmV0dXJuITF9KCksbi5pc0ZpcmVmb3g9bmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJmaXJlZm94XCIpPi0xLG4uZW5zdXJlQW5pbWF0aW9uRW5kPVwiXCIsXCJcIiE9PW4udmFycy5jb250cm9sc0NvbnRhaW5lciYmKG4uY29udHJvbHNDb250YWluZXI9JChuLnZhcnMuY29udHJvbHNDb250YWluZXIpLmxlbmd0aD4wJiYkKG4udmFycy5jb250cm9sc0NvbnRhaW5lcikpLFwiXCIhPT1uLnZhcnMubWFudWFsQ29udHJvbHMmJihuLm1hbnVhbENvbnRyb2xzPSQobi52YXJzLm1hbnVhbENvbnRyb2xzKS5sZW5ndGg+MCYmJChuLnZhcnMubWFudWFsQ29udHJvbHMpKSxcIlwiIT09bi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdiYmKG4uY3VzdG9tRGlyZWN0aW9uTmF2PTI9PT0kKG4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYpLmxlbmd0aCYmJChuLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2KSksbi52YXJzLnJhbmRvbWl6ZSYmKG4uc2xpZGVzLnNvcnQoZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKS0uNX0pLG4uY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKG4uc2xpZGVzKSksbi5kb01hdGgoKSxuLnNldHVwKFwiaW5pdFwiKSxuLnZhcnMuY29udHJvbE5hdiYmZi5jb250cm9sTmF2LnNldHVwKCksbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYuc2V0dXAoKSxuLnZhcnMua2V5Ym9hcmQmJigxPT09JChuLmNvbnRhaW5lclNlbGVjdG9yKS5sZW5ndGh8fG4udmFycy5tdWx0aXBsZUtleWJvYXJkKSYmJChkb2N1bWVudCkuYmluZChcImtleXVwXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5rZXlDb2RlO2lmKCFuLmFuaW1hdGluZyYmKDM5PT09dHx8Mzc9PT10KSl7dmFyIGE9bi52YXJzLnJ0bD8zNz09PXQ/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOjM5PT09dCYmbi5nZXRUYXJnZXQoXCJwcmV2XCIpOjM5PT09dD9uLmdldFRhcmdldChcIm5leHRcIik6Mzc9PT10JiZuLmdldFRhcmdldChcInByZXZcIik7bi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKX19KSxuLnZhcnMubW91c2V3aGVlbCYmbi5iaW5kKFwibW91c2V3aGVlbFwiLGZ1bmN0aW9uKGUsdCxhLGkpe2UucHJldmVudERlZmF1bHQoKTt2YXIgcj10PDA/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmZsZXhBbmltYXRlKHIsbi52YXJzLnBhdXNlT25BY3Rpb24pfSksbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkuc2V0dXAoKSxuLnZhcnMuc2xpZGVzaG93JiZuLnZhcnMucGF1c2VJbnZpc2libGUmJmYucGF1c2VJbnZpc2libGUuaW5pdCgpLG4udmFycy5zbGlkZXNob3cmJihuLnZhcnMucGF1c2VPbkhvdmVyJiZuLmhvdmVyKGZ1bmN0aW9uKCl7bi5tYW51YWxQbGF5fHxuLm1hbnVhbFBhdXNlfHxuLnBhdXNlKCl9LGZ1bmN0aW9uKCl7bi5tYW51YWxQYXVzZXx8bi5tYW51YWxQbGF5fHxuLnN0b3BwZWR8fG4ucGxheSgpfSksbi52YXJzLnBhdXNlSW52aXNpYmxlJiZmLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCl8fChuLnZhcnMuaW5pdERlbGF5PjA/bi5zdGFydFRpbWVvdXQ9c2V0VGltZW91dChuLnBsYXksbi52YXJzLmluaXREZWxheSk6bi5wbGF5KCkpKSxtJiZmLmFzTmF2LnNldHVwKCkscyYmbi52YXJzLnRvdWNoJiZmLnRvdWNoKCksKCFwfHxwJiZuLnZhcnMuc21vb3RoSGVpZ2h0KSYmJCh3aW5kb3cpLmJpbmQoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UgZm9jdXNcIixmLnJlc2l6ZSksbi5maW5kKFwiaW1nXCIpLmF0dHIoXCJkcmFnZ2FibGVcIixcImZhbHNlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLnZhcnMuc3RhcnQobil9LDIwMCl9LGFzTmF2OntzZXR1cDpmdW5jdGlvbigpe24uYXNOYXY9ITAsbi5hbmltYXRpbmdUbz1NYXRoLmZsb29yKG4uY3VycmVudFNsaWRlL24ubW92ZSksbi5jdXJyZW50SXRlbT1uLmN1cnJlbnRTbGlkZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKG4uY3VycmVudEl0ZW0pLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikscj8odC5fc2xpZGVyPW4sbi5zbGlkZXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLGUuX2dlc3R1cmUudGFyZ2V0PWUsZS5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUmJmUuY3VycmVudFRhcmdldC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKX0sITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZVRhcFwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGE9dC5pbmRleCgpOyQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKS5hbmltYXRpbmd8fHQuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fChuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGE/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwLCEwKSl9KX0pKTpuLnNsaWRlcy5vbihvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGE9dC5pbmRleCgpLHI7cj1uLnZhcnMucnRsPy0xKih0Lm9mZnNldCgpLnJpZ2h0LSQobikuc2Nyb2xsTGVmdCgpKTp0Lm9mZnNldCgpLmxlZnQtJChuKS5zY3JvbGxMZWZ0KCkscjw9MCYmdC5oYXNDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpP24uZmxleEFuaW1hdGUobi5nZXRUYXJnZXQoXCJwcmV2XCIpLCEwKTokKG4udmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIikuYW5pbWF0aW5nfHx0Lmhhc0NsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIil8fChuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGE/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwLCEwKSl9KX19LGNvbnRyb2xOYXY6e3NldHVwOmZ1bmN0aW9uKCl7bi5tYW51YWxDb250cm9scz9mLmNvbnRyb2xOYXYuc2V0dXBNYW51YWwoKTpmLmNvbnRyb2xOYXYuc2V0dXBQYWdpbmcoKX0sc2V0dXBQYWdpbmc6ZnVuY3Rpb24oKXt2YXIgZT1cInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2P1wiY29udHJvbC10aHVtYnNcIjpcImNvbnRyb2wtcGFnaW5nXCIsdD0xLGEscjtpZihuLmNvbnRyb2xOYXZTY2FmZm9sZD0kKCc8b2wgY2xhc3M9XCInK2krXCJjb250cm9sLW5hdiBcIitpK2UrJ1wiPjwvb2w+Jyksbi5wYWdpbmdDb3VudD4xKWZvcih2YXIgcz0wO3M8bi5wYWdpbmdDb3VudDtzKyspe2lmKHI9bi5zbGlkZXMuZXEocyksdm9pZCAwPT09ci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikmJnIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIsXCJcIiksYT0kKFwiPGE+PC9hPlwiKS5hdHRyKFwiaHJlZlwiLFwiI1wiKS50ZXh0KHQpLFwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXYmJihhPSQoXCI8aW1nLz5cIikuYXR0cihcInNyY1wiLHIuYXR0cihcImRhdGEtdGh1bWJcIikpKSxcIlwiIT09ci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikmJmEuYXR0cihcImFsdFwiLHIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpKSxcInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2JiYhMD09PW4udmFycy50aHVtYkNhcHRpb25zKXt2YXIgYz1yLmF0dHIoXCJkYXRhLXRodW1iY2FwdGlvblwiKTtpZihcIlwiIT09YyYmdm9pZCAwIT09Yyl7dmFyIGQ9JChcIjxzcGFuPjwvc3Bhbj5cIikuYWRkQ2xhc3MoaStcImNhcHRpb25cIikudGV4dChjKTthLmFwcGVuZChkKX19dmFyIHU9JChcIjxsaT5cIik7YS5hcHBlbmRUbyh1KSx1LmFwcGVuZChcIjwvbGk+XCIpLG4uY29udHJvbE5hdlNjYWZmb2xkLmFwcGVuZCh1KSx0Kyt9bi5jb250cm9sc0NvbnRhaW5lcj8kKG4uY29udHJvbHNDb250YWluZXIpLmFwcGVuZChuLmNvbnRyb2xOYXZTY2FmZm9sZCk6bi5hcHBlbmQobi5jb250cm9sTmF2U2NhZmZvbGQpLGYuY29udHJvbE5hdi5zZXQoKSxmLmNvbnRyb2xOYXYuYWN0aXZlKCksbi5jb250cm9sTmF2U2NhZmZvbGQuZGVsZWdhdGUoXCJhLCBpbWdcIixvLGZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxcIlwiPT09bHx8bD09PWUudHlwZSl7dmFyIHQ9JCh0aGlzKSxhPW4uY29udHJvbE5hdi5pbmRleCh0KTt0Lmhhc0NsYXNzKGkrXCJhY3RpdmVcIil8fChuLmRpcmVjdGlvbj1hPm4uY3VycmVudFNsaWRlP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbikpfVwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHNldHVwTWFudWFsOmZ1bmN0aW9uKCl7bi5jb250cm9sTmF2PW4ubWFudWFsQ29udHJvbHMsZi5jb250cm9sTmF2LmFjdGl2ZSgpLG4uY29udHJvbE5hdi5iaW5kKG8sZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCI9PT1sfHxsPT09ZS50eXBlKXt2YXIgdD0kKHRoaXMpLGE9bi5jb250cm9sTmF2LmluZGV4KHQpO3QuaGFzQ2xhc3MoaStcImFjdGl2ZVwiKXx8KGE+bi5jdXJyZW50U2xpZGU/bi5kaXJlY3Rpb249XCJuZXh0XCI6bi5kaXJlY3Rpb249XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKSl9XCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sc2V0OmZ1bmN0aW9uKCl7dmFyIGU9XCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdj9cImltZ1wiOlwiYVwiO24uY29udHJvbE5hdj0kKFwiLlwiK2krXCJjb250cm9sLW5hdiBsaSBcIitlLG4uY29udHJvbHNDb250YWluZXI/bi5jb250cm9sc0NvbnRhaW5lcjpuKX0sYWN0aXZlOmZ1bmN0aW9uKCl7bi5jb250cm9sTmF2LnJlbW92ZUNsYXNzKGkrXCJhY3RpdmVcIikuZXEobi5hbmltYXRpbmdUbykuYWRkQ2xhc3MoaStcImFjdGl2ZVwiKX0sdXBkYXRlOmZ1bmN0aW9uKGUsdCl7bi5wYWdpbmdDb3VudD4xJiZcImFkZFwiPT09ZT9uLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQoJCgnPGxpPjxhIGhyZWY9XCIjXCI+JytuLmNvdW50K1wiPC9hPjwvbGk+XCIpKToxPT09bi5wYWdpbmdDb3VudD9uLmNvbnRyb2xOYXZTY2FmZm9sZC5maW5kKFwibGlcIikucmVtb3ZlKCk6bi5jb250cm9sTmF2LmVxKHQpLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmUoKSxmLmNvbnRyb2xOYXYuc2V0KCksbi5wYWdpbmdDb3VudD4xJiZuLnBhZ2luZ0NvdW50IT09bi5jb250cm9sTmF2Lmxlbmd0aD9uLnVwZGF0ZSh0LGUpOmYuY29udHJvbE5hdi5hY3RpdmUoKX19LGRpcmVjdGlvbk5hdjp7c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT0kKCc8dWwgY2xhc3M9XCInK2krJ2RpcmVjdGlvbi1uYXZcIj48bGkgY2xhc3M9XCInK2krJ25hdi1wcmV2XCI+PGEgY2xhc3M9XCInK2krJ3ByZXZcIiBocmVmPVwiI1wiPicrbi52YXJzLnByZXZUZXh0Kyc8L2E+PC9saT48bGkgY2xhc3M9XCInK2krJ25hdi1uZXh0XCI+PGEgY2xhc3M9XCInK2krJ25leHRcIiBocmVmPVwiI1wiPicrbi52YXJzLm5leHRUZXh0K1wiPC9hPjwvbGk+PC91bD5cIik7bi5jdXN0b21EaXJlY3Rpb25OYXY/bi5kaXJlY3Rpb25OYXY9bi5jdXN0b21EaXJlY3Rpb25OYXY6bi5jb250cm9sc0NvbnRhaW5lcj8oJChuLmNvbnRyb2xzQ29udGFpbmVyKS5hcHBlbmQoZSksbi5kaXJlY3Rpb25OYXY9JChcIi5cIitpK1wiZGlyZWN0aW9uLW5hdiBsaSBhXCIsbi5jb250cm9sc0NvbnRhaW5lcikpOihuLmFwcGVuZChlKSxuLmRpcmVjdGlvbk5hdj0kKFwiLlwiK2krXCJkaXJlY3Rpb24tbmF2IGxpIGFcIixuKSksZi5kaXJlY3Rpb25OYXYudXBkYXRlKCksbi5kaXJlY3Rpb25OYXYuYmluZChvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdDtcIlwiIT09bCYmbCE9PWUudHlwZXx8KHQ9JCh0aGlzKS5oYXNDbGFzcyhpK1wibmV4dFwiKT9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpLG4uZmxleEFuaW1hdGUodCxuLnZhcnMucGF1c2VPbkFjdGlvbikpLFwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHVwZGF0ZTpmdW5jdGlvbigpe3ZhciBlPWkrXCJkaXNhYmxlZFwiOzE9PT1uLnBhZ2luZ0NvdW50P24uZGlyZWN0aW9uTmF2LmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi52YXJzLmFuaW1hdGlvbkxvb3A/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpOjA9PT1uLmFuaW1hdGluZ1RvP24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLmZpbHRlcihcIi5cIitpK1wicHJldlwiKS5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkuZmlsdGVyKFwiLlwiK2krXCJuZXh0XCIpLmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpfX0scGF1c2VQbGF5OntzZXR1cDpmdW5jdGlvbigpe3ZhciBlPSQoJzxkaXYgY2xhc3M9XCInK2krJ3BhdXNlcGxheVwiPjxhIGhyZWY9XCIjXCI+PC9hPjwvZGl2PicpO24uY29udHJvbHNDb250YWluZXI/KG4uY29udHJvbHNDb250YWluZXIuYXBwZW5kKGUpLG4ucGF1c2VQbGF5PSQoXCIuXCIraStcInBhdXNlcGxheSBhXCIsbi5jb250cm9sc0NvbnRhaW5lcikpOihuLmFwcGVuZChlKSxuLnBhdXNlUGxheT0kKFwiLlwiK2krXCJwYXVzZXBsYXkgYVwiLG4pKSxmLnBhdXNlUGxheS51cGRhdGUobi52YXJzLnNsaWRlc2hvdz9pK1wicGF1c2VcIjppK1wicGxheVwiKSxuLnBhdXNlUGxheS5iaW5kKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCIhPT1sJiZsIT09ZS50eXBlfHwoJCh0aGlzKS5oYXNDbGFzcyhpK1wicGF1c2VcIik/KG4ubWFudWFsUGF1c2U9ITAsbi5tYW51YWxQbGF5PSExLG4ucGF1c2UoKSk6KG4ubWFudWFsUGF1c2U9ITEsbi5tYW51YWxQbGF5PSEwLG4ucGxheSgpKSksXCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sdXBkYXRlOmZ1bmN0aW9uKGUpe1wicGxheVwiPT09ZT9uLnBhdXNlUGxheS5yZW1vdmVDbGFzcyhpK1wicGF1c2VcIikuYWRkQ2xhc3MoaStcInBsYXlcIikuaHRtbChuLnZhcnMucGxheVRleHQpOm4ucGF1c2VQbGF5LnJlbW92ZUNsYXNzKGkrXCJwbGF5XCIpLmFkZENsYXNzKGkrXCJwYXVzZVwiKS5odG1sKG4udmFycy5wYXVzZVRleHQpfX0sdG91Y2g6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksbi5hbmltYXRpbmc/ZS5wcmV2ZW50RGVmYXVsdCgpOihuLnBhdXNlKCksdC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKSx3PTAsYz1kP24uaDpuLncsZj1OdW1iZXIobmV3IERhdGUpLGw9diYmdSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnYmJnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86diYmbi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/bi5saW1pdDp2PyhuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5jdXJyZW50U2xpZGU6dT8obi5sYXN0LW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmM6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmMpfWZ1bmN0aW9uIGEoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYT1lLnRhcmdldC5fc2xpZGVyO2lmKGEpe3ZhciBuPS1lLnRyYW5zbGF0aW9uWCxpPS1lLnRyYW5zbGF0aW9uWTtpZih3Kz1kP2k6bixtPShhLnZhcnMucnRsPy0xOjEpKncseD1kP01hdGguYWJzKHcpPE1hdGguYWJzKC1uKTpNYXRoLmFicyh3KTxNYXRoLmFicygtaSksZS5kZXRhaWw9PT1lLk1TR0VTVFVSRV9GTEFHX0lORVJUSUEpcmV0dXJuIHZvaWQgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCl7dC5fZ2VzdHVyZS5zdG9wKCl9KTsoIXh8fE51bWJlcihuZXcgRGF0ZSktZj41MDApJiYoZS5wcmV2ZW50RGVmYXVsdCgpLCFwJiZhLnRyYW5zaXRpb25zJiYoYS52YXJzLmFuaW1hdGlvbkxvb3B8fChtPXcvKDA9PT1hLmN1cnJlbnRTbGlkZSYmdzwwfHxhLmN1cnJlbnRTbGlkZT09PWEubGFzdCYmdz4wP01hdGguYWJzKHcpL2MrMjoxKSksYS5zZXRQcm9wcyhsK20sXCJzZXRUb3VjaFwiKSkpfX1mdW5jdGlvbiBpKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9ZS50YXJnZXQuX3NsaWRlcjtpZih0KXtpZih0LmFuaW1hdGluZ1RvPT09dC5jdXJyZW50U2xpZGUmJiF4JiZudWxsIT09bSl7dmFyIGE9dT8tbTptLG49YT4wP3QuZ2V0VGFyZ2V0KFwibmV4dFwiKTp0LmdldFRhcmdldChcInByZXZcIik7dC5jYW5BZHZhbmNlKG4pJiYoTnVtYmVyKG5ldyBEYXRlKS1mPDU1MCYmTWF0aC5hYnMoYSk+NTB8fE1hdGguYWJzKGEpPmMvMik/dC5mbGV4QW5pbWF0ZShuLHQudmFycy5wYXVzZU9uQWN0aW9uKTpwfHx0LmZsZXhBbmltYXRlKHQuY3VycmVudFNsaWRlLHQudmFycy5wYXVzZU9uQWN0aW9uLCEwKX1zPW51bGwsbz1udWxsLG09bnVsbCxsPW51bGwsdz0wfX12YXIgcyxvLGwsYyxtLGYsZyxoLFMseD0hMSx5PTAsYj0wLHc9MDtyPyh0LnN0eWxlLm1zVG91Y2hBY3Rpb249XCJub25lXCIsdC5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLHQuX2dlc3R1cmUudGFyZ2V0PXQsdC5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGUsITEpLHQuX3NsaWRlcj1uLHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUNoYW5nZVwiLGEsITEpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUVuZFwiLGksITEpKTooZz1mdW5jdGlvbihlKXtuLmFuaW1hdGluZz9lLnByZXZlbnREZWZhdWx0KCk6KHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZHx8MT09PWUudG91Y2hlcy5sZW5ndGgpJiYobi5wYXVzZSgpLGM9ZD9uLmg6bi53LGY9TnVtYmVyKG5ldyBEYXRlKSx5PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxsPXYmJnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp2JiZ1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOnYmJm4uY3VycmVudFNsaWRlPT09bi5sYXN0P24ubGltaXQ6dj8obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uY3VycmVudFNsaWRlOnU/KG4ubGFzdC1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjLHM9ZD9iOnksbz1kP3k6Yix0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLFMsITEpKX0saD1mdW5jdGlvbihlKXt5PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxtPWQ/cy1iOihuLnZhcnMucnRsPy0xOjEpKihzLXkpLHg9ZD9NYXRoLmFicyhtKTxNYXRoLmFicyh5LW8pOk1hdGguYWJzKG0pPE1hdGguYWJzKGItbyk7dmFyIHQ9NTAwOygheHx8TnVtYmVyKG5ldyBEYXRlKS1mPjUwMCkmJihlLnByZXZlbnREZWZhdWx0KCksIXAmJm4udHJhbnNpdGlvbnMmJihuLnZhcnMuYW5pbWF0aW9uTG9vcHx8KG0vPTA9PT1uLmN1cnJlbnRTbGlkZSYmbTwwfHxuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmbT4wP01hdGguYWJzKG0pL2MrMjoxKSxuLnNldFByb3BzKGwrbSxcInNldFRvdWNoXCIpKSl9LFM9ZnVuY3Rpb24oZSl7aWYodC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsaCwhMSksbi5hbmltYXRpbmdUbz09PW4uY3VycmVudFNsaWRlJiYheCYmbnVsbCE9PW0pe3ZhciBhPXU/LW06bSxpPWE+MD9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpO24uY2FuQWR2YW5jZShpKSYmKE51bWJlcihuZXcgRGF0ZSktZjw1NTAmJk1hdGguYWJzKGEpPjUwfHxNYXRoLmFicyhhKT5jLzIpP24uZmxleEFuaW1hdGUoaSxuLnZhcnMucGF1c2VPbkFjdGlvbik6cHx8bi5mbGV4QW5pbWF0ZShuLmN1cnJlbnRTbGlkZSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMCl9dC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixTLCExKSxzPW51bGwsbz1udWxsLG09bnVsbCxsPW51bGx9LHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixnLCExKSl9LHJlc2l6ZTpmdW5jdGlvbigpeyFuLmFuaW1hdGluZyYmbi5pcyhcIjp2aXNpYmxlXCIpJiYodnx8bi5kb01hdGgoKSxwP2Yuc21vb3RoSGVpZ2h0KCk6dj8obi5zbGlkZXMud2lkdGgobi5jb21wdXRlZFcpLG4udXBkYXRlKG4ucGFnaW5nQ291bnQpLG4uc2V0UHJvcHMoKSk6ZD8obi52aWV3cG9ydC5oZWlnaHQobi5oKSxuLnNldFByb3BzKG4uaCxcInNldFRvdGFsXCIpKToobi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKSxuLm5ld1NsaWRlcy53aWR0aChuLmNvbXB1dGVkVyksbi5zZXRQcm9wcyhuLmNvbXB1dGVkVyxcInNldFRvdGFsXCIpKSl9LHNtb290aEhlaWdodDpmdW5jdGlvbihlKXtpZighZHx8cCl7dmFyIHQ9cD9uOm4udmlld3BvcnQ7ZT90LmFuaW1hdGUoe2hlaWdodDpuLnNsaWRlcy5lcShuLmFuaW1hdGluZ1RvKS5pbm5lckhlaWdodCgpfSxlKTp0LmlubmVySGVpZ2h0KG4uc2xpZGVzLmVxKG4uYW5pbWF0aW5nVG8pLmlubmVySGVpZ2h0KCkpfX0sc3luYzpmdW5jdGlvbihlKXt2YXIgdD0kKG4udmFycy5zeW5jKS5kYXRhKFwiZmxleHNsaWRlclwiKSxhPW4uYW5pbWF0aW5nVG87c3dpdGNoKGUpe2Nhc2VcImFuaW1hdGVcIjp0LmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24sITEsITApO2JyZWFrO2Nhc2VcInBsYXlcIjp0LnBsYXlpbmd8fHQuYXNOYXZ8fHQucGxheSgpO2JyZWFrO2Nhc2VcInBhdXNlXCI6dC5wYXVzZSgpO2JyZWFrfX0sdW5pcXVlSUQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZmlsdGVyKFwiW2lkXVwiKS5hZGQoZS5maW5kKFwiW2lkXVwiKSkuZWFjaChmdW5jdGlvbigpe3ZhciBlPSQodGhpcyk7ZS5hdHRyKFwiaWRcIixlLmF0dHIoXCJpZFwiKStcIl9jbG9uZVwiKX0pLGV9LHBhdXNlSW52aXNpYmxlOnt2aXNQcm9wOm51bGwsaW5pdDpmdW5jdGlvbigpe3ZhciBlPWYucGF1c2VJbnZpc2libGUuZ2V0SGlkZGVuUHJvcCgpO2lmKGUpe3ZhciB0PWUucmVwbGFjZSgvW0h8aF1pZGRlbi8sXCJcIikrXCJ2aXNpYmlsaXR5Y2hhbmdlXCI7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0LGZ1bmN0aW9uKCl7Zi5wYXVzZUludmlzaWJsZS5pc0hpZGRlbigpP24uc3RhcnRUaW1lb3V0P2NsZWFyVGltZW91dChuLnN0YXJ0VGltZW91dCk6bi5wYXVzZSgpOm4uc3RhcnRlZD9uLnBsYXkoKTpuLnZhcnMuaW5pdERlbGF5PjA/c2V0VGltZW91dChuLnBsYXksbi52YXJzLmluaXREZWxheSk6bi5wbGF5KCl9KX19LGlzSGlkZGVuOmZ1bmN0aW9uKCl7dmFyIGU9Zi5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7cmV0dXJuISFlJiZkb2N1bWVudFtlXX0sZ2V0SGlkZGVuUHJvcDpmdW5jdGlvbigpe3ZhciBlPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXTtpZihcImhpZGRlblwiaW4gZG9jdW1lbnQpcmV0dXJuXCJoaWRkZW5cIjtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKylpZihlW3RdK1wiSGlkZGVuXCJpbiBkb2N1bWVudClyZXR1cm4gZVt0XStcIkhpZGRlblwiO3JldHVybiBudWxsfX0sc2V0VG9DbGVhcldhdGNoZWRFdmVudDpmdW5jdGlvbigpe2NsZWFyVGltZW91dChjKSxjPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsPVwiXCJ9LDNlMyl9fSxuLmZsZXhBbmltYXRlPWZ1bmN0aW9uKGUsdCxhLHIsbyl7aWYobi52YXJzLmFuaW1hdGlvbkxvb3B8fGU9PT1uLmN1cnJlbnRTbGlkZXx8KG4uZGlyZWN0aW9uPWU+bi5jdXJyZW50U2xpZGU/XCJuZXh0XCI6XCJwcmV2XCIpLG0mJjE9PT1uLnBhZ2luZ0NvdW50JiYobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxlP1wibmV4dFwiOlwicHJldlwiKSwhbi5hbmltYXRpbmcmJihuLmNhbkFkdmFuY2UoZSxvKXx8YSkmJm4uaXMoXCI6dmlzaWJsZVwiKSl7aWYobSYmcil7dmFyIGw9JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpO2lmKG4uYXRFbmQ9MD09PWV8fGU9PT1uLmNvdW50LTEsbC5mbGV4QW5pbWF0ZShlLCEwLCExLCEwLG8pLG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08ZT9cIm5leHRcIjpcInByZXZcIixsLmRpcmVjdGlvbj1uLmRpcmVjdGlvbixNYXRoLmNlaWwoKGUrMSkvbi52aXNpYmxlKS0xPT09bi5jdXJyZW50U2xpZGV8fDA9PT1lKXJldHVybiBuLmN1cnJlbnRJdGVtPWUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLCExO24uY3VycmVudEl0ZW09ZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksZT1NYXRoLmZsb29yKGUvbi52aXNpYmxlKX1pZihuLmFuaW1hdGluZz0hMCxuLmFuaW1hdGluZ1RvPWUsdCYmbi5wYXVzZSgpLG4udmFycy5iZWZvcmUobiksbi5zeW5jRXhpc3RzJiYhbyYmZi5zeW5jKFwiYW5pbWF0ZVwiKSxuLnZhcnMuY29udHJvbE5hdiYmZi5jb250cm9sTmF2LmFjdGl2ZSgpLHZ8fG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxuLmF0RW5kPTA9PT1lfHxlPT09bi5sYXN0LG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpLGU9PT1uLmxhc3QmJihuLnZhcnMuZW5kKG4pLG4udmFycy5hbmltYXRpb25Mb29wfHxuLnBhdXNlKCkpLHApcz8obi5zbGlkZXMuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7b3BhY2l0eTowLHpJbmRleDoxfSksbi5zbGlkZXMuZXEoZSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OjJ9KSxuLndyYXB1cChjKSk6KG4uc2xpZGVzLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoxfSkuYW5pbWF0ZSh7b3BhY2l0eTowfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyksbi5zbGlkZXMuZXEoZSkuY3NzKHt6SW5kZXg6Mn0pLmFuaW1hdGUoe29wYWNpdHk6MX0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcsbi53cmFwdXApKTtlbHNle3ZhciBjPWQ/bi5zbGlkZXMuZmlsdGVyKFwiOmZpcnN0XCIpLmhlaWdodCgpOm4uY29tcHV0ZWRXLGcsaCxTO3Y/KGc9bi52YXJzLml0ZW1NYXJnaW4sUz0obi5pdGVtVytnKSpuLm1vdmUqbi5hbmltYXRpbmdUbyxoPVM+bi5saW1pdCYmMSE9PW4udmlzaWJsZT9uLmxpbWl0OlMpOmg9MD09PW4uY3VycmVudFNsaWRlJiZlPT09bi5jb3VudC0xJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmXCJuZXh0XCIhPT1uLmRpcmVjdGlvbj91PyhuLmNvdW50K24uY2xvbmVPZmZzZXQpKmM6MDpuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmMD09PWUmJm4udmFycy5hbmltYXRpb25Mb29wJiZcInByZXZcIiE9PW4uZGlyZWN0aW9uP3U/MDoobi5jb3VudCsxKSpjOnU/KG4uY291bnQtMS1lK24uY2xvbmVPZmZzZXQpKmM6KGUrbi5jbG9uZU9mZnNldCkqYyxuLnNldFByb3BzKGgsXCJcIixuLnZhcnMuYW5pbWF0aW9uU3BlZWQpLG4udHJhbnNpdGlvbnM/KG4udmFycy5hbmltYXRpb25Mb29wJiZuLmF0RW5kfHwobi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9bi5hbmltYXRpbmdUbyksbi5jb250YWluZXIudW5iaW5kKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpLG4uY29udGFpbmVyLmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIixmdW5jdGlvbigpe2NsZWFyVGltZW91dChuLmVuc3VyZUFuaW1hdGlvbkVuZCksbi53cmFwdXAoYyl9KSxjbGVhclRpbWVvdXQobi5lbnN1cmVBbmltYXRpb25FbmQpLG4uZW5zdXJlQW5pbWF0aW9uRW5kPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLndyYXB1cChjKX0sbi52YXJzLmFuaW1hdGlvblNwZWVkKzEwMCkpOm4uY29udGFpbmVyLmFuaW1hdGUobi5hcmdzLG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nLGZ1bmN0aW9uKCl7bi53cmFwdXAoYyl9KX1uLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodChuLnZhcnMuYW5pbWF0aW9uU3BlZWQpfX0sbi53cmFwdXA9ZnVuY3Rpb24oZSl7cHx8dnx8KDA9PT1uLmN1cnJlbnRTbGlkZSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdCYmbi52YXJzLmFuaW1hdGlvbkxvb3A/bi5zZXRQcm9wcyhlLFwianVtcEVuZFwiKTpuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmMD09PW4uYW5pbWF0aW5nVG8mJm4udmFycy5hbmltYXRpb25Mb29wJiZuLnNldFByb3BzKGUsXCJqdW1wU3RhcnRcIikpLG4uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPW4uYW5pbWF0aW5nVG8sbi52YXJzLmFmdGVyKG4pfSxuLmFuaW1hdGVTbGlkZXM9ZnVuY3Rpb24oKXshbi5hbmltYXRpbmcmJmUmJm4uZmxleEFuaW1hdGUobi5nZXRUYXJnZXQoXCJuZXh0XCIpKX0sbi5wYXVzZT1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwobi5hbmltYXRlZFNsaWRlcyksbi5hbmltYXRlZFNsaWRlcz1udWxsLG4ucGxheWluZz0hMSxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS51cGRhdGUoXCJwbGF5XCIpLG4uc3luY0V4aXN0cyYmZi5zeW5jKFwicGF1c2VcIil9LG4ucGxheT1mdW5jdGlvbigpe24ucGxheWluZyYmY2xlYXJJbnRlcnZhbChuLmFuaW1hdGVkU2xpZGVzKSxuLmFuaW1hdGVkU2xpZGVzPW4uYW5pbWF0ZWRTbGlkZXN8fHNldEludGVydmFsKG4uYW5pbWF0ZVNsaWRlcyxuLnZhcnMuc2xpZGVzaG93U3BlZWQpLG4uc3RhcnRlZD1uLnBsYXlpbmc9ITAsbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkudXBkYXRlKFwicGF1c2VcIiksbi5zeW5jRXhpc3RzJiZmLnN5bmMoXCJwbGF5XCIpfSxuLnN0b3A9ZnVuY3Rpb24oKXtuLnBhdXNlKCksbi5zdG9wcGVkPSEwfSxuLmNhbkFkdmFuY2U9ZnVuY3Rpb24oZSx0KXt2YXIgYT1tP24ucGFnaW5nQ291bnQtMTpuLmxhc3Q7cmV0dXJuISF0fHwoISghbXx8bi5jdXJyZW50SXRlbSE9PW4uY291bnQtMXx8MCE9PWV8fFwicHJldlwiIT09bi5kaXJlY3Rpb24pfHwoIW18fDAhPT1uLmN1cnJlbnRJdGVtfHxlIT09bi5wYWdpbmdDb3VudC0xfHxcIm5leHRcIj09PW4uZGlyZWN0aW9uKSYmKCEoZT09PW4uY3VycmVudFNsaWRlJiYhbSkmJighIW4udmFycy5hbmltYXRpb25Mb29wfHwoIW4uYXRFbmR8fDAhPT1uLmN1cnJlbnRTbGlkZXx8ZSE9PWF8fFwibmV4dFwiPT09bi5kaXJlY3Rpb24pJiYoIW4uYXRFbmR8fG4uY3VycmVudFNsaWRlIT09YXx8MCE9PWV8fFwibmV4dFwiIT09bi5kaXJlY3Rpb24pKSkpfSxuLmdldFRhcmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbi5kaXJlY3Rpb249ZSxcIm5leHRcIj09PWU/bi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/MDpuLmN1cnJlbnRTbGlkZSsxOjA9PT1uLmN1cnJlbnRTbGlkZT9uLmxhc3Q6bi5jdXJyZW50U2xpZGUtMX0sbi5zZXRQcm9wcz1mdW5jdGlvbihlLHQsYSl7dmFyIGk9ZnVuY3Rpb24oKXt2YXIgYT1lfHwobi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG87cmV0dXJuIGZ1bmN0aW9uKCl7aWYodilyZXR1cm5cInNldFRvdWNoXCI9PT10P2U6dSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86bi5hbmltYXRpbmdUbz09PW4ubGFzdD9uLmxpbWl0OmE7c3dpdGNoKHQpe2Nhc2VcInNldFRvdGFsXCI6cmV0dXJuIHU/KG4uY291bnQtMS1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSplOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSplO2Nhc2VcInNldFRvdWNoXCI6cmV0dXJuIGU7Y2FzZVwianVtcEVuZFwiOnJldHVybiB1P2U6bi5jb3VudCplO2Nhc2VcImp1bXBTdGFydFwiOnJldHVybiB1P24uY291bnQqZTplO2RlZmF1bHQ6cmV0dXJuIGV9fSgpKihuLnZhcnMucnRsPzE6LTEpK1wicHhcIn0oKTtuLnRyYW5zaXRpb25zJiYoaT1uLmlzRmlyZWZveD9kP1widHJhbnNsYXRlM2QoMCxcIitpK1wiLDApXCI6XCJ0cmFuc2xhdGUzZChcIitwYXJzZUludChpKStcInB4LDAsMClcIjpkP1widHJhbnNsYXRlM2QoMCxcIitpK1wiLDApXCI6XCJ0cmFuc2xhdGUzZChcIisobi52YXJzLnJ0bD8tMToxKSpwYXJzZUludChpKStcInB4LDAsMClcIixhPXZvaWQgMCE9PWE/YS8xZTMrXCJzXCI6XCIwc1wiLG4uY29udGFpbmVyLmNzcyhcIi1cIituLnBmeCtcIi10cmFuc2l0aW9uLWR1cmF0aW9uXCIsYSksbi5jb250YWluZXIuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLGEpKSxuLmFyZ3Nbbi5wcm9wXT1pLChuLnRyYW5zaXRpb25zfHx2b2lkIDA9PT1hKSYmbi5jb250YWluZXIuY3NzKG4uYXJncyksbi5jb250YWluZXIuY3NzKFwidHJhbnNmb3JtXCIsaSl9LG4uc2V0dXA9ZnVuY3Rpb24oZSl7aWYocCluLnZhcnMucnRsP24uc2xpZGVzLmNzcyh7d2lkdGg6XCIxMDAlXCIsZmxvYXQ6XCJyaWdodFwiLG1hcmdpbkxlZnQ6XCItMTAwJVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pOm4uc2xpZGVzLmNzcyh7d2lkdGg6XCIxMDAlXCIsZmxvYXQ6XCJsZWZ0XCIsbWFyZ2luUmlnaHQ6XCItMTAwJVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLFwiaW5pdFwiPT09ZSYmKHM/bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsd2Via2l0VHJhbnNpdGlvbjpcIm9wYWNpdHkgXCIrbi52YXJzLmFuaW1hdGlvblNwZWVkLzFlMytcInMgZWFzZVwiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7b3BhY2l0eToxLHpJbmRleDoyfSk6MD09bi52YXJzLmZhZGVGaXJzdFNsaWRlP24uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjJ9KS5jc3Moe29wYWNpdHk6MX0pOm4uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjJ9KS5hbmltYXRlKHtvcGFjaXR5OjF9LG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nKSksbi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKTtlbHNle3ZhciB0LGE7XCJpbml0XCI9PT1lJiYobi52aWV3cG9ydD0kKCc8ZGl2IGNsYXNzPVwiJytpKyd2aWV3cG9ydFwiPjwvZGl2PicpLmNzcyh7b3ZlcmZsb3c6XCJoaWRkZW5cIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KS5hcHBlbmRUbyhuKS5hcHBlbmQobi5jb250YWluZXIpLG4uY2xvbmVDb3VudD0wLG4uY2xvbmVPZmZzZXQ9MCx1JiYoYT0kLm1ha2VBcnJheShuLnNsaWRlcykucmV2ZXJzZSgpLG4uc2xpZGVzPSQoYSksbi5jb250YWluZXIuZW1wdHkoKS5hcHBlbmQobi5zbGlkZXMpKSksbi52YXJzLmFuaW1hdGlvbkxvb3AmJiF2JiYobi5jbG9uZUNvdW50PTIsbi5jbG9uZU9mZnNldD0xLFwiaW5pdFwiIT09ZSYmbi5jb250YWluZXIuZmluZChcIi5jbG9uZVwiKS5yZW1vdmUoKSxuLmNvbnRhaW5lci5hcHBlbmQoZi51bmlxdWVJRChuLnNsaWRlcy5maXJzdCgpLmNsb25lKCkuYWRkQ2xhc3MoXCJjbG9uZVwiKSkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKS5wcmVwZW5kKGYudW5pcXVlSUQobi5zbGlkZXMubGFzdCgpLmNsb25lKCkuYWRkQ2xhc3MoXCJjbG9uZVwiKSkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKSksbi5uZXdTbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IsbiksdD11P24uY291bnQtMS1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0Om4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQsZCYmIXY/KG4uY29udGFpbmVyLmhlaWdodCgyMDAqKG4uY291bnQrbi5jbG9uZUNvdW50KStcIiVcIikuY3NzKFwicG9zaXRpb25cIixcImFic29sdXRlXCIpLndpZHRoKFwiMTAwJVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5uZXdTbGlkZXMuY3NzKHtkaXNwbGF5OlwiYmxvY2tcIn0pLG4uZG9NYXRoKCksbi52aWV3cG9ydC5oZWlnaHQobi5oKSxuLnNldFByb3BzKHQqbi5oLFwiaW5pdFwiKX0sXCJpbml0XCI9PT1lPzEwMDowKSk6KG4uY29udGFpbmVyLndpZHRoKDIwMCoobi5jb3VudCtuLmNsb25lQ291bnQpK1wiJVwiKSxuLnNldFByb3BzKHQqbi5jb21wdXRlZFcsXCJpbml0XCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLmRvTWF0aCgpLG4udmFycy5ydGwmJm4uaXNGaXJlZm94P24ubmV3U2xpZGVzLmNzcyh7d2lkdGg6bi5jb21wdXRlZFcsbWFyZ2luUmlnaHQ6bi5jb21wdXRlZE0sZmxvYXQ6XCJyaWdodFwiLGRpc3BsYXk6XCJibG9ja1wifSk6bi5uZXdTbGlkZXMuY3NzKHt3aWR0aDpuLmNvbXB1dGVkVyxtYXJnaW5SaWdodDpuLmNvbXB1dGVkTSxmbG9hdDpcImxlZnRcIixkaXNwbGF5OlwiYmxvY2tcIn0pLG4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KCl9LFwiaW5pdFwiPT09ZT8xMDA6MCkpfXZ8fG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEobi5jdXJyZW50U2xpZGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksbi52YXJzLmluaXQobil9LG4uZG9NYXRoPWZ1bmN0aW9uKCl7dmFyIGU9bi5zbGlkZXMuZmlyc3QoKSx0PW4udmFycy5pdGVtTWFyZ2luLGE9bi52YXJzLm1pbkl0ZW1zLGk9bi52YXJzLm1heEl0ZW1zO24udz12b2lkIDA9PT1uLnZpZXdwb3J0P24ud2lkdGgoKTpuLnZpZXdwb3J0LndpZHRoKCksbi5pc0ZpcmVmb3gmJihuLnc9bi53aWR0aCgpKSxuLmg9ZS5oZWlnaHQoKSxuLmJveFBhZGRpbmc9ZS5vdXRlcldpZHRoKCktZS53aWR0aCgpLHY/KG4uaXRlbVQ9bi52YXJzLml0ZW1XaWR0aCt0LG4uaXRlbU09dCxuLm1pblc9YT9hKm4uaXRlbVQ6bi53LG4ubWF4Vz1pP2kqbi5pdGVtVC10Om4udyxuLml0ZW1XPW4ubWluVz5uLnc/KG4udy10KihhLTEpKS9hOm4ubWF4VzxuLnc/KG4udy10KihpLTEpKS9pOm4udmFycy5pdGVtV2lkdGg+bi53P24udzpuLnZhcnMuaXRlbVdpZHRoLG4udmlzaWJsZT1NYXRoLmZsb29yKG4udy9uLml0ZW1XKSxuLm1vdmU9bi52YXJzLm1vdmU+MCYmbi52YXJzLm1vdmU8bi52aXNpYmxlP24udmFycy5tb3ZlOm4udmlzaWJsZSxuLnBhZ2luZ0NvdW50PU1hdGguY2VpbCgobi5jb3VudC1uLnZpc2libGUpL24ubW92ZSsxKSxuLmxhc3Q9bi5wYWdpbmdDb3VudC0xLG4ubGltaXQ9MT09PW4ucGFnaW5nQ291bnQ/MDpuLnZhcnMuaXRlbVdpZHRoPm4udz9uLml0ZW1XKihuLmNvdW50LTEpK3QqKG4uY291bnQtMSk6KG4uaXRlbVcrdCkqbi5jb3VudC1uLnctdCk6KG4uaXRlbVc9bi53LG4uaXRlbU09dCxuLnBhZ2luZ0NvdW50PW4uY291bnQsbi5sYXN0PW4uY291bnQtMSksbi5jb21wdXRlZFc9bi5pdGVtVy1uLmJveFBhZGRpbmcsbi5jb21wdXRlZE09bi5pdGVtTX0sbi51cGRhdGU9ZnVuY3Rpb24oZSx0KXtuLmRvTWF0aCgpLHZ8fChlPG4uY3VycmVudFNsaWRlP24uY3VycmVudFNsaWRlKz0xOmU8PW4uY3VycmVudFNsaWRlJiYwIT09ZSYmKG4uY3VycmVudFNsaWRlLT0xKSxuLmFuaW1hdGluZ1RvPW4uY3VycmVudFNsaWRlKSxuLnZhcnMuY29udHJvbE5hdiYmIW4ubWFudWFsQ29udHJvbHMmJihcImFkZFwiPT09dCYmIXZ8fG4ucGFnaW5nQ291bnQ+bi5jb250cm9sTmF2Lmxlbmd0aD9mLmNvbnRyb2xOYXYudXBkYXRlKFwiYWRkXCIpOihcInJlbW92ZVwiPT09dCYmIXZ8fG4ucGFnaW5nQ291bnQ8bi5jb250cm9sTmF2Lmxlbmd0aCkmJih2JiZuLmN1cnJlbnRTbGlkZT5uLmxhc3QmJihuLmN1cnJlbnRTbGlkZS09MSxuLmFuaW1hdGluZ1RvLT0xKSxmLmNvbnRyb2xOYXYudXBkYXRlKFwicmVtb3ZlXCIsbi5sYXN0KSkpLG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpfSxuLmFkZFNsaWRlPWZ1bmN0aW9uKGUsdCl7dmFyIGE9JChlKTtuLmNvdW50Kz0xLG4ubGFzdD1uLmNvdW50LTEsZCYmdT92b2lkIDAhPT10P24uc2xpZGVzLmVxKG4uY291bnQtdCkuYWZ0ZXIoYSk6bi5jb250YWluZXIucHJlcGVuZChhKTp2b2lkIDAhPT10P24uc2xpZGVzLmVxKHQpLmJlZm9yZShhKTpuLmNvbnRhaW5lci5hcHBlbmQoYSksbi51cGRhdGUodCxcImFkZFwiKSxuLnNsaWRlcz0kKG4udmFycy5zZWxlY3RvcitcIjpub3QoLmNsb25lKVwiLG4pLG4uc2V0dXAoKSxuLnZhcnMuYWRkZWQobil9LG4ucmVtb3ZlU2xpZGU9ZnVuY3Rpb24oZSl7dmFyIHQ9aXNOYU4oZSk/bi5zbGlkZXMuaW5kZXgoJChlKSk6ZTtuLmNvdW50LT0xLG4ubGFzdD1uLmNvdW50LTEsaXNOYU4oZSk/JChlLG4uc2xpZGVzKS5yZW1vdmUoKTpkJiZ1P24uc2xpZGVzLmVxKG4ubGFzdCkucmVtb3ZlKCk6bi5zbGlkZXMuZXEoZSkucmVtb3ZlKCksbi5kb01hdGgoKSxuLnVwZGF0ZSh0LFwicmVtb3ZlXCIpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yK1wiOm5vdCguY2xvbmUpXCIsbiksbi5zZXR1cCgpLG4udmFycy5yZW1vdmVkKG4pfSxmLmluaXQoKX0sJCh3aW5kb3cpLmJsdXIoZnVuY3Rpb24odCl7ZT0hMX0pLmZvY3VzKGZ1bmN0aW9uKHQpe2U9ITB9KSwkLmZsZXhzbGlkZXIuZGVmYXVsdHM9e25hbWVzcGFjZTpcImZsZXgtXCIsc2VsZWN0b3I6XCIuc2xpZGVzID4gbGlcIixhbmltYXRpb246XCJmYWRlXCIsZWFzaW5nOlwic3dpbmdcIixkaXJlY3Rpb246XCJob3Jpem9udGFsXCIscmV2ZXJzZTohMSxhbmltYXRpb25Mb29wOiEwLHNtb290aEhlaWdodDohMSxzdGFydEF0OjAsc2xpZGVzaG93OiEwLHNsaWRlc2hvd1NwZWVkOjdlMyxhbmltYXRpb25TcGVlZDo2MDAsaW5pdERlbGF5OjAscmFuZG9taXplOiExLGZhZGVGaXJzdFNsaWRlOiEwLHRodW1iQ2FwdGlvbnM6ITEscGF1c2VPbkFjdGlvbjohMCxwYXVzZU9uSG92ZXI6ITEscGF1c2VJbnZpc2libGU6ITAsdXNlQ1NTOiEwLHRvdWNoOiEwLHZpZGVvOiExLGNvbnRyb2xOYXY6ITAsZGlyZWN0aW9uTmF2OiEwLHByZXZUZXh0OlwiUHJldmlvdXNcIixuZXh0VGV4dDpcIk5leHRcIixrZXlib2FyZDohMCxtdWx0aXBsZUtleWJvYXJkOiExLG1vdXNld2hlZWw6ITEscGF1c2VQbGF5OiExLHBhdXNlVGV4dDpcIlBhdXNlXCIscGxheVRleHQ6XCJQbGF5XCIsY29udHJvbHNDb250YWluZXI6XCJcIixtYW51YWxDb250cm9sczpcIlwiLGN1c3RvbURpcmVjdGlvbk5hdjpcIlwiLHN5bmM6XCJcIixhc05hdkZvcjpcIlwiLGl0ZW1XaWR0aDowLGl0ZW1NYXJnaW46MCxtaW5JdGVtczoxLG1heEl0ZW1zOjAsbW92ZTowLGFsbG93T25lU2xpZGU6ITAsaXNGaXJlZm94OiExLHN0YXJ0OmZ1bmN0aW9uKCl7fSxiZWZvcmU6ZnVuY3Rpb24oKXt9LGFmdGVyOmZ1bmN0aW9uKCl7fSxlbmQ6ZnVuY3Rpb24oKXt9LGFkZGVkOmZ1bmN0aW9uKCl7fSxyZW1vdmVkOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7fSxydGw6ITF9LCQuZm4uZmxleHNsaWRlcj1mdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lJiYoZT17fSksXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PSQodGhpcyksYT1lLnNlbGVjdG9yP2Uuc2VsZWN0b3I6XCIuc2xpZGVzID4gbGlcIixuPXQuZmluZChhKTsxPT09bi5sZW5ndGgmJiExPT09ZS5hbGxvd09uZVNsaWRlfHwwPT09bi5sZW5ndGg/KG4uZmFkZUluKDQwMCksZS5zdGFydCYmZS5zdGFydCh0KSk6dm9pZCAwPT09dC5kYXRhKFwiZmxleHNsaWRlclwiKSYmbmV3ICQuZmxleHNsaWRlcih0aGlzLGUpfSk7dmFyIHQ9JCh0aGlzKS5kYXRhKFwiZmxleHNsaWRlclwiKTtzd2l0Y2goZSl7Y2FzZVwicGxheVwiOnQucGxheSgpO2JyZWFrO2Nhc2VcInBhdXNlXCI6dC5wYXVzZSgpO2JyZWFrO2Nhc2VcInN0b3BcIjp0LnN0b3AoKTticmVhaztjYXNlXCJuZXh0XCI6dC5mbGV4QW5pbWF0ZSh0LmdldFRhcmdldChcIm5leHRcIiksITApO2JyZWFrO2Nhc2VcInByZXZcIjpjYXNlXCJwcmV2aW91c1wiOnQuZmxleEFuaW1hdGUodC5nZXRUYXJnZXQoXCJwcmV2XCIpLCEwKTticmVhaztkZWZhdWx0OlwibnVtYmVyXCI9PXR5cGVvZiBlJiZ0LmZsZXhBbmltYXRlKGUsITApfX19KGpRdWVyeSk7IiwiIWZ1bmN0aW9uKGcpe2cuZm4udHdlbnR5dHdlbnR5PWZ1bmN0aW9uKG0pe209Zy5leHRlbmQoe2RlZmF1bHRfb2Zmc2V0X3BjdDouNSxvcmllbnRhdGlvbjpcImhvcml6b250YWxcIixiZWZvcmVfbGFiZWw6XCJCZWZvcmVcIixhZnRlcl9sYWJlbDpcIkFmdGVyXCIsbm9fb3ZlcmxheTohMSxtb3ZlX3NsaWRlcl9vbl9ob3ZlcjohMSxtb3ZlX3dpdGhfaGFuZGxlX29ubHk6ITAsY2xpY2tfdG9fbW92ZTohMX0sbSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPW0uZGVmYXVsdF9vZmZzZXRfcGN0LHM9Zyh0aGlzKSxyPW0ub3JpZW50YXRpb24sdD1cInZlcnRpY2FsXCI9PT1yP1wiZG93blwiOlwibGVmdFwiLG49XCJ2ZXJ0aWNhbFwiPT09cj9cInVwXCI6XCJyaWdodFwiO2lmKHMud3JhcChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS13cmFwcGVyIHR3ZW50eXR3ZW50eS1cIityK1wiJz48L2Rpdj5cIiksIW0ubm9fb3ZlcmxheSl7cy5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktb3ZlcmxheSc+PC9kaXY+XCIpO3ZhciBhPXMuZmluZChcIi50d2VudHl0d2VudHktb3ZlcmxheVwiKTthLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1iZWZvcmUtbGFiZWwnIGRhdGEtY29udGVudD0nXCIrbS5iZWZvcmVfbGFiZWwrXCInPjwvZGl2PlwiKSxhLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1hZnRlci1sYWJlbCcgZGF0YS1jb250ZW50PSdcIittLmFmdGVyX2xhYmVsK1wiJz48L2Rpdj5cIil9dmFyIGM9cy5maW5kKFwiaW1nOmZpcnN0XCIpLGw9cy5maW5kKFwiaW1nOmxhc3RcIik7cy5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktaGFuZGxlJz48L2Rpdj5cIik7dmFyIGQ9cy5maW5kKFwiLnR3ZW50eXR3ZW50eS1oYW5kbGVcIik7ZC5hcHBlbmQoXCI8c3BhbiBjbGFzcz0ndHdlbnR5dHdlbnR5LVwiK3QrXCItYXJyb3cnPjwvc3Bhbj5cIiksZC5hcHBlbmQoXCI8c3BhbiBjbGFzcz0ndHdlbnR5dHdlbnR5LVwiK24rXCItYXJyb3cnPjwvc3Bhbj5cIikscy5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1jb250YWluZXJcIiksYy5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1iZWZvcmVcIiksbC5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1hZnRlclwiKTtmdW5jdGlvbiBpKHQpe3ZhciBlLG4sYSxpLG89KGU9dCxuPWMud2lkdGgoKSxhPWMuaGVpZ2h0KCkse3c6bitcInB4XCIsaDphK1wicHhcIixjdzplKm4rXCJweFwiLGNoOmUqYStcInB4XCJ9KTtkLmNzcyhcInZlcnRpY2FsXCI9PT1yP1widG9wXCI6XCJsZWZ0XCIsXCJ2ZXJ0aWNhbFwiPT09cj9vLmNoOm8uY3cpLGk9byxcInZlcnRpY2FsXCI9PT1yPyhjLmNzcyhcImNsaXBcIixcInJlY3QoMCxcIitpLncrXCIsXCIraS5jaCtcIiwwKVwiKSxsLmNzcyhcImNsaXBcIixcInJlY3QoXCIraS5jaCtcIixcIitpLncrXCIsXCIraS5oK1wiLDApXCIpKTooYy5jc3MoXCJjbGlwXCIsXCJyZWN0KDAsXCIraS5jdytcIixcIitpLmgrXCIsMClcIiksbC5jc3MoXCJjbGlwXCIsXCJyZWN0KDAsXCIraS53K1wiLFwiK2kuaCtcIixcIitpLmN3K1wiKVwiKSkscy5jc3MoXCJoZWlnaHRcIixpLmgpfWZ1bmN0aW9uIG8odCxlKXt2YXIgbixhLGk7cmV0dXJuIG49XCJ2ZXJ0aWNhbFwiPT09cj8oZS15KS91Oih0LXApL2gsYT0wLGk9MSxNYXRoLm1heChhLE1hdGgubWluKGksbikpfWcod2luZG93KS5vbihcInJlc2l6ZS50d2VudHl0d2VudHlcIixmdW5jdGlvbih0KXtpKGUpfSk7ZnVuY3Rpb24gdyh0KXsodC5kaXN0WD50LmRpc3RZJiZ0LmRpc3RYPC10LmRpc3RZfHx0LmRpc3RYPHQuZGlzdFkmJnQuZGlzdFg+LXQuZGlzdFkpJiZcInZlcnRpY2FsXCIhPT1yP3QucHJldmVudERlZmF1bHQoKToodC5kaXN0WDx0LmRpc3RZJiZ0LmRpc3RYPC10LmRpc3RZfHx0LmRpc3RYPnQuZGlzdFkmJnQuZGlzdFg+LXQuZGlzdFkpJiZcInZlcnRpY2FsXCI9PT1yJiZ0LnByZXZlbnREZWZhdWx0KCkscy5hZGRDbGFzcyhcImFjdGl2ZVwiKSxwPXMub2Zmc2V0KCkubGVmdCx5PXMub2Zmc2V0KCkudG9wLGg9Yy53aWR0aCgpLHU9Yy5oZWlnaHQoKX1mdW5jdGlvbiBmKHQpe3MuaGFzQ2xhc3MoXCJhY3RpdmVcIikmJihlPW8odC5wYWdlWCx0LnBhZ2VZKSxpKGUpKX1mdW5jdGlvbiB2KCl7cy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX12YXIgcD0wLHk9MCxoPTAsdT0wLF89bS5tb3ZlX3dpdGhfaGFuZGxlX29ubHk/ZDpzO18ub24oXCJtb3Zlc3RhcnRcIix3KSxfLm9uKFwibW92ZVwiLGYpLF8ub24oXCJtb3ZlZW5kXCIsdiksbS5tb3ZlX3NsaWRlcl9vbl9ob3ZlciYmKHMub24oXCJtb3VzZWVudGVyXCIsdykscy5vbihcIm1vdXNlbW92ZVwiLGYpLHMub24oXCJtb3VzZWxlYXZlXCIsdikpLGQub24oXCJ0b3VjaG1vdmVcIixmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCl9KSxzLmZpbmQoXCJpbWdcIikub24oXCJtb3VzZWRvd25cIixmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCl9KSxtLmNsaWNrX3RvX21vdmUmJnMub24oXCJjbGlja1wiLGZ1bmN0aW9uKHQpe3A9cy5vZmZzZXQoKS5sZWZ0LHk9cy5vZmZzZXQoKS50b3AsaD1jLndpZHRoKCksdT1jLmhlaWdodCgpLGU9byh0LnBhZ2VYLHQucGFnZVkpLGkoZSl9KSxnKHdpbmRvdykudHJpZ2dlcihcInJlc2l6ZS50d2VudHl0d2VudHlcIil9KX19KGpRdWVyeSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJyNtZW51LW9wZW4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcjbWVudS1vcGVuIHNwYW4nKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICQoJy5uYXYnKS5zbGlkZVRvZ2dsZSgnc2xvdycpOyAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3Byb2R1Y3RzIHN1YiBtZW51XHJcbiAgICAkKCcucHJvZHVjdHMtbWVudS1saW5rPmEnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuZG93bmxvYWRzJykucmVtb3ZlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgICAgICAkKCcucHJvZHVjdHMnKS50b2dnbGVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgfSk7ICBcclxuXHJcbiAgICAvL2Rvd25sb2FkcyBzdWIgbWVudVxyXG4gICAgJCgnLmRvd25sb2FkLW1lbnUtbGluaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0cycpLnJlbW92ZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLmRvd25sb2FkcycpLnRvZ2dsZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NoYW5nZSBwcm9kdWN0IG1lbnUgbGluayBvbiBtb2JpbGVcclxuXHJcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIGlmKHcgPCAxMjAwKSB7XHJcbiAgICAgICQoJy5wcm9kdWN0cy1tZW51LWxpbms+YScpLmF0dHIoJ2hyZWYnLCAnL3Byb2R1Y3RzJyk7XHJcbiAgICAgICQoJy5kb3dubG9hZC1tZW51LWxpbms+YScpLmF0dHIoJ2hyZWYnLCAnL2Rvd25sb2FkcycpO1xyXG4gICAgfSBcclxuXHJcbiAgLy9jb2xsYXBzaWJsZSBtZW51cyBmdW5jdGlvblxyXG4gIGZ1bmN0aW9uIHNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzKCkge1xyXG4gICAgdmFyICRtZW51ID0gJCgnI21vYmlsZV9tZW51JyksXHJcbiAgICAgIHRvcF9sZXZlbF9saW5rID0gJyNtb2JpbGVfbWVudSAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEnO1xyXG4gICAgICBjb25zb2xlLmxvZygkbWVudSk7XHJcbiAgICAkbWVudS5maW5kKCdhJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5vZmYoJ2NsaWNrJyk7XHJcbiAgICAgICBcclxuICAgICAgaWYgKCAkKHRoaXMpLmlzKHRvcF9sZXZlbF9saW5rKSApIHtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ2hyZWYnLCAnIycpO1xyXG4gICAgICB9XHJcbiAgICAgICBcclxuICAgICAgaWYgKCAhICQodGhpcykuc2libGluZ3MoJy5zdWItbWVudScpLmxlbmd0aCApIHtcclxuICAgICAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gICBcclxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzKCk7XHJcbiAgICB9LCA3MDApO1xyXG4gIH0pO1xyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm5ld3Mtc2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBcImZhZGVcIixcclxuICAgICAgICBzbGlkZXNob3dTcGVlZDogNzAwMCxcclxuICAgICAgICBhbmltYXRpb25TcGVlZDogNjAwLFxyXG4gICAgICAgIGFuaW1hdGlvbkxvb3A6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgLy9jb250cm9sTmF2OiB0cnVlLCAgXHJcbiAgICAgICAgcnRsOiB0cnVlLFxyXG4gICAgICAgIGN1c3RvbURpcmVjdGlvbk5hdjogJChcIi5jdXN0b20tbmF2aWdhdGlvbiBhXCIpXHJcbiAgICB9KTtcclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgICQoJy5wcm9kdWN0LXNsaWRlcicpLmZsZXhzbGlkZXIoe1xyXG4gICAgICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXHJcbiAgICAgICAgLy9zbGlkZXNob3dTcGVlZDogNzAwMCxcclxuICAgICAgICBhbmltYXRpb25TcGVlZDogNjAwLFxyXG4gICAgICAgIGFuaW1hdGlvbkxvb3A6IGZhbHNlLFxyXG4gICAgICAgIHBhdXNlT25BY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIGNvbnRyb2xOYXY6IHRydWUsXHJcbiAgICAgICAgcnRsOiB0cnVlLFxyXG4gICAgICAgIGN1c3RvbURpcmVjdGlvbk5hdjogJChcIi5jdXN0b20tbmF2aWdhdGlvbiBhXCIpXHJcbiAgICB9KTtcclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHQkKCcuYmVmb3JlJykubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5iZWZvcmUnKS5mYWRlT3V0KDE1MDApO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbmlmKCQoJy5pbWFnZS1jb21wYXJpc29uJykubGVuZ3RoKSB7XHJcblx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0ICAkKFwiI2ltYWdlc190b19jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSgpO1xyXG5cdH0pO1xyXG59IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAkKCcuZmxleHNsaWRlcicpLmZsZXhzbGlkZXIoe1xyXG4gICAgYW5pbWF0aW9uOiBcImZhZGVcIixcclxuICAgIHNsaWRlc2hvd1NwZWVkOiA3MDAwLFxyXG4gICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCwgIFxyXG4gICAgYW5pbWF0aW9uTG9vcDogdHJ1ZSxcclxuXHRjb250cm9sTmF2OiB0cnVlLCAgXHJcbiAgICBydGw6IHRydWUsXHJcbiAgfSk7XHJcbn0pOyIsIi8vYWRkIHNtb290aCBzY3JvbGwgdG8gYWxsIGxpbmtzXHJcbnZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAvLyBBZGQgc21vb3RoIHNjcm9sbGluZyB0byBhbGwgbGlua3NcclxuICAkKFwiYVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSB0aGlzLmhhc2ggaGFzIGEgdmFsdWUgYmVmb3JlIG92ZXJyaWRpbmcgZGVmYXVsdCBiZWhhdmlvclxyXG4gICAgaWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xyXG4gICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYW5jaG9yIGNsaWNrIGJlaGF2aW9yXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAvLyBTdG9yZSBoYXNoXHJcbiAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xyXG5cclxuICAgICAgLy8gVXNpbmcgalF1ZXJ5J3MgYW5pbWF0ZSgpIG1ldGhvZCB0byBhZGQgc21vb3RoIHBhZ2Ugc2Nyb2xsXHJcbiAgICAgIC8vIFRoZSBvcHRpb25hbCBudW1iZXIgKDgwMCkgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRha2VzIHRvIHNjcm9sbCB0byB0aGUgc3BlY2lmaWVkIGFyZWFcclxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgIHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3BcclxuICAgICAgfSwgODAwLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvLyBBZGQgaGFzaCAoIykgdG8gVVJMIHdoZW4gZG9uZSBzY3JvbGxpbmcgKGRlZmF1bHQgY2xpY2sgYmVoYXZpb3IpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xyXG4gICAgICB9KTtcclxuICAgIH0gLy8gRW5kIGlmXHJcbiAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=