angular
  .module('AngularJeopardy')
  .service('QuestionService', function($http, $q, CacheService){
    var qSvc = {
      url: 'http://jservice.io/api/',
      getQuestions: function(category, offset){
        var defer = $q.defer();
        var cache = CacheService.get('questions');
        if(cache){
          defer.resolve(cache);
        } else {
          console.log(qSvc.url + 'clues?category=' + category + '&offset=' + offset);
          $http.get(qSvc.url + 'clues?category=' + category + '&offset=' + offset).then(function(questions){
            CacheService.put('questions', questions);
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
