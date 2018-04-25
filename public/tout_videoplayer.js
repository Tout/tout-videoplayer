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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/array/from */ \"./node_modules/core-js/library/fn/array/from.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/array/from.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/create */ \"./node_modules/core-js/library/fn/object/create.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-properties.js":
/*!************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-properties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-properties */ \"./node_modules/core-js/library/fn/object/define-properties.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/define-properties.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/freeze.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/freeze.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/freeze */ \"./node_modules/core-js/library/fn/object/freeze.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/freeze.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ \"./node_modules/core-js/library/fn/object/get-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"./node_modules/core-js/library/fn/object/set-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol */ \"./node_modules/core-js/library/fn/symbol/index.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"./node_modules/core-js/library/fn/symbol/iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/babel-runtime/core-js/object/set-prototype-of.js\");\n\nvar _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);\n\nvar _create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/babel-runtime/core-js/object/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(superClass)));\n  }\n\n  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && ((typeof call === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(call)) === \"object\" || typeof call === \"function\") ? call : self;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js":
/*!*********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperties = __webpack_require__(/*! ../core-js/object/define-properties */ \"./node_modules/babel-runtime/core-js/object/define-properties.js\");\n\nvar _defineProperties2 = _interopRequireDefault(_defineProperties);\n\nvar _freeze = __webpack_require__(/*! ../core-js/object/freeze */ \"./node_modules/babel-runtime/core-js/object/freeze.js\");\n\nvar _freeze2 = _interopRequireDefault(_freeze);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (strings, raw) {\n  return (0, _freeze2.default)((0, _defineProperties2.default)(strings, {\n    raw: {\n      value: (0, _freeze2.default)(raw)\n    }\n  }));\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/babel-runtime/core-js/symbol/iterator.js\");\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/babel-runtime/core-js/symbol.js\");\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nvar _typeof = typeof _symbol2.default === \"function\" && typeof _iterator2.default === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = typeof _symbol2.default === \"function\" && _typeof(_iterator2.default) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/es6.array.from */ \"./node_modules/core-js/library/modules/es6.array.from.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Array.from;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.create */ \"./node_modules/core-js/library/modules/es6.object.create.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-properties */ \"./node_modules/core-js/library/modules/es6.object.define-properties.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperties(T, D) {\n  return $Object.defineProperties(T, D);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/freeze.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/freeze.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.freeze */ \"./node_modules/core-js/library/modules/es6.object.freeze.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.freeze;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.get-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.getPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.symbol */ \"./node_modules/core-js/library/modules/es6.symbol.js\");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ \"./node_modules/core-js/library/modules/es7.symbol.observable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\").f('iterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.5' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function (key) {\n  return store[key] || (store[key] = {});\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/library/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/library/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.freeze.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/library/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/library/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/library/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/document-register-element/build/document-register-element.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/document-register-element/build/document-register-element.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */\n(function(window,polyfill){\"use strict\";var document=window.document,Object=window.Object;var htmlClass=function(info){var catchClass=/^[A-Z]+[a-z]/,filterBy=function(re){var arr=[],tag;for(tag in register){if(re.test(tag))arr.push(tag)}return arr},add=function(Class,tag){tag=tag.toLowerCase();if(!(tag in register)){register[Class]=(register[Class]||[]).concat(tag);register[tag]=register[tag.toUpperCase()]=Class}},register=(Object.create||Object)(null),htmlClass={},i,section,tags,Class;for(section in info){for(Class in info[section]){tags=info[section][Class];register[Class]=tags;for(i=0;i<tags.length;i++){register[tags[i].toLowerCase()]=register[tags[i].toUpperCase()]=Class}}}htmlClass.get=function get(tagOrClass){return typeof tagOrClass===\"string\"?register[tagOrClass]||(catchClass.test(tagOrClass)?[]:\"\"):filterBy(tagOrClass)};htmlClass.set=function set(tag,Class){return catchClass.test(tag)?add(tag,Class):add(Class,tag),htmlClass};return htmlClass}({collections:{HTMLAllCollection:[\"all\"],HTMLCollection:[\"forms\"],HTMLFormControlsCollection:[\"elements\"],HTMLOptionsCollection:[\"options\"]},elements:{Element:[\"element\"],HTMLAnchorElement:[\"a\"],HTMLAppletElement:[\"applet\"],HTMLAreaElement:[\"area\"],HTMLAttachmentElement:[\"attachment\"],HTMLAudioElement:[\"audio\"],HTMLBRElement:[\"br\"],HTMLBaseElement:[\"base\"],HTMLBodyElement:[\"body\"],HTMLButtonElement:[\"button\"],HTMLCanvasElement:[\"canvas\"],HTMLContentElement:[\"content\"],HTMLDListElement:[\"dl\"],HTMLDataElement:[\"data\"],HTMLDataListElement:[\"datalist\"],HTMLDetailsElement:[\"details\"],HTMLDialogElement:[\"dialog\"],HTMLDirectoryElement:[\"dir\"],HTMLDivElement:[\"div\"],HTMLDocument:[\"document\"],HTMLElement:[\"element\",\"abbr\",\"address\",\"article\",\"aside\",\"b\",\"bdi\",\"bdo\",\"cite\",\"code\",\"command\",\"dd\",\"dfn\",\"dt\",\"em\",\"figcaption\",\"figure\",\"footer\",\"header\",\"i\",\"kbd\",\"mark\",\"nav\",\"noscript\",\"rp\",\"rt\",\"ruby\",\"s\",\"samp\",\"section\",\"small\",\"strong\",\"sub\",\"summary\",\"sup\",\"u\",\"var\",\"wbr\"],HTMLEmbedElement:[\"embed\"],HTMLFieldSetElement:[\"fieldset\"],HTMLFontElement:[\"font\"],HTMLFormElement:[\"form\"],HTMLFrameElement:[\"frame\"],HTMLFrameSetElement:[\"frameset\"],HTMLHRElement:[\"hr\"],HTMLHeadElement:[\"head\"],HTMLHeadingElement:[\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\"],HTMLHtmlElement:[\"html\"],HTMLIFrameElement:[\"iframe\"],HTMLImageElement:[\"img\"],HTMLInputElement:[\"input\"],HTMLKeygenElement:[\"keygen\"],HTMLLIElement:[\"li\"],HTMLLabelElement:[\"label\"],HTMLLegendElement:[\"legend\"],HTMLLinkElement:[\"link\"],HTMLMapElement:[\"map\"],HTMLMarqueeElement:[\"marquee\"],HTMLMediaElement:[\"media\"],HTMLMenuElement:[\"menu\"],HTMLMenuItemElement:[\"menuitem\"],HTMLMetaElement:[\"meta\"],HTMLMeterElement:[\"meter\"],HTMLModElement:[\"del\",\"ins\"],HTMLOListElement:[\"ol\"],HTMLObjectElement:[\"object\"],HTMLOptGroupElement:[\"optgroup\"],HTMLOptionElement:[\"option\"],HTMLOutputElement:[\"output\"],HTMLParagraphElement:[\"p\"],HTMLParamElement:[\"param\"],HTMLPictureElement:[\"picture\"],HTMLPreElement:[\"pre\"],HTMLProgressElement:[\"progress\"],HTMLQuoteElement:[\"blockquote\",\"q\",\"quote\"],HTMLScriptElement:[\"script\"],HTMLSelectElement:[\"select\"],HTMLShadowElement:[\"shadow\"],HTMLSlotElement:[\"slot\"],HTMLSourceElement:[\"source\"],HTMLSpanElement:[\"span\"],HTMLStyleElement:[\"style\"],HTMLTableCaptionElement:[\"caption\"],HTMLTableCellElement:[\"td\",\"th\"],HTMLTableColElement:[\"col\",\"colgroup\"],HTMLTableElement:[\"table\"],HTMLTableRowElement:[\"tr\"],HTMLTableSectionElement:[\"thead\",\"tbody\",\"tfoot\"],HTMLTemplateElement:[\"template\"],HTMLTextAreaElement:[\"textarea\"],HTMLTimeElement:[\"time\"],HTMLTitleElement:[\"title\"],HTMLTrackElement:[\"track\"],HTMLUListElement:[\"ul\"],HTMLUnknownElement:[\"unknown\",\"vhgroupv\",\"vkeygen\"],HTMLVideoElement:[\"video\"]},nodes:{Attr:[\"node\"],Audio:[\"audio\"],CDATASection:[\"node\"],CharacterData:[\"node\"],Comment:[\"#comment\"],Document:[\"#document\"],DocumentFragment:[\"#document-fragment\"],DocumentType:[\"node\"],HTMLDocument:[\"#document\"],Image:[\"img\"],Option:[\"option\"],ProcessingInstruction:[\"node\"],ShadowRoot:[\"#shadow-root\"],Text:[\"#text\"],XMLDocument:[\"xml\"]}});if(typeof polyfill!==\"object\")polyfill={type:polyfill||\"auto\"};var REGISTER_ELEMENT=\"registerElement\",EXPANDO_UID=\"__\"+REGISTER_ELEMENT+(window.Math.random()*1e5>>0),ADD_EVENT_LISTENER=\"addEventListener\",ATTACHED=\"attached\",CALLBACK=\"Callback\",DETACHED=\"detached\",EXTENDS=\"extends\",ATTRIBUTE_CHANGED_CALLBACK=\"attributeChanged\"+CALLBACK,ATTACHED_CALLBACK=ATTACHED+CALLBACK,CONNECTED_CALLBACK=\"connected\"+CALLBACK,DISCONNECTED_CALLBACK=\"disconnected\"+CALLBACK,CREATED_CALLBACK=\"created\"+CALLBACK,DETACHED_CALLBACK=DETACHED+CALLBACK,ADDITION=\"ADDITION\",MODIFICATION=\"MODIFICATION\",REMOVAL=\"REMOVAL\",DOM_ATTR_MODIFIED=\"DOMAttrModified\",DOM_CONTENT_LOADED=\"DOMContentLoaded\",DOM_SUBTREE_MODIFIED=\"DOMSubtreeModified\",PREFIX_TAG=\"<\",PREFIX_IS=\"=\",validName=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,invalidNames=[\"ANNOTATION-XML\",\"COLOR-PROFILE\",\"FONT-FACE\",\"FONT-FACE-SRC\",\"FONT-FACE-URI\",\"FONT-FACE-FORMAT\",\"FONT-FACE-NAME\",\"MISSING-GLYPH\"],types=[],protos=[],query=\"\",documentElement=document.documentElement,indexOf=types.indexOf||function(v){for(var i=this.length;i--&&this[i]!==v;){}return i},OP=Object.prototype,hOP=OP.hasOwnProperty,iPO=OP.isPrototypeOf,defineProperty=Object.defineProperty,empty=[],gOPD=Object.getOwnPropertyDescriptor,gOPN=Object.getOwnPropertyNames,gPO=Object.getPrototypeOf,sPO=Object.setPrototypeOf,hasProto=!!Object.__proto__,fixGetClass=false,DRECEV1=\"__dreCEv1\",customElements=window.customElements,usableCustomElements=!/^force/.test(polyfill.type)&&!!(customElements&&customElements.define&&customElements.get&&customElements.whenDefined),Dict=Object.create||Object,Map=window.Map||function Map(){var K=[],V=[],i;return{get:function(k){return V[indexOf.call(K,k)]},set:function(k,v){i=indexOf.call(K,k);if(i<0)V[K.push(k)-1]=v;else V[i]=v}}},Promise=window.Promise||function(fn){var notify=[],done=false,p={catch:function(){return p},then:function(cb){notify.push(cb);if(done)setTimeout(resolve,1);return p}};function resolve(value){done=true;while(notify.length)notify.shift()(value)}fn(resolve);return p},justCreated=false,constructors=Dict(null),waitingList=Dict(null),nodeNames=new Map,secondArgument=function(is){return is.toLowerCase()},create=Object.create||function Bridge(proto){return proto?(Bridge.prototype=proto,new Bridge):this},setPrototype=sPO||(hasProto?function(o,p){o.__proto__=p;return o}:gOPN&&gOPD?function(){function setProperties(o,p){for(var key,names=gOPN(p),i=0,length=names.length;i<length;i++){key=names[i];if(!hOP.call(o,key)){defineProperty(o,key,gOPD(p,key))}}}return function(o,p){do{setProperties(o,p)}while((p=gPO(p))&&!iPO.call(p,o));return o}}():function(o,p){for(var key in p){o[key]=p[key]}return o}),MutationObserver=window.MutationObserver||window.WebKitMutationObserver,HTMLElementPrototype=(window.HTMLElement||window.Element||window.Node).prototype,IE8=!iPO.call(HTMLElementPrototype,documentElement),safeProperty=IE8?function(o,k,d){o[k]=d.value;return o}:defineProperty,isValidNode=IE8?function(node){return node.nodeType===1}:function(node){return iPO.call(HTMLElementPrototype,node)},targets=IE8&&[],attachShadow=HTMLElementPrototype.attachShadow,cloneNode=HTMLElementPrototype.cloneNode,dispatchEvent=HTMLElementPrototype.dispatchEvent,getAttribute=HTMLElementPrototype.getAttribute,hasAttribute=HTMLElementPrototype.hasAttribute,removeAttribute=HTMLElementPrototype.removeAttribute,setAttribute=HTMLElementPrototype.setAttribute,createElement=document.createElement,patchedCreateElement=createElement,attributesObserver=MutationObserver&&{attributes:true,characterData:true,attributeOldValue:true},DOMAttrModified=MutationObserver||function(e){doesNotSupportDOMAttrModified=false;documentElement.removeEventListener(DOM_ATTR_MODIFIED,DOMAttrModified)},asapQueue,asapTimer=0,V0=REGISTER_ELEMENT in document&&!/^force-all/.test(polyfill.type),setListener=true,justSetup=false,doesNotSupportDOMAttrModified=true,dropDomContentLoaded=true,notFromInnerHTMLHelper=true,onSubtreeModified,callDOMAttrModified,getAttributesMirror,observer,observe,patchIfNotAlready,patch,tmp;if(MutationObserver){tmp=document.createElement(\"div\");tmp.innerHTML=\"<div><div></div></div>\";new MutationObserver(function(mutations,observer){if(mutations[0]&&mutations[0].type==\"childList\"&&!mutations[0].removedNodes[0].childNodes.length){tmp=gOPD(HTMLElementPrototype,\"innerHTML\");var set=tmp&&tmp.set;if(set)defineProperty(HTMLElementPrototype,\"innerHTML\",{set:function(value){while(this.lastChild)this.removeChild(this.lastChild);set.call(this,value)}})}observer.disconnect();tmp=null}).observe(tmp,{childList:true,subtree:true});tmp.innerHTML=\"\"}if(!V0){if(sPO||hasProto){patchIfNotAlready=function(node,proto){if(!iPO.call(proto,node)){setupNode(node,proto)}};patch=setupNode}else{patchIfNotAlready=function(node,proto){if(!node[EXPANDO_UID]){node[EXPANDO_UID]=Object(true);setupNode(node,proto)}};patch=patchIfNotAlready}if(IE8){doesNotSupportDOMAttrModified=false;(function(){var descriptor=gOPD(HTMLElementPrototype,ADD_EVENT_LISTENER),addEventListener=descriptor.value,patchedRemoveAttribute=function(name){var e=new CustomEvent(DOM_ATTR_MODIFIED,{bubbles:true});e.attrName=name;e.prevValue=getAttribute.call(this,name);e.newValue=null;e[REMOVAL]=e.attrChange=2;removeAttribute.call(this,name);dispatchEvent.call(this,e)},patchedSetAttribute=function(name,value){var had=hasAttribute.call(this,name),old=had&&getAttribute.call(this,name),e=new CustomEvent(DOM_ATTR_MODIFIED,{bubbles:true});setAttribute.call(this,name,value);e.attrName=name;e.prevValue=had?old:null;e.newValue=value;if(had){e[MODIFICATION]=e.attrChange=1}else{e[ADDITION]=e.attrChange=0}dispatchEvent.call(this,e)},onPropertyChange=function(e){var node=e.currentTarget,superSecret=node[EXPANDO_UID],propertyName=e.propertyName,event;if(superSecret.hasOwnProperty(propertyName)){superSecret=superSecret[propertyName];event=new CustomEvent(DOM_ATTR_MODIFIED,{bubbles:true});event.attrName=superSecret.name;event.prevValue=superSecret.value||null;event.newValue=superSecret.value=node[propertyName]||null;if(event.prevValue==null){event[ADDITION]=event.attrChange=0}else{event[MODIFICATION]=event.attrChange=1}dispatchEvent.call(node,event)}};descriptor.value=function(type,handler,capture){if(type===DOM_ATTR_MODIFIED&&this[ATTRIBUTE_CHANGED_CALLBACK]&&this.setAttribute!==patchedSetAttribute){this[EXPANDO_UID]={className:{name:\"class\",value:this.className}};this.setAttribute=patchedSetAttribute;this.removeAttribute=patchedRemoveAttribute;addEventListener.call(this,\"propertychange\",onPropertyChange)}addEventListener.call(this,type,handler,capture)};defineProperty(HTMLElementPrototype,ADD_EVENT_LISTENER,descriptor)})()}else if(!MutationObserver){documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED,DOMAttrModified);documentElement.setAttribute(EXPANDO_UID,1);documentElement.removeAttribute(EXPANDO_UID);if(doesNotSupportDOMAttrModified){onSubtreeModified=function(e){var node=this,oldAttributes,newAttributes,key;if(node===e.target){oldAttributes=node[EXPANDO_UID];node[EXPANDO_UID]=newAttributes=getAttributesMirror(node);for(key in newAttributes){if(!(key in oldAttributes)){return callDOMAttrModified(0,node,key,oldAttributes[key],newAttributes[key],ADDITION)}else if(newAttributes[key]!==oldAttributes[key]){return callDOMAttrModified(1,node,key,oldAttributes[key],newAttributes[key],MODIFICATION)}}for(key in oldAttributes){if(!(key in newAttributes)){return callDOMAttrModified(2,node,key,oldAttributes[key],newAttributes[key],REMOVAL)}}}};callDOMAttrModified=function(attrChange,currentTarget,attrName,prevValue,newValue,action){var e={attrChange:attrChange,currentTarget:currentTarget,attrName:attrName,prevValue:prevValue,newValue:newValue};e[action]=attrChange;onDOMAttrModified(e)};getAttributesMirror=function(node){for(var attr,name,result={},attributes=node.attributes,i=0,length=attributes.length;i<length;i++){attr=attributes[i];name=attr.name;if(name!==\"setAttribute\"){result[name]=attr.value}}return result}}}document[REGISTER_ELEMENT]=function registerElement(type,options){upperType=type.toUpperCase();if(setListener){setListener=false;if(MutationObserver){observer=function(attached,detached){function checkEmAll(list,callback){for(var i=0,length=list.length;i<length;callback(list[i++])){}}return new MutationObserver(function(records){for(var current,node,newValue,i=0,length=records.length;i<length;i++){current=records[i];if(current.type===\"childList\"){checkEmAll(current.addedNodes,attached);checkEmAll(current.removedNodes,detached)}else{node=current.target;if(notFromInnerHTMLHelper&&node[ATTRIBUTE_CHANGED_CALLBACK]&&current.attributeName!==\"style\"){newValue=getAttribute.call(node,current.attributeName);if(newValue!==current.oldValue){node[ATTRIBUTE_CHANGED_CALLBACK](current.attributeName,current.oldValue,newValue)}}}}})}(executeAction(ATTACHED),executeAction(DETACHED));observe=function(node){observer.observe(node,{childList:true,subtree:true});return node};observe(document);if(attachShadow){HTMLElementPrototype.attachShadow=function(){return observe(attachShadow.apply(this,arguments))}}}else{asapQueue=[];document[ADD_EVENT_LISTENER](\"DOMNodeInserted\",onDOMNode(ATTACHED));document[ADD_EVENT_LISTENER](\"DOMNodeRemoved\",onDOMNode(DETACHED))}document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED,onReadyStateChange);document[ADD_EVENT_LISTENER](\"readystatechange\",onReadyStateChange);HTMLElementPrototype.cloneNode=function(deep){var node=cloneNode.call(this,!!deep),i=getTypeIndex(node);if(-1<i)patch(node,protos[i]);if(deep&&query.length)loopAndSetup(node.querySelectorAll(query));return node}}if(justSetup)return justSetup=false;if(-2<indexOf.call(types,PREFIX_IS+upperType)+indexOf.call(types,PREFIX_TAG+upperType)){throwTypeError(type)}if(!validName.test(upperType)||-1<indexOf.call(invalidNames,upperType)){throw new Error(\"The type \"+type+\" is invalid\")}var constructor=function(){return extending?document.createElement(nodeName,upperType):document.createElement(nodeName)},opt=options||OP,extending=hOP.call(opt,EXTENDS),nodeName=extending?options[EXTENDS].toUpperCase():upperType,upperType,i;if(extending&&-1<indexOf.call(types,PREFIX_TAG+nodeName)){throwTypeError(nodeName)}i=types.push((extending?PREFIX_IS:PREFIX_TAG)+upperType)-1;query=query.concat(query.length?\",\":\"\",extending?nodeName+'[is=\"'+type.toLowerCase()+'\"]':nodeName);constructor.prototype=protos[i]=hOP.call(opt,\"prototype\")?opt.prototype:create(HTMLElementPrototype);if(query.length)loopAndVerify(document.querySelectorAll(query),ATTACHED);return constructor};document.createElement=patchedCreateElement=function(localName,typeExtension){var is=getIs(typeExtension),node=is?createElement.call(document,localName,secondArgument(is)):createElement.call(document,localName),name=\"\"+localName,i=indexOf.call(types,(is?PREFIX_IS:PREFIX_TAG)+(is||name).toUpperCase()),setup=-1<i;if(is){node.setAttribute(\"is\",is=is.toLowerCase());if(setup){setup=isInQSA(name.toUpperCase(),is)}}notFromInnerHTMLHelper=!document.createElement.innerHTMLHelper;if(setup)patch(node,protos[i]);return node}}function ASAP(){var queue=asapQueue.splice(0,asapQueue.length);asapTimer=0;while(queue.length){queue.shift().call(null,queue.shift())}}function loopAndVerify(list,action){for(var i=0,length=list.length;i<length;i++){verifyAndSetupAndAction(list[i],action)}}function loopAndSetup(list){for(var i=0,length=list.length,node;i<length;i++){node=list[i];patch(node,protos[getTypeIndex(node)])}}function executeAction(action){return function(node){if(isValidNode(node)){verifyAndSetupAndAction(node,action);if(query.length)loopAndVerify(node.querySelectorAll(query),action)}}}function getTypeIndex(target){var is=getAttribute.call(target,\"is\"),nodeName=target.nodeName.toUpperCase(),i=indexOf.call(types,is?PREFIX_IS+is.toUpperCase():PREFIX_TAG+nodeName);return is&&-1<i&&!isInQSA(nodeName,is)?-1:i}function isInQSA(name,type){return-1<query.indexOf(name+'[is=\"'+type+'\"]')}function onDOMAttrModified(e){var node=e.currentTarget,attrChange=e.attrChange,attrName=e.attrName,target=e.target,addition=e[ADDITION]||2,removal=e[REMOVAL]||3;if(notFromInnerHTMLHelper&&(!target||target===node)&&node[ATTRIBUTE_CHANGED_CALLBACK]&&attrName!==\"style\"&&(e.prevValue!==e.newValue||e.newValue===\"\"&&(attrChange===addition||attrChange===removal))){node[ATTRIBUTE_CHANGED_CALLBACK](attrName,attrChange===addition?null:e.prevValue,attrChange===removal?null:e.newValue)}}function onDOMNode(action){var executor=executeAction(action);return function(e){asapQueue.push(executor,e.target);if(asapTimer)clearTimeout(asapTimer);asapTimer=setTimeout(ASAP,1)}}function onReadyStateChange(e){if(dropDomContentLoaded){dropDomContentLoaded=false;e.currentTarget.removeEventListener(DOM_CONTENT_LOADED,onReadyStateChange)}if(query.length)loopAndVerify((e.target||document).querySelectorAll(query),e.detail===DETACHED?DETACHED:ATTACHED);if(IE8)purge()}function patchedSetAttribute(name,value){var self=this;setAttribute.call(self,name,value);onSubtreeModified.call(self,{target:self})}function setupNode(node,proto){setPrototype(node,proto);if(observer){observer.observe(node,attributesObserver)}else{if(doesNotSupportDOMAttrModified){node.setAttribute=patchedSetAttribute;node[EXPANDO_UID]=getAttributesMirror(node);node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED,onSubtreeModified)}node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED,onDOMAttrModified)}if(node[CREATED_CALLBACK]&&notFromInnerHTMLHelper){node.created=true;node[CREATED_CALLBACK]();node.created=false}}function purge(){for(var node,i=0,length=targets.length;i<length;i++){node=targets[i];if(!documentElement.contains(node)){length--;targets.splice(i--,1);verifyAndSetupAndAction(node,DETACHED)}}}function throwTypeError(type){throw new Error(\"A \"+type+\" type is already registered\")}function verifyAndSetupAndAction(node,action){var fn,i=getTypeIndex(node),counterAction;if(-1<i){patchIfNotAlready(node,protos[i]);i=0;if(action===ATTACHED&&!node[ATTACHED]){node[DETACHED]=false;node[ATTACHED]=true;counterAction=\"connected\";i=1;if(IE8&&indexOf.call(targets,node)<0){targets.push(node)}}else if(action===DETACHED&&!node[DETACHED]){node[ATTACHED]=false;node[DETACHED]=true;counterAction=\"disconnected\";i=1}if(i&&(fn=node[action+CALLBACK]||node[counterAction+CALLBACK]))fn.call(node)}}function CustomElementRegistry(){}CustomElementRegistry.prototype={constructor:CustomElementRegistry,define:usableCustomElements?function(name,Class,options){if(options){CERDefine(name,Class,options)}else{var NAME=name.toUpperCase();constructors[NAME]={constructor:Class,create:[NAME]};nodeNames.set(Class,NAME);customElements.define(name,Class)}}:CERDefine,get:usableCustomElements?function(name){return customElements.get(name)||get(name)}:get,whenDefined:usableCustomElements?function(name){return Promise.race([customElements.whenDefined(name),whenDefined(name)])}:whenDefined};function CERDefine(name,Class,options){var is=options&&options[EXTENDS]||\"\",CProto=Class.prototype,proto=create(CProto),attributes=Class.observedAttributes||empty,definition={prototype:proto};safeProperty(proto,CREATED_CALLBACK,{value:function(){if(justCreated)justCreated=false;else if(!this[DRECEV1]){this[DRECEV1]=true;new Class(this);if(CProto[CREATED_CALLBACK])CProto[CREATED_CALLBACK].call(this);var info=constructors[nodeNames.get(Class)];if(!usableCustomElements||info.create.length>1){notifyAttributes(this)}}}});safeProperty(proto,ATTRIBUTE_CHANGED_CALLBACK,{value:function(name){if(-1<indexOf.call(attributes,name))CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this,arguments)}});if(CProto[CONNECTED_CALLBACK]){safeProperty(proto,ATTACHED_CALLBACK,{value:CProto[CONNECTED_CALLBACK]})}if(CProto[DISCONNECTED_CALLBACK]){safeProperty(proto,DETACHED_CALLBACK,{value:CProto[DISCONNECTED_CALLBACK]})}if(is)definition[EXTENDS]=is;name=name.toUpperCase();constructors[name]={constructor:Class,create:is?[is,secondArgument(name)]:[name]};nodeNames.set(Class,name);document[REGISTER_ELEMENT](name.toLowerCase(),definition);whenDefined(name);waitingList[name].r()}function get(name){var info=constructors[name.toUpperCase()];return info&&info.constructor}function getIs(options){return typeof options===\"string\"?options:options&&options.is||\"\"}function notifyAttributes(self){var callback=self[ATTRIBUTE_CHANGED_CALLBACK],attributes=callback?self.attributes:empty,i=attributes.length,attribute;while(i--){attribute=attributes[i];callback.call(self,attribute.name||attribute.nodeName,null,attribute.value||attribute.nodeValue)}}function whenDefined(name){name=name.toUpperCase();if(!(name in waitingList)){waitingList[name]={};waitingList[name].p=new Promise(function(resolve){waitingList[name].r=resolve})}return waitingList[name].p}function polyfillV1(){if(customElements)delete window.customElements;defineProperty(window,\"customElements\",{configurable:true,value:new CustomElementRegistry});defineProperty(window,\"CustomElementRegistry\",{configurable:true,value:CustomElementRegistry});for(var patchClass=function(name){var Class=window[name];if(Class){window[name]=function CustomElementsV1(self){var info,isNative;if(!self)self=this;if(!self[DRECEV1]){justCreated=true;info=constructors[nodeNames.get(self.constructor)];isNative=usableCustomElements&&info.create.length===1;self=isNative?Reflect.construct(Class,empty,info.constructor):document.createElement.apply(document,info.create);self[DRECEV1]=true;justCreated=false;if(!isNative)notifyAttributes(self)}return self};window[name].prototype=Class.prototype;try{Class.prototype.constructor=window[name]}catch(WebKit){fixGetClass=true;defineProperty(Class,DRECEV1,{value:window[name]})}}},Classes=htmlClass.get(/^HTML[A-Z]*[a-z]/),i=Classes.length;i--;patchClass(Classes[i])){}document.createElement=function(name,options){var is=getIs(options);return is?patchedCreateElement.call(this,name,secondArgument(is)):patchedCreateElement.call(this,name)};if(!V0){justSetup=true;document[REGISTER_ELEMENT](\"\")}}if(!customElements||/^force/.test(polyfill.type))polyfillV1();else if(!polyfill.noBuiltIn){try{(function(DRE,options,name){options[EXTENDS]=\"a\";DRE.prototype=create(HTMLAnchorElement.prototype);DRE.prototype.constructor=DRE;window.customElements.define(name,DRE,options);if(getAttribute.call(document.createElement(\"a\",{is:name}),\"is\")!==name||usableCustomElements&&getAttribute.call(new DRE,\"is\")!==name){throw options}})(function DRE(){return Reflect.construct(HTMLAnchorElement,[],DRE)},{},\"document-register-element-a\")}catch(o_O){polyfillV1()}}if(!polyfill.noBuiltIn){try{createElement.call(document,\"a\",\"a\")}catch(FireFox){secondArgument=function(is){return{is:is.toLowerCase()}}}}})(window);\n\n\n//# sourceURL=webpack:///./node_modules/document-register-element/build/document-register-element.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/classes/Component.js":
/*!*********************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/classes/Component.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst { Map, WeakMap } = __webpack_require__(/*! ../shared/poorlyfills.js */ \"./node_modules/hyperhtml/cjs/shared/poorlyfills.js\");\n\n// hyperHTML.Component is a very basic class\n// able to create Custom Elements like components\n// including the ability to listen to connect/disconnect\n// events via onconnect/ondisconnect attributes\n// Components can be created imperatively or declaratively.\n// The main difference is that declared components\n// will not automatically render on setState(...)\n// to simplify state handling on render.\nfunction Component() {\n  return this; // this is needed in Edge !!!\n}\nObject.defineProperty(exports, '__esModule', {value: true}).default = Component\n\n// Component is lazily setup because it needs\n// wire mechanism as lazy content\nfunction setup(content) {\n  // there are various weakly referenced variables in here\n  // and mostly are to use Component.for(...) static method.\n  const children = new WeakMap;\n  const create = Object.create;\n  const createEntry = (wm, id, component) => {\n    wm.set(id, component);\n    return component;\n  };\n  const get = (Class, info, context, id) => {\n    const relation = info.get(Class) || relate(Class, info);\n    switch (typeof id) {\n      case 'object':\n      case 'function':\n        const wm = relation.w || (relation.w = new WeakMap);\n        return wm.get(id) || createEntry(wm, id, new Class(context));\n      default:\n        const sm = relation.p || (relation.p = create(null));\n        return sm[id] || (sm[id] = new Class(context));\n    }\n  };\n  const relate = (Class, info) => {\n    const relation = {w: null, p: null};\n    info.set(Class, relation);\n    return relation;\n  };\n  const set = context => {\n    const info = new Map;\n    children.set(context, info);\n    return info;\n  };\n  // The Component Class\n  Object.defineProperties(\n    Component,\n    {\n      // Component.for(context[, id]) is a convenient way\n      // to automatically relate data/context to children components\n      // If not created yet, the new Component(context) is weakly stored\n      // and after that same instance would always be returned.\n      for: {\n        configurable: true,\n        value(context, id) {\n          return get(\n            this,\n            children.get(context) || set(context),\n            context,\n            id == null ?\n              'default' : id\n          );\n        }\n      }\n    }\n  );\n  Object.defineProperties(\n    Component.prototype,\n    {\n      // all events are handled with the component as context\n      handleEvent: {value(e) {\n        const ct = e.currentTarget;\n        this[\n          ('getAttribute' in ct && ct.getAttribute('data-call')) ||\n          ('on' + e.type)\n        ](e);\n      }},\n      // components will lazily define html or svg properties\n      // as soon as these are invoked within the .render() method\n      // Such render() method is not provided by the base class\n      // but it must be available through the Component extend.\n      // Declared components could implement a\n      // render(props) method too and use props as needed.\n      html: lazyGetter('html', content),\n      svg: lazyGetter('svg', content),\n      // the state is a very basic/simple mechanism inspired by Preact\n      state: lazyGetter('state', function () { return this.defaultState; }),\n      // it is possible to define a default state that'd be always an object otherwise\n      defaultState: {get() { return {}; }},\n      // setting some property state through a new object\n      // or a callback, triggers also automatically a render\n      // unless explicitly specified to not do so (render === false)\n      setState: {value(state, render) {\n        const target = this.state;\n        const source = typeof state === 'function' ? state.call(this, target) : state;\n        for (const key in source) target[key] = source[key];\n        if (render !== false) this.render();\n        return this;\n      }}\n    }\n  );\n}\nexports.setup = setup\n\n// instead of a secret key I could've used a WeakMap\n// However, attaching a property directly will result\n// into better performance with thousands of components\n// hanging around, and less memory pressure caused by the WeakMap\nconst lazyGetter = (type, fn) => {\n  const secret = '_' + type + '$';\n  return {\n    get() {\n      return this[secret] || (this[type] = fn.call(this, type));\n    },\n    set(value) {\n      Object.defineProperty(this, secret, {configurable: true, value});\n    }\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/classes/Component.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/classes/Wire.js":
/*!****************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/classes/Wire.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst { append } = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/hyperhtml/cjs/shared/utils.js\");\nconst { doc, fragment } = __webpack_require__(/*! ../shared/easy-dom.js */ \"./node_modules/hyperhtml/cjs/shared/easy-dom.js\");\n\nfunction Wire(childNodes) {\n  this.childNodes = childNodes;\n  this.length = childNodes.length;\n  this.first = childNodes[0];\n  this.last = childNodes[this.length - 1];\n}\nObject.defineProperty(exports, '__esModule', {value: true}).default = Wire\n\n// when a wire is inserted, all its nodes will follow\nWire.prototype.insert = function insert() {\n  const df = fragment(this.first);\n  append(df, this.childNodes);\n  return df;\n};\n\n// when a wire is removed, all its nodes must be removed as well\nWire.prototype.remove = function remove() {\n  const first = this.first;\n  const last = this.last;\n  if (this.length === 2) {\n    last.parentNode.removeChild(last);\n  } else {\n    const range = doc(first).createRange();\n    range.setStartBefore(this.childNodes[1]);\n    range.setEndAfter(last);\n    range.deleteContents();\n  }\n  return first;\n};\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/classes/Wire.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/hyper/render.js":
/*!****************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/hyper/render.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst {Map, WeakMap} = __webpack_require__(/*! ../shared/poorlyfills.js */ \"./node_modules/hyperhtml/cjs/shared/poorlyfills.js\");\nconst {UIDC, VOID_ELEMENTS} = __webpack_require__(/*! ../shared/constants.js */ \"./node_modules/hyperhtml/cjs/shared/constants.js\");\nconst Updates = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ../objects/Updates.js */ \"./node_modules/hyperhtml/cjs/objects/Updates.js\"));\nconst {\n  createFragment,\n  importNode,\n  unique\n} = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/hyperhtml/cjs/shared/utils.js\");\n\nconst {selfClosing} = __webpack_require__(/*! ../shared/re.js */ \"./node_modules/hyperhtml/cjs/shared/re.js\");\n\n// a weak collection of contexts that\n// are already known to hyperHTML\nconst bewitched = new WeakMap;\n\n// the collection of all template literals\n// since these are unique and immutable\n// for the whole application life-cycle\nconst templates = new Map;\n\n// better known as hyper.bind(node), the render is\n// the main tag function in charge of fully upgrading\n// or simply updating, contexts used as hyperHTML targets.\n// The `this` context is either a regular DOM node or a fragment.\nfunction render(template) {\n  const wicked = bewitched.get(this);\n  if (wicked && wicked.template === unique(template)) {\n    update.apply(wicked.updates, arguments);\n  } else {\n    upgrade.apply(this, arguments);\n  }\n  return this;\n}\n\n// an upgrade is in charge of collecting template info,\n// parse it once, if unknown, to map all interpolations\n// as single DOM callbacks, relate such template\n// to the current context, and render it after cleaning the context up\nfunction upgrade(template) {\n  template = unique(template);\n  const info =  templates.get(template) ||\n                createTemplate.call(this, template);\n  const fragment = importNode(this.ownerDocument, info.fragment);\n  const updates = Updates.create(fragment, info.paths);\n  bewitched.set(this, {template, updates});\n  update.apply(updates, arguments);\n  this.textContent = '';\n  this.appendChild(fragment);\n}\n\n// an update simply loops over all mapped DOM operations\nfunction update() {\n  const length = arguments.length;\n  for (let i = 1; i < length; i++) {\n    this[i - 1](arguments[i]);\n  }\n}\n\n// a template can be used to create a document fragment\n// aware of all interpolations and with a list\n// of paths used to find once those nodes that need updates,\n// no matter if these are attributes, text nodes, or regular one\nfunction createTemplate(template) {\n  const paths = [];\n  const html = template.join(UIDC).replace(SC_RE, SC_PLACE);\n  const fragment = createFragment(this, html);\n  Updates.find(fragment, paths, template.slice());\n  const info = {fragment, paths};\n  templates.set(template, info);\n  return info;\n}\n\n// some node could be special though, like a custom element\n// with a self closing tag, which should work through these changes.\nconst SC_RE = selfClosing;\nconst SC_PLACE = ($0, $1, $2) => {\n  return VOID_ELEMENTS.test($1) ? $0 : ('<' + $1 + $2 + '></' + $1 + '>');\n};\n\nObject.defineProperty(exports, '__esModule', {value: true}).default = render;\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/hyper/render.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/hyper/wire.js":
/*!**************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/hyper/wire.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst {ELEMENT_NODE, SVG_NAMESPACE} = __webpack_require__(/*! ../shared/constants.js */ \"./node_modules/hyperhtml/cjs/shared/constants.js\");\nconst {WeakMap, trim} = __webpack_require__(/*! ../shared/poorlyfills.js */ \"./node_modules/hyperhtml/cjs/shared/poorlyfills.js\");\nconst {fragment} = __webpack_require__(/*! ../shared/easy-dom.js */ \"./node_modules/hyperhtml/cjs/shared/easy-dom.js\");\nconst {append, slice, unique} = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/hyperhtml/cjs/shared/utils.js\");\nconst Wire = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ../classes/Wire.js */ \"./node_modules/hyperhtml/cjs/classes/Wire.js\"));\nconst render = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ./render.js */ \"./node_modules/hyperhtml/cjs/hyper/render.js\"));\n\n// all wires used per each context\nconst wires = new WeakMap;\n\n// A wire is a callback used as tag function\n// to lazily relate a generic object to a template literal.\n// hyper.wire(user)`<div id=user>${user.name}</div>`; => the div#user\n// This provides the ability to have a unique DOM structure\n// related to a unique JS object through a reusable template literal.\n// A wire can specify a type, as svg or html, and also an id\n// via html:id or :id convention. Such :id allows same JS objects\n// to be associated to different DOM structures accordingly with\n// the used template literal without losing previously rendered parts.\nconst wire = (obj, type) => obj == null ?\n  content(type || 'html') :\n  weakly(obj, type || 'html');\n\n// A wire content is a virtual reference to one or more nodes.\n// It's represented by either a DOM node, or an Array.\n// In both cases, the wire content role is to simply update\n// all nodes through the list of related callbacks.\n// In few words, a wire content is like an invisible parent node\n// in charge of updating its content like a bound element would do.\nconst content = type => {\n  let wire, container, content, template, updates;\n  return function (statics) {\n    statics = unique(statics);\n    let setup = template !== statics;\n    if (setup) {\n      template = statics;\n      content = fragment(document);\n      container = type === 'svg' ?\n        document.createElementNS(SVG_NAMESPACE, 'svg') :\n        content;\n      updates = render.bind(container);\n    }\n    updates.apply(null, arguments);\n    if (setup) {\n      if (type === 'svg') {\n        append(content, slice.call(container.childNodes));\n      }\n      wire = wireContent(content);\n    }\n    return wire;\n  };\n};\n\n// wires are weakly created through objects.\n// Each object can have multiple wires associated\n// and this is thanks to the type + :id feature.\nconst weakly = (obj, type) => {\n  const i = type.indexOf(':');\n  let wire = wires.get(obj);\n  let id = type;\n  if (-1 < i) {\n    id = type.slice(i + 1);\n    type = type.slice(0, i) || 'html';\n  }\n  if (!wire) wires.set(obj, wire = {});\n  return wire[id] || (wire[id] = content(type));\n};\n\n// a document fragment loses its nodes as soon\n// as it's appended into another node.\n// This would easily lose wired content\n// so that on a second render call, the parent\n// node wouldn't know which node was there\n// associated to the interpolation.\n// To prevent hyperHTML to forget about wired nodes,\n// these are either returned as Array or, if there's ony one entry,\n// as single referenced node that won't disappear from the fragment.\n// The initial fragment, at this point, would be used as unique reference.\nconst wireContent = node => {\n  const childNodes = node.childNodes;\n  const length = childNodes.length;\n  const wireNodes = [];\n  for (let i = 0; i < length; i++) {\n    let child = childNodes[i];\n    if (\n      child.nodeType === ELEMENT_NODE ||\n      trim.call(child.textContent).length !== 0\n    ) {\n      wireNodes.push(child);\n    }\n  }\n  return wireNodes.length === 1 ? wireNodes[0] : new Wire(wireNodes);\n};\n\nexports.content = content;\nexports.weakly = weakly;\nObject.defineProperty(exports, '__esModule', {value: true}).default = wire;\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/hyper/wire.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/index.js":
/*!*********************************************!*\
  !*** ./node_modules/hyperhtml/cjs/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*! (c) Andrea Giammarchi (ISC) */\n\nconst Component = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ./classes/Component.js */ \"./node_modules/hyperhtml/cjs/classes/Component.js\"));\nconst {setup} = __webpack_require__(/*! ./classes/Component.js */ \"./node_modules/hyperhtml/cjs/classes/Component.js\");\nconst Intent = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ./objects/Intent.js */ \"./node_modules/hyperhtml/cjs/objects/Intent.js\"));\nconst wire = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ./hyper/wire.js */ \"./node_modules/hyperhtml/cjs/hyper/wire.js\"));\nconst {content, weakly} = __webpack_require__(/*! ./hyper/wire.js */ \"./node_modules/hyperhtml/cjs/hyper/wire.js\");\nconst render = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ./hyper/render.js */ \"./node_modules/hyperhtml/cjs/hyper/render.js\"));\nconst diff = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ./shared/domdiff.js */ \"./node_modules/hyperhtml/cjs/shared/domdiff.js\"));\n\n// all functions are self bound to the right context\n// you can do the following\n// const {bind, wire} = hyperHTML;\n// and use them right away: bind(node)`hello!`;\nconst bind = context => render.bind(context);\nconst define = Intent.define;\n\nhyper.Component = Component;\nhyper.bind = bind;\nhyper.define = define;\nhyper.diff = diff;\nhyper.hyper = hyper;\nhyper.wire = wire;\n\n// the wire content is the lazy defined\n// html or svg property of each hyper.Component\nsetup(content);\n\n// everything is exported directly or through the\n// hyperHTML callback, when used as top level script\nexports.Component = Component;\nexports.bind = bind;\nexports.define = define;\nexports.diff = diff;\nexports.hyper = hyper;\nexports.wire = wire;\n\n// by default, hyperHTML is a smart function\n// that \"magically\" understands what's the best\n// thing to do with passed arguments\nfunction hyper(HTML) {\n  return arguments.length < 2 ?\n    (HTML == null ?\n      content('html') :\n      (typeof HTML === 'string' ?\n        hyper.wire(null, HTML) :\n        ('raw' in HTML ?\n          content('html')(HTML) :\n          ('nodeType' in HTML ?\n            hyper.bind(HTML) :\n            weakly(HTML, 'html')\n          )\n        )\n      )) :\n    ('raw' in HTML ?\n      content('html') : hyper.wire\n    ).apply(null, arguments);\n}\nObject.defineProperty(exports, '__esModule', {value: true}).default = hyper\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/index.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/objects/Intent.js":
