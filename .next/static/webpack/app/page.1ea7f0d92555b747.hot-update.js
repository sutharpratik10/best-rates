"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/exchange.tsx":
/*!*********************************!*\
  !*** ./components/exchange.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Exchange; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowPathIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowPathIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowPathIcon.js\");\n/* harmony import */ var _components_currency_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/currency_list */ \"(app-pages-browser)/./components/currency_list.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Exchange() {\n    _s();\n    const [fromCurrency, setFromCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [toCurrency, setToCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [convertedAmount, setConvertedAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [exchangeRate, setExchangeRate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (fromCurrency && toCurrency) {\n            // Fetch exchange rate from an API\n            fetch(\"https://api.exchangerate-api.com/v4/latest/\".concat(fromCurrency)).then((response)=>response.json()).then((data)=>{\n                const rate = data.rates[toCurrency];\n                setExchangeRate(rate);\n                setConvertedAmount(amount * rate);\n            });\n        }\n    }, [\n        fromCurrency,\n        toCurrency,\n        amount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                className: \"w-full text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                        children: \"Currency Exchange\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                        children: \"Best rates\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex justify-center w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_currency_list__WEBPACK_IMPORTED_MODULE_4__.Currencylist, {}, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        placeholder: \"From\",\n                        className: \"ml-1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex justify-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowPathIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"h-7\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex justify-center w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_currency_list__WEBPACK_IMPORTED_MODULE_4__.Currencylist, {}, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        placeholder: \"To\",\n                        className: \"ml-1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n                className: \"flex justify-center w-full\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Exchange, \"HWBaQw/cQra2V3OPRFXlmPZhVac=\");\n_c = Exchange;\nvar _c;\n$RefreshReg$(_c, \"Exchange\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZXhjaGFuZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFRcEI7QUFDYztBQUNlO0FBQ0g7QUFFMUMsU0FBU1k7O0lBQ3BCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNnQixRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNrQixpQkFBaUJDLG1CQUFtQixHQUFHbkIsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDb0IsY0FBY0MsZ0JBQWdCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUVqREMsZ0RBQVNBLENBQUM7UUFDTixJQUFJVyxnQkFBZ0JFLFlBQVk7WUFDOUIsa0NBQWtDO1lBQ2xDUSxNQUFNLDhDQUEyRCxPQUFiVixlQUNqRFcsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBO2dCQUNKLE1BQU1DLE9BQU9ELEtBQUtFLEtBQUssQ0FBQ2QsV0FBVztnQkFDbkNPLGdCQUFnQk07Z0JBQ2hCUixtQkFBbUJILFNBQVNXO1lBQzlCO1FBQ0o7SUFDRixHQUFHO1FBQUNmO1FBQWNFO1FBQVlFO0tBQU87SUFFdkMscUJBQ0ksOERBQUNkLHFEQUFJQTtRQUFDMkIsV0FBVTs7MEJBQ1osOERBQUN2QiwyREFBVUE7Z0JBQUN1QixXQUFVOztrQ0FDbEIsOERBQUN0QiwwREFBU0E7a0NBQUM7Ozs7OztrQ0FDWCw4REFBQ0gsZ0VBQWVBO2tDQUFDOzs7Ozs7Ozs7Ozs7MEJBRXJCLDhEQUFDRCw0REFBV0E7Z0JBQUMwQixXQUFVOztrQ0FDbkIsOERBQUNuQixtRUFBWUE7Ozs7O2tDQUNiLDhEQUFDRix1REFBS0E7d0JBQUNzQixhQUFZO3dCQUFPRCxXQUFVOzs7Ozs7Ozs7Ozs7MEJBRXhDLDhEQUFDMUIsNERBQVdBO2dCQUFDMEIsV0FBVTswQkFDbkIsNEVBQUNwQix1R0FBYUE7b0JBQUNvQixXQUFVOzs7Ozs7Ozs7OzswQkFFN0IsOERBQUMxQiw0REFBV0E7Z0JBQUMwQixXQUFVOztrQ0FDbkIsOERBQUNuQixtRUFBWUE7Ozs7O2tDQUNiLDhEQUFDRix1REFBS0E7d0JBQUNzQixhQUFZO3dCQUFLRCxXQUFVOzs7Ozs7Ozs7Ozs7MEJBRXRDLDhEQUFDeEIsMkRBQVVBO2dCQUFDd0IsV0FBVTs7Ozs7Ozs7Ozs7O0FBS2xDO0dBMUN3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXhjaGFuZ2UudHN4P2ZjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENhcmRDb250ZW50LFxyXG4gICAgQ2FyZERlc2NyaXB0aW9uLFxyXG4gICAgQ2FyZEZvb3RlcixcclxuICAgIENhcmRIZWFkZXIsXHJcbiAgICBDYXJkVGl0bGUsXHJcbiAgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxyXG5pbXBvcnQgeyBBcnJvd1BhdGhJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcclxuaW1wb3J0eyBDdXJyZW5jeWxpc3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL2N1cnJlbmN5X2xpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4Y2hhbmdlKCkge1xyXG4gICAgY29uc3QgW2Zyb21DdXJyZW5jeSwgc2V0RnJvbUN1cnJlbmN5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b0N1cnJlbmN5LCBzZXRUb0N1cnJlbmN5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtjb252ZXJ0ZWRBbW91bnQsIHNldENvbnZlcnRlZEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtleGNoYW5nZVJhdGUsIHNldEV4Y2hhbmdlUmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmcm9tQ3VycmVuY3kgJiYgdG9DdXJyZW5jeSkge1xyXG4gICAgICAgICAgLy8gRmV0Y2ggZXhjaGFuZ2UgcmF0ZSBmcm9tIGFuIEFQSVxyXG4gICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZS1hcGkuY29tL3Y0L2xhdGVzdC8ke2Zyb21DdXJyZW5jeX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJhdGUgPSBkYXRhLnJhdGVzW3RvQ3VycmVuY3ldO1xyXG4gICAgICAgICAgICAgIHNldEV4Y2hhbmdlUmF0ZShyYXRlKTtcclxuICAgICAgICAgICAgICBzZXRDb252ZXJ0ZWRBbW91bnQoYW1vdW50ICogcmF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgW2Zyb21DdXJyZW5jeSwgdG9DdXJyZW5jeSwgYW1vdW50XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+Q3VycmVuY3kgRXhjaGFuZ2U8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+QmVzdCByYXRlczwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPEN1cnJlbmN5bGlzdCAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRnJvbVwiIGNsYXNzTmFtZT1cIm1sLTFcIi8+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPEFycm93UGF0aEljb24gY2xhc3NOYW1lPVwiaC03XCIvPlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxDdXJyZW5jeWxpc3QgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlRvXCIgY2xhc3NOYW1lPVwibWwtMVwiLz5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGxcIj5cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIklucHV0IiwiQXJyb3dQYXRoSWNvbiIsIkN1cnJlbmN5bGlzdCIsIkV4Y2hhbmdlIiwiZnJvbUN1cnJlbmN5Iiwic2V0RnJvbUN1cnJlbmN5IiwidG9DdXJyZW5jeSIsInNldFRvQ3VycmVuY3kiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJjb252ZXJ0ZWRBbW91bnQiLCJzZXRDb252ZXJ0ZWRBbW91bnQiLCJleGNoYW5nZVJhdGUiLCJzZXRFeGNoYW5nZVJhdGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmF0ZSIsInJhdGVzIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/exchange.tsx\n"));

/***/ })

});