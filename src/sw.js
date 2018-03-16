// self.addEventListener('fetch', function (event) {
//   if (/\.jpg$/.test(event.request.url)) {
//     event.respondWith(fetch('http://d.hiphotos.baidu.com/image/pic/item/09fa513d269759ee560ce9d8befb43166d22df41.jpg'))
//   }
// })
var cacheName = 'fayeCache'
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll([
      'public/image/Koala.jpg'
    ]))
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWidth(
    catchs.match(event.request)
    .then(function (response){
      if(response) {
        return response
      }
      return fetch(event.request)
    })
  )
})
