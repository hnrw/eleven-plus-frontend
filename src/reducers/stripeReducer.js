export const setStripe = (stripeData) => {
  return {
    type: "SET_STRIPE",
    data: stripeData,
  }
}

export const clearStripe = () => {
  return {
    type: "SET_STRIPE",
    data: null,
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
