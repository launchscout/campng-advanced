angular.module("app").controller("EditCandidateController", function (Candidate, $location, $rootScope, $routeParams) {
  this.candidate = Candidate.get({id: $routeParams.id});

  this.save = function() {
    this.candidate.$save(function(savedCandidate) {
      $location.path("/candidates/" + savedCandidate.id);
      $rootScope.$broadcast("savedCandidate", savedCandidate);
    });
  };
});
