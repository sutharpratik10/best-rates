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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Exchange; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowPathIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowPathIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowPathIcon.js\");\n/* harmony import */ var _components_currency_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/currency_list */ \"(app-pages-browser)/./components/currency_list.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Exchange() {\n    _s();\n    const [fromCurrency, setFromCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [toCurrency, setToCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [convertedAmount, setConvertedAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [exchangeRate, setExchangeRate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (fromCurrency && toCurrency) {\n            const fetchExchangeRate = async ()=>{\n                try {\n                    const response = await fetch(\"https://api.exchangerate-api.com/v4/latest/\".concat(fromCurrency));\n                    const data = await response.json();\n                    if (data && data.rates && data.rates[toCurrency]) {\n                        const rate = data.rates[toCurrency];\n                        setExchangeRate(rate);\n                        setConvertedAmount(amount * rate);\n                    } else {\n                        console.error(\"Invalid response data:\", data);\n                    }\n                } catch (error) {\n                    console.error(\"Error fetching exchange rate:\", error);\n                }\n            };\n            fetchExchangeRate();\n        }\n    }, [\n        fromCurrency,\n        toCurrency,\n        amount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                className: \"w-full text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                        children: \"Currency Exchange\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                        children: \"Best rates\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex justify-center w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_currency_list__WEBPACK_IMPORTED_MODULE_4__.Currencylist, {\n                        onSelect: setFromCurrency\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        placeholder: \"From\",\n                        className: \"ml-1\",\n                        value: amount,\n                        onChange: (e)=>setAmount(parseFloat(e.target.value) || 0)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex justify-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowPathIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"h-7\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex justify-center w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_currency_list__WEBPACK_IMPORTED_MODULE_4__.Currencylist, {\n                        onSelect: setToCurrency\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        placeholder: \"To\",\n                        className: \"ml-1\",\n                        value: convertedAmount,\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n                className: \"flex justify-center w-full\",\n                children: [\n                    \"Exchange Rate: \",\n                    exchangeRate\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Pratik\\\\Dev\\\\nodejs\\\\best-rates\\\\components\\\\exchange.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(Exchange, \"c3/9vMQ314225Jz0Ie16Ri7luGQ=\");\n_c = Exchange;\nvar _c;\n$RefreshReg$(_c, \"Exchange\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZXhjaGFuZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFRcEI7QUFDYztBQUNlO0FBQ0g7QUFFMUMsU0FBU1k7O0lBQ3BCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNnQixRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNrQixpQkFBaUJDLG1CQUFtQixHQUFHbkIsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDb0IsY0FBY0MsZ0JBQWdCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUdqREMsZ0RBQVNBLENBQUM7UUFDTixJQUFJVyxnQkFBZ0JFLFlBQVk7WUFDNUIsTUFBTVEsb0JBQW9CO2dCQUN0QixJQUFJO29CQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSw4Q0FBMkQsT0FBYlo7b0JBQzNFLE1BQU1hLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtvQkFDaEMsSUFBSUQsUUFBUUEsS0FBS0UsS0FBSyxJQUFJRixLQUFLRSxLQUFLLENBQUNiLFdBQVcsRUFBRTt3QkFDOUMsTUFBTWMsT0FBT0gsS0FBS0UsS0FBSyxDQUFDYixXQUFXO3dCQUNuQ08sZ0JBQWdCTzt3QkFDaEJULG1CQUFtQkgsU0FBU1k7b0JBQ2hDLE9BQU87d0JBQ0hDLFFBQVFDLEtBQUssQ0FBQywwQkFBMEJMO29CQUM1QztnQkFDSixFQUFFLE9BQU9LLE9BQU87b0JBQ1pELFFBQVFDLEtBQUssQ0FBQyxpQ0FBaUNBO2dCQUNuRDtZQUNKO1lBRUFSO1FBQ0o7SUFDSixHQUFHO1FBQUNWO1FBQWNFO1FBQVlFO0tBQU87SUFFckMscUJBQ0ksOERBQUNkLHFEQUFJQTtRQUFDNkIsV0FBVTs7MEJBQ1osOERBQUN6QiwyREFBVUE7Z0JBQUN5QixXQUFVOztrQ0FDbEIsOERBQUN4QiwwREFBU0E7a0NBQUM7Ozs7OztrQ0FDWCw4REFBQ0gsZ0VBQWVBO2tDQUFDOzs7Ozs7Ozs7Ozs7MEJBRXJCLDhEQUFDRCw0REFBV0E7Z0JBQUM0QixXQUFVOztrQ0FDbkIsOERBQUNyQixtRUFBWUE7d0JBQUNzQixVQUFVbkI7Ozs7OztrQ0FDeEIsOERBQUNMLHVEQUFLQTt3QkFBQ3lCLGFBQVk7d0JBQU9GLFdBQVU7d0JBQU9HLE9BQU9sQjt3QkFBUW1CLFVBQVUsQ0FBQ0MsSUFBTW5CLFVBQVVvQixXQUFXRCxFQUFFRSxNQUFNLENBQUNKLEtBQUssS0FBSzs7Ozs7Ozs7Ozs7OzBCQUV2SCw4REFBQy9CLDREQUFXQTtnQkFBQzRCLFdBQVU7MEJBQ25CLDRFQUFDdEIsdUdBQWFBO29CQUFDc0IsV0FBVTs7Ozs7Ozs7Ozs7MEJBRTdCLDhEQUFDNUIsNERBQVdBO2dCQUFDNEIsV0FBVTs7a0NBQ25CLDhEQUFDckIsbUVBQVlBO3dCQUFDc0IsVUFBVWpCOzs7Ozs7a0NBQ3hCLDhEQUFDUCx1REFBS0E7d0JBQUN5QixhQUFZO3dCQUFLRixXQUFVO3dCQUFPRyxPQUFPaEI7d0JBQWlCcUIsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUU3RSw4REFBQ2xDLDJEQUFVQTtnQkFBQzBCLFdBQVU7O29CQUE2QjtvQkFDL0JYOzs7Ozs7Ozs7Ozs7O0FBSWhDO0dBcER3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9leGNoYW5nZS50c3g/ZmNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENhcmRDb250ZW50LFxyXG4gICAgQ2FyZERlc2NyaXB0aW9uLFxyXG4gICAgQ2FyZEZvb3RlcixcclxuICAgIENhcmRIZWFkZXIsXHJcbiAgICBDYXJkVGl0bGUsXHJcbiAgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxyXG5pbXBvcnQgeyBBcnJvd1BhdGhJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcclxuaW1wb3J0eyBDdXJyZW5jeWxpc3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL2N1cnJlbmN5X2xpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4Y2hhbmdlKCkge1xyXG4gICAgY29uc3QgW2Zyb21DdXJyZW5jeSwgc2V0RnJvbUN1cnJlbmN5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b0N1cnJlbmN5LCBzZXRUb0N1cnJlbmN5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjb252ZXJ0ZWRBbW91bnQsIHNldENvbnZlcnRlZEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtleGNoYW5nZVJhdGUsIHNldEV4Y2hhbmdlUmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZyb21DdXJyZW5jeSAmJiB0b0N1cnJlbmN5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZldGNoRXhjaGFuZ2VSYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5leGNoYW5nZXJhdGUtYXBpLmNvbS92NC9sYXRlc3QvJHtmcm9tQ3VycmVuY3l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnJhdGVzICYmIGRhdGEucmF0ZXNbdG9DdXJyZW5jeV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmF0ZSA9IGRhdGEucmF0ZXNbdG9DdXJyZW5jeV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4Y2hhbmdlUmF0ZShyYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udmVydGVkQW1vdW50KGFtb3VudCAqIHJhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcmVzcG9uc2UgZGF0YTonLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4Y2hhbmdlIHJhdGU6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZmV0Y2hFeGNoYW5nZVJhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZnJvbUN1cnJlbmN5LCB0b0N1cnJlbmN5LCBhbW91bnRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmRUaXRsZT5DdXJyZW5jeSBFeGNoYW5nZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbj5CZXN0IHJhdGVzPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VycmVuY3lsaXN0IG9uU2VsZWN0PXtzZXRGcm9tQ3VycmVuY3l9Lz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkZyb21cIiBjbGFzc05hbWU9XCJtbC0xXCIgdmFsdWU9e2Ftb3VudH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkgfHwgMCl9Lz5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dQYXRoSWNvbiBjbGFzc05hbWU9XCJoLTdcIi8+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPEN1cnJlbmN5bGlzdCBvblNlbGVjdD17c2V0VG9DdXJyZW5jeX0vPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiVG9cIiBjbGFzc05hbWU9XCJtbC0xXCIgdmFsdWU9e2NvbnZlcnRlZEFtb3VudH0gcmVhZE9ubHkvPlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgRXhjaGFuZ2UgUmF0ZToge2V4Y2hhbmdlUmF0ZX1cclxuICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRGb290ZXIiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiSW5wdXQiLCJBcnJvd1BhdGhJY29uIiwiQ3VycmVuY3lsaXN0IiwiRXhjaGFuZ2UiLCJmcm9tQ3VycmVuY3kiLCJzZXRGcm9tQ3VycmVuY3kiLCJ0b0N1cnJlbmN5Iiwic2V0VG9DdXJyZW5jeSIsImFtb3VudCIsInNldEFtb3VudCIsImNvbnZlcnRlZEFtb3VudCIsInNldENvbnZlcnRlZEFtb3VudCIsImV4Y2hhbmdlUmF0ZSIsInNldEV4Y2hhbmdlUmF0ZSIsImZldGNoRXhjaGFuZ2VSYXRlIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicmF0ZXMiLCJyYXRlIiwiY29uc29sZSIsImVycm9yIiwiY2xhc3NOYW1lIiwib25TZWxlY3QiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwicGFyc2VGbG9hdCIsInRhcmdldCIsInJlYWRPbmx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/exchange.tsx\n"));

/***/ })

});