"use strict";

// /** TreeNode: node for a general tree. */
//** USING STACK */

// class TreeNode {
//   constructor(val, children = []) {
//     this.val = val;
//     this.children = children;
//   }

//   /** sumValues(): add up all values of invoking node and its children.
//    * Returns sum as an integer. */
//   sumValues() {
//     let toVisitStack = [this];
//     let sumValues = 0;

//     while (toVisitStack.length) {
//       let current = toVisitStack.pop();

//       sumValues += current.val;

//       for (let child of current.children) {
//         toVisitStack.push(child)
//       }
//     }

//     return sumValues;
//   }

//   /** countEvens(): starting from the invoking node and moving through its
//    * children, count how many nodes have even values. Returns that count as
//    * an integer. */
//   countEvens() {
//     let toVisitStack = [this];
//     let evensCount = 0;

//     while(toVisitStack.length){
//       let current = toVisitStack.pop();

//       if(current.val % 2 === 0){
//         evensCount++;
//       }

//       for(let child of current.children){
//         toVisitStack.push(child);
//       }
//     }
//     return evensCount;
//   }

//   /** numGreater(lowerBound): starting from the invoking node and moving through
//    * its children, return a count of the number of nodes whose value is greater
//    * than lowerBound. */
//   numGreater(lowerBound){
//     let toVisitStack = [this];
//     let greaterCount = 0;

//     while(toVisitStack.length){
//       let current = toVisitStack.pop();

//       if(current.val > lowerBound){
//         greaterCount++;
//       }

//       for(let child of current.children){
//         toVisitStack.push(child);
//       }
//     }
//     return greaterCount;
//   }
// }

// class Tree {
//   constructor(root = null) {
//     this.root = root;
//   }

//   /** sumValues(): add up all values in the tree. */
//   sumValues() {
//     return this.root === null? this.root.sumValues() : 0;
//   }

//   /** countEvens(): count all nodes in the tree that have even values. */
//   countEvens() {
//     return this.root === null? this.root.countEvens(): 0;
//   }

//   /** numGreater(lowerBound): return a count of the number of nodes
//    * whose value is greater than lowerBound. */
//   numGreater(lowerBound) {
//     return this.root === null? this.root.numGreater(lowerBound): 0;
//   }
// }


/** RECURSIVELY */

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    let sum = 0;
    sum += this.val;
    for (let child of this.children) {
      sum += child.sumValues()
    }
    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let count = 0;
    if (this.val % 2 === 0) { count++; }
    for (let child of this.children) {
      count += child.countEvens();
    }
    return count;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){
    let count = 0;
    if (this.val > lowerBound) { count++; }
    for (let child of this.children) {
      count += child.numGreater(lowerBound);
    }
    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    // base case: this.children.length === 0
    // add itself
    // for every child, call sumValues() add result to sum
    let sum = 0;
    sum += this.root === null ? 0 : this.root.sumValues();
    return sum;
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    let count = 0;
    if (this.root !== null) { count += this.root.countEvens(); }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    let count = 0;
    if (this.root !== null) { count += this.root.numGreater(lowerBound); }
    return count;
  }
}

module.exports = { Tree, TreeNode };
