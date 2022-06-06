
'use strict'
// require the store object. we will use it to share data between different files
const store = require('../store')

const signUpSuccess = function (responseData) {
  $('.ui-display').css('display', 'none').text('Signed Up!').removeClass().addClass('ui-display text-success')
  $('.ui-display').fadeIn(500)
  $('form').trigger('reset')
}

const signUpFailure = function (responseData) {
  $('.ui-display').css('display', 'none').text('Signed Up Unsuccessfully!').removeClass().addClass('ui-display text-danger')
  $('.ui-display').fadeIn(500)
  $('form').trigger('reset')
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  $('.ui-display').css('display', 'none').text('Signed In!').removeClass().addClass('ui-display text-success')
  $('.ui-display').fadeIn(500)
  $('form').trigger('reset')
  $('.gameNotYet').hide()
  $('.gameStarted').show()
}

const signInFailure = function (error) {
  $('.ui-display').css('display', 'none').text('Signed In Unsuccessfully!').removeClass().addClass('ui-display text-danger')
  $('.ui-display').fadeIn(500)

  $('form').trigger('reset')

  console.error('error is ', error)
}

const signOutSuccess = function () {
  $('.ui-display').css('display', 'none').text('Signed Out!').removeClass().addClass('ui-display text-success')
  $('.ui-display').fadeIn(500)

  $('form').trigger('reset')

  $('.gameNotYet').show()
  $('.gameStarted').css('display', 'none')
}

const signOutFailure = function () {
  $('.ui-display').css('display', 'none').text('Sign Out Failed!').removeClass().addClass('ui-display text-danger')
  $('.ui-display').fadeIn(500)
}

const newGameSuccess = function (responseData) {
  store.game = responseData.game
  $('.ui-display').css('display', 'none').text('New Game Started!').removeClass().addClass('ui-display text-success')
  $('.ui-display').fadeIn(500)
}

const newGameFailure = function (error) {
  $('.ui-display').css('display', 'none').text('Error: Check Console').removeClass().addClass('ui-display text-danger')
  $('.ui-display').fadeIn(500)
  console.error('error is ', error)
}

const updateGameSuccess = function (responseData) {
  store.game = responseData.game
}

const updateGameDialogue = function (player, clickedCellIndex) {
  $('.ui-display').text(player + ' Played ' + clickedCellIndex).removeClass().addClass('ui-display')
  switch (player) {
    case "X's":
      $('.ui-display').addClass('text-danger')
      break
    case "Oh's":
      $('.ui-display').addClass('text-primary')
      break
  }

  $('.ui-display').fadeIn(500)
}

const updateGameFailure = function () {
  $('.ui-display').css('display', 'none').text('Error: Check Console').removeClass().addClass('ui-display text-success')
  $('.ui-display').fadeIn(500)
  console.log('update game failure')
}

const oWins = function () {
  $('.ui-display').text("Oh's Win!").removeClass().addClass('ui-display text-primary')
}

const xWins = function () {
  $('.ui-display').text("X's Win!").removeClass().addClass('ui-display text-danger')
}

const draw = function () {
  $('.ui-display').text('Tie!').removeClass().addClass('ui-display').css('color', 'darkorchid')
}

const gameNotStarted = function () {
  $('.ui-display').text('Start New Game First').removeClass().addClass('ui-display').css('color', '#343f4b')
  $('.ui-display').fadeIn(500)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameDialogue,
  updateGameFailure,
  oWins,
  xWins,
  draw,
  gameNotStarted
  // indexGamesFailure,
  // indexGamesSuccess
}
