import axios from "axios"

const api = process.env.REACT_APP_API
const baseUrl = `${api}/passwords`

const resetPassword = async (token, id, newPassword) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  }

  const object = {
    id,
    newPassword,
  }

  const response = await axios.put(`${baseUrl}/reset-password`, object, config)
  return response.data
}

const updatePassword = async (currentPassword, newPassword, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  }

  const object = {
    currentPassword,
    newPassword,
  }

  const response = await axios.put(`${baseUrl}/password`, object, config)
  return response.data
}

export default { resetPassword, updatePassword }
