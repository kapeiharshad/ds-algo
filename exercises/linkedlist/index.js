// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    return (this.head = null);
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    return this.head;
  }
  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      return (this.head = null);
    }
    let pre = this.head;
    let node = this.head.next;
    while (node.next) {
      pre = node;
      node = node.next;
    }
    return (pre.next = null);
  }
  insertLast(data){
let last = this.getLast();
if (last) {
  last.next=new Node(data)
} else {
  this.head= new Node(data)
}
  }
}
module.exports = { Node, LinkedList };