/*!******************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/objects/Intent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst intents = {};\nconst keys = [];\nconst hasOwnProperty = intents.hasOwnProperty;\n\nlet length = 0;\n\nObject.defineProperty(exports, '__esModule', {value: true}).default = {\n\n  // hyperHTML.define('intent', (object, update) => {...})\n  // can be used to define a third parts update mechanism\n  // when every other known mechanism failed.\n  // hyper.define('user', info => info.name);\n  // hyper(node)`<p>${{user}}</p>`;\n  define: (intent, callback) => {\n    if (!(intent in intents)) {\n      length = keys.push(intent);\n    }\n    intents[intent] = callback;\n  },\n\n  // this method is used internally as last resort\n  // to retrieve a value out of an object\n  invoke: (object, callback) => {\n    for (let i = 0; i < length; i++) {\n      let key = keys[i];\n      if (hasOwnProperty.call(object, key)) {\n        return intents[key](object[key], callback);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/objects/Intent.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/objects/Path.js":
/*!****************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/objects/Path.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst {\n  COMMENT_NODE,\n  DOCUMENT_FRAGMENT_NODE,\n  ELEMENT_NODE\n} = __webpack_require__(/*! ../shared/constants.js */ \"./node_modules/hyperhtml/cjs/shared/constants.js\");\n\n// every template literal interpolation indicates\n// a precise target in the DOM the template is representing.\n// `<p id=${'attribute'}>some ${'content'}</p>`\n// hyperHTML finds only once per template literal,\n// hence once per entire application life-cycle,\n// all nodes that are related to interpolations.\n// These nodes are stored as indexes used to retrieve,\n// once per upgrade, nodes that will change on each future update.\n// A path example is [2, 0, 1] representing the operation:\n// node.childNodes[2].childNodes[0].childNodes[1]\n// Attributes are addressed via their owner node and their name.\nconst createPath = node => {\n  const path = [];\n  let parentNode;\n  switch (node.nodeType) {\n    case ELEMENT_NODE:\n    case DOCUMENT_FRAGMENT_NODE:\n      parentNode = node;\n      break;\n    case COMMENT_NODE:\n      parentNode = node.parentNode;\n      prepend(path, parentNode, node);\n      break;\n    default:\n      parentNode = node.ownerElement;\n      break;\n  }\n  for (\n    node = parentNode;\n    (parentNode = parentNode.parentNode);\n    node = parentNode\n  ) {\n    prepend(path, parentNode, node);\n  }\n  return path;\n};\n\nconst prepend = (path, parent, node) => {\n  path.unshift(path.indexOf.call(parent.childNodes, node));\n};\n\nObject.defineProperty(exports, '__esModule', {value: true}).default = {\n  create: (type, node, name) => ({type, name, node, path: createPath(node)}),\n  find: (node, path) => {\n    const length = path.length;\n    for (let i = 0; i < length; i++) {\n      node = node.childNodes[path[i]];\n    }\n    return node;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/objects/Path.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/objects/Style.js":
/*!*****************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/objects/Style.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/constants.js\nconst IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;\n\n// style is handled as both string and object\n// even if the target is an SVG element (consistency)\nObject.defineProperty(exports, '__esModule', {value: true}).default = (node, original, isSVG) => {\n  if (isSVG) {\n    const style = original.cloneNode(true);\n    style.value = '';\n    node.setAttributeNode(style);\n    return update(style, isSVG);\n  }\n  return update(node.style, isSVG);\n};\n\n// the update takes care or changing/replacing\n// only properties that are different or\n// in case of string, the whole node\nconst update = (style, isSVG) => {\n  let oldType, oldValue;\n  return newValue => {\n    switch (typeof newValue) {\n      case 'object':\n        if (newValue) {\n          if (oldType === 'object') {\n            if (!isSVG) {\n              if (oldValue !== newValue) {\n                for (const key in oldValue) {\n                  if (!(key in newValue)) {\n                    style[key] = '';\n                  }\n                }\n              }\n            }\n          } else {\n            if (isSVG) style.value = '';\n            else style.cssText = '';\n          }\n          const info = isSVG ? {} : style;\n          for (const key in newValue) {\n            const value = newValue[key];\n            info[key] = typeof value === 'number' &&\n                        !IS_NON_DIMENSIONAL.test(key) ?\n                          (value + 'px') : value;\n          }\n          oldType = 'object';\n          if (isSVG) style.value = toStyle((oldValue = info));\n          else oldValue = newValue;\n          break;\n        }\n      default:\n        if (oldValue != newValue) {\n          oldType = 'string';\n          oldValue = newValue;\n          if (isSVG) style.value = newValue || '';\n          else style.cssText = newValue || '';\n        }\n        break;\n    }\n  };\n};\n\nconst hyphen = /([^A-Z])([A-Z]+)/g;\nconst ized = ($0, $1, $2) => $1 + '-' + $2.toLowerCase();\nconst toStyle = object => {\n  const css = [];\n  for (const key in object) {\n    css.push(key.replace(hyphen, ized), ':', object[key], ';');\n  }\n  return css.join('');\n};\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/objects/Style.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/objects/Updates.js":
/*!*******************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/objects/Updates.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst {\n  CONNECTED, DISCONNECTED, COMMENT_NODE, DOCUMENT_FRAGMENT_NODE, ELEMENT_NODE, TEXT_NODE, OWNER_SVG_ELEMENT, SHOULD_USE_TEXT_CONTENT, UID, UIDC\n} = __webpack_require__(/*! ../shared/constants.js */ \"./node_modules/hyperhtml/cjs/shared/constants.js\");\n\nconst Component = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ../classes/Component.js */ \"./node_modules/hyperhtml/cjs/classes/Component.js\"));\nconst Wire = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ../classes/Wire.js */ \"./node_modules/hyperhtml/cjs/classes/Wire.js\"));\nconst Path = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ./Path.js */ \"./node_modules/hyperhtml/cjs/objects/Path.js\"));\nconst Style = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ./Style.js */ \"./node_modules/hyperhtml/cjs/objects/Style.js\"));\nconst Intent = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ./Intent.js */ \"./node_modules/hyperhtml/cjs/objects/Intent.js\"));\nconst domdiff = (m => m.__esModule ? m.default : m)(__webpack_require__(/*! ../shared/domdiff.js */ \"./node_modules/hyperhtml/cjs/shared/domdiff.js\"));\n// see /^script$/i.test(nodeName) bit down here\n// import { create as createElement, text } from '../shared/easy-dom.js';\nconst { text } = __webpack_require__(/*! ../shared/easy-dom.js */ \"./node_modules/hyperhtml/cjs/shared/easy-dom.js\");\nconst { Event, WeakSet, isArray, trim } = __webpack_require__(/*! ../shared/poorlyfills.js */ \"./node_modules/hyperhtml/cjs/shared/poorlyfills.js\");\nconst { createFragment, slice } = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/hyperhtml/cjs/shared/utils.js\");\n\n// hyper.Component have a connected/disconnected\n// mechanism provided by MutationObserver\n// This weak set is used to recognize components\n// as DOM node that needs to trigger connected/disconnected events\nconst components = new WeakSet;\n\n// a basic dictionary used to filter already cached attributes\n// while looking for special hyperHTML values.\nfunction Cache() {}\nCache.prototype = Object.create(null);\n\n// returns an intent to explicitly inject content as html\nconst asHTML = html => ({html});\n\n// returns nodes from wires and components\nconst asNode = (item, i) => {\n  return 'ELEMENT_NODE' in item ?\n    item :\n    (item.constructor === Wire ?\n      // in the Wire case, the content can be\n      // removed, post-pended, inserted, or pre-pended and\n      // all these cases are handled by domdiff already\n      /* istanbul ignore next */\n      ((1 / i) < 0 ?\n        (i ? item.remove() : item.last) :\n        (i ? item.insert() : item.first)) :\n      asNode(item.render(), i));\n}\n\n// returns true if domdiff can handle the value\nconst canDiff = value =>  'ELEMENT_NODE' in value ||\nvalue instanceof Wire ||\nvalue instanceof Component;\n\n// updates are created once per context upgrade\n// within the main render function (../hyper/render.js)\n// These are an Array of callbacks to invoke passing\n// each interpolation value.\n// Updates can be related to any kind of content,\n// attributes, or special text-only cases such <style>\n// elements or <textarea>\nconst create = (root, paths) => {\n  const updates = [];\n  const length = paths.length;\n  for (let i = 0; i < length; i++) {\n    const info = paths[i];\n    const node = Path.find(root, info.path);\n    switch (info.type) {\n      case 'any':\n        updates.push(setAnyContent(node, []));\n        break;\n      case 'attr':\n        updates.push(setAttribute(node, info.name, info.node));\n        break;\n      case 'text':\n        updates.push(setTextContent(node));\n        node.textContent = '';\n        break;\n    }\n  }\n  return updates;\n};\n\n// finding all paths is a one-off operation performed\n// when a new template literal is used.\n// The goal is to map all target nodes that will be\n// used to update content/attributes every time\n// the same template literal is used to create content.\n// The result is a list of paths related to the template\n// with all the necessary info to create updates as\n// list of callbacks that target directly affected nodes.\nconst find = (node, paths, parts) => {\n  const childNodes = node.childNodes;\n  const length = childNodes.length;\n  for (let i = 0; i < length; i++) {\n    let child = childNodes[i];\n    switch (child.nodeType) {\n      case ELEMENT_NODE:\n        findAttributes(child, paths, parts);\n        find(child, paths, parts);\n        break;\n      case COMMENT_NODE:\n        if (child.textContent === UID) {\n          parts.shift();\n          paths.push(\n            // basicHTML or other non standard engines\n            // might end up having comments in nodes\n            // where they shouldn't, hence this check.\n            SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ?\n              Path.create('text', node) :\n              Path.create('any', child)\n          );\n        }\n        break;\n      case TEXT_NODE:\n        // the following ignore is actually covered by browsers\n        // only basicHTML ends up on previous COMMENT_NODE case\n        // instead of TEXT_NODE because it knows nothing about\n        // special style or textarea behavior\n        /* istanbul ignore if */\n        if (\n          SHOULD_USE_TEXT_CONTENT.test(node.nodeName) &&\n          trim.call(child.textContent) === UIDC\n        ) {\n          parts.shift();\n          paths.push(Path.create('text', node));\n        }\n        break;\n    }\n  }\n};\n\n// attributes are searched via unique hyperHTML id value.\n// Despite HTML being case insensitive, hyperHTML is able\n// to recognize attributes by name in a caseSensitive way.\n// This plays well with Custom Elements definitions\n// and also with XML-like environments, without trusting\n// the resulting DOM but the template literal as the source of truth.\n// IE/Edge has a funny bug with attributes and these might be duplicated.\n// This is why there is a cache in charge of being sure no duplicated\n// attributes are ever considered in future updates.\nconst findAttributes = (node, paths, parts) => {\n  const cache = new Cache;\n  const attributes = node.attributes;\n  const array = slice.call(attributes);\n  const remove = [];\n  const length = array.length;\n  for (let i = 0; i < length; i++) {\n    const attribute = array[i];\n    if (attribute.value === UID) {\n      const name = attribute.name;\n      // the following ignore is covered by IE\n      // and the IE9 double viewBox test\n      /* istanbul ignore else */\n      if (!(name in cache)) {\n        const realName = parts.shift().replace(/^(?:|[\\S\\s]*?\\s)(\\S+?)=['\"]?$/, '$1');\n        cache[name] = attributes[realName] ||\n                      // the following ignore is covered by browsers\n                      // while basicHTML is already case-sensitive\n                      /* istanbul ignore next */\n                      attributes[realName.toLowerCase()];\n        paths.push(Path.create('attr', cache[name], realName));\n      }\n      remove.push(attribute);\n    }\n  }\n  const len = remove.length;\n  for (let i = 0; i < len; i++) {\n    // Edge HTML bug #16878726\n    const attribute = remove[i];\n    if (/^id$/i.test(attribute.name))\n      node.removeAttribute(attribute.name);\n    // standard browsers would work just fine here\n    else\n      node.removeAttributeNode(remove[i]);\n  }\n\n  // This is a very specific Firefox/Safari issue\n  // but since it should be a not so common pattern,\n  // it's probably worth patching regardless.\n  // Basically, scripts created through strings are death.\n  // You need to create fresh new scripts instead.\n  // TODO: is there any other node that needs such nonsense?\n  const nodeName = node.nodeName;\n  if (/^script$/i.test(nodeName)) {\n    // this used to be like that\n    // const script = createElement(node, nodeName);\n    // then Edge arrived and decided that scripts created\n    // through template documents aren't worth executing\n    // so it became this ... hopefully it won't hurt in the wild\n    const script = document.createElement(nodeName);\n    for (let i = 0; i < attributes.length; i++) {\n      script.setAttributeNode(attributes[i].cloneNode(true));\n    }\n    script.textContent = node.textContent;\n    node.parentNode.replaceChild(script, node);\n  }\n};\n\n// when a Promise is used as interpolation value\n// its result must be parsed once resolved.\n// This callback is in charge of understanding what to do\n// with a returned value once the promise is resolved.\nconst invokeAtDistance = (value, callback) => {\n  callback(value.placeholder);\n  if ('text' in value) {\n    Promise.resolve(value.text).then(String).then(callback);\n  } else if ('any' in value) {\n    Promise.resolve(value.any).then(callback);\n  } else if ('html' in value) {\n    Promise.resolve(value.html).then(asHTML).then(callback);\n  } else {\n    Promise.resolve(Intent.invoke(value, callback)).then(callback);\n  }\n};\n\n// quick and dirty way to check for Promise/ish values\nconst isPromise_ish = value => value != null && 'then' in value;\n\n// in a hyper(node)`<div>${content}</div>` case\n// everything could happen:\n//  * it's a JS primitive, stored as text\n//  * it's null or undefined, the node should be cleaned\n//  * it's a component, update the content by rendering it\n//  * it's a promise, update the content once resolved\n//  * it's an explicit intent, perform the desired operation\n//  * it's an Array, resolve all values if Promises and/or\n//    update the node with the resulting list of content\nconst setAnyContent = (node, childNodes) => {\n  let fastPath = false;\n  let oldValue;\n  const anyContent = value => {\n    switch (typeof value) {\n      case 'string':\n      case 'number':\n      case 'boolean':\n        if (fastPath) {\n          if (oldValue !== value) {\n            oldValue = value;\n            childNodes[0].textContent = value;\n          }\n        } else {\n          fastPath = true;\n          oldValue = value;\n          childNodes = domdiff(\n            node.parentNode,\n            childNodes,\n            [text(node, value)],\n            asNode,\n            node\n          );\n        }\n        break;\n      case 'object':\n      case 'undefined':\n        if (value == null) {\n          fastPath = false;\n          childNodes = domdiff(\n            node.parentNode,\n            childNodes,\n            [],\n            asNode,\n            node\n          );\n          break;\n        }\n      default:\n        fastPath = false;\n        oldValue = value;\n        if (isArray(value)) {\n          if (value.length === 0) {\n            if (childNodes.length) {\n              childNodes = domdiff(\n                node.parentNode,\n                childNodes,\n                [],\n                asNode,\n                node\n              );\n            }\n          } else {\n            switch (typeof value[0]) {\n              case 'string':\n              case 'number':\n              case 'boolean':\n                anyContent({html: value});\n                break;\n              case 'object':\n                if (isArray(value[0])) {\n                  value = value.concat.apply([], value);\n                }\n                if (isPromise_ish(value[0])) {\n                  Promise.all(value).then(anyContent);\n                  break;\n                }\n              default:\n                childNodes = domdiff(\n                  node.parentNode,\n                  childNodes,\n                  value,\n                  asNode,\n                  node\n                );\n                break;\n            }\n          }\n        } else if (canDiff(value)) {\n          childNodes = domdiff(\n            node.parentNode,\n            childNodes,\n            value.nodeType === DOCUMENT_FRAGMENT_NODE ?\n              slice.call(value.childNodes) :\n              [value],\n            asNode,\n            node\n          );\n        } else if (isPromise_ish(value)) {\n          value.then(anyContent);\n        } else if ('placeholder' in value) {\n          invokeAtDistance(value, anyContent);\n        } else if ('text' in value) {\n          anyContent(String(value.text));\n        } else if ('any' in value) {\n          anyContent(value.any);\n        } else if ('html' in value) {\n          childNodes = domdiff(\n            node.parentNode,\n            childNodes,\n            slice.call(\n              createFragment(\n                node,\n                [].concat(value.html).join('')\n              ).childNodes\n            ),\n            asNode,\n            node\n          );\n        } else if ('length' in value) {\n          anyContent(slice.call(value));\n        } else {\n          anyContent(Intent.invoke(value, anyContent));\n        }\n        break;\n    }\n  };\n  return anyContent;\n};\n\n// there are four kind of attributes, and related behavior:\n//  * events, with a name starting with `on`, to add/remove event listeners\n//  * special, with a name present in their inherited prototype, accessed directly\n//  * regular, accessed through get/setAttribute standard DOM methods\n//  * style, the only regular attribute that also accepts an object as value\n//    so that you can style=${{width: 120}}. In this case, the behavior has been\n//    fully inspired by Preact library and its simplicity.\nconst setAttribute = (node, name, original) => {\n  const isSVG = OWNER_SVG_ELEMENT in node;\n  let oldValue;\n  // if the attribute is the style one\n  // handle it differently from others\n  if (name === 'style') {\n    return Style(node, original, isSVG);\n  }\n  // the name is an event one,\n  // add/remove event listeners accordingly\n  else if (/^on/.test(name)) {\n    let type = name.slice(2);\n    if (type === CONNECTED || type === DISCONNECTED) {\n      if (notObserving) {\n        notObserving = false;\n        observe();\n      }\n      components.add(node);\n    }\n    else if (name.toLowerCase() in node) {\n      type = type.toLowerCase();\n    }\n    return newValue => {\n      if (oldValue !== newValue) {\n        if (oldValue) node.removeEventListener(type, oldValue, false);\n        oldValue = newValue;\n        if (newValue) node.addEventListener(type, newValue, false);\n      }\n    };\n  }\n  // the attribute is special ('value' in input)\n  // and it's not SVG *or* the name is exactly data,\n  // in this case assign the value directly\n  else if (name === 'data' || (!isSVG && name in node)) {\n    return newValue => {\n      if (oldValue !== newValue) {\n        oldValue = newValue;\n        if (node[name] !== newValue) {\n          node[name] = newValue;\n          if (newValue == null) {\n            node.removeAttribute(name);\n          }\n        }\n      }\n    };\n  }\n  // in every other case, use the attribute node as it is\n  // update only the value, set it as node only when/if needed\n  else {\n    let owner = false;\n    const attribute = original.cloneNode(true);\n    return newValue => {\n      if (oldValue !== newValue) {\n        oldValue = newValue;\n        if (attribute.value !== newValue) {\n          if (newValue == null) {\n            if (owner) {\n              owner = false;\n              node.removeAttributeNode(attribute);\n            }\n            attribute.value = newValue;\n          } else {\n            attribute.value = newValue;\n            if (!owner) {\n              owner = true;\n              node.setAttributeNode(attribute);\n            }\n          }\n        }\n      }\n    };\n  }\n};\n\n// style or textareas don't accept HTML as content\n// it's pointless to transform or analyze anything\n// different from text there but it's worth checking\n// for possible defined intents.\nconst setTextContent = node => {\n  let oldValue;\n  const textContent = value => {\n    if (oldValue !== value) {\n      oldValue = value;\n      if (typeof value === 'object' && value) {\n        if (isPromise_ish(value)) {\n          value.then(textContent);\n        } else if ('placeholder' in value) {\n          invokeAtDistance(value, textContent);\n        } else if ('text' in value) {\n          textContent(String(value.text));\n        } else if ('any' in value) {\n          textContent(value.any);\n        } else if ('html' in value) {\n          textContent([].concat(value.html).join(''));\n        } else if ('length' in value) {\n          textContent(slice.call(value).join(''));\n        } else {\n          textContent(Intent.invoke(value, textContent));\n        }\n      } else {\n        node.textContent = value == null ? '' : value;\n      }\n    }\n  };\n  return textContent;\n};\n\nObject.defineProperty(exports, '__esModule', {value: true}).default = {create, find};\n\n// hyper.Components might need connected/disconnected notifications\n// used by components and their onconnect/ondisconnect callbacks.\n// When one of these callbacks is encountered,\n// the document starts being observed.\nlet notObserving = true;\nfunction observe() {\n\n  // when hyper.Component related DOM nodes\n  // are appended or removed from the live tree\n  // these might listen to connected/disconnected events\n  // This utility is in charge of finding all components\n  // involved in the DOM update/change and dispatch\n  // related information to them\n  const dispatchAll = (nodes, type) => {\n    const event = new Event(type);\n    const length = nodes.length;\n    for (let i = 0; i < length; i++) {\n      let node = nodes[i];\n      if (node.nodeType === ELEMENT_NODE) {\n        dispatchTarget(node, event);\n      }\n    }\n  };\n\n  // the way it's done is via the components weak set\n  // and recursively looking for nested components too\n  const dispatchTarget = (node, event) => {\n    if (components.has(node)) {\n      node.dispatchEvent(event);\n    }\n\n    const children = node.children;\n    const length = children.length;\n    for (let i = 0; i < length; i++) {\n      dispatchTarget(children[i], event);\n    }\n  }\n\n  // The MutationObserver is the best way to implement that\n  // but there is a fallback to deprecated DOMNodeInserted/Removed\n  // so that even older browsers/engines can help components life-cycle\n  try {\n    (new MutationObserver(records => {\n      const length = records.length;\n      for (let i = 0; i < length; i++) {\n        let record = records[i];\n        dispatchAll(record.removedNodes, DISCONNECTED);\n        dispatchAll(record.addedNodes, CONNECTED);\n      }\n    })).observe(document, {subtree: true, childList: true});\n  } catch(o_O) {\n    document.addEventListener('DOMNodeRemoved', event => {\n      dispatchAll([event.target], DISCONNECTED);\n    }, false);\n    document.addEventListener('DOMNodeInserted', event => {\n      dispatchAll([event.target], CONNECTED);\n    }, false);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/objects/Updates.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/shared/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/shared/constants.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst G = document.defaultView;\nexports.G = G;\n\n// Node.CONSTANTS\n// 'cause some engine has no global Node defined\n// (i.e. Node, NativeScript, basicHTML ... )\nconst ELEMENT_NODE = 1;\nexports.ELEMENT_NODE = ELEMENT_NODE;\nconst ATTRIBUTE_NODE = 2;\nexports.ATTRIBUTE_NODE = ATTRIBUTE_NODE;\nconst TEXT_NODE = 3;\nexports.TEXT_NODE = TEXT_NODE;\nconst COMMENT_NODE = 8;\nexports.COMMENT_NODE = COMMENT_NODE;\nconst DOCUMENT_FRAGMENT_NODE = 11;\nexports.DOCUMENT_FRAGMENT_NODE = DOCUMENT_FRAGMENT_NODE;\n\n// HTML related constants\nconst VOID_ELEMENTS = /^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i;\nexports.VOID_ELEMENTS = VOID_ELEMENTS;\n\n// SVG related constants\nconst OWNER_SVG_ELEMENT = 'ownerSVGElement';\nexports.OWNER_SVG_ELEMENT = OWNER_SVG_ELEMENT;\nconst SVG_NAMESPACE = 'http://www.w3.org/2000/svg';\nexports.SVG_NAMESPACE = SVG_NAMESPACE;\n\n// Custom Elements / MutationObserver constants\nconst CONNECTED = 'connected';\nexports.CONNECTED = CONNECTED;\nconst DISCONNECTED = 'dis' + CONNECTED;\nexports.DISCONNECTED = DISCONNECTED;\n\n// hyperHTML related constants\nconst EXPANDO = '_hyper: ';\nexports.EXPANDO = EXPANDO;\nconst SHOULD_USE_TEXT_CONTENT = /^style|textarea$/i;\nexports.SHOULD_USE_TEXT_CONTENT = SHOULD_USE_TEXT_CONTENT;\nconst UID = EXPANDO + ((Math.random() * new Date) | 0) + ';';\nexports.UID = UID;\nconst UIDC = '<!--' + UID + '-->';\nexports.UIDC = UIDC;\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/shared/constants.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/shared/domdiff.js":
/*!******************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/shared/domdiff.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* AUTOMATICALLY IMPORTED, DO NOT MODIFY */\n/*! (c) 2017 Andrea Giammarchi (ISC) */\n\n/**\n * This code is a revisited port of the snabbdom vDOM diffing logic,\n * the same that fuels as fork Vue.js or other libraries.\n * @credits https://github.com/snabbdom/snabbdom\n */\n\nconst identity = O => O;\n\nconst remove = (parentNode, before, after) => {\n  const range = parentNode.ownerDocument.createRange();\n  range.setStartBefore(before);\n  range.setEndAfter(after);\n  range.deleteContents();\n};\n\nconst domdiff = (\n  parentNode,     // where changes happen\n  currentNodes,   // Array of current items/nodes\n  futureNodes,    // Array of future items/nodes\n  getNode,        // optional way to retrieve a node from an item\n  beforeNode      // optional item/node to use as insertBefore delimiter\n) => {\n  const get = getNode || identity;\n  const before = beforeNode == null ? null : get(beforeNode, 0);\n  let currentStart = 0, futureStart = 0;\n  let currentEnd = currentNodes.length - 1;\n  let currentStartNode = currentNodes[0];\n  let currentEndNode = currentNodes[currentEnd];\n  let futureEnd = futureNodes.length - 1;\n  let futureStartNode = futureNodes[0];\n  let futureEndNode = futureNodes[futureEnd];\n  while (currentStart <= currentEnd && futureStart <= futureEnd) {\n    if (currentStartNode == null) {\n      currentStartNode = currentNodes[++currentStart];\n    }\n    else if (currentEndNode == null) {\n      currentEndNode = currentNodes[--currentEnd];\n    }\n    else if (futureStartNode == null) {\n      futureStartNode = futureNodes[++futureStart];\n    }\n    else if (futureEndNode == null) {\n      futureEndNode = futureNodes[--futureEnd];\n    }\n    else if (currentStartNode == futureStartNode) {\n      currentStartNode = currentNodes[++currentStart];\n      futureStartNode = futureNodes[++futureStart];\n    }\n    else if (currentEndNode == futureEndNode) {\n      currentEndNode = currentNodes[--currentEnd];\n      futureEndNode = futureNodes[--futureEnd];\n    }\n    else if (currentStartNode == futureEndNode) {\n      parentNode.insertBefore(\n        get(currentStartNode, 1),\n        get(currentEndNode, -0).nextSibling\n      );\n      currentStartNode = currentNodes[++currentStart];\n      futureEndNode = futureNodes[--futureEnd];\n    }\n    else if (currentEndNode == futureStartNode) {\n      parentNode.insertBefore(\n        get(currentEndNode, 1),\n        get(currentStartNode, 0)\n      );\n      currentEndNode = currentNodes[--currentEnd];\n      futureStartNode = futureNodes[++futureStart];\n    }\n    else {\n      let index = currentNodes.indexOf(futureStartNode);\n      if (index < 0) {\n        parentNode.insertBefore(\n          get(futureStartNode, 1),\n          get(currentStartNode, 0)\n        );\n        futureStartNode = futureNodes[++futureStart];\n      }\n      else {\n        let i = index;\n        let f = futureStart;\n        while (\n          i <= currentEnd &&\n          f <= futureEnd &&\n          currentNodes[i] === futureNodes[f]\n        ) {\n          i++;\n          f++;\n        }\n        if (1 < (i - index)) {\n          if (--index === currentStart) {\n            parentNode.removeChild(get(currentStartNode, -1));\n          } else {\n            remove(\n              parentNode,\n              get(currentStartNode, -1),\n              get(currentNodes[index], -1)\n            );\n          }\n          currentStart = i;\n          futureStart = f;\n          currentStartNode = currentNodes[i];\n          futureStartNode = futureNodes[f];\n        } else {\n          const el = currentNodes[index];\n          currentNodes[index] = null;\n          parentNode.insertBefore(get(el, 1), get(currentStartNode, 0));\n          futureStartNode = futureNodes[++futureStart];\n        }\n      }\n    }\n  }\n  if (currentStart <= currentEnd || futureStart <= futureEnd) {\n    if (currentStart > currentEnd) {\n      const pin = futureNodes[futureEnd + 1];\n      const place = pin == null ? before : get(pin, 0);\n      if (futureStart === futureEnd) {\n        parentNode.insertBefore(get(futureNodes[futureStart], 1), place);\n      }\n      else {\n        const fragment = parentNode.ownerDocument.createDocumentFragment();\n        while (futureStart <= futureEnd) {\n          fragment.appendChild(get(futureNodes[futureStart++], 1));\n        }\n        parentNode.insertBefore(fragment, place);\n      }\n    }\n    else {\n      if (currentNodes[currentStart] == null) currentStart++;\n      if (currentStart === currentEnd) {\n        parentNode.removeChild(get(currentNodes[currentStart], -1));\n      }\n      else {\n        remove(\n          parentNode,\n          get(currentNodes[currentStart], -1),\n          get(currentNodes[currentEnd], -1)\n        );\n      }\n    }\n  }\n  return futureNodes;\n};\n\nObject.defineProperty(exports, '__esModule', {value: true}).default = domdiff;\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/shared/domdiff.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/shared/easy-dom.js":
/*!*******************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/shared/easy-dom.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// these are tiny helpers to simplify most common operations needed here\nconst create = (node, type) => doc(node).createElement(type);\nexports.create = create;\nconst doc = node => node.ownerDocument || node;\nexports.doc = doc;\nconst fragment = node => doc(node).createDocumentFragment();\nexports.fragment = fragment;\nconst text = (node, text) => doc(node).createTextNode(text);\nexports.text = text;\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/shared/easy-dom.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/shared/features-detection.js":
/*!*****************************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/shared/features-detection.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst {create, fragment, text} = __webpack_require__(/*! ./easy-dom.js */ \"./node_modules/hyperhtml/cjs/shared/easy-dom.js\");\n\nconst testFragment = fragment(document);\n\n// DOM4 node.append(...many)\nconst hasAppend = 'append' in testFragment;\nexports.hasAppend = hasAppend;\n\n// detect old browsers without HTMLTemplateElement content support\nconst hasContent = 'content' in create(document, 'template');\nexports.hasContent = hasContent;\n\n// IE 11 has problems with cloning templates: it \"forgets\" empty childNodes\ntestFragment.appendChild(text(testFragment, 'g'));\ntestFragment.appendChild(text(testFragment, ''));\nconst hasDoomedCloneNode = testFragment.cloneNode(true).childNodes.length === 1;\nexports.hasDoomedCloneNode = hasDoomedCloneNode;\n\n// old browsers need to fallback to cloneNode\n// Custom Elements V0 and V1 will work polyfilled\n// but native implementations need importNode instead\n// (specially Chromium and its old V0 implementation)\nconst hasImportNode = 'importNode' in document;\nexports.hasImportNode = hasImportNode;\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/shared/features-detection.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/shared/poorlyfills.js":
/*!**********************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/shared/poorlyfills.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst {G, UID} = __webpack_require__(/*! ./constants.js */ \"./node_modules/hyperhtml/cjs/shared/constants.js\");\n\n// you know that kind of basics you need to cover\n// your use case only but you don't want to bloat the library?\n// There's even a package in here:\n// https://www.npmjs.com/package/poorlyfills\n\n// used to dispatch simple events\nlet Event = G.Event;\ntry {\n  new Event('Event');\n} catch(o_O) {\n  Event = function (type) {\n    const e = document.createEvent('Event');\n    e.initEvent(type, false, false);\n    return e;\n  };\n}\nexports.Event = Event;\n\n// used to store template literals\nconst Map = G.Map || function Map() {\n  const keys = [], values = [];\n  return {\n    get(obj) {\n      return values[keys.indexOf(obj)];\n    },\n    set(obj, value) {\n      values[keys.push(obj) - 1] = value;\n    }\n  };\n};\nexports.Map = Map;\n\n// used to store wired content\nlet ID = 0;\nconst WeakMap = G.WeakMap || function WeakMap() {\n  const key = UID + ID++;\n  return {\n    get(obj) { return obj[key]; },\n    set(obj, value) {\n      Object.defineProperty(obj, key, {\n        configurable: true,\n        value\n      });\n    }\n  };\n};\nexports.WeakMap = WeakMap;\n\n// used to store hyper.Components\nconst WeakSet = G.WeakSet || function WeakSet() {\n  const wm = new WeakMap;\n  return {\n    add(obj) { wm.set(obj, true); },\n    has(obj) { return wm.get(obj) === true; }\n  };\n};\nexports.WeakSet = WeakSet;\n\n// used to be sure IE9 or older Androids work as expected\nconst isArray = Array.isArray || (toString =>\n  arr => toString.call(arr) === '[object Array]'\n)({}.toString);\nexports.isArray = isArray;\n\nconst trim = UID.trim || function () {\n  return this.replace(/^\\s+|\\s+$/g, '');\n};\nexports.trim = trim;\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/shared/poorlyfills.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/shared/re.js":
/*!*************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/shared/re.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// TODO:  I'd love to code-cover RegExp too here\n//        these are fundamental for this library\n\nconst spaces = ' \\\\f\\\\n\\\\r\\\\t';\nconst almostEverything = '[^ ' + spaces + '\\\\/>\"\\'=]+';\nconst attrName = '[ ' + spaces + ']+' + almostEverything;\nconst tagName = '<([A-Za-z]+[A-Za-z0-9:_-]*)((?:';\nconst attrPartials = '(?:=(?:\\'[^\\']*?\\'|\"[^\"]*?\"|<[^>]*?>|' + almostEverything + '))?)';\n\nconst attrSeeker = new RegExp(\n  tagName + attrName + attrPartials + '+)([ ' + spaces + ']*/?>)',\n  'g'\n);\n\nconst selfClosing = new RegExp(\n  tagName + attrName + attrPartials + '*)([ ' + spaces + ']*/>)',\n  'g'\n);\n\nexports.attrName = attrName;\nexports.attrSeeker = attrSeeker;\nexports.selfClosing = selfClosing;\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/shared/re.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/cjs/shared/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/hyperhtml/cjs/shared/utils.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst {attrName, attrSeeker} = __webpack_require__(/*! ./re.js */ \"./node_modules/hyperhtml/cjs/shared/re.js\");\n\nconst {\n  G,\n  OWNER_SVG_ELEMENT,\n  SVG_NAMESPACE,\n  UID,\n  UIDC\n} = __webpack_require__(/*! ./constants.js */ \"./node_modules/hyperhtml/cjs/shared/constants.js\");\n\nconst {\n  hasAppend,\n  hasContent,\n  hasDoomedCloneNode,\n  hasImportNode\n} = __webpack_require__(/*! ./features-detection.js */ \"./node_modules/hyperhtml/cjs/shared/features-detection.js\");\n\nconst {create, doc, fragment} = __webpack_require__(/*! ./easy-dom.js */ \"./node_modules/hyperhtml/cjs/shared/easy-dom.js\");\n\n// appends an array of nodes\n// to a generic node/fragment\n// When available, uses append passing all arguments at once\n// hoping that's somehow faster, even if append has more checks on type\nconst append = hasAppend ?\n  (node, childNodes) => {\n    node.append.apply(node, childNodes);\n  } :\n  (node, childNodes) => {\n    const length = childNodes.length;\n    for (let i = 0; i < length; i++) {\n      node.appendChild(childNodes[i]);\n    }\n  };\nexports.append = append;\n\nconst findAttributes = new RegExp('(' + attrName + '=)([\\'\"]?)' + UIDC + '\\\\2', 'gi');\nconst comments = ($0, $1, $2, $3) =>\n  '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;\nconst replaceAttributes = ($0, $1, $2) => $1 + ($2 || '\"') + UID + ($2 || '\"');\n\n// given a node and a generic HTML content,\n// create either an SVG or an HTML fragment\n// where such content will be injected\nconst createFragment = (node, html) =>\n  (OWNER_SVG_ELEMENT in node ?\n    SVGFragment :\n    HTMLFragment\n  )(node, html.replace(attrSeeker, comments));\nexports.createFragment = createFragment;\n\n// IE/Edge shenanigans proof cloneNode\n// it goes through all nodes manually\n// instead of relying the engine to suddenly\n// merge nodes together\nconst cloneNode = hasDoomedCloneNode ?\n  node => {\n    const clone = node.cloneNode();\n    const childNodes = node.childNodes ||\n                      // this is an excess of caution\n                      // but some node, in IE, might not\n                      // have childNodes property.\n                      // The following fallback ensure working code\n                      // in older IE without compromising performance\n                      // or any other browser/engine involved.\n                      /* istanbul ignore next */\n                      [];\n    const length = childNodes.length;\n    for (let i = 0; i < length; i++) {\n      clone.appendChild(cloneNode(childNodes[i]));\n    }\n    return clone;\n  } :\n  // the following ignore is due code-coverage\n  // combination of not having document.importNode\n  // but having a working node.cloneNode.\n  // This shenario is common on older Android/WebKit browsers\n  // but basicHTML here tests just two major cases:\n  // with document.importNode or with broken cloneNode.\n  /* istanbul ignore next */\n  node => node.cloneNode(true);\n\n// used to import html into fragments\nconst importNode = hasImportNode ?\n  (doc, node) => doc.importNode(node, true) :\n  (doc, node) => cloneNode(node)\nexports.importNode = importNode\n\n// just recycling a one-off array to use slice\n// in every needed place\nconst slice = [].slice;\nexports.slice = slice;\n\n// lazy evaluated, returns the unique identity\n// of a template literal, as tempalte literal itself.\n// By default, ES2015 template literals are unique\n// tag`a${1}z` === tag`a${2}z`\n// even if interpolated values are different\n// the template chunks are in a frozen Array\n// that is identical each time you use the same\n// literal to represent same static content\n// around its own interpolations.\nconst unique = template => TL(template);\nexports.unique = unique;\n\n// TL returns a unique version of the template\n// it needs lazy feature detection\n// (cannot trust literals with transpiled code)\nlet TL = template => {\n  if (\n    // TypeScript template literals are not standard\n    template.propertyIsEnumerable('raw') ||\n    (\n      // Firefox < 55 has not standard implementation neither\n      /Firefox\\/(\\d+)/.test((G.navigator || {}).userAgent) &&\n      parseFloat(RegExp.$1) < 55\n    )\n  ) {\n    // in these cases, address templates once\n    const templateObjects = {};\n    // but always return the same template\n    TL = template => {\n      const key = '_' + template.join(UID);\n      return templateObjects[key] || (\n        templateObjects[key] = template\n      );\n    };\n  }\n  else {\n    // make TL an identity like function\n    TL = template => template;\n  }\n  return TL(template);\n};\n\n// create document fragments via native template\n// with a fallback for browsers that won't be able\n// to deal with some injected element such <td> or others\nconst HTMLFragment = hasContent ?\n  (node, html) => {\n    const container = create(node, 'template');\n    container.innerHTML = html;\n    return container.content;\n  } :\n  (node, html) => {\n    const container = create(node, 'template');\n    const content = fragment(node);\n    if (/^[^\\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {\n      const selector = RegExp.$1;\n      container.innerHTML = '<table>' + html + '</table>';\n      append(content, slice.call(container.querySelectorAll(selector)));\n    } else {\n      container.innerHTML = html;\n      append(content, slice.call(container.childNodes));\n    }\n    return content;\n  };\n\n// creates SVG fragment with a fallback for IE that needs SVG\n// within the HTML content\nconst SVGFragment = hasContent ?\n  (node, html) => {\n    const content = fragment(node);\n    const container = doc(node).createElementNS(SVG_NAMESPACE, 'svg');\n    container.innerHTML = html;\n    append(content, slice.call(container.childNodes));\n    return content;\n  } :\n  (node, html) => {\n    const content = fragment(node);\n    const container = create(node, 'div');\n    container.innerHTML = '<svg xmlns=\"' + SVG_NAMESPACE + '\">' + html + '</svg>';\n    append(content, slice.call(container.firstChild.childNodes));\n    return content;\n  };\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/cjs/shared/utils.js?");

