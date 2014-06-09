angular.module("app").directive("starRating", function() {
  return {
    link: function(scope, element, attrs) {
      $(element).raty({
        path: "/img",
      });
    }
  }
});
