/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

export function validatePassword() {
  const password_signup = document.getElementById('passwordSignup');
  const confirm_password_signup = document.getElementById(
    'passwordConfirmSignup'
  );
  if (password_signup.value != confirm_password_signup.value) {
    confirm_password_signup.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password_signup.setCustomValidity('');
  }
}

export const signup = async (
  name,
  email,
  password,
  passwordConfirm,
  role,
  photo
) => {
  try {
    const result = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
        role,
        photo,
      },
    });

    if (result.data.status === 'success') {
      showAlert('success', 'Account Created Successfully');

      window.setTimeout(() => {
        location.assign('/');
      }, 500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
