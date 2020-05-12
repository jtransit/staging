'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "424799707b09f3fd04498ffc358a29e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "6a8cea112a5eeb9fa1541d2e94b6c897",
"/": "6a8cea112a5eeb9fa1541d2e94b6c897",
"manifest.json": "6291aa085bfa252f9b9328043c062b4c",
"assets/FontManifest.json": "9b7cd598c2610c799474ef4aa9b5777b",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "58b7ddf6db68d84ffc3bda187c646525",
"assets/assets/onboarding_1.png": "16d8ed7ee2f82f6ecf48ba880b2b9380",
"assets/assets/logo.png": "1494235fc1f5901bca2dea8a6a206d5a",
"assets/assets/onboarding_3.png": "258b78f8744eed4b3175c4bc461aa3dc",
"assets/assets/origin_circle.png": "d09d3ac8360b6cac638b7406d5de4422",
"assets/assets/svg/no_internet.svg": "df52e89b69ec328e8c074828739bb46d",
"assets/assets/svg/request_timeout.svg": "30fbb50df40be2394f9663568ab87114",
"assets/assets/svg/error.svg": "9af2c8229ee8c5a957977faaf8d5a608",
"assets/assets/svg/path_not_found.svg": "a9055cc20fb8b6b781d69a2da2c67c86",
"assets/assets/svg/no_results.svg": "cfb49f55eb8da55ee5e66a7587b12849",
"assets/assets/svg/too_close.svg": "00ac9f2d94d3adf938c8c0ec450a4ae3",
"assets/assets/svg/outside_bounds.svg": "ca951e8b1aa8f69bef9f60dbae825f20",
"assets/assets/svg/connect_timeout.svg": "3098f2c47c1daf29152c5eb8db7ee9e3",
"assets/assets/map_night.json": "3c5e835012d3c2a2cbb636d2fefafa38",
"assets/assets/logo_black.png": "f54344143a6e700f9af146448679aae8",
"assets/assets/logo_circle.png": "f0e8021a62c728e59fd5899da554dcdd",
"assets/assets/destination_circle.png": "cfba97a8ff59ee5e7efe56226d4f8337",
"assets/assets/onboarding_4.png": "7e6c6e2e1aba0a04657c9332fbca9ab8",
"assets/assets/onboarding_2.png": "00b6ab9b8becc5f68352937206994ab1",
"assets/AssetManifest.json": "3c6ffc238c9cadae019a48606ecc7b9a"
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
