import { setUser } from "../reducers/userReducer"

const autoLogin = (dispatch) => {
  let user
  const loggedUserJSON = window.localStorage.getItem("loggedWaterfrontUser")

  if (loggedUserJSON) {
    user = JSON.parse(loggedUserJSON)
    dispatch(setUser(user))
  }
}

export default autoLogin
