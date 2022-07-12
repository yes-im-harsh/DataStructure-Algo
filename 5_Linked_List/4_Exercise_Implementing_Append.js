// // add a method append() to the linked list.

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
    const newObj = {
      value: value,
      next: null,
    };

    this.tail.next = newObj;
    this.tail = newObj;
    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList);

myLinkedList.append(5);
console.log(myLinkedList);
