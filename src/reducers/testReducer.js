export const setTest = (test) => {
  return {
    type: "SET_TEST",
    data: test,
  }
}

export const selectOption = (state, question, option) => {
  const newState = {
    ...state,
    problems: state.problems.map((p) =>
      p.question === question ? { ...p, selected: option } : p
    ),
  }
  window.localStorage.setItem("waterfrontTest", JSON.stringify(newState))

  return {
    type: "SET_TEST",
    data: newState,
  }
}

export const clearTest = () => {
  return {
    type: "SET_TEST",
    data: null,
  }
}

const testReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_TEST":
      return action.data
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
