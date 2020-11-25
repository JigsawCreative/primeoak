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
  $('.product-slider, .single-product__slider').flexslider({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvNDA0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mdWxsLWltYWdlLWZsZXhzbGlkZXItaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9qcXVlcnkuZXZlbnQubW92ZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvanF1ZXJ5LmZsZXhzbGlkZXItbWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2pxdWVyeS50d2VudHl0d2VudHkubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbmV3cy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJvZHVjdC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Ntb290aC1zY3JvbGwuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJnbG9iYWwiLCJ1bmRlZmluZWQiLCJzZXRJbW1lZGlhdGUiLCJuZXh0SGFuZGxlIiwidGFza3NCeUhhbmRsZSIsImN1cnJlbnRseVJ1bm5pbmdBVGFzayIsImRvYyIsImRvY3VtZW50IiwicmVnaXN0ZXJJbW1lZGlhdGUiLCJjYWxsYmFjayIsIkZ1bmN0aW9uIiwidGFzayIsImNsZWFySW1tZWRpYXRlIiwiaGFuZGxlIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJjYW5Vc2VQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJNYXRoIiwicmFuZG9tIiwib25HbG9iYWxNZXNzYWdlIiwiZXZlbnQiLCJzb3VyY2UiLCJkYXRhIiwiaW5kZXhPZiIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsInBvcnQyIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24iLCJhdHRhY2hUbyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwidG9TdHJpbmciLCJzZWxmIiwic2NvcGUiLCJ3aW5kb3ciLCJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJpZCIsImNsZWFyRm4iLCJfaWQiLCJfY2xlYXJGbiIsInVucmVmIiwicmVmIiwiZW5yb2xsIiwiaXRlbSIsIm1zZWNzIiwiX2lkbGVUaW1lb3V0SWQiLCJfaWRsZVRpbWVvdXQiLCJ1bmVucm9sbCIsIl91bnJlZkFjdGl2ZSIsImFjdGl2ZSIsIm9uVGltZW91dCIsIl9vblRpbWVvdXQiLCJyZXF1aXJlIiwiZyIsIiQiLCJqUXVlcnkiLCJyZWFkeSIsImNsaWNrIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInciLCJpbm5lcldpZHRoIiwiYXR0ciIsImxvYWQiLCJ0d2VudHl0d2VudHkiLCIkd2luZG93IiwiZmxleHNsaWRlciIsInZhcnMiLCJnZXRHcmlkU2l6ZSIsImVhY2giLCJmaW5kIiwiYW5pbWF0aW9uIiwic2xpZGVzaG93U3BlZWQiLCJhbmltYXRpb25Mb29wIiwiY29udHJvbE5hdiIsImN1c3RvbURpcmVjdGlvbk5hdiIsIm1pbkl0ZW1zIiwibWF4SXRlbXMiLCJzdGFydCIsInNsaWRlciIsInJlc2l6ZSIsImdyaWRTaXplIiwiZGVmaW5lIiwiYXNzaWduIiwiZXh0ZW5kIiwicCIsImEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJuIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJDdXN0b21FdmVudCIsIkV2ZW50IiwibyIsInRleHRhcmVhIiwiaW5wdXQiLCJzZWxlY3QiLCJidXR0b24iLCJjIiwibW92ZSIsImNhbmNlbCIsImVuZCIsInUiLCJyIiwiZCIsIlN5bWJvbCIsIm0iLCJ2Iiwic3BsaXQiLCJmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNwbGljZSIsImRpc3BhdGNoRXZlbnQiLCJzIiwia2ljayIsImgiLCJsIiwicHJldmVudERlZmF1bHQiLCJYIiwiaWRlbnRpZmllZFRvdWNoIiwiaWRlbnRpZmllciIsIlkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJUIiwieSIsImIiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInRhcmdldFRvdWNoZXMiLCJ0aW1lU3RhbXAiLCJhbHRLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJzdGFydFgiLCJzdGFydFkiLCJkaXN0WCIsImRpc3RZIiwiZGVsdGFYIiwiZGVsdGFZIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZmluZ2VyIiwiZW5hYmxlTW92ZSIsIm1vdmVFbmFibGVkIiwidGFyZ2V0IiwiRSIsInRpbWVyIiwidG91Y2giLCJTIiwiSyIsImsiLCJhY3RpdmVUb3VjaG1vdmUiLCJhY3RpdmVUb3VjaGVuZCIsIndoaWNoIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiZGVmYXVsdFByZXZlbnRlZCIsImoiLCJzcGVjaWFsIiwibW92ZXN0YXJ0Iiwic2V0dXAiLCJDIiwidGVhcmRvd24iLCJhZGQiLCJBIiwiUSIsIm1vdmVlbmQiLCJxIiwiaGFuZGxlciIsIm9yaWdpbmFsRXZlbnQiLCJydGwiLCJkZWZhdWx0cyIsIm5hbWVzcGFjZSIsIm5hdmlnYXRvciIsIm1zUG9pbnRlckVuYWJsZWQiLCJNU0dlc3R1cmUiLCJEb2N1bWVudFRvdWNoIiwiZGlyZWN0aW9uIiwicmV2ZXJzZSIsIml0ZW1XaWR0aCIsImFzTmF2Rm9yIiwiaW5pdCIsImFuaW1hdGluZyIsImN1cnJlbnRTbGlkZSIsInBhcnNlSW50Iiwic3RhcnRBdCIsImlzTmFOIiwiYW5pbWF0aW5nVG8iLCJhdEVuZCIsImxhc3QiLCJjb250YWluZXJTZWxlY3RvciIsInNlbGVjdG9yIiwic3Vic3RyIiwic2VhcmNoIiwic2xpZGVzIiwiY29udGFpbmVyIiwiY291bnQiLCJzeW5jRXhpc3RzIiwic3luYyIsInByb3AiLCJtYW51YWxQYXVzZSIsInN0b3BwZWQiLCJzdGFydGVkIiwic3RhcnRUaW1lb3V0IiwidHJhbnNpdGlvbnMiLCJ2aWRlbyIsInVzZUNTUyIsInN0eWxlIiwicGZ4IiwicmVwbGFjZSIsImlzRmlyZWZveCIsInVzZXJBZ2VudCIsImVuc3VyZUFuaW1hdGlvbkVuZCIsImNvbnRyb2xzQ29udGFpbmVyIiwibWFudWFsQ29udHJvbHMiLCJyYW5kb21pemUiLCJzb3J0Iiwicm91bmQiLCJlbXB0eSIsImFwcGVuZCIsImRvTWF0aCIsImRpcmVjdGlvbk5hdiIsImtleWJvYXJkIiwibXVsdGlwbGVLZXlib2FyZCIsImJpbmQiLCJrZXlDb2RlIiwiZ2V0VGFyZ2V0IiwiZmxleEFuaW1hdGUiLCJwYXVzZU9uQWN0aW9uIiwibW91c2V3aGVlbCIsInBhdXNlUGxheSIsInNsaWRlc2hvdyIsInBhdXNlSW52aXNpYmxlIiwicGF1c2VPbkhvdmVyIiwiaG92ZXIiLCJtYW51YWxQbGF5IiwicGF1c2UiLCJwbGF5IiwiaXNIaWRkZW4iLCJpbml0RGVsYXkiLCJhc05hdiIsInNtb290aEhlaWdodCIsImZsb29yIiwiY3VycmVudEl0ZW0iLCJlcSIsImFkZENsYXNzIiwiX3NsaWRlciIsIl9nZXN0dXJlIiwiY3VycmVudFRhcmdldCIsImFkZFBvaW50ZXIiLCJwb2ludGVySWQiLCJpbmRleCIsImhhc0NsYXNzIiwib2Zmc2V0IiwicmlnaHQiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNldHVwTWFudWFsIiwic2V0dXBQYWdpbmciLCJjb250cm9sTmF2U2NhZmZvbGQiLCJwYWdpbmdDb3VudCIsInRleHQiLCJ0aHVtYkNhcHRpb25zIiwiYXBwZW5kVG8iLCJzZXQiLCJkZWxlZ2F0ZSIsInR5cGUiLCJzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50IiwidXBkYXRlIiwicmVtb3ZlIiwiY2xvc2VzdCIsInByZXZUZXh0IiwibmV4dFRleHQiLCJyZW1vdmVBdHRyIiwiZmlsdGVyIiwicGxheVRleHQiLCJwYXVzZVRleHQiLCJzdG9wUHJvcGFnYXRpb24iLCJOdW1iZXIiLCJEYXRlIiwibGltaXQiLCJpdGVtVyIsIml0ZW1NYXJnaW4iLCJjbG9uZU9mZnNldCIsInRyYW5zbGF0aW9uWCIsInRyYW5zbGF0aW9uWSIsIngiLCJhYnMiLCJNU0dFU1RVUkVfRkxBR19JTkVSVElBIiwic3RvcCIsInNldFByb3BzIiwiY2FuQWR2YW5jZSIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaGVzIiwiaXMiLCJ3aWR0aCIsImNvbXB1dGVkVyIsInZpZXdwb3J0IiwiaGVpZ2h0IiwibmV3U2xpZGVzIiwiYW5pbWF0ZSIsImlubmVySGVpZ2h0IiwicGxheWluZyIsInVuaXF1ZUlEIiwidmlzUHJvcCIsImdldEhpZGRlblByb3AiLCJjZWlsIiwidmlzaWJsZSIsImJlZm9yZSIsImNzcyIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJ3cmFwdXAiLCJhbmltYXRpb25TcGVlZCIsImVhc2luZyIsInVuYmluZCIsImFmdGVyIiwiYW5pbWF0ZVNsaWRlcyIsImFuaW1hdGVkU2xpZGVzIiwibWFyZ2luTGVmdCIsInBvc2l0aW9uIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5Iiwid2Via2l0VHJhbnNpdGlvbiIsImZhZGVGaXJzdFNsaWRlIiwib3ZlcmZsb3ciLCJjbG9uZUNvdW50IiwibWFrZUFycmF5IiwiZmlyc3QiLCJjbG9uZSIsInByZXBlbmQiLCJjb21wdXRlZE0iLCJib3hQYWRkaW5nIiwib3V0ZXJXaWR0aCIsIml0ZW1UIiwiaXRlbU0iLCJtaW5XIiwibWF4VyIsImFkZFNsaWRlIiwiYWRkZWQiLCJyZW1vdmVTbGlkZSIsInJlbW92ZWQiLCJibHVyIiwiZm9jdXMiLCJhbGxvd09uZVNsaWRlIiwiZm4iLCJmYWRlSW4iLCJkZWZhdWx0X29mZnNldF9wY3QiLCJvcmllbnRhdGlvbiIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSIsIm1vdmVfc2xpZGVyX29uX2hvdmVyIiwibW92ZV93aXRoX2hhbmRsZV9vbmx5IiwiY2xpY2tfdG9fbW92ZSIsIndyYXAiLCJjdyIsImNoIiwibWF4IiwibWluIiwidG9wIiwiXyIsInRyaWdnZXIiLCJzbGlkZVRvZ2dsZSIsInNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzIiwiJG1lbnUiLCJ0b3BfbGV2ZWxfbGluayIsImNvbnNvbGUiLCJsb2ciLCJzaWJsaW5ncyIsInBhcmVudHMiLCJwYXJlbnQiLCJtb3VzZWVudGVyIiwiZmFkZU91dCIsImhhc2giLCJzY3JvbGxUb3AiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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LENBQUQsQ0FBUXpILE1BQVIsR0FBaUIyRztBQUROLE9BQXhCLEVBRUcsR0FGSCxFQUVRLFlBQVU7QUFFaEI7QUFDQW5WLGNBQU0sQ0FBQ21XLFFBQVAsQ0FBZ0JGLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNELE9BTkQ7QUFPRCxLQW5CZ0MsQ0FtQi9COztBQUNILEdBcEJEO0FBcUJELENBdkJELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqIEltcG9ydCBkZXBlbmRlbmNpZXMgKiovXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS5mbGV4c2xpZGVyLW1pbic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS5ldmVudC5tb3ZlLm1pbi5qcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeS50d2VudHl0d2VudHkubWluLmpzJztcclxuXHJcbi8qKiBJbXBvcnQgQ3VzdG9tIGZpbGVzICoqL1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tZW51JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZnVsbC1pbWFnZS1mbGV4c2xpZGVyLWl0ZW0nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZXJ2aWNlcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jb250YWN0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc21vb3RoLXNjcm9sbCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL25ld3Mtc2xpZGVyJztcclxuLy9pbXBvcnQgJy4vY29tcG9uZW50cy9mcm9udC1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvNDA0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvZHVjdC1zbGlkZXInOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy90cmlnZ2VyIGRvd25sb2FkcyBzdWIgbWVudVxyXG4gICAgJCgnLnByb2R1Y3QtNDA0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmRvd25sb2FkcycpLnJlbW92ZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzJykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvL2NoYW5nZSBwcm9kdWN0IG1lbnUgbGluayBvbiBtb2JpbGVcclxuXHJcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIGlmKHcgPCAxMjAwKSB7XHJcbiAgICAgICQoJy5wcm9kdWN0LTQwNCcpLmF0dHIoJ2hyZWYnLCAnL3Byb2R1Y3RzJyk7XHJcbiAgICB9IFxyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdGlmKCQoJy5iYS1pbWFnZS1jb21wYXJpc29uJykubGVuZ3RoIHx8ICQoJy5wb3N0LWJhLWltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGgpIHtcclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIi5iYV9pbWFnZXNfdG9fY29tcGFyZVwiKS50d2VudHl0d2VudHkoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7ICAgXHJcbiAgICBpZih3IDwgMTIwMCkge1xyXG4gICAgICAgICQoJy5jb250YWN0LXVzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmNvbnRhY3QtY29sLTEnKS50b2dnbGVDbGFzcygnc2hvdy1jb2x1bW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcuY29udGFjdF9fY3Jvc3MnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuY29udGFjdC1jb2wtMScpLnJlbW92ZUNsYXNzKCdzaG93LWNvbHVtbicpO1xyXG4gICAgICAgICQoJy5jb250YWN0LWNvbC0yJykucmVtb3ZlQ2xhc3MoJ3Nob3ctY29sdW1uJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLm9wcG9ydHVuaXRpZXMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuY29udGFjdC1jb2wtMicpLnRvZ2dsZUNsYXNzKCdzaG93LWNvbHVtbicpO1xyXG4gICAgfSk7ICAgIFxyXG4gICAgfVxyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcblx0Ly8gc3RvcmUgdGhlIHNsaWRlciBpbiBhIGxvY2FsIHZhcmlhYmxlXHJcblx0dmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXHJcblx0XHRmbGV4c2xpZGVyID0geyB2YXJzOnt9IH07XHJcblxyXG5cdC8vIHRpbnkgaGVscGVyIGZ1bmN0aW9uIHRvIGFkZCBicmVha3BvaW50c1xyXG5cdGZ1bmN0aW9uIGdldEdyaWRTaXplKCkge1xyXG5cdFx0cmV0dXJuICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMCApID8gMSA6IDE7XHJcblx0fVxyXG5cclxuXHQkd2luZG93LnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdCAkKCcuZnVsbC1pbWFnZS1pdGVtLWZsZXhzbGlkZXItY29udGFpbmVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdCQodGhpcykuZmluZChcIi5mbGV4c2xpZGVyXCIpLmZsZXhzbGlkZXIoe1xyXG5cdFx0XHRcdGFuaW1hdGlvbjogXCJzbGlkZVwiLFxyXG5cdFx0XHRcdHNsaWRlc2hvd1NwZWVkOiAxMjAwMCxcclxuXHRcdFx0XHRhbmltYXRpb25Mb29wOiB0cnVlLFxyXG5cdFx0XHRcdGNvbnRyb2xOYXY6IGZhbHNlLFxyXG5cdFx0XHRcdGN1c3RvbURpcmVjdGlvbk5hdjogJCh0aGlzKS5maW5kKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIiksXHJcblx0XHRcdFx0bWluSXRlbXM6IGdldEdyaWRTaXplKCksIC8vIHVzZSBmdW5jdGlvbiB0byBwdWxsIGluIGluaXRpYWwgdmFsdWVcclxuXHRcdFx0XHRtYXhJdGVtczogZ2V0R3JpZFNpemUoKSwgLy8gdXNlIGZ1bmN0aW9uIHRvIHB1bGwgaW4gaW5pdGlhbCB2YWx1ZVxyXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbihzbGlkZXIpIHtcclxuXHRcdFx0XHRcdGZsZXhzbGlkZXIgPSBzbGlkZXI7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHQvLyBjaGVjayBncmlkIHNpemUgb24gcmVzaXplIGV2ZW50XHJcblx0JHdpbmRvdy5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgZ3JpZFNpemUgPSBnZXRHcmlkU2l6ZSgpO1xyXG5cdFx0ZmxleHNsaWRlci52YXJzLm1pbkl0ZW1zID0gZ3JpZFNpemU7XHJcblx0XHRmbGV4c2xpZGVyLnZhcnMubWF4SXRlbXMgPSBncmlkU2l6ZTtcclxuXHR9KTtcdFxyXG59KCkpOyIsIiFmdW5jdGlvbihlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm51bGwhPT1tb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWU6ZSgpfShmdW5jdGlvbigpe3ZhciBpPU9iamVjdC5hc3NpZ258fHdpbmRvdy5qUXVlcnkmJmpRdWVyeS5leHRlbmQscD04LGE9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSx0KXtyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKCl9LDI1KX07ZnVuY3Rpb24gZShlLHQpe3Q9dHx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBuLmluaXRDdXN0b21FdmVudChlLHQuYnViYmxlcyx0LmNhbmNlbGFibGUsdC5kZXRhaWwpLG59XCJmdW5jdGlvblwiIT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50JiYoZS5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSx3aW5kb3cuQ3VzdG9tRXZlbnQ9ZSk7dmFyIG89e3RleHRhcmVhOiEwLGlucHV0OiEwLHNlbGVjdDohMCxidXR0b246ITB9LGM9e21vdmU6XCJtb3VzZW1vdmVcIixjYW5jZWw6XCJtb3VzZXVwIGRyYWdzdGFydFwiLGVuZDpcIm1vdXNldXBcIn0sdT17bW92ZTpcInRvdWNobW92ZVwiLGNhbmNlbDpcInRvdWNoZW5kXCIsZW5kOlwidG91Y2hlbmRcIn0scj0vXFxzKy8sZD17YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSx0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbD9TeW1ib2woXCJldmVudHNcIik6e307ZnVuY3Rpb24gbShlKXtyZXR1cm4gZVt0XXx8KGVbdF09e30pfWZ1bmN0aW9uIHYoZSx0LG4sbyl7dD10LnNwbGl0KHIpO3ZhciBpLGE9bShlKSxjPXQubGVuZ3RoO2Z1bmN0aW9uIHUoZSl7bihlLG8pfWZvcig7Yy0tOykoYVtpPXRbY11dfHwoYVtpXT1bXSkpLnB1c2goW24sdV0pLGUuYWRkRXZlbnRMaXN0ZW5lcihpLHUpfWZ1bmN0aW9uIGYoZSx0LG4pe3Q9dC5zcGxpdChyKTt2YXIgbyxpLGEsYz1tKGUpLHU9dC5sZW5ndGg7aWYoYylmb3IoO3UtLTspaWYoaT1jW289dFt1XV0pZm9yKGE9aS5sZW5ndGg7YS0tOylpW2FdWzBdPT09biYmKGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLGlbYV1bMV0pLGkuc3BsaWNlKGEsMSkpfWZ1bmN0aW9uIGcoZSx0LG4pe3ZhciBvPW5ldyBDdXN0b21FdmVudCh0LGQpO24mJmkobyxuKSxlLmRpc3BhdGNoRXZlbnQobyl9ZnVuY3Rpb24gcyhlKXt2YXIgbj1lLG89ITEsaT0hMTtmdW5jdGlvbiB0KGUpe28/KG4oKSxhKHQpLG89IShpPSEwKSk6aT0hMX10aGlzLmtpY2s9ZnVuY3Rpb24oZSl7bz0hMCxpfHx0KCl9LHRoaXMuZW5kPWZ1bmN0aW9uKGUpe3ZhciB0PW47ZSYmKGk/KG49bz9mdW5jdGlvbigpe3QoKSxlKCl9OmUsbz0hMCk6ZSgpKX19ZnVuY3Rpb24gaCgpe31mdW5jdGlvbiBsKGUpe2UucHJldmVudERlZmF1bHQoKX1mdW5jdGlvbiBYKGUsdCl7dmFyIG4sbztpZihlLmlkZW50aWZpZWRUb3VjaClyZXR1cm4gZS5pZGVudGlmaWVkVG91Y2godCk7Zm9yKG49LTEsbz1lLmxlbmd0aDsrK248bzspaWYoZVtuXS5pZGVudGlmaWVyPT09dClyZXR1cm4gZVtuXX1mdW5jdGlvbiBZKGUsdCl7dmFyIG49WChlLmNoYW5nZWRUb3VjaGVzLHQuaWRlbnRpZmllcik7aWYobiYmKG4ucGFnZVghPT10LnBhZ2VYfHxuLnBhZ2VZIT09dC5wYWdlWSkpcmV0dXJuIG59ZnVuY3Rpb24gbihlLHQpe1QoZSx0LGUsdyl9ZnVuY3Rpb24geShlLHQpe3coKX1mdW5jdGlvbiB3KCl7Zihkb2N1bWVudCxjLm1vdmUsbiksZihkb2N1bWVudCxjLmNhbmNlbCx5KX1mdW5jdGlvbiBiKGUpe2YoZG9jdW1lbnQsdS5tb3ZlLGUudG91Y2htb3ZlKSxmKGRvY3VtZW50LHUuY2FuY2VsLGUudG91Y2hlbmQpfWZ1bmN0aW9uIFQoZSx0LG4sbyl7dmFyIGksYSxjLHUscixkLG0sdixmLHM9bi5wYWdlWC10LnBhZ2VYLGw9bi5wYWdlWS10LnBhZ2VZO3MqcytsKmw8cCpwfHwoYT10LGM9bix1PXMscj1sLGQ9byxtPShpPWUpLnRhcmdldFRvdWNoZXMsdj1pLnRpbWVTdGFtcC1hLnRpbWVTdGFtcCxmPXthbHRLZXk6aS5hbHRLZXksY3RybEtleTppLmN0cmxLZXksc2hpZnRLZXk6aS5zaGlmdEtleSxzdGFydFg6YS5wYWdlWCxzdGFydFk6YS5wYWdlWSxkaXN0WDp1LGRpc3RZOnIsZGVsdGFYOnUsZGVsdGFZOnIscGFnZVg6Yy5wYWdlWCxwYWdlWTpjLnBhZ2VZLHZlbG9jaXR5WDp1L3YsdmVsb2NpdHlZOnIvdixpZGVudGlmaWVyOmEuaWRlbnRpZmllcix0YXJnZXRUb3VjaGVzOm0sZmluZ2VyOm0/bS5sZW5ndGg6MSxlbmFibGVNb3ZlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlRW5hYmxlZD0hMCx0aGlzLmVuYWJsZU1vdmU9aCxpLnByZXZlbnREZWZhdWx0KCl9fSxnKGEudGFyZ2V0LFwibW92ZXN0YXJ0XCIsZiksZChhKSl9ZnVuY3Rpb24gRShlLHQpe3ZhciBuPXQudGltZXI7dC50b3VjaD1lLHQudGltZVN0YW1wPWUudGltZVN0YW1wLG4ua2ljaygpfWZ1bmN0aW9uIFMoZSx0KXt2YXIgbj10LnRhcmdldCxvPXQuZXZlbnQsaT10LnRpbWVyO2YoZG9jdW1lbnQsYy5tb3ZlLEUpLGYoZG9jdW1lbnQsYy5lbmQsUyksSyhuLG8saSxmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtmKG4sXCJjbGlja1wiLGwpfSwwKX0pfWZ1bmN0aW9uIGsoZSx0KXt2YXIgbixvPXQudGFyZ2V0LGk9dC5ldmVudCxhPXQudGltZXI7WChlLmNoYW5nZWRUb3VjaGVzLGkuaWRlbnRpZmllcikmJihuPXQsZihkb2N1bWVudCx1Lm1vdmUsbi5hY3RpdmVUb3VjaG1vdmUpLGYoZG9jdW1lbnQsdS5lbmQsbi5hY3RpdmVUb3VjaGVuZCksSyhvLGksYSkpfWZ1bmN0aW9uIEsoZSx0LG4sbyl7bi5lbmQoZnVuY3Rpb24oKXtyZXR1cm4gZyhlLFwibW92ZWVuZFwiLHQpLG8mJm8oKX0pfWlmKHYoZG9jdW1lbnQsXCJtb3VzZWRvd25cIixmdW5jdGlvbihlKXt2YXIgdDsxIT09KHQ9ZSkud2hpY2h8fHQuY3RybEtleXx8dC5hbHRLZXl8fG9bZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXXx8KHYoZG9jdW1lbnQsYy5tb3ZlLG4sZSksdihkb2N1bWVudCxjLmNhbmNlbCx5LGUpKX0pLHYoZG9jdW1lbnQsXCJ0b3VjaHN0YXJ0XCIsZnVuY3Rpb24oZSl7aWYoIW9bZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXSl7dmFyIHQ9ZS5jaGFuZ2VkVG91Y2hlc1swXSxuPXt0YXJnZXQ6dC50YXJnZXQscGFnZVg6dC5wYWdlWCxwYWdlWTp0LnBhZ2VZLGlkZW50aWZpZXI6dC5pZGVudGlmaWVyLHRvdWNobW92ZTpmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlLHQpe3ZhciBuPVkoZSx0KTtpZighbilyZXR1cm47VChlLHQsbixiKX0oZSx0KX0sdG91Y2hlbmQ6ZnVuY3Rpb24oZSx0KXshZnVuY3Rpb24oZSx0KXtpZighWChlLmNoYW5nZWRUb3VjaGVzLHQuaWRlbnRpZmllcikpcmV0dXJuO2IodCl9KGUsdCl9fTt2KGRvY3VtZW50LHUubW92ZSxuLnRvdWNobW92ZSxuKSx2KGRvY3VtZW50LHUuY2FuY2VsLG4udG91Y2hlbmQsbil9fSksdihkb2N1bWVudCxcIm1vdmVzdGFydFwiLGZ1bmN0aW9uKGUpe2lmKCFlLmRlZmF1bHRQcmV2ZW50ZWQmJmUubW92ZUVuYWJsZWQpe3ZhciB0PXtzdGFydFg6ZS5zdGFydFgsc3RhcnRZOmUuc3RhcnRZLHBhZ2VYOmUucGFnZVgscGFnZVk6ZS5wYWdlWSxkaXN0WDplLmRpc3RYLGRpc3RZOmUuZGlzdFksZGVsdGFYOmUuZGVsdGFYLGRlbHRhWTplLmRlbHRhWSx2ZWxvY2l0eVg6ZS52ZWxvY2l0eVgsdmVsb2NpdHlZOmUudmVsb2NpdHlZLGlkZW50aWZpZXI6ZS5pZGVudGlmaWVyLHRhcmdldFRvdWNoZXM6ZS50YXJnZXRUb3VjaGVzLGZpbmdlcjplLmZpbmdlcn0sbj17dGFyZ2V0OmUudGFyZ2V0LGV2ZW50OnQsdGltZXI6bmV3IHMoZnVuY3Rpb24oZSl7KGZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1uLWUudGltZVN0YW1wO2UuZGlzdFg9dC5wYWdlWC1lLnN0YXJ0WCxlLmRpc3RZPXQucGFnZVktZS5zdGFydFksZS5kZWx0YVg9dC5wYWdlWC1lLnBhZ2VYLGUuZGVsdGFZPXQucGFnZVktZS5wYWdlWSxlLnZlbG9jaXR5WD0uMyplLnZlbG9jaXR5WCsuNyplLmRlbHRhWC9vLGUudmVsb2NpdHlZPS4zKmUudmVsb2NpdHlZKy43KmUuZGVsdGFZL28sZS5wYWdlWD10LnBhZ2VYLGUucGFnZVk9dC5wYWdlWX0pKHQsbi50b3VjaCxuLnRpbWVTdGFtcCksZyhuLnRhcmdldCxcIm1vdmVcIix0KX0pLHRvdWNoOnZvaWQgMCx0aW1lU3RhbXA6ZS50aW1lU3RhbXB9O3ZvaWQgMD09PWUuaWRlbnRpZmllcj8odihlLnRhcmdldCxcImNsaWNrXCIsbCksdihkb2N1bWVudCxjLm1vdmUsRSxuKSx2KGRvY3VtZW50LGMuZW5kLFMsbikpOihuLmFjdGl2ZVRvdWNobW92ZT1mdW5jdGlvbihlLHQpe3ZhciBuLG8saSxhLGM7bj1lLGk9KG89dCkuZXZlbnQsYT1vLnRpbWVyLChjPVkobixpKSkmJihuLnByZXZlbnREZWZhdWx0KCksaS50YXJnZXRUb3VjaGVzPW4udGFyZ2V0VG91Y2hlcyxvLnRvdWNoPWMsby50aW1lU3RhbXA9bi50aW1lU3RhbXAsYS5raWNrKCkpfSxuLmFjdGl2ZVRvdWNoZW5kPWZ1bmN0aW9uKGUsdCl7ayhlLHQpfSx2KGRvY3VtZW50LHUubW92ZSxuLmFjdGl2ZVRvdWNobW92ZSxuKSx2KGRvY3VtZW50LHUuZW5kLG4uYWN0aXZlVG91Y2hlbmQsbikpfX0pLHdpbmRvdy5qUXVlcnkpe3ZhciBqPVwic3RhcnRYIHN0YXJ0WSBwYWdlWCBwYWdlWSBkaXN0WCBkaXN0WSBkZWx0YVggZGVsdGFZIHZlbG9jaXR5WCB2ZWxvY2l0eVlcIi5zcGxpdChcIiBcIik7alF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZXN0YXJ0PXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixDKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIsQyksITF9LGFkZDpBfSxqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixRKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIsUSksITF9LGFkZDpBfSxqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlZW5kPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsXCJtb3Zlc3RhcnRcIixxKSwhMX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gZih0aGlzLFwibW92ZXN0YXJ0XCIscSksITF9LGFkZDpBfX1mdW5jdGlvbiBDKGUpe2UuZW5hYmxlTW92ZSgpfWZ1bmN0aW9uIFEoZSl7ZS5lbmFibGVNb3ZlKCl9ZnVuY3Rpb24gcShlKXtlLmVuYWJsZU1vdmUoKX1mdW5jdGlvbiBBKGUpe3ZhciBvPWUuaGFuZGxlcjtlLmhhbmRsZXI9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49ai5sZW5ndGg7bi0tOyllW3Q9altuXV09ZS5vcmlnaW5hbEV2ZW50W3RdO28uYXBwbHkodGhpcyxhcmd1bWVudHMpfX19KTsiLCIvKlxuICogalF1ZXJ5IEZsZXhTbGlkZXIgdjIuNy4yXG4gKiBDb3B5cmlnaHQgMjAxMiBXb29UaGVtZXNcbiAqIENvbnRyaWJ1dGluZyBBdXRob3I6IFR5bGVyIFNtaXRoXG4gKi8hZnVuY3Rpb24oJCl7dmFyIGU9ITA7JC5mbGV4c2xpZGVyPWZ1bmN0aW9uKHQsYSl7dmFyIG49JCh0KTt2b2lkIDA9PT1hLnJ0bCYmXCJydGxcIj09JChcImh0bWxcIikuYXR0cihcImRpclwiKSYmKGEucnRsPSEwKSxuLnZhcnM9JC5leHRlbmQoe30sJC5mbGV4c2xpZGVyLmRlZmF1bHRzLGEpO3ZhciBpPW4udmFycy5uYW1lc3BhY2Uscj13aW5kb3cubmF2aWdhdG9yJiZ3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQmJndpbmRvdy5NU0dlc3R1cmUscz0oXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8cnx8d2luZG93LkRvY3VtZW50VG91Y2gmJmRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCkmJm4udmFycy50b3VjaCxvPVwiY2xpY2sgdG91Y2hlbmQgTVNQb2ludGVyVXAga2V5dXBcIixsPVwiXCIsYyxkPVwidmVydGljYWxcIj09PW4udmFycy5kaXJlY3Rpb24sdT1uLnZhcnMucmV2ZXJzZSx2PW4udmFycy5pdGVtV2lkdGg+MCxwPVwiZmFkZVwiPT09bi52YXJzLmFuaW1hdGlvbixtPVwiXCIhPT1uLnZhcnMuYXNOYXZGb3IsZj17fTskLmRhdGEodCxcImZsZXhzbGlkZXJcIixuKSxmPXtpbml0OmZ1bmN0aW9uKCl7bi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9cGFyc2VJbnQobi52YXJzLnN0YXJ0QXQ/bi52YXJzLnN0YXJ0QXQ6MCwxMCksaXNOYU4obi5jdXJyZW50U2xpZGUpJiYobi5jdXJyZW50U2xpZGU9MCksbi5hbmltYXRpbmdUbz1uLmN1cnJlbnRTbGlkZSxuLmF0RW5kPTA9PT1uLmN1cnJlbnRTbGlkZXx8bi5jdXJyZW50U2xpZGU9PT1uLmxhc3Qsbi5jb250YWluZXJTZWxlY3Rvcj1uLnZhcnMuc2VsZWN0b3Iuc3Vic3RyKDAsbi52YXJzLnNlbGVjdG9yLnNlYXJjaChcIiBcIikpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yLG4pLG4uY29udGFpbmVyPSQobi5jb250YWluZXJTZWxlY3RvcixuKSxuLmNvdW50PW4uc2xpZGVzLmxlbmd0aCxuLnN5bmNFeGlzdHM9JChuLnZhcnMuc3luYykubGVuZ3RoPjAsXCJzbGlkZVwiPT09bi52YXJzLmFuaW1hdGlvbiYmKG4udmFycy5hbmltYXRpb249XCJzd2luZ1wiKSxuLnByb3A9ZD9cInRvcFwiOm4udmFycy5ydGw/XCJtYXJnaW5SaWdodFwiOlwibWFyZ2luTGVmdFwiLG4uYXJncz17fSxuLm1hbnVhbFBhdXNlPSExLG4uc3RvcHBlZD0hMSxuLnN0YXJ0ZWQ9ITEsbi5zdGFydFRpbWVvdXQ9bnVsbCxuLnRyYW5zaXRpb25zPSFuLnZhcnMudmlkZW8mJiFwJiZuLnZhcnMudXNlQ1NTJiZmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdD1bXCJwZXJzcGVjdGl2ZVByb3BlcnR5XCIsXCJXZWJraXRQZXJzcGVjdGl2ZVwiLFwiTW96UGVyc3BlY3RpdmVcIixcIk9QZXJzcGVjdGl2ZVwiLFwibXNQZXJzcGVjdGl2ZVwiXTtmb3IodmFyIGEgaW4gdClpZih2b2lkIDAhPT1lLnN0eWxlW3RbYV1dKXJldHVybiBuLnBmeD10W2FdLnJlcGxhY2UoXCJQZXJzcGVjdGl2ZVwiLFwiXCIpLnRvTG93ZXJDYXNlKCksbi5wcm9wPVwiLVwiK24ucGZ4K1wiLXRyYW5zZm9ybVwiLCEwO3JldHVybiExfSgpLG4uaXNGaXJlZm94PW5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiZmlyZWZveFwiKT4tMSxuLmVuc3VyZUFuaW1hdGlvbkVuZD1cIlwiLFwiXCIhPT1uLnZhcnMuY29udHJvbHNDb250YWluZXImJihuLmNvbnRyb2xzQ29udGFpbmVyPSQobi52YXJzLmNvbnRyb2xzQ29udGFpbmVyKS5sZW5ndGg+MCYmJChuLnZhcnMuY29udHJvbHNDb250YWluZXIpKSxcIlwiIT09bi52YXJzLm1hbnVhbENvbnRyb2xzJiYobi5tYW51YWxDb250cm9scz0kKG4udmFycy5tYW51YWxDb250cm9scykubGVuZ3RoPjAmJiQobi52YXJzLm1hbnVhbENvbnRyb2xzKSksXCJcIiE9PW4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYmJihuLmN1c3RvbURpcmVjdGlvbk5hdj0yPT09JChuLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2KS5sZW5ndGgmJiQobi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdikpLG4udmFycy5yYW5kb21pemUmJihuLnNsaWRlcy5zb3J0KGZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSktLjV9KSxuLmNvbnRhaW5lci5lbXB0eSgpLmFwcGVuZChuLnNsaWRlcykpLG4uZG9NYXRoKCksbi5zZXR1cChcImluaXRcIiksbi52YXJzLmNvbnRyb2xOYXYmJmYuY29udHJvbE5hdi5zZXR1cCgpLG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnNldHVwKCksbi52YXJzLmtleWJvYXJkJiYoMT09PSQobi5jb250YWluZXJTZWxlY3RvcikubGVuZ3RofHxuLnZhcnMubXVsdGlwbGVLZXlib2FyZCkmJiQoZG9jdW1lbnQpLmJpbmQoXCJrZXl1cFwiLGZ1bmN0aW9uKGUpe3ZhciB0PWUua2V5Q29kZTtpZighbi5hbmltYXRpbmcmJigzOT09PXR8fDM3PT09dCkpe3ZhciBhPW4udmFycy5ydGw/Mzc9PT10P24uZ2V0VGFyZ2V0KFwibmV4dFwiKTozOT09PXQmJm4uZ2V0VGFyZ2V0KFwicHJldlwiKTozOT09PXQ/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOjM3PT09dCYmbi5nZXRUYXJnZXQoXCJwcmV2XCIpO24uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbil9fSksbi52YXJzLm1vdXNld2hlZWwmJm4uYmluZChcIm1vdXNld2hlZWxcIixmdW5jdGlvbihlLHQsYSxpKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHI9dDwwP24uZ2V0VGFyZ2V0KFwibmV4dFwiKTpuLmdldFRhcmdldChcInByZXZcIik7bi5mbGV4QW5pbWF0ZShyLG4udmFycy5wYXVzZU9uQWN0aW9uKX0pLG4udmFycy5wYXVzZVBsYXkmJmYucGF1c2VQbGF5LnNldHVwKCksbi52YXJzLnNsaWRlc2hvdyYmbi52YXJzLnBhdXNlSW52aXNpYmxlJiZmLnBhdXNlSW52aXNpYmxlLmluaXQoKSxuLnZhcnMuc2xpZGVzaG93JiYobi52YXJzLnBhdXNlT25Ib3ZlciYmbi5ob3ZlcihmdW5jdGlvbigpe24ubWFudWFsUGxheXx8bi5tYW51YWxQYXVzZXx8bi5wYXVzZSgpfSxmdW5jdGlvbigpe24ubWFudWFsUGF1c2V8fG4ubWFudWFsUGxheXx8bi5zdG9wcGVkfHxuLnBsYXkoKX0pLG4udmFycy5wYXVzZUludmlzaWJsZSYmZi5wYXVzZUludmlzaWJsZS5pc0hpZGRlbigpfHwobi52YXJzLmluaXREZWxheT4wP24uc3RhcnRUaW1lb3V0PXNldFRpbWVvdXQobi5wbGF5LG4udmFycy5pbml0RGVsYXkpOm4ucGxheSgpKSksbSYmZi5hc05hdi5zZXR1cCgpLHMmJm4udmFycy50b3VjaCYmZi50b3VjaCgpLCghcHx8cCYmbi52YXJzLnNtb290aEhlaWdodCkmJiQod2luZG93KS5iaW5kKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIGZvY3VzXCIsZi5yZXNpemUpLG4uZmluZChcImltZ1wiKS5hdHRyKFwiZHJhZ2dhYmxlXCIsXCJmYWxzZVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi52YXJzLnN0YXJ0KG4pfSwyMDApfSxhc05hdjp7c2V0dXA6ZnVuY3Rpb24oKXtuLmFzTmF2PSEwLG4uYW5pbWF0aW5nVG89TWF0aC5mbG9vcihuLmN1cnJlbnRTbGlkZS9uLm1vdmUpLG4uY3VycmVudEl0ZW09bi5jdXJyZW50U2xpZGUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShuLmN1cnJlbnRJdGVtKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLHI/KHQuX3NsaWRlcj1uLG4uc2xpZGVzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX2dlc3R1cmU9bmV3IE1TR2VzdHVyZSxlLl9nZXN0dXJlLnRhcmdldD1lLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5jdXJyZW50VGFyZ2V0Ll9nZXN0dXJlJiZlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUuYWRkUG9pbnRlcihlLnBvaW50ZXJJZCl9LCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJNU0dlc3R1cmVUYXBcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ9JCh0aGlzKSxhPXQuaW5kZXgoKTskKG4udmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIikuYW5pbWF0aW5nfHx0Lmhhc0NsYXNzKFwiYWN0aXZlXCIpfHwobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxhP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCwhMCkpfSl9KSk6bi5zbGlkZXMub24obyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ9JCh0aGlzKSxhPXQuaW5kZXgoKSxyO3I9bi52YXJzLnJ0bD8tMSoodC5vZmZzZXQoKS5yaWdodC0kKG4pLnNjcm9sbExlZnQoKSk6dC5vZmZzZXQoKS5sZWZ0LSQobikuc2Nyb2xsTGVmdCgpLHI8PTAmJnQuaGFzQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKT9uLmZsZXhBbmltYXRlKG4uZ2V0VGFyZ2V0KFwicHJldlwiKSwhMCk6JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLmFuaW1hdGluZ3x8dC5oYXNDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpfHwobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxhP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCwhMCkpfSl9fSxjb250cm9sTmF2OntzZXR1cDpmdW5jdGlvbigpe24ubWFudWFsQ29udHJvbHM/Zi5jb250cm9sTmF2LnNldHVwTWFudWFsKCk6Zi5jb250cm9sTmF2LnNldHVwUGFnaW5nKCl9LHNldHVwUGFnaW5nOmZ1bmN0aW9uKCl7dmFyIGU9XCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdj9cImNvbnRyb2wtdGh1bWJzXCI6XCJjb250cm9sLXBhZ2luZ1wiLHQ9MSxhLHI7aWYobi5jb250cm9sTmF2U2NhZmZvbGQ9JCgnPG9sIGNsYXNzPVwiJytpK1wiY29udHJvbC1uYXYgXCIraStlKydcIj48L29sPicpLG4ucGFnaW5nQ291bnQ+MSlmb3IodmFyIHM9MDtzPG4ucGFnaW5nQ291bnQ7cysrKXtpZihyPW4uc2xpZGVzLmVxKHMpLHZvaWQgMD09PXIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpJiZyLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiLFwiXCIpLGE9JChcIjxhPjwvYT5cIikuYXR0cihcImhyZWZcIixcIiNcIikudGV4dCh0KSxcInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2JiYoYT0kKFwiPGltZy8+XCIpLmF0dHIoXCJzcmNcIixyLmF0dHIoXCJkYXRhLXRodW1iXCIpKSksXCJcIiE9PXIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpJiZhLmF0dHIoXCJhbHRcIixyLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiKSksXCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdiYmITA9PT1uLnZhcnMudGh1bWJDYXB0aW9ucyl7dmFyIGM9ci5hdHRyKFwiZGF0YS10aHVtYmNhcHRpb25cIik7aWYoXCJcIiE9PWMmJnZvaWQgMCE9PWMpe3ZhciBkPSQoXCI8c3Bhbj48L3NwYW4+XCIpLmFkZENsYXNzKGkrXCJjYXB0aW9uXCIpLnRleHQoYyk7YS5hcHBlbmQoZCl9fXZhciB1PSQoXCI8bGk+XCIpO2EuYXBwZW5kVG8odSksdS5hcHBlbmQoXCI8L2xpPlwiKSxuLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQodSksdCsrfW4uY29udHJvbHNDb250YWluZXI/JChuLmNvbnRyb2xzQ29udGFpbmVyKS5hcHBlbmQobi5jb250cm9sTmF2U2NhZmZvbGQpOm4uYXBwZW5kKG4uY29udHJvbE5hdlNjYWZmb2xkKSxmLmNvbnRyb2xOYXYuc2V0KCksZi5jb250cm9sTmF2LmFjdGl2ZSgpLG4uY29udHJvbE5hdlNjYWZmb2xkLmRlbGVnYXRlKFwiYSwgaW1nXCIsbyxmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksXCJcIj09PWx8fGw9PT1lLnR5cGUpe3ZhciB0PSQodGhpcyksYT1uLmNvbnRyb2xOYXYuaW5kZXgodCk7dC5oYXNDbGFzcyhpK1wiYWN0aXZlXCIpfHwobi5kaXJlY3Rpb249YT5uLmN1cnJlbnRTbGlkZT9cIm5leHRcIjpcInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24pKX1cIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSxzZXR1cE1hbnVhbDpmdW5jdGlvbigpe24uY29udHJvbE5hdj1uLm1hbnVhbENvbnRyb2xzLGYuY29udHJvbE5hdi5hY3RpdmUoKSxuLmNvbnRyb2xOYXYuYmluZChvLGZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxcIlwiPT09bHx8bD09PWUudHlwZSl7dmFyIHQ9JCh0aGlzKSxhPW4uY29udHJvbE5hdi5pbmRleCh0KTt0Lmhhc0NsYXNzKGkrXCJhY3RpdmVcIil8fChhPm4uY3VycmVudFNsaWRlP24uZGlyZWN0aW9uPVwibmV4dFwiOm4uZGlyZWN0aW9uPVwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbikpfVwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHNldDpmdW5jdGlvbigpe3ZhciBlPVwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXY/XCJpbWdcIjpcImFcIjtuLmNvbnRyb2xOYXY9JChcIi5cIitpK1wiY29udHJvbC1uYXYgbGkgXCIrZSxuLmNvbnRyb2xzQ29udGFpbmVyP24uY29udHJvbHNDb250YWluZXI6bil9LGFjdGl2ZTpmdW5jdGlvbigpe24uY29udHJvbE5hdi5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlXCIpLmVxKG4uYW5pbWF0aW5nVG8pLmFkZENsYXNzKGkrXCJhY3RpdmVcIil9LHVwZGF0ZTpmdW5jdGlvbihlLHQpe24ucGFnaW5nQ291bnQ+MSYmXCJhZGRcIj09PWU/bi5jb250cm9sTmF2U2NhZmZvbGQuYXBwZW5kKCQoJzxsaT48YSBocmVmPVwiI1wiPicrbi5jb3VudCtcIjwvYT48L2xpPlwiKSk6MT09PW4ucGFnaW5nQ291bnQ/bi5jb250cm9sTmF2U2NhZmZvbGQuZmluZChcImxpXCIpLnJlbW92ZSgpOm4uY29udHJvbE5hdi5lcSh0KS5jbG9zZXN0KFwibGlcIikucmVtb3ZlKCksZi5jb250cm9sTmF2LnNldCgpLG4ucGFnaW5nQ291bnQ+MSYmbi5wYWdpbmdDb3VudCE9PW4uY29udHJvbE5hdi5sZW5ndGg/bi51cGRhdGUodCxlKTpmLmNvbnRyb2xOYXYuYWN0aXZlKCl9fSxkaXJlY3Rpb25OYXY6e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9JCgnPHVsIGNsYXNzPVwiJytpKydkaXJlY3Rpb24tbmF2XCI+PGxpIGNsYXNzPVwiJytpKyduYXYtcHJldlwiPjxhIGNsYXNzPVwiJytpKydwcmV2XCIgaHJlZj1cIiNcIj4nK24udmFycy5wcmV2VGV4dCsnPC9hPjwvbGk+PGxpIGNsYXNzPVwiJytpKyduYXYtbmV4dFwiPjxhIGNsYXNzPVwiJytpKyduZXh0XCIgaHJlZj1cIiNcIj4nK24udmFycy5uZXh0VGV4dCtcIjwvYT48L2xpPjwvdWw+XCIpO24uY3VzdG9tRGlyZWN0aW9uTmF2P24uZGlyZWN0aW9uTmF2PW4uY3VzdG9tRGlyZWN0aW9uTmF2Om4uY29udHJvbHNDb250YWluZXI/KCQobi5jb250cm9sc0NvbnRhaW5lcikuYXBwZW5kKGUpLG4uZGlyZWN0aW9uTmF2PSQoXCIuXCIraStcImRpcmVjdGlvbi1uYXYgbGkgYVwiLG4uY29udHJvbHNDb250YWluZXIpKToobi5hcHBlbmQoZSksbi5kaXJlY3Rpb25OYXY9JChcIi5cIitpK1wiZGlyZWN0aW9uLW5hdiBsaSBhXCIsbikpLGYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpLG4uZGlyZWN0aW9uTmF2LmJpbmQobyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ7XCJcIiE9PWwmJmwhPT1lLnR5cGV8fCh0PSQodGhpcykuaGFzQ2xhc3MoaStcIm5leHRcIik/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKSxuLmZsZXhBbmltYXRlKHQsbi52YXJzLnBhdXNlT25BY3Rpb24pKSxcIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgZT1pK1wiZGlzYWJsZWRcIjsxPT09bi5wYWdpbmdDb3VudD9uLmRpcmVjdGlvbk5hdi5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4udmFycy5hbmltYXRpb25Mb29wP24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKTowPT09bi5hbmltYXRpbmdUbz9uLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5maWx0ZXIoXCIuXCIraStcInByZXZcIikuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTpuLmFuaW1hdGluZ1RvPT09bi5sYXN0P24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLmZpbHRlcihcIi5cIitpK1wibmV4dFwiKS5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKX19LHBhdXNlUGxheTp7c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT0kKCc8ZGl2IGNsYXNzPVwiJytpKydwYXVzZXBsYXlcIj48YSBocmVmPVwiI1wiPjwvYT48L2Rpdj4nKTtuLmNvbnRyb2xzQ29udGFpbmVyPyhuLmNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZChlKSxuLnBhdXNlUGxheT0kKFwiLlwiK2krXCJwYXVzZXBsYXkgYVwiLG4uY29udHJvbHNDb250YWluZXIpKToobi5hcHBlbmQoZSksbi5wYXVzZVBsYXk9JChcIi5cIitpK1wicGF1c2VwbGF5IGFcIixuKSksZi5wYXVzZVBsYXkudXBkYXRlKG4udmFycy5zbGlkZXNob3c/aStcInBhdXNlXCI6aStcInBsYXlcIiksbi5wYXVzZVBsYXkuYmluZChvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxcIlwiIT09bCYmbCE9PWUudHlwZXx8KCQodGhpcykuaGFzQ2xhc3MoaStcInBhdXNlXCIpPyhuLm1hbnVhbFBhdXNlPSEwLG4ubWFudWFsUGxheT0hMSxuLnBhdXNlKCkpOihuLm1hbnVhbFBhdXNlPSExLG4ubWFudWFsUGxheT0hMCxuLnBsYXkoKSkpLFwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHVwZGF0ZTpmdW5jdGlvbihlKXtcInBsYXlcIj09PWU/bi5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MoaStcInBhdXNlXCIpLmFkZENsYXNzKGkrXCJwbGF5XCIpLmh0bWwobi52YXJzLnBsYXlUZXh0KTpuLnBhdXNlUGxheS5yZW1vdmVDbGFzcyhpK1wicGxheVwiKS5hZGRDbGFzcyhpK1wicGF1c2VcIikuaHRtbChuLnZhcnMucGF1c2VUZXh0KX19LHRvdWNoOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXtlLnN0b3BQcm9wYWdhdGlvbigpLG4uYW5pbWF0aW5nP2UucHJldmVudERlZmF1bHQoKToobi5wYXVzZSgpLHQuX2dlc3R1cmUuYWRkUG9pbnRlcihlLnBvaW50ZXJJZCksdz0wLGM9ZD9uLmg6bi53LGY9TnVtYmVyKG5ldyBEYXRlKSxsPXYmJnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp2JiZ1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOnYmJm4uY3VycmVudFNsaWRlPT09bi5sYXN0P24ubGltaXQ6dj8obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uY3VycmVudFNsaWRlOnU/KG4ubGFzdC1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjKX1mdW5jdGlvbiBhKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGE9ZS50YXJnZXQuX3NsaWRlcjtpZihhKXt2YXIgbj0tZS50cmFuc2xhdGlvblgsaT0tZS50cmFuc2xhdGlvblk7aWYodys9ZD9pOm4sbT0oYS52YXJzLnJ0bD8tMToxKSp3LHg9ZD9NYXRoLmFicyh3KTxNYXRoLmFicygtbik6TWF0aC5hYnModyk8TWF0aC5hYnMoLWkpLGUuZGV0YWlsPT09ZS5NU0dFU1RVUkVfRkxBR19JTkVSVElBKXJldHVybiB2b2lkIHNldEltbWVkaWF0ZShmdW5jdGlvbigpe3QuX2dlc3R1cmUuc3RvcCgpfSk7KCF4fHxOdW1iZXIobmV3IERhdGUpLWY+NTAwKSYmKGUucHJldmVudERlZmF1bHQoKSwhcCYmYS50cmFuc2l0aW9ucyYmKGEudmFycy5hbmltYXRpb25Mb29wfHwobT13LygwPT09YS5jdXJyZW50U2xpZGUmJnc8MHx8YS5jdXJyZW50U2xpZGU9PT1hLmxhc3QmJnc+MD9NYXRoLmFicyh3KS9jKzI6MSkpLGEuc2V0UHJvcHMobCttLFwic2V0VG91Y2hcIikpKX19ZnVuY3Rpb24gaShlKXtlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PWUudGFyZ2V0Ll9zbGlkZXI7aWYodCl7aWYodC5hbmltYXRpbmdUbz09PXQuY3VycmVudFNsaWRlJiYheCYmbnVsbCE9PW0pe3ZhciBhPXU/LW06bSxuPWE+MD90LmdldFRhcmdldChcIm5leHRcIik6dC5nZXRUYXJnZXQoXCJwcmV2XCIpO3QuY2FuQWR2YW5jZShuKSYmKE51bWJlcihuZXcgRGF0ZSktZjw1NTAmJk1hdGguYWJzKGEpPjUwfHxNYXRoLmFicyhhKT5jLzIpP3QuZmxleEFuaW1hdGUobix0LnZhcnMucGF1c2VPbkFjdGlvbik6cHx8dC5mbGV4QW5pbWF0ZSh0LmN1cnJlbnRTbGlkZSx0LnZhcnMucGF1c2VPbkFjdGlvbiwhMCl9cz1udWxsLG89bnVsbCxtPW51bGwsbD1udWxsLHc9MH19dmFyIHMsbyxsLGMsbSxmLGcsaCxTLHg9ITEseT0wLGI9MCx3PTA7cj8odC5zdHlsZS5tc1RvdWNoQWN0aW9uPVwibm9uZVwiLHQuX2dlc3R1cmU9bmV3IE1TR2VzdHVyZSx0Ll9nZXN0dXJlLnRhcmdldD10LHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIixlLCExKSx0Ll9zbGlkZXI9bix0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU0dlc3R1cmVDaGFuZ2VcIixhLCExKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU0dlc3R1cmVFbmRcIixpLCExKSk6KGc9ZnVuY3Rpb24oZSl7bi5hbmltYXRpbmc/ZS5wcmV2ZW50RGVmYXVsdCgpOih3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWR8fDE9PT1lLnRvdWNoZXMubGVuZ3RoKSYmKG4ucGF1c2UoKSxjPWQ/bi5oOm4udyxmPU51bWJlcihuZXcgRGF0ZSkseT1lLnRvdWNoZXNbMF0ucGFnZVgsYj1lLnRvdWNoZXNbMF0ucGFnZVksbD12JiZ1JiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0PzA6diYmdT9uLmxpbWl0LShuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbzp2JiZuLmN1cnJlbnRTbGlkZT09PW4ubGFzdD9uLmxpbWl0OnY/KG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmN1cnJlbnRTbGlkZTp1PyhuLmxhc3Qtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYzoobi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYyxzPWQ/Yjp5LG89ZD95OmIsdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsaCwhMSksdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixTLCExKSl9LGg9ZnVuY3Rpb24oZSl7eT1lLnRvdWNoZXNbMF0ucGFnZVgsYj1lLnRvdWNoZXNbMF0ucGFnZVksbT1kP3MtYjoobi52YXJzLnJ0bD8tMToxKSoocy15KSx4PWQ/TWF0aC5hYnMobSk8TWF0aC5hYnMoeS1vKTpNYXRoLmFicyhtKTxNYXRoLmFicyhiLW8pO3ZhciB0PTUwMDsoIXh8fE51bWJlcihuZXcgRGF0ZSktZj41MDApJiYoZS5wcmV2ZW50RGVmYXVsdCgpLCFwJiZuLnRyYW5zaXRpb25zJiYobi52YXJzLmFuaW1hdGlvbkxvb3B8fChtLz0wPT09bi5jdXJyZW50U2xpZGUmJm08MHx8bi5jdXJyZW50U2xpZGU9PT1uLmxhc3QmJm0+MD9NYXRoLmFicyhtKS9jKzI6MSksbi5zZXRQcm9wcyhsK20sXCJzZXRUb3VjaFwiKSkpfSxTPWZ1bmN0aW9uKGUpe2lmKHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGgsITEpLG4uYW5pbWF0aW5nVG89PT1uLmN1cnJlbnRTbGlkZSYmIXgmJm51bGwhPT1tKXt2YXIgYT11Py1tOm0saT1hPjA/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmNhbkFkdmFuY2UoaSkmJihOdW1iZXIobmV3IERhdGUpLWY8NTUwJiZNYXRoLmFicyhhKT41MHx8TWF0aC5hYnMoYSk+Yy8yKT9uLmZsZXhBbmltYXRlKGksbi52YXJzLnBhdXNlT25BY3Rpb24pOnB8fG4uZmxleEFuaW1hdGUobi5jdXJyZW50U2xpZGUsbi52YXJzLnBhdXNlT25BY3Rpb24sITApfXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsUywhMSkscz1udWxsLG89bnVsbCxtPW51bGwsbD1udWxsfSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZywhMSkpfSxyZXNpemU6ZnVuY3Rpb24oKXshbi5hbmltYXRpbmcmJm4uaXMoXCI6dmlzaWJsZVwiKSYmKHZ8fG4uZG9NYXRoKCkscD9mLnNtb290aEhlaWdodCgpOnY/KG4uc2xpZGVzLndpZHRoKG4uY29tcHV0ZWRXKSxuLnVwZGF0ZShuLnBhZ2luZ0NvdW50KSxuLnNldFByb3BzKCkpOmQ/KG4udmlld3BvcnQuaGVpZ2h0KG4uaCksbi5zZXRQcm9wcyhuLmgsXCJzZXRUb3RhbFwiKSk6KG4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KCksbi5uZXdTbGlkZXMud2lkdGgobi5jb21wdXRlZFcpLG4uc2V0UHJvcHMobi5jb21wdXRlZFcsXCJzZXRUb3RhbFwiKSkpfSxzbW9vdGhIZWlnaHQ6ZnVuY3Rpb24oZSl7aWYoIWR8fHApe3ZhciB0PXA/bjpuLnZpZXdwb3J0O2U/dC5hbmltYXRlKHtoZWlnaHQ6bi5zbGlkZXMuZXEobi5hbmltYXRpbmdUbykuaW5uZXJIZWlnaHQoKX0sZSk6dC5pbm5lckhlaWdodChuLnNsaWRlcy5lcShuLmFuaW1hdGluZ1RvKS5pbm5lckhlaWdodCgpKX19LHN5bmM6ZnVuY3Rpb24oZSl7dmFyIHQ9JChuLnZhcnMuc3luYykuZGF0YShcImZsZXhzbGlkZXJcIiksYT1uLmFuaW1hdGluZ1RvO3N3aXRjaChlKXtjYXNlXCJhbmltYXRlXCI6dC5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwKTticmVhaztjYXNlXCJwbGF5XCI6dC5wbGF5aW5nfHx0LmFzTmF2fHx0LnBsYXkoKTticmVhaztjYXNlXCJwYXVzZVwiOnQucGF1c2UoKTticmVha319LHVuaXF1ZUlEOmZ1bmN0aW9uKGUpe3JldHVybiBlLmZpbHRlcihcIltpZF1cIikuYWRkKGUuZmluZChcIltpZF1cIikpLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0kKHRoaXMpO2UuYXR0cihcImlkXCIsZS5hdHRyKFwiaWRcIikrXCJfY2xvbmVcIil9KSxlfSxwYXVzZUludmlzaWJsZTp7dmlzUHJvcDpudWxsLGluaXQ6ZnVuY3Rpb24oKXt2YXIgZT1mLnBhdXNlSW52aXNpYmxlLmdldEhpZGRlblByb3AoKTtpZihlKXt2YXIgdD1lLnJlcGxhY2UoL1tIfGhdaWRkZW4vLFwiXCIpK1widmlzaWJpbGl0eWNoYW5nZVwiO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodCxmdW5jdGlvbigpe2YucGF1c2VJbnZpc2libGUuaXNIaWRkZW4oKT9uLnN0YXJ0VGltZW91dD9jbGVhclRpbWVvdXQobi5zdGFydFRpbWVvdXQpOm4ucGF1c2UoKTpuLnN0YXJ0ZWQ/bi5wbGF5KCk6bi52YXJzLmluaXREZWxheT4wP3NldFRpbWVvdXQobi5wbGF5LG4udmFycy5pbml0RGVsYXkpOm4ucGxheSgpfSl9fSxpc0hpZGRlbjpmdW5jdGlvbigpe3ZhciBlPWYucGF1c2VJbnZpc2libGUuZ2V0SGlkZGVuUHJvcCgpO3JldHVybiEhZSYmZG9jdW1lbnRbZV19LGdldEhpZGRlblByb3A6ZnVuY3Rpb24oKXt2YXIgZT1bXCJ3ZWJraXRcIixcIm1velwiLFwibXNcIixcIm9cIl07aWYoXCJoaWRkZW5cImluIGRvY3VtZW50KXJldHVyblwiaGlkZGVuXCI7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0KyspaWYoZVt0XStcIkhpZGRlblwiaW4gZG9jdW1lbnQpcmV0dXJuIGVbdF0rXCJIaWRkZW5cIjtyZXR1cm4gbnVsbH19LHNldFRvQ2xlYXJXYXRjaGVkRXZlbnQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoYyksYz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bD1cIlwifSwzZTMpfX0sbi5mbGV4QW5pbWF0ZT1mdW5jdGlvbihlLHQsYSxyLG8pe2lmKG4udmFycy5hbmltYXRpb25Mb29wfHxlPT09bi5jdXJyZW50U2xpZGV8fChuLmRpcmVjdGlvbj1lPm4uY3VycmVudFNsaWRlP1wibmV4dFwiOlwicHJldlwiKSxtJiYxPT09bi5wYWdpbmdDb3VudCYmKG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08ZT9cIm5leHRcIjpcInByZXZcIiksIW4uYW5pbWF0aW5nJiYobi5jYW5BZHZhbmNlKGUsbyl8fGEpJiZuLmlzKFwiOnZpc2libGVcIikpe2lmKG0mJnIpe3ZhciBsPSQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKTtpZihuLmF0RW5kPTA9PT1lfHxlPT09bi5jb3VudC0xLGwuZmxleEFuaW1hdGUoZSwhMCwhMSwhMCxvKSxuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGU/XCJuZXh0XCI6XCJwcmV2XCIsbC5kaXJlY3Rpb249bi5kaXJlY3Rpb24sTWF0aC5jZWlsKChlKzEpL24udmlzaWJsZSktMT09PW4uY3VycmVudFNsaWRlfHwwPT09ZSlyZXR1cm4gbi5jdXJyZW50SXRlbT1lLG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSwhMTtuLmN1cnJlbnRJdGVtPWUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLGU9TWF0aC5mbG9vcihlL24udmlzaWJsZSl9aWYobi5hbmltYXRpbmc9ITAsbi5hbmltYXRpbmdUbz1lLHQmJm4ucGF1c2UoKSxuLnZhcnMuYmVmb3JlKG4pLG4uc3luY0V4aXN0cyYmIW8mJmYuc3luYyhcImFuaW1hdGVcIiksbi52YXJzLmNvbnRyb2xOYXYmJmYuY29udHJvbE5hdi5hY3RpdmUoKSx2fHxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksbi5hdEVuZD0wPT09ZXx8ZT09PW4ubGFzdCxuLnZhcnMuZGlyZWN0aW9uTmF2JiZmLmRpcmVjdGlvbk5hdi51cGRhdGUoKSxlPT09bi5sYXN0JiYobi52YXJzLmVuZChuKSxuLnZhcnMuYW5pbWF0aW9uTG9vcHx8bi5wYXVzZSgpKSxwKXM/KG4uc2xpZGVzLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe29wYWNpdHk6MCx6SW5kZXg6MX0pLG4uc2xpZGVzLmVxKGUpLmNzcyh7b3BhY2l0eToxLHpJbmRleDoyfSksbi53cmFwdXAoYykpOihuLnNsaWRlcy5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6MX0pLmFuaW1hdGUoe29wYWNpdHk6MH0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcpLG4uc2xpZGVzLmVxKGUpLmNzcyh7ekluZGV4OjJ9KS5hbmltYXRlKHtvcGFjaXR5OjF9LG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nLG4ud3JhcHVwKSk7ZWxzZXt2YXIgYz1kP24uc2xpZGVzLmZpbHRlcihcIjpmaXJzdFwiKS5oZWlnaHQoKTpuLmNvbXB1dGVkVyxnLGgsUzt2PyhnPW4udmFycy5pdGVtTWFyZ2luLFM9KG4uaXRlbVcrZykqbi5tb3ZlKm4uYW5pbWF0aW5nVG8saD1TPm4ubGltaXQmJjEhPT1uLnZpc2libGU/bi5saW1pdDpTKTpoPTA9PT1uLmN1cnJlbnRTbGlkZSYmZT09PW4uY291bnQtMSYmbi52YXJzLmFuaW1hdGlvbkxvb3AmJlwibmV4dFwiIT09bi5kaXJlY3Rpb24/dT8obi5jb3VudCtuLmNsb25lT2Zmc2V0KSpjOjA6bi5jdXJyZW50U2xpZGU9PT1uLmxhc3QmJjA9PT1lJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmXCJwcmV2XCIhPT1uLmRpcmVjdGlvbj91PzA6KG4uY291bnQrMSkqYzp1PyhuLmNvdW50LTEtZStuLmNsb25lT2Zmc2V0KSpjOihlK24uY2xvbmVPZmZzZXQpKmMsbi5zZXRQcm9wcyhoLFwiXCIsbi52YXJzLmFuaW1hdGlvblNwZWVkKSxuLnRyYW5zaXRpb25zPyhuLnZhcnMuYW5pbWF0aW9uTG9vcCYmbi5hdEVuZHx8KG4uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPW4uYW5pbWF0aW5nVG8pLG4uY29udGFpbmVyLnVuYmluZChcIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKSxuLmNvbnRhaW5lci5iaW5kKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIsZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQobi5lbnN1cmVBbmltYXRpb25FbmQpLG4ud3JhcHVwKGMpfSksY2xlYXJUaW1lb3V0KG4uZW5zdXJlQW5pbWF0aW9uRW5kKSxuLmVuc3VyZUFuaW1hdGlvbkVuZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi53cmFwdXAoYyl9LG4udmFycy5hbmltYXRpb25TcGVlZCsxMDApKTpuLmNvbnRhaW5lci5hbmltYXRlKG4uYXJncyxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyxmdW5jdGlvbigpe24ud3JhcHVwKGMpfSl9bi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQobi52YXJzLmFuaW1hdGlvblNwZWVkKX19LG4ud3JhcHVwPWZ1bmN0aW9uKGUpe3B8fHZ8fCgwPT09bi5jdXJyZW50U2xpZGUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3QmJm4udmFycy5hbmltYXRpb25Mb29wP24uc2V0UHJvcHMoZSxcImp1bXBFbmRcIik6bi5jdXJyZW50U2xpZGU9PT1uLmxhc3QmJjA9PT1uLmFuaW1hdGluZ1RvJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmbi5zZXRQcm9wcyhlLFwianVtcFN0YXJ0XCIpKSxuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1uLmFuaW1hdGluZ1RvLG4udmFycy5hZnRlcihuKX0sbi5hbmltYXRlU2xpZGVzPWZ1bmN0aW9uKCl7IW4uYW5pbWF0aW5nJiZlJiZuLmZsZXhBbmltYXRlKG4uZ2V0VGFyZ2V0KFwibmV4dFwiKSl9LG4ucGF1c2U9ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKG4uYW5pbWF0ZWRTbGlkZXMpLG4uYW5pbWF0ZWRTbGlkZXM9bnVsbCxuLnBsYXlpbmc9ITEsbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkudXBkYXRlKFwicGxheVwiKSxuLnN5bmNFeGlzdHMmJmYuc3luYyhcInBhdXNlXCIpfSxuLnBsYXk9ZnVuY3Rpb24oKXtuLnBsYXlpbmcmJmNsZWFySW50ZXJ2YWwobi5hbmltYXRlZFNsaWRlcyksbi5hbmltYXRlZFNsaWRlcz1uLmFuaW1hdGVkU2xpZGVzfHxzZXRJbnRlcnZhbChuLmFuaW1hdGVTbGlkZXMsbi52YXJzLnNsaWRlc2hvd1NwZWVkKSxuLnN0YXJ0ZWQ9bi5wbGF5aW5nPSEwLG4udmFycy5wYXVzZVBsYXkmJmYucGF1c2VQbGF5LnVwZGF0ZShcInBhdXNlXCIpLG4uc3luY0V4aXN0cyYmZi5zeW5jKFwicGxheVwiKX0sbi5zdG9wPWZ1bmN0aW9uKCl7bi5wYXVzZSgpLG4uc3RvcHBlZD0hMH0sbi5jYW5BZHZhbmNlPWZ1bmN0aW9uKGUsdCl7dmFyIGE9bT9uLnBhZ2luZ0NvdW50LTE6bi5sYXN0O3JldHVybiEhdHx8KCEoIW18fG4uY3VycmVudEl0ZW0hPT1uLmNvdW50LTF8fDAhPT1lfHxcInByZXZcIiE9PW4uZGlyZWN0aW9uKXx8KCFtfHwwIT09bi5jdXJyZW50SXRlbXx8ZSE9PW4ucGFnaW5nQ291bnQtMXx8XCJuZXh0XCI9PT1uLmRpcmVjdGlvbikmJighKGU9PT1uLmN1cnJlbnRTbGlkZSYmIW0pJiYoISFuLnZhcnMuYW5pbWF0aW9uTG9vcHx8KCFuLmF0RW5kfHwwIT09bi5jdXJyZW50U2xpZGV8fGUhPT1hfHxcIm5leHRcIj09PW4uZGlyZWN0aW9uKSYmKCFuLmF0RW5kfHxuLmN1cnJlbnRTbGlkZSE9PWF8fDAhPT1lfHxcIm5leHRcIiE9PW4uZGlyZWN0aW9uKSkpKX0sbi5nZXRUYXJnZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG4uZGlyZWN0aW9uPWUsXCJuZXh0XCI9PT1lP24uY3VycmVudFNsaWRlPT09bi5sYXN0PzA6bi5jdXJyZW50U2xpZGUrMTowPT09bi5jdXJyZW50U2xpZGU/bi5sYXN0Om4uY3VycmVudFNsaWRlLTF9LG4uc2V0UHJvcHM9ZnVuY3Rpb24oZSx0LGEpe3ZhciBpPWZ1bmN0aW9uKCl7dmFyIGE9ZXx8KG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvO3JldHVybiBmdW5jdGlvbigpe2lmKHYpcmV0dXJuXCJzZXRUb3VjaFwiPT09dD9lOnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/bi5saW1pdDphO3N3aXRjaCh0KXtjYXNlXCJzZXRUb3RhbFwiOnJldHVybiB1PyhuLmNvdW50LTEtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqZToobi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqZTtjYXNlXCJzZXRUb3VjaFwiOnJldHVybiBlO2Nhc2VcImp1bXBFbmRcIjpyZXR1cm4gdT9lOm4uY291bnQqZTtjYXNlXCJqdW1wU3RhcnRcIjpyZXR1cm4gdT9uLmNvdW50KmU6ZTtkZWZhdWx0OnJldHVybiBlfX0oKSoobi52YXJzLnJ0bD8xOi0xKStcInB4XCJ9KCk7bi50cmFuc2l0aW9ucyYmKGk9bi5pc0ZpcmVmb3g/ZD9cInRyYW5zbGF0ZTNkKDAsXCIraStcIiwwKVwiOlwidHJhbnNsYXRlM2QoXCIrcGFyc2VJbnQoaSkrXCJweCwwLDApXCI6ZD9cInRyYW5zbGF0ZTNkKDAsXCIraStcIiwwKVwiOlwidHJhbnNsYXRlM2QoXCIrKG4udmFycy5ydGw/LTE6MSkqcGFyc2VJbnQoaSkrXCJweCwwLDApXCIsYT12b2lkIDAhPT1hP2EvMWUzK1wic1wiOlwiMHNcIixuLmNvbnRhaW5lci5jc3MoXCItXCIrbi5wZngrXCItdHJhbnNpdGlvbi1kdXJhdGlvblwiLGEpLG4uY29udGFpbmVyLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIixhKSksbi5hcmdzW24ucHJvcF09aSwobi50cmFuc2l0aW9uc3x8dm9pZCAwPT09YSkmJm4uY29udGFpbmVyLmNzcyhuLmFyZ3MpLG4uY29udGFpbmVyLmNzcyhcInRyYW5zZm9ybVwiLGkpfSxuLnNldHVwPWZ1bmN0aW9uKGUpe2lmKHApbi52YXJzLnJ0bD9uLnNsaWRlcy5jc3Moe3dpZHRoOlwiMTAwJVwiLGZsb2F0OlwicmlnaHRcIixtYXJnaW5MZWZ0OlwiLTEwMCVcIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KTpuLnNsaWRlcy5jc3Moe3dpZHRoOlwiMTAwJVwiLGZsb2F0OlwibGVmdFwiLG1hcmdpblJpZ2h0OlwiLTEwMCVcIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KSxcImluaXRcIj09PWUmJihzP24uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHdlYmtpdFRyYW5zaXRpb246XCJvcGFjaXR5IFwiK24udmFycy5hbmltYXRpb25TcGVlZC8xZTMrXCJzIGVhc2VcIix6SW5kZXg6MX0pLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6Mn0pOjA9PW4udmFycy5mYWRlRmlyc3RTbGlkZT9uLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix6SW5kZXg6MX0pLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoyfSkuY3NzKHtvcGFjaXR5OjF9KTpuLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix6SW5kZXg6MX0pLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoyfSkuYW5pbWF0ZSh7b3BhY2l0eToxfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZykpLG4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KCk7ZWxzZXt2YXIgdCxhO1wiaW5pdFwiPT09ZSYmKG4udmlld3BvcnQ9JCgnPGRpdiBjbGFzcz1cIicraSsndmlld3BvcnRcIj48L2Rpdj4nKS5jc3Moe292ZXJmbG93OlwiaGlkZGVuXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSkuYXBwZW5kVG8obikuYXBwZW5kKG4uY29udGFpbmVyKSxuLmNsb25lQ291bnQ9MCxuLmNsb25lT2Zmc2V0PTAsdSYmKGE9JC5tYWtlQXJyYXkobi5zbGlkZXMpLnJldmVyc2UoKSxuLnNsaWRlcz0kKGEpLG4uY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKG4uc2xpZGVzKSkpLG4udmFycy5hbmltYXRpb25Mb29wJiYhdiYmKG4uY2xvbmVDb3VudD0yLG4uY2xvbmVPZmZzZXQ9MSxcImluaXRcIiE9PWUmJm4uY29udGFpbmVyLmZpbmQoXCIuY2xvbmVcIikucmVtb3ZlKCksbi5jb250YWluZXIuYXBwZW5kKGYudW5pcXVlSUQobi5zbGlkZXMuZmlyc3QoKS5jbG9uZSgpLmFkZENsYXNzKFwiY2xvbmVcIikpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSkucHJlcGVuZChmLnVuaXF1ZUlEKG4uc2xpZGVzLmxhc3QoKS5jbG9uZSgpLmFkZENsYXNzKFwiY2xvbmVcIikpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSkpLG4ubmV3U2xpZGVzPSQobi52YXJzLnNlbGVjdG9yLG4pLHQ9dT9uLmNvdW50LTEtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldDpuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0LGQmJiF2PyhuLmNvbnRhaW5lci5oZWlnaHQoMjAwKihuLmNvdW50K24uY2xvbmVDb3VudCkrXCIlXCIpLmNzcyhcInBvc2l0aW9uXCIsXCJhYnNvbHV0ZVwiKS53aWR0aChcIjEwMCVcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24ubmV3U2xpZGVzLmNzcyh7ZGlzcGxheTpcImJsb2NrXCJ9KSxuLmRvTWF0aCgpLG4udmlld3BvcnQuaGVpZ2h0KG4uaCksbi5zZXRQcm9wcyh0Km4uaCxcImluaXRcIil9LFwiaW5pdFwiPT09ZT8xMDA6MCkpOihuLmNvbnRhaW5lci53aWR0aCgyMDAqKG4uY291bnQrbi5jbG9uZUNvdW50KStcIiVcIiksbi5zZXRQcm9wcyh0Km4uY29tcHV0ZWRXLFwiaW5pdFwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5kb01hdGgoKSxuLnZhcnMucnRsJiZuLmlzRmlyZWZveD9uLm5ld1NsaWRlcy5jc3Moe3dpZHRoOm4uY29tcHV0ZWRXLG1hcmdpblJpZ2h0Om4uY29tcHV0ZWRNLGZsb2F0OlwicmlnaHRcIixkaXNwbGF5OlwiYmxvY2tcIn0pOm4ubmV3U2xpZGVzLmNzcyh7d2lkdGg6bi5jb21wdXRlZFcsbWFyZ2luUmlnaHQ6bi5jb21wdXRlZE0sZmxvYXQ6XCJsZWZ0XCIsZGlzcGxheTpcImJsb2NrXCJ9KSxuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpfSxcImluaXRcIj09PWU/MTAwOjApKX12fHxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKG4uY3VycmVudFNsaWRlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLG4udmFycy5pbml0KG4pfSxuLmRvTWF0aD1mdW5jdGlvbigpe3ZhciBlPW4uc2xpZGVzLmZpcnN0KCksdD1uLnZhcnMuaXRlbU1hcmdpbixhPW4udmFycy5taW5JdGVtcyxpPW4udmFycy5tYXhJdGVtcztuLnc9dm9pZCAwPT09bi52aWV3cG9ydD9uLndpZHRoKCk6bi52aWV3cG9ydC53aWR0aCgpLG4uaXNGaXJlZm94JiYobi53PW4ud2lkdGgoKSksbi5oPWUuaGVpZ2h0KCksbi5ib3hQYWRkaW5nPWUub3V0ZXJXaWR0aCgpLWUud2lkdGgoKSx2PyhuLml0ZW1UPW4udmFycy5pdGVtV2lkdGgrdCxuLml0ZW1NPXQsbi5taW5XPWE/YSpuLml0ZW1UOm4udyxuLm1heFc9aT9pKm4uaXRlbVQtdDpuLncsbi5pdGVtVz1uLm1pblc+bi53PyhuLnctdCooYS0xKSkvYTpuLm1heFc8bi53PyhuLnctdCooaS0xKSkvaTpuLnZhcnMuaXRlbVdpZHRoPm4udz9uLnc6bi52YXJzLml0ZW1XaWR0aCxuLnZpc2libGU9TWF0aC5mbG9vcihuLncvbi5pdGVtVyksbi5tb3ZlPW4udmFycy5tb3ZlPjAmJm4udmFycy5tb3ZlPG4udmlzaWJsZT9uLnZhcnMubW92ZTpuLnZpc2libGUsbi5wYWdpbmdDb3VudD1NYXRoLmNlaWwoKG4uY291bnQtbi52aXNpYmxlKS9uLm1vdmUrMSksbi5sYXN0PW4ucGFnaW5nQ291bnQtMSxuLmxpbWl0PTE9PT1uLnBhZ2luZ0NvdW50PzA6bi52YXJzLml0ZW1XaWR0aD5uLnc/bi5pdGVtVyoobi5jb3VudC0xKSt0KihuLmNvdW50LTEpOihuLml0ZW1XK3QpKm4uY291bnQtbi53LXQpOihuLml0ZW1XPW4udyxuLml0ZW1NPXQsbi5wYWdpbmdDb3VudD1uLmNvdW50LG4ubGFzdD1uLmNvdW50LTEpLG4uY29tcHV0ZWRXPW4uaXRlbVctbi5ib3hQYWRkaW5nLG4uY29tcHV0ZWRNPW4uaXRlbU19LG4udXBkYXRlPWZ1bmN0aW9uKGUsdCl7bi5kb01hdGgoKSx2fHwoZTxuLmN1cnJlbnRTbGlkZT9uLmN1cnJlbnRTbGlkZSs9MTplPD1uLmN1cnJlbnRTbGlkZSYmMCE9PWUmJihuLmN1cnJlbnRTbGlkZS09MSksbi5hbmltYXRpbmdUbz1uLmN1cnJlbnRTbGlkZSksbi52YXJzLmNvbnRyb2xOYXYmJiFuLm1hbnVhbENvbnRyb2xzJiYoXCJhZGRcIj09PXQmJiF2fHxuLnBhZ2luZ0NvdW50Pm4uY29udHJvbE5hdi5sZW5ndGg/Zi5jb250cm9sTmF2LnVwZGF0ZShcImFkZFwiKTooXCJyZW1vdmVcIj09PXQmJiF2fHxuLnBhZ2luZ0NvdW50PG4uY29udHJvbE5hdi5sZW5ndGgpJiYodiYmbi5jdXJyZW50U2xpZGU+bi5sYXN0JiYobi5jdXJyZW50U2xpZGUtPTEsbi5hbmltYXRpbmdUby09MSksZi5jb250cm9sTmF2LnVwZGF0ZShcInJlbW92ZVwiLG4ubGFzdCkpKSxuLnZhcnMuZGlyZWN0aW9uTmF2JiZmLmRpcmVjdGlvbk5hdi51cGRhdGUoKX0sbi5hZGRTbGlkZT1mdW5jdGlvbihlLHQpe3ZhciBhPSQoZSk7bi5jb3VudCs9MSxuLmxhc3Q9bi5jb3VudC0xLGQmJnU/dm9pZCAwIT09dD9uLnNsaWRlcy5lcShuLmNvdW50LXQpLmFmdGVyKGEpOm4uY29udGFpbmVyLnByZXBlbmQoYSk6dm9pZCAwIT09dD9uLnNsaWRlcy5lcSh0KS5iZWZvcmUoYSk6bi5jb250YWluZXIuYXBwZW5kKGEpLG4udXBkYXRlKHQsXCJhZGRcIiksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IrXCI6bm90KC5jbG9uZSlcIixuKSxuLnNldHVwKCksbi52YXJzLmFkZGVkKG4pfSxuLnJlbW92ZVNsaWRlPWZ1bmN0aW9uKGUpe3ZhciB0PWlzTmFOKGUpP24uc2xpZGVzLmluZGV4KCQoZSkpOmU7bi5jb3VudC09MSxuLmxhc3Q9bi5jb3VudC0xLGlzTmFOKGUpPyQoZSxuLnNsaWRlcykucmVtb3ZlKCk6ZCYmdT9uLnNsaWRlcy5lcShuLmxhc3QpLnJlbW92ZSgpOm4uc2xpZGVzLmVxKGUpLnJlbW92ZSgpLG4uZG9NYXRoKCksbi51cGRhdGUodCxcInJlbW92ZVwiKSxuLnNsaWRlcz0kKG4udmFycy5zZWxlY3RvcitcIjpub3QoLmNsb25lKVwiLG4pLG4uc2V0dXAoKSxuLnZhcnMucmVtb3ZlZChuKX0sZi5pbml0KCl9LCQod2luZG93KS5ibHVyKGZ1bmN0aW9uKHQpe2U9ITF9KS5mb2N1cyhmdW5jdGlvbih0KXtlPSEwfSksJC5mbGV4c2xpZGVyLmRlZmF1bHRzPXtuYW1lc3BhY2U6XCJmbGV4LVwiLHNlbGVjdG9yOlwiLnNsaWRlcyA+IGxpXCIsYW5pbWF0aW9uOlwiZmFkZVwiLGVhc2luZzpcInN3aW5nXCIsZGlyZWN0aW9uOlwiaG9yaXpvbnRhbFwiLHJldmVyc2U6ITEsYW5pbWF0aW9uTG9vcDohMCxzbW9vdGhIZWlnaHQ6ITEsc3RhcnRBdDowLHNsaWRlc2hvdzohMCxzbGlkZXNob3dTcGVlZDo3ZTMsYW5pbWF0aW9uU3BlZWQ6NjAwLGluaXREZWxheTowLHJhbmRvbWl6ZTohMSxmYWRlRmlyc3RTbGlkZTohMCx0aHVtYkNhcHRpb25zOiExLHBhdXNlT25BY3Rpb246ITAscGF1c2VPbkhvdmVyOiExLHBhdXNlSW52aXNpYmxlOiEwLHVzZUNTUzohMCx0b3VjaDohMCx2aWRlbzohMSxjb250cm9sTmF2OiEwLGRpcmVjdGlvbk5hdjohMCxwcmV2VGV4dDpcIlByZXZpb3VzXCIsbmV4dFRleHQ6XCJOZXh0XCIsa2V5Ym9hcmQ6ITAsbXVsdGlwbGVLZXlib2FyZDohMSxtb3VzZXdoZWVsOiExLHBhdXNlUGxheTohMSxwYXVzZVRleHQ6XCJQYXVzZVwiLHBsYXlUZXh0OlwiUGxheVwiLGNvbnRyb2xzQ29udGFpbmVyOlwiXCIsbWFudWFsQ29udHJvbHM6XCJcIixjdXN0b21EaXJlY3Rpb25OYXY6XCJcIixzeW5jOlwiXCIsYXNOYXZGb3I6XCJcIixpdGVtV2lkdGg6MCxpdGVtTWFyZ2luOjAsbWluSXRlbXM6MSxtYXhJdGVtczowLG1vdmU6MCxhbGxvd09uZVNsaWRlOiEwLGlzRmlyZWZveDohMSxzdGFydDpmdW5jdGlvbigpe30sYmVmb3JlOmZ1bmN0aW9uKCl7fSxhZnRlcjpmdW5jdGlvbigpe30sZW5kOmZ1bmN0aW9uKCl7fSxhZGRlZDpmdW5jdGlvbigpe30scmVtb3ZlZDpmdW5jdGlvbigpe30saW5pdDpmdW5jdGlvbigpe30scnRsOiExfSwkLmZuLmZsZXhzbGlkZXI9ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSYmKGU9e30pLFwib2JqZWN0XCI9PXR5cGVvZiBlKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD0kKHRoaXMpLGE9ZS5zZWxlY3Rvcj9lLnNlbGVjdG9yOlwiLnNsaWRlcyA+IGxpXCIsbj10LmZpbmQoYSk7MT09PW4ubGVuZ3RoJiYhMT09PWUuYWxsb3dPbmVTbGlkZXx8MD09PW4ubGVuZ3RoPyhuLmZhZGVJbig0MDApLGUuc3RhcnQmJmUuc3RhcnQodCkpOnZvaWQgMD09PXQuZGF0YShcImZsZXhzbGlkZXJcIikmJm5ldyAkLmZsZXhzbGlkZXIodGhpcyxlKX0pO3ZhciB0PSQodGhpcykuZGF0YShcImZsZXhzbGlkZXJcIik7c3dpdGNoKGUpe2Nhc2VcInBsYXlcIjp0LnBsYXkoKTticmVhaztjYXNlXCJwYXVzZVwiOnQucGF1c2UoKTticmVhaztjYXNlXCJzdG9wXCI6dC5zdG9wKCk7YnJlYWs7Y2FzZVwibmV4dFwiOnQuZmxleEFuaW1hdGUodC5nZXRUYXJnZXQoXCJuZXh0XCIpLCEwKTticmVhaztjYXNlXCJwcmV2XCI6Y2FzZVwicHJldmlvdXNcIjp0LmZsZXhBbmltYXRlKHQuZ2V0VGFyZ2V0KFwicHJldlwiKSwhMCk7YnJlYWs7ZGVmYXVsdDpcIm51bWJlclwiPT10eXBlb2YgZSYmdC5mbGV4QW5pbWF0ZShlLCEwKX19fShqUXVlcnkpOyIsIiFmdW5jdGlvbihnKXtnLmZuLnR3ZW50eXR3ZW50eT1mdW5jdGlvbihtKXttPWcuZXh0ZW5kKHtkZWZhdWx0X29mZnNldF9wY3Q6LjUsb3JpZW50YXRpb246XCJob3Jpem9udGFsXCIsYmVmb3JlX2xhYmVsOlwiQmVmb3JlXCIsYWZ0ZXJfbGFiZWw6XCJBZnRlclwiLG5vX292ZXJsYXk6ITEsbW92ZV9zbGlkZXJfb25faG92ZXI6ITEsbW92ZV93aXRoX2hhbmRsZV9vbmx5OiEwLGNsaWNrX3RvX21vdmU6ITF9LG0pO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1tLmRlZmF1bHRfb2Zmc2V0X3BjdCxzPWcodGhpcykscj1tLm9yaWVudGF0aW9uLHQ9XCJ2ZXJ0aWNhbFwiPT09cj9cImRvd25cIjpcImxlZnRcIixuPVwidmVydGljYWxcIj09PXI/XCJ1cFwiOlwicmlnaHRcIjtpZihzLndyYXAoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktd3JhcHBlciB0d2VudHl0d2VudHktXCIrcitcIic+PC9kaXY+XCIpLCFtLm5vX292ZXJsYXkpe3MuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LW92ZXJsYXknPjwvZGl2PlwiKTt2YXIgYT1zLmZpbmQoXCIudHdlbnR5dHdlbnR5LW92ZXJsYXlcIik7YS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktYmVmb3JlLWxhYmVsJyBkYXRhLWNvbnRlbnQ9J1wiK20uYmVmb3JlX2xhYmVsK1wiJz48L2Rpdj5cIiksYS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktYWZ0ZXItbGFiZWwnIGRhdGEtY29udGVudD0nXCIrbS5hZnRlcl9sYWJlbCtcIic+PC9kaXY+XCIpfXZhciBjPXMuZmluZChcImltZzpmaXJzdFwiKSxsPXMuZmluZChcImltZzpsYXN0XCIpO3MuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWhhbmRsZSc+PC9kaXY+XCIpO3ZhciBkPXMuZmluZChcIi50d2VudHl0d2VudHktaGFuZGxlXCIpO2QuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J3R3ZW50eXR3ZW50eS1cIit0K1wiLWFycm93Jz48L3NwYW4+XCIpLGQuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J3R3ZW50eXR3ZW50eS1cIituK1wiLWFycm93Jz48L3NwYW4+XCIpLHMuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktY29udGFpbmVyXCIpLGMuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktYmVmb3JlXCIpLGwuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktYWZ0ZXJcIik7ZnVuY3Rpb24gaSh0KXt2YXIgZSxuLGEsaSxvPShlPXQsbj1jLndpZHRoKCksYT1jLmhlaWdodCgpLHt3Om4rXCJweFwiLGg6YStcInB4XCIsY3c6ZSpuK1wicHhcIixjaDplKmErXCJweFwifSk7ZC5jc3MoXCJ2ZXJ0aWNhbFwiPT09cj9cInRvcFwiOlwibGVmdFwiLFwidmVydGljYWxcIj09PXI/by5jaDpvLmN3KSxpPW8sXCJ2ZXJ0aWNhbFwiPT09cj8oYy5jc3MoXCJjbGlwXCIsXCJyZWN0KDAsXCIraS53K1wiLFwiK2kuY2grXCIsMClcIiksbC5jc3MoXCJjbGlwXCIsXCJyZWN0KFwiK2kuY2grXCIsXCIraS53K1wiLFwiK2kuaCtcIiwwKVwiKSk6KGMuY3NzKFwiY2xpcFwiLFwicmVjdCgwLFwiK2kuY3crXCIsXCIraS5oK1wiLDApXCIpLGwuY3NzKFwiY2xpcFwiLFwicmVjdCgwLFwiK2kudytcIixcIitpLmgrXCIsXCIraS5jdytcIilcIikpLHMuY3NzKFwiaGVpZ2h0XCIsaS5oKX1mdW5jdGlvbiBvKHQsZSl7dmFyIG4sYSxpO3JldHVybiBuPVwidmVydGljYWxcIj09PXI/KGUteSkvdToodC1wKS9oLGE9MCxpPTEsTWF0aC5tYXgoYSxNYXRoLm1pbihpLG4pKX1nKHdpbmRvdykub24oXCJyZXNpemUudHdlbnR5dHdlbnR5XCIsZnVuY3Rpb24odCl7aShlKX0pO2Z1bmN0aW9uIHcodCl7KHQuZGlzdFg+dC5kaXN0WSYmdC5kaXN0WDwtdC5kaXN0WXx8dC5kaXN0WDx0LmRpc3RZJiZ0LmRpc3RYPi10LmRpc3RZKSYmXCJ2ZXJ0aWNhbFwiIT09cj90LnByZXZlbnREZWZhdWx0KCk6KHQuZGlzdFg8dC5kaXN0WSYmdC5kaXN0WDwtdC5kaXN0WXx8dC5kaXN0WD50LmRpc3RZJiZ0LmRpc3RYPi10LmRpc3RZKSYmXCJ2ZXJ0aWNhbFwiPT09ciYmdC5wcmV2ZW50RGVmYXVsdCgpLHMuYWRkQ2xhc3MoXCJhY3RpdmVcIikscD1zLm9mZnNldCgpLmxlZnQseT1zLm9mZnNldCgpLnRvcCxoPWMud2lkdGgoKSx1PWMuaGVpZ2h0KCl9ZnVuY3Rpb24gZih0KXtzLmhhc0NsYXNzKFwiYWN0aXZlXCIpJiYoZT1vKHQucGFnZVgsdC5wYWdlWSksaShlKSl9ZnVuY3Rpb24gdigpe3MucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9dmFyIHA9MCx5PTAsaD0wLHU9MCxfPW0ubW92ZV93aXRoX2hhbmRsZV9vbmx5P2Q6cztfLm9uKFwibW92ZXN0YXJ0XCIsdyksXy5vbihcIm1vdmVcIixmKSxfLm9uKFwibW92ZWVuZFwiLHYpLG0ubW92ZV9zbGlkZXJfb25faG92ZXImJihzLm9uKFwibW91c2VlbnRlclwiLHcpLHMub24oXCJtb3VzZW1vdmVcIixmKSxzLm9uKFwibW91c2VsZWF2ZVwiLHYpKSxkLm9uKFwidG91Y2htb3ZlXCIsZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpfSkscy5maW5kKFwiaW1nXCIpLm9uKFwibW91c2Vkb3duXCIsZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpfSksbS5jbGlja190b19tb3ZlJiZzLm9uKFwiY2xpY2tcIixmdW5jdGlvbih0KXtwPXMub2Zmc2V0KCkubGVmdCx5PXMub2Zmc2V0KCkudG9wLGg9Yy53aWR0aCgpLHU9Yy5oZWlnaHQoKSxlPW8odC5wYWdlWCx0LnBhZ2VZKSxpKGUpfSksZyh3aW5kb3cpLnRyaWdnZXIoXCJyZXNpemUudHdlbnR5dHdlbnR5XCIpfSl9fShqUXVlcnkpOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjbWVudS1vcGVuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI21lbnUtb3BlbiBzcGFuJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAkKCcubmF2Jykuc2xpZGVUb2dnbGUoJ3Nsb3cnKTsgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wcm9kdWN0cyBzdWIgbWVudVxyXG4gICAgJCgnLnByb2R1Y3RzLW1lbnUtbGluaz5hJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmRvd25sb2FkcycpLnJlbW92ZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzJykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgIH0pOyAgXHJcblxyXG4gICAgLy9kb3dubG9hZHMgc3ViIG1lbnVcclxuICAgICQoJy5kb3dubG9hZC1tZW51LWxpbmsnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcucHJvZHVjdHMnKS5yZW1vdmVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICQoJy5kb3dubG9hZHMnKS50b2dnbGVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jaGFuZ2UgcHJvZHVjdCBtZW51IGxpbmsgb24gbW9iaWxlXHJcblxyXG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICBpZih3IDwgMTIwMCkge1xyXG4gICAgICAkKCcucHJvZHVjdHMtbWVudS1saW5rPmEnKS5hdHRyKCdocmVmJywgJy9wcm9kdWN0cycpO1xyXG4gICAgICAkKCcuZG93bmxvYWQtbWVudS1saW5rPmEnKS5hdHRyKCdocmVmJywgJy9kb3dubG9hZHMnKTtcclxuICAgIH0gXHJcblxyXG4gIC8vY29sbGFwc2libGUgbWVudXMgZnVuY3Rpb25cclxuICBmdW5jdGlvbiBzZXR1cF9jb2xsYXBzaWJsZV9zdWJtZW51cygpIHtcclxuICAgIHZhciAkbWVudSA9ICQoJyNtb2JpbGVfbWVudScpLFxyXG4gICAgICB0b3BfbGV2ZWxfbGluayA9ICcjbW9iaWxlX21lbnUgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhJztcclxuICAgICAgY29uc29sZS5sb2coJG1lbnUpO1xyXG4gICAgJG1lbnUuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykub2ZmKCdjbGljaycpO1xyXG4gICAgICAgXHJcbiAgICAgIGlmICggJCh0aGlzKS5pcyh0b3BfbGV2ZWxfbGluaykgKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdocmVmJywgJyMnKTtcclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgIGlmICggISAkKHRoaXMpLnNpYmxpbmdzKCcuc3ViLW1lbnUnKS5sZW5ndGggKSB7XHJcbiAgICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAgXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXR1cF9jb2xsYXBzaWJsZV9zdWJtZW51cygpO1xyXG4gICAgfSwgNzAwKTtcclxuICB9KTtcclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgICQoJy5uZXdzLXNsaWRlcicpLmZsZXhzbGlkZXIoe1xyXG4gICAgICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXHJcbiAgICAgICAgc2xpZGVzaG93U3BlZWQ6IDcwMDAsXHJcbiAgICAgICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCxcclxuICAgICAgICBhbmltYXRpb25Mb29wOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25BY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIC8vY29udHJvbE5hdjogdHJ1ZSwgIFxyXG4gICAgICAgIHJ0bDogdHJ1ZSxcclxuICAgICAgICBjdXN0b21EaXJlY3Rpb25OYXY6ICQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKVxyXG4gICAgfSk7XHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcucHJvZHVjdC1zbGlkZXIsIC5zaW5nbGUtcHJvZHVjdF9fc2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBcImZhZGVcIixcclxuICAgICAgICAvL3NsaWRlc2hvd1NwZWVkOiA3MDAwLFxyXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA2MDAsXHJcbiAgICAgICAgYW5pbWF0aW9uTG9vcDogZmFsc2UsXHJcbiAgICAgICAgcGF1c2VPbkFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgY29udHJvbE5hdjogdHJ1ZSxcclxuICAgICAgICBydGw6IHRydWUsXHJcbiAgICAgICAgY3VzdG9tRGlyZWN0aW9uTmF2OiAkKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIilcclxuICAgIH0pO1xyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5iZWZvcmUnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLmJlZm9yZScpLmZhZGVPdXQoMTUwMCk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuaWYoJCgnLmltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGgpIHtcclxuXHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHQgICQoXCIjaW1hZ2VzX3RvX2NvbXBhcmVcIikudHdlbnR5dHdlbnR5KCk7XHJcblx0fSk7XHJcbn0iLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICQoJy5mbGV4c2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICBhbmltYXRpb246IFwiZmFkZVwiLFxyXG4gICAgc2xpZGVzaG93U3BlZWQ6IDcwMDAsXHJcbiAgICBhbmltYXRpb25TcGVlZDogNjAwLCAgXHJcbiAgICBhbmltYXRpb25Mb29wOiB0cnVlLFxyXG5cdGNvbnRyb2xOYXY6IHRydWUsICBcclxuICAgIHJ0bDogdHJ1ZSxcclxuICB9KTtcclxufSk7IiwiLy9hZGQgc21vb3RoIHNjcm9sbCB0byBhbGwgbGlua3NcclxudmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gIC8vIEFkZCBzbW9vdGggc2Nyb2xsaW5nIHRvIGFsbCBsaW5rc1xyXG4gICQoXCJhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIHRoaXMuaGFzaCBoYXMgYSB2YWx1ZSBiZWZvcmUgb3ZlcnJpZGluZyBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICBpZiAodGhpcy5oYXNoICE9PSBcIlwiKSB7XHJcbiAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIC8vIFN0b3JlIGhhc2hcclxuICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XHJcblxyXG4gICAgICAvLyBVc2luZyBqUXVlcnkncyBhbmltYXRlKCkgbWV0aG9kIHRvIGFkZCBzbW9vdGggcGFnZSBzY3JvbGxcclxuICAgICAgLy8gVGhlIG9wdGlvbmFsIG51bWJlciAoODAwKSBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdGFrZXMgdG8gc2Nyb2xsIHRvIHRoZSBzcGVjaWZpZWQgYXJlYVxyXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcFxyXG4gICAgICB9LCA4MDAsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vIEFkZCBoYXNoICgjKSB0byBVUkwgd2hlbiBkb25lIHNjcm9sbGluZyAoZGVmYXVsdCBjbGljayBiZWhhdmlvcilcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICAgIH0pO1xyXG4gICAgfSAvLyBFbmQgaWZcclxuICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==