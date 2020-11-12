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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvNDA0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mdWxsLWltYWdlLWZsZXhzbGlkZXItaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9qcXVlcnkuZXZlbnQubW92ZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvanF1ZXJ5LmZsZXhzbGlkZXItbWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2pxdWVyeS50d2VudHl0d2VudHkubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbmV3cy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJvZHVjdC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Ntb290aC1zY3JvbGwuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJnbG9iYWwiLCJ1bmRlZmluZWQiLCJzZXRJbW1lZGlhdGUiLCJuZXh0SGFuZGxlIiwidGFza3NCeUhhbmRsZSIsImN1cnJlbnRseVJ1bm5pbmdBVGFzayIsImRvYyIsImRvY3VtZW50IiwicmVnaXN0ZXJJbW1lZGlhdGUiLCJjYWxsYmFjayIsIkZ1bmN0aW9uIiwidGFzayIsImNsZWFySW1tZWRpYXRlIiwiaGFuZGxlIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJjYW5Vc2VQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJNYXRoIiwicmFuZG9tIiwib25HbG9iYWxNZXNzYWdlIiwiZXZlbnQiLCJzb3VyY2UiLCJkYXRhIiwiaW5kZXhPZiIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsInBvcnQyIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24iLCJhdHRhY2hUbyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwidG9TdHJpbmciLCJzZWxmIiwic2NvcGUiLCJ3aW5kb3ciLCJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJpZCIsImNsZWFyRm4iLCJfaWQiLCJfY2xlYXJGbiIsInVucmVmIiwicmVmIiwiZW5yb2xsIiwiaXRlbSIsIm1zZWNzIiwiX2lkbGVUaW1lb3V0SWQiLCJfaWRsZVRpbWVvdXQiLCJ1bmVucm9sbCIsIl91bnJlZkFjdGl2ZSIsImFjdGl2ZSIsIm9uVGltZW91dCIsIl9vblRpbWVvdXQiLCJyZXF1aXJlIiwiZyIsIiQiLCJqUXVlcnkiLCJyZWFkeSIsImNsaWNrIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInciLCJpbm5lcldpZHRoIiwiYXR0ciIsImxvYWQiLCJ0d2VudHl0d2VudHkiLCIkd2luZG93IiwiZmxleHNsaWRlciIsInZhcnMiLCJnZXRHcmlkU2l6ZSIsImVhY2giLCJmaW5kIiwiYW5pbWF0aW9uIiwic2xpZGVzaG93U3BlZWQiLCJhbmltYXRpb25Mb29wIiwiY29udHJvbE5hdiIsImN1c3RvbURpcmVjdGlvbk5hdiIsIm1pbkl0ZW1zIiwibWF4SXRlbXMiLCJzdGFydCIsInNsaWRlciIsInJlc2l6ZSIsImdyaWRTaXplIiwiZGVmaW5lIiwiYXNzaWduIiwiZXh0ZW5kIiwicCIsImEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJuIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJDdXN0b21FdmVudCIsIkV2ZW50IiwibyIsInRleHRhcmVhIiwiaW5wdXQiLCJzZWxlY3QiLCJidXR0b24iLCJjIiwibW92ZSIsImNhbmNlbCIsImVuZCIsInUiLCJyIiwiZCIsIlN5bWJvbCIsIm0iLCJ2Iiwic3BsaXQiLCJmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNwbGljZSIsImRpc3BhdGNoRXZlbnQiLCJzIiwia2ljayIsImgiLCJsIiwicHJldmVudERlZmF1bHQiLCJYIiwiaWRlbnRpZmllZFRvdWNoIiwiaWRlbnRpZmllciIsIlkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJUIiwieSIsImIiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInRhcmdldFRvdWNoZXMiLCJ0aW1lU3RhbXAiLCJhbHRLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJzdGFydFgiLCJzdGFydFkiLCJkaXN0WCIsImRpc3RZIiwiZGVsdGFYIiwiZGVsdGFZIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZmluZ2VyIiwiZW5hYmxlTW92ZSIsIm1vdmVFbmFibGVkIiwidGFyZ2V0IiwiRSIsInRpbWVyIiwidG91Y2giLCJTIiwiSyIsImsiLCJhY3RpdmVUb3VjaG1vdmUiLCJhY3RpdmVUb3VjaGVuZCIsIndoaWNoIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiZGVmYXVsdFByZXZlbnRlZCIsImoiLCJzcGVjaWFsIiwibW92ZXN0YXJ0Iiwic2V0dXAiLCJDIiwidGVhcmRvd24iLCJhZGQiLCJBIiwiUSIsIm1vdmVlbmQiLCJxIiwiaGFuZGxlciIsIm9yaWdpbmFsRXZlbnQiLCJydGwiLCJkZWZhdWx0cyIsIm5hbWVzcGFjZSIsIm5hdmlnYXRvciIsIm1zUG9pbnRlckVuYWJsZWQiLCJNU0dlc3R1cmUiLCJEb2N1bWVudFRvdWNoIiwiZGlyZWN0aW9uIiwicmV2ZXJzZSIsIml0ZW1XaWR0aCIsImFzTmF2Rm9yIiwiaW5pdCIsImFuaW1hdGluZyIsImN1cnJlbnRTbGlkZSIsInBhcnNlSW50Iiwic3RhcnRBdCIsImlzTmFOIiwiYW5pbWF0aW5nVG8iLCJhdEVuZCIsImxhc3QiLCJjb250YWluZXJTZWxlY3RvciIsInNlbGVjdG9yIiwic3Vic3RyIiwic2VhcmNoIiwic2xpZGVzIiwiY29udGFpbmVyIiwiY291bnQiLCJzeW5jRXhpc3RzIiwic3luYyIsInByb3AiLCJtYW51YWxQYXVzZSIsInN0b3BwZWQiLCJzdGFydGVkIiwic3RhcnRUaW1lb3V0IiwidHJhbnNpdGlvbnMiLCJ2aWRlbyIsInVzZUNTUyIsInN0eWxlIiwicGZ4IiwicmVwbGFjZSIsImlzRmlyZWZveCIsInVzZXJBZ2VudCIsImVuc3VyZUFuaW1hdGlvbkVuZCIsImNvbnRyb2xzQ29udGFpbmVyIiwibWFudWFsQ29udHJvbHMiLCJyYW5kb21pemUiLCJzb3J0Iiwicm91bmQiLCJlbXB0eSIsImFwcGVuZCIsImRvTWF0aCIsImRpcmVjdGlvbk5hdiIsImtleWJvYXJkIiwibXVsdGlwbGVLZXlib2FyZCIsImJpbmQiLCJrZXlDb2RlIiwiZ2V0VGFyZ2V0IiwiZmxleEFuaW1hdGUiLCJwYXVzZU9uQWN0aW9uIiwibW91c2V3aGVlbCIsInBhdXNlUGxheSIsInNsaWRlc2hvdyIsInBhdXNlSW52aXNpYmxlIiwicGF1c2VPbkhvdmVyIiwiaG92ZXIiLCJtYW51YWxQbGF5IiwicGF1c2UiLCJwbGF5IiwiaXNIaWRkZW4iLCJpbml0RGVsYXkiLCJhc05hdiIsInNtb290aEhlaWdodCIsImZsb29yIiwiY3VycmVudEl0ZW0iLCJlcSIsImFkZENsYXNzIiwiX3NsaWRlciIsIl9nZXN0dXJlIiwiY3VycmVudFRhcmdldCIsImFkZFBvaW50ZXIiLCJwb2ludGVySWQiLCJpbmRleCIsImhhc0NsYXNzIiwib2Zmc2V0IiwicmlnaHQiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNldHVwTWFudWFsIiwic2V0dXBQYWdpbmciLCJjb250cm9sTmF2U2NhZmZvbGQiLCJwYWdpbmdDb3VudCIsInRleHQiLCJ0aHVtYkNhcHRpb25zIiwiYXBwZW5kVG8iLCJzZXQiLCJkZWxlZ2F0ZSIsInR5cGUiLCJzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50IiwidXBkYXRlIiwicmVtb3ZlIiwiY2xvc2VzdCIsInByZXZUZXh0IiwibmV4dFRleHQiLCJyZW1vdmVBdHRyIiwiZmlsdGVyIiwicGxheVRleHQiLCJwYXVzZVRleHQiLCJzdG9wUHJvcGFnYXRpb24iLCJOdW1iZXIiLCJEYXRlIiwibGltaXQiLCJpdGVtVyIsIml0ZW1NYXJnaW4iLCJjbG9uZU9mZnNldCIsInRyYW5zbGF0aW9uWCIsInRyYW5zbGF0aW9uWSIsIngiLCJhYnMiLCJNU0dFU1RVUkVfRkxBR19JTkVSVElBIiwic3RvcCIsInNldFByb3BzIiwiY2FuQWR2YW5jZSIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaGVzIiwiaXMiLCJ3aWR0aCIsImNvbXB1dGVkVyIsInZpZXdwb3J0IiwiaGVpZ2h0IiwibmV3U2xpZGVzIiwiYW5pbWF0ZSIsImlubmVySGVpZ2h0IiwicGxheWluZyIsInVuaXF1ZUlEIiwidmlzUHJvcCIsImdldEhpZGRlblByb3AiLCJjZWlsIiwidmlzaWJsZSIsImJlZm9yZSIsImNzcyIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJ3cmFwdXAiLCJhbmltYXRpb25TcGVlZCIsImVhc2luZyIsInVuYmluZCIsImFmdGVyIiwiYW5pbWF0ZVNsaWRlcyIsImFuaW1hdGVkU2xpZGVzIiwibWFyZ2luTGVmdCIsInBvc2l0aW9uIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5Iiwid2Via2l0VHJhbnNpdGlvbiIsImZhZGVGaXJzdFNsaWRlIiwib3ZlcmZsb3ciLCJjbG9uZUNvdW50IiwibWFrZUFycmF5IiwiZmlyc3QiLCJjbG9uZSIsInByZXBlbmQiLCJjb21wdXRlZE0iLCJib3hQYWRkaW5nIiwib3V0ZXJXaWR0aCIsIml0ZW1UIiwiaXRlbU0iLCJtaW5XIiwibWF4VyIsImFkZFNsaWRlIiwiYWRkZWQiLCJyZW1vdmVTbGlkZSIsInJlbW92ZWQiLCJibHVyIiwiZm9jdXMiLCJhbGxvd09uZVNsaWRlIiwiZm4iLCJmYWRlSW4iLCJkZWZhdWx0X29mZnNldF9wY3QiLCJvcmllbnRhdGlvbiIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSIsIm1vdmVfc2xpZGVyX29uX2hvdmVyIiwibW92ZV93aXRoX2hhbmRsZV9vbmx5IiwiY2xpY2tfdG9fbW92ZSIsIndyYXAiLCJjdyIsImNoIiwibWF4IiwibWluIiwidG9wIiwiXyIsInRyaWdnZXIiLCJzbGlkZVRvZ2dsZSIsInNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzIiwiJG1lbnUiLCJ0b3BfbGV2ZWxfbGluayIsImNvbnNvbGUiLCJsb2ciLCJzaWJsaW5ncyIsInBhcmVudHMiLCJwYXJlbnQiLCJtb3VzZWVudGVyIiwiZmFkZU91dCIsImhhc2giLCJzY3JvbGxUb3AiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RCxDQUFRekgsTUFBUixHQUFpQjJHO0FBRE4sT0FBeEIsRUFFRyxHQUZILEVBRVEsWUFBVTtBQUVoQjtBQUNBblYsY0FBTSxDQUFDbVcsUUFBUCxDQUFnQkYsSUFBaEIsR0FBdUJBLElBQXZCO0FBQ0QsT0FORDtBQU9ELEtBbkJnQyxDQW1CL0I7O0FBQ0gsR0FwQkQ7QUFxQkQsQ0F2QkQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKiogSW1wb3J0IGRlcGVuZGVuY2llcyAqKi9cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvanF1ZXJ5LmZsZXhzbGlkZXItbWluJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvanF1ZXJ5LmV2ZW50Lm1vdmUubWluLmpzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvanF1ZXJ5LnR3ZW50eXR3ZW50eS5taW4uanMnO1xyXG5cclxuLyoqIEltcG9ydCBDdXN0b20gZmlsZXMgKiovXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL21lbnUnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9mdWxsLWltYWdlLWZsZXhzbGlkZXItaXRlbSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NlcnZpY2VzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYmVmb3JlLWFuZC1hZnRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2NvbnRhY3QnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbW9vdGgtc2Nyb2xsJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmV3cy1zbGlkZXInO1xyXG4vL2ltcG9ydCAnLi9jb21wb25lbnRzL2Zyb250LXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy80MDQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9wcm9kdWN0LXNsaWRlcic7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvL3RyaWdnZXIgZG93bmxvYWRzIHN1YiBtZW51XHJcbiAgICAkKCcucHJvZHVjdC00MDQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuZG93bmxvYWRzJykucmVtb3ZlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgICAgICAkKCcucHJvZHVjdHMnKS50b2dnbGVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vY2hhbmdlIHByb2R1Y3QgbWVudSBsaW5rIG9uIG1vYmlsZVxyXG5cclxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgaWYodyA8IDEyMDApIHtcclxuICAgICAgJCgnLnByb2R1Y3QtNDA0JykuYXR0cignaHJlZicsICcvcHJvZHVjdHMnKTtcclxuICAgIH0gXHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0aWYoJCgnLmJhLWltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGggfHwgJCgnLnBvc3QtYmEtaW1hZ2UtY29tcGFyaXNvbicpLmxlbmd0aCkge1xyXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKFwiLmJhX2ltYWdlc190b19jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDsgICBcclxuICAgIGlmKHcgPCAxMjAwKSB7XHJcbiAgICAgICAgJCgnLmNvbnRhY3QtdXMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuY29udGFjdC1jb2wtMScpLnRvZ2dsZUNsYXNzKCdzaG93LWNvbHVtbicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoJy5jb250YWN0X19jcm9zcycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5jb250YWN0LWNvbC0xJykucmVtb3ZlQ2xhc3MoJ3Nob3ctY29sdW1uJyk7XHJcbiAgICAgICAgJCgnLmNvbnRhY3QtY29sLTInKS5yZW1vdmVDbGFzcygnc2hvdy1jb2x1bW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcub3Bwb3J0dW5pdGllcycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5jb250YWN0LWNvbC0yJykudG9nZ2xlQ2xhc3MoJ3Nob3ctY29sdW1uJyk7XHJcbiAgICB9KTsgICAgXHJcbiAgICB9XHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQvLyBzdG9yZSB0aGUgc2xpZGVyIGluIGEgbG9jYWwgdmFyaWFibGVcclxuXHR2YXIgJHdpbmRvdyA9ICQod2luZG93KSxcclxuXHRcdGZsZXhzbGlkZXIgPSB7IHZhcnM6e30gfTtcclxuXHJcblx0Ly8gdGlueSBoZWxwZXIgZnVuY3Rpb24gdG8gYWRkIGJyZWFrcG9pbnRzXHJcblx0ZnVuY3Rpb24gZ2V0R3JpZFNpemUoKSB7XHJcblx0XHRyZXR1cm4gKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAwICkgPyAxIDogMTtcclxuXHR9XHJcblxyXG5cdCR3aW5kb3cucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0ICQoJy5mdWxsLWltYWdlLWl0ZW0tZmxleHNsaWRlci1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0JCh0aGlzKS5maW5kKFwiLmZsZXhzbGlkZXJcIikuZmxleHNsaWRlcih7XHJcblx0XHRcdFx0YW5pbWF0aW9uOiBcInNsaWRlXCIsXHJcblx0XHRcdFx0c2xpZGVzaG93U3BlZWQ6IDEyMDAwLFxyXG5cdFx0XHRcdGFuaW1hdGlvbkxvb3A6IHRydWUsXHJcblx0XHRcdFx0Y29udHJvbE5hdjogZmFsc2UsXHJcblx0XHRcdFx0Y3VzdG9tRGlyZWN0aW9uTmF2OiAkKHRoaXMpLmZpbmQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKSxcclxuXHRcdFx0XHRtaW5JdGVtczogZ2V0R3JpZFNpemUoKSwgLy8gdXNlIGZ1bmN0aW9uIHRvIHB1bGwgaW4gaW5pdGlhbCB2YWx1ZVxyXG5cdFx0XHRcdG1heEl0ZW1zOiBnZXRHcmlkU2l6ZSgpLCAvLyB1c2UgZnVuY3Rpb24gdG8gcHVsbCBpbiBpbml0aWFsIHZhbHVlXHJcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKHNsaWRlcikge1xyXG5cdFx0XHRcdFx0ZmxleHNsaWRlciA9IHNsaWRlcjtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vIGNoZWNrIGdyaWQgc2l6ZSBvbiByZXNpemUgZXZlbnRcclxuXHQkd2luZG93LnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHZhciBncmlkU2l6ZSA9IGdldEdyaWRTaXplKCk7XHJcblx0XHRmbGV4c2xpZGVyLnZhcnMubWluSXRlbXMgPSBncmlkU2l6ZTtcclxuXHRcdGZsZXhzbGlkZXIudmFycy5tYXhJdGVtcyA9IGdyaWRTaXplO1xyXG5cdH0pO1x0XHJcbn0oKSk7IiwiIWZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbnVsbCE9PW1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZTplKCl9KGZ1bmN0aW9uKCl7dmFyIGk9T2JqZWN0LmFzc2lnbnx8d2luZG93LmpRdWVyeSYmalF1ZXJ5LmV4dGVuZCxwPTgsYT13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlLHQpe3JldHVybiB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2UoKX0sMjUpfTtmdW5jdGlvbiBlKGUsdCl7dD10fHx7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDB9O3ZhciBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7cmV0dXJuIG4uaW5pdEN1c3RvbUV2ZW50KGUsdC5idWJibGVzLHQuY2FuY2VsYWJsZSx0LmRldGFpbCksbn1cImZ1bmN0aW9uXCIhPXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQmJihlLnByb3RvdHlwZT13aW5kb3cuRXZlbnQucHJvdG90eXBlLHdpbmRvdy5DdXN0b21FdmVudD1lKTt2YXIgbz17dGV4dGFyZWE6ITAsaW5wdXQ6ITAsc2VsZWN0OiEwLGJ1dHRvbjohMH0sYz17bW92ZTpcIm1vdXNlbW92ZVwiLGNhbmNlbDpcIm1vdXNldXAgZHJhZ3N0YXJ0XCIsZW5kOlwibW91c2V1cFwifSx1PXttb3ZlOlwidG91Y2htb3ZlXCIsY2FuY2VsOlwidG91Y2hlbmRcIixlbmQ6XCJ0b3VjaGVuZFwifSxyPS9cXHMrLyxkPXtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9LHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sP1N5bWJvbChcImV2ZW50c1wiKTp7fTtmdW5jdGlvbiBtKGUpe3JldHVybiBlW3RdfHwoZVt0XT17fSl9ZnVuY3Rpb24gdihlLHQsbixvKXt0PXQuc3BsaXQocik7dmFyIGksYT1tKGUpLGM9dC5sZW5ndGg7ZnVuY3Rpb24gdShlKXtuKGUsbyl9Zm9yKDtjLS07KShhW2k9dFtjXV18fChhW2ldPVtdKSkucHVzaChbbix1XSksZS5hZGRFdmVudExpc3RlbmVyKGksdSl9ZnVuY3Rpb24gZihlLHQsbil7dD10LnNwbGl0KHIpO3ZhciBvLGksYSxjPW0oZSksdT10Lmxlbmd0aDtpZihjKWZvcig7dS0tOylpZihpPWNbbz10W3VdXSlmb3IoYT1pLmxlbmd0aDthLS07KWlbYV1bMF09PT1uJiYoZS5yZW1vdmVFdmVudExpc3RlbmVyKG8saVthXVsxXSksaS5zcGxpY2UoYSwxKSl9ZnVuY3Rpb24gZyhlLHQsbil7dmFyIG89bmV3IEN1c3RvbUV2ZW50KHQsZCk7biYmaShvLG4pLGUuZGlzcGF0Y2hFdmVudChvKX1mdW5jdGlvbiBzKGUpe3ZhciBuPWUsbz0hMSxpPSExO2Z1bmN0aW9uIHQoZSl7bz8obigpLGEodCksbz0hKGk9ITApKTppPSExfXRoaXMua2ljaz1mdW5jdGlvbihlKXtvPSEwLGl8fHQoKX0sdGhpcy5lbmQ9ZnVuY3Rpb24oZSl7dmFyIHQ9bjtlJiYoaT8obj1vP2Z1bmN0aW9uKCl7dCgpLGUoKX06ZSxvPSEwKTplKCkpfX1mdW5jdGlvbiBoKCl7fWZ1bmN0aW9uIGwoZSl7ZS5wcmV2ZW50RGVmYXVsdCgpfWZ1bmN0aW9uIFgoZSx0KXt2YXIgbixvO2lmKGUuaWRlbnRpZmllZFRvdWNoKXJldHVybiBlLmlkZW50aWZpZWRUb3VjaCh0KTtmb3Iobj0tMSxvPWUubGVuZ3RoOysrbjxvOylpZihlW25dLmlkZW50aWZpZXI9PT10KXJldHVybiBlW25dfWZ1bmN0aW9uIFkoZSx0KXt2YXIgbj1YKGUuY2hhbmdlZFRvdWNoZXMsdC5pZGVudGlmaWVyKTtpZihuJiYobi5wYWdlWCE9PXQucGFnZVh8fG4ucGFnZVkhPT10LnBhZ2VZKSlyZXR1cm4gbn1mdW5jdGlvbiBuKGUsdCl7VChlLHQsZSx3KX1mdW5jdGlvbiB5KGUsdCl7dygpfWZ1bmN0aW9uIHcoKXtmKGRvY3VtZW50LGMubW92ZSxuKSxmKGRvY3VtZW50LGMuY2FuY2VsLHkpfWZ1bmN0aW9uIGIoZSl7Zihkb2N1bWVudCx1Lm1vdmUsZS50b3VjaG1vdmUpLGYoZG9jdW1lbnQsdS5jYW5jZWwsZS50b3VjaGVuZCl9ZnVuY3Rpb24gVChlLHQsbixvKXt2YXIgaSxhLGMsdSxyLGQsbSx2LGYscz1uLnBhZ2VYLXQucGFnZVgsbD1uLnBhZ2VZLXQucGFnZVk7cypzK2wqbDxwKnB8fChhPXQsYz1uLHU9cyxyPWwsZD1vLG09KGk9ZSkudGFyZ2V0VG91Y2hlcyx2PWkudGltZVN0YW1wLWEudGltZVN0YW1wLGY9e2FsdEtleTppLmFsdEtleSxjdHJsS2V5OmkuY3RybEtleSxzaGlmdEtleTppLnNoaWZ0S2V5LHN0YXJ0WDphLnBhZ2VYLHN0YXJ0WTphLnBhZ2VZLGRpc3RYOnUsZGlzdFk6cixkZWx0YVg6dSxkZWx0YVk6cixwYWdlWDpjLnBhZ2VYLHBhZ2VZOmMucGFnZVksdmVsb2NpdHlYOnUvdix2ZWxvY2l0eVk6ci92LGlkZW50aWZpZXI6YS5pZGVudGlmaWVyLHRhcmdldFRvdWNoZXM6bSxmaW5nZXI6bT9tLmxlbmd0aDoxLGVuYWJsZU1vdmU6ZnVuY3Rpb24oKXt0aGlzLm1vdmVFbmFibGVkPSEwLHRoaXMuZW5hYmxlTW92ZT1oLGkucHJldmVudERlZmF1bHQoKX19LGcoYS50YXJnZXQsXCJtb3Zlc3RhcnRcIixmKSxkKGEpKX1mdW5jdGlvbiBFKGUsdCl7dmFyIG49dC50aW1lcjt0LnRvdWNoPWUsdC50aW1lU3RhbXA9ZS50aW1lU3RhbXAsbi5raWNrKCl9ZnVuY3Rpb24gUyhlLHQpe3ZhciBuPXQudGFyZ2V0LG89dC5ldmVudCxpPXQudGltZXI7Zihkb2N1bWVudCxjLm1vdmUsRSksZihkb2N1bWVudCxjLmVuZCxTKSxLKG4sbyxpLGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2YobixcImNsaWNrXCIsbCl9LDApfSl9ZnVuY3Rpb24gayhlLHQpe3ZhciBuLG89dC50YXJnZXQsaT10LmV2ZW50LGE9dC50aW1lcjtYKGUuY2hhbmdlZFRvdWNoZXMsaS5pZGVudGlmaWVyKSYmKG49dCxmKGRvY3VtZW50LHUubW92ZSxuLmFjdGl2ZVRvdWNobW92ZSksZihkb2N1bWVudCx1LmVuZCxuLmFjdGl2ZVRvdWNoZW5kKSxLKG8saSxhKSl9ZnVuY3Rpb24gSyhlLHQsbixvKXtuLmVuZChmdW5jdGlvbigpe3JldHVybiBnKGUsXCJtb3ZlZW5kXCIsdCksbyYmbygpfSl9aWYodihkb2N1bWVudCxcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGUpe3ZhciB0OzEhPT0odD1lKS53aGljaHx8dC5jdHJsS2V5fHx0LmFsdEtleXx8b1tlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCldfHwodihkb2N1bWVudCxjLm1vdmUsbixlKSx2KGRvY3VtZW50LGMuY2FuY2VsLHksZSkpfSksdihkb2N1bWVudCxcInRvdWNoc3RhcnRcIixmdW5jdGlvbihlKXtpZighb1tlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCldKXt2YXIgdD1lLmNoYW5nZWRUb3VjaGVzWzBdLG49e3RhcmdldDp0LnRhcmdldCxwYWdlWDp0LnBhZ2VYLHBhZ2VZOnQucGFnZVksaWRlbnRpZmllcjp0LmlkZW50aWZpZXIsdG91Y2htb3ZlOmZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUsdCl7dmFyIG49WShlLHQpO2lmKCFuKXJldHVybjtUKGUsdCxuLGIpfShlLHQpfSx0b3VjaGVuZDpmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlLHQpe2lmKCFYKGUuY2hhbmdlZFRvdWNoZXMsdC5pZGVudGlmaWVyKSlyZXR1cm47Yih0KX0oZSx0KX19O3YoZG9jdW1lbnQsdS5tb3ZlLG4udG91Y2htb3ZlLG4pLHYoZG9jdW1lbnQsdS5jYW5jZWwsbi50b3VjaGVuZCxuKX19KSx2KGRvY3VtZW50LFwibW92ZXN0YXJ0XCIsZnVuY3Rpb24oZSl7aWYoIWUuZGVmYXVsdFByZXZlbnRlZCYmZS5tb3ZlRW5hYmxlZCl7dmFyIHQ9e3N0YXJ0WDplLnN0YXJ0WCxzdGFydFk6ZS5zdGFydFkscGFnZVg6ZS5wYWdlWCxwYWdlWTplLnBhZ2VZLGRpc3RYOmUuZGlzdFgsZGlzdFk6ZS5kaXN0WSxkZWx0YVg6ZS5kZWx0YVgsZGVsdGFZOmUuZGVsdGFZLHZlbG9jaXR5WDplLnZlbG9jaXR5WCx2ZWxvY2l0eVk6ZS52ZWxvY2l0eVksaWRlbnRpZmllcjplLmlkZW50aWZpZXIsdGFyZ2V0VG91Y2hlczplLnRhcmdldFRvdWNoZXMsZmluZ2VyOmUuZmluZ2VyfSxuPXt0YXJnZXQ6ZS50YXJnZXQsZXZlbnQ6dCx0aW1lcjpuZXcgcyhmdW5jdGlvbihlKXsoZnVuY3Rpb24oZSx0LG4pe3ZhciBvPW4tZS50aW1lU3RhbXA7ZS5kaXN0WD10LnBhZ2VYLWUuc3RhcnRYLGUuZGlzdFk9dC5wYWdlWS1lLnN0YXJ0WSxlLmRlbHRhWD10LnBhZ2VYLWUucGFnZVgsZS5kZWx0YVk9dC5wYWdlWS1lLnBhZ2VZLGUudmVsb2NpdHlYPS4zKmUudmVsb2NpdHlYKy43KmUuZGVsdGFYL28sZS52ZWxvY2l0eVk9LjMqZS52ZWxvY2l0eVkrLjcqZS5kZWx0YVkvbyxlLnBhZ2VYPXQucGFnZVgsZS5wYWdlWT10LnBhZ2VZfSkodCxuLnRvdWNoLG4udGltZVN0YW1wKSxnKG4udGFyZ2V0LFwibW92ZVwiLHQpfSksdG91Y2g6dm9pZCAwLHRpbWVTdGFtcDplLnRpbWVTdGFtcH07dm9pZCAwPT09ZS5pZGVudGlmaWVyPyh2KGUudGFyZ2V0LFwiY2xpY2tcIixsKSx2KGRvY3VtZW50LGMubW92ZSxFLG4pLHYoZG9jdW1lbnQsYy5lbmQsUyxuKSk6KG4uYWN0aXZlVG91Y2htb3ZlPWZ1bmN0aW9uKGUsdCl7dmFyIG4sbyxpLGEsYztuPWUsaT0obz10KS5ldmVudCxhPW8udGltZXIsKGM9WShuLGkpKSYmKG4ucHJldmVudERlZmF1bHQoKSxpLnRhcmdldFRvdWNoZXM9bi50YXJnZXRUb3VjaGVzLG8udG91Y2g9YyxvLnRpbWVTdGFtcD1uLnRpbWVTdGFtcCxhLmtpY2soKSl9LG4uYWN0aXZlVG91Y2hlbmQ9ZnVuY3Rpb24oZSx0KXtrKGUsdCl9LHYoZG9jdW1lbnQsdS5tb3ZlLG4uYWN0aXZlVG91Y2htb3ZlLG4pLHYoZG9jdW1lbnQsdS5lbmQsbi5hY3RpdmVUb3VjaGVuZCxuKSl9fSksd2luZG93LmpRdWVyeSl7dmFyIGo9XCJzdGFydFggc3RhcnRZIHBhZ2VYIHBhZ2VZIGRpc3RYIGRpc3RZIGRlbHRhWCBkZWx0YVkgdmVsb2NpdHlYIHZlbG9jaXR5WVwiLnNwbGl0KFwiIFwiKTtqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3Zlc3RhcnQ9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIHYodGhpcyxcIm1vdmVzdGFydFwiLEMpLCExfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBmKHRoaXMsXCJtb3Zlc3RhcnRcIixDKSwhMX0sYWRkOkF9LGpRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmU9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIHYodGhpcyxcIm1vdmVzdGFydFwiLFEpLCExfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBmKHRoaXMsXCJtb3Zlc3RhcnRcIixRKSwhMX0sYWRkOkF9LGpRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmVlbmQ9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIHYodGhpcyxcIm1vdmVzdGFydFwiLHEpLCExfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBmKHRoaXMsXCJtb3Zlc3RhcnRcIixxKSwhMX0sYWRkOkF9fWZ1bmN0aW9uIEMoZSl7ZS5lbmFibGVNb3ZlKCl9ZnVuY3Rpb24gUShlKXtlLmVuYWJsZU1vdmUoKX1mdW5jdGlvbiBxKGUpe2UuZW5hYmxlTW92ZSgpfWZ1bmN0aW9uIEEoZSl7dmFyIG89ZS5oYW5kbGVyO2UuaGFuZGxlcj1mdW5jdGlvbihlKXtmb3IodmFyIHQsbj1qLmxlbmd0aDtuLS07KWVbdD1qW25dXT1lLm9yaWdpbmFsRXZlbnRbdF07by5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX0pOyIsIi8qXHJcbiAqIGpRdWVyeSBGbGV4U2xpZGVyIHYyLjcuMlxyXG4gKiBDb3B5cmlnaHQgMjAxMiBXb29UaGVtZXNcclxuICogQ29udHJpYnV0aW5nIEF1dGhvcjogVHlsZXIgU21pdGhcclxuICovIWZ1bmN0aW9uKCQpe3ZhciBlPSEwOyQuZmxleHNsaWRlcj1mdW5jdGlvbih0LGEpe3ZhciBuPSQodCk7dm9pZCAwPT09YS5ydGwmJlwicnRsXCI9PSQoXCJodG1sXCIpLmF0dHIoXCJkaXJcIikmJihhLnJ0bD0hMCksbi52YXJzPSQuZXh0ZW5kKHt9LCQuZmxleHNsaWRlci5kZWZhdWx0cyxhKTt2YXIgaT1uLnZhcnMubmFtZXNwYWNlLHI9d2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkJiZ3aW5kb3cuTVNHZXN0dXJlLHM9KFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHJ8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpJiZuLnZhcnMudG91Y2gsbz1cImNsaWNrIHRvdWNoZW5kIE1TUG9pbnRlclVwIGtleXVwXCIsbD1cIlwiLGMsZD1cInZlcnRpY2FsXCI9PT1uLnZhcnMuZGlyZWN0aW9uLHU9bi52YXJzLnJldmVyc2Usdj1uLnZhcnMuaXRlbVdpZHRoPjAscD1cImZhZGVcIj09PW4udmFycy5hbmltYXRpb24sbT1cIlwiIT09bi52YXJzLmFzTmF2Rm9yLGY9e307JC5kYXRhKHQsXCJmbGV4c2xpZGVyXCIsbiksZj17aW5pdDpmdW5jdGlvbigpe24uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPXBhcnNlSW50KG4udmFycy5zdGFydEF0P24udmFycy5zdGFydEF0OjAsMTApLGlzTmFOKG4uY3VycmVudFNsaWRlKSYmKG4uY3VycmVudFNsaWRlPTApLG4uYW5pbWF0aW5nVG89bi5jdXJyZW50U2xpZGUsbi5hdEVuZD0wPT09bi5jdXJyZW50U2xpZGV8fG4uY3VycmVudFNsaWRlPT09bi5sYXN0LG4uY29udGFpbmVyU2VsZWN0b3I9bi52YXJzLnNlbGVjdG9yLnN1YnN0cigwLG4udmFycy5zZWxlY3Rvci5zZWFyY2goXCIgXCIpKSxuLnNsaWRlcz0kKG4udmFycy5zZWxlY3RvcixuKSxuLmNvbnRhaW5lcj0kKG4uY29udGFpbmVyU2VsZWN0b3Isbiksbi5jb3VudD1uLnNsaWRlcy5sZW5ndGgsbi5zeW5jRXhpc3RzPSQobi52YXJzLnN5bmMpLmxlbmd0aD4wLFwic2xpZGVcIj09PW4udmFycy5hbmltYXRpb24mJihuLnZhcnMuYW5pbWF0aW9uPVwic3dpbmdcIiksbi5wcm9wPWQ/XCJ0b3BcIjpuLnZhcnMucnRsP1wibWFyZ2luUmlnaHRcIjpcIm1hcmdpbkxlZnRcIixuLmFyZ3M9e30sbi5tYW51YWxQYXVzZT0hMSxuLnN0b3BwZWQ9ITEsbi5zdGFydGVkPSExLG4uc3RhcnRUaW1lb3V0PW51bGwsbi50cmFuc2l0aW9ucz0hbi52YXJzLnZpZGVvJiYhcCYmbi52YXJzLnVzZUNTUyYmZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHQ9W1wicGVyc3BlY3RpdmVQcm9wZXJ0eVwiLFwiV2Via2l0UGVyc3BlY3RpdmVcIixcIk1velBlcnNwZWN0aXZlXCIsXCJPUGVyc3BlY3RpdmVcIixcIm1zUGVyc3BlY3RpdmVcIl07Zm9yKHZhciBhIGluIHQpaWYodm9pZCAwIT09ZS5zdHlsZVt0W2FdXSlyZXR1cm4gbi5wZng9dFthXS5yZXBsYWNlKFwiUGVyc3BlY3RpdmVcIixcIlwiKS50b0xvd2VyQ2FzZSgpLG4ucHJvcD1cIi1cIituLnBmeCtcIi10cmFuc2Zvcm1cIiwhMDtyZXR1cm4hMX0oKSxuLmlzRmlyZWZveD1uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImZpcmVmb3hcIik+LTEsbi5lbnN1cmVBbmltYXRpb25FbmQ9XCJcIixcIlwiIT09bi52YXJzLmNvbnRyb2xzQ29udGFpbmVyJiYobi5jb250cm9sc0NvbnRhaW5lcj0kKG4udmFycy5jb250cm9sc0NvbnRhaW5lcikubGVuZ3RoPjAmJiQobi52YXJzLmNvbnRyb2xzQ29udGFpbmVyKSksXCJcIiE9PW4udmFycy5tYW51YWxDb250cm9scyYmKG4ubWFudWFsQ29udHJvbHM9JChuLnZhcnMubWFudWFsQ29udHJvbHMpLmxlbmd0aD4wJiYkKG4udmFycy5tYW51YWxDb250cm9scykpLFwiXCIhPT1uLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2JiYobi5jdXN0b21EaXJlY3Rpb25OYXY9Mj09PSQobi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdikubGVuZ3RoJiYkKG4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYpKSxuLnZhcnMucmFuZG9taXplJiYobi5zbGlkZXMuc29ydChmdW5jdGlvbigpe3JldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpLS41fSksbi5jb250YWluZXIuZW1wdHkoKS5hcHBlbmQobi5zbGlkZXMpKSxuLmRvTWF0aCgpLG4uc2V0dXAoXCJpbml0XCIpLG4udmFycy5jb250cm9sTmF2JiZmLmNvbnRyb2xOYXYuc2V0dXAoKSxuLnZhcnMuZGlyZWN0aW9uTmF2JiZmLmRpcmVjdGlvbk5hdi5zZXR1cCgpLG4udmFycy5rZXlib2FyZCYmKDE9PT0kKG4uY29udGFpbmVyU2VsZWN0b3IpLmxlbmd0aHx8bi52YXJzLm11bHRpcGxlS2V5Ym9hcmQpJiYkKGRvY3VtZW50KS5iaW5kKFwia2V5dXBcIixmdW5jdGlvbihlKXt2YXIgdD1lLmtleUNvZGU7aWYoIW4uYW5pbWF0aW5nJiYoMzk9PT10fHwzNz09PXQpKXt2YXIgYT1uLnZhcnMucnRsPzM3PT09dD9uLmdldFRhcmdldChcIm5leHRcIik6Mzk9PT10JiZuLmdldFRhcmdldChcInByZXZcIik6Mzk9PT10P24uZ2V0VGFyZ2V0KFwibmV4dFwiKTozNz09PXQmJm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24pfX0pLG4udmFycy5tb3VzZXdoZWVsJiZuLmJpbmQoXCJtb3VzZXdoZWVsXCIsZnVuY3Rpb24oZSx0LGEsaSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciByPXQ8MD9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpO24uZmxleEFuaW1hdGUocixuLnZhcnMucGF1c2VPbkFjdGlvbil9KSxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS5zZXR1cCgpLG4udmFycy5zbGlkZXNob3cmJm4udmFycy5wYXVzZUludmlzaWJsZSYmZi5wYXVzZUludmlzaWJsZS5pbml0KCksbi52YXJzLnNsaWRlc2hvdyYmKG4udmFycy5wYXVzZU9uSG92ZXImJm4uaG92ZXIoZnVuY3Rpb24oKXtuLm1hbnVhbFBsYXl8fG4ubWFudWFsUGF1c2V8fG4ucGF1c2UoKX0sZnVuY3Rpb24oKXtuLm1hbnVhbFBhdXNlfHxuLm1hbnVhbFBsYXl8fG4uc3RvcHBlZHx8bi5wbGF5KCl9KSxuLnZhcnMucGF1c2VJbnZpc2libGUmJmYucGF1c2VJbnZpc2libGUuaXNIaWRkZW4oKXx8KG4udmFycy5pbml0RGVsYXk+MD9uLnN0YXJ0VGltZW91dD1zZXRUaW1lb3V0KG4ucGxheSxuLnZhcnMuaW5pdERlbGF5KTpuLnBsYXkoKSkpLG0mJmYuYXNOYXYuc2V0dXAoKSxzJiZuLnZhcnMudG91Y2gmJmYudG91Y2goKSwoIXB8fHAmJm4udmFycy5zbW9vdGhIZWlnaHQpJiYkKHdpbmRvdykuYmluZChcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBmb2N1c1wiLGYucmVzaXplKSxuLmZpbmQoXCJpbWdcIikuYXR0cihcImRyYWdnYWJsZVwiLFwiZmFsc2VcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24udmFycy5zdGFydChuKX0sMjAwKX0sYXNOYXY6e3NldHVwOmZ1bmN0aW9uKCl7bi5hc05hdj0hMCxuLmFuaW1hdGluZ1RvPU1hdGguZmxvb3Iobi5jdXJyZW50U2xpZGUvbi5tb3ZlKSxuLmN1cnJlbnRJdGVtPW4uY3VycmVudFNsaWRlLG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEobi5jdXJyZW50SXRlbSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxyPyh0Ll9zbGlkZXI9bixuLnNsaWRlcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9nZXN0dXJlPW5ldyBNU0dlc3R1cmUsZS5fZ2VzdHVyZS50YXJnZXQ9ZSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuY3VycmVudFRhcmdldC5fZ2VzdHVyZSYmZS5jdXJyZW50VGFyZ2V0Ll9nZXN0dXJlLmFkZFBvaW50ZXIoZS5wb2ludGVySWQpfSwhMSksZS5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlVGFwXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0PSQodGhpcyksYT10LmluZGV4KCk7JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLmFuaW1hdGluZ3x8dC5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8KG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08YT9cIm5leHRcIjpcInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24sITEsITAsITApKX0pfSkpOm4uc2xpZGVzLm9uKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0PSQodGhpcyksYT10LmluZGV4KCkscjtyPW4udmFycy5ydGw/LTEqKHQub2Zmc2V0KCkucmlnaHQtJChuKS5zY3JvbGxMZWZ0KCkpOnQub2Zmc2V0KCkubGVmdC0kKG4pLnNjcm9sbExlZnQoKSxyPD0wJiZ0Lmhhc0NsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIik/bi5mbGV4QW5pbWF0ZShuLmdldFRhcmdldChcInByZXZcIiksITApOiQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKS5hbmltYXRpbmd8fHQuaGFzQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKXx8KG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08YT9cIm5leHRcIjpcInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24sITEsITAsITApKX0pfX0sY29udHJvbE5hdjp7c2V0dXA6ZnVuY3Rpb24oKXtuLm1hbnVhbENvbnRyb2xzP2YuY29udHJvbE5hdi5zZXR1cE1hbnVhbCgpOmYuY29udHJvbE5hdi5zZXR1cFBhZ2luZygpfSxzZXR1cFBhZ2luZzpmdW5jdGlvbigpe3ZhciBlPVwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXY/XCJjb250cm9sLXRodW1ic1wiOlwiY29udHJvbC1wYWdpbmdcIix0PTEsYSxyO2lmKG4uY29udHJvbE5hdlNjYWZmb2xkPSQoJzxvbCBjbGFzcz1cIicraStcImNvbnRyb2wtbmF2IFwiK2krZSsnXCI+PC9vbD4nKSxuLnBhZ2luZ0NvdW50PjEpZm9yKHZhciBzPTA7czxuLnBhZ2luZ0NvdW50O3MrKyl7aWYocj1uLnNsaWRlcy5lcShzKSx2b2lkIDA9PT1yLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiKSYmci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIixcIlwiKSxhPSQoXCI8YT48L2E+XCIpLmF0dHIoXCJocmVmXCIsXCIjXCIpLnRleHQodCksXCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdiYmKGE9JChcIjxpbWcvPlwiKS5hdHRyKFwic3JjXCIsci5hdHRyKFwiZGF0YS10aHVtYlwiKSkpLFwiXCIhPT1yLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiKSYmYS5hdHRyKFwiYWx0XCIsci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikpLFwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXYmJiEwPT09bi52YXJzLnRodW1iQ2FwdGlvbnMpe3ZhciBjPXIuYXR0cihcImRhdGEtdGh1bWJjYXB0aW9uXCIpO2lmKFwiXCIhPT1jJiZ2b2lkIDAhPT1jKXt2YXIgZD0kKFwiPHNwYW4+PC9zcGFuPlwiKS5hZGRDbGFzcyhpK1wiY2FwdGlvblwiKS50ZXh0KGMpO2EuYXBwZW5kKGQpfX12YXIgdT0kKFwiPGxpPlwiKTthLmFwcGVuZFRvKHUpLHUuYXBwZW5kKFwiPC9saT5cIiksbi5jb250cm9sTmF2U2NhZmZvbGQuYXBwZW5kKHUpLHQrK31uLmNvbnRyb2xzQ29udGFpbmVyPyQobi5jb250cm9sc0NvbnRhaW5lcikuYXBwZW5kKG4uY29udHJvbE5hdlNjYWZmb2xkKTpuLmFwcGVuZChuLmNvbnRyb2xOYXZTY2FmZm9sZCksZi5jb250cm9sTmF2LnNldCgpLGYuY29udHJvbE5hdi5hY3RpdmUoKSxuLmNvbnRyb2xOYXZTY2FmZm9sZC5kZWxlZ2F0ZShcImEsIGltZ1wiLG8sZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCI9PT1sfHxsPT09ZS50eXBlKXt2YXIgdD0kKHRoaXMpLGE9bi5jb250cm9sTmF2LmluZGV4KHQpO3QuaGFzQ2xhc3MoaStcImFjdGl2ZVwiKXx8KG4uZGlyZWN0aW9uPWE+bi5jdXJyZW50U2xpZGU/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKSl9XCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sc2V0dXBNYW51YWw6ZnVuY3Rpb24oKXtuLmNvbnRyb2xOYXY9bi5tYW51YWxDb250cm9scyxmLmNvbnRyb2xOYXYuYWN0aXZlKCksbi5jb250cm9sTmF2LmJpbmQobyxmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksXCJcIj09PWx8fGw9PT1lLnR5cGUpe3ZhciB0PSQodGhpcyksYT1uLmNvbnRyb2xOYXYuaW5kZXgodCk7dC5oYXNDbGFzcyhpK1wiYWN0aXZlXCIpfHwoYT5uLmN1cnJlbnRTbGlkZT9uLmRpcmVjdGlvbj1cIm5leHRcIjpuLmRpcmVjdGlvbj1cInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24pKX1cIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSxzZXQ6ZnVuY3Rpb24oKXt2YXIgZT1cInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2P1wiaW1nXCI6XCJhXCI7bi5jb250cm9sTmF2PSQoXCIuXCIraStcImNvbnRyb2wtbmF2IGxpIFwiK2Usbi5jb250cm9sc0NvbnRhaW5lcj9uLmNvbnRyb2xzQ29udGFpbmVyOm4pfSxhY3RpdmU6ZnVuY3Rpb24oKXtuLmNvbnRyb2xOYXYucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZVwiKS5lcShuLmFuaW1hdGluZ1RvKS5hZGRDbGFzcyhpK1wiYWN0aXZlXCIpfSx1cGRhdGU6ZnVuY3Rpb24oZSx0KXtuLnBhZ2luZ0NvdW50PjEmJlwiYWRkXCI9PT1lP24uY29udHJvbE5hdlNjYWZmb2xkLmFwcGVuZCgkKCc8bGk+PGEgaHJlZj1cIiNcIj4nK24uY291bnQrXCI8L2E+PC9saT5cIikpOjE9PT1uLnBhZ2luZ0NvdW50P24uY29udHJvbE5hdlNjYWZmb2xkLmZpbmQoXCJsaVwiKS5yZW1vdmUoKTpuLmNvbnRyb2xOYXYuZXEodCkuY2xvc2VzdChcImxpXCIpLnJlbW92ZSgpLGYuY29udHJvbE5hdi5zZXQoKSxuLnBhZ2luZ0NvdW50PjEmJm4ucGFnaW5nQ291bnQhPT1uLmNvbnRyb2xOYXYubGVuZ3RoP24udXBkYXRlKHQsZSk6Zi5jb250cm9sTmF2LmFjdGl2ZSgpfX0sZGlyZWN0aW9uTmF2OntzZXR1cDpmdW5jdGlvbigpe3ZhciBlPSQoJzx1bCBjbGFzcz1cIicraSsnZGlyZWN0aW9uLW5hdlwiPjxsaSBjbGFzcz1cIicraSsnbmF2LXByZXZcIj48YSBjbGFzcz1cIicraSsncHJldlwiIGhyZWY9XCIjXCI+JytuLnZhcnMucHJldlRleHQrJzwvYT48L2xpPjxsaSBjbGFzcz1cIicraSsnbmF2LW5leHRcIj48YSBjbGFzcz1cIicraSsnbmV4dFwiIGhyZWY9XCIjXCI+JytuLnZhcnMubmV4dFRleHQrXCI8L2E+PC9saT48L3VsPlwiKTtuLmN1c3RvbURpcmVjdGlvbk5hdj9uLmRpcmVjdGlvbk5hdj1uLmN1c3RvbURpcmVjdGlvbk5hdjpuLmNvbnRyb2xzQ29udGFpbmVyPygkKG4uY29udHJvbHNDb250YWluZXIpLmFwcGVuZChlKSxuLmRpcmVjdGlvbk5hdj0kKFwiLlwiK2krXCJkaXJlY3Rpb24tbmF2IGxpIGFcIixuLmNvbnRyb2xzQ29udGFpbmVyKSk6KG4uYXBwZW5kKGUpLG4uZGlyZWN0aW9uTmF2PSQoXCIuXCIraStcImRpcmVjdGlvbi1uYXYgbGkgYVwiLG4pKSxmLmRpcmVjdGlvbk5hdi51cGRhdGUoKSxuLmRpcmVjdGlvbk5hdi5iaW5kKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0O1wiXCIhPT1sJiZsIT09ZS50eXBlfHwodD0kKHRoaXMpLmhhc0NsYXNzKGkrXCJuZXh0XCIpP24uZ2V0VGFyZ2V0KFwibmV4dFwiKTpuLmdldFRhcmdldChcInByZXZcIiksbi5mbGV4QW5pbWF0ZSh0LG4udmFycy5wYXVzZU9uQWN0aW9uKSksXCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGU9aStcImRpc2FibGVkXCI7MT09PW4ucGFnaW5nQ291bnQ/bi5kaXJlY3Rpb25OYXYuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTpuLnZhcnMuYW5pbWF0aW9uTG9vcD9uLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIik6MD09PW4uYW5pbWF0aW5nVG8/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkuZmlsdGVyKFwiLlwiK2krXCJwcmV2XCIpLmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi5hbmltYXRpbmdUbz09PW4ubGFzdD9uLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5maWx0ZXIoXCIuXCIraStcIm5leHRcIikuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTpuLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIil9fSxwYXVzZVBsYXk6e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9JCgnPGRpdiBjbGFzcz1cIicraSsncGF1c2VwbGF5XCI+PGEgaHJlZj1cIiNcIj48L2E+PC9kaXY+Jyk7bi5jb250cm9sc0NvbnRhaW5lcj8obi5jb250cm9sc0NvbnRhaW5lci5hcHBlbmQoZSksbi5wYXVzZVBsYXk9JChcIi5cIitpK1wicGF1c2VwbGF5IGFcIixuLmNvbnRyb2xzQ29udGFpbmVyKSk6KG4uYXBwZW5kKGUpLG4ucGF1c2VQbGF5PSQoXCIuXCIraStcInBhdXNlcGxheSBhXCIsbikpLGYucGF1c2VQbGF5LnVwZGF0ZShuLnZhcnMuc2xpZGVzaG93P2krXCJwYXVzZVwiOmkrXCJwbGF5XCIpLG4ucGF1c2VQbGF5LmJpbmQobyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksXCJcIiE9PWwmJmwhPT1lLnR5cGV8fCgkKHRoaXMpLmhhc0NsYXNzKGkrXCJwYXVzZVwiKT8obi5tYW51YWxQYXVzZT0hMCxuLm1hbnVhbFBsYXk9ITEsbi5wYXVzZSgpKToobi5tYW51YWxQYXVzZT0hMSxuLm1hbnVhbFBsYXk9ITAsbi5wbGF5KCkpKSxcIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSx1cGRhdGU6ZnVuY3Rpb24oZSl7XCJwbGF5XCI9PT1lP24ucGF1c2VQbGF5LnJlbW92ZUNsYXNzKGkrXCJwYXVzZVwiKS5hZGRDbGFzcyhpK1wicGxheVwiKS5odG1sKG4udmFycy5wbGF5VGV4dCk6bi5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MoaStcInBsYXlcIikuYWRkQ2xhc3MoaStcInBhdXNlXCIpLmh0bWwobi52YXJzLnBhdXNlVGV4dCl9fSx0b3VjaDpmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSxuLmFuaW1hdGluZz9lLnByZXZlbnREZWZhdWx0KCk6KG4ucGF1c2UoKSx0Ll9nZXN0dXJlLmFkZFBvaW50ZXIoZS5wb2ludGVySWQpLHc9MCxjPWQ/bi5oOm4udyxmPU51bWJlcihuZXcgRGF0ZSksbD12JiZ1JiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0PzA6diYmdT9uLmxpbWl0LShuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbzp2JiZuLmN1cnJlbnRTbGlkZT09PW4ubGFzdD9uLmxpbWl0OnY/KG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmN1cnJlbnRTbGlkZTp1PyhuLmxhc3Qtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYzoobi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYyl9ZnVuY3Rpb24gYShlKXtlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBhPWUudGFyZ2V0Ll9zbGlkZXI7aWYoYSl7dmFyIG49LWUudHJhbnNsYXRpb25YLGk9LWUudHJhbnNsYXRpb25ZO2lmKHcrPWQ/aTpuLG09KGEudmFycy5ydGw/LTE6MSkqdyx4PWQ/TWF0aC5hYnModyk8TWF0aC5hYnMoLW4pOk1hdGguYWJzKHcpPE1hdGguYWJzKC1pKSxlLmRldGFpbD09PWUuTVNHRVNUVVJFX0ZMQUdfSU5FUlRJQSlyZXR1cm4gdm9pZCBzZXRJbW1lZGlhdGUoZnVuY3Rpb24oKXt0Ll9nZXN0dXJlLnN0b3AoKX0pOygheHx8TnVtYmVyKG5ldyBEYXRlKS1mPjUwMCkmJihlLnByZXZlbnREZWZhdWx0KCksIXAmJmEudHJhbnNpdGlvbnMmJihhLnZhcnMuYW5pbWF0aW9uTG9vcHx8KG09dy8oMD09PWEuY3VycmVudFNsaWRlJiZ3PDB8fGEuY3VycmVudFNsaWRlPT09YS5sYXN0JiZ3PjA/TWF0aC5hYnModykvYysyOjEpKSxhLnNldFByb3BzKGwrbSxcInNldFRvdWNoXCIpKSl9fWZ1bmN0aW9uIGkoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD1lLnRhcmdldC5fc2xpZGVyO2lmKHQpe2lmKHQuYW5pbWF0aW5nVG89PT10LmN1cnJlbnRTbGlkZSYmIXgmJm51bGwhPT1tKXt2YXIgYT11Py1tOm0sbj1hPjA/dC5nZXRUYXJnZXQoXCJuZXh0XCIpOnQuZ2V0VGFyZ2V0KFwicHJldlwiKTt0LmNhbkFkdmFuY2UobikmJihOdW1iZXIobmV3IERhdGUpLWY8NTUwJiZNYXRoLmFicyhhKT41MHx8TWF0aC5hYnMoYSk+Yy8yKT90LmZsZXhBbmltYXRlKG4sdC52YXJzLnBhdXNlT25BY3Rpb24pOnB8fHQuZmxleEFuaW1hdGUodC5jdXJyZW50U2xpZGUsdC52YXJzLnBhdXNlT25BY3Rpb24sITApfXM9bnVsbCxvPW51bGwsbT1udWxsLGw9bnVsbCx3PTB9fXZhciBzLG8sbCxjLG0sZixnLGgsUyx4PSExLHk9MCxiPTAsdz0wO3I/KHQuc3R5bGUubXNUb3VjaEFjdGlvbj1cIm5vbmVcIix0Ll9nZXN0dXJlPW5ldyBNU0dlc3R1cmUsdC5fZ2VzdHVyZS50YXJnZXQ9dCx0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsZSwhMSksdC5fc2xpZGVyPW4sdC5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlQ2hhbmdlXCIsYSwhMSksdC5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlRW5kXCIsaSwhMSkpOihnPWZ1bmN0aW9uKGUpe24uYW5pbWF0aW5nP2UucHJldmVudERlZmF1bHQoKTood2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkfHwxPT09ZS50b3VjaGVzLmxlbmd0aCkmJihuLnBhdXNlKCksYz1kP24uaDpuLncsZj1OdW1iZXIobmV3IERhdGUpLHk9ZS50b3VjaGVzWzBdLnBhZ2VYLGI9ZS50b3VjaGVzWzBdLnBhZ2VZLGw9diYmdSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnYmJnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86diYmbi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/bi5saW1pdDp2PyhuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5jdXJyZW50U2xpZGU6dT8obi5sYXN0LW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmM6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmMscz1kP2I6eSxvPWQ/eTpiLHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGgsITEpLHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsUywhMSkpfSxoPWZ1bmN0aW9uKGUpe3k9ZS50b3VjaGVzWzBdLnBhZ2VYLGI9ZS50b3VjaGVzWzBdLnBhZ2VZLG09ZD9zLWI6KG4udmFycy5ydGw/LTE6MSkqKHMteSkseD1kP01hdGguYWJzKG0pPE1hdGguYWJzKHktbyk6TWF0aC5hYnMobSk8TWF0aC5hYnMoYi1vKTt2YXIgdD01MDA7KCF4fHxOdW1iZXIobmV3IERhdGUpLWY+NTAwKSYmKGUucHJldmVudERlZmF1bHQoKSwhcCYmbi50cmFuc2l0aW9ucyYmKG4udmFycy5hbmltYXRpb25Mb29wfHwobS89MD09PW4uY3VycmVudFNsaWRlJiZtPDB8fG4uY3VycmVudFNsaWRlPT09bi5sYXN0JiZtPjA/TWF0aC5hYnMobSkvYysyOjEpLG4uc2V0UHJvcHMobCttLFwic2V0VG91Y2hcIikpKX0sUz1mdW5jdGlvbihlKXtpZih0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSxuLmFuaW1hdGluZ1RvPT09bi5jdXJyZW50U2xpZGUmJiF4JiZudWxsIT09bSl7dmFyIGE9dT8tbTptLGk9YT4wP24uZ2V0VGFyZ2V0KFwibmV4dFwiKTpuLmdldFRhcmdldChcInByZXZcIik7bi5jYW5BZHZhbmNlKGkpJiYoTnVtYmVyKG5ldyBEYXRlKS1mPDU1MCYmTWF0aC5hYnMoYSk+NTB8fE1hdGguYWJzKGEpPmMvMik/bi5mbGV4QW5pbWF0ZShpLG4udmFycy5wYXVzZU9uQWN0aW9uKTpwfHxuLmZsZXhBbmltYXRlKG4uY3VycmVudFNsaWRlLG4udmFycy5wYXVzZU9uQWN0aW9uLCEwKX10LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLFMsITEpLHM9bnVsbCxvPW51bGwsbT1udWxsLGw9bnVsbH0sdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGcsITEpKX0scmVzaXplOmZ1bmN0aW9uKCl7IW4uYW5pbWF0aW5nJiZuLmlzKFwiOnZpc2libGVcIikmJih2fHxuLmRvTWF0aCgpLHA/Zi5zbW9vdGhIZWlnaHQoKTp2PyhuLnNsaWRlcy53aWR0aChuLmNvbXB1dGVkVyksbi51cGRhdGUobi5wYWdpbmdDb3VudCksbi5zZXRQcm9wcygpKTpkPyhuLnZpZXdwb3J0LmhlaWdodChuLmgpLG4uc2V0UHJvcHMobi5oLFwic2V0VG90YWxcIikpOihuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpLG4ubmV3U2xpZGVzLndpZHRoKG4uY29tcHV0ZWRXKSxuLnNldFByb3BzKG4uY29tcHV0ZWRXLFwic2V0VG90YWxcIikpKX0sc21vb3RoSGVpZ2h0OmZ1bmN0aW9uKGUpe2lmKCFkfHxwKXt2YXIgdD1wP246bi52aWV3cG9ydDtlP3QuYW5pbWF0ZSh7aGVpZ2h0Om4uc2xpZGVzLmVxKG4uYW5pbWF0aW5nVG8pLmlubmVySGVpZ2h0KCl9LGUpOnQuaW5uZXJIZWlnaHQobi5zbGlkZXMuZXEobi5hbmltYXRpbmdUbykuaW5uZXJIZWlnaHQoKSl9fSxzeW5jOmZ1bmN0aW9uKGUpe3ZhciB0PSQobi52YXJzLnN5bmMpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLGE9bi5hbmltYXRpbmdUbztzd2l0Y2goZSl7Y2FzZVwiYW5pbWF0ZVwiOnQuZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCk7YnJlYWs7Y2FzZVwicGxheVwiOnQucGxheWluZ3x8dC5hc05hdnx8dC5wbGF5KCk7YnJlYWs7Y2FzZVwicGF1c2VcIjp0LnBhdXNlKCk7YnJlYWt9fSx1bmlxdWVJRDpmdW5jdGlvbihlKXtyZXR1cm4gZS5maWx0ZXIoXCJbaWRdXCIpLmFkZChlLmZpbmQoXCJbaWRdXCIpKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9JCh0aGlzKTtlLmF0dHIoXCJpZFwiLGUuYXR0cihcImlkXCIpK1wiX2Nsb25lXCIpfSksZX0scGF1c2VJbnZpc2libGU6e3Zpc1Byb3A6bnVsbCxpbml0OmZ1bmN0aW9uKCl7dmFyIGU9Zi5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7aWYoZSl7dmFyIHQ9ZS5yZXBsYWNlKC9bSHxoXWlkZGVuLyxcIlwiKStcInZpc2liaWxpdHljaGFuZ2VcIjtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHQsZnVuY3Rpb24oKXtmLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCk/bi5zdGFydFRpbWVvdXQ/Y2xlYXJUaW1lb3V0KG4uc3RhcnRUaW1lb3V0KTpuLnBhdXNlKCk6bi5zdGFydGVkP24ucGxheSgpOm4udmFycy5pbml0RGVsYXk+MD9zZXRUaW1lb3V0KG4ucGxheSxuLnZhcnMuaW5pdERlbGF5KTpuLnBsYXkoKX0pfX0saXNIaWRkZW46ZnVuY3Rpb24oKXt2YXIgZT1mLnBhdXNlSW52aXNpYmxlLmdldEhpZGRlblByb3AoKTtyZXR1cm4hIWUmJmRvY3VtZW50W2VdfSxnZXRIaWRkZW5Qcm9wOmZ1bmN0aW9uKCl7dmFyIGU9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdO2lmKFwiaGlkZGVuXCJpbiBkb2N1bWVudClyZXR1cm5cImhpZGRlblwiO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWlmKGVbdF0rXCJIaWRkZW5cImluIGRvY3VtZW50KXJldHVybiBlW3RdK1wiSGlkZGVuXCI7cmV0dXJuIG51bGx9fSxzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGMpLGM9c2V0VGltZW91dChmdW5jdGlvbigpe2w9XCJcIn0sM2UzKX19LG4uZmxleEFuaW1hdGU9ZnVuY3Rpb24oZSx0LGEscixvKXtpZihuLnZhcnMuYW5pbWF0aW9uTG9vcHx8ZT09PW4uY3VycmVudFNsaWRlfHwobi5kaXJlY3Rpb249ZT5uLmN1cnJlbnRTbGlkZT9cIm5leHRcIjpcInByZXZcIiksbSYmMT09PW4ucGFnaW5nQ291bnQmJihuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGU/XCJuZXh0XCI6XCJwcmV2XCIpLCFuLmFuaW1hdGluZyYmKG4uY2FuQWR2YW5jZShlLG8pfHxhKSYmbi5pcyhcIjp2aXNpYmxlXCIpKXtpZihtJiZyKXt2YXIgbD0kKG4udmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIik7aWYobi5hdEVuZD0wPT09ZXx8ZT09PW4uY291bnQtMSxsLmZsZXhBbmltYXRlKGUsITAsITEsITAsbyksbi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxlP1wibmV4dFwiOlwicHJldlwiLGwuZGlyZWN0aW9uPW4uZGlyZWN0aW9uLE1hdGguY2VpbCgoZSsxKS9uLnZpc2libGUpLTE9PT1uLmN1cnJlbnRTbGlkZXx8MD09PWUpcmV0dXJuIG4uY3VycmVudEl0ZW09ZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksITE7bi5jdXJyZW50SXRlbT1lLG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxlPU1hdGguZmxvb3IoZS9uLnZpc2libGUpfWlmKG4uYW5pbWF0aW5nPSEwLG4uYW5pbWF0aW5nVG89ZSx0JiZuLnBhdXNlKCksbi52YXJzLmJlZm9yZShuKSxuLnN5bmNFeGlzdHMmJiFvJiZmLnN5bmMoXCJhbmltYXRlXCIpLG4udmFycy5jb250cm9sTmF2JiZmLmNvbnRyb2xOYXYuYWN0aXZlKCksdnx8bi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLG4uYXRFbmQ9MD09PWV8fGU9PT1uLmxhc3Qsbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYudXBkYXRlKCksZT09PW4ubGFzdCYmKG4udmFycy5lbmQobiksbi52YXJzLmFuaW1hdGlvbkxvb3B8fG4ucGF1c2UoKSkscClzPyhuLnNsaWRlcy5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHtvcGFjaXR5OjAsekluZGV4OjF9KSxuLnNsaWRlcy5lcShlKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6Mn0pLG4ud3JhcHVwKGMpKToobi5zbGlkZXMuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjF9KS5hbmltYXRlKHtvcGFjaXR5OjB9LG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nKSxuLnNsaWRlcy5lcShlKS5jc3Moe3pJbmRleDoyfSkuYW5pbWF0ZSh7b3BhY2l0eToxfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyxuLndyYXB1cCkpO2Vsc2V7dmFyIGM9ZD9uLnNsaWRlcy5maWx0ZXIoXCI6Zmlyc3RcIikuaGVpZ2h0KCk6bi5jb21wdXRlZFcsZyxoLFM7dj8oZz1uLnZhcnMuaXRlbU1hcmdpbixTPShuLml0ZW1XK2cpKm4ubW92ZSpuLmFuaW1hdGluZ1RvLGg9Uz5uLmxpbWl0JiYxIT09bi52aXNpYmxlP24ubGltaXQ6Uyk6aD0wPT09bi5jdXJyZW50U2xpZGUmJmU9PT1uLmNvdW50LTEmJm4udmFycy5hbmltYXRpb25Mb29wJiZcIm5leHRcIiE9PW4uZGlyZWN0aW9uP3U/KG4uY291bnQrbi5jbG9uZU9mZnNldCkqYzowOm4uY3VycmVudFNsaWRlPT09bi5sYXN0JiYwPT09ZSYmbi52YXJzLmFuaW1hdGlvbkxvb3AmJlwicHJldlwiIT09bi5kaXJlY3Rpb24/dT8wOihuLmNvdW50KzEpKmM6dT8obi5jb3VudC0xLWUrbi5jbG9uZU9mZnNldCkqYzooZStuLmNsb25lT2Zmc2V0KSpjLG4uc2V0UHJvcHMoaCxcIlwiLG4udmFycy5hbmltYXRpb25TcGVlZCksbi50cmFuc2l0aW9ucz8obi52YXJzLmFuaW1hdGlvbkxvb3AmJm4uYXRFbmR8fChuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1uLmFuaW1hdGluZ1RvKSxuLmNvbnRhaW5lci51bmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIiksbi5jb250YWluZXIuYmluZChcIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiLGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KG4uZW5zdXJlQW5pbWF0aW9uRW5kKSxuLndyYXB1cChjKX0pLGNsZWFyVGltZW91dChuLmVuc3VyZUFuaW1hdGlvbkVuZCksbi5lbnN1cmVBbmltYXRpb25FbmQ9c2V0VGltZW91dChmdW5jdGlvbigpe24ud3JhcHVwKGMpfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQrMTAwKSk6bi5jb250YWluZXIuYW5pbWF0ZShuLmFyZ3Msbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcsZnVuY3Rpb24oKXtuLndyYXB1cChjKX0pfW4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KG4udmFycy5hbmltYXRpb25TcGVlZCl9fSxuLndyYXB1cD1mdW5jdGlvbihlKXtwfHx2fHwoMD09PW4uY3VycmVudFNsaWRlJiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0JiZuLnZhcnMuYW5pbWF0aW9uTG9vcD9uLnNldFByb3BzKGUsXCJqdW1wRW5kXCIpOm4uY3VycmVudFNsaWRlPT09bi5sYXN0JiYwPT09bi5hbmltYXRpbmdUbyYmbi52YXJzLmFuaW1hdGlvbkxvb3AmJm4uc2V0UHJvcHMoZSxcImp1bXBTdGFydFwiKSksbi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9bi5hbmltYXRpbmdUbyxuLnZhcnMuYWZ0ZXIobil9LG4uYW5pbWF0ZVNsaWRlcz1mdW5jdGlvbigpeyFuLmFuaW1hdGluZyYmZSYmbi5mbGV4QW5pbWF0ZShuLmdldFRhcmdldChcIm5leHRcIikpfSxuLnBhdXNlPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChuLmFuaW1hdGVkU2xpZGVzKSxuLmFuaW1hdGVkU2xpZGVzPW51bGwsbi5wbGF5aW5nPSExLG4udmFycy5wYXVzZVBsYXkmJmYucGF1c2VQbGF5LnVwZGF0ZShcInBsYXlcIiksbi5zeW5jRXhpc3RzJiZmLnN5bmMoXCJwYXVzZVwiKX0sbi5wbGF5PWZ1bmN0aW9uKCl7bi5wbGF5aW5nJiZjbGVhckludGVydmFsKG4uYW5pbWF0ZWRTbGlkZXMpLG4uYW5pbWF0ZWRTbGlkZXM9bi5hbmltYXRlZFNsaWRlc3x8c2V0SW50ZXJ2YWwobi5hbmltYXRlU2xpZGVzLG4udmFycy5zbGlkZXNob3dTcGVlZCksbi5zdGFydGVkPW4ucGxheWluZz0hMCxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS51cGRhdGUoXCJwYXVzZVwiKSxuLnN5bmNFeGlzdHMmJmYuc3luYyhcInBsYXlcIil9LG4uc3RvcD1mdW5jdGlvbigpe24ucGF1c2UoKSxuLnN0b3BwZWQ9ITB9LG4uY2FuQWR2YW5jZT1mdW5jdGlvbihlLHQpe3ZhciBhPW0/bi5wYWdpbmdDb3VudC0xOm4ubGFzdDtyZXR1cm4hIXR8fCghKCFtfHxuLmN1cnJlbnRJdGVtIT09bi5jb3VudC0xfHwwIT09ZXx8XCJwcmV2XCIhPT1uLmRpcmVjdGlvbil8fCghbXx8MCE9PW4uY3VycmVudEl0ZW18fGUhPT1uLnBhZ2luZ0NvdW50LTF8fFwibmV4dFwiPT09bi5kaXJlY3Rpb24pJiYoIShlPT09bi5jdXJyZW50U2xpZGUmJiFtKSYmKCEhbi52YXJzLmFuaW1hdGlvbkxvb3B8fCghbi5hdEVuZHx8MCE9PW4uY3VycmVudFNsaWRlfHxlIT09YXx8XCJuZXh0XCI9PT1uLmRpcmVjdGlvbikmJighbi5hdEVuZHx8bi5jdXJyZW50U2xpZGUhPT1hfHwwIT09ZXx8XCJuZXh0XCIhPT1uLmRpcmVjdGlvbikpKSl9LG4uZ2V0VGFyZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBuLmRpcmVjdGlvbj1lLFwibmV4dFwiPT09ZT9uLmN1cnJlbnRTbGlkZT09PW4ubGFzdD8wOm4uY3VycmVudFNsaWRlKzE6MD09PW4uY3VycmVudFNsaWRlP24ubGFzdDpuLmN1cnJlbnRTbGlkZS0xfSxuLnNldFByb3BzPWZ1bmN0aW9uKGUsdCxhKXt2YXIgaT1mdW5jdGlvbigpe3ZhciBhPWV8fChuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbztyZXR1cm4gZnVuY3Rpb24oKXtpZih2KXJldHVyblwic2V0VG91Y2hcIj09PXQ/ZTp1JiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0PzA6dT9uLmxpbWl0LShuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbzpuLmFuaW1hdGluZ1RvPT09bi5sYXN0P24ubGltaXQ6YTtzd2l0Y2godCl7Y2FzZVwic2V0VG90YWxcIjpyZXR1cm4gdT8obi5jb3VudC0xLW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmU6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmU7Y2FzZVwic2V0VG91Y2hcIjpyZXR1cm4gZTtjYXNlXCJqdW1wRW5kXCI6cmV0dXJuIHU/ZTpuLmNvdW50KmU7Y2FzZVwianVtcFN0YXJ0XCI6cmV0dXJuIHU/bi5jb3VudCplOmU7ZGVmYXVsdDpyZXR1cm4gZX19KCkqKG4udmFycy5ydGw/MTotMSkrXCJweFwifSgpO24udHJhbnNpdGlvbnMmJihpPW4uaXNGaXJlZm94P2Q/XCJ0cmFuc2xhdGUzZCgwLFwiK2krXCIsMClcIjpcInRyYW5zbGF0ZTNkKFwiK3BhcnNlSW50KGkpK1wicHgsMCwwKVwiOmQ/XCJ0cmFuc2xhdGUzZCgwLFwiK2krXCIsMClcIjpcInRyYW5zbGF0ZTNkKFwiKyhuLnZhcnMucnRsPy0xOjEpKnBhcnNlSW50KGkpK1wicHgsMCwwKVwiLGE9dm9pZCAwIT09YT9hLzFlMytcInNcIjpcIjBzXCIsbi5jb250YWluZXIuY3NzKFwiLVwiK24ucGZ4K1wiLXRyYW5zaXRpb24tZHVyYXRpb25cIixhKSxuLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsYSkpLG4uYXJnc1tuLnByb3BdPWksKG4udHJhbnNpdGlvbnN8fHZvaWQgMD09PWEpJiZuLmNvbnRhaW5lci5jc3Mobi5hcmdzKSxuLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2Zvcm1cIixpKX0sbi5zZXR1cD1mdW5jdGlvbihlKXtpZihwKW4udmFycy5ydGw/bi5zbGlkZXMuY3NzKHt3aWR0aDpcIjEwMCVcIixmbG9hdDpcInJpZ2h0XCIsbWFyZ2luTGVmdDpcIi0xMDAlXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSk6bi5zbGlkZXMuY3NzKHt3aWR0aDpcIjEwMCVcIixmbG9hdDpcImxlZnRcIixtYXJnaW5SaWdodDpcIi0xMDAlXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSksXCJpbml0XCI9PT1lJiYocz9uLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix3ZWJraXRUcmFuc2l0aW9uOlwib3BhY2l0eSBcIituLnZhcnMuYW5pbWF0aW9uU3BlZWQvMWUzK1wicyBlYXNlXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OjJ9KTowPT1uLnZhcnMuZmFkZUZpcnN0U2xpZGU/bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6Mn0pLmNzcyh7b3BhY2l0eToxfSk6bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6Mn0pLmFuaW1hdGUoe29wYWNpdHk6MX0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcpKSxuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpO2Vsc2V7dmFyIHQsYTtcImluaXRcIj09PWUmJihuLnZpZXdwb3J0PSQoJzxkaXYgY2xhc3M9XCInK2krJ3ZpZXdwb3J0XCI+PC9kaXY+JykuY3NzKHtvdmVyZmxvdzpcImhpZGRlblwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLmFwcGVuZFRvKG4pLmFwcGVuZChuLmNvbnRhaW5lciksbi5jbG9uZUNvdW50PTAsbi5jbG9uZU9mZnNldD0wLHUmJihhPSQubWFrZUFycmF5KG4uc2xpZGVzKS5yZXZlcnNlKCksbi5zbGlkZXM9JChhKSxuLmNvbnRhaW5lci5lbXB0eSgpLmFwcGVuZChuLnNsaWRlcykpKSxuLnZhcnMuYW5pbWF0aW9uTG9vcCYmIXYmJihuLmNsb25lQ291bnQ9MixuLmNsb25lT2Zmc2V0PTEsXCJpbml0XCIhPT1lJiZuLmNvbnRhaW5lci5maW5kKFwiLmNsb25lXCIpLnJlbW92ZSgpLG4uY29udGFpbmVyLmFwcGVuZChmLnVuaXF1ZUlEKG4uc2xpZGVzLmZpcnN0KCkuY2xvbmUoKS5hZGRDbGFzcyhcImNsb25lXCIpKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpLnByZXBlbmQoZi51bmlxdWVJRChuLnNsaWRlcy5sYXN0KCkuY2xvbmUoKS5hZGRDbGFzcyhcImNsb25lXCIpKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpKSxuLm5ld1NsaWRlcz0kKG4udmFycy5zZWxlY3RvcixuKSx0PXU/bi5jb3VudC0xLW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQ6bi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCxkJiYhdj8obi5jb250YWluZXIuaGVpZ2h0KDIwMCoobi5jb3VudCtuLmNsb25lQ291bnQpK1wiJVwiKS5jc3MoXCJwb3NpdGlvblwiLFwiYWJzb2x1dGVcIikud2lkdGgoXCIxMDAlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm5ld1NsaWRlcy5jc3Moe2Rpc3BsYXk6XCJibG9ja1wifSksbi5kb01hdGgoKSxuLnZpZXdwb3J0LmhlaWdodChuLmgpLG4uc2V0UHJvcHModCpuLmgsXCJpbml0XCIpfSxcImluaXRcIj09PWU/MTAwOjApKToobi5jb250YWluZXIud2lkdGgoMjAwKihuLmNvdW50K24uY2xvbmVDb3VudCkrXCIlXCIpLG4uc2V0UHJvcHModCpuLmNvbXB1dGVkVyxcImluaXRcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24uZG9NYXRoKCksbi52YXJzLnJ0bCYmbi5pc0ZpcmVmb3g/bi5uZXdTbGlkZXMuY3NzKHt3aWR0aDpuLmNvbXB1dGVkVyxtYXJnaW5SaWdodDpuLmNvbXB1dGVkTSxmbG9hdDpcInJpZ2h0XCIsZGlzcGxheTpcImJsb2NrXCJ9KTpuLm5ld1NsaWRlcy5jc3Moe3dpZHRoOm4uY29tcHV0ZWRXLG1hcmdpblJpZ2h0Om4uY29tcHV0ZWRNLGZsb2F0OlwibGVmdFwiLGRpc3BsYXk6XCJibG9ja1wifSksbi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKX0sXCJpbml0XCI9PT1lPzEwMDowKSl9dnx8bi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShuLmN1cnJlbnRTbGlkZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxuLnZhcnMuaW5pdChuKX0sbi5kb01hdGg9ZnVuY3Rpb24oKXt2YXIgZT1uLnNsaWRlcy5maXJzdCgpLHQ9bi52YXJzLml0ZW1NYXJnaW4sYT1uLnZhcnMubWluSXRlbXMsaT1uLnZhcnMubWF4SXRlbXM7bi53PXZvaWQgMD09PW4udmlld3BvcnQ/bi53aWR0aCgpOm4udmlld3BvcnQud2lkdGgoKSxuLmlzRmlyZWZveCYmKG4udz1uLndpZHRoKCkpLG4uaD1lLmhlaWdodCgpLG4uYm94UGFkZGluZz1lLm91dGVyV2lkdGgoKS1lLndpZHRoKCksdj8obi5pdGVtVD1uLnZhcnMuaXRlbVdpZHRoK3Qsbi5pdGVtTT10LG4ubWluVz1hP2Eqbi5pdGVtVDpuLncsbi5tYXhXPWk/aSpuLml0ZW1ULXQ6bi53LG4uaXRlbVc9bi5taW5XPm4udz8obi53LXQqKGEtMSkpL2E6bi5tYXhXPG4udz8obi53LXQqKGktMSkpL2k6bi52YXJzLml0ZW1XaWR0aD5uLnc/bi53Om4udmFycy5pdGVtV2lkdGgsbi52aXNpYmxlPU1hdGguZmxvb3Iobi53L24uaXRlbVcpLG4ubW92ZT1uLnZhcnMubW92ZT4wJiZuLnZhcnMubW92ZTxuLnZpc2libGU/bi52YXJzLm1vdmU6bi52aXNpYmxlLG4ucGFnaW5nQ291bnQ9TWF0aC5jZWlsKChuLmNvdW50LW4udmlzaWJsZSkvbi5tb3ZlKzEpLG4ubGFzdD1uLnBhZ2luZ0NvdW50LTEsbi5saW1pdD0xPT09bi5wYWdpbmdDb3VudD8wOm4udmFycy5pdGVtV2lkdGg+bi53P24uaXRlbVcqKG4uY291bnQtMSkrdCoobi5jb3VudC0xKToobi5pdGVtVyt0KSpuLmNvdW50LW4udy10KToobi5pdGVtVz1uLncsbi5pdGVtTT10LG4ucGFnaW5nQ291bnQ9bi5jb3VudCxuLmxhc3Q9bi5jb3VudC0xKSxuLmNvbXB1dGVkVz1uLml0ZW1XLW4uYm94UGFkZGluZyxuLmNvbXB1dGVkTT1uLml0ZW1NfSxuLnVwZGF0ZT1mdW5jdGlvbihlLHQpe24uZG9NYXRoKCksdnx8KGU8bi5jdXJyZW50U2xpZGU/bi5jdXJyZW50U2xpZGUrPTE6ZTw9bi5jdXJyZW50U2xpZGUmJjAhPT1lJiYobi5jdXJyZW50U2xpZGUtPTEpLG4uYW5pbWF0aW5nVG89bi5jdXJyZW50U2xpZGUpLG4udmFycy5jb250cm9sTmF2JiYhbi5tYW51YWxDb250cm9scyYmKFwiYWRkXCI9PT10JiYhdnx8bi5wYWdpbmdDb3VudD5uLmNvbnRyb2xOYXYubGVuZ3RoP2YuY29udHJvbE5hdi51cGRhdGUoXCJhZGRcIik6KFwicmVtb3ZlXCI9PT10JiYhdnx8bi5wYWdpbmdDb3VudDxuLmNvbnRyb2xOYXYubGVuZ3RoKSYmKHYmJm4uY3VycmVudFNsaWRlPm4ubGFzdCYmKG4uY3VycmVudFNsaWRlLT0xLG4uYW5pbWF0aW5nVG8tPTEpLGYuY29udHJvbE5hdi51cGRhdGUoXCJyZW1vdmVcIixuLmxhc3QpKSksbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYudXBkYXRlKCl9LG4uYWRkU2xpZGU9ZnVuY3Rpb24oZSx0KXt2YXIgYT0kKGUpO24uY291bnQrPTEsbi5sYXN0PW4uY291bnQtMSxkJiZ1P3ZvaWQgMCE9PXQ/bi5zbGlkZXMuZXEobi5jb3VudC10KS5hZnRlcihhKTpuLmNvbnRhaW5lci5wcmVwZW5kKGEpOnZvaWQgMCE9PXQ/bi5zbGlkZXMuZXEodCkuYmVmb3JlKGEpOm4uY29udGFpbmVyLmFwcGVuZChhKSxuLnVwZGF0ZSh0LFwiYWRkXCIpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yK1wiOm5vdCguY2xvbmUpXCIsbiksbi5zZXR1cCgpLG4udmFycy5hZGRlZChuKX0sbi5yZW1vdmVTbGlkZT1mdW5jdGlvbihlKXt2YXIgdD1pc05hTihlKT9uLnNsaWRlcy5pbmRleCgkKGUpKTplO24uY291bnQtPTEsbi5sYXN0PW4uY291bnQtMSxpc05hTihlKT8kKGUsbi5zbGlkZXMpLnJlbW92ZSgpOmQmJnU/bi5zbGlkZXMuZXEobi5sYXN0KS5yZW1vdmUoKTpuLnNsaWRlcy5lcShlKS5yZW1vdmUoKSxuLmRvTWF0aCgpLG4udXBkYXRlKHQsXCJyZW1vdmVcIiksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IrXCI6bm90KC5jbG9uZSlcIixuKSxuLnNldHVwKCksbi52YXJzLnJlbW92ZWQobil9LGYuaW5pdCgpfSwkKHdpbmRvdykuYmx1cihmdW5jdGlvbih0KXtlPSExfSkuZm9jdXMoZnVuY3Rpb24odCl7ZT0hMH0pLCQuZmxleHNsaWRlci5kZWZhdWx0cz17bmFtZXNwYWNlOlwiZmxleC1cIixzZWxlY3RvcjpcIi5zbGlkZXMgPiBsaVwiLGFuaW1hdGlvbjpcImZhZGVcIixlYXNpbmc6XCJzd2luZ1wiLGRpcmVjdGlvbjpcImhvcml6b250YWxcIixyZXZlcnNlOiExLGFuaW1hdGlvbkxvb3A6ITAsc21vb3RoSGVpZ2h0OiExLHN0YXJ0QXQ6MCxzbGlkZXNob3c6ITAsc2xpZGVzaG93U3BlZWQ6N2UzLGFuaW1hdGlvblNwZWVkOjYwMCxpbml0RGVsYXk6MCxyYW5kb21pemU6ITEsZmFkZUZpcnN0U2xpZGU6ITAsdGh1bWJDYXB0aW9uczohMSxwYXVzZU9uQWN0aW9uOiEwLHBhdXNlT25Ib3ZlcjohMSxwYXVzZUludmlzaWJsZTohMCx1c2VDU1M6ITAsdG91Y2g6ITAsdmlkZW86ITEsY29udHJvbE5hdjohMCxkaXJlY3Rpb25OYXY6ITAscHJldlRleHQ6XCJQcmV2aW91c1wiLG5leHRUZXh0OlwiTmV4dFwiLGtleWJvYXJkOiEwLG11bHRpcGxlS2V5Ym9hcmQ6ITEsbW91c2V3aGVlbDohMSxwYXVzZVBsYXk6ITEscGF1c2VUZXh0OlwiUGF1c2VcIixwbGF5VGV4dDpcIlBsYXlcIixjb250cm9sc0NvbnRhaW5lcjpcIlwiLG1hbnVhbENvbnRyb2xzOlwiXCIsY3VzdG9tRGlyZWN0aW9uTmF2OlwiXCIsc3luYzpcIlwiLGFzTmF2Rm9yOlwiXCIsaXRlbVdpZHRoOjAsaXRlbU1hcmdpbjowLG1pbkl0ZW1zOjEsbWF4SXRlbXM6MCxtb3ZlOjAsYWxsb3dPbmVTbGlkZTohMCxpc0ZpcmVmb3g6ITEsc3RhcnQ6ZnVuY3Rpb24oKXt9LGJlZm9yZTpmdW5jdGlvbigpe30sYWZ0ZXI6ZnVuY3Rpb24oKXt9LGVuZDpmdW5jdGlvbigpe30sYWRkZWQ6ZnVuY3Rpb24oKXt9LHJlbW92ZWQ6ZnVuY3Rpb24oKXt9LGluaXQ6ZnVuY3Rpb24oKXt9LHJ0bDohMX0sJC5mbi5mbGV4c2xpZGVyPWZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUmJihlPXt9KSxcIm9iamVjdFwiPT10eXBlb2YgZSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9JCh0aGlzKSxhPWUuc2VsZWN0b3I/ZS5zZWxlY3RvcjpcIi5zbGlkZXMgPiBsaVwiLG49dC5maW5kKGEpOzE9PT1uLmxlbmd0aCYmITE9PT1lLmFsbG93T25lU2xpZGV8fDA9PT1uLmxlbmd0aD8obi5mYWRlSW4oNDAwKSxlLnN0YXJ0JiZlLnN0YXJ0KHQpKTp2b2lkIDA9PT10LmRhdGEoXCJmbGV4c2xpZGVyXCIpJiZuZXcgJC5mbGV4c2xpZGVyKHRoaXMsZSl9KTt2YXIgdD0kKHRoaXMpLmRhdGEoXCJmbGV4c2xpZGVyXCIpO3N3aXRjaChlKXtjYXNlXCJwbGF5XCI6dC5wbGF5KCk7YnJlYWs7Y2FzZVwicGF1c2VcIjp0LnBhdXNlKCk7YnJlYWs7Y2FzZVwic3RvcFwiOnQuc3RvcCgpO2JyZWFrO2Nhc2VcIm5leHRcIjp0LmZsZXhBbmltYXRlKHQuZ2V0VGFyZ2V0KFwibmV4dFwiKSwhMCk7YnJlYWs7Y2FzZVwicHJldlwiOmNhc2VcInByZXZpb3VzXCI6dC5mbGV4QW5pbWF0ZSh0LmdldFRhcmdldChcInByZXZcIiksITApO2JyZWFrO2RlZmF1bHQ6XCJudW1iZXJcIj09dHlwZW9mIGUmJnQuZmxleEFuaW1hdGUoZSwhMCl9fX0oalF1ZXJ5KTsiLCIhZnVuY3Rpb24oZyl7Zy5mbi50d2VudHl0d2VudHk9ZnVuY3Rpb24obSl7bT1nLmV4dGVuZCh7ZGVmYXVsdF9vZmZzZXRfcGN0Oi41LG9yaWVudGF0aW9uOlwiaG9yaXpvbnRhbFwiLGJlZm9yZV9sYWJlbDpcIkJlZm9yZVwiLGFmdGVyX2xhYmVsOlwiQWZ0ZXJcIixub19vdmVybGF5OiExLG1vdmVfc2xpZGVyX29uX2hvdmVyOiExLG1vdmVfd2l0aF9oYW5kbGVfb25seTohMCxjbGlja190b19tb3ZlOiExfSxtKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9bS5kZWZhdWx0X29mZnNldF9wY3Qscz1nKHRoaXMpLHI9bS5vcmllbnRhdGlvbix0PVwidmVydGljYWxcIj09PXI/XCJkb3duXCI6XCJsZWZ0XCIsbj1cInZlcnRpY2FsXCI9PT1yP1widXBcIjpcInJpZ2h0XCI7aWYocy53cmFwKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LXdyYXBwZXIgdHdlbnR5dHdlbnR5LVwiK3IrXCInPjwvZGl2PlwiKSwhbS5ub19vdmVybGF5KXtzLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1vdmVybGF5Jz48L2Rpdj5cIik7dmFyIGE9cy5maW5kKFwiLnR3ZW50eXR3ZW50eS1vdmVybGF5XCIpO2EuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWJlZm9yZS1sYWJlbCcgZGF0YS1jb250ZW50PSdcIittLmJlZm9yZV9sYWJlbCtcIic+PC9kaXY+XCIpLGEuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWFmdGVyLWxhYmVsJyBkYXRhLWNvbnRlbnQ9J1wiK20uYWZ0ZXJfbGFiZWwrXCInPjwvZGl2PlwiKX12YXIgYz1zLmZpbmQoXCJpbWc6Zmlyc3RcIiksbD1zLmZpbmQoXCJpbWc6bGFzdFwiKTtzLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1oYW5kbGUnPjwvZGl2PlwiKTt2YXIgZD1zLmZpbmQoXCIudHdlbnR5dHdlbnR5LWhhbmRsZVwiKTtkLmFwcGVuZChcIjxzcGFuIGNsYXNzPSd0d2VudHl0d2VudHktXCIrdCtcIi1hcnJvdyc+PC9zcGFuPlwiKSxkLmFwcGVuZChcIjxzcGFuIGNsYXNzPSd0d2VudHl0d2VudHktXCIrbitcIi1hcnJvdyc+PC9zcGFuPlwiKSxzLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWNvbnRhaW5lclwiKSxjLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWJlZm9yZVwiKSxsLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWFmdGVyXCIpO2Z1bmN0aW9uIGkodCl7dmFyIGUsbixhLGksbz0oZT10LG49Yy53aWR0aCgpLGE9Yy5oZWlnaHQoKSx7dzpuK1wicHhcIixoOmErXCJweFwiLGN3OmUqbitcInB4XCIsY2g6ZSphK1wicHhcIn0pO2QuY3NzKFwidmVydGljYWxcIj09PXI/XCJ0b3BcIjpcImxlZnRcIixcInZlcnRpY2FsXCI9PT1yP28uY2g6by5jdyksaT1vLFwidmVydGljYWxcIj09PXI/KGMuY3NzKFwiY2xpcFwiLFwicmVjdCgwLFwiK2kudytcIixcIitpLmNoK1wiLDApXCIpLGwuY3NzKFwiY2xpcFwiLFwicmVjdChcIitpLmNoK1wiLFwiK2kudytcIixcIitpLmgrXCIsMClcIikpOihjLmNzcyhcImNsaXBcIixcInJlY3QoMCxcIitpLmN3K1wiLFwiK2kuaCtcIiwwKVwiKSxsLmNzcyhcImNsaXBcIixcInJlY3QoMCxcIitpLncrXCIsXCIraS5oK1wiLFwiK2kuY3crXCIpXCIpKSxzLmNzcyhcImhlaWdodFwiLGkuaCl9ZnVuY3Rpb24gbyh0LGUpe3ZhciBuLGEsaTtyZXR1cm4gbj1cInZlcnRpY2FsXCI9PT1yPyhlLXkpL3U6KHQtcCkvaCxhPTAsaT0xLE1hdGgubWF4KGEsTWF0aC5taW4oaSxuKSl9Zyh3aW5kb3cpLm9uKFwicmVzaXplLnR3ZW50eXR3ZW50eVwiLGZ1bmN0aW9uKHQpe2koZSl9KTtmdW5jdGlvbiB3KHQpeyh0LmRpc3RYPnQuZGlzdFkmJnQuZGlzdFg8LXQuZGlzdFl8fHQuZGlzdFg8dC5kaXN0WSYmdC5kaXN0WD4tdC5kaXN0WSkmJlwidmVydGljYWxcIiE9PXI/dC5wcmV2ZW50RGVmYXVsdCgpOih0LmRpc3RYPHQuZGlzdFkmJnQuZGlzdFg8LXQuZGlzdFl8fHQuZGlzdFg+dC5kaXN0WSYmdC5kaXN0WD4tdC5kaXN0WSkmJlwidmVydGljYWxcIj09PXImJnQucHJldmVudERlZmF1bHQoKSxzLmFkZENsYXNzKFwiYWN0aXZlXCIpLHA9cy5vZmZzZXQoKS5sZWZ0LHk9cy5vZmZzZXQoKS50b3AsaD1jLndpZHRoKCksdT1jLmhlaWdodCgpfWZ1bmN0aW9uIGYodCl7cy5oYXNDbGFzcyhcImFjdGl2ZVwiKSYmKGU9byh0LnBhZ2VYLHQucGFnZVkpLGkoZSkpfWZ1bmN0aW9uIHYoKXtzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfXZhciBwPTAseT0wLGg9MCx1PTAsXz1tLm1vdmVfd2l0aF9oYW5kbGVfb25seT9kOnM7Xy5vbihcIm1vdmVzdGFydFwiLHcpLF8ub24oXCJtb3ZlXCIsZiksXy5vbihcIm1vdmVlbmRcIix2KSxtLm1vdmVfc2xpZGVyX29uX2hvdmVyJiYocy5vbihcIm1vdXNlZW50ZXJcIix3KSxzLm9uKFwibW91c2Vtb3ZlXCIsZikscy5vbihcIm1vdXNlbGVhdmVcIix2KSksZC5vbihcInRvdWNobW92ZVwiLGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKX0pLHMuZmluZChcImltZ1wiKS5vbihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKX0pLG0uY2xpY2tfdG9fbW92ZSYmcy5vbihcImNsaWNrXCIsZnVuY3Rpb24odCl7cD1zLm9mZnNldCgpLmxlZnQseT1zLm9mZnNldCgpLnRvcCxoPWMud2lkdGgoKSx1PWMuaGVpZ2h0KCksZT1vKHQucGFnZVgsdC5wYWdlWSksaShlKX0pLGcod2luZG93KS50cmlnZ2VyKFwicmVzaXplLnR3ZW50eXR3ZW50eVwiKX0pfX0oalF1ZXJ5KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI21lbnUtb3BlbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNtZW51LW9wZW4gc3BhbicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJCgnLm5hdicpLnNsaWRlVG9nZ2xlKCdzbG93Jyk7ICBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcHJvZHVjdHMgc3ViIG1lbnVcclxuICAgICQoJy5wcm9kdWN0cy1tZW51LWxpbms+YScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5kb3dubG9hZHMnKS5yZW1vdmVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICQoJy5wcm9kdWN0cycpLnRvZ2dsZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICB9KTsgIFxyXG5cclxuICAgIC8vZG93bmxvYWRzIHN1YiBtZW51XHJcbiAgICAkKCcuZG93bmxvYWQtbWVudS1saW5rJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzJykucmVtb3ZlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgICAgICAkKCcuZG93bmxvYWRzJykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY2hhbmdlIHByb2R1Y3QgbWVudSBsaW5rIG9uIG1vYmlsZVxyXG5cclxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgaWYodyA8IDEyMDApIHtcclxuICAgICAgJCgnLnByb2R1Y3RzLW1lbnUtbGluaz5hJykuYXR0cignaHJlZicsICcvcHJvZHVjdHMnKTtcclxuICAgICAgJCgnLmRvd25sb2FkLW1lbnUtbGluaz5hJykuYXR0cignaHJlZicsICcvZG93bmxvYWRzJyk7XHJcbiAgICB9IFxyXG5cclxuICAvL2NvbGxhcHNpYmxlIG1lbnVzIGZ1bmN0aW9uXHJcbiAgZnVuY3Rpb24gc2V0dXBfY29sbGFwc2libGVfc3VibWVudXMoKSB7XHJcbiAgICB2YXIgJG1lbnUgPSAkKCcjbW9iaWxlX21lbnUnKSxcclxuICAgICAgdG9wX2xldmVsX2xpbmsgPSAnI21vYmlsZV9tZW51IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSc7XHJcbiAgICAgIGNvbnNvbGUubG9nKCRtZW51KTtcclxuICAgICRtZW51LmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLm9mZignY2xpY2snKTtcclxuICAgICAgIFxyXG4gICAgICBpZiAoICQodGhpcykuaXModG9wX2xldmVsX2xpbmspICkge1xyXG4gICAgICAgICQodGhpcykuYXR0cignaHJlZicsICcjJyk7XHJcbiAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICBpZiAoICEgJCh0aGlzKS5zaWJsaW5ncygnLnN1Yi1tZW51JykubGVuZ3RoICkge1xyXG4gICAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICQodGhpcykucGFyZW50cygnLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgIFxyXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgc2V0dXBfY29sbGFwc2libGVfc3VibWVudXMoKTtcclxuICAgIH0sIDcwMCk7XHJcbiAgfSk7XHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubmV3cy1zbGlkZXInKS5mbGV4c2xpZGVyKHtcclxuICAgICAgICBhbmltYXRpb246IFwiZmFkZVwiLFxyXG4gICAgICAgIHNsaWRlc2hvd1NwZWVkOiA3MDAwLFxyXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA2MDAsXHJcbiAgICAgICAgYW5pbWF0aW9uTG9vcDogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uQWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAvL2NvbnRyb2xOYXY6IHRydWUsICBcclxuICAgICAgICBydGw6IHRydWUsXHJcbiAgICAgICAgY3VzdG9tRGlyZWN0aW9uTmF2OiAkKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIilcclxuICAgIH0pO1xyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnByb2R1Y3Qtc2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBcImZhZGVcIixcclxuICAgICAgICAvL3NsaWRlc2hvd1NwZWVkOiA3MDAwLFxyXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA2MDAsXHJcbiAgICAgICAgYW5pbWF0aW9uTG9vcDogZmFsc2UsXHJcbiAgICAgICAgcGF1c2VPbkFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgY29udHJvbE5hdjogdHJ1ZSxcclxuICAgICAgICBydGw6IHRydWUsXHJcbiAgICAgICAgY3VzdG9tRGlyZWN0aW9uTmF2OiAkKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIilcclxuICAgIH0pO1xyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5iZWZvcmUnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLmJlZm9yZScpLmZhZGVPdXQoMTUwMCk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuaWYoJCgnLmltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGgpIHtcclxuXHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHQgICQoXCIjaW1hZ2VzX3RvX2NvbXBhcmVcIikudHdlbnR5dHdlbnR5KCk7XHJcblx0fSk7XHJcbn0iLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICQoJy5mbGV4c2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICBhbmltYXRpb246IFwiZmFkZVwiLFxyXG4gICAgc2xpZGVzaG93U3BlZWQ6IDcwMDAsXHJcbiAgICBhbmltYXRpb25TcGVlZDogNjAwLCAgXHJcbiAgICBhbmltYXRpb25Mb29wOiB0cnVlLFxyXG5cdGNvbnRyb2xOYXY6IHRydWUsICBcclxuICAgIHJ0bDogdHJ1ZSxcclxuICB9KTtcclxufSk7IiwiLy9hZGQgc21vb3RoIHNjcm9sbCB0byBhbGwgbGlua3NcclxudmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gIC8vIEFkZCBzbW9vdGggc2Nyb2xsaW5nIHRvIGFsbCBsaW5rc1xyXG4gICQoXCJhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIHRoaXMuaGFzaCBoYXMgYSB2YWx1ZSBiZWZvcmUgb3ZlcnJpZGluZyBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICBpZiAodGhpcy5oYXNoICE9PSBcIlwiKSB7XHJcbiAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIC8vIFN0b3JlIGhhc2hcclxuICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XHJcblxyXG4gICAgICAvLyBVc2luZyBqUXVlcnkncyBhbmltYXRlKCkgbWV0aG9kIHRvIGFkZCBzbW9vdGggcGFnZSBzY3JvbGxcclxuICAgICAgLy8gVGhlIG9wdGlvbmFsIG51bWJlciAoODAwKSBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdGFrZXMgdG8gc2Nyb2xsIHRvIHRoZSBzcGVjaWZpZWQgYXJlYVxyXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcFxyXG4gICAgICB9LCA4MDAsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vIEFkZCBoYXNoICgjKSB0byBVUkwgd2hlbiBkb25lIHNjcm9sbGluZyAoZGVmYXVsdCBjbGljayBiZWhhdmlvcilcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICAgIH0pO1xyXG4gICAgfSAvLyBFbmQgaWZcclxuICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==