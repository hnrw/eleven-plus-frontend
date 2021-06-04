import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import testsReducer from "./reducers/testsReducer"

const reducer = combineReducers({
  test: testsReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
