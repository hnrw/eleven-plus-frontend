export const setStripe = (stripeData) => {
  return {
    type: "SET_STRIPE",
    data: stripeData,
  }
}

const stripeReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_STRIPE":
      return action.data
    default:
      return state
  }
}

export default stripeReducer
