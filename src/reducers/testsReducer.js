export const setTest = (test) => {
  return {
    type: "SET_TEST",
    test,
  }
}

export const selectOption = (question, option) => {
  return {
    type: "SELECT_OPTION",
    question,
    option,
  }
}

const testsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TEST":
      return action.test
    case "SELECT_OPTION":
      return state.map((q) =>
        q.question === action.question ? { ...q, selected: action.option } : q
      )
    default:
      return state
  }
}

export default testsReducer
