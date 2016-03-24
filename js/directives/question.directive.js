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
        qLength: '@',
        qCat: '@'
      },
      link: function(scope,el,attributes,ctrl,transclude) {

      },
    }
  })
