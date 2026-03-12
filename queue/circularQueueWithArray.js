class Queue {
  constructor(n) {
    this.n = n;
    this.arr = new Array(n);
    this.rear = -1;
    this.front = -1;
  }

  isEmpty() {
    return this.rear === -1 && this.front === -1;
  }

  //basically javascript does not have a fixed size array, but we are simulating it here
  isFull() {
    return (this.rear + 1) % this.arr.length === this.front;
  }

  push(x) {
    if (this.isFull()) {
      throw "Queue is Full";
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.arr.length;

    this.arr[this.rear] = x;

    console.log(`${x} added to the queue`);
  }

  pop() {
    if (this.isEmpty()) {
      throw "Queue is empty";
    }
    const result = this.arr[this.front];

    if (this.rear === this.front) {
      this.rear = -1;
      this.front = -1;
    } else {
      this.front = (this.front + 1) % this.arr.length;
    }

    return `${result} removed`;
  }

  peek() {
    if (this.isEmpty()) {
      throw "Queue is empty";
    }
    return `you are watching ${this.arr[this.front]}`;
  }
}

const queue = new Queue(5);
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
// queue.push(6);
// queue.push(7);
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.pop());
