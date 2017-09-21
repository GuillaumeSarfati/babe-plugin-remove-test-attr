var nestedVisitor = {
  JSXAttribute: function(node) {
    if (node.node.name.name === 'testID' || node.node.name.name === 'data-testid' || node.node.name.name.match(/^test/)) {
      node.remove()
    }
  }
};

module.exports = function() {
  return {
    visitor: {
      JSXElement: function(path, file) {
        path.traverse(nestedVisitor);
      }
    }
  };
};
