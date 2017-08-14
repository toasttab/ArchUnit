'use strict';

module.exports.newInstance = (treeVisualizer, dependenciesVisualizer) => {
  return {
    visualizeGraph: graph => {
      dependenciesVisualizer.visualizeDependencies(graph.root._dependencies);
    },
    drag: (graph, node, dx, dy, force) => {
      treeVisualizer.dragNode(node, dx, dy, false);
      dependenciesVisualizer.refreshVisualDataOf(node.getFullName(), graph.getVisibleDependencies());
    },
    update: graph => {
      treeVisualizer.visualizeTree(graph.root);
      dependenciesVisualizer.refreshVisualDataOfDependencies(graph.getVisibleDependencies())
    }
  }
};