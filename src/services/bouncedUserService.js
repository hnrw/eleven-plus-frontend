import axios from "axios"

const api = process.env.REACT_APP_API
const url = `${api}/bounced-users`

const createBouncedUser = async (data) => {
  const { email, parentName } = data
  const response = await axios.post(url, { email, parentName })

  return response.data
}

export default {
  createBouncedUser,
}
