angular.module("app").controller("CandidatesController", function (Candidate, $rootScope) {
  this.candidates = Candidate.query();
  var that = this;
  $rootScope.$on("newCandidate", function(event, newCandidate) {
    that.candidates.push(newCandidate);
  });
});
