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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("var actualBtn = document.getElementById('actual-btn');\nvar fileChosen = document.getElementById('file-chosen');\nactualBtn.addEventListener('change', function () {\n  fileChosen.textContent = this.files[0].name;\n}); // const excel = require(\"exceljs\");\n// //Read a file\n// var workbook = new excel.Workbook();\n// workbook.xlsx.readFile(\"../assets/book.xlsx\").then(function () {\n// const json = JSON.stringify(workbook.model);\n// console.log(json);\n// //Get sheet by Name\n// //var worksheet=workbook.getWorksheet('Sheet1');\n// //Get Lastrow\n// //svar row = worksheet.lastRow\n// //Update a cell\n// //row.getCell(1).value = 5;\n// //row.commit();\n// //Save the workbook\n// //return workbook.xlsx.writeFile(\"data/Sample.xlsx\");\n// });\n\n//# sourceURL=webpack://excelparser/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;