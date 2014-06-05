angular.module("app")
  .filter('markdown', function() {
    return function(text) {
      return markdown.toHTML(text);
    }
  });
