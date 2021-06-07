export const setResults = () => {
  
}

const resultsReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return action.data
    default:
      return state
  }
}

export default resultsReducer
