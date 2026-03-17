// 19. Cellular automaton (Game of Life step)
function lifeStep(grid) {
  const h=grid.length, w=grid[0].length, newGrid=grid.map(r=>r.slice());
  for(let y=1;y<h-1;y++) for(let x=1;x<w-1;x++) {
    let n=grid[y-1][x-1]+grid[y-1][x]+grid[y-1][x+1]+grid[y][x-1]+grid[y][x+1]+grid[y+1][x-1]+grid[y+1][x]+grid[y+1][x+1];
    newGrid[y][x] = grid[y][x] ? (n===2||n===3?1:0) : (n===3?1:0);
  }
  return newGrid;
}
let g = [[0,0,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,1,1,1,0],[0,0,0,0,0]];
console.table(lifeStep(g));
