angular.module("app").controller("CandidatesController", function (Candidate, $rootScope) {
  this.candidates = Candidate.query();
  var that = this;
  $rootScope.$on("newCandidate", function(event, newCandidate) {
    that.candidates.push(newCandidate);
  });
  $rootScope.$on("savedCandidate", function(event, savedCandidate) {
    candidate = _.findWhere(that.candidates, {id: savedCandidate.id})
    if (candidate) {
      _.extend(candidate, savedCandidate);
    }
  });
});
