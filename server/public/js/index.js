/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * 
	                                                                                                                                                           * @authors Your Name (you@example.org)
	                                                                                                                                                           * @date    2019-07-07 17:27:59
	                                                                                                                                                           * @version $Id$
	                                                                                                                                                           */


	var Test = function Test() {
	    _classCallCheck(this, Test);

	    this.a = "hello,world";
	};

	var test = new Test();
	document.body.innerHTML = test.a;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	function test() {
	    var a = 1222;
	    for (var i = 0; i < 3; i++) {
	        console.log(i);
	    }
	    console.log(i);

	    var c = 1;
	    // let c=2; //不能重复
	}
	test();
	function last() {
	    var PI = 3.14; //常量初始化赋值
	    console.log(PI);
	    // PI=4;
	    var k = {
	        a: 1
	    };
	    k.b = 2;
	    console.log(k);
	}
	last();

/***/ })
/******/ ]);