/***/ }),

/***/ "./src/const/MIME.js":
/*!***************************!*\
  !*** ./src/const/MIME.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar MIME = exports.MIME = {\n  HLS: 'application/x-mpegURL',\n  MP4: 'video/mp4'\n};\nexports.default = MIME;\n\n//# sourceURL=webpack:///./src/const/MIME.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! document-register-element */ \"./node_modules/document-register-element/build/document-register-element.js\");\n\nvar _toutVideoplayer = __webpack_require__(/*! ./tout-videoplayer.js */ \"./src/tout-videoplayer.js\");\n\nvar _toutVideoplayer2 = _interopRequireDefault(_toutVideoplayer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// register the element to the interface.\ncustomElements.define('tout-videoplayer', _toutVideoplayer2.default);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tout-videoplayer.js":
/*!*********************************!*\
  !*** ./src/tout-videoplayer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ \"./node_modules/babel-runtime/core-js/array/from.js\");\n\nvar _from2 = _interopRequireDefault(_from);\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)(['<div>\\n      <video controls></video>\\n    </div>'], ['<div>\\n      <video controls></video>\\n    </div>']);\n\nvar _cjs = __webpack_require__(/*! hyperhtml/cjs */ \"./node_modules/hyperhtml/cjs/index.js\");\n\nvar _cjs2 = _interopRequireDefault(_cjs);\n\nvar _childrenToSourceList = __webpack_require__(/*! ./util/childrenToSourceList.js */ \"./src/util/childrenToSourceList.js\");\n\nvar _childrenToSourceList2 = _interopRequireDefault(_childrenToSourceList);\n\nvar _findBestSource = __webpack_require__(/*! ./util/findBestSource.js */ \"./src/util/findBestSource.js\");\n\nvar _findBestSource2 = _interopRequireDefault(_findBestSource);\n\nvar _loadHLS = __webpack_require__(/*! ./util/loadHLS.js */ \"./src/util/loadHLS.js\");\n\nvar _loadHLS2 = _interopRequireDefault(_loadHLS);\n\nvar _hydrateSource = __webpack_require__(/*! ./util/hydrateSource.js */ \"./src/util/hydrateSource.js\");\n\nvar _hydrateSource2 = _interopRequireDefault(_hydrateSource);\n\nvar _MIME = __webpack_require__(/*! ./const/MIME.js */ \"./src/const/MIME.js\");\n\nvar _MIME2 = _interopRequireDefault(_MIME);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ToutVideoPlayer = function (_HTMLElement) {\n  (0, _inherits3.default)(ToutVideoPlayer, _HTMLElement);\n\n  // https://github.com/WebReflection/document-register-element#upgrading-the-constructor-context\n  function ToutVideoPlayer(self) {\n    var _this, _ret;\n\n    (0, _classCallCheck3.default)(this, ToutVideoPlayer);\n\n    self = (_this = (0, _possibleConstructorReturn3.default)(this, (ToutVideoPlayer.__proto__ || (0, _getPrototypeOf2.default)(ToutVideoPlayer)).call(this, self)), _this);\n    // create a hyperHTML render function bound to us.\n    self.hyperHTML = _cjs2.default.bind(self);\n\n    _this._sourceList = [];\n    return _ret = self, (0, _possibleConstructorReturn3.default)(_this, _ret);\n  }\n\n  /**\n   * (re)Renders the element based on current state.\n   */\n\n\n  (0, _createClass3.default)(ToutVideoPlayer, [{\n    key: 'render',\n    value: function render() {\n      // Rendering the content with hyperHTML.\n      return this.hyperHTML(_templateObject);\n    }\n\n    /**\n     * Triggered when the component is mounted on a DOM.\n     * Renders/Updates the element.\n     */\n\n  }, {\n    key: 'connectedCallback',\n    value: function connectedCallback() {\n      // console.log('connectedCallback');\n      // this.children is an HTMLCollection which is live.\n      // So we need to make a copy before we call render.\n      var children = (0, _from2.default)(this.children);\n      // Render first because we will need a video element to set the source.\n      this.render();\n\n      // set the sourceList based on the children\n      if (children.length > 0) {\n        // Convert any child <source> elements into source objects.\n        // Then hydrate those source objects.\n        // Finnaly start loading of the source by setting sourceList.\n        this.sourceList = (0, _childrenToSourceList2.default)(children).map(_hydrateSource2.default);\n      }\n\n      // listen for events\n      // document.addEventListener('click', this)\n    }\n\n    /**\n     * Triggered when the component is removed from a DOM.\n     * Clean up/Destroy the element.\n     */\n\n  }, {\n    key: 'disconnectedCallback',\n    value: function disconnectedCallback() {}\n    // stop listening to events\n    // document.removeEventListener('click', this);\n\n\n    /**\n     * When one of these attributes changes value, it triggers attributeChangedCallback\n     * @return {Array} attribute names.\n     */\n\n  }, {\n    key: 'attributeChangedCallback',\n\n    /**\n     * Triggered when an an observedAttribute has changed.\n     * @param {String} attrName - the attribute name.\n     * @param {Object} oldValue - the old value.\n     * @param {Object} newValue - the new value.\n     */\n    value: function attributeChangedCallback(attrName, oldValue, newValue) {\n      // we only care about changes.\n      if (oldValue === newValue) {\n        return;\n      }\n      // console.log('attributeChangedCallback', attrName, oldValue, newValue);\n\n      // Render so if we set src, the video element will exist.\n      //TODO: Fix this so we don't need to call render here.\n      //    : I think it's just an order of operations bug.\n      this.render();\n      this[attrName] = newValue;\n    }\n\n    /**\n     * EventListener Interface\n     * @param {Event} event - the event.\n     * @link https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38\n     */\n\n  }, {\n    key: 'handleEvent',\n    value: function handleEvent() {\n      // const { type, target } = event;\n      // re-render\n      this.render();\n    }\n\n    // https://html.spec.whatwg.org/multipage/media.html#attr-media-src\n    // > The src IDL attribute on media elements must reflect the content attribute of the same name\n\n  }, {\n    key: 'src',\n    get: function get() {\n      return this.getAttribute('src');\n    },\n    set: function set(value) {\n      // update the sourceList which is the real value used.\n      this.sourceList = [(0, _hydrateSource2.default)({\n        src: value\n      })];\n    }\n\n    /**\n     * An array of source objects.\n     * @return {Array}\n     */\n\n  }, {\n    key: 'sourceList',\n    get: function get() {\n      var _sourceList = this._sourceList;\n\n      return _sourceList;\n    }\n    /**\n     * Picks the best source from the list,\n     * loads any 3rd party support libraries,\n     * and sets srcObject once the player can handle the source type.\n     * @param {Array} value - Array of source objects.\n     */\n    ,\n    set: function set(value) {\n      var _this2 = this;\n\n      // make sure we have a value before trying to set.\n      if (!value || value.length === 0) {\n        return;\n      }\n      var hasHLSSupport = this.hasHLSSupport,\n          hasDashSupport = this.hasDashSupport;\n\n      var source = (0, _findBestSource2.default)(hasHLSSupport, hasDashSupport, value);\n\n      // Do we need to load the HLS Support?\n      if (!hasHLSSupport && source.type === _MIME2.default.HLS) {\n        // Attach the HLS library to our video element.\n        (0, _loadHLS2.default)().then(function (Hls) {\n          // Add HLS support to the existing elVideo\n          _this2.hls = new Hls();\n          _this2.hls.attachMedia(_this2.elVideo);\n          // Start loading the source now that we support it.\n          _this2.srcObject = source;\n        });\n      } else {\n        // The browser already supports the source.\n        this.srcObject = source;\n      }\n    }\n\n    /**\n     * Returns True if the browser supports HLS playback.\n     */\n\n  }, {\n    key: 'hasHLSSupport',\n    get: function get() {\n      var _supportsHLS = this._supportsHLS;\n      // once we know if we have support, use the cached value.\n      // this value can also be changed when loading 3rd party support.\n\n      if (typeof _supportsHLS !== 'undefined') {\n        return _supportsHLS;\n      }\n      // TODO: Store the result of the support check in storage\n      //     : That will allow other players to skip checking/creating empty video elements.\n      // check for support\n      var elVideo = document.createElement('video');\n      this._supportsHLS = elVideo.canPlayType(_MIME2.default.HLS) !== '';\n      return this._supportsHLS;\n    }\n\n    /**\n     * Returns the current source object to use.\n     * https://html.spec.whatwg.org/multipage/media.html#dom-media-srcobject\n     * @return {Object}\n     */\n\n  }, {\n    key: 'srcObject',\n    get: function get() {\n      return this._currentSrc;\n    }\n    /**\n     * Setting srcObject will start loading the video.\n     * This replicates standard DOM behaviour where the async call starts when setting src/srcObject\n     * @param  {Object} value\n     */\n    ,\n    set: function set(value) {\n      var elVideo = this.elVideo,\n          hasHLSSupport = this.hasHLSSupport,\n          hls = this.hls;\n\n      this._currentSrc = value;\n\n      // MP4 is easy because everyone supports it.\n      if (value.type === _MIME2.default.MP4) {\n        elVideo.src = value.src;\n      }\n      // Native HLS Support\n      else if (hasHLSSupport && value.type === _MIME2.default.HLS) {\n          elVideo.src = value.src;\n        }\n        // Use Hls.js API\n        else if (value.type === _MIME2.default.HLS) {\n            hls.loadSource(value.src);\n          } else {\n            throw new Error('Unsupported video type: \"' + value.type + '\"');\n          }\n    }\n  }, {\n    key: 'elVideo',\n    get: function get() {\n      return this.querySelector('video');\n    }\n  }], [{\n    key: 'observedAttributes',\n    get: function get() {\n      return ['src'];\n    }\n  }]);\n  return ToutVideoPlayer;\n}(HTMLElement);\n\nexports.default = ToutVideoPlayer;\n\n//# sourceURL=webpack:///./src/tout-videoplayer.js?");

