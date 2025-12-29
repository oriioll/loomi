let authType = "";

//Transform text when eye svg is clicked
document.getElementById('seePassword').addEventListener('click', ()=> {
    const inputPassword = document.getElementById('password');
    if (inputPassword.type == 'text') {
        inputPassword.type = 'password'
    } else {
        inputPassword.type = 'text'
    }
})