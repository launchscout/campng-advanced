angular.module("app").controller("EditCandidateController", function (Candidate, $location, $rootScope, $stateParams) {
  this.candidate = Candidate.get({id: $stateParams.id});

  this.save = function() {
    this.candidate.$save(function(savedCandidate) {
      $location.path("/candidates/" + savedCandidate.id);
      $rootScope.$broadcast("savedCandidate", savedCandidate);
    });
  };
});
