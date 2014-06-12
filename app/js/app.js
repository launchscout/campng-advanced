angular.module("app", ["ngResource", "ui.router"]).run(function($rootScope, $state, CurrentUser) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };

  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    console.log("goin to " + toState);
  });
});
