import axios from "axios"

const baseUrl = process.env.REACT_APP_API
const url = `${baseUrl}/graded-tests`

const fetchTests = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(url, config)
  return response.data
}

const getTest = async (data) => {
  const { token, testId } = data

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`${url}/${testId}`, config)
  return response.data
}

export default { fetchTests, getTest }
