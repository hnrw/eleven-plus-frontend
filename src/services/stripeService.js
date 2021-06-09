import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"

const stripePublic = process.env.REACT_APP_STRIPE_PUBLIC
const api = process.env.REACT_APP_API

const stripePromise = loadStripe(stripePublic)

const checkout = async (data) => {
  // Get Stripe.js instance
  const stripe = await stripePromise

  const { item, email, password, parentName } = data

  // Call your backend to create the Checkout Session
  const checkoutData = {
    item,
    email,
    password,
    parentName,
  }
  const response = await axios.post(`${api}/checkout`, checkoutData)

  const session = response.data

  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  })

  if (result.error) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  }
}

export default {
  checkout,
}
