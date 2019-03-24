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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/b_/index.js":
/*!**********************************!*\
  !*** ./node_modules/b_/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global define: true */
(/* istanbul ignore next */
function (root, factory) {
    'use strict';
    if (true) {
        // CommonJS
        module.exports = factory();
    } else {}
})
(this, function () {
    /**
     *
     * @param {object} [options]
     * @param {string} [options.tailSpace='']
     * @param {string} [options.elementSeparator='__']
     * @param {string} [options.modSeparator='_']
     * @param {string} [options.modValueSeparator='_']
     * @param {string} [options.classSeparator=' ']
     * @param {string} [options.isFullModifier=true]
     * @param {string} [options.isFullBoolValue=false]
     *
     * @constructor
     */
    function BemFormatter(options) {
        // Case call BemFormatter() without new
        if (!(this instanceof  BemFormatter)) {
            return createBemFormatter(options);
        }

        options = options || {};
        this.tailSpace = options.tailSpace || '';
        this.elementSeparator = options.elementSeparator || '__';
        this.modSeparator = options.modSeparator || '_';
        this.modValueSeparator = options.modValueSeparator || '_';
        this.classSeparator = options.classSeparator || ' ';
        this.isFullModifier = typeof options.isFullModifier === 'undefined' ? true : options.isFullModifier;
        this.isFullBoolValue = typeof options.isFullBoolValue === 'undefined' ? false : options.isFullBoolValue;
    }

    BemFormatter.prototype = {
        /**
         *
         * @param {string} base
         * @param {string} modifierKey
         * @param {*} modifierValue
         * @returns {string}
         * @private
         */
        _stringifyModifier: function (base, modifierKey, modifierValue) {
            var result = '';

            // Ignore undefined values
            if (typeof modifierValue === 'undefined') {
                return result;
            }

            // If not using full bools ignore false values
            if (!this.isFullBoolValue && modifierValue === false) {
                return result;
            }

            // Makes block__elem_{modifierKey}
            result += this.classSeparator + base + this.modSeparator + modifierKey;

            // If not using full bools skip true `modifierValue`
            if (this.isFullBoolValue || modifierValue !== true) {
                // Makes block__elem_{modifierKey}_{modifierValue}
                result += this.modValueSeparator + String(modifierValue);
            }

            return result;
        },

        /**
         *
         * @param {string} base
         * @param {object} modifiers
         * @returns {string}
         * @private
         */
        _stringifyModifiers: function (base, modifiers) {
            var result = '';

            if (!this.isFullModifier) {
                base = '';
            }

            for (var modifierKey in modifiers) {
                if (!modifiers.hasOwnProperty(modifierKey)) {
                    continue;
                }

                result += this._stringifyModifier(base, modifierKey, modifiers[modifierKey]);
            }

            return result;
        },

        /**
         *
         * @param {string} block
         * @param {string} [element]
         * @param {object} [modifiers]
         */
        stringify: function (block, element, modifiers) {
            var className = String(block);

            // case b_(block, modifiers)
            if (element && typeof element === 'object' && typeof modifiers === 'undefined') {
                modifiers = element;
                element = null;
            }

            if (element) {
                className += this.elementSeparator + String(element);
            }

            if (modifiers) {
                className += this._stringifyModifiers(className, modifiers);
            }

            return className + this.tailSpace;
        }
    };

    /**
     * Return partially applied b_
     *
     * @param {string} block
     * @param {string} [element]
     * @param {object} [modifiers]
     * @returns {Function} partially applied b_
     *
     * @example
     *
     * ```jsx
     * var B = require('b_');
     * var b = B.with('b-button');
     * var e = B.with('b-button', 'elem');
     *
     * function render() {
         *   return (
         *     <div className={b()}>
         *       <span className={b('icon', {type: 'add'})}></span>
         *       <span className={b('text')}></span>
         *     </div>
         *     <div className={b({size: 'small'})}>
         *       <span className={b('icon', {type: 'add'})}></span>
         *       <span className={b('text')}></span>
         *     </div>
         *   );
         * }
     * ```
     */
    function withMixin(block, element, modifiers) {
        return this.bind.apply(this, [null].concat(Array.prototype.slice.call(arguments)));
    }

    /**
     * @param {object} [options]
     * @returns {function}
     *
     * @private
     */
    function createBemFormatter(options) {
        var bemFormatter = new BemFormatter(options);

        var b = bemFormatter.stringify.bind(bemFormatter);
        b['with'] = b.lock = withMixin;

        return b;
    }

    /**
     *
     * @type {function(this:BemFormatter)}
     *
     * @example
     *
     * var v = require('b_');
     *
     * b('block'); // 'block'
     * b('block', {mod1: true, mod2: false, mod3: 'mod3'}); // 'block block_mod1 block_mod3_mod3'
     * b('block', 'elem'); // 'block__elem'
     * b('block', 'elem', {mod1: true, mod2: false, mod3: 'mod3'}); // 'block__elem block__elem_mod1 block__elem_mod3_mod3'
     */
    var b = createBemFormatter();

    /**
     *
     * @type {BemFormatter}
     *
     * @example
     *
     * var b = new (require('b_').B)({
     *   tailSpace: ' ',
     *   elementSeparator: '-',
     *   modSeparator: '--',
     *   modValueSeparator: '-',
     *   classSeparator: ' '
     * });
     *
     * b.stringify('block'); // 'block '
     * b.stringify('block', {mod1: true, mod2: false, mod3: 'mod3'}); // 'block block--mod1 block--mod3-mod3 '
     * b.stringify('block', 'elem'); // 'block-elem '
     * b.stringify('block', 'elem', {mod1: true, mod2: false, mod3: 'mod3'}); // 'block-elem block-elem--mod1 block-elem--mod3-mod3'
     */
    b.B = BemFormatter;

    return b;
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/button/button.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/button/button.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".button {\n  cursor: pointer;\n  border: none;\n  outline: 0;\n  border-radius: 3px;\n  color: white;\n  height: 30px;\n  font-size: 14px; }\n  .button_color_blue {\n    background-color: #007bff; }\n  .button_color_green {\n    background-color: #28a745; }\n  .button_color_red {\n    background-color: #dc3545; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/form-element/form-element.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/form-element/form-element.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".form-element {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 18px;\n  position: relative; }\n  .form-element__label {\n    margin-bottom: 3px; }\n  .form-element__error {\n    position: absolute;\n    bottom: 0;\n    font-size: 14px;\n    color: rgba(255, 0, 0, 0.8); }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/input/input.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/input/input.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".input {\n  height: 28px;\n  font-size: 16px;\n  padding-left: 5px;\n  border-radius: 3px;\n  border: 1px solid #ced4da; }\n  .input:focus {\n    outline: 0;\n    border-color: #80bdff; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/modal/modal.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/modal/modal.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".modal {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .modal__content {\n    position: relative;\n    width: 500px;\n    background-color: white;\n    padding: 10px;\n    border: solid 1px #CCCCCC;\n    border-radius: 5px; }\n    .modal__content-close-button {\n      cursor: pointer;\n      position: absolute;\n      right: 5px;\n      top: 0;\n      border: none;\n      padding: 0;\n      margin: 0;\n      font-size: 25px;\n      background-color: transparent; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/select/select.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/select/select.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".select {\n  height: 28px;\n  font-size: 16px;\n  border-radius: 3px;\n  border: 1px solid #ced4da;\n  background-color: white; }\n  .select:focus {\n    outline: 0;\n    border-color: #80bdff; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/textarea/textarea.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/textarea/textarea.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".textarea {\n  font-size: 16px;\n  padding-left: 5px;\n  border-radius: 3px;\n  border: 1px solid #ced4da;\n  resize: vertical; }\n  .textarea:focus {\n    outline: 0;\n    border-color: #80bdff; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/event-timeline/event-timeline.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/event-timeline/event-timeline.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".event-timeline {\n  width: 960px;\n  margin: 0 auto;\n  font-family: Arial; }\n  .event-timeline__transaction-creation-button {\n    margin-right: 10px; }\n  .event-timeline__sorting {\n    margin-top: 20px; }\n    .event-timeline__sorting-item {\n      cursor: pointer;\n      margin-left: 15px;\n      color: #336699; }\n      .event-timeline__sorting-item_active {\n        cursor: default;\n        pointer-events: none;\n        color: black; }\n  .event-timeline__item {\n    cursor: pointer;\n    border-bottom: solid 1px #CCCCCC;\n    margin: 10px 0;\n    padding: 5px 0 5px 3px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/event-timeline/news/news.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/event-timeline/news/news.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".event-timeline-news_readed {\n  color: rgba(0, 0, 0, 0.5); }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/event-timeline/transaction/transaction.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/event-timeline/transaction/transaction.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".event-timeline-transaction_type_income .event-timeline-transaction__amount {\n  background-color: #CCFFCC; }\n\n.event-timeline-transaction_type_expense .event-timeline-transaction__amount {\n  background-color: #FFCCCC; }\n\n.event-timeline-transaction__date {\n  margin: 0 10px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/news-creation-modal/news-creation-modal.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/news-creation-modal/news-creation-modal.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".news-creation-modal {\n  display: flex;\n  flex-direction: column; }\n  .news-creation-modal__header {\n    font-size: 30px;\n    font-weight: bold; }\n  .news-creation-modal__save-button {\n    align-self: flex-end; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/news-info-modal/news-info-modal.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/news-info-modal/news-info-modal.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".news-info-modal {\n  display: flex;\n  flex-direction: column; }\n  .news-info-modal__title {\n    font-size: 30px;\n    font-weight: bold; }\n  .news-info-modal__date {\n    color: rgba(0, 0, 0, 0.5);\n    margin: 10px 0;\n    text-align: right; }\n  .news-info-modal__read-button {\n    align-self: flex-end; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/transaction-creation-modal/transaction-creation-modal.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/transaction-creation-modal/transaction-creation-modal.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".transaction-creation-modal {\n  display: flex;\n  flex-direction: column; }\n  .transaction-creation-modal__header {\n    font-size: 30px;\n    font-weight: bold; }\n  .transaction-creation-modal__save-button {\n    align-self: flex-end; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/transaction-info-modal/transaction-info-modal.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/transaction-info-modal/transaction-info-modal.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".transaction-info-modal {\n  display: flex;\n  flex-direction: column; }\n  .transaction-info-modal__amount {\n    font-size: 30px;\n    font-weight: bold; }\n  .transaction-info-modal__date {\n    color: rgba(0, 0, 0, 0.5);\n    margin: 10px 0;\n    text-align: right; }\n  .transaction-info-modal__remove-button {\n    align-self: flex-end; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/components/common/button/button.scss":
/*!**************************************************!*\
  !*** ./src/components/common/button/button.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/button/button.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/common/button/button.ts":
/*!************************************************!*\
  !*** ./src/components/common/button/button.ts ***!
  \************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! b_ */ "./node_modules/b_/index.js");
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/component */ "./src/core/component.ts");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.scss */ "./src/components/common/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_2__);



class Button extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super('button', props);
    }
    render() {
        const { classMix, color, onClick, text } = this.props;
        const className = `${b___WEBPACK_IMPORTED_MODULE_0__(this.className, { color })} ${classMix || ''}`;
        return {
            tagName: 'button',
            attrs: { class: className, type: 'button' },
            listeners: { click: () => onClick() },
            children: [text]
        };
    }
}


/***/ }),

/***/ "./src/components/common/form-element/form-element.scss":
/*!**************************************************************!*\
  !*** ./src/components/common/form-element/form-element.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./form-element.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/form-element/form-element.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/common/form-element/form-element.ts":
/*!************************************************************!*\
  !*** ./src/components/common/form-element/form-element.ts ***!
  \************************************************************/
/*! exports provided: FormElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! b_ */ "./node_modules/b_/index.js");
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/component */ "./src/core/component.ts");
/* harmony import */ var _form_element_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-element.scss */ "./src/components/common/form-element/form-element.scss");
/* harmony import */ var _form_element_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_element_scss__WEBPACK_IMPORTED_MODULE_2__);



class FormElement extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super('form-element', props);
    }
    render() {
        const { control } = this.props;
        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [
                this.renderLabel(),
                control,
                this.renderError()
            ]
        };
    }
    renderLabel() {
        const { label } = this.props;
        return {
            tagName: 'label',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'label') },
            children: [label]
        };
    }
    renderError() {
        const { error } = this.props;
        return {
            tagName: 'div',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'error') },
            children: [error || '']
        };
    }
}


/***/ }),

/***/ "./src/components/common/input/input.scss":
/*!************************************************!*\
  !*** ./src/components/common/input/input.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./input.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/input/input.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/common/input/input.ts":
/*!**********************************************!*\
  !*** ./src/components/common/input/input.ts ***!
  \**********************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/component */ "./src/core/component.ts");
/* harmony import */ var _form_element_form_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-element/form-element */ "./src/components/common/form-element/form-element.ts");
/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.scss */ "./src/components/common/input/input.scss");
/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_input_scss__WEBPACK_IMPORTED_MODULE_2__);



class Input extends _core_component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super('input', props);
        this.onValueChange = (e) => {
            const { onInput } = this.props;
            if (onInput != null) {
                onInput(e.target.value);
            }
        };
    }
    render() {
        const { error, label } = this.props;
        const formElementProps = { error, label, control: this.renderInput() };
        return this.renderComponent('container', _form_element_form_element__WEBPACK_IMPORTED_MODULE_1__["FormElement"], formElementProps);
    }
    renderInput() {
        const { value } = this.props;
        return {
            tagName: 'input',
            attrs: { class: this.className, value: value || '' },
            listeners: { input: this.onValueChange }
        };
    }
}


/***/ }),

/***/ "./src/components/common/modal/modal.scss":
/*!************************************************!*\
  !*** ./src/components/common/modal/modal.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/modal/modal.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/common/modal/modal.ts":
/*!**********************************************!*\
  !*** ./src/components/common/modal/modal.ts ***!
  \**********************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! b_ */ "./node_modules/b_/index.js");
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/component */ "./src/core/component.ts");
/* harmony import */ var _services_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/modal */ "./src/services/modal.ts");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.scss */ "./src/components/common/modal/modal.scss");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_3__);




class Modal extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super('modal', props);
    }
    render() {
        const { children } = this.props;
        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [{
                    tagName: 'div',
                    attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'content') },
                    children: [this.renderCloseButton(), children]
                }]
        };
    }
    renderCloseButton() {
        return {
            tagName: 'button',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'content-close-button') },
            listeners: { click: () => _services_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"].hide() },
            children: ['×']
        };
    }
}


/***/ }),

/***/ "./src/components/common/select/select.scss":
/*!**************************************************!*\
  !*** ./src/components/common/select/select.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./select.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/select/select.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/common/select/select.ts":
/*!************************************************!*\
  !*** ./src/components/common/select/select.ts ***!
  \************************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/component */ "./src/core/component.ts");
/* harmony import */ var _form_element_form_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-element/form-element */ "./src/components/common/form-element/form-element.ts");
/* harmony import */ var _select_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.scss */ "./src/components/common/select/select.scss");
/* harmony import */ var _select_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_select_scss__WEBPACK_IMPORTED_MODULE_2__);



class Select extends _core_component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super('select', props);
        this.onValueChange = (e) => {
            const { onSelect } = this.props;
            if (onSelect != null) {
                onSelect(e.target.value);
            }
        };
    }
    render() {
        const { label } = this.props;
        return this.renderComponent('container', _form_element_form_element__WEBPACK_IMPORTED_MODULE_1__["FormElement"], { label, control: this.renderSelect() });
    }
    renderSelect() {
        const { choices } = this.props;
        return {
            tagName: 'select',
            attrs: { class: this.className },
            listeners: { change: this.onValueChange },
            children: choices.map(this.renderOption)
        };
    }
    renderOption(choice) {
        return {
            tagName: 'option',
            attrs: { value: choice.value },
            children: [choice.text]
        };
    }
}


/***/ }),

/***/ "./src/components/common/textarea/textarea.scss":
/*!******************************************************!*\
  !*** ./src/components/common/textarea/textarea.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./textarea.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/common/textarea/textarea.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/common/textarea/textarea.ts":
/*!****************************************************!*\
  !*** ./src/components/common/textarea/textarea.ts ***!
  \****************************************************/
/*! exports provided: TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/component */ "./src/core/component.ts");
/* harmony import */ var _form_element_form_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-element/form-element */ "./src/components/common/form-element/form-element.ts");
/* harmony import */ var _textarea_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea.scss */ "./src/components/common/textarea/textarea.scss");
/* harmony import */ var _textarea_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_textarea_scss__WEBPACK_IMPORTED_MODULE_2__);



class TextArea extends _core_component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super('textarea', props);
        this.onValueChange = (e) => {
            const { onInput } = this.props;
            if (onInput != null) {
                onInput(e.target.value);
            }
        };
    }
    render() {
        const { error, label } = this.props;
        const formElementProps = { error, label, control: this.renderTextArea() };
        return this.renderComponent('container', _form_element_form_element__WEBPACK_IMPORTED_MODULE_1__["FormElement"], formElementProps);
    }
    renderTextArea() {
        const { value } = this.props;
        return {
            tagName: 'textarea',
            attrs: { class: this.className, rows: '5', value },
            listeners: { input: this.onValueChange }
        };
    }
}


/***/ }),

/***/ "./src/components/event-timeline/event-timeline.scss":
/*!***********************************************************!*\
  !*** ./src/components/event-timeline/event-timeline.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./event-timeline.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/event-timeline/event-timeline.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/event-timeline/event-timeline.ts":
/*!*********************************************************!*\
  !*** ./src/components/event-timeline/event-timeline.ts ***!
  \*********************************************************/
/*! exports provided: EventTimeLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTimeLine", function() { return EventTimeLine; });
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! b_ */ "./node_modules/b_/index.js");
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/component */ "./src/core/component.ts");
/* harmony import */ var _services_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modal */ "./src/services/modal.ts");
/* harmony import */ var _common_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/button/button */ "./src/components/common/button/button.ts");
/* harmony import */ var _news_creation_modal_news_creation_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../news-creation-modal/news-creation-modal */ "./src/components/news-creation-modal/news-creation-modal.ts");
/* harmony import */ var _news_news__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/news */ "./src/components/event-timeline/news/news.ts");
/* harmony import */ var _transaction_creation_modal_transaction_creation_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transaction-creation-modal/transaction-creation-modal */ "./src/components/transaction-creation-modal/transaction-creation-modal.ts");
/* harmony import */ var _transaction_transaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction/transaction */ "./src/components/event-timeline/transaction/transaction.ts");
/* harmony import */ var _event_timeline_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-timeline.scss */ "./src/components/event-timeline/event-timeline.scss");
/* harmony import */ var _event_timeline_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_event_timeline_scss__WEBPACK_IMPORTED_MODULE_8__);









