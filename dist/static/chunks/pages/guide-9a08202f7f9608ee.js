(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1],
  {
    2679: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/guide',
        function () {
          return n(1286);
        },
      ]);
    },
    6875: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(6042),
        i = n(5893),
        a = n(9008),
        o = n.n(a),
        s = n(1163),
        c = {
          title: 'GAT',
          siteName: 'GAT',
          description: 'GAT Landing',
          url: 'https://tsnext-tw.thcl.dev',
          type: 'website',
          robots: 'follow, index',
          image: 'https://tsnext-tw.thcl.dev/images/large-og.png',
        };
      function l(e) {
        var t = (0, s.useRouter)(),
          n = (0, r.Z)({}, c, e);
        return (
          (n.title = e.templateTitle
            ? ''.concat(e.templateTitle, ' | ').concat(n.siteName)
            : n.title),
          (0, i.jsxs)(o(), {
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
              p.map(function (e) {
                return (0, i.jsx)('link', (0, r.Z)({}, e), e.href);
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
    7175: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(6042),
        i = n(9396),
        a = n(9534),
        o = n(5893),
        s = n(7294),
        c = n(9866),
        l = n(1664),
        p = n.n(l),
        f = s.forwardRef(function (e, t) {
          var n = e.children,
            s = e.href,
            l = e.openNewTab,
            f = e.className,
            m = e.nextLinkProps,
            h = (0, a.Z)(e, [
              'children',
              'href',
              'openNewTab',
              'className',
              'nextLinkProps',
            ]);
          return (
            void 0 !== l ? l : s && !s.startsWith('/') && !s.startsWith('#')
          )
            ? (0, o.jsx)(
                'a',
                (0, i.Z)(
                  (0, r.Z)(
                    {
                      ref: t,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      href: s,
                    },
                    h
                  ),
                  { className: (0, c.Z)('cursor-newtab', f), children: n }
                )
              )
            : (0, o.jsx)(
                p(),
                (0, i.Z)((0, r.Z)({ href: s }, m), {
                  children: (0, o.jsx)(
                    'a',
                    (0, i.Z)((0, r.Z)({ ref: t }, h), {
                      className: f,
                      children: n,
                    })
                  ),
                })
              );
        }),
        m = s.forwardRef(function (e, t) {
          var n = e.children,
            s = e.className,
            l = (0, a.Z)(e, ['children', 'className']);
          return (0,
          o.jsx)(f, (0, i.Z)((0, r.Z)({ ref: t }, l), { className: (0, c.Z)('animated-underline custom-link inline-flex items-center font-medium', 'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2', 'border-b border-dotted border-dark hover:border-black/0', s), children: n }));
        });
      function h(e) {
        var t = e.children,
          n = e.className,
          s = e.direction,
          l = void 0 === s ? 'right' : s,
          p = e.as,
          f = (0, a.Z)(e, ['children', 'className', 'direction', 'as']),
          h = p || m;
        return (0, o.jsxs)(
          h,
          (0, i.Z)((0, r.Z)({}, f), {
            className: (0, c.Z)(
              'group gap-[0.25em]',
              'left' === l && 'flex-row-reverse',
              n
            ),
            children: [
              (0, o.jsx)('span', { children: t }),
              (0, o.jsxs)('svg', {
                viewBox: '0 0 16 16',
                height: '1em',
                width: '1em',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                className: (0, c.Z)(
                  'relative',
                  'transition-transform duration-200',
                  'right' === l ? 'motion-safe:-translate-x-1' : 'rotate-180',
                  'group-hover:translate-x-0'
                ),
                children: [
                  (0, o.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z',
                  }),
                  (0, o.jsx)('path', {
                    stroke: 'currentColor',
                    d: 'M1.75 8H11',
                    strokeWidth: '1.5',
                    strokeLinecap: 'round',
                    className: (0, c.Z)(
                      'origin-left transition-all duration-200',
                      'opacity-0 motion-safe:-translate-x-1',
                      'group-hover:translate-x-0 group-hover:opacity-100'
                    ),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    3497: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(5893),
        i = (n(7294), n(9352)),
        a = n(7175),
        o = n(6875);
      function s() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(o.Z, { templateTitle: 'Features in development' }),
            (0, r.jsx)('main', {
              children: (0, r.jsx)('section', {
                className: 'bg-white',
                children: (0, r.jsxs)('div', {
                  className:
                    'layout flex min-h-screen flex-col items-center justify-center text-center text-black',
                  children: [
                    (0, r.jsx)(i.Chf, {
                      size: 60,
                      className:
                        'drop-shadow-glow animate-flicker text-red-500',
                    }),
                    (0, r.jsx)('h1', {
                      className: 'mt-8 text-4xl md:text-6xl',
                      children: '\u0110ang ph\xe1t tri\u1ec3n',
                    }),
                    (0, r.jsx)(a.Z, {
                      className: 'mt-4 md:text-lg',
                      href: '/',
                      children: 'Quay l\u1ea1i trang ch\u1ee7',
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    1286: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n(5893),
        i = n(6875),
        a = n(3497);
      function o() {
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(i.Z, {}), (0, r.jsx)(a.Z, {})],
        });
      }
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 2679), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
