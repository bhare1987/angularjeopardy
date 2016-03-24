angular
  .module('AngularJeopardy')
  .controller('QuestionController', function($scope, $location, QuestionService, $routeParams){
    function randomizer(count){
      return Math.ceil(Math.random() * count);
    }

    $scope.getQuest = function(category, length){
      QuestionService.getQuestions(category, randomizer(length)
        .then(function(questions){

        })
      )
    }




  })
