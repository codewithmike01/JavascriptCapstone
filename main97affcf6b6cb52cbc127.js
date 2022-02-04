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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://JavascriptCapstone/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _module_involvementCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/involvementCall.js */ \"./src/module/involvementCall.js\");\n/* harmony import */ var _module_pokeCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/pokeCall.js */ \"./src/module/pokeCall.js\");\n/* harmony import */ var _module_renderStruc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/renderStruc.js */ \"./src/module/renderStruc.js\");\n/* harmony import */ var _module_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/counter.js */ \"./src/module/counter.js\");\n/* harmony import */ var _module_addLikes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/addLikes.js */ \"./src/module/addLikes.js\");\n\n\n\n\n\n\n\nasync function Stater() {\n  const data = await (0,_module_pokeCall_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const itemsCount = (0,_module_counter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data.results);\n  (0,_module_addLikes_js__WEBPACK_IMPORTED_MODULE_5__.displayCounts)(itemsCount);\n  await (0,_module_pokeCall_js__WEBPACK_IMPORTED_MODULE_2__.getDetail)(data);\n  await (0,_module_renderStruc_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\n}\n\nStater();\n\n\n//# sourceURL=webpack://JavascriptCapstone/./src/index.js?");

/***/ }),

/***/ "./src/module/addLikes.js":
/*!********************************!*\
  !*** ./src/module/addLikes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCounts\": () => (/* binding */ displayCounts),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.querySelector('.grid-container');\n\n// eslint-disable-next-line operator-linebreak\nconst url =\n  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FmntFuxK5T09jvOkFrA6/likes';\n\nconst postLikes = async (id) => {\n  const userLikes = { item_id: id };\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(userLikes),\n  });\n  return response;\n};\n\nconst getLikes = async () => {\n  const like = await fetch(url);\n  const data = await like.json();\n  return data;\n};\n\nconst updatLikes = async (id) => {\n  const likesData = await getLikes();\n  let results = 0;\n  likesData.forEach((element) => {\n    if (element.item_id.toString() === id.toString()) {\n      results = element.likes;\n    }\n  });\n  return results;\n};\n\nconst addElements = (e) => {\n  const currentNumber = e.innerText;\n  e.innerText = parseInt(currentNumber, 10) + 1;\n};\n\nconst displayCounts = (countData) => {\n  const counts = document.querySelector('.active');\n  counts.innerText = `Pokemons (${countData})`;\n};\n\ncontainer.addEventListener('click', (e) => {\n  if (e.target.className === 'far fa-heart likes') {\n    const targetElement = e.target;\n    const likesId = targetElement.parentNode.querySelector('span').id;\n    const likeL = targetElement.parentNode.querySelector('span');\n    postLikes(likesId);\n    updatLikes(likesId);\n    addElements(likeL);\n  }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updatLikes);\n\n\n//# sourceURL=webpack://JavascriptCapstone/./src/module/addLikes.js?");

/***/ }),

/***/ "./src/module/commentCount.js":
/*!************************************!*\
  !*** ./src/module/commentCount.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentCount)\n/* harmony export */ });\nfunction commentCount(comment) {\n  return comment.length;\n}\n\n\n//# sourceURL=webpack://JavascriptCapstone/./src/module/commentCount.js?");

/***/ }),

/***/ "./src/module/counter.js":
/*!*******************************!*\
  !*** ./src/module/counter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounter = (data) => {\n  const countData = data.length;\n  return countData;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\n\n\n//# sourceURL=webpack://JavascriptCapstone/./src/module/counter.js?");

/***/ }),

