import axios from "axios"

const api = process.env.REACT_APP_API
const baseUrl = `${api}/login`

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }
