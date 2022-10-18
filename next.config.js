/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});
module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: false,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
});

// module.exports = {
//   eslint: {
//     dirs: ['src'],
//   },
//   reactStrictMode: false,

//   // Uncoment to add domain whitelist
//   // images: {
//   //   domains: [
//   //     'res.cloudinary.com',
//   //   ],
//   // },

//   // SVGR
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: [
//         {
//           loader: '@svgr/webpack',
//           options: {
//             typescript: true,
//             icon: true,
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };
