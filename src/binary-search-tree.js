const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

module.exports = class BinarySearchTree {
constructor() {
  this._root = null
}
root(){
  return this._root;
}
  add(data) {
    this._root = addWithin(this._root, data);
    function addWithin(node, data){
      if (!node) {
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }

      if (data<node.data) {
        node.left = addWithin(node.left, data);
      }else {
        node.right= addWithin(node.right, data);
      }
      return node;
    }
    }
 has(data) {
   let current = this._root;
   while(current) {
     if(data === current.data) {
       return true;
     }
     if(data < current.data) {
       current = current.left;
     }else {
       current = current.right;
     }
   }
   return false;
 }
 
  find(data) {
    let current = this._root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
  }
  return current
}
  remove(data) {
    this._root = removeNode(this._root, data)
    function removeNode(node, data){
      if(!node) {
        return null;
      }
      if(data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeNode(node.right, minFromRight.data)
        return node
      }
    }
  };
  
  min() {
    if(!this._root){
      return;
    }
    let node = this._root;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }
  max() {
    if(!this.root){
      return;
    }
    let node = this._root
    while(node.right){
      node = node.right
    }
    return node.data
  }
}
