angular.module("app").controller("NewCandidateController", function (Candidate) {
  this.candidate = new Candidate();

  this.save = function() {
    this.candidate.$save();
  }
});
