angular.module("app").config(function($routeProvider, $locationProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/list-of-books', {
    templateUrl: 'books.html',
    controller: 'BooksController'
    // uncomment if you want to see an example of a route that resolves a request prior to rendering
    // resolve: {
    //   books : function(BookService) {
    //     return BookService.get();
    //   }
    // }
  });

  $routeProvider.when('/candidates', {
    templateUrl: 'candidates.html',
    controller: 'CandidatesController as ctrl'
  });

  $routeProvider.when('/candidates/new', {
    templateUrl: 'new_candidate.html',
    controller: 'NewCandidateController as ctrl'
  });

  $routeProvider.when('/candidates/:id', {
    templateUrl: 'show_candidate.html',
    controller: 'ShowCandidateController as ctrl'
  });

  $routeProvider.when('/candidates/:id/edit', {
    templateUrl: 'edit_candidate.html',
    controller: 'EditCandidateController as ctrl'
  });

  $routeProvider.otherwise({ redirectTo: '/candidates' });

});
