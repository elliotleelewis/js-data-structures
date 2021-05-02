import { Queue } from './queue/queue.js';
import { Stack } from './stack/stack.js';

// Stack
const stack = new Stack();
stack.push('abc');
stack.push('123');
stack.pop();
console.log('STACK:', stack.toString());

// Queue
const queue = new Queue();
queue.enqueue('abc');
queue.enqueue('123');
queue.dequeue();
console.log('QUEUE:', queue.toString());
