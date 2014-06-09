angular.module("app").filter("hello", function() {
  return function(text) {
    return "Hello " + text;
  };
});
