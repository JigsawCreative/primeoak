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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvNDA0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2JlZm9yZS1hbmQtYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mdWxsLWltYWdlLWZsZXhzbGlkZXItaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9qcXVlcnkuZXZlbnQubW92ZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvanF1ZXJ5LmZsZXhzbGlkZXItbWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2pxdWVyeS50d2VudHl0d2VudHkubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbmV3cy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJvZHVjdC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Ntb290aC1zY3JvbGwuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJnbG9iYWwiLCJ1bmRlZmluZWQiLCJzZXRJbW1lZGlhdGUiLCJuZXh0SGFuZGxlIiwidGFza3NCeUhhbmRsZSIsImN1cnJlbnRseVJ1bm5pbmdBVGFzayIsImRvYyIsImRvY3VtZW50IiwicmVnaXN0ZXJJbW1lZGlhdGUiLCJjYWxsYmFjayIsIkZ1bmN0aW9uIiwidGFzayIsImNsZWFySW1tZWRpYXRlIiwiaGFuZGxlIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJjYW5Vc2VQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJNYXRoIiwicmFuZG9tIiwib25HbG9iYWxNZXNzYWdlIiwiZXZlbnQiLCJzb3VyY2UiLCJkYXRhIiwiaW5kZXhPZiIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsInBvcnQyIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24iLCJhdHRhY2hUbyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwidG9TdHJpbmciLCJzZWxmIiwic2NvcGUiLCJ3aW5kb3ciLCJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJpZCIsImNsZWFyRm4iLCJfaWQiLCJfY2xlYXJGbiIsInVucmVmIiwicmVmIiwiZW5yb2xsIiwiaXRlbSIsIm1zZWNzIiwiX2lkbGVUaW1lb3V0SWQiLCJfaWRsZVRpbWVvdXQiLCJ1bmVucm9sbCIsIl91bnJlZkFjdGl2ZSIsImFjdGl2ZSIsIm9uVGltZW91dCIsIl9vblRpbWVvdXQiLCJyZXF1aXJlIiwiZyIsIiQiLCJqUXVlcnkiLCJyZWFkeSIsImNsaWNrIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInciLCJpbm5lcldpZHRoIiwiYXR0ciIsImxvYWQiLCJ0d2VudHl0d2VudHkiLCIkd2luZG93IiwiZmxleHNsaWRlciIsInZhcnMiLCJnZXRHcmlkU2l6ZSIsImVhY2giLCJmaW5kIiwiYW5pbWF0aW9uIiwic2xpZGVzaG93U3BlZWQiLCJhbmltYXRpb25Mb29wIiwiY29udHJvbE5hdiIsImN1c3RvbURpcmVjdGlvbk5hdiIsIm1pbkl0ZW1zIiwibWF4SXRlbXMiLCJzdGFydCIsInNsaWRlciIsInJlc2l6ZSIsImdyaWRTaXplIiwiZGVmaW5lIiwiYXNzaWduIiwiZXh0ZW5kIiwicCIsImEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJuIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJDdXN0b21FdmVudCIsIkV2ZW50IiwibyIsInRleHRhcmVhIiwiaW5wdXQiLCJzZWxlY3QiLCJidXR0b24iLCJjIiwibW92ZSIsImNhbmNlbCIsImVuZCIsInUiLCJyIiwiZCIsIlN5bWJvbCIsIm0iLCJ2Iiwic3BsaXQiLCJmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNwbGljZSIsImRpc3BhdGNoRXZlbnQiLCJzIiwia2ljayIsImgiLCJsIiwicHJldmVudERlZmF1bHQiLCJYIiwiaWRlbnRpZmllZFRvdWNoIiwiaWRlbnRpZmllciIsIlkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJUIiwieSIsImIiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInRhcmdldFRvdWNoZXMiLCJ0aW1lU3RhbXAiLCJhbHRLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJzdGFydFgiLCJzdGFydFkiLCJkaXN0WCIsImRpc3RZIiwiZGVsdGFYIiwiZGVsdGFZIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZmluZ2VyIiwiZW5hYmxlTW92ZSIsIm1vdmVFbmFibGVkIiwidGFyZ2V0IiwiRSIsInRpbWVyIiwidG91Y2giLCJTIiwiSyIsImsiLCJhY3RpdmVUb3VjaG1vdmUiLCJhY3RpdmVUb3VjaGVuZCIsIndoaWNoIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiZGVmYXVsdFByZXZlbnRlZCIsImoiLCJzcGVjaWFsIiwibW92ZXN0YXJ0Iiwic2V0dXAiLCJDIiwidGVhcmRvd24iLCJhZGQiLCJBIiwiUSIsIm1vdmVlbmQiLCJxIiwiaGFuZGxlciIsIm9yaWdpbmFsRXZlbnQiLCJydGwiLCJkZWZhdWx0cyIsIm5hbWVzcGFjZSIsIm5hdmlnYXRvciIsIm1zUG9pbnRlckVuYWJsZWQiLCJNU0dlc3R1cmUiLCJEb2N1bWVudFRvdWNoIiwiZGlyZWN0aW9uIiwicmV2ZXJzZSIsIml0ZW1XaWR0aCIsImFzTmF2Rm9yIiwiaW5pdCIsImFuaW1hdGluZyIsImN1cnJlbnRTbGlkZSIsInBhcnNlSW50Iiwic3RhcnRBdCIsImlzTmFOIiwiYW5pbWF0aW5nVG8iLCJhdEVuZCIsImxhc3QiLCJjb250YWluZXJTZWxlY3RvciIsInNlbGVjdG9yIiwic3Vic3RyIiwic2VhcmNoIiwic2xpZGVzIiwiY29udGFpbmVyIiwiY291bnQiLCJzeW5jRXhpc3RzIiwic3luYyIsInByb3AiLCJtYW51YWxQYXVzZSIsInN0b3BwZWQiLCJzdGFydGVkIiwic3RhcnRUaW1lb3V0IiwidHJhbnNpdGlvbnMiLCJ2aWRlbyIsInVzZUNTUyIsInN0eWxlIiwicGZ4IiwicmVwbGFjZSIsImlzRmlyZWZveCIsInVzZXJBZ2VudCIsImVuc3VyZUFuaW1hdGlvbkVuZCIsImNvbnRyb2xzQ29udGFpbmVyIiwibWFudWFsQ29udHJvbHMiLCJyYW5kb21pemUiLCJzb3J0Iiwicm91bmQiLCJlbXB0eSIsImFwcGVuZCIsImRvTWF0aCIsImRpcmVjdGlvbk5hdiIsImtleWJvYXJkIiwibXVsdGlwbGVLZXlib2FyZCIsImJpbmQiLCJrZXlDb2RlIiwiZ2V0VGFyZ2V0IiwiZmxleEFuaW1hdGUiLCJwYXVzZU9uQWN0aW9uIiwibW91c2V3aGVlbCIsInBhdXNlUGxheSIsInNsaWRlc2hvdyIsInBhdXNlSW52aXNpYmxlIiwicGF1c2VPbkhvdmVyIiwiaG92ZXIiLCJtYW51YWxQbGF5IiwicGF1c2UiLCJwbGF5IiwiaXNIaWRkZW4iLCJpbml0RGVsYXkiLCJhc05hdiIsInNtb290aEhlaWdodCIsImZsb29yIiwiY3VycmVudEl0ZW0iLCJlcSIsImFkZENsYXNzIiwiX3NsaWRlciIsIl9nZXN0dXJlIiwiY3VycmVudFRhcmdldCIsImFkZFBvaW50ZXIiLCJwb2ludGVySWQiLCJpbmRleCIsImhhc0NsYXNzIiwib2Zmc2V0IiwicmlnaHQiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNldHVwTWFudWFsIiwic2V0dXBQYWdpbmciLCJjb250cm9sTmF2U2NhZmZvbGQiLCJwYWdpbmdDb3VudCIsInRleHQiLCJ0aHVtYkNhcHRpb25zIiwiYXBwZW5kVG8iLCJzZXQiLCJkZWxlZ2F0ZSIsInR5cGUiLCJzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50IiwidXBkYXRlIiwicmVtb3ZlIiwiY2xvc2VzdCIsInByZXZUZXh0IiwibmV4dFRleHQiLCJyZW1vdmVBdHRyIiwiZmlsdGVyIiwicGxheVRleHQiLCJwYXVzZVRleHQiLCJzdG9wUHJvcGFnYXRpb24iLCJOdW1iZXIiLCJEYXRlIiwibGltaXQiLCJpdGVtVyIsIml0ZW1NYXJnaW4iLCJjbG9uZU9mZnNldCIsInRyYW5zbGF0aW9uWCIsInRyYW5zbGF0aW9uWSIsIngiLCJhYnMiLCJNU0dFU1RVUkVfRkxBR19JTkVSVElBIiwic3RvcCIsInNldFByb3BzIiwiY2FuQWR2YW5jZSIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaGVzIiwiaXMiLCJ3aWR0aCIsImNvbXB1dGVkVyIsInZpZXdwb3J0IiwiaGVpZ2h0IiwibmV3U2xpZGVzIiwiYW5pbWF0ZSIsImlubmVySGVpZ2h0IiwicGxheWluZyIsInVuaXF1ZUlEIiwidmlzUHJvcCIsImdldEhpZGRlblByb3AiLCJjZWlsIiwidmlzaWJsZSIsImJlZm9yZSIsImNzcyIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJ3cmFwdXAiLCJhbmltYXRpb25TcGVlZCIsImVhc2luZyIsInVuYmluZCIsImFmdGVyIiwiYW5pbWF0ZVNsaWRlcyIsImFuaW1hdGVkU2xpZGVzIiwibWFyZ2luTGVmdCIsInBvc2l0aW9uIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5Iiwid2Via2l0VHJhbnNpdGlvbiIsImZhZGVGaXJzdFNsaWRlIiwib3ZlcmZsb3ciLCJjbG9uZUNvdW50IiwibWFrZUFycmF5IiwiZmlyc3QiLCJjbG9uZSIsInByZXBlbmQiLCJjb21wdXRlZE0iLCJib3hQYWRkaW5nIiwib3V0ZXJXaWR0aCIsIml0ZW1UIiwiaXRlbU0iLCJtaW5XIiwibWF4VyIsImFkZFNsaWRlIiwiYWRkZWQiLCJyZW1vdmVTbGlkZSIsInJlbW92ZWQiLCJibHVyIiwiZm9jdXMiLCJhbGxvd09uZVNsaWRlIiwiZm4iLCJmYWRlSW4iLCJkZWZhdWx0X29mZnNldF9wY3QiLCJvcmllbnRhdGlvbiIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSIsIm1vdmVfc2xpZGVyX29uX2hvdmVyIiwibW92ZV93aXRoX2hhbmRsZV9vbmx5IiwiY2xpY2tfdG9fbW92ZSIsIndyYXAiLCJjdyIsImNoIiwibWF4IiwibWluIiwidG9wIiwiXyIsInRyaWdnZXIiLCJzbGlkZVRvZ2dsZSIsInNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzIiwiJG1lbnUiLCJ0b3BfbGV2ZWxfbGluayIsImNvbnNvbGUiLCJsb2ciLCJzaWJsaW5ncyIsInBhcmVudHMiLCJwYXJlbnQiLCJtb3VzZWVudGVyIiwiZmFkZU91dCIsImhhc2giLCJzY3JvbGxUb3AiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Q0FBQyxDQUFDMFUsSUFBRCxDQUFELENBQVF6SCxNQUFSLEdBQWlCMkc7QUFETixPQUF4QixFQUVHLEdBRkgsRUFFUSxZQUFVO0FBRWhCO0FBQ0FuVixjQUFNLENBQUNtVyxRQUFQLENBQWdCRixJQUFoQixHQUF1QkEsSUFBdkI7QUFDRCxPQU5EO0FBT0QsS0FuQmdDLENBbUIvQjs7QUFDSCxHQXBCRDtBQXFCRCxDQXZCRCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKiBJbXBvcnQgZGVwZW5kZW5jaWVzICoqL1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9qcXVlcnkuZmxleHNsaWRlci1taW4nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9qcXVlcnkuZXZlbnQubW92ZS5taW4uanMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9qcXVlcnkudHdlbnR5dHdlbnR5Lm1pbi5qcyc7XHJcblxyXG4vKiogSW1wb3J0IEN1c3RvbSBmaWxlcyAqKi9cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWVudSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2Z1bGwtaW1hZ2UtZmxleHNsaWRlci1pdGVtJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2VydmljZXMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iZWZvcmUtYW5kLWFmdGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY29udGFjdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Ntb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uZXdzLXNsaWRlcic7XHJcbi8vaW1wb3J0ICcuL2NvbXBvbmVudHMvZnJvbnQtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzLzQwNCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Byb2R1Y3Qtc2xpZGVyJzsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vdHJpZ2dlciBkb3dubG9hZHMgc3ViIG1lbnVcclxuICAgICQoJy5wcm9kdWN0LTQwNCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5kb3dubG9hZHMnKS5yZW1vdmVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICQoJy5wcm9kdWN0cycpLnRvZ2dsZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy9jaGFuZ2UgcHJvZHVjdCBtZW51IGxpbmsgb24gbW9iaWxlXHJcblxyXG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICBpZih3IDwgMTIwMCkge1xyXG4gICAgICAkKCcucHJvZHVjdC00MDQnKS5hdHRyKCdocmVmJywgJy9wcm9kdWN0cycpO1xyXG4gICAgfSBcclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRpZigkKCcuYmEtaW1hZ2UtY29tcGFyaXNvbicpLmxlbmd0aCB8fCAkKCcucG9zdC1iYS1pbWFnZS1jb21wYXJpc29uJykubGVuZ3RoKSB7XHJcblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHRcdCQoXCIuYmFfaW1hZ2VzX3RvX2NvbXBhcmVcIikudHdlbnR5dHdlbnR5KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoOyAgIFxyXG4gICAgaWYodyA8IDEyMDApIHtcclxuICAgICAgICAkKCcuY29udGFjdC11cycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5jb250YWN0LWNvbC0xJykudG9nZ2xlQ2xhc3MoJ3Nob3ctY29sdW1uJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLmNvbnRhY3RfX2Nyb3NzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmNvbnRhY3QtY29sLTEnKS5yZW1vdmVDbGFzcygnc2hvdy1jb2x1bW4nKTtcclxuICAgICAgICAkKCcuY29udGFjdC1jb2wtMicpLnJlbW92ZUNsYXNzKCdzaG93LWNvbHVtbicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoJy5vcHBvcnR1bml0aWVzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmNvbnRhY3QtY29sLTInKS50b2dnbGVDbGFzcygnc2hvdy1jb2x1bW4nKTtcclxuICAgIH0pOyAgICBcclxuICAgIH1cclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8vIHN0b3JlIHRoZSBzbGlkZXIgaW4gYSBsb2NhbCB2YXJpYWJsZVxyXG5cdHZhciAkd2luZG93ID0gJCh3aW5kb3cpLFxyXG5cdFx0ZmxleHNsaWRlciA9IHsgdmFyczp7fSB9O1xyXG5cclxuXHQvLyB0aW55IGhlbHBlciBmdW5jdGlvbiB0byBhZGQgYnJlYWtwb2ludHNcclxuXHRmdW5jdGlvbiBnZXRHcmlkU2l6ZSgpIHtcclxuXHRcdHJldHVybiAod2luZG93LmlubmVyV2lkdGggPCAxMDAgKSA/IDEgOiAxO1xyXG5cdH1cclxuXHJcblx0JHdpbmRvdy5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcblx0XHQgJCgnLmZ1bGwtaW1hZ2UtaXRlbS1mbGV4c2xpZGVyLWNvbnRhaW5lcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHQkKHRoaXMpLmZpbmQoXCIuZmxleHNsaWRlclwiKS5mbGV4c2xpZGVyKHtcclxuXHRcdFx0XHRhbmltYXRpb246IFwic2xpZGVcIixcclxuXHRcdFx0XHRzbGlkZXNob3dTcGVlZDogMTIwMDAsXHJcblx0XHRcdFx0YW5pbWF0aW9uTG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRjb250cm9sTmF2OiBmYWxzZSxcclxuXHRcdFx0XHRjdXN0b21EaXJlY3Rpb25OYXY6ICQodGhpcykuZmluZChcIi5jdXN0b20tbmF2aWdhdGlvbiBhXCIpLFxyXG5cdFx0XHRcdG1pbkl0ZW1zOiBnZXRHcmlkU2l6ZSgpLCAvLyB1c2UgZnVuY3Rpb24gdG8gcHVsbCBpbiBpbml0aWFsIHZhbHVlXHJcblx0XHRcdFx0bWF4SXRlbXM6IGdldEdyaWRTaXplKCksIC8vIHVzZSBmdW5jdGlvbiB0byBwdWxsIGluIGluaXRpYWwgdmFsdWVcclxuXHRcdFx0XHRzdGFydDogZnVuY3Rpb24oc2xpZGVyKSB7XHJcblx0XHRcdFx0XHRmbGV4c2xpZGVyID0gc2xpZGVyO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8gY2hlY2sgZ3JpZCBzaXplIG9uIHJlc2l6ZSBldmVudFxyXG5cdCR3aW5kb3cucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGdyaWRTaXplID0gZ2V0R3JpZFNpemUoKTtcclxuXHRcdGZsZXhzbGlkZXIudmFycy5taW5JdGVtcyA9IGdyaWRTaXplO1xyXG5cdFx0ZmxleHNsaWRlci52YXJzLm1heEl0ZW1zID0gZ3JpZFNpemU7XHJcblx0fSk7XHRcclxufSgpKTsiLCIhZnVuY3Rpb24oZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZudWxsIT09bW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lOmUoKX0oZnVuY3Rpb24oKXt2YXIgaT1PYmplY3QuYXNzaWdufHx3aW5kb3cualF1ZXJ5JiZqUXVlcnkuZXh0ZW5kLHA9OCxhPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZSgpfSwyNSl9O2Z1bmN0aW9uIGUoZSx0KXt0PXR8fHtidWJibGVzOiExLGNhbmNlbGFibGU6ITEsZGV0YWlsOnZvaWQgMH07dmFyIG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtyZXR1cm4gbi5pbml0Q3VzdG9tRXZlbnQoZSx0LmJ1YmJsZXMsdC5jYW5jZWxhYmxlLHQuZGV0YWlsKSxufVwiZnVuY3Rpb25cIiE9dHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCYmKGUucHJvdG90eXBlPXdpbmRvdy5FdmVudC5wcm90b3R5cGUsd2luZG93LkN1c3RvbUV2ZW50PWUpO3ZhciBvPXt0ZXh0YXJlYTohMCxpbnB1dDohMCxzZWxlY3Q6ITAsYnV0dG9uOiEwfSxjPXttb3ZlOlwibW91c2Vtb3ZlXCIsY2FuY2VsOlwibW91c2V1cCBkcmFnc3RhcnRcIixlbmQ6XCJtb3VzZXVwXCJ9LHU9e21vdmU6XCJ0b3VjaG1vdmVcIixjYW5jZWw6XCJ0b3VjaGVuZFwiLGVuZDpcInRvdWNoZW5kXCJ9LHI9L1xccysvLGQ9e2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0sdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2w/U3ltYm9sKFwiZXZlbnRzXCIpOnt9O2Z1bmN0aW9uIG0oZSl7cmV0dXJuIGVbdF18fChlW3RdPXt9KX1mdW5jdGlvbiB2KGUsdCxuLG8pe3Q9dC5zcGxpdChyKTt2YXIgaSxhPW0oZSksYz10Lmxlbmd0aDtmdW5jdGlvbiB1KGUpe24oZSxvKX1mb3IoO2MtLTspKGFbaT10W2NdXXx8KGFbaV09W10pKS5wdXNoKFtuLHVdKSxlLmFkZEV2ZW50TGlzdGVuZXIoaSx1KX1mdW5jdGlvbiBmKGUsdCxuKXt0PXQuc3BsaXQocik7dmFyIG8saSxhLGM9bShlKSx1PXQubGVuZ3RoO2lmKGMpZm9yKDt1LS07KWlmKGk9Y1tvPXRbdV1dKWZvcihhPWkubGVuZ3RoO2EtLTspaVthXVswXT09PW4mJihlLnJlbW92ZUV2ZW50TGlzdGVuZXIobyxpW2FdWzFdKSxpLnNwbGljZShhLDEpKX1mdW5jdGlvbiBnKGUsdCxuKXt2YXIgbz1uZXcgQ3VzdG9tRXZlbnQodCxkKTtuJiZpKG8sbiksZS5kaXNwYXRjaEV2ZW50KG8pfWZ1bmN0aW9uIHMoZSl7dmFyIG49ZSxvPSExLGk9ITE7ZnVuY3Rpb24gdChlKXtvPyhuKCksYSh0KSxvPSEoaT0hMCkpOmk9ITF9dGhpcy5raWNrPWZ1bmN0aW9uKGUpe289ITAsaXx8dCgpfSx0aGlzLmVuZD1mdW5jdGlvbihlKXt2YXIgdD1uO2UmJihpPyhuPW8/ZnVuY3Rpb24oKXt0KCksZSgpfTplLG89ITApOmUoKSl9fWZ1bmN0aW9uIGgoKXt9ZnVuY3Rpb24gbChlKXtlLnByZXZlbnREZWZhdWx0KCl9ZnVuY3Rpb24gWChlLHQpe3ZhciBuLG87aWYoZS5pZGVudGlmaWVkVG91Y2gpcmV0dXJuIGUuaWRlbnRpZmllZFRvdWNoKHQpO2ZvcihuPS0xLG89ZS5sZW5ndGg7KytuPG87KWlmKGVbbl0uaWRlbnRpZmllcj09PXQpcmV0dXJuIGVbbl19ZnVuY3Rpb24gWShlLHQpe3ZhciBuPVgoZS5jaGFuZ2VkVG91Y2hlcyx0LmlkZW50aWZpZXIpO2lmKG4mJihuLnBhZ2VYIT09dC5wYWdlWHx8bi5wYWdlWSE9PXQucGFnZVkpKXJldHVybiBufWZ1bmN0aW9uIG4oZSx0KXtUKGUsdCxlLHcpfWZ1bmN0aW9uIHkoZSx0KXt3KCl9ZnVuY3Rpb24gdygpe2YoZG9jdW1lbnQsYy5tb3ZlLG4pLGYoZG9jdW1lbnQsYy5jYW5jZWwseSl9ZnVuY3Rpb24gYihlKXtmKGRvY3VtZW50LHUubW92ZSxlLnRvdWNobW92ZSksZihkb2N1bWVudCx1LmNhbmNlbCxlLnRvdWNoZW5kKX1mdW5jdGlvbiBUKGUsdCxuLG8pe3ZhciBpLGEsYyx1LHIsZCxtLHYsZixzPW4ucGFnZVgtdC5wYWdlWCxsPW4ucGFnZVktdC5wYWdlWTtzKnMrbCpsPHAqcHx8KGE9dCxjPW4sdT1zLHI9bCxkPW8sbT0oaT1lKS50YXJnZXRUb3VjaGVzLHY9aS50aW1lU3RhbXAtYS50aW1lU3RhbXAsZj17YWx0S2V5OmkuYWx0S2V5LGN0cmxLZXk6aS5jdHJsS2V5LHNoaWZ0S2V5Omkuc2hpZnRLZXksc3RhcnRYOmEucGFnZVgsc3RhcnRZOmEucGFnZVksZGlzdFg6dSxkaXN0WTpyLGRlbHRhWDp1LGRlbHRhWTpyLHBhZ2VYOmMucGFnZVgscGFnZVk6Yy5wYWdlWSx2ZWxvY2l0eVg6dS92LHZlbG9jaXR5WTpyL3YsaWRlbnRpZmllcjphLmlkZW50aWZpZXIsdGFyZ2V0VG91Y2hlczptLGZpbmdlcjptP20ubGVuZ3RoOjEsZW5hYmxlTW92ZTpmdW5jdGlvbigpe3RoaXMubW92ZUVuYWJsZWQ9ITAsdGhpcy5lbmFibGVNb3ZlPWgsaS5wcmV2ZW50RGVmYXVsdCgpfX0sZyhhLnRhcmdldCxcIm1vdmVzdGFydFwiLGYpLGQoYSkpfWZ1bmN0aW9uIEUoZSx0KXt2YXIgbj10LnRpbWVyO3QudG91Y2g9ZSx0LnRpbWVTdGFtcD1lLnRpbWVTdGFtcCxuLmtpY2soKX1mdW5jdGlvbiBTKGUsdCl7dmFyIG49dC50YXJnZXQsbz10LmV2ZW50LGk9dC50aW1lcjtmKGRvY3VtZW50LGMubW92ZSxFKSxmKGRvY3VtZW50LGMuZW5kLFMpLEsobixvLGksZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZihuLFwiY2xpY2tcIixsKX0sMCl9KX1mdW5jdGlvbiBrKGUsdCl7dmFyIG4sbz10LnRhcmdldCxpPXQuZXZlbnQsYT10LnRpbWVyO1goZS5jaGFuZ2VkVG91Y2hlcyxpLmlkZW50aWZpZXIpJiYobj10LGYoZG9jdW1lbnQsdS5tb3ZlLG4uYWN0aXZlVG91Y2htb3ZlKSxmKGRvY3VtZW50LHUuZW5kLG4uYWN0aXZlVG91Y2hlbmQpLEsobyxpLGEpKX1mdW5jdGlvbiBLKGUsdCxuLG8pe24uZW5kKGZ1bmN0aW9uKCl7cmV0dXJuIGcoZSxcIm1vdmVlbmRcIix0KSxvJiZvKCl9KX1pZih2KGRvY3VtZW50LFwibW91c2Vkb3duXCIsZnVuY3Rpb24oZSl7dmFyIHQ7MSE9PSh0PWUpLndoaWNofHx0LmN0cmxLZXl8fHQuYWx0S2V5fHxvW2UudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKV18fCh2KGRvY3VtZW50LGMubW92ZSxuLGUpLHYoZG9jdW1lbnQsYy5jYW5jZWwseSxlKSl9KSx2KGRvY3VtZW50LFwidG91Y2hzdGFydFwiLGZ1bmN0aW9uKGUpe2lmKCFvW2UudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKV0pe3ZhciB0PWUuY2hhbmdlZFRvdWNoZXNbMF0sbj17dGFyZ2V0OnQudGFyZ2V0LHBhZ2VYOnQucGFnZVgscGFnZVk6dC5wYWdlWSxpZGVudGlmaWVyOnQuaWRlbnRpZmllcix0b3VjaG1vdmU6ZnVuY3Rpb24oZSx0KXshZnVuY3Rpb24oZSx0KXt2YXIgbj1ZKGUsdCk7aWYoIW4pcmV0dXJuO1QoZSx0LG4sYil9KGUsdCl9LHRvdWNoZW5kOmZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUsdCl7aWYoIVgoZS5jaGFuZ2VkVG91Y2hlcyx0LmlkZW50aWZpZXIpKXJldHVybjtiKHQpfShlLHQpfX07dihkb2N1bWVudCx1Lm1vdmUsbi50b3VjaG1vdmUsbiksdihkb2N1bWVudCx1LmNhbmNlbCxuLnRvdWNoZW5kLG4pfX0pLHYoZG9jdW1lbnQsXCJtb3Zlc3RhcnRcIixmdW5jdGlvbihlKXtpZighZS5kZWZhdWx0UHJldmVudGVkJiZlLm1vdmVFbmFibGVkKXt2YXIgdD17c3RhcnRYOmUuc3RhcnRYLHN0YXJ0WTplLnN0YXJ0WSxwYWdlWDplLnBhZ2VYLHBhZ2VZOmUucGFnZVksZGlzdFg6ZS5kaXN0WCxkaXN0WTplLmRpc3RZLGRlbHRhWDplLmRlbHRhWCxkZWx0YVk6ZS5kZWx0YVksdmVsb2NpdHlYOmUudmVsb2NpdHlYLHZlbG9jaXR5WTplLnZlbG9jaXR5WSxpZGVudGlmaWVyOmUuaWRlbnRpZmllcix0YXJnZXRUb3VjaGVzOmUudGFyZ2V0VG91Y2hlcyxmaW5nZXI6ZS5maW5nZXJ9LG49e3RhcmdldDplLnRhcmdldCxldmVudDp0LHRpbWVyOm5ldyBzKGZ1bmN0aW9uKGUpeyhmdW5jdGlvbihlLHQsbil7dmFyIG89bi1lLnRpbWVTdGFtcDtlLmRpc3RYPXQucGFnZVgtZS5zdGFydFgsZS5kaXN0WT10LnBhZ2VZLWUuc3RhcnRZLGUuZGVsdGFYPXQucGFnZVgtZS5wYWdlWCxlLmRlbHRhWT10LnBhZ2VZLWUucGFnZVksZS52ZWxvY2l0eVg9LjMqZS52ZWxvY2l0eVgrLjcqZS5kZWx0YVgvbyxlLnZlbG9jaXR5WT0uMyplLnZlbG9jaXR5WSsuNyplLmRlbHRhWS9vLGUucGFnZVg9dC5wYWdlWCxlLnBhZ2VZPXQucGFnZVl9KSh0LG4udG91Y2gsbi50aW1lU3RhbXApLGcobi50YXJnZXQsXCJtb3ZlXCIsdCl9KSx0b3VjaDp2b2lkIDAsdGltZVN0YW1wOmUudGltZVN0YW1wfTt2b2lkIDA9PT1lLmlkZW50aWZpZXI/KHYoZS50YXJnZXQsXCJjbGlja1wiLGwpLHYoZG9jdW1lbnQsYy5tb3ZlLEUsbiksdihkb2N1bWVudCxjLmVuZCxTLG4pKToobi5hY3RpdmVUb3VjaG1vdmU9ZnVuY3Rpb24oZSx0KXt2YXIgbixvLGksYSxjO249ZSxpPShvPXQpLmV2ZW50LGE9by50aW1lciwoYz1ZKG4saSkpJiYobi5wcmV2ZW50RGVmYXVsdCgpLGkudGFyZ2V0VG91Y2hlcz1uLnRhcmdldFRvdWNoZXMsby50b3VjaD1jLG8udGltZVN0YW1wPW4udGltZVN0YW1wLGEua2ljaygpKX0sbi5hY3RpdmVUb3VjaGVuZD1mdW5jdGlvbihlLHQpe2soZSx0KX0sdihkb2N1bWVudCx1Lm1vdmUsbi5hY3RpdmVUb3VjaG1vdmUsbiksdihkb2N1bWVudCx1LmVuZCxuLmFjdGl2ZVRvdWNoZW5kLG4pKX19KSx3aW5kb3cualF1ZXJ5KXt2YXIgaj1cInN0YXJ0WCBzdGFydFkgcGFnZVggcGFnZVkgZGlzdFggZGlzdFkgZGVsdGFYIGRlbHRhWSB2ZWxvY2l0eVggdmVsb2NpdHlZXCIuc3BsaXQoXCIgXCIpO2pRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmVzdGFydD17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gdih0aGlzLFwibW92ZXN0YXJ0XCIsQyksITF9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIGYodGhpcyxcIm1vdmVzdGFydFwiLEMpLCExfSxhZGQ6QX0salF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZT17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gdih0aGlzLFwibW92ZXN0YXJ0XCIsUSksITF9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIGYodGhpcyxcIm1vdmVzdGFydFwiLFEpLCExfSxhZGQ6QX0salF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZWVuZD17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gdih0aGlzLFwibW92ZXN0YXJ0XCIscSksITF9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIGYodGhpcyxcIm1vdmVzdGFydFwiLHEpLCExfSxhZGQ6QX19ZnVuY3Rpb24gQyhlKXtlLmVuYWJsZU1vdmUoKX1mdW5jdGlvbiBRKGUpe2UuZW5hYmxlTW92ZSgpfWZ1bmN0aW9uIHEoZSl7ZS5lbmFibGVNb3ZlKCl9ZnVuY3Rpb24gQShlKXt2YXIgbz1lLmhhbmRsZXI7ZS5oYW5kbGVyPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPWoubGVuZ3RoO24tLTspZVt0PWpbbl1dPWUub3JpZ2luYWxFdmVudFt0XTtvLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fSk7IiwiLypcclxuICogalF1ZXJ5IEZsZXhTbGlkZXIgdjIuNy4yXHJcbiAqIENvcHlyaWdodCAyMDEyIFdvb1RoZW1lc1xyXG4gKiBDb250cmlidXRpbmcgQXV0aG9yOiBUeWxlciBTbWl0aFxyXG4gKi8hZnVuY3Rpb24oJCl7dmFyIGU9ITA7JC5mbGV4c2xpZGVyPWZ1bmN0aW9uKHQsYSl7dmFyIG49JCh0KTt2b2lkIDA9PT1hLnJ0bCYmXCJydGxcIj09JChcImh0bWxcIikuYXR0cihcImRpclwiKSYmKGEucnRsPSEwKSxuLnZhcnM9JC5leHRlbmQoe30sJC5mbGV4c2xpZGVyLmRlZmF1bHRzLGEpO3ZhciBpPW4udmFycy5uYW1lc3BhY2Uscj13aW5kb3cubmF2aWdhdG9yJiZ3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQmJndpbmRvdy5NU0dlc3R1cmUscz0oXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8cnx8d2luZG93LkRvY3VtZW50VG91Y2gmJmRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCkmJm4udmFycy50b3VjaCxvPVwiY2xpY2sgdG91Y2hlbmQgTVNQb2ludGVyVXAga2V5dXBcIixsPVwiXCIsYyxkPVwidmVydGljYWxcIj09PW4udmFycy5kaXJlY3Rpb24sdT1uLnZhcnMucmV2ZXJzZSx2PW4udmFycy5pdGVtV2lkdGg+MCxwPVwiZmFkZVwiPT09bi52YXJzLmFuaW1hdGlvbixtPVwiXCIhPT1uLnZhcnMuYXNOYXZGb3IsZj17fTskLmRhdGEodCxcImZsZXhzbGlkZXJcIixuKSxmPXtpbml0OmZ1bmN0aW9uKCl7bi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9cGFyc2VJbnQobi52YXJzLnN0YXJ0QXQ/bi52YXJzLnN0YXJ0QXQ6MCwxMCksaXNOYU4obi5jdXJyZW50U2xpZGUpJiYobi5jdXJyZW50U2xpZGU9MCksbi5hbmltYXRpbmdUbz1uLmN1cnJlbnRTbGlkZSxuLmF0RW5kPTA9PT1uLmN1cnJlbnRTbGlkZXx8bi5jdXJyZW50U2xpZGU9PT1uLmxhc3Qsbi5jb250YWluZXJTZWxlY3Rvcj1uLnZhcnMuc2VsZWN0b3Iuc3Vic3RyKDAsbi52YXJzLnNlbGVjdG9yLnNlYXJjaChcIiBcIikpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yLG4pLG4uY29udGFpbmVyPSQobi5jb250YWluZXJTZWxlY3RvcixuKSxuLmNvdW50PW4uc2xpZGVzLmxlbmd0aCxuLnN5bmNFeGlzdHM9JChuLnZhcnMuc3luYykubGVuZ3RoPjAsXCJzbGlkZVwiPT09bi52YXJzLmFuaW1hdGlvbiYmKG4udmFycy5hbmltYXRpb249XCJzd2luZ1wiKSxuLnByb3A9ZD9cInRvcFwiOm4udmFycy5ydGw/XCJtYXJnaW5SaWdodFwiOlwibWFyZ2luTGVmdFwiLG4uYXJncz17fSxuLm1hbnVhbFBhdXNlPSExLG4uc3RvcHBlZD0hMSxuLnN0YXJ0ZWQ9ITEsbi5zdGFydFRpbWVvdXQ9bnVsbCxuLnRyYW5zaXRpb25zPSFuLnZhcnMudmlkZW8mJiFwJiZuLnZhcnMudXNlQ1NTJiZmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdD1bXCJwZXJzcGVjdGl2ZVByb3BlcnR5XCIsXCJXZWJraXRQZXJzcGVjdGl2ZVwiLFwiTW96UGVyc3BlY3RpdmVcIixcIk9QZXJzcGVjdGl2ZVwiLFwibXNQZXJzcGVjdGl2ZVwiXTtmb3IodmFyIGEgaW4gdClpZih2b2lkIDAhPT1lLnN0eWxlW3RbYV1dKXJldHVybiBuLnBmeD10W2FdLnJlcGxhY2UoXCJQZXJzcGVjdGl2ZVwiLFwiXCIpLnRvTG93ZXJDYXNlKCksbi5wcm9wPVwiLVwiK24ucGZ4K1wiLXRyYW5zZm9ybVwiLCEwO3JldHVybiExfSgpLG4uaXNGaXJlZm94PW5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiZmlyZWZveFwiKT4tMSxuLmVuc3VyZUFuaW1hdGlvbkVuZD1cIlwiLFwiXCIhPT1uLnZhcnMuY29udHJvbHNDb250YWluZXImJihuLmNvbnRyb2xzQ29udGFpbmVyPSQobi52YXJzLmNvbnRyb2xzQ29udGFpbmVyKS5sZW5ndGg+MCYmJChuLnZhcnMuY29udHJvbHNDb250YWluZXIpKSxcIlwiIT09bi52YXJzLm1hbnVhbENvbnRyb2xzJiYobi5tYW51YWxDb250cm9scz0kKG4udmFycy5tYW51YWxDb250cm9scykubGVuZ3RoPjAmJiQobi52YXJzLm1hbnVhbENvbnRyb2xzKSksXCJcIiE9PW4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYmJihuLmN1c3RvbURpcmVjdGlvbk5hdj0yPT09JChuLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2KS5sZW5ndGgmJiQobi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdikpLG4udmFycy5yYW5kb21pemUmJihuLnNsaWRlcy5zb3J0KGZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSktLjV9KSxuLmNvbnRhaW5lci5lbXB0eSgpLmFwcGVuZChuLnNsaWRlcykpLG4uZG9NYXRoKCksbi5zZXR1cChcImluaXRcIiksbi52YXJzLmNvbnRyb2xOYXYmJmYuY29udHJvbE5hdi5zZXR1cCgpLG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnNldHVwKCksbi52YXJzLmtleWJvYXJkJiYoMT09PSQobi5jb250YWluZXJTZWxlY3RvcikubGVuZ3RofHxuLnZhcnMubXVsdGlwbGVLZXlib2FyZCkmJiQoZG9jdW1lbnQpLmJpbmQoXCJrZXl1cFwiLGZ1bmN0aW9uKGUpe3ZhciB0PWUua2V5Q29kZTtpZighbi5hbmltYXRpbmcmJigzOT09PXR8fDM3PT09dCkpe3ZhciBhPW4udmFycy5ydGw/Mzc9PT10P24uZ2V0VGFyZ2V0KFwibmV4dFwiKTozOT09PXQmJm4uZ2V0VGFyZ2V0KFwicHJldlwiKTozOT09PXQ/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOjM3PT09dCYmbi5nZXRUYXJnZXQoXCJwcmV2XCIpO24uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbil9fSksbi52YXJzLm1vdXNld2hlZWwmJm4uYmluZChcIm1vdXNld2hlZWxcIixmdW5jdGlvbihlLHQsYSxpKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHI9dDwwP24uZ2V0VGFyZ2V0KFwibmV4dFwiKTpuLmdldFRhcmdldChcInByZXZcIik7bi5mbGV4QW5pbWF0ZShyLG4udmFycy5wYXVzZU9uQWN0aW9uKX0pLG4udmFycy5wYXVzZVBsYXkmJmYucGF1c2VQbGF5LnNldHVwKCksbi52YXJzLnNsaWRlc2hvdyYmbi52YXJzLnBhdXNlSW52aXNpYmxlJiZmLnBhdXNlSW52aXNpYmxlLmluaXQoKSxuLnZhcnMuc2xpZGVzaG93JiYobi52YXJzLnBhdXNlT25Ib3ZlciYmbi5ob3ZlcihmdW5jdGlvbigpe24ubWFudWFsUGxheXx8bi5tYW51YWxQYXVzZXx8bi5wYXVzZSgpfSxmdW5jdGlvbigpe24ubWFudWFsUGF1c2V8fG4ubWFudWFsUGxheXx8bi5zdG9wcGVkfHxuLnBsYXkoKX0pLG4udmFycy5wYXVzZUludmlzaWJsZSYmZi5wYXVzZUludmlzaWJsZS5pc0hpZGRlbigpfHwobi52YXJzLmluaXREZWxheT4wP24uc3RhcnRUaW1lb3V0PXNldFRpbWVvdXQobi5wbGF5LG4udmFycy5pbml0RGVsYXkpOm4ucGxheSgpKSksbSYmZi5hc05hdi5zZXR1cCgpLHMmJm4udmFycy50b3VjaCYmZi50b3VjaCgpLCghcHx8cCYmbi52YXJzLnNtb290aEhlaWdodCkmJiQod2luZG93KS5iaW5kKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIGZvY3VzXCIsZi5yZXNpemUpLG4uZmluZChcImltZ1wiKS5hdHRyKFwiZHJhZ2dhYmxlXCIsXCJmYWxzZVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi52YXJzLnN0YXJ0KG4pfSwyMDApfSxhc05hdjp7c2V0dXA6ZnVuY3Rpb24oKXtuLmFzTmF2PSEwLG4uYW5pbWF0aW5nVG89TWF0aC5mbG9vcihuLmN1cnJlbnRTbGlkZS9uLm1vdmUpLG4uY3VycmVudEl0ZW09bi5jdXJyZW50U2xpZGUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShuLmN1cnJlbnRJdGVtKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLHI/KHQuX3NsaWRlcj1uLG4uc2xpZGVzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX2dlc3R1cmU9bmV3IE1TR2VzdHVyZSxlLl9nZXN0dXJlLnRhcmdldD1lLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5jdXJyZW50VGFyZ2V0Ll9nZXN0dXJlJiZlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUuYWRkUG9pbnRlcihlLnBvaW50ZXJJZCl9LCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJNU0dlc3R1cmVUYXBcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ9JCh0aGlzKSxhPXQuaW5kZXgoKTskKG4udmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIikuYW5pbWF0aW5nfHx0Lmhhc0NsYXNzKFwiYWN0aXZlXCIpfHwobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxhP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCwhMCkpfSl9KSk6bi5zbGlkZXMub24obyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ9JCh0aGlzKSxhPXQuaW5kZXgoKSxyO3I9bi52YXJzLnJ0bD8tMSoodC5vZmZzZXQoKS5yaWdodC0kKG4pLnNjcm9sbExlZnQoKSk6dC5vZmZzZXQoKS5sZWZ0LSQobikuc2Nyb2xsTGVmdCgpLHI8PTAmJnQuaGFzQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKT9uLmZsZXhBbmltYXRlKG4uZ2V0VGFyZ2V0KFwicHJldlwiKSwhMCk6JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLmFuaW1hdGluZ3x8dC5oYXNDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpfHwobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxhP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCwhMCkpfSl9fSxjb250cm9sTmF2OntzZXR1cDpmdW5jdGlvbigpe24ubWFudWFsQ29udHJvbHM/Zi5jb250cm9sTmF2LnNldHVwTWFudWFsKCk6Zi5jb250cm9sTmF2LnNldHVwUGFnaW5nKCl9LHNldHVwUGFnaW5nOmZ1bmN0aW9uKCl7dmFyIGU9XCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdj9cImNvbnRyb2wtdGh1bWJzXCI6XCJjb250cm9sLXBhZ2luZ1wiLHQ9MSxhLHI7aWYobi5jb250cm9sTmF2U2NhZmZvbGQ9JCgnPG9sIGNsYXNzPVwiJytpK1wiY29udHJvbC1uYXYgXCIraStlKydcIj48L29sPicpLG4ucGFnaW5nQ291bnQ+MSlmb3IodmFyIHM9MDtzPG4ucGFnaW5nQ291bnQ7cysrKXtpZihyPW4uc2xpZGVzLmVxKHMpLHZvaWQgMD09PXIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpJiZyLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiLFwiXCIpLGE9JChcIjxhPjwvYT5cIikuYXR0cihcImhyZWZcIixcIiNcIikudGV4dCh0KSxcInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2JiYoYT0kKFwiPGltZy8+XCIpLmF0dHIoXCJzcmNcIixyLmF0dHIoXCJkYXRhLXRodW1iXCIpKSksXCJcIiE9PXIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpJiZhLmF0dHIoXCJhbHRcIixyLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiKSksXCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdiYmITA9PT1uLnZhcnMudGh1bWJDYXB0aW9ucyl7dmFyIGM9ci5hdHRyKFwiZGF0YS10aHVtYmNhcHRpb25cIik7aWYoXCJcIiE9PWMmJnZvaWQgMCE9PWMpe3ZhciBkPSQoXCI8c3Bhbj48L3NwYW4+XCIpLmFkZENsYXNzKGkrXCJjYXB0aW9uXCIpLnRleHQoYyk7YS5hcHBlbmQoZCl9fXZhciB1PSQoXCI8bGk+XCIpO2EuYXBwZW5kVG8odSksdS5hcHBlbmQoXCI8L2xpPlwiKSxuLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQodSksdCsrfW4uY29udHJvbHNDb250YWluZXI/JChuLmNvbnRyb2xzQ29udGFpbmVyKS5hcHBlbmQobi5jb250cm9sTmF2U2NhZmZvbGQpOm4uYXBwZW5kKG4uY29udHJvbE5hdlNjYWZmb2xkKSxmLmNvbnRyb2xOYXYuc2V0KCksZi5jb250cm9sTmF2LmFjdGl2ZSgpLG4uY29udHJvbE5hdlNjYWZmb2xkLmRlbGVnYXRlKFwiYSwgaW1nXCIsbyxmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksXCJcIj09PWx8fGw9PT1lLnR5cGUpe3ZhciB0PSQodGhpcyksYT1uLmNvbnRyb2xOYXYuaW5kZXgodCk7dC5oYXNDbGFzcyhpK1wiYWN0aXZlXCIpfHwobi5kaXJlY3Rpb249YT5uLmN1cnJlbnRTbGlkZT9cIm5leHRcIjpcInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24pKX1cIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSxzZXR1cE1hbnVhbDpmdW5jdGlvbigpe24uY29udHJvbE5hdj1uLm1hbnVhbENvbnRyb2xzLGYuY29udHJvbE5hdi5hY3RpdmUoKSxuLmNvbnRyb2xOYXYuYmluZChvLGZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxcIlwiPT09bHx8bD09PWUudHlwZSl7dmFyIHQ9JCh0aGlzKSxhPW4uY29udHJvbE5hdi5pbmRleCh0KTt0Lmhhc0NsYXNzKGkrXCJhY3RpdmVcIil8fChhPm4uY3VycmVudFNsaWRlP24uZGlyZWN0aW9uPVwibmV4dFwiOm4uZGlyZWN0aW9uPVwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbikpfVwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHNldDpmdW5jdGlvbigpe3ZhciBlPVwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXY/XCJpbWdcIjpcImFcIjtuLmNvbnRyb2xOYXY9JChcIi5cIitpK1wiY29udHJvbC1uYXYgbGkgXCIrZSxuLmNvbnRyb2xzQ29udGFpbmVyP24uY29udHJvbHNDb250YWluZXI6bil9LGFjdGl2ZTpmdW5jdGlvbigpe24uY29udHJvbE5hdi5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlXCIpLmVxKG4uYW5pbWF0aW5nVG8pLmFkZENsYXNzKGkrXCJhY3RpdmVcIil9LHVwZGF0ZTpmdW5jdGlvbihlLHQpe24ucGFnaW5nQ291bnQ+MSYmXCJhZGRcIj09PWU/bi5jb250cm9sTmF2U2NhZmZvbGQuYXBwZW5kKCQoJzxsaT48YSBocmVmPVwiI1wiPicrbi5jb3VudCtcIjwvYT48L2xpPlwiKSk6MT09PW4ucGFnaW5nQ291bnQ/bi5jb250cm9sTmF2U2NhZmZvbGQuZmluZChcImxpXCIpLnJlbW92ZSgpOm4uY29udHJvbE5hdi5lcSh0KS5jbG9zZXN0KFwibGlcIikucmVtb3ZlKCksZi5jb250cm9sTmF2LnNldCgpLG4ucGFnaW5nQ291bnQ+MSYmbi5wYWdpbmdDb3VudCE9PW4uY29udHJvbE5hdi5sZW5ndGg/bi51cGRhdGUodCxlKTpmLmNvbnRyb2xOYXYuYWN0aXZlKCl9fSxkaXJlY3Rpb25OYXY6e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9JCgnPHVsIGNsYXNzPVwiJytpKydkaXJlY3Rpb24tbmF2XCI+PGxpIGNsYXNzPVwiJytpKyduYXYtcHJldlwiPjxhIGNsYXNzPVwiJytpKydwcmV2XCIgaHJlZj1cIiNcIj4nK24udmFycy5wcmV2VGV4dCsnPC9hPjwvbGk+PGxpIGNsYXNzPVwiJytpKyduYXYtbmV4dFwiPjxhIGNsYXNzPVwiJytpKyduZXh0XCIgaHJlZj1cIiNcIj4nK24udmFycy5uZXh0VGV4dCtcIjwvYT48L2xpPjwvdWw+XCIpO24uY3VzdG9tRGlyZWN0aW9uTmF2P24uZGlyZWN0aW9uTmF2PW4uY3VzdG9tRGlyZWN0aW9uTmF2Om4uY29udHJvbHNDb250YWluZXI/KCQobi5jb250cm9sc0NvbnRhaW5lcikuYXBwZW5kKGUpLG4uZGlyZWN0aW9uTmF2PSQoXCIuXCIraStcImRpcmVjdGlvbi1uYXYgbGkgYVwiLG4uY29udHJvbHNDb250YWluZXIpKToobi5hcHBlbmQoZSksbi5kaXJlY3Rpb25OYXY9JChcIi5cIitpK1wiZGlyZWN0aW9uLW5hdiBsaSBhXCIsbikpLGYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpLG4uZGlyZWN0aW9uTmF2LmJpbmQobyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ7XCJcIiE9PWwmJmwhPT1lLnR5cGV8fCh0PSQodGhpcykuaGFzQ2xhc3MoaStcIm5leHRcIik/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKSxuLmZsZXhBbmltYXRlKHQsbi52YXJzLnBhdXNlT25BY3Rpb24pKSxcIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgZT1pK1wiZGlzYWJsZWRcIjsxPT09bi5wYWdpbmdDb3VudD9uLmRpcmVjdGlvbk5hdi5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4udmFycy5hbmltYXRpb25Mb29wP24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKTowPT09bi5hbmltYXRpbmdUbz9uLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5maWx0ZXIoXCIuXCIraStcInByZXZcIikuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTpuLmFuaW1hdGluZ1RvPT09bi5sYXN0P24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLmZpbHRlcihcIi5cIitpK1wibmV4dFwiKS5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKX19LHBhdXNlUGxheTp7c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT0kKCc8ZGl2IGNsYXNzPVwiJytpKydwYXVzZXBsYXlcIj48YSBocmVmPVwiI1wiPjwvYT48L2Rpdj4nKTtuLmNvbnRyb2xzQ29udGFpbmVyPyhuLmNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZChlKSxuLnBhdXNlUGxheT0kKFwiLlwiK2krXCJwYXVzZXBsYXkgYVwiLG4uY29udHJvbHNDb250YWluZXIpKToobi5hcHBlbmQoZSksbi5wYXVzZVBsYXk9JChcIi5cIitpK1wicGF1c2VwbGF5IGFcIixuKSksZi5wYXVzZVBsYXkudXBkYXRlKG4udmFycy5zbGlkZXNob3c/aStcInBhdXNlXCI6aStcInBsYXlcIiksbi5wYXVzZVBsYXkuYmluZChvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxcIlwiIT09bCYmbCE9PWUudHlwZXx8KCQodGhpcykuaGFzQ2xhc3MoaStcInBhdXNlXCIpPyhuLm1hbnVhbFBhdXNlPSEwLG4ubWFudWFsUGxheT0hMSxuLnBhdXNlKCkpOihuLm1hbnVhbFBhdXNlPSExLG4ubWFudWFsUGxheT0hMCxuLnBsYXkoKSkpLFwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHVwZGF0ZTpmdW5jdGlvbihlKXtcInBsYXlcIj09PWU/bi5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MoaStcInBhdXNlXCIpLmFkZENsYXNzKGkrXCJwbGF5XCIpLmh0bWwobi52YXJzLnBsYXlUZXh0KTpuLnBhdXNlUGxheS5yZW1vdmVDbGFzcyhpK1wicGxheVwiKS5hZGRDbGFzcyhpK1wicGF1c2VcIikuaHRtbChuLnZhcnMucGF1c2VUZXh0KX19LHRvdWNoOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXtlLnN0b3BQcm9wYWdhdGlvbigpLG4uYW5pbWF0aW5nP2UucHJldmVudERlZmF1bHQoKToobi5wYXVzZSgpLHQuX2dlc3R1cmUuYWRkUG9pbnRlcihlLnBvaW50ZXJJZCksdz0wLGM9ZD9uLmg6bi53LGY9TnVtYmVyKG5ldyBEYXRlKSxsPXYmJnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp2JiZ1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOnYmJm4uY3VycmVudFNsaWRlPT09bi5sYXN0P24ubGltaXQ6dj8obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uY3VycmVudFNsaWRlOnU/KG4ubGFzdC1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjKX1mdW5jdGlvbiBhKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGE9ZS50YXJnZXQuX3NsaWRlcjtpZihhKXt2YXIgbj0tZS50cmFuc2xhdGlvblgsaT0tZS50cmFuc2xhdGlvblk7aWYodys9ZD9pOm4sbT0oYS52YXJzLnJ0bD8tMToxKSp3LHg9ZD9NYXRoLmFicyh3KTxNYXRoLmFicygtbik6TWF0aC5hYnModyk8TWF0aC5hYnMoLWkpLGUuZGV0YWlsPT09ZS5NU0dFU1RVUkVfRkxBR19JTkVSVElBKXJldHVybiB2b2lkIHNldEltbWVkaWF0ZShmdW5jdGlvbigpe3QuX2dlc3R1cmUuc3RvcCgpfSk7KCF4fHxOdW1iZXIobmV3IERhdGUpLWY+NTAwKSYmKGUucHJldmVudERlZmF1bHQoKSwhcCYmYS50cmFuc2l0aW9ucyYmKGEudmFycy5hbmltYXRpb25Mb29wfHwobT13LygwPT09YS5jdXJyZW50U2xpZGUmJnc8MHx8YS5jdXJyZW50U2xpZGU9PT1hLmxhc3QmJnc+MD9NYXRoLmFicyh3KS9jKzI6MSkpLGEuc2V0UHJvcHMobCttLFwic2V0VG91Y2hcIikpKX19ZnVuY3Rpb24gaShlKXtlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PWUudGFyZ2V0Ll9zbGlkZXI7aWYodCl7aWYodC5hbmltYXRpbmdUbz09PXQuY3VycmVudFNsaWRlJiYheCYmbnVsbCE9PW0pe3ZhciBhPXU/LW06bSxuPWE+MD90LmdldFRhcmdldChcIm5leHRcIik6dC5nZXRUYXJnZXQoXCJwcmV2XCIpO3QuY2FuQWR2YW5jZShuKSYmKE51bWJlcihuZXcgRGF0ZSktZjw1NTAmJk1hdGguYWJzKGEpPjUwfHxNYXRoLmFicyhhKT5jLzIpP3QuZmxleEFuaW1hdGUobix0LnZhcnMucGF1c2VPbkFjdGlvbik6cHx8dC5mbGV4QW5pbWF0ZSh0LmN1cnJlbnRTbGlkZSx0LnZhcnMucGF1c2VPbkFjdGlvbiwhMCl9cz1udWxsLG89bnVsbCxtPW51bGwsbD1udWxsLHc9MH19dmFyIHMsbyxsLGMsbSxmLGcsaCxTLHg9ITEseT0wLGI9MCx3PTA7cj8odC5zdHlsZS5tc1RvdWNoQWN0aW9uPVwibm9uZVwiLHQuX2dlc3R1cmU9bmV3IE1TR2VzdHVyZSx0Ll9nZXN0dXJlLnRhcmdldD10LHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIixlLCExKSx0Ll9zbGlkZXI9bix0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU0dlc3R1cmVDaGFuZ2VcIixhLCExKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU0dlc3R1cmVFbmRcIixpLCExKSk6KGc9ZnVuY3Rpb24oZSl7bi5hbmltYXRpbmc/ZS5wcmV2ZW50RGVmYXVsdCgpOih3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWR8fDE9PT1lLnRvdWNoZXMubGVuZ3RoKSYmKG4ucGF1c2UoKSxjPWQ/bi5oOm4udyxmPU51bWJlcihuZXcgRGF0ZSkseT1lLnRvdWNoZXNbMF0ucGFnZVgsYj1lLnRvdWNoZXNbMF0ucGFnZVksbD12JiZ1JiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0PzA6diYmdT9uLmxpbWl0LShuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbzp2JiZuLmN1cnJlbnRTbGlkZT09PW4ubGFzdD9uLmxpbWl0OnY/KG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmN1cnJlbnRTbGlkZTp1PyhuLmxhc3Qtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYzoobi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYyxzPWQ/Yjp5LG89ZD95OmIsdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsaCwhMSksdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixTLCExKSl9LGg9ZnVuY3Rpb24oZSl7eT1lLnRvdWNoZXNbMF0ucGFnZVgsYj1lLnRvdWNoZXNbMF0ucGFnZVksbT1kP3MtYjoobi52YXJzLnJ0bD8tMToxKSoocy15KSx4PWQ/TWF0aC5hYnMobSk8TWF0aC5hYnMoeS1vKTpNYXRoLmFicyhtKTxNYXRoLmFicyhiLW8pO3ZhciB0PTUwMDsoIXh8fE51bWJlcihuZXcgRGF0ZSktZj41MDApJiYoZS5wcmV2ZW50RGVmYXVsdCgpLCFwJiZuLnRyYW5zaXRpb25zJiYobi52YXJzLmFuaW1hdGlvbkxvb3B8fChtLz0wPT09bi5jdXJyZW50U2xpZGUmJm08MHx8bi5jdXJyZW50U2xpZGU9PT1uLmxhc3QmJm0+MD9NYXRoLmFicyhtKS9jKzI6MSksbi5zZXRQcm9wcyhsK20sXCJzZXRUb3VjaFwiKSkpfSxTPWZ1bmN0aW9uKGUpe2lmKHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGgsITEpLG4uYW5pbWF0aW5nVG89PT1uLmN1cnJlbnRTbGlkZSYmIXgmJm51bGwhPT1tKXt2YXIgYT11Py1tOm0saT1hPjA/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmNhbkFkdmFuY2UoaSkmJihOdW1iZXIobmV3IERhdGUpLWY8NTUwJiZNYXRoLmFicyhhKT41MHx8TWF0aC5hYnMoYSk+Yy8yKT9uLmZsZXhBbmltYXRlKGksbi52YXJzLnBhdXNlT25BY3Rpb24pOnB8fG4uZmxleEFuaW1hdGUobi5jdXJyZW50U2xpZGUsbi52YXJzLnBhdXNlT25BY3Rpb24sITApfXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsUywhMSkscz1udWxsLG89bnVsbCxtPW51bGwsbD1udWxsfSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZywhMSkpfSxyZXNpemU6ZnVuY3Rpb24oKXshbi5hbmltYXRpbmcmJm4uaXMoXCI6dmlzaWJsZVwiKSYmKHZ8fG4uZG9NYXRoKCkscD9mLnNtb290aEhlaWdodCgpOnY/KG4uc2xpZGVzLndpZHRoKG4uY29tcHV0ZWRXKSxuLnVwZGF0ZShuLnBhZ2luZ0NvdW50KSxuLnNldFByb3BzKCkpOmQ/KG4udmlld3BvcnQuaGVpZ2h0KG4uaCksbi5zZXRQcm9wcyhuLmgsXCJzZXRUb3RhbFwiKSk6KG4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KCksbi5uZXdTbGlkZXMud2lkdGgobi5jb21wdXRlZFcpLG4uc2V0UHJvcHMobi5jb21wdXRlZFcsXCJzZXRUb3RhbFwiKSkpfSxzbW9vdGhIZWlnaHQ6ZnVuY3Rpb24oZSl7aWYoIWR8fHApe3ZhciB0PXA/bjpuLnZpZXdwb3J0O2U/dC5hbmltYXRlKHtoZWlnaHQ6bi5zbGlkZXMuZXEobi5hbmltYXRpbmdUbykuaW5uZXJIZWlnaHQoKX0sZSk6dC5pbm5lckhlaWdodChuLnNsaWRlcy5lcShuLmFuaW1hdGluZ1RvKS5pbm5lckhlaWdodCgpKX19LHN5bmM6ZnVuY3Rpb24oZSl7dmFyIHQ9JChuLnZhcnMuc3luYykuZGF0YShcImZsZXhzbGlkZXJcIiksYT1uLmFuaW1hdGluZ1RvO3N3aXRjaChlKXtjYXNlXCJhbmltYXRlXCI6dC5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwKTticmVhaztjYXNlXCJwbGF5XCI6dC5wbGF5aW5nfHx0LmFzTmF2fHx0LnBsYXkoKTticmVhaztjYXNlXCJwYXVzZVwiOnQucGF1c2UoKTticmVha319LHVuaXF1ZUlEOmZ1bmN0aW9uKGUpe3JldHVybiBlLmZpbHRlcihcIltpZF1cIikuYWRkKGUuZmluZChcIltpZF1cIikpLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0kKHRoaXMpO2UuYXR0cihcImlkXCIsZS5hdHRyKFwiaWRcIikrXCJfY2xvbmVcIil9KSxlfSxwYXVzZUludmlzaWJsZTp7dmlzUHJvcDpudWxsLGluaXQ6ZnVuY3Rpb24oKXt2YXIgZT1mLnBhdXNlSW52aXNpYmxlLmdldEhpZGRlblByb3AoKTtpZihlKXt2YXIgdD1lLnJlcGxhY2UoL1tIfGhdaWRkZW4vLFwiXCIpK1widmlzaWJpbGl0eWNoYW5nZVwiO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodCxmdW5jdGlvbigpe2YucGF1c2VJbnZpc2libGUuaXNIaWRkZW4oKT9uLnN0YXJ0VGltZW91dD9jbGVhclRpbWVvdXQobi5zdGFydFRpbWVvdXQpOm4ucGF1c2UoKTpuLnN0YXJ0ZWQ/bi5wbGF5KCk6bi52YXJzLmluaXREZWxheT4wP3NldFRpbWVvdXQobi5wbGF5LG4udmFycy5pbml0RGVsYXkpOm4ucGxheSgpfSl9fSxpc0hpZGRlbjpmdW5jdGlvbigpe3ZhciBlPWYucGF1c2VJbnZpc2libGUuZ2V0SGlkZGVuUHJvcCgpO3JldHVybiEhZSYmZG9jdW1lbnRbZV19LGdldEhpZGRlblByb3A6ZnVuY3Rpb24oKXt2YXIgZT1bXCJ3ZWJraXRcIixcIm1velwiLFwibXNcIixcIm9cIl07aWYoXCJoaWRkZW5cImluIGRvY3VtZW50KXJldHVyblwiaGlkZGVuXCI7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0KyspaWYoZVt0XStcIkhpZGRlblwiaW4gZG9jdW1lbnQpcmV0dXJuIGVbdF0rXCJIaWRkZW5cIjtyZXR1cm4gbnVsbH19LHNldFRvQ2xlYXJXYXRjaGVkRXZlbnQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoYyksYz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bD1cIlwifSwzZTMpfX0sbi5mbGV4QW5pbWF0ZT1mdW5jdGlvbihlLHQsYSxyLG8pe2lmKG4udmFycy5hbmltYXRpb25Mb29wfHxlPT09bi5jdXJyZW50U2xpZGV8fChuLmRpcmVjdGlvbj1lPm4uY3VycmVudFNsaWRlP1wibmV4dFwiOlwicHJldlwiKSxtJiYxPT09bi5wYWdpbmdDb3VudCYmKG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08ZT9cIm5leHRcIjpcInByZXZcIiksIW4uYW5pbWF0aW5nJiYobi5jYW5BZHZhbmNlKGUsbyl8fGEpJiZuLmlzKFwiOnZpc2libGVcIikpe2lmKG0mJnIpe3ZhciBsPSQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKTtpZihuLmF0RW5kPTA9PT1lfHxlPT09bi5jb3VudC0xLGwuZmxleEFuaW1hdGUoZSwhMCwhMSwhMCxvKSxuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGU/XCJuZXh0XCI6XCJwcmV2XCIsbC5kaXJlY3Rpb249bi5kaXJlY3Rpb24sTWF0aC5jZWlsKChlKzEpL24udmlzaWJsZSktMT09PW4uY3VycmVudFNsaWRlfHwwPT09ZSlyZXR1cm4gbi5jdXJyZW50SXRlbT1lLG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSwhMTtuLmN1cnJlbnRJdGVtPWUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLGU9TWF0aC5mbG9vcihlL24udmlzaWJsZSl9aWYobi5hbmltYXRpbmc9ITAsbi5hbmltYXRpbmdUbz1lLHQmJm4ucGF1c2UoKSxuLnZhcnMuYmVmb3JlKG4pLG4uc3luY0V4aXN0cyYmIW8mJmYuc3luYyhcImFuaW1hdGVcIiksbi52YXJzLmNvbnRyb2xOYXYmJmYuY29udHJvbE5hdi5hY3RpdmUoKSx2fHxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksbi5hdEVuZD0wPT09ZXx8ZT09PW4ubGFzdCxuLnZhcnMuZGlyZWN0aW9uTmF2JiZmLmRpcmVjdGlvbk5hdi51cGRhdGUoKSxlPT09bi5sYXN0JiYobi52YXJzLmVuZChuKSxuLnZhcnMuYW5pbWF0aW9uTG9vcHx8bi5wYXVzZSgpKSxwKXM/KG4uc2xpZGVzLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe29wYWNpdHk6MCx6SW5kZXg6MX0pLG4uc2xpZGVzLmVxKGUpLmNzcyh7b3BhY2l0eToxLHpJbmRleDoyfSksbi53cmFwdXAoYykpOihuLnNsaWRlcy5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6MX0pLmFuaW1hdGUoe29wYWNpdHk6MH0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcpLG4uc2xpZGVzLmVxKGUpLmNzcyh7ekluZGV4OjJ9KS5hbmltYXRlKHtvcGFjaXR5OjF9LG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nLG4ud3JhcHVwKSk7ZWxzZXt2YXIgYz1kP24uc2xpZGVzLmZpbHRlcihcIjpmaXJzdFwiKS5oZWlnaHQoKTpuLmNvbXB1dGVkVyxnLGgsUzt2PyhnPW4udmFycy5pdGVtTWFyZ2luLFM9KG4uaXRlbVcrZykqbi5tb3ZlKm4uYW5pbWF0aW5nVG8saD1TPm4ubGltaXQmJjEhPT1uLnZpc2libGU/bi5saW1pdDpTKTpoPTA9PT1uLmN1cnJlbnRTbGlkZSYmZT09PW4uY291bnQtMSYmbi52YXJzLmFuaW1hdGlvbkxvb3AmJlwibmV4dFwiIT09bi5kaXJlY3Rpb24/dT8obi5jb3VudCtuLmNsb25lT2Zmc2V0KSpjOjA6bi5jdXJyZW50U2xpZGU9PT1uLmxhc3QmJjA9PT1lJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmXCJwcmV2XCIhPT1uLmRpcmVjdGlvbj91PzA6KG4uY291bnQrMSkqYzp1PyhuLmNvdW50LTEtZStuLmNsb25lT2Zmc2V0KSpjOihlK24uY2xvbmVPZmZzZXQpKmMsbi5zZXRQcm9wcyhoLFwiXCIsbi52YXJzLmFuaW1hdGlvblNwZWVkKSxuLnRyYW5zaXRpb25zPyhuLnZhcnMuYW5pbWF0aW9uTG9vcCYmbi5hdEVuZHx8KG4uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPW4uYW5pbWF0aW5nVG8pLG4uY29udGFpbmVyLnVuYmluZChcIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKSxuLmNvbnRhaW5lci5iaW5kKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIsZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQobi5lbnN1cmVBbmltYXRpb25FbmQpLG4ud3JhcHVwKGMpfSksY2xlYXJUaW1lb3V0KG4uZW5zdXJlQW5pbWF0aW9uRW5kKSxuLmVuc3VyZUFuaW1hdGlvbkVuZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi53cmFwdXAoYyl9LG4udmFycy5hbmltYXRpb25TcGVlZCsxMDApKTpuLmNvbnRhaW5lci5hbmltYXRlKG4uYXJncyxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyxmdW5jdGlvbigpe24ud3JhcHVwKGMpfSl9bi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQobi52YXJzLmFuaW1hdGlvblNwZWVkKX19LG4ud3JhcHVwPWZ1bmN0aW9uKGUpe3B8fHZ8fCgwPT09bi5jdXJyZW50U2xpZGUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3QmJm4udmFycy5hbmltYXRpb25Mb29wP24uc2V0UHJvcHMoZSxcImp1bXBFbmRcIik6bi5jdXJyZW50U2xpZGU9PT1uLmxhc3QmJjA9PT1uLmFuaW1hdGluZ1RvJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmbi5zZXRQcm9wcyhlLFwianVtcFN0YXJ0XCIpKSxuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1uLmFuaW1hdGluZ1RvLG4udmFycy5hZnRlcihuKX0sbi5hbmltYXRlU2xpZGVzPWZ1bmN0aW9uKCl7IW4uYW5pbWF0aW5nJiZlJiZuLmZsZXhBbmltYXRlKG4uZ2V0VGFyZ2V0KFwibmV4dFwiKSl9LG4ucGF1c2U9ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKG4uYW5pbWF0ZWRTbGlkZXMpLG4uYW5pbWF0ZWRTbGlkZXM9bnVsbCxuLnBsYXlpbmc9ITEsbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkudXBkYXRlKFwicGxheVwiKSxuLnN5bmNFeGlzdHMmJmYuc3luYyhcInBhdXNlXCIpfSxuLnBsYXk9ZnVuY3Rpb24oKXtuLnBsYXlpbmcmJmNsZWFySW50ZXJ2YWwobi5hbmltYXRlZFNsaWRlcyksbi5hbmltYXRlZFNsaWRlcz1uLmFuaW1hdGVkU2xpZGVzfHxzZXRJbnRlcnZhbChuLmFuaW1hdGVTbGlkZXMsbi52YXJzLnNsaWRlc2hvd1NwZWVkKSxuLnN0YXJ0ZWQ9bi5wbGF5aW5nPSEwLG4udmFycy5wYXVzZVBsYXkmJmYucGF1c2VQbGF5LnVwZGF0ZShcInBhdXNlXCIpLG4uc3luY0V4aXN0cyYmZi5zeW5jKFwicGxheVwiKX0sbi5zdG9wPWZ1bmN0aW9uKCl7bi5wYXVzZSgpLG4uc3RvcHBlZD0hMH0sbi5jYW5BZHZhbmNlPWZ1bmN0aW9uKGUsdCl7dmFyIGE9bT9uLnBhZ2luZ0NvdW50LTE6bi5sYXN0O3JldHVybiEhdHx8KCEoIW18fG4uY3VycmVudEl0ZW0hPT1uLmNvdW50LTF8fDAhPT1lfHxcInByZXZcIiE9PW4uZGlyZWN0aW9uKXx8KCFtfHwwIT09bi5jdXJyZW50SXRlbXx8ZSE9PW4ucGFnaW5nQ291bnQtMXx8XCJuZXh0XCI9PT1uLmRpcmVjdGlvbikmJighKGU9PT1uLmN1cnJlbnRTbGlkZSYmIW0pJiYoISFuLnZhcnMuYW5pbWF0aW9uTG9vcHx8KCFuLmF0RW5kfHwwIT09bi5jdXJyZW50U2xpZGV8fGUhPT1hfHxcIm5leHRcIj09PW4uZGlyZWN0aW9uKSYmKCFuLmF0RW5kfHxuLmN1cnJlbnRTbGlkZSE9PWF8fDAhPT1lfHxcIm5leHRcIiE9PW4uZGlyZWN0aW9uKSkpKX0sbi5nZXRUYXJnZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG4uZGlyZWN0aW9uPWUsXCJuZXh0XCI9PT1lP24uY3VycmVudFNsaWRlPT09bi5sYXN0PzA6bi5jdXJyZW50U2xpZGUrMTowPT09bi5jdXJyZW50U2xpZGU/bi5sYXN0Om4uY3VycmVudFNsaWRlLTF9LG4uc2V0UHJvcHM9ZnVuY3Rpb24oZSx0LGEpe3ZhciBpPWZ1bmN0aW9uKCl7dmFyIGE9ZXx8KG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvO3JldHVybiBmdW5jdGlvbigpe2lmKHYpcmV0dXJuXCJzZXRUb3VjaFwiPT09dD9lOnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/bi5saW1pdDphO3N3aXRjaCh0KXtjYXNlXCJzZXRUb3RhbFwiOnJldHVybiB1PyhuLmNvdW50LTEtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqZToobi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqZTtjYXNlXCJzZXRUb3VjaFwiOnJldHVybiBlO2Nhc2VcImp1bXBFbmRcIjpyZXR1cm4gdT9lOm4uY291bnQqZTtjYXNlXCJqdW1wU3RhcnRcIjpyZXR1cm4gdT9uLmNvdW50KmU6ZTtkZWZhdWx0OnJldHVybiBlfX0oKSoobi52YXJzLnJ0bD8xOi0xKStcInB4XCJ9KCk7bi50cmFuc2l0aW9ucyYmKGk9bi5pc0ZpcmVmb3g/ZD9cInRyYW5zbGF0ZTNkKDAsXCIraStcIiwwKVwiOlwidHJhbnNsYXRlM2QoXCIrcGFyc2VJbnQoaSkrXCJweCwwLDApXCI6ZD9cInRyYW5zbGF0ZTNkKDAsXCIraStcIiwwKVwiOlwidHJhbnNsYXRlM2QoXCIrKG4udmFycy5ydGw/LTE6MSkqcGFyc2VJbnQoaSkrXCJweCwwLDApXCIsYT12b2lkIDAhPT1hP2EvMWUzK1wic1wiOlwiMHNcIixuLmNvbnRhaW5lci5jc3MoXCItXCIrbi5wZngrXCItdHJhbnNpdGlvbi1kdXJhdGlvblwiLGEpLG4uY29udGFpbmVyLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIixhKSksbi5hcmdzW24ucHJvcF09aSwobi50cmFuc2l0aW9uc3x8dm9pZCAwPT09YSkmJm4uY29udGFpbmVyLmNzcyhuLmFyZ3MpLG4uY29udGFpbmVyLmNzcyhcInRyYW5zZm9ybVwiLGkpfSxuLnNldHVwPWZ1bmN0aW9uKGUpe2lmKHApbi52YXJzLnJ0bD9uLnNsaWRlcy5jc3Moe3dpZHRoOlwiMTAwJVwiLGZsb2F0OlwicmlnaHRcIixtYXJnaW5MZWZ0OlwiLTEwMCVcIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KTpuLnNsaWRlcy5jc3Moe3dpZHRoOlwiMTAwJVwiLGZsb2F0OlwibGVmdFwiLG1hcmdpblJpZ2h0OlwiLTEwMCVcIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KSxcImluaXRcIj09PWUmJihzP24uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHdlYmtpdFRyYW5zaXRpb246XCJvcGFjaXR5IFwiK24udmFycy5hbmltYXRpb25TcGVlZC8xZTMrXCJzIGVhc2VcIix6SW5kZXg6MX0pLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6Mn0pOjA9PW4udmFycy5mYWRlRmlyc3RTbGlkZT9uLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix6SW5kZXg6MX0pLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoyfSkuY3NzKHtvcGFjaXR5OjF9KTpuLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix6SW5kZXg6MX0pLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoyfSkuYW5pbWF0ZSh7b3BhY2l0eToxfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZykpLG4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KCk7ZWxzZXt2YXIgdCxhO1wiaW5pdFwiPT09ZSYmKG4udmlld3BvcnQ9JCgnPGRpdiBjbGFzcz1cIicraSsndmlld3BvcnRcIj48L2Rpdj4nKS5jc3Moe292ZXJmbG93OlwiaGlkZGVuXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSkuYXBwZW5kVG8obikuYXBwZW5kKG4uY29udGFpbmVyKSxuLmNsb25lQ291bnQ9MCxuLmNsb25lT2Zmc2V0PTAsdSYmKGE9JC5tYWtlQXJyYXkobi5zbGlkZXMpLnJldmVyc2UoKSxuLnNsaWRlcz0kKGEpLG4uY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKG4uc2xpZGVzKSkpLG4udmFycy5hbmltYXRpb25Mb29wJiYhdiYmKG4uY2xvbmVDb3VudD0yLG4uY2xvbmVPZmZzZXQ9MSxcImluaXRcIiE9PWUmJm4uY29udGFpbmVyLmZpbmQoXCIuY2xvbmVcIikucmVtb3ZlKCksbi5jb250YWluZXIuYXBwZW5kKGYudW5pcXVlSUQobi5zbGlkZXMuZmlyc3QoKS5jbG9uZSgpLmFkZENsYXNzKFwiY2xvbmVcIikpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSkucHJlcGVuZChmLnVuaXF1ZUlEKG4uc2xpZGVzLmxhc3QoKS5jbG9uZSgpLmFkZENsYXNzKFwiY2xvbmVcIikpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSkpLG4ubmV3U2xpZGVzPSQobi52YXJzLnNlbGVjdG9yLG4pLHQ9dT9uLmNvdW50LTEtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldDpuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0LGQmJiF2PyhuLmNvbnRhaW5lci5oZWlnaHQoMjAwKihuLmNvdW50K24uY2xvbmVDb3VudCkrXCIlXCIpLmNzcyhcInBvc2l0aW9uXCIsXCJhYnNvbHV0ZVwiKS53aWR0aChcIjEwMCVcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24ubmV3U2xpZGVzLmNzcyh7ZGlzcGxheTpcImJsb2NrXCJ9KSxuLmRvTWF0aCgpLG4udmlld3BvcnQuaGVpZ2h0KG4uaCksbi5zZXRQcm9wcyh0Km4uaCxcImluaXRcIil9LFwiaW5pdFwiPT09ZT8xMDA6MCkpOihuLmNvbnRhaW5lci53aWR0aCgyMDAqKG4uY291bnQrbi5jbG9uZUNvdW50KStcIiVcIiksbi5zZXRQcm9wcyh0Km4uY29tcHV0ZWRXLFwiaW5pdFwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5kb01hdGgoKSxuLnZhcnMucnRsJiZuLmlzRmlyZWZveD9uLm5ld1NsaWRlcy5jc3Moe3dpZHRoOm4uY29tcHV0ZWRXLG1hcmdpblJpZ2h0Om4uY29tcHV0ZWRNLGZsb2F0OlwicmlnaHRcIixkaXNwbGF5OlwiYmxvY2tcIn0pOm4ubmV3U2xpZGVzLmNzcyh7d2lkdGg6bi5jb21wdXRlZFcsbWFyZ2luUmlnaHQ6bi5jb21wdXRlZE0sZmxvYXQ6XCJsZWZ0XCIsZGlzcGxheTpcImJsb2NrXCJ9KSxuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpfSxcImluaXRcIj09PWU/MTAwOjApKX12fHxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKG4uY3VycmVudFNsaWRlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLG4udmFycy5pbml0KG4pfSxuLmRvTWF0aD1mdW5jdGlvbigpe3ZhciBlPW4uc2xpZGVzLmZpcnN0KCksdD1uLnZhcnMuaXRlbU1hcmdpbixhPW4udmFycy5taW5JdGVtcyxpPW4udmFycy5tYXhJdGVtcztuLnc9dm9pZCAwPT09bi52aWV3cG9ydD9uLndpZHRoKCk6bi52aWV3cG9ydC53aWR0aCgpLG4uaXNGaXJlZm94JiYobi53PW4ud2lkdGgoKSksbi5oPWUuaGVpZ2h0KCksbi5ib3hQYWRkaW5nPWUub3V0ZXJXaWR0aCgpLWUud2lkdGgoKSx2PyhuLml0ZW1UPW4udmFycy5pdGVtV2lkdGgrdCxuLml0ZW1NPXQsbi5taW5XPWE/YSpuLml0ZW1UOm4udyxuLm1heFc9aT9pKm4uaXRlbVQtdDpuLncsbi5pdGVtVz1uLm1pblc+bi53PyhuLnctdCooYS0xKSkvYTpuLm1heFc8bi53PyhuLnctdCooaS0xKSkvaTpuLnZhcnMuaXRlbVdpZHRoPm4udz9uLnc6bi52YXJzLml0ZW1XaWR0aCxuLnZpc2libGU9TWF0aC5mbG9vcihuLncvbi5pdGVtVyksbi5tb3ZlPW4udmFycy5tb3ZlPjAmJm4udmFycy5tb3ZlPG4udmlzaWJsZT9uLnZhcnMubW92ZTpuLnZpc2libGUsbi5wYWdpbmdDb3VudD1NYXRoLmNlaWwoKG4uY291bnQtbi52aXNpYmxlKS9uLm1vdmUrMSksbi5sYXN0PW4ucGFnaW5nQ291bnQtMSxuLmxpbWl0PTE9PT1uLnBhZ2luZ0NvdW50PzA6bi52YXJzLml0ZW1XaWR0aD5uLnc/bi5pdGVtVyoobi5jb3VudC0xKSt0KihuLmNvdW50LTEpOihuLml0ZW1XK3QpKm4uY291bnQtbi53LXQpOihuLml0ZW1XPW4udyxuLml0ZW1NPXQsbi5wYWdpbmdDb3VudD1uLmNvdW50LG4ubGFzdD1uLmNvdW50LTEpLG4uY29tcHV0ZWRXPW4uaXRlbVctbi5ib3hQYWRkaW5nLG4uY29tcHV0ZWRNPW4uaXRlbU19LG4udXBkYXRlPWZ1bmN0aW9uKGUsdCl7bi5kb01hdGgoKSx2fHwoZTxuLmN1cnJlbnRTbGlkZT9uLmN1cnJlbnRTbGlkZSs9MTplPD1uLmN1cnJlbnRTbGlkZSYmMCE9PWUmJihuLmN1cnJlbnRTbGlkZS09MSksbi5hbmltYXRpbmdUbz1uLmN1cnJlbnRTbGlkZSksbi52YXJzLmNvbnRyb2xOYXYmJiFuLm1hbnVhbENvbnRyb2xzJiYoXCJhZGRcIj09PXQmJiF2fHxuLnBhZ2luZ0NvdW50Pm4uY29udHJvbE5hdi5sZW5ndGg/Zi5jb250cm9sTmF2LnVwZGF0ZShcImFkZFwiKTooXCJyZW1vdmVcIj09PXQmJiF2fHxuLnBhZ2luZ0NvdW50PG4uY29udHJvbE5hdi5sZW5ndGgpJiYodiYmbi5jdXJyZW50U2xpZGU+bi5sYXN0JiYobi5jdXJyZW50U2xpZGUtPTEsbi5hbmltYXRpbmdUby09MSksZi5jb250cm9sTmF2LnVwZGF0ZShcInJlbW92ZVwiLG4ubGFzdCkpKSxuLnZhcnMuZGlyZWN0aW9uTmF2JiZmLmRpcmVjdGlvbk5hdi51cGRhdGUoKX0sbi5hZGRTbGlkZT1mdW5jdGlvbihlLHQpe3ZhciBhPSQoZSk7bi5jb3VudCs9MSxuLmxhc3Q9bi5jb3VudC0xLGQmJnU/dm9pZCAwIT09dD9uLnNsaWRlcy5lcShuLmNvdW50LXQpLmFmdGVyKGEpOm4uY29udGFpbmVyLnByZXBlbmQoYSk6dm9pZCAwIT09dD9uLnNsaWRlcy5lcSh0KS5iZWZvcmUoYSk6bi5jb250YWluZXIuYXBwZW5kKGEpLG4udXBkYXRlKHQsXCJhZGRcIiksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IrXCI6bm90KC5jbG9uZSlcIixuKSxuLnNldHVwKCksbi52YXJzLmFkZGVkKG4pfSxuLnJlbW92ZVNsaWRlPWZ1bmN0aW9uKGUpe3ZhciB0PWlzTmFOKGUpP24uc2xpZGVzLmluZGV4KCQoZSkpOmU7bi5jb3VudC09MSxuLmxhc3Q9bi5jb3VudC0xLGlzTmFOKGUpPyQoZSxuLnNsaWRlcykucmVtb3ZlKCk6ZCYmdT9uLnNsaWRlcy5lcShuLmxhc3QpLnJlbW92ZSgpOm4uc2xpZGVzLmVxKGUpLnJlbW92ZSgpLG4uZG9NYXRoKCksbi51cGRhdGUodCxcInJlbW92ZVwiKSxuLnNsaWRlcz0kKG4udmFycy5zZWxlY3RvcitcIjpub3QoLmNsb25lKVwiLG4pLG4uc2V0dXAoKSxuLnZhcnMucmVtb3ZlZChuKX0sZi5pbml0KCl9LCQod2luZG93KS5ibHVyKGZ1bmN0aW9uKHQpe2U9ITF9KS5mb2N1cyhmdW5jdGlvbih0KXtlPSEwfSksJC5mbGV4c2xpZGVyLmRlZmF1bHRzPXtuYW1lc3BhY2U6XCJmbGV4LVwiLHNlbGVjdG9yOlwiLnNsaWRlcyA+IGxpXCIsYW5pbWF0aW9uOlwiZmFkZVwiLGVhc2luZzpcInN3aW5nXCIsZGlyZWN0aW9uOlwiaG9yaXpvbnRhbFwiLHJldmVyc2U6ITEsYW5pbWF0aW9uTG9vcDohMCxzbW9vdGhIZWlnaHQ6ITEsc3RhcnRBdDowLHNsaWRlc2hvdzohMCxzbGlkZXNob3dTcGVlZDo3ZTMsYW5pbWF0aW9uU3BlZWQ6NjAwLGluaXREZWxheTowLHJhbmRvbWl6ZTohMSxmYWRlRmlyc3RTbGlkZTohMCx0aHVtYkNhcHRpb25zOiExLHBhdXNlT25BY3Rpb246ITAscGF1c2VPbkhvdmVyOiExLHBhdXNlSW52aXNpYmxlOiEwLHVzZUNTUzohMCx0b3VjaDohMCx2aWRlbzohMSxjb250cm9sTmF2OiEwLGRpcmVjdGlvbk5hdjohMCxwcmV2VGV4dDpcIlByZXZpb3VzXCIsbmV4dFRleHQ6XCJOZXh0XCIsa2V5Ym9hcmQ6ITAsbXVsdGlwbGVLZXlib2FyZDohMSxtb3VzZXdoZWVsOiExLHBhdXNlUGxheTohMSxwYXVzZVRleHQ6XCJQYXVzZVwiLHBsYXlUZXh0OlwiUGxheVwiLGNvbnRyb2xzQ29udGFpbmVyOlwiXCIsbWFudWFsQ29udHJvbHM6XCJcIixjdXN0b21EaXJlY3Rpb25OYXY6XCJcIixzeW5jOlwiXCIsYXNOYXZGb3I6XCJcIixpdGVtV2lkdGg6MCxpdGVtTWFyZ2luOjAsbWluSXRlbXM6MSxtYXhJdGVtczowLG1vdmU6MCxhbGxvd09uZVNsaWRlOiEwLGlzRmlyZWZveDohMSxzdGFydDpmdW5jdGlvbigpe30sYmVmb3JlOmZ1bmN0aW9uKCl7fSxhZnRlcjpmdW5jdGlvbigpe30sZW5kOmZ1bmN0aW9uKCl7fSxhZGRlZDpmdW5jdGlvbigpe30scmVtb3ZlZDpmdW5jdGlvbigpe30saW5pdDpmdW5jdGlvbigpe30scnRsOiExfSwkLmZuLmZsZXhzbGlkZXI9ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSYmKGU9e30pLFwib2JqZWN0XCI9PXR5cGVvZiBlKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD0kKHRoaXMpLGE9ZS5zZWxlY3Rvcj9lLnNlbGVjdG9yOlwiLnNsaWRlcyA+IGxpXCIsbj10LmZpbmQoYSk7MT09PW4ubGVuZ3RoJiYhMT09PWUuYWxsb3dPbmVTbGlkZXx8MD09PW4ubGVuZ3RoPyhuLmZhZGVJbig0MDApLGUuc3RhcnQmJmUuc3RhcnQodCkpOnZvaWQgMD09PXQuZGF0YShcImZsZXhzbGlkZXJcIikmJm5ldyAkLmZsZXhzbGlkZXIodGhpcyxlKX0pO3ZhciB0PSQodGhpcykuZGF0YShcImZsZXhzbGlkZXJcIik7c3dpdGNoKGUpe2Nhc2VcInBsYXlcIjp0LnBsYXkoKTticmVhaztjYXNlXCJwYXVzZVwiOnQucGF1c2UoKTticmVhaztjYXNlXCJzdG9wXCI6dC5zdG9wKCk7YnJlYWs7Y2FzZVwibmV4dFwiOnQuZmxleEFuaW1hdGUodC5nZXRUYXJnZXQoXCJuZXh0XCIpLCEwKTticmVhaztjYXNlXCJwcmV2XCI6Y2FzZVwicHJldmlvdXNcIjp0LmZsZXhBbmltYXRlKHQuZ2V0VGFyZ2V0KFwicHJldlwiKSwhMCk7YnJlYWs7ZGVmYXVsdDpcIm51bWJlclwiPT10eXBlb2YgZSYmdC5mbGV4QW5pbWF0ZShlLCEwKX19fShqUXVlcnkpOyIsIiFmdW5jdGlvbihnKXtnLmZuLnR3ZW50eXR3ZW50eT1mdW5jdGlvbihtKXttPWcuZXh0ZW5kKHtkZWZhdWx0X29mZnNldF9wY3Q6LjUsb3JpZW50YXRpb246XCJob3Jpem9udGFsXCIsYmVmb3JlX2xhYmVsOlwiQmVmb3JlXCIsYWZ0ZXJfbGFiZWw6XCJBZnRlclwiLG5vX292ZXJsYXk6ITEsbW92ZV9zbGlkZXJfb25faG92ZXI6ITEsbW92ZV93aXRoX2hhbmRsZV9vbmx5OiEwLGNsaWNrX3RvX21vdmU6ITF9LG0pO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1tLmRlZmF1bHRfb2Zmc2V0X3BjdCxzPWcodGhpcykscj1tLm9yaWVudGF0aW9uLHQ9XCJ2ZXJ0aWNhbFwiPT09cj9cImRvd25cIjpcImxlZnRcIixuPVwidmVydGljYWxcIj09PXI/XCJ1cFwiOlwicmlnaHRcIjtpZihzLndyYXAoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktd3JhcHBlciB0d2VudHl0d2VudHktXCIrcitcIic+PC9kaXY+XCIpLCFtLm5vX292ZXJsYXkpe3MuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LW92ZXJsYXknPjwvZGl2PlwiKTt2YXIgYT1zLmZpbmQoXCIudHdlbnR5dHdlbnR5LW92ZXJsYXlcIik7YS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktYmVmb3JlLWxhYmVsJyBkYXRhLWNvbnRlbnQ9J1wiK20uYmVmb3JlX2xhYmVsK1wiJz48L2Rpdj5cIiksYS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktYWZ0ZXItbGFiZWwnIGRhdGEtY29udGVudD0nXCIrbS5hZnRlcl9sYWJlbCtcIic+PC9kaXY+XCIpfXZhciBjPXMuZmluZChcImltZzpmaXJzdFwiKSxsPXMuZmluZChcImltZzpsYXN0XCIpO3MuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWhhbmRsZSc+PC9kaXY+XCIpO3ZhciBkPXMuZmluZChcIi50d2VudHl0d2VudHktaGFuZGxlXCIpO2QuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J3R3ZW50eXR3ZW50eS1cIit0K1wiLWFycm93Jz48L3NwYW4+XCIpLGQuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J3R3ZW50eXR3ZW50eS1cIituK1wiLWFycm93Jz48L3NwYW4+XCIpLHMuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktY29udGFpbmVyXCIpLGMuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktYmVmb3JlXCIpLGwuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktYWZ0ZXJcIik7ZnVuY3Rpb24gaSh0KXt2YXIgZSxuLGEsaSxvPShlPXQsbj1jLndpZHRoKCksYT1jLmhlaWdodCgpLHt3Om4rXCJweFwiLGg6YStcInB4XCIsY3c6ZSpuK1wicHhcIixjaDplKmErXCJweFwifSk7ZC5jc3MoXCJ2ZXJ0aWNhbFwiPT09cj9cInRvcFwiOlwibGVmdFwiLFwidmVydGljYWxcIj09PXI/by5jaDpvLmN3KSxpPW8sXCJ2ZXJ0aWNhbFwiPT09cj8oYy5jc3MoXCJjbGlwXCIsXCJyZWN0KDAsXCIraS53K1wiLFwiK2kuY2grXCIsMClcIiksbC5jc3MoXCJjbGlwXCIsXCJyZWN0KFwiK2kuY2grXCIsXCIraS53K1wiLFwiK2kuaCtcIiwwKVwiKSk6KGMuY3NzKFwiY2xpcFwiLFwicmVjdCgwLFwiK2kuY3crXCIsXCIraS5oK1wiLDApXCIpLGwuY3NzKFwiY2xpcFwiLFwicmVjdCgwLFwiK2kudytcIixcIitpLmgrXCIsXCIraS5jdytcIilcIikpLHMuY3NzKFwiaGVpZ2h0XCIsaS5oKX1mdW5jdGlvbiBvKHQsZSl7dmFyIG4sYSxpO3JldHVybiBuPVwidmVydGljYWxcIj09PXI/KGUteSkvdToodC1wKS9oLGE9MCxpPTEsTWF0aC5tYXgoYSxNYXRoLm1pbihpLG4pKX1nKHdpbmRvdykub24oXCJyZXNpemUudHdlbnR5dHdlbnR5XCIsZnVuY3Rpb24odCl7aShlKX0pO2Z1bmN0aW9uIHcodCl7KHQuZGlzdFg+dC5kaXN0WSYmdC5kaXN0WDwtdC5kaXN0WXx8dC5kaXN0WDx0LmRpc3RZJiZ0LmRpc3RYPi10LmRpc3RZKSYmXCJ2ZXJ0aWNhbFwiIT09cj90LnByZXZlbnREZWZhdWx0KCk6KHQuZGlzdFg8dC5kaXN0WSYmdC5kaXN0WDwtdC5kaXN0WXx8dC5kaXN0WD50LmRpc3RZJiZ0LmRpc3RYPi10LmRpc3RZKSYmXCJ2ZXJ0aWNhbFwiPT09ciYmdC5wcmV2ZW50RGVmYXVsdCgpLHMuYWRkQ2xhc3MoXCJhY3RpdmVcIikscD1zLm9mZnNldCgpLmxlZnQseT1zLm9mZnNldCgpLnRvcCxoPWMud2lkdGgoKSx1PWMuaGVpZ2h0KCl9ZnVuY3Rpb24gZih0KXtzLmhhc0NsYXNzKFwiYWN0aXZlXCIpJiYoZT1vKHQucGFnZVgsdC5wYWdlWSksaShlKSl9ZnVuY3Rpb24gdigpe3MucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9dmFyIHA9MCx5PTAsaD0wLHU9MCxfPW0ubW92ZV93aXRoX2hhbmRsZV9vbmx5P2Q6cztfLm9uKFwibW92ZXN0YXJ0XCIsdyksXy5vbihcIm1vdmVcIixmKSxfLm9uKFwibW92ZWVuZFwiLHYpLG0ubW92ZV9zbGlkZXJfb25faG92ZXImJihzLm9uKFwibW91c2VlbnRlclwiLHcpLHMub24oXCJtb3VzZW1vdmVcIixmKSxzLm9uKFwibW91c2VsZWF2ZVwiLHYpKSxkLm9uKFwidG91Y2htb3ZlXCIsZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpfSkscy5maW5kKFwiaW1nXCIpLm9uKFwibW91c2Vkb3duXCIsZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpfSksbS5jbGlja190b19tb3ZlJiZzLm9uKFwiY2xpY2tcIixmdW5jdGlvbih0KXtwPXMub2Zmc2V0KCkubGVmdCx5PXMub2Zmc2V0KCkudG9wLGg9Yy53aWR0aCgpLHU9Yy5oZWlnaHQoKSxlPW8odC5wYWdlWCx0LnBhZ2VZKSxpKGUpfSksZyh3aW5kb3cpLnRyaWdnZXIoXCJyZXNpemUudHdlbnR5dHdlbnR5XCIpfSl9fShqUXVlcnkpOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjbWVudS1vcGVuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI21lbnUtb3BlbiBzcGFuJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAkKCcubmF2Jykuc2xpZGVUb2dnbGUoJ3Nsb3cnKTsgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wcm9kdWN0cyBzdWIgbWVudVxyXG4gICAgJCgnLnByb2R1Y3RzLW1lbnUtbGluaz5hJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmRvd25sb2FkcycpLnJlbW92ZUNsYXNzKCdzdWItbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzJykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgIH0pOyAgXHJcblxyXG4gICAgLy9kb3dubG9hZHMgc3ViIG1lbnVcclxuICAgICQoJy5kb3dubG9hZC1tZW51LWxpbmsnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcucHJvZHVjdHMnKS5yZW1vdmVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICQoJy5kb3dubG9hZHMnKS50b2dnbGVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jaGFuZ2UgcHJvZHVjdCBtZW51IGxpbmsgb24gbW9iaWxlXHJcblxyXG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICBpZih3IDwgMTIwMCkge1xyXG4gICAgICAkKCcucHJvZHVjdHMtbWVudS1saW5rPmEnKS5hdHRyKCdocmVmJywgJy9wcm9kdWN0cycpO1xyXG4gICAgICAkKCcuZG93bmxvYWQtbWVudS1saW5rPmEnKS5hdHRyKCdocmVmJywgJy9kb3dubG9hZHMnKTtcclxuICAgIH0gXHJcblxyXG4gIC8vY29sbGFwc2libGUgbWVudXMgZnVuY3Rpb25cclxuICBmdW5jdGlvbiBzZXR1cF9jb2xsYXBzaWJsZV9zdWJtZW51cygpIHtcclxuICAgIHZhciAkbWVudSA9ICQoJyNtb2JpbGVfbWVudScpLFxyXG4gICAgICB0b3BfbGV2ZWxfbGluayA9ICcjbW9iaWxlX21lbnUgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhJztcclxuICAgICAgY29uc29sZS5sb2coJG1lbnUpO1xyXG4gICAgJG1lbnUuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykub2ZmKCdjbGljaycpO1xyXG4gICAgICAgXHJcbiAgICAgIGlmICggJCh0aGlzKS5pcyh0b3BfbGV2ZWxfbGluaykgKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdocmVmJywgJyMnKTtcclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgIGlmICggISAkKHRoaXMpLnNpYmxpbmdzKCcuc3ViLW1lbnUnKS5sZW5ndGggKSB7XHJcbiAgICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAgXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXR1cF9jb2xsYXBzaWJsZV9zdWJtZW51cygpO1xyXG4gICAgfSwgNzAwKTtcclxuICB9KTtcclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgICQoJy5uZXdzLXNsaWRlcicpLmZsZXhzbGlkZXIoe1xyXG4gICAgICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXHJcbiAgICAgICAgc2xpZGVzaG93U3BlZWQ6IDcwMDAsXHJcbiAgICAgICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCxcclxuICAgICAgICBhbmltYXRpb25Mb29wOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25BY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIC8vY29udHJvbE5hdjogdHJ1ZSwgIFxyXG4gICAgICAgIHJ0bDogdHJ1ZSxcclxuICAgICAgICBjdXN0b21EaXJlY3Rpb25OYXY6ICQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKVxyXG4gICAgfSk7XHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcucHJvZHVjdC1zbGlkZXIsIC5zaW5nbGUtcHJvZHVjdF9fc2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBcImZhZGVcIixcclxuICAgICAgICAvL3NsaWRlc2hvd1NwZWVkOiA3MDAwLFxyXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA2MDAsXHJcbiAgICAgICAgYW5pbWF0aW9uTG9vcDogZmFsc2UsXHJcbiAgICAgICAgcGF1c2VPbkFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgY29udHJvbE5hdjogdHJ1ZSxcclxuICAgICAgICBydGw6IHRydWUsXHJcbiAgICAgICAgY3VzdG9tRGlyZWN0aW9uTmF2OiAkKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIilcclxuICAgIH0pO1xyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5iZWZvcmUnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLmJlZm9yZScpLmZhZGVPdXQoMTUwMCk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuaWYoJCgnLmltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGgpIHtcclxuXHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHQgICQoXCIjaW1hZ2VzX3RvX2NvbXBhcmVcIikudHdlbnR5dHdlbnR5KCk7XHJcblx0fSk7XHJcbn0iLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICQoJy5mbGV4c2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICBhbmltYXRpb246IFwiZmFkZVwiLFxyXG4gICAgc2xpZGVzaG93U3BlZWQ6IDcwMDAsXHJcbiAgICBhbmltYXRpb25TcGVlZDogNjAwLCAgXHJcbiAgICBhbmltYXRpb25Mb29wOiB0cnVlLFxyXG5cdGNvbnRyb2xOYXY6IHRydWUsICBcclxuICAgIHJ0bDogdHJ1ZSxcclxuICB9KTtcclxufSk7IiwiLy9hZGQgc21vb3RoIHNjcm9sbCB0byBhbGwgbGlua3NcclxudmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gIC8vIEFkZCBzbW9vdGggc2Nyb2xsaW5nIHRvIGFsbCBsaW5rc1xyXG4gICQoXCJhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIHRoaXMuaGFzaCBoYXMgYSB2YWx1ZSBiZWZvcmUgb3ZlcnJpZGluZyBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICBpZiAodGhpcy5oYXNoICE9PSBcIlwiKSB7XHJcbiAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIC8vIFN0b3JlIGhhc2hcclxuICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XHJcblxyXG4gICAgICAvLyBVc2luZyBqUXVlcnkncyBhbmltYXRlKCkgbWV0aG9kIHRvIGFkZCBzbW9vdGggcGFnZSBzY3JvbGxcclxuICAgICAgLy8gVGhlIG9wdGlvbmFsIG51bWJlciAoODAwKSBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdGFrZXMgdG8gc2Nyb2xsIHRvIHRoZSBzcGVjaWZpZWQgYXJlYVxyXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcFxyXG4gICAgICB9LCA4MDAsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vIEFkZCBoYXNoICgjKSB0byBVUkwgd2hlbiBkb25lIHNjcm9sbGluZyAoZGVmYXVsdCBjbGljayBiZWhhdmlvcilcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICAgIH0pO1xyXG4gICAgfSAvLyBFbmQgaWZcclxuICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==