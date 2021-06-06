import axios from "axios"

const api = process.env.REACT_APP_API
const baseUrl = `${api}/users`

const getProfile = async (username) => {
  const response = await axios.get(`${baseUrl}/${username}`)
  return response.data
}

const getData = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`${baseUrl}/data`, config)
  return response.data
}

const searchUsers = async (searchParam) => {
  const response = await axios.get(`${baseUrl}/search/${searchParam}`)
  return response.data
}

const fetchUsers = async (token) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  }
  const response = await axios.get(`${baseUrl}`, config)
  return response.data
}

const newUser = async (email, name, password) => {
  const object = {
    email,
    name,
    password,
  }

  const response = await axios.post(baseUrl, object)
  return response.data
}

const editUser = async (token, userId, dataFields) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const data = {
    userId,
    data: dataFields,
  }

  const response = await axios.put(baseUrl, data, config)
  return response.data
}

const deleteUser = async (token, deleteId) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  }

  const response = await axios.delete(`${baseUrl}/${deleteId}`, config)
  return response.data
}

export default {
  getProfile,
  getData,
  newUser,
  fetchUsers,
  searchUsers,
  editUser,
  deleteUser,
}
