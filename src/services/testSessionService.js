import axios from "axios"

const api = process.env.REACT_APP_API
const url = `${api}/test-sessions`

const getTestSession = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(url, config)
  return response.data
}

const createTestSession = async (data) => {
  const { token, testId } = data
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const body = {
    testId,
  }

  const response = await axios.post(url, body, config)
  return response.data
}

export default {
  getTestSession,
  createTestSession,
}
