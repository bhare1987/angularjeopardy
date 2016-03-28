angular
  .module('AngularJeopardy')
  .directive('playerDirective', function() {
    return {
      templateUrl: 'jeopardy/templates/player.html',
      restrict: 'AE',
      scope: {
        player: "="
      },
      link: function(scope,el,attributes) {

      },
    }
  })
