document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const score = document.querySelector('.score')

  const width = 18
  const squares = []
  const snake = [3,2,1,0]
  let direction = 'right'
  let scoreCount = 0
  let snakeSpeed = 400

  // const snakeMoving = setInterval(moveSnake, snakeSpeed)


  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    squares.push(square)
    grid.appendChild(square)
  }

  function createApple() {
    const chosenSquare = squares[Math.floor(Math.random() * squares.length)]
    chosenSquare.classList.add('apple')
  }
  createApple()


  function drawSnake() {
    console.log('draw')
    snake.forEach(index => squares[index].classList.add('snake'))
  }

  function eraseSnake() {
    console.log('erase')
    snake.forEach(index => squares[index].classList.remove('snake'))
  }

  function snakeDeath(){
    return snake.slice(1).includes[snake[0]]
  }
  function endGame() {
    grid.classList.remove('grid')
    return score

    //clearInterval(snakeMoving)
  }
  snakeDeath()

  function moveSnake() {
    if(squares[snake[0]].classList.contains('apple')){
      scoreCount++
      snakeSpeed -= 10
      score.innerText = scoreCount
      squares[snake[0]].classList.remove('apple')
      snake.push(snake[snake.length-1])

      createApple()
    }
    setTimeout(moveSnake, snakeSpeed)
    if(snake[0] + width >= width * width && direction === 'down' ||
    snake[0] - width < 0 && direction === 'up' ||
    snake[0] % width === 0 && direction === 'left' ||
    snake[0] % width === width - 1 && direction === 'right' ||
    snake.slice(1).includes(snake[0])) {

      return endGame()
    }

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
  }
  console.log(snake)
  moveSnake()


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
      case 37: if (direction !== 'right') direction = 'left'
        break
      case 65: if (direction !== 'right') direction = 'left'
        break
      case 38: if (direction !== 'down') direction = 'up'
        break
      case 87: if (direction !== 'down') direction = 'up'
        break
      case 39: if (direction !== 'left') direction = 'right'
        break
      case 68: if (direction !== 'left') direction = 'right'
        break
      case 40: if (direction !== 'up') direction = 'down'
        break
      case 83: if (direction !== 'up') direction = 'down'
    }
  })
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
// chosenSquare.classList.remove('apple')

// get the snake to eat the apple
// when index 0 comes in contact with randomised apple, i will need to make the apple disappear, then reappear somewhere else;
//increment the score div;
//increase the size of the snake array
