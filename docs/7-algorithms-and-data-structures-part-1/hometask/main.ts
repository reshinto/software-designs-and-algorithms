import { DijkstraImplementation, Dijkstra } from "./shortestPath";
import { Vertex, Edge, WeightedGraphImplementation } from "./weightedGraph";

const vertex1 = new Vertex('1');
const vertex2 = new Vertex('2');
const vertex3 = new Vertex('3');
const vertex4 = new Vertex('4');
const vertex5 = new Vertex('5');

const vertices = [
  vertex1,
  vertex2,
  vertex3,
  vertex4,
  vertex5
];

const edges = [
  new Edge(vertex1, vertex4, 3),
  new Edge(vertex1, vertex2, 5),
  new Edge(vertex1, vertex3, 4),
  new Edge(vertex2, vertex4, 6),
  new Edge(vertex2, vertex3, 5),
];
const graph: WeightedGraphImplementation = new WeightedGraphImplementation();

vertices.forEach((verticle: Vertex) => graph.addVertex(verticle));
edges.forEach((edge: Edge) => graph.addEdge(edge.from, edge.to, edge.weight));


const dijkstra: Dijkstra<string> = new DijkstraImplementation(graph);

dijkstra.findShortestPath(vertex4.name, vertex3.name); // { path: ['4', '1', '3'], distance: 7 }
dijkstra.findShortestPath(vertex1.name, vertex5.name); // { path: [], distance: Infinity }
dijkstra.findShortestPath(vertex1.name, vertex1.name); // { path: ['1'], distance: 0 }

dijkstra.findAllShortestPaths(vertex4.name);
/*
  {
    '1': { path: ['4', '1'], distance: 3 },
    '2': { path: ['4', '2'], distance: 6 },
    '3': { path: ['4', '1', '3'], distance: 7 },
    '5': { path: [], distance: Infinity }
  }
*/