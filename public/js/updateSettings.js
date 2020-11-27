import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/update-my-password'
        : '/api/v1/users/update-me';

    const result = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (result.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} Updated Successfully!`);
      window.setTimeout(() => {
        location.assign(location);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
