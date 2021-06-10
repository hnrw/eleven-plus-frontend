import axios from "axios"

const api = process.env.REACT_APP_API
const baseUrl = `api/bounced-user`

const createBouncedUser = async (data) => {
  const { email, parentName } = data
  const response = await axios.post({ email, parentName })

  return response.data
}

export default {
  createBouncedUser,
}
