// Level: Easy
// Question: https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem?isFullScreen=true
// Time complexity: O(n)
// Author: Orhan Özkerçin

function mergeLists(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  let outputList = new SinglyLinkedListNode();
  let head = outputList;
  let head1Iterator = head1;
  let head2Iterator = head2;

  while (head1Iterator && head2Iterator) {
    if (head1Iterator.data <= head2Iterator.data) {
      outputList.data = head1Iterator.data;
      head1Iterator = head1Iterator.next;
    } else {
      outputList.data = head2Iterator.data;
      head2Iterator = head2Iterator.next;
    }
    outputList.next = new SinglyLinkedListNode();
    outputList = outputList.next;
  }
  if (head1Iterator) {
    outputList.data = head1Iterator.data;
    outputList.next = head1Iterator.next;
  }
  if (head2Iterator) {
    outputList.data = head2Iterator.data;
    outputList.next = head2Iterator.next;
  }
  return head;
}

// From here to end is not include to solving.
// I wrote a function to create LinkList and Node.
// Also I wrote a funtion to push those nodes to linkedList.
// You can consider this part as test cases in Hackerrank
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SiglyLinkedList(data) {
  this.head = new SinglyLinkedListNode(data);
  this.head.next = null;
  this.tail = this.head;
}
SiglyLinkedList.prototype.push = function (data) {
  if (!this.head) {
    this.head = new SinglyLinkedListNode(data);
  } else {
    this.tail.next = new SinglyLinkedListNode(data);
    this.tail = this.tail.next;
    this.tail.data = data;
  }
};

const list1 = new SiglyLinkedList(1);
list1.push(3);
list1.push(7);

const list2 = new SiglyLinkedList(3);
list2.push(4);

console.log(mergeLists(list1.head, list2.head));
