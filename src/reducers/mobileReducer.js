export const setMobile = () => {
  return {
    type: "SET_MOBILE",
    mobile: true,
  }
}

const mobileReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_MOBILE":
      return action.mobile
    default:
      return state
  }
}

export default mobileReducer
