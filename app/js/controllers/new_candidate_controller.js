angular.module("app").controller("NewCandidateController", function (Candidate, $location, $rootScope) {
  this.candidate = new Candidate();

  this.save = function() {
    this.candidate.$save(function(savedCandidate) {
      $location.path("/candidates/" + savedCandidate.id);
      $rootScope.$broadcast("newCandidate", savedCandidate);
    });
  };
});
