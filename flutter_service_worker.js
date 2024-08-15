'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ae59e4b92a538df9de9d84c196aae4db",
"version.json": "5ec29964a334f43ba6c0cbb7efbc8e9d",
"index.html": "a8bd48b1c312100225747e320d065d08",
"/": "a8bd48b1c312100225747e320d065d08",
"main.dart.js": "b4f16e2b4c98be4e5d0e8239f58d9857",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"manifest.json": "e6b7494b33fa4a004532181561acdb48",
"assets/AssetManifest.json": "5f773e5fbb31fa5011a29ed158876c4a",
"assets/NOTICES": "151b0bacf84aaf6bbb1b0550962540f9",
"assets/FontManifest.json": "8e3f9209d3e3f13eb9cc9e0f3f3b0ba2",
"assets/AssetManifest.bin.json": "ee7684e26fbb3a3e331e9cd34060e5e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0be539a5ebfa2b29cbb76f3087f28899",
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
"assets/assets/fonts/Euclid%2520Circular%2520A%2520Medium.ttf": "f27978ebb847738736f0bc1b76a96c0e",
"assets/assets/fonts/Euclid%2520Circular%2520A%2520SemiBold.ttf": "1fd0745bac683551717ebb18a78ef5eb",
"assets/assets/fonts/Euclid%2520Circular%2520A%2520Regular.ttf": "e191fa05c7960306760e908cc169f28b",
"assets/assets/fonts/Euclid%2520Circular%2520A%2520Bold.ttf": "c9c7790611487f10ab2d674f6a8909d6",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
