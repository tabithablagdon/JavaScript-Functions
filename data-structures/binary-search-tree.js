var Node = function(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = function() { return this.data; };
};

var BST = function() {
  this.root = null;
  this.count = 0;
};

BST.prototype = (function(){
  
  var contains = function(data) {
    var found = false;
    var current = this.root;
    // test for numerical value - change this depending on data types in BST
    if (isNaN(data)) {
      throw 'Error: Must enter a number into contains()'	
    }
    while (!found && current) {
      if (data < current.data) {
      	current = current.left;
      }	else if (data > current.data) {
        current = current.right;	
      } else {
        found = true;	
      }
    }
  	return found;
  };
  
  var getMax = function() {
    var current = this.root;
    while (current.right) {
      current = current.right;	
    }
    return current.data;
  };
  
  var getMin = function() {
    var current = this.root;
    while (current.left) {
      current = current.left;	
    }
    return current.data;
  };
  
  var insert = function(data) {
    var newNode = new Node(data, null, null);
    if (this.root === null) {
      this.root = newNode;	
    } else {
      var currNode = this.root;
      var parent;
      while (true) {
      	parent = currNode;
      	if (data < currNode.data) {
      	  currNode = currNode.left;
      	  if (currNode === null) {
      	  	parent.left = newNode;
      	  	break;
      	  }
      	} else {
      	  currNode = currNode.right;
      	  if (currNode === null) {
      	  	parent.right = newNode;
      	  	break;
      	  }
      	}
      }
    }
    this.count++;
  };
  var inOrder = function(node) {
    if (node) {
      inOrder(node.left);
      console.log(node.show());
      inOrder(node.right);
    }
  };
  
  var preOrder = function(node) {
  	if (node) {
  	  console.log(node.show());
  	  preOrder(node.left);
  	  preOrder(node.right);
  	}
  };
  
  var postOrder = function(node) {
  	if (node) {
  	  postOrder(node.left);
  	  postOrder(node.right);
  	  console.log(node.show());
  	}
  };
  
  var remove = function(data) {
    root = removeNode(this.root, data);
    this.count--;
  };
  
  var removeNode = function(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;	
      }
      if (node.left === null) {
        return node.right;	
      }
      if (node.right === null) {
        return node.left;	
      }
      var tempNode = getMin(node.right);
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  };
  
  var size = function() {
  	return this.count;
  };
  
  
  return {
  	constructor: BST, 
  	contains: contains, 
  	getMax: getMax, 
  	getMin: getMin, 
  	inOrder: inOrder, 
  	insert: insert, 
  	preOrder: preOrder, 
  	postOrder: postOrder, 
  	remove: remove,
  	size: size
  }
})();

var newTree = new BST();

newTree.insert(23);
newTree.insert(45);
newTree.insert(16);
newTree.insert(37);
newTree.insert(3);
newTree.insert(99);
newTree.insert(22);

newTree.inOrder(newTree.root);
/*
=> 3
16
22
23
37
45
99
*/
newTree.preOrder(newTree.root);
/*
=> 23
16
3
22
45
37
99
*/
newTree.postOrder(newTree.root);
/*
3
22
16
37
99
45
23
*/
newTree.getMin();
// => 3
newTree.getMax();
// => 99
newTree.contains(12);
// => false
newTree.contains(22);
// => true
newTree.contains('name');
// => Error: Must enter a number into contains()

newTree.size()
// => 7
