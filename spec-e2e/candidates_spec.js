describe('my angular app', function () {
  var ptor;
  ptor = protractor.getInstance();

  describe('visiting the list of candidates', function () {


    beforeEach(function () {
      browser.get('/');
    });

    it('should show me a list of books', function() {
      firstRow = element(by.repeater("candidate in ctrl.candidates").row(0));

      firstRow.getText().then(function(text) {
        expect(text).toEqual("John Doe")
      });
    });
  });

  describe("creating a new candidate", function() {
    beforeEach(function() {
      browser.get("#/candidates/new");
    });

    it("should display the candidate after creating", function() {
      element(by.model("ctrl.candidate.name")).sendKeys("Fred");
      element(by.buttonText("Save")).click();
      expect(element(by.css("body")).getText()).toMatch(/Fred/);
    });
  });
});
