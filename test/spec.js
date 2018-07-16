const expect = require('chai').expect;
const BinarySearchTree = require('../binary');

describe('Binary Search Tree', function() {
  it('exist', function() {
    expect(BinarySearchTree).to.be.ok;
  });
  it('can add a single value/node to each side of the tree', function() {
    const tree = new BinarySearchTree(5);
    tree.insert(4);
    tree.insert(6);
    expect(tree.left.value).to.equal(4);
    expect(tree.right.value).to.equal(6);
  });
  it('can add values/nodes recurively', function() {
    const tree = new BinarySearchTree(20);
    tree.insert(25);
    tree.insert(15);
    tree.insert(17);
    tree.insert(23);
    tree.insert(100);
    tree.insert(10);
    expect(tree.left.value).to.equal(15);
    expect(tree.left.right.value).to.equal(17);
    expect(tree.right.left.value).to.equal(23);
    expect(tree.right.right.value).to.equal(100);
  });
  it('can search for values/nodes in the tree recursively', function() {
    const tree = new BinarySearchTree(20);
    tree.insert(25);
    tree.insert(15);
    tree.insert(17);
    tree.insert(23);
    tree.insert(100);
    tree.insert(10);
    expect(tree.search(100)).to.equal(100);
    expect(tree.search(25)).to.equal(25);
    expect(tree.search(22)).to.equal(`value does not exist in tree`);
  });
  it('can traverse the array breathfirst', function() {
    const tree = new BinarySearchTree(20);
    const numToAdd = [25, 15, 17, 23, 100, 10];
    numToAdd.forEach(num => {
      tree.insert(num);
    });
    const traversal = [];

    tree.breadthFirstForEach(val => {
      traversal.push(val);
    });

    expect(traversal).to.eql([20, 15, 25, 10, 17, 23, 100]);
  });

  it('can traverse tree pre-order', function() {
    const tree = new BinarySearchTree(20);
    const numToAdd = [25, 15, 17, 23, 100, 10];
    numToAdd.forEach(num => {
      tree.insert(num);
    });
    const traversal = [];

    tree.depthFirstForEach('pre-order', val => {
      traversal.push(val);
    });
    expect(traversal).to.eql([20, 15, 10, 17, 25, 23, 100]);
  });
  it(`can traverse tree post-order`, function() {
    const tree = new BinarySearchTree(20);
    const numToAdd = [25, 15, 17, 23, 100, 10];
    numToAdd.forEach(num => {
      tree.insert(num);
    });
    const traversal = [];

    tree.depthFirstForEach('post-order', val => {
      traversal.push(val);
    });
    expect(traversal).to.eql([10, 17, 15, 23, 100, 25, 20]);
  });
  it(`can traverse tree in-order`, function() {
    const tree = new BinarySearchTree(20);
    const numToAdd = [25, 15, 17, 23, 100, 10];
    numToAdd.forEach(num => {
      tree.insert(num);
    });
    const traversal = [];

    tree.depthFirstForEach('in-order', val => {
      traversal.push(val);
    });
    expect(traversal).to.eql([10, 15, 17, 20, 23, 25, 100]);
  });
});
