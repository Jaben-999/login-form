const loginForm = document.querySelector('#login-form');
const successScreen = document.querySelector('#screen')
const loginContent = document.querySelector('#login-content')
const AddError = document.querySelector('#AddError')


window.addEventListener('click', function() {
  AddError.classList.remove('show')
})
loginForm.addEventListener('submit', async function(event) {  
  event.preventDefault();
  const login = document.getElementById('username').value;  
  const password = document.getElementById('password').value; 
  const url = "http://localhost:3002/api/login";
  
  try {
    const response = await fetch(url, {  
    method: 'POST',  
    headers: {  
      'Content-Type': 'application/json'  
    },  
    body: JSON.stringify({  
      login: login,  
      password: password  
    })  
  })  
  if (!response.ok) {
    throw new Error(`Ошибка сервера: ${response.status}`)
  }
  const json = await response.json();
  console.log("Успех:", JSON.stringify(json));
  success();
} catch (error) {
  console.error("Ошибка:", error);
  notSuccess();
}
});  

function success() {
  if (!loginContent || !successScreen) return
loginContent.classList.add('hide')
setTimeout(() => {
    loginContent.remove()
    successScreen.classList.add('show')
}, 400)
}

function notSuccess() {
  AddError.classList.add('show')
}