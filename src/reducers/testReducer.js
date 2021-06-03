export const addAnswer = (answer) => {
  return {
    type: "ADD_ANSWER",
    answer,
  }
}

const answerReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return state.concat(action.answer)
    case "RESET_ANSWERS":
      return []
    default:
      return state
  }
}

export default answerReducer
