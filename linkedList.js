/**
 * What is a Linked list?
 * An ordered data structure that stores whatever type of
 * data you want, i.e strings, numbers.
 *
 * // In an array each item is indexed with a number //
 *
 * // A linked list on the other hand, contains a bunch of elements
 * with no indecies who are just POINTING to the NEXT ELEMENT.
 * - Random access is not Allowed //
 * - Linked lists excel at INSERTION and DELETION
 *
 * - A data structure that contains a HEAD, TAIL and LENGTH property
 * - Linked Lists consist of nodes (which store a piece of data i.e string/number),
 * and each node has a value and a pointer to another node or null(null at the end).
 */

// piece of data - val *****
// reference to next node - next *****

/**
 * Pushing Pseudocode
 * - The push function should accept a value
 * - Create a new node using the value passed to the function
 * - If there is no head property on the list, set the head
 * and tail to be the newly created node.
 * - Otherwise set the next property on the tail to be the new
 * node and set the tail property on the list to be the newly
 * created node.
 * - Increment the length by one
 * - Return the linked list
 */

/**
 * Popping Pseudocode
 * - If there are no nodes in the list, return undefined.
 * - Loop through the entire list until you reach the tail.
 * - Set the next property of the 2nd to last node to be null.
 * - Set the tail to be the 2nd to last node.
 * - Decrement the length by one.
 * - Return the value of the node removed.
 */

/**
 * Shifting Pseudocode
 * - If there are no nodes in the list, return undefined.
 * - Store the current head property in a variable
 * - Set the head property to be the current head's next property
 * - Decrement the length by one.
 * - Return the value of the node removed.
 */

/**
 * Unshifting Pseudocode
 * - This method should accept a value;
 * - Create a new node using the value passed to the function
 * - If there is no head property on the list, set the head and
 * tail to be the newly created node
 * - Otherwise set the newly created node's next property to
 * be the current head property on the list
 * - Set the head property on the list to be that newly created node.
 * - Increment the length by one.
 * - Return the linked list
 */

/**
 * Get Pseudocode
 * - This method should accept a value and an index
 * - Use your get method to find the specific node.
 * - If the node is not found, return false
 * - If the node is found, set the value of that node to
 * be the value passed to the function and return true
 */

/**
 * Set Pseudocode - changing val of node based on position in list***
 * - This method should accept an index
 * - If the index is less than zero or greater than or equal to
 * the length of the list, return null
 * - Loop through the list until you reach the index and
 * return the node at that specific index
 */

/**
 * Insert Pseudocode - adding a node to the linked list
 * at a specific position*
 * - If the index is less than zero or greater than the length,
 * return false
 * - If the index is the same as the length, push a
 * new node to the end
 * of the list.
 * - If the index is 0, unshift a new node to the start of the list
 */

/**
 * To be able to traverse our list we start at the begining and loop
 * while there is a .next
 * - create a traverse method
 * - declare a variable to start the head or begining node.
 * - while loop (while there is a current) -> current = current.next
 */

//  traverse() {
//   var current = this.head;
//   while (current) {
//     console.log(current.val);
//     current = current.next;
//   }
// }

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    console.log(current.val, 'current value');
    console.log(newTail.val, 'new tail');
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (this.length === 0) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count = 0;
    var current = this.head;

    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.head.next.next;

// var first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');
