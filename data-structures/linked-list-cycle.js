// https://leetcode.com/problems/linked-list-cycle/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const visitedNodes = new Set();
  let node = head;

  while (node) {
    if (visitedNodes.has(node)) {
      return true;
    }

    visitedNodes.add(node);
    node = node.next;
  }

  return false;
};

var hasCycleChasing = function (head) {
  if (!head || !head.next) return false;

  let walker = head;
  let runner = head;

  while (runner.next && runner.next.next) {
    walker = walker.next;
    runner = runner.next.next;

    if (runner === walker) {
      return true;
    }
  }

  return false;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head = new ListNode(1);
const node2 = new ListNode(2);
head.next = node2;
const node3 = new ListNode(3);
node2.next = node3;
const node4 = new ListNode(4);
node3.next = node4;
const node5 = new ListNode(5);
node4.next = node5;
node5.next = node2;

console.log(hasCycleChasing(head));