/***/ "./src/module/involvementCall.js":
/*!***************************************!*\
  !*** ./src/module/involvementCall.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getpostInvolveCommentApi)\n/* harmony export */ });\n/* harmony import */ var _renderPop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPop.js */ \"./src/module/renderPop.js\");\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCount.js */ \"./src/module/commentCount.js\");\n// ID FOR API Jn2Mh8nYExszQ1ziounn\n// eslint-disable-next-line import/no-cycle\n\n\n\nfunction alertErr(p) {\n  p.innerText = 'No value entered';\n  setTimeout(() => {\n    p.innerText = '';\n  }, 3000);\n}\n\nasync function getpostInvolveCommentApi(id) {\n  const response = await fetch(\n    // eslint-disable-next-line comma-dangle\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jn2Mh8nYExszQ1ziounn/comments?item_id=${id}`\n  );\n  const data = await response.json();\n  let hope = '';\n  let arrObj = [];\n  if (data.length) {\n    const hopeLength = data.length;\n    data.forEach(async (item) => {\n      hope += `\n      <li><span class=\"time\">${item.creation_date}</span> ${item.username}: ${item.comment}</li>`;\n    });\n    arrObj.push({ count: hopeLength, show: hope });\n    return arrObj;\n    // eslint-disable-next-line no-else-return\n  } else {\n    arrObj = [];\n    arrObj.push({ count: 0, show: hope });\n    return arrObj;\n  }\n}\n\n// Involment Api call\nasync function postInvolveCommentApi(id, name, userComment) {\n  const userObj = {\n    item_id: id,\n    username: name,\n    comment: userComment,\n  };\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jn2Mh8nYExszQ1ziounn/comments',\n    {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(userObj),\n      // eslint-disable-next-line comma-dangle\n    }\n  );\n  const data = await response.json();\n  return data;\n}\n\nfunction appendElement(parentComment, name, msgText) {\n  parentComment.innerHtml = '';\n  const date = new Date();\n  let month = 1 + date.getMonth();\n  let day = date.getDate();\n  day = day < 10 ? `0${day}` : day;\n  month = month < 10 ? `0${month}` : month;\n  const li = document.createElement('li');\n  li.innerText = `${date.getFullYear()}-${month}-${day}  ${name}: ${msgText}`;\n  parentComment.appendChild(li);\n  const comment = parentComment.querySelectorAll('li');\n  const count = (0,_commentCount_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comment);\n  const head = parentComment.parentNode.querySelector('.comment-head');\n  head.innerText = `Comments (${count})`;\n}\n\nfunction getForm(item) {\n  const { id } = item;\n  const form = item.querySelector('form');\n  const p = item.querySelector('.red-alert');\n  const comment = item.querySelector('.comments-info');\n  form.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const inputValue = form.querySelector('.input-name');\n    const textValue = form.querySelector('.msg');\n    if (inputValue.value.trim() !== '' && textValue.value.trim() !== '') {\n      postInvolveCommentApi(\n        id,\n        inputValue.value.trim(),\n        // eslint-disable-next-line comma-dangle\n        textValue.value.trim()\n      );\n    } else {\n      alertErr(p);\n    }\n    appendElement(comment, inputValue.value.trim(), textValue.value.trim());\n    inputValue.value = '';\n    textValue.value = '';\n  });\n}\n\nfunction getParentId() {\n  const parentPop = _renderPop_js__WEBPACK_IMPORTED_MODULE_0__.popUps.querySelectorAll('.popup-info');\n  parentPop.forEach((item) => {\n    if (item.className !== 'popup-info hide') {\n      _renderPop_js__WEBPACK_IMPORTED_MODULE_0__.popUps.removeEventListener('click', getParentId);\n      getpostInvolveCommentApi(item.id);\n      getForm(item);\n    }\n  });\n}\n\n_renderPop_js__WEBPACK_IMPORTED_MODULE_0__.buttonStruct.addEventListener('click', (e) => {\n  if (e.target.className === 'btn') {\n    _renderPop_js__WEBPACK_IMPORTED_MODULE_0__.popUps.addEventListener('click', getParentId());\n  }\n});\n\n\n//# sourceURL=webpack://JavascriptCapstone/./src/module/involvementCall.js?");

/***/ }),

/***/ "./src/module/pokeCall.js":
/*!********************************!*\
  !*** ./src/module/pokeCall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDetail\": () => (/* binding */ getDetail),\n/* harmony export */   \"default\": () => (/* binding */ callPoke)\n/* harmony export */ });\n/* harmony import */ var _renderPop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPop.js */ \"./src/module/renderPop.js\");\n/* harmony import */ var _renderStruc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderStruc.js */ \"./src/module/renderStruc.js\");\n\n\n\nasync function getDetail(dataGet) {\n  dataGet = dataGet.results;\n  dataGet.forEach(async (item) => {\n    const respones = await fetch(`${item.url}`);\n    const data = await respones.json();\n    (0,_renderStruc_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n    (0,_renderPop_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n  });\n}\n\nasync function callPoke() {\n  const response = await fetch(' https://pokeapi.co/api/v2/pokemon');\n  const data = await response.json();\n  return data;\n}\n\n\n//# sourceURL=webpack://JavascriptCapstone/./src/module/pokeCall.js?");

/***/ }),

