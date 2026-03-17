// 16. Maze generator snippet (binary tree, 10x10)
function generateMaze(w=10,h=10) {
  const maze = Array(h).fill().map(()=>Array(w).fill(1));
  for(let y=0;y<h;y+=2) for(let x=0;x<w;x+=2) maze[y][x]=0;
  // Simplified paths...
  console.table(maze.map(row=>row.map(c=>c?'#':' ').join('')));
}
generateMaze();
