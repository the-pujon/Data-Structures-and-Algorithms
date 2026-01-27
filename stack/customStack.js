// fully custom stack class

class Stack {
  constructor() {
    this.stack = [];
    this.len = 0;
  }

  push(element) {
    this.stack[this.len] = element;
    this.len++;
    return this.len;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    this.len--;
    let value = this.stack[this.len];
    delete this.stack[this.len];
    return value;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.stack[this.len - 1];
  }

  isEmpty() {
    return this.len === 0;
  }

  size() {
    // console.log(this.len);
    return this.len;
  }
}

let s = new Stack();

s.push(10); // stack[0] = 10, top = 1
s.push(20); // stack[1] = 20, top = 2
console.log(s.size());

console.log(s.peek());

s.pop(); // top = 1 → returns 20
console.log(s.size());

console.log(s.peek());

s.pop(); // top = 0 → returns 10
console.log(s.size());
console.log(s.peek());
