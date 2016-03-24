angular
  .module('AngularJeopardy')
  .directive('questionDirective', function() {
    return {
      templateUrl: '../../templates/question.html',
      restrict: 'AE',
      scope: {
        qId: '@',
        question: '@',
        getFunc: '&',
        qLength: '@'
      },
      link: function(scope,el,attributes,ctrl,transclude) {

      },
    }
  })
