angular
  .module('AngularJeopardy')
  .service('CacheService', function($http, $q, $cacheFactory){
      return $cacheFactory('AngularJeopardy');
  });
