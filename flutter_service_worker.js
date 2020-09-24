'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "731eb31c7181693a37a0dbaac54b4c2f",
"/": "731eb31c7181693a37a0dbaac54b4c2f",
"main.dart.js": "3ffd1236014538924149c7dc9845f732",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a1e2ffbf44d050e7db918790ac4b06d0",
"assets/LICENSE": "11bde751fbcd8a16817edd7484584591",
"assets/AssetManifest.json": "d56d3fcdc0ba54e1a9f2ba838064805d",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"assets/packages/html_editor/summernote/jquery-3.4.1.slim.min.js": "d9b11ca4d877c327889805b73bb79edd",
"assets/packages/html_editor/summernote/summernote-lite.min.js.map": "5ed96c79b498734c79bfae57bbe750f6",
"assets/packages/html_editor/summernote/summernote.html": "cb4c2b220902821f328c1b3a0b0f6f16",
"assets/packages/html_editor/summernote/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor/summernote/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor/summernote/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor/summernote/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor/summernote/summernote-lite.min.css": "5f57b2553a35b2f3fe7aef068c348baa",
"assets/packages/html_editor/summernote/summernote-lite.min.js": "e65a83a6ce35c0ee65aba32243885298",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/logo/applogo.png": "7f6c9c1ee0b0ce49579001b7f03b4c07",
"assets/assets/logo/forground.png": "580a8860fa28c878ccd66506f66fe52c",
"assets/assets/logo/textlogo.png": "580a8860fa28c878ccd66506f66fe52c",
"assets/assets/logo/background.png": "b1e61ab0fee123faba0c123fa289d8a5",
"assets/assets/logo/emptyaddress.flr": "b970e46a9cac3acb6e925edf358d6ab7",
"assets/assets/logo/empty_cart.flr": "cbd388410f56437c931e716af5e0d8d6",
"assets/assets/logo/loader.flr": "1dbc225d72116e0534c2c85bc84d6a1f",
"assets/assets/logo/nowifi.flr": "df41b73bd22719cda94fe797e635e835"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
