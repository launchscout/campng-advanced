angular.module("app").controller("ShowCandidateController", function (Candidate, $routeParams) {
  this.candidate = Candidate.get({id: $routeParams.id})

});
