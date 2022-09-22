self.__BUILD_MANIFEST = {
  __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/news-and-blog': ['static\u002Fchunks\u002Fpages\u002Fnews-and-blog.js'],
  sortedPages: ['\u002F_app', '\u002F_error', '\u002Fnews-and-blog'],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
