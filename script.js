const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const passwordLink = document.querySelector('.password-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginLink = document.getElementById('link-access');

loginLink.onclick = (event) => {
    event.preventDefault();
    wrapper.classList.remove('active-register', 'active-password');
};

loginLink.onclick = () => {
    console.log("Accediendo...");
    wrapper.classList.remove('active-register');
    wrapper.classList.remove('active-password');
};

registerLink.onclick = () => {
    wrapper.classList.add('active-register');
    wrapper.classList.remove('active-password');
    wrapper.classList.remove('active'); 
};

passwordLink.onclick = () => {
    wrapper.classList.add('active-password');
    wrapper.classList.remove('active-register');
    wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
};
