/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/base.less":
/*!*****************************!*\
  !*** ./src/style/base.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.less */ "./src/style/index.less");
/* harmony import */ var _style_base_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/base.less */ "./src/style/base.less");


var body = document.querySelector("body");
var progress = document.querySelector(".top-progress-bar");
window.onscroll = function () {
    var clientHeight = body.offsetHeight;
    var domHeight = body.scrollHeight;
    var _height = domHeight - clientHeight;
    var percent = Math.floor(window.scrollY / _height * 100);
    progress.style.width = percent + "%";
};
body.addEventListener('click', function (e) {
    // console.log(e)
    var div = document.createElement('div');
    div.innerHTML = '<svg t="1630043513592" class="icon" viewBox="0 0 1221 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5331" width="32" height="32"><path d="M1204.814491 122.670376l-104.202498-9.819364a18.026592 18.026592 0 0 1-14.655767-11.138382L1048.290907 11.139994a17.880035 17.880035 0 0 0-33.122032 0l-37.079088 90.572636a17.586919 17.586919 0 0 1-14.655767 11.138382l-104.349055 9.819364a18.026592 18.026592 0 0 0-10.112479 31.363339l78.554907 69.028659a17.733477 17.733477 0 0 1 5.715749 17.58692L908.91457 337.084236a18.026592 18.026592 0 0 0 26.673495 19.638727l86.908693-51.002067a17.586919 17.586919 0 0 1 18.173151 0L1128.751064 357.162636A18.026592 18.026592 0 0 0 1154.69177 337.084236l-23.302668-96.874615a17.733477 17.733477 0 0 1 5.715749-17.58692l78.554907-69.028659a18.319708 18.319708 0 0 0-10.845267-31.363339z" fill="#f4ea2a" p-id="5332"></path><path d="M928.699854 224.674509l4.250173-17.147247a18.026592 18.026592 0 0 0-5.715749-17.000689l-74.451293-66.097505a18.026592 18.026592 0 0 0-4.103614 29.311532l78.554907 69.028659a14.655766 14.655766 0 0 1 1.465576 1.90525zM1211.263028 124.575625L1137.104851 190.526573a18.026592 18.026592 0 0 0-5.715749 17.733478l4.103614 17.293804 1.612135-1.758692 78.554907-69.028659a18.319708 18.319708 0 0 0-4.39673-30.190879zM1150.588155 320.376662a17.880035 17.880035 0 0 1-22.56988 3.663942L1040.816466 272.89198a18.319708 18.319708 0 0 0-18.17315 0l-86.908694 51.148624a17.733477 17.733477 0 0 1-22.423322-3.810499L908.91457 337.084236a18.026592 18.026592 0 0 0 26.673495 19.638727l86.908693-51.002067a17.586919 17.586919 0 0 1 18.173151 0L1128.751064 357.162636A18.026592 18.026592 0 0 0 1154.69177 337.084236z" fill="#f4ea2a" opacity=".5" p-id="5333"></path><path d="M869.490559 544.463328a42.501722 42.501722 0 0 0-25.06136-73.278831L601.143479 448.321502a42.208607 42.208607 0 0 1-34.880724-25.794149l-86.762136-211.043034a41.622376 41.622376 0 0 0-77.235888 0l-86.469021 211.043034a41.182703 41.182703 0 0 1-34.734166 25.794149L37.922382 471.331055a41.915491 41.915491 0 0 0-23.595784 73.278831l183.050521 161.213429a42.062049 42.062049 0 0 1 13.336747 41.182703L155.608185 971.97203a42.062049 42.062049 0 0 0 61.993891 46.019106l190.524961-112.116612c71.227024-56.4247 69.468332-125.160244 56.717816-147.583566-14.655766-25.354476-34.294493-36.199743-52.760759-26.673495s-19.638727 18.319708-19.638727 18.319708a34.734166 34.734166 0 1 1 34.294493 60.381757s-40.303357 25.06136-67.416524-22.862995 18.612823-83.39131 28.432186-88.813944a83.537868 83.537868 0 0 1 112.995958 39.424011c27.845956 49.096817 16.414458 112.995958-28.432187 166.489505l193.163 113.435631a41.915491 41.915491 0 0 0 61.993891-46.019106l-54.372893-225.552243a41.915491 41.915491 0 0 1 13.19019-41.182703z" fill="#f4ea2a" p-id="5334"></path><path d="M205.43779 713.590871l5.276076-24.768245a41.768934 41.768934 0 0 0-13.336747-41.036146L14.912829 487.012725A8.295164 8.295164 0 0 1 11.542003 483.641898 42.355164 42.355164 0 0 0 14.912829 544.463328l183.05052 161.213429a43.967299 43.967299 0 0 1 7.474441 7.914114zM871.542366 484.81436l-2.051807 2.198365-183.197078 161.213428a41.768934 41.768934 0 0 0-13.19019 41.036146l6.008864 24.621687a42.64828 42.64828 0 0 1 7.181326-8.353787l183.197078-161.213428a42.355164 42.355164 0 0 0 2.051807-59.502411zM460.887796 840.802922a41.622376 41.622376 0 0 0-40.596473 0.732788l-202.689247 119.15138a41.622376 41.622376 0 0 1-55.985027-13.19019l-6.008864 24.47513a42.062049 42.062049 0 0 0 61.993891 46.019106l190.524961-112.116612a173.524272 173.524272 0 0 0 52.760759-65.071602zM727.476184 971.97203l-5.862307-24.328572a41.622376 41.622376 0 0 1-56.131584 13.043632l-166.049832-97.607403a203.275478 203.275478 0 0 1-27.113168 41.475818l193.163 113.435631a41.915491 41.915491 0 0 0 61.993891-46.019106z" fill="#f4ea2a" opacity=".5" p-id="5335"></path></svg>';
    div.style.position = 'fixed';
    div.style.top = (e.clientY - 36) + 'px';
    div.style.left = (e.clientX - 10) + 'px';
    div.style.transition = "all 1s";
    body.append(div);
    var timeout1 = setTimeout(function () {
        div.style.top = (e.clientY - 100) + 'px';
        div.style.opacity = "0";
        var timeout2 = setTimeout(function () { body.removeChild(div); clearTimeout(timeout2); }, 1000);
        clearTimeout(timeout1);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0Q7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHVCQUF1Qix5QkFBeUI7QUFDaEc7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfaXRlbS8uL3NyYy9zdHlsZS9iYXNlLmxlc3M/MjQ4NSIsIndlYnBhY2s6Ly93ZWJwYWNrX2l0ZW0vLi9zcmMvc3R5bGUvaW5kZXgubGVzcz85MDcwIiwid2VicGFjazovL3dlYnBhY2tfaXRlbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX2l0ZW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrX2l0ZW0vLi9zcmMvanMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc3R5bGUvaW5kZXgubGVzcyc7XG5pbXBvcnQgJy4uL3N0eWxlL2Jhc2UubGVzcyc7XG52YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xudmFyIHByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtcHJvZ3Jlc3MtYmFyXCIpO1xud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbGllbnRIZWlnaHQgPSBib2R5Lm9mZnNldEhlaWdodDtcbiAgICB2YXIgZG9tSGVpZ2h0ID0gYm9keS5zY3JvbGxIZWlnaHQ7XG4gICAgdmFyIF9oZWlnaHQgPSBkb21IZWlnaHQgLSBjbGllbnRIZWlnaHQ7XG4gICAgdmFyIHBlcmNlbnQgPSBNYXRoLmZsb29yKHdpbmRvdy5zY3JvbGxZIC8gX2hlaWdodCAqIDEwMCk7XG4gICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBwZXJjZW50ICsgXCIlXCI7XG59O1xuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9ICc8c3ZnIHQ9XCIxNjMwMDQzNTEzNTkyXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMjIxIDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCI1MzMxXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+PHBhdGggZD1cIk0xMjA0LjgxNDQ5MSAxMjIuNjcwMzc2bC0xMDQuMjAyNDk4LTkuODE5MzY0YTE4LjAyNjU5MiAxOC4wMjY1OTIgMCAwIDEtMTQuNjU1NzY3LTExLjEzODM4MkwxMDQ4LjI5MDkwNyAxMS4xMzk5OTRhMTcuODgwMDM1IDE3Ljg4MDAzNSAwIDAgMC0zMy4xMjIwMzIgMGwtMzcuMDc5MDg4IDkwLjU3MjYzNmExNy41ODY5MTkgMTcuNTg2OTE5IDAgMCAxLTE0LjY1NTc2NyAxMS4xMzgzODJsLTEwNC4zNDkwNTUgOS44MTkzNjRhMTguMDI2NTkyIDE4LjAyNjU5MiAwIDAgMC0xMC4xMTI0NzkgMzEuMzYzMzM5bDc4LjU1NDkwNyA2OS4wMjg2NTlhMTcuNzMzNDc3IDE3LjczMzQ3NyAwIDAgMSA1LjcxNTc0OSAxNy41ODY5Mkw5MDguOTE0NTcgMzM3LjA4NDIzNmExOC4wMjY1OTIgMTguMDI2NTkyIDAgMCAwIDI2LjY3MzQ5NSAxOS42Mzg3MjdsODYuOTA4NjkzLTUxLjAwMjA2N2ExNy41ODY5MTkgMTcuNTg2OTE5IDAgMCAxIDE4LjE3MzE1MSAwTDExMjguNzUxMDY0IDM1Ny4xNjI2MzZBMTguMDI2NTkyIDE4LjAyNjU5MiAwIDAgMCAxMTU0LjY5MTc3IDMzNy4wODQyMzZsLTIzLjMwMjY2OC05Ni44NzQ2MTVhMTcuNzMzNDc3IDE3LjczMzQ3NyAwIDAgMSA1LjcxNTc0OS0xNy41ODY5Mmw3OC41NTQ5MDctNjkuMDI4NjU5YTE4LjMxOTcwOCAxOC4zMTk3MDggMCAwIDAtMTAuODQ1MjY3LTMxLjM2MzMzOXpcIiBmaWxsPVwiI2Y0ZWEyYVwiIHAtaWQ9XCI1MzMyXCI+PC9wYXRoPjxwYXRoIGQ9XCJNOTI4LjY5OTg1NCAyMjQuNjc0NTA5bDQuMjUwMTczLTE3LjE0NzI0N2ExOC4wMjY1OTIgMTguMDI2NTkyIDAgMCAwLTUuNzE1NzQ5LTE3LjAwMDY4OWwtNzQuNDUxMjkzLTY2LjA5NzUwNWExOC4wMjY1OTIgMTguMDI2NTkyIDAgMCAwLTQuMTAzNjE0IDI5LjMxMTUzMmw3OC41NTQ5MDcgNjkuMDI4NjU5YTE0LjY1NTc2NiAxNC42NTU3NjYgMCAwIDEgMS40NjU1NzYgMS45MDUyNXpNMTIxMS4yNjMwMjggMTI0LjU3NTYyNUwxMTM3LjEwNDg1MSAxOTAuNTI2NTczYTE4LjAyNjU5MiAxOC4wMjY1OTIgMCAwIDAtNS43MTU3NDkgMTcuNzMzNDc4bDQuMTAzNjE0IDE3LjI5MzgwNCAxLjYxMjEzNS0xLjc1ODY5MiA3OC41NTQ5MDctNjkuMDI4NjU5YTE4LjMxOTcwOCAxOC4zMTk3MDggMCAwIDAtNC4zOTY3My0zMC4xOTA4Nzl6TTExNTAuNTg4MTU1IDMyMC4zNzY2NjJhMTcuODgwMDM1IDE3Ljg4MDAzNSAwIDAgMS0yMi41Njk4OCAzLjY2Mzk0MkwxMDQwLjgxNjQ2NiAyNzIuODkxOThhMTguMzE5NzA4IDE4LjMxOTcwOCAwIDAgMC0xOC4xNzMxNSAwbC04Ni45MDg2OTQgNTEuMTQ4NjI0YTE3LjczMzQ3NyAxNy43MzM0NzcgMCAwIDEtMjIuNDIzMzIyLTMuODEwNDk5TDkwOC45MTQ1NyAzMzcuMDg0MjM2YTE4LjAyNjU5MiAxOC4wMjY1OTIgMCAwIDAgMjYuNjczNDk1IDE5LjYzODcyN2w4Ni45MDg2OTMtNTEuMDAyMDY3YTE3LjU4NjkxOSAxNy41ODY5MTkgMCAwIDEgMTguMTczMTUxIDBMMTEyOC43NTEwNjQgMzU3LjE2MjYzNkExOC4wMjY1OTIgMTguMDI2NTkyIDAgMCAwIDExNTQuNjkxNzcgMzM3LjA4NDIzNnpcIiBmaWxsPVwiI2Y0ZWEyYVwiIG9wYWNpdHk9XCIuNVwiIHAtaWQ9XCI1MzMzXCI+PC9wYXRoPjxwYXRoIGQ9XCJNODY5LjQ5MDU1OSA1NDQuNDYzMzI4YTQyLjUwMTcyMiA0Mi41MDE3MjIgMCAwIDAtMjUuMDYxMzYtNzMuMjc4ODMxTDYwMS4xNDM0NzkgNDQ4LjMyMTUwMmE0Mi4yMDg2MDcgNDIuMjA4NjA3IDAgMCAxLTM0Ljg4MDcyNC0yNS43OTQxNDlsLTg2Ljc2MjEzNi0yMTEuMDQzMDM0YTQxLjYyMjM3NiA0MS42MjIzNzYgMCAwIDAtNzcuMjM1ODg4IDBsLTg2LjQ2OTAyMSAyMTEuMDQzMDM0YTQxLjE4MjcwMyA0MS4xODI3MDMgMCAwIDEtMzQuNzM0MTY2IDI1Ljc5NDE0OUwzNy45MjIzODIgNDcxLjMzMTA1NWE0MS45MTU0OTEgNDEuOTE1NDkxIDAgMCAwLTIzLjU5NTc4NCA3My4yNzg4MzFsMTgzLjA1MDUyMSAxNjEuMjEzNDI5YTQyLjA2MjA0OSA0Mi4wNjIwNDkgMCAwIDEgMTMuMzM2NzQ3IDQxLjE4MjcwM0wxNTUuNjA4MTg1IDk3MS45NzIwM2E0Mi4wNjIwNDkgNDIuMDYyMDQ5IDAgMCAwIDYxLjk5Mzg5MSA0Ni4wMTkxMDZsMTkwLjUyNDk2MS0xMTIuMTE2NjEyYzcxLjIyNzAyNC01Ni40MjQ3IDY5LjQ2ODMzMi0xMjUuMTYwMjQ0IDU2LjcxNzgxNi0xNDcuNTgzNTY2LTE0LjY1NTc2Ni0yNS4zNTQ0NzYtMzQuMjk0NDkzLTM2LjE5OTc0My01Mi43NjA3NTktMjYuNjczNDk1cy0xOS42Mzg3MjcgMTguMzE5NzA4LTE5LjYzODcyNyAxOC4zMTk3MDhhMzQuNzM0MTY2IDM0LjczNDE2NiAwIDEgMSAzNC4yOTQ0OTMgNjAuMzgxNzU3cy00MC4zMDMzNTcgMjUuMDYxMzYtNjcuNDE2NTI0LTIyLjg2Mjk5NSAxOC42MTI4MjMtODMuMzkxMzEgMjguNDMyMTg2LTg4LjgxMzk0NGE4My41Mzc4NjggODMuNTM3ODY4IDAgMCAxIDExMi45OTU5NTggMzkuNDI0MDExYzI3Ljg0NTk1NiA0OS4wOTY4MTcgMTYuNDE0NDU4IDExMi45OTU5NTgtMjguNDMyMTg3IDE2Ni40ODk1MDVsMTkzLjE2MyAxMTMuNDM1NjMxYTQxLjkxNTQ5MSA0MS45MTU0OTEgMCAwIDAgNjEuOTkzODkxLTQ2LjAxOTEwNmwtNTQuMzcyODkzLTIyNS41NTIyNDNhNDEuOTE1NDkxIDQxLjkxNTQ5MSAwIDAgMSAxMy4xOTAxOS00MS4xODI3MDN6XCIgZmlsbD1cIiNmNGVhMmFcIiBwLWlkPVwiNTMzNFwiPjwvcGF0aD48cGF0aCBkPVwiTTIwNS40Mzc3OSA3MTMuNTkwODcxbDUuMjc2MDc2LTI0Ljc2ODI0NWE0MS43Njg5MzQgNDEuNzY4OTM0IDAgMCAwLTEzLjMzNjc0Ny00MS4wMzYxNDZMMTQuOTEyODI5IDQ4Ny4wMTI3MjVBOC4yOTUxNjQgOC4yOTUxNjQgMCAwIDEgMTEuNTQyMDAzIDQ4My42NDE4OTggNDIuMzU1MTY0IDQyLjM1NTE2NCAwIDAgMCAxNC45MTI4MjkgNTQ0LjQ2MzMyOGwxODMuMDUwNTIgMTYxLjIxMzQyOWE0My45NjcyOTkgNDMuOTY3Mjk5IDAgMCAxIDcuNDc0NDQxIDcuOTE0MTE0ek04NzEuNTQyMzY2IDQ4NC44MTQzNmwtMi4wNTE4MDcgMi4xOTgzNjUtMTgzLjE5NzA3OCAxNjEuMjEzNDI4YTQxLjc2ODkzNCA0MS43Njg5MzQgMCAwIDAtMTMuMTkwMTkgNDEuMDM2MTQ2bDYuMDA4ODY0IDI0LjYyMTY4N2E0Mi42NDgyOCA0Mi42NDgyOCAwIDAgMSA3LjE4MTMyNi04LjM1Mzc4N2wxODMuMTk3MDc4LTE2MS4yMTM0MjhhNDIuMzU1MTY0IDQyLjM1NTE2NCAwIDAgMCAyLjA1MTgwNy01OS41MDI0MTF6TTQ2MC44ODc3OTYgODQwLjgwMjkyMmE0MS42MjIzNzYgNDEuNjIyMzc2IDAgMCAwLTQwLjU5NjQ3MyAwLjczMjc4OGwtMjAyLjY4OTI0NyAxMTkuMTUxMzhhNDEuNjIyMzc2IDQxLjYyMjM3NiAwIDAgMS01NS45ODUwMjctMTMuMTkwMTlsLTYuMDA4ODY0IDI0LjQ3NTEzYTQyLjA2MjA0OSA0Mi4wNjIwNDkgMCAwIDAgNjEuOTkzODkxIDQ2LjAxOTEwNmwxOTAuNTI0OTYxLTExMi4xMTY2MTJhMTczLjUyNDI3MiAxNzMuNTI0MjcyIDAgMCAwIDUyLjc2MDc1OS02NS4wNzE2MDJ6TTcyNy40NzYxODQgOTcxLjk3MjAzbC01Ljg2MjMwNy0yNC4zMjg1NzJhNDEuNjIyMzc2IDQxLjYyMjM3NiAwIDAgMS01Ni4xMzE1ODQgMTMuMDQzNjMybC0xNjYuMDQ5ODMyLTk3LjYwNzQwM2EyMDMuMjc1NDc4IDIwMy4yNzU0NzggMCAwIDEtMjcuMTEzMTY4IDQxLjQ3NTgxOGwxOTMuMTYzIDExMy40MzU2MzFhNDEuOTE1NDkxIDQxLjkxNTQ5MSAwIDAgMCA2MS45OTM4OTEtNDYuMDE5MTA2elwiIGZpbGw9XCIjZjRlYTJhXCIgb3BhY2l0eT1cIi41XCIgcC1pZD1cIjUzMzVcIj48L3BhdGg+PC9zdmc+JztcbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGRpdi5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gMzYpICsgJ3B4JztcbiAgICBkaXYuc3R5bGUubGVmdCA9IChlLmNsaWVudFggLSAxMCkgKyAncHgnO1xuICAgIGRpdi5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMXNcIjtcbiAgICBib2R5LmFwcGVuZChkaXYpO1xuICAgIHZhciB0aW1lb3V0MSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXYuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIDEwMCkgKyAncHgnO1xuICAgICAgICBkaXYuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICB2YXIgdGltZW91dDIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgYm9keS5yZW1vdmVDaGlsZChkaXYpOyBjbGVhclRpbWVvdXQodGltZW91dDIpOyB9LCAxMDAwKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQxKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9