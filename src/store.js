import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import userReducer from "./reducers/userReducer"
import testsReducer from "./reducers/testsReducer"

const reducer = combineReducers({
  user: userReducer,
  test: testsReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
