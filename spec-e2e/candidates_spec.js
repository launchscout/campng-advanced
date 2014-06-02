var protractor = require('protractor');
require('protractor/jasminewd');

describe('my angular app', function () {
  var ptor;

  describe('visiting the list of candidates', function () {
    ptor = protractor.getInstance();

    beforeEach(function () {
      ptor.get('/list-of-candidates');
    });

    it('should show me a list of books', function() {
      firstRow = ptor.findElement(by.repeater("candidate in ctrl.candidates").row(0));

      firstRow.getText().then(function(text) {
        expect(text).toEqual("John Doe")
      });
    });
  });
});
