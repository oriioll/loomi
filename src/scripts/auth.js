let authType = "";
const form = document.getElementById('loginForm');
//Transform text when eye svg is clicked
document.getElementById('seePassword').addEventListener('click', ()=> {
    const inputPassword = document.getElementById('password');
    if (inputPassword.type == 'text') {
        inputPassword.type = 'password'
    } else {
        inputPassword.type = 'text'
    }
})

form.addEventListener('submit', function(event) {
    event.preventDefault();
})

//Change form depending if its login or sign yp

const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');
const emailDiv = document.getElementById('emailContainer');
const passwordDiv = document.getElementById('passwordContainer');
const usernameDiv = document.getElementById('usernameContainer');
const submitBtn = document.getElementById('submitBtn');

//Hide username by default
usernameDiv.style.display = 'none';

signInBtn.addEventListener('click', ()=> {
    //Remove and add classes for styles
    signUpBtn.classList.remove('active');
    signInBtn.classList.add('active');
    //Hide username div
    usernameDiv.style.display = 'none';
    //Change btn text
    submitBtn.textContent = 'Sign In';
})

signUpBtn.addEventListener('click', ()=> {
    //Remove and add classes for styles
    signInBtn.classList.remove('active');
    signUpBtn.classList.add('active');
    //Show username div
    usernameDiv.style.display = 'block';
    //Change btn text
    submitBtn.textContent = 'Sign Up';
})