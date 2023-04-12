const { NotImplementedError, ListNode } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    const node = new ListNode(element);

    if(this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }

    this.lenght++;
  }

  pop() {
    const cur = this.head;
    this.head = this.head.next;
    this.lenght--;

    return cur.value;
  }

  peek() {
    return this.head.value;
  }
}

module.exports = {
  Stack
};
