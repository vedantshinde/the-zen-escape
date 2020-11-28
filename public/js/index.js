/* eslint-disable */

import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login';
import { validatePassword, signup } from './signup';
import { updateSettings } from './updateSettings';
import { bookTour } from './stripe';
import { showAlert } from './alerts';

// DOM Elements
const mapBox = document.getElementById('map');

const password_signup = document.getElementById('passwordSignup');
const confirm_password_signup = document.getElementById(
  'passwordConfirmSignup'
);

const loginForm = document.querySelector('#loginForm');
const signupForm = document.querySelector('#signupForm');

const logOutBtn = document.querySelector('.nav__el--logout');

const updateSettingsForm = document.querySelector('#updateSettingsForm');
const updatePasswordForm = document.querySelector('#updatePasswordForm');

const bookBtn = document.getElementById('book-tour');

// Delegation
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (password_signup) {
  password_signup.onchange = validatePassword;
  confirm_password_signup.onkeyup = validatePassword;
}

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const passwordSignup = document.getElementById('passwordSignup').value;
    const passwordConfirmSignup = document.getElementById(
      'passwordConfirmSignup'
    ).value;
    const role = 'user';
    const photo = 'default.jpg';

    signup(name, email, passwordSignup, passwordConfirmSignup, role, photo);
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', logout);
}

if (updateSettingsForm) {
  updateSettingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    updateSettings(form, 'data');
  });
}

if (updatePasswordForm) {
  updatePasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    updateSettings({ passwordCurrent, password, passwordConfirm }, 'password');
  });
}

if (bookBtn)
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });

const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 10);
