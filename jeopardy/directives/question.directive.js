angular
  .module('AngularJeopardy')
  .directive('questionDirective', function() {
    return {
      templateUrl: 'jeopardy/templates/question.html',
      restrict: 'AE',
      transclude: true,
      scope: {
        question: "=",
        getAnswer: "&",
        skipAnswer: "&"
      },
      link: function(scope,el,attributes) {

      },
    }
  })
