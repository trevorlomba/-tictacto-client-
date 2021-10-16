
'use strict'
// require the store object. we will use it to share data between different files
const store = require('../store')

const signUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#ui-display').text('signed up successfully!').fadeOut(5000)

  // remove existing classes, then add a green text success class from bootstrap
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign up failed').fadeOut(5000)

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

const signInSuccess = function (responseData) {
  // we are going to add the 'user' we got back in our response's data to the 'store' object so we can accses the 'user's' token later in the api.js
  store.user = responseData.user
  console.log('store is', store)

  // tell the user it was successful
  $('#ui-display').text('logged in successfully!').fadeOut(5000)

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
  $('#error-message').text('Logged in unsuccessfully!').fadeOut(5000)

  // remove existing classes, then add a green text success class from bootstrap
  $('error-message').removeClass()
  $('error-message').addClass('text-danger')

  console.error('error is ', error)
}

const signOutSuccess = function (responseData) {
  // we are going to add the 'user' we got back in our response's data to the 'store' object so we can accses the 'user's' token later in the api.js

  // tell the user it was successful
  $('#ui-display').text('logged out successfully!').fadeOut(5000)

  // remove existing classes, then add a green text success class from bootstrap
  $('#ui-display').removeClass()
  $('#ui-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  $('.gameNotYet').show()
  $('.gameStarted').hide()
}

const signOutFailure = function () {
  $('#error-message').text('Logged out unsuccessfully!').fadeOut(5000)
  // remove existing classes, then add a green text success class from bootstrap
  $('error-message').removeClass()
  $('error-message').addClass('text-danger')
}

const newGameSuccess = function (responseData) {
  // // we are going to add the 'user' we got back in our response's data to the 'store' object so we can accses the 'user's' token later in the api.js
  store.game = responseData.game
  console.log('store is', store)

  console.log('responseData is ', responseData)
}

const newGameFailure = function (error) {
  console.error('error is ', error)
}

const indexGamesSuccess = function (responseData) {
  // we are going to add the 'user' we got back in our response's data to the 'store' object so we can accses the 'user's' token later in the api.js
  console.log('store is', store)
  console.log(responseData)
  console.log('responseData is ', responseData)
}

const indexGamesFailure = function (error) {
  console.error('error is ', error)
}

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
  indexGamesFailure,
  indexGamesSuccess
}
