import axios from "axios"
const baseUrl = process.env.REACT_APP_API
const url = `${baseUrl}/tests`

const getTest = async (id) => {
  const response = await axios.get(`${url}/${id}`)
  return response.data
}

const fetchTests = async (id) => {
  const response = await axios.get(url)
  return response.data
}

const createTest = async (test) => {
  const response = await axios.post(url, test)
  return response.data
}

export default { getTest, fetchTests, createTest }
