/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _imgs_sky_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/sky.png */ \"./src/imgs/sky.png\");\n\n\nfunction homePage() {\n    const img = document.createElement(\"img\");\n    img.src = _imgs_sky_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    const home = document.createElement(\"div\");\n    home.className = \"page\";\n    home.appendChild(img);\n    document.body.querySelector(\"#content\").appendChild(home);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxQzs7QUFFOUI7QUFDUDtBQUNBLGNBQWMsMENBQVE7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS5qcz83YjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBza3lJbWFnZSBmcm9tIFwiLi9pbWdzL3NreS5wbmdcIlxuXG5leHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuc3JjID0gc2t5SW1hZ2U7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lLmNsYXNzTmFtZSA9IFwicGFnZVwiO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmRDaGlsZChob21lKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/imgs/sky.png":
/*!**************************!*\
  !*** ./src/imgs/sky.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "920fbcdb912bc0324509.png";

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\nconst homeBtn = document.querySelector(\"#home\");\nconst menuBtn = document.querySelector(\"#menu\");\nconst aboutBtn = document.querySelector(\"#about\");\n\nhomeBtn.addEventListener(\"click\", () => {\n    if(document.body.querySelector(\".page\"))\n        document.body.querySelector(\".page\").remove();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n});\nmenuBtn.addEventListener(\"click\", () => {\n    if(document.body.querySelector(\".page\"))\n        document.body.querySelector(\".page\").remove();\n    menuPage();\n});\naboutBtn.addEventListener(\"click\", () => {\n    if(document.body.querySelector(\".page\"))\n        document.body.querySelector(\".page\").remove();\n    aboutPage();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7O0FBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0LmpzPzY4YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0XCIpO1xuXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VcIikpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5wYWdlXCIpLnJlbW92ZSgpO1xuICAgIGhvbWVQYWdlKCk7XG59KTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZihkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZVwiKSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VcIikucmVtb3ZlKCk7XG4gICAgbWVudVBhZ2UoKTtcbn0pO1xuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZihkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZVwiKSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VcIikucmVtb3ZlKCk7XG4gICAgYWJvdXRQYWdlKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script.js\n");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;