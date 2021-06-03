import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import testReducer from "./reducers/testReducer"

const reducer = combineReducers({
  tests: testReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
