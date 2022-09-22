'use strict';
exports.id = 875;
exports.ids = [875];
exports.modules = {
  /***/ 6875: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ Seo,
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
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(1853);
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_2__
      );

    // !STARTERCONF Change these default meta
    const defaultMeta = {
      title: 'GAT',
      siteName: 'GAT',
      description: 'GAT Landing',
      /** Without additional '/' on the end, e.g. https://theodorusclarence.com */ url: 'https://tsnext-tw.thcl.dev',
      type: 'website',
      robots: 'follow, index',
      /**
       * No need to be filled, will be populated with openGraph function
       * If you wish to use a normal image, just specify the path below
       */ image: 'https://tsnext-tw.thcl.dev/images/large-og.png',
    };
    function Seo(props) {
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
      const meta = {
        ...defaultMeta,
        ...props,
      };
      meta['title'] = props.templateTitle
        ? `${props.templateTitle} | ${meta.siteName}`
        : meta.title;
      // Use siteName if there is templateTitle
      // but show full title if there is none
      // !STARTERCONF Follow config for opengraph, by deploying one on https://github.com/theodorusclarence/og
      // ? Uncomment code below if you want to use default open graph
      // meta['image'] = openGraph({
      //   description: meta.description,
      //   siteName: props.templateTitle ? meta.siteName : meta.title,
      //   templateTitle: props.templateTitle,
      // });
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        next_head__WEBPACK_IMPORTED_MODULE_1___default(),
        {
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'title',
              {
                children: meta.title,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                name: 'robots',
                content: meta.robots,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                content: meta.description,
                name: 'description',
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                property: 'og:url',
                content: `${meta.url}${router.asPath}`,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'link',
              {
                rel: 'canonical',
                href: `${meta.url}${router.asPath}`,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                property: 'og:type',
                content: meta.type,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                property: 'og:site_name',
                content: meta.siteName,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                property: 'og:description',
                content: meta.description,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                property: 'og:title',
                content: meta.title,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                name: 'image',
                property: 'og:image',
                content: meta.image,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                name: 'twitter:site',
                content: '@th_clarence',
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                name: 'twitter:title',
                content: meta.title,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                name: 'twitter:description',
                content: meta.description,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                name: 'twitter:image',
                content: meta.image,
              }
            ),
            meta.date &&
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'meta',
                      {
                        property: 'article:published_time',
                        content: meta.date,
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'meta',
                      {
                        name: 'publish_date',
                        property: 'og:publish_date',
                        content: meta.date,
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'meta',
                      {
                        name: 'author',
                        property: 'article:author',
                        content: 'GAT',
                      }
                    ),
                  ],
                }
              ),
            favicons.map((linkProps) =>
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'link',
                {
                  ...linkProps,
                },
                linkProps.href
              )
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                name: 'GAT-TileColor',
                content: '#ffffff',
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                name: 'GAT-TileImage',
                content: '/images/logo.png',
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'meta',
              {
                name: 'theme-color',
                content: '#ffffff',
              }
            ),
          ],
        }
      );
    }
    // !STARTERCONF this is the default favicon, you can generate your own from https://www.favicon-generator.org/ then replace the whole /public/favicon folder
    const favicons = [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '96x96',
      //   href: '/favicon/favicon-96x96.png',
      // },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/favicon/manifest.json',
      },
    ];

    /***/
  },
};
