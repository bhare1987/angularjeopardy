angular
  .module('AngularJeopardy')
  .service('CacheService', function($http, $q, $cacheFactory){
    var cacheSvc = {
      cacheEngine: function(){
        return $cacheFactory('AngularJeopardy');
      }
    }
    return {
      cacheEngine: cacheEngine
    }
  });
