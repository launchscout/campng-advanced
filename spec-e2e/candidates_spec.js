var protractor = require('protractor');
require('protractor/jasminewd');

var MockModule = function() {
  angular.module("MockModule", ["app"]).run(function (CurrentUser) {
    CurrentUser.get = function() {
      return {user: "bob"};
    }
  });
}
describe('my angular app', function () {
  var ptor;
  ptor = protractor.getInstance();

  beforeEach(function() {
    ptor.addMockModule("MockModule", MockModule);
  });

  describe('visiting the list of candidates', function () {


    beforeEach(function () {
      ptor.get('/');
    });

    it('should show me a list of books', function() {
      firstRow = ptor.findElement(by.repeater("candidate in ctrl.candidates").row(0));

      firstRow.getText().then(function(text) {
        expect(text).toEqual("John Doe")
      });
    });
  });

  describe("creating a new candidate", function() {
    beforeEach(function() {
      ptor.get("#/candidates/new");
    });

    it("should display the candidate after creating", function() {
      element(by.model("ctrl.candidate.name")).sendKeys("Fred");
      element(by.buttonText("Save")).click();
      expect(element(by.css("body")).getText()).toMatch(/Fred/);
      var lastRow = element.all(by.repeater("candidate in ctrl.candidates")).last();
      expect(lastRow.getText()).toMatch(/Fred/);
    });
  });
});