/***/ }),

/***/ "./src/util/childrenToSourceList.js":
/*!******************************************!*\
  !*** ./src/util/childrenToSourceList.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = childrenToSourceList;\n/**\n * Converts an HTMLCollection of <source> elements into an array of source objects.\n * https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element\n * @param  {HTMLCollection} children\n * @return {Array}\n */\nfunction childrenToSourceList(children) {\n  return children.reduce(function (acc, elm) {\n    if (elm.nodeName !== 'SOURCE') {\n      return acc;\n    }\n    var src = elm.src,\n        type = elm.type;\n\n\n    acc.push({\n      src: src,\n      type: type\n    });\n    return acc;\n  }, []);\n}\n\n//# sourceURL=webpack:///./src/util/childrenToSourceList.js?");

/***/ }),

/***/ "./src/util/findBestSource.js":
/*!************************************!*\
  !*** ./src/util/findBestSource.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = findBestSource;\n\nvar _MIME = __webpack_require__(/*! ../const/MIME.js */ \"./src/const/MIME.js\");\n\nvar _MIME2 = _interopRequireDefault(_MIME);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Returns the best source object to load based on browser support.\n * @param  {Array} sourceList\n * @return {Object}\n */\nfunction findBestSource(hasHLSSupport, hasDashSupport, sourceList) {\n  var sourceHLS = sourceList.find(function (i) {\n    return i.type === _MIME2.default.HLS;\n  });\n  var sourceDash = sourceList.find(function (i) {\n    return i.type === _MIME2.default.DASH;\n  });\n  var sourceMP4 = sourceList.find(function (i) {\n    return i.type === _MIME2.default.MP4;\n  });\n\n  // HLS has mobile support, so it gets priority.\n  if (hasHLSSupport && sourceHLS) {\n    return sourceHLS;\n  }\n  // Use Dash if it's supported.\n  else if (hasDashSupport && sourceDash) {\n      return sourceDash;\n    }\n    // Load HLS support before picking anything else\n    else if (sourceHLS) {\n        return sourceHLS;\n      }\n      // Load Dash support before falling back to mp4\n      else if (sourceDash) {\n          return sourceDash;\n        }\n  // all else fails use mp4\n  return sourceMP4;\n}\n\n//# sourceURL=webpack:///./src/util/findBestSource.js?");

