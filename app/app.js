// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// const { indexGames } = require('./auth/api')

const authEvents = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#endgame').on('click', authEvents.onSignOut)
  $('.new-game').on('click', authEvents.onNewGame)
  // document.querySelectorAll('.cell').forEach((cell) => cell.addEventListener('click', handleCellClick));

  $('.dialogue').hide()
  let turn = 0
  // $('.noodle').hide()
  let gameArray = ['', '', '', '', '', '', '', '', '']
  let xScore = 0
  let oScore = 0
  function handleCellPlayed (i, ii) {
    const clickedCellIndex = i.getAttribute('id')
    gameArray[clickedCellIndex - 1] = ii
    // console.log(i.getAttribute('name'))
    console.log(gameArray)
    authEvents.onUpdateGame(clickedCellIndex, ii)
  }
  // function handleCellPlayed(i, ii) {
  //   const clickedCellIndex = i.getAttribute("id");
  //   gameArray[clickedCellIndex - 1] = ii;
  //   // console.log(i.getAttribute('name'))
  //   console.log(gameArray);
  // }
  $(document).ready(function () {
    $('.newGame').click(function () {
      authEvents.onNewGame()
      $('.dialogue').hide()
      $('.noodle').show()
      $('.gameStarted').show()
      $('.gameNotYet').hide()
      $('.diatext').text('Exes - ' + xScore + '     |      Ohs - ' + oScore)
    })
    $('.noodle').click(function () {
      cellClear()
    })
    $('.dialogue').click(function () {
      $('.dialogue').hide()
      $('.noodle').show()
    })
    $('#endGame').click(function () {
      // $('.gameNotYet').show()
      // $('.gameStarted').hide()
      xScore = 0
      oScore = 0
      gameArray = ['', '', '', '', '', '', '', '', '']
    })
    $('#indexGames').on('click', authEvents.onIndexGames)
  })
  // function createDialog (title, text) {
  //   return $("<div class='dialog' title='" + title + "'><p>" + text + '</p></div>')
  //     .dialog({
  //       resizable: false,
  //       height: 140,
  //       modal: true,
  //       buttons: {
  //         Confirm: function () {
  //           $(this).dialog('close')
  //         },
  //         Cancel: function () {
  //           $(this).dialog('close')
  //         }
  //       }
  //     })
  // }
  function announceWinner (i) {
    if (i === 'X') {
      xScore++
      $('.dialogue').css('background-color', 'rgba(255, 0, 0, 0.377')
    } else {
      oScore++
      $('.dialogue').css('background-color', 'rgba(0, 0, 255, 0.377')
    }
    $('.diatext').text('Exes - ' + xScore + '     |      Ohs - ' + oScore)
    // $('.noodle').hide()
    $('.dialogue').show()
    cellClear()
    turn = 0
    // createDialog
  }
  function announceDraw () {
    $('.dialogue').css('background-color', 'rgba(0, 0, 0, 0.377')
    $('.dialogue').show()
    cellClear()
    turn = 0
    // createDialog
  }

  function checkWinner (i) {
    // console.log(gameArray[0] === gameArray[1] === gameArray[2])
    // console.log(gameArray[3] === gameArray[4] === gameArray[5])
    // console.log(gameArray[6] === gameArray[7] === gameArray[8])
    // console.log(gameArray[0] === gameArray[3] === gameArray[6])
    // console.log(gameArray[1] === gameArray[4] === gameArray[7])
    // console.log(gameArray[2] === gameArray[5] === gameArray[8])
    // console.log(gameArray[0] === gameArray[4] === gameArray[8])
    // console.log(gameArray[2] === gameArray[4] === gameArray[6])
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

  const cellUpdate = function (player) {
    // $($(event.target).css('background-color', 'red'))
    // $($(event.target).html(player))
    $($(event.target).removeClass('empty'))
    $($(event.target).addClass(player))

    // const numb = document.getElementById('9').getAttribute('name')
    // const numb1 = parseInt(numb)
    // console.log(numb1)
    // console.log(gameArray)

    // console.log(gameArray)
    const clickedCell = event.target
    handleCellPlayed(clickedCell, player)
    checkWinner(player)
  }

  const cellClear = function () {
    // $($(event.target).css('background-color', 'red'))
    // $($(event.target).html(player))

    // const numb = document.getElementById('9').getAttribute('name')
    // const numb1 = parseInt(numb)
    // console.log(numb1)
    // console.log(gameArray)

    // console.log(gameArray)
    gameArray = ['', '', '', '', '', '', '', '', '']
    $('.child').each(function () {
      // Test if the div element is empty
      $(this).removeClass('X')
      $(this).removeClass('O')
      $(this).addClass('empty')
    })
  }

  $('.box').on('click', function (event) {
    // your code here
    if (event.target.classList.contains('empty')) {
      turn++

      // if (turn % 2 === 0) {
      //   const player = 'X'
      //   // $($(event.target).css('background-color', 'blue'))
      //   // $($(event.target).html(player))
      //   $($(event.target).addClass(player))

      //   // const numb = document.getElementById('9').getAttribute('name')
      //   // const numb1 = parseInt(numb)
      //   // console.log(numb1)
      //   // console.log(gameArray)

      //   // console.log(gameArray)
      //   const clickedCell = event.target
      //   handleCellPlayed(clickedCell, player)
      //   checkWinner(player)
      // } else {
      if (turn % 2 === 0) {
        const player = 'X'
        cellUpdate(player)
      } else {
        const player = 'O'
        cellUpdate(player)
      }

      // console.log(document.getElementById('1').getAttribute('id'))
      // console.log(document.getElementById('2').getAttribute('id'))
    }
  })
}
)
