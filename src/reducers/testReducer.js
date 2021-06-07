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

const testReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_TEST":
      return action.test
    case "SELECT_OPTION":
      return {
        ...state,
        problems: state.problems.map((p) =>
          p.question === action.question ? { ...p, selected: action.option } : p
        ),
      }
    default:
      return state
  }
}

export default testReducer
