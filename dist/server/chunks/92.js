'use strict';
exports.id = 92;
exports.ids = [92];
exports.modules = {
  /***/ 92: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      V: () => /* binding */ SlidePart,
    });

    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997);
    // EXTERNAL MODULE: ./node_modules/next/link.js
    var next_link = __webpack_require__(1664);
    var link_default = /*#__PURE__*/ __webpack_require__.n(next_link);
    // EXTERNAL MODULE: external "swiper/core"
    var core_ = __webpack_require__(4356);
    var core_default = /*#__PURE__*/ __webpack_require__.n(core_);
    // EXTERNAL MODULE: external "swiper/react"
    var react_ = __webpack_require__(3630);
    // EXTERNAL MODULE: ./src/hooks/use-screen.ts
    var use_screen = __webpack_require__(6653); // CONCATENATED MODULE: ./src/components/shared/logo-slider.tsx
    core_default().use([core_.Pagination, core_.Autoplay, core_.Navigation]);
    function LogoSlider() {
      const isLg = (0, use_screen /* useScreen */.E)('lg');
      return /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
        slidesPerView: 'auto',
        spaceBetween: 56,
        grabCursor: true,
        className: 'pb-16',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          bulletActiveClass: 'bg-primary',
          clickable: true,
          bulletClass:
            'inline-block w-3 h-3 bg-gray-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-primary transform translate-y-3',
        },
        children: isLg
          ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
              children: MOCK_DATA.map((item, index) =>
                /*#__PURE__*/ jsx_runtime_.jsx(
                  react_.SwiperSlide,
                  {
                    className: 'w-40',
                    children: /*#__PURE__*/ jsx_runtime_.jsx(link_default(), {
                      href: item.href,
                      children: /*#__PURE__*/ jsx_runtime_.jsx('a', {
                        children: /*#__PURE__*/ jsx_runtime_.jsx('img', {
                          src: `/images/${item.url}`,
                          alt: item.url,
                          className: 'object-contain',
                        }),
                      }),
                    }),
                  },
                  index
                )
              ),
            })
          : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
              children: MOCK_DATA_MOBILE.map((item, index) =>
                /*#__PURE__*/ jsx_runtime_.jsx(
                  react_.SwiperSlide,
                  {
                    className: 'grid grid-cols-2 gap-12',
                    children: item.list.map((logo, index) =>
                      /*#__PURE__*/ jsx_runtime_.jsx(
                        link_default(),
                        {
                          href: logo.href,
                          children: /*#__PURE__*/ jsx_runtime_.jsx('a', {
                            className: 'mx-auto block',
                            children: /*#__PURE__*/ jsx_runtime_.jsx('img', {
                              src: `/images/${logo.url}`,
                              alt: logo.url,
                              height: '100%',
                              className: 'object-contain',
                            }),
                          }),
                        },
                        index
                      )
                    ),
                  },
                  index
                )
              ),
            }),
      });
    }
    const MOCK_DATA = [
      {
        url: 'partner-1.png',
        href: '',
      },
      {
        url: 'partner-2.png',
        href: '',
      },
      {
        url: 'partner-3.png',
        href: '',
      },
      {
        url: 'partner-4.png',
        href: '',
      },
      {
        url: 'partner-5.png',
        href: '',
      },
      {
        url: 'partner-6.png',
        href: '',
      },
      {
        url: 'partner-7.png',
        href: '',
      },
    ];
    const MOCK_DATA_MOBILE = [
      {
        list: [
          {
            url: 'partner-5.png',
            href: '',
          },
          {
            url: 'partner-4.png',
            href: '',
          },
          {
            url: 'partner-10.png',
            href: '',
          },
          {
            url: 'partner-1.png',
            href: '',
          },
          {
            url: 'partner-9.png',
            href: '',
          },
          {
            url: 'partner-8.png',
            href: '',
          },
        ],
      },
      {
        list: [
          {
            url: 'partner-5.png',
            href: '',
          },
          {
            url: 'partner-4.png',
            href: '',
          },
          {
            url: 'partner-10.png',
            href: '',
          },
          {
            url: 'partner-1.png',
            href: '',
          },
          {
            url: 'partner-9.png',
            href: '',
          },
          {
            url: 'partner-8.png',
            href: '',
          },
        ],
      },
      {
        list: [
          {
            url: 'partner-5.png',
            href: '',
          },
          {
            url: 'partner-4.png',
            href: '',
          },
          {
            url: 'partner-10.png',
            href: '',
          },
          {
            url: 'partner-1.png',
            href: '',
          },
          {
            url: 'partner-9.png',
            href: '',
          },
          {
            url: 'partner-8.png',
            href: '',
          },
        ],
      },
      {
        list: [
          {
            url: 'partner-5.png',
            href: '',
          },
          {
            url: 'partner-4.png',
            href: '',
          },
          {
            url: 'partner-10.png',
            href: '',
          },
          {
            url: 'partner-1.png',
            href: '',
          },
          {
            url: 'partner-9.png',
            href: '',
          },
          {
            url: 'partner-8.png',
            href: '',
          },
        ],
      },
    ];

    // EXTERNAL MODULE: ./src/components/shared/title/title.tsx
    var title_title = __webpack_require__(5383); // CONCATENATED MODULE: ./src/components/shared/slide-part/slide-part.tsx
    function SlidePart({ title = '', className = '' }) {
      return /*#__PURE__*/ jsx_runtime_.jsx('div', {
        className: `py-8 lg:py-24 ${className}`,
        'data-aos': 'fade-up',
        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
          className: 'main-container',
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(title_title /* Title */.D, {
              text: title,
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              className:
                'mt-8 rounded-md border border-gray-200 bg-white p-12 shadow-md',
              children: /*#__PURE__*/ jsx_runtime_.jsx(LogoSlider, {}),
            }),
          ],
        }),
      });
    }

    /***/
  },
};
