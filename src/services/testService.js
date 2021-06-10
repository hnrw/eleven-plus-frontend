import axios from "axios"

const baseUrl = process.env.REACT_APP_API
const url = `${baseUrl}/tests`

const fetchTests = async () => {
  const response = await axios.get(url)
  return response.data
}

const getTest = async (id) => {
  const response = await axios.get(`${url}/${id}`)
  return response.data
}

const createTest = async (test) => {
  const response = await axios.post(url, test)
  return response.data
}

const submitTest = async (data) => {
  const { testId, answers, token } = data
  const body = { testId, answers }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(`${url}/submit`, body, config)
  return response.data
}

const deleteTest = async (data) => {
  const { token, id } = data
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(`${url}/${id}`, config)
  return response.data
}

export default { getTest, fetchTests, createTest, submitTest, deleteTest }
