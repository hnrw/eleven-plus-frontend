import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import userReducer from "./reducers/userReducer"
import testReducer from "./reducers/testReducer"
import mobileReducer from "./reducers/mobileReducer"

const reducer = combineReducers({
  user: userReducer,
  test: testReducer,
  mobile: mobileReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
