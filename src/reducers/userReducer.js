export const clearUser = () => {
  console.log(null)
}

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "":
      return action.data
    default:
      return state
  }
}

export default userReducer
