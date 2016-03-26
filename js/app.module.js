var angular = require('angular');
var angularRoute = require('angular-route');
var _ = require('underscore');
var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var annyang = require('annyang');
angular
  .module('AngularJeopardy', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'CategoryController'
      })
      .otherwise({
        redirectTo: '/404'
      })
  });

  require('./controllers/category.controller');
  require('./controllers/player.controller');
  require('./controllers/question.controller');
  require('./directives/player.directive');
  require('./services/player.service');
  require('./services/category.service');
  require('./services/player.service');
  require('./services/cache.service');
  require('./services/question.service');
