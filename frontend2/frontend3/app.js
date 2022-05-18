document.addEventListener('DOMContentLoaded', () => {
	grid = document.querySelector('.grid')
	
	grid.style.width = String(divisibleBy10(window.innerWidth - 100) + "px")
	grid.style.height = String(divisibleBy10(window.innerHeight - 100) + "px")
	
	for(j = 0; j < (divisibleBy10(window.innerHeight - 100) / 10); j++){
		for(i = 0; i < (divisibleBy10(window.innerWidth - 100) / 10); i++) {
			iDiv = document.createElement("div");
 			grid.appendChild(iDiv); iDiv.style.backgroundColor="black"
 		}
 	}
 	
 	 let squares = Array.from(document.querySelectorAll('.grid div'))
 	
 	console.log(`Width: ${grid.style.width}, Height: ${grid.style.height}, Number Squares: ${squares.length}`)
	
	window.onresize = function(){
		grid.style.width = String(divisibleBy10(window.innerWidth - 100) + "px")
		grid.style.height = String(divisibleBy10(window.innerHeight - 100) + "px")
		console.log(`Width: ${grid.style.width}, Height: ${grid.style.height}, Number Squares: ${squares.length}`)
	}
	
	function divisibleBy10(width){
		while(width % 10 != 0){
			width -= 1;
		}
		return width;
	}
	width = (divisibleBy10(window.innerWidth - 100) / 10)
	
	const Tetromino = [0]
	
	const Building = [0, 1, 2, width, width + 1, width + 2]
	
	currentPosition = 10;
	
	function draw_building() {
		Building.forEach(index => {
      		squares[1000 + index].classList.add('building')
      		squares[1000 + index].style.backgroundColor = "black"			
		})
	}
		
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
  draw_building()
})
