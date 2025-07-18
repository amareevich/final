"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["style_brends_view_element_js"],{

/***/ "./style/brends/view_element.js":
/*!**************************************!*\
  !*** ./style/brends/view_element.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ view_element)\n/* harmony export */ });\nconst btnArr = [document.querySelector('.unwrap-btn--type--brends'), document.querySelector('.unwrap-btn--type--equipment')];\r\nconst changeableElementArr = document.querySelectorAll('.swiper-wrapper');\r\n\r\nclass Changes {\r\n    constructor(changing_element, modified_element) {\r\n\r\n        this.changer = changing_element;\r\n        this.changing = modified_element;\r\n        this.changer_children_span = this.changer.querySelector('span');\r\n        this._link = this.changes_element.bind(this);\r\n        this._reset = this.reset_inline.bind(this);\r\n        this.changer.addEventListener('click', this._link);\r\n    };\r\n\r\n    changes_element() {\r\n        window.addEventListener('resize', this._reset);\r\n        const boolean_toggle = this.changer.classList.contains('unwrap-btn--action--open');\r\n        this.changer.classList.toggle('unwrap-btn--action--open');\r\n        this.changer.classList.toggle('unwrap-btn--action--close');\r\n        this.changing_height(boolean_toggle);\r\n    };\r\n\r\n    changing_height(flag) {\r\n        flag\r\n            ? (this.changing.style.height = this.changing.scrollHeight + \"px\", this.changer_children_span.textContent = 'Скрыть')\r\n            : (this.changing.removeAttribute('style'), this.changer_children_span.textContent = 'Показать все');\r\n    };\r\n\r\n    reset_inline() {\r\n        this.changing.removeAttribute('style');\r\n        this.changer.classList.add('unwrap-btn--action--open');\r\n        this.changer.classList.remove('unwrap-btn--action--close');\r\n        this.changer_children_span.textContent = 'Показать все';\r\n        window.removeEventListener('resize', this._reset);\r\n    }\r\n\r\n    destroy() {\r\n        window.removeEventListener('resize', this._reset);\r\n        this.changer.removeEventListener('click', this._link);\r\n        this.changing?.removeAttribute('style');\r\n        this.changer = null;\r\n        this.changing = null;\r\n        this.changer_children_span = null;\r\n        this._link = null;\r\n        this._reset = null;\r\n    };\r\n}\r\n\r\nfunction view_element() {\r\n    return btnArr.map((el, i) => new Changes(el, changeableElementArr[i]));\r\n}\n\n//# sourceURL=webpack:///./style/brends/view_element.js?");

/***/ })

}]);