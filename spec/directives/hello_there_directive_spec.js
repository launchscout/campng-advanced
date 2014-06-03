describe("directive: hello-there", function() {

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($rootScope, $compile) {
    this.directiveMessage = 'it works';
    this.html = "<div hello-there message='" + this.directiveMessage + "'></div>";
    this.scope = $rootScope.$new();
    this.elem = $compile(this.html)(this.scope);
    $rootScope.$apply();
  }));


  it("sets the message in the elements text", function() {
    expect(this.elem.text()).toBe("it works");
  });


});
