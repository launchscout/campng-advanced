angular.module("app", ["ngResource", "ui.router", "googleApi"]).run(function($rootScope, $state, CurrentUser) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };

  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    if (toState.name !== "login" && !CurrentUser.get()) {
      event.preventDefault();
      $state.go("login");
    }
  });
});

angular.module("app").config(function(googleLoginProvider) {
    googleLoginProvider.configure({
        clientId: '239511214798.apps.googleusercontent.com',
        scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/plus.login"]
    });
});
