const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

module.exports = class BinarySearchTree {
constructor() {
  this.root = null
}
root(){
  return this.root;
}
  add(data) {
    this.root = addWithin(this.root, data);
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
  /*has(data) {
    return searchWithin(this.root, data)
    function searchWithin(node, data) {
      if(!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? 
      searchWithin(node.left, data) :
      searchWithin(node.left, data);
    }}
  */
 has(data) {
   let current = this.root;
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
    let current = this.root;
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
}
  remove(data) {
    this.root = removeNode(this.root, data)
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
        node.value = minFromRight.value
        node.right = removeNode(node.right, minFromRight.data)
        return node
      }
    }
  };
  
  min() {
    let current = this.root;
    while(current.left !== null) {
      current = current.left;
    }
  }
  max() {
    let current = this.root
    while(current.left !== null){
      current = current.left
    }
    return current.data
  }
}
