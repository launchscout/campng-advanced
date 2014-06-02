describe("NewCandidateController", function() {

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($controller, Candidate, $rootScope) {
    this.scope = $rootScope.$new();
    this.controller = $controller('NewCandidateController', {
      $scope: this.scope,
    });
    spyOn(this.controller.candidate, "$save")
  }));

  it("should save for candidates", function() {
    this.controller.save();
    expect(this.controller.candidate.$save).toHaveBeenCalled();
  });
});
