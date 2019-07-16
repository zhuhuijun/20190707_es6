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
	    var regex = new RegExp('xyz', 'i');
	    var regex2 = new RegExp(/xyz/i);
	    var target = 'xyz123';
	    console.log(regex.test('xyz123'), regex2.test(target));

	    var regex3 = new RegExp(/xyz/ig, 'i');
	    console.log(regex3.flags);
	}
	//shift+alt +up
	//alt+up 上移
	{
	    var s = "bbb_bb_b";
	    var a1 = /b+/g;
	    var a2 = new RegExp('b+', 'y');

	    console.log('one', a1.exec(s), a1.exec(s));
	    console.log('two', a2.exec(s), a2.exec(s));
	    console.log('a1:' + a1.sticky);
	    console.log('a2:' + a2.sticky);
	}

	{
	    console.log('u-1', /^\uD83D/.test('\uD83D\uDCA2'));
	    console.log('u-2', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDCA2'));

	    console.log(/\u{61}/.test('a'));
	    console.log(/a/.test('a'));

	    console.log('\uD842\uDFB7');
	    var _s = '𠮷𠮷';
	    console.log('u', /^.$/.test(_s));
	    console.log('u-2', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(_s));

	    console.log('test', /𠮷{2}/.test(_s));
	    console.log('test-u', /(?:\uD842\uDFB7){2}/.test(_s));
	}

/***/ })
/******/ ]);