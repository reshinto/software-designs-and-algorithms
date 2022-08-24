export interface WeightedGraph<T> {
  addVertex(key: T): void;
  addEdge(vertex1: T, vertex2: T, weight: number): void;
}

export class Vertex {
  public name: string;
  public weight: number;

  constructor(name: string, weight?: number) {
    this.name = name;
    this.weight = weight ? weight : Number.MAX_SAFE_INTEGER;
  }
}

export class Edge {
  constructor(public from: Vertex, public to: Vertex, public weight: number) {}
}

export class WeightedGraphImplementation implements WeightedGraph<Vertex> {
  public vertices: {[k: string]: Vertex} = {};
  public adjacencyList: {[k: string]: {vertex: Vertex; weight: number}[]} = {};

  addVertex(key: Vertex): void {
    this.vertices[key.name] = key;
    this.adjacencyList[key.name] = [];
  }

  addEdge(vertex1: Vertex, vertex2: Vertex, weight: number): void {
    this.adjacencyList[vertex1.name].push({vertex: vertex2, weight});
    this.adjacencyList[vertex2.name].push({vertex: vertex1, weight})
  }
}