angular.module("app").controller("ShowCommentController", function (Candidate, $stateParams) {
  var that = this;
  Candidate.get({id: $stateParams.id}, function(candidate) {
    that.candidate = candidate;
    that.comment = candidate.comments[$stateParams.commentIndex];
  });

});
