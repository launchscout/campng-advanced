angular.module("app").controller("LoginController", function (googleLogin, $state, CurrentUser) {

  this.login = function() {

    googleLogin.login().then(function (user) {
      CurrentUser.set(user);
      $state.go("candidates");
    });

  };

});
