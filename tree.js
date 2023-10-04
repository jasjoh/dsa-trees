"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    let toVisitStack = [this];
    let sumValues = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      sumValues += current.val;

      for (let child of current.children) {
        toVisitStack.push(child)
      }
    }

    return sumValues;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {

  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){

  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    return this.root.sumValues();
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    return this.root.countEvens();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    return this.root.numGreater(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
