var annyang = require('annyang');

angular
  .module('AngularJeopardy')
  .service('CategoryService', function($http, $q, CacheService){
    var catSvc = {
      url: 'http://jservice.io/api/',
      getCategories: function(id){
        var defer = $q.defer();
        var cache = CacheService.get('categories');
        if(cache){
          defer.resolve(cache);
        } else {
          $http.get(catSvc.url + 'category?id=' + id).then(function(categories){
            CacheService.put('categories', categories);
            defer.resolve(categories);
          })
        }
        return defer.promise;
      },
      allCats: function(number){
        var promises = [];
        for (var i = 0; i < number; i++){
          promises.push(catSvc.getCategories(catSvc.randomizer()));
        }
        return $q.all(promises)
      },
      randomizer: function(){
        return Math.ceil(Math.random() * 18418);
      },
    }
    return catSvc;
  });
