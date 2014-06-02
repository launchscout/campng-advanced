angular.module("app").factory("Candidate", function($q, $resource) {
  return $resource('/candidates');
});
