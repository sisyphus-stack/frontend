 document.addEventListener('DOMContentLoaded', () => {
 	const grid = document.querySelector('.grid')
 	
 	for(j = 0; j < (window.innerHeight / 25); j++){for(i = 0; i < (window.innerWidth / 25); i++) {iDiv = document.createElement("div");
 	grid.appendChild(iDiv); iDiv.style.backgroundColor="yellow"}}
 	 let squares = Array.from(document.querySelectorAll('.grid div'))
 	console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}, Number Squares: ${squares.length}`)
 	const width = window.innerWidth / 25
    let currentPosition = 0
    
    const Tetromino = [0]
    
    function draw() {
    Tetromino.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino')
      squares[currentPosition + index].style.backgroundColor = "white"
    })
    console.log(currentPosition)
  }
  
  //undraw the Tetromino
  function undraw() {
    Tetromino.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino')
      squares[currentPosition + index].style.backgroundColor = ''

    })
  }

  function control(e) {
    if(e.keyCode === 37) {
      moveLeft()
    } else if (e.keyCode === 39) {
      moveRight()
  	} else if (e.keyCode === 40) {
      moveDown()
    } else if (e.keyCode === 38) {
      moveUp()
    }
  }
  document.addEventListener('keyup', control)
  
    //move the tetromino left, unless is at the edge or there is a blockage
  function moveLeft() {
    undraw()
    const isAtLeftEdge = Tetromino.some(index => (currentPosition + index) % width === 0)
    if(!isAtLeftEdge) currentPosition -=1
    if(Tetromino.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition +=1
    }
    draw()
  }

   function moveDown() {
    	if(currentPosition < 16000){
    	undraw()
    	currentPosition += width
    	draw()
    	}
  }
  
  function moveUp() {
    if(currentPosition > 9){undraw()
    currentPosition -= width
    draw()
    }
  }
  
  //move the tetromino right, unless is at the edge or there is a blockage
  function moveRight() {
    undraw()
    const isAtRightEdge = Tetromino.some(index => (currentPosition + index) % width === width -1)
    if(!isAtRightEdge) currentPosition +=1
    if(Tetromino.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition -=1
    }
    draw()
  }
  
  function isAtRight() {
    return current.some(index=> (currentPosition + index + 1) % width === 0)  
  }
  
  function isAtLeft() {
    return current.some(index=> (currentPosition + index) % width === 0)
  }
  
  draw()
})
