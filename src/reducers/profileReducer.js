export const setProfile = (profile) => {
  return {
    type: "SET_PROFILE",
    data: profile,
  }
}

const profileReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return action.data
    default:
      return state
  }
}

export default profileReducer