const SORTING_LABELS = {
    dateAsc: 'по дате (старые -> новые)',
    dateDesc: 'по дате (новые -> старые)',
    eventTypeAsc: 'по типу (А -> Я)',
    eventTypeDesc: 'по типу (Я -> А)'
};
class EventTimeLine extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super('event-timeline', props, { sortBy: 'dateAsc', banks: null, currencies: null, events: null });
    }
    onInit() {
        const { banksService, currencyService, eventTimeLineService } = this.props;
        banksService.subscribe((banks) => this.setState({ banks }));
        currencyService.subscribe((currencies) => this.setState({ currencies }));
        eventTimeLineService.subscribe((events) => this.setState({ events }));
    }
    render() {
        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [
                this.renderTransactionCreationButton(),
                this.renderNewsCreationButton(),
                this.renderSorting(),
                ...this.renderEventNodes()
            ]
        };
    }
    renderEventNodes() {
        const { eventTimeLineService } = this.props;
        const { banks, currencies, events, sortBy } = this.state;
        if (banks == null || currencies == null || events == null) {
            return [];
        }
        const eventsClone = [...events];
        eventsClone.sort((e1, e2) => {
            switch (sortBy) {
                case 'dateAsc':
                    return e1.date < e2.date ? -1 : 1;
                case 'dateDesc':
                    return e1.date < e2.date ? 1 : -1;
                case 'eventTypeAsc':
                    return e1.eventType < e2.eventType ? -1 : 1;
                case 'eventTypeDesc':
                    return e1.eventType < e2.eventType ? 1 : -1;
            }
        });
        return eventsClone.map((event) => {
            const classMix = b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'item');
            const componentId = `event-${event.id}`;
            const line = event.eventType === 'news'
                ? this.renderComponent(componentId, _news_news__WEBPACK_IMPORTED_MODULE_5__["NewsLine"], { classMix, eventTimeLineService, news: event })
                : this.renderComponent(componentId, _transaction_transaction__WEBPACK_IMPORTED_MODULE_7__["TransactionLine"], { classMix, eventTimeLineService, transaction: event, currencies, banks });
            return line;
        });
    }
    renderTransactionCreationButton() {
        const { eventTimeLineService } = this.props;
        const { banks, currencies } = this.state;
        const props = {
            classMix: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'transaction-creation-button'),
            color: 'blue',
            onClick: () => _services_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"].show(new _transaction_creation_modal_transaction_creation_modal__WEBPACK_IMPORTED_MODULE_6__["TransactionCreationModal"]({ banks, currencies, eventTimeLineService }).init()),
            text: 'Добавить транзакцию'
        };
        return this.renderComponent('transaction-creation-button', _common_button_button__WEBPACK_IMPORTED_MODULE_3__["Button"], props);
    }
    renderNewsCreationButton() {
        const { eventTimeLineService } = this.props;
        const props = {
            color: 'blue',
            onClick: () => _services_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"].show(new _news_creation_modal_news_creation_modal__WEBPACK_IMPORTED_MODULE_4__["NewsCreationModal"]({ eventTimeLineService }).init()),
            text: 'Добавить новость'
        };
        return this.renderComponent('news-creation-button', _common_button_button__WEBPACK_IMPORTED_MODULE_3__["Button"], props);
    }
    renderSorting() {
        return {
            tagName: 'div',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'sorting') },
            children: [
                { tagName: 'span', children: ['Сортировать:'] },
                this.renderSortingItem('dateAsc'),
                this.renderSortingItem('dateDesc'),
                this.renderSortingItem('eventTypeAsc'),
                this.renderSortingItem('eventTypeDesc')
            ]
        };
    }
    renderSortingItem(sortBy) {
        const className = b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'sorting-item', { active: this.state.sortBy === sortBy });
        return {
            tagName: 'span',
            attrs: { class: className },
            listeners: { click: () => this.setState({ sortBy }) },
            children: [SORTING_LABELS[sortBy]]
        };
    }
}


/***/ }),

/***/ "./src/components/event-timeline/news/news.scss":
/*!******************************************************!*\
  !*** ./src/components/event-timeline/news/news.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./news.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/event-timeline/news/news.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/event-timeline/news/news.ts":
/*!****************************************************!*\
  !*** ./src/components/event-timeline/news/news.ts ***!
  \****************************************************/
/*! exports provided: NewsLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsLine", function() { return NewsLine; });
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! b_ */ "./node_modules/b_/index.js");
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/component */ "./src/core/component.ts");
/* harmony import */ var _services_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/modal */ "./src/services/modal.ts");
/* harmony import */ var _news_info_modal_news_info_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../news-info-modal/news-info-modal */ "./src/components/news-info-modal/news-info-modal.ts");
/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news.scss */ "./src/components/event-timeline/news/news.scss");
/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_news_scss__WEBPACK_IMPORTED_MODULE_4__);





class NewsLine extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super('event-timeline-news', props);
        this.onNewsClick = () => {
            const { eventTimeLineService, news } = this.props;
            _services_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"].show(new _news_info_modal_news_info_modal__WEBPACK_IMPORTED_MODULE_3__["NewsInfoModal"]({ eventTimeLineService, news }).init());
        };
    }
    render() {
        const { classMix, news } = this.props;
        const className = `${b___WEBPACK_IMPORTED_MODULE_0__(this.className, { readed: news.readed })} ${classMix}`;
        return {
            tagName: 'div',
            attrs: { class: className },
            listeners: { click: this.onNewsClick },
            children: [news.title]
        };
    }
}


/***/ }),

/***/ "./src/components/event-timeline/transaction/transaction.scss":
/*!********************************************************************!*\
  !*** ./src/components/event-timeline/transaction/transaction.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./transaction.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/event-timeline/transaction/transaction.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/event-timeline/transaction/transaction.ts":
/*!******************************************************************!*\
  !*** ./src/components/event-timeline/transaction/transaction.ts ***!
  \******************************************************************/
/*! exports provided: TransactionLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionLine", function() { return TransactionLine; });
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! b_ */ "./node_modules/b_/index.js");
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/component */ "./src/core/component.ts");
/* harmony import */ var _services_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/modal */ "./src/services/modal.ts");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/date */ "./src/utils/date.ts");
/* harmony import */ var _transaction_info_modal_transaction_info_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../transaction-info-modal/transaction-info-modal */ "./src/components/transaction-info-modal/transaction-info-modal.ts");
/* harmony import */ var _transaction_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction.scss */ "./src/components/event-timeline/transaction/transaction.scss");
/* harmony import */ var _transaction_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_transaction_scss__WEBPACK_IMPORTED_MODULE_5__);






class TransactionLine extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super('event-timeline-transaction', props);
        this.onTransactionClick = () => {
            const { currencies, eventTimeLineService, transaction } = this.props;
            _services_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"].show(new _transaction_info_modal_transaction_info_modal__WEBPACK_IMPORTED_MODULE_4__["TransactionInfoModal"]({ currencies, eventTimeLineService, transaction }).init());
        };
    }
    render() {
        const { classMix, transaction } = this.props;
        const className = `${b___WEBPACK_IMPORTED_MODULE_0__(this.className, { type: transaction.transactionType })} ${classMix}`;
        return {
            tagName: 'div',
            attrs: { class: className },
            listeners: { click: this.onTransactionClick },
            children: [
                this.renderAmount(),
                this.renderDate(),
                this.renderBankName()
            ]
        };
    }
    renderAmount() {
        const { transaction } = this.props;
        const sign = transaction.transactionType === 'income' ? '+' : '-';
        const currencyAbbr = this.getCurrencyAbbreviation();
        return {
            tagName: 'span',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'amount') },
            children: [sign, transaction.amount.toString(), currencyAbbr]
        };
    }
    renderDate() {
        const { transaction } = this.props;
        const date = _utils_date__WEBPACK_IMPORTED_MODULE_3__["DateUtils"].format(transaction.date);
        return { tagName: 'span', attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'date') }, children: [date] };
    }
    renderBankName() {
        const { banks, transaction } = this.props;
        const name = banks.find((x) => x.id === transaction.bankId).name;
        return { tagName: 'span', children: [name] };
    }
    getCurrencyAbbreviation() {
        const { currencies, transaction } = this.props;
        const currency = currencies.find((x) => x.id === transaction.currencyId);
        return currency.abbreviation;
    }
}


/***/ }),

/***/ "./src/components/news-creation-modal/news-creation-modal.scss":
/*!*********************************************************************!*\
  !*** ./src/components/news-creation-modal/news-creation-modal.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./news-creation-modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/news-creation-modal/news-creation-modal.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/news-creation-modal/news-creation-modal.ts":
/*!*******************************************************************!*\
  !*** ./src/components/news-creation-modal/news-creation-modal.ts ***!
  \*******************************************************************/
/*! exports provided: NewsCreationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCreationModal", function() { return NewsCreationModal; });
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! b_ */ "./node_modules/b_/index.js");
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/component */ "./src/core/component.ts");
/* harmony import */ var _services_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modal */ "./src/services/modal.ts");
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/uuid */ "./src/utils/uuid.ts");
/* harmony import */ var _common_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/button/button */ "./src/components/common/button/button.ts");
/* harmony import */ var _common_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/modal/modal */ "./src/components/common/modal/modal.ts");
/* harmony import */ var _common_input_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/input/input */ "./src/components/common/input/input.ts");
/* harmony import */ var _common_textarea_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/textarea/textarea */ "./src/components/common/textarea/textarea.ts");
/* harmony import */ var _news_creation_modal_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news-creation-modal.scss */ "./src/components/news-creation-modal/news-creation-modal.scss");
/* harmony import */ var _news_creation_modal_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_news_creation_modal_scss__WEBPACK_IMPORTED_MODULE_8__);









class NewsCreationModal extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super('news-creation-modal', props, { content: null, title: null });
        this.save = () => {
            const { eventTimeLineService } = this.props;
            const { content, title } = this.state;
            if (this.validateTitle().success && this.validateContent().success) {
                eventTimeLineService.save({
                    eventType: 'news',
                    id: _utils_uuid__WEBPACK_IMPORTED_MODULE_3__["Uuid"].generate(),
                    title,
                    content,
                    date: new Date(),
                    readed: false
                });
                _services_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"].hide();
            }
        };
    }
    render() {
        return this.renderComponent('modal', _common_modal_modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], { children: this.renderModalContent() });
    }
    renderModalContent() {
        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [
                this.renderHeader(),
                this.renderTitleInput(),
                this.renderContentInput(),
                this.renderSaveButton()
            ]
        };
    }
    renderHeader() {
        return {
            tagName: 'div',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'header') },
            children: ['Новая новость']
        };
    }
    renderTitleInput() {
        const validation = this.validateTitle();
        return this.renderComponent('title', _common_input_input__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            label: 'Заголовок',
            error: !validation.success ? validation.error : undefined,
            onInput: (title) => this.setState({ title }),
            value: this.state.title
        });
    }
    renderContentInput() {
        const validation = this.validateContent();
        return this.renderComponent('content', _common_textarea_textarea__WEBPACK_IMPORTED_MODULE_7__["TextArea"], {
            label: 'Содержание',
            error: !validation.success ? validation.error : undefined,
            onInput: (content) => this.setState({ content }),
            value: this.state.content
        });
    }
    renderSaveButton() {
        return this.renderComponent('save-button', _common_button_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            classMix: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'save-button'),
            color: 'green',
            onClick: this.save,
            text: 'Сохранить'
        });
    }
    validateTitle() {
        const { title } = this.state;
        return title && title.length > 0
            ? { success: true }
            : { success: false, error: 'Это поле обязательно' };
    }
    validateContent() {
        const { content } = this.state;
        return content && content.length > 0
            ? { success: true }
            : { success: false, error: 'Это поле обязательно' };
    }
}


/***/ }),

/***/ "./src/components/news-info-modal/news-info-modal.scss":
/*!*************************************************************!*\
  !*** ./src/components/news-info-modal/news-info-modal.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./news-info-modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/news-info-modal/news-info-modal.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/news-info-modal/news-info-modal.ts":
/*!***********************************************************!*\
  !*** ./src/components/news-info-modal/news-info-modal.ts ***!
  \***********************************************************/
/*! exports provided: NewsInfoModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsInfoModal", function() { return NewsInfoModal; });
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! b_ */ "./node_modules/b_/index.js");
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/component */ "./src/core/component.ts");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/date */ "./src/utils/date.ts");
/* harmony import */ var _services_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modal */ "./src/services/modal.ts");
/* harmony import */ var _common_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/button/button */ "./src/components/common/button/button.ts");
/* harmony import */ var _common_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/modal/modal */ "./src/components/common/modal/modal.ts");
/* harmony import */ var _news_info_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-info-modal.scss */ "./src/components/news-info-modal/news-info-modal.scss");
/* harmony import */ var _news_info_modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_news_info_modal_scss__WEBPACK_IMPORTED_MODULE_6__);







class NewsInfoModal extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super('news-info-modal', props);
    }
    render() {
        return this.renderComponent('modal', _common_modal_modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], { children: this.renderModalContent() });
    }
    renderModalContent() {
        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [
                this.renderTitle(),
                this.renderDate(),
                this.renderContent(),
                this.renderReadButton()
            ]
        };
    }
    renderContent() {
        return {
            tagName: 'div',
            children: [this.props.news.content]
        };
    }
    renderDate() {
        return {
            tagName: 'div',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'date') },
            children: [_utils_date__WEBPACK_IMPORTED_MODULE_2__["DateUtils"].format(this.props.news.date)]
        };
    }
    renderReadButton() {
        const { eventTimeLineService } = this.props;
        return this.renderComponent('read-button', _common_button_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            classMix: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'read-button'),
            color: 'green',
            onClick: () => {
                eventTimeLineService.readNews(this.props.news.id);
                _services_modal__WEBPACK_IMPORTED_MODULE_3__["ModalService"].hide();
            },
            text: 'Ознакомлен'
        });
    }
    renderTitle() {
        return {
            tagName: 'div',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'title') },
            children: [this.props.news.title]
        };
    }
}


/***/ }),

/***/ "./src/components/transaction-creation-modal/transaction-creation-modal.scss":
/*!***********************************************************************************!*\
  !*** ./src/components/transaction-creation-modal/transaction-creation-modal.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./transaction-creation-modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/transaction-creation-modal/transaction-creation-modal.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/transaction-creation-modal/transaction-creation-modal.ts":
/*!*********************************************************************************!*\
  !*** ./src/components/transaction-creation-modal/transaction-creation-modal.ts ***!
  \*********************************************************************************/
/*! exports provided: TransactionCreationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionCreationModal", function() { return TransactionCreationModal; });
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! b_ */ "./node_modules/b_/index.js");
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/component */ "./src/core/component.ts");
/* harmony import */ var _services_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modal */ "./src/services/modal.ts");
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/uuid */ "./src/utils/uuid.ts");
/* harmony import */ var _common_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/button/button */ "./src/components/common/button/button.ts");
/* harmony import */ var _common_input_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/input/input */ "./src/components/common/input/input.ts");
/* harmony import */ var _common_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/modal/modal */ "./src/components/common/modal/modal.ts");
/* harmony import */ var _common_select_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/select/select */ "./src/components/common/select/select.ts");
/* harmony import */ var _common_textarea_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/textarea/textarea */ "./src/components/common/textarea/textarea.ts");
/* harmony import */ var _transaction_creation_modal_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transaction-creation-modal.scss */ "./src/components/transaction-creation-modal/transaction-creation-modal.scss");
/* harmony import */ var _transaction_creation_modal_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_transaction_creation_modal_scss__WEBPACK_IMPORTED_MODULE_9__);










class TransactionCreationModal extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super('transaction-creation-modal', props, {
            amount: null,
            currencyId: props.currencies[0].id,
            description: null,
            bankId: props.banks[0].id,
            transactionType: 'income'
        });
    }
    render() {
        return this.renderComponent('modal', _common_modal_modal__WEBPACK_IMPORTED_MODULE_6__["Modal"], { children: this.renderModalContent() });
    }
    renderModalContent() {
        return {
            tagName: 'form',
            attrs: { class: this.className },
            children: [
                this.renderHeader(),
                this.renderTypeSelect(),
                this.renderBankSelect(),
                this.renderAmountInput(),
                this.renderCurrencySelect(),
                this.renderDescriptionInput(),
                this.renderSaveButton()
            ]
        };
    }
    renderHeader() {
        return {
            tagName: 'div',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'header') },
            children: ['Новая транзакция']
        };
    }
    renderAmountInput() {
        const validation = this.validateAmount();
        return this.renderComponent('amount', _common_input_input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
            error: !validation.success ? validation.error : undefined,
            label: 'Сумма транзакции',
            onInput: (value) => this.setState({ amount: parseInt(value, 10) })
        });
    }
    renderCurrencySelect() {
        return this.renderComponent('currency', _common_select_select__WEBPACK_IMPORTED_MODULE_7__["Select"], {
            choices: this.props.currencies.map((x) => ({ value: x.id, text: x.abbreviation })),
            label: 'Валюта',
            onSelect: (currencyId) => this.setState({ currencyId })
        });
    }
    renderBankSelect() {
        return this.renderComponent('bank', _common_select_select__WEBPACK_IMPORTED_MODULE_7__["Select"], {
            choices: this.props.banks.map((x) => ({ value: x.id, text: x.name })),
            label: 'От кого транзакция',
            onSelect: (bankId) => this.setState({ bankId })
        });
    }
    renderDescriptionInput() {
        const validation = this.validateDescription();
        return this.renderComponent('description', _common_textarea_textarea__WEBPACK_IMPORTED_MODULE_8__["TextArea"], {
            error: !validation.success ? validation.error : undefined,
            label: 'Описание',
            onInput: (description) => this.setState({ description }),
            value: this.state.description
        });
    }
    renderTypeSelect() {
        const choices = [
            { text: 'Приход', value: 'income' },
            { text: 'Расход', value: 'expense' }
        ];
        return this.renderComponent('transactionType', _common_select_select__WEBPACK_IMPORTED_MODULE_7__["Select"], {
            choices,
            label: 'Тип',
            onSelect: (transactionType) => this.setState({ transactionType })
        });
    }
    renderSaveButton() {
        return this.renderComponent('save-button', _common_button_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            classMix: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'save-button'),
            color: 'green',
            onClick: () => this.save(),
            text: 'Сохранить'
        });
    }
    save() {
        const { eventTimeLineService } = this.props;
        const { amount, currencyId, description, bankId, transactionType } = this.state;
        if (this.validateAmount().success && this.validateDescription().success) {
            eventTimeLineService.save({
                eventType: 'transaction',
                id: _utils_uuid__WEBPACK_IMPORTED_MODULE_3__["Uuid"].generate(),
                amount,
                currencyId,
                date: new Date(),
                description,
                bankId,
                transactionType
            });
            _services_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"].hide();
        }
    }
    validateAmount() {
        const { amount } = this.state;
        return amount && amount > 0
            ? { success: true }
            : { success: false, error: 'Это поле обязательно и больше нуля' };
    }
    validateDescription() {
        const { description } = this.state;
        return description && description.length > 0
            ? { success: true }
            : { success: false, error: 'Это поле обязательно' };
    }
}


/***/ }),

/***/ "./src/components/transaction-info-modal/transaction-info-modal.scss":
/*!***************************************************************************!*\
  !*** ./src/components/transaction-info-modal/transaction-info-modal.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./transaction-info-modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/transaction-info-modal/transaction-info-modal.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/transaction-info-modal/transaction-info-modal.ts":
/*!*************************************************************************!*\
  !*** ./src/components/transaction-info-modal/transaction-info-modal.ts ***!
  \*************************************************************************/
/*! exports provided: TransactionInfoModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionInfoModal", function() { return TransactionInfoModal; });
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! b_ */ "./node_modules/b_/index.js");
/* harmony import */ var b___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/component */ "./src/core/component.ts");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/date */ "./src/utils/date.ts");
/* harmony import */ var _services_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modal */ "./src/services/modal.ts");
/* harmony import */ var _common_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/button/button */ "./src/components/common/button/button.ts");
/* harmony import */ var _common_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/modal/modal */ "./src/components/common/modal/modal.ts");
/* harmony import */ var _transaction_info_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-info-modal.scss */ "./src/components/transaction-info-modal/transaction-info-modal.scss");
/* harmony import */ var _transaction_info_modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_transaction_info_modal_scss__WEBPACK_IMPORTED_MODULE_6__);







