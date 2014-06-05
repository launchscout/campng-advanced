// with $resource
angular.module("app").controller("CandidatesController", function (Candidate) {
  this.candidates = Candidate.query();
});
