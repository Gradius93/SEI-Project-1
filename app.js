document.addEventListener('DOMContentLoaded', () => {

  // ======================= variables =====================

  // ---const---

  const grid = document.querySelector('.grid')
  const score = document.querySelector('.score')
  const button = document.querySelector('.button')
  const endGameMessage = document.querySelector('.end-game-message')
  const width = 18
  const squares = []
  const title = document.querySelector('.title')
  // ---let---
  let snakeSpeed = 400
  let snake = [3,2,1,0]
  let direction = 'right'
  let scoreCount = 0
  let timer

  // ======================= function ======================

  // create the grid
  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    squares.push(square)
    grid.appendChild(square)
  }

  // create randomised apple
  function createApple() {
    let chosenSquare = Math.floor(Math.random() * squares.length)

    while (squares[chosenSquare].classList.contains('snake')) {
      chosenSquare = Math.floor(Math.random() * squares.length)
    }
    squares[chosenSquare].classList.add('apple')
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
    endGameMessage.classList.remove('hidden')
    title.classList.add('hidden')
    snakeSpeed = 400
    eraseSnake()

    //clearInterval(snakeMoving)
  }

  function moveSnake() {
    if(squares[snake[0]].classList.contains('apple')){
      scoreCount++
      snakeSpeed -= 10
      score.innerText = scoreCount
      squares[snake[0]].classList.remove('apple')
      snake.push(snake[snake.length-1])

      createApple()
    }

    timer = setTimeout(moveSnake, snakeSpeed)

    if(snake[0] + width >= width * width && direction === 'down' ||
    snake[0] - width < 0 && direction === 'up' ||
    snake[0] % width === 0 && direction === 'left' ||
    snake[0] % width === width - 1 && direction === 'right' ||
    snake.slice(1).includes(snake[0])) {
      snakeDeath()
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

  // ============================ event listeners ===============

  document.addEventListener('keydown', (e) => {
    console.log(e.keycode)
    e.preventDefault()
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


  button.addEventListener('click', () => {
    snake.forEach(index => squares[index].classList.remove('snake'))
    snake = [3,2,1,0]
    clearTimeout(timer)
    score.innerText = 0
    scoreCount = score.innerText
    grid.classList.add('grid')
    endGameMessage.classList.add('hidden')
    title.classList.remove('hidden')
    direction = 'right'
    drawSnake()
    moveSnake()
  })
})
