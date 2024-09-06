'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e34a0c39ead9637b80a1cdd76546cc31",
"version.json": "dbdafc4ddaf7b9401deaabd2b02fc2d0",
"index.html": "8848d2d3a95388e84804aaf17cf9156a",
"/": "8848d2d3a95388e84804aaf17cf9156a",
"main.dart.js": "407d20f4b38d5b9c0a49d301c9746eda",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "8268dac40f840a0ea95bea5a6540c9ed",
"icons/Icon-192.png": "3eb166df562e0e832d812ede185a5d2b",
"icons/Icon-512.png": "835b3a1a7086c38bcc68f1c7ed38b907",
"manifest.json": "f2e4e46105be6514155ac661de6a39f1",
"assets/AssetManifest.json": "4388d3b085c70f7de21472ae837ffa12",
"assets/NOTICES": "4a57f8066dffd998e1e8aadc0f2be7b0",
"assets/FontManifest.json": "6bf336df0398e988fcea0edf135a0499",
"assets/AssetManifest.bin.json": "dc424d642f598fd1534e688c8544a1ad",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "376a785313759eddaa4068a2eb5b0611",
"assets/fonts/MaterialIcons-Regular.otf": "e132f56cfe84ae40f87c1ffa7347509f",
"assets/assets/img_onBoard/img_onBoard_15.jpg": "dc582198c9c25f8f10f44078767a75c3",
"assets/assets/img_onBoard/img_onBoard_14.jpg": "f92ad33bde60bc4cd11e949da0a50812",
"assets/assets/img_onBoard/img_onBoard_16.jpg": "57ad39a72461c6a43917b3f999553f2e",
"assets/assets/img_onBoard/img_onBoard_13.jpg": "724f4c96f85d7defc2c57217b4ec0d15",
"assets/assets/img_onBoard/img_onBoard_12.jpg": "2311a58cadfd1632a103450cc4323ccc",
"assets/assets/img_onBoard/img_onBoard_10.jpg": "16611407eccb092433a826a829cdf6d2",
"assets/assets/img_onBoard/img_onBoard_11.jpg": "c76f0d6c906f816bd4ae3d00a37891e7",
"assets/assets/img_onBoard/img_onBoard_9.jpg": "864cabea784a57a010791178c574d0c3",
"assets/assets/img_onBoard/img_onBoard_8.jpg": "e8a8634fc641ed3ec2f670ffc5f76648",
"assets/assets/img_onBoard/img_onBoard.zip": "6dfaffeebbcbfea2520aada5ebd811cf",
"assets/assets/img_onBoard/img_onBoard_1.jpg": "ada834d2f692c3eb39a57f65abaf9bcd",
"assets/assets/img_onBoard/img_onBoard_3.jpg": "6f44c8be3d3c08c13405d2dad8711a87",
"assets/assets/img_onBoard/img_onBoard_2.jpg": "2d729746c308fc97d9437f45eacd7b35",
"assets/assets/img_onBoard/img_onBoard_6.jpg": "010353f2d64ce03150e42ba12d045535",
"assets/assets/img_onBoard/img_onBoard_7.jpg": "d69b6651883eece5d20da563bc0590d5",
"assets/assets/img_onBoard/img_onBoard_5.jpg": "c54ffe4a5723d22807aee924c023028e",
"assets/assets/img_onBoard/img_onBoard_4.jpg": "ba8ace9ebad0124f721973acb3ca51d9",
"assets/assets/icons/home-outline.svg": "e02982f3e6a09821f31857461b455ed2",
"assets/assets/icons/home_outlined.png": "522670a7554cec8e0846ac3cdd73990b",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