class TransactionInfoModal extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super('transaction-info-modal', props);
    }
    render() {
        return this.renderComponent('modal', _common_modal_modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], { children: this.renderModalContent() });
    }
    renderModalContent() {
        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [
                this.renderAmount(),
                this.renderDate(),
                this.renderDescription(),
                this.renderRemoveButton()
            ]
        };
    }
    renderAmount() {
        const { transaction } = this.props;
        const sign = transaction.transactionType === 'income' ? '+' : '-';
        const currencyAbbr = this.getCurrencyAbbreviation();
        return {
            tagName: 'div',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'amount') },
            children: [sign, transaction.amount.toString(), currencyAbbr]
        };
    }
    renderDate() {
        return {
            tagName: 'div',
            attrs: { class: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'date') },
            children: [_utils_date__WEBPACK_IMPORTED_MODULE_2__["DateUtils"].format(this.props.transaction.date)]
        };
    }
    renderDescription() {
        return {
            tagName: 'div',
            children: [this.props.transaction.description]
        };
    }
    renderRemoveButton() {
        const { eventTimeLineService } = this.props;
        return this.renderComponent('remove-button', _common_button_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            classMix: b___WEBPACK_IMPORTED_MODULE_0__(this.className, 'remove-button'),
            color: 'red',
            onClick: () => {
                eventTimeLineService.removeTransaction(this.props.transaction.id);
                _services_modal__WEBPACK_IMPORTED_MODULE_3__["ModalService"].hide();
            },
            text: 'Удалить'
        });
    }
    getCurrencyAbbreviation() {
        const { currencies, transaction } = this.props;
        const currency = currencies.find((x) => x.id === transaction.currencyId);
        return currency.abbreviation;
    }
}


/***/ }),

/***/ "./src/core/component.ts":
/*!*******************************!*\
  !*** ./src/core/component.ts ***!
  \*******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _virtual_dom_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual-dom/create */ "./src/core/virtual-dom/create.ts");
/* harmony import */ var _virtual_dom_patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtual-dom/patch */ "./src/core/virtual-dom/patch.ts");


class Component {
    constructor(className, props = null, state = null) {
        this.className = className;
        this.props = props;
        this.state = state;
        this.components = {};
    }
    onInit() { }
    ;
    init() {
        this.currentMarkup = this.render();
        this.currentDOM = Object(_virtual_dom_create__WEBPACK_IMPORTED_MODULE_0__["create"])(this.currentMarkup);
        this.onInit();
        return this.currentDOM;
    }
    update(props) {
        this.props = props;
        this.patch();
        return this.currentDOM;
    }
    renderComponent(componentId, cls, props) {
        let node;
        if (this.components[componentId] == null) {
            this.components[componentId] = new cls(props);
            node = this.components[componentId].init();
        }
        else {
            node = this.components[componentId].update(props);
        }
        return { componentId, node };
    }
    setState(update) {
        this.state = Object.assign({}, this.state, update);
        this.patch();
    }
    patch() {
        const nextMarkup = this.render();
        Object(_virtual_dom_patch__WEBPACK_IMPORTED_MODULE_1__["patch"])(this.currentDOM, this.currentMarkup, nextMarkup);
        this.currentMarkup = nextMarkup;
    }
}


/***/ }),

/***/ "./src/core/data-service/data-service.ts":
/*!***********************************************!*\
  !*** ./src/core/data-service/data-service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
class DataService {
    constructor() {
        this.listeners = [];
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
    update(data) {
        this.data = data;
        this.publish();
    }
    publish() {
        this.listeners.forEach(listener => listener(this.data));
    }
}


/***/ }),

/***/ "./src/core/virtual-dom/create.ts":
/*!****************************************!*\
  !*** ./src/core/virtual-dom/create.ts ***!
  \****************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
const create = (markup) => {
    let $node;
    if (typeof markup === 'string') {
        $node = createTextNode(markup);
    }
    else if ('tagName' in markup) {
        $node = createElementNode(markup);
    }
    else {
        $node = markup.node;
    }
    return $node;
};
const createTextNode = (text) => {
    return document.createTextNode(text);
};
const createElementNode = (markup) => {
    const { attrs = {}, listeners = {}, children = [], tagName } = markup;
    const $node = document.createElement(tagName);
    Object.keys(attrs).forEach((attrName) => $node.setAttribute(attrName, attrs[attrName]));
    Object.keys(listeners).forEach((eventType) => $node.addEventListener(eventType, listeners[eventType]));
    children.forEach((child) => $node.appendChild(create(child)));
    return $node;
};


/***/ }),

/***/ "./src/core/virtual-dom/patch.ts":
/*!***************************************!*\
  !*** ./src/core/virtual-dom/patch.ts ***!
  \***************************************/
/*! exports provided: patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./src/core/virtual-dom/create.ts");

const patch = ($node, prevMarkup, nextMarkup) => {
    if (nextMarkup === undefined) {
        $node.remove();
    }
    else if (typeof prevMarkup === 'string' && typeof nextMarkup === 'string') {
        if (prevMarkup !== nextMarkup) {
            $node.textContent = nextMarkup;
        }
    }
    else if (typeof prevMarkup === 'object' && 'tagName' in prevMarkup &&
        typeof nextMarkup === 'object' && 'tagName' in nextMarkup) {
        if (prevMarkup.tagName === nextMarkup.tagName) {
            patchAttrs($node, prevMarkup.attrs, nextMarkup.attrs);
            patchListeners($node, prevMarkup['listeners'], nextMarkup['listeners']);
            prepatchChildren($node, prevMarkup.children, nextMarkup.children);
            patchChildren($node, prevMarkup.children, nextMarkup.children);
        }
        else {
            $node.replaceWith(Object(_create__WEBPACK_IMPORTED_MODULE_0__["create"])(nextMarkup));
        }
    }
    else if (typeof prevMarkup === 'object' && 'componentId' in prevMarkup &&
        typeof nextMarkup === 'object' && 'componentId' in nextMarkup) {
        if (prevMarkup.componentId !== nextMarkup.componentId) {
            $node.replaceWith(nextMarkup.node);
        }
    }
    else {
        $node.replaceWith(Object(_create__WEBPACK_IMPORTED_MODULE_0__["create"])(nextMarkup));
    }
};
const patchAttrs = ($node, prevAttrs = {}, nextAttrs = {}) => {
    Object.keys(prevAttrs).forEach((attrName) => {
        if (nextAttrs[attrName] === undefined) {
            $node.removeAttribute(attrName);
        }
    });
    Object.keys(nextAttrs).forEach((attrName) => {
        if (nextAttrs[attrName] !== prevAttrs[attrName]) {
            $node.setAttribute(attrName, nextAttrs[attrName]);
        }
    });
};
const patchListeners = ($node, prevListeners = {}, nextListeners = {}) => {
    Object.keys(prevListeners).forEach((eventType) => $node.removeEventListener(eventType, prevListeners[eventType]));
    Object.keys(nextListeners).forEach((eventType) => $node.addEventListener(eventType, nextListeners[eventType]));
};
const patchChildren = ($parent, childrenPrev = [], childrenNext = []) => {
    const size = Math.max(childrenPrev.length, childrenNext.length);
    const childNodes = [...$parent.childNodes];
    for (let i = 0; i < size; i++) {
        if (childrenPrev[i] === undefined) {
            $parent.appendChild(Object(_create__WEBPACK_IMPORTED_MODULE_0__["create"])(childrenNext[i]));
        }
        else if (childrenNext[i] === undefined) {
            $parent.removeChild(childNodes[i]);
        }
        else {
            patch(childNodes[i], childrenPrev[i], childrenNext[i]);
        }
    }
};
const prepatchChildren = ($parent, childrenPrev = [], childrenNext = []) => {
    $parent.childNodes.forEach(($child, idx) => {
        const prevMarkup = childrenPrev[idx];
        const nextMarkup = childrenNext[idx];
        if (typeof prevMarkup === 'object' && 'componentId' in prevMarkup) {
            if (typeof nextMarkup !== 'object' || !('componentId' in nextMarkup) ||
                prevMarkup.componentId !== nextMarkup.componentId) {
                $child.replaceWith(document.createElement('div'));
            }
        }
    });
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_banks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/banks */ "./src/services/banks.ts");
/* harmony import */ var _services_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/currency */ "./src/services/currency.ts");
/* harmony import */ var _services_event_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/event-timeline */ "./src/services/event-timeline.ts");
/* harmony import */ var _components_event_timeline_event_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/event-timeline/event-timeline */ "./src/components/event-timeline/event-timeline.ts");




const banksService = new _services_banks__WEBPACK_IMPORTED_MODULE_0__["BanksService"]();
const currencyService = new _services_currency__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"]();
const eventTimeLineService = new _services_event_timeline__WEBPACK_IMPORTED_MODULE_2__["EventTimeLineService"]();
const eventTimeLine = new _components_event_timeline_event_timeline__WEBPACK_IMPORTED_MODULE_3__["EventTimeLine"]({ banksService, currencyService, eventTimeLineService }).init();
document.body.appendChild(eventTimeLine);


/***/ }),

/***/ "./src/mocks/banks.ts":
/*!****************************!*\
  !*** ./src/mocks/banks.ts ***!
  \****************************/
/*! exports provided: BANKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANKS", function() { return BANKS; });
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/uuid */ "./src/utils/uuid.ts");

const BANKS = [
    {
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        name: 'Сбербанк'
    },
    {
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        name: 'Росбанк'
    },
    {
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        name: 'ВТБ'
    }
];


/***/ }),

/***/ "./src/mocks/currencies.ts":
/*!*********************************!*\
  !*** ./src/mocks/currencies.ts ***!
  \*********************************/
/*! exports provided: CURRENCIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCIES", function() { return CURRENCIES; });
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/uuid */ "./src/utils/uuid.ts");

const CURRENCIES = [
    {
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        abbreviation: '₽'
    },
    {
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        abbreviation: '$'
    },
    {
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        abbreviation: '€'
    }
];


/***/ }),

/***/ "./src/mocks/event-timeline.ts":
/*!*************************************!*\
  !*** ./src/mocks/event-timeline.ts ***!
  \*************************************/
/*! exports provided: EVENT_TIME_LINE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TIME_LINE", function() { return EVENT_TIME_LINE; });
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/uuid */ "./src/utils/uuid.ts");
/* harmony import */ var _banks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banks */ "./src/mocks/banks.ts");
/* harmony import */ var _currencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currencies */ "./src/mocks/currencies.ts");



const EVENT_TIME_LINE = [
    {
        eventType: 'news',
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        title: 'Кредиты',
        content: 'Получите до 100 000 онлайн, без посещения отделения!',
        date: new Date('2019-03-01 10:00'),
        readed: false
    },
    {
        eventType: 'transaction',
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        currencyId: _currencies__WEBPACK_IMPORTED_MODULE_2__["CURRENCIES"][0].id,
        date: new Date('2019-03-01 15:00'),
        description: 'Зарплата за февраль',
        bankId: _banks__WEBPACK_IMPORTED_MODULE_1__["BANKS"][0].id,
        amount: 10,
        transactionType: 'income'
    },
    {
        eventType: 'news',
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        title: 'Инвестиции',
        content: 'Инвестируйте в ценные бумаги. Теперь вместе с нами!',
        date: new Date('2019-03-01 11:30'),
        readed: true
    },
    {
        eventType: 'transaction',
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        currencyId: _currencies__WEBPACK_IMPORTED_MODULE_2__["CURRENCIES"][1].id,
        date: new Date('2019-03-01 18:00'),
        description: 'Оплата услуг мобильный связи.',
        bankId: _banks__WEBPACK_IMPORTED_MODULE_1__["BANKS"][1].id,
        amount: 20,
        transactionType: 'expense'
    },
    {
        eventType: 'news',
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        title: 'Вклады',
        content: 'Откройте вклад у нас и получайте до 12% годовых.',
        date: new Date('2019-03-01 14:10'),
        readed: false
    },
    {
        eventType: 'transaction',
        id: _utils_uuid__WEBPACK_IMPORTED_MODULE_0__["Uuid"].generate(),
        currencyId: _currencies__WEBPACK_IMPORTED_MODULE_2__["CURRENCIES"][2].id,
        date: new Date('2019-03-01 12:00'),
        description: 'Возврат долга за 8 марта',
        bankId: _banks__WEBPACK_IMPORTED_MODULE_1__["BANKS"][2].id,
        amount: 30,
        transactionType: 'income'
    },
];


/***/ }),

/***/ "./src/services/banks.ts":
/*!*******************************!*\
  !*** ./src/services/banks.ts ***!
  \*******************************/
/*! exports provided: BanksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanksService", function() { return BanksService; });
/* harmony import */ var _core_data_service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data-service/data-service */ "./src/core/data-service/data-service.ts");
/* harmony import */ var _mocks_banks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/banks */ "./src/mocks/banks.ts");


class BanksService extends _core_data_service_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    subscribe(listener) {
        super.subscribe(listener);
        this.update(_mocks_banks__WEBPACK_IMPORTED_MODULE_1__["BANKS"]);
    }
}


/***/ }),

/***/ "./src/services/currency.ts":
/*!**********************************!*\
  !*** ./src/services/currency.ts ***!
  \**********************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var _core_data_service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data-service/data-service */ "./src/core/data-service/data-service.ts");
/* harmony import */ var _mocks_currencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/currencies */ "./src/mocks/currencies.ts");


class CurrencyService extends _core_data_service_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    subscribe(listener) {
        super.subscribe(listener);
        this.update(_mocks_currencies__WEBPACK_IMPORTED_MODULE_1__["CURRENCIES"]);
    }
}


/***/ }),

/***/ "./src/services/event-timeline.ts":
/*!****************************************!*\
  !*** ./src/services/event-timeline.ts ***!
  \****************************************/
/*! exports provided: EventTimeLineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTimeLineService", function() { return EventTimeLineService; });
/* harmony import */ var _core_data_service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data-service/data-service */ "./src/core/data-service/data-service.ts");
/* harmony import */ var _mocks_event_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/event-timeline */ "./src/mocks/event-timeline.ts");


class EventTimeLineService extends _core_data_service_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    subscribe(listener) {
        super.subscribe(listener);
        this.update(_mocks_event_timeline__WEBPACK_IMPORTED_MODULE_1__["EVENT_TIME_LINE"]);
    }
    save(event) {
        const timeline = [...this.data, event];
        this.update(timeline);
    }
    readNews(newsId) {
        const timeline = this.data.map((x) => x.id === newsId ? Object.assign({}, x, { readed: true }) : x);
        this.update(timeline);
    }
    removeTransaction(transactionId) {
        const timeline = this.data.filter((x) => x.id !== transactionId);
        this.update(timeline);
    }
}


/***/ }),

/***/ "./src/services/modal.ts":
/*!*******************************!*\
  !*** ./src/services/modal.ts ***!
  \*******************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
class ModalService {
    static show(modal) {
        this.currentModal = modal;
        document.body.appendChild(this.currentModal);
    }
    static hide() {
        if (this.currentModal != null) {
            this.currentModal.remove();
        }
    }
}


/***/ }),

/***/ "./src/utils/date.ts":
/*!***************************!*\
  !*** ./src/utils/date.ts ***!
  \***************************/
/*! exports provided: DateUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtils", function() { return DateUtils; });
/* harmony import */ var _num__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./num */ "./src/utils/num.ts");

class DateUtils {
    static format(date) {
        const day = _num__WEBPACK_IMPORTED_MODULE_0__["NumUtils"].getLeadingZeroNum(date.getDate());
        const month = _num__WEBPACK_IMPORTED_MODULE_0__["NumUtils"].getLeadingZeroNum(date.getMonth() + 1);
        const year = date.getFullYear();
        const hours = _num__WEBPACK_IMPORTED_MODULE_0__["NumUtils"].getLeadingZeroNum(date.getHours());
        const minutes = _num__WEBPACK_IMPORTED_MODULE_0__["NumUtils"].getLeadingZeroNum(date.getMinutes());
        return `${day}-${month}-${year} ${hours}:${minutes}`;
    }
}


/***/ }),

/***/ "./src/utils/num.ts":
/*!**************************!*\
  !*** ./src/utils/num.ts ***!
  \**************************/
/*! exports provided: NumUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumUtils", function() { return NumUtils; });
class NumUtils {
    static getLeadingZeroNum(num) {
        return `${num < 10 ? '0' : ''}${num}`;
    }
}


/***/ }),

/***/ "./src/utils/uuid.ts":
/*!***************************!*\
  !*** ./src/utils/uuid.ts ***!
  \***************************/
