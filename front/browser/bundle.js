/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/handler.js":
/*!****************************!*\
  !*** ./scripts/handler.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderFilms = __webpack_require__(/*! ./renderFilms */ \"./scripts/renderFilms.js\")\r\n\r\nconst getFilms = () => {\r\n    $.get(\"https://students-api.up.railway.app/movies\", (data)=> data.map(renderFilms).fail(()=>alert(\"Error al traer las peliculas\")))\r\n}\r\n\r\nmodule.exports = getFilms;\n\n//# sourceURL=webpack://front/./scripts/handler.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const getFilms = __webpack_require__ (/*! ./handler */ \"./scripts/handler.js\")\r\n\r\ngetFilms();\r\n\r\n// const filmsSection = document.getElementById(\"films\")\r\n\r\n// const renderFilms = (movie) => {\r\n//     const movieElement = document.createElement(\"article\")\r\n//     const containerMovie = document.createElement(\"div\")\r\n\r\n//     movieElement.classList.add(\"movie\")\r\n//     containerMovie.classList.add(\"divMovie\")\r\n\r\n//     movieElement.innerHTML = `<img src=\"${movie.poster}\" alt=${movie.title}</img>`\r\n\r\n//     containerMovie.innerHTML = `\r\n//         <h3>${movie.title} - (${movie.year})</h3>\r\n//         <p><strong>Director: </strong> ${movie.director}</p>\r\n//         <p><strong>Duracion: </strong> ${movie.duration}</p>\r\n//         <p><strong>Genero: </strong> ${movie.genre.join(\", \")}</p>\r\n//         <p><strong>Rate: </strong> ${movie.rate}</p>\r\n//         `\r\n//         movieElement.appendChild(containerMovie)\r\n//         filmsSection.appendChild(movieElement)\r\n// }   \r\n\r\n// //tempData.map(renderFilms);\r\n\r\n// $.get(\"https://students-api.up.railway.app/movies\", (data)=> data.map(renderFilms).fail(()=>alert(\"Error al traer las peliculas\")))\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderFilms.js":
/*!********************************!*\
  !*** ./scripts/renderFilms.js ***!
  \********************************/
/***/ ((module) => {

eval("const filmsSection = document.getElementById(\"films\")\r\n\r\nconst renderFilms = (movie) => {\r\n    const movieElement = document.createElement(\"article\")\r\n    const containerMovie = document.createElement(\"div\")\r\n\r\n    movieElement.classList.add(\"movie\")\r\n    containerMovie.classList.add(\"divMovie\")\r\n\r\n    movieElement.innerHTML = `<img src=\"${movie.poster}\" alt=${movie.title}</img>`\r\n\r\n    containerMovie.innerHTML = `\r\n        <h3>${movie.title} - (${movie.year})</h3>\r\n        <p><strong>Director: </strong> ${movie.director}</p>\r\n        <p><strong>Duracion: </strong> ${movie.duration}</p>\r\n        <p><strong>Genero: </strong> ${movie.genre.join(\", \")}</p>\r\n        <p><strong>Rate: </strong> ${movie.rate}</p>\r\n        `\r\n        movieElement.appendChild(containerMovie)\r\n        filmsSection.appendChild(movieElement)\r\n}  \r\n\r\nmodule.exports = renderFilms;\n\n//# sourceURL=webpack://front/./scripts/renderFilms.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;