/***/ }),

/***/ "./src/util/hydrateSource.js":
/*!***********************************!*\
  !*** ./src/util/hydrateSource.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = hydrateSource;\n\nvar _sourceTypeFromFileName = __webpack_require__(/*! ./sourceTypeFromFileName.js */ \"./src/util/sourceTypeFromFileName.js\");\n\nvar _sourceTypeFromFileName2 = _interopRequireDefault(_sourceTypeFromFileName);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Turns a source like object into a full source object\n * @param  {Any} source - an object with `src` and optionally `type`\n * @return {Object} A full source object.\n */\nfunction hydrateSource(source) {\n  var src = source.src;\n  var type = source.type;\n\n  // if there is no type, try and figure it out\n\n  if (!type) {\n    type = (0, _sourceTypeFromFileName2.default)(src);\n  }\n\n  // Return the new source object.\n  return {\n    src: src,\n    type: type\n  };\n}\n\n//# sourceURL=webpack:///./src/util/hydrateSource.js?");

/***/ }),

/***/ "./src/util/loadHLS.js":
/*!*****************************!*\
  !*** ./src/util/loadHLS.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = loadHLS;\n/**\n * Load HLS support.\n * @return {Promise} then(Hls) returns the Hls class.\n */\nfunction loadHLS() {\n  //QUESTION: If window.Hls exists on the page, should we use it instead of loading our own support?\n  //        : The risk is that something would be incompatable, and the playback would fail.\n  //        : Also, the browser will de-dupe and cache, so the only cost is re-evaling the HLS script.\n  return fetch('https://cdn.jsdelivr.net/npm/hls.js@latest', {\n    method: 'GET'\n  }).then(function (response) {\n    return response.text();\n  }).then(function (scriptHLS) {\n    // We get the HLS script back as a string because we do not want to pollute the gloal any longer than we have to.\n    // Using the function constructor gives us more control and protection.\n    // eslint-disable-next-line no-new-func\n    var Hls = new Function(scriptHLS);\n    // the HLS library will set on window.Hls\n    // so we need to make sure it can, and remove it after it's done.\n    var existingHls = window.Hls;\n    // Run the script, allowing it to add to window\n    Hls();\n    // Pull off the initiated Hls library.\n    Hls = window.Hls;\n    // Restore whatever used to be on window.\n    window.Hls = existingHls;\n    return Hls;\n  }).catch(function (err) {\n    // eslint-disable-next-line no-console\n    console.error('fetch error', err);\n  });\n}\n\n//# sourceURL=webpack:///./src/util/loadHLS.js?");

/***/ }),

/***/ "./src/util/sourceTypeFromFileName.js":
/*!********************************************!*\
  !*** ./src/util/sourceTypeFromFileName.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = sourceTypeFromFileName;\n\nvar _MIME = __webpack_require__(/*! ../const/MIME.js */ \"./src/const/MIME.js\");\n\nvar _MIME2 = _interopRequireDefault(_MIME);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Returns the MIME Type based on file extention.\n * @param  {String} filename\n * @return {String}\n */\nfunction sourceTypeFromFileName(filename) {\n  if (filename.endsWith('.m3u8')) {\n    return _MIME2.default.HLS;\n  } else if (filename.endsWith('.mp4')) {\n    return _MIME2.default.MP4;\n  } else if (filename.endsWith('.mpd')) {\n    return _MIME2.default.DASH;\n  }\n  // unknown type\n  return '';\n}\n\n//# sourceURL=webpack:///./src/util/sourceTypeFromFileName.js?");

/***/ })

/******/ });