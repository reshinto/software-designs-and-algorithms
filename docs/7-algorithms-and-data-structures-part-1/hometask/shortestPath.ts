import { PriorityQueue } from "./priorityQueue";
import { WeightedGraphImplementation } from "./weightedGraph";

export interface Path {
  path: string[];
  distance: number;
}

export interface Dijkstra<T> {
  findShortestPath(vertex1: T, vertex2: T): Path;
  findAllShortestPaths(vertex: T): Record<string, Path>;
}

export class DijkstraImplementation implements Dijkstra<string>  {
  constructor(public graph: WeightedGraphImplementation) {}

  findShortestPath(start: string, finish: string): Path {
    let result: Path;
    if (start === finish) {
      result = {
        path: [start],
        distance: 0
      }
      console.log(result);
      return result;
    }

    const nodes = new PriorityQueue();
    let totalMinDistance = 0;
    const distances: {[k: string]: number} = {};
    const previous: {[k: string]: string | null} = {};
    let path: string[] = []; // to return at end
    let smallest: string = "";

    // build up initial state
    Object.keys(this.graph.adjacencyList).forEach(function(vertex) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    });

    // as long as there is something to visit
    while (nodes.values.length) {
      const currentNode = nodes.dequeue();
      smallest = currentNode.name;
      if (smallest === finish) {
        // we are done, build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          totalMinDistance = currentNode.weight;
          smallest = previous[smallest] as string;
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let i = 0; i < this.graph.adjacencyList[smallest].length; i++) {
          // find neighboring node
          const nextNode = this.graph.adjacencyList[smallest][i];
          // calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.vertex.name;
          if (candidate < distances[nextNode.vertex.name]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    if (!path.length) {
      result = {
        path,
        distance: Infinity
      }
      console.log(result);
      return result;
    }

    path = path.concat(smallest).reverse();
    result = {
      path,
      distance: totalMinDistance
    }
    console.log(result);
    return result;
  }

  findAllShortestPaths(vertex: string): Record<string, Path> {
    const allPaths: Record<string, Path> = {}

    for (let currentVertex in this.graph.vertices) {
      if (currentVertex !== vertex) {
        allPaths[currentVertex] = this.findShortestPath(vertex, currentVertex);
      }
    }

    console.log(allPaths);
    return allPaths;
  }
}
