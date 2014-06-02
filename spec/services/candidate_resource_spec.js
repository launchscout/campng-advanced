describe("Candidate service spec", function() {

  var CandidateSvc;

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function(Candidate, $httpBackend) {
    this.$httpBackend = $httpBackend;
    CandidateSvc = Candidate;
  }));

  afterEach(function() {
    this.$httpBackend.verifyNoOutstandingRequest();
    this.$httpBackend.verifyNoOutstandingExpectation();
  });

  it("should find candidates", function() {
    this.$httpBackend.expectGET('/candidates').respond([{name: "Bob"}]);
    candidates = CandidateSvc.query();
    this.$httpBackend.flush();
    expect(candidates.length).toEqual(1);
  });
});
