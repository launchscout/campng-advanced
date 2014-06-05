  describe('markdown', function() {

    it('should markdown', inject(function(markdownFilter) {
      expect(markdownFilter('hi *there*')).toEqual('<p>hi <em>there</em></p>');
    }));
  });
