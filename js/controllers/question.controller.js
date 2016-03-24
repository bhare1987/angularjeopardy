angular
  .module('AngularJeopardy')
  .controller('QuestionController', function($scope, $location, QuestionService, $routeParams){
    function randomizer(count){
      return Math.ceil(Math.random() * count);
    }

    QuestionService.getQuestions(11234, 1)
      .then(function(questions){
        console.log(questions.data);
        $scope.questions = questions.data;
      })

    })
