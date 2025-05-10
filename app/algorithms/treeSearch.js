// Example graph represented as an adjacency list
  
  // DFS using recursion -- used for solving a maze or where we 
  // don't need to find the shortest path.
  // Uses less memory because it only needs to keep track of the current path
  // O(d) where d is depth
  function dfs(graph, start, visited = new Set()) {
    // If we have visited this node already, we're done.
    // This works because visited is THE SAME SET between each call to dfs
    if (visited.has(start)) return;
    
    console.log(start); 
    visited.add(start);
  
    for (const neighbor of graph[start]) {
      dfs(graph, neighbor, visited);
    }
  }
  
  // Call the DFS function starting from node 'A'
//   dfs(graph, 'A');
  
  // Output will be: A, B, D, E, F, C
  
  
  // BFS using a queue - used for chess algorithm or for finding the shortest path in a maze
  // Ideal for finding the shortest path in an unweighted graph
  // Higher memory usage
  // Complexity is O(vertices + edges) for general graphs or O(b^d) for trees where b is maximum branching and d is depth
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
  
export {dfs, bfs}  