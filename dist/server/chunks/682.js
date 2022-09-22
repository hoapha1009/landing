'use strict';
exports.id = 682;
exports.ids = [682];
exports.modules = {
  /***/ 8881: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Q: () => /* binding */ Subtitle,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
      );

    function Subtitle({ className = '', text }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        'div',
        {
          className: `mb-8 mt-1 text-center text-gray-600 lg:mt-3 lg:text-xl lg:leading-8 ${className}`,
          children: text,
        }
      );
    }

    /***/
  },

  /***/ 5383: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ D: () => /* binding */ Title,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
      );

    function Title({ text = '', className = '' }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        'div',
        {
          className: `text-center font-saira text-[23px] font-semibold uppercase leading-8 lg:text-4xl lg:leading-10 ${className}`,
          children: text,
        }
      );
    }

    /***/
  },

  /***/ 6653: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ E: () => /* binding */ useScreen,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

    function useScreen(breakpoint) {
      function getBreakPoints() {
        const breakPoints = {};
        if (false) {
        }
        return breakPoints;
      }
      const { 0: breakPoints, 1: setBreakPoints } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        function handleResize() {
          setBreakPoints(getBreakPoints());
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      return breakpoint ? breakPoints[breakpoint] : breakPoints;
    }

    /***/
  },
};
