angular.module("app").directive("dollarInputGroup", function() {
  return {
    restrict: "EA",
    replace: true,
    transclude: true,
    templateUrl: "dollarInputGroup.html",
  };
});
