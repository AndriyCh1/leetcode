/*
  94. Binary Tree Inorder Traversal
  Given the root of a binary tree, return the inorder traversal of its nodes' values.

  Example 1:
  Input: root = [1,null,2,3]
  Output: [1,3,2]

  Example 2:
  Input: root = []
  Output: []

  Example 3:
  Input: root = [1]
  Output: [1]

  Constraints:

  The number of nodes in the tree is in the range [0, 100].
  -100 <= Node.val <= 100
  

  Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node3 = new TreeNode(3, null, null);
const node2 = new TreeNode(2, originalNode3, null);
const root = new TreeNode(1, null, originalNode2);

var inorderTraversal = function (root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
      continue;
    }

    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }

  return res;
};

console.log(inorderTraversal(originalRoot));
console.log(inorderTraversal(new TreeNode(1, null, null)));

/*  NOTE: Fastest solution:

var inorderTraversal = function(root) {
    const result = []
    const stack = [] 
    let current = root

    while(stack.length > 0 || current !== null) { 
        while(current !== null){ 
            stack.push(current) 
            current = current.left
        }
        
        current = stack.pop()
        result.push(current.val) 

        current = current.right 
    }
  
  return result
};
*/
