import axios from "axios"

const baseUrl = process.env.REACT_APP_API
const url = `${baseUrl}/graded-categories`

const getGradedCategories = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(url, config)
  return response.data
}
const getAverageGcs = async () => {
  const response = await axios.get(`${url}/average`)
  return response.data
}

export default {
  getGradedCategories,
  getAverageGcs,
}
