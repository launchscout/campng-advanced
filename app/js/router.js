angular.module("app").config(function($stateProvider, $urlRouterProvider, $locationProvider) {


  $stateProvider.state("candidates", {
    url: '/candidates',
    templateUrl: 'candidates.html',
    controller: 'CandidatesController as ctrl'
  });

  $stateProvider.state("newCandidate", {
    url: '/candidates/new',
    templateUrl: 'new_candidate.html',
    controller: 'NewCandidateController as ctrl'
  });

  $stateProvider.state("showCandidate", {
    url: '/candidates/:id',
    templateUrl: 'show_candidate.html',
    controller: 'ShowCandidateController as ctrl'
  });

  $stateProvider.state("editCandidate", {
    url: '/candidates/:id/edit',
    templateUrl: 'edit_candidate.html',
    controller: 'EditCandidateController as ctrl'
  });

  $urlRouterProvider.otherwise('/candidates');

});
