'use strict';

var cacheName = 'DUMONT_CACHE';
var cacheFiles = [
    '/manifest.json',
    '/assets/css/index.css',
    '/assets/images/logo.png',
    '/assets/images/logo_blue.png',
    '/assets/scripts/index.js',
    'https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2',
    'https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2',
];

self.addEventListener('install', function(event) {
    event.waitUntil(caches.open(cacheName).then(function(cache) {
        return cache.addAll(cacheFiles);
    }));
});

self.addEventListener('fetch', function(event) {
    if (~request.url.indexOf('/assets') || ~request.url.indexOf('fonts.gstatic')) {
        event.respondWith(caches.match(event.request));
    }
});