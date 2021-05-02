import { Node } from './node.js';

export class LinkedList {
	#head = null;
	#tail = null;
	#length = 0;

	get length() {
		return this.#length;
	}

	push(value) {
		const node = new Node(value);
		if (this.isEmpty()) {
			this.#head = node;
			this.#tail = node;
		}
		else {
			this.#tail.next = node;
			this.#tail = node;
		}
		this.#length++;
	}

	pop() {
		if (this.isEmpty()) {
			throw new Error('LinkedList: Cannot pop from empty linked list.');
		}
		let node = this.#head;
		if (this.length === 1) {
			this.#head = null;
			this.#tail = null;
		}
		else {
			let prev = null;
			while (node.next !== null) {
				prev = node;
				node = node.next;
			}
			prev.next = null;
		}
		this.#length--;
		return node.value;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}
		let node = this.#head;
		if (index === this.length -1) {
			node = this.#tail;
		}
		else {
			for (let i = 0; i < index; i++) {
				node = node.next;
			}
		}
		return node.value;
	}

	delete(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('LinkedList: Delete index out of bounds.');
		}
		let node = this.#head;
		let prev = null;
		for (let i = 0; i < index; i++) {
			prev = node;
			node = node.next;
		}
		if (prev !== null) {
			prev.next = node.next;
		}
		else {
			this.#head = node.next;
		}
		this.#length--;
	}

	isEmpty() {
		return this.length === 0;
	}

	toString() {
		let array = [];
		let node = this.#head;
		while (node !== null) {
			array.push(node.value);
			node = node.next;
		}
		return JSON.stringify(array);
	}
}
