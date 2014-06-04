angular.module("app").directive("ssn", function() {
  var SSN_REGEX = /\d{3}-\d{2}-\d{4}/;
  return {
    require: "ngModel",
    restrict: "A",
    link: function(scope, element, attributes, modelCtrl) {
      modelCtrl.$parsers.push(function(viewValue) {
        if (SSN_REGEX.test(viewValue)) {
          modelCtrl.$setValidity("ssn", true);
          return viewValue;
        } else {
          modelCtrl.$setValidity("ssn", false);
          return undefined;
        }
      });
    }
  };
});
