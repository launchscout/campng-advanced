describe('hello filter', function() {

  beforeEach(module("app"));

  it('should say hello', inject(function(helloFilter, $sce) {
    expect($sce.getTrustedHtml(helloFilter('World', "there"))).toEqual('<b>Hello</b>thereWorld');
  }));
});
