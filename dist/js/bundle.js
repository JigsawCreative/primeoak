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

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_full_image_flexslider_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/full-image-flexslider-item */ "./src/js/components/full-image-flexslider-item.js");
/* harmony import */ var _components_full_image_flexslider_item__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_full_image_flexslider_item__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/services */ "./src/js/components/services.js");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_services__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_before_and_after__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/before-and-after */ "./src/js/components/before-and-after.js");
/* harmony import */ var _components_before_and_after__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_before_and_after__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact */ "./src/js/components/contact.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_contact__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/smooth-scroll */ "./src/js/components/smooth-scroll.js");
/* harmony import */ var _components_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_news_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/news-slider */ "./src/js/components/news-slider.js");
/* harmony import */ var _components_news_slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_news_slider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_front_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/front-page */ "./src/js/components/front-page.js");
/* harmony import */ var _components_front_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_front_page__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_404__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/404 */ "./src/js/components/404.js");
/* harmony import */ var _components_404__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_404__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_designer_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/designer-login */ "./src/js/components/designer-login.js");
/* harmony import */ var _components_designer_login__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_designer_login__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_product_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-slider */ "./src/js/components/product-slider.js");
/* harmony import */ var _components_product_slider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_product_slider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_render_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/render-toggle */ "./src/js/components/render-toggle.js");
/* harmony import */ var _components_render_toggle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_render_toggle__WEBPACK_IMPORTED_MODULE_12__);
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
    $(".contact-us").click(function () {
      $(".contact-col-1").toggleClass("show-column");
    });
    $(".x").click(function () {
      $(".contact-col-1").removeClass("show-column");
      $(".contact-col-2").removeClass("show-column");
    });
    $(".opportunities").click(function () {
      $(".contact-col-2").toggleClass("show-column");
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

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(document).ready(function () {
  $("#menu-open").click(function () {
    $("#menu-open span").toggleClass("open");
    $(".nav").slideToggle("slow");
  }); //products sub menu

  $(".products-menu-link>a").click(function () {
    $(".downloads").removeClass("sub-menu-open");
    $(".products").toggleClass("sub-menu-open");
  }); //downloads sub menu

  $(".download-menu-link").click(function () {
    $(".products").removeClass("sub-menu-open");
    $(".downloads").toggleClass("sub-menu-open");
  }); //change product menu link on mobile

  var w = window.innerWidth;

  if (w < 1200) {
    $(".products-menu-link>a").attr("href", "/products");
    $(".download-menu-link>a").attr("href", "/downloads");
  } //collapsible menus function


  function setup_collapsible_submenus() {
    var $menu = $("#mobile_menu"),
        top_level_link = "#mobile_menu .menu-item-has-children > a";
    console.log($menu);
    $menu.find("a").each(function () {
      $(this).off("click");

      if ($(this).is(top_level_link)) {
        $(this).attr("href", "#");
      }

      if (!$(this).siblings(".sub-menu").length) {
        $(this).on("click", function (event) {
          $(this).parents(".menu-button").trigger("click");
        });
      } else {
        $(this).on("click", function (event) {
          event.preventDefault();
          $(this).parent().toggleClass("visible");
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
    slideshowSpeed: 5000,
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
    slideshowSpeed: 5000,
    animationSpeed: 600,
    animationLoop: false,
    pauseOnAction: false,
    controlNav: true,
    rtl: true,
    customDirectionNav: $(".custom-navigation a")
  });
});

/***/ }),

/***/ "./src/js/components/render-toggle.js":
/*!********************************************!*\
  !*** ./src/js/components/render-toggle.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(document).ready(function () {
  $('.render-toggle').click(function () {
    $('#first-render').toggleClass('active-render');
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
    $('.before').fadeOut(800);
  });
});

if ($('.image-comparison').length) {
  $(window).load(function () {
    $(".images_to_compare").twentytwenty();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy80MDQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYmVmb3JlLWFuZC1hZnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Rlc2lnbmVyLWxvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Zyb250LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZnVsbC1pbWFnZS1mbGV4c2xpZGVyLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9uZXdzLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wcm9kdWN0LXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yZW5kZXItdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbW9vdGgtc2Nyb2xsLmpzIl0sIm5hbWVzIjpbIiQiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwidyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhdHRyIiwibGVuZ3RoIiwibG9hZCIsInR3ZW50eXR3ZW50eSIsImNvbnNvbGUiLCJsb2ciLCJoaWRlIiwiYWRkQ2xhc3MiLCJzaG93IiwiYWN0aXZlVGFiIiwiZmluZCIsImJyb3dzZXIiLCJtc2llIiwiaGlkZVZpZGVvIiwiY3NzIiwiaGlkZVZpZGVvVGl0bGVzIiwic2V0VGltZW91dCIsIiR3aW5kb3ciLCJmbGV4c2xpZGVyIiwidmFycyIsImdldEdyaWRTaXplIiwiZWFjaCIsImFuaW1hdGlvbiIsInNsaWRlc2hvd1NwZWVkIiwiYW5pbWF0aW9uTG9vcCIsImNvbnRyb2xOYXYiLCJjdXN0b21EaXJlY3Rpb25OYXYiLCJtaW5JdGVtcyIsIm1heEl0ZW1zIiwic3RhcnQiLCJzbGlkZXIiLCJyZXNpemUiLCJncmlkU2l6ZSIsInNsaWRlVG9nZ2xlIiwic2V0dXBfY29sbGFwc2libGVfc3VibWVudXMiLCIkbWVudSIsInRvcF9sZXZlbF9saW5rIiwib2ZmIiwiaXMiLCJzaWJsaW5ncyIsIm9uIiwiZXZlbnQiLCJwYXJlbnRzIiwidHJpZ2dlciIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiYW5pbWF0aW9uU3BlZWQiLCJwYXVzZU9uQWN0aW9uIiwicnRsIiwibW91c2VlbnRlciIsImZhZGVPdXQiLCJoYXNoIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtR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LENBSXBCOztBQUNBLFVBQUlPLElBQUksR0FBRyxLQUFLQSxJQUFoQixDQUxvQixDQU9wQjtBQUNBOztBQUNBN0QsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjhELE9BQWhCLENBQXdCO0FBQ3RCQyxpQkFBUyxFQUFFL0QsQ0FBQyxDQUFDNkQsSUFBRCxDQUFELENBQVFHLE1BQVIsR0FBaUJDO0FBRE4sT0FBeEIsRUFFRyxHQUZILEVBRVEsWUFBVTtBQUVoQjtBQUNBekQsY0FBTSxDQUFDMEQsUUFBUCxDQUFnQkwsSUFBaEIsR0FBdUJBLElBQXZCO0FBQ0QsT0FORDtBQU9ELEtBbkJnQyxDQW1CL0I7O0FBQ0gsR0FwQkQ7QUFxQkQsQ0F2QkQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCIvKiogSW1wb3J0IEN1c3RvbSBmaWxlcyAqKi9cclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL21lbnVcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2Z1bGwtaW1hZ2UtZmxleHNsaWRlci1pdGVtXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zbGlkZXJcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9iZWZvcmUtYW5kLWFmdGVyXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jb250YWN0XCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zbW9vdGgtc2Nyb2xsXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9uZXdzLXNsaWRlclwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvZnJvbnQtcGFnZVwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvNDA0XCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9kZXNpZ25lci1sb2dpblwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvcHJvZHVjdC1zbGlkZXJcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3JlbmRlci10b2dnbGVcIjtcclxuIiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvL3RyaWdnZXIgZG93bmxvYWRzIHN1YiBtZW51XHJcbiAgICAkKCcucHJvZHVjdC00MDQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuZG93bmxvYWRzJykucmVtb3ZlQ2xhc3MoJ3N1Yi1tZW51LW9wZW4nKTtcclxuICAgICAgICAkKCcucHJvZHVjdHMnKS50b2dnbGVDbGFzcygnc3ViLW1lbnUtb3BlbicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vY2hhbmdlIHByb2R1Y3QgbWVudSBsaW5rIG9uIG1vYmlsZVxyXG5cclxuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgaWYodyA8IDEyMDApIHtcclxuICAgICAgJCgnLnByb2R1Y3QtNDA0JykuYXR0cignaHJlZicsICcvcHJvZHVjdHMnKTtcclxuICAgIH0gXHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0aWYoJCgnLmJhLWltYWdlLWNvbXBhcmlzb24nKS5sZW5ndGggfHwgJCgnLnBvc3QtYmEtaW1hZ2UtY29tcGFyaXNvbicpLmxlbmd0aCkge1xyXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKFwiLmJhX2ltYWdlc190b19jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgaWYgKHcgPCAxMjAwKSB7XHJcbiAgICAkKFwiLmNvbnRhY3QtdXNcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIuY29udGFjdC1jb2wtMVwiKS50b2dnbGVDbGFzcyhcInNob3ctY29sdW1uXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi54XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKFwiLmNvbnRhY3QtY29sLTFcIikucmVtb3ZlQ2xhc3MoXCJzaG93LWNvbHVtblwiKTtcclxuICAgICAgJChcIi5jb250YWN0LWNvbC0yXCIpLnJlbW92ZUNsYXNzKFwic2hvdy1jb2x1bW5cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLm9wcG9ydHVuaXRpZXNcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIuY29udGFjdC1jb2wtMlwiKS50b2dnbGVDbGFzcyhcInNob3ctY29sdW1uXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHcpO1xyXG59KTtcclxuIiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAkKFwiLnRhYl9jb250ZW50X2xvZ2luXCIpLmhpZGUoKTtcclxuICAkKFwidWwudGFic19sb2dpbiBsaTpmaXJzdFwiKVxyXG4gICAgLmFkZENsYXNzKFwiYWN0aXZlX2xvZ2luXCIpXHJcbiAgICAuc2hvdygpO1xyXG4gICQoXCIudGFiX2NvbnRlbnRfbG9naW46Zmlyc3RcIikuc2hvdygpO1xyXG4gICQoXCJ1bC50YWJzX2xvZ2luIGxpXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcInVsLnRhYnNfbG9naW4gbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVfbG9naW5cIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlX2xvZ2luXCIpO1xyXG4gICAgJChcIi50YWJfY29udGVudF9sb2dpblwiKS5oaWRlKCk7XHJcbiAgICB2YXIgYWN0aXZlVGFiID0gJCh0aGlzKVxyXG4gICAgICAuZmluZChcImFcIilcclxuICAgICAgLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgaWYgKCQuYnJvd3Nlci5tc2llKSB7XHJcbiAgICAgICQoYWN0aXZlVGFiKS5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGFjdGl2ZVRhYikuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiY29uc3QgJCA9IGpRdWVyeTtcclxuXHJcbmZ1bmN0aW9uIGhpZGVWaWRlbygpIHtcclxuICAgICQoJyN2aWRlby1jb250YWluZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVmlkZW9UaXRsZXMoKSB7XHJcbiAgICAkKCcudmlkZW8tdGl0bGVzJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxufVxyXG5zZXRUaW1lb3V0KGhpZGVWaWRlb1RpdGxlcywgNDAwMCk7XHJcbnNldFRpbWVvdXQoaGlkZVZpZGVvLCA0NTAwKTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcblx0Ly8gc3RvcmUgdGhlIHNsaWRlciBpbiBhIGxvY2FsIHZhcmlhYmxlXHJcblx0dmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXHJcblx0XHRmbGV4c2xpZGVyID0geyB2YXJzOnt9IH07XHJcblxyXG5cdC8vIHRpbnkgaGVscGVyIGZ1bmN0aW9uIHRvIGFkZCBicmVha3BvaW50c1xyXG5cdGZ1bmN0aW9uIGdldEdyaWRTaXplKCkge1xyXG5cdFx0cmV0dXJuICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMCApID8gMSA6IDE7XHJcblx0fVxyXG5cclxuXHQkd2luZG93LnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdCAkKCcuZnVsbC1pbWFnZS1pdGVtLWZsZXhzbGlkZXItY29udGFpbmVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdCQodGhpcykuZmluZChcIi5mbGV4c2xpZGVyXCIpLmZsZXhzbGlkZXIoe1xyXG5cdFx0XHRcdGFuaW1hdGlvbjogXCJzbGlkZVwiLFxyXG5cdFx0XHRcdHNsaWRlc2hvd1NwZWVkOiAxMjAwMCxcclxuXHRcdFx0XHRhbmltYXRpb25Mb29wOiB0cnVlLFxyXG5cdFx0XHRcdGNvbnRyb2xOYXY6IGZhbHNlLFxyXG5cdFx0XHRcdGN1c3RvbURpcmVjdGlvbk5hdjogJCh0aGlzKS5maW5kKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIiksXHJcblx0XHRcdFx0bWluSXRlbXM6IGdldEdyaWRTaXplKCksIC8vIHVzZSBmdW5jdGlvbiB0byBwdWxsIGluIGluaXRpYWwgdmFsdWVcclxuXHRcdFx0XHRtYXhJdGVtczogZ2V0R3JpZFNpemUoKSwgLy8gdXNlIGZ1bmN0aW9uIHRvIHB1bGwgaW4gaW5pdGlhbCB2YWx1ZVxyXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbihzbGlkZXIpIHtcclxuXHRcdFx0XHRcdGZsZXhzbGlkZXIgPSBzbGlkZXI7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHQvLyBjaGVjayBncmlkIHNpemUgb24gcmVzaXplIGV2ZW50XHJcblx0JHdpbmRvdy5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgZ3JpZFNpemUgPSBnZXRHcmlkU2l6ZSgpO1xyXG5cdFx0ZmxleHNsaWRlci52YXJzLm1pbkl0ZW1zID0gZ3JpZFNpemU7XHJcblx0XHRmbGV4c2xpZGVyLnZhcnMubWF4SXRlbXMgPSBncmlkU2l6ZTtcclxuXHR9KTtcdFxyXG59KCkpOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgJChcIiNtZW51LW9wZW5cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI21lbnUtb3BlbiBzcGFuXCIpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICAgICQoXCIubmF2XCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgLy9wcm9kdWN0cyBzdWIgbWVudVxyXG4gICQoXCIucHJvZHVjdHMtbWVudS1saW5rPmFcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmRvd25sb2Fkc1wiKS5yZW1vdmVDbGFzcyhcInN1Yi1tZW51LW9wZW5cIik7XHJcbiAgICAkKFwiLnByb2R1Y3RzXCIpLnRvZ2dsZUNsYXNzKFwic3ViLW1lbnUtb3BlblwiKTtcclxuICB9KTtcclxuXHJcbiAgLy9kb3dubG9hZHMgc3ViIG1lbnVcclxuICAkKFwiLmRvd25sb2FkLW1lbnUtbGlua1wiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoXCIucHJvZHVjdHNcIikucmVtb3ZlQ2xhc3MoXCJzdWItbWVudS1vcGVuXCIpO1xyXG4gICAgJChcIi5kb3dubG9hZHNcIikudG9nZ2xlQ2xhc3MoXCJzdWItbWVudS1vcGVuXCIpO1xyXG4gIH0pO1xyXG5cclxuICAvL2NoYW5nZSBwcm9kdWN0IG1lbnUgbGluayBvbiBtb2JpbGVcclxuXHJcbiAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgaWYgKHcgPCAxMjAwKSB7XHJcbiAgICAkKFwiLnByb2R1Y3RzLW1lbnUtbGluaz5hXCIpLmF0dHIoXCJocmVmXCIsIFwiL3Byb2R1Y3RzXCIpO1xyXG4gICAgJChcIi5kb3dubG9hZC1tZW51LWxpbms+YVwiKS5hdHRyKFwiaHJlZlwiLCBcIi9kb3dubG9hZHNcIik7XHJcbiAgfVxyXG5cclxuICAvL2NvbGxhcHNpYmxlIG1lbnVzIGZ1bmN0aW9uXHJcbiAgZnVuY3Rpb24gc2V0dXBfY29sbGFwc2libGVfc3VibWVudXMoKSB7XHJcbiAgICB2YXIgJG1lbnUgPSAkKFwiI21vYmlsZV9tZW51XCIpLFxyXG4gICAgICB0b3BfbGV2ZWxfbGluayA9IFwiI21vYmlsZV9tZW51IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiO1xyXG4gICAgY29uc29sZS5sb2coJG1lbnUpO1xyXG4gICAgJG1lbnUuZmluZChcImFcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5vZmYoXCJjbGlja1wiKTtcclxuXHJcbiAgICAgIGlmICgkKHRoaXMpLmlzKHRvcF9sZXZlbF9saW5rKSkge1xyXG4gICAgICAgICQodGhpcykuYXR0cihcImhyZWZcIiwgXCIjXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoISQodGhpcykuc2libGluZ3MoXCIuc3ViLW1lbnVcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgIC5wYXJlbnRzKFwiLm1lbnUtYnV0dG9uXCIpXHJcbiAgICAgICAgICAgIC50cmlnZ2VyKFwiY2xpY2tcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKFwidmlzaWJsZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzKCk7XHJcbiAgICB9LCA3MDApO1xyXG4gIH0pO1xyXG59KTtcclxuIiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgICQoJy5uZXdzLXNsaWRlcicpLmZsZXhzbGlkZXIoe1xyXG4gICAgICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXHJcbiAgICAgICAgc2xpZGVzaG93U3BlZWQ6IDUwMDAsXHJcbiAgICAgICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCxcclxuICAgICAgICBhbmltYXRpb25Mb29wOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25BY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIC8vY29udHJvbE5hdjogdHJ1ZSwgIFxyXG4gICAgICAgIHJ0bDogdHJ1ZSxcclxuICAgICAgICBjdXN0b21EaXJlY3Rpb25OYXY6ICQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKVxyXG4gICAgfSk7XHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcucHJvZHVjdC1zbGlkZXInKS5mbGV4c2xpZGVyKHtcclxuICAgICAgICBhbmltYXRpb246IFwiZmFkZVwiLFxyXG4gICAgICAgIHNsaWRlc2hvd1NwZWVkOiA1MDAwLFxyXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA2MDAsXHJcbiAgICAgICAgYW5pbWF0aW9uTG9vcDogZmFsc2UsXHJcbiAgICAgICAgcGF1c2VPbkFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgY29udHJvbE5hdjogdHJ1ZSxcclxuICAgICAgICBydGw6IHRydWUsXHJcbiAgICAgICAgY3VzdG9tRGlyZWN0aW9uTmF2OiAkKFwiLmN1c3RvbS1uYXZpZ2F0aW9uIGFcIilcclxuICAgIH0pO1xyXG59KTsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcucmVuZGVyLXRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNmaXJzdC1yZW5kZXInKS50b2dnbGVDbGFzcygnYWN0aXZlLXJlbmRlcicpO1xyXG4gICAgfSk7XHJcbn0pOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0JCgnLmJlZm9yZScpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuYmVmb3JlJykuZmFkZU91dCg4MDApO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbmlmKCQoJy5pbWFnZS1jb21wYXJpc29uJykubGVuZ3RoKSB7XHJcblx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0ICAkKFwiLmltYWdlc190b19jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSgpO1xyXG5cdH0pO1xyXG59IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAkKCcuZmxleHNsaWRlcicpLmZsZXhzbGlkZXIoe1xyXG4gICAgYW5pbWF0aW9uOiBcImZhZGVcIixcclxuICAgIHNsaWRlc2hvd1NwZWVkOiA3MDAwLFxyXG4gICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCwgIFxyXG4gICAgYW5pbWF0aW9uTG9vcDogdHJ1ZSxcclxuXHRjb250cm9sTmF2OiB0cnVlLCAgXHJcbiAgICBydGw6IHRydWUsXHJcbiAgfSk7XHJcbn0pOyIsIi8vYWRkIHNtb290aCBzY3JvbGwgdG8gYWxsIGxpbmtzXHJcbnZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAvLyBBZGQgc21vb3RoIHNjcm9sbGluZyB0byBhbGwgbGlua3NcclxuICAkKFwiYVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSB0aGlzLmhhc2ggaGFzIGEgdmFsdWUgYmVmb3JlIG92ZXJyaWRpbmcgZGVmYXVsdCBiZWhhdmlvclxyXG4gICAgaWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xyXG4gICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYW5jaG9yIGNsaWNrIGJlaGF2aW9yXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAvLyBTdG9yZSBoYXNoXHJcbiAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xyXG5cclxuICAgICAgLy8gVXNpbmcgalF1ZXJ5J3MgYW5pbWF0ZSgpIG1ldGhvZCB0byBhZGQgc21vb3RoIHBhZ2Ugc2Nyb2xsXHJcbiAgICAgIC8vIFRoZSBvcHRpb25hbCBudW1iZXIgKDgwMCkgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRha2VzIHRvIHNjcm9sbCB0byB0aGUgc3BlY2lmaWVkIGFyZWFcclxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgIHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3BcclxuICAgICAgfSwgODAwLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvLyBBZGQgaGFzaCAoIykgdG8gVVJMIHdoZW4gZG9uZSBzY3JvbGxpbmcgKGRlZmF1bHQgY2xpY2sgYmVoYXZpb3IpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xyXG4gICAgICB9KTtcclxuICAgIH0gLy8gRW5kIGlmXHJcbiAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=