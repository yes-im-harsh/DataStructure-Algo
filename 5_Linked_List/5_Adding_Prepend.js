// // add a method prepend() to the linked list.

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null, // can also do this.head here, this is more understandable.
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList);

// myLinkedList.append(5);
// console.log(myLinkedList);

// myLinkedList.append(16);
// console.log(myLinkedList);

myLinkedList.prepend(2);
console.log(myLinkedList);
