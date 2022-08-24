import { Vertex } from "./weightedGraph";

export class PriorityQueue {
  public values: Vertex[]
  
  constructor() {
    this.values = [];
  }

  enqueue(value: string, priority: number): void {
    const newNode = new Vertex(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp(): void {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];
      if (element.weight >= parent.weight) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue(): Vertex {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end as Vertex;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown(): void {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (this.values) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild: Vertex = {name: "", weight: Number.MAX_SAFE_INTEGER};
      let rightChild: Vertex;
      let swap: number | null = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.weight < element.weight) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.weight < element.weight) ||
          (swap !== null && rightChild.weight < leftChild.weight)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}