angular
  .module('AngularJeopardy')
  .directive('categoryDirective', function() {
    return {
      templateUrl: '../../templates/category.html',
      restrict: 'AE',
      scope: {
        catId: '@',
        catTitle: '@',
        catCount: '@',
        getFunc: '&'
      },
      transclude: true,
      link: function(scope,el,attributes) {
        // el.find('.question-content').append(transclude());
      },
    }
  })
