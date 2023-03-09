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

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* binding */ Form)\n/* harmony export */ });\nclass Form {\r\n    constructor(options) {\r\n    const { inputs } = options;\r\n\r\n    this.submitBtn = document.createElement('button');\r\n    this.inputs = inputs;\r\n    this.form = document.createElement('form');\r\n    this.createForm(options)\r\n    }\r\n\r\n    static getFormValues(inputs) {\r\n        return inputs.reduce((values, input) => {\r\n            values[input.name] = input.value;\r\n            return values\r\n        }, {})\r\n    }\r\n\r\n    createForm({ onSubmit, submitBtnText, title: titleText }) {\r\n        const title = document.createElement('h3');\r\n\r\n        title.innerText = titleText;\r\n        this.submitBtn.type = \"submit\";\r\n        this.submitBtn.innerText = submitBtnText;\r\n\r\n        title.classList.add(\"form-title\");        \r\n        this.submitBtn.classList.add(\"btn\", \"btn-form\");\r\n\r\n        this.form.addEventListener(\"form\", async (event) => {\r\n            event.preventDefault\r\n\r\n            this.formValues = Form.getFormValues(this.inputs);\r\n\r\n            this.submitBtn.setAttribute(\"disabled\", \"\");\r\n\r\n            await onSubmit(this.formValues, event)\r\n\r\n            this.submitBtn.removeAttribute(\"disabled\");\r\n        })\r\n        this.form.append(title);\r\n\r\n        this.inputs.forEach((input) => {\r\n            input.render(this.form)\r\n        })\r\n\r\n        this.form.append(this.submitBtn)\r\n    }\r\n\r\n    render(container) {\r\n        container.append(this.form);\r\n    }\r\n}\n\n//# sourceURL=webpack://final-project/./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input)\n/* harmony export */ });\nclass Input {\r\n    constructor(options) {\r\n    const {\r\n        name,\r\n        placeholder,\r\n        label,\r\n        type = \"text\",\r\n        onInput,\r\n        onChange,\r\n    } = options;\r\n\r\n    this.input = document.createElement('input');\r\n    this.errorMessageElement = document.createElement('span');\r\n\r\n    this.name = name;\r\n    this.input.name = name;\r\n    this.input.type = type;\r\n    this.input.placeholder = placeholder;\r\n    this.label = label;\r\n    this.control = this.createControl(onInput, onChange);\r\n\r\n    this.value = this.input.value;\r\n   } \r\n\r\n   createControl(onInput, onChange) {\r\n        const container = document.createElement('div');\r\n        const label = document.createElement('label');\r\n\r\n        const inputId = `_${this.name}`;\r\n\r\n        container.classList.add(\"text-control\");\r\n        this.errorMessageElement.classList.add(\"input-error\");\r\n        this.input.classList.add(\"input\");\r\n\r\n        this.input.id = inputId;\r\n        label.setAttribute(\"for\", inputId);\r\n\r\n        label.innerText = this.label;\r\n\r\n        container.append(label, this.input, this.errorMessageElement);\r\n\r\n         \r\n            this.input.addEventListener(\"input\", (event) => {\r\n                this.value = event.target.value;\r\n                if(onInput) {\r\n                onInput(event);\r\n                }\r\n            });\r\n        \r\n\r\n        if(onChange) {\r\n            this.input.addEventListener(\"change\", (event) => {\r\n                onChange(event);\r\n            });\r\n        }\r\n\r\n        return container\r\n\r\n    }\r\n\r\n    render(container) {\r\n        container.append(this.control)\r\n    }\r\n}\n\n//# sourceURL=webpack://final-project/./src/components/Input.js?");

/***/ }),

/***/ "./src/components/formConfig.js":
/*!**************************************!*\
  !*** ./src/components/formConfig.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginConfig\": () => (/* binding */ loginConfig)\n/* harmony export */ });\nconst loginConfig = [\r\n    {\r\n        name: \"email\",\r\n        placeholder: \"Enter email\",\r\n        label: \"Email\"\r\n    },\r\n    {\r\n        name: \"password\",\r\n        placeholder: \"Enter password\",\r\n        label: \"Password\",\r\n        type: \"password\"\r\n    }\r\n]\n\n//# sourceURL=webpack://final-project/./src/components/formConfig.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _components_formConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/formConfig */ \"./src/components/formConfig.js\");\n/* harmony import */ var _components_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/API */ \"./src/components/API.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Input */ \"./src/components/Input.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Form */ \"./src/components/Form.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst appContainer = document.getElementById('app');\r\nconst testFormContainer = document.createElement('div');\r\ntestFormContainer.classList.add(\"auth-form\")\r\n\r\nconst loginForm = new _components_Form__WEBPACK_IMPORTED_MODULE_4__.Form({\r\n    inputs: _components_formConfig__WEBPACK_IMPORTED_MODULE_1__.loginConfig.map((config) => new _components_Input__WEBPACK_IMPORTED_MODULE_3__.Input(config)),\r\n    onSubmit: (values) => console.log(values),\r\n    submitBtnText: \"Войти\",\r\n    title: \"login\",\r\n}) \r\n\r\nappContainer.append(testFormContainer)\r\n\r\nloginForm.render(testFormContainer)\r\n\r\n// api.register({\r\n//     \"email\": \"test1@gmail.com\",\r\n//     \"password\": \"string1\",\r\n//     \"name\": \"Vladimir\",\r\n// }).then(() => {\r\n//     api.login({\r\n//     \"email\": \"test1@gmail.com\",\r\n//     \"password\": \"string1\"\r\n// }).then((res) => {\r\n//     api.getSelf();\r\n// }).catch((err) => {\r\n//     console.log(err)\r\n// })\r\n// })\r\n\r\n// const isLoggedIn = api.isLoggedIn();\r\n// if(isLoggedIn) {\r\n//     api.autoLogin\r\n// }else{\r\n//     // render auth form\r\n//     console.log(\"LOGIN\")\r\n// }\r\n\r\n// const input = new Input({\r\n//     name: \"email\",\r\n//     placeholder: \"Enter email\",\r\n//     label: \"Email\"\r\n// })\r\n\r\n// input.render(document.body)\n\n//# sourceURL=webpack://final-project/./src/index.js?");

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