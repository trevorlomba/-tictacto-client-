const { xWins, oWins, draw, gameNotStarted, updateGameDialogue } = require('./auth/ui')
const authEvents = require('./auth/events')

let game = 'inactive'
let turn = 0
let gameArray = ['', '', '', '', '', '', '', '', '']
let xScore = 0
let oScore = 0

const showDialogue = () => {
  $('.dialogue').show()
  $('.dialogue').fadeOut(500)
  gameClear()
}

const gameClear = () => {
  gameArray = ['', '', '', '', '', '', '', '', '']
  $('.child').each(function () {
    $(this).removeClass('X')
    $(this).removeClass('O')
    $(this).addClass('empty')
  })
}

const handleCellPlayed = (first, second) => {
  const clickedCellIndex = first.getAttribute('id')
  gameArray[clickedCellIndex - 1] = second
  authEvents.onUpdateGame(clickedCellIndex, second)
  // $('.ui-display').hide()
  let player
  switch (second) {
    case 'X':
      player = "X's"
      break

    case 'O':
      player = "Oh's"
      break
  }

  updateGameDialogue(player, clickedCellIndex)
}

const cellUpdate = player => {
  if (game === 'active') {
    $($(event.target).removeClass('empty'))
    $($(event.target).addClass(player))

    const clickedCell = event.target
    handleCellPlayed(clickedCell, player)
    checkWinner(player)
  } else {
    gameNotStarted()
  }
}

const checkWinner = i => {
  console.log('i is ' + i)
  if ((gameArray[0] === gameArray[1]) && (gameArray[1] === gameArray[2]) && (gameArray[0] !== '')) {
    announceWinner(i)
  } else if ((gameArray[3] === gameArray[4]) && (gameArray[4] === gameArray[5]) && (gameArray[4] !== '')) {
    announceWinner(i)
  } else if ((gameArray[6] === gameArray[7]) && (gameArray[7] === gameArray[8]) && (gameArray[8] !== '')) {
    announceWinner(i)
  } else if ((gameArray[0] === gameArray[3]) && (gameArray[3] === gameArray[6]) && (gameArray[6] !== '')) {
    announceWinner(i)
  } else if ((gameArray[1] === gameArray[4]) && (gameArray[4] === gameArray[7]) && (gameArray[1] !== '')) {
    announceWinner(i)
  } else if ((gameArray[2] === gameArray[5]) && (gameArray[5] === gameArray[8]) && (gameArray[2] !== '')) {
    announceWinner(i)
  } else if ((gameArray[0] === gameArray[4]) && (gameArray[4] === gameArray[8]) && (gameArray[0] !== '')) {
    announceWinner(i)
  } else if ((gameArray[0] === gameArray[4]) && (gameArray[4] === gameArray[8]) && (gameArray[0] !== '')) {
    announceWinner(i)
  } else if ((gameArray[2] === gameArray[4]) && (gameArray[4] === gameArray[6]) && (gameArray[2] !== '')) {
    announceWinner(i)
  } else if ((gameArray[0] !== '') && (gameArray[1] !== '') && (gameArray[2] !== '') && (gameArray[3] !== '') && (gameArray[4] !== '') && (gameArray[5] !== '') && (gameArray[6] !== '') && (gameArray[7] !== '') && (gameArray[8] !== '')) {
    announceDraw(i)
  } else {
    console.log('turn is ' + turn)
  }
}

const announceWinner = i => {
  game = 'inactive'

  switch (i) {
    case 'X':
      xScore++
      $('.dialogue').css(
        'background-color',
        'rgba(255, 0, 0, 0.377'
      )
      console.log(xScore)
      xWins()
      break
    case 'O':
      oScore++
      $('.dialogue').css('background-color', 'rgba(0, 0, 255, 0.377')
      oWins()
      break
  }
  $('.dialogueText').text("X's - " + xScore + "     |      Oh's - " + oScore)
  if (xScore > oScore) {
    $('.dialogueText').css('color', '#dc3545')
  } else if (oScore > xScore) {
    $('.dialogueText').css('color', '#0d6efd')
  } else {
    $('.dialogueText').css('color', '212529')
  }

  showDialogue()
  turn = 0
}

const announceDraw = () => {
  game = 'inactive'
  draw()
  $('.dialogue').css('background-color', 'rgba(0, 0, 0, 0.377')
  turn = 0
}

const setNewGame = () => {
  $('.dialogue').hide()
  $('.nav').show()
  $('.gameStarted').show()
  $('.gameNotYet').hide()
  $('.dialogueText').text('Exes - ' + xScore + '     |      Ohs - ' + oScore)
}

const hideDialogue = () => {
  $('.dialogue').hide()
  $('.nav').show()
}

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.new-game').on('click', authEvents.onNewGame)
  $('.dialogue').hide()

  $(document).ready(function () {
    $('.new-game').click(function () {
      game = 'active'
    })
    $('.newGame').click(function () {
      authEvents.onNewGame()
      setNewGame()
    })
    $('.nav').click(function () {
      gameClear()
    })
    $('.dialogue').click(function () {
      hideDialogue()
    })
    $('#endGame').click(function () {
      authEvents.onSignOut(event)
      game = 'inactive'
      $('.gameNotYet').show()
      $('.gameStarted').hide()
      xScore = 0
      oScore = 0
      gameArray = ['', '', '', '', '', '', '', '', '']
    })
    $('#indexGames').on('click', authEvents.onIndexGames)
  })

  $('.box').on('click', function (event) {
    if (event.target.classList.contains('empty')) {
      turn++
      if (turn % 2 === 0) {
        const player = 'X'
        cellUpdate(player)
      } else {
        const player = 'O'
        cellUpdate(player)
      }
    }
  })
}
)
