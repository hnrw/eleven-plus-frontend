import axios from "axios"

const api = process.env.REACT_APP_API
const url = `${api}/profile`

const fetchProfiles = async () => {
  const response = await axios.get(url)
  return response.data
}

const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(url, config)
  return response.data
}

// in the future, allow users controller to update any info and check it's from admin
// then create profile router that only allows editing profile info
const updateProfile = async (data) => {
  const { token, profileData } = data
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(`${api}/users`, profileData, config)
  return response.data
}

export default {
  fetchProfiles,
  getProfile,
  updateProfile,
}
