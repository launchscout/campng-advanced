angular.module("app").controller("ShowCandidateController", function (Candidate, $stateParams) {
  this.candidate = Candidate.get({id: $stateParams.id});

});
