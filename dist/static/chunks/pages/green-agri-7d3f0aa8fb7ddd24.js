(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [297],
  {
    8133: function (n, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/green-agri',
        function () {
          return i(5094);
        },
      ]);
    },
    6154: function (n, t, i) {
      'use strict';
      i.d(t, {
        Z: function () {
          return e;
        },
      });
      var a = i(5893);
      function e(n) {
        var t = n.index,
          i = n.item,
          e = n.className,
          h = n.contentClass,
          g = n.imageClass,
          r = (200 * t).toString();
        return (0, a.jsxs)('div', {
          'data-aos': 'fade-up',
          'data-aos-delay': r,
          className:
            'flex h-full flex-col items-center justify-between rounded-xl border border-gray-100 shadow '.concat(
              e
            ),
          children: [
            (0, a.jsx)('img', {
              src: i.img.url,
              alt: i.img.alt,
              height: '100%',
              className: 'object-contain '.concat(g),
            }),
            (0, a.jsx)('div', {
              className: 'mt-auto h-full text-center '.concat(h),
              children: i.content,
            }),
          ],
        });
      }
    },
    5094: function (n, t, i) {
      'use strict';
      i.r(t),
        i.d(t, {
          default: function () {
            return A;
          },
        });
      var a = i(5893),
        e = i(6154),
        h = i(8881),
        g = i(5383),
        r = i(9447),
        c = i(4002);
      function s() {
        return (0, a.jsxs)('div', {
          className: 'main-container py-8 text-center lg:pt-24 lg:pb-6',
          'data-aos': 'fade-up',
          children: [
            (0, a.jsx)(g.D, { text: 'V\u1ec1 green agri' }),
            (0, a.jsx)(h.Q, {
              className: 'mx-auto lg:w-3/4',
              text: 'L\xe0 gi\u1ea3i ph\xe1p th\u01b0\u01a1ng m\u1ea1i \u0111i\u1ec7n t\u1eed v\xe0 k\xeanh ph\xe2n ph\u1ed1i trong ng\xe0nh n\xf4ng nghi\u1ec7p. H\u1ec7 th\u1ed1ng h\u1ed7 tr\u1ee3 n\u1ec1n t\u1ea3ng c\xf4ng ngh\u1ec7 cho doanh nghi\u1ec7p kinh doanh truy\u1ec1n th\u1ed1ng offline v\xe0 k\xeanh online hi\u1ec7u qu\u1ea3. H\u1ed7 tr\u1ee3 doanh nghi\u1ec7p m\u1edf r\u1ed9ng k\xeanh ph\xe2n ph\u1ed1i \u0111\u1ebfn c\xe1c \u0111\u1ea1i l\xfd c\xe1c t\u1ec9nh, v\xe0 ph\xe1t tri\u1ec3n m\u1ea1ng l\u01b0\u1edbi sales/ c\u1ed9ng t\xe1c vi\xean',
            }),
            (0, a.jsx)(r.t, {
              slidesPerView: 1,
              spaceBetween: 0,
              centeredSlides: !0,
              grabCursor: !0,
              className: 'mx-auto w-full pb-10 lg:w-2/3',
              loop: !0,
              freeMode: !1,
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              pagination: {
                bulletActiveClass: 'bg-primary',
                clickable: !0,
                bulletClass:
                  'inline-block w-3 h-3 bg-gray-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-primary transform translate-y-3',
              },
              children: o.map(function (n, t) {
                return (0,
                a.jsx)(c.o, { className: '', children: (0, a.jsx)('img', { src: '/images/'.concat(n.url), alt: n.url, height: '100%', className: 'mx-auto rounded-lg object-contain' }) }, t);
              }),
            }),
            (0, a.jsx)('div', {
              className:
                'mt-8 grid w-full auto-rows-fr grid-cols-2 gap-4 px-0 md:grid-cols-4 lg:gap-5',
              children: l.map(function (n, t) {
                return (0,
                a.jsx)(e.Z, { index: t + 1, item: n, className: 'gap-5 bg-gray-50 p-4 text-lg lg:gap-8 lg:p-8', contentClass: 'text-gray-600' }, t);
              }),
            }),
          ],
        });
      }
      var l = [
          {
            img: { url: '/images/automation.png', alt: 'about-green-agri-1' },
            content:
              'T\u1ef1 \u0111\u1ed9ng h\xf3a qu\xe1 tr\xecnh b\xe1n h\xe0ng cho th\xe0nh vi\xean k\xeanh ph\xe2n ph\u1ed1i',
          },
          {
            img: { url: '/images/update.png', alt: 'about-green-agri-2' },
            content:
              'C\u1eadp nh\u1eadt, t\u1ed5ng h\u1ee3p v\xe0 b\xe1o c\xe1o t\xecnh h\xecnh c\u1ee7a \u0111\u1ed9i ng\u0169 b\xe1n h\xe0ng',
          },
          {
            img: { url: '/images/handle.png', alt: 'about-green-agri-3' },
            content:
              'Ch\u1ee7 \u0111\u1ed9ng ki\u1ec3m so\xe1t h\xe0ng t\u1ed3n kho, x\u1eed l\xfd \u0111\u01a1n h\xe0ng,\u2026 ',
          },
          {
            img: { url: '/images/information.png', alt: 'about-green-agri-4' },
            content: 'Ki\u1ec3m so\xe1t th\xf4ng tin ch\xednh x\xe1c',
          },
        ],
        o = [
          { url: 'about-greenAgri-1.png', alt: 'about-greenAgri-1' },
          { url: 'about-greenAgri-2.png', alt: 'about-greenAgri-2' },
          { url: 'about-greenAgri-3.png', alt: 'about-greenAgri-3' },
          { url: 'about-greenAgri-4.png', alt: 'about-greenAgri-4' },
        ],
        u = i(1337);
      function p() {
        return (0, a.jsx)('div', {
          className: 'lg:pt-10',
          'data-aos': 'fade-up',
          children: (0, a.jsxs)('div', {
            className:
              'main-container rounded-xl bg-primary-dark pt-8 pb-6 md:p-8 lg:p-10 xl:p-16',
            children: [
              (0, a.jsx)(g.D, {
                text: 'L\u1ee3i \xedch c\u1ee7a green agri',
                className: 'text-white',
              }),
              (0, a.jsx)('div', {
                className:
                  'mx-2 mt-20 grid gap-20 md:auto-rows-fr lg:mt-16 lg:grid-cols-3 lg:gap-8',
                children: m.map(function (n, t) {
                  return (0, a.jsx)(u.r, { item: n }, t);
                }),
              }),
            ],
          }),
        });
      }
      var m = [
          {
            img: '/images/coop.png',
            title: 'Doanh nghi\u1ec7p',
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
                  'T\u0103ng doanh thu hi\u1ec7u qu\u1ea3 qua k\xeanh ph\xe2n ph\u1ed1i online c\u0169ng nh\u01b0 \u0111\u1ed9i ng\u0169 CTV',
              },
              {
                content:
                  'X\xf3a b\u1ecf r\xe0o c\u1ea3n \u0111\u1ecba l\xfd, l\u1ee3i \xedch nh\xf3m. Gi\u1ea3m thi\u1ec3u kh\xf3 kh\u0103n trong t\u01b0 v\u1ea5n, \u0111\xe0o t\u1ea1o v\xe0 v\u1eadn h\xe0nh',
              },
            ],
          },
          {
            img: '/images/group.png',
            title: 'K\xeanh ph\xe2n ph\u1ed1i',
            options: [
              {
                content:
                  'N\u1ec1n t\u1ea3ng cho vi\u1ec7c v\u1eadn h\xe0nh, ch\u0103m s\xf3c kh\xe1ch h\xe0ng, qu\u1ea3n l\xfd nh\xe2n vi\xean v\xe0 CTV',
              },
              {
                content:
                  'C\u1eadp nh\u1eadt th\xf4ng tin, ch\xednh s\xe1ch gi\xe1, ch\xednh s\xe1ch t\xedch l\u0169y m\u1ed9t c\xe1ch nhanh ch\xf3ng',
              },
              {
                content:
                  '\u0110a d\u1ea1ng k\xeanh ph\xe2n ph\u1ed1i b\xe1n s\u1ec9 v\xe0 l\u1ebb',
              },
              {
                content:
                  'C\xe2n \u0111\u1ed1i ng\xe2n s\xe1ch kinh doanh. \xc1p d\u1ee5ng ph\u01b0\u01a1ng th\u1ee9c dropshipping',
              },
            ],
          },
          {
            img: '/images/user.png',
            title: 'Ng\u01b0\u1eddi d\xf9ng',
            options: [
              {
                content:
                  '\u0110\u1ea3m b\u1ea3o mua h\xe0ng ch\xednh h\xe3ng \u0111\xfang k\xeanh ph\xe2n ph\u1ed1i c\u1ee7a doanh nghi\u1ec7p v\u1edbi gi\xe1 ni\xeam y\u1ebft',
              },
              {
                content:
                  'D\u1ec5 ti\u1ebfp c\u1eadn v\xe0 tham gia ch\u01b0\u01a1ng tr\xecnh \u01b0u \u0111\xe3i, khuy\u1ebfn m\xe3i, ch\u0103m s\xf3c kh\xe1ch h\xe0ng t\u1eeb doanh nghi\u1ec7p',
              },
              {
                content:
                  '\u0110\u01b0\u1ee3c t\xedch l\u0169y \u0111i\u1ec3m v\xe0 h\u1ea1ng th\xe0nh vi\xean khi mua h\xe0ng t\u1ea1i doanh nghi\u1ec7p hay t\u1ea1i t\u1ea5t c\u1ea3 c\xe1c k\xeanh ph\xe2n ph\u1ed1i',
              },
              {
                content:
                  'C\xf3 th\u1ec3 ki\u1ebfm th\xeam thu nh\u1eadp t\u1eeb c\xe1c ch\xednh s\xe1ch c\u1ed9ng t\xe1c vi\xean, ch\xednh s\xe1ch mua s\u1ec9 c\u1ee7a doanh nghi\u1ec7p',
              },
            ],
          },
        ],
        d = i(9392);
      function x() {
        return (0, a.jsxs)('div', {
          className: 'py-8 lg:py-24',
          'data-aos': 'fade-up',
          children: [
            (0, a.jsx)(g.D, {
              text: 'c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng kh\xe1ch h\xe0ng c\u1ee7a green agri',
              className: 'mx-auto mb-10 lg:max-w-lg',
            }),
            (0, a.jsx)('div', {
              className:
                'main-container mx-2.5 grid auto-rows-fr grid-cols-2 gap-4 lg:mx-auto lg:grid-cols-4 lg:gap-8',
              children: b.map(function (n, t) {
                return (0,
                a.jsx)(e.Z, { index: t + 1, item: n, className: 'gap-6 bg-gray-50 p-4 text-gray-600 lg:p-8' }, t);
              }),
            }),
          ],
        });
      }
      var b = [
          {
            img: { url: '/images/local.png', alt: 'local-image' },
            content: 'Ch\xednh quy\u1ec1n \u0111\u1ecba ph\u01b0\u01a1ng',
          },
          {
            img: { url: '/images/enterprise.png', alt: 'enterprise-image' },
            content: 'Doanh nghi\u1ec7p n\xf4ng nghi\u1ec7p',
          },
          {
            img: {
              url: '/images/research-unit.png',
              alt: 'research-unit-image',
            },
            content:
              '\u0110\u01a1n v\u1ecb nghi\xean c\u1ee9u n\xf4ng nghi\u1ec7p',
          },
          {
            img: { url: '/images/third.png', alt: 'third-party-image' },
            content: 'C\xe1c b\xean th\u1ee9 3',
          },
        ],
        v = i(3884),
        f = i(92),
        k = i(6653),
        j = i(7296);
      function N() {
        var n = (0, k.E)('lg');
        return (0, a.jsxs)('div', {
          className: '',
          children: [
            !n &&
              (0, a.jsx)(j.b, {
                breadcrumbs: [
                  { label: 'Trang ch\u1ee7', href: '/' },
                  { label: 'Green Agri' },
                ],
                className: 'pb-3',
              }),
            (0, a.jsx)(d.J, { title: y, options: w, img: C }),
            (0, a.jsx)(s, {}),
            (0, a.jsx)(p, {}),
            (0, a.jsx)(x, {}),
            (0, a.jsx)(f.V, {
              title: '\u0111\u1ed1i t\xe1c green agri',
              className: 'bg-[#E7F7F0]',
            }),
            (0, a.jsx)(v.l, {}),
          ],
        });
      }
      var y =
          'GreenAgri - Gi\u1ea3i ph\xe1p th\u01b0\u01a1ng m\u1ea1i \u0111i\u1ec7n t\u1eed v\xe0 k\xeanh ph\xe2n ph\u1ed1i.',
        w = [
          {
            content:
              'S\u1ed1 h\xf3a d\u1eef li\u1ec7u k\xeanh ph\xe2n ph\u1ed1i, kh\xe1ch h\xe0ng; h\u1ea1n ch\u1ebf r\u1ee7i ro v\u1ec1 s\u1ef1 ph\u1ee5 thu\u1ed9c k\xeanh ph\xe2n ph\u1ed1i; ch\u1ee7 \u0111\u1ed9ng s\u1ea3n xu\u1ea5t h\xe0ng h\xf3a t\u1eeb s\u1ed1 li\u1ec7u mua h\xe0ng s\u1ec9, l\u1ebb',
          },
          {
            content:
              'C\xf3 gi\u1ea3i ph\xe1p c\xf4ng ngh\u1ec7 tr\u1ef1c quan h\u1ed7 tr\u1ee3 trong vi\u1ec7c v\u1eadn h\xe0nh, ch\u0103m s\xf3c kh\xe1ch h\xe0ng v\xe0 qu\u1ea3n l\xfd nh\xe2n vi\xean, c\u1ed9ng t\xe1c vi\xean',
          },
          {
            content:
              '\u0110\u1ea3m b\u1ea3o mua h\xe0ng ch\xednh h\xe3ng \u0111\xfang k\xeanh ph\xe2n ph\u1ed1i c\u1ee7a doanh nghi\u1ec7p v\u1edbi gi\xe1 ni\xeam y\u1ebft',
          },
        ],
        C = { src: '/images/green-agri-banner.png', alt: 'green-agri-banner' },
        _ = i(6875);
      function A() {
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(_.Z, {}), (0, a.jsx)(N, {})],
        });
      }
    },
  },
  function (n) {
    n.O(0, [617, 445, 395, 270, 774, 888, 179], function () {
      return (t = 8133), n((n.s = t));
      var t;
    });
    var t = n.O();
    _N_E = t;
  },
]);
