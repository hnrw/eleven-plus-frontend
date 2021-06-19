export const setProfile = (profile) => {
  return {
    type: "SET_PROFILE",
    data: profile,
  }
}

export const clearProfile = () => {
  return {
    type: "SET_PROFILE",
    data: null,
  }
}

export const updateProfile = (profile) => {
  return {
    type: "UPDATE_PROFILE",
    data: profile,
  }
}

const profileReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return action.data
    case "UPDATE_PROFILE":
      return { ...state, ...action.data }
    default:
      return state
  }
}

export default profileReducer
