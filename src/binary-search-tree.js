const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.binaryTreeRoot = null;
  }

  root() {
    return this.binaryTreeRoot;
  }

  add(value) {
    this.binaryTreeRoot = addNode(this.binaryTreeRoot, value);

    function addNode(node, value) {
      if (!node) return new Node(value);

      if (value === node.data) return node;

      if (value < node.data) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return !!this.find(value);
  }

  find(value) {
    return findNode(this.binaryTreeRoot, value);

    function findNode(node, value) {
      if (!node) return null;

      if (value === node.data) return node;

      return value < node.data ? findNode(node.left, value) : findNode(node.right, value);
    }
  }

  remove(value) {
    this.binaryTreeRoot = removeNode(this.binaryTreeRoot, value);

    function removeNode(node, value) {
      if (!node) return null;

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.binaryTreeRoot) return;

    let node = this.binaryTreeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.binaryTreeRoot) return;

    let node = this.binaryTreeRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};