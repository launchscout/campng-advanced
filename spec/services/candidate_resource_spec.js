describe("Candidate service spec", function() {


  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($httpBackend) {
    this.$httpBackend = $httpBackend;
  }));

  afterEach(function() {
    this.$httpBackend.verifyNoOutstandingRequest();
    this.$httpBackend.verifyNoOutstandingExpectation();
  });

  describe("finding candidates", function() {
    inject(function(Candidate) {
      it("should find candidates", function() {
        this.$httpBackend.expectGET('/candidates').respond([{name: "Bob"}]);
        candidates = Candidate.query();
        this.$httpBackend.flush();
        expect(candidates.length).toEqual(1);
      });
    });
  });

  describe("creating new candidates", function() {

    inject(function(Candidate) {
      it("should find candidates", function() {
        this.$httpBackend.expectPOST('/candidates').respond({name: "Bob", id: 1});
        candidate = new Candidate();
        candidate.name = "Bob";
        candidate.$save();
        this.$httpBackend.flush();
        expect(candidate.id).toEqual(1);
      });
    });

  });
});
