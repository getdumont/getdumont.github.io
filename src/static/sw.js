'use strict';

var cacheName = 'DUMONT_CACHE';
var cacheFiles = [
    '/manifest.json',
    '/assets/css/index.css',
    '/assets/images/logo.png',
    '/assets/images/logo_blue.png',
    '/assets/scripts/index.js',
    'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700',
];

self.addEventListener('install', function(event) {
    event.waitUntil(caches.open(cacheName).then(function(cache) {
        return cache.addAll(cacheFiles);
    }));
});

self.addEventListener('fetch', function(event) {
    const request = event.request;
    if (~request.url.indexOf('/assets') || ~request.url.indexOf('fonts.')) {
        event.respondWith(caches.match(event.request));
    }
});