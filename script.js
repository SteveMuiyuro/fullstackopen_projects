// LinkedList class / factory, which will represent the full list.

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //prepend(value) adds a new node containing value to the start of the list

  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
    return this.size; // size returns the total number of nodes in the list
  }

  // append(value) adds a new node containing value to the end of the list

  append(value) {
    let node = new Node(value);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
    return this.size; // size returns the total number of nodes in the list
  }
  // head returns the first node in the list

  getFirst() {
    return this.head;
  }

  // tail returns the last node in the list
  lastNode() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      return lastNode;
    }
  }

  // at(index) returns the node at the given index
  getNodeAtIndex(index) {
    count = 0;
    let current = this.head;
    if (current) {
      while (current.next) {
        if (count === index) {
          return current.value;
        }
        count++;
        node = node.next;
      }
    }
    return null;
  }

  //pop removes the last element from the list
  removeLast() {
    if (this.head == null) return null;
    if (this.head.next == null) return null;

    let current = this.head;

    while (current.next.next != null) {
      current = current.next;
    }

    current.next = null;
    this.size--;
    return this.head;
  }

  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let current = this.head;
    while (current.next) {
      if (current.data === value || current.next.data === value) {
        return true;
      } else return false;
    }
  }

  //find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let current = this.head;
    count = 0;

    while (current) {
      if (current.value === value) return count;
      else return null;
    }
    current = current.next;
    count++;
  }

  //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    `${this.head} -> ${this.head.next} -> ${this.head.next.next} -> null`;
  }

  // insertAt(value, index) that inserts a new node with the provided value at the given index.

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return;
    } else if (index === 0) {
      this.append(data);
      return;
    }
    let node = new Node(data);
    let current = this.head;
    let previous;
    let currentPosition = 0;
    while (currentPosition < index) {
      previous = current; // Node before index
      current = current.next; // Node after index
      currentPosition++;
    }
    previous.next = node; // Adds new node after previous
    node.next = current; // Adds current after new inserted node
    this.size++;
  }

  //removeAt(index) that removes the node at the given index.
  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count;

    //Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }
}

// Node class / factory, containing a value function and a link to the nextNode, set both as null by default.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