/*! exports provided: Uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uuid", function() { return Uuid; });
class Uuid {
    static generate() {
        const arr = new Uint8Array(20);
        window.crypto.getRandomValues(arr);
        return Array.from(arr, (x) => x.toString(16)).join('');
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JfL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9idXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Zvcm0tZWxlbWVudC9mb3JtLWVsZW1lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vaW5wdXQvaW5wdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kYWwvbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vc2VsZWN0L3NlbGVjdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90ZXh0YXJlYS90ZXh0YXJlYS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50LXRpbWVsaW5lL2V2ZW50LXRpbWVsaW5lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXZlbnQtdGltZWxpbmUvbmV3cy9uZXdzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXZlbnQtdGltZWxpbmUvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uZXdzLWNyZWF0aW9uLW1vZGFsL25ld3MtY3JlYXRpb24tbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uZXdzLWluZm8tbW9kYWwvbmV3cy1pbmZvLW1vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24tY3JlYXRpb24tbW9kYWwvdHJhbnNhY3Rpb24tY3JlYXRpb24tbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmFuc2FjdGlvbi1pbmZvLW1vZGFsL3RyYW5zYWN0aW9uLWluZm8tbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9idXR0b24vYnV0dG9uLnNjc3M/NDJkNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vYnV0dG9uL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vZm9ybS1lbGVtZW50L2Zvcm0tZWxlbWVudC5zY3NzPzRkZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Zvcm0tZWxlbWVudC9mb3JtLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2lucHV0L2lucHV0LnNjc3M/YjEyYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vaW5wdXQvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL21vZGFsL21vZGFsLnNjc3M/ODgwMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbW9kYWwvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NlbGVjdC9zZWxlY3Quc2Nzcz9kYzc4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zZWxlY3Qvc2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90ZXh0YXJlYS90ZXh0YXJlYS5zY3NzPzM1OTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3RleHRhcmVhL3RleHRhcmVhLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50LXRpbWVsaW5lL2V2ZW50LXRpbWVsaW5lLnNjc3M/ZTA3YiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudC10aW1lbGluZS9ldmVudC10aW1lbGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudC10aW1lbGluZS9uZXdzL25ld3Muc2Nzcz8xNzJhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50LXRpbWVsaW5lL25ld3MvbmV3cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudC10aW1lbGluZS90cmFuc2FjdGlvbi90cmFuc2FjdGlvbi5zY3NzPzMwNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXZlbnQtdGltZWxpbmUvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmV3cy1jcmVhdGlvbi1tb2RhbC9uZXdzLWNyZWF0aW9uLW1vZGFsLnNjc3M/NzhkNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uZXdzLWNyZWF0aW9uLW1vZGFsL25ld3MtY3JlYXRpb24tbW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmV3cy1pbmZvLW1vZGFsL25ld3MtaW5mby1tb2RhbC5zY3NzP2RiYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmV3cy1pbmZvLW1vZGFsL25ld3MtaW5mby1tb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmFuc2FjdGlvbi1jcmVhdGlvbi1tb2RhbC90cmFuc2FjdGlvbi1jcmVhdGlvbi1tb2RhbC5zY3NzPzljZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24tY3JlYXRpb24tbW9kYWwvdHJhbnNhY3Rpb24tY3JlYXRpb24tbW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24taW5mby1tb2RhbC90cmFuc2FjdGlvbi1pbmZvLW1vZGFsLnNjc3M/NzExYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmFuc2FjdGlvbi1pbmZvLW1vZGFsL3RyYW5zYWN0aW9uLWluZm8tbW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RhdGEtc2VydmljZS9kYXRhLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdmlydHVhbC1kb20vY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3ZpcnR1YWwtZG9tL3BhdGNoLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9ja3MvYmFua3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vY2tzL2N1cnJlbmNpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vY2tzL2V2ZW50LXRpbWVsaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9iYW5rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY3VycmVuY3kudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2V2ZW50LXRpbWVsaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbnVtLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBMkI7QUFDbkM7QUFDQTtBQUNBLEtBQUssTUFBTSxFQU1OO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLEVBQUU7QUFDckIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVksRUFBRTtBQUNwRDtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQyxrQ0FBa0MsV0FBVyxZQUFZLEVBQUU7QUFDM0Qsa0NBQWtDLFVBQVU7QUFDNUM7QUFDQSwrQkFBK0IsR0FBRyxjQUFjLEVBQUU7QUFDbEQsa0NBQWtDLFdBQVcsWUFBWSxFQUFFO0FBQzNELGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixtQkFBbUIsc0NBQXNDLEVBQUU7QUFDM0QsMEJBQTBCO0FBQzFCLDJCQUEyQixzQ0FBc0MsRUFBRTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsNEJBQTRCO0FBQzVCLDZCQUE2QixzQ0FBc0MsRUFBRTtBQUNyRSxvQ0FBb0M7QUFDcEMscUNBQXFDLHNDQUFzQyxFQUFFO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN4TkQsMkJBQTJCLG1CQUFPLENBQUMsOEdBQXlEO0FBQzVGO0FBQ0EsY0FBYyxRQUFTLFlBQVksb0JBQW9CLGlCQUFpQixlQUFlLHVCQUF1QixpQkFBaUIsaUJBQWlCLG9CQUFvQixFQUFFLHdCQUF3QixnQ0FBZ0MsRUFBRSx5QkFBeUIsZ0NBQWdDLEVBQUUsdUJBQXVCLGdDQUFnQyxFQUFFOzs7Ozs7Ozs7Ozs7O0FDRnBWLDJCQUEyQixtQkFBTyxDQUFDLDhHQUF5RDtBQUM1RjtBQUNBLGNBQWMsUUFBUyxrQkFBa0Isa0JBQWtCLDJCQUEyQix5QkFBeUIsdUJBQXVCLEVBQUUsMEJBQTBCLHlCQUF5QixFQUFFLDBCQUEwQix5QkFBeUIsZ0JBQWdCLHNCQUFzQixrQ0FBa0MsRUFBRTs7Ozs7Ozs7Ozs7OztBQ0YxVCwyQkFBMkIsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDNUY7QUFDQSxjQUFjLFFBQVMsV0FBVyxpQkFBaUIsb0JBQW9CLHNCQUFzQix1QkFBdUIsOEJBQThCLEVBQUUsa0JBQWtCLGlCQUFpQiw0QkFBNEIsRUFBRTs7Ozs7Ozs7Ozs7OztBQ0ZyTiwyQkFBMkIsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDNUY7QUFDQSxjQUFjLFFBQVMsV0FBVyx1QkFBdUIsWUFBWSxXQUFXLGdCQUFnQixpQkFBaUIseUNBQXlDLGtCQUFrQix3QkFBd0IsNEJBQTRCLEVBQUUscUJBQXFCLHlCQUF5QixtQkFBbUIsOEJBQThCLG9CQUFvQixnQ0FBZ0MseUJBQXlCLEVBQUUsb0NBQW9DLHdCQUF3QiwyQkFBMkIsbUJBQW1CLGVBQWUscUJBQXFCLG1CQUFtQixrQkFBa0Isd0JBQXdCLHNDQUFzQyxFQUFFOzs7Ozs7Ozs7Ozs7O0FDRm5vQiwyQkFBMkIsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDNUY7QUFDQSxjQUFjLFFBQVMsWUFBWSxpQkFBaUIsb0JBQW9CLHVCQUF1Qiw4QkFBOEIsNEJBQTRCLEVBQUUsbUJBQW1CLGlCQUFpQiw0QkFBNEIsRUFBRTs7Ozs7Ozs7Ozs7OztBQ0Y3TiwyQkFBMkIsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDNUY7QUFDQSxjQUFjLFFBQVMsY0FBYyxvQkFBb0Isc0JBQXNCLHVCQUF1Qiw4QkFBOEIscUJBQXFCLEVBQUUscUJBQXFCLGlCQUFpQiw0QkFBNEIsRUFBRTs7Ozs7Ozs7Ozs7OztBQ0YvTiwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsb0JBQW9CLGlCQUFpQixtQkFBbUIsdUJBQXVCLEVBQUUsa0RBQWtELHlCQUF5QixFQUFFLDhCQUE4Qix1QkFBdUIsRUFBRSxxQ0FBcUMsd0JBQXdCLDBCQUEwQix1QkFBdUIsRUFBRSw4Q0FBOEMsMEJBQTBCLCtCQUErQix1QkFBdUIsRUFBRSwyQkFBMkIsc0JBQXNCLHVDQUF1QyxxQkFBcUIsNkJBQTZCLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNGeG1CLDJCQUEyQixtQkFBTyxDQUFDLDhHQUF5RDtBQUM1RjtBQUNBLGNBQWMsUUFBUyxnQ0FBZ0MsOEJBQThCLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNGdkYsMkJBQTJCLG1CQUFPLENBQUMsOEdBQXlEO0FBQzVGO0FBQ0EsY0FBYyxRQUFTLGdGQUFnRiw4QkFBOEIsRUFBRSxrRkFBa0YsOEJBQThCLEVBQUUsdUNBQXVDLG1CQUFtQixFQUFFOzs7Ozs7Ozs7Ozs7O0FDRnJULDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyx5QkFBeUIsa0JBQWtCLDJCQUEyQixFQUFFLGtDQUFrQyxzQkFBc0Isd0JBQXdCLEVBQUUsdUNBQXVDLDJCQUEyQixFQUFFOzs7Ozs7Ozs7Ozs7O0FDRnJQLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxxQkFBcUIsa0JBQWtCLDJCQUEyQixFQUFFLDZCQUE2QixzQkFBc0Isd0JBQXdCLEVBQUUsNEJBQTRCLGdDQUFnQyxxQkFBcUIsd0JBQXdCLEVBQUUsbUNBQW1DLDJCQUEyQixFQUFFOzs7Ozs7Ozs7Ozs7O0FDRm5WLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxnQ0FBZ0Msa0JBQWtCLDJCQUEyQixFQUFFLHlDQUF5QyxzQkFBc0Isd0JBQXdCLEVBQUUsOENBQThDLDJCQUEyQixFQUFFOzs7Ozs7Ozs7Ozs7O0FDRjFRLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyw0QkFBNEIsa0JBQWtCLDJCQUEyQixFQUFFLHFDQUFxQyxzQkFBc0Isd0JBQXdCLEVBQUUsbUNBQW1DLGdDQUFnQyxxQkFBcUIsd0JBQXdCLEVBQUUsNENBQTRDLDJCQUEyQixFQUFFOzs7Ozs7Ozs7Ozs7OztBQ0ZyVzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLG9CQUFvQjtBQUNuQyw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLDZDQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxPQUFPLEdBQUcsNkNBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUU5RCxPQUFPLEdBQUksR0FBSSxJQUFLLEtBQU0sSUFBSyxJQUFLLElBQUssS0FBTSxJQUFLLE9BQVEsRUFBRSxDQUFDO0lBQ25FLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ2REO0FBQUE7QUFBTyxNQUFNLFFBQVE7SUFFVixNQUFNLENBQUMsaUJBQWlCLENBQUUsR0FBVztRQUN4QyxPQUFPLEdBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksR0FBSSxFQUFFLENBQUM7SUFDN0MsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUFPLE1BQU0sSUFBSTtJQUVOLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUVKIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyogZ2xvYmFsIGRlZmluZTogdHJ1ZSAqL1xuKC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIENvbW1vbkpTXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICAgICAgcm9vdC5iXyA9IGZhY3RvcnkoKTtcbiAgICB9XG59KVxuKHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMudGFpbFNwYWNlPScnXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5lbGVtZW50U2VwYXJhdG9yPSdfXyddXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm1vZFNlcGFyYXRvcj0nXyddXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm1vZFZhbHVlU2VwYXJhdG9yPSdfJ11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2xhc3NTZXBhcmF0b3I9JyAnXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5pc0Z1bGxNb2RpZmllcj10cnVlXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5pc0Z1bGxCb29sVmFsdWU9ZmFsc2VdXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBCZW1Gb3JtYXR0ZXIob3B0aW9ucykge1xuICAgICAgICAvLyBDYXNlIGNhbGwgQmVtRm9ybWF0dGVyKCkgd2l0aG91dCBuZXdcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mICBCZW1Gb3JtYXR0ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQmVtRm9ybWF0dGVyKG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHRoaXMudGFpbFNwYWNlID0gb3B0aW9ucy50YWlsU3BhY2UgfHwgJyc7XG4gICAgICAgIHRoaXMuZWxlbWVudFNlcGFyYXRvciA9IG9wdGlvbnMuZWxlbWVudFNlcGFyYXRvciB8fCAnX18nO1xuICAgICAgICB0aGlzLm1vZFNlcGFyYXRvciA9IG9wdGlvbnMubW9kU2VwYXJhdG9yIHx8ICdfJztcbiAgICAgICAgdGhpcy5tb2RWYWx1ZVNlcGFyYXRvciA9IG9wdGlvbnMubW9kVmFsdWVTZXBhcmF0b3IgfHwgJ18nO1xuICAgICAgICB0aGlzLmNsYXNzU2VwYXJhdG9yID0gb3B0aW9ucy5jbGFzc1NlcGFyYXRvciB8fCAnICc7XG4gICAgICAgIHRoaXMuaXNGdWxsTW9kaWZpZXIgPSB0eXBlb2Ygb3B0aW9ucy5pc0Z1bGxNb2RpZmllciA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5pc0Z1bGxNb2RpZmllcjtcbiAgICAgICAgdGhpcy5pc0Z1bGxCb29sVmFsdWUgPSB0eXBlb2Ygb3B0aW9ucy5pc0Z1bGxCb29sVmFsdWUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBvcHRpb25zLmlzRnVsbEJvb2xWYWx1ZTtcbiAgICB9XG5cbiAgICBCZW1Gb3JtYXR0ZXIucHJvdG90eXBlID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGlmaWVyS2V5XG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbW9kaWZpZXJWYWx1ZVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3N0cmluZ2lmeU1vZGlmaWVyOiBmdW5jdGlvbiAoYmFzZSwgbW9kaWZpZXJLZXksIG1vZGlmaWVyVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgICAgICAgICAgLy8gSWdub3JlIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXJWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBub3QgdXNpbmcgZnVsbCBib29scyBpZ25vcmUgZmFsc2UgdmFsdWVzXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGdWxsQm9vbFZhbHVlICYmIG1vZGlmaWVyVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWFrZXMgYmxvY2tfX2VsZW1fe21vZGlmaWVyS2V5fVxuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuY2xhc3NTZXBhcmF0b3IgKyBiYXNlICsgdGhpcy5tb2RTZXBhcmF0b3IgKyBtb2RpZmllcktleTtcblxuICAgICAgICAgICAgLy8gSWYgbm90IHVzaW5nIGZ1bGwgYm9vbHMgc2tpcCB0cnVlIGBtb2RpZmllclZhbHVlYFxuICAgICAgICAgICAgaWYgKHRoaXMuaXNGdWxsQm9vbFZhbHVlIHx8IG1vZGlmaWVyVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyBNYWtlcyBibG9ja19fZWxlbV97bW9kaWZpZXJLZXl9X3ttb2RpZmllclZhbHVlfVxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLm1vZFZhbHVlU2VwYXJhdG9yICsgU3RyaW5nKG1vZGlmaWVyVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gbW9kaWZpZXJzXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfc3RyaW5naWZ5TW9kaWZpZXJzOiBmdW5jdGlvbiAoYmFzZSwgbW9kaWZpZXJzKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Z1bGxNb2RpZmllcikge1xuICAgICAgICAgICAgICAgIGJhc2UgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgbW9kaWZpZXJLZXkgaW4gbW9kaWZpZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllcnMuaGFzT3duUHJvcGVydHkobW9kaWZpZXJLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLl9zdHJpbmdpZnlNb2RpZmllcihiYXNlLCBtb2RpZmllcktleSwgbW9kaWZpZXJzW21vZGlmaWVyS2V5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBibG9ja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2VsZW1lbnRdXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbW9kaWZpZXJzXVxuICAgICAgICAgKi9cbiAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAoYmxvY2ssIGVsZW1lbnQsIG1vZGlmaWVycykge1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IFN0cmluZyhibG9jayk7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgYl8oYmxvY2ssIG1vZGlmaWVycylcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kaWZpZXJzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycyA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IHRoaXMuZWxlbWVudFNlcGFyYXRvciArIFN0cmluZyhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vZGlmaWVycykge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSB0aGlzLl9zdHJpbmdpZnlNb2RpZmllcnMoY2xhc3NOYW1lLCBtb2RpZmllcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lICsgdGhpcy50YWlsU3BhY2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHBhcnRpYWxseSBhcHBsaWVkIGJfXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmxvY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2VsZW1lbnRdXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFttb2RpZmllcnNdXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufSBwYXJ0aWFsbHkgYXBwbGllZCBiX1xuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqIHZhciBCID0gcmVxdWlyZSgnYl8nKTtcbiAgICAgKiB2YXIgYiA9IEIud2l0aCgnYi1idXR0b24nKTtcbiAgICAgKiB2YXIgZSA9IEIud2l0aCgnYi1idXR0b24nLCAnZWxlbScpO1xuICAgICAqXG4gICAgICogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgKiAgIHJldHVybiAoXG4gICAgICAgICAqICAgICA8ZGl2IGNsYXNzTmFtZT17YigpfT5cbiAgICAgICAgICogICAgICAgPHNwYW4gY2xhc3NOYW1lPXtiKCdpY29uJywge3R5cGU6ICdhZGQnfSl9Pjwvc3Bhbj5cbiAgICAgICAgICogICAgICAgPHNwYW4gY2xhc3NOYW1lPXtiKCd0ZXh0Jyl9Pjwvc3Bhbj5cbiAgICAgICAgICogICAgIDwvZGl2PlxuICAgICAgICAgKiAgICAgPGRpdiBjbGFzc05hbWU9e2Ioe3NpemU6ICdzbWFsbCd9KX0+XG4gICAgICAgICAqICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YignaWNvbicsIHt0eXBlOiAnYWRkJ30pfT48L3NwYW4+XG4gICAgICAgICAqICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YigndGV4dCcpfT48L3NwYW4+XG4gICAgICAgICAqICAgICA8L2Rpdj5cbiAgICAgICAgICogICApO1xuICAgICAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZnVuY3Rpb24gd2l0aE1peGluKGJsb2NrLCBlbGVtZW50LCBtb2RpZmllcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZC5hcHBseSh0aGlzLCBbbnVsbF0uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGVCZW1Gb3JtYXR0ZXIob3B0aW9ucykge1xuICAgICAgICB2YXIgYmVtRm9ybWF0dGVyID0gbmV3IEJlbUZvcm1hdHRlcihvcHRpb25zKTtcblxuICAgICAgICB2YXIgYiA9IGJlbUZvcm1hdHRlci5zdHJpbmdpZnkuYmluZChiZW1Gb3JtYXR0ZXIpO1xuICAgICAgICBiWyd3aXRoJ10gPSBiLmxvY2sgPSB3aXRoTWl4aW47XG5cbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb24odGhpczpCZW1Gb3JtYXR0ZXIpfVxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIHZhciB2ID0gcmVxdWlyZSgnYl8nKTtcbiAgICAgKlxuICAgICAqIGIoJ2Jsb2NrJyk7IC8vICdibG9jaydcbiAgICAgKiBiKCdibG9jaycsIHttb2QxOiB0cnVlLCBtb2QyOiBmYWxzZSwgbW9kMzogJ21vZDMnfSk7IC8vICdibG9jayBibG9ja19tb2QxIGJsb2NrX21vZDNfbW9kMydcbiAgICAgKiBiKCdibG9jaycsICdlbGVtJyk7IC8vICdibG9ja19fZWxlbSdcbiAgICAgKiBiKCdibG9jaycsICdlbGVtJywge21vZDE6IHRydWUsIG1vZDI6IGZhbHNlLCBtb2QzOiAnbW9kMyd9KTsgLy8gJ2Jsb2NrX19lbGVtIGJsb2NrX19lbGVtX21vZDEgYmxvY2tfX2VsZW1fbW9kM19tb2QzJ1xuICAgICAqL1xuICAgIHZhciBiID0gY3JlYXRlQmVtRm9ybWF0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtCZW1Gb3JtYXR0ZXJ9XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogdmFyIGIgPSBuZXcgKHJlcXVpcmUoJ2JfJykuQikoe1xuICAgICAqICAgdGFpbFNwYWNlOiAnICcsXG4gICAgICogICBlbGVtZW50U2VwYXJhdG9yOiAnLScsXG4gICAgICogICBtb2RTZXBhcmF0b3I6ICctLScsXG4gICAgICogICBtb2RWYWx1ZVNlcGFyYXRvcjogJy0nLFxuICAgICAqICAgY2xhc3NTZXBhcmF0b3I6ICcgJ1xuICAgICAqIH0pO1xuICAgICAqXG4gICAgICogYi5zdHJpbmdpZnkoJ2Jsb2NrJyk7IC8vICdibG9jayAnXG4gICAgICogYi5zdHJpbmdpZnkoJ2Jsb2NrJywge21vZDE6IHRydWUsIG1vZDI6IGZhbHNlLCBtb2QzOiAnbW9kMyd9KTsgLy8gJ2Jsb2NrIGJsb2NrLS1tb2QxIGJsb2NrLS1tb2QzLW1vZDMgJ1xuICAgICAqIGIuc3RyaW5naWZ5KCdibG9jaycsICdlbGVtJyk7IC8vICdibG9jay1lbGVtICdcbiAgICAgKiBiLnN0cmluZ2lmeSgnYmxvY2snLCAnZWxlbScsIHttb2QxOiB0cnVlLCBtb2QyOiBmYWxzZSwgbW9kMzogJ21vZDMnfSk7IC8vICdibG9jay1lbGVtIGJsb2NrLWVsZW0tLW1vZDEgYmxvY2stZWxlbS0tbW9kMy1tb2QzJ1xuICAgICAqL1xuICAgIGIuQiA9IEJlbUZvcm1hdHRlcjtcblxuICAgIHJldHVybiBiO1xufSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxcbiAgLmJ1dHRvbl9jb2xvcl9ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgfVxcbiAgLmJ1dHRvbl9jb2xvcl9ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7IH1cXG4gIC5idXR0b25fY29sb3JfcmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm0tZWxlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuZm9ybS1lbGVtZW50X19sYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDsgfVxcbiAgLmZvcm0tZWxlbWVudF9fZXJyb3Ige1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dCB7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7IH1cXG4gIC5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJvcmRlci1jb2xvcjogIzgwYmRmZjsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5tb2RhbF9fY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0NDQ0NDQztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5tb2RhbF9fY29udGVudC1jbG9zZS1idXR0b24ge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDVweDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdCB7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gIC5zZWxlY3Q6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXItY29sb3I6ICM4MGJkZmY7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICByZXNpemU6IHZlcnRpY2FsOyB9XFxuICAudGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXItY29sb3I6ICM4MGJkZmY7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudC10aW1lbGluZSB7XFxuICB3aWR0aDogOTYwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDsgfVxcbiAgLmV2ZW50LXRpbWVsaW5lX190cmFuc2FjdGlvbi1jcmVhdGlvbi1idXR0b24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG4gIC5ldmVudC10aW1lbGluZV9fc29ydGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7IH1cXG4gICAgLmV2ZW50LXRpbWVsaW5lX19zb3J0aW5nLWl0ZW0ge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgICBjb2xvcjogIzMzNjY5OTsgfVxcbiAgICAgIC5ldmVudC10aW1lbGluZV9fc29ydGluZy1pdGVtX2FjdGl2ZSB7XFxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgLmV2ZW50LXRpbWVsaW5lX19pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0NDQ0NDQztcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAzcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudC10aW1lbGluZS1uZXdzX3JlYWRlZCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXZlbnQtdGltZWxpbmUtdHJhbnNhY3Rpb25fdHlwZV9pbmNvbWUgLmV2ZW50LXRpbWVsaW5lLXRyYW5zYWN0aW9uX19hbW91bnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDRkZDQzsgfVxcblxcbi5ldmVudC10aW1lbGluZS10cmFuc2FjdGlvbl90eXBlX2V4cGVuc2UgLmV2ZW50LXRpbWVsaW5lLXRyYW5zYWN0aW9uX19hbW91bnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0NDQzsgfVxcblxcbi5ldmVudC10aW1lbGluZS10cmFuc2FjdGlvbl9fZGF0ZSB7XFxuICBtYXJnaW46IDAgMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5ld3MtY3JlYXRpb24tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5uZXdzLWNyZWF0aW9uLW1vZGFsX19oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAubmV3cy1jcmVhdGlvbi1tb2RhbF9fc2F2ZS1idXR0b24ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5ld3MtaW5mby1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLm5ld3MtaW5mby1tb2RhbF9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAubmV3cy1pbmZvLW1vZGFsX19kYXRlIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAubmV3cy1pbmZvLW1vZGFsX19yZWFkLWJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudHJhbnNhY3Rpb24tY3JlYXRpb24tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC50cmFuc2FjdGlvbi1jcmVhdGlvbi1tb2RhbF9faGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgLnRyYW5zYWN0aW9uLWNyZWF0aW9uLW1vZGFsX19zYXZlLWJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudHJhbnNhY3Rpb24taW5mby1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLnRyYW5zYWN0aW9uLWluZm8tbW9kYWxfX2Ftb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIC50cmFuc2FjdGlvbi1pbmZvLW1vZGFsX19kYXRlIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAudHJhbnNhY3Rpb24taW5mby1tb2RhbF9fcmVtb3ZlLWJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2J1dHRvbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2J1dHRvbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9idXR0b24uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIGIgZnJvbSAnYl8nO1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBWaXJ0dWFsTWFya3VwIH0gZnJvbSAnLi4vLi4vLi4vY29yZS92aXJ0dWFsLWRvbS9pbnRlcmZhY2VzJztcblxuaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudDxCdXR0b25Qcm9wcz4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEJ1dHRvblByb3BzKSB7XG4gICAgICAgIHN1cGVyKCdidXR0b24nLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgY29uc3QgeyBjbGFzc01peCwgY29sb3IsIG9uQ2xpY2ssIHRleHQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAkeyBiKHRoaXMuY2xhc3NOYW1lLCB7IGNvbG9yIH0pIH0gJHsgY2xhc3NNaXggfHwgJycgfWA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdidXR0b24nLFxuICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3M6IGNsYXNzTmFtZSwgdHlwZTogJ2J1dHRvbicgfSxcbiAgICAgICAgICAgIGxpc3RlbmVyczogeyBjbGljazogKCkgPT4gb25DbGljaygpIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW3RleHRdXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xuICAgIGNsYXNzTWl4Pzogc3RyaW5nO1xuICAgIGNvbG9yOiAnYmx1ZScgfCAnZ3JlZW4nIHwgJ3JlZCc7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICB0ZXh0OiBzdHJpbmc7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZm9ybS1lbGVtZW50LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZm9ybS1lbGVtZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Zvcm0tZWxlbWVudC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgYiBmcm9tICdiXyc7XG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29tcG9uZW50JztcbmltcG9ydCB7IFZpcnR1YWxNYXJrdXAgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3ZpcnR1YWwtZG9tL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgJy4vZm9ybS1lbGVtZW50LnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgRm9ybUVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnQ8Rm9ybUVsZW1lbnRQcm9wcz4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEZvcm1FbGVtZW50UHJvcHMpIHtcbiAgICAgICAgc3VwZXIoJ2Zvcm0tZWxlbWVudCcsIHByb3BzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICBjb25zdCB7IGNvbnRyb2wgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3M6IHRoaXMuY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTGFiZWwoKSxcbiAgICAgICAgICAgICAgICBjb250cm9sLFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRXJyb3IoKVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyTGFiZWwoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2xhYmVsJyxcbiAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiBiKHRoaXMuY2xhc3NOYW1lLCAnbGFiZWwnKSB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFsgbGFiZWwgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRXJyb3IoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3M6IGIodGhpcy5jbGFzc05hbWUsICdlcnJvcicpIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogWyBlcnJvciB8fCAnJyBdXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBGb3JtRWxlbWVudFByb3BzIHtcbiAgICBjb250cm9sOiBWaXJ0dWFsTWFya3VwO1xuICAgIGVycm9yPzogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbnB1dC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2lucHV0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2lucHV0LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBWaXJ0dWFsTWFya3VwIH0gZnJvbSAnLi4vLi4vLi4vY29yZS92aXJ0dWFsLWRvbS9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgRm9ybUVsZW1lbnQgfSBmcm9tICcuLi9mb3JtLWVsZW1lbnQvZm9ybS1lbGVtZW50JztcblxuaW1wb3J0ICcuL2lucHV0LnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SW5wdXRQcm9wcz4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElucHV0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIoJ2lucHV0JywgcHJvcHMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW5kZXIoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3IsIGxhYmVsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudFByb3BzID0geyBlcnJvciwgbGFiZWwsIGNvbnRyb2w6IHRoaXMucmVuZGVySW5wdXQoKSB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KCdjb250YWluZXInLCBGb3JtRWxlbWVudCwgZm9ybUVsZW1lbnRQcm9wcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJJbnB1dCgpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2lucHV0JyxcbiAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiB0aGlzLmNsYXNzTmFtZSwgdmFsdWU6IHZhbHVlIHx8ICcnIH0sXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHsgaW5wdXQ6IHRoaXMub25WYWx1ZUNoYW5nZSB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblZhbHVlQ2hhbmdlID0gKGU6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHsgb25JbnB1dCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAob25JbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICBvbklucHV0KChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElucHV0UHJvcHMge1xuICAgIGVycm9yPzogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgb25JbnB1dD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHZhbHVlPzogc3RyaW5nO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21vZGFsLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbW9kYWwuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbW9kYWwuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIGIgZnJvbSAnYl8nO1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBWaXJ0dWFsTWFya3VwIH0gZnJvbSAnLi4vLi4vLi4vY29yZS92aXJ0dWFsLWRvbS9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWwnO1xuXG5pbXBvcnQgJy4vbW9kYWwuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudDxNb2RhbFByb3BzPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogTW9kYWxQcm9wcykge1xuICAgICAgICBzdXBlcignbW9kYWwnLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBhdHRyczogeyBjbGFzczogdGhpcy5jbGFzc05hbWUgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiBiKHRoaXMuY2xhc3NOYW1lLCAnY29udGVudCcpIH0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFt0aGlzLnJlbmRlckNsb3NlQnV0dG9uKCksIGNoaWxkcmVuXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyQ2xvc2VCdXR0b24oKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiBiKHRoaXMuY2xhc3NOYW1lLCAnY29udGVudC1jbG9zZS1idXR0b24nKSB9LFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7IGNsaWNrOiAoKSA9PiBNb2RhbFNlcnZpY2UuaGlkZSgpIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogWyfDlyddXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBNb2RhbFByb3BzIHtcbiAgICBjaGlsZHJlbjogVmlydHVhbE1hcmt1cFxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc2VsZWN0LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc2VsZWN0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NlbGVjdC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlydHVhbE1hcmt1cCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdmlydHVhbC1kb20vaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7IEZvcm1FbGVtZW50IH0gZnJvbSAnLi4vZm9ybS1lbGVtZW50L2Zvcm0tZWxlbWVudCc7XG5cbmltcG9ydCAnLi9zZWxlY3Quc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBDb21wb25lbnQ8U2VsZWN0UHJvcHM+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBTZWxlY3RQcm9wcykge1xuICAgICAgICBzdXBlcignc2VsZWN0JywgcHJvcHMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW5kZXIoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoJ2NvbnRhaW5lcicsIEZvcm1FbGVtZW50LCB7IGxhYmVsLCBjb250cm9sOiB0aGlzLnJlbmRlclNlbGVjdCgpIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyU2VsZWN0KCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICBjb25zdCB7IGNob2ljZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3M6IHRoaXMuY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHsgY2hhbmdlOiB0aGlzLm9uVmFsdWVDaGFuZ2UgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaG9pY2VzLm1hcCh0aGlzLnJlbmRlck9wdGlvbilcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlck9wdGlvbihjaG9pY2U6IFNlbGVjdENob2ljZSk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ29wdGlvbicsXG4gICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogY2hvaWNlLnZhbHVlIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW2Nob2ljZS50ZXh0XVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25WYWx1ZUNoYW5nZSA9IChlOiBFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCB7IG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvblNlbGVjdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBvblNlbGVjdCgoZS50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgU2VsZWN0Q2hvaWNlIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlbGVjdFByb3BzIHtcbiAgICBjaG9pY2VzOiBTZWxlY3RDaG9pY2VbXTtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIG9uU2VsZWN0PzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi90ZXh0YXJlYS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3RleHRhcmVhLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3RleHRhcmVhLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBWaXJ0dWFsTWFya3VwIH0gZnJvbSAnLi4vLi4vLi4vY29yZS92aXJ0dWFsLWRvbS9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgRm9ybUVsZW1lbnQgfSBmcm9tICcuLi9mb3JtLWVsZW1lbnQvZm9ybS1lbGVtZW50JztcblxuaW1wb3J0ICcuL3RleHRhcmVhLnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8VGV4dEFyZWFQcm9wcz4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRleHRBcmVhUHJvcHMpIHtcbiAgICAgICAgc3VwZXIoJ3RleHRhcmVhJywgcHJvcHMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW5kZXIoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3IsIGxhYmVsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudFByb3BzID0geyBlcnJvciwgbGFiZWwsIGNvbnRyb2w6IHRoaXMucmVuZGVyVGV4dEFyZWEoKSB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KCdjb250YWluZXInLCBGb3JtRWxlbWVudCwgZm9ybUVsZW1lbnRQcm9wcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJUZXh0QXJlYSgpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiB0aGlzLmNsYXNzTmFtZSwgcm93czogJzUnLCB2YWx1ZSB9LFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7IGlucHV0OiB0aGlzLm9uVmFsdWVDaGFuZ2UgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25WYWx1ZUNoYW5nZSA9IChlOiBFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCB7IG9uSW5wdXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG9uSW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgb25JbnB1dCgoZS50YXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBUZXh0QXJlYVByb3BzIHtcbiAgICBlcnJvcj86IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIG9uSW5wdXQ/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgICB2YWx1ZTogc3RyaW5nO1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZXZlbnQtdGltZWxpbmUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ldmVudC10aW1lbGluZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ldmVudC10aW1lbGluZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgYiBmcm9tICdiXyc7XG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50JztcbmltcG9ydCB7IFZpcnR1YWxNYXJrdXAgfSBmcm9tICcuLi8uLi9jb3JlL3ZpcnR1YWwtZG9tL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyBCYW5rc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9iYW5rcyc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jdXJyZW5jeSc7XG5pbXBvcnQgeyBFdmVudFRpbWVMaW5lU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LXRpbWVsaW5lJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vZGFsJztcbmltcG9ydCB7IFRpbWVMaW5lRXZlbnQsIEN1cnJlbmN5LCBCYW5rIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Qcm9wcyB9IGZyb20gJy4uL2NvbW1vbi9idXR0b24vYnV0dG9uJztcbmltcG9ydCB7IE5ld3NDcmVhdGlvbk1vZGFsIH0gZnJvbSAnLi4vbmV3cy1jcmVhdGlvbi1tb2RhbC9uZXdzLWNyZWF0aW9uLW1vZGFsJztcbmltcG9ydCB7IE5ld3NMaW5lIH0gZnJvbSAnLi9uZXdzL25ld3MnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25DcmVhdGlvbk1vZGFsIH0gZnJvbSAnLi4vdHJhbnNhY3Rpb24tY3JlYXRpb24tbW9kYWwvdHJhbnNhY3Rpb24tY3JlYXRpb24tbW9kYWwnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25MaW5lIH0gZnJvbSAnLi90cmFuc2FjdGlvbi90cmFuc2FjdGlvbic7XG5cbmltcG9ydCAnLi9ldmVudC10aW1lbGluZS5zY3NzJztcblxudHlwZSBTb3J0aW5nTW9kZSA9ICdkYXRlQXNjJyB8ICdkYXRlRGVzYycgfCAnZXZlbnRUeXBlQXNjJyB8ICdldmVudFR5cGVEZXNjJztcblxuY29uc3QgU09SVElOR19MQUJFTFM6IHsgW2tleSBpbiBTb3J0aW5nTW9kZV06IHN0cmluZyB9ID0ge1xuICAgIGRhdGVBc2M6ICfQv9C+INC00LDRgtC1ICjRgdGC0LDRgNGL0LUgLT4g0L3QvtCy0YvQtSknLFxuICAgIGRhdGVEZXNjOiAn0L/QviDQtNCw0YLQtSAo0L3QvtCy0YvQtSAtPiDRgdGC0LDRgNGL0LUpJyxcbiAgICBldmVudFR5cGVBc2M6ICfQv9C+INGC0LjQv9GDICjQkCAtPiDQryknLFxuICAgIGV2ZW50VHlwZURlc2M6ICfQv9C+INGC0LjQv9GDICjQryAtPiDQkCknXG59O1xuXG5leHBvcnQgY2xhc3MgRXZlbnRUaW1lTGluZSBleHRlbmRzIENvbXBvbmVudDxFdmVudFRpbWVMaW5lUHJvcHMsIEV2ZW50VGltZUxpbmVTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEV2ZW50VGltZUxpbmVQcm9wcykge1xuICAgICAgICBzdXBlcignZXZlbnQtdGltZWxpbmUnLCBwcm9wcywgeyBzb3J0Qnk6ICdkYXRlQXNjJywgYmFua3M6IG51bGwsIGN1cnJlbmNpZXM6IG51bGwsIGV2ZW50czogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGJhbmtzU2VydmljZSwgY3VycmVuY3lTZXJ2aWNlLCBldmVudFRpbWVMaW5lU2VydmljZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgXG4gICAgICAgIGJhbmtzU2VydmljZS5zdWJzY3JpYmUoKGJhbmtzKSA9PiB0aGlzLnNldFN0YXRlKHsgYmFua3MgfSkpO1xuICAgICAgICBjdXJyZW5jeVNlcnZpY2Uuc3Vic2NyaWJlKChjdXJyZW5jaWVzKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVuY2llcyB9KSk7XG4gICAgICAgIGV2ZW50VGltZUxpbmVTZXJ2aWNlLnN1YnNjcmliZSgoZXZlbnRzKSA9PiB0aGlzLnNldFN0YXRlKHsgZXZlbnRzIH0pKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBhdHRyczogeyBjbGFzczogdGhpcy5jbGFzc05hbWUgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUcmFuc2FjdGlvbkNyZWF0aW9uQnV0dG9uKCksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJOZXdzQ3JlYXRpb25CdXR0b24oKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNvcnRpbmcoKSxcbiAgICAgICAgICAgICAgICAuLi50aGlzLnJlbmRlckV2ZW50Tm9kZXMoKVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRXZlbnROb2RlcygpOiBWaXJ0dWFsTWFya3VwW10ge1xuICAgICAgICBjb25zdCB7IGV2ZW50VGltZUxpbmVTZXJ2aWNlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGJhbmtzLCBjdXJyZW5jaWVzLCBldmVudHMsIHNvcnRCeSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoYmFua3MgPT0gbnVsbCB8fCBjdXJyZW5jaWVzID09IG51bGwgfHwgZXZlbnRzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2ZW50c0Nsb25lID0gWyAuLi5ldmVudHMgXTtcblxuICAgICAgICBldmVudHNDbG9uZS5zb3J0KChlMSwgZTIpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoc29ydEJ5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF0ZUFzYyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlMS5kYXRlIDwgZTIuZGF0ZSA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICBjYXNlICdkYXRlRGVzYyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlMS5kYXRlIDwgZTIuZGF0ZSA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICBjYXNlICdldmVudFR5cGVBc2MnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTEuZXZlbnRUeXBlIDwgZTIuZXZlbnRUeXBlID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2V2ZW50VHlwZURlc2MnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTEuZXZlbnRUeXBlIDwgZTIuZXZlbnRUeXBlID8gMSA6IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZXZlbnRzQ2xvbmUubWFwKChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NNaXggPSBiKHRoaXMuY2xhc3NOYW1lLCAnaXRlbScpO1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SWQgPSBgZXZlbnQtJHsgZXZlbnQuaWQgfWA7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZXZlbnQuZXZlbnRUeXBlID09PSAnbmV3cydcbiAgICAgICAgICAgICAgICA/IHRoaXMucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudElkLCBOZXdzTGluZSxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc01peCwgZXZlbnRUaW1lTGluZVNlcnZpY2UsIG5ld3M6IGV2ZW50IH0pXG4gICAgICAgICAgICAgICAgOiB0aGlzLnJlbmRlckNvbXBvbmVudChjb21wb25lbnRJZCwgVHJhbnNhY3Rpb25MaW5lLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTWl4LCBldmVudFRpbWVMaW5lU2VydmljZSwgdHJhbnNhY3Rpb246IGV2ZW50LCBjdXJyZW5jaWVzLCBiYW5rcyB9KTsgICAgXG4gICAgICAgICAgICByZXR1cm4gbGluZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJUcmFuc2FjdGlvbkNyZWF0aW9uQnV0dG9uKCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICBjb25zdCB7IGV2ZW50VGltZUxpbmVTZXJ2aWNlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGJhbmtzLCBjdXJyZW5jaWVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IHByb3BzOiBCdXR0b25Qcm9wcyA9IHtcbiAgICAgICAgICAgIGNsYXNzTWl4OiBiKHRoaXMuY2xhc3NOYW1lLCAndHJhbnNhY3Rpb24tY3JlYXRpb24tYnV0dG9uJyksXG4gICAgICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4gTW9kYWxTZXJ2aWNlLnNob3coXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zYWN0aW9uQ3JlYXRpb25Nb2RhbCh7IGJhbmtzLCBjdXJyZW5jaWVzLCBldmVudFRpbWVMaW5lU2VydmljZSB9KS5pbml0KCkpLFxuICAgICAgICAgICAgdGV4dDogJ9CU0L7QsdCw0LLQuNGC0Ywg0YLRgNCw0L3Qt9Cw0LrRhtC40Y4nXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoJ3RyYW5zYWN0aW9uLWNyZWF0aW9uLWJ1dHRvbicsIEJ1dHRvbiwgcHJvcHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyTmV3c0NyZWF0aW9uQnV0dG9uKCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICBjb25zdCB7IGV2ZW50VGltZUxpbmVTZXJ2aWNlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IHByb3BzOiBCdXR0b25Qcm9wcyA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBNb2RhbFNlcnZpY2Uuc2hvdyhcbiAgICAgICAgICAgICAgICBuZXcgTmV3c0NyZWF0aW9uTW9kYWwoeyBldmVudFRpbWVMaW5lU2VydmljZSB9KS5pbml0KCkpLFxuICAgICAgICAgICAgdGV4dDogJ9CU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0L7RgdGC0YwnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KCduZXdzLWNyZWF0aW9uLWJ1dHRvbicsIEJ1dHRvbiwgcHJvcHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyU29ydGluZygpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3M6IGIodGhpcy5jbGFzc05hbWUsICdzb3J0aW5nJykgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgeyB0YWdOYW1lOiAnc3BhbicsIGNoaWxkcmVuOiBbJ9Ch0L7RgNGC0LjRgNC+0LLQsNGC0Yw6J10gfSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNvcnRpbmdJdGVtKCdkYXRlQXNjJyksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTb3J0aW5nSXRlbSgnZGF0ZURlc2MnKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNvcnRpbmdJdGVtKCdldmVudFR5cGVBc2MnKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNvcnRpbmdJdGVtKCdldmVudFR5cGVEZXNjJylcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyU29ydGluZ0l0ZW0oc29ydEJ5OiBTb3J0aW5nTW9kZSk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBiKHRoaXMuY2xhc3NOYW1lLCAnc29ydGluZy1pdGVtJywgeyBhY3RpdmU6IHRoaXMuc3RhdGUuc29ydEJ5ID09PSBzb3J0QnkgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiBjbGFzc05hbWUgfSxcbiAgICAgICAgICAgIGxpc3RlbmVyczogeyBjbGljazogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNvcnRCeSB9KSB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtTT1JUSU5HX0xBQkVMU1tzb3J0QnldXVxuICAgICAgICB9O1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgRXZlbnRUaW1lTGluZVByb3BzIHtcbiAgICBiYW5rc1NlcnZpY2U6IEJhbmtzU2VydmljZTtcbiAgICBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZTtcbiAgICBldmVudFRpbWVMaW5lU2VydmljZTogRXZlbnRUaW1lTGluZVNlcnZpY2U7XG59XG5cbmludGVyZmFjZSBFdmVudFRpbWVMaW5lU3RhdGUge1xuICAgIHNvcnRCeTogU29ydGluZ01vZGU7XG4gICAgYmFua3M6IEJhbmtbXTtcbiAgICBjdXJyZW5jaWVzOiBDdXJyZW5jeVtdO1xuICAgIGV2ZW50czogVGltZUxpbmVFdmVudFtdO1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbmV3cy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25ld3Muc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbmV3cy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgYiBmcm9tICdiXyc7XG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29tcG9uZW50JztcbmltcG9ydCB7IFZpcnR1YWxNYXJrdXAgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3ZpcnR1YWwtZG9tL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyBFdmVudFRpbWVMaW5lU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2V2ZW50LXRpbWVsaW5lJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFsJztcbmltcG9ydCB7IE5ld3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMnO1xuXG5pbXBvcnQgeyBOZXdzSW5mb01vZGFsIH0gZnJvbSAnLi4vLi4vbmV3cy1pbmZvLW1vZGFsL25ld3MtaW5mby1tb2RhbCc7XG5cbmltcG9ydCAnLi9uZXdzLnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgTmV3c0xpbmUgZXh0ZW5kcyBDb21wb25lbnQ8TmV3c0xpbmVQcm9wcz4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IE5ld3NMaW5lUHJvcHMpIHtcbiAgICAgICAgc3VwZXIoJ2V2ZW50LXRpbWVsaW5lLW5ld3MnLCBwcm9wcyk7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCByZW5kZXIoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IHsgY2xhc3NNaXgsIG5ld3MgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAkeyBiKHRoaXMuY2xhc3NOYW1lLCB7IHJlYWRlZDogbmV3cy5yZWFkZWQgfSkgfSAkeyBjbGFzc01peCB9YDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBhdHRyczogeyBjbGFzczogY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHsgY2xpY2s6IHRoaXMub25OZXdzQ2xpY2sgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbIG5ld3MudGl0bGUgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25OZXdzQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHsgZXZlbnRUaW1lTGluZVNlcnZpY2UsIG5ld3MgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgTW9kYWxTZXJ2aWNlLnNob3cobmV3IE5ld3NJbmZvTW9kYWwoeyBldmVudFRpbWVMaW5lU2VydmljZSwgbmV3cyB9KS5pbml0KCkpOyBcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIE5ld3NMaW5lUHJvcHMge1xuICAgIGNsYXNzTWl4OiBzdHJpbmc7XG4gICAgZXZlbnRUaW1lTGluZVNlcnZpY2U6IEV2ZW50VGltZUxpbmVTZXJ2aWNlO1xuICAgIG5ld3M6IE5ld3M7XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi90cmFuc2FjdGlvbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3RyYW5zYWN0aW9uLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3RyYW5zYWN0aW9uLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBiIGZyb20gJ2JfJztcblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlydHVhbE1hcmt1cCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdmlydHVhbC1kb20vaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7IEV2ZW50VGltZUxpbmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZXZlbnQtdGltZWxpbmUnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWwnO1xuaW1wb3J0IHsgVGltZUxpbmVUcmFuc2FjdGlvbiwgQ3VycmVuY3ksIEJhbmsgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGF0ZSc7XG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uSW5mb01vZGFsIH0gZnJvbSAnLi4vLi4vdHJhbnNhY3Rpb24taW5mby1tb2RhbC90cmFuc2FjdGlvbi1pbmZvLW1vZGFsJztcblxuaW1wb3J0ICcuL3RyYW5zYWN0aW9uLnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25MaW5lIGV4dGVuZHMgQ29tcG9uZW50PFRyYW5zYWN0aW9uTGluZVByb3BzPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJhbnNhY3Rpb25MaW5lUHJvcHMpIHtcbiAgICAgICAgc3VwZXIoJ2V2ZW50LXRpbWVsaW5lLXRyYW5zYWN0aW9uJywgcHJvcHMpO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICBjb25zdCB7IGNsYXNzTWl4LCB0cmFuc2FjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7IGIodGhpcy5jbGFzc05hbWUsIHsgdHlwZTogdHJhbnNhY3Rpb24udHJhbnNhY3Rpb25UeXBlIH0pIH0gJHsgY2xhc3NNaXggfWA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3M6IGNsYXNzTmFtZSB9LFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7IGNsaWNrOiB0aGlzLm9uVHJhbnNhY3Rpb25DbGljayB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckFtb3VudCgpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRGF0ZSgpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQmFua05hbWUoKVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyQW1vdW50KCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICBjb25zdCB7IHRyYW5zYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzaWduID0gdHJhbnNhY3Rpb24udHJhbnNhY3Rpb25UeXBlID09PSAnaW5jb21lJyA/ICcrJyA6ICctJztcbiAgICAgICAgY29uc3QgY3VycmVuY3lBYmJyID0gdGhpcy5nZXRDdXJyZW5jeUFiYnJldmlhdGlvbigpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICAgICAgICBhdHRyczogeyBjbGFzczogYih0aGlzLmNsYXNzTmFtZSwgJ2Ftb3VudCcpIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogWyBzaWduLCB0cmFuc2FjdGlvbi5hbW91bnQudG9TdHJpbmcoKSwgY3VycmVuY3lBYmJyIF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckRhdGUoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IHsgdHJhbnNhY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBEYXRlVXRpbHMuZm9ybWF0KHRyYW5zYWN0aW9uLmRhdGUpO1xuXG4gICAgICAgIHJldHVybiB7IHRhZ05hbWU6ICdzcGFuJywgYXR0cnM6IHsgY2xhc3M6IGIodGhpcy5jbGFzc05hbWUsICdkYXRlJykgfSwgY2hpbGRyZW46IFsgZGF0ZSBdIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJCYW5rTmFtZSgpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgY29uc3QgeyBiYW5rcywgdHJhbnNhY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBiYW5rcy5maW5kKCh4KSA9PiB4LmlkID09PSB0cmFuc2FjdGlvbi5iYW5rSWQpLm5hbWU7XG5cbiAgICAgICAgcmV0dXJuIHsgdGFnTmFtZTogJ3NwYW4nLCBjaGlsZHJlbjogWyBuYW1lIF0gfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVHJhbnNhY3Rpb25DbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW5jaWVzLCBldmVudFRpbWVMaW5lU2VydmljZSwgdHJhbnNhY3Rpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgTW9kYWxTZXJ2aWNlLnNob3coXG4gICAgICAgICAgICBuZXcgVHJhbnNhY3Rpb25JbmZvTW9kYWwoeyBjdXJyZW5jaWVzLCBldmVudFRpbWVMaW5lU2VydmljZSwgdHJhbnNhY3Rpb24gfSkuaW5pdCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbmN5QWJicmV2aWF0aW9uKCk6IEN1cnJlbmN5WydhYmJyZXZpYXRpb24nXSB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVuY2llcywgdHJhbnNhY3Rpb24gfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jaWVzLmZpbmQoKHgpID0+IHguaWQgPT09IHRyYW5zYWN0aW9uLmN1cnJlbmN5SWQpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW5jeS5hYmJyZXZpYXRpb247XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBUcmFuc2FjdGlvbkxpbmVQcm9wcyB7XG4gICAgYmFua3M6IEJhbmtbXTtcbiAgICBjbGFzc01peDogc3RyaW5nO1xuICAgIGN1cnJlbmNpZXM6IEN1cnJlbmN5W107XG4gICAgZXZlbnRUaW1lTGluZVNlcnZpY2U6IEV2ZW50VGltZUxpbmVTZXJ2aWNlO1xuICAgIHRyYW5zYWN0aW9uOiBUaW1lTGluZVRyYW5zYWN0aW9uO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25ld3MtY3JlYXRpb24tbW9kYWwuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9uZXdzLWNyZWF0aW9uLW1vZGFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25ld3MtY3JlYXRpb24tbW9kYWwuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIGIgZnJvbSAnYl8nO1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFZpcnR1YWxNYXJrdXAgfSBmcm9tICcuLi8uLi9jb3JlL3ZpcnR1YWwtZG9tL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyBFdmVudFRpbWVMaW5lU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LXRpbWVsaW5lJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vZGFsJztcbmltcG9ydCB7IFV1aWQgfSBmcm9tICcuLi8uLi91dGlscy91dWlkJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tbW9uL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9jb21tb24vbW9kYWwvbW9kYWwnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuLi9jb21tb24vaW5wdXQvaW5wdXQnO1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21tb24vdGV4dGFyZWEvdGV4dGFyZWEnO1xuXG5pbXBvcnQgJy4vbmV3cy1jcmVhdGlvbi1tb2RhbC5zY3NzJztcblxuZXhwb3J0IGNsYXNzIE5ld3NDcmVhdGlvbk1vZGFsIGV4dGVuZHMgQ29tcG9uZW50PE5ld3NDcmVhdGlvblByb3BzLCBOZXdzQ3JlYXRpb25TdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IE5ld3NDcmVhdGlvblByb3BzKSB7XG4gICAgICAgIHN1cGVyKCduZXdzLWNyZWF0aW9uLW1vZGFsJywgcHJvcHMsIHsgY29udGVudDogbnVsbCwgdGl0bGU6IG51bGwgfSk7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCByZW5kZXIoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudCgnbW9kYWwnLCBNb2RhbCwgeyBjaGlsZHJlbjogdGhpcy5yZW5kZXJNb2RhbENvbnRlbnQoKSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlck1vZGFsQ29udGVudCgpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3M6IHRoaXMuY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySGVhZGVyKCksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaXRsZUlucHV0KCksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50SW5wdXQoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNhdmVCdXR0b24oKVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVySGVhZGVyKCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBhdHRyczogeyBjbGFzczogYih0aGlzLmNsYXNzTmFtZSwgJ2hlYWRlcicpIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogWyfQndC+0LLQsNGPINC90L7QstC+0YHRgtGMJ11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclRpdGxlSW5wdXQoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlVGl0bGUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoJ3RpdGxlJywgSW5wdXQsIHtcbiAgICAgICAgICAgIGxhYmVsOiAn0JfQsNCz0L7Qu9C+0LLQvtC6JyxcbiAgICAgICAgICAgIGVycm9yOiAhdmFsaWRhdGlvbi5zdWNjZXNzID8gdmFsaWRhdGlvbi5lcnJvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9uSW5wdXQ6ICh0aXRsZTogc3RyaW5nKSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGUgfSksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS50aXRsZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckNvbnRlbnRJbnB1dCgpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGVDb250ZW50KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KCdjb250ZW50JywgVGV4dEFyZWEsIHtcbiAgICAgICAgICAgIGxhYmVsOiAn0KHQvtC00LXRgNC20LDQvdC40LUnLFxuICAgICAgICAgICAgZXJyb3I6ICF2YWxpZGF0aW9uLnN1Y2Nlc3MgPyB2YWxpZGF0aW9uLmVycm9yIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb25JbnB1dDogKGNvbnRlbnQ6IHN0cmluZykgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvbnRlbnQgfSksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5jb250ZW50XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyU2F2ZUJ1dHRvbigpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KCdzYXZlLWJ1dHRvbicsIEJ1dHRvbiwge1xuICAgICAgICAgICAgY2xhc3NNaXg6IGIodGhpcy5jbGFzc05hbWUsICdzYXZlLWJ1dHRvbicpLFxuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLnNhdmUsXG4gICAgICAgICAgICB0ZXh0OiAn0KHQvtGF0YDQsNC90LjRgtGMJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhdmUgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHsgZXZlbnRUaW1lTGluZVNlcnZpY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgY29udGVudCwgdGl0bGUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVUaXRsZSgpLnN1Y2Nlc3MgJiYgdGhpcy52YWxpZGF0ZUNvbnRlbnQoKS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBldmVudFRpbWVMaW5lU2VydmljZS5zYXZlKHtcbiAgICAgICAgICAgICAgICBldmVudFR5cGU6ICduZXdzJyxcbiAgICAgICAgICAgICAgICBpZDogVXVpZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICByZWFkZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE1vZGFsU2VydmljZS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlVGl0bGUoKTogVmFsaWRhdGlvbiB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIHRpdGxlICYmIHRpdGxlLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8geyBzdWNjZXNzOiB0cnVlIH1cbiAgICAgICAgICAgIDogeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICfQrdGC0L4g0L/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QvicgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlQ29udGVudCgpOiBWYWxpZGF0aW9uIHtcbiAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiBjb250ZW50ICYmIGNvbnRlbnQubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IHN1Y2Nlc3M6IHRydWUgfVxuICAgICAgICAgICAgOiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ9Ct0YLQviDQv9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+JyB9O1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgTmV3c0NyZWF0aW9uUHJvcHMge1xuICAgIGV2ZW50VGltZUxpbmVTZXJ2aWNlOiBFdmVudFRpbWVMaW5lU2VydmljZTtcbn1cblxuaW50ZXJmYWNlIE5ld3NDcmVhdGlvblN0YXRlIHtcbiAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25ld3MtaW5mby1tb2RhbC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25ld3MtaW5mby1tb2RhbC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9uZXdzLWluZm8tbW9kYWwuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIGIgZnJvbSAnYl8nO1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBWaXJ0dWFsTWFya3VwIH0gZnJvbSAnLi4vLi4vY29yZS92aXJ0dWFsLWRvbS9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyBOZXdzIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEV2ZW50VGltZUxpbmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQtdGltZWxpbmUnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9kYWwnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21tb24vYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uL2NvbW1vbi9tb2RhbC9tb2RhbCc7XG5cbmltcG9ydCAnLi9uZXdzLWluZm8tbW9kYWwuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBOZXdzSW5mb01vZGFsIGV4dGVuZHMgQ29tcG9uZW50PE5ld3NJbmZvUHJvcHM+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBOZXdzSW5mb1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKCduZXdzLWluZm8tbW9kYWwnLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KCdtb2RhbCcsIE1vZGFsLCB7IGNoaWxkcmVuOiB0aGlzLnJlbmRlck1vZGFsQ29udGVudCgpIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyTW9kYWxDb250ZW50KCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBhdHRyczogeyBjbGFzczogdGhpcy5jbGFzc05hbWUgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaXRsZSgpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRGF0ZSgpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVhZEJ1dHRvbigpXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJDb250ZW50KCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBjaGlsZHJlbjogWyB0aGlzLnByb3BzLm5ld3MuY29udGVudCBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJEYXRlKCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBhdHRyczogeyBjbGFzczogYih0aGlzLmNsYXNzTmFtZSwgJ2RhdGUnKSB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFsgRGF0ZVV0aWxzLmZvcm1hdCh0aGlzLnByb3BzLm5ld3MuZGF0ZSkgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyUmVhZEJ1dHRvbigpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgY29uc3QgeyBldmVudFRpbWVMaW5lU2VydmljZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoJ3JlYWQtYnV0dG9uJywgQnV0dG9uLCB7XG4gICAgICAgICAgICBjbGFzc01peDogYih0aGlzLmNsYXNzTmFtZSwgJ3JlYWQtYnV0dG9uJyksXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudFRpbWVMaW5lU2VydmljZS5yZWFkTmV3cyh0aGlzLnByb3BzLm5ld3MuaWQpO1xuICAgICAgICAgICAgICAgIE1vZGFsU2VydmljZS5oaWRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGV4dDogJ9Ce0LfQvdCw0LrQvtC80LvQtdC9J1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclRpdGxlKCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBhdHRyczogeyBjbGFzczogYih0aGlzLmNsYXNzTmFtZSwgJ3RpdGxlJykgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbIHRoaXMucHJvcHMubmV3cy50aXRsZSBdXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgTmV3c0luZm9Qcm9wcyB7XG4gICAgZXZlbnRUaW1lTGluZVNlcnZpY2U6IEV2ZW50VGltZUxpbmVTZXJ2aWNlO1xuICAgIG5ld3M6IE5ld3M7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vdHJhbnNhY3Rpb24tY3JlYXRpb24tbW9kYWwuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi90cmFuc2FjdGlvbi1jcmVhdGlvbi1tb2RhbC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi90cmFuc2FjdGlvbi1jcmVhdGlvbi1tb2RhbC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgYiBmcm9tICdiXyc7XG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50JztcbmltcG9ydCB7IFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi9jb3JlL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVmlydHVhbE1hcmt1cCB9IGZyb20gJy4uLy4uL2NvcmUvdmlydHVhbC1kb20vaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7IEV2ZW50VGltZUxpbmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQtdGltZWxpbmUnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9kYWwnO1xuaW1wb3J0IHsgVGltZUxpbmVUcmFuc2FjdGlvbiwgQ3VycmVuY3ksIEJhbmsgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgVXVpZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V1aWQnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21tb24vYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2NvbW1vbi9pbnB1dC9pbnB1dCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uL2NvbW1vbi9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi9jb21tb24vc2VsZWN0L3NlbGVjdCc7XG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uL2NvbW1vbi90ZXh0YXJlYS90ZXh0YXJlYSc7XG5cbmltcG9ydCAnLi90cmFuc2FjdGlvbi1jcmVhdGlvbi1tb2RhbC5zY3NzJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uQ3JlYXRpb25Nb2RhbCBleHRlbmRzIENvbXBvbmVudDxUcmFuc2FjdGlvbkNyZWF0aW9uUHJvcHMsIFRyYW5zYWN0aW9uQ3JlYXRpb25TdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyYW5zYWN0aW9uQ3JlYXRpb25Qcm9wcykge1xuICAgICAgICBzdXBlcigndHJhbnNhY3Rpb24tY3JlYXRpb24tbW9kYWwnLCBwcm9wcywge1xuICAgICAgICAgICAgYW1vdW50OiBudWxsLFxuICAgICAgICAgICAgY3VycmVuY3lJZDogcHJvcHMuY3VycmVuY2llc1swXS5pZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgICAgICAgICAgYmFua0lkOiBwcm9wcy5iYW5rc1swXS5pZCxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2luY29tZSdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KCdtb2RhbCcsIE1vZGFsLCB7IGNoaWxkcmVuOiB0aGlzLnJlbmRlck1vZGFsQ29udGVudCgpIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyTW9kYWxDb250ZW50KCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2Zvcm0nLFxuICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3M6IHRoaXMuY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySGVhZGVyKCksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUeXBlU2VsZWN0KCksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJCYW5rU2VsZWN0KCksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJBbW91bnRJbnB1dCgpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ3VycmVuY3lTZWxlY3QoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckRlc2NyaXB0aW9uSW5wdXQoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNhdmVCdXR0b24oKVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVySGVhZGVyKCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBhdHRyczogeyBjbGFzczogYih0aGlzLmNsYXNzTmFtZSwgJ2hlYWRlcicpIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogWyAn0J3QvtCy0LDRjyDRgtGA0LDQvdC30LDQutGG0LjRjycgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyQW1vdW50SW5wdXQoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlQW1vdW50KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KCdhbW91bnQnLCBJbnB1dCwge1xuICAgICAgICAgICAgZXJyb3I6ICF2YWxpZGF0aW9uLnN1Y2Nlc3MgPyB2YWxpZGF0aW9uLmVycm9yIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGFiZWw6ICfQodGD0LzQvNCwINGC0YDQsNC90LfQsNC60YbQuNC4JyxcbiAgICAgICAgICAgIG9uSW5wdXQ6ICh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLnNldFN0YXRlKHsgYW1vdW50OiBwYXJzZUludCh2YWx1ZSwgMTApIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyQ3VycmVuY3lTZWxlY3QoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudCgnY3VycmVuY3knLCBTZWxlY3QsIHtcbiAgICAgICAgICAgIGNob2ljZXM6IHRoaXMucHJvcHMuY3VycmVuY2llcy5tYXAoKHgpID0+ICh7IHZhbHVlOiB4LmlkLCB0ZXh0OiB4LmFiYnJldmlhdGlvbiB9KSksXG4gICAgICAgICAgICBsYWJlbDogJ9CS0LDQu9GO0YLQsCcsXG4gICAgICAgICAgICBvblNlbGVjdDogKGN1cnJlbmN5SWQ6IHN0cmluZykgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbmN5SWQgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJCYW5rU2VsZWN0KCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoJ2JhbmsnLCBTZWxlY3QsIHtcbiAgICAgICAgICAgIGNob2ljZXM6IHRoaXMucHJvcHMuYmFua3MubWFwKCh4KSA9PiAoeyB2YWx1ZTogeC5pZCwgdGV4dDogeC5uYW1lIH0pKSxcbiAgICAgICAgICAgIGxhYmVsOiAn0J7RgiDQutC+0LPQviDRgtGA0LDQvdC30LDQutGG0LjRjycsXG4gICAgICAgICAgICBvblNlbGVjdDogKGJhbmtJZDogc3RyaW5nKSA9PiB0aGlzLnNldFN0YXRlKHsgYmFua0lkIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRGVzY3JpcHRpb25JbnB1dCgpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGVEZXNjcmlwdGlvbigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudCgnZGVzY3JpcHRpb24nLCBUZXh0QXJlYSwge1xuICAgICAgICAgICAgZXJyb3I6ICF2YWxpZGF0aW9uLnN1Y2Nlc3MgPyB2YWxpZGF0aW9uLmVycm9yIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGFiZWw6ICfQntC/0LjRgdCw0L3QuNC1JyxcbiAgICAgICAgICAgIG9uSW5wdXQ6IChkZXNjcmlwdGlvbjogc3RyaW5nKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb24gfSksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5kZXNjcmlwdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclR5cGVTZWxlY3QoKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IGNob2ljZXM6IHsgdGV4dDogc3RyaW5nLCB2YWx1ZTogVGltZUxpbmVUcmFuc2FjdGlvblsndHJhbnNhY3Rpb25UeXBlJ10gfVtdID0gW1xuICAgICAgICAgICAgeyB0ZXh0OiAn0J/RgNC40YXQvtC0JywgdmFsdWU6ICdpbmNvbWUnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICfQoNCw0YHRhdC+0LQnLCB2YWx1ZTogJ2V4cGVuc2UnIH1cbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudCgndHJhbnNhY3Rpb25UeXBlJywgU2VsZWN0LCB7XG4gICAgICAgICAgICBjaG9pY2VzLFxuICAgICAgICAgICAgbGFiZWw6ICfQotC40L8nLFxuICAgICAgICAgICAgb25TZWxlY3Q6ICh0cmFuc2FjdGlvblR5cGU6IFRpbWVMaW5lVHJhbnNhY3Rpb25bJ3RyYW5zYWN0aW9uVHlwZSddKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0cmFuc2FjdGlvblR5cGUgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJTYXZlQnV0dG9uKCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoJ3NhdmUtYnV0dG9uJywgQnV0dG9uLCB7XG4gICAgICAgICAgICBjbGFzc01peDogYih0aGlzLmNsYXNzTmFtZSwgJ3NhdmUtYnV0dG9uJyksXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuc2F2ZSgpLFxuICAgICAgICAgICAgdGV4dDogJ9Ch0L7RhdGA0LDQvdC40YLRjCdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYXZlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGV2ZW50VGltZUxpbmVTZXJ2aWNlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGFtb3VudCwgY3VycmVuY3lJZCwgZGVzY3JpcHRpb24sIGJhbmtJZCwgdHJhbnNhY3Rpb25UeXBlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlQW1vdW50KCkuc3VjY2VzcyAmJiB0aGlzLnZhbGlkYXRlRGVzY3JpcHRpb24oKS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBldmVudFRpbWVMaW5lU2VydmljZS5zYXZlKHtcbiAgICAgICAgICAgICAgICBldmVudFR5cGU6ICd0cmFuc2FjdGlvbicsXG4gICAgICAgICAgICAgICAgaWQ6IFV1aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICAgICAgY3VycmVuY3lJZCxcbiAgICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGJhbmtJZCxcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgTW9kYWxTZXJ2aWNlLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdmFsaWRhdGVBbW91bnQoKTogVmFsaWRhdGlvbiB7XG4gICAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiBhbW91bnQgJiYgYW1vdW50ID4gMFxuICAgICAgICAgICAgPyB7IHN1Y2Nlc3M6IHRydWUgfVxuICAgICAgICAgICAgOiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ9Ct0YLQviDQv9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC4INCx0L7Qu9GM0YjQtSDQvdGD0LvRjycgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlRGVzY3JpcHRpb24oKTogVmFsaWRhdGlvbiB7XG4gICAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8geyBzdWNjZXNzOiB0cnVlIH1cbiAgICAgICAgICAgIDogeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICfQrdGC0L4g0L/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QvicgfTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIFRyYW5zYWN0aW9uQ3JlYXRpb25Qcm9wcyB7XG4gICAgYmFua3M6IEJhbmtbXTtcbiAgICBjdXJyZW5jaWVzOiBDdXJyZW5jeVtdO1xuICAgIGV2ZW50VGltZUxpbmVTZXJ2aWNlOiBFdmVudFRpbWVMaW5lU2VydmljZTtcbn1cblxuaW50ZXJmYWNlIFRyYW5zYWN0aW9uQ3JlYXRpb25TdGF0ZSB7XG4gICAgYW1vdW50OiBUaW1lTGluZVRyYW5zYWN0aW9uWydhbW91bnQnXTtcbiAgICBjdXJyZW5jeUlkOiBUaW1lTGluZVRyYW5zYWN0aW9uWydjdXJyZW5jeUlkJ107XG4gICAgZGVzY3JpcHRpb246IFRpbWVMaW5lVHJhbnNhY3Rpb25bJ2Rlc2NyaXB0aW9uJ107XG4gICAgYmFua0lkOiBUaW1lTGluZVRyYW5zYWN0aW9uWydiYW5rSWQnXTtcbiAgICB0cmFuc2FjdGlvblR5cGU6IFRpbWVMaW5lVHJhbnNhY3Rpb25bJ3RyYW5zYWN0aW9uVHlwZSddO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3RyYW5zYWN0aW9uLWluZm8tbW9kYWwuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi90cmFuc2FjdGlvbi1pbmZvLW1vZGFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3RyYW5zYWN0aW9uLWluZm8tbW9kYWwuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIGIgZnJvbSAnYl8nO1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBWaXJ0dWFsTWFya3VwIH0gZnJvbSAnLi4vLi4vY29yZS92aXJ0dWFsLWRvbS9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyBFdmVudFRpbWVMaW5lU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LXRpbWVsaW5lJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vZGFsJztcbmltcG9ydCB7IFRpbWVMaW5lVHJhbnNhY3Rpb24sIEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tbW9uL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9jb21tb24vbW9kYWwvbW9kYWwnO1xuXG5pbXBvcnQgJy4vdHJhbnNhY3Rpb24taW5mby1tb2RhbC5zY3NzJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uSW5mb01vZGFsIGV4dGVuZHMgQ29tcG9uZW50PFRyYW5zYWN0aW9uSW5mb1Byb3BzPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJhbnNhY3Rpb25JbmZvUHJvcHMpIHtcbiAgICAgICAgc3VwZXIoJ3RyYW5zYWN0aW9uLWluZm8tbW9kYWwnLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KCdtb2RhbCcsIE1vZGFsLCB7IGNoaWxkcmVuOiB0aGlzLnJlbmRlck1vZGFsQ29udGVudCgpIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyTW9kYWxDb250ZW50KCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBhdHRyczogeyBjbGFzczogdGhpcy5jbGFzc05hbWUgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJBbW91bnQoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckRhdGUoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckRlc2NyaXB0aW9uKCksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZW1vdmVCdXR0b24oKVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyQW1vdW50KCk6IFZpcnR1YWxNYXJrdXAge1xuICAgICAgICBjb25zdCB7IHRyYW5zYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzaWduID0gdHJhbnNhY3Rpb24udHJhbnNhY3Rpb25UeXBlID09PSAnaW5jb21lJyA/ICcrJyA6ICctJztcbiAgICAgICAgY29uc3QgY3VycmVuY3lBYmJyID0gdGhpcy5nZXRDdXJyZW5jeUFiYnJldmlhdGlvbigpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiBiKHRoaXMuY2xhc3NOYW1lLCAnYW1vdW50JykgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbIHNpZ24sIHRyYW5zYWN0aW9uLmFtb3VudC50b1N0cmluZygpLCBjdXJyZW5jeUFiYnIgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRGF0ZSgpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3M6IGIodGhpcy5jbGFzc05hbWUsICdkYXRlJykgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbIERhdGVVdGlscy5mb3JtYXQodGhpcy5wcm9wcy50cmFuc2FjdGlvbi5kYXRlKSBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJEZXNjcmlwdGlvbigpOiBWaXJ0dWFsTWFya3VwIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFsgdGhpcy5wcm9wcy50cmFuc2FjdGlvbi5kZXNjcmlwdGlvbiBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJSZW1vdmVCdXR0b24oKTogVmlydHVhbE1hcmt1cCB7XG4gICAgICAgIGNvbnN0IHsgZXZlbnRUaW1lTGluZVNlcnZpY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoJ3JlbW92ZS1idXR0b24nLCBCdXR0b24sIHtcbiAgICAgICAgICAgIGNsYXNzTWl4OiBiKHRoaXMuY2xhc3NOYW1lLCAncmVtb3ZlLWJ1dHRvbicpLFxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50VGltZUxpbmVTZXJ2aWNlLnJlbW92ZVRyYW5zYWN0aW9uKHRoaXMucHJvcHMudHJhbnNhY3Rpb24uaWQpO1xuICAgICAgICAgICAgICAgIE1vZGFsU2VydmljZS5oaWRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGV4dDogJ9Cj0LTQsNC70LjRgtGMJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1cnJlbmN5QWJicmV2aWF0aW9uKCk6IEN1cnJlbmN5WydhYmJyZXZpYXRpb24nXSB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVuY2llcywgdHJhbnNhY3Rpb24gfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jaWVzLmZpbmQoKHgpID0+IHguaWQgPT09IHRyYW5zYWN0aW9uLmN1cnJlbmN5SWQpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW5jeS5hYmJyZXZpYXRpb247XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBUcmFuc2FjdGlvbkluZm9Qcm9wcyB7XG4gICAgY3VycmVuY2llczogQ3VycmVuY3lbXTtcbiAgICBldmVudFRpbWVMaW5lU2VydmljZTogRXZlbnRUaW1lTGluZVNlcnZpY2U7XG4gICAgdHJhbnNhY3Rpb246IFRpbWVMaW5lVHJhbnNhY3Rpb247XG59IiwiaW1wb3J0IHsgVmlydHVhbE1hcmt1cCwgVmlydHVhbENvbXBvbmVudCB9IGZyb20gJy4vdmlydHVhbC1kb20vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICcuL3ZpcnR1YWwtZG9tL2NyZWF0ZSc7XG5pbXBvcnQgeyBwYXRjaCB9IGZyb20gJy4vdmlydHVhbC1kb20vcGF0Y2gnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFByb3BzID0gbnVsbCwgU3RhdGUgPSBudWxsPiB7XG4gICAgXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlbmRlcigpOiBWaXJ0dWFsTWFya3VwO1xuICAgIHByb3RlY3RlZCBvbkluaXQoKTogdm9pZCB7fTtcbiAgICBcbiAgICBwcml2YXRlIGN1cnJlbnRET006IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY3VycmVudE1hcmt1cDogVmlydHVhbE1hcmt1cDtcbiAgICBwcml2YXRlIGNvbXBvbmVudHM6IHsgW2tleTogc3RyaW5nXTogQ29tcG9uZW50PHt9LCB7fT4gfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNsYXNzTmFtZTogc3RyaW5nLCBwcm90ZWN0ZWQgcHJvcHM6IFByb3BzID0gbnVsbCwgcHJvdGVjdGVkIHN0YXRlOiBTdGF0ZSA9IG51bGwpIHt9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hcmt1cCA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudERPTSA9IGNyZWF0ZSh0aGlzLmN1cnJlbnRNYXJrdXApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRET007XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShwcm9wczogUHJvcHMpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5wYXRjaCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRET007XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbmRlckNvbXBvbmVudDxUIGV4dGVuZHMgQ29tcG9uZW50PFAsIHt9PiwgUD4oXG4gICAgICAgIGNvbXBvbmVudElkOiBzdHJpbmcsIGNsczogbmV3IChwcm9wczogUCkgPT4gVCwgcHJvcHM/OiBQXG4gICAgKTogVmlydHVhbENvbXBvbmVudCB7XG4gICAgICAgIGxldCBub2RlOiBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRzW2NvbXBvbmVudElkXSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50SWRdID0gbmV3IGNscyhwcm9wcyk7XG5cbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50SWRdLmluaXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50SWRdLnVwZGF0ZShwcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBjb21wb25lbnRJZCwgbm9kZSB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRTdGF0ZSh1cGRhdGU6IFBhcnRpYWw8U3RhdGU+KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIC4uLnVwZGF0ZSB9O1xuICAgICAgICB0aGlzLnBhdGNoKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYXRjaCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV4dE1hcmt1cCA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgIFxuICAgICAgICBwYXRjaCh0aGlzLmN1cnJlbnRET00sIHRoaXMuY3VycmVudE1hcmt1cCwgbmV4dE1hcmt1cCk7XG4gICAgICAgIHRoaXMuY3VycmVudE1hcmt1cCA9IG5leHRNYXJrdXA7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBEYXRhU2VydmljZUxpc3RlbmVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlPFNlcnZpY2VEYXRhSXRlbT4ge1xuXG4gICAgcHJvdGVjdGVkIGRhdGE6IFNlcnZpY2VEYXRhSXRlbVtdO1xuXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnM6IERhdGFTZXJ2aWNlTGlzdGVuZXI8U2VydmljZURhdGFJdGVtW10+W10gPSBbXTtcblxuICAgIHB1YmxpYyBzdWJzY3JpYmUobGlzdGVuZXI6IERhdGFTZXJ2aWNlTGlzdGVuZXI8U2VydmljZURhdGFJdGVtW10+KSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGUoZGF0YTogU2VydmljZURhdGFJdGVtW10pIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5wdWJsaXNoKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwdWJsaXNoKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKHRoaXMuZGF0YSkpO1xuICAgIH1cblxufSIsImltcG9ydCB7IFZpcnR1YWxNYXJrdXAsIFZpcnR1YWxNYXJrdXBFbGVtZW50LCBWaXJ0dWFsTm9kZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGUgPSAobWFya3VwOiBWaXJ0dWFsTWFya3VwKTogVmlydHVhbE5vZGUgPT4ge1xuICAgIGxldCAkbm9kZTogVmlydHVhbE5vZGU7XG4gICAgXG4gICAgaWYgKHR5cGVvZiBtYXJrdXAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICRub2RlID0gY3JlYXRlVGV4dE5vZGUobWFya3VwKTtcbiAgICB9IGVsc2UgaWYgKCd0YWdOYW1lJyBpbiBtYXJrdXApIHtcbiAgICAgICAgJG5vZGUgPSBjcmVhdGVFbGVtZW50Tm9kZShtYXJrdXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRub2RlID0gbWFya3VwLm5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuICRub2RlO1xufVxuXG5jb25zdCBjcmVhdGVUZXh0Tm9kZSA9ICh0ZXh0OiBzdHJpbmcpOiBUZXh0ID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG59XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnROb2RlID0gKG1hcmt1cDogVmlydHVhbE1hcmt1cEVsZW1lbnQpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgeyBhdHRycyA9IHt9LCBsaXN0ZW5lcnMgPSB7fSwgY2hpbGRyZW4gPSBbXSwgdGFnTmFtZSB9ID0gbWFya3VwO1xuICAgIGNvbnN0ICRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChhdHRyTmFtZSkgPT5cbiAgICAgICAgJG5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pKTtcblxuICAgIE9iamVjdC5rZXlzKGxpc3RlbmVycykuZm9yRWFjaCgoZXZlbnRUeXBlOiBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwKSA9PlxuICAgICAgICAkbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXJzW2V2ZW50VHlwZV0pKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiAkbm9kZS5hcHBlbmRDaGlsZChjcmVhdGUoY2hpbGQpKSk7XG5cbiAgICByZXR1cm4gJG5vZGU7XG59XG4iLCJpbXBvcnQgeyBWaXJ0dWFsTWFya3VwLCBWaXJ0dWFsTm9kZSwgVmlydHVhbE1hcmt1cEVsZW1lbnQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnLi9jcmVhdGUnO1xuXG5leHBvcnQgY29uc3QgcGF0Y2ggPSAoJG5vZGU6IFZpcnR1YWxOb2RlLCBwcmV2TWFya3VwOiBWaXJ0dWFsTWFya3VwLCBuZXh0TWFya3VwOiBWaXJ0dWFsTWFya3VwKSA9PiB7XG4gICAgaWYgKG5leHRNYXJrdXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAkbm9kZS5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcmV2TWFya3VwID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgbmV4dE1hcmt1cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHByZXZNYXJrdXAgIT09IG5leHRNYXJrdXApIHtcbiAgICAgICAgICAgICgkbm9kZSBhcyBUZXh0KS50ZXh0Q29udGVudCA9IG5leHRNYXJrdXA7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0eXBlb2YgcHJldk1hcmt1cCA9PT0gJ29iamVjdCcgJiYgJ3RhZ05hbWUnIGluIHByZXZNYXJrdXAgJiZcbiAgICAgICAgdHlwZW9mIG5leHRNYXJrdXAgPT09ICdvYmplY3QnICYmICd0YWdOYW1lJyBpbiBuZXh0TWFya3VwXG4gICAgKSB7XG4gICAgICAgIGlmIChwcmV2TWFya3VwLnRhZ05hbWUgPT09IG5leHRNYXJrdXAudGFnTmFtZSkge1xuICAgICAgICAgICAgcGF0Y2hBdHRycygkbm9kZSBhcyBIVE1MRWxlbWVudCwgcHJldk1hcmt1cC5hdHRycywgbmV4dE1hcmt1cC5hdHRycyk7XG4gICAgICAgICAgICBwYXRjaExpc3RlbmVycygkbm9kZSBhcyBIVE1MRWxlbWVudCwgcHJldk1hcmt1cFsnbGlzdGVuZXJzJ10sIG5leHRNYXJrdXBbJ2xpc3RlbmVycyddKTtcbiAgICAgICAgICAgIHByZXBhdGNoQ2hpbGRyZW4oJG5vZGUgYXMgSFRNTEVsZW1lbnQsIHByZXZNYXJrdXAuY2hpbGRyZW4sIG5leHRNYXJrdXAuY2hpbGRyZW4pO1xuICAgICAgICAgICAgcGF0Y2hDaGlsZHJlbigkbm9kZSBhcyBIVE1MRWxlbWVudCwgcHJldk1hcmt1cC5jaGlsZHJlbiwgbmV4dE1hcmt1cC5jaGlsZHJlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbm9kZS5yZXBsYWNlV2l0aChjcmVhdGUobmV4dE1hcmt1cCkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgdHlwZW9mIHByZXZNYXJrdXAgPT09ICdvYmplY3QnICYmICdjb21wb25lbnRJZCcgaW4gcHJldk1hcmt1cCAmJlxuICAgICAgICB0eXBlb2YgbmV4dE1hcmt1cCA9PT0gJ29iamVjdCcgJiYgJ2NvbXBvbmVudElkJyBpbiBuZXh0TWFya3VwXG4gICAgKSB7XG4gICAgICAgIGlmIChwcmV2TWFya3VwLmNvbXBvbmVudElkICE9PSBuZXh0TWFya3VwLmNvbXBvbmVudElkKSB7XG4gICAgICAgICAgICAkbm9kZS5yZXBsYWNlV2l0aChuZXh0TWFya3VwLm5vZGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJG5vZGUucmVwbGFjZVdpdGgoY3JlYXRlKG5leHRNYXJrdXApKTtcbiAgICB9XG59XG5cbmNvbnN0IHBhdGNoQXR0cnMgPSAoXG4gICAgJG5vZGU6IEhUTUxFbGVtZW50LFxuICAgIHByZXZBdHRyczogVmlydHVhbE1hcmt1cEVsZW1lbnRbJ2F0dHJzJ10gPSB7fSxcbiAgICBuZXh0QXR0cnM6IFZpcnR1YWxNYXJrdXBFbGVtZW50WydhdHRycyddID0ge31cbikgPT4ge1xuICAgIE9iamVjdC5rZXlzKHByZXZBdHRycykuZm9yRWFjaCgoYXR0ck5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5leHRBdHRyc1thdHRyTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgJG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMobmV4dEF0dHJzKS5mb3JFYWNoKChhdHRyTmFtZSkgPT4ge1xuICAgICAgICBpZiAobmV4dEF0dHJzW2F0dHJOYW1lXSAhPT0gcHJldkF0dHJzW2F0dHJOYW1lXSkge1xuICAgICAgICAgICAgJG5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBuZXh0QXR0cnNbYXR0ck5hbWVdKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCBwYXRjaExpc3RlbmVycyA9IChcbiAgICAkbm9kZTogSFRNTEVsZW1lbnQsXG4gICAgcHJldkxpc3RlbmVyczogVmlydHVhbE1hcmt1cEVsZW1lbnRbJ2xpc3RlbmVycyddID0ge30sXG4gICAgbmV4dExpc3RlbmVyczogVmlydHVhbE1hcmt1cEVsZW1lbnRbJ2xpc3RlbmVycyddID0ge31cbikgPT4ge1xuICAgIE9iamVjdC5rZXlzKHByZXZMaXN0ZW5lcnMpLmZvckVhY2goKGV2ZW50VHlwZToga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCkgPT5cbiAgICAgICAgJG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHByZXZMaXN0ZW5lcnNbZXZlbnRUeXBlXSkpO1xuICAgIE9iamVjdC5rZXlzKG5leHRMaXN0ZW5lcnMpLmZvckVhY2goKGV2ZW50VHlwZToga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCkgPT5cbiAgICAgICAgJG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIG5leHRMaXN0ZW5lcnNbZXZlbnRUeXBlXSkpO1xufVxuXG5jb25zdCBwYXRjaENoaWxkcmVuID0gKFxuICAgICRwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZHJlblByZXY6IFZpcnR1YWxNYXJrdXBbXSA9IFtdLCBjaGlsZHJlbk5leHQ6IFZpcnR1YWxNYXJrdXBbXSA9IFtdXG4pID0+IHtcbiAgICBjb25zdCBzaXplID0gTWF0aC5tYXgoY2hpbGRyZW5QcmV2Lmxlbmd0aCwgY2hpbGRyZW5OZXh0Lmxlbmd0aCk7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IFsgLi4uJHBhcmVudC5jaGlsZE5vZGVzIF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBpZiAoY2hpbGRyZW5QcmV2W2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICRwYXJlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlKGNoaWxkcmVuTmV4dFtpXSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkcmVuTmV4dFtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAkcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0Y2goY2hpbGROb2Rlc1tpXSBhcyBWaXJ0dWFsTm9kZSwgY2hpbGRyZW5QcmV2W2ldLCBjaGlsZHJlbk5leHRbaV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBwcmVwYXRjaENoaWxkcmVuID0gKFxuICAgICRwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZHJlblByZXY6IFZpcnR1YWxNYXJrdXBbXSA9IFtdLCBjaGlsZHJlbk5leHQ6IFZpcnR1YWxNYXJrdXBbXSA9IFtdXG4pID0+IHtcbiAgICAkcGFyZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoJGNoaWxkLCBpZHgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldk1hcmt1cCA9IGNoaWxkcmVuUHJldltpZHhdO1xuICAgICAgICBjb25zdCBuZXh0TWFya3VwID0gY2hpbGRyZW5OZXh0W2lkeF07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcmV2TWFya3VwID09PSAnb2JqZWN0JyAmJiAnY29tcG9uZW50SWQnIGluIHByZXZNYXJrdXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV4dE1hcmt1cCAhPT0gJ29iamVjdCcgfHwgISgnY29tcG9uZW50SWQnIGluIG5leHRNYXJrdXApIHx8XG4gICAgICAgICAgICAgICAgcHJldk1hcmt1cC5jb21wb25lbnRJZCAhPT0gbmV4dE1hcmt1cC5jb21wb25lbnRJZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJGNoaWxkLnJlcGxhY2VXaXRoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgQmFua3NTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9iYW5rcyc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2N1cnJlbmN5JztcbmltcG9ydCB7IEV2ZW50VGltZUxpbmVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9ldmVudC10aW1lbGluZSc7XG5cbmltcG9ydCB7IEV2ZW50VGltZUxpbmUgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZlbnQtdGltZWxpbmUvZXZlbnQtdGltZWxpbmUnO1xuXG5jb25zdCBiYW5rc1NlcnZpY2UgPSBuZXcgQmFua3NTZXJ2aWNlKCk7XG5jb25zdCBjdXJyZW5jeVNlcnZpY2UgPSBuZXcgQ3VycmVuY3lTZXJ2aWNlKCk7XG5jb25zdCBldmVudFRpbWVMaW5lU2VydmljZSA9IG5ldyBFdmVudFRpbWVMaW5lU2VydmljZSgpO1xuY29uc3QgZXZlbnRUaW1lTGluZSA9IG5ldyBFdmVudFRpbWVMaW5lKHsgYmFua3NTZXJ2aWNlLCBjdXJyZW5jeVNlcnZpY2UsIGV2ZW50VGltZUxpbmVTZXJ2aWNlIH0pLmluaXQoKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChldmVudFRpbWVMaW5lKTtcbiIsImltcG9ydCB7IFV1aWQgfSBmcm9tICcuLi91dGlscy91dWlkJztcbmltcG9ydCB7IEJhbmsgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgQkFOS1M6IEJhbmtbXSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiBVdWlkLmdlbmVyYXRlKCksXG4gICAgICAgIG5hbWU6ICfQodCx0LXRgNCx0LDQvdC6J1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogVXVpZC5nZW5lcmF0ZSgpLFxuICAgICAgICBuYW1lOiAn0KDQvtGB0LHQsNC90LonXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBVdWlkLmdlbmVyYXRlKCksXG4gICAgICAgIG5hbWU6ICfQktCi0JEnXG4gICAgfVxuXTtcbiIsImltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IFV1aWQgfSBmcm9tICcuLi91dGlscy91dWlkJztcblxuZXhwb3J0IGNvbnN0IENVUlJFTkNJRVM6IEN1cnJlbmN5W10gPSBbXG4gICAge1xuICAgICAgICBpZDogVXVpZC5nZW5lcmF0ZSgpLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfigr0nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBVdWlkLmdlbmVyYXRlKCksXG4gICAgICAgIGFiYnJldmlhdGlvbjogJyQnICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFV1aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn4oKsJyAgXG4gICAgfVxuXTsiLCJpbXBvcnQgeyBUaW1lTGluZUV2ZW50IH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IFV1aWQgfSBmcm9tICcuLi91dGlscy91dWlkJztcblxuaW1wb3J0IHsgQkFOS1MgfSBmcm9tICcuL2JhbmtzJztcbmltcG9ydCB7IENVUlJFTkNJRVMgfSBmcm9tICcuL2N1cnJlbmNpZXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfVElNRV9MSU5FOiBUaW1lTGluZUV2ZW50W10gPSBbXG4gICAge1xuICAgICAgICBldmVudFR5cGU6ICduZXdzJyxcbiAgICAgICAgaWQ6IFV1aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgdGl0bGU6ICfQmtGA0LXQtNC40YLRiycsXG4gICAgICAgIGNvbnRlbnQ6ICfQn9C+0LvRg9GH0LjRgtC1INC00L4gMTAwIDAwMCDQvtC90LvQsNC50L0sINCx0LXQtyDQv9C+0YHQtdGJ0LXQvdC40Y8g0L7RgtC00LXQu9C10L3QuNGPIScsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCcyMDE5LTAzLTAxIDEwOjAwJyksXG4gICAgICAgIHJlYWRlZDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZXZlbnRUeXBlOiAndHJhbnNhY3Rpb24nLFxuICAgICAgICBpZDogVXVpZC5nZW5lcmF0ZSgpLFxuICAgICAgICBjdXJyZW5jeUlkOiBDVVJSRU5DSUVTWzBdLmlkLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgnMjAxOS0wMy0wMSAxNTowMCcpLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ9CX0LDRgNC/0LvQsNGC0LAg0LfQsCDRhNC10LLRgNCw0LvRjCcsXG4gICAgICAgIGJhbmtJZDogQkFOS1NbMF0uaWQsXG4gICAgICAgIGFtb3VudDogMTAsXG4gICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2luY29tZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZXZlbnRUeXBlOiAnbmV3cycsXG4gICAgICAgIGlkOiBVdWlkLmdlbmVyYXRlKCksXG4gICAgICAgIHRpdGxlOiAn0JjQvdCy0LXRgdGC0LjRhtC40LgnLFxuICAgICAgICBjb250ZW50OiAn0JjQvdCy0LXRgdGC0LjRgNGD0LnRgtC1INCyINGG0LXQvdC90YvQtSDQsdGD0LzQsNCz0LguINCi0LXQv9C10YDRjCDQstC80LXRgdGC0LUg0YEg0L3QsNC80LghJyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoJzIwMTktMDMtMDEgMTE6MzAnKSxcbiAgICAgICAgcmVhZGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGV2ZW50VHlwZTogJ3RyYW5zYWN0aW9uJyxcbiAgICAgICAgaWQ6IFV1aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgY3VycmVuY3lJZDogQ1VSUkVOQ0lFU1sxXS5pZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoJzIwMTktMDMtMDEgMTg6MDAnKSxcbiAgICAgICAgZGVzY3JpcHRpb246ICfQntC/0LvQsNGC0LAg0YPRgdC70YPQsyDQvNC+0LHQuNC70YzQvdGL0Lkg0YHQstGP0LfQuC4nLFxuICAgICAgICBiYW5rSWQ6IEJBTktTWzFdLmlkLFxuICAgICAgICBhbW91bnQ6IDIwLFxuICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICdleHBlbnNlJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBldmVudFR5cGU6ICduZXdzJyxcbiAgICAgICAgaWQ6IFV1aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgdGl0bGU6ICfQktC60LvQsNC00YsnLFxuICAgICAgICBjb250ZW50OiAn0J7RgtC60YDQvtC50YLQtSDQstC60LvQsNC0INGDINC90LDRgSDQuCDQv9C+0LvRg9GH0LDQudGC0LUg0LTQviAxMiUg0LPQvtC00L7QstGL0YUuJyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoJzIwMTktMDMtMDEgMTQ6MTAnKSxcbiAgICAgICAgcmVhZGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBldmVudFR5cGU6ICd0cmFuc2FjdGlvbicsXG4gICAgICAgIGlkOiBVdWlkLmdlbmVyYXRlKCksXG4gICAgICAgIGN1cnJlbmN5SWQ6IENVUlJFTkNJRVNbMl0uaWQsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCcyMDE5LTAzLTAxIDEyOjAwJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0JLQvtC30LLRgNCw0YIg0LTQvtC70LPQsCDQt9CwIDgg0LzQsNGA0YLQsCcsXG4gICAgICAgIGJhbmtJZDogQkFOS1NbMl0uaWQsXG4gICAgICAgIGFtb3VudDogMzAsXG4gICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2luY29tZSdcbiAgICB9LFxuXTsiLCJpbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL2NvcmUvZGF0YS1zZXJ2aWNlL2RhdGEtc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU2VydmljZUxpc3RlbmVyIH0gZnJvbSAnLi4vY29yZS9kYXRhLXNlcnZpY2UvaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7IEJhbmsgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgQkFOS1MgfSBmcm9tICcuLi9tb2Nrcy9iYW5rcyc7XG5cbmV4cG9ydCBjbGFzcyBCYW5rc1NlcnZpY2UgZXh0ZW5kcyBEYXRhU2VydmljZTxCYW5rPiB7XG5cbiAgICBwdWJsaWMgc3Vic2NyaWJlKGxpc3RlbmVyOiBEYXRhU2VydmljZUxpc3RlbmVyPEJhbmtbXT4pIHtcbiAgICAgICAgc3VwZXIuc3Vic2NyaWJlKGxpc3RlbmVyKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZShCQU5LUyk7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL2RhdGEtc2VydmljZS9kYXRhLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2VMaXN0ZW5lciB9IGZyb20gJy4uL2NvcmUvZGF0YS1zZXJ2aWNlL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBDVVJSRU5DSUVTIH0gZnJvbSAnLi4vbW9ja3MvY3VycmVuY2llcyc7XG5cbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVNlcnZpY2UgZXh0ZW5kcyBEYXRhU2VydmljZTxDdXJyZW5jeT4ge1xuXG4gICAgcHVibGljIHN1YnNjcmliZShsaXN0ZW5lcjogRGF0YVNlcnZpY2VMaXN0ZW5lcjxDdXJyZW5jeVtdPikge1xuICAgICAgICBzdXBlci5zdWJzY3JpYmUobGlzdGVuZXIpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKENVUlJFTkNJRVMpO1xuICAgIH1cblxufSIsImltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9kYXRhLXNlcnZpY2UvZGF0YS1zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlTGlzdGVuZXIgfSBmcm9tICcuLi9jb3JlL2RhdGEtc2VydmljZS9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgVGltZUxpbmVFdmVudCwgTmV3cywgVGltZUxpbmVUcmFuc2FjdGlvbiB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBFVkVOVF9USU1FX0xJTkUgfSBmcm9tICcuLi9tb2Nrcy9ldmVudC10aW1lbGluZSc7XG5cbmV4cG9ydCBjbGFzcyBFdmVudFRpbWVMaW5lU2VydmljZSBleHRlbmRzIERhdGFTZXJ2aWNlPFRpbWVMaW5lRXZlbnQ+IHtcblxuICAgIHB1YmxpYyBzdWJzY3JpYmUobGlzdGVuZXI6IERhdGFTZXJ2aWNlTGlzdGVuZXI8VGltZUxpbmVFdmVudFtdPikge1xuICAgICAgICBzdXBlci5zdWJzY3JpYmUobGlzdGVuZXIpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKEVWRU5UX1RJTUVfTElORSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmUoZXZlbnQ6IFRpbWVMaW5lRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGltZWxpbmUgPSBbIC4uLnRoaXMuZGF0YSwgZXZlbnQgXTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lbGluZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlYWROZXdzKG5ld3NJZDogTmV3c1snaWQnXSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aW1lbGluZSA9IHRoaXMuZGF0YS5tYXAoKHgpID0+IHguaWQgPT09IG5ld3NJZCA/IHsgLi4ueCwgcmVhZGVkOiB0cnVlIH06IHgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWVsaW5lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25JZDogVGltZUxpbmVUcmFuc2FjdGlvblsnaWQnXSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aW1lbGluZSA9IHRoaXMuZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgIT09IHRyYW5zYWN0aW9uSWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy51cGRhdGUodGltZWxpbmUpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgVmlydHVhbE5vZGUgfSBmcm9tICcuLi9jb3JlL3ZpcnR1YWwtZG9tL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgc3RhdGljIGN1cnJlbnRNb2RhbDogVmlydHVhbE5vZGU7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNob3cobW9kYWw6IFZpcnR1YWxOb2RlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudE1vZGFsID0gbW9kYWw7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmN1cnJlbnRNb2RhbCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW9kYWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IE51bVV0aWxzIH0gZnJvbSAnLi9udW0nO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVV0aWxzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0KGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkYXkgPSBOdW1VdGlscy5nZXRMZWFkaW5nWmVyb051bShkYXRlLmdldERhdGUoKSk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gTnVtVXRpbHMuZ2V0TGVhZGluZ1plcm9OdW0oZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTnVtVXRpbHMuZ2V0TGVhZGluZ1plcm9OdW0oZGF0ZS5nZXRIb3VycygpKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IE51bVV0aWxzLmdldExlYWRpbmdaZXJvTnVtKGRhdGUuZ2V0TWludXRlcygpKTtcblxuICAgICAgICByZXR1cm4gYCR7IGRheSB9LSR7IG1vbnRoIH0tJHsgeWVhciB9ICR7IGhvdXJzIH06JHsgbWludXRlcyB9YDtcbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNsYXNzIE51bVV0aWxzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGVhZGluZ1plcm9OdW0gKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAkeyBudW0gPCAxMCA/ICcwJyA6ICcnfSR7IG51bSB9YDtcbiAgICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgVXVpZCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDIwKTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycik7XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyLCAoeCkgPT4geC50b1N0cmluZygxNikpLmpvaW4oJycpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==