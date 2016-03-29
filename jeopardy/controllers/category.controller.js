var _ = require('underscore');
var $ = require('jquery');

angular
  .module('AngularJeopardy')
  .controller('CategoryController', function($scope, CategoryService){
    var vm = this;
    CategoryService.allCats(6)
      .then(function(categories){
        vm.categories = categories;
      });
    vm.skipAnswer = function(question){
      var modal = '#' + question.id;
      $(modal).modal('hide');
      $(modal).siblings('.question-value').text('').attr("disabled", true);
      vm.player.answer = question.answer;
    }
    vm.getAnswer = function(question){
      var modal = '#' + question.id;
      if(question.answer.toLowerCase().includes(question.userAnswer.toLowerCase())){
        vm.updateScore(question.value);
      } else {
        vm.updateScore(-question.value);
      }
      $(modal).modal('hide');
      $(modal).siblings('.question-value').text('').attr("disabled", true);
      vm.player.answer = question.answer;
    }
    vm.player = {
      score: 0,
      answer: ""
    };
    vm.updateScore = function(points){
      vm.player.score += points;
    }


  })
