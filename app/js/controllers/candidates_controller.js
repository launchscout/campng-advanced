// with $resource
angular.module("app").controller("CandidatesController", function (Candidate) {
  this.candidates = Candidate.query();
});

// with $http
// angular.module("app").controller("BooksController", function ($scope, BookService) {
//   $scope.books = BookService.getBooks();
// });
