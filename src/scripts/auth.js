
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

    //Change submit btn styles
    if(isValid()) {
        submitBtn.classList.add('btnReady');
        submitBtn.classList.remove('btnNotReady');
    } else {
        submitBtn.classList.add('btnNotReady');
        submitBtn.classList.remove('btnReady');
    }
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

    //Only in sign up part
    if(authType === 'signUp') {
        if(isValid()) {
            submitBtn.classList.add('btnReady');
            submitBtn.classList.remove('btnNotReady');
        } else {
            submitBtn.classList.add('btnNotReady');
            submitBtn.classList.remove('btnReady');
        }
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

function isValid() {
    let isValid = true
    //Email regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Password regular expresion (8 caracs and numbers)
    const passwordRegex = /^(?=.*\d).{8,}$/;

    //Full name regular expression (Only letters)
    const nameRegex = /^[A-Za-zÁ-ÿ\s]+$/;

    if(!emailRegex.test(emailInput.value.trim())) {
        console.log ('Invalid Email');
        isValid = false;
    } 
    if(!nameRegex.test(usernameInput.value.trim())) {
        console.log ('Invalid Name');
        isValid = false;
    }
    if(!passwordRegex.test(passwordInput.value.trim())) {
        console.log ('Invalid password');
        isValid = false;
    } 

    return isValid
}