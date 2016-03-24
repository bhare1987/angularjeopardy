angular
  .module('AngularJeopardy')
  .service('CategoryService', function($http, $q, CacheService){
    var catSvc = {
      url: 'http://jservice.io/api/',
      getCategories: function(count, offset){
        var defer = $q.defer();
        var cache = CacheService.get('categories');
        if(cache){
          defer.resolve(cache);
        } else {
          $http.get(catSvc.url + 'categories?count=' + count + '&offset=' + offset).then(function(categories){
            CacheService.put('categories', categories);
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
