
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
const errorMessage = document.getElementById('errorMessage');

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
    errorMessage.style.display = 'none';
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
    //Reset all values
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    updateBtn(submitBtn, false);
})

/**
 * Event of typing in the input
 */
form.addEventListener('input', ()=> {
    //Change submit Btn and check empty values
    if (isEmpty()) {
        updateBtn(submitBtn, false);
    } else {
        updateBtn(submitBtn, true);
    }

    //Only in sign up part
    if(authType === 'signUp') {
        showUiError(generateErrorMessage(nameValid(usernameInput.value.trim()), emailValid(emailInput.value.trim()), passwordValid(passwordInput.value.trim())))
    } else {
        //Remove all error classes form signing up and errorMessage
        errorMessage.style.display = 'none';
        errorMessage.innerText = '';
        passwordDiv.classList.remove('errorTypeInput');
        emailDiv.classList.remove('errorTypeInput');
        usernameDiv.classList.remove('errorTypeInput');
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

/**
 * Function that checks if form input values are empty or not
 * @returns if values are empty or not
 */
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

/**
 * Function that checks if email is valid using a regex
 * @returns boolean depending if the email is valid
 */
function emailValid(email) {
    //Email regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        console.log ('Invalid Email');
        return false;
    }else {
        return true;
    }
}

/**
 * Function that checks if password is valid using a regex
 * @returns boolean depending if the password is valid
 */
function passwordValid(password) {
    //Password regular expresion (8 caracs and numbers)
    const passwordRegex = /^(?=.*\d).{8,}$/;

    if(!passwordRegex.test(password)) {
        console.log ('Invalid password');
        return false;
    }else {
        return true;
    }
}

/**
 * Function that checks if name is valid using a regex
 * @returns boolean depending if the name is valid
 */
function nameValid(name) {
    //Full name regular expression (Only letters)
    const nameRegex = /^[A-Za-zÁ-ÿ\s]+$/;

    if(!nameRegex.test(name)) {
        console.log ('Invalid name');
        return false;
    }else {
        return true;
    }
}

/**
 * Function that generates an error message depending what the errors are
 * @param {*} name  function [nameValid()]
 * @param {*} email function [emailValid()]
 * @param {*} password function [passwordValid()]
 * @returns 
 */
function generateErrorMessage(name, email, password) {
    let errorArray = [];
    if(!name) {
        errorArray.push('Name should only contain letters');
    }
    if(!email) {
        errorArray.push('Invalid email address');
    }
    if(!password) {
        errorArray.push('Password: 8+ chars & 1 number');
    }
    return errorArray
}

/**
 * Function that updates all the UI based on the error in the form
 * @param {*} errorArray the array with all the error messages generated in [generateErrorMessage()]
 */
function showUiError(errorArray) {
    //Remove all error classes every time user types and then generate  again the errors
    usernameDiv.classList.remove('errorTypeInput');
    passwordDiv.classList.remove('errorTypeInput');
    emailDiv.classList.remove('errorTypeInput');
 if(errorArray.length === 0) {
    errorMessage.style.display = 'none';
    updateBtn(submitBtn, !isEmpty());

 } else {
    errorMessage.style.display = 'block'
    errorMessage.textContent = errorArray.join(', ')
    updateBtn(submitBtn, false);
    errorArray.forEach(element => {
        //Check which input is wrong
        if(element == 'Name should only contain letters') {
            usernameDiv.classList.add('errorTypeInput');
        } 
        if(element == 'Invalid email address') {
            emailDiv.classList.add('errorTypeInput');
        }
        if(element == 'Password: 8+ chars & 1 number') {
            passwordDiv.classList.add('errorTypeInput');
        }
    });
 }
}

/**
 * Function adds and removes classes from a button to style it making it look valid or unvalid
 * @param {*} button the button you want to style
 * @param {*} valid if you want it valid or unvalid
 */
function updateBtn(button, valid) {
    if(valid) {
        button.classList.add('btnReady');
        button.classList.remove('btnNotReady');
    } else {
        button.classList.add('btnNotReady');
        button.classList.remove('btnReady');
    }
}
