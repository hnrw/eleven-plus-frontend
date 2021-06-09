import React, { useState, useEffect } from "react"
import {
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  Paper,
} from "@material-ui/core"
import { useDispatch } from "react-redux"
import { Alert } from "@material-ui/lab"
import { useHistory, Link } from "react-router-dom"
import wave from "../../assets/wave.png"
import userService from "../../services/userService"
import stripeService from "../../services/stripeService"
import { setUser } from "../../reducers/userReducer"

const paper = {
  marginTop: 20,
  paddingTop: 20,
  paddingBottom: 20,
  width: 280,
  textAlign: "center",
  cursor: "pointer",
}

const styles = {
  paper: { ...paper, border: "2px solid white" }, // invisible border preserve space
  activePaper: { ...paper, border: "2px solid #303F9F" },
}

const RegisterForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [savedQuestion, setSavedQuestion] = useState(null)
  const [requestUser, setRequestUser] = useState(null)
  const [monthly, setMonthly] = useState(true)
  document.title = "Waterfront - sign up"

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
    const password = event.target.password.value

    if (!(email && name && password)) {
      showError("Please complete your details")
      return
    }

    if (password.length < 3) {
      showError("password must be at least 8 characters")
      return
    }

    await stripeService.checkout({
      item: monthy ? "27" : "270",
      email,
      parentName: name,
      password,
    })
    // try {
    //   const userResponse = await stripeService.checkout({
    //     email,
    //     parentName: name,
    //     password,
    //   })

    //   // dispatch(setUser(userResponse))
    //   // history.push(`/home`)
    // } catch (err) {
    //   const serverError = err.response && err.response.data.error
    //   if (serverError === "email already in use") {
    //     showError("email already in use")
    //     return
    //   }

    //   showError("unexpected error")
    // }
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
              src={wave}
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
                <Typography variant="subtitle2">Parent's Email</Typography>
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
                <Typography variant="subtitle2">Parent's Name</Typography>
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
              <Typography variant="subtitle2">
                Which plan works best for you?
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Paper
                  onClick={() => setMonthly(true)}
                  style={monthly ? styles.activePaper : styles.paper}
                >
                  <Typography>Monthly</Typography>
                  <Typography>£47 / month</Typography>
                </Paper>
                <Paper
                  onClick={() => setMonthly(false)}
                  style={!monthly ? styles.activePaper : styles.paper}
                >
                  <Typography>Annual (2 months free)</Typography>
                  <Typography>£39 / month</Typography>
                </Paper>
              </div>

              <div style={{ marginTop: 15, marginBottom: 45 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Next step
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
