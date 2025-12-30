
//Transform text when eye svg is clicked
alterPassword()

//Change form depending if its login or sign up
//VARIABLES
let authType = "signIn";
const form = document.getElementById('loginForm');
const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');
const emailDiv = document.getElementById('emailContainer');
const passwordDiv = document.getElementById('passwordContainer');
const usernameDiv = document.getElementById('usernameContainer');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

//Hide username by default
usernameDiv.style.display = 'none';

//CHANGE LOGIN IN SIGN UP MENUS
signInBtn.addEventListener('click', ()=> {
    authType = 'signIn';
    //Remove and add classes for styles
    signUpBtn.classList.remove('active');
    signInBtn.classList.add('active');
    //Hide username div
    usernameDiv.style.display = 'none';
    //Change btn text
    submitBtn.textContent = 'Sign In';
})

signUpBtn.addEventListener('click', ()=> {
    authType = 'signUp';
    //Remove and add classes for styles
    signInBtn.classList.remove('active');
    signUpBtn.classList.add('active');
    //Show username div
    usernameDiv.style.display = 'block';
    //Change btn text
    submitBtn.textContent = 'Sign Up';
})

form.addEventListener('input', ()=> {
    //Change submit Btn and check empty values
    if (isEmpty()) {
        submitBtn.classList.add('btnNotReady');
        submitBtn.classList.remove('btnReady');
    } else {
        submitBtn.classList.add('btnReady');
        submitBtn.classList.remove('btnNotReady');
    }
})

form.addEventListener('submit', function(event) {
    event.preventDefault();

})


function alterPassword() {
    document.getElementById('seePassword').addEventListener('click', ()=> {
    const inputPassword = document.getElementById('password');
    if (inputPassword.type == 'text') {
        inputPassword.type = 'password'
    } else {
        inputPassword.type = 'text'
    }
})
}


function isEmpty() {
    let isEmpty = true;
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
         isEmpty = true;
    } else {
        isEmpty = false;
    }

    if(authType == 'signUp') {
        if(usernameInput.value.trim() === '') {
            isEmpty = true;
        }
    }
    //Change button styles
    if (isEmpty) {
        return true;
    } else {
        return false;
    }
}