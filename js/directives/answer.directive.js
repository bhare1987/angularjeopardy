angular
  .module('AngularJeopardy')
  .directive('answerDirective', function() {
    return {
      templateUrl: '../../templates/answer.html',
      restrict: 'AE',
      scope: {
        question: '=',
        answer: '@',
        value: '@',
        showAnswer: '&',
        speakAnswer: '&'
      },
      link: function(scope,el,attributes) {
        el.bind('click', function(event){
          console.log(scope);
        })
      },
    }
  })
