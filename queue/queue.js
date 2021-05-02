export class Queue {
	#queue = [];

	get length() {
		return this.#queue.length;
	}

	enqueue(item) {
		this.#queue.push(item);
	}

	dequeue() {
		return this.#queue.shift();
	}

	peek() {
		return this.#queue[0];
	}

	isEmpty() {
		return this.length === 0;
	}

	toString() {
		return JSON.stringify(this.#queue);
	}
}
