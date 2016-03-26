var _ = require('underscore');
var annyang = require('annyang');
var $ = require('jquery');

angular
  .module('AngularJeopardy')
  .controller('CategoryController', function($scope, CategoryService){
    CategoryService.allCats()
      .then(function(categories){
        $scope.categories = categories;
        console.log(categories);
        $scope.categories.forEach(function(el){
          if(el.data.clues_count > 5){
            el.data.clues = _.first(_.shuffle(el.data.clues), 5);
          }
          for(var i = 0; i < 5; i++){
            el.data.clues[i].value = 200 * (i + 1);
          }
        })
      })
    $scope.getAnswer = function(){
      var modal = '#' + this.question.id;
      if(this.question.answer === this.question.userAnswer){
        $scope.updateScore(this.question.value);
      } else {
        $scope.updateScore(-this.question.value);
      }
      $(modal).modal('hide');
      $(modal).siblings('.question-value').text('').attr("disabled", true);
      $scope.player.answer = this.question.answer;
      ;
    }
    $scope.player = {
      score: 0,
      answer: ""
    };
    $scope.updateScore = function(points){
      $scope.player.score += points;
    }

  })
