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
/* harmony import */ var _components_404__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/404 */ "./src/js/components/404.js");
/* harmony import */ var _components_404__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_404__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_product_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product-slider */ "./src/js/components/product-slider.js");
/* harmony import */ var _components_product_slider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_product_slider__WEBPACK_IMPORTED_MODULE_12__);
/** Import dependencies **/



/** Import Custom files **/








 //import './components/front-page';




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

/* WEBPACK VAR INJECTION */(function(setImmediate) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvNDA0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mdWxsLWltYWdlLWZsZXhzbGlkZXItaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9qcXVlcnkuZXZlbnQubW92ZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvanF1ZXJ5LmZsZXhzbGlkZXItbWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2pxdWVyeS50d2VudHl0d2VudHkubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbmV3cy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJvZHVjdC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Ntb290aC1zY3JvbGwuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJnbG9iYWwiLCJ1bmRlZmluZWQiLCJzZXRJbW1lZGlhdGUiLCJuZXh0SGFuZGxlIiwidGFza3NCeUhhbmRsZSIsImN1cnJlbnRseVJ1bm5pbmdBVGFzayIsImRvYyIsImRvY3VtZW50IiwicmVnaXN0ZXJJbW1lZGlhdGUiLCJjYWxsYmFjayIsIkZ1bmN0aW9uIiwidGFzayIsImNsZWFySW1tZWRpYXRlIiwiaGFuZGxlIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJjYW5Vc2VQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJNYXRoIiwicmFuZG9tIiwib25HbG9iYWxNZXNzYWdlIiwiZXZlbnQiLCJzb3VyY2UiLCJkYXRhIiwiaW5kZXhPZiIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsInBvcnQyIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24iLCJhdHRhY2hUbyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwidG9TdHJpbmciLCJzZWxmIiwic2NvcGUiLCJ3aW5kb3ciLCJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJpZCIsImNsZWFyRm4iLCJfaWQiLCJfY2xlYXJGbiIsInVucmVmIiwicmVmIiwiZW5yb2xsIiwiaXRlbSIsIm1zZWNzIiwiX2lkbGVUaW1lb3V0SWQiLCJfaWRsZVRpbWVvdXQiLCJ1bmVucm9sbCIsIl91bnJlZkFjdGl2ZSIsImFjdGl2ZSIsIm9uVGltZW91dCIsIl9vblRpbWVvdXQiLCJyZXF1aXJlIiwiZyIsIiQiLCJqUXVlcnkiLCJyZWFkeSIsImNsaWNrIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInciLCJpbm5lcldpZHRoIiwiYXR0ciIsImxvYWQiLCJ0d2VudHl0d2VudHkiLCIkd2luZG93IiwiZmxleHNsaWRlciIsInZhcnMiLCJnZXRHcmlkU2l6ZSIsImVhY2giLCJmaW5kIiwiYW5pbWF0aW9uIiwic2xpZGVzaG93U3BlZWQiLCJhbmltYXRpb25Mb29wIiwiY29udHJvbE5hdiIsImN1c3RvbURpcmVjdGlvbk5hdiIsIm1pbkl0ZW1zIiwibWF4SXRlbXMiLCJzdGFydCIsInNsaWRlciIsInJlc2l6ZSIsImdyaWRTaXplIiwiZGVmaW5lIiwiYXNzaWduIiwiZXh0ZW5kIiwicCIsImEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJuIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJDdXN0b21FdmVudCIsIkV2ZW50IiwibyIsInRleHRhcmVhIiwiaW5wdXQiLCJzZWxlY3QiLCJidXR0b24iLCJjIiwibW92ZSIsImNhbmNlbCIsImVuZCIsInUiLCJyIiwiZCIsIlN5bWJvbCIsIm0iLCJ2Iiwic3BsaXQiLCJmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNwbGljZSIsImRpc3BhdGNoRXZlbnQiLCJzIiwia2ljayIsImgiLCJsIiwicHJldmVudERlZmF1bHQiLCJYIiwiaWRlbnRpZmllZFRvdWNoIiwiaWRlbnRpZmllciIsIlkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJUIiwieSIsImIiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInRhcmdldFRvdWNoZXMiLCJ0aW1lU3RhbXAiLCJhbHRLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJzdGFydFgiLCJzdGFydFkiLCJkaXN0WCIsImRpc3RZIiwiZGVsdGFYIiwiZGVsdGFZIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZmluZ2VyIiwiZW5hYmxlTW92ZSIsIm1vdmVFbmFibGVkIiwidGFyZ2V0IiwiRSIsInRpbWVyIiwidG91Y2giLCJTIiwiSyIsImsiLCJhY3RpdmVUb3VjaG1vdmUiLCJhY3RpdmVUb3VjaGVuZCIsIndoaWNoIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiZGVmYXVsdFByZXZlbnRlZCIsImoiLCJzcGVjaWFsIiwibW92ZXN0YXJ0Iiwic2V0dXAiLCJDIiwidGVhcmRvd24iLCJhZGQiLCJBIiwiUSIsIm1vdmVlbmQiLCJxIiwiaGFuZGxlciIsIm9yaWdpbmFsRXZlbnQiLCJydGwiLCJkZWZhdWx0cyIsIm5hbWVzcGFjZSIsIm5hdmlnYXRvciIsIm1zUG9pbnRlckVuYWJsZWQiLCJNU0dlc3R1cmUiLCJEb2N1bWVudFRvdWNoIiwiZGlyZWN0aW9uIiwicmV2ZXJzZSIsIml0ZW1XaWR0aCIsImFzTmF2Rm9yIiwiaW5pdCIsImFuaW1hdGluZyIsImN1cnJlbnRTbGlkZSIsInBhcnNlSW50Iiwic3RhcnRBdCIsImlzTmFOIiwiYW5pbWF0aW5nVG8iLCJhdEVuZCIsImxhc3QiLCJjb250YWluZXJTZWxlY3RvciIsInNlbGVjdG9yIiwic3Vic3RyIiwic2VhcmNoIiwic2xpZGVzIiwiY29udGFpbmVyIiwiY291bnQiLCJzeW5jRXhpc3RzIiwic3luYyIsInByb3AiLCJtYW51YWxQYXVzZSIsInN0b3BwZWQiLCJzdGFydGVkIiwic3RhcnRUaW1lb3V0IiwidHJhbnNpdGlvbnMiLCJ2aWRlbyIsInVzZUNTUyIsInN0eWxlIiwicGZ4IiwicmVwbGFjZSIsImlzRmlyZWZveCIsInVzZXJBZ2VudCIsImVuc3VyZUFuaW1hdGlvbkVuZCIsImNvbnRyb2xzQ29udGFpbmVyIiwibWFudWFsQ29udHJvbHMiLCJyYW5kb21pemUiLCJzb3J0Iiwicm91bmQiLCJlbXB0eSIsImFwcGVuZCIsImRvTWF0aCIsImRpcmVjdGlvbk5hdiIsImtleWJvYXJkIiwibXVsdGlwbGVLZXlib2FyZCIsImJpbmQiLCJrZXlDb2RlIiwiZ2V0VGFyZ2V0IiwiZmxleEFuaW1hdGUiLCJwYXVzZU9uQWN0aW9uIiwibW91c2V3aGVlbCIsInBhdXNlUGxheSIsInNsaWRlc2hvdyIsInBhdXNlSW52aXNpYmxlIiwicGF1c2VPbkhvdmVyIiwiaG92ZXIiLCJtYW51YWxQbGF5IiwicGF1c2UiLCJwbGF5IiwiaXNIaWRkZW4iLCJpbml0RGVsYXkiLCJhc05hdiIsInNtb290aEhlaWdodCIsImZsb29yIiwiY3VycmVudEl0ZW0iLCJlcSIsImFkZENsYXNzIiwiX3NsaWRlciIsIl9nZXN0dXJlIiwiY3VycmVudFRhcmdldCIsImFkZFBvaW50ZXIiLCJwb2ludGVySWQiLCJpbmRleCIsImhhc0NsYXNzIiwib2Zmc2V0IiwicmlnaHQiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNldHVwTWFudWFsIiwic2V0dXBQYWdpbmciLCJjb250cm9sTmF2U2NhZmZvbGQiLCJwYWdpbmdDb3VudCIsInRleHQiLCJ0aHVtYkNhcHRpb25zIiwiYXBwZW5kVG8iLCJzZXQiLCJkZWxlZ2F0ZSIsInR5cGUiLCJzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50IiwidXBkYXRlIiwicmVtb3ZlIiwiY2xvc2VzdCIsInByZXZUZXh0IiwibmV4dFRleHQiLCJyZW1vdmVBdHRyIiwiZmlsdGVyIiwicGxheVRleHQiLCJwYXVzZVRleHQiLCJzdG9wUHJvcGFnYXRpb24iLCJOdW1iZXIiLCJEYXRlIiwibGltaXQiLCJpdGVtVyIsIml0ZW1NYXJnaW4iLCJjbG9uZU9mZnNldCIsInRyYW5zbGF0aW9uWCIsInRyYW5zbGF0aW9uWSIsIngiLCJhYnMiLCJNU0dFU1RVUkVfRkxBR19JTkVSVElBIiwic3RvcCIsInNldFByb3BzIiwiY2FuQWR2YW5jZSIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaGVzIiwiaXMiLCJ3aWR0aCIsImNvbXB1dGVkVyIsInZpZXdwb3J0IiwiaGVpZ2h0IiwibmV3U2xpZGVzIiwiYW5pbWF0ZSIsImlubmVySGVpZ2h0IiwicGxheWluZyIsInVuaXF1ZUlEIiwidmlzUHJvcCIsImdldEhpZGRlblByb3AiLCJjZWlsIiwidmlzaWJsZSIsImJlZm9yZSIsImNzcyIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJ3cmFwdXAiLCJhbmltYXRpb25TcGVlZCIsImVhc2luZyIsInVuYmluZCIsImFmdGVyIiwiYW5pbWF0ZVNsaWRlcyIsImFuaW1hdGVkU2xpZGVzIiwibWFyZ2luTGVmdCIsInBvc2l0aW9uIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5Iiwid2Via2l0VHJhbnNpdGlvbiIsImZhZGVGaXJzdFNsaWRlIiwib3ZlcmZsb3ciLCJjbG9uZUNvdW50IiwibWFrZUFycmF5IiwiZmlyc3QiLCJjbG9uZSIsInByZXBlbmQiLCJjb21wdXRlZE0iLCJib3hQYWRkaW5nIiwib3V0ZXJXaWR0aCIsIml0ZW1UIiwiaXRlbU0iLCJtaW5XIiwibWF4VyIsImFkZFNsaWRlIiwiYWRkZWQiLCJyZW1vdmVTbGlkZSIsInJlbW92ZWQiLCJibHVyIiwiZm9jdXMiLCJhbGxvd09uZVNsaWRlIiwiZm4iLCJmYWRlSW4iLCJkZWZhdWx0X29mZnNldF9wY3QiLCJvcmllbnRhdGlvbiIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSIsIm1vdmVfc2xpZGVyX29uX2hvdmVyIiwibW92ZV93aXRoX2hhbmRsZV9vbmx5IiwiY2xpY2tfdG9fbW92ZSIsIndyYXAiLCJjdyIsImNoIiwibWF4IiwibWluIiwidG9wIiwiXyIsInRyaWdnZXIiLCJzbGlkZVRvZ2dsZSIsInNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzIiwiJG1lbnUiLCJ0b3BfbGV2ZWxfbGluayIsImNvbnNvbGUiLCJsb2ciLCJzaWJsaW5ncyIsInBhcmVudHMiLCJwYXJlbnQiLCJtb3VzZWVudGVyIiwiZmFkZU91dCIsImhhc2giLCJzY3JvbGxUb3AiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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LENBQUMwVSxJQUFELENBQUQsQ0FBUXpILE1BQVIsR0FBaUIyRztBQUROLE9BQXhCLEVBRUcsR0FGSCxFQUVRLFlBQVU7QUFFaEI7QUFDQW5WLGNBQU0sQ0FBQ21XLFFBQVAsQ0FBZ0JGLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNELE9BTkQ7QUFPRCxLQW5CZ0MsQ0FtQi9COztBQUNILEdBcEJEO0FBcUJELENBdkJELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKiovXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS5mbGV4c2xpZGVyLW1pbic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS5ldmVudC5tb3ZlLm1pbi5qcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS50d2VudHl0d2VudHkubWluLmpzJztcclxuXHJcbi8qKiBJbXBvcnQgQ3VzdG9tIGZpbGVzICoqL1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tZW51JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZnVsbC1pbWFnZS1mbGV4c2xpZGVyLWl0ZW0nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZXJ2aWNlcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jb250YWN0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc21vb3RoLXNjcm9sbCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL25ld3Mtc2xpZGVyJztcclxuLy9pbXBvcnQgJy4vY29tcG9uZW50cy9mcm9udC1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvNDA0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvZHVjdC1zbGlkZXInOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy90cmlnZ2VyIGRvd25sb2FkcyBzdWIgbWVudVxyXG4gICAgJCgnLnByb2R1Y3QtNDA0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmRvd25sb2FkcycpLnJlbW92ZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzJykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvL2NoYW5nZSBwcm9kdWN0IG1lbnUgbGluayBvbiBtb2JpbGVcclxuXHJcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIGlmKHcgPCAxMjAwKSB7XHJcbiAgICAgICQoJy5wcm9kdWN0LTQwNCcpLmF0dHIoJ2hyZWYnLCAnL3Byb2R1Y3RzJyk7XHJcbiAgICB9IFxyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdGlmKCQoJy5iYS1pbWFnZS1jb21wYXJpc29uJykubGVuZ3RoIHx8ICQoJy5wb3N0LWJhLWltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGgpIHtcclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIi5iYV9pbWFnZXNfdG9fY29tcGFyZVwiKS50d2VudHl0d2VudHkoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7ICAgXHJcbiAgICBpZih3IDwgMTIwMCkge1xyXG4gICAgICAgICQoJy5jb250YWN0LXVzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmNvbnRhY3QtY29sLTEnKS50b2dnbGVDbGFzcygnc2hvdy1jb2x1bW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcuY29udGFjdF9fY3Jvc3MnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuY29udGFjdC1jb2wtMScpLnJlbW92ZUNsYXNzKCdzaG93LWNvbHVtbicpO1xyXG4gICAgICAgICQoJy5jb250YWN0LWNvbC0yJykucmVtb3ZlQ2xhc3MoJ3Nob3ctY29sdW1uJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLm9wcG9ydHVuaXRpZXMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuY29udGFjdC1jb2wtMicpLnRvZ2dsZUNsYXNzKCdzaG93LWNvbHVtbicpO1xyXG4gICAgfSk7ICAgIFxyXG4gICAgfVxyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcblx0Ly8gc3RvcmUgdGhlIHNsaWRlciBpbiBhIGxvY2FsIHZhcmlhYmxlXHJcblx0dmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXHJcblx0XHRmbGV4c2xpZGVyID0geyB2YXJzOnt9IH07XHJcblxyXG5cdC8vIHRpbnkgaGVscGVyIGZ1bmN0aW9uIHRvIGFkZCBicmVha3BvaW50c1xyXG5cdGZ1bmN0aW9uIGdldEdyaWRTaXplKCkge1xyXG5cdFx0cmV0dXJuICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMCApID8gMSA6IDE7XHJcblx0fVxyXG5cclxuXHQkd2luZG93LnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdCAkKCcuZnVsbC1pbWFnZS1pdGVtLWZsZXhzbGlkZXItY29udGFpbmVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdCQodGhpcykuZmluZChcIi5mbGV4c2xpZGVyXCIpLmZsZXhzbGlkZXIoe1xyXG5cdFx0XHRcdGFuaW1hdGlvbjogXCJzbGlkZVwiLFxyXG5cdFx0XHRcdHNsaWRlc2hvd1NwZWVkOiAxMjAwMCxcclxuXHRcdFx0XHRhbmltYXRpb25Mb29wOiB0cnVlLFxyXG5cdFx0XHRcdGNvbnRyb2xOYXY6IGZhbHNlLFxyXG5cdFx0XHRcdGN1c3RvbURpcmVjdGlvbk5hdjogJCh0aGlzKS5maW5kKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIiksXHJcblx0XHRcdFx0bWluSXRlbXM6IGdldEdyaWRTaXplKCksIC8vIHVzZSBmdW5jdGlvbiB0byBwdWxsIGluIGluaXRpYWwgdmFsdWVcclxuXHRcdFx0XHRtYXhJdGVtczogZ2V0R3JpZFNpemUoKSwgLy8gdXNlIGZ1bmN0aW9uIHRvIHB1bGwgaW4gaW5pdGlhbCB2YWx1ZVxyXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbihzbGlkZXIpIHtcclxuXHRcdFx0XHRcdGZsZXhzbGlkZXIgPSBzbGlkZXI7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHQvLyBjaGVjayBncmlkIHNpemUgb24gcmVzaXplIGV2ZW50XHJcblx0JHdpbmRvdy5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgZ3JpZFNpemUgPSBnZXRHcmlkU2l6ZSgpO1xyXG5cdFx0ZmxleHNsaWRlci52YXJzLm1pbkl0ZW1zID0gZ3JpZFNpemU7XHJcblx0XHRmbGV4c2xpZGVyLnZhcnMubWF4SXRlbXMgPSBncmlkU2l6ZTtcclxuXHR9KTtcdFxyXG59KCkpOyIsIiFmdW5jdGlvbihlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm51bGwhPT1tb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWU6ZSgpfShmdW5jdGlvbigpe3ZhciBpPU9iamVjdC5hc3NpZ258fHdpbmRvdy5qUXVlcnkmJmpRdWVyeS5leHRlbmQscD04LGE9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSx0KXtyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKCl9LDI1KX07ZnVuY3Rpb24gZShlLHQpe3Q9dHx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBuLmluaXRDdXN0b21FdmVudChlLHQuYnViYmxlcyx0LmNhbmNlbGFibGUsdC5kZXRhaWwpLG59XCJmdW5jdGlvblwiIT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50JiYoZS5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSx3aW5kb3cuQ3VzdG9tRXZlbnQ9ZSk7dmFyIG89e3RleHRhcmVhOiEwLGlucHV0OiEwLHNlbGVjdDohMCxidXR0b246ITB9LGM9e21vdmU6XCJtb3VzZW1vdmVcIixjYW5jZWw6XCJtb3VzZXVwIGRyYWdzdGFydFwiLGVuZDpcIm1vdXNldXBcIn0sdT17bW92ZTpcInRvdWNobW92ZVwiLGNhbmNlbDpcInRvdWNoZW5kXCIsZW5kOlwidG91Y2hlbmRcIn0scj0vXFxzKy8sZD17YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSx0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbD9TeW1ib2woXCJldmVudHNcIik6e307ZnVuY3Rpb24gbShlKXtyZXR1cm4gZVt0XXx8KGVbdF09e30pfWZ1bmN0aW9uIHYoZSx0LG4sbyl7dD10LnNwbGl0KHIpO3ZhciBpLGE9bShlKSxjPXQubGVuZ3RoO2Z1bmN0aW9uIHUoZSl7bihlLG8pfWZvcig7Yy0tOykoYVtpPXRbY11dfHwoYVtpXT1bXSkpLnB1c2goW24sdV0pLGUuYWRkRXZlbnRMaXN0ZW5lcihpLHUpfWZ1bmN0aW9uIGYoZSx0LG4pe3Q9dC5zcGxpdChyKTt2YXIgbyxpLGEsYz1tKGUpLHU9dC5sZW5ndGg7aWYoYylmb3IoO3UtLTspaWYoaT1jW289dFt1XV0pZm9yKGE9aS5sZW5ndGg7YS0tOylpW2FdWzBdPT09biYmKGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLGlbYV1bMV0pLGkuc3BsaWNlKGEsMSkpfWZ1bmN0aW9uIGcoZSx0LG4pe3ZhciBvPW5ldyBDdXN0b21FdmVudCh0LGQpO24mJmkobyxuKSxlLmRpc3BhdGNoRXZlbnQobyl9ZnVuY3Rpb24gcyhlKXt2YXIgbj1lLG89ITEsaT0hMTtmdW5jdGlvbiB0KGUpe28/KG4oKSxhKHQpLG89IShpPSEwKSk6aT0hMX10aGlzLmtpY2s9ZnVuY3Rpb24oZSl7bz0hMCxpfHx0KCl9LHRoaXMuZW5kPWZ1bmN0aW9uKGUpe3ZhciB0PW47ZSYmKGk/KG49bz9mdW5jdGlvbigpe3QoKSxlKCl9OmUsbz0hMCk6ZSgpKX19ZnVuY3Rpb24gaCgpe31mdW5jdGlvbiBsKGUpe2UucHJldmVudERlZmF1bHQoKX1mdW5jdGlvbiBYKGUsdCl7dmFyIG4sbztpZihlLmlkZW50aWZpZWRUb3VjaClyZXR1cm4gZS5pZGVudGlmaWVkVG91Y2godCk7Zm9yKG49LTEsbz1lLmxlbmd0aDsrK248bzspaWYoZVtuXS5pZGVudGlmaWVyPT09dClyZXR1cm4gZVtuXX1mdW5jdGlvbiBZKGUsdCl7dmFyIG49WChlLmNoYW5nZWRUb3VjaGVzLHQuaWRlbnRpZmllcik7aWYobiYmKG4ucGFnZVghPT10LnBhZ2VYfHxuLnBhZ2VZIT09dC5wYWdlWSkpcmV0dXJuIG59ZnVuY3Rpb24gbihlLHQpe1QoZSx0LGUsdyl9ZnVuY3Rpb24geShlLHQpe3coKX1mdW5jdGlvbiB3KCl7Zihkb2N1bWVudCxjLm1vdmUsbiksZihkb2N1bWVudCxjLmNhbmNlbCx5KX1mdW5jdGlvbiBiKGUpe2YoZG9jdW1lbnQsdS5tb3ZlLGUudG91Y2htb3ZlKSxmKGRvY3VtZW50LHUuY2FuY2VsLGUudG91Y2hlbmQpfWZ1bmN0aW9uIFQoZSx0LG4sbyl7dmFyIGksYSxjLHUscixkLG0sdixmLHM9bi5wYWdlWC10LnBhZ2VYLGw9bi5wYWdlWS10LnBhZ2VZO3MqcytsKmw8cCpwfHwoYT10LGM9bix1PXMscj1sLGQ9byxtPShpPWUpLnRhcmdldFRvdWNoZXMsdj1pLnRpbWVTdGFtcC1hLnRpbWVTdGFtcCxmPXthbHRLZXk6aS5hbHRLZXksY3RybEtleTppLmN0cmxLZXksc2hpZnRLZXk6aS5zaGlmdEtleSxzdGFydFg6YS5wYWdlWCxzdGFydFk6YS5wYWdlWSxkaXN0WDp1LGRpc3RZOnIsZGVsdGFYOnUsZGVsdGFZOnIscGFnZVg6Yy5wYWdlWCxwYWdlWTpjLnBhZ2VZLHZlbG9jaXR5WDp1L3YsdmVsb2NpdHlZOnIvdixpZGVudGlmaWVyOmEuaWRlbnRpZmllcix0YXJnZXRUb3VjaGVzOm0sZmluZ2VyOm0/bS5sZW5ndGg6MSxlbmFibGVNb3ZlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlRW5hYmxlZD0hMCx0aGlzLmVuYWJsZU1vdmU9aCxpLnByZXZlbnREZWZhdWx0KCl9fSxnKGEudGFyZ2V0LFwibW92ZXN0YXJ0XCIsZiksZChhKSl9ZnVuY3Rpb24gRShlLHQpe3ZhciBuPXQudGltZXI7dC50b3VjaD1lLHQudGltZVN0YW1wPWUudGltZVN0YW1wLG4ua2ljaygpfWZ1bmN0aW9uIFMoZSx0KXt2YXIgbj10LnRhcmdldCxvPXQuZXZlbnQsaT10LnRpbWVyO2YoZG9jdW1lbnQsYy5tb3ZlLEUpLGYoZG9jdW1lbnQsYy5lbmQsUyksSyhuLG8saSxmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtmKG4sXCJjbGlja1wiLGwpfSwwKX0pfWZ1bmN0aW9uIGsoZSx0KXt2YXIgbixvPXQudGFyZ2V0LGk9dC5ldmVudCxhPXQudGltZXI7WChlLmNoYW5nZWRUb3VjaGVzLGkuaWRlbnRpZmllcikmJihuPXQsZihkb2N1bWVudCx1Lm1vdmUsbi5hY3RpdmVUb3VjaG1vdmUpLGYoZG9jdW1lbnQsdS5lbmQsbi5hY3RpdmVUb3VjaGVuZCksSyhvLGksYSkpfWZ1bmN0aW9uIEsoZSx0LG4sbyl7bi5lbmQoZnVuY3Rpb24oKXtyZXR1cm4gZyhlLFwibW92ZWVuZFwiLHQpLG8mJm8oKX0pfWlmKHYoZG9jdW1lbnQsXCJtb3VzZWRvd25cIixmdW5jdGlvbihlKXt2YXIgdDsxIT09KHQ9ZSkud2hpY2h8fHQuY3RybEtleXx8dC5hbHRLZXl8fG9bZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXXx8KHYoZG9jdW1lbnQsYy5tb3ZlLG4sZSksdihkb2N1bWVudCxjLmNhbmNlbCx5LGUpKX0pLHYoZG9jdW1lbnQsXCJ0b3VjaHN0YXJ0XCIsZnVuY3Rpb24oZSl7aWYoIW9bZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXSl7dmFyIHQ9ZS5jaGFuZ2VkVG91Y2hlc1swXSxuPXt0YXJnZXQ6dC50YXJnZXQscGFnZVg6dC5wYWdlWCxwYWdlWTp0LnBhZ2VZLGlkZW50aWZpZXI6dC5pZGVudGlmaWVyLHRvdWNobW92ZTpmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlLHQpe3ZhciBuPVkoZSx0KTtpZighbilyZXR1cm47VChlLHQsbixiKX0oZSx0KX0sdG91Y2hlbmQ6ZnVuY3Rpb24oZSx0KXshZnVuY3Rpb24oZSx0KXtpZighWChlLmNoYW5nZWRUb3VjaGVzLHQuaWRlbnRpZmllcikpcmV0dXJuO2IodCl9KGUsdCl9fTt2KGRvY3VtZW50LHUubW92ZSxuLnRvdWNobW92ZSxuKSx2KGRvY3VtZW50LHUuY2FuY2VsLG4udG91Y2hlbmQsbil9fSksdihkb2N1bWVudCxcIm1vdmVzdGFydFwiLGZ1bmN0aW9uKGUpe2lmKCFlLmRlZmF1bHRQcmV2ZW50ZWQmJmUubW92ZUVuYWJsZWQpe3ZhciB0PXtzdGFydFg6ZS5zdGFydFgsc3RhcnRZOmUuc3RhcnRZLHBhZ2VYOmUucGFnZVgscGFnZVk6ZS5wYWdlWSxkaXN0WDplLmRpc3RYLGRpc3RZOmUuZGlzdFksZGVsdGFYOmUuZGVsdGFYLGRlbHRhWTplLmRlbHRhWSx2ZWxvY2l0eVg6ZS52ZWxvY2l0eVgsdmVsb2NpdHlZOmUudmVsb2NpdHlZLGlkZW50aWZpZXI6ZS5pZGVudGlmaWVyLHRhcmdldFRvdWNoZXM6ZS50YXJnZXRUb3VjaGVzLGZpbmdlcjplLmZpbmdlcn0sbj17dGFyZ2V0OmUudGFyZ2V0LGV2ZW50OnQsdGltZXI6bmV3IHMoZnVuY3Rpb24oZSl7KGZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1uLWUudGltZVN0YW1wO2UuZGlzdFg9dC5wYWdlWC1lLnN0YXJ0WCxlLmRpc3RZPXQucGFnZVktZS5zdGFydFksZS5kZWx0YVg9dC5wYWdlWC1lLnBhZ2VYLGUuZGVsdGFZPXQucGFnZVktZS5wYWdlWSxlLnZlbG9jaXR5WD0uMyplLnZlbG9jaXR5WCsuNyplLmRlbHRhWC9vLGUudmVsb2NpdHlZPS4zKmUudmVsb2NpdHlZKy43KmUuZGVsdGFZL28sZS5wYWdlWD10LnBhZ2VYLGUucGFnZVk9dC5wYWdlWX0pKHQsbi50b3VjaCxuLnRpbWVTdGFtcCksZyhuLnRhcmdldCxcIm1vdmVcIix0KX0pLHRvdWNoOnZvaWQgMCx0aW1lU3RhbXA6ZS50aW1lU3RhbXB9O3ZvaWQgMD09PWUuaWRlbnRpZmllcj8odihlLnRhcmdldCxcImNsaWNrXCIsbCksdihkb2N1bWVudCxjLm1vdmUsRSxuKSx2KGRvY3VtZW50LGMuZW5kLFMsbikpOihuLmFjdGl2ZVRvdWNobW92ZT1mdW5jdGlvbihlLHQpe3ZhciBuLG8saSxhLGM7bj1lLGk9KG89dCkuZXZlbnQsYT1vLnRpbWVyLChjPVkobixpKSkmJihuLnByZXZlbnREZWZhdWx0KCksaS50YXJnZXRUb3VjaGVzPW4udGFyZ2V0VG91Y2hlcyxvLnRvdWNoPWMsby50aW1lU3RhbXA9bi50aW1lU3RhbXAsYS5raWNrKCkpfSxuLmFjdGl2ZVRvdWNoZW5kPWZ1bmN0aW9uKGUsdCl7ayhlLHQpfSx2KGRvY3VtZW50LHUubW92ZSxuLmFjdGl2ZVRvdWNobW92ZSxuKSx2KGRvY3VtZW50LHUuZW5kLG4uYWN0aXZlVG91Y2hlbmQsbikpfX0pLHdpbmRvdy5qUXVlcnkpe3ZhciBqPVwic3RhcnRYIHN0YXJ0WSBwYWdlWCBwYWdlWSBkaXN0WCBkaXN0WSBkZWx0YVggZGVsdGFZIHZlbG9jaXR5WCB2ZWxvY2l0eVlcIi5zcGxpdChcIiBcIik7alF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZXN0YXJ0PXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixDKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIsQyksITF9LGFkZDpBfSxqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixRKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIsUSksITF9LGFkZDpBfSxqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlZW5kPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixxKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIscSksITF9LGFkZDpBfX1mdW5jdGlvbiBDKGUpe2UuZW5hYmxlTW92ZSgpfWZ1bmN0aW9uIFEoZSl7ZS5lbmFibGVNb3ZlKCl9ZnVuY3Rpb24gcShlKXtlLmVuYWJsZU1vdmUoKX1mdW5jdGlvbiBBKGUpe3ZhciBvPWUuaGFuZGxlcjtlLmhhbmRsZXI9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49ai5sZW5ndGg7bi0tOyllW3Q9altuXV09ZS5vcmlnaW5hbEV2ZW50W3RdO28uYXBwbHkodGhpcyxhcmd1bWVudHMpfX19KTsiLCIvKlxyXG4gKiBqUXVlcnkgRmxleFNsaWRlciB2Mi43LjJcclxuICogQ29weXJpZ2h0IDIwMTIgV29vVGhlbWVzXHJcbiAqIENvbnRyaWJ1dGluZyBBdXRob3I6IFR5bGVyIFNtaXRoXHJcbiAqLyFmdW5jdGlvbigkKXt2YXIgZT0hMDskLmZsZXhzbGlkZXI9ZnVuY3Rpb24odCxhKXt2YXIgbj0kKHQpO3ZvaWQgMD09PWEucnRsJiZcInJ0bFwiPT0kKFwiaHRtbFwiKS5hdHRyKFwiZGlyXCIpJiYoYS5ydGw9ITApLG4udmFycz0kLmV4dGVuZCh7fSwkLmZsZXhzbGlkZXIuZGVmYXVsdHMsYSk7dmFyIGk9bi52YXJzLm5hbWVzcGFjZSxyPXdpbmRvdy5uYXZpZ2F0b3ImJndpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCYmd2luZG93Lk1TR2VzdHVyZSxzPShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHxyfHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKSYmbi52YXJzLnRvdWNoLG89XCJjbGljayB0b3VjaGVuZCBNU1BvaW50ZXJVcCBrZXl1cFwiLGw9XCJcIixjLGQ9XCJ2ZXJ0aWNhbFwiPT09bi52YXJzLmRpcmVjdGlvbix1PW4udmFycy5yZXZlcnNlLHY9bi52YXJzLml0ZW1XaWR0aD4wLHA9XCJmYWRlXCI9PT1uLnZhcnMuYW5pbWF0aW9uLG09XCJcIiE9PW4udmFycy5hc05hdkZvcixmPXt9OyQuZGF0YSh0LFwiZmxleHNsaWRlclwiLG4pLGY9e2luaXQ6ZnVuY3Rpb24oKXtuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1wYXJzZUludChuLnZhcnMuc3RhcnRBdD9uLnZhcnMuc3RhcnRBdDowLDEwKSxpc05hTihuLmN1cnJlbnRTbGlkZSkmJihuLmN1cnJlbnRTbGlkZT0wKSxuLmFuaW1hdGluZ1RvPW4uY3VycmVudFNsaWRlLG4uYXRFbmQ9MD09PW4uY3VycmVudFNsaWRlfHxuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCxuLmNvbnRhaW5lclNlbGVjdG9yPW4udmFycy5zZWxlY3Rvci5zdWJzdHIoMCxuLnZhcnMuc2VsZWN0b3Iuc2VhcmNoKFwiIFwiKSksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3Isbiksbi5jb250YWluZXI9JChuLmNvbnRhaW5lclNlbGVjdG9yLG4pLG4uY291bnQ9bi5zbGlkZXMubGVuZ3RoLG4uc3luY0V4aXN0cz0kKG4udmFycy5zeW5jKS5sZW5ndGg+MCxcInNsaWRlXCI9PT1uLnZhcnMuYW5pbWF0aW9uJiYobi52YXJzLmFuaW1hdGlvbj1cInN3aW5nXCIpLG4ucHJvcD1kP1widG9wXCI6bi52YXJzLnJ0bD9cIm1hcmdpblJpZ2h0XCI6XCJtYXJnaW5MZWZ0XCIsbi5hcmdzPXt9LG4ubWFudWFsUGF1c2U9ITEsbi5zdG9wcGVkPSExLG4uc3RhcnRlZD0hMSxuLnN0YXJ0VGltZW91dD1udWxsLG4udHJhbnNpdGlvbnM9IW4udmFycy52aWRlbyYmIXAmJm4udmFycy51c2VDU1MmJmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0PVtcInBlcnNwZWN0aXZlUHJvcGVydHlcIixcIldlYmtpdFBlcnNwZWN0aXZlXCIsXCJNb3pQZXJzcGVjdGl2ZVwiLFwiT1BlcnNwZWN0aXZlXCIsXCJtc1BlcnNwZWN0aXZlXCJdO2Zvcih2YXIgYSBpbiB0KWlmKHZvaWQgMCE9PWUuc3R5bGVbdFthXV0pcmV0dXJuIG4ucGZ4PXRbYV0ucmVwbGFjZShcIlBlcnNwZWN0aXZlXCIsXCJcIikudG9Mb3dlckNhc2UoKSxuLnByb3A9XCItXCIrbi5wZngrXCItdHJhbnNmb3JtXCIsITA7cmV0dXJuITF9KCksbi5pc0ZpcmVmb3g9bmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJmaXJlZm94XCIpPi0xLG4uZW5zdXJlQW5pbWF0aW9uRW5kPVwiXCIsXCJcIiE9PW4udmFycy5jb250cm9sc0NvbnRhaW5lciYmKG4uY29udHJvbHNDb250YWluZXI9JChuLnZhcnMuY29udHJvbHNDb250YWluZXIpLmxlbmd0aD4wJiYkKG4udmFycy5jb250cm9sc0NvbnRhaW5lcikpLFwiXCIhPT1uLnZhcnMubWFudWFsQ29udHJvbHMmJihuLm1hbnVhbENvbnRyb2xzPSQobi52YXJzLm1hbnVhbENvbnRyb2xzKS5sZW5ndGg+MCYmJChuLnZhcnMubWFudWFsQ29udHJvbHMpKSxcIlwiIT09bi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdiYmKG4uY3VzdG9tRGlyZWN0aW9uTmF2PTI9PT0kKG4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYpLmxlbmd0aCYmJChuLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2KSksbi52YXJzLnJhbmRvbWl6ZSYmKG4uc2xpZGVzLnNvcnQoZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKS0uNX0pLG4uY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKG4uc2xpZGVzKSksbi5kb01hdGgoKSxuLnNldHVwKFwiaW5pdFwiKSxuLnZhcnMuY29udHJvbE5hdiYmZi5jb250cm9sTmF2LnNldHVwKCksbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYuc2V0dXAoKSxuLnZhcnMua2V5Ym9hcmQmJigxPT09JChuLmNvbnRhaW5lclNlbGVjdG9yKS5sZW5ndGh8fG4udmFycy5tdWx0aXBsZUtleWJvYXJkKSYmJChkb2N1bWVudCkuYmluZChcImtleXVwXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5rZXlDb2RlO2lmKCFuLmFuaW1hdGluZyYmKDM5PT09dHx8Mzc9PT10KSl7dmFyIGE9bi52YXJzLnJ0bD8zNz09PXQ/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOjM5PT09dCYmbi5nZXRUYXJnZXQoXCJwcmV2XCIpOjM5PT09dD9uLmdldFRhcmdldChcIm5leHRcIik6Mzc9PT10JiZuLmdldFRhcmdldChcInByZXZcIik7bi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKX19KSxuLnZhcnMubW91c2V3aGVlbCYmbi5iaW5kKFwibW91c2V3aGVlbFwiLGZ1bmN0aW9uKGUsdCxhLGkpe2UucHJldmVudERlZmF1bHQoKTt2YXIgcj10PDA/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmZsZXhBbmltYXRlKHIsbi52YXJzLnBhdXNlT25BY3Rpb24pfSksbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkuc2V0dXAoKSxuLnZhcnMuc2xpZGVzaG93JiZuLnZhcnMucGF1c2VJbnZpc2libGUmJmYucGF1c2VJbnZpc2libGUuaW5pdCgpLG4udmFycy5zbGlkZXNob3cmJihuLnZhcnMucGF1c2VPbkhvdmVyJiZuLmhvdmVyKGZ1bmN0aW9uKCl7bi5tYW51YWxQbGF5fHxuLm1hbnVhbFBhdXNlfHxuLnBhdXNlKCl9LGZ1bmN0aW9uKCl7bi5tYW51YWxQYXVzZXx8bi5tYW51YWxQbGF5fHxuLnN0b3BwZWR8fG4ucGxheSgpfSksbi52YXJzLnBhdXNlSW52aXNpYmxlJiZmLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCl8fChuLnZhcnMuaW5pdERlbGF5PjA/bi5zdGFydFRpbWVvdXQ9c2V0VGltZW91dChuLnBsYXksbi52YXJzLmluaXREZWxheSk6bi5wbGF5KCkpKSxtJiZmLmFzTmF2LnNldHVwKCkscyYmbi52YXJzLnRvdWNoJiZmLnRvdWNoKCksKCFwfHxwJiZuLnZhcnMuc21vb3RoSGVpZ2h0KSYmJCh3aW5kb3cpLmJpbmQoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UgZm9jdXNcIixmLnJlc2l6ZSksbi5maW5kKFwiaW1nXCIpLmF0dHIoXCJkcmFnZ2FibGVcIixcImZhbHNlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLnZhcnMuc3RhcnQobil9LDIwMCl9LGFzTmF2OntzZXR1cDpmdW5jdGlvbigpe24uYXNOYXY9ITAsbi5hbmltYXRpbmdUbz1NYXRoLmZsb29yKG4uY3VycmVudFNsaWRlL24ubW92ZSksbi5jdXJyZW50SXRlbT1uLmN1cnJlbnRTbGlkZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKG4uY3VycmVudEl0ZW0pLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikscj8odC5fc2xpZGVyPW4sbi5zbGlkZXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLGUuX2dlc3R1cmUudGFyZ2V0PWUsZS5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUmJmUuY3VycmVudFRhcmdldC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKX0sITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZVRhcFwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGE9dC5pbmRleCgpOyQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKS5hbmltYXRpbmd8fHQuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fChuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGE/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwLCEwKSl9KX0pKTpuLnNsaWRlcy5vbihvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGE9dC5pbmRleCgpLHI7cj1uLnZhcnMucnRsPy0xKih0Lm9mZnNldCgpLnJpZ2h0LSQobikuc2Nyb2xsTGVmdCgpKTp0Lm9mZnNldCgpLmxlZnQtJChuKS5zY3JvbGxMZWZ0KCkscjw9MCYmdC5oYXNDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpP24uZmxleEFuaW1hdGUobi5nZXRUYXJnZXQoXCJwcmV2XCIpLCEwKTokKG4udmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIikuYW5pbWF0aW5nfHx0Lmhhc0NsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIil8fChuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGE/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwLCEwKSl9KX19LGNvbnRyb2xOYXY6e3NldHVwOmZ1bmN0aW9uKCl7bi5tYW51YWxDb250cm9scz9mLmNvbnRyb2xOYXYuc2V0dXBNYW51YWwoKTpmLmNvbnRyb2xOYXYuc2V0dXBQYWdpbmcoKX0sc2V0dXBQYWdpbmc6ZnVuY3Rpb24oKXt2YXIgZT1cInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2P1wiY29udHJvbC10aHVtYnNcIjpcImNvbnRyb2wtcGFnaW5nXCIsdD0xLGEscjtpZihuLmNvbnRyb2xOYXZTY2FmZm9sZD0kKCc8b2wgY2xhc3M9XCInK2krXCJjb250cm9sLW5hdiBcIitpK2UrJ1wiPjwvb2w+Jyksbi5wYWdpbmdDb3VudD4xKWZvcih2YXIgcz0wO3M8bi5wYWdpbmdDb3VudDtzKyspe2lmKHI9bi5zbGlkZXMuZXEocyksdm9pZCAwPT09ci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikmJnIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIsXCJcIiksYT0kKFwiPGE+PC9hPlwiKS5hdHRyKFwiaHJlZlwiLFwiI1wiKS50ZXh0KHQpLFwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXYmJihhPSQoXCI8aW1nLz5cIikuYXR0cihcInNyY1wiLHIuYXR0cihcImRhdGEtdGh1bWJcIikpKSxcIlwiIT09ci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikmJmEuYXR0cihcImFsdFwiLHIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpKSxcInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2JiYhMD09PW4udmFycy50aHVtYkNhcHRpb25zKXt2YXIgYz1yLmF0dHIoXCJkYXRhLXRodW1iY2FwdGlvblwiKTtpZihcIlwiIT09YyYmdm9pZCAwIT09Yyl7dmFyIGQ9JChcIjxzcGFuPjwvc3Bhbj5cIikuYWRkQ2xhc3MoaStcImNhcHRpb25cIikudGV4dChjKTthLmFwcGVuZChkKX19dmFyIHU9JChcIjxsaT5cIik7YS5hcHBlbmRUbyh1KSx1LmFwcGVuZChcIjwvbGk+XCIpLG4uY29udHJvbE5hdlNjYWZmb2xkLmFwcGVuZCh1KSx0Kyt9bi5jb250cm9sc0NvbnRhaW5lcj8kKG4uY29udHJvbHNDb250YWluZXIpLmFwcGVuZChuLmNvbnRyb2xOYXZTY2FmZm9sZCk6bi5hcHBlbmQobi5jb250cm9sTmF2U2NhZmZvbGQpLGYuY29udHJvbE5hdi5zZXQoKSxmLmNvbnRyb2xOYXYuYWN0aXZlKCksbi5jb250cm9sTmF2U2NhZmZvbGQuZGVsZWdhdGUoXCJhLCBpbWdcIixvLGZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxcIlwiPT09bHx8bD09PWUudHlwZSl7dmFyIHQ9JCh0aGlzKSxhPW4uY29udHJvbE5hdi5pbmRleCh0KTt0Lmhhc0NsYXNzKGkrXCJhY3RpdmVcIil8fChuLmRpcmVjdGlvbj1hPm4uY3VycmVudFNsaWRlP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbikpfVwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHNldHVwTWFudWFsOmZ1bmN0aW9uKCl7bi5jb250cm9sTmF2PW4ubWFudWFsQ29udHJvbHMsZi5jb250cm9sTmF2LmFjdGl2ZSgpLG4uY29udHJvbE5hdi5iaW5kKG8sZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCI9PT1sfHxsPT09ZS50eXBlKXt2YXIgdD0kKHRoaXMpLGE9bi5jb250cm9sTmF2LmluZGV4KHQpO3QuaGFzQ2xhc3MoaStcImFjdGl2ZVwiKXx8KGE+bi5jdXJyZW50U2xpZGU/bi5kaXJlY3Rpb249XCJuZXh0XCI6bi5kaXJlY3Rpb249XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKSl9XCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sc2V0OmZ1bmN0aW9uKCl7dmFyIGU9XCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdj9cImltZ1wiOlwiYVwiO24uY29udHJvbE5hdj0kKFwiLlwiK2krXCJjb250cm9sLW5hdiBsaSBcIitlLG4uY29udHJvbHNDb250YWluZXI/bi5jb250cm9sc0NvbnRhaW5lcjpuKX0sYWN0aXZlOmZ1bmN0aW9uKCl7bi5jb250cm9sTmF2LnJlbW92ZUNsYXNzKGkrXCJhY3RpdmVcIikuZXEobi5hbmltYXRpbmdUbykuYWRkQ2xhc3MoaStcImFjdGl2ZVwiKX0sdXBkYXRlOmZ1bmN0aW9uKGUsdCl7bi5wYWdpbmdDb3VudD4xJiZcImFkZFwiPT09ZT9uLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQoJCgnPGxpPjxhIGhyZWY9XCIjXCI+JytuLmNvdW50K1wiPC9hPjwvbGk+XCIpKToxPT09bi5wYWdpbmdDb3VudD9uLmNvbnRyb2xOYXZTY2FmZm9sZC5maW5kKFwibGlcIikucmVtb3ZlKCk6bi5jb250cm9sTmF2LmVxKHQpLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmUoKSxmLmNvbnRyb2xOYXYuc2V0KCksbi5wYWdpbmdDb3VudD4xJiZuLnBhZ2luZ0NvdW50IT09bi5jb250cm9sTmF2Lmxlbmd0aD9uLnVwZGF0ZSh0LGUpOmYuY29udHJvbE5hdi5hY3RpdmUoKX19LGRpcmVjdGlvbk5hdjp7c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT0kKCc8dWwgY2xhc3M9XCInK2krJ2RpcmVjdGlvbi1uYXZcIj48bGkgY2xhc3M9XCInK2krJ25hdi1wcmV2XCI+PGEgY2xhc3M9XCInK2krJ3ByZXZcIiBocmVmPVwiI1wiPicrbi52YXJzLnByZXZUZXh0Kyc8L2E+PC9saT48bGkgY2xhc3M9XCInK2krJ25hdi1uZXh0XCI+PGEgY2xhc3M9XCInK2krJ25leHRcIiBocmVmPVwiI1wiPicrbi52YXJzLm5leHRUZXh0K1wiPC9hPjwvbGk+PC91bD5cIik7bi5jdXN0b21EaXJlY3Rpb25OYXY/bi5kaXJlY3Rpb25OYXY9bi5jdXN0b21EaXJlY3Rpb25OYXY6bi5jb250cm9sc0NvbnRhaW5lcj8oJChuLmNvbnRyb2xzQ29udGFpbmVyKS5hcHBlbmQoZSksbi5kaXJlY3Rpb25OYXY9JChcIi5cIitpK1wiZGlyZWN0aW9uLW5hdiBsaSBhXCIsbi5jb250cm9sc0NvbnRhaW5lcikpOihuLmFwcGVuZChlKSxuLmRpcmVjdGlvbk5hdj0kKFwiLlwiK2krXCJkaXJlY3Rpb24tbmF2IGxpIGFcIixuKSksZi5kaXJlY3Rpb25OYXYudXBkYXRlKCksbi5kaXJlY3Rpb25OYXYuYmluZChvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdDtcIlwiIT09bCYmbCE9PWUudHlwZXx8KHQ9JCh0aGlzKS5oYXNDbGFzcyhpK1wibmV4dFwiKT9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpLG4uZmxleEFuaW1hdGUodCxuLnZhcnMucGF1c2VPbkFjdGlvbikpLFwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHVwZGF0ZTpmdW5jdGlvbigpe3ZhciBlPWkrXCJkaXNhYmxlZFwiOzE9PT1uLnBhZ2luZ0NvdW50P24uZGlyZWN0aW9uTmF2LmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi52YXJzLmFuaW1hdGlvbkxvb3A/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpOjA9PT1uLmFuaW1hdGluZ1RvP24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLmZpbHRlcihcIi5cIitpK1wicHJldlwiKS5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkuZmlsdGVyKFwiLlwiK2krXCJuZXh0XCIpLmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpfX0scGF1c2VQbGF5OntzZXR1cDpmdW5jdGlvbigpe3ZhciBlPSQoJzxkaXYgY2xhc3M9XCInK2krJ3BhdXNlcGxheVwiPjxhIGhyZWY9XCIjXCI+PC9hPjwvZGl2PicpO24uY29udHJvbHNDb250YWluZXI/KG4uY29udHJvbHNDb250YWluZXIuYXBwZW5kKGUpLG4ucGF1c2VQbGF5PSQoXCIuXCIraStcInBhdXNlcGxheSBhXCIsbi5jb250cm9sc0NvbnRhaW5lcikpOihuLmFwcGVuZChlKSxuLnBhdXNlUGxheT0kKFwiLlwiK2krXCJwYXVzZXBsYXkgYVwiLG4pKSxmLnBhdXNlUGxheS51cGRhdGUobi52YXJzLnNsaWRlc2hvdz9pK1wicGF1c2VcIjppK1wicGxheVwiKSxuLnBhdXNlUGxheS5iaW5kKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCIhPT1sJiZsIT09ZS50eXBlfHwoJCh0aGlzKS5oYXNDbGFzcyhpK1wicGF1c2VcIik/KG4ubWFudWFsUGF1c2U9ITAsbi5tYW51YWxQbGF5PSExLG4ucGF1c2UoKSk6KG4ubWFudWFsUGF1c2U9ITEsbi5tYW51YWxQbGF5PSEwLG4ucGxheSgpKSksXCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sdXBkYXRlOmZ1bmN0aW9uKGUpe1wicGxheVwiPT09ZT9uLnBhdXNlUGxheS5yZW1vdmVDbGFzcyhpK1wicGF1c2VcIikuYWRkQ2xhc3MoaStcInBsYXlcIikuaHRtbChuLnZhcnMucGxheVRleHQpOm4ucGF1c2VQbGF5LnJlbW92ZUNsYXNzKGkrXCJwbGF5XCIpLmFkZENsYXNzKGkrXCJwYXVzZVwiKS5odG1sKG4udmFycy5wYXVzZVRleHQpfX0sdG91Y2g6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksbi5hbmltYXRpbmc/ZS5wcmV2ZW50RGVmYXVsdCgpOihuLnBhdXNlKCksdC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKSx3PTAsYz1kP24uaDpuLncsZj1OdW1iZXIobmV3IERhdGUpLGw9diYmdSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnYmJnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86diYmbi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/bi5saW1pdDp2PyhuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5jdXJyZW50U2xpZGU6dT8obi5sYXN0LW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmM6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmMpfWZ1bmN0aW9uIGEoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYT1lLnRhcmdldC5fc2xpZGVyO2lmKGEpe3ZhciBuPS1lLnRyYW5zbGF0aW9uWCxpPS1lLnRyYW5zbGF0aW9uWTtpZih3Kz1kP2k6bixtPShhLnZhcnMucnRsPy0xOjEpKncseD1kP01hdGguYWJzKHcpPE1hdGguYWJzKC1uKTpNYXRoLmFicyh3KTxNYXRoLmFicygtaSksZS5kZXRhaWw9PT1lLk1TR0VTVFVSRV9GTEFHX0lORVJUSUEpcmV0dXJuIHZvaWQgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCl7dC5fZ2VzdHVyZS5zdG9wKCl9KTsoIXh8fE51bWJlcihuZXcgRGF0ZSktZj41MDApJiYoZS5wcmV2ZW50RGVmYXVsdCgpLCFwJiZhLnRyYW5zaXRpb25zJiYoYS52YXJzLmFuaW1hdGlvbkxvb3B8fChtPXcvKDA9PT1hLmN1cnJlbnRTbGlkZSYmdzwwfHxhLmN1cnJlbnRTbGlkZT09PWEubGFzdCYmdz4wP01hdGguYWJzKHcpL2MrMjoxKSksYS5zZXRQcm9wcyhsK20sXCJzZXRUb3VjaFwiKSkpfX1mdW5jdGlvbiBpKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9ZS50YXJnZXQuX3NsaWRlcjtpZih0KXtpZih0LmFuaW1hdGluZ1RvPT09dC5jdXJyZW50U2xpZGUmJiF4JiZudWxsIT09bSl7dmFyIGE9dT8tbTptLG49YT4wP3QuZ2V0VGFyZ2V0KFwibmV4dFwiKTp0LmdldFRhcmdldChcInByZXZcIik7dC5jYW5BZHZhbmNlKG4pJiYoTnVtYmVyKG5ldyBEYXRlKS1mPDU1MCYmTWF0aC5hYnMoYSk+NTB8fE1hdGguYWJzKGEpPmMvMik/dC5mbGV4QW5pbWF0ZShuLHQudmFycy5wYXVzZU9uQWN0aW9uKTpwfHx0LmZsZXhBbmltYXRlKHQuY3VycmVudFNsaWRlLHQudmFycy5wYXVzZU9uQWN0aW9uLCEwKX1zPW51bGwsbz1udWxsLG09bnVsbCxsPW51bGwsdz0wfX12YXIgcyxvLGwsYyxtLGYsZyxoLFMseD0hMSx5PTAsYj0wLHc9MDtyPyh0LnN0eWxlLm1zVG91Y2hBY3Rpb249XCJub25lXCIsdC5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLHQuX2dlc3R1cmUudGFyZ2V0PXQsdC5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGUsITEpLHQuX3NsaWRlcj1uLHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUNoYW5nZVwiLGEsITEpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUVuZFwiLGksITEpKTooZz1mdW5jdGlvbihlKXtuLmFuaW1hdGluZz9lLnByZXZlbnREZWZhdWx0KCk6KHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZHx8MT09PWUudG91Y2hlcy5sZW5ndGgpJiYobi5wYXVzZSgpLGM9ZD9uLmg6bi53LGY9TnVtYmVyKG5ldyBEYXRlKSx5PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxsPXYmJnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp2JiZ1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOnYmJm4uY3VycmVudFNsaWRlPT09bi5sYXN0P24ubGltaXQ6dj8obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uY3VycmVudFNsaWRlOnU/KG4ubGFzdC1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjLHM9ZD9iOnksbz1kP3k6Yix0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLFMsITEpKX0saD1mdW5jdGlvbihlKXt5PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxtPWQ/cy1iOihuLnZhcnMucnRsPy0xOjEpKihzLXkpLHg9ZD9NYXRoLmFicyhtKTxNYXRoLmFicyh5LW8pOk1hdGguYWJzKG0pPE1hdGguYWJzKGItbyk7dmFyIHQ9NTAwOygheHx8TnVtYmVyKG5ldyBEYXRlKS1mPjUwMCkmJihlLnByZXZlbnREZWZhdWx0KCksIXAmJm4udHJhbnNpdGlvbnMmJihuLnZhcnMuYW5pbWF0aW9uTG9vcHx8KG0vPTA9PT1uLmN1cnJlbnRTbGlkZSYmbTwwfHxuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmbT4wP01hdGguYWJzKG0pL2MrMjoxKSxuLnNldFByb3BzKGwrbSxcInNldFRvdWNoXCIpKSl9LFM9ZnVuY3Rpb24oZSl7aWYodC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsaCwhMSksbi5hbmltYXRpbmdUbz09PW4uY3VycmVudFNsaWRlJiYheCYmbnVsbCE9PW0pe3ZhciBhPXU/LW06bSxpPWE+MD9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpO24uY2FuQWR2YW5jZShpKSYmKE51bWJlcihuZXcgRGF0ZSktZjw1NTAmJk1hdGguYWJzKGEpPjUwfHxNYXRoLmFicyhhKT5jLzIpP24uZmxleEFuaW1hdGUoaSxuLnZhcnMucGF1c2VPbkFjdGlvbik6cHx8bi5mbGV4QW5pbWF0ZShuLmN1cnJlbnRTbGlkZSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMCl9dC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixTLCExKSxzPW51bGwsbz1udWxsLG09bnVsbCxsPW51bGx9LHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixnLCExKSl9LHJlc2l6ZTpmdW5jdGlvbigpeyFuLmFuaW1hdGluZyYmbi5pcyhcIjp2aXNpYmxlXCIpJiYodnx8bi5kb01hdGgoKSxwP2Yuc21vb3RoSGVpZ2h0KCk6dj8obi5zbGlkZXMud2lkdGgobi5jb21wdXRlZFcpLG4udXBkYXRlKG4ucGFnaW5nQ291bnQpLG4uc2V0UHJvcHMoKSk6ZD8obi52aWV3cG9ydC5oZWlnaHQobi5oKSxuLnNldFByb3BzKG4uaCxcInNldFRvdGFsXCIpKToobi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKSxuLm5ld1NsaWRlcy53aWR0aChuLmNvbXB1dGVkVyksbi5zZXRQcm9wcyhuLmNvbXB1dGVkVyxcInNldFRvdGFsXCIpKSl9LHNtb290aEhlaWdodDpmdW5jdGlvbihlKXtpZighZHx8cCl7dmFyIHQ9cD9uOm4udmlld3BvcnQ7ZT90LmFuaW1hdGUoe2hlaWdodDpuLnNsaWRlcy5lcShuLmFuaW1hdGluZ1RvKS5pbm5lckhlaWdodCgpfSxlKTp0LmlubmVySGVpZ2h0KG4uc2xpZGVzLmVxKG4uYW5pbWF0aW5nVG8pLmlubmVySGVpZ2h0KCkpfX0sc3luYzpmdW5jdGlvbihlKXt2YXIgdD0kKG4udmFycy5zeW5jKS5kYXRhKFwiZmxleHNsaWRlclwiKSxhPW4uYW5pbWF0aW5nVG87c3dpdGNoKGUpe2Nhc2VcImFuaW1hdGVcIjp0LmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24sITEsITApO2JyZWFrO2Nhc2VcInBsYXlcIjp0LnBsYXlpbmd8fHQuYXNOYXZ8fHQucGxheSgpO2JyZWFrO2Nhc2VcInBhdXNlXCI6dC5wYXVzZSgpO2JyZWFrfX0sdW5pcXVlSUQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZmlsdGVyKFwiW2lkXVwiKS5hZGQoZS5maW5kKFwiW2lkXVwiKSkuZWFjaChmdW5jdGlvbigpe3ZhciBlPSQodGhpcyk7ZS5hdHRyKFwiaWRcIixlLmF0dHIoXCJpZFwiKStcIl9jbG9uZVwiKX0pLGV9LHBhdXNlSW52aXNpYmxlOnt2aXNQcm9wOm51bGwsaW5pdDpmdW5jdGlvbigpe3ZhciBlPWYucGF1c2VJbnZpc2libGUuZ2V0SGlkZGVuUHJvcCgpO2lmKGUpe3ZhciB0PWUucmVwbGFjZSgvW0h8aF1pZGRlbi8sXCJcIikrXCJ2aXNpYmlsaXR5Y2hhbmdlXCI7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0LGZ1bmN0aW9uKCl7Zi5wYXVzZUludmlzaWJsZS5pc0hpZGRlbigpP24uc3RhcnRUaW1lb3V0P2NsZWFyVGltZW91dChuLnN0YXJ0VGltZW91dCk6bi5wYXVzZSgpOm4uc3RhcnRlZD9uLnBsYXkoKTpuLnZhcnMuaW5pdERlbGF5PjA/c2V0VGltZW91dChuLnBsYXksbi52YXJzLmluaXREZWxheSk6bi5wbGF5KCl9KX19LGlzSGlkZGVuOmZ1bmN0aW9uKCl7dmFyIGU9Zi5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7cmV0dXJuISFlJiZkb2N1bWVudFtlXX0sZ2V0SGlkZGVuUHJvcDpmdW5jdGlvbigpe3ZhciBlPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXTtpZihcImhpZGRlblwiaW4gZG9jdW1lbnQpcmV0dXJuXCJoaWRkZW5cIjtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKylpZihlW3RdK1wiSGlkZGVuXCJpbiBkb2N1bWVudClyZXR1cm4gZVt0XStcIkhpZGRlblwiO3JldHVybiBudWxsfX0sc2V0VG9DbGVhcldhdGNoZWRFdmVudDpmdW5jdGlvbigpe2NsZWFyVGltZW91dChjKSxjPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsPVwiXCJ9LDNlMyl9fSxuLmZsZXhBbmltYXRlPWZ1bmN0aW9uKGUsdCxhLHIsbyl7aWYobi52YXJzLmFuaW1hdGlvbkxvb3B8fGU9PT1uLmN1cnJlbnRTbGlkZXx8KG4uZGlyZWN0aW9uPWU+bi5jdXJyZW50U2xpZGU/XCJuZXh0XCI6XCJwcmV2XCIpLG0mJjE9PT1uLnBhZ2luZ0NvdW50JiYobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxlP1wibmV4dFwiOlwicHJldlwiKSwhbi5hbmltYXRpbmcmJihuLmNhbkFkdmFuY2UoZSxvKXx8YSkmJm4uaXMoXCI6dmlzaWJsZVwiKSl7aWYobSYmcil7dmFyIGw9JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpO2lmKG4uYXRFbmQ9MD09PWV8fGU9PT1uLmNvdW50LTEsbC5mbGV4QW5pbWF0ZShlLCEwLCExLCEwLG8pLG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08ZT9cIm5leHRcIjpcInByZXZcIixsLmRpcmVjdGlvbj1uLmRpcmVjdGlvbixNYXRoLmNlaWwoKGUrMSkvbi52aXNpYmxlKS0xPT09bi5jdXJyZW50U2xpZGV8fDA9PT1lKXJldHVybiBuLmN1cnJlbnRJdGVtPWUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLCExO24uY3VycmVudEl0ZW09ZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksZT1NYXRoLmZsb29yKGUvbi52aXNpYmxlKX1pZihuLmFuaW1hdGluZz0hMCxuLmFuaW1hdGluZ1RvPWUsdCYmbi5wYXVzZSgpLG4udmFycy5iZWZvcmUobiksbi5zeW5jRXhpc3RzJiYhbyYmZi5zeW5jKFwiYW5pbWF0ZVwiKSxuLnZhcnMuY29udHJvbE5hdiYmZi5jb250cm9sTmF2LmFjdGl2ZSgpLHZ8fG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxuLmF0RW5kPTA9PT1lfHxlPT09bi5sYXN0LG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpLGU9PT1uLmxhc3QmJihuLnZhcnMuZW5kKG4pLG4udmFycy5hbmltYXRpb25Mb29wfHxuLnBhdXNlKCkpLHApcz8obi5zbGlkZXMuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7b3BhY2l0eTowLHpJbmRleDoxfSksbi5zbGlkZXMuZXEoZSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OjJ9KSxuLndyYXB1cChjKSk6KG4uc2xpZGVzLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoxfSkuYW5pbWF0ZSh7b3BhY2l0eTowfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyksbi5zbGlkZXMuZXEoZSkuY3NzKHt6SW5kZXg6Mn0pLmFuaW1hdGUoe29wYWNpdHk6MX0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcsbi53cmFwdXApKTtlbHNle3ZhciBjPWQ/bi5zbGlkZXMuZmlsdGVyKFwiOmZpcnN0XCIpLmhlaWdodCgpOm4uY29tcHV0ZWRXLGcsaCxTO3Y/KGc9bi52YXJzLml0ZW1NYXJnaW4sUz0obi5pdGVtVytnKSpuLm1vdmUqbi5hbmltYXRpbmdUbyxoPVM+bi5saW1pdCYmMSE9PW4udmlzaWJsZT9uLmxpbWl0OlMpOmg9MD09PW4uY3VycmVudFNsaWRlJiZlPT09bi5jb3VudC0xJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmXCJuZXh0XCIhPT1uLmRpcmVjdGlvbj91PyhuLmNvdW50K24uY2xvbmVPZmZzZXQpKmM6MDpuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmMD09PWUmJm4udmFycy5hbmltYXRpb25Mb29wJiZcInByZXZcIiE9PW4uZGlyZWN0aW9uP3U/MDoobi5jb3VudCsxKSpjOnU/KG4uY291bnQtMS1lK24uY2xvbmVPZmZzZXQpKmM6KGUrbi5jbG9uZU9mZnNldCkqYyxuLnNldFByb3BzKGgsXCJcIixuLnZhcnMuYW5pbWF0aW9uU3BlZWQpLG4udHJhbnNpdGlvbnM/KG4udmFycy5hbmltYXRpb25Mb29wJiZuLmF0RW5kfHwobi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9bi5hbmltYXRpbmdUbyksbi5jb250YWluZXIudW5iaW5kKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpLG4uY29udGFpbmVyLmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIixmdW5jdGlvbigpe2NsZWFyVGltZW91dChuLmVuc3VyZUFuaW1hdGlvbkVuZCksbi53cmFwdXAoYyl9KSxjbGVhclRpbWVvdXQobi5lbnN1cmVBbmltYXRpb25FbmQpLG4uZW5zdXJlQW5pbWF0aW9uRW5kPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLndyYXB1cChjKX0sbi52YXJzLmFuaW1hdGlvblNwZWVkKzEwMCkpOm4uY29udGFpbmVyLmFuaW1hdGUobi5hcmdzLG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nLGZ1bmN0aW9uKCl7bi53cmFwdXAoYyl9KX1uLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodChuLnZhcnMuYW5pbWF0aW9uU3BlZWQpfX0sbi53cmFwdXA9ZnVuY3Rpb24oZSl7cHx8dnx8KDA9PT1uLmN1cnJlbnRTbGlkZSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdCYmbi52YXJzLmFuaW1hdGlvbkxvb3A/bi5zZXRQcm9wcyhlLFwianVtcEVuZFwiKTpuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmMD09PW4uYW5pbWF0aW5nVG8mJm4udmFycy5hbmltYXRpb25Mb29wJiZuLnNldFByb3BzKGUsXCJqdW1wU3RhcnRcIikpLG4uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPW4uYW5pbWF0aW5nVG8sbi52YXJzLmFmdGVyKG4pfSxuLmFuaW1hdGVTbGlkZXM9ZnVuY3Rpb24oKXshbi5hbmltYXRpbmcmJmUmJm4uZmxleEFuaW1hdGUobi5nZXRUYXJnZXQoXCJuZXh0XCIpKX0sbi5wYXVzZT1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwobi5hbmltYXRlZFNsaWRlcyksbi5hbmltYXRlZFNsaWRlcz1udWxsLG4ucGxheWluZz0hMSxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS51cGRhdGUoXCJwbGF5XCIpLG4uc3luY0V4aXN0cyYmZi5zeW5jKFwicGF1c2VcIil9LG4ucGxheT1mdW5jdGlvbigpe24ucGxheWluZyYmY2xlYXJJbnRlcnZhbChuLmFuaW1hdGVkU2xpZGVzKSxuLmFuaW1hdGVkU2xpZGVzPW4uYW5pbWF0ZWRTbGlkZXN8fHNldEludGVydmFsKG4uYW5pbWF0ZVNsaWRlcyxuLnZhcnMuc2xpZGVzaG93U3BlZWQpLG4uc3RhcnRlZD1uLnBsYXlpbmc9ITAsbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkudXBkYXRlKFwicGF1c2VcIiksbi5zeW5jRXhpc3RzJiZmLnN5bmMoXCJwbGF5XCIpfSxuLnN0b3A9ZnVuY3Rpb24oKXtuLnBhdXNlKCksbi5zdG9wcGVkPSEwfSxuLmNhbkFkdmFuY2U9ZnVuY3Rpb24oZSx0KXt2YXIgYT1tP24ucGFnaW5nQ291bnQtMTpuLmxhc3Q7cmV0dXJuISF0fHwoISghbXx8bi5jdXJyZW50SXRlbSE9PW4uY291bnQtMXx8MCE9PWV8fFwicHJldlwiIT09bi5kaXJlY3Rpb24pfHwoIW18fDAhPT1uLmN1cnJlbnRJdGVtfHxlIT09bi5wYWdpbmdDb3VudC0xfHxcIm5leHRcIj09PW4uZGlyZWN0aW9uKSYmKCEoZT09PW4uY3VycmVudFNsaWRlJiYhbSkmJighIW4udmFycy5hbmltYXRpb25Mb29wfHwoIW4uYXRFbmR8fDAhPT1uLmN1cnJlbnRTbGlkZXx8ZSE9PWF8fFwibmV4dFwiPT09bi5kaXJlY3Rpb24pJiYoIW4uYXRFbmR8fG4uY3VycmVudFNsaWRlIT09YXx8MCE9PWV8fFwibmV4dFwiIT09bi5kaXJlY3Rpb24pKSkpfSxuLmdldFRhcmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbi5kaXJlY3Rpb249ZSxcIm5leHRcIj09PWU/bi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/MDpuLmN1cnJlbnRTbGlkZSsxOjA9PT1uLmN1cnJlbnRTbGlkZT9uLmxhc3Q6bi5jdXJyZW50U2xpZGUtMX0sbi5zZXRQcm9wcz1mdW5jdGlvbihlLHQsYSl7dmFyIGk9ZnVuY3Rpb24oKXt2YXIgYT1lfHwobi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG87cmV0dXJuIGZ1bmN0aW9uKCl7aWYodilyZXR1cm5cInNldFRvdWNoXCI9PT10P2U6dSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86bi5hbmltYXRpbmdUbz09PW4ubGFzdD9uLmxpbWl0OmE7c3dpdGNoKHQpe2Nhc2VcInNldFRvdGFsXCI6cmV0dXJuIHU/KG4uY291bnQtMS1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSplOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSplO2Nhc2VcInNldFRvdWNoXCI6cmV0dXJuIGU7Y2FzZVwianVtcEVuZFwiOnJldHVybiB1P2U6bi5jb3VudCplO2Nhc2VcImp1bXBTdGFydFwiOnJldHVybiB1P24uY291bnQqZTplO2RlZmF1bHQ6cmV0dXJuIGV9fSgpKihuLnZhcnMucnRsPzE6LTEpK1wicHhcIn0oKTtuLnRyYW5zaXRpb25zJiYoaT1uLmlzRmlyZWZveD9kP1widHJhbnNsYXRlM2QoMCxcIitpK1wiLDApXCI6XCJ0cmFuc2xhdGUzZChcIitwYXJzZUludChpKStcInB4LDAsMClcIjpkP1widHJhbnNsYXRlM2QoMCxcIitpK1wiLDApXCI6XCJ0cmFuc2xhdGUzZChcIisobi52YXJzLnJ0bD8tMToxKSpwYXJzZUludChpKStcInB4LDAsMClcIixhPXZvaWQgMCE9PWE/YS8xZTMrXCJzXCI6XCIwc1wiLG4uY29udGFpbmVyLmNzcyhcIi1cIituLnBmeCtcIi10cmFuc2l0aW9uLWR1cmF0aW9uXCIsYSksbi5jb250YWluZXIuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLGEpKSxuLmFyZ3Nbbi5wcm9wXT1pLChuLnRyYW5zaXRpb25zfHx2b2lkIDA9PT1hKSYmbi5jb250YWluZXIuY3NzKG4uYXJncyksbi5jb250YWluZXIuY3NzKFwidHJhbnNmb3JtXCIsaSl9LG4uc2V0dXA9ZnVuY3Rpb24oZSl7aWYocCluLnZhcnMucnRsP24uc2xpZGVzLmNzcyh7d2lkdGg6XCIxMDAlXCIsZmxvYXQ6XCJyaWdodFwiLG1hcmdpbkxlZnQ6XCItMTAwJVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pOm4uc2xpZGVzLmNzcyh7d2lkdGg6XCIxMDAlXCIsZmxvYXQ6XCJsZWZ0XCIsbWFyZ2luUmlnaHQ6XCItMTAwJVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLFwiaW5pdFwiPT09ZSYmKHM/bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsd2Via2l0VHJhbnNpdGlvbjpcIm9wYWNpdHkgXCIrbi52YXJzLmFuaW1hdGlvblNwZWVkLzFlMytcInMgZWFzZVwiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7b3BhY2l0eToxLHpJbmRleDoyfSk6MD09bi52YXJzLmZhZGVGaXJzdFNsaWRlP24uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjJ9KS5jc3Moe29wYWNpdHk6MX0pOm4uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjJ9KS5hbmltYXRlKHtvcGFjaXR5OjF9LG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nKSksbi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKTtlbHNle3ZhciB0LGE7XCJpbml0XCI9PT1lJiYobi52aWV3cG9ydD0kKCc8ZGl2IGNsYXNzPVwiJytpKyd2aWV3cG9ydFwiPjwvZGl2PicpLmNzcyh7b3ZlcmZsb3c6XCJoaWRkZW5cIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KS5hcHBlbmRUbyhuKS5hcHBlbmQobi5jb250YWluZXIpLG4uY2xvbmVDb3VudD0wLG4uY2xvbmVPZmZzZXQ9MCx1JiYoYT0kLm1ha2VBcnJheShuLnNsaWRlcykucmV2ZXJzZSgpLG4uc2xpZGVzPSQoYSksbi5jb250YWluZXIuZW1wdHkoKS5hcHBlbmQobi5zbGlkZXMpKSksbi52YXJzLmFuaW1hdGlvbkxvb3AmJiF2JiYobi5jbG9uZUNvdW50PTIsbi5jbG9uZU9mZnNldD0xLFwiaW5pdFwiIT09ZSYmbi5jb250YWluZXIuZmluZChcIi5jbG9uZVwiKS5yZW1vdmUoKSxuLmNvbnRhaW5lci5hcHBlbmQoZi51bmlxdWVJRChuLnNsaWRlcy5maXJzdCgpLmNsb25lKCkuYWRkQ2xhc3MoXCJjbG9uZVwiKSkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKS5wcmVwZW5kKGYudW5pcXVlSUQobi5zbGlkZXMubGFzdCgpLmNsb25lKCkuYWRkQ2xhc3MoXCJjbG9uZVwiKSkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKSksbi5uZXdTbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IsbiksdD11P24uY291bnQtMS1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0Om4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQsZCYmIXY/KG4uY29udGFpbmVyLmhlaWdodCgyMDAqKG4uY291bnQrbi5jbG9uZUNvdW50KStcIiVcIikuY3NzKFwicG9zaXRpb25cIixcImFic29sdXRlXCIpLndpZHRoKFwiMTAwJVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5uZXdTbGlkZXMuY3NzKHtkaXNwbGF5OlwiYmxvY2tcIn0pLG4uZG9NYXRoKCksbi52aWV3cG9ydC5oZWlnaHQobi5oKSxuLnNldFByb3BzKHQqbi5oLFwiaW5pdFwiKX0sXCJpbml0XCI9PT1lPzEwMDowKSk6KG4uY29udGFpbmVyLndpZHRoKDIwMCoobi5jb3VudCtuLmNsb25lQ291bnQpK1wiJVwiKSxuLnNldFByb3BzKHQqbi5jb21wdXRlZFcsXCJpbml0XCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLmRvTWF0aCgpLG4udmFycy5ydGwmJm4uaXNGaXJlZm94P24ubmV3U2xpZGVzLmNzcyh7d2lkdGg6bi5jb21wdXRlZFcsbWFyZ2luUmlnaHQ6bi5jb21wdXRlZE0sZmxvYXQ6XCJyaWdodFwiLGRpc3BsYXk6XCJibG9ja1wifSk6bi5uZXdTbGlkZXMuY3NzKHt3aWR0aDpuLmNvbXB1dGVkVyxtYXJnaW5SaWdodDpuLmNvbXB1dGVkTSxmbG9hdDpcImxlZnRcIixkaXNwbGF5OlwiYmxvY2tcIn0pLG4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KCl9LFwiaW5pdFwiPT09ZT8xMDA6MCkpfXZ8fG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEobi5jdXJyZW50U2xpZGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksbi52YXJzLmluaXQobil9LG4uZG9NYXRoPWZ1bmN0aW9uKCl7dmFyIGU9bi5zbGlkZXMuZmlyc3QoKSx0PW4udmFycy5pdGVtTWFyZ2luLGE9bi52YXJzLm1pbkl0ZW1zLGk9bi52YXJzLm1heEl0ZW1zO24udz12b2lkIDA9PT1uLnZpZXdwb3J0P24ud2lkdGgoKTpuLnZpZXdwb3J0LndpZHRoKCksbi5pc0ZpcmVmb3gmJihuLnc9bi53aWR0aCgpKSxuLmg9ZS5oZWlnaHQoKSxuLmJveFBhZGRpbmc9ZS5vdXRlcldpZHRoKCktZS53aWR0aCgpLHY/KG4uaXRlbVQ9bi52YXJzLml0ZW1XaWR0aCt0LG4uaXRlbU09dCxuLm1pblc9YT9hKm4uaXRlbVQ6bi53LG4ubWF4Vz1pP2kqbi5pdGVtVC10Om4udyxuLml0ZW1XPW4ubWluVz5uLnc/KG4udy10KihhLTEpKS9hOm4ubWF4VzxuLnc/KG4udy10KihpLTEpKS9pOm4udmFycy5pdGVtV2lkdGg+bi53P24udzpuLnZhcnMuaXRlbVdpZHRoLG4udmlzaWJsZT1NYXRoLmZsb29yKG4udy9uLml0ZW1XKSxuLm1vdmU9bi52YXJzLm1vdmU+MCYmbi52YXJzLm1vdmU8bi52aXNpYmxlP24udmFycy5tb3ZlOm4udmlzaWJsZSxuLnBhZ2luZ0NvdW50PU1hdGguY2VpbCgobi5jb3VudC1uLnZpc2libGUpL24ubW92ZSsxKSxuLmxhc3Q9bi5wYWdpbmdDb3VudC0xLG4ubGltaXQ9MT09PW4ucGFnaW5nQ291bnQ/MDpuLnZhcnMuaXRlbVdpZHRoPm4udz9uLml0ZW1XKihuLmNvdW50LTEpK3QqKG4uY291bnQtMSk6KG4uaXRlbVcrdCkqbi5jb3VudC1uLnctdCk6KG4uaXRlbVc9bi53LG4uaXRlbU09dCxuLnBhZ2luZ0NvdW50PW4uY291bnQsbi5sYXN0PW4uY291bnQtMSksbi5jb21wdXRlZFc9bi5pdGVtVy1uLmJveFBhZGRpbmcsbi5jb21wdXRlZE09bi5pdGVtTX0sbi51cGRhdGU9ZnVuY3Rpb24oZSx0KXtuLmRvTWF0aCgpLHZ8fChlPG4uY3VycmVudFNsaWRlP24uY3VycmVudFNsaWRlKz0xOmU8PW4uY3VycmVudFNsaWRlJiYwIT09ZSYmKG4uY3VycmVudFNsaWRlLT0xKSxuLmFuaW1hdGluZ1RvPW4uY3VycmVudFNsaWRlKSxuLnZhcnMuY29udHJvbE5hdiYmIW4ubWFudWFsQ29udHJvbHMmJihcImFkZFwiPT09dCYmIXZ8fG4ucGFnaW5nQ291bnQ+bi5jb250cm9sTmF2Lmxlbmd0aD9mLmNvbnRyb2xOYXYudXBkYXRlKFwiYWRkXCIpOihcInJlbW92ZVwiPT09dCYmIXZ8fG4ucGFnaW5nQ291bnQ8bi5jb250cm9sTmF2Lmxlbmd0aCkmJih2JiZuLmN1cnJlbnRTbGlkZT5uLmxhc3QmJihuLmN1cnJlbnRTbGlkZS09MSxuLmFuaW1hdGluZ1RvLT0xKSxmLmNvbnRyb2xOYXYudXBkYXRlKFwicmVtb3ZlXCIsbi5sYXN0KSkpLG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpfSxuLmFkZFNsaWRlPWZ1bmN0aW9uKGUsdCl7dmFyIGE9JChlKTtuLmNvdW50Kz0xLG4ubGFzdD1uLmNvdW50LTEsZCYmdT92b2lkIDAhPT10P24uc2xpZGVzLmVxKG4uY291bnQtdCkuYWZ0ZXIoYSk6bi5jb250YWluZXIucHJlcGVuZChhKTp2b2lkIDAhPT10P24uc2xpZGVzLmVxKHQpLmJlZm9yZShhKTpuLmNvbnRhaW5lci5hcHBlbmQoYSksbi51cGRhdGUodCxcImFkZFwiKSxuLnNsaWRlcz0kKG4udmFycy5zZWxlY3RvcitcIjpub3QoLmNsb25lKVwiLG4pLG4uc2V0dXAoKSxuLnZhcnMuYWRkZWQobil9LG4ucmVtb3ZlU2xpZGU9ZnVuY3Rpb24oZSl7dmFyIHQ9aXNOYU4oZSk/bi5zbGlkZXMuaW5kZXgoJChlKSk6ZTtuLmNvdW50LT0xLG4ubGFzdD1uLmNvdW50LTEsaXNOYU4oZSk/JChlLG4uc2xpZGVzKS5yZW1vdmUoKTpkJiZ1P24uc2xpZGVzLmVxKG4ubGFzdCkucmVtb3ZlKCk6bi5zbGlkZXMuZXEoZSkucmVtb3ZlKCksbi5kb01hdGgoKSxuLnVwZGF0ZSh0LFwicmVtb3ZlXCIpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yK1wiOm5vdCguY2xvbmUpXCIsbiksbi5zZXR1cCgpLG4udmFycy5yZW1vdmVkKG4pfSxmLmluaXQoKX0sJCh3aW5kb3cpLmJsdXIoZnVuY3Rpb24odCl7ZT0hMX0pLmZvY3VzKGZ1bmN0aW9uKHQpe2U9ITB9KSwkLmZsZXhzbGlkZXIuZGVmYXVsdHM9e25hbWVzcGFjZTpcImZsZXgtXCIsc2VsZWN0b3I6XCIuc2xpZGVzID4gbGlcIixhbmltYXRpb246XCJmYWRlXCIsZWFzaW5nOlwic3dpbmdcIixkaXJlY3Rpb246XCJob3Jpem9udGFsXCIscmV2ZXJzZTohMSxhbmltYXRpb25Mb29wOiEwLHNtb290aEhlaWdodDohMSxzdGFydEF0OjAsc2xpZGVzaG93OiEwLHNsaWRlc2hvd1NwZWVkOjdlMyxhbmltYXRpb25TcGVlZDo2MDAsaW5pdERlbGF5OjAscmFuZG9taXplOiExLGZhZGVGaXJzdFNsaWRlOiEwLHRodW1iQ2FwdGlvbnM6ITEscGF1c2VPbkFjdGlvbjohMCxwYXVzZU9uSG92ZXI6ITEscGF1c2VJbnZpc2libGU6ITAsdXNlQ1NTOiEwLHRvdWNoOiEwLHZpZGVvOiExLGNvbnRyb2xOYXY6ITAsZGlyZWN0aW9uTmF2OiEwLHByZXZUZXh0OlwiUHJldmlvdXNcIixuZXh0VGV4dDpcIk5leHRcIixrZXlib2FyZDohMCxtdWx0aXBsZUtleWJvYXJkOiExLG1vdXNld2hlZWw6ITEscGF1c2VQbGF5OiExLHBhdXNlVGV4dDpcIlBhdXNlXCIscGxheVRleHQ6XCJQbGF5XCIsY29udHJvbHNDb250YWluZXI6XCJcIixtYW51YWxDb250cm9sczpcIlwiLGN1c3RvbURpcmVjdGlvbk5hdjpcIlwiLHN5bmM6XCJcIixhc05hdkZvcjpcIlwiLGl0ZW1XaWR0aDowLGl0ZW1NYXJnaW46MCxtaW5JdGVtczoxLG1heEl0ZW1zOjAsbW92ZTowLGFsbG93T25lU2xpZGU6ITAsaXNGaXJlZm94OiExLHN0YXJ0OmZ1bmN0aW9uKCl7fSxiZWZvcmU6ZnVuY3Rpb24oKXt9LGFmdGVyOmZ1bmN0aW9uKCl7fSxlbmQ6ZnVuY3Rpb24oKXt9LGFkZGVkOmZ1bmN0aW9uKCl7fSxyZW1vdmVkOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7fSxydGw6ITF9LCQuZm4uZmxleHNsaWRlcj1mdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lJiYoZT17fSksXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PSQodGhpcyksYT1lLnNlbGVjdG9yP2Uuc2VsZWN0b3I6XCIuc2xpZGVzID4gbGlcIixuPXQuZmluZChhKTsxPT09bi5sZW5ndGgmJiExPT09ZS5hbGxvd09uZVNsaWRlfHwwPT09bi5sZW5ndGg/KG4uZmFkZUluKDQwMCksZS5zdGFydCYmZS5zdGFydCh0KSk6dm9pZCAwPT09dC5kYXRhKFwiZmxleHNsaWRlclwiKSYmbmV3ICQuZmxleHNsaWRlcih0aGlzLGUpfSk7dmFyIHQ9JCh0aGlzKS5kYXRhKFwiZmxleHNsaWRlclwiKTtzd2l0Y2goZSl7Y2FzZVwicGxheVwiOnQucGxheSgpO2JyZWFrO2Nhc2VcInBhdXNlXCI6dC5wYXVzZSgpO2JyZWFrO2Nhc2VcInN0b3BcIjp0LnN0b3AoKTticmVhaztjYXNlXCJuZXh0XCI6dC5mbGV4QW5pbWF0ZSh0LmdldFRhcmdldChcIm5leHRcIiksITApO2JyZWFrO2Nhc2VcInByZXZcIjpjYXNlXCJwcmV2aW91c1wiOnQuZmxleEFuaW1hdGUodC5nZXRUYXJnZXQoXCJwcmV2XCIpLCEwKTticmVhaztkZWZhdWx0OlwibnVtYmVyXCI9PXR5cGVvZiBlJiZ0LmZsZXhBbmltYXRlKGUsITApfX19KGpRdWVyeSk7IiwiIWZ1bmN0aW9uKGcpe2cuZm4udHdlbnR5dHdlbnR5PWZ1bmN0aW9uKG0pe209Zy5leHRlbmQoe2RlZmF1bHRfb2Zmc2V0X3BjdDouNSxvcmllbnRhdGlvbjpcImhvcml6b250YWxcIixiZWZvcmVfbGFiZWw6XCJCZWZvcmVcIixhZnRlcl9sYWJlbDpcIkFmdGVyXCIsbm9fb3ZlcmxheTohMSxtb3ZlX3NsaWRlcl9vbl9ob3ZlcjohMSxtb3ZlX3dpdGhfaGFuZGxlX29ubHk6ITAsY2xpY2tfdG9fbW92ZTohMX0sbSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPW0uZGVmYXVsdF9vZmZzZXRfcGN0LHM9Zyh0aGlzKSxyPW0ub3JpZW50YXRpb24sdD1cInZlcnRpY2FsXCI9PT1yP1wiZG93blwiOlwibGVmdFwiLG49XCJ2ZXJ0aWNhbFwiPT09cj9cInVwXCI6XCJyaWdodFwiO2lmKHMud3JhcChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS13cmFwcGVyIHR3ZW50eXR3ZW50eS1cIityK1wiJz48L2Rpdj5cIiksIW0ubm9fb3ZlcmxheSl7cy5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktb3ZlcmxheSc+PC9kaXY+XCIpO3ZhciBhPXMuZmluZChcIi50d2VudHl0d2VudHktb3ZlcmxheVwiKTthLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1iZWZvcmUtbGFiZWwnIGRhdGEtY29udGVudD0nXCIrbS5iZWZvcmVfbGFiZWwrXCInPjwvZGl2PlwiKSxhLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1hZnRlci1sYWJlbCcgZGF0YS1jb250ZW50PSdcIittLmFmdGVyX2xhYmVsK1wiJz48L2Rpdj5cIil9dmFyIGM9cy5maW5kKFwiaW1nOmZpcnN0XCIpLGw9cy5maW5kKFwiaW1nOmxhc3RcIik7cy5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktaGFuZGxlJz48L2Rpdj5cIik7dmFyIGQ9cy5maW5kKFwiLnR3ZW50eXR3ZW50eS1oYW5kbGVcIik7ZC5hcHBlbmQoXCI8c3BhbiBjbGFzcz0ndHdlbnR5dHdlbnR5LVwiK3QrXCItYXJyb3cnPjwvc3Bhbj5cIiksZC5hcHBlbmQoXCI8c3BhbiBjbGFzcz0ndHdlbnR5dHdlbnR5LVwiK24rXCItYXJyb3cnPjwvc3Bhbj5cIikscy5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1jb250YWluZXJcIiksYy5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1iZWZvcmVcIiksbC5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1hZnRlclwiKTtmdW5jdGlvbiBpKHQpe3ZhciBlLG4sYSxpLG89KGU9dCxuPWMud2lkdGgoKSxhPWMuaGVpZ2h0KCkse3c6bitcInB4XCIsaDphK1wicHhcIixjdzplKm4rXCJweFwiLGNoOmUqYStcInB4XCJ9KTtkLmNzcyhcInZlcnRpY2FsXCI9PT1yP1widG9wXCI6XCJsZWZ0XCIsXCJ2ZXJ0aWNhbFwiPT09cj9vLmNoOm8uY3cpLGk9byxcInZlcnRpY2FsXCI9PT1yPyhjLmNzcyhcImNsaXBcIixcInJlY3QoMCxcIitpLncrXCIsXCIraS5jaCtcIiwwKVwiKSxsLmNzcyhcImNsaXBcIixcInJlY3QoXCIraS5jaCtcIixcIitpLncrXCIsXCIraS5oK1wiLDApXCIpKTooYy5jc3MoXCJjbGlwXCIsXCJyZWN0KDAsXCIraS5jdytcIixcIitpLmgrXCIsMClcIiksbC5jc3MoXCJjbGlwXCIsXCJyZWN0KDAsXCIraS53K1wiLFwiK2kuaCtcIixcIitpLmN3K1wiKVwiKSkscy5jc3MoXCJoZWlnaHRcIixpLmgpfWZ1bmN0aW9uIG8odCxlKXt2YXIgbixhLGk7cmV0dXJuIG49XCJ2ZXJ0aWNhbFwiPT09cj8oZS15KS91Oih0LXApL2gsYT0wLGk9MSxNYXRoLm1heChhLE1hdGgubWluKGksbikpfWcod2luZG93KS5vbihcInJlc2l6ZS50d2VudHl0d2VudHlcIixmdW5jdGlvbih0KXtpKGUpfSk7ZnVuY3Rpb24gdyh0KXsodC5kaXN0WD50LmRpc3RZJiZ0LmRpc3RYPC10LmRpc3RZfHx0LmRpc3RYPHQuZGlzdFkmJnQuZGlzdFg+LXQuZGlzdFkpJiZcInZlcnRpY2FsXCIhPT1yP3QucHJldmVudERlZmF1bHQoKToodC5kaXN0WDx0LmRpc3RZJiZ0LmRpc3RYPC10LmRpc3RZfHx0LmRpc3RYPnQuZGlzdFkmJnQuZGlzdFg+LXQuZGlzdFkpJiZcInZlcnRpY2FsXCI9PT1yJiZ0LnByZXZlbnREZWZhdWx0KCkscy5hZGRDbGFzcyhcImFjdGl2ZVwiKSxwPXMub2Zmc2V0KCkubGVmdCx5PXMub2Zmc2V0KCkudG9wLGg9Yy53aWR0aCgpLHU9Yy5oZWlnaHQoKX1mdW5jdGlvbiBmKHQpe3MuaGFzQ2xhc3MoXCJhY3RpdmVcIikmJihlPW8odC5wYWdlWCx0LnBhZ2VZKSxpKGUpKX1mdW5jdGlvbiB2KCl7cy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX12YXIgcD0wLHk9MCxoPTAsdT0wLF89bS5tb3ZlX3dpdGhfaGFuZGxlX29ubHk/ZDpzO18ub24oXCJtb3Zlc3RhcnRcIix3KSxfLm9uKFwibW92ZVwiLGYpLF8ub24oXCJtb3ZlZW5kXCIsdiksbS5tb3ZlX3NsaWRlcl9vbl9ob3ZlciYmKHMub24oXCJtb3VzZWVudGVyXCIsdykscy5vbihcIm1vdXNlbW92ZVwiLGYpLHMub24oXCJtb3VzZWxlYXZlXCIsdikpLGQub24oXCJ0b3VjaG1vdmVcIixmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCl9KSxzLmZpbmQoXCJpbWdcIikub24oXCJtb3VzZWRvd25cIixmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCl9KSxtLmNsaWNrX3RvX21vdmUmJnMub24oXCJjbGlja1wiLGZ1bmN0aW9uKHQpe3A9cy5vZmZzZXQoKS5sZWZ0LHk9cy5vZmZzZXQoKS50b3AsaD1jLndpZHRoKCksdT1jLmhlaWdodCgpLGU9byh0LnBhZ2VYLHQucGFnZVkpLGkoZSl9KSxnKHdpbmRvdykudHJpZ2dlcihcInJlc2l6ZS50d2VudHl0d2VudHlcIil9KX19KGpRdWVyeSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJyNtZW51LW9wZW4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcjbWVudS1vcGVuIHNwYW4nKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICQoJy5uYXYnKS5zbGlkZVRvZ2dsZSgnc2xvdycpOyAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3Byb2R1Y3RzIHN1YiBtZW51XHJcbiAgICAkKCcucHJvZHVjdHMtbWVudS1saW5rPmEnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuZG93bmxvYWRzJykucmVtb3ZlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgICAgICAkKCcucHJvZHVjdHMnKS50b2dnbGVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgfSk7ICBcclxuXHJcbiAgICAvL2Rvd25sb2FkcyBzdWIgbWVudVxyXG4gICAgJCgnLmRvd25sb2FkLW1lbnUtbGluaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0cycpLnJlbW92ZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLmRvd25sb2FkcycpLnRvZ2dsZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NoYW5nZSBwcm9kdWN0IG1lbnUgbGluayBvbiBtb2JpbGVcclxuXHJcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIGlmKHcgPCAxMjAwKSB7XHJcbiAgICAgICQoJy5wcm9kdWN0cy1tZW51LWxpbms+YScpLmF0dHIoJ2hyZWYnLCAnL3Byb2R1Y3RzJyk7XHJcbiAgICAgICQoJy5kb3dubG9hZC1tZW51LWxpbms+YScpLmF0dHIoJ2hyZWYnLCAnL2Rvd25sb2FkcycpO1xyXG4gICAgfSBcclxuXHJcbiAgLy9jb2xsYXBzaWJsZSBtZW51cyBmdW5jdGlvblxyXG4gIGZ1bmN0aW9uIHNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzKCkge1xyXG4gICAgdmFyICRtZW51ID0gJCgnI21vYmlsZV9tZW51JyksXHJcbiAgICAgIHRvcF9sZXZlbF9saW5rID0gJyNtb2JpbGVfbWVudSAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEnO1xyXG4gICAgICBjb25zb2xlLmxvZygkbWVudSk7XHJcbiAgICAkbWVudS5maW5kKCdhJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5vZmYoJ2NsaWNrJyk7XHJcbiAgICAgICBcclxuICAgICAgaWYgKCAkKHRoaXMpLmlzKHRvcF9sZXZlbF9saW5rKSApIHtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ2hyZWYnLCAnIycpO1xyXG4gICAgICB9XHJcbiAgICAgICBcclxuICAgICAgaWYgKCAhICQodGhpcykuc2libGluZ3MoJy5zdWItbWVudScpLmxlbmd0aCApIHtcclxuICAgICAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gICBcclxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzKCk7XHJcbiAgICB9LCA3MDApO1xyXG4gIH0pO1xyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm5ld3Mtc2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBcImZhZGVcIixcclxuICAgICAgICBzbGlkZXNob3dTcGVlZDogNzAwMCxcclxuICAgICAgICBhbmltYXRpb25TcGVlZDogNjAwLFxyXG4gICAgICAgIGFuaW1hdGlvbkxvb3A6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgLy9jb250cm9sTmF2OiB0cnVlLCAgXHJcbiAgICAgICAgcnRsOiB0cnVlLFxyXG4gICAgICAgIGN1c3RvbURpcmVjdGlvbk5hdjogJChcIi5jdXN0b20tbmF2aWdhdGlvbiBhXCIpXHJcbiAgICB9KTtcclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgICQoJy5wcm9kdWN0LXNsaWRlcicpLmZsZXhzbGlkZXIoe1xyXG4gICAgICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXHJcbiAgICAgICAgLy9zbGlkZXNob3dTcGVlZDogNzAwMCxcclxuICAgICAgICBhbmltYXRpb25TcGVlZDogNjAwLFxyXG4gICAgICAgIGFuaW1hdGlvbkxvb3A6IGZhbHNlLFxyXG4gICAgICAgIHBhdXNlT25BY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIGNvbnRyb2xOYXY6IHRydWUsXHJcbiAgICAgICAgcnRsOiB0cnVlLFxyXG4gICAgICAgIGN1c3RvbURpcmVjdGlvbk5hdjogJChcIi5jdXN0b20tbmF2aWdhdGlvbiBhXCIpXHJcbiAgICB9KTtcclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHQkKCcuYmVmb3JlJykubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5iZWZvcmUnKS5mYWRlT3V0KDE1MDApO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbmlmKCQoJy5pbWFnZS1jb21wYXJpc29uJykubGVuZ3RoKSB7XHJcblx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0ICAkKFwiI2ltYWdlc190b19jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSgpO1xyXG5cdH0pO1xyXG59IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAkKCcuZmxleHNsaWRlcicpLmZsZXhzbGlkZXIoe1xyXG4gICAgYW5pbWF0aW9uOiBcImZhZGVcIixcclxuICAgIHNsaWRlc2hvd1NwZWVkOiA3MDAwLFxyXG4gICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCwgIFxyXG4gICAgYW5pbWF0aW9uTG9vcDogdHJ1ZSxcclxuXHRjb250cm9sTmF2OiB0cnVlLCAgXHJcbiAgICBydGw6IHRydWUsXHJcbiAgfSk7XHJcbn0pOyIsIi8vYWRkIHNtb290aCBzY3JvbGwgdG8gYWxsIGxpbmtzXHJcbnZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAvLyBBZGQgc21vb3RoIHNjcm9sbGluZyB0byBhbGwgbGlua3NcclxuICAkKFwiYVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSB0aGlzLmhhc2ggaGFzIGEgdmFsdWUgYmVmb3JlIG92ZXJyaWRpbmcgZGVmYXVsdCBiZWhhdmlvclxyXG4gICAgaWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xyXG4gICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYW5jaG9yIGNsaWNrIGJlaGF2aW9yXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAvLyBTdG9yZSBoYXNoXHJcbiAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xyXG5cclxuICAgICAgLy8gVXNpbmcgalF1ZXJ5J3MgYW5pbWF0ZSgpIG1ldGhvZCB0byBhZGQgc21vb3RoIHBhZ2Ugc2Nyb2xsXHJcbiAgICAgIC8vIFRoZSBvcHRpb25hbCBudW1iZXIgKDgwMCkgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRha2VzIHRvIHNjcm9sbCB0byB0aGUgc3BlY2lmaWVkIGFyZWFcclxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgIHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3BcclxuICAgICAgfSwgODAwLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvLyBBZGQgaGFzaCAoIykgdG8gVVJMIHdoZW4gZG9uZSBzY3JvbGxpbmcgKGRlZmF1bHQgY2xpY2sgYmVoYXZpb3IpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xyXG4gICAgICB9KTtcclxuICAgIH0gLy8gRW5kIGlmXHJcbiAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=