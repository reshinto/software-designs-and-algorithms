"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[2116],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(r),u=a,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6843:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:7},l="6. \ud83d\udcda Home Task",p={unversionedId:"algorithms-and-data-structures-part-1/hometask",id:"algorithms-and-data-structures-part-1/hometask",title:"6. \ud83d\udcda Home Task",description:"The home task should be done using TypeScript.",source:"@site/docs/7-algorithms-and-data-structures-part-1/hometask.md",sourceDirName:"7-algorithms-and-data-structures-part-1",slug:"/algorithms-and-data-structures-part-1/hometask",permalink:"/docs/algorithms-and-data-structures-part-1/hometask",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"5. Graphs",permalink:"/docs/algorithms-and-data-structures-part-1/graphs"},next:{title:"1. Algorithms",permalink:"/docs/algorithms-and-data-structures-part-2/algorithms"}},d={},c=[{value:"Graph generator",id:"graph-generator",level:2},{value:"Find the shortest path",id:"find-the-shortest-path",level:2},{value:"Evaluation criteria",id:"evaluation-criteria",level:2}],h={toc:c};function u(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"6--home-task"},"6. \ud83d\udcda Home Task"),(0,i.kt)("p",null,"The home task should be done using TypeScript."),(0,i.kt)("h2",{id:"graph-generator"},"Graph generator"),(0,i.kt)("p",null,"As an implementation of this home task, you should create an application that allows creating a weighted graph and keep it as an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Adjacency_list"},"adjacency list"),". For that, you need to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"WeightedGraph")," interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface WeightedGraph<T> {\n  addVertex(key: string): void;\n  addEdge(vertex1: T, vertex2: T, weight: number): void;\n}\n")),(0,i.kt)("p",null,"so that for a graph"),(0,i.kt)("img",{width:"500",src:r(2495).Z,alt:"Graph home task"}),(0,i.kt)("p",null,"you can use your implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"WeightedGraph")," interface to represent it in code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const vertices = [\n    new Vertex('1'),\n    new Vertex('2'),\n    new Vertex('3'),\n    new Vertex('4'),\n    new Vertex('5')\n  ];\n  const edges = [\n    new Edge(vertex1, vertex4, 3),\n    new Edge(vertex1, vertex2, 5),\n    new Edge(vertex1, vertex3, 4),\n    new Edge(vertex2, vertex4, 6),\n    new Edge(vertex2, vertex3, 5),\n  ];\n  const graph: WeightedGraph = new <Your WeightedGraph implementation>;\n\n  vertices.forEach(verticle => graph.addVertex(verticle));\n  edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));\n")),(0,i.kt)("h2",{id:"find-the-shortest-path"},"Find the shortest path"),(0,i.kt)("p",null,"The application should have the possibility to find the shortest paths from one vertex to others (",(0,i.kt)("inlineCode",{parentName:"p"},"findAllShortestPaths")," method) and to find the shortest path between two vertexes (",(0,i.kt)("inlineCode",{parentName:"p"},"findShortestPath")," method). For that, you should implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dijkstra")," interface bellow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Path {\n  path: string[];\n  distance: number;\n}\n\ninterface Dijkstra<T> {\n  findShortestPath(vertex1: T, vertex2: T): Path;\n  findAllShortestPaths(vertex: T): Record<string, Path>;\n}\n")),(0,i.kt)("p",null,"and use it like bellow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const dijkstra: Dijkstra = new <Your Dijkstra implementation>(graph);\n\n  dijkstra.findShortestPath(vertex4, vertex3); // { path: ['4', '1', '3'], distance: 7 }\n  dijkstra.findShortestPath(vertex1, vertex5); // { path: [], distance: Infinity }\n  dijkstra.findShortestPath(vertex1, vertex1); // { path: ['1'], distance: 0 }\n\n  dijkstra.findAllShortestPaths(vertex4);\n  /*\n   {\n     '1': { path: ['4', '1'], distance: 3 },\n     '2': { path: ['4', '2'], distance: 6 },\n     '3': { path: ['4', '1', '3'], distance: 7 },\n     '5': { path: [], distance: Infinity }\n   }\n  */\n")),(0,i.kt)("p",null,"Your application should work with much more complex graphs. The one provided above is just an example."),(0,i.kt)("h2",{id:"evaluation-criteria"},"Evaluation criteria"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Only graph generator is implemented."),(0,i.kt)("li",{parentName:"ol"},"Graph generator is implemented and only one of the methods of ",(0,i.kt)("inlineCode",{parentName:"li"},"Dijkstra")," interface is implemented correctly."),(0,i.kt)("li",{parentName:"ol"},"Graph generator is implemented and both methods of ",(0,i.kt)("inlineCode",{parentName:"li"},"Dijkstra")," interface are implemented correctly with minor issues with regard to edge cases."),(0,i.kt)("li",{parentName:"ol"},"Graph generator is implemented and both methods of ",(0,i.kt)("inlineCode",{parentName:"li"},"Dijkstra")," interface are implemented correctly without any issue.")))}u.isMDXComponent=!0},2495:function(e,t,r){t.Z=r.p+"assets/images/graph_ht-2dc3cf499ac679cd81ae634615c8b08f.png"}}]);