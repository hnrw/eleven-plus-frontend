import React, { useState } from "react"
import {
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@material-ui/core"
import { useHistory, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Alert } from "@material-ui/lab"
import loginService from "../services/loginService"
import { setUser } from "../reducers/userReducer"

const LoginForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [error, setError] = useState(null)

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
    const password = event.target.password.value
    try {
      const user = await loginService.login({
        email,
        password,
      })
      dispatch(setUser(user))
      history.push(`/`)
    } catch (err) {
      const serverError = err?.response?.data?.error
      if (serverError === "invalid email or password") {
        showError("invalid email or password", 3000)
      } else {
        showError("an unexpected error occurred", 3000)
      }
    }
  }

  const itemStyle = {
    marginTop: 5,
    marginBottom: 5,
  }

  const testing = async (email) => {
    const user = await loginService.login({
      email,
      password: "123",
    })
    dispatch(setUser(user))
    history.push(`/`)
  }

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      {process.env.NODE_ENV === "development" && (
        <>
          <div>
            <Button
              variant="outlined"
              onClick={() => testing("pannicope@gmail.com")}
            >
              pannicope@gmail.com
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              onClick={() => testing("henry@henrywu.co.uk")}
            >
              henry@henrywu.co.uk
            </Button>
          </div>
          <div>
            <Button variant="outlined" onClick={() => testing("t@teacher.com")}>
              teacher
            </Button>
          </div>
        </>
      )}
      <Grid container style={{ marginTop: 30 }}>
        <Grid item sm={4} xs={2} />
        <Grid item sm={4} xs={8}>
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}
            >
              Log in
            </Typography>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  variant="outlined"
                  type="email"
                  label="Email"
                  name="email"
                  size="small"
                  style={itemStyle}
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  variant="outlined"
                  type="password"
                  label="Password"
                  name="password"
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
                  Login
                </Button>
              </div>
            </form>
            <Typography variant="body2" style={{ textAlign: "center" }}>
              <Link to="/forgot-password">Forgot password?</Link> ·{" "}
              <Link to="/signup">Sign up for an account</Link>
            </Typography>
          </Container>
        </Grid>
        <Grid item sm={4} xs={2} />
      </Grid>
    </div>
  )
}

export default LoginForm
