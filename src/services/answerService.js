import axios from "axios"
const baseUrl = process.env.REACT_APP_API
const url = `${baseUrl}/answers`

const submitAnswer = async (data) => {
  const { token, problemId, selected } = data
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const body = {
    problemId,
    selected,
  }

  const response = await axios.post(url, body, config)
  return response.data
}

export default {
  submitAnswer,
}
