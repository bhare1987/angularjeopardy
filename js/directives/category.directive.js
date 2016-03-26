var $ = require('jquery');

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
        question: '=',
        answer: '@',
        userAnswer: '@',
        skipAnswer: '&',
        getAnswer: '&'
      },
      link: function(scope,el,attributes) {
        el.bind('click', function(event){
          // console.log($(this));
          // var modal = $(this).data('target');
          // $(modal).modal('show');
        })
      },
    }
  })

//remove all of this crap from the directive and put it into the view. Make a directive for the player instead.
