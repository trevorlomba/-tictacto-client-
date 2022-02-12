'use strict'

// require the getFormFields function, to get data from forms
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
// require out ui functions to update the page
const ui = require('./ui')

const onSignUp = function (event) {
  // prevent default action of refrewshing the page
  event.preventDefault()

  // require api auth functions
  // event.target is the form that caused the 'submit' event

  const form = event.target

  // get the data from form element
  const formData = getFormFields(form)

  // make a POST / sign up request, pass it the email/password confirmation
  api
    .signUp(formData)
  // if sign up request is successsful, run the signUpSuccess function
    .then(ui.signUpSuccess)
  // if sign up request incurs an eroor, run the signUpFailure function
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // prevent default action of refrewshing the page
  event.preventDefault()
  // require api auth functions
  // event.target is the form that caused the 'submit' event

  const form = event.target

  // get the data from form element
  const formData = getFormFields(form)

  // make a POST / sign up request, pass it the email/password confirmation
  api
    .signIn(formData)
  // if sign up request is successsful, run the signUpSuccess function
    .then(ui.signInSuccess)
  // if sign up request incurs an eroor, run the signUpFailure function
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  // prevent default action of refrewshing the page
  // require api auth functions
  event.preventDefault()
  // event.target is the form that caused the 'submit' event
  // make a POST / sign up request, pass it the email/password confirmation
  api
    .signOut()
  // if sign up request is successsful, run the signUpSuccess function
    .then(ui.signOutSuccess)
  // if sign up request incurs an eroor, run the signUpFailure function
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  api
    .newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onUpdateGame = function (ind, value) {
  event.preventDefault()
  api.updateGame(ind, value)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onIndexGames = function (event) {
  event.preventDefault()
  console.log('onIndexGames Running')
  api
    .indexGames()
    .then(ui.indexGamesSuccess)
    .catch(ui.indexGamesFailure)
}

// export event handler functions, so we can use them in app.ja
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onUpdateGame,
  onIndexGames
}
