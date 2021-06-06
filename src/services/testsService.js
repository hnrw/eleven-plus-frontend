import axios from "axios"
const baseUrl = process.env.REACT_APP_API_URL
const url = `${baseUrl}/tests`

const getTest = async () => {
  const response = await axios.get(url)
  return response.data
}

requestUser.getQuestions.map(async (q) => {
  await questionService.createQuestion(
    q.content,
    q.fromUser.id,
    savedUser.username,
    q.date
  )
})

export default { getTest }
