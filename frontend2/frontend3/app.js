document.addEventListener('DOMContentLoaded', () => {
	grid = document.querySelector('.container')
	
	grid.style.width = String(divisibleBy10(window.innerWidth - 100) + "px")
	grid.style.height = String(divisibleBy10(window.innerHeight - 100) + "px")
	
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
	
	test = divisibleBy10((window.innerWidth - 100))
	console.log(test)
	
	
})
