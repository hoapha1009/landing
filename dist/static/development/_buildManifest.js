self.__BUILD_MANIFEST = {
  __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/about-us': ['static\u002Fchunks\u002Fpages\u002Fabout-us.js'],
  '/features': ['static\u002Fchunks\u002Fpages\u002Ffeatures.js'],
  sortedPages: [
    '\u002F_app',
    '\u002F_error',
    '\u002Fabout-us',
    '\u002Ffeatures',
  ],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
