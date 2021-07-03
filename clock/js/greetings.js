const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input')
const greeting = document.querySelector('#greeting')
//const link = document.querySelector('a')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event) {
  event.preventDefault() //preventDefault : 어떤 기본 행동이든지 발생되지 않도록 막음
  //console.log(loginInput.value)
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username) //setItem, removeItem
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}
/*
function handleLinClick(event) {
  event.preventDefault()
  console.dir(event)
  alert('clicked!')
}
*/
//link.addEventListener('click', handleLinClick)

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  // show the greetings
  paintGreetings(savedUsername)
}
