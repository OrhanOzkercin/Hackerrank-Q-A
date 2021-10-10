class ListNode {
  data: number;
  next: ListNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;

  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data: number): ListNode | null {
    if (!data) return null;
    if (!this.head) {
      this.head = new ListNode(data);
      this.tail = this.head;
    } else {
      this.tail!.next = new ListNode(data);
      this.tail = this.tail!.next;
    }
    this.length++;
    return this.tail;
  }

  pop() {
    if (!this.head) return null;
    const popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = this.get(this.length - 1);
      this.tail = newTail;
    }
    this.length--;
    return popedNode;
  }

  shift(): ListNode | null {
    if (!this.head) return null;
    const shiftedNode = this.head;
    this.head = this.head!.next;
    this.length--;
    return shiftedNode as ListNode;
  }

  unshift(data: number): ListNode | null {
    if (!data) throw new Error('You have to provide data');
    const newHead = new ListNode(data);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
      return newHead;
    }
    const currentHead = this.get(0);
    newHead.next = currentHead;
    this.head = newHead;
    this.length++;
    return newHead;
  }

  insert(index: number, data: number): ListNode | null {
    if (!data) throw new Error('You have to provide data');
    const newNode = new ListNode(data);
    if (index === 0) {
      this.head = newNode;
      this.tail = this.head;
      return newNode;
    }

    const beforeIndexNode = this.get(index - 1);
    if (!beforeIndexNode) throw new Error('You are trying to insert to out of boundry');

    newNode.next = beforeIndexNode!.next;
    beforeIndexNode!.next = newNode;
    return newNode;
  }

  get(index: number): ListNode | null {
    let current = this.head;
    let i = 0;
    while (current) {
      if (i === index) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }
}

const list = new SinglyLinkedList();

// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.unshift(1));
// console.log(list.unshift(0));
// console.log(list.shift());

console.log(list.insert(1, 2));
