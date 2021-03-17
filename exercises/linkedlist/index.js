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
  insertLast(data) {
    let last = this.getLast();
    if (last) {
      last.next=new Node(data)
    } else {
      this.head= new Node(data)
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(index){
    if (!this.head) {
      return
    }
    if (index===0) {
      this.head = this.head.next
      return
    }

    let pre = this.getAt(index-1)
    if (!pre|| !pre.next) {
      return
    }
    pre.next=pre.next.next;
  }
  insertAt(data,index){
    if (index===0) {
      const node=new Node(data)
      node.next=this.head
      this.head=node
      return
    }
    let pre = this.getAt(index-1);
    let node = this.getAt(index)
    if (pre || node) {
      pre.next=new Node(data);
      pre.next.next=node
    } else {
      const node=new Node(data)
      this.getLast().next=node
    }

  }
  forEach(func){
    let node=this.head;
    while (node) {
     func(node)
     node=node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
module.exports = { Node, LinkedList };
