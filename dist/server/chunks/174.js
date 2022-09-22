'use strict';
exports.id = 174;
exports.ids = [174];
exports.modules = {
  /***/ 1337: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ r: () => /* binding */ InfoCard,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
      );
    /* harmony import */ var _option_row_option_row__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(1589);

    function InfoCard({ item }) {
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        className:
          'relative rounded-xl border border-gray-50 bg-white px-6 pt-20 pb-8 shadow lg:pb-12',
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'div',
            {
              'data-aos': 'fade-up',
              'data-aos-delay': '100',
              className:
                'text-center font-saira text-[23px] font-semibold lg:text-2xl',
              children: item.title,
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'div',
            {
              className: 'mt-3 flex flex-col gap-4',
              children: item.options.map((option, index) =>
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  _option_row_option_row__WEBPACK_IMPORTED_MODULE_1__ /* .OptionRow */.b,
                  {
                    content: option.content,
                    hasAnimation: true,
                    contentClassName: 'lg:text-lg',
                  },
                  index
                )
              ),
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'div',
            {
              className:
                'absolute top-0 left-1/2 h-[100px] w-[100px] -translate-x-14 -translate-y-12 transform rounded-full bg-gradient-to-r from-primary to-accent p-[3px]',
              children:
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'div',
                  {
                    className:
                      'flex h-full items-center justify-center rounded-full bg-white text-white',
                    children:
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'img',
                        {
                          src: item.img,
                          alt: item.img.split('/')[2],
                          width: 60,
                          height: 60,
                        }
                      ),
                  }
                ),
            }
          ),
        ],
      });
    }

    /***/
  },

  /***/ 9392: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ J: () => /* binding */ Introduce,
            /* harmony export */
          });
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(997);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _option_row_option_row__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(1589);
          /* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(4038);
          /* harmony import */ var _hooks_use_screen__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(6653);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _buttons_Button__WEBPACK_IMPORTED_MODULE_2__,
            ]);
          _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];

          function Introduce({ img, title, options, ...props }) {
            const isLg = (0,
            _hooks_use_screen__WEBPACK_IMPORTED_MODULE_3__ /* .useScreen */.E)(
              'lg'
            );
            if (!isLg) {
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'div',
                {
                  className: 'bg-primary-light py-8',
                  'data-aos': 'fade-up',
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'main-container',
                    children: [
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'div',
                        {
                          className:
                            'text-center text-2xl font-bold leading-tight',
                          children: title,
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'img',
                        {
                          src: img.src,
                          alt: img.alt,
                          className: 'mx-auto object-contain',
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'div',
                        {
                          className: 'mt-6 flex flex-col gap-4',
                          children: options.map((option, index) =>
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _option_row_option_row__WEBPACK_IMPORTED_MODULE_1__ /* .OptionRow */.b,
                              {
                                content: option.content,
                              },
                              index
                            )
                          ),
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'div',
                        {
                          className: 'mt-8 text-center',
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                              {
                                variant: 'primary',
                                className: '!px-8 !py-3',
                                children: 'SỬ DỤNG NGAY',
                              }
                            ),
                        }
                      ),
                    ],
                  }),
                }
              );
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'div',
              {
                className: 'bg-primary-light py-24',
                'data-aos': 'fade-up',
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'main-container flex items-center gap-2',
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'div',
                      {
                        className: 'flex-1',
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'div',
                            {
                              className: 'text-5xl font-bold leading-tight',
                              children: title,
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'div',
                            {
                              className: 'mt-4 flex flex-col gap-4',
                              children: options.map((option, index) =>
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _option_row_option_row__WEBPACK_IMPORTED_MODULE_1__ /* .OptionRow */.b,
                                  {
                                    content: option.content,
                                    contentClassName: 'text-xl leading-8',
                                  },
                                  index
                                )
                              ),
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                            {
                              variant: 'primary',
                              className: 'mt-8 !px-8 !py-3',
                              children: 'SỬ DỤNG NGAY',
                            }
                          ),
                        ],
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'div',
                      {
                        className: 'ml-auto w-5/12 shrink-0 grow-0',
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'img',
                            {
                              src: img.src,
                              alt: img.alt,
                              width: '100%',
                              height: '100%',
                              className: 'object-contain',
                            }
                          ),
                      }
                    ),
                  ],
                }),
              }
            );
          }

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },
};
