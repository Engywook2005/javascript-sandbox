// Example graph represented as an adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
  };
  
  // DFS using recursion -- used for solving a maze
  function dfs(graph, start, visited = new Set()) {
    if (visited.has(start)) return;
    
    console.log(start); // Process the node
    visited.add(start);
  
    for (const neighbor of graph[start]) {
      dfs(graph, neighbor, visited);
    }
  }
  
  // Call the DFS function starting from node 'A'
//   dfs(graph, 'A');
  
  // Output will be: A, B, D, E, F, C
  
  
  // BFS using a queue - used for chess algorithm
  function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
  
    while (queue.length > 0) {
      const node = queue.shift();
      
      if (!visited.has(node)) {
        console.log(node); // Process the node
        visited.add(node);
  
        for (const neighbor of graph[node]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }
  
  // Call the BFS function starting from node 'A'
  // bfs(graph, 'A');
  
  // Output will be: A, B, C, D, E, F
  