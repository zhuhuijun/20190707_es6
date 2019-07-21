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
	//  import './clazz/lesson1';
	//  import './clazz/lesson2';
	// import './clazz/lesson3';
	// import './clazz/lesson4';
	//  import './clazz/lesson5';


	var Test = function Test() {
	  _classCallCheck(this, Test);

	  this.a = "hello,world";
	};

	var test = new Test();
	document.body.innerHTML = test.a;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	{
	    var arr = Array.of(3, 4, 5, 6, 2323, 332);
	    console.log('arr=', arr);

	    var empty = Array.of();
	    console.log('empty', empty);
	}
	//Array.from //集合=>数组
	{
	    var p = document.querySelectorAll('p');
	    var pArr = Array.from(p);
	    pArr.forEach(function (o) {
	        console.log(o.textContent);
	    });
	    console.log(Array.from([1, 3, 5], function (o) {
	        return o * 2;
	    }));
	}
	{
	    console.log('fill-7', [1, 'a', undefined].fill(7));
	    console.log('fill-7', [1, 'a', undefined, 5, '34'].fill('nn', 1, 3));
	}

/***/ })
/******/ ]);