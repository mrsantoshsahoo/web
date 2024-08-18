'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "60255b9f6856061b27bda9b8a1a46734",
"version.json": "a95cd56fbe2d56a9fc5fd9f61c86527e",
"splash/img/light-2x.png": "e4e64b57e36b298d753d745c38f3ea39",
"splash/img/dark-4x.png": "2013d197c9a97911bf37d36e597b110d",
"splash/img/light-3x.png": "a11a55f04129b9ef52e5db21dfbe06e4",
"splash/img/dark-3x.png": "a11a55f04129b9ef52e5db21dfbe06e4",
"splash/img/light-4x.png": "2013d197c9a97911bf37d36e597b110d",
"splash/img/dark-2x.png": "e4e64b57e36b298d753d745c38f3ea39",
"splash/img/dark-1x.png": "4b6a4f1cdddd129b83a20f0237d91f4b",
"splash/img/light-1x.png": "4b6a4f1cdddd129b83a20f0237d91f4b",
"index.html": "0a49ce1ea58a499fb6eb443dc4b490c0",
"/": "0a49ce1ea58a499fb6eb443dc4b490c0",
"main.dart.js": "ae80b1a61deb81348d841aca71d13ab6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "aa449872ebdac26c9b3cec354f976336",
"main.dart.mjs": "2506bf567a488c6f2477c5715d819bba",
"icons/Icon-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"manifest.json": "e6b7494b33fa4a004532181561acdb48",
"main.dart.wasm": "cebf87ab31b2fe3aba8dd3a478eeca16",
"assets/AssetManifest.json": "6d2dbabe9e70cec251845cc4cd1296de",
"assets/NOTICES": "3f8bcc607f155a4c84420f323490e204",
"assets/FontManifest.json": "d55e8107e9c1d34b2df4683643ce6b7a",
"assets/AssetManifest.bin.json": "598b88eaed9b363ee0b72f05864aae0d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1a18854459f7aa4bf622620c2c1ddfb4",
"assets/fonts/MaterialIcons-Regular.otf": "71a5e859a5015c733ddd4c6299c4cc21",
"assets/assets/images/vice/vice2.png": "5ed171630a5d4276c98a53bfceae4071",
"assets/assets/images/vice/vice3.png": "05bb817ea6ff5b408ce7666b6bed5be7",
"assets/assets/images/vice/vice1.png": "ca628fb49911212e9a3f2d1699f8c925",
"assets/assets/images/vice/vice4.png": "f6ae2c23d8faacdf325fc77e9382eeda",
"assets/assets/images/vice/vice5.png": "ae97540d968afd5a2cb7cfe0c673506d",
"assets/assets/images/vice/vice7.png": "545fc120b1d8cc265b9c0f78585182ef",
"assets/assets/images/vice/vice6.png": "45d3e785460cb4d77e572a3491fea2ff",
"assets/assets/images/vice/vice13.png": "f59a8fe1a0ac2139ce8162c8d5987cb7",
"assets/assets/images/vice/vice12.png": "cd38aa7a75ecd27ce7ac5350694c3d4d",
"assets/assets/images/vice/vice8.png": "dd6c013aa9baab555a2258efc9f79c38",
"assets/assets/images/vice/vice10.png": "b7e08a2fe2508ca8a55407f6815297fe",
"assets/assets/images/vice/vice11.png": "49551d4e7c53d0feb408002def77fda0",
"assets/assets/images/vice/vice9.png": "87b25a8aa38f8fe1d747c99248b457f0",
"assets/assets/images/vice/vice-logo.png": "cce315f9729944a4602f0197fdded268",
"assets/assets/images/topBanner_lady.png": "b0bc5ab4cb8f2117fa261e0ac1a56d70",
"assets/assets/images/marketing/app_splash.png": "dcfbee5ad37cf2014ed5ffd56d471adc",
"assets/assets/fonts/Euclid%2520Circular%2520A%2520Medium.ttf": "f27978ebb847738736f0bc1b76a96c0e",
"assets/assets/fonts/Euclid%2520Circular%2520A%2520SemiBold.ttf": "1fd0745bac683551717ebb18a78ef5eb",
"assets/assets/fonts/Euclid%2520Circular%2520A%2520Regular.ttf": "e191fa05c7960306760e908cc169f28b",
"assets/assets/fonts/Euclid%2520Circular%2520A%2520Bold.ttf": "c9c7790611487f10ab2d674f6a8909d6",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "0b8baeff2b4484d2d6be67a7e082f9db",
"canvaskit/canvaskit.js.symbols": "9a39ab8aa3d828142935da9efe99b3a2",
"canvaskit/skwasm.wasm": "ee4afa1790abb925360fd9519c5194f7",
"canvaskit/chromium/canvaskit.js.symbols": "43ec75ce562f82c5dc5be1a738d87e37",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "3909da2fbccad1a2e4a1f42750d24977",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "afdcccf150b5cba228e27c813548b842",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
