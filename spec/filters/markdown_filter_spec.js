  describe('markdown', function() {

    beforeEach(module("app"));

    it('should markdown', inject(function(markdownFilter, $sce) {
      expect($sce.getTrustedHtml(markdownFilter('hi *there*'))).toEqual('<p>hi <em>there</em></p>');
    }));
  });
