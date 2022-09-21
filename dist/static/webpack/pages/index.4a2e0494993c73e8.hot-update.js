'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('pages/index', {
  /***/ './src/components/shared/option-row/option-row.tsx':
    /*!*********************************************************!*\
  !*** ./src/components/shared/option-row/option-row.tsx ***!
  \*********************************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "OptionRow": function() { return /* binding */ OptionRow; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ "./node_modules/@swc/helpers/src/_object_spread.mjs");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ "./node_modules/@swc/helpers/src/_object_spread_props.mjs");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nfunction OptionRow(param) {\n    var content = param.content, _className = param.className, className = _className === void 0 ? "" : _className, _contentClassName = param.contentClassName, contentClassName = _contentClassName === void 0 ? "" : _contentClassName, index = param.index, _hasAnimation = param.hasAnimation, hasAnimation = _hasAnimation === void 0 ? false : _hasAnimation;\n    var delay = (index * 200).toString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])({\n        className: "flex gap-2 ".concat(className)\n    }, hasAnimation && {\n        "data-aos": "fade-up",\n        "data-aos-delay": delay\n    }), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {\n                src: "/images/leaf.png",\n                alt: "leaf",\n                className: "w-5 mt-1"\n            }, void 0, false, {\n                fileName: "D:\\\\work\\\\gat-landing\\\\src\\\\components\\\\shared\\\\option-row\\\\option-row.tsx",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "flex-1 text-gray-600 ".concat(contentClassName),\n                children: content\n            }, void 0, false, {\n                fileName: "D:\\\\work\\\\gat-landing\\\\src\\\\components\\\\shared\\\\option-row\\\\option-row.tsx",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }), void 0, true, {\n        fileName: "D:\\\\work\\\\gat-landing\\\\src\\\\components\\\\shared\\\\option-row\\\\option-row.tsx",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = OptionRow;\nvar _c;\n$RefreshReg$(_c, "OptionRow");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvb3B0aW9uLXJvdy9vcHRpb24tcm93LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFRTyxTQUFTQSxTQUFTLENBQUMsS0FNVCxFQUFFO1FBTGpCQyxPQUFPLEdBRGlCLEtBTVQsQ0FMZkEsT0FBTyxlQURpQixLQU1ULENBSmZDLFNBQVMsRUFBVEEsU0FBUywyQkFBRyxFQUFFLG1DQUZVLEtBTVQsQ0FIZkMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0Isa0NBQUcsRUFBRSxzQkFDckJDLEtBQUssR0FKbUIsS0FNVCxDQUZmQSxLQUFLLGtCQUptQixLQU1ULENBRGZDLFlBQVksRUFBWkEsWUFBWSw4QkFBRyxLQUFLO0lBRXBCLElBQU1DLEtBQUssR0FBRyxDQUFDRixLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUNHLFFBQVEsRUFBRTtJQUV0QyxxQkFDRSw4REFBQ0MsS0FBRztRQUNGTixTQUFTLEVBQUUsYUFBWSxDQUFZLE9BQVZBLFNBQVMsQ0FBRTtPQUMvQkcsWUFBWSxJQUFJO1FBQUUsVUFBVSxFQUFFLFNBQVM7UUFBRSxnQkFBZ0IsRUFBRUMsS0FBSztLQUFFOzswQkFFdkUsOERBQUNHLEtBQUc7Z0JBQUNDLEdBQUcsRUFBQyxrQkFBa0I7Z0JBQUNDLEdBQUcsRUFBQyxNQUFNO2dCQUFDVCxTQUFTLEVBQUMsVUFBVTs7Ozs7b0JBQUc7MEJBQzlELDhEQUFDTSxLQUFHO2dCQUFDTixTQUFTLEVBQUUsdUJBQXNCLENBQW1CLE9BQWpCQyxnQkFBZ0IsQ0FBRTswQkFDdkRGLE9BQU87Ozs7O29CQUNKOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztBQXBCZUQsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvb3B0aW9uLXJvdy9vcHRpb24tcm93LnRzeD8wZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBPcHRpb25Sb3dQcm9wcyB7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBjb250ZW50Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGluZGV4PzogbnVtYmVyO1xyXG4gIGhhc0FuaW1hdGlvbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBPcHRpb25Sb3coe1xyXG4gIGNvbnRlbnQsXHJcbiAgY2xhc3NOYW1lID0gJycsXHJcbiAgY29udGVudENsYXNzTmFtZSA9ICcnLFxyXG4gIGluZGV4LFxyXG4gIGhhc0FuaW1hdGlvbiA9IGZhbHNlLFxyXG59OiBPcHRpb25Sb3dQcm9wcykge1xyXG4gIGNvbnN0IGRlbGF5ID0gKGluZGV4ICogMjAwKS50b1N0cmluZygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGdhcC0yICR7Y2xhc3NOYW1lfWB9XHJcbiAgICAgIHsuLi4oaGFzQW5pbWF0aW9uICYmIHsgJ2RhdGEtYW9zJzogJ2ZhZGUtdXAnLCAnZGF0YS1hb3MtZGVsYXknOiBkZWxheSB9KX1cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9Jy9pbWFnZXMvbGVhZi5wbmcnIGFsdD0nbGVhZicgY2xhc3NOYW1lPSd3LTUgbXQtMScgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LTEgdGV4dC1ncmF5LTYwMCAke2NvbnRlbnRDbGFzc05hbWV9YH0+XHJcbiAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiT3B0aW9uUm93IiwiY29udGVudCIsImNsYXNzTmFtZSIsImNvbnRlbnRDbGFzc05hbWUiLCJpbmRleCIsImhhc0FuaW1hdGlvbiIsImRlbGF5IiwidG9TdHJpbmciLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/shared/option-row/option-row.tsx\n'
        )
      );

      /***/
    },
});