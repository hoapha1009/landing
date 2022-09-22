'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [270],
  {
    6875: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(6042),
        r = n(5893),
        s = n(9008),
        i = n.n(s),
        l = n(1163),
        c = {
          title: 'GAT',
          siteName: 'GAT',
          description: 'GAT Landing',
          url: 'https://tsnext-tw.thcl.dev',
          type: 'website',
          robots: 'follow, index',
          image: 'https://tsnext-tw.thcl.dev/images/large-og.png',
        };
      function o(e) {
        var t = (0, l.useRouter)(),
          n = (0, a.Z)({}, c, e);
        return (
          (n.title = e.templateTitle
            ? ''.concat(e.templateTitle, ' | ').concat(n.siteName)
            : n.title),
          (0, r.jsxs)(i(), {
            children: [
              (0, r.jsx)('title', { children: n.title }),
              (0, r.jsx)('meta', { name: 'robots', content: n.robots }),
              (0, r.jsx)('meta', {
                content: n.description,
                name: 'description',
              }),
              (0, r.jsx)('meta', {
                property: 'og:url',
                content: ''.concat(n.url).concat(t.asPath),
              }),
              (0, r.jsx)('link', {
                rel: 'canonical',
                href: ''.concat(n.url).concat(t.asPath),
              }),
              (0, r.jsx)('meta', { property: 'og:type', content: n.type }),
              (0, r.jsx)('meta', {
                property: 'og:site_name',
                content: n.siteName,
              }),
              (0, r.jsx)('meta', {
                property: 'og:description',
                content: n.description,
              }),
              (0, r.jsx)('meta', { property: 'og:title', content: n.title }),
              (0, r.jsx)('meta', {
                name: 'image',
                property: 'og:image',
                content: n.image,
              }),
              (0, r.jsx)('meta', {
                name: 'twitter:card',
                content: 'summary_large_image',
              }),
              (0, r.jsx)('meta', {
                name: 'twitter:site',
                content: '@th_clarence',
              }),
              (0, r.jsx)('meta', { name: 'twitter:title', content: n.title }),
              (0, r.jsx)('meta', {
                name: 'twitter:description',
                content: n.description,
              }),
              (0, r.jsx)('meta', { name: 'twitter:image', content: n.image }),
              n.date &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)('meta', {
                      property: 'article:published_time',
                      content: n.date,
                    }),
                    (0, r.jsx)('meta', {
                      name: 'publish_date',
                      property: 'og:publish_date',
                      content: n.date,
                    }),
                    (0, r.jsx)('meta', {
                      name: 'author',
                      property: 'article:author',
                      content: 'GAT',
                    }),
                  ],
                }),
              p.map(function (e) {
                return (0, r.jsx)('link', (0, a.Z)({}, e), e.href);
              }),
              (0, r.jsx)('meta', { name: 'GAT-TileColor', content: '#ffffff' }),
              (0, r.jsx)('meta', {
                name: 'GAT-TileImage',
                content: '/images/logo.png',
              }),
              (0, r.jsx)('meta', { name: 'theme-color', content: '#ffffff' }),
            ],
          })
        );
      }
      var p = [
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
      n.d(t, {
        b: function () {
          return c;
        },
      });
      var a = n(5893),
        r = n(1664),
        s = n.n(r),
        i = n(7294),
        l = n(8193);
      function c(e) {
        var t = e.breadcrumbs,
          n = e.className,
          r = void 0 === n ? '' : n;
        return (0, a.jsx)('div', {
          'data-aos': 'fade',
          className:
            'main-container flex flex-row items-center overflow-hidden text-sm font-semibold '.concat(
              r
            ),
          children: t.map(function (e, t) {
            return (0,
            a.jsx)(i.Fragment, { children: e.href ? (0, a.jsxs)('div', { className: 'flex shrink-0 grow-0 items-center', children: [(0, a.jsx)(s(), { href: e.href, children: (0, a.jsx)('a', { className: '', children: (0, a.jsx)('div', { className: 'whitespace-nowrap lowercase !text-primary transition-all duration-200 first-letter:uppercase hover:text-primary hover:underline', children: e.label }) }) }), (0, a.jsx)('div', { className: 'px-1.5', children: (0, a.jsx)(l.Td4, { className: 'font-semibold !text-primary' }) })] }) : (0, a.jsx)('div', { className: 'flex-1 whitespace-nowrap first-letter:uppercase', children: ((n = e.label), n ? (n.split(' ').length > 10 ? ''.concat(n.split(' ').slice(0, 10).join(' '), '...') : n) : '') }) }, t);
            var n;
          }),
        });
      }
    },
    3884: function (e, t, n) {
      n.d(t, {
        l: function () {
          return u;
        },
      });
      var a = n(4924),
        r = n(6042),
        s = n(9396),
        i = n(5893),
        l = n(7294),
        c = n(3008),
        o = n(8881),
        p = n(5383),
        m = n(9534),
        x = n(9583),
        d = n(9352);
      function h(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          a = e.subTextClassName,
          r = void 0 === a ? '' : a,
          s = (0, m.Z)(e, ['className', 'subTextClassName']);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)('label', {
              htmlFor: s.htmlFor,
              className:
                'mb-1 flex min-h-6 w-full items-center pl-0.5 font-semibold text-gray-600 '.concat(
                  n
                ),
              children: [
                (0, i.jsxs)('span', {
                  className: 'text-error inline-flex items-center',
                  children: [
                    s.text,
                    s.subText &&
                      (0, i.jsx)('span', {
                        className:
                          'ml-1 text-xs font-normal italic text-gray-600 '.concat(
                            r
                          ),
                        children: s.subText,
                      }),
                    s.required &&
                      (0, i.jsx)('sup', {
                        className: 'ml-1 text-[8px] text-danger',
                        children: (0, i.jsx)(x.pKb, {}),
                      }),
                    s.tooltip &&
                      (0, i.jsx)('i', {
                        className: 'ml-1.5 inline-block text-sm '.concat(
                          s.error ? 'text-danger' : 'text-gray-600'
                        ),
                        'data-tooltip': s.tooltip,
                        children: (0, i.jsx)(d.CA9, {}),
                      }),
                  ],
                }),
                s.children,
              ],
            }),
            s.description &&
              (0, i.jsx)('div', {
                className: '-mt-0.5 mb-1 pl-0.5 text-sm text-gray-600',
                children: s.description,
              }),
          ],
        });
      }
      function u() {
        var e = (0, l.useState)(function () {
            return { email: '', phone: '', businessLines: '', yourNeeds: '' };
          }),
          t = e[0],
          n = e[1],
          m = function (e) {
            var i = e.target,
              l = i.name,
              c = i.value,
              o = (0, r.Z)({}, t);
            (o = (0, s.Z)((0, r.Z)({}, t), (0, a.Z)({}, l, c))), n(o);
          };
        return (0, i.jsx)('div', {
          className: 'bg-gray-50 pt-8 lg:bg-white lg:py-24 lg:px-0',
          'data-aos': 'fade-up',
          children: (0, i.jsxs)('div', {
            className:
              'mx-auto rounded-xl border-gray-50 pb-12 lg:w-2/3 lg:border lg:bg-gray-50 lg:px-20 lg:shadow-md 2xl:w-7/12',
            children: [
              (0, i.jsx)(p.D, {
                text: 's\u1ea3n ph\u1ea9m c\u1ee7a ch\xfang t\xf4i \u0111\xe3 s\u1eb5n s\xe0ng',
                className: 'lg:pt-12',
              }),
              (0, i.jsx)(o.Q, {
                text: '\u0110\u0103ng k\xfd \u0111\u1eb7t l\u1ecbch \u0111\u1ec3 \u0111\u01b0\u1ee3c tr\u1ea3i nghi\u1ec7m s\u1edbm nh\u1ea5t c\xf4ng ngh\u1ec7 c\u1ee7a ch\xfang t\xf4i',
              }),
              (0, i.jsxs)('form', {
                className: 'main-container flex flex-col gap-4',
                onSubmit: function (e) {
                  e.preventDefault(), console.log('data', t);
                },
                children: [
                  (0, i.jsxs)('div', {
                    className: '',
                    children: [
                      (0, i.jsx)(h, {
                        required: !0,
                        text: 'Email doanh nghi\u1ec7p',
                      }),
                      (0, i.jsx)('input', {
                        required: !0,
                        name: 'email',
                        className: 'form-control',
                        type: 'email',
                        value: t.email,
                        onChange: m,
                      }),
                    ],
                  }),
                  (0, i.jsxs)('div', {
                    className: 'flex flex-col gap-4 lg:flex-row lg:gap-2',
                    children: [
                      (0, i.jsxs)('div', {
                        className: 'flex-1',
                        children: [
                          (0, i.jsx)(h, {
                            required: !0,
                            text: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                          }),
                          (0, i.jsx)('input', {
                            required: !0,
                            name: 'phone',
                            className: 'form-control',
                            type: 'tel',
                            value: t.phone,
                            onChange: m,
                          }),
                        ],
                      }),
                      (0, i.jsxs)('div', {
                        className: 'flex-1',
                        children: [
                          (0, i.jsx)(h, {
                            required: !0,
                            text: 'Ng\xe0nh ngh\u1ec1 kinh doanh',
                          }),
                          (0, i.jsx)('input', {
                            required: !0,
                            name: 'businessLines',
                            className: 'form-control',
                            value: t.businessLines,
                            onChange: m,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)('div', {
                    className: '',
                    children: [
                      (0, i.jsx)(h, {
                        text: 'Nhu c\u1ea7u c\u1ee7a b\u1ea1n l\xe0 g\xec?',
                      }),
                      (0, i.jsx)('textarea', {
                        name: 'yourProblem',
                        className: 'form-control py-2 outline-none',
                        rows: 3,
                        value: t.yourNeeds,
                        onChange: m,
                      }),
                    ],
                  }),
                  (0, i.jsx)('div', {
                    className: 'mt-1 text-center lg:text-left',
                    children: (0, i.jsx)(c.Z, {
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
    1337: function (e, t, n) {
      n.d(t, {
        r: function () {
          return s;
        },
      });
      var a = n(5893),
        r = n(1589);
      function s(e) {
        var t = e.item;
        return (0, a.jsxs)('div', {
          className:
            'relative rounded-xl border border-gray-50 bg-white px-6 pt-20 pb-8 shadow lg:pb-12',
          children: [
            (0, a.jsx)('div', {
              'data-aos': 'fade-up',
              'data-aos-delay': '100',
              className:
                'text-center font-saira text-[23px] font-semibold lg:text-2xl',
              children: t.title,
            }),
            (0, a.jsx)('div', {
              className: 'mt-3 flex flex-col gap-4',
              children: t.options.map(function (e, t) {
                return (0,
                a.jsx)(r.b, { content: e.content, hasAnimation: !0, contentClassName: 'lg:text-lg' }, t);
              }),
            }),
            (0, a.jsx)('div', {
              className:
                'absolute top-0 left-1/2 h-[100px] w-[100px] -translate-x-14 -translate-y-12 transform rounded-full bg-gradient-to-r from-primary to-accent p-[3px]',
              children: (0, a.jsx)('div', {
                className:
                  'flex h-full items-center justify-center rounded-full bg-white text-white',
                children: (0, a.jsx)('img', {
                  src: t.img,
                  alt: t.img.split('/')[2],
                  width: 60,
                  height: 60,
                }),
              }),
            }),
          ],
        });
      }
    },
    1589: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var a = n(6042),
        r = n(9396),
        s = n(5893);
      function i(e) {
        var t = e.content,
          n = e.className,
          i = void 0 === n ? '' : n,
          l = e.contentClassName,
          c = void 0 === l ? '' : l,
          o = e.index,
          p = e.hasAnimation,
          m = void 0 !== p && p,
          x = (200 * o).toString();
        return (0, s.jsxs)(
          'div',
          (0, r.Z)(
            (0, a.Z)(
              { className: 'flex gap-2 '.concat(i) },
              m && { 'data-aos': 'fade-up', 'data-aos-delay': x }
            ),
            {
              children: [
                (0, s.jsx)('img', {
                  src: '/images/leaf.png',
                  alt: 'leaf',
                  className: 'mt-1 h-5 w-5',
                }),
                (0, s.jsx)('div', {
                  className: 'flex-1 text-gray-600 '.concat(c),
                  children: t,
                }),
              ],
            }
          )
        );
      }
    },
    92: function (e, t, n) {
      n.d(t, {
        V: function () {
          return f;
        },
      });
      var a = n(5893),
        r = n(1664),
        s = n.n(r),
        i = n(172),
        l = n(2997),
        c = n(7649),
        o = n(5186),
        p = n(9447),
        m = n(4002),
        x = n(6653);
      function d() {
        var e = (0, x.E)('lg');
        return (0, a.jsx)(p.t, {
          slidesPerView: 'auto',
          spaceBetween: 56,
          grabCursor: !0,
          className: 'pb-16',
          loop: !0,
          autoplay: { delay: 3e3, disableOnInteraction: !1 },
          pagination: {
            bulletActiveClass: 'bg-primary',
            clickable: !0,
            bulletClass:
              'inline-block w-3 h-3 bg-gray-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-primary transform translate-y-3',
          },
          children: e
            ? (0, a.jsx)(a.Fragment, {
                children: h.map(function (e, t) {
                  return (0,
                  a.jsx)(m.o, { className: 'w-40', children: (0, a.jsx)(s(), { href: e.href, children: (0, a.jsx)('a', { children: (0, a.jsx)('img', { src: '/images/'.concat(e.url), alt: e.url, className: 'object-contain' }) }) }) }, t);
                }),
              })
            : (0, a.jsx)(a.Fragment, {
                children: u.map(function (e, t) {
                  return (0, a.jsx)(
                    m.o,
                    {
                      className: 'grid grid-cols-2 gap-12',
                      children: e.list.map(function (e, t) {
                        return (0,
                        a.jsx)(s(), { href: e.href, children: (0, a.jsx)('a', { className: 'mx-auto block', children: (0, a.jsx)('img', { src: '/images/'.concat(e.url), alt: e.url, height: '100%', className: 'object-contain' }) }) }, t);
                      }),
                    },
                    t
                  );
                }),
              }),
        });
      }
      i.Z.use([l.Z, c.Z, o.Z]);
      var h = [
          { url: 'partner-1.png', href: '' },
          { url: 'partner-2.png', href: '' },
          { url: 'partner-3.png', href: '' },
          { url: 'partner-4.png', href: '' },
          { url: 'partner-5.png', href: '' },
          { url: 'partner-6.png', href: '' },
          { url: 'partner-7.png', href: '' },
        ],
        u = [
          {
            list: [
              { url: 'partner-5.png', href: '' },
              { url: 'partner-4.png', href: '' },
              { url: 'partner-10.png', href: '' },
              { url: 'partner-1.png', href: '' },
              { url: 'partner-9.png', href: '' },
              { url: 'partner-8.png', href: '' },
            ],
          },
          {
            list: [
              { url: 'partner-5.png', href: '' },
              { url: 'partner-4.png', href: '' },
              { url: 'partner-10.png', href: '' },
              { url: 'partner-1.png', href: '' },
              { url: 'partner-9.png', href: '' },
              { url: 'partner-8.png', href: '' },
            ],
          },
          {
            list: [
              { url: 'partner-5.png', href: '' },
              { url: 'partner-4.png', href: '' },
              { url: 'partner-10.png', href: '' },
              { url: 'partner-1.png', href: '' },
              { url: 'partner-9.png', href: '' },
              { url: 'partner-8.png', href: '' },
            ],
          },
          {
            list: [
              { url: 'partner-5.png', href: '' },
              { url: 'partner-4.png', href: '' },
              { url: 'partner-10.png', href: '' },
              { url: 'partner-1.png', href: '' },
              { url: 'partner-9.png', href: '' },
              { url: 'partner-8.png', href: '' },
            ],
          },
        ],
        g = n(5383);
      function f(e) {
        var t = e.title,
          n = void 0 === t ? '' : t,
          r = e.className,
          s = void 0 === r ? '' : r;
        return (0, a.jsx)('div', {
          className: 'py-8 lg:py-24 '.concat(s),
          'data-aos': 'fade-up',
          children: (0, a.jsxs)('div', {
            className: 'main-container',
            children: [
              (0, a.jsx)(g.D, { text: n }),
              (0, a.jsx)('div', {
                className:
                  'mt-8 rounded-md border border-gray-200 bg-white p-12 shadow-md',
                children: (0, a.jsx)(d, {}),
              }),
            ],
          }),
        });
      }
    },
    9392: function (e, t, n) {
      n.d(t, {
        J: function () {
          return c;
        },
      });
      var a = n(9534),
        r = n(5893),
        s = n(1589),
        i = n(3008),
        l = n(6653);
      function c(e) {
        var t = e.img,
          n = e.title,
          c = e.options;
        (0, a.Z)(e, ['img', 'title', 'options']);
        return (0, l.E)('lg')
          ? (0, r.jsx)('div', {
              className: 'bg-primary-light py-24',
              'data-aos': 'fade-up',
              children: (0, r.jsxs)('div', {
                className: 'main-container flex items-center gap-2',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'flex-1',
                    children: [
                      (0, r.jsx)('div', {
                        className: 'text-5xl font-bold leading-tight',
                        children: n,
                      }),
                      (0, r.jsx)('div', {
                        className: 'mt-4 flex flex-col gap-4',
                        children: c.map(function (e, t) {
                          return (0,
                          r.jsx)(s.b, { content: e.content, contentClassName: 'text-xl leading-8' }, t);
                        }),
                      }),
                      (0, r.jsx)(i.Z, {
                        variant: 'primary',
                        className: 'mt-8 !px-8 !py-3',
                        children: 'S\u1eec D\u1ee4NG NGAY',
                      }),
                    ],
                  }),
                  (0, r.jsx)('div', {
                    className: 'ml-auto w-5/12 shrink-0 grow-0',
                    children: (0, r.jsx)('img', {
                      src: t.src,
                      alt: t.alt,
                      width: '100%',
                      height: '100%',
                      className: 'object-contain',
                    }),
                  }),
                ],
              }),
            })
          : (0, r.jsx)('div', {
              className: 'bg-primary-light py-8',
              'data-aos': 'fade-up',
              children: (0, r.jsxs)('div', {
                className: 'main-container',
                children: [
                  (0, r.jsx)('div', {
                    className: 'text-center text-2xl font-bold leading-tight',
                    children: n,
                  }),
                  (0, r.jsx)('img', {
                    src: t.src,
                    alt: t.alt,
                    className: 'mx-auto object-contain',
                  }),
                  (0, r.jsx)('div', {
                    className: 'mt-6 flex flex-col gap-4',
                    children: c.map(function (e, t) {
                      return (0, r.jsx)(s.b, { content: e.content }, t);
                    }),
                  }),
                  (0, r.jsx)('div', {
                    className: 'mt-8 text-center',
                    children: (0, r.jsx)(i.Z, {
                      variant: 'primary',
                      className: '!px-8 !py-3',
                      children: 'S\u1eec D\u1ee4NG NGAY',
                    }),
                  }),
                ],
              }),
            });
      }
    },
    8881: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return r;
        },
      });
      var a = n(5893);
      function r(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          r = e.text;
        return (0, a.jsx)('div', {
          className:
            'mb-8 mt-1 text-center text-gray-600 lg:mt-3 lg:text-xl lg:leading-8 '.concat(
              n
            ),
          children: r,
        });
      }
    },
    5383: function (e, t, n) {
      n.d(t, {
        D: function () {
          return r;
        },
      });
      var a = n(5893);
      function r(e) {
        var t = e.text,
          n = void 0 === t ? '' : t,
          r = e.className,
          s = void 0 === r ? '' : r;
        return (0, a.jsx)('div', {
          className:
            'text-center font-saira text-[23px] font-semibold uppercase leading-8 lg:text-4xl lg:leading-10 '.concat(
              s
            ),
          children: n,
        });
      }
    },
  },
]);
