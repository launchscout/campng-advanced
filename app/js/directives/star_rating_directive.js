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
        $(element).raty("score", this.$viewValue);
      };
      modelCtrl.$formatters.push(function(modelValue) {
        return modelValue / 20;
      });
      modelCtrl.$parsers.push(function(viewValue) {
        return viewValue * 20;
      });
    }
  };
});
