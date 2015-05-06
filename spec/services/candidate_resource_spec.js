describe("Candidate service spec", function() {

  var CandidateSvc;

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function(Candidate, $httpBackend) {
    this.$httpBackend = $httpBackend;
  }));

  afterEach(function() {
    this.$httpBackend.verifyNoOutstandingRequest();
    this.$httpBackend.verifyNoOutstandingExpectation();
  });

  describe("finding candidates", function() {

    it("should find candidates", inject(function(Candidate) {
      this.$httpBackend.expectGET('/candidates').respond([{name: "Bob"}]);
      candidates = Candidate.query();
      this.$httpBackend.flush();
      expect(candidates.length).toEqual(1);
    }));

  });
});
