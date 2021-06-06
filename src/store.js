import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import userReducer from "./reducers/userReducer"
import testReducer from "./reducers/testReducer"

const reducer = combineReducers({
  user: userReducer,
  test: testReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
