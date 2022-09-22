'use strict';
exports.id = 296;
exports.ids = [296];
exports.modules = {
  /***/ 7296: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ b: () => /* binding */ BreadCrumbs,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
      );
    /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(1664);
    /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        next_link__WEBPACK_IMPORTED_MODULE_1__
      );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(9847);
    /* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_icons_ai__WEBPACK_IMPORTED_MODULE_3__
      );

    function BreadCrumbs({ breadcrumbs, className = '' }) {
      const truncateLabel = (label) => {
        if (!label) return '';
        if (label.split(' ').length > 10) {
          return `${label.split(' ').slice(0, 10).join(' ')}...`;
        }
        return label;
      };
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        'div',
        {
          'data-aos': 'fade',
          className: `main-container flex flex-row items-center overflow-hidden text-sm font-semibold ${className}`,
          children: breadcrumbs.map((breadcrumb, index) =>
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
              {
                children: breadcrumb.href
                  ? /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'div',
                      {
                        className: 'flex shrink-0 grow-0 items-center',
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                            {
                              href: breadcrumb.href,
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'a',
                                  {
                                    className: '',
                                    children:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        'div',
                                        {
                                          className:
                                            'whitespace-nowrap lowercase !text-primary transition-all duration-200 first-letter:uppercase hover:text-primary hover:underline',
                                          children: breadcrumb.label,
                                        }
                                      ),
                                  }
                                ),
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'div',
                            {
                              className: 'px-1.5',
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineRight,
                                  {
                                    className: 'font-semibold !text-primary',
                                  }
                                ),
                            }
                          ),
                        ],
                      }
                    )
                  : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'div',
                      {
                        className:
                          'flex-1 whitespace-nowrap first-letter:uppercase',
                        children: truncateLabel(breadcrumb.label),
                      }
                    ),
              },
              index
            )
          ),
        }
      );
    }

    /***/
  },
};
