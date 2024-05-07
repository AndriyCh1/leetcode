/*

  1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
  Given two binary trees original and cloned and given a reference to a node target in the original tree.
  The cloned tree is a copy of the original tree.
  Return a reference to the same node in the cloned tree.
  Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

  Example 1:
  Input: tree = [7,4,3,null,null,6,19], target = 3
  Output: 3
  Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.

  Example 2:
  Input: tree = [7], target =  7
  Output: 7

  Example 3:
  Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
  Output: 4
  
  Constraints:

  The number of nodes in the tree is in the range [1, 104].
  The values of the nodes of the tree are unique.
  target node is a node from the original tree and is not null.
  
  Follow up: Could you solve the problem if repeated values on the tree are allowed?

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const originalNode5 = new TreeNode(10, null, null);
const originalNode4 = new TreeNode(6, null, null);
const originalNode3 = new TreeNode(3, originalNode4, originalNode5);
const originalNode2 = new TreeNode(4, null, null);
const originalRoot = new TreeNode(7, originalNode2, originalNode3);

const clonedNode5 = new TreeNode(10, null, null);
const clonedNode4 = new TreeNode(6, null, null);
const clonedNode3 = new TreeNode(3, clonedNode4, clonedNode5);
const clonedNode2 = new TreeNode(4, null, null);
const clonedRoot = new TreeNode(7, clonedNode2, clonedNode3);

var getTargetCopy = function (original, cloned, target) {
  if (!original) return null;

  // NOTE: Need this to track the references if repeated values on the tree are allowed
  const queue = [[original, cloned]];

  while (queue.length) {
    const current = queue.shift();

    if (current[0] === target) return current[1];
    if (current[0].left) queue.push([current[0].left, current[1].left]);
    if (current[0].right) queue.push([current[0].right, current[1].right]);
  }

  return null;
};

console.log(getTargetCopy(originalRoot, clonedRoot, originalNode3));

/*
  NOTE: The fastest solution:

  var getTargetCopy = function (original, cloned, target) {
    function dfs(node, target) {
      if (node == null) {
        return null;
      }
      if (node.val == target.val) {
        return node;
      }
      let left = dfs(node.left, target);
      if (left !== null) {
        return left;
      }
      return dfs(node.right, target);
    }

    return dfs(cloned, target);
  };
*/
