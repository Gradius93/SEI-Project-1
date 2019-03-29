document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const width = 18
  const squares = []
  const snake = [3,2,1,0]
  let direction = 'right'

  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    squares.push(square)
    grid.appendChild(square)
  }




  //createApple(() => {
  ///const apple = grid[Math.floor(Math.random() * grid.width)]
  //apple.classList.add('apple')
  //})






  function drawSnake() {
    console.log('draw')
    snake.forEach(index => squares[index].classList.add('snake'))
  }

  function eraseSnake() {
    console.log('erase')
    snake.forEach(index => squares[index].classList.remove('snake'))
  }


  function moveSnake() {

    if(snake[0] + width > width * width && direction === 'down' || snake[0] - width < 0 && direction === 'up' || snake[0] % width === 0 && 'left' || snake[0] % width === width - 1 && 'right') {
      return false
    }
    console.log(snake)
    eraseSnake()
    switch(direction){
      case 'right': moveRight()
        break
      case 'left': moveLeft()
        break
      case 'up': moveUp()
        break
      case 'down': moveDown()
    }
    drawSnake()
  }

  drawSnake()
  //createApple()

  setInterval(moveSnake, 100)

  function moveDown() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] + width)
    drawSnake()
  }

  function moveUp() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] - width)
    drawSnake()
  }

  function moveLeft() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] - 1)
    drawSnake()
  }


  function moveRight() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] + 1)
    drawSnake()
  }


  document.addEventListener('keydown', (e) => {
    console.log(e.keycode)
    switch(e.keyCode) {
      case 37: direction = 'left'
        break
      case 38: direction = 'up'
        break
      case 39: direction = 'right'
        break
      case 40: direction = 'down'
    }
  })
//  // get from JS
//  // Assign those four squares a class of active  = snake
//  // Define starting position of the snake
//  // Define movement of snake
//  //    add event listener to each movement key
//  // Create a push/pop function to roll snake along
//  //    incoporating a loop
//  // Generate a random number
//  // Store in a variable (i.e let apple)
//  // Give random square a class of apple (like active)
//  // Display apple
//  // To be continued ...
//
//
//
})
