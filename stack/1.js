class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
}

let s = new Stack();

s.push(10);
s.push(20);
s.push(30);

console.log(s.peek());
s.pop();

console.log(s.peek());
s.pop();

console.log(s.peek());
s.pop();
