
'use strict'
// require the store object. we will use it to share data between different files
const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#ui-display').hide()
  $('#ui-display').text('signed up successfully!').fadeIn(2000)
  // $('#ui-display').fadeOut(5000)

  // remove existing classes, then add a green text success class from bootstrap
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')
}

const signUpFailure = function (responseData) {
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-danger')
  $('#ui-display').hide()
  $('#ui-display').text('signed up unsuccessfully!').fadeIn(2000)
  // $('#ui-display').fadeOut(5000)

  // remove existing classes, then add a green text success class from bootstrap

  // clear (reset) all of the forms
  $('form').trigger('reset')
}

const signInSuccess = function (responseData) {
  // we are going to add the 'user' we got back in our response's data to the 'store' object so we can accses the 'user's' token later in the api.js
  store.user = responseData.user

  // tell the user it was successful
  $('#ui-display').hide()
  $('#ui-display').text('logged in successfully!').fadeIn(2000)
  // $('#ui-display').fadeOut(5000)

  // remove existing classes, then add a green text success class from bootstrap
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  $('.gameNotYet').hide()
  $('.gameStarted').show()

  console.log('responseData is ', responseData)
}

const signInFailure = function (error) {
  $('#ui-display').hide()
  $('#ui-display').text('Logged in unsuccessfully!').fadeIn(2000)
  // $('#ui-display').fadeOut(5000)

  // remove existing classes, then add a green text success class from bootstrap
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-danger')

  $('form').trigger('reset')

  console.error('error is ', error)
}

const signOutSuccess = function (responseData) {
  $('#ui-display').hide()
  $('#ui-display').text('Logged out successfully!').fadeIn(2000)
  // $('#ui-display').fadeOut(5000)

  // remove existing classes, then add a green text success class from bootstrap
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-warning')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  $('.gameNotYet').show()
  $('.gameStarted').hide()
}

const signOutFailure = function () {
  $('#ui-display').hide()
  $('#ui-display').text('Logged out unsuccessfully!').fadeIn(2000)
  // $('#ui-display').fadeOut(5000)

  // remove existing classes, then add a green text success class from bootstrap
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-danger')
}

const newGameSuccess = function (responseData) {
  // // we are going to add the 'user' we got back in our response's data to the 'store' object so we can accses the 'user's' token later in the api.js
  store.game = responseData.game
  console.log('store is', store)

  console.log('responseData is ', responseData)
  $('#ui-display').hide()
  $('#ui-display').text('new game started!').fadeIn(2000)
  // $('#ui-display').fadeOut(5000)

  // remove existing classes, then add a green text success class from bootstrap
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-success')
}

const newGameFailure = function (error) {
  console.error('error is ', error)
}

// const indexGamesSuccess = function (responseData) {
//   // we are going to add the 'user' we got back in our response's data to the 'store' object so we can accses the 'user's' token later in the api.js
//   console.log('store is', store)
//   console.log(responseData)
//   console.log('responseData is ', responseData)
// }

// const indexGamesFailure = function (error) {
//   console.error('error is ', error)
// }

const updateGameSuccess = function (responseData) {
  store.game = responseData.game
  console.log('update game success')
  console.log(store.game)
}
//   // we are going to add the 'user' we got back in our response's data to the 'store' object so we can accses the 'user's' token later in the api.js
//   cont = false
//   store.game =
//   store.user = responseData.user
//   console.log('store is', store)

//   // tell the user it was successful
//   $('#ui-display').text('logged in successfully!').fadeOut(5000)

//   // remove existing classes, then add a green text success class from bootstrap
//   $('#ui-display').removeClass()
//   $('#ui-display').addClass('text-success')

//   // clear (reset) all of the forms
//   $('form').trigger('reset')

//   $('.gameNotYet').hide()
//   $('.gameStarted').show()

//   console.log('responseData is ', responseData)
// }

const updateGameFailure = function () {
  console.log('update game failure')
}
//   $('#error-message').text('Logged in unsuccessfully!').fadeOut(5000)

//   // remove existing classes, then add a green text success class from bootstrap
//   $('error-message').removeClass()
//   $('error-message').addClass('text-danger')

//   console.error('error is ', error)
// }

const oWins = function () {
  $('#ui-display').hide()
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-primary')
  $('#ui-display').text('O Wins!').fadeIn(500)
  // $('#ui-display').fadeOut(5000)
}

const xWins = function () {
  $('#ui-display').hide()
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-danger')
  $('#ui-display').text('X Wins!').fadeIn(500)
  // $('#ui-display').fadeOut(5000)
}

const draw = function () {
  $('#ui-display').hide()
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-secondary')
  $('#ui-display').text('Tie!').fadeIn(500)
  // $('#ui-display').fadeOut(5000)
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
  updateGameFailure,
  oWins,
  xWins,
  draw
  // indexGamesFailure,
  // indexGamesSuccess
}