/***/ "./src/module/renderPop.js":
/*!*********************************!*\
  !*** ./src/module/renderPop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popUps\": () => (/* binding */ popUps),\n/* harmony export */   \"buttonStruct\": () => (/* binding */ buttonStruct),\n/* harmony export */   \"default\": () => (/* binding */ renderPopUp)\n/* harmony export */ });\n/* harmony import */ var _involvementCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementCall.js */ \"./src/module/involvementCall.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nconst popUps = document.querySelector('.pop-ups');\nconst buttonStruct = document.querySelector('.grid-container');\nconst gridItem = document.querySelector('.grid-container');\nlet popCards = '';\n\nfunction popUpToggle(id) {\n  const popItems = popUps.querySelectorAll('.popup-info');\n\n  popItems.forEach((item) => {\n    if (id === item.id) {\n      popUps.classList.toggle('hide');\n      item.classList.toggle('hide');\n      gridItem.classList.toggle('is-disable');\n    }\n  });\n}\n\nasync function renderPopUp(data) {\n  const moves = data.moves['0'].move.name;\n  const { weight } = data;\n  const { height } = data;\n  const ability = data.abilities[0].ability.name;\n  const { name } = data;\n  const { id } = data;\n  const img = data.sprites.other['official-artwork'].front_default;\n  const comment = await (0,_involvementCall_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n\n  popCards += ` <div class=\"popup-info hide\" id='${id}'>\n  <div class=\"image\">\n    <img src=\"${img}\" alt=\"\" />\n    <div class=\"close\">&times;</div>\n  </div>\n  <div class=\"details\">\n    <h3>${name}</h3>\n    <div class=\"details-info\">\n      <div class=\"left\">\n        <h4>Move: ${moves}</h4>\n        <h4>Length: ${height}cm</h4>\n      </div>\n      <div class=\"right\">\n        <h4>Weight: ${weight}pounds</h4>\n        <h4>Power: ${ability}</h4>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"comments\">\n    <h4 class='comment-head'>Comments (${comment[0].count})</h4>\n    <ul class=\"comments-info\">\n     ${comment[0].show}\n    </ul>\n  </div>\n\n  <form action=\"#\">\n    <label for=\"form Add comment\"> <h5>Add a comment</h5></label>\n    <input type=\"text\" placeholder=\"Your name\" class=\"input-name\" required/>\n    <textarea\n      name=\"comment-text\"\n      id=\"text\"\n      cols=\"30\"\n      rows=\"7\"\n      placeholder=\"Your insight\"\n    class=\"msg\" required></textarea>\n    <div class=\"btn-layout\">\n    <button type=\"submit\" class=\"btn\">Comment</button>\n    <p class=\"red-alert\"></p>\n    </div>\n  </form>\n</div>`;\n\n  popUps.innerHTML = popCards;\n}\n\n// Event listeners\n\nbuttonStruct.addEventListener('click', (event) => {\n  if (event.target.className === 'btn') {\n    // eslint-disable-next-line prefer-destructuring\n    const id = event.target.parentNode.id;\n    popUpToggle(id);\n  }\n});\n\npopUps.addEventListener('click', (event) => {\n  if (event.target.className === 'close') {\n    const parentHit = event.target.parentNode.parentNode;\n    popUps.classList.toggle('hide');\n    parentHit.classList.toggle('hide');\n    gridItem.classList.toggle('is-disable');\n  }\n});\n\n\n//# sourceURL=webpack://JavascriptCapstone/./src/module/renderPop.js?");

/***/ }),

/***/ "./src/module/renderStruc.js":
/*!***********************************!*\
  !*** ./src/module/renderStruc.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addLikes.js */ \"./src/module/addLikes.js\");\n\n\nconst renderStructure = async (data) => {\n  const { name } = data;\n  const { id } = data;\n  const img = data.sprites.other['official-artwork'].front_default;\n\n  const like = await (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n  const list = document.getElementById('list-items');\n  list.innerHTML += `<div class=\"grid-item\" id =\"${id}\">\n    <img src=\"${img}\" alt=\"\" />\n    <div class=\"space-item\">\n      <h4>${name}</h4>\n      <i class=\"far fa-heart likes\"></i>\n      <div class=\"span-items\">\n      <span id=\"${id}\">${like}</span>\n      </div>\n    </div>\n    <button type=\"button\" class=\"btn\">Comments</button>\n  </div>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderStructure);\n\n\n//# sourceURL=webpack://JavascriptCapstone/./src/module/renderStruc.js?");

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