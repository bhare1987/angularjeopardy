var _ = require('underscore');

angular
  .module('AngularJeopardy')
  .controller('CategoryController', function($scope, CategoryService){

    CategoryService.allCats()
      .then(function(categories){
        $scope.categories = categories;
        $scope.categories.forEach(function(el){
          if(el.data.clues_count > 5){
            el.data.clues = _.first(_.shuffle(el.data.clues), 5);
          }
          for(var i = 0; i < 5; i++){
            el.data.clues[i].value = 200 * (i + 1);
          }
        })
      })

  })
