document.addEventListener('DOMContentLoaded', () => {
	grid = document.querySelector('.grid')
	
	grid.style.width = String(divisibleBy10(window.innerWidth - 100) + "px")
	grid.style.height = String(divisibleBy10(window.innerHeight - 100) + "px")
 	
 	
 	console.log(`Width: ${grid.style.width}, Height: ${grid.style.height}`)
	earth = document.getElementById('earth');
	earth.style.width = "2px";
	earth.style.height = "1px";
	earth.style.top = String((divisibleBy10(window.innerHeight - 100)/2) + "px");
	earth.style.left = String((divisibleBy10(window.innerWidth - 100)/2) + "px");
	earth.style.position = "absolute";
	
	function control(e) {
    	if(e.keyCode === 32) {
    	  enlarge()
    	} else if (e.keyCode === 88) {
      	  shrink()
  		} else if (e.keyCode === 37) {
      	  moveLeft()
      	} else if (e.keyCode === 39) {
      	  moveRight()
      	} else if (e.keyCode === 38) {
      	  moveUp()
      	} else if (e.keyCode === 40) {
      	  moveDown()
      	}
	}  	
	document.addEventListener('keyup', control)
	
	function enlarge(){
		earth.style.width = (parseInt(earth.style.width) + 4) + "px"
		earth.style.height = (parseInt(earth.style.height) + 2) + "px"
		console.log(earth.style.width)
		
	}
	
	function shrink(){
		earth.style.width = (parseInt(earth.style.width) - 4) + "px"
		earth.style.height = (parseInt(earth.style.height) - 2) + "px"
		console.log(earth.style.width)
	}
	
	function moveLeft(){
		earth.style.left = (parseInt(earth.style.left) - 4) + "px"
	}
	
	function moveRight(){
		earth.style.left = (parseInt(earth.style.left) + 4) + "px"
	}
	
	function moveUp(){
		earth.style.top = (parseInt(earth.style.top) - 4) + "px"
	}
	
	function moveDown(){
		earth.style.top = (parseInt(earth.style.top) + 4) + "px"
	}
	
	window.onresize = function(){
		grid.style.width = String(divisibleBy10(window.innerWidth - 100) + "px")
		grid.style.height = String(divisibleBy10(window.innerHeight - 100) + "px")
	}
	
	function divisibleBy10(width){
		while(width % 10 != 0){
			width -= 1;
		}
		return width;
	}
	
	
})
