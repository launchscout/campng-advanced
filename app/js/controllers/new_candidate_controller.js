angular.module("app").controller("NewCandidateController", function (Candidate, $location) {
  this.candidate = new Candidate();

  this.save = function() {
    this.candidate.$save(function(savedCandidate) {
      $location.path("/candidates/" + savedCandidate.id);
    });
  }
});
