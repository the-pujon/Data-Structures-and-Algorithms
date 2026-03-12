class Queue {
  constructor(n) {
    this.n = n;
  }

  arr = new Array(this.n);
  rear = -1;

  isEmpty() {
    return this.rear === -1;
  }

  //basically javascript does not have a fixed size array, but we are simulating it here
  isFull() {
    return this.rear === this.n - 1;
  }

  push(x) {
    if (this.isFull()) {
      throw "Queue is Full";
    }
    this.rear++;
    this.arr[this.rear] = x;

    console.log(`${x} added to the queue`);
  }

  pop() {
    if (this.isEmpty()) {
      throw "Queue is empty";
    }
    const front = this.arr[0];
    for (let i = 0; i < this.rear; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.rear--;
    return `${front} removed`;
  }

  peek() {
    if (this.isEmpty()) {
      throw "Queue is empty";
    }
    return `you are watching ${this.arr[0]}`;
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
