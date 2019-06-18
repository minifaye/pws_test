// self.addEventListener('fetch', function (event) {
//   if (/\.jpg$/.test(event.request.url)) {
//     event.respondWith(fetch('http://d.hiphotos.baidu.com/image/pic/item/09fa513d269759ee560ce9d8befb43166d22df41.jpg'))
//   }
// })
// var cacheName = 'fayeCache'
// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(cacheName)
//     .then(cache => cache.addAll([
//       'public/image/Koala.jpg',
//       'css/common.css'
//     ]))
//   )
// })

// self.addEventListener('fetch', function (event) {
//   event.respondWidth(
//     caches.match(event.request, { ignoreSearch: true })
//     .then(function (response){
//       if(response) {
//         return response
//       }
//       var requestTocache = event.request.clone()
//       return fetch(event.requestTocache).then(
//         function (response) {
//           if (!response || response.status !== 200) {
//             return response
//           }
//           var responseToCache = response.clone()
//           caches.open(cacheName)
//           .then(function (cache) {
//             cache.put(requestTocache, responseToCache)
//           })
//           return response
//         }
//       )
//     })
//   )
// })
