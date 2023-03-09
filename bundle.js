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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://final-project/./src/styles/style.css?");

/***/ }),

/***/ "./src/components/API.js":
/*!*******************************!*\
  !*** ./src/components/API.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TOKEN_KEY\": () => (/* binding */ TOKEN_KEY),\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\nconst TOKEN_KEY = \"token\";\r\n\r\nclass API {\r\n    constructor(){\r\n        this.baseUrl = 'https://byte-tasks.herokuapp.com/api';\r\n        this.headers = { \r\n        Authorization: null,\r\n        \"Content-Type\": \"application/json\",\r\n        };\r\n    }\r\n\r\n    handleErrors({ ok, url, status }) {\r\n        if(!ok) {\r\n        throw new Error(`Response on ${url} failed with status ${status}`)\r\n        }\r\n    }\r\n\r\n    async register(data) {\r\n        const response = await fetch(`${this.baseUrl}/auth/register`,{\r\n           method: \"POST\",\r\n           headers: this.headers,\r\n           body: JSON.stringify(data), \r\n        })\r\n\r\n        this.handleErrors(response);\r\n\r\n        const registeredUser = await response.json();\r\n        return registeredUser\r\n    }\r\n\r\n\r\n    async login() {\r\n        const response = await fetch(`${this.baseUrl}/auth/login`, {\r\n            method: \"POST\",\r\n            headers: this.headers,\r\n            body: JSON.stringify(data),\r\n            });\r\n\r\n\r\n            this.handleErrors(response);\r\n\r\n        const { token } = await response.json();\r\n\r\n        this.headers.Authorization = `Bearer ${token}`;\r\n            localStorage.setItem(TOKEN_KEY, token);\r\n    }\r\n\r\n    async getSelf() {\r\n        const response = await fetch(`${this.baseUrl}/auth/user/self`, {\r\n            method: \"GET\",\r\n            headers: this.headers,\r\n            })\r\n\r\n            this.handleErrors(response);\r\n           \r\n        const user = await response.json();\r\n        return user\r\n    }\r\n\r\n    isLoggedIn() {\r\n        return Boolean(localStorage.getItem(TOKEN_KEY))\r\n    }\r\n\r\n    autoLogin() {\r\n        const localToken = localStorage.getItem(TOKEN_KEY)\r\n        this.headers.Authorization = `Bearer ${localToken}`;\r\n\r\n        return this.getSelf()\r\n    }\r\n}\r\n\r\nconst api = new API();\n\n//# sourceURL=webpack://final-project/./src/components/API.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _components_API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/API.js */ \"./src/components/API.js\");\n\r\n\r\n\r\n\r\n\r\n_components_API_js__WEBPACK_IMPORTED_MODULE_1__.api.register({\r\n    \"email\": \"test1@gmail.com\",\r\n    \"password\": \"string1\",\r\n    \"name\": \"Vladimir\",\r\n}).then(() => {\r\n    _components_API_js__WEBPACK_IMPORTED_MODULE_1__.api.login({\r\n    \"email\": \"test1@gmail.com\",\r\n    \"password\": \"string1\"\r\n}).then((res) => {\r\n    _components_API_js__WEBPACK_IMPORTED_MODULE_1__.api.getSelf();\r\n}).catch((err) => {\r\n    console.log(err)\r\n})\r\n})\r\n\r\nconst isLoggedIn = _components_API_js__WEBPACK_IMPORTED_MODULE_1__.api.isLoggedIn();\r\nif(isLoggedIn) {\r\n    _components_API_js__WEBPACK_IMPORTED_MODULE_1__.api.autoLogin\r\n}else{\r\n    // render auth form\r\n    console.log(\"LOGIN\")\r\n}\r\n\n\n//# sourceURL=webpack://final-project/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;