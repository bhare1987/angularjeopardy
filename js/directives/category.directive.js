angular
  .module('AngularJeopardy')
  .directive('categoryDirective', function() {
    return {
      templateUrl: '../../templates/category.html',
      restrict: 'AE',
      scope: {
        catId: '@',
        categories: '@',
        catTitle: '@',
        catCount: '@',
        questions: '=',
        question: '@',
        getFunc: '&'
      },
      link: function(scope,el,attributes) {

      },
    }
  })
