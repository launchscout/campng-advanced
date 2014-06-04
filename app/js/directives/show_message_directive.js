angular.module("app").directive("showMessage", function() {
  return {
    template: "<div class='alert alert-success' ng-show='message' ng-click='close()'>{{message}}</div>",
    scope: {
      "message": "=",
      "close": "&"
    }
  };
});
