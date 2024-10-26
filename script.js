import './app/firebase.js'
import './app/google.js'
import './app/facebook.js'
import './app/github.js'
const wrapper = document.getElementById('wrapper');
const btnPopup = document.getElementById('btnLogin-popup');
const iconClose = document.getElementById('icon-close');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const passwordForm = document.getElementById('password-form');


const registerLink = document.getElementById('register-link');
const passwordLink = document.getElementById('password-link');
const loginLinkRegister = document.getElementById('login-link-register');
const loginLinkPassword = document.getElementById('login-link-password');

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
    showForm('login');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
};


function showForm(form) {
    loginForm.style.display = form === 'login' ? 'block' : 'none';
    registerForm.style.display = form === 'register' ? 'block' : 'none';
    passwordForm.style.display = form === 'password' ? 'block' : 'none';
}

registerLink.onclick = (event) => {
    event.preventDefault();
    showForm('register');
};

passwordLink.onclick = (event) => {
    event.preventDefault();
    showForm('password');
};

loginLinkRegister.onclick = (event) => {
    event.preventDefault();
    showForm('login');
};

loginLinkPassword.onclick = (event) => {
    event.preventDefault();
    showForm('login');
};