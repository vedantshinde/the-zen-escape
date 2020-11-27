/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51HridXEFD5r5oGCQEmDuf5FlAt9T9e2jBQabLtW6yx4344WsYbMTDJG4q7gX3tZw7LUF7YJnB1JMmJxSPVz8CVCN00jJCVpRjg'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get the checkout session from the endpoint/API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
