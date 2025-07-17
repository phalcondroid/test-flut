'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e90e58c90cc70f495b059c06d6fcf2a0",
"version.json": "55f473d99587106f2f78c77466a3e92b",
"index.html": "5a4eec8cd9989b9624aba1f7647c2975",
"/": "5a4eec8cd9989b9624aba1f7647c2975",
"main.dart.js": "88307904ddb89bae131805415f050ca7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "388c615cce45a799aaba3ad2304f889e",
"assets/AssetManifest.json": "600f17a3fd4f4420b238378053c186b3",
"assets/NOTICES": "5ec961ed1bf14385579b27da58ec49c9",
"assets/FontManifest.json": "935d0c91e61cebc3253c3b50b78c2b74",
"assets/AssetManifest.bin.json": "0feb292b94be4ca0916b7643a3e614f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d5b80fe38560afc8ea8cd9aaf532cb42",
"assets/fonts/MaterialIcons-Regular.otf": "160004f6c95384681d58f2ec7ddcd595",
"assets/assets/images/qr/123456789013.png": "23827606730641344db3ffba53859083",
"assets/assets/images/qr/123456789012.png": "2877f335e6b1505ec104bec2a032ce3b",
"assets/assets/images/qr/12_345678_90_12.gif": "a0010abe9986e2ff7bc2540109c4b272",
"assets/assets/images/qr/12_345678_90_13.gif": "cd4279c378940927b2dac04c61b22f75",
"assets/assets/images/common/update.png": "16bd7e1722f64f50f8704d5d9e64f13c",
"assets/assets/images/common/purchases/empty_purchases.png": "d91ce3726df8e331c319a5adc4be56e9",
"assets/assets/images/common/messages/empty_messages.png": "448a4ea0d0a97fa2ac7c93c5f65226f9",
"assets/assets/images/common/grid_pattern.png": "50ece0ac58c7e5ed36296b6e4fc2100e",
"assets/assets/images/common/none.png": "807c3bb0fd688ffffcf8cccc9accd3fe",
"assets/assets/images/icons/ic_map.png": "2fcda603987d05f9fd6fb8c7baf99602",
"assets/assets/images/icons/logo_alvic.png": "49589010dcd15c8b28db16917bde881c",
"assets/assets/images/icons/ic_nav_map.png": "27aecd9c7ce9e471183da676e6b76f21",
"assets/assets/images/icons/cards_empy.png": "12b7fb83d51d8e40d0d8cef53b027053",
"assets/assets/images/icons/ic_list.png": "50f649aba971d1b466487f8e9141ddeb",
"assets/assets/images/icons/ic_drawer_billing.png": "6dd715b26f498a47b779da521613e723",
"assets/assets/images/icons/ic_nav_card.png": "17479f29f1815b23b40c94a9572d5661",
"assets/assets/images/icons/ic_drawer_notifications.png": "c269ce4995b82fa0d540c6b1802e016d",
"assets/assets/images/icons/marker_alvic.png": "a6a9679a7fdd17e1c20d6f70f7347de9",
"assets/assets/images/icons/ic_drawer_profile.png": "1c1473dd0745538fc19ca73a48b74460",
"assets/assets/images/icons/icon_alvic.jpeg": "12726abd4e91c3a3f9424400881a85ca",
"assets/assets/images/icons/ic_pin_map_white.png": "e0cac8018dd8a50b2b12f79389a79811",
"assets/assets/images/icons/ic_drawer.png": "ffcaac75b907d11820523b8f5c95a299",
"assets/assets/images/icons/ic_drawer_code.png": "7515843355560a183a306409afd2aabc",
"assets/assets/images/icons/ic_drawer_about.png": "975692c5c16cb9701c4c4ac014d5934a",
"assets/assets/images/icons/ic_drawer_card.png": "a2bb32788bf2cb31841393f99c8701a5",
"assets/assets/images/icons/ic_nav_car.png": "66e80a178f9f3541254b09e20bee59f5",
"assets/assets/images/icons/alvic_launcher_icon.png": "532fce1485fa704134bf31b80b23bb1e",
"assets/assets/files/repsol-response.json": "70c7d69a93a8569f4320380b8afd9f51",
"assets/assets/files/card-response.json": "33fd41410df7bc5b1f586eb878ff0098",
"assets/assets/files/stations-response.json": "401a2fa15d8a8aff636e6682fda7b2d4",
"assets/assets/files/configuration-response.json": "01c63804d79afd891ff1754c0f24e41f",
"assets/assets/files/login-response.json": "84e08a750bd81825ecb05def0b172b59",
"assets/assets/files/cards-octan.json": "eb44eccc18f3cef52a0366e9f399519d",
"assets/assets/files/bp-response.json": "3136912e49b321372a0531594e194e3c",
"assets/assets/files/petrocat-response.json": "6cf5fc074725dd03ff0c450606a1e042",
"assets/assets/files/stations-octan.json": "de30719a993514c126ac5d02fb5851e8",
"assets/assets/files/cepsa-response.json": "4bb4ea57d5b786be188939d5f2046221",
"assets/assets/i18n/en.json": "60f937a18e4bbde1767c57867092abe5",
"assets/assets/i18n/fr.json": "af5e2a6396e31dd38cdd9beb6c07543f",
"assets/assets/i18n/ca.json": "c2b36b965ec1d3a51a3bb85d8b484683",
"assets/assets/i18n/eu.json": "af5e2a6396e31dd38cdd9beb6c07543f",
"assets/assets/i18n/es.json": "019d493dd7b52464f5ec9b6d5c2c74da",
"assets/assets/fonts/Rubik-MediumItalic.ttf": "4790a18709e781a0994dc17d04fd66f5",
"assets/assets/fonts/Rubik-Bold.ttf": "627d0e537f4a06a535ae956e4a87837f",
"assets/assets/fonts/Rubik-SemiBoldItalic.ttf": "a8a77ad44dbe8c031ce7b5442661610f",
"assets/assets/fonts/Rubik-Light.ttf": "86699cab89559b6f5ffd4887cb5c7a7c",
"assets/assets/fonts/Rubik-Medium.ttf": "e785acbf5775e9bec2129f4967a75472",
"assets/assets/fonts/Alvic_icons.ttf": "34914fa7898319b6e06aa221ac8cdec4",
"assets/assets/fonts/Rubik-ExtraBoldItalic.ttf": "5f439e081a4e2980f8368285f7d0f8c9",
"assets/assets/fonts/Rubik-Black.ttf": "2a3b9f77607c7b691e81090c4edba341",
"assets/assets/fonts/Rubik-Italic.ttf": "17538a8196fb1d1fab888c5941acf9ec",
"assets/assets/fonts/Rubik-LightItalic.ttf": "ac5353ac12658ccfd7eca99a25be7037",
"assets/assets/fonts/Rubik-SemiBold.ttf": "742cf1e6b879de2de937aa287fddece4",
"assets/assets/fonts/Rubik-BlackItalic.ttf": "db5b8553106c0268251f65367ecfc3a0",
"assets/assets/fonts/Rubik-ExtraBold.ttf": "34215c81c17466f7aa764b441fa348df",
"assets/assets/fonts/Rubik-Regular.ttf": "46df28800514364ef2766f74386b1bd3",
"assets/assets/fonts/Rubik-BoldItalic.ttf": "dc069fd43e202359cfef038ce28b20ac",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
