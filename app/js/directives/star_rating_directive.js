angular.module("app").directive("starRating", function() {
  return {
    scope: {
      "rating": "="
    },
    link: function(scope, element, attrs) {
      $(element).raty({
        path: "/img",
      });
      scope.$watch("rating", function(rating) {
        $(element).raty("score", rating);
      });
    }
  }
});
