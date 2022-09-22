(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(5938);
        },
      ]);
    },
    6875: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return o;
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
      function o(e) {
        var n = (0, s.useRouter)(),
          t = (0, a.Z)({}, c, e);
        return (
          (t.title = e.templateTitle
            ? ''.concat(e.templateTitle, ' | ').concat(t.siteName)
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
                content: ''.concat(t.url).concat(n.asPath),
              }),
              (0, r.jsx)('link', {
                rel: 'canonical',
                href: ''.concat(t.url).concat(n.asPath),
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
              g.map(function (e) {
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
      var g = [
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
    6154: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(5893);
      function r(e) {
        var n = e.index,
          t = e.item,
          r = e.className,
          i = e.contentClass,
          l = e.imageClass,
          s = (200 * n).toString();
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          'data-aos-delay': s,
          className:
            'flex h-full flex-col items-center justify-between rounded-xl border border-gray-100 shadow '.concat(
              r
            ),
          children: [
            (0, a.jsx)('img', {
              src: t.img.url,
              alt: t.img.alt,
              height: '100%',
              className: 'object-contain '.concat(l),
            }),
            (0, a.jsx)('div', {
              className: 'mt-auto h-full text-center '.concat(i),
              children: t.content,
            }),
          ],
        });
      }
    },
    1589: function (e, n, t) {
      'use strict';
      t.d(n, {
        b: function () {
          return l;
        },
      });
      var a = t(6042),
        r = t(9396),
        i = t(5893);
      function l(e) {
        var n = e.content,
          t = e.className,
          l = void 0 === t ? '' : t,
          s = e.contentClassName,
          c = void 0 === s ? '' : s,
          o = e.index,
          g = e.hasAnimation,
          h = void 0 !== g && g,
          p = (200 * o).toString();
        return (0, i.jsxs)(
          'div',
          (0, r.Z)(
            (0, a.Z)(
              { className: 'flex gap-2 '.concat(l) },
              h && { 'data-aos': 'fade-up', 'data-aos-delay': p }
            ),
            {
              children: [
                (0, i.jsx)('img', {
                  src: '/images/leaf.png',
                  alt: 'leaf',
                  className: 'mt-1 h-5 w-5',
                }),
                (0, i.jsx)('div', {
                  className: 'flex-1 text-gray-600 '.concat(c),
                  children: n,
                }),
              ],
            }
          )
        );
      }
    },
    92: function (e, n, t) {
      'use strict';
      t.d(n, {
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
        o = t(5186),
        g = t(9447),
        h = t(4002),
        p = t(6653);
      function m() {
        var e = (0, p.E)('lg');
        return (0, a.jsx)(g.t, {
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
                children: x.map(function (e, n) {
                  return (0,
                  a.jsx)(h.o, { className: 'w-40', children: (0, a.jsx)(i(), { href: e.href, children: (0, a.jsx)('a', { children: (0, a.jsx)('img', { src: '/images/'.concat(e.url), alt: e.url, className: 'object-contain' }) }) }) }, n);
                }),
              })
            : (0, a.jsx)(a.Fragment, {
                children: d.map(function (e, n) {
                  return (0, a.jsx)(
                    h.o,
                    {
                      className: 'grid grid-cols-2 gap-12',
                      children: e.list.map(function (e, n) {
                        return (0,
                        a.jsx)(i(), { href: e.href, children: (0, a.jsx)('a', { className: 'mx-auto block', children: (0, a.jsx)('img', { src: '/images/'.concat(e.url), alt: e.url, height: '100%', className: 'object-contain' }) }) }, n);
                      }),
                    },
                    n
                  );
                }),
              }),
        });
      }
      l.Z.use([s.Z, c.Z, o.Z]);
      var x = [
          { url: 'partner-1.png', href: '' },
          { url: 'partner-2.png', href: '' },
          { url: 'partner-3.png', href: '' },
          { url: 'partner-4.png', href: '' },
          { url: 'partner-5.png', href: '' },
          { url: 'partner-6.png', href: '' },
          { url: 'partner-7.png', href: '' },
        ],
        d = [
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
        u = t(5383);
      function f(e) {
        var n = e.title,
          t = void 0 === n ? '' : n,
          r = e.className,
          i = void 0 === r ? '' : r;
        return (0, a.jsx)('div', {
          className: 'py-8 lg:py-24 '.concat(i),
          'data-aos': 'fade-up',
          children: (0, a.jsxs)('div', {
            className: 'main-container',
            children: [
              (0, a.jsx)(u.D, { text: t }),
              (0, a.jsx)('div', {
                className:
                  'mt-8 rounded-md border border-gray-200 bg-white p-12 shadow-md',
                children: (0, a.jsx)(m, {}),
              }),
            ],
          }),
        });
      }
    },
    8881: function (e, n, t) {
      'use strict';
      t.d(n, {
        Q: function () {
          return r;
        },
      });
      var a = t(5893);
      function r(e) {
        var n = e.className,
          t = void 0 === n ? '' : n,
          r = e.text;
        return (0, a.jsx)('div', {
          className:
            'mb-8 mt-1 text-center text-gray-600 lg:mt-3 lg:text-xl lg:leading-8 '.concat(
              t
            ),
          children: r,
        });
      }
    },
    5383: function (e, n, t) {
      'use strict';
      t.d(n, {
        D: function () {
          return r;
        },
      });
      var a = t(5893);
      function r(e) {
        var n = e.text,
          t = void 0 === n ? '' : n,
          r = e.className,
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
    5938: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return I;
          },
        });
      var a = t(5893),
        r = t(92),
        i = t(3008),
        l = t(172),
        s = t(2997),
        c = t(7649),
        o = t(5186),
        g = t(9447),
        h = t(4002),
        p = t(7294),
        m = t(6653);
      function x() {
        (0, p.useRef)(null);
        var e = (0, p.useState)(),
          n = (e[0], e[1]);
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)('div', {
            children: (0, a.jsx)(g.t, {
              slidesPerView: 1,
              grabCursor: !0,
              loop: !0,
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              pagination: {
                clickable: !0,
                type: 'bullets',
                bulletActiveClass: 'swiper-pagination-bullet-active-banner',
                bulletClass:
                  'inline-block w-3 h-3 bg-gray-100 rounded-full transition-all cursor-pointer mr-2 last:mr-0 lg:mb-20 mb-8 hover:bg-primary',
              },
              onSwiper: n,
              freeMode: !1,
              children: u.map(function (e, n) {
                return (0,
                a.jsx)(h.o, { children: (0, a.jsx)(d, { banner: e }) }, n);
              }),
            }),
          }),
        });
      }
      function d(e) {
        var n = (0, m.E)('lg');
        return (0, a.jsx)('div', {
          className:
            'relative flex max-h-96 min-h-[350px] w-full flex-row justify-center bg-cover bg-center bg-no-repeat lg:mb-[2.5rem] lg:flex lg:h-[645px] lg:max-h-[645px] lg:flex-row   lg:justify-center '.concat(
              n ? '' : 'items-center'
            ),
          style: {
            backgroundImage: "url('./images/".concat(e.banner.image, "')"),
          },
          children: (0, a.jsxs)('div', {
            className: 'lg:mt-24',
            children: [
              (0, a.jsx)('div', {
                'data-aos': 'fade-up',
                'data-aos-delay': '100',
                className:
                  'mx-auto mt-10 mb-2 text-center font-saira text-xl font-semibold uppercase !leading-[1.5] text-white lg:mt-16 lg:mb-8 lg:max-w-5xl lg:text-[60px]',
                children: e.banner.title,
              }),
              (0, a.jsx)('div', {
                'data-aos': 'fade-up',
                'data-aos-delay': '200',
                className: 'mt-10 text-center lg:mt-12',
                children: (0, a.jsx)(i.Z, {
                  variant: 'primary',
                  className: 'py-[14px] px-7 font-normal uppercase',
                  children: 'T\xecm hi\u1ec3u th\xeam',
                }),
              }),
            ],
          }),
        });
      }
      l.Z.use([s.Z, c.Z, o.Z]);
      var u = [
          {
            image: 'home-banner-3.png',
            title: 'N\xf4ng nghi\u1ec7p xanh s\u1ed1ng an l\xe0nh',
            href: '/',
          },
          {
            image: 'home-banner-2.png',
            title:
              'gi\u1ea3i ph\xe1p c\xf4ng ngh\u1ec7 h\xe0ng \u0111\u1ea7u trong ng\xe0nh n\xf4ng nghi\u1ec7p',
            href: '/',
          },
          {
            image: 'home-banner-1.png',
            title:
              '\u1ee9ng d\u1ee5ng c\xf4ng ngh\u1ec7 n\xe2ng t\u1ea7m n\xf4ng nghi\u1ec7p Vi\u1ec7t Nam',
            href: '/',
          },
        ],
        f = t(8881),
        v = t(5383),
        j = t(6154);
      function b(e) {
        var n = e.text,
          t = e.subtitle;
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          className: 'main-container lg:0 py-8 xl:p-16',
          children: [
            (0, a.jsx)(v.D, { text: n, className: t ? '' : 'mb-10' }),
            t && (0, a.jsx)(f.Q, { text: t, className: 'mx-auto max-w-lg' }),
            (0, a.jsx)('div', {
              className:
                'grid w-full auto-rows-fr grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8',
              children: N.map(function (e, n) {
                return (0,
                a.jsx)(j.Z, { index: n, item: e, className: 'gap-4 border-2 bg-[#FAFAFA] px-2 py-4 lg:gap-8 lg:px-6 lg:py-0 lg:pb-10 lg:pt-[38px]', contentClass: 'text-gray-600 lg:text-lg text-base' }, n);
              }),
            }),
          ],
        });
      }
      var N = [
          {
            img: { url: '/images/leaf.png', alt: 'l\xe1 c\xe2y' },
            content:
              'T\u1ef1 \u0111\u1ed9ng h\xf3a qu\xe1 tr\xecnh b\xe1n h\xe0ng cho th\xe0nh vi\xean k\xeanh ph\xe2n ph\u1ed1i',
          },
          {
            img: { url: '/images/scan.png', alt: 'l\xe1 c\xe2y' },
            content:
              'Gi\u1ea3m thi\u1ec3u gian l\u1eadn, l\xe0m gi\u1ea3 h\xe0ng h\xf3a th\xf4ng qua truy xu\u1ea5t ngu\u1ed3n g\u1ed1c',
          },
          {
            img: { url: '/images/virut.png', alt: 'l\xe1 c\xe2y' },
            content:
              'Chu\u1ea9n h\xf3a quy tr\xecnh s\u1ea3n xu\u1ea5t n\xf4ng nghi\u1ec7p theo c\xe1c ti\xeau chu\u1ea9n',
          },
          {
            img: { url: '/images/user.png', alt: 'l\xe1 c\xe2y' },
            content:
              '\u0110\u1ea3m b\u1ea3o quy\u1ec1n l\u1ee3i cho c\xe1c \u0111\u1ed1i t\xe1c, l\u1ee3i \xedch cho ng\u01b0\u1eddi ti\xeau d\xf9ng',
          },
        ],
        y = t(9352),
        w = t(1664),
        k = t.n(w);
      function T(e) {
        var n = e.news,
          t = e.index,
          r = (0, m.E)('lg'),
          i = (200 * t).toString();
        return (0, a.jsx)(k(), {
          href: '/',
          children: (0, a.jsx)('a', {
            children: (0, a.jsxs)('div', {
              'data-aos': 'fade-up',
              'data-aos-delay': i,
              className: 'group flex  cursor-pointer flex-row gap-2 '.concat(
                r ? '' : 'items-center',
                ' lg:flex-col lg:gap-0'
              ),
              children: [
                (0, a.jsx)('div', {
                  className: 'shrink-0 basis-2/5 overflow-hidden rounded-md',
                  children: (0, a.jsx)('img', {
                    src: 'images/'.concat(n.image),
                    className: 'h-full w-full',
                    alt: 'image-new',
                  }),
                }),
                (0, a.jsxs)('div', {
                  className: 'flex flex-col justify-around lg:block',
                  children: [
                    (0, a.jsxs)('div', {
                      className:
                        'mt-0 mb-1 flex flex-row items-center lg:mt-3 lg:mb-3',
                      children: [
                        (0, a.jsx)('div', {
                          className:
                            'rounded-sm bg-[#E7F7F0] px-1 py-1 text-xs font-semibold text-primary lg:px-4 lg:text-base',
                          children: n.topic,
                        }),
                        (0, a.jsx)('div', {
                          className:
                            'px-1 py-1 text-xs font-semibold text-[#6C6C6C] lg:px-4 lg:text-base',
                          children: n.date,
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      className:
                        'text-ellipsis-2 font-saira text-base font-semibold group-hover:text-[#35936a] lg:text-xl',
                      children: n.title,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function C() {
        return (0, a.jsx)('div', {
          className: 'grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-8',
          children: G.map(function (e, n) {
            return (0, a.jsx)(T, { news: e, index: n }, n);
          }),
        });
      }
      var G = [
        {
          image: 'home-news-share-1.png',
          topic: 'Th\xf4ng tin m\xf9a v\u1ee5',
          date: '11/8/2000',
          title:
            'B\u1eadt m\xed 4 c\xe1ch b\xe1n h\xe0ng tr\xean facebook hi\u1ec7u qu\u1ea3 cho ng\u01b0\u1eddi m\u1edbi',
          href: '/',
        },
        {
          image: 'home-news-share-1.png',
          topic: 'Th\xf4ng tin d\u1ecbch h\u1ea1i',
          date: '11/8/2000',
          title:
            'B\u1eadt m\xed 4 c\xe1ch b\xe1n h\xe0ng tr\xean facebook hi\u1ec7u qu\u1ea3 cho ng\u01b0\u1eddi m\u1edbi',
          href: '/',
        },
        {
          image: 'home-news-share-2.png',
          topic: 'Th\xf4ng tin th\u1ecb tr\u01b0\u1eddng',
          date: '11/8/2000',
          title:
            'B\u1eadt m\xed 4 c\xe1ch b\xe1n h\xe0ng tr\xean facebook hi\u1ec7u qu\u1ea3 cho ng\u01b0\u1eddi m\u1edbi',
          href: '/',
        },
      ];
      function A() {
        var e = (0, m.E)('lg');
        return (0, a.jsx)('div', {
          'data-aos': 'fade-up',
          className: 'bg-gray-50 py-8 lg:py-16',
          children: (0, a.jsxs)('div', {
            className: 'main-container ',
            children: [
              (0, a.jsxs)('div', {
                className: 'flex flex-row items-center justify-between',
                children: [
                  (0, a.jsx)(v.D, {
                    text: 'tin t\u1ee9c v\xe0 chia s\u1ebb',
                    className: 'mb-4 lg:mb-8',
                  }),
                  e &&
                    (0, a.jsxs)('div', {
                      className: 'flex cursor-pointer flex-row items-center',
                      children: [
                        (0, a.jsx)('a', {
                          className:
                            'border-transparent bg-transparent font-semibold text-primary no-underline',
                          children: 'Xem th\xeam',
                        }),
                        (0, a.jsx)('i', {
                          className: 'ml-1 text-3xl font-semibold text-primary',
                          children: (0, a.jsx)(y.jfD, {}),
                        }),
                      ],
                    }),
                ],
              }),
              (0, a.jsx)(C, {}),
              !e &&
                (0, a.jsx)('div', {
                  className: 'mt-3 flex flex-row justify-end',
                  children: (0, a.jsxs)('div', {
                    className: 'flex flex-row items-center',
                    children: [
                      (0, a.jsx)('a', {
                        className:
                          'cursor-pointer border-transparent bg-transparent font-semibold text-primary no-underline hover:text-primary-dark',
                        children: 'Xem th\xeam',
                      }),
                      (0, a.jsx)('i', {
                        className: 'ml-2 text-3xl font-semibold text-primary',
                        children: (0, a.jsx)(y.jfD, {}),
                      }),
                    ],
                  }),
                }),
            ],
          }),
        });
      }
      var _ = t(1589);
      function Z() {
        var e = (0, m.E)('lg'),
          n = (0, p.useState)({ index: 0, image: 'tab-3.png' }),
          t = n[0],
          r = n[1];
        return (0, a.jsxs)('div', {
          'data-aos': 'fade',
          'data-aos-delay': '100',
          className:
            'w-full flex-1 rounded-md lg:w-[917px] lg:overflow-hidden lg:bg-transparent',
          children: [
            (0, a.jsx)('div', {
              className: 'lg:bg-transparent',
              children: (0, a.jsx)('div', {
                className:
                  'no-scrollbar mb-3 flex flex-row items-center gap-3 overflow-hidden overflow-x-scroll bg-primary-dark',
                style: {
                  WebkitMaskImage:
                    !e && t.index + 1 < E.length
                      ? 'linear-gradient(270deg,transparent .5%,#fff 20%)'
                      : '',
                },
                children: E.map(function (n, l) {
                  return (0, a.jsx)(
                    'div',
                    {
                      id: n.appName,
                      className: 'min-w-fit lg:min-w-none  '.concat(
                        t.index !== l ? 'border-primary-dark' : ''
                      ),
                      children: (0, a.jsx)('div', {
                        children: (0, a.jsx)(i.Z, {
                          onClick: function () {
                            if (!e) {
                              var t = document.getElementById(n.appName);
                              null === t ||
                                void 0 === t ||
                                t.scrollIntoView({
                                  behavior: 'smooth',
                                  block: 'nearest',
                                  inline: 'center',
                                });
                            }
                            r({ index: l, image: n.image });
                          },
                          className:
                            ' border-0 px-4 font-semibold text-black transition duration-300 ease-in-out hover:bg-none '.concat(
                              t.index !== l
                                ? 'rounded-md bg-white hover:text-black'
                                : 'bg-primary text-white'
                            ),
                          children: n.appName,
                        }),
                      }),
                    },
                    l
                  );
                }),
              }),
            }),
            (0, a.jsxs)('div', {
              className: 'flex flex-col gap-4 lg:flex-row',
              children: [
                (0, a.jsxs)('div', {
                  className:
                    'grow-0 rounded-md bg-white px-6 py-2 lg:h-[395px] lg:py-4',
                  children: [
                    (0, a.jsx)('div', {
                      className: 'mb-4 text-[23px] font-bold text-black ',
                      children: E[t.index].topic,
                    }),
                    E[t.index].contens.map(function (e, n) {
                      return (0,
                      a.jsx)('div', { className: 'mb-3 lg:mb-6', children: (0, a.jsx)(_.b, { content: e, contentClassName: 'text-lg' }, n) }, n);
                    }),
                  ],
                }),
                (0, a.jsx)('img', {
                  src: '/images/'.concat(t.image),
                  alt: 'image',
                  className:
                    'grow-0 rounded-md object-cover lg:h-[395px] lg:w-auto lg:w-[285px] xl:w-[325px]',
                }),
              ],
            }),
          ],
        });
      }
      var E = [
        {
          appName: 'Th\u01b0\u01a1ng m\u1ea1i \u0111i\u1ec7n t\u1eed',
          topic: 'H\u1ec7 sinh th\xe1i GAT',
          contens: [
            'L\xe0 n\u01a1i \u0111\u1ec3 kh\xe1ch h\xe0ng v\xe0 doanh nghi\u1ec7p t\u01b0\u01a1ng t\xe1c v\u1edbi nhau m\xe0 kh\xf4ng ph\u1ea3i th\xf4nGi\u1ea3i ph\xe1p c\xf4ng ngh\u1ec7 t\u1eadp trung t\u1ed1i \u01b0u hi\u1ec7u qu\u1ea3 qu\u1ea3n l\xfd h\u1ec7 th\u1ed1ng k\xeanh ph\xe2n ph\u1ed1i c\u1ee7a doanh nghi\u1ec7p.',
            'D\u1ec5 d\xe0ng qu\u1ea3n l\xfd v\xe0 tuy\u1ec3n c\u1ed9ng t\xe1c vi\xean, \u0111\u1ea1i l\xfd. M\u1edf r\u1ed9ng m\xf4 h\xecnh kinh doanh.',
            'Ti\u1ebft ki\u1ec7m th\u1eddi gian v\xe0 chi ph\xed qu\u1ea3n l\xfd. \u0110\u1ed9t ph\xe1 doanh thu',
            'D\u1ec5 d\xe0ng trong vi\u1ec7c t\xednh to\xe1n khoa h\u1ecdc thu nh\u1eadp cho c\u1ed9ng t\xe1c vi\xean v\xe0 \u0111\u1ea1i l\xfd. ',
          ],
          image: 'tab-3.png',
        },
        {
          appName: 'Truy xu\u1ea5t ngu\u1ed3n g\u1ed1c',
          topic: 'H\u1ec7 sinh th\xe1i GAT',
          contens: [
            'Truy t\xecm l\u1ecbch s\u1eed c\xe1c th\xf4ng tin v\u1ec1 quy tr\xecnh s\u1ea3n xu\u1ea5t, ch\u1ebf bi\u1ebfn, ph\xe2n ph\u1ed1i v\xe0 cho \u0111\u1ebfn khi s\u1ea3n ph\u1ea9m \u0111\u1ebfn \u0111\u01b0\u1ee3c tay ng\u01b0\u1eddi d\xf9ng',
            'N\xe2ng cao v\u1ecb th\u1ebf th\u01b0\u01a1ng hi\u1ec7u cho doanh nghi\u1ec7p, t\u1ea1o d\u1ef1ng ni\u1ec1m tin v\u1edbi ng\u01b0\u1eddi ti\xeau d\xf9ng. T\u1ea1o m\xf4i tr\u01b0\u1eddng kinh doanh minh b\u1ea1ch.',
            'Truy xu\u1ea5t ngu\u1ed3n g\u1ed1c gi\xfap gi\u1ea3m thi\u1ec3u gian l\u1eadn v\xe0 l\xe0m gi\u1ea3 th\u1ef1c ph\u1ea9m. ',
            'Gi\xfap ng\u01b0\u1eddi ti\xeau d\xf9ng mua \u0111\u01b0\u1ee3c c\xe1c s\u1ea3n ph\u1ea9m ch\u1ea5t l\u01b0\u1ee3ng v\u1edbi \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin ngu\u1ed3n g\u1ed1c. ',
          ],
          image: 'tab-2.png',
        },
        {
          appName: 'Nh\u1eadt k\xfd canh t\xe1c',
          topic: 'H\u1ec7 sinh th\xe1i GAT',
          contens: [
            'L\xe0 n\u01a1i \u0111\u1ec3 kh\xe1ch h\xe0ng v\xe0 doanh nghi\u1ec7p tCung c\u1ea5p n\u1ec1n t\u1ea3ng ghi nh\u1eadn l\u1ea1i ho\u1ea1t \u0111\u1ed9ng s\u1ea3n xu\u1ea5t c\u1ee7a ng\u01b0\u1eddi n\xf4ng d\xe2n v\xe0 c\xe1c m\u1ed1c th\u1eddi gian t\u01b0\u01a1ng \u1ee9ng v\u1edbi c\xe1c ho\u1ea1t \u0111\u1ed9ng.',
            'H\u1ed7 tr\u1ee3 thu th\u1eadp d\u1eef li\u1ec7u qu\xe1 tr\xecnh s\u1ea3n xu\u1ea5t, s\u1ed1 h\xf3a v\xe0 cung c\u1ea5p d\u1eef li\u1ec7u cho truy xu\u1ea5t ngu\u1ed3n g\u1ed1c s\u1ea3n ph\u1ea9m n\xf4ng s\u1ea3n.',
            'T\u0103ng n\u0103ng su\u1ea5t canh t\xe1c, c\u1ea3i thi\u1ec7n s\u1ea3n l\u01b0\u1ee3ng v\xe0 ch\u1ea5t l\u01b0\u1ee3ng s\u1ea3n ph\u1ea9m \u0111\u1ed3ng th\u1eddi gi\u1ea3m chi ph\xed c\xe1c ho\u1ea1t \u0111\u1ed9ng canh t\xe1c',
            'Gi\xfap chu\u1ea9n h\xf3a quy tr\xecnh s\u1ea3n xu\u1ea5t theo c\xe1c ti\xeau chu\u1ea9n nh\u01b0 VietGap, GlobalGap v\xe0 Organic.',
          ],
          image: 'tab-3.png',
        },
      ];
      function q() {
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          className:
            'main-container rounded-xl bg-primary-dark px-1 pt-8 pb-3 lg:px-8 lg:pt-16 lg:pb-8 xl:px-16',
          children: [
            (0, a.jsxs)('div', {
              className: 'mb-8 px-3 lg:px-0',
              children: [
                (0, a.jsx)(v.D, {
                  text: 'gi\u1ea3i ph\xe1p gat',
                  className: 'text-white',
                }),
                (0, a.jsx)(f.Q, {
                  text: 'B\u1ed9 gi\u1ea3i ph\xe1p h\xe0ng \u0111\u1ea7u cho ng\xe0nh n\xf4ng nghi\u1ec7p',
                  className: 'mx-auto max-w-lg !text-white',
                }),
              ],
            }),
            (0, a.jsx)('div', {
              className:
                'flex flex-col gap-3 px-2 lg:flex-row lg:gap-10 lg:px-0',
              children: (0, a.jsx)(Z, {}),
            }),
          ],
        });
      }
      function F() {
        var e = (0, m.E)();
        return Object.keys(e).length <= 0
          ? (0, a.jsx)(a.Fragment, {})
          : (0, a.jsxs)('div', {
              'data-aos': 'fade-up',
              className: 'main-container pt-8 lg:p-16 lg:pt-16',
              children: [
                (0, a.jsx)(v.D, {
                  text: 'Chu\u1ed7i gi\xe1 tr\u1ecb GAT',
                  className: 'mb-10',
                }),
                (0, a.jsx)('img', {
                  src: e.lg
                    ? '/images/home-string-value.png'
                    : '/images/home-string-value-hor.png',
                  alt: 'home-string-value',
                  className: '  '.concat(
                    e.lg ? 'w-full' : 'mx-auto w-full max-w-lg'
                  ),
                }),
              ],
            });
      }
      function z() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(x, {}),
            (0, a.jsx)(b, { text: '\u01afu \u0111i\u1ec3m GAT' }),
            (0, a.jsx)(q, {}),
            (0, a.jsx)(F, {}),
            (0, a.jsx)(b, { text: 'Gi\xe1 tr\u1ecb c\u1ed9ng \u0111\u1ed3ng' }),
            (0, a.jsx)(r.V, {
              title: '\u0110\u1ed1i t\xe1c C\u1ee6A gREEN aGRI',
              className: 'bg-[#E7F7F0]',
            }),
            (0, a.jsx)(r.V, { title: 'Kh\xe1ch h\xe0ng Green Agri' }),
            (0, a.jsx)(A, {}),
          ],
        });
      }
      var D = t(6875);
      function I() {
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(D.Z, {}), (0, a.jsx)(z, {})],
        });
      }
    },
  },
  function (e) {
    e.O(0, [395, 774, 888, 179], function () {
      return (n = 8312), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
