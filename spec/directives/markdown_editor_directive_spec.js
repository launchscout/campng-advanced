describe("directive: markdown-editor", function() {

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($rootScope, $compile) {
    this.html = "<div markdown-editor text='text'></div>";
    this.scope = $rootScope.$new();
    this.scope.text = '**foo**';
    this.elem = $compile(this.html)(this.scope);
    $rootScope.$apply();
  }));

  it("sets the text in a textarea", function() {
    expect(this.elem.find("textarea").html()).toBe("**foo**");
  });

  it("renders the markdown", function() {
    expect(this.elem.find("div").html()).toMatch(/<strong>foo/);
  });

});
