self.__BUILD_MANIFEST = {
  __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/features': ['static\u002Fchunks\u002Fpages\u002Ffeatures.js'],
  '/green-agri': ['static\u002Fchunks\u002Fpages\u002Fgreen-agri.js'],
  sortedPages: [
    '\u002F_app',
    '\u002F_error',
    '\u002Ffeatures',
    '\u002Fgreen-agri',
  ],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
