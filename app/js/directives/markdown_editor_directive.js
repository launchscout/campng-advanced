angular.module("app").directive("markdownEditor", function() {
  return {
    templateUrl: "markdown_editor.html",
    scope: {
      "text": "="
    }
  }
});
