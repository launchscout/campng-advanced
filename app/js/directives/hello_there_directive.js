angular.module("app").directive("helloThere", function() {
  return {
    template: "<div>{{message}}</div>",
    scope: {
      "message": "@"
    }
  };
});
