// Reverse a Singly-Linked List
// Given the head of a linked list, write a function named reverseLinkedList(linkedList) that reverses that linked list. Your function should return the head of a new linked list where the values are in reverse order of the original linked list.

// For example, if your original linked list was 4 -> 8 -> 15 -> None, your function should return the head of the linked list 15 -> 8 -> 4 -> None.

// For this problem, you’ll be using our custom-built Node class. The constructor for the node class is as follows:

// constructor(data){
//   this.data = data;
//   this.next = null;
// }
// The head of a linked list is a Node with some data whose next value points to the next Node in the linked list.

const Node = require("./Node.js");
const makeLinkedList = require("./makeLinkedList.js");

function reverseLinkedList(linkedList) {
  // Write your code here
  let prev = null;
  let current = linkedList;
  let next = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  linkedList = prev;
  console.log(linkedList);
  return linkedList;
}

//Calling your function on an example
console.log("Original");
let exampleLinkedList = makeLinkedList([4, 8, 15]);
exampleLinkedList.print();
console.log("Reversed");
let reversed = reverseLinkedList(exampleLinkedList);
reversed.print();
