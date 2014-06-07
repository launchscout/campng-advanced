angular.module("app").controller("LoginController", function (CurrentUser, $state) {

  this.login = function() {
    CurrentUser.set({userName: "Bob"});
    $state.go("candidates");
  };
});
