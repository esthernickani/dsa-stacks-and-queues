/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let node = new Node(val)
    if (this.size == 0) {
      this.first = node;
      this.last = this.first;
    } else {
      node.next = this.first
      this.first = node
    }
    
    this.size ++;
    return;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size == 0) {
      throw new Error('Queue is empty')
    } else {
      let item = this.first;
      this.first = this.first.next;
      this.size --;
      return item.val
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    
    if (this.size == 0) {
      throw new Error('Queue is empty')
    } else {
      return this.first.val
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size == 0? true : false;
  }
}

module.exports = Stack;
