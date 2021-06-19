import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import userReducer from "./reducers/userReducer"
import testReducer from "./reducers/testReducer"
import mobileReducer from "./reducers/mobileReducer"
import profileReducer from "./reducers/profileReducer"
import stripeReducer from "./reducers/stripeReducer"

const reducer = combineReducers({
  user: userReducer,
  test: testReducer,
  mobile: mobileReducer,
  profile: profileReducer,
  stripe: stripeReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
