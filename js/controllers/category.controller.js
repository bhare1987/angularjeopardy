angular
  .module('AngularJeopardy')
  .controller('CategoryController', function($scope, $location, CategoryService, $routeParams){
    function randomizer(){
      return Math.ceil(Math.random() * 600);
    }

    CategoryService.getCategories(6, randomizer()).then(function(categories){
      console.log(categories.data);
      $scope.categories = categories.data;
    });
  })
