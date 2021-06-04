import React, { useState, useEffect } from "react"
import {
  Typography,
  Button,
  Container,
  TextField,
  Grid,
} from "@material-ui/core"
import { useDispatch } from "react-redux"
import { Alert } from "@material-ui/lab"
import { useHistory, Link } from "react-router-dom"
import logo from "../assets/logo.png"
import userService from "../services/userService"
import { setUser } from "../reducers/userReducer"

const RegisterForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [savedQuestion, setSavedQuestion] = useState(null)
  const [requestUser, setRequestUser] = useState(null)
  document.title = "Backstage - sign up"

  useEffect(() => {
    const storedQuestionJSON = window.sessionStorage.getItem("savedQuestion")

    if (storedQuestionJSON) {
      const storedQuestion = JSON.parse(storedQuestionJSON)
      setSavedQuestion(storedQuestion)
    }

    const storedRequestUserJSON = window.localStorage.getItem("requestUser")

    if (storedRequestUserJSON) {
      const storedRequestUser = JSON.parse(storedRequestUserJSON)
      setRequestUser(storedRequestUser)
    }
  }, [])

  const showError = (message, duration = 3000) => {
    setError(message)
    setTimeout(() => {
      setError(null)
    }, duration)
    return null
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const name = event.target.name.value
    const username = event.target.username.value
    const password = event.target.password.value

    if (!(email && name && username && password)) {
      showError("Please complete your details")
      return
    }

    if (password.length < 3) {
      showError("password must be at least 8 characters")
      return
    }

    try {
      const userResponse = await userService.newUser(
        email,
        name,
        username,
        password,
        requestUser
      )

      dispatch(setUser(userResponse))

      if (savedQuestion) {
        history.push(`/${savedQuestion.username}`)
        return
      }

      if (requestUser) {
        history.push(`/${username}/unanswered`)
        localStorage.removeItem("requestUser")
        // gmail app needs reload to display questions
        location.reload()
        return
      }

      history.push(`/${userResponse.username}`)
    } catch (err) {
      const serverError = err.response && err.response.data.error
      if (serverError === "email already in use") {
        showError("email already in use")
        return
      }
      if (serverError === "username already in use") {
        showError("username already in use")
        return
      }

      showError("unexpected error")
    }
  }

  const itemStyle = {
    marginTop: 5,
    marginBottom: 5,
  }
  return (
    <Container>
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container style={{ marginTop: 30 }}>
        <Grid item sm={4} xs={2} />
        <Grid item sm={4} xs={8}>
          <Container maxWidth="md">
            <img
              src={logo}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                width: 40,
              }}
              alt="logo"
            />
            <Typography
              variant="h5"
              style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}
            >
              {savedQuestion ? (
                <>
                  Create an account to send <u>{savedQuestion.name}</u> your
                  question
                </>
              ) : (
                "Create your account"
              )}
            </Typography>

            <form onSubmit={handleSubmit}>
              <div>
                <Typography variant="subtitle2">Email</Typography>
                <TextField
                  variant="outlined"
                  type="email"
                  placeholder="tommy@theroom.com"
                  name="email"
                  size="small"
                  style={itemStyle}
                  fullWidth
                />
              </div>
              <div>
                <Typography variant="subtitle2">Name</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Tommy Wiseau"
                  name="name"
                  size="small"
                  style={itemStyle}
                  fullWidth
                />
              </div>
              <div>
                <Typography variant="subtitle2">Username</Typography>
                <TextField
                  variant="outlined"
                  placeholder="twiseua"
                  name="username"
                  size="small"
                  style={itemStyle}
                  fullWidth
                />
              </div>
              <div>
                <Typography variant="subtitle2">Password</Typography>
                <TextField
                  variant="outlined"
                  type="password"
                  name="password"
                  placeholder="********"
                  size="small"
                  style={itemStyle}
                  fullWidth
                />
              </div>

              <div style={{ marginTop: 15, marginBottom: 45 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Sign up
                </Button>
              </div>
            </form>
            <Typography variant="body2" style={{ textAlign: "center" }}>
              Already have an account? <Link to="/login">Log in here</Link>
            </Typography>
          </Container>
        </Grid>
        <Grid item sm={4} xs={2} />
      </Grid>
    </Container>
  )
}

export default RegisterForm
