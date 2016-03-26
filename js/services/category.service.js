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
      allCats: function(){
        return $q.all([
          catSvc.getCategories(catSvc.randomizer()),
          catSvc.getCategories(catSvc.randomizer()),
          catSvc.getCategories(catSvc.randomizer()),
          catSvc.getCategories(catSvc.randomizer()),
          catSvc.getCategories(catSvc.randomizer()),
          catSvc.getCategories(catSvc.randomizer())
        ])
      },
      randomizer: function(){
        return Math.ceil(Math.random() * 18418);
      },
    }
    return catSvc;
  });
