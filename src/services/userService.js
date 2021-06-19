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

const getStripe = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(`${baseUrl}/stripe`, config)
  return response.data
}

const createUser = async (email, parentName, password) => {
  const object = {
    email,
    parentName,
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
  createUser,
  getStripe,
  fetchUsers,
  searchUsers,
  editUser,
  deleteUser,
}
