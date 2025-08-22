'use strict';
const CACHE_PREFIX    = 'app-cache';
const CACHE_VERSION   = '1755855367232';
const CACHE_NAME      = `${CACHE_PREFIX}-${CACHE_VERSION}`;
const TEMP_CACHE      = `${CACHE_PREFIX}-temp-${CACHE_VERSION}`;
const MANIFEST_CACHE  = `${CACHE_PREFIX}-manifest`;
const MANIFEST_KEY    = '__sw-manifest__';
const RETRY_DELAY     = 500;
const MEDIA_EXT       = /\.(png|jpe?g|svg|gif|webp|ico|woff2?|ttf|otf|eot|mp4|webm|ogg|mp3|wav|pdf|json|jsonp)$/i;
const NETWORK_ONLY    = /\.(php|ashx|api)$/i;
const RESOURCES_SIZE  = 31043404;
const RESOURCES = {
"/": {
"name": "index.html",
"size": 33834,
"hash": "8375ea7f8e71bd9129f4e620f30eccad"
},
"flutter_bootstrap.js": {
"name": "flutter_bootstrap.js",
"size": 9590,
"hash": "5597a7fef9a0398cb00accc64682dbc4"
},
"version.json": {
"name": "version.json",
"size": 90,
"hash": "20b4b398af1b9c839b4b0b68bbd365e9"
},
"offline.html": {
"name": "offline.html",
"size": 348,
"hash": "1e11135a1a9af22142c08b3dd91717df"
},
".last_build_id": {
"name": ".last_build_id",
"size": 32,
"hash": "1a29393d30e17bf9df7f8c060e3da2d0"
},
"index.html": {
"name": "index.html",
"size": 33834,
"hash": "8375ea7f8e71bd9129f4e620f30eccad"
},
"main.dart.js": {
"name": "main.dart.js",
"size": 1792875,
"hash": "8f0a789999671019d8f5826e9a4165b5"
},
"flutter.js": {
"name": "flutter.js",
"size": 9262,
"hash": "888483df48293866f9f41d3d9274a779"
},
"flutter_service_worker.js": {
"name": "flutter_service_worker.js",
"size": 9423,
"hash": "c5d7256f8892dfbcf7e424fe114ec302"
},
"favicon.png": {
"name": "favicon.png",
"size": 917,
"hash": "5dcef449791fa27946b3d35ad8803796"
},
"icons/Icon-192.png": {
"name": "Icon-192.png",
"size": 5292,
"hash": "ac9a721a12bbc803b44f645561ecb1e1"
},
"icons/Icon-maskable-192.png": {
"name": "Icon-maskable-192.png",
"size": 5594,
"hash": "c457ef57daa1d16f64b27b786ec2ea3c"
},
"icons/Icon-maskable-512.png": {
"name": "Icon-maskable-512.png",
"size": 20998,
"hash": "301a7604d45b3e739efc881eb04896ea"
},
"icons/Icon-512.png": {
"name": "Icon-512.png",
"size": 8252,
"hash": "96e752610906ba2a93c65f8abe1645f1"
},
"manifest.json": {
"name": "manifest.json",
"size": 960,
"hash": "5d62c2b0c009b451de4e3175f4b8d761"
},
"enable-wasm-threads.js": {
"name": "enable-wasm-threads.js",
"size": 3206,
"hash": "4f2e0ee57cfa61599667de7fa7d077fc"
},
"assets/AssetManifest.json": {
"name": "AssetManifest.json",
"size": 1037,
"hash": "b721cb7618a5ed11318f9cbfc9eb5e0a"
},
"assets/NOTICES": {
"name": "NOTICES",
"size": 1698234,
"hash": "5ff873d4f20af4ac4aca98cc525e4e92"
},
"assets/FontManifest.json": {
"name": "FontManifest.json",
"size": 300,
"hash": "836fc79e9b5acbdee6bd8c13b6507da5"
},
"assets/AssetManifest.bin.json": {
"name": "AssetManifest.bin.json",
"size": 1510,
"hash": "ed1229268ed04925bec51a536e375610"
},
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": {
"name": "CupertinoIcons.ttf",
"size": 1472,
"hash": "33b7d9392238c04c131b6ce224e13711"
},
"assets/shaders/ink_sparkle.frag": {
"name": "ink_sparkle.frag",
"size": 8867,
"hash": "ecc85a2e95f5e9f53123dcaf8cb9b6ce"
},
"assets/AssetManifest.bin": {
"name": "AssetManifest.bin",
"size": 1129,
"hash": "63d9df0eb70da4922cd201f7463ee504"
},
"assets/fonts/MaterialIcons-Regular.otf": {
"name": "MaterialIcons-Regular.otf",
"size": 7736,
"hash": "c0ad29d56cfe3890223c02da3c6e0448"
},
"assets/assets/images/492-1024x768-blur_5.jpg": {
"name": "492-1024x768-blur_5.jpg",
"size": 44083,
"hash": "e1e30cc096eca73e643e65dca6996bb0"
},
"assets/assets/images/758-1024x768-blur_5.jpg": {
"name": "758-1024x768-blur_5.jpg",
"size": 38617,
"hash": "75f2ed30fcbf869a5e200af9282bb031"
},
"assets/assets/images/1002-1024x768-blur_5.jpg": {
"name": "1002-1024x768-blur_5.jpg",
"size": 35635,
"hash": "3c61098f31164bec45aea45fc216b7df"
},
"assets/assets/images/826-1024x768-blur_5.jpg": {
"name": "826-1024x768-blur_5.jpg",
"size": 36342,
"hash": "77ed74cb33e98b61e88faededcf277a3"
},
"assets/assets/images/485-1024x768-blur_5.jpg": {
"name": "485-1024x768-blur_5.jpg",
"size": 26262,
"hash": "b245534dbbaa9163b1cd858cc5966383"
},
"assets/assets/images/502-1024x768-blur_5.jpg": {
"name": "502-1024x768-blur_5.jpg",
"size": 53359,
"hash": "7b5f53a0bf3954d1ad19d344ec882534"
},
"assets/assets/images/535-1024x768-blur_5.jpg": {
"name": "535-1024x768-blur_5.jpg",
"size": 43278,
"hash": "aeb1c276d329c2bd207743de42d9d420"
},
"assets/assets/images/984-1024x768-blur_5.jpg": {
"name": "984-1024x768-blur_5.jpg",
"size": 35603,
"hash": "10fa65b5accd55b24d2584e136309b3d"
},
"assets/assets/images/988-1024x768-blur_5.jpg": {
"name": "988-1024x768-blur_5.jpg",
"size": 24933,
"hash": "a205f76d8876c613c84431c7651b9339"
},
"assets/assets/shaders/shimmer.frag": {
"name": "shimmer.frag",
"size": 1817,
"hash": "8ce18b2b5d6e6de6f089df3779e28296"
},
"assets/assets/shaders/dots.frag": {
"name": "dots.frag",
"size": 1849,
"hash": "dfb91d0459e258b5a341b2a407ac583a"
},
"assets/assets/fonts/fa-regular-400.ttf": {
"name": "fa-regular-400.ttf",
"size": 68064,
"hash": "262525e2081311609d1fdab966c82bfc"
},
"sw.js": {
"name": "sw.js",
"size": 12860,
"hash": "7bc6d64eeb70546ba3c11342800fe091"
},
"canvaskit/skwasm.js": {
"name": "skwasm.js",
"size": 60281,
"hash": "1ef3ea3a0fec4569e5d531da25f34095"
},
"canvaskit/skwasm_heavy.js": {
"name": "skwasm_heavy.js",
"size": 60394,
"hash": "413f5b2b2d9345f37de148e2544f584f"
},
"canvaskit/skwasm.js.symbols": {
"name": "skwasm.js.symbols",
"size": 1441359,
"hash": "0088242d10d7e7d6d2649d1fe1bda7c1"
},
"canvaskit/canvaskit.js.symbols": {
"name": "canvaskit.js.symbols",
"size": 1337304,
"hash": "58832fbed59e00d2190aa295c4d70360"
},
"canvaskit/skwasm_heavy.js.symbols": {
"name": "skwasm_heavy.js.symbols",
"size": 1560177,
"hash": "3c01ec03b5de6d62c34e17014d1decd3"
},
"canvaskit/skwasm.wasm": {
"name": "skwasm.wasm",
"size": 3443467,
"hash": "264db41426307cfc7fa44b95a7772109"
},
"canvaskit/chromium/canvaskit.js.symbols": {
"name": "canvaskit.js.symbols",
"size": 1259162,
"hash": "193deaca1a1424049326d4a91ad1d88d"
},
"canvaskit/chromium/canvaskit.js": {
"name": "canvaskit.js",
"size": 86256,
"hash": "5e27aae346eee469027c80af0751d53d"
},
"canvaskit/chromium/canvaskit.wasm": {
"name": "canvaskit.wasm",
"size": 5678018,
"hash": "24c77e750a7fa6d474198905249ff506"
},
"canvaskit/canvaskit.js": {
"name": "canvaskit.js",
"size": 86619,
"hash": "140ccb7d34d0a55065fbd422b843add6"
},
"canvaskit/canvaskit.wasm": {
"name": "canvaskit.wasm",
"size": 7052864,
"hash": "07b9f5853202304d3b0749d9306573cc"
},
"canvaskit/skwasm_heavy.wasm": {
"name": "skwasm_heavy.wasm",
"size": 4933843,
"hash": "8034ad26ba2485dab2fd49bdd786837b"
}
};
const CORE = [
"index.html",
"main.dart.js",
"assets/FontManifest.json",
"assets/AssetManifest.bin.json"
];
self.addEventListener("install", (event) => {
self.skipWaiting();
return event.waitUntil(
caches.open(TEMP_CACHE).then((cache) => {
return cache.addAll(
CORE.map((value) => new Request(value, {'cache': 'reload'})));
})
);
});
self.addEventListener("activate", function(event) {
return event.waitUntil(async function() {
try {
var contentCache = await caches.open(CACHE_NAME);
var tempCache = await caches.open(TEMP_CACHE);
var manifestCache = await caches.open(MANIFEST_CACHE);
var manifest = await manifestCache.match(MANIFEST_KEY);
if (!manifest) {
await caches.delete(CACHE_NAME);
contentCache = await caches.open(CACHE_NAME);
const tempKeys = await tempCache.keys();
for (let i = 0; i < tempKeys.length; i++) {
const request = tempKeys[i];
const resourceKey = getResourceKey(request);
const resourceInfo = RESOURCES[resourceKey] || RESOURCES['/'];
var response = await tempCache.match(request);
await contentCache.put(request, response);
notifyClients({
resourceName: resourceInfo?.name || resourceKey,
resourceUrl: request.url,
resourceKey: resourceKey,
resourceSize: resourceInfo?.size || 0,
loaded: resourceInfo?.size || 0,
status: 'completed'
});
}
await caches.delete(TEMP_CACHE);
await manifestCache.put(MANIFEST_KEY, new Response(JSON.stringify(RESOURCES)));
self.clients.claim();
return;
}
var oldManifest = await manifest.json();
var origin = self.location.origin;
const contentKeys = await contentCache.keys();
for (var request of contentKeys) {
var key = request.url.substring(origin.length + 1);
if (key == "") key = "/";
if (!RESOURCES[key] || RESOURCES[key]?.hash != oldManifest[key]?.hash) {
await contentCache.delete(request);
}
}
const tempKeys = await tempCache.keys();
for (let i = 0; i < tempKeys.length; i++) {
const request = tempKeys[i];
const resourceKey = getResourceKey(request);
const resourceInfo = RESOURCES[resourceKey] || RESOURCES['/'];
var response = await tempCache.match(request);
await contentCache.put(request, response);
notifyClients({
resourceName: resourceInfo?.name || resourceKey,
resourceUrl: request.url,
resourceKey: resourceKey,
resourceSize: resourceInfo?.size || 0,
loaded: resourceInfo?.size || 0,
status: 'updated'
});
}
await caches.delete(TEMP_CACHE);
await manifestCache.put(MANIFEST_KEY, new Response(JSON.stringify(RESOURCES)));
self.clients.claim();
return;
} catch (err) {
console.error('Failed to upgrade service worker: ' + err);
await caches.delete(CACHE_NAME);
await caches.delete(TEMP_CACHE);
await caches.delete(MANIFEST_CACHE);
}
}());
});
self.addEventListener("fetch", (event) => {
if (event.request.method !== 'GET') return;
var origin = self.location.origin;
var resourceKey = getResourceKey(event.request);
if (resourceKey.indexOf('?v=') != -1) resourceKey = resourceKey.split('?v=')[0];
if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || resourceKey == '')
resourceKey = '/';
var resourceInfo = RESOURCES[resourceKey];
if (!resourceInfo) return;
if (resourceKey == '/') return onlineFirst(event);
notifyClients({
resourceName: resourceInfo?.name || resourceKey,
resourceUrl: event.request.url,
resourceKey: resourceKey,
resourceSize: resourceInfo?.size || 0,
loaded: 0,
status: 'loading'
});
event.respondWith(caches.open(CACHE_NAME)
.then((cache) =>  {
return cache.match(event.request).then((response) => {
return response || fetch(event.request).then((response) => {
if (response && Boolean(response.ok)) {
cache.put(event.request, response.clone());
notifyClients({
resourceName: resourceInfo?.name || resourceKey,
resourceUrl: event.request.url,
resourceKey: resourceKey,
resourceSize: resourceInfo?.size || 0,
loaded: resourceInfo?.size || 0,
status: 'completed'
});
}
return response;
});
})
})
);
});
self.addEventListener('message', (event) => {
if (event.data === 'skipWaiting') {
self.skipWaiting();
return;
}
if (event.data === 'downloadOffline') {
downloadOffline();
return;
}
});
async function downloadOffline() {
var resources = [];
var contentCache = await caches.open(CACHE_NAME);
var currentContent = {};
var origin = self.location.origin;
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
function onlineFirst(event) {
var resourceKey = getResourceKey(event.request);
var resourceInfo = RESOURCES[resourceKey] || RESOURCES['/'];
return event.respondWith(
fetch(event.request).then((response) => {
return caches.open(CACHE_NAME).then((cache) => {
cache.put(event.request, response.clone());
notifyClients({
resourceName: resourceInfo?.name || resourceKey,
resourceUrl: event.request.url,
resourceKey: resourceKey,
resourceSize: resourceInfo?.size || 0,
loaded: resourceInfo?.size || 0,
status: 'completed'
});
return response;
});
}).catch((error) => {
return caches.open(CACHE_NAME).then((cache) => {
return cache.match(event.request).then((response) => {
if (response != null) {
notifyClients({
resourceName: resourceInfo?.name || resourceKey,
resourceUrl: event.request.url,
resourceKey: resourceKey,
resourceSize: resourceInfo?.size || 0,
loaded: resourceInfo?.size || 0,
status: 'cached'
});
return response;
}
notifyClients({
resourceName: resourceInfo?.name || resourceKey,
resourceUrl: event.request.url,
resourceKey: resourceKey,
resourceSize: resourceInfo?.size || 0,
loaded: 0,
status: 'error',
error: error.message
});
throw error;
});
});
})
);
}
function getResourceKey(requestOrUrl) {
const url = typeof requestOrUrl === 'string'
? new URL(requestOrUrl, self.location.origin)
: new URL(requestOrUrl.url);
url.hash = '';
url.search = '';
let key = url.pathname;
if (key.startsWith('/')) key = key.slice(1);
if (key.endsWith('/') && key !== '/') key = key.slice(0, -1);
return key === '' ? '/' : key;
}
async function notifyClients(data) {
const allClients = await self.clients.matchAll({ includeUncontrolled: true });
allClients.forEach(client => {
try {
client.postMessage({
type: 'sw-progress',
timestamp: Date.now(),
resourcesSize: RESOURCES_SIZE,
...data
});
} catch {}
});
}