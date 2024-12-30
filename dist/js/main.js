/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./modules/smoothScrolling.js\");\n/* harmony import */ var _modules_formValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValidation */ \"./modules/formValidation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"31 december 2024 23:59:59\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_formValidation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/formValidation.js":
/*!***********************************!*\
  !*** ./modules/formValidation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidation = () => {\r\n  const form1 = document.getElementById(\"form1\");\r\n  const form1Name = form1.querySelector(\"#form1-name\");\r\n  const form1Email = form1.querySelector(\"#form1-email\");\r\n  const form1Phone = form1.querySelector(\"#form1-phone\");\r\n\r\n  const form2 = document.getElementById(\"form2\");\r\n  const form2Name = form2.querySelector(\"#form2-name\");\r\n  const form2Email = form2.querySelector(\"#form2-email\");\r\n  const form2Phone = form2.querySelector(\"#form2-phone\");\r\n  const form2Message = form2.querySelector(\"#form2-message\");\r\n\r\n  const calcInputs = document.querySelectorAll(\".calc-block>input\");\r\n\r\n  const allInputs = [\r\n    form1Name,\r\n    form1Email,\r\n    form1Phone,\r\n    form2Name,\r\n    form2Email,\r\n    form2Phone,\r\n    form2Message,\r\n  ];\r\n\r\n  const validationForm = function (\r\n    e,\r\n    inputName,\r\n    inputEmail,\r\n    inputPhone,\r\n    inputText\r\n  ) {\r\n    e.preventDefault();\r\n\r\n    let isError = false;\r\n\r\n    if (/[^а-яА-Я]/g.test(inputName.value)) isError = true;\r\n\r\n    if (/[^\\w@.\\-*!~']/g.test(inputEmail.value)) isError = true;\r\n\r\n    if (/[^\\d-+()]/g.test(inputPhone.value)) isError = true;\r\n\r\n    if (inputText) if (/[^а-яА-Я\\s-,]/g.test(inputText.value)) isError = true;\r\n\r\n    if (!isError) {\r\n      alert(\"Данные отправлены\");\r\n    }\r\n  };\r\n\r\n  const validationCalc = function (e) {\r\n    e.target.value = e.target.value.replace(/[^\\d]/, \"\");\r\n  };\r\n\r\n  const autoСorrection = function (e) {\r\n    if (e.target.className === \"mess\") {\r\n      e.target.value = e.target.value.replace(/[^а-яА-Я\\s-,]/g, \"\");\r\n      e.target.value = e.target.value.replace(/^[\\s-]*|[\\s-]*$/g, \"\");\r\n      e.target.value = e.target.value.replace(/([\\s]+)/g, \" \");\r\n      e.target.value = e.target.value.replace(/([-]+)/g, \"-\");\r\n\r\n      e.target.value =\r\n        e.target.value.split(\"\")[0].toUpperCase() + e.target.value.slice(1);\r\n    } else if (e.target.type === \"text\") {\r\n      e.target.value = e.target.value.replace(/[^а-яА-Я]/g, \"\");\r\n\r\n      e.target.value =\r\n        e.target.value.split(\"\")[0].toUpperCase() + e.target.value.slice(1);\r\n    } else if (e.target.type === \"email\") {\r\n      e.target.value = e.target.value.replace(/[^\\w@.\\-*!~']/g, \"\");\r\n      e.target.value = e.target.value.replace(/^[-]*|[-]*$/g, \"\");\r\n      e.target.value = e.target.value.replace(/([-]+)/g, \"-\");\r\n    } else if (e.target.type === \"tel\") {\r\n      e.target.value = e.target.value.replace(/[^\\d-+()]/g, \"\");\r\n    }\r\n  };\r\n\r\n  calcInputs.forEach((input) =>\r\n    input.addEventListener(\"input\", validationCalc)\r\n  );\r\n\r\n  allInputs.forEach((input) => input.addEventListener(\"blur\", autoСorrection));\r\n\r\n  form1.addEventListener(\"submit\", () => {\r\n    validationForm(event, form1Name, form1Email, form1Phone);\r\n  });\r\n\r\n  form2.addEventListener(\"submit\", () => {\r\n    validationForm(event, form2Name, form2Email, form2Phone, form2Message);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidation);\r\n\n\n//# sourceURL=webpack:///./modules/formValidation.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = function () {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n  const menuDisplay = function () {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", menuDisplay);\r\n  closeBtn.addEventListener(\"click\", menuDisplay);\r\n\r\n  menuItems.forEach((menuItem) =>\r\n    menuItem.addEventListener(\"click\", menuDisplay)\r\n  );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const popupBtn = document.querySelectorAll(\".popup-btn\");\r\n  const popup = document.querySelector(\".popup\");\r\n  const closeBtn = popup.querySelector(\".popup-close\");\r\n  const popupContent = popup.querySelector(\".popup-content\");\r\n\r\n  let height = 0;\r\n  let idInterval;\r\n\r\n  const openModal = function () {\r\n    popup.style.display = \"block\";\r\n    height += 29;\r\n\r\n    idInterval = requestAnimationFrame(openModal);\r\n\r\n    if (height < 382) {\r\n      popupContent.style.height = `${height}px`;\r\n    } else {\r\n      height = 0;\r\n      cancelAnimationFrame(idInterval);\r\n    }\r\n  };\r\n\r\n  popupBtn.forEach((btn) => btn.addEventListener(\"click\", openModal));\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    popup.style.display = \"none\";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/smoothScrolling.js":
/*!************************************!*\
  !*** ./modules/smoothScrolling.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScrolling = () => {\r\n  const linksMenu = document.querySelectorAll(\"menu>ul>li>a\");\r\n  const linkBtn = document.querySelector(\"main>a\");\r\n\r\n  const scroll = function (e) {\r\n    e.preventDefault();\r\n\r\n    document.querySelector(this.getAttribute(\"href\")).scrollIntoView({\r\n      behavior: \"smooth\",\r\n    });\r\n  };\r\n\r\n  linksMenu.forEach((link) => link.addEventListener(\"click\", scroll));\r\n\r\n  linkBtn.addEventListener(\"click\", scroll);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);\r\n\n\n//# sourceURL=webpack:///./modules/smoothScrolling.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = function (deadline) {\r\n  const timerDay = document.getElementById(\"timer-day\");\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  let idSetInterval;\r\n\r\n  const getTimeRemaining = function () {\r\n    const dateStop = new Date(deadline).getTime();\r\n    const dateNow = new Date().getTime();\r\n\r\n    const timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n    const day = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    const hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    const minutes = Math.floor((timeRemaining / 60) % 60);\r\n    const seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, day, hours, minutes, seconds };\r\n  };\r\n\r\n  const timerRender = function () {\r\n    const getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining > 0) {\r\n      timerDay.textContent = getTime.day.toString().padStart(2, \"0\");\r\n      timerHours.textContent = getTime.hours.toString().padStart(2, \"0\");\r\n      timerMinutes.textContent = getTime.minutes.toString().padStart(2, \"0\");\r\n      timerSeconds.textContent = getTime.seconds.toString().padStart(2, \"0\");\r\n    } else {\r\n      clearInterval(idSetInterval);\r\n    }\r\n  };\r\n\r\n  idSetInterval = setInterval(timerRender, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;