(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [552],
  {
    6565: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/about-us',
        function () {
          return t(5197);
        },
      ]);
    },
    6875: function (n, e, t) {
      'use strict';
      t.d(e, {
        Z: function () {
          return g;
        },
      });
      var a = t(6042),
        r = t(5893),
        i = t(9008),
        l = t.n(i),
        s = t(1163),
        c = {
          title: 'GAT',
          siteName: 'GAT',
          description: 'GAT Landing',
          url: 'https://tsnext-tw.thcl.dev',
          type: 'website',
          robots: 'follow, index',
          image: 'https://tsnext-tw.thcl.dev/images/large-og.png',
        };
      function g(n) {
        var e = (0, s.useRouter)(),
          t = (0, a.Z)({}, c, n);
        return (
          (t.title = n.templateTitle
            ? ''.concat(n.templateTitle, ' | ').concat(t.siteName)
            : t.title),
          (0, r.jsxs)(l(), {
            children: [
              (0, r.jsx)('title', { children: t.title }),
              (0, r.jsx)('meta', { name: 'robots', content: t.robots }),
              (0, r.jsx)('meta', {
                content: t.description,
                name: 'description',
              }),
              (0, r.jsx)('meta', {
                property: 'og:url',
                content: ''.concat(t.url).concat(e.asPath),
              }),
              (0, r.jsx)('link', {
                rel: 'canonical',
                href: ''.concat(t.url).concat(e.asPath),
              }),
              (0, r.jsx)('meta', { property: 'og:type', content: t.type }),
              (0, r.jsx)('meta', {
                property: 'og:site_name',
                content: t.siteName,
              }),
              (0, r.jsx)('meta', {
                property: 'og:description',
                content: t.description,
              }),
              (0, r.jsx)('meta', { property: 'og:title', content: t.title }),
              (0, r.jsx)('meta', {
                name: 'image',
                property: 'og:image',
                content: t.image,
              }),
              (0, r.jsx)('meta', {
                name: 'twitter:card',
                content: 'summary_large_image',
              }),
              (0, r.jsx)('meta', {
                name: 'twitter:site',
                content: '@th_clarence',
              }),
              (0, r.jsx)('meta', { name: 'twitter:title', content: t.title }),
              (0, r.jsx)('meta', {
                name: 'twitter:description',
                content: t.description,
              }),
              (0, r.jsx)('meta', { name: 'twitter:image', content: t.image }),
              t.date &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)('meta', {
                      property: 'article:published_time',
                      content: t.date,
                    }),
                    (0, r.jsx)('meta', {
                      name: 'publish_date',
                      property: 'og:publish_date',
                      content: t.date,
                    }),
                    (0, r.jsx)('meta', {
                      name: 'author',
                      property: 'article:author',
                      content: 'GAT',
                    }),
                  ],
                }),
              o.map(function (n) {
                return (0, r.jsx)('link', (0, a.Z)({}, n), n.href);
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
      var o = [
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
    7296: function (n, e, t) {
      'use strict';
      t.d(e, {
        b: function () {
          return c;
        },
      });
      var a = t(5893),
        r = t(1664),
        i = t.n(r),
        l = t(7294),
        s = t(8193);
      function c(n) {
        var e = n.breadcrumbs,
          t = n.className,
          r = void 0 === t ? '' : t;
        return (0, a.jsx)('div', {
          'data-aos': 'fade',
          className:
            'main-container flex flex-row items-center overflow-hidden text-sm font-semibold '.concat(
              r
            ),
          children: e.map(function (n, e) {
            return (0,
            a.jsx)(l.Fragment, { children: n.href ? (0, a.jsxs)('div', { className: 'flex shrink-0 grow-0 items-center', children: [(0, a.jsx)(i(), { href: n.href, children: (0, a.jsx)('a', { className: '', children: (0, a.jsx)('div', { className: 'whitespace-nowrap lowercase !text-primary transition-all duration-200 first-letter:uppercase hover:text-primary hover:underline', children: n.label }) }) }), (0, a.jsx)('div', { className: 'px-1.5', children: (0, a.jsx)(s.Td4, { className: 'font-semibold !text-primary' }) })] }) : (0, a.jsx)('div', { className: 'flex-1 whitespace-nowrap first-letter:uppercase', children: ((t = n.label), t ? (t.split(' ').length > 10 ? ''.concat(t.split(' ').slice(0, 10).join(' '), '...') : t) : '') }) }, e);
            var t;
          }),
        });
      }
    },
    92: function (n, e, t) {
      'use strict';
      t.d(e, {
        V: function () {
          return f;
        },
      });
      var a = t(5893),
        r = t(1664),
        i = t.n(r),
        l = t(172),
        s = t(2997),
        c = t(7649),
        g = t(5186),
        o = t(9447),
        p = t(4002),
        h = t(6653);
      function d() {
        var n = (0, h.E)('lg');
        return (0, a.jsx)(o.t, {
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
          children: n
            ? (0, a.jsx)(a.Fragment, {
                children: u.map(function (n, e) {
                  return (0,
                  a.jsx)(p.o, { className: 'w-40', children: (0, a.jsx)(i(), { href: n.href, children: (0, a.jsx)('a', { children: (0, a.jsx)('img', { src: '/images/'.concat(n.url), alt: n.url, className: 'object-contain' }) }) }) }, e);
                }),
              })
            : (0, a.jsx)(a.Fragment, {
                children: m.map(function (n, e) {
                  return (0, a.jsx)(
                    p.o,
                    {
                      className: 'grid grid-cols-2 gap-12',
                      children: n.list.map(function (n, e) {
                        return (0,
                        a.jsx)(i(), { href: n.href, children: (0, a.jsx)('a', { className: 'mx-auto block', children: (0, a.jsx)('img', { src: '/images/'.concat(n.url), alt: n.url, height: '100%', className: 'object-contain' }) }) }, e);
                      }),
                    },
                    e
                  );
                }),
              }),
        });
      }
      l.Z.use([s.Z, c.Z, g.Z]);
      var u = [
          { url: 'partner-1.png', href: '' },
          { url: 'partner-2.png', href: '' },
          { url: 'partner-3.png', href: '' },
          { url: 'partner-4.png', href: '' },
          { url: 'partner-5.png', href: '' },
          { url: 'partner-6.png', href: '' },
          { url: 'partner-7.png', href: '' },
        ],
        m = [
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
        x = t(5383);
      function f(n) {
        var e = n.title,
          t = void 0 === e ? '' : e,
          r = n.className,
          i = void 0 === r ? '' : r;
        return (0, a.jsx)('div', {
          className: 'py-8 lg:py-24 '.concat(i),
          'data-aos': 'fade-up',
          children: (0, a.jsxs)('div', {
            className: 'main-container',
            children: [
              (0, a.jsx)(x.D, { text: t }),
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
    8881: function (n, e, t) {
      'use strict';
      t.d(e, {
        Q: function () {
          return r;
        },
      });
      var a = t(5893);
      function r(n) {
        var e = n.className,
          t = void 0 === e ? '' : e,
          r = n.text;
        return (0, a.jsx)('div', {
          className:
            'mb-8 mt-1 text-center text-gray-600 lg:mt-3 lg:text-xl lg:leading-8 '.concat(
              t
            ),
          children: r,
        });
      }
    },
    5383: function (n, e, t) {
      'use strict';
      t.d(e, {
        D: function () {
          return r;
        },
      });
      var a = t(5893);
      function r(n) {
        var e = n.text,
          t = void 0 === e ? '' : e,
          r = n.className,
          i = void 0 === r ? '' : r;
        return (0, a.jsx)('div', {
          className:
            'text-center font-saira text-[23px] font-semibold uppercase leading-8 lg:text-4xl lg:leading-10 '.concat(
              i
            ),
          children: t,
        });
      }
    },
    5197: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          default: function () {
            return v;
          },
        });
      var a = t(5893),
        r = t(6653),
        i = t(7296),
        l = t(92);
      function s() {
        var n = (0, r.E)('lg');
        return (0, a.jsx)('div', {
          className: 'main-container pb-8 lg:p-16 lg:pb-24',
          children: (0, a.jsxs)('div', {
            className: 'flex flex-col justify-between lg:flex-row',
            children: [
              (0, a.jsxs)('div', {
                'data-aos': 'fade-up',
                'data-aos-delay': 100,
                className:
                  'ml-auto mr-auto w-auto max-w-[350px] text-center lg:mr-16 lg:mt-32 lg:w-[452px] lg:max-w-md lg:text-left xl:ml-0 xl:mr-52',
                children: [
                  n
                    ? (0, a.jsx)('div', {
                        className:
                          'font-saira text-[23px] font-semibold !leading-[1.3] lg:text-5xl',
                        children: 'C\xf4ng ngh\u1ec7 xanh S\u1ed1ng an l\xe0nh',
                      })
                    : (0, a.jsx)('div', {
                        className:
                          'font-saira text-[23px] font-semibold leading-[1.25] lg:text-5xl',
                        children:
                          'C\xf4ng ngh\u1ec7 xanh - S\u1ed1ng an l\xe0nh',
                      }),
                  (0, a.jsx)('div', {
                    'data-aos': 'fade-up',
                    'data-aos-delay': 150,
                    className:
                      'mt-4 text-base font-medium !leading-[1.5] text-gray-600 lg:text-xl',
                    children:
                      'C\xf4ng ty C\u1ed5 ph\u1ea7n C\xf4ng ngh\u1ec7 Green Agri l\xe0 \u0111\u01a1n v\u1ecb ti\xean phong trong l\u0129nh v\u1ef1c cung c\u1ea5p c\xe1c gi\u1ea3i ph\xe1p c\xf4ng ngh\u1ec7 cho ng\xe0nh n\xf4ng nghi\u1ec7p',
                  }),
                ],
              }),
              (0, a.jsx)('img', {
                'data-aos': 'fade-up',
                'data-aos-delay': 200,
                src: '/images/about-us-hero.png',
                alt: '',
                className: 'mt-5 object-contain lg:w-1/2',
              }),
            ],
          }),
        });
      }
      var c = t(8881),
        g = t(5383);
      function o() {
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          className:
            'main-container rounded-lg bg-primary-dark bg-cover bg-center bg-no-repeat p-3 shadow-sm lg:p-16',
          style: { backgroundImage: "url('./images/about-us.png')" },
          children: [
            (0, a.jsx)(g.D, {
              text: 'gi\u1edbi thi\u1ec7u gat',
              className: 'mt-3 text-white lg:mt-0',
            }),
            (0, a.jsx)(c.Q, {
              text: 'C\xf4ng ty C\u1ed5 ph\u1ea7n C\xf4ng ngh\u1ec7 Green Agri l\xe0 \u0111\u01a1n v\u1ecb ti\xean phong trong l\u0129nh v\u1ef1c cung c\u1ea5p c\xe1c gi\u1ea3i ph\xe1p c\xf4ng ngh\u1ec7 cho ng\xe0nh n\xf4ng nghi\u1ec7p V\u1edbi \u0111\u1ed9i ng\u0169 chuy\xean gia trong l\u0129nh v\u1ef1c n\xf4ng nghi\u1ec7p v\xe0 c\xf4ng ngh\u1ec7 th\xf4ng tin. Ch\xfang t\xf4i s\u1ebd x\xe2y d\u1ef1ng v\xe0 \u0111\u01b0a ra nh\u1eefng gi\u1ea3i ph\xe1p c\xf4ng ngh\u1ec7 \u0111\u1ec3 h\u1ed7 tr\u1ee3 c\xe1c doanh nghi\u1ec7p v\xe0 ng\u01b0\u1eddi n\xf4ng d\xe2n s\u1ed1 h\xf3a c\xe1c qui tr\xecnh, c\xf4ng \u0111o\u1ea1n trong s\u1ea3n xu\u1ea5t, canh t\xe1c \u0111\u1ec3 n\xe2ng cao hi\u1ec7u n\u0103ng cho s\u1ea3n xu\u1ea5t n\xf4ng nghi\u1ec7p tr\xean c\u01a1 s\u1edf n\u1ec1n t\u1ea3ng c\xf4ng ngh\u1ec7 t\u1ed1i \u01b0u v\xe0 minh b\u1ea1ch',
              className:
                '!mt-8 mb-16 !text-left text-lg !font-normal !text-white',
            }),
            (0, a.jsx)('div', {
              className:
                'grid grid-cols-1 gap-10 pl-16 pr-0 pb-16 lg:grid-cols-2 lg:gap-[92px] lg:pr-16',
              children: h.map(function (n, e) {
                return (0, a.jsx)(p, { data: n, index: e }, e);
              }),
            }),
          ],
        });
      }
      function p(n) {
        var e = n.data,
          t = (100 * n.index).toString();
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          'data-aos-delay': t,
          className: 'flex flex-col gap-2 lg:gap-4',
          children: [
            (0, a.jsx)('div', {
              className:
                'bg-transparent text-right font-saira text-2xl font-semibold uppercase text-white',
              children: e.title,
            }),
            (0, a.jsxs)('div', {
              className: 'flex h-full min-h-28 rounded-md shadow-sm',
              style: { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
              children: [
                (0, a.jsx)('div', {
                  className:
                    '-ml-16 -mt-9 flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-primary-dark bg-white lg:h-[120px] lg:w-[120px]',
                  children: (0, a.jsx)('img', { src: e.image, alt: '' }),
                }),
                (0, a.jsx)('div', {
                  className:
                    'z-20 h-full w-full rounded-md p-2 text-base text-white lg:p-4 lg:text-lg',
                  children: e.content,
                }),
              ],
            }),
          ],
        });
      }
      var h = [
        {
          title: 'M\u1ee5c ti\xeau',
          image: '/images/target-1.png',
          content:
            'Mang l\u1ea1i l\u1ee3i \xedch cho n\xf4ng d\xe2n b\u1eb1ng vi\u1ec7c chu\u1ea9n h\xf3a quy tr\xecnh canh t\xe1c,truy xu\u1ea5t ngu\u1ed3n g\u1ed1c v\xe0 ph\xe1t tri\u1ec3n k\xeanh b\xe1n h\xe0ng qua n\u1ec1n t\u1ea3ng c\xf4ng ngh\u1ec7',
        },
        {
          title: 'S\u1ee9 m\u1ec7nh',
          image: '/images/target-3.png',
          content:
            'X\xe2y d\u1ef1ng n\u1ec1n t\u1ea3ng v\xe0 gi\u1ea3i ph\xe1p c\xf4ng ngh\u1ec7 ph\xf9 h\u1ee3p, t\u1ed1i \u01b0u v\u1edbi d\u1ecbch v\u1ee5 t\u01b0 v\u1ea5n v\xe0 h\u1ed7 tr\u1ee3 v\u1eadn h\xe0nh hi\u1ec7u qu\u1ea3, k\u1ecbp th\u1eddi',
        },
        {
          title: 'T\u1ea7m nh\xecn',
          image: '/images/target-2.png',
          content:
            'Green Agri tr\u1edf th\xe0nh \u0111\u01a1n v\u1ecb x\xe2y d\u1ef1ng v\xe0 cung c\u1ea5p gi\u1ea3i ph\xe1p c\xf4ng ngh\u1ec7 h\xe0ng \u0111\u1ea7u cho ng\xe0nh n\xf4ng nghi\u1ec7p Vi\u1ec7t Nam',
        },
        {
          title: 'Gi\xe1 tr\u1ecb c\u1ed1t l\xf5i',
          image: '/images/target-4.png',
          content: '\u0110\u1ee9c - T\xedn - T\xe2m - Tr\xed - Nh\xe2n',
        },
      ];
      function d() {
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          className: 'main-container py-16 lg:px-16',
          children: [
            (0, a.jsx)(g.D, { text: 'Gi\u1ea3i ph\xe1p green agri' }),
            (0, a.jsx)(c.Q, {
              text: 'B\u1ed9 gi\u1ea3i ph\xe1p h\xe0ng \u0111\u1ea7u cho ng\xe0nh n\xf4ng nghi\u1ec7p',
              className: 'mx-auto mt-4 mb-10 max-w-lg',
            }),
            (0, a.jsx)('div', {
              className: 'grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8',
              children: m.map(function (n, e) {
                return (0, a.jsx)(u, { data: n, index: e }, e);
              }),
            }),
          ],
        });
      }
      function u(n) {
        var e = n.data,
          t = (100 * n.index).toString();
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          'data-aos-delay': t,
          className:
            'min-h-[150px] rounded-md border bg-[#FAFAFA] p-3 shadow-md lg:p-6',
          children: [
            (0, a.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, a.jsx)('img', {
                  src: e.url,
                  alt: e.alt,
                  width: 47,
                  height: 47,
                }),
                (0, a.jsx)('div', {
                  className: 'font-saira text-xl font-semibold lg:text-2xl',
                  children: e.title,
                }),
              ],
            }),
            (0, a.jsx)('div', {
              className:
                'mt-3 text-base font-medium text-[#6C6C6C] lg:mt-7 lg:text-lg',
              children: e.content,
            }),
          ],
        });
      }
      var m = [
        {
          url: '/images/leaf.png',
          alt: 'nhat-ky-canh-tac',
          title: 'Gi\u1ea3i ph\xe1p nh\u1eadt k\xfd canh t\xe1c',
          content:
            'Ghi ch\xe9p nh\u1eadt k\xfd c\xe1c ho\u1ea1t \u0111\u1ed9ng n\u1ed9i b\u1ed9 trong su\u1ed1t qu\xe1 tr\xecnh tr\u1ed3ng tr\u1ecdt v\xe0 ch\u0103n nu\xf4i',
        },
        {
          url: '/images/search2.png',
          alt: 'giai-phap-truy-suat-nguon-goc',
          title: 'Gi\u1ea3i ph\xe1p truy xu\u1ea5t ngu\u1ed3n g\u1ed1c',
          content:
            'Minh b\u1ea1ch th\xf4ng tin s\u1ea3n ph\u1ea9m ch\xednh h\xe3ng t\u1edbi ng\u01b0\u1eddi d\xf9ng.',
        },
        {
          url: '/images/coop.png',
          alt: 'giai-phap-quan-ly-kenh-phan-phoi',
          title: 'Gi\u1ea3i ph\xe1p qu\u1ea3n l\xfd k\xeanh ph\xe2n ph\u1ed1i',
          content:
            'T\xedch h\u1ee3p c\xe1c gi\u1ea3i ph\xe1p trong 1 QR Code: Ch\u1ed1ng h\xe0ng gi\u1ea3, ch\u1ed1ng ph\xe1 gi\xe1, b\u1ea3o h\xe0nh \u0111i\u1ec7n t\u1eed',
        },
        {
          url: '/images/user.png',
          alt: 'crm-platform',
          title: 'CRM Platform',
          content:
            'N\u1ec1n t\u1ea3ng t\u1ea1o \u1ee9ng d\u1ee5ng ch\u0103m s\xf3c kh\xe1ch h\xe0ng.',
        },
      ];
      function x() {
        var n = (0, r.E)('lg');
        return (0, a.jsxs)(a.Fragment, {
          children: [
            !n &&
              (0, a.jsx)(i.b, {
                breadcrumbs: [
                  { label: 'Trang ch\u1ee7', href: '/' },
                  { label: 'V\u1ec1 GAT' },
                ],
                className: 'pt-2 pb-6',
              }),
            (0, a.jsx)(s, {}),
            (0, a.jsx)(o, {}),
            (0, a.jsx)(d, {}),
            (0, a.jsx)(l.V, {
              title: 'Kh\xe1ch h\xe0ng Green Agri',
              className: 'bg-[#E7F7F0]',
            }),
            (0, a.jsx)(l.V, {
              title: '\u0110\u1ed1i t\xe1c C\u1ee6A gREEN aGRI',
            }),
          ],
        });
      }
      var f = t(6875);
      function v() {
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(f.Z, {}), (0, a.jsx)(x, {})],
        });
      }
    },
  },
  function (n) {
    n.O(0, [617, 395, 774, 888, 179], function () {
      return (e = 6565), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
