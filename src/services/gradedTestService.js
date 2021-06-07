import axios from "axios"
const baseUrl = process.env.REACT_APP_API
const url = `${baseUrl}/graded-tests`

const getTest = async ({ data }) => {
  const { token, testId } = data

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`${baseUrl}/${testId}`, config)
  return response.data
}

export default { getTest }
