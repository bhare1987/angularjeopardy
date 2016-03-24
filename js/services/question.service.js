angular
  .module('AngularJeopardy')
  .service('CategoryService', function($http, $q, CacheService){
    var qSvc = {
      url: 'http://jservice.io/api/',
      getQuestions: function(category){
        var defer = $q.defer();
        var cache = CacheService.cacheEnginer.get('questions');
        if(cache){
          defer.resolve(cache);
        } else {
          $http.get(url + 'clues?category=' + category).then(questions){
            CacheService.cacheEngine.put('questions', questions);
            defer.resolve(questions);
          })
        }
        return defer.promise;
      }
    }
    return {
      getQuestions: qSvc.getQuestions
    }
  });
