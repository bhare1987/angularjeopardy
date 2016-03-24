angular
  .module('AngularJeopardy')
  .service('CategoryService', function($http, $q, CacheService){
    var catSvc = {
      url: 'http://jservice.io/api/',
      getCategories: function(count, offset){
        var defer = $q.defer();
        var cache = CacheService.cacheEngine.get('categories');
        if(cache){
          defer.resolve(cache);
        } else {
          $http.get(url + 'categories?count=' + count + '&offset=' + offset).then(categories){
            CacheService.cacheEngine.put('categories', categories);
            defer.resolve(categories);
          })
        }
        return defer.promise;
      }
    }
    return {
      getCategories: catSvc.getCategories
    }
  });
