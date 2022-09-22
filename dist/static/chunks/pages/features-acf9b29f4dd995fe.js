(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [907],
  {
    4138: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/features',
        function () {
          return t(8756);
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
        s = t.n(i),
        l = t(1163),
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
        var n = (0, l.useRouter)(),
          t = (0, a.Z)({}, c, e);
        return (
          (t.title = e.templateTitle
            ? ''.concat(e.templateTitle, ' | ').concat(t.siteName)
            : t.title),
          (0, r.jsxs)(s(), {
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
              h.map(function (e) {
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
      var h = [
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
    7296: function (e, n, t) {
      'use strict';
      t.d(n, {
        b: function () {
          return c;
        },
      });
      var a = t(5893),
        r = t(1664),
        i = t.n(r),
        s = t(7294),
        l = t(8193);
      function c(e) {
        var n = e.breadcrumbs,
          t = e.className,
          r = void 0 === t ? '' : t;
        return (0, a.jsx)('div', {
          'data-aos': 'fade',
          className:
            'main-container flex flex-row items-center overflow-hidden text-sm font-semibold '.concat(
              r
            ),
          children: n.map(function (e, n) {
            return (0,
            a.jsx)(s.Fragment, { children: e.href ? (0, a.jsxs)('div', { className: 'flex shrink-0 grow-0 items-center', children: [(0, a.jsx)(i(), { href: e.href, children: (0, a.jsx)('a', { className: '', children: (0, a.jsx)('div', { className: 'whitespace-nowrap lowercase !text-primary transition-all duration-200 first-letter:uppercase hover:text-primary hover:underline', children: e.label }) }) }), (0, a.jsx)('div', { className: 'px-1.5', children: (0, a.jsx)(l.Td4, { className: 'font-semibold !text-primary' }) })] }) : (0, a.jsx)('div', { className: 'flex-1 whitespace-nowrap first-letter:uppercase', children: ((t = e.label), t ? (t.split(' ').length > 10 ? ''.concat(t.split(' ').slice(0, 10).join(' '), '...') : t) : '') }) }, n);
            var t;
          }),
        });
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
        s = t(172),
        l = t(2997),
        c = t(7649),
        o = t(5186),
        h = t(9447),
        p = t(4002),
        g = t(6653);
      function u() {
        var e = (0, g.E)('lg');
        return (0, a.jsx)(h.t, {
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
                children: m.map(function (e, n) {
                  return (0,
                  a.jsx)(p.o, { className: 'w-40', children: (0, a.jsx)(i(), { href: e.href, children: (0, a.jsx)('a', { children: (0, a.jsx)('img', { src: '/images/'.concat(e.url), alt: e.url, className: 'object-contain' }) }) }) }, n);
                }),
              })
            : (0, a.jsx)(a.Fragment, {
                children: d.map(function (e, n) {
                  return (0, a.jsx)(
                    p.o,
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
      s.Z.use([l.Z, c.Z, o.Z]);
      var m = [
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
        x = t(5383);
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
              (0, a.jsx)(x.D, { text: t }),
              (0, a.jsx)('div', {
                className:
                  'mt-8 rounded-md border border-gray-200 bg-white p-12 shadow-md',
                children: (0, a.jsx)(u, {}),
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
    8756: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return C;
          },
        });
      var a = t(5893),
        r = t(6653),
        i = t(7296),
        s = t(92),
        l = t(8881),
        c = t(5383);
      function o(e) {
        var n = e.image,
          t = e.title,
          r = e.subtitle,
          i = e.className,
          s = void 0 === i ? '' : i,
          l = e.titleClassName,
          c = void 0 === l ? '' : l,
          o = e.subtitleClassName,
          h = void 0 === o ? '' : o,
          p = e.wrapContentClassName,
          g = void 0 === p ? '' : p,
          u = e.imageClassName,
          m = void 0 === u ? '' : u;
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          className:
            'my-auto flex max-w-fit items-center  lg:mx-32 lg:mt-3 lg:h-full lg:flex-row  xl:ml-[13rem] xl:mr-[8rem] '.concat(
              s
            ),
          children: [
            (0, a.jsx)('div', {
              'data-aos': 'fade-up',
              'data-aos-delay': 300,
              className: 'w-7/12 lg:w-2/5 '.concat(m),
              children: (0, a.jsx)('img', {
                src: n,
                alt: 'image',
                className: 'w-full',
              }),
            }),
            (0, a.jsxs)('div', {
              className: ''.concat(g || 'lg:ml-11 '),
              children: [
                (0, a.jsx)('div', {
                  'data-aos': 'fade-up',
                  'data-aos-delay': 100,
                  className:
                    'my-auto  mb-4 font-bold uppercase leading-[1.4] lg:text-4xl  '.concat(
                      c
                    ),
                  children: t,
                }),
                r &&
                  (0, a.jsx)('div', {
                    'data-aos': 'fade-up',
                    'data-aos-delay': 150,
                    className:
                      'max-w-[600px]  !leading-[1.7] text-gray-600 lg:text-xl '.concat(
                        h
                      ),
                    children: r,
                  }),
              ],
            }),
          ],
        });
      }
      var h = t(797),
        p = t(1664),
        g = t.n(p),
        u = t(172),
        m = t(2997),
        d = t(7649),
        x = t(5186),
        f = t(9447),
        v = t(4002);
      function b() {
        var e = (0, r.E)('lg');
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          className: 'pt-16',
          children: [
            (0, a.jsx)(c.D, {
              text: 'C\xe1c t\xednh n\u0103ng kh\xe1c',
              className: 'mb-10',
            }),
            (0, a.jsx)(f.t, {
              centeredSlides: !0,
              slidesPerView: 1.5,
              spaceBetween: 12,
              grabCursor: !0,
              className: 'pb-12',
              loop: !0,
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              pagination: {
                bulletActiveClass: 'bg-primary',
                clickable: !0,
                dynamicBullets: !0,
                bulletClass:
                  'inline-block w-3 h-3 bg-gray-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-primary transform translate-y-3',
              },
              children: (0, h.Z)(Array(5)).map(function (n, t) {
                return (0,
                a.jsx)(v.o, { className: e ? '' : '!w-[500px]', children: (0, a.jsx)(g(), { href: '/', children: (0, a.jsx)('a', { children: (0, a.jsx)('img', { src: '/images/features-other.png', alt: 'image', className: 'w-full' }) }) }) }, t);
              }),
            }),
          ],
        });
      }
      function j() {
        return (0, a.jsx)(f.t, {
          slidesPerView: 1,
          spaceBetween: 0,
          grabCursor: !0,
          className: 'mx-auto pb-10',
          loop: !0,
          freeMode: !1,
          autoplay: { delay: 3e3, disableOnInteraction: !1 },
          pagination: {
            bulletActiveClass: 'bg-primary',
            clickable: !0,
            bulletClass:
              'inline-block w-3 h-3 bg-gray-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-primary transform translate-y-3',
          },
          children: w.map(function (e, n) {
            return (0,
            a.jsx)(v.o, { className: '', children: (0, a.jsx)(o, { className: 'flex flex-col', title: e.title, titleClassName: '!leading-[1.3] !text-[23px]', subtitle: e.subtitle, image: e.image, wrapContentClassName: 'mt-4' }, n) }, n);
          }),
        });
      }
      function N() {
        var e = (0, r.E)('lg');
        return (0, a.jsx)('div', {
          className:
            "relative mb-12 flex h-[476px] max-h-[476px] w-full flex-row overflow-hidden bg-[url('/images/bg.png')] bg-cover bg-no-repeat lg:mb-32 lg:h-[725px] lg:max-h-[725px]",
          children: (0, a.jsx)('div', {
            className: 'main-container',
            children: (0, a.jsx)(o, {
              title: 'T\xednh n\u0103ng ch\xednh gi\u1ea3i ph\xe1p GAT',
              image: '/images/features-banner.png',
              imageClassName: 'lg:w-[45%]',
              titleClassName: 'text-white  lg:text-6xl  '.concat(
                e ? 'max-w-400px' : 'max-w-[285px] mark-gradient ',
                '  text-[23px] lg:text-left text-center !leading-[1.4] '
              ),
              className: 'mt-10 flex h-auto flex-col-reverse lg:mt-0',
            }),
          }),
        });
      }
      function y() {
        var e = (0, r.E)('lg');
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)('div', {
              children:
                !e &&
                (0, a.jsx)(i.b, {
                  breadcrumbs: [
                    { label: 'Trang ch\u1ee7', href: '/' },
                    { label: 'T\xednh n\u0103ng' },
                  ],
                  className: 'pt-2 pb-6',
                }),
            }),
            (0, a.jsx)(N, {}),
            (0, a.jsxs)('div', {
              className: 'main-container',
              children: [
                (0, a.jsxs)('div', {
                  'data-aos': 'fade-up',
                  className: '',
                  children: [
                    (0, a.jsx)(c.D, {
                      text: 'Chi ti\u1ebft t\xednh n\u0103ng \u01afu \u0111\xe3i',
                      className: '',
                    }),
                    (0, a.jsx)(l.Q, {
                      text: 'CNV Loyalty \u0111\xe3 \u0111\u1ed3ng h\xe0nh c\xf9ng h\u01a1n 500+ doanh nghi\u1ec7p x\xe2y d\u1ef1ng App ri\xeang mang t\xean th\u01b0\u01a1ng hi\u1ec7u, t\u1ea1o nh\xf3m kh\xe1ch h\xe0ng trung th\xe0nh, gi\xfap t\u0103ng doanh thu v\xe0 h\u1ed7 tr\u1ee3 qu\xe1 tr\xecnh ch\u0103m s\xf3c kh\xe1ch h\xe0ng',
                      className: 'mx-auto mb-12 max-w-screen-lg text-gray-600',
                    }),
                  ],
                }),
                e
                  ? w.map(function (e, n) {
                      return (0,
                      a.jsx)(o, { className: ''.concat(e.reverse ? 'lg:flex-row-reverse' : '', ' '), title: e.title, titleClassName: '!leading-[1.3]', subtitle: e.subtitle, image: e.image, wrapContentClassName: e.reverse ? 'mr-28' : 'ml-12' }, n);
                    })
                  : (0, a.jsx)(j, {}),
              ],
            }),
            (0, a.jsx)(b, {}),
            (0, a.jsx)(s.V, { title: 'Kh\xe1ch h\xe0ng green argi' }),
          ],
        });
      }
      u.Z.use([m.Z, d.Z, x.Z]);
      var w = [
          {
            title: 'Qu\u1ea3n l\xfd danh s\xe1ch \u01b0u \u0111\xe3i',
            subtitle:
              'Kh\xe1ch h\xe0ng c\xf3 th\u1ec3 qu\u1ea3n l\xfd m\u1ecdi \u01b0u \u0111\xe3i c\u1ee7a m\xecnh m\u1ed9t c\xe1ch d\u1ec5 d\xe0ng. Khi nh\xecn v\xe0o danh s\xe1ch \u01b0u \u0111\xe3i, kh\xe1ch h\xe0ng s\u1ebd bi\u1ebft m\xecnh \u0111ang c\xf3 bao nhi\xeau \u01b0u \u0111\xe3i \u0111\xe3 d\xf9ng, \u01b0u \u0111\xe3i ch\u01b0a d\xf9ng v\xe0 c\u1ea3 h\u1ea1n s\u1eed d\u1ee5ng c\u1ee7a nh\u1eefng \u01b0u \u0111\xe3i \u0111\xf3.',
            image: '/images/features-banner.png',
            reverse: !1,
          },
          {
            title:
              'Qu\u1ea3n l\xfd \u01b0u \u0111\xe3i theo th\u01b0\u01a1ng hi\u1ec7u',
            subtitle:
              'M\u1ed7i th\u01b0\u01a1ng hi\u1ec7u s\u1ebd c\xf3 nhi\u1ec1u \u01b0u \u0111\xe3i kh\xe1c nhau. Khi t\u1ed5ng h\u1ee3p l\u1ea1i nhi\u1ec1u th\u01b0\u01a1ng hi\u1ec7u th\xec s\u1ebd c\xf3 c\xe0ng nhi\u1ec1u \u01b0u \u0111\xe3i. Ch\xednh v\xec v\u1eady, t\xednh n\u0103ng n\xe0y gi\xfap kh\xe1ch h\xe0ng qu\u1ea3n l\xfd \u01b0u \u0111\xe3i c\u1ee7a m\xecnh theo t\u1eebng th\u01b0\u01a1ng hi\u1ec7u \u0111\u1ec3 d\u1ec5 d\xe0ng h\u01a1n trong vi\u1ec7c s\u1eed d\u1ee5ng.',
            image: '/images/features-banner-2.png',
            reverse: !0,
          },
          {
            title: 'Hi\u1ec3n th\u1ecb l\u1ecbch s\u1eed s\u1eed d\u1ee5ng',
            subtitle:
              'T\xednh n\u0103ng n\xe0y cho ph\xe9p kh\xe1ch h\xe0ng n\u1eafm \u0111\u01b0\u1ee3c l\u1ecbch s\u1eed s\u1eed d\u1ee5ng \u01b0u \u0111\xe3i c\u1ee7a m\xecnh khi c\u1ea7n thi\u1ebft. \u0110\u1ed3ng th\u1eddi, n\xf3 s\u1ebd gi\xfap kh\xe1ch h\xe0ng kh\xf4ng b\u1ecf s\xf3t \u01b0u \u0111\xe3i n\xe0o. Ngo\xe0i ra, khi c\xf3 b\u1ea5t k\xec s\u1ef1 c\u1ed1 n\xe0o v\u1ec1 vi\u1ec7c s\u1eed d\u1ee5ng \u01b0u \u0111\xe3i th\xec ch\u1ec9 c\u1ea7n v\xe0o l\u1ecbch s\u1eed s\u1eed d\u1ee5ng, v\u1ea5n \u0111\u1ec1 c\u1ee7a kh\xe1ch h\xe0ng s\u1ebd \u0111\u01b0\u1ee3c gi\u1ea3i quy\u1ebft d\u1ec5 d\xe0ng h\u01a1n.',
            image: '/images/features-banner.png',
            reverse: !1,
          },
          {
            title:
              'Qu\u1ea3n l\xfd \u01b0u \u0111\xe3i theo th\u01b0\u01a1ng hi\u1ec7u',
            subtitle:
              'M\u1ed7i th\u01b0\u01a1ng hi\u1ec7u s\u1ebd c\xf3 nhi\u1ec1u \u01b0u \u0111\xe3i kh\xe1c nhau. Khi t\u1ed5ng h\u1ee3p l\u1ea1i nhi\u1ec1u th\u01b0\u01a1ng hi\u1ec7u th\xec s\u1ebd c\xf3 c\xe0ng nhi\u1ec1u \u01b0u \u0111\xe3i. Ch\xednh v\xec v\u1eady, t\xednh n\u0103ng n\xe0y gi\xfap kh\xe1ch h\xe0ng qu\u1ea3n l\xfd \u01b0u \u0111\xe3i c\u1ee7a m\xecnh theo t\u1eebng th\u01b0\u01a1ng hi\u1ec7u \u0111\u1ec3 d\u1ec5 d\xe0ng h\u01a1n trong vi\u1ec7c s\u1eed d\u1ee5ng.',
            image: '/images/features-banner-2.png',
            reverse: !0,
          },
        ],
        k = t(6875);
      function C() {
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(k.Z, {}), (0, a.jsx)(y, {})],
        });
      }
    },
  },
  function (e) {
    e.O(0, [617, 395, 774, 888, 179], function () {
      return (n = 4138), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
