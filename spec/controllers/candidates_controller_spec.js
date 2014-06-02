describe("CandidatesController", function() {

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($controller, Candidate, $rootScope) {
    this.scope = $rootScope.$new();
    this.mockCandidate = {
      query: function() {
        return [{name: "Bill"}];
      }
    }
    this.controller = $controller('CandidatesController', {
      $scope: this.scope,
      Candidate: this.mockCandidate
    });
  }));

  it("should query for candidates", function() {
    expect(this.controller.candidates.length).toEqual(1);
    expect(this.controller.candidates[0].name).toEqual("Bill");
  });
});
