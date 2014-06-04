angular.module("app").controller("CandidatesController", function (Candidate, $scope) {
  this.candidates = Candidate.query();

  this.dismissMessage = function() {
    this.message = null;
  }

  var that = this;
  $scope.$on("newCandidate", function(event, newCandidate) {
    that.candidates.push(newCandidate);
    that.message = "Candidate created.";
  });
  $scope.$on("savedCandidate", function(event, savedCandidate) {
    candidate = _.findWhere(that.candidates, {id: savedCandidate.id})
    if (candidate) {
      _.extend(candidate, savedCandidate);
    }
    that.message = "Candidate saved.";
  });
});
