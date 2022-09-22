'use strict';
(() => {
  var exports = {};
  exports.id = 888;
  exports.ids = [888];
  exports.modules = {
    /***/ 7963: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => /* binding */ Footer,
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
      /* harmony import */ var _hooks_use_screen__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(6653);

      function Footer() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          'footer',
          {
            className: 'bg-primary-dark',
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'main-container',
              children: [
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className:
                    'flex flex-col pt-8 lg:pt-16 xl:flex-row xl:justify-between',
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      InformationGat,
                      {}
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'div',
                      {
                        className: 'shrink-0 grow-0',
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            MenusLink,
                            {}
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            QRcode,
                            {}
                          ),
                        ],
                      }
                    ),
                  ],
                }),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className:
                    'flex flex-col-reverse items-center border-t border-t-white py-6 text-sm font-medium text-gray-400 lg:mx-5 lg:flex-row lg:justify-between',
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'div',
                      {
                        className:
                          'text-center text-xs text-[#CCCCCC] lg:text-base',
                        children: [
                          'Copyright \xa9 2022 GreenAgri Software. All rights reserved.',
                          ' ',
                        ],
                      }
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'div',
                      {
                        className: 'mb-1 text-[#CCCCCC] lg:mb-0',
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                            {
                              href: '/',
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'a',
                                  {
                                    className: 'hover:underline',
                                    children: 'Quy định sử dụng ',
                                  }
                                ),
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'span',
                            {
                              children: '|',
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                            {
                              href: '/',
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'a',
                                  {
                                    className: 'hover:underline',
                                    children: ' Ch\xednh s\xe1ch bảo mật',
                                  }
                                ),
                            }
                          ),
                        ],
                      }
                    ),
                  ],
                }),
              ],
            }),
          }
        );
      }
      function InformationGat() {
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: 'shrink-0 grow-0 lg:w-[470px]',
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              next_link__WEBPACK_IMPORTED_MODULE_1___default(),
              {
                href: '/',
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'a',
                    {
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          'img',
                          {
                            src: '/images/logo.png',
                            alt: 'logo',
                            className: 'w-36 object-contain',
                          }
                        ),
                    }
                  ),
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'div',
              {
                className:
                  'mt-4 mb-4 text-lg font-semibold uppercase text-white',
                children: 'Cty CP C\xf4ng nghệ Green Agri',
              }
            ),
            MOCKS_DATA.map((item, index) =>
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                'div',
                {
                  className: 'mb-6',
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'div',
                      {
                        className:
                          'font-saira text-xl font-semibold text-white',
                        children: item.name,
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'div',
                      {
                        className: 'mt-2',
                        children: /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className:
                              'mt-2 text-base text-[#CCCCCC] lg:text-lg',
                            children: [
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'p',
                                {
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    'a',
                                    {
                                      className:
                                        'hover:text-white hover:underline',
                                      href: item.linkAddress,
                                      target: '_blank',
                                      rel: 'noreferrer',
                                      children: [' ', item.address],
                                    }
                                  ),
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'p',
                                {
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    'a',
                                    {
                                      className:
                                        'hover:text-white hover:underline',
                                      href: `tel: +${item.hotline}`,
                                      children: ['Phone: ', item.hotline],
                                    }
                                  ),
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'p',
                                {
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    'a',
                                    {
                                      className:
                                        'hover:text-white hover:underline',
                                      href: `mailto:${item.email}`,
                                      children: ['Email: ', item.email],
                                    }
                                  ),
                                }
                              ),
                            ],
                          }
                        ),
                      }
                    ),
                  ],
                },
                index
              )
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'div',
              {
                className: 'mb-6 flex flex-row gap-4',
                children: IMAGE_SOCIAL.map((item, index) =>
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                    {
                      href: item.href,
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          'a',
                          {
                            children:
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'img',
                                {
                                  src: `images/${item.img}`,
                                  alt: item.img,
                                  height: '100%',
                                  className: 'object-contain',
                                }
                              ),
                          }
                        ),
                    },
                    index
                  )
                ),
              }
            ),
          ],
        });
      }
      function MenusLink() {
        const isLg = (0,
        _hooks_use_screen__WEBPACK_IMPORTED_MODULE_2__ /* .useScreen */.E)(
          'lg'
        );
        const datasLink = isLg ? MOCKS_LINK_DEKTOP : MOCKS_LINK_WEBAPP;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          'div',
          {
            className: 'flex flex-col gap-4 lg:flex-row lg:gap-16',
            children: datasLink.map((item, index) =>
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                'div',
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'div',
                      {
                        className:
                          'mb-4 font-saira text-xl font-normal uppercase text-white',
                        children: item.name,
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'div',
                      {
                        className:
                          'grid grid-cols-2 gap-1 lg:grid-cols-1 lg:gap-2',
                        children: item.menus.map((menu, idx) =>
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                            {
                              href: menu.href,
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'a',
                                  {
                                    className:
                                      'block text-base text-[#CCCCCC] hover:text-white hover:underline lg:text-lg',
                                    children: menu.name,
                                  }
                                ),
                            },
                            idx
                          )
                        ),
                      }
                    ),
                  ],
                },
                index
              )
            ),
          }
        );
      }
      function QRcode() {
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: 'mt-12 mb-4 flex flex-row xl:mb-0',
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'img',
              {
                src: '/images/QR.png',
                alt: 'qrcode',
                className: 'object-contain',
              }
            ),
            /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'ml-4 flex flex-col justify-around',
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'div',
                  {
                    className: 'font-saira font-semibold text-white lg:text-lg',
                    children: 'Tải app GreenAgri',
                  }
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'div',
                  {
                    className: 'font-medium text-gray-400 hover:text-white',
                    children:
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                        {
                          href: '/',
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'a',
                              {
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    'img',
                                    {
                                      src: './images/google-play.png',
                                      alt: 'google-play',
                                      className: 'object-contain',
                                    }
                                  ),
                              }
                            ),
                        }
                      ),
                  }
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'div',
                  {
                    className: 'font-medium text-gray-400 hover:text-white',
                    children:
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                        {
                          href: '/',
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'a',
                              {
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    'img',
                                    {
                                      src: './images/app-store.png',
                                      alt: 'app-store',
                                      className: 'object-contain',
                                    }
                                  ),
                              }
                            ),
                        }
                      ),
                  }
                ),
              ],
            }),
          ],
        });
      }
      const MOCKS_DATA = [
        {
          name: 'Trung t\xe2m kinh doanh Hồ Ch\xed Minh',
          address:
            'Chung Cư Intresco An Khang, Số 30, đường 19 An Khang building, Cao ốc, khu đ\xf4 thị An Ph\xfa An Kh\xe1nh, Thủ Đức, Th\xe0nh phố Hồ Ch\xed Minh',
          hotline: '090 4451 107',
          email: 'contact@greengroups.com.vn',
          linkAddress:
            'https://www.google.com/maps/place/L%C3%B4+B+Chung+C%C6%B0+Intresco+An+Khang/@10.7971588,106.7375904,17z/data=!3m1!4b1!4m5!3m4!1s0x3175260e177ca075:0xf1962dca329764ca!8m2!3d10.7971588!4d106.7397791?hl=vi-VN',
        },
        {
          name: 'Trụ sở Vũng T\xe0u',
          address:
            'Th\xf4n S\xf4ng Xo\xe0i 1, x\xe3 L\xe1ng Lớn, huyện Ch\xe2u Đức tỉnh B\xe0 Rịa-Vũng T\xe0u',
          hotline: '090 4451 107',
          email: 'contact@greengroupsvungtau.com.vn',
          linkAddress:
            'https://www.google.com/maps/search/Th%C3%B4n+S%C3%B4ng+Xo%C3%A0i+1,+x%C3%A3+L%C3%A1ng+L%E1%BB%9Bn,+huy%E1%BB%87n+Ch%C3%A2u+%C4%90%E1%BB%A9c+t%E1%BB%89nh+B%C3%A0+R%E1%BB%8Ba-V%C5%A9ng+T%C3%A0u/@10.6565782,107.1808849,13z/data=!3m1!4b1',
        },
      ];
      const IMAGE_SOCIAL = [
        {
          img: 'facebook.png',
          href: 'http://www.facebook.com',
        },
        {
          img: 'twitter.png',
          href: 'http://www.twitter.com',
        },
        {
          img: 'youtube.png',
          href: 'http://www.youtube.com',
        },
        {
          img: 'in.png',
          href: 'instagram.com',
        },
      ];
      const MOCKS_LINK_DEKTOP = [
        {
          name: 'GAT',
          menus: [
            {
              name: 'Về GAT',
              href: '/about-us',
            },
            {
              name: 'Giải ph\xe1p',
              href: '/',
            },
            {
              name: 'T\xednh năng',
              href: '/features',
            },
            {
              name: 'Tuyển dụng',
              href: '/',
            },
            {
              name: 'Hướng dẫn',
              href: '/',
            },
            {
              name: 'Tin tức & Blog',
              href: 'news-and-blog',
            },
            {
              name: 'Tham gia cộng đồng',
              href: 'join-us',
            },
          ],
        },
        {
          name: 'Giải ph\xe1p',
          menus: [
            {
              name: 'Nhật k\xfd canh t\xe1c',
              href: '/',
            },
            {
              name: 'Truy xuất nguồn gốc',
              href: '/',
            },
            {
              name: 'Quản l\xfd k\xeanh ph\xe2n phối',
              href: '/',
            },
            {
              name: 'CRM Platform',
              href: '/',
            },
          ],
        },
        {
          name: 'Trung t\xe2m hỗ trợ',
          menus: [
            {
              name: 'Hướng dẫn sử dụng',
              href: '',
            },
            {
              name: 'T\xe0i liệu nh\xe0 ph\xe1t triển',
              href: '',
            },
            {
              name: 'Tuyển dụng',
              href: '',
            },
            {
              name: 'Ch\xednh s\xe1ch bảo mật',
              href: '',
            },
          ],
        },
      ];
      const MOCKS_LINK_WEBAPP = [
        {
          name: 'gat',
          menus: [
            {
              name: 'Về Gat',
              href: '/about-us',
            },
            {
              name: 'Hướng dẫn',
              href: '/',
            },
            {
              name: 'Giải ph\xe1p',
              href: '/',
            },
            {
              name: 'Tin tức & Blog',
              href: 'news-and-blog',
            },
            {
              name: 'T\xednh năng',
              href: '/features',
            },
            {
              name: 'Tham gia cộng đồng',
              href: 'join-us',
            },
            {
              name: 'Tuyển dụng',
              href: '/',
            },
          ],
        },
        {
          name: 'Giải ph\xe1p',
          menus: [
            {
              name: 'Nhật k\xfd canh t\xe1c',
              href: '/',
            },
            {
              name: 'Quản l\xfd k\xeanh ph\xe2n phối',
              href: '/',
            },
            {
              name: 'Truy xuất nguồn gốc',
              href: '/',
            },
            {
              name: 'CRM Platform',
              href: '/',
            },
          ],
        },
        {
          name: 'Trung t\xe2m hỗ trợ',
          menus: [
            {
              name: 'Hướng dẫn sử dụng',
              href: '',
            },
            {
              name: 'Tuyển dụng',
              href: '',
            },
            {
              name: 'T\xe0i liệu nh\xe0 ph\xe1t triển',
              href: '',
            },
            {
              name: 'Ch\xednh s\xe1ch bảo mật',
              href: '',
            },
          ],
        },
      ];

      /***/
    },

    /***/ 2936: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ ZP: () => /* binding */ Header,
              /* harmony export */
            });
            /* unused harmony exports MenuLink, MenuMobile */
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
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(1853);
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_router__WEBPACK_IMPORTED_MODULE_2__
              );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(6689);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
              /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_3__
              );
            /* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(8098);
            /* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_icons_ri__WEBPACK_IMPORTED_MODULE_4__
              );
            /* harmony import */ var _hooks_use_screen__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(6653);
            /* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(4038);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _buttons_Button__WEBPACK_IMPORTED_MODULE_6__,
              ]);
            _buttons_Button__WEBPACK_IMPORTED_MODULE_6__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            function Header() {
              const isLg = (0,
              _hooks_use_screen__WEBPACK_IMPORTED_MODULE_5__ /* .useScreen */.E)(
                'lg'
              );
              const router = (0,
              next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
              const { 0: scrollTop, 1: setScrollTop } = (0,
              react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
              const { 0: showMenuMobile, 1: setShowMenuMobile } = (0,
              react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
              const isScrolled = (0,
              react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(
                () => scrollTop > 50,
                [scrollTop]
              );
              const onScroll = (e) => {
                setScrollTop(e.target.documentElement.scrollTop);
              };
              const indexOfSelectedMenu = (0,
              react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
                var ref, ref1;
                const indexOfSolutionMenu = MENU_TAB_LIST.findIndex((menu) => {
                  return menu === null || menu === void 0
                    ? void 0
                    : menu.isSolutionPage;
                });
                const solutionMenuSubTabHrefList =
                  (ref = MENU_TAB_LIST[indexOfSolutionMenu]) === null ||
                  ref === void 0
                    ? void 0
                    : (ref1 = ref.subTabs) === null || ref1 === void 0
                    ? void 0
                    : ref1.map((subTab) => subTab.href);
                if (
                  solutionMenuSubTabHrefList === null ||
                  solutionMenuSubTabHrefList === void 0
                    ? void 0
                    : solutionMenuSubTabHrefList.includes(router.pathname)
                ) {
                  return indexOfSolutionMenu;
                }
                const indexOfMenu = MENU_TAB_LIST.findIndex((menu) =>
                  router.pathname.includes(menu.href)
                );
                return indexOfMenu;
              }, [router.pathname]);
              (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
                window.addEventListener('scroll', onScroll);
                return () => window.removeEventListener('scroll', onScroll);
              }, []);
              (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
                setShowMenuMobile(false);
              }, [router.pathname]);
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'header',
                      {
                        className: `sticky top-0 z-400  w-full bg-white ${
                          isScrolled
                            ? 'border-b border-gray-50 shadow'
                            : 'border-transparent shadow-none'
                        }`,
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className:
                                'main-container flex h-20 items-center justify-between font-medium',
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'div',
                                  {
                                    className: 'flex items-center gap-1',
                                    children: [
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                                        {
                                          href: '/',
                                          children:
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                              'a',
                                              {
                                                className: 'mr-8 block',
                                                children:
                                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                    'img',
                                                    {
                                                      src: '/images/logo.png',
                                                      alt: 'logo',
                                                      width: isLg ? 102 : 85,
                                                      height: isLg ? 36 : 30,
                                                      className:
                                                        'object-contain',
                                                    }
                                                  ),
                                              }
                                            ),
                                        }
                                      ),
                                      isLg &&
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          MenuLink,
                                          {
                                            indexOfSelectedMenu:
                                              indexOfSelectedMenu,
                                          }
                                        ),
                                    ],
                                  }
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'div',
                                  {
                                    className: !isLg
                                      ? 'flex flex-row items-center gap-x-2'
                                      : '',
                                    children: [
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        _buttons_Button__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                                        {
                                          variant: 'primary',
                                          className:
                                            'px-3 text-sm lg:px-4 lg:text-base',
                                          children: 'Đăng k\xfd tư vấn',
                                        }
                                      ),
                                      !isLg &&
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          _buttons_Button__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                                          {
                                            variant: 'outline',
                                            className: `px-2.5  ${
                                              showMenuMobile
                                                ? '!bg-primary:'
                                                : '!bg-transparent !text-primary'
                                            }`,
                                            onClick: () =>
                                              setShowMenuMobile(
                                                !showMenuMobile
                                              ),
                                            children:
                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                'i',
                                                {
                                                  className: 'text-xl',
                                                  children:
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                      react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiAlignJustify,
                                                      {}
                                                    ),
                                                }
                                              ),
                                          }
                                        ),
                                    ],
                                  }
                                ),
                              ],
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            MenuMobile,
                            {
                              isShow: showMenuMobile,
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  MenuLink,
                                  {
                                    indexOfSelectedMenu: indexOfSelectedMenu,
                                  }
                                ),
                            }
                          ),
                        ],
                      }
                    ),
                    !isLg &&
                      showMenuMobile &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'div',
                        {
                          onClick: () => setShowMenuMobile(false),
                          className: 'fixed top-0 left-0 z-200 h-full w-full',
                          style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.32)',
                          },
                        }
                      ),
                  ],
                }
              );
            }
            function MenuLink({ indexOfSelectedMenu }) {
              const router = (0,
              next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
              const { 0: show, 1: setShow } = (0,
              react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
              const isLg = (0,
              _hooks_use_screen__WEBPACK_IMPORTED_MODULE_5__ /* .useScreen */.E)(
                'lg'
              );
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: MENU_TAB_LIST.map((tab, index) => {
                    return (
                      tab === null || tab === void 0 ? void 0 : tab.subTabs
                    )
                      ? /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'group relative lg:inline-block',
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'button',
                                {
                                  className: `inline-flex w-full items-center justify-between rounded lg:w-auto lg:justify-start lg:hover:bg-gray-100 ${
                                    indexOfSelectedMenu === index &&
                                    'text-primary'
                                  }`,
                                  onClick: () => !isLg && setShow(!show),
                                  children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      'span',
                                      {
                                        className: `mr-1 py-2 lg:pl-4 `,
                                        children: tab.title,
                                      }
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      'i',
                                      {
                                        className: `pr-4 text-xl  ${
                                          show ? '-rotate-180' : ''
                                        }`,
                                        children: isLg
                                          ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                              react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiArrowDownSLine,
                                              {}
                                            )
                                          : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                              react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiArrowUpSLine,
                                              {}
                                            ),
                                      }
                                    ),
                                  ],
                                }
                              ),
                              !isLg
                                ? show &&
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    'ul',
                                    {
                                      className:
                                        'rounded bg-white transition duration-300 ease-in-out lg:absolute lg:hidden lg:shadow lg:group-hover:block',
                                      children: tab.subTabs.map(
                                        (subTab, index) =>
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            'li',
                                            {
                                              className: '',
                                              children:
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                  next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                                                  {
                                                    href: subTab.href,
                                                    onClick: () =>
                                                      setShow(false),
                                                    children:
                                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                        'a',
                                                        {
                                                          className: `block whitespace-nowrap px-6 py-2 hover:bg-gray-100 lg:px-8 lg:py-3 ${
                                                            router.pathname.includes(
                                                              subTab.href
                                                            )
                                                              ? 'text-primary'
                                                              : ''
                                                          }`,
                                                          children:
                                                            subTab.title,
                                                        }
                                                      ),
                                                  }
                                                ),
                                            },
                                            index
                                          )
                                      ),
                                    }
                                  )
                                : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                    {
                                      children:
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          'ul',
                                          {
                                            className:
                                              'absolute hidden rounded bg-white shadow group-hover:block',
                                            children: tab.subTabs.map(
                                              (subTab, index) =>
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                  'li',
                                                  {
                                                    className: '',
                                                    children:
                                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                        next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                                                        {
                                                          href: subTab.href,
                                                          children:
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                              'a',
                                                              {
                                                                className:
                                                                  'block whitespace-nowrap px-8 py-3 hover:bg-gray-100',
                                                                children:
                                                                  subTab.title,
                                                              }
                                                            ),
                                                        }
                                                      ),
                                                  },
                                                  index
                                                )
                                            ),
                                          }
                                        ),
                                    }
                                  ),
                            ],
                          },
                          index
                        )
                      : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                          {
                            href: tab.href,
                            children:
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'a',
                                {
                                  className: `block rounded py-2 hover:bg-gray-100 lg:px-4 ${
                                    router.asPath === tab.href && 'text-primary'
                                  }`,
                                  children: tab.title,
                                }
                              ),
                          },
                          index
                        );
                  }),
                }
              );
            }
            function MenuMobile({ children, isShow }) {
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children:
                    isShow &&
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'div',
                      {
                        className:
                          'absolute z-400 w-full animate-emerge-up bg-white pb-8',
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'div',
                            {
                              className: 'main-container z-300 px-1',
                              children: children,
                            }
                          ),
                      }
                    ),
                }
              );
            }
            const MENU_TAB_LIST = [
              {
                href: '/about-us',
                title: 'Về GAT',
              },
              {
                title: 'Giải ph\xe1p',
                isSolutionPage: true,
                subTabs: [
                  {
                    href: '/green-agri',
                    title: 'Green Agri',
                  },
                  {
                    href: '/green-check',
                    title: 'Green Check',
                  },
                ],
              },
              {
                href: '/features',
                title: 'T\xednh năng',
              },
              // { href: '/recruit', title: 'Tuyển dụng' },
              // { href: '/guide', title: 'Hướng dẫn' },
              {
                href: '/news-and-blog',
                title: 'Tin tức & Blog',
              },
              {
                href: '/join-us',
                title: 'Tham gia cộng đồng',
              },
            ];

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },

    /***/ 6323: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ Z: () => /* binding */ Layout,
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(2936);
            /* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(9783);
            /* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                aos__WEBPACK_IMPORTED_MODULE_2__
              );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(6689);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
              /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_3__
              );
            /* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(7963);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__,
              ]);
            _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            function Layout({ children }) {
              (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
                aos__WEBPACK_IMPORTED_MODULE_2___default().init({
                  duration: 800,
                  easing: 'ease-in-out',
                  once: true,
                });
              }, []);
              // Put Header or Footer Here
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'div',
                {
                  className: 'relative min-h-screen bg-white text-gray-700',
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                    {
                      children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.ZP,
                          {}
                        ),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          'div',
                          {
                            className: '',
                            children: children,
                          }
                        ),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          _Footer__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                          {}
                        ),
                      ],
                    }
                  ),
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

    /***/ 7242: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ U: () => /* binding */ DefaultHead,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(997);
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(968);
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_1__
        );

      // import { AnalyticConfig } from "../../dist/graphql/modules/shop/shopConfig/analytic/analyticConfig.graphql";
      function DefaultHead() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              next_head__WEBPACK_IMPORTED_MODULE_1___default(),
              {
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'script',
                    {
                      async: true,
                      src: 'https://www.googletagmanager.com/gtag/js?id=G-7G5K593S56',
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'script',
                    {
                      dangerouslySetInnerHTML: {
                        __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-7G5K593S56');
                `,
                      },
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'meta',
                    {
                      name: 'viewport',
                      content:
                        'initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0',
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'link',
                    {
                      rel: 'icon',
                      type: 'image/x-icon',
                      href: '/favicon.ico',
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'link',
                    {
                      rel: 'preconnect',
                      href: 'https://fonts.gstatic.com',
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'link',
                    {
                      rel: 'preconnect',
                      href: 'https://fonts.googleapis.com',
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'link',
                    {
                      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&family=Saira:wght@400;500;600;700;800&display=swap',
                      rel: 'stylesheet',
                    }
                  ),
                ],
              }
            ),
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

    /***/ 2957: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(6323);
            /* harmony import */ var _components_layout_default_head__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(7242);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__,
              ]);
            _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            /**
             * !STARTERCONF info
             * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
             */ function MyApp({ Component, pageProps }) {
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_layout_default_head__WEBPACK_IMPORTED_MODULE_2__ /* .DefaultHead */.U,
                      {}
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                      {
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            Component,
                            {
                              ...pageProps,
                            }
                          ),
                      }
                    ),
                  ],
                }
              );
            }
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              MyApp;

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },

    /***/ 9783: /***/ (module) => {
      module.exports = require('aos');

      /***/
    },

    /***/ 8103: /***/ (module) => {
      module.exports = require('clsx');

      /***/
    },

    /***/ 3280: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/app-router-context.js');

      /***/
    },

    /***/ 2796: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/head-manager-context.js');

      /***/
    },

    /***/ 4014: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js');

      /***/
    },

    /***/ 8524: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/is-plain-object.js');

      /***/
    },

    /***/ 8020: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/mitt.js');

      /***/
    },

    /***/ 4406: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/page-path/denormalize-page-path.js');

      /***/
    },

    /***/ 4964: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router-context.js');

      /***/
    },

    /***/ 1751: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/add-path-prefix.js');

      /***/
    },

    /***/ 6220: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/compare-states.js');

      /***/
    },

    /***/ 299: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/format-next-pathname-info.js');

      /***/
    },

    /***/ 3938: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/format-url.js');

      /***/
    },

    /***/ 9565: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-asset-path-from-route.js');

      /***/
    },

    /***/ 5789: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-next-pathname-info.js');

      /***/
    },

    /***/ 1428: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/is-dynamic.js');

      /***/
    },

    /***/ 8854: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-path.js');

      /***/
    },

    /***/ 1292: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-relative-url.js');

      /***/
    },

    /***/ 4567: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/path-has-prefix.js');

      /***/
    },

    /***/ 979: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/querystring.js');

      /***/
    },

    /***/ 3297: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/remove-trailing-slash.js');

      /***/
    },

    /***/ 6052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/resolve-rewrites.js');

      /***/
    },

    /***/ 4226: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-matcher.js');

      /***/
    },

    /***/ 5052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-regex.js');

      /***/
    },

    /***/ 9232: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/utils.js');

      /***/
    },

    /***/ 968: /***/ (module) => {
      module.exports = require('next/head');

      /***/
    },

    /***/ 1853: /***/ (module) => {
      module.exports = require('next/router');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require('react');

      /***/
    },

    /***/ 924: /***/ (module) => {
      module.exports = require('react-icons/im');

      /***/
    },

    /***/ 8098: /***/ (module) => {
      module.exports = require('react-icons/ri');

      /***/
    },

    /***/ 997: /***/ (module) => {
      module.exports = require('react/jsx-runtime');

      /***/
    },

    /***/ 8097: /***/ (module) => {
      module.exports = import('tailwind-merge');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [676, 664, 38], () =>
    __webpack_exec__(2957)
  );
  module.exports = __webpack_exports__;
})();
