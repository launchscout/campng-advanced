describe('hello filter', function() {

  beforeEach(module("app"));
  
  it('should say hello', inject(function(helloFilter) {
    expect(helloFilter('World')).toEqual('Hello World');
  }));
});
