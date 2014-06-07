angular.module("app").service('CurrentUser', function() {
  this.get = function() {
    return this.user;
  }
  this.set = function(user) {
    this.user = user;
  }
});
