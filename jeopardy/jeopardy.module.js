var angular = require('angular');
var angularRoute = require('angular-route');
var _ = require('underscore');
var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');

angular
  .module('AngularJeopardy', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/jeopardy', {
        templateUrl: 'jeopardy/templates/game.html',
        controller: 'CategoryController'
      })
      .otherwise({
        redirectTo: '/404'
      })
  });
