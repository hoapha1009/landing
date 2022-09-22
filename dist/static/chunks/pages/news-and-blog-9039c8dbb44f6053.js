(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [69],
  {
    9874: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/news-and-blog',
        function () {
          return n(7071);
        },
      ]);
    },
    6875: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(6042),
        i = n(5893),
        s = n(9008),
        l = n.n(s),
        r = n(1163),
        o = {
          title: 'GAT',
          siteName: 'GAT',
          description: 'GAT Landing',
          url: 'https://tsnext-tw.thcl.dev',
          type: 'website',
          robots: 'follow, index',
          image: 'https://tsnext-tw.thcl.dev/images/large-og.png',
        };
      function c(e) {
        var t = (0, r.useRouter)(),
          n = (0, a.Z)({}, o, e);
        return (
          (n.title = e.templateTitle
            ? ''.concat(e.templateTitle, ' | ').concat(n.siteName)
            : n.title),
          (0, i.jsxs)(l(), {
            children: [
              (0, i.jsx)('title', { children: n.title }),
              (0, i.jsx)('meta', { name: 'robots', content: n.robots }),
              (0, i.jsx)('meta', {
                content: n.description,
                name: 'description',
              }),
              (0, i.jsx)('meta', {
                property: 'og:url',
                content: ''.concat(n.url).concat(t.asPath),
              }),
              (0, i.jsx)('link', {
                rel: 'canonical',
                href: ''.concat(n.url).concat(t.asPath),
              }),
              (0, i.jsx)('meta', { property: 'og:type', content: n.type }),
              (0, i.jsx)('meta', {
                property: 'og:site_name',
                content: n.siteName,
              }),
              (0, i.jsx)('meta', {
                property: 'og:description',
                content: n.description,
              }),
              (0, i.jsx)('meta', { property: 'og:title', content: n.title }),
              (0, i.jsx)('meta', {
                name: 'image',
                property: 'og:image',
                content: n.image,
              }),
              (0, i.jsx)('meta', {
                name: 'twitter:card',
                content: 'summary_large_image',
              }),
              (0, i.jsx)('meta', {
                name: 'twitter:site',
                content: '@th_clarence',
              }),
              (0, i.jsx)('meta', { name: 'twitter:title', content: n.title }),
              (0, i.jsx)('meta', {
                name: 'twitter:description',
                content: n.description,
              }),
              (0, i.jsx)('meta', { name: 'twitter:image', content: n.image }),
              n.date &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)('meta', {
                      property: 'article:published_time',
                      content: n.date,
                    }),
                    (0, i.jsx)('meta', {
                      name: 'publish_date',
                      property: 'og:publish_date',
                      content: n.date,
                    }),
                    (0, i.jsx)('meta', {
                      name: 'author',
                      property: 'article:author',
                      content: 'GAT',
                    }),
                  ],
                }),
              m.map(function (e) {
                return (0, i.jsx)('link', (0, a.Z)({}, e), e.href);
              }),
              (0, i.jsx)('meta', { name: 'GAT-TileColor', content: '#ffffff' }),
              (0, i.jsx)('meta', {
                name: 'GAT-TileImage',
                content: '/images/logo.png',
              }),
              (0, i.jsx)('meta', { name: 'theme-color', content: '#ffffff' }),
            ],
          })
        );
      }
      var m = [
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
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/favicon/manifest.json' },
      ];
    },
    7296: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var a = n(5893),
        i = n(1664),
        s = n.n(i),
        l = n(7294),
        r = n(8193);
      function o(e) {
        var t = e.breadcrumbs,
          n = e.className,
          i = void 0 === n ? '' : n;
        return (0, a.jsx)('div', {
          'data-aos': 'fade',
          className:
            'main-container flex flex-row items-center overflow-hidden text-sm font-semibold '.concat(
              i
            ),
          children: t.map(function (e, t) {
            return (0,
            a.jsx)(l.Fragment, { children: e.href ? (0, a.jsxs)('div', { className: 'flex shrink-0 grow-0 items-center', children: [(0, a.jsx)(s(), { href: e.href, children: (0, a.jsx)('a', { className: '', children: (0, a.jsx)('div', { className: 'whitespace-nowrap lowercase !text-primary transition-all duration-200 first-letter:uppercase hover:text-primary hover:underline', children: e.label }) }) }), (0, a.jsx)('div', { className: 'px-1.5', children: (0, a.jsx)(r.Td4, { className: 'font-semibold !text-primary' }) })] }) : (0, a.jsx)('div', { className: 'flex-1 whitespace-nowrap first-letter:uppercase', children: ((n = e.label), n ? (n.split(' ').length > 10 ? ''.concat(n.split(' ').slice(0, 10).join(' '), '...') : n) : '') }) }, t);
            var n;
          }),
        });
      }
    },
    3884: function (e, t, n) {
      'use strict';
      n.d(t, {
        l: function () {
          return p;
        },
      });
      var a = n(4924),
        i = n(6042),
        s = n(9396),
        l = n(5893),
        r = n(7294),
        o = n(3008),
        c = n(8881),
        m = n(5383),
        g = n(9534),
        d = n(9583),
        x = n(9352);
      function h(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          a = e.subTextClassName,
          i = void 0 === a ? '' : a,
          s = (0, g.Z)(e, ['className', 'subTextClassName']);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)('label', {
              htmlFor: s.htmlFor,
              className:
                'mb-1 flex min-h-6 w-full items-center pl-0.5 font-semibold text-gray-600 '.concat(
                  n
                ),
              children: [
                (0, l.jsxs)('span', {
                  className: 'text-error inline-flex items-center',
                  children: [
                    s.text,
                    s.subText &&
                      (0, l.jsx)('span', {
                        className:
                          'ml-1 text-xs font-normal italic text-gray-600 '.concat(
                            i
                          ),
                        children: s.subText,
                      }),
                    s.required &&
                      (0, l.jsx)('sup', {
                        className: 'ml-1 text-[8px] text-danger',
                        children: (0, l.jsx)(d.pKb, {}),
                      }),
                    s.tooltip &&
                      (0, l.jsx)('i', {
                        className: 'ml-1.5 inline-block text-sm '.concat(
                          s.error ? 'text-danger' : 'text-gray-600'
                        ),
                        'data-tooltip': s.tooltip,
                        children: (0, l.jsx)(x.CA9, {}),
                      }),
                  ],
                }),
                s.children,
              ],
            }),
            s.description &&
              (0, l.jsx)('div', {
                className: '-mt-0.5 mb-1 pl-0.5 text-sm text-gray-600',
                children: s.description,
              }),
          ],
        });
      }
      function p() {
        var e = (0, r.useState)(function () {
            return { email: '', phone: '', businessLines: '', yourNeeds: '' };
          }),
          t = e[0],
          n = e[1],
          g = function (e) {
            var l = e.target,
              r = l.name,
              o = l.value,
              c = (0, i.Z)({}, t);
            (c = (0, s.Z)((0, i.Z)({}, t), (0, a.Z)({}, r, o))), n(c);
          };
        return (0, l.jsx)('div', {
          className: 'bg-gray-50 pt-8 lg:bg-white lg:py-24 lg:px-0',
          'data-aos': 'fade-up',
          children: (0, l.jsxs)('div', {
            className:
              'mx-auto rounded-xl border-gray-50 pb-12 lg:w-2/3 lg:border lg:bg-gray-50 lg:px-20 lg:shadow-md 2xl:w-7/12',
            children: [
              (0, l.jsx)(m.D, {
                text: 's\u1ea3n ph\u1ea9m c\u1ee7a ch\xfang t\xf4i \u0111\xe3 s\u1eb5n s\xe0ng',
                className: 'lg:pt-12',
              }),
              (0, l.jsx)(c.Q, {
                text: '\u0110\u0103ng k\xfd \u0111\u1eb7t l\u1ecbch \u0111\u1ec3 \u0111\u01b0\u1ee3c tr\u1ea3i nghi\u1ec7m s\u1edbm nh\u1ea5t c\xf4ng ngh\u1ec7 c\u1ee7a ch\xfang t\xf4i',
              }),
              (0, l.jsxs)('form', {
                className: 'main-container flex flex-col gap-4',
                onSubmit: function (e) {
                  e.preventDefault(), console.log('data', t);
                },
                children: [
                  (0, l.jsxs)('div', {
                    className: '',
                    children: [
                      (0, l.jsx)(h, {
                        required: !0,
                        text: 'Email doanh nghi\u1ec7p',
                      }),
                      (0, l.jsx)('input', {
                        required: !0,
                        name: 'email',
                        className: 'form-control',
                        type: 'email',
                        value: t.email,
                        onChange: g,
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'flex flex-col gap-4 lg:flex-row lg:gap-2',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'flex-1',
                        children: [
                          (0, l.jsx)(h, {
                            required: !0,
                            text: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                          }),
                          (0, l.jsx)('input', {
                            required: !0,
                            name: 'phone',
                            className: 'form-control',
                            type: 'tel',
                            value: t.phone,
                            onChange: g,
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'flex-1',
                        children: [
                          (0, l.jsx)(h, {
                            required: !0,
                            text: 'Ng\xe0nh ngh\u1ec1 kinh doanh',
                          }),
                          (0, l.jsx)('input', {
                            required: !0,
                            name: 'businessLines',
                            className: 'form-control',
                            value: t.businessLines,
                            onChange: g,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: '',
                    children: [
                      (0, l.jsx)(h, {
                        text: 'Nhu c\u1ea7u c\u1ee7a b\u1ea1n l\xe0 g\xec?',
                      }),
                      (0, l.jsx)('textarea', {
                        name: 'yourProblem',
                        className: 'form-control py-2 outline-none',
                        rows: 3,
                        value: t.yourNeeds,
                        onChange: g,
                      }),
                    ],
                  }),
                  (0, l.jsx)('div', {
                    className: 'mt-1 text-center lg:text-left',
                    children: (0, l.jsx)(o.Z, {
                      variant: 'primary',
                      className: 'w-52 justify-center !py-3',
                      type: 'submit',
                      children: '\u0110\u1eb6T L\u1ecaCH LI\xcaN H\u1ec6',
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    1589: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return l;
        },
      });
      var a = n(6042),
        i = n(9396),
        s = n(5893);
      function l(e) {
        var t = e.content,
          n = e.className,
          l = void 0 === n ? '' : n,
          r = e.contentClassName,
          o = void 0 === r ? '' : r,
          c = e.index,
          m = e.hasAnimation,
          g = void 0 !== m && m,
          d = (200 * c).toString();
        return (0, s.jsxs)(
          'div',
          (0, i.Z)(
            (0, a.Z)(
              { className: 'flex gap-2 '.concat(l) },
              g && { 'data-aos': 'fade-up', 'data-aos-delay': d }
            ),
            {
              children: [
                (0, s.jsx)('img', {
                  src: '/images/leaf.png',
                  alt: 'leaf',
                  className: 'mt-1 h-5 w-5',
                }),
                (0, s.jsx)('div', {
                  className: 'flex-1 text-gray-600 '.concat(o),
                  children: t,
                }),
              ],
            }
          )
        );
      }
    },
    8881: function (e, t, n) {
      'use strict';
      n.d(t, {
        Q: function () {
          return i;
        },
      });
      var a = n(5893);
      function i(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          i = e.text;
        return (0, a.jsx)('div', {
          className:
            'mb-8 mt-1 text-center text-gray-600 lg:mt-3 lg:text-xl lg:leading-8 '.concat(
              n
            ),
          children: i,
        });
      }
    },
    5383: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return i;
        },
      });
      var a = n(5893);
      function i(e) {
        var t = e.text,
          n = void 0 === t ? '' : t,
          i = e.className,
          s = void 0 === i ? '' : i;
        return (0, a.jsx)('div', {
          className:
            'text-center font-saira text-[23px] font-semibold uppercase leading-8 lg:text-4xl lg:leading-10 '.concat(
              s
            ),
          children: n,
        });
      }
    },
    7071: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var a = n(5893),
        i = n(6653),
        s = n(7296),
        l = n(3884),
        r = n(3008),
        o = n(1589),
        c = n(5383);
      function m() {
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          className: 'bg-gray-50 py-8 lg:py-24',
          children: [
            (0, a.jsx)(c.D, {
              text: 'Know more about our platform',
              className: '',
            }),
            (0, a.jsx)('div', {
              className:
                'main-container mx-auto mt-6 grid auto-rows-fr gap-4 lg:mt-10 lg:w-4/5 lg:grid-cols-3 lg:gap-8 lg:px-0 xl:w-3/4 2xl:w-2/3',
              children: d.map(function (e, t) {
                return (0, a.jsx)(g, { index: t, item: e }, t);
              }),
            }),
          ],
        });
      }
      function g(e) {
        var t = e.item,
          n = (200 * e.index).toString();
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          'data-aos-delay': n,
          className:
            'rounded border border-gray-200 bg-white p-6 shadow-md lg:p-7',
          children: [
            (0, a.jsx)('div', {
              className: 'mx-auto w-7/12',
              children: (0, a.jsx)('img', {
                src: t.img.url,
                alt: t.img.alt,
                width: '100%',
                height: '100%',
              }),
            }),
            (0, a.jsx)('div', {
              className:
                'mt-8 text-center font-saira text-[23px] font-semibold leading-8',
              children: t.title,
            }),
            (0, a.jsx)('div', {
              className: 'mt-5 mb-8 flex flex-col gap-4',
              children: t.options.map(function (e, t) {
                return (0,
                a.jsx)(o.b, { content: e.content, contentClassName: 'lg:text-lg' }, t);
              }),
            }),
            (0, a.jsx)('div', {
              className: 'mb-4 flex justify-center lg:mb-0',
              children: (0, a.jsx)(r.Z, {
                variant: 'primary',
                className: '!px-7',
                children: 'LEARN MORE',
              }),
            }),
          ],
        });
      }
      var d = [
          {
            img: {
              url: '/images/logo-green-agri.png',
              alt: 'logo-green-agri-image',
            },
            title: 'Applications for digitization',
            options: [
              {
                content:
                  'N\u1eafm d\u1eef li\u1ec7u th\u1ecb tr\u01b0\u1eddng, kh\xe1ch h\xe0ng. H\u1ea1n ch\u1ebf r\u1ee7i ro, ch\u1ee7 \u0111\u1ed9ng s\u1ea3n xu\u1ea5t h\xe0ng h\xf3a',
              },
              {
                content:
                  'Khai th\xe1c ch\u01b0\u01a1ng tr\xecnh khuy\u1ebfn m\xe3i/h\u1eadu m\xe3i hi\u1ec7u qu\u1ea3',
              },
              {
                content:
                  'T\u0103ng doanh thu hi\u1ec7u qu\u1ea3 qua k\xeanh ph\xe2n ph\u1ed1i online c\u0169ng nh\u01b0 \u0111\u1ed9i ng\u0169',
              },
            ],
          },
          {
            img: {
              url: '/images/logo-green-farm.png',
              alt: 'logo-green-farm.png',
            },
            title: 'Applications for digitization',
            options: [
              {
                content:
                  'N\u1eafm d\u1eef li\u1ec7u th\u1ecb tr\u01b0\u1eddng, kh\xe1ch h\xe0ng. H\u1ea1n ch\u1ebf r\u1ee7i ro, ch\u1ee7 \u0111\u1ed9ng s\u1ea3n xu\u1ea5t h\xe0ng h\xf3a',
              },
              {
                content:
                  'Khai th\xe1c ch\u01b0\u01a1ng tr\xecnh khuy\u1ebfn m\xe3i/h\u1eadu m\xe3i hi\u1ec7u qu\u1ea3',
              },
              {
                content:
                  'T\u0103ng doanh thu hi\u1ec7u qu\u1ea3 qua k\xeanh ph\xe2n ph\u1ed1i online c\u0169ng nh\u01b0 \u0111\u1ed9i ng\u0169',
              },
            ],
          },
          {
            img: {
              url: '/images/logo-green-retail.png',
              alt: 'logo-green-retail.png',
            },
            title: 'Applications for digitization',
            options: [
              {
                content:
                  'N\u1eafm d\u1eef li\u1ec7u th\u1ecb tr\u01b0\u1eddng, kh\xe1ch h\xe0ng. H\u1ea1n ch\u1ebf r\u1ee7i ro, ch\u1ee7 \u0111\u1ed9ng s\u1ea3n xu\u1ea5t h\xe0ng h\xf3a',
              },
              {
                content:
                  'Khai th\xe1c ch\u01b0\u01a1ng tr\xecnh khuy\u1ebfn m\xe3i/h\u1eadu m\xe3i hi\u1ec7u qu\u1ea3',
              },
              {
                content:
                  'T\u0103ng doanh thu hi\u1ec7u qu\u1ea3 qua k\xeanh ph\xe2n ph\u1ed1i online c\u0169ng nh\u01b0 \u0111\u1ed9i ng\u0169',
              },
            ],
          },
        ],
        x = n(7294);
      function h(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          i = e.text,
          s = void 0 === i ? '' : i;
        return (0, a.jsx)('div', {
          className:
            'rounded bg-[#E7F7F0] px-4 py-1 text-xs text-primary shadow-sm lg:text-base '.concat(
              n
            ),
          children: s,
        });
      }
      var p = n(8881);
      function u() {
        var e = (0, x.useState)('caseStudy'),
          t = e[0],
          n = e[1];
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          className: 'main-container py-8 lg:py-24',
          children: [
            (0, a.jsx)('div', {
              className:
                'mx-auto mb-4 w-2/3 text-center text-[23px] font-bold leading-8 lg:mb-8 lg:w-full lg:text-5xl',
              children: 'Welcome to Cropin\u2019s Resource Section',
            }),
            (0, a.jsx)(p.Q, {
              className:
                'mx-auto !mb-4 !text-left lg:w-5/6 lg:!text-center lg:leading-8',
              text: 'We, at Cropin, are on our way to building the world\u2019s first ag-tech resource library based on our experiences, the projects implemented, problems solved, and trillions of farm pixel-level datasets we have collected over a decade from 52 countries.',
            }),
            (0, a.jsx)(p.Q, {
              text: 'You will find case studies, whitepapers, use cases, and reports covering the entire agri-value chain housed here.',
              className: '!mt-0 !text-left lg:!text-center',
            }),
            (0, a.jsx)(f, {
              selectedTab: t,
              onSelect: function (e) {
                return n(e);
              },
            }),
            (0, a.jsx)(v, { selectedTab: t }),
          ],
        });
      }
      function f(e) {
        var t = e.selectedTab,
          n = e.onSelect,
          s = (0, i.E)('lg');
        return (0, a.jsx)('div', {
          'data-aos': 'fade-up',
          className:
            'no-scrollbar mx-auto mt-8 mb-6 flex flex-nowrap items-center gap-3 overflow-x-scroll whitespace-nowrap rounded-md border border-gray-200 p-2 shadow-md lg:mb-12 lg:w-2/3 lg:gap-2 lg:whitespace-normal xl:w-1/2',
          children: b.map(function (e, i) {
            return (0, a.jsx)(
              'div',
              {
                id: e.value,
                className:
                  'flex-1 cursor-pointer whitespace-nowrap rounded-md px-4 py-3 text-center '.concat(
                    t === e.value
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-200'
                  ),
                onClick: function () {
                  if ((null === n || void 0 === n || n(e.value), !s)) {
                    var t = document.getElementById(e.value);
                    null === t ||
                      void 0 === t ||
                      t.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center',
                      });
                  }
                },
                children: e.label,
              },
              i
            );
          }),
        });
      }
      function v(e) {
        e.selectedTab;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)('div', {
              className:
                'flex flex-col justify-between gap-8 lg:mt-12 lg:flex-row lg:gap-5',
              children: [
                (0, a.jsxs)('div', {
                  'data-aos': 'fade-right',
                  className: 'group flex-1 cursor-pointer',
                  children: [
                    (0, a.jsx)('img', {
                      src: j[0].img.url,
                      alt: j[0].img.alt,
                      className: 'rounded group-hover:brightness-75',
                      width: '100%',
                      height: '100%',
                    }),
                    (0, a.jsxs)('div', {
                      className: 'my-3 flex items-center gap-2',
                      children: [
                        (0, a.jsx)(h, { text: 'Th\xf4ng tin m\xf9a v\u1ee5' }),
                        (0, a.jsx)('div', {
                          className: 'text-xs lg:text-base',
                          children: '08/03/2022',
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      className:
                        'font-saira text-[23px] font-semibold leading-8 group-hover:text-primary',
                      children: j[0].title,
                    }),
                  ],
                }),
                (0, a.jsx)('div', {
                  'data-aos': 'fade-left',
                  className: 'flex flex-1 flex-col gap-3',
                  children: j.slice(1).map(function (e, t) {
                    return (0,
                    a.jsxs)('div', { className: 'group flex cursor-pointer gap-3', children: [(0, a.jsx)('div', { className: 'w-1/3 shrink-0 grow-0', children: (0, a.jsx)('img', { src: e.img.url, alt: e.img.alt, width: '100%', height: '100%', className: 'rounded group-hover:brightness-75' }) }), (0, a.jsxs)('div', { className: 'flex flex-1 flex-col md:gap-2 xl:gap-6', children: [(0, a.jsxs)('div', { className: 'flex items-center gap-2', children: [(0, a.jsx)(h, { text: 'Th\xf4ng tin m\xf9a v\u1ee5' }), (0, a.jsx)('div', { className: 'text-xs lg:text-base', children: '08/03/2022' })] }), (0, a.jsx)('div', { className: 'text-ellipsis-2 font-saira font-medium group-hover:text-primary lg:text-[23px] lg:font-semibold lg:leading-8', children: e.title })] })] }, t);
                  }),
                }),
              ],
            }),
            (0, a.jsx)('div', {
              className: 'mt-4 flex justify-center lg:mt-8',
              children: (0, a.jsx)(r.Z, {
                variant: 'primary',
                children: 'XEM T\u1ea4T C\u1ea2 TIN T\u1ee8C',
              }),
            }),
          ],
        });
      }
      var j = [
          {
            img: { url: '/images/news-blogs-1.png', alt: 'news-blogs-1-image' },
            title:
              'Uncovering the grain of truth: Remote sensing to drive pest control in rice farming',
          },
          {
            img: { url: '/images/news-blogs-2.png', alt: 'news-blogs-2-image' },
            title: 'Post-harvesting losses - how to minimize using technology',
          },
          {
            img: { url: '/images/news-blogs-3.png', alt: 'news-blogs-3-image' },
            title:
              'Seed production challenges & solutions - how technology helps',
          },
          {
            img: { url: '/images/news-blogs-4.png', alt: 'news-blogs-4-image' },
            title: 'Faster seed certification - how technology helps',
          },
          {
            img: { url: '/images/news-blogs-5.png', alt: 'news-blogs-5-image' },
            title:
              'Enforcing package of practices in farming - how farm digitization helps',
          },
        ],
        b = [
          { value: 'caseStudy', label: 'Case Study' },
          { value: 'blogs', label: 'Blogs' },
          { value: 'whitePaper', label: 'White Paper' },
          { value: 'thoughtLeadership', label: 'Thought Leadership' },
          { value: 'webinar', label: 'Webinar' },
        ];
      function N() {
        var e = (0, i.E)('lg');
        return (0, a.jsxs)('div', {
          className: '',
          children: [
            !e &&
              (0, a.jsx)(s.b, {
                breadcrumbs: [
                  { label: 'Trang ch\u1ee7', href: '/' },
                  { label: 'Tin t\u1ee9c & Blog' },
                ],
                className: '',
              }),
            (0, a.jsx)(u, {}),
            (0, a.jsx)(m, {}),
            (0, a.jsx)(l.l, {}),
          ],
        });
      }
      var w = n(6875);
      function y() {
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(w.Z, {}), (0, a.jsx)(N, {})],
        });
      }
    },
  },
  function (e) {
    e.O(0, [617, 445, 774, 888, 179], function () {
      return (t = 9874), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
