angular.module("app").directive("starRating", function() {
  return {
    require: "ngModel",
    scope: {
      "rating": "="
    },
    link: function(scope, element, attrs, modelCtrl) {
      $(element).raty({
        path: "/img",
        click: function(score, event) {
          scope.$apply(function() {
            modelCtrl.$setViewValue(score);
          });
        }
      });
      modelCtrl.$render = function() {
        $(element).raty("score", this.$modelValue);
      };
    }
  };
});
