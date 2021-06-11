import axios from "axios"

const api = process.env.REACT_APP_API
const baseUrl = `${api}/emails`

const requestPasswordEmail = async (email) => {
  const object = {
    email,
  }
  const response = await axios.post(`${baseUrl}/password`, object)
  return response.data
}

export default {
  requestPasswordEmail,
}
