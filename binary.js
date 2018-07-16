class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const node = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
    }
  }

  search(value) {
    if (this.value === value) return this.value; //baseCase when found
    if (value < this.value) {
      if (this.left) {
        return this.left.search(value);
      } else {
        return 'value does not exist in tree';
      }
    } else if (value > this.value) {
      if (this.right) {
        return this.right.search(value);
      } else {
        return 'value does not exist in tree';
      }
    }
  }

  breadthFirstForEach(callBack) {
    const queue = [this];
    while (queue.length) {
      let node = queue.shift();
      callBack(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  depthFirstForEach(type, callBack) {
    if (type === 'pre-order') {
      this.preOrder(callBack);
    } else if (type === 'post-order') {
      this.postOrder(callBack);
    } else if (type === 'in-order') {
      this.inOrder(callBack);
    }
  }

  preOrder(callBack) {
    callBack(this.value);
    if (this.left) this.left.preOrder(callBack);
    if (this.right) this.right.preOrder(callBack);
  }

  postOrder(callBack) {
    if (this.left) this.left.postOrder(callBack);
    if (this.right) this.right.postOrder(callBack);
    callBack(this.value);
  }

  inOrder(callBack) {
    if (this.left) this.left.inOrder(callBack);
    callBack(this.value);
    if (this.right) this.right.inOrder(callBack);
  }
}

module.exports = BinarySearchTree;
