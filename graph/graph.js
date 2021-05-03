import { Node } from './node.js';
export class Graph {
	nodes = [];
	directed;

	constructor(directed = false) {
		this.directed = directed;
	}

	addNode(value) {
		this.nodes.push(new Node(value));
	}

	removeNode(value) {
		this.nodes = this.nodes.filter((node) => node.value !== value);
		this.nodes.forEach((node) => {
			node.edges = node.edges.filter((edge) => edge.value !== value);
		});
	}

	getNode(value) {
		return this.nodes.find((node) => node.value === value);
	}

	addEdge(a, b) {
		const nodeA = this.getNode(a);
		const nodeB = this.getNode(b);
		if (!nodeA || !nodeB) {
			const errValue = !nodeA ? a : b;
			throw new Error(`Graph: Node with value '${errValue}' not found`);
		}
		nodeA.edges.push(nodeB);
		if (this.directed) {
			nodeB.edges.push(nodeA);
		}
	}

	toString() {
		return JSON.stringify(this.nodes);
	}
}
