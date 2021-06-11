import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import userReducer from "./reducers/userReducer"
import testReducer from "./reducers/testReducer"
import mobileReducer from "./reducers/mobileReducer"
import profileReducer from "./reducers/profileReducer"

const reducer = combineReducers({
  user: userReducer,
  test: testReducer,
  mobile: mobileReducer,
  profile: profileReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
