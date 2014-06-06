angular.module("app")
  .filter('markdown', function($sce) {
    return function(text) {
      return $sce.trustAsHtml(markdown.toHTML(text));
    }
  });
