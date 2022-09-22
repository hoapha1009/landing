'use strict';
exports.id = 684;
exports.ids = [684];
exports.modules = {
  /***/ 387: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ l: () => /* binding */ Form,
            /* harmony export */
          });
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(997);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(4038);
          /* harmony import */ var _subtitle_subtitle__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(8881);
          /* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(5383);
          /* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(3573);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _buttons_Button__WEBPACK_IMPORTED_MODULE_2__,
            ]);
          _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];

          function Form() {
            const { 0: data, 1: setData } = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => ({
              email: '',
              phone: '',
              businessLines: '',
              yourNeeds: '',
            }));
            const handleSubmit = (e) => {
              e.preventDefault();
              console.log('data', data);
            };
            const handleChangeValue = (e) => {
              const {
                target: { name, value },
              } = e;
              let newData = {
                ...data,
              };
              newData = {
                ...data,
                [name]: value,
              };
              setData(newData);
            };
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'div',
              {
                className: 'bg-gray-50 pt-8 lg:bg-white lg:py-24 lg:px-0',
                'data-aos': 'fade-up',
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className:
                    'mx-auto rounded-xl border-gray-50 pb-12 lg:w-2/3 lg:border lg:bg-gray-50 lg:px-20 lg:shadow-md 2xl:w-7/12',
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _title_title__WEBPACK_IMPORTED_MODULE_4__ /* .Title */.D,
                      {
                        text: 'sản phẩm của ch\xfang t\xf4i đ\xe3 sẵn s\xe0ng',
                        className: 'lg:pt-12',
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _subtitle_subtitle__WEBPACK_IMPORTED_MODULE_3__ /* .Subtitle */.Q,
                      {
                        text: 'Đăng k\xfd đặt lịch để được trải nghiệm sớm nhất c\xf4ng nghệ của ch\xfang t\xf4i',
                      }
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'form',
                      {
                        className: 'main-container flex flex-col gap-4',
                        onSubmit: handleSubmit,
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className: '',
                              children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _label__WEBPACK_IMPORTED_MODULE_5__ /* .Label */._,
                                  {
                                    required: true,
                                    text: 'Email doanh nghiệp',
                                  }
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'input',
                                  {
                                    required: true,
                                    name: 'email',
                                    className: 'form-control',
                                    type: 'email',
                                    value: data.email,
                                    onChange: handleChangeValue,
                                  }
                                ),
                              ],
                            }
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className:
                                'flex flex-col gap-4 lg:flex-row lg:gap-2',
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'div',
                                  {
                                    className: 'flex-1',
                                    children: [
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        _label__WEBPACK_IMPORTED_MODULE_5__ /* .Label */._,
                                        {
                                          required: true,
                                          text: 'Số điện thoại',
                                        }
                                      ),
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        'input',
                                        {
                                          required: true,
                                          name: 'phone',
                                          className: 'form-control',
                                          type: 'tel',
                                          value: data.phone,
                                          onChange: handleChangeValue,
                                        }
                                      ),
                                    ],
                                  }
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'div',
                                  {
                                    className: 'flex-1',
                                    children: [
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        _label__WEBPACK_IMPORTED_MODULE_5__ /* .Label */._,
                                        {
                                          required: true,
                                          text: 'Ng\xe0nh nghề kinh doanh',
                                        }
                                      ),
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        'input',
                                        {
                                          required: true,
                                          name: 'businessLines',
                                          className: 'form-control',
                                          value: data.businessLines,
                                          onChange: handleChangeValue,
                                        }
                                      ),
                                    ],
                                  }
                                ),
                              ],
                            }
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className: '',
                              children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _label__WEBPACK_IMPORTED_MODULE_5__ /* .Label */._,
                                  {
                                    text: 'Nhu cầu của bạn l\xe0 g\xec?',
                                  }
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'textarea',
                                  {
                                    name: 'yourProblem',
                                    className: 'form-control py-2 outline-none',
                                    rows: 3,
                                    value: data.yourNeeds,
                                    onChange: handleChangeValue,
                                  }
                                ),
                              ],
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'div',
                            {
                              className: 'mt-1 text-center lg:text-left',
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                                  {
                                    variant: 'primary',
                                    className: 'w-52 justify-center !py-3',
                                    type: 'submit',
                                    children: 'ĐẶT LỊCH LI\xcaN HỆ',
                                  }
                                ),
                            }
                          ),
                        ],
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

  /***/ 3573: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ _: () => /* binding */ Label,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
      );
    /* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(6290);
    /* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_icons_fa__WEBPACK_IMPORTED_MODULE_1__
      );
    /* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(8098);
    /* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_icons_ri__WEBPACK_IMPORTED_MODULE_2__
      );

    function Label({ className = '', subTextClassName = '', ...props }) {
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children: [
            /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('label', {
              htmlFor: props.htmlFor,
              className: `mb-1 flex min-h-6 w-full items-center pl-0.5 font-semibold text-gray-600 ${className}`,
              children: [
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('span', {
                  className: 'text-error inline-flex items-center',
                  children: [
                    props.text,
                    props.subText &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'span',
                        {
                          className: `ml-1 text-xs font-normal italic text-gray-600 ${subTextClassName}`,
                          children: props.subText,
                        }
                      ),
                    props.required &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'sup',
                        {
                          className: 'ml-1 text-[8px] text-danger',
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaAsterisk,
                              {}
                            ),
                        }
                      ),
                    props.tooltip &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'i',
                        {
                          className: `ml-1.5 inline-block text-sm ${
                            props.error ? 'text-danger' : 'text-gray-600'
                          }`,
                          'data-tooltip': props.tooltip,
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiInformationFill,
                              {}
                            ),
                        }
                      ),
                  ],
                }),
                props.children,
              ],
            }),
            props.description &&
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'div',
                {
                  className: '-mt-0.5 mb-1 pl-0.5 text-sm text-gray-600',
                  children: props.description,
                }
              ),
          ],
        }
      );
    }

    /***/
  },

  /***/ 1589: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ b: () => /* binding */ OptionRow,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
      );

    function OptionRow({
      content,
      className = '',
      contentClassName = '',
      index,
      hasAnimation = false,
    }) {
      const delay = (index * 200).toString();
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        className: `flex gap-2 ${className}`,
        ...(hasAnimation && {
          'data-aos': 'fade-up',
          'data-aos-delay': delay,
        }),
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'img',
            {
              src: '/images/leaf.png',
              alt: 'leaf',
              className: 'mt-1 h-5 w-5',
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'div',
            {
              className: `flex-1 text-gray-600 ${contentClassName}`,
              children: content,
            }
          ),
        ],
      });
    }

    /***/
  },
};
