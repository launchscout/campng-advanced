describe('my angular app', function () {

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
});
